import * as types from '../types/home';

const initState = {
  counter: 10,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case types.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default reducer;
