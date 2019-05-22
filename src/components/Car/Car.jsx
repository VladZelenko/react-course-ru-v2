import React, { Component, Fragment } from 'react'
import classes from './Car.module.css'
import withClass from '../../hoc/withClass'

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
            <Fragment>
                <p>Car: {this.props.name}</p>
                <p>Year {this.props.year}</p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </Fragment>
        )
    }
}

export default withClass(Car, classes.Car)