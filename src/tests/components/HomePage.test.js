import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../../modules/home/HomePage';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});
