import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Menu extends Component {
  constructor(props) {
      super(props);

     this.state = {
        menu: this.props.mainStore.menu
      }
  }

  menuClick(id){
      let menu = this.state.menu;
      for (var i = 0; i < menu.length; i++) {
        menu[i].isOpen = (menu[i].id ===id)? true:false;
      }
      this.forceUpdate();
    }

  render() {
    return (
        <div className = "main-menu">
            <div className="menu-header">
                <h2>Menu</h2>              
            </div>
            <ul className="menu-list">
                { this.state.menu.map((item, index)=>
                    <li className={ item.isOpen? 'btn-general':'btn-general sub-close' } onClick = { this.menuClick.bind(this, item.id) } key={ item.id }>{ item.name }
                      { item.children &&
                          <ul className="sub-menu">
                              { item.children.map((el, el_index)=>
                                <li onClick = { this.props.getSelection.bind(this, el.id) } key={ el.id }>{ el.name }</li>
                              )}
                          </ul>
                      }
                    </li>
                  )}                
            </ul>
        </div>
    );
  }
}


export default connect(state => ({
    mainStore: state
  }),
  dispatch =>({
      getSelection: (content_id)=>{
      dispatch({type: 'GET_CONTENT', payload: content_id})
    }})
  )(Menu);