import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ChatScreen from './ChatScreen';
import StatusScreen from './StatusScreen';
import CallsScreen from './CallScreen';
const initialLayout = { width: Dimensions.get('window').width };
export default function HomeScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'chats', title: 'CHATS' },
    { key: 'status', title: 'STATUS' },
    { key: 'calls', title: 'CALLS' },
  ]);

  const renderScene = SceneMap({
    chats: ChatScreen,
    status: StatusScreen,
    calls: CallsScreen,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      activeColor="#009999"
      style={styles.tabBarStyle}
      labelStyle={styles.labelStyle}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  indicatorStyle: { height: 2, backgroundColor: '#009999' },
  tabBarStyle: {
    backgroundColor: 'rgba(26, 26, 0, 0.9)',
  },
  labelStyle: {
    fontSize: 16,
  },
});
