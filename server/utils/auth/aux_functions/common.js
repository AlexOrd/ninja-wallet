const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

exports.generateRandomString = () => uuid();
exports.generateRandomNumbers = (length = 6) => {
  const code = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.round(Math.random() * (9 - 0) + 0);
    code.push(randomNumber);
  }

  return code.join('');
};

exports.encryptData = (data) => bcrypt.hashSync(data, 10);
exports.setAuthHeaders = function (accessToken = null, refreshToken = null, res) {
  res.header('Access-Token', accessToken);
  res.header('Refresh-Token', refreshToken);
};