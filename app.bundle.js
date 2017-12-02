/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Person = __webpack_require__(1);

var _Person2 = _interopRequireDefault(_Person);

var _Transaction = __webpack_require__(2);

var _Transaction2 = _interopRequireDefault(_Transaction);

var _Mocker = __webpack_require__(3);

var _Mocker2 = _interopRequireDefault(_Mocker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var group = new _Mocker2.default();

group.people.forEach(function (person) {
    console.log(person.name);
});

group.transactions.forEach(function (transaction) {
    return console.log(transaction);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

exports.default = Person;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Transaction
var Transaction = function Transaction(amount, purchaser, beneficiaries) {
  _classCallCheck(this, Transaction);

  this.amount = amount;
  this.purchaser = purchaser;
  this.beneficiaries = beneficiaries;
};

exports.default = Transaction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // This class mocks data returned from a database


var _Person = __webpack_require__(1);

var _Person2 = _interopRequireDefault(_Person);

var _Transaction = __webpack_require__(2);

var _Transaction2 = _interopRequireDefault(_Transaction);

var _Utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mocker = function () {
  function Mocker() {
    _classCallCheck(this, Mocker);

    this.people = this.mockPeople();
    this.transactions = this.mockTransactions();
  }

  _createClass(Mocker, [{
    key: 'mockPeople',
    value: function mockPeople() {
      var people = ["rebecca", "rachel", "kevin", "billy"];

      return people.map(function (name) {
        return new _Person2.default(name);
      });
    }
  }, {
    key: 'listPeople',
    value: function listPeople() {
      console.log(this.people);
    }
  }, {
    key: 'mockTransactions',
    value: function mockTransactions() {
      var people = ["rebecca", "rachel", "kevin", "billy"];
      var mockTransactions = [];
      mockTransactions.push([12.50, (0, _Utils.randomValueFromArray)(people), [(0, _Utils.randomValueFromArray)(people), (0, _Utils.randomValueFromArray)(people), (0, _Utils.randomValueFromArray)(people)]], [100.00, (0, _Utils.randomValueFromArray)(people), [(0, _Utils.randomValueFromArray)(people), (0, _Utils.randomValueFromArray)(people)]], [20.99, (0, _Utils.randomValueFromArray)(people), [(0, _Utils.randomValueFromArray)(people), (0, _Utils.randomValueFromArray)(people), (0, _Utils.randomValueFromArray)(people), (0, _Utils.randomValueFromArray)(people)]]);
      return mockTransactions.map(function (transaction) {
        return new _Transaction2.default(transaction);
      });
    }
  }]);

  return Mocker;
}();

exports.default = Mocker;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomValueFromArray = randomValueFromArray;
// Utility functions

function randomValueFromArray(myArray) {

    return myArray[Math.floor(Math.random() * myArray.length)];
}

/***/ })
/******/ ]);