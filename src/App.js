import React, {Component} from 'react';
import AddNoteComponent from './AddNoteComponent/AddNoteComponent'
import NoteListComponent from './NoteListComponent/NoteListComponent'
import './App.css';

class App extends Component {       
  
    state = {
        note: {
            title: "" 
        }
    }

    onAddNote = (note) => {
        console.log('note', note)
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
                    <NoteListComponent/>      
                </div>            
            </div>
        )    
    }    
}

export default App;