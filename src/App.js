import React, {Component} from 'react';
import AddNoteComponent from './AddNoteComponent/AddNoteComponent'
import NoteComponent from './NoteComponent/NoteComponent'
import './App.css';

class App extends Component {
  
    constructor(props) {
        super(props);
        let listNote = localStorage.getItem("notes");
        this.state = {
            notes: listNote != null ? JSON.parse(localStorage.getItem("notes")) : [],
            note: {
                title: ""
            }
        }
    }

    onAddNote = (note) => {
        note.id = Date.now();
        let modifyNotesAfterAddNote = [...this.state.notes, note]
        this.setState({
            notes: modifyNotesAfterAddNote
        })
        localStorage.setItem("notes", JSON.stringify(modifyNotesAfterAddNote));
    }
    
    onDeleteNote = (note) => {
        let afterDelNotes = this.state.notes.filter((el) => el !== note)
        this.setState({
            notes: afterDelNotes
        })
        localStorage.setItem("notes", JSON.stringify(afterDelNotes));
    }

    onEditNote = (note) => {
        let afterEditNotes = this.state.notes.map(el => {
            if(el.id === note.id && (el.title !== note.title || el.descr !== note.descr)) {
                return note
            } else {
                return el
            }
        });            
        this.setState({
            notes: afterEditNotes
        })
        localStorage.setItem("notes", JSON.stringify(afterEditNotes));
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1>Note board</h1>
                </div>
                <div className="row justify-content-center">
                    <AddNoteComponent
                        note={this.state.note}
                        onAddNote={this.onAddNote}
                    />
                </div>
                <div className="row list-note">
                   {
                        this.state.notes.map((note) =>
                            <NoteComponent
                                key={note.id}
                                note={note}
                                onDelete={this.onDeleteNote}
                                onEdit={this.onEditNote}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default App;