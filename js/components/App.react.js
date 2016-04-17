import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component  {
  constructor(){
    super()
    this.started = false
  }
  setPollStarted(){
    this.started = true
  }
  render(){
    return (
      !this.started ?
       <div>
         <h1> Welcome to One Punch Man character poll, Click &nbsp;
         <Link onClick={() => this.setPollStarted()} to="/battle" {...this.props}>Start</Link> to have fun </h1>
      </div>  :
       <div>
      {this.props.children}
      </div>
    )
  }
}

export default App
