import React, { Component } from 'react'
import NoteComponent from '../NoteComponent/NoteComponent'

export class NoteListComponent extends Component {

    componentDidMount() {
        const listNotes = localStorage.getItem("notes")
        console.log(listNotes)
    }

    render() {
        return (            
            <NoteComponent />            
        )
    }
}

export default NoteListComponent
