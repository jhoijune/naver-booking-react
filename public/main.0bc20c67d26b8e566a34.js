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

/***/ "2d9I":
/*!*****************************************!*\
  !*** ./src/jsx/FlexContainer/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "Gc8x");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var FlexContainer = function FlexContainer(props) {
  var style = props.style,
      children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FlexContainer",
    style: style
  }, children);
};

FlexContainer.defaultProps = {
  style: {},
  children: ''
};
FlexContainer.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
var _default = FlexContainer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FlexContainer, "FlexContainer", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/FlexContainer/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/FlexContainer/index.jsx");
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
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Layout */ "6Rqs");




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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_8__["ModalContext"]),
      alertModal = _useContext.alertModal;

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
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/auth/email', {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
  });

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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/auth/logout', {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              });

            case 3:
              _ref4 = _context2.sent;
              status = _ref4.status;

              if (status === 200) {
                alertModal('로그아웃 되었습니다', function () {
                  setEmail('');
                  history.push('/');
                });
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

__signature__(MainNavBar, "useState{[email, setEmail]('')}\nuseHistory{history}\nuseContext{{ alertModal }}\nuseEffect{}", function () {
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
      canceledLen = props.canceledLen,
      divisions = props.divisions;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ReservationCount"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_book2"
  }), ' 전체'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, toUsedLen + usedLen + canceledLen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#".concat(divisions[0])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_book_ss"
  }), ' 이용예정'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, toUsedLen))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#".concat(divisions[1])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_check"
  }), ' 이용완료'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, usedLen))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#".concat(divisions[2])
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_back"
  }), ' 취소·환불'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, canceledLen))))));
};

ReservationCount.propTypes = {
  toUsedLen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  usedLen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  canceledLen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  divisions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "4b81");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var Button = function Button(props) {
  var style = props.style,
      click = props.click,
      children = props.children;
  return typeof click === 'function' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Button",
    type: "button",
    onClick: click,
    style: style
  }, children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "Button",
    to: click,
    style: style
  }, children);
};

Button.defaultProps = {
  style: {}
};
Button.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  click: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
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
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/products', {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "5A9N");
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");


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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      click: function click() {
        setIsModal(false);

        if (action) {
          action();
        }
      }
    }, "\uD655\uC778"))));
    setIsModal(true);
  };

  var confirmModal = function confirmModal(text, action) {
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "modalText"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        backgroundColor: '#288FEB',
        color: '#fff'
      },
      click: function click() {
        action();
        setIsModal(false);
      }
    }, "\uD655\uC778"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      click: function click() {
        setIsModal(false);
      }
    }, "\uCDE8\uC18C"))));
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
  var divisions = ['toUsed', 'used', 'canceled'];
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
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('/api/reservations', {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put("/api/reservations/".concat(id), {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              });

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
    canceledLen: canceledLen,
    divisions: divisions
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: divisions[0],
    text: "\uC608\uC57D \uD655\uC815",
    infos: toUsed,
    actions: ['cancel'],
    isGreen: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: divisions[1],
    text: "\uC774\uC6A9 \uC644\uB8CC",
    infos: used,
    actions: ['writeReview']
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: divisions[2],
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
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Button */ "5A9N");





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

    lodash__WEBPACK_IMPORTED_MODULE_6___default.a.range(fillCount + Math.ceil(ratioCount) + 1, maxScore + 1).forEach(function (value) {
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
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a["delete"]("/api/reservations/".concat(reservationInfoId, "/comments"), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/auth/edit/reservations/".concat(reservationInfoId, "/comments"), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
  }), "\uB124\uC774\uBC84 \uC608\uC57D\uC744 \uD1B5\uD574 \uC2E4\uC81C \uBC29\uBB38\uD55C \uC774\uC6A9\uC790\uAC00 \uB0A8\uAE34 \uD3C9\uAC00\uC785\uB2C8\uB2E4.")) : '', isBrief && reviews.length > 5 ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      color: '#000',
      backgroundColor: '#F3F5F6',
      border: 'none',
      borderTop: '1px solid #c0c0c0'
    },
    click: "/review/".concat(displayInfoId)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, '예매자 리뷰 더보기 ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "fn fn-forward1"
  })))) : '');
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
              }, {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
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
    placeholder: "xxxxx@naver.com"
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

/***/ "Gc8x":
/*!*****************************************!*\
  !*** ./src/jsx/FlexContainer/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "HNAl":
/*!************************************!*\
  !*** ./src/jsx/NotFound/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "lJq3");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "5A9N");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var NotFound = function NotFound() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = 'Page not found';
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "NotFound"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "PAGE NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      border: 'none'
    },
    click: '/'
  }, "\uBA54\uC778 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9")));
};

__signature__(NotFound, "useEffect{}");

var _default = NotFound;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFound, "NotFound", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/NotFound/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/NotFound/index.jsx");
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
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "5A9N");
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          style: {
            margin: '0 0 15px 0'
          }
        }, notes.map(function (value, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
            key: index,
            style: value.style,
            click: value.click
          }, value.children);
        }));
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
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/products/".concat(displayInfoId), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/reservations/date', {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button */ "5A9N");
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _ReviewContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ReviewContainer */ "D8/H");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ProductInfo */ "8Lov");





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
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/products/".concat(displayInfoId), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
  }) : '', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      color: '#fff',
      backgroundColor: '#1ec800',
      borderTop: 'none'
    },
    click: "/reserve/".concat(displayInfoId)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "fn fn-nbooking-calender2"
  }), ' 예매하기'))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReviewContainer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    displayInfoId: displayInfoId,
    reviews: productData.comments,
    averageScore: productData.averageScore
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../NotFound */ "HNAl");
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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
  isTransparent: true
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotFound__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null))))), document.getElementById('content'));

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
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/products/".concat(displayInfoId), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "FeZ6");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TicketInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TicketInfo */ "KTKg");
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "5A9N");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var TicketInfoList = function TicketInfoList(props) {
  var infos = props.infos,
      actions = props.actions,
      basisCount = props.basisCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (infos.length >= basisCount) {
      setCount(basisCount);
    } else {
      setCount(infos.length);
    }
  }, [infos]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var list = containerRef.current.firstElementChild;
    var buttonHeight = containerRef.current.childElementCount > 1 ? containerRef.current.lastElementChild.offsetHeight : 0;

    if (list) {
      setHeight(list.offsetHeight + buttonHeight);
    }
  }, [count]);

  var handleOpen = function handleOpen() {
    if (infos.length >= count + basisCount) {
      setCount(count + basisCount);
    } else {
      setCount(infos.length);
    }
  };

  var handleFold = function handleFold() {
    if (count - basisCount > 0) {
      setCount(count - basisCount);
    } else {
      setCount(0);
    }
  };

  var showButton = function showButton() {
    /*
     *  1. 버튼이 없는 상태
     *   2. more 만 있는 상태
     *    3. more,fold만 있는 상태
     *    4. fold만 있는 상태
     *  <Button key={index} style={value.style} click={value.click}>
            {value.children}
     */
    if (infos.length <= basisCount) {
      //1
      return '';
    }

    if (count <= basisCount) {
      // 2 최초 혹은 최대한 줄어든 상태
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        click: handleOpen
      }, "\uB354\uBCF4\uAE30"));
    }

    if (infos.length > count) {
      // 3 중간 단계
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        click: handleOpen
      }, "\uB354\uBCF4\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        click: handleFold
      }, "\uC811\uAE30"));
    }

    if (infos.length === count) {
      // 4 최종 단계
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        click: handleFold
      }, "\uC811\uAE30"));
    }

    return '';
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "TicketInfoList",
    ref: containerRef,
    style: {
      height: height
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ol", null, infos.slice(0, count).map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TicketInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      info: value,
      actions: actions
    });
  })), showButton());
};

__signature__(TicketInfoList, "useState{[count, setCount](0)}\nuseState{[height, setHeight](0)}\nuseRef{containerRef}\nuseEffect{}\nuseEffect{}");

TicketInfoList.defaultProps = {
  basisCount: 4
};
TicketInfoList.propTypes = {
  infos: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  basisCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
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
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Button */ "5A9N");





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
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/reservations', reservationInfo, {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              });

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
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      padding: '0 10px 10px 10px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      backgroundColor: state.submit ? '#1EC900' : '#D1D1D1',
      fontSize: '16px',
      fontFamily: 'Nanum Gothic Bold',
      color: '#fff',
      transition: 'background-color 1s'
    },
    click: confirmSubmit
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "spr_book ico_naver_s",
    style: {
      verticalAlign: 'middle'
    }
  }), ' 예약하기')))));
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
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/auth/writereview/".concat(productId), {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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

