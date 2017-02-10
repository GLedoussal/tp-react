import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux'
import ws from './Socket'
import getColor from './colors';

// TODO get the usersList

class Sidebar extends React.Component {
  render() {
    const userItems = this.props.notifiers.users.sort((a, b) => {
      if (a.nickname.toLowerCase() < b.nickname.toLowerCase())
        return -1;
      if (a.nickname.toLowerCase() > b.nickname.toLowerCase())
        return 1;
      return 0;
    }).map((user) =>
      <div className="user" key={user.id}>
        <span style={{display: "inline-block", height: "32px",
        width: "32px", backgroundColor: getColor(user.id),
        lineHeight: "32px", borderRadius: "50%",
        textAlign: "center", color: "#FFF", marginRight: "15px"}}>
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

Sidebar.propTypes = {
  notifiers: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  notifiers: {
    users: state.usersReducer
  }
});

export default connect(mapStateToProps)(Sidebar);
