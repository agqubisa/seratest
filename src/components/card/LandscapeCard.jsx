import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Shine,
} from 'rn-placeholder';

import {grey, moderateScale, white} from '~common';
import {Image, ListData, Text} from '~components';
import {IMG_URL_RESIZE} from '~constant';
import {ADDLASTSEEN} from '~constant/actionType';
import {dispatch, navigationRef} from '~utils';

export const LandscapeCard = ({item, loading, style}) => {
  return loading ? (
    <Placeholder Animation={Shine}>
      <View style={[styles.container, style]}>
        <PlaceholderMedia style={styles.image} />
        <View style={styles.detailContainer}>
          <PlaceholderLine />
          <PlaceholderLine />
          <PlaceholderLine />
          <PlaceholderLine />
          <PlaceholderLine />
        </View>
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
        navigationRef.navigate('Detail', {id: item?.id});
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
      <View style={styles.detailContainer}>
        <Text type="title2" numberOfLines={2}>
          {item?.title}
        </Text>
        <ListData title="Overview" value={item?.overview} />
        <ListData title="Release at" value={`${item?.release_date}`} />
        <ListData title="Age" value={item?.adult ? 'Adult' : 'Everyone'} />
        <ListData
          title="Avg Rating"
          value={`${item?.vote_average} (${item?.vote_count})`}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: moderateScale(16),
    backgroundColor: white,
    borderBottomColor: grey,
    borderBottomWidth: 0.7,
  },
  image: {
    width: '35%',
    height: moderateScale(180),
    borderRadius: moderateScale(10),
    resizeMode: 'cover',
  },
  noImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    paddingLeft: moderateScale(16),
    flex: 1,
    justifyContent: 'space-between',
  },
});
