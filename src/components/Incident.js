import React, { Component } from "react";
import { connect } from "react-redux";

class Incident extends Component {
  render() {
    const incidents = this.props.datadogs.data;
    return (
      <div>
        {Object.keys(incidents).map(item => (
          <div className="incident" key={item}>
            <div className="incident--title">
              <a className="incident--link" href={incidents[item].url}>
                {incidents[item].title}
              </a>
              <div className="incident--date">{incidents[item].date}</div>
            </div>
            <div
              className="incident--containers"
              dangerouslySetInnerHTML={{ __html: incidents[item].containers }}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  datadogs: state.datadog
});

export default connect(mapStatetoProps)(Incident);
