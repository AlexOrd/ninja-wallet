// import User from '../models/user.model';
// import { generateRandomNumbers } from '../utils/auth/aux_functions/common';
// import { sendEmail } from '../utils/auth/aux_functions/for_mail';
// import { validate } from '../utils/validation/validate';

// const TelegramBot = require('node-telegram-bot-api');
// const TOKEN = '1735477226:AAGuRpRNlR1QfgoALRM882f6OuUiWBymwyA';

// const bot = new TelegramBot(TOKEN, {
//   polling: {
//     interval: 300,
//     autoStart: true,
//     params: {
//       timeout: 10,
//     },
//   },
// });

// console.log('Bot has been started...');

// const mine = 348781339;
// const Женя = 262389627;

// // bot.on('message', async (msg) => {
// //   const user = await User.findOne({ 'bots.telegram.confirmCode': msg.text });
// //   if (!user) {
// //     return bot.sendMessage(msg.chat.id, 'user not found');
// //   }

// //   user.bots.telegram.chatID = msg.chat.id;
// //   user.bots.telegram.confirmCode = '';
// //   user.save();

// //   bot.sendMessage(msg.chat.id, 'success')

// // //   const botResponse = await bot.sendMessage(msg.chat.id, 'text');
// // });

// // bot.onText(/\/start/, msg => {
// //     const {id} = msg.chat
// //     bot.sendMessage(id, 'Response for command "/start"')
// // })

// //bycode
// bot.onText(/\/start (.+)/, async (msg, [source, match]) => {
//   const user = await User.findOne({ 'bots.telegram.confirmCode': match });
//   if (!user) {
//     return bot.sendMessage(msg.chat.id, 'user not found');
//   }

//   console.log('--------------');

//   user.bots.telegram.chatID = msg.chat.id;
//   user.bots.telegram.confirmCode = '';
//   user.save();

//   bot.sendMessage(msg.chat.id, 'success');
// });

// //by email
// bot.onText(/\/test (.+)/, async (msg, [source, match]) => {
//   try {
//     // const { err } = validate('auth')('email')({ email: match });
//     // if (err) return bot.sendMessage(msg.chat.id, err.message);

//     // const user = await User.findOne({ 'auth.email': match });
//     // if (!user) return bot.sendMessage(msg.chat.id, 'user not found');

//     // const chatID = user.bots.telegram.chatID;
//     // if (chatID && chatID !== msg.chat.id) {
//     //   return bot.sendMessage(chatID, 'some one wants harm you');
//     // }
//     // if (chatID) return bot.sendMessage(chatID, 'your bot is verified');

//     // const confirmCode = generateRandomNumbers();
//     // user.bots.telegram.confirmCode = confirmCode;
//     // user.save();

//     await sendEmail('vitaliidrapaliuk@gmail.com', 'Verify telegram bot', 'confirmCode');

//     // user.bots.telegram.chatID = msg.chat.id;
//     // user.bots.telegram.confirmCode = '';
//     // user.save();

//     bot.sendMessage(msg.chat.id, 'success');
//   } catch (error) {
//       console.log(
//           error
//       )
//       bot.sendMessage(msg.chat.id, 'unexpected error')
//   }
// });

// export default bot;
