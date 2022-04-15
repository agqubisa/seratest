import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Placeholder, PlaceholderMedia, Shine} from 'rn-placeholder';

import {globalStyle, moderateScale} from '~common';
import {Image, Text} from '~components';
import {IMG_URL_RESIZE} from '~constant';

export const MovieImages = ({data, loading}) => {
  const renderContent = item => {
    if (loading || data?.length === 0) {
      return (
        <Placeholder Animation={Shine}>
          <PlaceholderMedia style={styles.image} />
        </Placeholder>
      );
    } else {
      return (
        <Image
          source={{uri: `${IMG_URL_RESIZE}${item?.file_path}`}}
          style={styles.image}
        />
      );
    }
  };

  return (
    <View style={globalStyle.section}>
      <Text type="title2">~ Poster ~</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => renderContent(item)}
        style={{
          marginHorizontal: moderateScale(-16),
          marginTop: moderateScale(-10),
        }}
        contentContainerStyle={{
          padding: moderateScale(16),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: moderateScale(100),
    height: moderateScale(150),
    borderRadius: moderateScale(8),
    marginRight: moderateScale(6),
  },
});
