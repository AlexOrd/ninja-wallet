(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./actions/profileAction.js":
/*!**********************************!*\
  !*** ./actions/profileAction.js ***!
  \**********************************/
/*! exports provided: fetchProfile, updateProfile, exportCsv, updatePhoto, createPhoto, updatePhotoSuccess, createPhotoSuccess, updateProfileSuccess, fetchProfileSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProfile", function() { return fetchProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportCsv", function() { return exportCsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePhoto", function() { return updatePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhoto", function() { return createPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePhotoSuccess", function() { return updatePhotoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPhotoSuccess", function() { return createPhotoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileSuccess", function() { return updateProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProfileSuccess", function() { return fetchProfileSuccess; });
/* harmony import */ var _constants_actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionType */ "./constants/actionType.js");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/axios */ "./config/axios.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var fetchProfile = function fetchProfile() {
  return function (dispatch) {
    _config_axios__WEBPACK_IMPORTED_MODULE_1__["axiosInstance"].get('/api/profile').then(function (profile) {
      return dispatch(fetchProfileSuccess(profile));
    });
  };
};
var updateProfile = function updateProfile(data) {
  return function (dispatch) {
    _config_axios__WEBPACK_IMPORTED_MODULE_1__["axiosInstance"].put('/api/profile', _objectSpread({}, data)).then(function (profile) {
      return dispatch(updateProfileSuccess(profile));
    });
  };
};
var exportCsv = function exportCsv() {
  _config_axios__WEBPACK_IMPORTED_MODULE_1__["axiosInstance"].get('/api/profile/export', {
    responseType: 'blob'
  }).then(function (response) {
    return file_saver__WEBPACK_IMPORTED_MODULE_2___default.a.saveAs(response.data, 'out.csv');
  });
};
var updatePhoto = function updatePhoto(id, image) {
  return function (dispatch) {
    _config_axios__WEBPACK_IMPORTED_MODULE_1__["axiosInstance"].put("/api/userphoto/".concat(id), {
      fileString: image
    }).then(function (avatar) {
      return dispatch(updatePhotoSuccess(avatar));
    });
  };
};
var createPhoto = function createPhoto(photo) {
  return function (dispatch) {
    _config_axios__WEBPACK_IMPORTED_MODULE_1__["axiosInstance"].post('/api/userphoto', {
      fileString: photo
    }).then(function (response) {
      return dispatch(createPhotoSuccess(response));
    });
  };
};
var updatePhotoSuccess = function updatePhotoSuccess(payload) {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PHOTO_SUCCESS"],
    avatarId: payload.data.data.updatedPhoto
  };
};
var createPhotoSuccess = function createPhotoSuccess(payload) {
  console.log('CREATE', payload.data.data.updatedUser.avatarId);
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__["CREATE_PHOTO_SUCCESS"],
    payload: payload.data.data.updatedUser.avatarId
  };
};
var updateProfileSuccess = function updateProfileSuccess(profile) {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PROFILE_SUCCESS"],
    profile: profile.data.data.updated
  };
};
var fetchProfileSuccess = function fetchProfileSuccess(profile) {
  return {
    type: _constants_actionType__WEBPACK_IMPORTED_MODULE_0__["FETCH_PROFILE_SUCCESS"],
    profile: profile.data.data.profile
  };
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(fetchProfile, "fetchProfile", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(updateProfile, "updateProfile", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(exportCsv, "exportCsv", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(updatePhoto, "updatePhoto", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(createPhoto, "createPhoto", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(updatePhotoSuccess, "updatePhotoSuccess", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(createPhotoSuccess, "createPhotoSuccess", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(updateProfileSuccess, "updateProfileSuccess", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
  reactHotLoader.register(fetchProfileSuccess, "fetchProfileSuccess", "/home/dr/Work/Temp/ninja-wallet/client/actions/profileAction.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/profile/ProfileData.jsx":
/*!********************************************!*\
  !*** ./components/profile/ProfileData.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _userPhoto_UserPhoto_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userPhoto/UserPhoto.jsx */ "./components/profile/userPhoto/UserPhoto.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  cardBasis: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'inherit'
  }
});

var ProfileData = function ProfileData(props) {
  var styles = useStyles();

  var exportClickHandler = function exportClickHandler() {
    props.exportCsv();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: styles.cardBasis
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userPhoto_UserPhoto_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    profilePhoto: props.profileInfo.avatarId.image || props.profileInfo.avatarId,
    avatarId: props.profileInfo.avatarId._id,
    createPhoto: props.createPhoto,
    updatePhoto: props.updatePhoto
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "overline"
  }, "First Name: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "h2"
  }, props.profileInfo.firstName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "overline"
  }, "Last Name: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p"
  }, props.profileInfo.lastName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "overline"
  }, "Email: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: "p"
  }, props.profileInfo.email)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    onClick: exportClickHandler
  }, "Export Transactions"))));
};

