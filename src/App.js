import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import NoteListComponent from './NoteListComponent/NoteListComponent'
import './App.css';

class App extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.setState({
            notes: this.restoryState()
        })
    }

    restoryState() {
        const listNote = localStorage.getItem("notes");
        return listNote ? JSON.parse(listNote) : [];
    }

    saveNotes(data) {
        localStorage.setItem("notes", JSON.stringify(data));
    }

    onAddNote = () => {        
        const notes = [...this.state.notes,
            {
                id: Date.now(),
                title: '',
                descr: '',
                x: 50,
                y: 100
            }
        ]
        console.log('note', notes)
        this.setState({notes});
        this.saveNotes(notes);
    }

    onDeleteNote = (note) => {
        const notes = this.state.notes.filter((el) => el !== note);
        this.setState({notes});
        this.saveNotes(notes);
    }

    onChange = (id, updateData) => {        
        
        let note = this.state.notes.find(el => el.id === id)

        note = {
            ...note,
            ...updateData
        }

        const notes = this.state.notes.map(el => el.id === note.id ? note : el)
        
        this.setState({notes});
        this.saveNotes(notes);
    }

    render() {
        return (
            <div className="container-fluid">                
                <div className="row list-note">
                    <HeaderComponent
                        onAddNote={this.onAddNote}
                    />
                </div>
                <div className="row list-note">
                    <NoteListComponent
                        notes={this.state.notes}
                        onDelete={this.onDeleteNote}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default App;