import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ws from './Socket'

// TODO get the usersList

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    };

    ws.on('useradd', (user) => {
      this.setState({
        users: this.state.users.concat([user])
      });
    });

    ws.on('userdel', (id) => {
      this.setState({
        users: this.state.users.filter((user) => user.id === id ? false : true)
      });
    });
  }

  render() {
    const userItems = this.state.users.map((user) =>
      <div className="user">{user.nickname}</div>
    );
    return(
      <MuiThemeProvider>
        <div>
          <Drawer open={true} containerStyle={{backgroundColor: "rgb(51, 69, 87)", padding: "15px"}}>
            <h2 style={{color: "#a9a9a9", paddingBottom: "15px", borderBottom: "1px solid rgb(41, 55, 70)"}}>Online</h2>
            {userItems}
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
