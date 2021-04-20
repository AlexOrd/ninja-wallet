import { ResponseError } from './response_error';

export const createRespErr = (name, statusCode, message) => {
  return new ResponseError(name, statusCode, message);
};