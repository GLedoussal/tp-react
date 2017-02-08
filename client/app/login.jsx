import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cardStyle = { width: "400px", margin: "0 auto" };
const textStyle = { width: "100%" };
const buttonWrapperStype = { textAlign: "center", marginTop: "25px" };

export default class Login extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Card style={cardStyle}>
          <CardHeader
            title="Login"
          />
          <CardText>
            <form>
                <TextField name="nickname" floatingLabelText="Nickname" style={textStyle}></TextField>
                <div style={buttonWrapperStype}>
                  <FlatButton label="Connect" rippleColor="primary"></FlatButton>
                </div>
            </form>
          </CardText>
        </Card>
      </MuiThemeProvider>
    )
  }
}