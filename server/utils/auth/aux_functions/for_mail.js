import sgMail from '@sendgrid/mail';

const API_KEY = process.env.SEND_GRID_API_KEY;
sgMail.setApiKey(API_KEY);

export const sendEmail = async (email, subject, data) => {
  console.log('inside')
  let result = { err: null };
  const msg = {
    to: email,
    from: 'vitadrapaliuk@gmail.com',
    subject: subject,
    text: data,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    result.err = error;
    return result;
  }
  return result;
};
