import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {greyDark, moderateScale, red, white} from '~common';
import {Icons, Text} from '~components';
import {REMOVEALLLASTSEARCH, REMOVEONELASTSEARCH} from '~constant/actionType';
import {dispatch, navigationRef} from '~utils';

export const SearchHistory = ({data}) => {
  return data?.length > 0 ? (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text type="title2">Terakhir dicari</Text>
        <Text
          type="description"
          style={{color: red}}
          onPress={() => dispatch({type: REMOVEALLLASTSEARCH})}>
          Hapus Semua
        </Text>
      </View>
      {data.map((history, index) => (
        <Pressable
          key={index}
          onPress={() =>
            navigationRef.navigate('ListContent', {
              name: 'search',
              searchBy: history,
            })
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: moderateScale(10),
          }}>
          <Icons
            name="clock"
            color={greyDark}
            size={moderateScale(17)}
            style={{
              marginRight: moderateScale(10),
            }}
          />
          <Text style={{flex: 1}} type="subTitle1">
            {history}
          </Text>
          <Pressable
            style={{paddingLeft: moderateScale(10)}}
            onPress={() =>
              dispatch({type: REMOVEONELASTSEARCH, value: history})
            }>
            <Icons name="x" color={greyDark} size={moderateScale(17)} />
          </Pressable>
        </Pressable>
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
    marginBottom: moderateScale(6),
  },
  titleContainer: {
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
