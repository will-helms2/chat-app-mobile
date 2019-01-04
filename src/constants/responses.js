/*
 * Error Response
 */

export const SUCCESS = true;

export const ERROR = 'ERROR';
export const ERROR_MESSAGE = 'Something went wrong';

export const SERVER_ERROR = 'SERVER_ERROR';
export const SERVER_ERROR_MESSAGE = 'Server connection has failed';

export const SERVER_BAD_REQUEST = 'SERVER_BAD_REQUEST';
export const SERVER_BAD_REQUEST_MESSAGE = 'Bad Request';

export const SERVER_ACCESS_DENIED = 'SERVER_ACCESS_DENIED';
export const SERVER_ACCESS_DENIED_MESSAGE = 'Access Denied';

export const SERVER_NOT_FOUND = 'SERVER_NOT_FOUND';
export const SERVER_NOT_FOUND_MESSAGE = 'Not Found';

export const API_PATH_REQUIRED = 'API path is required';

export const RESPONSE_SUCCESS = {
  success: SUCCESS,
};

export const RESPONSE_ERROR = {
  error: {
    message: ERROR_MESSAGE,
  },
};

export const RESPONSE_BAD_REQUEST = {
  error: {
    message: SERVER_BAD_REQUEST_MESSAGE,
  },
};

export const RESPONSE_ACCESS_DENIED = {
  error: {
    message: SERVER_ACCESS_DENIED_MESSAGE,
  },
};

export const RESPONSE_NOT_FOUND = {
  error: {
    message: SERVER_NOT_FOUND_MESSAGE,
  },
};

export const RESPONSE_SERVER_ERROR = {
  error: {
    message: SERVER_ERROR_MESSAGE,
  },
};
