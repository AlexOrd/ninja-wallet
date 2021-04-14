class ResponseError extends Error {
  constructor(code = 'GENERIC', status = 500, ...params) {
    super(...params);

    this.code = code;
    this.status = status;
    this.success = false;
  }
}

module.exports = ResponseError;
