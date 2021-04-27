// import sgMail from '@sendgrid/mail';
// // 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
// const API_KEY = 'SG.6dj4BcPsS_eU_UY';
// sgMail.setApiKey(API_KEY);

// export const sendEmail = async (email, subject, data) => {
//   let result = { err: null };
//   const msg = {
//     to: 'ghvitaliidrapaliuk@gmail.com',
//     // to: email,
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
    // to,
    to: 'vitaliidrapaliuk@gmail.com',

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
