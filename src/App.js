import React, {Component} from 'react';
import AddNoteComponent from './AddNoteComponent/AddNoteComponent'
import NoteListComponent from './NoteListComponent/NoteListComponent'
import './App.css';

class App extends Component {       
  
    state = {
        notes: [
            
        ],
        note: {
            title: "",
            descr: ""
        }        
    }

    onAddNote = (note) => {
        note.id = Date.now();
        console.log('note', note)
        console.log('notes1 ', this.state.notes)
        this.setState({
            notes: localStorage.getItem("notes")!=null ? JSON.parse(localStorage.getItem("notes")) : []
        })
        
        console.log('notes2 ', [...this.state.notes, note])

        //localStorage.setItem("notes", JSON.stringify([...this.state.notes, note]));        
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
                <div className="row">
                    <NoteListComponent
                        notes={this.state.notes}
                    />      
                </div>            
            </div>
        )    
    }    
}

export default App;