import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.SVGPathElement = function () {}; // workaround for a missing c3js dependency

jest.mock('keen-explorer/dist/keen-explorer', () => {
  global.Keen = {
    Explorer: {
      App: jest.fn(() => ({
        client: jest.fn().mockReturnThis(),
        persistence: jest.fn().mockReturnThis(),
        fetch: jest.fn().mockReturnThis()
      }))
    }
  }
});
