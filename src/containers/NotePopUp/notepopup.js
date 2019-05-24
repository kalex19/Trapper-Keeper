import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNewNote } from '../../actions';

export class NotePopUp extends Component {
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

	addTask = e => {
		e.preventDefault();
    if(this.task !== '') {
    let newTask = {
        id: Date.now(),
        task: this.state.task,
        completed: false
			}
      this.setState({
        tasks: [...this.state.tasks, newTask]
			})
			this.setState({task: ''})
    } 
	};
	
	deleteTask = id => {
		let tasks = this.state.tasks.filter(task => task.id !== id)
		this.setState({tasks})
	}

	render() {
		let input = <input type='text'/>;
		return (
			<form className='note-pop-up'>
				<input value={this.state.title} placeholder="Title" name="title" type="text" onChange={this.handleChange} />
				<section className='task-handler'>
					<button onClick={this.addTask} className='add-task'><i className="fas fa-plus"></i></button>
					<input
						value={this.state.task}
						placeholder="List Item"
						name="task"
						type="text"
						onChange={this.handleChange} 
					/>
					<button onClick={this.deleteTask} className='delete-task'><i className="fas fa-minus"></i></button>
					{this.state.tasks.map(task => {
						return <p contentEditable='true'> <i class="far fa-square"></i> {task.task}</p>
					})}
				</section>
			<Link to='/'>
				<button onClick={this.submitForm}>Save</button>
			</Link>
			<button className="delete">
					<i className="fas fa-trash-alt" />
			</button>
		</form>
		);
	}
}



const mapDispatchToProps = (dispatch) => ({
	saveNote: (obj) => dispatch(addNewNote(obj))
})

export default connect(null, mapDispatchToProps)(NotePopUp);
