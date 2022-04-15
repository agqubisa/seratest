import {getApi} from '~services/base';
import {isPagination} from '~utils';

export const getDiscover = async ({params}) => {
  try {
    const result = await getApi({url: `discover/movie`, params});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getNowPlaying = async ({params}) => {
  try {
    const result = await getApi({url: 'movie/now_playing', params});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getPopular = async ({params}) => {
  let url = isPagination('movie/popular', params);
  try {
    const result = await getApi({url, params});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getDetail = async ({params}) => {
  try {
    const result = await getApi({url: `movie/${params.id}`});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getRecommendation = async ({params}) => {
  try {
    const result = await getApi({url: `movie/${params.id}/recommendations`});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getUpcoming = async ({params}) => {
  let url = isPagination('movie/upcoming', params);
  try {
    const result = await getApi({url, params});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getSimilar = async ({params}) => {
  try {
    const result = await getApi({url: `movie/${params.id}/similar`});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getImages = async ({params}) => {
  try {
    const result = await getApi({url: `movie/${params.id}/images`});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};

export const getSearch = async ({params}) => {
  let url = isPagination(`search/movie`, params);
  url = `${url}&query=${params.searchBy}`;
  try {
    const result = await getApi({url, params});
    return result;
  } catch (error) {
    console.log('error : ', error);
  }
};
