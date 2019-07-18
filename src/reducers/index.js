import { combineReducers }  from 'redux';
import forecastReducer from './forecast';
import cityReducer from './city';

const reducers = combineReducers({
  forecast: forecastReducer,
  city: cityReducer
})

export default reducers;