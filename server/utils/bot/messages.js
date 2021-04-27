export const notifyAboutAttemptSignIn = (device, browser, platform) => {
  return `Someone hardly try sign in to your account, he/she used ${device.toLowerCase()}, browser ${browser.toLowerCase()} on platform ${platform.toLowerCase()}, it happened few moments ago, if it wasn't you, open your app and check out list of logged devices, if it's you and just forget password use restore password in your app`;
};

export const messageAboutSignIn = (device, browser, platform) => {
  return `Someone sign in to your account, he/she used ${device.toLowerCase()}, browser ${browser.toLowerCase()} on platform ${platform.toLowerCase()}, it happened few moments ago, if it wasn't you, open your app and check out list of logged devices`;
};

export const doubleAuthenticateMessage = {
  message: `Please, confirm or deny sign in`,
  keyboard: [
    [
      {
        text: 'Confirm',
        callback_data: 'confirm',
      },
    ],
    [
      {
        text: 'Deny',
        callback_data: 'deny',
      },
    ],
  ],
};
