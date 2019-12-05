(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+LtL":
/*!*************************************!*\
  !*** ./src/jsx/EventInfo/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "c3dY");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var EventInfo = function EventInfo(props) {
  var discountInfo = props.discountInfo;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "EventInfo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book ico_evt"
  }), ' 이벤트정보'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "[\uB124\uC774\uBC84\uC608\uC57D \uD2B9\uBCC4\uD560\uC778]", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "".concat(discountInfo.join(', '), " \uD560\uC778")));
};

EventInfo.propTypes = {
  discountInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired
};
var _default = EventInfo;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EventInfo, "EventInfo", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/EventInfo/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/EventInfo/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "134M":
/*!***************************************!*\
  !*** ./src/jsx/ImageSlider/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "Ysws");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MainImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainImage */ "voRo");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var ImageSlider = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  /* init
   *  degree: 0
   * transitionTime: 2
   *  images: []
   *  imageWidth: 0
   * isPromotion: true
   */
  var degree = props.degree,
      transitionTime = props.transitionTime,
      images = props.images,
      imageWidth = props.imageWidth,
      isPromotion = props.isPromotion,
      handleTransitionEnd = props.handleTransitionEnd,
      handleMouseOver = props.handleMouseOver,
      handleMouseOut = props.handleMouseOut;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ImageSlider ".concat(isPromotion ? 'promotion' : 'detail'),
    onTransitionEnd: handleTransitionEnd,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    ref: ref,
    style: {
      transform: "translateX(-".concat(imageWidth * degree, "px)"),
      transitionDuration: "".concat(transitionTime, "s")
    }
  }, images.map(function (value, index) {
    if (value && isPromotion) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "detail/".concat(value.displayInfoId)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: value.saveFileName,
        alt: "promotionImage"
      })));
    }

    if (value) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: "/".concat(value.saveFileName),
        alt: "itemImage"
      }));
    }
  })));
});
ImageSlider.defaultProps = {
  handleTransitionEnd: function handleTransitionEnd() {},
  handleMouseOver: function handleMouseOver() {},
  handleMouseOut: function handleMouseOut() {}
};
ImageSlider.propTypes = {
  degree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })).isRequired,
  imageWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isPromotion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  handleTransitionEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = ImageSlider;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageSlider, "ImageSlider", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ImageSlider/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ImageSlider/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "2w/+":
/*!***************************************!*\
  !*** ./src/jsx/DetailImage/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ImageSlider */ "134M");
/* harmony import */ var _ImageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ImageTitle */ "O5AH");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





 // DetailContainer에서 images와 title을 줘야  하고 images는 필터링을 거쳐놔야 됨
// 스크롤 시간(transitionTime) default 1초
// 화면 전환 간격 (timeInterval) 2초

var DetailImage = function DetailImage(props) {
  var images = props.images,
      title = props.title,
      transitionTime = props.transitionTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      degree = _useState2[0],
      setDegree = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      imageWidth = _useState4[0],
      setImageWidth = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(transitionTime),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      transitionDuration = _useState6[0],
      setTransitionDuration = _useState6[1];

  var imageList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var doingResize = function doingResize() {
    setImageWidth(imageList.current.firstElementChild.clientWidth);
    setTransitionDuration(0);
  };

  var doneResize;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setImageWidth(imageList.current.firstElementChild && imageList.current.firstElementChild.clientWidth || 0);
    window.addEventListener('resize', doingResize);
    window.addEventListener('resize', function () {
      doneResize = Object(_js_common__WEBPACK_IMPORTED_MODULE_3__["resizeEnd"])(function () {
        return setTransitionDuration(transitionTime);
      });
      return doneResize;
    }());
    return function () {
      window.removeEventListener('resize', doingResize);
      window.removeEventListener('resize', doneResize);
    };
  }, [images]);

  var leftScroll = function leftScroll() {
    if (degree !== 0) {
      setDegree(degree - 1);
    }
    /*
    if (degree === 0) return;
    degree -= 1;
    const interval = firstItem.clientWidth;
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */

  };

  var rightScroll = function rightScroll() {
    if (degree !== images.length - 1) {
      setDegree((degree + 1) % images.length);
    }
    /*
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */

  }; // props 다 넘겨줘야 함


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "DetailImage"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: imageList,
    degree: degree,
    transitionTime: transitionDuration,
    images: images,
    imageWidth: imageWidth,
    isPromotion: false
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    degree: degree,
    imageLen: images.length,
    title: title,
    leftScroll: leftScroll,
    rightScroll: rightScroll
  }));
};

__signature__(DetailImage, "useState{[degree, setDegree](0)}\nuseState{[imageWidth, setImageWidth](0)}\nuseState{[transitionDuration, setTransitionDuration](transitionTime)}\nuseRef{imageList}\nuseEffect{}");

DetailImage.defaultProps = {
  images: [],
  title: '',
  transitionTime: 0.5
};
DetailImage.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
var _default = DetailImage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DetailImage, "DetailImage", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/DetailImage/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/DetailImage/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "3G0F":
/*!**************************************!*\
  !*** ./src/jsx/TotalCount/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3LJ/":
/*!**************************************!*\
  !*** ./src/jsx/MainNavBar/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "EiSa");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





 // TODO: isTransparent가 false일 때 fixed이므로 style객체가 있어야 됨

var MainNavBar = function MainNavBar(props) {
  var isTransparent = props.isTransparent,
      isLogoutable = props.isLogoutable,
      style = props.style;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchEmail =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/auth/email');

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                if (data) setEmail(data);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function fetchEmail() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchEmail();
  }, []);

  var handleLogout =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _ref4, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/auth/logout');

            case 3:
              _ref4 = _context2.sent;
              status = _ref4.status;

              if (status === 200) {
                setEmail('');
                history.push('/');
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function handleLogout() {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("nav", {
    className: "MainNavBar ".concat(isTransparent ? 'transparent' : 'fixed'),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/images/icon/icon.png",
    alt: "naver icon"
  })), isLogoutable ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    onClick: handleLogout
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, email ? '로그아웃' : '예약확인')) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: email ? '/myreservation' : '/bookinglogin'
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, email || '예약확인')));
};

__signature__(MainNavBar, "useState{[email, setEmail]('')}\nuseHistory{history}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];
});

MainNavBar.propTypes = {
  isTransparent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  isLogoutable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired
};
var _default = MainNavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MainNavBar, "MainNavBar", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainNavBar/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainNavBar/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "459B":
/*!********************************************!*\
  !*** ./src/jsx/ReservationCount/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "RFh2");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



 // 잘잘하게 쪼갤수 있을 것 같음

var ReservationCount = function ReservationCount(props) {
  var toUsedLen = props.toUsedLen,
      usedLen = props.usedLen,
      canceledLen = props.canceledLen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ReservationCount"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_book2"
  }), ' 전체'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, toUsedLen + usedLen + canceledLen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_book_ss"
  }), ' 이용예정'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, toUsedLen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_check"
  }), ' 이용완료'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, usedLen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_back"
  }), ' 취소·환불'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, canceledLen)))));
};

ReservationCount.propTypes = {
  toUsedLen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  usedLen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  canceledLen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
var _default = ReservationCount;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReservationCount, "ReservationCount", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReservationCount/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReservationCount/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "4b81":
/*!**********************************!*\
  !*** ./src/jsx/Button/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4lVE":
/*!***************************************!*\
  !*** ./src/jsx/ProductInfo/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5A9N":
/*!**********************************!*\
  !*** ./src/jsx/Button/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "4b81");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Button = function Button(props) {
  var style = props.style,
      click = props.click,
      children = props.children;

  var createStyle = function createStyle() {
    return _objectSpread({
      color: '#000',
      backgroundColor: '#f4f4f4'
    }, style);
  };

  return typeof click === 'function' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "Button",
    type: "button",
    onClick: click,
    style: createStyle()
  }, children) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "Button",
    to: click,
    style: createStyle()
  }, children);
};

Button.defaultProps = {
  style: {}
};
Button.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  click: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
var _default = Button;
/* harmony default export */ __webpack_exports__["default"] = (_default);
/*
 * 네이버 배경 초록색: #1ec800 글자색 #fff;
 */

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Button, "Button", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Button/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Button/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "5vvM":
/*!*******************************************!*\
  !*** ./src/jsx/TicketInputList/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "63g5":
/*!*****************************************!*\
  !*** ./src/jsx/MainContainer/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "m+6n");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MainView */ "M2Ck");
/* harmony import */ var _TabController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../TabController */ "h/In");
/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ProductBox */ "Ir+m");
/* harmony import */ var _TotalCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TotalCount */ "GmL3");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};










var MainContainer = function MainContainer(props) {
  var basisCount = props.basisCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      selectedCategory = _useState2[0],
      setSelectedCategory = _useState2[1]; // 현재 선택된 카테고리 id


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      productCount = _useState4[0],
      setProductCount = _useState4[1]; //  카테고리의 제품 개수


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Array(6).fill(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], null))),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      views = _useState6[0],
      setViews = _useState6[1]; // [<MainView/>,<MainView/>]


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Array(6).fill(null)),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      viewsArr = _useState8[0],
      setViewsArr = _useState8[1]; // [[<ProductBox/>],[<ProductBox/>]];


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Array(6).fill(null)),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      categoryProducts = _useState10[0],
      setCategoryProducts = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState11, 2),
      showingCount = _useState12[0],
      setShowingCount = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState13, 2),
      isFetched = _useState14[0],
      setIsFetched = _useState14[1];

  var labels = ['전체', '전시', '뮤지컬', '콘서트', '클래식', '연극'];
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    document.title = '네이버 예약';
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchProducts =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, items, modifiedCategory, modifiedViewsArr, modifiedViews;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/products');

              case 3:
                _ref2 = _context.sent;
                items = _ref2.data.items;
                modifiedCategory = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(categoryProducts);
                modifiedCategory[0] = items;
                modifiedViewsArr = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(viewsArr);
                modifiedViewsArr[0] = items.slice(0, basisCount).map(function (info) {
                  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    key: info.displayInfoId,
                    itemInfo: info
                  });
                });
                modifiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);
                modifiedViews[0] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  products: modifiedViewsArr[0]
                });
                setCategoryProducts(modifiedCategory);
                setViewsArr(modifiedViewsArr);
                setShowingCount(showingCount + basisCount);
                setProductCount(items.length);
                setViews(modifiedViews);
                setIsFetched(true);
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }));

      return function fetchProducts() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchProducts();
  }, []);

  var showMoreProduct = function showMoreProduct() {
    var viewsLen = viewsArr[selectedCategory].length;
    var productsLen = categoryProducts[selectedCategory].length;

    if (viewsLen >= showingCount + basisCount || viewsLen > showingCount) {
      // viewsArr에 있던 기존 것을 사용할 때
      var finalInd = viewsLen >= showingCount + basisCount ? showingCount + basisCount : viewsLen;

      var modifiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

      modifiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        productCount: productCount,
        products: viewsArr[selectedCategory].slice(0, finalInd)
      });
      setShowingCount(finalInd);
      setViews(modifiedViews);
    } else if (productsLen > viewsLen) {
      // viewsArr에 채워서 사용할 때
      var _finalInd = productsLen >= viewsLen + basisCount ? viewsLen + basisCount : productsLen;

      var modifiedViewsArr = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(viewsArr);

      categoryProducts[selectedCategory].slice(viewsLen, _finalInd).forEach(function (info) {
        modifiedViewsArr[selectedCategory].push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: info.displayInfoId,
          itemInfo: info
        }));
      });

      var _modifiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

      _modifiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        products: modifiedViewsArr[selectedCategory]
      });
      setShowingCount(_finalInd);
      setViewsArr(modifiedViewsArr);
      setViews(_modifiedViews);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // 카테고리 바뀌었을 때 view바꾸는 과정
    // 1. 최초 과정
    // 2. 최초 아닐 때
    if (isFetched) {
      if (!categoryProducts[selectedCategory]) {
        // 1.최초 과정
        // selectedCategory에  상품정보를 넣고
        // views에 MainView를 생성함
        var specificProducts = [];

        var _categoryProducts = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(categoryProducts, 1),
            allProducts = _categoryProducts[0];

        allProducts.forEach(function (value) {
          if (value.categoryId === selectedCategory) {
            specificProducts.push(value);
          }
        });

        var modifiedCategory = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(categoryProducts);

        modifiedCategory[selectedCategory] = specificProducts; // views에 MainView를 생성함

        var modifiedViewsArr = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(viewsArr);

        modifiedViewsArr[selectedCategory] = specificProducts.slice(0, basisCount).map(function (info) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
            key: info.displayInfoId,
            itemInfo: info
          });
        });

        var modifiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

        modifiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], {
          products: modifiedViewsArr[selectedCategory]
        });
        setCategoryProducts(modifiedCategory);
        setProductCount(specificProducts.length);
        setViewsArr(modifiedViewsArr);
        setViews(modifiedViews);
        setShowingCount(basisCount);
      } else if (viewsArr[selectedCategory].length >= basisCount) {
        // length는 임시 판별 MainView만 있어서 안에 갯수 파악해야 됨
        // 2. basisCount랑 일치할 때
        var copiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

        copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], {
          products: viewsArr[selectedCategory].slice(0, basisCount)
        });
        setProductCount(categoryProducts[selectedCategory].length);
        setShowingCount(basisCount);
        setViews(copiedViews);
      }
    }
  }, [selectedCategory]);

  var isMoreShowing = function isMoreShowing() {
    return (categoryProducts[selectedCategory] && categoryProducts[selectedCategory].length || 0) > showingCount;
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "MainContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TabController__WEBPACK_IMPORTED_MODULE_9__["default"], {
    labels: labels,
    views: views,
    alarm: setSelectedCategory,
    top: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TotalCount__WEBPACK_IMPORTED_MODULE_11__["default"], {
      productCount: productCount
    }),
    bottom: isMoreShowing() ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "more",
      onClick: showMoreProduct
    }, "\uB354\uBCF4\uAE30") : ''
  }));
};

__signature__(MainContainer, "useState{[selectedCategory, setSelectedCategory](0)}\nuseState{[productCount, setProductCount](0)}\nuseState{[views, setViews](Array(6).fill(<MainView />))}\nuseState{[viewsArr, setViewsArr](Array(6).fill(null))}\nuseState{[categoryProducts, setCategoryProducts](Array(6).fill(null))}\nuseState{[showingCount, setShowingCount](0)}\nuseState{[isFetched, setIsFetched](false)}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

MainContainer.defaultProps = {
  basisCount: 4
};
MainContainer.propTypes = {
  basisCount: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number
};
var _default = MainContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MainContainer, "MainContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainContainer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "6Rqs":
/*!**********************************!*\
  !*** ./src/jsx/Layout/index.jsx ***!
  \**********************************/
/*! exports provided: default, ModalContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContext", function() { return ModalContext; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal */ "uiVC");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var ModalContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  setIsModal: function setIsModal() {},
  setModalChildren: function setModalChildren() {},
  alertModal: function alertModal() {},
  confirmModal: function confirmModal() {},
  imageModal: function imageModal() {}
});

var Layout = function Layout(props) {
  var children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isModal = _useState2[0],
      setIsModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      modalChildren = _useState4[0],
      setModalChildren = _useState4[1];

  var alertModal = function alertModal(text, action) {
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "modalText"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      notes: [{
        click: function click() {
          setIsModal(false);

          if (action) {
            action();
          }
        },
        children: '확인'
      }]
    })));
    setIsModal(true);
  };

  var confirmModal = function confirmModal(text, action) {
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "modalText"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      notes: [{
        style: {
          backgroundColor: '#288FEB',
          color: '#fff'
        },
        click: function click() {
          action();
          setIsModal(false);
        },
        children: '확인'
      }, {
        click: function click() {
          setIsModal(false);
        },
        children: '취소'
      }]
    })));
    setIsModal(true);
  };

  var imageModal = function imageModal(src) {
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      onClick: function onClick() {
        setIsModal(false);
      },
      src: src
    }));
    setIsModal(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isModal) {
      setModalChildren('');
    }
  }, [isModal]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ModalContext.Provider, {
    value: {
      setIsModal: setIsModal,
      setModalChildren: setModalChildren,
      alertModal: alertModal,
      confirmModal: confirmModal,
      imageModal: imageModal
    }
  }, children, isModal ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], null, modalChildren) : '');
};

__signature__(Layout, "useState{[isModal, setIsModal](false)}\nuseState{[modalChildren, setModalChildren]('')}\nuseEffect{}");

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
var _default = Layout;
/* harmony default export */ __webpack_exports__["default"] = (_default);

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ModalContext, "ModalContext", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Layout/index.jsx");
  reactHotLoader.register(Layout, "Layout", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Layout/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Layout/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "6olk":
/*!*************************************!*\
  !*** ./src/jsx/MainImage/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "88Db":
/*!************************************************!*\
  !*** ./src/jsx/ReservationContainer/index.jsx ***!
  \************************************************/
/*! exports provided: default, ActionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionContext", function() { return ActionContext; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NavBar */ "twHJ");
/* harmony import */ var _Ticket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Ticket */ "o3aN");
/* harmony import */ var _ReservationCount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ReservationCount */ "459B");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Footer */ "8ykL");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





 // FIXME: cycle 제거




var ActionContext = react__WEBPACK_IMPORTED_MODULE_4___default.a.createContext({
  confirmCancelReservation: function confirmCancelReservation() {}
});

var ReservationContainer = function ReservationContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      toUsed = _useState2[0],
      setToUsed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      toUsedLen = _useState4[0],
      setToUsedLen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      used = _useState6[0],
      setUsed = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      usedLen = _useState8[0],
      setUsedLen = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
      canceled = _useState10[0],
      setCanceled = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState11, 2),
      canceledLen = _useState12[0],
      setCanceledLen = _useState12[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_7__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    document.title = '예약 확인';

    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _ref2, data, _error$response, _data, status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/api/reservations');

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                setToUsed(data.toUsed);
                setToUsedLen(data.toUsed.length);
                setUsed(data.used);
                setUsedLen(data.used.length);
                setCanceled(data.canceled);
                setCanceledLen(data.canceled.length);
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                _error$response = _context.t0.response, _data = _error$response.data, status = _error$response.status;

                if (status === 400) {
                  alertModal(_data, function () {
                    history.push('/');
                  });
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  var cancelReservation =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id) {
      var _ref4, status, modifiedToUsed, modifiedCanceled, toDeleteIndex, _modifiedToUsed$splic, _modifiedToUsed$splic2, canceledItem, toInsertIndex, _error$response2, data, _status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("/api/reservations/".concat(id));

            case 3:
              _ref4 = _context2.sent;
              status = _ref4.status;

              if (status === 201) {
                modifiedToUsed = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(toUsed);
                modifiedCanceled = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(canceled);
                toDeleteIndex = modifiedToUsed.findIndex(function (value) {
                  return value.reservationInfoId === id;
                });
                _modifiedToUsed$splic = modifiedToUsed.splice(toDeleteIndex, 1), _modifiedToUsed$splic2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_modifiedToUsed$splic, 1), canceledItem = _modifiedToUsed$splic2[0];
                toInsertIndex = modifiedCanceled.findIndex(function (value) {
                  return value.reservationInfoId > id;
                });

                if (toInsertIndex === -1) {
                  modifiedCanceled.push(canceledItem);
                } else {
                  modifiedCanceled.splice(toInsertIndex, 0, canceledItem);
                }

                setToUsed(modifiedToUsed);
                setToUsedLen(toUsedLen - 1);
                setCanceled(modifiedCanceled);
                setCanceledLen(canceledLen + 1);
                alertModal('예약이 취소되었습니다');
              }

              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              _error$response2 = _context2.t0.response, data = _error$response2.data, _status = _error$response2.status;

              if (_status === 400) {
                alertModal('잘못된 요청입니다');
              }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function cancelReservation(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var confirmCancelReservation = function confirmCancelReservation(id) {
    return function () {
      confirmModal('한번 취소하시면 다시 되돌릴 수 없습니다. 그래도 하시겠습니까?', function () {
        cancelReservation(id);
      });
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ActionContext.Provider, {
    value: {
      confirmCancelReservation: confirmCancelReservation
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "ReservationContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReservationCount__WEBPACK_IMPORTED_MODULE_10__["default"], {
    toUsedLen: toUsedLen,
    usedLen: usedLen,
    canceledLen: canceledLen
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "\uC608\uC57D \uD655\uC815",
    infos: toUsed,
    actions: ['cancel'],
    isGreen: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "\uC774\uC6A9 \uC644\uB8CC",
    infos: used,
    actions: ['writeReview']
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: "\uCDE8\uC18C\uB41C \uC608\uC57D",
    infos: canceled
  })));
};

__signature__(ReservationContainer, "useState{[toUsed, setToUsed]([])}\nuseState{[toUsedLen, setToUsedLen](0)}\nuseState{[used, setUsed]([])}\nuseState{[usedLen, setUsedLen](0)}\nuseState{[canceled, setCanceled]([])}\nuseState{[canceledLen, setCanceledLen](0)}\nuseContext{{ alertModal, confirmModal }}\nuseHistory{history}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"]];
});

var _default = ReservationContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);

/*
ReservationContainer → ReservationCount
                                          → Ticket → TicketHead
                                                            → TicketInfoList → TicketInfo
*/

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ActionContext, "ActionContext", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReservationContainer/index.jsx");
  reactHotLoader.register(ReservationContainer, "ReservationContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReservationContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReservationContainer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "8Lov":
/*!***************************************!*\
  !*** ./src/jsx/ProductInfo/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "4lVE");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TabController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TabController */ "h/In");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var ProductInfo = function ProductInfo(props) {
  var displayInfo = props.displayInfo,
      _props$displayInfo = props.displayInfo,
      productContent = _props$displayInfo.productContent,
      productDescription = _props$displayInfo.productDescription,
      placeLot = _props$displayInfo.placeLot,
      placeStreet = _props$displayInfo.placeStreet,
      placeName = _props$displayInfo.placeName,
      telephone = _props$displayInfo.telephone,
      locationImgSrc = props.locationImgSrc;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Array(2).fill(null)),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      views = _useState2[0],
      setViews = _useState2[1];

  var labels = ['상세정보', '오시는길'];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Object.keys(displayInfo).length !== 0) {
      setViews([react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "productDetail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "[\uC18C\uAC1C]"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, productContent), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "[\uACF5\uC9C0\uC0AC\uD56D]")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "directions"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/".concat(locationImgSrc),
        alt: "location"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, productDescription), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "locText"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tableRow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fn fn-pin4"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text"
      }, placeLot)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tableRow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "greyText"
      }, "\uC9C0\uBC88"), placeStreet)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tableRow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "icon"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "greyText"
      }, placeName))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "tableRow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "icon"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fn fn-call2"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text"
      }, telephone))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonContainer"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "findRoad"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fn fn-path-find2"
      }), "\uAE38\uCC3E\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fn fn-car-find2"
      }), "\uB0B4\uBE44\uAC8C\uC774\uC158")))]);
    }
  }, [displayInfo]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "ProductInfo"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TabController__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labels: labels,
    views: views
  }));
};

__signature__(ProductInfo, "useState{[views, setViews](Array(2).fill(null))}\nuseEffect{}");

ProductInfo.defaultProps = {
  displayInfo: {},
  locationImgSrc: ''
};
ProductInfo.propTypes = {
  displayInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    productContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    productDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    placeLot: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    placeStreet: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    placeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    telephone: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  locationImgSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
var _default = ProductInfo;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductInfo, "ProductInfo", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductInfo/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductInfo/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "8ykL":
/*!**********************************!*\
  !*** ./src/jsx/Footer/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "iiGG");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Footer = function Footer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isRiseable = _useState2[0],
      setIsRiseable = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var id = setInterval(function () {
      if (document.body.scrollHeight > window.innerHeight) {
        setIsRiseable(true);
      } else {
        setIsRiseable(false);
      }
    }, 1000);
    return function () {
      return clearInterval(id);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "Footer"
  }, isRiseable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fn fn-up1"
  }), ' TOP') : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "caution"
  }, "\uB124\uC774\uBC84(\uC8FC)\uB294 \uD1B5\uC2E0\uD310\uB9E4\uC758 \uB2F9\uC0AC\uC790\uAC00 \uC544\uB2C8\uBA70, \uC0C1\uD488\uC758\uC815\uBCF4, \uAC70\uB798\uC870\uAC74, \uC774\uC6A9 \uBC0F \uD658\uBD88 \uB4F1\uACFC \uAD00\uB828\uD55C \uC758\uBB34\uC640 \uCC45\uC784\uC740 \uAC01 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "copyright"
  }, "\xA9 NAVER Corp."));
};

__signature__(Footer, "useState{[isRiseable, setIsRiseable](false)}\nuseEffect{}");

var _default = Footer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, "Footer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Footer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Footer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "9/PA":
/*!*******************************!*\
  !*** ./src/jsx/App/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "A7Qy":
/*!***************************************!*\
  !*** ./src/jsx/ProductDesc/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "D8/H":
/*!*******************************************!*\
  !*** ./src/jsx/ReviewContainer/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "b/iz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ReviewSummary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ReviewSummary */ "ybHy");
/* harmony import */ var _ReviewList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ReviewList */ "ykme");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var ReviewContainer = function ReviewContainer(props) {
  var isBrief = props.isBrief,
      displayInfoId = props.displayInfoId,
      exReviews = props.reviews,
      exAverageScore = props.averageScore;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      reviews = _useState2[0],
      setReviews = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      averageScore = _useState4[0],
      setAverageScore = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      isModifiable = _useState6[0],
      setIsModifiable = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      exData = _useState8[0],
      setExData = _useState8[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_11__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var styleRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    return function () {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setReviews(exReviews);
    setAverageScore(exAverageScore ? Number(exAverageScore) : 0);
  }, [exReviews]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // reviews가 달라졌을 때 averageScore바꾸는 effect
    if (reviews.length !== 0) {
      var modifiedAverageScore = reviews.reduce(function (accum, current) {
        return accum + Number(current.score);
      }, 0) / reviews.length;
      modifiedAverageScore = Math.round(modifiedAverageScore * 10) / 10;
      setAverageScore(modifiedAverageScore);
    } else {
      setAverageScore(0);
    }
  }, [reviews]);

  var displayStar = function displayStar(score) {
    var maxScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    // averageScore에 맞게 별점을 리턴하는 함수
    var fillCount = Math.floor(score);
    var notFillCount = maxScore - Math.ceil(score);
    var ratioCount = Math.round(score * 10) / 10 - fillCount;

    var stars = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(1, fillCount + 1).map(function (value) {
      if (value) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
          key: value,
          className: "fn fn-star2 getStar"
        });
      }
    });

    if (ratioCount > Number.EPSILON) {
      if (styleRef.current) {
        styleRef.current.innerText = ".ReviewContainer .ReviewSummary .ratioStar:before { \n          background: linear-gradient(to Right,#f00 ".concat(Math.round(ratioCount * 100), "%,#E6E6E6 ").concat(Math.round((1 - ratioCount) * 100), "%);\n          -webkit-background-clip: text;\n        }");
      } else {
        styleRef.current = document.createElement('style');
        styleRef.current.innerText = ".ReviewContainer .ReviewSummary .ratioStar:before { \n          background: linear-gradient(to Right,#f00 ".concat(Math.round(ratioCount * 100), "%,#E6E6E6 ").concat(Math.round((1 - ratioCount) * 100), "%);\n          -webkit-background-clip: text;\n        }");
        document.head.appendChild(styleRef.current);
      }

      stars.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        key: fillCount + 1,
        className: "fn fn-star2 ratioStar"
      }));
    }

    lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(fillCount + Math.ceil(ratioCount) + 1, 6).forEach(function (value) {
      if (value) {
        stars.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
          key: value,
          className: "fn fn-star2 notGetStar"
        }));
      }
    });

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "starCount"
    }, stars);
  };

  var deleteComment = function deleteComment(reservationInfoId) {
    // 상세정보 창의 리뷰 삭제 버튼을 누르고 확인을 눌렀을 시의 행동
    return (
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _ref2, status, modifiedReviews, _error$response, data, _status;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a["delete"]("/api/reservations/".concat(reservationInfoId, "/comments"));

              case 3:
                _ref2 = _context.sent;
                status = _ref2.status;

                if (status === 201) {
                  alertModal('리뷰가 삭제되었습니다');
                  modifiedReviews = reviews.filter(function (value) {
                    return value.reservationInfoId !== reservationInfoId;
                  });
                  setReviews(modifiedReviews);
                }

                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _error$response = _context.t0.response, data = _error$response.data, _status = _error$response.status;

                if (_status === 400) {
                  alertModal(data);
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))
    );
  };

  var confirmDelete = function confirmDelete(reservationInfoId) {
    // 상세정보 창의 리뷰 삭제 버튼을 눌렀을 때의 행동
    return function () {
      confirmModal('리뷰를 삭제하시겠습니까?', deleteComment(reservationInfoId));
    };
  };

  var editComment = function editComment(reservationInfoId) {
    // 상세정보 창의 리뷰 수정 버튼 눌렀을 때의 행동
    return (
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _ref4, status, index, _reviews$index, score, comment, commentImages, _error$response2, data, _status2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/auth/edit/reservations/".concat(reservationInfoId, "/comments"));

              case 3:
                _ref4 = _context2.sent;
                status = _ref4.status;

                if (status === 200) {
                  index = reviews.findIndex(function (review) {
                    return review.reservationInfoId === reservationInfoId;
                  });
                  _reviews$index = reviews[index], score = _reviews$index.score, comment = _reviews$index.comment, commentImages = _reviews$index.commentImages;
                  setExData({
                    score: score,
                    comment: comment,
                    id: reservationInfoId,
                    imageSrc: commentImages.length ? commentImages[0].saveFileName : ''
                  });
                  setIsModifiable(true);
                }

                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                _error$response2 = _context2.t0.response, data = _error$response2.data, _status2 = _error$response2.status;

                if (_status2 === 400) {
                  alertModal(data);
                }

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))
    );
  };

  var confirmEdit = function confirmEdit(reservationInfoId) {
    // 상세정보 창의 리뷰 수정 버튼을 누르고 수정 버튼을 다시 눌렀을 때의 행동
    return function (submit, score, comment, imageSrc) {
      confirmModal('리뷰를 수정하시겠습니까?', function () {
        var isProcessed = submit();

        if (isProcessed) {
          var index = reviews.findIndex(function (review) {
            return review.reservationInfoId === reservationInfoId;
          });

          var modifiedReviews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(reviews);

          modifiedReviews[index].comment = comment;
          modifiedReviews[index].score = typeof score === 'string' ? score : "".concat(score, ".0");
          /* 
          * 1. 기존에 파일이 없는 경우
            1.1 파일 추가 X -> req.file에 물린게 없음
          1.2 파일 추가 -> req.file에 물린게 있음
            2. 기존에 파일이 있는 경우
            2.1 파일 삭제 -> req.file에 물린게 없음
          2.2 파일 그대로 -> req.file에 물린게 없음
          2.3 파일 추가(수정) -> req.file에 물린게 있음
          */

          if (imageSrc) {
            if (!modifiedReviews[index].commentImages.length) {
              // 1.2
              modifiedReviews[index].commentImages[0] = {};
              modifiedReviews[index].commentImages[0].saveFileName = imageSrc;
            } else {
              // 2.2,2.3
              modifiedReviews[index].commentImages[0].saveFileName = imageSrc;
            }
          } else if (modifiedReviews[index].commentImages.length) {
            // 1.1은 그대로 둬도 됨
            modifiedReviews[index].commentImages = [];
          }

          setReviews(modifiedReviews);
        }

        setExData({});
        setIsModifiable(false);
      });
    };
  };

  var confirmCancel = function confirmCancel() {
    // 상세정보 창의 리뷰 수정 버튼을 누르고 취소를 눌렀을 때의 행동
    confirmModal('리뷰 수정을 취소하시겠습니까?', function () {
      // 그대로 있음;
      setIsModifiable(false);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "ReviewContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReviewSummary__WEBPACK_IMPORTED_MODULE_9__["default"], {
    averageScore: averageScore,
    reviewCount: reviews.length,
    displayStar: displayStar
  }), reviews.length ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReviewList__WEBPACK_IMPORTED_MODULE_10__["default"], {
    reviews: reviews,
    isBrief: isBrief,
    isModifiable: isModifiable,
    exData: exData,
    confirmDelete: confirmDelete,
    confirmCancel: confirmCancel,
    confirmEdit: confirmEdit,
    editComment: editComment
  }) : '', reviews.length ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("aside", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "fn fn-alarm1"
  }), "\uB124\uC774\uBC84 \uC608\uC57D\uC744 \uD1B5\uD574 \uC2E4\uC81C \uBC29\uBB38\uD55C \uC774\uC6A9\uC790\uAC00 \uB0A8\uAE34 \uD3C9\uAC00\uC785\uB2C8\uB2E4.")) : '', isBrief && reviews.length > 5 ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_12__["default"], {
    notes: [{
      style: {
        color: '#000',
        backgroundColor: '#F3F5F6',
        border: 'none',
        borderTop: '1px solid #c0c0c0'
      },
      click: "/review/".concat(displayInfoId),
      children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, '예매자 리뷰 더보기 ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-forward1"
      }))
    }]
  }) : '');
};

