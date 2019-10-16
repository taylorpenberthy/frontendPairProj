import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    }
  }
  componentDidMount() {
    fetch('/brew')
    .then(res => res.json())
    .then(breweries => this.setState({breweries}))
  }
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to='/'>
            <h1>Home</h1>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Breweries} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
