import { SET_DATADOG, GET_DATADOG_ERROR } from "./types";
import axios from "axios";

const cheerio = require("cheerio");

export const setDataDog = () => dispatch => {
  const getData = () => {
    axios
      .get("https://status.datadoghq.com/")
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const incidentElems = $(".status-day:not(.no-incidents)");
        let incidentArr = [];

        incidentElems.each(function(index) {
          if (index > 4) {
            return false;
          } else {
            const title = $(this)
              .find(".incident-title")
              .text()
              .trim();
            const url =
              "https://status.datadoghq.com/" +
              $(this)
                .find(".incident-title a")
                .attr("href")
                .substr(1);
            const date = $(this)
              .find(".date")
              .first()
              .text();
            const containers = $(this)
              .find(".updates-container")
              .html();
            let incident = {
              title: title,
              url: url,
              date: date,
              containers: containers
            };
            incidentArr.push(incident);
          }
        });
        dispatch({
          type: SET_DATADOG,
          payload: incidentArr
        });
      })
      .catch(function(error) {
        dispatch({
          type: GET_DATADOG_ERROR,
          payload: error
        });
      });
  };
  getData();
  setInterval(getData, 600000);
};
