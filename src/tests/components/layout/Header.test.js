import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../../components/layout/Header';

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  const text = wrapper.find('.navbar-brand').text();
  expect(text).toEqual('Article Feed');
  expect(toJson(wrapper)).toMatchSnapshot();
});
