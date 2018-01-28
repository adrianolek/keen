import React from 'react';

const Dashboard = () => (
  <div className="keen-dashboard" style={{paddingTop: '80px'}}>
    <div className="container-fluid">
      <div className="row">

        <div className="col-sm-6">
          <div className="chart-wrapper">
            <div className="chart-title">
              Pageviews by browser (past 24 hours)
            </div>
            <div className="chart-stage">
            </div>
            <div className="chart-notes">
              This is a sample text region to describe this chart.
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="chart-wrapper">
            <div className="chart-title">
              Pageviews by browser (past 5 days)
            </div>
            <div className="chart-stage">
            </div>
            <div className="chart-notes">
              Notes go down here
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
);

export default Dashboard;
