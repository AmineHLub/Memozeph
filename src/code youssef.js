import React, { useState } from "react";

const Sidebar = ({ onAddNote }) => {
  const [notes, changeNotes] = useState([
    {
      id: "1",
      title: "Title 1",
      text: "blavblalvl,d;lqdlaslpoadoqwkop",
      createdDate: new Date('2020-01-01'),
    },
    {
      id: "2",
      title: "Title 2",
      text: "blavblalvl,d;lqdlaslpoadoqwkop",
      createdDate: new Date(),
    },
  ]);
  const [input, changeInput] = useState();
  const handleAddNote = () => {
    changeNotes([...notes, {
        id: notes.length + 1,
        title: `Title ${notes.length + 1}`,
        text: "blavblalvl,d;lqdlaslpoadoqwkop",
        createdDate: new Date(),
      }]);
  };
  console.log("notes", notes);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={handleAddNote}>
          <strong>ADD</strong>
        </button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((el, index) => {
          return (
            <div key={`${el.id}-${index}`} className="app-sidebar-note">
              <div className="sidebar-note-Title">
                <strong>{el.title}</strong>
                <button>Delete</button>
              </div>
              <p>{el.text.substr(0, 10)}</p>
              <small className="note-meta">{el.createdDate.toDateString()}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
