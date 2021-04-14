import { ResponseError } from './response_error';

export const createRespErr = (code, status, message) => {
  return new ResponseError(code, status, message);
};
