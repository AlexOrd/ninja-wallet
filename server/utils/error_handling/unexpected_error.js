export const unexpectedError = (error, next, useConsoleLog) => {
  if(useConsoleLog) {
    console.error(error);
  }

  const responseError = new Error('UNEXPECTED_SERVER_ERROR', 500, 'unexpected server error');
  
  return next(responseError);
};
