import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewNote } from '../../actions';

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

	submitForm = e => {
		e.preventDefault();
		const { saveNote } = this.props;
		saveNote({
			id: Date.now(),
			title: this.state.title,
      tasks: this.state.tasks,
      completed: false
		})
	};

	// saveNote = () => {
	// 	const { title, tasks } = this.state;
	// 	const newNote = {
	// 		id: Date.now(),
	// 		title,
  //     tasks,
  //     completed: false
	// 	}
	// }

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
					value={this.state.task}
					placeholder="List Item"
					name="task"
					type="text"
					onChange={this.handleChange} 
					onKeyPress={this.handleEnter}
			/>
			<Link exact path='/'>
			<button onClick={this.submitForm}>Save</button>
			</Link>
		</form>
		);
	}
}



const mapDispatchToProps = (dispatch) => ({
	saveNote: (obj) => dispatch(addNewNote(obj))
})

export default connect(null, mapDispatchToProps)(notepopup);
