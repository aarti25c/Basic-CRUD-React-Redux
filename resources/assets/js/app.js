import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from'redux';
import { Provider } from 'react-redux';

import App from './components/Example';
import postReducer from './reducers/postReducer';


/*store creation -> Reducer*/
const store = createStore(postReducer);

/*render*/
if (document.getElementById('app')) {
    ReactDOM.render(
    	<Provider store={store}>
    	<App />
    	</Provider>, document.getElementById('app'));
}
