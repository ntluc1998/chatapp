import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from '@screens';
import { CustomHeader } from '@components';
import { StyleSheet } from 'react-native';
const HomeStack = createStackNavigator();

const HeaderRight = () => <CustomHeader.Right />;

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
