import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import carReducer from './reducers/carReducer';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
  cars: carReducer,
  users: userReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
