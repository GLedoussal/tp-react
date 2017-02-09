import React from 'react'
import Login from './Login'
import Messages from './Messages'
import Sidebar from './Sidebar'

import ws from './Socket'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loginError: null,
      users: []
    };
  }

  componentWillMount(){
    ws.on('userslist', users => this.setState({users}));
  }

  onLoginDone(nick){
    ws.emit('nick', nick, reply => {
      if(reply && reply.error){
        this.setState({
          loginError: reply.error,
          isLoggedIn: false
        });
      } else {
        this.setState({
          loginError: null,
          isLoggedIn: true
        });
      }
    });
  }

  render() {
    if (!this.state.isLoggedIn) {
      return <Login onLoginDone={this.onLoginDone.bind(this)}/>;
    } else {
      // TODO Draw the chat UI
      return (
        <div>
          <Sidebar users={this.state.users}/>
          <div style={{paddingLeft:"256px"}}>
            <Messages />
          </div>
        </div>
      )
    }
  }
}
