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
      isPromotion = props.isPromotion;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ImageSlider"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container ".concat(isPromotion ? 'promotion' : 'detail')
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
  }))));
});
ImageSlider.propTypes = {
  degree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    productId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })).isRequired,
  imageWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  isPromotion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
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
  var categoryProducts = Array(6).fill(null);
  var viewsArr = Array(6).fill(null);
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
        var _ref2, items, copiedViews;

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
                copiedViews = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(views);
                copiedViews[0] = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  productCount: productCount,
                  products: viewsArr[0]
                });
                setViews(copiedViews);
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 14]]);
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
      productContent = _props$itemInfo.productContent;

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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var trimmedText = productContent.trim();
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

__signature__(ProductBox, "useState{[isFold, setIsFold](true)}\nuseState{[isIconShowing, setIsIconShowing](false)}\nuseRef{detailText}\nuseEffect{}");

ProductBox.propTypes = {
  itemInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    productImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    productDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    placeName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    productContent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
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

/***/ "J+1A":
/*!**********************************!*\
  !*** ./src/jsx/NavBar/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
    setImageWidth(imageList.current.firstElementChild.clientWidth); // 처음엔 0으로 됨

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
/* harmony import */ var _ImageController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ImageController */ "j9uu");




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
      if (scrollable) {
        // 아마 고쳐야 될꺼임
        if (degree === images.length - 1) {
          setTransitionDuration(0);
          setDegree(0);
          setTransitionDuration(transitionTime);
        }

        setDegree(degree + 1);
      }
    }, timeInterval);
    return clearInterval(autoScroll);
  }, []);

  var resizeEnd = function resizeEnd(func) {
    var timer;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 100);
    };
  };

  var pauseScroll = function pauseScroll() {
    setScrollable(false);
    resizeEnd(function () {
      setScrollable(true);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {
    window.addEventListener('resize', pauseScroll);
    return window.removeEventListener('resize', pauseScroll);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ImageController__WEBPACK_IMPORTED_MODULE_6__["default"], {
    degree: degree,
    transitionTime: transitionDuration,
    images: images,
    resizeEnd: resizeEnd
  });
};

__signature__(PromotionImage, "useState{[degree, setDegree](0)}\nuseState{[scrollable, setScrollable](true)}\nuseState{[transitionDuration, setTransitionDuration](transitionTime)}\nuseState{[images, setImages]([])}\nuseEffect{}\nuseEffect{}\nuseLayoutEffect{}");

PromotionImage.defaultProps = {
  transitionTime: 2,
  timeInterval: 1
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "Ty5D");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "J+1A");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






/*
재사용성 좋게 쪼개자
*/

var NavBar = function NavBar(props) {
  var isMain = props.isMain,
      isTransparent = props.isTransparent,
      isLogoutable = props.isLogoutable;

  var _useLocation = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useLocation"])(),
      pathname = _useLocation.pathname;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "NavBar"
  }, function (main) {
    if (main) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container ".concat(isTransparent ? 'transparent' : 'fixed')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/images/icon/icon.png",
        alt: "naver icon"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, isLogoutable ? '로그아웃' : '예약확인')));
    }

    var paths = pathname.split('/');
    var itemId = paths[paths.length - 1];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "backward"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/detail/".concat(itemId)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fn fn-backward1"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "titleName"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\uD589\uC0AC \uC774\uB984")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "empty"
    }));
  }(isMain));
};

__signature__(NavBar, "useLocation{{ pathname }}", function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_2__["useLocation"]];
});

