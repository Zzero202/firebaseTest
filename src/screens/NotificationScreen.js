import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {foregroundMessage, getFCMToken} from '../utils/firebase';

function NotificationScreen() {
  const [token, setToken] = useState('');
  useEffect(() => {
    foregroundMessage();
    getFCMToken(setToken);
  }, []);

  return <Text>{token}</Text>;
}

export default NotificationScreen;
