import React, { Component } from 'react';
import './style.css';
import logo from './img/logo.png';

class Header extends Component {
  constructor(props) {
      super(props);
      	this.state = {
        	title:'Ticket Manager Pro'
      }
    }

  render() {
    return (
        <header className="main-header">
          <img src={ logo } alt={ this.state.title } className="logo-img"/>
          <h1 className="main-title">{  this.state.title }</h1>
        </header>
    );
  }
}


export default Header;