__signature__(ProfileData, "useStyles{styles}", function () {
  return [useStyles];
});

var _default = ProfileData;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/ProfileData.jsx");
  reactHotLoader.register(ProfileData, "ProfileData", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/ProfileData.jsx");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/ProfileData.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/profile/ProfileForm.jsx":
/*!********************************************!*\
  !*** ./components/profile/ProfileForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "../node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  cardBasis: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'inherit'
  },
  cardHeader: {
    backgroundColor: 'white',
    zIndex: '3',
    margin: '0 15px',
    marginTop: '-20px',
    borderRadius: '3px',
    boxShadow: '0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 0 0 / 40%)'
  }
});

function Alert(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

var ProfileForm = function ProfileForm(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var styles = useStyles();
  var fn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var ln = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var updateClickHandler = function updateClickHandler() {
    dispatch(props.updateProfile({
      firstName: fn.current.value,
      lastName: ln.current.value
    }));
    fn.current.value = '';
    ln.current.value = '';
    setOpen(true);
  };

  var closeSnackHandle = function closeSnackHandle() {
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: styles.cardBasis
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    title: "Edit Profile",
    subheader: "Update your profile",
    color: "primary",
    className: styles.cardHeader
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "space-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "firstName",
    inputRef: fn,
    label: "First Name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "lastName",
    inputRef: ln,
    label: "Last Name"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    onClick: updateClickHandler
  }, "Update Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: closeSnackHandle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Alert, {
    onClose: closeSnackHandle,
    severity: "success"
  }, "Profile is updated!"))));
};

__signature__(ProfileForm, "useDispatch{dispatch}\nuseState{[open, setOpen](false)}\nuseStyles{styles}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], useStyles];
});

var _default = ProfileForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/ProfileForm.jsx");
  reactHotLoader.register(Alert, "Alert", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/ProfileForm.jsx");
  reactHotLoader.register(ProfileForm, "ProfileForm", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/ProfileForm.jsx");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/ProfileForm.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/profile/userPhoto/UserPhoto.jsx":
/*!****************************************************!*\
  !*** ./components/profile/userPhoto/UserPhoto.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-avatar-edit */ "../node_modules/react-avatar-edit/lib/react-avatar.js");
/* harmony import */ var react_avatar_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_avatar_edit__WEBPACK_IMPORTED_MODULE_4__);
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  boxAvatar: {
    maxWidth: '120px',
    maxHeight: '120px',
    marginTop: '-50px'
  },
  avatar: {
    width: '100%',
    height: '100%',
    boxShadow: '0 16px 38px -12px rgb(0 0 0 / 56%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
    borderRadius: '50%'
  },
  fileInputBox: {
    marginTop: '40px'
  },
  buttonFile: {
    position: 'relative',
    overflow: 'hidden'
  },
  inputFile: {
    position: 'absolute',
    top: 0,
    right: 0,
    minWidth: '100%',
    minHeight: '100%',
    fontSize: '100px',
    textAlign: 'right',
    opacity: 0,
    outline: 'none',
    background: 'white',
    cursor: 'pointer',
    display: 'block'
  }
});
var Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Slide"], _extends({
    direction: "up",
    ref: ref
  }, props));
});

