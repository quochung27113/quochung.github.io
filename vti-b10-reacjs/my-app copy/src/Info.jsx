import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    console.log(this.props);
    const {fullName, age} = this.props
    return (
      <div>
        <h4> Fullname: {fullName}</h4>
        <h5>Age: {age}</h5>
      </div>
    )
  }
}
