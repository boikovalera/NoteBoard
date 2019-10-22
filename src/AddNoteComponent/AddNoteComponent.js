import React, { Component } from 'react'
import './AddNoteComponent.css';

export class AddNoteComponent extends Component {
    render() {
        return (
            <div className="component">
                <label>Add note</label>
                <input type="text"/>
                <button>Add</button>
            </div>
        )        
    }
}

export default AddNoteComponent