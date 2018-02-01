import {KEEN_QUERY_RESULT} from "../actions";

const chartData = (data) => (data.result.map((dataItem) => {
  const item = {
    dateTime: new Date(dataItem.timeframe.start).toLocaleTimeString(),
  };

  dataItem.value.reduce((item, currentItem) => {
    item[currentItem['tech.browser.family']] = currentItem.result;
    return item;
  }, item);

  return item;
}));

const keen = (state = {}, {type, data}) => {
  switch (type) {
    case KEEN_QUERY_RESULT:
      return {
        ...state,
        data,
        chartData: chartData(data),
      };
    default:
      return state;
  }
};

export default keen;