var UserPhoto = function UserPhoto(props) {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    preview: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      photo = _useState4[0],
      setPhoto = _useState4[1];

  var styles = useStyles();

  var changeFileButtonHandle = function changeFileButtonHandle() {
    setOpen(true);
  };

  var updatePhotoHandler = function updatePhotoHandler() {
    if (!props.profilePhoto) {
      dispatch(props.createPhoto(photo));
    } else {
      dispatch(props.updatePhoto(props.avatarId, photo));
    }

    setOpen(false);
  };

  var closeFileEditDialog = function closeFileEditDialog() {
    setPhoto({
      preview: null
    });
    setOpen(false);
  };

  var onCrop = function onCrop(preview) {
    setPhoto(preview);
  };

  var onBeforeFileLoad = function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: styles.boxAvatar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    alt: "Avatar",
    src: props.profilePhoto,
    className: styles.avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: styles.fileInputBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: changeFileButtonHandle
  }, "Select Photo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: open,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: closeFileEditDialog,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
    id: "alert-dialog-slide-title"
  }, 'Please edit your photo'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_avatar_edit__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: 250,
    height: 250,
    onCrop: onCrop,
    onClose: closeFileEditDialog,
    onBeforeFileLoad: onBeforeFileLoad,
    src: props.profilePhoto
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: photo,
    alt: "Preview"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: updatePhotoHandler,
    color: "secondary"
  }, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: closeFileEditDialog,
    color: "primary"
  }, "Close"))));
};

__signature__(UserPhoto, "useDispatch{dispatch}\nuseState{[open, setOpen](false)}\nuseState{[photo, setPhoto]({ preview: null })}\nuseStyles{styles}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], useStyles];
});

var _default = UserPhoto;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/userPhoto/UserPhoto.jsx");
  reactHotLoader.register(Transition, "Transition", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/userPhoto/UserPhoto.jsx");
  reactHotLoader.register(UserPhoto, "UserPhoto", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/userPhoto/UserPhoto.jsx");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/components/profile/userPhoto/UserPhoto.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./containers/profile/ProfileContainer.js":
/*!************************************************!*\
  !*** ./containers/profile/ProfileContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _actions_profileAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/profileAction */ "./actions/profileAction.js");
/* harmony import */ var _components_profile_ProfileData_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/profile/ProfileData.jsx */ "./components/profile/ProfileData.jsx");
/* harmony import */ var _components_profile_ProfileForm_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/profile/ProfileForm.jsx */ "./components/profile/ProfileForm.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  cardPaddings: {
    padding: '0 15px !important'
  },
  cardMarginTop: {
    marginTop: '70px'
  },
  cardBasis: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'inherit'
  },
  cardHeader: {
    backgroundColor: 'white',
    zIndex: '3',
    margin: '0 15px',
    marginTop: '-20px',
    borderRadius: '3px',
    boxShadow: '0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(0 0 0 / 40%)'
  }
});

var checkProps = function checkProps(obj) {
  console.log(obj);

  if (!obj.avatarId) {
    obj.avatarId = '';
    return obj;
  } else if (!obj.avatarId._id) {
    obj.avatarId._id = '';
    return obj;
  }

  return obj;
};

var ProfileContainer = function ProfileContainer() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var profileInfo = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.profile;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_actions_profileAction__WEBPACK_IMPORTED_MODULE_4__["fetchProfile"])());
  }, []);
  var modified = checkProps(profileInfo);
  var styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: styles.cardMarginTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 8,
    className: styles.cardPaddings
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profile_ProfileForm_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    updateProfile: _actions_profileAction__WEBPACK_IMPORTED_MODULE_4__["updateProfile"] || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    md: 4,
    className: styles.cardPaddings
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profile_ProfileData_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    profileInfo: modified || '',
    createPhoto: _actions_profileAction__WEBPACK_IMPORTED_MODULE_4__["createPhoto"] || '',
    updatePhoto: _actions_profileAction__WEBPACK_IMPORTED_MODULE_4__["updatePhoto"] || '',
    exportCsv: _actions_profileAction__WEBPACK_IMPORTED_MODULE_4__["exportCsv"]
  }))));
};

__signature__(ProfileContainer, "useDispatch{dispatch}\nuseSelector{profileInfo}\nuseEffect{}\nuseStyles{styles}", function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], useStyles];
});

