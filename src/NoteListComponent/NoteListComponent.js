import React, { Component } from 'react'
import NoteComponent from '../NoteComponent/NoteComponent'

export class NoteListComponent extends Component {
    
    render() {
        
        return (    
            <div>
                {
                    this.props.notes.map(function(item, i){                                      
                        return <NoteComponent />
                    })
                }    
            </div>                        
        )
    }
}

export default NoteListComponent
