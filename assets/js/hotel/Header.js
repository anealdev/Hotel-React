import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      name: "Clover"
    }
  }
  render(){
    return (
      <header className="header-content">
      <div className="logo">
      <span className="logo-text">Cleveland Capsule Hotel</span>
      </div>
      </header>
    )
  }
}
