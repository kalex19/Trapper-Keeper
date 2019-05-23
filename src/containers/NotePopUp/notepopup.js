import React, { Component } from 'react';
import { connect } from 'react-redux';

export class notepopup extends Component {
	constructor() {
		super();
		this.state = {
      title: '',
      listItem: '',
      newListItem: {},
      listItems: []
		};
	}
	handleChange = e => {
		const {name, value} = e.target
		this.setState({	[name]:value });
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	// handleEnter = e => {
  //   if(e.key === 'Enter' && !this.listItem === ''){
  //   const  newListItem = {
  //       id: Date.now(),
  //       listItem: this.state.listItem,
  //       completed: false
  //     }
  //     this.setState({
  //       listItems: [...this.state.newListItem, newListItem]
  //     })
  //   } 
  // };

	render() {
		return (
			<form className='note-pop-up'>
				<input value={this.state.title} placeholder="Title" name="title" type="text" onChange={this.handleChange} />
				<input
					value={this.state.newItem}
					placeholder="List Item"
					name="newItem"
					type="text"
					onChange={this.handleChange} 
					// onKeyPress={this.handleEnter}
			/>
			<button onClick={this.handleSubmit}>Save</button>
		</form>
		);
	}
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(notepopup);

//?generate a new list item note?
