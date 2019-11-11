import { SET_AZURE, GET_AZURE_ERROR } from "./types";
import axios from "axios";

export const setAzureData = () => dispatch => {
  const getData = () => {
    axios
      .get(
        "https://us-central1-azure-data-258522.cloudfunctions.net/function-1"
      )
      .then(response => {
        dispatch({
          type: SET_AZURE,
          payload: response
        });
      })
      .catch(function(error) {
        dispatch({
          type: GET_AZURE_ERROR,
          payload: error
        });
      });
  };
  getData();
  setInterval(getData, 600000);
};
