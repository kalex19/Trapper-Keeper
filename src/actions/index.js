export const addAllNotes = notes => ({
    type: ADD_ALL_NOTES,
    notes
});

export const addNewNote = newNote => ({
    type: ADD_NEW_NOTE,
    newNote
});

export const editNote = editedNote => ({
    type: EDIT_NOTE,
    editedNote
})

export const deleteNote = deletedNote => ({
    type: DELETE_NOTE,
    deletedNote
})

export const loading = bool => ({
    type: isLoading,
    bool
});

export const setError = bool => ({
    type: SET_ERROR,
    bool
})