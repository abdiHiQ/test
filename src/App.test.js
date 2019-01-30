import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('App Component', function () {

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders title Shared Rides', function () {
    const wrapper = shallow(<App />);
    const title = <p className='App-title'>Shared Rides</p>;
    expect(wrapper.contains(title)).to.equal(true);
  });
});