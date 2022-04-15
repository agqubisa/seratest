import {
  setNowPlaying,
  setNowPlayingLoading,
  setPopular,
  setPopularLoading,
  setUpcoming,
  setUpcomingLoading,
} from '~constant/actionType';
import {getNowPlaying, getPopular, getUpcoming} from '~services/api';

export const getNP = () => async dispatch => {
  try {
    dispatch({type: setNowPlayingLoading, value: true});
    const result = await getNowPlaying({});
    dispatch({type: setNowPlaying, value: result});
  } catch (error) {
    console.log('error : ', error);
    dispatch({type: setNowPlayingLoading, value: false});
  }
};

export const getPopularMovie = () => async dispatch => {
  try {
    dispatch({type: setPopularLoading, value: true});
    const result = await getPopular({});
    dispatch({type: setPopular, value: result});
  } catch (error) {
    console.log('error : ', error);
    dispatch({type: setPopularLoading, value: false});
  }
};

export const getUpcomingMovie = () => async dispatch => {
  try {
    dispatch({type: setUpcomingLoading, value: true});
    const result = await getUpcoming({});
    dispatch({type: setUpcoming, value: result});
  } catch (error) {
    console.log('error : ', error);
    dispatch({type: setUpcomingLoading, value: false});
  }
};
