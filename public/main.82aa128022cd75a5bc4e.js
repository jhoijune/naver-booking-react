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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "EiSa");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




 // isTransparent가 false일 때 fixed이므로 style객체가 있어야 됨

var MainNavBar = function MainNavBar(props) {
  var isTransparent = props.isTransparent,
      isLogoutable = props.isLogoutable;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "MainNavBar ".concat(isTransparent ? 'transparent' : 'fixed')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/icon/icon.png",
    alt: "naver icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/bookinglogin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, isLogoutable ? '로그아웃' : '예약확인')));
};

MainNavBar.propTypes = {
  isTransparent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isLogoutable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
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
  }), "\uC804\uCCB4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, toUsedLen + usedLen + canceledLen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_book_ss"
  }), "\uC774\uC6A9\uC608\uC815"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, toUsedLen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_check"
  }), "\uC774\uC6A9\uC644\uB8CC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, usedLen)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_back"
  }), "\uCDE8\uC18C\xB7\uD658\uBD88"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, canceledLen)))));
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
    onClick: click,
    style: createStyle()
  }, children) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "Button",
    to: click,
    style: style
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

        modifiedViewsArr[selectedCategory] = specificProducts.slice(0, basisCount).map(function (value) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
            itemInfo: value
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
  confirmModal: function confirmModal() {}
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

  var alertModal = function alertModal(text) {
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      notes: [{
        click: function click() {
          setIsModal(false);
        },
        children: '확인'
      }]
    })));
    setIsModal(true);
  };

  var confirmModal = function confirmModal(text, action) {
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_4__["default"], {
      notes: [{
        click: function click() {
          action();
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
      confirmModal: confirmModal
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

/***/ "6rjj":
/*!***************************************!*\
  !*** ./src/jsx/InputTicket/index.jsx ***!
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "pA+x");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var InputTicket = function InputTicket(props) {
  var productPrices = props.productPrices,
      tickets = props.tickets,
      dispatch = props.dispatch;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "InputTicket"
  }, productPrices.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "eachTicket"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "leftContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["priceTypeMapper"])(value.priceTypeName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(value.price), " \uC6D0")), function () {
      if (Number(value.discountRate) > Number.EPSILON) {
        var originalCost = Math.round(value.price / (1 - Number(value.discountRate) / 100) / 100) * 100;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(originalCost), "\uC6D0 (").concat(Math.round(Number(value.discountRate)), "% \uD560\uC778\uAC00)"));
      }
    }()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rightContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "adjustTicket"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "spr_Book2 ico_minus3 ".concat(tickets[index] ? '' : 'disabled'),
      onClick: function onClick() {
        dispatch({
          type: 'DECREMENT',
          where: index
        });
        dispatch({
          type: 'VERIFY_SUBMIT'
        });
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "resrvationTicket".concat(index + 1),
      clssName: tickets[index] ? '' : 'disabled',
      min: "0",
      value: tickets[index],
      readOnly: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "spr_book2 ico_plus3",
      onClick: function onClick() {
        dispatch({
          type: 'INCREMENT',
          where: index
        });
        dispatch({
          type: 'VERIFY_SUBMIT'
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["transformMoneyUnit"])(value.price * tickets[index]), " \uC6D0"))));
  }));
};

InputTicket.propTypes = {
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    discountRate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired,
  tickets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired).isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = InputTicket;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InputTicket, "InputTicket", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/InputTicket/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/InputTicket/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
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
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _Ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Ticket */ "o3aN");
/* harmony import */ var _ReservationCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ReservationCount */ "459B");




(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var ActionContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({
  confirmCancelReservation: function confirmCancelReservation() {}
});

var ReservationContainer = function ReservationContainer(props) {
  var emailId = props.emailId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      toUsed = _useState2[0],
      setToUsed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      toUsedLen = _useState4[0],
      setToUsedLen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
      canceled = _useState6[0],
      setCanceled = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
      canceledLen = _useState8[0],
      setCanceledLen = _useState8[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_6__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var used;
  var usedLen;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _ref2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/api/reservations/".concat(emailId));

          case 3:
            _ref2 = _context.sent;
            data = _ref2.data;
            setToUsed(data.toUsed);
            setToUsedLen(data.toUsed.length);
            setCanceled(data.canceled);
            setCanceledLen(data.canceled.length);
            used = data.used;
            usedLen = data.used.length;
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  })), []);

  var cancelReservation =
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      var _ref4, status, toDeleteIndex, canceledItem, toInsertIndex;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.put("/api/reservation/".concat(id));

            case 2:
              _ref4 = _context2.sent;
              status = _ref4.status;

              if (status === 400) {
                alertModal('잘못된 요청입니다');
              } else if (status === 201) {
                // 오류나면 배열 복사해야함
                toDeleteIndex = toUsed.findIndex(function (value) {
                  return value.reservationInfoId === id;
                });
                canceledItem = toUsed.splice(toDeleteIndex, 1);
                toInsertIndex = canceled.findIndex(function (value) {
                  return value.reservationInfoId > id;
                });

                if (toInsertIndex === -1) {
                  canceled.push(canceledItem);
                } else {
                  canceled.splice(toInsertIndex, 0, canceledItem);
                }

                setToUsed(toUsed);
                setToUsedLen(toUsedLen - 1);
                setCanceled(canceled);
                setCanceledLen(canceledLen + 1);
                alertModal('예약이 취소되었습니다');
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
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

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ActionContext.Provider, {
    value: {
      confirmCancelReservation: confirmCancelReservation
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ReservationContainer"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ReservationCount__WEBPACK_IMPORTED_MODULE_8__["default"], {
    toUsedLen: toUsedLen,
    usedLen: usedLen,
    canceledLen: canceledLen
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_7__["default"], {
    infos: toUsed,
    actions: "cancel",
    isGreen: true
  }, "\uC608\uC57D \uD655\uC815"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_7__["default"], {
    infos: used,
    actions: "writeReview"
  }, "\uC774\uC6A9 \uC644\uB8CC"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_7__["default"], {
    infos: canceled
  }, "\uCDE8\uC18C\uB41C \uC608\uC57D")));
};

__signature__(ReservationContainer, "useState{[toUsed, setToUsed]([])}\nuseState{[toUsedLen, setToUsedLen](0)}\nuseState{[canceled, setCanceled]([])}\nuseState{[canceledLen, setCanceledLen](0)}\nuseContext{{ alertModal, confirmModal }}\nuseEffect{}");

ReservationContainer.propTypes = {
  emailId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
};
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










/*
displayInfoId={displayInfoId}
reviews={productData.comments}
averageScore={productData.averageScore}
*/

var ReviewContainer = function ReviewContainer(props) {
  // 전체적으로 만들고 다시 검토
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
    setAverageScore(exAverageScore || 0);
  }, [exReviews]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // reviews가 달라졌을 때 averageScore바꾸는 effect
    if (reviews.length !== 0) {
      var modifiedAverageScore = reviews.reduce(function (accum, current) {
        return accum + Number(current.score);
      }, 0) / reviews.length;
      modifiedAverageScore = Math.round(modifiedAverageScore * 10) / 10;
      setAverageScore(modifiedAverageScore);
    }
  }, [reviews]);

  var displayStar = function displayStar(score) {
    var maxScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    // averageScore에 맞게 별점을 리턴하는 함수
    var fillCount = Math.floor(score);
    var notFillCount = maxScore - Math.ceil(score);
    var ratioCount = Math.round(score * 10) / 10 - fillCount;
    var stars = [];

    lodash__WEBPACK_IMPORTED_MODULE_6___default.a.times(fillCount, function () {
      stars.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-star2 getStar"
      }));
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
        className: "fn fn-star2 ratioStar"
      }));
    }

    lodash__WEBPACK_IMPORTED_MODULE_6___default.a.times(notFillCount, function () {
      stars.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-star2 notGetStar"
      }));
    });

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "starCount"
    }, stars);
  };

  var editComment = function editComment(commentId) {
    // 상세정보 창의 리뷰 수정 버튼 눌렀을 때의 행동
    return (
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _axios$get, _axios$get$response, status, statusText, index, _reviews$index, score, comment, commentImages;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _axios$get = axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/auth/edit/comments/".concat(commentId)), _axios$get$response = _axios$get.response, status = _axios$get$response.status, statusText = _axios$get$response.statusText;

                if (!(status === 400)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", alertModal(statusText));

              case 4:
                index = reviews.findIndex(function (value) {
                  value.commentId === commentId;
                });
                _reviews$index = reviews[index], score = _reviews$index.score, comment = _reviews$index.comment, commentImages = _reviews$index.commentImages;
                setExData({
                  id: commentId,
                  score: score,
                  comment: comment,
                  imageSrc: commentImages.length ? commentImages[0].saveFileName : ''
                });
                setIsModifiable(true);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))
    );
  };

  var deleteComment = function deleteComment(commentId) {
    // 상세정보 창의 리뷰 삭제 버튼을 누르고 확인을 눌렀을 시의 행동
    return (
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _axios$delete, _axios$delete$respons, status, statusText, modifiedReviews;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  _axios$delete = axios__WEBPACK_IMPORTED_MODULE_7___default.a["delete"]("/api/reservations/comments/".concat(commentId)), _axios$delete$respons = _axios$delete.response, status = _axios$delete$respons.status, statusText = _axios$delete$respons.statusText;

                  if (status === 400) {
                    alertModal(statusText);
                  } else if (status === 201) {
                    alertModal('리뷰가 삭제되었습니다');
                    modifiedReviews = reviews.filter(function (value) {
                      value.commentId !== commentId;
                    });
                    setReviews(modifiedReviews);
                  }
                } catch (error) {
                  console.error(error);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))
    );
  };

  var confirmDelete = function confirmDelete(commentId) {
    // 상세정보 창의 리뷰 삭제 버튼을 눌렀을 때의 행동
    return function () {
      return confirmModal('리뷰를 삭제하시겠습니까?', deleteComment(commentId));
    };
  };

  var confirmEdit = function confirmEdit(id) {
    // 상세정보 창의 리뷰 수정 버튼을 누르고 수정 버튼을 다시 눌렀을 때의 행동
    return function (submit, score, comment, imageSrc) {
      confirmModal('리뷰를 수정하시겠습니까?', function () {
        var isProcessed = submit();

        if (isProcessed) {
          var index = reviews.findIndex(function (value) {
            value.commentId === id;
          });

          var modifiedReviews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(reviews);

          modifiedReviews[index].comment = comment;
          modifiedReviews[index].score = score;

          if (modifiedReviews[index].commentImages.length) {
            modifiedReviews[index].commentImages[0].saveFileName = imageSrc;
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

/***/ "Fyvw":
/*!*************************************!*\
  !*** ./src/jsx/LoginForm/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "iATR");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var LoginForm = function LoginForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "LoginForm"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "headerBox"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "\uBE44\uD68C\uC6D0 \uC608\uC57D\uD655\uC778")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\uC608\uC57D\uC790 \uC774\uBA54\uC77C \uC785\uB825"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    action: "auth/login",
    method: "POST"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      setEmail(value);
    },
    placeHolder: "xxxxx@naver.com"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "submit",
    value: "\uB0B4 \uC608\uC57D \uD655\uC778"
  }))));
};

__signature__(LoginForm, "useState{[email, setEmail]('')}");

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
  }, textObj.detail ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, textObj.simple, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
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
  }, textObj.detail), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      actions = props.actions;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ReservationContainer__WEBPACK_IMPORTED_MODULE_4__["ActionContext"]),
      confirmCancelReservation = _useContext.confirmCancelReservation;

  var reservationSummary = priceInfo.reduce(function (accum, current) {
    "".concat(accum, "    ").concat(_js_common__WEBPACK_IMPORTED_MODULE_2__["priceTypeMapper"][current.priceTypeName], " ").concat(current.count, " \uB9E4,");
  }, '').slice(0, -1);

  var createButton = function createButton(actions) {
    var notes = actions.map(function (value) {
      if (value === 'cancel') {
        return {
          click: confirmCancelReservation(productId),
          children: '취소'
        };
      }

      if (value === 'reviewWrite') {
        return {
          click: "/reviewwrite/".concat(productId),
          children: '예매자 리뷰 남기기'
        };
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_5__["default"], {
      notes: notes
    });
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
    totalPrice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    productId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    priceInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
    })
  }).isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _ReserveForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ReserveForm */ "SRX6");
/* harmony import */ var _ReserveDesc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ReserveDesc */ "PBkl");
/* harmony import */ var _MainImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MainImage */ "voRo");



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

  var productData;
  var reservationDate;
  var startDate;
  var endDate;
  var imageSrc;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(
  /*#__PURE__*/
  _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/products/".concat(displayInfoId));

          case 3:
            productData = _context.sent.data;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  })), []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var diffDays = {
      reserve: Math.floor(Math.random() * 5 + 1)
    };
    diffDays.start = diffDays.reserve - Math.floor(Math.random() * 5 + 1);
    diffDays.end = diffDays.reserve + Math.floor(Math.random() * 5 + 1);
    reservationDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().tz('Asia/Seoul').add(diffDays.reserve, 'days').format('YYYY.MM.DD HH:mm:ss');
    startDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().tz('Asia/Seoul').add(diffDays.start, 'days').format('YYYY.MM.DD.(ddd)');
    endDate = moment__WEBPACK_IMPORTED_MODULE_4___default()().tz('Asia/Seoul').add(diffDays.end, 'days').format('YYYY.MM.DD.(ddd)');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    productData.productImages.some(function (value) {
      if (value.type === 'ma') {
        imageSrc = value.saveFileName;
        return true;
      }

      return false;
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "ReserveContainer"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_8__["default"], {
    src: imageSrc,
    alt: "main image"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReserveDesc__WEBPACK_IMPORTED_MODULE_7__["default"], {
    description: productData.displayInfo.productDescription,
    place: productData.displayInfo.placeLot,
    startDate: startDate,
    endDate: endDate,
    productPrices: productData.productPrices
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReserveForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    productPrices: productData.productPrices,
    displayInfoId: displayInfoId,
    productId: productData.displayInfo.productId,
    reservationDate: reservationDate
  }));
};

__signature__(ReserveContainer, "useParams{{ displayInfoId }}\nuseEffect{}\nuseEffect{}\nuseEffect{}", function () {
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
  }), "\uD544\uC218\uC785\uB825")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow",
    id: "inputReserver"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-check"
  }), "\uC608\uB9E4\uC790"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
  }), "\uC5F0\uB77D\uCC98"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
  }), "\uC774\uBA54\uC77C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
  }), "\uC608\uB9E4\uB0B4\uC6A9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "".concat(reservationDate, ", \uCD1D ").concat(totalTicket, "\uB9E4"))), isVerifiedEmail ? '' : makeAlert('alertWrongEmail', '이메일 형식이 맞지 않습니다')));
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
/* harmony import */ var _ReviewEdit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ReviewEdit */ "nx9d");
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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
  isMain: false
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReserveContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/review/:displayInfoId"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewProvider__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  path: "/reviewwrite/:productId"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
  isMain: false
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewEdit__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
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
  var children = props.children,
      isGreen = props.isGreen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TicketHead ".concat(isGreen ? 'green' : 'grey')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticketLeft"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticketMiddle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book2 ico_check2"
  }), children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ticketRight"
  }));
};

TicketHead.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
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

  var foldText = '접기 <i class="fn fn-up2"></i>';
  var showText = '보기 <i class="fn fn-down2"></i>';

  var handleCollectionClick = function handleCollectionClick() {
    if (isCollectionFold) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.collectionUseTerm').slideDown();
      setIsCollectionFold(false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.collectionUseTerm').slideUp();
      setIsCollectionFold(true);
    }
  };

  var handleOfferClick = function handleOfferClick() {
    if (isOfferFold) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.offerTerm').slideDown();
      setIsOfferFold(false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.offerTerm').slideUp();
      setIsOfferFold(true);
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
    checked: isChecked,
    onChange: function onChange(_ref) {
      var checked = _ref.target.checked;
      dispatch({
        type: 'CHANGE_TOS',
        checked: checked
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "TOSCheck"
  }, "\uC774\uC6A9\uC790 \uC57D\uAD00 \uC804\uCCB4\uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\uD544\uC218 \uB3D9\uC758")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "agreement"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "spr_book ico_arr_ipc2"
  }), "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "collectionUseAgreement",
    onClick: handleCollectionClick
  }, isCollectionFold ? showText : foldText)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "collectionUseTerm",
    style: {
      display: isCollectionFold ? 'none' : 'block'
    }
  }, "<\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758>", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "1. \uC218\uC9D1\uD56D\uBAA9 : [\uD544\uC218] \uC774\uB984, \uC5F0\uB77D\uCC98, [\uC120\uD0DD] \uC774\uBA54\uC77C\uC8FC\uC18C", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "2. \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801 : \uC0AC\uC5C5\uC790\uD68C\uC6D0\uACFC \uC608\uC57D\uC774\uC6A9\uC790\uC758 \uC6D0\uD65C\uD55C \uAC70\uB798 \uC9C4\uD589, \uACE0\uAC1D\uC0C1\uB2F4, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0 \uCC98\uB9AC, \uBD84\uC7C1\uC870\uC815 \uD574\uACB0\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uB124\uC774\uBC84 \uC608\uC57D \uC774\uC6A9 \uD6C4 \uB9AC\uBDF0\uC791\uC131\uC5D0 \uB530\uB978 \uB124\uC774\uBC84\uD398\uC774 \uD3EC\uC778\uD2B8 \uC9C0\uAE09 \uBC0F \uAD00\uB828 \uC548\uB0B4", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "3. \uBCF4\uAD00\uAE30\uAC04", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "- \uD68C\uC6D0\uD0C8\uD1F4 \uB4F1 \uAC1C\uC778\uC815\uBCF4 \uC774\uC6A9\uBAA9\uC801 \uB2EC\uC131 \uC2DC\uAE4C\uC9C0 \uBCF4\uAD00", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "- \uB2E8, \uC0C1\uBC95 \uBC0F \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uB4F1 \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uD558\uC5EC \uC77C\uC815 \uAE30\uAC04 \uBCF4\uAD00\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uD568", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "4. \uB3D9\uC758 \uAC70\uBD80\uAD8C \uB4F1\uC5D0 \uB300\uD55C \uACE0\uC9C0: \uC815\uBCF4\uC8FC\uCCB4\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758\uB97C \uAC70\uBD80\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098, \uC774 \uACBD\uC6B0 \uC0C1\uD488 \uBC0F \uC11C\uBE44\uC2A4 \uC608\uC57D\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "agreement"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "spr_book ico_arr_ipc2"
  }), "\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "offerAgreement",
    onClick: handleOfferClick
  }, isOfferFold ? showText : foldText)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "offerTerm",
    style: {
      display: isOfferFold ? 'none' : 'block'
    }
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
/* harmony import */ var _TicketInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TicketInfo */ "KTKg");
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      info: value,
      actions: actions
    });
  }));
};

TicketInfoList.propTypes = {
  infos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, place, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "".concat(startDate, " ~ ").concat(endDate)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uC694\uAE08"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, priceText()));
};

ReserveDesc.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  place: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  startDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  endDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  })).isRequired
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

const validImageType = (image) => {
  const result = ['image/jpeg', 'image/png', 'image/jpg'].indexOf(image) > -1;
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

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "qY7+");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _InputTicket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../InputTicket */ "6rjj");
/* harmony import */ var _ReserverInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ReserverInfo */ "LB1S");
/* harmony import */ var _TOS__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TOS */ "OELu");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// button 부분 buttonbunch로










var initialState = function initialState(length) {
  return {
    tickets: Array(length).fill(0),
    name: '',
    telephone: '',
    email: '',
    isVerifiedName: false,
    isVerifiedTel: false,
    isVerifiedEmail: false,
    isTOSChecked: false,
    submit: false
  };
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'DECREMENT':
      var modifiedDec = _objectSpread({}, state);

      modifiedDec.tickets[action.where] = modifiedDec.tickets[action.where] - 1;
      return modifiedDec;

    case 'INCREMENT':
      var modifiedInc = _objectSpread({}, state);

      modifiedInc.tickets[action.where] = modifiedInc.tickets[action.where] + 1;
      return modifiedInc;

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

    case 'VERIFY_TEL':
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

    case 'VERIFY_EMAIL':
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

    case 'VERIFY_SUBMIT':
      var tickets = state.tickets,
          isVerifiedName = state.isVerifiedName,
          isVerifiedTel = state.isVerifiedTel,
          isVerifiedEmail = state.isVerifiedEmail,
          isTOSChecked = state.isTOSChecked;

      if (tickets.some(function (value) {
        value > 0;
      }) && isVerifiedName && isVerifiedTel && isVerifiedEmail && isTOSChecked) {
        return _objectSpread({}, state, {
          submit: true
        });
      }

      return _objectSpread({}, state, {
        submit: false
      });

    default:
      throw new Error('');
  }
};

var ReserveForm = function ReserveForm(props) {
  var productPrices = props.productPrices,
      displayInfoId = props.displayInfoId,
      productId = props.productId,
      reservationDate = props.reservationDate;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(reducer, initialState(productPrices.length)),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_9__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var reservationInfo, index, len, _ref2, status, statusText;

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
                  count: Number(state.tickets[index]),
                  productPriceId: productPrices[index].productPriceID
                });
              }

              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/api/reservations', reservationInfo);

            case 5:
              _ref2 = _context.sent;
              status = _ref2.status;
              statusText = _ref2.statusText;

              if (status === 400) {
                alertModal(statusText);
              } else if (status === 201) {
                alertModal('예매가 성공적으로 승인되었습니다');
                history.push("/detail/".concat(displayInfoId));
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
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
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    action: "/api/reservations",
    method: "post"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_InputTicket__WEBPACK_IMPORTED_MODULE_10__["default"], {
    productPrices: productPrices,
    tickets: state.tickets,
    dispatch: dispatch
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReserverInfo__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: state.name,
    telephone: state.telephone,
    email: state.email,
    reservationDate: reservationDate.split(' ')[0],
    totalTicket: state.tickets.reduce(function (accum, current) {
      return accum + current;
    }),
    dispatch: dispatch,
    isVerifiedName: state.isVerifiedName,
    isVerifiedTel: state.isVerifiedTel,
    isVerifiedEmail: state.isVerifiedEmail
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TOS__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isChecked: state.TOS,
    dispatch: dispatch
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    type: "submit",
    style: {
      backgroundColor: state.submit ? '#1EC900' : '#D1D1D1'
    },
    onClick: confirmSubmit
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "spr_book ico_naver_s"
  }), "\uC608\uC57D\uD558\uAE30")));
};

__signature__(ReserveForm, "useReducer{[state, dispatch](initialState(productPrices.length))}\nuseContext{{ alertModal, confirmModal }}\nuseHistory{history}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"]];
});

ReserveForm.propTypes = {
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired,
  displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequred,
  productId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
  reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
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
  var name = props.name;

  var _useLocation = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useLocation"])(),
      pathname = _useLocation.pathname;

  var paths = pathname.split('/');
  var itemId = paths[paths.length - 1];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SubNavBar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backward"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/detail/".concat(itemId)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-backward1"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "titleName"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, name || '행사 이름')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "empty"
  }));
};

__signature__(SubNavBar, "useLocation{{ pathname }}", function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useLocation"]];
});

