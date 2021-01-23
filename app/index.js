import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from '@navigation';
import { useColorScheme } from '@hooks';
import { StatusBar } from 'react-native';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}
      >
        <RootNavigation />
        <StatusBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
