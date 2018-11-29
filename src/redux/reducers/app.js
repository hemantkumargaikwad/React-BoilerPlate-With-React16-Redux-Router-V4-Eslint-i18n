import createReducer from '../../utils/createReducer';
import Constants from '../constants';

const initialState = {
  isLoading: false,
  welcomeMessage: ''
};

export default createReducer(initialState, {
  [Constants.LOADING_START](state, payload) {
    return Object.assign({}, state, {
      isLoading: true,
      welcomeMessage: payload
    });
  },
  [Constants.LOADING_COMPLETE](state) {
    return Object.assign({}, state, {
      isLoading: false
    });
  }
});
