import React, { Component, Fragment } from 'react';
import Counter2 from '../Counter2/Counter2';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    addCounter = () => {
        this.setState((prevState)=>{
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return(
            <Fragment>
                <h2>Counter {this.state.counter}</h2>
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Fragment>
        )}
}

export default Counter;