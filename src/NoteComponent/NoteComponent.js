import React, { Component } from 'react'
import './NoteComponent.css';

export class NoteComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            ...props.note
        }
    }
    
    /*componentDidUpdate() {
        document.getElementsByTagName('textarea').addEventListener('focusout', this.onEditAction);
    }*/

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onEditAction = (e) => {
        e.preventDefault();
        this.props.onEdit(this.state);
    }

    onDeleteAction = () => {
        this.props.onDelete(this.props.note);
    }
    
    render() {
        return (
            <div className='note'>
                <div className='note-title'>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.onChange}/>
                    <button type="button" onClick={this.onDeleteAction}>
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
                    <button type="button" onClick={this.onEditAction}>
                        <span>Save</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default NoteComponent