import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  number1 = 0;
  number2 = 0;
  constructor(props) {
    super(props);
    this.state = {value1: 0,
                  value2: 0};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }
  handleChange1(event) {
    this.setState({ value1: +event.target.value });
  }
  handleChange2(event) {
    this.setState({ value2: +event.target.value });
  }
  
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1 className="hit-the-floor title">Tính tổng hai số</h1>
          <br></br>
          <div>
          <input className="App-input" placeholder="0" type="number" onChange={this.handleChange1}>
          </input>
          <h1>+</h1>
          <input className="App-input" placeholder="0" type="number" onChange={this.handleChange2}>
          </input>
          </div>          
          <h1 className="hit-the-floor">Kết quả: {+this.state.value1 + +this.state.value2}</h1>
        </header>
      </div>
    );
  }
}

export default App;
