exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(400).send('로그인 하지 않았습니다');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
};

exports.confirmAPIRequest = (req, res, next) => {
  const isInternalUse = () => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) === '::ffff:') {
      ip = ip.substr(7);
    }
    return ip === '::1' || ip === '127.0.0.1';
  };
  if (req.xhr || isInternalUse() || (req.user && req.user.is_admin)) {
    next();
  } else {
    const err = new Error('Request forbidden');
    err.status = 403;
    next(err);
  }
};
