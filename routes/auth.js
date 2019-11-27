import express from 'express';
import passport from 'passport';
import { ReservationUserComment } from '../models';

const router = express.Router();

router.post('/login', (req, res, next) => {
  // FIXME: locals 수정
  passport.authenticate('local', (authError, user, info) => {
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
      res.status(200).send();
    });
  })(req, res, next);
});

router.get('/email', (req, res) => {
  const email = req.isAuthenticated() ? req.user.email : null;
  res.send(email);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.status(200).send();
});

router.get('/edit/comments/:commentId', async (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(400).send('로그인하세요');
    }
    const exReservation = await ReservationUserComment.findOne({
      where: {
        id: req.params.commentId,
        reservation_email_id: req.user.id,
      },
    });
    if (!exReservation) {
      return res.status(400).send('리뷰 정보와 회원 정보가 일치하지 않습니다');
    }
    res.status(200).send();
  } catch (error) {
    console.error(error);
  }
});

export default router;
