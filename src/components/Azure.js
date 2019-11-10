import React, { Component } from "react";
import { setAzureData } from "../actions/azure";
import { connect } from "react-redux";
import Status from './Status';

class Azure extends Component {
  componentDidMount() {
    this.props.setAzureData();
  }
  render() {
    return (
      <div>
        <div className="title">Azure Status</div>
        <Status />
      </div>
    );
  }
}

export default connect(
  null,
  { setAzureData }
)(Azure);
