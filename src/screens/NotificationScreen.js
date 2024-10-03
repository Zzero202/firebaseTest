import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {foregroundMessage, getFCMToken} from '../utils/firebase';

function NotificationScreen() {
  const [token, setToken] = useState('');
  useEffect(() => {
    foregroundMessage();
    getFCMToken(setToken);
  }, []);

  return (
    <View>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 108,
  },
});
export default NotificationScreen;
