import React from 'react';
import Layout from './components/Layout';
import {Router, Route, Switch} from 'react-router-dom';
import Page from './components/Page';
import Dashboard from './containers/Dashboard';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import keenReducer from './reducers/keen';
import thunk from 'redux-thunk';
import Explorer from "./components/Explorer";

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

  static getMiddlewares(services) {
    const middlewares = [applyMiddleware(thunk.withExtraArgument(services))];

    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }

    return middlewares;
  }

  static createStore(services) {
    return createStore(
      keenReducer,
      compose(...Application.getMiddlewares(services))
    );
  }

  static getComponent(dependencies) {
    const services = Application.createServices(dependencies);
    const store = Application.createStore(services);

    Application.initializeKeenListener(services.history, services.keen);

    return <ApplicationComponent services={services} store={store}/>;
  }
}

const ApplicationComponent = ({services, store}) => (
  <Provider store={store}>
    <Router history={services.history}>
      <Layout>
        <Switch>
          <Route path="/dashboard" render={() => <Dashboard/>}/>
          <Route path="/explorer" render={() => <Explorer keen={services.keen}/>}/>
          <Route path="/about" render={() => <Page title="About"/>}/>
          <Route path="/contact" render={() => <Page title="Contact"/>}/>
          <Route path="/" render={() => <Page title="Welcome"/>}/>
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default Application;
