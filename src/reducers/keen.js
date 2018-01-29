import {KEEN_QUERY_RESULT} from "../actions";

const keen = (state = {}, {type, data}) => {
  switch (type) {
    case KEEN_QUERY_RESULT:
      return {
        ...state,
        data
      };
    default:
      return state;
  }
};

export default keen;
