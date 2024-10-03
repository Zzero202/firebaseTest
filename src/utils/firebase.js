import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { saveDataToStorage } from './storage';

export function foregroundMessage() {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  return unsubscribe;
}
export async function getFCMToken(setToken) {
  const authorizationStatus = await messaging().requestPermission();
  if (
    authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
  ) {
    const token = await messaging().getToken();
    setToken(token);
    saveDataToStorage(token);
    console.log('FCM Registration Token:', token);
    return token; // Use this token to send messages to the device
  } else {
    console.log('Notification permission denied');
  }
}
