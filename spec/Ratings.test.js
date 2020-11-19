import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ratings from '../client/src/components/Ratings';

Enzyme.configure({ adapter: new Adapter() });

describe('Ratings Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]}/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  // it('should show title', () => {
  //   const wrapper = shallow(<CustomerImages imageUrls={[]}/>);
  //   console.log('WRAPPER', wrapper);
  //   const reviews = wrapper.find('h1');
  //   console.log('Reviews', reviews);
  //   expect(reviews.text()).toBe('Customer reviews');
  // });
});
