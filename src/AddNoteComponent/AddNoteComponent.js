import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AddNoteComponent.css';

export class AddNoteComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ...props.note
        }
    }
    
    onAddNoteSubmit = (e) => {
        e.preventDefault();
        this.props.onAddNote(this.state)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form action="#" className="component" onSubmit={this.onAddNoteSubmit}>
                <label>Add note</label>
                <input 
                    type="text" 
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}/>
                <button onClick={this.onAddNoteSubmit}>Add</button>
            </form>
        )
    }
}

AddNoteComponent.defaultProps = {
    title: 'Note'
};

export default AddNoteComponent