import React, { Component } from 'react'
import './NoteComponent.css';

export class NoteComponent extends Component {

    state = {
        note: "",
        descr: ""
    }

    onChange = () => {

    }

    render() {
        return (
            <div className='note'>
                <div className='note-title'>                    
                    <input 
                        type="text"                         
                        name="note"
                        placeholder="Title"
                        value={this.state.note}
                        onChange={this.onChange}/>                    
                    <button type="button">
                        <span>&times;</span>
                    </button>                    
                </div>                
                <div className='note-descr'>                    
                    <textarea
                        type="text"                         
                        name="descr"
                        rows="6"
                        placeholder="Description"
                        value={this.state.descr}
                        onChange={this.onChange}/>                    
                </div>                
            </div>
        )
    }
}

export default NoteComponent