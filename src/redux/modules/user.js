import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

//액션
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

//액션 생성
const logout = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  user: null,
  is_login: false,
};

const logInDB = (id, pwd) => {
  return async function (dispatch, getState, { history }) {
    await axios
      .post('api 주소 입력', {
        user_id: id,
        user_pwd: pwd,
      })
      .then((response) => {
        if (response.data.result) {
          window.alert(response.data.msg);
          localStorage.setItem('is_login', response.data.token);
          dispatch(
            setUser({
              is_login: response.data.token,
              user_id: response.data.user.user_id,
              user_nick: response.data.user.user_nick,
            })
          );
        } else {
          window.alert(response.data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
        window.alert(error.data.msg);
      });
  };
};

const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    axios
      .get('api 주소 입력', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('is_login')}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(
          setUser({
            is_login: response,
            user_id: response.data.user.user_id,
            user_nick: response.data.user.user_nick,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logout());
    history.push('/');
  };
};

const signUpDB = (id, nick, pwd, confirmpwd) => {
  return function (dispatch, getState, { history }) {
    axios
      .post('api 주소 입력', {
        user_id: id,
        user_nick: nick,
        user_pwd: pwd,
        confirmPassword: confirmpwd,
      })
      .then((response) => {
        console.log(response);
        window.alert(response.data.success);
        history.push('/');
      })
      .catch((error) => {
        window.alert(error);
      });
  };
};

const dubCheckIdFB = (id) => {
  return function (dispatch, getState, { history }) {
    axios
      .post('api 주소 입력', { user_id: id })
      .then((response) => {
        console.log(response);
        window.alert(response.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const dubCheckNickFB = (nick) => {
  return function (dispatch, getState, { history }) {
    axios
      .post('api 주소 입력', { user_nick: nick })
      .then((response) => {
        console.log(response);
        window.alert(response.data.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  signUpDB,
  logInDB,
  logOutDB,
  setUser,
  logout,
  loginCheckDB,
  dubCheckIdFB,
  dubCheckNickFB,
};

export { actionCreators };