SubNavBar.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
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
  views: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired).isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "Qm/K");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Review = function Review(props) {
  var review = props.review,
      image = props.image,
      score = props.score,
      email = props.email,
      date = props.date,
      editComment = props.editComment,
      confirmDelete = props.confirmDelete; // 이미지 보정

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "Review"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, review), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right"
  }, image ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "reviewImage"
  }) : ''))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "score"
  }, score), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "email"
  }, "".concat(email.slice(0, 4), "****")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "visitDate"
  }, "".concat(date.slice(0, 10), " \uBC29\uBB38"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "edit",
    onClick: editComment
  }, "\uC218\uC815"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "delete",
    onClick: confirmDelete
  }, "\uC0AD\uC81C"))));
};

Review.propTypes = {
  review: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  score: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  editComment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  confirmDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
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
      correctionNeeded = props.correctionNeeded,
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setViewStyle(_objectSpread({}, viewStyle, {
      height: viewHeight
    }));
  }, [viewHeight]);
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
    style: viewStyle
  }), bottom);
};

__signature__(TabController, "useState{[selected, setSelected](0)}\nuseState{[indicatorStyle, setIndicatorStyle]({\r\n    left: 0,\r\n    width: 0,\r\n  })}\nuseState{[viewStyle, setViewStyle]({\r\n    transitionDuration: '0.5s',\r\n  })}\nuseState{[viewHeight, setViewHeight](0)}\nuseRef{uiRef}\nuseRef{viewRef}\nuseRef{selectedRef}\nuseRef{viewHeightRef}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

TabController.defaultProps = {
  alarm: false,
  top: '',
  bottom: ''
};
TabController.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired).isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node).isRequired,
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");




var _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var ReviewEdit = function ReviewEdit(props) {
  // review 만들고 완성해야됨 미완
  var commentId = props.commentId,
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_8__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var form = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (imageSrc) {
      var imageMeasurement = new Image();
      imageMeasurement.src = imageSrc;

      imageMeasurement.onload = function () {
        var ratio = _this.height / _this.width;
        setThumbnailStyle({
          display: 'flex',
          width: "".concat(thumbnailWidth, "px"),
          height: "".concat(thumbnailWidth * ratio, "px"),
          backgroundImage: "url(".concat(_this.src, ")")
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
      var formObj, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              event.preventDefault();

              if (!(score <= 0 || score > 5)) {
                _context.next = 5;
                break;
              }

              alertModal('별점 개수가 올바르지 않습니다');
              return _context.abrupt("return", false);

            case 5:
              if (!(comment.length < 5 || comment.length > 400)) {
                _context.next = 8;
                break;
              }

              alertModal('리뷰 글자수가 맞지 않습니다.');
              return _context.abrupt("return", false);

            case 8:
              if (!(imageRef.current.files.length && !Object(_js_common__WEBPACK_IMPORTED_MODULE_7__["validImageType"])(imageRef.current.files[0]))) {
                _context.next = 11;
                break;
              }

              alertModal('이미지는 jpg,jpeg,png 파일만 가능합니다.');
              return _context.abrupt("return", false);

            case 11:
              formObj = new FormData(form.current);
              /*
              formObj.append('reservationInfoId,blah);
              formObj.append('exImage', !!exData.imageSrc);
                    formObj.append('newImage', newImage);
                    */

              _context.next = 14;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(form.current.action, formObj);

            case 14:
              response = _context.sent;

              if (!(response.status === 400)) {
                _context.next = 18;
                break;
              }

              alertModal(response.statusText);
              return _context.abrupt("return", false);

            case 18:
              if (!(response.status === 201)) {
                _context.next = 22;
                break;
              }

              alertModal(isPost ? '리뷰가 등록되었습니다' : '리뷰가 수정되었습니다');
              if (isPost) history.push('/myreservation');
              return _context.abrupt("return", true);

            case 22:
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 24]]);
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

  var uploadImage = function uploadImage(_ref2) {
    var files = _ref2.target.files;
    var tempImage = files[0];

    if (!Object(_js_common__WEBPACK_IMPORTED_MODULE_7__["validImageType"])(tempImage)) {
      alertModal('이미지는 jpg,jpeg,png 파일만 가능합니다');
      imageRef.current.value = ''; // 아마 고쳐야될꺼임

      setImageSrc(''); // 필요한지 모르겠음

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
    method: isPost ? 'POST' : 'PUT',
    action: "/api/reservations/comments/".concat(commentId),
    encType: "multipart/form-data",
    name: "reviewForm",
    ref: form
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    className: "ratingSection"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, "\uBCC4\uC810\uACFC \uC774\uC6A9 \uACBD\uD5D8\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "ratingStar"
  }, [1, 2, 3, 4, 5].map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
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
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
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
  }), "\uC0AC\uC9C4 \uCD94\uAC00"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "commentCount"
  }, "".concat(comment.length, "/400 (\uCD5C\uC18C 5\uC790 \uC774\uC0C1)")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "thumbnailImage",
    style: thumbnailStyle
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "fn fn-cross1",
    onClick: cancelImageUpload
  })))), isPost ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    notes: [{
      style: {
        backgroundColor: '#1EC800'
      },
      click: function click() {
        confirmModal('리뷰를 등록 하시겠습니까?', handleSubmit);
      },
      children: '리뷰 등록'
    }]
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    notes: [{
      style: {
        backgroundColor: '#1EC800'
      },
      click: function click() {
        confirmEdit(handleSubmit, score, comment, imageSrc);
      },
      children: '수정'
    }, {
      backgroundColor: '#D8DBDE',
      click: function click() {
        confirmCancel();
      },
      children: '취소'
    }]
  })));
};

__signature__(ReviewEdit, "useState{[score, setScore](exScore)}\nuseState{[comment, setComment](exComment)}\nuseState{[imageSrc, setImageSrc](exImageSrc)}\nuseState{[thumbnailStyle, setThumbnailStyle]({})}\nuseContext{{ alertModal, confirmModal }}\nuseRef{form}\nuseRef{imageRef}\nuseHistory{history}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"]];
});

ReviewEdit.defaultProps = {
  thumbnailWidth: 200,
  exScore: 0,
  exComment: '',
  exImageSrc: '',
  isPost: true
};
ReviewEdit.propTypes = {
  commentId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  thumbnailWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  exScore: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
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
      children = props.children,
      actions = props.actions,
      isGreen = props.isGreen;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "Ticket"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isGreen: isGreen
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TicketInfoList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    infos: infos,
    actions: actions
  }));
};

Ticket.defaultProps = {
  isGreen: false
};
Ticket.propTypes = {
  infos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
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

/***/ "pA+x":
/*!***************************************!*\
  !*** ./src/jsx/InputTicket/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "pDfU":
/*!***************************************!*\
  !*** ./src/jsx/ReserveDesc/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "qY7+":
/*!***************************************!*\
  !*** ./src/jsx/ReserveForm/style.css ***!
  \***************************************/
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
      isLogoutable = props.isLogoutable;
  return name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubNavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainNavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isTransparent: isTransparent,
    isLogoutable: isLogoutable
  });
};

