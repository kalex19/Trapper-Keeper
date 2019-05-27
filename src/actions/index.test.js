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

    });
    it('should return a type of  DELETE_NOTE, with the correct value', () => {
        const deleteNote = [note, note]
        const expected = {
            deleteNote,
            type: 'DELETE_NOTE'
        };
        const result = actions.deleteNote(deleteNote);
        expect(result).toEqual(expected);
    });
    it('should return a type of IS_LOADING, with a boolean', () => {
        const isLoading = true
        const expected = {
            type: 'IS_LOADING',
            isLoading
        };
        const result = actions.isLoading();
        expect(result).toEqual(expected);
    });
    it('should return a type of SET_ERROR, with a boolean', () => {
        const error = true
        const expected = {
            type: 'SET_ERROR',
            error
        };
        const result = actions.setError();
        expect(result).toEqual(expected);
    });
})