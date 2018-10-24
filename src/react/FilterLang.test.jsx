import React from 'react';
import { shallow } from 'enzyme';
import FilterLang from './FilterLang';

describe('FilterLang', () => {
  it('renders correctly and match snapshot', () => {
    const wrapper = shallow(<FilterLang text='test' toggle={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('call toggle prop when clicked', () => {
    const testFunction = jest.fn();
    const wrapper = shallow(<FilterLang text='test' toggle={testFunction} />);

    wrapper.simulate('click');
    expect(testFunction).toHaveBeenCalled();
  });
});
