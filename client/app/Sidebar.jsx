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
    this.colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"];

    ws.on('useradd', (user) => {
      const users = this.state.users.filter((u) => { return u.id !== user.id });
      this.setState({
        users: [...users, user]
      });
    });

    ws.on('userdel', (id) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id)
      });
    });
  }

  getColor(nick) {
    const index = Math.abs(nick.split("").reduce((acc, x) => {
      if (typeof x === "string") { x = x.charCodeAt(0) - 65 }
      return acc += x;
    }, 0) % this.colors.length);
    return this.colors[index];

  }

  render() {
    const userItems = this.state.users.sort((a, b) => {
      if (a.nickname.toLowerCase() < b.nickname.toLowerCase())
        return -1;
      if (a.nickname.toLowerCase() > b.nickname.toLowerCase())
        return 1;
      return 0;
    }).map((user) =>
      <div className="user" key={user.id}>
        <span style={{display: "inline-block", height: "32px", width: "32px", backgroundColor: this.getColor(user.id), lineHeight: "32px", borderRadius: "50%", textAlign: "center", color: "#FFF", marginRight: "15px"}}>
          {user.nickname[0].toUpperCase()}
        </span>
        {user.nickname}
      </div>
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
