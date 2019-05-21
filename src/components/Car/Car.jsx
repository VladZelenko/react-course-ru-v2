import React, { Component } from 'react';
import classes from './Car.module.css';
// import Radium from 'radium';

class Car extends Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log('Car componentWillReceiveProps ', nextProps)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate ', nextProps, nextState)
        return true
    }   

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Car componentWillUpdate ', nextProps, nextState)
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState)

    //     return prevState
    // }

    componentDidUpdate() {
        console.log('Car componentDidUpdate ')
    }

    getSnapshotBeforeUpdate() {
        console.log('Car getSnapshotBeforeUpdate ')
    }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    render() {
        console.log('Car render')

        if(Math.random() > 0.7) {
            throw new Error('Car random failed')
        }
        const style = {
            ':hover': {
                border: '1px solid #fff',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer',
            }
        }
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
            <div className={classes.Car} style={style}>
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