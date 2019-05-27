import React from 'React';
import { shallow } from 'enzyme';
import { NotePopUp } from './notepopup';
import { mapDispatchToProps } from './notepopup';
import { addNewNote } from '../../actions';
import { addNote } from '../../Util/thunks/addNote';

describe('NotePopUp', () => {

  let wrapper;
  let addNote = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<NotePopUp addNote={addNote} />);
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

  it('should handle change again', () => {
    wrapper.setState({ task: ''})
    const e = { target: { value: 'Groceries' } }

    wrapper.instance().handleChange2(e);
    expect(wrapper.state('task')).toEqual('Groceries');
  });

  it('should handle submit', () => {
    expect(wrapper.state('redirected')).toEqual(false);
    const title = 'around the house';
    const tasks = ['pet the fish'];
    const id = 10
    const completed = false
    wrapper.setState({title, tasks})

    const e = { preventDefault: () => {} };
    Date.now = jest.spyOn(Date, 'now').mockImplementation(() => 10)

    wrapper.instance().handleSubmit(e);
    
    expect(addNote).toHaveBeenCalled();
    expect(addNote).toHaveBeenCalledWith({id, title, tasks, completed})
    expect(wrapper.state('redirected')).toEqual(true)
  });

  it('should add a task', () => {
    const e = { preventDefault: () => {} };
    Date.now = jest.spyOn(Date, 'now').mockImplementation(() => 10)
    const id = 10;
    let newTask = { task: 'feed fish', completed: false, id }
    
    wrapper.setState({task: 'feed fish'});
    wrapper.instance().addTask(e);
    expect(wrapper.state('tasks')).toEqual([newTask])

  });


});