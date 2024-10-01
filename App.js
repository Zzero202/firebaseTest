import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  const [token, setToken] = useState('');
  async function getFCMToken() {
    const authorizationStatus = await messaging().requestPermission();
    if (
      authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      const token = await messaging().getToken();
      setToken(token);
      console.log('FCM Registration Token:', token);
      return token; // Use this token to send messages to the device
    } else {
      console.log('Notification permission denied');
    }
  }

  // Call this function somewhere in your app to retrieve the token
  getFCMToken();
  return (
    <View>
      <Text selectable={true}> {token}</Text>
    </View>
  );
}

export default App;
