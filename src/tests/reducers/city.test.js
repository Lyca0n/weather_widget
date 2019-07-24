import cityReducer, {cityReducerDefaultState} from '../../reducers/city';
import * as constants from '../../config/constants';

test('should set entities', () => {
  const action = {
    action:constants.SET_CITIES,
    payload:[
      {name:'chihuahua',country:'MX'}
    ]};
  const state = cityReducer(cityReducerDefaultState, action);  

  expect(state.entities).toBe(action.payload);
});

