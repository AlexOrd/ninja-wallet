(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./API/settings/common.js":
/*!********************************!*\
  !*** ./API/settings/common.js ***!
  \********************************/
/*! exports provided: commonSettingsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonSettingsAPI", function() { return commonSettingsAPI; });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var commonSettingsAPI = {
  getAccountSettings: function getAccountSettings() {
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get('/api/settings');
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(commonSettingsAPI, "commonSettingsAPI", "/home/dr/Work/Temp/ninja-wallet/client/API/settings/common.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./API/settings/index.js":
/*!*******************************!*\
  !*** ./API/settings/index.js ***!
  \*******************************/
/*! exports provided: commonSettingsAPI, securitySettingsAPI, userEmailAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./API/settings/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonSettingsAPI", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["commonSettingsAPI"]; });

/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security */ "./API/settings/security.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "securitySettingsAPI", function() { return _security__WEBPACK_IMPORTED_MODULE_1__["securitySettingsAPI"]; });

/* harmony import */ var _user_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_email */ "./API/settings/user_email.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userEmailAPI", function() { return _user_email__WEBPACK_IMPORTED_MODULE_2__["userEmailAPI"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





/***/ }),

/***/ "./API/settings/security.js":
/*!**********************************!*\
  !*** ./API/settings/security.js ***!
  \**********************************/
/*! exports provided: securitySettingsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "securitySettingsAPI", function() { return securitySettingsAPI; });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/axios */ "./config/axios.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var securitySettingsAPI = {
  getAccountSettings: function getAccountSettings() {
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get('/api/settings');
  },
  updateSecuritySettings: function updateSecuritySettings(option, value) {
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].patch('/api/settings/security', {
      option: option,
      value: value
    });
  },
  getVerificationCodeForBot: function getVerificationCodeForBot() {
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].get('/api/settings/security/bot/get-verification-code');
  },
  disconnectTelegramBot: function disconnectTelegramBot() {
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"]["delete"]('/api/settings/security/bot/disconnect');
  },
  changePassword: function changePassword(oldPassword, newPassword, confirmPassword) {
    return _config_axios__WEBPACK_IMPORTED_MODULE_0__["axiosInstance"].patch('/api/settings/security/change-password', {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    });
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(securitySettingsAPI, "securitySettingsAPI", "/home/dr/Work/Temp/ninja-wallet/client/API/settings/security.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./actions/settings/user_email.js":
/*!****************************************!*\
  !*** ./actions/settings/user_email.js ***!
  \****************************************/
/*! exports provided: verificationEmail, resendVerifyEmailCode, sendVerifyEmailCode, changeEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verificationEmail", function() { return verificationEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resendVerifyEmailCode", function() { return resendVerifyEmailCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendVerifyEmailCode", function() { return sendVerifyEmailCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEmail", function() { return changeEmail; });
/* harmony import */ var _API_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../API/settings */ "./API/settings/index.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _utils_settings_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/settings/names */ "./utils/settings/names.js");
/* harmony import */ var _types_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/auth */ "./actions/types/auth.js");
/* harmony import */ var _types_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/settings */ "./actions/types/settings.js");
/* harmony import */ var _fetch_statuses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fetch_statuses */ "./actions/fetch_statuses.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var LOADING = _utils_auth_constants__WEBPACK_IMPORTED_MODULE_1__["commonFetchStatuses"].LOADING,
    SUCCEEDED = _utils_auth_constants__WEBPACK_IMPORTED_MODULE_1__["commonFetchStatuses"].SUCCEEDED,
    FAILED = _utils_auth_constants__WEBPACK_IMPORTED_MODULE_1__["commonFetchStatuses"].FAILED,
    IDLE = _utils_auth_constants__WEBPACK_IMPORTED_MODULE_1__["commonFetchStatuses"].IDLE;
var VERIFY_EMAIL = _utils_settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].VERIFY_EMAIL,
    RESEND_VERIFY_EMAIL_CODE = _utils_settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].RESEND_VERIFY_EMAIL_CODE,
    SEND_VERIFY_EMAIL_CODE = _utils_settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].SEND_VERIFY_EMAIL_CODE,
    CHANGE_EMAIL = _utils_settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].CHANGE_EMAIL;
var verificationEmail = function verificationEmail(confirmCode) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var setFetchStatus, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetchStatus = Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["fetchStatusCreator"])('settings')(VERIFY_EMAIL, dispatch);
              _context.prev = 1;
              setFetchStatus(LOADING);
              _context.next = 5;
              return _API_settings__WEBPACK_IMPORTED_MODULE_0__["userEmailAPI"].verificationEmail(confirmCode);

            case 5:
              dispatch({
                type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["EMAIL_VERIFICATION"],
                payload: {
                  isVerification: true
                }
              });
              Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setPrivateFetchStatus"])('authorization')(VERIFY_EMAIL, dispatch)(SUCCEEDED);
              setFetchStatus(SUCCEEDED);
              Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(null, dispatch);
              _context.next = 18;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              response = _context.t0.response;
              setFetchStatus(FAILED);
              dispatch({
                type: _types_auth__WEBPACK_IMPORTED_MODULE_3__["EMAIL_VERIFICATION"],
                payload: false
              });
              Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setPrivateFetchStatus"])('authorization')(VERIFY_EMAIL, dispatch)(FAILED);
              Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(response, dispatch);

            case 18:
              _context.prev = 18;
              Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setPrivateFetchStatus"])('authorization')(VERIFY_EMAIL, dispatch)(IDLE);
              setFetchStatus(IDLE);
              return _context.finish(18);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11, 18, 22]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var resendVerifyEmailCode = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
    var setFetchStatus, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            setFetchStatus = Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["fetchStatusCreator"])('settings')(RESEND_VERIFY_EMAIL_CODE, dispatch);
            _context2.prev = 1;
            setFetchStatus(LOADING);
            _context2.next = 5;
            return _API_settings__WEBPACK_IMPORTED_MODULE_0__["userEmailAPI"].sendVerifyEmailCode();

          case 5:
            Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setPrivateFetchStatus"])('authorization')(RESEND_VERIFY_EMAIL_CODE, dispatch)(SUCCEEDED);
            setFetchStatus(SUCCEEDED);
            Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(null, dispatch);
            _context2.next = 16;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            response = _context2.t0.response;
            setFetchStatus(FAILED);
            Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setPrivateFetchStatus"])('authorization')(RESEND_VERIFY_EMAIL_CODE, dispatch)(FAILED);
            Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(response, dispatch);

          case 16:
            _context2.prev = 16;
            setFetchStatus(IDLE);
            Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setPrivateFetchStatus"])('authorization')(RESEND_VERIFY_EMAIL_CODE, dispatch)(IDLE);
            return _context2.finish(16);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10, 16, 20]]);
  }));

  return function resendVerifyEmailCode(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var sendVerifyEmailCode = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
    var setFetchStatus, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setFetchStatus = Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["fetchStatusCreator"])('settings')(SEND_VERIFY_EMAIL_CODE, dispatch);
            _context3.prev = 1;
            setFetchStatus(LOADING);
            _context3.next = 5;
            return _API_settings__WEBPACK_IMPORTED_MODULE_0__["userEmailAPI"].sendVerifyEmailCode();

          case 5:
            setFetchStatus(SUCCEEDED);
            Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(null, dispatch);
            _context3.next = 14;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            response = _context3.t0.response;
            setFetchStatus(FAILED);
            Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(response, dispatch);

          case 14:
            _context3.prev = 14;
            setFetchStatus(IDLE);
            return _context3.finish(14);

          case 17:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9, 14, 17]]);
  }));

  return function sendVerifyEmailCode(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
var changeEmail = function changeEmail(newEmail) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch) {
      var setFetchStatus, response, _response;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setFetchStatus = Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["fetchStatusCreator"])('settings')(CHANGE_EMAIL, dispatch);
              _context4.prev = 1;
              setFetchStatus(LOADING);
              _context4.next = 5;
              return _API_settings__WEBPACK_IMPORTED_MODULE_0__["userEmailAPI"].changeEmail(newEmail);

            case 5:
              response = _context4.sent;
              dispatch({
                type: _types_settings__WEBPACK_IMPORTED_MODULE_4__["UPDATE_SECURITY_SETTINGS"],
                payload: {
                  option: 'userEmail',
                  value: response.data.newEmail
                }
              });
              setFetchStatus(SUCCEEDED);
              Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(null, dispatch);
              _context4.next = 16;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](1);
              _response = _context4.t0.response;
              setFetchStatus(FAILED);
              Object(_fetch_statuses__WEBPACK_IMPORTED_MODULE_5__["setFetchError"])(_response, dispatch);

            case 16:
              _context4.prev = 16;
              setFetchStatus(IDLE);
              return _context4.finish(16);

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 11, 16, 19]]);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LOADING, "LOADING", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(SUCCEEDED, "SUCCEEDED", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(FAILED, "FAILED", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(IDLE, "IDLE", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(VERIFY_EMAIL, "VERIFY_EMAIL", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(RESEND_VERIFY_EMAIL_CODE, "RESEND_VERIFY_EMAIL_CODE", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(SEND_VERIFY_EMAIL_CODE, "SEND_VERIFY_EMAIL_CODE", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(CHANGE_EMAIL, "CHANGE_EMAIL", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(verificationEmail, "verificationEmail", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(resendVerifyEmailCode, "resendVerifyEmailCode", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(sendVerifyEmailCode, "sendVerifyEmailCode", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
  reactHotLoader.register(changeEmail, "changeEmail", "/home/dr/Work/Temp/ninja-wallet/client/actions/settings/user_email.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/fetch_status_snackbars/FetchStatusSnackBars.js":
/*!**************************************************************************!*\
  !*** ./components/common/fetch_status_snackbars/FetchStatusSnackBars.js ***!
  \**************************************************************************/
/*! exports provided: FetchStatusSnackBars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchStatusSnackBars", function() { return FetchStatusSnackBars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./components/common/fetch_status_snackbars/components/index.js");
/* harmony import */ var _selectors_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../selectors/common */ "./selectors/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





function FetchStatusSnackBars(_ref) {
  var reducerName = _ref.reducerName;
  var fetchError = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_selectors_common__WEBPACK_IMPORTED_MODULE_3__["getFetchError"]);
  var fetchStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_selectors_common__WEBPACK_IMPORTED_MODULE_3__["getCommonFetchStatus"]);
  var allFetchStatuses = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_selectors_common__WEBPACK_IMPORTED_MODULE_3__["getAllPrivateFetchStatuses"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["SuccessSnackbar"], {
    allFetchStatuses: allFetchStatuses,
    reducerName: reducerName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["LoadingSnackbar"], {
    fetchStatus: fetchStatus
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ErrorSnackbar"], {
    fetchError: fetchError
  }));
}

__signature__(FetchStatusSnackBars, "useSelector{fetchError}\nuseSelector{fetchStatus}\nuseSelector{allFetchStatuses}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FetchStatusSnackBars, "FetchStatusSnackBars", "/home/dr/Work/Temp/ninja-wallet/client/components/common/fetch_status_snackbars/FetchStatusSnackBars.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/fetch_status_snackbars/components/ErrorSnackbar.js":
/*!******************************************************************************!*\
  !*** ./components/common/fetch_status_snackbars/components/ErrorSnackbar.js ***!
  \******************************************************************************/
/*! exports provided: ErrorSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorSnackbar", function() { return ErrorSnackbar; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetch_statuses_error_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/fetch_statuses/error_messages */ "./utils/fetch_statuses/error_messages.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "../node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab */ "../node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _actions_fetch_statuses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../actions/fetch_statuses */ "./actions/fetch_statuses.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









function ErrorSnackbar(_ref) {
  var fetchError = _ref.fetchError;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  if (!fetchError) return null;

  var _errorMessages$getMes = _utils_fetch_statuses_error_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessages"].getMessages(fetchError),
      message = _errorMessages$getMes.message;

  var closeErrorHandler = function closeErrorHandler() {
    Object(_actions_fetch_statuses__WEBPACK_IMPORTED_MODULE_7__["setFetchError"])(null, dispatch);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Snackbar"], {
    onClose: closeErrorHandler,
    autoHideDuration: _utils_auth_constants__WEBPACK_IMPORTED_MODULE_6__["delays"].BEFORE_HIDE_ERROR_SNACKBAR,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: 'open'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
    severity: "error",
    onClose: closeErrorHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["AlertTitle"], null, "Error"), message));
}

__signature__(ErrorSnackbar, "useDispatch{dispatch}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorSnackbar, "ErrorSnackbar", "/home/dr/Work/Temp/ninja-wallet/client/components/common/fetch_status_snackbars/components/ErrorSnackbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/fetch_status_snackbars/components/LoadingSnackbar.js":
/*!********************************************************************************!*\
  !*** ./components/common/fetch_status_snackbars/components/LoadingSnackbar.js ***!
  \********************************************************************************/
/*! exports provided: LoadingSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSnackbar", function() { return LoadingSnackbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "../node_modules/@material-ui/lab/esm/Alert/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





function LoadingSnackbar(_ref) {
  var fetchStatus = _ref.fetchStatus;
  var styles = useStyles();

  var LoadingMessage = function LoadingMessage() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: styles.loadingMessageWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
      className: styles.loadingCircle,
      size: "25px"
    }), "Loading...");
  };

  var isLoading = fetchStatus === _utils_auth_constants__WEBPACK_IMPORTED_MODULE_2__["commonFetchStatuses"].LOADING;
  if (!isLoading) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    className: styles.snackBar,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: 'open'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], {
    severity: "info",
    icon: false,
    classes: {
      root: styles.alert
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingMessage, null)));
}

__signature__(LoadingSnackbar, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return {
      loadingMessageWrapper: {
        display: 'flex',
        alignItems: 'center'
      },
      loadingCircle: {
        marginRight: '15px'
      },
      snackBar: {},
      alert: {
        backgroundColor: '#64b5f6',
        width: '180px',
        color: '#424242',
        fontSize: '15px'
      }
    };
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadingSnackbar, "LoadingSnackbar", "/home/dr/Work/Temp/ninja-wallet/client/components/common/fetch_status_snackbars/components/LoadingSnackbar.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/common/fetch_status_snackbars/components/LoadingSnackbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/fetch_status_snackbars/components/SuccessSnackbar.js":
/*!********************************************************************************!*\
  !*** ./components/common/fetch_status_snackbars/components/SuccessSnackbar.js ***!
  \********************************************************************************/
/*! exports provided: SuccessSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessSnackbar", function() { return SuccessSnackbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab */ "../node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _utils_fetch_statuses_success_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/fetch_statuses/success_message */ "./utils/fetch_statuses/success_message.js");
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






function SuccessSnackbar(_ref) {
  var allFetchStatuses = _ref.allFetchStatuses,
      reducerName = _ref.reducerName;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      snowMessage = _React$useState2[0],
      setShowMessage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      message = _React$useState4[0],
      setMessage = _React$useState4[1];

  var closeMessageHandler = function closeMessageHandler() {
    return setShowMessage(false);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var messageText = _utils_fetch_statuses_success_message__WEBPACK_IMPORTED_MODULE_4__["successMessages"].getSuccessMessage(allFetchStatuses, reducerName);

    if (messageText) {
      setMessage(messageText);
      setShowMessage(true);
    }
  }, [allFetchStatuses]);
  if (!message || !snowMessage) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    onClose: closeMessageHandler,
    autoHideDuration: _utils_auth_constants__WEBPACK_IMPORTED_MODULE_3__["delays"].BEFORE_HIDE_SUCCESS_SNACKBAR,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    open: 'open'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    severity: "success"
  }, message));
}

__signature__(SuccessSnackbar, "useState{[snowMessage, setShowMessage](true)}\nuseState{[message, setMessage]('')}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SuccessSnackbar, "SuccessSnackbar", "/home/dr/Work/Temp/ninja-wallet/client/components/common/fetch_status_snackbars/components/SuccessSnackbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/common/fetch_status_snackbars/components/index.js":
/*!**********************************************************************!*\
  !*** ./components/common/fetch_status_snackbars/components/index.js ***!
  \**********************************************************************/
/*! exports provided: LoadingSnackbar, ErrorSnackbar, SuccessSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingSnackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSnackbar */ "./components/common/fetch_status_snackbars/components/LoadingSnackbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSnackbar", function() { return _LoadingSnackbar__WEBPACK_IMPORTED_MODULE_0__["LoadingSnackbar"]; });

/* harmony import */ var _ErrorSnackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorSnackbar */ "./components/common/fetch_status_snackbars/components/ErrorSnackbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorSnackbar", function() { return _ErrorSnackbar__WEBPACK_IMPORTED_MODULE_1__["ErrorSnackbar"]; });

/* harmony import */ var _SuccessSnackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SuccessSnackbar */ "./components/common/fetch_status_snackbars/components/SuccessSnackbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessSnackbar", function() { return _SuccessSnackbar__WEBPACK_IMPORTED_MODULE_2__["SuccessSnackbar"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





/***/ }),

/***/ "./containers/Authorization/components/common/AuthButton.js":
/*!******************************************************************!*\
  !*** ./containers/Authorization/components/common/AuthButton.js ***!
  \******************************************************************/
/*! exports provided: AuthButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthButton", function() { return AuthButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../selectors/common */ "./selectors/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






function AuthButton(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Submit' : _ref$text,
      rest = _objectWithoutProperties(_ref, ["text"]);

  var fetchStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_selectors_common__WEBPACK_IMPORTED_MODULE_4__["getCommonFetchStatus"]);
  var isLoading = fetchStatus === _utils_auth_constants__WEBPACK_IMPORTED_MODULE_2__["commonFetchStatuses"].LOADING;
  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
    classes: {
      root: styles.root
    },
    disabled: isLoading,
    type: "submit"
  }, rest), text);
}

__signature__(AuthButton, "useSelector{fetchStatus}\nuseStyles{styles}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return {
      root: _defineProperty({
        // backgroundColor: '#bbdefb',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        boxShadow: '0 0 5px #bbdefb'
      }, '&:hover', {
        backgroundColor: '#1A237E',
        boxShadow: '0 0 6px gray'
      })
    };
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthButton, "AuthButton", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/AuthButton.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/AuthButton.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/AuthForm.js":
/*!****************************************************************!*\
  !*** ./containers/Authorization/components/common/AuthForm.js ***!
  \****************************************************************/
/*! exports provided: AuthForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthForm", function() { return AuthForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




function AuthForm(_ref) {
  var initialValues = _ref.initialValues,
      validate = _ref.validate,
      children = _ref.children,
      submitHandler = _ref.submitHandler,
      rest = _objectWithoutProperties(_ref, ["initialValues", "validate", "children", "submitHandler"]);

  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: initialValues,
    validate: validate,
    onSubmit: function onSubmit(values) {
      submitHandler(values);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
    className: styles.form
  }, rest), children));
}

__signature__(AuthForm, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
    form: {
      display: 'flex',
      width: '350px',
      flexDirection: 'column'
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthForm, "AuthForm", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/AuthForm.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/AuthForm.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/AuthInput.js":
/*!*****************************************************************!*\
  !*** ./containers/Authorization/components/common/AuthInput.js ***!
  \*****************************************************************/
/*! exports provided: AuthInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInput", function() { return AuthInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "../node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "../node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../selectors/common */ "./selectors/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var AuthInput = function AuthInput(props) {
  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var touched = meta.touched,
      error = meta.error;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isVisiblePassword = _React$useState2[0],
      setPasswordVisibility = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isFieldUsed = _React$useState4[0],
      setFieldUsedStatus = _React$useState4[1];

  var fetchStatus = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(_selectors_common__WEBPACK_IMPORTED_MODULE_7__["getCommonFetchStatus"]);

  var handleVisibilitySwitcher = function handleVisibilitySwitcher() {
    return setPasswordVisibility(!isVisiblePassword);
  };

  var isLoading = fetchStatus === _utils_auth_constants__WEBPACK_IMPORTED_MODULE_5__["commonFetchStatuses"].LOADING;

  if (!isFieldUsed && field.value) {
    setFieldUsedStatus(true);
  }

  var isVisibleError = Boolean(touched && error);
  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: error,
    placement: "right",
    arrow: true,
    open: isVisibleError
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: styles.inputWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], _extends({
    error: isVisibleError,
    disabled: isLoading,
    className: styles.textField,
    variant: "outlined"
  }, field, props, {
    type: isVisiblePassword ? 'text' : props.type
  })), props.type === 'password' && isFieldUsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    disabled: isLoading,
    onClick: handleVisibilitySwitcher,
    className: styles.visibleSwitcher
  }, isVisiblePassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fontSize: "small"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fontSize: "small"
  }))));
};

__signature__(AuthInput, "useField{[field, meta]}\nuseState{[isVisiblePassword, setPasswordVisibility](false)}\nuseState{[isFieldUsed, setFieldUsedStatus](false)}\nuseSelector{fetchStatus}\nuseStyles{styles}", function () {
  return [formik__WEBPACK_IMPORTED_MODULE_1__["useField"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
    form: {
      display: 'flex',
      width: '350px',
      flexDirection: 'column'
    },
    textField: {
      marginBottom: '15px',
      width: '100%'
    },
    inputWrapper: {
      width: '100%',
      display: 'flex',
      position: 'relative'
    },
    visibleSwitcher: {
      position: 'absolute',
      right: '10px',
      top: '18px',
      border: 'none',
      margin: 0,
      padding: 0,
      cursor: 'pointer',
      outline: 'none',
      backgroundColor: 'transparent',
      color: '#bdbdbd',
      transition: 'all .6s linear',
      '&:hover': {
        color: '#616161'
      }
    },
    icon: {
      position: 'absolute',
      left: '10px',
      top: '18px',
      border: 'none',
      margin: 0,
      padding: 0
    },
    test: {
      backgroundColor: 'red'
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthInput, "AuthInput", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/AuthInput.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/AuthInput.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/DescriptionIcon.js":
/*!***********************************************************************!*\
  !*** ./containers/Authorization/components/common/DescriptionIcon.js ***!
  \***********************************************************************/
/*! exports provided: DescriptionIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionIcon", function() { return DescriptionIcon; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



function DescriptionIcon(_ref) {
  var Icon = _ref.Icon,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 60 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 60 : _ref$height,
      rest = _objectWithoutProperties(_ref, ["Icon", "width", "height"]);

  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styles.iconWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, _extends({
    width: "".concat(width, "px"),
    height: "".concat(height, "px")
  }, rest)));
}

__signature__(DescriptionIcon, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
    iconWrapper: {
      padding: '40px',
      display: 'block',
      backgroundColor: '#b2dfdb',
      borderRadius: '50%',
      marginBottom: '15px',
      position: 'relative',
      boxSizing: 'border-box'
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DescriptionIcon, "DescriptionIcon", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/DescriptionIcon.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/DescriptionIcon.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/Done.js":
/*!************************************************************!*\
  !*** ./containers/Authorization/components/common/Done.js ***!
  \************************************************************/
/*! exports provided: Done */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Done", function() { return Done; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./containers/Authorization/icons/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_auth_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/auth/tools */ "./utils/auth/tools.js");
/* harmony import */ var _actions_auth_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../actions/auth/common */ "./actions/auth/common.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








function Done(_ref) {
  var _ref$linkText = _ref.linkText,
      linkText = _ref$linkText === void 0 ? 'To app' : _ref$linkText;
  var styles = useStyles();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    dispatch(Object(_actions_auth_common__WEBPACK_IMPORTED_MODULE_6__["setAuthStatus"])(true));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.box
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["Success"], {
    fill: "#4caf50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.iconWrapper
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: styles.link,
    to: "/dashboard"
  }, linkText));
}

__signature__(Done, "useStyles{styles}\nuseDispatch{dispatch}\nuseState{(() => {\n    dispatch(setAuthStatus(true));\n  })}", function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return {
      box: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      link: {
        fontSize: '28px',
        color: '#90caf9',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline'
        }
      },
      iconWrapper: {
        marginBottom: '25px',
        backgroundColor: 'red'
      }
    };
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Done, "Done", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/Done.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/Done.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/UserEmail.js":
/*!*****************************************************************!*\
  !*** ./containers/Authorization/components/common/UserEmail.js ***!
  \*****************************************************************/
/*! exports provided: UserEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEmail", function() { return UserEmail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthForm */ "./containers/Authorization/components/common/AuthForm.js");
/* harmony import */ var _AuthInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthInput */ "./containers/Authorization/components/common/AuthInput.js");
/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthButton */ "./containers/Authorization/components/common/AuthButton.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var UserEmail = function UserEmail(_ref) {
  var submitHandler = _ref.submitHandler,
      validate = _ref.validate,
      title = _ref.title,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'your email' : _ref$placeholder;
  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: styles.box
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    className: styles.title,
    variant: "h2"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthForm__WEBPACK_IMPORTED_MODULE_1__["AuthForm"], {
    submitHandler: submitHandler,
    validate: validate,
    initialValues: {
      email: ''
    },
    autoFocus: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthInput__WEBPACK_IMPORTED_MODULE_2__["AuthInput"], {
    name: "email",
    placeholder: placeholder
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthButton__WEBPACK_IMPORTED_MODULE_3__["AuthButton"], {
    text: "send"
  })));
};

__signature__(UserEmail, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
    box: {
      width: '300px',
      padding: '35px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px'
    },
    title: {
      marginBottom: '15px',
      fontSize: '40px'
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UserEmail, "UserEmail", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/UserEmail.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/UserEmail.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/WarnSnackbar.js":
/*!********************************************************************!*\
  !*** ./containers/Authorization/components/common/WarnSnackbar.js ***!
  \********************************************************************/
/*! exports provided: WarnSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarnSnackbar", function() { return WarnSnackbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Alert */ "../node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "../node_modules/@material-ui/lab/esm/index.js");
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





function WarnSnackbar(_ref) {
  var text = _ref.text;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showWarn = _React$useState2[0],
      setShowWarn = _React$useState2[1];

  if (!showWarn) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    onClose: function onClose() {
      return setShowWarn(false);
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    autoHideDuration: 10000,
    open: 'open'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    severity: "warning",
    onClose: function onClose() {
      return setShowWarn(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["AlertTitle"], null, "Warning"), text));
}

__signature__(WarnSnackbar, "useState{[showWarn, setShowWarn](true)}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WarnSnackbar, "WarnSnackbar", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/WarnSnackbar.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/auth_stepper/AuthStepper.js":
/*!********************************************************************************!*\
  !*** ./containers/Authorization/components/common/auth_stepper/AuthStepper.js ***!
  \********************************************************************************/
/*! exports provided: AuthStepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStepper", function() { return AuthStepper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./containers/Authorization/components/common/auth_stepper/components/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var AuthStepper = function AuthStepper(_ref) {
  var steps = _ref.steps,
      activeStep = _ref.activeStep,
      icons = _ref.icons;
  var styles = useStyles();

  function ColorlibStepIcon(props) {
    var _clsx;

    var active = props.active,
        completed = props.completed;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(styles.root, (_clsx = {}, _defineProperty(_clsx, styles.active, active), _defineProperty(_clsx, styles.completed, completed), _clsx))
    }, icons[String(props.icon)]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Stepper"], {
    classes: {
      root: styles.stepperRoot
    },
    className: styles.stepper,
    alternativeLabel: true,
    activeStep: activeStep,
    connector: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["ColorlibConnector"], null)
  }, steps.map(function (label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Step"], {
      key: label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["StepLabel"], {
      StepIconComponent: ColorlibStepIcon
    })));
  }));
};

__signature__(AuthStepper, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () {
    return {
      root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      active: {
        backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
      },
      completed: {
        backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
      },
      stepper: {
        position: 'absolute',
        bottom: '140px',
        left: '50%',
        width: '80%',
        transform: 'translateX(-50%)'
      },
      stepperRoot: {
        height: '50px',
        padding: 0,
        backgroundColor: 'transparent'
      }
    };
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthStepper, "AuthStepper", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/auth_stepper/AuthStepper.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/auth_stepper/AuthStepper.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/auth_stepper/components/ColorlibConnector.js":
/*!*************************************************************************************************!*\
  !*** ./containers/Authorization/components/common/auth_stepper/components/ColorlibConnector.js ***!
  \*************************************************************************************************/
/*! exports provided: ColorlibConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorlibConnector", function() { return ColorlibConnector; });
/* harmony import */ var _material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/StepConnector */ "../node_modules/@material-ui/core/esm/StepConnector/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var ColorlibConnector = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)'
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
})(_material_ui_core_StepConnector__WEBPACK_IMPORTED_MODULE_0__["default"]);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ColorlibConnector, "ColorlibConnector", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/auth_stepper/components/ColorlibConnector.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/auth_stepper/components/ColorlibStepIcon.js":
/*!************************************************************************************************!*\
  !*** ./containers/Authorization/components/common/auth_stepper/components/ColorlibStepIcon.js ***!
  \************************************************************************************************/
/*! exports provided: ColorlibStepIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorlibStepIcon", function() { return ColorlibStepIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var useColorlibStepIconStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  }
});
function ColorlibStepIcon(props) {
  var _clsx;

  var classes = useColorlibStepIconStyles();
  var active = props.active,
      completed = props.completed,
      icons = props.icons;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, (_clsx = {}, _defineProperty(_clsx, classes.active, active), _defineProperty(_clsx, classes.completed, completed), _clsx))
  }, icons[String(props.icon)]);
}

__signature__(ColorlibStepIcon, "useColorlibStepIconStyles{classes}", function () {
  return [useColorlibStepIconStyles];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useColorlibStepIconStyles, "useColorlibStepIconStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/auth_stepper/components/ColorlibStepIcon.js");
  reactHotLoader.register(ColorlibStepIcon, "ColorlibStepIcon", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/auth_stepper/components/ColorlibStepIcon.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/auth_stepper/components/index.js":
/*!*************************************************************************************!*\
  !*** ./containers/Authorization/components/common/auth_stepper/components/index.js ***!
  \*************************************************************************************/
/*! exports provided: ColorlibConnector, ColorlibStepIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorlibConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorlibConnector */ "./containers/Authorization/components/common/auth_stepper/components/ColorlibConnector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorlibConnector", function() { return _ColorlibConnector__WEBPACK_IMPORTED_MODULE_0__["ColorlibConnector"]; });

/* harmony import */ var _ColorlibStepIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorlibStepIcon */ "./containers/Authorization/components/common/auth_stepper/components/ColorlibStepIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorlibStepIcon", function() { return _ColorlibStepIcon__WEBPACK_IMPORTED_MODULE_1__["ColorlibStepIcon"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./containers/Authorization/components/common/index.js":
/*!*************************************************************!*\
  !*** ./containers/Authorization/components/common/index.js ***!
  \*************************************************************/
/*! exports provided: AuthForm, AuthButton, AuthInput, Done, VerifyCode, UserEmail, WarnSnackbar, DescriptionIcon, AuthStepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthForm */ "./containers/Authorization/components/common/AuthForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthForm", function() { return _AuthForm__WEBPACK_IMPORTED_MODULE_0__["AuthForm"]; });

/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthButton */ "./containers/Authorization/components/common/AuthButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthButton", function() { return _AuthButton__WEBPACK_IMPORTED_MODULE_1__["AuthButton"]; });

/* harmony import */ var _AuthInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthInput */ "./containers/Authorization/components/common/AuthInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInput", function() { return _AuthInput__WEBPACK_IMPORTED_MODULE_2__["AuthInput"]; });

/* harmony import */ var _Done__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Done */ "./containers/Authorization/components/common/Done.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Done", function() { return _Done__WEBPACK_IMPORTED_MODULE_3__["Done"]; });

/* harmony import */ var _verify_code_VerifyCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify_code/VerifyCode */ "./containers/Authorization/components/common/verify_code/VerifyCode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyCode", function() { return _verify_code_VerifyCode__WEBPACK_IMPORTED_MODULE_4__["VerifyCode"]; });

/* harmony import */ var _UserEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserEmail */ "./containers/Authorization/components/common/UserEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserEmail", function() { return _UserEmail__WEBPACK_IMPORTED_MODULE_5__["UserEmail"]; });

/* harmony import */ var _WarnSnackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WarnSnackbar */ "./containers/Authorization/components/common/WarnSnackbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarnSnackbar", function() { return _WarnSnackbar__WEBPACK_IMPORTED_MODULE_6__["WarnSnackbar"]; });

/* harmony import */ var _DescriptionIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DescriptionIcon */ "./containers/Authorization/components/common/DescriptionIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionIcon", function() { return _DescriptionIcon__WEBPACK_IMPORTED_MODULE_7__["DescriptionIcon"]; });

/* harmony import */ var _auth_stepper_AuthStepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth_stepper/AuthStepper */ "./containers/Authorization/components/common/auth_stepper/AuthStepper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStepper", function() { return _auth_stepper_AuthStepper__WEBPACK_IMPORTED_MODULE_8__["AuthStepper"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











/***/ }),

/***/ "./containers/Authorization/components/common/verify_code/VerifyCode.js":
/*!******************************************************************************!*\
  !*** ./containers/Authorization/components/common/verify_code/VerifyCode.js ***!
  \******************************************************************************/
/*! exports provided: VerifyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCode", function() { return VerifyCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AuthInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AuthInput */ "./containers/Authorization/components/common/AuthInput.js");
/* harmony import */ var _AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthForm */ "./containers/Authorization/components/common/AuthForm.js");
/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthButton */ "./containers/Authorization/components/common/AuthButton.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./containers/Authorization/components/common/verify_code/components/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var VerifyCode = function VerifyCode(_ref) {
  var submitHandler = _ref.submitHandler,
      validate = _ref.validate,
      resendCodeHandler = _ref.resendCodeHandler,
      skipStep = _ref.skipStep,
      isEmailError = _ref.isEmailError,
      title = _ref.title,
      autofocus = _ref.autofocus,
      setVisibleWarnMessage = _ref.setVisibleWarnMessage,
      isVisibleWarnMessage = _ref.isVisibleWarnMessage;
  var styles = useStyles();

  var skipHandler = function skipHandler() {
    if (!isVisibleWarnMessage) {
      return setVisibleWarnMessage(true);
    }

    return skipStep();
  };

  if (isEmailError) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      className: styles.box
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.successRegistration
    }, "You are succeeded registered in system,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: styles.mailProviderError
    }, "but occurred error with mail provider, you can verify email in settings later")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["SkipButton"], {
      handler: skipStep
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: styles.box
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: styles.title,
    variant: "h2"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthForm__WEBPACK_IMPORTED_MODULE_2__["AuthForm"], {
    submitHandler: submitHandler,
    validate: validate,
    initialValues: {
      verifyCode: ''
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthInput__WEBPACK_IMPORTED_MODULE_1__["AuthInput"], {
    autoFocus: autofocus,
    name: "verifyCode",
    placeholder: "verification code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthButton__WEBPACK_IMPORTED_MODULE_3__["AuthButton"], {
    text: "verify"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthButton__WEBPACK_IMPORTED_MODULE_3__["AuthButton"], {
    classes: {
      root: styles.resendCodeBtn
    },
    onClick: resendCodeHandler,
    text: "resend code"
  }), skipStep && typeof skipStep === 'function' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthButton__WEBPACK_IMPORTED_MODULE_3__["AuthButton"], {
    classes: {
      root: styles.skipBtn
    },
    onClick: skipHandler,
    text: "skip"
  }));
};

