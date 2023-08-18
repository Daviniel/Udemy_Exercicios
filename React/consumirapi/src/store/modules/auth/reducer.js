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

    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.REGISTER_UPDATED_SUCCESS: {
      const newState = { ...state };
      newState.user.nome = action.payload.nome;
      newState.user.email = action.payload.email;
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_FAILURE: {
      const newState = { ...state };
      newState.isLoading = false;
      return newState;
    }

    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
}
