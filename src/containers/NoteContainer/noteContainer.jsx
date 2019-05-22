import React from 'react';
import Note from '../Note/note';
import { connect } from 'react-redux';
import './NoteContainer.scss';
import PropTypes from 'prop-types';

export default class NoteContainer extends Component {
  constructor(){
    super() 
    this.state = {
    }
  }

  render() {
    let note = <Note />;
    return <main className="NoteContainer">{note}</main>;
  }
};

export default connect(mapStateToProps)(NoteContainer);

noteContainer.propTypes = {
  
};