__signature__(ReviewContainer, "useState{[reviews, setReviews]([])}\nuseState{[averageScore, setAverageScore](0)}\nuseState{[isModifiable, setIsModifiable](false)}\nuseState{[exData, setExData]({})}\nuseContext{{ alertModal, confirmModal }}\nuseRef{styleRef}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

ReviewContainer.defaultProps = {
  isBrief: true,
  reviews: [],
  averageScore: ''
};
ReviewContainer.propTypes = {
  displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  averageScore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  reviews: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    comment: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    commentId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    productId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    reservationEmail: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    reservationInfoId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    score: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    commentImages: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
      deleteFlag: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
      saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
    }))
  })),
  isBrief: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
var _default = ReviewContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReviewContainer, "ReviewContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewContainer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "EiSa":
/*!**************************************!*\
  !*** ./src/jsx/MainNavBar/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "F3ks":
/*!***********************************!*\
  !*** ./src/jsx/TabView/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "FeZ6":
/*!******************************************!*\
  !*** ./src/jsx/TicketInfoList/style.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Fyvw":
/*!*************************************!*\
  !*** ./src/jsx/LoginForm/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "iATR");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Layout */ "6Rqs");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var LoginForm = function LoginForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_7__["ModalContext"]),
      alertModal = _useContext.alertModal;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    document.title = '네이버 예약 로그인';
  }, []);

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var _ref2, statusText, _error$response, data, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              event.preventDefault();
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/auth/login', {
                email: email
              });

            case 4:
              _ref2 = _context.sent;
              statusText = _ref2.statusText;

              if (statusText === 'OK') {
                history.push('/myreservation');
              }

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              _error$response = _context.t0.response, data = _error$response.data, status = _error$response.status;

              if (status === 400) {
                inputRef.current.blur();
                alertModal(data);
              }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "LoginForm"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "headerBox"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", null, "\uBE44\uD68C\uC6D0 \uC608\uC57D\uD655\uC778")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "\uC608\uC57D\uC790 \uC774\uBA54\uC77C \uC785\uB825"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      setEmail(value);
    },
    ref: inputRef,
    placeHolder: "xxxxx@naver.com"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "submit",
    value: "\uB0B4 \uC608\uC57D \uD655\uC778"
  }))));
};

__signature__(LoginForm, "useState{[email, setEmail]('')}\nuseContext{{ alertModal }}\nuseHistory{history}\nuseRef{inputRef}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];
});

var _default = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoginForm, "LoginForm", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/LoginForm/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/LoginForm/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "GmL3":
/*!**************************************!*\
  !*** ./src/jsx/TotalCount/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "3G0F");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var TotalCount = function TotalCount(props) {
  var productCount = props.productCount;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "TotalCount"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uBC14\uB85C \uC608\uB9E4 \uAC00\uB2A5\uD55C \uD589\uC0AC\uAC00", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " ".concat(productCount, "\uAC1C ")), "\uC788\uC2B5\uB2C8\uB2E4"));
};

TotalCount.propTypes = {
  productCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
var _default = TotalCount;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TotalCount, "TotalCount", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TotalCount/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TotalCount/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "Ir+m":
/*!**************************************!*\
  !*** ./src/jsx/ProductBox/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "kKml");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var ProductBox = function ProductBox(props) {
  var _props$itemInfo = props.itemInfo,
      displayInfoId = _props$itemInfo.displayInfoId,
      productImageUrl = _props$itemInfo.productImageUrl,
      productDescription = _props$itemInfo.productDescription,
      placeName = _props$itemInfo.placeName,
      productContent = _props$itemInfo.productContent,
      textLimit = props.textLimit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isFold = _useState2[0],
      setIsFold = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isIconShowing = _useState4[0],
      setIsIconShowing = _useState4[1];

  var detailText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var textObj;
  var trimmedText = productContent.trim();
  trimmedText = trimmedText.replace('\n', '');

  if (trimmedText.length > textLimit) {
    var textSimple = trimmedText.slice(0, textLimit);
    var textDetail = trimmedText.slice(textLimit);
    textObj = {
      simple: textSimple,
      detail: textDetail
    };
  } else {
    textObj = {
      simple: trimmedText,
      detail: ''
    };
  }

  var showAndHide = function showAndHide(event) {
    event.preventDefault();

    if (isFold) {
      setIsFold(false);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(detailText.current).slideDown(100);
    } else {
      setIsFold(true);
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(detailText.current).slideUp(100);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "ProductBox"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/detail/".concat(displayInfoId)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "photo",
    style: {
      backgroundImage: "url(\"/".concat(productImageUrl, "\")")
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "head"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, productDescription), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, placeName)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mainText",
    onMouseOver: function onMouseOver() {
      setIsIconShowing(true);
    },
    onMouseOut: function onMouseOut() {
      setIsIconShowing(false);
    }
  }, textObj.detail ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, textObj.simple, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "dots",
    style: {
      display: isFold ? 'inline' : 'none'
    }
  }, "..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "moreDesc",
    ref: detailText,
    style: {
      display: 'none'
    }
  }, textObj.detail)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "helping"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fn ".concat(isFold ? 'fn-dots2' : 'fn-up2'),
    onClick: showAndHide,
    style: {
      color: isIconShowing ? '#000' : 'transparent'
    }
  }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, textObj.simple))));
};

__signature__(ProductBox, "useState{[isFold, setIsFold](true)}\nuseState{[isIconShowing, setIsIconShowing](false)}\nuseRef{detailText}");

ProductBox.defaultProps = {
  textLimit: 100
};
ProductBox.propTypes = {
  itemInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    productImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    productDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    placeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    productContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired,
  textLimit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
var _default = ProductBox;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductBox, "ProductBox", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductBox/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductBox/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "Jj3P":
/*!*********************************!*\
  !*** ./src/jsx/TabUI/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "K8cM":
/*!**************************************!*\
  !*** ./src/jsx/TicketHead/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "KTKg":
/*!**************************************!*\
  !*** ./src/jsx/TicketInfo/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "n2J4");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReservationContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReservationContainer */ "88Db");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var TicketInfo = function TicketInfo(props) {
  var _props$info = props.info,
      reservationInfoId = _props$info.reservationInfoId,
      description = _props$info.description,
      reservationDate = _props$info.reservationDate,
      reservationName = _props$info.reservationName,
      reservationTel = _props$info.reservationTel,
      priceInfo = _props$info.priceInfo,
      placeName = _props$info.placeName,
      totalPrice = _props$info.totalPrice,
      productId = _props$info.productId,
      isCommentExist = _props$info.isCommentExist,
      actions = props.actions;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ReservationContainer__WEBPACK_IMPORTED_MODULE_4__["ActionContext"]),
      confirmCancelReservation = _useContext.confirmCancelReservation;

  var reservationSummary = priceInfo.reduce(function (accum, current) {
    return "".concat(accum, " ").concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["priceTypeMapper"])(current.priceTypeName), " ").concat(current.count, " \uB9E4,");
  }, '').slice(0, -1);

  var createButton = function createButton(actions) {
    if (actions.length) {
      var style = {
        fontSize: '16px',
        lineHeight: '20px'
      };
      var notes = [];
      actions.forEach(function (action) {
        if (action === 'cancel') {
          notes.push({
            style: style,
            click: confirmCancelReservation(reservationInfoId),
            children: '취소'
          });
        }

        if (action === 'writeReview' && !isCommentExist) {
          notes.push({
            style: style,
            click: "/reviewwrite/".concat(productId),
            children: '예매자 리뷰 남기기'
          });
        }
      });

      if (notes.length) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_5__["default"], {
          margin: [0, 0, 15, 0],
          notes: notes
        });
      }

      return '';
    }

    return '';
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "TicketInfo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "No.".concat(String(reservationInfoId).padStart(8, '0'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "middleSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uC77C\uC815"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, reservationDate)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uB0B4\uC5ED"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uC608\uB9E4\uC790 \uC774\uB984"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, reservationName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uC608\uB9E4\uC790 \uC804\uD654\uBC88\uD638"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, reservationTel)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uC608\uB9E4 \uB9E4\uC218"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ticket"
  }, reservationSummary))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uC7A5\uC18C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, placeName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottomSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uACB0\uC81C \uAE08\uC561"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(totalPrice), " \uC6D0"))), createButton(actions));
};

__signature__(TicketInfo, "useContext{{ confirmCancelReservation }}");

TicketInfo.propTypes = {
  info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    reservationInfoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reservationName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reservationTel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    placeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    totalPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    productId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    isCommentExist: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    priceInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    }).isRequired).isRequired
  }),
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired
};
var _default = TicketInfo;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TicketInfo, "TicketInfo", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInfo/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInfo/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "KcWC":
/*!********************************************!*\
  !*** ./src/jsx/ReserveContainer/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NavBar */ "twHJ");
/* harmony import */ var _ReserveForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ReserveForm */ "SRX6");
/* harmony import */ var _ReserveDesc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ReserveDesc */ "PBkl");
/* harmony import */ var _MainImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MainImage */ "voRo");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var ReserveContainer = function ReserveContainer() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"])(),
      displayInfoId = _useParams.displayInfoId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      productData = _useState2[0],
      setProductData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      imageSrc = _useState4[0],
      setImageSrc = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      date = _useState6[0],
      setDate = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/products/".concat(displayInfoId));

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                setProductData(data);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchDate =
    /*#__PURE__*/
    function () {
      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/reservations/date');

              case 3:
                _ref4 = _context2.sent;
                data = _ref4.data;
                setDate(data);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function fetchDate() {
        return _ref3.apply(this, arguments);
      };
    }();

    fetchDate();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (productData.displayInfo) {
      document.title = "\uC608\uC57D ".concat(productData.displayInfo.productDescription);
    }
  }, [productData]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (productData.productImages) {
      productData.productImages.some(function (value) {
        if (value.type === 'ma') {
          setImageSrc(value.saveFileName);
          return true;
        }

        return false;
      });
    }
  }, [productData]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ReserveContainer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: productData.displayInfo && productData.displayInfo.productDescription
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    src: "/".concat(imageSrc),
    alt: "main image"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ReserveDesc__WEBPACK_IMPORTED_MODULE_8__["default"], {
    description: productData.displayInfo && productData.displayInfo.productDescription,
    place: productData.displayInfo && productData.displayInfo.placeLot,
    startDate: date.startDate,
    endDate: date.endDate,
    productPrices: productData.productPrices
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ReserveForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    productPrices: productData.productPrices,
    displayInfoId: displayInfoId,
    productId: productData.displayInfo && productData.displayInfo.productId,
    reservationDate: date.reservationDate
  }));
};

__signature__(ReserveContainer, "useParams{{ displayInfoId }}\nuseState{[productData, setProductData]({})}\nuseState{[imageSrc, setImageSrc]('')}\nuseState{[date, setDate]({})}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"]];
});

var _default = ReserveContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReserveContainer, "ReserveContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveContainer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "Kj3g":
/*!*******************************************!*\
  !*** ./src/jsx/DetailContainer/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _DetailImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DetailImage */ "2w/+");
/* harmony import */ var _ProductDesc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ProductDesc */ "o4c6");
/* harmony import */ var _EventInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../EventInfo */ "+LtL");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
/* harmony import */ var _ReviewContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ReviewContainer */ "D8/H");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ProductInfo */ "8Lov");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












var DetailContainer = function DetailContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      productData = _useState2[0],
      setProductData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      discountInfo = _useState4[0],
      setDiscountInfo = _useState4[1];

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"])(),
      displayInfoId = _useParams.displayInfoId;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (productData.displayInfo) {
      document.title = productData.displayInfo.productDescription;
    }
  }, [productData]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, data, modifiedImages;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/products/".concat(displayInfoId));

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                modifiedImages = data.productImages.filter(function (value) {
                  return value.type !== 'th';
                });
                setProductData(_objectSpread({}, data, {
                  productImages: modifiedImages
                }));
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (productData.productPrices) {
      var info = [];
      productData.productPrices.forEach(function (value) {
        if (value.discountRate && Number(value.discountRate) > Number.EPSILON) {
          info.push("".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_7__["priceTypeMapper"])(value.priceTypeName), " ").concat(Math.round(value.discountRate), "%"));
        }
      });
      setDiscountInfo(info);
    }
  }, [productData]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "DetailContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_DetailImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
    images: productData.productImages,
    title: productData.displayInfo && productData.displayInfo.productDescription
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductDesc__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: productData.displayInfo && productData.displayInfo.productContent
  }), discountInfo.length ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_EventInfo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    discountInfo: discountInfo
  }) : '', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_11__["default"], {
    notes: [{
      style: {
        color: '#fff',
        backgroundColor: '#1ec800',
        borderTop: 'none'
      },
      click: "/reserve/".concat(displayInfoId),
      children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-nbooking-calender2"
      }), ' 예매하기')
    }]
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReviewContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    displayInfoId: displayInfoId,
    reviews: productData.comments,
    averageScore: productData.averageScore
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_13__["default"], {
    displayInfo: productData.displayInfo,
    locationImgSrc: productData.displayInfoImage && productData.displayInfoImage.saveFileName
  }));
};

__signature__(DetailContainer, "useState{[productData, setProductData]({})}\nuseState{[discountInfo, setDiscountInfo]([])}\nuseParams{{ displayInfoId }}\nuseEffect{}\nuseEffect{}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"]];
});

var _default = DetailContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DetailContainer, "DetailContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/DetailContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/DetailContainer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "LB1S":
/*!****************************************!*\
  !*** ./src/jsx/ReserverInfo/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "a7rn");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var ReserverInfo = function ReserverInfo(props) {
  var name = props.name,
      telephone = props.telephone,
      email = props.email,
      reservationDate = props.reservationDate,
      totalTicket = props.totalTicket,
      dispatch = props.dispatch,
      isVerifiedName = props.isVerifiedName,
      isVerifiedTel = props.isVerifiedTel,
      isVerifiedEmail = props.isVerifiedEmail;

  var makeAlert = function makeAlert(id, text) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: id,
      className: "tableRow",
      style: {
        display: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "alertMessage"
    }, text));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "ReserverInfo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "reserverHeader"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uC608\uB9E4\uC790 \uC815\uBCF4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-check"
  }), ' 필수입력')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow",
    id: "inputReserver"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-check"
  }), ' 예매자'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    value: name,
    name: "reservationName",
    placeholder: "\uD64D\uAE38\uB3D9",
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      dispatch({
        type: 'CHANGE_NAME',
        value: value
      });
    },
    onFocus: function onFocus() {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongName').length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongName').hide();
      }
    },
    onBlur: function onBlur() {
      dispatch({
        type: 'VERIFY_NAME'
      });
      dispatch({
        type: 'VERIFY_SUBMIT'
      });

      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongName').length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongName').slideDown(1000);
      }
    }
  }))), isVerifiedName ? '' : makeAlert('alertWrongName', '이름에는 공백이 있어서는 안됩니다.'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow",
    id: "inputTel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-check"
  }), ' 연락처'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    value: telephone,
    name: "reservationTelephone",
    placeholder: "010-0000-0000",
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      dispatch({
        type: 'CHANGE_TEL',
        value: value
      });
    },
    onFocus: function onFocus() {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongTel').length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongTel').hide();
      }
    },
    onBlur: function onBlur() {
      dispatch({
        type: 'VERIFY_TEL'
      });
      dispatch({
        type: 'VERIFY_SUBMIT'
      });

      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongTel').length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongTel').slideDown(1000);
      }
    }
  }))), isVerifiedTel ? '' : makeAlert('alertWrongTel', '전화번호 형식이 맞지 않습니다'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow",
    id: "inputEmail"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-check"
  }), ' 이메일'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    value: email,
    name: "reservationEmail",
    placeholder: "xxxxxx@naver.com",
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      dispatch({
        type: 'CHANGE_EMAIL',
        value: value
      });
    },
    onFocus: function onFocus() {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('alertWrongEmail').length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongEmail').hide();
      }
    },
    onBlur: function onBlur() {
      dispatch({
        type: 'VERIFY_EMAIL'
      });
      dispatch({
        type: 'VERIFY_SUBMIT'
      });

      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongEmail').length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#alertWrongEmail').slideDown(1000);
      }
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow",
    id: "overallReservation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-check",
    style: {
      color: 'transparent'
    }
  }), ' 예매내용'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(reservationDate, ", \uCD1D ").concat(totalTicket, "\uB9E4"))), isVerifiedEmail ? '' : makeAlert('alertWrongEmail', '이메일 형식이 맞지 않습니다')));
};

ReserverInfo.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  telephone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  totalTicket: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isVerifiedName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isVerifiedTel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  isVerifiedEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
var _default = ReserverInfo;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReserverInfo, "ReserverInfo", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserverInfo/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserverInfo/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "LhMA":
/*!*******************************!*\
  !*** ./src/jsx/TOS/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "M2Ck":
/*!************************************!*\
  !*** ./src/jsx/MainView/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "icCQ");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductContainer */ "tyuF");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var MainView = function MainView(props) {
  var products = props.products;
  var leftProducts = products.filter(function (v, index) {
    return index % 2 === 0;
  });
  var rightProducts = products.filter(function (v, index) {
    return index % 2 === 1;
  });
  return products.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MainView"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "left"
  }, leftProducts), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "right"
  }, rightProducts)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MainView"
  });
};

MainView.defaultProps = {
  products: []
};
MainView.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element)
};
var _default = MainView;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MainView, "MainView", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainView/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainView/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "M2rr":
/*!*************************************!*\
  !*** ./src/jsx/SubNavBar/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "MA+E":
/*!**************************************!*\
  !*** ./src/jsx/ReviewList/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "NO5J":
/*!*****************************!*\
  !*** ./src/jsx/App/app.jsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "9/PA");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header */ "PN5m");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LoginForm */ "Fyvw");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer */ "8ykL");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NavBar */ "twHJ");
/* harmony import */ var _DetailContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DetailContainer */ "Kj3g");
/* harmony import */ var _ReserveContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ReserveContainer */ "KcWC");
/* harmony import */ var _ReservationContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ReservationContainer */ "88Db");
/* harmony import */ var _PromotionImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../PromotionImage */ "sdMq");
/* harmony import */ var _WriteReviewContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../WriteReviewContainer */ "e91b");
/* harmony import */ var _ReviewProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ReviewProvider */ "NZtW");
/* harmony import */ var _MainContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../MainContainer */ "63g5");
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

















react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/detail/:displayInfoId"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
  isTransparent: true
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailContainer__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/bookinglogin"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/myreservation"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
  isLogoutable: true
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReservationContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/reserve/:displayInfoId"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReserveContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/review/:displayInfoId"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewProvider__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/reviewwrite/:productId",
  component: _WriteReviewContainer__WEBPACK_IMPORTED_MODULE_13__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PromotionImage__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainContainer__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], null))))), document.getElementById('content'));

/***/ }),

/***/ "NZtW":
/*!******************************************!*\
  !*** ./src/jsx/ReviewProvider/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../NavBar */ "twHJ");
/* harmony import */ var _ReviewContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ReviewContainer */ "D8/H");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var ReviewProvider = function ReviewProvider() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"])(),
      displayInfoId = _useParams.displayInfoId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      productData = _useState2[0],
      setProductData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/products/".concat(displayInfoId));

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                setProductData(data);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (productData.displayInfo) {
      document.title = "\uB9AC\uBDF0 : ".concat(productData.displayInfo.productDescription);
    }
  }, [productData]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ReviewProvider"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: productData.displayInfo && productData.displayInfo.productDescription
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ReviewContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    displayInfoId: displayInfoId,
    averageScore: productData.averageScore,
    reviews: productData.comments,
    isBrief: false
  }));
};

__signature__(ReviewProvider, "useParams{{ displayInfoId }}\nuseState{[productData, setProductData]({})}\nuseEffect{}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"]];
});

var _default = ReviewProvider;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReviewProvider, "ReviewProvider", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewProvider/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewProvider/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "O5AH":
/*!**************************************!*\
  !*** ./src/jsx/ImageTitle/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "juvM");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var ImageTitle = function ImageTitle(props) {
  var degree = props.degree,
      imageLen = props.imageLen,
      title = props.title,
      leftScroll = props.leftScroll,
      rightScroll = props.rightScroll;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ImageTitle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "counting"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bright"
  }, degree + 1), " / ".concat(imageLen))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left"
  }, imageLen > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-backward2",
    onClick: leftScroll
  }) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right"
  }, imageLen > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-forward2",
    onClick: rightScroll
  }) : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom"
  }));
};

ImageTitle.propTypes = {
  degree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  imageLen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  leftScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  rightScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = ImageTitle;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageTitle, "ImageTitle", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ImageTitle/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ImageTitle/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "OAMj":
/*!**************************************!*\
  !*** ./src/jsx/TicketHead/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "K8cM");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var TicketHead = function TicketHead(props) {
  var text = props.text,
      isGreen = props.isGreen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TicketHead ".concat(isGreen ? 'green' : 'grey')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticketLeft"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticketMiddle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_check2"
  }), " ".concat(text))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticketRight"
  }));
};

TicketHead.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isGreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};
var _default = TicketHead;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TicketHead, "TicketHead", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketHead/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketHead/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "OELu":
/*!*******************************!*\
  !*** ./src/jsx/TOS/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "LhMA");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var TOS = function TOS(props) {
  var isChecked = props.isChecked,
      dispatch = props.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isCollectionFold = _useState2[0],
      setIsCollectionFold = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isOfferFold = _useState4[0],
      setIsOfferFold = _useState4[1];

  var foldText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' 접기', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fn fn-up2"
  }));
  var showText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, ' 보기', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fn fn-down2"
  }));

  var handleCollectionClick = function handleCollectionClick() {
    if (isCollectionFold) {
      setIsCollectionFold(false);
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.TOS .collectionUseTerm').slideDown();
    } else {
      setIsCollectionFold(true);
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.TOS .collectionUseTerm').slideUp();
    }
  };

  var handleOfferClick = function handleOfferClick() {
    if (isOfferFold) {
      setIsOfferFold(false);
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.TOS .offerTerm').slideDown();
    } else {
      setIsOfferFold(true);
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.TOS .offerTerm').slideUp();
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aritlce", {
    className: "TOS"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "allAgreement"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    name: "TOSCheck",
    id: "TOSCheck",
    onChange: function onChange(_ref) {
      var checked = _ref.target.checked;
      dispatch({
        type: 'CHANGE_TOS',
        checked: checked
      });
      dispatch({
        type: 'VERIFY_SUBMIT'
      });
    },
    checked: isChecked
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "TOSCheck"
  }, '  이용자 약관 전체동의'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\uD544\uC218 \uB3D9\uC758")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "agreement"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "spr_book ico_arr_ipc2"
  }), "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "collectionUseAgreement",
    onClick: handleCollectionClick
  }, isCollectionFold ? showText : foldText)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "collectionUseTerm"
  }, "<\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758>", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "1. \uC218\uC9D1\uD56D\uBAA9 : [\uD544\uC218] \uC774\uB984, \uC5F0\uB77D\uCC98, [\uC120\uD0DD] \uC774\uBA54\uC77C\uC8FC\uC18C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2. \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801 : \uC0AC\uC5C5\uC790\uD68C\uC6D0\uACFC \uC608\uC57D\uC774\uC6A9\uC790\uC758 \uC6D0\uD65C\uD55C \uAC70\uB798 \uC9C4\uD589, \uACE0\uAC1D\uC0C1\uB2F4, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0 \uCC98\uB9AC, \uBD84\uC7C1\uC870\uC815 \uD574\uACB0\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uB124\uC774\uBC84 \uC608\uC57D \uC774\uC6A9 \uD6C4 \uB9AC\uBDF0\uC791\uC131\uC5D0 \uB530\uB978 \uB124\uC774\uBC84\uD398\uC774 \uD3EC\uC778\uD2B8 \uC9C0\uAE09 \uBC0F \uAD00\uB828 \uC548\uB0B4", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3. \uBCF4\uAD00\uAE30\uAC04", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "- \uD68C\uC6D0\uD0C8\uD1F4 \uB4F1 \uAC1C\uC778\uC815\uBCF4 \uC774\uC6A9\uBAA9\uC801 \uB2EC\uC131 \uC2DC\uAE4C\uC9C0 \uBCF4\uAD00", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "- \uB2E8, \uC0C1\uBC95 \uBC0F \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uB4F1 \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uD558\uC5EC \uC77C\uC815 \uAE30\uAC04 \uBCF4\uAD00\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uD568", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4. \uB3D9\uC758 \uAC70\uBD80\uAD8C \uB4F1\uC5D0 \uB300\uD55C \uACE0\uC9C0: \uC815\uBCF4\uC8FC\uCCB4\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758\uB97C \uAC70\uBD80\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098, \uC774 \uACBD\uC6B0 \uC0C1\uD488 \uBC0F \uC11C\uBE44\uC2A4 \uC608\uC57D\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "agreement"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "spr_book ico_arr_ipc2"
  }), "\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "offerAgreement",
    onClick: handleOfferClick
  }, isOfferFold ? showText : foldText)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "offerTerm"
  }, "<\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758>", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "1. \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790 : \uBBF8\uB514\uC5B4\uC564\uC544\uD2B8", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2. \uC81C\uACF5\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9 : [\uD544\uC218] \uB124\uC774\uBC84 \uC544\uC774\uB514, \uC774\uB984, \uC5F0\uB77D\uCC98 [\uC120\uD0DD] \uC774\uBA54\uC77C \uC8FC\uC18C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3. \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790\uC758 \uC774\uC6A9\uBAA9\uC801 : \uC0AC\uC5C5\uC790\uD68C\uC6D0\uACFC \uC608\uC57D\uC774\uC6A9\uC790\uC758 \uC6D0\uD65C\uD55C \uAC70\uB798 \uC9C4\uD589, \uACE0\uAC1D\uC0C1\uB2F4, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0 \uCC98\uB9AC, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB530\uB978 \uC124\uBB38\uC870\uC0AC \uBC0F \uD61C\uD0DD \uC81C\uACF5, \uBD84\uC7C1\uC870\uC815 \uD574\uACB0\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4. \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04 : \uAC1C\uC778\uC815\uBCF4 \uC774\uC6A9\uBAA9\uC801 \uB2EC\uC131 \uC2DC \uAE4C\uC9C0 \uBCF4\uAD00\uD569\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "5. \uB3D9\uC758 \uAC70\uBD80\uAD8C \uB4F1\uC5D0 \uB300\uD55C \uACE0\uC9C0 : \uC815\uBCF4\uC8FC\uCCB4\uB294 \uAC1C\uC778\uC815\uBCF4 \uC81C\uACF5 \uB3D9\uC758\uB97C \uAC70\uBD80\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098, \uC774 \uACBD\uC6B0 \uC0C1\uD488 \uBC0F \uC11C\uBE44\uC2A4 \uC608\uC57D\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)));
};

__signature__(TOS, "useState{[isCollectionFold, setIsCollectionFold](true)}\nuseState{[isOfferFold, setIsOfferFold](true)}");

TOS.propTypes = {
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
var _default = TOS;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TOS, "TOS", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TOS/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TOS/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "OjBz":
/*!******************************************!*\
  !*** ./src/jsx/TicketInfoList/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "FeZ6");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TicketInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TicketInfo */ "KTKg");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var TicketInfoList = function TicketInfoList(props) {
  var infos = props.infos,
      actions = props.actions;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "TicketInfoList"
  }, infos.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      info: value,
      actions: actions
    });
  }));
};

TicketInfoList.propTypes = {
  infos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
var _default = TicketInfoList;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TicketInfoList, "TicketInfoList", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInfoList/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInfoList/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "PBkl":
/*!***************************************!*\
  !*** ./src/jsx/ReserveDesc/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "pDfU");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var ReserveDesc = function ReserveDesc(props) {
  var description = props.description,
      place = props.place,
      startDate = props.startDate,
      endDate = props.endDate,
      productPrices = props.productPrices;

  var priceText = function priceText() {
    var priceList = productPrices.map(function (value) {
      return "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["priceTypeMapper"])(value.priceTypeName), " ").concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(value.price), "\uC6D0");
    });
    return priceList.join(' / ');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ReserveDesc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "descriptionText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, place, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "".concat(startDate, " ~ ").concat(endDate))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chargeText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uC694\uAE08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, priceText())));
};

ReserveDesc.defaultProps = {
  description: '',
  place: '',
  productPrices: [],
  startDate: '',
  endDate: ''
};
ReserveDesc.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }))
};
var _default = ReserveDesc;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReserveDesc, "ReserveDesc", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveDesc/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveDesc/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "PN5m":
/*!**********************************!*\
  !*** ./src/jsx/Header/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "ZbdK");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "spr_bi txt_logo"
  })));
};

var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Header, "Header", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Header/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Header/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "Qm/K":
/*!**********************************!*\
  !*** ./src/jsx/Review/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "RAok":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! exports provided: transformMoneyUnit, priceTypeMapper, validImageType, resizeEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMoneyUnit", function() { return transformMoneyUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceTypeMapper", function() { return priceTypeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validImageType", function() { return validImageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeEnd", function() { return resizeEnd; });
const transformMoneyUnit = (num) => {
  let transformed = '';
  num = num.toString();
  const numLen = num.length;
  for (let i = 1; i <= numLen; i++) {
    if (i > 3 && i % 3 === 1) {
      transformed = `,${transformed}`;
    }
    transformed = num.charAt(numLen - i) + transformed;
  }
  return transformed;
};

const priceTypeMapper = (value) => {
  const priceType = {
    A: '성인',
    Y: '청소년',
    B: '유아',
    S: '셋트',
    D: '장애인',
    C: '지역주민',
    E: '어얼리버드',
    V: 'VIP',
    R: 'R석',
  };
  return priceType[value];
};

const validImageType = (type) => {
  const result = ['image/jpeg', 'image/png', 'image/jpg'].indexOf(type) > -1;
  return result;
};

const resizeEnd = (func) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
};




/***/ }),

