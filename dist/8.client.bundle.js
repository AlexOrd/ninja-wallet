(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./containers/Authorization/AuthPage.js":
/*!**********************************************!*\
  !*** ./containers/Authorization/AuthPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./containers/Authorization/components/index.js");
/* harmony import */ var _components_common_fetch_status_snackbars_FetchStatusSnackBars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/common/fetch_status_snackbars/FetchStatusSnackBars */ "./components/common/fetch_status_snackbars/FetchStatusSnackBars.js");
/* harmony import */ var _selectors_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors/auth */ "./selectors/auth.js");
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









function AuthPage() {
  var styles = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isVisibleWarnMessage = _React$useState2[0],
      setVisibleWarnMessage = _React$useState2[1];

  var siAuthorized = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_selectors_auth__WEBPACK_IMPORTED_MODULE_6__["getAuthorizationStatus"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: styles.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/auth/sign-up",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["SignUp"], {
        setVisibleWarnMessage: setVisibleWarnMessage,
        isVisibleWarnMessage: isVisibleWarnMessage
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/auth/sign-in",
    component: _components__WEBPACK_IMPORTED_MODULE_4__["SignIn"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "/auth/restore-password",
    component: _components__WEBPACK_IMPORTED_MODULE_4__["RestorePassword"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    to: "/auth/sign-up"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_fetch_status_snackbars_FetchStatusSnackBars__WEBPACK_IMPORTED_MODULE_5__["FetchStatusSnackBars"], {
    reducerName: "authorization"
  }), isVisibleWarnMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["WarnSnackbar"], {
    text: "You can do it later from settings but we strongly recommend to do it now"
  }));
}

