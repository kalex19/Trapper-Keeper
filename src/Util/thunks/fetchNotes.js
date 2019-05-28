import { fetchData } from '../fetchData';

import { setError, addAllNotes } from '../../actions';

export const fetchNotes = url => {
  return async (dispatch) => {
    try {
      const data = await fetchData(url);
      const notes = data
      dispatch(addAllNotes(notes));
      return notes
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}