import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreen} from '@screens';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
const HomeStack = createStackNavigator();

const HeaderRight = () => (
  <View style={styles.containerRight}>
    <TouchableOpacity style={styles.iconPress}>
      <Ionicons name="search" size={30} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconPress}>
      <MaterialCommunityIcons name="dots-vertical" size={30} color="#fff" />
    </TouchableOpacity>
  </View>
);

export const BottomNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerTitle: 'WhatsApp',
          headerTitleStyle: {
            fontSize: 22,
          },
          headerTitleAlign: 'left',
          headerRight: HeaderRight,
        }}
        name="Home"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};
const styles = StyleSheet.create({
  containerRight: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPress: {
    marginHorizontal: 10,
  },
});
