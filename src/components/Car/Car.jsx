import React, { Component } from 'react';
import classes from './Car.module.css';

class Car extends Component {
    render() {
        const inputClasses = [classes.input]
        if (this.props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red)
        }

        if (this.props.name.length > 4) {
            inputClasses.push(classes.bold)
        }
        return (
            <div className={classes.Car}>
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