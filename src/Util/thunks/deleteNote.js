import { fetchData } from '../fetchData';
import { deleteNote, setError, addAllNotes } from '../../actions';

export const deleteNotes = obj => {
  return async dispatch => {
    try {
      const url = `http://localhost:3001/api/v1/notes/${obj.id}`
      dispatch(deleteNote(obj));
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
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}