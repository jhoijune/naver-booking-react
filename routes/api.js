const express = require('express');
const moment = require('moment-timezone');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const {
  sequelize,
  Sequelize,
  DisplayInfo,
  ReservationEmail,
  ReservationInfo,
  ReservationInfoPrice,
  ReservationUserComment,
  ReservationUserCommentImage,
  ProductPrice,
  FileInfo,
} = require('../models');
const { validImageType } = require('../src/js/common');
const { confirmAPIRequest, isLoggedIn } = require('./middlewares');

const router = express.Router();
moment.locale('ko');
const cache = {
  insertData(name, id, data, limit = 10) {
    if (this[name]) {
      if (this[name].list.length === limit) {
        const firstId = this[name].list.shift();
        delete this[name].data[firstId];
      }
      this[name].list.push(id);
      this[name].data[id] = data;
    } else {
      // init
      this[name] = { list: [], data: {} };
      this[name].list.push(id);
      this[name].data[id] = data;
    }
  },
  getData(name, id) {
    // isExist를 거쳐서 id가 있다고 가정
    const index = this[name].list.indexOf(id);
    this[name].list.splice(index, 1);
    this[name].list.push(id);
    return this[name].data[id];
  },
  isExist(name, id) {
    if (this[name].data[id]) {
      return true;
    }
    return false;
  },
  deleteData(name, id) {
    const index = this[name].list.indexOf(id);
    this[name].list.splice(index, 1);
    delete this[name].data[id];
  },
};

const uploadFolderPath = path.join(
  __dirname,
  '..',
  'public',
  'images',
  'uploads',
);

