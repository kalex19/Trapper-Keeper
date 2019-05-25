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
		console.log(this.props)
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
	
	deleteTasks = (id) => {
		let tasks = this.state.tasks.filter(task => task.id !== id)
		this.setState({tasks: this.state.tasks, tasks});
	}

	// checkTasks = (id) => {
	// 	let tasks = this.state.tasks.filter(task => {
	// 		if(task.id === id) {
	// 			return task.completed = true;
	// 		}
	// 	});
	// 	this.setState(tasks)
	// }

	render() {
		return (
			<form className='note-pop-up'>
				<input value={this.state.title} placeholder="Title" name="title" type="text" onChange={this.handleChange} className='title'/>
				<section className='task-handler'>
					<button onClick={this.addTask} className='add-task'><i className="fas fa-plus"></i></button>
					<input
						value={this.state.task}
						placeholder="List Item"
						name="task"
						type="text"
						onChange={this.handleChange} 
					/> 
					{this.state.tasks.map(task => {
						return ( <article className='task' key={task.id}>
												<button type='button' onClick={() => this.deleteTasks(task.id)} className='delete-task'><i className="fas fa-minus"></i></button>
												<p contentEditable='true' suppressContentEditableWarning='true'> {task.task}</p> 
										</article>
									 )
					})}
				</section>
			<Link to='/'>
				<button onClick={this.submitForm} className='save-btn'>Save</button>
			</Link>
		</form>
		);
	}
}



export const mapDispatchToProps = (dispatch) => ({
	saveNote: (obj) => dispatch(addNewNote(obj))
})

export default connect(null, mapDispatchToProps)(NotePopUp);
