import React from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter';

it('renders correctly', () => {
  const wrapper = shallow(<Filter />);

  expect(wrapper).toMatchSnapshot();
});

it('should call filter function when clicked', () => {
  const filter = jest.fn();

  const filterComponent = shallow(<Filter filter={filter} />);

  filterComponent.simulate('click');
  expect(filter).toHaveBeenCalled();
});
