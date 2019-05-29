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
    mockNote = {title: 'Winter is coming', tasks: ['take the throne', 'ride dragons']};

    mockDispatch = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          note: mockNote
        })
      });
    });
    thunk = fetchNotes(mockUrl)
  });
  
  it('should be called with the correct params', async () => {
    await thunk(mockDispatch);
    
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  })

  it('should dispatch addAllNotes', () => {
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addAllNotes(mockNote));
  });

  it('should dispatch setError in case of error', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'something went wrong'
      })
    })
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setError('something went wrong'))
  })
})