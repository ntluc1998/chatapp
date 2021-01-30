import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Bubble,
  GiftedChat,
  Message,
  Send,
  SystemMessage,
} from 'react-native-gifted-chat';
import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  View,
} from 'react-native';
import { wall } from '@assets';

const COLOR_ICON = '#3578e5';
const MessagesScreen = () => {
  const [isFocus, onFocus] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = (messages = []) => {
    const newMessage = [{ ...messages[0], text: messageText, _id: 3 }];
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessage)
    );
    setMessageText('');
  };
  const renderSendButton = (onSend) => (
    <TouchableOpacity
      onPress={onSend}
      activeOpacity={0.8}
      style={{
        flex: 0,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {messageText === '' ? (
        <AntDesign name="like1" size={30} color={COLOR_ICON} />
      ) : (
        <Ionicons name="send" size={30} color={COLOR_ICON} />
      )}
    </TouchableOpacity>
  );
  const renderInputView = ({ onSend }) => {
    return (
      <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding">
        <View style={styles.icContainer}>
          {!isFocus && (
            <>
              <Entypo
                style={styles.icon}
                name="circle-with-plus"
                size={30}
                color={COLOR_ICON}
              />
              <MaterialCommunityIcons
                style={styles.icon}
                name="camera"
                size={30}
                color={COLOR_ICON}
              />
              <FontAwesome
                style={styles.icon}
                name="picture-o"
                size={30}
                color={COLOR_ICON}
              />
              <MaterialCommunityIcons
                style={styles.icon}
                name="microphone"
                size={30}
                color={COLOR_ICON}
              />
            </>
          )}
          {isFocus && (
            <Ionicons
              onPress={() => onFocus(false)}
              style={styles.icon}
              name="chevron-forward-outline"
              size={30}
              color={COLOR_ICON}
            />
          )}
        </View>

        <View style={styles.txtInputContainer}>
          <TextInput
            placeholder="Aa"
            placeholderTextColor="rgba(255,255,255, 0.8)"
            onChangeText={(value) => setMessageText(value)}
            value={messageText}
            onTouchStart={() => onFocus(true)}
            style={{
              fontSize: 20,
              flex: 1,
              color: '#FFF',
            }}
          />
          <MaterialIcons
            name="emoji-emotions"
            size={30}
            color={COLOR_ICON}
            style={{ paddingHorizontal: 5 }}
          />
        </View>
        {renderSendButton(onSend)}
      </KeyboardAvoidingView>
    );
  };

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#6646ee',
        },
        left: {
          backgroundColor: '#FFF',
        },
      }}
      textStyle={{
        right: {
          color: '#fff',
        },
      }}
    />
  );

  const renderSystemMessage = (props) => (
    <SystemMessage
      {...props}
      wrapperStyle={styles.systemMessageWrapper}
      textStyle={styles.systemMessageText}
    />
  );
  return (
    <ImageBackground source={wall} resizeMode="cover" style={{ flex: 1 }}>
      <GiftedChat
        renderInputToolbar={renderInputView}
        renderBubble={renderBubble}
        renderSystemMessage={renderSystemMessage}
        
        messages={messages}
        onSend={onSend}
        alwaysShowSend
        showUserAvatar
        scrollToBottom
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0,
  },
  icon: {
    paddingLeft: 10,
  },
  txtInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C2E',
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 25,
  },
  keyboardContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    paddingRight: 10,
    alignItems: 'center',
  },
  systemMessageWrapper: {
    backgroundColor: '#6646ee',
    borderRadius: 4,
    padding: 5,
  },
  systemMessageText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default MessagesScreen;
