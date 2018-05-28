import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditComponent extends Component{
	handleEdit(e) {
	e.preventDefault();

	const newTitle = this.newTitle.value;
	const newMessage = this.newMessage.value;
	const data = {
		newTitle,
		newMessage
	}
	this.props.dispatch({type: 'UPDATE', id: this.props.post.id, data:data})
	}

	render() {
		return(
			<div>		
				<form onSubmit={(e) => this.handleEdit(e)}>

				{/* input box */}				
				 <div className="form-group">
				    <label htmlFor="exampleInputEmail1">Enter Post</label>
				    <input type="text" className="form-control" placeholder="Enter Post" ref={(input) => this.newTitle = input} 
					defaultValue={this.props.post.title}/>
				    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>

				{/* text Area */}
				<div className="form-group">
				    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
				    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={(input) => this.newMessage = input} defaultValue={this.props.post.message}></textarea>
				  </div>	

				{/* button */}
				<button type="submit" className="btn btn-primary mb-2">Update</button>
				</form>
			</div>
			)
	}
}

export default connect()(EditComponent);