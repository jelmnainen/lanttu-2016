import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import FrontpageContainer from './containers/FrontpageContainer';
import NewspageContainer from './containers/NewspageContainer';

export default (
  <Route path="/" component={App}>
    <Route path="/frontpage" component={FrontpageContainer} />
    <Route path="/news/:id" component={NewspageContainer} />
    <IndexRedirect to="/frontpage" />
  </Route>
);
