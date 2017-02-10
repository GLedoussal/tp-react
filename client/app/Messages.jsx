import React from 'react'
import Message from './Message'
import ws from './Socket'

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    ws.on('msg', (message) => {
      this.setState({
        messages: this.state.messages.concat([message])
      });
    });
  }

  scrollToBottom() {
    if (!this.container) return
    const scrollHeight = this.container.scrollHeight;
    const height = this.container.clientHeight;
    this.container.scrollTop = scrollHeight - height;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  } 

  render() {
    return (
      <div style={{position: "fixed", right: "0", top: "0", left: "0", height: "100%", overflow: "auto"}} ref={(ref) => this.container = ref}>
        <div style={{paddingBottom: "115px", paddingLeft: "256px"}}>
          {this.state.messages.map((message) => {
            return <Message message={message} />
          })}
        </div>
      </div>
    )
  }
}