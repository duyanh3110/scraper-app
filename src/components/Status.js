import React, { Component } from "react";
import { connect } from "react-redux";

class Status extends Component {
  render() {
    const azureStatus = this.props.azure.data.data;
    return (
      <div className="status">
        {azureStatus ? (
          <table>
            <thead>
              <tr>
                <th>Zone</th>
                <th>Region</th>
                <th>Virtual Machines</th>
                <th>Cloud Services</th>
                <th>Azure Functions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(azureStatus).map(item => (
                <tr key={item}>
                  <td>{azureStatus[item].zone}</td>
                  <td>{azureStatus[item].name}</td>
                  <td>{azureStatus[item].virtual}</td>
                  <td>{azureStatus[item].cloud}</td>
                  <td>{azureStatus[item].azureFunc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  azure: state.azure
});

export default connect(mapStatetoProps)(Status);
