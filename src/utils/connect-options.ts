import { Options } from 'react-redux';

export const getWithRef = (withRef: boolean, object = {}) => {
  return { ...object, withRef } as Options<any, any, any>;
};
