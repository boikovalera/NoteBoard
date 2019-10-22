import React from 'react';
import AddNoteComponent from './AddNoteComponent/AddNoteComponent'
import NoteListComponent from './NoteListComponent/NoteListComponent'
import './App.css';

function App() {
  return (
    <div style=''>
      <h1>Note board</h1>
      <AddNoteComponent/>
      <NoteListComponent/>      
    </div>
  );
}

export default App;