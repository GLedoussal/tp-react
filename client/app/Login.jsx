import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cardStyle = { width: "400px", margin: "0 auto" };
const textStyle = { width: "100%" };
const buttonWrapperStype = { textAlign: "center", marginTop: "25px" };

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {nickname: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({nickname: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card style={cardStyle}>
          <CardHeader
            title="Login"
          />
          <CardText>
            <form onSubmit={this.handleSubmit}>
                <TextField
                name="nickname"
                floatingLabelText="Nickname"
                value={this.state.nickname}
                onChange={this.handleChange}
                style={textStyle}></TextField>
                <div style={buttonWrapperStype}>
                  <FlatButton label="Connect" rippleColor="primary" type="submit"></FlatButton>
                </div>
            </form>
          </CardText>
        </Card>
      </MuiThemeProvider>
    )
  }
}