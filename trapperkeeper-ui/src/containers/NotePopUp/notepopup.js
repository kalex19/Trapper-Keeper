import React, { Component } from 'react';

export class notepopup extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			newNote: ''
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input value={this.state.title} placeholder="Title" name="title" type="text" onChange={this.handleChange} />
				<input
					value={this.state.newNote}
					placeholder="List Item"
					name="newNote"
					type="text"
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default notepopup;

//upon enter and there being input in the list item
//create a new note with an id, the content, and that completed = false
//save it to state as a new note in an array of notes for that card
//?generate a new list item note?
