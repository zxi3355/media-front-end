import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import teasers from '../../../fixtures/teasers';
import TeaserList from '../../../../components/teaser/desktop/TeaserList';

test('Should render TeaserList page correctly', () => {
  const wrapper = shallow(<TeaserList teasers={teasers} />);
  expect(wrapper.find('.TeaserList').length).toEqual(1);
  expect(toJson(wrapper)).toMatchSnapshot();
});
