class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message); // important: pass message to Error
    this.statusCode = statusCode;
  }
}

module.exports = ExpressError;
