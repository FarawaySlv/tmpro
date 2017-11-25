import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './style.css';

import MainPanel from './MainPanel';
import main_menu from './main_menu';

import registerServiceWorker from './registerServiceWorker';

const initialState = {
	menu: main_menu,
	content: null
};

function storeManager(state = initialState, action){
	if(action.type === 'GET_CONTENT'){
		state.content = action.payload;
	}
	return state;
}

const store = createStore(storeManager, window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store = {store}>
		<MainPanel />
	</Provider>,
	 document.getElementById('root'));
registerServiceWorker();
