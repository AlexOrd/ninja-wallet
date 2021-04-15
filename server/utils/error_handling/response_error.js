export class ResponseError extends Error {
  constructor(name = 'GENERIC', status = 500, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseError);
    }

    this.name = name;
    this.status = status;
    this.success = false;
  }
}