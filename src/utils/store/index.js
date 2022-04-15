import {Store} from '~redux';

export const dispatch = action => {
  return Store.dispatch(action);
};
