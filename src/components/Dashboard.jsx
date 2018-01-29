import React, {Component} from 'react';
import {Dataviz} from 'keen-js';

class Dashboard extends Component {

  componentDidMount() {
    this.props.keenQuery();
    this.chart = new Dataviz();
    this.chart
      .el('#chart-dataviz')
      .attributes({
        chartType: 'area',
        stacked: true
      })
      .prepare();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.chart.data(nextProps.data).render();
    }
  }

  render() {
    return (
      <div className="keen-dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="chart-wrapper">
                <div className="chart-title">
                  Pageviews by browser (past 24 hours)
                </div>
                <div className="chart-stage" id="chart-dataviz">
                </div>
                <div className="chart-notes">
                  This is a chart rendered with Keen Dataviz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
