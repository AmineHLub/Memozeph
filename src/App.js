import './App.css';
import uuid from 'react-uuid';
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from 'react';
function App() {


const [notes, setNotes] = useState ([]);
const [activeNote, setActiveNote] = useState (false);


const onAddNotes = () => { 
 const newNote =  {
   id : uuid(),
   title : "Untitled  ",
   lastModDate : Date.now (),
 };


 setNotes ([newNote, ...notes]);
 console.log([newNote.id]);
};


const onDeleteNote = (deleteId) => {
setNotes (notes.filter((note) => note.id !== deleteId ));
 };


    return(
   <div className="App">
     <Sidebar notes={notes}
      onAddNotes={onAddNotes}
       onDeleteNote={onDeleteNote}
       activeNote = {activeNote}
       setActiveNote = {setActiveNote}
        />
     <Main 
     onAddNotes={onAddNotes}
     onDeleteNote={onDeleteNote}
     activeNote = {activeNote}
     setActiveNote = {setActiveNote}
     />
   </div>
  );
}

export default App;
