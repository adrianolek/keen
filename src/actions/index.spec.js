import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {KEEN_QUERY_RESULT, keenQuery, keenQueryResult} from "./index";

describe('Actions', () => {
  it('create query result action', () => {
    const data = 'foo';
    const expectedAction = {
      type: KEEN_QUERY_RESULT,
      data
    };
    expect(keenQueryResult(data)).toEqual(expectedAction)
  });

  it('dispatch query result action after Keen query is resolved', async function() {
    const expectedActions = [
      { type: KEEN_QUERY_RESULT, data: 'foo' }
    ];

    const keen = {
      query: async function () {
        return 'foo';
      }
    };

    const mockStore = configureMockStore([thunk.withExtraArgument({keen})]);
    const store = mockStore({});

    await store.dispatch(keenQuery());

    expect(store.getActions()).toEqual(expectedActions)
  })
});
