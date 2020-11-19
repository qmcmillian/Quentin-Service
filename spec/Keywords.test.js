import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Keywords from '../client/src/components/Keywords';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomerImages Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Keywords domesticReviews={['mock']}/>);
    expect(wrapper.exists()).toBeTruthy();
  });
});