import {Dimensions} from 'react-native';

const deviceDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const guidelineBaseWidth = 360;

export const deviceWidth = deviceDimensions.width;
export const deviceHeight = deviceDimensions.height;

export const screenWidth = screenDimensions.width;
export const screenWidthScale = ratio => (screenWidth * ratio) / 100;
export const screenHeight = screenDimensions.height;
export const screenHeightScale = ratio => (screenHeight * ratio) / 100;

export const scale = size => (screenWidth / guidelineBaseWidth) * size;
export const moderateScale = (size, factor = 0.85) =>
  size + (scale(size) - size) * factor;
