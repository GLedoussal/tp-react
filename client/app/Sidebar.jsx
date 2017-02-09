import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// TODO get the usersList

const userItems = usersList.map((user) =>
  <MenuItem>{user.nickname}</MenuItem>
);

export default class Sidebar extends React.Component {

  render() {
    return(
      <MuiThemeProvider>
        <div>
          <Drawer open={true}>
            <h2 style={{paddingLeft: "25%"}}>Utilisateurs</h2>
            {userItems}
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
