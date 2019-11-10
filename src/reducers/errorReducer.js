import {
  GET_AZURE_ERROR,
  GET_DATADOG_ERROR,
  CLEAR_DATADOG_ERROR,
  CLEAR_AZURE_ERROR
} from "../actions/types";

const initialState = {
  azureError: {},
  datadogError: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_AZURE_ERROR:
      return { azureError: payload };
    case GET_DATADOG_ERROR:
      return { datadogError: payload };
    case CLEAR_AZURE_ERROR:
      return {
        azureError: {}
      };
    case CLEAR_DATADOG_ERROR:
      return {
        azureError: {}
      };
    default:
      return state;
  }
}
