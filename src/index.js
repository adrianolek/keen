import ReactDOM from 'react-dom';
import './keen-dashboards.css';
import Application from './Application';
import Keen from 'keen-js';

const keen = new Keen({
  projectId: process.env.REACT_APP_KEEN_PROJECT_ID,
  readKey: process.env.REACT_APP_KEEN_READ_KEY,
  writeKey: process.env.REACT_APP_KEEN_WRITE_KEY,
  masterKey: process.env.REACT_APP_KEEN_MASTER_KEY
});

const dependencies = {
  keen
};

ReactDOM.render(Application.getComponent(dependencies), document.getElementById('root'));
