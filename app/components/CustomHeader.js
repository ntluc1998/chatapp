import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useThemeColor } from '@theme';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from '@theme';
import { hp ,wp} from '@contants';
import { chats } from '@mocks';
export const Right = () => {
  return (
    <View style={styles.containerRight}>
      <TouchableOpacity style={styles.iconPress}>
        <Ionicons name="search" size={30} color={useThemeColor({}, 'text')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconPress}>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={30}
          color={useThemeColor({}, 'text')}
        />
      </TouchableOpacity>
    </View>
  );
};

export const Left = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerLeft}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconPress}
      >
        <Ionicons
          name="arrow-back"
          size={30}
          color={useThemeColor({}, 'text')}
        />
      </TouchableOpacity>
      <View style={{ justifyContent: 'center' }}>
        <Text style={styles.title}>Select Contacts</Text>
        <Text style={styles.content}>{chats?.length} contacts</Text>
      </View>
    </View>
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
  containerLeft: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor:'transparent',
    alignItems: 'center',
    paddingBottom:hp(5)
  },
  title: {
    fontSize: wp(20),
    fontWeight: 'bold',
  },
  content: {
    fontSize: wp(15),
  },
});
