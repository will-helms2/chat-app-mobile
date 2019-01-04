/*
 * App Error
 */

import { Responses } from 'constants';

function AppError(message, extra) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.message = message || Responses.ERROR_MESSAGE;
  this.extra = extra || {};

  this.response = extra => {
    return {
      error: Object.assign(
        {},
        {
          message: this.message,
        },
        this.extra,
        extra,
      ),
    };
  };
}

module.exports = AppError;
