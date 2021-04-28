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


export const messageAboutConnected = `Congratulate! Your application has connected with bot.`
export const messageAboutHarming = {owner: 'Some user attempted to connect with your bot', sender: 'This bot has already connected with app, if you are owner, you should go in settings of your application'}
export const messageAboutSentLetter = (email) => `Letter with your confirmation code has sent on ${email}`
export const messageAboutIncorrectCode = (code) => `${code} is incorrect, try again!`