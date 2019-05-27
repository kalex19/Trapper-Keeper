import * as actions from './index';

describe('actions', () => {

    let notes = [{
            title: 'To do', 
            tasks: [{title: 'Feed dog', completed: false}], 
            completed: false, 
            id: 1
        }, 
        {
            title: 'Groceries', 
            tasks: [{title: 'Mangoes', completed: false}], 
            completed: false, 
            id: 1
        }]

    it('should return a type of ADD_NEW_NOTE, with correct value', () => {
        const newNote = {
            title: 'Groceries', 
            tasks: [{title: 'Mangoes', completed: false}], 
            completed: false, 
            id: 1
        }
        const expected = {
            newNote,
            type: 'ADD_NEW_NOTE'
        };
        const result = actions.addNewNote(newNote);
        expect(result).toEqual(expected);
    });


    it('should return a type of ADD_ALL_NOTES with the correct value', () => {
        const expected = {
            notes,
            type: 'ADD_ALL_NOTES'
        };
        const result = actions.addAllNotes(notes);
        expect(result).toEqual(expected);

    });
    it('should return a type of  EDIT_NOTE, with the correct value', () => {
        const editedNote = {
            title: 'Groceries', 
            tasks: [{title: 'Avocados', completed: false}], 
            completed: false, 
            id: 1
        }

        const expected = {
            editedNote,
            type: 'EDIT_NOTE'
        }

        const result = actions.editNote(editedNote);
        expect(result).toEqual(expected);
    });

    it('should return a type of  DELETE_NOTE, with the correct value', () => {
        const deletedNote = {
            title: 'Groceries', 
            tasks: [{title: 'Avocados', completed: false}], 
            completed: false, 
            id: 1
        }

        const expected = {
            deletedNote,
            type: 'DELETE_NOTE'
        };
        const result = actions.deleteNote(deletedNote);
        expect(result).toEqual(expected);
    });

    it('should return a type of IS_LOADING, with a boolean', () => {
        const expected = {
            type: 'IS_LOADING',
            bool: true
        };
        const result = actions.loading(true);
        expect(result).toEqual(expected);
    });

    it('should return a type of SET_ERROR, with a boolean', () => {
        const expected = {
            type: 'SET_ERROR',
            message: 'Error!'
        };
        const result = actions.setError('Error!');
        expect(result).toEqual(expected);
    });
})