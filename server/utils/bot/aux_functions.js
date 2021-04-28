import { telegramBot } from '../../bots/telegram_bot';
import { getDeviceInfo } from '../auth/aux_functions/get_device_info';

export const sendByBot = async (chatID, message, options) => {
  const result = await telegramBot.sendMessage(chatID, message, options);
  return result;
};

export const parseDeviceInfo = (req) => {

  const {deviceType, browser, platform} = getDeviceInfo(req)
  const result = {
    device: 'Desktop',
    browser: 'Google Chrome',
    platform: 'Windows',
  };

  switch (platform) {
    case 'android':
      result.platform = 'android';
      break;
    case 'iphone':
      result.platform = 'iOS';
      break;
    case 'ipad':
      result.platform = 'iOS';
      break;
    default:
      break;
  }

  switch (deviceType) {
    case 'mobile':
      result.device = 'mobile';
      break;
    case 'tablet':
      result.device = 'tablet';
      break;
    default:
      break;
  }

  switch (browser) {
    case 'safari':
      result.browser = 'safari';
      break;
    case 'opera':
      result.browser = 'opera';
      break;
    case 'edge':
      result.browser = 'edge';
      break;
    case 'internet explorer':
      result.browser = 'internet explorer';
      break;
    case 'firefox':
      result.browser = 'firefox';
      break;
    default:
      break;
  }

  return result;
};
