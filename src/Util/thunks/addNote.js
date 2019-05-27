import { fetchData } from '../fetchData';
import { addNewNote } from '../../actions';

export const addNote = (note) => {
  return async (dispatch) => {
    try {
      const { title, tasks } = note
      const url = 'http://localhost:3001/api/v1/notes';
      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            tasks,
            completed: false
        })
      };
      const result = await fetchData(url, options);
      dispatch(addNewNote({...note}))
      return result;
    } catch (error) {
      throw new Error();
    }
  }
};