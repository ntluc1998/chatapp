import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { FloatingButtonAction, ProgessiveImage } from '@components';
import { wp, hp } from '@contants';
import { chats } from '@mocks';
let updateMinutes = 1;
const my_url_avatar =
  'https://simonielmusyoki.com/images/user-thumb/musyox.jpg';
export default function StatusScreen() {
  const navigation = useNavigation();

  const renderItemSeparator = () => <View style={styles.itemSeparator} />;

  const renderAvatar = (uri, style = {}, iconNameButton) => (
    <View style={[styles.imgContainer, style]}>
      <ProgessiveImage source={{ uri }} style={styles.avatar} />
      {iconNameButton && (
        <View style={styles.statusAdd}>
          <Entypo name={iconNameButton} size={20} color="white" />
        </View>
      )}
    </View>
  );

  const renderHeader = () => (
    <>
      <TouchableOpacity style={styles.itemContainer}>
        {renderAvatar(my_url_avatar, (style = { borderWidth: 0 }), 'plus')}

        <View style={styles.itemContent}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.name}>My status</Text>
            <Text numberOfLines={1} style={styles.status}>
              Tap to add status update
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.title}>
        Recent updates
      </Text>
    </>
  );

  const renderItem = ({ index, item }) => {
    updateMinutes += 2;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        {renderAvatar(item?.imageUri)}
        <View style={styles.itemContent}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.name}>{item?.name || ''}</Text>
            <Text numberOfLines={1} style={styles.status}>
              {updateMinutes} minutes ago
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
        ListHeaderComponent={renderHeader()}
      />
      <View style={styles.buttons}>
        <FloatingButtonAction
          iconName="pencil"
          extraStyle={styles.pencil}
          onPress={() => navigation.navigate('Contacts', {})}
        />
        <FloatingButtonAction
          iconName="camera"
          extraStyle={styles.camera}
          onPress={() => navigation.navigate('Contacts', {})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  pencil: {
    backgroundColor: 'rgba(26, 26, 0, 0.9)',
  },
  camera: {
    backgroundColor: '#009999',
  },
  buttons: {
    position: 'absolute',
    bottom: hp(15),
    right: wp(15),
  },
  messageBubble: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(12.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009999',
  },
  txtMessageBubble: {
    color: '#FFF',
  },
  itemContainer: {
    flex: 0,
    flexDirection: 'row',
    paddingHorizontal: wp(15),
    paddingVertical: hp(5),
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
    backgroundColor: 'grey',
    width: '81%',
    alignSelf: 'flex-end',
  },
  itemContentRight: {
    alignItems: 'center',
    width: '18%',
    height: '100%',
  },
  avatar: {
    width: wp(50),
    height: wp(50),
    borderRadius: wp(25),
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: hp(18),
  },
  status: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: hp(15),
  },
  imgContainer: {
    width: wp(60),
    height: wp(60),
    borderRadius: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#009999',
    borderWidth: 3,
    padding: 3,
  },
  title: {
    paddingHorizontal: wp(30),
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: hp(18),
    opacity: 0.7,
  },
  statusAdd: {
    position: 'absolute',
    bottom: hp(0),
    right: wp(0),
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20),
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
