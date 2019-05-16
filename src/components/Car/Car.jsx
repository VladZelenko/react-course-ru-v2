import React, { Component } from 'react';
import './Car.css';

class Car extends Component {
    render() {
        const inputClasses = ['input']
        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }
        return (
            <div className="Car">
                <p>Car: {this.props.name}</p>
                <p>Year {this.props.year}</p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car;