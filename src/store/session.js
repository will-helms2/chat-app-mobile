/*
 * Store
 */

import { bindActionCreators } from 'redux';
import Actions from 'actions';

export function mapState(state) {
  const { session = {}, team = {} } = state;

  return {
    session,
    team,
  };
}

export function mapActions(dispatch) {
  return {
    actions: {
      signIn: bindActionCreators(Actions.session.signIn, dispatch),
      signUp: bindActionCreators(Actions.session.signUp, dispatch),
      validate: bindActionCreators(Actions.session.validate, dispatch),
      signOut: bindActionCreators(Actions.session.signOut, dispatch),
    },
  };
}
