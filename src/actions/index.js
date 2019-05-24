export const addAllNotes = notes => ({
    type: 'ADD_ALL_NOTES',
    notes
});

export const addNewNote = newNote => ({
    type: 'ADD_NEW_NOTE',
    newNote
});

export const editNote = editedNote => ({
    type: 'EDIT_NOTE',
    editedNote
})

export const toggleCompleteTask = id => ({
    type: 'TOGGLE_COMPLETE_TASK',
    id
})

export const deleteNote = deletedNote => ({
    type: 'DELETE_NOTE',
    deletedNote
})