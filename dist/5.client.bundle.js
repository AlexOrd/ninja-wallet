(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../node_modules/css-loader/dist/cjs.js!./components/dashboard/Slider/Slider.css":
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/dashboard/Slider/Slider.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slick-slide {\n  margin: 0px 15px;\n}\n\n.slick-track {\n  display: flex;\n}\n\n.slick-center .rccs__card {\n  width: 400px;\n  height: 250px;\n}\n\n.slick-center .rccs {\n  width: 400px;\n  height: 250px;\n}\n", "",{"version":3,"sources":["webpack://./components/dashboard/Slider/Slider.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf","sourcesContent":[".slick-slide {\n  margin: 0px 15px;\n}\n\n.slick-track {\n  display: flex;\n}\n\n.slick-center .rccs__card {\n  width: 400px;\n  height: 250px;\n}\n\n.slick-center .rccs {\n  width: 400px;\n  height: 250px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./actions/dashboardActions.js":
/*!*************************************!*\
  !*** ./actions/dashboardActions.js ***!
  \*************************************/
/*! exports provided: getAllCards, getCardTransactions, getSummaryInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCards", function() { return getAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardTransactions", function() { return getCardTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSummaryInfo", function() { return getSummaryInfo; });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/axios */ "./config/axios.js");
/* harmony import */ var _constants_actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/actionType */ "./constants/actionType.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var getAllCards = function getAllCards() {
  return function (dispatch) {
    _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get('/api/card').then(function (_ref) {
      var data = _ref.data;
      dispatch(success(data.cards));
    })["catch"](function (err) {
      return console.log(err);
    });

    var success = function success(payload) {
      return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_1__["GET_CARDS_SUCCESS"],
        payload: payload
      };
    };
  };
};
var getCardTransactions = function getCardTransactions(cardId, quantity) {
  return function (dispatch) {
    dispatch(setLoadingStatus('transactions', true));
    _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get('/api/transactions/cardId/' + cardId).then(function (_ref2) {
      var data = _ref2.data;
      dispatch(success(data.transactions));
    })["catch"](function (err) {
      return console.log(err);
    });

    var success = function success(payload) {
      return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSACTIONS_SUCCESS"],
        payload: payload
      };
    };
  };
};
var getSummaryInfo = function getSummaryInfo() {
  return function (dispatch) {
    _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get('/api/summary').then(function (_ref3) {
      var data = _ref3.data;
      dispatch(success(data.data));
    })["catch"](function (err) {
      return console.log(err);
    });

    var success = function success(payload) {
      return {
        type: _constants_actionType__WEBPACK_IMPORTED_MODULE_1__["GET_SUMMARY_SUCCESS"],
        payload: payload
      };
    };
  };
};

var setLoadingStatus = function setLoadingStatus(entity, status) {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_1__["SET_LOADING_STATUS"],
    payload: {
      entity: entity,
      status: status
    }
  };
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getAllCards, "getAllCards", "/home/dr/Work/Temp/ninja-wallet/client/actions/dashboardActions.js");
  reactHotLoader.register(getCardTransactions, "getCardTransactions", "/home/dr/Work/Temp/ninja-wallet/client/actions/dashboardActions.js");
  reactHotLoader.register(getSummaryInfo, "getSummaryInfo", "/home/dr/Work/Temp/ninja-wallet/client/actions/dashboardActions.js");
  reactHotLoader.register(setLoadingStatus, "setLoadingStatus", "/home/dr/Work/Temp/ninja-wallet/client/actions/dashboardActions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dashboard/Dashboard.js":
/*!*******************************************!*\
  !*** ./components/dashboard/Dashboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider/Slider */ "./components/dashboard/Slider/Slider.js");
/* harmony import */ var _TransactionsList_TransactionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransactionsList/TransactionsList */ "./components/dashboard/TransactionsList/TransactionsList.js");
/* harmony import */ var _ExchangeRateBlock_ExchangeRateBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExchangeRateBlock/ExchangeRateBlock */ "./components/dashboard/ExchangeRateBlock/ExchangeRateBlock.js");
/* harmony import */ var _SummaryCards_SummaryCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SummaryCards/SummaryCards */ "./components/dashboard/SummaryCards/SummaryCards.js");
/* harmony import */ var _actions_dashboardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/dashboardActions */ "./actions/dashboardActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};










var Dashboard = function Dashboard() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      centeredCardIdx = _useState2[0],
      setCenteredCardIdx = _useState2[1];

  var cards = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (_ref) {
    var dashboard = _ref.dashboard;
    return dashboard.cards.data;
  });
  var transactions = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (_ref2) {
    var dashboard = _ref2.dashboard;
    return dashboard.transactions.data;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions_dashboardActions__WEBPACK_IMPORTED_MODULE_6__["getAllCards"])());
    dispatch(Object(_actions_dashboardActions__WEBPACK_IMPORTED_MODULE_6__["getSummaryInfo"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _cards$centeredCardId;

    var centeredCardId = cards === null || cards === void 0 ? void 0 : (_cards$centeredCardId = cards[centeredCardIdx]) === null || _cards$centeredCardId === void 0 ? void 0 : _cards$centeredCardId._id;

    if (centeredCardId) {
      dispatch(Object(_actions_dashboardActions__WEBPACK_IMPORTED_MODULE_6__["getCardTransactions"])(centeredCardId, 5));
    }
  }, [centeredCardIdx, cards]);
  var selectedCard = cards === null || cards === void 0 ? void 0 : cards[centeredCardIdx];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SummaryCards_SummaryCards__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: cards,
    setCenteredCardIdx: setCenteredCardIdx
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TransactionsList_TransactionsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: transactions,
    cards: cards,
    selectedCard: selectedCard
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExchangeRateBlock_ExchangeRateBlock__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};

