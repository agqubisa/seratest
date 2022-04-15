import React from 'react';
import {FlatList, View} from 'react-native';

import {globalStyle, moderateScale, screenWidth} from '~common';
import {NowPlayingBanner, Text} from '~components';

export const Nowplaying = props => {
  const {data, isLoading} = props.data;

  return (
    <View style={globalStyle.section}>
      <Text type="title2" style={{textAlign: 'center'}}>
        Now Playing
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={data}
        renderItem={({item, index}) => (
          <View style={[globalStyle.section2, {width: screenWidth}]}>
            <NowPlayingBanner data={item} loading={isLoading} />
          </View>
        )}
        style={{
          marginHorizontal: moderateScale(-16),
        }}
      />
    </View>
  );
};
