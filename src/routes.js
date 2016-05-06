import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import FrontpageContainer from './containers/FrontpageContainer';

export default (
  <Route path="/" component={App}>
    <Route path="/frontpage" component={FrontpageContainer} />
    <IndexRedirect to="/frontpage" />
  </Route>
);
