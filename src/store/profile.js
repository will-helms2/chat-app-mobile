/*
 * Store
 */

import { bindActionCreators } from 'redux';
import Actions from 'actions';

export function mapState(state) {
  const { profile = {}, session = {}, team = {}, channel = {}} = state;

  return {
    profile,
    session,
    team,
    channel,
  };
}

export function mapActions(dispatch) {
  return {
    actions: {
      loadProfile: bindActionCreators(Actions.profile.load, dispatch),
      createDM: bindActionCreators(Actions.channel.createDM, dispatch),
      loadTeam: bindActionCreators(Actions.team.load, dispatch),
    },
  };
}
