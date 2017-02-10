import React from 'react'
import ws from './Socket'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      message: null
    };
  }

  handleChange(e){
    this.setState({
      message: e.target.value
    });
  }

  handleKeyDown(e){
    if(e.keyCode === 13){
      const splitted = this.state.message.split(' ');

      switch (splitted[0]){
        case "/nick":
          ws.emit('nick', splitted[1]);
        break;
        default:
          ws.emit('msg', this.state.message);
      }

      this.setState({
        message: null
      });
    }
  }

  render(){
    return (
      <MuiThemeProvider>
        <div className="input-wrapper" style={{position: "fixed", bottom: "0", height: "115px", right: "0", width: "100%", backgroundColor: "rgb(255,255,255)"}}>
          <div style={{paddingLeft: "256px"}}>
            <div style={{padding: "15px"}}>
              <TextField
              type="text"
              onChange={this.handleChange.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
              floatingLabelText="Message"
              style={{width: "100%"}}
              value={this.state.message || ''} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
