import axios from 'axios';
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './types';
import { message } from 'antd';

export const userLogin = (reqObject) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    const response = await axios.post('/api/users/login', reqObject);
    localStorage.setItem('user', JSON.stringify(response.data));
    message.success('Login Success');

    setTimeout(() => {
      window.location.href = '/';
    }, 500);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    message.error('Something went wrong');
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

export const userRegister = (reqObject) => async (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });

  try {
    const response = await axios.post('/api/users/register', reqObject);
    message.success('Registration successful');

    setTimeout(() => {
      window.location.href = '/login';
    }, 500);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    message.error('Something went wrong');

    dispatch({
      type: REGISTER_FAIL,
      payload: error,
    });
  }
};
