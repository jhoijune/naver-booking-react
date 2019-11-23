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

  var imageList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var getImageWidth = function getImageWidth() {
    return Object(_js_common__WEBPACK_IMPORTED_MODULE_3__["resizeEnd"])(function () {
      setImageWidth(imageList.current.firstElementChild.clientWidth);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setImageWidth(imageList.current.firstElementChild && imageList.current.firstElementChild.clientWidth || 0);
    window.addEventListener('resize', getImageWidth());
    return function () {
      return window.removeEventListener('resize', getImageWidth());
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
    transitionTime: transitionTime,
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

__signature__(DetailImage, "useState{[degree, setDegree](0)}\nuseState{[imageWidth, setImageWidth](0)}\nuseRef{imageList}\nuseEffect{}");

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
    to: "/"
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
      }, telephone)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "buttonContainer"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "findRoad"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fn fn-path-find2"
      }), "\uAE38\uCC3E\uAE30"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fn fn-car-find2"
      }), "\uB0B4\uBE44\uAC8C\uC774\uC158"))))]);
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
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! timers */ "URgk");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_3__);


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
    var changeRiseable = setInterval(function () {
      if (document.body.scrollHeight > window.innerHeight) {
        setIsRiseable(true);
      } else {
        setIsRiseable(false);
      }
    }, 1000);
    return function () {
      return Object(timers__WEBPACK_IMPORTED_MODULE_3__["clearInterval"])(changeRiseable);
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "b/iz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ReviewSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ReviewSummary */ "ybHy");
/* harmony import */ var _ReviewList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ReviewList */ "ykme");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");





(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// props 수정











var ReviewContainer = function ReviewContainer(props) {
  // 전체적으로 만들고 다시 검토
  var isBrief = props.isBrief,
      displayInfoId = props.displayInfoId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.reviews),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      reviews = _useState2[0],
      setReviews = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(props.averageScore),
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_12__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // reviews가 달라졌을 때 averageScore바꾸는 effect
    if (reviews.length !== 0) {
      var modifiedAverageScore = reviews.reduce(function (accum, current) {
        accum + Number(current.score);
      }) / reviews.length;
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

    lodash__WEBPACK_IMPORTED_MODULE_7___default.a.times(fillCount, function () {
      stars.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-star2 getStar"
      }));
    });

    if (ratioCount > Number.EPSILON) {
      var style = {
        ':before': {
          background: "linear-gradient(to Right,#f00 ".concat(Math.round(ratioCount * 100), "%,#E6E6E6 ").concat(Math.round((1 - ratioCount) * 100), "%)"),
          content: 'EAA3',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'initial'
        }
      };
      stars.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-star2 ratioStar",
        style: style
      }));
    }

    lodash__WEBPACK_IMPORTED_MODULE_7___default.a.times(notFillCount, function () {
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
                _axios$get = axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/auth/edit/comments/".concat(commentId)), _axios$get$response = _axios$get.response, status = _axios$get$response.status, statusText = _axios$get$response.statusText;

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
                  _axios$delete = axios__WEBPACK_IMPORTED_MODULE_8___default.a["delete"]("/api/reservations/comments/".concat(commentId)), _axios$delete$respons = _axios$delete.response, status = _axios$delete$respons.status, statusText = _axios$delete$respons.statusText;

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
    confirmModal('리뷰를 삭제하시겠습니까?', deleteComment(commentId));
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
    className: "CommentContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReviewSummary__WEBPACK_IMPORTED_MODULE_10__["default"], {
    averageScore: averageScore,
    reviewCount: reviews.length,
    displayStar: displayStar
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ReviewList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    reviews: reviews,
    isBrief: isBrief,
    isModifiable: isModifiable,
    exData: exData,
    confirmDelete: confirmDelete,
    confirmCancel: confirmCancel,
    confirmEdit: confirmEdit,
    editComment: editComment
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("aside", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
    className: "fn fn-alarm1"
  }), "\uB124\uC774\uBC84 \uC608\uC57D\uC744 \uD1B5\uD574 \uC2E4\uC81C \uBC29\uBB38\uD55C \uC774\uC6A9\uC790\uAC00 \uB0A8\uAE34 \uD3C9\uAC00\uC785\uB2C8\uB2E4.")), isBrief ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_13__["default"], {
    notes: [{
      style: {
        backgroundColor: '#E9ECEF'
      },
      click: "/review/".concat(displayInfoId),
      children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "\uC608\uB9E4\uC790 \uB9AC\uBDF0 \uB354\uBCF4\uAE30", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-forward1"
      }))
    }]
  }) : '');
};

__signature__(ReviewContainer, "useState{[reviews, setReviews](props.reviews)}\nuseState{[averageScore, setAverageScore](props.averageScore)}\nuseState{[isModifiable, setIsModifiable](false)}\nuseState{[exData, setExData]({})}\nuseContext{{ alertModal, confirmModal }}\nuseEffect{}");

ReviewContainer.defaultProps = {
  isBrief: true,
  reviews: [],
  averageScore: 0
};
ReviewContainer.propTypes = {
  displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  averageScore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
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
      setIsIconShowing = _useState4[1]; // const [textObj, setTextObj] = useState({ simple: '', detail: '' });


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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
  isMain: false
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewProvider__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _ReviewContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReviewContainer */ "D8/H");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var ReviewProvider = function ReviewProvider() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])(),
      displayInfoId = _useParams.displayInfoId;

  var productData;
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
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReviewContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    displayInfoId: displayInfoId,
    averageScore: productData.averageScore,
    reviews: productData.comments,
    isBrief: false
  });
};

__signature__(ReviewProvider, "useParams{{ displayInfoId }}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"]];
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

  var uiRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var viewRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var selectedRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(selected);
  selectedRef.current = selected;

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
    return function () {
      window.removeEventListener('resize', reviseIndicator);
      window.removeEventListener('resize', reviseViewWidth);
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var viewBody = viewRef.current.children[0].children[selected].children[0]; // section -> ul -> li -> div

    var height = viewBody && viewBody.offsetHeight;
    setViewStyle(_objectSpread({}, viewStyle, {
      height: height || ''
    }));
  }, [views]);
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

