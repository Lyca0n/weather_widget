import * as constants from '../config/constants';

const forecastReducerDefaultState = {
  entity: {},
  entities: [],
  loading: false
};

export default (state = forecastReducerDefaultState, action) => {
  switch (action.type) {
    case constants.SET_FORECAST:      
        return {
          ...state,
          entities: action.payload
      }
    case constants.RESET_FORECAST:      
      return {
        ...state,
        ...forecastReducerDefaultState
    }      
    //return state.filter(({ id }) => id !== action.id);    
    default:
      return state;
  }
};
