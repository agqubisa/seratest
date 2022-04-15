import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {white, moderateScale, black} from '~common';
import {Icons, Text} from '~components';
import {navigationRef} from '~utils';

export const Header = ({
  title,
  containerStyle,
  titleStyle,
  backAction = () => navigationRef.goBack(),
  children,
  rightButton,
  backButtonStyle,
  bottomComponent,

  isShadow = true,
  canGoBack = true,
}) => {
  return (
    <View
      style={[
        styles.mainContainer,
        containerStyle,
        isShadow && styles.mainContainerShadow,
      ]}>
      <View style={[styles.rowContainer, {justifyContent: 'flex-start'}]}>
        {canGoBack && navigationRef.canGoBack() && (
          <Pressable
            style={[
              backButtonStyle,
              {
                padding: moderateScale(16),
                margin: moderateScale(-16),
              },
            ]}
            onPress={backAction}>
            <Icons type="material" name="arrow-back" size={22} color={black} />
          </Pressable>
        )}
        <View style={[styles.rowContainer, {flex: canGoBack ? 1 : 0}]}>
          {children || (
            <Text
              type="title1"
              style={[
                titleStyle,
                {
                  marginLeft: canGoBack ? moderateScale(10) : 0,
                  alignSelf: 'center',
                },
              ]}
              numberOfLines={1}>
              {title}
            </Text>
          )}
          {rightButton && rightButton}
        </View>
      </View>
      {bottomComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: white,
    padding: moderateScale(16),
    width: '100%',
    minHeight: moderateScale(52),
  },
  mainContainerShadow: {
    elevation: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    zIndex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
