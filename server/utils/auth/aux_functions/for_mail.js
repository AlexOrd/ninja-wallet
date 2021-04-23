// import sgMail from '@sendgrid/mail';

// const API_KEY = process.env.SEND_GRID_API_KEY;
// const DEV_KEY = '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';
// sgMail.setApiKey(API_KEY || DEV_KEY);

// export const sendEmail = async (email, subject, data) => {
//   let result = { err: null };
//   const msg = {
//     to: 'vitaliidrapaliuk@gmail.com',
//     // to: email,
//     from: 'vitadrapaliuk@gmail.com',
//     subject: subject,
//     text: data,
//   };

//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     result.err = error
//     return result;
//   }
//   return result;
// };

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
    // to,
    to:'vitaliidrapaliuk@gmail.com',

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



