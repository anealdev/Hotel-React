import React, { Component } from 'react'
import DatePicker from 'react-jqueryui-datepicker'



export default class Filter extends Component{
  constructor(){
    super()
    this.state = {
      name: 'Clover',
      firstDate: '',
      secondDate: '',
      todaysDate: new Date().toLocaleDateString(),
      tomorrowsDate: ''
    }
    this.changeHandlerFirst = this.changeHandlerFirst.bind(this)
    this.changeHandlerSecond = this.changeHandlerSecond.bind(this)
    this.roomTypes = this.roomTypes.bind(this)
  }

  componentWillMount(){
    this.props.fillOptions()
  }

  changeHandlerFirst(e){
    var d = new Date(e).toLocaleDateString()
  //  var event = {type: 'select-one', name: 'firstDate', value: d}
    event.target.type = 'select-one'
    event.target.name = 'firstDate'
    event.target.value = d
    this.props.change(event)
      }

    changeHandlerSecond(e){
      var d = new Date(e).toLocaleDateString()
    //  var event = {type: 'select-one', name: 'firstDate', value: d}
      event.target.type = 'select-one'
      event.target.name = 'secondDate'
      event.target.value = d
      this.props.change(event)
        }

  roomTypes(){

    if(this.props.globalState.fillOptionsData.roomTypes != undefined){

      var { roomTypes } = this.props.globalState.fillOptionsData

      return roomTypes.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

render(){
  return(
    <section id="filter">
    <div id="filter-inside">
    <h5 id="filter-instructions">Enter dates to see available rooms</h5>
    <div className="calendar">
    <h3>Check-In</h3>
    <DatePicker className="datepicker" name="firstDate" defaultValue= {this.state.todaysDate} onChange={this.changeHandlerFirst} />
    <h3>Check-Out</h3>
    <DatePicker className="datepicker" name="secondDate" defaultValue= {this.state.tomorrowsDate} onChange={this.changeHandlerSecond} />
    </div>

    <div className="guests">
    <label htmlFor="guests">Guests</label>
    <div>
    <select name="guests" className="guests" onChange={this.props.change}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    </div>
    </div>

    <div className="room-type">
    <label htmlFor="roomType"> Room Type</label>
    <div>
    <select name="roomType" className="roomType" onChange={this.props.change}>
    <option value="all">All</option>
    {this.roomTypes()}
    </select>
    </div>
    </div>
    <div className="amenities" >
    <span className="title">
    <h3>Amenities</h3>
    </span>
    <div id="extras">
    <label htmlFor="extras">
    <div className="amenities-checkbox"><i title="Pets Allowed" className="fa fa-paw"></i> Pets Allowed <span className="checkbox"><input name="petsAllowed" value="petsAllowed" type="checkbox" onChange={this.props.change} /></span></div>
    </label>

    <label htmlFor="extras">
    <div className="amenities-checkbox"><i title="In Room Safe" className="fa fa-lock"></i> Safe Box <span className="checkbox"><input name="safeBox" value="safeBox" type="checkbox" onChange={this.props.change} /></span></div>
    </label>

    <label htmlFor="extras">
    <div className="amenities-checkbox"><i title="Private Bathroom" className="fa fa-shower"></i> Private Bathroom <span className="checkbox"><input name="privateBathroom" value="privateBathroom" type="checkbox" onChange={this.props.change} /></span></div>
    </label>
    </div>

    </div>
    </div>
    </section>
  )
}

}
