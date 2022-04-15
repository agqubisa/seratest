import {black, cream, greyDark, white} from './colors';
import {moderateScale} from './dimension';
import {nunitoRegular, nunitoBold, nunitoLight, nunitoSemiBold} from './fonts';

export const globalStyle = {
  section: {
    padding: moderateScale(16),
    marginBottom: moderateScale(6),
    backgroundColor: white,
  },
  section2: {
    padding: moderateScale(16),
    backgroundColor: white,
  },
  section3: {
    padding: moderateScale(16),
    backgroundColor: white,
  },

  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: moderateScale(40),
    backgroundColor: cream,
    marginLeft: moderateScale(10),
    borderRadius: 4,
  },

  text: {
    title1: {
      fontSize: moderateScale(16),
      color: black,
      fontFamily: nunitoBold,
    },
    title2: {
      fontSize: moderateScale(14),
      color: black,
      fontFamily: nunitoBold,
    },

    // sub title
    subTitle1: {
      fontSize: moderateScale(12),
      fontWeight: '500',
      color: black,
      fontFamily: nunitoSemiBold,
    },
    subTitle2: {
      fontSize: moderateScale(10),
      fontWeight: '500',
      color: black,
      fontFamily: nunitoSemiBold,
    },

    // body
    body1: {
      fontSize: moderateScale(10),
      color: black,
      fontFamily: nunitoRegular,
    },
    body2: {
      fontSize: moderateScale(8),
      color: black,
      fontFamily: nunitoRegular,
    },

    description: {
      fontSize: moderateScale(12),
      color: black,
      fontFamily: nunitoRegular,
    },

    // tag
    tag1: {
      fontSize: moderateScale(10),
      color: greyDark,
      fontFamily: nunitoLight,
    },
    tag2: {
      fontSize: moderateScale(8),
      color: greyDark,
      fontFamily: nunitoLight,
    },
  },
};
