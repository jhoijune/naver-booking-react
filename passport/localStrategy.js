import LocalStrategy from 'passport-local';
import { ReservationEmail } from '../models';

export default (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'email',
      },
      async (email, password, done) => {
        try {
          console.log('나의', email);
          const exUser = await ReservationEmail.findOne({
            where: { email },
          });
          if (exUser) {
            done(null, exUser);
          } else {
            done(null, false, {
              message: '예약이 등록되지 않은 이메일입니다.',
            });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      },
    ),
  );
};