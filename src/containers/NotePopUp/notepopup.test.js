import React from 'React';
import { shallow } from 'enzyme';
import { NotePopUp } from './notepopup';
import { mapDispatchToProps } from './notepopup';
import { addNewNote } from '../../actions';

describe('NotePopUp', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotePopUp />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch saveNote to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).saveNote();
    expect(dispatch.mock.calls[0][0]).toEqual(addNewNote())
  });
})