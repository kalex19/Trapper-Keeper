import { deleteNotes } from "../deleteNote";
import { deleteNote, setError } from '../../../actions';


describe("deleteNote", () => {
  let mockURL;
  let mockDispatch;
  let thunk;
  const mockNoteId = 100;
  let mockNote = {
    id: 1,
    title: "Get groceries",
    tasks: [{task: 'get bread', id: 1, complete: false}]
  };

  beforeEach(() => {
    mockURL = `http://localhost:3001/api/v1/notes/${mockNoteId}`;
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            notes: mockNote
          })
      })
    );
    thunk = deleteNotes(mockNote);
  });

  it("should dispatch deleteNote with correct params", async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(deleteNote(mockNote));
  });
  it('should dispatch setError with a message if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve ({
      ok: false,
      statusText: 'Something went wrong'
    }))
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(setError('Something went wrong'))
  });
});