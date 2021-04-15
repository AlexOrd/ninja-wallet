import {authErrors} from '../../auth/errors'; 

import nodemailer from 'nodemailer';
const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'valiakusil1945@gmail.com',
    pass: '19452507Viktor',
  },
};

const transporter = nodemailer.createTransport(smtpConfig);
const mailer = async (to, subject, text) => {
  const options = {
    from: 'valiakusil1945@gmail.com',
    // to: 'vitaliidrapaliuk@gmail.com',
    to,
    subject,
    text,
  };

  return await transporter.sendMail(options);
};

export const sendEmail = async (email, subject, data) => {
  let result = { err: null };

  try {
    await mailer(email, subject, data);
  } catch (error) {
    result.err = authErrors.MAIL_PROVIDER_ERROR
    return result;
  }

  return result;
};
