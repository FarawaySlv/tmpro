import React, { Component } from 'react';
import './style.css';
import Menu from './Menu';
import WorkSpace from './WorkSpace';

class Content extends Component {
  constructor(props) {
      super(props);

    }

  render() {
    return (
        <div className = "content">
        	<Menu />
        	<WorkSpace />
        </div>
    );
  }
}


export default Content;