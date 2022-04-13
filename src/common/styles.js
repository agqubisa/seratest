import {StyleSheet} from 'react-native';
import {black, greyLight, white} from './colors';
import {moderateScale} from './dimension';
import {nunitoSansRegular, robotoSemiBold} from './fonts';

export const globalStyle = {
  section: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(25),
    marginBottom: moderateScale(6),
    backgroundColor: white,
  },
  section2: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(25),
    backgroundColor: 'white',
  },
  section3: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(16),
    backgroundColor: 'white',
  },

  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(40),
    backgroundColor: greyLight,
    marginLeft: moderateScale(10),
    borderRadius: 4,
  },

  text: {
    title1: {
      fontSize: moderateScale(16),
      fontWeight: '500',
      color: black,
    },
    title2: {
      fontSize: moderateScale(14),
      fontWeight: '500',
      color: black,
    },

    // sub title
    subTitle1: {
      fontSize: moderateScale(12),
      fontWeight: '500',
      color: black,
    },
    subTitle2: {
      fontSize: moderateScale(10),
      fontWeight: '500',
      color: black,
    },

    // body
    body1: {
      fontSize: moderateScale(11),
      fontFamily: nunitoSansRegular,
      fontWeight: '400',
      color: black,
    },
    body2: {
      fontSize: moderateScale(9),
      fontFamily: nunitoSansRegular,
      fontWeight: '400',
      color: black,
    },

    description: {
      fontSize: moderateScale(12),
      fontFamily: nunitoSansRegular,
      fontWeight: '400',
      color: black,
    },

    // tag
    tag1: {
      fontSize: moderateScale(10),
      fontFamily: nunitoSansRegular,
      fontWeight: '500',
      color: black,
    },
    tag2: {
      fontSize: moderateScale(8),
      fontFamily: nunitoSansRegular,
      fontWeight: '500',
      color: black,
    },

    button1: {
      fontSize: moderateScale(12),
      fontFamily: robotoSemiBold,
      fontWeight: '500',
      color: white,
    },
    button2: {
      fontSize: moderateScale(10),
      fontFamily: robotoSemiBold,
      fontWeight: '500',
      color: white,
    },
  },
};
