import { Action } from '../types';
import { SAVE_COMMENT } from '../actions/types';

const INITIAL_STATE: string[] = [];

export default (state: string[] = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
