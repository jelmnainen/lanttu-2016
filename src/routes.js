import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import FrontpageContainer from './containers/FrontpageContainer';
import NewspageContainer from './containers/NewspageContainer';
import CompoContainer from './containers/CompoContainer';
import InstructionsContainer from './containers/InstructionsContainer'

export default (
  <Route path="/" component={App}>
    <Route path="/frontpage" component={FrontpageContainer} />
    <Route path="/news/:id" component={NewspageContainer} />
    <Route path="/compos/:id" component={CompoContainer} />
    <Route path="/instructions" component={InstructionsContainer} />
    <IndexRedirect to="/frontpage" />
  </Route>
);