NavBar.defaultProps = {
  name: '',
  isTransparent: false,
  isLogoutable: false
};
NavBar.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isTransparent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isLogoutable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
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
  }, children);
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

    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(reviews).reverse().some(function (value, index) {
      if (isBrief && index >= 5) {
        return true;
      }

      reviewsComp.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Review__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: value.commentId,
        review: value.comment,
        image: value.commentImages.length ? value.commentImages[0].saveFileName : '',
        score: value.score,
        email: value.reservationEmail,
        date: value.reservationDate,
        editComment: editComment(value.commentId),
        confirmDelete: confirmDelete(value.commentId)
      }));
    });

    return reviewsComp;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ReviewList"
  }, isModifiable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReviewEdit__WEBPACK_IMPORTED_MODULE_5__["default"], {
    commentId: id,
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
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    score: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    comment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
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

/***/ })

},[["NO5J","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRXZlbnRJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VTbGlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9EZXRhaWxJbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RvdGFsQ291bnQvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluTmF2QmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2YXRpb25Db3VudC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0xheW91dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5JbWFnZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0lucHV0VGlja2V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2YXRpb25Db250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0FwcC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3REZXNjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3Q29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpbk5hdkJhci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlZpZXcvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Mb2dpbkZvcm0vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ub3RhbENvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEJveC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SGVhZC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRGV0YWlsQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZXJJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVE9TL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpblZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9TdWJOYXZCYXIvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdMaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQXBwL2FwcC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1Byb3ZpZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VUaXRsZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEhlYWQvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UT1MvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRJbmZvTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVEZXNjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ291bnQvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeLy4vLy4qJCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1N1Yk5hdkJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0hlYWRlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVySW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1N1bW1hcnkvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdDb250YWluZXIvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9FdmVudEluZm8vc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJVSS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbkJ1bmNoL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGFiQ29udHJvbGxlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0xvZ2luRm9ybS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5WaWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRm9vdGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uQnVuY2gvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Q29udGFpbmVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VUaXRsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RCb3gvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluQ29udGFpbmVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0VkaXQvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXQvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0lucHV0VGlja2V0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZURlc2Mvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRm9ybS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb21vdGlvbkltYWdlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTmF2QmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01vZGFsL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkltYWdlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0xpc3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIkV2ZW50SW5mbyIsInByb3BzIiwiZGlzY291bnRJbmZvIiwiam9pbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiSW1hZ2VTbGlkZXIiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJkZWdyZWUiLCJ0cmFuc2l0aW9uVGltZSIsImltYWdlcyIsImltYWdlV2lkdGgiLCJpc1Byb21vdGlvbiIsImhhbmRsZVRyYW5zaXRpb25FbmQiLCJoYW5kbGVNb3VzZU92ZXIiLCJoYW5kbGVNb3VzZU91dCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJkaXNwbGF5SW5mb0lkIiwic2F2ZUZpbGVOYW1lIiwiZGVmYXVsdFByb3BzIiwibnVtYmVyIiwic2hhcGUiLCJib29sIiwiZnVuYyIsIkRldGFpbEltYWdlIiwidGl0bGUiLCJ1c2VTdGF0ZSIsInNldERlZ3JlZSIsInNldEltYWdlV2lkdGgiLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJpbWFnZUxpc3QiLCJ1c2VSZWYiLCJkb2luZ1Jlc2l6ZSIsImN1cnJlbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsaWVudFdpZHRoIiwiZG9uZVJlc2l6ZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemVFbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVmdFNjcm9sbCIsInJpZ2h0U2Nyb2xsIiwibGVuZ3RoIiwiYXJyYXkiLCJNYWluTmF2QmFyIiwiaXNUcmFuc3BhcmVudCIsImlzTG9nb3V0YWJsZSIsIlJlc2VydmF0aW9uQ291bnQiLCJ0b1VzZWRMZW4iLCJ1c2VkTGVuIiwiY2FuY2VsZWRMZW4iLCJCdXR0b24iLCJzdHlsZSIsImNsaWNrIiwiY2hpbGRyZW4iLCJjcmVhdGVTdHlsZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib2JqZWN0Iiwib25lT2ZUeXBlIiwibm9kZSIsIk1haW5Db250YWluZXIiLCJiYXNpc0NvdW50Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJwcm9kdWN0Q291bnQiLCJzZXRQcm9kdWN0Q291bnQiLCJBcnJheSIsImZpbGwiLCJ2aWV3cyIsInNldFZpZXdzIiwidmlld3NBcnIiLCJzZXRWaWV3c0FyciIsImNhdGVnb3J5UHJvZHVjdHMiLCJzZXRDYXRlZ29yeVByb2R1Y3RzIiwic2hvd2luZ0NvdW50Iiwic2V0U2hvd2luZ0NvdW50IiwiaXNGZXRjaGVkIiwic2V0SXNGZXRjaGVkIiwibGFiZWxzIiwiZG9jdW1lbnQiLCJmZXRjaFByb2R1Y3RzIiwiYXhpb3MiLCJnZXQiLCJpdGVtcyIsImRhdGEiLCJtb2RpZmllZENhdGVnb3J5IiwibW9kaWZpZWRWaWV3c0FyciIsInNsaWNlIiwiaW5mbyIsIm1vZGlmaWVkVmlld3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TW9yZVByb2R1Y3QiLCJ2aWV3c0xlbiIsInByb2R1Y3RzTGVuIiwiZmluYWxJbmQiLCJmb3JFYWNoIiwicHVzaCIsInNwZWNpZmljUHJvZHVjdHMiLCJhbGxQcm9kdWN0cyIsImNhdGVnb3J5SWQiLCJjb3BpZWRWaWV3cyIsImlzTW9yZVNob3dpbmciLCJNb2RhbENvbnRleHQiLCJjcmVhdGVDb250ZXh0Iiwic2V0SXNNb2RhbCIsInNldE1vZGFsQ2hpbGRyZW4iLCJhbGVydE1vZGFsIiwiY29uZmlybU1vZGFsIiwiTGF5b3V0IiwiaXNNb2RhbCIsIm1vZGFsQ2hpbGRyZW4iLCJ0ZXh0IiwiYWN0aW9uIiwiSW5wdXRUaWNrZXQiLCJwcm9kdWN0UHJpY2VzIiwidGlja2V0cyIsImRpc3BhdGNoIiwicHJpY2VUeXBlTWFwcGVyIiwicHJpY2VUeXBlTmFtZSIsInRyYW5zZm9ybU1vbmV5VW5pdCIsInByaWNlIiwiTnVtYmVyIiwiZGlzY291bnRSYXRlIiwiRVBTSUxPTiIsIm9yaWdpbmFsQ29zdCIsIk1hdGgiLCJyb3VuZCIsInR5cGUiLCJ3aGVyZSIsIkFjdGlvbkNvbnRleHQiLCJjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24iLCJSZXNlcnZhdGlvbkNvbnRhaW5lciIsImVtYWlsSWQiLCJ0b1VzZWQiLCJzZXRUb1VzZWQiLCJzZXRUb1VzZWRMZW4iLCJjYW5jZWxlZCIsInNldENhbmNlbGVkIiwic2V0Q2FuY2VsZWRMZW4iLCJ1c2VDb250ZXh0IiwidXNlZCIsImNhbmNlbFJlc2VydmF0aW9uIiwiaWQiLCJwdXQiLCJzdGF0dXMiLCJ0b0RlbGV0ZUluZGV4IiwiZmluZEluZGV4IiwicmVzZXJ2YXRpb25JbmZvSWQiLCJjYW5jZWxlZEl0ZW0iLCJzcGxpY2UiLCJ0b0luc2VydEluZGV4IiwiUHJvZHVjdEluZm8iLCJkaXNwbGF5SW5mbyIsInByb2R1Y3RDb250ZW50IiwicHJvZHVjdERlc2NyaXB0aW9uIiwicGxhY2VMb3QiLCJwbGFjZVN0cmVldCIsInBsYWNlTmFtZSIsInRlbGVwaG9uZSIsImxvY2F0aW9uSW1nU3JjIiwiT2JqZWN0Iiwia2V5cyIsIkZvb3RlciIsImlzUmlzZWFibGUiLCJzZXRJc1Jpc2VhYmxlIiwic2V0SW50ZXJ2YWwiLCJib2R5Iiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGVhckludGVydmFsIiwiUmV2aWV3Q29udGFpbmVyIiwiaXNCcmllZiIsImV4UmV2aWV3cyIsInJldmlld3MiLCJleEF2ZXJhZ2VTY29yZSIsImF2ZXJhZ2VTY29yZSIsInNldFJldmlld3MiLCJzZXRBdmVyYWdlU2NvcmUiLCJpc01vZGlmaWFibGUiLCJzZXRJc01vZGlmaWFibGUiLCJleERhdGEiLCJzZXRFeERhdGEiLCJzdHlsZVJlZiIsImhlYWQiLCJyZW1vdmVDaGlsZCIsIm1vZGlmaWVkQXZlcmFnZVNjb3JlIiwicmVkdWNlIiwiYWNjdW0iLCJzY29yZSIsImRpc3BsYXlTdGFyIiwibWF4U2NvcmUiLCJmaWxsQ291bnQiLCJmbG9vciIsIm5vdEZpbGxDb3VudCIsImNlaWwiLCJyYXRpb0NvdW50Iiwic3RhcnMiLCJfIiwidGltZXMiLCJpbm5lclRleHQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJlZGl0Q29tbWVudCIsImNvbW1lbnRJZCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsImNvbW1lbnQiLCJjb21tZW50SW1hZ2VzIiwiaW1hZ2VTcmMiLCJkZWxldGVDb21tZW50IiwibW9kaWZpZWRSZXZpZXdzIiwiZmlsdGVyIiwiY29uZmlybURlbGV0ZSIsImNvbmZpcm1FZGl0Iiwic3VibWl0IiwiaXNQcm9jZXNzZWQiLCJjb25maXJtQ2FuY2VsIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwicHJvZHVjdElkIiwicmVzZXJ2YXRpb25EYXRlIiwicmVzZXJ2YXRpb25FbWFpbCIsImRlbGV0ZUZsYWciLCJMb2dpbkZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidGFyZ2V0IiwiVG90YWxDb3VudCIsIlByb2R1Y3RCb3giLCJpdGVtSW5mbyIsInByb2R1Y3RJbWFnZVVybCIsInRleHRMaW1pdCIsImlzRm9sZCIsInNldElzRm9sZCIsImlzSWNvblNob3dpbmciLCJzZXRJc0ljb25TaG93aW5nIiwiZGV0YWlsVGV4dCIsInRleHRPYmoiLCJ0cmltbWVkVGV4dCIsInRyaW0iLCJyZXBsYWNlIiwidGV4dFNpbXBsZSIsInRleHREZXRhaWwiLCJzaW1wbGUiLCJkZXRhaWwiLCJzaG93QW5kSGlkZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkIiwic2xpZGVEb3duIiwic2xpZGVVcCIsImJhY2tncm91bmRJbWFnZSIsImRpc3BsYXkiLCJUaWNrZXRJbmZvIiwiZGVzY3JpcHRpb24iLCJyZXNlcnZhdGlvbk5hbWUiLCJyZXNlcnZhdGlvblRlbCIsInByaWNlSW5mbyIsInRvdGFsUHJpY2UiLCJhY3Rpb25zIiwicmVzZXJ2YXRpb25TdW1tYXJ5IiwiY291bnQiLCJjcmVhdGVCdXR0b24iLCJub3RlcyIsIlN0cmluZyIsInBhZFN0YXJ0IiwiUmVzZXJ2ZUNvbnRhaW5lciIsInVzZVBhcmFtcyIsInByb2R1Y3REYXRhIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImRpZmZEYXlzIiwicmVzZXJ2ZSIsInJhbmRvbSIsInN0YXJ0IiwiZW5kIiwibW9tZW50IiwidHoiLCJhZGQiLCJmb3JtYXQiLCJwcm9kdWN0SW1hZ2VzIiwic29tZSIsIkRldGFpbENvbnRhaW5lciIsInNldFByb2R1Y3REYXRhIiwic2V0RGlzY291bnRJbmZvIiwiZmV0Y2hEYXRhIiwibW9kaWZpZWRJbWFnZXMiLCJjb21tZW50cyIsImRpc3BsYXlJbmZvSW1hZ2UiLCJSZXNlcnZlckluZm8iLCJuYW1lIiwidG90YWxUaWNrZXQiLCJpc1ZlcmlmaWVkTmFtZSIsImlzVmVyaWZpZWRUZWwiLCJpc1ZlcmlmaWVkRW1haWwiLCJtYWtlQWxlcnQiLCJoaWRlIiwiTWFpblZpZXciLCJwcm9kdWN0cyIsImxlZnRQcm9kdWN0cyIsInYiLCJyaWdodFByb2R1Y3RzIiwiZWxlbWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXZpZXdQcm92aWRlciIsIkltYWdlVGl0bGUiLCJpbWFnZUxlbiIsIlRpY2tldEhlYWQiLCJpc0dyZWVuIiwiVE9TIiwiaXNDaGVja2VkIiwiaXNDb2xsZWN0aW9uRm9sZCIsInNldElzQ29sbGVjdGlvbkZvbGQiLCJpc09mZmVyRm9sZCIsInNldElzT2ZmZXJGb2xkIiwiZm9sZFRleHQiLCJzaG93VGV4dCIsImhhbmRsZUNvbGxlY3Rpb25DbGljayIsImhhbmRsZU9mZmVyQ2xpY2siLCJjaGVja2VkIiwiVGlja2V0SW5mb0xpc3QiLCJpbmZvcyIsIlJlc2VydmVEZXNjIiwicGxhY2UiLCJwcmljZVRleHQiLCJwcmljZUxpc3QiLCJIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJpc1RPU0NoZWNrZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJtb2RpZmllZERlYyIsIm1vZGlmaWVkSW5jIiwidGVzdCIsInRlbFJlIiwiZW1haWxSZSIsIkVycm9yIiwiUmVzZXJ2ZUZvcm0iLCJ1c2VSZWR1Y2VyIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJoYW5kbGVTdWJtaXQiLCJyZXNlcnZhdGlvbkluZm8iLCJwcmljZXMiLCJyZXNlcnZhdGlvblRlbGVwaG9uZSIsInJlc2VydmF0aW9uWWVhck1vbnRoRGF5IiwibGVuIiwicHJvZHVjdFByaWNlSWQiLCJwcm9kdWN0UHJpY2VJRCIsInBvc3QiLCJjb25maXJtU3VibWl0Iiwic3BsaXQiLCJpc1JlcXVyZWQiLCJTdWJOYXZCYXIiLCJ1c2VMb2NhdGlvbiIsInBhdGhuYW1lIiwicGF0aHMiLCJpdGVtSWQiLCJUYWJWaWV3IiwidmlldyIsImhlaWdodCIsIlJldmlldyIsInJldmlldyIsImltYWdlIiwiZGF0ZSIsIlRhYlVJIiwic2VsZWN0ZWQiLCJoYW5kbGVDbGljayIsImluZGljYXRvclN0eWxlIiwibGFiZWwiLCJsZWZ0Iiwid2lkdGgiLCJUYWJDb250cm9sbGVyIiwiYWxhcm0iLCJjb3JyZWN0aW9uTmVlZGVkIiwidG9wIiwiYm90dG9tIiwic2V0U2VsZWN0ZWQiLCJzZXRJbmRpY2F0b3JTdHlsZSIsInZpZXdTdHlsZSIsInNldFZpZXdTdHlsZSIsInZpZXdIZWlnaHQiLCJzZXRWaWV3SGVpZ2h0IiwidWlSZWYiLCJ2aWV3UmVmIiwic2VsZWN0ZWRSZWYiLCJ2aWV3SGVpZ2h0UmVmIiwicmV2aXNlSW5kaWNhdG9yIiwic2VsZWN0ZWRMaSIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsInJldmlzZVZpZXdXaWR0aCIsInZpZXdCb2R5Iiwib2Zmc2V0SGVpZ2h0IiwiYXBwbHlTdHlsZSIsInRvU3RyaW5nIiwiY2FsbCIsImFsbCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInJpZ2h0IiwiZG93biIsIkJ1dHRvbkJ1bmNoIiwibWFyZ2luIiwicGFkZGluZyIsImZvbnRDb2xvciIsIlJldmlld0VkaXQiLCJ0aHVtYm5haWxXaWR0aCIsImV4U2NvcmUiLCJleENvbW1lbnQiLCJleEltYWdlU3JjIiwiaXNQb3N0Iiwic2V0U2NvcmUiLCJzZXRDb21tZW50Iiwic2V0SW1hZ2VTcmMiLCJ0aHVtYm5haWxTdHlsZSIsInNldFRodW1ibmFpbFN0eWxlIiwiZm9ybSIsImltYWdlUmVmIiwiaW1hZ2VNZWFzdXJlbWVudCIsIkltYWdlIiwic3JjIiwib25sb2FkIiwicmF0aW8iLCJmaWxlcyIsInZhbGlkSW1hZ2VUeXBlIiwiZm9ybU9iaiIsIkZvcm1EYXRhIiwibW9kaWZ5UmF0aW5nIiwidXBsb2FkSW1hZ2UiLCJ0ZW1wSW1hZ2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjYW5jZWxJbWFnZVVwbG9hZCIsIlRpY2tldCIsIlByb2R1Y3REZXNjIiwibGltaXQiLCJzZXRUZXh0T2JqIiwic2hvd01vcmVEZXNjIiwib3BlblRleHQiLCJib3JkZXJMZWZ0IiwiYm9yZGVyUmlnaHQiLCJQcm9tb3Rpb25JbWFnZSIsInRpbWVJbnRlcnZhbCIsInNjcm9sbGFibGUiLCJzZXRTY3JvbGxhYmxlIiwic2V0SW1hZ2VzIiwiZGVncmVlUmVmIiwic2Nyb2xsYWJsZVJlZiIsImZldGNoSW1hZ2VzIiwiYXV0b1Njcm9sbCIsInByZXZEZWdyZWUiLCJOYXZCYXIiLCJQcm9kdWN0Q29udGFpbmVyIiwiY2xhc3NOYW1lIiwiTW9kYWwiLCJNYWluSW1hZ2UiLCJhbHQiLCJSZXZpZXdTdW1tYXJ5IiwicmV2aWV3Q291bnQiLCJib3JkZXJCb3R0b20iLCJSZXZpZXdMaXN0Iiwic2hvd1Jldmlld3MiLCJyZXZpZXdzQ29tcCIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxZQURtQixHQUNGRCxLQURFLENBQ25CQyxZQURtQjtBQUczQixTQUNFO0FBQVMsYUFBUyxFQUFDO0FBQW5CLEtBQ0UsdUVBQ0U7QUFBRyxhQUFTLEVBQUM7QUFBYixJQURGLEVBRUcsUUFGSCxDQURGLEVBS0UsbUlBRUUsc0VBRkYsWUFHTUEsWUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwRTs7Ozs7Ozs7Ozs7O0FDekMxRSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFWLENBQWV4QixVQXBCVDtBQXFCckJ5TCxRQUFNLEVBQUU1TCxpREFBUyxDQUFDeUIsS0FBVixDQUFnQjtBQUN0QjZILE1BQUUsRUFBRXRKLGlEQUFTLENBQUN3QixNQUFWLENBQWlCckIsVUFEQztBQUV0QmlNLFNBQUssRUFBRXBNLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFVBRkY7QUFHdEJtTixXQUFPLEVBQUV0TixpREFBUyxDQUFDRSxNQUFWLENBQWlCQyxVQUhKO0FBSXRCcU4sWUFBUSxFQUFFeE4saURBQVMsQ0FBQ0UsTUFBVixDQUFpQkM7QUFKTCxHQUFoQixFQUtMQTtBQTFCa0IsQ0FBdkI7ZUE2QmVvZCxVO0FBQUE7Ozs7Ozs7Ozs7MEJBdEZUQSxVIiwiZmlsZSI6Im1haW4uODJhYTEyODAyMmNkNzVhNWJjNGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBFdmVudEluZm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRpc2NvdW50SW5mbyB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJFdmVudEluZm9cIj5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19ldnRcIiAvPlxyXG4gICAgICAgIHsnIOydtOuypO2KuOygleuztCd9XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFvrhKTsnbTrsoTsmIjslb0g7Yq567OE7ZWg7J24XVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtgJHtkaXNjb3VudEluZm8uam9pbignLCAnKX0g7ZWg7J24YH1cclxuICAgICAgPC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5FdmVudEluZm8ucHJvcFR5cGVzID0ge1xyXG4gIGRpc2NvdW50SW5mbzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5JbWFnZSBmcm9tICcuLi9NYWluSW1hZ2UnO1xyXG5cclxuY29uc3QgSW1hZ2VTbGlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgLyogaW5pdFxyXG4gICAqICBkZWdyZWU6IDBcclxuICAgKiB0cmFuc2l0aW9uVGltZTogMlxyXG4gICAqICBpbWFnZXM6IFtdXHJcbiAgICogIGltYWdlV2lkdGg6IDBcclxuICAgKiBpc1Byb21vdGlvbjogdHJ1ZVxyXG4gICAqL1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkZWdyZWUsXHJcbiAgICB0cmFuc2l0aW9uVGltZSxcclxuICAgIGltYWdlcyxcclxuICAgIGltYWdlV2lkdGgsXHJcbiAgICBpc1Byb21vdGlvbixcclxuICAgIGhhbmRsZVRyYW5zaXRpb25FbmQsXHJcbiAgICBoYW5kbGVNb3VzZU92ZXIsXHJcbiAgICBoYW5kbGVNb3VzZU91dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17YEltYWdlU2xpZGVyICR7aXNQcm9tb3Rpb24gPyAncHJvbW90aW9uJyA6ICdkZXRhaWwnfWB9XHJcbiAgICAgIG9uVHJhbnNpdGlvbkVuZD17aGFuZGxlVHJhbnNpdGlvbkVuZH1cclxuICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn1cclxuICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XHJcbiAgICA+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2ltYWdlV2lkdGggKiBkZWdyZWV9cHgpYCxcclxuICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dHJhbnNpdGlvblRpbWV9c2AsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmICh2YWx1ZSAmJiBpc1Byb21vdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgZGV0YWlsLyR7dmFsdWUuZGlzcGxheUluZm9JZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPE1haW5JbWFnZSBzcmM9e3ZhbHVlLnNhdmVGaWxlTmFtZX0gYWx0PVwicHJvbW90aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkltYWdlIHNyYz17YC8ke3ZhbHVlLnNhdmVGaWxlTmFtZX1gfSBhbHQ9XCJpdGVtSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSk7XHJcblxyXG5JbWFnZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogKCkgPT4ge30sXHJcbiAgaGFuZGxlTW91c2VPdmVyOiAoKSA9PiB7fSxcclxuICBoYW5kbGVNb3VzZU91dDogKCkgPT4ge30sXHJcbn07XHJcblxyXG5JbWFnZVNsaWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgZGVncmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VXaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzUHJvbW90aW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZVRyYW5zaXRpb25FbmQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGhhbmRsZU1vdXNlT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFuZGxlTW91c2VPdXQ6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgeyByZXNpemVFbmQgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5pbXBvcnQgSW1hZ2VTbGlkZXIgZnJvbSAnLi4vSW1hZ2VTbGlkZXInO1xyXG5pbXBvcnQgSW1hZ2VUaXRsZSBmcm9tICcuLi9JbWFnZVRpdGxlJztcclxuXHJcbi8vIERldGFpbENvbnRhaW5lcuyXkOyEnCBpbWFnZXPsmYAgdGl0bGXsnYQg7KSY7JW8ICDtlZjqs6AgaW1hZ2Vz64qUIO2VhO2EsOungeydhCDqsbDss5DrhpTslbwg65CoXHJcbi8vIOyKpO2BrOuhpCDsi5zqsIQodHJhbnNpdGlvblRpbWUpIGRlZmF1bHQgMey0iFxyXG4vLyDtmZTrqbQg7KCE7ZmYIOqwhOqyqSAodGltZUludGVydmFsKSAy7LSIXHJcblxyXG5jb25zdCBEZXRhaWxJbWFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2VzLCB0aXRsZSwgdHJhbnNpdGlvblRpbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtkZWdyZWUsIHNldERlZ3JlZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW1hZ2VXaWR0aCwgc2V0SW1hZ2VXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdHJhbnNpdGlvbkR1cmF0aW9uLCBzZXRUcmFuc2l0aW9uRHVyYXRpb25dID0gdXNlU3RhdGUodHJhbnNpdGlvblRpbWUpO1xyXG4gIGNvbnN0IGltYWdlTGlzdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgZG9pbmdSZXNpemUgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTtcclxuICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbigwKTtcclxuICB9O1xyXG5cclxuICBsZXQgZG9uZVJlc2l6ZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEltYWdlV2lkdGgoXHJcbiAgICAgIChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZCAmJlxyXG4gICAgICAgIGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKSB8fFxyXG4gICAgICAgIDAsXHJcbiAgICApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRvaW5nUmVzaXplKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAncmVzaXplJyxcclxuICAgICAgKCgpID0+IHtcclxuICAgICAgICBkb25lUmVzaXplID0gcmVzaXplRW5kKCgpID0+IHNldFRyYW5zaXRpb25EdXJhdGlvbih0cmFuc2l0aW9uVGltZSkpO1xyXG4gICAgICAgIHJldHVybiBkb25lUmVzaXplO1xyXG4gICAgICB9KSgpLFxyXG4gICAgKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkb2luZ1Jlc2l6ZSk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkb25lUmVzaXplKTtcclxuICAgIH07XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICBjb25zdCBsZWZ0U2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSAhPT0gMCkge1xyXG4gICAgICBzZXREZWdyZWUoZGVncmVlIC0gMSk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgaWYgKGRlZ3JlZSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgZGVncmVlIC09IDE7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IGZpcnN0SXRlbS5jbGllbnRXaWR0aDtcclxuICAgIGltYWdlTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtpbnRlcnZhbCAqIGRlZ3JlZX1weClgO1xyXG4gICAgaW1hZ2VDb3VudGluZy5pbm5lclRleHQgPSBgICR7ZGVncmVlICsgMX0gYDtcclxuICAgICovXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmlnaHRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVncmVlICE9PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBzZXREZWdyZWUoKGRlZ3JlZSArIDEpICUgaW1hZ2VzLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgaW1hZ2VMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2ludGVydmFsICogZGVncmVlfXB4KWA7XHJcbiAgICBpbWFnZUNvdW50aW5nLmlubmVyVGV4dCA9IGAgJHtkZWdyZWUgKyAxfSBgO1xyXG4gICAgKi9cclxuICB9O1xyXG4gIC8vIHByb3BzIOuLpCDrhJjqsqjspJjslbwg7ZWoXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0YWlsSW1hZ2VcIj5cclxuICAgICAgPEltYWdlU2xpZGVyXHJcbiAgICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25EdXJhdGlvbn1cclxuICAgICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgICBpbWFnZVdpZHRoPXtpbWFnZVdpZHRofVxyXG4gICAgICAgIGlzUHJvbW90aW9uPXtmYWxzZX1cclxuICAgICAgLz5cclxuICAgICAgPEltYWdlVGl0bGVcclxuICAgICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgICBpbWFnZUxlbj17aW1hZ2VzLmxlbmd0aH1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgbGVmdFNjcm9sbD17bGVmdFNjcm9sbH1cclxuICAgICAgICByaWdodFNjcm9sbD17cmlnaHRTY3JvbGx9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuRGV0YWlsSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlczogW10sXHJcbiAgdGl0bGU6ICcnLFxyXG4gIHRyYW5zaXRpb25UaW1lOiAwLjUsXHJcbn07XHJcblxyXG5EZXRhaWxJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxJbWFnZTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBpc1RyYW5zcGFyZW506rCAIGZhbHNl7J28IOuVjCBmaXhlZOydtOuvgOuhnCBzdHlsZeqwneyytOqwgCDsnojslrTslbwg65CoXHJcblxyXG5jb25zdCBNYWluTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc1RyYW5zcGFyZW50LCBpc0xvZ291dGFibGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17YE1haW5OYXZCYXIgJHtpc1RyYW5zcGFyZW50ID8gJ3RyYW5zcGFyZW50JyA6ICdmaXhlZCd9YH0+XHJcbiAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24ucG5nXCIgYWx0PVwibmF2ZXIgaWNvblwiIC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvYm9va2luZ2xvZ2luXCI+XHJcbiAgICAgICAgPGgyPntpc0xvZ291dGFibGUgPyAn66Gc6re47JWE7JuDJyA6ICfsmIjslb3tmZXsnbgnfTwvaDI+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5NYWluTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzTG9nb3V0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIOyemOyemO2VmOqyjCDsqrzqsKTsiJgg7J6I7J2EIOqygyDqsJnsnYxcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvVXNlZExlbiwgdXNlZExlbiwgY2FuY2VsZWRMZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZhdGlvbkNvdW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2Jvb2syXCIgLz5cclxuICAgICAgICAgICAgICDsoITssrRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3RvVXNlZExlbiArIHVzZWRMZW4gKyBjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19ib29rX3NzXCIgLz5cclxuICAgICAgICAgICAgICDsnbTsmqnsmIjsoJVcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3RvVXNlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19jaGVja1wiIC8+XHJcbiAgICAgICAgICAgICAg7J207Jqp7JmE66OMXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt1c2VkTGVufTwvaDE+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2JhY2tcIiAvPlxyXG4gICAgICAgICAgICAgIOy3qOyGjMK37ZmY67aIXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPntjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2YXRpb25Db3VudC5wcm9wVHlwZXMgPSB7XHJcbiAgdG9Vc2VkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdXNlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGNhbmNlbGVkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvdW50O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3R5bGUsIGNsaWNrLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY3JlYXRlU3R5bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JyxcclxuICAgICAgLi4uc3R5bGUsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB0eXBlb2YgY2xpY2sgPT09ICdmdW5jdGlvbicgPyAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvblwiIG9uQ2xpY2s9e2NsaWNrfSBzdHlsZT17Y3JlYXRlU3R5bGUoKX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8TGluayBjbGFzc05hbWU9XCJCdXR0b25cIiB0bz17Y2xpY2t9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZToge30sXHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNsaWNrOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbi8qXHJcbiAqIOuEpOydtOuyhCDrsLDqsr0g7LSI66Gd7IOJOiAjMWVjODAwIOq4gOyekOyDiSAjZmZmO1xyXG4gKi9cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4uL01haW5WaWV3JztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcbmltcG9ydCBQcm9kdWN0Qm94IGZyb20gJy4uL1Byb2R1Y3RCb3gnO1xyXG5pbXBvcnQgVG90YWxDb3VudCBmcm9tICcuLi9Ub3RhbENvdW50JztcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGJhc2lzQ291bnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKDApOyAvLyDtmITsnqwg7ISg7YOd65CcIOy5tO2FjOqzoOumrCBpZFxyXG4gIGNvbnN0IFtwcm9kdWN0Q291bnQsIHNldFByb2R1Y3RDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gIOy5tO2FjOqzoOumrOydmCDsoJztkogg6rCc7IiYXHJcbiAgY29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZShBcnJheSg2KS5maWxsKDxNYWluVmlldyAvPikpOyAvLyBbPE1haW5WaWV3Lz4sPE1haW5WaWV3Lz5dXHJcbiAgY29uc3QgW3ZpZXdzQXJyLCBzZXRWaWV3c0Fycl0gPSB1c2VTdGF0ZShBcnJheSg2KS5maWxsKG51bGwpKTsgLy8gW1s8UHJvZHVjdEJveC8+XSxbPFByb2R1Y3RCb3gvPl1dO1xyXG4gIGNvbnN0IFtjYXRlZ29yeVByb2R1Y3RzLCBzZXRDYXRlZ29yeVByb2R1Y3RzXSA9IHVzZVN0YXRlKEFycmF5KDYpLmZpbGwobnVsbCkpO1xyXG4gIGNvbnN0IFtzaG93aW5nQ291bnQsIHNldFNob3dpbmdDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNGZXRjaGVkLCBzZXRJc0ZldGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsYWJlbHMgPSBbJ+yghOyytCcsICfsoITsi5wnLCAn666k7KeA7LusJywgJ+y9mOyEnO2KuCcsICftgbTrnpjsi50nLCAn7Jew6re5J107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9ICfrhKTsnbTrsoQg7JiI7JW9JztcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGRhdGE6IHsgaXRlbXMgfSxcclxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb2R1Y3RzJyk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRDYXRlZ29yeSA9IFsuLi5jYXRlZ29yeVByb2R1Y3RzXTtcclxuICAgICAgICBtb2RpZmllZENhdGVnb3J5WzBdID0gaXRlbXM7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRWaWV3c0FyciA9IFsuLi52aWV3c0Fycl07XHJcbiAgICAgICAgbW9kaWZpZWRWaWV3c0FyclswXSA9IGl0ZW1zXHJcbiAgICAgICAgICAuc2xpY2UoMCwgYmFzaXNDb3VudClcclxuICAgICAgICAgIC5tYXAoKGluZm8pID0+IDxQcm9kdWN0Qm94IGl0ZW1JbmZvPXtpbmZvfSAvPik7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgICAgbW9kaWZpZWRWaWV3c1swXSA9IDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FyclswXX0gLz47XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlQcm9kdWN0cyhtb2RpZmllZENhdGVnb3J5KTtcclxuICAgICAgICBzZXRWaWV3c0Fycihtb2RpZmllZFZpZXdzQXJyKTtcclxuICAgICAgICBzZXRTaG93aW5nQ291bnQoc2hvd2luZ0NvdW50ICsgYmFzaXNDb3VudCk7XHJcbiAgICAgICAgc2V0UHJvZHVjdENvdW50KGl0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0Vmlld3MobW9kaWZpZWRWaWV3cyk7XHJcbiAgICAgICAgc2V0SXNGZXRjaGVkKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hQcm9kdWN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vcmVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgdmlld3NMZW4gPSB2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGg7XHJcbiAgICBjb25zdCBwcm9kdWN0c0xlbiA9IGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoO1xyXG4gICAgaWYgKHZpZXdzTGVuID49IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnQgfHwgdmlld3NMZW4gPiBzaG93aW5nQ291bnQpIHtcclxuICAgICAgLy8gdmlld3NBcnLsl5Ag7J6I642YIOq4sOyhtCDqsoPsnYQg7IKs7Jqp7ZWgIOuVjFxyXG4gICAgICBjb25zdCBmaW5hbEluZCA9XHJcbiAgICAgICAgdmlld3NMZW4gPj0gc2hvd2luZ0NvdW50ICsgYmFzaXNDb3VudFxyXG4gICAgICAgICAgPyBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA6IHZpZXdzTGVuO1xyXG4gICAgICBjb25zdCBtb2RpZmllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgbW9kaWZpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnNsaWNlKDAsIGZpbmFsSW5kKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBzZXRTaG93aW5nQ291bnQoZmluYWxJbmQpO1xyXG4gICAgICBzZXRWaWV3cyhtb2RpZmllZFZpZXdzKTtcclxuICAgIH0gZWxzZSBpZiAocHJvZHVjdHNMZW4gPiB2aWV3c0xlbikge1xyXG4gICAgICAvLyB2aWV3c0FycuyXkCDssYTsm4zshJwg7IKs7Jqp7ZWgIOuVjFxyXG4gICAgICBjb25zdCBmaW5hbEluZCA9XHJcbiAgICAgICAgcHJvZHVjdHNMZW4gPj0gdmlld3NMZW4gKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA/IHZpZXdzTGVuICsgYmFzaXNDb3VudFxyXG4gICAgICAgICAgOiBwcm9kdWN0c0xlbjtcclxuICAgICAgY29uc3QgbW9kaWZpZWRWaWV3c0FyciA9IFsuLi52aWV3c0Fycl07XHJcbiAgICAgIGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV1cclxuICAgICAgICAuc2xpY2Uodmlld3NMZW4sIGZpbmFsSW5kKVxyXG4gICAgICAgIC5mb3JFYWNoKChpbmZvKSA9PiB7XHJcbiAgICAgICAgICBtb2RpZmllZFZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnB1c2goXHJcbiAgICAgICAgICAgIDxQcm9kdWN0Qm94IGl0ZW1JbmZvPXtpbmZvfSAvPixcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgIDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX0gLz5cclxuICAgICAgKTtcclxuICAgICAgc2V0U2hvd2luZ0NvdW50KGZpbmFsSW5kKTtcclxuICAgICAgc2V0Vmlld3NBcnIobW9kaWZpZWRWaWV3c0Fycik7XHJcbiAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDsubTthYzqs6Drpqwg67CU64CM7JeI7J2EIOuVjCB2aWV367CU6r6464qUIOqzvOyglVxyXG4gICAgLy8gMS4g7LWc7LSIIOqzvOyglVxyXG4gICAgLy8gMi4g7LWc7LSIIOyVhOuLkCDrlYxcclxuICAgIGlmIChpc0ZldGNoZWQpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldKSB7XHJcbiAgICAgICAgLy8gMS7stZzstIgg6rO87KCVXHJcbiAgICAgICAgLy8gc2VsZWN0ZWRDYXRlZ29yeeyXkCAg7IOB7ZKI7KCV67O066W8IOuEo+qzoFxyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IHNwZWNpZmljUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBjb25zdCBbYWxsUHJvZHVjdHNdID0gY2F0ZWdvcnlQcm9kdWN0cztcclxuICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmNhdGVnb3J5SWQgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgc3BlY2lmaWNQcm9kdWN0cy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhdGVnb3J5ID0gWy4uLmNhdGVnb3J5UHJvZHVjdHNdO1xyXG4gICAgICAgIG1vZGlmaWVkQ2F0ZWdvcnlbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzO1xyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3NBcnIgPSBbLi4udmlld3NBcnJdO1xyXG4gICAgICAgIG1vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzXHJcbiAgICAgICAgICAuc2xpY2UoMCwgYmFzaXNDb3VudClcclxuICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiA8UHJvZHVjdEJveCBpdGVtSW5mbz17dmFsdWV9IC8+KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgICAgPE1haW5WaWV3IHByb2R1Y3RzPXttb2RpZmllZFZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldfSAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlQcm9kdWN0cyhtb2RpZmllZENhdGVnb3J5KTtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoc3BlY2lmaWNQcm9kdWN0cy5sZW5ndGgpO1xyXG4gICAgICAgIHNldFZpZXdzQXJyKG1vZGlmaWVkVmlld3NBcnIpO1xyXG4gICAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgICAgIHNldFNob3dpbmdDb3VudChiYXNpc0NvdW50KTtcclxuICAgICAgfSBlbHNlIGlmICh2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGggPj0gYmFzaXNDb3VudCkge1xyXG4gICAgICAgIC8vIGxlbmd0aOuKlCDsnoTsi5wg7YyQ67OEIE1haW5WaWV366eMIOyeiOyWtOyEnCDslYjsl5Ag6rCv7IiYIO2MjOyVhe2VtOyVvCDrkKhcclxuICAgICAgICAvLyAyLiBiYXNpc0NvdW50656RIOydvOy5mO2VoCDrlYxcclxuICAgICAgICBjb25zdCBjb3BpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnNsaWNlKDAsIGJhc2lzQ291bnQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFByb2R1Y3RDb3VudChjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0U2hvd2luZ0NvdW50KGJhc2lzQ291bnQpO1xyXG4gICAgICAgIHNldFZpZXdzKGNvcGllZFZpZXdzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZENhdGVnb3J5XSk7XHJcblxyXG4gIGNvbnN0IGlzTW9yZVNob3dpbmcgPSAoKSA9PlxyXG4gICAgKChjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldICYmXHJcbiAgICAgIGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoKSB8fFxyXG4gICAgICAwKSA+IHNob3dpbmdDb3VudDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICA8VGFiQ29udHJvbGxlclxyXG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxyXG4gICAgICAgIHZpZXdzPXt2aWV3c31cclxuICAgICAgICBhbGFybT17c2V0U2VsZWN0ZWRDYXRlZ29yeX1cclxuICAgICAgICB0b3A9ezxUb3RhbENvdW50IHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fSAvPn1cclxuICAgICAgICBib3R0b209e1xyXG4gICAgICAgICAgaXNNb3JlU2hvd2luZygpID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17c2hvd01vcmVQcm9kdWN0fT5cclxuICAgICAgICAgICAgICDrjZTrs7TquLBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTWFpbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFzaXNDb3VudDogNCxcclxufTtcclxuXHJcbk1haW5Db250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGJhc2lzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBzZXRJc01vZGFsOiAoKSA9PiB7fSxcclxuICBzZXRNb2RhbENoaWxkcmVuOiAoKSA9PiB7fSxcclxuICBhbGVydE1vZGFsOiAoKSA9PiB7fSxcclxuICBjb25maXJtTW9kYWw6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc01vZGFsLCBzZXRJc01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxDaGlsZHJlbiwgc2V0TW9kYWxDaGlsZHJlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGFsZXJ0TW9kYWwgPSAodGV4dCkgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3RleHR9PC9oMT5cclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogJ+2ZleyduCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PixcclxuICAgICk7XHJcbiAgICBzZXRJc01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1Nb2RhbCA9ICh0ZXh0LCBhY3Rpb24pID0+IHtcclxuICAgIHNldE1vZGFsQ2hpbGRyZW4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0ZXh0fTwvaDE+XHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICftmZXsnbgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICfst6jshownLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc01vZGFsKSB7XHJcbiAgICAgIHNldE1vZGFsQ2hpbGRyZW4oJycpO1xyXG4gICAgfVxyXG4gIH0sIFtpc01vZGFsXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc2V0SXNNb2RhbCxcclxuICAgICAgICBzZXRNb2RhbENoaWxkcmVuLFxyXG4gICAgICAgIGFsZXJ0TW9kYWwsXHJcbiAgICAgICAgY29uZmlybU1vZGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHtpc01vZGFsID8gPE1vZGFsPnttb2RhbENoaWxkcmVufTwvTW9kYWw+IDogJyd9XHJcbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuZXhwb3J0IHsgTW9kYWxDb250ZXh0IH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybU1vbmV5VW5pdCwgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSW5wdXRUaWNrZXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RQcmljZXMsIHRpY2tldHMsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiSW5wdXRUaWNrZXRcIj5cclxuICAgICAge3Byb2R1Y3RQcmljZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlYWNoVGlja2V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHtgJHt0cmFuc2Zvcm1Nb25leVVuaXQodmFsdWUucHJpY2UpfSDsm5BgfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvc3QgPVxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wcmljZSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgxIC0gTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgLyAxMDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YCR7dHJhbnNmb3JtTW9uZXlVbml0KG9yaWdpbmFsQ29zdCl97JuQICgke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX0lIO2VoOyduOqwgClgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRqdXN0VGlja2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwcl9Cb29rMiBpY29fbWludXMzICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja2V0c1tpbmRleF0gPyAnJyA6ICdkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUNSRU1FTlQnLCB3aGVyZTogaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgcmVzcnZhdGlvblRpY2tldCR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsc3NOYW1lPXt0aWNrZXRzW2luZGV4XSA/ICcnIDogJ2Rpc2FibGVkJ31cclxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aWNrZXRzW2luZGV4XX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fcGx1czNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnSU5DUkVNRU5UJywgd2hlcmU6IGluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD57YCR7dHJhbnNmb3JtTW9uZXlVbml0KHZhbHVlLnByaWNlICogdGlja2V0c1tpbmRleF0pfSDsm5BgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuSW5wdXRUaWNrZXQucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICB0aWNrZXRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRpY2tldDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgVGlja2V0IGZyb20gJy4uL1RpY2tldCc7XHJcbmltcG9ydCBSZXNlcnZhdGlvbkNvdW50IGZyb20gJy4uL1Jlc2VydmF0aW9uQ291bnQnO1xyXG5cclxuY29uc3QgQWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbjogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGVtYWlsSWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt0b1VzZWQsIHNldFRvVXNlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvVXNlZExlbiwgc2V0VG9Vc2VkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjYW5jZWxlZCwgc2V0Q2FuY2VsZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYW5jZWxlZExlbiwgc2V0Q2FuY2VsZWRMZW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuICBsZXQgdXNlZDtcclxuICBsZXQgdXNlZExlbjtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Jlc2VydmF0aW9ucy8ke2VtYWlsSWR9YCk7XHJcbiAgICAgIHNldFRvVXNlZChkYXRhLnRvVXNlZCk7XHJcbiAgICAgIHNldFRvVXNlZExlbihkYXRhLnRvVXNlZC5sZW5ndGgpO1xyXG4gICAgICBzZXRDYW5jZWxlZChkYXRhLmNhbmNlbGVkKTtcclxuICAgICAgc2V0Q2FuY2VsZWRMZW4oZGF0YS5jYW5jZWxlZC5sZW5ndGgpO1xyXG4gICAgICB1c2VkID0gZGF0YS51c2VkO1xyXG4gICAgICB1c2VkTGVuID0gZGF0YS51c2VkLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsUmVzZXJ2YXRpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvcmVzZXJ2YXRpb24vJHtpZH1gKTtcclxuICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICBhbGVydE1vZGFsKCfsnpjrqrvrkJwg7JqU7LKt7J6F64uI64ukJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIC8vIOyYpOulmOuCmOuptCDrsLDsl7Qg67O17IKs7ZW07JW87ZWoXHJcbiAgICAgIGNvbnN0IHRvRGVsZXRlSW5kZXggPSB0b1VzZWQuZmluZEluZGV4KFxyXG4gICAgICAgICh2YWx1ZSkgPT4gdmFsdWUucmVzZXJ2YXRpb25JbmZvSWQgPT09IGlkLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjYW5jZWxlZEl0ZW0gPSB0b1VzZWQuc3BsaWNlKHRvRGVsZXRlSW5kZXgsIDEpO1xyXG4gICAgICBjb25zdCB0b0luc2VydEluZGV4ID0gY2FuY2VsZWQuZmluZEluZGV4KFxyXG4gICAgICAgICh2YWx1ZSkgPT4gdmFsdWUucmVzZXJ2YXRpb25JbmZvSWQgPiBpZCxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRvSW5zZXJ0SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgY2FuY2VsZWQucHVzaChjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhbmNlbGVkLnNwbGljZSh0b0luc2VydEluZGV4LCAwLCBjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRvVXNlZCh0b1VzZWQpO1xyXG4gICAgICBzZXRUb1VzZWRMZW4odG9Vc2VkTGVuIC0gMSk7XHJcbiAgICAgIHNldENhbmNlbGVkKGNhbmNlbGVkKTtcclxuICAgICAgc2V0Q2FuY2VsZWRMZW4oY2FuY2VsZWRMZW4gKyAxKTtcclxuICAgICAgYWxlcnRNb2RhbCgn7JiI7JW97J20IOy3qOyGjOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uZmlybU1vZGFsKFxyXG4gICAgICAgICftlZzrsogg7Leo7IaM7ZWY7Iuc66m0IOuLpOyLnCDrkJjrj4zrprQg7IiYIOyXhuyKteuLiOuLpC4g6re4656Y64+EIO2VmOyLnOqyoOyKteuLiOq5jD8nLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNhbmNlbFJlc2VydmF0aW9uKGlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc2VydmF0aW9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgIHRvVXNlZExlbj17dG9Vc2VkTGVufVxyXG4gICAgICAgICAgdXNlZExlbj17dXNlZExlbn1cclxuICAgICAgICAgIGNhbmNlbGVkTGVuPXtjYW5jZWxlZExlbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaWNrZXQgaW5mb3M9e3RvVXNlZH0gYWN0aW9ucz1cImNhbmNlbFwiIGlzR3JlZW4+XHJcbiAgICAgICAgICDsmIjslb0g7ZmV7KCVXHJcbiAgICAgICAgPC9UaWNrZXQ+XHJcbiAgICAgICAgPFRpY2tldCBpbmZvcz17dXNlZH0gYWN0aW9ucz1cIndyaXRlUmV2aWV3XCI+XHJcbiAgICAgICAgICDsnbTsmqkg7JmE66OMXHJcbiAgICAgICAgPC9UaWNrZXQ+XHJcbiAgICAgICAgPFRpY2tldCBpbmZvcz17Y2FuY2VsZWR9Puy3qOyGjOuQnCDsmIjslb08L1RpY2tldD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmF0aW9uQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBlbWFpbElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvbnRhaW5lcjtcclxuZXhwb3J0IHsgQWN0aW9uQ29udGV4dCB9O1xyXG5cclxuLypcclxuUmVzZXJ2YXRpb25Db250YWluZXIg4oaSIFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaSIFRpY2tldCDihpIgVGlja2V0SGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpIgVGlja2V0SW5mb0xpc3Qg4oaSIFRpY2tldEluZm9cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpc3BsYXlJbmZvLFxyXG4gICAgZGlzcGxheUluZm86IHtcclxuICAgICAgcHJvZHVjdENvbnRlbnQsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgICAgcGxhY2VMb3QsXHJcbiAgICAgIHBsYWNlU3RyZWV0LFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHRlbGVwaG9uZSxcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbkltZ1NyYyxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZShBcnJheSgyKS5maWxsKG51bGwpKTtcclxuICBjb25zdCBsYWJlbHMgPSBbJ+yDgeyEuOygleuztCcsICfsmKTsi5zripTquLgnXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhkaXNwbGF5SW5mbykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNldFZpZXdzKFtcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwcm9kdWN0RGV0YWlsXCI+XHJcbiAgICAgICAgICA8aDI+W+yGjOqwnF08L2gyPlxyXG4gICAgICAgICAgPHA+e3Byb2R1Y3RDb250ZW50fTwvcD5cclxuICAgICAgICAgIDxoMj5b6rO17KeA7IKs7ZWtXTwvaDI+XHJcbiAgICAgICAgPC9hcnRpY2xlPixcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2xvY2F0aW9uSW1nU3JjfWB9IGFsdD1cImxvY2F0aW9uXCIgLz5cclxuICAgICAgICAgIDxoMj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY1RleHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXBpbjRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3BsYWNlTG90fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmV5VGV4dFwiPuyngOuyiDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtwbGFjZVN0cmVldH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVRleHRcIj57cGxhY2VOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2FsbDJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RlbGVwaG9uZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbmRSb2FkXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tcGF0aC1maW5kMlwiIC8+XHJcbiAgICAgICAgICAgICAg6ri47LC+6riwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jYXItZmluZDJcIiAvPlxyXG4gICAgICAgICAgICAgIOuCtOu5hOqyjOydtOyFmFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT4sXHJcbiAgICAgIF0pO1xyXG4gICAgfVxyXG4gIH0sIFtkaXNwbGF5SW5mb10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUHJvZHVjdEluZm9cIj5cclxuICAgICAgPFRhYkNvbnRyb2xsZXIgbGFiZWxzPXtsYWJlbHN9IHZpZXdzPXt2aWV3c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdEluZm8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGRpc3BsYXlJbmZvOiB7fSxcclxuICBsb2NhdGlvbkltZ1NyYzogJycsXHJcbn07XHJcblxyXG5Qcm9kdWN0SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzcGxheUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBwcm9kdWN0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlTG90OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2VTdHJlZXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSksXHJcbiAgbG9jYXRpb25JbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNSaXNlYWJsZSwgc2V0SXNSaXNlYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgc2V0SXNSaXNlYWJsZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc1Jpc2VhYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJGb290ZXJcIj5cclxuICAgICAge2lzUmlzZWFibGUgPyAoXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXVwMVwiIC8+XHJcbiAgICAgICAgICB7JyBUT1AnfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjYXV0aW9uXCI+XHJcbiAgICAgICAg64Sk7J2067KEKOyjvCnripQg7Ya17Iug7YyQ66ek7J2YIOuLueyCrOyekOqwgCDslYTri4jrqbAsIOyDge2SiOydmOygleuztCwg6rGw656Y7KGw6rG0LCDsnbTsmqkg67CPXHJcbiAgICAgICAg7ZmY67aIIOuTseqzvCDqtIDroKjtlZwg7J2Y66y07JmAIOyxheyehOydgCDqsIEg7ZqM7JuQ7JeQ6rKMIOyeiOyKteuLiOuLpC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj7CqSBOQVZFUiBDb3JwLjwvc3Bhbj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFJldmlld1N1bW1hcnkgZnJvbSAnLi4vUmV2aWV3U3VtbWFyeSc7XHJcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4uL1Jldmlld0xpc3QnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuLypcclxuZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxucmV2aWV3cz17cHJvZHVjdERhdGEuY29tbWVudHN9XHJcbmF2ZXJhZ2VTY29yZT17cHJvZHVjdERhdGEuYXZlcmFnZVNjb3JlfVxyXG4qL1xyXG5cclxuY29uc3QgUmV2aWV3Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8g7KCE7LK07KCB7Jy866GcIOunjOuTpOqzoCDri6Tsi5wg6rKA7YagXHJcbiAgY29uc3Qge1xyXG4gICAgaXNCcmllZixcclxuICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICByZXZpZXdzOiBleFJldmlld3MsXHJcbiAgICBhdmVyYWdlU2NvcmU6IGV4QXZlcmFnZVNjb3JlLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2F2ZXJhZ2VTY29yZSwgc2V0QXZlcmFnZVNjb3JlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc01vZGlmaWFibGUsIHNldElzTW9kaWZpYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4RGF0YSwgc2V0RXhEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IHN0eWxlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHN0eWxlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHN0eWxlUmVmLmN1cnJlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJldmlld3MoZXhSZXZpZXdzKTtcclxuICAgIHNldEF2ZXJhZ2VTY29yZShleEF2ZXJhZ2VTY29yZSB8fCAwKTtcclxuICB9LCBbZXhSZXZpZXdzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyByZXZpZXdz6rCAIOuLrOudvOyhjOydhCDrlYwgYXZlcmFnZVNjb3Jl67CU6r6464qUIGVmZmVjdFxyXG4gICAgaWYgKHJldmlld3MubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGxldCBtb2RpZmllZEF2ZXJhZ2VTY29yZSA9XHJcbiAgICAgICAgcmV2aWV3cy5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiBhY2N1bSArIE51bWJlcihjdXJyZW50LnNjb3JlKSwgMCkgL1xyXG4gICAgICAgIHJldmlld3MubGVuZ3RoO1xyXG4gICAgICBtb2RpZmllZEF2ZXJhZ2VTY29yZSA9IE1hdGgucm91bmQobW9kaWZpZWRBdmVyYWdlU2NvcmUgKiAxMCkgLyAxMDtcclxuICAgICAgc2V0QXZlcmFnZVNjb3JlKG1vZGlmaWVkQXZlcmFnZVNjb3JlKTtcclxuICAgIH1cclxuICB9LCBbcmV2aWV3c10pO1xyXG5cclxuICBjb25zdCBkaXNwbGF5U3RhciA9IChzY29yZSwgbWF4U2NvcmUgPSA1KSA9PiB7XHJcbiAgICAvLyBhdmVyYWdlU2NvcmXsl5Ag66ee6rKMIOuzhOygkOydhCDrpqzthLTtlZjripQg7ZWo7IiYXHJcbiAgICBjb25zdCBmaWxsQ291bnQgPSBNYXRoLmZsb29yKHNjb3JlKTtcclxuICAgIGNvbnN0IG5vdEZpbGxDb3VudCA9IG1heFNjb3JlIC0gTWF0aC5jZWlsKHNjb3JlKTtcclxuICAgIGNvbnN0IHJhdGlvQ291bnQgPSBNYXRoLnJvdW5kKHNjb3JlICogMTApIC8gMTAgLSBmaWxsQ291bnQ7XHJcbiAgICBjb25zdCBzdGFycyA9IFtdO1xyXG4gICAgXy50aW1lcyhmaWxsQ291bnQsICgpID0+IHtcclxuICAgICAgc3RhcnMucHVzaCg8aSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiBnZXRTdGFyXCIgLz4pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocmF0aW9Db3VudCA+IE51bWJlci5FUFNJTE9OKSB7XHJcbiAgICAgIGlmIChzdHlsZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgc3R5bGVSZWYuY3VycmVudC5pbm5lclRleHQgPSBgLlJldmlld0NvbnRhaW5lciAuUmV2aWV3U3VtbWFyeSAucmF0aW9TdGFyOmJlZm9yZSB7IFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIFJpZ2h0LCNmMDAgJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICByYXRpb0NvdW50ICogMTAwLFxyXG4gICAgICAgICAgKX0lLCNFNkU2RTYgJHtNYXRoLnJvdW5kKCgxIC0gcmF0aW9Db3VudCkgKiAxMDApfSUpO1xyXG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgfWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3R5bGVSZWYuY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgICAgICAgc3R5bGVSZWYuY3VycmVudC5pbm5lclRleHQgPSBgLlJldmlld0NvbnRhaW5lciAuUmV2aWV3U3VtbWFyeSAucmF0aW9TdGFyOmJlZm9yZSB7IFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIFJpZ2h0LCNmMDAgJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICByYXRpb0NvdW50ICogMTAwLFxyXG4gICAgICAgICAgKX0lLCNFNkU2RTYgJHtNYXRoLnJvdW5kKCgxIC0gcmF0aW9Db3VudCkgKiAxMDApfSUpO1xyXG4gICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgfWA7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVJlZi5jdXJyZW50KTtcclxuICAgICAgfVxyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIHJhdGlvU3RhclwiIC8+KTtcclxuICAgIH1cclxuICAgIF8udGltZXMobm90RmlsbENvdW50LCAoKSA9PiB7XHJcbiAgICAgIHN0YXJzLnB1c2goPGkgY2xhc3NOYW1lPVwiZm4gZm4tc3RhcjIgbm90R2V0U3RhclwiIC8+KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJDb3VudFwiPntzdGFyc308L3NwYW4+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVkaXRDb21tZW50ID0gKGNvbW1lbnRJZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBzdGF0dXMsIHN0YXR1c1RleHQgfSxcclxuICAgICAgICB9ID0gYXhpb3MuZ2V0KGAvYXV0aC9lZGl0L2NvbW1lbnRzLyR7Y29tbWVudElkfWApO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcmV2aWV3cy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB2YWx1ZS5jb21tZW50SWQgPT09IGNvbW1lbnRJZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IHNjb3JlLCBjb21tZW50LCBjb21tZW50SW1hZ2VzIH0gPSByZXZpZXdzW2luZGV4XTtcclxuICAgICAgICBzZXRFeERhdGEoe1xyXG4gICAgICAgICAgaWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICAgIHNjb3JlLFxyXG4gICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgIGltYWdlU3JjOiBjb21tZW50SW1hZ2VzLmxlbmd0aCA/IGNvbW1lbnRJbWFnZXNbMF0uc2F2ZUZpbGVOYW1lIDogJycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SXNNb2RpZmlhYmxlKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsgq3soJwg67KE7Yq87J2EIOuIhOultOqzoCDtmZXsnbjsnYQg64iM66CA7J2EIOyLnOydmCDtlonrj5lcclxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgcmVzcG9uc2U6IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0sXHJcbiAgICAgICAgfSA9IGF4aW9zLmRlbGV0ZShgL2FwaS9yZXNlcnZhdGlvbnMvY29tbWVudHMvJHtjb21tZW50SWR9YCk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBhbGVydE1vZGFsKHN0YXR1c1RleHQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoJ+umrOu3sOqwgCDsgq3soJzrkJjsl4jsirXri4jri6QnKTtcclxuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkUmV2aWV3cyA9IHJldmlld3MuZmlsdGVyKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jb21tZW50SWQgIT09IGNvbW1lbnRJZDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0UmV2aWV3cyhtb2RpZmllZFJldmlld3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtRGVsZXRlID0gKGNvbW1lbnRJZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IKt7KCcIOuyhO2KvOydhCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuICgpID0+XHJcbiAgICAgIGNvbmZpcm1Nb2RhbCgn66as67ew66W8IOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD8nLCBkZWxldGVDb21tZW50KGNvbW1lbnRJZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1FZGl0ID0gKGlkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq87J2EIOuIhOultOqzoCDsiJjsoJUg67KE7Yq87J2EIOuLpOyLnCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIChzdWJtaXQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYykgPT4ge1xyXG4gICAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDsiJjsoJXtlZjsi5zqsqDsirXri4jquYw/JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUHJvY2Vzc2VkID0gc3VibWl0KCk7XHJcbiAgICAgICAgaWYgKGlzUHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHJldmlld3MuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jb21tZW50SWQgPT09IGlkO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBtb2RpZmllZFJldmlld3MgPSBbLi4ucmV2aWV3c107XHJcbiAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnQgPSBjb21tZW50O1xyXG4gICAgICAgICAgbW9kaWZpZWRSZXZpZXdzW2luZGV4XS5zY29yZSA9IHNjb3JlO1xyXG4gICAgICAgICAgaWYgKG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbW9kaWZpZWRSZXZpZXdzW2luZGV4XS5jb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZSA9IGltYWdlU3JjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UmV2aWV3cyhtb2RpZmllZFJldmlld3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFeERhdGEoe30pO1xyXG4gICAgICAgIHNldElzTW9kaWZpYWJsZShmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvOydhCDriITrpbTqs6Ag7Leo7IaM66W8IOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICBjb25maXJtTW9kYWwoJ+umrOu3sCDsiJjsoJXsnYQg7Leo7IaM7ZWY7Iuc6rKg7Iq164uI6rmMPycsICgpID0+IHtcclxuICAgICAgc2V0SXNNb2RpZmlhYmxlKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXZpZXdDb250YWluZXJcIj5cclxuICAgICAgPFJldmlld1N1bW1hcnlcclxuICAgICAgICBhdmVyYWdlU2NvcmU9e2F2ZXJhZ2VTY29yZX1cclxuICAgICAgICByZXZpZXdDb3VudD17cmV2aWV3cy5sZW5ndGh9XHJcbiAgICAgICAgZGlzcGxheVN0YXI9e2Rpc3BsYXlTdGFyfVxyXG4gICAgICAvPlxyXG4gICAgICB7cmV2aWV3cy5sZW5ndGggPyAoXHJcbiAgICAgICAgPFJldmlld0xpc3RcclxuICAgICAgICAgIHJldmlld3M9e3Jldmlld3N9XHJcbiAgICAgICAgICBpc0JyaWVmPXtpc0JyaWVmfVxyXG4gICAgICAgICAgaXNNb2RpZmlhYmxlPXtpc01vZGlmaWFibGV9XHJcbiAgICAgICAgICBleERhdGE9e2V4RGF0YX1cclxuICAgICAgICAgIGNvbmZpcm1EZWxldGU9e2NvbmZpcm1EZWxldGV9XHJcbiAgICAgICAgICBjb25maXJtQ2FuY2VsPXtjb25maXJtQ2FuY2VsfVxyXG4gICAgICAgICAgY29uZmlybUVkaXQ9e2NvbmZpcm1FZGl0fVxyXG4gICAgICAgICAgZWRpdENvbW1lbnQ9e2VkaXRDb21tZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgICAge3Jldmlld3MubGVuZ3RoID8gKFxyXG4gICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1hbGFybTFcIiAvPlxyXG4gICAgICAgICAgICDrhKTsnbTrsoQg7JiI7JW97J2EIO2Gte2VtCDsi6TsoJwg67Cp66y47ZWcIOydtOyaqeyekOqwgCDrgqjquLQg7Y+J6rCA7J6F64uI64ukLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgICAge2lzQnJpZWYgJiYgcmV2aWV3cy5sZW5ndGggPiA1ID8gKFxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YzRjVGNicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjYzBjMGMwJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNsaWNrOiBgL3Jldmlldy8ke2Rpc3BsYXlJbmZvSWR9YCxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHsn7JiI66ek7J6QIOumrOu3sCDrjZTrs7TquLAgJ31cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tZm9yd2FyZDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0JyaWVmOiB0cnVlLFxyXG4gIHJldmlld3M6IFtdLFxyXG4gIGF2ZXJhZ2VTY29yZTogJycsXHJcbn07XHJcblxyXG5SZXZpZXdDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhdmVyYWdlU2NvcmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmV2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICByZXNlcnZhdGlvbkVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICByZXNlcnZhdGlvbkluZm9JZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNvbW1lbnRJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICBkZWxldGVGbGFnOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgfSksXHJcbiAgKSxcclxuICBpc0JyaWVmOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0NvbnRhaW5lcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJMb2dpbkZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJveFwiPlxyXG4gICAgICAgICAgPGgxPuu5hO2ajOybkCDsmIjslb3tmZXsnbg8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPuyYiOyVveyekCDsnbTrqZTsnbwg7J6F66ClPC9wPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cImF1dGgvbG9naW5cIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcj1cInh4eHh4QG5hdmVyLmNvbVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIuuCtCDsmIjslb0g7ZmV7J24XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvdGFsQ291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RDb3VudCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlRvdGFsQ291bnRcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAg67CU66GcIOyYiOunpCDqsIDriqXtlZwg7ZaJ7IKs6rCAXHJcbiAgICAgICAgPHN0cm9uZz57YCAke3Byb2R1Y3RDb3VudH3qsJwgYH08L3N0cm9uZz5cclxuICAgICAgICDsnojsirXri4jri6RcclxuICAgICAgPC9wPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5Ub3RhbENvdW50LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdGFsQ291bnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdEJveCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1JbmZvOiB7XHJcbiAgICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICAgIHByb2R1Y3RJbWFnZVVybCxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHByb2R1Y3RDb250ZW50LFxyXG4gICAgfSxcclxuICAgIHRleHRMaW1pdCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzRm9sZCwgc2V0SXNGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc0ljb25TaG93aW5nLCBzZXRJc0ljb25TaG93aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkZXRhaWxUZXh0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdGV4dE9iajtcclxuICBsZXQgdHJpbW1lZFRleHQgPSBwcm9kdWN0Q29udGVudC50cmltKCk7XHJcbiAgdHJpbW1lZFRleHQgPSB0cmltbWVkVGV4dC5yZXBsYWNlKCdcXG4nLCAnJyk7XHJcbiAgaWYgKHRyaW1tZWRUZXh0Lmxlbmd0aCA+IHRleHRMaW1pdCkge1xyXG4gICAgY29uc3QgdGV4dFNpbXBsZSA9IHRyaW1tZWRUZXh0LnNsaWNlKDAsIHRleHRMaW1pdCk7XHJcbiAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UodGV4dExpbWl0KTtcclxuICAgIHRleHRPYmogPSB7IHNpbXBsZTogdGV4dFNpbXBsZSwgZGV0YWlsOiB0ZXh0RGV0YWlsIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHRleHRPYmogPSB7IHNpbXBsZTogdHJpbW1lZFRleHQsIGRldGFpbDogJycgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dBbmRIaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGlzRm9sZCkge1xyXG4gICAgICBzZXRJc0ZvbGQoZmFsc2UpO1xyXG4gICAgICAkKGRldGFpbFRleHQuY3VycmVudCkuc2xpZGVEb3duKDEwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0ZvbGQodHJ1ZSk7XHJcbiAgICAgICQoZGV0YWlsVGV4dC5jdXJyZW50KS5zbGlkZVVwKDEwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlByb2R1Y3RCb3hcIj5cclxuICAgICAgPExpbmsgdG89e2AvZGV0YWlsLyR7ZGlzcGxheUluZm9JZH1gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwaG90b1wiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIvJHtwcm9kdWN0SW1hZ2VVcmx9XCIpYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cclxuICAgICAgICAgIDxoMT57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgICAgICA8aDI+e3BsYWNlTmFtZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5UZXh0XCJcclxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzSWNvblNob3dpbmcodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0ljb25TaG93aW5nKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RleHRPYmouZGV0YWlsID8gKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7dGV4dE9iai5zaW1wbGV9XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdHNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNGb2xkID8gJ2lubGluZScgOiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vcmVEZXNjXCJcclxuICAgICAgICAgICAgICAgIHJlZj17ZGV0YWlsVGV4dH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0ZXh0T2JqLmRldGFpbH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbiAke2lzRm9sZCA/ICdmbi1kb3RzMicgOiAnZm4tdXAyJ31gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93QW5kSGlkZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNJY29uU2hvd2luZyA/ICcjMDAwJyA6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cD57dGV4dE9iai5zaW1wbGV9PC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0Qm94LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0ZXh0TGltaXQ6IDEwMCxcclxufTtcclxuXHJcblByb2R1Y3RCb3gucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1JbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdEltYWdlVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIHRleHRMaW1pdDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RCb3g7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmljZVR5cGVNYXBwZXIsIHRyYW5zZm9ybU1vbmV5VW5pdCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgQWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL1Jlc2VydmF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFRpY2tldEluZm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIHJlc2VydmF0aW9uSW5mb0lkLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgICByZXNlcnZhdGlvbk5hbWUsXHJcbiAgICAgIHJlc2VydmF0aW9uVGVsLFxyXG4gICAgICBwcmljZUluZm8sXHJcbiAgICAgIHBsYWNlTmFtZSxcclxuICAgICAgdG90YWxQcmljZSxcclxuICAgICAgcHJvZHVjdElkLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnMsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIH0gPSB1c2VDb250ZXh0KEFjdGlvbkNvbnRleHQpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uU3VtbWFyeSA9IHByaWNlSW5mb1xyXG4gICAgLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+IHtcclxuICAgICAgYCR7YWNjdW19ICAgICR7cHJpY2VUeXBlTWFwcGVyW2N1cnJlbnQucHJpY2VUeXBlTmFtZV19ICR7XHJcbiAgICAgICAgY3VycmVudC5jb3VudFxyXG4gICAgICB9IOunpCxgO1xyXG4gICAgfSwgJycpXHJcbiAgICAuc2xpY2UoMCwgLTEpO1xyXG5cclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSAoYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc3Qgbm90ZXMgPSBhY3Rpb25zLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSAnY2FuY2VsJykge1xyXG4gICAgICAgIHJldHVybiB7IGNsaWNrOiBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24ocHJvZHVjdElkKSwgY2hpbGRyZW46ICfst6jshownIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlID09PSAncmV2aWV3V3JpdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNsaWNrOiBgL3Jldmlld3dyaXRlLyR7cHJvZHVjdElkfWAsXHJcbiAgICAgICAgICBjaGlsZHJlbjogJ+yYiOunpOyekCDrpqzrt7Ag64Ko6riw6riwJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8QnV0dG9uQnVuY2ggbm90ZXM9e25vdGVzfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIlRpY2tldEluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BTZWN0aW9uXCI+XHJcbiAgICAgICAgPGgyPntgTm8uJHtTdHJpbmcocmVzZXJ2YXRpb25JbmZvSWQpLnBhZFN0YXJ0KDgsICcwJyl9YH08L2gyPlxyXG4gICAgICAgIDxoMT57ZGVzY3JpcHRpb259PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlU2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwPuydvOyglTwvcD5cclxuICAgICAgICAgIDxwPntyZXNlcnZhdGlvbkRhdGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwPuuCtOyXrTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ek7J6QIOydtOumhDwvcD5cclxuICAgICAgICAgICAgPHA+e3Jlc2VydmF0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ek7J6QIOyghO2ZlOuyiO2YuDwvcD5cclxuICAgICAgICAgICAgPHA+e3Jlc2VydmF0aW9uVGVsfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICA8cD7smIjrp6Qg66ek7IiYPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aWNrZXRcIj57cmVzZXJ2YXRpb25TdW1tYXJ5fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwPuyepeyGjDwvcD5cclxuICAgICAgICAgIDxwPntwbGFjZU5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21TZWN0aW9uXCI+XHJcbiAgICAgICAgPHA+6rKw7KCcIOq4iOyVoTwvcD5cclxuICAgICAgICA8cD57YCR7dHJhbnNmb3JtTW9uZXlVbml0KHRvdGFsUHJpY2UpfSDsm5BgfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjcmVhdGVCdXR0b24oYWN0aW9ucyl9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbmZvLnByb3BUeXBlcyA9IHtcclxuICBpbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgcmVzZXJ2YXRpb25JbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25UZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdG90YWxQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBwcmljZUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IFJlc2VydmVGb3JtIGZyb20gJy4uL1Jlc2VydmVGb3JtJztcclxuaW1wb3J0IFJlc2VydmVEZXNjIGZyb20gJy4uL1Jlc2VydmVEZXNjJztcclxuaW1wb3J0IE1haW5JbWFnZSBmcm9tICcuLi9NYWluSW1hZ2UnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGxldCBwcm9kdWN0RGF0YTtcclxuICBsZXQgcmVzZXJ2YXRpb25EYXRlO1xyXG4gIGxldCBzdGFydERhdGU7XHJcbiAgbGV0IGVuZERhdGU7XHJcbiAgbGV0IGltYWdlU3JjO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcHJvZHVjdERhdGEgPSAoYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKSkuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRpZmZEYXlzID0geyByZXNlcnZlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1ICsgMSkgfTtcclxuICAgIGRpZmZEYXlzLnN0YXJ0ID0gZGlmZkRheXMucmVzZXJ2ZSAtIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUgKyAxKTtcclxuICAgIGRpZmZEYXlzLmVuZCA9IGRpZmZEYXlzLnJlc2VydmUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1ICsgMSk7XHJcbiAgICByZXNlcnZhdGlvbkRhdGUgPSBtb21lbnQoKVxyXG4gICAgICAudHooJ0FzaWEvU2VvdWwnKVxyXG4gICAgICAuYWRkKGRpZmZEYXlzLnJlc2VydmUsICdkYXlzJylcclxuICAgICAgLmZvcm1hdCgnWVlZWS5NTS5ERCBISDptbTpzcycpO1xyXG4gICAgc3RhcnREYXRlID0gbW9tZW50KClcclxuICAgICAgLnR6KCdBc2lhL1Nlb3VsJylcclxuICAgICAgLmFkZChkaWZmRGF5cy5zdGFydCwgJ2RheXMnKVxyXG4gICAgICAuZm9ybWF0KCdZWVlZLk1NLkRELihkZGQpJyk7XHJcbiAgICBlbmREYXRlID0gbW9tZW50KClcclxuICAgICAgLnR6KCdBc2lhL1Nlb3VsJylcclxuICAgICAgLmFkZChkaWZmRGF5cy5lbmQsICdkYXlzJylcclxuICAgICAgLmZvcm1hdCgnWVlZWS5NTS5ERC4oZGRkKScpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2R1Y3REYXRhLnByb2R1Y3RJbWFnZXMuc29tZSgodmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlLnR5cGUgPT09ICdtYScpIHtcclxuICAgICAgICBpbWFnZVNyYyA9IHZhbHVlLnNhdmVGaWxlTmFtZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc2VydmVDb250YWluZXJcIj5cclxuICAgICAgPE1haW5JbWFnZSBzcmM9e2ltYWdlU3JjfSBhbHQ9XCJtYWluIGltYWdlXCIgLz5cclxuICAgICAgPFJlc2VydmVEZXNjXHJcbiAgICAgICAgZGVzY3JpcHRpb249e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvbn1cclxuICAgICAgICBwbGFjZT17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucGxhY2VMb3R9XHJcbiAgICAgICAgc3RhcnREYXRlPXtzdGFydERhdGV9XHJcbiAgICAgICAgZW5kRGF0ZT17ZW5kRGF0ZX1cclxuICAgICAgICBwcm9kdWN0UHJpY2VzPXtwcm9kdWN0RGF0YS5wcm9kdWN0UHJpY2VzfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmVzZXJ2ZUZvcm1cclxuICAgICAgICBwcm9kdWN0UHJpY2VzPXtwcm9kdWN0RGF0YS5wcm9kdWN0UHJpY2VzfVxyXG4gICAgICAgIGRpc3BsYXlJbmZvSWQ9e2Rpc3BsYXlJbmZvSWR9XHJcbiAgICAgICAgcHJvZHVjdElkPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0SWR9XHJcbiAgICAgICAgcmVzZXJ2YXRpb25EYXRlPXtyZXNlcnZhdGlvbkRhdGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZUNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuaW1wb3J0IERldGFpbEltYWdlIGZyb20gJy4uL0RldGFpbEltYWdlJztcclxuaW1wb3J0IFByb2R1Y3REZXNjIGZyb20gJy4uL1Byb2R1Y3REZXNjJztcclxuaW1wb3J0IEV2ZW50SW5mbyBmcm9tICcuLi9FdmVudEluZm8nO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuLi9Qcm9kdWN0SW5mbyc7XHJcblxyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2Rpc2NvdW50SW5mbywgc2V0RGlzY291bnRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvKSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0RGF0YV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZEltYWdlcyA9IGRhdGEucHJvZHVjdEltYWdlcy5maWx0ZXIoXHJcbiAgICAgICAgICAodmFsdWUpID0+IHZhbHVlLnR5cGUgIT09ICd0aCcsXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRQcm9kdWN0RGF0YSh7IC4uLmRhdGEsIHByb2R1Y3RJbWFnZXM6IG1vZGlmaWVkSW1hZ2VzIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3REYXRhLnByb2R1Y3RQcmljZXMpIHtcclxuICAgICAgY29uc3QgaW5mbyA9IFtdO1xyXG4gICAgICBwcm9kdWN0RGF0YS5wcm9kdWN0UHJpY2VzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmRpc2NvdW50UmF0ZSAmJiBOdW1iZXIodmFsdWUuZGlzY291bnRSYXRlKSA+IE51bWJlci5FUFNJTE9OKSB7XHJcbiAgICAgICAgICBpbmZvLnB1c2goXHJcbiAgICAgICAgICAgIGAke3ByaWNlVHlwZU1hcHBlcih2YWx1ZS5wcmljZVR5cGVOYW1lKX0gJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgIHZhbHVlLmRpc2NvdW50UmF0ZSxcclxuICAgICAgICAgICAgKX0lYCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0RGlzY291bnRJbmZvKGluZm8pO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0RGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJEZXRhaWxDb250YWluZXJcIj5cclxuICAgICAgPERldGFpbEltYWdlXHJcbiAgICAgICAgaW1hZ2VzPXtwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzfVxyXG4gICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvICYmIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3REZXNjXHJcbiAgICAgICAgdGV4dD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8gJiYgcHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdENvbnRlbnR9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtkaXNjb3VudEluZm8ubGVuZ3RoID8gPEV2ZW50SW5mbyBkaXNjb3VudEluZm89e2Rpc2NvdW50SW5mb30gLz4gOiAnJ31cclxuICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZWM4MDAnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcDogJ25vbmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGljazogYC9yZXNlcnZlLyR7ZGlzcGxheUluZm9JZH1gLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogKFxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tbmJvb2tpbmctY2FsZW5kZXIyXCIgLz5cclxuICAgICAgICAgICAgICAgIHsnIOyYiOunpO2VmOq4sCd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgICBhdmVyYWdlU2NvcmU9e3Byb2R1Y3REYXRhLmF2ZXJhZ2VTY29yZX1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3RJbmZvXHJcbiAgICAgICAgZGlzcGxheUluZm89e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvfVxyXG4gICAgICAgIGxvY2F0aW9uSW1nU3JjPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvSW1hZ2UgJiZcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvSW1hZ2Uuc2F2ZUZpbGVOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZXJJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmFtZSxcclxuICAgIHRlbGVwaG9uZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgdG90YWxUaWNrZXQsXHJcbiAgICBkaXNwYXRjaCxcclxuICAgIGlzVmVyaWZpZWROYW1lLFxyXG4gICAgaXNWZXJpZmllZFRlbCxcclxuICAgIGlzVmVyaWZpZWRFbWFpbCxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IG1ha2VBbGVydCA9IChpZCwgdGV4dCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgIDxwIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxlcnRNZXNzYWdlXCI+e3RleHR9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUmVzZXJ2ZXJJbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXJ2ZXJIZWFkZXJcIj5cclxuICAgICAgICA8aDI+7JiI66ek7J6QIOygleuztDwvaDI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICDtlYTsiJjsnoXroKVcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwiaW5wdXRSZXNlcnZlclwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7JiI66ek7J6QXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXNlcnZhdGlvbk5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7ZmN6ri464+ZXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX05BTUUnLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ05hbWUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdOYW1lJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfTkFNRScgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ05hbWUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdOYW1lJykuc2xpZGVEb3duKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzVmVyaWZpZWROYW1lXHJcbiAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICA6IG1ha2VBbGVydCgnYWxlcnRXcm9uZ05hbWUnLCAn7J2066aE7JeQ64qUIOqzteuwseydtCDsnojslrTshJzripQg7JWI65Cp64uI64ukLicpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIiBpZD1cImlucHV0VGVsXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICDsl7Drnb3ssphcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25UZWxlcGhvbmVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDEwLTAwMDAtMDAwMFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9URUwnLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ1RlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ1RlbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1RFTCcgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ1RlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ1RlbCcpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkVGVsXHJcbiAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICA6IG1ha2VBbGVydCgnYWxlcnRXcm9uZ1RlbCcsICfsoITtmZTrsojtmLgg7ZiV7Iud7J20IOunnuyngCDslYrsirXri4jri6QnKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dEVtYWlsXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICDsnbTrqZTsnbxcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXNlcnZhdGlvbkVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInh4eHh4eEBuYXZlci5jb21cIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfRU1BSUwnLCB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgkKCdhbGVydFdyb25nRW1haWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdFbWFpbCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX0VNQUlMJyB9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNhbGVydFdyb25nRW1haWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdFbWFpbCcpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIiBpZD1cIm92ZXJhbGxSZXNlcnZhdGlvblwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgc3R5bGU9e3sgY29sb3I6ICd0cmFuc3BhcmVudCcgfX0gLz5cclxuICAgICAgICAgICAg7JiI66ek64K07JqpXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD57YCR7cmVzZXJ2YXRpb25EYXRlfSwg7LSdICR7dG90YWxUaWNrZXR966ekYH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzVmVyaWZpZWRFbWFpbFxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdFbWFpbCcsICfsnbTrqZTsnbwg7ZiV7Iud7J20IOunnuyngCDslYrsirXri4jri6QnKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmVySW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRlbGVwaG9uZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdG90YWxUaWNrZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkTmFtZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkVGVsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzVmVyaWZpZWRFbWFpbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVySW5mbztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgUHJvZHVjdENvbnRhaW5lciBmcm9tICcuLi9Qcm9kdWN0Q29udGFpbmVyJztcclxuXHJcbmNvbnN0IE1haW5WaWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgbGVmdFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKCh2LCBpbmRleCkgPT4gaW5kZXggJSAyID09PSAwKTtcclxuICBjb25zdCByaWdodFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKCh2LCBpbmRleCkgPT4gaW5kZXggJSAyID09PSAxKTtcclxuXHJcbiAgcmV0dXJuIHByb2R1Y3RzLmxlbmd0aCA/IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpblZpZXdcIj5cclxuICAgICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPVwibGVmdFwiPntsZWZ0UHJvZHVjdHN9PC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZHVjdENvbnRhaW5lciBjbGFzc05hbWU9XCJyaWdodFwiPntyaWdodFByb2R1Y3RzfTwvUHJvZHVjdENvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5WaWV3XCIgLz5cclxuICApO1xyXG59O1xyXG5cclxuTWFpblZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gIHByb2R1Y3RzOiBbXSxcclxufTtcclxuXHJcbk1haW5WaWV3LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblZpZXc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcic7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vTG9naW5Gb3JtJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL05hdkJhcic7XHJcbmltcG9ydCBEZXRhaWxDb250YWluZXIgZnJvbSAnLi4vRGV0YWlsQ29udGFpbmVyJztcclxuaW1wb3J0IFJlc2VydmVDb250YWluZXIgZnJvbSAnLi4vUmVzZXJ2ZUNvbnRhaW5lcic7XHJcbmltcG9ydCBSZXNlcnZhdGlvbkNvbnRhaW5lciBmcm9tICcuLi9SZXNlcnZhdGlvbkNvbnRhaW5lcic7XHJcbmltcG9ydCBQcm9tb3Rpb25JbWFnZSBmcm9tICcuLi9Qcm9tb3Rpb25JbWFnZSc7XHJcbmltcG9ydCBSZXZpZXdFZGl0IGZyb20gJy4uL1Jldmlld0VkaXQnO1xyXG5pbXBvcnQgUmV2aWV3UHJvdmlkZXIgZnJvbSAnLi4vUmV2aWV3UHJvdmlkZXInO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuLi9NYWluQ29udGFpbmVyJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QnJvd3NlclJvdXRlcj5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsLzpkaXNwbGF5SW5mb0lkXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIGlzVHJhbnNwYXJlbnQgLz5cclxuICAgICAgICAgIDxEZXRhaWxDb250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Jvb2tpbmdsb2dpblwiPlxyXG4gICAgICAgICAgey8qIOyZhOyEseuQqCAqL31cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL215cmVzZXJ2YXRpb25cIj5cclxuICAgICAgICAgIHsvKiDsmYTshLEg65CoICovfVxyXG4gICAgICAgICAgPE5hdkJhciBpc0xvZ291dGFibGUgLz5cclxuICAgICAgICAgIDxSZXNlcnZhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVzZXJ2ZS86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgey8qIOyZhOyEseuQqCAqL31cclxuICAgICAgICAgIDxOYXZCYXIgaXNNYWluPXtmYWxzZX0gLz5cclxuICAgICAgICAgIDxSZXNlcnZlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXZpZXcvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8UmV2aWV3UHJvdmlkZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jldmlld3dyaXRlLzpwcm9kdWN0SWRcIj5cclxuICAgICAgICAgIDxOYXZCYXIgaXNNYWluPXtmYWxzZX0gLz5cclxuICAgICAgICAgIHsvKiByZXZpZXdFZGl06rCAIOuvuOyZhCAqL31cclxuICAgICAgICAgIDxSZXZpZXdFZGl0IC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgIDxQcm9tb3Rpb25JbWFnZSAvPlxyXG4gICAgICAgICAgPE1haW5Db250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxyXG4gICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgey8qIDQwNCBub3QgZm91bmTsnbjqsbgg64KY7YOA64K06rKMICovfVxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgIDwvU3dpdGNoPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPC9Ccm93c2VyUm91dGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLFxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL05hdkJhcic7XHJcbmltcG9ydCBSZXZpZXdDb250YWluZXIgZnJvbSAnLi4vUmV2aWV3Q29udGFpbmVyJztcclxuXHJcbmNvbnN0IFJldmlld1Byb3ZpZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGlzcGxheUluZm9JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgW3Byb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHMvJHtkaXNwbGF5SW5mb0lkfWApO1xyXG4gICAgICAgIHNldFByb2R1Y3REYXRhKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvKSB7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gYOumrOu3sCA6ICR7cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9ufWA7XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3REYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlJldmlld1Byb3ZpZGVyXCI+XHJcbiAgICAgIDxOYXZCYXJcclxuICAgICAgICBuYW1lPXtcclxuICAgICAgICAgIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvICYmIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPFJldmlld0NvbnRhaW5lclxyXG4gICAgICAgIGRpc3BsYXlJbmZvSWQ9e2Rpc3BsYXlJbmZvSWR9XHJcbiAgICAgICAgYXZlcmFnZVNjb3JlPXtwcm9kdWN0RGF0YS5hdmVyYWdlU2NvcmV9XHJcbiAgICAgICAgcmV2aWV3cz17cHJvZHVjdERhdGEuY29tbWVudHN9XHJcbiAgICAgICAgaXNCcmllZj17ZmFsc2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEltYWdlVGl0bGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlZ3JlZSwgaW1hZ2VMZW4sIHRpdGxlLCBsZWZ0U2Nyb2xsLCByaWdodFNjcm9sbCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkltYWdlVGl0bGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGluZ1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJpZ2h0XCI+e2RlZ3JlZSArIDF9PC9zcGFuPlxyXG4gICAgICAgICAge2AgLyAke2ltYWdlTGVufWB9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIHtpbWFnZUxlbiA+IDEgPyAoXHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWJhY2t3YXJkMlwiIG9uQ2xpY2s9e2xlZnRTY3JvbGx9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIHtpbWFnZUxlbiA+IDEgPyAoXHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWZvcndhcmQyXCIgb25DbGljaz17cmlnaHRTY3JvbGx9IC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCIgLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2VUaXRsZS5wcm9wVHlwZXMgPSB7XHJcbiAgZGVncmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VMZW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGxlZnRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJpZ2h0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVGl0bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRpY2tldEhlYWQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBpc0dyZWVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BUaWNrZXRIZWFkICR7aXNHcmVlbiA/ICdncmVlbicgOiAnZ3JleSd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TGVmdFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TWlkZGxlXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2NoZWNrMlwiIC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRSaWdodFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SGVhZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgaXNHcmVlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEhlYWQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVE9TID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc0NoZWNrZWQsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNDb2xsZWN0aW9uRm9sZCwgc2V0SXNDb2xsZWN0aW9uRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPZmZlckZvbGQsIHNldElzT2ZmZXJGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBmb2xkVGV4dCA9ICfsoJHquLAgPGkgY2xhc3M9XCJmbiBmbi11cDJcIj48L2k+JztcclxuICBjb25zdCBzaG93VGV4dCA9ICfrs7TquLAgPGkgY2xhc3M9XCJmbiBmbi1kb3duMlwiPjwvaT4nO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xsZWN0aW9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDb2xsZWN0aW9uRm9sZCkge1xyXG4gICAgICAkKCcuY29sbGVjdGlvblVzZVRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNDb2xsZWN0aW9uRm9sZChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuY29sbGVjdGlvblVzZVRlcm0nKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzQ29sbGVjdGlvbkZvbGQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2ZmZXJDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChpc09mZmVyRm9sZCkge1xyXG4gICAgICAkKCcub2ZmZXJUZXJtJykuc2xpZGVEb3duKCk7XHJcbiAgICAgIHNldElzT2ZmZXJGb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5vZmZlclRlcm0nKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzT2ZmZXJGb2xkKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJpdGxjZSBjbGFzc05hbWU9XCJUT1NcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxBZ3JlZW1lbnRcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBuYW1lPVwiVE9TQ2hlY2tcIlxyXG4gICAgICAgICAgaWQ9XCJUT1NDaGVja1wiXHJcbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9UT1MnLCBjaGVja2VkIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiVE9TQ2hlY2tcIj7snbTsmqnsnpAg7JW96rSAIOyghOyytOuPmeydmDwvbGFiZWw+XHJcbiAgICAgICAgPHA+7ZWE7IiYIOuPmeydmDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fYXJyX2lwYzJcIiAvPlxyXG4gICAgICAgICAg6rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uVXNlQWdyZWVtZW50XCIgb25DbGljaz17aGFuZGxlQ29sbGVjdGlvbkNsaWNrfT5cclxuICAgICAgICAgIHtpc0NvbGxlY3Rpb25Gb2xkID8gc2hvd1RleHQgOiBmb2xkVGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbGxlY3Rpb25Vc2VUZXJtXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc0NvbGxlY3Rpb25Gb2xkID8gJ25vbmUnIDogJ2Jsb2NrJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgJmx0O+qwnOyduOygleuztCDsiJjsp5Eg67CPIOydtOyaqSDrj5nsnZgmZ3Q7XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMS4g7IiY7KeR7ZWt66qpIDogW+2VhOyImF0g7J2066aELCDsl7Drnb3sspgsIFvshKDtg51dIOydtOuplOydvOyjvOyGjFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDIuIOyImOynkSDrsI8g7J207Jqp66qp7KCBIDog7IKs7JeF7J6Q7ZqM7JuQ6rO8IOyYiOyVveydtOyaqeyekOydmCDsm5DtmZztlZwg6rGw656YIOynhO2WiSxcclxuICAgICAgICDqs6DqsJ3sg4Hri7QsIOu2iOunjOyymOumrCDrk7Eg66+87JuQIOyymOumrCwg67aE7J+B7KGw7KCVIO2VtOqysOydhCDsnITtlZwg6riw66Gd67O07KG0LCDrhKTsnbTrsoRcclxuICAgICAgICDsmIjslb0g7J207JqpIO2bhCDrpqzrt7DsnpHshLHsl5Ag65Sw66W4IOuEpOydtOuyhO2OmOydtCDtj6zsnbjtirgg7KeA6riJIOuwjyDqtIDroKgg7JWI64K0XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMy4g67O06rSA6riw6rCEXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgLSDtmozsm5Dtg4jth7Qg65OxIOqwnOyduOygleuztCDsnbTsmqnrqqnsoIEg64us7ISxIOyLnOq5jOyngCDrs7TqtIBcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAtIOuLqCwg7IOB67KVIOuwjyDigJjsoITsnpDsg4HqsbDrnpgg65Ox7JeQ7ISc7J2YIOyGjOu5hOyekCDrs7TtmLjsl5Ag6rSA7ZWcIOuyleuloOKAmSDrk7Eg6rSA66CoXHJcbiAgICAgICAg67KV66C57JeQIOydmO2VmOyXrCDsnbzsoJUg6riw6rCEIOuztOq0gOydtCDtlYTsmpTtlZwg6rK97Jqw7JeQ64qUIO2VtOuLuSDquLDqsIQg64+Z7JWIIOuztOq0gO2VqFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDQuIOuPmeydmCDqsbDrtoDqtowg65Ox7JeQIOuMgO2VnCDqs6Dsp4A6IOygleuztOyjvOyytOuKlCDqsJzsnbjsoJXrs7TsnZgg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2Y66W8XHJcbiAgICAgICAg6rGw67aA7ZWgIOq2jOumrOqwgCDsnojsnLzrgpgsIOydtCDqsr3smrAg7IOB7ZKIIOuwjyDshJzruYTsiqQg7JiI7JW97J20IOygnO2VnOuQoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fYXJyX2lwYzJcIiAvPlxyXG4gICAgICAgICAg6rCc7J247KCV67O0IOygnDPsnpAg7KCc6rO1IOuPmeydmFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJvZmZlckFncmVlbWVudFwiIG9uQ2xpY2s9e2hhbmRsZU9mZmVyQ2xpY2t9PlxyXG4gICAgICAgICAge2lzT2ZmZXJGb2xkID8gc2hvd1RleHQgOiBmb2xkVGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cFxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm9mZmVyVGVybVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNPZmZlckZvbGQgPyAnbm9uZScgOiAnYmxvY2snIH19XHJcbiAgICAgID5cclxuICAgICAgICAmbHQ76rCc7J247KCV67O0IOygnDPsnpAg7KCc6rO1IOuPmeydmCZndDtcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAxLiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekCA6IOuvuOuUlOyWtOyVpOyVhO2KuFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDIuIOygnOqzte2VmOuKlCDqsJzsnbjsoJXrs7Qg7ZWt66qpIDogW+2VhOyImF0g64Sk7J2067KEIOyVhOydtOuUlCwg7J2066aELCDsl7Drnb3sspggW+yEoO2DnV1cclxuICAgICAgICDsnbTrqZTsnbwg7KO87IaMXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMy4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpDsnZgg7J207Jqp66qp7KCBIDog7IKs7JeF7J6Q7ZqM7JuQ6rO8IOyYiOyVveydtOyaqeyekOydmCDsm5DtmZztlZxcclxuICAgICAgICDqsbDrnpgg7KeE7ZaJLCDqs6DqsJ3sg4Hri7QsIOu2iOunjOyymOumrCDrk7Eg66+87JuQIOyymOumrCwg7ISc67mE7IqkIOydtOyaqeyXkCDrlLDrpbgg7ISk66y47KGw7IKsXHJcbiAgICAgICAg67CPIO2YnO2DnSDsoJzqs7UsIOu2hOyfgeyhsOyglSDtlbTqsrDsnYQg7JyE7ZWcIOq4sOuhneuztOyhtFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDQuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6Q7J2YIOqwnOyduOygleuztCDrs7TsnKAg67CPIOydtOyaqeq4sOqwhCA6IOqwnOyduOygleuztFxyXG4gICAgICAgIOydtOyaqeuqqeyggSDri6zshLEg7IucIOq5jOyngCDrs7TqtIDtlanri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNS4g64+Z7J2YIOqxsOu2gOq2jCDrk7Hsl5Ag64yA7ZWcIOqzoOyngCA6IOygleuztOyjvOyytOuKlCDqsJzsnbjsoJXrs7Qg7KCc6rO1IOuPmeydmOulvCDqsbDrtoDtlaBcclxuICAgICAgICDqtozrpqzqsIAg7J6I7Jy864KYLCDsnbQg6rK97JqwIOyDge2SiCDrsI8g7ISc67mE7IqkIOyYiOyVveydtCDsoJztlZzrkKAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9wPlxyXG4gICAgPC9hcml0bGNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5UT1MucHJvcFR5cGVzID0ge1xyXG4gIGlzQ2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRPUztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUaWNrZXRJbmZvIGZyb20gJy4uL1RpY2tldEluZm8nO1xyXG5cclxuY29uc3QgVGlja2V0SW5mb0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGluZm9zLCBhY3Rpb25zIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPG9sIGNsYXNzTmFtZT1cIlRpY2tldEluZm9MaXN0XCI+XHJcbiAgICAgIHtpbmZvcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8VGlja2V0SW5mbyBrZXk9e2luZGV4fSBpbmZvPXt2YWx1ZX0gYWN0aW9ucz17YWN0aW9uc30gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9vbD5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5mb0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIGluZm9zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEluZm9MaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmljZVR5cGVNYXBwZXIsIHRyYW5zZm9ybU1vbmV5VW5pdCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc2VydmVEZXNjID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgcGxhY2UsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcHJvZHVjdFByaWNlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHByaWNlVGV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByaWNlTGlzdCA9IHByb2R1Y3RQcmljZXMubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfSAke3RyYW5zZm9ybU1vbmV5VW5pdChcclxuICAgICAgICB2YWx1ZS5wcmljZSxcclxuICAgICAgKX3sm5BgO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJpY2VMaXN0LmpvaW4oJyAvICcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZlRGVzY1wiPlxyXG4gICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIHtwbGFjZX1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7YCR7c3RhcnREYXRlfSB+ICR7ZW5kRGF0ZX1gfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxoMj7smpTquIg8L2gyPlxyXG4gICAgICA8cD57cHJpY2VUZXh0KCl9PC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlRGVzYy5wcm9wVHlwZXMgPSB7XHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBwbGFjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0YXJ0RGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVuZERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBwcm9kdWN0UHJpY2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVEZXNjO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInNwcl9iaSB0eHRfbG9nb1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgdHJhbnNmb3JtTW9uZXlVbml0ID0gKG51bSkgPT4ge1xyXG4gIGxldCB0cmFuc2Zvcm1lZCA9ICcnO1xyXG4gIG51bSA9IG51bS50b1N0cmluZygpO1xyXG4gIGNvbnN0IG51bUxlbiA9IG51bS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtTGVuOyBpKyspIHtcclxuICAgIGlmIChpID4gMyAmJiBpICUgMyA9PT0gMSkge1xyXG4gICAgICB0cmFuc2Zvcm1lZCA9IGAsJHt0cmFuc2Zvcm1lZH1gO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtZWQgPSBudW0uY2hhckF0KG51bUxlbiAtIGkpICsgdHJhbnNmb3JtZWQ7XHJcbiAgfVxyXG4gIHJldHVybiB0cmFuc2Zvcm1lZDtcclxufTtcclxuXHJcbmNvbnN0IHByaWNlVHlwZU1hcHBlciA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHByaWNlVHlwZSA9IHtcclxuICAgIEE6ICfshLHsnbgnLFxyXG4gICAgWTogJ+yyreyGjOuFhCcsXHJcbiAgICBCOiAn7Jyg7JWEJyxcclxuICAgIFM6ICfshYvtirgnLFxyXG4gICAgRDogJ+yepeyVoOyduCcsXHJcbiAgICBDOiAn7KeA7Jet7KO866+8JyxcclxuICAgIEU6ICfslrTslrzrpqzrsoTrk5wnLFxyXG4gICAgVjogJ1ZJUCcsXHJcbiAgICBSOiAnUuyEnScsXHJcbiAgfTtcclxuICByZXR1cm4gcHJpY2VUeXBlW3ZhbHVlXTtcclxufTtcclxuXHJcbmNvbnN0IHZhbGlkSW1hZ2VUeXBlID0gKGltYWdlKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9qcGcnXS5pbmRleE9mKGltYWdlKSA+IC0xO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5jb25zdCByZXNpemVFbmQgPSAoZnVuYykgPT4ge1xyXG4gIGxldCB0aW1lcjtcclxuICByZXR1cm4gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgMTAwLCBldmVudCk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRyYW5zZm9ybU1vbmV5VW5pdCwgcHJpY2VUeXBlTWFwcGVyLCB2YWxpZEltYWdlVHlwZSwgcmVzaXplRW5kIH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIksvdGNcIixcblx0XCIuL2FmLmpzXCI6IFwiSy90Y1wiLFxuXHRcIi4vYXJcIjogXCJqbk80XCIsXG5cdFwiLi9hci1kelwiOiBcIm8xYkVcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwibzFiRVwiLFxuXHRcIi4vYXIta3dcIjogXCJRajRKXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIlFqNEpcIixcblx0XCIuL2FyLWx5XCI6IFwiSFAzaFwiLFxuXHRcIi4vYXItbHkuanNcIjogXCJIUDNoXCIsXG5cdFwiLi9hci1tYVwiOiBcIkNvUkpcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiQ29SSlwiLFxuXHRcIi4vYXItc2FcIjogXCJnakNUXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcImdqQ1RcIixcblx0XCIuL2FyLXRuXCI6IFwiYllNNlwiLFxuXHRcIi4vYXItdG4uanNcIjogXCJiWU02XCIsXG5cdFwiLi9hci5qc1wiOiBcImpuTzRcIixcblx0XCIuL2F6XCI6IFwiU0Z4V1wiLFxuXHRcIi4vYXouanNcIjogXCJTRnhXXCIsXG5cdFwiLi9iZVwiOiBcIkg4RURcIixcblx0XCIuL2JlLmpzXCI6IFwiSDhFRFwiLFxuXHRcIi4vYmdcIjogXCJoS3JzXCIsXG5cdFwiLi9iZy5qc1wiOiBcImhLcnNcIixcblx0XCIuL2JtXCI6IFwicC9yTFwiLFxuXHRcIi4vYm0uanNcIjogXCJwL3JMXCIsXG5cdFwiLi9iblwiOiBcImtFT2FcIixcblx0XCIuL2JuLmpzXCI6IFwia0VPYVwiLFxuXHRcIi4vYm9cIjogXCIwbW8rXCIsXG5cdFwiLi9iby5qc1wiOiBcIjBtbytcIixcblx0XCIuL2JyXCI6IFwiYUlkZlwiLFxuXHRcIi4vYnIuanNcIjogXCJhSWRmXCIsXG5cdFwiLi9ic1wiOiBcIkpWU0pcIixcblx0XCIuL2JzLmpzXCI6IFwiSlZTSlwiLFxuXHRcIi4vY2FcIjogXCIxeFo0XCIsXG5cdFwiLi9jYS5qc1wiOiBcIjF4WjRcIixcblx0XCIuL2NzXCI6IFwiUEEyclwiLFxuXHRcIi4vY3MuanNcIjogXCJQQTJyXCIsXG5cdFwiLi9jdlwiOiBcIkEreGFcIixcblx0XCIuL2N2LmpzXCI6IFwiQSt4YVwiLFxuXHRcIi4vY3lcIjogXCJsNWVwXCIsXG5cdFwiLi9jeS5qc1wiOiBcImw1ZXBcIixcblx0XCIuL2RhXCI6IFwiRHhRdlwiLFxuXHRcIi4vZGEuanNcIjogXCJEeFF2XCIsXG5cdFwiLi9kZVwiOiBcInRHbFhcIixcblx0XCIuL2RlLWF0XCI6IFwicyt1a1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCJzK3VrXCIsXG5cdFwiLi9kZS1jaFwiOiBcInUzR0lcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwidTNHSVwiLFxuXHRcIi4vZGUuanNcIjogXCJ0R2xYXCIsXG5cdFwiLi9kdlwiOiBcIldZcmpcIixcblx0XCIuL2R2LmpzXCI6IFwiV1lyalwiLFxuXHRcIi4vZWxcIjogXCJqVWVZXCIsXG5cdFwiLi9lbC5qc1wiOiBcImpVZVlcIixcblx0XCIuL2VuLVNHXCI6IFwiemF2RVwiLFxuXHRcIi4vZW4tU0cuanNcIjogXCJ6YXZFXCIsXG5cdFwiLi9lbi1hdVwiOiBcIkRtdmlcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiRG12aVwiLFxuXHRcIi4vZW4tY2FcIjogXCJPSVlpXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIk9JWWlcIixcblx0XCIuL2VuLWdiXCI6IFwiT2FhN1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCJPYWE3XCIsXG5cdFwiLi9lbi1pZVwiOiBcIjRkT3dcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiNGRPd1wiLFxuXHRcIi4vZW4taWxcIjogXCJjek1vXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcImN6TW9cIixcblx0XCIuL2VuLW56XCI6IFwiYjFEeVwiLFxuXHRcIi4vZW4tbnouanNcIjogXCJiMUR5XCIsXG5cdFwiLi9lb1wiOiBcIlpkdW9cIixcblx0XCIuL2VvLmpzXCI6IFwiWmR1b1wiLFxuXHRcIi4vZXNcIjogXCJpWXVMXCIsXG5cdFwiLi9lcy1kb1wiOiBcIkNqelRcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiQ2p6VFwiLFxuXHRcIi4vZXMtdXNcIjogXCJWY2xxXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIlZjbHFcIixcblx0XCIuL2VzLmpzXCI6IFwiaVl1TFwiLFxuXHRcIi4vZXRcIjogXCI3QmpDXCIsXG5cdFwiLi9ldC5qc1wiOiBcIjdCakNcIixcblx0XCIuL2V1XCI6IFwiRC9KTVwiLFxuXHRcIi4vZXUuanNcIjogXCJEL0pNXCIsXG5cdFwiLi9mYVwiOiBcImpmU0NcIixcblx0XCIuL2ZhLmpzXCI6IFwiamZTQ1wiLFxuXHRcIi4vZmlcIjogXCJnZWtCXCIsXG5cdFwiLi9maS5qc1wiOiBcImdla0JcIixcblx0XCIuL2ZvXCI6IFwiQnlGNFwiLFxuXHRcIi4vZm8uanNcIjogXCJCeUY0XCIsXG5cdFwiLi9mclwiOiBcIm55WWNcIixcblx0XCIuL2ZyLWNhXCI6IFwiMmZqblwiLFxuXHRcIi4vZnItY2EuanNcIjogXCIyZmpuXCIsXG5cdFwiLi9mci1jaFwiOiBcIkRra3lcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiRGtreVwiLFxuXHRcIi4vZnIuanNcIjogXCJueVljXCIsXG5cdFwiLi9meVwiOiBcImNSaXhcIixcblx0XCIuL2Z5LmpzXCI6IFwiY1JpeFwiLFxuXHRcIi4vZ2FcIjogXCJVU0N4XCIsXG5cdFwiLi9nYS5qc1wiOiBcIlVTQ3hcIixcblx0XCIuL2dkXCI6IFwiOXJSaVwiLFxuXHRcIi4vZ2QuanNcIjogXCI5clJpXCIsXG5cdFwiLi9nbFwiOiBcImlFRGRcIixcblx0XCIuL2dsLmpzXCI6IFwiaUVEZFwiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCJES3IrXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIkRLcitcIixcblx0XCIuL2d1XCI6IFwiNE1WM1wiLFxuXHRcIi4vZ3UuanNcIjogXCI0TVYzXCIsXG5cdFwiLi9oZVwiOiBcIng2cEhcIixcblx0XCIuL2hlLmpzXCI6IFwieDZwSFwiLFxuXHRcIi4vaGlcIjogXCIzRTFyXCIsXG5cdFwiLi9oaS5qc1wiOiBcIjNFMXJcIixcblx0XCIuL2hyXCI6IFwiUzZsblwiLFxuXHRcIi4vaHIuanNcIjogXCJTNmxuXCIsXG5cdFwiLi9odVwiOiBcIld4UmxcIixcblx0XCIuL2h1LmpzXCI6IFwiV3hSbFwiLFxuXHRcIi4vaHktYW1cIjogXCIxcll5XCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIjFyWXlcIixcblx0XCIuL2lkXCI6IFwiVURoUlwiLFxuXHRcIi4vaWQuanNcIjogXCJVRGhSXCIsXG5cdFwiLi9pc1wiOiBcIkJWZzNcIixcblx0XCIuL2lzLmpzXCI6IFwiQlZnM1wiLFxuXHRcIi4vaXRcIjogXCJicGloXCIsXG5cdFwiLi9pdC1jaFwiOiBcImJ4S1hcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiYnhLWFwiLFxuXHRcIi4vaXQuanNcIjogXCJicGloXCIsXG5cdFwiLi9qYVwiOiBcIkI1NU5cIixcblx0XCIuL2phLmpzXCI6IFwiQjU1TlwiLFxuXHRcIi4vanZcIjogXCJ0VUN2XCIsXG5cdFwiLi9qdi5qc1wiOiBcInRVQ3ZcIixcblx0XCIuL2thXCI6IFwiSUJ0WlwiLFxuXHRcIi4va2EuanNcIjogXCJJQnRaXCIsXG5cdFwiLi9ra1wiOiBcImJYbTdcIixcblx0XCIuL2trLmpzXCI6IFwiYlhtN1wiLFxuXHRcIi4va21cIjogXCI2QjBZXCIsXG5cdFwiLi9rbS5qc1wiOiBcIjZCMFlcIixcblx0XCIuL2tuXCI6IFwiUHBJd1wiLFxuXHRcIi4va24uanNcIjogXCJQcEl3XCIsXG5cdFwiLi9rb1wiOiBcIkl2aStcIixcblx0XCIuL2tvLmpzXCI6IFwiSXZpK1wiLFxuXHRcIi4va3VcIjogXCJKQ0YvXCIsXG5cdFwiLi9rdS5qc1wiOiBcIkpDRi9cIixcblx0XCIuL2t5XCI6IFwibGdudFwiLFxuXHRcIi4va3kuanNcIjogXCJsZ250XCIsXG5cdFwiLi9sYlwiOiBcIlJBd1FcIixcblx0XCIuL2xiLmpzXCI6IFwiUkF3UVwiLFxuXHRcIi4vbG9cIjogXCJzcDN6XCIsXG5cdFwiLi9sby5qc1wiOiBcInNwM3pcIixcblx0XCIuL2x0XCI6IFwiSnZsV1wiLFxuXHRcIi4vbHQuanNcIjogXCJKdmxXXCIsXG5cdFwiLi9sdlwiOiBcInVYd0lcIixcblx0XCIuL2x2LmpzXCI6IFwidVh3SVwiLFxuXHRcIi4vbWVcIjogXCJLVHowXCIsXG5cdFwiLi9tZS5qc1wiOiBcIktUejBcIixcblx0XCIuL21pXCI6IFwiYUlzblwiLFxuXHRcIi4vbWkuanNcIjogXCJhSXNuXCIsXG5cdFwiLi9ta1wiOiBcImFRa1VcIixcblx0XCIuL21rLmpzXCI6IFwiYVFrVVwiLFxuXHRcIi4vbWxcIjogXCJBdnZZXCIsXG5cdFwiLi9tbC5qc1wiOiBcIkF2dllcIixcblx0XCIuL21uXCI6IFwibFl0UVwiLFxuXHRcIi4vbW4uanNcIjogXCJsWXRRXCIsXG5cdFwiLi9tclwiOiBcIk9iMFpcIixcblx0XCIuL21yLmpzXCI6IFwiT2IwWlwiLFxuXHRcIi4vbXNcIjogXCI2K1FCXCIsXG5cdFwiLi9tcy1teVwiOiBcIlpBTVBcIixcblx0XCIuL21zLW15LmpzXCI6IFwiWkFNUFwiLFxuXHRcIi4vbXMuanNcIjogXCI2K1FCXCIsXG5cdFwiLi9tdFwiOiBcIkcwVXlcIixcblx0XCIuL210LmpzXCI6IFwiRzBVeVwiLFxuXHRcIi4vbXlcIjogXCJob25GXCIsXG5cdFwiLi9teS5qc1wiOiBcImhvbkZcIixcblx0XCIuL25iXCI6IFwiYk9NdFwiLFxuXHRcIi4vbmIuanNcIjogXCJiT010XCIsXG5cdFwiLi9uZVwiOiBcIk9qa1RcIixcblx0XCIuL25lLmpzXCI6IFwiT2prVFwiLFxuXHRcIi4vbmxcIjogXCIrczBnXCIsXG5cdFwiLi9ubC1iZVwiOiBcIjJ5a3ZcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiMnlrdlwiLFxuXHRcIi4vbmwuanNcIjogXCIrczBnXCIsXG5cdFwiLi9ublwiOiBcInVFeWVcIixcblx0XCIuL25uLmpzXCI6IFwidUV5ZVwiLFxuXHRcIi4vcGEtaW5cIjogXCI4LytSXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIjgvK1JcIixcblx0XCIuL3BsXCI6IFwialZkQ1wiLFxuXHRcIi4vcGwuanNcIjogXCJqVmRDXCIsXG5cdFwiLi9wdFwiOiBcIjhtQkRcIixcblx0XCIuL3B0LWJyXCI6IFwiMHRSa1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIwdFJrXCIsXG5cdFwiLi9wdC5qc1wiOiBcIjhtQkRcIixcblx0XCIuL3JvXCI6IFwibHl4b1wiLFxuXHRcIi4vcm8uanNcIjogXCJseXhvXCIsXG5cdFwiLi9ydVwiOiBcImxYem9cIixcblx0XCIuL3J1LmpzXCI6IFwibFh6b1wiLFxuXHRcIi4vc2RcIjogXCJaNFFNXCIsXG5cdFwiLi9zZC5qc1wiOiBcIlo0UU1cIixcblx0XCIuL3NlXCI6IFwiLy85d1wiLFxuXHRcIi4vc2UuanNcIjogXCIvLzl3XCIsXG5cdFwiLi9zaVwiOiBcIjdhVjlcIixcblx0XCIuL3NpLmpzXCI6IFwiN2FWOVwiLFxuXHRcIi4vc2tcIjogXCJlK2FlXCIsXG5cdFwiLi9zay5qc1wiOiBcImUrYWVcIixcblx0XCIuL3NsXCI6IFwiZ1ZWS1wiLFxuXHRcIi4vc2wuanNcIjogXCJnVlZLXCIsXG5cdFwiLi9zcVwiOiBcInlQTXNcIixcblx0XCIuL3NxLmpzXCI6IFwieVBNc1wiLFxuXHRcIi4vc3JcIjogXCJ6eDZTXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiRStsVlwiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIkUrbFZcIixcblx0XCIuL3NyLmpzXCI6IFwieng2U1wiLFxuXHRcIi4vc3NcIjogXCJVcjFEXCIsXG5cdFwiLi9zcy5qc1wiOiBcIlVyMURcIixcblx0XCIuL3N2XCI6IFwiWDcwOVwiLFxuXHRcIi4vc3YuanNcIjogXCJYNzA5XCIsXG5cdFwiLi9zd1wiOiBcImROd0FcIixcblx0XCIuL3N3LmpzXCI6IFwiZE53QVwiLFxuXHRcIi4vdGFcIjogXCJQZVVXXCIsXG5cdFwiLi90YS5qc1wiOiBcIlBlVVdcIixcblx0XCIuL3RlXCI6IFwiWEx2TlwiLFxuXHRcIi4vdGUuanNcIjogXCJYTHZOXCIsXG5cdFwiLi90ZXRcIjogXCJWMng5XCIsXG5cdFwiLi90ZXQuanNcIjogXCJWMng5XCIsXG5cdFwiLi90Z1wiOiBcIk94djZcIixcblx0XCIuL3RnLmpzXCI6IFwiT3h2NlwiLFxuXHRcIi4vdGhcIjogXCJFT2dXXCIsXG5cdFwiLi90aC5qc1wiOiBcIkVPZ1dcIixcblx0XCIuL3RsLXBoXCI6IFwiRHppMFwiLFxuXHRcIi4vdGwtcGguanNcIjogXCJEemkwXCIsXG5cdFwiLi90bGhcIjogXCJ6M1ZkXCIsXG5cdFwiLi90bGguanNcIjogXCJ6M1ZkXCIsXG5cdFwiLi90clwiOiBcIkRvSHJcIixcblx0XCIuL3RyLmpzXCI6IFwiRG9IclwiLFxuXHRcIi4vdHpsXCI6IFwiejFGQ1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiejFGQ1wiLFxuXHRcIi4vdHptXCI6IFwid1FrOVwiLFxuXHRcIi4vdHptLWxhdG5cIjogXCJ0VDNKXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcInRUM0pcIixcblx0XCIuL3R6bS5qc1wiOiBcIndRazlcIixcblx0XCIuL3VnLWNuXCI6IFwiWVJleFwiLFxuXHRcIi4vdWctY24uanNcIjogXCJZUmV4XCIsXG5cdFwiLi91a1wiOiBcInJhTHJcIixcblx0XCIuL3VrLmpzXCI6IFwicmFMclwiLFxuXHRcIi4vdXJcIjogXCJVcFFXXCIsXG5cdFwiLi91ci5qc1wiOiBcIlVwUVdcIixcblx0XCIuL3V6XCI6IFwiTG94b1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIkFRNjhcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCJBUTY4XCIsXG5cdFwiLi91ei5qc1wiOiBcIkxveG9cIixcblx0XCIuL3ZpXCI6IFwiS1NGOFwiLFxuXHRcIi4vdmkuanNcIjogXCJLU0Y4XCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi9YNXZcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiL1g1dlwiLFxuXHRcIi4veW9cIjogXCJmelBnXCIsXG5cdFwiLi95by5qc1wiOiBcImZ6UGdcIixcblx0XCIuL3poLWNuXCI6IFwiWERwZ1wiLFxuXHRcIi4vemgtY24uanNcIjogXCJYRHBnXCIsXG5cdFwiLi96aC1oa1wiOiBcIlNhdE9cIixcblx0XCIuL3poLWhrLmpzXCI6IFwiU2F0T1wiLFxuXHRcIi4vemgtdHdcIjogXCJrT3BOXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcImtPcE5cIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiUm5oWlwiOyIsIi8vIGJ1dHRvbiDrtoDrtoQgYnV0dG9uYnVuY2jroZxcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgSW5wdXRUaWNrZXQgZnJvbSAnLi4vSW5wdXRUaWNrZXQnO1xyXG5pbXBvcnQgUmVzZXJ2ZXJJbmZvIGZyb20gJy4uL1Jlc2VydmVySW5mbyc7XHJcbmltcG9ydCBUT1MgZnJvbSAnLi4vVE9TJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IChsZW5ndGgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGlja2V0czogQXJyYXkobGVuZ3RoKS5maWxsKDApLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICB0ZWxlcGhvbmU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgaXNWZXJpZmllZE5hbWU6IGZhbHNlLFxyXG4gICAgaXNWZXJpZmllZFRlbDogZmFsc2UsXHJcbiAgICBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlLFxyXG4gICAgaXNUT1NDaGVja2VkOiBmYWxzZSxcclxuICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkRGVjID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICBtb2RpZmllZERlYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gPSBtb2RpZmllZERlYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gLSAxO1xyXG4gICAgICByZXR1cm4gbW9kaWZpZWREZWM7XHJcbiAgICBjYXNlICdJTkNSRU1FTlQnOlxyXG4gICAgICBjb25zdCBtb2RpZmllZEluYyA9IHsgLi4uc3RhdGUgfTtcclxuICAgICAgbW9kaWZpZWRJbmMudGlja2V0c1thY3Rpb24ud2hlcmVdID0gbW9kaWZpZWRJbmMudGlja2V0c1thY3Rpb24ud2hlcmVdICsgMTtcclxuICAgICAgcmV0dXJuIG1vZGlmaWVkSW5jO1xyXG4gICAgY2FzZSAnQ0hBTkdFX05BTUUnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbmFtZTogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlICdDSEFOR0VfVEVMJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRlbGVwaG9uZTogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlICdDSEFOR0VfRU1BSUwnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZW1haWw6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX1RPUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1RPU0NoZWNrZWQ6IGFjdGlvbi5jaGVja2VkIH07XHJcbiAgICBjYXNlICdWRVJJRllfTkFNRSc6XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoL1xccy8udGVzdChuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IHRydWUgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9URUwnOlxyXG4gICAgICBjb25zdCB7IHRlbGVwaG9uZSB9ID0gc3RhdGU7XHJcbiAgICAgIGlmICh0ZWxlcGhvbmUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGVsUmUgPSAvMFxcZHsyfS1bMS05XVxcZHsyLDN9LVxcZHs0fS87XHJcbiAgICAgIGlmICh0ZWxSZS50ZXN0KHRlbGVwaG9uZSkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiBmYWxzZSB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX0VNQUlMJzpcclxuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChlbWFpbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVtYWlsUmUgPSAvW2EtekEtWl1cXHd7Mix9QFthLXpBLVpdezMsfVxcLlthLXpBLVpdezIsfS87XHJcbiAgICAgIGlmIChlbWFpbFJlLnRlc3QoZW1haWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlIH07XHJcbiAgICBjYXNlICdWRVJJRllfU1VCTUlUJzpcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRpY2tldHMsXHJcbiAgICAgICAgaXNWZXJpZmllZE5hbWUsXHJcbiAgICAgICAgaXNWZXJpZmllZFRlbCxcclxuICAgICAgICBpc1ZlcmlmaWVkRW1haWwsXHJcbiAgICAgICAgaXNUT1NDaGVja2VkLFxyXG4gICAgICB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aWNrZXRzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB2YWx1ZSA+IDA7XHJcbiAgICAgICAgfSkgJiZcclxuICAgICAgICBpc1ZlcmlmaWVkTmFtZSAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWRUZWwgJiZcclxuICAgICAgICBpc1ZlcmlmaWVkRW1haWwgJiZcclxuICAgICAgICBpc1RPU0NoZWNrZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Ym1pdDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWJtaXQ6IGZhbHNlIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBSZXNlcnZlRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdFByaWNlcywgZGlzcGxheUluZm9JZCwgcHJvZHVjdElkLCByZXNlcnZhdGlvbkRhdGUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgIHJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGUocHJvZHVjdFByaWNlcy5sZW5ndGgpLFxyXG4gICk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNlcnZhdGlvbkluZm8gPSB7XHJcbiAgICAgICAgZGlzcGxheUluZm9JZCxcclxuICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgcHJpY2VzOiBbXSxcclxuICAgICAgICByZXNlcnZhdGlvbkVtYWlsOiBzdGF0ZS5lbWFpbCxcclxuICAgICAgICByZXNlcnZhdGlvbk5hbWU6IHN0YXRlLm5hbWUsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25UZWxlcGhvbmU6IHN0YXRlLnRlbGVwaG9uZSxcclxuICAgICAgICByZXNlcnZhdGlvblllYXJNb250aERheTogcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbiA9IHByb2R1Y3RQcmljZXMubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xyXG4gICAgICAgIHJlc2VydmF0aW9uSW5mby5wcmljZXMucHVzaCh7XHJcbiAgICAgICAgICBjb3VudDogTnVtYmVyKHN0YXRlLnRpY2tldHNbaW5kZXhdKSxcclxuICAgICAgICAgIHByb2R1Y3RQcmljZUlkOiBwcm9kdWN0UHJpY2VzW2luZGV4XS5wcm9kdWN0UHJpY2VJRCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IHN0YXR1cywgc3RhdHVzVGV4dCB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAnL2FwaS9yZXNlcnZhdGlvbnMnLFxyXG4gICAgICAgIHJlc2VydmF0aW9uSW5mbyxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChzdGF0dXNUZXh0KTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+yYiOunpOqwgCDshLHqs7XsoIHsnLzroZwg7Iq57J2465CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvZGV0YWlsLyR7ZGlzcGxheUluZm9JZH1gKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgY29uZmlybU1vZGFsKCfsmIjslb3tlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yYiOyVvSDslpHsi53snbQg7Lap7KGx65CY7KeAIOyViuyVmOyKteuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZlRm9ybVwiPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIvYXBpL3Jlc2VydmF0aW9uc1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8SW5wdXRUaWNrZXRcclxuICAgICAgICAgIHByb2R1Y3RQcmljZXM9e3Byb2R1Y3RQcmljZXN9XHJcbiAgICAgICAgICB0aWNrZXRzPXtzdGF0ZS50aWNrZXRzfVxyXG4gICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc2VydmVySW5mb1xyXG4gICAgICAgICAgbmFtZT17c3RhdGUubmFtZX1cclxuICAgICAgICAgIHRlbGVwaG9uZT17c3RhdGUudGVsZXBob25lfVxyXG4gICAgICAgICAgZW1haWw9e3N0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgcmVzZXJ2YXRpb25EYXRlPXtyZXNlcnZhdGlvbkRhdGUuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgIHRvdGFsVGlja2V0PXtzdGF0ZS50aWNrZXRzLnJlZHVjZShcclxuICAgICAgICAgICAgKGFjY3VtLCBjdXJyZW50KSA9PiBhY2N1bSArIGN1cnJlbnQsXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgICAgaXNWZXJpZmllZE5hbWU9e3N0YXRlLmlzVmVyaWZpZWROYW1lfVxyXG4gICAgICAgICAgaXNWZXJpZmllZFRlbD17c3RhdGUuaXNWZXJpZmllZFRlbH1cclxuICAgICAgICAgIGlzVmVyaWZpZWRFbWFpbD17c3RhdGUuaXNWZXJpZmllZEVtYWlsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRPUyBpc0NoZWNrZWQ9e3N0YXRlLlRPU30gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5zdWJtaXQgPyAnIzFFQzkwMCcgOiAnI0QxRDFEMScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17Y29uZmlybVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fbmF2ZXJfc1wiIC8+XHJcbiAgICAgICAgICDsmIjslb3tlZjquLBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVyZWQsXHJcbiAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlRm9ybTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFN1Yk5hdkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBwYXRocyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgY29uc3QgaXRlbUlkID0gcGF0aHNbcGF0aHMubGVuZ3RoIC0gMV07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiU3ViTmF2QmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja3dhcmRcIj5cclxuICAgICAgICA8TGluayB0bz17YC9kZXRhaWwvJHtpdGVtSWR9YH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1iYWNrd2FyZDFcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVOYW1lXCI+XHJcbiAgICAgICAgPGgxPntuYW1lIHx8ICftlonsgqwg7J2066aEJ308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3ViTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJOYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRhYlZpZXcgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3QgeyB2aWV3cywgc3R5bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiVGFiVmlld1wiPlxyXG4gICAgICA8dWwgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICB7dmlld3MubWFwKCh2aWV3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57dmlld308L2xpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcblRhYlZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdHJhbnNmb3JtOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJWaWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBSZXZpZXcgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZXZpZXcsXHJcbiAgICBpbWFnZSxcclxuICAgIHNjb3JlLFxyXG4gICAgZW1haWwsXHJcbiAgICBkYXRlLFxyXG4gICAgZWRpdENvbW1lbnQsXHJcbiAgICBjb25maXJtRGVsZXRlLFxyXG4gIH0gPSBwcm9wcztcclxuICAvLyDsnbTrr7jsp4Ag67O07KCVXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJSZXZpZXdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIDxwPntyZXZpZXd9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICB7aW1hZ2UgPyA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cInJldmlld0ltYWdlXCIgLz4gOiAnJ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjb3JlXCI+e3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVtYWlsXCI+e2Ake2VtYWlsLnNsaWNlKDAsIDQpfSoqKipgfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc2l0RGF0ZVwiPntgJHtkYXRlLnNsaWNlKDAsIDEwKX0g67Cp66y4YH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdFwiIG9uQ2xpY2s9e2VkaXRDb21tZW50fT5cclxuICAgICAgICAgICAg7IiY7KCVXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXtjb25maXJtRGVsZXRlfT5cclxuICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHJldmlldzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlZGl0Q29tbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUYWJVSSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgc2VsZWN0ZWQsIGhhbmRsZUNsaWNrLCBpbmRpY2F0b3JTdHlsZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIlRhYlVJXCI+XHJcbiAgICAgIDx1bCByZWY9e3JlZn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIiBzdHlsZT17aW5kaWNhdG9yU3R5bGV9IC8+XHJcbiAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBzZWxlY3RlZCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuVGFiVUkucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGluZGljYXRvclN0eWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVUk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGFiVUkgZnJvbSAnLi4vVGFiVUknO1xyXG5pbXBvcnQgVGFiVmlldyBmcm9tICcuLi9UYWJWaWV3JztcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgdmlld3MsIGFsYXJtLCBjb3JyZWN0aW9uTmVlZGVkLCB0b3AsIGJvdHRvbSB9ID0gcHJvcHM7XHJcbiAgLy8gdG9wLGJvdHRvbeydgCDsoJXsoIHsnLzroZwg67O07Jes7KSEIOu3sFxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2luZGljYXRvclN0eWxlLCBzZXRJbmRpY2F0b3JTdHlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3ZpZXdTdHlsZSwgc2V0Vmlld1N0eWxlXSA9IHVzZVN0YXRlKHtcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzAuNXMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFt2aWV3SGVpZ2h0LCBzZXRWaWV3SGVpZ2h0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHVpUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHZpZXdSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSZWYgPSB1c2VSZWYoc2VsZWN0ZWQpO1xyXG4gIHNlbGVjdGVkUmVmLmN1cnJlbnQgPSBzZWxlY3RlZDtcclxuICBjb25zdCB2aWV3SGVpZ2h0UmVmID0gdXNlUmVmKHZpZXdIZWlnaHQpO1xyXG4gIHZpZXdIZWlnaHRSZWYuY3VycmVudCA9IHZpZXdIZWlnaHQ7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBpZiAoYWxhcm0pIHtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBhbGFybShpbmRleCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoaW5kZXgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2V0U2VsZWN0ZWQoaW5kZXgpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXZpc2VJbmRpY2F0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZExpID0gdWlSZWYuY3VycmVudC5jaGlsZHJlbltzZWxlY3RlZFJlZi5jdXJyZW50ICsgMV07XHJcbiAgICBzZXRJbmRpY2F0b3JTdHlsZSh7XHJcbiAgICAgIGxlZnQ6IHNlbGVjdGVkTGkub2Zmc2V0TGVmdCxcclxuICAgICAgd2lkdGg6IHNlbGVjdGVkTGkub2Zmc2V0V2lkdGgsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXZpc2VWaWV3V2lkdGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHZpZXdSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMHMnLFxyXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoLSR7d2lkdGggKiBzZWxlY3RlZFJlZi5jdXJyZW50fXB4KWAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJldmlzZUluZGljYXRvcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmV2aXNlVmlld1dpZHRoKTtcclxuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCB2aWV3Qm9keSA9XHJcbiAgICAgICAgdmlld1JlZi5jdXJyZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuW3NlbGVjdGVkUmVmLmN1cnJlbnRdLmNoaWxkcmVuWzBdOyAvLyBzZWN0aW9uIC0+IHVsIC0+IGxpIC0+IGRpdlxyXG4gICAgICBjb25zdCBoZWlnaHQgPSB2aWV3Qm9keSAmJiB2aWV3Qm9keS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIGlmICh2aWV3SGVpZ2h0LmN1cnJlbnQgIT09IGhlaWdodCkge1xyXG4gICAgICAgIHNldFZpZXdIZWlnaHQoaGVpZ2h0KTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXZpc2VJbmRpY2F0b3IpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmV2aXNlVmlld1dpZHRoKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgaGVpZ2h0OiB2aWV3SGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfSwgW3ZpZXdIZWlnaHRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KHJldmlzZUluZGljYXRvciwgW3NlbGVjdGVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHZpZXdSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC41cycsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHt3aWR0aCAqIHNlbGVjdGVkfXB4KWAsXHJcbiAgICB9KTtcclxuICB9LCBbc2VsZWN0ZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiQ29udHJvbGxlclwiPlxyXG4gICAgICA8VGFiVUlcclxuICAgICAgICByZWY9e3VpUmVmfVxyXG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgaW5kaWNhdG9yU3R5bGU9e2luZGljYXRvclN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICB7dG9wfVxyXG4gICAgICA8VGFiVmlldyByZWY9e3ZpZXdSZWZ9IHZpZXdzPXt2aWV3c30gc3R5bGU9e3ZpZXdTdHlsZX0gLz5cclxuICAgICAge2JvdHRvbX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGFybTogZmFsc2UsXHJcbiAgdG9wOiAnJyxcclxuICBib3R0b206ICcnLFxyXG59O1xyXG5cclxuVGFiQ29udHJvbGxlci5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcclxuICBhbGFybTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXHJcbiAgdG9wOiBQcm9wVHlwZXMubm9kZSxcclxuICBib3R0b206IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuLy8g7JWM656M7J20IOyeiOuLpOuptCDsg4HsnIQg7Lu07Y+s64SM7Yq47JeQIOyWtOuUlOyXkCDriIzroIDripTsp4Ag67OA7ZmU66W8IOyVjOugpOykmCDrj5nsoIEg67ew67OA7ZmU66W8IOqwgOuKpey8gO2VqFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5jb25zdCBhcHBseVN0eWxlID0gKHN0eWxlKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBgJHtzdHlsZX1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnN0IFthbGxdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7YWxsfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgY29uc3QgW3ZlcnRpY2FsLCBob3Jpem9udGFsXSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3ZlcnRpY2FsfXB4ICR7aG9yaXpvbnRhbH1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDQpIHtcclxuICAgIGNvbnN0IFt0b3AsIHJpZ2h0LCBkb3duLCBsZWZ0XSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3RvcH1weCAke3JpZ2h0fXB4ICR7ZG93bn1weCAke2xlZnR9cHhgO1xyXG4gIH1cclxuICByZXR1cm4gJzAnO1xyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uQnVuY2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vdGVzLCBtYXJnaW4sIHBhZGRpbmcgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvbkJ1bmNoXCJcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luOiBhcHBseVN0eWxlKG1hcmdpbiksIHBhZGRpbmc6IGFwcGx5U3R5bGUocGFkZGluZykgfX1cclxuICAgID5cclxuICAgICAge25vdGVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCdXR0b24ga2V5PXtpbmRleH0gc3R5bGU9e3ZhbHVlLnN0eWxlfSBjbGljaz17dmFsdWUuY2xpY2t9PlxyXG4gICAgICAgICAgICB7dmFsdWUuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b25CdW5jaC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbWFyZ2luOiAwLFxyXG4gIHBhZGRpbmc6IDAsXHJcbn07XHJcblxyXG5CdXR0b25CdW5jaC5wcm9wVHlwZXMgPSB7XHJcbiAgbm90ZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNsaWNrOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5hcnJheV0pLFxyXG4gIHBhZGRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQnVuY2g7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdmFsaWRJbWFnZVR5cGUgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFJldmlld0VkaXQgPSAocHJvcHMpID0+IHtcclxuICAvLyByZXZpZXcg66eM65Ok6rOgIOyZhOyEse2VtOyVvOuQqCDrr7jsmYRcclxuICBjb25zdCB7XHJcbiAgICBjb21tZW50SWQsXHJcbiAgICB0aHVtYm5haWxXaWR0aCxcclxuICAgIGV4U2NvcmUsXHJcbiAgICBleENvbW1lbnQsXHJcbiAgICBleEltYWdlU3JjLFxyXG4gICAgaXNQb3N0LFxyXG4gICAgY29uZmlybUVkaXQsXHJcbiAgICBjb25maXJtQ2FuY2VsLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKGV4U2NvcmUpO1xyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKGV4Q29tbWVudCk7XHJcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZShleEltYWdlU3JjKTtcclxuICBjb25zdCBbdGh1bWJuYWlsU3R5bGUsIHNldFRodW1ibmFpbFN0eWxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IGZvcm0gPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbWFnZVNyYykge1xyXG4gICAgICBjb25zdCBpbWFnZU1lYXN1cmVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltYWdlTWVhc3VyZW1lbnQuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICAgIGltYWdlTWVhc3VyZW1lbnQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5oZWlnaHQgLyB0aGlzLndpZHRoO1xyXG4gICAgICAgIHNldFRodW1ibmFpbFN0eWxlKHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIHdpZHRoOiBgJHt0aHVtYm5haWxXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke3RodW1ibmFpbFdpZHRoICogcmF0aW99cHhgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dGhpcy5zcmN9KWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaHVtYm5haWxTdHlsZSh7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZVNyY10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIC8vIHJldHVybuydhCDsooAg7KCV7J2Y7ZW07IScIHN1Ym1pdOydtCDrkJDripTqsIDrpbwg7JWM7JWE7JW87ZWoXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoc2NvcmUgPD0gMCB8fCBzY29yZSA+IDUpIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfrs4TsoJAg6rCc7IiY6rCAIOyYrOuwlOultOyngCDslYrsirXri4jri6QnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbW1lbnQubGVuZ3RoIDwgNSB8fCBjb21tZW50Lmxlbmd0aCA+IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+umrOu3sCDquIDsnpDsiJjqsIAg66ee7KeAIOyViuyKteuLiOuLpC4nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGltYWdlUmVmLmN1cnJlbnQuZmlsZXMubGVuZ3RoICYmXHJcbiAgICAgICAgIXZhbGlkSW1hZ2VUeXBlKGltYWdlUmVmLmN1cnJlbnQuZmlsZXNbMF0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+ydtOuvuOyngOuKlCBqcGcsanBlZyxwbmcg7YyM7J2866eMIOqwgOuKpe2VqeuLiOuLpC4nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm9ybU9iaiA9IG5ldyBGb3JtRGF0YShmb3JtLmN1cnJlbnQpO1xyXG4gICAgICAvKlxyXG4gICAgICBmb3JtT2JqLmFwcGVuZCgncmVzZXJ2YXRpb25JbmZvSWQsYmxhaCk7XHJcbiAgICAgIGZvcm1PYmouYXBwZW5kKCdleEltYWdlJywgISFleERhdGEuaW1hZ2VTcmMpO1xyXG4gICAgICAgICAgICBmb3JtT2JqLmFwcGVuZCgnbmV3SW1hZ2UnLCBuZXdJbWFnZSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChmb3JtLmN1cnJlbnQuYWN0aW9uLCBmb3JtT2JqKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChpc1Bvc3QgPyAn66as67ew6rCAIOuTseuhneuQmOyXiOyKteuLiOuLpCcgOiAn66as67ew6rCAIOyImOygleuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGlmIChpc1Bvc3QpIGhpc3RvcnkucHVzaCgnL215cmVzZXJ2YXRpb24nKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5UmF0aW5nID0gKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRTY29yZSh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gKHsgdGFyZ2V0OiB7IGZpbGVzIH0gfSkgPT4ge1xyXG4gICAgY29uc3QgdGVtcEltYWdlID0gZmlsZXNbMF07XHJcbiAgICBpZiAoIXZhbGlkSW1hZ2VUeXBlKHRlbXBJbWFnZSkpIHtcclxuICAgICAgYWxlcnRNb2RhbCgn7J2066+47KeA64qUIGpwZyxqcGVnLHBuZyDtjIzsnbzrp4wg6rCA64ql7ZWp64uI64ukJyk7XHJcbiAgICAgIGltYWdlUmVmLmN1cnJlbnQudmFsdWUgPSAnJzsgLy8g7JWE66eIIOqzoOyzkOyVvOuQoOq6vOyehFxyXG4gICAgICBzZXRJbWFnZVNyYygnJyk7IC8vIO2VhOyalO2VnOyngCDrqqjrpbTqsqDsnYxcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0SW1hZ2VTcmMod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGVtcEltYWdlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FuY2VsSW1hZ2VVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBpbWFnZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICBzZXRJbWFnZVNyYygnJyk7XHJcbiAgICAvLyBuZXdJbWFnZT0gLTE7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJldmlld0VkaXRcIj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBtZXRob2Q9e2lzUG9zdCA/ICdQT1NUJyA6ICdQVVQnfVxyXG4gICAgICAgIGFjdGlvbj17YC9hcGkvcmVzZXJ2YXRpb25zL2NvbW1lbnRzLyR7Y29tbWVudElkfWB9XHJcbiAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICAgIG5hbWU9XCJyZXZpZXdGb3JtXCJcclxuICAgICAgICByZWY9e2Zvcm19XHJcbiAgICAgID5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyYXRpbmdTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8cD7rs4TsoJDqs7wg7J207JqpIOqyve2XmOydhCDrgqjqsqjso7zshLjsmpQuPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdTdGFyXCI+XHJcbiAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbiBmbi1zdGFyMiAke1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID49IHZhbHVlID8gJ2dldFN0YXInIDogJ25vdEdldFN0YXInXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2RpZnlSYXRpbmcodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNjb3JlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NvcmV9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHNjb3JlID4gMCA/ICcjMDAwJyA6ICcjZGRkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndyaXRlQ29tbWVudFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgcm93cz1cIjE1XCJcclxuICAgICAgICAgICAgbWluTGVuZ3RoPVwiNVwiXHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjQwMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvbW1lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdEltYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlTGV0dGVyQ291bnRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VVcGxvYWRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1pbWFnZTFcIiAvPlxyXG4gICAgICAgICAgICAgIOyCrOynhCDstpTqsIBcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tbWVudENvdW50XCI+XHJcbiAgICAgICAgICAgICAge2Ake2NvbW1lbnQubGVuZ3RofS80MDAgKOy1nOyGjCA17J6QIOydtOyDgSlgfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsSW1hZ2VcIiBzdHlsZT17dGh1bWJuYWlsU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNyb3NzMVwiIG9uQ2xpY2s9e2NhbmNlbEltYWdlVXBsb2FkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICB7aXNQb3N0ID8gKFxyXG4gICAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnIzFFQzgwMCcgfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1Nb2RhbCgn66as67ew66W8IOuTseuhnSDtlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+umrOu3sCDrk7HroZ0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyB9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUVkaXQoaGFuZGxlU3VibWl0LCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAn7IiY7KCVJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEOERCREUnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAn7Leo7IaMJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0VkaXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRodW1ibmFpbFdpZHRoOiAyMDAsXHJcbiAgZXhTY29yZTogMCxcclxuICBleENvbW1lbnQ6ICcnLFxyXG4gIGV4SW1hZ2VTcmM6ICcnLFxyXG4gIGlzUG9zdDogdHJ1ZSxcclxufTtcclxuXHJcblJldmlld0VkaXQucHJvcFR5cGVzID0ge1xyXG4gIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICB0aHVtYm5haWxXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICBleFNjb3JlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGV4Q29tbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBleEltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzUG9zdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29uZmlybUVkaXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNvbmZpcm1DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3RWRpdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUaWNrZXRIZWFkIGZyb20gJy4uL1RpY2tldEhlYWQnO1xyXG5pbXBvcnQgVGlja2V0SW5mb0xpc3QgZnJvbSAnLi4vVGlja2V0SW5mb0xpc3QnO1xyXG5cclxuY29uc3QgVGlja2V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbmZvcywgY2hpbGRyZW4sIGFjdGlvbnMsIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJUaWNrZXRcIj5cclxuICAgICAgPFRpY2tldEhlYWQgaXNHcmVlbj17aXNHcmVlbn0+e2NoaWxkcmVufTwvVGlja2V0SGVhZD5cclxuICAgICAgPFRpY2tldEluZm9MaXN0IGluZm9zPXtpbmZvc30gYWN0aW9ucz17YWN0aW9uc30gLz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0dyZWVuOiBmYWxzZSxcclxufTtcclxuXHJcblRpY2tldC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG4gIGlzR3JlZW46IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUHJvZHVjdERlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRleHQsIGxpbWl0IH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNGb2xkLCBzZXRJc0ZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RleHRPYmosIHNldFRleHRPYmpdID0gdXNlU3RhdGUoeyBzaW1wbGU6ICcnLCBkZXRhaWw6ICcnIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICAgIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgbGltaXQpO1xyXG4gICAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UobGltaXQpO1xyXG4gICAgICBzZXRUZXh0T2JqKHsgc2ltcGxlOiB0ZXh0U2ltcGxlLCBkZXRhaWw6IHRleHREZXRhaWwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUZXh0T2JqKHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9KTtcclxuICAgIH1cclxuICB9LCBbdGV4dF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZURlc2MgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGb2xkKSB7XHJcbiAgICAgICQoJy5Qcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNGb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5Qcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7J+2OvOyzkOuztOq4sCAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1kb3duMlwiIC8+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBmb2xkVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7J+ygkeq4sCAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi11cDJcIiAvPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0RGVzY1wiPlxyXG4gICAgICB7dGV4dE9iai5kZXRhaWwgPyAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7dGV4dE9iai5zaW1wbGV9XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNGb2xkID8gJ2lubGluZScgOiAnbm9uZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlRGVzY1wiPnt0ZXh0T2JqLmRldGFpbH08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPnt0ZXh0T2JqLnNpbXBsZX08L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YzZjVmNicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2xpY2s6IHNob3dNb3JlRGVzYyxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogaXNGb2xkID8gb3BlblRleHQgOiBmb2xkVGV4dCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0RGVzYy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGV4dDogJycsXHJcbiAgbGltaXQ6IDEwMCxcclxufTtcclxuXHJcblByb2R1Y3REZXNjLnByb3BUeXBlcyA9IHtcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERlc2M7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgSW1hZ2VTbGlkZXIgZnJvbSAnLi4vSW1hZ2VTbGlkZXInO1xyXG5pbXBvcnQgeyByZXNpemVFbmQgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuLy8g7Iqk7YGs66GkIOyLnOqwhCh0cmFuc2l0aW9uVGltZSkgZGVmYXVsdCAx7LSIICDsnITsl5DshJwg66y866Ck67Cb64qU6rKDXHJcbi8vIOyDge2DnOuhnCDsgqzsmqntlZjripQg7Iqk7YGs66GkIOyLnOqwhCAodHJhbnNpdGlvbkR1cmF0aW9uKVxyXG4vLyDtmZTrqbQg7KCE7ZmYIOqwhOqyqSAodGltZUludGVydmFsKSAy7LSIXHJcblxyXG5jb25zdCBQcm9tb3Rpb25JbWFnZSA9IChwcm9wcykgPT4ge1xyXG4gIC8vIOqwkeyekOq4sCBkZWdyZWXqsIAg6rOE7IaNIOymneqwgO2VmOuKlCDrsoTqt7jqsIAg7J6I7J2MXHJcbiAgY29uc3QgeyB0aW1lSW50ZXJ2YWwsIHRyYW5zaXRpb25UaW1lIH0gPSBwcm9wcztcclxuICBjb25zdCBbZGVncmVlLCBzZXREZWdyZWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Njcm9sbGFibGUsIHNldFNjcm9sbGFibGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RyYW5zaXRpb25EdXJhdGlvbiwgc2V0VHJhbnNpdGlvbkR1cmF0aW9uXSA9IHVzZVN0YXRlKHRyYW5zaXRpb25UaW1lKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbWFnZVdpZHRoLCBzZXRJbWFnZVdpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGRlZ3JlZVJlZiA9IHVzZVJlZihkZWdyZWUpO1xyXG4gIGNvbnN0IHNjcm9sbGFibGVSZWYgPSB1c2VSZWYoc2Nyb2xsYWJsZSk7XHJcbiAgY29uc3QgaW1hZ2VMaXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGRlZ3JlZVJlZi5jdXJyZW50ID0gZGVncmVlO1xyXG4gIHNjcm9sbGFibGVSZWYuY3VycmVudCA9IHNjcm9sbGFibGU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICBkYXRhOiB7IGl0ZW1zIH0sXHJcbiAgICAgICAgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb25zJyk7XHJcbiAgICAgICAgaXRlbXMucHVzaChpdGVtc1swXSk7IC8vIOyymOydjOqzvCDrp4jsp4Drp4nsnYQg64+Z7J287ZWcIOydtOuvuOyngOulvCDrkZDslrTshJwg7Iqk7YGs66Gk7J2EIOunpOuBhOufveqyjCDtlahcclxuICAgICAgICBzZXRJbWFnZXMoaXRlbXMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hJbWFnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRvU2Nyb2xsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoc2Nyb2xsYWJsZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaWYgKGRlZ3JlZVJlZi5jdXJyZW50ID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24odHJhbnNpdGlvblRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREZWdyZWUoKHByZXZEZWdyZWUpID0+IHByZXZEZWdyZWUgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGltZUludGVydmFsICogMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsKTtcclxuICB9LCBbaW1hZ2VzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25FbmQgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVncmVlID49IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHNldERlZ3JlZSgwKTtcclxuICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbGFibGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlT3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsYWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkb2luZ1Jlc2l6ZSA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbGFibGUoZmFsc2UpO1xyXG4gICAgc2V0SW1hZ2VXaWR0aChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCk7XHJcbiAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oMCk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGRvbmVSZXNpemU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZG9pbmdSZXNpemUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdyZXNpemUnLFxyXG4gICAgICAoKCkgPT4ge1xyXG4gICAgICAgIGRvbmVSZXNpemUgPSByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2Nyb2xsYWJsZSh0cnVlKTtcclxuICAgICAgICAgIHNldEltYWdlV2lkdGgoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpO1xyXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZG9uZVJlc2l6ZTtcclxuICAgICAgfSkoKSxcclxuICAgICk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZG9pbmdSZXNpemUpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZG9uZVJlc2l6ZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEltYWdlV2lkdGgoXHJcbiAgICAgIChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZCAmJlxyXG4gICAgICAgIGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKSB8fFxyXG4gICAgICAgIDAsXHJcbiAgICApO1xyXG4gIH0sIFtpbWFnZXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZVNsaWRlclxyXG4gICAgICByZWY9e2ltYWdlTGlzdH1cclxuICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgIHRyYW5zaXRpb25UaW1lPXt0cmFuc2l0aW9uRHVyYXRpb259XHJcbiAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICBpbWFnZVdpZHRoPXtpbWFnZVdpZHRofVxyXG4gICAgICBpc1Byb21vdGlvblxyXG4gICAgICBoYW5kbGVUcmFuc2l0aW9uRW5kPXtoYW5kbGVUcmFuc2l0aW9uRW5kfVxyXG4gICAgICBoYW5kbGVNb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn1cclxuICAgICAgaGFuZGxlTW91c2VPdXQ9e2hhbmRsZU1vdXNlT3V0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuUHJvbW90aW9uSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiAxLFxyXG4gIHRpbWVJbnRlcnZhbDogMixcclxufTtcclxuXHJcblByb21vdGlvbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcclxuICB0aW1lSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9tb3Rpb25JbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBNYWluTmF2QmFyIGZyb20gJy4uL01haW5OYXZCYXInO1xyXG5pbXBvcnQgU3ViTmF2QmFyIGZyb20gJy4uL1N1Yk5hdkJhcic7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGlzVHJhbnNwYXJlbnQsIGlzTG9nb3V0YWJsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIG5hbWUgPyAoXHJcbiAgICA8U3ViTmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgKSA6IChcclxuICAgIDxNYWluTmF2QmFyIGlzVHJhbnNwYXJlbnQ9e2lzVHJhbnNwYXJlbnR9IGlzTG9nb3V0YWJsZT17aXNMb2dvdXRhYmxlfSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG5hbWU6ICcnLFxyXG4gIGlzVHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gIGlzTG9nb3V0YWJsZTogZmFsc2UsXHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNMb2dvdXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgUHJvZHVjdENvbnRhaW5lciAke2NsYXNzTmFtZX1gfT57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuUHJvZHVjdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIk1vZGFsXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufTtcclxuXHJcbk1vZGFsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBNYWluSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHNyYywgYWx0IH0gPSBwcm9wcztcclxuICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJNYWluSW1hZ2VcIiBzcmM9e3NyY30gYWx0PXthbHR9IC8+O1xyXG59O1xyXG5cclxuTWFpbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5JbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmV2aWV3U3VtbWFyeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYXZlcmFnZVNjb3JlLCByZXZpZXdDb3VudCwgZGlzcGxheVN0YXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZVxyXG4gICAgICBjbGFzc05hbWU9XCJSZXZpZXdTdW1tYXJ5XCJcclxuICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiByZXZpZXdDb3VudCA/ICcnIDogJ25vbmUnIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMj7smIjrp6TsnpAg7ZWc7KSE7Y+JPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7ZGlzcGxheVN0YXIoYXZlcmFnZVNjb3JlKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2ZXJhZ2VTY29yZVwiPnthdmVyYWdlU2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF4U2NvcmVcIj4vIDUuMDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50Q291bnRcIj57YCR7cmV2aWV3Q291bnR9IOqxtGB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW5yb2xsVGV4dFwiPuuTseuhnTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld1N1bW1hcnkucHJvcFR5cGVzID0ge1xyXG4gIGF2ZXJhZ2VTY29yZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHJldmlld0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheVN0YXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdTdW1tYXJ5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vUmV2aWV3JztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcblxyXG5jb25zdCBSZXZpZXdMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3cyxcclxuICAgIGlzQnJpZWYsXHJcbiAgICBpc01vZGlmaWFibGUsXHJcbiAgICBlZGl0Q29tbWVudCxcclxuICAgIGNvbmZpcm1EZWxldGUsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgICBleERhdGE6IHsgaWQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYyB9LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgc2hvd1Jldmlld3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXZpZXdzQ29tcCA9IFtdO1xyXG4gICAgWy4uLnJldmlld3NdLnJldmVyc2UoKS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlzQnJpZWYgJiYgaW5kZXggPj0gNSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldmlld3NDb21wLnB1c2goXHJcbiAgICAgICAgPFJldmlld1xyXG4gICAgICAgICAga2V5PXt2YWx1ZS5jb21tZW50SWR9XHJcbiAgICAgICAgICByZXZpZXc9e3ZhbHVlLmNvbW1lbnR9XHJcbiAgICAgICAgICBpbWFnZT17XHJcbiAgICAgICAgICAgIHZhbHVlLmNvbW1lbnRJbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyB2YWx1ZS5jb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZVxyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNjb3JlPXt2YWx1ZS5zY29yZX1cclxuICAgICAgICAgIGVtYWlsPXt2YWx1ZS5yZXNlcnZhdGlvbkVtYWlsfVxyXG4gICAgICAgICAgZGF0ZT17dmFsdWUucmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAgICAgZWRpdENvbW1lbnQ9e2VkaXRDb21tZW50KHZhbHVlLmNvbW1lbnRJZCl9XHJcbiAgICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlKHZhbHVlLmNvbW1lbnRJZCl9XHJcbiAgICAgICAgLz4sXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXZpZXdzQ29tcDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXZpZXdMaXN0XCI+XHJcbiAgICAgIHtpc01vZGlmaWFibGUgPyAoXHJcbiAgICAgICAgPFJldmlld0VkaXRcclxuICAgICAgICAgIGNvbW1lbnRJZD17aWR9XHJcbiAgICAgICAgICBleFNjb3JlPXtzY29yZX1cclxuICAgICAgICAgIGV4Q29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgIGV4SW1hZ2VTcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgaXNQb3N0PXtmYWxzZX1cclxuICAgICAgICAgIGNvbmZpcm1FZGl0PXtjb25maXJtRWRpdChpZCl9XHJcbiAgICAgICAgICBjb25maXJtQ2FuY2VsPXtjb25maXJtQ2FuY2VsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgc2hvd1Jldmlld3MoKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIHJldmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNvbW1lbnRJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICBzYXZlRmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgaXNCcmllZjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc01vZGlmaWFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgZWRpdENvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybURlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRWRpdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGV4RGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==