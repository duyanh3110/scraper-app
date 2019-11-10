import { SET_DATADOG } from "../actions/types";

const initialState = {
  data: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_DATADOG:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
}
