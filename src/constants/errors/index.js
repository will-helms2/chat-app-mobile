
/*
 * Errors
 */

import { Responses } from 'constants';
import AppError_inst from './app-error';

export AppError from './app-error';

/*
 * resolveError
 * @action: return error object that app can process
 */

export function resolveError(error, printError = true) {
  /* eslint-disable */
  if (__DEV__ && printError) {
    console.log('Error: ', error);
  }
  /* eslint-enable */

  if (error instanceof AppError_inst) {
    return error.response();
  }

  return error.message ? { error } : Responses.RESPONSE_ERROR;
}

export default {
  resolveError,
};
