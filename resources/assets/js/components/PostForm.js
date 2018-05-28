import React, {Component} from 'react';
import {connect} from 'react-redux';


class PostForm extends Component {
	
	handleSubmit(e){
		e.preventDefault();
		const title = this.getTitle.value;
		const message = this.getMessage.value;

		const data = {
			id: new Date(),
			title,
			message,
			editing:false
		}

		//action trigger
		this.props.dispatch({
			type:'ADD_POST',
			data
		});

		//blank the vlaues
		this.getTitle.value = '';
		this.getMessage.value = '';

		//console.log(data)
	}



	render(){
		return (
			<div>
				<h1>Create Post</h1>

				<form onSubmit={(e) => this.handleSubmit(e)}>
				{/* input box */}				
				 <div className="form-group">
				    <label htmlFor="exampleInputEmail1">Email address</label>
				    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={(input) => this.getTitle = input} />
				    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>

				{/* text Area */}
				<div className="form-group">
				    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
				    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={(input) => this.getMessage = input}></textarea>
				  </div>	

				{/* button */}
				<button type="submit" className="btn btn-primary mb-2">Confirm identity</button>


			
				</form>
			</div>
		);
	}
}

export default connect()(PostForm);