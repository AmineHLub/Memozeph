import "./App.css";
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});
  const onAddNotes = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled  ",
      lastModDate: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (deleteId) => {
    setNotes(notes.filter((note) => note.id !== deleteId));
  };

  const onSave = (note) => {
    const noteIndex = notes.findIndex((el) => el.id === note.id);
    if (noteIndex !== -1) {
      notes[noteIndex] = note;
      setNotes([...notes]);
    }
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNotes={onAddNotes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        onAddNotes={onAddNotes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        onSave={onSave}
      />
    </div>
  );
}

export default App;
