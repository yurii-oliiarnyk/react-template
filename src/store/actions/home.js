import * as types from '../types/home';

export const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const incrementWithDelay = () => {
  return {
    type: types.INCREMENT_WITH_DELAY,
  };
};
