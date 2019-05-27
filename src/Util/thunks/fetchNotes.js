import { fetchData } from '../fetchData';

import { loading, setError, addAllNotes } from '../../actions';

export const fetchNotes = url => {
  return async (dispatch) => {
    try {
      const data = await fetchData(url);
      const notes = data
      console.log(notes)
      dispatch(addAllNotes(notes));
    } catch (error) {
      dispatch(setError(error.message))
      console.log(error.message)
    }
  }
}