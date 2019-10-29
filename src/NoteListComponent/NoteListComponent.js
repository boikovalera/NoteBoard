import React, { Component } from 'react'
import NoteComponent from '../NoteComponent/NoteComponent'

export class NoteListComponent extends Component {
    render() {
        return (
            <div>
            {
                this.props.notes.map((note) =>
                    <NoteComponent
                        key={note.id}
                        note={note}
                        onDelete={this.props.onDelete}
                        onChange={this.props.onChange}
                    />
                )
            }
            </div>
        )
    }
}

export default NoteListComponent