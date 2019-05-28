import { fetchData } from '../fetchData';
import { deleteNote, setError, addAllNotes } from '../../actions';

export const deleteNotes = obj => {
  return async dispatch => {
    try {
      dispatch(deleteNote(obj));
      const url = `http://localhost:3001/api/v1/notes/${obj.id}`
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: obj.id
        })
      }
      await fetchData(url, options)
      dispatch(addAllNotes(notes))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}