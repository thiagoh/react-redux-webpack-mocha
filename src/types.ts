import { Action as ReduxAction } from 'redux';

export interface FunctionalComponent {
  (props: any): JSX.Element | null | false;
}
export interface Action extends ReduxAction {
  type: string;
  payload?: any;
}
