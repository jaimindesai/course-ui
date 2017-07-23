
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CoursesPage from './components/course/CoursesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CoursesPage} />
  </Route>
);