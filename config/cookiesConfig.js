const jwtConfig = require('./jwtConfig');

const cookiesConfig = {
  cookieName: 'uid',
  httpOnly: true,
  maxAge: jwtConfig.access.expiresIn,
};

module.exports = cookiesConfig;
