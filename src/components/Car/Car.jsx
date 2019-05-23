import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classes from './Car.module.css'
import withClass from '../../hoc/withClass'

class Car extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus()
        }
    }
   
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
                    ref={this.inputRef}
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

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Car, classes.Car)