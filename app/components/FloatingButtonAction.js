import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { wp, hp } from '@contants';
export default function FloatingButtonAction({
  iconName,
  extraStyle,
  onPress,
  color = '#FFF',
}) {
  return (
    <TouchableOpacity
      style={{ ...styles.floatingBtn, ...extraStyle }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={iconName} color={color} size={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingBtn: {
    width: wp(60),
    height: wp(60),
    borderRadius: wp(30),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(10),
  },
});
