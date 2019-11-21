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
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MainView */ "M2Ck");
/* harmony import */ var _TabController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TabController */ "h/In");
/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ProductBox */ "Ir+m");





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


  var showingCount = 0;
  var isFetched = false;
  var categoryProducts = Array(6).fill(null);
  var viewsArr = Array(6).fill(null); // [[<ProductBox/>],[<ProductBox/>]];

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
        var _ref2, items, modifiedViews;

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
                categoryProducts[0] = items;
                viewsArr[0] = items.slice(basisCount).map(function (value) {
                  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    itemInfo: value
                  });
                });
                showingCount += basisCount;
                setProductCount(items.length);
                modifiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);
                modifiedViews[0] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  productCount: productCount,
                  products: viewsArr[0]
                });
                setViews(modifiedViews);
                isFetched = true;
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
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

      copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        productCount: productCount,
        products: viewsArr[selectedCategory].slice(finalInd)
      });
      showingCount = finalInd;
      setViews(copiedViews);
    }

    if (categoryProducts[selectedCategory].length > viewsArr[selectedCategory].length) {
      // 넣은뒤 보여줌
      var productsLen = categoryProducts[selectedCategory].length;

      var _finalInd = productsLen >= viewsLen + basisCount ? viewsLen + basisCount : productsLen;

      categoryProducts[selectedCategory].slice(viewsLen, _finalInd).forEach(function (value) {
        viewsArr[selectedCategory].push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
          itemInfo: value
        }));
      });

      var _copiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

      _copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        productCount: productCount,
        products: viewsArr[selectedCategory]
      });
      showingCount = _finalInd;
      setViews(_copiedViews);
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
        categoryProducts[selectedCategory] = specificProducts;
        setProductCount(specificProducts.length); // views에 MainView를 생성함

        viewsArr[selectedCategory] = specificProducts.slice(basisCount).map(function (value) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
            itemInfo: value
          });
        });

        var copiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

        copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          productCount: productCount,
          products: viewsArr[selectedCategory]
        });
        showingCount = basisCount;
        setViews(copiedViews);
      }

      if (viewsArr[selectedCategory].length >= basisCount) {
        // length는 임시 판별 MainView만 있어서 안에 갯수 파악해야 됨
        // 2. basisCount랑 일치할 때
        setProductCount(categoryProducts[selectedCategory].length);

        var _copiedViews2 = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);

        _copiedViews2[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_7__["default"], {
          productCount: productCount,
          products: viewsArr[selectedCategory].slice(basisCount)
        });
        showingCount = basisCount;
        setViews(_copiedViews2);
      }
    }
  }, [selectedCategory]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "MainContainer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TabController__WEBPACK_IMPORTED_MODULE_8__["default"], {
    labels: labels,
    views: views,
    alram: setSelectedCategory
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "more",
    onClick: showMoreProduct
  }, "\uB354\uBCF4\uAE30"));
};

__signature__(MainContainer, "useState{[selectedCategory, setSelectedCategory](0)}\nuseState{[productCount, setProductCount](0)}\nuseState{[views, setViews](Array(6).fill(null))}\nuseEffect{}\nuseEffect{}\nuseEffect{}");

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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "iiGG");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Footer = function Footer(props) {
  var top = props.top;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "Footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, function (isTopNeed) {
    if (isTopNeed) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fn fn-up1"
      }), "TOP");
    }
  }(top), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "caution"
  }, "\uB124\uC774\uBC84(\uC8FC)\uB294 \uD1B5\uC2E0\uD310\uB9E4\uC758 \uB2F9\uC0AC\uC790\uAC00 \uC544\uB2C8\uBA70, \uC0C1\uD488\uC758\uC815\uBCF4, \uAC70\uB798\uC870\uAC74, \uC774\uC6A9 \uBC0F \uD658\uBD88 \uB4F1\uACFC \uAD00\uB828\uD55C \uC758\uBB34\uC640 \uCC45\uC784\uC740 \uAC01 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "copyright"
  }, "\xA9 NAVER Corp.")));
};

Footer.defaultProps = {
  top: true
};
Footer.propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
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
    event.stopimmediate;

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

ProductBox.propTypes = {
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
  var productCount = props.productCount,
      products = props.products;
  var leftProducts = products.filter(function (value, index) {
    return index % 2 === 0;
  });
  var rightProducts = products.filter(function (value, index) {
    return index % 2 === 1;
  });

  var CountText = function CountText() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      className: "totalCount"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uBC14\uB85C \uC608\uB9E4 \uAC00\uB2A5\uD55C \uD589\uC0AC\uAC00", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "strong"
    }, "".concat(productCount, "\uAC1C")), "\uC788\uC2B5\uB2C8\uB2E4"));
  };

  return (// productContainer 좌우로 나누는 로직이 있어야됨
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "MainView"
    }, CountText(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "left"
    }, leftProducts), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "right"
    }, rightProducts))
  );
};

MainView.propTypes = {
  productCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired).isRequired,
  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
  top: false
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
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
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var TabView = function TabView(props) {
  var views = props.views,
      selected = props.selected;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TabView"
  }, views.find(function (value, index) {
    return index === selected;
  }));
};

TabView.propTypes = {
  views: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired).isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
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





var TabUI = function TabUI(props) {
  var labels = props.labels,
      selected = props.selected,
      handleClick = props.handleClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "TabUI"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, labels.map(function (label, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      className: index === selected ? 'selected' : 'unselected',
      onClick: handleClick(index)
    }, label);
  })));
};

TabUI.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired).isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  handleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TabUI */ "eus6");
/* harmony import */ var _TabView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TabView */ "TA1R");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var TabController = function TabController(props) {
  var labels = props.labels,
      views = props.views,
      alarm = props.alarm;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "TabController"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TabUI__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labels: labels,
    selected: selected,
    handleClick: handleClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TabView__WEBPACK_IMPORTED_MODULE_4__["default"], {
    views: views,
    selected: selected
  }));
};

__signature__(TabController, "useState{[selected, setSelected](0)}");

