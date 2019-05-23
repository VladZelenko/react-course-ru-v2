import React, { Component, Fragment } from 'react';
import './App.scss';
import Car from './components/Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './components/Counter/Counter';

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: [
        { carName: "Ford", carYear: 2017 },
        { carName: "Audi", carYear: 2015 },
        { carName: "BMW", carYear: 2012 },
      ],
      pageTitle: 'Title cars',
      showCars: false,
      clicked: false,
    }
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
    this.setState({ cars })
  }

  render() {
    console.log('App render')
    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((item, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={item.carName}
              year={item.carYear}
              index={index}
              onDelete={this.deleteHendler.bind(this, index)}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <Fragment>
        <h1>{this.state.pageTitle}</h1>
        <button
          className={"AppButton"}
          onClick={this.toogleCarsHendler}
        >Toogle cars</button>
        {cars}
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>
        <br />
        <button onClick={this.resetPageTitle}>default page title</button>
        <button onClick={() => this.setState({ clicked: !this.state.clicked })}>Counter 2 clicked</button>
      </Fragment>
    );
  }
}

export default App;
