import React from 'react'
import ws from './Socket'

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
      ws.emit('msg', this.state.message);
      this.setState({
        message: null
      });
    }
  }

  render(){
    return <input
      type="text"
      onChange={this.handleChange.bind(this)}
      onKeyDown={this.handleKeyDown.bind(this)}
      placeholder="Your message…"
      value={this.state.message || ''}
    />
  }
}
