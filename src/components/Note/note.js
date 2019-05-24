import React from 'react';
import PropTypes from 'prop-types';

const Note = (props) => {
	const {title, tasks, complete, id} = props;
	return (
		<div className="Note">
			<h2>{title}</h2>
			{tasks.map(task => {
				return ( 
							<p>{complete === true ? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>} {task.task}</p>
					
						)
					   
				
			})}
			
		</div>
		);
}


export default Note;