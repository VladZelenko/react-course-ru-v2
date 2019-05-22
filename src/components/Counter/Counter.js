import React, { Component, Fragment } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
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
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Fragment>
        )}
}

export default Counter;