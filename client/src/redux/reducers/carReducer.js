import {
  GET_CARS_FAIL,
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  GET_CAR_FAIL,
  GET_CAR_REQUEST,
  GET_CAR_SUCCESS,
} from '../actions/types';

const initialState = {
  cars: [],
  car: {},
  loading: true,
  error: null,
};

const carReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CARS_REQUEST:
    case GET_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CARS_FAIL:
    case GET_CAR_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case GET_CARS_SUCCESS:
      return {
        ...state,
        cars: payload,
        loading: false,
      };

    case GET_CAR_SUCCESS:
      return {
        ...state,
        car: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default carReducer;
