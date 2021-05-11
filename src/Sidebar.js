function Sidebar ({notes, onAddNotes, onDeleteNote, setActiveNote , activeNote }) {
return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
         <h1>Notes</h1>
         <button onClick={onAddNotes}><strong>ADD</strong></button>
         </div>
    <div className="app-sidebar-notes">
        {notes.map ((note) => (
            <div 
            className={`app-sidebar-note ${note.id===activeNote && "active" }`}
             onClick = {() => setActiveNote(note.id)}
             >
            <div className="sidebar-note-Title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}><strong>Delete</strong></button>
            </div>
            <p>
            <small className="note-meta">{new Date(note.lastModDate).toLocaleDateString("en-GB", {
                hour : "2-digit",
                minute: "2-digit",
            }

            )}</small></p>
        </div>
        ))}
        
    </div>
 </div>
        
);
}

export default Sidebar;