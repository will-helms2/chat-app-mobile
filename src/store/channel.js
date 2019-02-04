/*
 * Store
 */

import { bindActionCreators } from 'redux';
import Actions from 'actions';

export function mapState(state) {
  const { channel = {}, team = {} , session: {token = {}}} = state;

  return {
    channel,
    team,
    token,
  };
}

export function mapActions(dispatch) {
  return {
    actions: {
      loadChannel: bindActionCreators(Actions.channel.load, dispatch),
      refresh: bindActionCreators(Actions.channel.refresh, dispatch),
      createChannel: bindActionCreators(Actions.channel.createChannel, dispatch),
      loadTeam: bindActionCreators(Actions.team.load, dispatch),
    },
  };
}
