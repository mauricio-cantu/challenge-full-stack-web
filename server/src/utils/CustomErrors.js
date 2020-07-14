class CustomError extends Error {
  constructor(errorDetail) {
    super();
    this.errorDetail = errorDetail;
  }

  getStatusCode() {
    if (this instanceof NotFoundError) {
      return 404;
    } else if (
      this instanceof InvalidFieldsError ||
      this instanceof MissingFieldsError
    ) {
      return 422;
    } else return 500;
  }

  getErrorCode() {
    if (this instanceof NotFoundError) {
      return "not-found";
    } else if (this instanceof InvalidFieldsError) {
      return "invalid-fields";
    } else if (this instanceof MissingFieldsError) {
      return "missing-fields";
    } else return this.message;
  }

  getErrorDetail() {
    return this.errorDetail;
  }

  toJSON() {
    return {
      status: this.getStatusCode(),
      errorCode: this.getErrorCode(),
      errorDetail: this.getErrorDetail(),
    };
  }
}

class NotFoundError extends CustomError {}
class InvalidFieldsError extends CustomError {}
class MissingFieldsError extends CustomError {}

module.exports = {
  CustomError,
  NotFoundError,
  InvalidFieldsError,
  MissingFieldsError,
};