/***/ "RFh2":
/*!********************************************!*\
  !*** ./src/jsx/ReservationCount/style.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "SRX6":
/*!***************************************!*\
  !*** ./src/jsx/ReserveForm/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cookie */ "iVi/");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "qY7+");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _TicketInputList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TicketInputList */ "eUXT");
/* harmony import */ var _ReserverInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ReserverInfo */ "LB1S");
/* harmony import */ var _TOS__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../TOS */ "OELu");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












var initialState = {
  tickets: [],
  name: '',
  telephone: '',
  email: '',
  isVerifiedName: false,
  isVerifiedTel: false,
  isVerifiedEmail: false,
  isTOSChecked: false,
  submit: false
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'INIT_TICKET':
      {
        var tickets = Array(action.length).fill(0);
        return _objectSpread({}, state, {
          tickets: tickets
        });
      }

    case 'DECREMENT':
      {
        var modified = _objectSpread({}, state);

        if (modified.tickets[action.where] > 0) {
          modified.tickets[action.where] -= 1;
        }

        return modified;
      }

    case 'INCREMENT':
      {
        var _modified = _objectSpread({}, state);

        _modified.tickets[action.where] += 1;
        return _modified;
      }

    case 'CHANGE_NAME':
      return _objectSpread({}, state, {
        name: action.value
      });

    case 'CHANGE_TEL':
      return _objectSpread({}, state, {
        telephone: action.value
      });

    case 'CHANGE_EMAIL':
      return _objectSpread({}, state, {
        email: action.value
      });

    case 'CHANGE_TOS':
      return _objectSpread({}, state, {
        isTOSChecked: action.checked
      });

    case 'VERIFY_NAME':
      {
        var name = state.name;

        if (name.length === 0) {
          return _objectSpread({}, state, {
            isVerifiedName: false
          });
        }

        if (/\s/.test(name)) {
          return _objectSpread({}, state, {
            isVerifiedName: false
          });
        }

        return _objectSpread({}, state, {
          isVerifiedName: true
        });
      }

    case 'VERIFY_TEL':
      {
        var telephone = state.telephone;

        if (telephone.length === 0) {
          return _objectSpread({}, state, {
            isVerifiedTel: false
          });
        }

        var telRe = /0\d{2}-[1-9]\d{2,3}-\d{4}/;

        if (telRe.test(telephone)) {
          return _objectSpread({}, state, {
            isVerifiedTel: true
          });
        }

        return _objectSpread({}, state, {
          isVerifiedTel: false
        });
      }

    case 'VERIFY_EMAIL':
      {
        var email = state.email;

        if (email.length === 0) {
          return _objectSpread({}, state, {
            isVerifiedEmail: false
          });
        }

        var emailRe = /[a-zA-Z]\w{2,}@[a-zA-Z]{3,}\.[a-zA-Z]{2,}/;

        if (emailRe.test(email)) {
          return _objectSpread({}, state, {
            isVerifiedEmail: true
          });
        }

        return _objectSpread({}, state, {
          isVerifiedEmail: false
        });
      }

    case 'VERIFY_SUBMIT':
      {
        var _tickets = state.tickets,
            isVerifiedName = state.isVerifiedName,
            isVerifiedTel = state.isVerifiedTel,
            isVerifiedEmail = state.isVerifiedEmail,
            isTOSChecked = state.isTOSChecked;

        if (_tickets.some(function (value) {
          return value > 0;
        }) && isVerifiedName && isVerifiedTel && isVerifiedEmail && isTOSChecked) {
          return _objectSpread({}, state, {
            submit: true
          });
        }

        return _objectSpread({}, state, {
          submit: false
        });
      }

    default:
      throw new Error('');
  }
};

var ReserveForm = function ReserveForm(props) {
  var productPrices = props.productPrices,
      displayInfoId = props.displayInfoId,
      productId = props.productId,
      reservationDate = props.reservationDate;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(reducer, initialState),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_10__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var parsed = cookie__WEBPACK_IMPORTED_MODULE_8___default.a.parse(document.cookie);
    dispatch({
      type: 'CHANGE_NAME',
      value: parsed.reservationName || ''
    });
    dispatch({
      type: 'VERIFY_NAME'
    });
    dispatch({
      type: 'CHANGE_TEL',
      value: parsed.reservationTel || ''
    });
    dispatch({
      type: 'VERIFY_TEL'
    });
    dispatch({
      type: 'CHANGE_EMAIL',
      value: parsed.reservationEmail || ''
    });
    dispatch({
      type: 'VERIFY_EMAIL'
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    dispatch({
      type: 'INIT_TICKET',
      length: productPrices.length
    });
  }, [productPrices]);

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var reservationInfo, index, len, _ref2, status, _error$response, data, _status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              reservationInfo = {
                displayInfoId: displayInfoId,
                productId: productId,
                prices: [],
                reservationEmail: state.email,
                reservationName: state.name,
                reservationTelephone: state.telephone,
                reservationYearMonthDay: reservationDate
              };

              for (index = 0, len = productPrices.length; index < len; index++) {
                reservationInfo.prices.push({
                  count: state.tickets[index],
                  productPriceId: productPrices[index].productPriceID
                });
              }

              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/reservations', reservationInfo);

            case 5:
              _ref2 = _context.sent;
              status = _ref2.status;

              if (status === 201) {
                alertModal('예매가 성공적으로 승인되었습니다', function () {
                  history.push("/detail/".concat(displayInfoId));
                });
              }

              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              _error$response = _context.t0.response, data = _error$response.data, _status = _error$response.status;

              if (_status === 400) {
                alertModal(data);
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var confirmSubmit = function confirmSubmit(event) {
    event.preventDefault();

    if (state.submit) {
      confirmModal('예약하시겠습니까?', handleSubmit);
    } else {
      alertModal('예약 양식이 충족되지 않았습니다');
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "ReserveForm"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TicketInputList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    productPrices: productPrices,
    tickets: state.tickets,
    dispatch: dispatch
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReserverInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: state.name,
    telephone: state.telephone,
    email: state.email,
    reservationDate: reservationDate.split(' ')[0],
    totalTicket: state.tickets.reduce(function (accum, current) {
      return accum + current;
    }, 0),
    dispatch: dispatch,
    isVerifiedName: state.isVerifiedName,
    isVerifiedTel: state.isVerifiedTel,
    isVerifiedEmail: state.isVerifiedEmail
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TOS__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isChecked: state.isTOSChecked,
    dispatch: dispatch
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_14__["default"], {
    notes: [{
      style: {
        backgroundColor: state.submit ? '#1EC900' : '#D1D1D1',
        fontSize: '16px',
        fontFamily: 'Nanum Gothic Bold',
        color: '#fff',
        transition: 'background-color 1s'
      },
      click: confirmSubmit,
      children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "spr_book ico_naver_s",
        style: {
          verticalAlign: 'middle'
        }
      }), ' 예약하기')
    }],
    padding: [0, 10, 10, 10]
  })));
};

__signature__(ReserveForm, "useReducer{[state, dispatch](initialState)}\nuseContext{{ alertModal, confirmModal }}\nuseHistory{history}\nuseEffect{}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"]];
});

ReserveForm.defaultProps = {
  productPrices: [],
  productId: 0,
  reservationDate: ''
};
ReserveForm.propTypes = {
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  productId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
var _default = ReserveForm;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveForm/index.jsx");
  reactHotLoader.register(reducer, "reducer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveForm/index.jsx");
  reactHotLoader.register(ReserveForm, "ReserveForm", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveForm/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReserveForm/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "SjEC":
/*!*********************************!*\
  !*** ./src/jsx/Modal/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "T4RL":
/*!*************************************!*\
  !*** ./src/jsx/SubNavBar/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "Ty5D");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "M2rr");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var SubNavBar = function SubNavBar(props) {
  var name = props.name,
      style = props.style;
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SubNavBar",
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backward"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-backward1",
    onClick: function onClick() {
      history.goBack();
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "titleName"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, name || '행사 이름')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "empty"
  }));
};

__signature__(SubNavBar, "useHistory{history}", function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

SubNavBar.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
var _default = SubNavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubNavBar, "SubNavBar", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/SubNavBar/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/SubNavBar/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "TA1R":
/*!***********************************!*\
  !*** ./src/jsx/TabView/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "F3ks");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var TabView = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var views = props.views,
      style = props.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    ref: ref,
    className: "TabView"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: style
  }, views.map(function (view, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, view);
  })));
});
TabView.propTypes = {
  views: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node).isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired
};
var _default = TabView;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabView, "TabView", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TabView/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TabView/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "Ysws":
/*!***************************************!*\
  !*** ./src/jsx/ImageSlider/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ZbdK":
/*!**********************************!*\
  !*** ./src/jsx/Header/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a7rn":
/*!****************************************!*\
  !*** ./src/jsx/ReserverInfo/style.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aYjU":
/*!*****************************************!*\
  !*** ./src/jsx/ReviewSummary/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b/iz":
/*!*******************************************!*\
  !*** ./src/jsx/ReviewContainer/style.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bUiE":
/*!**********************************!*\
  !*** ./src/jsx/Review/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "Qm/K");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Review = function Review(props) {
  var review = props.review,
      imageSrc = props.imageSrc,
      score = props.score,
      email = props.email,
      date = props.date,
      editComment = props.editComment,
      confirmDelete = props.confirmDelete;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      imgStyle = _useState2[0],
      setImgStyle = _useState2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_3__["ModalContext"]),
      imageModal = _useContext.imageModal;

  var reviewRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var handleClick = function handleClick() {
    imageModal(imageSrc);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (imageSrc) {
      var paragraph = reviewRef.current.querySelector('.top .left p');
      var topHeight = paragraph.offsetHeight;
      setImgStyle({
        display: 'inline',
        height: "".concat(topHeight, "px")
      });
    }
  }, [imageSrc]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "Review",
    ref: reviewRef
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, review)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right"
  }, imageSrc ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: imageSrc,
    alt: "reviewImage",
    style: imgStyle,
    onClick: handleClick
  }) : '')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bottom"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "score"
  }, score), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "email"
  }, "".concat(email.slice(0, 4), "****")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "visitDate"
  }, "".concat(date.slice(0, 10), " \uBC29\uBB38"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "edit",
    onClick: editComment
  }, "\uC218\uC815"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "delete",
    onClick: confirmDelete
  }, "\uC0AD\uC81C"))));
};

__signature__(Review, "useState{[imgStyle, setImgStyle]({})}\nuseContext{{ imageModal }}\nuseRef{reviewRef}\nuseEffect{}");

Review.propTypes = {
  review: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  score: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  editComment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  confirmDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
var _default = Review;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Review, "Review", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Review/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Review/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "c3dY":
/*!*************************************!*\
  !*** ./src/jsx/EventInfo/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e91b":
/*!************************************************!*\
  !*** ./src/jsx/WriteReviewContainer/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../NavBar */ "twHJ");
/* harmony import */ var _ReviewEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ReviewEdit */ "nx9d");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Footer */ "8ykL");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var WriteReviewContainer = function WriteReviewContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      info = _useState2[0],
      setInfo = _useState2[1];

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])(),
      productId = _useParams.productId;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_6__["ModalContext"]),
      alertModal = _useContext.alertModal;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, data, status, _error$response, _status, _data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/auth/writereview/".concat(productId));

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                status = _ref2.status;

                if (status === 200) {
                  setInfo(data);
                }

                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                _error$response = _context.t0.response, _status = _error$response.status, _data = _error$response.data;

                if (_status === 400) {
                  if (_data === '로그인 하지 않았습니다') {
                    alertModal(_data, function () {
                      history.push('/');
                    });
                  } else if (_data === '예약이 존재하지 않습니다') {
                    alertModal(_data, function () {
                      history.push('/myreservation');
                    });
                  } else if (_data === '예약 작성기간이 아닙니다') {
                    alertModal(_data, function () {
                      history.push('/myreservation');
                    });
                  }
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (info.description) {
      document.title = "".concat(info.description, " \uB9AC\uBDF0 \uB0A8\uAE30\uAE30");
    }
  }, [info]);
  return Object.keys(info).length ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "WriteReviewContainer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: info.description
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ReviewEdit__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: info.reservationInfoId
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null)) : '';
};

__signature__(WriteReviewContainer, "useState{[info, setInfo]({})}\nuseParams{{ productId }}\nuseHistory{history}\nuseContext{{ alertModal }}\nuseEffect{}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];
});

var _default = WriteReviewContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WriteReviewContainer, "WriteReviewContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/WriteReviewContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/WriteReviewContainer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "eUXT":
/*!*******************************************!*\
  !*** ./src/jsx/TicketInputList/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "5vvM");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TicketInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TicketInput */ "pjbY");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var TicketInputList = function TicketInputList(props) {
  var productPrices = props.productPrices,
      tickets = props.tickets,
      dispatch = props.dispatch;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "TicketInputList"
  }, productPrices.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      productPrice: value,
      count: tickets[index],
      dispatch: dispatch,
      where: index
    });
  }));
};

TicketInputList.propTypes = {
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    discountRate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,
  tickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number).isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = TicketInputList;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TicketInputList, "TicketInputList", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInputList/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInputList/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "eus6":
/*!*********************************!*\
  !*** ./src/jsx/TabUI/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "Jj3P");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var TabUI = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var labels = props.labels,
      selected = props.selected,
      handleClick = props.handleClick,
      indicatorStyle = props.indicatorStyle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "TabUI"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    ref: ref
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "indicator",
    style: indicatorStyle
  }), labels.map(function (label, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      className: index === selected ? 'active' : '',
      onClick: handleClick(index)
    }, label);
  })));
});
TabUI.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired).isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  indicatorStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
};
var _default = TabUI;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabUI, "TabUI", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TabUI/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TabUI/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "f5hE":
/*!***************************************!*\
  !*** ./src/jsx/ButtonBunch/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "h/In":
/*!*****************************************!*\
  !*** ./src/jsx/TabController/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TabUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TabUI */ "eus6");
/* harmony import */ var _TabView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TabView */ "TA1R");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var TabController = function TabController(props) {
  var labels = props.labels,
      views = props.views,
      alarm = props.alarm,
      top = props.top,
      bottom = props.bottom; // top,bottom은 정적으로 보여줄 뷰

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    left: 0,
    width: 0
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      indicatorStyle = _useState4[0],
      setIndicatorStyle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    transitionDuration: '0.5s'
  }),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      viewStyle = _useState6[0],
      setViewStyle = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      viewHeight = _useState8[0],
      setViewHeight = _useState8[1];

  var uiRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var viewRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var selectedRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(selected);
  selectedRef.current = selected;
  var viewHeightRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(viewHeight);
  viewHeightRef.current = viewHeight;

  var handleClick = function handleClick(index) {
    if (alarm) {
      return function () {
        alarm(index);
        setSelected(index);
      };
    }

    return function () {
      setSelected(index);
    };
  };

  var reviseIndicator = function reviseIndicator() {
    var selectedLi = uiRef.current.children[selectedRef.current + 1];
    setIndicatorStyle({
      left: selectedLi.offsetLeft,
      width: selectedLi.offsetWidth
    });
  };

  var reviseViewWidth = function reviseViewWidth() {
    var width = viewRef.current.offsetWidth;
    setViewStyle(_objectSpread({}, viewStyle, {
      transitionDuration: '0s',
      transform: "translate(-".concat(width * selectedRef.current, "px)")
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('resize', reviseIndicator);
    window.addEventListener('resize', reviseViewWidth);
    var id = setInterval(function () {
      var viewBody = viewRef.current.children[0].children[selectedRef.current].children[0]; // section -> ul -> li -> div

      var height = viewBody && viewBody.offsetHeight;

      if (viewHeight.current !== height) {
        setViewHeight(height);
      }
    }, 100);
    return function () {
      window.removeEventListener('resize', reviseIndicator);
      window.removeEventListener('resize', reviseViewWidth);
      clearInterval(id);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(reviseIndicator, [selected]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var width = viewRef.current.offsetWidth;
    setViewStyle(_objectSpread({}, viewStyle, {
      transitionDuration: '0.5s',
      transform: "translate(-".concat(width * selected, "px)")
    }));
  }, [selected]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "TabController"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TabUI__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: uiRef,
    labels: labels,
    selected: selected,
    handleClick: handleClick,
    indicatorStyle: indicatorStyle
  }), top, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TabView__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: viewRef,
    views: views,
    style: _objectSpread({}, viewStyle, {
      height: viewHeight
    })
  }), bottom);
};

__signature__(TabController, "useState{[selected, setSelected](0)}\nuseState{[indicatorStyle, setIndicatorStyle]({\r\n    left: 0,\r\n    width: 0,\r\n  })}\nuseState{[viewStyle, setViewStyle]({\r\n    transitionDuration: '0.5s',\r\n  })}\nuseState{[viewHeight, setViewHeight](0)}\nuseRef{uiRef}\nuseRef{viewRef}\nuseRef{selectedRef}\nuseRef{viewHeightRef}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

TabController.defaultProps = {
  alarm: false,
  top: '',
  bottom: '',
  views: []
};
TabController.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired).isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node),
  alarm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]),
  top: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
}; // 알람이 있다면 상위 컴포넌트에 어디에 눌렀는지 변화를 알려줘 동적 뷰변화를 가능케함

var _default = TabController;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TabController, "TabController", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TabController/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TabController/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "iATR":
/*!*************************************!*\
  !*** ./src/jsx/LoginForm/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "icCQ":
/*!************************************!*\
  !*** ./src/jsx/MainView/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "iiGG":
/*!**********************************!*\
  !*** ./src/jsx/Footer/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "iqGm":
/*!***************************************!*\
  !*** ./src/jsx/ButtonBunch/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "f5hE");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "5A9N");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var applyStyle = function applyStyle(style) {
  if (typeof style === 'number') {
    return "".concat(style, "px");
  }

  if (toString.call(style) === '[object Array]' && style.length === 1) {
    var _style = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(style, 1),
        all = _style[0];

    return "".concat(all, "px");
  }

  if (toString.call(style) === '[object Array]' && style.length === 2) {
    var _style2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(style, 2),
        vertical = _style2[0],
        horizontal = _style2[1];

    return "".concat(vertical, "px ").concat(horizontal, "px");
  }

  if (toString.call(style) === '[object Array]' && style.length === 4) {
    var _style3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(style, 4),
        top = _style3[0],
        right = _style3[1],
        down = _style3[2],
        left = _style3[3];

    return "".concat(top, "px ").concat(right, "px ").concat(down, "px ").concat(left, "px");
  }

  return '0';
};

var ButtonBunch = function ButtonBunch(props) {
  var notes = props.notes,
      margin = props.margin,
      padding = props.padding;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ButtonBunch",
    style: {
      margin: applyStyle(margin),
      padding: applyStyle(padding)
    }
  }, notes.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      style: value.style,
      click: value.click
    }, value.children);
  }));
};

ButtonBunch.defaultProps = {
  margin: 0,
  padding: 0
};
ButtonBunch.propTypes = {
  notes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    fontColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    click: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
  })).isRequired,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array]),
  padding: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array])
};
var _default = ButtonBunch;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(applyStyle, "applyStyle", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ButtonBunch/index.jsx");
  reactHotLoader.register(ButtonBunch, "ButtonBunch", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ButtonBunch/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ButtonBunch/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "j70U":
/*!********************************************!*\
  !*** ./src/jsx/ProductContainer/style.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "juvM":
/*!**************************************!*\
  !*** ./src/jsx/ImageTitle/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kKml":
/*!**************************************!*\
  !*** ./src/jsx/ProductBox/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "m+6n":
/*!*****************************************!*\
  !*** ./src/jsx/MainContainer/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "n2J4":
/*!**************************************!*\
  !*** ./src/jsx/TicketInfo/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "nx9d":
/*!**************************************!*\
  !*** ./src/jsx/ReviewEdit/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "rYgQ");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var ReviewEdit = function ReviewEdit(props) {
  var id = props.id,
      thumbnailWidth = props.thumbnailWidth,
      exScore = props.exScore,
      exComment = props.exComment,
      exImageSrc = props.exImageSrc,
      isPost = props.isPost,
      confirmEdit = props.confirmEdit,
      confirmCancel = props.confirmCancel;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(exScore),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      score = _useState2[0],
      setScore = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(exComment),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      comment = _useState4[0],
      setComment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(exImageSrc),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      imageSrc = _useState6[0],
      setImageSrc = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      thumbnailStyle = _useState8[0],
      setThumbnailStyle = _useState8[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_10__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var form = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (imageSrc) {
      var imageMeasurement = new Image();
      var revisionSrc = exImageSrc === imageSrc ? "/".concat(imageSrc) : imageSrc;
      imageMeasurement.src = revisionSrc;

      imageMeasurement.onload = function () {
        var ratio = this.height / this.width;
        setThumbnailStyle({
          display: 'flex',
          width: "".concat(thumbnailWidth, "px"),
          height: "".concat(thumbnailWidth * ratio, "px"),
          backgroundImage: "url(".concat(revisionSrc, ")")
        });
      };
    } else {
      setThumbnailStyle({
        display: 'none',
        backgroundImage: ''
      });
    }
  }, [imageSrc]);

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var formObj, _ref2, status, _error$response, data, _status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(score <= 0 || score > 5)) {
                _context.next = 4;
                break;
              }

              alertModal('별점 개수가 올바르지 않습니다');
              return _context.abrupt("return", false);

            case 4:
              if (!(comment.length < 5 || comment.length > 400)) {
                _context.next = 7;
                break;
              }

              alertModal('리뷰 글자수가 맞지 않습니다.');
              return _context.abrupt("return", false);

            case 7:
              if (!(imageRef.current.files.length && !Object(_js_common__WEBPACK_IMPORTED_MODULE_8__["validImageType"])(imageRef.current.files[0].type))) {
                _context.next = 10;
                break;
              }

              alertModal('이미지는 jpg,jpeg,png 파일만 가능합니다.');
              return _context.abrupt("return", false);

            case 10:
              formObj = new FormData(form.current);

              if (!isPost && exImageSrc && (!imageSrc || exImageSrc !== imageSrc)) {
                formObj.append('exImageSrc', exImageSrc);
              }

              _context.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: isPost ? 'POST' : 'PUT',
                url: "/api/reservations/".concat(id, "/comments"),
                data: formObj
              });

            case 14:
              _ref2 = _context.sent;
              status = _ref2.status;

              if (!(status === 201)) {
                _context.next = 23;
                break;
              }

              if (!isPost) {
                _context.next = 21;
                break;
              }

              alertModal('리뷰가 등록되었습니다', function () {
                history.push('/myreservation');
              });
              _context.next = 23;
              break;

            case 21:
              alertModal('리뷰가 수정되었습니다');
              return _context.abrupt("return", true);

            case 23:
              _context.next = 31;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](0);
              _error$response = _context.t0.response, data = _error$response.data, _status = _error$response.status;

              if (!(_status === 400)) {
                _context.next = 31;
                break;
              }

              alertModal(data);
              return _context.abrupt("return", false);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 25]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var modifyRating = function modifyRating(value) {
    return function () {
      setScore(value);
    };
  };

  var uploadImage = function uploadImage(_ref3) {
    var files = _ref3.target.files;
    var tempImage = files[0];

    if (!Object(_js_common__WEBPACK_IMPORTED_MODULE_8__["validImageType"])(tempImage.type)) {
      alertModal('이미지는 jpg,jpeg,png 파일만 가능합니다');
      imageRef.current.value = '';
      setImageSrc('');
      return;
    }

    setImageSrc(window.URL.createObjectURL(tempImage));
  };

  var cancelImageUpload = function cancelImageUpload() {
    imageRef.current.value = '';
    setImageSrc(''); // newImage= -1;
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "ReviewEdit"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    encType: "multipart/form-data",
    name: "reviewForm",
    ref: form,
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    className: "ratingSection"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "\uBCC4\uC810\uACFC \uC774\uC6A9 \uACBD\uD5D8\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ratingStar"
  }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(1, 6).map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      key: value,
      className: "fn fn-star2 ".concat(score >= value ? 'getStar' : 'notGetStar'),
      onClick: modifyRating(value)
    });
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    name: "score",
    value: score,
    readOnly: true,
    style: {
      color: score > 0 ? '#000' : '#ddd'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    className: "writeComment"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", {
    name: "comment",
    rows: "15",
    minLength: "5",
    maxLength: "400",
    value: comment,
    onChange: function onChange(_ref4) {
      var value = _ref4.target.value;
      setComment(value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    className: "postImage"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "imageLetterCount"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "file",
    name: "image",
    id: "imageUpload",
    ref: imageRef,
    onChange: uploadImage
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: "imageUpload"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "fn fn-image1"
  }), ' 사진 추가'), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "commentCount"
  }, "".concat(comment.length, "/400 (\uCD5C\uC18C 5\uC790 \uC774\uC0C1)"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "thumbnailImage",
    style: thumbnailStyle
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "fn fn-cross1",
    onClick: cancelImageUpload
  }))), isPost ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_11__["default"], {
    notes: [{
      style: {
        backgroundColor: '#1EC800',
        color: '#fff',
        fontSize: '17px',
        fontFamily: 'Nanum Gothic Bold'
      },
      click: function click() {
        confirmModal('리뷰를 등록 하시겠습니까?', handleSubmit);
      },
      children: '리뷰 등록'
    }],
    padding: 10
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_11__["default"], {
    notes: [{
      style: {
        backgroundColor: '#1EC800',
        color: '#fff',
        fontSize: '17px',
        fontFamily: 'Nanum Gothic Bold'
      },
      click: function click() {
        confirmEdit(handleSubmit, score, comment, imageSrc);
      },
      children: '수정'
    }, {
      style: {
        backgroundColor: '#D8DBDE',
        fontSize: '17px',
        fontFamily: 'Nanum Gothic Bold'
      },
      click: function click() {
        confirmCancel();
      },
      children: '취소'
    }]
  })));
};

__signature__(ReviewEdit, "useState{[score, setScore](exScore)}\nuseState{[comment, setComment](exComment)}\nuseState{[imageSrc, setImageSrc](exImageSrc)}\nuseState{[thumbnailStyle, setThumbnailStyle]({})}\nuseContext{{ alertModal, confirmModal }}\nuseRef{form}\nuseRef{imageRef}\nuseHistory{history}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"]];
});

ReviewEdit.defaultProps = {
  thumbnailWidth: 200,
  exScore: 0,
  exComment: '',
  exImageSrc: '',
  isPost: true
};
ReviewEdit.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  thumbnailWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  exScore: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  exComment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  exImageSrc: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  isPost: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  confirmEdit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  confirmCancel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
var _default = ReviewEdit;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReviewEdit, "ReviewEdit", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewEdit/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewEdit/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "o3aN":
/*!**********************************!*\
  !*** ./src/jsx/Ticket/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TicketHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TicketHead */ "OAMj");
/* harmony import */ var _TicketInfoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TicketInfoList */ "OjBz");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Ticket = function Ticket(props) {
  var infos = props.infos,
      text = props.text,
      actions = props.actions,
      isGreen = props.isGreen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "Ticket"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: text,
    isGreen: isGreen
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketInfoList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    infos: infos,
    actions: actions
  }));
};

Ticket.defaultProps = {
  isGreen: false,
  actions: []
};
Ticket.propTypes = {
  infos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  isGreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
var _default = Ticket;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Ticket, "Ticket", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Ticket/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Ticket/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "o4c6":
/*!***************************************!*\
  !*** ./src/jsx/ProductDesc/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "A7Qy");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/* eslint-disable prettier/prettier */






var ProductDesc = function ProductDesc(props) {
  var text = props.text,
      limit = props.limit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isFold = _useState2[0],
      setIsFold = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    simple: '',
    detail: ''
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      textObj = _useState4[0],
      setTextObj = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var trimmedText = text.trim();
    trimmedText = trimmedText.replace('\n', '');

    if (trimmedText.length > limit) {
      var textSimple = trimmedText.slice(0, limit);
      var textDetail = trimmedText.slice(limit);
      setTextObj({
        simple: textSimple,
        detail: textDetail
      });
    } else {
      setTextObj({
        simple: trimmedText,
        detail: ''
      });
    }
  }, [text]);

  var showMoreDesc = function showMoreDesc() {
    if (isFold) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.ProductDesc .moreDesc').slideDown();
      setIsFold(false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.ProductDesc .moreDesc').slideUp();
      setIsFold(true);
    }
  };

  var openText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, '펼쳐보기 ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fn fn-down2"
  }));
  var foldText = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, '접기 ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fn fn-up2"
  }));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "ProductDesc"
  }, textObj.detail ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, textObj.simple, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "dots",
    style: {
      display: isFold ? 'inline' : 'none'
    }
  }, "..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "moreDesc"
  }, textObj.detail)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, textObj.simple), textObj.detail ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    notes: [{
      style: {
        backgroundColor: '#f3f5f6',
        borderLeft: 'none',
        borderRight: 'none'
      },
      click: showMoreDesc,
      children: isFold ? openText : foldText
    }]
  }) : '');
};

__signature__(ProductDesc, "useState{[isFold, setIsFold](true)}\nuseState{[textObj, setTextObj]({ simple: '', detail: '' })}\nuseEffect{}");

