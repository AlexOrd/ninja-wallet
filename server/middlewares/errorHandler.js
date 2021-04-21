import HttpStatus from 'http-status-codes';
import logger from '../config/winston';
import { ResponseError } from '../utils/error_handling/response_error';
import { createRespErr } from '../utils/error_handling/create_resp_err';

/**
 * NOT_FOUND(404) middleware to catch error response
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */

export function notFound(req, res, next) {
  // res.status(HttpStatus.NOT_FOUND).json({
  //   error: {
  //     code: HttpStatus.NOT_FOUND,
  //     message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
  //   },
  // });
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
  logger.error(err);
  const isErrorHandled = err instanceof ResponseError;
  if (isErrorHandled) {
    const { name, status, message } = err;

    return res.status(status).json({
      error: name,
      statusCode: status,
      description: message,
    });
  } else {
    if(err.name === 'SyntaxError') {
      return res.status(400).send({
        error: 'INVALID_REQUEST_SYNTAX',
        statusCode: 400,
        description: `${err.name}, ${err.message}`,
      });
    }

    return res.status(500).send({
      error: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
      description: 'Something went wrong. Please try again',
    });
  }
}