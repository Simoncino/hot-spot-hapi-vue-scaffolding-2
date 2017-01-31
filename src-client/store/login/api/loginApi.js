import axios from 'axios';

export default {
  login (userToLog, cbSuccess, cbError) {
    axios({
      method: 'POST',
      url: '/api/login',
      data: userToLog
    }).then((response) => {
      const result = response.data;
      console.log('loginApi.login.SUCCESS', result)
      if(result.success){
        cbSuccess(result);
      } else {
        cbError(result, userToLog);
      }
    })
  }
}