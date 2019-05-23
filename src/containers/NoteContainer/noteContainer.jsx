import React, { Component } from 'react';
import Note from '../../components/Note/note';
import NotePopUp from '../NotePopUp/notepopup'
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

export default class NoteContainer extends Component {
  constructor(){
    super() 
    this.state = {

    }
  }


  render() {
    let note = <Note />;
    return (
    <main className="NoteContainer">
    {/* <Route path='/notes/:id' render={ ({ match }) => {
				const { id } = match.params
				const note = notes.find(n => n.id === parseInt(id))
				if (note) {
					return <NotePopUp {...note} />
				}
      }}/> */}
      <Route exact path='/new-note' component={NotePopUp}/>
		  <NavLink exact to='/new-note' className='add-note-button'>
			<button >Add Note</button>
		</NavLink>
    </main>
    )
  }
};

// export default connect(mapStateToProps)(NoteContainer);

// noteContainer.propTypes = {
  
// };
