/*
 * Store
 */

import { bindActionCreators } from 'redux';
import Actions from 'actions';

export function mapState(state) {
  const { team = {} } = state;

  return {
    team,
  };
}

export function mapActions(dispatch) {
  return {
    actions: {
      loadTeam: bindActionCreators(Actions.team.load, dispatch),
      refresh: bindActionCreators(Actions.team.refresh, dispatch),
      createTeam: bindActionCreators(Actions.team.createTeam, dispatch),
      validate: bindActionCreators(Actions.session.validate, dispatch),
    },
  };
}
