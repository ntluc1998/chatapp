import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgessiveImage, FloatingButtonAction } from '@components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from '@theme';
import { wp, hp } from '@contants';
import { chats } from '@mocks';
export default function ContactScreen() {
  const navigation = useNavigation();

  const renderItemSeparator = () => <View style={styles.itemSeparator} />;

  const renderAvatar = (uri) => (
    <ProgessiveImage source={{ uri }} style={styles.avatar} />
  );

  const renderListHeaderComponent = () => (
    <View>
      <TouchableOpacity style={styles.itemContainer}>
        <FloatingButtonAction
          iconName="account-multiple"
          extraStyle={styles.icGroup}
          // onPress={() => navigation.navigate('Contacts', {})}
        />
        <Text style={[styles.name, { paddingLeft: wp(10) }]}>New Group</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemContainer}>
        <FloatingButtonAction
          iconName="account-plus"
          extraStyle={styles.icGroup}
          // onPress={() => navigation.navigate('Contacts', {})}
        />
        <View style={styles.newContactContainer}>
          <Text style={[styles.name]}>
            New Contact
          </Text>
          <Ionicons name="qr-code-sharp" size={30} style={{ opacity: 0.8 }} />
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ index, item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        {renderAvatar(item?.imageUri)}
        <View style={styles.itemContent}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.name}>{item?.name || ''}</Text>
            <Text numberOfLines={1} style={styles.status} colorName="status">
              {item?.status || ''}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(_, index) => index + ''}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        ListHeaderComponent={renderListHeaderComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemContainer: {
    flex: 0,
    flexDirection: 'row',
    paddingHorizontal: wp(15),
    // paddingVertical: hp(5),
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
    paddingLeft: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(70),
  },
  itemSeparator: {
    height: 1,
    width: '81%',
    alignSelf: 'flex-end',
  },
  avatar: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
  },
  name: {
    fontWeight: 'bold',
    fontSize: hp(18),
  },
  status: {
    //color: 'rgba(255, 255, 255, 0.7)',
    fontSize: hp(15),
    opacity: 0.8,
  },
  icGroup: {
    backgroundColor: '#009999',
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
  },
  newContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: wp(10),
  },
});
