import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import {brownDark, globalStyle, moderateScale} from '~common';
import {PotraitCard, Text} from '~components';

export const SectionMovie = ({
  title = 'title',
  seeMore = false,
  moreButton,
  data,
  loading,
  style,
}) => {
  return (
    <View style={[globalStyle.section, style]}>
      <View style={styles.titleContainer}>
        <Text type="title2">{title}</Text>
        {seeMore && (
          <Text type="body1" style={{color: brownDark}} onPress={moreButton}>
            Lihat Semua
          </Text>
        )}
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <PotraitCard loading={loading} item={item} />
        )}
        ListFooterComponent={
          loading &&
          data?.length === 0 && (
            <>
              <PotraitCard loading={loading} />
              <PotraitCard loading={loading} />
              <PotraitCard loading={loading} />
            </>
          )
        }
        style={{
          marginHorizontal: moderateScale(-16),
        }}
        contentContainerStyle={{
          padding: moderateScale(16),
          paddingBottom: moderateScale(-16),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
