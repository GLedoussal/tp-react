import React from 'react'
import Message from './Message'
import ws from './Socket'

import { connect } from 'react-redux'

class Messages extends React.Component {
  constructor(props) {
    super(props);
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
    const messages = this.props.notifiers.messages;
    console.log(this.props.notifiers.users);
    return (
      <div style={{position: "fixed", right: "0", top: "0", left: "0", height: "100%", overflow: "auto"}} ref={(ref) => this.container = ref}>
        <div style={{paddingBottom: "115px", paddingLeft: "256px"}}>
          {messages.map((message, key) => {
            return <Message
            message={message}
            user={this.props.notifiers.users.find((user) => user.id === message.userId)}
            expended={(key > 0 && this.props.notifiers.messages[key-1].userId === message.userId &&
              this.props.notifiers.messages[key-1].date <= (message.date - 10) )} />
          })}
        </div>
      </div>
    )
  }
}

Messages.propTypes = {
  notifiers: React.PropTypes.object
};

const mapStateToProps = (state) => ({
  notifiers: {
    messages: state.messagesReducer,
    users: state.usersReducer
  }
});

export default connect(mapStateToProps)(Messages)
