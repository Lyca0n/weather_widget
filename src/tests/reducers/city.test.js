import cityReducer from '../../reducers/city';
import * as constants from '../../config/constants';

test('should set entities', () => {
  const action = {
    action:constants.SET_CITIES,
    payload:[
      {name:'chihuahua',country:'MX'}
    ]};
  const state = cityReducer(undefined, action);
  console.log(state);
  expect(state.entities).toBe(action.payload);
});

