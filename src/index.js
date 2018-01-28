import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';
import registerServiceWorker from './registerServiceWorker';
import Keen from 'keen-tracking';

const keen = new Keen({
  projectId: process.env.REACT_APP_KEEN_PROJECT_ID,
  writeKey: process.env.REACT_APP_KEEN_WRITE_KEY
});

const dependencies = {
  keen
};

ReactDOM.render(Application.getComponent(dependencies), document.getElementById('root'));
registerServiceWorker();
