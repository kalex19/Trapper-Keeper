import React, { Component } from 'react';
import './Nav.scss';
import PropTypes from 'prop-types';

function Nav(){
	handleClick = () => {
		console.log('handle click');
		//on click add a new note
	};
	return (
		<div className="Nav">
			<button className="AddNote" onClick={this.handleClick}>
				<i class="fas fa-plus-circle" />
			</button>
		</div>
	);
}

nav.propTypes = {};
