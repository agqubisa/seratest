import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Shine,
} from 'rn-placeholder';

import {globalStyle, moderateScale, screenHeight} from '~common';
import {Image, ListData, Text} from '~components';
import {IMG_URL, IMG_URL_RESIZE} from '~constant';

export const MovieDetail = ({data, loading}) => {
  return loading ? (
    <Placeholder Animation={Shine}>
      <PlaceholderMedia style={styles.image} />
      <View style={styles.container}>
        <PlaceholderMedia style={styles.poster} />
        <View style={styles.detailContainer}>
          <PlaceholderLine />
          <View style={styles.listDataContainer}>
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
            <PlaceholderLine />
          </View>
        </View>
      </View>
      <View style={globalStyle.section}>
        <Text type="title2">Description</Text>
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
      </View>
    </Placeholder>
  ) : (
    <>
      <Image
        source={{uri: `${IMG_URL}${data?.backdrop_path}`}}
        style={styles.image}
      />
      <View style={styles.container}>
        <Image
          source={{uri: `${IMG_URL_RESIZE}${data?.poster_path}`}}
          style={styles.poster}
        />
        <View style={styles.detailContainer}>
          <Text type="title1">{data?.title}</Text>
          <View style={styles.listDataContainer}>
            <ListData
              title="Genre"
              value={data?.genres.map(
                (value, index) =>
                  `${value.name}${index !== data?.genres.length - 1 && ', '}`,
              )}
            />
            <ListData title="Durasi" value={`${data?.runtime} menit`} />
            <ListData title="Age" value={data?.adult ? 'Adult' : 'Everyone'} />
            <ListData
              title="Avg Rating"
              value={`${data?.vote_average} (${data?.vote_count})`}
            />
          </View>
        </View>
      </View>
      <View style={globalStyle.section}>
        <Text type="title2">~ Description ~</Text>
        <Text type="description" style={styles.description}>
          {data?.overview}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyle.section,
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: moderateScale(screenHeight / 4),
    resizeMode: 'cover',
  },
  poster: {
    width: moderateScale(100),
    height: moderateScale(150),
    borderRadius: moderateScale(8),
    marginTop: moderateScale(-40),
  },
  detailContainer: {
    marginLeft: moderateScale(16),
    flex: 1,
  },
  listDetail: {
    flexDirection: 'row',
  },
  listDataContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  description: {
    lineHeight: moderateScale(20),
    textAlign: 'justify',
  },
});
