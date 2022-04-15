import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {greyDark, moderateScale, red, white} from '~common';
import {Icons, Image, Text} from '~components';
import {IMG_URL_RESIZE} from '~constant';
import {REMOVEALLLASTSEEN, REMOVEONELASTSEEN} from '~constant/actionType';
import {dispatch, navigationRef} from '~utils';

const ListMovie = ({data}) => {
  return (
    <Pressable
      style={styles.listContainer}
      onPress={() => navigationRef.navigate('Detail', {id: data?.id})}>
      <Image
        source={{uri: `${IMG_URL_RESIZE}${data?.image}`}}
        style={styles.imageList}
      />
      <Text type="subTitle1" style={{flex: 1, marginLeft: moderateScale(10)}}>
        {data?.title}
      </Text>
      <Pressable
        style={{alignSelf: 'center'}}
        onPress={() => dispatch({type: REMOVEONELASTSEEN, value: data})}>
        <Icons name="x" color={greyDark} size={moderateScale(17)} />
      </Pressable>
    </Pressable>
  );
};

export const LastSeen = ({data}) => {
  return data?.length > 0 ? (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text type="subTitle1">Terakhir dilihat</Text>
        <Text
          type="description"
          style={{color: red}}
          onPress={() => dispatch({type: REMOVEALLLASTSEEN})}>
          Hapus Semua
        </Text>
      </View>
      {data.map(item => (
        <ListMovie key={item.id} data={item} />
      ))}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(16),
    backgroundColor: white,
  },
  titleContainer: {
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(5),
  },
  imageList: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(40),
    resizeMode: 'cover',
  },
});
