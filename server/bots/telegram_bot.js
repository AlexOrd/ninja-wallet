/* import TelegramBot from 'node-telegram-bot-api';
import User from '../models/user.model';
import { generateRandomString } from '../utils/auth/aux_functions/common';
import { sendEmail } from '../utils/auth/aux_functions/for_mail';
import {
  messageAboutConnected,
  messageAboutHarming,
  messageAboutSentLetter,
  messageAboutIncorrectCode,
} from '../utils/bot/messages';
import { validate } from '../utils/validation/validate';

const API_KEY = process.env.TELEGRAM_BOT_API_KEY;
export const telegramBot = new TelegramBot(API_KEY, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});

console.log('Bot has been started...');

telegramBot.onText(/\/get (.+)/, async (msg, [source, email]) => {
  try {
    const { err } = validate('auth')('email')({ email });
    if (err) return telegramBot.sendMessage(msg.chat.id, err.message);

    const user = await User.findOne({ email });
    if (!user) return telegramBot.sendMessage(msg.chat.id, 'user not found');

    const chatID = user.bots.telegram.chatID;
    if (chatID && chatID !== msg.chat.id) {
      telegramBot.sendMessage(chatID, messageAboutHarming.sender);
      return telegramBot.sendMessage(chatID, messageAboutHarming.owner);
    }

    if (chatID) return telegramBot.sendMessage(chatID, messageAboutConnected);

    const confirmCode = generateRandomString();
    user.bots.telegram.confirmCode = confirmCode;
    user.save();

    const message = `Code for verification your bot:   ${confirmCode},   use command "/verify" and insert it there`;
    await sendEmail(email, 'Connected with telegram bot', message);

    telegramBot.sendMessage(msg.chat.id, messageAboutSentLetter(email));
  } catch (error) {
    telegramBot.sendMessage(msg.chat.id, 'unexpected error');
  }
});

telegramBot.onText(/\/verify (.+)/, async (msg, [source, confirmCode]) => {
  const user = await User.findOne({ 'bots.telegram.confirmCode': confirmCode });
  if (!user) {
    return telegramBot.sendMessage(msg.chat.id, messageAboutIncorrectCode(confirmCode));
  }

  const chatID = user.bots.telegram.chatID;
  if (chatID && chatID !== msg.chat.id) {
    return telegramBot.sendMessage(
      chatID,
      'This user has already connected with bot, if you have access to you application account, firstly you must disconnect your previous bot in settings'
    );
  }

  if (chatID) {
    return telegramBot.sendMessage(chatID, 'Your account has already connected to app');
  }

  user.bots.telegram.chatID = msg.chat.id;
  user.bots.telegram.confirmCode = '';
  user.save();

  let message = user.firstName
    ? `Congratulate ${user.firstName}! Your application connected with our bot, you have new opportunity in your security!`
    : 'Congratulate you! Your application connected with our bot, you have new opportunity in your security!';

  telegramBot.sendMessage(msg.chat.id, message);
});

telegramBot.onText(/\/start/, async (msg, [source, match]) => {
  const message = 'Welcome to ninja wallet -- the best money manager!';
  telegramBot.sendMessage(msg.chat.id, message);
});

telegramBot.onText(/\/help/, async (msg, [source, match]) => {
  const message = 'Welcome to our app!';
  telegramBot.sendMessage(msg.chat.id, message);
});

telegramBot.onText(/\/appLink/, async (msg, [source, match]) => {
  const message = 'Welcome to our app!';
  telegramBot.sendMessage(msg.chat.id, message);
});
 */