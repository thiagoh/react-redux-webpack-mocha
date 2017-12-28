import { Action } from '../types';
import { CHANGE_AUTH } from '../actions/types';

const INITIAL_STATE: boolean = false;

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};
