import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render(){
    return (<div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Auto rentcar</Link>
            </div>
          <ul className="nav navbar-nav">
            <li><Link to="/cars">Cars</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          </div>
        </nav>
        </div>)
  }
}

export default Navbar;
