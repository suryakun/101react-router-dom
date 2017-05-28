import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CarsPage from './components/cars/CarsPage';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/cars" component={CarsPage} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

export default App;
