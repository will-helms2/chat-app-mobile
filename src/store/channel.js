/*
 * Store
 */

import { bindActionCreators } from 'redux';
import Actions from 'actions';

export function mapState(state) {
  const { channel = {}, team = {} , session: {token = {}}, session = {}} = state;

  return {
    channel,
    team,
    token,
    session,
  };
}

export function mapActions(dispatch) {
  return {
    actions: {
      loadChannel: bindActionCreators(Actions.channel.load, dispatch),
      refresh: bindActionCreators(Actions.channel.refresh, dispatch),
      createChannel: bindActionCreators(Actions.channel.createChannel, dispatch),
      loadTeam: bindActionCreators(Actions.team.load, dispatch),
      loadChannel: bindActionCreators(Actions.channel.load, dispatch),
      createMessage: bindActionCreators(Actions.channel.createMessage, dispatch),
      addRemoteMessage: bindActionCreators(Actions.channel.addRemoteMessage, dispatch),
      uploadMessagePhoto: bindActionCreators(Actions.channel.uploadMessagePhoto, dispatch),
    },
  };
}
