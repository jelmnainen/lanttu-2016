import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import FrontpageContainer from './containers/FrontpageContainer';
import NewspageContainer from './containers/NewspageContainer';
import CompoContainer from './containers/CompoContainer';

export default (
  <Route path="/" component={App}>
    <Route path="/frontpage" component={FrontpageContainer} />
    <Route path="/news/:id" component={NewspageContainer} />
    <Route path="/compos/:id" component={CompoContainer} />
    <IndexRedirect to="/frontpage" />
  </Route>
);
