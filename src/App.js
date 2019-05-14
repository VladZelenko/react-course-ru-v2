import React, { Component, Fragment } from 'react';
import './App.css';
import Car from './components/Car';
import News from './components/News';


class App extends Component {

  state = {
    cars: [
      { carName: "Ford", carYear: 2017 },
      { carName: "Audi", carYear: 2015 },
      { carName: "BMW", carYear: 2012 },
    ],
    pageTitle: 'Title cars',
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  resetPageTitle = () => {
    this.setState({
      pageTitle: 'Title cars'
    })
  }

  hendleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    const cars = this.state.cars
    return (
      <Fragment>
        <News />
        {/* <Comments /> */}
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.hendleInput}/><br />
        <button onClick={this.changeTitleHandler.bind(this, 'new title here')}>Click me</button>
        <Car
          name={cars[0].carName}
          year={cars[0].carYear}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].carName)}
        />
        <Car
          name={cars[1].carName}
          year={cars[1].carYear}
          onChangeTitle={() => this.changeTitleHandler(cars[1].carName)}
        />

        <br />
        <button onClick={this.resetPageTitle}>default page title</button>
      </Fragment>
    );
  }
}

export default App;
