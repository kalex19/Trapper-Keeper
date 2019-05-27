import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addNewNote } from '../../actions';

export class NotePopUp extends Component {
	constructor() {
		super();
		this.state = {
      title: '',
      task: '',
			tasks: [],
			redirected: false
		};
	}

	handleChange = e => {
		const {name, value} = e.target
		this.setState({	[name]:value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { saveNote } = this.props;
		saveNote({
			id: Date.now(),
			title: this.state.title,
      tasks: this.state.tasks,
      completed: false
		})
		this.setState({redirected:true})
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
		return (
			<form className='note-pop-up' onSubmit={this.handleSubmit}>
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
			<button type="submit">Save</button>
			<button className="delete">
					<i className="fas fa-trash-alt" />
			</button>
			{this.state.redirected && <Redirect to='/' className="save-btn" />}
		</form>
		);
	}
}



export const mapDispatchToProps = (dispatch) => ({
	saveNote: (obj) => dispatch(addNewNote(obj))
})

export default connect(null, mapDispatchToProps)(NotePopUp);
