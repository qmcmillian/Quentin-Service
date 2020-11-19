import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomerImages from '../client/src/components/customer_images/CustomerImages';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomerImages Component', () => {
  it('should render', () => {
    const wrapper = shallow(<CustomerImages imageUrls={[]}/>);
    expect(wrapper.exists()).toBeTruthy();
  });
});