import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  Pressable,
} from 'react-native';

import {black, grey, greyDark, moderateScale} from '~common';

export const TextInput = React.forwardRef(
  (
    {
      value = '',
      placeholderText = '',

      isHidden = false,
      isDisable = false,
      multiline = false,

      onChange = () => {},
      onSubmit = () => {},

      // Components
      prefixComponent,
      postFixComponent,

      // Style
      wrapperStyle = {},
      textInputStyle = {},

      // button
      onPress = () => {},
    },
    ref,
  ) => {
    return (
      <View style={[{width: '100%'}, wrapperStyle]}>
        {/* Text Input */}
        <Pressable
          style={[
            styles.textInputWrapper,
            !prefixComponent && {paddingHorizontal: moderateScale(12)},
            textInputStyle,
          ]}
          onPress={() => {
            if (isDisable) onPress();
          }}
          disabled={!isDisable}>
          {/* Prefix */}
          {prefixComponent && (
            <View style={[styles.prepostFixWrapper, styles.prefixWrapper]}>
              {prefixComponent}
            </View>
          )}
          {/* Input */}
          <RNTextInput
            ref={ref}
            value={value}
            onChangeText={onChange}
            secureTextEntry={isHidden}
            style={styles.textInputStyle}
            placeholder={placeholderText}
            placeholderTextColor={greyDark}
            onSubmitEditing={({nativeEvent}) => {
              onSubmit(nativeEvent.text);
            }}
            editable={!isDisable}
            multiline={multiline}
          />
          {/* Postfix */}
          {postFixComponent && (
            <View style={[styles.prepostFixWrapper, styles.postFixWrapper]}>
              {postFixComponent}
            </View>
          )}
        </Pressable>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  titleWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(7),
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    height: moderateScale(40),
    borderRadius: moderateScale(4),
    borderWidth: 1,
    borderColor: grey,
  },
  textInputStyle: {
    flex: 1,
    fontSize: moderateScale(11),
    fontWeight: '400',
    color: black,
  },
  prepostFixWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(4),
    borderBottomLeftRadius: moderateScale(4),
  },
  prefixWrapper: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(5),
  },
  postFixWrapper: {
    paddingRight: moderateScale(10),
    paddingLeft: moderateScale(5),
  },
});
