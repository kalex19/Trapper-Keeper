import * as actions from './index';

describe('actions', () => {
    let note = {text: 'pluck the brow', id: 5, complete: false }
    let notes = [note, note, note]

    it('should return an addNewNote action with the correct type and value', () => {
        const expected = { newNote: note, type: actions.ADD_NEW_NOTE};
        const result = actions.addNewNote(note);
        expect(result).toEqual(expected);
    });
    it('should return an addAllNotes action with the correct type and value', () => {

    });
    it('should return an editNote action with the correct type and value', () => {

    });
    it('should return a deleteNote action with the correct type and value', () => {

    });
    it('should return a loading action with the correct type and falsy value', () => {

    });
    it('should return an error action with the correct type and falsy value', () => {

    });


})

