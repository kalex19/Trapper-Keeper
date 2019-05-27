import React from 'react';
import { NoteContainer } from './noteContainer';
import { shallow } from 'enzyme';
import { mapStateToProps } from './noteContainer'
import { mapDispatchToProps } from '../NoteContainer/noteContainer';
import { addNote } from '../../actions';

describe('NoteContainer', () => {

  let wrapper;

  let notes = [{title: 'Groceries', tasks: ['Avocados']}]

  beforeEach(() => {
    wrapper = shallow( <NoteContainer notes={notes} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should mapState (notes) to props', () => {
    const state = {
      notes: [{title: 'Groceries', tasks: ['Avocados']}]
    }

    expect(mapStateToProps(state).notes).toEqual([{title: 'Groceries', tasks: ['Avocados']}])
  });

  it('should mapDispatch (addNote) to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).getNotes();
    expect(dispatch.mock.calls[0][0]).toEqual(addNote())
  });

  it('should mapDispatch (getNotes) to props', () => {

  });
});