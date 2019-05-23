import React, { Component } from 'react';

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
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleClick = e => {
    console.log(this.state)
    //save whole note to store - send to backend
	};

	handleEnter = e => {
    if(e.key === 'Enter' && !this.listItem === ''){
      newListItem = {
        id: Date.now(),
        listItem: this.state.listItem,
        completed: false
      }
      this.setState({
        listItems: [...this.state.newListItem, newListItem]
      })
    } 
  };

	render() {
		return (
			<form>
				<input value={this.state.title} placeholder="Title" name="title" type="text" onChange={this.handleChange} />
				<input
					value={this.state.listItem}
					placeholder="List Item"
					name="newItem"
					type="text"
          onChange={this.handleChange} 
          onKeyPress={this.handleEnter}
				/>
			</form>
      <div onClick={this.handleClick} role='button'>Save</div>
		);
	}
}

export default notepopup;

//?generate a new list item note?
