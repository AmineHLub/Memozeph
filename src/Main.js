import React, { useState, useEffect } from "react";

const Main = ({ activeNote, onSave }) => {
  const { title: activetitle = "" } = activeNote;
  const [title, setTitle] = useState(activetitle);
  
  // componentWillRecieveProps
  // check react doc (component life cycle)
  useEffect(() => {
    setTitle(activeNote.title);
  }, [activeNote.title]);
  return (
    <div className="app-main">
      <div className="app-save-button">
        <button
          onClick={() =>
            onSave({
              ...activeNote,
              title,
            })
          }
        >
          <strong>Save</strong>
        </button>
      </div>

      <div className="app-main-note-edit">
        <input
          type="text"
          id="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea id="Body" placeholder="Start writing your notes..." />
      </div>
    </div>
  );
};
// git add .gitignore
//////python,flask, mysql (ORM) => SQL ,(NOSQL), RESTFULL API, GET localhost/notes => notes
// POST localhost/notes body {note} => db add note
// PATCH localhost/notes body {note} => modify db note
// ......
export default Main;
