import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { Home } from './components/home';
import { CommentBox } from './components/comment-box';
import { CommentList } from './components/comment-list';

import { App } from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <App />
        <Route
          exact
          path="/"
          component={({ match }) => {
            console.log('nha1', match);
            return <Home />;
          }}
        />
        <Route
          exact
          path="/new"
          component={({ match }) => {
            console.log('nha2', match);
            return <CommentBox />;
          }}
        />
        <Route
          exact
          path="/resources"
          component={({ match }) => {
            console.log('nha3', match);
            return <CommentList />;
          }}
        />
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
