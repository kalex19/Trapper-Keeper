import { notes } from '../notesReducer';
import * as actions from '../../actions';

describe('notes', () => {

  it('should return a default state', () => {
    const expected = [];
    const result = notes(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should return the state with all the notes', () => {
    const expected = [{ title: 'To-do', tasks: [{task:'Pet zeus'} ] }];
    const result = notes(undefined, actions.addAllNotes([{ title: 'To-do', tasks: [{task:'Pet zeus'} ] }]));

    expect(result).toEqual(expected);
  });

  it('should toggle a completed task', () => {
    const expected = [{id: 5, completed: false}]
    const result = notes([{id: 5, completed: true}], actions.toggleCompleteTask(5));

    expect(result).toEqual(expected);
  });
});