fs.readdir(uploadFolderPath, (error) => {
  if (error) {
    fs.mkdirSync(uploadFolderPath);
  }
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, uploadFolderPath);
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(
        null,
        path.basename(file.originalname, ext) + new Date().valueOf() + ext,
      );
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get('/temp', async (req, res) => {
  // API 테스트용
  try {
    const t = await FileInfo.findOne({
      where: {
        id: 209,
      },
    });
    console.log(t);
    res.send(t);
  } catch (error) {
    console.error(error);
  }
});

router.get('/products', confirmAPIRequest, async (req, res) => {
  try {
    if (cache.products) {
      res.json(cache.products);
    } else {
      const query =
        'SELECT display_info.id as displayInfoId,place_name as placeName,content as productContent,description as productDescription,product.id as productId,save_file_name as productImageUrl,product.category_id as categoryId from display_info INNER JOIN product ON display_info.product_id = product.id INNER JOIN product_image ON product.id = product_image.product_id INNER JOIN file_info ON product_image.file_id = file_info.id WHERE product_image.type = "th"';
      const [results] = await sequelize.query(query);
      cache.products = { items: results, totalCount: results.length };
      res.json(cache.products);
    }
  } catch (err) {
    console.error(err);
  }
});

router.get('/products/:displayInfoId', confirmAPIRequest, async (req, res) => {
  try {
    const keyName = 'products/id';
    const id = req.params.displayInfoId;
    if (cache[keyName] && cache.isExist(keyName, id)) {
      res.json(cache.getData(keyName, id));
    } else {
      const subquery = `select product_id from display_info WHERE id=${id}`;
      const productId = (await sequelize.query(subquery))[0][0].product_id;
      const result = {};
      const averageScoreQuery =
        'select AVG(score) as averageScore from product INNER JOIN ' +
        'reservation_user_comment ON product.id = reservation_user_comment.product_id ' +
        `WHERE product.id = ${productId} AND delete_flag=0`;
      const { averageScore } = (await sequelize.query(averageScoreQuery))[0][0];
      result.averageScore = averageScore;
      const commentsQuery =
        'SELECT comment,reservation_user_comment.id as commentId,reservation_user_comment.create_date as createDate,' +
        'reservation_user_comment.modify_date as modifyDate,reservation_info.product_id as productId,reservation_date as reservationDate,' +
        'email as reservationEmail,reservation_info.id as reservationInfoId,reservation_name as reservationName,reservation_tel as reservationTelephone,' +
        'score from reservation_info INNER JOIN reservation_user_comment ON reservation_info.id = reservation_user_comment.reservation_info_id ' +
        `INNER JOIN reservation_email ON reservation_email.id = reservation_user_comment.reservation_email_id WHERE reservation_user_comment.product_id = ${productId} ` +
        'AND delete_flag = 0';
      const [comments] = await sequelize.query(commentsQuery);
      const commentImagesQueryHead =
        'SELECT content_type as contentType,create_date as createDate,delete_flag as deleteFlag,file_info.id as fileId,' +
        'reservation_user_comment_image.id as imageId,modify_date as modifyDate,reservation_info_id as reservationInfoId,' +
        'reservation_user_comment_id as reservationUserCommentId,save_file_name as saveFileName FROM reservation_user_comment_image ' +
        'INNER JOIN file_info ON reservation_user_comment_image.file_id = file_info.id';
      const imageQueryArr = [];
      comments.forEach((comment) => {
        const commentImagesQuery =
          `${commentImagesQueryHead} WHERE reservation_user_comment_id = ${comment.commentId} ` +
          `AND delete_flag = 0`;
        imageQueryArr.push(sequelize.query(commentImagesQuery));
      });
      const images = await Promise.all(imageQueryArr);
      const modifiedComments = comments.map((comment, index) => {
        const reservationDate = moment(comment.reservationDate).format(
          'YYYY.MM.DD.(ddd)',
        );
        const [commentImages] = images[index];
        return { ...comment, reservationDate, commentImages };
      });
      result.comments = modifiedComments;
      const displayInfoQuery =
        'select category.id as categoryId,name as categoryName,display_info.create_date as createDate,' +
        'display_info.id as displayInfoId,email,homepage,display_info.modify_date as modifyDate,opening_hours as openingHours,' +
        'place_lot as placeLot,place_name as placeName,place_street as placeStreet,content as productContent,description ' +
        'as productDescription,event as productEvent,product.id as productId,tel as telephone from display_info INNER JOIN ' +
        'product on display_info.product_id = product.id INNER JOIN category ON category.id = product.category_id ' +
        `WHERE display_info.id = ${req.params.displayInfoId}`;
      const [displayInfo] = (await sequelize.query(displayInfoQuery))[0];
      result.displayInfo = displayInfo;
      const displayInfoImageQuery =
        'select content_type as contentType,file_info.create_date as createDate,delete_flag as deleteFlag,' +
        'display_info.id as displayInfoId,display_info_image.id as displayInfoImageId,file_info.id as fileId,file_name as fileName,' +
        'file_info.modify_date as modifyDate,save_file_name as saveFileName from display_info INNER JOIN display_info_image ' +
        'ON display_info.id = display_info_image.display_info_id INNER JOIN file_info ON display_info_image.file_id = file_info.id ' +
        `WHERE display_info.id = ${req.params.displayInfoId}`;
      const [displayInfoImage] = (
        await sequelize.query(displayInfoImageQuery)
      )[0];
      result.displayInfoImage = displayInfoImage;
      const productImagesQuery =
        'select content_type as contentType,create_date as createDate,delete_flag as deleteFlag,' +
        'file_info.id as fileInfoId,file_name as fileName,modify_date as modifyDate,product_id as productId,' +
        'product_image.id as productImageId,save_file_name as saveFileName,type from product_image INNER JOIN ' +
        `file_info ON product_image.file_id = file_info.id WHERE product_id = ${productId}`;
      const [productImages] = await sequelize.query(productImagesQuery);
      result.productImages = productImages;
      const productPricesQuery =
        'select create_date as createDate,discount_rate as discountRate,modify_date as modifyDate,' +
        'price,price_type_name as priceTypeName,product_id as productId,id as productPriceID from product_price ' +
        `where product_id = ${productId}`;
      const [productPrices] = await sequelize.query(productPricesQuery);
      result.productPrices = productPrices;
      cache.insertData(keyName, id, result);
      res.json(result);
    }
  } catch (err) {
    console.error(err);
  }
});

router.get('/reservations/date', confirmAPIRequest, (req, res) => {
  const diffDays = { reserve: Math.floor(Math.random() * 5 + 1) };
  diffDays.start = diffDays.reserve - Math.floor(Math.random() * 5 + 1);
  diffDays.end = diffDays.reserve + Math.floor(Math.random() * 5 + 1);
  const reservationDate = moment
    .tz('Asia/Seoul')
    .add(diffDays.reserve, 'days')
    .format('YYYY.MM.DD HH:mm:ss');
  const startDate = moment
    .tz('Asia/Seoul')
    .add(diffDays.start, 'days')
    .format('YYYY.MM.DD.(ddd)');
  const endDate = moment
    .tz('Asia/Seoul')
    .add(diffDays.end, 'days')
    .format('YYYY.MM.DD.(ddd)');
  res.json({
    reservationDate,
    startDate,
    endDate,
  });
});

router.get('/reservations/all', confirmAPIRequest, async (req, res) => {
  // 예약정보 전체적인 파악용
  try {
    const reservationInfoQuery =
      'SELECT cancel_flag as cancelYn,create_date as createDate,display_info_id as displayInfoId,' +
      'modify_date as modifyDate,product_id as productId,reservation_date as reservationDate,email as reservationEmail,' +
      'reservation_info.id as reservationInfoId,reservation_name as reservationName,reservation_tel as reservationTelephone ' +
      'from reservation_info INNER JOIN reservation_email ON reservation_info.reservation_email_id = reservation_email.id';
    const [reservationInfo] = await sequelize.query(reservationInfoQuery);
    const totalPriceQueryArr = [];
    const displayInfoQueryArr = [];
    reservationInfo.forEach((value) => {
      const totalPriceQuery =
        'SELECT SUM(price*count) as totalPrice from reservation_info_price INNER JOIN product_price ' +
        'ON product_price.id = reservation_info_price.product_price_id INNER JOIN reservation_info ON ' +
        `reservation_info_price.reservation_info_id = reservation_info.id WHERE reservation_info_id = ${value.reservationInfoId}`;
      totalPriceQueryArr.push(sequelize.query(totalPriceQuery));
      const displayInfoQuery =
        'SELECT category.id as categoryId,category.name as categoryName,display_info.create_date as createDate,' +
        'display_info.id as displayInfoId,email,homepage,display_info.modify_date as modifyDate,opening_hours as openingHours,' +
        'place_lot as placeLot,place_name as placeName,place_street as placeStreet,content as productContent,description as productDescription,' +
        'event as productEvent,product.id as productId,tel as telephone from display_info INNER JOIN product ON ' +
        'display_info.product_id = product.id INNER JOIN category ON product.category_id = category.id ' +
        `WHERE display_info.id = ${value.displayInfoId}`;
      displayInfoQueryArr.push(sequelize.query(displayInfoQuery));
    });
    const totalPrices = await Promise.all(totalPriceQueryArr);
    const displayInfos = await Promise.all(displayInfoQueryArr);
    const modifiedReservationInfo = reservationInfo.map((value, index) => {
      const { totalPrice } = totalPrices[index][0][0];
      const [displayInfo] = displayInfos[index][0];
      return { ...value, totalPrice, displayInfo };
    });
    // const { totalPrice } = (await sequelize.query(totalPriceQuery))[0][0];
    // const [displayInfo] = (await sequelize.query(displayInfoQuery))[0];
    const result = {
      reservations: modifiedReservationInfo,
      size: reservationInfo.length,
    };
    res.json(result);
  } catch (err) {
    console.error(err);
  }
});

router.get('/reservations', confirmAPIRequest, isLoggedIn, async (req, res) => {
  try {
    const emailId = req.user.id;
    const reservationInfoQuery =
      'SELECT reservation_info.id as reservationInfoId,reservation_date as reservationDate,description,' +
      'reservation_name as reservationName,reservation_tel as reservationTel,place_name as placeName,cancel_flag as cancelFlag,product.id as productId,' +
      'SUM(price*count) as totalPrice from reservation_info INNER JOIN display_info ON reservation_info.display_info_id = display_info.id ' +
      'INNER JOIN product ON reservation_info.product_id = product.id INNER JOIN reservation_info_price ON ' +
      'reservation_info.id = reservation_info_price.reservation_info_id INNER JOIN product_price ON ' +
      `product_price.id = reservation_info_price.product_price_id WHERE reservation_info.reservation_email_id = ${emailId} ` +
      'GROUP BY reservation_info.id';
    const [reservationInfo] = await sequelize.query(reservationInfoQuery);
    const priceInfoQueryArr = [];
    const commentInfoArr = [];
    reservationInfo.forEach((value) => {
      const priceInfoQuery =
        'SELECT price,price_type_name as priceTypeName,count from product_price INNER JOIN ' +
        'reservation_info_price ON product_price.id = reservation_info_price.product_price_id INNER JOIN reservation_info ON ' +
        `reservation_info_price.reservation_info_id = reservation_info.id WHERE reservation_info.id = ${value.reservationInfoId}`;
      priceInfoQueryArr.push(sequelize.query(priceInfoQuery));
      commentInfoArr.push(
        ReservationUserComment.findOne({
          attributes: ['id'],
          where: {
            product_id: value.productId,
            delete_flag: 0,
          },
        }),
      );
    });
    const priceInfos = await Promise.all(priceInfoQueryArr);
    const commentInfos = await Promise.all(commentInfoArr);
    const toUsedReservation = [];
    const usedReservation = [];
    const canceledReservation = [];
    reservationInfo.forEach((value, index) => {
      const [priceInfo] = priceInfos[index];
      const commentInfo = commentInfos[index];
      const reservationDate = moment(value.reservationDate).format(
        'YYYY.MM.DD.(ddd)',
      );
      const modifiedValue = {
        ...value,
        isCommentExist: commentInfo !== null,
        priceInfo,
        reservationDate,
      };
      if (modifiedValue.cancelFlag) {
        canceledReservation.push(modifiedValue);
      } else if (new Date(modifiedValue.reservationDate) <= new Date()) {
        usedReservation.push(modifiedValue);
      } else {
        toUsedReservation.push(modifiedValue);
      }
    });
    res.json({
      toUsed: toUsedReservation,
      used: usedReservation,
      canceled: canceledReservation,
    });
  } catch (err) {
    console.error(err);
  }
});

router.post('/reservations', confirmAPIRequest, async (req, res) => {
  try {
    let postable = true;
    let message;
    const { product_id: realProductId } = await DisplayInfo.findOne({
      attributes: ['product_id'],
      where: {
        id: req.body.displayInfoId,
      },
    });
    if (postable && req.body.productId !== realProductId) {
      postable = false;
      message = '상품 정보가 일치하지 않습니다';
    }
    if (postable && req.body.reservationName.length === 0) {
      postable = false;
      message = '예약자 이름이 존재하지 않습니다';
    }
    const emailRe = /[a-zA-Z]\w{2,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}/;
    if (
      postable &&
      (req.body.reservationEmail.length === 0 ||
        !emailRe.test(req.body.reservationEmail))
    ) {
      postable = false;
      message = '이메일 형식이 맞지 않습니다';
    }
    const telRe = /0\d{2}-[1-9]\d{2,3}-\d{4}/;
    if (
      postable &&
      (req.body.reservationTelephone.length === 0 ||
        !telRe.test(req.body.reservationTelephone))
    ) {
      postable = false;
      message = '전화번호 형식이 맞지 않습니다';
    }
    if (!postable) {
      return res.status(400).send(message);
    }
    const productPriceIds = await ProductPrice.findAll({
      attributes: ['id'],
      where: {
        product_id: realProductId,
      },
    });
    let countSum = 0;
    const isPriceIncorrect = req.body.prices.some((priceInfo) => {
      countSum += priceInfo.count;
      for (
        let index = 0, len = productPriceIds.length;
        index < len;
        index += 1
      ) {
        if (priceInfo.productPriceId === productPriceIds[index].id) {
          break;
        }
        if (index === len - 1) {
          return true;
        }
      }
      return false;
    });
    if (isPriceIncorrect) {
      return res.status(400).send('상품 가격 정보가 맞지 않습니다');
    }
    if (countSum === 0) {
      return res.status(400).send('상품이 선택되지 않았습니다');
    }
    res.cookie('reservationName', req.body.reservationName);
    res.cookie('reservationEmail', req.body.reservationEmail);
    res.cookie('reservationTel', req.body.reservationTelephone);
    let emailInfo = await ReservationEmail.findOne({
      where: {
        email: req.body.reservationEmail,
      },
    });
    if (!emailInfo) {
      emailInfo = await ReservationEmail.create({
        email: req.body.reservationEmail,
      });
    }
    const creationInfo = await ReservationInfo.create({
      product_id: req.body.productId,
      display_info_id: req.body.displayInfoId,
      reservation_email_id: emailInfo.id,
      reservation_name: req.body.reservationName,
      reservation_tel: req.body.reservationTelephone,
      reservation_date: req.body.reservationYearMonthDay,
      create_date: sequelize.fn('NOW'),
      modify_date: sequelize.fn('NOW'),
    });
    req.body.prices.forEach((value) => {
      if (value.count !== 0) {
        ReservationInfoPrice.create({
          reservation_info_id: creationInfo.id,
          product_price_id: value.productPriceId,
          count: value.count,
        });
      }
    });
    /* edwith api에 적혀있지만 목적을 모르겠음
        const reservationInfoQuery = "SELECT cancel_flag as cancelYn,create_date as createDate,display_info_id as displayInfoId," +
            "modify_date as modifyDate,product_id as productId,reservation_date as reservationDate,reservation_email as reservationEmail," +
            "id as reservationInfoId,reservation_name as reservationName,reservation_tel as reservationTelephone from reservation_info " +
            `WHERE id = ${creationInfo.id}`;
        const reservationInfo = (await sequelize.query(reservationInfoQuery))[0][0];
        const reservationInfoPriceQuery = "SELECT count,product_price_id as productPriceId,reservation_info_id as reservationInfoId," +
            `id as reservationInfoPriceId from reservation_info_price WHERE reservation_info_id = ${creationInfo.id}`;
        const reservationInfoPrice = (await sequelize.query(reservationInfoPriceQuery))[0];
        reservationInfo.prices = reservationInfoPrice;
        */
    return res.status(201).send();
  } catch (err) {
    console.error(err);
  }
});

router.put(
  '/reservations/:reservationInfoId',
  confirmAPIRequest,
  isLoggedIn,
  async (req, res) => {
    try {
      const exReservation = await ReservationInfo.findOne({
        where: {
          id: req.params.reservationInfoId,
          reservation_email_id: req.user.id,
        },
      });
      if (!exReservation) {
        return res.status(400).send();
      }
      await ReservationInfo.update(
        {
          cancel_flag: 1,
          modify_date: sequelize.fn('NOW'),
        },
        {
          where: { id: req.params.reservationInfoId },
        },
      );
      /*
        const reservationInfoQuery = "SELECT cancel_flag as cancelYn,create_date as createDate,display_info_id as displayInfoId," +
            "modify_date as modifyDate,product_id as productId,reservation_date as reservationDate,reservation_email as reservationEmail," +
            "id as reservationInfoId,reservation_name as reservationName,reservation_tel as reservationTelephone from reservation_info " +
            `WHERE id = ${req.params.reservationInfoId}`;
        const reservationInfo = (await sequelize.query(reservationInfoQuery))[0][0];
        const reservationInfoPriceQuery = "SELECT count,product_price_id as productPriceId,reservation_info_id as reservationInfoId," +
            `id as reservationInfoPriceId from reservation_info_price WHERE reservation_info_id = ${req.params.reservationInfoId}`;
        const reservationInfoPrice = (await sequelize.query(reservationInfoPriceQuery))[0];
        reservationInfo.prices = reservationInfoPrice;
        res.json(reservationInfo);
        */
      return res.status(201).send();
    } catch (err) {
      console.error(err);
    }
  },
);

router.post(
  '/reservations/:reservationInfoId/comments',
  confirmAPIRequest,
  isLoggedIn,
  upload.single('image'),
  async (req, res) => {
    try {
      let postable = true;
      let message;
      const exReservation = await ReservationInfo.findOne({
        where: {
          id: req.params.reservationInfoId,
          reservation_email_id: req.user.id,
        },
      });
      if (
        !exReservation ||
        new Date(exReservation.reservation_date) > new Date()
      ) {
        postable = false;
        message = '잘못된 접근입니다';
      }
      const exComment = await ReservationUserComment.findOne({
        where: {
          reservation_info_id: Number(req.params.reservationInfoId),
          delete_flag: 0,
        },
      });
      if (postable && exComment) {
        postable = false;
        message = '한 공연당 하나의 리뷰만 입력할 수 있습니다';
      }
      if (
        postable &&
        (Number(req.body.score) <= 0 ||
          Number(req.body.score) > 5 ||
          !Number.isInteger(Number(req.body.score)))
      ) {
        postable = false;
        message = '별점 개수가 올바르지 않습니다';
      }
      if (
        postable &&
        (req.body.comment.length < 5 || req.body.comment.length > 400)
      ) {
        postable = false;
        message = '리뷰 글자수가 맞지 않습니다.';
      }
      if (postable && req.file && !validImageType(req.file.mimetype)) {
        postable = false;
        message = '이미지는 jpg,jpeg,png 파일만 가능합니다';
      }
      if (!postable) {
        if (req.file) {
          fs.unlink(req.file.path, (error) => {
            if (error) {
              console.error(error);
            }
          });
        }
        return res.status(400).send(message);
      }
      const commentCreationInfo = await ReservationUserComment.create({
        product_id: exReservation.product_id,
        reservation_info_id: Number(req.params.reservationInfoId),
        reservation_email_id: req.user.id,
        score: Number(req.body.score),
        comment: req.body.comment,
        create_date: sequelize.fn('NOW'),
        modify_date: sequelize.fn('NOW'),
      });
      if (req.file) {
        const fileCreationInfo = await FileInfo.create({
          file_name: req.file.filename,
          save_file_name: `images/uploads/${req.file.filename}`,
          content_type: req.file.mimetype,
          delete_flag: 0,
          create_date: sequelize.fn('NOW'),
          modify_date: sequelize.fn('NOW'),
        });
        ReservationUserCommentImage.create({
          reservation_info_id: commentCreationInfo.reservation_info_id,
          reservation_user_comment_id: commentCreationInfo.id,
          file_id: fileCreationInfo.id,
        });
      }
      const keyName = 'products/id';
      const { display_info_id: displayInfoId } = exReservation;
      if (cache[keyName] && cache.isExist(keyName, displayInfoId)) {
        cache.deleteData(keyName, displayInfoId);
      }
      return res.status(201).send();
    } catch (error) {
      console.error(error);
    }
  },
);

router.delete(
  '/reservations/:reservationInfoId/comments',
  confirmAPIRequest,
  isLoggedIn,
  async (req, res) => {
    try {
      const exComment = await ReservationUserComment.findOne({
        where: {
          reservation_info_id: Number(req.params.reservationInfoId),
          reservation_email_id: req.user.id,
          delete_flag: 0,
        },
      });
      if (!exComment) {
        return res
          .status(400)
          .send('리뷰 정보와 회원 정보가 일치하지 않습니다');
      }
      ReservationUserComment.update(
        {
          modify_date: sequelize.fn('NOW'),
          delete_flag: 1,
        },
        {
          where: {
            id: exComment.id,
          },
        },
      );
      let exFileIds = await ReservationUserCommentImage.findAll({
        attributes: ['file_id'],
        where: {
          reservation_info_id: Number(req.params.reservationInfoId),
          reservation_user_comment_id: exComment.id,
        },
        raw: true,
      });
      if (exFileIds.length) {
        exFileIds = exFileIds.map((value) => value.file_id);
        const targetFile = await FileInfo.findOne({
          where: {
            delete_flag: 0,
            id: {
              [Sequelize.Op.in]: exFileIds,
            },
          },
        });
        if (targetFile) {
          FileInfo.update(
            {
              delete_flag: 1,
              modify_date: sequelize.fn('NOW'),
            },
            {
              where: {
                id: targetFile.id,
              },
            },
          );
          fs.unlink(
            path.join(__dirname, '..', 'public', targetFile.save_file_name),
            (error) => {
              if (error) {
                console.error(error);
              }
            },
          );
        }
      }
      // 캐시 보정 작업
      const keyName = 'products/id';
      const { display_info_id: displayInfoId } = await ReservationInfo.findOne({
        attributes: ['display_info_id'],
        where: {
          id: Number(req.params.reservationInfoId),
        },
      });
      if (cache[keyName] && cache.isExist(keyName, displayInfoId)) {
        cache.deleteData(keyName, displayInfoId);
      }
      res.status(201).send();
    } catch (error) {
      console.error(error);
    }
  },
);

router.put(
  '/reservations/:reservationInfoId/comments',
  confirmAPIRequest,
  isLoggedIn,
  upload.single('image'),
  async (req, res) => {
    try {
      let postable = true;
      let message;
      const exComment = await ReservationUserComment.findOne({
        where: {
          reservation_info_id: Number(req.params.reservationInfoId),
          reservation_email_id: req.user.id,
          delete_flag: 0,
        },
      });
      if (!exComment) {
        postable = false;
        message = '기존에 등록된 리뷰가 없습니다';
      }
      if (
        postable &&
        (Number(req.body.score) <= 0 ||
          Number(req.body.score) > 5 ||
          !Number.isInteger(Number(req.body.score)))
      ) {
        postable = false;
        message = '별점 개수가 올바르지 않습니다';
      }
      if (
        postable &&
        (req.body.comment.length < 5 || req.body.comment.length > 400)
      ) {
        postable = false;
        message = '리뷰 글자수가 맞지 않습니다.';
      }
      if (postable && req.file && !validImageType(req.file.mimetype)) {
        postable = false;
        message = '이미지는 jpg,jpeg,png 파일만 가능합니다';
      }
      if (!postable) {
        if (req.file) {
          fs.unlink(req.file.path, (error) => {
            if (error) {
              console.error(error);
            }
          });
        }
        return res.status(400).send(message);
      }
      ReservationUserComment.update(
        {
          score: Number(req.body.score),
          comment: req.body.comment,
          modify_date: sequelize.fn('NOW'),
        },
        {
          where: {
            id: exComment.id,
          },
        },
      );
      if (req.body.exImage) {
        // 기존 파일 삭제
        let imageIds = await ReservationUserCommentImage.findAll({
          attributes: ['file_id'],
          where: {
            reservation_info_id: Number(req.params.reservationInfoId),
          },
        });
        imageIds = imageIds.map((value) => value.file_id);
        const targetImage = await FileInfo.findOne({
          where: {
            delete_flag: 0,
            id: {
              [Sequelize.Op.in]: imageIds,
            },
          },
        });
        if (targetImage) {
          FileInfo.update(
            {
              delete_flag: 1,
              modify_date: sequelize.fn('NOW'),
            },
            {
              where: {
                id: targetImage.id,
                delete_flag: 0,
              },
            },
          );
          fs.unlink(
            path.join(__dirname, '..', 'public', targetImage.save_file_name),
            (error) => {
              if (error) {
                console.error(error);
              }
            },
          );
        }
      }
      if (req.file) {
        const fileCreationInfo = await FileInfo.create({
          file_name: req.file.filename,
          save_file_name: `images/uploads/${req.file.filename}`,
          content_type: req.file.mimetype,
          delete_flag: 0,
          create_date: sequelize.fn('NOW'),
          modify_date: sequelize.fn('NOW'),
        });
        ReservationUserCommentImage.create({
          reservation_info_id: exComment.reservation_info_id,
          reservation_user_comment_id: exComment.id,
          file_id: fileCreationInfo.id,
        });
      }
      // 캐시 보정 작업
      const keyName = 'products/id';
      const { display_info_id: displayInfoId } = await ReservationInfo.findOne({
        attributes: ['display_info_id'],
        where: {
          id: Number(req.params.reservationInfoId),
        },
      });
      if (cache[keyName] && cache.isExist(keyName, displayInfoId)) {
        cache.deleteData(keyName, displayInfoId);
      }
      return res.status(201).send();
    } catch (error) {
      console.error(error);
    }
  },
);

router.get('/categories', confirmAPIRequest, async (req, res) => {
  try {
    if (cache.categories) {
      res.json(cache.categories);
    } else {
      const query =
        'SELECT count(*) as count,category_id as id,category.name ' +
        'from product INNER JOIN category ON product.category_id = category.id group by id';
      const [results] = await sequelize.query(query);
      cache.categories = { items: results };
      res.json(cache.categories);
    }
  } catch (err) {
    console.error(err);
  }
});

router.get('/promotions', confirmAPIRequest, async (req, res) => {
  try {
    if (cache.promotions) {
      res.json(cache.promotions);
    } else {
      const query =
        'SELECT promotion.id,promotion.product_id as productId,' +
        'display_info.id as displayInfoId,save_file_name as saveFileName from promotion ' +
        'INNER JOIN product_image ON promotion.product_id = product_image.product_id ' +
        'INNER JOIN file_info ON product_image.file_id = file_info.id ' +
        'INNER JOIN display_info ON promotion.product_id = display_info.product_id ' +
        'WHERE product_image.type = "ma"';
      const [results] = await sequelize.query(query);
      cache.promotions = { items: results };
      res.json(cache.promotions);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
