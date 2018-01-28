import React from 'react';
import Layout from './components/Layout';
import {Router, Route, Switch} from 'react-router-dom';
import Page from './components/Page';
import Dashboard from './components/Dashboard';
import createHistory from 'history/createBrowserHistory';

class Application {
  static createServices(dependencies) {
    return {
      history: createHistory(),
      keen: dependencies.keen
    };
  }

  static initializeKeenListener(history, keen) {
    /**
     * Extend events with some data and fire initial event on page load.
     */
    keen.initAutoTracking({
      recordClicks: false,
      recordFormSubmits: false,
      recordPageViews: true,
      recordScrollState: false
    });

    history.listen(() => {
      keen.recordEvent('pageviews', {});
    });
  }

  static getComponent(dependencies) {
    const services = Application.createServices(dependencies);

    Application.initializeKeenListener(services.history, services.keen);

    return <ApplicationComponent services={services}/>;
  }
}

const ApplicationComponent = ({services}) => (
  <Router history={services.history}>
    <Layout>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/about" render={() => <Page title="About"/>}/>
        <Route path="/contact" render={() => <Page title="Contact"/>}/>
        <Route path="/" render={() => <Page title="Welcome"/>}/>
      </Switch>
    </Layout>
  </Router>
);

export default Application;
