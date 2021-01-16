import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { ic_placeholder } from '@assets';
export default ProgessiveImage = ({
  defaultImageSource = ic_placeholder,
  source,
  style,
  ...props
}) => {
  const defaultImageAnimted = new Animated.Value(0);
  const imageAnimted = new Animated.Value(0);

  const handleDefaultImageLoad = () => {
    Animated.timing(defaultImageAnimted, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoad = () => {
    Animated.timing(imageAnimted, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Image
        style={[style, { opacity: defaultImageAnimted }]}
        source={defaultImageSource}
        onLoad={handleDefaultImageLoad}
        blurRadius={1}
        {...props}
      />
      <Animated.Image
        style={[styles.overLoad, style, { opacity: imageAnimted }]}
        source={source}
        onLoad={handleImageLoad}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  overLoad: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
