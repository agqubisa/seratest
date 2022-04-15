import React, {useEffect} from 'react';
import {RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import {batch, useSelector} from 'react-redux';

import {getNP, getPopularMovie, getUpcomingMovie} from '~redux/action';
import {dispatch} from '~utils';

import {HomeHeader, Nowplaying, Popular, Upcoming} from './components';

const HomeScreen = () => {
  const {nowPlayingReducer, popularReducer, upcomingReducer} = useSelector(
    state => state,
  );

  const onRefresh = () => {
    batch(() => {
      dispatch(getNP());
      dispatch(getPopularMovie());
      dispatch(getUpcomingMovie());
    });
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeHeader />
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={
              nowPlayingReducer.isLoading ||
              popularReducer.isLoading ||
              upcomingReducer.isLoading
            }
          />
        }>
        <Nowplaying data={nowPlayingReducer} />
        <Popular data={popularReducer} />
        <Upcoming data={upcomingReducer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
