import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { FloatingButtonAction, ProgessiveImage } from '@components';
import { View, Text } from '@theme';
import { wp, hp } from '@contants';
import { calls } from '@mocks';
export default function CallScreen() {
  const navigation = useNavigation();

  const renderCallIcon = (callType) => {
    let icon_url;
    let color;
    switch (callType) {
      case 'outgoing':
        icon_url = 'arrow-top-right';
        color = '#009999';
        break;
      case 'incoming':
        icon_url = 'arrow-bottom-left';
        color = '#009999';
        break;
      default:
        icon_url = 'arrow-bottom-left';
        color = 'rgba(255, 0, 0, 0.7)';
        break;
    }
    return <MaterialCommunityIcons name={icon_url} size={30} color={color} />;
  };
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {renderCallIcon(item?.callType)}
              <Text numberOfLines={1} style={styles.status} colorName="status">
                {item?.callTime || ''}
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="phone" size={30} color="#009999" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={calls}
        keyExtractor={(_, index) => index + ''}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
      />
      <View style={styles.buttons}>
        <FloatingButtonAction
          iconName="video"
          extraStyle={styles.icVideo}
          onPress={() => navigation.navigate('Contacts', {})}
        />
        <FloatingButtonAction
          iconName="phone-plus"
          extraStyle={styles.icCamera}
          onPress={() => navigation.navigate('Contacts', {})}
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
    backgroundColor: 'transparent',
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
    fontWeight: 'bold',
    fontSize: hp(18),
  },
  status: {
    //color: 'rgba(255, 255, 255, 0.7)',
    fontSize: hp(15),
    opacity: 0.8,
  },
  icVideo: {
    backgroundColor: 'rgba(26, 26, 0, 0.9)',
  },
  icCamera: {
    backgroundColor: '#009999',
  },
});
