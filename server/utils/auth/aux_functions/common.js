import  { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

export const generateRandomString = () => uuid();
export const generateRandomNumbers = (length = 6) => {
  const code = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.round(Math.random() * (9 - 0) + 0);
    code.push(randomNumber);
  }

  return code.join('');
};

export const encryptData = async (data) => bcrypt.hash(data, 10);
export const setAuthHeaders = function (accessToken = null, refreshToken = null, res) {
  res.header('Access-Token', accessToken);
  res.header('Refresh-Token', refreshToken);
};