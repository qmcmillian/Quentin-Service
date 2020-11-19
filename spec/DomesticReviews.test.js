import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DomesticReviews from '../client/src/components/DomesticReviews';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomerImages Component', () => {
  it('should render', () => {
    const wrapper = shallow(<DomesticReviews domesticReviews={['mock']}/>);
    expect(wrapper.exists()).toBeTruthy();
  });
});