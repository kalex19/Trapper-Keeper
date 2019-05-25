import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from '../../actions';
import PropTypes from 'prop-types';
import NoteContainer from '../../containers/NoteContainer/noteContainer';

export default function App(){
	return (
		<div className='App'>
		<Route exact path='/'/>
		<h1>Tranquili-Sticky</h1>
			<NoteContainer/>
		</div>
	);
}