import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../modules/common/Loader';

test('should correctly render LoadingPage', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
