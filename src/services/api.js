import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-backend-maker-club.herokuapp.com'
})

api.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;