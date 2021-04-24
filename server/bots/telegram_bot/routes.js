import { telegramBot } from "../../config/telegram_bot";
import {getVerificationCodeForBot, verifyBot} from './controllers'

telegramBot.onText(/\/start (.+)/, getVerificationCodeForBot)
telegramBot.onText(/\/test (.+)/, verifyBot)