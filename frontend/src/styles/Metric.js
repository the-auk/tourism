import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;
const fontScale = (size, factor = 0.25)=>size+(horizontalScale(size)-size)*factor;

export { horizontalScale, verticalScale, moderateScale, fontScale };