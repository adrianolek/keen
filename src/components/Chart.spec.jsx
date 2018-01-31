import React from 'react';
import Chart from './Chart';
import renderer from 'react-test-renderer';
import {chartData} from '../fixtures';

describe('Chart', () => {
  it('renders empty chart when no data', () => {
    const chart = renderer.create(<Chart keenQuery={() => null}/>).toJSON();
    expect(chart).toMatchSnapshot();
  });

  it('renders area chart', () => {
    const chart = renderer.create(<Chart data={chartData} keenQuery={() => null}/>).toJSON();
    expect(chart).toMatchSnapshot();
  });
});
