export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/bookinglogin');
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
