export const errors = (state = '', action) => {
  switch(action.type) {
    case 'SET_ERROR':
      return action.message;
    default:
      return state;
  }
}

export default errors;