__signature__(Dashboard, "useDispatch{dispatch}\nuseState{[centeredCardIdx, setCenteredCardIdx](0)}\nuseSelector{cards}\nuseSelector{transactions}\nuseEffect{}\nuseEffect{}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

var _default = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dashboard, "Dashboard", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/Dashboard.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/Dashboard.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dashboard/ExchangeRateBlock/ExchangeRateBlock.js":
/*!*********************************************************************!*\
  !*** ./components/dashboard/ExchangeRateBlock/ExchangeRateBlock.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AccountBalance */ "../node_modules/@material-ui/icons/AccountBalance.js");
/* harmony import */ var _material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var ccyFlags = {
  USD: 'https://flagpedia.net/data/flags/w1600/us.png',
  EUR: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1024px-Flag_of_Europe.svg.png',
  RUR: 'https://flagpedia.net/data/flags/w1600/ru.png',
  BTC: 'https://images-na.ssl-images-amazon.com/images/I/41270A1ZbvL._AC_SL1280_.jpg'
};
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function () {
  return {
    wrapper: {
      marginLeft: 20
    },
    title: {
      fontSize: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        fontSize: 32,
        marginRight: 10
      }
    },
    cell: {
      display: 'flex',
      alignItems: 'center',
      '& img': {
        width: 28,
        height: 17,
        marginLeft: 10
      }
    }
  };
});
var ExchangeRateBlock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(__signature__(function () {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(function (_ref) {
      var data = _ref.data;
      return setData(data);
    })["catch"](console.log);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    classes: {
      root: classes.title
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_AccountBalance__WEBPACK_IMPORTED_MODULE_3___default.a, null), "Exchange rates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableHead"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableRow"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableCell"], null, "Currency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableCell"], null, "Buy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableCell"], null, "Cell"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableBody"], null, data && data.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableRow"], {
      key: row.ccy
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableCell"], {
      classes: {
        root: classes.cell
      }
    }, row.ccy, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: ccyFlags[row.ccy],
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableCell"], null, row.buy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["TableCell"], null, row.sale));
  }))));
}, "useStyles{classes}\nuseState{[data, setData]}\nuseEffect{}", function () {
  return [useStyles];
}));
var _default = ExchangeRateBlock;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ccyFlags, "ccyFlags", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/ExchangeRateBlock/ExchangeRateBlock.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/ExchangeRateBlock/ExchangeRateBlock.js");
  reactHotLoader.register(ExchangeRateBlock, "ExchangeRateBlock", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/ExchangeRateBlock/ExchangeRateBlock.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/ExchangeRateBlock/ExchangeRateBlock.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dashboard/Slider/Slider.css":
/*!************************************************!*\
  !*** ./components/dashboard/Slider/Slider.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Slider.css */ "../node_modules/css-loader/dist/cjs.js!./components/dashboard/Slider/Slider.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js!./Slider.css */ "../node_modules/css-loader/dist/cjs.js!./components/dashboard/Slider/Slider.css",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./Slider.css */ "../node_modules/css-loader/dist/cjs.js!./components/dashboard/Slider/Slider.css");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_Slider_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./components/dashboard/Slider/Slider.js":
/*!***********************************************!*\
  !*** ./components/dashboard/Slider/Slider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "../node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_credit_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-credit-cards */ "../node_modules/react-credit-cards/es/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "../node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _SliderArrow_SliderArrow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SliderArrow/SliderArrow.js */ "./components/dashboard/SliderArrow/SliderArrow.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "../node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "../node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Slider.css */ "./components/dashboard/Slider/Slider.css");
/* harmony import */ var react_credit_cards_lib_styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-credit-cards/lib/styles.scss */ "../node_modules/react-credit-cards/lib/styles.scss");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function () {
  return {
    alertMsg: {
      color: '#721c24',
      fontSize: 18,
      lineHeight: 2.3
    },
    skeletonBlock: {
      display: 'flex',
      justifyContent: 'center'
    },
    infoBlock: {
      marginLeft: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
});
var SliderWithCards = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(__signature__(function (_ref) {
  var cards = _ref.cards,
      setCenteredCardIdx = _ref.setCenteredCardIdx;
  var classes = useStyles();
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderArrow_SliderArrow_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      next: true
    }),
    prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SliderArrow_SliderArrow_js__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    afterChange: function afterChange(idx) {
      setCenteredCardIdx(idx);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, cards && cards.length > 0 && cards.map(function (card) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: card._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_credit_cards__WEBPACK_IMPORTED_MODULE_2__["default"], {
      cvc: 212,
      expiry: '0412',
      name: 'Balance: ' + card.balance + ' ' + card.currency,
      number: card.cardNumber
    }));
  }), !cards && Array(5).fill(0).map(function (_, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_credit_cards__WEBPACK_IMPORTED_MODULE_2__["default"], {
      cvc: idx,
      expiry: idx,
      name: '',
      number: idx
    }));
  })), cards && !cards.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.skeletonBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    variant: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    variant: "circle",
    width: 40,
    height: 40,
    style: {
      margin: '7px 0'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    variant: "rect",
    width: 300,
    height: 175
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.infoBlock
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    classes: {
      root: classes.alertMsg
    }
  }, "You do not have any cards yet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
    to: "/card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "contained",
    color: "primary"
  }, "Create one")))));
}, "useStyles{classes}", function () {
  return [useStyles];
}));
var _default = SliderWithCards;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/Slider/Slider.js");
  reactHotLoader.register(SliderWithCards, "SliderWithCards", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/Slider/Slider.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/Slider/Slider.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dashboard/SliderArrow/SliderArrow.js":
/*!*********************************************************!*\
  !*** ./components/dashboard/SliderArrow/SliderArrow.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "../node_modules/@material-ui/icons/NavigateNext.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ "../node_modules/@material-ui/icons/NavigateBefore.js");
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () {
  return {
    arrowNext: {
      position: 'absolute',
      top: '50%',
      borderRadius: '50%',
      right: -45,
      minWidth: 40,
      height: 40
    },
    arrowPrev: {
      position: 'absolute',
      top: '50%',
      borderRadius: '50%',
      left: -45,
      minWidth: 40,
      height: 40
    }
  };
});

var SliderArrow = function SliderArrow(_ref) {
  var onClick = _ref.onClick,
      next = _ref.next;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClick,
    classes: {
      root: classes[next ? 'arrowNext' : 'arrowPrev']
    }
  }, next ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_1___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_2___default.a, null));
};

__signature__(SliderArrow, "useStyles{classes}", function () {
  return [useStyles];
});

var _default = SliderArrow;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SliderArrow/SliderArrow.js");
  reactHotLoader.register(SliderArrow, "SliderArrow", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SliderArrow/SliderArrow.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SliderArrow/SliderArrow.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dashboard/SummaryCard/SummaryCard.js":
/*!*********************************************************!*\
  !*** ./components/dashboard/SummaryCard/SummaryCard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "../node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "../node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
  return {
    text: {
      fontSize: 16,
      marginLeft: 10
    },
    difference: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: 16
    },
    card: {
      marginRight: 20,
      minWidth: 300,
      minHeight: 128
    },
    cardContent: {
      '&:last-child': {
        paddingBottom: 10
      }
    },
    avatar: {
      height: 56,
      width: 56
    }
  };
});

var SummaryCard = function SummaryCard(_ref) {
  var title = _ref.title,
      sum = _ref.sum,
      icon = _ref.icon,
      difference = _ref.difference,
      color = _ref.color;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    classes: {
      root: classes.card
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    classes: {
      root: classes.cardContent
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    gutterBottom: true,
    variant: "h6"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textPrimary",
    variant: "h6"
  }, sum), !!difference && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.difference
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.difference,
    style: {
      color: difference < 0 ? 'red' : 'green'
    }
  }, difference < 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_2___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_3___default.a, null), difference), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.text
  }, "since last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    style: {
      backgroundColor: color
    },
    classes: {
      root: classes.avatar
    }
  }, icon)))));
};

__signature__(SummaryCard, "useStyles{classes}", function () {
  return [useStyles];
});

var _default = SummaryCard;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SummaryCard/SummaryCard.js");
  reactHotLoader.register(SummaryCard, "SummaryCard", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SummaryCard/SummaryCard.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SummaryCard/SummaryCard.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dashboard/SummaryCards/SummaryCards.js":
/*!***********************************************************!*\
  !*** ./components/dashboard/SummaryCards/SummaryCards.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SummaryCard_SummaryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SummaryCard/SummaryCard */ "./components/dashboard/SummaryCard/SummaryCard.js");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/AttachMoney */ "../node_modules/@material-ui/icons/AttachMoney.js");
