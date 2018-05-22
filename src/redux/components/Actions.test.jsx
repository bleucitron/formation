import React from 'react';
import { shallow } from 'enzyme';
import Actions from './Actions';

it('renders correctly', () => {
  const wrapper = shallow(<Actions isFr={false} />);

  expect(wrapper).toMatchSnapshot();
});
