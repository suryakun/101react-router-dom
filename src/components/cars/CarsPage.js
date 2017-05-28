import React, {Component} from 'react';

class HomePage extends Component{
  render(){
    return (<div>
        <h2>Cars table</h2>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mitsubishi</td>
            <td>Pajero sport</td>
            <td>Rp.1jt</td>
          </tr>
          <tr>
            <td>Toyota</td>
            <td>Fortuner</td>
            <td>Rp.1jt</td>
          </tr>
          </tbody>
        </table>
      </div>)
  }
}

export default HomePage;
