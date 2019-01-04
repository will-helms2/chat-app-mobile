/*
 * Action Types
 */

/*
 * App Actions
 */

/* NOTE: RELOAD should be listened by every reducer - this action is called when user switch camp and data needs to be reloaded - this action should only set a flag to reload data when its needed, DO NOT reload all information at once */

export const APP__RELOAD = 'APP__RELOAD';
export const ERROR = 'ERROR';

/*
 * Session Sign Up
 */

export const SIGN_UP__INIT = 'SIGN_UP__INIT';
export const SIGN_UP__SUCCESS = 'SIGN_UP__SUCCESS';
export const SIGN_UP__ERROR = 'SIGN_UP__ERROR';

/*
 * Session Sign In
 */

export const SIGN_IN__INIT = 'SIGN_IN__INIT';
export const SIGN_IN__START = 'SIGN_IN__START';
export const SIGN_IN__SUCCESS = 'SIGN_IN__SUCCESS';
export const SIGN_IN__EMPTY = 'SIGN_IN__EMPTY';
export const SIGN_IN__INVALID = 'SIGN_IN__INVALID';
export const SIGN_IN__FAILURE = 'SIGN_IN__FAILURE';

/*
 * Session Sign Out
 */

export const SIGN_OUT = 'SIGN_OUT';
