webpackJsonp([0],{

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _reactJqueryuiDatepicker = __webpack_require__(668);

var _reactJqueryuiDatepicker2 = _interopRequireDefault(_reactJqueryuiDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Clover',
      firstDate: '',
      secondDate: '',
      todaysDate: new Date().toLocaleDateString(),
      tomorrowsDate: ''
    };
    _this.changeHandlerFirst = _this.changeHandlerFirst.bind(_this);
    _this.changeHandlerSecond = _this.changeHandlerSecond.bind(_this);
    _this.roomTypes = _this.roomTypes.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fillOptions();
    }
  }, {
    key: 'changeHandlerFirst',
    value: function changeHandlerFirst(e) {
      var d = new Date(e).toLocaleDateString();
      //  var event = {type: 'select-one', name: 'firstDate', value: d}
      event.target.type = 'select-one';
      event.target.name = 'firstDate';
      event.target.value = d;
      this.props.change(event);
    }
  }, {
    key: 'changeHandlerSecond',
    value: function changeHandlerSecond(e) {
      var d = new Date(e).toLocaleDateString();
      //  var event = {type: 'select-one', name: 'firstDate', value: d}
      event.target.type = 'select-one';
      event.target.name = 'secondDate';
      event.target.value = d;
      this.props.change(event);
    }
  }, {
    key: 'roomTypes',
    value: function roomTypes() {

      if (this.props.globalState.fillOptionsData.roomTypes != undefined) {
        var roomTypes = this.props.globalState.fillOptionsData.roomTypes;


        return roomTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { id: 'filter-inside' },
          _react2.default.createElement(
            'h5',
            { id: 'filter-instructions' },
            'Enter dates to see available rooms'
          ),
          _react2.default.createElement(
            'div',
            { className: 'calendar' },
            _react2.default.createElement(
              'h3',
              null,
              'Check-In'
            ),
            _react2.default.createElement(_reactJqueryuiDatepicker2.default, { className: 'datepicker', name: 'firstDate', defaultValue: this.state.todaysDate, onChange: this.changeHandlerFirst }),
            _react2.default.createElement(
              'h3',
              null,
              'Check-Out'
            ),
            _react2.default.createElement(_reactJqueryuiDatepicker2.default, { className: 'datepicker', name: 'secondDate', defaultValue: this.state.tomorrowsDate, onChange: this.changeHandlerSecond })
          ),
          _react2.default.createElement(
            'div',
            { className: 'guests' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'guests' },
              'Guests'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'select',
                { name: 'guests', className: 'guests', onChange: this.props.change },
                _react2.default.createElement(
                  'option',
                  { value: '1' },
                  '1'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '2' },
                  '2'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '3' },
                  '3'
                ),
                _react2.default.createElement(
                  'option',
                  { value: '4' },
                  '4'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'room-type' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'roomType' },
              ' Room Type'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'select',
                { name: 'roomType', className: 'roomType', onChange: this.props.change },
                _react2.default.createElement(
                  'option',
                  { value: 'all' },
                  'All'
                ),
                this.roomTypes()
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'amenities' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              _react2.default.createElement(
                'h3',
                null,
                'Amenities'
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'extras' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'extras' },
                _react2.default.createElement(
                  'div',
                  { className: 'amenities-checkbox' },
                  _react2.default.createElement('i', { title: 'Pets Allowed', className: 'fa fa-paw' }),
                  ' Pets Allowed ',
                  _react2.default.createElement(
                    'span',
                    { className: 'checkbox' },
                    _react2.default.createElement('input', { name: 'petsAllowed', value: 'petsAllowed', type: 'checkbox', onChange: this.props.change })
                  )
                )
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: 'extras' },
                _react2.default.createElement(
                  'div',
                  { className: 'amenities-checkbox' },
                  _react2.default.createElement('i', { title: 'In Room Safe', className: 'fa fa-lock' }),
                  ' Safe Box ',
                  _react2.default.createElement(
                    'span',
                    { className: 'checkbox' },
                    _react2.default.createElement('input', { name: 'safeBox', value: 'safeBox', type: 'checkbox', onChange: this.props.change })
                  )
                )
              ),
              _react2.default.createElement(
                'label',
                { htmlFor: 'extras' },
                _react2.default.createElement(
                  'div',
                  { className: 'amenities-checkbox' },
                  _react2.default.createElement('i', { title: 'Private Bathroom', className: 'fa fa-shower' }),
                  ' Private Bathroom ',
                  _react2.default.createElement(
                    'span',
                    { className: 'checkbox' },
                    _react2.default.createElement('input', { name: 'privateBathroom', value: 'privateBathroom', type: 'checkbox', onChange: this.props.change })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(69);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Clover"
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer-content' },
        _react2.default.createElement(
          'div',
          { id: 'address' },
          _react2.default.createElement(
            'div',
            { className: 'contact-info' },
            '1010 Developer Avenue'
          ),
          _react2.default.createElement(
            'div',
            { className: 'contact-info' },
            'Cleveland, Ohio 44115'
          ),
          _react2.default.createElement(
            'div',
            null,
            '1-800-NOT-REAL'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(69);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: "Clover"
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'header-content' },
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          _react2.default.createElement(
            'span',
            { className: 'logo-text' },
            'Cleveland Capsule Hotel'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rooms = function (_Component) {
  _inherits(Rooms, _Component);

  function Rooms() {
    _classCallCheck(this, Rooms);

    var _this = _possibleConstructorReturn(this, (Rooms.__proto__ || Object.getPrototypeOf(Rooms)).call(this));

    _this.state = {
      name: 'Clover',
      show: false
    };
    _this.loopRooms = _this.loopRooms.bind(_this);
    _this.bookRoom = _this.bookRoom.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(Rooms, [{
    key: 'amenities',
    value: function amenities(room) {
      var a = [];
      if (room.petsAllowed == true) {
        a.push(_react2.default.createElement(
          'li',
          { key: room },
          _react2.default.createElement('i', { title: 'Pets Allowed', className: 'fa fa-paw' })
        ));
      }
      if (room.privateBathroom == true) {
        a.push(_react2.default.createElement(
          'li',
          null,
          _react2.default.createElement('i', { title: 'Private Bathroom', className: 'fa fa-shower' })
        ));
      }
      if (room.safeBox == true) {
        a.push(_react2.default.createElement(
          'li',
          null,
          _react2.default.createElement('i', { title: 'In Room Safe', className: 'fa fa-lock' })
        ));
      }
      if (a.length == 0) {
        return _react2.default.createElement(
          'li',
          { className: 'basic-icon' },
          _react2.default.createElement('i', { title: 'Basic Room', className: 'fa fa-check' })
        );
      }

      return a;
    }
  }, {
    key: 'loopRooms',
    value: function loopRooms() {
      var _this2 = this;

      var bookingsData = this.props.bookingsData;


      if (bookingsData == undefined || bookingsData == 0) {
        return "Sorry, no rooms for that search criteria";
      }

      return bookingsData.map(function (room, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'room' },
            _react2.default.createElement(
              'div',
              { className: 'room-img', style: { background: 'url("' + room.image + '") no-repeat center center' } },
              _react2.default.createElement(
                'div',
                { className: 'col-md-9' },
                _react2.default.createElement(
                  'span',
                  { className: 'room-name' },
                  ' ',
                  room.name,
                  ' '
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'room-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'description' },
                    room.description
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'book' },
                    _react2.default.createElement(
                      'button',
                      { onClick: _this2.bookRoom, className: 'book-btn' },
                      'Book Room'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'div',
                { className: 'amenities' },
                _react2.default.createElement(
                  'ul',
                  { id: 'amenities-list' },
                  _this2.amenities(room)
                )
              ),
              _react2.default.createElement(
                'span',
                { className: 'price' },
                ' $',
                room.price,
                ' '
              )
            )
          )
        );
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {

      event.target.type = 'select-one';
      event.target.name = 'modal';
      event.target.value = false;
      this.props.change(event);
    }
  }, {
    key: 'bookRoom',
    value: function bookRoom() {
      event.target.type = 'select-one';
      event.target.name = 'modal';
      event.target.value = true;
      this.props.change(event);
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.props.globalState.firstDate == '' || this.props.globalState.firstDate == 'Invalid Date' || this.props.globalState.secondDate == '' || this.props.globalState.secondDate == 'Invalid Date') {

        return _react2.default.createElement(
          'section',
          { id: 'rooms' },
          _react2.default.createElement(
            'div',
            { id: 'tagline' },
            'Efficient. Affordable. Our boutique style accomodations provide modern style at budget friendly prices. The Cleveland Capsule Hotel delivers an innovative experience near the downtown area.'
          ),
          _react2.default.createElement(
            'div',
            { id: 'lounge-desc' },
            'The Capsule Lounge'
          ),
          _react2.default.createElement(
            'div',
            { id: 'start' },
            _react2.default.createElement('img', { src: 'img/lounge4.jpg', alt: 'lounge area' })
          )
        );
      }
      if (this.props.globalState.modal == true) {

        return _react2.default.createElement(
          'section',
          { id: 'rooms' },
          _react2.default.createElement(
            'div',
            { id: 'book' },
            'Thanks for viewing my portfolio project. The Cleveland Capsule Hotel is not real, but a project to demonstrate the JavaScript libraries React and Redux. To see other projects please visit ',
            _react2.default.createElement(
              'a',
              { href: 'https://anealdev.github.io' },
              'anealdev.github.io'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'button',
                { onClick: this.closeModal, className: 'close-btn' },
                'Close'
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'section',
          { id: 'rooms' },
          _react2.default.createElement(
            'section',
            { className: 'sortby-area' },
            _react2.default.createElement(
              'div',
              { className: 'results' },
              this.props.globalState.filteredData.length,
              _react2.default.createElement(
                'span',
                null,
                ' results found '
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'sort-options' },
              _react2.default.createElement(
                'div',
                { id: 'sort' },
                'Sort By:'
              ),
              _react2.default.createElement(
                'select',
                { name: 'sortby', className: 'sortby', onChange: this.props.change },
                _react2.default.createElement(
                  'option',
                  { value: 'price-dsc' },
                  'Lowest Price First  '
                ),
                _react2.default.createElement('i', { title: 'sort', className: 'fa fa-sort' }),
                _react2.default.createElement(
                  'option',
                  { value: 'price-asc' },
                  'Highest Price First'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'rooms-results' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              this.loopRooms()
            )
          )
        );
      }
    }
  }]);

  return Rooms;
}(_react.Component);

exports.default = Rooms;

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bookingsData = [{
  name: 'Sleeper Capsule',
  roomType: 'Basic',
  description: 'One twin bed and shared bathroom. Recommend for guests traveling alone',
  price: 60,
  image: '/img/basic_room4.jpg',
  occupancy: 1
}, {
  name: 'Bunkbed Capsule',
  roomType: 'Premium',
  description: 'Two sets of bunk beds, perfect for the kids or larger groups. ',
  petsAllowed: true,
  price: 75,
  image: '/img/multi_room.jpg',
  occupancy: 4
}, {
  name: 'Chic Capsule',
  roomType: 'Premium',
  description: 'One full bed. Includes adjustable lighting, humidifier, and aromatherapy module.',
  safeBox: true,
  price: 85,
  image: '/img/chic_room.jpg',
  occupancy: 2
}, {
  name: 'Scenic Capsule',
  roomType: 'Luxury',
  description: 'One queen bed. Room includes a smart window with a selection of virtual scenery.',
  petsAllowed: true,
  safeBox: true,
  privateBathroom: true,
  price: 100,
  image: '/img/scenic_room2.jpg',
  occupancy: 2
}, {
  name: 'Deluxe Capsule',
  roomType: 'Luxury',
  description: 'One queen bed with a desk and small dining area.',
  petsAllowed: true,
  safeBox: true,
  privateBathroom: true,
  price: 115,
  image: '/img/lux_room3.jpg',
  occupancy: 2
}];
exports.default = bookingsData;

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(69);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(360);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(358);

var _Filter2 = _interopRequireDefault(_Filter);

var _Rooms = __webpack_require__(361);

var _Rooms2 = _interopRequireDefault(_Rooms);

var _Footer = __webpack_require__(359);

var _Footer2 = _interopRequireDefault(_Footer);

var _bookingsData = __webpack_require__(362);

var _bookingsData2 = _interopRequireDefault(_bookingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Clover',
      bookingsData: _bookingsData2.default,
      filteredData: _bookingsData2.default,
      dates: "all",
      guests: '1',
      roomType: "all",
      petsAllowed: false,
      safeBox: false,
      privateBathroom: false,
      sortby: 'price-dsc',
      fillOptionsData: '',
      search: '',
      firstDate: new Date().toLocaleDateString(),
      secondDate: '', // change back to '' after css 
      modal: false

    };
    _this.change = _this.change.bind(_this);
    //this.changeHandler=this.changeHandler.bind(this)
    _this.fillOptions = _this.fillOptions.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var bookingsData = this.state.bookingsData.sort(function (a, b) {
        return a.price - b.price;
      });
      this.setState({
        bookingsData: bookingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      //console.log(event.target)
      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        _this2.filteredData();
      });
    }
  }, {
    key: 'fillOptions',
    value: function fillOptions() {
      var roomTypes = this.state.bookingsData.map(function (item) {
        return item.roomType;
      });
      roomTypes = new Set(roomTypes); // a collection of items which are unique
      roomTypes = [].concat(_toConsumableArray(roomTypes)); // drop in array, converts set to array
      roomTypes = roomTypes.sort();

      this.setState({
        fillOptionsData: {
          roomTypes: roomTypes
        }
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.bookingsData;

      newData = newData.filter(function (item) {

        return item.occupancy >= _this3.state.guests;
      });

      if (this.state.roomType != "all") {
        newData = newData.filter(function (item) {
          return item.roomType == _this3.state.roomType;
        });
      }
      if (this.state.petsAllowed != false) {
        newData = newData.filter(function (item) {
          //console.log(item.extras)
          return item.petsAllowed == true;
        });
      }

      if (this.state.safeBox != false) {
        newData = newData.filter(function (item) {
          //console.log(item.extras)
          return item.safeBox == true;
        });
      }

      if (this.state.privateBathroom != false) {
        newData = newData.filter(function (item) {
          //console.log(item.extras)
          return item.privateBathroom == true;
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { bookingsData: this.state.bookingsData, change: this.change, globalState: this.state, fillOptions: this.fillOptions }),
          _react2.default.createElement(_Rooms2.default, { change: this.change, globalState: this.state, bookingsData: this.state.filteredData })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[366]);