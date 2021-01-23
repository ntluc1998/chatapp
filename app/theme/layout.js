import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import { light, dark } from '../contants';
import { useColorScheme } from '../hooks';

const colors = {
  light,
  dark,
};
export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];
  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colors[theme][colorName];
  }
}

export function Text(props) {
  const {
    style,
    lightColor,
    darkColor,
    colorName = 'text',
    ...otherProps
  } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    colorName
  );

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
