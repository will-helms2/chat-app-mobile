/*
 * Store
 */

import { bindActionCreators } from 'redux';
import Actions from 'actions';

export function mapState(state) {
  const { session = {} } = state;

  return {
    session,
  };
}

export function mapActions(dispatch) {
  return {
    actions: {
      signIn: bindActionCreators(Actions.session.signIn, dispatch),
      signUp: bindActionCreators(Actions.session.signUp, dispatch),
    },
  };
}
