import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigationPush = (name, params) => {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.push(name, params));
};

export const navigationReplace = (name, params) => {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.replace(name, params));
};
