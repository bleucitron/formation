import React from 'react';
import { shallow } from 'enzyme';
import Tweet from './Tweet';

it('renders correctly', () => {
  const tweet = {
    text: 'test',
  };

  const wrapper = shallow(<Tweet tweet={tweet} />);
  expect(wrapper).toMatchSnapshot();
});
