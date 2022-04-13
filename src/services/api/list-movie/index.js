import {getApi} from '~services/base';

export const getDiscover = ({params}) =>
  getApi({url: `discover/movie`, params});

export const getNowPlaying = ({params}) =>
  getApi({url: 'movie/now_playing', params});

export const getPopular = ({params}) => getApi({url: 'movie/popular', params});

export const getUpcoming = ({params}) =>
  getApi({url: 'movie/upcoming', params});
