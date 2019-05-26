import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	deleteNote,
	deleteTask
} from '../../actions';
import {
	connect
} from 'react-redux';

export class Note extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	deleteNote = () => {
		const {
			noteToDelete,
			title,
			tasks,
			id
		} = this.props;
		noteToDelete({
			id: id,
			title: title,
			tasks: tasks,
			completed: false
		})
	}


	render() {
		const {
			title,
			tasks,
			complete
		} = this.props;
		return ( <
			div className = "Note" >
			<
			h2 > {
				title
			} < /h2> {
				tasks.map(task => {
					return ( <
						article className = 'task' >
						<
						p > {
							complete === true ? < i className = "far fa-check-square" > < /i> : <i className="far fa-square"></i >
						} {
							task.task
						} < /p>	 <
						/article>
					)
				})
			} <
			button type = 'button'
			onClick = {
				() => this.deleteNote()
			}
			className = "delete" > < i className = "fas fa-trash-alt" / > < /button> <
			/div>
		);
	}
}


export const mapDispatchToProps = (dispatch) => ({
	noteToDelete: (obj) => dispatch(deleteNote(obj))
})


export default connect(null, mapDispatchToProps)(Note);