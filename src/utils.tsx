import axios from 'axios';
import { signupData } from './types/appTypes';

export const logout: Function = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
}

export const postData = async (url: string, data: signupData): Promise<any> => {
  const response = await axios.post(url, data);
  return response.data;
}
