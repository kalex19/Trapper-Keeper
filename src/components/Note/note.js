import React from 'react';
import PropTypes from 'prop-types';

const Note = (props) => {
	const {title, tasks, complete, id} = props;
	return (
		<div className="Note">
			<h2>{title}</h2>
			{tasks.map(task => {
				return ( 
						<p>{complete === true ? <input type="checkbox" checked/> : <input type="checkbox" />} {task.task}</p>
					)
				}
			)}
		</div>
	);
}


export default Note;