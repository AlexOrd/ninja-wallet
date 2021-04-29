// import sgMail from '@sendgrid/mail';

// const API_KEY = process.env.SEND_GRID_API_KEY;
// sgMail.setApiKey(API_KEY);

// export const sendEmail = async (email, subject, data) => {
//   let result = { err: null };
//   const msg = {
//     to: email,
//     from: 'vitadrapaliuk@gmail.com',
//     subject: subject,
//     text: data,
//   };

//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.log(error)
//     result.err = error
//     return result;
//   }
//   return result;
// };

import { authErrors } from '../../auth/errors';
import nodemailer from 'nodemailer';
const smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    // user: 'valiakusil1945@gmail.com',
    // pass: '19452507Viktor',
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  },
};

const transporter = nodemailer.createTransport(smtpConfig);
const mailer = async (to, subject, text) => {
  const options = {
    from: 'valiakusil1945@gmail.com',
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
    result.err = authErrors.MAIL_PROVIDER_ERROR;
    return result;
  }

  return result;
};
