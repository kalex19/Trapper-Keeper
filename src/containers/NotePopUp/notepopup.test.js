import React from 'React';
import { shallow } from 'enzyme';
import { NotePopUp } from './notepopup';
import { mapDispatchToProps } from './notepopup';
import { addNewNote } from '../../actions';
import { addNote } from '../../Util/thunks/addNote';

describe('NotePopUp', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NotePopUp />);
  });

  it('should match the snapshot with all the data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should mapDispatch addNote to props', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).addNote();
    expect(dispatch.mock.calls[0][0]).toEqual(addNote())
  });

  it('should handle change', () => {
    wrapper.setState({ title: '', tasks: ['']})
    const e = { target: { name: 'title', value: 'Groceries' } }

    wrapper.instance().handleChange(e);
    expect(wrapper.state('title')).toEqual('Groceries')
  });

});