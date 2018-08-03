import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks1: 0,
      clicks2: 0,
      clicks3: 0
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.decrementClick1 = this.decrementClick1.bind(this);
    this.decrementClick2 = this.decrementClick2.bind(this);
    this.decrementClick3 = this.decrementClick3.bind(this);
  }

  handleClick1() {
    this.setState({ clicks1: this.state.clicks1 + 1 });
  };

  handleClick2() {
    this.setState({ clicks2: this.state.clicks2 + 1 });
  };

  handleClick3() {
    this.setState({ clicks3: this.state.clicks3 + 1 });
  };


  decrementClick1() {
    this.setState({ clicks1: this.state.clicks1 - 1 });
  };
  decrementClick2() {
    this.setState({ clicks2: this.state.clicks2 - 1 });
  };
  decrementClick3() {
    this.setState({ clicks3: this.state.clicks3 - 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coffee Intake</h1>
        </header>

        <h1>How many cups a day?</h1>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <Button onClick={this.handleClick1} outline color="primary">Expresso +</Button>
                <Button onClick={this.decrementClick1} outline color="primary">Expresso -</Button>
              </th>
              <th>
                <Button onClick={this.handleClick2} outline color="secondary">Latte +</Button>
                <Button onClick={this.decrementClick2} outline color="secondary">Latte -</Button>
              </th>
              <th>
                <Button onClick={this.handleClick3} color="danger">Machiato +</Button>
                <Button onClick={this.decrementClick3} color="danger">Machiato -</Button>
              </th>
            </tr>

            <tr>
              Count
              <td>{this.state.clicks1}</td>
              <td>{this.state.clicks2}</td>
              <td>{this.state.clicks3}</td>
            </tr>

          </thead>
        </Table>
      </div>
    );
  }
}

export default App;
