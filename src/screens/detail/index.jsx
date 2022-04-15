import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

import {
  getDetail,
  getImages,
  getRecommendation,
  getSimilar,
} from '~services/api';

import {
  MovieDetail,
  MovieImages,
  MovieRecommendation,
  MovieSimilar,
} from './components';

const DetailScreen = ({route}) => {
  const id = route.params.id;

  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState();
  const [images, setImages] = useState();
  const [recommendation, setRecommendation] = useState();
  const [similar, setSimilar] = useState();

  const getPromise = () => {
    setLoading(true);
    Promise.all([
      getDetail({params: {id}}),
      getImages({params: {id}}),
      getRecommendation({params: {id}}),
      getSimilar({params: {id}}),
    ])
      .then(([detail, images, recommendation, similar]) => {
        setDetail(detail);
        setImages(images.posters);
        setRecommendation(recommendation.results);
        setSimilar(similar.results);
      })
      .finally(() => setLoading(false));
  };

  const onRefresh = () => getPromise();

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={loading} />
      }>
      <MovieDetail data={detail} loading={loading} />
      <MovieImages data={images} loading={loading} />
      <MovieRecommendation data={recommendation} loading={loading} />
      <MovieSimilar data={similar} loading={loading} />
    </ScrollView>
  );
};

export default DetailScreen;
