
/*
 * API
 * @action: runs Local Storage and Server API requests
 */

import * as session from 'api/session';
import * as team from 'api/team';
import * as channel from 'api/channel';
import * as invite from 'api/invite';

export ServerRequest from './requests/server-request';

export default {
  session,
  team,
  channel,
  invite,
};
