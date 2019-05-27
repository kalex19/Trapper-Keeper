import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addNote } from '../../Util/thunks/addNote';
import { Note } from '../Note/note';



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
		const { addNote } = this.props;
		addNote({
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
	
	deleteTasks = id => {
		let tasks = this.state.tasks.filter(task => task.id !== id)
		this.setState({tasks});
	}

	handleChange2 = e => {
		console.log(e.target)
		const { value } = e.target;
    this.setState({ task: value });
  };

	render() {
		return (
			<form className='note-pop-up' onSubmit={this.handleSubmit}>
				<input className='title' value={this.state.title} placeholder="Title" name="title" type="text" onChange={this.handleChange} />
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
						return (<article className='task' key={task.id}>
											<button type='button' onClick={() => this.deleteTasks(task.id)} className='delete-task'><i className="fas fa-minus"></i></button>
											<p onChange={() => this.handleChange2(task)} contentEditable='true' suppressContentEditableWarning='true' > {task.task}</p> 
										</article>
										)
					})}
				</section>
			<button className="save-btn" type="submit">Save</button>
			{this.state.redirected && <Redirect to='/' className="save-btn" />}
		</form>
		);
	}
}

NotePopUp.propTypes = {
	addNote: PropTypes.func
}


export const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note))
})

export default connect(null, mapDispatchToProps)(NotePopUp);