__signature__(AuthPage, "useStyles{styles}\nuseState{[isVisibleWarnMessage, setVisibleWarnMessage](false)}\nuseSelector{siAuthorized}", function () {
  return [useStyles, react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

function useStyles() {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
    root: {
      width: '100%',
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    errorMessage: {
      width: '30%',
      height: '40px',
      backgroundColor: 'red',
      marginTop: '25px'
    }
  })();
}

var _default = AuthPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AuthPage, "AuthPage", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/AuthPage.js");
  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/AuthPage.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/containers/Authorization/AuthPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0F1dGhvcml6YXRpb24vQXV0aFBhZ2UuanMiXSwibmFtZXMiOlsiQXV0aFBhZ2UiLCJzdHlsZXMiLCJ1c2VTdHlsZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNWaXNpYmxlV2Fybk1lc3NhZ2UiLCJzZXRWaXNpYmxlV2Fybk1lc3NhZ2UiLCJzaUF1dGhvcml6ZWQiLCJ1c2VTZWxlY3RvciIsImdldEF1dGhvcml6YXRpb25TdGF0dXMiLCJyb290IiwiU2lnbkluIiwiUmVzdG9yZVBhc3N3b3JkIiwibWFrZVN0eWxlcyIsIndpZHRoIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImVycm9yTWVzc2FnZSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyxTQUFTLEVBQXhCOztBQURrQix3QkFFb0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRnBDO0FBQUE7QUFBQSxNQUVYQyxvQkFGVztBQUFBLE1BRVdDLHFCQUZYOztBQUdsQixNQUFNQyxZQUFZLEdBQUdDLCtEQUFXLENBQUNDLHNFQUFELENBQWhDO0FBRUEsc0JBQ0UsMkRBQUMscURBQUQ7QUFBSyxhQUFTLEVBQUVSLE1BQU0sQ0FBQ1M7QUFBdkIsa0JBQ0UsMkRBQUMsdURBQUQscUJBQ0UsMkRBQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUMsZUFEUDtBQUVFLFVBQU0sRUFBRTtBQUFBLDBCQUNOLDJEQUFDLGtEQUFEO0FBRUlKLDZCQUFxQixFQUFyQkEscUJBRko7QUFHSUQsNEJBQW9CLEVBQXBCQTtBQUhKLFFBRE07QUFBQTtBQUZWLElBREYsZUFZRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxlQUFaO0FBQTRCLGFBQVMsRUFBRU0sa0RBQU1BO0FBQTdDLElBWkYsZUFhRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyx3QkFBWjtBQUFxQyxhQUFTLEVBQUVDLDJEQUFlQTtBQUEvRCxJQWJGLGVBY0UsMkRBQUMseURBQUQ7QUFBVSxNQUFFLEVBQUM7QUFBYixJQWRGLENBREYsZUFpQkUsMkRBQUMsbUhBQUQ7QUFBc0IsZUFBVyxFQUFDO0FBQWxDLElBakJGLEVBa0JHUCxvQkFBb0IsaUJBQ25CLDJEQUFDLHdEQUFEO0FBQWMsUUFBSSxFQUFDO0FBQW5CLElBbkJKLENBREY7QUF3QkQ7O2NBN0JRTCxRO1VBQ1FFLFMsRUFFTU0sdUQ7OztBQTRCdkIsU0FBU04sU0FBVCxHQUFxQjtBQUNuQixTQUFPVyxvRUFBVSxDQUFDO0FBQ2hCSCxRQUFJLEVBQUU7QUFDSkksV0FBSyxFQUFFLE1BREg7QUFFSkMsZUFBUyxFQUFFLE1BRlA7QUFHSkMsYUFBTyxFQUFFLE1BSEw7QUFJSkMsbUJBQWEsRUFBRSxRQUpYO0FBS0pDLG9CQUFjLEVBQUUsUUFMWjtBQU1KQyxnQkFBVSxFQUFFLFFBTlI7QUFPSkMsY0FBUSxFQUFFO0FBUE4sS0FEVTtBQVdoQkMsZ0JBQVksRUFBRTtBQUNaUCxXQUFLLEVBQUUsS0FESztBQUVaUSxZQUFNLEVBQUUsTUFGSTtBQUdaQyxxQkFBZSxFQUFFLEtBSEw7QUFJWkMsZUFBUyxFQUFFO0FBSkM7QUFYRSxHQUFELENBQVYsRUFBUDtBQWtCRDs7ZUFFY3hCLFE7QUFBQTs7Ozs7Ozs7OzswQkFwRE5BLFE7MEJBK0JBRSxTIiwiZmlsZSI6IjguY2xpZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBTaWduSW4sIFNpZ25VcCwgUmVzdG9yZVBhc3N3b3JkLCBXYXJuU25hY2tiYXIgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmV0Y2hTdGF0dXNTbmFja0JhcnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9mZXRjaF9zdGF0dXNfc25hY2tiYXJzL0ZldGNoU3RhdHVzU25hY2tCYXJzJztcbmltcG9ydCB7IGdldEF1dGhvcml6YXRpb25TdGF0dXMsIGdldEVtYWlsUHJvdmlkZXJFcnJvciB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9hdXRoJztcblxuZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbaXNWaXNpYmxlV2Fybk1lc3NhZ2UsIHNldFZpc2libGVXYXJuTWVzc2FnZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNpQXV0aG9yaXplZCA9IHVzZVNlbGVjdG9yKGdldEF1dGhvcml6YXRpb25TdGF0dXMpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9e3N0eWxlcy5yb290fT5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZVxuICAgICAgICAgIHBhdGg9XCIvYXV0aC9zaWduLXVwXCJcbiAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgIDxTaWduVXBcbiAgICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmxlV2Fybk1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlV2Fybk1lc3NhZ2UsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2F1dGgvc2lnbi1pblwiIGNvbXBvbmVudD17U2lnbklufSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9hdXRoL3Jlc3RvcmUtcGFzc3dvcmRcIiBjb21wb25lbnQ9e1Jlc3RvcmVQYXNzd29yZH0gLz5cbiAgICAgICAgPFJlZGlyZWN0IHRvPVwiL2F1dGgvc2lnbi11cFwiIC8+XG4gICAgICA8L1N3aXRjaD5cbiAgICAgIDxGZXRjaFN0YXR1c1NuYWNrQmFycyByZWR1Y2VyTmFtZT1cImF1dGhvcml6YXRpb25cIiAvPlxuICAgICAge2lzVmlzaWJsZVdhcm5NZXNzYWdlICYmIChcbiAgICAgICAgPFdhcm5TbmFja2JhciB0ZXh0PVwiWW91IGNhbiBkbyBpdCBsYXRlciBmcm9tIHNldHRpbmdzIGJ1dCB3ZSBzdHJvbmdseSByZWNvbW1lbmQgdG8gZG8gaXQgbm93XCIgLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHVzZVN0eWxlcygpIHtcbiAgcmV0dXJuIG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtaW5IZWlnaHQ6ICc5MHZoJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9LFxuXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICB3aWR0aDogJzMwJScsXG4gICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICBtYXJnaW5Ub3A6ICcyNXB4JyxcbiAgICB9LFxuICB9KSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=