ProductDesc.defaultProps = {
  text: '',
  limit: 100
};
ProductDesc.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
var _default = ProductDesc;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductDesc, "ProductDesc", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductDesc/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductDesc/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "pDfU":
/*!***************************************!*\
  !*** ./src/jsx/ReserveDesc/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "pjbY":
/*!***************************************!*\
  !*** ./src/jsx/TicketInput/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "zW+s");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var TicketInput = function TicketInput(props) {
  var _props$productPrice = props.productPrice,
      priceTypeName = _props$productPrice.priceTypeName,
      price = _props$productPrice.price,
      discountRate = _props$productPrice.discountRate,
      count = props.count,
      dispatch = props.dispatch,
      where = props.where;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TicketInput"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["priceTypeMapper"])(priceTypeName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(price), " \uC6D0")), function () {
    if (Number(discountRate) > Number.EPSILON) {
      var originalCost = Math.round(price / (1 - Number(discountRate) / 100) / 100) * 100;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(originalCost), "\uC6D0 (").concat(Math.round(Number(discountRate)), "% \uD560\uC778\uAC00)"));
    }
  }()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "adjustTicket"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "spr_book2 ico_minus3 ".concat(count ? '' : 'disabled'),
    type: "button",
    onClick: function onClick() {
      dispatch({
        type: 'DECREMENT',
        where: where
      });
      dispatch({
        type: 'VERIFY_SUBMIT'
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "count ".concat(count ? '' : 'disabled')
  }, count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "spr_book2 ico_plus3",
    type: "button",
    onClick: function onClick() {
      dispatch({
        type: 'INCREMENT',
        where: where
      });
      dispatch({
        type: 'VERIFY_SUBMIT'
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(price * count), " \uC6D0"))));
};

TicketInput.defaultProps = {
  count: 0
};
TicketInput.propTypes = {
  productPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    discountRate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  where: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
var _default = TicketInput;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TicketInput, "TicketInput", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInput/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/TicketInput/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "qY7+":
/*!***************************************!*\
  !*** ./src/jsx/ReserveForm/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "rYgQ":
/*!**************************************!*\
  !*** ./src/jsx/ReviewEdit/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "sdMq":
/*!******************************************!*\
  !*** ./src/jsx/PromotionImage/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ImageSlider */ "134M");
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/common */ "RAok");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





 // 스크롤 시간(transitionTime) default 1초  위에서 물려받는것
// 상태로 사용하는 스크롤 시간 (transitionDuration)
// 화면 전환 간격 (timeInterval) 2초

var PromotionImage = function PromotionImage(props) {
  // 갑자기 degree가 계속 증가하는 버그가 있음
  var timeInterval = props.timeInterval,
      transitionTime = props.transitionTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      degree = _useState2[0],
      setDegree = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      scrollable = _useState4[0],
      setScrollable = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(transitionTime),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      transitionDuration = _useState6[0],
      setTransitionDuration = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      images = _useState8[0],
      setImages = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
      imageWidth = _useState10[0],
      setImageWidth = _useState10[1];

  var degreeRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(degree);
  var scrollableRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(scrollable);
  var imageList = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  degreeRef.current = degree;
  scrollableRef.current = scrollable;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchImages =
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, items;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/promotions');

              case 3:
                _ref2 = _context.sent;
                items = _ref2.data.items;
                items.push(items[0]); // 처음과 마지막을 동일한 이미지를 두어서 스크롤을 매끄럽게 함

                setImages(items);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function fetchImages() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchImages();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var autoScroll = setInterval(function () {
      if (scrollableRef.current) {
        if (degreeRef.current === 0) {
          setTransitionDuration(transitionTime);
        }

        setDegree(function (prevDegree) {
          return prevDegree + 1;
        });
      }
    }, timeInterval * 1000);
    return function () {
      return clearInterval(autoScroll);
    };
  }, [images]);

  var handleTransitionEnd = function handleTransitionEnd() {
    if (degree >= images.length - 1) {
      setDegree(0);
      setTransitionDuration(0);
    }
  };

  var handleMouseOver = function handleMouseOver() {
    setScrollable(false);
  };

  var handleMouseOut = function handleMouseOut() {
    setScrollable(true);
  };

  var doingResize = function doingResize() {
    setScrollable(false);
    setImageWidth(imageList.current.firstElementChild.clientWidth);
    setTransitionDuration(0);
  };

  var doneResize;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('resize', doingResize);
    window.addEventListener('resize', function () {
      doneResize = Object(_js_common__WEBPACK_IMPORTED_MODULE_7__["resizeEnd"])(function () {
        setScrollable(true);
        setImageWidth(imageList.current.firstElementChild.clientWidth);
        setTransitionDuration(transitionTime);
      });
      return doneResize;
    }());
    return function () {
      window.removeEventListener('resize', doingResize);
      window.removeEventListener('resize', doneResize);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setImageWidth(imageList.current.firstElementChild && imageList.current.firstElementChild.clientWidth || 0);
  }, [images]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ImageSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: imageList,
    degree: degree,
    transitionTime: transitionDuration,
    images: images,
    imageWidth: imageWidth,
    isPromotion: true,
    handleTransitionEnd: handleTransitionEnd,
    handleMouseOver: handleMouseOver,
    handleMouseOut: handleMouseOut
  });
};

__signature__(PromotionImage, "useState{[degree, setDegree](0)}\nuseState{[scrollable, setScrollable](true)}\nuseState{[transitionDuration, setTransitionDuration](transitionTime)}\nuseState{[images, setImages]([])}\nuseState{[imageWidth, setImageWidth](0)}\nuseRef{degreeRef}\nuseRef{scrollableRef}\nuseRef{imageList}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

PromotionImage.defaultProps = {
  transitionTime: 1,
  timeInterval: 2
};
PromotionImage.propTypes = {
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  timeInterval: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};
var _default = PromotionImage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PromotionImage, "PromotionImage", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/PromotionImage/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/PromotionImage/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "twHJ":
/*!**********************************!*\
  !*** ./src/jsx/NavBar/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainNavBar */ "3LJ/");
/* harmony import */ var _SubNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SubNavBar */ "T4RL");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var NavBar = function NavBar(props) {
  var name = props.name,
      isTransparent = props.isTransparent,
      isLogoutable = props.isLogoutable,
      style = props.style;
  return name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubNavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name,
    style: style
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainNavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isTransparent: isTransparent,
    isLogoutable: isLogoutable,
    style: style
  });
};

NavBar.defaultProps = {
  name: '',
  isTransparent: false,
  isLogoutable: false,
  style: {}
};
NavBar.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isTransparent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isLogoutable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var _default = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavBar, "NavBar", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/NavBar/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/NavBar/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "tyuF":
/*!********************************************!*\
  !*** ./src/jsx/ProductContainer/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "j70U");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var ProductContainer = function ProductContainer(props) {
  var className = props.className,
      children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ProductContainer ".concat(className)
  }, children);
};

ProductContainer.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired).isRequired
};
var _default = ProductContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductContainer, "ProductContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ProductContainer/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "uiVC":
/*!*********************************!*\
  !*** ./src/jsx/Modal/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "SjEC");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Modal = function Modal(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Modal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modalContent"
  }, children));
};

Modal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
var _default = Modal;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Modal, "Modal", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Modal/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/Modal/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "voRo":
/*!*************************************!*\
  !*** ./src/jsx/MainImage/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "6olk");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var MainImage = function MainImage(props) {
  var src = props.src,
      alt = props.alt;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "MainImage",
    src: src,
    alt: alt
  });
};

MainImage.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
var _default = MainImage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MainImage, "MainImage", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainImage/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/MainImage/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "ybHy":
/*!*****************************************!*\
  !*** ./src/jsx/ReviewSummary/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "aYjU");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var ReviewSummary = function ReviewSummary(props) {
  var averageScore = props.averageScore,
      reviewCount = props.reviewCount,
      displayStar = props.displayStar;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "ReviewSummary",
    style: {
      borderBottom: reviewCount ? '' : 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uC608\uB9E4\uC790 \uD55C\uC904\uD3C9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "summaryContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leftContainer"
  }, displayStar(averageScore), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "averageScore"
  }, averageScore), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "maxScore"
  }, "/ 5.0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rightContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "commentCount"
  }, "".concat(reviewCount, " \uAC74")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "enrollText"
  }, "\uB4F1\uB85D"))));
};

ReviewSummary.propTypes = {
  averageScore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  reviewCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  displayStar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = ReviewSummary;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReviewSummary, "ReviewSummary", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewSummary/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewSummary/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "ykme":
/*!**************************************!*\
  !*** ./src/jsx/ReviewList/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "RIqP");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "MA+E");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Review */ "bUiE");
/* harmony import */ var _ReviewEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReviewEdit */ "nx9d");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var ReviewList = function ReviewList(props) {
  var reviews = props.reviews,
      isBrief = props.isBrief,
      isModifiable = props.isModifiable,
      editComment = props.editComment,
      confirmDelete = props.confirmDelete,
      confirmEdit = props.confirmEdit,
      confirmCancel = props.confirmCancel,
      _props$exData = props.exData,
      id = _props$exData.id,
      score = _props$exData.score,
      comment = _props$exData.comment,
      imageSrc = _props$exData.imageSrc;

  var showReviews = function showReviews() {
    var reviewsComp = [];

    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(reviews).reverse().some(function (review, index) {
      if (isBrief && index >= 5) {
        return true;
      }

      var revisionImageSrc = '';

      if (review.commentImages.length) {
        revisionImageSrc = review.commentImages[0].saveFileName;
        revisionImageSrc = revisionImageSrc.slice(0, 4).includes('blob') ? revisionImageSrc : "/".concat(revisionImageSrc);
      }

      reviewsComp.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: review.commentId,
        review: review.comment,
        imageSrc: revisionImageSrc,
        score: review.score,
        email: review.reservationEmail,
        date: review.reservationDate,
        editComment: editComment(review.reservationInfoId),
        confirmDelete: confirmDelete(review.reservationInfoId)
      }));
    });

    return reviewsComp;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ReviewList"
  }, isModifiable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReviewEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    exScore: score,
    exComment: comment,
    exImageSrc: imageSrc,
    isPost: false,
    confirmEdit: confirmEdit(id),
    confirmCancel: confirmCancel
  }) : showReviews());
};

ReviewList.propTypes = {
  reviews: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    commentId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    comment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    score: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    commentImages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    }))
  })).isRequired,
  isBrief: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isModifiable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  editComment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  confirmDelete: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  confirmEdit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  confirmCancel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  exData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    score: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    comment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired
};
var _default = ReviewList;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReviewList, "ReviewList", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewList/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ReviewList/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

/***/ }),

