import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.SVGPathElement = function () {}; // workaround for a missing c3js dependency
