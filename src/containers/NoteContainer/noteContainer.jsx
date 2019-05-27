import React, { Component } from 'react';
import Note from '../../components/Note/note';
import NotePopUp from '../NotePopUp/notepopup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

export class NoteContainer extends Component {
  constructor(props){
    super(props) 
    this.state = {

    }
  }


  render() {
    return (
    <main className="NoteContainer">
    {/* <Route path='/notes/:id' render={ ({ match }) => {
				const { id } = match.params
				const note = notes.find(n => n.id === parseInt(id))
				if (note) {
					return <NotePopUp {...note} />
				}
      }}/> */}
      
      <Route exact path='/new-note' component={NotePopUp} />
		  <Link to='/new-note' className='add-note-button'>
			  <button>Add Note</button>
		  </Link>
      {this.props.notes.map(note => {
        return <Note {...note}/>
      })}
    </main>
    )
  }
};

export const mapStateToProps = (state) => ({
	notes: state.notes
})

export default connect(mapStateToProps)(NoteContainer);


