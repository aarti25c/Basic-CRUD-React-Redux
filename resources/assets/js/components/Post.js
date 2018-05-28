import React,{Component} from 'react';

import {connect} from 'react-redux';

class Post extends Component{
	render(){
		return (
			<div>
			
				<div className="card">
				  <div className="card-body">
				    <h5 className="card-title">{this.props.post.title}</h5>
				    <p className="card-text">{this.props.post.message}</p>
				    <button className="btn btn-info mb-2"
				    onClick={() => this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}>Edit</button>
				    <button className="btn btn-danger mb-2"
				    onClick={() => this.props.dispatch({type:'DELETE_POST', id:this.props.post.id})}>Delete</button>
				  </div>
				</div>

			</div>
			);
	}
}


export default connect()(Post);