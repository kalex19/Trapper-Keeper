import React from 'react';
import { Note } from './note';
import { shallow } from './note';

describe('Note', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Note />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
})