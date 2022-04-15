import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Shine,
} from 'rn-placeholder';

import {moderateScale, white} from '~common';
import {Image, Text} from '~components';
import {IMG_URL_RESIZE} from '~constant';
import {ADDLASTSEEN} from '~constant/actionType';
import {dispatch, navigationPush} from '~utils';

export const PotraitCard = ({item, loading, style}) => {
  return loading ? (
    <Placeholder Animation={Shine} style={[styles.container, style]}>
      <PlaceholderMedia style={styles.image} />
      <View style={styles.titleContainer}>
        <PlaceholderLine />
      </View>
    </Placeholder>
  ) : (
    <Pressable
      style={[styles.container, style]}
      onPress={() => {
        dispatch({
          type: ADDLASTSEEN,
          value: {
            id: item?.id,
            image: item?.poster_path,
            title: item?.title,
          },
        });
        navigationPush('Detail', {id: item?.id});
      }}>
      {item?.poster_path ? (
        <Image
          source={{uri: `${IMG_URL_RESIZE}${item?.poster_path}`}}
          style={styles.image}
        />
      ) : (
        <View style={[styles.image, styles.noImageContainer]}>
          <Text type="title2" style={{color: white}}>
            No Image
          </Text>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text type="subTitle1" style={{textAlign: 'center'}} numberOfLines={2}>
          {item?.title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: moderateScale(140),
    marginRight: moderateScale(8),
    backgroundColor: white,
  },
  image: {
    width: '100%',
    height: moderateScale(200),
    borderRadius: moderateScale(10),
    resizeMode: 'cover',
  },
  noImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(4),
  },
});
