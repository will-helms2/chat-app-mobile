/*
 * Store
 */

import { bindActionCreators } from 'redux';
import Actions from 'actions';

export function mapState(state) {
  const { invite = {}, team = {} } = state;

  return {
    invite,
    team,
  };
}

export function mapActions(dispatch) {
  return {
    actions: {
      createInvite: bindActionCreators(Actions.invite.createInvite, dispatch),
      loadInvites: bindActionCreators(Actions.invite.load, dispatch),
      refresh: bindActionCreators(Actions.invite.refresh, dispatch),
      acceptInvitation: bindActionCreators(Actions.invite.acceptInvitation, dispatch),
      validate: bindActionCreators(Actions.session.validate, dispatch),
    },
  };
}
