import React from 'react'
import getColor from './colors';

export default class Message extends React.Component {

  render() {
    const expandStyle = {display: this.props.expended ? "none" : "block"};
    return (
      <div style={{padding: "5px 15px"}}>
        <div style={expandStyle}>
          <span style={{display: "inline-block", height: "42px",
          width: "42px", backgroundColor: getColor(this.props.user.id),
          lineHeight: "42px", borderRadius: "50%",
          textAlign: "center", color: "#FFF", marginRight: "15px"}}>
            {this.props.user.nickname[0].toUpperCase()}
          </span>
          <span style={{fontSize: "14px"}}>{this.props.user.nickname}</span>
        </div>
        <div style={{marginLeft: "57px", fontSize: "14px"}}>{this.props.message.message}</div>
      </div>
    )
  }
}
