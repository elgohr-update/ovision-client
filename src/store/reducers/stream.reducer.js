import { CANCEL_WEBSOCKET, SET_STREAM_SOURCE } from '../actionTypes';

const initialStreamState = {
  source: undefined
};

export const streamReducer = (state = initialStreamState, action) => {
  switch (action.type) {
    case SET_STREAM_SOURCE:
      return {
        ...state,
        source: action.payload
      };
    case CANCEL_WEBSOCKET:
      return {
        ...state,
        source: undefined
      };
    default:
      return state;
  }
};
