import React from 'react';
import ReactDOM from 'react-dom';
import './Scss/index.scss';
import App from './components/App/App';
import {
	BrowserRouter
} from 'react-router-dom';
import {
	createStore,
	applyMiddleware
} from 'redux';
import {
	composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {
	Provider
} from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const router = ( <
	Provider store = {
		store
	} >
	<
	BrowserRouter >
	<
	App / >
	<
	/BrowserRouter> <
	/Provider>
);

ReactDOM.render(router, document.getElementById('root'));