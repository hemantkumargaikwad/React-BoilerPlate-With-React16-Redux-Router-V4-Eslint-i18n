import Constants from '../constants';
import history from '../../history';

export const request = () => dispatch => {
  dispatch({
    type: Constants.LOADING_START,
    payload: 'Welcome to React redux application'
  });
  history.push('/users/');
};

export function requestComplete() {
  return {
    type: Constants.LOADING_COMPLETE
  };
}
