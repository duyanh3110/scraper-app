import { combineReducers } from "redux";
import datadog from "./datadogReducer";
import azure from "./azureReducer";
import error from "./errorReducer";

export default combineReducers({
  datadog,
  azure,
  error
});
