import api from './api';

export default {
  signIn: async (email, password) => {
    const data = { email, password };

    return await api.post("/login", data);
  },
  signUp: async (name, email, password) => {

    const data = { name, email, password };
    return await api.post("/user", data);
    
  }

};