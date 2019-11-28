// FIXME: res.redirect 제거

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(400).send('로그인 하지 않았습니다');
  }
};

export const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
};

export const confirmAPIRequest = (req, res, next) => {
  const checkIP = () => {
    let { ip } = req;
    if (ip.substr(0, 7) === '::ffff:') {
      ip = ip.substr(7);
    }
    return ip === '::1' || ip === '127.0.0.1';
  };
  if (req.xhr || checkIP() || (req.user && req.user.is_admin)) {
    next();
  } else {
    res.redirect('/');
  }
};
