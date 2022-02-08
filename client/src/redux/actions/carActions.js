import axios from 'axios';
import {
  GET_CARS_FAIL,
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  GET_CAR_FAIL,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from './types';

export const getAllCars = () => async (dispatch) => {
  dispatch({
    type: GET_CARS_REQUEST,
    payload: true,
  });

  try {
    const response = await axios.get('/api/cars/getallcars');
    dispatch({
      type: GET_CARS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CARS_FAIL,
      payload: error.message,
    });
  }
};

export const getCar = (id) => async (dispatch) => {
  dispatch({
    type: GET_CAR_REQUEST,
  });

  try {
    const response = await axios.get(`/api/cars/getcar/${id}`);
    dispatch({
      type: GET_CAR_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CAR_FAIL,
      dispatch: error.message,
    });
  }
};
