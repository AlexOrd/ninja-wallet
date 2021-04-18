import sgMail from '@sendgrid/mail';

const API_KEY = process.env.SEND_GRID_API_KEY;
const DEV_KEY = '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';
sgMail.setApiKey(API_KEY || DEV_KEY);

export const sendEmail = async (email, subject, data) => {
  let result = { err: null };
  console.log('email', email);
  const msg = {
    to: 'vitaliidrapaliuk@gmail.com',
    // to: email,
    from: 'valiakusil1945@gmail.com',
    subject: subject,
    text: data,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    return result;
  }
  console.log('SENT');
  return result;
};
