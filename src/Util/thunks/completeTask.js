import { fetchData } from '../fetchData';

export const completeTask = task => {
  return async dispatch => {
    try {
      const { title, task, completed } = task;
      const url = 'http://localhost:3001/api/v1/notes/:id';
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          tasks,
          completed
        })
      }
    } catch (error) {
      throw new Error();
    }
  }
}