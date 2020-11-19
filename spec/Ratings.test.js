import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ratings from '../client/src/components/Ratings';

Enzyme.configure({ adapter: new Adapter() });

describe('Ratings Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show title', () => {
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]} />);
    expect(wrapper.html().includes('Customer reviews')).toBe(true);
  });

  it('should render all four children', () => {
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]} />);
    const ratings = wrapper.find('div');
    expect(ratings.length).toBe(4);
  });
});

// test your props, state, etc
// .props(), .state()
// shallow has an html method?

/*

  it('should show title', () => {
    // use shallow for unit tests
    // it mocks the child components
    // in Enzyme,
    // Doruk used mount, not shallow
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]}/>);
    // .render() works well with mount, but not shallow (not confirmed)
    console.log('DEBUG------', wrapper.debug()); // debug spits out what Enzyme sees after wrapper is defined
    console.log('HTML-------', wrapper.html());
    console.log('TEXT-------', wrapper.text());
    const ratings = wrapper.find('div');
    // console.log(wrapper.find('h1').render());
    // console.log('ratings', ratings);
    // console.log(ratings.length); // should be equal to 4
    expect(wrapper.text().includes('Customer reviews')).toBe(true);
  });


*/