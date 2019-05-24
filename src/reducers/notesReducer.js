export const notes = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ALL_NOTES':
      return action.notes
    case 'ADD_NEW_NOTE':
      return
    case 'EDIT_NOTE':
      return
    case 'TOGGLE_COMPLETE':
      return state.map(note => {
        note.id === action.id ? {...note, completed: !note.completed} : note;
      })
    case 'DELETE_NOTE':
      return
    default:
      return state;
  }
}