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
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={CommentBox} />
        <Route exact path="/resources" component={CommentList} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
