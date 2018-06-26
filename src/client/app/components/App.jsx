import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/shared/Header';
import Spinner from './components/shared/Spinner';

import './assets/styles/index.scss';

const BlogScreen_Container = Loadable({
  loader: () => import('./components/screens/blog/BlogScreen_Container'),
  loading: Spinner,
});

const PostViewScreen_Container = Loadable({
  loader: () => import('./components/screens/post-view/PostViewScreen_Container'),
  loading: Spinner,
});

const PostEditScreen_Container = Loadable({
  loader: () => import('./components/screens/post-edit/PostEditScreen_Container'),
  loading: Spinner,
});

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/blogs/:blogId/posts/:postId/edit" component={PostEditScreen_Container} />
        <Route path="/blogs/:blogId/posts/:postId" component={PostViewScreen_Container} />
        <Route path="/blogs/:blogId" component={BlogScreen_Container} />
        <Route path="/" exact component={BlogScreen_Container} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
