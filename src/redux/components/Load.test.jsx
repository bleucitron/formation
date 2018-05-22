import React from 'react';
import { shallow } from 'enzyme';
import Load from './Load';

it('renders correctly', () => {
  const wrapper = shallow(<Load />);

  expect(wrapper).toMatchSnapshot();
});