var _default = ProfileContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/home/dr/Work/Temp/ninja-wallet/client/containers/profile/ProfileContainer.js");
  reactHotLoader.register(checkProps, "checkProps", "/home/dr/Work/Temp/ninja-wallet/client/containers/profile/ProfileContainer.js");
  reactHotLoader.register(ProfileContainer, "ProfileContainer", "/home/dr/Work/Temp/ninja-wallet/client/containers/profile/ProfileContainer.js");
  reactHotLoader.register(_default, "default", "/home/dr/Work/Temp/ninja-wallet/client/containers/profile/ProfileContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL3Byb2ZpbGVBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGVEYXRhLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUZvcm0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvZmlsZS91c2VyUGhvdG8vVXNlclBob3RvLmpzeCIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL3Byb2ZpbGUvUHJvZmlsZUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJmZXRjaFByb2ZpbGUiLCJkaXNwYXRjaCIsImF4aW9zSW5zdGFuY2UiLCJnZXQiLCJ0aGVuIiwicHJvZmlsZSIsImZldGNoUHJvZmlsZVN1Y2Nlc3MiLCJ1cGRhdGVQcm9maWxlIiwiZGF0YSIsInB1dCIsInVwZGF0ZVByb2ZpbGVTdWNjZXNzIiwiZXhwb3J0Q3N2IiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2UiLCJGaWxlU2F2ZXIiLCJzYXZlQXMiLCJ1cGRhdGVQaG90byIsImlkIiwiaW1hZ2UiLCJmaWxlU3RyaW5nIiwiYXZhdGFyIiwidXBkYXRlUGhvdG9TdWNjZXNzIiwiY3JlYXRlUGhvdG8iLCJwaG90byIsInBvc3QiLCJjcmVhdGVQaG90b1N1Y2Nlc3MiLCJwYXlsb2FkIiwidHlwZSIsIlVQREFURV9QSE9UT19TVUNDRVNTIiwiYXZhdGFySWQiLCJ1cGRhdGVkUGhvdG8iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlZFVzZXIiLCJDUkVBVEVfUEhPVE9fU1VDQ0VTUyIsIlVQREFURV9QUk9GSUxFX1NVQ0NFU1MiLCJ1cGRhdGVkIiwiRkVUQ0hfUFJPRklMRV9TVUNDRVNTIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImNhcmRCYXNpcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3ciLCJQcm9maWxlRGF0YSIsInByb3BzIiwic3R5bGVzIiwiZXhwb3J0Q2xpY2tIYW5kbGVyIiwicHJvZmlsZUluZm8iLCJfaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiY2FyZEhlYWRlciIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIkFsZXJ0IiwiUHJvZmlsZUZvcm0iLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJmbiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwibG4iLCJ1cGRhdGVDbGlja0hhbmRsZXIiLCJjdXJyZW50IiwidmFsdWUiLCJjbG9zZVNuYWNrSGFuZGxlIiwiYm94QXZhdGFyIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGVJbnB1dEJveCIsImJ1dHRvbkZpbGUiLCJwb3NpdGlvbiIsImlucHV0RmlsZSIsInRvcCIsInJpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsIm9wYWNpdHkiLCJvdXRsaW5lIiwiYmFja2dyb3VuZCIsImN1cnNvciIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwiVXNlclBob3RvIiwicHJldmlldyIsInNldFBob3RvIiwiY2hhbmdlRmlsZUJ1dHRvbkhhbmRsZSIsInVwZGF0ZVBob3RvSGFuZGxlciIsInByb2ZpbGVQaG90byIsImNsb3NlRmlsZUVkaXREaWFsb2ciLCJvbkNyb3AiLCJvbkJlZm9yZUZpbGVMb2FkIiwiZWxlbSIsInRhcmdldCIsImZpbGVzIiwic2l6ZSIsImFsZXJ0IiwiY2FyZFBhZGRpbmdzIiwicGFkZGluZyIsImNhcmRNYXJnaW5Ub3AiLCJjaGVja1Byb3BzIiwib2JqIiwiUHJvZmlsZUNvbnRhaW5lciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJtb2RpZmllZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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TCxnRUFBU0E7QUFKdEIsSUFERixDQUpGLENBREYsQ0FERjtBQWlCRCxDQTVCRDs7Y0FBTXdHLGdCO1VBQ2FyRCx1RCxFQUNHc0QsdUQsRUFPTDlFLFM7OztlQXFCRjZFLGdCO0FBQUE7Ozs7Ozs7Ozs7MEJBaEVUN0UsUzswQkFzQkEyRSxVOzBCQVlBRSxnQiIsImZpbGUiOiI2LmNsaWVudC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBGRVRDSF9QUk9GSUxFX1NVQ0NFU1MsXG4gIFVQREFURV9QUk9GSUxFX1NVQ0NFU1MsXG4gIFVQREFURV9QSE9UT19TVUNDRVNTLFxuICBDUkVBVEVfUEhPVE9fU1VDQ0VTUyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGUnO1xuaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSB9IGZyb20gJy4uL2NvbmZpZy9heGlvcyc7XG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gJ2ZpbGUtc2F2ZXInO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9maWxlID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgYXhpb3NJbnN0YW5jZS5nZXQoJy9hcGkvcHJvZmlsZScpLnRoZW4oKHByb2ZpbGUpID0+IGRpc3BhdGNoKGZldGNoUHJvZmlsZVN1Y2Nlc3MocHJvZmlsZSkpKTtcbiAgfTtcbn07XG5leHBvcnQgY29uc3QgdXBkYXRlUHJvZmlsZSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBheGlvc0luc3RhbmNlXG4gICAgICAucHV0KCcvYXBpL3Byb2ZpbGUnLCB7IC4uLmRhdGEgfSlcbiAgICAgIC50aGVuKChwcm9maWxlKSA9PiBkaXNwYXRjaCh1cGRhdGVQcm9maWxlU3VjY2Vzcyhwcm9maWxlKSkpO1xuICB9O1xufTtcbmV4cG9ydCBjb25zdCBleHBvcnRDc3YgPSAoKSA9PiB7XG4gIGF4aW9zSW5zdGFuY2VcbiAgICAuZ2V0KCcvYXBpL3Byb2ZpbGUvZXhwb3J0JywgeyByZXNwb25zZVR5cGU6ICdibG9iJyB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gRmlsZVNhdmVyLnNhdmVBcyhyZXNwb25zZS5kYXRhLCAnb3V0LmNzdicpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQaG90byA9IChpZCwgaW1hZ2UpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGF4aW9zSW5zdGFuY2VcbiAgICAgIC5wdXQoYC9hcGkvdXNlcnBob3RvLyR7aWR9YCwgeyBmaWxlU3RyaW5nOiBpbWFnZSB9KVxuICAgICAgLnRoZW4oKGF2YXRhcikgPT4gZGlzcGF0Y2godXBkYXRlUGhvdG9TdWNjZXNzKGF2YXRhcikpKTtcbiAgfTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlUGhvdG8gPSAocGhvdG8pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGF4aW9zSW5zdGFuY2VcbiAgICAgIC5wb3N0KCcvYXBpL3VzZXJwaG90bycsIHtcbiAgICAgICAgZmlsZVN0cmluZzogcGhvdG8sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaChjcmVhdGVQaG90b1N1Y2Nlc3MocmVzcG9uc2UpKSk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUGhvdG9TdWNjZXNzID0gKHBheWxvYWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfUEhPVE9fU1VDQ0VTUyxcbiAgICBhdmF0YXJJZDogcGF5bG9hZC5kYXRhLmRhdGEudXBkYXRlZFBob3RvLFxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVQaG90b1N1Y2Nlc3MgPSAocGF5bG9hZCkgPT4ge1xuICBjb25zb2xlLmxvZygnQ1JFQVRFJywgcGF5bG9hZC5kYXRhLmRhdGEudXBkYXRlZFVzZXIuYXZhdGFySWQpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENSRUFURV9QSE9UT19TVUNDRVNTLFxuICAgIHBheWxvYWQ6IHBheWxvYWQuZGF0YS5kYXRhLnVwZGF0ZWRVc2VyLmF2YXRhcklkLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGVTdWNjZXNzID0gKHByb2ZpbGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfUFJPRklMRV9TVUNDRVNTLFxuICAgIHByb2ZpbGU6IHByb2ZpbGUuZGF0YS5kYXRhLnVwZGF0ZWQsXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvZmlsZVN1Y2Nlc3MgPSAocHJvZmlsZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZFVENIX1BST0ZJTEVfU1VDQ0VTUyxcbiAgICBwcm9maWxlOiBwcm9maWxlLmRhdGEuZGF0YS5wcm9maWxlLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEdyaWQsIFR5cG9ncmFwaHksIENhcmQsIENhcmRDb250ZW50LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuaW1wb3J0IFVzZXJQaG90byBmcm9tICcuL3VzZXJQaG90by9Vc2VyUGhvdG8uanN4JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNhcmRCYXNpczoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBvdmVyZmxvdzogJ2luaGVyaXQnLFxuICB9LFxufSk7XG5cbmNvbnN0IFByb2ZpbGVEYXRhID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGV4cG9ydENsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBwcm9wcy5leHBvcnRDc3YoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRCYXNpc30+XG4gICAgICA8VXNlclBob3RvXG4gICAgICAgIHByb2ZpbGVQaG90bz17cHJvcHMucHJvZmlsZUluZm8uYXZhdGFySWQuaW1hZ2UgfHwgcHJvcHMucHJvZmlsZUluZm8uYXZhdGFySWR9XG4gICAgICAgIGF2YXRhcklkPXtwcm9wcy5wcm9maWxlSW5mby5hdmF0YXJJZC5faWR9XG4gICAgICAgIGNyZWF0ZVBob3RvPXtwcm9wcy5jcmVhdGVQaG90b31cbiAgICAgICAgdXBkYXRlUGhvdG89e3Byb3BzLnVwZGF0ZVBob3RvfVxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICA8Qm94IG10PXszfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCI+Rmlyc3QgTmFtZTogPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiPntwcm9wcy5wcm9maWxlSW5mby5maXJzdE5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICA8Qm94IG10PXszfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCI+TGFzdCBOYW1lOiA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIj57cHJvcHMucHJvZmlsZUluZm8ubGFzdE5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICA8Qm94IG10PXszfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cIm92ZXJsaW5lXCI+RW1haWw6IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiPntwcm9wcy5wcm9maWxlSW5mby5lbWFpbH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEJveCBtdD17M30+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtleHBvcnRDbGlja0hhbmRsZXJ9PlxuICAgICAgICAgICAgRXhwb3J0IFRyYW5zYWN0aW9uc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZURhdGE7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIFRleHRGaWVsZCxcbiAgQm94LFxuICBGb3JtQ29udHJvbCxcbiAgQ2FyZCxcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZENvbnRlbnQsXG4gIEdyaWQsXG4gIEJ1dHRvbixcbiAgU25hY2tiYXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBNdWlBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2FyZEJhc2lzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG92ZXJmbG93OiAnaW5oZXJpdCcsXG4gIH0sXG4gIGNhcmRIZWFkZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgekluZGV4OiAnMycsXG4gICAgbWFyZ2luOiAnMCAxNXB4JyxcbiAgICBtYXJnaW5Ub3A6ICctMjBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAyMHB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCA3cHggMTBweCAtNXB4IHJnYigwIDAgMCAvIDQwJSknLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XG4gIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSAvPjtcbn1cblxuY29uc3QgUHJvZmlsZUZvcm0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGZuID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGNvbnN0IGxuID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgY29uc3QgdXBkYXRlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHByb3BzLnVwZGF0ZVByb2ZpbGUoeyBmaXJzdE5hbWU6IGZuLmN1cnJlbnQudmFsdWUsIGxhc3ROYW1lOiBsbi5jdXJyZW50LnZhbHVlIH0pKTtcbiAgICBmbi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgbG4uY3VycmVudC52YWx1ZSA9ICcnO1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG4gIGNvbnN0IGNsb3NlU25hY2tIYW5kbGUgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQmFzaXN9PlxuICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgdGl0bGU9XCJFZGl0IFByb2ZpbGVcIlxuICAgICAgICBzdWJoZWFkZXI9XCJVcGRhdGUgeW91ciBwcm9maWxlXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEhlYWRlcn1cbiAgICAgID48L0NhcmRIZWFkZXI+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtYXJvdW5kXCI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezV9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwiZmlyc3ROYW1lXCIgaW5wdXRSZWY9e2ZufSBsYWJlbD1cIkZpcnN0IE5hbWVcIiAvPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezV9PlxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwibGFzdE5hbWVcIiBpbnB1dFJlZj17bG59IGxhYmVsPVwiTGFzdCBOYW1lXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxCb3ggbXQ9ezN9PlxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dXBkYXRlQ2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICAgIFVwZGF0ZSBQcm9maWxlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8U25hY2tiYXIgb3Blbj17b3Blbn0gYXV0b0hpZGVEdXJhdGlvbj17NjAwMH0gb25DbG9zZT17Y2xvc2VTbmFja0hhbmRsZX0+XG4gICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2Nsb3NlU25hY2tIYW5kbGV9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgUHJvZmlsZSBpcyB1cGRhdGVkIVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvU25hY2tiYXI+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBEaWFsb2csXG4gIERpYWxvZ0FjdGlvbnMsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ1RpdGxlLFxuICBTbGlkZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCBBdmF0YXJFZGl0IGZyb20gJ3JlYWN0LWF2YXRhci1lZGl0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGJveEF2YXRhcjoge1xuICAgIG1heFdpZHRoOiAnMTIwcHgnLFxuICAgIG1heEhlaWdodDogJzEyMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICctNTBweCcsXG4gIH0sXG4gIGF2YXRhcjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgYm94U2hhZG93OlxuICAgICAgJzAgMTZweCAzOHB4IC0xMnB4IHJnYigwIDAgMCAvIDU2JSksIDAgNHB4IDI1cHggMHB4IHJnYigwIDAgMCAvIDEyJSksIDAgOHB4IDEwcHggLTVweCByZ2IoMCAwIDAgLyAyMCUpJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICB9LFxuICBmaWxlSW5wdXRCb3g6IHtcbiAgICBtYXJnaW5Ub3A6ICc0MHB4JyxcbiAgfSxcbiAgYnV0dG9uRmlsZToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgfSxcbiAgaW5wdXRGaWxlOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgZm9udFNpemU6ICcxMDBweCcsXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIG9wYWNpdHk6IDAsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIDxTbGlkZSBkaXJlY3Rpb249XCJ1cFwiIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xufSk7XG5cbmNvbnN0IFVzZXJQaG90byA9IChwcm9wcykgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bob3RvLCBzZXRQaG90b10gPSB1c2VTdGF0ZSh7IHByZXZpZXc6IG51bGwgfSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGNoYW5nZUZpbGVCdXR0b25IYW5kbGUgPSAoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlUGhvdG9IYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmICghcHJvcHMucHJvZmlsZVBob3RvKSB7XG4gICAgICBkaXNwYXRjaChwcm9wcy5jcmVhdGVQaG90byhwaG90bykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChwcm9wcy51cGRhdGVQaG90byhwcm9wcy5hdmF0YXJJZCwgcGhvdG8pKTtcbiAgICB9XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG4gIGNvbnN0IGNsb3NlRmlsZUVkaXREaWFsb2cgPSAoKSA9PiB7XG4gICAgc2V0UGhvdG8oeyBwcmV2aWV3OiBudWxsIH0pO1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuICBjb25zdCBvbkNyb3AgPSAocHJldmlldykgPT4ge1xuICAgIHNldFBob3RvKHByZXZpZXcpO1xuICB9O1xuICBjb25zdCBvbkJlZm9yZUZpbGVMb2FkID0gKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS50YXJnZXQuZmlsZXNbMF0uc2l6ZSA+IDcxNjgwKSB7XG4gICAgICBhbGVydCgnRmlsZSBpcyB0b28gYmlnIScpO1xuICAgICAgZWxlbS50YXJnZXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLmJveEF2YXRhcn0+XG4gICAgICAgIDxBdmF0YXIgYWx0PVwiQXZhdGFyXCIgc3JjPXtwcm9wcy5wcm9maWxlUGhvdG99IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlcy5maWxlSW5wdXRCb3h9PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtjaGFuZ2VGaWxlQnV0dG9uSGFuZGxlfT5cbiAgICAgICAgICBTZWxlY3QgUGhvdG9cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17VHJhbnNpdGlvbn1cbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgb25DbG9zZT17Y2xvc2VGaWxlRWRpdERpYWxvZ31cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1zbGlkZS1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy1zbGlkZS10aXRsZVwiPnsnUGxlYXNlIGVkaXQgeW91ciBwaG90byd9PC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPEF2YXRhckVkaXRcbiAgICAgICAgICAgIHdpZHRoPXsyNTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezI1MH1cbiAgICAgICAgICAgIG9uQ3JvcD17b25Dcm9wfVxuICAgICAgICAgICAgb25DbG9zZT17Y2xvc2VGaWxlRWRpdERpYWxvZ31cbiAgICAgICAgICAgIG9uQmVmb3JlRmlsZUxvYWQ9e29uQmVmb3JlRmlsZUxvYWR9XG4gICAgICAgICAgICBzcmM9e3Byb3BzLnByb2ZpbGVQaG90b31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbWcgc3JjPXtwaG90b30gYWx0PVwiUHJldmlld1wiIC8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt1cGRhdGVQaG90b0hhbmRsZXJ9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2Nsb3NlRmlsZUVkaXREaWFsb2d9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUGhvdG87XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmltcG9ydCB7XG4gIHVwZGF0ZVByb2ZpbGUsXG4gIGZldGNoUHJvZmlsZSxcbiAgdXBkYXRlUGhvdG8sXG4gIGNyZWF0ZVBob3RvLFxuICBleHBvcnRDc3YsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvZmlsZUFjdGlvbic7XG5cbmltcG9ydCBQcm9maWxlRGF0YSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZURhdGEuanN4JztcbmltcG9ydCBQcm9maWxlRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZUZvcm0uanN4JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNhcmRQYWRkaW5nczoge1xuICAgIHBhZGRpbmc6ICcwIDE1cHggIWltcG9ydGFudCcsXG4gIH0sXG4gIGNhcmRNYXJnaW5Ub3A6IHtcbiAgICBtYXJnaW5Ub3A6ICc3MHB4JyxcbiAgfSxcbiAgY2FyZEJhc2lzOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG92ZXJmbG93OiAnaW5oZXJpdCcsXG4gIH0sXG4gIGNhcmRIZWFkZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgekluZGV4OiAnMycsXG4gICAgbWFyZ2luOiAnMCAxNXB4JyxcbiAgICBtYXJnaW5Ub3A6ICctMjBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICBib3hTaGFkb3c6ICcwIDRweCAyMHB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCA3cHggMTBweCAtNXB4IHJnYigwIDAgMCAvIDQwJSknLFxuICB9LFxufSk7XG5cbmNvbnN0IGNoZWNrUHJvcHMgPSAob2JqKSA9PiB7XG4gIGNvbnNvbGUubG9nKG9iaik7XG4gIGlmICghb2JqLmF2YXRhcklkKSB7XG4gICAgb2JqLmF2YXRhcklkID0gJyc7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIGlmICghb2JqLmF2YXRhcklkLl9pZCkge1xuICAgIG9iai5hdmF0YXJJZC5faWQgPSAnJztcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xuXG5jb25zdCBQcm9maWxlQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHByb2ZpbGVJbmZvID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9maWxlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFByb2ZpbGUoKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBtb2RpZmllZCA9IGNoZWNrUHJvcHMocHJvZmlsZUluZm8pO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTWFyZ2luVG9wfT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRQYWRkaW5nc30+XG4gICAgICAgICAgPFByb2ZpbGVGb3JtIHVwZGF0ZVByb2ZpbGU9e3VwZGF0ZVByb2ZpbGUgfHwgJyd9IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRQYWRkaW5nc30+XG4gICAgICAgICAgPFByb2ZpbGVEYXRhXG4gICAgICAgICAgICBwcm9maWxlSW5mbz17bW9kaWZpZWQgfHwgJyd9XG4gICAgICAgICAgICBjcmVhdGVQaG90bz17Y3JlYXRlUGhvdG8gfHwgJyd9XG4gICAgICAgICAgICB1cGRhdGVQaG90bz17dXBkYXRlUGhvdG8gfHwgJyd9XG4gICAgICAgICAgICBleHBvcnRDc3Y9e2V4cG9ydENzdn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==