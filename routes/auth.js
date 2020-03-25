const express = require('express');
const passport = require('passport');

const { isLoggedIn, confirmAPIRequest } = require('./middlewares');
const {
  ReservationUserComment,
  ReservationInfo,
  Product,
} = require('../models');

const router = express.Router();

router.post('/login', confirmAPIRequest, (req, res, next) => {
  passport.authenticate('local', (authError, user) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      res.status(400).send('예약이 등록되지 않은 회원입니다');
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.status(200).send();
    });
  })(req, res, next);
});

router.get('/email', confirmAPIRequest, (req, res) => {
  const email = req.isAuthenticated() ? req.user.email : null;
  res.send(email);
});

router.get('/logout', confirmAPIRequest, (req, res) => {
  req.logout();
  req.session.destroy();
  res.status(200).send();
});

router.get(
  '/writereview/:productId',
  confirmAPIRequest,
  isLoggedIn,
  async (req, res) => {
    const exReservations = await ReservationInfo.findAll({
      where: {
        reservation_email_id: req.user.id,
        product_id: req.params.productId,
        cancel_flag: 0,
      },
    });
    if (!exReservations.length) {
      return res.status(400).send('예약이 존재하지 않습니다');
    }
    for (const reservation of exReservations) {
      if (new Date(reservation.reservation_date) < new Date()) {
        const toReviewProduct = await Product.findOne({
          where: {
            id: reservation.product_id,
          },
        });
        return res.json({
          description: toReviewProduct.description,
          reservationInfoId: reservation.id,
        });
      }
    }
    return res.status(400).send('예약 작성기간이 아닙니다');
  },
);

router.get(
  '/edit/reservations/:reservationInfoId/comments',
  confirmAPIRequest,
  isLoggedIn,
  async (req, res) => {
    try {
      const exReservation = await ReservationUserComment.findOne({
        where: {
          reservation_info_id: req.params.reservationInfoId,
          reservation_email_id: req.user.id,
        },
      });
      if (!exReservation) {
        return res
          .status(400)
          .send('리뷰 정보와 회원 정보가 일치하지 않습니다');
      }
      return res.status(200).send();
    } catch (error) {
      console.error(error);
    }
  },
);

module.exports = router;
