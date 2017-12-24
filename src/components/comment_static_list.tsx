import * as React from 'react';
import { Component } from 'react';

import * as actions from '../actions';
import { FunctionalComponent } from '../types';

const CommentStaticList: FunctionalComponent = props => {
  return (
    <ul className="comment-static-list">
      <li>This comment will always be here!</li>
    </ul>
  );
};

export { CommentStaticList };
