import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {globalStyle, red} from '~common';
import {useSelector} from 'react-redux';
import {PotraitCard} from '~components';

export const Nowplaying = ({title = 'title', seeMore = false, moreButton}) => {
  const {data, isLoading} = useSelector(state => state.nowPlayingReducer);

  return (
    <View style={globalStyle.section}>
      <View style={styles.titleContainer}>
        <Text style={globalStyle.text.title2}>{title}</Text>
        {seeMore && (
          <Text
            style={{...globalStyle.text.title2, color: red}}
            onPress={moreButton}>
            Lihat Semua
          </Text>
        )}
      </View>

      <FlatList
        data={Array(10).fill('')}
        keyExtractor={({value, index}) => index}
        renderItem={value => <PotraitCard />}
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
