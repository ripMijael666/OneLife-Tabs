import createDataContext from './createDataContext';
import * as SecureStore from 'expo-secure-store';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        isSignout: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        isSignout: true,
        userToken: null,
      };
    default:
      return state;
  }
};

const signUp = dispatch => {
  return ({email, password}) => {
    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
  };
};

const signIn = dispatch => {
  return async ({email, password}) => {
    console.log(email);
    console.log(password);
    await SecureStore.setItemAsync('email', email);
    await SecureStore.setItemAsync('password', password);
    await SecureStore.setItemAsync('userToken', 'dummy-auth-token');
    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });    
  };
};

const signOut = dispatch => {
  return async () => {
    await SecureStore.deleteItemAsync('userToken');
    dispatch({ type: 'SIGN_OUT' });
  };
};

const restoreToken = dispatch => {
  return ({userToken}) => {
    console.log('UserToken: ' + userToken);
    dispatch({ type: 'RESTORE_TOKEN', token: userToken });
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signIn, signOut, signUp, restoreToken},
  {
    isLoading: true,
    isSignout: false,
    userToken: null,
  },
);