__signature__(TabController, "useState{[selected, setSelected](0)}\nuseState{[indicatorStyle, setIndicatorStyle]({\r\n    left: 0,\r\n    width: 0,\r\n  })}\nuseState{[viewStyle, setViewStyle]({\r\n    transitionDuration: '0.5s',\r\n  })}\nuseRef{uiRef}\nuseRef{viewRef}\nuseRef{selectedRef}\nuseEffect{}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

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
        border: 'none',
        borderTop: '1px solid #ccc'
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

  var startScroll = function startScroll() {
    return Object(_js_common__WEBPACK_IMPORTED_MODULE_7__["resizeEnd"])(function () {
      setScrollable(true);
    });
  };

  var pauseScroll = function pauseScroll() {
    setScrollable(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('resize', pauseScroll);
    window.addEventListener('resize', startScroll());
    return function () {
      window.removeEventListener('resize', pauseScroll);
      window.removeEventListener('resize', startScroll());
    };
  }, []);

  var getImageWidth = function getImageWidth() {
    return Object(_js_common__WEBPACK_IMPORTED_MODULE_7__["resizeEnd"])(function () {
      setImageWidth(imageList.current.firstElementChild.clientWidth);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setImageWidth(imageList.current.firstElementChild && imageList.current.firstElementChild.clientWidth || 0); // 처음엔 0으로 됨

    window.addEventListener('resize', getImageWidth());
    return function () {
      return window.removeEventListener('resize', getImageWidth());
    };
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
/*
function debounce(func) {
  let timer;
  return function(event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
    setTimeout()
  };
}

window.addEventListener(
  'resize',
  debounce(event => {
    // resize 끝났을 때
    scrollAble = true;
  }),
);
*/

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
    className: "CommentSummary"
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
  averageScore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
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
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Review */ "bUiE");
/* harmony import */ var _ReviewEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReviewEdit */ "nx9d");


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

      reviewsComp.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Review__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, isModifiable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ReviewEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    commentId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    comment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    score: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    email: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    commentImages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    })).isRequired
  })).isRequired,
  isBrief: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9EZXRhaWxJbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ub3RhbENvdW50L3N0eWxlLmNzcz81NzA3Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpbk5hdkJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbi9zdHlsZS5jc3M/ZmY0YSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL3N0eWxlLmNzcz9hNmI5Iiwid2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5Db250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTGF5b3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5JbWFnZS9zdHlsZS5jc3M/MjJmMCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0lucHV0VGlja2V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9BcHAvc3R5bGUuY3NzPzEyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9zdHlsZS5jc3M/MDBlYiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0NvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluTmF2QmFyL3N0eWxlLmNzcz9iODU5Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVmlldy9zdHlsZS5jc3M/YjMwOSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0xvZ2luRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ub3RhbENvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RCb3gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVUkvc3R5bGUuY3NzP2E0ODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRIZWFkL3N0eWxlLmNzcz84NmY1Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0RldGFpbENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlckluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVE9TL3N0eWxlLmNzcz84MmIwIiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpblZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvU3ViTmF2QmFyL3N0eWxlLmNzcz83OWViIiwid2VicGFjazovLy8uL3NyYy9qc3gvQXBwL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdQcm92aWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVRpdGxlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEhlYWQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVE9TL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm9MaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVEZXNjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ291bnQvc3R5bGUuY3NzP2MxZWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTW9kYWwvc3R5bGUuY3NzP2I3NmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9TdWJOYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9zdHlsZS5jc3M/ZTkxZCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0hlYWRlci9zdHlsZS5jc3M/NmNiMiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVySW5mby9zdHlsZS5jc3M/Y2VmNiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1N1bW1hcnkvc3R5bGUuY3NzPzU3YmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdDb250YWluZXIvc3R5bGUuY3NzP2ZiMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvRXZlbnRJbmZvL3N0eWxlLmNzcz85NGI5Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVUkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uQnVuY2gvc3R5bGUuY3NzPzNkOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJDb250cm9sbGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5WaWV3L3N0eWxlLmNzcz80NTE0Iiwid2VicGFjazovLy8uL3NyYy9qc3gvRm9vdGVyL3N0eWxlLmNzcz9hMDNlIiwid2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uQnVuY2gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9zdHlsZS5jc3M/MDNmNSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlVGl0bGUvc3R5bGUuY3NzP2EwZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Qm94L3N0eWxlLmNzcz80NmVjIiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkNvbnRhaW5lci9zdHlsZS5jc3M/MGVjZiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vc3R5bGUuY3NzP2FkMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdFZGl0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbnB1dFRpY2tldC9zdHlsZS5jc3M/N2I2YSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVEZXNjL3N0eWxlLmNzcz9hYzA4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vc3R5bGUuY3NzPzMyMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9tb3Rpb25JbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9OYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluSW1hZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdMaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJFdmVudEluZm8iLCJwcm9wcyIsImRpc2NvdW50SW5mbyIsImpvaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkltYWdlU2xpZGVyIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiZGVncmVlIiwidHJhbnNpdGlvblRpbWUiLCJpbWFnZXMiLCJpbWFnZVdpZHRoIiwiaXNQcm9tb3Rpb24iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdXQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwiZGlzcGxheUluZm9JZCIsInNhdmVGaWxlTmFtZSIsImRlZmF1bHRQcm9wcyIsIm51bWJlciIsInNoYXBlIiwiYm9vbCIsImZ1bmMiLCJEZXRhaWxJbWFnZSIsInRpdGxlIiwidXNlU3RhdGUiLCJzZXREZWdyZWUiLCJzZXRJbWFnZVdpZHRoIiwiaW1hZ2VMaXN0IiwidXNlUmVmIiwiZ2V0SW1hZ2VXaWR0aCIsInJlc2l6ZUVuZCIsImN1cnJlbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsaWVudFdpZHRoIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsZWZ0U2Nyb2xsIiwicmlnaHRTY3JvbGwiLCJsZW5ndGgiLCJhcnJheSIsIk1haW5OYXZCYXIiLCJpc1RyYW5zcGFyZW50IiwiaXNMb2dvdXRhYmxlIiwiUmVzZXJ2YXRpb25Db3VudCIsInRvVXNlZExlbiIsInVzZWRMZW4iLCJjYW5jZWxlZExlbiIsIkJ1dHRvbiIsInN0eWxlIiwiY2xpY2siLCJjaGlsZHJlbiIsImNyZWF0ZVN0eWxlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvYmplY3QiLCJvbmVPZlR5cGUiLCJub2RlIiwiTWFpbkNvbnRhaW5lciIsImJhc2lzQ291bnQiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInByb2R1Y3RDb3VudCIsInNldFByb2R1Y3RDb3VudCIsIkFycmF5IiwiZmlsbCIsInZpZXdzIiwic2V0Vmlld3MiLCJ2aWV3c0FyciIsInNldFZpZXdzQXJyIiwiY2F0ZWdvcnlQcm9kdWN0cyIsInNldENhdGVnb3J5UHJvZHVjdHMiLCJzaG93aW5nQ291bnQiLCJzZXRTaG93aW5nQ291bnQiLCJpc0ZldGNoZWQiLCJzZXRJc0ZldGNoZWQiLCJsYWJlbHMiLCJkb2N1bWVudCIsImZldGNoUHJvZHVjdHMiLCJheGlvcyIsImdldCIsIml0ZW1zIiwiZGF0YSIsIm1vZGlmaWVkQ2F0ZWdvcnkiLCJtb2RpZmllZFZpZXdzQXJyIiwic2xpY2UiLCJpbmZvIiwibW9kaWZpZWRWaWV3cyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNb3JlUHJvZHVjdCIsInZpZXdzTGVuIiwicHJvZHVjdHNMZW4iLCJmaW5hbEluZCIsImZvckVhY2giLCJwdXNoIiwic3BlY2lmaWNQcm9kdWN0cyIsImFsbFByb2R1Y3RzIiwiY2F0ZWdvcnlJZCIsImNvcGllZFZpZXdzIiwiaXNNb3JlU2hvd2luZyIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXRJc01vZGFsIiwic2V0TW9kYWxDaGlsZHJlbiIsImFsZXJ0TW9kYWwiLCJjb25maXJtTW9kYWwiLCJMYXlvdXQiLCJpc01vZGFsIiwibW9kYWxDaGlsZHJlbiIsInRleHQiLCJhY3Rpb24iLCJJbnB1dFRpY2tldCIsInByb2R1Y3RQcmljZXMiLCJ0aWNrZXRzIiwiZGlzcGF0Y2giLCJwcmljZVR5cGVNYXBwZXIiLCJwcmljZVR5cGVOYW1lIiwidHJhbnNmb3JtTW9uZXlVbml0IiwicHJpY2UiLCJOdW1iZXIiLCJkaXNjb3VudFJhdGUiLCJFUFNJTE9OIiwib3JpZ2luYWxDb3N0IiwiTWF0aCIsInJvdW5kIiwidHlwZSIsIndoZXJlIiwiQWN0aW9uQ29udGV4dCIsImNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiIsIlJlc2VydmF0aW9uQ29udGFpbmVyIiwiZW1haWxJZCIsInRvVXNlZCIsInNldFRvVXNlZCIsInNldFRvVXNlZExlbiIsImNhbmNlbGVkIiwic2V0Q2FuY2VsZWQiLCJzZXRDYW5jZWxlZExlbiIsInVzZUNvbnRleHQiLCJ1c2VkIiwiY2FuY2VsUmVzZXJ2YXRpb24iLCJpZCIsInB1dCIsInN0YXR1cyIsInRvRGVsZXRlSW5kZXgiLCJmaW5kSW5kZXgiLCJyZXNlcnZhdGlvbkluZm9JZCIsImNhbmNlbGVkSXRlbSIsInNwbGljZSIsInRvSW5zZXJ0SW5kZXgiLCJQcm9kdWN0SW5mbyIsImRpc3BsYXlJbmZvIiwicHJvZHVjdENvbnRlbnQiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwbGFjZUxvdCIsInBsYWNlU3RyZWV0IiwicGxhY2VOYW1lIiwidGVsZXBob25lIiwibG9jYXRpb25JbWdTcmMiLCJPYmplY3QiLCJrZXlzIiwiRm9vdGVyIiwiaXNSaXNlYWJsZSIsInNldElzUmlzZWFibGUiLCJjaGFuZ2VSaXNlYWJsZSIsInNldEludGVydmFsIiwiYm9keSIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xlYXJJbnRlcnZhbCIsIlJldmlld0NvbnRhaW5lciIsImlzQnJpZWYiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsImF2ZXJhZ2VTY29yZSIsInNldEF2ZXJhZ2VTY29yZSIsImlzTW9kaWZpYWJsZSIsInNldElzTW9kaWZpYWJsZSIsImV4RGF0YSIsInNldEV4RGF0YSIsIm1vZGlmaWVkQXZlcmFnZVNjb3JlIiwicmVkdWNlIiwiYWNjdW0iLCJzY29yZSIsImRpc3BsYXlTdGFyIiwibWF4U2NvcmUiLCJmaWxsQ291bnQiLCJmbG9vciIsIm5vdEZpbGxDb3VudCIsImNlaWwiLCJyYXRpb0NvdW50Iiwic3RhcnMiLCJfIiwidGltZXMiLCJiYWNrZ3JvdW5kIiwiY29udGVudCIsImJhY2tncm91bmRDbGlwIiwiV2Via2l0QmFja2dyb3VuZENsaXAiLCJXZWJraXRUZXh0RmlsbENvbG9yIiwiZGlzcGxheSIsImVkaXRDb21tZW50IiwiY29tbWVudElkIiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0IiwiY29tbWVudCIsImNvbW1lbnRJbWFnZXMiLCJpbWFnZVNyYyIsImRlbGV0ZUNvbW1lbnQiLCJtb2RpZmllZFJldmlld3MiLCJmaWx0ZXIiLCJjb25maXJtRGVsZXRlIiwiY29uZmlybUVkaXQiLCJzdWJtaXQiLCJpc1Byb2Nlc3NlZCIsImNvbmZpcm1DYW5jZWwiLCJwcm9kdWN0SWQiLCJyZXNlcnZhdGlvbkRhdGUiLCJyZXNlcnZhdGlvbkVtYWlsIiwiZGVsZXRlRmxhZyIsIkxvZ2luRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJ0YXJnZXQiLCJUb3RhbENvdW50IiwiUHJvZHVjdEJveCIsIml0ZW1JbmZvIiwicHJvZHVjdEltYWdlVXJsIiwidGV4dExpbWl0IiwiaXNGb2xkIiwic2V0SXNGb2xkIiwiaXNJY29uU2hvd2luZyIsInNldElzSWNvblNob3dpbmciLCJkZXRhaWxUZXh0IiwidGV4dE9iaiIsInRyaW1tZWRUZXh0IiwidHJpbSIsInJlcGxhY2UiLCJ0ZXh0U2ltcGxlIiwidGV4dERldGFpbCIsInNpbXBsZSIsImRldGFpbCIsInNob3dBbmRIaWRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiQiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiYmFja2dyb3VuZEltYWdlIiwiVGlja2V0SW5mbyIsImRlc2NyaXB0aW9uIiwicmVzZXJ2YXRpb25OYW1lIiwicmVzZXJ2YXRpb25UZWwiLCJwcmljZUluZm8iLCJ0b3RhbFByaWNlIiwiYWN0aW9ucyIsInJlc2VydmF0aW9uU3VtbWFyeSIsImNvdW50IiwiY3JlYXRlQnV0dG9uIiwibm90ZXMiLCJTdHJpbmciLCJwYWRTdGFydCIsIlJlc2VydmVDb250YWluZXIiLCJ1c2VQYXJhbXMiLCJwcm9kdWN0RGF0YSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkaWZmRGF5cyIsInJlc2VydmUiLCJyYW5kb20iLCJzdGFydCIsImVuZCIsIm1vbWVudCIsInR6IiwiYWRkIiwiZm9ybWF0IiwicHJvZHVjdEltYWdlcyIsInNvbWUiLCJEZXRhaWxDb250YWluZXIiLCJzZXRQcm9kdWN0RGF0YSIsInNldERpc2NvdW50SW5mbyIsImZldGNoRGF0YSIsIm1vZGlmaWVkSW1hZ2VzIiwiYm9yZGVyVG9wIiwiY29tbWVudHMiLCJkaXNwbGF5SW5mb0ltYWdlIiwiUmVzZXJ2ZXJJbmZvIiwibmFtZSIsInRvdGFsVGlja2V0IiwiaXNWZXJpZmllZE5hbWUiLCJpc1ZlcmlmaWVkVGVsIiwiaXNWZXJpZmllZEVtYWlsIiwibWFrZUFsZXJ0IiwiaGlkZSIsIk1haW5WaWV3IiwicHJvZHVjdHMiLCJsZWZ0UHJvZHVjdHMiLCJ2IiwicmlnaHRQcm9kdWN0cyIsImVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiUmV2aWV3UHJvdmlkZXIiLCJJbWFnZVRpdGxlIiwiaW1hZ2VMZW4iLCJUaWNrZXRIZWFkIiwiaXNHcmVlbiIsIlRPUyIsImlzQ2hlY2tlZCIsImlzQ29sbGVjdGlvbkZvbGQiLCJzZXRJc0NvbGxlY3Rpb25Gb2xkIiwiaXNPZmZlckZvbGQiLCJzZXRJc09mZmVyRm9sZCIsImZvbGRUZXh0Iiwic2hvd1RleHQiLCJoYW5kbGVDb2xsZWN0aW9uQ2xpY2siLCJoYW5kbGVPZmZlckNsaWNrIiwiY2hlY2tlZCIsIlRpY2tldEluZm9MaXN0IiwiaW5mb3MiLCJSZXNlcnZlRGVzYyIsInBsYWNlIiwicHJpY2VUZXh0IiwicHJpY2VMaXN0IiwiSGVhZGVyIiwiaW5pdGlhbFN0YXRlIiwiaXNUT1NDaGVja2VkIiwicmVkdWNlciIsInN0YXRlIiwibW9kaWZpZWREZWMiLCJtb2RpZmllZEluYyIsInRlc3QiLCJ0ZWxSZSIsImVtYWlsUmUiLCJFcnJvciIsIlJlc2VydmVGb3JtIiwidXNlUmVkdWNlciIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaGFuZGxlU3VibWl0IiwicmVzZXJ2YXRpb25JbmZvIiwicHJpY2VzIiwicmVzZXJ2YXRpb25UZWxlcGhvbmUiLCJyZXNlcnZhdGlvblllYXJNb250aERheSIsImxlbiIsInByb2R1Y3RQcmljZUlkIiwicHJvZHVjdFByaWNlSUQiLCJwb3N0IiwiY29uZmlybVN1Ym1pdCIsInNwbGl0IiwiaXNSZXF1cmVkIiwiU3ViTmF2QmFyIiwidXNlTG9jYXRpb24iLCJwYXRobmFtZSIsInBhdGhzIiwiaXRlbUlkIiwiVGFiVmlldyIsInZpZXciLCJoZWlnaHQiLCJSZXZpZXciLCJyZXZpZXciLCJpbWFnZSIsImRhdGUiLCJUYWJVSSIsInNlbGVjdGVkIiwiaGFuZGxlQ2xpY2siLCJpbmRpY2F0b3JTdHlsZSIsImxhYmVsIiwibGVmdCIsIndpZHRoIiwiVGFiQ29udHJvbGxlciIsImFsYXJtIiwidG9wIiwiYm90dG9tIiwic2V0U2VsZWN0ZWQiLCJzZXRJbmRpY2F0b3JTdHlsZSIsInZpZXdTdHlsZSIsInNldFZpZXdTdHlsZSIsInVpUmVmIiwidmlld1JlZiIsInNlbGVjdGVkUmVmIiwicmV2aXNlSW5kaWNhdG9yIiwic2VsZWN0ZWRMaSIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsInJldmlzZVZpZXdXaWR0aCIsInZpZXdCb2R5Iiwib2Zmc2V0SGVpZ2h0IiwiYXBwbHlTdHlsZSIsInRvU3RyaW5nIiwiY2FsbCIsImFsbCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInJpZ2h0IiwiZG93biIsIkJ1dHRvbkJ1bmNoIiwibWFyZ2luIiwicGFkZGluZyIsImZvbnRDb2xvciIsIlJldmlld0VkaXQiLCJ0aHVtYm5haWxXaWR0aCIsImV4U2NvcmUiLCJleENvbW1lbnQiLCJleEltYWdlU3JjIiwiaXNQb3N0Iiwic2V0U2NvcmUiLCJzZXRDb21tZW50Iiwic2V0SW1hZ2VTcmMiLCJ0aHVtYm5haWxTdHlsZSIsInNldFRodW1ibmFpbFN0eWxlIiwiZm9ybSIsImltYWdlUmVmIiwiaW1hZ2VNZWFzdXJlbWVudCIsIkltYWdlIiwic3JjIiwib25sb2FkIiwicmF0aW8iLCJmaWxlcyIsInZhbGlkSW1hZ2VUeXBlIiwiZm9ybU9iaiIsIkZvcm1EYXRhIiwibW9kaWZ5UmF0aW5nIiwidXBsb2FkSW1hZ2UiLCJ0ZW1wSW1hZ2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjYW5jZWxJbWFnZVVwbG9hZCIsIlRpY2tldCIsIlByb2R1Y3REZXNjIiwibGltaXQiLCJzZXRUZXh0T2JqIiwic2hvd01vcmVEZXNjIiwib3BlblRleHQiLCJib3JkZXIiLCJQcm9tb3Rpb25JbWFnZSIsInRpbWVJbnRlcnZhbCIsInNjcm9sbGFibGUiLCJzZXRTY3JvbGxhYmxlIiwic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwic2V0SW1hZ2VzIiwiZGVncmVlUmVmIiwic2Nyb2xsYWJsZVJlZiIsImZldGNoSW1hZ2VzIiwiYXV0b1Njcm9sbCIsInByZXZEZWdyZWUiLCJzdGFydFNjcm9sbCIsInBhdXNlU2Nyb2xsIiwiTmF2QmFyIiwiUHJvZHVjdENvbnRhaW5lciIsImNsYXNzTmFtZSIsIk1vZGFsIiwiTWFpbkltYWdlIiwiYWx0IiwiUmV2aWV3U3VtbWFyeSIsInJldmlld0NvdW50IiwiUmV2aWV3TGlzdCIsInNob3dSZXZpZXdzIiwicmV2aWV3c0NvbXAiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNuQkMsWUFEbUIsR0FDRkQsS0FERSxDQUNuQkMsWUFEbUI7QUFHM0IsU0FDRTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNFLHVFQUNFO0FBQUcsYUFBUyxFQUFDO0FBQWIsSUFERixFQUVHLFFBRkgsQ0FERixFQUtFLG1JQUVFLHNFQUZGLFlBR01BLFlBQVksQ0FBQ0MsSUFBYixDQUFrQixJQUFsQixDQUhOLG1CQUxGLENBREY7QUFhRCxDQWhCRDs7QUFrQkFILFNB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Q0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwRTs7Ozs7Ozs7Ozs7O0FDekMxRSx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUM5UixNQUFELEVBQVk7QUFDL0IsU0FBTztBQUNMMkUsV0FBTyxFQUFFbEQsS0FBSyxDQUFDekIsTUFBRCxDQUFMLENBQWMwQixJQUFkLENB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QUpMLEdBQWhCLEVBS0xBO0FBekJrQixDQUF2QjtlQTRCZTRjLFU7QUFBQTs7Ozs7Ozs7OzswQkFyRlRBLFUiLCJmaWxlIjoibWFpbi4wMjMyMGU1MTdlMjkxMmQ1NDkxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEV2ZW50SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGlzY291bnRJbmZvIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkV2ZW50SW5mb1wiPlxyXG4gICAgICA8aDI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2V2dFwiIC8+XHJcbiAgICAgICAgeycg7J2067Kk7Yq47KCV67O0J31cclxuICAgICAgPC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgW+uEpOydtOuyhOyYiOyVvSDtirnrs4TtlaDsnbhdXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2Ake2Rpc2NvdW50SW5mby5qb2luKCcsICcpfSDtlaDsnbhgfVxyXG4gICAgICA8L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkV2ZW50SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzY291bnRJbmZvOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEluZm87XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTWFpbkltYWdlIGZyb20gJy4uL01haW5JbWFnZSc7XHJcblxyXG5jb25zdCBJbWFnZVNsaWRlciA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAvKiBpbml0XHJcbiAgICogIGRlZ3JlZTogMFxyXG4gICAqIHRyYW5zaXRpb25UaW1lOiAyXHJcbiAgICogIGltYWdlczogW11cclxuICAgKiAgaW1hZ2VXaWR0aDogMFxyXG4gICAqIGlzUHJvbW90aW9uOiB0cnVlXHJcbiAgICovXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGRlZ3JlZSxcclxuICAgIHRyYW5zaXRpb25UaW1lLFxyXG4gICAgaW1hZ2VzLFxyXG4gICAgaW1hZ2VXaWR0aCxcclxuICAgIGlzUHJvbW90aW9uLFxyXG4gICAgaGFuZGxlVHJhbnNpdGlvbkVuZCxcclxuICAgIGhhbmRsZU1vdXNlT3ZlcixcclxuICAgIGhhbmRsZU1vdXNlT3V0LFxyXG4gIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb25cclxuICAgICAgY2xhc3NOYW1lPXtgSW1hZ2VTbGlkZXIgJHtpc1Byb21vdGlvbiA/ICdwcm9tb3Rpb24nIDogJ2RldGFpbCd9YH1cclxuICAgICAgb25UcmFuc2l0aW9uRW5kPXtoYW5kbGVUcmFuc2l0aW9uRW5kfVxyXG4gICAgICBvbk1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfVxyXG4gICAgICBvbk1vdXNlT3V0PXtoYW5kbGVNb3VzZU91dH1cclxuICAgID5cclxuICAgICAgPHVsXHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7aW1hZ2VXaWR0aCAqIGRlZ3JlZX1weClgLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0cmFuc2l0aW9uVGltZX1zYCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlICYmIGlzUHJvbW90aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2BkZXRhaWwvJHt2YWx1ZS5kaXNwbGF5SW5mb0lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8TWFpbkltYWdlIHNyYz17dmFsdWUuc2F2ZUZpbGVOYW1lfSBhbHQ9XCJwcm9tb3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxNYWluSW1hZ2Ugc3JjPXtgLyR7dmFsdWUuc2F2ZUZpbGVOYW1lfWB9IGFsdD1cIml0ZW1JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcbkltYWdlU2xpZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBoYW5kbGVUcmFuc2l0aW9uRW5kOiAoKSA9PiB7fSxcclxuICBoYW5kbGVNb3VzZU92ZXI6ICgpID0+IHt9LFxyXG4gIGhhbmRsZU1vdXNlT3V0OiAoKSA9PiB7fSxcclxufTtcclxuXHJcbkltYWdlU2xpZGVyLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzYXZlRmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpbWFnZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNQcm9tb3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFuZGxlTW91c2VPdmVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBoYW5kbGVNb3VzZU91dDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHJlc2l6ZUVuZCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi9JbWFnZVNsaWRlcic7XHJcbmltcG9ydCBJbWFnZVRpdGxlIGZyb20gJy4uL0ltYWdlVGl0bGUnO1xyXG5cclxuLy8gRGV0YWlsQ29udGFpbmVy7JeQ7IScIGltYWdlc+yZgCB0aXRsZeydhCDspJjslbwgIO2VmOqzoCBpbWFnZXPripQg7ZWE7YSw66eB7J2EIOqxsOyzkOuGlOyVvCDrkKhcclxuLy8g7Iqk7YGs66GkIOyLnOqwhCh0cmFuc2l0aW9uVGltZSkgZGVmYXVsdCAx7LSIXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IERldGFpbEltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZXMsIHRpdGxlLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbWFnZVdpZHRoLCBzZXRJbWFnZVdpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGltYWdlTGlzdCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2VXaWR0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVdpZHRoKFxyXG4gICAgICAoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQgJiZcclxuICAgICAgICBpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCkgfHxcclxuICAgICAgICAwLFxyXG4gICAgKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRJbWFnZVdpZHRoKCkpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRJbWFnZVdpZHRoKCkpO1xyXG4gIH0sIFtpbWFnZXNdKTtcclxuXHJcbiAgY29uc3QgbGVmdFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgIT09IDApIHtcclxuICAgICAgc2V0RGVncmVlKGRlZ3JlZSAtIDEpO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIGlmIChkZWdyZWUgPT09IDApIHJldHVybjtcclxuICAgIGRlZ3JlZSAtPSAxO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBmaXJzdEl0ZW0uY2xpZW50V2lkdGg7XHJcbiAgICBpbWFnZUxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7aW50ZXJ2YWwgKiBkZWdyZWV9cHgpYDtcclxuICAgIGltYWdlQ291bnRpbmcuaW5uZXJUZXh0ID0gYCAke2RlZ3JlZSArIDF9IGA7XHJcbiAgICAqL1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJpZ2h0U2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSAhPT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgc2V0RGVncmVlKChkZWdyZWUgKyAxKSAlIGltYWdlcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIGltYWdlTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtpbnRlcnZhbCAqIGRlZ3JlZX1weClgO1xyXG4gICAgaW1hZ2VDb3VudGluZy5pbm5lclRleHQgPSBgICR7ZGVncmVlICsgMX0gYDtcclxuICAgICovXHJcbiAgfTtcclxuICAvLyBwcm9wcyDri6Qg64SY6rKo7KSY7JW8IO2VqFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGFpbEltYWdlXCI+XHJcbiAgICAgIDxJbWFnZVNsaWRlclxyXG4gICAgICAgIHJlZj17aW1hZ2VMaXN0fVxyXG4gICAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICAgIHRyYW5zaXRpb25UaW1lPXt0cmFuc2l0aW9uVGltZX1cclxuICAgICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgICBpbWFnZVdpZHRoPXtpbWFnZVdpZHRofVxyXG4gICAgICAgIGlzUHJvbW90aW9uPXtmYWxzZX1cclxuICAgICAgLz5cclxuICAgICAgPEltYWdlVGl0bGVcclxuICAgICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgICBpbWFnZUxlbj17aW1hZ2VzLmxlbmd0aH1cclxuICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgbGVmdFNjcm9sbD17bGVmdFNjcm9sbH1cclxuICAgICAgICByaWdodFNjcm9sbD17cmlnaHRTY3JvbGx9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuRGV0YWlsSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGltYWdlczogW10sXHJcbiAgdGl0bGU6ICcnLFxyXG4gIHRyYW5zaXRpb25UaW1lOiAwLjUsXHJcbn07XHJcblxyXG5EZXRhaWxJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxJbWFnZTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBpc1RyYW5zcGFyZW506rCAIGZhbHNl7J28IOuVjCBmaXhlZOydtOuvgOuhnCBzdHlsZeqwneyytOqwgCDsnojslrTslbwg65CoXHJcblxyXG5jb25zdCBNYWluTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc1RyYW5zcGFyZW50LCBpc0xvZ291dGFibGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17YE1haW5OYXZCYXIgJHtpc1RyYW5zcGFyZW50ID8gJ3RyYW5zcGFyZW50JyA6ICdmaXhlZCd9YH0+XHJcbiAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24ucG5nXCIgYWx0PVwibmF2ZXIgaWNvblwiIC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgPGgyPntpc0xvZ291dGFibGUgPyAn66Gc6re47JWE7JuDJyA6ICfsmIjslb3tmZXsnbgnfTwvaDI+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5NYWluTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzTG9nb3V0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIOyemOyemO2VmOqyjCDsqrzqsKTsiJgg7J6I7J2EIOqygyDqsJnsnYxcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvVXNlZExlbiwgdXNlZExlbiwgY2FuY2VsZWRMZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZhdGlvbkNvdW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2Jvb2syXCIgLz5cclxuICAgICAgICAgICAgICDsoITssrRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3RvVXNlZExlbiArIHVzZWRMZW4gKyBjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19ib29rX3NzXCIgLz5cclxuICAgICAgICAgICAgICDsnbTsmqnsmIjsoJVcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3RvVXNlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19jaGVja1wiIC8+XHJcbiAgICAgICAgICAgICAg7J207Jqp7JmE66OMXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt1c2VkTGVufTwvaDE+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2JhY2tcIiAvPlxyXG4gICAgICAgICAgICAgIOy3qOyGjMK37ZmY67aIXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPntjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2YXRpb25Db3VudC5wcm9wVHlwZXMgPSB7XHJcbiAgdG9Vc2VkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdXNlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGNhbmNlbGVkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvdW50O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3R5bGUsIGNsaWNrLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY3JlYXRlU3R5bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JyxcclxuICAgICAgLi4uc3R5bGUsXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB0eXBlb2YgY2xpY2sgPT09ICdmdW5jdGlvbicgPyAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvblwiIG9uQ2xpY2s9e2NsaWNrfSBzdHlsZT17Y3JlYXRlU3R5bGUoKX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8TGluayBjbGFzc05hbWU9XCJCdXR0b25cIiB0bz17Y2xpY2t9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdHlsZToge30sXHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNsaWNrOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbi8qXHJcbiAqIOuEpOydtOuyhCDrsLDqsr0g7LSI66Gd7IOJOiAjMWVjODAwIOq4gOyekOyDiSAjZmZmO1xyXG4gKi9cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4uL01haW5WaWV3JztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcbmltcG9ydCBQcm9kdWN0Qm94IGZyb20gJy4uL1Byb2R1Y3RCb3gnO1xyXG5pbXBvcnQgVG90YWxDb3VudCBmcm9tICcuLi9Ub3RhbENvdW50JztcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGJhc2lzQ291bnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKDApOyAvLyDtmITsnqwg7ISg7YOd65CcIOy5tO2FjOqzoOumrCBpZFxyXG4gIGNvbnN0IFtwcm9kdWN0Q291bnQsIHNldFByb2R1Y3RDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gIOy5tO2FjOqzoOumrOydmCDsoJztkogg6rCc7IiYXHJcbiAgY29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZShBcnJheSg2KS5maWxsKDxNYWluVmlldyAvPikpOyAvLyBbPE1haW5WaWV3Lz4sPE1haW5WaWV3Lz5dXHJcbiAgY29uc3QgW3ZpZXdzQXJyLCBzZXRWaWV3c0Fycl0gPSB1c2VTdGF0ZShBcnJheSg2KS5maWxsKG51bGwpKTsgLy8gW1s8UHJvZHVjdEJveC8+XSxbPFByb2R1Y3RCb3gvPl1dO1xyXG4gIGNvbnN0IFtjYXRlZ29yeVByb2R1Y3RzLCBzZXRDYXRlZ29yeVByb2R1Y3RzXSA9IHVzZVN0YXRlKEFycmF5KDYpLmZpbGwobnVsbCkpO1xyXG4gIGNvbnN0IFtzaG93aW5nQ291bnQsIHNldFNob3dpbmdDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNGZXRjaGVkLCBzZXRJc0ZldGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBsYWJlbHMgPSBbJ+yghOyytCcsICfsoITsi5wnLCAn666k7KeA7LusJywgJ+y9mOyEnO2KuCcsICftgbTrnpjsi50nLCAn7Jew6re5J107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9ICfrhKTsnbTrsoQg7JiI7JW9JztcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGRhdGE6IHsgaXRlbXMgfSxcclxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb2R1Y3RzJyk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRDYXRlZ29yeSA9IFsuLi5jYXRlZ29yeVByb2R1Y3RzXTtcclxuICAgICAgICBtb2RpZmllZENhdGVnb3J5WzBdID0gaXRlbXM7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRWaWV3c0FyciA9IFsuLi52aWV3c0Fycl07XHJcbiAgICAgICAgbW9kaWZpZWRWaWV3c0FyclswXSA9IGl0ZW1zXHJcbiAgICAgICAgICAuc2xpY2UoMCwgYmFzaXNDb3VudClcclxuICAgICAgICAgIC5tYXAoKGluZm8pID0+IDxQcm9kdWN0Qm94IGl0ZW1JbmZvPXtpbmZvfSAvPik7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgICAgbW9kaWZpZWRWaWV3c1swXSA9IDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FyclswXX0gLz47XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlQcm9kdWN0cyhtb2RpZmllZENhdGVnb3J5KTtcclxuICAgICAgICBzZXRWaWV3c0Fycihtb2RpZmllZFZpZXdzQXJyKTtcclxuICAgICAgICBzZXRTaG93aW5nQ291bnQoc2hvd2luZ0NvdW50ICsgYmFzaXNDb3VudCk7XHJcbiAgICAgICAgc2V0UHJvZHVjdENvdW50KGl0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0Vmlld3MobW9kaWZpZWRWaWV3cyk7XHJcbiAgICAgICAgc2V0SXNGZXRjaGVkKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hQcm9kdWN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vcmVQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgdmlld3NMZW4gPSB2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGg7XHJcbiAgICBjb25zdCBwcm9kdWN0c0xlbiA9IGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoO1xyXG4gICAgaWYgKHZpZXdzTGVuID49IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnQgfHwgdmlld3NMZW4gPiBzaG93aW5nQ291bnQpIHtcclxuICAgICAgLy8gdmlld3NBcnLsl5Ag7J6I642YIOq4sOyhtCDqsoPsnYQg7IKs7Jqp7ZWgIOuVjFxyXG4gICAgICBjb25zdCBmaW5hbEluZCA9XHJcbiAgICAgICAgdmlld3NMZW4gPj0gc2hvd2luZ0NvdW50ICsgYmFzaXNDb3VudFxyXG4gICAgICAgICAgPyBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA6IHZpZXdzTGVuO1xyXG4gICAgICBjb25zdCBtb2RpZmllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgbW9kaWZpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnNsaWNlKDAsIGZpbmFsSW5kKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBzZXRTaG93aW5nQ291bnQoZmluYWxJbmQpO1xyXG4gICAgICBzZXRWaWV3cyhtb2RpZmllZFZpZXdzKTtcclxuICAgIH0gZWxzZSBpZiAocHJvZHVjdHNMZW4gPiB2aWV3c0xlbikge1xyXG4gICAgICAvLyB2aWV3c0FycuyXkCDssYTsm4zshJwg7IKs7Jqp7ZWgIOuVjFxyXG4gICAgICBjb25zdCBmaW5hbEluZCA9XHJcbiAgICAgICAgcHJvZHVjdHNMZW4gPj0gdmlld3NMZW4gKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA/IHZpZXdzTGVuICsgYmFzaXNDb3VudFxyXG4gICAgICAgICAgOiBwcm9kdWN0c0xlbjtcclxuICAgICAgY29uc3QgbW9kaWZpZWRWaWV3c0FyciA9IFsuLi52aWV3c0Fycl07XHJcbiAgICAgIGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV1cclxuICAgICAgICAuc2xpY2Uodmlld3NMZW4sIGZpbmFsSW5kKVxyXG4gICAgICAgIC5mb3JFYWNoKChpbmZvKSA9PiB7XHJcbiAgICAgICAgICBtb2RpZmllZFZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnB1c2goXHJcbiAgICAgICAgICAgIDxQcm9kdWN0Qm94IGl0ZW1JbmZvPXtpbmZvfSAvPixcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgIDxNYWluVmlldyBwcm9kdWN0cz17bW9kaWZpZWRWaWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX0gLz5cclxuICAgICAgKTtcclxuICAgICAgc2V0U2hvd2luZ0NvdW50KGZpbmFsSW5kKTtcclxuICAgICAgc2V0Vmlld3NBcnIobW9kaWZpZWRWaWV3c0Fycik7XHJcbiAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDsubTthYzqs6Drpqwg67CU64CM7JeI7J2EIOuVjCB2aWV367CU6r6464qUIOqzvOyglVxyXG4gICAgLy8gMS4g7LWc7LSIIOqzvOyglVxyXG4gICAgLy8gMi4g7LWc7LSIIOyVhOuLkCDrlYxcclxuICAgIGlmIChpc0ZldGNoZWQpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldKSB7XHJcbiAgICAgICAgLy8gMS7stZzstIgg6rO87KCVXHJcbiAgICAgICAgLy8gc2VsZWN0ZWRDYXRlZ29yeeyXkCAg7IOB7ZKI7KCV67O066W8IOuEo+qzoFxyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IHNwZWNpZmljUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBjb25zdCBbYWxsUHJvZHVjdHNdID0gY2F0ZWdvcnlQcm9kdWN0cztcclxuICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmNhdGVnb3J5SWQgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgc3BlY2lmaWNQcm9kdWN0cy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhdGVnb3J5ID0gWy4uLmNhdGVnb3J5UHJvZHVjdHNdO1xyXG4gICAgICAgIG1vZGlmaWVkQ2F0ZWdvcnlbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzO1xyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3NBcnIgPSBbLi4udmlld3NBcnJdO1xyXG4gICAgICAgIG1vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0gPSBzcGVjaWZpY1Byb2R1Y3RzXHJcbiAgICAgICAgICAuc2xpY2UoMCwgYmFzaXNDb3VudClcclxuICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiA8UHJvZHVjdEJveCBpdGVtSW5mbz17dmFsdWV9IC8+KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgICAgPE1haW5WaWV3IHByb2R1Y3RzPXttb2RpZmllZFZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldfSAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcnlQcm9kdWN0cyhtb2RpZmllZENhdGVnb3J5KTtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoc3BlY2lmaWNQcm9kdWN0cy5sZW5ndGgpO1xyXG4gICAgICAgIHNldFZpZXdzQXJyKG1vZGlmaWVkVmlld3NBcnIpO1xyXG4gICAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgICAgIHNldFNob3dpbmdDb3VudChiYXNpc0NvdW50KTtcclxuICAgICAgfSBlbHNlIGlmICh2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGggPj0gYmFzaXNDb3VudCkge1xyXG4gICAgICAgIC8vIGxlbmd0aOuKlCDsnoTsi5wg7YyQ67OEIE1haW5WaWV366eMIOyeiOyWtOyEnCDslYjsl5Ag6rCv7IiYIO2MjOyVhe2VtOyVvCDrkKhcclxuICAgICAgICAvLyAyLiBiYXNpc0NvdW50656RIOydvOy5mO2VoCDrlYxcclxuICAgICAgICBjb25zdCBjb3BpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnNsaWNlKDAsIGJhc2lzQ291bnQpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFByb2R1Y3RDb3VudChjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0U2hvd2luZ0NvdW50KGJhc2lzQ291bnQpO1xyXG4gICAgICAgIHNldFZpZXdzKGNvcGllZFZpZXdzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZENhdGVnb3J5XSk7XHJcblxyXG4gIGNvbnN0IGlzTW9yZVNob3dpbmcgPSAoKSA9PlxyXG4gICAgKChjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldICYmXHJcbiAgICAgIGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoKSB8fFxyXG4gICAgICAwKSA+IHNob3dpbmdDb3VudDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICA8VGFiQ29udHJvbGxlclxyXG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxyXG4gICAgICAgIHZpZXdzPXt2aWV3c31cclxuICAgICAgICBhbGFybT17c2V0U2VsZWN0ZWRDYXRlZ29yeX1cclxuICAgICAgICB0b3A9ezxUb3RhbENvdW50IHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fSAvPn1cclxuICAgICAgICBib3R0b209e1xyXG4gICAgICAgICAgaXNNb3JlU2hvd2luZygpID8gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17c2hvd01vcmVQcm9kdWN0fT5cclxuICAgICAgICAgICAgICDrjZTrs7TquLBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgJydcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTWFpbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFzaXNDb3VudDogNCxcclxufTtcclxuXHJcbk1haW5Db250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGJhc2lzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBzZXRJc01vZGFsOiAoKSA9PiB7fSxcclxuICBzZXRNb2RhbENoaWxkcmVuOiAoKSA9PiB7fSxcclxuICBhbGVydE1vZGFsOiAoKSA9PiB7fSxcclxuICBjb25maXJtTW9kYWw6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc01vZGFsLCBzZXRJc01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxDaGlsZHJlbiwgc2V0TW9kYWxDaGlsZHJlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGFsZXJ0TW9kYWwgPSAodGV4dCkgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3RleHR9PC9oMT5cclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogJ+2ZleyduCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PixcclxuICAgICk7XHJcbiAgICBzZXRJc01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1Nb2RhbCA9ICh0ZXh0LCBhY3Rpb24pID0+IHtcclxuICAgIHNldE1vZGFsQ2hpbGRyZW4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0ZXh0fTwvaDE+XHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICftmZXsnbgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICfst6jshownLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc01vZGFsKSB7XHJcbiAgICAgIHNldE1vZGFsQ2hpbGRyZW4oJycpO1xyXG4gICAgfVxyXG4gIH0sIFtpc01vZGFsXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc2V0SXNNb2RhbCxcclxuICAgICAgICBzZXRNb2RhbENoaWxkcmVuLFxyXG4gICAgICAgIGFsZXJ0TW9kYWwsXHJcbiAgICAgICAgY29uZmlybU1vZGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHtpc01vZGFsID8gPE1vZGFsPnttb2RhbENoaWxkcmVufTwvTW9kYWw+IDogJyd9XHJcbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuZXhwb3J0IHsgTW9kYWxDb250ZXh0IH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybU1vbmV5VW5pdCwgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSW5wdXRUaWNrZXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RQcmljZXMsIHRpY2tldHMsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiSW5wdXRUaWNrZXRcIj5cclxuICAgICAge3Byb2R1Y3RQcmljZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlYWNoVGlja2V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHtgJHt0cmFuc2Zvcm1Nb25leVVuaXQodmFsdWUucHJpY2UpfSDsm5BgfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvc3QgPVxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wcmljZSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgxIC0gTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgLyAxMDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YCR7dHJhbnNmb3JtTW9uZXlVbml0KG9yaWdpbmFsQ29zdCl97JuQICgke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX0lIO2VoOyduOqwgClgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRqdXN0VGlja2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwcl9Cb29rMiBpY29fbWludXMzICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja2V0c1tpbmRleF0gPyAnJyA6ICdkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUNSRU1FTlQnLCB3aGVyZTogaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgcmVzcnZhdGlvblRpY2tldCR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsc3NOYW1lPXt0aWNrZXRzW2luZGV4XSA/ICcnIDogJ2Rpc2FibGVkJ31cclxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aWNrZXRzW2luZGV4XX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fcGx1czNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnSU5DUkVNRU5UJywgd2hlcmU6IGluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD57YCR7dHJhbnNmb3JtTW9uZXlVbml0KHZhbHVlLnByaWNlICogdGlja2V0c1tpbmRleF0pfSDsm5BgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuSW5wdXRUaWNrZXQucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICB0aWNrZXRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRpY2tldDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgVGlja2V0IGZyb20gJy4uL1RpY2tldCc7XHJcbmltcG9ydCBSZXNlcnZhdGlvbkNvdW50IGZyb20gJy4uL1Jlc2VydmF0aW9uQ291bnQnO1xyXG5cclxuY29uc3QgQWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbjogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGVtYWlsSWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt0b1VzZWQsIHNldFRvVXNlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvVXNlZExlbiwgc2V0VG9Vc2VkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjYW5jZWxlZCwgc2V0Q2FuY2VsZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYW5jZWxlZExlbiwgc2V0Q2FuY2VsZWRMZW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuICBsZXQgdXNlZDtcclxuICBsZXQgdXNlZExlbjtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Jlc2VydmF0aW9ucy8ke2VtYWlsSWR9YCk7XHJcbiAgICAgIHNldFRvVXNlZChkYXRhLnRvVXNlZCk7XHJcbiAgICAgIHNldFRvVXNlZExlbihkYXRhLnRvVXNlZC5sZW5ndGgpO1xyXG4gICAgICBzZXRDYW5jZWxlZChkYXRhLmNhbmNlbGVkKTtcclxuICAgICAgc2V0Q2FuY2VsZWRMZW4oZGF0YS5jYW5jZWxlZC5sZW5ndGgpO1xyXG4gICAgICB1c2VkID0gZGF0YS51c2VkO1xyXG4gICAgICB1c2VkTGVuID0gZGF0YS51c2VkLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsUmVzZXJ2YXRpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvcmVzZXJ2YXRpb24vJHtpZH1gKTtcclxuICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICBhbGVydE1vZGFsKCfsnpjrqrvrkJwg7JqU7LKt7J6F64uI64ukJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIC8vIOyYpOulmOuCmOuptCDrsLDsl7Qg67O17IKs7ZW07JW87ZWoXHJcbiAgICAgIGNvbnN0IHRvRGVsZXRlSW5kZXggPSB0b1VzZWQuZmluZEluZGV4KFxyXG4gICAgICAgICh2YWx1ZSkgPT4gdmFsdWUucmVzZXJ2YXRpb25JbmZvSWQgPT09IGlkLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjYW5jZWxlZEl0ZW0gPSB0b1VzZWQuc3BsaWNlKHRvRGVsZXRlSW5kZXgsIDEpO1xyXG4gICAgICBjb25zdCB0b0luc2VydEluZGV4ID0gY2FuY2VsZWQuZmluZEluZGV4KFxyXG4gICAgICAgICh2YWx1ZSkgPT4gdmFsdWUucmVzZXJ2YXRpb25JbmZvSWQgPiBpZCxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRvSW5zZXJ0SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgY2FuY2VsZWQucHVzaChjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhbmNlbGVkLnNwbGljZSh0b0luc2VydEluZGV4LCAwLCBjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRvVXNlZCh0b1VzZWQpO1xyXG4gICAgICBzZXRUb1VzZWRMZW4odG9Vc2VkTGVuIC0gMSk7XHJcbiAgICAgIHNldENhbmNlbGVkKGNhbmNlbGVkKTtcclxuICAgICAgc2V0Q2FuY2VsZWRMZW4oY2FuY2VsZWRMZW4gKyAxKTtcclxuICAgICAgYWxlcnRNb2RhbCgn7JiI7JW97J20IOy3qOyGjOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uZmlybU1vZGFsKFxyXG4gICAgICAgICftlZzrsogg7Leo7IaM7ZWY7Iuc66m0IOuLpOyLnCDrkJjrj4zrprQg7IiYIOyXhuyKteuLiOuLpC4g6re4656Y64+EIO2VmOyLnOqyoOyKteuLiOq5jD8nLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNhbmNlbFJlc2VydmF0aW9uKGlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc2VydmF0aW9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgIHRvVXNlZExlbj17dG9Vc2VkTGVufVxyXG4gICAgICAgICAgdXNlZExlbj17dXNlZExlbn1cclxuICAgICAgICAgIGNhbmNlbGVkTGVuPXtjYW5jZWxlZExlbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaWNrZXQgaW5mb3M9e3RvVXNlZH0gYWN0aW9ucz1cImNhbmNlbFwiIGlzR3JlZW4+XHJcbiAgICAgICAgICDsmIjslb0g7ZmV7KCVXHJcbiAgICAgICAgPC9UaWNrZXQ+XHJcbiAgICAgICAgPFRpY2tldCBpbmZvcz17dXNlZH0gYWN0aW9ucz1cIndyaXRlUmV2aWV3XCI+XHJcbiAgICAgICAgICDsnbTsmqkg7JmE66OMXHJcbiAgICAgICAgPC9UaWNrZXQ+XHJcbiAgICAgICAgPFRpY2tldCBpbmZvcz17Y2FuY2VsZWR9Puy3qOyGjOuQnCDsmIjslb08L1RpY2tldD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmF0aW9uQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBlbWFpbElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvbnRhaW5lcjtcclxuZXhwb3J0IHsgQWN0aW9uQ29udGV4dCB9O1xyXG5cclxuLypcclxuUmVzZXJ2YXRpb25Db250YWluZXIg4oaSIFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaSIFRpY2tldCDihpIgVGlja2V0SGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpIgVGlja2V0SW5mb0xpc3Qg4oaSIFRpY2tldEluZm9cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpc3BsYXlJbmZvLFxyXG4gICAgZGlzcGxheUluZm86IHtcclxuICAgICAgcHJvZHVjdENvbnRlbnQsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgICAgcGxhY2VMb3QsXHJcbiAgICAgIHBsYWNlU3RyZWV0LFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHRlbGVwaG9uZSxcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbkltZ1NyYyxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZShBcnJheSgyKS5maWxsKG51bGwpKTtcclxuICBjb25zdCBsYWJlbHMgPSBbJ+yDgeyEuOygleuztCcsICfsmKTsi5zripTquLgnXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhkaXNwbGF5SW5mbykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNldFZpZXdzKFtcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwcm9kdWN0RGV0YWlsXCI+XHJcbiAgICAgICAgICA8aDI+W+yGjOqwnF08L2gyPlxyXG4gICAgICAgICAgPHA+e3Byb2R1Y3RDb250ZW50fTwvcD5cclxuICAgICAgICAgIDxoMj5b6rO17KeA7IKs7ZWtXTwvaDI+XHJcbiAgICAgICAgPC9hcnRpY2xlPixcclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2xvY2F0aW9uSW1nU3JjfWB9IGFsdD1cImxvY2F0aW9uXCIgLz5cclxuICAgICAgICAgIDxoMj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY1RleHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXBpbjRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3BsYWNlTG90fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmV5VGV4dFwiPuyngOuyiDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtwbGFjZVN0cmVldH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVRleHRcIj57cGxhY2VOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2FsbDJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RlbGVwaG9uZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmluZFJvYWRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXBhdGgtZmluZDJcIiAvPlxyXG4gICAgICAgICAgICAgICAg6ri47LC+6riwXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jYXItZmluZDJcIiAvPlxyXG4gICAgICAgICAgICAgICAg64K067mE6rKM7J207IWYXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPixcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BsYXlJbmZvXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0SW5mb1wiPlxyXG4gICAgICA8VGFiQ29udHJvbGxlciBsYWJlbHM9e2xhYmVsc30gdmlld3M9e3ZpZXdzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0SW5mby5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGlzcGxheUluZm86IHt9LFxyXG4gIGxvY2F0aW9uSW1nU3JjOiAnJyxcclxufTtcclxuXHJcblByb2R1Y3RJbmZvLnByb3BUeXBlcyA9IHtcclxuICBkaXNwbGF5SW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHByb2R1Y3RDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgcGxhY2VMb3Q6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZVN0cmVldDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHBsYWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRlbGVwaG9uZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB9KSxcclxuICBsb2NhdGlvbkltZ1NyYzogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjbGVhckludGVydmFsIH0gZnJvbSAndGltZXJzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNSaXNlYWJsZSwgc2V0SXNSaXNlYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VSaXNlYWJsZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgc2V0SXNSaXNlYWJsZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc1Jpc2VhYmxlKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChjaGFuZ2VSaXNlYWJsZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJGb290ZXJcIj5cclxuICAgICAge2lzUmlzZWFibGUgPyAoXHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXVwMVwiIC8+XHJcbiAgICAgICAgICB7JyBUT1AnfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjYXV0aW9uXCI+XHJcbiAgICAgICAg64Sk7J2067KEKOyjvCnripQg7Ya17Iug7YyQ66ek7J2YIOuLueyCrOyekOqwgCDslYTri4jrqbAsIOyDge2SiOydmOygleuztCwg6rGw656Y7KGw6rG0LCDsnbTsmqkg67CPXHJcbiAgICAgICAg7ZmY67aIIOuTseqzvCDqtIDroKjtlZwg7J2Y66y07JmAIOyxheyehOydgCDqsIEg7ZqM7JuQ7JeQ6rKMIOyeiOyKteuLiOuLpC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj7CqSBOQVZFUiBDb3JwLjwvc3Bhbj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIHByb3BzIOyImOyglVxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgUmV2aWV3U3VtbWFyeSBmcm9tICcuLi9SZXZpZXdTdW1tYXJ5JztcclxuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi4vUmV2aWV3TGlzdCc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBSZXZpZXdDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAvLyDsoITssrTsoIHsnLzroZwg66eM65Ok6rOgIOuLpOyLnCDqsoDthqBcclxuICBjb25zdCB7IGlzQnJpZWYsIGRpc3BsYXlJbmZvSWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKHByb3BzLnJldmlld3MpO1xyXG4gIGNvbnN0IFthdmVyYWdlU2NvcmUsIHNldEF2ZXJhZ2VTY29yZV0gPSB1c2VTdGF0ZShwcm9wcy5hdmVyYWdlU2NvcmUpO1xyXG4gIGNvbnN0IFtpc01vZGlmaWFibGUsIHNldElzTW9kaWZpYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4RGF0YSwgc2V0RXhEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gcmV2aWV3c+qwgCDri6zrnbzsoYzsnYQg65WMIGF2ZXJhZ2VTY29yZeuwlOq+uOuKlCBlZmZlY3RcclxuICAgIGlmIChyZXZpZXdzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBtb2RpZmllZEF2ZXJhZ2VTY29yZSA9XHJcbiAgICAgICAgcmV2aWV3cy5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICBhY2N1bSArIE51bWJlcihjdXJyZW50LnNjb3JlKTtcclxuICAgICAgICB9KSAvIHJldmlld3MubGVuZ3RoO1xyXG4gICAgICBzZXRBdmVyYWdlU2NvcmUobW9kaWZpZWRBdmVyYWdlU2NvcmUpO1xyXG4gICAgfVxyXG4gIH0sIFtyZXZpZXdzXSk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlTdGFyID0gKHNjb3JlLCBtYXhTY29yZSA9IDUpID0+IHtcclxuICAgIC8vIGF2ZXJhZ2VTY29yZeyXkCDrp57qsowg67OE7KCQ7J2EIOumrO2EtO2VmOuKlCDtlajsiJhcclxuICAgIGNvbnN0IGZpbGxDb3VudCA9IE1hdGguZmxvb3Ioc2NvcmUpO1xyXG4gICAgY29uc3Qgbm90RmlsbENvdW50ID0gbWF4U2NvcmUgLSBNYXRoLmNlaWwoc2NvcmUpO1xyXG4gICAgY29uc3QgcmF0aW9Db3VudCA9IE1hdGgucm91bmQoc2NvcmUgKiAxMCkgLyAxMCAtIGZpbGxDb3VudDtcclxuICAgIGNvbnN0IHN0YXJzID0gW107XHJcbiAgICBfLnRpbWVzKGZpbGxDb3VudCwgKCkgPT4ge1xyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIGdldFN0YXJcIiAvPik7XHJcbiAgICB9KTtcclxuICAgIGlmIChyYXRpb0NvdW50ID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgJzpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIFJpZ2h0LCNmMDAgJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICByYXRpb0NvdW50ICogMTAwLFxyXG4gICAgICAgICAgKX0lLCNFNkU2RTYgJHtNYXRoLnJvdW5kKCgxIC0gcmF0aW9Db3VudCkgKiAxMDApfSUpYCxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdFQUEzJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXHJcbiAgICAgICAgICBXZWJraXRCYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxyXG4gICAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdpbml0aWFsJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIHJhdGlvU3RhclwiIHN0eWxlPXtzdHlsZX0gLz4pO1xyXG4gICAgfVxyXG4gICAgXy50aW1lcyhub3RGaWxsQ291bnQsICgpID0+IHtcclxuICAgICAgc3RhcnMucHVzaCg8aSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiBub3RHZXRTdGFyXCIgLz4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwic3RhckNvdW50XCI+e3N0YXJzfTwvc3Bhbj47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdENvbW1lbnQgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq8IOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IHN0YXR1cywgc3RhdHVzVGV4dCB9LFxyXG4gICAgICAgIH0gPSBheGlvcy5nZXQoYC9hdXRoL2VkaXQvY29tbWVudHMvJHtjb21tZW50SWR9YCk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWxlcnRNb2RhbChzdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByZXZpZXdzLmZpbmRJbmRleCgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHZhbHVlLmNvbW1lbnRJZCA9PT0gY29tbWVudElkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgc2NvcmUsIGNvbW1lbnQsIGNvbW1lbnRJbWFnZXMgfSA9IHJldmlld3NbaW5kZXhdO1xyXG4gICAgICAgIHNldEV4RGF0YSh7XHJcbiAgICAgICAgICBpZDogY29tbWVudElkLFxyXG4gICAgICAgICAgc2NvcmUsXHJcbiAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgaW1hZ2VTcmM6IGNvbW1lbnRJbWFnZXMubGVuZ3RoID8gY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgOiAnJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29tbWVudCA9IChjb21tZW50SWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyCreygnCDrsoTtirzsnYQg64iE66W06rOgIO2ZleyduOydhCDriIzroIDsnYQg7Iuc7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBzdGF0dXMsIHN0YXR1c1RleHQgfSxcclxuICAgICAgICB9ID0gYXhpb3MuZGVsZXRlKGAvYXBpL3Jlc2VydmF0aW9ucy9jb21tZW50cy8ke2NvbW1lbnRJZH1gKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgYWxlcnRNb2RhbCgn66as67ew6rCAIOyCreygnOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgY29uc3QgbW9kaWZpZWRSZXZpZXdzID0gcmV2aWV3cy5maWx0ZXIoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNvbW1lbnRJZCAhPT0gY29tbWVudElkO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRSZXZpZXdzKG1vZGlmaWVkUmV2aWV3cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsgq3soJwg67KE7Yq87J2EIOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JywgZGVsZXRlQ29tbWVudChjb21tZW50SWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtRWRpdCA9IChpZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvOydhCDriITrpbTqs6Ag7IiY7KCVIOuyhO2KvOydhCDri6Tsi5wg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIHJldHVybiAoc3VibWl0LCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMpID0+IHtcclxuICAgICAgY29uZmlybU1vZGFsKCfrpqzrt7Drpbwg7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMPycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1Byb2Nlc3NlZCA9IHN1Ym1pdCgpO1xyXG4gICAgICAgIGlmIChpc1Byb2Nlc3NlZCkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSByZXZpZXdzLmZpbmRJbmRleCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuY29tbWVudElkID09PSBpZDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgbW9kaWZpZWRSZXZpZXdzID0gWy4uLnJldmlld3NdO1xyXG4gICAgICAgICAgbW9kaWZpZWRSZXZpZXdzW2luZGV4XS5jb21tZW50ID0gY29tbWVudDtcclxuICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uc2NvcmUgPSBzY29yZTtcclxuICAgICAgICAgIGlmIChtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgPSBpbWFnZVNyYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFJldmlld3MobW9kaWZpZWRSZXZpZXdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXhEYXRhKHt9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybUNhbmNlbCA9ICgpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirzsnYQg64iE66W06rOgIOy3qOyGjOulvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgY29uZmlybU1vZGFsKCfrpqzrt7Ag7IiY7KCV7J2EIOy3qOyGjO2VmOyLnOqyoOyKteuLiOq5jD8nLCAoKSA9PiB7XHJcbiAgICAgIHNldElzTW9kaWZpYWJsZShmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQ29tbWVudENvbnRhaW5lclwiPlxyXG4gICAgICA8UmV2aWV3U3VtbWFyeVxyXG4gICAgICAgIGF2ZXJhZ2VTY29yZT17YXZlcmFnZVNjb3JlfVxyXG4gICAgICAgIHJldmlld0NvdW50PXtyZXZpZXdzLmxlbmd0aH1cclxuICAgICAgICBkaXNwbGF5U3Rhcj17ZGlzcGxheVN0YXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZXZpZXdMaXN0XHJcbiAgICAgICAgcmV2aWV3cz17cmV2aWV3c31cclxuICAgICAgICBpc0JyaWVmPXtpc0JyaWVmfVxyXG4gICAgICAgIGlzTW9kaWZpYWJsZT17aXNNb2RpZmlhYmxlfVxyXG4gICAgICAgIGV4RGF0YT17ZXhEYXRhfVxyXG4gICAgICAgIGNvbmZpcm1EZWxldGU9e2NvbmZpcm1EZWxldGV9XHJcbiAgICAgICAgY29uZmlybUNhbmNlbD17Y29uZmlybUNhbmNlbH1cclxuICAgICAgICBjb25maXJtRWRpdD17Y29uZmlybUVkaXR9XHJcbiAgICAgICAgZWRpdENvbW1lbnQ9e2VkaXRDb21tZW50fVxyXG4gICAgICAvPlxyXG4gICAgICA8YXNpZGU+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1hbGFybTFcIiAvPlxyXG4gICAgICAgICAg64Sk7J2067KEIOyYiOyVveydhCDthrXtlbQg7Iuk7KCcIOuwqeusuO2VnCDsnbTsmqnsnpDqsIAg64Ko6ri0IO2PieqwgOyeheuLiOuLpC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICAgIHtpc0JyaWVmID8gKFxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNFOUVDRUYnIH0sXHJcbiAgICAgICAgICAgICAgY2xpY2s6IGAvcmV2aWV3LyR7ZGlzcGxheUluZm9JZH1gLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAg7JiI66ek7J6QIOumrOu3sCDrjZTrs7TquLBcclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tZm9yd2FyZDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0JyaWVmOiB0cnVlLFxyXG4gIHJldmlld3M6IFtdLFxyXG4gIGF2ZXJhZ2VTY29yZTogMCxcclxufTtcclxuXHJcblJldmlld0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGF2ZXJhZ2VTY29yZTogUHJvcFR5cGVzLm51bWJlcixcclxuICByZXZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICByZXNlcnZhdGlvbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHJlc2VydmF0aW9uRW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHJlc2VydmF0aW9uSW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY29tbWVudEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgIGRlbGV0ZUZsYWc6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgICBzYXZlRmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICB9KSxcclxuICApLFxyXG4gIGlzQnJpZWY6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Q29udGFpbmVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJMb2dpbkZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJveFwiPlxyXG4gICAgICAgICAgPGgxPuu5hO2ajOybkCDsmIjslb3tmZXsnbg8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPuyYiOyVveyekCDsnbTrqZTsnbwg7J6F66ClPC9wPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cImF1dGgvbG9naW5cIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcj1cInh4eHh4QG5hdmVyLmNvbVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIuuCtCDsmIjslb0g7ZmV7J24XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvdGFsQ291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RDb3VudCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlRvdGFsQ291bnRcIj5cclxuICAgICAgPHA+XHJcbiAgICAgICAg67CU66GcIOyYiOunpCDqsIDriqXtlZwg7ZaJ7IKs6rCAXHJcbiAgICAgICAgPHN0cm9uZz57YCAke3Byb2R1Y3RDb3VudH3qsJwgYH08L3N0cm9uZz5cclxuICAgICAgICDsnojsirXri4jri6RcclxuICAgICAgPC9wPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5Ub3RhbENvdW50LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvdGFsQ291bnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdEJveCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1JbmZvOiB7XHJcbiAgICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICAgIHByb2R1Y3RJbWFnZVVybCxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHByb2R1Y3RDb250ZW50LFxyXG4gICAgfSxcclxuICAgIHRleHRMaW1pdCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzRm9sZCwgc2V0SXNGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc0ljb25TaG93aW5nLCBzZXRJc0ljb25TaG93aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbdGV4dE9iaiwgc2V0VGV4dE9ial0gPSB1c2VTdGF0ZSh7IHNpbXBsZTogJycsIGRldGFpbDogJycgfSk7XHJcbiAgY29uc3QgZGV0YWlsVGV4dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRleHRPYmo7XHJcbiAgbGV0IHRyaW1tZWRUZXh0ID0gcHJvZHVjdENvbnRlbnQudHJpbSgpO1xyXG4gIHRyaW1tZWRUZXh0ID0gdHJpbW1lZFRleHQucmVwbGFjZSgnXFxuJywgJycpO1xyXG4gIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPiB0ZXh0TGltaXQpIHtcclxuICAgIGNvbnN0IHRleHRTaW1wbGUgPSB0cmltbWVkVGV4dC5zbGljZSgwLCB0ZXh0TGltaXQpO1xyXG4gICAgY29uc3QgdGV4dERldGFpbCA9IHRyaW1tZWRUZXh0LnNsaWNlKHRleHRMaW1pdCk7XHJcbiAgICB0ZXh0T2JqID0geyBzaW1wbGU6IHRleHRTaW1wbGUsIGRldGFpbDogdGV4dERldGFpbCB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZXh0T2JqID0geyBzaW1wbGU6IHRyaW1tZWRUZXh0LCBkZXRhaWw6ICcnIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCBzaG93QW5kSGlkZSA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChpc0ZvbGQpIHtcclxuICAgICAgc2V0SXNGb2xkKGZhbHNlKTtcclxuICAgICAgJChkZXRhaWxUZXh0LmN1cnJlbnQpLnNsaWRlRG93bigxMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNGb2xkKHRydWUpO1xyXG4gICAgICAkKGRldGFpbFRleHQuY3VycmVudCkuc2xpZGVVcCgxMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJQcm9kdWN0Qm94XCI+XHJcbiAgICAgIDxMaW5rIHRvPXtgL2RldGFpbC8ke2Rpc3BsYXlJbmZvSWR9YH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGhvdG9cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiLyR7cHJvZHVjdEltYWdlVXJsfVwiKWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XHJcbiAgICAgICAgICA8aDE+e3Byb2R1Y3REZXNjcmlwdGlvbn08L2gxPlxyXG4gICAgICAgICAgPGgyPntwbGFjZU5hbWV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYWluVGV4dFwiXHJcbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0ljb25TaG93aW5nKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNJY29uU2hvd2luZyhmYWxzZSk7XHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge3RleHRPYmouc2ltcGxlfVxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzRm9sZCA/ICdpbmxpbmUnIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3JlRGVzY1wiXHJcbiAgICAgICAgICAgICAgICByZWY9e2RldGFpbFRleHR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICB7dGV4dE9iai5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm4gJHtpc0ZvbGQgPyAnZm4tZG90czInIDogJ2ZuLXVwMid9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FuZEhpZGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzSWNvblNob3dpbmcgPyAnIzAwMCcgOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHA+e3RleHRPYmouc2ltcGxlfTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdEJveC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGV4dExpbWl0OiAxMDAsXHJcbn07XHJcblxyXG5Qcm9kdWN0Qm94LnByb3BUeXBlcyA9IHtcclxuICBpdGVtSW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RJbWFnZVVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICB0ZXh0TGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Qm94O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyLCB0cmFuc2Zvcm1Nb25leVVuaXQgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQgfSBmcm9tICcuLi9SZXNlcnZhdGlvbkNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICByZXNlcnZhdGlvbkluZm9JZCxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHJlc2VydmF0aW9uRGF0ZSxcclxuICAgICAgcmVzZXJ2YXRpb25OYW1lLFxyXG4gICAgICByZXNlcnZhdGlvblRlbCxcclxuICAgICAgcHJpY2VJbmZvLFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgIHByb2R1Y3RJZCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiB9ID0gdXNlQ29udGV4dChBY3Rpb25Db250ZXh0KTtcclxuICBjb25zdCByZXNlcnZhdGlvblN1bW1hcnkgPSBwcmljZUluZm9cclxuICAgIC5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgIGAke2FjY3VtfSAgICAke3ByaWNlVHlwZU1hcHBlcltjdXJyZW50LnByaWNlVHlwZU5hbWVdfSAke1xyXG4gICAgICAgIGN1cnJlbnQuY291bnRcclxuICAgICAgfSDrp6QsYDtcclxuICAgIH0sICcnKVxyXG4gICAgLnNsaWNlKDAsIC0xKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKGFjdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IG5vdGVzID0gYWN0aW9ucy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICByZXR1cm4geyBjbGljazogY29uZmlybUNhbmNlbFJlc2VydmF0aW9uKHByb2R1Y3RJZCksIGNoaWxkcmVuOiAn7Leo7IaMJyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3Jldmlld1dyaXRlJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjbGljazogYC9yZXZpZXd3cml0ZS8ke3Byb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgY2hpbGRyZW46ICfsmIjrp6TsnpAg66as67ewIOuCqOq4sOq4sCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPEJ1dHRvbkJ1bmNoIG5vdGVzPXtub3Rlc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJUaWNrZXRJbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wU2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj57YE5vLiR7U3RyaW5nKHJlc2VydmF0aW9uSW5mb0lkKS5wYWRTdGFydCg4LCAnMCcpfWB9PC9oMj5cclxuICAgICAgICA8aDE+e2Rlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snbzsoJU8L3A+XHJcbiAgICAgICAgICA8cD57cmVzZXJ2YXRpb25EYXRlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7rgrTsl608L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsnbTrpoQ8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsoITtmZTrsojtmLg8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvblRlbH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ekIOunpOyImDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGlja2V0XCI+e3Jlc2VydmF0aW9uU3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snqXshow8L3A+XHJcbiAgICAgICAgICA8cD57cGxhY2VOYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VjdGlvblwiPlxyXG4gICAgICAgIDxwPuqysOygnCDquIjslaE8L3A+XHJcbiAgICAgICAgPHA+e2Ake3RyYW5zZm9ybU1vbmV5VW5pdCh0b3RhbFByaWNlKX0g7JuQYH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y3JlYXRlQnV0dG9uKGFjdGlvbnMpfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHJlc2VydmF0aW9uSW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uVGVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRvdGFsUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcHJpY2VJbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBwcmljZVR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBSZXNlcnZlRm9ybSBmcm9tICcuLi9SZXNlcnZlRm9ybSc7XHJcbmltcG9ydCBSZXNlcnZlRGVzYyBmcm9tICcuLi9SZXNlcnZlRGVzYyc7XHJcbmltcG9ydCBNYWluSW1hZ2UgZnJvbSAnLi4vTWFpbkltYWdlJztcclxuXHJcbmNvbnN0IFJlc2VydmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBsZXQgcHJvZHVjdERhdGE7XHJcbiAgbGV0IHJlc2VydmF0aW9uRGF0ZTtcclxuICBsZXQgc3RhcnREYXRlO1xyXG4gIGxldCBlbmREYXRlO1xyXG4gIGxldCBpbWFnZVNyYztcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IHsgcmVzZXJ2ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpIH07XHJcbiAgICBkaWZmRGF5cy5zdGFydCA9IGRpZmZEYXlzLnJlc2VydmUgLSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1ICsgMSk7XHJcbiAgICBkaWZmRGF5cy5lbmQgPSBkaWZmRGF5cy5yZXNlcnZlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpO1xyXG4gICAgcmVzZXJ2YXRpb25EYXRlID0gbW9tZW50KClcclxuICAgICAgLnR6KCdBc2lhL1Nlb3VsJylcclxuICAgICAgLmFkZChkaWZmRGF5cy5yZXNlcnZlLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQgSEg6bW06c3MnKTtcclxuICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuc3RhcnQsICdkYXlzJylcclxuICAgICAgLmZvcm1hdCgnWVlZWS5NTS5ERC4oZGRkKScpO1xyXG4gICAgZW5kRGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuZW5kLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQuKGRkZCknKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZS50eXBlID09PSAnbWEnKSB7XHJcbiAgICAgICAgaW1hZ2VTcmMgPSB2YWx1ZS5zYXZlRmlsZU5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXNlcnZlQ29udGFpbmVyXCI+XHJcbiAgICAgIDxNYWluSW1hZ2Ugc3JjPXtpbWFnZVNyY30gYWx0PVwibWFpbiBpbWFnZVwiIC8+XHJcbiAgICAgIDxSZXNlcnZlRGVzY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb259XHJcbiAgICAgICAgcGxhY2U9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnBsYWNlTG90fVxyXG4gICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgIGVuZERhdGU9e2VuZERhdGV9XHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgLz5cclxuICAgICAgPFJlc2VydmVGb3JtXHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdElkfVxyXG4gICAgICAgIHJlc2VydmF0aW9uRGF0ZT17cmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcbmltcG9ydCBEZXRhaWxJbWFnZSBmcm9tICcuLi9EZXRhaWxJbWFnZSc7XHJcbmltcG9ydCBQcm9kdWN0RGVzYyBmcm9tICcuLi9Qcm9kdWN0RGVzYyc7XHJcbmltcG9ydCBFdmVudEluZm8gZnJvbSAnLi4vRXZlbnRJbmZvJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuaW1wb3J0IFJldmlld0NvbnRhaW5lciBmcm9tICcuLi9SZXZpZXdDb250YWluZXInO1xyXG5pbXBvcnQgUHJvZHVjdEluZm8gZnJvbSAnLi4vUHJvZHVjdEluZm8nO1xyXG5cclxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0RGF0YSwgc2V0UHJvZHVjdERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkaXNjb3VudEluZm8sIHNldERpc2NvdW50SW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbykge1xyXG4gICAgICBkb2N1bWVudC50aXRsZSA9IHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICB9LCBbcHJvZHVjdERhdGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRJbWFnZXMgPSBkYXRhLnByb2R1Y3RJbWFnZXMuZmlsdGVyKFxyXG4gICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS50eXBlICE9PSAndGgnLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0UHJvZHVjdERhdGEoeyAuLi5kYXRhLCBwcm9kdWN0SW1hZ2VzOiBtb2RpZmllZEltYWdlcyB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0RGF0YS5wcm9kdWN0UHJpY2VzKSB7XHJcbiAgICAgIGNvbnN0IGluZm8gPSBbXTtcclxuICAgICAgcHJvZHVjdERhdGEucHJvZHVjdFByaWNlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZS5kaXNjb3VudFJhdGUgJiYgTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgICAgaW5mby5wdXNoKFxyXG4gICAgICAgICAgICBgJHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9ICR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICB2YWx1ZS5kaXNjb3VudFJhdGUsXHJcbiAgICAgICAgICAgICl9JWAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNldERpc2NvdW50SW5mbyhpbmZvKTtcclxuICAgIH1cclxuICB9LCBbcHJvZHVjdERhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0YWlsQ29udGFpbmVyXCI+XHJcbiAgICAgIDxEZXRhaWxJbWFnZVxyXG4gICAgICAgIGltYWdlcz17cHJvZHVjdERhdGEucHJvZHVjdEltYWdlc31cclxuICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mbyAmJiBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb25cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9kdWN0RGVzY1xyXG4gICAgICAgIHRleHQ9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvICYmIHByb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3RDb250ZW50fVxyXG4gICAgICAvPlxyXG4gICAgICB7ZGlzY291bnRJbmZvLmxlbmd0aCA/IDxFdmVudEluZm8gZGlzY291bnRJbmZvPXtkaXNjb3VudEluZm99IC8+IDogJyd9XHJcbiAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWVjODAwJyxcclxuICAgICAgICAgICAgICBib3JkZXJUb3A6ICdub25lJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpY2s6IGAvcmVzZXJ2ZS8ke2Rpc3BsYXlJbmZvSWR9YCxcclxuICAgICAgICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLW5ib29raW5nLWNhbGVuZGVyMlwiIC8+XHJcbiAgICAgICAgICAgICAgICB7JyDsmIjrp6TtlZjquLAnfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgICAgPFJldmlld0NvbnRhaW5lclxyXG4gICAgICAgIGRpc3BsYXlJbmZvSWQ9e2Rpc3BsYXlJbmZvSWR9XHJcbiAgICAgICAgcmV2aWV3cz17cHJvZHVjdERhdGEuY29tbWVudHN9XHJcbiAgICAgICAgYXZlcmFnZVNjb3JlPXtwcm9kdWN0RGF0YS5hdmVyYWdlU2NvcmV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9kdWN0SW5mb1xyXG4gICAgICAgIGRpc3BsYXlJbmZvPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mb31cclxuICAgICAgICBsb2NhdGlvbkltZ1NyYz17XHJcbiAgICAgICAgICBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mb0ltYWdlICYmXHJcbiAgICAgICAgICBwcm9kdWN0RGF0YS5kaXNwbGF5SW5mb0ltYWdlLnNhdmVGaWxlTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc2VydmVySW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG5hbWUsXHJcbiAgICB0ZWxlcGhvbmUsXHJcbiAgICBlbWFpbCxcclxuICAgIHJlc2VydmF0aW9uRGF0ZSxcclxuICAgIHRvdGFsVGlja2V0LFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgICBpc1ZlcmlmaWVkTmFtZSxcclxuICAgIGlzVmVyaWZpZWRUZWwsXHJcbiAgICBpc1ZlcmlmaWVkRW1haWwsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBtYWtlQWxlcnQgPSAoaWQsIHRleHQpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFsZXJ0TWVzc2FnZVwiPnt0ZXh0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlJlc2VydmVySW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmVySGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPuyYiOunpOyekCDsoJXrs7Q8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAg7ZWE7IiY7J6F66ClXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIiBpZD1cImlucHV0UmVzZXJ2ZXJcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIOyYiOunpOyekFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25OYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2Zjeq4uOuPmVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9OQU1FJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX05BTUUnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkTmFtZVxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdOYW1lJywgJ+ydtOumhOyXkOuKlCDqs7XrsLHsnbQg7J6I7Ja07ISc64qUIOyViOuQqeuLiOuLpC4nKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFRlbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7Jew65297LKYXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uVGVsZXBob25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAxMC0wMDAwLTAwMDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfVEVMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9URUwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNWZXJpZmllZFRlbFxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdUZWwnLCAn7KCE7ZmU67KI7Zi4IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwiaW5wdXRFbWFpbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7J2066mU7J28XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25FbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ4eHh4eHhAbmF2ZXIuY29tXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX0VNQUlMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9FTUFJTCcgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJvdmVyYWxsUmVzZXJ2YXRpb25cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIHN0eWxlPXt7IGNvbG9yOiAndHJhbnNwYXJlbnQnIH19IC8+XHJcbiAgICAgICAgICAgIOyYiOunpOuCtOyaqVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2Ake3Jlc2VydmF0aW9uRGF0ZX0sIOy0nSAke3RvdGFsVGlja2V0feunpGB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkRW1haWxcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nRW1haWwnLCAn7J2066mU7J28IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlckluZm8ucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRvdGFsVGlja2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZE5hbWU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZFRlbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlckluZm87XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RDb250YWluZXIgZnJvbSAnLi4vUHJvZHVjdENvbnRhaW5lcic7XHJcblxyXG5jb25zdCBNYWluVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGxlZnRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMCk7XHJcbiAgY29uc3QgcmlnaHRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodiwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMSk7XHJcblxyXG4gIHJldHVybiBwcm9kdWN0cy5sZW5ndGggPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5WaWV3XCI+XHJcbiAgICAgIDxQcm9kdWN0Q29udGFpbmVyIGNsYXNzTmFtZT1cImxlZnRcIj57bGVmdFByb2R1Y3RzfTwvUHJvZHVjdENvbnRhaW5lcj5cclxuICAgICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPVwicmlnaHRcIj57cmlnaHRQcm9kdWN0c308L1Byb2R1Y3RDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNYWluVmlld1wiIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5WaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICBwcm9kdWN0czogW10sXHJcbn07XHJcblxyXG5NYWluVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5WaWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG5pbXBvcnQgRGV0YWlsQ29udGFpbmVyIGZyb20gJy4uL0RldGFpbENvbnRhaW5lcic7XHJcbmltcG9ydCBSZXNlcnZlQ29udGFpbmVyIGZyb20gJy4uL1Jlc2VydmVDb250YWluZXInO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25Db250YWluZXIgZnJvbSAnLi4vUmVzZXJ2YXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgUHJvbW90aW9uSW1hZ2UgZnJvbSAnLi4vUHJvbW90aW9uSW1hZ2UnO1xyXG5pbXBvcnQgUmV2aWV3RWRpdCBmcm9tICcuLi9SZXZpZXdFZGl0JztcclxuaW1wb3J0IFJldmlld1Byb3ZpZGVyIGZyb20gJy4uL1Jldmlld1Byb3ZpZGVyJztcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi4vTWFpbkNvbnRhaW5lcic7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RldGFpbC86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgPE5hdkJhciBpc1RyYW5zcGFyZW50IC8+XHJcbiAgICAgICAgICA8RGV0YWlsQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9ib29raW5nbG9naW5cIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9teXJlc2VydmF0aW9uXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISxIOuQqCAqL31cclxuICAgICAgICAgIDxOYXZCYXIgaXNMb2dvdXRhYmxlIC8+XHJcbiAgICAgICAgICA8UmVzZXJ2YXRpb25Db250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc2VydmUvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8UmVzZXJ2ZUNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmV2aWV3LzpkaXNwbGF5SW5mb0lkXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISx65CoICovfVxyXG4gICAgICAgICAgPE5hdkJhciBpc01haW49e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgPFJldmlld1Byb3ZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXZpZXd3cml0ZS86cHJvZHVjdElkXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICB7LyogcmV2aWV3RWRpdOqwgCDrr7jsmYQgKi99XHJcbiAgICAgICAgICA8UmV2aWV3RWRpdCAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICA8UHJvbW90aW9uSW1hZ2UgLz5cclxuICAgICAgICAgIDxNYWluQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgIHsvKiA0MDQgbm90IGZvdW5k7J246rG4IOuCmO2DgOuCtOqyjCAqL31cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIDwvQnJvd3NlclJvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBSZXZpZXdQcm92aWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGxldCBwcm9kdWN0RGF0YTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgIGRpc3BsYXlJbmZvSWQ9e2Rpc3BsYXlJbmZvSWR9XHJcbiAgICAgIGF2ZXJhZ2VTY29yZT17cHJvZHVjdERhdGEuYXZlcmFnZVNjb3JlfVxyXG4gICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgaXNCcmllZj17ZmFsc2V9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSW1hZ2VUaXRsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGVncmVlLCBpbWFnZUxlbiwgdGl0bGUsIGxlZnRTY3JvbGwsIHJpZ2h0U2Nyb2xsIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSW1hZ2VUaXRsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50aW5nXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmlnaHRcIj57ZGVncmVlICsgMX08L3NwYW4+XHJcbiAgICAgICAgICB7YCAvICR7aW1hZ2VMZW59YH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAge2ltYWdlTGVuID4gMSA/IChcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYmFja3dhcmQyXCIgb25DbGljaz17bGVmdFNjcm9sbH0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICcnXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAge2ltYWdlTGVuID4gMSA/IChcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tZm9yd2FyZDJcIiBvbkNsaWNrPXtyaWdodFNjcm9sbH0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICcnXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIiAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZVRpdGxlLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbWFnZUxlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbGVmdFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmlnaHRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUaXRsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVGlja2V0SGVhZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YFRpY2tldEhlYWQgJHtpc0dyZWVuID8gJ2dyZWVuJyA6ICdncmV5J31gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRMZWZ0XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRNaWRkbGVcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fY2hlY2syXCIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldFJpZ2h0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRIZWFkLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBpc0dyZWVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SGVhZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUT1MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlzQ2hlY2tlZCwgZGlzcGF0Y2ggfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0NvbGxlY3Rpb25Gb2xkLCBzZXRJc0NvbGxlY3Rpb25Gb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc09mZmVyRm9sZCwgc2V0SXNPZmZlckZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGZvbGRUZXh0ID0gJ+ygkeq4sCA8aSBjbGFzcz1cImZuIGZuLXVwMlwiPjwvaT4nO1xyXG4gIGNvbnN0IHNob3dUZXh0ID0gJ+uztOq4sCA8aSBjbGFzcz1cImZuIGZuLWRvd24yXCI+PC9pPic7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbGxlY3Rpb25DbGljayA9ICgpID0+IHtcclxuICAgIGlmIChpc0NvbGxlY3Rpb25Gb2xkKSB7XHJcbiAgICAgICQoJy5jb2xsZWN0aW9uVXNlVGVybScpLnNsaWRlRG93bigpO1xyXG4gICAgICBzZXRJc0NvbGxlY3Rpb25Gb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5jb2xsZWN0aW9uVXNlVGVybScpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNDb2xsZWN0aW9uRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPZmZlckNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzT2ZmZXJGb2xkKSB7XHJcbiAgICAgICQoJy5vZmZlclRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNPZmZlckZvbGQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm9mZmVyVGVybScpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNPZmZlckZvbGQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcml0bGNlIGNsYXNzTmFtZT1cIlRPU1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbEFncmVlbWVudFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIG5hbWU9XCJUT1NDaGVja1wiXHJcbiAgICAgICAgICBpZD1cIlRPU0NoZWNrXCJcclxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX1RPUycsIGNoZWNrZWQgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJUT1NDaGVja1wiPuydtOyaqeyekCDslb3qtIAg7KCE7LK064+Z7J2YPC9sYWJlbD5cclxuICAgICAgICA8cD7tlYTsiJgg64+Z7J2YPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19hcnJfaXBjMlwiIC8+XHJcbiAgICAgICAgICDqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2YXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbGxlY3Rpb25Vc2VBZ3JlZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVDb2xsZWN0aW9uQ2xpY2t9PlxyXG4gICAgICAgICAge2lzQ29sbGVjdGlvbkZvbGQgPyBzaG93VGV4dCA6IGZvbGRUZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sbGVjdGlvblVzZVRlcm1cIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzQ29sbGVjdGlvbkZvbGQgPyAnbm9uZScgOiAnYmxvY2snIH19XHJcbiAgICAgID5cclxuICAgICAgICAmbHQ76rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmCZndDtcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAxLiDsiJjsp5Htla3rqqkgOiBb7ZWE7IiYXSDsnbTrpoQsIOyXsOudveyymCwgW+yEoO2DnV0g7J2066mU7J287KO87IaMXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMi4g7IiY7KeRIOuwjyDsnbTsmqnrqqnsoIEgOiDsgqzsl4XsnpDtmozsm5Dqs7wg7JiI7JW97J207Jqp7J6Q7J2YIOybkO2ZnO2VnCDqsbDrnpgg7KeE7ZaJLFxyXG4gICAgICAgIOqzoOqwneyDgeuLtCwg67aI66eM7LKY66asIOuTsSDrr7zsm5Ag7LKY66asLCDrtoTsn4HsobDsoJUg7ZW06rKw7J2EIOychO2VnCDquLDroZ3rs7TsobQsIOuEpOydtOuyhFxyXG4gICAgICAgIOyYiOyVvSDsnbTsmqkg7ZuEIOumrOu3sOyekeyEseyXkCDrlLDrpbgg64Sk7J2067KE7Y6Y7J20IO2PrOyduO2KuCDsp4DquIkg67CPIOq0gOugqCDslYjrgrRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAzLiDrs7TqtIDquLDqsIRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAtIO2ajOybkO2DiO2HtCDrk7Eg6rCc7J247KCV67O0IOydtOyaqeuqqeyggSDri6zshLEg7Iuc6rmM7KeAIOuztOq0gFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIC0g64uoLCDsg4HrspUg67CPIOKAmOyghOyekOyDgeqxsOuemCDrk7Hsl5DshJzsnZgg7IaM67mE7J6QIOuztO2YuOyXkCDqtIDtlZwg67KV66Wg4oCZIOuTsSDqtIDroKhcclxuICAgICAgICDrspXroLnsl5Ag7J2Y7ZWY7JesIOydvOyglSDquLDqsIQg67O06rSA7J20IO2VhOyalO2VnCDqsr3smrDsl5DripQg7ZW064u5IOq4sOqwhCDrj5nslYgg67O06rSA7ZWoXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNC4g64+Z7J2YIOqxsOu2gOq2jCDrk7Hsl5Ag64yA7ZWcIOqzoOyngDog7KCV67O07KO87LK064qUIOqwnOyduOygleuztOydmCDsiJjsp5Eg67CPIOydtOyaqSDrj5nsnZjrpbxcclxuICAgICAgICDqsbDrtoDtlaAg6raM66as6rCAIOyeiOycvOuCmCwg7J20IOqyveyasCDsg4Htkogg67CPIOyEnOu5hOyKpCDsmIjslb3snbQg7KCc7ZWc65CgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19hcnJfaXBjMlwiIC8+XHJcbiAgICAgICAgICDqsJzsnbjsoJXrs7Qg7KCcM+yekCDsoJzqs7Ug64+Z7J2YXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm9mZmVyQWdyZWVtZW50XCIgb25DbGljaz17aGFuZGxlT2ZmZXJDbGlja30+XHJcbiAgICAgICAgICB7aXNPZmZlckZvbGQgPyBzaG93VGV4dCA6IGZvbGRUZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib2ZmZXJUZXJtXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc09mZmVyRm9sZCA/ICdub25lJyA6ICdibG9jaycgfX1cclxuICAgICAgPlxyXG4gICAgICAgICZsdDvqsJzsnbjsoJXrs7Qg7KCcM+yekCDsoJzqs7Ug64+Z7J2YJmd0O1xyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDEuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6QIDog66+465SU7Ja07JWk7JWE7Yq4XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMi4g7KCc6rO17ZWY64qUIOqwnOyduOygleuztCDtla3rqqkgOiBb7ZWE7IiYXSDrhKTsnbTrsoQg7JWE7J2065SULCDsnbTrpoQsIOyXsOudveyymCBb7ISg7YOdXVxyXG4gICAgICAgIOydtOuplOydvCDso7zshoxcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAzLiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekOydmCDsnbTsmqnrqqnsoIEgOiDsgqzsl4XsnpDtmozsm5Dqs7wg7JiI7JW97J207Jqp7J6Q7J2YIOybkO2ZnO2VnFxyXG4gICAgICAgIOqxsOuemCDsp4TtloksIOqzoOqwneyDgeuLtCwg67aI66eM7LKY66asIOuTsSDrr7zsm5Ag7LKY66asLCDshJzruYTsiqQg7J207Jqp7JeQIOuUsOuluCDshKTrrLjsobDsgqxcclxuICAgICAgICDrsI8g7Zic7YOdIOygnOqztSwg67aE7J+B7KGw7KCVIO2VtOqysOydhCDsnITtlZwg6riw66Gd67O07KG0XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNC4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpDsnZgg6rCc7J247KCV67O0IOuztOycoCDrsI8g7J207Jqp6riw6rCEIDog6rCc7J247KCV67O0XHJcbiAgICAgICAg7J207Jqp66qp7KCBIOuLrOyEsSDsi5wg6rmM7KeAIOuztOq0gO2VqeuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA1LiDrj5nsnZgg6rGw67aA6raMIOuTseyXkCDrjIDtlZwg6rOg7KeAIDog7KCV67O07KO87LK064qUIOqwnOyduOygleuztCDsoJzqs7Ug64+Z7J2Y66W8IOqxsOu2gO2VoFxyXG4gICAgICAgIOq2jOumrOqwgCDsnojsnLzrgpgsIOydtCDqsr3smrAg7IOB7ZKIIOuwjyDshJzruYTsiqQg7JiI7JW97J20IOygnO2VnOuQoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2FyaXRsY2U+XHJcbiAgKTtcclxufTtcclxuXHJcblRPUy5wcm9wVHlwZXMgPSB7XHJcbiAgaXNDaGVja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVE9TO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFRpY2tldEluZm8gZnJvbSAnLi4vVGlja2V0SW5mbyc7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIGFjdGlvbnMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8b2wgY2xhc3NOYW1lPVwiVGlja2V0SW5mb0xpc3RcIj5cclxuICAgICAge2luZm9zLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxUaWNrZXRJbmZvIGtleT17aW5kZXh9IGluZm89e3ZhbHVlfSBhY3Rpb25zPXthY3Rpb25zfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbmZvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mb0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciwgdHJhbnNmb3JtTW9uZXlVbml0IH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZURlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBwbGFjZSwgc3RhcnREYXRlLCBlbmREYXRlLCBwcm9kdWN0UHJpY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJpY2VUZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJpY2VMaXN0ID0gcHJvZHVjdFByaWNlcy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9ICR7dHJhbnNmb3JtTW9uZXlVbml0KFxyXG4gICAgICAgIHZhbHVlLnByaWNlLFxyXG4gICAgICApfeybkGA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcmljZUxpc3Quam9pbignIC8gJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc2VydmVEZXNjXCI+XHJcbiAgICAgIDxoMj57ZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAge3BsYWNlfVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtgJHtzdGFydERhdGV9IH4gJHtlbmREYXRlfWB9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgyPuyalOq4iDwvaDI+XHJcbiAgICAgIDxwPntwcmljZVRleHQoKX08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmVEZXNjLnByb3BUeXBlcyA9IHtcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHBsYWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZURlc2M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwic3ByX2JpIHR4dF9sb2dvXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJjb25zdCB0cmFuc2Zvcm1Nb25leVVuaXQgPSAobnVtKSA9PiB7XHJcbiAgbGV0IHRyYW5zZm9ybWVkID0gJyc7XHJcbiAgbnVtID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgbnVtTGVuID0gbnVtLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1MZW47IGkrKykge1xyXG4gICAgaWYgKGkgPiAzICYmIGkgJSAzID09PSAxKSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkID0gYCwke3RyYW5zZm9ybWVkfWA7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm1lZCA9IG51bS5jaGFyQXQobnVtTGVuIC0gaSkgKyB0cmFuc2Zvcm1lZDtcclxuICB9XHJcbiAgcmV0dXJuIHRyYW5zZm9ybWVkO1xyXG59O1xyXG5cclxuY29uc3QgcHJpY2VUeXBlTWFwcGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgcHJpY2VUeXBlID0ge1xyXG4gICAgQTogJ+yEseyduCcsXHJcbiAgICBZOiAn7LKt7IaM64WEJyxcclxuICAgIEI6ICfsnKDslYQnLFxyXG4gICAgUzogJ+yFi+2KuCcsXHJcbiAgICBEOiAn7J6l7JWg7J24JyxcclxuICAgIEM6ICfsp4Dsl63so7zrr7wnLFxyXG4gICAgRTogJ+yWtOyWvOumrOuyhOuTnCcsXHJcbiAgICBWOiAnVklQJyxcclxuICAgIFI6ICdS7ISdJyxcclxuICB9O1xyXG4gIHJldHVybiBwcmljZVR5cGVbdmFsdWVdO1xyXG59O1xyXG5cclxuY29uc3QgdmFsaWRJbWFnZVR5cGUgPSAoaW1hZ2UpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL2pwZyddLmluZGV4T2YoaW1hZ2UpID4gLTE7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmNvbnN0IHJlc2l6ZUVuZCA9IChmdW5jKSA9PiB7XHJcbiAgbGV0IHRpbWVyO1xyXG4gIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jLCAxMDAsIGV2ZW50KTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdHJhbnNmb3JtTW9uZXlVbml0LCBwcmljZVR5cGVNYXBwZXIsIHZhbGlkSW1hZ2VUeXBlLCByZXNpemVFbmQgfTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiSy90Y1wiLFxuXHRcIi4vYWYuanNcIjogXCJLL3RjXCIsXG5cdFwiLi9hclwiOiBcImpuTzRcIixcblx0XCIuL2FyLWR6XCI6IFwibzFiRVwiLFxuXHRcIi4vYXItZHouanNcIjogXCJvMWJFXCIsXG5cdFwiLi9hci1rd1wiOiBcIlFqNEpcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiUWo0SlwiLFxuXHRcIi4vYXItbHlcIjogXCJIUDNoXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIkhQM2hcIixcblx0XCIuL2FyLW1hXCI6IFwiQ29SSlwiLFxuXHRcIi4vYXItbWEuanNcIjogXCJDb1JKXCIsXG5cdFwiLi9hci1zYVwiOiBcImdqQ1RcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiZ2pDVFwiLFxuXHRcIi4vYXItdG5cIjogXCJiWU02XCIsXG5cdFwiLi9hci10bi5qc1wiOiBcImJZTTZcIixcblx0XCIuL2FyLmpzXCI6IFwiam5PNFwiLFxuXHRcIi4vYXpcIjogXCJTRnhXXCIsXG5cdFwiLi9hei5qc1wiOiBcIlNGeFdcIixcblx0XCIuL2JlXCI6IFwiSDhFRFwiLFxuXHRcIi4vYmUuanNcIjogXCJIOEVEXCIsXG5cdFwiLi9iZ1wiOiBcImhLcnNcIixcblx0XCIuL2JnLmpzXCI6IFwiaEtyc1wiLFxuXHRcIi4vYm1cIjogXCJwL3JMXCIsXG5cdFwiLi9ibS5qc1wiOiBcInAvckxcIixcblx0XCIuL2JuXCI6IFwia0VPYVwiLFxuXHRcIi4vYm4uanNcIjogXCJrRU9hXCIsXG5cdFwiLi9ib1wiOiBcIjBtbytcIixcblx0XCIuL2JvLmpzXCI6IFwiMG1vK1wiLFxuXHRcIi4vYnJcIjogXCJhSWRmXCIsXG5cdFwiLi9ici5qc1wiOiBcImFJZGZcIixcblx0XCIuL2JzXCI6IFwiSlZTSlwiLFxuXHRcIi4vYnMuanNcIjogXCJKVlNKXCIsXG5cdFwiLi9jYVwiOiBcIjF4WjRcIixcblx0XCIuL2NhLmpzXCI6IFwiMXhaNFwiLFxuXHRcIi4vY3NcIjogXCJQQTJyXCIsXG5cdFwiLi9jcy5qc1wiOiBcIlBBMnJcIixcblx0XCIuL2N2XCI6IFwiQSt4YVwiLFxuXHRcIi4vY3YuanNcIjogXCJBK3hhXCIsXG5cdFwiLi9jeVwiOiBcImw1ZXBcIixcblx0XCIuL2N5LmpzXCI6IFwibDVlcFwiLFxuXHRcIi4vZGFcIjogXCJEeFF2XCIsXG5cdFwiLi9kYS5qc1wiOiBcIkR4UXZcIixcblx0XCIuL2RlXCI6IFwidEdsWFwiLFxuXHRcIi4vZGUtYXRcIjogXCJzK3VrXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcInMrdWtcIixcblx0XCIuL2RlLWNoXCI6IFwidTNHSVwiLFxuXHRcIi4vZGUtY2guanNcIjogXCJ1M0dJXCIsXG5cdFwiLi9kZS5qc1wiOiBcInRHbFhcIixcblx0XCIuL2R2XCI6IFwiV1lyalwiLFxuXHRcIi4vZHYuanNcIjogXCJXWXJqXCIsXG5cdFwiLi9lbFwiOiBcImpVZVlcIixcblx0XCIuL2VsLmpzXCI6IFwialVlWVwiLFxuXHRcIi4vZW4tU0dcIjogXCJ6YXZFXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcInphdkVcIixcblx0XCIuL2VuLWF1XCI6IFwiRG12aVwiLFxuXHRcIi4vZW4tYXUuanNcIjogXCJEbXZpXCIsXG5cdFwiLi9lbi1jYVwiOiBcIk9JWWlcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiT0lZaVwiLFxuXHRcIi4vZW4tZ2JcIjogXCJPYWE3XCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIk9hYTdcIixcblx0XCIuL2VuLWllXCI6IFwiNGRPd1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCI0ZE93XCIsXG5cdFwiLi9lbi1pbFwiOiBcImN6TW9cIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiY3pNb1wiLFxuXHRcIi4vZW4tbnpcIjogXCJiMUR5XCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcImIxRHlcIixcblx0XCIuL2VvXCI6IFwiWmR1b1wiLFxuXHRcIi4vZW8uanNcIjogXCJaZHVvXCIsXG5cdFwiLi9lc1wiOiBcImlZdUxcIixcblx0XCIuL2VzLWRvXCI6IFwiQ2p6VFwiLFxuXHRcIi4vZXMtZG8uanNcIjogXCJDanpUXCIsXG5cdFwiLi9lcy11c1wiOiBcIlZjbHFcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiVmNscVwiLFxuXHRcIi4vZXMuanNcIjogXCJpWXVMXCIsXG5cdFwiLi9ldFwiOiBcIjdCakNcIixcblx0XCIuL2V0LmpzXCI6IFwiN0JqQ1wiLFxuXHRcIi4vZXVcIjogXCJEL0pNXCIsXG5cdFwiLi9ldS5qc1wiOiBcIkQvSk1cIixcblx0XCIuL2ZhXCI6IFwiamZTQ1wiLFxuXHRcIi4vZmEuanNcIjogXCJqZlNDXCIsXG5cdFwiLi9maVwiOiBcImdla0JcIixcblx0XCIuL2ZpLmpzXCI6IFwiZ2VrQlwiLFxuXHRcIi4vZm9cIjogXCJCeUY0XCIsXG5cdFwiLi9mby5qc1wiOiBcIkJ5RjRcIixcblx0XCIuL2ZyXCI6IFwibnlZY1wiLFxuXHRcIi4vZnItY2FcIjogXCIyZmpuXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIjJmam5cIixcblx0XCIuL2ZyLWNoXCI6IFwiRGtreVwiLFxuXHRcIi4vZnItY2guanNcIjogXCJEa2t5XCIsXG5cdFwiLi9mci5qc1wiOiBcIm55WWNcIixcblx0XCIuL2Z5XCI6IFwiY1JpeFwiLFxuXHRcIi4vZnkuanNcIjogXCJjUml4XCIsXG5cdFwiLi9nYVwiOiBcIlVTQ3hcIixcblx0XCIuL2dhLmpzXCI6IFwiVVNDeFwiLFxuXHRcIi4vZ2RcIjogXCI5clJpXCIsXG5cdFwiLi9nZC5qc1wiOiBcIjlyUmlcIixcblx0XCIuL2dsXCI6IFwiaUVEZFwiLFxuXHRcIi4vZ2wuanNcIjogXCJpRURkXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIkRLcitcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiREtyK1wiLFxuXHRcIi4vZ3VcIjogXCI0TVYzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIjRNVjNcIixcblx0XCIuL2hlXCI6IFwieDZwSFwiLFxuXHRcIi4vaGUuanNcIjogXCJ4NnBIXCIsXG5cdFwiLi9oaVwiOiBcIjNFMXJcIixcblx0XCIuL2hpLmpzXCI6IFwiM0UxclwiLFxuXHRcIi4vaHJcIjogXCJTNmxuXCIsXG5cdFwiLi9oci5qc1wiOiBcIlM2bG5cIixcblx0XCIuL2h1XCI6IFwiV3hSbFwiLFxuXHRcIi4vaHUuanNcIjogXCJXeFJsXCIsXG5cdFwiLi9oeS1hbVwiOiBcIjFyWXlcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiMXJZeVwiLFxuXHRcIi4vaWRcIjogXCJVRGhSXCIsXG5cdFwiLi9pZC5qc1wiOiBcIlVEaFJcIixcblx0XCIuL2lzXCI6IFwiQlZnM1wiLFxuXHRcIi4vaXMuanNcIjogXCJCVmczXCIsXG5cdFwiLi9pdFwiOiBcImJwaWhcIixcblx0XCIuL2l0LWNoXCI6IFwiYnhLWFwiLFxuXHRcIi4vaXQtY2guanNcIjogXCJieEtYXCIsXG5cdFwiLi9pdC5qc1wiOiBcImJwaWhcIixcblx0XCIuL2phXCI6IFwiQjU1TlwiLFxuXHRcIi4vamEuanNcIjogXCJCNTVOXCIsXG5cdFwiLi9qdlwiOiBcInRVQ3ZcIixcblx0XCIuL2p2LmpzXCI6IFwidFVDdlwiLFxuXHRcIi4va2FcIjogXCJJQnRaXCIsXG5cdFwiLi9rYS5qc1wiOiBcIklCdFpcIixcblx0XCIuL2trXCI6IFwiYlhtN1wiLFxuXHRcIi4va2suanNcIjogXCJiWG03XCIsXG5cdFwiLi9rbVwiOiBcIjZCMFlcIixcblx0XCIuL2ttLmpzXCI6IFwiNkIwWVwiLFxuXHRcIi4va25cIjogXCJQcEl3XCIsXG5cdFwiLi9rbi5qc1wiOiBcIlBwSXdcIixcblx0XCIuL2tvXCI6IFwiSXZpK1wiLFxuXHRcIi4va28uanNcIjogXCJJdmkrXCIsXG5cdFwiLi9rdVwiOiBcIkpDRi9cIixcblx0XCIuL2t1LmpzXCI6IFwiSkNGL1wiLFxuXHRcIi4va3lcIjogXCJsZ250XCIsXG5cdFwiLi9reS5qc1wiOiBcImxnbnRcIixcblx0XCIuL2xiXCI6IFwiUkF3UVwiLFxuXHRcIi4vbGIuanNcIjogXCJSQXdRXCIsXG5cdFwiLi9sb1wiOiBcInNwM3pcIixcblx0XCIuL2xvLmpzXCI6IFwic3AzelwiLFxuXHRcIi4vbHRcIjogXCJKdmxXXCIsXG5cdFwiLi9sdC5qc1wiOiBcIkp2bFdcIixcblx0XCIuL2x2XCI6IFwidVh3SVwiLFxuXHRcIi4vbHYuanNcIjogXCJ1WHdJXCIsXG5cdFwiLi9tZVwiOiBcIktUejBcIixcblx0XCIuL21lLmpzXCI6IFwiS1R6MFwiLFxuXHRcIi4vbWlcIjogXCJhSXNuXCIsXG5cdFwiLi9taS5qc1wiOiBcImFJc25cIixcblx0XCIuL21rXCI6IFwiYVFrVVwiLFxuXHRcIi4vbWsuanNcIjogXCJhUWtVXCIsXG5cdFwiLi9tbFwiOiBcIkF2dllcIixcblx0XCIuL21sLmpzXCI6IFwiQXZ2WVwiLFxuXHRcIi4vbW5cIjogXCJsWXRRXCIsXG5cdFwiLi9tbi5qc1wiOiBcImxZdFFcIixcblx0XCIuL21yXCI6IFwiT2IwWlwiLFxuXHRcIi4vbXIuanNcIjogXCJPYjBaXCIsXG5cdFwiLi9tc1wiOiBcIjYrUUJcIixcblx0XCIuL21zLW15XCI6IFwiWkFNUFwiLFxuXHRcIi4vbXMtbXkuanNcIjogXCJaQU1QXCIsXG5cdFwiLi9tcy5qc1wiOiBcIjYrUUJcIixcblx0XCIuL210XCI6IFwiRzBVeVwiLFxuXHRcIi4vbXQuanNcIjogXCJHMFV5XCIsXG5cdFwiLi9teVwiOiBcImhvbkZcIixcblx0XCIuL215LmpzXCI6IFwiaG9uRlwiLFxuXHRcIi4vbmJcIjogXCJiT010XCIsXG5cdFwiLi9uYi5qc1wiOiBcImJPTXRcIixcblx0XCIuL25lXCI6IFwiT2prVFwiLFxuXHRcIi4vbmUuanNcIjogXCJPamtUXCIsXG5cdFwiLi9ubFwiOiBcIitzMGdcIixcblx0XCIuL25sLWJlXCI6IFwiMnlrdlwiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIyeWt2XCIsXG5cdFwiLi9ubC5qc1wiOiBcIitzMGdcIixcblx0XCIuL25uXCI6IFwidUV5ZVwiLFxuXHRcIi4vbm4uanNcIjogXCJ1RXllXCIsXG5cdFwiLi9wYS1pblwiOiBcIjgvK1JcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiOC8rUlwiLFxuXHRcIi4vcGxcIjogXCJqVmRDXCIsXG5cdFwiLi9wbC5qc1wiOiBcImpWZENcIixcblx0XCIuL3B0XCI6IFwiOG1CRFwiLFxuXHRcIi4vcHQtYnJcIjogXCIwdFJrXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIjB0UmtcIixcblx0XCIuL3B0LmpzXCI6IFwiOG1CRFwiLFxuXHRcIi4vcm9cIjogXCJseXhvXCIsXG5cdFwiLi9yby5qc1wiOiBcImx5eG9cIixcblx0XCIuL3J1XCI6IFwibFh6b1wiLFxuXHRcIi4vcnUuanNcIjogXCJsWHpvXCIsXG5cdFwiLi9zZFwiOiBcIlo0UU1cIixcblx0XCIuL3NkLmpzXCI6IFwiWjRRTVwiLFxuXHRcIi4vc2VcIjogXCIvLzl3XCIsXG5cdFwiLi9zZS5qc1wiOiBcIi8vOXdcIixcblx0XCIuL3NpXCI6IFwiN2FWOVwiLFxuXHRcIi4vc2kuanNcIjogXCI3YVY5XCIsXG5cdFwiLi9za1wiOiBcImUrYWVcIixcblx0XCIuL3NrLmpzXCI6IFwiZSthZVwiLFxuXHRcIi4vc2xcIjogXCJnVlZLXCIsXG5cdFwiLi9zbC5qc1wiOiBcImdWVktcIixcblx0XCIuL3NxXCI6IFwieVBNc1wiLFxuXHRcIi4vc3EuanNcIjogXCJ5UE1zXCIsXG5cdFwiLi9zclwiOiBcInp4NlNcIixcblx0XCIuL3NyLWN5cmxcIjogXCJFK2xWXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiRStsVlwiLFxuXHRcIi4vc3IuanNcIjogXCJ6eDZTXCIsXG5cdFwiLi9zc1wiOiBcIlVyMURcIixcblx0XCIuL3NzLmpzXCI6IFwiVXIxRFwiLFxuXHRcIi4vc3ZcIjogXCJYNzA5XCIsXG5cdFwiLi9zdi5qc1wiOiBcIlg3MDlcIixcblx0XCIuL3N3XCI6IFwiZE53QVwiLFxuXHRcIi4vc3cuanNcIjogXCJkTndBXCIsXG5cdFwiLi90YVwiOiBcIlBlVVdcIixcblx0XCIuL3RhLmpzXCI6IFwiUGVVV1wiLFxuXHRcIi4vdGVcIjogXCJYTHZOXCIsXG5cdFwiLi90ZS5qc1wiOiBcIlhMdk5cIixcblx0XCIuL3RldFwiOiBcIlYyeDlcIixcblx0XCIuL3RldC5qc1wiOiBcIlYyeDlcIixcblx0XCIuL3RnXCI6IFwiT3h2NlwiLFxuXHRcIi4vdGcuanNcIjogXCJPeHY2XCIsXG5cdFwiLi90aFwiOiBcIkVPZ1dcIixcblx0XCIuL3RoLmpzXCI6IFwiRU9nV1wiLFxuXHRcIi4vdGwtcGhcIjogXCJEemkwXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIkR6aTBcIixcblx0XCIuL3RsaFwiOiBcInozVmRcIixcblx0XCIuL3RsaC5qc1wiOiBcInozVmRcIixcblx0XCIuL3RyXCI6IFwiRG9IclwiLFxuXHRcIi4vdHIuanNcIjogXCJEb0hyXCIsXG5cdFwiLi90emxcIjogXCJ6MUZDXCIsXG5cdFwiLi90emwuanNcIjogXCJ6MUZDXCIsXG5cdFwiLi90em1cIjogXCJ3UWs5XCIsXG5cdFwiLi90em0tbGF0blwiOiBcInRUM0pcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwidFQzSlwiLFxuXHRcIi4vdHptLmpzXCI6IFwid1FrOVwiLFxuXHRcIi4vdWctY25cIjogXCJZUmV4XCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIllSZXhcIixcblx0XCIuL3VrXCI6IFwicmFMclwiLFxuXHRcIi4vdWsuanNcIjogXCJyYUxyXCIsXG5cdFwiLi91clwiOiBcIlVwUVdcIixcblx0XCIuL3VyLmpzXCI6IFwiVXBRV1wiLFxuXHRcIi4vdXpcIjogXCJMb3hvXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiQVE2OFwiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIkFRNjhcIixcblx0XCIuL3V6LmpzXCI6IFwiTG94b1wiLFxuXHRcIi4vdmlcIjogXCJLU0Y4XCIsXG5cdFwiLi92aS5qc1wiOiBcIktTRjhcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiL1g1dlwiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIvWDV2XCIsXG5cdFwiLi95b1wiOiBcImZ6UGdcIixcblx0XCIuL3lvLmpzXCI6IFwiZnpQZ1wiLFxuXHRcIi4vemgtY25cIjogXCJYRHBnXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIlhEcGdcIixcblx0XCIuL3poLWhrXCI6IFwiU2F0T1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCJTYXRPXCIsXG5cdFwiLi96aC10d1wiOiBcImtPcE5cIixcblx0XCIuL3poLXR3LmpzXCI6IFwia09wTlwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJSbmhaXCI7IiwiLy8gYnV0dG9uIOu2gOu2hCBidXR0b25idW5jaOuhnFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBJbnB1dFRpY2tldCBmcm9tICcuLi9JbnB1dFRpY2tldCc7XHJcbmltcG9ydCBSZXNlcnZlckluZm8gZnJvbSAnLi4vUmVzZXJ2ZXJJbmZvJztcclxuaW1wb3J0IFRPUyBmcm9tICcuLi9UT1MnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gKGxlbmd0aCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aWNrZXRzOiBBcnJheShsZW5ndGgpLmZpbGwoMCksXHJcbiAgICBuYW1lOiAnJyxcclxuICAgIHRlbGVwaG9uZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBpc1ZlcmlmaWVkTmFtZTogZmFsc2UsXHJcbiAgICBpc1ZlcmlmaWVkVGVsOiBmYWxzZSxcclxuICAgIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UsXHJcbiAgICBpc1RPU0NoZWNrZWQ6IGZhbHNlLFxyXG4gICAgc3VibWl0OiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnREVDUkVNRU5UJzpcclxuICAgICAgY29uc3QgbW9kaWZpZWREZWMgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgIG1vZGlmaWVkRGVjLnRpY2tldHNbYWN0aW9uLndoZXJlXSA9IG1vZGlmaWVkRGVjLnRpY2tldHNbYWN0aW9uLndoZXJlXSAtIDE7XHJcbiAgICAgIHJldHVybiBtb2RpZmllZERlYztcclxuICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkSW5jID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICBtb2RpZmllZEluYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gPSBtb2RpZmllZEluYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gKyAxO1xyXG4gICAgICByZXR1cm4gbW9kaWZpZWRJbmM7XHJcbiAgICBjYXNlICdDSEFOR0VfTkFNRSc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9URUwnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGVsZXBob25lOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9FTUFJTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbWFpbDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlICdDSEFOR0VfVE9TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVE9TQ2hlY2tlZDogYWN0aW9uLmNoZWNrZWQgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9OQU1FJzpcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKG5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWROYW1lOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgvXFxzLy50ZXN0KG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWROYW1lOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogdHJ1ZSB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX1RFTCc6XHJcbiAgICAgIGNvbnN0IHsgdGVsZXBob25lIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKHRlbGVwaG9uZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZWxSZSA9IC8wXFxkezJ9LVsxLTldXFxkezIsM30tXFxkezR9LztcclxuICAgICAgaWYgKHRlbFJlLnRlc3QodGVsZXBob25lKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IGZhbHNlIH07XHJcbiAgICBjYXNlICdWRVJJRllfRU1BSUwnOlxyXG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKGVtYWlsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZW1haWxSZSA9IC9bYS16QS1aXVxcd3syLH1AW2EtekEtWl17Myx9XFwuW2EtekEtWl17Mix9LztcclxuICAgICAgaWYgKGVtYWlsUmUudGVzdChlbWFpbCkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9TVUJNSVQnOlxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdGlja2V0cyxcclxuICAgICAgICBpc1ZlcmlmaWVkTmFtZSxcclxuICAgICAgICBpc1ZlcmlmaWVkVGVsLFxyXG4gICAgICAgIGlzVmVyaWZpZWRFbWFpbCxcclxuICAgICAgICBpc1RPU0NoZWNrZWQsXHJcbiAgICAgIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRpY2tldHMuc29tZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHZhbHVlID4gMDtcclxuICAgICAgICB9KSAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWROYW1lICYmXHJcbiAgICAgICAgaXNWZXJpZmllZFRlbCAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWRFbWFpbCAmJlxyXG4gICAgICAgIGlzVE9TQ2hlY2tlZFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VibWl0OiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Ym1pdDogZmFsc2UgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFJlc2VydmVGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0UHJpY2VzLCBkaXNwbGF5SW5mb0lkLCBwcm9kdWN0SWQsIHJlc2VydmF0aW9uRGF0ZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG4gICAgcmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZShwcm9kdWN0UHJpY2VzLmxlbmd0aCksXHJcbiAgKTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc2VydmF0aW9uSW5mbyA9IHtcclxuICAgICAgICBkaXNwbGF5SW5mb0lkLFxyXG4gICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICBwcmljZXM6IFtdLFxyXG4gICAgICAgIHJlc2VydmF0aW9uRW1haWw6IHN0YXRlLmVtYWlsLFxyXG4gICAgICAgIHJlc2VydmF0aW9uTmFtZTogc3RhdGUubmFtZSxcclxuICAgICAgICByZXNlcnZhdGlvblRlbGVwaG9uZTogc3RhdGUudGVsZXBob25lLFxyXG4gICAgICAgIHJlc2VydmF0aW9uWWVhck1vbnRoRGF5OiByZXNlcnZhdGlvbkRhdGUsXHJcbiAgICAgIH07XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gcHJvZHVjdFByaWNlcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XHJcbiAgICAgICAgcmVzZXJ2YXRpb25JbmZvLnByaWNlcy5wdXNoKHtcclxuICAgICAgICAgIGNvdW50OiBOdW1iZXIoc3RhdGUudGlja2V0c1tpbmRleF0pLFxyXG4gICAgICAgICAgcHJvZHVjdFByaWNlSWQ6IHByb2R1Y3RQcmljZXNbaW5kZXhdLnByb2R1Y3RQcmljZUlELFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICcvYXBpL3Jlc2VydmF0aW9ucycsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25JbmZvLFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBhbGVydE1vZGFsKHN0YXR1c1RleHQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn7JiI66ek6rCAIOyEseqzteyggeycvOuhnCDsirnsnbjrkJjsl4jsirXri4jri6QnKTtcclxuICAgICAgICBoaXN0b3J5LnB1c2goYC9kZXRhaWwvJHtkaXNwbGF5SW5mb0lkfWApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHN0YXRlLnN1Ym1pdCkge1xyXG4gICAgICBjb25maXJtTW9kYWwoJ+yYiOyVve2VmOyLnOqyoOyKteuLiOq5jD8nLCBoYW5kbGVTdWJtaXQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnRNb2RhbCgn7JiI7JW9IOyWkeyLneydtCDstqnsobHrkJjsp4Ag7JWK7JWY7Iq164uI64ukJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc2VydmVGb3JtXCI+XHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cIi9hcGkvcmVzZXJ2YXRpb25zXCIgbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxJbnB1dFRpY2tldFxyXG4gICAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdFByaWNlc31cclxuICAgICAgICAgIHRpY2tldHM9e3N0YXRlLnRpY2tldHN9XHJcbiAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UmVzZXJ2ZXJJbmZvXHJcbiAgICAgICAgICBuYW1lPXtzdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgdGVsZXBob25lPXtzdGF0ZS50ZWxlcGhvbmV9XHJcbiAgICAgICAgICBlbWFpbD17c3RhdGUuZW1haWx9XHJcbiAgICAgICAgICByZXNlcnZhdGlvbkRhdGU9e3Jlc2VydmF0aW9uRGF0ZS5zcGxpdCgnICcpWzBdfVxyXG4gICAgICAgICAgdG90YWxUaWNrZXQ9e3N0YXRlLnRpY2tldHMucmVkdWNlKFxyXG4gICAgICAgICAgICAoYWNjdW0sIGN1cnJlbnQpID0+IGFjY3VtICsgY3VycmVudCxcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkTmFtZT17c3RhdGUuaXNWZXJpZmllZE5hbWV9XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkVGVsPXtzdGF0ZS5pc1ZlcmlmaWVkVGVsfVxyXG4gICAgICAgICAgaXNWZXJpZmllZEVtYWlsPXtzdGF0ZS5pc1ZlcmlmaWVkRW1haWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VE9TIGlzQ2hlY2tlZD17c3RhdGUuVE9TfSBkaXNwYXRjaD17ZGlzcGF0Y2h9IC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLnN1Ym1pdCA/ICcjMUVDOTAwJyA6ICcjRDFEMUQxJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXtjb25maXJtU3VibWl0fT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19uYXZlcl9zXCIgLz5cclxuICAgICAgICAgIOyYiOyVve2VmOq4sFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmVGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0UHJpY2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdXJlZCxcclxuICBwcm9kdWN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICByZXNlcnZhdGlvbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVGb3JtO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgU3ViTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IHBhdGhzID0gcGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuICBjb25zdCBpdGVtSWQgPSBwYXRoc1twYXRocy5sZW5ndGggLSAxXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJTdWJOYXZCYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrd2FyZFwiPlxyXG4gICAgICAgIDxMaW5rIHRvPXtgL2RldGFpbC8ke2l0ZW1JZH1gfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWJhY2t3YXJkMVwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZU5hbWVcIj5cclxuICAgICAgICA8aDE+e25hbWUgfHwgJ+2WieyCrCDsnbTrpoQnfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5TdWJOYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Yk5hdkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVGFiVmlldyA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICBjb25zdCB7IHZpZXdzLCBzdHlsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHJlZj17cmVmfSBjbGFzc05hbWU9XCJUYWJWaWV3XCI+XHJcbiAgICAgIDx1bCBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIHt2aWV3cy5tYXAoKHZpZXcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPGxpIGtleT17aW5kZXh9Pnt2aWV3fTwvbGk+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuVGFiVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgdmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICB0cmFuc2Zvcm06IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlZpZXc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBSZXZpZXcgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZXZpZXcsXHJcbiAgICBpbWFnZSxcclxuICAgIHNjb3JlLFxyXG4gICAgZW1haWwsXHJcbiAgICBkYXRlLFxyXG4gICAgZWRpdENvbW1lbnQsXHJcbiAgICBjb25maXJtRGVsZXRlLFxyXG4gIH0gPSBwcm9wcztcclxuICAvLyDsnbTrr7jsp4Ag67O07KCVXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlJldmlld1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHA+e3Jldmlld308L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtpbWFnZSA/IDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwicmV2aWV3SW1hZ2VcIiAvPiA6ICcnfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NvcmVcIj57c2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW1haWxcIj57YCR7ZW1haWwuc2xpY2UoMCwgNCl9KioqKmB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzaXREYXRlXCI+e2Ake2RhdGUuc2xpY2UoMCwgMTApfSDrsKnrrLhgfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlZGl0XCIgb25DbGljaz17ZWRpdENvbW1lbnR9PlxyXG4gICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9e2NvbmZpcm1EZWxldGV9PlxyXG4gICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcmV2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVkaXRDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRhYlVJID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWxzLCBzZWxlY3RlZCwgaGFuZGxlQ2xpY2ssIGluZGljYXRvclN0eWxlIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiVGFiVUlcIj5cclxuICAgICAgPHVsIHJlZj17cmVmfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGljYXRvclwiIHN0eWxlPXtpbmRpY2F0b3JTdHlsZX0gLz5cclxuICAgICAgICB7bGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IHNlbGVjdGVkID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5UYWJVSS5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaW5kaWNhdG9yU3R5bGU6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJVSTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUYWJVSSBmcm9tICcuLi9UYWJVSSc7XHJcbmltcG9ydCBUYWJWaWV3IGZyb20gJy4uL1RhYlZpZXcnO1xyXG5cclxuY29uc3QgVGFiQ29udHJvbGxlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWxzLCB2aWV3cywgYWxhcm0sIHRvcCwgYm90dG9tIH0gPSBwcm9wcztcclxuICAvLyB0b3AsYm90dG9t7J2AIOygleyggeycvOuhnCDrs7Tsl6zspIQg67ewXHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW5kaWNhdG9yU3R5bGUsIHNldEluZGljYXRvclN0eWxlXSA9IHVzZVN0YXRlKHtcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB3aWR0aDogMCxcclxuICB9KTtcclxuICBjb25zdCBbdmlld1N0eWxlLCBzZXRWaWV3U3R5bGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC41cycsXHJcbiAgfSk7XHJcbiAgY29uc3QgdWlSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgdmlld1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBzZWxlY3RlZFJlZiA9IHVzZVJlZihzZWxlY3RlZCk7XHJcbiAgc2VsZWN0ZWRSZWYuY3VycmVudCA9IHNlbGVjdGVkO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGFsYXJtKSB7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgYWxhcm0oaW5kZXgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmV2aXNlSW5kaWNhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRMaSA9IHVpUmVmLmN1cnJlbnQuY2hpbGRyZW5bc2VsZWN0ZWRSZWYuY3VycmVudCArIDFdO1xyXG4gICAgc2V0SW5kaWNhdG9yU3R5bGUoe1xyXG4gICAgICBsZWZ0OiBzZWxlY3RlZExpLm9mZnNldExlZnQsXHJcbiAgICAgIHdpZHRoOiBzZWxlY3RlZExpLm9mZnNldFdpZHRoLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmV2aXNlVmlld1dpZHRoID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB2aWV3UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICBzZXRWaWV3U3R5bGUoe1xyXG4gICAgICAuLi52aWV3U3R5bGUsXHJcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzBzJyxcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3dpZHRoICogc2VsZWN0ZWRSZWYuY3VycmVudH1weClgLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXZpc2VJbmRpY2F0b3IpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJldmlzZVZpZXdXaWR0aCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmV2aXNlSW5kaWNhdG9yKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJldmlzZVZpZXdXaWR0aCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KHJldmlzZUluZGljYXRvciwgW3NlbGVjdGVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHZpZXdSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAnMC41cycsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgtJHt3aWR0aCAqIHNlbGVjdGVkfXB4KWAsXHJcbiAgICB9KTtcclxuICB9LCBbc2VsZWN0ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXdCb2R5ID0gdmlld1JlZi5jdXJyZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuW3NlbGVjdGVkXS5jaGlsZHJlblswXTsgLy8gc2VjdGlvbiAtPiB1bCAtPiBsaSAtPiBkaXZcclxuICAgIGNvbnN0IGhlaWdodCA9IHZpZXdCb2R5ICYmIHZpZXdCb2R5Lm9mZnNldEhlaWdodDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgJycsXHJcbiAgICB9KTtcclxuICB9LCBbdmlld3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiQ29udHJvbGxlclwiPlxyXG4gICAgICA8VGFiVUlcclxuICAgICAgICByZWY9e3VpUmVmfVxyXG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgaW5kaWNhdG9yU3R5bGU9e2luZGljYXRvclN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICB7dG9wfVxyXG4gICAgICA8VGFiVmlldyByZWY9e3ZpZXdSZWZ9IHZpZXdzPXt2aWV3c30gc3R5bGU9e3ZpZXdTdHlsZX0gLz5cclxuICAgICAge2JvdHRvbX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGFybTogZmFsc2UsXHJcbiAgdG9wOiAnJyxcclxuICBib3R0b206ICcnLFxyXG59O1xyXG5cclxuVGFiQ29udHJvbGxlci5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSkuaXNSZXF1aXJlZCxcclxuICBhbGFybTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXHJcbiAgdG9wOiBQcm9wVHlwZXMubm9kZSxcclxuICBib3R0b206IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuLy8g7JWM656M7J20IOyeiOuLpOuptCDsg4HsnIQg7Lu07Y+s64SM7Yq47JeQIOyWtOuUlOyXkCDriIzroIDripTsp4Ag67OA7ZmU66W8IOyVjOugpOykmCDrj5nsoIEg67ew67OA7ZmU66W8IOqwgOuKpey8gO2VqFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5jb25zdCBhcHBseVN0eWxlID0gKHN0eWxlKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBgJHtzdHlsZX1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnN0IFthbGxdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7YWxsfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgY29uc3QgW3ZlcnRpY2FsLCBob3Jpem9udGFsXSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3ZlcnRpY2FsfXB4ICR7aG9yaXpvbnRhbH1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDQpIHtcclxuICAgIGNvbnN0IFt0b3AsIHJpZ2h0LCBkb3duLCBsZWZ0XSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3RvcH1weCAke3JpZ2h0fXB4ICR7ZG93bn1weCAke2xlZnR9cHhgO1xyXG4gIH1cclxuICByZXR1cm4gJzAnO1xyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uQnVuY2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vdGVzLCBtYXJnaW4sIHBhZGRpbmcgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvbkJ1bmNoXCJcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luOiBhcHBseVN0eWxlKG1hcmdpbiksIHBhZGRpbmc6IGFwcGx5U3R5bGUocGFkZGluZykgfX1cclxuICAgID5cclxuICAgICAge25vdGVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCdXR0b24ga2V5PXtpbmRleH0gc3R5bGU9e3ZhbHVlLnN0eWxlfSBjbGljaz17dmFsdWUuY2xpY2t9PlxyXG4gICAgICAgICAgICB7dmFsdWUuY2hpbGRyZW59XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b25CdW5jaC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbWFyZ2luOiAwLFxyXG4gIHBhZGRpbmc6IDAsXHJcbn07XHJcblxyXG5CdXR0b25CdW5jaC5wcm9wVHlwZXMgPSB7XHJcbiAgbm90ZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGNsaWNrOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5hcnJheV0pLFxyXG4gIHBhZGRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQnVuY2g7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdmFsaWRJbWFnZVR5cGUgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFJldmlld0VkaXQgPSAocHJvcHMpID0+IHtcclxuICAvLyByZXZpZXcg66eM65Ok6rOgIOyZhOyEse2VtOyVvOuQqCDrr7jsmYRcclxuICBjb25zdCB7XHJcbiAgICBjb21tZW50SWQsXHJcbiAgICB0aHVtYm5haWxXaWR0aCxcclxuICAgIGV4U2NvcmUsXHJcbiAgICBleENvbW1lbnQsXHJcbiAgICBleEltYWdlU3JjLFxyXG4gICAgaXNQb3N0LFxyXG4gICAgY29uZmlybUVkaXQsXHJcbiAgICBjb25maXJtQ2FuY2VsLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKGV4U2NvcmUpO1xyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKGV4Q29tbWVudCk7XHJcbiAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZShleEltYWdlU3JjKTtcclxuICBjb25zdCBbdGh1bWJuYWlsU3R5bGUsIHNldFRodW1ibmFpbFN0eWxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IGZvcm0gPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpbWFnZVNyYykge1xyXG4gICAgICBjb25zdCBpbWFnZU1lYXN1cmVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltYWdlTWVhc3VyZW1lbnQuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICAgIGltYWdlTWVhc3VyZW1lbnQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5oZWlnaHQgLyB0aGlzLndpZHRoO1xyXG4gICAgICAgIHNldFRodW1ibmFpbFN0eWxlKHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIHdpZHRoOiBgJHt0aHVtYm5haWxXaWR0aH1weGAsXHJcbiAgICAgICAgICBoZWlnaHQ6IGAke3RodW1ibmFpbFdpZHRoICogcmF0aW99cHhgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dGhpcy5zcmN9KWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaHVtYm5haWxTdHlsZSh7XHJcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogJycsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtpbWFnZVNyY10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIC8vIHJldHVybuydhCDsooAg7KCV7J2Y7ZW07IScIHN1Ym1pdOydtCDrkJDripTqsIDrpbwg7JWM7JWE7JW87ZWoXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoc2NvcmUgPD0gMCB8fCBzY29yZSA+IDUpIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfrs4TsoJAg6rCc7IiY6rCAIOyYrOuwlOultOyngCDslYrsirXri4jri6QnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbW1lbnQubGVuZ3RoIDwgNSB8fCBjb21tZW50Lmxlbmd0aCA+IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+umrOu3sCDquIDsnpDsiJjqsIAg66ee7KeAIOyViuyKteuLiOuLpC4nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGltYWdlUmVmLmN1cnJlbnQuZmlsZXMubGVuZ3RoICYmXHJcbiAgICAgICAgIXZhbGlkSW1hZ2VUeXBlKGltYWdlUmVmLmN1cnJlbnQuZmlsZXNbMF0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+ydtOuvuOyngOuKlCBqcGcsanBlZyxwbmcg7YyM7J2866eMIOqwgOuKpe2VqeuLiOuLpC4nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm9ybU9iaiA9IG5ldyBGb3JtRGF0YShmb3JtLmN1cnJlbnQpO1xyXG4gICAgICAvKlxyXG4gICAgICBmb3JtT2JqLmFwcGVuZCgncmVzZXJ2YXRpb25JbmZvSWQsYmxhaCk7XHJcbiAgICAgIGZvcm1PYmouYXBwZW5kKCdleEltYWdlJywgISFleERhdGEuaW1hZ2VTcmMpO1xyXG4gICAgICAgICAgICBmb3JtT2JqLmFwcGVuZCgnbmV3SW1hZ2UnLCBuZXdJbWFnZSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChmb3JtLmN1cnJlbnQuYWN0aW9uLCBmb3JtT2JqKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChpc1Bvc3QgPyAn66as67ew6rCAIOuTseuhneuQmOyXiOyKteuLiOuLpCcgOiAn66as67ew6rCAIOyImOygleuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGlmIChpc1Bvc3QpIGhpc3RvcnkucHVzaCgnL215cmVzZXJ2YXRpb24nKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5UmF0aW5nID0gKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRTY29yZSh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gKHsgdGFyZ2V0OiB7IGZpbGVzIH0gfSkgPT4ge1xyXG4gICAgY29uc3QgdGVtcEltYWdlID0gZmlsZXNbMF07XHJcbiAgICBpZiAoIXZhbGlkSW1hZ2VUeXBlKHRlbXBJbWFnZSkpIHtcclxuICAgICAgYWxlcnRNb2RhbCgn7J2066+47KeA64qUIGpwZyxqcGVnLHBuZyDtjIzsnbzrp4wg6rCA64ql7ZWp64uI64ukJyk7XHJcbiAgICAgIGltYWdlUmVmLmN1cnJlbnQudmFsdWUgPSAnJzsgLy8g7JWE66eIIOqzoOyzkOyVvOuQoOq6vOyehFxyXG4gICAgICBzZXRJbWFnZVNyYygnJyk7IC8vIO2VhOyalO2VnOyngCDrqqjrpbTqsqDsnYxcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0SW1hZ2VTcmMod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGVtcEltYWdlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FuY2VsSW1hZ2VVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBpbWFnZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICBzZXRJbWFnZVNyYygnJyk7XHJcbiAgICAvLyBuZXdJbWFnZT0gLTE7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJldmlld0VkaXRcIj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBtZXRob2Q9e2lzUG9zdCA/ICdQT1NUJyA6ICdQVVQnfVxyXG4gICAgICAgIGFjdGlvbj17YC9hcGkvcmVzZXJ2YXRpb25zL2NvbW1lbnRzLyR7Y29tbWVudElkfWB9XHJcbiAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICAgIG5hbWU9XCJyZXZpZXdGb3JtXCJcclxuICAgICAgICByZWY9e2Zvcm19XHJcbiAgICAgID5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyYXRpbmdTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8cD7rs4TsoJDqs7wg7J207JqpIOqyve2XmOydhCDrgqjqsqjso7zshLjsmpQuPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdTdGFyXCI+XHJcbiAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbiBmbi1zdGFyMiAke1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID49IHZhbHVlID8gJ2dldFN0YXInIDogJ25vdEdldFN0YXInXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2RpZnlSYXRpbmcodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNjb3JlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NvcmV9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHNjb3JlID4gMCA/ICcjMDAwJyA6ICcjZGRkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndyaXRlQ29tbWVudFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgcm93cz1cIjE1XCJcclxuICAgICAgICAgICAgbWluTGVuZ3RoPVwiNVwiXHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjQwMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvbW1lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdEltYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlTGV0dGVyQ291bnRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VVcGxvYWRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1pbWFnZTFcIiAvPlxyXG4gICAgICAgICAgICAgIOyCrOynhCDstpTqsIBcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tbWVudENvdW50XCI+XHJcbiAgICAgICAgICAgICAge2Ake2NvbW1lbnQubGVuZ3RofS80MDAgKOy1nOyGjCA17J6QIOydtOyDgSlgfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsSW1hZ2VcIiBzdHlsZT17dGh1bWJuYWlsU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNyb3NzMVwiIG9uQ2xpY2s9e2NhbmNlbEltYWdlVXBsb2FkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICB7aXNQb3N0ID8gKFxyXG4gICAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnIzFFQzgwMCcgfSxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1Nb2RhbCgn66as67ew66W8IOuTseuhnSDtlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+umrOu3sCDrk7HroZ0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyB9LFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUVkaXQoaGFuZGxlU3VibWl0LCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAn7IiY7KCVJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEOERCREUnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAn7Leo7IaMJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0VkaXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRodW1ibmFpbFdpZHRoOiAyMDAsXHJcbiAgZXhTY29yZTogMCxcclxuICBleENvbW1lbnQ6ICcnLFxyXG4gIGV4SW1hZ2VTcmM6ICcnLFxyXG4gIGlzUG9zdDogdHJ1ZSxcclxufTtcclxuXHJcblJldmlld0VkaXQucHJvcFR5cGVzID0ge1xyXG4gIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICB0aHVtYm5haWxXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICBleFNjb3JlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGV4Q29tbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBleEltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzUG9zdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29uZmlybUVkaXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNvbmZpcm1DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3RWRpdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUaWNrZXRIZWFkIGZyb20gJy4uL1RpY2tldEhlYWQnO1xyXG5pbXBvcnQgVGlja2V0SW5mb0xpc3QgZnJvbSAnLi4vVGlja2V0SW5mb0xpc3QnO1xyXG5cclxuY29uc3QgVGlja2V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbmZvcywgY2hpbGRyZW4sIGFjdGlvbnMsIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJUaWNrZXRcIj5cclxuICAgICAgPFRpY2tldEhlYWQgaXNHcmVlbj17aXNHcmVlbn0+e2NoaWxkcmVufTwvVGlja2V0SGVhZD5cclxuICAgICAgPFRpY2tldEluZm9MaXN0IGluZm9zPXtpbmZvc30gYWN0aW9ucz17YWN0aW9uc30gLz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0dyZWVuOiBmYWxzZSxcclxufTtcclxuXHJcblRpY2tldC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG4gIGlzR3JlZW46IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUHJvZHVjdERlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRleHQsIGxpbWl0IH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNGb2xkLCBzZXRJc0ZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RleHRPYmosIHNldFRleHRPYmpdID0gdXNlU3RhdGUoeyBzaW1wbGU6ICcnLCBkZXRhaWw6ICcnIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICAgIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgbGltaXQpO1xyXG4gICAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UobGltaXQpO1xyXG4gICAgICBzZXRUZXh0T2JqKHsgc2ltcGxlOiB0ZXh0U2ltcGxlLCBkZXRhaWw6IHRleHREZXRhaWwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUZXh0T2JqKHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9KTtcclxuICAgIH1cclxuICB9LCBbdGV4dF0pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZURlc2MgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGb2xkKSB7XHJcbiAgICAgICQoJy5Qcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNGb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5Qcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7J+2OvOyzkOuztOq4sCAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1kb3duMlwiIC8+XHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxuICBjb25zdCBmb2xkVGV4dCA9IChcclxuICAgIDxzcGFuPlxyXG4gICAgICB7J+ygkeq4sCAnfVxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi11cDJcIiAvPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0RGVzY1wiPlxyXG4gICAgICB7dGV4dE9iai5kZXRhaWwgPyAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7dGV4dE9iai5zaW1wbGV9XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNGb2xkID8gJ2lubGluZScgOiAnbm9uZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlRGVzY1wiPnt0ZXh0T2JqLmRldGFpbH08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPnt0ZXh0T2JqLnNpbXBsZX08L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YzZjVmNicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNsaWNrOiBzaG93TW9yZURlc2MsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGlzRm9sZCA/IG9wZW5UZXh0IDogZm9sZFRleHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdERlc2MuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRleHQ6ICcnLFxyXG4gIGxpbWl0OiAxMDAsXHJcbn07XHJcblxyXG5Qcm9kdWN0RGVzYy5wcm9wVHlwZXMgPSB7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXNjO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gJy4uL0ltYWdlU2xpZGVyJztcclxuaW1wb3J0IHsgcmVzaXplRW5kIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbi8vIOyKpO2BrOuhpCDsi5zqsIQodHJhbnNpdGlvblRpbWUpIGRlZmF1bHQgMey0iCAg7JyE7JeQ7IScIOusvOugpOuwm+uKlOqyg1xyXG4vLyDsg4Htg5zroZwg7IKs7Jqp7ZWY64qUIOyKpO2BrOuhpCDsi5zqsIQgKHRyYW5zaXRpb25EdXJhdGlvbilcclxuLy8g7ZmU66m0IOyghO2ZmCDqsITqsqkgKHRpbWVJbnRlcnZhbCkgMuy0iFxyXG5cclxuY29uc3QgUHJvbW90aW9uSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICAvLyDqsJHsnpDquLAgZGVncmVl6rCAIOqzhOyGjSDspp3qsIDtlZjripQg67KE6re46rCAIOyeiOydjFxyXG4gIGNvbnN0IHsgdGltZUludGVydmFsLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY3JvbGxhYmxlLCBzZXRTY3JvbGxhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0cmFuc2l0aW9uRHVyYXRpb24sIHNldFRyYW5zaXRpb25EdXJhdGlvbl0gPSB1c2VTdGF0ZSh0cmFuc2l0aW9uVGltZSk7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW1hZ2VXaWR0aCwgc2V0SW1hZ2VXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBkZWdyZWVSZWYgPSB1c2VSZWYoZGVncmVlKTtcclxuICBjb25zdCBzY3JvbGxhYmxlUmVmID0gdXNlUmVmKHNjcm9sbGFibGUpO1xyXG4gIGNvbnN0IGltYWdlTGlzdCA9IHVzZVJlZihudWxsKTtcclxuICBkZWdyZWVSZWYuY3VycmVudCA9IGRlZ3JlZTtcclxuICBzY3JvbGxhYmxlUmVmLmN1cnJlbnQgPSBzY3JvbGxhYmxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZGF0YTogeyBpdGVtcyB9LFxyXG4gICAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9ucycpO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbXNbMF0pOyAvLyDsspjsnYzqs7wg66eI7KeA66eJ7J2EIOuPmeydvO2VnCDsnbTrr7jsp4Drpbwg65GQ7Ja07IScIOyKpO2BrOuhpOydhCDrp6TrgYTrn73qsowg7ZWoXHJcbiAgICAgICAgc2V0SW1hZ2VzKGl0ZW1zKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoSW1hZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0b1Njcm9sbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHNjcm9sbGFibGVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChkZWdyZWVSZWYuY3VycmVudCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGVncmVlKChwcmV2RGVncmVlKSA9PiBwcmV2RGVncmVlICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRpbWVJbnRlcnZhbCAqIDEwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbCk7XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSA+PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBzZXREZWdyZWUoMCk7XHJcbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbigwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGxhYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU91dCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbGFibGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RhcnRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzaXplRW5kKCgpID0+IHtcclxuICAgICAgc2V0U2Nyb2xsYWJsZSh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhdXNlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsYWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwYXVzZVNjcm9sbCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhcnRTY3JvbGwoKSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcGF1c2VTY3JvbGwpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3RhcnRTY3JvbGwoKSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2VXaWR0aCA9ICgpID0+IHtcclxuICAgIHJldHVybiByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVdpZHRoKFxyXG4gICAgICAoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQgJiZcclxuICAgICAgICBpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCkgfHxcclxuICAgICAgICAwLFxyXG4gICAgKTsgLy8g7LKY7J2M7JeUIDDsnLzroZwg65CoXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0SW1hZ2VXaWR0aCgpKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0SW1hZ2VXaWR0aCgpKTtcclxuICB9LCBbaW1hZ2VzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvbkR1cmF0aW9ufVxyXG4gICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgaW1hZ2VXaWR0aD17aW1hZ2VXaWR0aH1cclxuICAgICAgaXNQcm9tb3Rpb25cclxuICAgICAgaGFuZGxlVHJhbnNpdGlvbkVuZD17aGFuZGxlVHJhbnNpdGlvbkVuZH1cclxuICAgICAgaGFuZGxlTW91c2VPdmVyPXtoYW5kbGVNb3VzZU92ZXJ9XHJcbiAgICAgIGhhbmRsZU1vdXNlT3V0PXtoYW5kbGVNb3VzZU91dH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcblByb21vdGlvbkltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0cmFuc2l0aW9uVGltZTogMSxcclxuICB0aW1lSW50ZXJ2YWw6IDIsXHJcbn07XHJcblxyXG5Qcm9tb3Rpb25JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdGltZUludGVydmFsOiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbW90aW9uSW1hZ2U7XHJcblxyXG4vKlxyXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jKSB7XHJcbiAgbGV0IHRpbWVyO1xyXG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDEwMCwgZXZlbnQpO1xyXG4gICAgc2V0VGltZW91dCgpXHJcbiAgfTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgJ3Jlc2l6ZScsXHJcbiAgZGVib3VuY2UoZXZlbnQgPT4ge1xyXG4gICAgLy8gcmVzaXplIOuBneuCrOydhCDrlYxcclxuICAgIHNjcm9sbEFibGUgPSB0cnVlO1xyXG4gIH0pLFxyXG4pO1xyXG4qL1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IE1haW5OYXZCYXIgZnJvbSAnLi4vTWFpbk5hdkJhcic7XHJcbmltcG9ydCBTdWJOYXZCYXIgZnJvbSAnLi4vU3ViTmF2QmFyJztcclxuXHJcbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgaXNUcmFuc3BhcmVudCwgaXNMb2dvdXRhYmxlIH0gPSBwcm9wcztcclxuICByZXR1cm4gbmFtZSA/IChcclxuICAgIDxTdWJOYXZCYXIgbmFtZT17bmFtZX0gLz5cclxuICApIDogKFxyXG4gICAgPE1haW5OYXZCYXIgaXNUcmFuc3BhcmVudD17aXNUcmFuc3BhcmVudH0gaXNMb2dvdXRhYmxlPXtpc0xvZ291dGFibGV9IC8+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbmFtZTogJycsXHJcbiAgaXNUcmFuc3BhcmVudDogZmFsc2UsXHJcbiAgaXNMb2dvdXRhYmxlOiBmYWxzZSxcclxufTtcclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc0xvZ291dGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BQcm9kdWN0Q29udGFpbmVyICR7Y2xhc3NOYW1lfWB9PntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcblxyXG5Qcm9kdWN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiTW9kYWxcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IE1haW5JbWFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3JjLCBhbHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIk1haW5JbWFnZVwiIHNyYz17c3JjfSBhbHQ9e2FsdH0gLz47XHJcbn07XHJcblxyXG5NYWluSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBSZXZpZXdTdW1tYXJ5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhdmVyYWdlU2NvcmUsIHJldmlld0NvdW50LCBkaXNwbGF5U3RhciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIkNvbW1lbnRTdW1tYXJ5XCI+XHJcbiAgICAgIDxoMj7smIjrp6TsnpAg7ZWc7KSE7Y+JPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5Q29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7ZGlzcGxheVN0YXIoYXZlcmFnZVNjb3JlKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF2ZXJhZ2VTY29yZVwiPnthdmVyYWdlU2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF4U2NvcmVcIj4vIDUuMDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50Q291bnRcIj57YCR7cmV2aWV3Q291bnR9IOqxtGB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW5yb2xsVGV4dFwiPuuTseuhnTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld1N1bW1hcnkucHJvcFR5cGVzID0ge1xyXG4gIGF2ZXJhZ2VTY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJldmlld0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheVN0YXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdTdW1tYXJ5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFJldmlldyBmcm9tICcuLi9SZXZpZXcnO1xyXG5pbXBvcnQgUmV2aWV3RWRpdCBmcm9tICcuLi9SZXZpZXdFZGl0JztcclxuXHJcbmNvbnN0IFJldmlld0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZXZpZXdzLFxyXG4gICAgaXNCcmllZixcclxuICAgIGlzTW9kaWZpYWJsZSxcclxuICAgIGVkaXRDb21tZW50LFxyXG4gICAgY29uZmlybURlbGV0ZSxcclxuICAgIGNvbmZpcm1FZGl0LFxyXG4gICAgY29uZmlybUNhbmNlbCxcclxuICAgIGV4RGF0YTogeyBpZCwgc2NvcmUsIGNvbW1lbnQsIGltYWdlU3JjIH0sXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBzaG93UmV2aWV3cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJldmlld3NDb21wID0gW107XHJcbiAgICBbLi4ucmV2aWV3c10ucmV2ZXJzZSgpLnNvbWUoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaXNCcmllZiAmJiBpbmRleCA+PSA1KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV2aWV3c0NvbXAucHVzaChcclxuICAgICAgICA8UmV2aWV3XHJcbiAgICAgICAgICBrZXk9e3ZhbHVlLmNvbW1lbnRJZH1cclxuICAgICAgICAgIHJldmlldz17dmFsdWUuY29tbWVudH1cclxuICAgICAgICAgIGltYWdlPXtcclxuICAgICAgICAgICAgdmFsdWUuY29tbWVudEltYWdlcy5sZW5ndGhcclxuICAgICAgICAgICAgICA/IHZhbHVlLmNvbW1lbnRJbWFnZXNbMF0uc2F2ZUZpbGVOYW1lXHJcbiAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2NvcmU9e3ZhbHVlLnNjb3JlfVxyXG4gICAgICAgICAgZW1haWw9e3ZhbHVlLnJlc2VydmF0aW9uRW1haWx9XHJcbiAgICAgICAgICBkYXRlPXt2YWx1ZS5yZXNlcnZhdGlvbkRhdGV9XHJcbiAgICAgICAgICBlZGl0Q29tbWVudD17ZWRpdENvbW1lbnQodmFsdWUuY29tbWVudElkKX1cclxuICAgICAgICAgIGNvbmZpcm1EZWxldGU9e2NvbmZpcm1EZWxldGUodmFsdWUuY29tbWVudElkKX1cclxuICAgICAgICAvPixcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldmlld3NDb21wO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlJldmlld0xpc3RcIj5cclxuICAgICAge2lzTW9kaWZpYWJsZSA/IChcclxuICAgICAgICA8UmV2aWV3RWRpdFxyXG4gICAgICAgICAgY29tbWVudElkPXtpZH1cclxuICAgICAgICAgIGV4U2NvcmU9e3Njb3JlfVxyXG4gICAgICAgICAgZXhDb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgICAgZXhJbWFnZVNyYz17aW1hZ2VTcmN9XHJcbiAgICAgICAgICBpc1Bvc3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgY29uZmlybUVkaXQ9e2NvbmZpcm1FZGl0KGlkKX1cclxuICAgICAgICAgIGNvbmZpcm1DYW5jZWw9e2NvbmZpcm1DYW5jZWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICBzaG93UmV2aWV3cygpXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgcmV2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvbW1lbnRJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICBzYXZlRmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICkuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpc0JyaWVmOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGVkaXRDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybUVkaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybUNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBleERhdGE6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0xpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=