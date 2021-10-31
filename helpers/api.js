import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://nuni-backend.herokuapp.com';
// const API_URL = "http://localhost:8080";

export const authenticate = body =>
  fetch(`${API_URL}/authenticate`, {
    method: 'POST',
    body,
  });

export const validateOtp = body =>
  fetch(`${API_URL}/validate-otp`, {
    method: 'POST',
    body,
  });

export const getNunis = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const userId = await AsyncStorage.getItem('userId');

  return fetch(`${API_URL}/get-nuni-clients?user_id=${userId}`, {
    method: 'GET',
    headers: {
      token,
    },
  });
};

export const getNuniClient = async body => {
  const token = await AsyncStorage.getItem('userToken');

  return fetch(`${API_URL}/get-nuni-client`, {
    method: 'POST',
    headers: {
      token,
    },
    body,
  });
};
