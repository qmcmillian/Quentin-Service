import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomerImages from '../client/src/components/CustomerImages';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomerImages Component', () => {
  it('should render', () => {
    const wrapper = shallow(<CustomerImages imageUrls={[]}/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  // it('should show title', () => {
  //   const wrapper = shallow(<CustomerImages imageUrls={[]}/>);
  //   console.log('WRAPPER', wrapper);
  //   const ratings = wrapper.find('h1');
  //   console.log('RATINGS', ratings);
  //   expect(ratings.text()).toBe('Customer images');
  // });
});