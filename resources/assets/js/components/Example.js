import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Postform from './PostForm';
import AllPost from './AllPost';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Postform/>

                <hr/>

                <AllPost/>
            </div>
        );
    }
}

