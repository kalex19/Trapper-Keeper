import React, { Component } from 'react';
import { connect } from 'react-redux';

export class notepopup extends Component {
	constructor() {
		super();
		this.state = {
      title: '',
      task: '',
      tasks: []
		};
	}

	handleChange = e => {
		const {name, value} = e.target
		this.setState({	[name]:value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.saveNote();
	};

	saveNote = () => {
		const { title, tasks } = this.state;
		const newNote = {
			id: Date.now(),
			title,
      tasks,
      completed: false
		}
	}

	handleEnter = e => {
    if(e.key === 'Enter' && !this.task === ''){
    const  newTask = {
        id: Date.now(),
        task: this.state.task,
        completed: false
      }
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
    } 
  };

	render() {
		return (
			<form className='note-pop-up'>
				<input value={this.state.title} placeholder="Title" name="title" type="text" onChange={this.handleChange} />
				<input
					value={this.state.newItem}
					placeholder="List Item"
					name="newItem"
					type="text"
					onChange={this.handleChange} 
					onKeyPress={this.handleEnter}
			/>
			<button onClick={this.handleSubmit}>Save</button>
		</form>
		);
	}
}

const mapDispatchToProps = (state) => ({
	
})

export default connect(null, mapDispatchToProps)(notepopup);

//?generate a new list item note?
