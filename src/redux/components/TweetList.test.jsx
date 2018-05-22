import React from 'react';
import { shallow } from 'enzyme';
import TweetList from './TweetList';

it('renders correctly', () => {
  const tweets = [
    {
      id: 1,
      text: 'test',
    },
  ];

  const wrapper = shallow(<TweetList tweets={tweets} />);
  expect(wrapper).toMatchSnapshot();
});
