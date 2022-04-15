import React, {useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import {globalStyle, greyDark, moderateScale, white} from '~common';
import {Header, Icons, LandscapeCard, Text, TextInput} from '~components';
import {ADDLASTSEARCH} from '~constant/actionType';
import {getPopular, getSearch, getUpcoming} from '~services/api';
import {dispatch, navigationPush} from '~utils';

const ListContentScreen = ({route}) => {
  const [searchText, setSearchText] = useState(route.params?.searchBy ?? '');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState();

  const getPopularMovie = async () => {
    try {
      setLoading(true);
      const result = await getPopular({
        params: {page: page},
      });
      setData([...data, ...result.results]);
      setPageInfo({
        page: result.page,
        hasNextPage: result.page < result.total_pages,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getUpcomingMovie = async () => {
    try {
      setLoading(true);
      const result = await getUpcoming({
        params: {page: page},
      });
      setData([...data, ...result.results]);
      setPageInfo({
        page: result.page,
        hasNextPage: result.page < result.total_pages,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSearchMovie = async () => {
    try {
      setLoading(true);
      const result = await getSearch({
        params: {page: page, searchBy: searchText},
      });
      setData([...data, ...result.results]);
      setPageInfo({
        page: result.page,
        hasNextPage: result.page < result.total_pages,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onLoadContent = () => {
    switch (route.params.name) {
      case 'popular':
        getPopularMovie();
        break;
      case 'upcoming':
        getUpcomingMovie();
      case 'search':
        getSearchMovie();
      default:
        break;
    }
  };

  useEffect(() => {
    onLoadContent();
  }, [page]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: white}}>
      <Header>
        <View style={globalStyle.searchBar}>
          <TextInput
            value={searchText}
            onChange={setSearchText}
            placeholderText="Find your movie here ..."
            textInputStyle={{
              flex: 1,
              borderWidth: 0,
            }}
            prefixComponent={
              <Icons
                name="search"
                size={moderateScale(14)}
                style={{color: greyDark}}
              />
            }
            onSubmit={value => {
              if (value && value.length > 0) {
                dispatch({type: ADDLASTSEARCH, value: value});
                navigationPush('ListContent', {
                  name: 'search',
                  searchBy: value,
                });
              }
            }}
          />
        </View>
      </Header>
      <FlatList
        data={data}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item, index}) => (
          <LandscapeCard key={`${index}`} item={item} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setPage(1);
              setData([]);
            }}
          />
        }
        ListFooterComponent={
          loading && data.length === 0 ? (
            <>
              <LandscapeCard loading />
              <LandscapeCard loading />
              <LandscapeCard loading />
            </>
          ) : pageInfo?.hasNextPage ? (
            <LandscapeCard loading />
          ) : (
            <></>
          )
        }
        ListEmptyComponent={
          data.length === 0 && !loading ? (
            <Text
              style={{
                textAlign: 'center',
                textAlignVertical: 'center',
                flex: 1,
              }}
              type="title2">
              Movie Not Found
            </Text>
          ) : (
            <></>
          )
        }
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (pageInfo?.hasNextPage && !loading) {
            setPage(page + 1);
          }
        }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: pageInfo?.hasNextPage ? moderateScale(50) : 0,
        }}
      />
    </SafeAreaView>
  );
};

export default ListContentScreen;

const styles = StyleSheet.create({});
