export const notes = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ALL_NOTES':
      return action.notes
    case 'TOGGLE_COMPLETE':
      return state.map(note => {
        note.id === action.id ? {...note, completed: !note.completed} : note;
      })
    default:
      return state;
  }
}