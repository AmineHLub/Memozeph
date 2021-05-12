function Sidebar({
  notes,
  onAddNotes,
  onDeleteNote,
  setActiveNote,
  activeNote,
}) {
  // const {activeNote, setActiveNote} = bindActiveNote;
  console.log('notes', notes)
  console.log('activeNote', activeNote)
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNotes}>
          <strong>ADD</strong>
        </button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`app-sidebar-note ${
              note.id === activeNote.id && "active"
            }`}
            onClick={() => setActiveNote(note)}
          >
            <div className="sidebar-note-Title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>
                <strong>Delete</strong>
              </button>
            </div>
            <p>
              <small className="note-meta">
                {new Date(note.lastModDate).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
