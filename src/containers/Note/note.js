import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './note.scss';
import PropTypes from 'prop-types';

export default class Note extends Component {
	handleTitleChange = () => {
		console.log('handleTitleChange');
	};

	handleItemChange = () => {
		console.log('handleItemChange');
	};

	render() {
		let listItem = <input placeholder="to-do" value="listItem" name="listItem" onChange={this.handleItemChange} />;

		return (
			<div className="Note">
				<input placeholder="title" value="title" name="title" onChange={this.handleTitleChange} />
				{listItem}
				<button className="delete">
					<i class="fas fa-trash-alt" />
				</button>
			</div>
		);
	}
}

note.propTypes = {};