NavBar.propTypes = {
  isMain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  isTransparent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  isLogoutable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
NavBar.defaultProps = {
  isMain: true,
  isTransparent: false,
  isLogoutable: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9EZXRhaWxJbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0SW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkNvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9MYXlvdXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSW5wdXRUaWNrZXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2YXRpb25Db250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvRm9vdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0FwcC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTG9naW5Gb3JtL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RCb3gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTmF2QmFyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEhlYWQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0RldGFpbENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlckluZm8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVE9TL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5WaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0FwcC9hcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3UHJvdmlkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VUaXRsZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRIZWFkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RPUy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRJbmZvTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRGVzYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvdW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJWaWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlU2xpZGVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0hlYWRlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlckluZm8vc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdDb250YWluZXIvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJVSS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9CdXR0b25CdW5jaC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJDb250cm9sbGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5WaWV3L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9CdXR0b25CdW5jaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Q29udGFpbmVyL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlQ29udHJvbGxlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0Qm94L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3RWRpdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdERlc2MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSW5wdXRUaWNrZXQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZURlc2Mvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvbW90aW9uSW1hZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTmF2QmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTWFpbkltYWdlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1N1bW1hcnkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3TGlzdC9pbmRleC5qc3giXSwibmFtZXMiOlsiRXZlbnRJbmZvIiwicHJvcHMiLCJwcm9kdWN0UHJpY2VzIiwic2hvd0Rpc2NvdW50SW5mbyIsImRpc2NvdW50SW5mbyIsImZvckVhY2giLCJ2YWx1ZSIsIk51bWJlciIsImRpc2NvdW50UmF0ZSIsIkVQU0lMT04iLCJwdXNoIiwicHJpY2VUeXBlTWFwcGVyIiwicHJpY2VUeXBlTmFtZSIsIk1hdGgiLCJyb3VuZCIsImxlbmd0aCIsImRpc2NvdW50VGV4dCIsImpvaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiSW1hZ2VTbGlkZXIiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJyZWYiLCJkZWdyZWUiLCJ0cmFuc2l0aW9uVGltZSIsImltYWdlcyIsImltYWdlV2lkdGgiLCJpc1Byb21vdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm1hcCIsImluZGV4IiwicHJvZHVjdElkIiwic2F2ZUZpbGVOYW1lIiwibnVtYmVyIiwiYm9vbCIsIkRldGFpbEltYWdlIiwidGl0bGUiLCJ1c2VTdGF0ZSIsInNldERlZ3JlZSIsInJlc2l6ZUVuZCIsImZ1bmMiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJsZWZ0U2Nyb2xsIiwicmlnaHRTY3JvbGwiLCJkZWZhdWx0UHJvcHMiLCJhcnJheSIsIlJlc2VydmF0aW9uQ291bnQiLCJ0b1VzZWRMZW4iLCJ1c2VkTGVuIiwiY2FuY2VsZWRMZW4iLCJCdXR0b24iLCJmb250Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGljayIsImNoaWxkcmVuIiwiY29sb3IiLCJvbmVPZlR5cGUiLCJub2RlIiwiTWFpbkNvbnRhaW5lciIsImJhc2lzQ291bnQiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInByb2R1Y3RDb3VudCIsInNldFByb2R1Y3RDb3VudCIsIkFycmF5IiwiZmlsbCIsInZpZXdzIiwic2V0Vmlld3MiLCJzaG93aW5nQ291bnQiLCJjYXRlZ29yeVByb2R1Y3RzIiwidmlld3NBcnIiLCJsYWJlbHMiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImZldGNoUHJvZHVjdHMiLCJheGlvcyIsImdldCIsIml0ZW1zIiwiZGF0YSIsInNsaWNlIiwiY29waWVkVmlld3MiLCJjb25zb2xlIiwiZXJyb3IiLCJzaG93TW9yZVByb2R1Y3QiLCJ2aWV3c0xlbiIsImZpbmFsSW5kIiwicHJvZHVjdHNMZW4iLCJzcGVjaWZpY1Byb2R1Y3RzIiwiYWxsUHJvZHVjdHMiLCJjYXRlZ29yeUlkIiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNldElzTW9kYWwiLCJzZXRNb2RhbENoaWxkcmVuIiwiYWxlcnRNb2RhbCIsImNvbmZpcm1Nb2RhbCIsIkxheW91dCIsImlzTW9kYWwiLCJtb2RhbENoaWxkcmVuIiwidGV4dCIsImFjdGlvbiIsIklucHV0VGlja2V0IiwidGlja2V0cyIsImRpc3BhdGNoIiwidHJhbnNmb3JtTW9uZXlVbml0IiwicHJpY2UiLCJvcmlnaW5hbENvc3QiLCJ0eXBlIiwid2hlcmUiLCJBY3Rpb25Db250ZXh0IiwiY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIiwiUmVzZXJ2YXRpb25Db250YWluZXIiLCJlbWFpbElkIiwidG9Vc2VkIiwic2V0VG9Vc2VkIiwic2V0VG9Vc2VkTGVuIiwiY2FuY2VsZWQiLCJzZXRDYW5jZWxlZCIsInNldENhbmNlbGVkTGVuIiwidXNlQ29udGV4dCIsInVzZWQiLCJjYW5jZWxSZXNlcnZhdGlvbiIsImlkIiwicHV0Iiwic3RhdHVzIiwidG9EZWxldGVJbmRleCIsImZpbmRJbmRleCIsInJlc2VydmF0aW9uSW5mb0lkIiwiY2FuY2VsZWRJdGVtIiwic3BsaWNlIiwidG9JbnNlcnRJbmRleCIsIlByb2R1Y3RJbmZvIiwiZGlzcGxheUluZm8iLCJwcm9kdWN0Q29udGVudCIsInByb2R1Y3REZXNjcmlwdGlvbiIsInBsYWNlTG90IiwicGxhY2VTdHJlZXQiLCJwbGFjZU5hbWUiLCJ0ZWxlcGhvbmUiLCJsb2NhdGlvbkltZ1NyYyIsIkZvb3RlciIsInRvcCIsImlzVG9wTmVlZCIsIlJldmlld0NvbnRhaW5lciIsImlzQnJpZWYiLCJkaXNwbGF5SW5mb0lkIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJhdmVyYWdlU2NvcmUiLCJzZXRBdmVyYWdlU2NvcmUiLCJpc01vZGlmaWFibGUiLCJzZXRJc01vZGlmaWFibGUiLCJleERhdGEiLCJzZXRFeERhdGEiLCJtb2RpZmllZEF2ZXJhZ2VTY29yZSIsInJlZHVjZSIsImFjY3VtIiwiY3VycmVudCIsInNjb3JlIiwiZGlzcGxheVN0YXIiLCJtYXhTY29yZSIsImZpbGxDb3VudCIsImZsb29yIiwibm90RmlsbENvdW50IiwiY2VpbCIsInJhdGlvQ291bnQiLCJzdGFycyIsIl8iLCJ0aW1lcyIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ2xpcCIsIldlYmtpdEJhY2tncm91bmRDbGlwIiwiV2Via2l0VGV4dEZpbGxDb2xvciIsImRpc3BsYXkiLCJlZGl0Q29tbWVudCIsImNvbW1lbnRJZCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsImNvbW1lbnQiLCJjb21tZW50SW1hZ2VzIiwiaW1hZ2VTcmMiLCJkZWxldGVDb21tZW50IiwibW9kaWZpZWRSZXZpZXdzIiwiZmlsdGVyIiwiY29uZmlybURlbGV0ZSIsImNvbmZpcm1FZGl0Iiwic3VibWl0IiwiaXNQcm9jZXNzZWQiLCJjb25maXJtQ2FuY2VsIiwicmVzZXJ2YXRpb25EYXRlIiwicmVzZXJ2YXRpb25FbWFpbCIsImRlbGV0ZUZsYWciLCJMb2dpbkZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwidGFyZ2V0IiwiUHJvZHVjdEJveCIsIml0ZW1JbmZvIiwicHJvZHVjdEltYWdlVXJsIiwiaXNGb2xkIiwic2V0SXNGb2xkIiwiaXNJY29uU2hvd2luZyIsInNldElzSWNvblNob3dpbmciLCJkZXRhaWxUZXh0IiwidXNlUmVmIiwidGV4dE9iaiIsInRyaW1tZWRUZXh0IiwidHJpbSIsInJlcGxhY2UiLCJsaW1pdCIsInRleHRTaW1wbGUiLCJ0ZXh0RGV0YWlsIiwic2ltcGxlIiwiZGV0YWlsIiwic2hvd0FuZEhpZGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcGltbWVkaWF0ZSIsIiQiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiYmFja2dyb3VuZEltYWdlIiwiVGlja2V0SW5mbyIsImluZm8iLCJkZXNjcmlwdGlvbiIsInJlc2VydmF0aW9uTmFtZSIsInJlc2VydmF0aW9uVGVsIiwicHJpY2VJbmZvIiwidG90YWxQcmljZSIsImFjdGlvbnMiLCJyZXNlcnZhdGlvblN1bW1hcnkiLCJjb3VudCIsImNyZWF0ZUJ1dHRvbiIsIm5vdGVzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJSZXNlcnZlQ29udGFpbmVyIiwidXNlUGFyYW1zIiwicHJvZHVjdERhdGEiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZGlmZkRheXMiLCJyZXNlcnZlIiwicmFuZG9tIiwic3RhcnQiLCJlbmQiLCJtb21lbnQiLCJ0eiIsImFkZCIsImZvcm1hdCIsInByb2R1Y3RJbWFnZXMiLCJzb21lIiwiRGV0YWlsQ29udGFpbmVyIiwiY29tbWVudHMiLCJkaXNwbGF5SW5mb0ltYWdlIiwiUmVzZXJ2ZXJJbmZvIiwibmFtZSIsInRvdGFsVGlja2V0IiwiaXNWZXJpZmllZE5hbWUiLCJpc1ZlcmlmaWVkVGVsIiwiaXNWZXJpZmllZEVtYWlsIiwibWFrZUFsZXJ0IiwiaGlkZSIsIk1haW5WaWV3IiwicHJvZHVjdHMiLCJsZWZ0UHJvZHVjdHMiLCJyaWdodFByb2R1Y3RzIiwiQ291bnRUZXh0IiwiZWxlbWVudCIsImhhbmRsZUNsaWNrIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIlJldmlld1Byb3ZpZGVyIiwiSW1hZ2VUaXRsZSIsImltYWdlTGVuIiwiVGlja2V0SGVhZCIsImlzR3JlZW4iLCJUT1MiLCJpc0NoZWNrZWQiLCJpc0NvbGxlY3Rpb25Gb2xkIiwic2V0SXNDb2xsZWN0aW9uRm9sZCIsImlzT2ZmZXJGb2xkIiwic2V0SXNPZmZlckZvbGQiLCJmb2xkVGV4dCIsInNob3dUZXh0IiwiaGFuZGxlQ29sbGVjdGlvbkNsaWNrIiwiaGFuZGxlT2ZmZXJDbGljayIsImNoZWNrZWQiLCJUaWNrZXRJbmZvTGlzdCIsImluZm9zIiwiUmVzZXJ2ZURlc2MiLCJwbGFjZSIsInByaWNlVGV4dCIsInByaWNlTGlzdCIsIkhlYWRlciIsImluaXRpYWxTdGF0ZSIsImlzVE9TQ2hlY2tlZCIsInJlZHVjZXIiLCJzdGF0ZSIsIm1vZGlmaWVkRGVjIiwibW9kaWZpZWRJbmMiLCJ0ZXN0IiwidGVsUmUiLCJlbWFpbFJlIiwiRXJyb3IiLCJSZXNlcnZlRm9ybSIsInVzZVJlZHVjZXIiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImhhbmRsZVN1Ym1pdCIsInJlc2VydmF0aW9uSW5mbyIsInByaWNlcyIsInJlc2VydmF0aW9uVGVsZXBob25lIiwicmVzZXJ2YXRpb25ZZWFyTW9udGhEYXkiLCJsZW4iLCJwcm9kdWN0UHJpY2VJZCIsInByb2R1Y3RQcmljZUlEIiwicG9zdCIsImNvbmZpcm1TdWJtaXQiLCJzcGxpdCIsImlzUmVxdXJlZCIsIlRhYlZpZXciLCJzZWxlY3RlZCIsImZpbmQiLCJSZXZpZXciLCJyZXZpZXciLCJpbWFnZSIsImRhdGUiLCJUYWJVSSIsImxhYmVsIiwiVGFiQ29udHJvbGxlciIsImFsYXJtIiwic2V0U2VsZWN0ZWQiLCJhcHBseVN0eWxlIiwidG9TdHJpbmciLCJjYWxsIiwiYWxsIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwicmlnaHQiLCJkb3duIiwibGVmdCIsIkJ1dHRvbkJ1bmNoIiwibWFyZ2luIiwicGFkZGluZyIsIkltYWdlQ29udHJvbGxlciIsImltYWdlTGlzdCIsInNldEltYWdlV2lkdGgiLCJnZXRJbWFnZVdpZHRoIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGllbnRXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUmV2aWV3RWRpdCIsInRodW1ibmFpbFdpZHRoIiwiZXhTY29yZSIsImV4Q29tbWVudCIsImV4SW1hZ2VTcmMiLCJpc1Bvc3QiLCJzZXRTY29yZSIsInNldENvbW1lbnQiLCJzZXRJbWFnZVNyYyIsInRodW1ibmFpbFN0eWxlIiwic2V0VGh1bWJuYWlsU3R5bGUiLCJmb3JtIiwiaW1hZ2VSZWYiLCJpbWFnZU1lYXN1cmVtZW50IiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJyYXRpbyIsImhlaWdodCIsIndpZHRoIiwiZmlsZXMiLCJ2YWxpZEltYWdlVHlwZSIsImZvcm1PYmoiLCJGb3JtRGF0YSIsIm1vZGlmeVJhdGluZyIsInVwbG9hZEltYWdlIiwidGVtcEltYWdlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2FuY2VsSW1hZ2VVcGxvYWQiLCJUaWNrZXQiLCJQcm9kdWN0RGVzYyIsInNob3dNb3JlRGVzYyIsIm9wZW5UZXh0IiwiUHJvbW90aW9uSW1hZ2UiLCJ0aW1lSW50ZXJ2YWwiLCJzY3JvbGxhYmxlIiwic2V0U2Nyb2xsYWJsZSIsInNldFRyYW5zaXRpb25EdXJhdGlvbiIsInNldEltYWdlcyIsImZldGNoSW1hZ2VzIiwiYXV0b1Njcm9sbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInBhdXNlU2Nyb2xsIiwidXNlTGF5b3V0RWZmZWN0IiwiTmF2QmFyIiwiaXNNYWluIiwiaXNUcmFuc3BhcmVudCIsImlzTG9nb3V0YWJsZSIsInVzZUxvY2F0aW9uIiwicGF0aG5hbWUiLCJtYWluIiwicGF0aHMiLCJpdGVtSWQiLCJQcm9kdWN0Q29udGFpbmVyIiwiY2xhc3NOYW1lIiwiTW9kYWwiLCJNYWluSW1hZ2UiLCJhbHQiLCJSZXZpZXdTdW1tYXJ5IiwicmV2aWV3Q291bnQiLCJSZXZpZXdMaXN0Iiwic2hvd1Jldmlld3MiLCJyZXZpZXdzQ29tcCIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxhQURtQixHQUNERCxLQURDLENBQ25CQyxhQURtQjs7QUFHM0IsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBRixpQkFBYSxDQUFDRyxPQUFkLENBQXNCLFVBQUNDLEtBQUQsRUFBVztBQUMvQixVQUFJQyxNQUFNLENBQUNELEtBQUssQ0FBQ0UsWUFBUCxDQUFOLEdBQTZCRCxNQUFNLENBQUNFLE9BQXhDLEVBQWlEO0FBQy9DTCxvQkFBWSxDQUFDTSxJQUFiLFdBQ0tDLGtFQUFlLENBQUNMLEtBQUssQ0FBQ00sYUFBUCxDQURwQixjQUM2Q0MsSUFBSSxDQUFDQyxLQUFMLENBQ3pDUixLQUFLLENBQUNFLFlBRG1DLENBRDdDO0FBS0Q7QUFDRixLQVJEOztBQVNBLFFBQUlKLFlBQVksQ0FBQ1csTUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgRXZlbnRJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0UHJpY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgc2hvd0Rpc2NvdW50SW5mbyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc2NvdW50SW5mbyA9IFtdO1xyXG4gICAgcHJvZHVjdFByaWNlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZiAoTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgIGRpc2NvdW50SW5mby5wdXNoKFxyXG4gICAgICAgICAgYCR7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfSAke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgIHZhbHVlLmRpc2NvdW50UmF0ZSxcclxuICAgICAgICAgICl9JWAsXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGlzY291bnRJbmZvLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGlzY291bnRUZXh0ID0gYCR7ZGlzY291bnRJbmZvLmpvaW4oJywgJyl9IO2VoOyduGA7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICBb64Sk7J2067KE7JiI7JW9IO2KueuzhO2VoOyduF1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2Rpc2NvdW50VGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkV2ZW50SW5mb1wiPlxyXG4gICAgICA8aDI+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX2V2dFwiIC8+XHJcbiAgICAgICAg7J2067Kk7Yq47KCV67O0XHJcbiAgICAgIDwvaDI+XHJcbiAgICAgIHtzaG93RGlzY291bnRJbmZvKCl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbkV2ZW50SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IE1haW5JbWFnZSBmcm9tICcuLi9NYWluSW1hZ2UnO1xyXG5cclxuY29uc3QgSW1hZ2VTbGlkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgLyogaW5pdFxyXG4gICAqICBkZWdyZWU6IDBcclxuICAgKiB0cmFuc2l0aW9uVGltZTogMlxyXG4gICAqICBpbWFnZXM6IFtdXHJcbiAgICogIGltYWdlV2lkdGg6IDBcclxuICAgKiBpc1Byb21vdGlvbjogdHJ1ZVxyXG4gICAqL1xyXG5cclxuICBjb25zdCB7IGRlZ3JlZSwgdHJhbnNpdGlvblRpbWUsIGltYWdlcywgaW1hZ2VXaWR0aCwgaXNQcm9tb3Rpb24gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbWFnZVNsaWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRhaW5lciAke2lzUHJvbW90aW9uID8gJ3Byb21vdGlvbicgOiAnZGV0YWlsJ31gfT5cclxuICAgICAgICA8dWxcclxuICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtpbWFnZVdpZHRoICogZGVncmVlfXB4KWAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7dHJhbnNpdGlvblRpbWV9c2AsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIGlzUHJvbW90aW9uKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2BkZXRhaWw/cHJvZHVjdElkPSR7dmFsdWUucHJvZHVjdElkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWluSW1hZ2Ugc3JjPXt2YWx1ZS5zYXZlRmlsZU5hbWV9IGFsdD1cInByb21vdGlvbkltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxNYWluSW1hZ2Ugc3JjPXt2YWx1ZS5zYXZlRmlsZU5hbWV9IGFsdD1cIml0ZW1JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuSW1hZ2VTbGlkZXIucHJvcFR5cGVzID0ge1xyXG4gIGRlZ3JlZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHNhdmVGaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcm9kdWN0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VXaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGlzUHJvbW90aW9uOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTbGlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBJbWFnZUNvbnRyb2xsZXIgZnJvbSAnLi4vSW1hZ2VDb250cm9sbGVyJztcclxuXHJcbi8vIERldGFpbENvbnRhaW5lcuyXkOyEnCBpbWFnZXPsmYAgdGl0bGXsnYQg7KSY7JW8ICDtlZjqs6AgaW1hZ2Vz64qUIO2VhO2EsOungeydhCDqsbDss5DrhpTslbwg65CoXHJcbi8vIOyKpO2BrOuhpCDsi5zqsIQodHJhbnNpdGlvblRpbWUpIGRlZmF1bHQgMey0iFxyXG4vLyDtmZTrqbQg7KCE7ZmYIOqwhOqyqSAodGltZUludGVydmFsKSAy7LSIXHJcblxyXG5jb25zdCBEZXRhaWxJbWFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW1hZ2VzLCB0aXRsZSwgdHJhbnNpdGlvblRpbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtkZWdyZWUsIHNldERlZ3JlZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgcmVzaXplRW5kID0gKGZ1bmMpID0+IHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDEwMCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxlZnRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVncmVlID09PSAwKSByZXR1cm47XHJcbiAgICBzZXREZWdyZWUoZGVncmVlIC0gMSk7XHJcbiAgICAvKlxyXG4gICAgaWYgKGRlZ3JlZSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgZGVncmVlIC09IDE7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IGZpcnN0SXRlbS5jbGllbnRXaWR0aDtcclxuICAgIGltYWdlTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtpbnRlcnZhbCAqIGRlZ3JlZX1weClgO1xyXG4gICAgaW1hZ2VDb3VudGluZy5pbm5lclRleHQgPSBgICR7ZGVncmVlICsgMX0gYDtcclxuICAgICovXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmlnaHRTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVncmVlID09PSBpbWFnZXMubGVuZ3RoIC0gMSkgcmV0dXJuO1xyXG4gICAgc2V0RGVncmVlKChkZWdyZWUgKyAxKSAlIGltYWdlcy5sZW5ndGgpO1xyXG4gICAgLypcclxuICAgIGltYWdlTGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtpbnRlcnZhbCAqIGRlZ3JlZX1weClgO1xyXG4gICAgaW1hZ2VDb3VudGluZy5pbm5lclRleHQgPSBgICR7ZGVncmVlICsgMX0gYDtcclxuICAgICovXHJcbiAgfTtcclxuICAvLyBwcm9wcyDri6Qg64SY6rKo7KSY7JW8IO2VqFxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDb250cm9sbGVyXHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvblRpbWV9XHJcbiAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICByZXNpemVFbmQ9e3Jlc2l6ZUVuZH1cclxuICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICBsZWZ0U2Nyb2xsPXtsZWZ0U2Nyb2xsfVxyXG4gICAgICByaWdodFNjcm9sbD17cmlnaHRTY3JvbGx9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5EZXRhaWxJbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHJhbnNpdGlvblRpbWU6IDAuNSxcclxufTtcclxuXHJcbkRldGFpbEltYWdlLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgdHJhbnNpdGlvblRpbWU6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxJbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuLy8g7J6Y7J6Y7ZWY6rKMIOyqvOqwpOyImCDsnojsnYQg6rKDIOqwmeydjFxyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Db3VudCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdG9Vc2VkTGVuLCB1c2VkTGVuLCBjYW5jZWxlZExlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc2VydmF0aW9uQ291bnRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fYm9vazJcIiAvPlxyXG4gICAgICAgICAgICAgIOyghOyytFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57dG9Vc2VkTGVuICsgdXNlZExlbiArIGNhbmNlbGVkTGVufTwvaDE+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2Jvb2tfc3NcIiAvPlxyXG4gICAgICAgICAgICAgIOydtOyaqeyYiOyglVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMT57dG9Vc2VkTGVufTwvaDE+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2NoZWNrXCIgLz5cclxuICAgICAgICAgICAgICDsnbTsmqnsmYTro4xcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3VzZWRMZW59PC9oMT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fYmFja1wiIC8+XHJcbiAgICAgICAgICAgICAg7Leo7IaMwrftmZjrtohcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e2NhbmNlbGVkTGVufTwvaDE+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZhdGlvbkNvdW50LnByb3BUeXBlcyA9IHtcclxuICB0b1VzZWRMZW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB1c2VkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgY2FuY2VsZWRMZW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmF0aW9uQ291bnQ7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBmb250Q29sb3IsIGJhY2tncm91bmRDb2xvciwgY2xpY2ssIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gdHlwZW9mIGNsaWNrID09PSAnZnVuY3Rpb24nID8gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJCdXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yLCBjb2xvcjogZm9udENvbG9yIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICkgOiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBjbGFzc05hbWU9XCJCdXR0b25cIlxyXG4gICAgICB0bz17Y2xpY2t9XHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciwgY29sb3I6IGZvbnRDb2xvciB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZm9udENvbG9yOiAnIzAwMCcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnI2Y0ZjRmNCcsXHJcbn07XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xpY2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuLypcclxuICog64Sk7J2067KEIOuwsOqyvSDstIjroZ3sg4k6ICMxZWM4MDAg6riA7J6Q7IOJICNmZmY7XHJcbiAqL1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBNYWluVmlldyBmcm9tICcuLi9NYWluVmlldyc7XHJcbmltcG9ydCBUYWJDb250cm9sbGVyIGZyb20gJy4uL1RhYkNvbnRyb2xsZXInO1xyXG5pbXBvcnQgUHJvZHVjdEJveCBmcm9tICcuLi9Qcm9kdWN0Qm94JztcclxuXHJcbmNvbnN0IE1haW5Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGJhc2lzQ291bnQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKDApOyAvLyDtmITsnqwg7ISg7YOd65CcIOy5tO2FjOqzoOumrCBpZFxyXG4gIGNvbnN0IFtwcm9kdWN0Q291bnQsIHNldFByb2R1Y3RDb3VudF0gPSB1c2VTdGF0ZSgwKTsgLy8gIOy5tO2FjOqzoOumrOydmCDsoJztkogg6rCc7IiYXHJcbiAgY29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZShBcnJheSg2KS5maWxsKG51bGwpKTsgLy8gWzxNYWluVmlldy8+LDxNYWluVmlldy8+XVxyXG5cclxuICBsZXQgc2hvd2luZ0NvdW50ID0gMDtcclxuICBjb25zdCBjYXRlZ29yeVByb2R1Y3RzID0gQXJyYXkoNikuZmlsbChudWxsKTtcclxuICBjb25zdCB2aWV3c0FyciA9IEFycmF5KDYpLmZpbGwobnVsbCk7XHJcbiAgY29uc3QgbGFiZWxzID0gWyfsoITssrQnLCAn7KCE7IucJywgJ+uupOyngOy7rCcsICfsvZjshJztirgnLCAn7YG0656Y7IudJywgJ+yXsOq3uSddO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQudGl0bGUgPSAn64Sk7J2067KEIOyYiOyVvSc7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICBkYXRhOiB7IGl0ZW1zIH0sXHJcbiAgICAgICAgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9kdWN0cycpO1xyXG4gICAgICAgIGNhdGVnb3J5UHJvZHVjdHNbMF0gPSBpdGVtcztcclxuICAgICAgICB2aWV3c0FyclswXSA9IGl0ZW1zXHJcbiAgICAgICAgICAuc2xpY2UoYmFzaXNDb3VudClcclxuICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiA8UHJvZHVjdEJveCBpdGVtSW5mbz17dmFsdWV9IC8+KTtcclxuICAgICAgICBzaG93aW5nQ291bnQgKz0gYmFzaXNDb3VudDtcclxuICAgICAgICBzZXRQcm9kdWN0Q291bnQoaXRlbXMubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBjb3BpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgICAgY29waWVkVmlld3NbMF0gPSAoXHJcbiAgICAgICAgICA8TWFpblZpZXcgcHJvZHVjdENvdW50PXtwcm9kdWN0Q291bnR9IHByb2R1Y3RzPXt2aWV3c0FyclswXX0gLz5cclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFZpZXdzKGNvcGllZFZpZXdzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoUHJvZHVjdHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dNb3JlUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHZpZXdzTGVuID0gdmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoO1xyXG4gICAgaWYgKHZpZXdzTGVuID49IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnQgfHwgdmlld3NMZW4gPiBzaG93aW5nQ291bnQpIHtcclxuICAgICAgLy8g67O07Jes7KO86riw66eMIO2VmOuptCDrkKhcclxuICAgICAgY29uc3QgZmluYWxJbmQgPVxyXG4gICAgICAgIHZpZXdzTGVuID49IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnRcclxuICAgICAgICAgID8gc2hvd2luZ0NvdW50ICsgYmFzaXNDb3VudFxyXG4gICAgICAgICAgOiB2aWV3c0xlbjtcclxuICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBjb3BpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnNsaWNlKGZpbmFsSW5kKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBzaG93aW5nQ291bnQgPSBmaW5hbEluZDtcclxuICAgICAgc2V0Vmlld3MoY29waWVkVmlld3MpO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aCA+XHJcbiAgICAgIHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aFxyXG4gICAgKSB7XHJcbiAgICAgIC8vIOuEo+ydgOuSpCDrs7Tsl6zspIxcclxuICAgICAgY29uc3QgcHJvZHVjdHNMZW4gPSBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aDtcclxuICAgICAgY29uc3QgZmluYWxJbmQgPVxyXG4gICAgICAgIHByb2R1Y3RzTGVuID49IHZpZXdzTGVuICsgYmFzaXNDb3VudFxyXG4gICAgICAgICAgPyB2aWV3c0xlbiArIGJhc2lzQ291bnRcclxuICAgICAgICAgIDogcHJvZHVjdHNMZW47XHJcbiAgICAgIGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV1cclxuICAgICAgICAuc2xpY2Uodmlld3NMZW4sIGZpbmFsSW5kKVxyXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ucHVzaCg8UHJvZHVjdEJveCBpdGVtSW5mbz17dmFsdWV9IC8+KTtcclxuICAgICAgICB9KTtcclxuICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBjb3BpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIHNob3dpbmdDb3VudCA9IGZpbmFsSW5kO1xyXG4gICAgICBzZXRWaWV3cyhjb3BpZWRWaWV3cyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIOy5tO2FjOqzoOumrCDrsJTrgIzsl4jsnYQg65WMIHZpZXfrsJTqvrjripQg6rO87KCVXHJcbiAgICAvLyAxLiDstZzstIgg6rO87KCVXHJcbiAgICAvLyAyLiDstZzstIgg7JWE64uQIOuVjFxyXG5cclxuICAgIGlmICghY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XSkge1xyXG4gICAgICAvLyAxLuy1nOy0iCDqs7zsoJVcclxuICAgICAgLy8gc2VsZWN0ZWRDYXRlZ29yeeyXkCAg7IOB7ZKI7KCV67O066W8IOuEo+qzoFxyXG4gICAgICAvLyB2aWV3c+yXkCBNYWluVmlld+ulvCDsg53shLHtlahcclxuICAgICAgY29uc3Qgc3BlY2lmaWNQcm9kdWN0cyA9IFtdO1xyXG4gICAgICBjb25zdCBbYWxsUHJvZHVjdHNdID0gY2F0ZWdvcnlQcm9kdWN0cztcclxuICAgICAgYWxsUHJvZHVjdHMuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUuY2F0ZWdvcnlJZCA9PT0gc2VsZWN0ZWRDYXRlZ29yeSkge1xyXG4gICAgICAgICAgc3BlY2lmaWNQcm9kdWN0cy5wdXNoKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldID0gc3BlY2lmaWNQcm9kdWN0cztcclxuICAgICAgc2V0UHJvZHVjdENvdW50KHNwZWNpZmljUHJvZHVjdHMubGVuZ3RoKTtcclxuICAgICAgLy8gdmlld3Psl5AgTWFpblZpZXfrpbwg7IOd7ISx7ZWoXHJcbiAgICAgIHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldID0gc3BlY2lmaWNQcm9kdWN0c1xyXG4gICAgICAgIC5zbGljZShiYXNpc0NvdW50KVxyXG4gICAgICAgIC5tYXAoKHZhbHVlKSA9PiA8UHJvZHVjdEJveCBpdGVtSW5mbz17dmFsdWV9IC8+KTtcclxuICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBjb3BpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIHNob3dpbmdDb3VudCA9IGJhc2lzQ291bnQ7XHJcbiAgICAgIHNldFZpZXdzKGNvcGllZFZpZXdzKTtcclxuICAgIH1cclxuICAgIGlmICh2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGggPj0gYmFzaXNDb3VudCkge1xyXG4gICAgICAvLyBsZW5ndGjripQg7J6E7IucIO2MkOuzhCBNYWluVmlld+unjCDsnojslrTshJwg7JWI7JeQIOqwr+yImCDtjIzslYXtlbTslbwg65CoXHJcbiAgICAgIC8vIDIuIGJhc2lzQ291bnTrnpEg7J287LmY7ZWgIOuVjFxyXG4gICAgICBzZXRQcm9kdWN0Q291bnQoY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBjb3BpZWRWaWV3cyA9IFsuLi52aWV3c107XHJcbiAgICAgIGNvcGllZFZpZXdzW3NlbGVjdGVkQ2F0ZWdvcnldID0gKFxyXG4gICAgICAgIDxNYWluVmlld1xyXG4gICAgICAgICAgcHJvZHVjdENvdW50PXtwcm9kdWN0Q291bnR9XHJcbiAgICAgICAgICBwcm9kdWN0cz17dmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0uc2xpY2UoYmFzaXNDb3VudCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgc2hvd2luZ0NvdW50ID0gYmFzaXNDb3VudDtcclxuICAgICAgc2V0Vmlld3MoY29waWVkVmlld3MpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZENhdGVnb3J5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5Db250YWluZXJcIj5cclxuICAgICAgPFRhYkNvbnRyb2xsZXJcclxuICAgICAgICBsYWJlbHM9e2xhYmVsc31cclxuICAgICAgICB2aWV3cz17dmlld3N9XHJcbiAgICAgICAgYWxyYW09e3NldFNlbGVjdGVkQ2F0ZWdvcnl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1vcmVcIiBvbkNsaWNrPXtzaG93TW9yZVByb2R1Y3R9PlxyXG4gICAgICAgIOuNlOuztOq4sFxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTWFpbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFzaXNDb3VudDogNCxcclxufTtcclxuXHJcbk1haW5Db250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGJhc2lzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICBzZXRJc01vZGFsOiAoKSA9PiB7fSxcclxuICBzZXRNb2RhbENoaWxkcmVuOiAoKSA9PiB7fSxcclxuICBhbGVydE1vZGFsOiAoKSA9PiB7fSxcclxuICBjb25maXJtTW9kYWw6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc01vZGFsLCBzZXRJc01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxDaGlsZHJlbiwgc2V0TW9kYWxDaGlsZHJlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGFsZXJ0TW9kYWwgPSAodGV4dCkgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3RleHR9PC9oMT5cclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogJ+2ZleyduCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PixcclxuICAgICk7XHJcbiAgICBzZXRJc01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1Nb2RhbCA9ICh0ZXh0LCBhY3Rpb24pID0+IHtcclxuICAgIHNldE1vZGFsQ2hpbGRyZW4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0ZXh0fTwvaDE+XHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICftmZXsnbgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICfst6jshownLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc01vZGFsKSB7XHJcbiAgICAgIHNldE1vZGFsQ2hpbGRyZW4oJycpO1xyXG4gICAgfVxyXG4gIH0sIFtpc01vZGFsXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgc2V0SXNNb2RhbCxcclxuICAgICAgICBzZXRNb2RhbENoaWxkcmVuLFxyXG4gICAgICAgIGFsZXJ0TW9kYWwsXHJcbiAgICAgICAgY29uZmlybU1vZGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIHtpc01vZGFsID8gPE1vZGFsPnttb2RhbENoaWxkcmVufTwvTW9kYWw+IDogJyd9XHJcbiAgICA8L01vZGFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuZXhwb3J0IHsgTW9kYWxDb250ZXh0IH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHRyYW5zZm9ybU1vbmV5VW5pdCwgcHJpY2VUeXBlTWFwcGVyIH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSW5wdXRUaWNrZXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RQcmljZXMsIHRpY2tldHMsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiSW5wdXRUaWNrZXRcIj5cclxuICAgICAge3Byb2R1Y3RQcmljZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlYWNoVGlja2V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHtgJHt0cmFuc2Zvcm1Nb25leVVuaXQodmFsdWUucHJpY2UpfSDsm5BgfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgeygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgPiBOdW1iZXIuRVBTSUxPTikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbENvc3QgPVxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wcmljZSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgxIC0gTnVtYmVyKHZhbHVlLmRpc2NvdW50UmF0ZSkgLyAxMDApIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YCR7dHJhbnNmb3JtTW9uZXlVbml0KG9yaWdpbmFsQ29zdCl97JuQICgke01hdGgucm91bmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgKX0lIO2VoOyduOqwgClgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRqdXN0VGlja2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwcl9Cb29rMiBpY29fbWludXMzICR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja2V0c1tpbmRleF0gPyAnJyA6ICdkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUNSRU1FTlQnLCB3aGVyZTogaW5kZXggfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgcmVzcnZhdGlvblRpY2tldCR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsc3NOYW1lPXt0aWNrZXRzW2luZGV4XSA/ICcnIDogJ2Rpc2FibGVkJ31cclxuICAgICAgICAgICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aWNrZXRzW2luZGV4XX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fcGx1czNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnSU5DUkVNRU5UJywgd2hlcmU6IGluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD57YCR7dHJhbnNmb3JtTW9uZXlVbml0KHZhbHVlLnByaWNlICogdGlja2V0c1tpbmRleF0pfSDsm5BgfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuSW5wdXRUaWNrZXQucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBkaXNjb3VudFJhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICB0aWNrZXRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFRpY2tldDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgVGlja2V0IGZyb20gJy4uL1RpY2tldCc7XHJcbmltcG9ydCBSZXNlcnZhdGlvbkNvdW50IGZyb20gJy4uL1Jlc2VydmF0aW9uQ291bnQnO1xyXG5cclxuY29uc3QgQWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbjogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuY29uc3QgUmVzZXJ2YXRpb25Db250YWluZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGVtYWlsSWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFt0b1VzZWQsIHNldFRvVXNlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvVXNlZExlbiwgc2V0VG9Vc2VkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjYW5jZWxlZCwgc2V0Q2FuY2VsZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYW5jZWxlZExlbiwgc2V0Q2FuY2VsZWRMZW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuICBsZXQgdXNlZDtcclxuICBsZXQgdXNlZExlbjtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Jlc2VydmF0aW9ucy8ke2VtYWlsSWR9YCk7XHJcbiAgICAgIHNldFRvVXNlZChkYXRhLnRvVXNlZCk7XHJcbiAgICAgIHNldFRvVXNlZExlbihkYXRhLnRvVXNlZC5sZW5ndGgpO1xyXG4gICAgICBzZXRDYW5jZWxlZChkYXRhLmNhbmNlbGVkKTtcclxuICAgICAgc2V0Q2FuY2VsZWRMZW4oZGF0YS5jYW5jZWxlZC5sZW5ndGgpO1xyXG4gICAgICB1c2VkID0gZGF0YS51c2VkO1xyXG4gICAgICB1c2VkTGVuID0gZGF0YS51c2VkLmxlbmd0aDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgY2FuY2VsUmVzZXJ2YXRpb24gPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvcmVzZXJ2YXRpb24vJHtpZH1gKTtcclxuICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICBhbGVydE1vZGFsKCfsnpjrqrvrkJwg7JqU7LKt7J6F64uI64ukJyk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIC8vIOyYpOulmOuCmOuptCDrsLDsl7Qg67O17IKs7ZW07JW87ZWoXHJcbiAgICAgIGNvbnN0IHRvRGVsZXRlSW5kZXggPSB0b1VzZWQuZmluZEluZGV4KFxyXG4gICAgICAgICh2YWx1ZSkgPT4gdmFsdWUucmVzZXJ2YXRpb25JbmZvSWQgPT09IGlkLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBjYW5jZWxlZEl0ZW0gPSB0b1VzZWQuc3BsaWNlKHRvRGVsZXRlSW5kZXgsIDEpO1xyXG4gICAgICBjb25zdCB0b0luc2VydEluZGV4ID0gY2FuY2VsZWQuZmluZEluZGV4KFxyXG4gICAgICAgICh2YWx1ZSkgPT4gdmFsdWUucmVzZXJ2YXRpb25JbmZvSWQgPiBpZCxcclxuICAgICAgKTtcclxuICAgICAgaWYgKHRvSW5zZXJ0SW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgY2FuY2VsZWQucHVzaChjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhbmNlbGVkLnNwbGljZSh0b0luc2VydEluZGV4LCAwLCBjYW5jZWxlZEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRvVXNlZCh0b1VzZWQpO1xyXG4gICAgICBzZXRUb1VzZWRMZW4odG9Vc2VkTGVuIC0gMSk7XHJcbiAgICAgIHNldENhbmNlbGVkKGNhbmNlbGVkKTtcclxuICAgICAgc2V0Q2FuY2VsZWRMZW4oY2FuY2VsZWRMZW4gKyAxKTtcclxuICAgICAgYWxlcnRNb2RhbCgn7JiI7JW97J20IOy3qOyGjOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uZmlybU1vZGFsKFxyXG4gICAgICAgICftlZzrsogg7Leo7IaM7ZWY7Iuc66m0IOuLpOyLnCDrkJjrj4zrprQg7IiYIOyXhuyKteuLiOuLpC4g6re4656Y64+EIO2VmOyLnOqyoOyKteuLiOq5jD8nLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGNhbmNlbFJlc2VydmF0aW9uKGlkKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFjdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc2VydmF0aW9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgIHRvVXNlZExlbj17dG9Vc2VkTGVufVxyXG4gICAgICAgICAgdXNlZExlbj17dXNlZExlbn1cclxuICAgICAgICAgIGNhbmNlbGVkTGVuPXtjYW5jZWxlZExlbn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUaWNrZXQgaW5mb3M9e3RvVXNlZH0gYWN0aW9ucz1cImNhbmNlbFwiIGlzR3JlZW4+XHJcbiAgICAgICAgICDsmIjslb0g7ZmV7KCVXHJcbiAgICAgICAgPC9UaWNrZXQ+XHJcbiAgICAgICAgPFRpY2tldCBpbmZvcz17dXNlZH0gYWN0aW9ucz1cIndyaXRlUmV2aWV3XCI+XHJcbiAgICAgICAgICDsnbTsmqkg7JmE66OMXHJcbiAgICAgICAgPC9UaWNrZXQ+XHJcbiAgICAgICAgPFRpY2tldCBpbmZvcz17Y2FuY2VsZWR9Puy3qOyGjOuQnCDsmIjslb08L1RpY2tldD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FjdGlvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmF0aW9uQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBlbWFpbElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvbnRhaW5lcjtcclxuZXhwb3J0IHsgQWN0aW9uQ29udGV4dCB9O1xyXG5cclxuLypcclxuUmVzZXJ2YXRpb25Db250YWluZXIg4oaSIFJlc2VydmF0aW9uQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaSIFRpY2tldCDihpIgVGlja2V0SGVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDihpIgVGlja2V0SW5mb0xpc3Qg4oaSIFRpY2tldEluZm9cclxuKi9cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVGFiQ29udHJvbGxlciBmcm9tICcuLi9UYWJDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IFByb2R1Y3RJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGlzcGxheUluZm86IHtcclxuICAgICAgcHJvZHVjdENvbnRlbnQsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgICAgcGxhY2VMb3QsXHJcbiAgICAgIHBsYWNlU3RyZWV0LFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHRlbGVwaG9uZSxcclxuICAgIH0sXHJcbiAgICBsb2NhdGlvbkltZ1NyYyxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgbGFiZWxzID0gWyfsg4HshLjsoJXrs7QnLCAn7Jik7Iuc64qU6ri4J107XHJcbiAgY29uc3Qgdmlld3MgPSBbXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwcm9kdWN0RGV0YWlsXCI+XHJcbiAgICAgIDxoMj5b7IaM6rCcXTwvaDI+XHJcbiAgICAgIDxwPntwcm9kdWN0Q29udGVudH08L3A+XHJcbiAgICAgIDxoMj5b6rO17KeA7IKs7ZWtXTwvaDI+XHJcbiAgICA8L2FydGljbGU+LFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiZGlyZWN0aW9uc1wiPlxyXG4gICAgICA8aW1nIHNyYz17YC8ke2xvY2F0aW9uSW1nU3JjfWB9IGFsdD1cImxvY2F0aW9uXCIgLz5cclxuICAgICAgPGgyPntwcm9kdWN0RGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NUZXh0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1waW40XCIgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57cGxhY2VMb3R9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmV5VGV4dFwiPuyngOuyiDwvc3Bhbj5cclxuICAgICAgICAgICAge3BsYWNlU3RyZWV0fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmV5VGV4dFwiPntwbGFjZU5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2FsbDJcIiAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPnt0ZWxlcGhvbmV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZpbmRSb2FkXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXBhdGgtZmluZDJcIiAvPlxyXG4gICAgICAgICAgICDquLjssL7quLBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNhci1maW5kMlwiIC8+XHJcbiAgICAgICAgICAgIOuCtOu5hOqyjOydtOyFmFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPixcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUHJvZHVjdEluZm9cIj5cclxuICAgICAgPFRhYkNvbnRyb2xsZXIgbGFiZWxzPXtsYWJlbHN9IHZpZXdzPXt2aWV3c30gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdEluZm8ucHJvcFR5cGVzID0ge1xyXG4gIGRpc3BsYXlJbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgcHJvZHVjdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VMb3Q6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlU3RyZWV0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRlbGVwaG9uZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgbG9jYXRpb25JbWdTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdG9wIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJGb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7KChpc1RvcE5lZWQpID0+IHtcclxuICAgICAgICAgIGlmIChpc1RvcE5lZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tdXAxXCIgLz5cclxuICAgICAgICAgICAgICAgIFRPUFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSh0b3ApfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNhdXRpb25cIj5cclxuICAgICAgICAgIOuEpOydtOuyhCjso7wp64qUIO2GteyLoO2MkOunpOydmCDri7nsgqzsnpDqsIAg7JWE64uI66mwLCDsg4HtkojsnZjsoJXrs7QsIOqxsOuemOyhsOqxtCwg7J207JqpIOuwj1xyXG4gICAgICAgICAg7ZmY67aIIOuTseqzvCDqtIDroKjtlZwg7J2Y66y07JmAIOyxheyehOydgCDqsIEg7ZqM7JuQ7JeQ6rKMIOyeiOyKteuLiOuLpC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+wqkgTkFWRVIgQ29ycC48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdG9wOiB0cnVlLFxyXG59O1xyXG5cclxuRm9vdGVyLnByb3BUeXBlcyA9IHtcclxuICB0b3A6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBwcm9wcyDsiJjsoJVcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFJldmlld1N1bW1hcnkgZnJvbSAnLi4vUmV2aWV3U3VtbWFyeSc7XHJcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4uL1Jldmlld0xpc3QnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUmV2aWV3Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8g7KCE7LK07KCB7Jy866GcIOunjOuTpOqzoCDri6Tsi5wg6rKA7YagXHJcbiAgY29uc3QgeyBpc0JyaWVmLCBkaXNwbGF5SW5mb0lkIH0gPSBwcm9wcztcclxuICBjb25zdCBbcmV2aWV3cywgc2V0UmV2aWV3c10gPSB1c2VTdGF0ZShwcm9wcy5yZXZpZXdzKTtcclxuICBjb25zdCBbYXZlcmFnZVNjb3JlLCBzZXRBdmVyYWdlU2NvcmVdID0gdXNlU3RhdGUocHJvcHMuYXZlcmFnZVNjb3JlKTtcclxuICBjb25zdCBbaXNNb2RpZmlhYmxlLCBzZXRJc01vZGlmaWFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtleERhdGEsIHNldEV4RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgeyBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfSA9IHVzZUNvbnRleHQoTW9kYWxDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHJldmlld3PqsIAg64us65287KGM7J2EIOuVjCBhdmVyYWdlU2NvcmXrsJTqvrjripQgZWZmZWN0XHJcbiAgICBjb25zdCBtb2RpZmllZEF2ZXJhZ2VTY29yZSA9XHJcbiAgICAgIHJldmlld3MucmVkdWNlKChhY2N1bSwgY3VycmVudCkgPT4ge1xyXG4gICAgICAgIGFjY3VtICsgTnVtYmVyKGN1cnJlbnQuc2NvcmUpO1xyXG4gICAgICB9KSAvIHJldmlld3MubGVuZ3RoO1xyXG4gICAgc2V0QXZlcmFnZVNjb3JlKG1vZGlmaWVkQXZlcmFnZVNjb3JlKTtcclxuICB9LCBbcmV2aWV3c10pO1xyXG5cclxuICBjb25zdCBkaXNwbGF5U3RhciA9IChzY29yZSwgbWF4U2NvcmUgPSA1KSA9PiB7XHJcbiAgICAvLyBhdmVyYWdlU2NvcmXsl5Ag66ee6rKMIOuzhOygkOydhCDrpqzthLTtlZjripQg7ZWo7IiYXHJcbiAgICBjb25zdCBmaWxsQ291bnQgPSBNYXRoLmZsb29yKHNjb3JlKTtcclxuICAgIGNvbnN0IG5vdEZpbGxDb3VudCA9IG1heFNjb3JlIC0gTWF0aC5jZWlsKHNjb3JlKTtcclxuICAgIGNvbnN0IHJhdGlvQ291bnQgPSBNYXRoLnJvdW5kKHNjb3JlICogMTApIC8gMTAgLSBmaWxsQ291bnQ7XHJcbiAgICBjb25zdCBzdGFycyA9IFtdO1xyXG4gICAgXy50aW1lcyhmaWxsQ291bnQsICgpID0+IHtcclxuICAgICAgc3RhcnMucHVzaCg8aSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiBnZXRTdGFyXCIgLz4pO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocmF0aW9Db3VudCA+IE51bWJlci5FUFNJTE9OKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgICc6YmVmb3JlJzoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byBSaWdodCwjZjAwICR7TWF0aC5yb3VuZChcclxuICAgICAgICAgICAgcmF0aW9Db3VudCAqIDEwMCxcclxuICAgICAgICAgICl9JSwjRTZFNkU2ICR7TWF0aC5yb3VuZCgoMSAtIHJhdGlvQ291bnQpICogMTAwKX0lKWAsXHJcbiAgICAgICAgICBjb250ZW50OiAnRUFBMycsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxyXG4gICAgICAgICAgV2Via2l0QmFja2dyb3VuZENsaXA6ICd0ZXh0JyxcclxuICAgICAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICBkaXNwbGF5OiAnaW5pdGlhbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgICAgc3RhcnMucHVzaCg8aSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiByYXRpb1N0YXJcIiBzdHlsZT17c3R5bGV9IC8+KTtcclxuICAgIH1cclxuICAgIF8udGltZXMobm90RmlsbENvdW50LCAoKSA9PiB7XHJcbiAgICAgIHN0YXJzLnB1c2goPGkgY2xhc3NOYW1lPVwiZm4gZm4tc3RhcjIgbm90R2V0U3RhclwiIC8+KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJDb3VudFwiPntzdGFyc308L3NwYW4+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVkaXRDb21tZW50ID0gKGNvbW1lbnRJZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBzdGF0dXMsIHN0YXR1c1RleHQgfSxcclxuICAgICAgICB9ID0gYXhpb3MuZ2V0KGAvYXV0aC9lZGl0L2NvbW1lbnRzLyR7Y29tbWVudElkfWApO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcmV2aWV3cy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICB2YWx1ZS5jb21tZW50SWQgPT09IGNvbW1lbnRJZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB7IHNjb3JlLCBjb21tZW50LCBjb21tZW50SW1hZ2VzIH0gPSByZXZpZXdzW2luZGV4XTtcclxuICAgICAgICBzZXRFeERhdGEoe1xyXG4gICAgICAgICAgaWQ6IGNvbW1lbnRJZCxcclxuICAgICAgICAgIHNjb3JlLFxyXG4gICAgICAgICAgY29tbWVudCxcclxuICAgICAgICAgIGltYWdlU3JjOiBjb21tZW50SW1hZ2VzLmxlbmd0aCA/IGNvbW1lbnRJbWFnZXNbMF0uc2F2ZUZpbGVOYW1lIDogJycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0SXNNb2RpZmlhYmxlKHRydWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsgq3soJwg67KE7Yq87J2EIOuIhOultOqzoCDtmZXsnbjsnYQg64iM66CA7J2EIOyLnOydmCDtlonrj5lcclxuICAgIHJldHVybiBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgcmVzcG9uc2U6IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0sXHJcbiAgICAgICAgfSA9IGF4aW9zLmRlbGV0ZShgL2FwaS9yZXNlcnZhdGlvbnMvY29tbWVudHMvJHtjb21tZW50SWR9YCk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBhbGVydE1vZGFsKHN0YXR1c1RleHQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoJ+umrOu3sOqwgCDsgq3soJzrkJjsl4jsirXri4jri6QnKTtcclxuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkUmV2aWV3cyA9IHJldmlld3MuZmlsdGVyKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5jb21tZW50SWQgIT09IGNvbW1lbnRJZDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0UmV2aWV3cyhtb2RpZmllZFJldmlld3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtRGVsZXRlID0gKGNvbW1lbnRJZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IKt7KCcIOuyhO2KvOydhCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgY29uZmlybU1vZGFsKCfrpqzrt7Drpbwg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMPycsIGRlbGV0ZUNvbW1lbnQoY29tbWVudElkKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybUVkaXQgPSAoaWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirzsnYQg64iE66W06rOgIOyImOyglSDrsoTtirzsnYQg64uk7IucIOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICByZXR1cm4gKHN1Ym1pdCwgc2NvcmUsIGNvbW1lbnQsIGltYWdlU3JjKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbCgn66as67ew66W8IOyImOygle2VmOyLnOqyoOyKteuLiOq5jD8nLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNQcm9jZXNzZWQgPSBzdWJtaXQoKTtcclxuICAgICAgICBpZiAoaXNQcm9jZXNzZWQpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmV2aWV3cy5maW5kSW5kZXgoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNvbW1lbnRJZCA9PT0gaWQ7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IG1vZGlmaWVkUmV2aWV3cyA9IFsuLi5yZXZpZXdzXTtcclxuICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudCA9IGNvbW1lbnQ7XHJcbiAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLnNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgICBpZiAobW9kaWZpZWRSZXZpZXdzW2luZGV4XS5jb21tZW50SW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXNbMF0uc2F2ZUZpbGVOYW1lID0gaW1hZ2VTcmM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRSZXZpZXdzKG1vZGlmaWVkUmV2aWV3cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEV4RGF0YSh7fSk7XHJcbiAgICAgICAgc2V0SXNNb2RpZmlhYmxlKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1DYW5jZWwgPSAoKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq87J2EIOuIhOultOqzoCDst6jshozrpbwg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIGNvbmZpcm1Nb2RhbCgn66as67ewIOyImOygleydhCDst6jshoztlZjsi5zqsqDsirXri4jquYw/JywgKCkgPT4ge1xyXG4gICAgICBzZXRJc01vZGlmaWFibGUoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkNvbW1lbnRDb250YWluZXJcIj5cclxuICAgICAgPFJldmlld1N1bW1hcnlcclxuICAgICAgICBhdmVyYWdlU2NvcmU9e2F2ZXJhZ2VTY29yZSB8fCAnMCd9XHJcbiAgICAgICAgcmV2aWV3Q291bnQ9e3Jldmlld3MubGVuZ3RofVxyXG4gICAgICAgIGRpc3BsYXlTdGFyPXtkaXNwbGF5U3Rhcn1cclxuICAgICAgLz5cclxuICAgICAgPFJldmlld0xpc3RcclxuICAgICAgICByZXZpZXdzPXtyZXZpZXdzfVxyXG4gICAgICAgIGlzQnJpZWY9e2lzQnJpZWZ9XHJcbiAgICAgICAgaXNNb2RpZmlhYmxlPXtpc01vZGlmaWFibGV9XHJcbiAgICAgICAgZXhEYXRhPXtleERhdGF9XHJcbiAgICAgICAgY29uZmlybURlbGV0ZT17Y29uZmlybURlbGV0ZX1cclxuICAgICAgICBjb25maXJtQ2FuY2VsPXtjb25maXJtQ2FuY2VsfVxyXG4gICAgICAgIGNvbmZpcm1FZGl0PXtjb25maXJtRWRpdH1cclxuICAgICAgICBlZGl0Q29tbWVudD17ZWRpdENvbW1lbnR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxhc2lkZT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWFsYXJtMVwiIC8+XHJcbiAgICAgICAgICDrhKTsnbTrsoQg7JiI7JW97J2EIO2Gte2VtCDsi6TsoJwg67Cp66y47ZWcIOydtOyaqeyekOqwgCDrgqjquLQg7Y+J6rCA7J6F64uI64ukLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9hc2lkZT5cclxuICAgICAge2lzQnJpZWYgPyAoXHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0U5RUNFRicsXHJcbiAgICAgICAgICAgICAgY2xpY2s6IGAvcmV2aWV3LyR7ZGlzcGxheUluZm9JZH1gLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiAoXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAg7JiI66ek7J6QIOumrOu3sCDrjZTrs7TquLBcclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tZm9yd2FyZDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0JyaWVmOiB0cnVlLFxyXG59O1xyXG5cclxuUmV2aWV3Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgYXZlcmFnZVNjb3JlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcmV2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBwcm9kdWN0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHJlc2VydmF0aW9uRW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcmVzZXJ2YXRpb25JbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgY29tbWVudEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgIGRlbGV0ZUZsYWc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgICAgIHNhdmVGaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIH0pLmlzUmVxdWlyZWQsXHJcbiAgICAgICksXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgaXNCcmllZjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkxvZ2luRm9ybVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQm94XCI+XHJcbiAgICAgICAgICA8aDE+67mE7ZqM7JuQIOyYiOyVve2ZleyduDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+7JiI7JW97J6QIOydtOuplOydvCDsnoXroKU8L3A+XHJcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiYXV0aC9sb2dpblwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICBzZXRFbWFpbCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBsYWNlSG9sZGVyPVwieHh4eHhAbmF2ZXIuY29tXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi64K0IOyYiOyVvSDtmZXsnbhcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0Qm94ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbUluZm86IHtcclxuICAgICAgZGlzcGxheUluZm9JZCxcclxuICAgICAgcHJvZHVjdEltYWdlVXJsLFxyXG4gICAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICAgIHBsYWNlTmFtZSxcclxuICAgICAgcHJvZHVjdENvbnRlbnQsXHJcbiAgICB9LFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNGb2xkLCBzZXRJc0ZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzSWNvblNob3dpbmcsIHNldElzSWNvblNob3dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGRldGFpbFRleHQgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0ZXh0T2JqO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRyaW1tZWRUZXh0ID0gcHJvZHVjdENvbnRlbnQudHJpbSgpO1xyXG4gICAgdHJpbW1lZFRleHQgPSB0cmltbWVkVGV4dC5yZXBsYWNlKCdcXG4nLCAnJyk7XHJcbiAgICBpZiAodHJpbW1lZFRleHQubGVuZ3RoID4gbGltaXQpIHtcclxuICAgICAgY29uc3QgdGV4dFNpbXBsZSA9IHRyaW1tZWRUZXh0LnNsaWNlKDAsIGxpbWl0KTtcclxuICAgICAgY29uc3QgdGV4dERldGFpbCA9IHRyaW1tZWRUZXh0LnNsaWNlKGxpbWl0KTtcclxuICAgICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0ZXh0U2ltcGxlLCBkZXRhaWw6IHRleHREZXRhaWwgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRPYmogPSB7IHNpbXBsZTogdHJpbW1lZFRleHQsIGRldGFpbDogJycgfTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dBbmRIaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcGltbWVkaWF0ZTtcclxuICAgIGlmIChpc0ZvbGQpIHtcclxuICAgICAgc2V0SXNGb2xkKGZhbHNlKTtcclxuICAgICAgJChkZXRhaWxUZXh0LmN1cnJlbnQpLnNsaWRlRG93bigxMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNGb2xkKHRydWUpO1xyXG4gICAgICAkKGRldGFpbFRleHQuY3VycmVudCkuc2xpZGVVcCgxMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJQcm9kdWN0Qm94XCI+XHJcbiAgICAgIDxMaW5rIHRvPXtgL2RldGFpbC8ke2Rpc3BsYXlJbmZvSWR9YH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGhvdG9cIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiLyR7cHJvZHVjdEltYWdlVXJsfVwiKWAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XHJcbiAgICAgICAgICA8aDE+e3Byb2R1Y3REZXNjcmlwdGlvbn08L2gxPlxyXG4gICAgICAgICAgPGgyPntwbGFjZU5hbWV9PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYWluVGV4dFwiXHJcbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0ljb25TaG93aW5nKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNJY29uU2hvd2luZyhmYWxzZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge3RleHRPYmouc2ltcGxlfVxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzRm9sZCA/ICdpbmxpbmUnIDogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3JlRGVzY1wiXHJcbiAgICAgICAgICAgICAgICByZWY9e2RldGFpbFRleHR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGV4dE9iai5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm4gJHtpc0ZvbGQgPyAnZm4tZG90czInIDogJ2ZuLXVwMid9YH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FuZEhpZGV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGlzSWNvblNob3dpbmcgPyAnIzAwMCcgOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPHA+e3RleHRPYmouc2ltcGxlfTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdEJveC5wcm9wVHlwZXMgPSB7XHJcbiAgaXRlbUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBkaXNwbGF5SW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0SW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0Q29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Qm94O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcHJpY2VUeXBlTWFwcGVyLCB0cmFuc2Zvcm1Nb25leVVuaXQgfSBmcm9tICcuLi8uLi9qcy9jb21tb24nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IEFjdGlvbkNvbnRleHQgfSBmcm9tICcuLi9SZXNlcnZhdGlvbkNvbnRhaW5lcic7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaW5mbzoge1xyXG4gICAgICByZXNlcnZhdGlvbkluZm9JZCxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHJlc2VydmF0aW9uRGF0ZSxcclxuICAgICAgcmVzZXJ2YXRpb25OYW1lLFxyXG4gICAgICByZXNlcnZhdGlvblRlbCxcclxuICAgICAgcHJpY2VJbmZvLFxyXG4gICAgICBwbGFjZU5hbWUsXHJcbiAgICAgIHRvdGFsUHJpY2UsXHJcbiAgICAgIHByb2R1Y3RJZCxcclxuICAgIH0sXHJcbiAgICBhY3Rpb25zLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCB7IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiB9ID0gdXNlQ29udGV4dChBY3Rpb25Db250ZXh0KTtcclxuICBjb25zdCByZXNlcnZhdGlvblN1bW1hcnkgPSBwcmljZUluZm9cclxuICAgIC5yZWR1Y2UoKGFjY3VtLCBjdXJyZW50KSA9PiB7XHJcbiAgICAgIGAke2FjY3VtfSAgICAke3ByaWNlVHlwZU1hcHBlcltjdXJyZW50LnByaWNlVHlwZU5hbWVdfSAke1xyXG4gICAgICAgIGN1cnJlbnQuY291bnRcclxuICAgICAgfSDrp6QsYDtcclxuICAgIH0sICcnKVxyXG4gICAgLnNsaWNlKDAsIC0xKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKGFjdGlvbnMpID0+IHtcclxuICAgIGNvbnN0IG5vdGVzID0gYWN0aW9ucy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICByZXR1cm4geyBjbGljazogY29uZmlybUNhbmNlbFJlc2VydmF0aW9uKHByb2R1Y3RJZCksIGNoaWxkcmVuOiAn7Leo7IaMJyB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ3Jldmlld1dyaXRlJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjbGljazogYC9yZXZpZXd3cml0ZS8ke3Byb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgY2hpbGRyZW46ICfsmIjrp6TsnpAg66as67ewIOuCqOq4sOq4sCcsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPEJ1dHRvbkJ1bmNoIG5vdGVzPXtub3Rlc30gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJUaWNrZXRJbmZvXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wU2VjdGlvblwiPlxyXG4gICAgICAgIDxoMj57YE5vLiR7U3RyaW5nKHJlc2VydmF0aW9uSW5mb0lkKS5wYWRTdGFydCg4LCAnMCcpfWB9PC9oMj5cclxuICAgICAgICA8aDE+e2Rlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZVNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snbzsoJU8L3A+XHJcbiAgICAgICAgICA8cD57cmVzZXJ2YXRpb25EYXRlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7rgrTsl608L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsnbTrpoQ8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvbk5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICAgIDxwPuyYiOunpOyekCDsoITtmZTrsojtmLg8L3A+XHJcbiAgICAgICAgICAgIDxwPntyZXNlcnZhdGlvblRlbH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ekIOunpOyImDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGlja2V0XCI+e3Jlc2VydmF0aW9uU3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cD7snqXshow8L3A+XHJcbiAgICAgICAgICA8cD57cGxhY2VOYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VjdGlvblwiPlxyXG4gICAgICAgIDxwPuqysOygnCDquIjslaE8L3A+XHJcbiAgICAgICAgPHA+e2Ake3RyYW5zZm9ybU1vbmV5VW5pdCh0b3RhbFByaWNlKX0g7JuQYH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Y3JlYXRlQnV0dG9uKGFjdGlvbnMpfVxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5mby5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHJlc2VydmF0aW9uSW5mb0lkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uVGVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHRvdGFsUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcHJpY2VJbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBwcmljZVR5cGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBSZXNlcnZlRm9ybSBmcm9tICcuLi9SZXNlcnZlRm9ybSc7XHJcbmltcG9ydCBSZXNlcnZlRGVzYyBmcm9tICcuLi9SZXNlcnZlRGVzYyc7XHJcbmltcG9ydCBNYWluSW1hZ2UgZnJvbSAnLi4vTWFpbkltYWdlJztcclxuXHJcbmNvbnN0IFJlc2VydmVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBsZXQgcHJvZHVjdERhdGE7XHJcbiAgbGV0IHJlc2VydmF0aW9uRGF0ZTtcclxuICBsZXQgc3RhcnREYXRlO1xyXG4gIGxldCBlbmREYXRlO1xyXG4gIGxldCBpbWFnZVNyYztcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IHsgcmVzZXJ2ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpIH07XHJcbiAgICBkaWZmRGF5cy5zdGFydCA9IGRpZmZEYXlzLnJlc2VydmUgLSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1ICsgMSk7XHJcbiAgICBkaWZmRGF5cy5lbmQgPSBkaWZmRGF5cy5yZXNlcnZlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpO1xyXG4gICAgcmVzZXJ2YXRpb25EYXRlID0gbW9tZW50KClcclxuICAgICAgLnR6KCdBc2lhL1Nlb3VsJylcclxuICAgICAgLmFkZChkaWZmRGF5cy5yZXNlcnZlLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQgSEg6bW06c3MnKTtcclxuICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuc3RhcnQsICdkYXlzJylcclxuICAgICAgLmZvcm1hdCgnWVlZWS5NTS5ERC4oZGRkKScpO1xyXG4gICAgZW5kRGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuZW5kLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQuKGRkZCknKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZS50eXBlID09PSAnbWEnKSB7XHJcbiAgICAgICAgaW1hZ2VTcmMgPSB2YWx1ZS5zYXZlRmlsZU5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXNlcnZlQ29udGFpbmVyXCI+XHJcbiAgICAgIDxNYWluSW1hZ2Ugc3JjPXtpbWFnZVNyY30gYWx0PVwibWFpbiBpbWFnZVwiIC8+XHJcbiAgICAgIDxSZXNlcnZlRGVzY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb259XHJcbiAgICAgICAgcGxhY2U9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnBsYWNlTG90fVxyXG4gICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgIGVuZERhdGU9e2VuZERhdGV9XHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgLz5cclxuICAgICAgPFJlc2VydmVGb3JtXHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdElkfVxyXG4gICAgICAgIHJlc2VydmF0aW9uRGF0ZT17cmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IERldGFpbEltYWdlIGZyb20gJy4uL0RldGFpbEltYWdlJztcclxuaW1wb3J0IFByb2R1Y3REZXNjIGZyb20gJy4uL1Byb2R1Y3REZXNjJztcclxuaW1wb3J0IEV2ZW50SW5mbyBmcm9tICcuLi9FdmVudEluZm8nO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuLi9Qcm9kdWN0SW5mbyc7XHJcblxyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgbGV0IHByb2R1Y3REYXRhO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcHJvZHVjdERhdGEgPSAoYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKSkuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxEZXRhaWxJbWFnZVxyXG4gICAgICAgIGltYWdlcz17cHJvZHVjdERhdGEucHJvZHVjdEltYWdlc31cclxuICAgICAgICB0aXRsZT17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8UHJvZHVjdERlc2MgdGV4dD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdENvbnRlbnR9IC8+XHJcbiAgICAgIDxFdmVudEluZm8gcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc30gLz5cclxuICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZm9udENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZWM4MDAnLFxyXG4gICAgICAgICAgICBjbGljazogYC9yZXNlcnZlLyR7ZGlzcGxheUluZm9JZH1gLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogJzxpIGNsYXNzPVwiZm4gZm4tbmJvb2tpbmctY2FsZW5kZXIyXCI+PC9pPiDsmIjrp6TtlZjquLAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgICBhdmVyYWdlU2NvcmU9e3Byb2R1Y3REYXRhLmF2ZXJhZ2VTY29yZX1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3RJbmZvXHJcbiAgICAgICAgZGlzcGxheUluZm89e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvfVxyXG4gICAgICAgIGxvY2F0aW9uSW1nU3JjPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mb0ltYWdlLnNhdmVGaWxlTmFtZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc2VydmVySW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG5hbWUsXHJcbiAgICB0ZWxlcGhvbmUsXHJcbiAgICBlbWFpbCxcclxuICAgIHJlc2VydmF0aW9uRGF0ZSxcclxuICAgIHRvdGFsVGlja2V0LFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgICBpc1ZlcmlmaWVkTmFtZSxcclxuICAgIGlzVmVyaWZpZWRUZWwsXHJcbiAgICBpc1ZlcmlmaWVkRW1haWwsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBtYWtlQWxlcnQgPSAoaWQsIHRleHQpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFsZXJ0TWVzc2FnZVwiPnt0ZXh0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlJlc2VydmVySW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmVySGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPuyYiOunpOyekCDsoJXrs7Q8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAg7ZWE7IiY7J6F66ClXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIiBpZD1cImlucHV0UmVzZXJ2ZXJcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIOyYiOunpOyekFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25OYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2Zjeq4uOuPmVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9OQU1FJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX05BTUUnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkTmFtZVxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdOYW1lJywgJ+ydtOumhOyXkOuKlCDqs7XrsLHsnbQg7J6I7Ja07ISc64qUIOyViOuQqeuLiOuLpC4nKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFRlbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7Jew65297LKYXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uVGVsZXBob25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAxMC0wMDAwLTAwMDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfVEVMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9URUwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNWZXJpZmllZFRlbFxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdUZWwnLCAn7KCE7ZmU67KI7Zi4IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwiaW5wdXRFbWFpbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7J2066mU7J28XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25FbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ4eHh4eHhAbmF2ZXIuY29tXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX0VNQUlMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9FTUFJTCcgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJvdmVyYWxsUmVzZXJ2YXRpb25cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIHN0eWxlPXt7IGNvbG9yOiAndHJhbnNwYXJlbnQnIH19IC8+XHJcbiAgICAgICAgICAgIOyYiOunpOuCtOyaqVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2Ake3Jlc2VydmF0aW9uRGF0ZX0sIOy0nSAke3RvdGFsVGlja2V0feunpGB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkRW1haWxcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nRW1haWwnLCAn7J2066mU7J28IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlckluZm8ucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRvdGFsVGlja2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZE5hbWU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZFRlbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlckluZm87XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RDb250YWluZXIgZnJvbSAnLi4vUHJvZHVjdENvbnRhaW5lcic7XHJcblxyXG5jb25zdCBNYWluVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdENvdW50LCBwcm9kdWN0cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgbGVmdFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMCk7XHJcbiAgY29uc3QgcmlnaHRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDEpO1xyXG5cclxuICBjb25zdCBDb3VudFRleHQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0b3RhbENvdW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICDrsJTroZwg7JiI66ekIOqwgOuKpe2VnCDtlonsgqzqsIBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0cm9uZ1wiPntgJHtwcm9kdWN0Q291bnR96rCcYH08L3NwYW4+XHJcbiAgICAgICAgICDsnojsirXri4jri6RcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIHByb2R1Y3RDb250YWluZXIg7KKM7Jqw66GcIOuCmOuIhOuKlCDroZzsp4HsnbQg7J6I7Ja07JW865CoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5WaWV3XCI+XHJcbiAgICAgIHtDb3VudFRleHQoKX1cclxuICAgICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPVwibGVmdFwiPntsZWZ0UHJvZHVjdHN9PC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZHVjdENvbnRhaW5lciBjbGFzc05hbWU9XCJyaWdodFwiPntyaWdodFByb2R1Y3RzfTwvUHJvZHVjdENvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5NYWluVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdENvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluVmlldztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IERldGFpbENvbnRhaW5lciBmcm9tICcuLi9EZXRhaWxDb250YWluZXInO1xyXG5pbXBvcnQgUmVzZXJ2ZUNvbnRhaW5lciBmcm9tICcuLi9SZXNlcnZlQ29udGFpbmVyJztcclxuaW1wb3J0IFJlc2VydmF0aW9uQ29udGFpbmVyIGZyb20gJy4uL1Jlc2VydmF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IFByb21vdGlvbkltYWdlIGZyb20gJy4uL1Byb21vdGlvbkltYWdlJztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcbmltcG9ydCBSZXZpZXdQcm92aWRlciBmcm9tICcuLi9SZXZpZXdQcm92aWRlcic7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uL01haW5Db250YWluZXInO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxCcm93c2VyUm91dGVyPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9kZXRhaWwvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIDxOYXZCYXIgaXNUcmFuc3BhcmVudCAvPlxyXG4gICAgICAgICAgPERldGFpbENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCI+ey8qIHJlZGlyZWN0IOyLnOy8nOyVvCDtlaggKi99PC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9ib29raW5nbG9naW5cIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIHRvcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9teXJlc2VydmF0aW9uXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISxIOuQqCAqL31cclxuICAgICAgICAgIDxOYXZCYXIgaXNMb2dvdXRhYmxlIC8+XHJcbiAgICAgICAgICA8UmVzZXJ2YXRpb25Db250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc2VydmUvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8UmVzZXJ2ZUNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmV2aWV3LzpkaXNwbGF5SW5mb0lkXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISx65CoICovfVxyXG4gICAgICAgICAgPE5hdkJhciBpc01haW49e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgPFJldmlld1Byb3ZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXZpZXd3cml0ZS86cHJvZHVjdElkXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICB7LyogcmV2aWV3RWRpdOqwgCDrr7jsmYQgKi99XHJcbiAgICAgICAgICA8UmV2aWV3RWRpdCAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICA8UHJvbW90aW9uSW1hZ2UgLz5cclxuICAgICAgICAgIDxNYWluQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgIHsvKiA0MDQgbm90IGZvdW5k7J246rG4IOuCmO2DgOuCtOqyjCAqL31cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIDwvQnJvd3NlclJvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBSZXZpZXdQcm92aWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGxldCBwcm9kdWN0RGF0YTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgIGRpc3BsYXlJbmZvSWQ9e2Rpc3BsYXlJbmZvSWR9XHJcbiAgICAgIGF2ZXJhZ2VTY29yZT17cHJvZHVjdERhdGEuYXZlcmFnZVNjb3JlfVxyXG4gICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgaXNCcmllZj17ZmFsc2V9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEltYWdlVGl0bGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlZ3JlZSwgaW1hZ2VMZW4sIHRpdGxlLCBsZWZ0U2Nyb2xsLCByaWdodFNjcm9sbCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkltYWdlVGl0bGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFNlY3Rpb25cIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50aW5nXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJyaWdodFwiPntkZWdyZWUgKyAxfTwvc3Bhbj5cclxuICAgICAgICAgICAge2AgLyAke2ltYWdlTGVufWB9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGVTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtpbWFnZUxlbiA+IDEgPyAoXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYmFja3dhcmQyXCIgb25DbGljaz17bGVmdFNjcm9sbH0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0U2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7aW1hZ2VMZW4gPiAxID8gKFxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWZvcndhcmQyXCIgb25DbGljaz17cmlnaHRTY3JvbGx9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tU2VjdGlvblwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZVRpdGxlLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpbWFnZUxlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgbGVmdFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcmlnaHRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUaXRsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVGlja2V0SGVhZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlzR3JlZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YFRpY2tldEhlYWQgJHtpc0dyZWVuID8gJ2dyZWVuJyA6ICdncmV5J31gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRMZWZ0XCIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRNaWRkbGVcIj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rMiBpY29fY2hlY2syXCIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY2tldFJpZ2h0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRIZWFkLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBpc0dyZWVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SGVhZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUT1MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlzQ2hlY2tlZCwgZGlzcGF0Y2ggfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0NvbGxlY3Rpb25Gb2xkLCBzZXRJc0NvbGxlY3Rpb25Gb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpc09mZmVyRm9sZCwgc2V0SXNPZmZlckZvbGRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGZvbGRUZXh0ID0gJ+ygkeq4sCA8aSBjbGFzcz1cImZuIGZuLXVwMlwiPjwvaT4nO1xyXG4gIGNvbnN0IHNob3dUZXh0ID0gJ+uztOq4sCA8aSBjbGFzcz1cImZuIGZuLWRvd24yXCI+PC9pPic7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbGxlY3Rpb25DbGljayA9ICgpID0+IHtcclxuICAgIGlmIChpc0NvbGxlY3Rpb25Gb2xkKSB7XHJcbiAgICAgICQoJy5jb2xsZWN0aW9uVXNlVGVybScpLnNsaWRlRG93bigpO1xyXG4gICAgICBzZXRJc0NvbGxlY3Rpb25Gb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5jb2xsZWN0aW9uVXNlVGVybScpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNDb2xsZWN0aW9uRm9sZCh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPZmZlckNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzT2ZmZXJGb2xkKSB7XHJcbiAgICAgICQoJy5vZmZlclRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNPZmZlckZvbGQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLm9mZmVyVGVybScpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNPZmZlckZvbGQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcml0bGNlIGNsYXNzTmFtZT1cIlRPU1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbEFncmVlbWVudFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIG5hbWU9XCJUT1NDaGVja1wiXHJcbiAgICAgICAgICBpZD1cIlRPU0NoZWNrXCJcclxuICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX1RPUycsIGNoZWNrZWQgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJUT1NDaGVja1wiPuydtOyaqeyekCDslb3qtIAg7KCE7LK064+Z7J2YPC9sYWJlbD5cclxuICAgICAgICA8cD7tlYTsiJgg64+Z7J2YPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19hcnJfaXBjMlwiIC8+XHJcbiAgICAgICAgICDqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2YXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbGxlY3Rpb25Vc2VBZ3JlZW1lbnRcIiBvbkNsaWNrPXtoYW5kbGVDb2xsZWN0aW9uQ2xpY2t9PlxyXG4gICAgICAgICAge2lzQ29sbGVjdGlvbkZvbGQgPyBzaG93VGV4dCA6IGZvbGRUZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sbGVjdGlvblVzZVRlcm1cIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGlzQ29sbGVjdGlvbkZvbGQgPyAnbm9uZScgOiAnYmxvY2snIH19XHJcbiAgICAgID5cclxuICAgICAgICAmbHQ76rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmCZndDtcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAxLiDsiJjsp5Htla3rqqkgOiBb7ZWE7IiYXSDsnbTrpoQsIOyXsOudveyymCwgW+yEoO2DnV0g7J2066mU7J287KO87IaMXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMi4g7IiY7KeRIOuwjyDsnbTsmqnrqqnsoIEgOiDsgqzsl4XsnpDtmozsm5Dqs7wg7JiI7JW97J207Jqp7J6Q7J2YIOybkO2ZnO2VnCDqsbDrnpgg7KeE7ZaJLFxyXG4gICAgICAgIOqzoOqwneyDgeuLtCwg67aI66eM7LKY66asIOuTsSDrr7zsm5Ag7LKY66asLCDrtoTsn4HsobDsoJUg7ZW06rKw7J2EIOychO2VnCDquLDroZ3rs7TsobQsIOuEpOydtOuyhFxyXG4gICAgICAgIOyYiOyVvSDsnbTsmqkg7ZuEIOumrOu3sOyekeyEseyXkCDrlLDrpbgg64Sk7J2067KE7Y6Y7J20IO2PrOyduO2KuCDsp4DquIkg67CPIOq0gOugqCDslYjrgrRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAzLiDrs7TqtIDquLDqsIRcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAtIO2ajOybkO2DiO2HtCDrk7Eg6rCc7J247KCV67O0IOydtOyaqeuqqeyggSDri6zshLEg7Iuc6rmM7KeAIOuztOq0gFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIC0g64uoLCDsg4HrspUg67CPIOKAmOyghOyekOyDgeqxsOuemCDrk7Hsl5DshJzsnZgg7IaM67mE7J6QIOuztO2YuOyXkCDqtIDtlZwg67KV66Wg4oCZIOuTsSDqtIDroKhcclxuICAgICAgICDrspXroLnsl5Ag7J2Y7ZWY7JesIOydvOyglSDquLDqsIQg67O06rSA7J20IO2VhOyalO2VnCDqsr3smrDsl5DripQg7ZW064u5IOq4sOqwhCDrj5nslYgg67O06rSA7ZWoXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNC4g64+Z7J2YIOqxsOu2gOq2jCDrk7Hsl5Ag64yA7ZWcIOqzoOyngDog7KCV67O07KO87LK064qUIOqwnOyduOygleuztOydmCDsiJjsp5Eg67CPIOydtOyaqSDrj5nsnZjrpbxcclxuICAgICAgICDqsbDrtoDtlaAg6raM66as6rCAIOyeiOycvOuCmCwg7J20IOqyveyasCDsg4Htkogg67CPIOyEnOu5hOyKpCDsmIjslb3snbQg7KCc7ZWc65CgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19hcnJfaXBjMlwiIC8+XHJcbiAgICAgICAgICDqsJzsnbjsoJXrs7Qg7KCcM+yekCDsoJzqs7Ug64+Z7J2YXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm9mZmVyQWdyZWVtZW50XCIgb25DbGljaz17aGFuZGxlT2ZmZXJDbGlja30+XHJcbiAgICAgICAgICB7aXNPZmZlckZvbGQgPyBzaG93VGV4dCA6IGZvbGRUZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib2ZmZXJUZXJtXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc09mZmVyRm9sZCA/ICdub25lJyA6ICdibG9jaycgfX1cclxuICAgICAgPlxyXG4gICAgICAgICZsdDvqsJzsnbjsoJXrs7Qg7KCcM+yekCDsoJzqs7Ug64+Z7J2YJmd0O1xyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDEuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6QIDog66+465SU7Ja07JWk7JWE7Yq4XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMi4g7KCc6rO17ZWY64qUIOqwnOyduOygleuztCDtla3rqqkgOiBb7ZWE7IiYXSDrhKTsnbTrsoQg7JWE7J2065SULCDsnbTrpoQsIOyXsOudveyymCBb7ISg7YOdXVxyXG4gICAgICAgIOydtOuplOydvCDso7zshoxcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAzLiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekOydmCDsnbTsmqnrqqnsoIEgOiDsgqzsl4XsnpDtmozsm5Dqs7wg7JiI7JW97J207Jqp7J6Q7J2YIOybkO2ZnO2VnFxyXG4gICAgICAgIOqxsOuemCDsp4TtloksIOqzoOqwneyDgeuLtCwg67aI66eM7LKY66asIOuTsSDrr7zsm5Ag7LKY66asLCDshJzruYTsiqQg7J207Jqp7JeQIOuUsOuluCDshKTrrLjsobDsgqxcclxuICAgICAgICDrsI8g7Zic7YOdIOygnOqztSwg67aE7J+B7KGw7KCVIO2VtOqysOydhCDsnITtlZwg6riw66Gd67O07KG0XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNC4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpDsnZgg6rCc7J247KCV67O0IOuztOycoCDrsI8g7J207Jqp6riw6rCEIDog6rCc7J247KCV67O0XHJcbiAgICAgICAg7J207Jqp66qp7KCBIOuLrOyEsSDsi5wg6rmM7KeAIOuztOq0gO2VqeuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA1LiDrj5nsnZgg6rGw67aA6raMIOuTseyXkCDrjIDtlZwg6rOg7KeAIDog7KCV67O07KO87LK064qUIOqwnOyduOygleuztCDsoJzqs7Ug64+Z7J2Y66W8IOqxsOu2gO2VoFxyXG4gICAgICAgIOq2jOumrOqwgCDsnojsnLzrgpgsIOydtCDqsr3smrAg7IOB7ZKIIOuwjyDshJzruYTsiqQg7JiI7JW97J20IOygnO2VnOuQoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2FyaXRsY2U+XHJcbiAgKTtcclxufTtcclxuXHJcblRPUy5wcm9wVHlwZXMgPSB7XHJcbiAgaXNDaGVja2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVE9TO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFRpY2tldEluZm8gZnJvbSAnLi4vVGlja2V0SW5mbyc7XHJcblxyXG5jb25zdCBUaWNrZXRJbmZvTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIGFjdGlvbnMgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8b2wgY2xhc3NOYW1lPVwiVGlja2V0SW5mb0xpc3RcIj5cclxuICAgICAge2luZm9zLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxUaWNrZXRJbmZvIGtleT17aW5kZXh9IGluZm89e3ZhbHVlfSBhY3Rpb25zPXthY3Rpb25zfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L29sPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbmZvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5hcnJheV0pLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0SW5mb0xpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciwgdHJhbnNmb3JtTW9uZXlVbml0IH0gZnJvbSAnLi4vLi4vanMvY29tbW9uJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZURlc2MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRlc2NyaXB0aW9uLCBwbGFjZSwgc3RhcnREYXRlLCBlbmREYXRlLCBwcm9kdWN0UHJpY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgcHJpY2VUZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJpY2VMaXN0ID0gcHJvZHVjdFByaWNlcy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiBgJHtwcmljZVR5cGVNYXBwZXIodmFsdWUucHJpY2VUeXBlTmFtZSl9ICR7dHJhbnNmb3JtTW9uZXlVbml0KFxyXG4gICAgICAgIHZhbHVlLnByaWNlLFxyXG4gICAgICApfeybkGA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcmljZUxpc3Quam9pbignIC8gJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJlc2VydmVEZXNjXCI+XHJcbiAgICAgIDxoMj57ZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAge3BsYWNlfVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtgJHtzdGFydERhdGV9IH4gJHtlbmREYXRlfWB9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgyPuyalOq4iDwvaDI+XHJcbiAgICAgIDxwPntwcmljZVRleHQoKX08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc2VydmVEZXNjLnByb3BUeXBlcyA9IHtcclxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHBsYWNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc3RhcnREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZW5kRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgcHJpY2VUeXBlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZURlc2M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwic3ByX2JpIHR4dF9sb2dvXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJjb25zdCB0cmFuc2Zvcm1Nb25leVVuaXQgPSAobnVtKSA9PiB7XHJcbiAgbGV0IHRyYW5zZm9ybWVkID0gJyc7XHJcbiAgbnVtID0gbnVtLnRvU3RyaW5nKCk7XHJcbiAgY29uc3QgbnVtTGVuID0gbnVtLmxlbmd0aDtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1MZW47IGkrKykge1xyXG4gICAgaWYgKGkgPiAzICYmIGkgJSAzID09PSAxKSB7XHJcbiAgICAgIHRyYW5zZm9ybWVkID0gYCwke3RyYW5zZm9ybWVkfWA7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm1lZCA9IG51bS5jaGFyQXQobnVtTGVuIC0gaSkgKyB0cmFuc2Zvcm1lZDtcclxuICB9XHJcbiAgcmV0dXJuIHRyYW5zZm9ybWVkO1xyXG59O1xyXG5cclxuY29uc3QgcHJpY2VUeXBlTWFwcGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgY29uc3QgcHJpY2VUeXBlID0ge1xyXG4gICAgQTogJ+yEseyduCcsXHJcbiAgICBZOiAn7LKt7IaM64WEJyxcclxuICAgIEI6ICfsnKDslYQnLFxyXG4gICAgUzogJ+yFi+2KuCcsXHJcbiAgICBEOiAn7J6l7JWg7J24JyxcclxuICAgIEM6ICfsp4Dsl63so7zrr7wnLFxyXG4gICAgRTogJ+yWtOyWvOumrOuyhOuTnCcsXHJcbiAgICBWOiAnVklQJyxcclxuICAgIFI6ICdS7ISdJyxcclxuICB9O1xyXG4gIHJldHVybiBwcmljZVR5cGVbdmFsdWVdO1xyXG59O1xyXG5cclxuY29uc3QgdmFsaWRJbWFnZVR5cGUgPSAoaW1hZ2UpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJywgJ2ltYWdlL2pwZyddLmluZGV4T2YoaW1hZ2UpID4gLTE7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCB7IHRyYW5zZm9ybU1vbmV5VW5pdCwgcHJpY2VUeXBlTWFwcGVyLCB2YWxpZEltYWdlVHlwZSB9O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCJLL3RjXCIsXG5cdFwiLi9hZi5qc1wiOiBcIksvdGNcIixcblx0XCIuL2FyXCI6IFwiam5PNFwiLFxuXHRcIi4vYXItZHpcIjogXCJvMWJFXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIm8xYkVcIixcblx0XCIuL2FyLWt3XCI6IFwiUWo0SlwiLFxuXHRcIi4vYXIta3cuanNcIjogXCJRajRKXCIsXG5cdFwiLi9hci1seVwiOiBcIkhQM2hcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiSFAzaFwiLFxuXHRcIi4vYXItbWFcIjogXCJDb1JKXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIkNvUkpcIixcblx0XCIuL2FyLXNhXCI6IFwiZ2pDVFwiLFxuXHRcIi4vYXItc2EuanNcIjogXCJnakNUXCIsXG5cdFwiLi9hci10blwiOiBcImJZTTZcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiYllNNlwiLFxuXHRcIi4vYXIuanNcIjogXCJqbk80XCIsXG5cdFwiLi9helwiOiBcIlNGeFdcIixcblx0XCIuL2F6LmpzXCI6IFwiU0Z4V1wiLFxuXHRcIi4vYmVcIjogXCJIOEVEXCIsXG5cdFwiLi9iZS5qc1wiOiBcIkg4RURcIixcblx0XCIuL2JnXCI6IFwiaEtyc1wiLFxuXHRcIi4vYmcuanNcIjogXCJoS3JzXCIsXG5cdFwiLi9ibVwiOiBcInAvckxcIixcblx0XCIuL2JtLmpzXCI6IFwicC9yTFwiLFxuXHRcIi4vYm5cIjogXCJrRU9hXCIsXG5cdFwiLi9ibi5qc1wiOiBcImtFT2FcIixcblx0XCIuL2JvXCI6IFwiMG1vK1wiLFxuXHRcIi4vYm8uanNcIjogXCIwbW8rXCIsXG5cdFwiLi9iclwiOiBcImFJZGZcIixcblx0XCIuL2JyLmpzXCI6IFwiYUlkZlwiLFxuXHRcIi4vYnNcIjogXCJKVlNKXCIsXG5cdFwiLi9icy5qc1wiOiBcIkpWU0pcIixcblx0XCIuL2NhXCI6IFwiMXhaNFwiLFxuXHRcIi4vY2EuanNcIjogXCIxeFo0XCIsXG5cdFwiLi9jc1wiOiBcIlBBMnJcIixcblx0XCIuL2NzLmpzXCI6IFwiUEEyclwiLFxuXHRcIi4vY3ZcIjogXCJBK3hhXCIsXG5cdFwiLi9jdi5qc1wiOiBcIkEreGFcIixcblx0XCIuL2N5XCI6IFwibDVlcFwiLFxuXHRcIi4vY3kuanNcIjogXCJsNWVwXCIsXG5cdFwiLi9kYVwiOiBcIkR4UXZcIixcblx0XCIuL2RhLmpzXCI6IFwiRHhRdlwiLFxuXHRcIi4vZGVcIjogXCJ0R2xYXCIsXG5cdFwiLi9kZS1hdFwiOiBcInMrdWtcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwicyt1a1wiLFxuXHRcIi4vZGUtY2hcIjogXCJ1M0dJXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcInUzR0lcIixcblx0XCIuL2RlLmpzXCI6IFwidEdsWFwiLFxuXHRcIi4vZHZcIjogXCJXWXJqXCIsXG5cdFwiLi9kdi5qc1wiOiBcIldZcmpcIixcblx0XCIuL2VsXCI6IFwialVlWVwiLFxuXHRcIi4vZWwuanNcIjogXCJqVWVZXCIsXG5cdFwiLi9lbi1TR1wiOiBcInphdkVcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiemF2RVwiLFxuXHRcIi4vZW4tYXVcIjogXCJEbXZpXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIkRtdmlcIixcblx0XCIuL2VuLWNhXCI6IFwiT0lZaVwiLFxuXHRcIi4vZW4tY2EuanNcIjogXCJPSVlpXCIsXG5cdFwiLi9lbi1nYlwiOiBcIk9hYTdcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiT2FhN1wiLFxuXHRcIi4vZW4taWVcIjogXCI0ZE93XCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIjRkT3dcIixcblx0XCIuL2VuLWlsXCI6IFwiY3pNb1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCJjek1vXCIsXG5cdFwiLi9lbi1uelwiOiBcImIxRHlcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiYjFEeVwiLFxuXHRcIi4vZW9cIjogXCJaZHVvXCIsXG5cdFwiLi9lby5qc1wiOiBcIlpkdW9cIixcblx0XCIuL2VzXCI6IFwiaVl1TFwiLFxuXHRcIi4vZXMtZG9cIjogXCJDanpUXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIkNqelRcIixcblx0XCIuL2VzLXVzXCI6IFwiVmNscVwiLFxuXHRcIi4vZXMtdXMuanNcIjogXCJWY2xxXCIsXG5cdFwiLi9lcy5qc1wiOiBcImlZdUxcIixcblx0XCIuL2V0XCI6IFwiN0JqQ1wiLFxuXHRcIi4vZXQuanNcIjogXCI3QmpDXCIsXG5cdFwiLi9ldVwiOiBcIkQvSk1cIixcblx0XCIuL2V1LmpzXCI6IFwiRC9KTVwiLFxuXHRcIi4vZmFcIjogXCJqZlNDXCIsXG5cdFwiLi9mYS5qc1wiOiBcImpmU0NcIixcblx0XCIuL2ZpXCI6IFwiZ2VrQlwiLFxuXHRcIi4vZmkuanNcIjogXCJnZWtCXCIsXG5cdFwiLi9mb1wiOiBcIkJ5RjRcIixcblx0XCIuL2ZvLmpzXCI6IFwiQnlGNFwiLFxuXHRcIi4vZnJcIjogXCJueVljXCIsXG5cdFwiLi9mci1jYVwiOiBcIjJmam5cIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiMmZqblwiLFxuXHRcIi4vZnItY2hcIjogXCJEa2t5XCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIkRra3lcIixcblx0XCIuL2ZyLmpzXCI6IFwibnlZY1wiLFxuXHRcIi4vZnlcIjogXCJjUml4XCIsXG5cdFwiLi9meS5qc1wiOiBcImNSaXhcIixcblx0XCIuL2dhXCI6IFwiVVNDeFwiLFxuXHRcIi4vZ2EuanNcIjogXCJVU0N4XCIsXG5cdFwiLi9nZFwiOiBcIjlyUmlcIixcblx0XCIuL2dkLmpzXCI6IFwiOXJSaVwiLFxuXHRcIi4vZ2xcIjogXCJpRURkXCIsXG5cdFwiLi9nbC5qc1wiOiBcImlFRGRcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiREtyK1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCJES3IrXCIsXG5cdFwiLi9ndVwiOiBcIjRNVjNcIixcblx0XCIuL2d1LmpzXCI6IFwiNE1WM1wiLFxuXHRcIi4vaGVcIjogXCJ4NnBIXCIsXG5cdFwiLi9oZS5qc1wiOiBcIng2cEhcIixcblx0XCIuL2hpXCI6IFwiM0UxclwiLFxuXHRcIi4vaGkuanNcIjogXCIzRTFyXCIsXG5cdFwiLi9oclwiOiBcIlM2bG5cIixcblx0XCIuL2hyLmpzXCI6IFwiUzZsblwiLFxuXHRcIi4vaHVcIjogXCJXeFJsXCIsXG5cdFwiLi9odS5qc1wiOiBcIld4UmxcIixcblx0XCIuL2h5LWFtXCI6IFwiMXJZeVwiLFxuXHRcIi4vaHktYW0uanNcIjogXCIxcll5XCIsXG5cdFwiLi9pZFwiOiBcIlVEaFJcIixcblx0XCIuL2lkLmpzXCI6IFwiVURoUlwiLFxuXHRcIi4vaXNcIjogXCJCVmczXCIsXG5cdFwiLi9pcy5qc1wiOiBcIkJWZzNcIixcblx0XCIuL2l0XCI6IFwiYnBpaFwiLFxuXHRcIi4vaXQtY2hcIjogXCJieEtYXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcImJ4S1hcIixcblx0XCIuL2l0LmpzXCI6IFwiYnBpaFwiLFxuXHRcIi4vamFcIjogXCJCNTVOXCIsXG5cdFwiLi9qYS5qc1wiOiBcIkI1NU5cIixcblx0XCIuL2p2XCI6IFwidFVDdlwiLFxuXHRcIi4vanYuanNcIjogXCJ0VUN2XCIsXG5cdFwiLi9rYVwiOiBcIklCdFpcIixcblx0XCIuL2thLmpzXCI6IFwiSUJ0WlwiLFxuXHRcIi4va2tcIjogXCJiWG03XCIsXG5cdFwiLi9ray5qc1wiOiBcImJYbTdcIixcblx0XCIuL2ttXCI6IFwiNkIwWVwiLFxuXHRcIi4va20uanNcIjogXCI2QjBZXCIsXG5cdFwiLi9rblwiOiBcIlBwSXdcIixcblx0XCIuL2tuLmpzXCI6IFwiUHBJd1wiLFxuXHRcIi4va29cIjogXCJJdmkrXCIsXG5cdFwiLi9rby5qc1wiOiBcIkl2aStcIixcblx0XCIuL2t1XCI6IFwiSkNGL1wiLFxuXHRcIi4va3UuanNcIjogXCJKQ0YvXCIsXG5cdFwiLi9reVwiOiBcImxnbnRcIixcblx0XCIuL2t5LmpzXCI6IFwibGdudFwiLFxuXHRcIi4vbGJcIjogXCJSQXdRXCIsXG5cdFwiLi9sYi5qc1wiOiBcIlJBd1FcIixcblx0XCIuL2xvXCI6IFwic3AzelwiLFxuXHRcIi4vbG8uanNcIjogXCJzcDN6XCIsXG5cdFwiLi9sdFwiOiBcIkp2bFdcIixcblx0XCIuL2x0LmpzXCI6IFwiSnZsV1wiLFxuXHRcIi4vbHZcIjogXCJ1WHdJXCIsXG5cdFwiLi9sdi5qc1wiOiBcInVYd0lcIixcblx0XCIuL21lXCI6IFwiS1R6MFwiLFxuXHRcIi4vbWUuanNcIjogXCJLVHowXCIsXG5cdFwiLi9taVwiOiBcImFJc25cIixcblx0XCIuL21pLmpzXCI6IFwiYUlzblwiLFxuXHRcIi4vbWtcIjogXCJhUWtVXCIsXG5cdFwiLi9tay5qc1wiOiBcImFRa1VcIixcblx0XCIuL21sXCI6IFwiQXZ2WVwiLFxuXHRcIi4vbWwuanNcIjogXCJBdnZZXCIsXG5cdFwiLi9tblwiOiBcImxZdFFcIixcblx0XCIuL21uLmpzXCI6IFwibFl0UVwiLFxuXHRcIi4vbXJcIjogXCJPYjBaXCIsXG5cdFwiLi9tci5qc1wiOiBcIk9iMFpcIixcblx0XCIuL21zXCI6IFwiNitRQlwiLFxuXHRcIi4vbXMtbXlcIjogXCJaQU1QXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIlpBTVBcIixcblx0XCIuL21zLmpzXCI6IFwiNitRQlwiLFxuXHRcIi4vbXRcIjogXCJHMFV5XCIsXG5cdFwiLi9tdC5qc1wiOiBcIkcwVXlcIixcblx0XCIuL215XCI6IFwiaG9uRlwiLFxuXHRcIi4vbXkuanNcIjogXCJob25GXCIsXG5cdFwiLi9uYlwiOiBcImJPTXRcIixcblx0XCIuL25iLmpzXCI6IFwiYk9NdFwiLFxuXHRcIi4vbmVcIjogXCJPamtUXCIsXG5cdFwiLi9uZS5qc1wiOiBcIk9qa1RcIixcblx0XCIuL25sXCI6IFwiK3MwZ1wiLFxuXHRcIi4vbmwtYmVcIjogXCIyeWt2XCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIjJ5a3ZcIixcblx0XCIuL25sLmpzXCI6IFwiK3MwZ1wiLFxuXHRcIi4vbm5cIjogXCJ1RXllXCIsXG5cdFwiLi9ubi5qc1wiOiBcInVFeWVcIixcblx0XCIuL3BhLWluXCI6IFwiOC8rUlwiLFxuXHRcIi4vcGEtaW4uanNcIjogXCI4LytSXCIsXG5cdFwiLi9wbFwiOiBcImpWZENcIixcblx0XCIuL3BsLmpzXCI6IFwialZkQ1wiLFxuXHRcIi4vcHRcIjogXCI4bUJEXCIsXG5cdFwiLi9wdC1iclwiOiBcIjB0UmtcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiMHRSa1wiLFxuXHRcIi4vcHQuanNcIjogXCI4bUJEXCIsXG5cdFwiLi9yb1wiOiBcImx5eG9cIixcblx0XCIuL3JvLmpzXCI6IFwibHl4b1wiLFxuXHRcIi4vcnVcIjogXCJsWHpvXCIsXG5cdFwiLi9ydS5qc1wiOiBcImxYem9cIixcblx0XCIuL3NkXCI6IFwiWjRRTVwiLFxuXHRcIi4vc2QuanNcIjogXCJaNFFNXCIsXG5cdFwiLi9zZVwiOiBcIi8vOXdcIixcblx0XCIuL3NlLmpzXCI6IFwiLy85d1wiLFxuXHRcIi4vc2lcIjogXCI3YVY5XCIsXG5cdFwiLi9zaS5qc1wiOiBcIjdhVjlcIixcblx0XCIuL3NrXCI6IFwiZSthZVwiLFxuXHRcIi4vc2suanNcIjogXCJlK2FlXCIsXG5cdFwiLi9zbFwiOiBcImdWVktcIixcblx0XCIuL3NsLmpzXCI6IFwiZ1ZWS1wiLFxuXHRcIi4vc3FcIjogXCJ5UE1zXCIsXG5cdFwiLi9zcS5qc1wiOiBcInlQTXNcIixcblx0XCIuL3NyXCI6IFwieng2U1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIkUrbFZcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCJFK2xWXCIsXG5cdFwiLi9zci5qc1wiOiBcInp4NlNcIixcblx0XCIuL3NzXCI6IFwiVXIxRFwiLFxuXHRcIi4vc3MuanNcIjogXCJVcjFEXCIsXG5cdFwiLi9zdlwiOiBcIlg3MDlcIixcblx0XCIuL3N2LmpzXCI6IFwiWDcwOVwiLFxuXHRcIi4vc3dcIjogXCJkTndBXCIsXG5cdFwiLi9zdy5qc1wiOiBcImROd0FcIixcblx0XCIuL3RhXCI6IFwiUGVVV1wiLFxuXHRcIi4vdGEuanNcIjogXCJQZVVXXCIsXG5cdFwiLi90ZVwiOiBcIlhMdk5cIixcblx0XCIuL3RlLmpzXCI6IFwiWEx2TlwiLFxuXHRcIi4vdGV0XCI6IFwiVjJ4OVwiLFxuXHRcIi4vdGV0LmpzXCI6IFwiVjJ4OVwiLFxuXHRcIi4vdGdcIjogXCJPeHY2XCIsXG5cdFwiLi90Zy5qc1wiOiBcIk94djZcIixcblx0XCIuL3RoXCI6IFwiRU9nV1wiLFxuXHRcIi4vdGguanNcIjogXCJFT2dXXCIsXG5cdFwiLi90bC1waFwiOiBcIkR6aTBcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiRHppMFwiLFxuXHRcIi4vdGxoXCI6IFwiejNWZFwiLFxuXHRcIi4vdGxoLmpzXCI6IFwiejNWZFwiLFxuXHRcIi4vdHJcIjogXCJEb0hyXCIsXG5cdFwiLi90ci5qc1wiOiBcIkRvSHJcIixcblx0XCIuL3R6bFwiOiBcInoxRkNcIixcblx0XCIuL3R6bC5qc1wiOiBcInoxRkNcIixcblx0XCIuL3R6bVwiOiBcIndRazlcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwidFQzSlwiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCJ0VDNKXCIsXG5cdFwiLi90em0uanNcIjogXCJ3UWs5XCIsXG5cdFwiLi91Zy1jblwiOiBcIllSZXhcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiWVJleFwiLFxuXHRcIi4vdWtcIjogXCJyYUxyXCIsXG5cdFwiLi91ay5qc1wiOiBcInJhTHJcIixcblx0XCIuL3VyXCI6IFwiVXBRV1wiLFxuXHRcIi4vdXIuanNcIjogXCJVcFFXXCIsXG5cdFwiLi91elwiOiBcIkxveG9cIixcblx0XCIuL3V6LWxhdG5cIjogXCJBUTY4XCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiQVE2OFwiLFxuXHRcIi4vdXouanNcIjogXCJMb3hvXCIsXG5cdFwiLi92aVwiOiBcIktTRjhcIixcblx0XCIuL3ZpLmpzXCI6IFwiS1NGOFwiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIvWDV2XCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi9YNXZcIixcblx0XCIuL3lvXCI6IFwiZnpQZ1wiLFxuXHRcIi4veW8uanNcIjogXCJmelBnXCIsXG5cdFwiLi96aC1jblwiOiBcIlhEcGdcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiWERwZ1wiLFxuXHRcIi4vemgtaGtcIjogXCJTYXRPXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIlNhdE9cIixcblx0XCIuL3poLXR3XCI6IFwia09wTlwiLFxuXHRcIi4vemgtdHcuanNcIjogXCJrT3BOXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIlJuaFpcIjsiLCIvLyBidXR0b24g67aA67aEIGJ1dHRvbmJ1bmNo66GcXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IElucHV0VGlja2V0IGZyb20gJy4uL0lucHV0VGlja2V0JztcclxuaW1wb3J0IFJlc2VydmVySW5mbyBmcm9tICcuLi9SZXNlcnZlckluZm8nO1xyXG5pbXBvcnQgVE9TIGZyb20gJy4uL1RPUyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpY2tldHM6IEFycmF5KGxlbmd0aCkuZmlsbCgwKSxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgdGVsZXBob25lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIGlzVmVyaWZpZWROYW1lOiBmYWxzZSxcclxuICAgIGlzVmVyaWZpZWRUZWw6IGZhbHNlLFxyXG4gICAgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSxcclxuICAgIGlzVE9TQ2hlY2tlZDogZmFsc2UsXHJcbiAgICBzdWJtaXQ6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdERUNSRU1FTlQnOlxyXG4gICAgICBjb25zdCBtb2RpZmllZERlYyA9IHsgLi4uc3RhdGUgfTtcclxuICAgICAgbW9kaWZpZWREZWMudGlja2V0c1thY3Rpb24ud2hlcmVdID0gbW9kaWZpZWREZWMudGlja2V0c1thY3Rpb24ud2hlcmVdIC0gMTtcclxuICAgICAgcmV0dXJuIG1vZGlmaWVkRGVjO1xyXG4gICAgY2FzZSAnSU5DUkVNRU5UJzpcclxuICAgICAgY29uc3QgbW9kaWZpZWRJbmMgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgIG1vZGlmaWVkSW5jLnRpY2tldHNbYWN0aW9uLndoZXJlXSA9IG1vZGlmaWVkSW5jLnRpY2tldHNbYWN0aW9uLndoZXJlXSArIDE7XHJcbiAgICAgIHJldHVybiBtb2RpZmllZEluYztcclxuICAgIGNhc2UgJ0NIQU5HRV9OQU1FJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5hbWU6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX1RFTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB0ZWxlcGhvbmU6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSAnQ0hBTkdFX0VNQUlMJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVtYWlsOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9UT1MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNUT1NDaGVja2VkOiBhY3Rpb24uY2hlY2tlZCB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX05BTUUnOlxyXG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAobmFtZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKC9cXHMvLnRlc3QobmFtZSkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZE5hbWU6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWROYW1lOiB0cnVlIH07XHJcbiAgICBjYXNlICdWRVJJRllfVEVMJzpcclxuICAgICAgY29uc3QgeyB0ZWxlcGhvbmUgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAodGVsZXBob25lLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRlbFJlID0gLzBcXGR7Mn0tWzEtOV1cXGR7MiwzfS1cXGR7NH0vO1xyXG4gICAgICBpZiAodGVsUmUudGVzdCh0ZWxlcGhvbmUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogZmFsc2UgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9FTUFJTCc6XHJcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAoZW1haWwubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbWFpbFJlID0gL1thLXpBLVpdXFx3ezIsfUBbYS16QS1aXXszLH1cXC5bYS16QS1aXXsyLH0vO1xyXG4gICAgICBpZiAoZW1haWxSZS50ZXN0KGVtYWlsKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiBmYWxzZSB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX1NVQk1JVCc6XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICB0aWNrZXRzLFxyXG4gICAgICAgIGlzVmVyaWZpZWROYW1lLFxyXG4gICAgICAgIGlzVmVyaWZpZWRUZWwsXHJcbiAgICAgICAgaXNWZXJpZmllZEVtYWlsLFxyXG4gICAgICAgIGlzVE9TQ2hlY2tlZCxcclxuICAgICAgfSA9IHN0YXRlO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGlja2V0cy5zb21lKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgdmFsdWUgPiAwO1xyXG4gICAgICAgIH0pICYmXHJcbiAgICAgICAgaXNWZXJpZmllZE5hbWUgJiZcclxuICAgICAgICBpc1ZlcmlmaWVkVGVsICYmXHJcbiAgICAgICAgaXNWZXJpZmllZEVtYWlsICYmXHJcbiAgICAgICAgaXNUT1NDaGVja2VkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzdWJtaXQ6IHRydWUgfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VibWl0OiBmYWxzZSB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUmVzZXJ2ZUZvcm0gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb2R1Y3RQcmljZXMsIGRpc3BsYXlJbmZvSWQsIHByb2R1Y3RJZCwgcmVzZXJ2YXRpb25EYXRlIH0gPSBwcm9wcztcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXHJcbiAgICByZWR1Y2VyLFxyXG4gICAgaW5pdGlhbFN0YXRlKHByb2R1Y3RQcmljZXMubGVuZ3RoKSxcclxuICApO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzZXJ2YXRpb25JbmZvID0ge1xyXG4gICAgICAgIGRpc3BsYXlJbmZvSWQsXHJcbiAgICAgICAgcHJvZHVjdElkLFxyXG4gICAgICAgIHByaWNlczogW10sXHJcbiAgICAgICAgcmVzZXJ2YXRpb25FbWFpbDogc3RhdGUuZW1haWwsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25OYW1lOiBzdGF0ZS5uYW1lLFxyXG4gICAgICAgIHJlc2VydmF0aW9uVGVsZXBob25lOiBzdGF0ZS50ZWxlcGhvbmUsXHJcbiAgICAgICAgcmVzZXJ2YXRpb25ZZWFyTW9udGhEYXk6IHJlc2VydmF0aW9uRGF0ZSxcclxuICAgICAgfTtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSBwcm9kdWN0UHJpY2VzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcclxuICAgICAgICByZXNlcnZhdGlvbkluZm8ucHJpY2VzLnB1c2goe1xyXG4gICAgICAgICAgY291bnQ6IE51bWJlcihzdGF0ZS50aWNrZXRzW2luZGV4XSksXHJcbiAgICAgICAgICBwcm9kdWN0UHJpY2VJZDogcHJvZHVjdFByaWNlc1tpbmRleF0ucHJvZHVjdFByaWNlSUQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBzdGF0dXMsIHN0YXR1c1RleHQgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgJy9hcGkvcmVzZXJ2YXRpb25zJyxcclxuICAgICAgICByZXNlcnZhdGlvbkluZm8sXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChzdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfsmIjrp6TqsIAg7ISx6rO17KCB7Jy866GcIOyKueyduOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChgL2RldGFpbC8ke2Rpc3BsYXlJbmZvSWR9YCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoc3RhdGUuc3VibWl0KSB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbCgn7JiI7JW97ZWY7Iuc6rKg7Iq164uI6rmMPycsIGhhbmRsZVN1Ym1pdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydE1vZGFsKCfsmIjslb0g7JaR7Iud7J20IOy2qeyhseuQmOyngCDslYrslZjsirXri4jri6QnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmVzZXJ2ZUZvcm1cIj5cclxuICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9yZXNlcnZhdGlvbnNcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPElucHV0VGlja2V0XHJcbiAgICAgICAgICBwcm9kdWN0UHJpY2VzPXtwcm9kdWN0UHJpY2VzfVxyXG4gICAgICAgICAgdGlja2V0cz17c3RhdGUudGlja2V0c31cclxuICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZXNlcnZlckluZm9cclxuICAgICAgICAgIG5hbWU9e3N0YXRlLm5hbWV9XHJcbiAgICAgICAgICB0ZWxlcGhvbmU9e3N0YXRlLnRlbGVwaG9uZX1cclxuICAgICAgICAgIGVtYWlsPXtzdGF0ZS5lbWFpbH1cclxuICAgICAgICAgIHJlc2VydmF0aW9uRGF0ZT17cmVzZXJ2YXRpb25EYXRlLnNwbGl0KCcgJylbMF19XHJcbiAgICAgICAgICB0b3RhbFRpY2tldD17c3RhdGUudGlja2V0cy5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhY2N1bSwgY3VycmVudCkgPT4gYWNjdW0gKyBjdXJyZW50LFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cclxuICAgICAgICAgIGlzVmVyaWZpZWROYW1lPXtzdGF0ZS5pc1ZlcmlmaWVkTmFtZX1cclxuICAgICAgICAgIGlzVmVyaWZpZWRUZWw9e3N0YXRlLmlzVmVyaWZpZWRUZWx9XHJcbiAgICAgICAgICBpc1ZlcmlmaWVkRW1haWw9e3N0YXRlLmlzVmVyaWZpZWRFbWFpbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxUT1MgaXNDaGVja2VkPXtzdGF0ZS5UT1N9IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUuc3VibWl0ID8gJyMxRUM5MDAnIDogJyNEMUQxRDEnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2NvbmZpcm1TdWJtaXR9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2sgaWNvX25hdmVyX3NcIiAvPlxyXG4gICAgICAgICAg7JiI7JW97ZWY6riwXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2ZUZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1cmVkLFxyXG4gIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2ZUZvcm07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBUYWJWaWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB2aWV3cywgc2VsZWN0ZWQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYlZpZXdcIj5cclxuICAgICAge3ZpZXdzLmZpbmQoKHZhbHVlLCBpbmRleCkgPT4gaW5kZXggPT09IHNlbGVjdGVkKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJWaWV3LnByb3BUeXBlcyA9IHtcclxuICB2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVmlldztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFJldmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHJldmlldyxcclxuICAgIGltYWdlLFxyXG4gICAgc2NvcmUsXHJcbiAgICBlbWFpbCxcclxuICAgIGRhdGUsXHJcbiAgICBlZGl0Q29tbWVudCxcclxuICAgIGNvbmZpcm1EZWxldGUsXHJcbiAgfSA9IHByb3BzO1xyXG4gIC8vIOydtOuvuOyngCDrs7TsoJVcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiUmV2aWV3XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8cD57cmV2aWV3fTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAge2ltYWdlID8gPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJyZXZpZXdJbWFnZVwiIC8+IDogJyd9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzY29yZVwiPntzY29yZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbWFpbFwiPntgJHtlbWFpbC5zbGljZSgwLCA0KX0qKioqYH08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNpdERhdGVcIj57YCR7ZGF0ZS5zbGljZSgwLCAxMCl9IOuwqeusuGB9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVkaXRcIiBvbkNsaWNrPXtlZGl0Q29tbWVudH0+XHJcbiAgICAgICAgICAgIOyImOyglVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVsZXRlXCIgb25DbGljaz17Y29uZmlybURlbGV0ZX0+XHJcbiAgICAgICAgICAgIOyCreygnFxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3LnByb3BUeXBlcyA9IHtcclxuICByZXZpZXc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZWRpdENvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybURlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlldztcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVGFiVUkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxhYmVscywgc2VsZWN0ZWQsIGhhbmRsZUNsaWNrIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiVGFiVUlcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtsYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCA9PT0gc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJ3Vuc2VsZWN0ZWQnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuVGFiVUkucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGhhbmRsZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiVUk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUYWJVSSBmcm9tICcuLi9UYWJVSSc7XHJcbmltcG9ydCBUYWJWaWV3IGZyb20gJy4uL1RhYlZpZXcnO1xyXG5cclxuY29uc3QgVGFiQ29udHJvbGxlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWxzLCB2aWV3cywgYWxhcm0gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBpZiAoYWxhcm0pIHtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBhbGFybShpbmRleCk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoaW5kZXgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc2V0U2VsZWN0ZWQoaW5kZXgpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJUYWJDb250cm9sbGVyXCI+XHJcbiAgICAgIDxUYWJVSSBsYWJlbHM9e2xhYmVsc30gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgIDxUYWJWaWV3IHZpZXdzPXt2aWV3c30gc2VsZWN0ZWQ9e3NlbGVjdGVkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblRhYkNvbnRyb2xsZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGFsYXJtOiBmYWxzZSxcclxufTtcclxuXHJcblRhYkNvbnRyb2xsZXIucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICB2aWV3czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcclxuICBhbGFybTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXHJcbn07XHJcblxyXG4vLyDslYzrnozsnbQg7J6I64uk66m0IOyDgeychCDsu7Ttj6zrhIztirjsl5Ag7Ja065SU7JeQIOuIjOuggOuKlOyngCDrs4DtmZTrpbwg7JWM66Ck7KSYIOuPmeyggSDrt7Drs4DtmZTrpbwg6rCA64ql7LyA7ZWoXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJDb250cm9sbGVyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcclxuXHJcbmNvbnN0IGFwcGx5U3R5bGUgPSAoc3R5bGUpID0+IHtcclxuICBpZiAodHlwZW9mIHN0eWxlID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIGAke3N0eWxlfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29uc3QgW2FsbF0gPSBzdHlsZTtcclxuICAgIHJldHVybiBgJHthbGx9cHhgO1xyXG4gIH1cclxuICBpZiAodG9TdHJpbmcuY2FsbChzdHlsZSkgPT09ICdbb2JqZWN0IEFycmF5XScgJiYgc3R5bGUubGVuZ3RoID09PSAyKSB7XHJcbiAgICBjb25zdCBbdmVydGljYWwsIGhvcml6b250YWxdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7dmVydGljYWx9cHggJHtob3Jpem9udGFsfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgY29uc3QgW3RvcCwgcmlnaHQsIGRvd24sIGxlZnRdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7dG9wfXB4ICR7cmlnaHR9cHggJHtkb3dufXB4ICR7bGVmdH1weGA7XHJcbiAgfVxyXG4gIHJldHVybiAnMCc7XHJcbn07XHJcblxyXG5jb25zdCBCdXR0b25CdW5jaCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbm90ZXMsIG1hcmdpbiwgcGFkZGluZyB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiQnV0dG9uQnVuY2hcIlxyXG4gICAgICBzdHlsZT17eyBtYXJnaW46IGFwcGx5U3R5bGUobWFyZ2luKSwgcGFkZGluZzogYXBwbHlTdHlsZShwYWRkaW5nKSB9fVxyXG4gICAgPlxyXG4gICAgICB7bm90ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBmb250Q29sb3I9e3ZhbHVlLmZvbnRDb2xvcn1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXt2YWx1ZS5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgIGNsaWNrPXt2YWx1ZS5jbGlja31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3ZhbHVlLmNoaWxkcmVufVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uQnVuY2guZGVmYXVsdFByb3BzID0ge1xyXG4gIG1hcmdpbjogMCxcclxuICBwYWRkaW5nOiAwLFxyXG59O1xyXG5cclxuQnV0dG9uQnVuY2gucHJvcFR5cGVzID0ge1xyXG4gIG5vdGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGZvbnRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjbGljazogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxyXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYXJyYXldKSxcclxuICBwYWRkaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYXJyYXldKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJ1bmNoO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gJy4uL0ltYWdlU2xpZGVyJztcclxuaW1wb3J0IEltYWdlVGl0bGUgZnJvbSAnLi4vSW1hZ2VUaXRsZSc7XHJcblxyXG5jb25zdCBJbWFnZUNvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBkZWdyZWUsXHJcbiAgICB0cmFuc2l0aW9uVGltZSxcclxuICAgIGltYWdlcyxcclxuICAgIHJlc2l6ZUVuZCxcclxuICAgIHRpdGxlLFxyXG4gICAgbGVmdFNjcm9sbCxcclxuICAgIHJpZ2h0U2Nyb2xsLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBpbWFnZUxpc3QgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2ltYWdlV2lkdGgsIHNldEltYWdlV2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGdldEltYWdlV2lkdGggPSAoKSA9PiB7XHJcbiAgICByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbWFnZVdpZHRoKGltYWdlTGlzdC5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudFdpZHRoKTsgLy8g7LKY7J2M7JeUIDDsnLzroZwg65CoXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0SW1hZ2VXaWR0aCk7XHJcbiAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldEltYWdlV2lkdGgpO1xyXG4gIH0sIFtpbWFnZXNdKTtcclxuXHJcbiAgcmV0dXJuIHRpdGxlID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEltYWdlU2xpZGVyXHJcbiAgICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25UaW1lfVxyXG4gICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgICAgaXNQcm9tb3Rpb249e2ZhbHNlfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2VUaXRsZVxyXG4gICAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICAgIGltYWdlTGVuPXtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBsZWZ0U2Nyb2xsPXtsZWZ0U2Nyb2xsfVxyXG4gICAgICAgIHJpZ2h0U2Nyb2xsPXtyaWdodFNjcm9sbH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvblRpbWV9XHJcbiAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICBpbWFnZVdpZHRoPXtpbWFnZVdpZHRofVxyXG4gICAgICBpc1Byb21vdGlvblxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2VDb250cm9sbGVyLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgcmVzaXplRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxlZnRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJpZ2h0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB2YWxpZEltYWdlVHlwZSB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUmV2aWV3RWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHJldmlldyDrp4zrk6Tqs6Ag7JmE7ISx7ZW07JW865CoIOuvuOyZhFxyXG4gIGNvbnN0IHtcclxuICAgIGNvbW1lbnRJZCxcclxuICAgIHRodW1ibmFpbFdpZHRoLFxyXG4gICAgZXhTY29yZSxcclxuICAgIGV4Q29tbWVudCxcclxuICAgIGV4SW1hZ2VTcmMsXHJcbiAgICBpc1Bvc3QsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoZXhTY29yZSk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoZXhDb21tZW50KTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKGV4SW1hZ2VTcmMpO1xyXG4gIGNvbnN0IFt0aHVtYm5haWxTdHlsZSwgc2V0VGh1bWJuYWlsU3R5bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlTWVhc3VyZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1hZ2VNZWFzdXJlbWVudC5zcmMgPSBpbWFnZVNyYztcclxuICAgICAgaW1hZ2VNZWFzdXJlbWVudC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmhlaWdodCAvIHRoaXMud2lkdGg7XHJcbiAgICAgICAgc2V0VGh1bWJuYWlsU3R5bGUoe1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgd2lkdGg6IGAke3RodW1ibmFpbFdpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7dGh1bWJuYWlsV2lkdGggKiByYXRpb31weGAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLnNyY30pYCxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRodW1ibmFpbFN0eWxlKHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2ltYWdlU3JjXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy8gcmV0dXJu7J2EIOyigCDsoJXsnZjtlbTshJwgc3VibWl07J20IOuQkOuKlOqwgOulvCDslYzslYTslbztlahcclxuICAgIHRyeSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmIChzY29yZSA8PSAwIHx8IHNjb3JlID4gNSkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+uzhOygkCDqsJzsiJjqsIAg7Jis67CU66W07KeAIOyViuyKteuLiOuLpCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY29tbWVudC5sZW5ndGggPCA1IHx8IGNvbW1lbnQubGVuZ3RoID4gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn66as67ewIOq4gOyekOyImOqwgCDrp57sp4Ag7JWK7Iq164uI64ukLicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5maWxlcy5sZW5ndGggJiZcclxuICAgICAgICAhdmFsaWRJbWFnZVR5cGUoaW1hZ2VSZWYuY3VycmVudC5maWxlc1swXSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbCgn7J2066+47KeA64qUIGpwZyxqcGVnLHBuZyDtjIzsnbzrp4wg6rCA64ql7ZWp64uI64ukLicpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb3JtT2JqID0gbmV3IEZvcm1EYXRhKGZvcm0uY3VycmVudCk7XHJcbiAgICAgIC8qXHJcbiAgICAgIGZvcm1PYmouYXBwZW5kKCdyZXNlcnZhdGlvbkluZm9JZCxibGFoKTtcclxuICAgICAgZm9ybU9iai5hcHBlbmQoJ2V4SW1hZ2UnLCAhIWV4RGF0YS5pbWFnZVNyYyk7XHJcbiAgICAgICAgICAgIGZvcm1PYmouYXBwZW5kKCduZXdJbWFnZScsIG5ld0ltYWdlKTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGZvcm0uY3VycmVudC5hY3Rpb24sIGZvcm1PYmopO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICBhbGVydE1vZGFsKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBhbGVydE1vZGFsKGlzUG9zdCA/ICfrpqzrt7DqsIAg65Ox66Gd65CY7JeI7Iq164uI64ukJyA6ICfrpqzrt7DqsIAg7IiY7KCV65CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgICAgaWYgKGlzUG9zdCkgaGlzdG9yeS5wdXNoKCcvbXlyZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtb2RpZnlSYXRpbmcgPSAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNldFNjb3JlKHZhbHVlKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkSW1hZ2UgPSAoeyB0YXJnZXQ6IHsgZmlsZXMgfSB9KSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wSW1hZ2UgPSBmaWxlc1swXTtcclxuICAgIGlmICghdmFsaWRJbWFnZVR5cGUodGVtcEltYWdlKSkge1xyXG4gICAgICBhbGVydE1vZGFsKCfsnbTrr7jsp4DripQganBnLGpwZWcscG5nIO2MjOydvOunjCDqsIDriqXtlanri4jri6QnKTtcclxuICAgICAgaW1hZ2VSZWYuY3VycmVudC52YWx1ZSA9ICcnOyAvLyDslYTrp4gg6rOg7LOQ7JW865Cg6rq87J6EXHJcbiAgICAgIHNldEltYWdlU3JjKCcnKTsgLy8g7ZWE7JqU7ZWc7KeAIOuqqOultOqyoOydjFxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRJbWFnZVNyYyh3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCh0ZW1wSW1hZ2UpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYW5jZWxJbWFnZVVwbG9hZCA9ICgpID0+IHtcclxuICAgIGltYWdlUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgIHNldEltYWdlU3JjKCcnKTtcclxuICAgIC8vIG5ld0ltYWdlPSAtMTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiUmV2aWV3RWRpdFwiPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG1ldGhvZD17aXNQb3N0ID8gJ1BPU1QnIDogJ1BVVCd9XHJcbiAgICAgICAgYWN0aW9uPXtgL2FwaS9yZXNlcnZhdGlvbnMvY29tbWVudHMvJHtjb21tZW50SWR9YH1cclxuICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgICAgbmFtZT1cInJldmlld0Zvcm1cIlxyXG4gICAgICAgIHJlZj17Zm9ybX1cclxuICAgICAgPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInJhdGluZ1NlY3Rpb25cIj5cclxuICAgICAgICAgIDxwPuuzhOygkOqzvCDsnbTsmqkg6rK97ZeY7J2EIOuCqOqyqOyjvOyEuOyalC48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1N0YXJcIj5cclxuICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1XS5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZuIGZuLXN0YXIyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPj0gdmFsdWUgPyAnZ2V0U3RhcicgOiAnbm90R2V0U3RhcidcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e21vZGlmeVJhdGluZyh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBuYW1lPVwic2NvcmVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzY29yZX1cclxuICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogc2NvcmUgPiAwID8gJyMwMDAnIDogJyNkZGQnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwid3JpdGVDb21tZW50XCI+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICByb3dzPVwiMTVcIlxyXG4gICAgICAgICAgICBtaW5MZW5ndGg9XCI1XCJcclxuICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNDAwXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q29tbWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0SW1hZ2VcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VMZXR0ZXJDb3VudFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICBpZD1cImltYWdlVXBsb2FkXCJcclxuICAgICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGxvYWRJbWFnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVVwbG9hZFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWltYWdlMVwiIC8+XHJcbiAgICAgICAgICAgICAg7IKs7KeEIOy2lOqwgFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21tZW50Q291bnRcIj5cclxuICAgICAgICAgICAgICB7YCR7Y29tbWVudC5sZW5ndGh9LzQwMCAo7LWc7IaMIDXsnpAg7J207IOBKWB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYm5haWxJbWFnZVwiIHN0eWxlPXt0aHVtYm5haWxTdHlsZX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY3Jvc3MxXCIgb25DbGljaz17Y2FuY2VsSW1hZ2VVcGxvYWR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIHtpc1Bvc3QgPyAoXHJcbiAgICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1Nb2RhbCgn66as67ew66W8IOuTseuhnSDtlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+umrOu3sCDrk7HroZ0nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMUVDODAwJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1FZGl0KGhhbmRsZVN1Ym1pdCwgc2NvcmUsIGNvbW1lbnQsIGltYWdlU3JjKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+yImOyglScsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRDhEQkRFJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1DYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ+y3qOyGjCcsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdFZGl0LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aHVtYm5haWxXaWR0aDogMjAwLFxyXG4gIGV4U2NvcmU6IDAsXHJcbiAgZXhDb21tZW50OiAnJyxcclxuICBleEltYWdlU3JjOiAnJyxcclxuICBpc1Bvc3Q6IHRydWUsXHJcbn07XHJcblxyXG5SZXZpZXdFZGl0LnByb3BUeXBlcyA9IHtcclxuICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdGh1bWJuYWlsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgZXhTY29yZTogUHJvcFR5cGVzLm51bWJlcixcclxuICBleENvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZXhJbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpc1Bvc3Q6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNvbmZpcm1FZGl0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBjb25maXJtQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0VkaXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGlja2V0SGVhZCBmcm9tICcuLi9UaWNrZXRIZWFkJztcclxuaW1wb3J0IFRpY2tldEluZm9MaXN0IGZyb20gJy4uL1RpY2tldEluZm9MaXN0JztcclxuXHJcbmNvbnN0IFRpY2tldCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaW5mb3MsIGNoaWxkcmVuLCBhY3Rpb25zLCBpc0dyZWVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiVGlja2V0XCI+XHJcbiAgICAgIDxUaWNrZXRIZWFkIGlzR3JlZW49e2lzR3JlZW59PntjaGlsZHJlbn08L1RpY2tldEhlYWQ+XHJcbiAgICAgIDxUaWNrZXRJbmZvTGlzdCBpbmZvcz17aW5mb3N9IGFjdGlvbnM9e2FjdGlvbnN9IC8+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblRpY2tldC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNHcmVlbjogZmFsc2UsXHJcbn07XHJcblxyXG5UaWNrZXQucHJvcFR5cGVzID0ge1xyXG4gIGluZm9zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcclxuICBpc0dyZWVuOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFByb2R1Y3REZXNjID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0ZXh0LCBsaW1pdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2lzRm9sZCwgc2V0SXNGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBsZXQgdGV4dE9iajtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRyaW1tZWRUZXh0ID0gdGV4dC50cmltKCk7XHJcbiAgICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICAgIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgbGltaXQpO1xyXG4gICAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UobGltaXQpO1xyXG4gICAgICB0ZXh0T2JqID0geyBzaW1wbGU6IHRleHRTaW1wbGUsIGRldGFpbDogdGV4dERldGFpbCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9O1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd01vcmVEZXNjID0gKCkgPT4ge1xyXG4gICAgaWYgKGlzRm9sZCkge1xyXG4gICAgICAkKCcuUHJvZHVjdERlc2MgLm1vcmVEZXNjJykuc2xpZGVEb3duKCk7XHJcbiAgICAgIHNldElzRm9sZChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcucHJvZHVjdERlc2MgLm1vcmVEZXNjJykuc2xpZGVVcCgpO1xyXG4gICAgICBzZXRJc0ZvbGQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlblRleHQgPSAn7Y687LOQ67O06riwIDxpIGNsYXNzPVwiZm4gZm4tZG93bjJcIj48L2k+JztcclxuICBjb25zdCBmb2xkVGV4dCA9ICfsoJHquLAgPGkgY2xhc3M9XCJmbiBmbi11cDJcIj48L2k+JztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlByb2R1Y3REZXNjXCI+XHJcbiAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHt0ZXh0T2JqLnNpbXBsZX1cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdHNcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc0ZvbGQgPyAnaW5saW5lJyA6ICdub25lJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vcmVEZXNjXCI+e3RleHRPYmouZGV0YWlsfTwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHA+e3RleHRPYmouc2ltcGxlfTwvcD5cclxuICAgICAgKX1cclxuICAgICAge3RleHRPYmouZGV0YWlsID8gKFxyXG4gICAgICAgIDxCdXR0b25CdW5jaFxyXG4gICAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmM2Y1ZjYnLFxyXG4gICAgICAgICAgICAgIGNsaWNrOiBzaG93TW9yZURlc2MsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGlzRm9sZCA/IG9wZW5UZXh0IDogZm9sZFRleHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgJydcclxuICAgICAgKX1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUHJvZHVjdERlc2MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGxpbWl0OiAxMDAsXHJcbn07XHJcblxyXG5Qcm9kdWN0RGVzYy5wcm9wVHlwZXMgPSB7XHJcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERlc2M7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgSW1hZ2VDb250cm9sbGVyIGZyb20gJy4uL0ltYWdlQ29udHJvbGxlcic7XHJcblxyXG4vLyDsiqTtgazroaQg7Iuc6rCEKHRyYW5zaXRpb25UaW1lKSBkZWZhdWx0IDHstIggIOychOyXkOyEnCDrrLzroKTrsJvripTqsoNcclxuLy8g7IOB7YOc66GcIOyCrOyaqe2VmOuKlCDsiqTtgazroaQg7Iuc6rCEICh0cmFuc2l0aW9uRHVyYXRpb24pXHJcbi8vIO2ZlOuptCDsoITtmZgg6rCE6rKpICh0aW1lSW50ZXJ2YWwpIDLstIhcclxuXHJcbmNvbnN0IFByb21vdGlvbkltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aW1lSW50ZXJ2YWwsIHRyYW5zaXRpb25UaW1lIH0gPSBwcm9wcztcclxuICBjb25zdCBbZGVncmVlLCBzZXREZWdyZWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Njcm9sbGFibGUsIHNldFNjcm9sbGFibGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RyYW5zaXRpb25EdXJhdGlvbiwgc2V0VHJhbnNpdGlvbkR1cmF0aW9uXSA9IHVzZVN0YXRlKHRyYW5zaXRpb25UaW1lKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZGF0YTogeyBpdGVtcyB9LFxyXG4gICAgICAgIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvbW90aW9ucycpO1xyXG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbXNbMF0pOyAvLyDsspjsnYzqs7wg66eI7KeA66eJ7J2EIOuPmeydvO2VnCDsnbTrr7jsp4Drpbwg65GQ7Ja07IScIOyKpO2BrOuhpOydhCDrp6TrgYTrn73qsowg7ZWoXHJcbiAgICAgICAgc2V0SW1hZ2VzKGl0ZW1zKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoSW1hZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0b1Njcm9sbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHNjcm9sbGFibGUpIHtcclxuICAgICAgICAvLyDslYTrp4gg6rOg7LOQ7JW8IOuQoOq6vOyehFxyXG4gICAgICAgIGlmIChkZWdyZWUgPT09IGltYWdlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oMCk7XHJcbiAgICAgICAgICBzZXREZWdyZWUoMCk7XHJcbiAgICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24odHJhbnNpdGlvblRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXREZWdyZWUoZGVncmVlICsgMSk7XHJcbiAgICAgIH1cclxuICAgIH0sIHRpbWVJbnRlcnZhbCk7XHJcbiAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlc2l6ZUVuZCA9IChmdW5jKSA9PiB7XHJcbiAgICBsZXQgdGltZXI7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jLCAxMDApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYXVzZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIHNldFNjcm9sbGFibGUoZmFsc2UpO1xyXG4gICAgcmVzaXplRW5kKCgpID0+IHtcclxuICAgICAgc2V0U2Nyb2xsYWJsZSh0cnVlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcGF1c2VTY3JvbGwpO1xyXG4gICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwYXVzZVNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlQ29udHJvbGxlclxyXG4gICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25EdXJhdGlvbn1cclxuICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgIHJlc2l6ZUVuZD17cmVzaXplRW5kfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuUHJvbW90aW9uSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiAyLFxyXG4gIHRpbWVJbnRlcnZhbDogMSxcclxufTtcclxuXHJcblByb21vdGlvbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlcixcclxuICB0aW1lSW50ZXJ2YWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9tb3Rpb25JbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8qXHJcbuyerOyCrOyaqeyEsSDsoovqsowg7Kq86rCc7J6QXHJcbiovXHJcblxyXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlzTWFpbiwgaXNUcmFuc3BhcmVudCwgaXNMb2dvdXRhYmxlIH0gPSBwcm9wcztcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIk5hdkJhclwiPlxyXG4gICAgICB7KChtYWluKSA9PiB7XHJcbiAgICAgICAgaWYgKG1haW4pIHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb250YWluZXIgJHtcclxuICAgICAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQgPyAndHJhbnNwYXJlbnQnIDogJ2ZpeGVkJ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi9pY29uLnBuZ1wiIGFsdD1cIm5hdmVyIGljb25cIiAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxoMj57aXNMb2dvdXRhYmxlID8gJ+uhnOq3uOyVhOybgycgOiAn7JiI7JW97ZmV7J24J308L2gyPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXRocyA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkID0gcGF0aHNbcGF0aHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja3dhcmRcIj5cclxuICAgICAgICAgICAgICA8TGluayB0bz17YC9kZXRhaWwvJHtpdGVtSWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1iYWNrd2FyZDFcIiAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVOYW1lXCI+XHJcbiAgICAgICAgICAgICAgPGgxPu2WieyCrCDsnbTrpoQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbXB0eVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KShpc01haW4pfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgaXNNYWluOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc1RyYW5zcGFyZW50OiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc0xvZ291dGFibGU6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG5cclxuTmF2QmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc01haW46IHRydWUsXHJcbiAgaXNUcmFuc3BhcmVudDogZmFsc2UsXHJcbiAgaXNMb2dvdXRhYmxlOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdENvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgUHJvZHVjdENvbnRhaW5lciAke2NsYXNzTmFtZX1gfT57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuUHJvZHVjdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIk1vZGFsXCI+e2NoaWxkcmVufTwvZGl2PjtcclxufTtcclxuXHJcbk1vZGFsLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgTWFpbkltYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzcmMsIGFsdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiTWFpbkltYWdlXCIgc3JjPXtzcmN9IGFsdD17YWx0fSAvPjtcclxufTtcclxuXHJcbk1haW5JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJldmlld1N1bW1hcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGF2ZXJhZ2VTY29yZSwgcmV2aWV3Q291bnQsIGRpc3BsYXlTdGFyIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiQ29tbWVudFN1bW1hcnlcIj5cclxuICAgICAgPGgyPuyYiOunpOyekCDtlZzspITtj4k8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRDb250YWluZXJcIj5cclxuICAgICAgICAgIHtkaXNwbGF5U3RhcihhdmVyYWdlU2NvcmUpfVxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXZlcmFnZVNjb3JlXCI+e2F2ZXJhZ2VTY29yZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXhTY29yZVwiPi8gNS4wPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRDb250YWluZXJcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRDb3VudFwiPntgJHtyZXZpZXdDb3VudH0g6rG0YH08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbnJvbGxUZXh0XCI+65Ox66GdPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3U3VtbWFyeS5wcm9wVHlwZXMgPSB7XHJcbiAgYXZlcmFnZVNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcmV2aWV3Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBkaXNwbGF5U3RhcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1N1bW1hcnk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4uL1Jldmlldyc7XHJcbmltcG9ydCBSZXZpZXdFZGl0IGZyb20gJy4uL1Jldmlld0VkaXQnO1xyXG5cclxuY29uc3QgUmV2aWV3TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHJldmlld3MsXHJcbiAgICBpc0JyaWVmLFxyXG4gICAgaXNNb2RpZmlhYmxlLFxyXG4gICAgZWRpdENvbW1lbnQsXHJcbiAgICBjb25maXJtRGVsZXRlLFxyXG4gICAgY29uZmlybUVkaXQsXHJcbiAgICBjb25maXJtQ2FuY2VsLFxyXG4gICAgZXhEYXRhOiB7IGlkLCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMgfSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHNob3dSZXZpZXdzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmV2aWV3c0NvbXAgPSBbXTtcclxuICAgIFsuLi5yZXZpZXdzXS5yZXZlcnNlKCkuc29tZSgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpc0JyaWVmICYmIGluZGV4ID49IDUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXZpZXdzQ29tcC5wdXNoKFxyXG4gICAgICAgIDxSZXZpZXdcclxuICAgICAgICAgIGtleT17dmFsdWUuY29tbWVudElkfVxyXG4gICAgICAgICAgcmV2aWV3PXt2YWx1ZS5jb21tZW50fVxyXG4gICAgICAgICAgaW1hZ2U9e1xyXG4gICAgICAgICAgICB2YWx1ZS5jb21tZW50SW1hZ2VzLmxlbmd0aFxyXG4gICAgICAgICAgICAgID8gdmFsdWUuY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWVcclxuICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzY29yZT17dmFsdWUuc2NvcmV9XHJcbiAgICAgICAgICBlbWFpbD17dmFsdWUucmVzZXJ2YXRpb25FbWFpbH1cclxuICAgICAgICAgIGRhdGU9e3ZhbHVlLnJlc2VydmF0aW9uRGF0ZX1cclxuICAgICAgICAgIGVkaXRDb21tZW50PXtlZGl0Q29tbWVudCh2YWx1ZS5jb21tZW50SWQpfVxyXG4gICAgICAgICAgY29uZmlybURlbGV0ZT17Y29uZmlybURlbGV0ZSh2YWx1ZS5jb21tZW50SWQpfVxyXG4gICAgICAgIC8+LFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV2aWV3c0NvbXA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUmV2aWV3TGlzdFwiPlxyXG4gICAgICB7aXNNb2RpZmlhYmxlID8gKFxyXG4gICAgICAgIDxSZXZpZXdFZGl0XHJcbiAgICAgICAgICBjb21tZW50SWQ9e2lkfVxyXG4gICAgICAgICAgZXhTY29yZT17c2NvcmV9XHJcbiAgICAgICAgICBleENvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICBleEltYWdlU3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgIGlzUG9zdD17ZmFsc2V9XHJcbiAgICAgICAgICBjb25maXJtRWRpdD17Y29uZmlybUVkaXQoaWQpfVxyXG4gICAgICAgICAgY29uZmlybUNhbmNlbD17Y29uZmlybUNhbmNlbH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIHNob3dSZXZpZXdzKClcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdMaXN0LnByb3BUeXBlcyA9IHtcclxuICByZXZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGNvbW1lbnRJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgY29tbWVudEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICAgIHNhdmVGaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICB9KSxcclxuICAgICAgKS5pc1JlcXVpcmVkLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIGlzQnJpZWY6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgZWRpdENvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgY29uZmlybURlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRWRpdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGV4RGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==