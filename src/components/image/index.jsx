import React from 'react';
import FastImage from 'react-native-fast-image';

import {grey} from '~common';

export const Image = ({source, style, resizeMode}) => {
  return (
    <FastImage
      style={[{backgroundColor: grey}, style]}
      source={source}
      resizeMode={resizeMode}
    />
  );
};