/***/ "lJq3":
/*!************************************!*\
  !*** ./src/jsx/NotFound/style.css ***!
  \************************************/
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
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Button */ "5A9N");




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
      var revisionSrc = imageSrc.slice(0, 4) === 'blob' ? imageSrc : "/".concat(imageSrc);
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
                formObj.append('exImage', true);
              }

              _context.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_5___default()({
                method: isPost ? 'POST' : 'PUT',
                url: "/api/reservations/".concat(id, "/comments"),
                data: formObj,
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
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
  }))), isPost ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      padding: '10px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      backgroundColor: '#1EC800',
      color: '#fff',
      fontSize: '17px',
      fontFamily: 'Nanum Gothic Bold'
    },
    click: function click() {
      confirmModal('리뷰를 등록 하시겠습니까?', handleSubmit);
    }
  }, "\uB9AC\uBDF0 \uB4F1\uB85D")) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      backgroundColor: '#1EC800',
      color: '#fff',
      fontSize: '17px',
      fontFamily: 'Nanum Gothic Bold'
    },
    click: function click() {
      confirmEdit(handleSubmit, score, comment, imageSrc);
    }
  }, "\uC218\uC815"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      backgroundColor: '#D8DBDE',
      fontSize: '17px',
      fontFamily: 'Nanum Gothic Bold'
    },
    click: function click() {
      confirmCancel();
    }
  }, "\uCDE8\uC18C"))));
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
  var id = props.id,
      infos = props.infos,
      text = props.text,
      actions = props.actions,
      isGreen = props.isGreen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "Ticket",
    id: id
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
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
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
/* harmony import */ var _FlexContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FlexContainer */ "2d9I");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "5A9N");


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
  }, textObj.detail)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, textObj.simple), textObj.detail ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlexContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      backgroundColor: '#f3f5f6',
      borderLeft: 'none',
      borderRight: 'none'
    },
    click: showMoreDesc
  }, isFold ? openText : foldText)) : '');
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
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/promotions', {
                  headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                  }
                });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9GbGV4Q29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0RldGFpbEltYWdlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RvdGFsQ291bnQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpbk5hdkJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0SW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5wdXRMaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5Db250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTGF5b3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5JbWFnZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvQXBwL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3REZXNjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0NvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluTmF2QmFyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlZpZXcvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mb0xpc3Qvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvTG9naW5Gb3JtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0ZsZXhDb250YWluZXIvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvVG90YWxDb3VudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ob3RGb3VuZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Qm94L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEhlYWQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0RldGFpbENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlckluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVE9TL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5WaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1N1Yk5hdkJhci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdMaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0FwcC9hcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3UHJvdmlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VUaXRsZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRIZWFkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RPUy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRJbmZvTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRGVzYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2YXRpb25Db3VudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9TdWJOYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9IZWFkZXIvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZXJJbmZvL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1N1bW1hcnkvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3Q29udGFpbmVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9FdmVudEluZm8vc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvV3JpdGVSZXZpZXdDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5wdXRMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYkNvbnRyb2xsZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTG9naW5Gb3JtL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5WaWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Q29udGFpbmVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlVGl0bGUvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEJveC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ob3RGb3VuZC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluQ29udGFpbmVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3RWRpdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdERlc2MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZURlc2Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5wdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3RWRpdC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9tb3Rpb25JbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9OYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluSW1hZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldElucHV0L3N0eWxlLmNzcyJdLCJuYW1lcyI6WyJFdmVudEluZm8iLCJwcm9wcyIsImRpc2NvdW50SW5mbyIsImpvaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkltYWdlU2xpZGVyIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiZGVncmVlIiwidHJhbnNpdGlvblRpbWUiLCJpbWFnZXMiLCJpbWFnZVdpZHRoIiwiaXNQcm9tb3Rpb24iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdXQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiZGlzcGxheUluZm9JZCIsInNhdmVGaWxlTmFtZSIsImRlZmF1bHRQcm9wcyIsIm51bWJlciIsInNoYXBlIiwiYm9vbCIsImZ1bmMiLCJGbGV4Q29udGFpbmVyIiwic3R5bGUiLCJjaGlsZHJlbiIsIm9iamVjdCIsIm5vZGUiLCJEZXRhaWxJbWFnZSIsInRpdGxlIiwidXNlU3RhdGUiLCJzZXREZWdyZWUiLCJzZXRJbWFnZVdpZHRoIiwic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwiaW1hZ2VMaXN0IiwidXNlUmVmIiwiZG9pbmdSZXNpemUiLCJjdXJyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGllbnRXaWR0aCIsImRvbmVSZXNpemUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVzaXplRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxlZnRTY3JvbGwiLCJyaWdodFNjcm9sbCIsImxlbmd0aCIsImFycmF5IiwiTWFpbk5hdkJhciIsImlzVHJhbnNwYXJlbnQiLCJpc0xvZ291dGFibGUiLCJlbWFpbCIsInNldEVtYWlsIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VDb250ZXh0IiwiTW9kYWxDb250ZXh0IiwiYWxlcnRNb2RhbCIsImZldGNoRW1haWwiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwiaGFuZGxlTG9nb3V0Iiwic3RhdHVzIiwicHVzaCIsIlJlc2VydmF0aW9uQ291bnQiLCJ0b1VzZWRMZW4iLCJ1c2VkTGVuIiwiY2FuY2VsZWRMZW4iLCJkaXZpc2lvbnMiLCJCdXR0b24iLCJjbGljayIsIm9uZU9mVHlwZSIsIk1haW5Db250YWluZXIiLCJiYXNpc0NvdW50Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJwcm9kdWN0Q291bnQiLCJzZXRQcm9kdWN0Q291bnQiLCJBcnJheSIsImZpbGwiLCJ2aWV3cyIsInNldFZpZXdzIiwidmlld3NBcnIiLCJzZXRWaWV3c0FyciIsImNhdGVnb3J5UHJvZHVjdHMiLCJzZXRDYXRlZ29yeVByb2R1Y3RzIiwic2hvd2luZ0NvdW50Iiwic2V0U2hvd2luZ0NvdW50IiwiaXNGZXRjaGVkIiwic2V0SXNGZXRjaGVkIiwibGFiZWxzIiwiZG9jdW1lbnQiLCJmZXRjaFByb2R1Y3RzIiwiaXRlbXMiLCJtb2RpZmllZENhdGVnb3J5IiwibW9kaWZpZWRWaWV3c0FyciIsInNsaWNlIiwiaW5mbyIsIm1vZGlmaWVkVmlld3MiLCJzaG93TW9yZVByb2R1Y3QiLCJ2aWV3c0xlbiIsInByb2R1Y3RzTGVuIiwiZmluYWxJbmQiLCJmb3JFYWNoIiwic3BlY2lmaWNQcm9kdWN0cyIsImFsbFByb2R1Y3RzIiwiY2F0ZWdvcnlJZCIsImNvcGllZFZpZXdzIiwiaXNNb3JlU2hvd2luZyIsImNyZWF0ZUNvbnRleHQiLCJzZXRJc01vZGFsIiwic2V0TW9kYWxDaGlsZHJlbiIsImNvbmZpcm1Nb2RhbCIsImltYWdlTW9kYWwiLCJMYXlvdXQiLCJpc01vZGFsIiwibW9kYWxDaGlsZHJlbiIsInRleHQiLCJhY3Rpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsInNyYyIsIkFjdGlvbkNvbnRleHQiLCJjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24iLCJSZXNlcnZhdGlvbkNvbnRhaW5lciIsInRvVXNlZCIsInNldFRvVXNlZCIsInNldFRvVXNlZExlbiIsInVzZWQiLCJzZXRVc2VkIiwic2V0VXNlZExlbiIsImNhbmNlbGVkIiwic2V0Q2FuY2VsZWQiLCJzZXRDYW5jZWxlZExlbiIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiY2FuY2VsUmVzZXJ2YXRpb24iLCJpZCIsInB1dCIsIm1vZGlmaWVkVG9Vc2VkIiwibW9kaWZpZWRDYW5jZWxlZCIsInRvRGVsZXRlSW5kZXgiLCJmaW5kSW5kZXgiLCJyZXNlcnZhdGlvbkluZm9JZCIsInNwbGljZSIsImNhbmNlbGVkSXRlbSIsInRvSW5zZXJ0SW5kZXgiLCJQcm9kdWN0SW5mbyIsImRpc3BsYXlJbmZvIiwicHJvZHVjdENvbnRlbnQiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwbGFjZUxvdCIsInBsYWNlU3RyZWV0IiwicGxhY2VOYW1lIiwidGVsZXBob25lIiwibG9jYXRpb25JbWdTcmMiLCJPYmplY3QiLCJrZXlzIiwiRm9vdGVyIiwiaXNSaXNlYWJsZSIsInNldElzUmlzZWFibGUiLCJzZXRJbnRlcnZhbCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJpbm5lckhlaWdodCIsImNsZWFySW50ZXJ2YWwiLCJSZXZpZXdDb250YWluZXIiLCJpc0JyaWVmIiwiZXhSZXZpZXdzIiwicmV2aWV3cyIsImV4QXZlcmFnZVNjb3JlIiwiYXZlcmFnZVNjb3JlIiwic2V0UmV2aWV3cyIsInNldEF2ZXJhZ2VTY29yZSIsImlzTW9kaWZpYWJsZSIsInNldElzTW9kaWZpYWJsZSIsImV4RGF0YSIsInNldEV4RGF0YSIsInN0eWxlUmVmIiwiaGVhZCIsInJlbW92ZUNoaWxkIiwiTnVtYmVyIiwibW9kaWZpZWRBdmVyYWdlU2NvcmUiLCJyZWR1Y2UiLCJhY2N1bSIsInNjb3JlIiwiTWF0aCIsInJvdW5kIiwiZGlzcGxheVN0YXIiLCJtYXhTY29yZSIsImZpbGxDb3VudCIsImZsb29yIiwicmF0aW9Db3VudCIsInN0YXJzIiwiXyIsInJhbmdlIiwiRVBTSUxPTiIsImlubmVyVGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNlaWwiLCJkZWxldGVDb21tZW50IiwibW9kaWZpZWRSZXZpZXdzIiwiZmlsdGVyIiwiY29uZmlybURlbGV0ZSIsImVkaXRDb21tZW50IiwicmV2aWV3IiwiY29tbWVudCIsImNvbW1lbnRJbWFnZXMiLCJpbWFnZVNyYyIsImNvbmZpcm1FZGl0Iiwic3VibWl0IiwiaXNQcm9jZXNzZWQiLCJjb25maXJtQ2FuY2VsIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiY29tbWVudElkIiwicHJvZHVjdElkIiwicmVzZXJ2YXRpb25EYXRlIiwicmVzZXJ2YXRpb25FbWFpbCIsImRlbGV0ZUZsYWciLCJMb2dpbkZvcm0iLCJpbnB1dFJlZiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0Iiwic3RhdHVzVGV4dCIsImJsdXIiLCJ0YXJnZXQiLCJUb3RhbENvdW50IiwiTm90Rm91bmQiLCJQcm9kdWN0Qm94IiwiaXRlbUluZm8iLCJwcm9kdWN0SW1hZ2VVcmwiLCJ0ZXh0TGltaXQiLCJpc0ZvbGQiLCJzZXRJc0ZvbGQiLCJpc0ljb25TaG93aW5nIiwic2V0SXNJY29uU2hvd2luZyIsImRldGFpbFRleHQiLCJ0ZXh0T2JqIiwidHJpbW1lZFRleHQiLCJ0cmltIiwicmVwbGFjZSIsInRleHRTaW1wbGUiLCJ0ZXh0RGV0YWlsIiwic2ltcGxlIiwiZGV0YWlsIiwic2hvd0FuZEhpZGUiLCIkIiwic2xpZGVEb3duIiwic2xpZGVVcCIsImJhY2tncm91bmRJbWFnZSIsImRpc3BsYXkiLCJUaWNrZXRJbmZvIiwiZGVzY3JpcHRpb24iLCJyZXNlcnZhdGlvbk5hbWUiLCJyZXNlcnZhdGlvblRlbCIsInByaWNlSW5mbyIsInRvdGFsUHJpY2UiLCJpc0NvbW1lbnRFeGlzdCIsImFjdGlvbnMiLCJyZXNlcnZhdGlvblN1bW1hcnkiLCJwcmljZVR5cGVNYXBwZXIiLCJwcmljZVR5cGVOYW1lIiwiY291bnQiLCJjcmVhdGVCdXR0b24iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJub3RlcyIsIm1hcmdpbiIsIlN0cmluZyIsInBhZFN0YXJ0IiwidHJhbnNmb3JtTW9uZXlVbml0IiwiUmVzZXJ2ZUNvbnRhaW5lciIsInVzZVBhcmFtcyIsInByb2R1Y3REYXRhIiwic2V0UHJvZHVjdERhdGEiLCJzZXRJbWFnZVNyYyIsImRhdGUiLCJzZXREYXRlIiwiZmV0Y2hEYXRlIiwicHJvZHVjdEltYWdlcyIsInNvbWUiLCJ0eXBlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInByb2R1Y3RQcmljZXMiLCJEZXRhaWxDb250YWluZXIiLCJzZXREaXNjb3VudEluZm8iLCJtb2RpZmllZEltYWdlcyIsImRpc2NvdW50UmF0ZSIsImNvbW1lbnRzIiwiZGlzcGxheUluZm9JbWFnZSIsIlJlc2VydmVySW5mbyIsIm5hbWUiLCJ0b3RhbFRpY2tldCIsImRpc3BhdGNoIiwiaXNWZXJpZmllZE5hbWUiLCJpc1ZlcmlmaWVkVGVsIiwiaXNWZXJpZmllZEVtYWlsIiwibWFrZUFsZXJ0IiwiaGlkZSIsIk1haW5WaWV3IiwicHJvZHVjdHMiLCJsZWZ0UHJvZHVjdHMiLCJ2IiwicmlnaHRQcm9kdWN0cyIsImVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsIldyaXRlUmV2aWV3Q29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXZpZXdQcm92aWRlciIsIkltYWdlVGl0bGUiLCJpbWFnZUxlbiIsIlRpY2tldEhlYWQiLCJpc0dyZWVuIiwiVE9TIiwiaXNDaGVja2VkIiwiaXNDb2xsZWN0aW9uRm9sZCIsInNldElzQ29sbGVjdGlvbkZvbGQiLCJpc09mZmVyRm9sZCIsInNldElzT2ZmZXJGb2xkIiwiZm9sZFRleHQiLCJzaG93VGV4dCIsImhhbmRsZUNvbGxlY3Rpb25DbGljayIsImhhbmRsZU9mZmVyQ2xpY2siLCJjaGVja2VkIiwiVGlja2V0SW5mb0xpc3QiLCJpbmZvcyIsInNldENvdW50IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiY29udGFpbmVyUmVmIiwibGlzdCIsImJ1dHRvbkhlaWdodCIsImNoaWxkRWxlbWVudENvdW50IiwibGFzdEVsZW1lbnRDaGlsZCIsIm9mZnNldEhlaWdodCIsImhhbmRsZU9wZW4iLCJoYW5kbGVGb2xkIiwic2hvd0J1dHRvbiIsIlJlc2VydmVEZXNjIiwicGxhY2UiLCJwcmljZVRleHQiLCJwcmljZUxpc3QiLCJwcmljZSIsIkhlYWRlciIsImluaXRpYWxTdGF0ZSIsInRpY2tldHMiLCJpc1RPU0NoZWNrZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJtb2RpZmllZCIsIndoZXJlIiwidGVzdCIsInRlbFJlIiwiZW1haWxSZSIsIkVycm9yIiwiUmVzZXJ2ZUZvcm0iLCJ1c2VSZWR1Y2VyIiwicGFyc2VkIiwiY29va2llIiwicGFyc2UiLCJyZXNlcnZhdGlvbkluZm8iLCJwcmljZXMiLCJyZXNlcnZhdGlvblRlbGVwaG9uZSIsInJlc2VydmF0aW9uWWVhck1vbnRoRGF5IiwibGVuIiwicHJvZHVjdFByaWNlSWQiLCJwcm9kdWN0UHJpY2VJRCIsImNvbmZpcm1TdWJtaXQiLCJzcGxpdCIsInBhZGRpbmciLCJmb250RmFtaWx5IiwidHJhbnNpdGlvbiIsInZlcnRpY2FsQWxpZ24iLCJTdWJOYXZCYXIiLCJnb0JhY2siLCJUYWJWaWV3IiwidmlldyIsIlJldmlldyIsImltZ1N0eWxlIiwic2V0SW1nU3R5bGUiLCJyZXZpZXdSZWYiLCJoYW5kbGVDbGljayIsInBhcmFncmFwaCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3BIZWlnaHQiLCJzZXRJbmZvIiwiVGlja2V0SW5wdXRMaXN0IiwiVGFiVUkiLCJzZWxlY3RlZCIsImluZGljYXRvclN0eWxlIiwibGFiZWwiLCJsZWZ0Iiwid2lkdGgiLCJUYWJDb250cm9sbGVyIiwiYWxhcm0iLCJ0b3AiLCJib3R0b20iLCJzZXRTZWxlY3RlZCIsInNldEluZGljYXRvclN0eWxlIiwidmlld1N0eWxlIiwic2V0Vmlld1N0eWxlIiwidmlld0hlaWdodCIsInNldFZpZXdIZWlnaHQiLCJ1aVJlZiIsInZpZXdSZWYiLCJzZWxlY3RlZFJlZiIsInZpZXdIZWlnaHRSZWYiLCJyZXZpc2VJbmRpY2F0b3IiLCJzZWxlY3RlZExpIiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwicmV2aXNlVmlld1dpZHRoIiwidmlld0JvZHkiLCJSZXZpZXdFZGl0IiwidGh1bWJuYWlsV2lkdGgiLCJleFNjb3JlIiwiZXhDb21tZW50IiwiZXhJbWFnZVNyYyIsImlzUG9zdCIsInNldFNjb3JlIiwic2V0Q29tbWVudCIsInRodW1ibmFpbFN0eWxlIiwic2V0VGh1bWJuYWlsU3R5bGUiLCJmb3JtIiwiaW1hZ2VSZWYiLCJpbWFnZU1lYXN1cmVtZW50IiwiSW1hZ2UiLCJyZXZpc2lvblNyYyIsIm9ubG9hZCIsInJhdGlvIiwiZmlsZXMiLCJ2YWxpZEltYWdlVHlwZSIsImZvcm1PYmoiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsInVybCIsIm1vZGlmeVJhdGluZyIsInVwbG9hZEltYWdlIiwidGVtcEltYWdlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2FuY2VsSW1hZ2VVcGxvYWQiLCJUaWNrZXQiLCJQcm9kdWN0RGVzYyIsImxpbWl0Iiwic2V0VGV4dE9iaiIsInNob3dNb3JlRGVzYyIsIm9wZW5UZXh0IiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0IiwiVGlja2V0SW5wdXQiLCJwcm9kdWN0UHJpY2UiLCJvcmlnaW5hbENvc3QiLCJQcm9tb3Rpb25JbWFnZSIsInRpbWVJbnRlcnZhbCIsInNjcm9sbGFibGUiLCJzZXRTY3JvbGxhYmxlIiwic2V0SW1hZ2VzIiwiZGVncmVlUmVmIiwic2Nyb2xsYWJsZVJlZiIsImZldGNoSW1hZ2VzIiwiYXV0b1Njcm9sbCIsInByZXZEZWdyZWUiLCJOYXZCYXIiLCJQcm9kdWN0Q29udGFpbmVyIiwiY2xhc3NOYW1lIiwiTW9kYWwiLCJNYWluSW1hZ2UiLCJhbHQiLCJSZXZpZXdTdW1tYXJ5IiwicmV2aWV3Q291bnQiLCJib3JkZXJCb3R0b20iLCJSZXZpZXdMaXN0Iiwic2hvd1Jldmlld3MiLCJyZXZpZXdzQ29tcCIsInJldmVyc2UiLCJyZXZpc2lvbkltYWdlU3JjIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxZQURtQixHQUNGRCxLQURFLENBQ25CQyxZQURtQjtBQUczQixTQUNFO0FBQVMsYUFBUyxFQUFDO0FBQW5CLEtBQ0UsdUVBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURGLEVBRUcsUUFGSCxDQURGLEVBS0UsbUlBRUUsc0VBRkYsWUFHTUEsWUFBWSxDQUFDQyxJQUFiLENBQWtCLElBQWxCLENBSE4sbUJBTEYsQ0FERjtBQWFELENBaEJEOztBQWtCQUgsU0FBUyxDQUFDSSxTQUFWLEdBQXNCO0FBQ3BCRixjQUFZLEVBQUVHLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFVBQW5DLEVBQStDQTtBQUR6QyxDQUF0QjtlQUllUixTO0FBQUE7Ozs7Ozs7Ozs7MEJBdEJUQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTE47QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1TLFdB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QUFTLENBQUNFLE1BTEY7QUFNZHlOLGlCQUFhLEVBQUUzTixpREFBUyxDQUFDQyxPQUFWLENBQ2JELGlEQUFTLENBQUN5QixLQUFWLENBQWdCO0FBQ2RILGtCQUFZLEVBQUV0QixpREFBUyxDQUFDRTtBQURWLEtBQWhCLENBRGE7QUFORCxHQUFoQixDQURPLEVBYVBDLFVBZG1CO0FBZXJCK0ssU0FBTyxFQUFFbEwsaURBQVMsQ0FBQzBCLElBQVYsQ0FBZXZCLFVBZkg7QUFnQnJCc0wsY0FBWSxFQUFFekwsaURBQVMsQ0FBQzBCLElBQVYsQ0FBZXZCLFVBaEJSO0FBaUJyQnFOLGFBQVcsRUFBRXhOLGlEQUFTLENBQUMyQixJQUFWLENBQWV4QixVQWpCUDtBQWtCckJvTixlQUFhLEVBQUV2TixpREFBUyxDQUFDMkIsSUFBVixDQUFleEIsVUFsQlQ7QUFtQnJCME4sYUFBVyxFQUFFN04saURBQVMsQ0FBQzJCLElBQVYsQ0FBZXhCLFVBbkJQO0FBb0JyQjZOLGVBQWEsRUFBRWhPLGlEQUFTLENBQUMyQixJQUFWLENBQWV4QixVQXBCVDtBQXFCckJ3TCxRQUFNLEVBQUUzTCxpREFBUyxDQUFDeUIsS0FBVixDQUFnQjtBQUN0QjJILE1BQUUsRUFBRXBKLGlEQUFTLENBQUN3QixNQURRO0FBRXRCNEssU0FBSyxFQUFFcE0saURBQVMsQ0FBQ0UsTUFGSztBQUd0QndOLFdBQU8sRUFBRTFOLGlEQUFTLENBQUNFLE1BSEc7QUFJdEIwTixZQUFRLEVBQUU1TixpREFBUyxDQUFDRTtBQUpFLEdBQWhCLEVBS0xDO0FBMUJrQixDQUF2QjtlQTZCZXVlLFU7QUFBQTs7Ozs7Ozs7OzswQkF6RlRBLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BOLHVDIiwiZmlsZSI6Im1haW4uMGJjMjBjNjdkMjZiOGU1NjZhMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBFdmVudEluZm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRpc2NvdW50SW5mbyB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJFdmVudEluZm9cIj5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19ldnRcIiAvPlxyXG4gICAgICAgIHsnIOydtOuypO2KuOygleuztCd9XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFvrhKTsnbTrsoTsmIjslb0g7Yq567OE7ZWg7J24XVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtgJHtkaXNjb3VudEluZm8uam9pbignLCAnKX0g7ZWg7J24YH1cclxuICAgICAgPC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5FdmVudEluZm8ucHJvcFR5cGVzID0ge1xyXG4gIGRpc2NvdW50SW5mbzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5JbWFnZSBmcm9tICcuLi9NYWluSW1hZ2UnO1xyXG5cclxuY29uc3QgSW1hZ2VTbGlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgLyogaW5pdFxyXG4gICAqICBkZWdyZWU6IDBcclxuICAgKiB0cmFuc2l0aW9uVGltZTogMlxyXG4gICAqICBpbWFnZXM6IFtdXHJcbiAgICogIGltYWdlV2lkdGg6IDBcclxuICAgKiBpc1Byb21vdGlvbjogdHJ1ZVxyXG4gICAqL1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkZWdyZWUsXHJcbiAgICB0cmFuc2l0aW9uVGltZSxcclxuICAgIGltYWdlcyxcclxuICAgIGltYWdlV2lkdGgsXHJcbiAgICBpc1Byb21vdGlvbixcclxuICAgIGhhbmRsZVRyYW5zaXRpb25FbmQsXHJcbiAgICBoYW5kbGVNb3VzZU92ZXIsXHJcbiAgICBoYW5kbGVNb3VzZU91dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17YEltYWdlU2xpZGVyICR7aXNQcm9tb3Rpb24gPyAncHJvbW90aW9uJyA6ICdkZXRhaWwnfWB9XHJcbiAgICAgIG9uVHJhbnNpdGlvbkVuZD17aGFuZGxlVHJhbnNpdGlvbkVuZH1cclxuICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn1cclxuICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XHJcbiAgICA+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2ltYWdlV2lkdGggKiBkZWdyZWV9cHgpYCxcclxuICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dHJhbnNpdGlvblRpbWV9c2AsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmICh2YWx1ZSAmJiBpc1Byb21vdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgZGV0YWlsLyR7dmFsdWUuZGlzcGxheUluZm9JZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPE1haW5JbWFnZSBzcmM9e3ZhbHVlLnNhdmVGaWxlTmFtZX0gYWx0PVwicHJvbW90aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkltYWdlIHNyYz17YC8ke3ZhbHVlLnNhdmVGaWxlTmFtZX1gfSBhbHQ9XCJpdGVtSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSk7XHJcblxyXG5JbWFnZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogKCkgPT4ge30sXHJcbiAgaGFuZGxlTW91c2VPdmVyOiAoKSA9PiB7fSxcclxuICBoYW5kbGVNb3VzZU91dDogKCkgPT4ge30sXHJcbn07XHJcblxyXG5JbWFnZVNsaWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgZGVncmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VXaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzUHJvbW90aW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGhhbmRsZU1vdXNlT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFuZGxlTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEZsZXhDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0eWxlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiRmxleENvbnRhaW5lclwiIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5GbGV4Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZToge30sXHJcbiAgY2hpbGRyZW46ICcnLFxyXG59O1xyXG5cclxuRmxleENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxleENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHJlc2l6ZUVuZCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi9JbWFnZVNsaWRlcic7XHJcbmltcG9ydCBJbWFnZVRpdGxlIGZyb20gJy4uL0ltYWdlVGl0bGUnO1xyXG5cclxuLy8gRGV0YWlsQ29udGFpbmVy7JeQ7IScIGltYWdlc+yZgCB0aXRsZeydhCDspJjslbwgIO2VmOqzoCBpbWFnZXPripQg7ZWE7YSw66eB7J2EIOqxsOyzkOuGlOyVvCDrkKhcclxuLy8g7Iqk7YGs66GkIOyLnOqwhCh0cmFuc2l0aW9uVGltZSkgZGVmYXVsdCAx7LSIXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IERldGFpbEltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZXMsIHRpdGxlLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbWFnZVdpZHRoLCBzZXRJbWFnZVdpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0cmFuc2l0aW9uRHVyYXRpb24sIHNldFRyYW5zaXRpb25EdXJhdGlvbl0gPSB1c2VTdGF0ZSh0cmFuc2l0aW9uVGltZSk7XHJcbiAgY29uc3QgaW1hZ2VMaXN0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBkb2luZ1Jlc2l6ZSA9ICgpID0+IHtcclxuICAgIHNldEltYWdlV2lkdGgoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpO1xyXG4gICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKDApO1xyXG4gIH07XHJcblxyXG4gIGxldCBkb25lUmVzaXplO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VXaWR0aChcclxuICAgICAgKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkICYmXHJcbiAgICAgICAgaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpIHx8XHJcbiAgICAgICAgMCxcclxuICAgICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZG9pbmdSZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdyZXNpemUnLFxyXG4gICAgICAoKCkgPT4ge1xyXG4gICAgICAgIGRvbmVSZXNpemUgPSByZXNpemVFbmQoKCkgPT4gc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKSk7XHJcbiAgICAgICAgcmV0dXJuIGRvbmVSZXNpemU7XHJcbiAgICAgIH0pKCksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvaW5nUmVzaXplKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvbmVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbaW1hZ2VzXSk7XHJcblxyXG4gIGNvbnN0IGxlZnRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVncmVlICE9PSAwKSB7XHJcbiAgICAgIHNldERlZ3JlZShkZWdyZWUgLSAxKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBpZiAoZGVncmVlID09PSAwKSByZXR1cm47XHJcbiAgICBkZWdyZWUgLT0gMTtcclxuICAgIGNvbnN0IGludGVydmFsID0gZmlyc3RJdGVtLmNsaWVudFdpZHRoO1xyXG4gICAgaW1hZ2VMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2ludGVydmFsICogZGVncmVlfXB4KWA7XHJcbiAgICBpbWFnZUNvdW50aW5nLmlubmVyVGV4dCA9IGAgJHtkZWdyZWUgKyAxfSBgO1xyXG4gICAgKi9cclxuICB9O1xyXG5cclxuICBjb25zdCByaWdodFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgIT09IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHNldERlZ3JlZSgoZGVncmVlICsgMSkgJSBpbWFnZXMubGVuZ3RoKTtcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICBpbWFnZUxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7aW50ZXJ2YWwgKiBkZWdyZWV9cHgpYDtcclxuICAgIGltYWdlQ291bnRpbmcuaW5uZXJUZXh0ID0gYCAke2RlZ3JlZSArIDF9IGA7XHJcbiAgICAqL1xyXG4gIH07XHJcbiAgLy8gcHJvcHMg64ukIOuEmOqyqOykmOyVvCDtlahcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJEZXRhaWxJbWFnZVwiPlxyXG4gICAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgICByZWY9e2ltYWdlTGlzdH1cclxuICAgICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvbkR1cmF0aW9ufVxyXG4gICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgICAgaXNQcm9tb3Rpb249e2ZhbHNlfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2VUaXRsZVxyXG4gICAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICAgIGltYWdlTGVuPXtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBsZWZ0U2Nyb2xsPXtsZWZ0U2Nyb2xsfVxyXG4gICAgICAgIHJpZ2h0U2Nyb2xsPXtyaWdodFNjcm9sbH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXRhaWxJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaW1hZ2VzOiBbXSxcclxuICB0aXRsZTogJycsXHJcbiAgdHJhbnNpdGlvblRpbWU6IDAuNSxcclxufTtcclxuXHJcbkRldGFpbEltYWdlLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEltYWdlO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcblxyXG4vLyBUT0RPOiBpc1RyYW5zcGFyZW506rCAIGZhbHNl7J28IOuVjCBmaXhlZOydtOuvgOuhnCBzdHlsZeqwneyytOqwgCDsnojslrTslbwg65CoXHJcblxyXG5jb25zdCBNYWluTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc1RyYW5zcGFyZW50LCBpc0xvZ291dGFibGUsIHN0eWxlIH0gPSBwcm9wcztcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hFbWFpbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2F1dGgvZW1haWwnLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkYXRhKSBzZXRFbWFpbChkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRW1haWwoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2F1dGgvbG9nb3V0Jywge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfroZzqt7jslYTsm4Mg65CY7JeI7Iq164uI64ukJywgKCkgPT4ge1xyXG4gICAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2XHJcbiAgICAgIGNsYXNzTmFtZT17YE1haW5OYXZCYXIgJHtpc1RyYW5zcGFyZW50ID8gJ3RyYW5zcGFyZW50JyA6ICdmaXhlZCd9YH1cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgPlxyXG4gICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uLnBuZ1wiIGFsdD1cIm5hdmVyIGljb25cIiAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIHtpc0xvZ291dGFibGUgPyAoXHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgIDxoMj57ZW1haWwgPyAn66Gc6re47JWE7JuDJyA6ICfsmIjslb3tmZXsnbgnfTwvaDI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMaW5rIHRvPXtlbWFpbCA/ICcvbXlyZXNlcnZhdGlvbicgOiAnL2Jvb2tpbmdsb2dpbid9PlxyXG4gICAgICAgICAgPGgyPntlbWFpbCB8fCAn7JiI7JW97ZmV7J24J308L2gyPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKX1cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5NYWluTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzTG9nb3V0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIOyemOyemO2VmOqyjCDsqrzqsKTsiJgg7J6I7J2EIOqygyDqsJnsnYxcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvVXNlZExlbiwgdXNlZExlbiwgY2FuY2VsZWRMZW4sIGRpdmlzaW9ucyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc2VydmF0aW9uQ291bnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fYm9vazJcIiAvPlxyXG4gICAgICAgICAgICAgIHsnIOyghOyytCd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt0b1VzZWRMZW4gKyB1c2VkTGVuICsgY2FuY2VsZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtkaXZpc2lvbnNbMF19YH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2Jvb2tfc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgeycg7J207Jqp7JiI7KCVJ31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgxPnt0b1VzZWRMZW59PC9oMT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj17YCMke2RpdmlzaW9uc1sxXX1gfT5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgeycg7J207Jqp7JmE66OMJ31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgxPnt1c2VkTGVufTwvaDE+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtkaXZpc2lvbnNbMl19YH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2JhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgeycg7Leo7IaMwrftmZjrtognfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDE+e2NhbmNlbGVkTGVufTwvaDE+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmF0aW9uQ291bnQucHJvcFR5cGVzID0ge1xyXG4gIHRvVXNlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHVzZWRMZW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjYW5jZWxlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGRpdmlzaW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Db3VudDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0eWxlLCBjbGljaywgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gdHlwZW9mIGNsaWNrID09PSAnZnVuY3Rpb24nID8gKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xpY2t9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8TGluayBjbGFzc05hbWU9XCJCdXR0b25cIiB0bz17Y2xpY2t9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZToge30sXHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNsaWNrOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbi8qXHJcbiAqIOuEpOydtOuyhCDrsLDqsr0g7LSI66Gd7IOJOiAjMWVjODAwIOq4gOyekOyDiSAjZmZmO1xyXG4gKi9cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4uL01haW5WaWV3JztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcbmltcG9ydCBQcm9kdWN0Qm94IGZyb20gJy4uL1Byb2R1Y3RCb3gnO1xyXG5pbXBvcnQgVG90YWxDb3VudCBmcm9tICcuLi9Ub3RhbENvdW50JztcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGJhc2lzQ291bnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKDApOyAvLyDtmITsnqwg7ISg7YOd65CcIOy5tO2FjOqzoOumrCBpZFxyXG4gIGNvbnN0IFtwcm9kdWN0Q291bnQsIHNldFByb2R1Y3RDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gIOy5tO2FjOqzoOumrOydmCDsoJztkogg6rCc7IiYXHJcbiAgY29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZShBcnJheSg2KS5maWxsKDxNYWluVmlldyAvPikpOyAvLyBbPE1haW5WaWV3Lz4sPE1haW5WaWV3Lz5dXHJcbiAgY29uc3QgW3ZpZXdzQXJyLCBzZXRWaWV3c0Fycl0gPSB1c2VTdGF0ZShBcnJheSg2KS5maWxsKG51bGwpKTsgLy8gW1s8UHJvZHVjdEJveC8+XSxbPFByb2R1Y3RCb3gvPl1dO1xyXG4gIGNvbnN0IFtjYXRlZ29yeVByb2R1Y3RzLCBzZXRDYXRlZ29yeVByb2R1Y3RzXSA9IHVzZVN0YXRlKEFycmF5KDYpLmZpbGwobnVsbCkpO1xyXG4gIGNvbnN0IFtzaG93aW5nQ291bnQsIHNldFNob3dpbmdDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNGZXRjaGVkLCBzZXRJc0ZldGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsYWJlbHMgPSBbJ+yghOyytCcsICfsoITsi5wnLCAn666k7KeA7LusJywgJ+y9mOyEnO2KuCcsICftgbTrnpjsi50nLCAn7Jew6re5J107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9ICfrhKTsnbTrsoQg7JiI7JW9JztcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGRhdGE6IHsgaXRlbXMgfSxcclxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb2R1Y3RzJywge1xyXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhdGVnb3J5ID0gWy4uLmNhdGVnb3J5UHJvZHVjdHNdO1xyXG4gICAgICAgIG1vZGlmaWVkQ2F0ZWdvcnlbMF0gPSBpdGVtcztcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzQXJyID0gWy4uLnZpZXdzQXJyXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzQXJyWzBdID0gaXRlbXNcclxuICAgICAgICAgIC5zbGljZSgwLCBiYXNpc0NvdW50KVxyXG4gICAgICAgICAgLm1hcCgoaW5mbykgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdEJveCBrZXk9e2luZm8uZGlzcGxheUluZm9JZH0gaXRlbUluZm89e2luZm99IC8+XHJcbiAgICAgICAgICApKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzWzBdID0gPE1haW5WaWV3IHByb2R1Y3RzPXttb2RpZmllZFZpZXdzQXJyWzBdfSAvPjtcclxuICAgICAgICBzZXRDYXRlZ29yeVByb2R1Y3RzKG1vZGlmaWVkQ2F0ZWdvcnkpO1xyXG4gICAgICAgIHNldFZpZXdzQXJyKG1vZGlmaWVkVmlld3NBcnIpO1xyXG4gICAgICAgIHNldFNob3dpbmdDb3VudChzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50KTtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICBzZXRWaWV3cyhtb2RpZmllZFZpZXdzKTtcclxuICAgICAgICBzZXRJc0ZldGNoZWQodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3c0xlbiA9IHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aDtcclxuICAgIGNvbnN0IHByb2R1Y3RzTGVuID0gY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGg7XHJcbiAgICBpZiAodmlld3NMZW4gPj0gc2hvd2luZ0NvdW50ICsgYmFzaXNDb3VudCB8fCB2aWV3c0xlbiA+IHNob3dpbmdDb3VudCkge1xyXG4gICAgICAvLyB2aWV3c0FycuyXkCDsnojrjZgg6riw7KG0IOqyg+ydhCDsgqzsmqntlaAg65WMXHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICB2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA/IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnRcclxuICAgICAgICAgIDogdmlld3NMZW47XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgIDxNYWluVmlld1xyXG4gICAgICAgICAgcHJvZHVjdENvdW50PXtwcm9kdWN0Q291bnR9XHJcbiAgICAgICAgICBwcm9kdWN0cz17dmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0uc2xpY2UoMCwgZmluYWxJbmQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIHNldFNob3dpbmdDb3VudChmaW5hbEluZCk7XHJcbiAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgfSBlbHNlIGlmIChwcm9kdWN0c0xlbiA+IHZpZXdzTGVuKSB7XHJcbiAgICAgIC8vIHZpZXdzQXJy7JeQIOyxhOybjOyEnCDsgqzsmqntlaAg65WMXHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICBwcm9kdWN0c0xlbiA+PSB2aWV3c0xlbiArIGJhc2lzQ291bnRcclxuICAgICAgICAgID8gdmlld3NMZW4gKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA6IHByb2R1Y3RzTGVuO1xyXG4gICAgICBjb25zdCBtb2RpZmllZFZpZXdzQXJyID0gWy4uLnZpZXdzQXJyXTtcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XVxyXG4gICAgICAgIC5zbGljZSh2aWV3c0xlbiwgZmluYWxJbmQpXHJcbiAgICAgICAgLmZvckVhY2goKGluZm8pID0+IHtcclxuICAgICAgICAgIG1vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ucHVzaChcclxuICAgICAgICAgICAgPFByb2R1Y3RCb3gga2V5PXtpbmZvLmRpc3BsYXlJbmZvSWR9IGl0ZW1JbmZvPXtpbmZvfSAvPixcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgIDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX0gLz5cclxuICAgICAgKTtcclxuICAgICAgc2V0U2hvd2luZ0NvdW50KGZpbmFsSW5kKTtcclxuICAgICAgc2V0Vmlld3NBcnIobW9kaWZpZWRWaWV3c0Fycik7XHJcbiAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDsubTthYzqs6Drpqwg67CU64CM7JeI7J2EIOuVjCB2aWV367CU6r6464qUIOqzvOyglVxyXG4gICAgLy8gMS4g7LWc7LSIIOqzvOyglVxyXG4gICAgLy8gMi4g7LWc7LSIIOyVhOuLkCDrlYxcclxuICAgIGlmIChpc0ZldGNoZWQpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldKSB7XHJcbiAgICAgICAgLy8gMS7stZzstIgg6rO87KCVXHJcbiAgICAgICAgLy8gc2VsZWN0ZWRDYXRlZ29yeeyXkCAg7IOB7ZKI7KCV67O066W8IOuEo+qzoFxyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IHNwZWNpZmljUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBjb25zdCBbYWxsUHJvZHVjdHNdID0gY2F0ZWdvcnlQcm9kdWN0cztcclxuICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmNhdGVnb3J5SWQgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgc3BlY2lmaWNQcm9kdWN0cy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhdGVnb3J5ID0gWy4uLmNhdGVnb3J5UHJvZHVjdHNdO1xyXG4gICAgICAgIG1vZGlmaWVkQ2F0ZWdvcnlbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzO1xyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3NBcnIgPSBbLi4udmlld3NBcnJdO1xyXG4gICAgICAgIG1vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzXHJcbiAgICAgICAgICAuc2xpY2UoMCwgYmFzaXNDb3VudClcclxuICAgICAgICAgIC5tYXAoKGluZm8pID0+IChcclxuICAgICAgICAgICAgPFByb2R1Y3RCb3gga2V5PXtpbmZvLmRpc3BsYXlJbmZvSWR9IGl0ZW1JbmZvPXtpbmZvfSAvPlxyXG4gICAgICAgICAgKSk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgICAgbW9kaWZpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICAgIDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldENhdGVnb3J5UHJvZHVjdHMobW9kaWZpZWRDYXRlZ29yeSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdENvdW50KHNwZWNpZmljUHJvZHVjdHMubGVuZ3RoKTtcclxuICAgICAgICBzZXRWaWV3c0Fycihtb2RpZmllZFZpZXdzQXJyKTtcclxuICAgICAgICBzZXRWaWV3cyhtb2RpZmllZFZpZXdzKTtcclxuICAgICAgICBzZXRTaG93aW5nQ291bnQoYmFzaXNDb3VudCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoID49IGJhc2lzQ291bnQpIHtcclxuICAgICAgICAvLyBsZW5ndGjripQg7J6E7IucIO2MkOuzhCBNYWluVmlld+unjCDsnojslrTshJwg7JWI7JeQIOqwr+yImCDtjIzslYXtlbTslbwg65CoXHJcbiAgICAgICAgLy8gMi4gYmFzaXNDb3VudOuekSDsnbzsuZjtlaAg65WMXHJcbiAgICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICAgIGNvcGllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5zbGljZSgwLCBiYXNpc0NvdW50KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGgpO1xyXG4gICAgICAgIHNldFNob3dpbmdDb3VudChiYXNpc0NvdW50KTtcclxuICAgICAgICBzZXRWaWV3cyhjb3BpZWRWaWV3cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRDYXRlZ29yeV0pO1xyXG5cclxuICBjb25zdCBpc01vcmVTaG93aW5nID0gKCkgPT5cclxuICAgICgoY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XSAmJlxyXG4gICAgICBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCkgfHxcclxuICAgICAgMCkgPiBzaG93aW5nQ291bnQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5Db250YWluZXJcIj5cclxuICAgICAgPFRhYkNvbnRyb2xsZXJcclxuICAgICAgICBsYWJlbHM9e2xhYmVsc31cclxuICAgICAgICB2aWV3cz17dmlld3N9XHJcbiAgICAgICAgYWxhcm09e3NldFNlbGVjdGVkQ2F0ZWdvcnl9XHJcbiAgICAgICAgdG9wPXs8VG90YWxDb3VudCBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH0gLz59XHJcbiAgICAgICAgYm90dG9tPXtcclxuICAgICAgICAgIGlzTW9yZVNob3dpbmcoKSA/IChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW9yZVwiIG9uQ2xpY2s9e3Nob3dNb3JlUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAg642U67O06riwXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICcnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJhc2lzQ291bnQ6IDQsXHJcbn07XHJcblxyXG5NYWluQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBiYXNpc0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcbmltcG9ydCBGbGV4Q29udGFpbmVyIGZyb20gJy4uL0ZsZXhDb250YWluZXInO1xyXG5cclxuY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgc2V0SXNNb2RhbDogKCkgPT4ge30sXHJcbiAgc2V0TW9kYWxDaGlsZHJlbjogKCkgPT4ge30sXHJcbiAgYWxlcnRNb2RhbDogKCkgPT4ge30sXHJcbiAgY29uZmlybU1vZGFsOiAoKSA9PiB7fSxcclxuICBpbWFnZU1vZGFsOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNNb2RhbCwgc2V0SXNNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsQ2hpbGRyZW4sIHNldE1vZGFsQ2hpbGRyZW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBhbGVydE1vZGFsID0gKHRleHQsIGFjdGlvbikgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFRleHRcIj5cclxuICAgICAgICA8aDE+e3RleHR9PC9oMT5cclxuICAgICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRJc01vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIO2ZleyduFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4Q29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtTW9kYWwgPSAodGV4dCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzZXRNb2RhbENoaWxkcmVuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsVGV4dFwiPlxyXG4gICAgICAgIDxoMT57dGV4dH08L2gxPlxyXG4gICAgICAgIDxGbGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyODhGRUInLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIO2ZleyduFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOy3qOyGjFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4Q29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbWFnZU1vZGFsID0gKHNyYykgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGltZ1xyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldElzTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgIC8+LFxyXG4gICAgKTtcclxuICAgIHNldElzTW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNNb2RhbCkge1xyXG4gICAgICBzZXRNb2RhbENoaWxkcmVuKCcnKTtcclxuICAgIH1cclxuICB9LCBbaXNNb2RhbF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHNldElzTW9kYWwsXHJcbiAgICAgICAgc2V0TW9kYWxDaGlsZHJlbixcclxuICAgICAgICBhbGVydE1vZGFsLFxyXG4gICAgICAgIGNvbmZpcm1Nb2RhbCxcclxuICAgICAgICBpbWFnZU1vZGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHtpc01vZGFsID8gPE1vZGFsPnttb2RhbENoaWxkcmVufTwvTW9kYWw+IDogJyd9XHJcbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuZXhwb3J0IHsgTW9kYWxDb250ZXh0IH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL05hdkJhcic7XHJcbi8vIEZJWE1FOiBjeWNsZSDsoJzqsbBcclxuaW1wb3J0IFRpY2tldCBmcm9tICcuLi9UaWNrZXQnO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25Db3VudCBmcm9tICcuLi9SZXNlcnZhdGlvbkNvdW50JztcclxuXHJcbmNvbnN0IEFjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb246ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b1VzZWQsIHNldFRvVXNlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvVXNlZExlbiwgc2V0VG9Vc2VkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt1c2VkLCBzZXRVc2VkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXNlZExlbiwgc2V0VXNlZExlbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2FuY2VsZWQsIHNldENhbmNlbGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2FuY2VsZWRMZW4sIHNldENhbmNlbGVkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3QgZGl2aXNpb25zID0gWyd0b1VzZWQnLCAndXNlZCcsICdjYW5jZWxlZCddO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSAn7JiI7JW9IO2ZleyduCc7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcmVzZXJ2YXRpb25zJywge1xyXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUb1VzZWQoZGF0YS50b1VzZWQpO1xyXG4gICAgICAgIHNldFRvVXNlZExlbihkYXRhLnRvVXNlZC5sZW5ndGgpO1xyXG4gICAgICAgIHNldFVzZWQoZGF0YS51c2VkKTtcclxuICAgICAgICBzZXRVc2VkTGVuKGRhdGEudXNlZC5sZW5ndGgpO1xyXG4gICAgICAgIHNldENhbmNlbGVkKGRhdGEuY2FuY2VsZWQpO1xyXG4gICAgICAgIHNldENhbmNlbGVkTGVuKGRhdGEuY2FuY2VsZWQubGVuZ3RoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBkYXRhLCBzdGF0dXMgfSxcclxuICAgICAgICB9ID0gZXJyb3I7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBhbGVydE1vZGFsKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbFJlc2VydmF0aW9uID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MucHV0KGAvYXBpL3Jlc2VydmF0aW9ucy8ke2lkfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRUb1VzZWQgPSBbLi4udG9Vc2VkXTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhbmNlbGVkID0gWy4uLmNhbmNlbGVkXTtcclxuICAgICAgICBjb25zdCB0b0RlbGV0ZUluZGV4ID0gbW9kaWZpZWRUb1VzZWQuZmluZEluZGV4KFxyXG4gICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS5yZXNlcnZhdGlvbkluZm9JZCA9PT0gaWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBbY2FuY2VsZWRJdGVtXSA9IG1vZGlmaWVkVG9Vc2VkLnNwbGljZSh0b0RlbGV0ZUluZGV4LCAxKTtcclxuICAgICAgICBjb25zdCB0b0luc2VydEluZGV4ID0gbW9kaWZpZWRDYW5jZWxlZC5maW5kSW5kZXgoXHJcbiAgICAgICAgICAodmFsdWUpID0+IHZhbHVlLnJlc2VydmF0aW9uSW5mb0lkID4gaWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodG9JbnNlcnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgIG1vZGlmaWVkQ2FuY2VsZWQucHVzaChjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtb2RpZmllZENhbmNlbGVkLnNwbGljZSh0b0luc2VydEluZGV4LCAwLCBjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUb1VzZWQobW9kaWZpZWRUb1VzZWQpO1xyXG4gICAgICAgIHNldFRvVXNlZExlbih0b1VzZWRMZW4gLSAxKTtcclxuICAgICAgICBzZXRDYW5jZWxlZChtb2RpZmllZENhbmNlbGVkKTtcclxuICAgICAgICBzZXRDYW5jZWxlZExlbihjYW5jZWxlZExlbiArIDEpO1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+yYiOyVveydtCDst6jshozrkJjsl4jsirXri4jri6QnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHJlc3BvbnNlOiB7IGRhdGEsIHN0YXR1cyB9LFxyXG4gICAgICB9ID0gZXJyb3I7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+yemOuqu+uQnCDsmpTssq3snoXri4jri6QnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uZmlybU1vZGFsKFxyXG4gICAgICAgICftlZzrsogg7Leo7IaM7ZWY7Iuc66m0IOuLpOyLnCDrkJjrj4zrprQg7IiYIOyXhuyKteuLiOuLpC4g6re4656Y64+EIO2VmOyLnOqyoOyKteuLiOq5jD8nLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNhbmNlbFJlc2VydmF0aW9uKGlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc2VydmF0aW9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgIHRvVXNlZExlbj17dG9Vc2VkTGVufVxyXG4gICAgICAgICAgdXNlZExlbj17dXNlZExlbn1cclxuICAgICAgICAgIGNhbmNlbGVkTGVuPXtjYW5jZWxlZExlbn1cclxuICAgICAgICAgIGRpdmlzaW9ucz17ZGl2aXNpb25zfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpY2tldFxyXG4gICAgICAgICAgaWQ9e2RpdmlzaW9uc1swXX1cclxuICAgICAgICAgIHRleHQ9XCLsmIjslb0g7ZmV7KCVXCJcclxuICAgICAgICAgIGluZm9zPXt0b1VzZWR9XHJcbiAgICAgICAgICBhY3Rpb25zPXtbJ2NhbmNlbCddfVxyXG4gICAgICAgICAgaXNHcmVlblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpY2tldFxyXG4gICAgICAgICAgaWQ9e2RpdmlzaW9uc1sxXX1cclxuICAgICAgICAgIHRleHQ9XCLsnbTsmqkg7JmE66OMXCJcclxuICAgICAgICAgIGluZm9zPXt1c2VkfVxyXG4gICAgICAgICAgYWN0aW9ucz17Wyd3cml0ZVJldmlldyddfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpY2tldCBpZD17ZGl2aXNpb25zWzJdfSB0ZXh0PVwi7Leo7IaM65CcIOyYiOyVvVwiIGluZm9zPXtjYW5jZWxlZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uQ29udGFpbmVyO1xyXG5leHBvcnQgeyBBY3Rpb25Db250ZXh0IH07XHJcblxyXG4vKlxyXG5SZXNlcnZhdGlvbkNvbnRhaW5lciDihpIgUmVzZXJ2YXRpb25Db3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpIgVGlja2V0IOKGkiBUaWNrZXRIZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGkiBUaWNrZXRJbmZvTGlzdCDihpIgVGlja2V0SW5mb1xyXG4qL1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVGFiQ29udHJvbGxlciBmcm9tICcuLi9UYWJDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IFByb2R1Y3RJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGlzcGxheUluZm8sXHJcbiAgICBkaXNwbGF5SW5mbzoge1xyXG4gICAgICBwcm9kdWN0Q29udGVudCxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBwbGFjZUxvdCxcclxuICAgICAgcGxhY2VTdHJlZXQsXHJcbiAgICAgIHBsYWNlTmFtZSxcclxuICAgICAgdGVsZXBob25lLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uSW1nU3JjLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbdmlld3MsIHNldFZpZXdzXSA9IHVzZVN0YXRlKEFycmF5KDIpLmZpbGwobnVsbCkpO1xyXG4gIGNvbnN0IGxhYmVscyA9IFsn7IOB7IS47KCV67O0JywgJ+yYpOyLnOuKlOq4uCddO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGRpc3BsYXlJbmZvKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc2V0Vmlld3MoW1xyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb2R1Y3REZXRhaWxcIj5cclxuICAgICAgICAgIDxoMj5b7IaM6rCcXTwvaDI+XHJcbiAgICAgICAgICA8cD57cHJvZHVjdENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgPGgyPlvqs7Xsp4Dsgqztla1dPC9oMj5cclxuICAgICAgICA8L2FydGljbGU+LFxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgLyR7bG9jYXRpb25JbWdTcmN9YH0gYWx0PVwibG9jYXRpb25cIiAvPlxyXG4gICAgICAgICAgPGgyPntwcm9kdWN0RGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jVGV4dFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tcGluNFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57cGxhY2VMb3R9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyZXlUZXh0XCI+7KeA67KIPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAge3BsYWNlU3RyZWV0fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmV5VGV4dFwiPntwbGFjZU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jYWxsMlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57dGVsZXBob25lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmluZFJvYWRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1wYXRoLWZpbmQyXCIgLz5cclxuICAgICAgICAgICAgICDquLjssL7quLBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNhci1maW5kMlwiIC8+XHJcbiAgICAgICAgICAgICAg64K067mE6rKM7J207IWYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPixcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BsYXlJbmZvXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0SW5mb1wiPlxyXG4gICAgICA8VGFiQ29udHJvbGxlciBsYWJlbHM9e2xhYmVsc30gdmlld3M9e3ZpZXdzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0SW5mby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGlzcGxheUluZm86IHt9LFxyXG4gIGxvY2F0aW9uSW1nU3JjOiAnJyxcclxufTtcclxuXHJcblByb2R1Y3RJbmZvLnByb3BUeXBlcyA9IHtcclxuICBkaXNwbGF5SW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHByb2R1Y3RDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2VMb3Q6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZVN0cmVldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRlbGVwaG9uZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSxcclxuICBsb2NhdGlvbkltZ1NyYzogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc1Jpc2VhYmxlLCBzZXRJc1Jpc2VhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICBzZXRJc1Jpc2VhYmxlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzUmlzZWFibGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIkZvb3RlclwiPlxyXG4gICAgICB7aXNSaXNlYWJsZSA/IChcclxuICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tdXAxXCIgLz5cclxuICAgICAgICAgIHsnIFRPUCd9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhdXRpb25cIj5cclxuICAgICAgICDrhKTsnbTrsoQo7KO8KeuKlCDthrXsi6DtjJDrp6TsnZgg64u57IKs7J6Q6rCAIOyVhOuLiOupsCwg7IOB7ZKI7J2Y7KCV67O0LCDqsbDrnpjsobDqsbQsIOydtOyaqSDrsI9cclxuICAgICAgICDtmZjrtogg65Ox6rO8IOq0gOugqO2VnCDsnZjrrLTsmYAg7LGF7J6E7J2AIOqwgSDtmozsm5Dsl5Dqsowg7J6I7Iq164uI64ukLlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPsKpIE5BVkVSIENvcnAuPC9zcGFuPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgUmV2aWV3U3VtbWFyeSBmcm9tICcuLi9SZXZpZXdTdW1tYXJ5JztcclxuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi4vUmV2aWV3TGlzdCc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBGbGV4Q29udGFpbmVyIGZyb20gJy4uL0ZsZXhDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5jb25zdCBSZXZpZXdDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpc0JyaWVmLFxyXG4gICAgZGlzcGxheUluZm9JZCxcclxuICAgIHJldmlld3M6IGV4UmV2aWV3cyxcclxuICAgIGF2ZXJhZ2VTY29yZTogZXhBdmVyYWdlU2NvcmUsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXZlcmFnZVNjb3JlLCBzZXRBdmVyYWdlU2NvcmVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzTW9kaWZpYWJsZSwgc2V0SXNNb2RpZmlhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhEYXRhLCBzZXRFeERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3Qgc3R5bGVSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAoc3R5bGVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc3R5bGVSZWYuY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmV2aWV3cyhleFJldmlld3MpO1xyXG4gICAgc2V0QXZlcmFnZVNjb3JlKGV4QXZlcmFnZVNjb3JlID8gTnVtYmVyKGV4QXZlcmFnZVNjb3JlKSA6IDApO1xyXG4gIH0sIFtleFJldmlld3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHJldmlld3PqsIAg64us65287KGM7J2EIOuVjCBhdmVyYWdlU2NvcmXrsJTqvrjripQgZWZmZWN0XHJcbiAgICBpZiAocmV2aWV3cy5sZW5ndGggIT09IDApIHtcclxuICAgICAgbGV0IG1vZGlmaWVkQXZlcmFnZVNjb3JlID1cclxuICAgICAgICByZXZpZXdzLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+IGFjY3VtICsgTnVtYmVyKGN1cnJlbnQuc2NvcmUpLCAwKSAvXHJcbiAgICAgICAgcmV2aWV3cy5sZW5ndGg7XHJcbiAgICAgIG1vZGlmaWVkQXZlcmFnZVNjb3JlID0gTWF0aC5yb3VuZChtb2RpZmllZEF2ZXJhZ2VTY29yZSAqIDEwKSAvIDEwO1xyXG4gICAgICBzZXRBdmVyYWdlU2NvcmUobW9kaWZpZWRBdmVyYWdlU2NvcmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0QXZlcmFnZVNjb3JlKDApO1xyXG4gICAgfVxyXG4gIH0sIFtyZXZpZXdzXSk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlTdGFyID0gKHNjb3JlLCBtYXhTY29yZSA9IDUpID0+IHtcclxuICAgIC8vIGF2ZXJhZ2VTY29yZeyXkCDrp57qsowg67OE7KCQ7J2EIOumrO2EtO2VmOuKlCDtlajsiJhcclxuICAgIGNvbnN0IGZpbGxDb3VudCA9IE1hdGguZmxvb3Ioc2NvcmUpO1xyXG4gICAgY29uc3QgcmF0aW9Db3VudCA9IE1hdGgucm91bmQoc2NvcmUgKiAxMCkgLyAxMCAtIGZpbGxDb3VudDtcclxuICAgIGNvbnN0IHN0YXJzID0gXy5yYW5nZSgxLCBmaWxsQ291bnQgKyAxKS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiA8aSBrZXk9e3ZhbHVlfSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiBnZXRTdGFyXCIgLz47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHJhdGlvQ291bnQgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICBpZiAoc3R5bGVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIHN0eWxlUmVmLmN1cnJlbnQuaW5uZXJUZXh0ID0gYC5SZXZpZXdDb250YWluZXIgLlJldmlld1N1bW1hcnkgLnJhdGlvU3RhcjpiZWZvcmUgeyBcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBSaWdodCwjZjAwICR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgcmF0aW9Db3VudCAqIDEwMCxcclxuICAgICAgICAgICl9JSwjRTZFNkU2ICR7TWF0aC5yb3VuZCgoMSAtIHJhdGlvQ291bnQpICogMTAwKX0lKTtcclxuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIH1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0eWxlUmVmLmN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlUmVmLmN1cnJlbnQuaW5uZXJUZXh0ID0gYC5SZXZpZXdDb250YWluZXIgLlJldmlld1N1bW1hcnkgLnJhdGlvU3RhcjpiZWZvcmUgeyBcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBSaWdodCwjZjAwICR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgcmF0aW9Db3VudCAqIDEwMCxcclxuICAgICAgICAgICl9JSwjRTZFNkU2ICR7TWF0aC5yb3VuZCgoMSAtIHJhdGlvQ291bnQpICogMTAwKX0lKTtcclxuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIH1gO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVSZWYuY3VycmVudCk7XHJcbiAgICAgIH1cclxuICAgICAgc3RhcnMucHVzaCg8aSBrZXk9e2ZpbGxDb3VudCArIDF9IGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIHJhdGlvU3RhclwiIC8+KTtcclxuICAgIH1cclxuICAgIF8ucmFuZ2UoZmlsbENvdW50ICsgTWF0aC5jZWlsKHJhdGlvQ291bnQpICsgMSwgbWF4U2NvcmUgKyAxKS5mb3JFYWNoKFxyXG4gICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHN0YXJzLnB1c2goPGkga2V5PXt2YWx1ZX0gY2xhc3NOYW1lPVwiZm4gZm4tc3RhcjIgbm90R2V0U3RhclwiIC8+KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJDb3VudFwiPntzdGFyc308L3NwYW4+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAocmVzZXJ2YXRpb25JbmZvSWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyCreygnCDrsoTtirzsnYQg64iE66W06rOgIO2ZleyduOydhCDriIzroIDsnYQg7Iuc7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MuZGVsZXRlKFxyXG4gICAgICAgICAgYC9hcGkvcmVzZXJ2YXRpb25zLyR7cmVzZXJ2YXRpb25JbmZvSWR9L2NvbW1lbnRzYCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoJ+umrOu3sOqwgCDsgq3soJzrkJjsl4jsirXri4jri6QnKTtcclxuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkUmV2aWV3cyA9IHJldmlld3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlLnJlc2VydmF0aW9uSW5mb0lkICE9PSByZXNlcnZhdGlvbkluZm9JZCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRSZXZpZXdzKG1vZGlmaWVkUmV2aWV3cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IGRhdGEsIHN0YXR1cyB9LFxyXG4gICAgICAgIH0gPSBlcnJvcjtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSAocmVzZXJ2YXRpb25JbmZvSWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyCreygnCDrsoTtirzsnYQg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbChcclxuICAgICAgICAn66as67ew66W8IOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD8nLFxyXG4gICAgICAgIGRlbGV0ZUNvbW1lbnQocmVzZXJ2YXRpb25JbmZvSWQpLFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0Q29tbWVudCA9IChyZXNlcnZhdGlvbkluZm9JZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgYC9hdXRoL2VkaXQvcmVzZXJ2YXRpb25zLyR7cmVzZXJ2YXRpb25JbmZvSWR9L2NvbW1lbnRzYCxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmV2aWV3cy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgIChyZXZpZXcpID0+IHJldmlldy5yZXNlcnZhdGlvbkluZm9JZCA9PT0gcmVzZXJ2YXRpb25JbmZvSWQsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgeyBzY29yZSwgY29tbWVudCwgY29tbWVudEltYWdlcyB9ID0gcmV2aWV3c1tpbmRleF07XHJcbiAgICAgICAgICBzZXRFeERhdGEoe1xyXG4gICAgICAgICAgICBzY29yZSxcclxuICAgICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgICAgaWQ6IHJlc2VydmF0aW9uSW5mb0lkLFxyXG4gICAgICAgICAgICBpbWFnZVNyYzogY29tbWVudEltYWdlcy5sZW5ndGggPyBjb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZSA6ICcnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRJc01vZGlmaWFibGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IGRhdGEsIHN0YXR1cyB9LFxyXG4gICAgICAgIH0gPSBlcnJvcjtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1FZGl0ID0gKHJlc2VydmF0aW9uSW5mb0lkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq87J2EIOuIhOultOqzoCDsiJjsoJUg67KE7Yq87J2EIOuLpOyLnCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIChzdWJtaXQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYykgPT4ge1xyXG4gICAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDsiJjsoJXtlZjsi5zqsqDsirXri4jquYw/JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUHJvY2Vzc2VkID0gc3VibWl0KCk7XHJcbiAgICAgICAgaWYgKGlzUHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHJldmlld3MuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAocmV2aWV3KSA9PiByZXZpZXcucmVzZXJ2YXRpb25JbmZvSWQgPT09IHJlc2VydmF0aW9uSW5mb0lkLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkUmV2aWV3cyA9IFsuLi5yZXZpZXdzXTtcclxuICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudCA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLnNjb3JlID1cclxuICAgICAgICAgICAgdHlwZW9mIHNjb3JlID09PSAnc3RyaW5nJyA/IHNjb3JlIDogYCR7c2NvcmV9LjBgO1xyXG4gICAgICAgICAgLyogXHJcbiAgICAgICAgICAqIDEuIOq4sOyhtOyXkCDtjIzsnbzsnbQg7JeG64qUIOqyveyasFxyXG5cclxuICAgICAgICAgIDEuMSDtjIzsnbwg7LaU6rCAIFggLT4gcmVxLmZpbGXsl5Ag66y866aw6rKMIOyXhuydjFxyXG4gICAgICAgICAgMS4yIO2MjOydvCDstpTqsIAgLT4gcmVxLmZpbGXsl5Ag66y866aw6rKMIOyeiOydjFxyXG5cclxuICAgICAgICAgIDIuIOq4sOyhtOyXkCDtjIzsnbzsnbQg7J6I64qUIOqyveyasFxyXG5cclxuICAgICAgICAgIDIuMSDtjIzsnbwg7IKt7KCcIC0+IHJlcS5maWxl7JeQIOusvOumsOqyjCDsl4bsnYxcclxuICAgICAgICAgIDIuMiDtjIzsnbwg6re464yA66GcIC0+IHJlcS5maWxl7JeQIOusvOumsOqyjCDsl4bsnYxcclxuICAgICAgICAgIDIuMyDtjIzsnbwg7LaU6rCAKOyImOyglSkgLT4gcmVxLmZpbGXsl5Ag66y866aw6rKMIOyeiOydjFxyXG4gICAgICAgICAgKi9cclxuICAgICAgICAgIGlmIChpbWFnZVNyYykge1xyXG4gICAgICAgICAgICBpZiAoIW1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAvLyAxLjJcclxuICAgICAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXNbMF0gPSB7fTtcclxuICAgICAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXNbMF0uc2F2ZUZpbGVOYW1lID0gaW1hZ2VTcmM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gMi4yLDIuM1xyXG4gICAgICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgPSBpbWFnZVNyYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIDEuMeydgCDqt7jrjIDroZwg65Gs64+EIOuQqFxyXG4gICAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXMgPSBbXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFJldmlld3MobW9kaWZpZWRSZXZpZXdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXhEYXRhKHt9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybUNhbmNlbCA9ICgpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirzsnYQg64iE66W06rOgIOy3qOyGjOulvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgY29uZmlybU1vZGFsKCfrpqzrt7Ag7IiY7KCV7J2EIOy3qOyGjO2VmOyLnOqyoOyKteuLiOq5jD8nLCAoKSA9PiB7XHJcbiAgICAgIC8vIOq3uOuMgOuhnCDsnojsnYw7XHJcbiAgICAgIHNldElzTW9kaWZpYWJsZShmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmV2aWV3Q29udGFpbmVyXCI+XHJcbiAgICAgIDxSZXZpZXdTdW1tYXJ5XHJcbiAgICAgICAgYXZlcmFnZVNjb3JlPXthdmVyYWdlU2NvcmV9XHJcbiAgICAgICAgcmV2aWV3Q291bnQ9e3Jldmlld3MubGVuZ3RofVxyXG4gICAgICAgIGRpc3BsYXlTdGFyPXtkaXNwbGF5U3Rhcn1cclxuICAgICAgLz5cclxuICAgICAge3Jldmlld3MubGVuZ3RoID8gKFxyXG4gICAgICAgIDxSZXZpZXdMaXN0XHJcbiAgICAgICAgICByZXZpZXdzPXtyZXZpZXdzfVxyXG4gICAgICAgICAgaXNCcmllZj17aXNCcmllZn1cclxuICAgICAgICAgIGlzTW9kaWZpYWJsZT17aXNNb2RpZmlhYmxlfVxyXG4gICAgICAgICAgZXhEYXRhPXtleERhdGF9XHJcbiAgICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlfVxyXG4gICAgICAgICAgY29uZmlybUNhbmNlbD17Y29uZmlybUNhbmNlbH1cclxuICAgICAgICAgIGNvbmZpcm1FZGl0PXtjb25maXJtRWRpdH1cclxuICAgICAgICAgIGVkaXRDb21tZW50PXtlZGl0Q29tbWVudH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICAgIHtyZXZpZXdzLmxlbmd0aCA/IChcclxuICAgICAgICA8YXNpZGU+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYWxhcm0xXCIgLz5cclxuICAgICAgICAgICAg64Sk7J2067KEIOyYiOyVveydhCDthrXtlbQg7Iuk7KCcIOuwqeusuO2VnCDsnbTsmqnsnpDqsIAg64Ko6ri0IO2PieqwgOyeheuLiOuLpC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0JyaWVmICYmIHJldmlld3MubGVuZ3RoID4gNSA/IChcclxuICAgICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGM0Y1RjYnLFxyXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjYzBjMGMwJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xpY2s9e2AvcmV2aWV3LyR7ZGlzcGxheUluZm9JZH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICB7J+yYiOunpOyekCDrpqzrt7Ag642U67O06riwICd9XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tZm9yd2FyZDFcIiAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0JyaWVmOiB0cnVlLFxyXG4gIHJldmlld3M6IFtdLFxyXG4gIGF2ZXJhZ2VTY29yZTogJycsXHJcbn07XHJcblxyXG5SZXZpZXdDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmVyYWdlU2NvcmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmV2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICByZXNlcnZhdGlvbkVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICByZXNlcnZhdGlvbkluZm9JZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNvbW1lbnRJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICBkZWxldGVGbGFnOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgfSksXHJcbiAgKSxcclxuICBpc0JyaWVmOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0NvbnRhaW5lcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gJ+uEpOydtOuyhCDsmIjslb0g66Gc6re47J24JztcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeyBzdGF0dXNUZXh0IH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICcvYXV0aC9sb2dpbicsXHJcbiAgICAgICAgeyBlbWFpbCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHN0YXR1c1RleHQgPT09ICdPSycpIHtcclxuICAgICAgICBoaXN0b3J5LnB1c2goJy9teXJlc2VydmF0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICByZXNwb25zZTogeyBkYXRhLCBzdGF0dXMgfSxcclxuICAgICAgfSA9IGVycm9yO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmJsdXIoKTtcclxuICAgICAgICBhbGVydE1vZGFsKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkxvZ2luRm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQm94XCI+XHJcbiAgICAgICAgICA8aDE+67mE7ZqM7JuQIOyYiOyVve2ZleyduDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+7JiI7JW97J6QIOydtOuplOydvCDsnoXroKU8L3A+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInh4eHh4QG5hdmVyLmNvbVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIuuCtCDsmIjslb0g7ZmV7J24XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvdGFsQ291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RDb3VudCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlRvdGFsQ291bnRcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAg67CU66GcIOyYiOunpCDqsIDriqXtlZwg7ZaJ7IKs6rCAXHJcbiAgICAgICAgPHN0cm9uZz57YCAke3Byb2R1Y3RDb3VudH3qsJwgYH08L3N0cm9uZz5cclxuICAgICAgICDsnojsirXri4jri6RcclxuICAgICAgPC9wPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5Ub3RhbENvdW50LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdGFsQ291bnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEZsZXhDb250YWluZXIgZnJvbSAnLi4vRmxleENvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcclxuXHJcbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9ICdQYWdlIG5vdCBmb3VuZCc7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk5vdEZvdW5kXCI+XHJcbiAgICAgIDxoMT40MDQ8L2gxPlxyXG4gICAgICA8aDI+UEFHRSBOT1QgRk9VTkQ8L2gyPlxyXG4gICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnIH19IGNsaWNrPXsnLyd9PlxyXG4gICAgICAgICAg66mU7J24IO2OmOydtOyngOuhnCDsnbTrj5lcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9GbGV4Q29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0Qm94ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbUluZm86IHtcclxuICAgICAgZGlzcGxheUluZm9JZCxcclxuICAgICAgcHJvZHVjdEltYWdlVXJsLFxyXG4gICAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICAgIHBsYWNlTmFtZSxcclxuICAgICAgcHJvZHVjdENvbnRlbnQsXHJcbiAgICB9LFxyXG4gICAgdGV4dExpbWl0LFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNGb2xkLCBzZXRJc0ZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzSWNvblNob3dpbmcsIHNldElzSWNvblNob3dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRldGFpbFRleHQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0ZXh0T2JqO1xyXG4gIGxldCB0cmltbWVkVGV4dCA9IHByb2R1Y3RDb250ZW50LnRyaW0oKTtcclxuICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICBpZiAodHJpbW1lZFRleHQubGVuZ3RoID4gdGV4dExpbWl0KSB7XHJcbiAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgdGV4dExpbWl0KTtcclxuICAgIGNvbnN0IHRleHREZXRhaWwgPSB0cmltbWVkVGV4dC5zbGljZSh0ZXh0TGltaXQpO1xyXG4gICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0ZXh0U2ltcGxlLCBkZXRhaWw6IHRleHREZXRhaWwgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd0FuZEhpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNGb2xkKSB7XHJcbiAgICAgIHNldElzRm9sZChmYWxzZSk7XHJcbiAgICAgICQoZGV0YWlsVGV4dC5jdXJyZW50KS5zbGlkZURvd24oMTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzRm9sZCh0cnVlKTtcclxuICAgICAgJChkZXRhaWxUZXh0LmN1cnJlbnQpLnNsaWRlVXAoMTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUHJvZHVjdEJveFwiPlxyXG4gICAgICA8TGluayB0bz17YC9kZXRhaWwvJHtkaXNwbGF5SW5mb0lkfWB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBob3RvXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIi8ke3Byb2R1Y3RJbWFnZVVybH1cIilgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxyXG4gICAgICAgICAgPGgxPntwcm9kdWN0RGVzY3JpcHRpb259PC9oMT5cclxuICAgICAgICAgIDxoMj57cGxhY2VOYW1lfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFpblRleHRcIlxyXG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNJY29uU2hvd2luZyh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzSWNvblNob3dpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGV4dE9iai5kZXRhaWwgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7dGV4dE9iai5zaW1wbGV9XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNGb2xkID8gJ2lubGluZScgOiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3JlRGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17ZGV0YWlsVGV4dH1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0ZXh0T2JqLmRldGFpbH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbiAke2lzRm9sZCA/ICdmbi1kb3RzMicgOiAnZm4tdXAyJ31gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93QW5kSGlkZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNJY29uU2hvd2luZyA/ICcjMDAwJyA6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwPnt0ZXh0T2JqLnNpbXBsZX08L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2R1Y3RCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHRleHRMaW1pdDogMTAwLFxyXG59O1xyXG5cclxuUHJvZHVjdEJveC5wcm9wVHlwZXMgPSB7XHJcbiAgaXRlbUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0SW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgdGV4dExpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEJveDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciwgdHJhbnNmb3JtTW9uZXlVbml0IH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBBY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vUmVzZXJ2YXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgRmxleENvbnRhaW5lciBmcm9tICcuLi9GbGV4Q29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xyXG5cclxuY29uc3QgVGlja2V0SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGluZm86IHtcclxuICAgICAgcmVzZXJ2YXRpb25JbmZvSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICByZXNlcnZhdGlvbkRhdGUsXHJcbiAgICAgIHJlc2VydmF0aW9uTmFtZSxcclxuICAgICAgcmVzZXJ2YXRpb25UZWwsXHJcbiAgICAgIHByaWNlSW5mbyxcclxuICAgICAgcGxhY2VOYW1lLFxyXG4gICAgICB0b3RhbFByaWNlLFxyXG4gICAgICBwcm9kdWN0SWQsXHJcbiAgICAgIGlzQ29tbWVudEV4aXN0LFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnMsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB7IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiB9ID0gdXNlQ29udGV4dChBY3Rpb25Db250ZXh0KTtcclxuICBjb25zdCByZXNlcnZhdGlvblN1bW1hcnkgPSBwcmljZUluZm9cclxuICAgIC5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHthY2N1bX0gJHtwcmljZVR5cGVNYXBwZXIoY3VycmVudC5wcmljZVR5cGVOYW1lKX0gJHtcclxuICAgICAgICBjdXJyZW50LmNvdW50XHJcbiAgICAgIH0g66ekLGA7XHJcbiAgICB9LCAnJylcclxuICAgIC5zbGljZSgwLCAtMSk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChhY3Rpb25zKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IG5vdGVzID0gW107XHJcbiAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICAgIG5vdGVzLnB1c2goe1xyXG4gICAgICAgICAgICBzdHlsZSxcclxuICAgICAgICAgICAgY2xpY2s6IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbihyZXNlcnZhdGlvbkluZm9JZCksXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiAn7Leo7IaMJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWN0aW9uID09PSAnd3JpdGVSZXZpZXcnICYmICFpc0NvbW1lbnRFeGlzdCkge1xyXG4gICAgICAgICAgbm90ZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHN0eWxlLFxyXG4gICAgICAgICAgICBjbGljazogYC9yZXZpZXd3cml0ZS8ke3Byb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogJ+yYiOunpOyekCDrpqzrt7Ag64Ko6riw6riwJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChub3Rlcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEZsZXhDb250YWluZXIgc3R5bGU9e3sgbWFyZ2luOiAnMCAwIDE1cHggMCcgfX0+XHJcbiAgICAgICAgICAgIHtub3Rlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17aW5kZXh9IHN0eWxlPXt2YWx1ZS5zdHlsZX0gY2xpY2s9e3ZhbHVlLmNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAge3ZhbHVlLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJUaWNrZXRJbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wU2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj57YE5vLiR7U3RyaW5nKHJlc2VydmF0aW9uSW5mb0lkKS5wYWRTdGFydCg4LCAnMCcpfWB9PC9oMj5cclxuICAgICAgICA8aDE+e2Rlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snbzsoJU8L3A+XHJcbiAgICAgICAgICA8cD57cmVzZXJ2YXRpb25EYXRlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7rgrTsl608L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsnbTrpoQ8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsoITtmZTrsojtmLg8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvblRlbH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ekIOunpOyImDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGlja2V0XCI+e3Jlc2VydmF0aW9uU3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snqXshow8L3A+XHJcbiAgICAgICAgICA8cD57cGxhY2VOYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VjdGlvblwiPlxyXG4gICAgICAgIDxwPuqysOygnCDquIjslaE8L3A+XHJcbiAgICAgICAgPHA+e2Ake3RyYW5zZm9ybU1vbmV5VW5pdCh0b3RhbFByaWNlKX0g7JuQYH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y3JlYXRlQnV0dG9uKGFjdGlvbnMpfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHJlc2VydmF0aW9uSW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uVGVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRvdGFsUHJpY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgaXNDb21tZW50RXhpc3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICBwcmljZUluZm86IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICB9KS5pc1JlcXVpcmVkLFxyXG4gICAgKS5pc1JlcXVpcmVkLFxyXG4gIH0pLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL05hdkJhcic7XHJcbmltcG9ydCBSZXNlcnZlRm9ybSBmcm9tICcuLi9SZXNlcnZlRm9ybSc7XHJcbmltcG9ydCBSZXNlcnZlRGVzYyBmcm9tICcuLi9SZXNlcnZlRGVzYyc7XHJcbmltcG9ydCBNYWluSW1hZ2UgZnJvbSAnLi4vTWFpbkltYWdlJztcclxuXHJcbmNvbnN0IFJlc2VydmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbcHJvZHVjdERhdGEsIHNldFByb2R1Y3REYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHMvJHtkaXNwbGF5SW5mb0lkfWAsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0UHJvZHVjdERhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcmVzZXJ2YXRpb25zL2RhdGUnLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldERhdGUoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdERhdGEuZGlzcGxheUluZm8pIHtcclxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBg7JiI7JW9ICR7cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9ufWA7XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3REYXRhXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdERhdGEucHJvZHVjdEltYWdlcykge1xyXG4gICAgICBwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnR5cGUgPT09ICdtYScpIHtcclxuICAgICAgICAgIHNldEltYWdlU3JjKHZhbHVlLnNhdmVGaWxlTmFtZSk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcHJvZHVjdERhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzZXJ2ZUNvbnRhaW5lclwiPlxyXG4gICAgICA8TmF2QmFyXHJcbiAgICAgICAgbmFtZT17XHJcbiAgICAgICAgICBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbyAmJiBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNYWluSW1hZ2Ugc3JjPXtgLyR7aW1hZ2VTcmN9YH0gYWx0PVwibWFpbiBpbWFnZVwiIC8+XHJcbiAgICAgIDxSZXNlcnZlRGVzY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvICYmIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBwbGFjZT17cHJvZHVjdERhdGEuZGlzcGxheUluZm8gJiYgcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucGxhY2VMb3R9XHJcbiAgICAgICAgc3RhcnREYXRlPXtkYXRlLnN0YXJ0RGF0ZX1cclxuICAgICAgICBlbmREYXRlPXtkYXRlLmVuZERhdGV9XHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgLz5cclxuICAgICAgPFJlc2VydmVGb3JtXHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8gJiYgcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdElkfVxyXG4gICAgICAgIHJlc2VydmF0aW9uRGF0ZT17ZGF0ZS5yZXNlcnZhdGlvbkRhdGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZUNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuaW1wb3J0IERldGFpbEltYWdlIGZyb20gJy4uL0RldGFpbEltYWdlJztcclxuaW1wb3J0IFByb2R1Y3REZXNjIGZyb20gJy4uL1Byb2R1Y3REZXNjJztcclxuaW1wb3J0IEV2ZW50SW5mbyBmcm9tICcuLi9FdmVudEluZm8nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcbmltcG9ydCBGbGV4Q29udGFpbmVyIGZyb20gJy4uL0ZsZXhDb250YWluZXInO1xyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuLi9Qcm9kdWN0SW5mbyc7XHJcblxyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2Rpc2NvdW50SW5mbywgc2V0RGlzY291bnRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvKSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0RGF0YV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkSW1hZ2VzID0gZGF0YS5wcm9kdWN0SW1hZ2VzLmZpbHRlcihcclxuICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWUudHlwZSAhPT0gJ3RoJyxcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFByb2R1Y3REYXRhKHsgLi4uZGF0YSwgcHJvZHVjdEltYWdlczogbW9kaWZpZWRJbWFnZXMgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdERhdGEucHJvZHVjdFByaWNlcykge1xyXG4gICAgICBjb25zdCBpbmZvID0gW107XHJcbiAgICAgIHByb2R1Y3REYXRhLnByb2R1Y3RQcmljZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUuZGlzY291bnRSYXRlICYmIE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgICAgIGluZm8ucHVzaChcclxuICAgICAgICAgICAgYCR7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfSAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgdmFsdWUuZGlzY291bnRSYXRlLFxyXG4gICAgICAgICAgICApfSVgLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXREaXNjb3VudEluZm8oaW5mbyk7XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3REYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGFpbENvbnRhaW5lclwiPlxyXG4gICAgICA8RGV0YWlsSW1hZ2VcclxuICAgICAgICBpbWFnZXM9e3Byb2R1Y3REYXRhLnByb2R1Y3RJbWFnZXN9XHJcbiAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgcHJvZHVjdERhdGEuZGlzcGxheUluZm8gJiYgcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8UHJvZHVjdERlc2NcclxuICAgICAgICB0ZXh0PXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbyAmJiBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0Q29udGVudH1cclxuICAgICAgLz5cclxuICAgICAge2Rpc2NvdW50SW5mby5sZW5ndGggPyA8RXZlbnRJbmZvIGRpc2NvdW50SW5mbz17ZGlzY291bnRJbmZvfSAvPiA6ICcnfVxyXG4gICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWVjODAwJyxcclxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnbm9uZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgY2xpY2s9e2AvcmVzZXJ2ZS8ke2Rpc3BsYXlJbmZvSWR9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tbmJvb2tpbmctY2FsZW5kZXIyXCIgLz5cclxuICAgICAgICAgICAgeycg7JiI66ek7ZWY6riwJ31cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9GbGV4Q29udGFpbmVyPlxyXG4gICAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgICBhdmVyYWdlU2NvcmU9e3Byb2R1Y3REYXRhLmF2ZXJhZ2VTY29yZX1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3RJbmZvXHJcbiAgICAgICAgZGlzcGxheUluZm89e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvfVxyXG4gICAgICAgIGxvY2F0aW9uSW1nU3JjPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvSW1hZ2UgJiZcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvSW1hZ2Uuc2F2ZUZpbGVOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZXJJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmFtZSxcclxuICAgIHRlbGVwaG9uZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgdG90YWxUaWNrZXQsXHJcbiAgICBkaXNwYXRjaCxcclxuICAgIGlzVmVyaWZpZWROYW1lLFxyXG4gICAgaXNWZXJpZmllZFRlbCxcclxuICAgIGlzVmVyaWZpZWRFbWFpbCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IG1ha2VBbGVydCA9IChpZCwgdGV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxlcnRNZXNzYWdlXCI+e3RleHR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUmVzZXJ2ZXJJbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXJ2ZXJIZWFkZXJcIj5cclxuICAgICAgICA8aDI+7JiI66ek7J6QIOygleuztDwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICB7JyDtlYTsiJjsnoXroKUnfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFJlc2VydmVyXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICB7JyDsmIjrp6TsnpAnfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25OYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2Zjeq4uOuPmVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9OQU1FJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX05BTUUnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkTmFtZVxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdOYW1lJywgJ+ydtOumhOyXkOuKlCDqs7XrsLHsnbQg7J6I7Ja07ISc64qUIOyViOuQqeuLiOuLpC4nKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFRlbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAgeycg7Jew65297LKYJ31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25UZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDEwLTAwMDAtMDAwMFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9URUwnLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ1RlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ1RlbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1RFTCcgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ1RlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ1RlbCcpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkVGVsXHJcbiAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICA6IG1ha2VBbGVydCgnYWxlcnRXcm9uZ1RlbCcsICfsoITtmZTrsojtmLgg7ZiV7Iud7J20IOunnuyngCDslYrsirXri4jri6QnKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dEVtYWlsXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICB7JyDsnbTrqZTsnbwnfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uRW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieHh4eHh4QG5hdmVyLmNvbVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9FTUFJTCcsIHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJ2FsZXJ0V3JvbmdFbWFpbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ0VtYWlsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfRU1BSUwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdFbWFpbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ0VtYWlsJykuc2xpZGVEb3duKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwib3ZlcmFsbFJlc2VydmF0aW9uXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiBzdHlsZT17eyBjb2xvcjogJ3RyYW5zcGFyZW50JyB9fSAvPlxyXG4gICAgICAgICAgICB7JyDsmIjrp6TrgrTsmqknfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2Ake3Jlc2VydmF0aW9uRGF0ZX0sIOy0nSAke3RvdGFsVGlja2V0feunpGB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkRW1haWxcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nRW1haWwnLCAn7J2066mU7J28IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlckluZm8ucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRvdGFsVGlja2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZE5hbWU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZFRlbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlckluZm87XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RDb250YWluZXIgZnJvbSAnLi4vUHJvZHVjdENvbnRhaW5lcic7XHJcblxyXG5jb25zdCBNYWluVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGxlZnRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMCk7XHJcbiAgY29uc3QgcmlnaHRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMSk7XHJcblxyXG4gIHJldHVybiBwcm9kdWN0cy5sZW5ndGggPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5WaWV3XCI+XHJcbiAgICAgIDxQcm9kdWN0Q29udGFpbmVyIGNsYXNzTmFtZT1cImxlZnRcIj57bGVmdFByb2R1Y3RzfTwvUHJvZHVjdENvbnRhaW5lcj5cclxuICAgICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPVwicmlnaHRcIj57cmlnaHRQcm9kdWN0c308L1Byb2R1Y3RDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNYWluVmlld1wiIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5WaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9kdWN0czogW10sXHJcbn07XHJcblxyXG5NYWluVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5WaWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG5pbXBvcnQgRGV0YWlsQ29udGFpbmVyIGZyb20gJy4uL0RldGFpbENvbnRhaW5lcic7XHJcbmltcG9ydCBSZXNlcnZlQ29udGFpbmVyIGZyb20gJy4uL1Jlc2VydmVDb250YWluZXInO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25Db250YWluZXIgZnJvbSAnLi4vUmVzZXJ2YXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgUHJvbW90aW9uSW1hZ2UgZnJvbSAnLi4vUHJvbW90aW9uSW1hZ2UnO1xyXG5pbXBvcnQgV3JpdGVSZXZpZXdDb250YWluZXIgZnJvbSAnLi4vV3JpdGVSZXZpZXdDb250YWluZXInO1xyXG5pbXBvcnQgUmV2aWV3UHJvdmlkZXIgZnJvbSAnLi4vUmV2aWV3UHJvdmlkZXInO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi9NYWluQ29udGFpbmVyJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL05vdEZvdW5kJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QnJvd3NlclJvdXRlcj5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsLzpkaXNwbGF5SW5mb0lkXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIGlzVHJhbnNwYXJlbnQgLz5cclxuICAgICAgICAgIDxEZXRhaWxDb250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Jvb2tpbmdsb2dpblwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPExvZ2luRm9ybSAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvbXlyZXNlcnZhdGlvblwiPlxyXG4gICAgICAgICAgPE5hdkJhciBpc0xvZ291dGFibGUgLz5cclxuICAgICAgICAgIDxSZXNlcnZhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVzZXJ2ZS86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgPFJlc2VydmVDb250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jldmlldy86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgPFJldmlld1Byb3ZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGVcclxuICAgICAgICAgIHBhdGg9XCIvcmV2aWV3d3JpdGUvOnByb2R1Y3RJZFwiXHJcbiAgICAgICAgICBjb21wb25lbnQ9e1dyaXRlUmV2aWV3Q29udGFpbmVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICA8UHJvbW90aW9uSW1hZ2UgLz5cclxuICAgICAgICAgIDxNYWluQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgaXNUcmFuc3BhcmVudCAvPlxyXG4gICAgICAgICAgPE5vdEZvdW5kIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgPC9Td2l0Y2g+XHJcbiAgICA8L0xheW91dD5cclxuICA8L0Jyb3dzZXJSb3V0ZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JyksXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IFJldmlld0NvbnRhaW5lciBmcm9tICcuLi9SZXZpZXdDb250YWluZXInO1xyXG5cclxuY29uc3QgUmV2aWV3UHJvdmlkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBbcHJvZHVjdERhdGEsIHNldFByb2R1Y3REYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRQcm9kdWN0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbykge1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IGDrpqzrt7AgOiAke3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvbn1gO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0RGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXZpZXdQcm92aWRlclwiPlxyXG4gICAgICA8TmF2QmFyXHJcbiAgICAgICAgbmFtZT17XHJcbiAgICAgICAgICBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbyAmJiBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZXZpZXdDb250YWluZXJcclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIGF2ZXJhZ2VTY29yZT17cHJvZHVjdERhdGEuYXZlcmFnZVNjb3JlfVxyXG4gICAgICAgIHJldmlld3M9e3Byb2R1Y3REYXRhLmNvbW1lbnRzfVxyXG4gICAgICAgIGlzQnJpZWY9e2ZhbHNlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1Byb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBJbWFnZVRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZWdyZWUsIGltYWdlTGVuLCB0aXRsZSwgbGVmdFNjcm9sbCwgcmlnaHRTY3JvbGwgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbWFnZVRpdGxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRpbmdcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyaWdodFwiPntkZWdyZWUgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgIHtgIC8gJHtpbWFnZUxlbn1gfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICB7aW1hZ2VMZW4gPiAxID8gKFxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1iYWNrd2FyZDJcIiBvbkNsaWNrPXtsZWZ0U2Nyb2xsfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICB7aW1hZ2VMZW4gPiAxID8gKFxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1mb3J3YXJkMlwiIG9uQ2xpY2s9e3JpZ2h0U2Nyb2xsfSAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiIC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlVGl0bGUucHJvcFR5cGVzID0ge1xyXG4gIGRlZ3JlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBsZWZ0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxuICByaWdodFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRpdGxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUaWNrZXRIZWFkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0ZXh0LCBpc0dyZWVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BUaWNrZXRIZWFkICR7aXNHcmVlbiA/ICdncmVlbicgOiAnZ3JleSd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TGVmdFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TWlkZGxlXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2NoZWNrMlwiIC8+XHJcbiAgICAgICAgICB7YCAke3RleHR9YH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldFJpZ2h0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRIZWFkLnByb3BUeXBlcyA9IHtcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaXNHcmVlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEhlYWQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVE9TID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc0NoZWNrZWQsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNDb2xsZWN0aW9uRm9sZCwgc2V0SXNDb2xsZWN0aW9uRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPZmZlckZvbGQsIHNldElzT2ZmZXJGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBmb2xkVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7JyDsoJHquLAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi11cDJcIiAvPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHNob3dUZXh0ID0gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHsnIOuztOq4sCd9XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWRvd24yXCIgLz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xsZWN0aW9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDb2xsZWN0aW9uRm9sZCkge1xyXG4gICAgICBzZXRJc0NvbGxlY3Rpb25Gb2xkKGZhbHNlKTtcclxuICAgICAgJCgnLlRPUyAuY29sbGVjdGlvblVzZVRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzQ29sbGVjdGlvbkZvbGQodHJ1ZSk7XHJcbiAgICAgICQoJy5UT1MgLmNvbGxlY3Rpb25Vc2VUZXJtJykuc2xpZGVVcCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9mZmVyQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNPZmZlckZvbGQpIHtcclxuICAgICAgc2V0SXNPZmZlckZvbGQoZmFsc2UpO1xyXG4gICAgICAkKCcuVE9TIC5vZmZlclRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzT2ZmZXJGb2xkKHRydWUpO1xyXG4gICAgICAkKCcuVE9TIC5vZmZlclRlcm0nKS5zbGlkZVVwKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcml0bGNlIGNsYXNzTmFtZT1cIlRPU1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbEFncmVlbWVudFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIG5hbWU9XCJUT1NDaGVja1wiXHJcbiAgICAgICAgICBpZD1cIlRPU0NoZWNrXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX1RPUycsIGNoZWNrZWQgfSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiVE9TQ2hlY2tcIj57JyAg7J207Jqp7J6QIOyVveq0gCDsoITssrTrj5nsnZgnfTwvbGFiZWw+XHJcbiAgICAgICAgPHA+7ZWE7IiYIOuPmeydmDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fYXJyX2lwYzJcIiAvPlxyXG4gICAgICAgICAg6rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uVXNlQWdyZWVtZW50XCIgb25DbGljaz17aGFuZGxlQ29sbGVjdGlvbkNsaWNrfT5cclxuICAgICAgICAgIHtpc0NvbGxlY3Rpb25Gb2xkID8gc2hvd1RleHQgOiBmb2xkVGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uVXNlVGVybVwiPlxyXG4gICAgICAgICZsdDvqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2YJmd0O1xyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDEuIOyImOynke2VreuqqSA6IFvtlYTsiJhdIOydtOumhCwg7Jew65297LKYLCBb7ISg7YOdXSDsnbTrqZTsnbzso7zshoxcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAyLiDsiJjsp5Eg67CPIOydtOyaqeuqqeyggSA6IOyCrOyXheyekO2ajOybkOqzvCDsmIjslb3snbTsmqnsnpDsnZgg7JuQ7Zmc7ZWcIOqxsOuemCDsp4TtloksXHJcbiAgICAgICAg6rOg6rCd7IOB64u0LCDrtojrp4zsspjrpqwg65OxIOuvvOybkCDsspjrpqwsIOu2hOyfgeyhsOyglSDtlbTqsrDsnYQg7JyE7ZWcIOq4sOuhneuztOyhtCwg64Sk7J2067KEXHJcbiAgICAgICAg7JiI7JW9IOydtOyaqSDtm4Qg66as67ew7J6R7ISx7JeQIOuUsOuluCDrhKTsnbTrsoTtjpjsnbQg7Y+s7J247Yq4IOyngOq4iSDrsI8g6rSA66CoIOyViOuCtFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDMuIOuztOq0gOq4sOqwhFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIC0g7ZqM7JuQ7YOI7Ye0IOuTsSDqsJzsnbjsoJXrs7Qg7J207Jqp66qp7KCBIOuLrOyEsSDsi5zquYzsp4Ag67O06rSAXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgLSDri6gsIOyDgeuylSDrsI8g4oCY7KCE7J6Q7IOB6rGw656YIOuTseyXkOyEnOydmCDshozruYTsnpAg67O07Zi47JeQIOq0gO2VnCDrspXrpaDigJkg65OxIOq0gOugqFxyXG4gICAgICAgIOuyleugueyXkCDsnZjtlZjsl6wg7J287KCVIOq4sOqwhCDrs7TqtIDsnbQg7ZWE7JqU7ZWcIOqyveyasOyXkOuKlCDtlbTri7kg6riw6rCEIOuPmeyViCDrs7TqtIDtlahcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA0LiDrj5nsnZgg6rGw67aA6raMIOuTseyXkCDrjIDtlZwg6rOg7KeAOiDsoJXrs7Tso7zssrTripQg6rCc7J247KCV67O07J2YIOyImOynkSDrsI8g7J207JqpIOuPmeydmOulvFxyXG4gICAgICAgIOqxsOu2gO2VoCDqtozrpqzqsIAg7J6I7Jy864KYLCDsnbQg6rK97JqwIOyDge2SiCDrsI8g7ISc67mE7IqkIOyYiOyVveydtCDsoJztlZzrkKAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVlbWVudFwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2Fycl9pcGMyXCIgLz5cclxuICAgICAgICAgIOqwnOyduOygleuztCDsoJwz7J6QIOygnOqztSDrj5nsnZhcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJBZ3JlZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVPZmZlckNsaWNrfT5cclxuICAgICAgICAgIHtpc09mZmVyRm9sZCA/IHNob3dUZXh0IDogZm9sZFRleHR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJUZXJtXCI+XHJcbiAgICAgICAgJmx0O+qwnOyduOygleuztCDsoJwz7J6QIOygnOqztSDrj5nsnZgmZ3Q7XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMS4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpAgOiDrr7jrlJTslrTslaTslYTtirhcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAyLiDsoJzqs7XtlZjripQg6rCc7J247KCV67O0IO2VreuqqSA6IFvtlYTsiJhdIOuEpOydtOuyhCDslYTsnbTrlJQsIOydtOumhCwg7Jew65297LKYIFvshKDtg51dXHJcbiAgICAgICAg7J2066mU7J28IOyjvOyGjFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDMuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6Q7J2YIOydtOyaqeuqqeyggSA6IOyCrOyXheyekO2ajOybkOqzvCDsmIjslb3snbTsmqnsnpDsnZgg7JuQ7Zmc7ZWcXHJcbiAgICAgICAg6rGw656YIOynhO2WiSwg6rOg6rCd7IOB64u0LCDrtojrp4zsspjrpqwg65OxIOuvvOybkCDsspjrpqwsIOyEnOu5hOyKpCDsnbTsmqnsl5Ag65Sw66W4IOyEpOusuOyhsOyCrFxyXG4gICAgICAgIOuwjyDtmJztg50g7KCc6rO1LCDrtoTsn4HsobDsoJUg7ZW06rKw7J2EIOychO2VnCDquLDroZ3rs7TsobRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA0LiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekOydmCDqsJzsnbjsoJXrs7Qg67O07JygIOuwjyDsnbTsmqnquLDqsIQgOiDqsJzsnbjsoJXrs7RcclxuICAgICAgICDsnbTsmqnrqqnsoIEg64us7ISxIOyLnCDquYzsp4Ag67O06rSA7ZWp64uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDUuIOuPmeydmCDqsbDrtoDqtowg65Ox7JeQIOuMgO2VnCDqs6Dsp4AgOiDsoJXrs7Tso7zssrTripQg6rCc7J247KCV67O0IOygnOqztSDrj5nsnZjrpbwg6rGw67aA7ZWgXHJcbiAgICAgICAg6raM66as6rCAIOyeiOycvOuCmCwg7J20IOqyveyasCDsg4Htkogg67CPIOyEnOu5hOyKpCDsmIjslb3snbQg7KCc7ZWc65CgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvYXJpdGxjZT5cclxuICApO1xyXG59O1xyXG5cclxuVE9TLnByb3BUeXBlcyA9IHtcclxuICBpc0NoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT1M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRpY2tldEluZm8gZnJvbSAnLi4vVGlja2V0SW5mbyc7XHJcbmltcG9ydCBGbGV4Q29udGFpbmVyIGZyb20gJy4uL0ZsZXhDb250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIGFjdGlvbnMsIGJhc2lzQ291bnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbmZvcy5sZW5ndGggPj0gYmFzaXNDb3VudCkge1xyXG4gICAgICBzZXRDb3VudChiYXNpc0NvdW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldENvdW50KGluZm9zLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgfSwgW2luZm9zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ID0gY29udGFpbmVyUmVmLmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBidXR0b25IZWlnaHQgPVxyXG4gICAgICBjb250YWluZXJSZWYuY3VycmVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDFcclxuICAgICAgICA/IGNvbnRhaW5lclJlZi5jdXJyZW50Lmxhc3RFbGVtZW50Q2hpbGQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgOiAwO1xyXG4gICAgaWYgKGxpc3QpIHtcclxuICAgICAgc2V0SGVpZ2h0KGxpc3Qub2Zmc2V0SGVpZ2h0ICsgYnV0dG9uSGVpZ2h0KTtcclxuICAgIH1cclxuICB9LCBbY291bnRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIGlmIChpbmZvcy5sZW5ndGggPj0gY291bnQgKyBiYXNpc0NvdW50KSB7XHJcbiAgICAgIHNldENvdW50KGNvdW50ICsgYmFzaXNDb3VudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb3VudChpbmZvcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvbGQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY291bnQgLSBiYXNpc0NvdW50ID4gMCkge1xyXG4gICAgICBzZXRDb3VudChjb3VudCAtIGJhc2lzQ291bnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q291bnQoMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0J1dHRvbiA9ICgpID0+IHtcclxuICAgIC8qXHJcbiAgICAgKiAgMS4g67KE7Yq87J20IOyXhuuKlCDsg4Htg5xcclxuICAgICAqICAgMi4gbW9yZSDrp4wg7J6I64qUIOyDge2DnFxyXG4gICAgICogICAgMy4gbW9yZSxmb2xk66eMIOyeiOuKlCDsg4Htg5xcclxuICAgICAqICAgIDQuIGZvbGTrp4wg7J6I64qUIOyDge2DnFxyXG4gICAgICogIDxCdXR0b24ga2V5PXtpbmRleH0gc3R5bGU9e3ZhbHVlLnN0eWxlfSBjbGljaz17dmFsdWUuY2xpY2t9PlxyXG4gICAgICAgICAgICB7dmFsdWUuY2hpbGRyZW59XHJcbiAgICAgKi9cclxuICAgIGlmIChpbmZvcy5sZW5ndGggPD0gYmFzaXNDb3VudCkge1xyXG4gICAgICAvLzFcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvdW50IDw9IGJhc2lzQ291bnQpIHtcclxuICAgICAgLy8gMiDstZzstIgg7Zi57J2AIOy1nOuMgO2VnCDspITslrTrk6Ag7IOB7YOcXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhDb250YWluZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsaWNrPXtoYW5kbGVPcGVufT7rjZTrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mb3MubGVuZ3RoID4gY291bnQpIHtcclxuICAgICAgLy8gMyDspJHqsIQg64uo6rOEXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhDb250YWluZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsaWNrPXtoYW5kbGVPcGVufT7rjZTrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gY2xpY2s9e2hhbmRsZUZvbGR9Puygkeq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvRmxleENvbnRhaW5lcj5cclxuICAgICAgKTtcclxuICAgIH0gaWYgKGluZm9zLmxlbmd0aCA9PT0gY291bnQpIHtcclxuICAgICAgLy8gNCDstZzsooUg64uo6rOEXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXhDb250YWluZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsaWNrPXtoYW5kbGVGb2xkfT7soJHquLA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGlja2V0SW5mb0xpc3RcIiByZWY9e2NvbnRhaW5lclJlZn0gc3R5bGU9e3sgaGVpZ2h0IH19PlxyXG4gICAgICA8b2w+XHJcbiAgICAgICAge2luZm9zLnNsaWNlKDAsIGNvdW50KS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxUaWNrZXRJbmZvIGtleT17aW5kZXh9IGluZm89e3ZhbHVlfSBhY3Rpb25zPXthY3Rpb25zfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9vbD5cclxuICAgICAge3Nob3dCdXR0b24oKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbmZvTGlzdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFzaXNDb3VudDogNCxcclxufTtcclxuXHJcblRpY2tldEluZm9MaXN0LnByb3BUeXBlcyA9IHtcclxuICBpbmZvczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgYmFzaXNDb3VudDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEluZm9MaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmljZVR5cGVNYXBwZXIsIHRyYW5zZm9ybU1vbmV5VW5pdCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc2VydmVEZXNjID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgcGxhY2UsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcHJvZHVjdFByaWNlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHByaWNlVGV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByaWNlTGlzdCA9IHByb2R1Y3RQcmljZXMubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfSAke3RyYW5zZm9ybU1vbmV5VW5pdChcclxuICAgICAgICB2YWx1ZS5wcmljZSxcclxuICAgICAgKX3sm5BgO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJpY2VMaXN0LmpvaW4oJyAvICcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZlRGVzY1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uVGV4dFwiPlxyXG4gICAgICAgIDxoMj57ZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtwbGFjZX1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2Ake3N0YXJ0RGF0ZX0gfiAke2VuZERhdGV9YH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJnZVRleHRcIj5cclxuICAgICAgICA8aDI+7JqU6riIPC9oMj5cclxuICAgICAgICA8cD57cHJpY2VUZXh0KCl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2ZURlc2MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRlc2NyaXB0aW9uOiAnJyxcclxuICBwbGFjZTogJycsXHJcbiAgcHJvZHVjdFByaWNlczogW10sXHJcbiAgc3RhcnREYXRlOiAnJyxcclxuICBlbmREYXRlOiAnJyxcclxufTtcclxuXHJcblJlc2VydmVEZXNjLnByb3BUeXBlcyA9IHtcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzdGFydERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwcm9kdWN0UHJpY2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlRGVzYztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJIZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJzcHJfYmkgdHh0X2xvZ29cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IHRyYW5zZm9ybU1vbmV5VW5pdCA9IChudW0pID0+IHtcclxuICBsZXQgdHJhbnNmb3JtZWQgPSAnJztcclxuICBudW0gPSBudW0udG9TdHJpbmcoKTtcclxuICBjb25zdCBudW1MZW4gPSBudW0ubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bUxlbjsgaSsrKSB7XHJcbiAgICBpZiAoaSA+IDMgJiYgaSAlIDMgPT09IDEpIHtcclxuICAgICAgdHJhbnNmb3JtZWQgPSBgLCR7dHJhbnNmb3JtZWR9YDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybWVkID0gbnVtLmNoYXJBdChudW1MZW4gLSBpKSArIHRyYW5zZm9ybWVkO1xyXG4gIH1cclxuICByZXR1cm4gdHJhbnNmb3JtZWQ7XHJcbn07XHJcblxyXG5jb25zdCBwcmljZVR5cGVNYXBwZXIgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBwcmljZVR5cGUgPSB7XHJcbiAgICBBOiAn7ISx7J24JyxcclxuICAgIFk6ICfssq3shozrhYQnLFxyXG4gICAgQjogJ+ycoOyVhCcsXHJcbiAgICBTOiAn7IWL7Yq4JyxcclxuICAgIEQ6ICfsnqXslaDsnbgnLFxyXG4gICAgQzogJ+yngOyXreyjvOuvvCcsXHJcbiAgICBFOiAn7Ja07Ja866as67KE65OcJyxcclxuICAgIFY6ICdWSVAnLFxyXG4gICAgUjogJ1LshJ0nLFxyXG4gIH07XHJcbiAgcmV0dXJuIHByaWNlVHlwZVt2YWx1ZV07XHJcbn07XHJcblxyXG5jb25zdCB2YWxpZEltYWdlVHlwZSA9ICh0eXBlKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9qcGcnXS5pbmRleE9mKHR5cGUpID4gLTE7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2l6ZUVuZCA9IChmdW5jKSA9PiB7XHJcbiAgbGV0IHRpbWVyO1xyXG4gIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jLCAxMDAsIGV2ZW50KTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdHJhbnNmb3JtTW9uZXlVbml0LCBwcmljZVR5cGVNYXBwZXIsIHZhbGlkSW1hZ2VUeXBlLCByZXNpemVFbmQgfTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IFRpY2tldElucHV0TGlzdCBmcm9tICcuLi9UaWNrZXRJbnB1dExpc3QnO1xyXG5pbXBvcnQgUmVzZXJ2ZXJJbmZvIGZyb20gJy4uL1Jlc2VydmVySW5mbyc7XHJcbmltcG9ydCBUT1MgZnJvbSAnLi4vVE9TJztcclxuaW1wb3J0IEZsZXhDb250YWluZXIgZnJvbSAnLi4vRmxleENvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0aWNrZXRzOiBbXSxcclxuICBuYW1lOiAnJyxcclxuICB0ZWxlcGhvbmU6ICcnLFxyXG4gIGVtYWlsOiAnJyxcclxuICBpc1ZlcmlmaWVkTmFtZTogZmFsc2UsXHJcbiAgaXNWZXJpZmllZFRlbDogZmFsc2UsXHJcbiAgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSxcclxuICBpc1RPU0NoZWNrZWQ6IGZhbHNlLFxyXG4gIHN1Ym1pdDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdJTklUX1RJQ0tFVCc6IHtcclxuICAgICAgY29uc3QgdGlja2V0cyA9IEFycmF5KGFjdGlvbi5sZW5ndGgpLmZpbGwoMCk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0aWNrZXRzIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdERUNSRU1FTlQnOiB7XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICBpZiAobW9kaWZpZWQudGlja2V0c1thY3Rpb24ud2hlcmVdID4gMCkge1xyXG4gICAgICAgIG1vZGlmaWVkLnRpY2tldHNbYWN0aW9uLndoZXJlXSAtPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtb2RpZmllZDtcclxuICAgIH1cclxuICAgIGNhc2UgJ0lOQ1JFTUVOVCc6IHtcclxuICAgICAgY29uc3QgbW9kaWZpZWQgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgIG1vZGlmaWVkLnRpY2tldHNbYWN0aW9uLndoZXJlXSArPSAxO1xyXG4gICAgICByZXR1cm4gbW9kaWZpZWQ7XHJcbiAgICB9XHJcbiAgICBjYXNlICdDSEFOR0VfTkFNRSc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9URUwnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGVsZXBob25lOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9FTUFJTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbWFpbDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlICdDSEFOR0VfVE9TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVE9TQ2hlY2tlZDogYWN0aW9uLmNoZWNrZWQgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9OQU1FJzoge1xyXG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAobmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKC9cXHMvLnRlc3QobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWROYW1lOiB0cnVlIH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdWRVJJRllfVEVMJzoge1xyXG4gICAgICBjb25zdCB7IHRlbGVwaG9uZSB9ID0gc3RhdGU7XHJcbiAgICAgIGlmICh0ZWxlcGhvbmUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGVsUmUgPSAvMFxcZHsyfS1bMS05XVxcZHsyLDN9LVxcZHs0fS87XHJcbiAgICAgIGlmICh0ZWxSZS50ZXN0KHRlbGVwaG9uZSkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnVkVSSUZZX0VNQUlMJzoge1xyXG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKGVtYWlsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZW1haWxSZSA9IC9bYS16QS1aXVxcd3syLH1AW2EtekEtWl17Myx9XFwuW2EtekEtWl17Mix9LztcclxuICAgICAgaWYgKGVtYWlsUmUudGVzdChlbWFpbCkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UgfTtcclxuICAgIH1cclxuICAgIGNhc2UgJ1ZFUklGWV9TVUJNSVQnOiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB0aWNrZXRzLFxyXG4gICAgICAgIGlzVmVyaWZpZWROYW1lLFxyXG4gICAgICAgIGlzVmVyaWZpZWRUZWwsXHJcbiAgICAgICAgaXNWZXJpZmllZEVtYWlsLFxyXG4gICAgICAgIGlzVE9TQ2hlY2tlZCxcclxuICAgICAgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGlja2V0cy5zb21lKCh2YWx1ZSkgPT4gdmFsdWUgPiAwKSAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWROYW1lICYmXHJcbiAgICAgICAgaXNWZXJpZmllZFRlbCAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWRFbWFpbCAmJlxyXG4gICAgICAgIGlzVE9TQ2hlY2tlZFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VibWl0OiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Ym1pdDogZmFsc2UgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUmVzZXJ2ZUZvcm0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RQcmljZXMsIGRpc3BsYXlJbmZvSWQsIHByb2R1Y3RJZCwgcmVzZXJ2YXRpb25EYXRlIH0gPSBwcm9wcztcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwYXJzZWQgPSBjb29raWUucGFyc2UoZG9jdW1lbnQuY29va2llKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9OQU1FJywgdmFsdWU6IHBhcnNlZC5yZXNlcnZhdGlvbk5hbWUgfHwgJycgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfTkFNRScgfSk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfVEVMJywgdmFsdWU6IHBhcnNlZC5yZXNlcnZhdGlvblRlbCB8fCAnJyB9KTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9URUwnIH0pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX0VNQUlMJywgdmFsdWU6IHBhcnNlZC5yZXNlcnZhdGlvbkVtYWlsIHx8ICcnIH0pO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX0VNQUlMJyB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdJTklUX1RJQ0tFVCcsIGxlbmd0aDogcHJvZHVjdFByaWNlcy5sZW5ndGggfSk7XHJcbiAgfSwgW3Byb2R1Y3RQcmljZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzZXJ2YXRpb25JbmZvID0ge1xyXG4gICAgICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgIHByaWNlczogW10sXHJcbiAgICAgICAgcmVzZXJ2YXRpb25FbWFpbDogc3RhdGUuZW1haWwsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25OYW1lOiBzdGF0ZS5uYW1lLFxyXG4gICAgICAgIHJlc2VydmF0aW9uVGVsZXBob25lOiBzdGF0ZS50ZWxlcGhvbmUsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25ZZWFyTW9udGhEYXk6IHJlc2VydmF0aW9uRGF0ZSxcclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSBwcm9kdWN0UHJpY2VzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcclxuICAgICAgICByZXNlcnZhdGlvbkluZm8ucHJpY2VzLnB1c2goe1xyXG4gICAgICAgICAgY291bnQ6IHN0YXRlLnRpY2tldHNbaW5kZXhdLFxyXG4gICAgICAgICAgcHJvZHVjdFByaWNlSWQ6IHByb2R1Y3RQcmljZXNbaW5kZXhdLnByb2R1Y3RQcmljZUlELFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICcvYXBpL3Jlc2VydmF0aW9ucycsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25JbmZvLFxyXG4gICAgICAgIHsgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfSB9LFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfsmIjrp6TqsIAg7ISx6rO17KCB7Jy866GcIOyKueyduOuQmOyXiOyKteuLiOuLpCcsICgpID0+IHtcclxuICAgICAgICAgIGhpc3RvcnkucHVzaChgL2RldGFpbC8ke2Rpc3BsYXlJbmZvSWR9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICByZXNwb25zZTogeyBkYXRhLCBzdGF0dXMgfSxcclxuICAgICAgfSA9IGVycm9yO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBhbGVydE1vZGFsKGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgY29uZmlybU1vZGFsKCfsmIjslb3tlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yYiOyVvSDslpHsi53snbQg7Lap7KGx65CY7KeAIOyViuyVmOyKteuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZlRm9ybVwiPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8VGlja2V0SW5wdXRMaXN0XHJcbiAgICAgICAgICBwcm9kdWN0UHJpY2VzPXtwcm9kdWN0UHJpY2VzfVxyXG4gICAgICAgICAgdGlja2V0cz17c3RhdGUudGlja2V0c31cclxuICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZXNlcnZlckluZm9cclxuICAgICAgICAgIG5hbWU9e3N0YXRlLm5hbWV9XHJcbiAgICAgICAgICB0ZWxlcGhvbmU9e3N0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgIGVtYWlsPXtzdGF0ZS5lbWFpbH1cclxuICAgICAgICAgIHJlc2VydmF0aW9uRGF0ZT17cmVzZXJ2YXRpb25EYXRlLnNwbGl0KCcgJylbMF19XHJcbiAgICAgICAgICB0b3RhbFRpY2tldD17c3RhdGUudGlja2V0cy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1bSwgY3VycmVudCkgPT4gYWNjdW0gKyBjdXJyZW50LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAgIGlzVmVyaWZpZWROYW1lPXtzdGF0ZS5pc1ZlcmlmaWVkTmFtZX1cclxuICAgICAgICAgIGlzVmVyaWZpZWRUZWw9e3N0YXRlLmlzVmVyaWZpZWRUZWx9XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkRW1haWw9e3N0YXRlLmlzVmVyaWZpZWRFbWFpbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUT1MgaXNDaGVja2VkPXtzdGF0ZS5pc1RPU0NoZWNrZWR9IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz5cclxuICAgICAgICA8RmxleENvbnRhaW5lclxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcGFkZGluZzogJzAgMTBweCAxMHB4IDEwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5zdWJtaXQgPyAnIzFFQzkwMCcgOiAnI0QxRDFEMScsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnTmFudW0gR290aGljIEJvbGQnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgMXMnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGljaz17Y29uZmlybVN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19uYXZlcl9zXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7JyDsmIjslb3tlZjquLAnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2ZUZvcm0uZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFtdLFxyXG4gIHByb2R1Y3RJZDogMCxcclxuICByZXNlcnZhdGlvbkRhdGU6ICcnLFxyXG59O1xyXG5cclxuUmVzZXJ2ZUZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVGb3JtO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBTdWJOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIHN0eWxlIH0gPSBwcm9wcztcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1Yk5hdkJhclwiIHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja3dhcmRcIj5cclxuICAgICAgICA8aVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm4gZm4tYmFja3dhcmQxXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaGlzdG9yeS5nb0JhY2soKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVOYW1lXCI+XHJcbiAgICAgICAgPGgxPntuYW1lIHx8ICftlonsgqwg7J2066aEJ308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3ViTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJOYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRhYlZpZXcgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3QgeyB2aWV3cywgc3R5bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiVGFiVmlld1wiPlxyXG4gICAgICA8dWwgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICB7dmlld3MubWFwKCh2aWV3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57dmlld308L2xpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcblRhYlZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcclxuICBzdHlsZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRyYW5zZm9ybTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVmlldztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmV2aWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3LFxyXG4gICAgaW1hZ2VTcmMsXHJcbiAgICBzY29yZSxcclxuICAgIGVtYWlsLFxyXG4gICAgZGF0ZSxcclxuICAgIGVkaXRDb21tZW50LFxyXG4gICAgY29uZmlybURlbGV0ZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2ltZ1N0eWxlLCBzZXRJbWdTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgeyBpbWFnZU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgcmV2aWV3UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGltYWdlTW9kYWwoaW1hZ2VTcmMpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2VTcmMpIHtcclxuICAgICAgY29uc3QgcGFyYWdyYXBoID0gcmV2aWV3UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignLnRvcCAubGVmdCBwJyk7XHJcbiAgICAgIGNvbnN0IHRvcEhlaWdodCA9IHBhcmFncmFwaC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHNldEltZ1N0eWxlKHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcclxuICAgICAgICBoZWlnaHQ6IGAke3RvcEhlaWdodH1weGAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZVNyY10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUmV2aWV3XCIgcmVmPXtyZXZpZXdSZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHA+e3Jldmlld308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAge2ltYWdlU3JjID8gKFxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgICAgICBhbHQ9XCJyZXZpZXdJbWFnZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NvcmVcIj57c2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW1haWxcIj57YCR7ZW1haWwuc2xpY2UoMCwgNCl9KioqKmB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzaXREYXRlXCI+e2Ake2RhdGUuc2xpY2UoMCwgMTApfSDrsKnrrLhgfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlZGl0XCIgb25DbGljaz17ZWRpdENvbW1lbnR9PlxyXG4gICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9e2NvbmZpcm1EZWxldGV9PlxyXG4gICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcmV2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVkaXRDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuXHJcbmNvbnN0IFdyaXRlUmV2aWV3Q29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbmZvLCBzZXRJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgYC9hdXRoL3dyaXRlcmV2aWV3LyR7cHJvZHVjdElkfWAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBzZXRJbmZvKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBzdGF0dXMsIGRhdGEgfSxcclxuICAgICAgICB9ID0gZXJyb3I7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YSA9PT0gJ+uhnOq3uOyduCDtlZjsp4Ag7JWK7JWY7Iq164uI64ukJykge1xyXG4gICAgICAgICAgICBhbGVydE1vZGFsKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEgPT09ICfsmIjslb3snbQg7KG07J6s7ZWY7KeAIOyViuyKteuLiOuLpCcpIHtcclxuICAgICAgICAgICAgYWxlcnRNb2RhbChkYXRhLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvbXlyZXNlcnZhdGlvbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gJ+yYiOyVvSDsnpHshLHquLDqsITsnbQg7JWE64uZ64uI64ukJykge1xyXG4gICAgICAgICAgICBhbGVydE1vZGFsKGRhdGEsICgpID0+IHtcclxuICAgICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9teXJlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbmZvLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gYCR7aW5mby5kZXNjcmlwdGlvbn0g66as67ewIOuCqOq4sOq4sGA7XHJcbiAgICB9XHJcbiAgfSwgW2luZm9dKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGluZm8pLmxlbmd0aCA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiV3JpdGVSZXZpZXdDb250YWluZXJcIj5cclxuICAgICAgPE5hdkJhciBuYW1lPXtpbmZvLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8UmV2aWV3RWRpdCBpZD17aW5mby5yZXNlcnZhdGlvbkluZm9JZH0gLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgICcnXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlUmV2aWV3Q29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBUaWNrZXRJbnB1dCBmcm9tICcuLi9UaWNrZXRJbnB1dCc7XHJcblxyXG5jb25zdCBUaWNrZXRJbnB1dExpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RQcmljZXMsIHRpY2tldHMsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiVGlja2V0SW5wdXRMaXN0XCI+XHJcbiAgICAgIHtwcm9kdWN0UHJpY2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxUaWNrZXRJbnB1dFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBwcm9kdWN0UHJpY2U9e3ZhbHVlfVxyXG4gICAgICAgICAgICBjb3VudD17dGlja2V0c1tpbmRleF19XHJcbiAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAgICAgd2hlcmU9e2luZGV4fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5wdXRMaXN0LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0UHJpY2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgdGlja2V0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcclxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldElucHV0TGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVGFiVUkgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3QgeyBsYWJlbHMsIHNlbGVjdGVkLCBoYW5kbGVDbGljaywgaW5kaWNhdG9yU3R5bGUgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJUYWJVSVwiPlxyXG4gICAgICA8dWwgcmVmPXtyZWZ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaWNhdG9yXCIgc3R5bGU9e2luZGljYXRvclN0eWxlfSAvPlxyXG4gICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCA9PT0gc2VsZWN0ZWQgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59KTtcclxuXHJcblRhYlVJLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpbmRpY2F0b3JTdHlsZTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlVJO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFRhYlVJIGZyb20gJy4uL1RhYlVJJztcclxuaW1wb3J0IFRhYlZpZXcgZnJvbSAnLi4vVGFiVmlldyc7XHJcblxyXG5jb25zdCBUYWJDb250cm9sbGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBsYWJlbHMsIHZpZXdzLCBhbGFybSwgdG9wLCBib3R0b20gfSA9IHByb3BzO1xyXG4gIC8vIHRvcCxib3R0b23snYAg7KCV7KCB7Jy866GcIOuztOyXrOykhCDrt7BcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbmRpY2F0b3JTdHlsZSwgc2V0SW5kaWNhdG9yU3R5bGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbGVmdDogMCxcclxuICAgIHdpZHRoOiAwLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFt2aWV3U3R5bGUsIHNldFZpZXdTdHlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246ICcwLjVzJyxcclxuICB9KTtcclxuICBjb25zdCBbdmlld0hlaWdodCwgc2V0Vmlld0hlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB1aVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB2aWV3UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUmVmID0gdXNlUmVmKHNlbGVjdGVkKTtcclxuICBzZWxlY3RlZFJlZi5jdXJyZW50ID0gc2VsZWN0ZWQ7XHJcbiAgY29uc3Qgdmlld0hlaWdodFJlZiA9IHVzZVJlZih2aWV3SGVpZ2h0KTtcclxuICB2aWV3SGVpZ2h0UmVmLmN1cnJlbnQgPSB2aWV3SGVpZ2h0O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGFsYXJtKSB7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgYWxhcm0oaW5kZXgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmV2aXNlSW5kaWNhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMaSA9IHVpUmVmLmN1cnJlbnQuY2hpbGRyZW5bc2VsZWN0ZWRSZWYuY3VycmVudCArIDFdO1xyXG4gICAgc2V0SW5kaWNhdG9yU3R5bGUoe1xyXG4gICAgICBsZWZ0OiBzZWxlY3RlZExpLm9mZnNldExlZnQsXHJcbiAgICAgIHdpZHRoOiBzZWxlY3RlZExpLm9mZnNldFdpZHRoLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmV2aXNlVmlld1dpZHRoID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB2aWV3UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBzZXRWaWV3U3R5bGUoe1xyXG4gICAgICAuLi52aWV3U3R5bGUsXHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzBzJyxcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3dpZHRoICogc2VsZWN0ZWRSZWYuY3VycmVudH1weClgLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXZpc2VJbmRpY2F0b3IpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJldmlzZVZpZXdXaWR0aCk7XHJcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3Qgdmlld0JvZHkgPVxyXG4gICAgICAgIHZpZXdSZWYuY3VycmVudC5jaGlsZHJlblswXS5jaGlsZHJlbltzZWxlY3RlZFJlZi5jdXJyZW50XS5jaGlsZHJlblswXTsgLy8gc2VjdGlvbiAtPiB1bCAtPiBsaSAtPiBkaXZcclxuICAgICAgY29uc3QgaGVpZ2h0ID0gdmlld0JvZHkgJiYgdmlld0JvZHkub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBpZiAodmlld0hlaWdodC5jdXJyZW50ICE9PSBoZWlnaHQpIHtcclxuICAgICAgICBzZXRWaWV3SGVpZ2h0KGhlaWdodCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmV2aXNlSW5kaWNhdG9yKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJldmlzZVZpZXdXaWR0aCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdChyZXZpc2VJbmRpY2F0b3IsIFtzZWxlY3RlZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB2aWV3UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBzZXRWaWV3U3R5bGUoe1xyXG4gICAgICAuLi52aWV3U3R5bGUsXHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNXMnLFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7d2lkdGggKiBzZWxlY3RlZH1weClgLFxyXG4gICAgfSk7XHJcbiAgfSwgW3NlbGVjdGVkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYkNvbnRyb2xsZXJcIj5cclxuICAgICAgPFRhYlVJXHJcbiAgICAgICAgcmVmPXt1aVJlZn1cclxuICAgICAgICBsYWJlbHM9e2xhYmVsc31cclxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XHJcbiAgICAgICAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgIGluZGljYXRvclN0eWxlPXtpbmRpY2F0b3JTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAge3RvcH1cclxuICAgICAgPFRhYlZpZXdcclxuICAgICAgICByZWY9e3ZpZXdSZWZ9XHJcbiAgICAgICAgdmlld3M9e3ZpZXdzfVxyXG4gICAgICAgIHN0eWxlPXt7IC4uLnZpZXdTdHlsZSwgaGVpZ2h0OiB2aWV3SGVpZ2h0IH19XHJcbiAgICAgIC8+XHJcbiAgICAgIHtib3R0b219XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVGFiQ29udHJvbGxlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYWxhcm06IGZhbHNlLFxyXG4gIHRvcDogJycsXHJcbiAgYm90dG9tOiAnJyxcclxuICB2aWV3czogW10sXHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgdmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSxcclxuICBhbGFybTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXHJcbiAgdG9wOiBQcm9wVHlwZXMubm9kZSxcclxuICBib3R0b206IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuLy8g7JWM656M7J20IOyeiOuLpOuptCDsg4HsnIQg7Lu07Y+s64SM7Yq47JeQIOyWtOuUlOyXkCDriIzroIDripTsp4Ag67OA7ZmU66W8IOyVjOugpOykmCDrj5nsoIEg67ew67OA7ZmU66W8IOqwgOuKpey8gO2VqFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB2YWxpZEltYWdlVHlwZSB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEZsZXhDb250YWluZXIgZnJvbSAnLi4vRmxleENvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcclxuXHJcbmNvbnN0IFJldmlld0VkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIHRodW1ibmFpbFdpZHRoLFxyXG4gICAgZXhTY29yZSxcclxuICAgIGV4Q29tbWVudCxcclxuICAgIGV4SW1hZ2VTcmMsXHJcbiAgICBpc1Bvc3QsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoZXhTY29yZSk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoZXhDb21tZW50KTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKGV4SW1hZ2VTcmMpO1xyXG4gIGNvbnN0IFt0aHVtYm5haWxTdHlsZSwgc2V0VGh1bWJuYWlsU3R5bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlTWVhc3VyZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgY29uc3QgcmV2aXNpb25TcmMgPVxyXG4gICAgICAgIGltYWdlU3JjLnNsaWNlKDAsIDQpID09PSAnYmxvYicgPyBpbWFnZVNyYyA6IGAvJHtpbWFnZVNyY31gO1xyXG4gICAgICBpbWFnZU1lYXN1cmVtZW50LnNyYyA9IHJldmlzaW9uU3JjO1xyXG4gICAgICBpbWFnZU1lYXN1cmVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5oZWlnaHQgLyB0aGlzLndpZHRoO1xyXG4gICAgICAgIHNldFRodW1ibmFpbFN0eWxlKHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIHdpZHRoOiBgJHt0aHVtYm5haWxXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke3RodW1ibmFpbFdpZHRoICogcmF0aW99cHhgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cmV2aXNpb25TcmN9KWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaHVtYm5haWxTdHlsZSh7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZVNyY10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChzY29yZSA8PSAwIHx8IHNjb3JlID4gNSkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+uzhOygkCDqsJzsiJjqsIAg7Jis67CU66W07KeAIOyViuyKteuLiOuLpCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29tbWVudC5sZW5ndGggPCA1IHx8IGNvbW1lbnQubGVuZ3RoID4gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn66as67ewIOq4gOyekOyImOqwgCDrp57sp4Ag7JWK7Iq164uI64ukLicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5maWxlcy5sZW5ndGggJiZcclxuICAgICAgICAhdmFsaWRJbWFnZVR5cGUoaW1hZ2VSZWYuY3VycmVudC5maWxlc1swXS50eXBlKVxyXG4gICAgICApIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfsnbTrr7jsp4DripQganBnLGpwZWcscG5nIO2MjOydvOunjCDqsIDriqXtlanri4jri6QuJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvcm1PYmogPSBuZXcgRm9ybURhdGEoZm9ybS5jdXJyZW50KTtcclxuICAgICAgaWYgKCFpc1Bvc3QgJiYgZXhJbWFnZVNyYyAmJiAoIWltYWdlU3JjIHx8IGV4SW1hZ2VTcmMgIT09IGltYWdlU3JjKSkge1xyXG4gICAgICAgIGZvcm1PYmouYXBwZW5kKCdleEltYWdlJywgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IGlzUG9zdCA/ICdQT1NUJyA6ICdQVVQnLFxyXG4gICAgICAgIHVybDogYC9hcGkvcmVzZXJ2YXRpb25zLyR7aWR9L2NvbW1lbnRzYCxcclxuICAgICAgICBkYXRhOiBmb3JtT2JqLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBpZiAoaXNQb3N0KSB7XHJcbiAgICAgICAgICBhbGVydE1vZGFsKCfrpqzrt7DqsIAg65Ox66Gd65CY7JeI7Iq164uI64ukJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9teXJlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxlcnRNb2RhbCgn66as67ew6rCAIOyImOygleuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgcmVzcG9uc2U6IHsgZGF0YSwgc3RhdHVzIH0sXHJcbiAgICAgIH0gPSBlcnJvcjtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChkYXRhKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtb2RpZnlSYXRpbmcgPSAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFNjb3JlKHZhbHVlKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSAoeyB0YXJnZXQ6IHsgZmlsZXMgfSB9KSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wSW1hZ2UgPSBmaWxlc1swXTtcclxuICAgIGlmICghdmFsaWRJbWFnZVR5cGUodGVtcEltYWdlLnR5cGUpKSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+ydtOuvuOyngOuKlCBqcGcsanBlZyxwbmcg7YyM7J2866eMIOqwgOuKpe2VqeuLiOuLpCcpO1xyXG4gICAgICBpbWFnZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAgIHNldEltYWdlU3JjKCcnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0SW1hZ2VTcmMod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGVtcEltYWdlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FuY2VsSW1hZ2VVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBpbWFnZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICBzZXRJbWFnZVNyYygnJyk7XHJcbiAgICAvLyBuZXdJbWFnZT0gLTE7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJldmlld0VkaXRcIj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgICAgbmFtZT1cInJldmlld0Zvcm1cIlxyXG4gICAgICAgIHJlZj17Zm9ybX1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicmF0aW5nU2VjdGlvblwiPlxyXG4gICAgICAgICAgPHA+67OE7KCQ6rO8IOydtOyaqSDqsr3tl5jsnYQg64Ko6rKo7KO87IS47JqULjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nU3RhclwiPlxyXG4gICAgICAgICAgICB7Xy5yYW5nZSgxLCA2KS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgIGtleT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZuIGZuLXN0YXIyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPj0gdmFsdWUgPyAnZ2V0U3RhcicgOiAnbm90R2V0U3RhcidcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGlmeVJhdGluZyh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2NvcmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzY29yZX1cclxuICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogc2NvcmUgPiAwID8gJyMwMDAnIDogJyNkZGQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwid3JpdGVDb21tZW50XCI+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICByb3dzPVwiMTVcIlxyXG4gICAgICAgICAgICBtaW5MZW5ndGg9XCI1XCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNDAwXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q29tbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0SW1hZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VMZXR0ZXJDb3VudFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICBpZD1cImltYWdlVXBsb2FkXCJcclxuICAgICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWltYWdlMVwiIC8+XHJcbiAgICAgICAgICAgICAgeycg7IKs7KeEIOy2lOqwgCd9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnRDb3VudFwiPlxyXG4gICAgICAgICAgICAgIHtgJHtjb21tZW50Lmxlbmd0aH0vNDAwICjstZzshowgNeyekCDsnbTsg4EpYH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbEltYWdlXCIgc3R5bGU9e3RodW1ibmFpbFN0eWxlfT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY3Jvc3MxXCIgb25DbGljaz17Y2FuY2VsSW1hZ2VVcGxvYWR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAge2lzUG9zdCA/IChcclxuICAgICAgICAgIDxGbGV4Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE3cHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ05hbnVtIEdvdGhpYyBCb2xkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDrk7HroZ0g7ZWY7Iuc6rKg7Iq164uI6rmMPycsIGhhbmRsZVN1Ym1pdCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOumrOu3sCDrk7HroZ1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxGbGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxRUM4MDAnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTdweCcsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnTmFudW0gR290aGljIEJvbGQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1FZGl0KGhhbmRsZVN1Ym1pdCwgc2NvcmUsIGNvbW1lbnQsIGltYWdlU3JjKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7IiY7KCVXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEOERCREUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxN3B4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdOYW51bSBHb3RoaWMgQm9sZCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uZmlybUNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDst6jshoxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdFZGl0LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aHVtYm5haWxXaWR0aDogMjAwLFxyXG4gIGV4U2NvcmU6IDAsXHJcbiAgZXhDb21tZW50OiAnJyxcclxuICBleEltYWdlU3JjOiAnJyxcclxuICBpc1Bvc3Q6IHRydWUsXHJcbn07XHJcblxyXG5SZXZpZXdFZGl0LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICB0aHVtYm5haWxXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICBleFNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGV4Q29tbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBleEltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzUG9zdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29uZmlybUVkaXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNvbmZpcm1DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3RWRpdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUaWNrZXRIZWFkIGZyb20gJy4uL1RpY2tldEhlYWQnO1xyXG5pbXBvcnQgVGlja2V0SW5mb0xpc3QgZnJvbSAnLi4vVGlja2V0SW5mb0xpc3QnO1xyXG5cclxuY29uc3QgVGlja2V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgaW5mb3MsIHRleHQsIGFjdGlvbnMsIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJUaWNrZXRcIiBpZD17aWR9PlxyXG4gICAgICA8VGlja2V0SGVhZCB0ZXh0PXt0ZXh0fSBpc0dyZWVuPXtpc0dyZWVufSAvPlxyXG4gICAgICA8VGlja2V0SW5mb0xpc3QgaW5mb3M9e2luZm9zfSBhY3Rpb25zPXthY3Rpb25zfSAvPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzR3JlZW46IGZhbHNlLFxyXG4gIGFjdGlvbnM6IFtdLFxyXG59O1xyXG5cclxuVGlja2V0LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGluZm9zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIGlzR3JlZW46IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgRmxleENvbnRhaW5lciBmcm9tICcuLi9GbGV4Q29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xyXG5cclxuY29uc3QgUHJvZHVjdERlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRleHQsIGxpbWl0IH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNGb2xkLCBzZXRJc0ZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RleHRPYmosIHNldFRleHRPYmpdID0gdXNlU3RhdGUoeyBzaW1wbGU6ICcnLCBkZXRhaWw6ICcnIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICAgIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgbGltaXQpO1xyXG4gICAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UobGltaXQpO1xyXG4gICAgICBzZXRUZXh0T2JqKHsgc2ltcGxlOiB0ZXh0U2ltcGxlLCBkZXRhaWw6IHRleHREZXRhaWwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUZXh0T2JqKHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9KTtcclxuICAgIH1cclxuICB9LCBbdGV4dF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZURlc2MgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGb2xkKSB7XHJcbiAgICAgICQoJy5Qcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNGb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5Qcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7J+2OvOyzkOuztOq4sCAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1kb3duMlwiIC8+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBmb2xkVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7J+ygkeq4sCAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi11cDJcIiAvPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0RGVzY1wiPlxyXG4gICAgICB7dGV4dE9iai5kZXRhaWwgPyAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7dGV4dE9iai5zaW1wbGV9XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNGb2xkID8gJ2lubGluZScgOiAnbm9uZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlRGVzY1wiPnt0ZXh0T2JqLmRldGFpbH08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPnt0ZXh0T2JqLnNpbXBsZX08L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjNmNWY2JyxcclxuICAgICAgICAgICAgICBib3JkZXJMZWZ0OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICdub25lJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xpY2s9e3Nob3dNb3JlRGVzY31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzRm9sZCA/IG9wZW5UZXh0IDogZm9sZFRleHR9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdERlc2MuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRleHQ6ICcnLFxyXG4gIGxpbWl0OiAxMDAsXHJcbn07XHJcblxyXG5Qcm9kdWN0RGVzYy5wcm9wVHlwZXMgPSB7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXNjO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgdHJhbnNmb3JtTW9uZXlVbml0LCBwcmljZVR5cGVNYXBwZXIgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRpY2tldElucHV0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcHJvZHVjdFByaWNlOiB7IHByaWNlVHlwZU5hbWUsIHByaWNlLCBkaXNjb3VudFJhdGUgfSxcclxuICAgIGNvdW50LFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgICB3aGVyZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGlja2V0SW5wdXRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgPGgyPlxyXG4gICAgICAgICAge3ByaWNlVHlwZU1hcHBlcihwcmljZVR5cGVOYW1lKX1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2Ake3RyYW5zZm9ybU1vbmV5VW5pdChwcmljZSl9IOybkGB9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICB7KCgpID0+IHtcclxuICAgICAgICAgIGlmIChOdW1iZXIoZGlzY291bnRSYXRlKSA+IE51bWJlci5FUFNJTE9OKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29zdCA9XHJcbiAgICAgICAgICAgICAgTWF0aC5yb3VuZChwcmljZSAvICgxIC0gTnVtYmVyKGRpc2NvdW50UmF0ZSkgLyAxMDApIC8gMTAwKSAqIDEwMDtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtgJHt0cmFuc2Zvcm1Nb25leVVuaXQob3JpZ2luYWxDb3N0KX3sm5AgKCR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgTnVtYmVyKGRpc2NvdW50UmF0ZSksXHJcbiAgICAgICAgICAgICAgICApfSUg7ZWg7J246rCAKWB9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGp1c3RUaWNrZXRcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3ByX2Jvb2syIGljb19taW51czMgJHtjb3VudCA/ICcnIDogJ2Rpc2FibGVkJ31gfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RFQ1JFTUVOVCcsIHdoZXJlIH0pO1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGNvdW50ICR7Y291bnQgPyAnJyA6ICdkaXNhYmxlZCd9YH0+e2NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19wbHVzM1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnSU5DUkVNRU5UJywgd2hlcmUgfSk7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPntgJHt0cmFuc2Zvcm1Nb25leVVuaXQocHJpY2UgKiBjb3VudCl9IOybkGB9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY291bnQ6IDAsXHJcbn07XHJcblxyXG5UaWNrZXRJbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIGRpc2NvdW50UmF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgd2hlcmU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldElucHV0O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gJy4uL0ltYWdlU2xpZGVyJztcclxuaW1wb3J0IHsgcmVzaXplRW5kIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbi8vIOyKpO2BrOuhpCDsi5zqsIQodHJhbnNpdGlvblRpbWUpIGRlZmF1bHQgMey0iCAg7JyE7JeQ7IScIOusvOugpOuwm+uKlOqyg1xyXG4vLyDsg4Htg5zroZwg7IKs7Jqp7ZWY64qUIOyKpO2BrOuhpCDsi5zqsIQgKHRyYW5zaXRpb25EdXJhdGlvbilcclxuLy8g7ZmU66m0IOyghO2ZmCDqsITqsqkgKHRpbWVJbnRlcnZhbCkgMuy0iFxyXG5cclxuY29uc3QgUHJvbW90aW9uSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpbWVJbnRlcnZhbCwgdHJhbnNpdGlvblRpbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtkZWdyZWUsIHNldERlZ3JlZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2Nyb2xsYWJsZSwgc2V0U2Nyb2xsYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdHJhbnNpdGlvbkR1cmF0aW9uLCBzZXRUcmFuc2l0aW9uRHVyYXRpb25dID0gdXNlU3RhdGUodHJhbnNpdGlvblRpbWUpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ltYWdlV2lkdGgsIHNldEltYWdlV2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgZGVncmVlUmVmID0gdXNlUmVmKGRlZ3JlZSk7XHJcbiAgY29uc3Qgc2Nyb2xsYWJsZVJlZiA9IHVzZVJlZihzY3JvbGxhYmxlKTtcclxuICBjb25zdCBpbWFnZUxpc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgZGVncmVlUmVmLmN1cnJlbnQgPSBkZWdyZWU7XHJcbiAgc2Nyb2xsYWJsZVJlZi5jdXJyZW50ID0gc2Nyb2xsYWJsZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGRhdGE6IHsgaXRlbXMgfSxcclxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbnMnLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbXNbMF0pOyAvLyDsspjsnYzqs7wg66eI7KeA66eJ7J2EIOuPmeydvO2VnCDsnbTrr7jsp4Drpbwg65GQ7Ja07IScIOyKpO2BrOuhpOydhCDrp6TrgYTrn73qsowg7ZWoXHJcbiAgICAgICAgc2V0SW1hZ2VzKGl0ZW1zKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoSW1hZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0b1Njcm9sbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHNjcm9sbGFibGVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChkZWdyZWVSZWYuY3VycmVudCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGVncmVlKChwcmV2RGVncmVlKSA9PiBwcmV2RGVncmVlICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRpbWVJbnRlcnZhbCAqIDEwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbCk7XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSA+PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBzZXREZWdyZWUoMCk7XHJcbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbigwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGxhYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU91dCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbGFibGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZG9pbmdSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGxhYmxlKGZhbHNlKTtcclxuICAgIHNldEltYWdlV2lkdGgoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpO1xyXG4gICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKDApO1xyXG4gIH07XHJcblxyXG4gIGxldCBkb25lUmVzaXplO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvaW5nUmVzaXplKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAncmVzaXplJyxcclxuICAgICAgKCgpID0+IHtcclxuICAgICAgICBkb25lUmVzaXplID0gcmVzaXplRW5kKCgpID0+IHtcclxuICAgICAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTtcclxuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbih0cmFuc2l0aW9uVGltZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRvbmVSZXNpemU7XHJcbiAgICAgIH0pKCksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvaW5nUmVzaXplKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvbmVSZXNpemUpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVdpZHRoKFxyXG4gICAgICAoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQgJiZcclxuICAgICAgICBpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCkgfHxcclxuICAgICAgICAwLFxyXG4gICAgKTtcclxuICB9LCBbaW1hZ2VzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvbkR1cmF0aW9ufVxyXG4gICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgaW1hZ2VXaWR0aD17aW1hZ2VXaWR0aH1cclxuICAgICAgaXNQcm9tb3Rpb25cclxuICAgICAgaGFuZGxlVHJhbnNpdGlvbkVuZD17aGFuZGxlVHJhbnNpdGlvbkVuZH1cclxuICAgICAgaGFuZGxlTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9XHJcbiAgICAgIGhhbmRsZU1vdXNlT3V0PXtoYW5kbGVNb3VzZU91dH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcblByb21vdGlvbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0cmFuc2l0aW9uVGltZTogMSxcclxuICB0aW1lSW50ZXJ2YWw6IDIsXHJcbn07XHJcblxyXG5Qcm9tb3Rpb25JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdGltZUludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbW90aW9uSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTWFpbk5hdkJhciBmcm9tICcuLi9NYWluTmF2QmFyJztcclxuaW1wb3J0IFN1Yk5hdkJhciBmcm9tICcuLi9TdWJOYXZCYXInO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBpc1RyYW5zcGFyZW50LCBpc0xvZ291dGFibGUsIHN0eWxlIH0gPSBwcm9wcztcclxuICByZXR1cm4gbmFtZSA/IChcclxuICAgIDxTdWJOYXZCYXIgbmFtZT17bmFtZX0gc3R5bGU9e3N0eWxlfSAvPlxyXG4gICkgOiAoXHJcbiAgICA8TWFpbk5hdkJhclxyXG4gICAgICBpc1RyYW5zcGFyZW50PXtpc1RyYW5zcGFyZW50fVxyXG4gICAgICBpc0xvZ291dGFibGU9e2lzTG9nb3V0YWJsZX1cclxuICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuTmF2QmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBuYW1lOiAnJyxcclxuICBpc1RyYW5zcGFyZW50OiBmYWxzZSxcclxuICBpc0xvZ291dGFibGU6IGZhbHNlLFxyXG4gIHN0eWxlOiB7fSxcclxufTtcclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc0xvZ291dGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BQcm9kdWN0Q29udGFpbmVyICR7Y2xhc3NOYW1lfWB9PntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcblxyXG5Qcm9kdWN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTW9kYWxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbENvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IE1haW5JbWFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3JjLCBhbHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIk1haW5JbWFnZVwiIHNyYz17c3JjfSBhbHQ9e2FsdH0gLz47XHJcbn07XHJcblxyXG5NYWluSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBSZXZpZXdTdW1tYXJ5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhdmVyYWdlU2NvcmUsIHJldmlld0NvdW50LCBkaXNwbGF5U3RhciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlXHJcbiAgICAgIGNsYXNzTmFtZT1cIlJldmlld1N1bW1hcnlcIlxyXG4gICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IHJldmlld0NvdW50ID8gJycgOiAnbm9uZScgfX1cclxuICAgID5cclxuICAgICAgPGgyPuyYiOunpOyekCDtlZzspITtj4k8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRDb250YWluZXJcIj5cclxuICAgICAgICAgIHtkaXNwbGF5U3RhcihhdmVyYWdlU2NvcmUpfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZlcmFnZVNjb3JlXCI+e2F2ZXJhZ2VTY29yZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXhTY29yZVwiPi8gNS4wPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRDb250YWluZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRDb3VudFwiPntgJHtyZXZpZXdDb3VudH0g6rG0YH08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbnJvbGxUZXh0XCI+65Ox66GdPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3U3VtbWFyeS5wcm9wVHlwZXMgPSB7XHJcbiAgYXZlcmFnZVNjb3JlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcmV2aWV3Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5U3RhcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1N1bW1hcnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFJldmlldyBmcm9tICcuLi9SZXZpZXcnO1xyXG5pbXBvcnQgUmV2aWV3RWRpdCBmcm9tICcuLi9SZXZpZXdFZGl0JztcclxuXHJcbmNvbnN0IFJldmlld0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZXZpZXdzLFxyXG4gICAgaXNCcmllZixcclxuICAgIGlzTW9kaWZpYWJsZSxcclxuICAgIGVkaXRDb21tZW50LFxyXG4gICAgY29uZmlybURlbGV0ZSxcclxuICAgIGNvbmZpcm1FZGl0LFxyXG4gICAgY29uZmlybUNhbmNlbCxcclxuICAgIGV4RGF0YTogeyBpZCwgc2NvcmUsIGNvbW1lbnQsIGltYWdlU3JjIH0sXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBzaG93UmV2aWV3cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJldmlld3NDb21wID0gW107XHJcbiAgICBbLi4ucmV2aWV3c10ucmV2ZXJzZSgpLnNvbWUoKHJldmlldywgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlzQnJpZWYgJiYgaW5kZXggPj0gNSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCByZXZpc2lvbkltYWdlU3JjID0gJyc7XHJcbiAgICAgIGlmIChyZXZpZXcuY29tbWVudEltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICByZXZpc2lvbkltYWdlU3JjID0gcmV2aWV3LmNvbW1lbnRJbWFnZXNbMF0uc2F2ZUZpbGVOYW1lO1xyXG4gICAgICAgIHJldmlzaW9uSW1hZ2VTcmMgPSByZXZpc2lvbkltYWdlU3JjLnNsaWNlKDAsIDQpLmluY2x1ZGVzKCdibG9iJylcclxuICAgICAgICAgID8gcmV2aXNpb25JbWFnZVNyY1xyXG4gICAgICAgICAgOiBgLyR7cmV2aXNpb25JbWFnZVNyY31gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldmlld3NDb21wLnB1c2goXHJcbiAgICAgICAgPFJldmlld1xyXG4gICAgICAgICAga2V5PXtyZXZpZXcuY29tbWVudElkfVxyXG4gICAgICAgICAgcmV2aWV3PXtyZXZpZXcuY29tbWVudH1cclxuICAgICAgICAgIGltYWdlU3JjPXtyZXZpc2lvbkltYWdlU3JjfVxyXG4gICAgICAgICAgc2NvcmU9e3Jldmlldy5zY29yZX1cclxuICAgICAgICAgIGVtYWlsPXtyZXZpZXcucmVzZXJ2YXRpb25FbWFpbH1cclxuICAgICAgICAgIGRhdGU9e3Jldmlldy5yZXNlcnZhdGlvbkRhdGV9XHJcbiAgICAgICAgICBlZGl0Q29tbWVudD17ZWRpdENvbW1lbnQocmV2aWV3LnJlc2VydmF0aW9uSW5mb0lkKX1cclxuICAgICAgICAgIGNvbmZpcm1EZWxldGU9e2NvbmZpcm1EZWxldGUocmV2aWV3LnJlc2VydmF0aW9uSW5mb0lkKX1cclxuICAgICAgICAvPixcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldmlld3NDb21wO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlJldmlld0xpc3RcIj5cclxuICAgICAge2lzTW9kaWZpYWJsZSA/IChcclxuICAgICAgICA8UmV2aWV3RWRpdFxyXG4gICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgZXhTY29yZT17c2NvcmV9XHJcbiAgICAgICAgICBleENvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICBleEltYWdlU3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgIGlzUG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICBjb25maXJtRWRpdD17Y29uZmlybUVkaXQoaWQpfVxyXG4gICAgICAgICAgY29uZmlybUNhbmNlbD17Y29uZmlybUNhbmNlbH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHNob3dSZXZpZXdzKClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdMaXN0LnByb3BUeXBlcyA9IHtcclxuICByZXZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjb21tZW50SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIGlzQnJpZWY6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNNb2RpZmlhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGVkaXRDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybUVkaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybUNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBleERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9