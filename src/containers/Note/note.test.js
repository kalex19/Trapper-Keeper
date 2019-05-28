import React from 'react';
import { Note } from './note';
import { shallow } from 'enzyme';
import { mapDispatchToProps } from './note';
import { deleteNote } from '../../actions';

describe('Note', () => {

  let wrapper;
  let title = 'Chores'
  let task = ['Dishes', 'Sweep'] 
  let complete = false
  let id = 1

  beforeEach(() => {
    wrapper = shallow(<Note title={title} task={task} complete={complete} id={id} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should mapDispatch deleteNote to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).noteToDelete();
    expect(dispatch.mock.calls[0][0]).toEqual(deleteNote())
  });
});