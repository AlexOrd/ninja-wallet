import { telegramBot } from "../../config/telegram_bot";
import {getVerificationCodeForBot, verifyBot} from './controllers'

// telegramBot.onText(/\/get (.+)/, getVerificationCodeForBot)
// telegramBot.onText(/\/verify (.+)/, verifyBot)
telegramBot.on('message', () => {
    console.log('asdasdas')
})