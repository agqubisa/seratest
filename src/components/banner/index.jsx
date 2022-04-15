import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Placeholder, PlaceholderMedia, Shine} from 'rn-placeholder';

import {moderateScale, greyLight, screenHeight} from '~common';
import {Image} from '~components';
import {IMG_URL} from '~constant';
import {ADDLASTSEEN} from '~constant/actionType';
import {dispatch, navigationPush} from '~utils';

export const NowPlayingBanner = ({data, loading}) => {
  return loading ? (
    <Placeholder Animation={Shine} style={styles.container}>
      <PlaceholderMedia style={styles.image} />
    </Placeholder>
  ) : (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch({
          type: ADDLASTSEEN,
          value: {
            id: data?.id,
            image: data?.poster_path,
            title: data?.title,
          },
        });
        navigationPush('Detail', {id: data?.id});
      }}>
      <Image
        source={{uri: `${IMG_URL}${data?.poster_path}`}}
        style={styles.image}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(screenHeight / 2),
    width: '90%',
    alignSelf: 'center',
    borderRadius: moderateScale(27.5),
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: moderateScale(27.5),
    backgroundColor: greyLight,
  },
});
