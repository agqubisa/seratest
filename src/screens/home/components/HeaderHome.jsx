import React from 'react';
import {View} from 'react-native';

import {globalStyle, greyDark, moderateScale} from '~common';
import {Header, Icons, TextInput} from '~components';
import {navigationRef} from '~utils';

export const HomeHeader = () => {
  return (
    <Header canGoBack={false}>
      <View style={[globalStyle.searchBar, {marginLeft: 0}]}>
        <TextInput
          isDisable
          onPress={() => navigationRef.navigate('ListSearch')}
          placeholderText="Find Movie here..."
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
        />
      </View>
    </Header>
  );
};
