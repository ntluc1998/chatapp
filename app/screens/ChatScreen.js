import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FloatingButtonAction, ProgessiveImage } from '@components';
import { View, Text } from '@theme';
import { wp, hp } from '@contants';
import { chats } from '@mocks';
export default function ChatScreen() {
  const navigation = useNavigation();

  const renderUnreadBubble = (messageCount) => {
    return (
      <View style={styles.messageBubble}>
        <Text style={{ color: '#FFF' }}>{messageCount}</Text>
      </View>
    );
  };

  const renderReadTicks = () => (
    <Ionicons name="checkmark-done" size={20} color="#25B1E4" />
  );

  const renderItemSeparator = () => <View style={styles.itemSeparator} />;

  const renderAvatar = (uri) => (
    <ProgessiveImage source={{ uri }} style={styles.avatar} />
  );

  const renderItem = ({ index, item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        {renderAvatar(item?.imageUri)}
        <View style={styles.itemContent}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.name}>{item?.name || ''}</Text>
            <View style={{ flexDirection: 'row' }}>
              {item?.isMe && item?.isRead && renderReadTicks()}
              <Text numberOfLines={1} style={styles.status} colorName="status">
                {item?.status || ''}
              </Text>
            </View>
          </View>
          <View style={styles.itemContentRight}>
            <Text style={{ color: '#009999' }}>
              3:32 PM
            </Text>
            {!item.isMe && renderUnreadBubble(item?.unreadMessagesCount)}
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
      />
      <View style={styles.buttons}>
        <FloatingButtonAction
          iconName="android-messages"
          extraStyle={styles.messageButton}
          onPress={() => navigation.navigate('Contact', {})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  messageButton: {
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
  txtMessageBubble: {},
  itemContainer: {
    flex: 0,
    flexDirection: 'row',
    paddingHorizontal: wp(15),
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
    justifyContent:'space-between',
    paddingVertical: hp(10)
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
  },
});
