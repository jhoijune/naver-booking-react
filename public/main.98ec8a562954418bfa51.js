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
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "c3dY");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var EventInfo = function EventInfo(props) {
  var productPrices = props.productPrices;

  var showDiscountInfo = function showDiscountInfo() {
    var discountInfo = [];
    productPrices.forEach(function (value) {
      if (Number(value.discountRate) > Number.EPSILON) {
        discountInfo.push("".concat(Object(_js_common__WEBPACK_IMPORTED_MODULE_2__["priceTypeMapper"])(value.priceTypeName), " ").concat(Math.round(value.discountRate), "%"));
      }
    });

    if (discountInfo.length === 0) {} else {
      var discountText = "".concat(discountInfo.join(', '), " \uD560\uC778");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "[\uB124\uC774\uBC84\uC608\uC57D \uD2B9\uBCC4\uD560\uC778]", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), discountText);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "EventInfo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book ico_evt"
  }), "\uC774\uBCA4\uD2B8\uC815\uBCF4"), showDiscountInfo());
};

EventInfo.propTypes = {
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    discountRate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    priceTypeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  })).isRequired
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
        to: "detail?productId=".concat(value.productId)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: value.saveFileName,
        alt: "promotionImage"
      })));
    }

    if (value) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: value.saveFileName,
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
    productId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
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
/* harmony import */ var _ImageController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageController */ "j9uu");


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

  var resizeEnd = function resizeEnd(func) {
    var timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100);
    };
  };

  var leftScroll = function leftScroll() {
    if (degree === 0) return;
    setDegree(degree - 1);
    /*
    if (degree === 0) return;
    degree -= 1;
    const interval = firstItem.clientWidth;
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */
  };

  var rightScroll = function rightScroll() {
    if (degree === images.length - 1) return;
    setDegree((degree + 1) % images.length);
    /*
    imageList.style.transform = `translateX(-${interval * degree}px)`;
    imageCounting.innerText = ` ${degree + 1} `;
    */
  }; // props 다 넘겨줘야 함


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageController__WEBPACK_IMPORTED_MODULE_3__["default"], {
    degree: degree,
    transitionTime: transitionTime,
    images: images,
    resizeEnd: resizeEnd,
    title: title,
    leftScroll: leftScroll,
    rightScroll: rightScroll
  });
};

__signature__(DetailImage, "useState{[degree, setDegree](0)}");

DetailImage.defaultProps = {
  transitionTime: 0.5
};
DetailImage.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
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
    className: "MainNavBar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MainNavBar ".concat(isTransparent ? 'transparent' : 'fixed')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/icon/icon.png",
    alt: "naver icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, isLogoutable ? '로그아웃' : '예약확인'))));
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
  var fontColor = props.fontColor,
      backgroundColor = props.backgroundColor,
      click = props.click,
      children = props.children;
  return typeof click === 'function' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Button",
    onClick: click,
    style: {
      backgroundColor: backgroundColor,
      color: fontColor
    }
  }, children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "Button",
    to: click,
    style: {
      backgroundColor: backgroundColor,
      color: fontColor
    }
  }, children);
};

Button.defaultProps = {
  fontColor: '#000',
  backgroundColor: '#f4f4f4'
};
Button.propTypes = {
  fontColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
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


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Array(6).fill(null)),
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

    if (viewsLen >= showingCount + basisCount || viewsLen > showingCount) {
      // 보여주기만 하면 됨
      var finalInd = viewsLen >= showingCount + basisCount ? showingCount + basisCount : viewsLen;

      var copiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

      copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        productCount: productCount,
        products: viewsArr[selectedCategory].slice(finalInd)
      });
      setShowingCount(finalInd);
      setViews(copiedViews);
    } else if (categoryProducts[selectedCategory].length > viewsArr[selectedCategory].length) {
      // 넣은뒤 보여줌
      var productsLen = categoryProducts[selectedCategory].length;

      var _finalInd = productsLen >= viewsLen + basisCount ? viewsLen + basisCount : productsLen;

      var modifiedViewsArr = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(viewsArr);

      categoryProducts[selectedCategory].slice(viewsLen, _finalInd).forEach(function (info) {
        modifiedViewsArr[selectedCategory].push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
          itemInfo: info
        }));
      });

      var modifiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

      modifiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        products: modifiedViewsArr[selectedCategory]
      });
      setShowingCount(_finalInd);
      setViewsArr(modifiedViewsArr);
      setViews(modifiedViews);
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

__signature__(MainContainer, "useState{[selectedCategory, setSelectedCategory](0)}\nuseState{[productCount, setProductCount](0)}\nuseState{[views, setViews](Array(6).fill(null))}\nuseState{[viewsArr, setViewsArr](Array(6).fill(null))}\nuseState{[categoryProducts, setCategoryProducts](Array(6).fill(null))}\nuseState{[showingCount, setShowingCount](0)}\nuseState{[isFetched, setIsFetched](false)}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "4lVE");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TabController */ "h/In");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var ProductInfo = function ProductInfo(props) {
  var _props$displayInfo = props.displayInfo,
      productContent = _props$displayInfo.productContent,
      productDescription = _props$displayInfo.productDescription,
      placeLot = _props$displayInfo.placeLot,
      placeStreet = _props$displayInfo.placeStreet,
      placeName = _props$displayInfo.placeName,
      telephone = _props$displayInfo.telephone,
      locationImgSrc = props.locationImgSrc;
  var labels = ['상세정보', '오시는길'];
  var views = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "productDetail"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "[\uC18C\uAC1C]"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, productContent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "[\uACF5\uC9C0\uC0AC\uD56D]")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "directions"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/".concat(locationImgSrc),
    alt: "location"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, productDescription), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "locText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-pin4"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, placeLot)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "greyText"
  }, "\uC9C0\uBC88"), placeStreet)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "greyText"
  }, placeName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tableRow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-call2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, telephone)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttonContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "findRoad"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-path-find2"
  }), "\uAE38\uCC3E\uAE30"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-car-find2"
  }), "\uB0B4\uBE44\uAC8C\uC774\uC158"))))];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ProductInfo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabController__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labels: labels,
    views: views
  }));
};

ProductInfo.propTypes = {
  displayInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    productContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    productDescription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    placeLot: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    placeStreet: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    placeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    telephone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired,
  locationImgSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
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
  }), "TOP") : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
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
    var modifiedAverageScore = reviews.reduce(function (accum, current) {
      accum + Number(current.score);
    }) / reviews.length;
    setAverageScore(modifiedAverageScore);
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
    averageScore: averageScore || '0',
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
      backgroundColor: '#E9ECEF',
      click: "/review/".concat(displayInfoId),
      children: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "\uC608\uB9E4\uC790 \uB9AC\uBDF0 \uB354\uBCF4\uAE30", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("i", {
        className: "fn fn-forward1"
      }))
    }]
  }) : '');
};

__signature__(ReviewContainer, "useState{[reviews, setReviews](props.reviews)}\nuseState{[averageScore, setAverageScore](props.averageScore)}\nuseState{[isModifiable, setIsModifiable](false)}\nuseState{[exData, setExData]({})}\nuseContext{{ alertModal, confirmModal }}\nuseEffect{}");

ReviewContainer.defaultProps = {
  isBrief: true
};
ReviewContainer.propTypes = {
  displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
  averageScore: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
  reviews: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    comment: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
    commentId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
    productId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
    reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
    reservationEmail: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
    reservationInfoId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
    score: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
    commentImages: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
      deleteFlag: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
      saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
    }).isRequired)
  })).isRequired,
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
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DetailImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DetailImage */ "2w/+");
/* harmony import */ var _ProductDesc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ProductDesc */ "o4c6");
/* harmony import */ var _EventInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../EventInfo */ "+LtL");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
/* harmony import */ var _ReviewContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ReviewContainer */ "D8/H");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ProductInfo */ "8Lov");



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var DetailContainer = function DetailContainer() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
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
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/products/".concat(displayInfoId));

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
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_DetailImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    images: productData.productImages,
    title: productData.displayInfo.productDescription
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProductDesc__WEBPACK_IMPORTED_MODULE_6__["default"], {
    text: productData.displayInfo.productContent
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_EventInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    productPrices: productData.productPrices
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    notes: [{
      fontColor: '#fff',
      backgroundColor: '#1ec800',
      click: "/reserve/".concat(displayInfoId),
      children: '<i class="fn fn-nbooking-calender2"></i> 예매하기'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ReviewContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    displayInfoId: displayInfoId,
    reviews: productData.comments,
    averageScore: productData.averageScore
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    displayInfo: productData.displayInfo,
    locationImgSrc: productData.displayInfoImage.saveFileName
  }));
};

__signature__(DetailContainer, "useParams{{ displayInfoId }}\nuseEffect{}", function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"]];
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MainView"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "left"
  }, leftProducts), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "right"
  }, rightProducts));
};

MainView.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired).isRequired
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
  path: "/detail"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
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
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "counting"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bright"
  }, degree + 1), " / ".concat(imageLen))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "middleSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "leftSection"
  }, imageLen > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-backward2",
    onClick: leftScroll
  }) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "centerSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rightSection"
  }, imageLen > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-forward2",
    onClick: rightScroll
  }) : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bottomSection"
  })));
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
/*! exports provided: transformMoneyUnit, priceTypeMapper, validImageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMoneyUnit", function() { return transformMoneyUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceTypeMapper", function() { return priceTypeMapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validImageType", function() { return validImageType; });
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      viewStyle = _useState6[0],
      setViewStyle = _useState6[1];

  var uiRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var viewRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // resize시 깨짐 처리
    var selectedLi = uiRef.current.children[selected + 1];
    setIndicatorStyle({
      left: selectedLi.offsetLeft,
      width: selectedLi.offsetWidth
    });
  }, [selected]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var width = viewRef.current.offsetWidth;
    var degree = views.slice(0, selected + 1).filter(function (value) {
      return value;
    }).length;
    setViewStyle(_objectSpread({}, viewStyle, {
      transform: "translate(-".concat(width * degree, "px)")
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

__signature__(TabController, "useState{[selected, setSelected](0)}\nuseState{[indicatorStyle, setIndicatorStyle]({\r\n    left: 0,\r\n    width: 0,\r\n  })}\nuseState{[viewStyle, setViewStyle]({})}\nuseRef{uiRef}\nuseRef{viewRef}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

TabController.defaultProps = {
  alarm: false,
  top: '',
  bottom: ''
};
TabController.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired).isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired).isRequired,
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
      fontColor: value.fontColor,
      backgroundColor: value.backgroundColor,
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

/***/ "j9uu":
/*!*******************************************!*\
  !*** ./src/jsx/ImageController/index.jsx ***!
  \*******************************************/
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
/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageSlider */ "134M");
/* harmony import */ var _ImageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ImageTitle */ "O5AH");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var ImageController = function ImageController(props) {
  // 재설계하거나 파기할 것임
  var degree = props.degree,
      transitionTime = props.transitionTime,
      images = props.images,
      resizeEnd = props.resizeEnd,
      title = props.title,
      leftScroll = props.leftScroll,
      rightScroll = props.rightScroll;
  var imageList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      imageWidth = _useState2[0],
      setImageWidth = _useState2[1];

  var getImageWidth = function getImageWidth() {
    resizeEnd(function () {
      setImageWidth(imageList.current.firstElementChild.clientWidth);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setImageWidth(imageList.current.firstElementChild && imageList.current.firstElementChild.clientWidth || 0); // 처음엔 0으로 됨

    window.addEventListener('resize', getImageWidth);
    return window.removeEventListener('resize', getImageWidth);
  }, [images]);
  return title ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: imageList,
    degree: degree,
    transitionTime: transitionTime,
    images: images,
    imageWidth: imageWidth,
    isPromotion: false
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    degree: degree,
    imageLen: images.length,
    title: title,
    leftScroll: leftScroll,
    rightScroll: rightScroll
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImageSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: imageList,
    degree: degree,
    transitionTime: transitionTime,
    images: images,
    imageWidth: imageWidth,
    isPromotion: true
  });
};

__signature__(ImageController, "useRef{imageList}\nuseState{[imageWidth, setImageWidth](0)}\nuseEffect{}");

ImageController.propTypes = {
  degree: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  resizeEnd: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  leftScroll: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  rightScroll: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
var _default = ImageController;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ImageController, "ImageController", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ImageController/index.jsx");
  reactHotLoader.register(_default, "default", "/mnt/c/Users/jang/Project/naver-booking-react/src/jsx/ImageController/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "3UD+")(module)))

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
      backgroundColor: '#1EC800',
      click: function click() {
        confirmModal('리뷰를 등록 하시겠습니까?', handleSubmit);
      },
      children: '리뷰 등록'
    }]
  }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    notes: [{
      backgroundColor: '#1EC800',
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







var ProductDesc = function ProductDesc(props) {
  var text = props.text,
      limit = props.limit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isFold = _useState2[0],
      setIsFold = _useState2[1];

  var textObj;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var trimmedText = text.trim();
    trimmedText = trimmedText.replace('\n', '');

    if (trimmedText.length > limit) {
      var textSimple = trimmedText.slice(0, limit);
      var textDetail = trimmedText.slice(limit);
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
  }, []);

  var showMoreDesc = function showMoreDesc() {
    if (isFold) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.ProductDesc .moreDesc').slideDown();
      setIsFold(false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.productDesc .moreDesc').slideUp();
      setIsFold(true);
    }
  };

  var openText = '펼쳐보기 <i class="fn fn-down2"></i>';
  var foldText = '접기 <i class="fn fn-up2"></i>';
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
      backgroundColor: '#f3f5f6',
      click: showMoreDesc,
      children: isFold ? openText : foldText
    }]
  }) : '');
};

__signature__(ProductDesc, "useState{[isFold, setIsFold](true)}\nuseEffect{}");

