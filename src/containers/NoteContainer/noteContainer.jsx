import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Note from '../Note/note';
import NotePopUp from '../NotePopUp/notepopup';
import { getNotes } from '../../Util/thunks/getNotes';
import { addNote } from '../../Util/thunks/addNote';
import { deleteNote, deleteTask } from '../../actions';
import { fetchNotes } from '../../Util/thunks/fetchNotes';


export class NoteContainer extends Component {
  constructor(props){
    super(props) 
    this.state = {
      notes: []
    }
  }

  
  componentDidMount() {
   fetch('http://localhost:3001/api/v1/notes')
   .then(response => response.json())
   .then(notes => this.setState({notes: notes}));
  }

  deleteNote = (id) => {
    let notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes})
	}

  render() {
    let filterOutBackEndTestNotes = this.state.notes.filter(note => note.title !== 'test')
    return ( 
    <main className="NoteContainer">
    <Route path='/notes/:id' render={ ({ match }) => {
				const { id } = match.params
				const note = this.props.notes.find(n => n.id === parseInt(id))
				if (note) {
					return <NotePopUp {...note} />
				}
      }}/>
    <Route exact path='/new-note' component={NotePopUp} />
    {this.props.notes.map(note => {
        return <Note {...note}/>
    })}
    {filterOutBackEndTestNotes.map(note => {
      return (<article className='Note' key={note.id}>
                <h2>{note.title}</h2>
                  {note.tasks.map(task => {
                    return (<article className='task' key={task.id}>
							                  {note.complete === true ? <input className='check-box' type="checkbox" checked/> : <input className='check-box' type="checkbox" />}
                                <p>{task.task}</p>
							                  <button type='button' className='delete-task'><i className="fas fa-minus"></i></button>
						                 </article>
                            )
                    })}
                  <button type='button' onClick={() => this.deleteNote(note.id)} className="delete"><i className="fas fa-trash-alt" /></button>
						    </article>
          )})}       
		  <Link to='/new-note' className='add-note-button'>
			  <button>Add Note</button>
		  </Link>
    </main>
    )
  }
};

NoteContainer.propTypes = {
  getNotes: PropTypes.func,
  addNote: PropTypes.func,
  notes: PropTypes.array
}

export const mapStateToProps = (state) => ({
   notes: state.notes
})

export const mapDispatchToProps = dispatch => ({
  getNotes: (url) => dispatch(getNotes(url)),
  addNote: (obj) => dispatch(addNote(obj)),
  // noteToDelete: (obj) =>  dispatch(deleteNote(obj))
  fetchNotes: (url) => dispatch(fetchNotes(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
