import { SET_STREAM_SOURCE } from '../actionTypes';

const initialStreamState = {
  source: null
};

export const streamReducer = (state = initialStreamState, action) => {
  switch (action.type) {
    case SET_STREAM_SOURCE:
      return {
        ...state,
        source: action.payload
      };
    default:
      return state;
  }
};
