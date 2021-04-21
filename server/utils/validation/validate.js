import { composedSchemas } from './composed_schemas';
import { createRespErr } from '../error_handling/create_resp_err';

export const validate = subObject => schemaName => data => {
  const {error} = composedSchemas[subObject][schemaName].validate(data);
  if (error) return detectErrorType(error);

  return { err: null };
};

function detectErrorType(joiError) {
  const errType =  joiError?.details[0]?.type;
  const errMessage = joiError?.details[0]?.message;

  if (errType === 'any.required' || errType === 'object.and') {
    const errDescription = `passed object DOESN'T contain required field(s), ${errMessage}`;
    return { err: createRespErr('MISSING_REQUIRED_FIELD', 400, errDescription), joiError };
  }

  if (errType === 'object.unknown') {
    const errDescription = `passed object CONTAIN excess field(s), ${errMessage}`;
    return { err: createRespErr('EXCESS_FIELD', 400, errDescription), joiError };
  }

  if (errType === 'any.only') {
    const errDescription = `passed value is unavailable, ${errMessage}`;
    return { err: createRespErr('UNAVAILABLE_VALUE', 400, errDescription), joiError };
  }

  const errDescription = `passed data is INVALID, ${errMessage}`;
  return { err: createRespErr('INVALID_DATA', 400, errDescription), joiError };
}
