import React, { Component, Fragment } from 'react';
import './App.css';
import Car from './components/Car/Car';
// import News from './components/News';


class App extends Component {

  state = {
    cars: [
      { carName: "Ford", carYear: 2017 },
      { carName: "Audi", carYear: 2015 },
      { carName: "BMW", carYear: 2012 },
    ],
    pageTitle: 'Title cars',
    showCars: false,
  }

  toogleCarsHendler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  resetPageTitle = () => {
    this.setState({
      pageTitle: 'Title cars'
    })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.carName = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }

  deleteHendler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars}) 
  }

  // addCars() {
  //   const cars = [...this.state.cars]
  //   cars.push()
  // }

  render() {
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((item, index) => {
        return (
          <Car
            key={index}
            name={item.carName}
            year={item.carYear}
            onDelete={this.deleteHendler.bind(this, index)}
            onChangeName={(event) => this.onChangeName(event.target.value, index)}
          />
        )
    })
    }

    return (
      <Fragment>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toogleCarsHendler}>Toogle cars</button>
        { cars }
        <br />
        <button onClick={this.resetPageTitle}>default page title</button>
      </Fragment>
    );
  }
}

export default App;
