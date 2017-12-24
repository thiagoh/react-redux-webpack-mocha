import { Action } from '../types';

import { SAVE_COMMENT } from './types';

export const saveComment = (comment: string): Action => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};
