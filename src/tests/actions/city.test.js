import { setCities } from '../../actions/city';
import * as constants from '../../config/constants'

test('should generate cities action object', () => {
  const cities = [{}];
  const action = setCities(cities);
  expect(action).toEqual({
    type: constants.SET_CITIES,
    payload:cities
  });
});
