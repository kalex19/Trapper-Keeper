import { addNote } from '../Util/thunks/addNote';

export const notesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ALL_NOTES':
      return action.notes
    case 'ADD_NEW_NOTE':
      return [...state, {title: action.newNote.title, tasks: action.newNote.tasks, completed: false, id: action.newNote.id}]
    case 'EDIT_NOTE':
      return
    case 'TOGGLE_COMPLETE':
      return state.map(note => {
        return note.id === action.id ? {...note, completed: !note.completed} : note;
      })
    case 'DELETE_NOTE':
      return state.filter(note => {
        return note.id !== action.deletedNote.id
      });
    // case 'DELETE_TASK':
    //   return state.filter(note => {
    //    return note.tasks.filter(task => {
    //       return task.id !== action.deletedTask.id;
    //     })
    //   });
    default:
      return state;
  }
}

export default notesReducer;