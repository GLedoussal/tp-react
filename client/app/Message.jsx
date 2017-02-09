import React from 'react'

export default class Message extends React.Component {

  render() {
  	console.log('hello');
    return (
      <div style={{borderBottom: "1px solid #ccc", padding: "15px"}}>
      	<div>idMessage: {this.props.message.id}</div>
      	<div>idUser: {this.props.message.userId}</div>
      	<div>message: {this.props.message.message}</div>
      	<div>date: {this.props.message.date}</div>
      </div>
    )
  }
}