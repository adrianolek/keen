import reducer from './keen';
import {keenQueryResult} from "../actions";

describe('Keen reducer', () => {
  it('merges data into new state', () => {
    const currentState = {
      foo: 'bar'
    };

    const newState = reducer(currentState, keenQueryResult({query: 'count'}));

    expect(currentState === newState).toBe(false);

    expect(newState).toEqual({
      foo: 'bar',
      data: {
        query: 'count'
      }
    })
  });
});
