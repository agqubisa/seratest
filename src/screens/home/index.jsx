import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {black} from '~common';
import {Nowplaying} from './components';

const HomeScreen = () => {
  const onRefresh = async () => {
    // try {
    //   const result = await getList({params: {page: 1}});
    //   console.log(result);
    // } catch (error) {
    //   console.log('error : ', error);
    // }
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <View>
      <Nowplaying />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
