import React, { Component } from 'react'

export default class Result extends Component{
  render(){
    return (
      <tr>
      <th>{this.props.ranking}</th>
      <td>{this.props.name}</td>
      </tr>
    )
  }
}
