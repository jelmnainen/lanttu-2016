import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import PostsContainer from './containers/PostsContainer';

export default (
  <Route path="/" component={App}>
    <Route path="/frontpage" component={PostsContainer} />
    <IndexRedirect to="/frontpage" />
  </Route>
);
