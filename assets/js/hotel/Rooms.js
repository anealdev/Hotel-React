import React, { Component} from 'react'

export default class Rooms extends Component {
    constructor (){
      super()
      this.state = {
        name: 'Clover',
        show: false
      }
      this.loopRooms = this.loopRooms.bind(this)
      this.bookRoom = this.bookRoom.bind(this)
      this.closeModal = this.closeModal.bind(this)
  }

  amenities(room){
    var a = []
      if(room.petsAllowed == true){
        a.push(<li key={room}><i title="Pets Allowed" className="fa fa-paw"></i></li>)
      }
      if(room.privateBathroom == true){
        a.push(<li><i title="Private Bathroom" className="fa fa-shower"></i></li>)
      }
      if(room.safeBox == true){
        a.push(<li><i title="In Room Safe" className="fa fa-lock"></i></li>)
      }
      if(a.length == 0){
        return(<li className="basic-icon"><i title="Basic Room" className="fa fa-check"></i></li>)
      }

      return(a)
  }

  loopRooms(){
    var {bookingsData} = this.props

    if(bookingsData == undefined || bookingsData == 0){
      return "Sorry, no rooms for that search criteria"
    }



    return bookingsData.map((room, index) => {
      return(
      <div className="col-md-3" key={index}>
        <div className="room">
          <div className="room-img" style={{background: `url("${room.image}") no-repeat center center`}}>
          <div className="col-md-9">
          <span className="room-name"> {room.name} </span>

          <div className="room-details">
          <div className="description">{room.description}
          </div>
          <div className="book">
          <button onClick={this.bookRoom} className="book-btn">
            Book Room
            </button>
            </div>
          </div>


          </div>
          </div>
          <div className="bottom-info">
          <div className="amenities">
          <ul id="amenities-list">

          {this.amenities(room)}
          </ul>
          </div>
            <span className="price"> ${room.price} </span>
          </div>
        </div>
      </div>
    )
  }
)}
closeModal(){

    event.target.type = 'select-one'
    event.target.name = 'modal'
    event.target.value = false
    this.props.change(event)
}
bookRoom(){
  event.target.type = 'select-one'
  event.target.name = 'modal'
  event.target.value = true
  this.props.change(event)
}
render(){

  if((this.props.globalState.firstDate == '' || this.props.globalState.firstDate == 'Invalid Date')
   || (this.props.globalState.secondDate == ''  || this.props.globalState.secondDate == 'Invalid Date')){

    return(
      <section id="rooms">
      <div id="tagline">
      Efficient. Affordable. Our boutique style accomodations provide modern style at
      budget friendly prices. The Cleveland Capsule Hotel delivers an innovative experience near the
      downtown area.
      </div>
        <div id="lounge-desc">The Capsule Lounge</div>
        <div id="start"><img src='img/lounge4.jpg' alt="lounge area" />
        </div>

      </section>
        )
  }
  if(this.props.globalState.modal == true){

  return(
    <section id="rooms">

        <div id="book">
        Thanks for viewing my portfolio project. The Cleveland Capsule Hotel is not real, but a project to demonstrate the JavaScript
        libraries React and Redux. To see other projects please visit <a href="https://anealdev.github.io">anealdev.github.io</a>
        <div>
        <button onClick={this.closeModal} className="close-btn">
        Close
        </button>
        </div>
        </div>
        </section>
      )
    }else{
      return(
    <section id="rooms">
    <section className="sortby-area">
    <div className="results">{this.props.globalState.filteredData.length}
     <span> results found </span>
    </div>

    <div className="sort-options">
    <div id="sort">Sort By:</div>
      <select name="sortby" className="sortby" onChange={this.props.change}>
        <option value="price-dsc">Lowest Price First  </option><i title="sort" className="fa fa-sort"></i>
        <option value="price-asc">Highest Price First</option>
      </select>
    </div>
    </section>

    <div id="rooms-results">
      <div className="row">
        {this.loopRooms()}
      </div>
      </div>

    </section>

  )
}
}
}
