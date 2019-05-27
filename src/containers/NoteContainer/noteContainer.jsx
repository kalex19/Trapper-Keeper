import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Note from '../Note/note';
import NotePopUp from '../NotePopUp/notepopup';
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

  

  render() {
    return (
    <main className="NoteContainer">
    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
		    
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
//   fetchNotes: (url) => dispatch(fetchNotes(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer);
