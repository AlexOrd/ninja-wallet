import User from '../../../models/user.model';
import { generateRandomNumbers } from '../../../utils/auth/aux_functions/common';
import { sendEmail } from '../../../utils/auth/aux_functions/for_mail';
import { validate } from '../../../utils/validation/validate';
import { telegramBot } from '../../../config/telegram_bot';

export const getVerificationCodeForBot = async (msg, [source, match]) => {
  try {
    const { err } = validate('auth')('email')({ email: match });
    if (err) return telegramBot.sendMessage(msg.chat.id, err.message);
    console.log('match')
    const user = await User.findOne({ 'auth.email': match });
    if (!user) return telegramBot.sendMessage(msg.chat.id, 'user not found');

    const chatID = user.bots.telegram.chatID;
    if (chatID && chatID !== msg.chat.id) {
      return telegramBot.sendMessage(chatID, 'some one wants harm you');
    }
    if (chatID) return telegramBot.sendMessage(chatID, 'your bot is verified');

    const confirmCode = generateRandomNumbers();
    user.bots.telegram.confirmCode = confirmCode;
    user.save();

    await sendEmail('vitaliidrapaliuk@gmail.com', 'Verify telegram bot', 'confirmCode');

    user.bots.telegram.chatID = msg.chat.id;
    user.bots.telegram.confirmCode = '';
    user.save();

    telegramBot.sendMessage(msg.chat.id, `Letter with your confirmation code has sent on ${match}`);
  } catch (error) {
    telegramBot.sendMessage(msg.chat.id, 'unexpected error');
  }
};

export const verifyBot = async (msg, [source, match]) => {

  console.log('asdasdads')

  const user = await User.findOne({ 'bots.telegram.confirmCode': match });
  if (!user) {
    return telegramBot.sendMessage(msg.chat.id, 'user not found');
  }

  console.log('asdasdasd')

  user.bots.telegram.chatID = msg.chat.id;
  user.bots.telegram.confirmCode = '';
  user.save();

  let message = user.firstName
    ? `Congratulations ${user.firstName}! Your application connected with our bot`
    : 'Congratulations! Your application connected with our bot';

  telegramBot.sendMessage(msg.chat.id, message);
};
