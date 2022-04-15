import React from 'react';
import {Text as RNText} from 'react-native';

import {globalStyle} from '~common';

export const Text = ({type, style, children, onPress, numberOfLines}) => {
  const styles = () => {
    switch (type) {
      case 'title1':
        return globalStyle.text.title1;
      case 'title2':
        return globalStyle.text.title2;
      case 'subTitle1':
        return globalStyle.text.subTitle1;
      case 'subTitle2':
        return globalStyle.text.subTitle2;
      case 'body1':
        return globalStyle.text.body1;
      case 'body2':
        return globalStyle.text.body2;
      case 'tag1':
        return globalStyle.text.tag1;
      case 'tag2':
        return globalStyle.text.tag2;
      case 'description':
        return globalStyle.text.description;
      default:
        return {};
    }
  };

  return (
    <RNText
      style={[styles(), style]}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};
