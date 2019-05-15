import React, { Component } from 'react';

class Car extends Component {
    render() {
        return (
            <div style={{
                border: '1px solid #ccc',
                marginBottom: '10px',
                padding: '10px'
            }}>
                <p>Car: {this.props.name}</p>
                <p>Year {this.props.year}</p>
                <input type="text" onChange={this.props.onChangeName} value={this.props.name}/>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car;