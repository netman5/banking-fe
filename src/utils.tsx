import axios from 'axios';
import { signupData } from './types/appTypes';

export const logout: Function = () => {
  localStorage.removeItem('user');
}

export const postData = async (url: string, data: signupData): Promise<any> => {
  const response = await axios.post(url, data);
  return response.data;
}

export const getAccountById = async (id: string, url: string, token: string): Promise<any> => {
  const response = await axios.get(`${url}/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
}

export const postTransaction = async (url: string, data: any, token: string): Promise<any> => {
  const response = await axios.post(url, data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
}

export const getTransactionsByUserId = async (url: string, token: string, id: string | undefined): Promise<any> => {
  const response = await axios.get(`${url}/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
}