import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './App.scss';
import PropTypes from 'prop-types';
import Nav from '../../components/Nav/nav';
import NoteContainer from '../../containers/NoteContainer/noteContainer';

function App(){
	let noteContainer = <NoteContainer />;
	let nav = <Nav />;
	return (
		<div className="App">
			{nav}
			{noteContainer}
		</div>
	);
}

export default App;
