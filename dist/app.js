/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/human.ts":
/*!******************************!*\
  !*** ./src/modules/human.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

 // index.tsから読み込まれるtypescriptモジュール
// class構文でHumanクラスを作成する

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.justVariable = exports.allowFunction = exports.Human = void 0;

var Human = /*#__PURE__*/function () {
  function Human(name, age, address) {
    _classCallCheck(this, Human);

    this.name = name;
    this.age = age;
    this.address = address;
  }

  _createClass(Human, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return true;
    }
  }, {
    key: "setAge",
    value: function setAge(age) {
      this.age = age;
      return true;
    }
  }, {
    key: "setAddress",
    value: function setAddress(address) {
      this.address = address;
      return true;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAge",
    value: function getAge() {
      return this.age;
    }
  }, {
    key: "getAddress",
    value: function getAddress() {
      return this.address;
    }
  }]);

  return Human;
}();

exports.Human = Human; // ES5では利用できないアローファンクション

var allowFunction = function allowFunction(param) {
  return param;
};

exports.allowFunction = allowFunction;
var justVariable = "ただの変数";
exports.justVariable = justVariable;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
 // エントリポイントとなるindex.ts

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var human_1 = __webpack_require__(/*! ./modules/human */ "./src/modules/human.ts");

var s = "文字列";
console.log(s);
console.log(human_1.Human);
var human = new human_1.Human("test", 10, "address");
}();
/******/ })()
;