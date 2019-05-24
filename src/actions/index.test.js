import * as actions from './index';

describe('actions', () => {
    let note = {
        text: 'pluck the brow',
        id: 5,
        complete: false
    }
    let notes = [note, note, note]

    it('should return a type of ADD_NEW_NOTE, with correct value', () => {
        const expected = {
            note,
            type: 'ADD_NEW_NOTE'
        };
        const result = actions.addNewNote(note);
        expect(result).toEqual(expected);
    });


    it('should return a type of ADD_ALL_NOTES with the correct value', () => {
        const expected = {
            notes,
            type: 'ADD_ALL_NOTES'
        };
        const result = actions.addAllNotes(notes);
        expected(result).toEqual(expected);

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
        expected(result).toEqual(expected);
    });
    it('should return a type of IS_LOADING, with a boolean', () => {
        const isLoading = true
        const expected = {
            type: 'IS_LOADING',
            isLoading
        };
        const result = actions.isLoading();
        expected(result).toEqual(expected);
    });
    it('should return a type of SET_ERROR, with a boolean', () => {
        const error = true
        const expected = {
            type: 'SET_ERROR',
            error
        };
        const result = actions.setError();
        expected(result).toEqual(expected);
    });
})