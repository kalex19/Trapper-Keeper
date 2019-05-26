export const addNote = async (note) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/notes', {
        method: "POST",
        body: JSON.stringify({
            title: note.title,
            tasks: note.tasks,
            completed: false
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      return await response.json();
    } catch (error) {
      throw new Error();
    }
  };

  export const getNotes = async () => {
    const url = 'http://localhost:3001/api/v1/notes'
    const response = await fetch(url);
    if (!response.ok) {
      throw Error("Failed to fetch notes")
    }
    return await response.json();
  }
  