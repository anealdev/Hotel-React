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
      <footer className="footer-content">
      <div id="address">
      <div className="contact-info">1010 Developer Avenue</div>
      <div className="contact-info">Cleveland, Ohio 44115</div>
      <div>1-800-NOT-REAL</div>
      </div>
      </footer>
    )
  }
}
