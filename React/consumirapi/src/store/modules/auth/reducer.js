import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  console.log(action.type);

  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return state;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return initialState;
    }

    default: {
      return state;
    }
  }
}
