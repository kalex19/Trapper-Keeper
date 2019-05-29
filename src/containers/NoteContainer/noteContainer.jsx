import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import NotePopUp from '../NotePopUp/notepopup';
import Note from '../Note/note';
import { getNotes } from '../../Util/thunks/getNotes';
import { addNote } from '../../Util/thunks/addNote';
import { fetchNotes } from '../../Util/thunks/fetchNotes';



export class NoteContainer extends Component {
  constructor(props){
    super(props) 
    this.state = {
      notes: []
    }
  }

  
  componentDidMount() {
    const url = 'http://localhost:3001/api/v1/notes'
    this.props.fetchNotes(url);
  }


  render() {
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
  fetchNotes: (url) => dispatch(fetchNotes(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
