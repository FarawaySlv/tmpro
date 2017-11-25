import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import HallDirectory from './HallDirectory';

class WorkSpace extends Component {
  constructor(props) {
      super(props);
      this.state = {
        content: this.props.mainStore.content
      }

    }

  render() {
    
    return (
        <div className = "workspace">
          <HallDirectory/>
        </div>
    );
  }
}


export default connect(
  state => ({
    mainStore: state
  }),
  dispatch =>({})
)(WorkSpace);