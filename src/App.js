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
    this.handleClick = this.handleClick.bind(this);
    this.decrementClick = this.decrementClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target);
    this.setState({ [e.target.name]: parseInt(e.target.value) + 1 });
    console.log(this.state);
  }

  decrementClick(e) {
    console.log(e.target);
    this.setState({ [e.target.name]: parseInt(e.target.value) - 1 });
    console.log(this.state);
  }

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
                <Button onClick={this.handleClick} name="clicks1" value={this.state.clicks1} outline color="primary">Expresso +</Button>
                <Button onClick={this.decrementClick} name="clicks1" value={this.state.clicks1} outline color="primary">Expresso -</Button>
              </th>
              <th>
                <Button onClick={this.handleClick} name="clicks2" value={this.state.clicks2} outline color="secondary">Latte +</Button>
                <Button onClick={this.decrementClick} name="clicks2" value={this.state.clicks2} outline color="primary">Latte -</Button>
              </th>
              <th>
                <Button onClick={this.handleClick} name="clicks3" value={this.state.clicks3} color="danger">Machiato +</Button>
                <Button onClick={this.decrementClick} name="clicks3" value={this.state.clicks3} outline color="primary">Machiato -</Button>
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
