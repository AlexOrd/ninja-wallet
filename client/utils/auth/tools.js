export const removeAccessTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const getLoginDate = (lastLogin) => {
  const dateObject = new Date(lastLogin);
  const hour = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const date = dateObject.getDate();

  return {
    loginDate: `${date < 10 ? '0' + date : date}.${month < 10 ? '0' + month : month}.${year}`,
    loginTime: `${hour}:${minutes < 10 ? '0' + minutes : minutes}`,
  };
};

export const invokeAfterDelay = (handler, delay) => {
  setTimeout(() => {
    handler();
  }, delay);
};
