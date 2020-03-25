const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const helmet = require('helmet');
const hpp = require('hpp');

const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const passportConfig = require('./passport');
const { sequelize } = require('./models');
const logger = require('./logger');

const app = express();
sequelize.sync();
passportConfig(passport);

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});
redisClient.unref();
redisClient.on('error', console.log);

app.set('port', process.env.PORT || 8001);
app.disable('x-powered-by');
app.use(morgan('combined'));
app.use(helmet());
app.use(hpp());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  store: new RedisStore({
    client: redisClient,
    logErrors: true,
  }),
};
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  logger.error(err.message);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
