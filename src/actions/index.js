export const KEEN_QUERY_RESULT = 'KEEN_QUERY_RESULT';

export const keenQuery = () => async function(dispatch, getState, { keen }) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const data = await keen.query('count', {
    event_collection: 'pageviews',
    interval: 'hourly',
    group_by: 'tech.browser.family',
    timeframe: {
      start: yesterday,
      end: new Date()
    }
  });

  dispatch(keenQueryResult(data));
};

export const keenQueryResult = data => ({
  type: KEEN_QUERY_RESULT,
  data
});