/***/ "zW+s":
/*!***************************************!*\
  !*** ./src/jsx/TicketInput/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["NO5J","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRXZlbnRJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VTbGlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9EZXRhaWxJbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RvdGFsQ291bnQvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluTmF2QmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2YXRpb25Db3VudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5wdXRMaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0xheW91dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5JbWFnZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9BcHAvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0NvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5OYXZCYXIvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJWaWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mb0xpc3Qvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Mb2dpbkZvcm0vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ub3RhbENvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEJveC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SGVhZC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRGV0YWlsQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZXJJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVE9TL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpblZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9TdWJOYXZCYXIvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdMaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQXBwL2FwcC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1Byb3ZpZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VUaXRsZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEhlYWQvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UT1MvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRJbmZvTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVEZXNjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ291bnQvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01vZGFsL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvU3ViTmF2QmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGFiVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlU2xpZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSGVhZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZXJJbmZvL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0NvbnRhaW5lci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1dyaXRlUmV2aWV3Q29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5wdXRMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGFiVUkvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9CdXR0b25CdW5jaC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYkNvbnRyb2xsZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Mb2dpbkZvcm0vc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluVmlldy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbkJ1bmNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlVGl0bGUvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Qm94L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkNvbnRhaW5lci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdFZGl0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdERlc2MvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRGVzYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldElucHV0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdFZGl0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvbW90aW9uSW1hZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9OYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Q29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluSW1hZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdTdW1tYXJ5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3TGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldElucHV0L3N0eWxlLmNzcyJdLCJuYW1lcyI6WyJFdmVudEluZm8iLCJwcm9wcyIsImRpc2NvdW50SW5mbyIsImpvaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkltYWdlU2xpZGVyIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiZGVncmVlIiwidHJhbnNpdGlvblRpbWUiLCJpbWFnZXMiLCJpbWFnZVdpZHRoIiwiaXNQcm9tb3Rpb24iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdXQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiZGlzcGxheUluZm9JZCIsInNhdmVGaWxlTmFtZSIsImRlZmF1bHRQcm9wcyIsIm51bWJlciIsInNoYXBlIiwiYm9vbCIsImZ1bmMiLCJEZXRhaWxJbWFnZSIsInRpdGxlIiwidXNlU3RhdGUiLCJzZXREZWdyZWUiLCJzZXRJbWFnZVdpZHRoIiwic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwiaW1hZ2VMaXN0IiwidXNlUmVmIiwiZG9pbmdSZXNpemUiLCJjdXJyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGllbnRXaWR0aCIsImRvbmVSZXNpemUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxlZnRTY3JvbGwiLCJyaWdodFNjcm9sbCIsImxlbmd0aCIsImFycmF5IiwiTWFpbk5hdkJhciIsImlzVHJhbnNwYXJlbnQiLCJpc0xvZ291dGFibGUiLCJzdHlsZSIsImVtYWlsIiwic2V0RW1haWwiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImZldGNoRW1haWwiLCJheGlvcyIsImdldCIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVMb2dvdXQiLCJzdGF0dXMiLCJwdXNoIiwiUmVzZXJ2YXRpb25Db3VudCIsInRvVXNlZExlbiIsInVzZWRMZW4iLCJjYW5jZWxlZExlbiIsIkJ1dHRvbiIsImNsaWNrIiwiY2hpbGRyZW4iLCJjcmVhdGVTdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Iiwib25lT2ZUeXBlIiwibm9kZSIsIk1haW5Db250YWluZXIiLCJiYXNpc0NvdW50Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJwcm9kdWN0Q291bnQiLCJzZXRQcm9kdWN0Q291bnQiLCJBcnJheSIsImZpbGwiLCJ2aWV3cyIsInNldFZpZXdzIiwidmlld3NBcnIiLCJzZXRWaWV3c0FyciIsImNhdGVnb3J5UHJvZHVjdHMiLCJzZXRDYXRlZ29yeVByb2R1Y3RzIiwic2hvd2luZ0NvdW50Iiwic2V0U2hvd2luZ0NvdW50IiwiaXNGZXRjaGVkIiwic2V0SXNGZXRjaGVkIiwibGFiZWxzIiwiZG9jdW1lbnQiLCJmZXRjaFByb2R1Y3RzIiwiaXRlbXMiLCJtb2RpZmllZENhdGVnb3J5IiwibW9kaWZpZWRWaWV3c0FyciIsInNsaWNlIiwiaW5mbyIsIm1vZGlmaWVkVmlld3MiLCJzaG93TW9yZVByb2R1Y3QiLCJ2aWV3c0xlbiIsInByb2R1Y3RzTGVuIiwiZmluYWxJbmQiLCJmb3JFYWNoIiwic3BlY2lmaWNQcm9kdWN0cyIsImFsbFByb2R1Y3RzIiwiY2F0ZWdvcnlJZCIsImNvcGllZFZpZXdzIiwiaXNNb3JlU2hvd2luZyIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXRJc01vZGFsIiwic2V0TW9kYWxDaGlsZHJlbiIsImFsZXJ0TW9kYWwiLCJjb25maXJtTW9kYWwiLCJpbWFnZU1vZGFsIiwiTGF5b3V0IiwiaXNNb2RhbCIsIm1vZGFsQ2hpbGRyZW4iLCJ0ZXh0IiwiYWN0aW9uIiwic3JjIiwiQWN0aW9uQ29udGV4dCIsImNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiIsIlJlc2VydmF0aW9uQ29udGFpbmVyIiwidG9Vc2VkIiwic2V0VG9Vc2VkIiwic2V0VG9Vc2VkTGVuIiwidXNlZCIsInNldFVzZWQiLCJzZXRVc2VkTGVuIiwiY2FuY2VsZWQiLCJzZXRDYW5jZWxlZCIsInNldENhbmNlbGVkTGVuIiwidXNlQ29udGV4dCIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiY2FuY2VsUmVzZXJ2YXRpb24iLCJpZCIsInB1dCIsIm1vZGlmaWVkVG9Vc2VkIiwibW9kaWZpZWRDYW5jZWxlZCIsInRvRGVsZXRlSW5kZXgiLCJmaW5kSW5kZXgiLCJyZXNlcnZhdGlvbkluZm9JZCIsInNwbGljZSIsImNhbmNlbGVkSXRlbSIsInRvSW5zZXJ0SW5kZXgiLCJQcm9kdWN0SW5mbyIsImRpc3BsYXlJbmZvIiwicHJvZHVjdENvbnRlbnQiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwbGFjZUxvdCIsInBsYWNlU3RyZWV0IiwicGxhY2VOYW1lIiwidGVsZXBob25lIiwibG9jYXRpb25JbWdTcmMiLCJPYmplY3QiLCJrZXlzIiwiRm9vdGVyIiwiaXNSaXNlYWJsZSIsInNldElzUmlzZWFibGUiLCJzZXRJbnRlcnZhbCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJpbm5lckhlaWdodCIsImNsZWFySW50ZXJ2YWwiLCJSZXZpZXdDb250YWluZXIiLCJpc0JyaWVmIiwiZXhSZXZpZXdzIiwicmV2aWV3cyIsImV4QXZlcmFnZVNjb3JlIiwiYXZlcmFnZVNjb3JlIiwic2V0UmV2aWV3cyIsInNldEF2ZXJhZ2VTY29yZSIsImlzTW9kaWZpYWJsZSIsInNldElzTW9kaWZpYWJsZSIsImV4RGF0YSIsInNldEV4RGF0YSIsInN0eWxlUmVmIiwiaGVhZCIsInJlbW92ZUNoaWxkIiwiTnVtYmVyIiwibW9kaWZpZWRBdmVyYWdlU2NvcmUiLCJyZWR1Y2UiLCJhY2N1bSIsInNjb3JlIiwiTWF0aCIsInJvdW5kIiwiZGlzcGxheVN0YXIiLCJtYXhTY29yZSIsImZpbGxDb3VudCIsImZsb29yIiwibm90RmlsbENvdW50IiwiY2VpbCIsInJhdGlvQ291bnQiLCJzdGFycyIsIl8iLCJyYW5nZSIsIkVQU0lMT04iLCJpbm5lclRleHQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJkZWxldGVDb21tZW50IiwibW9kaWZpZWRSZXZpZXdzIiwiZmlsdGVyIiwiY29uZmlybURlbGV0ZSIsImVkaXRDb21tZW50IiwicmV2aWV3IiwiY29tbWVudCIsImNvbW1lbnRJbWFnZXMiLCJpbWFnZVNyYyIsImNvbmZpcm1FZGl0Iiwic3VibWl0IiwiaXNQcm9jZXNzZWQiLCJjb25maXJtQ2FuY2VsIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiY29tbWVudElkIiwicHJvZHVjdElkIiwicmVzZXJ2YXRpb25EYXRlIiwicmVzZXJ2YXRpb25FbWFpbCIsImRlbGV0ZUZsYWciLCJMb2dpbkZvcm0iLCJpbnB1dFJlZiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwic3RhdHVzVGV4dCIsImJsdXIiLCJ0YXJnZXQiLCJUb3RhbENvdW50IiwiUHJvZHVjdEJveCIsIml0ZW1JbmZvIiwicHJvZHVjdEltYWdlVXJsIiwidGV4dExpbWl0IiwiaXNGb2xkIiwic2V0SXNGb2xkIiwiaXNJY29uU2hvd2luZyIsInNldElzSWNvblNob3dpbmciLCJkZXRhaWxUZXh0IiwidGV4dE9iaiIsInRyaW1tZWRUZXh0IiwidHJpbSIsInJlcGxhY2UiLCJ0ZXh0U2ltcGxlIiwidGV4dERldGFpbCIsInNpbXBsZSIsImRldGFpbCIsInNob3dBbmRIaWRlIiwiJCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXNwbGF5IiwiVGlja2V0SW5mbyIsImRlc2NyaXB0aW9uIiwicmVzZXJ2YXRpb25OYW1lIiwicmVzZXJ2YXRpb25UZWwiLCJwcmljZUluZm8iLCJ0b3RhbFByaWNlIiwiaXNDb21tZW50RXhpc3QiLCJhY3Rpb25zIiwicmVzZXJ2YXRpb25TdW1tYXJ5IiwicHJpY2VUeXBlTWFwcGVyIiwicHJpY2VUeXBlTmFtZSIsImNvdW50IiwiY3JlYXRlQnV0dG9uIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0Iiwibm90ZXMiLCJTdHJpbmciLCJwYWRTdGFydCIsInRyYW5zZm9ybU1vbmV5VW5pdCIsIlJlc2VydmVDb250YWluZXIiLCJ1c2VQYXJhbXMiLCJwcm9kdWN0RGF0YSIsInNldFByb2R1Y3REYXRhIiwic2V0SW1hZ2VTcmMiLCJkYXRlIiwic2V0RGF0ZSIsImZldGNoRGF0ZSIsInByb2R1Y3RJbWFnZXMiLCJzb21lIiwidHlwZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJwcm9kdWN0UHJpY2VzIiwiRGV0YWlsQ29udGFpbmVyIiwic2V0RGlzY291bnRJbmZvIiwibW9kaWZpZWRJbWFnZXMiLCJkaXNjb3VudFJhdGUiLCJjb21tZW50cyIsImRpc3BsYXlJbmZvSW1hZ2UiLCJSZXNlcnZlckluZm8iLCJuYW1lIiwidG90YWxUaWNrZXQiLCJkaXNwYXRjaCIsImlzVmVyaWZpZWROYW1lIiwiaXNWZXJpZmllZFRlbCIsImlzVmVyaWZpZWRFbWFpbCIsIm1ha2VBbGVydCIsImhpZGUiLCJNYWluVmlldyIsInByb2R1Y3RzIiwibGVmdFByb2R1Y3RzIiwidiIsInJpZ2h0UHJvZHVjdHMiLCJlbGVtZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJXcml0ZVJldmlld0NvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiUmV2aWV3UHJvdmlkZXIiLCJJbWFnZVRpdGxlIiwiaW1hZ2VMZW4iLCJUaWNrZXRIZWFkIiwiaXNHcmVlbiIsIlRPUyIsImlzQ2hlY2tlZCIsImlzQ29sbGVjdGlvbkZvbGQiLCJzZXRJc0NvbGxlY3Rpb25Gb2xkIiwiaXNPZmZlckZvbGQiLCJzZXRJc09mZmVyRm9sZCIsImZvbGRUZXh0Iiwic2hvd1RleHQiLCJoYW5kbGVDb2xsZWN0aW9uQ2xpY2siLCJoYW5kbGVPZmZlckNsaWNrIiwiY2hlY2tlZCIsIlRpY2tldEluZm9MaXN0IiwiaW5mb3MiLCJSZXNlcnZlRGVzYyIsInBsYWNlIiwicHJpY2VUZXh0IiwicHJpY2VMaXN0IiwicHJpY2UiLCJIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJ0aWNrZXRzIiwiaXNUT1NDaGVja2VkIiwicmVkdWNlciIsInN0YXRlIiwibW9kaWZpZWQiLCJ3aGVyZSIsInRlc3QiLCJ0ZWxSZSIsImVtYWlsUmUiLCJFcnJvciIsIlJlc2VydmVGb3JtIiwidXNlUmVkdWNlciIsInBhcnNlZCIsImNvb2tpZSIsInBhcnNlIiwicmVzZXJ2YXRpb25JbmZvIiwicHJpY2VzIiwicmVzZXJ2YXRpb25UZWxlcGhvbmUiLCJyZXNlcnZhdGlvblllYXJNb250aERheSIsImxlbiIsInByb2R1Y3RQcmljZUlkIiwicHJvZHVjdFByaWNlSUQiLCJjb25maXJtU3VibWl0Iiwic3BsaXQiLCJmb250RmFtaWx5IiwidHJhbnNpdGlvbiIsInZlcnRpY2FsQWxpZ24iLCJTdWJOYXZCYXIiLCJnb0JhY2siLCJUYWJWaWV3IiwidmlldyIsImhlaWdodCIsIlJldmlldyIsImltZ1N0eWxlIiwic2V0SW1nU3R5bGUiLCJyZXZpZXdSZWYiLCJoYW5kbGVDbGljayIsInBhcmFncmFwaCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3BIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzZXRJbmZvIiwiVGlja2V0SW5wdXRMaXN0IiwiVGFiVUkiLCJzZWxlY3RlZCIsImluZGljYXRvclN0eWxlIiwibGFiZWwiLCJsZWZ0Iiwid2lkdGgiLCJUYWJDb250cm9sbGVyIiwiYWxhcm0iLCJ0b3AiLCJib3R0b20iLCJzZXRTZWxlY3RlZCIsInNldEluZGljYXRvclN0eWxlIiwidmlld1N0eWxlIiwic2V0Vmlld1N0eWxlIiwidmlld0hlaWdodCIsInNldFZpZXdIZWlnaHQiLCJ1aVJlZiIsInZpZXdSZWYiLCJzZWxlY3RlZFJlZiIsInZpZXdIZWlnaHRSZWYiLCJyZXZpc2VJbmRpY2F0b3IiLCJzZWxlY3RlZExpIiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwicmV2aXNlVmlld1dpZHRoIiwidmlld0JvZHkiLCJhcHBseVN0eWxlIiwidG9TdHJpbmciLCJjYWxsIiwiYWxsIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwicmlnaHQiLCJkb3duIiwiQnV0dG9uQnVuY2giLCJtYXJnaW4iLCJwYWRkaW5nIiwiZm9udENvbG9yIiwiUmV2aWV3RWRpdCIsInRodW1ibmFpbFdpZHRoIiwiZXhTY29yZSIsImV4Q29tbWVudCIsImV4SW1hZ2VTcmMiLCJpc1Bvc3QiLCJzZXRTY29yZSIsInNldENvbW1lbnQiLCJ0aHVtYm5haWxTdHlsZSIsInNldFRodW1ibmFpbFN0eWxlIiwiZm9ybSIsImltYWdlUmVmIiwiaW1hZ2VNZWFzdXJlbWVudCIsIkltYWdlIiwicmV2aXNpb25TcmMiLCJvbmxvYWQiLCJyYXRpbyIsImZpbGVzIiwidmFsaWRJbWFnZVR5cGUiLCJmb3JtT2JqIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJ1cmwiLCJtb2RpZnlSYXRpbmciLCJ1cGxvYWRJbWFnZSIsInRlbXBJbWFnZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNhbmNlbEltYWdlVXBsb2FkIiwiVGlja2V0IiwiUHJvZHVjdERlc2MiLCJsaW1pdCIsInNldFRleHRPYmoiLCJzaG93TW9yZURlc2MiLCJvcGVuVGV4dCIsImJvcmRlckxlZnQiLCJib3JkZXJSaWdodCIsIlRpY2tldElucHV0IiwicHJvZHVjdFByaWNlIiwib3JpZ2luYWxDb3N0IiwiUHJvbW90aW9uSW1hZ2UiLCJ0aW1lSW50ZXJ2YWwiLCJzY3JvbGxhYmxlIiwic2V0U2Nyb2xsYWJsZSIsInNldEltYWdlcyIsImRlZ3JlZVJlZiIsInNjcm9sbGFibGVSZWYiLCJmZXRjaEltYWdlcyIsImF1dG9TY3JvbGwiLCJwcmV2RGVncmVlIiwiTmF2QmFyIiwiUHJvZHVjdENvbnRhaW5lciIsImNsYXNzTmFtZSIsIk1vZGFsIiwiTWFpbkltYWdlIiwiYWx0IiwiUmV2aWV3U3VtbWFyeSIsInJldmlld0NvdW50IiwiYm9yZGVyQm90dG9tIiwiUmV2aWV3TGlzdCIsInNob3dSZXZpZXdzIiwicmV2aWV3c0NvbXAiLCJyZXZlcnNlIiwicmV2aXNpb25JbWFnZVNyYyIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNuQkMsWUFEbUIsR0FDRkQsS0FERSxDQUNuQkMsWUFEbUI7QUFHM0IsU0FDRTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNFLHVFQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERixFQUVHLFFBRkgsQ0FERixFQUtFLG1JQUVFLHNFQUZGLFlBR01BLFlBQVksQ0FBQ0MsSUFBYixDQUFrQixJQUFsQixDQUhOLG1CQUxGLENBREY7QUFhRCxDQWhCRDs7QUFrQkFILFNBQVMsQ0FBQ0ksU0FBVixHQUFzQjtBQUNwQkYsY0FBWSxFQUFFRyxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUFWLENBQWlCQyxVQUFuQyxFQUErQ0E7QUFEekMsQ0FBdEI7ZUFJZVIsUztBQUFBOzs7Ozs7Ozs7OzBCQXRCVEEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xOO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNUyxXQUFXLEdBQUdDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUIsVUFBQ1YsS0FBRCxFQUFRVyxHQUFSLEVBQWdCO0FBQ25EOzs7Ozs7O0FBRG1ELE1BVWpEQyxNQVZpRCxHQWtCL0Na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R3RCdU4sV0FBTyxFQUFFek4saURBQVMsQ0FBQ0UsTUFIRztBQUl0QnlOLFlBQVEsRUFBRTNOLGlEQUFTLENBQUNFO0FBSkUsR0FBaEIsRUFLTEM7QUExQmtCLENBQXZCO2VBNkJlcWUsVTtBQUFBOzs7Ozs7Ozs7OzBCQXpGVEEsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUE4sdUMiLCJmaWxlIjoibWFpbi4wM2ExODE5NjU1ZjZlNWNmNDExZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEV2ZW50SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGlzY291bnRJbmZvIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkV2ZW50SW5mb1wiPlxyXG4gICAgICA8aDI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2V2dFwiIC8+XHJcbiAgICAgICAgeycg7J2067Kk7Yq47KCV67O0J31cclxuICAgICAgPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgW+uEpOydtOuyhOyYiOyVvSDtirnrs4TtlaDsnbhdXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2Ake2Rpc2NvdW50SW5mby5qb2luKCcsICcpfSDtlaDsnbhgfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkV2ZW50SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzY291bnRJbmZvOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEluZm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTWFpbkltYWdlIGZyb20gJy4uL01haW5JbWFnZSc7XHJcblxyXG5jb25zdCBJbWFnZVNsaWRlciA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAvKiBpbml0XHJcbiAgICogIGRlZ3JlZTogMFxyXG4gICAqIHRyYW5zaXRpb25UaW1lOiAyXHJcbiAgICogIGltYWdlczogW11cclxuICAgKiAgaW1hZ2VXaWR0aDogMFxyXG4gICAqIGlzUHJvbW90aW9uOiB0cnVlXHJcbiAgICovXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGRlZ3JlZSxcclxuICAgIHRyYW5zaXRpb25UaW1lLFxyXG4gICAgaW1hZ2VzLFxyXG4gICAgaW1hZ2VXaWR0aCxcclxuICAgIGlzUHJvbW90aW9uLFxyXG4gICAgaGFuZGxlVHJhbnNpdGlvbkVuZCxcclxuICAgIGhhbmRsZU1vdXNlT3ZlcixcclxuICAgIGhhbmRsZU1vdXNlT3V0LFxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtgSW1hZ2VTbGlkZXIgJHtpc1Byb21vdGlvbiA/ICdwcm9tb3Rpb24nIDogJ2RldGFpbCd9YH1cclxuICAgICAgb25UcmFuc2l0aW9uRW5kPXtoYW5kbGVUcmFuc2l0aW9uRW5kfVxyXG4gICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfVxyXG4gICAgICBvbk1vdXNlT3V0PXtoYW5kbGVNb3VzZU91dH1cclxuICAgID5cclxuICAgICAgPHVsXHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7aW1hZ2VXaWR0aCAqIGRlZ3JlZX1weClgLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0cmFuc2l0aW9uVGltZX1zYCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlICYmIGlzUHJvbW90aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2BkZXRhaWwvJHt2YWx1ZS5kaXNwbGF5SW5mb0lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8TWFpbkltYWdlIHNyYz17dmFsdWUuc2F2ZUZpbGVOYW1lfSBhbHQ9XCJwcm9tb3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxNYWluSW1hZ2Ugc3JjPXtgLyR7dmFsdWUuc2F2ZUZpbGVOYW1lfWB9IGFsdD1cIml0ZW1JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcbkltYWdlU2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBoYW5kbGVUcmFuc2l0aW9uRW5kOiAoKSA9PiB7fSxcclxuICBoYW5kbGVNb3VzZU92ZXI6ICgpID0+IHt9LFxyXG4gIGhhbmRsZU1vdXNlT3V0OiAoKSA9PiB7fSxcclxufTtcclxuXHJcbkltYWdlU2xpZGVyLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzYXZlRmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpbWFnZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNQcm9tb3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFuZGxlTW91c2VPdmVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBoYW5kbGVNb3VzZU91dDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHJlc2l6ZUVuZCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi9JbWFnZVNsaWRlcic7XHJcbmltcG9ydCBJbWFnZVRpdGxlIGZyb20gJy4uL0ltYWdlVGl0bGUnO1xyXG5cclxuLy8gRGV0YWlsQ29udGFpbmVy7JeQ7IScIGltYWdlc+yZgCB0aXRsZeydhCDspJjslbwgIO2VmOqzoCBpbWFnZXPripQg7ZWE7YSw66eB7J2EIOqxsOyzkOuGlOyVvCDrkKhcclxuLy8g7Iqk7YGs66GkIOyLnOqwhCh0cmFuc2l0aW9uVGltZSkgZGVmYXVsdCAx7LSIXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IERldGFpbEltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZXMsIHRpdGxlLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbWFnZVdpZHRoLCBzZXRJbWFnZVdpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0cmFuc2l0aW9uRHVyYXRpb24sIHNldFRyYW5zaXRpb25EdXJhdGlvbl0gPSB1c2VTdGF0ZSh0cmFuc2l0aW9uVGltZSk7XHJcbiAgY29uc3QgaW1hZ2VMaXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBkb2luZ1Jlc2l6ZSA9ICgpID0+IHtcclxuICAgIHNldEltYWdlV2lkdGgoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpO1xyXG4gICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKDApO1xyXG4gIH07XHJcblxyXG4gIGxldCBkb25lUmVzaXplO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VXaWR0aChcclxuICAgICAgKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkICYmXHJcbiAgICAgICAgaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpIHx8XHJcbiAgICAgICAgMCxcclxuICAgICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZG9pbmdSZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdyZXNpemUnLFxyXG4gICAgICAoKCkgPT4ge1xyXG4gICAgICAgIGRvbmVSZXNpemUgPSByZXNpemVFbmQoKCkgPT4gc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKSk7XHJcbiAgICAgICAgcmV0dXJuIGRvbmVSZXNpemU7XHJcbiAgICAgIH0pKCksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvaW5nUmVzaXplKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvbmVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbaW1hZ2VzXSk7XHJcblxyXG4gIGNvbnN0IGxlZnRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVncmVlICE9PSAwKSB7XHJcbiAgICAgIHNldERlZ3JlZShkZWdyZWUgLSAxKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBpZiAoZGVncmVlID09PSAwKSByZXR1cm47XHJcbiAgICBkZWdyZWUgLT0gMTtcclxuICAgIGNvbnN0IGludGVydmFsID0gZmlyc3RJdGVtLmNsaWVudFdpZHRoO1xyXG4gICAgaW1hZ2VMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2ludGVydmFsICogZGVncmVlfXB4KWA7XHJcbiAgICBpbWFnZUNvdW50aW5nLmlubmVyVGV4dCA9IGAgJHtkZWdyZWUgKyAxfSBgO1xyXG4gICAgKi9cclxuICB9O1xyXG5cclxuICBjb25zdCByaWdodFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgIT09IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHNldERlZ3JlZSgoZGVncmVlICsgMSkgJSBpbWFnZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBpbWFnZUxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7aW50ZXJ2YWwgKiBkZWdyZWV9cHgpYDtcclxuICAgIGltYWdlQ291bnRpbmcuaW5uZXJUZXh0ID0gYCAke2RlZ3JlZSArIDF9IGA7XHJcbiAgICAqL1xyXG4gIH07XHJcbiAgLy8gcHJvcHMg64ukIOuEmOqyqOykmOyVvCDtlahcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJEZXRhaWxJbWFnZVwiPlxyXG4gICAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgICByZWY9e2ltYWdlTGlzdH1cclxuICAgICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvbkR1cmF0aW9ufVxyXG4gICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgICAgaXNQcm9tb3Rpb249e2ZhbHNlfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2VUaXRsZVxyXG4gICAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICAgIGltYWdlTGVuPXtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBsZWZ0U2Nyb2xsPXtsZWZ0U2Nyb2xsfVxyXG4gICAgICAgIHJpZ2h0U2Nyb2xsPXtyaWdodFNjcm9sbH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXRhaWxJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW1hZ2VzOiBbXSxcclxuICB0aXRsZTogJycsXHJcbiAgdHJhbnNpdGlvblRpbWU6IDAuNSxcclxufTtcclxuXHJcbkRldGFpbEltYWdlLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEltYWdlO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBUT0RPOiBpc1RyYW5zcGFyZW506rCAIGZhbHNl7J28IOuVjCBmaXhlZOydtOuvgOuhnCBzdHlsZeqwneyytOqwgCDsnojslrTslbwg65CoXHJcblxyXG5jb25zdCBNYWluTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc1RyYW5zcGFyZW50LCBpc0xvZ291dGFibGUsIHN0eWxlIH0gPSBwcm9wcztcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hFbWFpbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2F1dGgvZW1haWwnKTtcclxuICAgICAgICBpZiAoZGF0YSkgc2V0RW1haWwoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaEVtYWlsKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXV0aC9sb2dvdXQnKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdlxyXG4gICAgICBjbGFzc05hbWU9e2BNYWluTmF2QmFyICR7aXNUcmFuc3BhcmVudCA/ICd0cmFuc3BhcmVudCcgOiAnZml4ZWQnfWB9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgID5cclxuICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24vaWNvbi5wbmdcIiBhbHQ9XCJuYXZlciBpY29uXCIgLz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICB7aXNMb2dvdXRhYmxlID8gKFxyXG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICA8aDI+e2VtYWlsID8gJ+uhnOq3uOyVhOybgycgOiAn7JiI7JW97ZmV7J24J308L2gyPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGluayB0bz17ZW1haWwgPyAnL215cmVzZXJ2YXRpb24nIDogJy9ib29raW5nbG9naW4nfT5cclxuICAgICAgICAgIDxoMj57ZW1haWwgfHwgJ+yYiOyVve2ZleyduCd9PC9oMj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuTWFpbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc0xvZ291dGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2QmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyDsnpjsnpjtlZjqsowg7Kq86rCk7IiYIOyeiOydhCDqsoMg6rCZ7J2MXHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkNvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0b1VzZWRMZW4sIHVzZWRMZW4sIGNhbmNlbGVkTGVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzZXJ2YXRpb25Db3VudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19ib29rMlwiIC8+XHJcbiAgICAgICAgICAgICAgeycg7KCE7LK0J31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3RvVXNlZExlbiArIHVzZWRMZW4gKyBjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19ib29rX3NzXCIgLz5cclxuICAgICAgICAgICAgICB7JyDsnbTsmqnsmIjsoJUnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57dG9Vc2VkTGVufTwvaDE+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2NoZWNrXCIgLz5cclxuICAgICAgICAgICAgICB7JyDsnbTsmqnsmYTro4wnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57dXNlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19iYWNrXCIgLz5cclxuICAgICAgICAgICAgICB7JyDst6jshozCt+2ZmOu2iCd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPntjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2YXRpb25Db3VudC5wcm9wVHlwZXMgPSB7XHJcbiAgdG9Vc2VkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdXNlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGNhbmNlbGVkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvdW50O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3R5bGUsIGNsaWNrLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY3JlYXRlU3R5bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JyxcclxuICAgICAgLi4uc3R5bGUsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB0eXBlb2YgY2xpY2sgPT09ICdmdW5jdGlvbicgPyAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvblwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgc3R5bGU9e2NyZWF0ZVN0eWxlKCl9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8TGluayBjbGFzc05hbWU9XCJCdXR0b25cIiB0bz17Y2xpY2t9IHN0eWxlPXtjcmVhdGVTdHlsZSgpfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0eWxlOiB7fSxcclxufTtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2xpY2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuLypcclxuICog64Sk7J2067KEIOuwsOqyvSDstIjroZ3sg4k6ICMxZWM4MDAg6riA7J6Q7IOJICNmZmY7XHJcbiAqL1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi4vTWFpblZpZXcnO1xyXG5pbXBvcnQgVGFiQ29udHJvbGxlciBmcm9tICcuLi9UYWJDb250cm9sbGVyJztcclxuaW1wb3J0IFByb2R1Y3RCb3ggZnJvbSAnLi4vUHJvZHVjdEJveCc7XHJcbmltcG9ydCBUb3RhbENvdW50IGZyb20gJy4uL1RvdGFsQ291bnQnO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYmFzaXNDb3VudCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoMCk7IC8vIO2YhOyerCDshKDtg53rkJwg7Lm07YWM6rOg66asIGlkXHJcbiAgY29uc3QgW3Byb2R1Y3RDb3VudCwgc2V0UHJvZHVjdENvdW50XSA9IHVzZVN0YXRlKDApOyAvLyAg7Lm07YWM6rOg66as7J2YIOygnO2SiCDqsJzsiJhcclxuICBjb25zdCBbdmlld3MsIHNldFZpZXdzXSA9IHVzZVN0YXRlKEFycmF5KDYpLmZpbGwoPE1haW5WaWV3IC8+KSk7IC8vIFs8TWFpblZpZXcvPiw8TWFpblZpZXcvPl1cclxuICBjb25zdCBbdmlld3NBcnIsIHNldFZpZXdzQXJyXSA9IHVzZVN0YXRlKEFycmF5KDYpLmZpbGwobnVsbCkpOyAvLyBbWzxQcm9kdWN0Qm94Lz5dLFs8UHJvZHVjdEJveC8+XV07XHJcbiAgY29uc3QgW2NhdGVnb3J5UHJvZHVjdHMsIHNldENhdGVnb3J5UHJvZHVjdHNdID0gdXNlU3RhdGUoQXJyYXkoNikuZmlsbChudWxsKSk7XHJcbiAgY29uc3QgW3Nob3dpbmdDb3VudCwgc2V0U2hvd2luZ0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc0ZldGNoZWQsIHNldElzRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGxhYmVscyA9IFsn7KCE7LK0JywgJ+yghOyLnCcsICfrrqTsp4Dsu6wnLCAn7L2Y7ISc7Yq4JywgJ+2BtOuemOyLnScsICfsl7Dqt7knXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gJ+uEpOydtOuyhCDsmIjslb0nO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZGF0YTogeyBpdGVtcyB9LFxyXG4gICAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvZHVjdHMnKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhdGVnb3J5ID0gWy4uLmNhdGVnb3J5UHJvZHVjdHNdO1xyXG4gICAgICAgIG1vZGlmaWVkQ2F0ZWdvcnlbMF0gPSBpdGVtcztcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzQXJyID0gWy4uLnZpZXdzQXJyXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzQXJyWzBdID0gaXRlbXNcclxuICAgICAgICAgIC5zbGljZSgwLCBiYXNpc0NvdW50KVxyXG4gICAgICAgICAgLm1hcCgoaW5mbykgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdEJveCBrZXk9e2luZm8uZGlzcGxheUluZm9JZH0gaXRlbUluZm89e2luZm99IC8+XHJcbiAgICAgICAgICApKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzWzBdID0gPE1haW5WaWV3IHByb2R1Y3RzPXttb2RpZmllZFZpZXdzQXJyWzBdfSAvPjtcclxuICAgICAgICBzZXRDYXRlZ29yeVByb2R1Y3RzKG1vZGlmaWVkQ2F0ZWdvcnkpO1xyXG4gICAgICAgIHNldFZpZXdzQXJyKG1vZGlmaWVkVmlld3NBcnIpO1xyXG4gICAgICAgIHNldFNob3dpbmdDb3VudChzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50KTtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICBzZXRWaWV3cyhtb2RpZmllZFZpZXdzKTtcclxuICAgICAgICBzZXRJc0ZldGNoZWQodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3c0xlbiA9IHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aDtcclxuICAgIGNvbnN0IHByb2R1Y3RzTGVuID0gY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGg7XHJcbiAgICBpZiAodmlld3NMZW4gPj0gc2hvd2luZ0NvdW50ICsgYmFzaXNDb3VudCB8fCB2aWV3c0xlbiA+IHNob3dpbmdDb3VudCkge1xyXG4gICAgICAvLyB2aWV3c0FycuyXkCDsnojrjZgg6riw7KG0IOqyg+ydhCDsgqzsmqntlaAg65WMXHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICB2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA/IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnRcclxuICAgICAgICAgIDogdmlld3NMZW47XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgIDxNYWluVmlld1xyXG4gICAgICAgICAgcHJvZHVjdENvdW50PXtwcm9kdWN0Q291bnR9XHJcbiAgICAgICAgICBwcm9kdWN0cz17dmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0uc2xpY2UoMCwgZmluYWxJbmQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIHNldFNob3dpbmdDb3VudChmaW5hbEluZCk7XHJcbiAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgfSBlbHNlIGlmIChwcm9kdWN0c0xlbiA+IHZpZXdzTGVuKSB7XHJcbiAgICAgIC8vIHZpZXdzQXJy7JeQIOyxhOybjOyEnCDsgqzsmqntlaAg65WMXHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICBwcm9kdWN0c0xlbiA+PSB2aWV3c0xlbiArIGJhc2lzQ291bnRcclxuICAgICAgICAgID8gdmlld3NMZW4gKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA6IHByb2R1Y3RzTGVuO1xyXG4gICAgICBjb25zdCBtb2RpZmllZFZpZXdzQXJyID0gWy4uLnZpZXdzQXJyXTtcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XVxyXG4gICAgICAgIC5zbGljZSh2aWV3c0xlbiwgZmluYWxJbmQpXHJcbiAgICAgICAgLmZvckVhY2goKGluZm8pID0+IHtcclxuICAgICAgICAgIG1vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ucHVzaChcclxuICAgICAgICAgICAgPFByb2R1Y3RCb3gga2V5PXtpbmZvLmRpc3BsYXlJbmZvSWR9IGl0ZW1JbmZvPXtpbmZvfSAvPixcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgIDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX0gLz5cclxuICAgICAgKTtcclxuICAgICAgc2V0U2hvd2luZ0NvdW50KGZpbmFsSW5kKTtcclxuICAgICAgc2V0Vmlld3NBcnIobW9kaWZpZWRWaWV3c0Fycik7XHJcbiAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDsubTthYzqs6Drpqwg67CU64CM7JeI7J2EIOuVjCB2aWV367CU6r6464qUIOqzvOyglVxyXG4gICAgLy8gMS4g7LWc7LSIIOqzvOyglVxyXG4gICAgLy8gMi4g7LWc7LSIIOyVhOuLkCDrlYxcclxuICAgIGlmIChpc0ZldGNoZWQpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldKSB7XHJcbiAgICAgICAgLy8gMS7stZzstIgg6rO87KCVXHJcbiAgICAgICAgLy8gc2VsZWN0ZWRDYXRlZ29yeeyXkCAg7IOB7ZKI7KCV67O066W8IOuEo+qzoFxyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IHNwZWNpZmljUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBjb25zdCBbYWxsUHJvZHVjdHNdID0gY2F0ZWdvcnlQcm9kdWN0cztcclxuICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmNhdGVnb3J5SWQgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgc3BlY2lmaWNQcm9kdWN0cy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhdGVnb3J5ID0gWy4uLmNhdGVnb3J5UHJvZHVjdHNdO1xyXG4gICAgICAgIG1vZGlmaWVkQ2F0ZWdvcnlbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzO1xyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3NBcnIgPSBbLi4udmlld3NBcnJdO1xyXG4gICAgICAgIG1vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzXHJcbiAgICAgICAgICAuc2xpY2UoMCwgYmFzaXNDb3VudClcclxuICAgICAgICAgIC5tYXAoKGluZm8pID0+IChcclxuICAgICAgICAgICAgPFByb2R1Y3RCb3gga2V5PXtpbmZvLmRpc3BsYXlJbmZvSWR9IGl0ZW1JbmZvPXtpbmZvfSAvPlxyXG4gICAgICAgICAgKSk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgICAgbW9kaWZpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICAgIDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldENhdGVnb3J5UHJvZHVjdHMobW9kaWZpZWRDYXRlZ29yeSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdENvdW50KHNwZWNpZmljUHJvZHVjdHMubGVuZ3RoKTtcclxuICAgICAgICBzZXRWaWV3c0Fycihtb2RpZmllZFZpZXdzQXJyKTtcclxuICAgICAgICBzZXRWaWV3cyhtb2RpZmllZFZpZXdzKTtcclxuICAgICAgICBzZXRTaG93aW5nQ291bnQoYmFzaXNDb3VudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoID49IGJhc2lzQ291bnQpIHtcclxuICAgICAgICAvLyBsZW5ndGjripQg7J6E7IucIO2MkOuzhCBNYWluVmlld+unjCDsnojslrTshJwg7JWI7JeQIOqwr+yImCDtjIzslYXtlbTslbwg65CoXHJcbiAgICAgICAgLy8gMi4gYmFzaXNDb3VudOuekSDsnbzsuZjtlaAg65WMXHJcbiAgICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICAgIGNvcGllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5zbGljZSgwLCBiYXNpc0NvdW50KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGgpO1xyXG4gICAgICAgIHNldFNob3dpbmdDb3VudChiYXNpc0NvdW50KTtcclxuICAgICAgICBzZXRWaWV3cyhjb3BpZWRWaWV3cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRDYXRlZ29yeV0pO1xyXG5cclxuICBjb25zdCBpc01vcmVTaG93aW5nID0gKCkgPT5cclxuICAgICgoY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XSAmJlxyXG4gICAgICBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCkgfHxcclxuICAgICAgMCkgPiBzaG93aW5nQ291bnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5Db250YWluZXJcIj5cclxuICAgICAgPFRhYkNvbnRyb2xsZXJcclxuICAgICAgICBsYWJlbHM9e2xhYmVsc31cclxuICAgICAgICB2aWV3cz17dmlld3N9XHJcbiAgICAgICAgYWxhcm09e3NldFNlbGVjdGVkQ2F0ZWdvcnl9XHJcbiAgICAgICAgdG9wPXs8VG90YWxDb3VudCBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH0gLz59XHJcbiAgICAgICAgYm90dG9tPXtcclxuICAgICAgICAgIGlzTW9yZVNob3dpbmcoKSA/IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9yZVwiIG9uQ2xpY2s9e3Nob3dNb3JlUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAg642U67O06riwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICcnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJhc2lzQ291bnQ6IDQsXHJcbn07XHJcblxyXG5NYWluQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBiYXNpc0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgc2V0SXNNb2RhbDogKCkgPT4ge30sXHJcbiAgc2V0TW9kYWxDaGlsZHJlbjogKCkgPT4ge30sXHJcbiAgYWxlcnRNb2RhbDogKCkgPT4ge30sXHJcbiAgY29uZmlybU1vZGFsOiAoKSA9PiB7fSxcclxuICBpbWFnZU1vZGFsOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNNb2RhbCwgc2V0SXNNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsQ2hpbGRyZW4sIHNldE1vZGFsQ2hpbGRyZW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBhbGVydE1vZGFsID0gKHRleHQsIGFjdGlvbikgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFRleHRcIj5cclxuICAgICAgICA8aDE+e3RleHR9PC9oMT5cclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICftmZXsnbgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtTW9kYWwgPSAodGV4dCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzZXRNb2RhbENoaWxkcmVuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsVGV4dFwiPlxyXG4gICAgICAgIDxoMT57dGV4dH08L2gxPlxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjg4RkVCJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXRJc01vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAn7ZmV7J24JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc01vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAn7Leo7IaMJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+LFxyXG4gICAgKTtcclxuICAgIHNldElzTW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW1hZ2VNb2RhbCA9IChzcmMpID0+IHtcclxuICAgIHNldE1vZGFsQ2hpbGRyZW4oXHJcbiAgICAgIDxpbWdcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc01vZGFsKGZhbHNlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAvPixcclxuICAgICk7XHJcbiAgICBzZXRJc01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW9kYWwpIHtcclxuICAgICAgc2V0TW9kYWxDaGlsZHJlbignJyk7XHJcbiAgICB9XHJcbiAgfSwgW2lzTW9kYWxdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBzZXRJc01vZGFsLFxyXG4gICAgICAgIHNldE1vZGFsQ2hpbGRyZW4sXHJcbiAgICAgICAgYWxlcnRNb2RhbCxcclxuICAgICAgICBjb25maXJtTW9kYWwsXHJcbiAgICAgICAgaW1hZ2VNb2RhbCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7aXNNb2RhbCA/IDxNb2RhbD57bW9kYWxDaGlsZHJlbn08L01vZGFsPiA6ICcnfVxyXG4gICAgPC9Nb2RhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbmV4cG9ydCB7IE1vZGFsQ29udGV4dCB9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG4vLyBGSVhNRTogY3ljbGUg7KCc6rGwXHJcbmltcG9ydCBUaWNrZXQgZnJvbSAnLi4vVGlja2V0JztcclxuaW1wb3J0IFJlc2VydmF0aW9uQ291bnQgZnJvbSAnLi4vUmVzZXJ2YXRpb25Db3VudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuXHJcbmNvbnN0IEFjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb246ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b1VzZWQsIHNldFRvVXNlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvVXNlZExlbiwgc2V0VG9Vc2VkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt1c2VkLCBzZXRVc2VkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXNlZExlbiwgc2V0VXNlZExlbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2FuY2VsZWQsIHNldENhbmNlbGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2FuY2VsZWRMZW4sIHNldENhbmNlbGVkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gJ+yYiOyVvSDtmZXsnbgnO1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Jlc2VydmF0aW9ucycpO1xyXG4gICAgICAgIHNldFRvVXNlZChkYXRhLnRvVXNlZCk7XHJcbiAgICAgICAgc2V0VG9Vc2VkTGVuKGRhdGEudG9Vc2VkLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0VXNlZChkYXRhLnVzZWQpO1xyXG4gICAgICAgIHNldFVzZWRMZW4oZGF0YS51c2VkLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0Q2FuY2VsZWQoZGF0YS5jYW5jZWxlZCk7XHJcbiAgICAgICAgc2V0Q2FuY2VsZWRMZW4oZGF0YS5jYW5jZWxlZC5sZW5ndGgpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IGRhdGEsIHN0YXR1cyB9LFxyXG4gICAgICAgIH0gPSBlcnJvcjtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsUmVzZXJ2YXRpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvcmVzZXJ2YXRpb25zLyR7aWR9YCk7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkVG9Vc2VkID0gWy4uLnRvVXNlZF07XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRDYW5jZWxlZCA9IFsuLi5jYW5jZWxlZF07XHJcbiAgICAgICAgY29uc3QgdG9EZWxldGVJbmRleCA9IG1vZGlmaWVkVG9Vc2VkLmZpbmRJbmRleChcclxuICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWUucmVzZXJ2YXRpb25JbmZvSWQgPT09IGlkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgW2NhbmNlbGVkSXRlbV0gPSBtb2RpZmllZFRvVXNlZC5zcGxpY2UodG9EZWxldGVJbmRleCwgMSk7XHJcbiAgICAgICAgY29uc3QgdG9JbnNlcnRJbmRleCA9IG1vZGlmaWVkQ2FuY2VsZWQuZmluZEluZGV4KFxyXG4gICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS5yZXNlcnZhdGlvbkluZm9JZCA+IGlkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHRvSW5zZXJ0SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICBtb2RpZmllZENhbmNlbGVkLnB1c2goY2FuY2VsZWRJdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW9kaWZpZWRDYW5jZWxlZC5zcGxpY2UodG9JbnNlcnRJbmRleCwgMCwgY2FuY2VsZWRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VG9Vc2VkKG1vZGlmaWVkVG9Vc2VkKTtcclxuICAgICAgICBzZXRUb1VzZWRMZW4odG9Vc2VkTGVuIC0gMSk7XHJcbiAgICAgICAgc2V0Q2FuY2VsZWQobW9kaWZpZWRDYW5jZWxlZCk7XHJcbiAgICAgICAgc2V0Q2FuY2VsZWRMZW4oY2FuY2VsZWRMZW4gKyAxKTtcclxuICAgICAgICBhbGVydE1vZGFsKCfsmIjslb3snbQg7Leo7IaM65CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICByZXNwb25zZTogeyBkYXRhLCBzdGF0dXMgfSxcclxuICAgICAgfSA9IGVycm9yO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfsnpjrqrvrkJwg7JqU7LKt7J6F64uI64ukJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbChcclxuICAgICAgICAn7ZWc67KIIOy3qOyGjO2VmOyLnOuptCDri6Tsi5wg65CY64+M66a0IOyImCDsl4bsirXri4jri6QuIOq3uOuemOuPhCDtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjYW5jZWxSZXNlcnZhdGlvbihpZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNlcnZhdGlvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxSZXNlcnZhdGlvbkNvdW50XHJcbiAgICAgICAgICB0b1VzZWRMZW49e3RvVXNlZExlbn1cclxuICAgICAgICAgIHVzZWRMZW49e3VzZWRMZW59XHJcbiAgICAgICAgICBjYW5jZWxlZExlbj17Y2FuY2VsZWRMZW59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGlja2V0IHRleHQ9XCLsmIjslb0g7ZmV7KCVXCIgaW5mb3M9e3RvVXNlZH0gYWN0aW9ucz17WydjYW5jZWwnXX0gaXNHcmVlbiAvPlxyXG4gICAgICAgIDxUaWNrZXQgdGV4dD1cIuydtOyaqSDsmYTro4xcIiBpbmZvcz17dXNlZH0gYWN0aW9ucz17Wyd3cml0ZVJldmlldyddfSAvPlxyXG4gICAgICAgIDxUaWNrZXQgdGV4dD1cIuy3qOyGjOuQnCDsmIjslb1cIiBpbmZvcz17Y2FuY2VsZWR9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvbnRhaW5lcjtcclxuZXhwb3J0IHsgQWN0aW9uQ29udGV4dCB9O1xyXG5cclxuLypcclxuUmVzZXJ2YXRpb25Db250YWluZXIg4oaSIFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaSIFRpY2tldCDihpIgVGlja2V0SGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpIgVGlja2V0SW5mb0xpc3Qg4oaSIFRpY2tldEluZm9cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpc3BsYXlJbmZvLFxyXG4gICAgZGlzcGxheUluZm86IHtcclxuICAgICAgcHJvZHVjdENvbnRlbnQsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgICAgcGxhY2VMb3QsXHJcbiAgICAgIHBsYWNlU3RyZWV0LFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHRlbGVwaG9uZSxcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbkltZ1NyYyxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZShBcnJheSgyKS5maWxsKG51bGwpKTtcclxuICBjb25zdCBsYWJlbHMgPSBbJ+yDgeyEuOygleuztCcsICfsmKTsi5zripTquLgnXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhkaXNwbGF5SW5mbykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNldFZpZXdzKFtcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwcm9kdWN0RGV0YWlsXCI+XHJcbiAgICAgICAgICA8aDI+W+yGjOqwnF08L2gyPlxyXG4gICAgICAgICAgPHA+e3Byb2R1Y3RDb250ZW50fTwvcD5cclxuICAgICAgICAgIDxoMj5b6rO17KeA7IKs7ZWtXTwvaDI+XHJcbiAgICAgICAgPC9hcnRpY2xlPixcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2xvY2F0aW9uSW1nU3JjfWB9IGFsdD1cImxvY2F0aW9uXCIgLz5cclxuICAgICAgICAgIDxoMj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY1RleHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXBpbjRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3BsYWNlTG90fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmV5VGV4dFwiPuyngOuyiDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtwbGFjZVN0cmVldH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVRleHRcIj57cGxhY2VOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2FsbDJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RlbGVwaG9uZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbmRSb2FkXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tcGF0aC1maW5kMlwiIC8+XHJcbiAgICAgICAgICAgICAg6ri47LC+6riwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jYXItZmluZDJcIiAvPlxyXG4gICAgICAgICAgICAgIOuCtOu5hOqyjOydtOyFmFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT4sXHJcbiAgICAgIF0pO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwbGF5SW5mb10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUHJvZHVjdEluZm9cIj5cclxuICAgICAgPFRhYkNvbnRyb2xsZXIgbGFiZWxzPXtsYWJlbHN9IHZpZXdzPXt2aWV3c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdEluZm8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpc3BsYXlJbmZvOiB7fSxcclxuICBsb2NhdGlvbkltZ1NyYzogJycsXHJcbn07XHJcblxyXG5Qcm9kdWN0SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzcGxheUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBwcm9kdWN0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlTG90OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2VTdHJlZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSksXHJcbiAgbG9jYXRpb25JbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNSaXNlYWJsZSwgc2V0SXNSaXNlYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgc2V0SXNSaXNlYWJsZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc1Jpc2VhYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJGb290ZXJcIj5cclxuICAgICAge2lzUmlzZWFibGUgPyAoXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXVwMVwiIC8+XHJcbiAgICAgICAgICB7JyBUT1AnfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjYXV0aW9uXCI+XHJcbiAgICAgICAg64Sk7J2067KEKOyjvCnripQg7Ya17Iug7YyQ66ek7J2YIOuLueyCrOyekOqwgCDslYTri4jrqbAsIOyDge2SiOydmOygleuztCwg6rGw656Y7KGw6rG0LCDsnbTsmqkg67CPXHJcbiAgICAgICAg7ZmY67aIIOuTseqzvCDqtIDroKjtlZwg7J2Y66y07JmAIOyxheyehOydgCDqsIEg7ZqM7JuQ7JeQ6rKMIOyeiOyKteuLiOuLpC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj7CqSBOQVZFUiBDb3JwLjwvc3Bhbj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFJldmlld1N1bW1hcnkgZnJvbSAnLi4vUmV2aWV3U3VtbWFyeSc7XHJcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4uL1Jldmlld0xpc3QnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUmV2aWV3Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXNCcmllZixcclxuICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICByZXZpZXdzOiBleFJldmlld3MsXHJcbiAgICBhdmVyYWdlU2NvcmU6IGV4QXZlcmFnZVNjb3JlLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2F2ZXJhZ2VTY29yZSwgc2V0QXZlcmFnZVNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc01vZGlmaWFibGUsIHNldElzTW9kaWZpYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4RGF0YSwgc2V0RXhEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IHN0eWxlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHN0eWxlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHN0eWxlUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJldmlld3MoZXhSZXZpZXdzKTtcclxuICAgIHNldEF2ZXJhZ2VTY29yZShleEF2ZXJhZ2VTY29yZSA/IE51bWJlcihleEF2ZXJhZ2VTY29yZSkgOiAwKTtcclxuICB9LCBbZXhSZXZpZXdzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyByZXZpZXdz6rCAIOuLrOudvOyhjOydhCDrlYwgYXZlcmFnZVNjb3Jl67CU6r6464qUIGVmZmVjdFxyXG4gICAgaWYgKHJldmlld3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBtb2RpZmllZEF2ZXJhZ2VTY29yZSA9XHJcbiAgICAgICAgcmV2aWV3cy5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiBhY2N1bSArIE51bWJlcihjdXJyZW50LnNjb3JlKSwgMCkgL1xyXG4gICAgICAgIHJldmlld3MubGVuZ3RoO1xyXG4gICAgICBtb2RpZmllZEF2ZXJhZ2VTY29yZSA9IE1hdGgucm91bmQobW9kaWZpZWRBdmVyYWdlU2NvcmUgKiAxMCkgLyAxMDtcclxuICAgICAgc2V0QXZlcmFnZVNjb3JlKG1vZGlmaWVkQXZlcmFnZVNjb3JlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEF2ZXJhZ2VTY29yZSgwKTtcclxuICAgIH1cclxuICB9LCBbcmV2aWV3c10pO1xyXG5cclxuICBjb25zdCBkaXNwbGF5U3RhciA9IChzY29yZSwgbWF4U2NvcmUgPSA1KSA9PiB7XHJcbiAgICAvLyBhdmVyYWdlU2NvcmXsl5Ag66ee6rKMIOuzhOygkOydhCDrpqzthLTtlZjripQg7ZWo7IiYXHJcbiAgICBjb25zdCBmaWxsQ291bnQgPSBNYXRoLmZsb29yKHNjb3JlKTtcclxuICAgIGNvbnN0IG5vdEZpbGxDb3VudCA9IG1heFNjb3JlIC0gTWF0aC5jZWlsKHNjb3JlKTtcclxuICAgIGNvbnN0IHJhdGlvQ291bnQgPSBNYXRoLnJvdW5kKHNjb3JlICogMTApIC8gMTAgLSBmaWxsQ291bnQ7XHJcbiAgICBjb25zdCBzdGFycyA9IF8ucmFuZ2UoMSwgZmlsbENvdW50ICsgMSkubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gPGkga2V5PXt2YWx1ZX0gY2xhc3NOYW1lPVwiZm4gZm4tc3RhcjIgZ2V0U3RhclwiIC8+O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChyYXRpb0NvdW50ID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgaWYgKHN0eWxlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBzdHlsZVJlZi5jdXJyZW50LmlubmVyVGV4dCA9IGAuUmV2aWV3Q29udGFpbmVyIC5SZXZpZXdTdW1tYXJ5IC5yYXRpb1N0YXI6YmVmb3JlIHsgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gUmlnaHQsI2YwMCAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgIHJhdGlvQ291bnQgKiAxMDAsXHJcbiAgICAgICAgICApfSUsI0U2RTZFNiAke01hdGgucm91bmQoKDEgLSByYXRpb0NvdW50KSAqIDEwMCl9JSk7XHJcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICB9YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdHlsZVJlZi5jdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICAgICAgICBzdHlsZVJlZi5jdXJyZW50LmlubmVyVGV4dCA9IGAuUmV2aWV3Q29udGFpbmVyIC5SZXZpZXdTdW1tYXJ5IC5yYXRpb1N0YXI6YmVmb3JlIHsgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gUmlnaHQsI2YwMCAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgIHJhdGlvQ291bnQgKiAxMDAsXHJcbiAgICAgICAgICApfSUsI0U2RTZFNiAke01hdGgucm91bmQoKDEgLSByYXRpb0NvdW50KSAqIDEwMCl9JSk7XHJcbiAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICB9YDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXJzLnB1c2goPGkga2V5PXtmaWxsQ291bnQgKyAxfSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiByYXRpb1N0YXJcIiAvPik7XHJcbiAgICB9XHJcbiAgICBfLnJhbmdlKGZpbGxDb3VudCArIE1hdGguY2VpbChyYXRpb0NvdW50KSArIDEsIDYpLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHN0YXJzLnB1c2goPGkga2V5PXt2YWx1ZX0gY2xhc3NOYW1lPVwiZm4gZm4tc3RhcjIgbm90R2V0U3RhclwiIC8+KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwic3RhckNvdW50XCI+e3N0YXJzfTwvc3Bhbj47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29tbWVudCA9IChyZXNlcnZhdGlvbkluZm9JZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IKt7KCcIOuyhO2KvOydhCDriITrpbTqs6Ag7ZmV7J247J2EIOuIjOuggOydhCDsi5zsnZgg7ZaJ64+ZXHJcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBheGlvcy5kZWxldGUoXHJcbiAgICAgICAgICBgL2FwaS9yZXNlcnZhdGlvbnMvJHtyZXNlcnZhdGlvbkluZm9JZH0vY29tbWVudHNgLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBhbGVydE1vZGFsKCfrpqzrt7DqsIAg7IKt7KCc65CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgICAgICBjb25zdCBtb2RpZmllZFJldmlld3MgPSByZXZpZXdzLmZpbHRlcihcclxuICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS5yZXNlcnZhdGlvbkluZm9JZCAhPT0gcmVzZXJ2YXRpb25JbmZvSWQsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0UmV2aWV3cyhtb2RpZmllZFJldmlld3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBkYXRhLCBzdGF0dXMgfSxcclxuICAgICAgICB9ID0gZXJyb3I7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBhbGVydE1vZGFsKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtRGVsZXRlID0gKHJlc2VydmF0aW9uSW5mb0lkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsgq3soJwg67KE7Yq87J2EIOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25maXJtTW9kYWwoXHJcbiAgICAgICAgJ+umrOu3sOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICBkZWxldGVDb21tZW50KHJlc2VydmF0aW9uSW5mb0lkKSxcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdENvbW1lbnQgPSAocmVzZXJ2YXRpb25JbmZvSWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirwg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgIGAvYXV0aC9lZGl0L3Jlc2VydmF0aW9ucy8ke3Jlc2VydmF0aW9uSW5mb0lkfS9jb21tZW50c2AsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmV2aWV3cy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChyZXZpZXcpID0+IHJldmlldy5yZXNlcnZhdGlvbkluZm9JZCA9PT0gcmVzZXJ2YXRpb25JbmZvSWQsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgeyBzY29yZSwgY29tbWVudCwgY29tbWVudEltYWdlcyB9ID0gcmV2aWV3c1tpbmRleF07XHJcbiAgICAgICAgICBzZXRFeERhdGEoe1xyXG4gICAgICAgICAgICBzY29yZSxcclxuICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgaWQ6IHJlc2VydmF0aW9uSW5mb0lkLFxyXG4gICAgICAgICAgICBpbWFnZVNyYzogY29tbWVudEltYWdlcy5sZW5ndGggPyBjb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZSA6ICcnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRJc01vZGlmaWFibGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IGRhdGEsIHN0YXR1cyB9LFxyXG4gICAgICAgIH0gPSBlcnJvcjtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1FZGl0ID0gKHJlc2VydmF0aW9uSW5mb0lkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq87J2EIOuIhOultOqzoCDsiJjsoJUg67KE7Yq87J2EIOuLpOyLnCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIChzdWJtaXQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYykgPT4ge1xyXG4gICAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDsiJjsoJXtlZjsi5zqsqDsirXri4jquYw/JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUHJvY2Vzc2VkID0gc3VibWl0KCk7XHJcbiAgICAgICAgaWYgKGlzUHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHJldmlld3MuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAocmV2aWV3KSA9PiByZXZpZXcucmVzZXJ2YXRpb25JbmZvSWQgPT09IHJlc2VydmF0aW9uSW5mb0lkLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkUmV2aWV3cyA9IFsuLi5yZXZpZXdzXTtcclxuICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudCA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLnNjb3JlID1cclxuICAgICAgICAgICAgdHlwZW9mIHNjb3JlID09PSAnc3RyaW5nJyA/IHNjb3JlIDogYCR7c2NvcmV9LjBgO1xyXG4gICAgICAgICAgLyogXHJcbiAgICAgICAgICAqIDEuIOq4sOyhtOyXkCDtjIzsnbzsnbQg7JeG64qUIOqyveyasFxyXG5cclxuICAgICAgICAgIDEuMSDtjIzsnbwg7LaU6rCAIFggLT4gcmVxLmZpbGXsl5Ag66y866aw6rKMIOyXhuydjFxyXG4gICAgICAgICAgMS4yIO2MjOydvCDstpTqsIAgLT4gcmVxLmZpbGXsl5Ag66y866aw6rKMIOyeiOydjFxyXG5cclxuICAgICAgICAgIDIuIOq4sOyhtOyXkCDtjIzsnbzsnbQg7J6I64qUIOqyveyasFxyXG5cclxuICAgICAgICAgIDIuMSDtjIzsnbwg7IKt7KCcIC0+IHJlcS5maWxl7JeQIOusvOumsOqyjCDsl4bsnYxcclxuICAgICAgICAgIDIuMiDtjIzsnbwg6re464yA66GcIC0+IHJlcS5maWxl7JeQIOusvOumsOqyjCDsl4bsnYxcclxuICAgICAgICAgIDIuMyDtjIzsnbwg7LaU6rCAKOyImOyglSkgLT4gcmVxLmZpbGXsl5Ag66y866aw6rKMIOyeiOydjFxyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgIGlmIChpbWFnZVNyYykge1xyXG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAvLyAxLjJcclxuICAgICAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXNbMF0gPSB7fTtcclxuICAgICAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXNbMF0uc2F2ZUZpbGVOYW1lID0gaW1hZ2VTcmM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gMi4yLDIuM1xyXG4gICAgICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgPSBpbWFnZVNyYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIDEuMeydgCDqt7jrjIDroZwg65Gs64+EIOuQqFxyXG4gICAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXMgPSBbXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFJldmlld3MobW9kaWZpZWRSZXZpZXdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXhEYXRhKHt9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybUNhbmNlbCA9ICgpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirzsnYQg64iE66W06rOgIOy3qOyGjOulvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgY29uZmlybU1vZGFsKCfrpqzrt7Ag7IiY7KCV7J2EIOy3qOyGjO2VmOyLnOqyoOyKteuLiOq5jD8nLCAoKSA9PiB7XHJcbiAgICAgIC8vIOq3uOuMgOuhnCDsnojsnYw7XHJcbiAgICAgIHNldElzTW9kaWZpYWJsZShmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmV2aWV3Q29udGFpbmVyXCI+XHJcbiAgICAgIDxSZXZpZXdTdW1tYXJ5XHJcbiAgICAgICAgYXZlcmFnZVNjb3JlPXthdmVyYWdlU2NvcmV9XHJcbiAgICAgICAgcmV2aWV3Q291bnQ9e3Jldmlld3MubGVuZ3RofVxyXG4gICAgICAgIGRpc3BsYXlTdGFyPXtkaXNwbGF5U3Rhcn1cclxuICAgICAgLz5cclxuICAgICAge3Jldmlld3MubGVuZ3RoID8gKFxyXG4gICAgICAgIDxSZXZpZXdMaXN0XHJcbiAgICAgICAgICByZXZpZXdzPXtyZXZpZXdzfVxyXG4gICAgICAgICAgaXNCcmllZj17aXNCcmllZn1cclxuICAgICAgICAgIGlzTW9kaWZpYWJsZT17aXNNb2RpZmlhYmxlfVxyXG4gICAgICAgICAgZXhEYXRhPXtleERhdGF9XHJcbiAgICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlfVxyXG4gICAgICAgICAgY29uZmlybUNhbmNlbD17Y29uZmlybUNhbmNlbH1cclxuICAgICAgICAgIGNvbmZpcm1FZGl0PXtjb25maXJtRWRpdH1cclxuICAgICAgICAgIGVkaXRDb21tZW50PXtlZGl0Q29tbWVudH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICAgIHtyZXZpZXdzLmxlbmd0aCA/IChcclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYWxhcm0xXCIgLz5cclxuICAgICAgICAgICAg64Sk7J2067KEIOyYiOyVveydhCDthrXtlbQg7Iuk7KCcIOuwqeusuO2VnCDsnbTsmqnsnpDqsIAg64Ko6ri0IO2PieqwgOyeheuLiOuLpC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0JyaWVmICYmIHJldmlld3MubGVuZ3RoID4gNSA/IChcclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGM0Y1RjYnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2MwYzBjMCcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjbGljazogYC9yZXZpZXcvJHtkaXNwbGF5SW5mb0lkfWAsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7J+yYiOunpOyekCDrpqzrt7Ag642U67O06riwICd9XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWZvcndhcmQxXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0NvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNCcmllZjogdHJ1ZSxcclxuICByZXZpZXdzOiBbXSxcclxuICBhdmVyYWdlU2NvcmU6ICcnLFxyXG59O1xyXG5cclxuUmV2aWV3Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXZlcmFnZVNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJldmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBwcm9kdWN0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgcmVzZXJ2YXRpb25FbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgcmVzZXJ2YXRpb25JbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjb21tZW50SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgZGVsZXRlRmxhZzogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICAgIHNhdmVGaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgIH0pLFxyXG4gICksXHJcbiAgaXNCcmllZjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdDb250YWluZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9ICfrhKTsnbTrsoQg7JiI7JW9IOuhnOq3uOyduCc7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzVGV4dCB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2F1dGgvbG9naW4nLCB7IGVtYWlsIH0pO1xyXG4gICAgICBpZiAoc3RhdHVzVGV4dCA9PT0gJ09LJykge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL215cmVzZXJ2YXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHJlc3BvbnNlOiB7IGRhdGEsIHN0YXR1cyB9LFxyXG4gICAgICB9ID0gZXJyb3I7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuYmx1cigpO1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTG9naW5Gb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCb3hcIj5cclxuICAgICAgICAgIDxoMT7ruYTtmozsm5Ag7JiI7JW97ZmV7J24PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD7smIjslb3snpAg7J2066mU7J28IOyeheugpTwvcD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICBzZXRFbWFpbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwieHh4eHhAbmF2ZXIuY29tXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi64K0IOyYiOyVvSDtmZXsnbhcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVG90YWxDb3VudCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdENvdW50IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiVG90YWxDb3VudFwiPlxyXG4gICAgICA8cD5cclxuICAgICAgICDrsJTroZwg7JiI66ekIOqwgOuKpe2VnCDtlonsgqzqsIBcclxuICAgICAgICA8c3Ryb25nPntgICR7cHJvZHVjdENvdW50feqwnCBgfTwvc3Ryb25nPlxyXG4gICAgICAgIOyeiOyKteuLiOuLpFxyXG4gICAgICA8L3A+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblRvdGFsQ291bnQucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG90YWxDb3VudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdEJveCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1JbmZvOiB7XHJcbiAgICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICAgIHByb2R1Y3RJbWFnZVVybCxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHByb2R1Y3RDb250ZW50LFxyXG4gICAgfSxcclxuICAgIHRleHRMaW1pdCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzRm9sZCwgc2V0SXNGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc0ljb25TaG93aW5nLCBzZXRJc0ljb25TaG93aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkZXRhaWxUZXh0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdGV4dE9iajtcclxuICBsZXQgdHJpbW1lZFRleHQgPSBwcm9kdWN0Q29udGVudC50cmltKCk7XHJcbiAgdHJpbW1lZFRleHQgPSB0cmltbWVkVGV4dC5yZXBsYWNlKCdcXG4nLCAnJyk7XHJcbiAgaWYgKHRyaW1tZWRUZXh0Lmxlbmd0aCA+IHRleHRMaW1pdCkge1xyXG4gICAgY29uc3QgdGV4dFNpbXBsZSA9IHRyaW1tZWRUZXh0LnNsaWNlKDAsIHRleHRMaW1pdCk7XHJcbiAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UodGV4dExpbWl0KTtcclxuICAgIHRleHRPYmogPSB7IHNpbXBsZTogdGV4dFNpbXBsZSwgZGV0YWlsOiB0ZXh0RGV0YWlsIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHRleHRPYmogPSB7IHNpbXBsZTogdHJpbW1lZFRleHQsIGRldGFpbDogJycgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dBbmRIaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzRm9sZCkge1xyXG4gICAgICBzZXRJc0ZvbGQoZmFsc2UpO1xyXG4gICAgICAkKGRldGFpbFRleHQuY3VycmVudCkuc2xpZGVEb3duKDEwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0ZvbGQodHJ1ZSk7XHJcbiAgICAgICQoZGV0YWlsVGV4dC5jdXJyZW50KS5zbGlkZVVwKDEwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlByb2R1Y3RCb3hcIj5cclxuICAgICAgPExpbmsgdG89e2AvZGV0YWlsLyR7ZGlzcGxheUluZm9JZH1gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwaG90b1wiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIvJHtwcm9kdWN0SW1hZ2VVcmx9XCIpYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cclxuICAgICAgICAgIDxoMT57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgICAgICA8aDI+e3BsYWNlTmFtZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5UZXh0XCJcclxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzSWNvblNob3dpbmcodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0ljb25TaG93aW5nKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RleHRPYmouZGV0YWlsID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAge3RleHRPYmouc2ltcGxlfVxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG90c1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzRm9sZCA/ICdpbmxpbmUnIDogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9yZURlc2NcIlxyXG4gICAgICAgICAgICAgICAgICByZWY9e2RldGFpbFRleHR9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGV4dE9iai5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm4gJHtpc0ZvbGQgPyAnZm4tZG90czInIDogJ2ZuLXVwMid9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FuZEhpZGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzSWNvblNob3dpbmcgPyAnIzAwMCcgOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cD57dGV4dE9iai5zaW1wbGV9PC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0Qm94LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0ZXh0TGltaXQ6IDEwMCxcclxufTtcclxuXHJcblByb2R1Y3RCb3gucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1JbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdEltYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIHRleHRMaW1pdDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RCb3g7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmljZVR5cGVNYXBwZXIsIHRyYW5zZm9ybU1vbmV5VW5pdCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgQWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL1Jlc2VydmF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFRpY2tldEluZm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIHJlc2VydmF0aW9uSW5mb0lkLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgICByZXNlcnZhdGlvbk5hbWUsXHJcbiAgICAgIHJlc2VydmF0aW9uVGVsLFxyXG4gICAgICBwcmljZUluZm8sXHJcbiAgICAgIHBsYWNlTmFtZSxcclxuICAgICAgdG90YWxQcmljZSxcclxuICAgICAgcHJvZHVjdElkLFxyXG4gICAgICBpc0NvbW1lbnRFeGlzdCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24gfSA9IHVzZUNvbnRleHQoQWN0aW9uQ29udGV4dCk7XHJcbiAgY29uc3QgcmVzZXJ2YXRpb25TdW1tYXJ5ID0gcHJpY2VJbmZvXHJcbiAgICAucmVkdWNlKChhY2N1bSwgY3VycmVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7YWNjdW19ICR7cHJpY2VUeXBlTWFwcGVyKGN1cnJlbnQucHJpY2VUeXBlTmFtZSl9ICR7XHJcbiAgICAgICAgY3VycmVudC5jb3VudFxyXG4gICAgICB9IOunpCxgO1xyXG4gICAgfSwgJycpXHJcbiAgICAuc2xpY2UoMCwgLTEpO1xyXG5cclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSAoYWN0aW9ucykgPT4ge1xyXG4gICAgaWYgKGFjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBub3RlcyA9IFtdO1xyXG4gICAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgICBub3Rlcy5wdXNoKHtcclxuICAgICAgICAgICAgc3R5bGUsXHJcbiAgICAgICAgICAgIGNsaWNrOiBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24ocmVzZXJ2YXRpb25JbmZvSWQpLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogJ+y3qOyGjCcsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3dyaXRlUmV2aWV3JyAmJiAhaXNDb21tZW50RXhpc3QpIHtcclxuICAgICAgICAgIG5vdGVzLnB1c2goe1xyXG4gICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgY2xpY2s6IGAvcmV2aWV3d3JpdGUvJHtwcm9kdWN0SWR9YCxcclxuICAgICAgICAgICAgY2hpbGRyZW46ICfsmIjrp6TsnpAg66as67ewIOuCqOq4sOq4sCcsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAobm90ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxCdXR0b25CdW5jaCBtYXJnaW49e1swLCAwLCAxNSwgMF19IG5vdGVzPXtub3Rlc30gLz47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiVGlja2V0SW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFNlY3Rpb25cIj5cclxuICAgICAgICA8aDI+e2BOby4ke1N0cmluZyhyZXNlcnZhdGlvbkluZm9JZCkucGFkU3RhcnQoOCwgJzAnKX1gfTwvaDI+XHJcbiAgICAgICAgPGgxPntkZXNjcmlwdGlvbn08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVTZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHA+7J287KCVPC9wPlxyXG4gICAgICAgICAgPHA+e3Jlc2VydmF0aW9uRGF0ZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHA+64K07JetPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICA8cD7smIjrp6TsnpAg7J2066aEPC9wPlxyXG4gICAgICAgICAgICA8cD57cmVzZXJ2YXRpb25OYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICA8cD7smIjrp6TsnpAg7KCE7ZmU67KI7Zi4PC9wPlxyXG4gICAgICAgICAgICA8cD57cmVzZXJ2YXRpb25UZWx9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpCDrp6TsiJg8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpY2tldFwiPntyZXNlcnZhdGlvblN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHA+7J6l7IaMPC9wPlxyXG4gICAgICAgICAgPHA+e3BsYWNlTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVNlY3Rpb25cIj5cclxuICAgICAgICA8cD7qsrDsoJwg6riI7JWhPC9wPlxyXG4gICAgICAgIDxwPntgJHt0cmFuc2Zvcm1Nb25leVVuaXQodG90YWxQcmljZSl9IOybkGB9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NyZWF0ZUJ1dHRvbihhY3Rpb25zKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcblRpY2tldEluZm8ucHJvcFR5cGVzID0ge1xyXG4gIGluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICByZXNlcnZhdGlvbkluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvblRlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0b3RhbFByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIGlzQ29tbWVudEV4aXN0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgcHJpY2VJbmZvOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBwcmljZVR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgfSkuaXNSZXF1aXJlZCxcclxuICAgICkuaXNSZXF1aXJlZCxcclxuICB9KSxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG5pbXBvcnQgUmVzZXJ2ZUZvcm0gZnJvbSAnLi4vUmVzZXJ2ZUZvcm0nO1xyXG5pbXBvcnQgUmVzZXJ2ZURlc2MgZnJvbSAnLi4vUmVzZXJ2ZURlc2MnO1xyXG5pbXBvcnQgTWFpbkltYWdlIGZyb20gJy4uL01haW5JbWFnZSc7XHJcblxyXG5jb25zdCBSZXNlcnZlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGlzcGxheUluZm9JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3Byb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKTtcclxuICAgICAgICBzZXRQcm9kdWN0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9yZXNlcnZhdGlvbnMvZGF0ZScpO1xyXG4gICAgICAgIHNldERhdGUoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdERhdGEuZGlzcGxheUluZm8pIHtcclxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBg7JiI7JW9ICR7cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9ufWA7XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3REYXRhXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdERhdGEucHJvZHVjdEltYWdlcykge1xyXG4gICAgICBwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnR5cGUgPT09ICdtYScpIHtcclxuICAgICAgICAgIHNldEltYWdlU3JjKHZhbHVlLnNhdmVGaWxlTmFtZSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcHJvZHVjdERhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzZXJ2ZUNvbnRhaW5lclwiPlxyXG4gICAgICA8TmF2QmFyXHJcbiAgICAgICAgbmFtZT17XHJcbiAgICAgICAgICBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbyAmJiBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNYWluSW1hZ2Ugc3JjPXtgLyR7aW1hZ2VTcmN9YH0gYWx0PVwibWFpbiBpbWFnZVwiIC8+XHJcbiAgICAgIDxSZXNlcnZlRGVzY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvICYmIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBwbGFjZT17cHJvZHVjdERhdGEuZGlzcGxheUluZm8gJiYgcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucGxhY2VMb3R9XHJcbiAgICAgICAgc3RhcnREYXRlPXtkYXRlLnN0YXJ0RGF0ZX1cclxuICAgICAgICBlbmREYXRlPXtkYXRlLmVuZERhdGV9XHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgLz5cclxuICAgICAgPFJlc2VydmVGb3JtXHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8gJiYgcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdElkfVxyXG4gICAgICAgIHJlc2VydmF0aW9uRGF0ZT17ZGF0ZS5yZXNlcnZhdGlvbkRhdGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZUNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuaW1wb3J0IERldGFpbEltYWdlIGZyb20gJy4uL0RldGFpbEltYWdlJztcclxuaW1wb3J0IFByb2R1Y3REZXNjIGZyb20gJy4uL1Byb2R1Y3REZXNjJztcclxuaW1wb3J0IEV2ZW50SW5mbyBmcm9tICcuLi9FdmVudEluZm8nO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuLi9Qcm9kdWN0SW5mbyc7XHJcblxyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2Rpc2NvdW50SW5mbywgc2V0RGlzY291bnRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvKSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0RGF0YV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZEltYWdlcyA9IGRhdGEucHJvZHVjdEltYWdlcy5maWx0ZXIoXHJcbiAgICAgICAgICAodmFsdWUpID0+IHZhbHVlLnR5cGUgIT09ICd0aCcsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRQcm9kdWN0RGF0YSh7IC4uLmRhdGEsIHByb2R1Y3RJbWFnZXM6IG1vZGlmaWVkSW1hZ2VzIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3REYXRhLnByb2R1Y3RQcmljZXMpIHtcclxuICAgICAgY29uc3QgaW5mbyA9IFtdO1xyXG4gICAgICBwcm9kdWN0RGF0YS5wcm9kdWN0UHJpY2VzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmRpc2NvdW50UmF0ZSAmJiBOdW1iZXIodmFsdWUuZGlzY291bnRSYXRlKSA+IE51bWJlci5FUFNJTE9OKSB7XHJcbiAgICAgICAgICBpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIGAke3ByaWNlVHlwZU1hcHBlcih2YWx1ZS5wcmljZVR5cGVOYW1lKX0gJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgIHZhbHVlLmRpc2NvdW50UmF0ZSxcclxuICAgICAgICAgICAgKX0lYCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0RGlzY291bnRJbmZvKGluZm8pO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0RGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJEZXRhaWxDb250YWluZXJcIj5cclxuICAgICAgPERldGFpbEltYWdlXHJcbiAgICAgICAgaW1hZ2VzPXtwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzfVxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvICYmIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3REZXNjXHJcbiAgICAgICAgdGV4dD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8gJiYgcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdENvbnRlbnR9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtkaXNjb3VudEluZm8ubGVuZ3RoID8gPEV2ZW50SW5mbyBkaXNjb3VudEluZm89e2Rpc2NvdW50SW5mb30gLz4gOiAnJ31cclxuICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZWM4MDAnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcDogJ25vbmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGljazogYC9yZXNlcnZlLyR7ZGlzcGxheUluZm9JZH1gLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogKFxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tbmJvb2tpbmctY2FsZW5kZXIyXCIgLz5cclxuICAgICAgICAgICAgICAgIHsnIOyYiOunpO2VmOq4sCd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgICBhdmVyYWdlU2NvcmU9e3Byb2R1Y3REYXRhLmF2ZXJhZ2VTY29yZX1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3RJbmZvXHJcbiAgICAgICAgZGlzcGxheUluZm89e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvfVxyXG4gICAgICAgIGxvY2F0aW9uSW1nU3JjPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvSW1hZ2UgJiZcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvSW1hZ2Uuc2F2ZUZpbGVOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZXJJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmFtZSxcclxuICAgIHRlbGVwaG9uZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgdG90YWxUaWNrZXQsXHJcbiAgICBkaXNwYXRjaCxcclxuICAgIGlzVmVyaWZpZWROYW1lLFxyXG4gICAgaXNWZXJpZmllZFRlbCxcclxuICAgIGlzVmVyaWZpZWRFbWFpbCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IG1ha2VBbGVydCA9IChpZCwgdGV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxlcnRNZXNzYWdlXCI+e3RleHR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUmVzZXJ2ZXJJbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXJ2ZXJIZWFkZXJcIj5cclxuICAgICAgICA8aDI+7JiI66ek7J6QIOygleuztDwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICB7JyDtlYTsiJjsnoXroKUnfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFJlc2VydmVyXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICB7JyDsmIjrp6TsnpAnfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25OYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2Zjeq4uOuPmVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9OQU1FJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX05BTUUnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkTmFtZVxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdOYW1lJywgJ+ydtOumhOyXkOuKlCDqs7XrsLHsnbQg7J6I7Ja07ISc64qUIOyViOuQqeuLiOuLpC4nKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFRlbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAgeycg7Jew65297LKYJ31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25UZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDEwLTAwMDAtMDAwMFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9URUwnLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ1RlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ1RlbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1RFTCcgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ1RlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ1RlbCcpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkVGVsXHJcbiAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICA6IG1ha2VBbGVydCgnYWxlcnRXcm9uZ1RlbCcsICfsoITtmZTrsojtmLgg7ZiV7Iud7J20IOunnuyngCDslYrsirXri4jri6QnKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dEVtYWlsXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICB7JyDsnbTrqZTsnbwnfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uRW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieHh4eHh4QG5hdmVyLmNvbVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9FTUFJTCcsIHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJ2FsZXJ0V3JvbmdFbWFpbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ0VtYWlsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfRU1BSUwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdFbWFpbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ0VtYWlsJykuc2xpZGVEb3duKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwib3ZlcmFsbFJlc2VydmF0aW9uXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiBzdHlsZT17eyBjb2xvcjogJ3RyYW5zcGFyZW50JyB9fSAvPlxyXG4gICAgICAgICAgICB7JyDsmIjrp6TrgrTsmqknfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2Ake3Jlc2VydmF0aW9uRGF0ZX0sIOy0nSAke3RvdGFsVGlja2V0feunpGB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkRW1haWxcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nRW1haWwnLCAn7J2066mU7J28IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlckluZm8ucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRvdGFsVGlja2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZE5hbWU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZFRlbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlckluZm87XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RDb250YWluZXIgZnJvbSAnLi4vUHJvZHVjdENvbnRhaW5lcic7XHJcblxyXG5jb25zdCBNYWluVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGxlZnRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMCk7XHJcbiAgY29uc3QgcmlnaHRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMSk7XHJcblxyXG4gIHJldHVybiBwcm9kdWN0cy5sZW5ndGggPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5WaWV3XCI+XHJcbiAgICAgIDxQcm9kdWN0Q29udGFpbmVyIGNsYXNzTmFtZT1cImxlZnRcIj57bGVmdFByb2R1Y3RzfTwvUHJvZHVjdENvbnRhaW5lcj5cclxuICAgICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPVwicmlnaHRcIj57cmlnaHRQcm9kdWN0c308L1Byb2R1Y3RDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNYWluVmlld1wiIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5WaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9kdWN0czogW10sXHJcbn07XHJcblxyXG5NYWluVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5WaWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG5pbXBvcnQgRGV0YWlsQ29udGFpbmVyIGZyb20gJy4uL0RldGFpbENvbnRhaW5lcic7XHJcbmltcG9ydCBSZXNlcnZlQ29udGFpbmVyIGZyb20gJy4uL1Jlc2VydmVDb250YWluZXInO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25Db250YWluZXIgZnJvbSAnLi4vUmVzZXJ2YXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgUHJvbW90aW9uSW1hZ2UgZnJvbSAnLi4vUHJvbW90aW9uSW1hZ2UnO1xyXG5pbXBvcnQgV3JpdGVSZXZpZXdDb250YWluZXIgZnJvbSAnLi4vV3JpdGVSZXZpZXdDb250YWluZXInO1xyXG5pbXBvcnQgUmV2aWV3UHJvdmlkZXIgZnJvbSAnLi4vUmV2aWV3UHJvdmlkZXInO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi9NYWluQ29udGFpbmVyJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QnJvd3NlclJvdXRlcj5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsLzpkaXNwbGF5SW5mb0lkXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIGlzVHJhbnNwYXJlbnQgLz5cclxuICAgICAgICAgIDxEZXRhaWxDb250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Jvb2tpbmdsb2dpblwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPExvZ2luRm9ybSAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbXlyZXNlcnZhdGlvblwiPlxyXG4gICAgICAgICAgPE5hdkJhciBpc0xvZ291dGFibGUgLz5cclxuICAgICAgICAgIDxSZXNlcnZhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVzZXJ2ZS86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgPFJlc2VydmVDb250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jldmlldy86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgPFJldmlld1Byb3ZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvcmV2aWV3d3JpdGUvOnByb2R1Y3RJZFwiXHJcbiAgICAgICAgICBjb21wb25lbnQ9e1dyaXRlUmV2aWV3Q29udGFpbmVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICA8UHJvbW90aW9uSW1hZ2UgLz5cclxuICAgICAgICAgIDxNYWluQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgIHsvKiA0MDQgbm90IGZvdW5k7J246rG4IOuCmO2DgOuCtOqyjCAqL31cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIDwvQnJvd3NlclJvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBSZXZpZXdQcm92aWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IFtwcm9kdWN0RGF0YSwgc2V0UHJvZHVjdERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKTtcclxuICAgICAgICBzZXRQcm9kdWN0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbykge1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IGDrpqzrt7AgOiAke3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvbn1gO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0RGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXZpZXdQcm92aWRlclwiPlxyXG4gICAgICA8TmF2QmFyXHJcbiAgICAgICAgbmFtZT17XHJcbiAgICAgICAgICBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbyAmJiBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZXZpZXdDb250YWluZXJcclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIGF2ZXJhZ2VTY29yZT17cHJvZHVjdERhdGEuYXZlcmFnZVNjb3JlfVxyXG4gICAgICAgIHJldmlld3M9e3Byb2R1Y3REYXRhLmNvbW1lbnRzfVxyXG4gICAgICAgIGlzQnJpZWY9e2ZhbHNlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1Byb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBJbWFnZVRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZWdyZWUsIGltYWdlTGVuLCB0aXRsZSwgbGVmdFNjcm9sbCwgcmlnaHRTY3JvbGwgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbWFnZVRpdGxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRpbmdcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyaWdodFwiPntkZWdyZWUgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgIHtgIC8gJHtpbWFnZUxlbn1gfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICB7aW1hZ2VMZW4gPiAxID8gKFxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1iYWNrd2FyZDJcIiBvbkNsaWNrPXtsZWZ0U2Nyb2xsfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICB7aW1hZ2VMZW4gPiAxID8gKFxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1mb3J3YXJkMlwiIG9uQ2xpY2s9e3JpZ2h0U2Nyb2xsfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlVGl0bGUucHJvcFR5cGVzID0ge1xyXG4gIGRlZ3JlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBsZWZ0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxuICByaWdodFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRpdGxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUaWNrZXRIZWFkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0ZXh0LCBpc0dyZWVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BUaWNrZXRIZWFkICR7aXNHcmVlbiA/ICdncmVlbicgOiAnZ3JleSd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TGVmdFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TWlkZGxlXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2NoZWNrMlwiIC8+XHJcbiAgICAgICAgICB7YCAke3RleHR9YH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldFJpZ2h0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRIZWFkLnByb3BUeXBlcyA9IHtcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaXNHcmVlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEhlYWQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVE9TID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc0NoZWNrZWQsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNDb2xsZWN0aW9uRm9sZCwgc2V0SXNDb2xsZWN0aW9uRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPZmZlckZvbGQsIHNldElzT2ZmZXJGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBmb2xkVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7JyDsoJHquLAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi11cDJcIiAvPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNob3dUZXh0ID0gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHsnIOuztOq4sCd9XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWRvd24yXCIgLz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xsZWN0aW9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDb2xsZWN0aW9uRm9sZCkge1xyXG4gICAgICBzZXRJc0NvbGxlY3Rpb25Gb2xkKGZhbHNlKTtcclxuICAgICAgJCgnLlRPUyAuY29sbGVjdGlvblVzZVRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzQ29sbGVjdGlvbkZvbGQodHJ1ZSk7XHJcbiAgICAgICQoJy5UT1MgLmNvbGxlY3Rpb25Vc2VUZXJtJykuc2xpZGVVcCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9mZmVyQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNPZmZlckZvbGQpIHtcclxuICAgICAgc2V0SXNPZmZlckZvbGQoZmFsc2UpO1xyXG4gICAgICAkKCcuVE9TIC5vZmZlclRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzT2ZmZXJGb2xkKHRydWUpO1xyXG4gICAgICAkKCcuVE9TIC5vZmZlclRlcm0nKS5zbGlkZVVwKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcml0bGNlIGNsYXNzTmFtZT1cIlRPU1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbEFncmVlbWVudFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIG5hbWU9XCJUT1NDaGVja1wiXHJcbiAgICAgICAgICBpZD1cIlRPU0NoZWNrXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX1RPUycsIGNoZWNrZWQgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiVE9TQ2hlY2tcIj57JyAg7J207Jqp7J6QIOyVveq0gCDsoITssrTrj5nsnZgnfTwvbGFiZWw+XHJcbiAgICAgICAgPHA+7ZWE7IiYIOuPmeydmDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fYXJyX2lwYzJcIiAvPlxyXG4gICAgICAgICAg6rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uVXNlQWdyZWVtZW50XCIgb25DbGljaz17aGFuZGxlQ29sbGVjdGlvbkNsaWNrfT5cclxuICAgICAgICAgIHtpc0NvbGxlY3Rpb25Gb2xkID8gc2hvd1RleHQgOiBmb2xkVGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uVXNlVGVybVwiPlxyXG4gICAgICAgICZsdDvqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2YJmd0O1xyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDEuIOyImOynke2VreuqqSA6IFvtlYTsiJhdIOydtOumhCwg7Jew65297LKYLCBb7ISg7YOdXSDsnbTrqZTsnbzso7zshoxcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAyLiDsiJjsp5Eg67CPIOydtOyaqeuqqeyggSA6IOyCrOyXheyekO2ajOybkOqzvCDsmIjslb3snbTsmqnsnpDsnZgg7JuQ7Zmc7ZWcIOqxsOuemCDsp4TtloksXHJcbiAgICAgICAg6rOg6rCd7IOB64u0LCDrtojrp4zsspjrpqwg65OxIOuvvOybkCDsspjrpqwsIOu2hOyfgeyhsOyglSDtlbTqsrDsnYQg7JyE7ZWcIOq4sOuhneuztOyhtCwg64Sk7J2067KEXHJcbiAgICAgICAg7JiI7JW9IOydtOyaqSDtm4Qg66as67ew7J6R7ISx7JeQIOuUsOuluCDrhKTsnbTrsoTtjpjsnbQg7Y+s7J247Yq4IOyngOq4iSDrsI8g6rSA66CoIOyViOuCtFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDMuIOuztOq0gOq4sOqwhFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIC0g7ZqM7JuQ7YOI7Ye0IOuTsSDqsJzsnbjsoJXrs7Qg7J207Jqp66qp7KCBIOuLrOyEsSDsi5zquYzsp4Ag67O06rSAXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgLSDri6gsIOyDgeuylSDrsI8g4oCY7KCE7J6Q7IOB6rGw656YIOuTseyXkOyEnOydmCDshozruYTsnpAg67O07Zi47JeQIOq0gO2VnCDrspXrpaDigJkg65OxIOq0gOugqFxyXG4gICAgICAgIOuyleugueyXkCDsnZjtlZjsl6wg7J287KCVIOq4sOqwhCDrs7TqtIDsnbQg7ZWE7JqU7ZWcIOqyveyasOyXkOuKlCDtlbTri7kg6riw6rCEIOuPmeyViCDrs7TqtIDtlahcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA0LiDrj5nsnZgg6rGw67aA6raMIOuTseyXkCDrjIDtlZwg6rOg7KeAOiDsoJXrs7Tso7zssrTripQg6rCc7J247KCV67O07J2YIOyImOynkSDrsI8g7J207JqpIOuPmeydmOulvFxyXG4gICAgICAgIOqxsOu2gO2VoCDqtozrpqzqsIAg7J6I7Jy864KYLCDsnbQg6rK97JqwIOyDge2SiCDrsI8g7ISc67mE7IqkIOyYiOyVveydtCDsoJztlZzrkKAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVlbWVudFwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2Fycl9pcGMyXCIgLz5cclxuICAgICAgICAgIOqwnOyduOygleuztCDsoJwz7J6QIOygnOqztSDrj5nsnZhcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJBZ3JlZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVPZmZlckNsaWNrfT5cclxuICAgICAgICAgIHtpc09mZmVyRm9sZCA/IHNob3dUZXh0IDogZm9sZFRleHR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJUZXJtXCI+XHJcbiAgICAgICAgJmx0O+qwnOyduOygleuztCDsoJwz7J6QIOygnOqztSDrj5nsnZgmZ3Q7XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMS4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpAgOiDrr7jrlJTslrTslaTslYTtirhcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAyLiDsoJzqs7XtlZjripQg6rCc7J247KCV67O0IO2VreuqqSA6IFvtlYTsiJhdIOuEpOydtOuyhCDslYTsnbTrlJQsIOydtOumhCwg7Jew65297LKYIFvshKDtg51dXHJcbiAgICAgICAg7J2066mU7J28IOyjvOyGjFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDMuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6Q7J2YIOydtOyaqeuqqeyggSA6IOyCrOyXheyekO2ajOybkOqzvCDsmIjslb3snbTsmqnsnpDsnZgg7JuQ7Zmc7ZWcXHJcbiAgICAgICAg6rGw656YIOynhO2WiSwg6rOg6rCd7IOB64u0LCDrtojrp4zsspjrpqwg65OxIOuvvOybkCDsspjrpqwsIOyEnOu5hOyKpCDsnbTsmqnsl5Ag65Sw66W4IOyEpOusuOyhsOyCrFxyXG4gICAgICAgIOuwjyDtmJztg50g7KCc6rO1LCDrtoTsn4HsobDsoJUg7ZW06rKw7J2EIOychO2VnCDquLDroZ3rs7TsobRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA0LiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekOydmCDqsJzsnbjsoJXrs7Qg67O07JygIOuwjyDsnbTsmqnquLDqsIQgOiDqsJzsnbjsoJXrs7RcclxuICAgICAgICDsnbTsmqnrqqnsoIEg64us7ISxIOyLnCDquYzsp4Ag67O06rSA7ZWp64uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDUuIOuPmeydmCDqsbDrtoDqtowg65Ox7JeQIOuMgO2VnCDqs6Dsp4AgOiDsoJXrs7Tso7zssrTripQg6rCc7J247KCV67O0IOygnOqztSDrj5nsnZjrpbwg6rGw67aA7ZWgXHJcbiAgICAgICAg6raM66as6rCAIOyeiOycvOuCmCwg7J20IOqyveyasCDsg4Htkogg67CPIOyEnOu5hOyKpCDsmIjslb3snbQg7KCc7ZWc65CgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvYXJpdGxjZT5cclxuICApO1xyXG59O1xyXG5cclxuVE9TLnByb3BUeXBlcyA9IHtcclxuICBpc0NoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT1M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRpY2tldEluZm8gZnJvbSAnLi4vVGlja2V0SW5mbyc7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIGFjdGlvbnMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8b2wgY2xhc3NOYW1lPVwiVGlja2V0SW5mb0xpc3RcIj5cclxuICAgICAge2luZm9zLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxUaWNrZXRJbmZvIGtleT17aW5kZXh9IGluZm89e3ZhbHVlfSBhY3Rpb25zPXthY3Rpb25zfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbmZvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mb0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciwgdHJhbnNmb3JtTW9uZXlVbml0IH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZURlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBwbGFjZSwgc3RhcnREYXRlLCBlbmREYXRlLCBwcm9kdWN0UHJpY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJpY2VUZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJpY2VMaXN0ID0gcHJvZHVjdFByaWNlcy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9ICR7dHJhbnNmb3JtTW9uZXlVbml0KFxyXG4gICAgICAgIHZhbHVlLnByaWNlLFxyXG4gICAgICApfeybkGA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcmljZUxpc3Quam9pbignIC8gJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc2VydmVEZXNjXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25UZXh0XCI+XHJcbiAgICAgICAgPGgyPntkZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge3BsYWNlfVxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7YCR7c3RhcnREYXRlfSB+ICR7ZW5kRGF0ZX1gfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmdlVGV4dFwiPlxyXG4gICAgICAgIDxoMj7smpTquIg8L2gyPlxyXG4gICAgICAgIDxwPntwcmljZVRleHQoKX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlRGVzYy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGVzY3JpcHRpb246ICcnLFxyXG4gIHBsYWNlOiAnJyxcclxuICBwcm9kdWN0UHJpY2VzOiBbXSxcclxuICBzdGFydERhdGU6ICcnLFxyXG4gIGVuZERhdGU6ICcnLFxyXG59O1xyXG5cclxuUmVzZXJ2ZURlc2MucHJvcFR5cGVzID0ge1xyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHN0YXJ0RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBlbmREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVEZXNjO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInNwcl9iaSB0eHRfbG9nb1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgdHJhbnNmb3JtTW9uZXlVbml0ID0gKG51bSkgPT4ge1xyXG4gIGxldCB0cmFuc2Zvcm1lZCA9ICcnO1xyXG4gIG51bSA9IG51bS50b1N0cmluZygpO1xyXG4gIGNvbnN0IG51bUxlbiA9IG51bS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtTGVuOyBpKyspIHtcclxuICAgIGlmIChpID4gMyAmJiBpICUgMyA9PT0gMSkge1xyXG4gICAgICB0cmFuc2Zvcm1lZCA9IGAsJHt0cmFuc2Zvcm1lZH1gO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtZWQgPSBudW0uY2hhckF0KG51bUxlbiAtIGkpICsgdHJhbnNmb3JtZWQ7XHJcbiAgfVxyXG4gIHJldHVybiB0cmFuc2Zvcm1lZDtcclxufTtcclxuXHJcbmNvbnN0IHByaWNlVHlwZU1hcHBlciA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHByaWNlVHlwZSA9IHtcclxuICAgIEE6ICfshLHsnbgnLFxyXG4gICAgWTogJ+yyreyGjOuFhCcsXHJcbiAgICBCOiAn7Jyg7JWEJyxcclxuICAgIFM6ICfshYvtirgnLFxyXG4gICAgRDogJ+yepeyVoOyduCcsXHJcbiAgICBDOiAn7KeA7Jet7KO866+8JyxcclxuICAgIEU6ICfslrTslrzrpqzrsoTrk5wnLFxyXG4gICAgVjogJ1ZJUCcsXHJcbiAgICBSOiAnUuyEnScsXHJcbiAgfTtcclxuICByZXR1cm4gcHJpY2VUeXBlW3ZhbHVlXTtcclxufTtcclxuXHJcbmNvbnN0IHZhbGlkSW1hZ2VUeXBlID0gKHR5cGUpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL2pwZyddLmluZGV4T2YodHlwZSkgPiAtMTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuY29uc3QgcmVzaXplRW5kID0gKGZ1bmMpID0+IHtcclxuICBsZXQgdGltZXI7XHJcbiAgcmV0dXJuIChldmVudCkgPT4ge1xyXG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDEwMCwgZXZlbnQpO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyB0cmFuc2Zvcm1Nb25leVVuaXQsIHByaWNlVHlwZU1hcHBlciwgdmFsaWRJbWFnZVR5cGUsIHJlc2l6ZUVuZCB9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgVGlja2V0SW5wdXRMaXN0IGZyb20gJy4uL1RpY2tldElucHV0TGlzdCc7XHJcbmltcG9ydCBSZXNlcnZlckluZm8gZnJvbSAnLi4vUmVzZXJ2ZXJJbmZvJztcclxuaW1wb3J0IFRPUyBmcm9tICcuLi9UT1MnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHRpY2tldHM6IFtdLFxyXG4gIG5hbWU6ICcnLFxyXG4gIHRlbGVwaG9uZTogJycsXHJcbiAgZW1haWw6ICcnLFxyXG4gIGlzVmVyaWZpZWROYW1lOiBmYWxzZSxcclxuICBpc1ZlcmlmaWVkVGVsOiBmYWxzZSxcclxuICBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlLFxyXG4gIGlzVE9TQ2hlY2tlZDogZmFsc2UsXHJcbiAgc3VibWl0OiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0lOSVRfVElDS0VUJzoge1xyXG4gICAgICBjb25zdCB0aWNrZXRzID0gQXJyYXkoYWN0aW9uLmxlbmd0aCkuZmlsbCgwKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRpY2tldHMgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ0RFQ1JFTUVOVCc6IHtcclxuICAgICAgY29uc3QgbW9kaWZpZWQgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgIGlmIChtb2RpZmllZC50aWNrZXRzW2FjdGlvbi53aGVyZV0gPiAwKSB7XHJcbiAgICAgICAgbW9kaWZpZWQudGlja2V0c1thY3Rpb24ud2hlcmVdIC09IDE7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1vZGlmaWVkO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnSU5DUkVNRU5UJzoge1xyXG4gICAgICBjb25zdCBtb2RpZmllZCA9IHsgLi4uc3RhdGUgfTtcclxuICAgICAgbW9kaWZpZWQudGlja2V0c1thY3Rpb24ud2hlcmVdICs9IDE7XHJcbiAgICAgIHJldHVybiBtb2RpZmllZDtcclxuICAgIH1cclxuICAgIGNhc2UgJ0NIQU5HRV9OQU1FJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5hbWU6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX1RFTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZWxlcGhvbmU6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX0VNQUlMJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVtYWlsOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9UT1MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNUT1NDaGVja2VkOiBhY3Rpb24uY2hlY2tlZCB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX05BTUUnOiB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoL1xccy8udGVzdChuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IHRydWUgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ1ZFUklGWV9URUwnOiB7XHJcbiAgICAgIGNvbnN0IHsgdGVsZXBob25lIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKHRlbGVwaG9uZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZWxSZSA9IC8wXFxkezJ9LVsxLTldXFxkezIsM30tXFxkezR9LztcclxuICAgICAgaWYgKHRlbFJlLnRlc3QodGVsZXBob25lKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdWRVJJRllfRU1BSUwnOiB7XHJcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAoZW1haWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbWFpbFJlID0gL1thLXpBLVpdXFx3ezIsfUBbYS16QS1aXXszLH1cXC5bYS16QS1aXXsyLH0vO1xyXG4gICAgICBpZiAoZW1haWxSZS50ZXN0KGVtYWlsKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnVkVSSUZZX1NVQk1JVCc6IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRpY2tldHMsXHJcbiAgICAgICAgaXNWZXJpZmllZE5hbWUsXHJcbiAgICAgICAgaXNWZXJpZmllZFRlbCxcclxuICAgICAgICBpc1ZlcmlmaWVkRW1haWwsXHJcbiAgICAgICAgaXNUT1NDaGVja2VkLFxyXG4gICAgICB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aWNrZXRzLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZSA+IDApICYmXHJcbiAgICAgICAgaXNWZXJpZmllZE5hbWUgJiZcclxuICAgICAgICBpc1ZlcmlmaWVkVGVsICYmXHJcbiAgICAgICAgaXNWZXJpZmllZEVtYWlsICYmXHJcbiAgICAgICAgaXNUT1NDaGVja2VkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWJtaXQ6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VibWl0OiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBSZXNlcnZlRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdFByaWNlcywgZGlzcGxheUluZm9JZCwgcHJvZHVjdElkLCByZXNlcnZhdGlvbkRhdGUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IGNvb2tpZS5wYXJzZShkb2N1bWVudC5jb29raWUpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX05BTUUnLCB2YWx1ZTogcGFyc2VkLnJlc2VydmF0aW9uTmFtZSB8fCAnJyB9KTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9OQU1FJyB9KTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9URUwnLCB2YWx1ZTogcGFyc2VkLnJlc2VydmF0aW9uVGVsIHx8ICcnIH0pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1RFTCcgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfRU1BSUwnLCB2YWx1ZTogcGFyc2VkLnJlc2VydmF0aW9uRW1haWwgfHwgJycgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfRU1BSUwnIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0lOSVRfVElDS0VUJywgbGVuZ3RoOiBwcm9kdWN0UHJpY2VzLmxlbmd0aCB9KTtcclxuICB9LCBbcHJvZHVjdFByaWNlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNlcnZhdGlvbkluZm8gPSB7XHJcbiAgICAgICAgZGlzcGxheUluZm9JZCxcclxuICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgcHJpY2VzOiBbXSxcclxuICAgICAgICByZXNlcnZhdGlvbkVtYWlsOiBzdGF0ZS5lbWFpbCxcclxuICAgICAgICByZXNlcnZhdGlvbk5hbWU6IHN0YXRlLm5hbWUsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25UZWxlcGhvbmU6IHN0YXRlLnRlbGVwaG9uZSxcclxuICAgICAgICByZXNlcnZhdGlvblllYXJNb250aERheTogcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbiA9IHByb2R1Y3RQcmljZXMubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xyXG4gICAgICAgIHJlc2VydmF0aW9uSW5mby5wcmljZXMucHVzaCh7XHJcbiAgICAgICAgICBjb3VudDogc3RhdGUudGlja2V0c1tpbmRleF0sXHJcbiAgICAgICAgICBwcm9kdWN0UHJpY2VJZDogcHJvZHVjdFByaWNlc1tpbmRleF0ucHJvZHVjdFByaWNlSUQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcmVzZXJ2YXRpb25zJywgcmVzZXJ2YXRpb25JbmZvKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn7JiI66ek6rCAIOyEseqzteyggeycvOuhnCDsirnsnbjrkJjsl4jsirXri4jri6QnLCAoKSA9PiB7XHJcbiAgICAgICAgICBoaXN0b3J5LnB1c2goYC9kZXRhaWwvJHtkaXNwbGF5SW5mb0lkfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgcmVzcG9uc2U6IHsgZGF0YSwgc3RhdHVzIH0sXHJcbiAgICAgIH0gPSBlcnJvcjtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbCgn7JiI7JW97ZWY7Iuc6rKg7Iq164uI6rmMPycsIGhhbmRsZVN1Ym1pdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydE1vZGFsKCfsmIjslb0g7JaR7Iud7J20IOy2qeyhseuQmOyngCDslYrslZjsirXri4jri6QnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzZXJ2ZUZvcm1cIj5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPFRpY2tldElucHV0TGlzdFxyXG4gICAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdFByaWNlc31cclxuICAgICAgICAgIHRpY2tldHM9e3N0YXRlLnRpY2tldHN9XHJcbiAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmVzZXJ2ZXJJbmZvXHJcbiAgICAgICAgICBuYW1lPXtzdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgdGVsZXBob25lPXtzdGF0ZS50ZWxlcGhvbmV9XHJcbiAgICAgICAgICBlbWFpbD17c3RhdGUuZW1haWx9XHJcbiAgICAgICAgICByZXNlcnZhdGlvbkRhdGU9e3Jlc2VydmF0aW9uRGF0ZS5zcGxpdCgnICcpWzBdfVxyXG4gICAgICAgICAgdG90YWxUaWNrZXQ9e3N0YXRlLnRpY2tldHMucmVkdWNlKFxyXG4gICAgICAgICAgICAoYWNjdW0sIGN1cnJlbnQpID0+IGFjY3VtICsgY3VycmVudCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkTmFtZT17c3RhdGUuaXNWZXJpZmllZE5hbWV9XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkVGVsPXtzdGF0ZS5pc1ZlcmlmaWVkVGVsfVxyXG4gICAgICAgICAgaXNWZXJpZmllZEVtYWlsPXtzdGF0ZS5pc1ZlcmlmaWVkRW1haWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VE9TIGlzQ2hlY2tlZD17c3RhdGUuaXNUT1NDaGVja2VkfSBkaXNwYXRjaD17ZGlzcGF0Y2h9IC8+XHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuc3VibWl0ID8gJyMxRUM5MDAnIDogJyNEMUQxRDEnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdOYW51bSBHb3RoaWMgQm9sZCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMXMnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2xpY2s6IGNvbmZpcm1TdWJtaXQsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19uYXZlcl9zXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7JyDsmIjslb3tlZjquLAnfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgcGFkZGluZz17WzAsIDEwLCAxMCwgMTBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2ZUZvcm0uZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFtdLFxyXG4gIHByb2R1Y3RJZDogMCxcclxuICByZXNlcnZhdGlvbkRhdGU6ICcnLFxyXG59O1xyXG5cclxuUmVzZXJ2ZUZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVGb3JtO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBTdWJOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIHN0eWxlIH0gPSBwcm9wcztcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1Yk5hdkJhclwiIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja3dhcmRcIj5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm4gZm4tYmFja3dhcmQxXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaGlzdG9yeS5nb0JhY2soKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVOYW1lXCI+XHJcbiAgICAgICAgPGgxPntuYW1lIHx8ICftlonsgqwg7J2066aEJ308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3ViTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJOYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRhYlZpZXcgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3QgeyB2aWV3cywgc3R5bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiVGFiVmlld1wiPlxyXG4gICAgICA8dWwgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICB7dmlld3MubWFwKCh2aWV3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57dmlld308L2xpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcblRhYlZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRyYW5zZm9ybTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVmlldztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmV2aWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3LFxyXG4gICAgaW1hZ2VTcmMsXHJcbiAgICBzY29yZSxcclxuICAgIGVtYWlsLFxyXG4gICAgZGF0ZSxcclxuICAgIGVkaXRDb21tZW50LFxyXG4gICAgY29uZmlybURlbGV0ZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2ltZ1N0eWxlLCBzZXRJbWdTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgeyBpbWFnZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgcmV2aWV3UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGltYWdlTW9kYWwoaW1hZ2VTcmMpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2VTcmMpIHtcclxuICAgICAgY29uc3QgcGFyYWdyYXBoID0gcmV2aWV3UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignLnRvcCAubGVmdCBwJyk7XHJcbiAgICAgIGNvbnN0IHRvcEhlaWdodCA9IHBhcmFncmFwaC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHNldEltZ1N0eWxlKHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgICAgICBoZWlnaHQ6IGAke3RvcEhlaWdodH1weGAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZVNyY10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUmV2aWV3XCIgcmVmPXtyZXZpZXdSZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHA+e3Jldmlld308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAge2ltYWdlU3JjID8gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgICAgICBhbHQ9XCJyZXZpZXdJbWFnZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NvcmVcIj57c2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW1haWxcIj57YCR7ZW1haWwuc2xpY2UoMCwgNCl9KioqKmB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzaXREYXRlXCI+e2Ake2RhdGUuc2xpY2UoMCwgMTApfSDrsKnrrLhgfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlZGl0XCIgb25DbGljaz17ZWRpdENvbW1lbnR9PlxyXG4gICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9e2NvbmZpcm1EZWxldGV9PlxyXG4gICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcmV2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVkaXRDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuXHJcbmNvbnN0IFdyaXRlUmV2aWV3Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgYC9hdXRoL3dyaXRlcmV2aWV3LyR7cHJvZHVjdElkfWAsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHNldEluZm8oZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IHN0YXR1cywgZGF0YSB9LFxyXG4gICAgICAgIH0gPSBlcnJvcjtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGlmIChkYXRhID09PSAn66Gc6re47J24IO2VmOyngCDslYrslZjsirXri4jri6QnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0TW9kYWwoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gJ+yYiOyVveydtCDsobTsnqztlZjsp4Ag7JWK7Iq164uI64ukJykge1xyXG4gICAgICAgICAgICBhbGVydE1vZGFsKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9teXJlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhID09PSAn7JiI7JW9IOyekeyEseq4sOqwhOydtCDslYTri5nri4jri6QnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0TW9kYWwoZGF0YSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnL215cmVzZXJ2YXRpb24nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluZm8uZGVzY3JpcHRpb24pIHtcclxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBgJHtpbmZvLmRlc2NyaXB0aW9ufSDrpqzrt7Ag64Ko6riw6riwYDtcclxuICAgIH1cclxuICB9LCBbaW5mb10pO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmtleXMoaW5mbykubGVuZ3RoID8gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJXcml0ZVJldmlld0NvbnRhaW5lclwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e2luZm8uZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxSZXZpZXdFZGl0IGlkPXtpbmZvLnJlc2VydmF0aW9uSW5mb0lkfSAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgJydcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JpdGVSZXZpZXdDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRpY2tldElucHV0IGZyb20gJy4uL1RpY2tldElucHV0JztcclxuXHJcbmNvbnN0IFRpY2tldElucHV0TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdFByaWNlcywgdGlja2V0cywgZGlzcGF0Y2ggfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJUaWNrZXRJbnB1dExpc3RcIj5cclxuICAgICAge3Byb2R1Y3RQcmljZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFRpY2tldElucHV0XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZT17dmFsdWV9XHJcbiAgICAgICAgICAgIGNvdW50PXt0aWNrZXRzW2luZGV4XX1cclxuICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgICAgICB3aGVyZT17aW5kZXh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbnB1dExpc3QucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIGRpc2NvdW50UmF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICB0aWNrZXRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5wdXRMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUYWJVSSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgc2VsZWN0ZWQsIGhhbmRsZUNsaWNrLCBpbmRpY2F0b3JTdHlsZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIlRhYlVJXCI+XHJcbiAgICAgIDx1bCByZWY9e3JlZn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIiBzdHlsZT17aW5kaWNhdG9yU3R5bGV9IC8+XHJcbiAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBzZWxlY3RlZCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuVGFiVUkucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGluZGljYXRvclN0eWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVUk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGFiVUkgZnJvbSAnLi4vVGFiVUknO1xyXG5pbXBvcnQgVGFiVmlldyBmcm9tICcuLi9UYWJWaWV3JztcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgdmlld3MsIGFsYXJtLCB0b3AsIGJvdHRvbSB9ID0gcHJvcHM7XHJcbiAgLy8gdG9wLGJvdHRvbeydgCDsoJXsoIHsnLzroZwg67O07Jes7KSEIOu3sFxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2luZGljYXRvclN0eWxlLCBzZXRJbmRpY2F0b3JTdHlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3ZpZXdTdHlsZSwgc2V0Vmlld1N0eWxlXSA9IHVzZVN0YXRlKHtcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNXMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFt2aWV3SGVpZ2h0LCBzZXRWaWV3SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHVpUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHZpZXdSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSZWYgPSB1c2VSZWYoc2VsZWN0ZWQpO1xyXG4gIHNlbGVjdGVkUmVmLmN1cnJlbnQgPSBzZWxlY3RlZDtcclxuICBjb25zdCB2aWV3SGVpZ2h0UmVmID0gdXNlUmVmKHZpZXdIZWlnaHQpO1xyXG4gIHZpZXdIZWlnaHRSZWYuY3VycmVudCA9IHZpZXdIZWlnaHQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBpZiAoYWxhcm0pIHtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBhbGFybShpbmRleCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoaW5kZXgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2V0U2VsZWN0ZWQoaW5kZXgpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXZpc2VJbmRpY2F0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZExpID0gdWlSZWYuY3VycmVudC5jaGlsZHJlbltzZWxlY3RlZFJlZi5jdXJyZW50ICsgMV07XHJcbiAgICBzZXRJbmRpY2F0b3JTdHlsZSh7XHJcbiAgICAgIGxlZnQ6IHNlbGVjdGVkTGkub2Zmc2V0TGVmdCxcclxuICAgICAgd2lkdGg6IHNlbGVjdGVkTGkub2Zmc2V0V2lkdGgsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXZpc2VWaWV3V2lkdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHZpZXdSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMHMnLFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7d2lkdGggKiBzZWxlY3RlZFJlZi5jdXJyZW50fXB4KWAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJldmlzZUluZGljYXRvcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmV2aXNlVmlld1dpZHRoKTtcclxuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCB2aWV3Qm9keSA9XHJcbiAgICAgICAgdmlld1JlZi5jdXJyZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuW3NlbGVjdGVkUmVmLmN1cnJlbnRdLmNoaWxkcmVuWzBdOyAvLyBzZWN0aW9uIC0+IHVsIC0+IGxpIC0+IGRpdlxyXG4gICAgICBjb25zdCBoZWlnaHQgPSB2aWV3Qm9keSAmJiB2aWV3Qm9keS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIGlmICh2aWV3SGVpZ2h0LmN1cnJlbnQgIT09IGhlaWdodCkge1xyXG4gICAgICAgIHNldFZpZXdIZWlnaHQoaGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXZpc2VJbmRpY2F0b3IpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmV2aXNlVmlld1dpZHRoKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KHJldmlzZUluZGljYXRvciwgW3NlbGVjdGVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHZpZXdSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC41cycsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHt3aWR0aCAqIHNlbGVjdGVkfXB4KWAsXHJcbiAgICB9KTtcclxuICB9LCBbc2VsZWN0ZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiQ29udHJvbGxlclwiPlxyXG4gICAgICA8VGFiVUlcclxuICAgICAgICByZWY9e3VpUmVmfVxyXG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgaW5kaWNhdG9yU3R5bGU9e2luZGljYXRvclN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICB7dG9wfVxyXG4gICAgICA8VGFiVmlld1xyXG4gICAgICAgIHJlZj17dmlld1JlZn1cclxuICAgICAgICB2aWV3cz17dmlld3N9XHJcbiAgICAgICAgc3R5bGU9e3sgLi4udmlld1N0eWxlLCBoZWlnaHQ6IHZpZXdIZWlnaHQgfX1cclxuICAgICAgLz5cclxuICAgICAge2JvdHRvbX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGFybTogZmFsc2UsXHJcbiAgdG9wOiAnJyxcclxuICBib3R0b206ICcnLFxyXG4gIHZpZXdzOiBbXSxcclxufTtcclxuXHJcblRhYkNvbnRyb2xsZXIucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICB2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpLFxyXG4gIGFsYXJtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcclxuICB0b3A6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGJvdHRvbTogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG4vLyDslYzrnozsnbQg7J6I64uk66m0IOyDgeychCDsu7Ttj6zrhIztirjsl5Ag7Ja065SU7JeQIOuIjOuggOuKlOyngCDrs4DtmZTrpbwg7JWM66Ck7KSYIOuPmeyggSDrt7Drs4DtmZTrpbwg6rCA64ql7LyA7ZWoXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJDb250cm9sbGVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcclxuXHJcbmNvbnN0IGFwcGx5U3R5bGUgPSAoc3R5bGUpID0+IHtcclxuICBpZiAodHlwZW9mIHN0eWxlID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIGAke3N0eWxlfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgW2FsbF0gPSBzdHlsZTtcclxuICAgIHJldHVybiBgJHthbGx9cHhgO1xyXG4gIH1cclxuICBpZiAodG9TdHJpbmcuY2FsbChzdHlsZSkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgc3R5bGUubGVuZ3RoID09PSAyKSB7XHJcbiAgICBjb25zdCBbdmVydGljYWwsIGhvcml6b250YWxdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7dmVydGljYWx9cHggJHtob3Jpem9udGFsfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgY29uc3QgW3RvcCwgcmlnaHQsIGRvd24sIGxlZnRdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7dG9wfXB4ICR7cmlnaHR9cHggJHtkb3dufXB4ICR7bGVmdH1weGA7XHJcbiAgfVxyXG4gIHJldHVybiAnMCc7XHJcbn07XHJcblxyXG5jb25zdCBCdXR0b25CdW5jaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbm90ZXMsIG1hcmdpbiwgcGFkZGluZyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiQnV0dG9uQnVuY2hcIlxyXG4gICAgICBzdHlsZT17eyBtYXJnaW46IGFwcGx5U3R5bGUobWFyZ2luKSwgcGFkZGluZzogYXBwbHlTdHlsZShwYWRkaW5nKSB9fVxyXG4gICAgPlxyXG4gICAgICB7bm90ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJ1dHRvbiBrZXk9e2luZGV4fSBzdHlsZT17dmFsdWUuc3R5bGV9IGNsaWNrPXt2YWx1ZS5jbGlja30+XHJcbiAgICAgICAgICAgIHt2YWx1ZS5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbkJ1bmNoLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtYXJnaW46IDAsXHJcbiAgcGFkZGluZzogMCxcclxufTtcclxuXHJcbkJ1dHRvbkJ1bmNoLnByb3BUeXBlcyA9IHtcclxuICBub3RlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBmb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY2xpY2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcclxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmFycmF5XSksXHJcbiAgcGFkZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmFycmF5XSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25CdW5jaDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB2YWxpZEltYWdlVHlwZSB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFJldmlld0VkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIHRodW1ibmFpbFdpZHRoLFxyXG4gICAgZXhTY29yZSxcclxuICAgIGV4Q29tbWVudCxcclxuICAgIGV4SW1hZ2VTcmMsXHJcbiAgICBpc1Bvc3QsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoZXhTY29yZSk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoZXhDb21tZW50KTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKGV4SW1hZ2VTcmMpO1xyXG4gIGNvbnN0IFt0aHVtYm5haWxTdHlsZSwgc2V0VGh1bWJuYWlsU3R5bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlTWVhc3VyZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgY29uc3QgcmV2aXNpb25TcmMgPSBleEltYWdlU3JjID09PSBpbWFnZVNyYyA/IGAvJHtpbWFnZVNyY31gIDogaW1hZ2VTcmM7XHJcbiAgICAgIGltYWdlTWVhc3VyZW1lbnQuc3JjID0gcmV2aXNpb25TcmM7XHJcbiAgICAgIGltYWdlTWVhc3VyZW1lbnQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmhlaWdodCAvIHRoaXMud2lkdGg7XHJcbiAgICAgICAgc2V0VGh1bWJuYWlsU3R5bGUoe1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgd2lkdGg6IGAke3RodW1ibmFpbFdpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7dGh1bWJuYWlsV2lkdGggKiByYXRpb31weGAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtyZXZpc2lvblNyY30pYCxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRodW1ibmFpbFN0eWxlKHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2ltYWdlU3JjXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy8gcmV0dXJu7J2EIOyigCDsoJXsnZjtlbTshJwgc3VibWl07J20IOuQkOuKlOqwgOulvCDslYzslYTslbztlahcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChzY29yZSA8PSAwIHx8IHNjb3JlID4gNSkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+uzhOygkCDqsJzsiJjqsIAg7Jis67CU66W07KeAIOyViuyKteuLiOuLpCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29tbWVudC5sZW5ndGggPCA1IHx8IGNvbW1lbnQubGVuZ3RoID4gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn66as67ewIOq4gOyekOyImOqwgCDrp57sp4Ag7JWK7Iq164uI64ukLicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5maWxlcy5sZW5ndGggJiZcclxuICAgICAgICAhdmFsaWRJbWFnZVR5cGUoaW1hZ2VSZWYuY3VycmVudC5maWxlc1swXS50eXBlKVxyXG4gICAgICApIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfsnbTrr7jsp4DripQganBnLGpwZWcscG5nIO2MjOydvOunjCDqsIDriqXtlanri4jri6QuJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvcm1PYmogPSBuZXcgRm9ybURhdGEoZm9ybS5jdXJyZW50KTtcclxuICAgICAgaWYgKCFpc1Bvc3QgJiYgZXhJbWFnZVNyYyAmJiAoIWltYWdlU3JjIHx8IGV4SW1hZ2VTcmMgIT09IGltYWdlU3JjKSkge1xyXG4gICAgICAgIGZvcm1PYmouYXBwZW5kKCdleEltYWdlU3JjJywgZXhJbWFnZVNyYyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IGlzUG9zdCA/ICdQT1NUJyA6ICdQVVQnLFxyXG4gICAgICAgIHVybDogYC9hcGkvcmVzZXJ2YXRpb25zLyR7aWR9L2NvbW1lbnRzYCxcclxuICAgICAgICBkYXRhOiBmb3JtT2JqLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgaWYgKGlzUG9zdCkge1xyXG4gICAgICAgICAgYWxlcnRNb2RhbCgn66as67ew6rCAIOuTseuhneuQmOyXiOyKteuLiOuLpCcsICgpID0+IHtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvbXlyZXNlcnZhdGlvbicpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoJ+umrOu3sOqwgCDsiJjsoJXrkJjsl4jsirXri4jri6QnKTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHJlc3BvbnNlOiB7IGRhdGEsIHN0YXR1cyB9LFxyXG4gICAgICB9ID0gZXJyb3I7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5UmF0aW5nID0gKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRTY29yZSh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gKHsgdGFyZ2V0OiB7IGZpbGVzIH0gfSkgPT4ge1xyXG4gICAgY29uc3QgdGVtcEltYWdlID0gZmlsZXNbMF07XHJcbiAgICBpZiAoIXZhbGlkSW1hZ2VUeXBlKHRlbXBJbWFnZS50eXBlKSkge1xyXG4gICAgICBhbGVydE1vZGFsKCfsnbTrr7jsp4DripQganBnLGpwZWcscG5nIO2MjOydvOunjCDqsIDriqXtlanri4jri6QnKTtcclxuICAgICAgaW1hZ2VSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgICBzZXRJbWFnZVNyYygnJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEltYWdlU3JjKHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRlbXBJbWFnZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbmNlbEltYWdlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgaW1hZ2VSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgc2V0SW1hZ2VTcmMoJycpO1xyXG4gICAgLy8gbmV3SW1hZ2U9IC0xO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXZpZXdFZGl0XCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICAgIG5hbWU9XCJyZXZpZXdGb3JtXCJcclxuICAgICAgICByZWY9e2Zvcm19XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJhdGluZ1NlY3Rpb25cIj5cclxuICAgICAgICAgIDxwPuuzhOygkOqzvCDsnbTsmqkg6rK97ZeY7J2EIOuCqOqyqOyjvOyEuOyalC48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1N0YXJcIj5cclxuICAgICAgICAgICAge18ucmFuZ2UoMSwgNikubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbiBmbi1zdGFyMiAke1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID49IHZhbHVlID8gJ2dldFN0YXInIDogJ25vdEdldFN0YXInXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2RpZnlSYXRpbmcodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNjb3JlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NvcmV9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHNjb3JlID4gMCA/ICcjMDAwJyA6ICcjZGRkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndyaXRlQ29tbWVudFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgcm93cz1cIjE1XCJcclxuICAgICAgICAgICAgbWluTGVuZ3RoPVwiNVwiXHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjQwMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvbW1lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdEltYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlTGV0dGVyQ291bnRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VVcGxvYWRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1pbWFnZTFcIiAvPlxyXG4gICAgICAgICAgICAgIHsnIOyCrOynhCDstpTqsIAnfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21tZW50Q291bnRcIj5cclxuICAgICAgICAgICAgICB7YCR7Y29tbWVudC5sZW5ndGh9LzQwMCAo7LWc7IaMIDXsnpAg7J207IOBKWB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYm5haWxJbWFnZVwiIHN0eWxlPXt0aHVtYm5haWxTdHlsZX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNyb3NzMVwiIG9uQ2xpY2s9e2NhbmNlbEltYWdlVXBsb2FkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIHtpc1Bvc3QgPyAoXHJcbiAgICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcclxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ05hbnVtIEdvdGhpYyBCb2xkJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDrk7HroZ0g7ZWY7Iuc6rKg7Iq164uI6rmMPycsIGhhbmRsZVN1Ym1pdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICfrpqzrt7Ag65Ox66GdJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBwYWRkaW5nPXsxMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxRUM4MDAnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE3cHgnLFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnTmFudW0gR290aGljIEJvbGQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1FZGl0KGhhbmRsZVN1Ym1pdCwgc2NvcmUsIGNvbW1lbnQsIGltYWdlU3JjKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+yImOyglScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRDhEQkRFJyxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcclxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ05hbnVtIEdvdGhpYyBCb2xkJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25maXJtQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICfst6jshownLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3RWRpdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGh1bWJuYWlsV2lkdGg6IDIwMCxcclxuICBleFNjb3JlOiAwLFxyXG4gIGV4Q29tbWVudDogJycsXHJcbiAgZXhJbWFnZVNyYzogJycsXHJcbiAgaXNQb3N0OiB0cnVlLFxyXG59O1xyXG5cclxuUmV2aWV3RWRpdC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdGh1bWJuYWlsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgZXhTY29yZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBleENvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZXhJbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpc1Bvc3Q6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNvbmZpcm1FZGl0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBjb25maXJtQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0VkaXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGlja2V0SGVhZCBmcm9tICcuLi9UaWNrZXRIZWFkJztcclxuaW1wb3J0IFRpY2tldEluZm9MaXN0IGZyb20gJy4uL1RpY2tldEluZm9MaXN0JztcclxuXHJcbmNvbnN0IFRpY2tldCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIHRleHQsIGFjdGlvbnMsIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJUaWNrZXRcIj5cclxuICAgICAgPFRpY2tldEhlYWQgdGV4dD17dGV4dH0gaXNHcmVlbj17aXNHcmVlbn0gLz5cclxuICAgICAgPFRpY2tldEluZm9MaXN0IGluZm9zPXtpbmZvc30gYWN0aW9ucz17YWN0aW9uc30gLz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0dyZWVuOiBmYWxzZSxcclxuICBhY3Rpb25zOiBbXSxcclxufTtcclxuXHJcblRpY2tldC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgaXNHcmVlbjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXQ7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBQcm9kdWN0RGVzYyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGV4dCwgbGltaXQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0ZvbGQsIHNldElzRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdGV4dE9iaiwgc2V0VGV4dE9ial0gPSB1c2VTdGF0ZSh7IHNpbXBsZTogJycsIGRldGFpbDogJycgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIHRyaW1tZWRUZXh0ID0gdHJpbW1lZFRleHQucmVwbGFjZSgnXFxuJywgJycpO1xyXG4gICAgaWYgKHRyaW1tZWRUZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XHJcbiAgICAgIGNvbnN0IHRleHRTaW1wbGUgPSB0cmltbWVkVGV4dC5zbGljZSgwLCBsaW1pdCk7XHJcbiAgICAgIGNvbnN0IHRleHREZXRhaWwgPSB0cmltbWVkVGV4dC5zbGljZShsaW1pdCk7XHJcbiAgICAgIHNldFRleHRPYmooeyBzaW1wbGU6IHRleHRTaW1wbGUsIGRldGFpbDogdGV4dERldGFpbCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRleHRPYmooeyBzaW1wbGU6IHRyaW1tZWRUZXh0LCBkZXRhaWw6ICcnIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt0ZXh0XSk7XHJcblxyXG4gIGNvbnN0IHNob3dNb3JlRGVzYyA9ICgpID0+IHtcclxuICAgIGlmIChpc0ZvbGQpIHtcclxuICAgICAgJCgnLlByb2R1Y3REZXNjIC5tb3JlRGVzYycpLnNsaWRlRG93bigpO1xyXG4gICAgICBzZXRJc0ZvbGQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLlByb2R1Y3REZXNjIC5tb3JlRGVzYycpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNGb2xkKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5UZXh0ID0gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHsn7Y687LOQ67O06riwICd9XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWRvd24yXCIgLz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG4gIGNvbnN0IGZvbGRUZXh0ID0gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHsn7KCR6riwICd9XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXVwMlwiIC8+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlByb2R1Y3REZXNjXCI+XHJcbiAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHt0ZXh0T2JqLnNpbXBsZX1cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdHNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc0ZvbGQgPyAnaW5saW5lJyA6ICdub25lJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vcmVEZXNjXCI+e3RleHRPYmouZGV0YWlsfTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+e3RleHRPYmouc2ltcGxlfTwvcD5cclxuICAgICAgKX1cclxuICAgICAge3RleHRPYmouZGV0YWlsID8gKFxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjNmNWY2JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjbGljazogc2hvd01vcmVEZXNjLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBpc0ZvbGQgPyBvcGVuVGV4dCA6IGZvbGRUZXh0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2R1Y3REZXNjLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0ZXh0OiAnJyxcclxuICBsaW1pdDogMTAwLFxyXG59O1xyXG5cclxuUHJvZHVjdERlc2MucHJvcFR5cGVzID0ge1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGVzYztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHRyYW5zZm9ybU1vbmV5VW5pdCwgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUaWNrZXRJbnB1dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByb2R1Y3RQcmljZTogeyBwcmljZVR5cGVOYW1lLCBwcmljZSwgZGlzY291bnRSYXRlIH0sXHJcbiAgICBjb3VudCxcclxuICAgIGRpc3BhdGNoLFxyXG4gICAgd2hlcmUsXHJcbiAgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpY2tldElucHV0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgIDxoMj5cclxuICAgICAgICAgIHtwcmljZVR5cGVNYXBwZXIocHJpY2VUeXBlTmFtZSl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtgJHt0cmFuc2Zvcm1Nb25leVVuaXQocHJpY2UpfSDsm5BgfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoTnVtYmVyKGRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvc3QgPVxyXG4gICAgICAgICAgICAgIE1hdGgucm91bmQocHJpY2UgLyAoMSAtIE51bWJlcihkaXNjb3VudFJhdGUpIC8gMTAwKSAvIDEwMCkgKiAxMDA7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7YCR7dHJhbnNmb3JtTW9uZXlVbml0KG9yaWdpbmFsQ29zdCl97JuQICgke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgIE51bWJlcihkaXNjb3VudFJhdGUpLFxyXG4gICAgICAgICAgICAgICAgKX0lIO2VoOyduOqwgClgfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRqdXN0VGlja2V0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwcl9ib29rMiBpY29fbWludXMzICR7Y291bnQgPyAnJyA6ICdkaXNhYmxlZCd9YH1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUNSRU1FTlQnLCB3aGVyZSB9KTtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bjb3VudCAke2NvdW50ID8gJycgOiAnZGlzYWJsZWQnfWB9Pntjb3VudH08L3NwYW4+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fcGx1czNcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0lOQ1JFTUVOVCcsIHdoZXJlIH0pO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD57YCR7dHJhbnNmb3JtTW9uZXlVbml0KHByaWNlICogY291bnQpfSDsm5BgfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNvdW50OiAwLFxyXG59O1xyXG5cclxuVGlja2V0SW5wdXQucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHdoZXJlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRJbnB1dDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi9JbWFnZVNsaWRlcic7XHJcbmltcG9ydCB7IHJlc2l6ZUVuZCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG4vLyDsiqTtgazroaQg7Iuc6rCEKHRyYW5zaXRpb25UaW1lKSBkZWZhdWx0IDHstIggIOychOyXkOyEnCDrrLzroKTrsJvripTqsoNcclxuLy8g7IOB7YOc66GcIOyCrOyaqe2VmOuKlCDsiqTtgazroaQg7Iuc6rCEICh0cmFuc2l0aW9uRHVyYXRpb24pXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IFByb21vdGlvbkltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8g6rCR7J6Q6riwIGRlZ3JlZeqwgCDqs4Tsho0g7Kad6rCA7ZWY64qUIOuyhOq3uOqwgCDsnojsnYxcclxuICBjb25zdCB7IHRpbWVJbnRlcnZhbCwgdHJhbnNpdGlvblRpbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtkZWdyZWUsIHNldERlZ3JlZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2Nyb2xsYWJsZSwgc2V0U2Nyb2xsYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdHJhbnNpdGlvbkR1cmF0aW9uLCBzZXRUcmFuc2l0aW9uRHVyYXRpb25dID0gdXNlU3RhdGUodHJhbnNpdGlvblRpbWUpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlV2lkdGgsIHNldEltYWdlV2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgZGVncmVlUmVmID0gdXNlUmVmKGRlZ3JlZSk7XHJcbiAgY29uc3Qgc2Nyb2xsYWJsZVJlZiA9IHVzZVJlZihzY3JvbGxhYmxlKTtcclxuICBjb25zdCBpbWFnZUxpc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgZGVncmVlUmVmLmN1cnJlbnQgPSBkZWdyZWU7XHJcbiAgc2Nyb2xsYWJsZVJlZi5jdXJyZW50ID0gc2Nyb2xsYWJsZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGRhdGE6IHsgaXRlbXMgfSxcclxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbnMnKTtcclxuICAgICAgICBpdGVtcy5wdXNoKGl0ZW1zWzBdKTsgLy8g7LKY7J2M6rO8IOuniOyngOunieydhCDrj5nsnbztlZwg7J2066+47KeA66W8IOuRkOyWtOyEnCDsiqTtgazroaTsnYQg66ek64GE65+96rKMIO2VqFxyXG4gICAgICAgIHNldEltYWdlcyhpdGVtcyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaEltYWdlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGF1dG9TY3JvbGwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGlmIChzY3JvbGxhYmxlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoZGVncmVlUmVmLmN1cnJlbnQgPT09IDApIHtcclxuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbih0cmFuc2l0aW9uVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERlZ3JlZSgocHJldkRlZ3JlZSkgPT4gcHJldkRlZ3JlZSArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aW1lSW50ZXJ2YWwgKiAxMDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGF1dG9TY3JvbGwpO1xyXG4gIH0sIFtpbWFnZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVHJhbnNpdGlvbkVuZCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgPj0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgc2V0RGVncmVlKDApO1xyXG4gICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsYWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGxhYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvaW5nUmVzaXplID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsYWJsZShmYWxzZSk7XHJcbiAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTtcclxuICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbigwKTtcclxuICB9O1xyXG5cclxuICBsZXQgZG9uZVJlc2l6ZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkb2luZ1Jlc2l6ZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ3Jlc2l6ZScsXHJcbiAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgZG9uZVJlc2l6ZSA9IHJlc2l6ZUVuZCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRTY3JvbGxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgc2V0SW1hZ2VXaWR0aChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCk7XHJcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24odHJhbnNpdGlvblRpbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkb25lUmVzaXplO1xyXG4gICAgICB9KSgpLFxyXG4gICAgKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkb2luZ1Jlc2l6ZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkb25lUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VXaWR0aChcclxuICAgICAgKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkICYmXHJcbiAgICAgICAgaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpIHx8XHJcbiAgICAgICAgMCxcclxuICAgICk7XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlU2xpZGVyXHJcbiAgICAgIHJlZj17aW1hZ2VMaXN0fVxyXG4gICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25EdXJhdGlvbn1cclxuICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgIGlzUHJvbW90aW9uXHJcbiAgICAgIGhhbmRsZVRyYW5zaXRpb25FbmQ9e2hhbmRsZVRyYW5zaXRpb25FbmR9XHJcbiAgICAgIGhhbmRsZU1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfVxyXG4gICAgICBoYW5kbGVNb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9tb3Rpb25JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHJhbnNpdGlvblRpbWU6IDEsXHJcbiAgdGltZUludGVydmFsOiAyLFxyXG59O1xyXG5cclxuUHJvbW90aW9uSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRpbWVJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21vdGlvbkltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IE1haW5OYXZCYXIgZnJvbSAnLi4vTWFpbk5hdkJhcic7XHJcbmltcG9ydCBTdWJOYXZCYXIgZnJvbSAnLi4vU3ViTmF2QmFyJztcclxuXHJcbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgaXNUcmFuc3BhcmVudCwgaXNMb2dvdXRhYmxlLCBzdHlsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIG5hbWUgPyAoXHJcbiAgICA8U3ViTmF2QmFyIG5hbWU9e25hbWV9IHN0eWxlPXtzdHlsZX0gLz5cclxuICApIDogKFxyXG4gICAgPE1haW5OYXZCYXJcclxuICAgICAgaXNUcmFuc3BhcmVudD17aXNUcmFuc3BhcmVudH1cclxuICAgICAgaXNMb2dvdXRhYmxlPXtpc0xvZ291dGFibGV9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbmFtZTogJycsXHJcbiAgaXNUcmFuc3BhcmVudDogZmFsc2UsXHJcbiAgaXNMb2dvdXRhYmxlOiBmYWxzZSxcclxuICBzdHlsZToge30sXHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNMb2dvdXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgUHJvZHVjdENvbnRhaW5lciAke2NsYXNzTmFtZX1gfT57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuUHJvZHVjdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vZGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxDb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbk1vZGFsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBNYWluSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHNyYywgYWx0IH0gPSBwcm9wcztcclxuICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJNYWluSW1hZ2VcIiBzcmM9e3NyY30gYWx0PXthbHR9IC8+O1xyXG59O1xyXG5cclxuTWFpbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5JbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmV2aWV3U3VtbWFyeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYXZlcmFnZVNjb3JlLCByZXZpZXdDb3VudCwgZGlzcGxheVN0YXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZVxyXG4gICAgICBjbGFzc05hbWU9XCJSZXZpZXdTdW1tYXJ5XCJcclxuICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiByZXZpZXdDb3VudCA/ICcnIDogJ25vbmUnIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMj7smIjrp6TsnpAg7ZWc7KSE7Y+JPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7ZGlzcGxheVN0YXIoYXZlcmFnZVNjb3JlKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2ZXJhZ2VTY29yZVwiPnthdmVyYWdlU2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF4U2NvcmVcIj4vIDUuMDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50Q291bnRcIj57YCR7cmV2aWV3Q291bnR9IOqxtGB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW5yb2xsVGV4dFwiPuuTseuhnTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld1N1bW1hcnkucHJvcFR5cGVzID0ge1xyXG4gIGF2ZXJhZ2VTY29yZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHJldmlld0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheVN0YXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdTdW1tYXJ5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vUmV2aWV3JztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcblxyXG5jb25zdCBSZXZpZXdMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3cyxcclxuICAgIGlzQnJpZWYsXHJcbiAgICBpc01vZGlmaWFibGUsXHJcbiAgICBlZGl0Q29tbWVudCxcclxuICAgIGNvbmZpcm1EZWxldGUsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgICBleERhdGE6IHsgaWQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYyB9LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgc2hvd1Jldmlld3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXZpZXdzQ29tcCA9IFtdO1xyXG4gICAgWy4uLnJldmlld3NdLnJldmVyc2UoKS5zb21lKChyZXZpZXcsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpc0JyaWVmICYmIGluZGV4ID49IDUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgcmV2aXNpb25JbWFnZVNyYyA9ICcnO1xyXG4gICAgICBpZiAocmV2aWV3LmNvbW1lbnRJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV2aXNpb25JbWFnZVNyYyA9IHJldmlldy5jb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZTtcclxuICAgICAgICByZXZpc2lvbkltYWdlU3JjID0gcmV2aXNpb25JbWFnZVNyYy5zbGljZSgwLCA0KS5pbmNsdWRlcygnYmxvYicpXHJcbiAgICAgICAgICA/IHJldmlzaW9uSW1hZ2VTcmNcclxuICAgICAgICAgIDogYC8ke3JldmlzaW9uSW1hZ2VTcmN9YDtcclxuICAgICAgfVxyXG4gICAgICByZXZpZXdzQ29tcC5wdXNoKFxyXG4gICAgICAgIDxSZXZpZXdcclxuICAgICAgICAgIGtleT17cmV2aWV3LmNvbW1lbnRJZH1cclxuICAgICAgICAgIHJldmlldz17cmV2aWV3LmNvbW1lbnR9XHJcbiAgICAgICAgICBpbWFnZVNyYz17cmV2aXNpb25JbWFnZVNyY31cclxuICAgICAgICAgIHNjb3JlPXtyZXZpZXcuc2NvcmV9XHJcbiAgICAgICAgICBlbWFpbD17cmV2aWV3LnJlc2VydmF0aW9uRW1haWx9XHJcbiAgICAgICAgICBkYXRlPXtyZXZpZXcucmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAgICAgZWRpdENvbW1lbnQ9e2VkaXRDb21tZW50KHJldmlldy5yZXNlcnZhdGlvbkluZm9JZCl9XHJcbiAgICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlKHJldmlldy5yZXNlcnZhdGlvbkluZm9JZCl9XHJcbiAgICAgICAgLz4sXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXZpZXdzQ29tcDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXZpZXdMaXN0XCI+XHJcbiAgICAgIHtpc01vZGlmaWFibGUgPyAoXHJcbiAgICAgICAgPFJldmlld0VkaXRcclxuICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgIGV4U2NvcmU9e3Njb3JlfVxyXG4gICAgICAgICAgZXhDb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgICAgZXhJbWFnZVNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICBpc1Bvc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgY29uZmlybUVkaXQ9e2NvbmZpcm1FZGl0KGlkKX1cclxuICAgICAgICAgIGNvbmZpcm1DYW5jZWw9e2NvbmZpcm1DYW5jZWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBzaG93UmV2aWV3cygpXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgcmV2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY29tbWVudEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgIHNhdmVGaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpc0JyaWVmOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzTW9kaWZpYWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBlZGl0Q29tbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1FZGl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1DYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZXhEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBpbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==