__signature__(VerifyCode, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
    return {
      mailProviderError: {
        color: theme.palette.error.main
      },
      successRegistration: {
        color: theme.palette.success.main,
        fontWeight: 700
      },
      title: {
        marginBottom: '15px',
        fontSize: '40px',
        textAlign: 'center'
      },
      box: {
        width: '300px',
        padding: '35px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px'
      },
      skipBtn: _defineProperty({}, '&:hover', {
        backgroundColor: '#ffebee'
      }),
      resendCodeBtn: _defineProperty({
        marginTop: '5px',
        opacity: '.65'
      }, '&:hover', {
        backgroundColor: '#e3f2fd',
        opacity: '1'
      })
    };
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VerifyCode, "VerifyCode", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/verify_code/VerifyCode.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/verify_code/VerifyCode.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/verify_code/components/SkipButton.js":
/*!*****************************************************************************************!*\
  !*** ./containers/Authorization/components/common/verify_code/components/SkipButton.js ***!
  \*****************************************************************************************/
/*! exports provided: SkipButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipButton", function() { return SkipButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
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



function SkipButton(props) {
  var styles = useStyles();
  var handler = props.handler,
      showWarningMessage = props.showWarningMessage,
      _props$buttonText = props.buttonText,
      buttonText = _props$buttonText === void 0 ? 'skip' : _props$buttonText,
      _props$warnText = props.warnText,
      warnText = _props$warnText === void 0 ? 'Are you sure?' : _props$warnText;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isVisibleWarningMessage = _React$useState2[0],
      setVisibleWarningMessage = _React$useState2[1];

  var skipHandler = function skipHandler() {
    if (!showWarningMessage) {
      return handler();
    }

    if (showWarningMessage && isVisibleWarningMessage) {
      return handler();
    }

    setVisibleWarningMessage(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isVisibleWarningMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    placement: "left",
    title: "if \"yes\" just click ".concat(buttonText)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: styles.warnMessage
  }, warnText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: skipHandler
  }, buttonText));
}

__signature__(SkipButton, "useStyles{styles}\nuseState{[isVisibleWarningMessage, setVisibleWarningMessage](false)}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
    return {
      warnMessage: {
        color: theme.palette.warning.main,
        cursor: 'default'
      }
    };
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SkipButton, "SkipButton", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/verify_code/components/SkipButton.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/common/verify_code/components/SkipButton.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/common/verify_code/components/index.js":
/*!************************************************************************************!*\
  !*** ./containers/Authorization/components/common/verify_code/components/index.js ***!
  \************************************************************************************/
/*! exports provided: SkipButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SkipButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SkipButton */ "./containers/Authorization/components/common/verify_code/components/SkipButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipButton", function() { return _SkipButton__WEBPACK_IMPORTED_MODULE_0__["SkipButton"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



/***/ }),

/***/ "./containers/Authorization/components/index.js":
/*!******************************************************!*\
  !*** ./containers/Authorization/components/index.js ***!
  \******************************************************/
/*! exports provided: AuthForm, AuthButton, AuthInput, Done, VerifyCode, UserEmail, WarnSnackbar, DescriptionIcon, AuthStepper, RestorePassword, SignIn, SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./containers/Authorization/components/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthForm", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["AuthForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthButton", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["AuthButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthInput", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["AuthInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Done", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["Done"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyCode", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["VerifyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserEmail", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["UserEmail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WarnSnackbar", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["WarnSnackbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionIcon", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["DescriptionIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthStepper", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["AuthStepper"]; });

/* harmony import */ var _restore_password_RestorePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restore_password/RestorePassword */ "./containers/Authorization/components/restore_password/RestorePassword.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestorePassword", function() { return _restore_password_RestorePassword__WEBPACK_IMPORTED_MODULE_1__["RestorePassword"]; });

/* harmony import */ var _sign_in_SignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign_in/SignIn */ "./containers/Authorization/components/sign_in/SignIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return _sign_in_SignIn__WEBPACK_IMPORTED_MODULE_2__["SignIn"]; });

/* harmony import */ var _sign_up_SignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign_up/SignUp */ "./containers/Authorization/components/sign_up/SignUp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return _sign_up_SignUp__WEBPACK_IMPORTED_MODULE_3__["SignUp"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






/***/ }),

/***/ "./containers/Authorization/components/restore_password/RestorePassword.js":
/*!*********************************************************************************!*\
  !*** ./containers/Authorization/components/restore_password/RestorePassword.js ***!
  \*********************************************************************************/
/*! exports provided: RestorePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePassword", function() { return RestorePassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_AlternateEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/AlternateEmail */ "../node_modules/@material-ui/icons/AlternateEmail.js");
/* harmony import */ var _material_ui_icons_AlternateEmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AlternateEmail__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "../node_modules/@material-ui/icons/VerifiedUser.js");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Check */ "../node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VpnKey */ "../node_modules/@material-ui/icons/VpnKey.js");
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./containers/Authorization/components/common/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./containers/Authorization/components/restore_password/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _utils_auth_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/auth/names */ "./utils/auth/names.js");
/* harmony import */ var _utils_auth_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/auth/validation */ "./utils/auth/validation.js");
/* harmony import */ var _utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utils/fetch_statuses/aux_functions */ "./utils/fetch_statuses/aux_functions.js");
/* harmony import */ var _selectors_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../selectors/common */ "./selectors/common.js");
/* harmony import */ var _selectors_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../selectors/auth */ "./selectors/auth.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../actions/auth */ "./actions/auth/index.js");
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


















var EXPIRED_RESTORE_PASSWORD_SESSION = _utils_auth_names__WEBPACK_IMPORTED_MODULE_10__["fetchErrorsNames"].EXPIRED_RESTORE_PASSWORD_SESSION;
var SUCCEEDED = _utils_auth_constants__WEBPACK_IMPORTED_MODULE_9__["commonFetchStatuses"].SUCCEEDED;
var GET_REST_PASSWORD_CREDENTIALS = _utils_auth_names__WEBPACK_IMPORTED_MODULE_10__["authFetchStatusNames"].GET_REST_PASSWORD_CREDENTIALS,
    CREATE_NEW_PASSWORD = _utils_auth_names__WEBPACK_IMPORTED_MODULE_10__["authFetchStatusNames"].CREATE_NEW_PASSWORD,
    VERIFY_REST_REST_PASSWORD_CONFIRM_CODE = _utils_auth_names__WEBPACK_IMPORTED_MODULE_10__["authFetchStatusNames"].VERIFY_REST_REST_PASSWORD_CONFIRM_CODE;
var RestorePassword = function RestorePassword() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  var styles = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isExpiredRestSession = _React$useState4[0],
      setRestSessionExpiredStatus = _React$useState4[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(_selectors_auth__WEBPACK_IMPORTED_MODULE_14__["getRestorePasswordCredentials"]),
      token = _useSelector.token,
      allowChangePassword = _useSelector.allowChangePassword;

  var fetchError = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(_selectors_common__WEBPACK_IMPORTED_MODULE_13__["getFetchError"]);
  var getCredentialsFetchStatusFS = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(Object(_selectors_auth__WEBPACK_IMPORTED_MODULE_14__["getAuthPrivateFS"])(GET_REST_PASSWORD_CREDENTIALS));
  var createNewPasswordFS = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(Object(_selectors_auth__WEBPACK_IMPORTED_MODULE_14__["getAuthPrivateFS"])(CREATE_NEW_PASSWORD));
  var verifyRestPasswordConfirmCodeFS = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(Object(_selectors_auth__WEBPACK_IMPORTED_MODULE_14__["getAuthPrivateFS"])(VERIFY_REST_REST_PASSWORD_CONFIRM_CODE));

  var resendCodeHandler = function resendCodeHandler() {
    return dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_15__["resendRestorePasswordCode"])(token));
  };

  var requestVerifyCodeHandler = function requestVerifyCodeHandler(_ref) {
    var email = _ref.email;
    return dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_15__["requestVerify"])(email));
  };

  var verifyCodeHandler = function verifyCodeHandler(token) {
    return function (_ref2) {
      var verifyCode = _ref2.verifyCode;
      dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_15__["verificationCode"])(token, verifyCode));
    };
  };

  var newPasswordHandler = function newPasswordHandler(token) {
    return function (_ref3) {
      var newPassword = _ref3.newPassword,
          confirmationPassword = _ref3.confirmationPassword;
      dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_15__["createNewPassword"])(token, newPassword, confirmationPassword));
    };
  };

  var handleReset = function handleReset() {
    dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_15__["resetRestoreSession"])());
    setRestSessionExpiredStatus(false);
    setActiveStep(0);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (fetchError === EXPIRED_RESTORE_PASSWORD_SESSION) {
      setRestSessionExpiredStatus(true);
    }
  }, [fetchError]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (Object(_utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_12__["isSuccessFetchStatus"])(getCredentialsFetchStatusFS) && activeStep === 0) {
      setActiveStep(1);
    }

    if (Object(_utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_12__["isSuccessFetchStatus"])(verifyRestPasswordConfirmCodeFS) && activeStep === 1) {
      setActiveStep(2);
    }

    if (Object(_utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_12__["isSuccessFetchStatus"])(createNewPasswordFS) && activeStep === 2) {
      setActiveStep(3);
    }
  }, [getCredentialsFetchStatusFS, verifyRestPasswordConfirmCodeFS, createNewPasswordFS]);
  var stepperIcons = {
    1: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AlternateEmail__WEBPACK_IMPORTED_MODULE_1___default.a, null),
    2: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2___default.a, null),
    3: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_4___default.a, null),
    4: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default.a, null)
  };
  var steps = ['Email', 'Verification', 'New password', 'Done'];
  if (isExpiredRestSession) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["RestoreSessionEnded"], {
    handleReset: handleReset
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, activeStep === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["UserEmail"], {
    submitHandler: requestVerifyCodeHandler,
    validate: _utils_auth_validation__WEBPACK_IMPORTED_MODULE_11__["authValidators"].email,
    title: 'Your email'
  }), activeStep === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["VerifyCode"], {
    handleReset: handleReset,
    submitHandler: verifyCodeHandler(token),
    resendCodeHandler: resendCodeHandler,
    validate: _utils_auth_validation__WEBPACK_IMPORTED_MODULE_11__["authValidators"].verificationCode,
    title: 'Check out verification code'
  }), activeStep === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["NewPassword"], {
    handleReset: handleReset,
    allowChangePassword: allowChangePassword,
    submitHandler: newPasswordHandler(token),
    validate: _utils_auth_validation__WEBPACK_IMPORTED_MODULE_11__["authValidators"].newPassword
  }), activeStep === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["Done"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["AuthStepper"], {
    activeStep: activeStep,
    steps: steps,
    icons: stepperIcons
  }));
};

__signature__(RestorePassword, "useDispatch{dispatch}\nuseStyles{styles}\nuseState{[activeStep, setActiveStep](0)}\nuseState{[isExpiredRestSession, setRestSessionExpiredStatus](false)}\nuseSelector{{ token, allowChangePassword }}\nuseSelector{fetchError}\nuseSelector{getCredentialsFetchStatusFS}\nuseSelector{createNewPasswordFS}\nuseSelector{verifyRestPasswordConfirmCodeFS}\nuseEffect{}\nuseEffect{}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], useStyles, react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
    buttonsWrapper: {
      position: 'absolute',
      top: 0,
      left: 0
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EXPIRED_RESTORE_PASSWORD_SESSION, "EXPIRED_RESTORE_PASSWORD_SESSION", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/RestorePassword.js");
  reactHotLoader.register(SUCCEEDED, "SUCCEEDED", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/RestorePassword.js");
  reactHotLoader.register(GET_REST_PASSWORD_CREDENTIALS, "GET_REST_PASSWORD_CREDENTIALS", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/RestorePassword.js");
  reactHotLoader.register(CREATE_NEW_PASSWORD, "CREATE_NEW_PASSWORD", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/RestorePassword.js");
  reactHotLoader.register(VERIFY_REST_REST_PASSWORD_CONFIRM_CODE, "VERIFY_REST_REST_PASSWORD_CONFIRM_CODE", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/RestorePassword.js");
  reactHotLoader.register(RestorePassword, "RestorePassword", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/RestorePassword.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/RestorePassword.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/restore_password/components/NewPassword.js":
/*!****************************************************************************************!*\
  !*** ./containers/Authorization/components/restore_password/components/NewPassword.js ***!
  \****************************************************************************************/
/*! exports provided: NewPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPassword", function() { return NewPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _common_AuthInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/AuthInput */ "./containers/Authorization/components/common/AuthInput.js");
/* harmony import */ var _common_AuthForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/AuthForm */ "./containers/Authorization/components/common/AuthForm.js");
/* harmony import */ var _common_AuthButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/AuthButton */ "./containers/Authorization/components/common/AuthButton.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






function NewPassword(_ref) {
  var submitHandler = _ref.submitHandler,
      validate = _ref.validate,
      handleReset = _ref.handleReset;
  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.box
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: styles.title,
    variant: "h2"
  }, "New password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AuthForm__WEBPACK_IMPORTED_MODULE_3__["AuthForm"], {
    submitHandler: submitHandler,
    handleReset: handleReset,
    validate: validate,
    initialValues: {
      newPassword: '',
      confirmationPassword: ''
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AuthInput__WEBPACK_IMPORTED_MODULE_2__["AuthInput"], {
    name: "newPassword",
    placeholder: "new password",
    type: "password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AuthInput__WEBPACK_IMPORTED_MODULE_2__["AuthInput"], {
    name: "confirmationPassword",
    placeholder: "new password",
    type: "password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AuthButton__WEBPACK_IMPORTED_MODULE_4__["AuthButton"], {
    text: "change"
  })));
}

__signature__(NewPassword, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    box: {
      width: '300px',
      padding: '35px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '12px'
    },
    title: {
      marginBottom: '15px',
      fontSize: '40px'
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NewPassword, "NewPassword", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/components/NewPassword.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/components/NewPassword.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/restore_password/components/RestoreSessionEnded.js":
/*!************************************************************************************************!*\
  !*** ./containers/Authorization/components/restore_password/components/RestoreSessionEnded.js ***!
  \************************************************************************************************/
/*! exports provided: RestoreSessionEnded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreSessionEnded", function() { return RestoreSessionEnded; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../icons */ "./containers/Authorization/icons/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./containers/Authorization/components/common/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var RestoreSessionEnded = function RestoreSessionEnded(_ref) {
  var handleReset = _ref.handleReset;
  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.wrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["DescriptionIcon"], {
    Icon: _icons__WEBPACK_IMPORTED_MODULE_3__["SadSmile"],
    width: 120,
    height: 120
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: styles.title
  }, "We apologize, but your restore password session ended"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["AuthButton"], {
    text: "Restart",
    onClick: handleReset
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles.linksWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: styles.link,
    to: "/auth/sign-up"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: styles.link,
    to: "/auth/sign-in"
  }, "Sign in")));
};

__signature__(RestoreSessionEnded, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    title: {
      fontSize: '25px',
      marginBottom: '25px'
    },
    link: {
      margin: '10px',
      color: '#90caf9',
      textDecoration: 'none',
      fontSize: '20px',
      '&:hover': {
        textDecoration: 'underline',
        fontWeight: 500
      }
    },
    linksWrapper: {
      marginTop: '15px'
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RestoreSessionEnded, "RestoreSessionEnded", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/components/RestoreSessionEnded.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/restore_password/components/RestoreSessionEnded.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/restore_password/components/index.js":
/*!**********************************************************************************!*\
  !*** ./containers/Authorization/components/restore_password/components/index.js ***!
  \**********************************************************************************/
/*! exports provided: NewPassword, RestoreSessionEnded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPassword */ "./containers/Authorization/components/restore_password/components/NewPassword.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewPassword", function() { return _NewPassword__WEBPACK_IMPORTED_MODULE_0__["NewPassword"]; });

/* harmony import */ var _RestoreSessionEnded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestoreSessionEnded */ "./containers/Authorization/components/restore_password/components/RestoreSessionEnded.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestoreSessionEnded", function() { return _RestoreSessionEnded__WEBPACK_IMPORTED_MODULE_1__["RestoreSessionEnded"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




/***/ }),

/***/ "./containers/Authorization/components/sign_in/SignIn.js":
/*!***************************************************************!*\
  !*** ./containers/Authorization/components/sign_in/SignIn.js ***!
  \***************************************************************/
/*! exports provided: SignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./containers/Authorization/components/common/index.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../actions/auth */ "./actions/auth/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_auth_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/auth/validation */ "./utils/auth/validation.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons */ "./containers/Authorization/icons/index.js");
/* harmony import */ var _selectors_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../selectors/auth */ "./selectors/auth.js");
/* harmony import */ var _utils_auth_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utils/auth/names */ "./utils/auth/names.js");
/* harmony import */ var _utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/fetch_statuses/aux_functions */ "./utils/fetch_statuses/aux_functions.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};













var SignIn = function SignIn() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var styles = useStyles();

  var _useHistory = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(),
      push = _useHistory.push;

  var signInFS = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(Object(_selectors_auth__WEBPACK_IMPORTED_MODULE_9__["getAuthPrivateFS"])(_utils_auth_names__WEBPACK_IMPORTED_MODULE_10__["authFetchStatusNames"].SIGN_IN));

  var submitHandler = function submitHandler(_ref) {
    var email = _ref.email,
        password = _ref.password;
    return dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_5__["signIn"])(email, password));
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (Object(_utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_11__["isSuccessFetchStatus"])(signInFS)) setTimeout(function () {
      push('/dashboard');
    }, _utils_auth_constants__WEBPACK_IMPORTED_MODULE_3__["delays"].AFTER_SIGN_IN);
  }, [signInFS]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.box
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["DescriptionIcon"], {
    Icon: _icons__WEBPACK_IMPORTED_MODULE_8__["User"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: styles.title,
    variant: "h2"
  }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["AuthForm"], {
    submitHandler: submitHandler,
    initialValues: {
      email: '',
      password: ''
    },
    validate: _utils_auth_validation__WEBPACK_IMPORTED_MODULE_7__["authValidators"].authData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["AuthInput"], {
    autoFocus: true,
    placeholder: "email",
    name: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["AuthInput"], {
    placeholder: "password",
    name: "password",
    type: "password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["AuthButton"], {
    text: "sign in"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.serviceBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, "Don`t have account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: styles.link,
    to: "/auth/sign-up"
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    className: styles.link,
    to: "/auth/restore-password"
  }, "Forget password")));
};

__signature__(SignIn, "useDispatch{dispatch}\nuseStyles{styles}\nuseHistory{{ push }}\nuseSelector{signInFS}\nuseEffect{}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], useStyles, react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    box: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      marginBottom: '15px',
      fontSize: '40px'
    },
    serviceBox: {
      marginTop: '25px'
    },
    link: {
      color: '#90caf9',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        fontWeight: 500
      }
    }
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignIn, "SignIn", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_in/SignIn.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_in/SignIn.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/sign_up/SignUp.js":
/*!***************************************************************!*\
  !*** ./containers/Authorization/components/sign_up/SignUp.js ***!
  \***************************************************************/
/*! exports provided: SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ "../node_modules/@material-ui/icons/PersonAdd.js");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "../node_modules/@material-ui/icons/VerifiedUser.js");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Check */ "../node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _actions_settings_user_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../actions/settings/user_email */ "./actions/settings/user_email.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../actions/auth */ "./actions/auth/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_auth_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./containers/Authorization/components/sign_up/components/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common */ "./containers/Authorization/components/common/index.js");
/* harmony import */ var _utils_auth_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../utils/auth/validation */ "./utils/auth/validation.js");
/* harmony import */ var _selectors_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../selectors/auth */ "./selectors/auth.js");
/* harmony import */ var _utils_auth_tools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../utils/auth/tools */ "./utils/auth/tools.js");
/* harmony import */ var _utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../utils/fetch_statuses/aux_functions */ "./utils/fetch_statuses/aux_functions.js");
/* harmony import */ var _utils_auth_names__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../utils/auth/names */ "./utils/auth/names.js");
/* harmony import */ var _utils_settings_names__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../utils/settings/names */ "./utils/settings/names.js");
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


















var SIGN_UP = _utils_auth_names__WEBPACK_IMPORTED_MODULE_15__["authFetchStatusNames"].SIGN_UP;
var VERIFY_EMAIL = _utils_settings_names__WEBPACK_IMPORTED_MODULE_16__["settingsFetchStatusNames"].VERIFY_EMAIL;
var stepperIcons = {
  1: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_1___default.a, null),
  2: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_2___default.a, null),
  3: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_3___default.a, null)
};
function SignUp(_ref) {
  var setVisibleWarnMessage = _ref.setVisibleWarnMessage,
      isVisibleWarnMessage = _ref.isVisibleWarnMessage;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = ['Sign up', 'Verification', 'Done'];

  var nextStep = function nextStep() {
    return setActiveStep(function (prev) {
      return prev + 1;
    });
  };

  var signUpFS = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(Object(_selectors_auth__WEBPACK_IMPORTED_MODULE_12__["getAuthPrivateFS"])(SIGN_UP));
  var verifyEmailFS = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(Object(_selectors_auth__WEBPACK_IMPORTED_MODULE_12__["getAuthPrivateFS"])(VERIFY_EMAIL));
  var isEmailError = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_selectors_auth__WEBPACK_IMPORTED_MODULE_12__["getEmailProviderError"]);

  var resendCodeHandler = function resendCodeHandler() {
    return dispatch(_actions_settings_user_email__WEBPACK_IMPORTED_MODULE_5__["resendVerifyEmailCode"]);
  };

  var signUpHandler = function signUpHandler(_ref2) {
    var email = _ref2.email,
        password = _ref2.password;
    return dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["signUp"])(email, password));
  };

  var verifyEmailHandler = function verifyEmailHandler(_ref3) {
    var verifyCode = _ref3.verifyCode;
    return dispatch(Object(_actions_settings_user_email__WEBPACK_IMPORTED_MODULE_5__["verificationEmail"])(verifyCode));
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (Object(_utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_14__["isSuccessFetchStatus"])(signUpFS) && activeStep === 0) {
      Object(_utils_auth_tools__WEBPACK_IMPORTED_MODULE_13__["invokeAfterDelay"])(function () {
        return setActiveStep(1);
      }, _utils_auth_constants__WEBPACK_IMPORTED_MODULE_8__["delays"].BETWEEN_STEPS);
    }

    if (Object(_utils_fetch_statuses_aux_functions__WEBPACK_IMPORTED_MODULE_14__["isSuccessFetchStatus"])(verifyEmailFS) && activeStep === 1) {
      Object(_utils_auth_tools__WEBPACK_IMPORTED_MODULE_13__["invokeAfterDelay"])(function () {
        return setActiveStep(2);
      }, _utils_auth_constants__WEBPACK_IMPORTED_MODULE_8__["delays"].BETWEEN_STEPS);
    }
  }, [signUpFS, verifyEmailFS]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, activeStep === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["SignUpForm"], {
    submitHandler: signUpHandler,
    validate: _utils_auth_validation__WEBPACK_IMPORTED_MODULE_11__["authValidators"].authData
  }), activeStep === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_10__["VerifyCode"], {
    isEmailError: isEmailError,
    resendCodeHandler: resendCodeHandler,
    submitHandler: verifyEmailHandler,
    skipStep: nextStep,
    validate: _utils_auth_validation__WEBPACK_IMPORTED_MODULE_11__["authValidators"].verificationCode,
    setVisibleWarnMessage: setVisibleWarnMessage,
    isVisibleWarnMessage: isVisibleWarnMessage,
    title: 'Check out verification code'
  }), activeStep === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_10__["Done"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_10__["AuthStepper"], {
    activeStep: activeStep,
    steps: steps,
    icons: stepperIcons
  }));
}

__signature__(SignUp, "useDispatch{dispatch}\nuseState{[activeStep, setActiveStep](0)}\nuseSelector{signUpFS}\nuseSelector{verifyEmailFS}\nuseSelector{isEmailError}\nuseEffect{}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SIGN_UP, "SIGN_UP", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_up/SignUp.js");
  reactHotLoader.register(VERIFY_EMAIL, "VERIFY_EMAIL", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_up/SignUp.js");
  reactHotLoader.register(stepperIcons, "stepperIcons", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_up/SignUp.js");
  reactHotLoader.register(SignUp, "SignUp", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_up/SignUp.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/sign_up/components/SignUpForm.js":
/*!******************************************************************************!*\
  !*** ./containers/Authorization/components/sign_up/components/SignUpForm.js ***!
  \******************************************************************************/
/*! exports provided: SignUpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpForm", function() { return SignUpForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _common_AuthForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/AuthForm */ "./containers/Authorization/components/common/AuthForm.js");
/* harmony import */ var _common_AuthInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/AuthInput */ "./containers/Authorization/components/common/AuthInput.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./containers/Authorization/components/common/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../icons */ "./containers/Authorization/icons/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var SignUpForm = function SignUpForm(_ref) {
  var submitHandler = _ref.submitHandler,
      validate = _ref.validate;
  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.box
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["DescriptionIcon"], {
    Icon: _icons__WEBPACK_IMPORTED_MODULE_6__["AddUser"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    className: styles.title,
    variant: "h2"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AuthForm__WEBPACK_IMPORTED_MODULE_2__["AuthForm"], {
    submitHandler: submitHandler,
    validate: validate,
    initialValues: {
      email: '',
      password: ''
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AuthInput__WEBPACK_IMPORTED_MODULE_3__["AuthInput"], {
    autoFocus: true,
    name: "email",
    placeholder: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_AuthInput__WEBPACK_IMPORTED_MODULE_3__["AuthInput"], {
    name: "password",
    placeholder: "password",
    type: "password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["AuthButton"], {
    text: "sign up"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.serviceBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, "Have already account?", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    className: styles.link,
    to: "/auth/sign-in"
  }, "Sign in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
    className: styles.link,
    to: "/auth/restore-password"
  }, "Forget password")));
};

__signature__(SignUpForm, "useStyles{styles}", function () {
  return [useStyles];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function () {
    return {
      box: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-200px'
      },
      title: {
        marginBottom: '15px',
        fontSize: '40px'
      },
      serviceBox: {
        marginTop: '25px'
      },
      link: {
        color: '#90caf9',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
          fontWeight: 500
        }
      }
    };
  })();
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignUpForm, "SignUpForm", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_up/components/SignUpForm.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/components/sign_up/components/SignUpForm.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/components/sign_up/components/index.js":
/*!*************************************************************************!*\
  !*** ./containers/Authorization/components/sign_up/components/index.js ***!
  \*************************************************************************/
/*! exports provided: SignUpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignUpForm */ "./containers/Authorization/components/sign_up/components/SignUpForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUpForm", function() { return _SignUpForm__WEBPACK_IMPORTED_MODULE_0__["SignUpForm"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



/***/ }),

/***/ "./containers/Authorization/icons/AddUser.js":
/*!***************************************************!*\
  !*** ./containers/Authorization/icons/AddUser.js ***!
  \***************************************************/
/*! exports provided: AddUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return AddUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function AddUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M255.501.499C174.053.499 107.79 66.763 107.79 148.21c0 50.449 25.429 95.065 64.137 121.724-36.139 12.471-69.263 33.071-97.091 60.899C26.577 379.093 0 443.254 0 511.501h39.922c0-118.871 96.708-215.579 215.579-215.579 81.448 0 147.711-66.264 147.711-147.712S336.949.499 255.501.499zm0 255.501c-59.435 0-107.789-48.354-107.789-107.789s48.354-107.79 107.789-107.79S363.29 88.775 363.29 148.211 314.936 256 255.501 256zM428.164 387.743v-83.837h-39.922v83.837h-83.837v39.922h83.837v83.836h39.922v-83.836H512v-39.922z"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AddUser, "AddUser", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/AddUser.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Android.js":
/*!***************************************************!*\
  !*** ./containers/Authorization/icons/Android.js ***!
  \***************************************************/
/*! exports provided: Android */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Android", function() { return Android; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Android(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.12 512.12",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#4caf50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M74.727 170.787c-17.673 0-32 14.327-32 32V352.12c0 17.673 14.327 32 32 32s32-14.327 32-32V202.787c0-17.673-14.327-32-32-32zM437.393 170.787c-17.673 0-32 14.327-32 32V352.12c0 17.673 14.327 32 32 32s32-14.327 32-32V202.787c0-17.673-14.326-32-32-32zM373.393 170.787H138.727c-5.891 0-10.667 4.776-10.667 10.667V352.12c-.005 25.348 17.831 47.197 42.667 52.267v75.733c0 17.673 14.327 32 32 32s32-14.327 32-32v-74.667h42.667v74.667c0 17.673 14.327 32 32 32s32-14.327 32-32v-75.733c24.836-5.07 42.672-26.919 42.667-52.267V181.454c-.001-5.891-4.777-10.667-10.668-10.667zM333.607 44.323l26.005-25.984c4.237-4.093 4.354-10.845.262-15.083-4.093-4.237-10.845-4.354-15.083-.262-.089.086-.176.173-.262.262L314.236 33.55a145.988 145.988 0 00-116.331 0L167.612 3.235c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l25.984 26.005a112.575 112.575 0 00-50.453 94.464c0 5.891 4.776 10.667 10.667 10.667h234.667c5.891 0 10.667-4.776 10.667-10.667a112.578 112.578 0 00-50.454-94.463z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#fafafa"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 202.727,
    cy: 96.12,
    r: 10.667
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 309.393,
    cy: 96.12,
    r: 10.667
  })));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Android, "Android", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Android.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Apple.js":
/*!*************************************************!*\
  !*** ./containers/Authorization/icons/Apple.js ***!
  \*************************************************/
/*! exports provided: Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apple", function() { return Apple; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Apple(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.003 512.003",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M351.98 0c-27.296 1.888-59.2 19.36-77.792 42.112-16.96 20.64-30.912 51.296-25.472 81.088 29.824.928 60.64-16.96 78.496-40.096 16.704-21.536 29.344-52 24.768-83.104z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M459.852 171.776c-26.208-32.864-63.04-51.936-97.824-51.936-45.92 0-65.344 21.984-97.248 21.984-32.896 0-57.888-21.92-97.6-21.92-39.008 0-80.544 23.84-106.88 64.608-37.024 57.408-30.688 165.344 29.312 257.28 21.472 32.896 50.144 69.888 87.648 70.208 33.376.32 42.784-21.408 88-21.632 45.216-.256 53.792 21.92 87.104 21.568 37.536-.288 67.776-41.28 89.248-74.176 15.392-23.584 21.12-35.456 33.056-62.08-86.816-33.056-100.736-156.512-14.816-203.904z"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Apple, "Apple", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Apple.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Desktop.js":
/*!***************************************************!*\
  !*** ./containers/Authorization/icons/Desktop.js ***!
  \***************************************************/
/*! exports provided: Desktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desktop", function() { return Desktop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Desktop(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 497 497",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M275.57 401l-84.14 30-3.19 11.15C183.71 458.02 166.5 471 150 471v7.5h174.5z",
    fill: "#adaca7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M308.76 442.15L297 401l-48.5-30-48.5 30-8.57 30h84.14l3.19 11.15C283.29 458.02 300.5 471 317 471l15 7.5 15-7.5c-16.5 0-33.71-12.98-38.24-28.85z",
    fill: "#8f8f8b"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M437 401h30c16.5 0 30-13.5 30-30v-60l-60-60z",
    fill: "#adaca7"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 371c0 16.5 13.5 30 30 30h407c16.5 0 30-13.5 30-30V191L0 311z",
    fill: "#cbc9c2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M467 11h-30l30 300h30V41c0-16.5-13.5-30-30-30z",
    fill: "#404242"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M467 41c0-16.5-13.5-30-30-30H30C13.5 11 0 24.5 0 41v270h467v-30L248.5 160.987z",
    fill: "#565959"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M467 40.995l-29.994-.021c0 .005-188.506 120.013-188.506 120.013S437.002 280.998 437 281l29.999-.02c.001 0-.002-239.981.001-239.985z",
    fill: "#4b88d5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M437 40.995l-406.912-.022c-.025.012-.046 240.022-.088 240.027l406.99-.02c.005 0-.032-239.981.01-239.985z",
    fill: "#69a7ff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 248.5,
    cy: 356,
    fill: "#fff",
    r: 15
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M403.5 486h-310c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h310c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",
    fill: "#8f8f8b"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Desktop, "Desktop", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Desktop.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Edge.js":
/*!************************************************!*\
  !*** ./containers/Authorization/icons/Edge.js ***!
  \************************************************/
/*! exports provided: Edge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return Edge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Edge(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.005 512.005",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.443 227.392h.288c3.04-24.032 8.64-47.04 16.736-69.088s19.072-42.72 32.896-62.08 29.792-36.128 47.904-50.336 39.424-25.408 63.936-33.6S232.083 0 260.275 0c44.064 0 83.52 10.048 118.432 30.176s62.912 49.056 84.096 86.816c19.84 35.648 29.76 77.792 29.76 126.432v53.76H170.739c.192 21.152 5.28 39.52 15.296 55.072s23.04 27.232 39.04 35.04 34.08 13.248 54.208 16.288 40.416 3.328 60.928.864 40.32-6.912 59.488-13.312c19.168-6.4 35.712-14.432 49.632-24.16v107.84c-17.536 10.496-39.424 19.264-65.632 26.304-26.208 7.04-56 10.688-89.376 10.88-33.376.192-63.488-4.864-90.4-15.168-36.032-13.92-65.728-37.664-89.088-71.2S79.603 356.576 79.219 319.2c-.576-46.144 10.016-85.408 31.744-117.824s52.736-57.984 92.96-76.672c-9.152 11.456-16.576 23.424-22.304 35.904s-10.112 27.712-13.152 45.632h181.632c1.536-14.688.768-28.032-2.304-40.032-3.04-12-7.52-21.696-13.44-29.024s-12.64-13.696-20.16-19.008c-7.52-5.344-15.2-9.248-23.04-11.712-7.808-2.464-14.976-4.448-21.44-5.856s-11.808-2.24-16.032-2.432l-6.272-.352c-25.728.96-50.496 5.184-74.24 12.736s-45.024 17.504-63.904 29.888-35.68 25.792-50.336 40.192-27.872 29.984-39.488 46.752z",
    fill: "#2196f3"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Edge, "Edge", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Edge.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Firefox.js":
/*!***************************************************!*\
  !*** ./containers/Authorization/icons/Firefox.js ***!
  \***************************************************/
