import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AreaChart, Area, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import Layout from "./Layout";

export default class Chart extends Component {
  static colors = [
    {stroke: '#8884d8', fill: '#8884d8'},
    {stroke: '#82ca9d', fill: '#82ca9d'},
  ];

  static color(index) {
    return Chart.colors[index] || {stroke: '#ffc658', fill: '#ffc658'};
  }

  componentDidMount() {
    this.props.keenQuery();
  }

  seriesNames() {
    if (this.props.data && this.props.data.length > 0) {
      return Object.keys(this.props.data[0]).filter((key) => {
        return key !== 'dateTime';
      })
    }

    return [];
  }

  areas() {
    return this.seriesNames().map((seriesName, index) => {
      return <Area type="linear" stackId="1" key={index} dataKey={seriesName} {...Chart.color(index)} />
    });
  }

  render() {
    return (
      <AreaChart width={600} height={400} data={this.props.data}>
        <Legend verticalAlign="top"/>
        <XAxis dataKey="dateTime"/>
        <YAxis/>
        <Tooltip/>
        {this.areas()}
      </AreaChart>
    )
  }
}

Chart.propTypes = {
  keenQuery: PropTypes.func.isRequired,
  data: PropTypes.array
};
