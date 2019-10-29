import React, { Component } from 'react'
import propTypes from 'prop-types'
import './NoteComponent.css'

export class NoteComponent extends Component {

    onChange = (e) => {
        this.props.onChange(this.props.note.id,
            {
                [e.target.name]: e.target.value
            }
        );
    }

    getNoteStyle() {
        const { x, y } = this.props.note;
        console.log(x + " : " + y)
        let aaa =  {
            ...noteStyle,
            top: y,
            left: x
        }
        console.log(aaa) 
        return aaa
    }

    startDrag = (e) => {
        console.log("startDrag");
        this.prevPosition = {
            x: e.clientX,
            y: e.clientY
        }
        document.addEventListener("mousemove", this.drag);
        document.addEventListener("mouseup", this.stopDrag)
    }

    stopDrag = (e) => {        
        document.removeEventListener("mousemove", this.drag);
        document.removeEventListener("mouseup", this.stopDrag)
    }
    
    drag = (e) => {        
        const { x, y } = this.props.note;        
        this.props.onChange(this.props.note.id, {
            x: x + (e.clientX - this.prevPosition.x),
            y: y + (e.clientY - this.prevPosition.y)
        });
        this.prevPosition = {
            x: e.clientX, 
            y: e.clientY
        }
    }

    render() {
        return (
            <div style={{position: 'absolute', top: this.props.note.y, left: this.props.note.x, border: '1px solid grey'}}>            
                <div className='note-title'>
                    <span
                        style={moveBtnStyle}
                        onMouseDown={this.startDrag}
                    >o</span>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.props.note.title}
                        onChange={this.onChange} />
                    <button type="button" onClick={this.props.onDelete.bind(null, this.props.note)}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className='note-descr'>
                    <textarea
                        type="text"
                        name="descr"
                        rows="6"
                        placeholder="Description"
                        value={this.props.note.descr}
                        onChange={this.onChange} />
                </div>
            </div>
        )
    }
}

const noteStyle = {
    position: 'absolute',
    border: '1px solid black'
}

const deleteBtnStyle = {
    cursor: 'pointer',
    float: 'right',
    fontWeight: 'bold',
    backgroundColor: 'grey'
}

const moveBtnStyle = {
    ...deleteBtnStyle,
    float: 'left',
    cursor: 'move'
}

NoteComponent.propTypes = {
    note: propTypes.object.isRequired,
    onDelete: propTypes.func.isRequired,
    onChange: propTypes.func.isRequired
};

export default NoteComponent