/*! exports provided: Firefox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Firefox", function() { return Firefox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Firefox(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 291.678 291.678",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M145.66 4.277c75.561 0 136.556 60.995 136.556 136.556S221.22 277.389 145.66 277.389 9.104 216.394 9.104 140.833 70.099 4.277 145.66 4.277z",
    fill: "#2394bc"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M169.329 284.671c69.188-11.835 121.99-71.009 121.99-143.839l-.91 1.821c1.821-13.656 1.821-26.401-.91-36.415-.91 8.193-1.821 12.745-3.642 14.566 0-.91 0-9.104-2.731-20.028-.91-8.193-2.731-16.387-5.462-23.67.91 3.641.91 6.373.91 9.104-10.924-28.222-36.415-63.726-101.051-62.816 0 0 22.759 2.731 32.773 18.207 0 0-10.924-2.731-19.118 1.821 10.014 3.641 19.118 8.193 26.401 12.745h.91c1.821.91 3.641 2.731 5.462 3.641 13.656 10.014 26.401 23.67 25.49 40.967-3.641-5.462-7.283-9.104-12.745-10.014 6.373 24.58 6.373 44.608 1.821 60.085-3.641-10.924-6.373-16.387-9.104-19.118 3.641 32.773-.91 56.443-15.476 71.919 2.731-9.104 3.641-17.297 3.641-23.67-17.297 25.49-36.415 39.146-58.264 40.056-8.193 0-16.387-.91-24.58-3.641-10.924-3.641-20.939-10.014-30.042-19.118 13.656.91 27.311-.91 38.236-7.283l18.207-11.835c2.731-.91 4.552-.91 7.283 0 4.552-.91 6.373-2.731 4.552-7.283-1.821-2.731-5.462-5.462-10.014-8.193-9.104-4.552-19.118-3.641-29.132 2.731-10.014 5.462-19.118 5.462-28.222-.91-5.462-3.641-11.835-9.104-17.297-16.387l-1.821-3.641c-.91 8.193 0 17.297 3.641 30.042-3.641-11.835-4.552-21.849-3.641-30.042 0-6.373 2.731-10.924 8.193-10.924h-1.821 2.731c6.373.91 12.745 1.821 20.939 4.552.91-7.283 0-15.476-5.462-23.67 7.283-7.283 13.656-11.835 19.118-14.566 2.731-.91 3.641-3.641 4.552-6.373 1.821-3.641.91-5.462-.91-7.283-5.462 0-10.014 0-15.476-.91-1.821-.91-4.552-2.731-8.193-5.462l-8.193-8.193-2.731-1.821-.91-.91.91-.91c.91-6.373 2.731-11.835 5.462-16.387l.91-.91c2.731-4.552 8.193-9.104 15.476-14.566-14.566 1.821-27.311 8.193-39.146 19.118-9.104-2.731-20.939-1.821-33.684 3.641l-1.821.91 1.821-.91c-8.193-3.641-13.656-14.566-16.387-32.773C20.939 36.14 16.387 55.258 16.387 81.659l-2.731 4.552-.91.91c-1.821 2.731-3.641 6.373-6.373 10.924C2.732 105.328.911 110.79.911 116.252v5.462l8.193-6.373c-2.731 8.193-5.462 16.387-6.373 24.58v3.641L0 140.833c0 30.953 10.014 60.085 26.401 83.754l.91.91.91.91c11.835 16.387 27.311 30.042 45.519 40.967 12.745 7.283 26.401 12.745 40.967 16.387l2.731.91c2.731.91 6.373.91 9.104 1.821 2.731 0 4.552.91 7.283.91h21.849c3.641 0 7.283-.91 10.924-.91 0-1.821 2.731-1.821 2.731-1.821zm91.948-177.522v.91-.91z",
    fill: "#ec8840"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Firefox, "Firefox", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Firefox.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/GoogleChrome.js":
/*!********************************************************!*\
  !*** ./containers/Authorization/icons/GoogleChrome.js ***!
  \********************************************************/
/*! exports provided: GoogleChrome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChrome", function() { return GoogleChrome; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function GoogleChrome(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512.023 512.023",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M493.248 160.021H256.021c-53.019-.052-96.042 42.886-96.095 95.905a95.999 95.999 0 0012.255 47.028L53.568 99.434c86.393-111.815 247.073-132.423 358.888-46.03a255.85 255.85 0 0180.792 106.617z",
    fill: "#f44336"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M512.021 256.021c-.118 141.336-114.664 255.882-256 256a228.332 228.332 0 01-32-2.133l115.2-205.867c26.403-45.964 10.664-104.625-35.2-131.2a95.106 95.106 0 00-47.787-12.8h237.013a252.409 252.409 0 0118.774 96z",
    fill: "#ffc107"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M339.221 304.021l-115.2 205.867h-.213C83.62 492.176-15.666 364.172 2.046 223.984a255.853 255.853 0 0151.522-124.55l118.613 203.52.64 1.067c26.451 45.95 85.143 61.757 131.093 35.307a95.992 95.992 0 0035.307-35.307z",
    fill: "#4caf50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M339.221 304.021c-26.451 45.95-85.143 61.757-131.093 35.307a96.007 96.007 0 01-35.307-35.307l-.64-1.067c-25.921-46.251-9.439-104.758 36.812-130.679a96.004 96.004 0 0147.028-12.255h.213a95.106 95.106 0 0147.787 12.8c45.865 26.576 61.603 85.237 35.2 131.201z",
    fill: "#f44336"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M339.221 304.021c-26.451 45.95-85.143 61.757-131.093 35.307a96.007 96.007 0 01-35.307-35.307l-.64-1.067c-25.921-46.251-9.439-104.758 36.812-130.679a96.004 96.004 0 0147.028-12.255h.213a95.106 95.106 0 0147.787 12.8c45.865 26.576 61.603 85.237 35.2 131.201z",
    fill: "#2196f3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M255.659 362.688a105.899 105.899 0 01-52.971-14.208 107.06 107.06 0 01-39.104-39.125c-29.455-51.018-11.975-116.254 39.043-145.709a106.678 106.678 0 0153.395-14.291c58.91-.046 106.704 47.674 106.749 106.584a106.663 106.663 0 01-14.291 53.416 107.265 107.265 0 01-92.821 53.333zm.554-192a85.099 85.099 0 00-74.219 42.667c-23.564 40.86-9.543 93.087 31.317 116.651s93.087 9.543 116.651-31.317c23.564-40.814 9.58-93.003-31.234-116.568a85.337 85.337 0 00-42.494-11.432h-.021z",
    fill: "#fafafa"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GoogleChrome, "GoogleChrome", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/GoogleChrome.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/InternetExplorer.js":
/*!************************************************************!*\
  !*** ./containers/Authorization/icons/InternetExplorer.js ***!
  \************************************************************/
/*! exports provided: InternetExplorer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetExplorer", function() { return InternetExplorer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function InternetExplorer(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 494.046 494.046",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#2196f3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M238.989 84.018c4.537-3.758 5.169-10.482 1.411-15.019a10.67 10.67 0 00-9.731-3.755C128.216 82.808 53.915 172.514 55.736 276.445c.04 8.742.653 17.472 1.835 26.133a10.667 10.667 0 009.28 9.195c.44.032.882.032 1.323 0a10.667 10.667 0 009.92-6.741 545.5 545.5 0 0165.493-117.781 567.448 567.448 0 0195.402-103.233zM458.424 242.845c-10.537-76.605-62.266-141.247-134.699-168.32a10.666 10.666 0 00-10.56 1.92 570.473 570.473 0 00-55.253 55.019 10.668 10.668 0 007.019 17.707c38.101 3.456 71.317 37.525 83.904 84.523H183.352a10.668 10.668 0 00-8.768 4.587c-13.675 19.712-26.624 39.467-38.4 58.709a482.102 482.102 0 00-45.355 91.733 10.668 10.668 0 001.536 9.621c.175.261.368.511.576.747 36.517 56.005 98.648 90.01 165.504 90.581 84.889-.929 160.139-54.835 188.331-134.912 2.074-5.514-.715-11.665-6.229-13.739a10.674 10.674 0 00-3.755-.683h-88.533a10.665 10.665 0 00-9.557 5.931c-13.387 33.157-44.575 55.723-80.256 58.069-41.045 0-76.608-34.603-90.048-85.333h279.467a10.667 10.667 0 0010.667-9.152 234.319 234.319 0 002.667-33.515 233.356 233.356 0 00-2.775-33.493z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M399.522 10.312C364.514-14.947 297.805 6.984 225.4 67.485a589.113 589.113 0 00-99.115 107.221 567.577 567.577 0 00-68.032 122.453 9.442 9.442 0 00-.363 1.088c-34.133 85.547-33.323 157.056 2.133 182.336a75.843 75.843 0 0039.403 13.461c2.392.019 4.78-.209 7.125-.683a22.38 22.38 0 0015.424-10.389c2.997-5.024 1.389-11.524-3.605-14.571-6.571-4.011-26.56-16.256-7.403-72.811a467.257 467.257 0 0143.349-87.467c11.669-18.944 24.405-38.4 37.824-57.728l15.083-21.205a1055.11 1055.11 0 0166.709-83.627 549.319 549.319 0 0153.141-52.971c40.299-34.539 58.048-33.813 63.787-32s9.728 8.107 12.096 18.539a10.517 10.517 0 0011.371 8.256 10.667 10.667 0 009.664-10.091c1.558-39.486-12.437-58.174-24.469-66.984z",
    fill: "#ffc107"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InternetExplorer, "InternetExplorer", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/InternetExplorer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Mobile.js":
/*!**************************************************!*\
  !*** ./containers/Authorization/icons/Mobile.js ***!
  \**************************************************/
/*! exports provided: Mobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mobile", function() { return Mobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Mobile(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512",
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg"
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: "#78b9eb",
    height: 480,
    rx: 32,
    width: 256,
    x: 128,
    y: 18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M312 58H200l-8-40h128z",
    fill: "#787680"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M352 8H160a40.045 40.045 0 00-40 40v416a40.045 40.045 0 0040 40h192a40.045 40.045 0 0040-40V48a40.045 40.045 0 00-40-40zm-41.758 16l-4.8 24h-98.883l-4.8-24zM376 464a24.027 24.027 0 01-24 24H160a24.027 24.027 0 01-24-24V48a24.027 24.027 0 0124-24h25.441l6.714 33.569A8 8 0 00200 64h112a8 8 0 007.845-6.431L326.559 24H352a24.027 24.027 0 0124 24z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M208 456h-48a8 8 0 000 16h48a8 8 0 000-16zM240 456h-8a8 8 0 000 16h8a8 8 0 000-16z"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Mobile, "Mobile", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Mobile.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Opera.js":
/*!*************************************************!*\
  !*** ./containers/Authorization/icons/Opera.js ***!
  \*************************************************/
/*! exports provided: Opera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opera", function() { return Opera; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Opera(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M171.744 111.744C195.232 84 225.568 67.296 258.72 67.296c74.528 0 134.944 84.48 134.944 188.704S333.248 444.736 258.72 444.736c-33.152 0-63.488-16.736-86.976-44.448 36.736 47.68 91.328 77.92 152.288 77.92 37.504 0 72.576-11.456 102.592-31.36C479.008 399.968 512 331.84 512 256s-32.992-143.968-85.376-190.816c-30.016-19.904-65.088-31.36-102.592-31.36-60.96-.032-115.584 30.24-152.288 77.92",
    fill: "#d32f2f"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M256 0C114.624 0 0 114.624 0 256c0 137.28 108.096 249.344 243.808 255.712 4.032.192 8.096.288 12.192.288 65.536 0 125.312-24.64 170.592-65.152-30.016 19.904-65.088 31.36-102.592 31.36-60.96 0-115.552-30.24-152.288-77.92-28.32-33.408-46.656-82.784-47.872-138.24v-12.064c1.248-55.424 19.584-104.832 47.872-138.24 36.736-47.68 91.328-77.92 152.288-77.92 37.504 0 72.576 11.456 102.592 31.36C381.568 24.864 322.144.256 256.96 0H256z",
    fill: "#f44336"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Opera, "Opera", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Opera.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/SadSmile.js":
/*!****************************************************!*\
  !*** ./containers/Authorization/icons/SadSmile.js ***!
  \****************************************************/
/*! exports provided: SadSmile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SadSmile", function() { return SadSmile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function SadSmile(_ref) {
  var width = _ref.width,
      height = _ref.height,
      rest = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 368 368",
    width: width,
    height: height
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M184 0C82.544 0 0 82.544 0 184s82.544 184 184 184c101.464 0 184-82.544 184-184S285.464 0 184 0zm0 352c-92.64 0-168-75.36-168-168S91.36 16 184 16c92.632 0 168 75.36 168 168s-75.368 168-168 168z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M144 152c0-13.232-10.768-24-24-24s-24 10.768-24 24 10.768 24 24 24 24-10.768 24-24zm-32 0c0-4.408 3.592-8 8-8s8 3.592 8 8-3.592 8-8 8-8-3.592-8-8zM248 128c-13.232 0-24 10.768-24 24s10.768 24 24 24 24-10.768 24-24-10.768-24-24-24zm0 32c-4.416 0-8-3.592-8-8s3.584-8 8-8 8 3.592 8 8-3.584 8-8 8zM184 224c-29.824 0-58.24 12.632-77.96 34.664-2.944 3.296-2.664 8.352.624 11.296a7.998 7.998 0 0011.296-.624C134.648 250.688 158.72 240 184 240c25.28 0 49.352 10.688 66.04 29.336A7.963 7.963 0 00256 272a7.966 7.966 0 005.336-2.04c3.288-2.944 3.568-8 .624-11.296C242.24 236.64 213.832 224 184 224z"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SadSmile, "SadSmile", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/SadSmile.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Safari.js":
/*!**************************************************!*\
  !*** ./containers/Authorization/icons/Safari.js ***!
  \**************************************************/
/*! exports provided: Safari */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Safari", function() { return Safari; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Safari(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 256,
    cy: 256,
    r: 256,
    fill: "#2196f3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fafafa",
    d: "M224 224L96 416l192-128z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#f44336",
    d: "M224 224l64 64L416 96z"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Safari, "Safari", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Safari.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Success.js":
/*!***************************************************!*\
  !*** ./containers/Authorization/icons/Success.js ***!
  \***************************************************/
/*! exports provided: Success */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Success(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M497.36 69.995c-7.532-7.545-19.753-7.558-27.285-.032L238.582 300.845l-83.522-90.713c-7.217-7.834-19.419-8.342-27.266-1.126-7.841 7.217-8.343 19.425-1.126 27.266l97.126 105.481a19.273 19.273 0 0013.784 6.22c.141.006.277.006.412.006a19.317 19.317 0 0013.623-5.628L497.322 97.286c7.551-7.525 7.564-19.746.038-27.291z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M492.703 236.703c-10.658 0-19.296 8.638-19.296 19.297 0 119.883-97.524 217.407-217.407 217.407-119.876 0-217.407-97.524-217.407-217.407 0-119.876 97.531-217.407 217.407-217.407 10.658 0 19.297-8.638 19.297-19.296C275.297 8.638 266.658 0 256 0 114.84 0 0 114.84 0 256c0 141.154 114.84 256 256 256 141.154 0 256-114.846 256-256 0-10.658-8.638-19.297-19.297-19.297z"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Success, "Success", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Success.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Tablet.js":
/*!**************************************************!*\
  !*** ./containers/Authorization/icons/Tablet.js ***!
  \**************************************************/
/*! exports provided: Tablet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tablet", function() { return Tablet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Tablet(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M110.933 503.467h290.133c18.85 0 34.133-15.283 34.133-34.133V42.667c0-18.85-15.283-34.133-34.133-34.133H110.933c-18.85 0-34.133 15.283-34.133 34.133v426.667c0 18.85 15.283 34.133 34.133 34.133zM256 477.867c-9.429 0-17.067-7.637-17.067-17.067s7.637-17.067 17.067-17.067c9.429 0 17.067 7.637 17.067 17.067s-7.638 17.067-17.067 17.067zm0-443.734c4.71 0 8.533 3.823 8.533 8.533S260.71 51.2 256 51.2c-4.71 0-8.533-3.823-8.533-8.533s3.823-8.534 8.533-8.534zM102.4 76.8h307.2v341.333H102.4V76.8z",
    fill: "#e6e7e8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#78b9eb",
    d: "M102.4 76.8h307.2v341.333H102.4z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#e6e7e8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 256,
    cy: 460.8,
    r: 17.067
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 256,
    cy: 42.667,
    r: 8.533
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#231f20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M401.067 512H110.933c-23.552-.026-42.641-19.115-42.667-42.667V42.667C68.292 19.115 87.381.026 110.933 0h290.133c23.552.026 42.641 19.115 42.667 42.667v426.667c-.025 23.551-19.114 42.64-42.666 42.666zM110.933 17.067c-14.14 0-25.6 11.46-25.6 25.6v426.667c0 14.14 11.46 25.6 25.6 25.6h290.133c14.14 0 25.6-11.46 25.6-25.6V42.667c0-14.14-11.46-25.6-25.6-25.6H110.933z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M418.133 426.667H93.867v-358.4h324.267v358.4zm-307.2-17.067h290.133V85.333H110.933V409.6zM256 486.4c-14.14 0-25.6-11.46-25.6-25.6s11.46-25.6 25.6-25.6 25.6 11.46 25.6 25.6-11.46 25.6-25.6 25.6zm0-34.133c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM256 59.733c-9.429 0-17.067-7.637-17.067-17.067S246.571 25.6 256 25.6s17.067 7.637 17.067 17.067S265.429 59.733 256 59.733z"
  })));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tablet, "Tablet", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Tablet.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/User.js":
/*!************************************************!*\
  !*** ./containers/Authorization/icons/User.js ***!
  \************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function User(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(User, "User", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/User.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/Windows.js":
/*!***************************************************!*\
  !*** ./containers/Authorization/icons/Windows.js ***!
  \***************************************************/
/*! exports provided: Windows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Windows", function() { return Windows; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function Windows(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '25px' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '25px' : _ref$height,
      restProps = _objectWithoutProperties(_ref, ["width", "height"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: width,
    height: height
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M201.302 49.754l-192 24.939A10.667 10.667 0 000 85.36v149.333c0 5.891 4.776 10.667 10.667 10.667h192c5.891 0 10.667-4.776 10.667-10.667V60.314a10.666 10.666 0 00-3.627-8 10.906 10.906 0 00-8.405-2.56z",
    fill: "#f44336"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M508.374 13.36a10.665 10.665 0 00-8.405-2.667l-256 33.387a10.666 10.666 0 00-9.301 10.667v179.947c0 5.891 4.776 10.667 10.667 10.667h256c5.891 0 10.667-4.776 10.667-10.667V21.36a10.674 10.674 0 00-3.628-8z",
    fill: "#4caf50"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M202.667 266.693h-192C4.776 266.693 0 271.469 0 277.36v149.333a10.667 10.667 0 009.301 10.667l192 25.045c.455.031.911.031 1.365 0 5.891 0 10.667-4.776 10.667-10.667V277.36c.001-5.891-4.775-10.667-10.666-10.667z",
    fill: "#2196f3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M501.334 266.693h-256c-5.891 0-10.667 4.776-10.667 10.667v179.947a10.667 10.667 0 009.301 10.667l256 33.387c.455.031.911.031 1.365 0 5.891 0 10.667-4.776 10.667-10.667V277.36c0-5.891-4.775-10.667-10.666-10.667z",
    fill: "#ffc107"
  }));
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Windows, "Windows", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/icons/Windows.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/Authorization/icons/index.js":
/*!*************************************************!*\
  !*** ./containers/Authorization/icons/index.js ***!
  \*************************************************/
/*! exports provided: Android, Apple, Edge, Firefox, GoogleChrome, InternetExplorer, Opera, Safari, Windows, Tablet, Mobile, Desktop, Success, AddUser, User, SadSmile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Android__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Android */ "./containers/Authorization/icons/Android.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Android", function() { return _Android__WEBPACK_IMPORTED_MODULE_0__["Android"]; });

/* harmony import */ var _Apple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Apple */ "./containers/Authorization/icons/Apple.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Apple", function() { return _Apple__WEBPACK_IMPORTED_MODULE_1__["Apple"]; });

/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edge */ "./containers/Authorization/icons/Edge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Edge", function() { return _Edge__WEBPACK_IMPORTED_MODULE_2__["Edge"]; });

/* harmony import */ var _Firefox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Firefox */ "./containers/Authorization/icons/Firefox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Firefox", function() { return _Firefox__WEBPACK_IMPORTED_MODULE_3__["Firefox"]; });

/* harmony import */ var _GoogleChrome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GoogleChrome */ "./containers/Authorization/icons/GoogleChrome.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleChrome", function() { return _GoogleChrome__WEBPACK_IMPORTED_MODULE_4__["GoogleChrome"]; });

/* harmony import */ var _InternetExplorer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InternetExplorer */ "./containers/Authorization/icons/InternetExplorer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InternetExplorer", function() { return _InternetExplorer__WEBPACK_IMPORTED_MODULE_5__["InternetExplorer"]; });

/* harmony import */ var _Opera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Opera */ "./containers/Authorization/icons/Opera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Opera", function() { return _Opera__WEBPACK_IMPORTED_MODULE_6__["Opera"]; });

/* harmony import */ var _Safari__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Safari */ "./containers/Authorization/icons/Safari.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Safari", function() { return _Safari__WEBPACK_IMPORTED_MODULE_7__["Safari"]; });

/* harmony import */ var _Windows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Windows */ "./containers/Authorization/icons/Windows.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Windows", function() { return _Windows__WEBPACK_IMPORTED_MODULE_8__["Windows"]; });

/* harmony import */ var _Tablet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tablet */ "./containers/Authorization/icons/Tablet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tablet", function() { return _Tablet__WEBPACK_IMPORTED_MODULE_9__["Tablet"]; });

/* harmony import */ var _Mobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Mobile */ "./containers/Authorization/icons/Mobile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mobile", function() { return _Mobile__WEBPACK_IMPORTED_MODULE_10__["Mobile"]; });

/* harmony import */ var _Desktop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Desktop */ "./containers/Authorization/icons/Desktop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Desktop", function() { return _Desktop__WEBPACK_IMPORTED_MODULE_11__["Desktop"]; });

/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Success */ "./containers/Authorization/icons/Success.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return _Success__WEBPACK_IMPORTED_MODULE_12__["Success"]; });

/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AddUser */ "./containers/Authorization/icons/AddUser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return _AddUser__WEBPACK_IMPORTED_MODULE_13__["AddUser"]; });

/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./User */ "./containers/Authorization/icons/User.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_14__["User"]; });

/* harmony import */ var _SadSmile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SadSmile */ "./containers/Authorization/icons/SadSmile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SadSmile", function() { return _SadSmile__WEBPACK_IMPORTED_MODULE_15__["SadSmile"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


















/***/ }),

/***/ "./utils/auth/validation.js":
/*!**********************************!*\
  !*** ./utils/auth/validation.js ***!
  \**********************************/
/*! exports provided: authValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authValidators", function() { return authValidators; });
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "../node_modules/@hapi/joi/dist/joi-browser.min.js");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var authValidators = {
  authData: function authData(_ref) {
    var _emailSchema$validate, _passwordSchema$valid;

    var email = _ref.email,
        password = _ref.password;
    var emailSchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email({
      tlds: false
    }).required().messages({
      'string.email': '"email" must be valid email address',
      'string.empty': '"email" is not allowed to be empty',
      'any.required': '"email" is required'
    });
    var passwordSchema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(8).max(25).required().messages({
      'string.min': '"password" length must be at least 8 characters long',
      'string.empty': '"password" is not allowed to be empty',
      'any.required': '"password" is required'
    });
    var errors = {
      email: (_emailSchema$validate = emailSchema.validate(email).error) === null || _emailSchema$validate === void 0 ? void 0 : _emailSchema$validate.message,
      password: (_passwordSchema$valid = passwordSchema.validate(password).error) === null || _passwordSchema$valid === void 0 ? void 0 : _passwordSchema$valid.message
    };
    var isErrors = errors.email || errors.password;
    return isErrors ? errors : {};
  },
  changePassword: function changePassword(values) {
    var schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().keys({
      oldPassword: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
        'string.empty': '"password" is not allowed to be empty',
        'any.required': '"password" is required'
      }),
      newPassword: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
        'string.empty': '"password" is not allowed to be empty',
        'any.required': '"password" is required'
      }),
      confirmPassword: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().valid(_hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.ref('newPassword')).messages({
        'any.only': 'Passwords must be equal!'
      })
    });

    var _schema$validate = schema.validate(values),
        error = _schema$validate.error;

    var errHappenedInField = error && error.details[0].path[0];

    if (errHappenedInField === 'oldPassword') {
      return {
        oldPassword: error.message
      };
    }

    if (errHappenedInField === 'newPassword') {
      return {
        newPassword: error.message
      };
    }

    if (errHappenedInField === 'confirmPassword') {
      return {
        confirmPassword: error.message
      };
    }

    return {};
  },
  newPassword: function newPassword(values) {
    var schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().keys({
      newPassword: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).required().messages({
        'string.min': '"password" length must be at least 8 characters long',
        'string.empty': '"password" is not allowed to be empty',
        'any.required': '"password" is required'
      }),
      confirmationPassword: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().valid(_hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.ref('newPassword')).messages({
        'any.only': 'Passwords must be equal!'
      })
    });

    var _schema$validate2 = schema.validate(values),
        error = _schema$validate2.error;

    if (error && error.details[0].path[0] === 'newPassword') {
      return {
        newPassword: error.message
      };
    }

    if (error && error.details[0].path[0] === 'confirmationPassword') {
      return {
        confirmationPassword: error.message
      };
    }

    return {};
  },
  verificationCode: function verificationCode(_ref2) {
    var verifyCode = _ref2.verifyCode;
    var schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).max(6).required().messages({
      'string.min': '"verification code" length must be at least 6 characters long',
      'string.max': '"verification code" length must be less than 6 characters long',
      'string.empty': '"verification code" is not allowed to be empty',
      'any.required': '"verification code" is required'
    });

    var _schema$validate3 = schema.validate(verifyCode),
        error = _schema$validate3.error;

    var errors = {};

    if (error) {
      errors.verifyCode = error.message;
    }

    return errors.verifyCode ? errors : {};
  },
  email: function email(values) {
    var schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().keys({
      email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().email({
        tlds: false
      }).required().messages({
        'string.email': '"email" must be valid email address!',
        'string.empty': '"email" is not allowed to be empty',
        'any.required': '"email" is required'
      })
    });

    var _schema$validate4 = schema.validate(values),
        error = _schema$validate4.error;

    var errors = {};

    if (error) {
      errors.email = error.message;
    }

    return errors.email ? errors : {};
  }
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(authValidators, "authValidators", "/home/dr/Work/Temp/ninja-wallet/client/utils/auth/validation.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/fetch_statuses/aux_functions.js":
/*!***********************************************!*\
  !*** ./utils/fetch_statuses/aux_functions.js ***!
  \***********************************************/
/*! exports provided: isSuccessFetchStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSuccessFetchStatus", function() { return isSuccessFetchStatus; });
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/constants */ "./utils/auth/constants.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var isSuccessFetchStatus = function isSuccessFetchStatus(status) {
  return status === _auth_constants__WEBPACK_IMPORTED_MODULE_0__["commonFetchStatuses"].SUCCEEDED;
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(isSuccessFetchStatus, "isSuccessFetchStatus", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/aux_functions.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/fetch_statuses/error_messages.js":
/*!************************************************!*\
  !*** ./utils/fetch_statuses/error_messages.js ***!
  \************************************************/
/*! exports provided: errorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessages", function() { return errorMessages; });
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/constants */ "./utils/auth/constants.js");
var _errorMessages;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var EXPIRED_CONFIRMATION_CODE = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].EXPIRED_CONFIRMATION_CODE,
    EXPIRED_RESTORE_PASSWORD_SESSION = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].EXPIRED_RESTORE_PASSWORD_SESSION,
    INCORRECT_AUTH_DATA = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].INCORRECT_AUTH_DATA,
    INCORRECT_CONFIRMATION_CODE = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].INCORRECT_CONFIRMATION_CODE,
    INCORRECT_OLD_PASSWORD = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].INCORRECT_OLD_PASSWORD,
    INVALID_AUTH_DATA = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].INVALID_AUTH_DATA,
    INVALID_CONFIRMATION_CODE = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].INVALID_CONFIRMATION_CODE,
    LOGIN_ALREADY_USE = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].LOGIN_ALREADY_USE,
    MAIL_PROVIDER_ERROR = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].MAIL_PROVIDER_ERROR,
    PASSWORDS_ARE_EQUAL = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].PASSWORDS_ARE_EQUAL,
    UNEXPECTED_SERVER_ERROR = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].UNEXPECTED_SERVER_ERROR,
    USER_BY_EMAIL_NOT_FOUND = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].USER_BY_EMAIL_NOT_FOUND,
    DOUBLE_AUTHENTICATED_DENIED = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].DOUBLE_AUTHENTICATED_DENIED,
    SIGN_OUT_FROM_ANOTHER_DEVICE = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].SIGN_OUT_FROM_ANOTHER_DEVICE,
    EXPIRED_TOKEN = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].EXPIRED_TOKEN,
    MISSING_TOKEN = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].MISSING_TOKEN,
    INVALID_TOKEN = _auth_constants__WEBPACK_IMPORTED_MODULE_0__["fetchErrorsNames"].INVALID_TOKEN;
var errorMessages = (_errorMessages = {
  getMessages: function getMessages(errorName) {
    var foundError = this[errorName];

    if (errorName && !foundError) {
      return this[UNEXPECTED_SERVER_ERROR];
    }

    return foundError;
  }
}, _defineProperty(_errorMessages, USER_BY_EMAIL_NOT_FOUND, {
  message: 'Not found user by this email',
  toolTip: 'check out email and try again'
}), _defineProperty(_errorMessages, LOGIN_ALREADY_USE, {
  message: 'This email has already registered',
  toolTip: 'If this email is your, you can use "forget password"'
}), _defineProperty(_errorMessages, INCORRECT_AUTH_DATA, {
  message: 'Passed incorrect email or password',
  toolTip: 'Check you data and try again'
}), _defineProperty(_errorMessages, MAIL_PROVIDER_ERROR, {
  message: 'Unfortunately, occurred mail provider error',
  toolTip: 'we are fixing it...'
}), _defineProperty(_errorMessages, INCORRECT_CONFIRMATION_CODE, {
  message: 'Passed confirmation code is incorrect',
  toolTip: 'Try again or click "resend code" to get new one'
}), _defineProperty(_errorMessages, INVALID_CONFIRMATION_CODE, {
  message: 'Passed invalid confirmation code',
  toolTip: 'Code must have 6 characters'
}), _defineProperty(_errorMessages, EXPIRED_CONFIRMATION_CODE, {
  message: 'Confirmation code was expired',
  toolTip: 'To get new code jus click "resend code"'
}), _defineProperty(_errorMessages, INVALID_AUTH_DATA, {
  message: 'You passed invalid authentication date',
  toolTip: '"email" must be a valid email, password must have 8 characters'
}), _defineProperty(_errorMessages, UNEXPECTED_SERVER_ERROR, {
  message: 'Our team is apologizing, we have unexpected error',
  toolTip: 'please try one more time'
}), _defineProperty(_errorMessages, INCORRECT_OLD_PASSWORD, {
  message: '"old password" is incorrect'
}), _defineProperty(_errorMessages, EXPIRED_RESTORE_PASSWORD_SESSION, {
  message: 'password recovery session ended',
  toolTip: 'session lasts 10 minutes'
}), _defineProperty(_errorMessages, PASSWORDS_ARE_EQUAL, {
  message: 'New password must differ from old password'
}), _defineProperty(_errorMessages, DOUBLE_AUTHENTICATED_DENIED, {
  message: 'Account owner did not confirm this sign in!'
}), _defineProperty(_errorMessages, SIGN_OUT_FROM_ANOTHER_DEVICE, {
  message: 'Account owner has exited from this device!'
}), _errorMessages);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EXPIRED_CONFIRMATION_CODE, "EXPIRED_CONFIRMATION_CODE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(EXPIRED_RESTORE_PASSWORD_SESSION, "EXPIRED_RESTORE_PASSWORD_SESSION", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(INCORRECT_AUTH_DATA, "INCORRECT_AUTH_DATA", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(INCORRECT_CONFIRMATION_CODE, "INCORRECT_CONFIRMATION_CODE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(INCORRECT_OLD_PASSWORD, "INCORRECT_OLD_PASSWORD", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(INVALID_AUTH_DATA, "INVALID_AUTH_DATA", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(INVALID_CONFIRMATION_CODE, "INVALID_CONFIRMATION_CODE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(LOGIN_ALREADY_USE, "LOGIN_ALREADY_USE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(MAIL_PROVIDER_ERROR, "MAIL_PROVIDER_ERROR", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(PASSWORDS_ARE_EQUAL, "PASSWORDS_ARE_EQUAL", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(UNEXPECTED_SERVER_ERROR, "UNEXPECTED_SERVER_ERROR", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(USER_BY_EMAIL_NOT_FOUND, "USER_BY_EMAIL_NOT_FOUND", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(DOUBLE_AUTHENTICATED_DENIED, "DOUBLE_AUTHENTICATED_DENIED", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(SIGN_OUT_FROM_ANOTHER_DEVICE, "SIGN_OUT_FROM_ANOTHER_DEVICE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(EXPIRED_TOKEN, "EXPIRED_TOKEN", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(MISSING_TOKEN, "MISSING_TOKEN", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(INVALID_TOKEN, "INVALID_TOKEN", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
  reactHotLoader.register(errorMessages, "errorMessages", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/error_messages.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/fetch_statuses/success_message.js":
/*!*************************************************!*\
  !*** ./utils/fetch_statuses/success_message.js ***!
  \*************************************************/
/*! exports provided: successMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successMessages", function() { return successMessages; });
/* harmony import */ var _auth_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/names */ "./utils/auth/names.js");
/* harmony import */ var _auth_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/constants */ "./utils/auth/constants.js");
/* harmony import */ var _settings_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/names */ "./utils/settings/names.js");
var _messages;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var CREATE_NEW_PASSWORD = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].CREATE_NEW_PASSWORD,
    GET_REST_PASSWORD_CREDENTIALS = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].GET_REST_PASSWORD_CREDENTIALS,
    RESEND_REST_PASSWORD_CREDENTIALS = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].RESEND_REST_PASSWORD_CREDENTIALS,
    SIGN_IN = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].SIGN_IN,
    SIGN_UP = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].SIGN_UP,
    VERIFY_REST_REST_PASSWORD_CONFIRM_CODE = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].VERIFY_REST_REST_PASSWORD_CONFIRM_CODE,
    NOTIFY_ABOUT_SIGN_IN = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].NOTIFY_ABOUT_SIGN_IN,
    DOUBLE_AUTHENTICATE = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].DOUBLE_AUTHENTICATE,
    CHECK_AUTH = _auth_names__WEBPACK_IMPORTED_MODULE_0__["authFetchStatusNames"].CHECK_AUTH;
