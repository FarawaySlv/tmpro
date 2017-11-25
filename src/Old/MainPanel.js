import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './style.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import * as actionCreators from './actionCreators';

const mapStateToProps = function(state){
    return {
      mainStore: state
    }
  }

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        getSelection: actionCreators.getSelection,
    }, dispatch)
  }

class MainPanel extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);