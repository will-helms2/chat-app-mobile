
/*
 * Actions
 */

import * as session from 'actions/session';
import * as team from 'actions/team';
import * as channel from 'actions/channel';
import * as invite from 'actions/invite';

export * as ActionTypes from './types';
export ActionDispatcher, { dispatchAction } from './action-dispatcher';

export default {
  session,
  team,
  channel,
  invite,
};
