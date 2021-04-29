import {
  Android,
  Apple,
  Edge,
  Firefox,
  GoogleChrome,
  InternetExplorer,
  Opera,
  Safari,
  Windows,
  Tablet,
  Desktop,
  Mobile,
} from '../../containers/Authorization/icons';

export const getIcons = ({ deviceType, browser, platform }) => {
  const result = {
    device: { icon: Desktop, message: 'Desktop' },
    browser: { icon: GoogleChrome, message: 'Google Chrome' },
    platform: { icon: Windows, message: 'Windows' },
  };

  switch (platform) {
    case 'android':
      result.platform.icon = Android;
      result.platform.message = 'android';
      break;
    case 'iphone':
      result.platform.icon = Apple;
      result.platform.message = 'iOS';
      break;
    case 'ipad':
      result.platform.icon = Apple;
      result.platform.message = 'iOS';
      break;
    default:
      break;
  }

  switch (deviceType) {
    case 'mobile':
      result.device.icon = Mobile;
      result.device.message = 'mobile';
      break;
    case 'tablet':
      result.device.icon = Tablet;
      result.device.message = 'tablet';
      break;
    default:
      break;
  }

  switch (browser) {
    case 'safari':
      result.browser.icon = Safari;
      result.browser.message = 'safari';
      break;
    case 'opera':
      result.browser.icon = Opera;
      result.browser.message = 'opera';
      break;
    case 'edge':
      result.browser.icon = Edge;
      result.browser.message = 'edge';
      break;
    case 'internet explorer':
      result.browser.icon = InternetExplorer;
      result.browser.message = 'internet explorer';
      break;
    case 'firefox':
      result.browser.icon = Firefox;
      result.browser.message = 'firefox';
      break;
    default:
      break;
  }

  return result;
};
