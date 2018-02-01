import reducer from './keen';
import {keenQueryResult} from "../actions";
import {chartData, keenQueryData as data} from '../fixtures';

describe('Keen reducer', () => {
  it('merges data into new state and transforms data into chartData', () => {
    const currentState = {
      foo: 'bar'
    };

    const newState = reducer(currentState, keenQueryResult(data));

    expect(currentState === newState).toBe(false);

    expect(newState).toEqual({
      foo: 'bar',
      data,
      chartData
    })
  });
});
