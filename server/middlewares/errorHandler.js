import HttpStatus from 'http-status-codes';
import logger from '../config/winston';
import {ResponseError} from '../utils/error_handling/response_error';
import {createRespErr} from '../utils/error_handling/create_resp_err';

/**
 * NOT_FOUND(404) middleware to catch error response
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */

export function notFound(req, res, next) {
  return next(createRespErr('NOT_FOUND', 404, 'request resource not found'));
}

/**
 * METHOD_NOT_ALLOWED(405) middleware to catch error response.
 * It should be placed at the very bottom of the middleware stack.
 *
 * @param {Object} req
 * @param {Object} res
 */
export function methodNotAllowed(req, res) {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED),
    },
  });
}

/**
 * Generic error response middleware
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function genericErrorHandler(err, req, res, next) {
    const isErrorHandled = err instanceof ResponseError;
    if (isErrorHandled) {
      const { code, status, message } = err;
  
      return res.status(status).json({
        error: code,
        statusCode: status,
        description: message,
        
      });
    } else {
      return res.status(500).send({
        error: 'GENERIC',
        description: 'Something went wrong. Please try again',
      });
    }
}
