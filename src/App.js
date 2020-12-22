import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
class App extends Component {

  state = {
    cars: [
      {name: 'Ford'},
      {name: 'Audi'},
      {name: 'Delux'}
    ],
    pageTitle: 'Hello wotls'
  }

  changeTitleHandler = () => {
    console.log('clicked');
    const oldTitle = this.state.pageTitle;

    this.setState({
      pageTitle:  oldTitle + '2'
    });
  }

  render() {
    const style = {
      color: 'red'
    }
    const cars = this.state.cars;

    return (
      <div style={style} className="App">
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeTitleHandler}>Change title</button>

        <Car name={cars[0].name} />
        <Car name={cars[1].name} />
        <Car name={cars[2].name} />
      </div>
    );
  };
}


export default App;
