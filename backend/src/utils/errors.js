class FieldError extends Error {
  constructor(message) {
    super(message);
    this.name = "FieldError";
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.name = "ForbiddenError";
    this.statusCode = 403;
  }
}

class OneFieldRequiredError extends Error {
  constructor(message) {
    super(message);
    this.name = "OneFieldRequiredError";
    this.statusCode = 400;
  }
}

class CasterError extends Error {
  constructor(message) {
    super(message);
    this.name = "CastError";
    this.statusCode = 400;
  }
}

module.exports = {
  FieldError,
  NotFoundError,
  ForbiddenError,
  OneFieldRequiredError,
  CasterError,
};
