import React from 'react';
import {View} from 'react-native';

import {Text} from '~components';

export const ListData = ({title, value}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text type="tag1" style={{width: '35%'}}>
        {title}
      </Text>
      <Text type="body1" style={{flex: 1}} numberOfLines={8}>
        {value}
      </Text>
    </View>
  );
};
