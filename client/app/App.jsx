import React from 'react'
import Login from './Login'

export default class App extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {isLoggedIn: true};
	  }

    render() {
    	if (!this.state.isLoggedIn) {
        	return <Login />;
        } else {
        	// TODO Draw the chat UI
        	return null;
        }
    }
}
