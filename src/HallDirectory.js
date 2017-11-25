import React, { Component } from 'react';

import './style.css';

class HallDirectory extends Component {
  constructor(props) {
      super(props);

  }

  render() {

    return (
        <div className = "container">
            <div className = "directory-menu">
                <button className ="btn-general menu-btn">Add</button>
                <button className ="btn-general menu-btn">Edit</button>
                <button className ="btn-general menu-btn">Delete</button>
            </div>
            <div className="clear"></div>
            <div className = "directory-page">
              <table className="directory-list">
                <tbody>
                  <tr className="directory-header">
                    <th>№</th>
                    <th>Hall Name</th>
                    <th>City</th>
                    <th>Comments</th>
                  </tr>
                  <tr>
                    <td className="row-number">1</td>
                    <td>Ace Hall</td>
                    <td>Kharkiv</td>
                    <td>Some comment1</td>
                  </tr>
                  <tr>
                    <td className="row-number">2</td>
                    <td>Gold Hall</td>
                    <td>Kiyiv</td>
                    <td>Some comment2</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    );
  }
}


export default HallDirectory;