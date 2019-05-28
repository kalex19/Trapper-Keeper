import { fetchNotes } from '../fetchNotes';

import { setError, addAllNotes } from '../../../actions';
import { exportAllDeclaration } from '@babel/types';

describe('fetchNotes', () => {

  let mockUrl;
  let mockNote;
  let mockDispatch;
  let thunk;

  beforeEach(() => {
    mockUrl = 'www.asongoficeandfire.com';
    mockNote = {title: 'A Lannister always pays their debts', tasks: ['Blow up sept', 'Harm innocnet people'] };
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockNote
        })
      });
    });
    thunk = fetchNotes(mockNote)
  });

  it('should call dispatch addAllNotes', () => {

    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(addAllNotes(note));
  })
})