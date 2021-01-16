import {
    widthPercentageToDP as wp2dp,
    heightPercentageToDP as hp2dp,
  } from 'react-native-responsive-screen';
  const DEFAULT_WIDTH = 360;
  const DEFAULT_HEIGHT = 760;
  export const wp = (dimension) => {
    return wp2dp((dimension / DEFAULT_WIDTH) * 100 + '%');
  };
  
  export const hp = (dimension) => {
    return hp2dp((dimension / DEFAULT_HEIGHT) * 100 + '%');
  };