var RESEND_VERIFY_EMAIL_CODE = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].RESEND_VERIFY_EMAIL_CODE,
    SEND_VERIFY_EMAIL_CODE = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].SEND_VERIFY_EMAIL_CODE,
    CHANGE_EMAIL = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].CHANGE_EMAIL,
    VERIFY_EMAIL = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].VERIFY_EMAIL,
    CHANGE_PASSWORD = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].CHANGE_PASSWORD,
    ACCOUNT_SETTINGS = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].ACCOUNT_SETTINGS,
    NOTIFY_ABOUT_SIGN_IN_ON = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].NOTIFY_ABOUT_SIGN_IN_ON,
    NOTIFY_ABOUT_SIGN_IN_OFF = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].NOTIFY_ABOUT_SIGN_IN_OFF,
    DOUBLE_AUTHENTICATE_ON = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].DOUBLE_AUTHENTICATE_ON,
    DOUBLE_AUTHENTICATE_OFF = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].DOUBLE_AUTHENTICATE_OFF,
    GETTING_VERIFICATION_CODE_FOR_BOT = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].GETTING_VERIFICATION_CODE_FOR_BOT,
    DISCONNECT_BOT = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].DISCONNECT_BOT,
    SIGN_OUT_DEVICE_DEVICE_BY_ID = _settings_names__WEBPACK_IMPORTED_MODULE_2__["settingsFetchStatusNames"].SIGN_OUT_DEVICE_DEVICE_BY_ID;
