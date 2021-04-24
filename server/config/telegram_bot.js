import TelegramBot from 'node-telegram-bot-api';
const TOKEN = '1747013481:AAGftN8SokbmVh1rctIkmGTF4kXLt_WOGdo';

export const telegramBot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});

telegramBot.on('message', (msg) => {
  console.log(msg)
  telegramBot.sendMessage(msg.chat.id, 'Андрюх, бачиш чим зайняти?')
})

console.log('Bot has been started...');