ProductDesc.defaultProps = {
  limit: 100
};
ProductDesc.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
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
/* harmony import */ var _ImageController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ImageController */ "j9uu");




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

  var resizeEnd = function resizeEnd(func) {
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100, event);
    };
  };

  var startScroll = function startScroll() {
    return resizeEnd(function () {
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
    return resizeEnd(function () {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "NavBar"
  }, name ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubNavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: name
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainNavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isTransparent: isTransparent,
    isLogoutable: isLogoutable
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9EZXRhaWxJbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ub3RhbENvdW50L3N0eWxlLmNzcz81NzA3Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpbk5hdkJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbi9zdHlsZS5jc3M/ZmY0YSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL3N0eWxlLmNzcz9hNmI5Iiwid2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5Db250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTGF5b3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5JbWFnZS9zdHlsZS5jc3M/MjJmMCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0lucHV0VGlja2V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9BcHAvc3R5bGUuY3NzPzEyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9zdHlsZS5jc3M/MDBlYiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0NvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluTmF2QmFyL3N0eWxlLmNzcz9iODU5Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVmlldy9zdHlsZS5jc3M/YjMwOSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0xvZ2luRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Ub3RhbENvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RCb3gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVUkvc3R5bGUuY3NzP2E0ODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRIZWFkL3N0eWxlLmNzcz84NmY1Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0RldGFpbENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlckluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVE9TL3N0eWxlLmNzcz84MmIwIiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpblZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvU3ViTmF2QmFyL3N0eWxlLmNzcz83OWViIiwid2VicGFjazovLy8uL3NyYy9qc3gvQXBwL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdQcm92aWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVRpdGxlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEhlYWQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVE9TL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm9MaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVEZXNjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ291bnQvc3R5bGUuY3NzP2MxZWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTW9kYWwvc3R5bGUuY3NzP2I3NmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9TdWJOYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9zdHlsZS5jc3M/ZTkxZCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0hlYWRlci9zdHlsZS5jc3M/NmNiMiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVySW5mby9zdHlsZS5jc3M/Y2VmNiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1N1bW1hcnkvc3R5bGUuY3NzPzU3YmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdDb250YWluZXIvc3R5bGUuY3NzP2ZiMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvRXZlbnRJbmZvL3N0eWxlLmNzcz85NGI5Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiVUkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uQnVuY2gvc3R5bGUuY3NzPzNkOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJDb250cm9sbGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5WaWV3L3N0eWxlLmNzcz80NTE0Iiwid2VicGFjazovLy8uL3NyYy9qc3gvRm9vdGVyL3N0eWxlLmNzcz9hMDNlIiwid2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uQnVuY2gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9zdHlsZS5jc3M/MDNmNSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlQ29udHJvbGxlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Qm94L3N0eWxlLmNzcz80NmVjIiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkNvbnRhaW5lci9zdHlsZS5jc3M/MGVjZiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vc3R5bGUuY3NzP2FkMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdFZGl0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbnB1dFRpY2tldC9zdHlsZS5jc3M/N2I2YSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVEZXNjL3N0eWxlLmNzcz9hYzA4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vc3R5bGUuY3NzPzMyMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9tb3Rpb25JbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9OYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluSW1hZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdMaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJFdmVudEluZm8iLCJwcm9wcyIsInByb2R1Y3RQcmljZXMiLCJzaG93RGlzY291bnRJbmZvIiwiZGlzY291bnRJbmZvIiwiZm9yRWFjaCIsInZhbHVlIiwiTnVtYmVyIiwiZGlzY291bnRSYXRlIiwiRVBTSUxPTiIsInB1c2giLCJwcmljZVR5cGVNYXBwZXIiLCJwcmljZVR5cGVOYW1lIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwiZGlzY291bnRUZXh0Iiwiam9pbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJJbWFnZVNsaWRlciIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImRlZ3JlZSIsInRyYW5zaXRpb25UaW1lIiwiaW1hZ2VzIiwiaW1hZ2VXaWR0aCIsImlzUHJvbW90aW9uIiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsImhhbmRsZU1vdXNlT3ZlciIsImhhbmRsZU1vdXNlT3V0IiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibWFwIiwiaW5kZXgiLCJwcm9kdWN0SWQiLCJzYXZlRmlsZU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJudW1iZXIiLCJib29sIiwiZnVuYyIsIkRldGFpbEltYWdlIiwidGl0bGUiLCJ1c2VTdGF0ZSIsInNldERlZ3JlZSIsInJlc2l6ZUVuZCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImxlZnRTY3JvbGwiLCJyaWdodFNjcm9sbCIsImFycmF5IiwiTWFpbk5hdkJhciIsImlzVHJhbnNwYXJlbnQiLCJpc0xvZ291dGFibGUiLCJSZXNlcnZhdGlvbkNvdW50IiwidG9Vc2VkTGVuIiwidXNlZExlbiIsImNhbmNlbGVkTGVuIiwiQnV0dG9uIiwiZm9udENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiY2xpY2siLCJjaGlsZHJlbiIsImNvbG9yIiwib25lT2ZUeXBlIiwibm9kZSIsIk1haW5Db250YWluZXIiLCJiYXNpc0NvdW50Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJwcm9kdWN0Q291bnQiLCJzZXRQcm9kdWN0Q291bnQiLCJBcnJheSIsImZpbGwiLCJ2aWV3cyIsInNldFZpZXdzIiwidmlld3NBcnIiLCJzZXRWaWV3c0FyciIsImNhdGVnb3J5UHJvZHVjdHMiLCJzZXRDYXRlZ29yeVByb2R1Y3RzIiwic2hvd2luZ0NvdW50Iiwic2V0U2hvd2luZ0NvdW50IiwiaXNGZXRjaGVkIiwic2V0SXNGZXRjaGVkIiwibGFiZWxzIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJmZXRjaFByb2R1Y3RzIiwiYXhpb3MiLCJnZXQiLCJpdGVtcyIsImRhdGEiLCJtb2RpZmllZENhdGVnb3J5IiwibW9kaWZpZWRWaWV3c0FyciIsInNsaWNlIiwiaW5mbyIsIm1vZGlmaWVkVmlld3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TW9yZVByb2R1Y3QiLCJ2aWV3c0xlbiIsImZpbmFsSW5kIiwiY29waWVkVmlld3MiLCJwcm9kdWN0c0xlbiIsInNwZWNpZmljUHJvZHVjdHMiLCJhbGxQcm9kdWN0cyIsImNhdGVnb3J5SWQiLCJpc01vcmVTaG93aW5nIiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNldElzTW9kYWwiLCJzZXRNb2RhbENoaWxkcmVuIiwiYWxlcnRNb2RhbCIsImNvbmZpcm1Nb2RhbCIsIkxheW91dCIsImlzTW9kYWwiLCJtb2RhbENoaWxkcmVuIiwidGV4dCIsImFjdGlvbiIsIklucHV0VGlja2V0IiwidGlja2V0cyIsImRpc3BhdGNoIiwidHJhbnNmb3JtTW9uZXlVbml0IiwicHJpY2UiLCJvcmlnaW5hbENvc3QiLCJ0eXBlIiwid2hlcmUiLCJBY3Rpb25Db250ZXh0IiwiY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIiwiUmVzZXJ2YXRpb25Db250YWluZXIiLCJlbWFpbElkIiwidG9Vc2VkIiwic2V0VG9Vc2VkIiwic2V0VG9Vc2VkTGVuIiwiY2FuY2VsZWQiLCJzZXRDYW5jZWxlZCIsInNldENhbmNlbGVkTGVuIiwidXNlQ29udGV4dCIsInVzZWQiLCJjYW5jZWxSZXNlcnZhdGlvbiIsImlkIiwicHV0Iiwic3RhdHVzIiwidG9EZWxldGVJbmRleCIsImZpbmRJbmRleCIsInJlc2VydmF0aW9uSW5mb0lkIiwiY2FuY2VsZWRJdGVtIiwic3BsaWNlIiwidG9JbnNlcnRJbmRleCIsIlByb2R1Y3RJbmZvIiwiZGlzcGxheUluZm8iLCJwcm9kdWN0Q29udGVudCIsInByb2R1Y3REZXNjcmlwdGlvbiIsInBsYWNlTG90IiwicGxhY2VTdHJlZXQiLCJwbGFjZU5hbWUiLCJ0ZWxlcGhvbmUiLCJsb2NhdGlvbkltZ1NyYyIsIkZvb3RlciIsImlzUmlzZWFibGUiLCJzZXRJc1Jpc2VhYmxlIiwiY2hhbmdlUmlzZWFibGUiLCJzZXRJbnRlcnZhbCIsImJvZHkiLCJzY3JvbGxIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImNsZWFySW50ZXJ2YWwiLCJSZXZpZXdDb250YWluZXIiLCJpc0JyaWVmIiwiZGlzcGxheUluZm9JZCIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiYXZlcmFnZVNjb3JlIiwic2V0QXZlcmFnZVNjb3JlIiwiaXNNb2RpZmlhYmxlIiwic2V0SXNNb2RpZmlhYmxlIiwiZXhEYXRhIiwic2V0RXhEYXRhIiwibW9kaWZpZWRBdmVyYWdlU2NvcmUiLCJyZWR1Y2UiLCJhY2N1bSIsImN1cnJlbnQiLCJzY29yZSIsImRpc3BsYXlTdGFyIiwibWF4U2NvcmUiLCJmaWxsQ291bnQiLCJmbG9vciIsIm5vdEZpbGxDb3VudCIsImNlaWwiLCJyYXRpb0NvdW50Iiwic3RhcnMiLCJfIiwidGltZXMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb250ZW50IiwiYmFja2dyb3VuZENsaXAiLCJXZWJraXRCYWNrZ3JvdW5kQ2xpcCIsIldlYmtpdFRleHRGaWxsQ29sb3IiLCJkaXNwbGF5IiwiZWRpdENvbW1lbnQiLCJjb21tZW50SWQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJjb21tZW50IiwiY29tbWVudEltYWdlcyIsImltYWdlU3JjIiwiZGVsZXRlQ29tbWVudCIsIm1vZGlmaWVkUmV2aWV3cyIsImZpbHRlciIsImNvbmZpcm1EZWxldGUiLCJjb25maXJtRWRpdCIsInN1Ym1pdCIsImlzUHJvY2Vzc2VkIiwiY29uZmlybUNhbmNlbCIsInJlc2VydmF0aW9uRGF0ZSIsInJlc2VydmF0aW9uRW1haWwiLCJkZWxldGVGbGFnIiwiTG9naW5Gb3JtIiwiZW1haWwiLCJzZXRFbWFpbCIsInRhcmdldCIsIlRvdGFsQ291bnQiLCJQcm9kdWN0Qm94IiwiaXRlbUluZm8iLCJwcm9kdWN0SW1hZ2VVcmwiLCJ0ZXh0TGltaXQiLCJpc0ZvbGQiLCJzZXRJc0ZvbGQiLCJpc0ljb25TaG93aW5nIiwic2V0SXNJY29uU2hvd2luZyIsImRldGFpbFRleHQiLCJ1c2VSZWYiLCJ0ZXh0T2JqIiwidHJpbW1lZFRleHQiLCJ0cmltIiwicmVwbGFjZSIsInRleHRTaW1wbGUiLCJ0ZXh0RGV0YWlsIiwic2ltcGxlIiwiZGV0YWlsIiwic2hvd0FuZEhpZGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJUaWNrZXRJbmZvIiwiZGVzY3JpcHRpb24iLCJyZXNlcnZhdGlvbk5hbWUiLCJyZXNlcnZhdGlvblRlbCIsInByaWNlSW5mbyIsInRvdGFsUHJpY2UiLCJhY3Rpb25zIiwicmVzZXJ2YXRpb25TdW1tYXJ5IiwiY291bnQiLCJjcmVhdGVCdXR0b24iLCJub3RlcyIsIlN0cmluZyIsInBhZFN0YXJ0IiwiUmVzZXJ2ZUNvbnRhaW5lciIsInVzZVBhcmFtcyIsInByb2R1Y3REYXRhIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImRpZmZEYXlzIiwicmVzZXJ2ZSIsInJhbmRvbSIsInN0YXJ0IiwiZW5kIiwibW9tZW50IiwidHoiLCJhZGQiLCJmb3JtYXQiLCJwcm9kdWN0SW1hZ2VzIiwic29tZSIsIkRldGFpbENvbnRhaW5lciIsImNvbW1lbnRzIiwiZGlzcGxheUluZm9JbWFnZSIsIlJlc2VydmVySW5mbyIsIm5hbWUiLCJ0b3RhbFRpY2tldCIsImlzVmVyaWZpZWROYW1lIiwiaXNWZXJpZmllZFRlbCIsImlzVmVyaWZpZWRFbWFpbCIsIm1ha2VBbGVydCIsImhpZGUiLCJNYWluVmlldyIsInByb2R1Y3RzIiwibGVmdFByb2R1Y3RzIiwidiIsInJpZ2h0UHJvZHVjdHMiLCJlbGVtZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIlJldmlld1Byb3ZpZGVyIiwiSW1hZ2VUaXRsZSIsImltYWdlTGVuIiwiVGlja2V0SGVhZCIsImlzR3JlZW4iLCJUT1MiLCJpc0NoZWNrZWQiLCJpc0NvbGxlY3Rpb25Gb2xkIiwic2V0SXNDb2xsZWN0aW9uRm9sZCIsImlzT2ZmZXJGb2xkIiwic2V0SXNPZmZlckZvbGQiLCJmb2xkVGV4dCIsInNob3dUZXh0IiwiaGFuZGxlQ29sbGVjdGlvbkNsaWNrIiwiaGFuZGxlT2ZmZXJDbGljayIsImNoZWNrZWQiLCJUaWNrZXRJbmZvTGlzdCIsImluZm9zIiwiUmVzZXJ2ZURlc2MiLCJwbGFjZSIsInByaWNlVGV4dCIsInByaWNlTGlzdCIsIkhlYWRlciIsImluaXRpYWxTdGF0ZSIsImlzVE9TQ2hlY2tlZCIsInJlZHVjZXIiLCJzdGF0ZSIsIm1vZGlmaWVkRGVjIiwibW9kaWZpZWRJbmMiLCJ0ZXN0IiwidGVsUmUiLCJlbWFpbFJlIiwiRXJyb3IiLCJSZXNlcnZlRm9ybSIsInVzZVJlZHVjZXIiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImhhbmRsZVN1Ym1pdCIsInJlc2VydmF0aW9uSW5mbyIsInByaWNlcyIsInJlc2VydmF0aW9uVGVsZXBob25lIiwicmVzZXJ2YXRpb25ZZWFyTW9udGhEYXkiLCJsZW4iLCJwcm9kdWN0UHJpY2VJZCIsInByb2R1Y3RQcmljZUlEIiwicG9zdCIsImNvbmZpcm1TdWJtaXQiLCJzcGxpdCIsImlzUmVxdXJlZCIsIlN1Yk5hdkJhciIsInVzZUxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYXRocyIsIml0ZW1JZCIsIlRhYlZpZXciLCJ2aWV3IiwiaGVpZ2h0IiwiUmV2aWV3IiwicmV2aWV3IiwiaW1hZ2UiLCJkYXRlIiwiVGFiVUkiLCJzZWxlY3RlZCIsImhhbmRsZUNsaWNrIiwiaW5kaWNhdG9yU3R5bGUiLCJsYWJlbCIsImxlZnQiLCJ3aWR0aCIsIlRhYkNvbnRyb2xsZXIiLCJhbGFybSIsInRvcCIsImJvdHRvbSIsInNldFNlbGVjdGVkIiwic2V0SW5kaWNhdG9yU3R5bGUiLCJ2aWV3U3R5bGUiLCJzZXRWaWV3U3R5bGUiLCJ1aVJlZiIsInZpZXdSZWYiLCJzZWxlY3RlZExpIiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwidmlld0JvZHkiLCJvZmZzZXRIZWlnaHQiLCJhcHBseVN0eWxlIiwidG9TdHJpbmciLCJjYWxsIiwiYWxsIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwicmlnaHQiLCJkb3duIiwiQnV0dG9uQnVuY2giLCJtYXJnaW4iLCJwYWRkaW5nIiwiSW1hZ2VDb250cm9sbGVyIiwiaW1hZ2VMaXN0Iiwic2V0SW1hZ2VXaWR0aCIsImdldEltYWdlV2lkdGgiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsaWVudFdpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZXZpZXdFZGl0IiwidGh1bWJuYWlsV2lkdGgiLCJleFNjb3JlIiwiZXhDb21tZW50IiwiZXhJbWFnZVNyYyIsImlzUG9zdCIsInNldFNjb3JlIiwic2V0Q29tbWVudCIsInNldEltYWdlU3JjIiwidGh1bWJuYWlsU3R5bGUiLCJzZXRUaHVtYm5haWxTdHlsZSIsImZvcm0iLCJpbWFnZVJlZiIsImltYWdlTWVhc3VyZW1lbnQiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInJhdGlvIiwiZmlsZXMiLCJ2YWxpZEltYWdlVHlwZSIsImZvcm1PYmoiLCJGb3JtRGF0YSIsIm1vZGlmeVJhdGluZyIsInVwbG9hZEltYWdlIiwidGVtcEltYWdlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2FuY2VsSW1hZ2VVcGxvYWQiLCJUaWNrZXQiLCJQcm9kdWN0RGVzYyIsImxpbWl0Iiwic2hvd01vcmVEZXNjIiwib3BlblRleHQiLCJQcm9tb3Rpb25JbWFnZSIsInRpbWVJbnRlcnZhbCIsInNjcm9sbGFibGUiLCJzZXRTY3JvbGxhYmxlIiwic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwic2V0SW1hZ2VzIiwiZGVncmVlUmVmIiwic2Nyb2xsYWJsZVJlZiIsImZldGNoSW1hZ2VzIiwiYXV0b1Njcm9sbCIsInByZXZEZWdyZWUiLCJzdGFydFNjcm9sbCIsInBhdXNlU2Nyb2xsIiwiTmF2QmFyIiwiUHJvZHVjdENvbnRhaW5lciIsImNsYXNzTmFtZSIsIk1vZGFsIiwiTWFpbkltYWdlIiwiYWx0IiwiUmV2aWV3U3VtbWFyeSIsInJldmlld0NvdW50IiwiUmV2aWV3TGlzdCIsInNob3dSZXZpZXdzIiwicmV2aWV3c0NvbXAiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNuQkMsYUFEbUIsR0FDREQsS0FEQyxDQUNuQkMsYUFEbUI7O0FBRzNCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQUYsaUJBQWEsQ0FBQ0csT0FBZCxDQUFzQixVQUFDQyxLQUFELEVBQVc7QUFDL0IsVUFBSUMsTUFBTSxDQUFDRCxLQUFLLENBQUNFLFlBQVAsQ0FBTixHQUE2QkQsTUFBTSxDQUFDRSxPQUF4QyxFQUFpRDtBQUMvQ0wsb0JBQVksQ0FBQ00sSUFBYixXQUNLQyxrRUFBZSxDQUFDTCxLQUFLLENBQUNNLGFBQVAsQ0FEcEIsY0FDNkNDLElB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFWLENBQ2JELGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0I7QUFDZG9CLGtCQUFZLEVBQUV0QixpREFBUyxDQUFDRztBQURWLEtBQWhCLENBRGEsRUFJYkM7QUFWWSxHQUFoQixDQURPLEVBYVBBLFVBZG1CO0FBZXJCd0osU0FBTyxFQUFFNUosaURBQVMsQ0FBQ3lCLElBQVYsQ0FBZXJCLFVBZkg7QUFnQnJCd0wsYUFBVyxFQUFFNUwsaURBQVMsQ0FBQzBCLElBQVYsQ0FBZXRCLFVBaEJQO0FBaUJyQmtNLGVBQWEsRUFBRXRNLGlEQUFTLENBQUMwQixJQUFWLENBQWV0QixVQWpCVDtBQWtCckJtTSxhQUFXLEVBQUV2TSxpREFBUyxDQUFDMEIsSUFBVixDQUFldEIsVUFsQlA7QUFtQnJCc00sZUFBYSxFQUFFMU0saURBQVMsQ0FBQzBCLElBQVYsQ0FBZXRCLFVBbkJUO0FBb0JyQmdLLFFBQU0sRUFBRXBLLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0I7QUFDdEI2SCxNQUFFLEVBQUUvSCxpREFBUyxDQUFDd0IsTUFBVixDQUFpQnBCLFVBREM7QUFFdEJzSyxTQUFLLEVBQUUxSyxpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQUZGO0FBR3RCNEwsV0FBTyxFQUFFaE0saURBQVMsQ0FBQ0csTUFBVixDQUFpQkMsVUFISjtBQUl0QjhMLFlBQVEsRUFBRWxNLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJDO0FBSkwsR0FBaEIsRUFLTEE7QUF6QmtCLENBQXZCO2VBNEJlcWIsVTtBQUFBOzs7Ozs7Ozs7OzBCQXJGVEEsVSIsImZpbGUiOiJtYWluLjk4ZWM4YTU2Mjk1NDQxOGJmYTUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgRXZlbnRJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0UHJpY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgc2hvd0Rpc2NvdW50SW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc2NvdW50SW5mbyA9IFtdO1xyXG4gICAgcHJvZHVjdFByaWNlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAoTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgIGRpc2NvdW50SW5mby5wdXNoKFxyXG4gICAgICAgICAgYCR7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfSAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgIHZhbHVlLmRpc2NvdW50UmF0ZSxcclxuICAgICAgICAgICl9JWAsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGlzY291bnRJbmZvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGlzY291bnRUZXh0ID0gYCR7ZGlzY291bnRJbmZvLmpvaW4oJywgJyl9IO2VoOyduGA7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBb64Sk7J2067KE7JiI7JW9IO2KueuzhO2VoOyduF1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2Rpc2NvdW50VGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkV2ZW50SW5mb1wiPlxyXG4gICAgICA8aDI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2V2dFwiIC8+XHJcbiAgICAgICAg7J2067Kk7Yq47KCV67O0XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIHtzaG93RGlzY291bnRJbmZvKCl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkV2ZW50SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5JbWFnZSBmcm9tICcuLi9NYWluSW1hZ2UnO1xyXG5cclxuY29uc3QgSW1hZ2VTbGlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgLyogaW5pdFxyXG4gICAqICBkZWdyZWU6IDBcclxuICAgKiB0cmFuc2l0aW9uVGltZTogMlxyXG4gICAqICBpbWFnZXM6IFtdXHJcbiAgICogIGltYWdlV2lkdGg6IDBcclxuICAgKiBpc1Byb21vdGlvbjogdHJ1ZVxyXG4gICAqL1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkZWdyZWUsXHJcbiAgICB0cmFuc2l0aW9uVGltZSxcclxuICAgIGltYWdlcyxcclxuICAgIGltYWdlV2lkdGgsXHJcbiAgICBpc1Byb21vdGlvbixcclxuICAgIGhhbmRsZVRyYW5zaXRpb25FbmQsXHJcbiAgICBoYW5kbGVNb3VzZU92ZXIsXHJcbiAgICBoYW5kbGVNb3VzZU91dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17YEltYWdlU2xpZGVyICR7aXNQcm9tb3Rpb24gPyAncHJvbW90aW9uJyA6ICdkZXRhaWwnfWB9XHJcbiAgICAgIG9uVHJhbnNpdGlvbkVuZD17aGFuZGxlVHJhbnNpdGlvbkVuZH1cclxuICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn1cclxuICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XHJcbiAgICA+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2ltYWdlV2lkdGggKiBkZWdyZWV9cHgpYCxcclxuICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dHJhbnNpdGlvblRpbWV9c2AsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmICh2YWx1ZSAmJiBpc1Byb21vdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgZGV0YWlsP3Byb2R1Y3RJZD0ke3ZhbHVlLnByb2R1Y3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPE1haW5JbWFnZSBzcmM9e3ZhbHVlLnNhdmVGaWxlTmFtZX0gYWx0PVwicHJvbW90aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkltYWdlIHNyYz17dmFsdWUuc2F2ZUZpbGVOYW1lfSBhbHQ9XCJpdGVtSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSk7XHJcblxyXG5JbWFnZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogKCkgPT4ge30sXHJcbiAgaGFuZGxlTW91c2VPdmVyOiAoKSA9PiB7fSxcclxuICBoYW5kbGVNb3VzZU91dDogKCkgPT4ge30sXHJcbn07XHJcblxyXG5JbWFnZVNsaWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgZGVncmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpbWFnZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNQcm9tb3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFuZGxlTW91c2VPdmVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBoYW5kbGVNb3VzZU91dDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEltYWdlQ29udHJvbGxlciBmcm9tICcuLi9JbWFnZUNvbnRyb2xsZXInO1xyXG5cclxuLy8gRGV0YWlsQ29udGFpbmVy7JeQ7IScIGltYWdlc+yZgCB0aXRsZeydhCDspJjslbwgIO2VmOqzoCBpbWFnZXPripQg7ZWE7YSw66eB7J2EIOqxsOyzkOuGlOyVvCDrkKhcclxuLy8g7Iqk7YGs66GkIOyLnOqwhCh0cmFuc2l0aW9uVGltZSkgZGVmYXVsdCAx7LSIXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IERldGFpbEltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZXMsIHRpdGxlLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCByZXNpemVFbmQgPSAoZnVuYykgPT4ge1xyXG4gICAgbGV0IHRpbWVyO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgMTAwKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGVmdFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgPT09IDApIHJldHVybjtcclxuICAgIHNldERlZ3JlZShkZWdyZWUgLSAxKTtcclxuICAgIC8qXHJcbiAgICBpZiAoZGVncmVlID09PSAwKSByZXR1cm47XHJcbiAgICBkZWdyZWUgLT0gMTtcclxuICAgIGNvbnN0IGludGVydmFsID0gZmlyc3RJdGVtLmNsaWVudFdpZHRoO1xyXG4gICAgaW1hZ2VMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2ludGVydmFsICogZGVncmVlfXB4KWA7XHJcbiAgICBpbWFnZUNvdW50aW5nLmlubmVyVGV4dCA9IGAgJHtkZWdyZWUgKyAxfSBgO1xyXG4gICAgKi9cclxuICB9O1xyXG5cclxuICBjb25zdCByaWdodFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgPT09IGltYWdlcy5sZW5ndGggLSAxKSByZXR1cm47XHJcbiAgICBzZXREZWdyZWUoKGRlZ3JlZSArIDEpICUgaW1hZ2VzLmxlbmd0aCk7XHJcbiAgICAvKlxyXG4gICAgaW1hZ2VMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2ludGVydmFsICogZGVncmVlfXB4KWA7XHJcbiAgICBpbWFnZUNvdW50aW5nLmlubmVyVGV4dCA9IGAgJHtkZWdyZWUgKyAxfSBgO1xyXG4gICAgKi9cclxuICB9O1xyXG4gIC8vIHByb3BzIOuLpCDrhJjqsqjspJjslbwg7ZWoXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZUNvbnRyb2xsZXJcclxuICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgIHRyYW5zaXRpb25UaW1lPXt0cmFuc2l0aW9uVGltZX1cclxuICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgIHJlc2l6ZUVuZD17cmVzaXplRW5kfVxyXG4gICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgIGxlZnRTY3JvbGw9e2xlZnRTY3JvbGx9XHJcbiAgICAgIHJpZ2h0U2Nyb2xsPXtyaWdodFNjcm9sbH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkRldGFpbEltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0cmFuc2l0aW9uVGltZTogMC41LFxyXG59O1xyXG5cclxuRGV0YWlsSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEltYWdlO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIGlzVHJhbnNwYXJlbnTqsIAgZmFsc2Xsnbwg65WMIGZpeGVk7J2066+A66GcIHN0eWxl6rCd7LK06rCAIOyeiOyWtOyVvCDrkKhcclxuXHJcbmNvbnN0IE1haW5OYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlzVHJhbnNwYXJlbnQsIGlzTG9nb3V0YWJsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiTWFpbk5hdkJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YE1haW5OYXZCYXIgJHtpc1RyYW5zcGFyZW50ID8gJ3RyYW5zcGFyZW50JyA6ICdmaXhlZCd9YH0+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uLnBuZ1wiIGFsdD1cIm5hdmVyIGljb25cIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgIDxoMj57aXNMb2dvdXRhYmxlID8gJ+uhnOq3uOyVhOybgycgOiAn7JiI7JW97ZmV7J24J308L2gyPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuTWFpbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc0xvZ291dGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2QmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyDsnpjsnpjtlZjqsowg7Kq86rCk7IiYIOyeiOydhCDqsoMg6rCZ7J2MXHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkNvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0b1VzZWRMZW4sIHVzZWRMZW4sIGNhbmNlbGVkTGVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzZXJ2YXRpb25Db3VudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19ib29rMlwiIC8+XHJcbiAgICAgICAgICAgICAg7KCE7LK0XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt0b1VzZWRMZW4gKyB1c2VkTGVuICsgY2FuY2VsZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fYm9va19zc1wiIC8+XHJcbiAgICAgICAgICAgICAg7J207Jqp7JiI7KCVXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt0b1VzZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICAgIOydtOyaqeyZhOujjFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57dXNlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19iYWNrXCIgLz5cclxuICAgICAgICAgICAgICDst6jshozCt+2ZmOu2iFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57Y2FuY2VsZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmF0aW9uQ291bnQucHJvcFR5cGVzID0ge1xyXG4gIHRvVXNlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHVzZWRMZW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjYW5jZWxlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Db3VudDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBjbGljaywgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiB0eXBlb2YgY2xpY2sgPT09ICdmdW5jdGlvbicgPyAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yOiBmb250Q29sb3IgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKSA6IChcclxuICAgIDxMaW5rXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvblwiXHJcbiAgICAgIHRvPXtjbGlja31cclxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yLCBjb2xvcjogZm9udENvbG9yIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBmb250Q29sb3I6ICcjMDAwJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JyxcclxufTtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGljazogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4vKlxyXG4gKiDrhKTsnbTrsoQg67Cw6rK9IOy0iOuhneyDiTogIzFlYzgwMCDquIDsnpDsg4kgI2ZmZjtcclxuICovXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBNYWluVmlldyBmcm9tICcuLi9NYWluVmlldyc7XHJcbmltcG9ydCBUYWJDb250cm9sbGVyIGZyb20gJy4uL1RhYkNvbnRyb2xsZXInO1xyXG5pbXBvcnQgUHJvZHVjdEJveCBmcm9tICcuLi9Qcm9kdWN0Qm94JztcclxuaW1wb3J0IFRvdGFsQ291bnQgZnJvbSAnLi4vVG90YWxDb3VudCc7XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBiYXNpc0NvdW50IH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgwKTsgLy8g7ZiE7J6sIOyEoO2DneuQnCDsubTthYzqs6DrpqwgaWRcclxuICBjb25zdCBbcHJvZHVjdENvdW50LCBzZXRQcm9kdWN0Q291bnRdID0gdXNlU3RhdGUoMCk7IC8vICDsubTthYzqs6DrpqzsnZgg7KCc7ZKIIOqwnOyImFxyXG4gIGNvbnN0IFt2aWV3cywgc2V0Vmlld3NdID0gdXNlU3RhdGUoQXJyYXkoNikuZmlsbChudWxsKSk7IC8vIFs8TWFpblZpZXcvPiw8TWFpblZpZXcvPl1cclxuICBjb25zdCBbdmlld3NBcnIsIHNldFZpZXdzQXJyXSA9IHVzZVN0YXRlKEFycmF5KDYpLmZpbGwobnVsbCkpOyAvLyBbWzxQcm9kdWN0Qm94Lz5dLFs8UHJvZHVjdEJveC8+XV07XHJcbiAgY29uc3QgW2NhdGVnb3J5UHJvZHVjdHMsIHNldENhdGVnb3J5UHJvZHVjdHNdID0gdXNlU3RhdGUoQXJyYXkoNikuZmlsbChudWxsKSk7XHJcbiAgY29uc3QgW3Nob3dpbmdDb3VudCwgc2V0U2hvd2luZ0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc0ZldGNoZWQsIHNldElzRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGxhYmVscyA9IFsn7KCE7LK0JywgJ+yghOyLnCcsICfrrqTsp4Dsu6wnLCAn7L2Y7ISc7Yq4JywgJ+2BtOuemOyLnScsICfsl7Dqt7knXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gJ+uEpOydtOuyhCDsmIjslb0nO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZGF0YTogeyBpdGVtcyB9LFxyXG4gICAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvZHVjdHMnKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZENhdGVnb3J5ID0gWy4uLmNhdGVnb3J5UHJvZHVjdHNdO1xyXG4gICAgICAgIG1vZGlmaWVkQ2F0ZWdvcnlbMF0gPSBpdGVtcztcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzQXJyID0gWy4uLnZpZXdzQXJyXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzQXJyWzBdID0gaXRlbXNcclxuICAgICAgICAgIC5zbGljZSgwLCBiYXNpc0NvdW50KVxyXG4gICAgICAgICAgLm1hcCgoaW5mbykgPT4gPFByb2R1Y3RCb3ggaXRlbUluZm89e2luZm99IC8+KTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgICBtb2RpZmllZFZpZXdzWzBdID0gPE1haW5WaWV3IHByb2R1Y3RzPXttb2RpZmllZFZpZXdzQXJyWzBdfSAvPjtcclxuICAgICAgICBzZXRDYXRlZ29yeVByb2R1Y3RzKG1vZGlmaWVkQ2F0ZWdvcnkpO1xyXG4gICAgICAgIHNldFZpZXdzQXJyKG1vZGlmaWVkVmlld3NBcnIpO1xyXG4gICAgICAgIHNldFNob3dpbmdDb3VudChzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50KTtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICBzZXRWaWV3cyhtb2RpZmllZFZpZXdzKTtcclxuICAgICAgICBzZXRJc0ZldGNoZWQodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3c0xlbiA9IHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aDtcclxuICAgIGlmICh2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50IHx8IHZpZXdzTGVuID4gc2hvd2luZ0NvdW50KSB7XHJcbiAgICAgIC8vIOuztOyXrOyjvOq4sOunjCDtlZjrqbQg65CoXHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICB2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA/IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnRcclxuICAgICAgICAgIDogdmlld3NMZW47XHJcbiAgICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH1cclxuICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5zbGljZShmaW5hbEluZCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgc2V0U2hvd2luZ0NvdW50KGZpbmFsSW5kKTtcclxuICAgICAgc2V0Vmlld3MoY29waWVkVmlld3MpO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGggPlxyXG4gICAgICB2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGhcclxuICAgICkge1xyXG4gICAgICAvLyDrhKPsnYDrkqQg67O07Jes7KSMXHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzTGVuID0gY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICBwcm9kdWN0c0xlbiA+PSB2aWV3c0xlbiArIGJhc2lzQ291bnRcclxuICAgICAgICAgID8gdmlld3NMZW4gKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA6IHByb2R1Y3RzTGVuO1xyXG4gICAgICBjb25zdCBtb2RpZmllZFZpZXdzQXJyID0gWy4uLnZpZXdzQXJyXTtcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XVxyXG4gICAgICAgIC5zbGljZSh2aWV3c0xlbiwgZmluYWxJbmQpXHJcbiAgICAgICAgLmZvckVhY2goKGluZm8pID0+IHtcclxuICAgICAgICAgIG1vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ucHVzaChcclxuICAgICAgICAgICAgPFByb2R1Y3RCb3ggaXRlbUluZm89e2luZm99IC8+LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgY29uc3QgbW9kaWZpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgIG1vZGlmaWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgPE1haW5WaWV3IHByb2R1Y3RzPXttb2RpZmllZFZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldfSAvPlxyXG4gICAgICApO1xyXG4gICAgICBzZXRTaG93aW5nQ291bnQoZmluYWxJbmQpO1xyXG4gICAgICBzZXRWaWV3c0Fycihtb2RpZmllZFZpZXdzQXJyKTtcclxuICAgICAgc2V0Vmlld3MobW9kaWZpZWRWaWV3cyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIOy5tO2FjOqzoOumrCDrsJTrgIzsl4jsnYQg65WMIHZpZXfrsJTqvrjripQg6rO87KCVXHJcbiAgICAvLyAxLiDstZzstIgg6rO87KCVXHJcbiAgICAvLyAyLiDstZzstIgg7JWE64uQIOuVjFxyXG4gICAgaWYgKGlzRmV0Y2hlZCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0pIHtcclxuICAgICAgICAvLyAxLuy1nOy0iCDqs7zsoJVcclxuICAgICAgICAvLyBzZWxlY3RlZENhdGVnb3J57JeQICDsg4HtkojsoJXrs7Trpbwg64Sj6rOgXHJcbiAgICAgICAgLy8gdmlld3Psl5AgTWFpblZpZXfrpbwg7IOd7ISx7ZWoXHJcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNQcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IFthbGxQcm9kdWN0c10gPSBjYXRlZ29yeVByb2R1Y3RzO1xyXG4gICAgICAgIGFsbFByb2R1Y3RzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICBpZiAodmFsdWUuY2F0ZWdvcnlJZCA9PT0gc2VsZWN0ZWRDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBzcGVjaWZpY1Byb2R1Y3RzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkQ2F0ZWdvcnkgPSBbLi4uY2F0ZWdvcnlQcm9kdWN0c107XHJcbiAgICAgICAgbW9kaWZpZWRDYXRlZ29yeVtzZWxlY3RlZENhdGVnb3J5XSA9IHNwZWNpZmljUHJvZHVjdHM7XHJcbiAgICAgICAgLy8gdmlld3Psl5AgTWFpblZpZXfrpbwg7IOd7ISx7ZWoXHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRWaWV3c0FyciA9IFsuLi52aWV3c0Fycl07XHJcbiAgICAgICAgbW9kaWZpZWRWaWV3c0FycltzZWxlY3RlZENhdGVnb3J5XSA9IHNwZWNpZmljUHJvZHVjdHNcclxuICAgICAgICAgIC5zbGljZSgwLCBiYXNpc0NvdW50KVxyXG4gICAgICAgICAgLm1hcCgodmFsdWUpID0+IDxQcm9kdWN0Qm94IGl0ZW1JbmZvPXt2YWx1ZX0gLz4pO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICAgIG1vZGlmaWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgICA8TWFpblZpZXcgcHJvZHVjdHM9e21vZGlmaWVkVmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV19IC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRDYXRlZ29yeVByb2R1Y3RzKG1vZGlmaWVkQ2F0ZWdvcnkpO1xyXG4gICAgICAgIHNldFByb2R1Y3RDb3VudChzcGVjaWZpY1Byb2R1Y3RzLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0Vmlld3NBcnIobW9kaWZpZWRWaWV3c0Fycik7XHJcbiAgICAgICAgc2V0Vmlld3MobW9kaWZpZWRWaWV3cyk7XHJcbiAgICAgICAgc2V0U2hvd2luZ0NvdW50KGJhc2lzQ291bnQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCA+PSBiYXNpc0NvdW50KSB7XHJcbiAgICAgICAgLy8gbGVuZ3Ro64qUIOyehOyLnCDtjJDrs4QgTWFpblZpZXfrp4wg7J6I7Ja07IScIOyViOyXkCDqsK/siJgg7YyM7JWF7ZW07JW8IOuQqFxyXG4gICAgICAgIC8vIDIuIGJhc2lzQ291bnTrnpEg7J287LmY7ZWgIOuVjFxyXG4gICAgICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgICBjb3BpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICAgIDxNYWluVmlld1xyXG4gICAgICAgICAgICBwcm9kdWN0cz17dmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0uc2xpY2UoMCwgYmFzaXNDb3VudCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0UHJvZHVjdENvdW50KGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoKTtcclxuICAgICAgICBzZXRTaG93aW5nQ291bnQoYmFzaXNDb3VudCk7XHJcbiAgICAgICAgc2V0Vmlld3MoY29waWVkVmlld3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3NlbGVjdGVkQ2F0ZWdvcnldKTtcclxuXHJcbiAgY29uc3QgaXNNb3JlU2hvd2luZyA9ICgpID0+XHJcbiAgICAoKGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0gJiZcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGgpIHx8XHJcbiAgICAgIDApID4gc2hvd2luZ0NvdW50O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNYWluQ29udGFpbmVyXCI+XHJcbiAgICAgIDxUYWJDb250cm9sbGVyXHJcbiAgICAgICAgbGFiZWxzPXtsYWJlbHN9XHJcbiAgICAgICAgdmlld3M9e3ZpZXdzfVxyXG4gICAgICAgIGFsYXJtPXtzZXRTZWxlY3RlZENhdGVnb3J5fVxyXG4gICAgICAgIHRvcD17PFRvdGFsQ291bnQgcHJvZHVjdENvdW50PXtwcm9kdWN0Q291bnR9IC8+fVxyXG4gICAgICAgIGJvdHRvbT17XHJcbiAgICAgICAgICBpc01vcmVTaG93aW5nKCkgPyAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vcmVcIiBvbkNsaWNrPXtzaG93TW9yZVByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgIOuNlOuztOq4sFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5NYWluQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBiYXNpc0NvdW50OiA0LFxyXG59O1xyXG5cclxuTWFpbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgYmFzaXNDb3VudDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIHNldElzTW9kYWw6ICgpID0+IHt9LFxyXG4gIHNldE1vZGFsQ2hpbGRyZW46ICgpID0+IHt9LFxyXG4gIGFsZXJ0TW9kYWw6ICgpID0+IHt9LFxyXG4gIGNvbmZpcm1Nb2RhbDogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzTW9kYWwsIHNldElzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbENoaWxkcmVuLCBzZXRNb2RhbENoaWxkcmVuXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgYWxlcnRNb2RhbCA9ICh0ZXh0KSA9PiB7XHJcbiAgICBzZXRNb2RhbENoaWxkcmVuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT57dGV4dH08L2gxPlxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc01vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAn7ZmV7J24JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+LFxyXG4gICAgKTtcclxuICAgIHNldElzTW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybU1vZGFsID0gKHRleHQsIGFjdGlvbikgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3RleHR9PC9oMT5cclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogJ+2ZleyduCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogJ+y3qOyGjCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PixcclxuICAgICk7XHJcbiAgICBzZXRJc01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzTW9kYWwpIHtcclxuICAgICAgc2V0TW9kYWxDaGlsZHJlbignJyk7XHJcbiAgICB9XHJcbiAgfSwgW2lzTW9kYWxdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBzZXRJc01vZGFsLFxyXG4gICAgICAgIHNldE1vZGFsQ2hpbGRyZW4sXHJcbiAgICAgICAgYWxlcnRNb2RhbCxcclxuICAgICAgICBjb25maXJtTW9kYWwsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge2lzTW9kYWwgPyA8TW9kYWw+e21vZGFsQ2hpbGRyZW59PC9Nb2RhbD4gOiAnJ31cclxuICAgIDwvTW9kYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG5leHBvcnQgeyBNb2RhbENvbnRleHQgfTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdHJhbnNmb3JtTW9uZXlVbml0LCBwcmljZVR5cGVNYXBwZXIgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBJbnB1dFRpY2tldCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdFByaWNlcywgdGlja2V0cywgZGlzcGF0Y2ggfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJJbnB1dFRpY2tldFwiPlxyXG4gICAgICB7cHJvZHVjdFByaWNlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVhY2hUaWNrZXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAge3ByaWNlVHlwZU1hcHBlcih2YWx1ZS5wcmljZVR5cGVOYW1lKX1cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge2Ake3RyYW5zZm9ybU1vbmV5VW5pdCh2YWx1ZS5wcmljZSl9IOybkGB9XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICB7KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodmFsdWUuZGlzY291bnRSYXRlKSA+IE51bWJlci5FUFNJTE9OKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQ29zdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnByaWNlIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDEgLSBOdW1iZXIodmFsdWUuZGlzY291bnRSYXRlKSAvIDEwMCkgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgKSAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtgJHt0cmFuc2Zvcm1Nb25leVVuaXQob3JpZ2luYWxDb3N0KX3sm5AgKCR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICApfSUg7ZWg7J246rCAKWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGp1c3RUaWNrZXRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3ByX0Jvb2syIGljb19taW51czMgJHtcclxuICAgICAgICAgICAgICAgICAgICB0aWNrZXRzW2luZGV4XSA/ICcnIDogJ2Rpc2FibGVkJ1xyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RFQ1JFTUVOVCcsIHdoZXJlOiBpbmRleCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2ByZXNydmF0aW9uVGlja2V0JHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgY2xzc05hbWU9e3RpY2tldHNbaW5kZXhdID8gJycgOiAnZGlzYWJsZWQnfVxyXG4gICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpY2tldHNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19wbHVzM1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdJTkNSRU1FTlQnLCB3aGVyZTogaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPntgJHt0cmFuc2Zvcm1Nb25leVVuaXQodmFsdWUucHJpY2UgKiB0aWNrZXRzW2luZGV4XSl9IOybkGB9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbnB1dFRpY2tldC5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBwcmljZVR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIGRpc2NvdW50UmF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIHRpY2tldHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0VGlja2V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBUaWNrZXQgZnJvbSAnLi4vVGlja2V0JztcclxuaW1wb3J0IFJlc2VydmF0aW9uQ291bnQgZnJvbSAnLi4vUmVzZXJ2YXRpb25Db3VudCc7XHJcblxyXG5jb25zdCBBY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZW1haWxJZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3RvVXNlZCwgc2V0VG9Vc2VkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdG9Vc2VkTGVuLCBzZXRUb1VzZWRMZW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NhbmNlbGVkLCBzZXRDYW5jZWxlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NhbmNlbGVkTGVuLCBzZXRDYW5jZWxlZExlbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGxldCB1c2VkO1xyXG4gIGxldCB1c2VkTGVuO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcmVzZXJ2YXRpb25zLyR7ZW1haWxJZH1gKTtcclxuICAgICAgc2V0VG9Vc2VkKGRhdGEudG9Vc2VkKTtcclxuICAgICAgc2V0VG9Vc2VkTGVuKGRhdGEudG9Vc2VkLmxlbmd0aCk7XHJcbiAgICAgIHNldENhbmNlbGVkKGRhdGEuY2FuY2VsZWQpO1xyXG4gICAgICBzZXRDYW5jZWxlZExlbihkYXRhLmNhbmNlbGVkLmxlbmd0aCk7XHJcbiAgICAgIHVzZWQgPSBkYXRhLnVzZWQ7XHJcbiAgICAgIHVzZWRMZW4gPSBkYXRhLnVzZWQubGVuZ3RoO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjYW5jZWxSZXNlcnZhdGlvbiA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgeyBzdGF0dXMgfSA9IGF3YWl0IGF4aW9zLnB1dChgL2FwaS9yZXNlcnZhdGlvbi8ke2lkfWApO1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yemOuqu+uQnCDsmpTssq3snoXri4jri6QnKTtcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgLy8g7Jik66WY64KY66m0IOuwsOyXtCDrs7XsgqztlbTslbztlahcclxuICAgICAgY29uc3QgdG9EZWxldGVJbmRleCA9IHRvVXNlZC5maW5kSW5kZXgoXHJcbiAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS5yZXNlcnZhdGlvbkluZm9JZCA9PT0gaWQsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNhbmNlbGVkSXRlbSA9IHRvVXNlZC5zcGxpY2UodG9EZWxldGVJbmRleCwgMSk7XHJcbiAgICAgIGNvbnN0IHRvSW5zZXJ0SW5kZXggPSBjYW5jZWxlZC5maW5kSW5kZXgoXHJcbiAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS5yZXNlcnZhdGlvbkluZm9JZCA+IGlkLFxyXG4gICAgICApO1xyXG4gICAgICBpZiAodG9JbnNlcnRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICBjYW5jZWxlZC5wdXNoKGNhbmNlbGVkSXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FuY2VsZWQuc3BsaWNlKHRvSW5zZXJ0SW5kZXgsIDAsIGNhbmNlbGVkSXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VG9Vc2VkKHRvVXNlZCk7XHJcbiAgICAgIHNldFRvVXNlZExlbih0b1VzZWRMZW4gLSAxKTtcclxuICAgICAgc2V0Q2FuY2VsZWQoY2FuY2VsZWQpO1xyXG4gICAgICBzZXRDYW5jZWxlZExlbihjYW5jZWxlZExlbiArIDEpO1xyXG4gICAgICBhbGVydE1vZGFsKCfsmIjslb3snbQg7Leo7IaM65CY7JeI7Iq164uI64ukJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjb25maXJtTW9kYWwoXHJcbiAgICAgICAgJ+2VnOuyiCDst6jshoztlZjsi5zrqbQg64uk7IucIOuQmOuPjOumtCDsiJgg7JeG7Iq164uI64ukLiDqt7jrnpjrj4Qg7ZWY7Iuc6rKg7Iq164uI6rmMPycsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsUmVzZXJ2YXRpb24oaWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24gfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzZXJ2YXRpb25Db250YWluZXJcIj5cclxuICAgICAgICA8UmVzZXJ2YXRpb25Db3VudFxyXG4gICAgICAgICAgdG9Vc2VkTGVuPXt0b1VzZWRMZW59XHJcbiAgICAgICAgICB1c2VkTGVuPXt1c2VkTGVufVxyXG4gICAgICAgICAgY2FuY2VsZWRMZW49e2NhbmNlbGVkTGVufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRpY2tldCBpbmZvcz17dG9Vc2VkfSBhY3Rpb25zPVwiY2FuY2VsXCIgaXNHcmVlbj5cclxuICAgICAgICAgIOyYiOyVvSDtmZXsoJVcclxuICAgICAgICA8L1RpY2tldD5cclxuICAgICAgICA8VGlja2V0IGluZm9zPXt1c2VkfSBhY3Rpb25zPVwid3JpdGVSZXZpZXdcIj5cclxuICAgICAgICAgIOydtOyaqSDsmYTro4xcclxuICAgICAgICA8L1RpY2tldD5cclxuICAgICAgICA8VGlja2V0IGluZm9zPXtjYW5jZWxlZH0+7Leo7IaM65CcIOyYiOyVvTwvVGlja2V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2YXRpb25Db250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGVtYWlsSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uQ29udGFpbmVyO1xyXG5leHBvcnQgeyBBY3Rpb25Db250ZXh0IH07XHJcblxyXG4vKlxyXG5SZXNlcnZhdGlvbkNvbnRhaW5lciDihpIgUmVzZXJ2YXRpb25Db3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpIgVGlja2V0IOKGkiBUaWNrZXRIZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGkiBUaWNrZXRJbmZvTGlzdCDihpIgVGlja2V0SW5mb1xyXG4qL1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBUYWJDb250cm9sbGVyIGZyb20gJy4uL1RhYkNvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgUHJvZHVjdEluZm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkaXNwbGF5SW5mbzoge1xyXG4gICAgICBwcm9kdWN0Q29udGVudCxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBwbGFjZUxvdCxcclxuICAgICAgcGxhY2VTdHJlZXQsXHJcbiAgICAgIHBsYWNlTmFtZSxcclxuICAgICAgdGVsZXBob25lLFxyXG4gICAgfSxcclxuICAgIGxvY2F0aW9uSW1nU3JjLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBsYWJlbHMgPSBbJ+yDgeyEuOygleuztCcsICfsmKTsi5zripTquLgnXTtcclxuICBjb25zdCB2aWV3cyA9IFtcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInByb2R1Y3REZXRhaWxcIj5cclxuICAgICAgPGgyPlvshozqsJxdPC9oMj5cclxuICAgICAgPHA+e3Byb2R1Y3RDb250ZW50fTwvcD5cclxuICAgICAgPGgyPlvqs7Xsp4Dsgqztla1dPC9oMj5cclxuICAgIDwvYXJ0aWNsZT4sXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XHJcbiAgICAgIDxpbWcgc3JjPXtgLyR7bG9jYXRpb25JbWdTcmN9YH0gYWx0PVwibG9jYXRpb25cIiAvPlxyXG4gICAgICA8aDI+e3Byb2R1Y3REZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY1RleHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXBpbjRcIiAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPntwbGFjZUxvdH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyZXlUZXh0XCI+7KeA67KIPC9zcGFuPlxyXG4gICAgICAgICAgICB7cGxhY2VTdHJlZXR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyZXlUZXh0XCI+e3BsYWNlTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jYWxsMlwiIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3RlbGVwaG9uZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Db250YWluZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmluZFJvYWRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tcGF0aC1maW5kMlwiIC8+XHJcbiAgICAgICAgICAgIOq4uOywvuq4sFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2FyLWZpbmQyXCIgLz5cclxuICAgICAgICAgICAg64K067mE6rKM7J207IWYXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0SW5mb1wiPlxyXG4gICAgICA8VGFiQ29udHJvbGxlciBsYWJlbHM9e2xhYmVsc30gdmlld3M9e3ZpZXdzfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzcGxheUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBwcm9kdWN0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZUxvdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VTdHJlZXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdGVsZXBob25lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBsb2NhdGlvbkltZ1NyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEluZm87XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNsZWFySW50ZXJ2YWwgfSBmcm9tICd0aW1lcnMnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc1Jpc2VhYmxlLCBzZXRJc1Jpc2VhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVJpc2VhYmxlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgICBzZXRJc1Jpc2VhYmxlKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzUmlzZWFibGUoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGNoYW5nZVJpc2VhYmxlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIkZvb3RlclwiPlxyXG4gICAgICB7aXNSaXNlYWJsZSA/IChcclxuICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tdXAxXCIgLz5cclxuICAgICAgICAgIFRPUFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJjYXV0aW9uXCI+XHJcbiAgICAgICAg64Sk7J2067KEKOyjvCnripQg7Ya17Iug7YyQ66ek7J2YIOuLueyCrOyekOqwgCDslYTri4jrqbAsIOyDge2SiOydmOygleuztCwg6rGw656Y7KGw6rG0LCDsnbTsmqkg67CPXHJcbiAgICAgICAg7ZmY67aIIOuTseqzvCDqtIDroKjtlZwg7J2Y66y07JmAIOyxheyehOydgCDqsIEg7ZqM7JuQ7JeQ6rKMIOyeiOyKteuLiOuLpC5cclxuICAgICAgPC9wPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj7CqSBOQVZFUiBDb3JwLjwvc3Bhbj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIHByb3BzIOyImOyglVxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgUmV2aWV3U3VtbWFyeSBmcm9tICcuLi9SZXZpZXdTdW1tYXJ5JztcclxuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi4vUmV2aWV3TGlzdCc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBSZXZpZXdDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICAvLyDsoITssrTsoIHsnLzroZwg66eM65Ok6rOgIOuLpOyLnCDqsoDthqBcclxuICBjb25zdCB7IGlzQnJpZWYsIGRpc3BsYXlJbmZvSWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKHByb3BzLnJldmlld3MpO1xyXG4gIGNvbnN0IFthdmVyYWdlU2NvcmUsIHNldEF2ZXJhZ2VTY29yZV0gPSB1c2VTdGF0ZShwcm9wcy5hdmVyYWdlU2NvcmUpO1xyXG4gIGNvbnN0IFtpc01vZGlmaWFibGUsIHNldElzTW9kaWZpYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4RGF0YSwgc2V0RXhEYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gcmV2aWV3c+qwgCDri6zrnbzsoYzsnYQg65WMIGF2ZXJhZ2VTY29yZeuwlOq+uOuKlCBlZmZlY3RcclxuICAgIGNvbnN0IG1vZGlmaWVkQXZlcmFnZVNjb3JlID1cclxuICAgICAgcmV2aWV3cy5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgYWNjdW0gKyBOdW1iZXIoY3VycmVudC5zY29yZSk7XHJcbiAgICAgIH0pIC8gcmV2aWV3cy5sZW5ndGg7XHJcbiAgICBzZXRBdmVyYWdlU2NvcmUobW9kaWZpZWRBdmVyYWdlU2NvcmUpO1xyXG4gIH0sIFtyZXZpZXdzXSk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlTdGFyID0gKHNjb3JlLCBtYXhTY29yZSA9IDUpID0+IHtcclxuICAgIC8vIGF2ZXJhZ2VTY29yZeyXkCDrp57qsowg67OE7KCQ7J2EIOumrO2EtO2VmOuKlCDtlajsiJhcclxuICAgIGNvbnN0IGZpbGxDb3VudCA9IE1hdGguZmxvb3Ioc2NvcmUpO1xyXG4gICAgY29uc3Qgbm90RmlsbENvdW50ID0gbWF4U2NvcmUgLSBNYXRoLmNlaWwoc2NvcmUpO1xyXG4gICAgY29uc3QgcmF0aW9Db3VudCA9IE1hdGgucm91bmQoc2NvcmUgKiAxMCkgLyAxMCAtIGZpbGxDb3VudDtcclxuICAgIGNvbnN0IHN0YXJzID0gW107XHJcbiAgICBfLnRpbWVzKGZpbGxDb3VudCwgKCkgPT4ge1xyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIGdldFN0YXJcIiAvPik7XHJcbiAgICB9KTtcclxuICAgIGlmIChyYXRpb0NvdW50ID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgJzpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIFJpZ2h0LCNmMDAgJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICByYXRpb0NvdW50ICogMTAwLFxyXG4gICAgICAgICAgKX0lLCNFNkU2RTYgJHtNYXRoLnJvdW5kKCgxIC0gcmF0aW9Db3VudCkgKiAxMDApfSUpYCxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdFQUEzJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXHJcbiAgICAgICAgICBXZWJraXRCYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxyXG4gICAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdpbml0aWFsJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIHJhdGlvU3RhclwiIHN0eWxlPXtzdHlsZX0gLz4pO1xyXG4gICAgfVxyXG4gICAgXy50aW1lcyhub3RGaWxsQ291bnQsICgpID0+IHtcclxuICAgICAgc3RhcnMucHVzaCg8aSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiBub3RHZXRTdGFyXCIgLz4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwic3RhckNvdW50XCI+e3N0YXJzfTwvc3Bhbj47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdENvbW1lbnQgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq8IOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IHN0YXR1cywgc3RhdHVzVGV4dCB9LFxyXG4gICAgICAgIH0gPSBheGlvcy5nZXQoYC9hdXRoL2VkaXQvY29tbWVudHMvJHtjb21tZW50SWR9YCk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWxlcnRNb2RhbChzdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByZXZpZXdzLmZpbmRJbmRleCgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHZhbHVlLmNvbW1lbnRJZCA9PT0gY29tbWVudElkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgc2NvcmUsIGNvbW1lbnQsIGNvbW1lbnRJbWFnZXMgfSA9IHJldmlld3NbaW5kZXhdO1xyXG4gICAgICAgIHNldEV4RGF0YSh7XHJcbiAgICAgICAgICBpZDogY29tbWVudElkLFxyXG4gICAgICAgICAgc2NvcmUsXHJcbiAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgaW1hZ2VTcmM6IGNvbW1lbnRJbWFnZXMubGVuZ3RoID8gY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgOiAnJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29tbWVudCA9IChjb21tZW50SWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyCreygnCDrsoTtirzsnYQg64iE66W06rOgIO2ZleyduOydhCDriIzroIDsnYQg7Iuc7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBzdGF0dXMsIHN0YXR1c1RleHQgfSxcclxuICAgICAgICB9ID0gYXhpb3MuZGVsZXRlKGAvYXBpL3Jlc2VydmF0aW9ucy9jb21tZW50cy8ke2NvbW1lbnRJZH1gKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgYWxlcnRNb2RhbCgn66as67ew6rCAIOyCreygnOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgY29uc3QgbW9kaWZpZWRSZXZpZXdzID0gcmV2aWV3cy5maWx0ZXIoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNvbW1lbnRJZCAhPT0gY29tbWVudElkO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRSZXZpZXdzKG1vZGlmaWVkUmV2aWV3cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsgq3soJwg67KE7Yq87J2EIOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JywgZGVsZXRlQ29tbWVudChjb21tZW50SWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtRWRpdCA9IChpZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvOydhCDriITrpbTqs6Ag7IiY7KCVIOuyhO2KvOydhCDri6Tsi5wg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIHJldHVybiAoc3VibWl0LCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMpID0+IHtcclxuICAgICAgY29uZmlybU1vZGFsKCfrpqzrt7Drpbwg7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMPycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1Byb2Nlc3NlZCA9IHN1Ym1pdCgpO1xyXG4gICAgICAgIGlmIChpc1Byb2Nlc3NlZCkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSByZXZpZXdzLmZpbmRJbmRleCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuY29tbWVudElkID09PSBpZDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgbW9kaWZpZWRSZXZpZXdzID0gWy4uLnJldmlld3NdO1xyXG4gICAgICAgICAgbW9kaWZpZWRSZXZpZXdzW2luZGV4XS5jb21tZW50ID0gY29tbWVudDtcclxuICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uc2NvcmUgPSBzY29yZTtcclxuICAgICAgICAgIGlmIChtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgPSBpbWFnZVNyYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFJldmlld3MobW9kaWZpZWRSZXZpZXdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXhEYXRhKHt9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybUNhbmNlbCA9ICgpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirzsnYQg64iE66W06rOgIOy3qOyGjOulvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgY29uZmlybU1vZGFsKCfrpqzrt7Ag7IiY7KCV7J2EIOy3qOyGjO2VmOyLnOqyoOyKteuLiOq5jD8nLCAoKSA9PiB7XHJcbiAgICAgIHNldElzTW9kaWZpYWJsZShmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQ29tbWVudENvbnRhaW5lclwiPlxyXG4gICAgICA8UmV2aWV3U3VtbWFyeVxyXG4gICAgICAgIGF2ZXJhZ2VTY29yZT17YXZlcmFnZVNjb3JlIHx8ICcwJ31cclxuICAgICAgICByZXZpZXdDb3VudD17cmV2aWV3cy5sZW5ndGh9XHJcbiAgICAgICAgZGlzcGxheVN0YXI9e2Rpc3BsYXlTdGFyfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmV2aWV3TGlzdFxyXG4gICAgICAgIHJldmlld3M9e3Jldmlld3N9XHJcbiAgICAgICAgaXNCcmllZj17aXNCcmllZn1cclxuICAgICAgICBpc01vZGlmaWFibGU9e2lzTW9kaWZpYWJsZX1cclxuICAgICAgICBleERhdGE9e2V4RGF0YX1cclxuICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlfVxyXG4gICAgICAgIGNvbmZpcm1DYW5jZWw9e2NvbmZpcm1DYW5jZWx9XHJcbiAgICAgICAgY29uZmlybUVkaXQ9e2NvbmZpcm1FZGl0fVxyXG4gICAgICAgIGVkaXRDb21tZW50PXtlZGl0Q29tbWVudH1cclxuICAgICAgLz5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYWxhcm0xXCIgLz5cclxuICAgICAgICAgIOuEpOydtOuyhCDsmIjslb3snYQg7Ya17ZW0IOyLpOygnCDrsKnrrLjtlZwg7J207Jqp7J6Q6rCAIOuCqOq4tCDtj4nqsIDsnoXri4jri6QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgICB7aXNCcmllZiA/IChcclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTlFQ0VGJyxcclxuICAgICAgICAgICAgICBjbGljazogYC9yZXZpZXcvJHtkaXNwbGF5SW5mb0lkfWAsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICDsmIjrp6TsnpAg66as67ewIOuNlOuztOq4sFxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1mb3J3YXJkMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzQnJpZWY6IHRydWUsXHJcbn07XHJcblxyXG5SZXZpZXdDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBhdmVyYWdlU2NvcmU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICByZXZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICByZXNlcnZhdGlvbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcmVzZXJ2YXRpb25FbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICByZXNlcnZhdGlvbkluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBjb21tZW50SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgZGVsZXRlRmxhZzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgfSkuaXNSZXF1aXJlZCxcclxuICAgICAgKSxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpc0JyaWVmOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0NvbnRhaW5lcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTG9naW5Gb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCb3hcIj5cclxuICAgICAgICAgIDxoMT7ruYTtmozsm5Ag7JiI7JW97ZmV7J24PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD7smIjslb3snpAg7J2066mU7J28IOyeheugpTwvcD5cclxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJhdXRoL2xvZ2luXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVtYWlsKHZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcGxhY2VIb2xkZXI9XCJ4eHh4eEBuYXZlci5jb21cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLrgrQg7JiI7JW9IO2ZleyduFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUb3RhbENvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0Q291bnQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJUb3RhbENvdW50XCI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIOuwlOuhnCDsmIjrp6Qg6rCA64ql7ZWcIO2WieyCrOqwgFxyXG4gICAgICAgIDxzdHJvbmc+e2AgJHtwcm9kdWN0Q291bnR96rCcIGB9PC9zdHJvbmc+XHJcbiAgICAgICAg7J6I7Iq164uI64ukXHJcbiAgICAgIDwvcD5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuVG90YWxDb3VudC5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdENvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3RhbENvdW50O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RCb3ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtSW5mbzoge1xyXG4gICAgICBkaXNwbGF5SW5mb0lkLFxyXG4gICAgICBwcm9kdWN0SW1hZ2VVcmwsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgICAgcGxhY2VOYW1lLFxyXG4gICAgICBwcm9kdWN0Q29udGVudCxcclxuICAgIH0sXHJcbiAgICB0ZXh0TGltaXQsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0ZvbGQsIHNldElzRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNJY29uU2hvd2luZywgc2V0SXNJY29uU2hvd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW3RleHRPYmosIHNldFRleHRPYmpdID0gdXNlU3RhdGUoeyBzaW1wbGU6ICcnLCBkZXRhaWw6ICcnIH0pO1xyXG4gIGNvbnN0IGRldGFpbFRleHQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0ZXh0T2JqO1xyXG4gIGxldCB0cmltbWVkVGV4dCA9IHByb2R1Y3RDb250ZW50LnRyaW0oKTtcclxuICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICBpZiAodHJpbW1lZFRleHQubGVuZ3RoID4gdGV4dExpbWl0KSB7XHJcbiAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgdGV4dExpbWl0KTtcclxuICAgIGNvbnN0IHRleHREZXRhaWwgPSB0cmltbWVkVGV4dC5zbGljZSh0ZXh0TGltaXQpO1xyXG4gICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0ZXh0U2ltcGxlLCBkZXRhaWw6IHRleHREZXRhaWwgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2hvd0FuZEhpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoaXNGb2xkKSB7XHJcbiAgICAgIHNldElzRm9sZChmYWxzZSk7XHJcbiAgICAgICQoZGV0YWlsVGV4dC5jdXJyZW50KS5zbGlkZURvd24oMTAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzRm9sZCh0cnVlKTtcclxuICAgICAgJChkZXRhaWxUZXh0LmN1cnJlbnQpLnNsaWRlVXAoMTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUHJvZHVjdEJveFwiPlxyXG4gICAgICA8TGluayB0bz17YC9kZXRhaWwvJHtkaXNwbGF5SW5mb0lkfWB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInBob3RvXCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIi8ke3Byb2R1Y3RJbWFnZVVybH1cIilgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPlxyXG4gICAgICAgICAgPGgxPntwcm9kdWN0RGVzY3JpcHRpb259PC9oMT5cclxuICAgICAgICAgIDxoMj57cGxhY2VOYW1lfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFpblRleHRcIlxyXG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNJY29uU2hvd2luZyh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzSWNvblNob3dpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7dGV4dE9iai5kZXRhaWwgPyAoXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIHt0ZXh0T2JqLnNpbXBsZX1cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG90c1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc0ZvbGQgPyAnaW5saW5lJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9yZURlc2NcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtkZXRhaWxUZXh0fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAge3RleHRPYmouZGV0YWlsfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZuICR7aXNGb2xkID8gJ2ZuLWRvdHMyJyA6ICdmbi11cDInfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBbmRIaWRlfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpc0ljb25TaG93aW5nID8gJyMwMDAnIDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwPnt0ZXh0T2JqLnNpbXBsZX08L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2R1Y3RCb3guZGVmYXVsdFByb3BzID0ge1xyXG4gIHRleHRMaW1pdDogMTAwLFxyXG59O1xyXG5cclxuUHJvZHVjdEJveC5wcm9wVHlwZXMgPSB7XHJcbiAgaXRlbUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0SW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgdGV4dExpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEJveDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciwgdHJhbnNmb3JtTW9uZXlVbml0IH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBBY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vUmVzZXJ2YXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgVGlja2V0SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGluZm86IHtcclxuICAgICAgcmVzZXJ2YXRpb25JbmZvSWQsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICByZXNlcnZhdGlvbkRhdGUsXHJcbiAgICAgIHJlc2VydmF0aW9uTmFtZSxcclxuICAgICAgcmVzZXJ2YXRpb25UZWwsXHJcbiAgICAgIHByaWNlSW5mbyxcclxuICAgICAgcGxhY2VOYW1lLFxyXG4gICAgICB0b3RhbFByaWNlLFxyXG4gICAgICBwcm9kdWN0SWQsXHJcbiAgICB9LFxyXG4gICAgYWN0aW9ucyxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24gfSA9IHVzZUNvbnRleHQoQWN0aW9uQ29udGV4dCk7XHJcbiAgY29uc3QgcmVzZXJ2YXRpb25TdW1tYXJ5ID0gcHJpY2VJbmZvXHJcbiAgICAucmVkdWNlKChhY2N1bSwgY3VycmVudCkgPT4ge1xyXG4gICAgICBgJHthY2N1bX0gICAgJHtwcmljZVR5cGVNYXBwZXJbY3VycmVudC5wcmljZVR5cGVOYW1lXX0gJHtcclxuICAgICAgICBjdXJyZW50LmNvdW50XHJcbiAgICAgIH0g66ekLGA7XHJcbiAgICB9LCAnJylcclxuICAgIC5zbGljZSgwLCAtMSk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChhY3Rpb25zKSA9PiB7XHJcbiAgICBjb25zdCBub3RlcyA9IGFjdGlvbnMubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgY2xpY2s6IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbihwcm9kdWN0SWQpLCBjaGlsZHJlbjogJ+y3qOyGjCcgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodmFsdWUgPT09ICdyZXZpZXdXcml0ZScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY2xpY2s6IGAvcmV2aWV3d3JpdGUvJHtwcm9kdWN0SWR9YCxcclxuICAgICAgICAgIGNoaWxkcmVuOiAn7JiI66ek7J6QIOumrOu3sCDrgqjquLDquLAnLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxCdXR0b25CdW5jaCBub3Rlcz17bm90ZXN9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiVGlja2V0SW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFNlY3Rpb25cIj5cclxuICAgICAgICA8aDI+e2BOby4ke1N0cmluZyhyZXNlcnZhdGlvbkluZm9JZCkucGFkU3RhcnQoOCwgJzAnKX1gfTwvaDI+XHJcbiAgICAgICAgPGgxPntkZXNjcmlwdGlvbn08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVTZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHA+7J287KCVPC9wPlxyXG4gICAgICAgICAgPHA+e3Jlc2VydmF0aW9uRGF0ZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHA+64K07JetPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICA8cD7smIjrp6TsnpAg7J2066aEPC9wPlxyXG4gICAgICAgICAgICA8cD57cmVzZXJ2YXRpb25OYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICA8cD7smIjrp6TsnpAg7KCE7ZmU67KI7Zi4PC9wPlxyXG4gICAgICAgICAgICA8cD57cmVzZXJ2YXRpb25UZWx9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpCDrp6TsiJg8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpY2tldFwiPntyZXNlcnZhdGlvblN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHA+7J6l7IaMPC9wPlxyXG4gICAgICAgICAgPHA+e3BsYWNlTmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVNlY3Rpb25cIj5cclxuICAgICAgICA8cD7qsrDsoJwg6riI7JWhPC9wPlxyXG4gICAgICAgIDxwPntgJHt0cmFuc2Zvcm1Nb25leVVuaXQodG90YWxQcmljZSl9IOybkGB9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NyZWF0ZUJ1dHRvbihhY3Rpb25zKX1cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuXHJcblRpY2tldEluZm8ucHJvcFR5cGVzID0ge1xyXG4gIGluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICByZXNlcnZhdGlvbkluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvblRlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0b3RhbFByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByaWNlSW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBjb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEluZm87XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUmVzZXJ2ZUZvcm0gZnJvbSAnLi4vUmVzZXJ2ZUZvcm0nO1xyXG5pbXBvcnQgUmVzZXJ2ZURlc2MgZnJvbSAnLi4vUmVzZXJ2ZURlc2MnO1xyXG5pbXBvcnQgTWFpbkltYWdlIGZyb20gJy4uL01haW5JbWFnZSc7XHJcblxyXG5jb25zdCBSZXNlcnZlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGlzcGxheUluZm9JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgbGV0IHByb2R1Y3REYXRhO1xyXG4gIGxldCByZXNlcnZhdGlvbkRhdGU7XHJcbiAgbGV0IHN0YXJ0RGF0ZTtcclxuICBsZXQgZW5kRGF0ZTtcclxuICBsZXQgaW1hZ2VTcmM7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBwcm9kdWN0RGF0YSA9IChhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHMvJHtkaXNwbGF5SW5mb0lkfWApKS5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGlmZkRheXMgPSB7IHJlc2VydmU6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUgKyAxKSB9O1xyXG4gICAgZGlmZkRheXMuc3RhcnQgPSBkaWZmRGF5cy5yZXNlcnZlIC0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpO1xyXG4gICAgZGlmZkRheXMuZW5kID0gZGlmZkRheXMucmVzZXJ2ZSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUgKyAxKTtcclxuICAgIHJlc2VydmF0aW9uRGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMucmVzZXJ2ZSwgJ2RheXMnKVxyXG4gICAgICAuZm9ybWF0KCdZWVlZLk1NLkREIEhIOm1tOnNzJyk7XHJcbiAgICBzdGFydERhdGUgPSBtb21lbnQoKVxyXG4gICAgICAudHooJ0FzaWEvU2VvdWwnKVxyXG4gICAgICAuYWRkKGRpZmZEYXlzLnN0YXJ0LCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQuKGRkZCknKTtcclxuICAgIGVuZERhdGUgPSBtb21lbnQoKVxyXG4gICAgICAudHooJ0FzaWEvU2VvdWwnKVxyXG4gICAgICAuYWRkKGRpZmZEYXlzLmVuZCwgJ2RheXMnKVxyXG4gICAgICAuZm9ybWF0KCdZWVlZLk1NLkRELihkZGQpJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcHJvZHVjdERhdGEucHJvZHVjdEltYWdlcy5zb21lKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAodmFsdWUudHlwZSA9PT0gJ21hJykge1xyXG4gICAgICAgIGltYWdlU3JjID0gdmFsdWUuc2F2ZUZpbGVOYW1lO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzZXJ2ZUNvbnRhaW5lclwiPlxyXG4gICAgICA8TWFpbkltYWdlIHNyYz17aW1hZ2VTcmN9IGFsdD1cIm1haW4gaW1hZ2VcIiAvPlxyXG4gICAgICA8UmVzZXJ2ZURlc2NcclxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAgIHBsYWNlPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wbGFjZUxvdH1cclxuICAgICAgICBzdGFydERhdGU9e3N0YXJ0RGF0ZX1cclxuICAgICAgICBlbmREYXRlPXtlbmREYXRlfVxyXG4gICAgICAgIHByb2R1Y3RQcmljZXM9e3Byb2R1Y3REYXRhLnByb2R1Y3RQcmljZXN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZXNlcnZlRm9ybVxyXG4gICAgICAgIHByb2R1Y3RQcmljZXM9e3Byb2R1Y3REYXRhLnByb2R1Y3RQcmljZXN9XHJcbiAgICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgICBwcm9kdWN0SWQ9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3RJZH1cclxuICAgICAgICByZXNlcnZhdGlvbkRhdGU9e3Jlc2VydmF0aW9uRGF0ZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBEZXRhaWxJbWFnZSBmcm9tICcuLi9EZXRhaWxJbWFnZSc7XHJcbmltcG9ydCBQcm9kdWN0RGVzYyBmcm9tICcuLi9Qcm9kdWN0RGVzYyc7XHJcbmltcG9ydCBFdmVudEluZm8gZnJvbSAnLi4vRXZlbnRJbmZvJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuaW1wb3J0IFJldmlld0NvbnRhaW5lciBmcm9tICcuLi9SZXZpZXdDb250YWluZXInO1xyXG5pbXBvcnQgUHJvZHVjdEluZm8gZnJvbSAnLi4vUHJvZHVjdEluZm8nO1xyXG5cclxuY29uc3QgRGV0YWlsQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGlzcGxheUluZm9JZCB9ID0gdXNlUGFyYW1zKCk7XHJcblxyXG4gIGxldCBwcm9kdWN0RGF0YTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8RGV0YWlsSW1hZ2VcclxuICAgICAgICBpbWFnZXM9e3Byb2R1Y3REYXRhLnByb2R1Y3RJbWFnZXN9XHJcbiAgICAgICAgdGl0bGU9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3REZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3REZXNjIHRleHQ9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnByb2R1Y3RDb250ZW50fSAvPlxyXG4gICAgICA8RXZlbnRJbmZvIHByb2R1Y3RQcmljZXM9e3Byb2R1Y3REYXRhLnByb2R1Y3RQcmljZXN9IC8+XHJcbiAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnRDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWVjODAwJyxcclxuICAgICAgICAgICAgY2xpY2s6IGAvcmVzZXJ2ZS8ke2Rpc3BsYXlJbmZvSWR9YCxcclxuICAgICAgICAgICAgY2hpbGRyZW46ICc8aSBjbGFzcz1cImZuIGZuLW5ib29raW5nLWNhbGVuZGVyMlwiPjwvaT4g7JiI66ek7ZWY6riwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgICAgPFJldmlld0NvbnRhaW5lclxyXG4gICAgICAgIGRpc3BsYXlJbmZvSWQ9e2Rpc3BsYXlJbmZvSWR9XHJcbiAgICAgICAgcmV2aWV3cz17cHJvZHVjdERhdGEuY29tbWVudHN9XHJcbiAgICAgICAgYXZlcmFnZVNjb3JlPXtwcm9kdWN0RGF0YS5hdmVyYWdlU2NvcmV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9kdWN0SW5mb1xyXG4gICAgICAgIGRpc3BsYXlJbmZvPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mb31cclxuICAgICAgICBsb2NhdGlvbkltZ1NyYz17cHJvZHVjdERhdGEuZGlzcGxheUluZm9JbWFnZS5zYXZlRmlsZU5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBSZXNlcnZlckluZm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBuYW1lLFxyXG4gICAgdGVsZXBob25lLFxyXG4gICAgZW1haWwsXHJcbiAgICByZXNlcnZhdGlvbkRhdGUsXHJcbiAgICB0b3RhbFRpY2tldCxcclxuICAgIGRpc3BhdGNoLFxyXG4gICAgaXNWZXJpZmllZE5hbWUsXHJcbiAgICBpc1ZlcmlmaWVkVGVsLFxyXG4gICAgaXNWZXJpZmllZEVtYWlsLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgbWFrZUFsZXJ0ID0gKGlkLCB0ZXh0KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPVwidGFibGVSb3dcIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XHJcbiAgICAgICAgPHAgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGVydE1lc3NhZ2VcIj57dGV4dH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJSZXNlcnZlckluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNlcnZlckhlYWRlclwiPlxyXG4gICAgICAgIDxoMj7smIjrp6TsnpAg7KCV67O0PC9oMj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgIO2VhOyImOyeheugpVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFJlc2VydmVyXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICDsmIjrp6TsnpBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uTmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLtmY3quLjrj5lcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfTkFNRScsIHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNhbGVydFdyb25nTmFtZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ05hbWUnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9OQU1FJyB9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNhbGVydFdyb25nTmFtZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ05hbWUnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNWZXJpZmllZE5hbWVcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nTmFtZScsICfsnbTrpoTsl5DripQg6rO167Cx7J20IOyeiOyWtOyEnOuKlCDslYjrkKnri4jri6QuJyl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwiaW5wdXRUZWxcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIOyXsOudveyymFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGVsZXBob25lfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJyZXNlcnZhdGlvblRlbGVwaG9uZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwMTAtMDAwMC0wMDAwXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX1RFTCcsIHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNhbGVydFdyb25nVGVsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nVGVsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfVEVMJyB9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJyNhbGVydFdyb25nVGVsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nVGVsJykuc2xpZGVEb3duKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzVmVyaWZpZWRUZWxcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nVGVsJywgJ+yghO2ZlOuyiO2YuCDtmJXsi53snbQg66ee7KeAIOyViuyKteuLiOuLpCcpfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIiBpZD1cImlucHV0RW1haWxcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIOydtOuplOydvFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uRW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieHh4eHh4QG5hdmVyLmNvbVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9FTUFJTCcsIHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoJ2FsZXJ0V3JvbmdFbWFpbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ0VtYWlsJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfRU1BSUwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdFbWFpbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAkKCcjYWxlcnRXcm9uZ0VtYWlsJykuc2xpZGVEb3duKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwib3ZlcmFsbFJlc2VydmF0aW9uXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiBzdHlsZT17eyBjb2xvcjogJ3RyYW5zcGFyZW50JyB9fSAvPlxyXG4gICAgICAgICAgICDsmIjrp6TrgrTsmqlcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwPntgJHtyZXNlcnZhdGlvbkRhdGV9LCDstJ0gJHt0b3RhbFRpY2tldH3rp6RgfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNWZXJpZmllZEVtYWlsXHJcbiAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICA6IG1ha2VBbGVydCgnYWxlcnRXcm9uZ0VtYWlsJywgJ+ydtOuplOydvCDtmJXsi53snbQg66ee7KeAIOyViuyKteuLiOuLpCcpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2ZXJJbmZvLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdGVsZXBob25lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICByZXNlcnZhdGlvbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0b3RhbFRpY2tldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGlzVmVyaWZpZWROYW1lOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGlzVmVyaWZpZWRUZWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZEVtYWlsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZXJJbmZvO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBQcm9kdWN0Q29udGFpbmVyIGZyb20gJy4uL1Byb2R1Y3RDb250YWluZXInO1xyXG5cclxuY29uc3QgTWFpblZpZXcgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSBwcm9wcztcclxuICBjb25zdCBsZWZ0UHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoKHYsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDApO1xyXG4gIGNvbnN0IHJpZ2h0UHJvZHVjdHMgPSBwcm9kdWN0cy5maWx0ZXIoKHYsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNYWluVmlld1wiPlxyXG4gICAgICA8UHJvZHVjdENvbnRhaW5lciBjbGFzc05hbWU9XCJsZWZ0XCI+e2xlZnRQcm9kdWN0c308L1Byb2R1Y3RDb250YWluZXI+XHJcbiAgICAgIDxQcm9kdWN0Q29udGFpbmVyIGNsYXNzTmFtZT1cInJpZ2h0XCI+e3JpZ2h0UHJvZHVjdHN9PC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5WaWV3LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5WaWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG5pbXBvcnQgRGV0YWlsQ29udGFpbmVyIGZyb20gJy4uL0RldGFpbENvbnRhaW5lcic7XHJcbmltcG9ydCBSZXNlcnZlQ29udGFpbmVyIGZyb20gJy4uL1Jlc2VydmVDb250YWluZXInO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25Db250YWluZXIgZnJvbSAnLi4vUmVzZXJ2YXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgUHJvbW90aW9uSW1hZ2UgZnJvbSAnLi4vUHJvbW90aW9uSW1hZ2UnO1xyXG5pbXBvcnQgUmV2aWV3RWRpdCBmcm9tICcuLi9SZXZpZXdFZGl0JztcclxuaW1wb3J0IFJldmlld1Byb3ZpZGVyIGZyb20gJy4uL1Jldmlld1Byb3ZpZGVyJztcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi4vTWFpbkNvbnRhaW5lcic7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8U3dpdGNoPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RldGFpbC86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgPE5hdkJhciBpc1RyYW5zcGFyZW50IC8+XHJcbiAgICAgICAgICA8RGV0YWlsQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9kZXRhaWxcIj57LyogcmVkaXJlY3Qg7Iuc7Lyc7JW8IO2VqCAqL308L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Jvb2tpbmdsb2dpblwiPlxyXG4gICAgICAgICAgey8qIOyZhOyEseuQqCAqL31cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL215cmVzZXJ2YXRpb25cIj5cclxuICAgICAgICAgIHsvKiDsmYTshLEg65CoICovfVxyXG4gICAgICAgICAgPE5hdkJhciBpc0xvZ291dGFibGUgLz5cclxuICAgICAgICAgIDxSZXNlcnZhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVzZXJ2ZS86ZGlzcGxheUluZm9JZFwiPlxyXG4gICAgICAgICAgey8qIOyZhOyEseuQqCAqL31cclxuICAgICAgICAgIDxOYXZCYXIgaXNNYWluPXtmYWxzZX0gLz5cclxuICAgICAgICAgIDxSZXNlcnZlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXZpZXcvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8UmV2aWV3UHJvdmlkZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jldmlld3dyaXRlLzpwcm9kdWN0SWRcIj5cclxuICAgICAgICAgIDxOYXZCYXIgaXNNYWluPXtmYWxzZX0gLz5cclxuICAgICAgICAgIHsvKiByZXZpZXdFZGl06rCAIOuvuOyZhCAqL31cclxuICAgICAgICAgIDxSZXZpZXdFZGl0IC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgIDxQcm9tb3Rpb25JbWFnZSAvPlxyXG4gICAgICAgICAgPE1haW5Db250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxyXG4gICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgey8qIDQwNCBub3QgZm91bmTsnbjqsbgg64KY7YOA64K06rKMICovfVxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgIDwvU3dpdGNoPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPC9Ccm93c2VyUm91dGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLFxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBSZXZpZXdDb250YWluZXIgZnJvbSAnLi4vUmV2aWV3Q29udGFpbmVyJztcclxuXHJcbmNvbnN0IFJldmlld1Byb3ZpZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGlzcGxheUluZm9JZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgbGV0IHByb2R1Y3REYXRhO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcHJvZHVjdERhdGEgPSAoYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKSkuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZXZpZXdDb250YWluZXJcclxuICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgYXZlcmFnZVNjb3JlPXtwcm9kdWN0RGF0YS5hdmVyYWdlU2NvcmV9XHJcbiAgICAgIHJldmlld3M9e3Byb2R1Y3REYXRhLmNvbW1lbnRzfVxyXG4gICAgICBpc0JyaWVmPXtmYWxzZX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1Byb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgSW1hZ2VUaXRsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGVncmVlLCBpbWFnZUxlbiwgdGl0bGUsIGxlZnRTY3JvbGwsIHJpZ2h0U2Nyb2xsIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiSW1hZ2VUaXRsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wU2VjdGlvblwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRpbmdcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnJpZ2h0XCI+e2RlZ3JlZSArIDF9PC9zcGFuPlxyXG4gICAgICAgICAgICB7YCAvICR7aW1hZ2VMZW59YH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFNlY3Rpb25cIj5cclxuICAgICAgICAgICAge2ltYWdlTGVuID4gMSA/IChcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1iYWNrd2FyZDJcIiBvbkNsaWNrPXtsZWZ0U2Nyb2xsfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyU2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZUxlbiA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tZm9yd2FyZDJcIiBvbkNsaWNrPXtyaWdodFNjcm9sbH0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21TZWN0aW9uXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkltYWdlVGl0bGUucHJvcFR5cGVzID0ge1xyXG4gIGRlZ3JlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBsZWZ0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxuICByaWdodFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRpdGxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUaWNrZXRIZWFkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgaXNHcmVlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgVGlja2V0SGVhZCAke2lzR3JlZW4gPyAnZ3JlZW4nIDogJ2dyZXknfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldExlZnRcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldE1pZGRsZVwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19jaGVjazJcIiAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0UmlnaHRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblRpY2tldEhlYWQucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIGlzR3JlZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRIZWFkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRPUyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXNDaGVja2VkLCBkaXNwYXRjaCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzQ29sbGVjdGlvbkZvbGQsIHNldElzQ29sbGVjdGlvbkZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzT2ZmZXJGb2xkLCBzZXRJc09mZmVyRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgZm9sZFRleHQgPSAn7KCR6riwIDxpIGNsYXNzPVwiZm4gZm4tdXAyXCI+PC9pPic7XHJcbiAgY29uc3Qgc2hvd1RleHQgPSAn67O06riwIDxpIGNsYXNzPVwiZm4gZm4tZG93bjJcIj48L2k+JztcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29sbGVjdGlvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzQ29sbGVjdGlvbkZvbGQpIHtcclxuICAgICAgJCgnLmNvbGxlY3Rpb25Vc2VUZXJtJykuc2xpZGVEb3duKCk7XHJcbiAgICAgIHNldElzQ29sbGVjdGlvbkZvbGQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmNvbGxlY3Rpb25Vc2VUZXJtJykuc2xpZGVVcCgpO1xyXG4gICAgICBzZXRJc0NvbGxlY3Rpb25Gb2xkKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9mZmVyQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNPZmZlckZvbGQpIHtcclxuICAgICAgJCgnLm9mZmVyVGVybScpLnNsaWRlRG93bigpO1xyXG4gICAgICBzZXRJc09mZmVyRm9sZChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcub2ZmZXJUZXJtJykuc2xpZGVVcCgpO1xyXG4gICAgICBzZXRJc09mZmVyRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFyaXRsY2UgY2xhc3NOYW1lPVwiVE9TXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsQWdyZWVtZW50XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgbmFtZT1cIlRPU0NoZWNrXCJcclxuICAgICAgICAgIGlkPVwiVE9TQ2hlY2tcIlxyXG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfVE9TJywgY2hlY2tlZCB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlRPU0NoZWNrXCI+7J207Jqp7J6QIOyVveq0gCDsoITssrTrj5nsnZg8L2xhYmVsPlxyXG4gICAgICAgIDxwPu2VhOyImCDrj5nsnZg8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVlbWVudFwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2Fycl9pcGMyXCIgLz5cclxuICAgICAgICAgIOqwnOyduOygleuztCDsiJjsp5Eg67CPIOydtOyaqSDrj5nsnZhcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sbGVjdGlvblVzZUFncmVlbWVudFwiIG9uQ2xpY2s9e2hhbmRsZUNvbGxlY3Rpb25DbGlja30+XHJcbiAgICAgICAgICB7aXNDb2xsZWN0aW9uRm9sZCA/IHNob3dUZXh0IDogZm9sZFRleHR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHBcclxuICAgICAgICBjbGFzc05hbWU9XCJjb2xsZWN0aW9uVXNlVGVybVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNDb2xsZWN0aW9uRm9sZCA/ICdub25lJyA6ICdibG9jaycgfX1cclxuICAgICAgPlxyXG4gICAgICAgICZsdDvqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2YJmd0O1xyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDEuIOyImOynke2VreuqqSA6IFvtlYTsiJhdIOydtOumhCwg7Jew65297LKYLCBb7ISg7YOdXSDsnbTrqZTsnbzso7zshoxcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAyLiDsiJjsp5Eg67CPIOydtOyaqeuqqeyggSA6IOyCrOyXheyekO2ajOybkOqzvCDsmIjslb3snbTsmqnsnpDsnZgg7JuQ7Zmc7ZWcIOqxsOuemCDsp4TtloksXHJcbiAgICAgICAg6rOg6rCd7IOB64u0LCDrtojrp4zsspjrpqwg65OxIOuvvOybkCDsspjrpqwsIOu2hOyfgeyhsOyglSDtlbTqsrDsnYQg7JyE7ZWcIOq4sOuhneuztOyhtCwg64Sk7J2067KEXHJcbiAgICAgICAg7JiI7JW9IOydtOyaqSDtm4Qg66as67ew7J6R7ISx7JeQIOuUsOuluCDrhKTsnbTrsoTtjpjsnbQg7Y+s7J247Yq4IOyngOq4iSDrsI8g6rSA66CoIOyViOuCtFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDMuIOuztOq0gOq4sOqwhFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIC0g7ZqM7JuQ7YOI7Ye0IOuTsSDqsJzsnbjsoJXrs7Qg7J207Jqp66qp7KCBIOuLrOyEsSDsi5zquYzsp4Ag67O06rSAXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgLSDri6gsIOyDgeuylSDrsI8g4oCY7KCE7J6Q7IOB6rGw656YIOuTseyXkOyEnOydmCDshozruYTsnpAg67O07Zi47JeQIOq0gO2VnCDrspXrpaDigJkg65OxIOq0gOugqFxyXG4gICAgICAgIOuyleugueyXkCDsnZjtlZjsl6wg7J287KCVIOq4sOqwhCDrs7TqtIDsnbQg7ZWE7JqU7ZWcIOqyveyasOyXkOuKlCDtlbTri7kg6riw6rCEIOuPmeyViCDrs7TqtIDtlahcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA0LiDrj5nsnZgg6rGw67aA6raMIOuTseyXkCDrjIDtlZwg6rOg7KeAOiDsoJXrs7Tso7zssrTripQg6rCc7J247KCV67O07J2YIOyImOynkSDrsI8g7J207JqpIOuPmeydmOulvFxyXG4gICAgICAgIOqxsOu2gO2VoCDqtozrpqzqsIAg7J6I7Jy864KYLCDsnbQg6rK97JqwIOyDge2SiCDrsI8g7ISc67mE7IqkIOyYiOyVveydtCDsoJztlZzrkKAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVlbWVudFwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2Fycl9pcGMyXCIgLz5cclxuICAgICAgICAgIOqwnOyduOygleuztCDsoJwz7J6QIOygnOqztSDrj5nsnZhcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJBZ3JlZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVPZmZlckNsaWNrfT5cclxuICAgICAgICAgIHtpc09mZmVyRm9sZCA/IHNob3dUZXh0IDogZm9sZFRleHR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHBcclxuICAgICAgICBjbGFzc05hbWU9XCJvZmZlclRlcm1cIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzT2ZmZXJGb2xkID8gJ25vbmUnIDogJ2Jsb2NrJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgJmx0O+qwnOyduOygleuztCDsoJwz7J6QIOygnOqztSDrj5nsnZgmZ3Q7XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMS4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpAgOiDrr7jrlJTslrTslaTslYTtirhcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAyLiDsoJzqs7XtlZjripQg6rCc7J247KCV67O0IO2VreuqqSA6IFvtlYTsiJhdIOuEpOydtOuyhCDslYTsnbTrlJQsIOydtOumhCwg7Jew65297LKYIFvshKDtg51dXHJcbiAgICAgICAg7J2066mU7J28IOyjvOyGjFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDMuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6Q7J2YIOydtOyaqeuqqeyggSA6IOyCrOyXheyekO2ajOybkOqzvCDsmIjslb3snbTsmqnsnpDsnZgg7JuQ7Zmc7ZWcXHJcbiAgICAgICAg6rGw656YIOynhO2WiSwg6rOg6rCd7IOB64u0LCDrtojrp4zsspjrpqwg65OxIOuvvOybkCDsspjrpqwsIOyEnOu5hOyKpCDsnbTsmqnsl5Ag65Sw66W4IOyEpOusuOyhsOyCrFxyXG4gICAgICAgIOuwjyDtmJztg50g7KCc6rO1LCDrtoTsn4HsobDsoJUg7ZW06rKw7J2EIOychO2VnCDquLDroZ3rs7TsobRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA0LiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekOydmCDqsJzsnbjsoJXrs7Qg67O07JygIOuwjyDsnbTsmqnquLDqsIQgOiDqsJzsnbjsoJXrs7RcclxuICAgICAgICDsnbTsmqnrqqnsoIEg64us7ISxIOyLnCDquYzsp4Ag67O06rSA7ZWp64uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDUuIOuPmeydmCDqsbDrtoDqtowg65Ox7JeQIOuMgO2VnCDqs6Dsp4AgOiDsoJXrs7Tso7zssrTripQg6rCc7J247KCV67O0IOygnOqztSDrj5nsnZjrpbwg6rGw67aA7ZWgXHJcbiAgICAgICAg6raM66as6rCAIOyeiOycvOuCmCwg7J20IOqyveyasCDsg4Htkogg67CPIOyEnOu5hOyKpCDsmIjslb3snbQg7KCc7ZWc65CgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvYXJpdGxjZT5cclxuICApO1xyXG59O1xyXG5cclxuVE9TLnByb3BUeXBlcyA9IHtcclxuICBpc0NoZWNrZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT1M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGlja2V0SW5mbyBmcm9tICcuLi9UaWNrZXRJbmZvJztcclxuXHJcbmNvbnN0IFRpY2tldEluZm9MaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbmZvcywgYWN0aW9ucyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxvbCBjbGFzc05hbWU9XCJUaWNrZXRJbmZvTGlzdFwiPlxyXG4gICAgICB7aW5mb3MubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gPFRpY2tldEluZm8ga2V5PXtpbmRleH0gaW5mbz17dmFsdWV9IGFjdGlvbnM9e2FjdGlvbnN9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvb2w+XHJcbiAgKTtcclxufTtcclxuXHJcblRpY2tldEluZm9MaXN0LnByb3BUeXBlcyA9IHtcclxuICBpbmZvczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRJbmZvTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyLCB0cmFuc2Zvcm1Nb25leVVuaXQgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBSZXNlcnZlRGVzYyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIHBsYWNlLCBzdGFydERhdGUsIGVuZERhdGUsIHByb2R1Y3RQcmljZXMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBwcmljZVRleHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmljZUxpc3QgPSBwcm9kdWN0UHJpY2VzLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgcmV0dXJuIGAke3ByaWNlVHlwZU1hcHBlcih2YWx1ZS5wcmljZVR5cGVOYW1lKX0gJHt0cmFuc2Zvcm1Nb25leVVuaXQoXHJcbiAgICAgICAgdmFsdWUucHJpY2UsXHJcbiAgICAgICl97JuQYDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByaWNlTGlzdC5qb2luKCcgLyAnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzZXJ2ZURlc2NcIj5cclxuICAgICAgPGgyPntkZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICA8cD5cclxuICAgICAgICB7cGxhY2V9XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge2Ake3N0YXJ0RGF0ZX0gfiAke2VuZERhdGV9YH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8aDI+7JqU6riIPC9oMj5cclxuICAgICAgPHA+e3ByaWNlVGV4dCgpfTwvcD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2ZURlc2MucHJvcFR5cGVzID0ge1xyXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcGxhY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzdGFydERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbmREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBwcmljZVR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByaWNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlRGVzYztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJIZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJzcHJfYmkgdHh0X2xvZ29cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImNvbnN0IHRyYW5zZm9ybU1vbmV5VW5pdCA9IChudW0pID0+IHtcclxuICBsZXQgdHJhbnNmb3JtZWQgPSAnJztcclxuICBudW0gPSBudW0udG9TdHJpbmcoKTtcclxuICBjb25zdCBudW1MZW4gPSBudW0ubGVuZ3RoO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bUxlbjsgaSsrKSB7XHJcbiAgICBpZiAoaSA+IDMgJiYgaSAlIDMgPT09IDEpIHtcclxuICAgICAgdHJhbnNmb3JtZWQgPSBgLCR7dHJhbnNmb3JtZWR9YDtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybWVkID0gbnVtLmNoYXJBdChudW1MZW4gLSBpKSArIHRyYW5zZm9ybWVkO1xyXG4gIH1cclxuICByZXR1cm4gdHJhbnNmb3JtZWQ7XHJcbn07XHJcblxyXG5jb25zdCBwcmljZVR5cGVNYXBwZXIgPSAodmFsdWUpID0+IHtcclxuICBjb25zdCBwcmljZVR5cGUgPSB7XHJcbiAgICBBOiAn7ISx7J24JyxcclxuICAgIFk6ICfssq3shozrhYQnLFxyXG4gICAgQjogJ+ycoOyVhCcsXHJcbiAgICBTOiAn7IWL7Yq4JyxcclxuICAgIEQ6ICfsnqXslaDsnbgnLFxyXG4gICAgQzogJ+yngOyXreyjvOuvvCcsXHJcbiAgICBFOiAn7Ja07Ja866as67KE65OcJyxcclxuICAgIFY6ICdWSVAnLFxyXG4gICAgUjogJ1LshJ0nLFxyXG4gIH07XHJcbiAgcmV0dXJuIHByaWNlVHlwZVt2YWx1ZV07XHJcbn07XHJcblxyXG5jb25zdCB2YWxpZEltYWdlVHlwZSA9IChpbWFnZSkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdCA9IFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2UvanBnJ10uaW5kZXhPZihpbWFnZSkgPiAtMTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdHJhbnNmb3JtTW9uZXlVbml0LCBwcmljZVR5cGVNYXBwZXIsIHZhbGlkSW1hZ2VUeXBlIH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIksvdGNcIixcblx0XCIuL2FmLmpzXCI6IFwiSy90Y1wiLFxuXHRcIi4vYXJcIjogXCJqbk80XCIsXG5cdFwiLi9hci1kelwiOiBcIm8xYkVcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwibzFiRVwiLFxuXHRcIi4vYXIta3dcIjogXCJRajRKXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIlFqNEpcIixcblx0XCIuL2FyLWx5XCI6IFwiSFAzaFwiLFxuXHRcIi4vYXItbHkuanNcIjogXCJIUDNoXCIsXG5cdFwiLi9hci1tYVwiOiBcIkNvUkpcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiQ29SSlwiLFxuXHRcIi4vYXItc2FcIjogXCJnakNUXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcImdqQ1RcIixcblx0XCIuL2FyLXRuXCI6IFwiYllNNlwiLFxuXHRcIi4vYXItdG4uanNcIjogXCJiWU02XCIsXG5cdFwiLi9hci5qc1wiOiBcImpuTzRcIixcblx0XCIuL2F6XCI6IFwiU0Z4V1wiLFxuXHRcIi4vYXouanNcIjogXCJTRnhXXCIsXG5cdFwiLi9iZVwiOiBcIkg4RURcIixcblx0XCIuL2JlLmpzXCI6IFwiSDhFRFwiLFxuXHRcIi4vYmdcIjogXCJoS3JzXCIsXG5cdFwiLi9iZy5qc1wiOiBcImhLcnNcIixcblx0XCIuL2JtXCI6IFwicC9yTFwiLFxuXHRcIi4vYm0uanNcIjogXCJwL3JMXCIsXG5cdFwiLi9iblwiOiBcImtFT2FcIixcblx0XCIuL2JuLmpzXCI6IFwia0VPYVwiLFxuXHRcIi4vYm9cIjogXCIwbW8rXCIsXG5cdFwiLi9iby5qc1wiOiBcIjBtbytcIixcblx0XCIuL2JyXCI6IFwiYUlkZlwiLFxuXHRcIi4vYnIuanNcIjogXCJhSWRmXCIsXG5cdFwiLi9ic1wiOiBcIkpWU0pcIixcblx0XCIuL2JzLmpzXCI6IFwiSlZTSlwiLFxuXHRcIi4vY2FcIjogXCIxeFo0XCIsXG5cdFwiLi9jYS5qc1wiOiBcIjF4WjRcIixcblx0XCIuL2NzXCI6IFwiUEEyclwiLFxuXHRcIi4vY3MuanNcIjogXCJQQTJyXCIsXG5cdFwiLi9jdlwiOiBcIkEreGFcIixcblx0XCIuL2N2LmpzXCI6IFwiQSt4YVwiLFxuXHRcIi4vY3lcIjogXCJsNWVwXCIsXG5cdFwiLi9jeS5qc1wiOiBcImw1ZXBcIixcblx0XCIuL2RhXCI6IFwiRHhRdlwiLFxuXHRcIi4vZGEuanNcIjogXCJEeFF2XCIsXG5cdFwiLi9kZVwiOiBcInRHbFhcIixcblx0XCIuL2RlLWF0XCI6IFwicyt1a1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCJzK3VrXCIsXG5cdFwiLi9kZS1jaFwiOiBcInUzR0lcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwidTNHSVwiLFxuXHRcIi4vZGUuanNcIjogXCJ0R2xYXCIsXG5cdFwiLi9kdlwiOiBcIldZcmpcIixcblx0XCIuL2R2LmpzXCI6IFwiV1lyalwiLFxuXHRcIi4vZWxcIjogXCJqVWVZXCIsXG5cdFwiLi9lbC5qc1wiOiBcImpVZVlcIixcblx0XCIuL2VuLVNHXCI6IFwiemF2RVwiLFxuXHRcIi4vZW4tU0cuanNcIjogXCJ6YXZFXCIsXG5cdFwiLi9lbi1hdVwiOiBcIkRtdmlcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiRG12aVwiLFxuXHRcIi4vZW4tY2FcIjogXCJPSVlpXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIk9JWWlcIixcblx0XCIuL2VuLWdiXCI6IFwiT2FhN1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCJPYWE3XCIsXG5cdFwiLi9lbi1pZVwiOiBcIjRkT3dcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiNGRPd1wiLFxuXHRcIi4vZW4taWxcIjogXCJjek1vXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcImN6TW9cIixcblx0XCIuL2VuLW56XCI6IFwiYjFEeVwiLFxuXHRcIi4vZW4tbnouanNcIjogXCJiMUR5XCIsXG5cdFwiLi9lb1wiOiBcIlpkdW9cIixcblx0XCIuL2VvLmpzXCI6IFwiWmR1b1wiLFxuXHRcIi4vZXNcIjogXCJpWXVMXCIsXG5cdFwiLi9lcy1kb1wiOiBcIkNqelRcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiQ2p6VFwiLFxuXHRcIi4vZXMtdXNcIjogXCJWY2xxXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIlZjbHFcIixcblx0XCIuL2VzLmpzXCI6IFwiaVl1TFwiLFxuXHRcIi4vZXRcIjogXCI3QmpDXCIsXG5cdFwiLi9ldC5qc1wiOiBcIjdCakNcIixcblx0XCIuL2V1XCI6IFwiRC9KTVwiLFxuXHRcIi4vZXUuanNcIjogXCJEL0pNXCIsXG5cdFwiLi9mYVwiOiBcImpmU0NcIixcblx0XCIuL2ZhLmpzXCI6IFwiamZTQ1wiLFxuXHRcIi4vZmlcIjogXCJnZWtCXCIsXG5cdFwiLi9maS5qc1wiOiBcImdla0JcIixcblx0XCIuL2ZvXCI6IFwiQnlGNFwiLFxuXHRcIi4vZm8uanNcIjogXCJCeUY0XCIsXG5cdFwiLi9mclwiOiBcIm55WWNcIixcblx0XCIuL2ZyLWNhXCI6IFwiMmZqblwiLFxuXHRcIi4vZnItY2EuanNcIjogXCIyZmpuXCIsXG5cdFwiLi9mci1jaFwiOiBcIkRra3lcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwiRGtreVwiLFxuXHRcIi4vZnIuanNcIjogXCJueVljXCIsXG5cdFwiLi9meVwiOiBcImNSaXhcIixcblx0XCIuL2Z5LmpzXCI6IFwiY1JpeFwiLFxuXHRcIi4vZ2FcIjogXCJVU0N4XCIsXG5cdFwiLi9nYS5qc1wiOiBcIlVTQ3hcIixcblx0XCIuL2dkXCI6IFwiOXJSaVwiLFxuXHRcIi4vZ2QuanNcIjogXCI5clJpXCIsXG5cdFwiLi9nbFwiOiBcImlFRGRcIixcblx0XCIuL2dsLmpzXCI6IFwiaUVEZFwiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCJES3IrXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIkRLcitcIixcblx0XCIuL2d1XCI6IFwiNE1WM1wiLFxuXHRcIi4vZ3UuanNcIjogXCI0TVYzXCIsXG5cdFwiLi9oZVwiOiBcIng2cEhcIixcblx0XCIuL2hlLmpzXCI6IFwieDZwSFwiLFxuXHRcIi4vaGlcIjogXCIzRTFyXCIsXG5cdFwiLi9oaS5qc1wiOiBcIjNFMXJcIixcblx0XCIuL2hyXCI6IFwiUzZsblwiLFxuXHRcIi4vaHIuanNcIjogXCJTNmxuXCIsXG5cdFwiLi9odVwiOiBcIld4UmxcIixcblx0XCIuL2h1LmpzXCI6IFwiV3hSbFwiLFxuXHRcIi4vaHktYW1cIjogXCIxcll5XCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIjFyWXlcIixcblx0XCIuL2lkXCI6IFwiVURoUlwiLFxuXHRcIi4vaWQuanNcIjogXCJVRGhSXCIsXG5cdFwiLi9pc1wiOiBcIkJWZzNcIixcblx0XCIuL2lzLmpzXCI6IFwiQlZnM1wiLFxuXHRcIi4vaXRcIjogXCJicGloXCIsXG5cdFwiLi9pdC1jaFwiOiBcImJ4S1hcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiYnhLWFwiLFxuXHRcIi4vaXQuanNcIjogXCJicGloXCIsXG5cdFwiLi9qYVwiOiBcIkI1NU5cIixcblx0XCIuL2phLmpzXCI6IFwiQjU1TlwiLFxuXHRcIi4vanZcIjogXCJ0VUN2XCIsXG5cdFwiLi9qdi5qc1wiOiBcInRVQ3ZcIixcblx0XCIuL2thXCI6IFwiSUJ0WlwiLFxuXHRcIi4va2EuanNcIjogXCJJQnRaXCIsXG5cdFwiLi9ra1wiOiBcImJYbTdcIixcblx0XCIuL2trLmpzXCI6IFwiYlhtN1wiLFxuXHRcIi4va21cIjogXCI2QjBZXCIsXG5cdFwiLi9rbS5qc1wiOiBcIjZCMFlcIixcblx0XCIuL2tuXCI6IFwiUHBJd1wiLFxuXHRcIi4va24uanNcIjogXCJQcEl3XCIsXG5cdFwiLi9rb1wiOiBcIkl2aStcIixcblx0XCIuL2tvLmpzXCI6IFwiSXZpK1wiLFxuXHRcIi4va3VcIjogXCJKQ0YvXCIsXG5cdFwiLi9rdS5qc1wiOiBcIkpDRi9cIixcblx0XCIuL2t5XCI6IFwibGdudFwiLFxuXHRcIi4va3kuanNcIjogXCJsZ250XCIsXG5cdFwiLi9sYlwiOiBcIlJBd1FcIixcblx0XCIuL2xiLmpzXCI6IFwiUkF3UVwiLFxuXHRcIi4vbG9cIjogXCJzcDN6XCIsXG5cdFwiLi9sby5qc1wiOiBcInNwM3pcIixcblx0XCIuL2x0XCI6IFwiSnZsV1wiLFxuXHRcIi4vbHQuanNcIjogXCJKdmxXXCIsXG5cdFwiLi9sdlwiOiBcInVYd0lcIixcblx0XCIuL2x2LmpzXCI6IFwidVh3SVwiLFxuXHRcIi4vbWVcIjogXCJLVHowXCIsXG5cdFwiLi9tZS5qc1wiOiBcIktUejBcIixcblx0XCIuL21pXCI6IFwiYUlzblwiLFxuXHRcIi4vbWkuanNcIjogXCJhSXNuXCIsXG5cdFwiLi9ta1wiOiBcImFRa1VcIixcblx0XCIuL21rLmpzXCI6IFwiYVFrVVwiLFxuXHRcIi4vbWxcIjogXCJBdnZZXCIsXG5cdFwiLi9tbC5qc1wiOiBcIkF2dllcIixcblx0XCIuL21uXCI6IFwibFl0UVwiLFxuXHRcIi4vbW4uanNcIjogXCJsWXRRXCIsXG5cdFwiLi9tclwiOiBcIk9iMFpcIixcblx0XCIuL21yLmpzXCI6IFwiT2IwWlwiLFxuXHRcIi4vbXNcIjogXCI2K1FCXCIsXG5cdFwiLi9tcy1teVwiOiBcIlpBTVBcIixcblx0XCIuL21zLW15LmpzXCI6IFwiWkFNUFwiLFxuXHRcIi4vbXMuanNcIjogXCI2K1FCXCIsXG5cdFwiLi9tdFwiOiBcIkcwVXlcIixcblx0XCIuL210LmpzXCI6IFwiRzBVeVwiLFxuXHRcIi4vbXlcIjogXCJob25GXCIsXG5cdFwiLi9teS5qc1wiOiBcImhvbkZcIixcblx0XCIuL25iXCI6IFwiYk9NdFwiLFxuXHRcIi4vbmIuanNcIjogXCJiT010XCIsXG5cdFwiLi9uZVwiOiBcIk9qa1RcIixcblx0XCIuL25lLmpzXCI6IFwiT2prVFwiLFxuXHRcIi4vbmxcIjogXCIrczBnXCIsXG5cdFwiLi9ubC1iZVwiOiBcIjJ5a3ZcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiMnlrdlwiLFxuXHRcIi4vbmwuanNcIjogXCIrczBnXCIsXG5cdFwiLi9ublwiOiBcInVFeWVcIixcblx0XCIuL25uLmpzXCI6IFwidUV5ZVwiLFxuXHRcIi4vcGEtaW5cIjogXCI4LytSXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIjgvK1JcIixcblx0XCIuL3BsXCI6IFwialZkQ1wiLFxuXHRcIi4vcGwuanNcIjogXCJqVmRDXCIsXG5cdFwiLi9wdFwiOiBcIjhtQkRcIixcblx0XCIuL3B0LWJyXCI6IFwiMHRSa1wiLFxuXHRcIi4vcHQtYnIuanNcIjogXCIwdFJrXCIsXG5cdFwiLi9wdC5qc1wiOiBcIjhtQkRcIixcblx0XCIuL3JvXCI6IFwibHl4b1wiLFxuXHRcIi4vcm8uanNcIjogXCJseXhvXCIsXG5cdFwiLi9ydVwiOiBcImxYem9cIixcblx0XCIuL3J1LmpzXCI6IFwibFh6b1wiLFxuXHRcIi4vc2RcIjogXCJaNFFNXCIsXG5cdFwiLi9zZC5qc1wiOiBcIlo0UU1cIixcblx0XCIuL3NlXCI6IFwiLy85d1wiLFxuXHRcIi4vc2UuanNcIjogXCIvLzl3XCIsXG5cdFwiLi9zaVwiOiBcIjdhVjlcIixcblx0XCIuL3NpLmpzXCI6IFwiN2FWOVwiLFxuXHRcIi4vc2tcIjogXCJlK2FlXCIsXG5cdFwiLi9zay5qc1wiOiBcImUrYWVcIixcblx0XCIuL3NsXCI6IFwiZ1ZWS1wiLFxuXHRcIi4vc2wuanNcIjogXCJnVlZLXCIsXG5cdFwiLi9zcVwiOiBcInlQTXNcIixcblx0XCIuL3NxLmpzXCI6IFwieVBNc1wiLFxuXHRcIi4vc3JcIjogXCJ6eDZTXCIsXG5cdFwiLi9zci1jeXJsXCI6IFwiRStsVlwiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIkUrbFZcIixcblx0XCIuL3NyLmpzXCI6IFwieng2U1wiLFxuXHRcIi4vc3NcIjogXCJVcjFEXCIsXG5cdFwiLi9zcy5qc1wiOiBcIlVyMURcIixcblx0XCIuL3N2XCI6IFwiWDcwOVwiLFxuXHRcIi4vc3YuanNcIjogXCJYNzA5XCIsXG5cdFwiLi9zd1wiOiBcImROd0FcIixcblx0XCIuL3N3LmpzXCI6IFwiZE53QVwiLFxuXHRcIi4vdGFcIjogXCJQZVVXXCIsXG5cdFwiLi90YS5qc1wiOiBcIlBlVVdcIixcblx0XCIuL3RlXCI6IFwiWEx2TlwiLFxuXHRcIi4vdGUuanNcIjogXCJYTHZOXCIsXG5cdFwiLi90ZXRcIjogXCJWMng5XCIsXG5cdFwiLi90ZXQuanNcIjogXCJWMng5XCIsXG5cdFwiLi90Z1wiOiBcIk94djZcIixcblx0XCIuL3RnLmpzXCI6IFwiT3h2NlwiLFxuXHRcIi4vdGhcIjogXCJFT2dXXCIsXG5cdFwiLi90aC5qc1wiOiBcIkVPZ1dcIixcblx0XCIuL3RsLXBoXCI6IFwiRHppMFwiLFxuXHRcIi4vdGwtcGguanNcIjogXCJEemkwXCIsXG5cdFwiLi90bGhcIjogXCJ6M1ZkXCIsXG5cdFwiLi90bGguanNcIjogXCJ6M1ZkXCIsXG5cdFwiLi90clwiOiBcIkRvSHJcIixcblx0XCIuL3RyLmpzXCI6IFwiRG9IclwiLFxuXHRcIi4vdHpsXCI6IFwiejFGQ1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiejFGQ1wiLFxuXHRcIi4vdHptXCI6IFwid1FrOVwiLFxuXHRcIi4vdHptLWxhdG5cIjogXCJ0VDNKXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcInRUM0pcIixcblx0XCIuL3R6bS5qc1wiOiBcIndRazlcIixcblx0XCIuL3VnLWNuXCI6IFwiWVJleFwiLFxuXHRcIi4vdWctY24uanNcIjogXCJZUmV4XCIsXG5cdFwiLi91a1wiOiBcInJhTHJcIixcblx0XCIuL3VrLmpzXCI6IFwicmFMclwiLFxuXHRcIi4vdXJcIjogXCJVcFFXXCIsXG5cdFwiLi91ci5qc1wiOiBcIlVwUVdcIixcblx0XCIuL3V6XCI6IFwiTG94b1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIkFRNjhcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCJBUTY4XCIsXG5cdFwiLi91ei5qc1wiOiBcIkxveG9cIixcblx0XCIuL3ZpXCI6IFwiS1NGOFwiLFxuXHRcIi4vdmkuanNcIjogXCJLU0Y4XCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi9YNXZcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiL1g1dlwiLFxuXHRcIi4veW9cIjogXCJmelBnXCIsXG5cdFwiLi95by5qc1wiOiBcImZ6UGdcIixcblx0XCIuL3poLWNuXCI6IFwiWERwZ1wiLFxuXHRcIi4vemgtY24uanNcIjogXCJYRHBnXCIsXG5cdFwiLi96aC1oa1wiOiBcIlNhdE9cIixcblx0XCIuL3poLWhrLmpzXCI6IFwiU2F0T1wiLFxuXHRcIi4vemgtdHdcIjogXCJrT3BOXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcImtPcE5cIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiUm5oWlwiOyIsIi8vIGJ1dHRvbiDrtoDrtoQgYnV0dG9uYnVuY2jroZxcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgSW5wdXRUaWNrZXQgZnJvbSAnLi4vSW5wdXRUaWNrZXQnO1xyXG5pbXBvcnQgUmVzZXJ2ZXJJbmZvIGZyb20gJy4uL1Jlc2VydmVySW5mbyc7XHJcbmltcG9ydCBUT1MgZnJvbSAnLi4vVE9TJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IChsZW5ndGgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGlja2V0czogQXJyYXkobGVuZ3RoKS5maWxsKDApLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICB0ZWxlcGhvbmU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgaXNWZXJpZmllZE5hbWU6IGZhbHNlLFxyXG4gICAgaXNWZXJpZmllZFRlbDogZmFsc2UsXHJcbiAgICBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlLFxyXG4gICAgaXNUT1NDaGVja2VkOiBmYWxzZSxcclxuICAgIHN1Ym1pdDogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0RFQ1JFTUVOVCc6XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkRGVjID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICBtb2RpZmllZERlYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gPSBtb2RpZmllZERlYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gLSAxO1xyXG4gICAgICByZXR1cm4gbW9kaWZpZWREZWM7XHJcbiAgICBjYXNlICdJTkNSRU1FTlQnOlxyXG4gICAgICBjb25zdCBtb2RpZmllZEluYyA9IHsgLi4uc3RhdGUgfTtcclxuICAgICAgbW9kaWZpZWRJbmMudGlja2V0c1thY3Rpb24ud2hlcmVdID0gbW9kaWZpZWRJbmMudGlja2V0c1thY3Rpb24ud2hlcmVdICsgMTtcclxuICAgICAgcmV0dXJuIG1vZGlmaWVkSW5jO1xyXG4gICAgY2FzZSAnQ0hBTkdFX05BTUUnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbmFtZTogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlICdDSEFOR0VfVEVMJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRlbGVwaG9uZTogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlICdDSEFOR0VfRU1BSUwnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZW1haWw6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX1RPUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1RPU0NoZWNrZWQ6IGFjdGlvbi5jaGVja2VkIH07XHJcbiAgICBjYXNlICdWRVJJRllfTkFNRSc6XHJcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChuYW1lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoL1xccy8udGVzdChuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IHRydWUgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9URUwnOlxyXG4gICAgICBjb25zdCB7IHRlbGVwaG9uZSB9ID0gc3RhdGU7XHJcbiAgICAgIGlmICh0ZWxlcGhvbmUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdGVsUmUgPSAvMFxcZHsyfS1bMS05XVxcZHsyLDN9LVxcZHs0fS87XHJcbiAgICAgIGlmICh0ZWxSZS50ZXN0KHRlbGVwaG9uZSkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiBmYWxzZSB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX0VNQUlMJzpcclxuICAgICAgY29uc3QgeyBlbWFpbCB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChlbWFpbC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVtYWlsUmUgPSAvW2EtekEtWl1cXHd7Mix9QFthLXpBLVpdezMsfVxcLlthLXpBLVpdezIsfS87XHJcbiAgICAgIGlmIChlbWFpbFJlLnRlc3QoZW1haWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlIH07XHJcbiAgICBjYXNlICdWRVJJRllfU1VCTUlUJzpcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRpY2tldHMsXHJcbiAgICAgICAgaXNWZXJpZmllZE5hbWUsXHJcbiAgICAgICAgaXNWZXJpZmllZFRlbCxcclxuICAgICAgICBpc1ZlcmlmaWVkRW1haWwsXHJcbiAgICAgICAgaXNUT1NDaGVja2VkLFxyXG4gICAgICB9ID0gc3RhdGU7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aWNrZXRzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB2YWx1ZSA+IDA7XHJcbiAgICAgICAgfSkgJiZcclxuICAgICAgICBpc1ZlcmlmaWVkTmFtZSAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWRUZWwgJiZcclxuICAgICAgICBpc1ZlcmlmaWVkRW1haWwgJiZcclxuICAgICAgICBpc1RPU0NoZWNrZWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Ym1pdDogdHJ1ZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWJtaXQ6IGZhbHNlIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCcnKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBSZXNlcnZlRm9ybSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdFByaWNlcywgZGlzcGxheUluZm9JZCwgcHJvZHVjdElkLCByZXNlcnZhdGlvbkRhdGUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcclxuICAgIHJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGUocHJvZHVjdFByaWNlcy5sZW5ndGgpLFxyXG4gICk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNlcnZhdGlvbkluZm8gPSB7XHJcbiAgICAgICAgZGlzcGxheUluZm9JZCxcclxuICAgICAgICBwcm9kdWN0SWQsXHJcbiAgICAgICAgcHJpY2VzOiBbXSxcclxuICAgICAgICByZXNlcnZhdGlvbkVtYWlsOiBzdGF0ZS5lbWFpbCxcclxuICAgICAgICByZXNlcnZhdGlvbk5hbWU6IHN0YXRlLm5hbWUsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25UZWxlcGhvbmU6IHN0YXRlLnRlbGVwaG9uZSxcclxuICAgICAgICByZXNlcnZhdGlvblllYXJNb250aERheTogcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgICB9O1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDAsIGxlbiA9IHByb2R1Y3RQcmljZXMubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xyXG4gICAgICAgIHJlc2VydmF0aW9uSW5mby5wcmljZXMucHVzaCh7XHJcbiAgICAgICAgICBjb3VudDogTnVtYmVyKHN0YXRlLnRpY2tldHNbaW5kZXhdKSxcclxuICAgICAgICAgIHByb2R1Y3RQcmljZUlkOiBwcm9kdWN0UHJpY2VzW2luZGV4XS5wcm9kdWN0UHJpY2VJRCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IHN0YXR1cywgc3RhdHVzVGV4dCB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICAnL2FwaS9yZXNlcnZhdGlvbnMnLFxyXG4gICAgICAgIHJlc2VydmF0aW9uSW5mbyxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChzdGF0dXNUZXh0KTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+yYiOunpOqwgCDshLHqs7XsoIHsnLzroZwg7Iq57J2465CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvZGV0YWlsLyR7ZGlzcGxheUluZm9JZH1gKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgY29uZmlybU1vZGFsKCfsmIjslb3tlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yYiOyVvSDslpHsi53snbQg7Lap7KGx65CY7KeAIOyViuyVmOyKteuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZlRm9ybVwiPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIvYXBpL3Jlc2VydmF0aW9uc1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8SW5wdXRUaWNrZXRcclxuICAgICAgICAgIHByb2R1Y3RQcmljZXM9e3Byb2R1Y3RQcmljZXN9XHJcbiAgICAgICAgICB0aWNrZXRzPXtzdGF0ZS50aWNrZXRzfVxyXG4gICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc2VydmVySW5mb1xyXG4gICAgICAgICAgbmFtZT17c3RhdGUubmFtZX1cclxuICAgICAgICAgIHRlbGVwaG9uZT17c3RhdGUudGVsZXBob25lfVxyXG4gICAgICAgICAgZW1haWw9e3N0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgcmVzZXJ2YXRpb25EYXRlPXtyZXNlcnZhdGlvbkRhdGUuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgIHRvdGFsVGlja2V0PXtzdGF0ZS50aWNrZXRzLnJlZHVjZShcclxuICAgICAgICAgICAgKGFjY3VtLCBjdXJyZW50KSA9PiBhY2N1bSArIGN1cnJlbnQsXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgICAgaXNWZXJpZmllZE5hbWU9e3N0YXRlLmlzVmVyaWZpZWROYW1lfVxyXG4gICAgICAgICAgaXNWZXJpZmllZFRlbD17c3RhdGUuaXNWZXJpZmllZFRlbH1cclxuICAgICAgICAgIGlzVmVyaWZpZWRFbWFpbD17c3RhdGUuaXNWZXJpZmllZEVtYWlsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRPUyBpc0NoZWNrZWQ9e3N0YXRlLlRPU30gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5zdWJtaXQgPyAnIzFFQzkwMCcgOiAnI0QxRDFEMScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17Y29uZmlybVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fbmF2ZXJfc1wiIC8+XHJcbiAgICAgICAgICDsmIjslb3tlZjquLBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVyZWQsXHJcbiAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlRm9ybTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFN1Yk5hdkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBwYXRocyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgY29uc3QgaXRlbUlkID0gcGF0aHNbcGF0aHMubGVuZ3RoIC0gMV07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiU3ViTmF2QmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja3dhcmRcIj5cclxuICAgICAgICA8TGluayB0bz17YC9kZXRhaWwvJHtpdGVtSWR9YH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1iYWNrd2FyZDFcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVOYW1lXCI+XHJcbiAgICAgICAgPGgxPntuYW1lIHx8ICftlonsgqwg7J2066aEJ308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuU3ViTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJOYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRhYlZpZXcgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3QgeyB2aWV3cywgc3R5bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiVGFiVmlld1wiPlxyXG4gICAgICA8dWwgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICB7dmlld3MubWFwKCh2aWV3LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2luZGV4fT57dmlld308L2xpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcblRhYlZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdHJhbnNmb3JtOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJWaWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUmV2aWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3LFxyXG4gICAgaW1hZ2UsXHJcbiAgICBzY29yZSxcclxuICAgIGVtYWlsLFxyXG4gICAgZGF0ZSxcclxuICAgIGVkaXRDb21tZW50LFxyXG4gICAgY29uZmlybURlbGV0ZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgLy8g7J2066+47KeAIOuztOyglVxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJSZXZpZXdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIDxwPntyZXZpZXd9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICB7aW1hZ2UgPyA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cInJldmlld0ltYWdlXCIgLz4gOiAnJ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjb3JlXCI+e3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVtYWlsXCI+e2Ake2VtYWlsLnNsaWNlKDAsIDQpfSoqKipgfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc2l0RGF0ZVwiPntgJHtkYXRlLnNsaWNlKDAsIDEwKX0g67Cp66y4YH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdFwiIG9uQ2xpY2s9e2VkaXRDb21tZW50fT5cclxuICAgICAgICAgICAg7IiY7KCVXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXtjb25maXJtRGVsZXRlfT5cclxuICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHJldmlldzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlZGl0Q29tbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUYWJVSSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgc2VsZWN0ZWQsIGhhbmRsZUNsaWNrLCBpbmRpY2F0b3JTdHlsZSB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIlRhYlVJXCI+XHJcbiAgICAgIDx1bCByZWY9e3JlZn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpY2F0b3JcIiBzdHlsZT17aW5kaWNhdG9yU3R5bGV9IC8+XHJcbiAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBzZWxlY3RlZCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuVGFiVUkucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGluZGljYXRvclN0eWxlOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVUk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGFiVUkgZnJvbSAnLi4vVGFiVUknO1xyXG5pbXBvcnQgVGFiVmlldyBmcm9tICcuLi9UYWJWaWV3JztcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgdmlld3MsIGFsYXJtLCB0b3AsIGJvdHRvbSB9ID0gcHJvcHM7XHJcbiAgLy8gdG9wLGJvdHRvbeydgCDsoJXsoIHsnLzroZwg67O07Jes7KSEIOu3sFxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2luZGljYXRvclN0eWxlLCBzZXRJbmRpY2F0b3JTdHlsZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3ZpZXdTdHlsZSwgc2V0Vmlld1N0eWxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCB1aVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB2aWV3UmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGFsYXJtKSB7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgYWxhcm0oaW5kZXgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHJlc2l6ZeyLnCDquajsp5Ag7LKY66asXHJcbiAgICBjb25zdCBzZWxlY3RlZExpID0gdWlSZWYuY3VycmVudC5jaGlsZHJlbltzZWxlY3RlZCArIDFdO1xyXG4gICAgc2V0SW5kaWNhdG9yU3R5bGUoe1xyXG4gICAgICBsZWZ0OiBzZWxlY3RlZExpLm9mZnNldExlZnQsXHJcbiAgICAgIHdpZHRoOiBzZWxlY3RlZExpLm9mZnNldFdpZHRoLFxyXG4gICAgfSk7XHJcbiAgfSwgW3NlbGVjdGVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHZpZXdSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgIGNvbnN0IGRlZ3JlZSA9IHZpZXdzLnNsaWNlKDAsIHNlbGVjdGVkICsgMSkuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUpLmxlbmd0aDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKC0ke3dpZHRoICogZGVncmVlfXB4KWAsXHJcbiAgICB9KTtcclxuICB9LCBbc2VsZWN0ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZpZXdCb2R5ID0gdmlld1JlZi5jdXJyZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuW3NlbGVjdGVkXS5jaGlsZHJlblswXTsgLy8gc2VjdGlvbiAtPiB1bCAtPiBsaSAtPiBkaXZcclxuICAgIGNvbnN0IGhlaWdodCA9IHZpZXdCb2R5ICYmIHZpZXdCb2R5Lm9mZnNldEhlaWdodDtcclxuICAgIHNldFZpZXdTdHlsZSh7XHJcbiAgICAgIC4uLnZpZXdTdHlsZSxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgJycsXHJcbiAgICB9KTtcclxuICB9LCBbdmlld3NdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiQ29udHJvbGxlclwiPlxyXG4gICAgICA8VGFiVUlcclxuICAgICAgICByZWY9e3VpUmVmfVxyXG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cclxuICAgICAgICBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgaW5kaWNhdG9yU3R5bGU9e2luZGljYXRvclN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICB7dG9wfVxyXG4gICAgICA8VGFiVmlldyByZWY9e3ZpZXdSZWZ9IHZpZXdzPXt2aWV3c30gc3R5bGU9e3ZpZXdTdHlsZX0gLz5cclxuICAgICAge2JvdHRvbX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGFybTogZmFsc2UsXHJcbiAgdG9wOiAnJyxcclxuICBib3R0b206ICcnLFxyXG59O1xyXG5cclxuVGFiQ29udHJvbGxlci5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIGFsYXJtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcclxuICB0b3A6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGJvdHRvbTogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG4vLyDslYzrnozsnbQg7J6I64uk66m0IOyDgeychCDsu7Ttj6zrhIztirjsl5Ag7Ja065SU7JeQIOuIjOuggOuKlOyngCDrs4DtmZTrpbwg7JWM66Ck7KSYIOuPmeyggSDrt7Drs4DtmZTrpbwg6rCA64ql7LyA7ZWoXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJDb250cm9sbGVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcclxuXHJcbmNvbnN0IGFwcGx5U3R5bGUgPSAoc3R5bGUpID0+IHtcclxuICBpZiAodHlwZW9mIHN0eWxlID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIGAke3N0eWxlfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgW2FsbF0gPSBzdHlsZTtcclxuICAgIHJldHVybiBgJHthbGx9cHhgO1xyXG4gIH1cclxuICBpZiAodG9TdHJpbmcuY2FsbChzdHlsZSkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgc3R5bGUubGVuZ3RoID09PSAyKSB7XHJcbiAgICBjb25zdCBbdmVydGljYWwsIGhvcml6b250YWxdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7dmVydGljYWx9cHggJHtob3Jpem9udGFsfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgY29uc3QgW3RvcCwgcmlnaHQsIGRvd24sIGxlZnRdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7dG9wfXB4ICR7cmlnaHR9cHggJHtkb3dufXB4ICR7bGVmdH1weGA7XHJcbiAgfVxyXG4gIHJldHVybiAnMCc7XHJcbn07XHJcblxyXG5jb25zdCBCdXR0b25CdW5jaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbm90ZXMsIG1hcmdpbiwgcGFkZGluZyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiQnV0dG9uQnVuY2hcIlxyXG4gICAgICBzdHlsZT17eyBtYXJnaW46IGFwcGx5U3R5bGUobWFyZ2luKSwgcGFkZGluZzogYXBwbHlTdHlsZShwYWRkaW5nKSB9fVxyXG4gICAgPlxyXG4gICAgICB7bm90ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBmb250Q29sb3I9e3ZhbHVlLmZvbnRDb2xvcn1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXt2YWx1ZS5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgIGNsaWNrPXt2YWx1ZS5jbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbHVlLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uQnVuY2guZGVmYXVsdFByb3BzID0ge1xyXG4gIG1hcmdpbjogMCxcclxuICBwYWRkaW5nOiAwLFxyXG59O1xyXG5cclxuQnV0dG9uQnVuY2gucHJvcFR5cGVzID0ge1xyXG4gIG5vdGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjbGljazogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxyXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYXJyYXldKSxcclxuICBwYWRkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYXJyYXldKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJ1bmNoO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gJy4uL0ltYWdlU2xpZGVyJztcclxuaW1wb3J0IEltYWdlVGl0bGUgZnJvbSAnLi4vSW1hZ2VUaXRsZSc7XHJcblxyXG5jb25zdCBJbWFnZUNvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICAvLyDsnqzshKTqs4TtlZjqsbDrgpgg7YyM6riw7ZWgIOqyg+yehFxyXG4gIGNvbnN0IHtcclxuICAgIGRlZ3JlZSxcclxuICAgIHRyYW5zaXRpb25UaW1lLFxyXG4gICAgaW1hZ2VzLFxyXG4gICAgcmVzaXplRW5kLFxyXG4gICAgdGl0bGUsXHJcbiAgICBsZWZ0U2Nyb2xsLFxyXG4gICAgcmlnaHRTY3JvbGwsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGltYWdlTGlzdCA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbaW1hZ2VXaWR0aCwgc2V0SW1hZ2VXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2VXaWR0aCA9ICgpID0+IHtcclxuICAgIHJlc2l6ZUVuZCgoKSA9PiB7XHJcbiAgICAgIHNldEltYWdlV2lkdGgoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEltYWdlV2lkdGgoXHJcbiAgICAgIChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZCAmJlxyXG4gICAgICAgIGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKSB8fFxyXG4gICAgICAgIDAsXHJcbiAgICApOyAvLyDsspjsnYzsl5QgMOycvOuhnCDrkKhcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRJbWFnZVdpZHRoKTtcclxuICAgIHJldHVybiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0SW1hZ2VXaWR0aCk7XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICByZXR1cm4gdGl0bGUgPyAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgICByZWY9e2ltYWdlTGlzdH1cclxuICAgICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvblRpbWV9XHJcbiAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgICAgaW1hZ2VXaWR0aD17aW1hZ2VXaWR0aH1cclxuICAgICAgICBpc1Byb21vdGlvbj17ZmFsc2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbWFnZVRpdGxlXHJcbiAgICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgICAgaW1hZ2VMZW49e2ltYWdlcy5sZW5ndGh9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIGxlZnRTY3JvbGw9e2xlZnRTY3JvbGx9XHJcbiAgICAgICAgcmlnaHRTY3JvbGw9e3JpZ2h0U2Nyb2xsfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IChcclxuICAgIDxJbWFnZVNsaWRlclxyXG4gICAgICByZWY9e2ltYWdlTGlzdH1cclxuICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgIHRyYW5zaXRpb25UaW1lPXt0cmFuc2l0aW9uVGltZX1cclxuICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgIGlzUHJvbW90aW9uXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZUNvbnRyb2xsZXIucHJvcFR5cGVzID0ge1xyXG4gIGRlZ3JlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICByZXNpemVFbmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGVmdFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmlnaHRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb250cm9sbGVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHZhbGlkSW1hZ2VUeXBlIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBSZXZpZXdFZGl0ID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gcmV2aWV3IOunjOuTpOqzoCDsmYTshLHtlbTslbzrkKgg66+47JmEXHJcbiAgY29uc3Qge1xyXG4gICAgY29tbWVudElkLFxyXG4gICAgdGh1bWJuYWlsV2lkdGgsXHJcbiAgICBleFNjb3JlLFxyXG4gICAgZXhDb21tZW50LFxyXG4gICAgZXhJbWFnZVNyYyxcclxuICAgIGlzUG9zdCxcclxuICAgIGNvbmZpcm1FZGl0LFxyXG4gICAgY29uZmlybUNhbmNlbCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZShleFNjb3JlKTtcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShleENvbW1lbnQpO1xyXG4gIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUoZXhJbWFnZVNyYyk7XHJcbiAgY29uc3QgW3RodW1ibmFpbFN0eWxlLCBzZXRUaHVtYm5haWxTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuICBjb25zdCBmb3JtID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW1hZ2VTcmMpIHtcclxuICAgICAgY29uc3QgaW1hZ2VNZWFzdXJlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWFnZU1lYXN1cmVtZW50LnNyYyA9IGltYWdlU3JjO1xyXG4gICAgICBpbWFnZU1lYXN1cmVtZW50Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHRoaXMuaGVpZ2h0IC8gdGhpcy53aWR0aDtcclxuICAgICAgICBzZXRUaHVtYm5haWxTdHlsZSh7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICB3aWR0aDogYCR7dGh1bWJuYWlsV2lkdGh9cHhgLFxyXG4gICAgICAgICAgaGVpZ2h0OiBgJHt0aHVtYm5haWxXaWR0aCAqIHJhdGlvfXB4YCxcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3RoaXMuc3JjfSlgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGh1bWJuYWlsU3R5bGUoe1xyXG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbaW1hZ2VTcmNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyByZXR1cm7snYQg7KKAIOygleydmO2VtOyEnCBzdWJtaXTsnbQg65CQ64qU6rCA66W8IOyVjOyVhOyVvO2VqFxyXG4gICAgdHJ5IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKHNjb3JlIDw9IDAgfHwgc2NvcmUgPiA1KSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn67OE7KCQIOqwnOyImOqwgCDsmKzrsJTrpbTsp4Ag7JWK7Iq164uI64ukJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb21tZW50Lmxlbmd0aCA8IDUgfHwgY29tbWVudC5sZW5ndGggPiA0MDApIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfrpqzrt7Ag6riA7J6Q7IiY6rCAIOunnuyngCDslYrsirXri4jri6QuJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpbWFnZVJlZi5jdXJyZW50LmZpbGVzLmxlbmd0aCAmJlxyXG4gICAgICAgICF2YWxpZEltYWdlVHlwZShpbWFnZVJlZi5jdXJyZW50LmZpbGVzWzBdKVxyXG4gICAgICApIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfsnbTrr7jsp4DripQganBnLGpwZWcscG5nIO2MjOydvOunjCDqsIDriqXtlanri4jri6QuJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvcm1PYmogPSBuZXcgRm9ybURhdGEoZm9ybS5jdXJyZW50KTtcclxuICAgICAgLypcclxuICAgICAgZm9ybU9iai5hcHBlbmQoJ3Jlc2VydmF0aW9uSW5mb0lkLGJsYWgpO1xyXG4gICAgICBmb3JtT2JqLmFwcGVuZCgnZXhJbWFnZScsICEhZXhEYXRhLmltYWdlU3JjKTtcclxuICAgICAgICAgICAgZm9ybU9iai5hcHBlbmQoJ25ld0ltYWdlJywgbmV3SW1hZ2UpO1xyXG4gICAgICAgICAgICAqL1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoZm9ybS5jdXJyZW50LmFjdGlvbiwgZm9ybU9iaik7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoaXNQb3N0ID8gJ+umrOu3sOqwgCDrk7HroZ3rkJjsl4jsirXri4jri6QnIDogJ+umrOu3sOqwgCDsiJjsoJXrkJjsl4jsirXri4jri6QnKTtcclxuICAgICAgICBpZiAoaXNQb3N0KSBoaXN0b3J5LnB1c2goJy9teXJlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vZGlmeVJhdGluZyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2V0U2NvcmUodmFsdWUpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1cGxvYWRJbWFnZSA9ICh7IHRhcmdldDogeyBmaWxlcyB9IH0pID0+IHtcclxuICAgIGNvbnN0IHRlbXBJbWFnZSA9IGZpbGVzWzBdO1xyXG4gICAgaWYgKCF2YWxpZEltYWdlVHlwZSh0ZW1wSW1hZ2UpKSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+ydtOuvuOyngOuKlCBqcGcsanBlZyxwbmcg7YyM7J2866eMIOqwgOuKpe2VqeuLiOuLpCcpO1xyXG4gICAgICBpbWFnZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7IC8vIOyVhOuniCDqs6Dss5DslbzrkKDqurzsnoRcclxuICAgICAgc2V0SW1hZ2VTcmMoJycpOyAvLyDtlYTsmpTtlZzsp4Ag66qo66W06rKg7J2MXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldEltYWdlU3JjKHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHRlbXBJbWFnZSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbmNlbEltYWdlVXBsb2FkID0gKCkgPT4ge1xyXG4gICAgaW1hZ2VSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xyXG4gICAgc2V0SW1hZ2VTcmMoJycpO1xyXG4gICAgLy8gbmV3SW1hZ2U9IC0xO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXZpZXdFZGl0XCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgbWV0aG9kPXtpc1Bvc3QgPyAnUE9TVCcgOiAnUFVUJ31cclxuICAgICAgICBhY3Rpb249e2AvYXBpL3Jlc2VydmF0aW9ucy9jb21tZW50cy8ke2NvbW1lbnRJZH1gfVxyXG4gICAgICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICBuYW1lPVwicmV2aWV3Rm9ybVwiXHJcbiAgICAgICAgcmVmPXtmb3JtfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicmF0aW5nU2VjdGlvblwiPlxyXG4gICAgICAgICAgPHA+67OE7KCQ6rO8IOydtOyaqSDqsr3tl5jsnYQg64Ko6rKo7KO87IS47JqULjwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nU3RhclwiPlxyXG4gICAgICAgICAgICB7WzEsIDIsIDMsIDQsIDVdLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm4gZm4tc3RhcjIgJHtcclxuICAgICAgICAgICAgICAgICAgICBzY29yZSA+PSB2YWx1ZSA/ICdnZXRTdGFyJyA6ICdub3RHZXRTdGFyJ1xyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17bW9kaWZ5UmF0aW5nKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzY29yZVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3Njb3JlfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBzY29yZSA+IDAgPyAnIzAwMCcgOiAnI2RkZCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3cml0ZUNvbW1lbnRcIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgIHJvd3M9XCIxNVwiXHJcbiAgICAgICAgICAgIG1pbkxlbmd0aD1cIjVcIlxyXG4gICAgICAgICAgICBtYXhMZW5ndGg9XCI0MDBcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICBzZXRDb21tZW50KHZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3RJbWFnZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZUxldHRlckNvdW50XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIGlkPVwiaW1hZ2VVcGxvYWRcIlxyXG4gICAgICAgICAgICAgIHJlZj17aW1hZ2VSZWZ9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwbG9hZEltYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlVXBsb2FkXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4taW1hZ2UxXCIgLz5cclxuICAgICAgICAgICAgICDsgqzsp4Qg7LaU6rCAXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnRDb3VudFwiPlxyXG4gICAgICAgICAgICAgIHtgJHtjb21tZW50Lmxlbmd0aH0vNDAwICjstZzshowgNeyekCDsnbTsg4EpYH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbEltYWdlXCIgc3R5bGU9e3RodW1ibmFpbFN0eWxlfT5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jcm9zczFcIiBvbkNsaWNrPXtjYW5jZWxJbWFnZVVwbG9hZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAge2lzUG9zdCA/IChcclxuICAgICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxRUM4MDAnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uZmlybU1vZGFsKCfrpqzrt7Drpbwg65Ox66GdIO2VmOyLnOqyoOyKteuLiOq5jD8nLCBoYW5kbGVTdWJtaXQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAn66as67ewIOuTseuhnScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxRUM4MDAnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUVkaXQoaGFuZGxlU3VibWl0LCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAn7IiY7KCVJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNEOERCREUnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uZmlybUNhbmNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAn7Leo7IaMJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0VkaXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRodW1ibmFpbFdpZHRoOiAyMDAsXHJcbiAgZXhTY29yZTogMCxcclxuICBleENvbW1lbnQ6ICcnLFxyXG4gIGV4SW1hZ2VTcmM6ICcnLFxyXG4gIGlzUG9zdDogdHJ1ZSxcclxufTtcclxuXHJcblJldmlld0VkaXQucHJvcFR5cGVzID0ge1xyXG4gIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICB0aHVtYm5haWxXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICBleFNjb3JlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGV4Q29tbWVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBleEltYWdlU3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzUG9zdDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY29uZmlybUVkaXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNvbmZpcm1DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3RWRpdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUaWNrZXRIZWFkIGZyb20gJy4uL1RpY2tldEhlYWQnO1xyXG5pbXBvcnQgVGlja2V0SW5mb0xpc3QgZnJvbSAnLi4vVGlja2V0SW5mb0xpc3QnO1xyXG5cclxuY29uc3QgVGlja2V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbmZvcywgY2hpbGRyZW4sIGFjdGlvbnMsIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJUaWNrZXRcIj5cclxuICAgICAgPFRpY2tldEhlYWQgaXNHcmVlbj17aXNHcmVlbn0+e2NoaWxkcmVufTwvVGlja2V0SGVhZD5cclxuICAgICAgPFRpY2tldEluZm9MaXN0IGluZm9zPXtpbmZvc30gYWN0aW9ucz17YWN0aW9uc30gLz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0dyZWVuOiBmYWxzZSxcclxufTtcclxuXHJcblRpY2tldC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG4gIGlzR3JlZW46IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUHJvZHVjdERlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRleHQsIGxpbWl0IH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNGb2xkLCBzZXRJc0ZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGxldCB0ZXh0T2JqO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdHJpbW1lZFRleHQgPSB0ZXh0LnRyaW0oKTtcclxuICAgIHRyaW1tZWRUZXh0ID0gdHJpbW1lZFRleHQucmVwbGFjZSgnXFxuJywgJycpO1xyXG4gICAgaWYgKHRyaW1tZWRUZXh0Lmxlbmd0aCA+IGxpbWl0KSB7XHJcbiAgICAgIGNvbnN0IHRleHRTaW1wbGUgPSB0cmltbWVkVGV4dC5zbGljZSgwLCBsaW1pdCk7XHJcbiAgICAgIGNvbnN0IHRleHREZXRhaWwgPSB0cmltbWVkVGV4dC5zbGljZShsaW1pdCk7XHJcbiAgICAgIHRleHRPYmogPSB7IHNpbXBsZTogdGV4dFNpbXBsZSwgZGV0YWlsOiB0ZXh0RGV0YWlsIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZXh0T2JqID0geyBzaW1wbGU6IHRyaW1tZWRUZXh0LCBkZXRhaWw6ICcnIH07XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZURlc2MgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNGb2xkKSB7XHJcbiAgICAgICQoJy5Qcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNGb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5wcm9kdWN0RGVzYyAubW9yZURlc2MnKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuVGV4dCA9ICftjrzss5Drs7TquLAgPGkgY2xhc3M9XCJmbiBmbi1kb3duMlwiPjwvaT4nO1xyXG4gIGNvbnN0IGZvbGRUZXh0ID0gJ+ygkeq4sCA8aSBjbGFzcz1cImZuIGZuLXVwMlwiPjwvaT4nO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUHJvZHVjdERlc2NcIj5cclxuICAgICAge3RleHRPYmouZGV0YWlsID8gKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge3RleHRPYmouc2ltcGxlfVxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG90c1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzRm9sZCA/ICdpbmxpbmUnIDogJ25vbmUnIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9yZURlc2NcIj57dGV4dE9iai5kZXRhaWx9PC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cD57dGV4dE9iai5zaW1wbGV9PC9wPlxyXG4gICAgICApfVxyXG4gICAgICB7dGV4dE9iai5kZXRhaWwgPyAoXHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YzZjVmNicsXHJcbiAgICAgICAgICAgICAgY2xpY2s6IHNob3dNb3JlRGVzYyxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogaXNGb2xkID8gb3BlblRleHQgOiBmb2xkVGV4dCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0RGVzYy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGltaXQ6IDEwMCxcclxufTtcclxuXHJcblByb2R1Y3REZXNjLnByb3BUeXBlcyA9IHtcclxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGVzYztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi9JbWFnZVNsaWRlcic7XHJcbmltcG9ydCBJbWFnZUNvbnRyb2xsZXIgZnJvbSAnLi4vSW1hZ2VDb250cm9sbGVyJztcclxuXHJcbi8vIOyKpO2BrOuhpCDsi5zqsIQodHJhbnNpdGlvblRpbWUpIGRlZmF1bHQgMey0iCAg7JyE7JeQ7IScIOusvOugpOuwm+uKlOqyg1xyXG4vLyDsg4Htg5zroZwg7IKs7Jqp7ZWY64qUIOyKpO2BrOuhpCDsi5zqsIQgKHRyYW5zaXRpb25EdXJhdGlvbilcclxuLy8g7ZmU66m0IOyghO2ZmCDqsITqsqkgKHRpbWVJbnRlcnZhbCkgMuy0iFxyXG5cclxuY29uc3QgUHJvbW90aW9uSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICAvLyDqsJHsnpDquLAgZGVncmVl6rCAIOqzhOyGjSDspp3qsIDtlZjripQg67KE6re46rCAIOyeiOydjFxyXG4gIGNvbnN0IHsgdGltZUludGVydmFsLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY3JvbGxhYmxlLCBzZXRTY3JvbGxhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0cmFuc2l0aW9uRHVyYXRpb24sIHNldFRyYW5zaXRpb25EdXJhdGlvbl0gPSB1c2VTdGF0ZSh0cmFuc2l0aW9uVGltZSk7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW1hZ2VXaWR0aCwgc2V0SW1hZ2VXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBkZWdyZWVSZWYgPSB1c2VSZWYoZGVncmVlKTtcclxuICBjb25zdCBzY3JvbGxhYmxlUmVmID0gdXNlUmVmKHNjcm9sbGFibGUpO1xyXG4gIGNvbnN0IGltYWdlTGlzdCA9IHVzZVJlZihudWxsKTtcclxuICBkZWdyZWVSZWYuY3VycmVudCA9IGRlZ3JlZTtcclxuICBzY3JvbGxhYmxlUmVmLmN1cnJlbnQgPSBzY3JvbGxhYmxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZGF0YTogeyBpdGVtcyB9LFxyXG4gICAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9ucycpO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbXNbMF0pOyAvLyDsspjsnYzqs7wg66eI7KeA66eJ7J2EIOuPmeydvO2VnCDsnbTrr7jsp4Drpbwg65GQ7Ja07IScIOyKpO2BrOuhpOydhCDrp6TrgYTrn73qsowg7ZWoXHJcbiAgICAgICAgc2V0SW1hZ2VzKGl0ZW1zKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoSW1hZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0b1Njcm9sbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHNjcm9sbGFibGVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChkZWdyZWVSZWYuY3VycmVudCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGVncmVlKChwcmV2RGVncmVlKSA9PiBwcmV2RGVncmVlICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRpbWVJbnRlcnZhbCAqIDEwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbCk7XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSA+PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBzZXREZWdyZWUoMCk7XHJcbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbigwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGxhYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZU91dCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbGFibGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzaXplRW5kID0gKGZ1bmMpID0+IHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgMTAwLCBldmVudCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0U2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlc2l6ZUVuZCgoKSA9PiB7XHJcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXVzZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbGFibGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcGF1c2VTY3JvbGwpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXJ0U2Nyb2xsKCkpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBhdXNlU2Nyb2xsKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN0YXJ0U2Nyb2xsKCkpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldEltYWdlV2lkdGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzaXplRW5kKCgpID0+IHtcclxuICAgICAgc2V0SW1hZ2VXaWR0aChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VXaWR0aChcclxuICAgICAgKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkICYmXHJcbiAgICAgICAgaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpIHx8XHJcbiAgICAgICAgMCxcclxuICAgICk7IC8vIOyymOydjOyXlCAw7Jy866GcIOuQqFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldEltYWdlV2lkdGgoKSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldEltYWdlV2lkdGgoKSk7XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlU2xpZGVyXHJcbiAgICAgIHJlZj17aW1hZ2VMaXN0fVxyXG4gICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25EdXJhdGlvbn1cclxuICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgIGlzUHJvbW90aW9uXHJcbiAgICAgIGhhbmRsZVRyYW5zaXRpb25FbmQ9e2hhbmRsZVRyYW5zaXRpb25FbmR9XHJcbiAgICAgIGhhbmRsZU1vdXNlT3Zlcj17aGFuZGxlTW91c2VPdmVyfVxyXG4gICAgICBoYW5kbGVNb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9tb3Rpb25JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHJhbnNpdGlvblRpbWU6IDEsXHJcbiAgdGltZUludGVydmFsOiAyLFxyXG59O1xyXG5cclxuUHJvbW90aW9uSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRpbWVJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21vdGlvbkltYWdlO1xyXG5cclxuLypcclxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYykge1xyXG4gIGxldCB0aW1lcjtcclxuICByZXR1cm4gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jLCAxMDAsIGV2ZW50KTtcclxuICAgIHNldFRpbWVvdXQoKVxyXG4gIH07XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICdyZXNpemUnLFxyXG4gIGRlYm91bmNlKGV2ZW50ID0+IHtcclxuICAgIC8vIHJlc2l6ZSDrgZ3rgqzsnYQg65WMXHJcbiAgICBzY3JvbGxBYmxlID0gdHJ1ZTtcclxuICB9KSxcclxuKTtcclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBNYWluTmF2QmFyIGZyb20gJy4uL01haW5OYXZCYXInO1xyXG5pbXBvcnQgU3ViTmF2QmFyIGZyb20gJy4uL1N1Yk5hdkJhcic7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGlzVHJhbnNwYXJlbnQsIGlzTG9nb3V0YWJsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiTmF2QmFyXCI+XHJcbiAgICAgIHtuYW1lID8gKFxyXG4gICAgICAgIDxTdWJOYXZCYXIgbmFtZT17bmFtZX0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TWFpbk5hdkJhciBpc1RyYW5zcGFyZW50PXtpc1RyYW5zcGFyZW50fSBpc0xvZ291dGFibGU9e2lzTG9nb3V0YWJsZX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG5hbWU6ICcnLFxyXG4gIGlzVHJhbnNwYXJlbnQ6IGZhbHNlLFxyXG4gIGlzTG9nb3V0YWJsZTogZmFsc2UsXHJcbn07XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNMb2dvdXRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgUHJvZHVjdENvbnRhaW5lciAke2NsYXNzTmFtZX1gfT57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuUHJvZHVjdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIk1vZGFsXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufTtcclxuXHJcbk1vZGFsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBNYWluSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHNyYywgYWx0IH0gPSBwcm9wcztcclxuICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJNYWluSW1hZ2VcIiBzcmM9e3NyY30gYWx0PXthbHR9IC8+O1xyXG59O1xyXG5cclxuTWFpbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5JbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmV2aWV3U3VtbWFyeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYXZlcmFnZVNjb3JlLCByZXZpZXdDb3VudCwgZGlzcGxheVN0YXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJDb21tZW50U3VtbWFyeVwiPlxyXG4gICAgICA8aDI+7JiI66ek7J6QIO2VnOykhO2PiTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAge2Rpc3BsYXlTdGFyKGF2ZXJhZ2VTY29yZSl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmVyYWdlU2NvcmVcIj57YXZlcmFnZVNjb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1heFNjb3JlXCI+LyA1LjA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudENvdW50XCI+e2Ake3Jldmlld0NvdW50fSDqsbRgfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVucm9sbFRleHRcIj7rk7HroZ08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdTdW1tYXJ5LnByb3BUeXBlcyA9IHtcclxuICBhdmVyYWdlU2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICByZXZpZXdDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlTdGFyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3U3VtbWFyeTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vUmV2aWV3JztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcblxyXG5jb25zdCBSZXZpZXdMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3cyxcclxuICAgIGlzQnJpZWYsXHJcbiAgICBpc01vZGlmaWFibGUsXHJcbiAgICBlZGl0Q29tbWVudCxcclxuICAgIGNvbmZpcm1EZWxldGUsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgICBleERhdGE6IHsgaWQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYyB9LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgc2hvd1Jldmlld3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXZpZXdzQ29tcCA9IFtdO1xyXG4gICAgWy4uLnJldmlld3NdLnJldmVyc2UoKS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlzQnJpZWYgJiYgaW5kZXggPj0gNSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldmlld3NDb21wLnB1c2goXHJcbiAgICAgICAgPFJldmlld1xyXG4gICAgICAgICAga2V5PXt2YWx1ZS5jb21tZW50SWR9XHJcbiAgICAgICAgICByZXZpZXc9e3ZhbHVlLmNvbW1lbnR9XHJcbiAgICAgICAgICBpbWFnZT17XHJcbiAgICAgICAgICAgIHZhbHVlLmNvbW1lbnRJbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyB2YWx1ZS5jb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZVxyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNjb3JlPXt2YWx1ZS5zY29yZX1cclxuICAgICAgICAgIGVtYWlsPXt2YWx1ZS5yZXNlcnZhdGlvbkVtYWlsfVxyXG4gICAgICAgICAgZGF0ZT17dmFsdWUucmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAgICAgZWRpdENvbW1lbnQ9e2VkaXRDb21tZW50KHZhbHVlLmNvbW1lbnRJZCl9XHJcbiAgICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlKHZhbHVlLmNvbW1lbnRJZCl9XHJcbiAgICAgICAgLz4sXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXZpZXdzQ29tcDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXZpZXdMaXN0XCI+XHJcbiAgICAgIHtpc01vZGlmaWFibGUgPyAoXHJcbiAgICAgICAgPFJldmlld0VkaXRcclxuICAgICAgICAgIGNvbW1lbnRJZD17aWR9XHJcbiAgICAgICAgICBleFNjb3JlPXtzY29yZX1cclxuICAgICAgICAgIGV4Q29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgIGV4SW1hZ2VTcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgaXNQb3N0PXtmYWxzZX1cclxuICAgICAgICAgIGNvbmZpcm1FZGl0PXtjb25maXJtRWRpdChpZCl9XHJcbiAgICAgICAgICBjb25maXJtQ2FuY2VsPXtjb25maXJtQ2FuY2VsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgc2hvd1Jldmlld3MoKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIHJldmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBjb21tZW50SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgaXNCcmllZjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBlZGl0Q29tbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1FZGl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1DYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZXhEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9