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

  render() {
    return (
      <div>
        {this.state.messages.map((message) => {
          return <Message message={message} />
        })}
      </div>
    )
  }
}