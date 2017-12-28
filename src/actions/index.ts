import { Action } from '../types';

import { SAVE_COMMENT, CHANGE_AUTH } from './types';

export const saveComment = (comment: string): Action => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const authenticate = (isLoggedIn: boolean): Action => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
