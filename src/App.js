import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button Table } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Coffee Intake</h1>
        </header>
        <div className="button-container">
          <h1>How many cups?</h1>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>
                <Button outline color="primary">Expresso</Button>
              </th>
              <th>
                <Button outline color="secondary">Latte</Button>
              </th>
              <th>
                <Button color="danger">Machiato</Button>
              </th>
            </tr>
          <tbody>
            <tr>
              <th scope="row">Count</th>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
      </div>;
    );
  }
}

export default App;
