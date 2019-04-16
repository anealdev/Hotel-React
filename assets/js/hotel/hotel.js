import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Rooms from './Rooms.js'
import Footer from './Footer.js'

import bookingsData from './data/bookingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Clover',
      bookingsData,
      filteredData: bookingsData,
      dates: "all",
      guests: '1',
      roomType: "all",
      petsAllowed: false,
      safeBox: false,
      privateBathroom: false,
      sortby: 'price-dsc',
      fillOptionsData: '',
      search: '',
      firstDate:  new Date().toLocaleDateString(),
      secondDate: '', // change back to '' after css 
      modal: false

    }
    this.change=this.change.bind(this)
    //this.changeHandler=this.changeHandler.bind(this)
    this.fillOptions = this.fillOptions.bind(this)
  }

  componentWillMount(){
      var bookingsData = this.state.bookingsData.sort((a,b) =>{
      return a.price - b.price
    })
    this.setState({
      bookingsData
    })
  }

  change(event){
    //console.log(event.target)
    var name = event.target.name
    var value = (event.target.type === "checkbox") ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    },() => {
      this.filteredData()
    })

  }


  fillOptions(){
    var roomTypes = this.state.bookingsData.map((item) => {
          return item.roomType
      })
      roomTypes = new Set(roomTypes) // a collection of items which are unique
      roomTypes = [...roomTypes] // drop in array, converts set to array
      roomTypes = roomTypes.sort()

      this.setState({
        fillOptionsData: {
          roomTypes
        }
      })
  }

filteredData(){
  var newData = this.state.bookingsData

  newData = newData.filter((item) => {

      return item.occupancy >= this.state.guests
    })


  if(this.state.roomType != "all"){
    newData = newData.filter((item) => {
      return item.roomType == this.state.roomType
    })
  }
  if(this.state.petsAllowed != false){
    newData = newData.filter((item) => {
      //console.log(item.extras)
     return item.petsAllowed == true
    })
  }

  if(this.state.safeBox != false){
    newData = newData.filter((item) => {
      //console.log(item.extras)
     return item.safeBox == true
    })
  }

  if(this.state.privateBathroom != false){
    newData = newData.filter((item) => {
      //console.log(item.extras)
     return item.privateBathroom == true
    })
  }

  if(this.state.sortby == 'price-dsc'){
    newData = newData.sort((a,b) => {
      return a.price - b.price
    })
  }

  if(this.state.sortby == 'price-asc'){
    newData = newData.sort((a,b) => {
      return b.price - a.price
    })
  }

    this.setState({
      filteredData: newData
    })
}

  render () {
    return (
      <div>
      <Header />
      <section id="content-area">

      <Filter bookingsData={this.state.bookingsData} change={this.change} globalState={this.state} fillOptions={this.fillOptions} />
      <Rooms change={this.change} globalState={this.state} bookingsData={this.state.filteredData} />
      </section>
      <Footer />
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
