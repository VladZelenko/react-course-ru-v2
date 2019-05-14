import React, { Component, Fragment } from 'react';

class Car extends Component {
    render() {
        return (
            <Fragment>
                <p>Car: {this.props.name}, Year {this.props.year}</p>
                <button onClick={this.props.onChangeTitle}>Click</button>
            </Fragment>
        )
    }
}

export default Car;