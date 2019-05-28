import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { deleteNote, deleteTask, toggleCompleteTask } from '../../actions';
import { connect } from 'react-redux';

export class Note extends Component {
	constructor (props) {
		super(props)
		this.state = {

		}
	}

	handleClick = e => {
		console.log(e.target.checked)
		const { completeTask, id, title, task } = this.props;
		completeTask({
			id,
		})

	}

	deleteNote = () => {
		const { noteToDelete, title, tasks, id} = this.props;
		noteToDelete({
			id: id,
			title: title,
      tasks: tasks
		})
	}

	render() {
	const {title, tasks, complete} = this.props;
	return (
		<div className="Note">
			<h2>{title}</h2>
			{tasks.map(task => {
				return ( <article className='task'>
							{complete === true ? 
							<input 
							onClick={this.handleClick} 
							className='check-box' 
							type="checkbox" 
							checked/> : 
							<input 
							onClick={this.handleClick} 
							className='check-box' 
							type="checkbox" />}
							<p 
							contentEditable='true' 
							suppressContentEditableWarning='true'> {task.task} </p>
							<button type='button' 
							className='delete-task'>
							<i className="fas fa-minus"></i>
							</button>
						 </article>
					)
				}
			)}
			<button type='button' 
			onClick={() => this.deleteNote()} 
			className="delete">
			<i className="fas fa-trash-alt" />
			</button>
		</div>
	);
	}
}

Note.propTypes = {
	noteToDelete: PropTypes.func
}

export const mapDispatchToProps = (dispatch) => ({
	noteToDelete: (obj) => dispatch(deleteNote(obj)),
	completeTask: (obj) => dispatch(toggleCompleteTask(obj))
})


export default connect(null, mapDispatchToProps)(Note);