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

/*
 * Session Validate
 */

export const VALIDATE__INIT = 'VALIDATE__INIT';
export const VALIDATE__SUCCESS = 'VALIDATE__SUCCESS';
export const VALIDATE__ERRO = 'VALIDATE__ERROR';

/*
 *  Team
 */

export const TEAM_LOAD__INIT = 'TEAM_LOAD__INIT';
export const TEAM_LOAD__SUCCESS = 'TEAM_LOAD__SUCCESS';
export const TEAM_LOAD__ERROR = 'TEAM_LOAD__ERROR';

export const TEAM_REFRESH__INIT = 'TEAM_REFRESH__INIT';
export const TEAM_REFRESH__SUCCESS = 'TEAM_REFRESH__SUCCESS';
export const TEAM_REFRESH__ERROR = 'TEAM_REFRESH__ERROR';

export const TEAM_CREATE__INIT = 'TEAM_CREATE__INIT';
export const TEAM_CREATE__SUCCESS = 'TEAM_CREATE__SUCCESS';
export const TEAM_CREATE__ERROR = 'TEAM_CREATE__ERROR';

/*
 *  Channel
 */

export const CHANNEL_LOAD__INIT = 'CHANNEL_LOAD__INIT';
export const CHANNEL_LOAD__SUCCESS = 'CHANNEL_LOAD__SUCCESS';
export const CHANNEL_LOAD__ERROR = 'CHANNEL_LOAD__ERROR';

export const CHANNEL_REFRESH__INIT = 'CHANNEL_REFRESH__INIT';
export const CHANNEL_REFRESH__SUCCESS = 'CHANNEL_REFRESH__SUCCESS';
export const CHANNEL_REFRESH__ERROR = 'CHANNEL_REFRESH__ERROR';

export const CHANNEL_CREATE__INIT = 'CHANNEL_CREATE__INIT';
export const CHANNEL_CREATE__SUCCESS = 'CHANNEL_CREATE__SUCCESS';
export const CHANNEL_CREATE__ERROR = 'CHANNEL_CREATE__ERROR';

/*
 *  Invite
 */

export const INVITE_LOAD__INIT = 'INVITE_LOAD__INIT';
export const INVITE_LOAD__SUCCESS = 'INVITE_LOAD__SUCCESS';
export const INVITE_LOAD__ERROR = 'INVITE_LOAD__ERROR';

export const INVITE_REFRESH__INIT = 'INVITE_REFRESH__INIT';
export const INVITE_REFRESH__SUCCESS = 'INVITE_REFRESH__SUCCESS';
export const INVITE_REFRESH__ERROR = 'INVITE_REFRESH__ERROR';

export const INVITE_CREATE__INIT = 'INVITE_CREATE__INIT';
export const INVITE_CREATE__SUCCESS = 'INVITE_CREATE__SUCCESS';
export const INVITE_CREATE__ERROR = 'INVITE_CREATE__ERROR';

export const INVITE_ACCEPT__INIT = 'INVITE_ACCEPT__INIT';
export const INVITE_ACCEPT__SUCCESS = 'INVITE_ACCEPT__SUCCESS';
export const INVITE_ACCEPT__ERROR = 'INVITE_ACCEPT__ERROR';
