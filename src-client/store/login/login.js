import loginApi from './api/loginApi'
import * as types from './login-types'


// initial state
const state = {
  userToLog : {},
  isLogged : false,
  errorMessage : '',
  loggedUser: {}
}

// getters
const getters = {
  /*loggedUser: state => state.loggedUser,
  isLogged : state => state.isLogged*/
}

// actions
const actions = {
  [types.LOGIN_REQUEST]({commit, state}, userToLog){
    console.log('actions.LOGIN_REQUEST', userToLog);
    loginApi.login(
      userToLog,
      (result) => commit(types.LOGIN_SUCCESS, { result }),
      () => commit(types.LOGIN_FAILURE, { userToLog })
      );
  }
}

// mutations
const mutations = {
  [types.LOGIN_SUCCESS] (state, {result}) {
    console.log('actions.LOGIN_SUCCESS', result);
    state.isLogged = true;
    state.errorMessage = 'INCREDIBILE, sei loggato';
    state.userToLog = null;
    state.loggedUser = result.user;
  },

  [types.LOGIN_FAILURE] (state, { userToLog }) {
    console.log('actions.LOGIN_FAILURE', userToLog);
    state.userToLog = userToLog
    state.isLogged = true;
    state.errorMessage = 'HAI SBAGLIATO QUALCOSA, COJONE!!!!!'
    state.loggedUser = null;
  },

  [types.LOGOUT_REQUEST] (state) {
    console.log('actions.LOGOUT_REQUEST', state);
    state.userToLog = {};
    state.isLogged = false;
    state.errorMessage = '';
    state.loggedUser = {};
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