/* harmony import */ var _material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Money */ "../node_modules/@material-ui/icons/Money.js");
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/InsertChartOutlined */ "../node_modules/@material-ui/icons/InsertChartOutlined.js");
/* harmony import */ var _material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function () {
  return {
    footer: {
      marginBottom: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
});

var SummaryCards = function SummaryCards() {
  var classes = useStyles();
  var data = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (_ref) {
    var dashboard = _ref.dashboard;
    return dashboard.summaryData.data;
  });

  if (!data) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SummaryCard_SummaryCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_InsertChartOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, null),
    sum: data.transactionsCount,
    difference: data.transactionsDifference,
    title: 'Transactions',
    color: "rgb(110, 52, 235)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SummaryCard_SummaryCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_AttachMoney__WEBPACK_IMPORTED_MODULE_3___default.a, null),
    sum: data.transactionsSum,
    difference: data.transactionsSumDifference,
    title: 'Transactions sum',
    color: "rgb(68, 230, 32)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SummaryCard_SummaryCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_4___default.a, null),
    sum: data.categoriesCount,
    title: 'Categories',
    color: "rgb(52, 235, 235)"
  }));
};

__signature__(SummaryCards, "useStyles{classes}\nuseSelector{data}", function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

var _default = SummaryCards;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SummaryCards/SummaryCards.js");
  reactHotLoader.register(SummaryCards, "SummaryCards", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SummaryCards/SummaryCards.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/SummaryCards/SummaryCards.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/dashboard/TransactionsList/TransactionsList.js":
/*!*******************************************************************!*\
  !*** ./components/dashboard/TransactionsList/TransactionsList.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "../node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Wallpaper */ "../node_modules/@material-ui/icons/Wallpaper.js");
/* harmony import */ var _material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "../node_modules/@material-ui/icons/ArrowRight.js");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab */ "../node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var styles = function styles() {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    },
    root: {
      paddingTop: 0
    },
    subheader: {
      fontSize: 24,
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["cyan"][600],
      color: '#FFFFFF'
    },
    actions: {
      justifyContent: 'flex-end'
    },
    redSum: {
      color: 'red',
      fontSize: 20
    },
    card: {
      padding: 0
    },
    header: {
      fontSize: 26
    },
    alertMsg: {
      color: '#721c24',
      display: 'inline-block',
      width: '100%',
      textAlign: 'center',
      fontSize: 20
    }
  };
};

