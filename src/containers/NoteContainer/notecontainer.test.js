import React from 'react';
import { NoteContainer } from './noteContainer';
import { shallow } from 'enzyme';
import { mapStateToProps } from './noteContainer'
import { mapDispatchToProps } from '../NoteContainer/noteContainer';
import { addNote } from '../../Util/thunks/addNote';
import { fetchNotes } from '../../Util/thunks/fetchNotes';

describe('NoteContainer', () => {

  let wrapper;

  let notes = [{title: 'Groceries', task: ['Avocados']}]

  let note = {title: 'To Do', tasks: ['count dinos']}

  beforeEach(() => {
    wrapper = shallow( <NoteContainer notes={notes} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should mapState (notes) to props', () => {
    const state = {
      notes: [{title: 'Groceries', task: ['Avocados']}]
    }

    expect(mapStateToProps(state).notes).toEqual([{title: 'Groceries', task: ['Avocados']}])
  });

  it('should call dispatch on fetchNotes', () => {
    const dispatch = jest.fn();

    // mapDispatchToProps(dispatch).fetchNotes();
    const actionToDispatch = fetchNotes()
    const mappedProps = mapDispatchToProps(dispatch);
    mappedProps.fetchNotes()
    expect(dispatch).toHaveBeenCalledWith(actionToDispatch)
    // expect(dispatch.mock.calls[0][0]).toEqual(fetchNotes())
  });

  it('should mapDispatch (addNotes) to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).addNote();
    expect(dispatch.mock.calls[0][0]).toEqual(addNote())
  });
});