TabController.defaultProps = {
  alarm: false
};
TabController.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired).isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired).isRequired,
  alarm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool])
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
  // 리사이즈시 width가 안바뀜
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
    if (degree === images.length - 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRXZlbnRJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VTbGlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9EZXRhaWxJbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5OYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEluZm8vc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTGF5b3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkltYWdlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSW5wdXRUaWNrZXQvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRm9vdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQXBwL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdERlc2Mvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluTmF2QmFyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTG9naW5Gb3JtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEJveC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SGVhZC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvRGV0YWlsQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZXJJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVE9TL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpblZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9TdWJOYXZCYXIvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9BcHAvYXBwLmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3UHJvdmlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVRpdGxlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SGVhZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RPUy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm9MaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZURlc2MvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2YXRpb25Db3VudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF4vLi8vLiokIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01vZGFsL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvU3ViTmF2QmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGFiVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlU2xpZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvSGVhZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZXJJbmZvL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0NvbnRhaW5lci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uQnVuY2gvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJDb250cm9sbGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpblZpZXcvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Gb290ZXIvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9CdXR0b25CdW5jaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RDb250YWluZXIvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZUNvbnRyb2xsZXIvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Qm94L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0VkaXQvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXQvaW5kZXguanN4Iiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L0lucHV0VGlja2V0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZURlc2Mvc3R5bGUuY3NzIiwid2VicGFjazovLy93ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRm9ybS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb21vdGlvbkltYWdlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTmF2QmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L01vZGFsL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkltYWdlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vd2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0xpc3QvaW5kZXguanN4Il0sIm5hbWVzIjpbIkV2ZW50SW5mbyIsInByb3BzIiwicHJvZHVjdFByaWNlcyIsInNob3dEaXNjb3VudEluZm8iLCJkaXNjb3VudEluZm8iLCJmb3JFYWNoIiwidmFsdWUiLCJOdW1iZXIiLCJkaXNjb3VudFJhdGUiLCJFUFNJTE9OIiwicHVzaCIsInByaWNlVHlwZU1hcHBlciIsInByaWNlVHlwZU5hbWUiLCJNYXRoIiwicm91bmQiLCJsZW5ndGgiLCJkaXNjb3VudFRleHQiLCJqb2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIkltYWdlU2xpZGVyIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicmVmIiwiZGVncmVlIiwidHJhbnNpdGlvblRpbWUiLCJpbWFnZXMiLCJpbWFnZVdpZHRoIiwiaXNQcm9tb3Rpb24iLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwiaGFuZGxlTW91c2VPdmVyIiwiaGFuZGxlTW91c2VPdXQiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJtYXAiLCJpbmRleCIsInByb2R1Y3RJZCIsInNhdmVGaWxlTmFtZSIsImRlZmF1bHRQcm9wcyIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwiRGV0YWlsSW1hZ2UiLCJ0aXRsZSIsInVzZVN0YXRlIiwic2V0RGVncmVlIiwicmVzaXplRW5kIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibGVmdFNjcm9sbCIsInJpZ2h0U2Nyb2xsIiwiYXJyYXkiLCJNYWluTmF2QmFyIiwiaXNUcmFuc3BhcmVudCIsImlzTG9nb3V0YWJsZSIsIlJlc2VydmF0aW9uQ291bnQiLCJ0b1VzZWRMZW4iLCJ1c2VkTGVuIiwiY2FuY2VsZWRMZW4iLCJCdXR0b24iLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGljayIsImNoaWxkcmVuIiwiY29sb3IiLCJvbmVPZlR5cGUiLCJub2RlIiwiTWFpbkNvbnRhaW5lciIsImJhc2lzQ291bnQiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInByb2R1Y3RDb3VudCIsInNldFByb2R1Y3RDb3VudCIsIkFycmF5IiwiZmlsbCIsInZpZXdzIiwic2V0Vmlld3MiLCJzaG93aW5nQ291bnQiLCJpc0ZldGNoZWQiLCJjYXRlZ29yeVByb2R1Y3RzIiwidmlld3NBcnIiLCJsYWJlbHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImZldGNoUHJvZHVjdHMiLCJheGlvcyIsImdldCIsIml0ZW1zIiwiZGF0YSIsInNsaWNlIiwibW9kaWZpZWRWaWV3cyIsImNvbnNvbGUiLCJlcnJvciIsInNob3dNb3JlUHJvZHVjdCIsInZpZXdzTGVuIiwiZmluYWxJbmQiLCJjb3BpZWRWaWV3cyIsInByb2R1Y3RzTGVuIiwic3BlY2lmaWNQcm9kdWN0cyIsImFsbFByb2R1Y3RzIiwiY2F0ZWdvcnlJZCIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJzZXRJc01vZGFsIiwic2V0TW9kYWxDaGlsZHJlbiIsImFsZXJ0TW9kYWwiLCJjb25maXJtTW9kYWwiLCJMYXlvdXQiLCJpc01vZGFsIiwibW9kYWxDaGlsZHJlbiIsInRleHQiLCJhY3Rpb24iLCJJbnB1dFRpY2tldCIsInRpY2tldHMiLCJkaXNwYXRjaCIsInRyYW5zZm9ybU1vbmV5VW5pdCIsInByaWNlIiwib3JpZ2luYWxDb3N0IiwidHlwZSIsIndoZXJlIiwiQWN0aW9uQ29udGV4dCIsImNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiIsIlJlc2VydmF0aW9uQ29udGFpbmVyIiwiZW1haWxJZCIsInRvVXNlZCIsInNldFRvVXNlZCIsInNldFRvVXNlZExlbiIsImNhbmNlbGVkIiwic2V0Q2FuY2VsZWQiLCJzZXRDYW5jZWxlZExlbiIsInVzZUNvbnRleHQiLCJ1c2VkIiwiY2FuY2VsUmVzZXJ2YXRpb24iLCJpZCIsInB1dCIsInN0YXR1cyIsInRvRGVsZXRlSW5kZXgiLCJmaW5kSW5kZXgiLCJyZXNlcnZhdGlvbkluZm9JZCIsImNhbmNlbGVkSXRlbSIsInNwbGljZSIsInRvSW5zZXJ0SW5kZXgiLCJQcm9kdWN0SW5mbyIsImRpc3BsYXlJbmZvIiwicHJvZHVjdENvbnRlbnQiLCJwcm9kdWN0RGVzY3JpcHRpb24iLCJwbGFjZUxvdCIsInBsYWNlU3RyZWV0IiwicGxhY2VOYW1lIiwidGVsZXBob25lIiwibG9jYXRpb25JbWdTcmMiLCJGb290ZXIiLCJ0b3AiLCJpc1RvcE5lZWQiLCJSZXZpZXdDb250YWluZXIiLCJpc0JyaWVmIiwiZGlzcGxheUluZm9JZCIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiYXZlcmFnZVNjb3JlIiwic2V0QXZlcmFnZVNjb3JlIiwiaXNNb2RpZmlhYmxlIiwic2V0SXNNb2RpZmlhYmxlIiwiZXhEYXRhIiwic2V0RXhEYXRhIiwibW9kaWZpZWRBdmVyYWdlU2NvcmUiLCJyZWR1Y2UiLCJhY2N1bSIsImN1cnJlbnQiLCJzY29yZSIsImRpc3BsYXlTdGFyIiwibWF4U2NvcmUiLCJmaWxsQ291bnQiLCJmbG9vciIsIm5vdEZpbGxDb3VudCIsImNlaWwiLCJyYXRpb0NvdW50Iiwic3RhcnMiLCJfIiwidGltZXMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb250ZW50IiwiYmFja2dyb3VuZENsaXAiLCJXZWJraXRCYWNrZ3JvdW5kQ2xpcCIsIldlYmtpdFRleHRGaWxsQ29sb3IiLCJkaXNwbGF5IiwiZWRpdENvbW1lbnQiLCJjb21tZW50SWQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJjb21tZW50IiwiY29tbWVudEltYWdlcyIsImltYWdlU3JjIiwiZGVsZXRlQ29tbWVudCIsIm1vZGlmaWVkUmV2aWV3cyIsImZpbHRlciIsImNvbmZpcm1EZWxldGUiLCJjb25maXJtRWRpdCIsInN1Ym1pdCIsImlzUHJvY2Vzc2VkIiwiY29uZmlybUNhbmNlbCIsInJlc2VydmF0aW9uRGF0ZSIsInJlc2VydmF0aW9uRW1haWwiLCJkZWxldGVGbGFnIiwiTG9naW5Gb3JtIiwiZW1haWwiLCJzZXRFbWFpbCIsInRhcmdldCIsIlByb2R1Y3RCb3giLCJpdGVtSW5mbyIsInByb2R1Y3RJbWFnZVVybCIsInRleHRMaW1pdCIsImlzRm9sZCIsInNldElzRm9sZCIsImlzSWNvblNob3dpbmciLCJzZXRJc0ljb25TaG93aW5nIiwiZGV0YWlsVGV4dCIsInVzZVJlZiIsInRleHRPYmoiLCJ0cmltbWVkVGV4dCIsInRyaW0iLCJyZXBsYWNlIiwidGV4dFNpbXBsZSIsInRleHREZXRhaWwiLCJzaW1wbGUiLCJkZXRhaWwiLCJzaG93QW5kSGlkZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9waW1tZWRpYXRlIiwiJCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJUaWNrZXRJbmZvIiwiaW5mbyIsImRlc2NyaXB0aW9uIiwicmVzZXJ2YXRpb25OYW1lIiwicmVzZXJ2YXRpb25UZWwiLCJwcmljZUluZm8iLCJ0b3RhbFByaWNlIiwiYWN0aW9ucyIsInJlc2VydmF0aW9uU3VtbWFyeSIsImNvdW50IiwiY3JlYXRlQnV0dG9uIiwibm90ZXMiLCJTdHJpbmciLCJwYWRTdGFydCIsIlJlc2VydmVDb250YWluZXIiLCJ1c2VQYXJhbXMiLCJwcm9kdWN0RGF0YSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkaWZmRGF5cyIsInJlc2VydmUiLCJyYW5kb20iLCJzdGFydCIsImVuZCIsIm1vbWVudCIsInR6IiwiYWRkIiwiZm9ybWF0IiwicHJvZHVjdEltYWdlcyIsInNvbWUiLCJEZXRhaWxDb250YWluZXIiLCJjb21tZW50cyIsImRpc3BsYXlJbmZvSW1hZ2UiLCJSZXNlcnZlckluZm8iLCJuYW1lIiwidG90YWxUaWNrZXQiLCJpc1ZlcmlmaWVkTmFtZSIsImlzVmVyaWZpZWRUZWwiLCJpc1ZlcmlmaWVkRW1haWwiLCJtYWtlQWxlcnQiLCJoaWRlIiwiTWFpblZpZXciLCJwcm9kdWN0cyIsImxlZnRQcm9kdWN0cyIsInJpZ2h0UHJvZHVjdHMiLCJDb3VudFRleHQiLCJlbGVtZW50IiwiaGFuZGxlQ2xpY2siLCJSZWFjdERPTSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiUmV2aWV3UHJvdmlkZXIiLCJJbWFnZVRpdGxlIiwiaW1hZ2VMZW4iLCJUaWNrZXRIZWFkIiwiaXNHcmVlbiIsIlRPUyIsImlzQ2hlY2tlZCIsImlzQ29sbGVjdGlvbkZvbGQiLCJzZXRJc0NvbGxlY3Rpb25Gb2xkIiwiaXNPZmZlckZvbGQiLCJzZXRJc09mZmVyRm9sZCIsImZvbGRUZXh0Iiwic2hvd1RleHQiLCJoYW5kbGVDb2xsZWN0aW9uQ2xpY2siLCJoYW5kbGVPZmZlckNsaWNrIiwiY2hlY2tlZCIsIlRpY2tldEluZm9MaXN0IiwiaW5mb3MiLCJSZXNlcnZlRGVzYyIsInBsYWNlIiwicHJpY2VUZXh0IiwicHJpY2VMaXN0IiwiSGVhZGVyIiwiaW5pdGlhbFN0YXRlIiwiaXNUT1NDaGVja2VkIiwicmVkdWNlciIsInN0YXRlIiwibW9kaWZpZWREZWMiLCJtb2RpZmllZEluYyIsInRlc3QiLCJ0ZWxSZSIsImVtYWlsUmUiLCJFcnJvciIsIlJlc2VydmVGb3JtIiwidXNlUmVkdWNlciIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaGFuZGxlU3VibWl0IiwicmVzZXJ2YXRpb25JbmZvIiwicHJpY2VzIiwicmVzZXJ2YXRpb25UZWxlcGhvbmUiLCJyZXNlcnZhdGlvblllYXJNb250aERheSIsImxlbiIsInByb2R1Y3RQcmljZUlkIiwicHJvZHVjdFByaWNlSUQiLCJwb3N0IiwiY29uZmlybVN1Ym1pdCIsInNwbGl0IiwiaXNSZXF1cmVkIiwiU3ViTmF2QmFyIiwidXNlTG9jYXRpb24iLCJwYXRobmFtZSIsInBhdGhzIiwiaXRlbUlkIiwiVGFiVmlldyIsInNlbGVjdGVkIiwiZmluZCIsIlJldmlldyIsInJldmlldyIsImltYWdlIiwiZGF0ZSIsIlRhYlVJIiwibGFiZWwiLCJUYWJDb250cm9sbGVyIiwiYWxhcm0iLCJzZXRTZWxlY3RlZCIsImFwcGx5U3R5bGUiLCJ0b1N0cmluZyIsImNhbGwiLCJhbGwiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJyaWdodCIsImRvd24iLCJsZWZ0IiwiQnV0dG9uQnVuY2giLCJtYXJnaW4iLCJwYWRkaW5nIiwiSW1hZ2VDb250cm9sbGVyIiwiaW1hZ2VMaXN0Iiwic2V0SW1hZ2VXaWR0aCIsImdldEltYWdlV2lkdGgiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsaWVudFdpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSZXZpZXdFZGl0IiwidGh1bWJuYWlsV2lkdGgiLCJleFNjb3JlIiwiZXhDb21tZW50IiwiZXhJbWFnZVNyYyIsImlzUG9zdCIsInNldFNjb3JlIiwic2V0Q29tbWVudCIsInNldEltYWdlU3JjIiwidGh1bWJuYWlsU3R5bGUiLCJzZXRUaHVtYm5haWxTdHlsZSIsImZvcm0iLCJpbWFnZVJlZiIsImltYWdlTWVhc3VyZW1lbnQiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInJhdGlvIiwiaGVpZ2h0Iiwid2lkdGgiLCJmaWxlcyIsInZhbGlkSW1hZ2VUeXBlIiwiZm9ybU9iaiIsIkZvcm1EYXRhIiwibW9kaWZ5UmF0aW5nIiwidXBsb2FkSW1hZ2UiLCJ0ZW1wSW1hZ2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjYW5jZWxJbWFnZVVwbG9hZCIsIlRpY2tldCIsIlByb2R1Y3REZXNjIiwibGltaXQiLCJzaG93TW9yZURlc2MiLCJvcGVuVGV4dCIsIlByb21vdGlvbkltYWdlIiwidGltZUludGVydmFsIiwic2Nyb2xsYWJsZSIsInNldFNjcm9sbGFibGUiLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJzZXRJbWFnZXMiLCJkZWdyZWVSZWYiLCJzY3JvbGxhYmxlUmVmIiwiZmV0Y2hJbWFnZXMiLCJhdXRvU2Nyb2xsIiwic2V0SW50ZXJ2YWwiLCJwcmV2RGVncmVlIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0U2Nyb2xsIiwicGF1c2VTY3JvbGwiLCJOYXZCYXIiLCJQcm9kdWN0Q29udGFpbmVyIiwiY2xhc3NOYW1lIiwiTW9kYWwiLCJNYWluSW1hZ2UiLCJhbHQiLCJSZXZpZXdTdW1tYXJ5IiwicmV2aWV3Q291bnQiLCJSZXZpZXdMaXN0Iiwic2hvd1Jldmlld3MiLCJyZXZpZXdzQ29tcCIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxhQURtQixHQUNERCxLQURDLENBQ25CQyxhQURtQjs7QUFHM0IsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBRixpQkFBYSxDQUFDRyxPQUFkLENBQXNCLFVBQUND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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0FBZXJCLFVBZkg7QUFnQnJCeUssYUFBVyxFQUFFN0ssaURBQVMsQ0FBQzBCLElBQVYsQ0FBZXRCLFVBaEJQO0FBaUJyQm1MLGVBQWEsRUFBRXZMLGlEQUFTLENBQUMwQixJQUFWLENBQWV0QixVQWpCVDtBQWtCckJvTCxhQUFXLEVBQUV4TCxpREFBUyxDQUFDMEIsSUFBVixDQUFldEIsVUFsQlA7QUFtQnJCdUwsZUFBYSxFQUFFM0wsaURBQVMsQ0FBQzBCLElBQVYsQ0FBZXRCLFVBbkJUO0FBb0JyQmlKLFFBQU0sRUFBRXJKLGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0I7QUFDdEJxSCxNQUFFLEVBQUV2SCxpREFBUyxDQUFDd0IsTUFBVixDQUFpQnBCLFVBREM7QUFFdEJ1SixTQUFLLEVBQUUzSixpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQUZGO0FBR3RCNkssV0FBTyxFQUFFakwsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkMsVUFISjtBQUl0QitLLFlBQVEsRUFBRW5MLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJDO0FBSkwsR0FBaEIsRUFLTEE7QUF6QmtCLENBQXZCO2VBNEJlNlosVTtBQUFBOzs7Ozs7Ozs7OzBCQXJGVEEsVSIsImZpbGUiOiJtYWluLjBkODI0YjhiYTc4YjBhZmQ2Y2Y3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgRXZlbnRJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0UHJpY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgc2hvd0Rpc2NvdW50SW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc2NvdW50SW5mbyA9IFtdO1xyXG4gICAgcHJvZHVjdFByaWNlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAoTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgIGRpc2NvdW50SW5mby5wdXNoKFxyXG4gICAgICAgICAgYCR7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfSAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgIHZhbHVlLmRpc2NvdW50UmF0ZSxcclxuICAgICAgICAgICl9JWAsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGlzY291bnRJbmZvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGlzY291bnRUZXh0ID0gYCR7ZGlzY291bnRJbmZvLmpvaW4oJywgJyl9IO2VoOyduGA7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBb64Sk7J2067KE7JiI7JW9IO2KueuzhO2VoOyduF1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2Rpc2NvdW50VGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkV2ZW50SW5mb1wiPlxyXG4gICAgICA8aDI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2V2dFwiIC8+XHJcbiAgICAgICAg7J2067Kk7Yq47KCV67O0XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIHtzaG93RGlzY291bnRJbmZvKCl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkV2ZW50SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5JbWFnZSBmcm9tICcuLi9NYWluSW1hZ2UnO1xyXG5cclxuY29uc3QgSW1hZ2VTbGlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgLyogaW5pdFxyXG4gICAqICBkZWdyZWU6IDBcclxuICAgKiB0cmFuc2l0aW9uVGltZTogMlxyXG4gICAqICBpbWFnZXM6IFtdXHJcbiAgICogIGltYWdlV2lkdGg6IDBcclxuICAgKiBpc1Byb21vdGlvbjogdHJ1ZVxyXG4gICAqL1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkZWdyZWUsXHJcbiAgICB0cmFuc2l0aW9uVGltZSxcclxuICAgIGltYWdlcyxcclxuICAgIGltYWdlV2lkdGgsXHJcbiAgICBpc1Byb21vdGlvbixcclxuICAgIGhhbmRsZVRyYW5zaXRpb25FbmQsXHJcbiAgICBoYW5kbGVNb3VzZU92ZXIsXHJcbiAgICBoYW5kbGVNb3VzZU91dCxcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uXHJcbiAgICAgIGNsYXNzTmFtZT17YEltYWdlU2xpZGVyICR7aXNQcm9tb3Rpb24gPyAncHJvbW90aW9uJyA6ICdkZXRhaWwnfWB9XHJcbiAgICAgIG9uVHJhbnNpdGlvbkVuZD17aGFuZGxlVHJhbnNpdGlvbkVuZH1cclxuICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn1cclxuICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XHJcbiAgICA+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2ltYWdlV2lkdGggKiBkZWdyZWV9cHgpYCxcclxuICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dHJhbnNpdGlvblRpbWV9c2AsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmICh2YWx1ZSAmJiBpc1Byb21vdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgZGV0YWlsP3Byb2R1Y3RJZD0ke3ZhbHVlLnByb2R1Y3RJZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPE1haW5JbWFnZSBzcmM9e3ZhbHVlLnNhdmVGaWxlTmFtZX0gYWx0PVwicHJvbW90aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkltYWdlIHNyYz17dmFsdWUuc2F2ZUZpbGVOYW1lfSBhbHQ9XCJpdGVtSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSk7XHJcblxyXG5JbWFnZVNsaWRlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogKCkgPT4ge30sXHJcbiAgaGFuZGxlTW91c2VPdmVyOiAoKSA9PiB7fSxcclxuICBoYW5kbGVNb3VzZU91dDogKCkgPT4ge30sXHJcbn07XHJcblxyXG5JbWFnZVNsaWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgZGVncmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpbWFnZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaXNQcm9tb3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlVHJhbnNpdGlvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGFuZGxlTW91c2VPdmVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBoYW5kbGVNb3VzZU91dDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEltYWdlQ29udHJvbGxlciBmcm9tICcuLi9JbWFnZUNvbnRyb2xsZXInO1xyXG5cclxuLy8gRGV0YWlsQ29udGFpbmVy7JeQ7IScIGltYWdlc+yZgCB0aXRsZeydhCDspJjslbwgIO2VmOqzoCBpbWFnZXPripQg7ZWE7YSw66eB7J2EIOqxsOyzkOuGlOyVvCDrkKhcclxuLy8g7Iqk7YGs66GkIOyLnOqwhCh0cmFuc2l0aW9uVGltZSkgZGVmYXVsdCAx7LSIXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IERldGFpbEltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpbWFnZXMsIHRpdGxlLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCByZXNpemVFbmQgPSAoZnVuYykgPT4ge1xyXG4gICAgbGV0IHRpbWVyO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgMTAwKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbGVmdFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgPT09IDApIHJldHVybjtcclxuICAgIHNldERlZ3JlZShkZWdyZWUgLSAxKTtcclxuICAgIC8qXHJcbiAgICBpZiAoZGVncmVlID09PSAwKSByZXR1cm47XHJcbiAgICBkZWdyZWUgLT0gMTtcclxuICAgIGNvbnN0IGludGVydmFsID0gZmlyc3RJdGVtLmNsaWVudFdpZHRoO1xyXG4gICAgaW1hZ2VMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2ludGVydmFsICogZGVncmVlfXB4KWA7XHJcbiAgICBpbWFnZUNvdW50aW5nLmlubmVyVGV4dCA9IGAgJHtkZWdyZWUgKyAxfSBgO1xyXG4gICAgKi9cclxuICB9O1xyXG5cclxuICBjb25zdCByaWdodFNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChkZWdyZWUgPT09IGltYWdlcy5sZW5ndGggLSAxKSByZXR1cm47XHJcbiAgICBzZXREZWdyZWUoKGRlZ3JlZSArIDEpICUgaW1hZ2VzLmxlbmd0aCk7XHJcbiAgICAvKlxyXG4gICAgaW1hZ2VMaXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2ludGVydmFsICogZGVncmVlfXB4KWA7XHJcbiAgICBpbWFnZUNvdW50aW5nLmlubmVyVGV4dCA9IGAgJHtkZWdyZWUgKyAxfSBgO1xyXG4gICAgKi9cclxuICB9O1xyXG4gIC8vIHByb3BzIOuLpCDrhJjqsqjspJjslbwg7ZWoXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZUNvbnRyb2xsZXJcclxuICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgIHRyYW5zaXRpb25UaW1lPXt0cmFuc2l0aW9uVGltZX1cclxuICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgIHJlc2l6ZUVuZD17cmVzaXplRW5kfVxyXG4gICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgIGxlZnRTY3JvbGw9e2xlZnRTY3JvbGx9XHJcbiAgICAgIHJpZ2h0U2Nyb2xsPXtyaWdodFNjcm9sbH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkRldGFpbEltYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0cmFuc2l0aW9uVGltZTogMC41LFxyXG59O1xyXG5cclxuRGV0YWlsSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIGlzVHJhbnNwYXJlbnTqsIAgZmFsc2Xsnbwg65WMIGZpeGVk7J2066+A66GcIHN0eWxl6rCd7LK06rCAIOyeiOyWtOyVvCDrkKhcclxuXHJcbmNvbnN0IE1haW5OYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlzVHJhbnNwYXJlbnQsIGlzTG9nb3V0YWJsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiTWFpbk5hdkJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YE1haW5OYXZCYXIgJHtpc1RyYW5zcGFyZW50ID8gJ3RyYW5zcGFyZW50JyA6ICdmaXhlZCd9YH0+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uLnBuZ1wiIGFsdD1cIm5hdmVyIGljb25cIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgIDxoMj57aXNMb2dvdXRhYmxlID8gJ+uhnOq3uOyVhOybgycgOiAn7JiI7JW97ZmV7J24J308L2gyPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuTWFpbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgaXNUcmFuc3BhcmVudDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc0xvZ291dGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2QmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyDsnpjsnpjtlZjqsowg7Kq86rCk7IiYIOyeiOydhCDqsoMg6rCZ7J2MXHJcblxyXG5jb25zdCBSZXNlcnZhdGlvbkNvdW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0b1VzZWRMZW4sIHVzZWRMZW4sIGNhbmNlbGVkTGVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzZXJ2YXRpb25Db3VudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19ib29rMlwiIC8+XHJcbiAgICAgICAgICAgICAg7KCE7LK0XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt0b1VzZWRMZW4gKyB1c2VkTGVuICsgY2FuY2VsZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fYm9va19zc1wiIC8+XHJcbiAgICAgICAgICAgICAg7J207Jqp7JiI7KCVXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt0b1VzZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fY2hlY2tcIiAvPlxyXG4gICAgICAgICAgICAgIOydtOyaqeyZhOujjFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57dXNlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19iYWNrXCIgLz5cclxuICAgICAgICAgICAgICDst6jshozCt+2ZmOu2iFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57Y2FuY2VsZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmF0aW9uQ291bnQucHJvcFR5cGVzID0ge1xyXG4gIHRvVXNlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHVzZWRMZW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjYW5jZWxlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Db3VudDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCBjbGljaywgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiB0eXBlb2YgY2xpY2sgPT09ICdmdW5jdGlvbicgPyAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yOiBmb250Q29sb3IgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKSA6IChcclxuICAgIDxMaW5rXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvblwiXHJcbiAgICAgIHRvPXtjbGlja31cclxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yLCBjb2xvcjogZm9udENvbG9yIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcclxuICBmb250Q29sb3I6ICcjMDAwJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjRmNGY0JyxcclxufTtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgZm9udENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGljazogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4vKlxyXG4gKiDrhKTsnbTrsoQg67Cw6rK9IOy0iOuhneyDiTogIzFlYzgwMCDquIDsnpDsg4kgI2ZmZjtcclxuICovXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4uL01haW5WaWV3JztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcbmltcG9ydCBQcm9kdWN0Qm94IGZyb20gJy4uL1Byb2R1Y3RCb3gnO1xyXG5cclxuY29uc3QgTWFpbkNvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYmFzaXNDb3VudCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoMCk7IC8vIO2YhOyerCDshKDtg53rkJwg7Lm07YWM6rOg66asIGlkXHJcbiAgY29uc3QgW3Byb2R1Y3RDb3VudCwgc2V0UHJvZHVjdENvdW50XSA9IHVzZVN0YXRlKDApOyAvLyAg7Lm07YWM6rOg66as7J2YIOygnO2SiCDqsJzsiJhcclxuICBjb25zdCBbdmlld3MsIHNldFZpZXdzXSA9IHVzZVN0YXRlKEFycmF5KDYpLmZpbGwobnVsbCkpOyAvLyBbPE1haW5WaWV3Lz4sPE1haW5WaWV3Lz5dXHJcblxyXG4gIGxldCBzaG93aW5nQ291bnQgPSAwO1xyXG4gIGxldCBpc0ZldGNoZWQgPSBmYWxzZTtcclxuICBjb25zdCBjYXRlZ29yeVByb2R1Y3RzID0gQXJyYXkoNikuZmlsbChudWxsKTtcclxuICBjb25zdCB2aWV3c0FyciA9IEFycmF5KDYpLmZpbGwobnVsbCk7IC8vIFtbPFByb2R1Y3RCb3gvPl0sWzxQcm9kdWN0Qm94Lz5dXTtcclxuICBjb25zdCBsYWJlbHMgPSBbJ+yghOyytCcsICfsoITsi5wnLCAn666k7KeA7LusJywgJ+y9mOyEnO2KuCcsICftgbTrnpjsi50nLCAn7Jew6re5J107XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9ICfrhKTsnbTrsoQg7JiI7JW9JztcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIGRhdGE6IHsgaXRlbXMgfSxcclxuICAgICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb2R1Y3RzJyk7XHJcbiAgICAgICAgY2F0ZWdvcnlQcm9kdWN0c1swXSA9IGl0ZW1zO1xyXG4gICAgICAgIHZpZXdzQXJyWzBdID0gaXRlbXNcclxuICAgICAgICAgIC5zbGljZShiYXNpc0NvdW50KVxyXG4gICAgICAgICAgLm1hcCgodmFsdWUpID0+IDxQcm9kdWN0Qm94IGl0ZW1JbmZvPXt2YWx1ZX0gLz4pO1xyXG4gICAgICAgIHNob3dpbmdDb3VudCArPSBiYXNpc0NvdW50O1xyXG4gICAgICAgIHNldFByb2R1Y3RDb3VudChpdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICAgIG1vZGlmaWVkVmlld3NbMF0gPSAoXHJcbiAgICAgICAgICA8TWFpblZpZXcgcHJvZHVjdENvdW50PXtwcm9kdWN0Q291bnR9IHByb2R1Y3RzPXt2aWV3c0FyclswXX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFZpZXdzKG1vZGlmaWVkVmlld3MpO1xyXG4gICAgICAgIGlzRmV0Y2hlZCA9IHRydWU7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3c0xlbiA9IHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aDtcclxuICAgIGlmICh2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50IHx8IHZpZXdzTGVuID4gc2hvd2luZ0NvdW50KSB7XHJcbiAgICAgIC8vIOuztOyXrOyjvOq4sOunjCDtlZjrqbQg65CoXHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICB2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA/IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnRcclxuICAgICAgICAgIDogdmlld3NMZW47XHJcbiAgICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH1cclxuICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5zbGljZShmaW5hbEluZCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgc2hvd2luZ0NvdW50ID0gZmluYWxJbmQ7XHJcbiAgICAgIHNldFZpZXdzKGNvcGllZFZpZXdzKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGggPlxyXG4gICAgICB2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGhcclxuICAgICkge1xyXG4gICAgICAvLyDrhKPsnYDrkqQg67O07Jes7KSMXHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzTGVuID0gY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICBwcm9kdWN0c0xlbiA+PSB2aWV3c0xlbiArIGJhc2lzQ291bnRcclxuICAgICAgICAgID8gdmlld3NMZW4gKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA6IHByb2R1Y3RzTGVuO1xyXG4gICAgICBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldXHJcbiAgICAgICAgLnNsaWNlKHZpZXdzTGVuLCBmaW5hbEluZClcclxuICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnB1c2goPFByb2R1Y3RCb3ggaXRlbUluZm89e3ZhbHVlfSAvPik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH1cclxuICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBzaG93aW5nQ291bnQgPSBmaW5hbEluZDtcclxuICAgICAgc2V0Vmlld3MoY29waWVkVmlld3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDsubTthYzqs6Drpqwg67CU64CM7JeI7J2EIOuVjCB2aWV367CU6r6464qUIOqzvOyglVxyXG4gICAgLy8gMS4g7LWc7LSIIOqzvOyglVxyXG4gICAgLy8gMi4g7LWc7LSIIOyVhOuLkCDrlYxcclxuICAgIGlmIChpc0ZldGNoZWQpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldKSB7XHJcbiAgICAgICAgLy8gMS7stZzstIgg6rO87KCVXHJcbiAgICAgICAgLy8gc2VsZWN0ZWRDYXRlZ29yeeyXkCAg7IOB7ZKI7KCV67O066W8IOuEo+qzoFxyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIGNvbnN0IHNwZWNpZmljUHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBjb25zdCBbYWxsUHJvZHVjdHNdID0gY2F0ZWdvcnlQcm9kdWN0cztcclxuICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmNhdGVnb3J5SWQgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgc3BlY2lmaWNQcm9kdWN0cy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldID0gc3BlY2lmaWNQcm9kdWN0cztcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoc3BlY2lmaWNQcm9kdWN0cy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICAgIHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldID0gc3BlY2lmaWNQcm9kdWN0c1xyXG4gICAgICAgICAgLnNsaWNlKGJhc2lzQ291bnQpXHJcbiAgICAgICAgICAubWFwKCh2YWx1ZSkgPT4gPFByb2R1Y3RCb3ggaXRlbUluZm89e3ZhbHVlfSAvPik7XHJcbiAgICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICAgIGNvcGllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17dmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2hvd2luZ0NvdW50ID0gYmFzaXNDb3VudDtcclxuICAgICAgICBzZXRWaWV3cyhjb3BpZWRWaWV3cyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCA+PSBiYXNpc0NvdW50KSB7XHJcbiAgICAgICAgLy8gbGVuZ3Ro64qUIOyehOyLnCDtjJDrs4QgTWFpblZpZXfrp4wg7J6I7Ja07IScIOyViOyXkCDqsK/siJgg7YyM7JWF7ZW07JW8IOuQqFxyXG4gICAgICAgIC8vIDIuIGJhc2lzQ291bnTrnpEg7J287LmY7ZWgIOuVjFxyXG4gICAgICAgIHNldFByb2R1Y3RDb3VudChjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICAgIGNvcGllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17dmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0uc2xpY2UoYmFzaXNDb3VudCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2hvd2luZ0NvdW50ID0gYmFzaXNDb3VudDtcclxuICAgICAgICBzZXRWaWV3cyhjb3BpZWRWaWV3cyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbc2VsZWN0ZWRDYXRlZ29yeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNYWluQ29udGFpbmVyXCI+XHJcbiAgICAgIDxUYWJDb250cm9sbGVyXHJcbiAgICAgICAgbGFiZWxzPXtsYWJlbHN9XHJcbiAgICAgICAgdmlld3M9e3ZpZXdzfVxyXG4gICAgICAgIGFscmFtPXtzZXRTZWxlY3RlZENhdGVnb3J5fVxyXG4gICAgICAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtb3JlXCIgb25DbGljaz17c2hvd01vcmVQcm9kdWN0fT5cclxuICAgICAgICDrjZTrs7TquLBcclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbk1haW5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJhc2lzQ291bnQ6IDQsXHJcbn07XHJcblxyXG5NYWluQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBiYXNpc0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgTW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgc2V0SXNNb2RhbDogKCkgPT4ge30sXHJcbiAgc2V0TW9kYWxDaGlsZHJlbjogKCkgPT4ge30sXHJcbiAgYWxlcnRNb2RhbDogKCkgPT4ge30sXHJcbiAgY29uZmlybU1vZGFsOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNNb2RhbCwgc2V0SXNNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsQ2hpbGRyZW4sIHNldE1vZGFsQ2hpbGRyZW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBhbGVydE1vZGFsID0gKHRleHQpID0+IHtcclxuICAgIHNldE1vZGFsQ2hpbGRyZW4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0ZXh0fTwvaDE+XHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICftmZXsnbgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtTW9kYWwgPSAodGV4dCwgYWN0aW9uKSA9PiB7XHJcbiAgICBzZXRNb2RhbENoaWxkcmVuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT57dGV4dH08L2gxPlxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAn7ZmV7J24JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc01vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAn7Leo7IaMJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+LFxyXG4gICAgKTtcclxuICAgIHNldElzTW9kYWwodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNNb2RhbCkge1xyXG4gICAgICBzZXRNb2RhbENoaWxkcmVuKCcnKTtcclxuICAgIH1cclxuICB9LCBbaXNNb2RhbF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHNldElzTW9kYWwsXHJcbiAgICAgICAgc2V0TW9kYWxDaGlsZHJlbixcclxuICAgICAgICBhbGVydE1vZGFsLFxyXG4gICAgICAgIGNvbmZpcm1Nb2RhbCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7aXNNb2RhbCA/IDxNb2RhbD57bW9kYWxDaGlsZHJlbn08L01vZGFsPiA6ICcnfVxyXG4gICAgPC9Nb2RhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbmV4cG9ydCB7IE1vZGFsQ29udGV4dCB9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1Nb25leVVuaXQsIHByaWNlVHlwZU1hcHBlciB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IElucHV0VGlja2V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0UHJpY2VzLCB0aWNrZXRzLCBkaXNwYXRjaCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIklucHV0VGlja2V0XCI+XHJcbiAgICAgIHtwcm9kdWN0UHJpY2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWFjaFRpY2tldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICB7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7YCR7dHJhbnNmb3JtTW9uZXlVbml0KHZhbHVlLnByaWNlKX0g7JuQYH1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb3N0ID1cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUucHJpY2UgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoMSAtIE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpIC8gMTAwKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICApICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Ake3RyYW5zZm9ybU1vbmV5VW5pdChvcmlnaW5hbENvc3QpfeybkCAoJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIodmFsdWUuZGlzY291bnRSYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICl9JSDtlaDsnbjqsIApYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkanVzdFRpY2tldFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzcHJfQm9vazIgaWNvX21pbnVzMyAke1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tldHNbaW5kZXhdID8gJycgOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnREVDUkVNRU5UJywgd2hlcmU6IGluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHJlc3J2YXRpb25UaWNrZXQke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICBjbHNzTmFtZT17dGlja2V0c1tpbmRleF0gPyAnJyA6ICdkaXNhYmxlZCd9XHJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGlja2V0c1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX3BsdXMzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0lOQ1JFTUVOVCcsIHdoZXJlOiBpbmRleCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+e2Ake3RyYW5zZm9ybU1vbmV5VW5pdCh2YWx1ZS5wcmljZSAqIHRpY2tldHNbaW5kZXhdKX0g7JuQYH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbklucHV0VGlja2V0LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0UHJpY2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgZGlzY291bnRSYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgdGlja2V0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRUaWNrZXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IFRpY2tldCBmcm9tICcuLi9UaWNrZXQnO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25Db3VudCBmcm9tICcuLi9SZXNlcnZhdGlvbkNvdW50JztcclxuXHJcbmNvbnN0IEFjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb246ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBlbWFpbElkIH0gPSBwcm9wcztcclxuICBjb25zdCBbdG9Vc2VkLCBzZXRUb1VzZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b1VzZWRMZW4sIHNldFRvVXNlZExlbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2FuY2VsZWQsIHNldENhbmNlbGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2FuY2VsZWRMZW4sIHNldENhbmNlbGVkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgbGV0IHVzZWQ7XHJcbiAgbGV0IHVzZWRMZW47XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9yZXNlcnZhdGlvbnMvJHtlbWFpbElkfWApO1xyXG4gICAgICBzZXRUb1VzZWQoZGF0YS50b1VzZWQpO1xyXG4gICAgICBzZXRUb1VzZWRMZW4oZGF0YS50b1VzZWQubGVuZ3RoKTtcclxuICAgICAgc2V0Q2FuY2VsZWQoZGF0YS5jYW5jZWxlZCk7XHJcbiAgICAgIHNldENhbmNlbGVkTGVuKGRhdGEuY2FuY2VsZWQubGVuZ3RoKTtcclxuICAgICAgdXNlZCA9IGRhdGEudXNlZDtcclxuICAgICAgdXNlZExlbiA9IGRhdGEudXNlZC5sZW5ndGg7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbFJlc2VydmF0aW9uID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MucHV0KGAvYXBpL3Jlc2VydmF0aW9uLyR7aWR9YCk7XHJcbiAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgYWxlcnRNb2RhbCgn7J6Y66q765CcIOyalOyyreyeheuLiOuLpCcpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAvLyDsmKTrpZjrgpjrqbQg67Cw7Je0IOuzteyCrO2VtOyVvO2VqFxyXG4gICAgICBjb25zdCB0b0RlbGV0ZUluZGV4ID0gdG9Vc2VkLmZpbmRJbmRleChcclxuICAgICAgICAodmFsdWUpID0+IHZhbHVlLnJlc2VydmF0aW9uSW5mb0lkID09PSBpZCxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2FuY2VsZWRJdGVtID0gdG9Vc2VkLnNwbGljZSh0b0RlbGV0ZUluZGV4LCAxKTtcclxuICAgICAgY29uc3QgdG9JbnNlcnRJbmRleCA9IGNhbmNlbGVkLmZpbmRJbmRleChcclxuICAgICAgICAodmFsdWUpID0+IHZhbHVlLnJlc2VydmF0aW9uSW5mb0lkID4gaWQsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0b0luc2VydEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIGNhbmNlbGVkLnB1c2goY2FuY2VsZWRJdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYW5jZWxlZC5zcGxpY2UodG9JbnNlcnRJbmRleCwgMCwgY2FuY2VsZWRJdGVtKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUb1VzZWQodG9Vc2VkKTtcclxuICAgICAgc2V0VG9Vc2VkTGVuKHRvVXNlZExlbiAtIDEpO1xyXG4gICAgICBzZXRDYW5jZWxlZChjYW5jZWxlZCk7XHJcbiAgICAgIHNldENhbmNlbGVkTGVuKGNhbmNlbGVkTGVuICsgMSk7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yYiOyVveydtCDst6jshozrkJjsl4jsirXri4jri6QnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbChcclxuICAgICAgICAn7ZWc67KIIOy3qOyGjO2VmOyLnOuptCDri6Tsi5wg65CY64+M66a0IOyImCDsl4bsirXri4jri6QuIOq3uOuemOuPhCDtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjYW5jZWxSZXNlcnZhdGlvbihpZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNlcnZhdGlvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxSZXNlcnZhdGlvbkNvdW50XHJcbiAgICAgICAgICB0b1VzZWRMZW49e3RvVXNlZExlbn1cclxuICAgICAgICAgIHVzZWRMZW49e3VzZWRMZW59XHJcbiAgICAgICAgICBjYW5jZWxlZExlbj17Y2FuY2VsZWRMZW59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGlja2V0IGluZm9zPXt0b1VzZWR9IGFjdGlvbnM9XCJjYW5jZWxcIiBpc0dyZWVuPlxyXG4gICAgICAgICAg7JiI7JW9IO2ZleyglVxyXG4gICAgICAgIDwvVGlja2V0PlxyXG4gICAgICAgIDxUaWNrZXQgaW5mb3M9e3VzZWR9IGFjdGlvbnM9XCJ3cml0ZVJldmlld1wiPlxyXG4gICAgICAgICAg7J207JqpIOyZhOujjFxyXG4gICAgICAgIDwvVGlja2V0PlxyXG4gICAgICAgIDxUaWNrZXQgaW5mb3M9e2NhbmNlbGVkfT7st6jshozrkJwg7JiI7JW9PC9UaWNrZXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZhdGlvbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgZW1haWxJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Db250YWluZXI7XHJcbmV4cG9ydCB7IEFjdGlvbkNvbnRleHQgfTtcclxuXHJcbi8qXHJcblJlc2VydmF0aW9uQ29udGFpbmVyIOKGkiBSZXNlcnZhdGlvbkNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGkiBUaWNrZXQg4oaSIFRpY2tldEhlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaSIFRpY2tldEluZm9MaXN0IOKGkiBUaWNrZXRJbmZvXHJcbiovXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpc3BsYXlJbmZvOiB7XHJcbiAgICAgIHByb2R1Y3RDb250ZW50LFxyXG4gICAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICAgIHBsYWNlTG90LFxyXG4gICAgICBwbGFjZVN0cmVldCxcclxuICAgICAgcGxhY2VOYW1lLFxyXG4gICAgICB0ZWxlcGhvbmUsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb25JbWdTcmMsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGxhYmVscyA9IFsn7IOB7IS47KCV67O0JywgJ+yYpOyLnOuKlOq4uCddO1xyXG4gIGNvbnN0IHZpZXdzID0gW1xyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHJvZHVjdERldGFpbFwiPlxyXG4gICAgICA8aDI+W+yGjOqwnF08L2gyPlxyXG4gICAgICA8cD57cHJvZHVjdENvbnRlbnR9PC9wPlxyXG4gICAgICA8aDI+W+qzteyngOyCrO2VrV08L2gyPlxyXG4gICAgPC9hcnRpY2xlPixcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIj5cclxuICAgICAgPGltZyBzcmM9e2AvJHtsb2NhdGlvbkltZ1NyY31gfSBhbHQ9XCJsb2NhdGlvblwiIC8+XHJcbiAgICAgIDxoMj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jVGV4dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tcGluNFwiIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3BsYWNlTG90fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVRleHRcIj7sp4Drsog8L3NwYW4+XHJcbiAgICAgICAgICAgIHtwbGFjZVN0cmVldH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVRleHRcIj57cGxhY2VOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNhbGwyXCIgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57dGVsZXBob25lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaW5kUm9hZFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1wYXRoLWZpbmQyXCIgLz5cclxuICAgICAgICAgICAg6ri47LC+6riwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jYXItZmluZDJcIiAvPlxyXG4gICAgICAgICAgICDrgrTruYTqsozsnbTshZhcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT4sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlByb2R1Y3RJbmZvXCI+XHJcbiAgICAgIDxUYWJDb250cm9sbGVyIGxhYmVscz17bGFiZWxzfSB2aWV3cz17dmlld3N9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2R1Y3RJbmZvLnByb3BUeXBlcyA9IHtcclxuICBkaXNwbGF5SW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHByb2R1Y3RDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlTG90OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZVN0cmVldDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGxvY2F0aW9uSW1nU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvcCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiRm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgeygoaXNUb3BOZWVkKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXNUb3BOZWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXVwMVwiIC8+XHJcbiAgICAgICAgICAgICAgICBUT1BcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkodG9wKX1cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXV0aW9uXCI+XHJcbiAgICAgICAgICDrhKTsnbTrsoQo7KO8KeuKlCDthrXsi6DtjJDrp6TsnZgg64u57IKs7J6Q6rCAIOyVhOuLiOupsCwg7IOB7ZKI7J2Y7KCV67O0LCDqsbDrnpjsobDqsbQsIOydtOyaqSDrsI9cclxuICAgICAgICAgIO2ZmOu2iCDrk7Hqs7wg6rSA66Co7ZWcIOydmOustOyZgCDssYXsnoTsnYAg6rCBIO2ajOybkOyXkOqyjCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPsKpIE5BVkVSIENvcnAuPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb290ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRvcDogdHJ1ZSxcclxufTtcclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgdG9wOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gcHJvcHMg7IiY7KCVXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBSZXZpZXdTdW1tYXJ5IGZyb20gJy4uL1Jldmlld1N1bW1hcnknO1xyXG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tICcuLi9SZXZpZXdMaXN0JztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFJldmlld0NvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIC8vIOyghOyytOyggeycvOuhnCDrp4zrk6Tqs6Ag64uk7IucIOqygO2GoFxyXG4gIGNvbnN0IHsgaXNCcmllZiwgZGlzcGxheUluZm9JZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGUocHJvcHMucmV2aWV3cyk7XHJcbiAgY29uc3QgW2F2ZXJhZ2VTY29yZSwgc2V0QXZlcmFnZVNjb3JlXSA9IHVzZVN0YXRlKHByb3BzLmF2ZXJhZ2VTY29yZSk7XHJcbiAgY29uc3QgW2lzTW9kaWZpYWJsZSwgc2V0SXNNb2RpZmlhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhEYXRhLCBzZXRFeERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyByZXZpZXdz6rCAIOuLrOudvOyhjOydhCDrlYwgYXZlcmFnZVNjb3Jl67CU6r6464qUIGVmZmVjdFxyXG4gICAgY29uc3QgbW9kaWZpZWRBdmVyYWdlU2NvcmUgPVxyXG4gICAgICByZXZpZXdzLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+IHtcclxuICAgICAgICBhY2N1bSArIE51bWJlcihjdXJyZW50LnNjb3JlKTtcclxuICAgICAgfSkgLyByZXZpZXdzLmxlbmd0aDtcclxuICAgIHNldEF2ZXJhZ2VTY29yZShtb2RpZmllZEF2ZXJhZ2VTY29yZSk7XHJcbiAgfSwgW3Jldmlld3NdKTtcclxuXHJcbiAgY29uc3QgZGlzcGxheVN0YXIgPSAoc2NvcmUsIG1heFNjb3JlID0gNSkgPT4ge1xyXG4gICAgLy8gYXZlcmFnZVNjb3Jl7JeQIOunnuqyjCDrs4TsoJDsnYQg66as7YS07ZWY64qUIO2VqOyImFxyXG4gICAgY29uc3QgZmlsbENvdW50ID0gTWF0aC5mbG9vcihzY29yZSk7XHJcbiAgICBjb25zdCBub3RGaWxsQ291bnQgPSBtYXhTY29yZSAtIE1hdGguY2VpbChzY29yZSk7XHJcbiAgICBjb25zdCByYXRpb0NvdW50ID0gTWF0aC5yb3VuZChzY29yZSAqIDEwKSAvIDEwIC0gZmlsbENvdW50O1xyXG4gICAgY29uc3Qgc3RhcnMgPSBbXTtcclxuICAgIF8udGltZXMoZmlsbENvdW50LCAoKSA9PiB7XHJcbiAgICAgIHN0YXJzLnB1c2goPGkgY2xhc3NOYW1lPVwiZm4gZm4tc3RhcjIgZ2V0U3RhclwiIC8+KTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHJhdGlvQ291bnQgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gUmlnaHQsI2YwMCAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgIHJhdGlvQ291bnQgKiAxMDAsXHJcbiAgICAgICAgICApfSUsI0U2RTZFNiAke01hdGgucm91bmQoKDEgLSByYXRpb0NvdW50KSAqIDEwMCl9JSlgLFxyXG4gICAgICAgICAgY29udGVudDogJ0VBQTMnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENsaXA6ICd0ZXh0JyxcclxuICAgICAgICAgIFdlYmtpdEJhY2tncm91bmRDbGlwOiAndGV4dCcsXHJcbiAgICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgZGlzcGxheTogJ2luaXRpYWwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICAgIHN0YXJzLnB1c2goPGkgY2xhc3NOYW1lPVwiZm4gZm4tc3RhcjIgcmF0aW9TdGFyXCIgc3R5bGU9e3N0eWxlfSAvPik7XHJcbiAgICB9XHJcbiAgICBfLnRpbWVzKG5vdEZpbGxDb3VudCwgKCkgPT4ge1xyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIG5vdEdldFN0YXJcIiAvPik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJzdGFyQ291bnRcIj57c3RhcnN9PC9zcGFuPjtcclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0Q29tbWVudCA9IChjb21tZW50SWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirwg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgcmVzcG9uc2U6IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0sXHJcbiAgICAgICAgfSA9IGF4aW9zLmdldChgL2F1dGgvZWRpdC9jb21tZW50cy8ke2NvbW1lbnRJZH1gKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIHJldHVybiBhbGVydE1vZGFsKHN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbmRleCA9IHJldmlld3MuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdmFsdWUuY29tbWVudElkID09PSBjb21tZW50SWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgeyBzY29yZSwgY29tbWVudCwgY29tbWVudEltYWdlcyB9ID0gcmV2aWV3c1tpbmRleF07XHJcbiAgICAgICAgc2V0RXhEYXRhKHtcclxuICAgICAgICAgIGlkOiBjb21tZW50SWQsXHJcbiAgICAgICAgICBzY29yZSxcclxuICAgICAgICAgIGNvbW1lbnQsXHJcbiAgICAgICAgICBpbWFnZVNyYzogY29tbWVudEltYWdlcy5sZW5ndGggPyBjb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZSA6ICcnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldElzTW9kaWZpYWJsZSh0cnVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVDb21tZW50ID0gKGNvbW1lbnRJZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IKt7KCcIOuyhO2KvOydhCDriITrpbTqs6Ag7ZmV7J247J2EIOuIjOuggOydhCDsi5zsnZgg7ZaJ64+ZXHJcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IHN0YXR1cywgc3RhdHVzVGV4dCB9LFxyXG4gICAgICAgIH0gPSBheGlvcy5kZWxldGUoYC9hcGkvcmVzZXJ2YXRpb25zL2NvbW1lbnRzLyR7Y29tbWVudElkfWApO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgYWxlcnRNb2RhbChzdGF0dXNUZXh0KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgICBhbGVydE1vZGFsKCfrpqzrt7DqsIAg7IKt7KCc65CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgICAgICBjb25zdCBtb2RpZmllZFJldmlld3MgPSByZXZpZXdzLmZpbHRlcigodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuY29tbWVudElkICE9PSBjb21tZW50SWQ7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldFJldmlld3MobW9kaWZpZWRSZXZpZXdzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybURlbGV0ZSA9IChjb21tZW50SWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyCreygnCDrsoTtirzsnYQg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIGNvbmZpcm1Nb2RhbCgn66as67ew66W8IOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD8nLCBkZWxldGVDb21tZW50KGNvbW1lbnRJZCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1FZGl0ID0gKGlkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq87J2EIOuIhOultOqzoCDsiJjsoJUg67KE7Yq87J2EIOuLpOyLnCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIChzdWJtaXQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYykgPT4ge1xyXG4gICAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDsiJjsoJXtlZjsi5zqsqDsirXri4jquYw/JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUHJvY2Vzc2VkID0gc3VibWl0KCk7XHJcbiAgICAgICAgaWYgKGlzUHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHJldmlld3MuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jb21tZW50SWQgPT09IGlkO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBtb2RpZmllZFJldmlld3MgPSBbLi4ucmV2aWV3c107XHJcbiAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnQgPSBjb21tZW50O1xyXG4gICAgICAgICAgbW9kaWZpZWRSZXZpZXdzW2luZGV4XS5zY29yZSA9IHNjb3JlO1xyXG4gICAgICAgICAgaWYgKG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbW9kaWZpZWRSZXZpZXdzW2luZGV4XS5jb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZSA9IGltYWdlU3JjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0UmV2aWV3cyhtb2RpZmllZFJldmlld3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFeERhdGEoe30pO1xyXG4gICAgICAgIHNldElzTW9kaWZpYWJsZShmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvOydhCDriITrpbTqs6Ag7Leo7IaM66W8IOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICBjb25maXJtTW9kYWwoJ+umrOu3sCDsiJjsoJXsnYQg7Leo7IaM7ZWY7Iuc6rKg7Iq164uI6rmMPycsICgpID0+IHtcclxuICAgICAgc2V0SXNNb2RpZmlhYmxlKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJDb21tZW50Q29udGFpbmVyXCI+XHJcbiAgICAgIDxSZXZpZXdTdW1tYXJ5XHJcbiAgICAgICAgYXZlcmFnZVNjb3JlPXthdmVyYWdlU2NvcmUgfHwgJzAnfVxyXG4gICAgICAgIHJldmlld0NvdW50PXtyZXZpZXdzLmxlbmd0aH1cclxuICAgICAgICBkaXNwbGF5U3Rhcj17ZGlzcGxheVN0YXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZXZpZXdMaXN0XHJcbiAgICAgICAgcmV2aWV3cz17cmV2aWV3c31cclxuICAgICAgICBpc0JyaWVmPXtpc0JyaWVmfVxyXG4gICAgICAgIGlzTW9kaWZpYWJsZT17aXNNb2RpZmlhYmxlfVxyXG4gICAgICAgIGV4RGF0YT17ZXhEYXRhfVxyXG4gICAgICAgIGNvbmZpcm1EZWxldGU9e2NvbmZpcm1EZWxldGV9XHJcbiAgICAgICAgY29uZmlybUNhbmNlbD17Y29uZmlybUNhbmNlbH1cclxuICAgICAgICBjb25maXJtRWRpdD17Y29uZmlybUVkaXR9XHJcbiAgICAgICAgZWRpdENvbW1lbnQ9e2VkaXRDb21tZW50fVxyXG4gICAgICAvPlxyXG4gICAgICA8YXNpZGU+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1hbGFybTFcIiAvPlxyXG4gICAgICAgICAg64Sk7J2067KEIOyYiOyVveydhCDthrXtlbQg7Iuk7KCcIOuwqeusuO2VnCDsnbTsmqnsnpDqsIAg64Ko6ri0IO2PieqwgOyeheuLiOuLpC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvYXNpZGU+XHJcbiAgICAgIHtpc0JyaWVmID8gKFxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFOUVDRUYnLFxyXG4gICAgICAgICAgICAgIGNsaWNrOiBgL3Jldmlldy8ke2Rpc3BsYXlJbmZvSWR9YCxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIOyYiOunpOyekCDrpqzrt7Ag642U67O06riwXHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWZvcndhcmQxXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0NvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNCcmllZjogdHJ1ZSxcclxufTtcclxuXHJcblJldmlld0NvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGF2ZXJhZ2VTY29yZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHJldmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICByZXNlcnZhdGlvbkVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHJlc2VydmF0aW9uSW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvbW1lbnRJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgICBkZWxldGVGbGFnOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgICBzYXZlRmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICB9KS5pc1JlcXVpcmVkLFxyXG4gICAgICApLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIGlzQnJpZWY6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Q29udGFpbmVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJMb2dpbkZvcm1cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckJveFwiPlxyXG4gICAgICAgICAgPGgxPuu5hO2ajOybkCDsmIjslb3tmZXsnbg8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPuyYiOyVveyekCDsnbTrqZTsnbwg7J6F66ClPC9wPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cImF1dGgvbG9naW5cIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RW1haWwodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwbGFjZUhvbGRlcj1cInh4eHh4QG5hdmVyLmNvbVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIuuCtCDsmIjslb0g7ZmV7J24XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdEJveCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGl0ZW1JbmZvOiB7XHJcbiAgICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICAgIHByb2R1Y3RJbWFnZVVybCxcclxuICAgICAgcHJvZHVjdERlc2NyaXB0aW9uLFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHByb2R1Y3RDb250ZW50LFxyXG4gICAgfSxcclxuICAgIHRleHRMaW1pdCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzRm9sZCwgc2V0SXNGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc0ljb25TaG93aW5nLCBzZXRJc0ljb25TaG93aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBkZXRhaWxUZXh0ID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdGV4dE9iajtcclxuICBsZXQgdHJpbW1lZFRleHQgPSBwcm9kdWN0Q29udGVudC50cmltKCk7XHJcbiAgdHJpbW1lZFRleHQgPSB0cmltbWVkVGV4dC5yZXBsYWNlKCdcXG4nLCAnJyk7XHJcbiAgaWYgKHRyaW1tZWRUZXh0Lmxlbmd0aCA+IHRleHRMaW1pdCkge1xyXG4gICAgY29uc3QgdGV4dFNpbXBsZSA9IHRyaW1tZWRUZXh0LnNsaWNlKDAsIHRleHRMaW1pdCk7XHJcbiAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UodGV4dExpbWl0KTtcclxuICAgIHRleHRPYmogPSB7IHNpbXBsZTogdGV4dFNpbXBsZSwgZGV0YWlsOiB0ZXh0RGV0YWlsIH07XHJcbiAgfSBlbHNlIHtcclxuICAgIHRleHRPYmogPSB7IHNpbXBsZTogdHJpbW1lZFRleHQsIGRldGFpbDogJycgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNob3dBbmRIaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcGltbWVkaWF0ZTtcclxuICAgIGlmIChpc0ZvbGQpIHtcclxuICAgICAgc2V0SXNGb2xkKGZhbHNlKTtcclxuICAgICAgJChkZXRhaWxUZXh0LmN1cnJlbnQpLnNsaWRlRG93bigxMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNGb2xkKHRydWUpO1xyXG4gICAgICAkKGRldGFpbFRleHQuY3VycmVudCkuc2xpZGVVcCgxMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJQcm9kdWN0Qm94XCI+XHJcbiAgICAgIDxMaW5rIHRvPXtgL2RldGFpbC8ke2Rpc3BsYXlJbmZvSWR9YH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGhvdG9cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiLyR7cHJvZHVjdEltYWdlVXJsfVwiKWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XHJcbiAgICAgICAgICA8aDE+e3Byb2R1Y3REZXNjcmlwdGlvbn08L2gxPlxyXG4gICAgICAgICAgPGgyPntwbGFjZU5hbWV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYWluVGV4dFwiXHJcbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0ljb25TaG93aW5nKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNJY29uU2hvd2luZyhmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge3RleHRPYmouc2ltcGxlfVxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzRm9sZCA/ICdpbmxpbmUnIDogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3JlRGVzY1wiXHJcbiAgICAgICAgICAgICAgICByZWY9e2RldGFpbFRleHR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGV4dE9iai5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm4gJHtpc0ZvbGQgPyAnZm4tZG90czInIDogJ2ZuLXVwMid9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FuZEhpZGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzSWNvblNob3dpbmcgPyAnIzAwMCcgOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHA+e3RleHRPYmouc2ltcGxlfTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdEJveC5wcm9wVHlwZXMgPSB7XHJcbiAgdGV4dExpbWl0OiAxMDAsXHJcbn07XHJcblxyXG5Qcm9kdWN0Qm94LnByb3BUeXBlcyA9IHtcclxuICBpdGVtSW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RJbWFnZVVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxuICB0ZXh0TGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Qm94O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyLCB0cmFuc2Zvcm1Nb25leVVuaXQgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQgfSBmcm9tICcuLi9SZXNlcnZhdGlvbkNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICByZXNlcnZhdGlvbkluZm9JZCxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHJlc2VydmF0aW9uRGF0ZSxcclxuICAgICAgcmVzZXJ2YXRpb25OYW1lLFxyXG4gICAgICByZXNlcnZhdGlvblRlbCxcclxuICAgICAgcHJpY2VJbmZvLFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgIHByb2R1Y3RJZCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiB9ID0gdXNlQ29udGV4dChBY3Rpb25Db250ZXh0KTtcclxuICBjb25zdCByZXNlcnZhdGlvblN1bW1hcnkgPSBwcmljZUluZm9cclxuICAgIC5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgIGAke2FjY3VtfSAgICAke3ByaWNlVHlwZU1hcHBlcltjdXJyZW50LnByaWNlVHlwZU5hbWVdfSAke1xyXG4gICAgICAgIGN1cnJlbnQuY291bnRcclxuICAgICAgfSDrp6QsYDtcclxuICAgIH0sICcnKVxyXG4gICAgLnNsaWNlKDAsIC0xKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKGFjdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IG5vdGVzID0gYWN0aW9ucy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICByZXR1cm4geyBjbGljazogY29uZmlybUNhbmNlbFJlc2VydmF0aW9uKHByb2R1Y3RJZCksIGNoaWxkcmVuOiAn7Leo7IaMJyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3Jldmlld1dyaXRlJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjbGljazogYC9yZXZpZXd3cml0ZS8ke3Byb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgY2hpbGRyZW46ICfsmIjrp6TsnpAg66as67ewIOuCqOq4sOq4sCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPEJ1dHRvbkJ1bmNoIG5vdGVzPXtub3Rlc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJUaWNrZXRJbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wU2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj57YE5vLiR7U3RyaW5nKHJlc2VydmF0aW9uSW5mb0lkKS5wYWRTdGFydCg4LCAnMCcpfWB9PC9oMj5cclxuICAgICAgICA8aDE+e2Rlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snbzsoJU8L3A+XHJcbiAgICAgICAgICA8cD57cmVzZXJ2YXRpb25EYXRlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7rgrTsl608L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsnbTrpoQ8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsoITtmZTrsojtmLg8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvblRlbH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ekIOunpOyImDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGlja2V0XCI+e3Jlc2VydmF0aW9uU3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snqXshow8L3A+XHJcbiAgICAgICAgICA8cD57cGxhY2VOYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VjdGlvblwiPlxyXG4gICAgICAgIDxwPuqysOygnCDquIjslaE8L3A+XHJcbiAgICAgICAgPHA+e2Ake3RyYW5zZm9ybU1vbmV5VW5pdCh0b3RhbFByaWNlKX0g7JuQYH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y3JlYXRlQnV0dG9uKGFjdGlvbnMpfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHJlc2VydmF0aW9uSW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uVGVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRvdGFsUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcHJpY2VJbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBwcmljZVR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBSZXNlcnZlRm9ybSBmcm9tICcuLi9SZXNlcnZlRm9ybSc7XHJcbmltcG9ydCBSZXNlcnZlRGVzYyBmcm9tICcuLi9SZXNlcnZlRGVzYyc7XHJcbmltcG9ydCBNYWluSW1hZ2UgZnJvbSAnLi4vTWFpbkltYWdlJztcclxuXHJcbmNvbnN0IFJlc2VydmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBsZXQgcHJvZHVjdERhdGE7XHJcbiAgbGV0IHJlc2VydmF0aW9uRGF0ZTtcclxuICBsZXQgc3RhcnREYXRlO1xyXG4gIGxldCBlbmREYXRlO1xyXG4gIGxldCBpbWFnZVNyYztcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IHsgcmVzZXJ2ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpIH07XHJcbiAgICBkaWZmRGF5cy5zdGFydCA9IGRpZmZEYXlzLnJlc2VydmUgLSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1ICsgMSk7XHJcbiAgICBkaWZmRGF5cy5lbmQgPSBkaWZmRGF5cy5yZXNlcnZlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpO1xyXG4gICAgcmVzZXJ2YXRpb25EYXRlID0gbW9tZW50KClcclxuICAgICAgLnR6KCdBc2lhL1Nlb3VsJylcclxuICAgICAgLmFkZChkaWZmRGF5cy5yZXNlcnZlLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQgSEg6bW06c3MnKTtcclxuICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuc3RhcnQsICdkYXlzJylcclxuICAgICAgLmZvcm1hdCgnWVlZWS5NTS5ERC4oZGRkKScpO1xyXG4gICAgZW5kRGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuZW5kLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQuKGRkZCknKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZS50eXBlID09PSAnbWEnKSB7XHJcbiAgICAgICAgaW1hZ2VTcmMgPSB2YWx1ZS5zYXZlRmlsZU5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXNlcnZlQ29udGFpbmVyXCI+XHJcbiAgICAgIDxNYWluSW1hZ2Ugc3JjPXtpbWFnZVNyY30gYWx0PVwibWFpbiBpbWFnZVwiIC8+XHJcbiAgICAgIDxSZXNlcnZlRGVzY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb259XHJcbiAgICAgICAgcGxhY2U9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnBsYWNlTG90fVxyXG4gICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgIGVuZERhdGU9e2VuZERhdGV9XHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgLz5cclxuICAgICAgPFJlc2VydmVGb3JtXHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdElkfVxyXG4gICAgICAgIHJlc2VydmF0aW9uRGF0ZT17cmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IERldGFpbEltYWdlIGZyb20gJy4uL0RldGFpbEltYWdlJztcclxuaW1wb3J0IFByb2R1Y3REZXNjIGZyb20gJy4uL1Byb2R1Y3REZXNjJztcclxuaW1wb3J0IEV2ZW50SW5mbyBmcm9tICcuLi9FdmVudEluZm8nO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuLi9Qcm9kdWN0SW5mbyc7XHJcblxyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgbGV0IHByb2R1Y3REYXRhO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcHJvZHVjdERhdGEgPSAoYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKSkuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxEZXRhaWxJbWFnZVxyXG4gICAgICAgIGltYWdlcz17cHJvZHVjdERhdGEucHJvZHVjdEltYWdlc31cclxuICAgICAgICB0aXRsZT17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8UHJvZHVjdERlc2MgdGV4dD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdENvbnRlbnR9IC8+XHJcbiAgICAgIDxFdmVudEluZm8gcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc30gLz5cclxuICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZm9udENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZWM4MDAnLFxyXG4gICAgICAgICAgICBjbGljazogYC9yZXNlcnZlLyR7ZGlzcGxheUluZm9JZH1gLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogJzxpIGNsYXNzPVwiZm4gZm4tbmJvb2tpbmctY2FsZW5kZXIyXCI+PC9pPiDsmIjrp6TtlZjquLAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgICBhdmVyYWdlU2NvcmU9e3Byb2R1Y3REYXRhLmF2ZXJhZ2VTY29yZX1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3RJbmZvXHJcbiAgICAgICAgZGlzcGxheUluZm89e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvfVxyXG4gICAgICAgIGxvY2F0aW9uSW1nU3JjPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mb0ltYWdlLnNhdmVGaWxlTmFtZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc2VydmVySW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG5hbWUsXHJcbiAgICB0ZWxlcGhvbmUsXHJcbiAgICBlbWFpbCxcclxuICAgIHJlc2VydmF0aW9uRGF0ZSxcclxuICAgIHRvdGFsVGlja2V0LFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgICBpc1ZlcmlmaWVkTmFtZSxcclxuICAgIGlzVmVyaWZpZWRUZWwsXHJcbiAgICBpc1ZlcmlmaWVkRW1haWwsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBtYWtlQWxlcnQgPSAoaWQsIHRleHQpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFsZXJ0TWVzc2FnZVwiPnt0ZXh0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlJlc2VydmVySW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmVySGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPuyYiOunpOyekCDsoJXrs7Q8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAg7ZWE7IiY7J6F66ClXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIiBpZD1cImlucHV0UmVzZXJ2ZXJcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIOyYiOunpOyekFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25OYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2Zjeq4uOuPmVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9OQU1FJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX05BTUUnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkTmFtZVxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdOYW1lJywgJ+ydtOumhOyXkOuKlCDqs7XrsLHsnbQg7J6I7Ja07ISc64qUIOyViOuQqeuLiOuLpC4nKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFRlbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7Jew65297LKYXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uVGVsZXBob25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAxMC0wMDAwLTAwMDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfVEVMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9URUwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNWZXJpZmllZFRlbFxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdUZWwnLCAn7KCE7ZmU67KI7Zi4IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwiaW5wdXRFbWFpbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7J2066mU7J28XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25FbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ4eHh4eHhAbmF2ZXIuY29tXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX0VNQUlMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9FTUFJTCcgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJvdmVyYWxsUmVzZXJ2YXRpb25cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIHN0eWxlPXt7IGNvbG9yOiAndHJhbnNwYXJlbnQnIH19IC8+XHJcbiAgICAgICAgICAgIOyYiOunpOuCtOyaqVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2Ake3Jlc2VydmF0aW9uRGF0ZX0sIOy0nSAke3RvdGFsVGlja2V0feunpGB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkRW1haWxcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nRW1haWwnLCAn7J2066mU7J28IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlckluZm8ucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRvdGFsVGlja2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZE5hbWU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZFRlbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlckluZm87XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RDb250YWluZXIgZnJvbSAnLi4vUHJvZHVjdENvbnRhaW5lcic7XHJcblxyXG5jb25zdCBNYWluVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdENvdW50LCBwcm9kdWN0cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgbGVmdFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMCk7XHJcbiAgY29uc3QgcmlnaHRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDEpO1xyXG5cclxuICBjb25zdCBDb3VudFRleHQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0b3RhbENvdW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICDrsJTroZwg7JiI66ekIOqwgOuKpe2VnCDtlonsgqzqsIBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0cm9uZ1wiPntgJHtwcm9kdWN0Q291bnR96rCcYH08L3NwYW4+XHJcbiAgICAgICAgICDsnojsirXri4jri6RcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIHByb2R1Y3RDb250YWluZXIg7KKM7Jqw66GcIOuCmOuIhOuKlCDroZzsp4HsnbQg7J6I7Ja07JW865CoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5WaWV3XCI+XHJcbiAgICAgIHtDb3VudFRleHQoKX1cclxuICAgICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPVwibGVmdFwiPntsZWZ0UHJvZHVjdHN9PC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZHVjdENvbnRhaW5lciBjbGFzc05hbWU9XCJyaWdodFwiPntyaWdodFByb2R1Y3RzfTwvUHJvZHVjdENvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5NYWluVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdENvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluVmlldztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IERldGFpbENvbnRhaW5lciBmcm9tICcuLi9EZXRhaWxDb250YWluZXInO1xyXG5pbXBvcnQgUmVzZXJ2ZUNvbnRhaW5lciBmcm9tICcuLi9SZXNlcnZlQ29udGFpbmVyJztcclxuaW1wb3J0IFJlc2VydmF0aW9uQ29udGFpbmVyIGZyb20gJy4uL1Jlc2VydmF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IFByb21vdGlvbkltYWdlIGZyb20gJy4uL1Byb21vdGlvbkltYWdlJztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcbmltcG9ydCBSZXZpZXdQcm92aWRlciBmcm9tICcuLi9SZXZpZXdQcm92aWRlcic7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uL01haW5Db250YWluZXInO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxCcm93c2VyUm91dGVyPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9kZXRhaWwvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIDxOYXZCYXIgaXNUcmFuc3BhcmVudCAvPlxyXG4gICAgICAgICAgPERldGFpbENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCI+ey8qIHJlZGlyZWN0IOyLnOy8nOyVvCDtlaggKi99PC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9ib29raW5nbG9naW5cIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIHRvcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9teXJlc2VydmF0aW9uXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISxIOuQqCAqL31cclxuICAgICAgICAgIDxOYXZCYXIgaXNMb2dvdXRhYmxlIC8+XHJcbiAgICAgICAgICA8UmVzZXJ2YXRpb25Db250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc2VydmUvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8UmVzZXJ2ZUNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmV2aWV3LzpkaXNwbGF5SW5mb0lkXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISx65CoICovfVxyXG4gICAgICAgICAgPE5hdkJhciBpc01haW49e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgPFJldmlld1Byb3ZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXZpZXd3cml0ZS86cHJvZHVjdElkXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICB7LyogcmV2aWV3RWRpdOqwgCDrr7jsmYQgKi99XHJcbiAgICAgICAgICA8UmV2aWV3RWRpdCAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICA8UHJvbW90aW9uSW1hZ2UgLz5cclxuICAgICAgICAgIDxNYWluQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgIHsvKiA0MDQgbm90IGZvdW5k7J246rG4IOuCmO2DgOuCtOqyjCAqL31cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIDwvQnJvd3NlclJvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBSZXZpZXdQcm92aWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGxldCBwcm9kdWN0RGF0YTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgIGRpc3BsYXlJbmZvSWQ9e2Rpc3BsYXlJbmZvSWR9XHJcbiAgICAgIGF2ZXJhZ2VTY29yZT17cHJvZHVjdERhdGEuYXZlcmFnZVNjb3JlfVxyXG4gICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgaXNCcmllZj17ZmFsc2V9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEltYWdlVGl0bGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlZ3JlZSwgaW1hZ2VMZW4sIHRpdGxlLCBsZWZ0U2Nyb2xsLCByaWdodFNjcm9sbCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkltYWdlVGl0bGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFNlY3Rpb25cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50aW5nXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyaWdodFwiPntkZWdyZWUgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAge2AgLyAke2ltYWdlTGVufWB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZUxlbiA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYmFja3dhcmQyXCIgb25DbGljaz17bGVmdFNjcm9sbH0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0U2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7aW1hZ2VMZW4gPiAxID8gKFxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWZvcndhcmQyXCIgb25DbGljaz17cmlnaHRTY3JvbGx9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VjdGlvblwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZVRpdGxlLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbWFnZUxlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbGVmdFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmlnaHRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUaXRsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVGlja2V0SGVhZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YFRpY2tldEhlYWQgJHtpc0dyZWVuID8gJ2dyZWVuJyA6ICdncmV5J31gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRMZWZ0XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRNaWRkbGVcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fY2hlY2syXCIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldFJpZ2h0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRIZWFkLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBpc0dyZWVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SGVhZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUT1MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlzQ2hlY2tlZCwgZGlzcGF0Y2ggfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0NvbGxlY3Rpb25Gb2xkLCBzZXRJc0NvbGxlY3Rpb25Gb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc09mZmVyRm9sZCwgc2V0SXNPZmZlckZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGZvbGRUZXh0ID0gJ+ygkeq4sCA8aSBjbGFzcz1cImZuIGZuLXVwMlwiPjwvaT4nO1xyXG4gIGNvbnN0IHNob3dUZXh0ID0gJ+uztOq4sCA8aSBjbGFzcz1cImZuIGZuLWRvd24yXCI+PC9pPic7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbGxlY3Rpb25DbGljayA9ICgpID0+IHtcclxuICAgIGlmIChpc0NvbGxlY3Rpb25Gb2xkKSB7XHJcbiAgICAgICQoJy5jb2xsZWN0aW9uVXNlVGVybScpLnNsaWRlRG93bigpO1xyXG4gICAgICBzZXRJc0NvbGxlY3Rpb25Gb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5jb2xsZWN0aW9uVXNlVGVybScpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNDb2xsZWN0aW9uRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPZmZlckNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzT2ZmZXJGb2xkKSB7XHJcbiAgICAgICQoJy5vZmZlclRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNPZmZlckZvbGQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm9mZmVyVGVybScpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNPZmZlckZvbGQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcml0bGNlIGNsYXNzTmFtZT1cIlRPU1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbEFncmVlbWVudFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIG5hbWU9XCJUT1NDaGVja1wiXHJcbiAgICAgICAgICBpZD1cIlRPU0NoZWNrXCJcclxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX1RPUycsIGNoZWNrZWQgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJUT1NDaGVja1wiPuydtOyaqeyekCDslb3qtIAg7KCE7LK064+Z7J2YPC9sYWJlbD5cclxuICAgICAgICA8cD7tlYTsiJgg64+Z7J2YPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19hcnJfaXBjMlwiIC8+XHJcbiAgICAgICAgICDqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2YXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbGxlY3Rpb25Vc2VBZ3JlZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVDb2xsZWN0aW9uQ2xpY2t9PlxyXG4gICAgICAgICAge2lzQ29sbGVjdGlvbkZvbGQgPyBzaG93VGV4dCA6IGZvbGRUZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sbGVjdGlvblVzZVRlcm1cIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzQ29sbGVjdGlvbkZvbGQgPyAnbm9uZScgOiAnYmxvY2snIH19XHJcbiAgICAgID5cclxuICAgICAgICAmbHQ76rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmCZndDtcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAxLiDsiJjsp5Htla3rqqkgOiBb7ZWE7IiYXSDsnbTrpoQsIOyXsOudveyymCwgW+yEoO2DnV0g7J2066mU7J287KO87IaMXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMi4g7IiY7KeRIOuwjyDsnbTsmqnrqqnsoIEgOiDsgqzsl4XsnpDtmozsm5Dqs7wg7JiI7JW97J207Jqp7J6Q7J2YIOybkO2ZnO2VnCDqsbDrnpgg7KeE7ZaJLFxyXG4gICAgICAgIOqzoOqwneyDgeuLtCwg67aI66eM7LKY66asIOuTsSDrr7zsm5Ag7LKY66asLCDrtoTsn4HsobDsoJUg7ZW06rKw7J2EIOychO2VnCDquLDroZ3rs7TsobQsIOuEpOydtOuyhFxyXG4gICAgICAgIOyYiOyVvSDsnbTsmqkg7ZuEIOumrOu3sOyekeyEseyXkCDrlLDrpbgg64Sk7J2067KE7Y6Y7J20IO2PrOyduO2KuCDsp4DquIkg67CPIOq0gOugqCDslYjrgrRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAzLiDrs7TqtIDquLDqsIRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAtIO2ajOybkO2DiO2HtCDrk7Eg6rCc7J247KCV67O0IOydtOyaqeuqqeyggSDri6zshLEg7Iuc6rmM7KeAIOuztOq0gFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIC0g64uoLCDsg4HrspUg67CPIOKAmOyghOyekOyDgeqxsOuemCDrk7Hsl5DshJzsnZgg7IaM67mE7J6QIOuztO2YuOyXkCDqtIDtlZwg67KV66Wg4oCZIOuTsSDqtIDroKhcclxuICAgICAgICDrspXroLnsl5Ag7J2Y7ZWY7JesIOydvOyglSDquLDqsIQg67O06rSA7J20IO2VhOyalO2VnCDqsr3smrDsl5DripQg7ZW064u5IOq4sOqwhCDrj5nslYgg67O06rSA7ZWoXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNC4g64+Z7J2YIOqxsOu2gOq2jCDrk7Hsl5Ag64yA7ZWcIOqzoOyngDog7KCV67O07KO87LK064qUIOqwnOyduOygleuztOydmCDsiJjsp5Eg67CPIOydtOyaqSDrj5nsnZjrpbxcclxuICAgICAgICDqsbDrtoDtlaAg6raM66as6rCAIOyeiOycvOuCmCwg7J20IOqyveyasCDsg4Htkogg67CPIOyEnOu5hOyKpCDsmIjslb3snbQg7KCc7ZWc65CgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19hcnJfaXBjMlwiIC8+XHJcbiAgICAgICAgICDqsJzsnbjsoJXrs7Qg7KCcM+yekCDsoJzqs7Ug64+Z7J2YXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm9mZmVyQWdyZWVtZW50XCIgb25DbGljaz17aGFuZGxlT2ZmZXJDbGlja30+XHJcbiAgICAgICAgICB7aXNPZmZlckZvbGQgPyBzaG93VGV4dCA6IGZvbGRUZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib2ZmZXJUZXJtXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc09mZmVyRm9sZCA/ICdub25lJyA6ICdibG9jaycgfX1cclxuICAgICAgPlxyXG4gICAgICAgICZsdDvqsJzsnbjsoJXrs7Qg7KCcM+yekCDsoJzqs7Ug64+Z7J2YJmd0O1xyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDEuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6QIDog66+465SU7Ja07JWk7JWE7Yq4XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMi4g7KCc6rO17ZWY64qUIOqwnOyduOygleuztCDtla3rqqkgOiBb7ZWE7IiYXSDrhKTsnbTrsoQg7JWE7J2065SULCDsnbTrpoQsIOyXsOudveyymCBb7ISg7YOdXVxyXG4gICAgICAgIOydtOuplOydvCDso7zshoxcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAzLiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekOydmCDsnbTsmqnrqqnsoIEgOiDsgqzsl4XsnpDtmozsm5Dqs7wg7JiI7JW97J207Jqp7J6Q7J2YIOybkO2ZnO2VnFxyXG4gICAgICAgIOqxsOuemCDsp4TtloksIOqzoOqwneyDgeuLtCwg67aI66eM7LKY66asIOuTsSDrr7zsm5Ag7LKY66asLCDshJzruYTsiqQg7J207Jqp7JeQIOuUsOuluCDshKTrrLjsobDsgqxcclxuICAgICAgICDrsI8g7Zic7YOdIOygnOqztSwg67aE7J+B7KGw7KCVIO2VtOqysOydhCDsnITtlZwg6riw66Gd67O07KG0XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNC4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpDsnZgg6rCc7J247KCV67O0IOuztOycoCDrsI8g7J207Jqp6riw6rCEIDog6rCc7J247KCV67O0XHJcbiAgICAgICAg7J207Jqp66qp7KCBIOuLrOyEsSDsi5wg6rmM7KeAIOuztOq0gO2VqeuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA1LiDrj5nsnZgg6rGw67aA6raMIOuTseyXkCDrjIDtlZwg6rOg7KeAIDog7KCV67O07KO87LK064qUIOqwnOyduOygleuztCDsoJzqs7Ug64+Z7J2Y66W8IOqxsOu2gO2VoFxyXG4gICAgICAgIOq2jOumrOqwgCDsnojsnLzrgpgsIOydtCDqsr3smrAg7IOB7ZKIIOuwjyDshJzruYTsiqQg7JiI7JW97J20IOygnO2VnOuQoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2FyaXRsY2U+XHJcbiAgKTtcclxufTtcclxuXHJcblRPUy5wcm9wVHlwZXMgPSB7XHJcbiAgaXNDaGVja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVE9TO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFRpY2tldEluZm8gZnJvbSAnLi4vVGlja2V0SW5mbyc7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIGFjdGlvbnMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8b2wgY2xhc3NOYW1lPVwiVGlja2V0SW5mb0xpc3RcIj5cclxuICAgICAge2luZm9zLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxUaWNrZXRJbmZvIGtleT17aW5kZXh9IGluZm89e3ZhbHVlfSBhY3Rpb25zPXthY3Rpb25zfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbmZvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mb0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciwgdHJhbnNmb3JtTW9uZXlVbml0IH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZURlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBwbGFjZSwgc3RhcnREYXRlLCBlbmREYXRlLCBwcm9kdWN0UHJpY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJpY2VUZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJpY2VMaXN0ID0gcHJvZHVjdFByaWNlcy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9ICR7dHJhbnNmb3JtTW9uZXlVbml0KFxyXG4gICAgICAgIHZhbHVlLnByaWNlLFxyXG4gICAgICApfeybkGA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcmljZUxpc3Quam9pbignIC8gJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc2VydmVEZXNjXCI+XHJcbiAgICAgIDxoMj57ZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAge3BsYWNlfVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtgJHtzdGFydERhdGV9IH4gJHtlbmREYXRlfWB9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgyPuyalOq4iDwvaDI+XHJcbiAgICAgIDxwPntwcmljZVRleHQoKX08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmVEZXNjLnByb3BUeXBlcyA9IHtcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHBsYWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZURlc2M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwic3ByX2JpIHR4dF9sb2dvXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJjb25zdCB0cmFuc2Zvcm1Nb25leVVuaXQgPSAobnVtKSA9PiB7XHJcbiAgbGV0IHRyYW5zZm9ybWVkID0gJyc7XHJcbiAgbnVtID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgbnVtTGVuID0gbnVtLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1MZW47IGkrKykge1xyXG4gICAgaWYgKGkgPiAzICYmIGkgJSAzID09PSAxKSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkID0gYCwke3RyYW5zZm9ybWVkfWA7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm1lZCA9IG51bS5jaGFyQXQobnVtTGVuIC0gaSkgKyB0cmFuc2Zvcm1lZDtcclxuICB9XHJcbiAgcmV0dXJuIHRyYW5zZm9ybWVkO1xyXG59O1xyXG5cclxuY29uc3QgcHJpY2VUeXBlTWFwcGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgcHJpY2VUeXBlID0ge1xyXG4gICAgQTogJ+yEseyduCcsXHJcbiAgICBZOiAn7LKt7IaM64WEJyxcclxuICAgIEI6ICfsnKDslYQnLFxyXG4gICAgUzogJ+yFi+2KuCcsXHJcbiAgICBEOiAn7J6l7JWg7J24JyxcclxuICAgIEM6ICfsp4Dsl63so7zrr7wnLFxyXG4gICAgRTogJ+yWtOyWvOumrOuyhOuTnCcsXHJcbiAgICBWOiAnVklQJyxcclxuICAgIFI6ICdS7ISdJyxcclxuICB9O1xyXG4gIHJldHVybiBwcmljZVR5cGVbdmFsdWVdO1xyXG59O1xyXG5cclxuY29uc3QgdmFsaWRJbWFnZVR5cGUgPSAoaW1hZ2UpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL2pwZyddLmluZGV4T2YoaW1hZ2UpID4gLTE7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRyYW5zZm9ybU1vbmV5VW5pdCwgcHJpY2VUeXBlTWFwcGVyLCB2YWxpZEltYWdlVHlwZSB9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCJLL3RjXCIsXG5cdFwiLi9hZi5qc1wiOiBcIksvdGNcIixcblx0XCIuL2FyXCI6IFwiam5PNFwiLFxuXHRcIi4vYXItZHpcIjogXCJvMWJFXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIm8xYkVcIixcblx0XCIuL2FyLWt3XCI6IFwiUWo0SlwiLFxuXHRcIi4vYXIta3cuanNcIjogXCJRajRKXCIsXG5cdFwiLi9hci1seVwiOiBcIkhQM2hcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiSFAzaFwiLFxuXHRcIi4vYXItbWFcIjogXCJDb1JKXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIkNvUkpcIixcblx0XCIuL2FyLXNhXCI6IFwiZ2pDVFwiLFxuXHRcIi4vYXItc2EuanNcIjogXCJnakNUXCIsXG5cdFwiLi9hci10blwiOiBcImJZTTZcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiYllNNlwiLFxuXHRcIi4vYXIuanNcIjogXCJqbk80XCIsXG5cdFwiLi9helwiOiBcIlNGeFdcIixcblx0XCIuL2F6LmpzXCI6IFwiU0Z4V1wiLFxuXHRcIi4vYmVcIjogXCJIOEVEXCIsXG5cdFwiLi9iZS5qc1wiOiBcIkg4RURcIixcblx0XCIuL2JnXCI6IFwiaEtyc1wiLFxuXHRcIi4vYmcuanNcIjogXCJoS3JzXCIsXG5cdFwiLi9ibVwiOiBcInAvckxcIixcblx0XCIuL2JtLmpzXCI6IFwicC9yTFwiLFxuXHRcIi4vYm5cIjogXCJrRU9hXCIsXG5cdFwiLi9ibi5qc1wiOiBcImtFT2FcIixcblx0XCIuL2JvXCI6IFwiMG1vK1wiLFxuXHRcIi4vYm8uanNcIjogXCIwbW8rXCIsXG5cdFwiLi9iclwiOiBcImFJZGZcIixcblx0XCIuL2JyLmpzXCI6IFwiYUlkZlwiLFxuXHRcIi4vYnNcIjogXCJKVlNKXCIsXG5cdFwiLi9icy5qc1wiOiBcIkpWU0pcIixcblx0XCIuL2NhXCI6IFwiMXhaNFwiLFxuXHRcIi4vY2EuanNcIjogXCIxeFo0XCIsXG5cdFwiLi9jc1wiOiBcIlBBMnJcIixcblx0XCIuL2NzLmpzXCI6IFwiUEEyclwiLFxuXHRcIi4vY3ZcIjogXCJBK3hhXCIsXG5cdFwiLi9jdi5qc1wiOiBcIkEreGFcIixcblx0XCIuL2N5XCI6IFwibDVlcFwiLFxuXHRcIi4vY3kuanNcIjogXCJsNWVwXCIsXG5cdFwiLi9kYVwiOiBcIkR4UXZcIixcblx0XCIuL2RhLmpzXCI6IFwiRHhRdlwiLFxuXHRcIi4vZGVcIjogXCJ0R2xYXCIsXG5cdFwiLi9kZS1hdFwiOiBcInMrdWtcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwicyt1a1wiLFxuXHRcIi4vZGUtY2hcIjogXCJ1M0dJXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcInUzR0lcIixcblx0XCIuL2RlLmpzXCI6IFwidEdsWFwiLFxuXHRcIi4vZHZcIjogXCJXWXJqXCIsXG5cdFwiLi9kdi5qc1wiOiBcIldZcmpcIixcblx0XCIuL2VsXCI6IFwialVlWVwiLFxuXHRcIi4vZWwuanNcIjogXCJqVWVZXCIsXG5cdFwiLi9lbi1TR1wiOiBcInphdkVcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiemF2RVwiLFxuXHRcIi4vZW4tYXVcIjogXCJEbXZpXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIkRtdmlcIixcblx0XCIuL2VuLWNhXCI6IFwiT0lZaVwiLFxuXHRcIi4vZW4tY2EuanNcIjogXCJPSVlpXCIsXG5cdFwiLi9lbi1nYlwiOiBcIk9hYTdcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiT2FhN1wiLFxuXHRcIi4vZW4taWVcIjogXCI0ZE93XCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIjRkT3dcIixcblx0XCIuL2VuLWlsXCI6IFwiY3pNb1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCJjek1vXCIsXG5cdFwiLi9lbi1uelwiOiBcImIxRHlcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiYjFEeVwiLFxuXHRcIi4vZW9cIjogXCJaZHVvXCIsXG5cdFwiLi9lby5qc1wiOiBcIlpkdW9cIixcblx0XCIuL2VzXCI6IFwiaVl1TFwiLFxuXHRcIi4vZXMtZG9cIjogXCJDanpUXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIkNqelRcIixcblx0XCIuL2VzLXVzXCI6IFwiVmNscVwiLFxuXHRcIi4vZXMtdXMuanNcIjogXCJWY2xxXCIsXG5cdFwiLi9lcy5qc1wiOiBcImlZdUxcIixcblx0XCIuL2V0XCI6IFwiN0JqQ1wiLFxuXHRcIi4vZXQuanNcIjogXCI3QmpDXCIsXG5cdFwiLi9ldVwiOiBcIkQvSk1cIixcblx0XCIuL2V1LmpzXCI6IFwiRC9KTVwiLFxuXHRcIi4vZmFcIjogXCJqZlNDXCIsXG5cdFwiLi9mYS5qc1wiOiBcImpmU0NcIixcblx0XCIuL2ZpXCI6IFwiZ2VrQlwiLFxuXHRcIi4vZmkuanNcIjogXCJnZWtCXCIsXG5cdFwiLi9mb1wiOiBcIkJ5RjRcIixcblx0XCIuL2ZvLmpzXCI6IFwiQnlGNFwiLFxuXHRcIi4vZnJcIjogXCJueVljXCIsXG5cdFwiLi9mci1jYVwiOiBcIjJmam5cIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiMmZqblwiLFxuXHRcIi4vZnItY2hcIjogXCJEa2t5XCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIkRra3lcIixcblx0XCIuL2ZyLmpzXCI6IFwibnlZY1wiLFxuXHRcIi4vZnlcIjogXCJjUml4XCIsXG5cdFwiLi9meS5qc1wiOiBcImNSaXhcIixcblx0XCIuL2dhXCI6IFwiVVNDeFwiLFxuXHRcIi4vZ2EuanNcIjogXCJVU0N4XCIsXG5cdFwiLi9nZFwiOiBcIjlyUmlcIixcblx0XCIuL2dkLmpzXCI6IFwiOXJSaVwiLFxuXHRcIi4vZ2xcIjogXCJpRURkXCIsXG5cdFwiLi9nbC5qc1wiOiBcImlFRGRcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiREtyK1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCJES3IrXCIsXG5cdFwiLi9ndVwiOiBcIjRNVjNcIixcblx0XCIuL2d1LmpzXCI6IFwiNE1WM1wiLFxuXHRcIi4vaGVcIjogXCJ4NnBIXCIsXG5cdFwiLi9oZS5qc1wiOiBcIng2cEhcIixcblx0XCIuL2hpXCI6IFwiM0UxclwiLFxuXHRcIi4vaGkuanNcIjogXCIzRTFyXCIsXG5cdFwiLi9oclwiOiBcIlM2bG5cIixcblx0XCIuL2hyLmpzXCI6IFwiUzZsblwiLFxuXHRcIi4vaHVcIjogXCJXeFJsXCIsXG5cdFwiLi9odS5qc1wiOiBcIld4UmxcIixcblx0XCIuL2h5LWFtXCI6IFwiMXJZeVwiLFxuXHRcIi4vaHktYW0uanNcIjogXCIxcll5XCIsXG5cdFwiLi9pZFwiOiBcIlVEaFJcIixcblx0XCIuL2lkLmpzXCI6IFwiVURoUlwiLFxuXHRcIi4vaXNcIjogXCJCVmczXCIsXG5cdFwiLi9pcy5qc1wiOiBcIkJWZzNcIixcblx0XCIuL2l0XCI6IFwiYnBpaFwiLFxuXHRcIi4vaXQtY2hcIjogXCJieEtYXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcImJ4S1hcIixcblx0XCIuL2l0LmpzXCI6IFwiYnBpaFwiLFxuXHRcIi4vamFcIjogXCJCNTVOXCIsXG5cdFwiLi9qYS5qc1wiOiBcIkI1NU5cIixcblx0XCIuL2p2XCI6IFwidFVDdlwiLFxuXHRcIi4vanYuanNcIjogXCJ0VUN2XCIsXG5cdFwiLi9rYVwiOiBcIklCdFpcIixcblx0XCIuL2thLmpzXCI6IFwiSUJ0WlwiLFxuXHRcIi4va2tcIjogXCJiWG03XCIsXG5cdFwiLi9ray5qc1wiOiBcImJYbTdcIixcblx0XCIuL2ttXCI6IFwiNkIwWVwiLFxuXHRcIi4va20uanNcIjogXCI2QjBZXCIsXG5cdFwiLi9rblwiOiBcIlBwSXdcIixcblx0XCIuL2tuLmpzXCI6IFwiUHBJd1wiLFxuXHRcIi4va29cIjogXCJJdmkrXCIsXG5cdFwiLi9rby5qc1wiOiBcIkl2aStcIixcblx0XCIuL2t1XCI6IFwiSkNGL1wiLFxuXHRcIi4va3UuanNcIjogXCJKQ0YvXCIsXG5cdFwiLi9reVwiOiBcImxnbnRcIixcblx0XCIuL2t5LmpzXCI6IFwibGdudFwiLFxuXHRcIi4vbGJcIjogXCJSQXdRXCIsXG5cdFwiLi9sYi5qc1wiOiBcIlJBd1FcIixcblx0XCIuL2xvXCI6IFwic3AzelwiLFxuXHRcIi4vbG8uanNcIjogXCJzcDN6XCIsXG5cdFwiLi9sdFwiOiBcIkp2bFdcIixcblx0XCIuL2x0LmpzXCI6IFwiSnZsV1wiLFxuXHRcIi4vbHZcIjogXCJ1WHdJXCIsXG5cdFwiLi9sdi5qc1wiOiBcInVYd0lcIixcblx0XCIuL21lXCI6IFwiS1R6MFwiLFxuXHRcIi4vbWUuanNcIjogXCJLVHowXCIsXG5cdFwiLi9taVwiOiBcImFJc25cIixcblx0XCIuL21pLmpzXCI6IFwiYUlzblwiLFxuXHRcIi4vbWtcIjogXCJhUWtVXCIsXG5cdFwiLi9tay5qc1wiOiBcImFRa1VcIixcblx0XCIuL21sXCI6IFwiQXZ2WVwiLFxuXHRcIi4vbWwuanNcIjogXCJBdnZZXCIsXG5cdFwiLi9tblwiOiBcImxZdFFcIixcblx0XCIuL21uLmpzXCI6IFwibFl0UVwiLFxuXHRcIi4vbXJcIjogXCJPYjBaXCIsXG5cdFwiLi9tci5qc1wiOiBcIk9iMFpcIixcblx0XCIuL21zXCI6IFwiNitRQlwiLFxuXHRcIi4vbXMtbXlcIjogXCJaQU1QXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIlpBTVBcIixcblx0XCIuL21zLmpzXCI6IFwiNitRQlwiLFxuXHRcIi4vbXRcIjogXCJHMFV5XCIsXG5cdFwiLi9tdC5qc1wiOiBcIkcwVXlcIixcblx0XCIuL215XCI6IFwiaG9uRlwiLFxuXHRcIi4vbXkuanNcIjogXCJob25GXCIsXG5cdFwiLi9uYlwiOiBcImJPTXRcIixcblx0XCIuL25iLmpzXCI6IFwiYk9NdFwiLFxuXHRcIi4vbmVcIjogXCJPamtUXCIsXG5cdFwiLi9uZS5qc1wiOiBcIk9qa1RcIixcblx0XCIuL25sXCI6IFwiK3MwZ1wiLFxuXHRcIi4vbmwtYmVcIjogXCIyeWt2XCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIjJ5a3ZcIixcblx0XCIuL25sLmpzXCI6IFwiK3MwZ1wiLFxuXHRcIi4vbm5cIjogXCJ1RXllXCIsXG5cdFwiLi9ubi5qc1wiOiBcInVFeWVcIixcblx0XCIuL3BhLWluXCI6IFwiOC8rUlwiLFxuXHRcIi4vcGEtaW4uanNcIjogXCI4LytSXCIsXG5cdFwiLi9wbFwiOiBcImpWZENcIixcblx0XCIuL3BsLmpzXCI6IFwialZkQ1wiLFxuXHRcIi4vcHRcIjogXCI4bUJEXCIsXG5cdFwiLi9wdC1iclwiOiBcIjB0UmtcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiMHRSa1wiLFxuXHRcIi4vcHQuanNcIjogXCI4bUJEXCIsXG5cdFwiLi9yb1wiOiBcImx5eG9cIixcblx0XCIuL3JvLmpzXCI6IFwibHl4b1wiLFxuXHRcIi4vcnVcIjogXCJsWHpvXCIsXG5cdFwiLi9ydS5qc1wiOiBcImxYem9cIixcblx0XCIuL3NkXCI6IFwiWjRRTVwiLFxuXHRcIi4vc2QuanNcIjogXCJaNFFNXCIsXG5cdFwiLi9zZVwiOiBcIi8vOXdcIixcblx0XCIuL3NlLmpzXCI6IFwiLy85d1wiLFxuXHRcIi4vc2lcIjogXCI3YVY5XCIsXG5cdFwiLi9zaS5qc1wiOiBcIjdhVjlcIixcblx0XCIuL3NrXCI6IFwiZSthZVwiLFxuXHRcIi4vc2suanNcIjogXCJlK2FlXCIsXG5cdFwiLi9zbFwiOiBcImdWVktcIixcblx0XCIuL3NsLmpzXCI6IFwiZ1ZWS1wiLFxuXHRcIi4vc3FcIjogXCJ5UE1zXCIsXG5cdFwiLi9zcS5qc1wiOiBcInlQTXNcIixcblx0XCIuL3NyXCI6IFwieng2U1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIkUrbFZcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCJFK2xWXCIsXG5cdFwiLi9zci5qc1wiOiBcInp4NlNcIixcblx0XCIuL3NzXCI6IFwiVXIxRFwiLFxuXHRcIi4vc3MuanNcIjogXCJVcjFEXCIsXG5cdFwiLi9zdlwiOiBcIlg3MDlcIixcblx0XCIuL3N2LmpzXCI6IFwiWDcwOVwiLFxuXHRcIi4vc3dcIjogXCJkTndBXCIsXG5cdFwiLi9zdy5qc1wiOiBcImROd0FcIixcblx0XCIuL3RhXCI6IFwiUGVVV1wiLFxuXHRcIi4vdGEuanNcIjogXCJQZVVXXCIsXG5cdFwiLi90ZVwiOiBcIlhMdk5cIixcblx0XCIuL3RlLmpzXCI6IFwiWEx2TlwiLFxuXHRcIi4vdGV0XCI6IFwiVjJ4OVwiLFxuXHRcIi4vdGV0LmpzXCI6IFwiVjJ4OVwiLFxuXHRcIi4vdGdcIjogXCJPeHY2XCIsXG5cdFwiLi90Zy5qc1wiOiBcIk94djZcIixcblx0XCIuL3RoXCI6IFwiRU9nV1wiLFxuXHRcIi4vdGguanNcIjogXCJFT2dXXCIsXG5cdFwiLi90bC1waFwiOiBcIkR6aTBcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiRHppMFwiLFxuXHRcIi4vdGxoXCI6IFwiejNWZFwiLFxuXHRcIi4vdGxoLmpzXCI6IFwiejNWZFwiLFxuXHRcIi4vdHJcIjogXCJEb0hyXCIsXG5cdFwiLi90ci5qc1wiOiBcIkRvSHJcIixcblx0XCIuL3R6bFwiOiBcInoxRkNcIixcblx0XCIuL3R6bC5qc1wiOiBcInoxRkNcIixcblx0XCIuL3R6bVwiOiBcIndRazlcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwidFQzSlwiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCJ0VDNKXCIsXG5cdFwiLi90em0uanNcIjogXCJ3UWs5XCIsXG5cdFwiLi91Zy1jblwiOiBcIllSZXhcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiWVJleFwiLFxuXHRcIi4vdWtcIjogXCJyYUxyXCIsXG5cdFwiLi91ay5qc1wiOiBcInJhTHJcIixcblx0XCIuL3VyXCI6IFwiVXBRV1wiLFxuXHRcIi4vdXIuanNcIjogXCJVcFFXXCIsXG5cdFwiLi91elwiOiBcIkxveG9cIixcblx0XCIuL3V6LWxhdG5cIjogXCJBUTY4XCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiQVE2OFwiLFxuXHRcIi4vdXouanNcIjogXCJMb3hvXCIsXG5cdFwiLi92aVwiOiBcIktTRjhcIixcblx0XCIuL3ZpLmpzXCI6IFwiS1NGOFwiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIvWDV2XCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi9YNXZcIixcblx0XCIuL3lvXCI6IFwiZnpQZ1wiLFxuXHRcIi4veW8uanNcIjogXCJmelBnXCIsXG5cdFwiLi96aC1jblwiOiBcIlhEcGdcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiWERwZ1wiLFxuXHRcIi4vemgtaGtcIjogXCJTYXRPXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIlNhdE9cIixcblx0XCIuL3poLXR3XCI6IFwia09wTlwiLFxuXHRcIi4vemgtdHcuanNcIjogXCJrT3BOXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIlJuaFpcIjsiLCIvLyBidXR0b24g67aA67aEIGJ1dHRvbmJ1bmNo66GcXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IElucHV0VGlja2V0IGZyb20gJy4uL0lucHV0VGlja2V0JztcclxuaW1wb3J0IFJlc2VydmVySW5mbyBmcm9tICcuLi9SZXNlcnZlckluZm8nO1xyXG5pbXBvcnQgVE9TIGZyb20gJy4uL1RPUyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpY2tldHM6IEFycmF5KGxlbmd0aCkuZmlsbCgwKSxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgdGVsZXBob25lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIGlzVmVyaWZpZWROYW1lOiBmYWxzZSxcclxuICAgIGlzVmVyaWZpZWRUZWw6IGZhbHNlLFxyXG4gICAgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSxcclxuICAgIGlzVE9TQ2hlY2tlZDogZmFsc2UsXHJcbiAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdERUNSRU1FTlQnOlxyXG4gICAgICBjb25zdCBtb2RpZmllZERlYyA9IHsgLi4uc3RhdGUgfTtcclxuICAgICAgbW9kaWZpZWREZWMudGlja2V0c1thY3Rpb24ud2hlcmVdID0gbW9kaWZpZWREZWMudGlja2V0c1thY3Rpb24ud2hlcmVdIC0gMTtcclxuICAgICAgcmV0dXJuIG1vZGlmaWVkRGVjO1xyXG4gICAgY2FzZSAnSU5DUkVNRU5UJzpcclxuICAgICAgY29uc3QgbW9kaWZpZWRJbmMgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgIG1vZGlmaWVkSW5jLnRpY2tldHNbYWN0aW9uLndoZXJlXSA9IG1vZGlmaWVkSW5jLnRpY2tldHNbYWN0aW9uLndoZXJlXSArIDE7XHJcbiAgICAgIHJldHVybiBtb2RpZmllZEluYztcclxuICAgIGNhc2UgJ0NIQU5HRV9OQU1FJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5hbWU6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX1RFTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZWxlcGhvbmU6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX0VNQUlMJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVtYWlsOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9UT1MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNUT1NDaGVja2VkOiBhY3Rpb24uY2hlY2tlZCB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX05BTUUnOlxyXG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAobmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKC9cXHMvLnRlc3QobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWROYW1lOiB0cnVlIH07XHJcbiAgICBjYXNlICdWRVJJRllfVEVMJzpcclxuICAgICAgY29uc3QgeyB0ZWxlcGhvbmUgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAodGVsZXBob25lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRlbFJlID0gLzBcXGR7Mn0tWzEtOV1cXGR7MiwzfS1cXGR7NH0vO1xyXG4gICAgICBpZiAodGVsUmUudGVzdCh0ZWxlcGhvbmUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogZmFsc2UgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9FTUFJTCc6XHJcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAoZW1haWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbWFpbFJlID0gL1thLXpBLVpdXFx3ezIsfUBbYS16QS1aXXszLH1cXC5bYS16QS1aXXsyLH0vO1xyXG4gICAgICBpZiAoZW1haWxSZS50ZXN0KGVtYWlsKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX1NVQk1JVCc6XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB0aWNrZXRzLFxyXG4gICAgICAgIGlzVmVyaWZpZWROYW1lLFxyXG4gICAgICAgIGlzVmVyaWZpZWRUZWwsXHJcbiAgICAgICAgaXNWZXJpZmllZEVtYWlsLFxyXG4gICAgICAgIGlzVE9TQ2hlY2tlZCxcclxuICAgICAgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGlja2V0cy5zb21lKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdmFsdWUgPiAwO1xyXG4gICAgICAgIH0pICYmXHJcbiAgICAgICAgaXNWZXJpZmllZE5hbWUgJiZcclxuICAgICAgICBpc1ZlcmlmaWVkVGVsICYmXHJcbiAgICAgICAgaXNWZXJpZmllZEVtYWlsICYmXHJcbiAgICAgICAgaXNUT1NDaGVja2VkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWJtaXQ6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VibWl0OiBmYWxzZSB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUmVzZXJ2ZUZvcm0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RQcmljZXMsIGRpc3BsYXlJbmZvSWQsIHByb2R1Y3RJZCwgcmVzZXJ2YXRpb25EYXRlIH0gPSBwcm9wcztcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICByZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlKHByb2R1Y3RQcmljZXMubGVuZ3RoKSxcclxuICApO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzZXJ2YXRpb25JbmZvID0ge1xyXG4gICAgICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgIHByaWNlczogW10sXHJcbiAgICAgICAgcmVzZXJ2YXRpb25FbWFpbDogc3RhdGUuZW1haWwsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25OYW1lOiBzdGF0ZS5uYW1lLFxyXG4gICAgICAgIHJlc2VydmF0aW9uVGVsZXBob25lOiBzdGF0ZS50ZWxlcGhvbmUsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25ZZWFyTW9udGhEYXk6IHJlc2VydmF0aW9uRGF0ZSxcclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSBwcm9kdWN0UHJpY2VzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcclxuICAgICAgICByZXNlcnZhdGlvbkluZm8ucHJpY2VzLnB1c2goe1xyXG4gICAgICAgICAgY291bnQ6IE51bWJlcihzdGF0ZS50aWNrZXRzW2luZGV4XSksXHJcbiAgICAgICAgICBwcm9kdWN0UHJpY2VJZDogcHJvZHVjdFByaWNlc1tpbmRleF0ucHJvZHVjdFByaWNlSUQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgJy9hcGkvcmVzZXJ2YXRpb25zJyxcclxuICAgICAgICByZXNlcnZhdGlvbkluZm8sXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfsmIjrp6TqsIAg7ISx6rO17KCB7Jy866GcIOyKueyduOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChgL2RldGFpbC8ke2Rpc3BsYXlJbmZvSWR9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbCgn7JiI7JW97ZWY7Iuc6rKg7Iq164uI6rmMPycsIGhhbmRsZVN1Ym1pdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydE1vZGFsKCfsmIjslb0g7JaR7Iud7J20IOy2qeyhseuQmOyngCDslYrslZjsirXri4jri6QnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzZXJ2ZUZvcm1cIj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9yZXNlcnZhdGlvbnNcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPElucHV0VGlja2V0XHJcbiAgICAgICAgICBwcm9kdWN0UHJpY2VzPXtwcm9kdWN0UHJpY2VzfVxyXG4gICAgICAgICAgdGlja2V0cz17c3RhdGUudGlja2V0c31cclxuICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZXNlcnZlckluZm9cclxuICAgICAgICAgIG5hbWU9e3N0YXRlLm5hbWV9XHJcbiAgICAgICAgICB0ZWxlcGhvbmU9e3N0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgIGVtYWlsPXtzdGF0ZS5lbWFpbH1cclxuICAgICAgICAgIHJlc2VydmF0aW9uRGF0ZT17cmVzZXJ2YXRpb25EYXRlLnNwbGl0KCcgJylbMF19XHJcbiAgICAgICAgICB0b3RhbFRpY2tldD17c3RhdGUudGlja2V0cy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1bSwgY3VycmVudCkgPT4gYWNjdW0gKyBjdXJyZW50LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAgIGlzVmVyaWZpZWROYW1lPXtzdGF0ZS5pc1ZlcmlmaWVkTmFtZX1cclxuICAgICAgICAgIGlzVmVyaWZpZWRUZWw9e3N0YXRlLmlzVmVyaWZpZWRUZWx9XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkRW1haWw9e3N0YXRlLmlzVmVyaWZpZWRFbWFpbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUT1MgaXNDaGVja2VkPXtzdGF0ZS5UT1N9IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuc3VibWl0ID8gJyMxRUM5MDAnIDogJyNEMUQxRDEnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2NvbmZpcm1TdWJtaXR9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX25hdmVyX3NcIiAvPlxyXG4gICAgICAgICAg7JiI7JW97ZWY6riwXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2ZUZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1cmVkLFxyXG4gIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZUZvcm07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBTdWJOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5hbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgcGF0aHMgPSBwYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gIGNvbnN0IGl0ZW1JZCA9IHBhdGhzW3BhdGhzLmxlbmd0aCAtIDFdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1Yk5hdkJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2t3YXJkXCI+XHJcbiAgICAgICAgPExpbmsgdG89e2AvZGV0YWlsLyR7aXRlbUlkfWB9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYmFja3dhcmQxXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlTmFtZVwiPlxyXG4gICAgICAgIDxoMT57bmFtZSB8fCAn7ZaJ7IKsIOydtOumhCd9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblN1Yk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViTmF2QmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgVGFiVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdmlld3MsIHNlbGVjdGVkIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJUYWJWaWV3XCI+XHJcbiAgICAgIHt2aWV3cy5maW5kKCh2YWx1ZSwgaW5kZXgpID0+IGluZGV4ID09PSBzZWxlY3RlZCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVGFiVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgdmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlZpZXc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBSZXZpZXcgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZXZpZXcsXHJcbiAgICBpbWFnZSxcclxuICAgIHNjb3JlLFxyXG4gICAgZW1haWwsXHJcbiAgICBkYXRlLFxyXG4gICAgZWRpdENvbW1lbnQsXHJcbiAgICBjb25maXJtRGVsZXRlLFxyXG4gIH0gPSBwcm9wcztcclxuICAvLyDsnbTrr7jsp4Ag67O07KCVXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlJldmlld1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHA+e3Jldmlld308L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgIHtpbWFnZSA/IDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwicmV2aWV3SW1hZ2VcIiAvPiA6ICcnfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NvcmVcIj57c2NvcmV9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZW1haWxcIj57YCR7ZW1haWwuc2xpY2UoMCwgNCl9KioqKmB9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzaXREYXRlXCI+e2Ake2RhdGUuc2xpY2UoMCwgMTApfSDrsKnrrLhgfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlZGl0XCIgb25DbGljaz17ZWRpdENvbW1lbnR9PlxyXG4gICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlbGV0ZVwiIG9uQ2xpY2s9e2NvbmZpcm1EZWxldGV9PlxyXG4gICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcmV2aWV3OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVkaXRDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRhYlVJID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBsYWJlbHMsIHNlbGVjdGVkLCBoYW5kbGVDbGljayB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIlRhYlVJXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bGFiZWxzLm1hcCgobGFiZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IHNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICd1bnNlbGVjdGVkJ31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcblRhYlVJLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBoYW5kbGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYlVJO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGFiVUkgZnJvbSAnLi4vVGFiVUknO1xyXG5pbXBvcnQgVGFiVmlldyBmcm9tICcuLi9UYWJWaWV3JztcclxuXHJcbmNvbnN0IFRhYkNvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgdmlld3MsIGFsYXJtIH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgaWYgKGFsYXJtKSB7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgYWxhcm0oaW5kZXgpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFNlbGVjdGVkKGluZGV4KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiQ29udHJvbGxlclwiPlxyXG4gICAgICA8VGFiVUkgbGFiZWxzPXtsYWJlbHN9IHNlbGVjdGVkPXtzZWxlY3RlZH0gaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxyXG4gICAgICA8VGFiVmlldyB2aWV3cz17dmlld3N9IHNlbGVjdGVkPXtzZWxlY3RlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGFybTogZmFsc2UsXHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgdmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgYWxhcm06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxyXG59O1xyXG5cclxuLy8g7JWM656M7J20IOyeiOuLpOuptCDsg4HsnIQg7Lu07Y+s64SM7Yq47JeQIOyWtOuUlOyXkCDriIzroIDripTsp4Ag67OA7ZmU66W8IOyVjOugpOykmCDrj5nsoIEg67ew67OA7ZmU66W8IOqwgOuKpey8gO2VqFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5jb25zdCBhcHBseVN0eWxlID0gKHN0eWxlKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBgJHtzdHlsZX1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnN0IFthbGxdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7YWxsfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgY29uc3QgW3ZlcnRpY2FsLCBob3Jpem9udGFsXSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3ZlcnRpY2FsfXB4ICR7aG9yaXpvbnRhbH1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDQpIHtcclxuICAgIGNvbnN0IFt0b3AsIHJpZ2h0LCBkb3duLCBsZWZ0XSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3RvcH1weCAke3JpZ2h0fXB4ICR7ZG93bn1weCAke2xlZnR9cHhgO1xyXG4gIH1cclxuICByZXR1cm4gJzAnO1xyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uQnVuY2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vdGVzLCBtYXJnaW4sIHBhZGRpbmcgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvbkJ1bmNoXCJcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luOiBhcHBseVN0eWxlKG1hcmdpbiksIHBhZGRpbmc6IGFwcGx5U3R5bGUocGFkZGluZykgfX1cclxuICAgID5cclxuICAgICAge25vdGVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgZm9udENvbG9yPXt2YWx1ZS5mb250Q29sb3J9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17dmFsdWUuYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICBjbGljaz17dmFsdWUuY2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZS5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbkJ1bmNoLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtYXJnaW46IDAsXHJcbiAgcGFkZGluZzogMCxcclxufTtcclxuXHJcbkJ1dHRvbkJ1bmNoLnByb3BUeXBlcyA9IHtcclxuICBub3RlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBmb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY2xpY2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcclxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmFycmF5XSksXHJcbiAgcGFkZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmFycmF5XSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25CdW5jaDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi9JbWFnZVNsaWRlcic7XHJcbmltcG9ydCBJbWFnZVRpdGxlIGZyb20gJy4uL0ltYWdlVGl0bGUnO1xyXG5cclxuY29uc3QgSW1hZ2VDb250cm9sbGVyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8g7J6s7ISk6rOE7ZWY6rGw64KYIO2MjOq4sO2VoCDqsoPsnoRcclxuICBjb25zdCB7XHJcbiAgICBkZWdyZWUsXHJcbiAgICB0cmFuc2l0aW9uVGltZSxcclxuICAgIGltYWdlcyxcclxuICAgIHJlc2l6ZUVuZCxcclxuICAgIHRpdGxlLFxyXG4gICAgbGVmdFNjcm9sbCxcclxuICAgIHJpZ2h0U2Nyb2xsLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBpbWFnZUxpc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlV2lkdGgsIHNldEltYWdlV2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGdldEltYWdlV2lkdGggPSAoKSA9PiB7XHJcbiAgICByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVdpZHRoKFxyXG4gICAgICAoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQgJiZcclxuICAgICAgICBpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCkgfHxcclxuICAgICAgICAwLFxyXG4gICAgKTsgLy8g7LKY7J2M7JeUIDDsnLzroZwg65CoXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0SW1hZ2VXaWR0aCk7XHJcbiAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldEltYWdlV2lkdGgpO1xyXG4gIH0sIFtpbWFnZXNdKTtcclxuXHJcbiAgcmV0dXJuIHRpdGxlID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEltYWdlU2xpZGVyXHJcbiAgICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25UaW1lfVxyXG4gICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgICAgaXNQcm9tb3Rpb249e2ZhbHNlfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2VUaXRsZVxyXG4gICAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICAgIGltYWdlTGVuPXtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBsZWZ0U2Nyb2xsPXtsZWZ0U2Nyb2xsfVxyXG4gICAgICAgIHJpZ2h0U2Nyb2xsPXtyaWdodFNjcm9sbH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvblRpbWV9XHJcbiAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICBpbWFnZVdpZHRoPXtpbWFnZVdpZHRofVxyXG4gICAgICBpc1Byb21vdGlvblxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2VDb250cm9sbGVyLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgcmVzaXplRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxlZnRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJpZ2h0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB2YWxpZEltYWdlVHlwZSB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUmV2aWV3RWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHJldmlldyDrp4zrk6Tqs6Ag7JmE7ISx7ZW07JW865CoIOuvuOyZhFxyXG4gIGNvbnN0IHtcclxuICAgIGNvbW1lbnRJZCxcclxuICAgIHRodW1ibmFpbFdpZHRoLFxyXG4gICAgZXhTY29yZSxcclxuICAgIGV4Q29tbWVudCxcclxuICAgIGV4SW1hZ2VTcmMsXHJcbiAgICBpc1Bvc3QsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoZXhTY29yZSk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoZXhDb21tZW50KTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKGV4SW1hZ2VTcmMpO1xyXG4gIGNvbnN0IFt0aHVtYm5haWxTdHlsZSwgc2V0VGh1bWJuYWlsU3R5bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlTWVhc3VyZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1hZ2VNZWFzdXJlbWVudC5zcmMgPSBpbWFnZVNyYztcclxuICAgICAgaW1hZ2VNZWFzdXJlbWVudC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmhlaWdodCAvIHRoaXMud2lkdGg7XHJcbiAgICAgICAgc2V0VGh1bWJuYWlsU3R5bGUoe1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgd2lkdGg6IGAke3RodW1ibmFpbFdpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7dGh1bWJuYWlsV2lkdGggKiByYXRpb31weGAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLnNyY30pYCxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRodW1ibmFpbFN0eWxlKHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2ltYWdlU3JjXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy8gcmV0dXJu7J2EIOyigCDsoJXsnZjtlbTshJwgc3VibWl07J20IOuQkOuKlOqwgOulvCDslYzslYTslbztlahcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChzY29yZSA8PSAwIHx8IHNjb3JlID4gNSkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+uzhOygkCDqsJzsiJjqsIAg7Jis67CU66W07KeAIOyViuyKteuLiOuLpCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29tbWVudC5sZW5ndGggPCA1IHx8IGNvbW1lbnQubGVuZ3RoID4gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn66as67ewIOq4gOyekOyImOqwgCDrp57sp4Ag7JWK7Iq164uI64ukLicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5maWxlcy5sZW5ndGggJiZcclxuICAgICAgICAhdmFsaWRJbWFnZVR5cGUoaW1hZ2VSZWYuY3VycmVudC5maWxlc1swXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn7J2066+47KeA64qUIGpwZyxqcGVnLHBuZyDtjIzsnbzrp4wg6rCA64ql7ZWp64uI64ukLicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb3JtT2JqID0gbmV3IEZvcm1EYXRhKGZvcm0uY3VycmVudCk7XHJcbiAgICAgIC8qXHJcbiAgICAgIGZvcm1PYmouYXBwZW5kKCdyZXNlcnZhdGlvbkluZm9JZCxibGFoKTtcclxuICAgICAgZm9ybU9iai5hcHBlbmQoJ2V4SW1hZ2UnLCAhIWV4RGF0YS5pbWFnZVNyYyk7XHJcbiAgICAgICAgICAgIGZvcm1PYmouYXBwZW5kKCduZXdJbWFnZScsIG5ld0ltYWdlKTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGZvcm0uY3VycmVudC5hY3Rpb24sIGZvcm1PYmopO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBhbGVydE1vZGFsKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBhbGVydE1vZGFsKGlzUG9zdCA/ICfrpqzrt7DqsIAg65Ox66Gd65CY7JeI7Iq164uI64ukJyA6ICfrpqzrt7DqsIAg7IiY7KCV65CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgICAgaWYgKGlzUG9zdCkgaGlzdG9yeS5wdXNoKCcvbXlyZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtb2RpZnlSYXRpbmcgPSAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFNjb3JlKHZhbHVlKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSAoeyB0YXJnZXQ6IHsgZmlsZXMgfSB9KSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wSW1hZ2UgPSBmaWxlc1swXTtcclxuICAgIGlmICghdmFsaWRJbWFnZVR5cGUodGVtcEltYWdlKSkge1xyXG4gICAgICBhbGVydE1vZGFsKCfsnbTrr7jsp4DripQganBnLGpwZWcscG5nIO2MjOydvOunjCDqsIDriqXtlanri4jri6QnKTtcclxuICAgICAgaW1hZ2VSZWYuY3VycmVudC52YWx1ZSA9ICcnOyAvLyDslYTrp4gg6rOg7LOQ7JW865Cg6rq87J6EXHJcbiAgICAgIHNldEltYWdlU3JjKCcnKTsgLy8g7ZWE7JqU7ZWc7KeAIOuqqOultOqyoOydjFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRJbWFnZVNyYyh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0ZW1wSW1hZ2UpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYW5jZWxJbWFnZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGltYWdlUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgIHNldEltYWdlU3JjKCcnKTtcclxuICAgIC8vIG5ld0ltYWdlPSAtMTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmV2aWV3RWRpdFwiPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG1ldGhvZD17aXNQb3N0ID8gJ1BPU1QnIDogJ1BVVCd9XHJcbiAgICAgICAgYWN0aW9uPXtgL2FwaS9yZXNlcnZhdGlvbnMvY29tbWVudHMvJHtjb21tZW50SWR9YH1cclxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgICAgbmFtZT1cInJldmlld0Zvcm1cIlxyXG4gICAgICAgIHJlZj17Zm9ybX1cclxuICAgICAgPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJhdGluZ1NlY3Rpb25cIj5cclxuICAgICAgICAgIDxwPuuzhOygkOqzvCDsnbTsmqkg6rK97ZeY7J2EIOuCqOqyqOyjvOyEuOyalC48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1N0YXJcIj5cclxuICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1XS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZuIGZuLXN0YXIyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPj0gdmFsdWUgPyAnZ2V0U3RhcicgOiAnbm90R2V0U3RhcidcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGlmeVJhdGluZyh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2NvcmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzY29yZX1cclxuICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogc2NvcmUgPiAwID8gJyMwMDAnIDogJyNkZGQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwid3JpdGVDb21tZW50XCI+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICByb3dzPVwiMTVcIlxyXG4gICAgICAgICAgICBtaW5MZW5ndGg9XCI1XCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNDAwXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q29tbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0SW1hZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VMZXR0ZXJDb3VudFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICBpZD1cImltYWdlVXBsb2FkXCJcclxuICAgICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWltYWdlMVwiIC8+XHJcbiAgICAgICAgICAgICAg7IKs7KeEIOy2lOqwgFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21tZW50Q291bnRcIj5cclxuICAgICAgICAgICAgICB7YCR7Y29tbWVudC5sZW5ndGh9LzQwMCAo7LWc7IaMIDXsnpAg7J207IOBKWB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYm5haWxJbWFnZVwiIHN0eWxlPXt0aHVtYm5haWxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY3Jvc3MxXCIgb25DbGljaz17Y2FuY2VsSW1hZ2VVcGxvYWR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIHtpc1Bvc3QgPyAoXHJcbiAgICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1Nb2RhbCgn66as67ew66W8IOuTseuhnSDtlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+umrOu3sCDrk7HroZ0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1FZGl0KGhhbmRsZVN1Ym1pdCwgc2NvcmUsIGNvbW1lbnQsIGltYWdlU3JjKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+yImOyglScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRDhEQkRFJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1DYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+y3qOyGjCcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdFZGl0LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aHVtYm5haWxXaWR0aDogMjAwLFxyXG4gIGV4U2NvcmU6IDAsXHJcbiAgZXhDb21tZW50OiAnJyxcclxuICBleEltYWdlU3JjOiAnJyxcclxuICBpc1Bvc3Q6IHRydWUsXHJcbn07XHJcblxyXG5SZXZpZXdFZGl0LnByb3BUeXBlcyA9IHtcclxuICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdGh1bWJuYWlsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgZXhTY29yZTogUHJvcFR5cGVzLm51bWJlcixcclxuICBleENvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZXhJbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpc1Bvc3Q6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNvbmZpcm1FZGl0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBjb25maXJtQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0VkaXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGlja2V0SGVhZCBmcm9tICcuLi9UaWNrZXRIZWFkJztcclxuaW1wb3J0IFRpY2tldEluZm9MaXN0IGZyb20gJy4uL1RpY2tldEluZm9MaXN0JztcclxuXHJcbmNvbnN0IFRpY2tldCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIGNoaWxkcmVuLCBhY3Rpb25zLCBpc0dyZWVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiVGlja2V0XCI+XHJcbiAgICAgIDxUaWNrZXRIZWFkIGlzR3JlZW49e2lzR3JlZW59PntjaGlsZHJlbn08L1RpY2tldEhlYWQ+XHJcbiAgICAgIDxUaWNrZXRJbmZvTGlzdCBpbmZvcz17aW5mb3N9IGFjdGlvbnM9e2FjdGlvbnN9IC8+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblRpY2tldC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNHcmVlbjogZmFsc2UsXHJcbn07XHJcblxyXG5UaWNrZXQucHJvcFR5cGVzID0ge1xyXG4gIGluZm9zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcclxuICBpc0dyZWVuOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFByb2R1Y3REZXNjID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0ZXh0LCBsaW1pdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzRm9sZCwgc2V0SXNGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBsZXQgdGV4dE9iajtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICAgIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgbGltaXQpO1xyXG4gICAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UobGltaXQpO1xyXG4gICAgICB0ZXh0T2JqID0geyBzaW1wbGU6IHRleHRTaW1wbGUsIGRldGFpbDogdGV4dERldGFpbCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9O1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vcmVEZXNjID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzRm9sZCkge1xyXG4gICAgICAkKCcuUHJvZHVjdERlc2MgLm1vcmVEZXNjJykuc2xpZGVEb3duKCk7XHJcbiAgICAgIHNldElzRm9sZChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcucHJvZHVjdERlc2MgLm1vcmVEZXNjJykuc2xpZGVVcCgpO1xyXG4gICAgICBzZXRJc0ZvbGQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlblRleHQgPSAn7Y687LOQ67O06riwIDxpIGNsYXNzPVwiZm4gZm4tZG93bjJcIj48L2k+JztcclxuICBjb25zdCBmb2xkVGV4dCA9ICfsoJHquLAgPGkgY2xhc3M9XCJmbiBmbi11cDJcIj48L2k+JztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlByb2R1Y3REZXNjXCI+XHJcbiAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHt0ZXh0T2JqLnNpbXBsZX1cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdHNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc0ZvbGQgPyAnaW5saW5lJyA6ICdub25lJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vcmVEZXNjXCI+e3RleHRPYmouZGV0YWlsfTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+e3RleHRPYmouc2ltcGxlfTwvcD5cclxuICAgICAgKX1cclxuICAgICAge3RleHRPYmouZGV0YWlsID8gKFxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmM2Y1ZjYnLFxyXG4gICAgICAgICAgICAgIGNsaWNrOiBzaG93TW9yZURlc2MsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGlzRm9sZCA/IG9wZW5UZXh0IDogZm9sZFRleHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdERlc2MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbn07XHJcblxyXG5Qcm9kdWN0RGVzYy5wcm9wVHlwZXMgPSB7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERlc2M7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgSW1hZ2VTbGlkZXIgZnJvbSAnLi4vSW1hZ2VTbGlkZXInO1xyXG5pbXBvcnQgSW1hZ2VDb250cm9sbGVyIGZyb20gJy4uL0ltYWdlQ29udHJvbGxlcic7XHJcblxyXG4vLyDsiqTtgazroaQg7Iuc6rCEKHRyYW5zaXRpb25UaW1lKSBkZWZhdWx0IDHstIggIOychOyXkOyEnCDrrLzroKTrsJvripTqsoNcclxuLy8g7IOB7YOc66GcIOyCrOyaqe2VmOuKlCDsiqTtgazroaQg7Iuc6rCEICh0cmFuc2l0aW9uRHVyYXRpb24pXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IFByb21vdGlvbkltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgLy8g66as7IKs7J207KaI7IucIHdpZHRo6rCAIOyViOuwlOuAnFxyXG4gIGNvbnN0IHsgdGltZUludGVydmFsLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY3JvbGxhYmxlLCBzZXRTY3JvbGxhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0cmFuc2l0aW9uRHVyYXRpb24sIHNldFRyYW5zaXRpb25EdXJhdGlvbl0gPSB1c2VTdGF0ZSh0cmFuc2l0aW9uVGltZSk7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW1hZ2VXaWR0aCwgc2V0SW1hZ2VXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBkZWdyZWVSZWYgPSB1c2VSZWYoZGVncmVlKTtcclxuICBjb25zdCBzY3JvbGxhYmxlUmVmID0gdXNlUmVmKHNjcm9sbGFibGUpO1xyXG4gIGNvbnN0IGltYWdlTGlzdCA9IHVzZVJlZihudWxsKTtcclxuICBkZWdyZWVSZWYuY3VycmVudCA9IGRlZ3JlZTtcclxuICBzY3JvbGxhYmxlUmVmLmN1cnJlbnQgPSBzY3JvbGxhYmxlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZGF0YTogeyBpdGVtcyB9LFxyXG4gICAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9ucycpO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbXNbMF0pOyAvLyDsspjsnYzqs7wg66eI7KeA66eJ7J2EIOuPmeydvO2VnCDsnbTrr7jsp4Drpbwg65GQ7Ja07IScIOyKpO2BrOuhpOydhCDrp6TrgYTrn73qsowg7ZWoXHJcbiAgICAgICAgc2V0SW1hZ2VzKGl0ZW1zKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoSW1hZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0b1Njcm9sbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHNjcm9sbGFibGVSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChkZWdyZWVSZWYuY3VycmVudCA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKHRyYW5zaXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGVncmVlKChwcmV2RGVncmVlKSA9PiBwcmV2RGVncmVlICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRpbWVJbnRlcnZhbCAqIDEwMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbCk7XHJcbiAgfSwgW2ltYWdlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRW5kID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgc2V0RGVncmVlKDApO1xyXG4gICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsYWJsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGxhYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2l6ZUVuZCA9IChmdW5jKSA9PiB7XHJcbiAgICBsZXQgdGltZXI7XHJcbiAgICByZXR1cm4gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDEwMCwgZXZlbnQpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzdGFydFNjcm9sbCA9ICgpID0+IHtcclxuICAgIHJldHVybiByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICBzZXRTY3JvbGxhYmxlKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGF1c2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRTY3JvbGxhYmxlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBhdXNlU2Nyb2xsKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGFydFNjcm9sbCgpKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwYXVzZVNjcm9sbCk7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGFydFNjcm9sbCgpKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRJbWFnZVdpZHRoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlc2l6ZUVuZCgoKSA9PiB7XHJcbiAgICAgIHNldEltYWdlV2lkdGgoaW1hZ2VMaXN0LmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50V2lkdGgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEltYWdlV2lkdGgoXHJcbiAgICAgIChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZCAmJlxyXG4gICAgICAgIGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKSB8fFxyXG4gICAgICAgIDAsXHJcbiAgICApOyAvLyDsspjsnYzsl5QgMOycvOuhnCDrkKhcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRJbWFnZVdpZHRoKCkpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBnZXRJbWFnZVdpZHRoKCkpO1xyXG4gIH0sIFtpbWFnZXNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZVNsaWRlclxyXG4gICAgICByZWY9e2ltYWdlTGlzdH1cclxuICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgIHRyYW5zaXRpb25UaW1lPXt0cmFuc2l0aW9uRHVyYXRpb259XHJcbiAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICBpbWFnZVdpZHRoPXtpbWFnZVdpZHRofVxyXG4gICAgICBpc1Byb21vdGlvblxyXG4gICAgICBoYW5kbGVUcmFuc2l0aW9uRW5kPXtoYW5kbGVUcmFuc2l0aW9uRW5kfVxyXG4gICAgICBoYW5kbGVNb3VzZU92ZXI9e2hhbmRsZU1vdXNlT3Zlcn1cclxuICAgICAgaGFuZGxlTW91c2VPdXQ9e2hhbmRsZU1vdXNlT3V0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuUHJvbW90aW9uSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiAxLFxyXG4gIHRpbWVJbnRlcnZhbDogMixcclxufTtcclxuXHJcblByb21vdGlvbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcclxuICB0aW1lSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9tb3Rpb25JbWFnZTtcclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMpIHtcclxuICBsZXQgdGltZXI7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgMTAwLCBldmVudCk7XHJcbiAgICBzZXRUaW1lb3V0KClcclxuICB9O1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAncmVzaXplJyxcclxuICBkZWJvdW5jZShldmVudCA9PiB7XHJcbiAgICAvLyByZXNpemUg64Gd64Ks7J2EIOuVjFxyXG4gICAgc2Nyb2xsQWJsZSA9IHRydWU7XHJcbiAgfSksXHJcbik7XHJcbiovXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTWFpbk5hdkJhciBmcm9tICcuLi9NYWluTmF2QmFyJztcclxuaW1wb3J0IFN1Yk5hdkJhciBmcm9tICcuLi9TdWJOYXZCYXInO1xyXG5cclxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBpc1RyYW5zcGFyZW50LCBpc0xvZ291dGFibGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIk5hdkJhclwiPlxyXG4gICAgICB7bmFtZSA/IChcclxuICAgICAgICA8U3ViTmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPE1haW5OYXZCYXIgaXNUcmFuc3BhcmVudD17aXNUcmFuc3BhcmVudH0gaXNMb2dvdXRhYmxlPXtpc0xvZ291dGFibGV9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuTmF2QmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBuYW1lOiAnJyxcclxuICBpc1RyYW5zcGFyZW50OiBmYWxzZSxcclxuICBpc0xvZ291dGFibGU6IGZhbHNlLFxyXG59O1xyXG5cclxuTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlzVHJhbnNwYXJlbnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGlzTG9nb3V0YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RDb250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YFByb2R1Y3RDb250YWluZXIgJHtjbGFzc05hbWV9YH0+e2NoaWxkcmVufTwvZGl2PjtcclxufTtcclxuXHJcblByb2R1Y3RDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJNb2RhbFwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgTWFpbkltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzcmMsIGFsdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiTWFpbkltYWdlXCIgc3JjPXtzcmN9IGFsdD17YWx0fSAvPjtcclxufTtcclxuXHJcbk1haW5JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJldmlld1N1bW1hcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGF2ZXJhZ2VTY29yZSwgcmV2aWV3Q291bnQsIGRpc3BsYXlTdGFyIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiQ29tbWVudFN1bW1hcnlcIj5cclxuICAgICAgPGgyPuyYiOunpOyekCDtlZzspITtj4k8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRDb250YWluZXJcIj5cclxuICAgICAgICAgIHtkaXNwbGF5U3RhcihhdmVyYWdlU2NvcmUpfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZlcmFnZVNjb3JlXCI+e2F2ZXJhZ2VTY29yZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXhTY29yZVwiPi8gNS4wPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRDb250YWluZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRDb3VudFwiPntgJHtyZXZpZXdDb3VudH0g6rG0YH08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbnJvbGxUZXh0XCI+65Ox66GdPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3U3VtbWFyeS5wcm9wVHlwZXMgPSB7XHJcbiAgYXZlcmFnZVNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcmV2aWV3Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5U3RhcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1N1bW1hcnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL1Jldmlldyc7XHJcbmltcG9ydCBSZXZpZXdFZGl0IGZyb20gJy4uL1Jldmlld0VkaXQnO1xyXG5cclxuY29uc3QgUmV2aWV3TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHJldmlld3MsXHJcbiAgICBpc0JyaWVmLFxyXG4gICAgaXNNb2RpZmlhYmxlLFxyXG4gICAgZWRpdENvbW1lbnQsXHJcbiAgICBjb25maXJtRGVsZXRlLFxyXG4gICAgY29uZmlybUVkaXQsXHJcbiAgICBjb25maXJtQ2FuY2VsLFxyXG4gICAgZXhEYXRhOiB7IGlkLCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMgfSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHNob3dSZXZpZXdzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmV2aWV3c0NvbXAgPSBbXTtcclxuICAgIFsuLi5yZXZpZXdzXS5yZXZlcnNlKCkuc29tZSgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpc0JyaWVmICYmIGluZGV4ID49IDUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXZpZXdzQ29tcC5wdXNoKFxyXG4gICAgICAgIDxSZXZpZXdcclxuICAgICAgICAgIGtleT17dmFsdWUuY29tbWVudElkfVxyXG4gICAgICAgICAgcmV2aWV3PXt2YWx1ZS5jb21tZW50fVxyXG4gICAgICAgICAgaW1hZ2U9e1xyXG4gICAgICAgICAgICB2YWx1ZS5jb21tZW50SW1hZ2VzLmxlbmd0aFxyXG4gICAgICAgICAgICAgID8gdmFsdWUuY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWVcclxuICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzY29yZT17dmFsdWUuc2NvcmV9XHJcbiAgICAgICAgICBlbWFpbD17dmFsdWUucmVzZXJ2YXRpb25FbWFpbH1cclxuICAgICAgICAgIGRhdGU9e3ZhbHVlLnJlc2VydmF0aW9uRGF0ZX1cclxuICAgICAgICAgIGVkaXRDb21tZW50PXtlZGl0Q29tbWVudCh2YWx1ZS5jb21tZW50SWQpfVxyXG4gICAgICAgICAgY29uZmlybURlbGV0ZT17Y29uZmlybURlbGV0ZSh2YWx1ZS5jb21tZW50SWQpfVxyXG4gICAgICAgIC8+LFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV2aWV3c0NvbXA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUmV2aWV3TGlzdFwiPlxyXG4gICAgICB7aXNNb2RpZmlhYmxlID8gKFxyXG4gICAgICAgIDxSZXZpZXdFZGl0XHJcbiAgICAgICAgICBjb21tZW50SWQ9e2lkfVxyXG4gICAgICAgICAgZXhTY29yZT17c2NvcmV9XHJcbiAgICAgICAgICBleENvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICBleEltYWdlU3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgIGlzUG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICBjb25maXJtRWRpdD17Y29uZmlybUVkaXQoaWQpfVxyXG4gICAgICAgICAgY29uZmlybUNhbmNlbD17Y29uZmlybUNhbmNlbH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHNob3dSZXZpZXdzKClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdMaXN0LnByb3BUeXBlcyA9IHtcclxuICByZXZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgY29tbWVudEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgIHNhdmVGaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICB9KSxcclxuICAgICAgKS5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIGlzQnJpZWY6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgZWRpdENvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybURlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRWRpdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGV4RGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==