var TransactionsList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_ref) {
  var _data;

  var data = _ref.data,
      classes = _ref.classes,
      cards = _ref.cards,
      selectedCard = _ref.selectedCard;

  if (!cards || !cards.length) {
    return null;
  }

  data = (_data = data) === null || _data === void 0 ? void 0 : _data.slice(0, 5);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardHeader"], {
    classes: {
      title: classes.header
    },
    title: "Latest transactions on card \"".concat(selectedCard === null || selectedCard === void 0 ? void 0 : selectedCard.cardName, "\"")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], {
    classes: {
      root: classes.card
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], null, data && !!data.length && data.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      divider: i < data.length - 1,
      key: item._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Wallpaper__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
      primary: item.transactionType,
      secondary: 'Merchant name: ' + item.merchantName
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemSecondaryAction"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.redSum
    }, "-", item.sum)));
  }), data && !data.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    variant: "circle",
    width: 40,
    height: 40,
    style: {
      marginRight: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
    variant: "rect",
    height: 40,
    width: '100%'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    classes: {
      root: classes.alertMsg
    }
  }, "You do not have any transactions on this card")), !data && Array(3).fill(0).map(function (_, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      key: idx
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
      variant: "circle",
      width: 40,
      height: 40,
      style: {
        marginRight: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_7__["Skeleton"], {
      variant: "rect",
      height: 40,
      width: '100%'
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActions"], {
    className: classes.actions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/transactions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    size: "small",
    variant: "text"
  }, "View all ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default.a, null))))));
});
TransactionsList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

var _default = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(TransactionsList);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/TransactionsList/TransactionsList.js");
  reactHotLoader.register(TransactionsList, "TransactionsList", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/TransactionsList/TransactionsList.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/dashboard/TransactionsList/TransactionsList.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/dashboard/DashboardContainer.js":
/*!****************************************************!*\
  !*** ./containers/dashboard/DashboardContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dashboard/Dashboard */ "./components/dashboard/Dashboard.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

 // Import custom components



var DashboardContainer = /*#__PURE__*/function (_Component) {
  _inherits(DashboardContainer, _Component);

  var _super = _createSuper(DashboardContainer);

  function DashboardContainer(props) {
    _classCallCheck(this, DashboardContainer);

    return _super.call(this, props);
  }

  _createClass(DashboardContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          padding: 50
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return DashboardContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var _default = DashboardContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DashboardContainer, "DashboardContainer", "/home/dr/Work/Temp/ninja-wallet/client/containers/dashboard/DashboardContainer.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/containers/dashboard/DashboardContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TbGlkZXIvU2xpZGVyLmNzcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2Rhc2hib2FyZEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0V4Y2hhbmdlUmF0ZUJsb2NrL0V4Y2hhbmdlUmF0ZUJsb2NrLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1NsaWRlci9TbGlkZXIuY3NzPzJjYmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvU2xpZGVyL1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TbGlkZXJBcnJvdy9TbGlkZXJBcnJvdy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TdW1tYXJ5Q2FyZC9TdW1tYXJ5Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TdW1tYXJ5Q2FyZHMvU3VtbWFyeUNhcmRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL1RyYW5zYWN0aW9uc0xpc3QvVHJhbnNhY3Rpb25zTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL2Rhc2hib2FyZC9EYXNoYm9hcmRDb250YWluZXIuanMiXSwibmFtZXMiOlsiZ2V0QWxsQ2FyZHMiLCJkaXNwYXRjaCIsImF4aW9zSW5zdGFuY2UiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInN1Y2Nlc3MiLCJjYXJkcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidHlwZSIsIkdFVF9DQVJEU19TVUNDRVNTIiwiZ2V0Q2FyZFRyYW5zYWN0aW9ucyIsImNhcmRJZCIsInF1YW50aXR5Iiwic2V0TG9hZGluZ1N0YXR1cyIsInRyYW5zYWN0aW9ucyIsIkdFVF9UUkFOU0FDVElPTlNfU1VDQ0VTUyIsImdldFN1bW1hcnlJbmZvIiwiR0VUX1NVTU1BUllfU1VDQ0VTUyIsImVudGl0eSIsInN0YXR1cyIsIlNFVF9MT0FESU5HX1NUQVRVUyIsIkRhc2hib2FyZCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJjZW50ZXJlZENhcmRJZHgiLCJzZXRDZW50ZXJlZENhcmRJZHgiLCJ1c2VTZWxlY3RvciIsImRhc2hib2FyZCIsInVzZUVmZmVjdCIsImNlbnRlcmVkQ2FyZElkIiwiX2lkIiwic2VsZWN0ZWRDYXJkIiwiY2N5RmxhZ3MiLCJVU0QiLCJFVVIiLCJSVVIiLCJCVEMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwid3JhcHBlciIsIm1hcmdpbkxlZnQiLCJ0aXRsZSIsImZvbnRTaXplIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblJpZ2h0IiwiY2VsbCIsIndpZHRoIiwiaGVpZ2h0IiwiRXhjaGFuZ2VSYXRlQmxvY2siLCJSZWFjdCIsIm1lbW8iLCJjbGFzc2VzIiwic2V0RGF0YSIsImF4aW9zIiwicm9vdCIsIm1hcCIsInJvdyIsImNjeSIsImJ1eSIsInNhbGUiLCJhbGVydE1zZyIsImNvbG9yIiwibGluZUhlaWdodCIsInNrZWxldG9uQmxvY2siLCJpbmZvQmxvY2siLCJmbGV4RGlyZWN0aW9uIiwiU2xpZGVyV2l0aENhcmRzIiwic2V0dGluZ3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJNb2RlIiwiYWRhcHRpdmVIZWlnaHQiLCJ2YXJpYWJsZVdpZHRoIiwibmV4dEFycm93IiwicHJldkFycm93IiwiYWZ0ZXJDaGFuZ2UiLCJpZHgiLCJsZW5ndGgiLCJjYXJkIiwiYmFsYW5jZSIsImN1cnJlbmN5IiwiY2FyZE51bWJlciIsIkFycmF5IiwiZmlsbCIsIl8iLCJtYXJnaW4iLCJhcnJvd05leHQiLCJwb3NpdGlvbiIsInRvcCIsImJvcmRlclJhZGl1cyIsInJpZ2h0IiwibWluV2lkdGgiLCJhcnJvd1ByZXYiLCJsZWZ0IiwiU2xpZGVyQXJyb3ciLCJvbkNsaWNrIiwibmV4dCIsInRleHQiLCJkaWZmZXJlbmNlIiwibWluSGVpZ2h0IiwiY2FyZENvbnRlbnQiLCJwYWRkaW5nQm90dG9tIiwiYXZhdGFyIiwiU3VtbWFyeUNhcmQiLCJzdW0iLCJpY29uIiwiYmFja2dyb3VuZENvbG9yIiwiZm9vdGVyIiwibWFyZ2luQm90dG9tIiwiU3VtbWFyeUNhcmRzIiwic3VtbWFyeURhdGEiLCJ0cmFuc2FjdGlvbnNDb3VudCIsInRyYW5zYWN0aW9uc0RpZmZlcmVuY2UiLCJ0cmFuc2FjdGlvbnNTdW0iLCJ0cmFuc2FjdGlvbnNTdW1EaWZmZXJlbmNlIiwiY2F0ZWdvcmllc0NvdW50Iiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFyZ2luVG9wIiwicGFkZGluZ1RvcCIsInN1YmhlYWRlciIsImN5YW4iLCJhY3Rpb25zIiwicmVkU3VtIiwicGFkZGluZyIsImhlYWRlciIsInRleHRBbGlnbiIsIlRyYW5zYWN0aW9uc0xpc3QiLCJzbGljZSIsImNhcmROYW1lIiwiaXRlbSIsImkiLCJ0cmFuc2FjdGlvblR5cGUiLCJtZXJjaGFudE5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJ3aXRoU3R5bGVzIiwiRGFzaGJvYXJkQ29udGFpbmVyIiwicHJvcHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0g7QUFDN0I7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRjtBQUNBLDhCQUE4QixRQUFTLGlCQUFpQixxQkFBcUIsR0FBRyxrQkFBa0Isa0JBQWtCLEdBQUcsK0JBQStCLGlCQUFpQixrQkFBa0IsR0FBRyx5QkFBeUIsaUJBQWlCLGtCQUFrQixHQUFHLFNBQVMseUdBQXlHLFlBQVksT0FBTyxLQUFLLFVB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SyxnQkFBZ0IsQ0FBQ08sU0FBakIsR0FBNkI7QUFDM0JyRixTQUFPLEVBQUVzRixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURDO0FBRTNCNUksTUFBSSxFQUFFMEksaURBQVMsQ0FBQ0c7QUFGVyxDQUE3Qjs7ZUFLZUMsMkVBQVUsQ0FBQ3ZCLE1BQUQsQ0FBVixDQUFtQlcsZ0JBQW5CLEM7O0FBQUE7Ozs7Ozs7Ozs7MEJBL0dUWCxNOzBCQW9DQVcsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQzFETjs7QUFDQTs7SUFFTWEsa0I7Ozs7O0FBQ0osOEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7OztXQUVELGtCQUFTO0FBQ1AsMEJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRWpCLGlCQUFPLEVBQUU7QUFBWDtBQUFaLHNCQUNFLDJEQUFDLHVFQUFELE9BREYsQ0FERjtBQUtEOzs7Ozs7Ozs7OztFQVg4QmtCLCtDOztlQWNsQkYsa0I7QUFBQTs7Ozs7Ozs7OzswQkFkVEEsa0IiLCJmaWxlIjoiNS5jbGllbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpY2stc2xpZGUge1xcbiAgbWFyZ2luOiAwcHggMTVweDtcXG59XFxuXFxuLnNsaWNrLXRyYWNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zbGljay1jZW50ZXIgLnJjY3NfX2NhcmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuXFxuLnNsaWNrLWNlbnRlciAucmNjcyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9jb21wb25lbnRzL2Rhc2hib2FyZC9TbGlkZXIvU2xpZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGljay1zbGlkZSB7XFxuICBtYXJnaW46IDBweCAxNXB4O1xcbn1cXG5cXG4uc2xpY2stdHJhY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNsaWNrLWNlbnRlciAucmNjc19fY2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG4uc2xpY2stY2VudGVyIC5yY2NzIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBheGlvc0luc3RhbmNlIH0gZnJvbSAnLi4vY29uZmlnL2F4aW9zJztcbmltcG9ydCB7XG4gIEdFVF9DQVJEU19TVUNDRVNTLFxuICBHRVRfVFJBTlNBQ1RJT05TX1NVQ0NFU1MsXG4gIEdFVF9TVU1NQVJZX1NVQ0NFU1MsXG4gIFNFVF9MT0FESU5HX1NUQVRVUyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGUnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2FyZHMgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgYXhpb3NJbnN0YW5jZVxuICAgIC5nZXQoJy9hcGkvY2FyZCcpXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBkaXNwYXRjaChzdWNjZXNzKGRhdGEuY2FyZHMpKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuICBjb25zdCBzdWNjZXNzID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogR0VUX0NBUkRTX1NVQ0NFU1MsXG4gICAgcGF5bG9hZCxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFRyYW5zYWN0aW9ucyA9IChjYXJkSWQsIHF1YW50aXR5KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cygndHJhbnNhY3Rpb25zJywgdHJ1ZSkpO1xuICBheGlvc0luc3RhbmNlXG4gICAgLmdldCgnL2FwaS90cmFuc2FjdGlvbnMvY2FyZElkLycgKyBjYXJkSWQpXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBkaXNwYXRjaChzdWNjZXNzKGRhdGEudHJhbnNhY3Rpb25zKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IEdFVF9UUkFOU0FDVElPTlNfU1VDQ0VTUyxcbiAgICBwYXlsb2FkLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdW1tYXJ5SW5mbyA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBheGlvc0luc3RhbmNlXG4gICAgLmdldCgnL2FwaS9zdW1tYXJ5JylcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGRpc3BhdGNoKHN1Y2Nlc3MoZGF0YS5kYXRhKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IEdFVF9TVU1NQVJZX1NVQ0NFU1MsXG4gICAgcGF5bG9hZCxcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRMb2FkaW5nU3RhdHVzID0gKGVudGl0eSwgc3RhdHVzKSA9PiAoe1xuICB0eXBlOiBTRVRfTE9BRElOR19TVEFUVVMsXG4gIHBheWxvYWQ6IHtcbiAgICBlbnRpdHksXG4gICAgc3RhdHVzLFxuICB9LFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgU2xpZGVyV2l0aENhcmRzIGZyb20gJy4vU2xpZGVyL1NsaWRlcic7XG5pbXBvcnQgVHJhbnNhY3Rpb25zTGlzdCBmcm9tICcuL1RyYW5zYWN0aW9uc0xpc3QvVHJhbnNhY3Rpb25zTGlzdCc7XG5pbXBvcnQgRXhjaGFuZ2VSYXRlQmxvY2sgZnJvbSAnLi9FeGNoYW5nZVJhdGVCbG9jay9FeGNoYW5nZVJhdGVCbG9jayc7XG5pbXBvcnQgU3VtbWFyeUNhcmRzIGZyb20gJy4vU3VtbWFyeUNhcmRzL1N1bW1hcnlDYXJkcyc7XG5pbXBvcnQgeyBnZXRBbGxDYXJkcywgZ2V0Q2FyZFRyYW5zYWN0aW9ucywgZ2V0U3VtbWFyeUluZm8gfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rhc2hib2FyZEFjdGlvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW2NlbnRlcmVkQ2FyZElkeCwgc2V0Q2VudGVyZWRDYXJkSWR4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJkcyA9IHVzZVNlbGVjdG9yKCh7IGRhc2hib2FyZCB9KSA9PiBkYXNoYm9hcmQuY2FyZHMuZGF0YSk7XG4gIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHVzZVNlbGVjdG9yKCh7IGRhc2hib2FyZCB9KSA9PiBkYXNoYm9hcmQudHJhbnNhY3Rpb25zLmRhdGEpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0QWxsQ2FyZHMoKSk7XG4gICAgZGlzcGF0Y2goZ2V0U3VtbWFyeUluZm8oKSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNlbnRlcmVkQ2FyZElkID0gY2FyZHM/LltjZW50ZXJlZENhcmRJZHhdPy5faWQ7XG4gICAgaWYgKGNlbnRlcmVkQ2FyZElkKSB7XG4gICAgICBkaXNwYXRjaChnZXRDYXJkVHJhbnNhY3Rpb25zKGNlbnRlcmVkQ2FyZElkLCA1KSk7XG4gICAgfVxuICB9LCBbY2VudGVyZWRDYXJkSWR4LCBjYXJkc10pO1xuXG4gIGNvbnN0IHNlbGVjdGVkQ2FyZCA9IGNhcmRzPy5bY2VudGVyZWRDYXJkSWR4XTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFN1bW1hcnlDYXJkcyAvPlxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezV9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs3fT5cbiAgICAgICAgICA8U2xpZGVyV2l0aENhcmRzIGNhcmRzPXtjYXJkc30gc2V0Q2VudGVyZWRDYXJkSWR4PXtzZXRDZW50ZXJlZENhcmRJZHh9IC8+XG4gICAgICAgICAgPFRyYW5zYWN0aW9uc0xpc3QgZGF0YT17dHJhbnNhY3Rpb25zfSBjYXJkcz17Y2FyZHN9IHNlbGVjdGVkQ2FyZD17c2VsZWN0ZWRDYXJkfSAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezV9PlxuICAgICAgICAgIDxFeGNoYW5nZVJhdGVCbG9jayAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XG4iLCJpbXBvcnQge1xuICBtYWtlU3R5bGVzLFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjY291bnRCYWxhbmNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJhbGFuY2UnO1xuXG5jb25zdCBjY3lGbGFncyA9IHtcbiAgVVNEOiAnaHR0cHM6Ly9mbGFncGVkaWEubmV0L2RhdGEvZmxhZ3MvdzE2MDAvdXMucG5nJyxcbiAgRVVSOlxuICAgICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2IvYjcvRmxhZ19vZl9FdXJvcGUuc3ZnLzEwMjRweC1GbGFnX29mX0V1cm9wZS5zdmcucG5nJyxcbiAgUlVSOiAnaHR0cHM6Ly9mbGFncGVkaWEubmV0L2RhdGEvZmxhZ3MvdzE2MDAvcnUucG5nJyxcbiAgQlRDOiAnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzQxMjcwQTFaYnZMLl9BQ19TTDEyODBfLmpwZycsXG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XG4gIHdyYXBwZXI6IHtcbiAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMzIsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBmb250U2l6ZTogMzIsXG4gICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgfSxcbiAgfSxcbiAgY2VsbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAnJiBpbWcnOiB7XG4gICAgICB3aWR0aDogMjgsXG4gICAgICBoZWlnaHQ6IDE3LFxuICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgRXhjaGFuZ2VSYXRlQmxvY2sgPSBSZWFjdC5tZW1vKCgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoJ2h0dHBzOi8vYXBpLnByaXZhdGJhbmsudWEvcDI0YXBpL3B1YmluZm8/ZXhjaGFuZ2UmanNvbiZjb3Vyc2lkPTExJylcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gc2V0RGF0YShkYXRhKSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLnRpdGxlIH19PlxuICAgICAgICA8QWNjb3VudEJhbGFuY2VJY29uIC8+XG4gICAgICAgIEV4Y2hhbmdlIHJhdGVzXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VGFibGU+XG4gICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5DdXJyZW5jeTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5CdXk8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+Q2VsbDwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICBkYXRhLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5jY3l9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmNlbGwgfX0+XG4gICAgICAgICAgICAgICAgICB7cm93LmNjeX1cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjY3lGbGFnc1tyb3cuY2N5XX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuYnV5fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5zYWxlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZVJhdGVCbG9jaztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2xpZGVyLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NsaWRlci5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMsIHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XG5pbXBvcnQgQ2FyZHMgZnJvbSAncmVhY3QtY3JlZGl0LWNhcmRzJztcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYic7XG5cbmltcG9ydCBTbGlkZXJBcnJvdyBmcm9tICcuLi9TbGlkZXJBcnJvdy9TbGlkZXJBcnJvdy5qcyc7XG5cbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJztcbmltcG9ydCAnLi9TbGlkZXIuY3NzJztcbmltcG9ydCAncmVhY3QtY3JlZGl0LWNhcmRzL2xpYi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgeyBCdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcbiAgYWxlcnRNc2c6IHtcbiAgICBjb2xvcjogJyM3MjFjMjQnLFxuICAgIGZvbnRTaXplOiAxOCxcbiAgICBsaW5lSGVpZ2h0OiAyLjMsXG4gIH0sXG4gIHNrZWxldG9uQmxvY2s6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxuICBpbmZvQmxvY2s6IHtcbiAgICBtYXJnaW5MZWZ0OiAzMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxufSkpO1xuXG5jb25zdCBTbGlkZXJXaXRoQ2FyZHMgPSBSZWFjdC5tZW1vKCh7IGNhcmRzLCBzZXRDZW50ZXJlZENhcmRJZHggfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgbmV4dEFycm93OiA8U2xpZGVyQXJyb3cgbmV4dCAvPixcbiAgICBwcmV2QXJyb3c6IDxTbGlkZXJBcnJvdyAvPixcbiAgICBhZnRlckNoYW5nZTogKGlkeCkgPT4ge1xuICAgICAgc2V0Q2VudGVyZWRDYXJkSWR4KGlkeCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHtjYXJkcyAmJlxuICAgICAgICAgIGNhcmRzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICBjYXJkcy5tYXAoKGNhcmQpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtjYXJkLl9pZH0+XG4gICAgICAgICAgICAgIDxDYXJkc1xuICAgICAgICAgICAgICAgIGN2Yz17MjEyfVxuICAgICAgICAgICAgICAgIGV4cGlyeT17JzA0MTInfVxuICAgICAgICAgICAgICAgIG5hbWU9eydCYWxhbmNlOiAnICsgY2FyZC5iYWxhbmNlICsgJyAnICsgY2FyZC5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgICBudW1iZXI9e2NhcmQuY2FyZE51bWJlcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIHshY2FyZHMgJiZcbiAgICAgICAgICBBcnJheSg1KVxuICAgICAgICAgICAgLmZpbGwoMClcbiAgICAgICAgICAgIC5tYXAoKF8sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8U2tlbGV0b24ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgIDxDYXJkcyBjdmM9e2lkeH0gZXhwaXJ5PXtpZHh9IG5hbWU9eycnfSBudW1iZXI9e2lkeH0gLz5cbiAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgPC9TbGlkZXI+XG5cbiAgICAgIHtjYXJkcyAmJiAhY2FyZHMubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2tlbGV0b25CbG9ja30+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cImNpcmNsZVwiIHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gc3R5bGU9e3sgbWFyZ2luOiAnN3B4IDAnIH19IC8+XG4gICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3RcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezE3NX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvQmxvY2t9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmFsZXJ0TXNnIH19PlxuICAgICAgICAgICAgICBZb3UgZG8gbm90IGhhdmUgYW55IGNhcmRzIHlldFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2FyZFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICBDcmVhdGUgb25lXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyV2l0aENhcmRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0ZU5leHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZU5leHQnO1xuaW1wb3J0IE5hdmlnYXRlQmVmb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGVCZWZvcmUnO1xuaW1wb3J0IHsgQnV0dG9uLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XG4gIGFycm93TmV4dDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICByaWdodDogLTQ1LFxuICAgIG1pbldpZHRoOiA0MCxcbiAgICBoZWlnaHQ6IDQwLFxuICB9LFxuICBhcnJvd1ByZXY6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgbGVmdDogLTQ1LFxuICAgIG1pbldpZHRoOiA0MCxcbiAgICBoZWlnaHQ6IDQwLFxuICB9LFxufSkpO1xuXG5jb25zdCBTbGlkZXJBcnJvdyA9ICh7IG9uQ2xpY2ssIG5leHQgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzZXM9e3sgcm9vdDogY2xhc3Nlc1tuZXh0ID8gJ2Fycm93TmV4dCcgOiAnYXJyb3dQcmV2J10gfX0+XG4gICAgICB7bmV4dCA/IDxOYXZpZ2F0ZU5leHRJY29uIC8+IDogPE5hdmlnYXRlQmVmb3JlSWNvbiAvPn1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlckFycm93O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgQ2FyZENvbnRlbnQsIEdyaWQsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgQXJyb3dEb3dud2FyZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93RG93bndhcmQnO1xuaW1wb3J0IEFycm93VXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1Vwd2FyZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcbiAgdGV4dDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgfSxcbiAgZGlmZmVyZW5jZToge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6IDE2LFxuICB9LFxuICBjYXJkOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDIwLFxuICAgIG1pbldpZHRoOiAzMDAsXG4gICAgbWluSGVpZ2h0OiAxMjgsXG4gIH0sXG4gIGNhcmRDb250ZW50OiB7XG4gICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgIH0sXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIGhlaWdodDogNTYsXG4gICAgd2lkdGg6IDU2LFxuICB9LFxufSkpO1xuXG5jb25zdCBTdW1tYXJ5Q2FyZCA9ICh7IHRpdGxlLCBzdW0sIGljb24sIGRpZmZlcmVuY2UsIGNvbG9yIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmNhcmQgfX0+XG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmNhcmRDb250ZW50IH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFByaW1hcnlcIiB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAge3N1bX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIHshIWRpZmZlcmVuY2UgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaWZmZXJlbmNlfT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRpZmZlcmVuY2V9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogZGlmZmVyZW5jZSA8IDAgPyAncmVkJyA6ICdncmVlbicgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZGlmZmVyZW5jZSA8IDAgPyA8QXJyb3dEb3dud2FyZEljb24gLz4gOiA8QXJyb3dVcEljb24gLz59XG4gICAgICAgICAgICAgICAgICB7ZGlmZmVyZW5jZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PnNpbmNlIGxhc3QgbW9udGg8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICA8QXZhdGFyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IgfX0gY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmF2YXRhciB9fT5cbiAgICAgICAgICAgICAge2ljb259XG4gICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeUNhcmQ7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdW1tYXJ5Q2FyZCBmcm9tICcuLi9TdW1tYXJ5Q2FyZC9TdW1tYXJ5Q2FyZCc7XG5pbXBvcnQgQXR0YWNoTW9uZXlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BdHRhY2hNb25leSc7XG5pbXBvcnQgTW9uZXlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb25leSc7XG5pbXBvcnQgSW5zZXJ0Q2hhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbnNlcnRDaGFydE91dGxpbmVkJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIG1hcmdpbkJvdHRvbTogNDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3VtbWFyeUNhcmRzID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcigoeyBkYXNoYm9hcmQgfSkgPT4gZGFzaGJvYXJkLnN1bW1hcnlEYXRhLmRhdGEpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cbiAgICAgIDxTdW1tYXJ5Q2FyZFxuICAgICAgICBpY29uPXs8SW5zZXJ0Q2hhcnRJY29uIC8+fVxuICAgICAgICBzdW09e2RhdGEudHJhbnNhY3Rpb25zQ291bnR9XG4gICAgICAgIGRpZmZlcmVuY2U9e2RhdGEudHJhbnNhY3Rpb25zRGlmZmVyZW5jZX1cbiAgICAgICAgdGl0bGU9eydUcmFuc2FjdGlvbnMnfVxuICAgICAgICBjb2xvcj1cInJnYigxMTAsIDUyLCAyMzUpXCJcbiAgICAgIC8+XG4gICAgICA8U3VtbWFyeUNhcmRcbiAgICAgICAgaWNvbj17PEF0dGFjaE1vbmV5SWNvbiAvPn1cbiAgICAgICAgc3VtPXtkYXRhLnRyYW5zYWN0aW9uc1N1bX1cbiAgICAgICAgZGlmZmVyZW5jZT17ZGF0YS50cmFuc2FjdGlvbnNTdW1EaWZmZXJlbmNlfVxuICAgICAgICB0aXRsZT17J1RyYW5zYWN0aW9ucyBzdW0nfVxuICAgICAgICBjb2xvcj1cInJnYig2OCwgMjMwLCAzMilcIlxuICAgICAgLz5cbiAgICAgIDxTdW1tYXJ5Q2FyZFxuICAgICAgICBpY29uPXs8TW9uZXlJY29uIC8+fVxuICAgICAgICBzdW09e2RhdGEuY2F0ZWdvcmllc0NvdW50fVxuICAgICAgICB0aXRsZT17J0NhdGVnb3JpZXMnfVxuICAgICAgICBjb2xvcj1cInJnYig1MiwgMjM1LCAyMzUpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5Q2FyZHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgY3lhbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZEFjdGlvbnMsXG4gIERpdmlkZXIsXG4gIEF2YXRhcixcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1JY29uLFxuICBMaXN0SXRlbVRleHQsXG4gIExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgV2FsbHBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XYWxscGFwZXInO1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcnJvd1JpZ2h0JztcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IHN0eWxlcyA9ICgpID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgcm9vdDoge1xuICAgIHBhZGRpbmdUb3A6IDAsXG4gIH0sXG4gIHN1YmhlYWRlcjoge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGN5YW5bNjAwXSxcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gIH0sXG4gIHJlZFN1bToge1xuICAgIGNvbG9yOiAncmVkJyxcbiAgICBmb250U2l6ZTogMjAsXG4gIH0sXG4gIGNhcmQ6IHtcbiAgICBwYWRkaW5nOiAwLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBmb250U2l6ZTogMjYsXG4gIH0sXG4gIGFsZXJ0TXNnOiB7XG4gICAgY29sb3I6ICcjNzIxYzI0JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZm9udFNpemU6IDIwLFxuICB9LFxufSk7XG5cbmNvbnN0IFRyYW5zYWN0aW9uc0xpc3QgPSBSZWFjdC5tZW1vKCh7IGRhdGEsIGNsYXNzZXMsIGNhcmRzLCBzZWxlY3RlZENhcmQgfSkgPT4ge1xuICBpZiAoIWNhcmRzIHx8ICFjYXJkcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBkYXRhID0gZGF0YT8uc2xpY2UoMCwgNSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgY2xhc3Nlcz17eyB0aXRsZTogY2xhc3Nlcy5oZWFkZXIgfX1cbiAgICAgICAgICB0aXRsZT17YExhdGVzdCB0cmFuc2FjdGlvbnMgb24gY2FyZCBcIiR7c2VsZWN0ZWRDYXJkPy5jYXJkTmFtZX1cImB9XG4gICAgICAgIC8+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuY2FyZCB9fT5cbiAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICAgICEhZGF0YS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gZGl2aWRlcj17aSA8IGRhdGEubGVuZ3RoIC0gMX0ga2V5PXtpdGVtLl9pZH0+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxXYWxscGFwZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17aXRlbS50cmFuc2FjdGlvblR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17J01lcmNoYW50IG5hbWU6ICcgKyBpdGVtLm1lcmNoYW50TmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWRTdW19Pi17aXRlbS5zdW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAge2RhdGEgJiYgIWRhdGEubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cImNpcmNsZVwiIHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDE1IH19IC8+XG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3RcIiBoZWlnaHQ9ezQwfSB3aWR0aD17JzEwMCUnfSAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmFsZXJ0TXNnIH19PlxuICAgICAgICAgICAgICAgICAgWW91IGRvIG5vdCBoYXZlIGFueSB0cmFuc2FjdGlvbnMgb24gdGhpcyBjYXJkXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshZGF0YSAmJlxuICAgICAgICAgICAgICBBcnJheSgzKVxuICAgICAgICAgICAgICAgIC5maWxsKDApXG4gICAgICAgICAgICAgICAgLm1hcCgoXywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cImNpcmNsZVwiIHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDE1IH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdFwiIGhlaWdodD17NDB9IHdpZHRoPXsnMTAwJSd9IC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPENhcmRBY3Rpb25zIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8TGluayB0bz1cIi90cmFuc2FjdGlvbnNcIj5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cInRleHRcIj5cbiAgICAgICAgICAgICAgVmlldyBhbGwgPEFycm93UmlnaHRJY29uIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuVHJhbnNhY3Rpb25zTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFRyYW5zYWN0aW9uc0xpc3QpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gSW1wb3J0IGN1c3RvbSBjb21wb25lbnRzXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hib2FyZCc7XG5cbmNsYXNzIERhc2hib2FyZENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDUwIH19PlxuICAgICAgICA8RGFzaGJvYXJkIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=