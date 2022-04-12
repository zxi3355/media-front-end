import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import teasers from '../../../fixtures/teasers';
import TeaserItem from '../../../../components/teaser/desktop/TeaserItem';

test('Should render TeaserItem correctly', () => {
  const wrapper = shallow(<TeaserItem teaser={teasers[1]} />);
  const divs = wrapper.find('.col');
  expect(divs.at(1).text()).toEqual(teasers[1].contentTitle);
  expect(divs.at(2).text()).toEqual(teasers[1].contentSummary);
  expect(toJson(wrapper)).toMatchSnapshot();
});
