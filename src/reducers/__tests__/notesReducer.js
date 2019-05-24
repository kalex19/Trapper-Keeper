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
    const result = notes(undefined, actions.addAllNotes)
  })
});
