import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from '../../actions';
import PropTypes from 'prop-types';
import NoteContainer from '../../containers/NoteContainer/noteContainer';

function App(){
	let noteContainer = <NoteContainer />;
	return (
		<div className="App">
		<h1>Tranquilisticky</h1>
			{noteContainer}
		</div>
	);
}

export default App;
