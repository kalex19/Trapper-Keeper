import React from 'react';
import Note from './note';
import { shallow } from 'enzyme';

describe('Note', () => {

  let wrapper;

  let title = 'Chores'
  let tasks = ['Dishes', 'Sweep'] 
  let complete = false
  let id = 1

  beforeEach(() => {
    wrapper = shallow(<Note title={title} tasks={tasks} complete={complete} id={id} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });
})