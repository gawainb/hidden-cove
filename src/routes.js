import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from 'components';
import { Home, Add, About } from 'containers';

// App routes
const Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      {/* IndexRoute renders Home container by default */}
      <IndexRoute component={Home} />
      <Route path="Add" component={Add} />
      <Route path="About" component={About} />
    </Route>
  </Router>
);

export default Routes;