var successMessages = {
  getSuccessMessage: function getSuccessMessage(allFetchStatuses, reducerName) {
    var _this = this;

    var message = '';
    var privateFetchStatus = allFetchStatuses[reducerName];
    var keys = Object.keys(this.messages);
    keys.forEach(function (el) {
      if (privateFetchStatus[el] === _auth_constants__WEBPACK_IMPORTED_MODULE_1__["commonFetchStatuses"].SUCCEEDED) {
        message = _this.messages[el];
      }
    });
    return message;
  },
  messages: (_messages = {}, _defineProperty(_messages, CHECK_AUTH, 'Success login to system'), _defineProperty(_messages, CHANGE_EMAIL, 'Email has changed successfully'), _defineProperty(_messages, CHANGE_PASSWORD, 'Password has changed successfully'), _defineProperty(_messages, CREATE_NEW_PASSWORD, 'Password has restored successfully'), _defineProperty(_messages, GET_REST_PASSWORD_CREDENTIALS, 'Verification code was sent to your email'), _defineProperty(_messages, RESEND_REST_PASSWORD_CREDENTIALS, 'Verification code was sent to your email repeatedly'), _defineProperty(_messages, RESEND_VERIFY_EMAIL_CODE, 'Confirmation code was sent to your email repeatedly'), _defineProperty(_messages, SEND_VERIFY_EMAIL_CODE, 'Confirmation code was sent to your email'), _defineProperty(_messages, SIGN_IN, 'Successful sign in to system'), _defineProperty(_messages, SIGN_OUT_DEVICE_DEVICE_BY_ID, 'Successfully sign out from device'), _defineProperty(_messages, SIGN_UP, 'Successful sign up to system'), _defineProperty(_messages, VERIFY_EMAIL, 'Email has verified successfully'), _defineProperty(_messages, VERIFY_REST_REST_PASSWORD_CONFIRM_CODE, 'Confirmation code was beed succeeded verified'), _defineProperty(_messages, ACCOUNT_SETTINGS, 'Settings received successfully'), _defineProperty(_messages, NOTIFY_ABOUT_SIGN_IN, 'Notification for every new sign in turn on'), _defineProperty(_messages, DOUBLE_AUTHENTICATE, 'Double_authenticate turn on'), _defineProperty(_messages, GETTING_VERIFICATION_CODE_FOR_BOT, 'Code for bot verification received'), _defineProperty(_messages, DISCONNECT_BOT, 'Bot was disconnected from your account'), _defineProperty(_messages, NOTIFY_ABOUT_SIGN_IN_ON, 'Notification for every new sign in TURN ON'), _defineProperty(_messages, NOTIFY_ABOUT_SIGN_IN_OFF, 'Notification for every new sign in TURN OFF'), _defineProperty(_messages, DOUBLE_AUTHENTICATE_ON, 'Double authenticate TURN ON'), _defineProperty(_messages, DOUBLE_AUTHENTICATE_OFF, 'Double authenticate TURN OFF '), _messages)
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CREATE_NEW_PASSWORD, "CREATE_NEW_PASSWORD", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(GET_REST_PASSWORD_CREDENTIALS, "GET_REST_PASSWORD_CREDENTIALS", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(RESEND_REST_PASSWORD_CREDENTIALS, "RESEND_REST_PASSWORD_CREDENTIALS", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(SIGN_IN, "SIGN_IN", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(SIGN_UP, "SIGN_UP", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(VERIFY_REST_REST_PASSWORD_CONFIRM_CODE, "VERIFY_REST_REST_PASSWORD_CONFIRM_CODE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(NOTIFY_ABOUT_SIGN_IN, "NOTIFY_ABOUT_SIGN_IN", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(DOUBLE_AUTHENTICATE, "DOUBLE_AUTHENTICATE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(CHECK_AUTH, "CHECK_AUTH", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(RESEND_VERIFY_EMAIL_CODE, "RESEND_VERIFY_EMAIL_CODE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(SEND_VERIFY_EMAIL_CODE, "SEND_VERIFY_EMAIL_CODE", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(CHANGE_EMAIL, "CHANGE_EMAIL", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(VERIFY_EMAIL, "VERIFY_EMAIL", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(CHANGE_PASSWORD, "CHANGE_PASSWORD", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(ACCOUNT_SETTINGS, "ACCOUNT_SETTINGS", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(NOTIFY_ABOUT_SIGN_IN_ON, "NOTIFY_ABOUT_SIGN_IN_ON", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(NOTIFY_ABOUT_SIGN_IN_OFF, "NOTIFY_ABOUT_SIGN_IN_OFF", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(DOUBLE_AUTHENTICATE_ON, "DOUBLE_AUTHENTICATE_ON", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(DOUBLE_AUTHENTICATE_OFF, "DOUBLE_AUTHENTICATE_OFF", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(GETTING_VERIFICATION_CODE_FOR_BOT, "GETTING_VERIFICATION_CODE_FOR_BOT", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(DISCONNECT_BOT, "DISCONNECT_BOT", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(SIGN_OUT_DEVICE_DEVICE_BY_ID, "SIGN_OUT_DEVICE_DEVICE_BY_ID", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
  reactHotLoader.register(successMessages, "successMessages", "/home/dr/Work/Temp/ninja-wallet/client/utils/fetch_statuses/success_message.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BUEkvc2V0dGluZ3MvY29tbW9uLmpzIiwid2VicGFjazovLy8uL0FQSS9zZXR0aW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9BUEkvc2V0dGluZ3Mvc2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9zZXR0aW5ncy91c2VyX2VtYWlsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL2ZldGNoX3N0YXR1c19zbmFja2JhcnMvRmV0Y2hTdGF0dXNTbmFja0JhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vZmV0Y2hfc3RhdHVzX3NuYWNrYmFycy9jb21wb25lbnRzL0Vycm9yU25hY2tiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vZmV0Y2hfc3RhdHVzX3NuYWNrYmFycy9jb21wb25lbnRzL0xvYWRpbmdTbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9mZXRjaF9zdGF0dXNfc25hY2tiYXJzL2NvbXBvbmVudHMvU3VjY2Vzc1NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL2ZldGNoX3N0YXR1c19zbmFja2JhcnMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9jb21tb24vQXV0aEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9jb21tb24vQXV0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2NvbXBvbmVudHMvY29tbW9uL0F1dGhJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9jb21tb24vRGVzY3JpcHRpb25JY29uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9jb21wb25lbnRzL2NvbW1vbi9Eb25lLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9jb21wb25lbnRzL2NvbW1vbi9Vc2VyRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2NvbXBvbmVudHMvY29tbW9uL1dhcm5TbmFja2Jhci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9jb21tb24vYXV0aF9zdGVwcGVyL0F1dGhTdGVwcGVyLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9jb21wb25lbnRzL2NvbW1vbi9hdXRoX3N0ZXBwZXIvY29tcG9uZW50cy9Db2xvcmxpYkNvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9jb21tb24vYXV0aF9zdGVwcGVyL2NvbXBvbmVudHMvQ29sb3JsaWJTdGVwSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9jb21tb24vYXV0aF9zdGVwcGVyL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2NvbXBvbmVudHMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9jb21wb25lbnRzL2NvbW1vbi92ZXJpZnlfY29kZS9WZXJpZnlDb2RlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9jb21wb25lbnRzL2NvbW1vbi92ZXJpZnlfY29kZS9jb21wb25lbnRzL1NraXBCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2NvbXBvbmVudHMvcmVzdG9yZV9wYXNzd29yZC9SZXN0b3JlUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2NvbXBvbmVudHMvcmVzdG9yZV9wYXNzd29yZC9jb21wb25lbnRzL05ld1Bhc3N3b3JkLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9jb21wb25lbnRzL3Jlc3RvcmVfcGFzc3dvcmQvY29tcG9uZW50cy9SZXN0b3JlU2Vzc2lvbkVuZGVkLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9jb21wb25lbnRzL3Jlc3RvcmVfcGFzc3dvcmQvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9zaWduX2luL1NpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9zaWduX3VwL1NpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vY29tcG9uZW50cy9zaWduX3VwL2NvbXBvbmVudHMvU2lnblVwRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvQWRkVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvQW5kcm9pZC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvQXBwbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2ljb25zL0Rlc2t0b3AuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2ljb25zL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2ljb25zL0ZpcmVmb3guanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2ljb25zL0dvb2dsZUNocm9tZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvSW50ZXJuZXRFeHBsb3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvTW9iaWxlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9pY29ucy9PcGVyYS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvU2FkU21pbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BdXRob3JpemF0aW9uL2ljb25zL1NhZmFyaS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvU3VjY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vaWNvbnMvVGFibGV0LmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9pY29ucy9Vc2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9pY29ucy9XaW5kb3dzLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQXV0aG9yaXphdGlvbi9pY29ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9hdXRoL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZmV0Y2hfc3RhdHVzZXMvYXV4X2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaF9zdGF0dXNlcy9lcnJvcl9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaF9zdGF0dXNlcy9zdWNjZXNzX21lc3NhZ2UuanMiXSwibmFtZXMiOlsiY29tbW9uU2V0dGluZ3NBUEkiLCJnZXRBY2NvdW50U2V0dGluZ3MiLCJheGlvc0luc3RhbmNlIiwiZ2V0Iiwic2VjdXJpdHlTZXR0aW5nc0FQSSIsInVwZGF0ZVNlY3VyaXR5U2V0dGluZ3MiLCJvcHRpb24iLCJ2YWx1ZSIsInBhdGNoIiwiZ2V0VmVyaWZpY2F0aW9uQ29kZUZvckJvdCIsImRpc2Nvbm5lY3RUZWxlZ3JhbUJvdCIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsIkxPQURJTkciLCJjb21tb25GZXRjaFN0YXR1c2VzIiwiU1VDQ0VFREVEIiwiRkFJTEVEIiwiSURMRSIsIlZFUklGWV9FTUFJTCIsInNldHRpbmdzRmV0Y2hTdGF0dXNOYW1lcyIsIlJFU0VORF9WRVJJRllfRU1BSUxfQ09ERSIsIlNFTkRfVkVSSUZZX0VNQUlMX0NPREUiLCJDSEFOR0VfRU1BSUwiLCJ2ZXJpZmljYXRpb25FbWFpbCIsImNvbmZpcm1Db2RlIiwiZGlzcGF0Y2giLCJzZXRGZXRjaFN0YXR1cyIsImZldGNoU3RhdHVzQ3JlYXRvciIsInVzZXJFbWFpbEFQSSIsInR5cGUiLCJFTUFJTF9WRVJJRklDQVRJT04iLCJwYXlsb2FkIiwiaXNWZXJpZmljYXRpb24iLCJzZXRQcml2YXRlRmV0Y2hTdGF0dXMiLCJzZXRGZXRjaEVycm9yIiwicmVzcG9uc2UiLCJyZXNlbmRWZXJpZnlFbWFpbENvZGUiLCJzZW5kVmVyaWZ5RW1haWxDb2RlIiwiY2hhbmdlRW1haWwiLCJuZXdFbWFpbCIsIlVQREFURV9TRUNVUklUWV9TRVRUSU5HUyIsImRhdGEiLCJGZXRjaFN0YXR1c1NuYWNrQmFycyIsInJlZHVjZXJOYW1lIiwiZmV0Y2hFcnJvciIsInVzZVNlbGVjdG9yIiwiZ2V0RmV0Y2hFcnJvciIsImZldGNoU3RhdHVzIiwiZ2V0Q29tbW9uRmV0Y2hTdGF0dXMiLCJhbGxGZXRjaFN0YXR1c2VzIiwiZ2V0QWxsUHJpdmF0ZUZldGNoU3RhdHVzZXMiLCJFcnJvclNuYWNrYmFyIiwidXNlRGlzcGF0Y2giLCJlcnJvck1lc3NhZ2VzIiwiZ2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiY2xvc2VFcnJvckhhbmRsZXIiLCJkZWxheXMiLCJCRUZPUkVfSElERV9FUlJPUl9TTkFDS0JBUiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkxvYWRpbmdTbmFja2JhciIsInN0eWxlcyIsInVzZVN0eWxlcyIsIkxvYWRpbmdNZXNzYWdlIiwibG9hZGluZ01lc3NhZ2VXcmFwcGVyIiwibG9hZGluZ0NpcmNsZSIsImlzTG9hZGluZyIsInNuYWNrQmFyIiwicm9vdCIsImFsZXJ0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiY29sb3IiLCJmb250U2l6ZSIsIlN1Y2Nlc3NTbmFja2JhciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzbm93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwic2V0TWVzc2FnZSIsImNsb3NlTWVzc2FnZUhhbmRsZXIiLCJ1c2VFZmZlY3QiLCJtZXNzYWdlVGV4dCIsInN1Y2Nlc3NNZXNzYWdlcyIsImdldFN1Y2Nlc3NNZXNzYWdlIiwiQkVGT1JFX0hJREVfU1VDQ0VTU19TTkFDS0JBUiIsIkF1dGhCdXR0b24iLCJ0ZXh0IiwicmVzdCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImdldENvbnRyYXN0VGV4dCIsImJveFNoYWRvdyIsIkF1dGhGb3JtIiwiaW5pdGlhbFZhbHVlcyIsInZhbGlkYXRlIiwiY2hpbGRyZW4iLCJzdWJtaXRIYW5kbGVyIiwidmFsdWVzIiwiZm9ybSIsImZsZXhEaXJlY3Rpb24iLCJBdXRoSW5wdXQiLCJwcm9wcyIsInVzZUZpZWxkIiwiZmllbGQiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwiaXNWaXNpYmxlUGFzc3dvcmQiLCJzZXRQYXNzd29yZFZpc2liaWxpdHkiLCJpc0ZpZWxkVXNlZCIsInNldEZpZWxkVXNlZFN0YXR1cyIsImhhbmRsZVZpc2liaWxpdHlTd2l0Y2hlciIsImlzVmlzaWJsZUVycm9yIiwiQm9vbGVhbiIsImlucHV0V3JhcHBlciIsInRleHRGaWVsZCIsInZpc2libGVTd2l0Y2hlciIsIm1hcmdpbkJvdHRvbSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY3Vyc29yIiwib3V0bGluZSIsInRyYW5zaXRpb24iLCJpY29uIiwibGVmdCIsInRlc3QiLCJEZXNjcmlwdGlvbkljb24iLCJJY29uIiwiaGVpZ2h0IiwiaWNvbldyYXBwZXIiLCJib3JkZXJSYWRpdXMiLCJib3hTaXppbmciLCJEb25lIiwibGlua1RleHQiLCJzZXRBdXRoU3RhdHVzIiwiYm94IiwibGluayIsInRleHRBbGlnbiIsImp1c3RpZnlDb250ZW50IiwidGV4dERlY29yYXRpb24iLCJVc2VyRW1haWwiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwiZW1haWwiLCJhdXRvRm9jdXMiLCJXYXJuU25hY2tiYXIiLCJzaG93V2FybiIsInNldFNob3dXYXJuIiwiQXV0aFN0ZXBwZXIiLCJzdGVwcyIsImFjdGl2ZVN0ZXAiLCJpY29ucyIsIkNvbG9ybGliU3RlcEljb24iLCJhY3RpdmUiLCJjb21wbGV0ZWQiLCJjbHN4IiwiU3RyaW5nIiwic3RlcHBlclJvb3QiLCJzdGVwcGVyIiwibWFwIiwibGFiZWwiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJDb2xvcmxpYkNvbm5lY3RvciIsIndpdGhTdHlsZXMiLCJhbHRlcm5hdGl2ZUxhYmVsIiwibGluZSIsIlN0ZXBDb25uZWN0b3IiLCJ1c2VDb2xvcmxpYlN0ZXBJY29uU3R5bGVzIiwiY2xhc3NlcyIsIlZlcmlmeUNvZGUiLCJyZXNlbmRDb2RlSGFuZGxlciIsInNraXBTdGVwIiwiaXNFbWFpbEVycm9yIiwiYXV0b2ZvY3VzIiwic2V0VmlzaWJsZVdhcm5NZXNzYWdlIiwiaXNWaXNpYmxlV2Fybk1lc3NhZ2UiLCJza2lwSGFuZGxlciIsInN1Y2Nlc3NSZWdpc3RyYXRpb24iLCJtYWlsUHJvdmlkZXJFcnJvciIsInZlcmlmeUNvZGUiLCJyZXNlbmRDb2RlQnRuIiwic2tpcEJ0biIsInN1Y2Nlc3MiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwib3BhY2l0eSIsIlNraXBCdXR0b24iLCJoYW5kbGVyIiwic2hvd1dhcm5pbmdNZXNzYWdlIiwiYnV0dG9uVGV4dCIsIndhcm5UZXh0IiwiaXNWaXNpYmxlV2FybmluZ01lc3NhZ2UiLCJzZXRWaXNpYmxlV2FybmluZ01lc3NhZ2UiLCJ3YXJuTWVzc2FnZSIsIndhcm5pbmciLCJFWFBJUkVEX1JFU1RPUkVfUEFTU1dPUkRfU0VTU0lPTiIsImZldGNoRXJyb3JzTmFtZXMiLCJHRVRfUkVTVF9QQVNTV09SRF9DUkVERU5USUFMUyIsImF1dGhGZXRjaFN0YXR1c05hbWVzIiwiQ1JFQVRFX05FV19QQVNTV09SRCIsIlZFUklGWV9SRVNUX1JFU1RfUEFTU1dPUkRfQ09ORklSTV9DT0RFIiwiUmVzdG9yZVBhc3N3b3JkIiwic2V0QWN0aXZlU3RlcCIsImlzRXhwaXJlZFJlc3RTZXNzaW9uIiwic2V0UmVzdFNlc3Npb25FeHBpcmVkU3RhdHVzIiwiZ2V0UmVzdG9yZVBhc3N3b3JkQ3JlZGVudGlhbHMiLCJ0b2tlbiIsImFsbG93Q2hhbmdlUGFzc3dvcmQiLCJnZXRDcmVkZW50aWFsc0ZldGNoU3RhdHVzRlMiLCJnZXRBdXRoUHJpdmF0ZUZTIiwiY3JlYXRlTmV3UGFzc3dvcmRGUyIsInZlcmlmeVJlc3RQYXNzd29yZENvbmZpcm1Db2RlRlMiLCJyZXNlbmRSZXN0b3JlUGFzc3dvcmRDb2RlIiwicmVxdWVzdFZlcmlmeUNvZGVIYW5kbGVyIiwicmVxdWVzdFZlcmlmeSIsInZlcmlmeUNvZGVIYW5kbGVyIiwidmVyaWZpY2F0aW9uQ29kZSIsIm5ld1Bhc3N3b3JkSGFuZGxlciIsImNvbmZpcm1hdGlvblBhc3N3b3JkIiwiY3JlYXRlTmV3UGFzc3dvcmQiLCJoYW5kbGVSZXNldCIsInJlc2V0UmVzdG9yZVNlc3Npb24iLCJpc1N1Y2Nlc3NGZXRjaFN0YXR1cyIsInN0ZXBwZXJJY29ucyIsImF1dGhWYWxpZGF0b3JzIiwiYnV0dG9uc1dyYXBwZXIiLCJOZXdQYXNzd29yZCIsIlJlc3RvcmVTZXNzaW9uRW5kZWQiLCJ3cmFwcGVyIiwiU2FkU21pbGUiLCJsaW5rc1dyYXBwZXIiLCJTaWduSW4iLCJ1c2VIaXN0b3J5IiwicHVzaCIsInNpZ25JbkZTIiwiU0lHTl9JTiIsInBhc3N3b3JkIiwic2lnbkluIiwic2V0VGltZW91dCIsIkFGVEVSX1NJR05fSU4iLCJVc2VyIiwiYXV0aERhdGEiLCJzZXJ2aWNlQm94IiwiU0lHTl9VUCIsIlNpZ25VcCIsIm5leHRTdGVwIiwicHJldiIsInNpZ25VcEZTIiwidmVyaWZ5RW1haWxGUyIsImdldEVtYWlsUHJvdmlkZXJFcnJvciIsInNpZ25VcEhhbmRsZXIiLCJzaWduVXAiLCJ2ZXJpZnlFbWFpbEhhbmRsZXIiLCJpbnZva2VBZnRlckRlbGF5IiwiQkVUV0VFTl9TVEVQUyIsIlNpZ25VcEZvcm0iLCJBZGRVc2VyIiwiQW5kcm9pZCIsInJlc3RQcm9wcyIsIkFwcGxlIiwiRGVza3RvcCIsIkVkZ2UiLCJGaXJlZm94IiwiR29vZ2xlQ2hyb21lIiwiSW50ZXJuZXRFeHBsb3JlciIsIk1vYmlsZSIsIk9wZXJhIiwiU2FmYXJpIiwiU3VjY2VzcyIsIlRhYmxldCIsIldpbmRvd3MiLCJlbWFpbFNjaGVtYSIsIkpvaSIsInN0cmluZyIsInRsZHMiLCJyZXF1aXJlZCIsIm1lc3NhZ2VzIiwicGFzc3dvcmRTY2hlbWEiLCJtaW4iLCJtYXgiLCJlcnJvcnMiLCJpc0Vycm9ycyIsInNjaGVtYSIsIm9iamVjdCIsImtleXMiLCJ2YWxpZCIsInJlZiIsImVyckhhcHBlbmVkSW5GaWVsZCIsImRldGFpbHMiLCJwYXRoIiwic3RhdHVzIiwiRVhQSVJFRF9DT05GSVJNQVRJT05fQ09ERSIsIklOQ09SUkVDVF9BVVRIX0RBVEEiLCJJTkNPUlJFQ1RfQ09ORklSTUFUSU9OX0NPREUiLCJJTkNPUlJFQ1RfT0xEX1BBU1NXT1JEIiwiSU5WQUxJRF9BVVRIX0RBVEEiLCJJTlZBTElEX0NPTkZJUk1BVElPTl9DT0RFIiwiTE9HSU5fQUxSRUFEWV9VU0UiLCJNQUlMX1BST1ZJREVSX0VSUk9SIiwiUEFTU1dPUkRTX0FSRV9FUVVBTCIsIlVORVhQRUNURURfU0VSVkVSX0VSUk9SIiwiVVNFUl9CWV9FTUFJTF9OT1RfRk9VTkQiLCJET1VCTEVfQVVUSEVOVElDQVRFRF9ERU5JRUQiLCJTSUdOX09VVF9GUk9NX0FOT1RIRVJfREVWSUNFIiwiRVhQSVJFRF9UT0tFTiIsIk1JU1NJTkdfVE9LRU4iLCJJTlZBTElEX1RPS0VOIiwiZXJyb3JOYW1lIiwiZm91bmRFcnJvciIsInRvb2xUaXAiLCJSRVNFTkRfUkVTVF9QQVNTV09SRF9DUkVERU5USUFMUyIsIk5PVElGWV9BQk9VVF9TSUdOX0lOIiwiRE9VQkxFX0FVVEhFTlRJQ0FURSIsIkNIRUNLX0FVVEgiLCJDSEFOR0VfUEFTU1dPUkQiLCJBQ0NPVU5UX1NFVFRJTkdTIiwiTk9USUZZX0FCT1VUX1NJR05fSU5fT04iLCJOT1RJRllfQUJPVVRfU0lHTl9JTl9PRkYiLCJET1VCTEVfQVVUSEVOVElDQVRFX09OIiwiRE9VQkxFX0FVVEhFTlRJQ0FURV9PRkYiLCJHRVRUSU5HX1ZFUklGSUNBVElPTl9DT0RFX0ZPUl9CT1QiLCJESVNDT05ORUNUX0JPVCIsIlNJR05fT1VUX0RFVklDRV9ERVZJQ0VfQllfSUQiLCJwcml2YXRlRmV0Y2hTdGF0dXMiLCJPYmplY3QiLCJmb3JFYWNoIiwiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGlCQUFpQixHQUFHO0FBQy9CQyxvQkFBa0IsRUFBRSw4QkFBTTtBQUN4QixXQUFPQywyREFBYSxDQUFDQyxHQUFkLENBQWtCLGVBQWxCLENBQVA7QUFDRDtBQUg4QixDQUExQjs7Ozs7Ozs7OzswQkFBTUgsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QnNCLDZDQXZCdEIsOEJBd0JMQyxzQkF4QkssRUF3Qm9CLDZCQXhCcEIsOEJBeUJMQyx1QkF6QkssRUF5QnFCLCtCQXpCckI7QUFkcUIsQ0FBeEI7Ozs7Ozs7Ozs7MEJBM0JMeEgsbUI7MEJBQ0FGLDZCOzBCQUNBaUgsZ0M7MEJBQ0EzRSxPOzBCQUNBUSxPOzBCQUNBM0Msc0M7MEJBQ0ErRyxvQjswQkFDQUMsbUI7MEJBQ0FDLFU7MEJBSUFwVCx3QjswQkFDQUMsc0I7MEJBQ0FDLFk7MEJBQ0FKLFk7MEJBQ0F1VCxlOzBCQUNBQyxnQjswQkFDQUMsdUI7MEJBQ0FDLHdCOzBCQUNBQyxzQjswQkFDQUMsdUI7MEJBQ0FDLGlDOzBCQUNBQyxjOzBCQUNBQyw0QjswQkFHV3hQLGUiLCJmaWxlIjoiMi5jbGllbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5cbmV4cG9ydCBjb25zdCBjb21tb25TZXR0aW5nc0FQSSA9IHtcbiAgZ2V0QWNjb3VudFNldHRpbmdzOiAoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UuZ2V0KCcvYXBpL3NldHRpbmdzJyk7XG4gIH0sXG59O1xuIiwiZXhwb3J0IHsgY29tbW9uU2V0dGluZ3NBUEkgfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgeyBzZWN1cml0eVNldHRpbmdzQVBJIH0gZnJvbSAnLi9zZWN1cml0eSc7XG5leHBvcnQgeyB1c2VyRW1haWxBUEkgfSBmcm9tICcuL3VzZXJfZW1haWwnO1xuIiwiaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9heGlvcyc7XG5cbmV4cG9ydCBjb25zdCBzZWN1cml0eVNldHRpbmdzQVBJID0ge1xuICBnZXRBY2NvdW50U2V0dGluZ3M6ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvc2V0dGluZ3MnKTtcbiAgfSxcblxuICB1cGRhdGVTZWN1cml0eVNldHRpbmdzOiAob3B0aW9uLCB2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBheGlvc0luc3RhbmNlLnBhdGNoKCcvYXBpL3NldHRpbmdzL3NlY3VyaXR5JywgeyBvcHRpb24sIHZhbHVlIH0pO1xuICB9LFxuXG4gIGdldFZlcmlmaWNhdGlvbkNvZGVGb3JCb3Q6ICgpID0+IHtcbiAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvc2V0dGluZ3Mvc2VjdXJpdHkvYm90L2dldC12ZXJpZmljYXRpb24tY29kZScpO1xuICB9LFxuXG4gIGRpc2Nvbm5lY3RUZWxlZ3JhbUJvdDogKCkgPT4ge1xuICAgIHJldHVybiBheGlvc0luc3RhbmNlLmRlbGV0ZSgnL2FwaS9zZXR0aW5ncy9zZWN1cml0eS9ib3QvZGlzY29ubmVjdCcpO1xuICB9LFxuXG4gIGNoYW5nZVBhc3N3b3JkOiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpID0+IHtcbiAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5wYXRjaCgnL2FwaS9zZXR0aW5ncy9zZWN1cml0eS9jaGFuZ2UtcGFzc3dvcmQnLCB7XG4gICAgICBvbGRQYXNzd29yZCxcbiAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICAgY29uZmlybVBhc3N3b3JkLFxuICAgIH0pO1xuICB9LFxufTtcbiIsImltcG9ydCB7IHVzZXJFbWFpbEFQSSB9IGZyb20gJy4uLy4uL0FQSS9zZXR0aW5ncyc7XG5pbXBvcnQgeyBjb21tb25GZXRjaFN0YXR1c2VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXV0aC9jb25zdGFudHMnO1xuaW1wb3J0IHsgc2V0dGluZ3NGZXRjaFN0YXR1c05hbWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0dGluZ3MvbmFtZXMnO1xuaW1wb3J0IHsgRU1BSUxfVkVSSUZJQ0FUSU9OIH0gZnJvbSAnLi4vdHlwZXMvYXV0aCc7XG5pbXBvcnQgeyBVUERBVEVfU0VDVVJJVFlfU0VUVElOR1MgfSBmcm9tICcuLi90eXBlcy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBmZXRjaFN0YXR1c0NyZWF0b3IsIHNldFByaXZhdGVGZXRjaFN0YXR1cyB9IGZyb20gJy4uL2ZldGNoX3N0YXR1c2VzJztcbmltcG9ydCB7IHNldEZldGNoRXJyb3IgfSBmcm9tICcuLi9mZXRjaF9zdGF0dXNlcyc7XG5cbmNvbnN0IHsgTE9BRElORywgU1VDQ0VFREVELCBGQUlMRUQsIElETEUgfSA9IGNvbW1vbkZldGNoU3RhdHVzZXM7XG5jb25zdCB7XG4gIFZFUklGWV9FTUFJTCxcbiAgUkVTRU5EX1ZFUklGWV9FTUFJTF9DT0RFLFxuICBTRU5EX1ZFUklGWV9FTUFJTF9DT0RFLFxuICBDSEFOR0VfRU1BSUwsXG59ID0gc2V0dGluZ3NGZXRjaFN0YXR1c05hbWVzO1xuXG5leHBvcnQgY29uc3QgdmVyaWZpY2F0aW9uRW1haWwgPSAoY29uZmlybUNvZGUpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICBjb25zdCBzZXRGZXRjaFN0YXR1cyA9IGZldGNoU3RhdHVzQ3JlYXRvcignc2V0dGluZ3MnKShWRVJJRllfRU1BSUwsIGRpc3BhdGNoKTtcblxuICB0cnkge1xuICAgIHNldEZldGNoU3RhdHVzKExPQURJTkcpO1xuICAgIGF3YWl0IHVzZXJFbWFpbEFQSS52ZXJpZmljYXRpb25FbWFpbChjb25maXJtQ29kZSk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBFTUFJTF9WRVJJRklDQVRJT04sIHBheWxvYWQ6IHsgaXNWZXJpZmljYXRpb246IHRydWUgfSB9KTtcbiAgICBzZXRQcml2YXRlRmV0Y2hTdGF0dXMoJ2F1dGhvcml6YXRpb24nKShWRVJJRllfRU1BSUwsIGRpc3BhdGNoKShTVUNDRUVERUQpO1xuICAgIHNldEZldGNoU3RhdHVzKFNVQ0NFRURFRCk7XG4gICAgc2V0RmV0Y2hFcnJvcihudWxsLCBkaXNwYXRjaCk7XG4gIH0gY2F0Y2ggKHsgcmVzcG9uc2UgfSkge1xuICAgIHNldEZldGNoU3RhdHVzKEZBSUxFRCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBFTUFJTF9WRVJJRklDQVRJT04sIHBheWxvYWQ6IGZhbHNlIH0pO1xuICAgIHNldFByaXZhdGVGZXRjaFN0YXR1cygnYXV0aG9yaXphdGlvbicpKFZFUklGWV9FTUFJTCwgZGlzcGF0Y2gpKEZBSUxFRCk7XG4gICAgc2V0RmV0Y2hFcnJvcihyZXNwb25zZSwgZGlzcGF0Y2gpO1xuICB9IGZpbmFsbHkge1xuICAgIHNldFByaXZhdGVGZXRjaFN0YXR1cygnYXV0aG9yaXphdGlvbicpKFZFUklGWV9FTUFJTCwgZGlzcGF0Y2gpKElETEUpO1xuICAgIHNldEZldGNoU3RhdHVzKElETEUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZW5kVmVyaWZ5RW1haWxDb2RlID0gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHNldEZldGNoU3RhdHVzID0gZmV0Y2hTdGF0dXNDcmVhdG9yKCdzZXR0aW5ncycpKFJFU0VORF9WRVJJRllfRU1BSUxfQ09ERSwgZGlzcGF0Y2gpO1xuICB0cnkge1xuICAgIHNldEZldGNoU3RhdHVzKExPQURJTkcpO1xuICAgIGF3YWl0IHVzZXJFbWFpbEFQSS5zZW5kVmVyaWZ5RW1haWxDb2RlKCk7XG4gICAgc2V0UHJpdmF0ZUZldGNoU3RhdHVzKCdhdXRob3JpemF0aW9uJykoUkVTRU5EX1ZFUklGWV9FTUFJTF9DT0RFLCBkaXNwYXRjaCkoU1VDQ0VFREVEKTtcbiAgICBzZXRGZXRjaFN0YXR1cyhTVUNDRUVERUQpO1xuICAgIHNldEZldGNoRXJyb3IobnVsbCwgZGlzcGF0Y2gpO1xuICB9IGNhdGNoICh7IHJlc3BvbnNlIH0pIHtcbiAgICBzZXRGZXRjaFN0YXR1cyhGQUlMRUQpO1xuICAgIHNldFByaXZhdGVGZXRjaFN0YXR1cygnYXV0aG9yaXphdGlvbicpKFJFU0VORF9WRVJJRllfRU1BSUxfQ09ERSwgZGlzcGF0Y2gpKEZBSUxFRCk7XG4gICAgc2V0RmV0Y2hFcnJvcihyZXNwb25zZSwgZGlzcGF0Y2gpO1xuICB9IGZpbmFsbHkge1xuICAgIHNldEZldGNoU3RhdHVzKElETEUpO1xuICAgIHNldFByaXZhdGVGZXRjaFN0YXR1cygnYXV0aG9yaXphdGlvbicpKFJFU0VORF9WRVJJRllfRU1BSUxfQ09ERSwgZGlzcGF0Y2gpKElETEUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2VuZFZlcmlmeUVtYWlsQ29kZSA9IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICBjb25zdCBzZXRGZXRjaFN0YXR1cyA9IGZldGNoU3RhdHVzQ3JlYXRvcignc2V0dGluZ3MnKShTRU5EX1ZFUklGWV9FTUFJTF9DT0RFLCBkaXNwYXRjaCk7XG4gIHRyeSB7XG4gICAgc2V0RmV0Y2hTdGF0dXMoTE9BRElORyk7XG4gICAgYXdhaXQgdXNlckVtYWlsQVBJLnNlbmRWZXJpZnlFbWFpbENvZGUoKTtcbiAgICBzZXRGZXRjaFN0YXR1cyhTVUNDRUVERUQpO1xuICAgIHNldEZldGNoRXJyb3IobnVsbCwgZGlzcGF0Y2gpO1xuICB9IGNhdGNoICh7IHJlc3BvbnNlIH0pIHtcbiAgICBzZXRGZXRjaFN0YXR1cyhGQUlMRUQpO1xuICAgIHNldEZldGNoRXJyb3IocmVzcG9uc2UsIGRpc3BhdGNoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBzZXRGZXRjaFN0YXR1cyhJRExFKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZUVtYWlsID0gKG5ld0VtYWlsKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgY29uc3Qgc2V0RmV0Y2hTdGF0dXMgPSBmZXRjaFN0YXR1c0NyZWF0b3IoJ3NldHRpbmdzJykoQ0hBTkdFX0VNQUlMLCBkaXNwYXRjaCk7XG4gIHRyeSB7XG4gICAgc2V0RmV0Y2hTdGF0dXMoTE9BRElORyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1c2VyRW1haWxBUEkuY2hhbmdlRW1haWwobmV3RW1haWwpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFVQREFURV9TRUNVUklUWV9TRVRUSU5HUyxcbiAgICAgIHBheWxvYWQ6IHsgb3B0aW9uOiAndXNlckVtYWlsJywgdmFsdWU6IHJlc3BvbnNlLmRhdGEubmV3RW1haWwgfSxcbiAgICB9KTtcbiAgICBzZXRGZXRjaFN0YXR1cyhTVUNDRUVERUQpO1xuICAgIHNldEZldGNoRXJyb3IobnVsbCwgZGlzcGF0Y2gpO1xuICB9IGNhdGNoICh7IHJlc3BvbnNlIH0pIHtcbiAgICBzZXRGZXRjaFN0YXR1cyhGQUlMRUQpO1xuICAgIHNldEZldGNoRXJyb3IocmVzcG9uc2UsIGRpc3BhdGNoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBzZXRGZXRjaFN0YXR1cyhJRExFKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN1Y2Nlc3NTbmFja2JhciwgTG9hZGluZ1NuYWNrYmFyLCBFcnJvclNuYWNrYmFyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIGdldEZldGNoRXJyb3IsXG4gIGdldEFsbFByaXZhdGVGZXRjaFN0YXR1c2VzLFxuICBnZXRDb21tb25GZXRjaFN0YXR1cyxcbn0gZnJvbSAnLi4vLi4vLi4vc2VsZWN0b3JzL2NvbW1vbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBGZXRjaFN0YXR1c1NuYWNrQmFycyh7IHJlZHVjZXJOYW1lIH0pIHtcbiAgY29uc3QgZmV0Y2hFcnJvciA9IHVzZVNlbGVjdG9yKGdldEZldGNoRXJyb3IpO1xuICBjb25zdCBmZXRjaFN0YXR1cyA9IHVzZVNlbGVjdG9yKGdldENvbW1vbkZldGNoU3RhdHVzKTtcbiAgY29uc3QgYWxsRmV0Y2hTdGF0dXNlcyA9IHVzZVNlbGVjdG9yKGdldEFsbFByaXZhdGVGZXRjaFN0YXR1c2VzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U3VjY2Vzc1NuYWNrYmFyIHsuLi57IGFsbEZldGNoU3RhdHVzZXMsIHJlZHVjZXJOYW1lIH19IC8+XG4gICAgICA8TG9hZGluZ1NuYWNrYmFyIHsuLi57IGZldGNoU3RhdHVzIH19IC8+XG4gICAgICA8RXJyb3JTbmFja2JhciB7Li4ueyBmZXRjaEVycm9yIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBlcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZmV0Y2hfc3RhdHVzZXMvZXJyb3JfbWVzc2FnZXMnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuaW1wb3J0IHsgQWxlcnRUaXRsZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkZWxheXMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hdXRoL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBzZXRGZXRjaEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9mZXRjaF9zdGF0dXNlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvclNuYWNrYmFyKHsgZmV0Y2hFcnJvciB9KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgaWYgKCFmZXRjaEVycm9yKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB7IG1lc3NhZ2UgfSA9IGVycm9yTWVzc2FnZXMuZ2V0TWVzc2FnZXMoZmV0Y2hFcnJvcik7XG4gIGNvbnN0IGNsb3NlRXJyb3JIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldEZldGNoRXJyb3IobnVsbCwgZGlzcGF0Y2gpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNuYWNrYmFyXG4gICAgICBvbkNsb3NlPXtjbG9zZUVycm9ySGFuZGxlcn1cbiAgICAgIGF1dG9IaWRlRHVyYXRpb249e2RlbGF5cy5CRUZPUkVfSElERV9FUlJPUl9TTkFDS0JBUn1cbiAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdjZW50ZXInIH19XG4gICAgICBvcGVuPXsnb3Blbid9XG4gICAgPlxuICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiBvbkNsb3NlPXtjbG9zZUVycm9ySGFuZGxlcn0+XG4gICAgICAgIDxBbGVydFRpdGxlPkVycm9yPC9BbGVydFRpdGxlPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvQWxlcnQ+XG4gICAgPC9TbmFja2Jhcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIENpcmN1bGFyUHJvZ3Jlc3MsIG1ha2VTdHlsZXMsIFNuYWNrYmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29tbW9uRmV0Y2hTdGF0dXNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvY29uc3RhbnRzJztcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcblxuZXhwb3J0IGZ1bmN0aW9uIExvYWRpbmdTbmFja2Jhcih7IGZldGNoU3RhdHVzIH0pIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IExvYWRpbmdNZXNzYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdNZXNzYWdlV3JhcHBlcn0+XG4gICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdDaXJjbGV9IHNpemU9XCIyNXB4XCIgLz5cbiAgICAgICAgTG9hZGluZy4uLlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfTtcbiAgY29uc3QgaXNMb2FkaW5nID0gZmV0Y2hTdGF0dXMgPT09IGNvbW1vbkZldGNoU3RhdHVzZXMuTE9BRElORztcbiAgaWYgKCFpc0xvYWRpbmcpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxTbmFja2JhclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc25hY2tCYXJ9XG4gICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fVxuICAgICAgb3Blbj17J29wZW4nfVxuICAgID5cbiAgICAgIDxNdWlBbGVydCBzZXZlcml0eT1cImluZm9cIiBpY29uPXtmYWxzZX0gY2xhc3Nlcz17eyByb290OiBzdHlsZXMuYWxlcnQgfX0+XG4gICAgICAgIDxMb2FkaW5nTWVzc2FnZSAvPlxuICAgICAgPC9NdWlBbGVydD5cbiAgICA8L1NuYWNrYmFyPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gIHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsb2FkaW5nTWVzc2FnZVdyYXBwZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nQ2lyY2xlOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAnMTVweCcsXG4gICAgICB9LFxuICAgICAgc25hY2tCYXI6IHt9LFxuICAgICAgYWxlcnQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY0YjVmNicsXG4gICAgICAgIHdpZHRoOiAnMTgwcHgnLFxuICAgICAgICBjb2xvcjogJyM0MjQyNDInLFxuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgICAgfSxcbiAgICB9O1xuICB9KSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiJztcbmltcG9ydCB7IGRlbGF5cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvY29uc3RhbnRzJztcbmltcG9ydCB7IHN1Y2Nlc3NNZXNzYWdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2ZldGNoX3N0YXR1c2VzL3N1Y2Nlc3NfbWVzc2FnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzU25hY2tiYXIoeyBhbGxGZXRjaFN0YXR1c2VzLCByZWR1Y2VyTmFtZSB9KSB7XG4gIGNvbnN0IFtzbm93TWVzc2FnZSwgc2V0U2hvd01lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgY29uc3QgY2xvc2VNZXNzYWdlSGFuZGxlciA9ICgpID0+IHNldFNob3dNZXNzYWdlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VUZXh0ID0gc3VjY2Vzc01lc3NhZ2VzLmdldFN1Y2Nlc3NNZXNzYWdlKGFsbEZldGNoU3RhdHVzZXMsIHJlZHVjZXJOYW1lKTtcbiAgICBpZiAobWVzc2FnZVRleHQpIHtcbiAgICAgIHNldE1lc3NhZ2UobWVzc2FnZVRleHQpO1xuICAgICAgc2V0U2hvd01lc3NhZ2UodHJ1ZSk7XG4gICAgfVxuICB9LCBbYWxsRmV0Y2hTdGF0dXNlc10pO1xuXG4gIGlmICghbWVzc2FnZSB8fCAhc25vd01lc3NhZ2UpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxTbmFja2JhclxuICAgICAgb25DbG9zZT17Y2xvc2VNZXNzYWdlSGFuZGxlcn1cbiAgICAgIGF1dG9IaWRlRHVyYXRpb249e2RlbGF5cy5CRUZPUkVfSElERV9TVUNDRVNTX1NOQUNLQkFSfVxuICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAnYm90dG9tJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cbiAgICAgIG9wZW49eydvcGVuJ31cbiAgICA+XG4gICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJzdWNjZXNzXCI+e21lc3NhZ2V9PC9BbGVydD5cbiAgICA8L1NuYWNrYmFyPlxuICApO1xufVxuIiwiZXhwb3J0IHsgTG9hZGluZ1NuYWNrYmFyIH0gZnJvbSAnLi9Mb2FkaW5nU25hY2tiYXInO1xuZXhwb3J0IHsgRXJyb3JTbmFja2JhciB9IGZyb20gJy4vRXJyb3JTbmFja2Jhcic7XG5leHBvcnQgeyBTdWNjZXNzU25hY2tiYXIgfSBmcm9tICcuL1N1Y2Nlc3NTbmFja2Jhcic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29tbW9uRmV0Y2hTdGF0dXNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZ2V0Q29tbW9uRmV0Y2hTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWxlY3RvcnMvY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhCdXR0b24oeyB0ZXh0ID0gJ1N1Ym1pdCcsIC4uLnJlc3QgfSkge1xuICBjb25zdCBmZXRjaFN0YXR1cyA9IHVzZVNlbGVjdG9yKGdldENvbW1vbkZldGNoU3RhdHVzKTtcbiAgY29uc3QgaXNMb2FkaW5nID0gZmV0Y2hTdGF0dXMgPT09IGNvbW1vbkZldGNoU3RhdHVzZXMuTE9BRElORztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLnJvb3QgfX0gZGlzYWJsZWQ9e2lzTG9hZGluZ30gdHlwZT1cInN1Ym1pdFwiIHsuLi5yZXN0fT5cbiAgICAgIHt0ZXh0fVxuICAgIDwvQnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gIHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByb290OiB7XG4gICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNiYmRlZmInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDAgNXB4ICNiYmRlZmInLFxuICAgICAgICBbJyY6aG92ZXInXToge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxQTIzN0UnLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgMCA2cHggZ3JheScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoRm9ybSh7IGluaXRpYWxWYWx1ZXMsIHZhbGlkYXRlLCBjaGlsZHJlbiwgc3VibWl0SGFuZGxlciwgLi4ucmVzdCB9KSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxGb3JtaWtcbiAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XG4gICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xuICAgICAgICBzdWJtaXRIYW5kbGVyKHZhbHVlcyk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IHsuLi5yZXN0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Gb3JtPlxuICAgIDwvRm9ybWlrPlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gIHJldHVybiBtYWtlU3R5bGVzKHtcbiAgICBmb3JtOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzM1MHB4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRmllbGQgfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzLCBUZXh0RmllbGQsIFRvb2x0aXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHknO1xuaW1wb3J0IFZpc2liaWxpdHlPZmZJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5T2ZmJztcbmltcG9ydCB7IGNvbW1vbkZldGNoU3RhdHVzZXMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hdXRoL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldENvbW1vbkZldGNoU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VsZWN0b3JzL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBBdXRoSW5wdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2ZpZWxkLCBtZXRhXSA9IHVzZUZpZWxkKHByb3BzKTtcbiAgY29uc3QgeyB0b3VjaGVkLCBlcnJvciB9ID0gbWV0YTtcblxuICBjb25zdCBbaXNWaXNpYmxlUGFzc3dvcmQsIHNldFBhc3N3b3JkVmlzaWJpbGl0eV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0ZpZWxkVXNlZCwgc2V0RmllbGRVc2VkU3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmZXRjaFN0YXR1cyA9IHVzZVNlbGVjdG9yKGdldENvbW1vbkZldGNoU3RhdHVzKTtcbiAgY29uc3QgaGFuZGxlVmlzaWJpbGl0eVN3aXRjaGVyID0gKCkgPT4gc2V0UGFzc3dvcmRWaXNpYmlsaXR5KCFpc1Zpc2libGVQYXNzd29yZCk7XG5cbiAgY29uc3QgaXNMb2FkaW5nID0gZmV0Y2hTdGF0dXMgPT09IGNvbW1vbkZldGNoU3RhdHVzZXMuTE9BRElORztcblxuICBpZiAoIWlzRmllbGRVc2VkICYmIGZpZWxkLnZhbHVlKSB7XG4gICAgc2V0RmllbGRVc2VkU3RhdHVzKHRydWUpO1xuICB9XG5cbiAgY29uc3QgaXNWaXNpYmxlRXJyb3IgPSBCb29sZWFuKHRvdWNoZWQgJiYgZXJyb3IpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCB0aXRsZT17ZXJyb3J9IHBsYWNlbWVudD1cInJpZ2h0XCIgYXJyb3c9e3RydWV9IG9wZW49e2lzVmlzaWJsZUVycm9yfT5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXcmFwcGVyfT5cbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGVycm9yPXtpc1Zpc2libGVFcnJvcn1cbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRleHRGaWVsZH1cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgdHlwZT17aXNWaXNpYmxlUGFzc3dvcmQgPyAndGV4dCcgOiBwcm9wcy50eXBlfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtwcm9wcy50eXBlID09PSAncGFzc3dvcmQnICYmIGlzRmllbGRVc2VkICYmIChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVWaXNpYmlsaXR5U3dpdGNoZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52aXNpYmxlU3dpdGNoZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzVmlzaWJsZVBhc3N3b3JkID8gKFxuICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzaWJpbGl0eU9mZkljb24gZm9udFNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Ub29sdGlwPlxuICApO1xufTtcblxuZnVuY3Rpb24gdXNlU3R5bGVzKCkge1xuICByZXR1cm4gbWFrZVN0eWxlcyh7XG4gICAgZm9ybToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICczNTBweCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB9LFxuICAgIHRleHRGaWVsZDoge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMTVweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgaW5wdXRXcmFwcGVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSxcbiAgICB2aXNpYmxlU3dpdGNoZXI6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6ICcxMHB4JyxcbiAgICAgIHRvcDogJzE4cHgnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJyNiZGJkYmQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAuNnMgbGluZWFyJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJyM2MTYxNjEnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJzEwcHgnLFxuICAgICAgdG9wOiAnMThweCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgfSxcbiAgICB0ZXN0OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgIH0sXG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIERlc2NyaXB0aW9uSWNvbih7IEljb24sIHdpZHRoID0gNjAsIGhlaWdodCA9IDYwLCAuLi5yZXN0IH0pIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uV3JhcHBlcn0+XG4gICAgICA8SWNvbiB3aWR0aD17YCR7d2lkdGh9cHhgfSBoZWlnaHQ9e2Ake2hlaWdodH1weGB9IHsuLi5yZXN0fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gIHJldHVybiBtYWtlU3R5bGVzKHtcbiAgICBpY29uV3JhcHBlcjoge1xuICAgICAgcGFkZGluZzogJzQwcHgnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNiMmRmZGInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICB9KSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFN1Y2Nlc3MgfSBmcm9tICcuLi8uLi9pY29ucyc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGludm9rZUFmdGVyRGVsYXkgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hdXRoL3Rvb2xzJztcbmltcG9ydCB7IHNldEF1dGhTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGgvY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIERvbmUoeyBsaW5rVGV4dCA9ICdUbyBhcHAnIH0pIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0QXV0aFN0YXR1cyh0cnVlKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgIDxTdWNjZXNzIGZpbGw9XCIjNGNhZjUwXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbldyYXBwZXJ9PjwvZGl2PlxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gdG89XCIvZGFzaGJvYXJkXCI+XG4gICAgICAgIHtsaW5rVGV4dH1cbiAgICAgIDwvTmF2TGluaz5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlU3R5bGVzKCkge1xuICByZXR1cm4gbWFrZVN0eWxlcygodGhlbWUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYm94OiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB9LFxuXG4gICAgICBsaW5rOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMjhweCcsXG4gICAgICAgIGNvbG9yOiAnIzkwY2FmOScsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGljb25XcmFwcGVyOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzI1cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxuICAgICAgfSxcbiAgICB9O1xuICB9KSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF1dGhGb3JtIH0gZnJvbSAnLi9BdXRoRm9ybSc7XG5pbXBvcnQgeyBBdXRoSW5wdXQgfSBmcm9tICcuL0F1dGhJbnB1dCc7XG5pbXBvcnQgeyBBdXRoQnV0dG9uIH0gZnJvbSAnLi9BdXRoQnV0dG9uJztcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFVzZXJFbWFpbCA9ICh7IHN1Ym1pdEhhbmRsZXIsIHZhbGlkYXRlLCB0aXRsZSwgcGxhY2Vob2xkZXIgPSAneW91ciBlbWFpbCcgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSB2YXJpYW50PVwiaDJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICl9XG4gICAgICA8QXV0aEZvcm0gey4uLnsgc3VibWl0SGFuZGxlciwgdmFsaWRhdGUsIGluaXRpYWxWYWx1ZXM6IHsgZW1haWw6ICcnIH0sIGF1dG9Gb2N1czogdHJ1ZSB9fT5cbiAgICAgICAgPEF1dGhJbnB1dCBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICAgIDxBdXRoQnV0dG9uIHRleHQ9XCJzZW5kXCIgLz5cbiAgICAgIDwvQXV0aEZvcm0+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gIHJldHVybiBtYWtlU3R5bGVzKHtcbiAgICBib3g6IHtcbiAgICAgIHdpZHRoOiAnMzAwcHgnLFxuICAgICAgcGFkZGluZzogJzM1cHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgICB9LFxuXG4gICAgdGl0bGU6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxuICAgICAgZm9udFNpemU6ICc0MHB4JyxcbiAgICB9LFxuICB9KSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRUaXRsZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInO1xuXG5leHBvcnQgZnVuY3Rpb24gV2FyblNuYWNrYmFyKHsgdGV4dCB9KSB7XG4gIGNvbnN0IFtzaG93V2Fybiwgc2V0U2hvd1dhcm5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgaWYgKCFzaG93V2FybikgcmV0dXJuIG51bGw7XG4gIHJldHVybiAoXG4gICAgPFNuYWNrYmFyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93V2FybihmYWxzZSl9XG4gICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICdib3R0b20nLCBob3Jpem9udGFsOiAnY2VudGVyJyB9fVxuICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MTAwMDB9XG4gICAgICBvcGVuPXsnb3Blbid9XG4gICAgPlxuICAgICAgPEFsZXJ0IHNldmVyaXR5PVwid2FybmluZ1wiIG9uQ2xvc2U9eygpID0+IHNldFNob3dXYXJuKGZhbHNlKX0+XG4gICAgICAgIDxBbGVydFRpdGxlPldhcm5pbmc8L0FsZXJ0VGl0bGU+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9BbGVydD5cbiAgICA8L1NuYWNrYmFyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgQ29sb3JsaWJDb25uZWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgU3RlcCwgU3RlcExhYmVsLCBTdGVwcGVyLCBUb29sdGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQXV0aFN0ZXBwZXIgPSAoeyBzdGVwcywgYWN0aXZlU3RlcCwgaWNvbnMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcblxuICBmdW5jdGlvbiBDb2xvcmxpYlN0ZXBJY29uKHByb3BzKSB7XG4gICAgY29uc3QgeyBhY3RpdmUsIGNvbXBsZXRlZCB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnJvb3QsIHtcbiAgICAgICAgICBbc3R5bGVzLmFjdGl2ZV06IGFjdGl2ZSxcbiAgICAgICAgICBbc3R5bGVzLmNvbXBsZXRlZF06IGNvbXBsZXRlZCxcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHtpY29uc1tTdHJpbmcocHJvcHMuaWNvbildfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFN0ZXBwZXJcbiAgICAgIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLnN0ZXBwZXJSb290IH19XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdGVwcGVyfVxuICAgICAgYWx0ZXJuYXRpdmVMYWJlbFxuICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cbiAgICAgIGNvbm5lY3Rvcj17PENvbG9ybGliQ29ubmVjdG9yIC8+fVxuICAgID5cbiAgICAgIHtzdGVwcy5tYXAoKGxhYmVsKSA9PiAoXG4gICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXtsYWJlbH0+XG4gICAgICAgICAgICA8U3RlcExhYmVsIFN0ZXBJY29uQ29tcG9uZW50PXtDb2xvcmxpYlN0ZXBJY29ufSAvPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9TdGVwPlxuICAgICAgKSl9XG4gICAgPC9TdGVwcGVyPlxuICApO1xufTtcblxuZnVuY3Rpb24gdXNlU3R5bGVzKCkge1xuICByZXR1cm4gbWFrZVN0eWxlcygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2NjYycsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBoZWlnaHQ6IDUwLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICB9LFxuXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoIDEzNmRlZywgcmdiKDI0MiwxMTMsMzMpIDAlLCByZ2IoMjMzLDY0LDg3KSA1MCUsIHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXG4gICAgICAgIGJveFNoYWRvdzogJzAgNHB4IDEwcHggMCByZ2JhKDAsMCwwLC4yNSknLFxuICAgICAgfSxcblxuICAgICAgY29tcGxldGVkOiB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpcbiAgICAgICAgICAnbGluZWFyLWdyYWRpZW50KCAxMzZkZWcsIHJnYigyNDIsMTEzLDMzKSAwJSwgcmdiKDIzMyw2NCw4NykgNTAlLCByZ2IoMTM4LDM1LDEzNSkgMTAwJSknLFxuICAgICAgfSxcblxuICAgICAgc3RlcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm90dG9tOiAnMTQwcHgnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcbiAgICAgIH0sXG5cbiAgICAgIHN0ZXBwZXJSb290OiB7XG4gICAgICAgIGhlaWdodDogJzUwcHgnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICB9LFxuICAgIH07XG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgU3RlcENvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwQ29ubmVjdG9yJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5leHBvcnQgY29uc3QgQ29sb3JsaWJDb25uZWN0b3IgPSB3aXRoU3R5bGVzKHtcbiAgYWx0ZXJuYXRpdmVMYWJlbDoge1xuICAgIHRvcDogMjIsXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgICcmICRsaW5lJzoge1xuICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAnbGluZWFyLWdyYWRpZW50KCA5NWRlZyxyZ2IoMjQyLDExMywzMykgMCUscmdiKDIzMyw2NCw4NykgNTAlLHJnYigxMzgsMzUsMTM1KSAxMDAlKScsXG4gICAgfSxcbiAgfSxcbiAgY29tcGxldGVkOiB7XG4gICAgJyYgJGxpbmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICdsaW5lYXItZ3JhZGllbnQoIDk1ZGVnLHJnYigyNDIsMTEzLDMzKSAwJSxyZ2IoMjMzLDY0LDg3KSA1MCUscmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcbiAgICB9LFxuICB9LFxuICBsaW5lOiB7XG4gICAgaGVpZ2h0OiAzLFxuICAgIGJvcmRlcjogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWFlYWYwJyxcbiAgICBib3JkZXJSYWRpdXM6IDEsXG4gIH0sXG59KShTdGVwQ29ubmVjdG9yKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5cbmNvbnN0IHVzZUNvbG9ybGliU3RlcEljb25TdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNjY2MnLFxuICAgIHpJbmRleDogMSxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDUwLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgfSxcbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgJ2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxMHB4IDAgcmdiYSgwLDAsMCwuMjUpJyxcbiAgfSxcbiAgY29tcGxldGVkOiB7XG4gICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgJ2xpbmVhci1ncmFkaWVudCggMTM2ZGVnLCByZ2IoMjQyLDExMywzMykgMCUsIHJnYigyMzMsNjQsODcpIDUwJSwgcmdiKDEzOCwzNSwxMzUpIDEwMCUpJyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29sb3JsaWJTdGVwSWNvbihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlQ29sb3JsaWJTdGVwSWNvblN0eWxlcygpO1xuICBjb25zdCB7IGFjdGl2ZSwgY29tcGxldGVkLCBpY29ucyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XG4gICAgICAgIFtjbGFzc2VzLmFjdGl2ZV06IGFjdGl2ZSxcbiAgICAgICAgW2NsYXNzZXMuY29tcGxldGVkXTogY29tcGxldGVkLFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge2ljb25zW1N0cmluZyhwcm9wcy5pY29uKV19XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJleHBvcnQgeyBDb2xvcmxpYkNvbm5lY3RvciB9IGZyb20gJy4vQ29sb3JsaWJDb25uZWN0b3InO1xuZXhwb3J0IHsgQ29sb3JsaWJTdGVwSWNvbiB9IGZyb20gJy4vQ29sb3JsaWJTdGVwSWNvbic7XG4iLCJleHBvcnQgeyBBdXRoRm9ybSB9IGZyb20gJy4vQXV0aEZvcm0nO1xuZXhwb3J0IHsgQXV0aEJ1dHRvbiB9IGZyb20gJy4vQXV0aEJ1dHRvbic7XG5leHBvcnQgeyBBdXRoSW5wdXQgfSBmcm9tICcuL0F1dGhJbnB1dCc7XG5leHBvcnQgeyBEb25lIH0gZnJvbSAnLi9Eb25lJztcbmV4cG9ydCB7IFZlcmlmeUNvZGUgfSBmcm9tICcuL3ZlcmlmeV9jb2RlL1ZlcmlmeUNvZGUnO1xuZXhwb3J0IHsgVXNlckVtYWlsIH0gZnJvbSAnLi9Vc2VyRW1haWwnO1xuZXhwb3J0IHsgV2FyblNuYWNrYmFyIH0gZnJvbSAnLi9XYXJuU25hY2tiYXInO1xuZXhwb3J0IHsgRGVzY3JpcHRpb25JY29uIH0gZnJvbSAnLi9EZXNjcmlwdGlvbkljb24nO1xuZXhwb3J0IHsgQXV0aFN0ZXBwZXIgfSBmcm9tICcuL2F1dGhfc3RlcHBlci9BdXRoU3RlcHBlcic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0aElucHV0IH0gZnJvbSAnLi4vQXV0aElucHV0JztcbmltcG9ydCB7IEF1dGhGb3JtIH0gZnJvbSAnLi4vQXV0aEZvcm0nO1xuaW1wb3J0IHsgQXV0aEJ1dHRvbiB9IGZyb20gJy4uL0F1dGhCdXR0b24nO1xuaW1wb3J0IHsgU2tpcEJ1dHRvbiB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBWZXJpZnlDb2RlID0gKHtcbiAgc3VibWl0SGFuZGxlcixcbiAgdmFsaWRhdGUsXG4gIHJlc2VuZENvZGVIYW5kbGVyLFxuICBza2lwU3RlcCxcbiAgaXNFbWFpbEVycm9yLFxuICB0aXRsZSxcbiAgYXV0b2ZvY3VzLFxuICBzZXRWaXNpYmxlV2Fybk1lc3NhZ2UsXG4gIGlzVmlzaWJsZVdhcm5NZXNzYWdlLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgc2tpcEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKCFpc1Zpc2libGVXYXJuTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIHNldFZpc2libGVXYXJuTWVzc2FnZSh0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2tpcFN0ZXAoKTtcbiAgfTtcblxuICBpZiAoaXNFbWFpbEVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc1JlZ2lzdHJhdGlvbn0+XG4gICAgICAgICAgICBZb3UgYXJlIHN1Y2NlZWRlZCByZWdpc3RlcmVkIGluIHN5c3RlbSxcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbFByb3ZpZGVyRXJyb3J9PlxuICAgICAgICAgICAgYnV0IG9jY3VycmVkIGVycm9yIHdpdGggbWFpbCBwcm92aWRlciwgeW91IGNhbiB2ZXJpZnkgZW1haWwgaW4gc2V0dGluZ3MgbGF0ZXJcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFNraXBCdXR0b24gaGFuZGxlcj17c2tpcFN0ZXB9IC8+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICB7dGl0bGUgJiYgKFxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gdmFyaWFudD1cImgyXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICApfVxuICAgICAgPEF1dGhGb3JtXG4gICAgICAgIHsuLi57XG4gICAgICAgICAgc3VibWl0SGFuZGxlcixcbiAgICAgICAgICB2YWxpZGF0ZSxcbiAgICAgICAgICBpbml0aWFsVmFsdWVzOiB7IHZlcmlmeUNvZGU6ICcnIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBdXRoSW5wdXQgYXV0b0ZvY3VzPXthdXRvZm9jdXN9IG5hbWU9XCJ2ZXJpZnlDb2RlXCIgcGxhY2Vob2xkZXI9XCJ2ZXJpZmljYXRpb24gY29kZVwiIC8+XG4gICAgICAgIDxBdXRoQnV0dG9uIHRleHQ9XCJ2ZXJpZnlcIiAvPlxuICAgICAgPC9BdXRoRm9ybT5cbiAgICAgIDxBdXRoQnV0dG9uXG4gICAgICAgIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLnJlc2VuZENvZGVCdG4gfX1cbiAgICAgICAgb25DbGljaz17cmVzZW5kQ29kZUhhbmRsZXJ9XG4gICAgICAgIHRleHQ9XCJyZXNlbmQgY29kZVwiXG4gICAgICAvPlxuICAgICAge3NraXBTdGVwICYmIHR5cGVvZiBza2lwU3RlcCA9PT0gJ2Z1bmN0aW9uJyAmJiAoXG4gICAgICAgIDxBdXRoQnV0dG9uIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLnNraXBCdG4gfX0gb25DbGljaz17c2tpcEhhbmRsZXJ9IHRleHQ9XCJza2lwXCIgLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gIHJldHVybiBtYWtlU3R5bGVzKCh0aGVtZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtYWlsUHJvdmlkZXJFcnJvcjoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxuICAgICAgfSxcblxuICAgICAgc3VjY2Vzc1JlZ2lzdHJhdGlvbjoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIH0sXG5cbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzE1cHgnLFxuICAgICAgICBmb250U2l6ZTogJzQwcHgnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgfSxcblxuICAgICAgYm94OiB7XG4gICAgICAgIHdpZHRoOiAnMzAwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMzVweCcsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxuICAgICAgfSxcblxuICAgICAgc2tpcEJ0bjoge1xuICAgICAgICBbJyY6aG92ZXInXToge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmViZWUnLFxuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgcmVzZW5kQ29kZUJ0bjoge1xuICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnLFxuICAgICAgICBvcGFjaXR5OiAnLjY1JyxcbiAgICAgICAgWycmOmhvdmVyJ106IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyxcbiAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBtYWtlU3R5bGVzLCBUb29sdGlwLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2tpcEJ1dHRvbihwcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBoYW5kbGVyLCBzaG93V2FybmluZ01lc3NhZ2UsIGJ1dHRvblRleHQgPSAnc2tpcCcsIHdhcm5UZXh0ID0gJ0FyZSB5b3Ugc3VyZT8nIH0gPSBwcm9wcztcbiAgY29uc3QgW2lzVmlzaWJsZVdhcm5pbmdNZXNzYWdlLCBzZXRWaXNpYmxlV2FybmluZ01lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBza2lwSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXNob3dXYXJuaW5nTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoc2hvd1dhcm5pbmdNZXNzYWdlICYmIGlzVmlzaWJsZVdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcigpO1xuICAgIH1cblxuICAgIHNldFZpc2libGVXYXJuaW5nTWVzc2FnZSh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNWaXNpYmxlV2FybmluZ01lc3NhZ2UgJiYgKFxuICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJsZWZ0XCIgdGl0bGU9e2BpZiBcInllc1wiIGp1c3QgY2xpY2sgJHtidXR0b25UZXh0fWB9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLndhcm5NZXNzYWdlfT57d2FyblRleHR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtza2lwSGFuZGxlcn0+e2J1dHRvblRleHR9PC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZVN0eWxlcygpIHtcbiAgcmV0dXJuIG1ha2VTdHlsZXMoKHRoZW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdhcm5NZXNzYWdlOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbixcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICB9LFxuICAgIH07XG4gIH0pKCk7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgeyBSZXN0b3JlUGFzc3dvcmQgfSBmcm9tICcuL3Jlc3RvcmVfcGFzc3dvcmQvUmVzdG9yZVBhc3N3b3JkJztcbmV4cG9ydCB7IFNpZ25JbiB9IGZyb20gJy4vc2lnbl9pbi9TaWduSW4nO1xuZXhwb3J0IHsgU2lnblVwIH0gZnJvbSAnLi9zaWduX3VwL1NpZ25VcCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsdGVybmF0ZUVtYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWx0ZXJuYXRlRW1haWwnO1xuaW1wb3J0IFZlcmlmaWVkVXNlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlcic7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XG5pbXBvcnQgVnBuS2V5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVnBuS2V5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBEb25lIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IE5ld1Bhc3N3b3JkLCBSZXN0b3JlU2Vzc2lvbkVuZGVkIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IEF1dGhTdGVwcGVyLCBWZXJpZnlDb2RlLCBVc2VyRW1haWwgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY29tbW9uRmV0Y2hTdGF0dXNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvY29uc3RhbnRzJztcbmltcG9ydCB7IGF1dGhGZXRjaFN0YXR1c05hbWVzLCBmZXRjaEVycm9yc05hbWVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXV0aC9uYW1lcyc7XG5pbXBvcnQgeyBhdXRoVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBpc1N1Y2Nlc3NGZXRjaFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2ZldGNoX3N0YXR1c2VzL2F1eF9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgZ2V0RmV0Y2hFcnJvciB9IGZyb20gJy4uLy4uLy4uLy4uL3NlbGVjdG9ycy9jb21tb24nO1xuaW1wb3J0IHsgZ2V0QXV0aFByaXZhdGVGUywgZ2V0UmVzdG9yZVBhc3N3b3JkQ3JlZGVudGlhbHMgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWxlY3RvcnMvYXV0aCc7XG5pbXBvcnQge1xuICBjcmVhdGVOZXdQYXNzd29yZCxcbiAgcmVxdWVzdFZlcmlmeSxcbiAgcmVzZW5kUmVzdG9yZVBhc3N3b3JkQ29kZSxcbiAgcmVzZXRSZXN0b3JlU2Vzc2lvbixcbiAgdmVyaWZpY2F0aW9uQ29kZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9hdXRoJztcblxuY29uc3QgeyBFWFBJUkVEX1JFU1RPUkVfUEFTU1dPUkRfU0VTU0lPTiB9ID0gZmV0Y2hFcnJvcnNOYW1lcztcbmNvbnN0IHsgU1VDQ0VFREVEIH0gPSBjb21tb25GZXRjaFN0YXR1c2VzO1xuY29uc3Qge1xuICBHRVRfUkVTVF9QQVNTV09SRF9DUkVERU5USUFMUyxcbiAgQ1JFQVRFX05FV19QQVNTV09SRCxcbiAgVkVSSUZZX1JFU1RfUkVTVF9QQVNTV09SRF9DT05GSVJNX0NPREUsXG59ID0gYXV0aEZldGNoU3RhdHVzTmFtZXM7XG5cbmV4cG9ydCBjb25zdCBSZXN0b3JlUGFzc3dvcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0V4cGlyZWRSZXN0U2Vzc2lvbiwgc2V0UmVzdFNlc3Npb25FeHBpcmVkU3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHRva2VuLCBhbGxvd0NoYW5nZVBhc3N3b3JkIH0gPSB1c2VTZWxlY3RvcihnZXRSZXN0b3JlUGFzc3dvcmRDcmVkZW50aWFscyk7XG4gIGNvbnN0IGZldGNoRXJyb3IgPSB1c2VTZWxlY3RvcihnZXRGZXRjaEVycm9yKTtcbiAgY29uc3QgZ2V0Q3JlZGVudGlhbHNGZXRjaFN0YXR1c0ZTID0gdXNlU2VsZWN0b3IoZ2V0QXV0aFByaXZhdGVGUyhHRVRfUkVTVF9QQVNTV09SRF9DUkVERU5USUFMUykpO1xuICBjb25zdCBjcmVhdGVOZXdQYXNzd29yZEZTID0gdXNlU2VsZWN0b3IoZ2V0QXV0aFByaXZhdGVGUyhDUkVBVEVfTkVXX1BBU1NXT1JEKSk7XG4gIGNvbnN0IHZlcmlmeVJlc3RQYXNzd29yZENvbmZpcm1Db2RlRlMgPSB1c2VTZWxlY3RvcihcbiAgICBnZXRBdXRoUHJpdmF0ZUZTKFZFUklGWV9SRVNUX1JFU1RfUEFTU1dPUkRfQ09ORklSTV9DT0RFKVxuICApO1xuXG4gIGNvbnN0IHJlc2VuZENvZGVIYW5kbGVyID0gKCkgPT4gZGlzcGF0Y2gocmVzZW5kUmVzdG9yZVBhc3N3b3JkQ29kZSh0b2tlbikpO1xuICBjb25zdCByZXF1ZXN0VmVyaWZ5Q29kZUhhbmRsZXIgPSAoeyBlbWFpbCB9KSA9PiBkaXNwYXRjaChyZXF1ZXN0VmVyaWZ5KGVtYWlsKSk7XG4gIGNvbnN0IHZlcmlmeUNvZGVIYW5kbGVyID0gKHRva2VuKSA9PiAoeyB2ZXJpZnlDb2RlIH0pID0+IHtcbiAgICBkaXNwYXRjaCh2ZXJpZmljYXRpb25Db2RlKHRva2VuLCB2ZXJpZnlDb2RlKSk7XG4gIH07XG4gIGNvbnN0IG5ld1Bhc3N3b3JkSGFuZGxlciA9ICh0b2tlbikgPT4gKHsgbmV3UGFzc3dvcmQsIGNvbmZpcm1hdGlvblBhc3N3b3JkIH0pID0+IHtcbiAgICBkaXNwYXRjaChjcmVhdGVOZXdQYXNzd29yZCh0b2tlbiwgbmV3UGFzc3dvcmQsIGNvbmZpcm1hdGlvblBhc3N3b3JkKSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHJlc2V0UmVzdG9yZVNlc3Npb24oKSk7XG4gICAgc2V0UmVzdFNlc3Npb25FeHBpcmVkU3RhdHVzKGZhbHNlKTtcbiAgICBzZXRBY3RpdmVTdGVwKDApO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGZldGNoRXJyb3IgPT09IEVYUElSRURfUkVTVE9SRV9QQVNTV09SRF9TRVNTSU9OKSB7XG4gICAgICBzZXRSZXN0U2Vzc2lvbkV4cGlyZWRTdGF0dXModHJ1ZSk7XG4gICAgfVxuICB9LCBbZmV0Y2hFcnJvcl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1N1Y2Nlc3NGZXRjaFN0YXR1cyhnZXRDcmVkZW50aWFsc0ZldGNoU3RhdHVzRlMpICYmIGFjdGl2ZVN0ZXAgPT09IDApIHtcbiAgICAgIHNldEFjdGl2ZVN0ZXAoMSk7XG4gICAgfVxuXG4gICAgaWYgKGlzU3VjY2Vzc0ZldGNoU3RhdHVzKHZlcmlmeVJlc3RQYXNzd29yZENvbmZpcm1Db2RlRlMpICYmIGFjdGl2ZVN0ZXAgPT09IDEpIHtcbiAgICAgIHNldEFjdGl2ZVN0ZXAoMik7XG4gICAgfVxuXG4gICAgaWYgKGlzU3VjY2Vzc0ZldGNoU3RhdHVzKGNyZWF0ZU5ld1Bhc3N3b3JkRlMpICYmIGFjdGl2ZVN0ZXAgPT09IDIpIHtcbiAgICAgIHNldEFjdGl2ZVN0ZXAoMyk7XG4gICAgfVxuICB9LCBbZ2V0Q3JlZGVudGlhbHNGZXRjaFN0YXR1c0ZTLCB2ZXJpZnlSZXN0UGFzc3dvcmRDb25maXJtQ29kZUZTLCBjcmVhdGVOZXdQYXNzd29yZEZTXSk7XG5cbiAgY29uc3Qgc3RlcHBlckljb25zID0ge1xuICAgIDE6IDxBbHRlcm5hdGVFbWFpbEljb24gLz4sXG4gICAgMjogPFZlcmlmaWVkVXNlckljb24gLz4sXG4gICAgMzogPFZwbktleUljb24gLz4sXG4gICAgNDogPENoZWNrSWNvbiAvPixcbiAgfTtcbiAgY29uc3Qgc3RlcHMgPSBbJ0VtYWlsJywgJ1ZlcmlmaWNhdGlvbicsICdOZXcgcGFzc3dvcmQnLCAnRG9uZSddO1xuXG4gIGlmIChpc0V4cGlyZWRSZXN0U2Vzc2lvbikgcmV0dXJuIDxSZXN0b3JlU2Vzc2lvbkVuZGVkIHsuLi57IGhhbmRsZVJlc2V0IH19IC8+O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiAoXG4gICAgICAgIDxVc2VyRW1haWxcbiAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgc3VibWl0SGFuZGxlcjogcmVxdWVzdFZlcmlmeUNvZGVIYW5kbGVyLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGF1dGhWYWxpZGF0b3JzLmVtYWlsLFxuICAgICAgICAgICAgdGl0bGU6ICdZb3VyIGVtYWlsJyxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2FjdGl2ZVN0ZXAgPT09IDEgJiYgKFxuICAgICAgICA8VmVyaWZ5Q29kZVxuICAgICAgICAgIHsuLi57XG4gICAgICAgICAgICBoYW5kbGVSZXNldCxcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IHZlcmlmeUNvZGVIYW5kbGVyKHRva2VuKSxcbiAgICAgICAgICAgIHJlc2VuZENvZGVIYW5kbGVyLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGF1dGhWYWxpZGF0b3JzLnZlcmlmaWNhdGlvbkNvZGUsXG4gICAgICAgICAgICB0aXRsZTogJ0NoZWNrIG91dCB2ZXJpZmljYXRpb24gY29kZScsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHthY3RpdmVTdGVwID09PSAyICYmIChcbiAgICAgICAgPE5ld1Bhc3N3b3JkXG4gICAgICAgICAgey4uLntcbiAgICAgICAgICAgIGhhbmRsZVJlc2V0LFxuICAgICAgICAgICAgYWxsb3dDaGFuZ2VQYXNzd29yZCxcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IG5ld1Bhc3N3b3JkSGFuZGxlcih0b2tlbiksXG4gICAgICAgICAgICB2YWxpZGF0ZTogYXV0aFZhbGlkYXRvcnMubmV3UGFzc3dvcmQsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHthY3RpdmVTdGVwID09PSAzICYmIDxEb25lIC8+fVxuXG4gICAgICA8QXV0aFN0ZXBwZXIgey4uLnsgYWN0aXZlU3RlcCwgc3RlcHMsIGljb25zOiBzdGVwcGVySWNvbnMgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVN0eWxlcygpIHtcbiAgcmV0dXJuIG1ha2VTdHlsZXMoe1xuICAgIGJ1dHRvbnNXcmFwcGVyOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgfSxcbiAgfSkoKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBBdXRoSW5wdXQgfSBmcm9tICcuLi8uLi9jb21tb24vQXV0aElucHV0JztcbmltcG9ydCB7IEF1dGhGb3JtIH0gZnJvbSAnLi4vLi4vY29tbW9uL0F1dGhGb3JtJztcbmltcG9ydCB7IEF1dGhCdXR0b24gfSBmcm9tICcuLi8uLi9jb21tb24vQXV0aEJ1dHRvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBOZXdQYXNzd29yZCh7IHN1Ym1pdEhhbmRsZXIsIHZhbGlkYXRlLCBoYW5kbGVSZXNldCB9KSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHZhcmlhbnQ9XCJoMlwiPlxuICAgICAgICBOZXcgcGFzc3dvcmRcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxBdXRoRm9ybVxuICAgICAgICB7Li4ue1xuICAgICAgICAgIHN1Ym1pdEhhbmRsZXIsXG4gICAgICAgICAgaGFuZGxlUmVzZXQsXG4gICAgICAgICAgdmFsaWRhdGUsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlczogeyBuZXdQYXNzd29yZDogJycsIGNvbmZpcm1hdGlvblBhc3N3b3JkOiAnJyB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXV0aElucHV0IG5hbWU9XCJuZXdQYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwibmV3IHBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgPEF1dGhJbnB1dCBuYW1lPVwiY29uZmlybWF0aW9uUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIm5ldyBwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgIDxBdXRoQnV0dG9uIHRleHQ9XCJjaGFuZ2VcIiAvPlxuICAgICAgPC9BdXRoRm9ybT5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gdXNlU3R5bGVzKCkge1xuICByZXR1cm4gbWFrZVN0eWxlcyh7XG4gICAgYm94OiB7XG4gICAgICB3aWR0aDogJzMwMHB4JyxcbiAgICAgIHBhZGRpbmc6ICczNXB4JyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMTVweCcsXG4gICAgICBmb250U2l6ZTogJzQwcHgnLFxuICAgIH0sXG4gIH0pKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgU2FkU21pbGUgfSBmcm9tICcuLi8uLi8uLi9pY29ucyc7XG5pbXBvcnQgeyBBdXRoQnV0dG9uLCBEZXNjcmlwdGlvbkljb24gfSBmcm9tICcuLi8uLi9jb21tb24nO1xuXG5leHBvcnQgY29uc3QgUmVzdG9yZVNlc3Npb25FbmRlZCA9ICh7IGhhbmRsZVJlc2V0IH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPERlc2NyaXB0aW9uSWNvbiBJY29uPXtTYWRTbWlsZX0gd2lkdGg9ezEyMH0gaGVpZ2h0PXsxMjB9IC8+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgIFdlIGFwb2xvZ2l6ZSwgYnV0IHlvdXIgcmVzdG9yZSBwYXNzd29yZCBzZXNzaW9uIGVuZGVkXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8QXV0aEJ1dHRvbiB0ZXh0PVwiUmVzdGFydFwiIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc1dyYXBwZXJ9PlxuICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB0bz1cIi9hdXRoL3NpZ24tdXBcIj5cbiAgICAgICAgICBTaWduIHVwXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gdG89XCIvYXV0aC9zaWduLWluXCI+XG4gICAgICAgICAgU2lnbiBpblxuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVN0eWxlcygpIHtcbiAgcmV0dXJuIG1ha2VTdHlsZXMoe1xuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogJzI1cHgnLFxuICAgICAgbWFyZ2luQm90dG9tOiAnMjVweCcsXG4gICAgfSxcblxuICAgIGxpbms6IHtcbiAgICAgIG1hcmdpbjogJzEwcHgnLFxuICAgICAgY29sb3I6ICcjOTBjYWY5JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgbGlua3NXcmFwcGVyOiB7XG4gICAgICBtYXJnaW5Ub3A6ICcxNXB4JyxcbiAgICB9LFxuXG4gICAgd3JhcHBlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9LFxuICB9KSgpO1xufVxuIiwiZXhwb3J0IHsgTmV3UGFzc3dvcmQgfSBmcm9tICcuL05ld1Bhc3N3b3JkJztcbmV4cG9ydCB7IFJlc3RvcmVTZXNzaW9uRW5kZWQgfSBmcm9tICcuL1Jlc3RvcmVTZXNzaW9uRW5kZWQnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IE5hdkxpbmssIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGRlbGF5cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhGb3JtLCBBdXRoSW5wdXQsIEF1dGhCdXR0b24sIERlc2NyaXB0aW9uSWNvbiB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYXV0aFZhbGlkYXRvcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hdXRoL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2ljb25zJztcbmltcG9ydCB7IGdldEF1dGhQcml2YXRlRlMgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWxlY3RvcnMvYXV0aCc7XG5pbXBvcnQgeyBhdXRoRmV0Y2hTdGF0dXNOYW1lcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvbmFtZXMnO1xuaW1wb3J0IHsgaXNTdWNjZXNzRmV0Y2hTdGF0dXMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mZXRjaF9zdGF0dXNlcy9hdXhfZnVuY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IFNpZ25JbiA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VIaXN0b3J5KCk7XG5cbiAgY29uc3Qgc2lnbkluRlMgPSB1c2VTZWxlY3RvcihnZXRBdXRoUHJpdmF0ZUZTKGF1dGhGZXRjaFN0YXR1c05hbWVzLlNJR05fSU4pKTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKHsgZW1haWwsIHBhc3N3b3JkIH0pID0+IGRpc3BhdGNoKHNpZ25JbihlbWFpbCwgcGFzc3dvcmQpKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1N1Y2Nlc3NGZXRjaFN0YXR1cyhzaWduSW5GUykpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgfSwgZGVsYXlzLkFGVEVSX1NJR05fSU4pO1xuICB9LCBbc2lnbkluRlNdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgIDxEZXNjcmlwdGlvbkljb24gSWNvbj17VXNlcn0gLz5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSB2YXJpYW50PVwiaDJcIj5cbiAgICAgICAgU2lnbiBpblxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEF1dGhGb3JtXG4gICAgICAgIHsuLi57XG4gICAgICAgICAgc3VibWl0SGFuZGxlcixcbiAgICAgICAgICBpbml0aWFsVmFsdWVzOiB7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0sXG4gICAgICAgICAgdmFsaWRhdGU6IGF1dGhWYWxpZGF0b3JzLmF1dGhEYXRhLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QXV0aElucHV0IGF1dG9Gb2N1cz17dHJ1ZX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDxBdXRoSW5wdXQgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgIDxBdXRoQnV0dG9uIHRleHQ9XCJzaWduIGluXCIgLz5cbiAgICAgIDwvQXV0aEZvcm0+XG4gICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLnNlcnZpY2VCb3h9PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIERvbmB0IGhhdmUgYWNjb3VudD9cbiAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB0bz1cIi9hdXRoL3NpZ24tdXBcIj5cbiAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gdG89XCIvYXV0aC9yZXN0b3JlLXBhc3N3b3JkXCI+XG4gICAgICAgICAgRm9yZ2V0IHBhc3N3b3JkXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZnVuY3Rpb24gdXNlU3R5bGVzKCkge1xuICByZXR1cm4gbWFrZVN0eWxlcyh7XG4gICAgYm94OiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBtYXJnaW5Cb3R0b206ICcxNXB4JyxcbiAgICAgIGZvbnRTaXplOiAnNDBweCcsXG4gICAgfSxcbiAgICBzZXJ2aWNlQm94OiB7XG4gICAgICBtYXJnaW5Ub3A6ICcyNXB4JyxcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIGNvbG9yOiAnIzkwY2FmOScsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQZXJzb25BZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25BZGQnO1xuaW1wb3J0IFZlcmlmaWVkVXNlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1ZlcmlmaWVkVXNlcic7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGVjayc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgdmVyaWZpY2F0aW9uRW1haWwsIHJlc2VuZFZlcmlmeUVtYWlsQ29kZSB9IGZyb20gJy4uLy4uLy4uLy4uL2FjdGlvbnMvc2V0dGluZ3MvdXNlcl9lbWFpbCc7XG5pbXBvcnQgeyBzaWduVXAgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZGVsYXlzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXV0aC9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2lnblVwRm9ybSB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBEb25lLCBWZXJpZnlDb2RlLCBBdXRoU3RlcHBlciB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBhdXRoVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgvdmFsaWRhdGlvbic7XG5pbXBvcnQgeyBnZXRBdXRoUHJpdmF0ZUZTLCBnZXRFbWFpbFByb3ZpZGVyRXJyb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWxlY3RvcnMvYXV0aCc7XG5pbXBvcnQgeyBpbnZva2VBZnRlckRlbGF5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvYXV0aC90b29scyc7XG5pbXBvcnQgeyBpc1N1Y2Nlc3NGZXRjaFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2ZldGNoX3N0YXR1c2VzL2F1eF9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgYXV0aEZldGNoU3RhdHVzTmFtZXMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9hdXRoL25hbWVzJztcbmltcG9ydCB7IHNldHRpbmdzRmV0Y2hTdGF0dXNOYW1lcyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3NldHRpbmdzL25hbWVzJztcblxuY29uc3QgeyBTSUdOX1VQIH0gPSBhdXRoRmV0Y2hTdGF0dXNOYW1lcztcbmNvbnN0IHsgVkVSSUZZX0VNQUlMIH0gPSBzZXR0aW5nc0ZldGNoU3RhdHVzTmFtZXM7XG5jb25zdCBzdGVwcGVySWNvbnMgPSB7XG4gIDE6IDxQZXJzb25BZGRJY29uIC8+LFxuICAyOiA8VmVyaWZpZWRVc2VySWNvbiAvPixcbiAgMzogPENoZWNrSWNvbiAvPixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWduVXAoeyBzZXRWaXNpYmxlV2Fybk1lc3NhZ2UsIGlzVmlzaWJsZVdhcm5NZXNzYWdlIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICBjb25zdCBzdGVwcyA9IFsnU2lnbiB1cCcsICdWZXJpZmljYXRpb24nLCAnRG9uZSddO1xuXG4gIGNvbnN0IG5leHRTdGVwID0gKCkgPT4gc2V0QWN0aXZlU3RlcCgocHJldikgPT4gcHJldiArIDEpO1xuXG4gIGNvbnN0IHNpZ25VcEZTID0gdXNlU2VsZWN0b3IoZ2V0QXV0aFByaXZhdGVGUyhTSUdOX1VQKSk7XG4gIGNvbnN0IHZlcmlmeUVtYWlsRlMgPSB1c2VTZWxlY3RvcihnZXRBdXRoUHJpdmF0ZUZTKFZFUklGWV9FTUFJTCkpO1xuICBjb25zdCBpc0VtYWlsRXJyb3IgPSB1c2VTZWxlY3RvcihnZXRFbWFpbFByb3ZpZGVyRXJyb3IpO1xuXG4gIGNvbnN0IHJlc2VuZENvZGVIYW5kbGVyID0gKCkgPT4gZGlzcGF0Y2gocmVzZW5kVmVyaWZ5RW1haWxDb2RlKTtcbiAgY29uc3Qgc2lnblVwSGFuZGxlciA9ICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiBkaXNwYXRjaChzaWduVXAoZW1haWwsIHBhc3N3b3JkKSk7XG4gIGNvbnN0IHZlcmlmeUVtYWlsSGFuZGxlciA9ICh7IHZlcmlmeUNvZGUgfSkgPT4gZGlzcGF0Y2godmVyaWZpY2F0aW9uRW1haWwodmVyaWZ5Q29kZSkpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU3VjY2Vzc0ZldGNoU3RhdHVzKHNpZ25VcEZTKSAmJiBhY3RpdmVTdGVwID09PSAwKSB7XG4gICAgICBpbnZva2VBZnRlckRlbGF5KCgpID0+IHNldEFjdGl2ZVN0ZXAoMSksIGRlbGF5cy5CRVRXRUVOX1NURVBTKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTdWNjZXNzRmV0Y2hTdGF0dXModmVyaWZ5RW1haWxGUykgJiYgYWN0aXZlU3RlcCA9PT0gMSkge1xuICAgICAgaW52b2tlQWZ0ZXJEZWxheSgoKSA9PiBzZXRBY3RpdmVTdGVwKDIpLCBkZWxheXMuQkVUV0VFTl9TVEVQUyk7XG4gICAgfVxuICB9LCBbc2lnblVwRlMsIHZlcmlmeUVtYWlsRlNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiAoXG4gICAgICAgIDxTaWduVXBGb3JtXG4gICAgICAgICAgey4uLntcbiAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXI6IHNpZ25VcEhhbmRsZXIsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYXV0aFZhbGlkYXRvcnMuYXV0aERhdGEsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIHthY3RpdmVTdGVwID09PSAxICYmIChcbiAgICAgICAgPFZlcmlmeUNvZGVcbiAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgaXNFbWFpbEVycm9yLFxuICAgICAgICAgICAgcmVzZW5kQ29kZUhhbmRsZXIsXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiB2ZXJpZnlFbWFpbEhhbmRsZXIsXG4gICAgICAgICAgICBza2lwU3RlcDogbmV4dFN0ZXAsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYXV0aFZhbGlkYXRvcnMudmVyaWZpY2F0aW9uQ29kZSxcbiAgICAgICAgICAgIHNldFZpc2libGVXYXJuTWVzc2FnZSxcbiAgICAgICAgICAgIGlzVmlzaWJsZVdhcm5NZXNzYWdlLFxuICAgICAgICAgICAgdGl0bGU6ICdDaGVjayBvdXQgdmVyaWZpY2F0aW9uIGNvZGUnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICB7YWN0aXZlU3RlcCA9PT0gMiAmJiA8RG9uZSAvPn1cbiAgICAgIDxBdXRoU3RlcHBlciB7Li4ueyBhY3RpdmVTdGVwLCBzdGVwcywgaWNvbnM6IHN0ZXBwZXJJY29ucyB9fSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB7IEF1dGhGb3JtIH0gZnJvbSAnLi4vLi4vY29tbW9uL0F1dGhGb3JtJztcbmltcG9ydCB7IEF1dGhJbnB1dCB9IGZyb20gJy4uLy4uL2NvbW1vbi9BdXRoSW5wdXQnO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQXV0aEJ1dHRvbiwgRGVzY3JpcHRpb25JY29uIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCB7IEFkZFVzZXIgfSBmcm9tICcuLi8uLi8uLi9pY29ucyc7XG5cbmV4cG9ydCBjb25zdCBTaWduVXBGb3JtID0gKHsgc3VibWl0SGFuZGxlciwgdmFsaWRhdGUgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgIDxEZXNjcmlwdGlvbkljb24gSWNvbj17QWRkVXNlcn0gLz5cbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSB2YXJpYW50PVwiaDJcIj5cbiAgICAgICAgU2lnbiB1cFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEF1dGhGb3JtIHsuLi57IHN1Ym1pdEhhbmRsZXIsIHZhbGlkYXRlLCBpbml0aWFsVmFsdWVzOiB7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0gfX0+XG4gICAgICAgIDxBdXRoSW5wdXQgYXV0b0ZvY3VzPXt0cnVlfSBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgLz5cbiAgICAgICAgPEF1dGhJbnB1dCBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgPEF1dGhCdXR0b24gdGV4dD1cInNpZ24gdXBcIiAvPlxuICAgICAgPC9BdXRoRm9ybT5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZUJveH0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgSGF2ZSBhbHJlYWR5IGFjY291bnQ/eycgJ31cbiAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB0bz1cIi9hdXRoL3NpZ24taW5cIj5cbiAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSB0bz1cIi9hdXRoL3Jlc3RvcmUtcGFzc3dvcmRcIj5cbiAgICAgICAgICBGb3JnZXQgcGFzc3dvcmRcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5mdW5jdGlvbiB1c2VTdHlsZXMoKSB7XG4gIHJldHVybiBtYWtlU3R5bGVzKCgpID0+ICh7XG4gICAgYm94OiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogJy0yMDBweCcsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgbWFyZ2luQm90dG9tOiAnMTVweCcsXG4gICAgICBmb250U2l6ZTogJzQwcHgnLFxuICAgIH0sXG4gICAgc2VydmljZUJveDoge1xuICAgICAgbWFyZ2luVG9wOiAnMjVweCcsXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBjb2xvcjogJyM5MGNhZjknLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSkpKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gQWRkVXNlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aCBkPVwiTTI1NS41MDEuNDk5QzE3NC4wNTMuNDk5IDEwNy43OSA2Ni43NjMgMTA3Ljc5IDE0OC4yMWMwIDUwLjQ0OSAyNS40MjkgOTUuMDY1IDY0LjEzNyAxMjEuNzI0LTM2LjEzOSAxMi40NzEtNjkuMjYzIDMzLjA3MS05Ny4wOTEgNjAuODk5QzI2LjU3NyAzNzkuMDkzIDAgNDQzLjI1NCAwIDUxMS41MDFoMzkuOTIyYzAtMTE4Ljg3MSA5Ni43MDgtMjE1LjU3OSAyMTUuNTc5LTIxNS41NzkgODEuNDQ4IDAgMTQ3LjcxMS02Ni4yNjQgMTQ3LjcxMS0xNDcuNzEyUzMzNi45NDkuNDk5IDI1NS41MDEuNDk5em0wIDI1NS41MDFjLTU5LjQzNSAwLTEwNy43ODktNDguMzU0LTEwNy43ODktMTA3Ljc4OXM0OC4zNTQtMTA3Ljc5IDEwNy43ODktMTA3Ljc5UzM2My4yOSA4OC43NzUgMzYzLjI5IDE0OC4yMTEgMzE0LjkzNiAyNTYgMjU1LjUwMSAyNTZ6TTQyOC4xNjQgMzg3Ljc0M3YtODMuODM3aC0zOS45MjJ2ODMuODM3aC04My44Mzd2MzkuOTIyaDgzLjgzN3Y4My44MzZoMzkuOTIydi04My44MzZINTEydi0zOS45MjJ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBBbmRyb2lkKHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyLjEyIDUxMi4xMlwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgPlxuICAgICAgPGcgZmlsbD1cIiM0Y2FmNTBcIj5cbiAgICAgICAgPHBhdGggZD1cIk03NC43MjcgMTcwLjc4N2MtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMyVjM1Mi4xMmMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjIwMi43ODdjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMyek00MzcuMzkzIDE3MC43ODdjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMlYzNTIuMTJjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyczMyLTE0LjMyNyAzMi0zMlYyMDIuNzg3YzAtMTcuNjczLTE0LjMyNi0zMi0zMi0zMnpNMzczLjM5MyAxNzAuNzg3SDEzOC43MjdjLTUuODkxIDAtMTAuNjY3IDQuNzc2LTEwLjY2NyAxMC42NjdWMzUyLjEyYy0uMDA1IDI1LjM0OCAxNy44MzEgNDcuMTk3IDQyLjY2NyA1Mi4yNjd2NzUuNzMzYzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMnMzMi0xNC4zMjcgMzItMzJ2LTc0LjY2N2g0Mi42Njd2NzQuNjY3YzAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMnMzMi0xNC4zMjcgMzItMzJ2LTc1LjczM2MyNC44MzYtNS4wNyA0Mi42NzItMjYuOTE5IDQyLjY2Ny01Mi4yNjdWMTgxLjQ1NGMtLjAwMS01Ljg5MS00Ljc3Ny0xMC42NjctMTAuNjY4LTEwLjY2N3pNMzMzLjYwNyA0NC4zMjNsMjYuMDA1LTI1Ljk4NGM0LjIzNy00LjA5MyA0LjM1NC0xMC44NDUuMjYyLTE1LjA4My00LjA5My00LjIzNy0xMC44NDUtNC4zNTQtMTUuMDgzLS4yNjItLjA4OS4wODYtLjE3Ni4xNzMtLjI2Mi4yNjJMMzE0LjIzNiAzMy41NWExNDUuOTg4IDE0NS45ODggMCAwMC0xMTYuMzMxIDBMMTY3LjYxMiAzLjIzNWMtNC4yMzctNC4wOTMtMTAuOTktMy45NzUtMTUuMDgzLjI2Mi0zLjk5MiA0LjEzNC0zLjk5MiAxMC42ODcgMCAxNC44MmwyNS45ODQgMjYuMDA1YTExMi41NzUgMTEyLjU3NSAwIDAwLTUwLjQ1MyA5NC40NjRjMCA1Ljg5MSA0Ljc3NiAxMC42NjcgMTAuNjY3IDEwLjY2N2gyMzQuNjY3YzUuODkxIDAgMTAuNjY3LTQuNzc2IDEwLjY2Ny0xMC42NjdhMTEyLjU3OCAxMTIuNTc4IDAgMDAtNTAuNDU0LTk0LjQ2M3pcIiAvPlxuICAgICAgPC9nPlxuICAgICAgPGcgZmlsbD1cIiNmYWZhZmFcIj5cbiAgICAgICAgPGNpcmNsZSBjeD17MjAyLjcyN30gY3k9ezk2LjEyfSByPXsxMC42Njd9IC8+XG4gICAgICAgIDxjaXJjbGUgY3g9ezMwOS4zOTN9IGN5PXs5Ni4xMn0gcj17MTAuNjY3fSAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcGxlKHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyLjAwMyA1MTIuMDAzXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnJlc3RQcm9wc31cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTM1MS45OCAwYy0yNy4yOTYgMS44ODgtNTkuMiAxOS4zNi03Ny43OTIgNDIuMTEyLTE2Ljk2IDIwLjY0LTMwLjkxMiA1MS4yOTYtMjUuNDcyIDgxLjA4OCAyOS44MjQuOTI4IDYwLjY0LTE2Ljk2IDc4LjQ5Ni00MC4wOTYgMTYuNzA0LTIxLjUzNiAyOS4zNDQtNTIgMjQuNzY4LTgzLjEwNHpcIiAvPlxuICAgICAgPHBhdGggZD1cIk00NTkuODUyIDE3MS43NzZjLTI2LjIwOC0zMi44NjQtNjMuMDQtNTEuOTM2LTk3LjgyNC01MS45MzYtNDUuOTIgMC02NS4zNDQgMjEuOTg0LTk3LjI0OCAyMS45ODQtMzIuODk2IDAtNTcuODg4LTIxLjkyLTk3LjYtMjEuOTItMzkuMDA4IDAtODAuNTQ0IDIzLjg0LTEwNi44OCA2NC42MDgtMzcuMDI0IDU3LjQwOC0zMC42ODggMTY1LjM0NCAyOS4zMTIgMjU3LjI4IDIxLjQ3MiAzMi44OTYgNTAuMTQ0IDY5Ljg4OCA4Ny42NDggNzAuMjA4IDMzLjM3Ni4zMiA0Mi43ODQtMjEuNDA4IDg4LTIxLjYzMiA0NS4yMTYtLjI1NiA1My43OTIgMjEuOTIgODcuMTA0IDIxLjU2OCAzNy41MzYtLjI4OCA2Ny43NzYtNDEuMjggODkuMjQ4LTc0LjE3NiAxNS4zOTItMjMuNTg0IDIxLjEyLTM1LjQ1NiAzMy4wNTYtNjIuMDgtODYuODE2LTMzLjA1Ni0xMDAuNzM2LTE1Ni41MTItMTQuODE2LTIwMy45MDR6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXNrdG9wKHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDQ5NyA0OTdcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNzUuNTcgNDAxbC04NC4xNCAzMC0zLjE5IDExLjE1QzE4My43MSA0NTguMDIgMTY2LjUgNDcxIDE1MCA0NzF2Ny41aDE3NC41elwiXG4gICAgICAgIGZpbGw9XCIjYWRhY2E3XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMwOC43NiA0NDIuMTVMMjk3IDQwMWwtNDguNS0zMC00OC41IDMwLTguNTcgMzBoODQuMTRsMy4xOSAxMS4xNUMyODMuMjkgNDU4LjAyIDMwMC41IDQ3MSAzMTcgNDcxbDE1IDcuNSAxNS03LjVjLTE2LjUgMC0zMy43MS0xMi45OC0zOC4yNC0yOC44NXpcIlxuICAgICAgICBmaWxsPVwiIzhmOGY4YlwiXG4gICAgICAvPlxuICAgICAgPHBhdGggZD1cIk00MzcgNDAxaDMwYzE2LjUgMCAzMC0xMy41IDMwLTMwdi02MGwtNjAtNjB6XCIgZmlsbD1cIiNhZGFjYTdcIiAvPlxuICAgICAgPHBhdGggZD1cIk0wIDM3MWMwIDE2LjUgMTMuNSAzMCAzMCAzMGg0MDdjMTYuNSAwIDMwLTEzLjUgMzAtMzBWMTkxTDAgMzExelwiIGZpbGw9XCIjY2JjOWMyXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNDY3IDExaC0zMGwzMCAzMDBoMzBWNDFjMC0xNi41LTEzLjUtMzAtMzAtMzB6XCIgZmlsbD1cIiM0MDQyNDJcIiAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00NjcgNDFjMC0xNi41LTEzLjUtMzAtMzAtMzBIMzBDMTMuNSAxMSAwIDI0LjUgMCA0MXYyNzBoNDY3di0zMEwyNDguNSAxNjAuOTg3elwiXG4gICAgICAgIGZpbGw9XCIjNTY1OTU5XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQ2NyA0MC45OTVsLTI5Ljk5NC0uMDIxYzAgLjAwNS0xODguNTA2IDEyMC4wMTMtMTg4LjUwNiAxMjAuMDEzUzQzNy4wMDIgMjgwLjk5OCA0MzcgMjgxbDI5Ljk5OS0uMDJjLjAwMSAwLS4wMDItMjM5Ljk4MS4wMDEtMjM5Ljk4NXpcIlxuICAgICAgICBmaWxsPVwiIzRiODhkNVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00MzcgNDAuOTk1bC00MDYuOTEyLS4wMjJjLS4wMjUuMDEyLS4wNDYgMjQwLjAyMi0uMDg4IDI0MC4wMjdsNDA2Ljk5LS4wMmMuMDA1IDAtLjAzMi0yMzkuOTgxLjAxLTIzOS45ODV6XCJcbiAgICAgICAgZmlsbD1cIiM2OWE3ZmZcIlxuICAgICAgLz5cbiAgICAgIDxjaXJjbGUgY3g9ezI0OC41fSBjeT17MzU2fSBmaWxsPVwiI2ZmZlwiIHI9ezE1fSAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00MDMuNSA0ODZoLTMxMGMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWgzMTBjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNXMtMy4zNTggNy41LTcuNSA3LjV6XCJcbiAgICAgICAgZmlsbD1cIiM4ZjhmOGJcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBFZGdlKHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyLjAwNSA1MTIuMDA1XCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnJlc3RQcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE5LjQ0MyAyMjcuMzkyaC4yODhjMy4wNC0yNC4wMzIgOC42NC00Ny4wNCAxNi43MzYtNjkuMDg4czE5LjA3Mi00Mi43MiAzMi44OTYtNjIuMDggMjkuNzkyLTM2LjEyOCA0Ny45MDQtNTAuMzM2IDM5LjQyNC0yNS40MDggNjMuOTM2LTMzLjZTMjMyLjA4MyAwIDI2MC4yNzUgMGM0NC4wNjQgMCA4My41MiAxMC4wNDggMTE4LjQzMiAzMC4xNzZzNjIuOTEyIDQ5LjA1NiA4NC4wOTYgODYuODE2YzE5Ljg0IDM1LjY0OCAyOS43NiA3Ny43OTIgMjkuNzYgMTI2LjQzMnY1My43NkgxNzAuNzM5Yy4xOTIgMjEuMTUyIDUuMjggMzkuNTIgMTUuMjk2IDU1LjA3MnMyMy4wNCAyNy4yMzIgMzkuMDQgMzUuMDQgMzQuMDggMTMuMjQ4IDU0LjIwOCAxNi4yODggNDAuNDE2IDMuMzI4IDYwLjkyOC44NjQgNDAuMzItNi45MTIgNTkuNDg4LTEzLjMxMmMxOS4xNjgtNi40IDM1LjcxMi0xNC40MzIgNDkuNjMyLTI0LjE2djEwNy44NGMtMTcuNTM2IDEwLjQ5Ni0zOS40MjQgMTkuMjY0LTY1LjYzMiAyNi4zMDQtMjYuMjA4IDcuMDQtNTYgMTAuNjg4LTg5LjM3NiAxMC44OC0zMy4zNzYuMTkyLTYzLjQ4OC00Ljg2NC05MC40LTE1LjE2OC0zNi4wMzItMTMuOTItNjUuNzI4LTM3LjY2NC04OS4wODgtNzEuMlM3OS42MDMgMzU2LjU3NiA3OS4yMTkgMzE5LjJjLS41NzYtNDYuMTQ0IDEwLjAxNi04NS40MDggMzEuNzQ0LTExNy44MjRzNTIuNzM2LTU3Ljk4NCA5Mi45Ni03Ni42NzJjLTkuMTUyIDExLjQ1Ni0xNi41NzYgMjMuNDI0LTIyLjMwNCAzNS45MDRzLTEwLjExMiAyNy43MTItMTMuMTUyIDQ1LjYzMmgxODEuNjMyYzEuNTM2LTE0LjY4OC43NjgtMjguMDMyLTIuMzA0LTQwLjAzMi0zLjA0LTEyLTcuNTItMjEuNjk2LTEzLjQ0LTI5LjAyNHMtMTIuNjQtMTMuNjk2LTIwLjE2LTE5LjAwOGMtNy41Mi01LjM0NC0xNS4yLTkuMjQ4LTIzLjA0LTExLjcxMi03LjgwOC0yLjQ2NC0xNC45NzYtNC40NDgtMjEuNDQtNS44NTZzLTExLjgwOC0yLjI0LTE2LjAzMi0yLjQzMmwtNi4yNzItLjM1MmMtMjUuNzI4Ljk2LTUwLjQ5NiA1LjE4NC03NC4yNCAxMi43MzZzLTQ1LjAyNCAxNy41MDQtNjMuOTA0IDI5Ljg4OC0zNS42OCAyNS43OTItNTAuMzM2IDQwLjE5Mi0yNy44NzIgMjkuOTg0LTM5LjQ4OCA0Ni43NTJ6XCJcbiAgICAgICAgZmlsbD1cIiMyMTk2ZjNcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBGaXJlZm94KHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjkxLjY3OCAyOTEuNjc4XCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnJlc3RQcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE0NS42NiA0LjI3N2M3NS41NjEgMCAxMzYuNTU2IDYwLjk5NSAxMzYuNTU2IDEzNi41NTZTMjIxLjIyIDI3Ny4zODkgMTQ1LjY2IDI3Ny4zODkgOS4xMDQgMjE2LjM5NCA5LjEwNCAxNDAuODMzIDcwLjA5OSA0LjI3NyAxNDUuNjYgNC4yNzd6XCJcbiAgICAgICAgZmlsbD1cIiMyMzk0YmNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTY5LjMyOSAyODQuNjcxYzY5LjE4OC0xMS44MzUgMTIxLjk5LTcxLjAwOSAxMjEuOTktMTQzLjgzOWwtLjkxIDEuODIxYzEuODIxLTEzLjY1NiAxLjgyMS0yNi40MDEtLjkxLTM2LjQxNS0uOTEgOC4xOTMtMS44MjEgMTIuNzQ1LTMuNjQyIDE0LjU2NiAwLS45MSAwLTkuMTA0LTIuNzMxLTIwLjAyOC0uOTEtOC4xOTMtMi43MzEtMTYuMzg3LTUuNDYyLTIzLjY3LjkxIDMuNjQxLjkxIDYuMzczLjkxIDkuMTA0LTEwLjkyNC0yOC4yMjItMzYuNDE1LTYzLjcyNi0xMDEuMDUxLTYyLjgxNiAwIDAgMjIuNzU5IDIuNzMxIDMyLjc3MyAxOC4yMDcgMCAwLTEwLjkyNC0yLjczMS0xOS4xMTggMS44MjEgMTAuMDE0IDMuNjQxIDE5LjExOCA4LjE5MyAyNi40MDEgMTIuNzQ1aC45MWMxLjgyMS45MSAzLjY0MSAyLjczMSA1LjQ2MiAzLjY0MSAxMy42NTYgMTAuMDE0IDI2LjQwMSAyMy42NyAyNS40OSA0MC45NjctMy42NDEtNS40NjItNy4yODMtOS4xMDQtMTIuNzQ1LTEwLjAxNCA2LjM3MyAyNC41OCA2LjM3MyA0NC42MDggMS44MjEgNjAuMDg1LTMuNjQxLTEwLjkyNC02LjM3My0xNi4zODctOS4xMDQtMTkuMTE4IDMuNjQxIDMyLjc3My0uOTEgNTYuNDQzLTE1LjQ3NiA3MS45MTkgMi43MzEtOS4xMDQgMy42NDEtMTcuMjk3IDMuNjQxLTIzLjY3LTE3LjI5NyAyNS40OS0zNi40MTUgMzkuMTQ2LTU4LjI2NCA0MC4wNTYtOC4xOTMgMC0xNi4zODctLjkxLTI0LjU4LTMuNjQxLTEwLjkyNC0zLjY0MS0yMC45MzktMTAuMDE0LTMwLjA0Mi0xOS4xMTggMTMuNjU2LjkxIDI3LjMxMS0uOTEgMzguMjM2LTcuMjgzbDE4LjIwNy0xMS44MzVjMi43MzEtLjkxIDQuNTUyLS45MSA3LjI4MyAwIDQuNTUyLS45MSA2LjM3My0yLjczMSA0LjU1Mi03LjI4My0xLjgyMS0yLjczMS01LjQ2Mi01LjQ2Mi0xMC4wMTQtOC4xOTMtOS4xMDQtNC41NTItMTkuMTE4LTMuNjQxLTI5LjEzMiAyLjczMS0xMC4wMTQgNS40NjItMTkuMTE4IDUuNDYyLTI4LjIyMi0uOTEtNS40NjItMy42NDEtMTEuODM1LTkuMTA0LTE3LjI5Ny0xNi4zODdsLTEuODIxLTMuNjQxYy0uOTEgOC4xOTMgMCAxNy4yOTcgMy42NDEgMzAuMDQyLTMuNjQxLTExLjgzNS00LjU1Mi0yMS44NDktMy42NDEtMzAuMDQyIDAtNi4zNzMgMi43MzEtMTAuOTI0IDguMTkzLTEwLjkyNGgtMS44MjEgMi43MzFjNi4zNzMuOTEgMTIuNzQ1IDEuODIxIDIwLjkzOSA0LjU1Mi45MS03LjI4MyAwLTE1LjQ3Ni01LjQ2Mi0yMy42NyA3LjI4My03LjI4MyAxMy42NTYtMTEuODM1IDE5LjExOC0xNC41NjYgMi43MzEtLjkxIDMuNjQxLTMuNjQxIDQuNTUyLTYuMzczIDEuODIxLTMuNjQxLjkxLTUuNDYyLS45MS03LjI4My01LjQ2MiAwLTEwLjAxNCAwLTE1LjQ3Ni0uOTEtMS44MjEtLjkxLTQuNTUyLTIuNzMxLTguMTkzLTUuNDYybC04LjE5My04LjE5My0yLjczMS0xLjgyMS0uOTEtLjkxLjkxLS45MWMuOTEtNi4zNzMgMi43MzEtMTEuODM1IDUuNDYyLTE2LjM4N2wuOTEtLjkxYzIuNzMxLTQuNTUyIDguMTkzLTkuMTA0IDE1LjQ3Ni0xNC41NjYtMTQuNTY2IDEuODIxLTI3LjMxMSA4LjE5My0zOS4xNDYgMTkuMTE4LTkuMTA0LTIuNzMxLTIwLjkzOS0xLjgyMS0zMy42ODQgMy42NDFsLTEuODIxLjkxIDEuODIxLS45MWMtOC4xOTMtMy42NDEtMTMuNjU2LTE0LjU2Ni0xNi4zODctMzIuNzczQzIwLjkzOSAzNi4xNCAxNi4zODcgNTUuMjU4IDE2LjM4NyA4MS42NTlsLTIuNzMxIDQuNTUyLS45MS45MWMtMS44MjEgMi43MzEtMy42NDEgNi4zNzMtNi4zNzMgMTAuOTI0QzIuNzMyIDEwNS4zMjguOTExIDExMC43OS45MTEgMTE2LjI1MnY1LjQ2Mmw4LjE5My02LjM3M2MtMi43MzEgOC4xOTMtNS40NjIgMTYuMzg3LTYuMzczIDI0LjU4djMuNjQxTDAgMTQwLjgzM2MwIDMwLjk1MyAxMC4wMTQgNjAuMDg1IDI2LjQwMSA4My43NTRsLjkxLjkxLjkxLjkxYzExLjgzNSAxNi4zODcgMjcuMzExIDMwLjA0MiA0NS41MTkgNDAuOTY3IDEyLjc0NSA3LjI4MyAyNi40MDEgMTIuNzQ1IDQwLjk2NyAxNi4zODdsMi43MzEuOTFjMi43MzEuOTEgNi4zNzMuOTEgOS4xMDQgMS44MjEgMi43MzEgMCA0LjU1Mi45MSA3LjI4My45MWgyMS44NDljMy42NDEgMCA3LjI4My0uOTEgMTAuOTI0LS45MSAwLTEuODIxIDIuNzMxLTEuODIxIDIuNzMxLTEuODIxem05MS45NDgtMTc3LjUyMnYuOTEtLjkxelwiXG4gICAgICAgIGZpbGw9XCIjZWM4ODQwXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gR29vZ2xlQ2hyb21lKHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyLjAyMyA1MTIuMDIzXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnJlc3RQcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTQ5My4yNDggMTYwLjAyMUgyNTYuMDIxYy01My4wMTktLjA1Mi05Ni4wNDIgNDIuODg2LTk2LjA5NSA5NS45MDVhOTUuOTk5IDk1Ljk5OSAwIDAwMTIuMjU1IDQ3LjAyOEw1My41NjggOTkuNDM0Yzg2LjM5My0xMTEuODE1IDI0Ny4wNzMtMTMyLjQyMyAzNTguODg4LTQ2LjAzYTI1NS44NSAyNTUuODUgMCAwMTgwLjc5MiAxMDYuNjE3elwiXG4gICAgICAgIGZpbGw9XCIjZjQ0MzM2XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUxMi4wMjEgMjU2LjAyMWMtLjExOCAxNDEuMzM2LTExNC42NjQgMjU1Ljg4Mi0yNTYgMjU2YTIyOC4zMzIgMjI4LjMzMiAwIDAxLTMyLTIuMTMzbDExNS4yLTIwNS44NjdjMjYuNDAzLTQ1Ljk2NCAxMC42NjQtMTA0LjYyNS0zNS4yLTEzMS4yYTk1LjEwNiA5NS4xMDYgMCAwMC00Ny43ODctMTIuOGgyMzcuMDEzYTI1Mi40MDkgMjUyLjQwOSAwIDAxMTguNzc0IDk2elwiXG4gICAgICAgIGZpbGw9XCIjZmZjMTA3XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTMzOS4yMjEgMzA0LjAyMWwtMTE1LjIgMjA1Ljg2N2gtLjIxM0M4My42MiA0OTIuMTc2LTE1LjY2NiAzNjQuMTcyIDIuMDQ2IDIyMy45ODRhMjU1Ljg1MyAyNTUuODUzIDAgMDE1MS41MjItMTI0LjU1bDExOC42MTMgMjAzLjUyLjY0IDEuMDY3YzI2LjQ1MSA0NS45NSA4NS4xNDMgNjEuNzU3IDEzMS4wOTMgMzUuMzA3YTk1Ljk5MiA5NS45OTIgMCAwMDM1LjMwNy0zNS4zMDd6XCJcbiAgICAgICAgZmlsbD1cIiM0Y2FmNTBcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzM5LjIyMSAzMDQuMDIxYy0yNi40NTEgNDUuOTUtODUuMTQzIDYxLjc1Ny0xMzEuMDkzIDM1LjMwN2E5Ni4wMDcgOTYuMDA3IDAgMDEtMzUuMzA3LTM1LjMwN2wtLjY0LTEuMDY3Yy0yNS45MjEtNDYuMjUxLTkuNDM5LTEwNC43NTggMzYuODEyLTEzMC42NzlhOTYuMDA0IDk2LjAwNCAwIDAxNDcuMDI4LTEyLjI1NWguMjEzYTk1LjEwNiA5NS4xMDYgMCAwMTQ3Ljc4NyAxMi44YzQ1Ljg2NSAyNi41NzYgNjEuNjAzIDg1LjIzNyAzNS4yIDEzMS4yMDF6XCJcbiAgICAgICAgZmlsbD1cIiNmNDQzMzZcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzM5LjIyMSAzMDQuMDIxYy0yNi40NTEgNDUuOTUtODUuMTQzIDYxLjc1Ny0xMzEuMDkzIDM1LjMwN2E5Ni4wMDcgOTYuMDA3IDAgMDEtMzUuMzA3LTM1LjMwN2wtLjY0LTEuMDY3Yy0yNS45MjEtNDYuMjUxLTkuNDM5LTEwNC43NTggMzYuODEyLTEzMC42NzlhOTYuMDA0IDk2LjAwNCAwIDAxNDcuMDI4LTEyLjI1NWguMjEzYTk1LjEwNiA5NS4xMDYgMCAwMTQ3Ljc4NyAxMi44YzQ1Ljg2NSAyNi41NzYgNjEuNjAzIDg1LjIzNyAzNS4yIDEzMS4yMDF6XCJcbiAgICAgICAgZmlsbD1cIiMyMTk2ZjNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjU1LjY1OSAzNjIuNjg4YTEwNS44OTkgMTA1Ljg5OSAwIDAxLTUyLjk3MS0xNC4yMDggMTA3LjA2IDEwNy4wNiAwIDAxLTM5LjEwNC0zOS4xMjVjLTI5LjQ1NS01MS4wMTgtMTEuOTc1LTExNi4yNTQgMzkuMDQzLTE0NS43MDlhMTA2LjY3OCAxMDYuNjc4IDAgMDE1My4zOTUtMTQuMjkxYzU4LjkxLS4wNDYgMTA2LjcwNCA0Ny42NzQgMTA2Ljc0OSAxMDYuNTg0YTEwNi42NjMgMTA2LjY2MyAwIDAxLTE0LjI5MSA1My40MTYgMTA3LjI2NSAxMDcuMjY1IDAgMDEtOTIuODIxIDUzLjMzM3ptLjU1NC0xOTJhODUuMDk5IDg1LjA5OSAwIDAwLTc0LjIxOSA0Mi42NjdjLTIzLjU2NCA0MC44Ni05LjU0MyA5My4wODcgMzEuMzE3IDExNi42NTFzOTMuMDg3IDkuNTQzIDExNi42NTEtMzEuMzE3YzIzLjU2NC00MC44MTQgOS41OC05My4wMDMtMzEuMjM0LTExNi41NjhhODUuMzM3IDg1LjMzNyAwIDAwLTQyLjQ5NC0xMS40MzJoLS4wMjF6XCJcbiAgICAgICAgZmlsbD1cIiNmYWZhZmFcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnRlcm5ldEV4cGxvcmVyKHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNDk0LjA0NiA0OTQuMDQ2XCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnJlc3RQcm9wc31cbiAgICA+XG4gICAgICA8ZyBmaWxsPVwiIzIxOTZmM1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTIzOC45ODkgODQuMDE4YzQuNTM3LTMuNzU4IDUuMTY5LTEwLjQ4MiAxLjQxMS0xNS4wMTlhMTAuNjcgMTAuNjcgMCAwMC05LjczMS0zLjc1NUMxMjguMjE2IDgyLjgwOCA1My45MTUgMTcyLjUxNCA1NS43MzYgMjc2LjQ0NWMuMDQgOC43NDIuNjUzIDE3LjQ3MiAxLjgzNSAyNi4xMzNhMTAuNjY3IDEwLjY2NyAwIDAwOS4yOCA5LjE5NWMuNDQuMDMyLjg4Mi4wMzIgMS4zMjMgMGExMC42NjcgMTAuNjY3IDAgMDA5LjkyLTYuNzQxIDU0NS41IDU0NS41IDAgMDE2NS40OTMtMTE3Ljc4MSA1NjcuNDQ4IDU2Ny40NDggMCAwMTk1LjQwMi0xMDMuMjMzek00NTguNDI0IDI0Mi44NDVjLTEwLjUzNy03Ni42MDUtNjIuMjY2LTE0MS4yNDctMTM0LjY5OS0xNjguMzJhMTAuNjY2IDEwLjY2NiAwIDAwLTEwLjU2IDEuOTIgNTcwLjQ3MyA1NzAuNDczIDAgMDAtNTUuMjUzIDU1LjAxOSAxMC42NjggMTAuNjY4IDAgMDA3LjAxOSAxNy43MDdjMzguMTAxIDMuNDU2IDcxLjMxNyAzNy41MjUgODMuOTA0IDg0LjUyM0gxODMuMzUyYTEwLjY2OCAxMC42NjggMCAwMC04Ljc2OCA0LjU4N2MtMTMuNjc1IDE5LjcxMi0yNi42MjQgMzkuNDY3LTM4LjQgNTguNzA5YTQ4Mi4xMDIgNDgyLjEwMiAwIDAwLTQ1LjM1NSA5MS43MzMgMTAuNjY4IDEwLjY2OCAwIDAwMS41MzYgOS42MjFjLjE3NS4yNjEuMzY4LjUxMS41NzYuNzQ3IDM2LjUxNyA1Ni4wMDUgOTguNjQ4IDkwLjAxIDE2NS41MDQgOTAuNTgxIDg0Ljg4OS0uOTI5IDE2MC4xMzktNTQuODM1IDE4OC4zMzEtMTM0LjkxMiAyLjA3NC01LjUxNC0uNzE1LTExLjY2NS02LjIyOS0xMy43MzlhMTAuNjc0IDEwLjY3NCAwIDAwLTMuNzU1LS42ODNoLTg4LjUzM2ExMC42NjUgMTAuNjY1IDAgMDAtOS41NTcgNS45MzFjLTEzLjM4NyAzMy4xNTctNDQuNTc1IDU1LjcyMy04MC4yNTYgNTguMDY5LTQxLjA0NSAwLTc2LjYwOC0zNC42MDMtOTAuMDQ4LTg1LjMzM2gyNzkuNDY3YTEwLjY2NyAxMC42NjcgMCAwMDEwLjY2Ny05LjE1MiAyMzQuMzE5IDIzNC4zMTkgMCAwMDIuNjY3LTMzLjUxNSAyMzMuMzU2IDIzMy4zNTYgMCAwMC0yLjc3NS0zMy40OTN6XCIgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzk5LjUyMiAxMC4zMTJDMzY0LjUxNC0xNC45NDcgMjk3LjgwNSA2Ljk4NCAyMjUuNCA2Ny40ODVhNTg5LjExMyA1ODkuMTEzIDAgMDAtOTkuMTE1IDEwNy4yMjEgNTY3LjU3NyA1NjcuNTc3IDAgMDAtNjguMDMyIDEyMi40NTMgOS40NDIgOS40NDIgMCAwMC0uMzYzIDEuMDg4Yy0zNC4xMzMgODUuNTQ3LTMzLjMyMyAxNTcuMDU2IDIuMTMzIDE4Mi4zMzZhNzUuODQzIDc1Ljg0MyAwIDAwMzkuNDAzIDEzLjQ2MWMyLjM5Mi4wMTkgNC43OC0uMjA5IDcuMTI1LS42ODNhMjIuMzggMjIuMzggMCAwMDE1LjQyNC0xMC4zODljMi45OTctNS4wMjQgMS4zODktMTEuNTI0LTMuNjA1LTE0LjU3MS02LjU3MS00LjAxMS0yNi41Ni0xNi4yNTYtNy40MDMtNzIuODExYTQ2Ny4yNTcgNDY3LjI1NyAwIDAxNDMuMzQ5LTg3LjQ2N2MxMS42NjktMTguOTQ0IDI0LjQwNS0zOC40IDM3LjgyNC01Ny43MjhsMTUuMDgzLTIxLjIwNWExMDU1LjExIDEwNTUuMTEgMCAwMTY2LjcwOS04My42MjcgNTQ5LjMxOSA1NDkuMzE5IDAgMDE1My4xNDEtNTIuOTcxYzQwLjI5OS0zNC41MzkgNTguMDQ4LTMzLjgxMyA2My43ODctMzJzOS43MjggOC4xMDcgMTIuMDk2IDE4LjUzOWExMC41MTcgMTAuNTE3IDAgMDAxMS4zNzEgOC4yNTYgMTAuNjY3IDEwLjY2NyAwIDAwOS42NjQtMTAuMDkxYzEuNTU4LTM5LjQ4Ni0xMi40MzctNTguMTc0LTI0LjQ2OS02Ni45ODR6XCJcbiAgICAgICAgZmlsbD1cIiNmZmMxMDdcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBNb2JpbGUoeyB3aWR0aCA9ICcyNXB4JywgaGVpZ2h0ID0gJzI1cHgnLCAuLi5yZXN0UHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgey4uLnJlc3RQcm9wc31cbiAgICA+XG4gICAgICA8cmVjdCBmaWxsPVwiIzc4YjllYlwiIGhlaWdodD17NDgwfSByeD17MzJ9IHdpZHRoPXsyNTZ9IHg9ezEyOH0geT17MTh9IC8+XG4gICAgICA8cGF0aCBkPVwiTTMxMiA1OEgyMDBsLTgtNDBoMTI4elwiIGZpbGw9XCIjNzg3NjgwXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMzUyIDhIMTYwYTQwLjA0NSA0MC4wNDUgMCAwMC00MCA0MHY0MTZhNDAuMDQ1IDQwLjA0NSAwIDAwNDAgNDBoMTkyYTQwLjA0NSA0MC4wNDUgMCAwMDQwLTQwVjQ4YTQwLjA0NSA0MC4wNDUgMCAwMC00MC00MHptLTQxLjc1OCAxNmwtNC44IDI0aC05OC44ODNsLTQuOC0yNHpNMzc2IDQ2NGEyNC4wMjcgMjQuMDI3IDAgMDEtMjQgMjRIMTYwYTI0LjAyNyAyNC4wMjcgMCAwMS0yNC0yNFY0OGEyNC4wMjcgMjQuMDI3IDAgMDEyNC0yNGgyNS40NDFsNi43MTQgMzMuNTY5QTggOCAwIDAwMjAwIDY0aDExMmE4IDggMCAwMDcuODQ1LTYuNDMxTDMyNi41NTkgMjRIMzUyYTI0LjAyNyAyNC4wMjcgMCAwMTI0IDI0elwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTIwOCA0NTZoLTQ4YTggOCAwIDAwMCAxNmg0OGE4IDggMCAwMDAtMTZ6TTI0MCA0NTZoLThhOCA4IDAgMDAwIDE2aDhhOCA4IDAgMDAwLTE2elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gT3BlcmEoeyB3aWR0aCA9ICcyNXB4JywgaGVpZ2h0ID0gJzI1cHgnLCAuLi5yZXN0UHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgey4uLnJlc3RQcm9wc31cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTE3MS43NDQgMTExLjc0NEMxOTUuMjMyIDg0IDIyNS41NjggNjcuMjk2IDI1OC43MiA2Ny4yOTZjNzQuNTI4IDAgMTM0Ljk0NCA4NC40OCAxMzQuOTQ0IDE4OC43MDRTMzMzLjI0OCA0NDQuNzM2IDI1OC43MiA0NDQuNzM2Yy0zMy4xNTIgMC02My40ODgtMTYuNzM2LTg2Ljk3Ni00NC40NDggMzYuNzM2IDQ3LjY4IDkxLjMyOCA3Ny45MiAxNTIuMjg4IDc3LjkyIDM3LjUwNCAwIDcyLjU3Ni0xMS40NTYgMTAyLjU5Mi0zMS4zNkM0NzkuMDA4IDM5OS45NjggNTEyIDMzMS44NCA1MTIgMjU2cy0zMi45OTItMTQzLjk2OC04NS4zNzYtMTkwLjgxNmMtMzAuMDE2LTE5LjkwNC02NS4wODgtMzEuMzYtMTAyLjU5Mi0zMS4zNi02MC45Ni0uMDMyLTExNS41ODQgMzAuMjQtMTUyLjI4OCA3Ny45MlwiXG4gICAgICAgIGZpbGw9XCIjZDMyZjJmXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI1NiAwQzExNC42MjQgMCAwIDExNC42MjQgMCAyNTZjMCAxMzcuMjggMTA4LjA5NiAyNDkuMzQ0IDI0My44MDggMjU1LjcxMiA0LjAzMi4xOTIgOC4wOTYuMjg4IDEyLjE5Mi4yODggNjUuNTM2IDAgMTI1LjMxMi0yNC42NCAxNzAuNTkyLTY1LjE1Mi0zMC4wMTYgMTkuOTA0LTY1LjA4OCAzMS4zNi0xMDIuNTkyIDMxLjM2LTYwLjk2IDAtMTE1LjU1Mi0zMC4yNC0xNTIuMjg4LTc3LjkyLTI4LjMyLTMzLjQwOC00Ni42NTYtODIuNzg0LTQ3Ljg3Mi0xMzguMjR2LTEyLjA2NGMxLjI0OC01NS40MjQgMTkuNTg0LTEwNC44MzIgNDcuODcyLTEzOC4yNCAzNi43MzYtNDcuNjggOTEuMzI4LTc3LjkyIDE1Mi4yODgtNzcuOTIgMzcuNTA0IDAgNzIuNTc2IDExLjQ1NiAxMDIuNTkyIDMxLjM2QzM4MS41NjggMjQuODY0IDMyMi4xNDQuMjU2IDI1Ni45NiAwSDI1NnpcIlxuICAgICAgICBmaWxsPVwiI2Y0NDMzNlwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFNhZFNtaWxlKHsgd2lkdGgsIGhlaWdodCwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzNjggMzY4XCIgey4uLnsgd2lkdGgsIGhlaWdodCB9fSB7Li4ucmVzdH0+XG4gICAgICA8cGF0aCBkPVwiTTE4NCAwQzgyLjU0NCAwIDAgODIuNTQ0IDAgMTg0czgyLjU0NCAxODQgMTg0IDE4NGMxMDEuNDY0IDAgMTg0LTgyLjU0NCAxODQtMTg0UzI4NS40NjQgMCAxODQgMHptMCAzNTJjLTkyLjY0IDAtMTY4LTc1LjM2LTE2OC0xNjhTOTEuMzYgMTYgMTg0IDE2YzkyLjYzMiAwIDE2OCA3NS4zNiAxNjggMTY4cy03NS4zNjggMTY4LTE2OCAxNjh6XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMTQ0IDE1MmMwLTEzLjIzMi0xMC43NjgtMjQtMjQtMjRzLTI0IDEwLjc2OC0yNCAyNCAxMC43NjggMjQgMjQgMjQgMjQtMTAuNzY4IDI0LTI0em0tMzIgMGMwLTQuNDA4IDMuNTkyLTggOC04czggMy41OTIgOCA4LTMuNTkyIDgtOCA4LTgtMy41OTItOC04ek0yNDggMTI4Yy0xMy4yMzIgMC0yNCAxMC43NjgtMjQgMjRzMTAuNzY4IDI0IDI0IDI0IDI0LTEwLjc2OCAyNC0yNC0xMC43NjgtMjQtMjQtMjR6bTAgMzJjLTQuNDE2IDAtOC0zLjU5Mi04LThzMy41ODQtOCA4LTggOCAzLjU5MiA4IDgtMy41ODQgOC04IDh6TTE4NCAyMjRjLTI5LjgyNCAwLTU4LjI0IDEyLjYzMi03Ny45NiAzNC42NjQtMi45NDQgMy4yOTYtMi42NjQgOC4zNTIuNjI0IDExLjI5NmE3Ljk5OCA3Ljk5OCAwIDAwMTEuMjk2LS42MjRDMTM0LjY0OCAyNTAuNjg4IDE1OC43MiAyNDAgMTg0IDI0MGMyNS4yOCAwIDQ5LjM1MiAxMC42ODggNjYuMDQgMjkuMzM2QTcuOTYzIDcuOTYzIDAgMDAyNTYgMjcyYTcuOTY2IDcuOTY2IDAgMDA1LjMzNi0yLjA0YzMuMjg4LTIuOTQ0IDMuNTY4LTggLjYyNC0xMS4yOTZDMjQyLjI0IDIzNi42NCAyMTMuODMyIDIyNCAxODQgMjI0elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gU2FmYXJpKHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgPlxuICAgICAgPGNpcmNsZSBjeD17MjU2fSBjeT17MjU2fSByPXsyNTZ9IGZpbGw9XCIjMjE5NmYzXCIgLz5cbiAgICAgIDxwYXRoIGZpbGw9XCIjZmFmYWZhXCIgZD1cIk0yMjQgMjI0TDk2IDQxNmwxOTItMTI4elwiIC8+XG4gICAgICA8cGF0aCBmaWxsPVwiI2Y0NDMzNlwiIGQ9XCJNMjI0IDIyNGw2NCA2NEw0MTYgOTZ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cbiAgICAgIDxwYXRoIGQ9XCJNNDk3LjM2IDY5Ljk5NWMtNy41MzItNy41NDUtMTkuNzUzLTcuNTU4LTI3LjI4NS0uMDMyTDIzOC41ODIgMzAwLjg0NWwtODMuNTIyLTkwLjcxM2MtNy4yMTctNy44MzQtMTkuNDE5LTguMzQyLTI3LjI2Ni0xLjEyNi03Ljg0MSA3LjIxNy04LjM0MyAxOS40MjUtMS4xMjYgMjcuMjY2bDk3LjEyNiAxMDUuNDgxYTE5LjI3MyAxOS4yNzMgMCAwMDEzLjc4NCA2LjIyYy4xNDEuMDA2LjI3Ny4wMDYuNDEyLjAwNmExOS4zMTcgMTkuMzE3IDAgMDAxMy42MjMtNS42MjhMNDk3LjMyMiA5Ny4yODZjNy41NTEtNy41MjUgNy41NjQtMTkuNzQ2LjAzOC0yNy4yOTF6XCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNDkyLjcwMyAyMzYuNzAzYy0xMC42NTggMC0xOS4yOTYgOC42MzgtMTkuMjk2IDE5LjI5NyAwIDExOS44ODMtOTcuNTI0IDIxNy40MDctMjE3LjQwNyAyMTcuNDA3LTExOS44NzYgMC0yMTcuNDA3LTk3LjUyNC0yMTcuNDA3LTIxNy40MDcgMC0xMTkuODc2IDk3LjUzMS0yMTcuNDA3IDIxNy40MDctMjE3LjQwNyAxMC42NTggMCAxOS4yOTctOC42MzggMTkuMjk3LTE5LjI5NkMyNzUuMjk3IDguNjM4IDI2Ni42NTggMCAyNTYgMCAxMTQuODQgMCAwIDExNC44NCAwIDI1NmMwIDE0MS4xNTQgMTE0Ljg0IDI1NiAyNTYgMjU2IDE0MS4xNTQgMCAyNTYtMTE0Ljg0NiAyNTYtMjU2IDAtMTAuNjU4LTguNjM4LTE5LjI5Ny0xOS4yOTctMTkuMjk3elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFibGV0KHsgd2lkdGggPSAnMjVweCcsIGhlaWdodCA9ICcyNXB4JywgLi4ucmVzdFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMTAuOTMzIDUwMy40NjdoMjkwLjEzM2MxOC44NSAwIDM0LjEzMy0xNS4yODMgMzQuMTMzLTM0LjEzM1Y0Mi42NjdjMC0xOC44NS0xNS4yODMtMzQuMTMzLTM0LjEzMy0zNC4xMzNIMTEwLjkzM2MtMTguODUgMC0zNC4xMzMgMTUuMjgzLTM0LjEzMyAzNC4xMzN2NDI2LjY2N2MwIDE4Ljg1IDE1LjI4MyAzNC4xMzMgMzQuMTMzIDM0LjEzM3pNMjU2IDQ3Ny44NjdjLTkuNDI5IDAtMTcuMDY3LTcuNjM3LTE3LjA2Ny0xNy4wNjdzNy42MzctMTcuMDY3IDE3LjA2Ny0xNy4wNjdjOS40MjkgMCAxNy4wNjcgNy42MzcgMTcuMDY3IDE3LjA2N3MtNy42MzggMTcuMDY3LTE3LjA2NyAxNy4wNjd6bTAtNDQzLjczNGM0LjcxIDAgOC41MzMgMy44MjMgOC41MzMgOC41MzNTMjYwLjcxIDUxLjIgMjU2IDUxLjJjLTQuNzEgMC04LjUzMy0zLjgyMy04LjUzMy04LjUzM3MzLjgyMy04LjUzNCA4LjUzMy04LjUzNHpNMTAyLjQgNzYuOGgzMDcuMnYzNDEuMzMzSDEwMi40Vjc2Ljh6XCJcbiAgICAgICAgZmlsbD1cIiNlNmU3ZThcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoIGZpbGw9XCIjNzhiOWViXCIgZD1cIk0xMDIuNCA3Ni44aDMwNy4ydjM0MS4zMzNIMTAyLjR6XCIgLz5cbiAgICAgIDxnIGZpbGw9XCIjZTZlN2U4XCI+XG4gICAgICAgIDxjaXJjbGUgY3g9ezI1Nn0gY3k9ezQ2MC44fSByPXsxNy4wNjd9IC8+XG4gICAgICAgIDxjaXJjbGUgY3g9ezI1Nn0gY3k9ezQyLjY2N30gcj17OC41MzN9IC8+XG4gICAgICA8L2c+XG4gICAgICA8ZyBmaWxsPVwiIzIzMWYyMFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTQwMS4wNjcgNTEySDExMC45MzNjLTIzLjU1Mi0uMDI2LTQyLjY0MS0xOS4xMTUtNDIuNjY3LTQyLjY2N1Y0Mi42NjdDNjguMjkyIDE5LjExNSA4Ny4zODEuMDI2IDExMC45MzMgMGgyOTAuMTMzYzIzLjU1Mi4wMjYgNDIuNjQxIDE5LjExNSA0Mi42NjcgNDIuNjY3djQyNi42NjdjLS4wMjUgMjMuNTUxLTE5LjExNCA0Mi42NC00Mi42NjYgNDIuNjY2ek0xMTAuOTMzIDE3LjA2N2MtMTQuMTQgMC0yNS42IDExLjQ2LTI1LjYgMjUuNnY0MjYuNjY3YzAgMTQuMTQgMTEuNDYgMjUuNiAyNS42IDI1LjZoMjkwLjEzM2MxNC4xNCAwIDI1LjYtMTEuNDYgMjUuNi0yNS42VjQyLjY2N2MwLTE0LjE0LTExLjQ2LTI1LjYtMjUuNi0yNS42SDExMC45MzN6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk00MTguMTMzIDQyNi42NjdIOTMuODY3di0zNTguNGgzMjQuMjY3djM1OC40em0tMzA3LjItMTcuMDY3aDI5MC4xMzNWODUuMzMzSDExMC45MzNWNDA5LjZ6TTI1NiA0ODYuNGMtMTQuMTQgMC0yNS42LTExLjQ2LTI1LjYtMjUuNnMxMS40Ni0yNS42IDI1LjYtMjUuNiAyNS42IDExLjQ2IDI1LjYgMjUuNi0xMS40NiAyNS42LTI1LjYgMjUuNnptMC0zNC4xMzNjLTQuNzEgMC04LjUzMyAzLjgyMy04LjUzMyA4LjUzM3MzLjgyMyA4LjUzMyA4LjUzMyA4LjUzM2M0LjcxIDAgOC41MzMtMy44MjMgOC41MzMtOC41MzNzLTMuODIzLTguNTMzLTguNTMzLTguNTMzek0yNTYgNTkuNzMzYy05LjQyOSAwLTE3LjA2Ny03LjYzNy0xNy4wNjctMTcuMDY3UzI0Ni41NzEgMjUuNiAyNTYgMjUuNnMxNy4wNjcgNy42MzcgMTcuMDY3IDE3LjA2N1MyNjUuNDI5IDU5LjczMyAyNTYgNTkuNzMzelwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gVXNlcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aCBkPVwiTTQzNy4wMiAzMzAuOThjLTI3Ljg4My0yNy44ODItNjEuMDcxLTQ4LjUyMy05Ny4yODEtNjEuMDE4QzM3OC41MjEgMjQzLjI1MSA0MDQgMTk4LjU0OCA0MDQgMTQ4IDQwNCA2Ni4zOTMgMzM3LjYwNyAwIDI1NiAwUzEwOCA2Ni4zOTMgMTA4IDE0OGMwIDUwLjU0OCAyNS40NzkgOTUuMjUxIDY0LjI2MiAxMjEuOTYyLTM2LjIxIDEyLjQ5NS02OS4zOTggMzMuMTM2LTk3LjI4MSA2MS4wMThDMjYuNjI5IDM3OS4zMzMgMCA0NDMuNjIgMCA1MTJoNDBjMC0xMTkuMTAzIDk2Ljg5Ny0yMTYgMjE2LTIxNnMyMTYgOTYuODk3IDIxNiAyMTZoNDBjMC02OC4zOC0yNi42MjktMTMyLjY2Ny03NC45OC0xODEuMDJ6TTI1NiAyNTZjLTU5LjU1MSAwLTEwOC00OC40NDgtMTA4LTEwOFMxOTYuNDQ5IDQwIDI1NiA0MHMxMDggNDguNDQ4IDEwOCAxMDgtNDguNDQ5IDEwOC0xMDggMTA4elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gV2luZG93cyh7IHdpZHRoID0gJzI1cHgnLCBoZWlnaHQgPSAnMjVweCcsIC4uLnJlc3RQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB7Li4ucmVzdFByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjAxLjMwMiA0OS43NTRsLTE5MiAyNC45MzlBMTAuNjY3IDEwLjY2NyAwIDAwMCA4NS4zNnYxNDkuMzMzYzAgNS44OTEgNC43NzYgMTAuNjY3IDEwLjY2NyAxMC42NjdoMTkyYzUuODkxIDAgMTAuNjY3LTQuNzc2IDEwLjY2Ny0xMC42NjdWNjAuMzE0YTEwLjY2NiAxMC42NjYgMCAwMC0zLjYyNy04IDEwLjkwNiAxMC45MDYgMCAwMC04LjQwNS0yLjU2elwiXG4gICAgICAgIGZpbGw9XCIjZjQ0MzM2XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTUwOC4zNzQgMTMuMzZhMTAuNjY1IDEwLjY2NSAwIDAwLTguNDA1LTIuNjY3bC0yNTYgMzMuMzg3YTEwLjY2NiAxMC42NjYgMCAwMC05LjMwMSAxMC42Njd2MTc5Ljk0N2MwIDUuODkxIDQuNzc2IDEwLjY2NyAxMC42NjcgMTAuNjY3aDI1NmM1Ljg5MSAwIDEwLjY2Ny00Ljc3NiAxMC42NjctMTAuNjY3VjIxLjM2YTEwLjY3NCAxMC42NzQgMCAwMC0zLjYyOC04elwiXG4gICAgICAgIGZpbGw9XCIjNGNhZjUwXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTIwMi42NjcgMjY2LjY5M2gtMTkyQzQuNzc2IDI2Ni42OTMgMCAyNzEuNDY5IDAgMjc3LjM2djE0OS4zMzNhMTAuNjY3IDEwLjY2NyAwIDAwOS4zMDEgMTAuNjY3bDE5MiAyNS4wNDVjLjQ1NS4wMzEuOTExLjAzMSAxLjM2NSAwIDUuODkxIDAgMTAuNjY3LTQuNzc2IDEwLjY2Ny0xMC42NjdWMjc3LjM2Yy4wMDEtNS44OTEtNC43NzUtMTAuNjY3LTEwLjY2Ni0xMC42Njd6XCJcbiAgICAgICAgZmlsbD1cIiMyMTk2ZjNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNTAxLjMzNCAyNjYuNjkzaC0yNTZjLTUuODkxIDAtMTAuNjY3IDQuNzc2LTEwLjY2NyAxMC42Njd2MTc5Ljk0N2ExMC42NjcgMTAuNjY3IDAgMDA5LjMwMSAxMC42NjdsMjU2IDMzLjM4N2MuNDU1LjAzMS45MTEuMDMxIDEuMzY1IDAgNS44OTEgMCAxMC42NjctNC43NzYgMTAuNjY3LTEwLjY2N1YyNzcuMzZjMC01Ljg5MS00Ljc3NS0xMC42NjctMTAuNjY2LTEwLjY2N3pcIlxuICAgICAgICBmaWxsPVwiI2ZmYzEwN1wiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiZXhwb3J0IHsgQW5kcm9pZCB9IGZyb20gJy4vQW5kcm9pZCc7XG5leHBvcnQgeyBBcHBsZSB9IGZyb20gJy4vQXBwbGUnO1xuZXhwb3J0IHsgRWRnZSB9IGZyb20gJy4vRWRnZSc7XG5leHBvcnQgeyBGaXJlZm94IH0gZnJvbSAnLi9GaXJlZm94JztcbmV4cG9ydCB7IEdvb2dsZUNocm9tZSB9IGZyb20gJy4vR29vZ2xlQ2hyb21lJztcbmV4cG9ydCB7IEludGVybmV0RXhwbG9yZXIgfSBmcm9tICcuL0ludGVybmV0RXhwbG9yZXInO1xuZXhwb3J0IHsgT3BlcmEgfSBmcm9tICcuL09wZXJhJztcbmV4cG9ydCB7IFNhZmFyaSB9IGZyb20gJy4vU2FmYXJpJztcbmV4cG9ydCB7IFdpbmRvd3MgfSBmcm9tICcuL1dpbmRvd3MnO1xuZXhwb3J0IHsgVGFibGV0IH0gZnJvbSAnLi9UYWJsZXQnO1xuZXhwb3J0IHsgTW9iaWxlIH0gZnJvbSAnLi9Nb2JpbGUnO1xuZXhwb3J0IHsgRGVza3RvcCB9IGZyb20gJy4vRGVza3RvcCc7XG5leHBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi9TdWNjZXNzJztcbmV4cG9ydCB7IEFkZFVzZXIgfSBmcm9tICcuL0FkZFVzZXInO1xuZXhwb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5leHBvcnQgeyBTYWRTbWlsZSB9IGZyb20gJy4vU2FkU21pbGUnO1xuIiwiaW1wb3J0IEpvaSBmcm9tICdAaGFwaS9qb2knO1xuXG5leHBvcnQgY29uc3QgYXV0aFZhbGlkYXRvcnMgPSB7XG4gIGF1dGhEYXRhOiAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICAgIGNvbnN0IGVtYWlsU2NoZW1hID0gSm9pLnN0cmluZygpLmVtYWlsKHsgdGxkczogZmFsc2UgfSkucmVxdWlyZWQoKS5tZXNzYWdlcyh7XG4gICAgICAnc3RyaW5nLmVtYWlsJzogJ1wiZW1haWxcIiBtdXN0IGJlIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgJ3N0cmluZy5lbXB0eSc6ICdcImVtYWlsXCIgaXMgbm90IGFsbG93ZWQgdG8gYmUgZW1wdHknLFxuICAgICAgJ2FueS5yZXF1aXJlZCc6ICdcImVtYWlsXCIgaXMgcmVxdWlyZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFzc3dvcmRTY2hlbWEgPSBKb2kuc3RyaW5nKCkubWluKDgpLm1heCgyNSkucmVxdWlyZWQoKS5tZXNzYWdlcyh7XG4gICAgICAnc3RyaW5nLm1pbic6ICdcInBhc3N3b3JkXCIgbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgJ3N0cmluZy5lbXB0eSc6ICdcInBhc3N3b3JkXCIgaXMgbm90IGFsbG93ZWQgdG8gYmUgZW1wdHknLFxuICAgICAgJ2FueS5yZXF1aXJlZCc6ICdcInBhc3N3b3JkXCIgaXMgcmVxdWlyZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZXJyb3JzID0ge1xuICAgICAgZW1haWw6IGVtYWlsU2NoZW1hLnZhbGlkYXRlKGVtYWlsKS5lcnJvcj8ubWVzc2FnZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFNjaGVtYS52YWxpZGF0ZShwYXNzd29yZCkuZXJyb3I/Lm1lc3NhZ2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGlzRXJyb3JzID0gZXJyb3JzLmVtYWlsIHx8IGVycm9ycy5wYXNzd29yZDtcbiAgICByZXR1cm4gaXNFcnJvcnMgPyBlcnJvcnMgOiB7fTtcbiAgfSxcblxuICBjaGFuZ2VQYXNzd29yZDogKHZhbHVlcykgPT4ge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgIG9sZFBhc3N3b3JkOiBKb2kuc3RyaW5nKCkubWluKDYpLnJlcXVpcmVkKCkubWVzc2FnZXMoe1xuICAgICAgICAnc3RyaW5nLm1pbic6ICdcInBhc3N3b3JkXCIgbGVuZ3RoIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgICAnc3RyaW5nLmVtcHR5JzogJ1wicGFzc3dvcmRcIiBpcyBub3QgYWxsb3dlZCB0byBiZSBlbXB0eScsXG4gICAgICAgICdhbnkucmVxdWlyZWQnOiAnXCJwYXNzd29yZFwiIGlzIHJlcXVpcmVkJyxcbiAgICAgIH0pLFxuICAgICAgbmV3UGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5taW4oNikucmVxdWlyZWQoKS5tZXNzYWdlcyh7XG4gICAgICAgICdzdHJpbmcubWluJzogJ1wicGFzc3dvcmRcIiBsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICdzdHJpbmcuZW1wdHknOiAnXCJwYXNzd29yZFwiIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGVtcHR5JyxcbiAgICAgICAgJ2FueS5yZXF1aXJlZCc6ICdcInBhc3N3b3JkXCIgaXMgcmVxdWlyZWQnLFxuICAgICAgfSksXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS52YWxpZChKb2kucmVmKCduZXdQYXNzd29yZCcpKS5tZXNzYWdlcyh7XG4gICAgICAgICdhbnkub25seSc6ICdQYXNzd29yZHMgbXVzdCBiZSBlcXVhbCEnLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGVycm9yIH0gPSBzY2hlbWEudmFsaWRhdGUodmFsdWVzKTtcbiAgICBjb25zdCBlcnJIYXBwZW5lZEluRmllbGQgPSBlcnJvciAmJiBlcnJvci5kZXRhaWxzWzBdLnBhdGhbMF07XG4gICAgaWYgKGVyckhhcHBlbmVkSW5GaWVsZCA9PT0gJ29sZFBhc3N3b3JkJykge1xuICAgICAgcmV0dXJuIHsgb2xkUGFzc3dvcmQ6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG5cbiAgICBpZiAoZXJySGFwcGVuZWRJbkZpZWxkID09PSAnbmV3UGFzc3dvcmQnKSB7XG4gICAgICByZXR1cm4geyBuZXdQYXNzd29yZDogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cblxuICAgIGlmIChlcnJIYXBwZW5lZEluRmllbGQgPT09ICdjb25maXJtUGFzc3dvcmQnKSB7XG4gICAgICByZXR1cm4geyBjb25maXJtUGFzc3dvcmQ6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH0sXG5cbiAgbmV3UGFzc3dvcmQ6ICh2YWx1ZXMpID0+IHtcbiAgICBjb25zdCBzY2hlbWEgPSBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICBuZXdQYXNzd29yZDogSm9pLnN0cmluZygpLm1pbig2KS5yZXF1aXJlZCgpLm1lc3NhZ2VzKHtcbiAgICAgICAgJ3N0cmluZy5taW4nOiAnXCJwYXNzd29yZFwiIGxlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICAgJ3N0cmluZy5lbXB0eSc6ICdcInBhc3N3b3JkXCIgaXMgbm90IGFsbG93ZWQgdG8gYmUgZW1wdHknLFxuICAgICAgICAnYW55LnJlcXVpcmVkJzogJ1wicGFzc3dvcmRcIiBpcyByZXF1aXJlZCcsXG4gICAgICB9KSxcbiAgICAgIGNvbmZpcm1hdGlvblBhc3N3b3JkOiBKb2kuc3RyaW5nKCkudmFsaWQoSm9pLnJlZignbmV3UGFzc3dvcmQnKSkubWVzc2FnZXMoe1xuICAgICAgICAnYW55Lm9ubHknOiAnUGFzc3dvcmRzIG11c3QgYmUgZXF1YWwhJyxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gc2NoZW1hLnZhbGlkYXRlKHZhbHVlcyk7XG5cbiAgICBpZiAoZXJyb3IgJiYgZXJyb3IuZGV0YWlsc1swXS5wYXRoWzBdID09PSAnbmV3UGFzc3dvcmQnKSB7XG4gICAgICByZXR1cm4geyBuZXdQYXNzd29yZDogZXJyb3IubWVzc2FnZSB9O1xuICAgIH1cblxuICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzWzBdLnBhdGhbMF0gPT09ICdjb25maXJtYXRpb25QYXNzd29yZCcpIHtcbiAgICAgIHJldHVybiB7IGNvbmZpcm1hdGlvblBhc3N3b3JkOiBlcnJvci5tZXNzYWdlIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9LFxuXG4gIHZlcmlmaWNhdGlvbkNvZGU6ICh7IHZlcmlmeUNvZGUgfSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5zdHJpbmcoKS5taW4oNikubWF4KDYpLnJlcXVpcmVkKCkubWVzc2FnZXMoe1xuICAgICAgJ3N0cmluZy5taW4nOiAnXCJ2ZXJpZmljYXRpb24gY29kZVwiIGxlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nJyxcbiAgICAgICdzdHJpbmcubWF4JzogJ1widmVyaWZpY2F0aW9uIGNvZGVcIiBsZW5ndGggbXVzdCBiZSBsZXNzIHRoYW4gNiBjaGFyYWN0ZXJzIGxvbmcnLFxuICAgICAgJ3N0cmluZy5lbXB0eSc6ICdcInZlcmlmaWNhdGlvbiBjb2RlXCIgaXMgbm90IGFsbG93ZWQgdG8gYmUgZW1wdHknLFxuICAgICAgJ2FueS5yZXF1aXJlZCc6ICdcInZlcmlmaWNhdGlvbiBjb2RlXCIgaXMgcmVxdWlyZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gc2NoZW1hLnZhbGlkYXRlKHZlcmlmeUNvZGUpO1xuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3JzLnZlcmlmeUNvZGUgPSBlcnJvci5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnMudmVyaWZ5Q29kZSA/IGVycm9ycyA6IHt9O1xuICB9LFxuXG4gIGVtYWlsOiAodmFsdWVzKSA9PiB7XG4gICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCh7IHRsZHM6IGZhbHNlIH0pLnJlcXVpcmVkKCkubWVzc2FnZXMoe1xuICAgICAgICAnc3RyaW5nLmVtYWlsJzogJ1wiZW1haWxcIiBtdXN0IGJlIHZhbGlkIGVtYWlsIGFkZHJlc3MhJyxcbiAgICAgICAgJ3N0cmluZy5lbXB0eSc6ICdcImVtYWlsXCIgaXMgbm90IGFsbG93ZWQgdG8gYmUgZW1wdHknLFxuICAgICAgICAnYW55LnJlcXVpcmVkJzogJ1wiZW1haWxcIiBpcyByZXF1aXJlZCcsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IHNjaGVtYS52YWxpZGF0ZSh2YWx1ZXMpO1xuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3JzLmVtYWlsID0gZXJyb3IubWVzc2FnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzLmVtYWlsID8gZXJyb3JzIDoge307XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgY29tbW9uRmV0Y2hTdGF0dXNlcyB9IGZyb20gJy4uL2F1dGgvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGlzU3VjY2Vzc0ZldGNoU3RhdHVzID0gKHN0YXR1cykgPT4gc3RhdHVzID09PSBjb21tb25GZXRjaFN0YXR1c2VzLlNVQ0NFRURFRDtcbiIsImltcG9ydCB7IGZldGNoRXJyb3JzTmFtZXMgfSBmcm9tICcuLi9hdXRoL2NvbnN0YW50cyc7XG5cbmNvbnN0IHtcbiAgRVhQSVJFRF9DT05GSVJNQVRJT05fQ09ERSxcbiAgRVhQSVJFRF9SRVNUT1JFX1BBU1NXT1JEX1NFU1NJT04sXG4gIElOQ09SUkVDVF9BVVRIX0RBVEEsXG4gIElOQ09SUkVDVF9DT05GSVJNQVRJT05fQ09ERSxcbiAgSU5DT1JSRUNUX09MRF9QQVNTV09SRCxcbiAgSU5WQUxJRF9BVVRIX0RBVEEsXG4gIElOVkFMSURfQ09ORklSTUFUSU9OX0NPREUsXG4gIExPR0lOX0FMUkVBRFlfVVNFLFxuICBNQUlMX1BST1ZJREVSX0VSUk9SLFxuICBQQVNTV09SRFNfQVJFX0VRVUFMLFxuICBVTkVYUEVDVEVEX1NFUlZFUl9FUlJPUixcbiAgVVNFUl9CWV9FTUFJTF9OT1RfRk9VTkQsXG4gIERPVUJMRV9BVVRIRU5USUNBVEVEX0RFTklFRCxcbiAgU0lHTl9PVVRfRlJPTV9BTk9USEVSX0RFVklDRSxcbiAgRVhQSVJFRF9UT0tFTixcbiAgTUlTU0lOR19UT0tFTixcbiAgSU5WQUxJRF9UT0tFTixcbn0gPSBmZXRjaEVycm9yc05hbWVzO1xuXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgZ2V0TWVzc2FnZXM6IGZ1bmN0aW9uIChlcnJvck5hbWUpIHtcbiAgICBjb25zdCBmb3VuZEVycm9yID0gdGhpc1tlcnJvck5hbWVdO1xuICAgIGlmIChlcnJvck5hbWUgJiYgIWZvdW5kRXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzW1VORVhQRUNURURfU0VSVkVSX0VSUk9SXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmRFcnJvcjtcbiAgfSxcblxuICBbVVNFUl9CWV9FTUFJTF9OT1RfRk9VTkRdOiB7XG4gICAgbWVzc2FnZTogJ05vdCBmb3VuZCB1c2VyIGJ5IHRoaXMgZW1haWwnLFxuICAgIHRvb2xUaXA6ICdjaGVjayBvdXQgZW1haWwgYW5kIHRyeSBhZ2FpbicsXG4gIH0sXG4gIFtMT0dJTl9BTFJFQURZX1VTRV06IHtcbiAgICBtZXNzYWdlOiAnVGhpcyBlbWFpbCBoYXMgYWxyZWFkeSByZWdpc3RlcmVkJyxcbiAgICB0b29sVGlwOiAnSWYgdGhpcyBlbWFpbCBpcyB5b3VyLCB5b3UgY2FuIHVzZSBcImZvcmdldCBwYXNzd29yZFwiJyxcbiAgfSxcblxuICBbSU5DT1JSRUNUX0FVVEhfREFUQV06IHtcbiAgICBtZXNzYWdlOiAnUGFzc2VkIGluY29ycmVjdCBlbWFpbCBvciBwYXNzd29yZCcsXG4gICAgdG9vbFRpcDogJ0NoZWNrIHlvdSBkYXRhIGFuZCB0cnkgYWdhaW4nLFxuICB9LFxuICBbTUFJTF9QUk9WSURFUl9FUlJPUl06IHtcbiAgICBtZXNzYWdlOiAnVW5mb3J0dW5hdGVseSwgb2NjdXJyZWQgbWFpbCBwcm92aWRlciBlcnJvcicsXG4gICAgdG9vbFRpcDogJ3dlIGFyZSBmaXhpbmcgaXQuLi4nLFxuICB9LFxuICBbSU5DT1JSRUNUX0NPTkZJUk1BVElPTl9DT0RFXToge1xuICAgIG1lc3NhZ2U6ICdQYXNzZWQgY29uZmlybWF0aW9uIGNvZGUgaXMgaW5jb3JyZWN0JyxcbiAgICB0b29sVGlwOiAnVHJ5IGFnYWluIG9yIGNsaWNrIFwicmVzZW5kIGNvZGVcIiB0byBnZXQgbmV3IG9uZScsXG4gIH0sXG4gIFtJTlZBTElEX0NPTkZJUk1BVElPTl9DT0RFXToge1xuICAgIG1lc3NhZ2U6ICdQYXNzZWQgaW52YWxpZCBjb25maXJtYXRpb24gY29kZScsXG4gICAgdG9vbFRpcDogJ0NvZGUgbXVzdCBoYXZlIDYgY2hhcmFjdGVycycsXG4gIH0sXG4gIFtFWFBJUkVEX0NPTkZJUk1BVElPTl9DT0RFXToge1xuICAgIG1lc3NhZ2U6ICdDb25maXJtYXRpb24gY29kZSB3YXMgZXhwaXJlZCcsXG4gICAgdG9vbFRpcDogJ1RvIGdldCBuZXcgY29kZSBqdXMgY2xpY2sgXCJyZXNlbmQgY29kZVwiJyxcbiAgfSxcbiAgW0lOVkFMSURfQVVUSF9EQVRBXToge1xuICAgIG1lc3NhZ2U6ICdZb3UgcGFzc2VkIGludmFsaWQgYXV0aGVudGljYXRpb24gZGF0ZScsXG4gICAgdG9vbFRpcDogJ1wiZW1haWxcIiBtdXN0IGJlIGEgdmFsaWQgZW1haWwsIHBhc3N3b3JkIG11c3QgaGF2ZSA4IGNoYXJhY3RlcnMnLFxuICB9LFxuICBbVU5FWFBFQ1RFRF9TRVJWRVJfRVJST1JdOiB7XG4gICAgbWVzc2FnZTogJ091ciB0ZWFtIGlzIGFwb2xvZ2l6aW5nLCB3ZSBoYXZlIHVuZXhwZWN0ZWQgZXJyb3InLFxuICAgIHRvb2xUaXA6ICdwbGVhc2UgdHJ5IG9uZSBtb3JlIHRpbWUnLFxuICB9LFxuICBbSU5DT1JSRUNUX09MRF9QQVNTV09SRF06IHtcbiAgICBtZXNzYWdlOiAnXCJvbGQgcGFzc3dvcmRcIiBpcyBpbmNvcnJlY3QnLFxuICB9LFxuICBbRVhQSVJFRF9SRVNUT1JFX1BBU1NXT1JEX1NFU1NJT05dOiB7XG4gICAgbWVzc2FnZTogJ3Bhc3N3b3JkIHJlY292ZXJ5IHNlc3Npb24gZW5kZWQnLFxuICAgIHRvb2xUaXA6ICdzZXNzaW9uIGxhc3RzIDEwIG1pbnV0ZXMnLFxuICB9LFxuICBbUEFTU1dPUkRTX0FSRV9FUVVBTF06IHtcbiAgICBtZXNzYWdlOiAnTmV3IHBhc3N3b3JkIG11c3QgZGlmZmVyIGZyb20gb2xkIHBhc3N3b3JkJyxcbiAgfSxcbiAgW0RPVUJMRV9BVVRIRU5USUNBVEVEX0RFTklFRF06IHtcbiAgICBtZXNzYWdlOiAnQWNjb3VudCBvd25lciBkaWQgbm90IGNvbmZpcm0gdGhpcyBzaWduIGluIScsXG4gIH0sXG4gIFtTSUdOX09VVF9GUk9NX0FOT1RIRVJfREVWSUNFXToge1xuICAgIG1lc3NhZ2U6ICdBY2NvdW50IG93bmVyIGhhcyBleGl0ZWQgZnJvbSB0aGlzIGRldmljZSEnLFxuICB9LFxufTtcbiIsImltcG9ydCB7IGF1dGhGZXRjaFN0YXR1c05hbWVzIH0gZnJvbSAnLi4vYXV0aC9uYW1lcyc7XG5pbXBvcnQgeyBjb21tb25GZXRjaFN0YXR1c2VzIH0gZnJvbSAnLi4vYXV0aC9jb25zdGFudHMnO1xuaW1wb3J0IHsgc2V0dGluZ3NGZXRjaFN0YXR1c05hbWVzIH0gZnJvbSAnLi4vc2V0dGluZ3MvbmFtZXMnO1xuY29uc3Qge1xuICBDUkVBVEVfTkVXX1BBU1NXT1JELFxuICBHRVRfUkVTVF9QQVNTV09SRF9DUkVERU5USUFMUyxcbiAgUkVTRU5EX1JFU1RfUEFTU1dPUkRfQ1JFREVOVElBTFMsXG4gIFNJR05fSU4sXG4gIFNJR05fVVAsXG4gIFZFUklGWV9SRVNUX1JFU1RfUEFTU1dPUkRfQ09ORklSTV9DT0RFLFxuICBOT1RJRllfQUJPVVRfU0lHTl9JTixcbiAgRE9VQkxFX0FVVEhFTlRJQ0FURSxcbiAgQ0hFQ0tfQVVUSCxcbn0gPSBhdXRoRmV0Y2hTdGF0dXNOYW1lcztcblxuY29uc3Qge1xuICBSRVNFTkRfVkVSSUZZX0VNQUlMX0NPREUsXG4gIFNFTkRfVkVSSUZZX0VNQUlMX0NPREUsXG4gIENIQU5HRV9FTUFJTCxcbiAgVkVSSUZZX0VNQUlMLFxuICBDSEFOR0VfUEFTU1dPUkQsXG4gIEFDQ09VTlRfU0VUVElOR1MsXG4gIE5PVElGWV9BQk9VVF9TSUdOX0lOX09OLFxuICBOT1RJRllfQUJPVVRfU0lHTl9JTl9PRkYsXG4gIERPVUJMRV9BVVRIRU5USUNBVEVfT04sXG4gIERPVUJMRV9BVVRIRU5USUNBVEVfT0ZGLFxuICBHRVRUSU5HX1ZFUklGSUNBVElPTl9DT0RFX0ZPUl9CT1QsXG4gIERJU0NPTk5FQ1RfQk9ULFxuICBTSUdOX09VVF9ERVZJQ0VfREVWSUNFX0JZX0lELFxufSA9IHNldHRpbmdzRmV0Y2hTdGF0dXNOYW1lcztcblxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NNZXNzYWdlcyA9IHtcbiAgZ2V0U3VjY2Vzc01lc3NhZ2U6IGZ1bmN0aW9uIChhbGxGZXRjaFN0YXR1c2VzLCByZWR1Y2VyTmFtZSkge1xuICAgIGxldCBtZXNzYWdlID0gJyc7XG4gICAgY29uc3QgcHJpdmF0ZUZldGNoU3RhdHVzID0gYWxsRmV0Y2hTdGF0dXNlc1tyZWR1Y2VyTmFtZV07XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWVzc2FnZXMpO1xuICAgIGtleXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChwcml2YXRlRmV0Y2hTdGF0dXNbZWxdID09PSBjb21tb25GZXRjaFN0YXR1c2VzLlNVQ0NFRURFRCkge1xuICAgICAgICBtZXNzYWdlID0gdGhpcy5tZXNzYWdlc1tlbF07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSxcblxuICBtZXNzYWdlczoge1xuICAgIC8vYXV0aFxuICAgIFtDSEVDS19BVVRIXTogJ1N1Y2Nlc3MgbG9naW4gdG8gc3lzdGVtJyxcbiAgICBbQ0hBTkdFX0VNQUlMXTogJ0VtYWlsIGhhcyBjaGFuZ2VkIHN1Y2Nlc3NmdWxseScsXG4gICAgW0NIQU5HRV9QQVNTV09SRF06ICdQYXNzd29yZCBoYXMgY2hhbmdlZCBzdWNjZXNzZnVsbHknLFxuICAgIFtDUkVBVEVfTkVXX1BBU1NXT1JEXTogJ1Bhc3N3b3JkIGhhcyByZXN0b3JlZCBzdWNjZXNzZnVsbHknLFxuICAgIFtHRVRfUkVTVF9QQVNTV09SRF9DUkVERU5USUFMU106ICdWZXJpZmljYXRpb24gY29kZSB3YXMgc2VudCB0byB5b3VyIGVtYWlsJyxcbiAgICBbUkVTRU5EX1JFU1RfUEFTU1dPUkRfQ1JFREVOVElBTFNdOiAnVmVyaWZpY2F0aW9uIGNvZGUgd2FzIHNlbnQgdG8geW91ciBlbWFpbCByZXBlYXRlZGx5JyxcbiAgICBbUkVTRU5EX1ZFUklGWV9FTUFJTF9DT0RFXTogJ0NvbmZpcm1hdGlvbiBjb2RlIHdhcyBzZW50IHRvIHlvdXIgZW1haWwgcmVwZWF0ZWRseScsXG4gICAgW1NFTkRfVkVSSUZZX0VNQUlMX0NPREVdOiAnQ29uZmlybWF0aW9uIGNvZGUgd2FzIHNlbnQgdG8geW91ciBlbWFpbCcsXG4gICAgW1NJR05fSU5dOiAnU3VjY2Vzc2Z1bCBzaWduIGluIHRvIHN5c3RlbScsXG4gICAgW1NJR05fT1VUX0RFVklDRV9ERVZJQ0VfQllfSURdOiAnU3VjY2Vzc2Z1bGx5IHNpZ24gb3V0IGZyb20gZGV2aWNlJyxcbiAgICBbU0lHTl9VUF06ICdTdWNjZXNzZnVsIHNpZ24gdXAgdG8gc3lzdGVtJyxcbiAgICBbVkVSSUZZX0VNQUlMXTogJ0VtYWlsIGhhcyB2ZXJpZmllZCBzdWNjZXNzZnVsbHknLFxuICAgIFtWRVJJRllfUkVTVF9SRVNUX1BBU1NXT1JEX0NPTkZJUk1fQ09ERV06ICdDb25maXJtYXRpb24gY29kZSB3YXMgYmVlZCBzdWNjZWVkZWQgdmVyaWZpZWQnLFxuXG4gICAgLy9zZXR0aW5nc1xuICAgIFtBQ0NPVU5UX1NFVFRJTkdTXTogJ1NldHRpbmdzIHJlY2VpdmVkIHN1Y2Nlc3NmdWxseScsXG4gICAgW05PVElGWV9BQk9VVF9TSUdOX0lOXTogJ05vdGlmaWNhdGlvbiBmb3IgZXZlcnkgbmV3IHNpZ24gaW4gdHVybiBvbicsXG4gICAgW0RPVUJMRV9BVVRIRU5USUNBVEVdOiAnRG91YmxlX2F1dGhlbnRpY2F0ZSB0dXJuIG9uJyxcbiAgICBbR0VUVElOR19WRVJJRklDQVRJT05fQ09ERV9GT1JfQk9UXTogJ0NvZGUgZm9yIGJvdCB2ZXJpZmljYXRpb24gcmVjZWl2ZWQnLFxuICAgIFtESVNDT05ORUNUX0JPVF06ICdCb3Qgd2FzIGRpc2Nvbm5lY3RlZCBmcm9tIHlvdXIgYWNjb3VudCcsXG4gICAgW05PVElGWV9BQk9VVF9TSUdOX0lOX09OXTogJ05vdGlmaWNhdGlvbiBmb3IgZXZlcnkgbmV3IHNpZ24gaW4gVFVSTiBPTicsXG4gICAgW05PVElGWV9BQk9VVF9TSUdOX0lOX09GRl06ICdOb3RpZmljYXRpb24gZm9yIGV2ZXJ5IG5ldyBzaWduIGluIFRVUk4gT0ZGJyxcbiAgICBbRE9VQkxFX0FVVEhFTlRJQ0FURV9PTl06ICdEb3VibGUgYXV0aGVudGljYXRlIFRVUk4gT04nLFxuICAgIFtET1VCTEVfQVVUSEVOVElDQVRFX09GRl06ICdEb3VibGUgYXV0aGVudGljYXRlIFRVUk4gT0ZGICcsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==