import * as constants from '../config/constants';

export const cityReducerDefaultState = {
  entity: {},
  entities: [],
  loading: false
};

export default (state = cityReducerDefaultState, action) => {
  switch (action.type) {
    case constants.SET_CITIES:      
        return {
          ...state,
          entities: action.payload
      }    
    //return state.filter(({ id }) => id !== action.id);    
    default:
      return state;
  }
};
