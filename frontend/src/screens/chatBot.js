import {View} from 'react-native';
import { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import {getDialogToken} from '../services/service';
import Header from '../components/header';
import {sendMessageDialogFlow} from '../services/service';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    const [isTyping, setIsTyping] = useState(null);

    const Bot = {
        _id: 2,
        name: 'Bains',
      };
    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello\nHow can I help you?',
            createdAt: new Date(),
            user: Bot,
          },
        ])
      }, [])

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getDialogToken();
            setAccessToken(token);
        }
        if(accessToken == null)
            fetchToken();
    }, [])

    const handleGoogleResponse = (result) => {
        let text = result.queryResult.fulfillmentMessages[0].text.text[0];
        sendBotResponse(text);
      };

    const handleError = () => {
      setIsTyping(false);
        setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, [{
                _id: messages.length + 1,
                text: "Sorry, I am having trouble.\nPlease try again",
                createdAt: new Date(),
                user: Bot,
            }]);
          });
    }
      const sendBotResponse = (text) => {
        let msg = {
            _id: messages.length + 1,
            text,
            createdAt: new Date(),
            user: Bot,
          };
          setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, [msg]);
          });
          setIsTyping(false);
      };

    
      const onSend =  async (message, onResult, onError) => {
        if(accessToken == null) return;
        setIsTyping(true);
        setMessages(previousMessages => {
            return GiftedChat.append(previousMessages, message);
          });
          let msg = message[0].text;
          sendMessageDialogFlow(msg, onResult, accessToken);
      };
    return  <View style={{flex: 1, paddingBottom: 30, backgroundColor: 'white'}}>
                <Header back={true} text="Virtual Assistant"/>
                <GiftedChat
                    messages={messages}
                    onSend={(messages) => onSend(messages, handleGoogleResponse, handleError)}
                    user={{
                        _id: 1,
                    }}
                    isTyping={isTyping}
                    alwaysShowSend={true}
                    textInputProps={{autoFocus: true}}
                    maxInputLength={200}
                    placeholder="Type your question here..."
                />
    </View>
}
export default ChatBot;