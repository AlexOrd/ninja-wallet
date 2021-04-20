export const getDeviceInfo = req => {
  const { platform, isDesktop, isTablet, isMobile, browser } = req.useragent;
  const result = {
    platform: platform.toLowerCase(),
    browser: browser.toLowerCase(),
    deviceType: 'desktop',
  };

  if (isMobile && isTablet && !isDesktop) {
    result.deviceType = 'tablet';
  }

  if (isMobile && !isTablet) {
    result.deviceType = 'mobile';
  }

  return result;
};