import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from '../../actions';
import PropTypes from 'prop-types';
import NoteContainer from '../../containers/NoteContainer/noteContainer';
import Note from '../../containers/Note/note';

function App(){
	let noteContainer = <NoteContainer />;
	return (
		<div className='App'>
		<Route exact path='/' />
		<Route exact path='/new-note' component={Note} />
		<h1>Tranquili-Sticky</h1>
			{noteContainer}
		{/* <Route path='/notes/:id' render={ ({ match }) => {
				const { id } = match.params
				const note = props.notes.find(n => n.id === parseInt(id))
				if (note) {
					return <Note {...note} />
				}
			} */}
		</div>
	);
}

export default App;
