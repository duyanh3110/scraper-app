import React, { Component } from "react";
import { setDataDog } from "../actions/datadog";
import { connect } from "react-redux";

import Incident from "./Incident";

class DataDog extends Component {
  componentDidMount() {
    this.props.setDataDog();
  }
  
  render() {
    return (
      <div>
        <div className="title">Datadog Status</div>
        <Incident />
      </div>
    );
  }
}

export default connect(
  null,
  { setDataDog }
)(DataDog);
