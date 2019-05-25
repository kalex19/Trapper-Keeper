import React from 'react';
import { NoteContainer } from './noteContainer';
import { shallow } from 'enzyme';

import { mapStateToProps } from './noteContainer'

describe('NoteContainer', () => {

  let wrapper;

  let notes = [{title: 'Groceries', tasks: ['Avocados']}]

  beforeEach(() => {
    wrapper = shallow( <NoteContainer notes={notes} />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should map notes to props', () => {
    const state = {
      notes: [{title: 'Groceries', tasks: ['Avocados']}]
    }

    expect(mapStateToProps(state).notes).toEqual([{title: 'Groceries', tasks: ['Avocados']}])
  })
});