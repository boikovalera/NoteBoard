import React, { Component } from 'react'
import propTypes from 'prop-types'
import './HeaderComponent.css';

export class HeaderComponent extends Component {
    render() {
        return (
            <div className="row header">
                <div className="col-10 title">
                    <h1>Note board</h1>
                </div>
                <div className="col-2 btn-add">
                    <button onClick={this.props.onAddNote}>Add</button>
                </div>
            </div>
        )        
    }
}

HeaderComponent.propTypes = {
    onAddNote: propTypes.func.isRequired
}

export default HeaderComponent