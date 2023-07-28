import { createStore } from 'redux';

const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '': {
      const newState = { ...state };
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
