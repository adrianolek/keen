import React from 'react';
import Layout from './components/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page from './components/Page';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/about" render={() => <Page title="About"/>}/>
        <Route path="/contact" render={() => <Page title="Contact"/>}/>
        <Route path="/" render={() => <Page title="Welcome"/>}/>
      </Switch>
    </Layout>
  </Router>
);

export default App;
