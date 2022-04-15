import React, {createRef, useEffect, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';

import {globalStyle, greyDark, moderateScale} from '~common';
import {Header, Icons, TextInput} from '~components';
import {ADDLASTSEARCH} from '~constant/actionType';
import {dispatch, navigationRef} from '~utils';

import {LastSeen, SearchHistory} from './components';

const ListSearchScreen = () => {
  const searchRef = createRef();

  const [searchText, setSearchText] = useState('');
  const {lastSeen, lastSearch} = useSelector(state => state.historyReducer);

  useEffect(() => {
    searchRef.current?.focus();
  }, [searchRef]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <View style={globalStyle.searchBar}>
          <TextInput
            ref={searchRef}
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
            onSubmit={searchText => {
              if (searchText && searchText.length > 0) {
                dispatch({type: ADDLASTSEARCH, value: searchText});
                navigationRef.navigate('ListContent', {
                  name: 'search',
                  searchBy: searchText,
                });
              }
            }}
            postFixComponent={
              searchText?.length > 0 && (
                <Pressable onPress={() => setSearchText('')}>
                  <Icons
                    name="closecircle"
                    type="antdesign"
                    size={moderateScale(18)}
                    color={greyDark}
                  />
                </Pressable>
              )
            }
          />
        </View>
      </Header>
      <ScrollView style={{flex: 1}}>
        <SearchHistory data={lastSearch} />
        <LastSeen data={lastSeen} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListSearchScreen;
