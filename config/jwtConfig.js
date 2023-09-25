const jwtConfig = {
  access: {
    type: 'access',
    // expiresIn: '5m',
    expiresIn: `${1000 * 60 * 5}`,
  },
  refresh: {
    type: 'refresh',
    expiresIn: '7d',
  },
};

module.exports = jwtConfig;
