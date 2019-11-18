(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+LtL":
/*!*************************************!*\
  !*** ./src/jsx/EventInfo/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "c3dY");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





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
/* harmony default export */ __webpack_exports__["default"] = (EventInfo);

/***/ }),

/***/ "134M":
/*!***************************************!*\
  !*** ./src/jsx/ImageSlider/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "Ysws");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MainImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainImage */ "voRo");





var ImageSlider = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
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
    if (isPromotion) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "detail?productId=".concat(value.productId)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: value.saveFileName,
        alt: "promotionImage"
      })));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      src: value.saveFileName,
      alt: "itemImage"
    }));
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
/* harmony default export */ __webpack_exports__["default"] = (ImageSlider);

/***/ }),

/***/ "2w/+":
/*!***************************************!*\
  !*** ./src/jsx/DetailImage/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageController */ "j9uu");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // DetailContainer에서 images와 title을 줘야  하고 images는 필터링을 거쳐놔야 됨
// 스크롤 시간(transitionTime) default 1초
// 화면 전환 간격 (timeInterval) 2초

var DetailImage = function DetailImage(props) {
  var images = props.images,
      title = props.title,
      transitionTime = props.transitionTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
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


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageController__WEBPACK_IMPORTED_MODULE_2__["default"], {
    degree: degree,
    transitionTime: transitionTime,
    images: images,
    resizeEnd: resizeEnd,
    title: title,
    leftScroll: leftScroll,
    rightScroll: rightScroll
  });
};

DetailImage.defaultProps = {
  transitionTime: 0.5
};
DetailImage.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (DetailImage);

/***/ }),

/***/ "459B":
/*!********************************************!*\
  !*** ./src/jsx/ReservationCount/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "RFh2");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);


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
/* harmony default export */ __webpack_exports__["default"] = (ReservationCount);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "4b81");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





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
/* harmony default export */ __webpack_exports__["default"] = (Button);
/*
 * 네이버 배경 초록색: #1ec800 글자색 #fff;
 */

/***/ }),

/***/ "63g5":
/*!*****************************************!*\
  !*** ./src/jsx/MainContainer/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainView */ "M2Ck");
/* harmony import */ var _TabController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TabController */ "h/In");
/* harmony import */ var _ProductBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductBox */ "Ir+m");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var MainContainer = function MainContainer(props) {
  var basisCount = props.basisCount;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCategory = _useState2[0],
      setSelectedCategory = _useState2[1]; // 현재 선택된 카테고리 id


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      productCount = _useState4[0],
      setProductCount = _useState4[1]; //  카테고리의 제품 개수


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Array(6).fill(null)),
      _useState6 = _slicedToArray(_useState5, 2),
      views = _useState6[0],
      setViews = _useState6[1]; // [<MainView/>,<MainView/>]


  var showingCount = 0;
  var categoryProducts = Array(6).fill(null);
  var viewsArr = Array(6).fill(null);
  var labels = ['전체', '전시', '뮤지컬', '콘서트', '클래식', '연극'];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _ref2, items, copiedViews;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/products');

          case 2:
            _ref2 = _context.sent;
            items = _ref2.data.items;
            categoryProducts[0] = items;
            viewsArr[0] = items.slice(basisCount).map(function (value) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
                itemInfo: value
              });
            });
            showingCount += basisCount;
            setProductCount(items.length);
            copiedViews = _toConsumableArray(views);
            copiedViews[0] = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_3__["default"], {
              productCount: productCount,
              products: viewsArr[0]
            });
            setViews(copiedViews);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var showMoreProduct = function showMoreProduct() {
    var viewsLen = viewsArr[selectedCategory].length;

    if (viewsLen >= showingCount + basisCount || viewsLen > showingCount) {
      // 보여주기만 하면 됨
      var finalInd = viewsLen >= showingCount + basisCount ? showingCount + basisCount : viewsLen;

      var copiedViews = _toConsumableArray(views);

      copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        viewsArr[selectedCategory].push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          itemInfo: value
        }));
      });

      var _copiedViews = _toConsumableArray(views);

      _copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_3__["default"], {
        productCount: productCount,
        products: viewsArr[selectedCategory]
      });
      showingCount = _finalInd;
      setViews(_copiedViews);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 카테고리 바뀌었을 때 view바꾸는 과정
    // 1. 최초 과정
    // 2. 최초 아닐 때
    if (!categoryProducts[selectedCategory]) {
      // 1.최초 과정
      // selectedCategory에  상품정보를 넣고
      // views에 MainView를 생성함
      var specificProducts = [];

      var _categoryProducts = _slicedToArray(categoryProducts, 1),
          allProducts = _categoryProducts[0];

      allProducts.forEach(function (value) {
        if (value.categoryId === selectedCategory) {
          specificProducts.push(value);
        }
      });
      categoryProducts[selectedCategory] = specificProducts;
      setProductCount(specificProducts.length); // views에 MainView를 생성함

      viewsArr[selectedCategory] = specificProducts.slice(basisCount).map(function (value) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          itemInfo: value
        });
      });

      var copiedViews = _toConsumableArray(views);

      copiedViews[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

      var _copiedViews2 = _toConsumableArray(views);

      _copiedViews2[selectedCategory] = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_3__["default"], {
        productCount: productCount,
        products: viewsArr[selectedCategory].slice(basisCount)
      });
      showingCount = basisCount;
      setViews(_copiedViews2);
    }
  }, selectedCategory);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MainContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabController__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labels: labels,
    views: views,
    alram: setSelectedCategory
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "more",
    onClick: showMoreProduct,
    style: {
      display: categoryProducts[selectedCategory].length > showingCount ? 'block' : 'none'
    }
  }, "\uB354\uBCF4\uAE30"));
};

MainContainer.defaultProps = {
  basisCount: 4
};
MainContainer.propTypes = {
  basisCount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ }),

/***/ "6Rqs":
/*!**********************************!*\
  !*** ./src/jsx/Layout/index.jsx ***!
  \**********************************/
/*! exports provided: default, ModalContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContext", function() { return ModalContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ "uiVC");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ModalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  setIsModal: function setIsModal() {},
  setModalChildren: function setModalChildren() {},
  alertModal: function alertModal() {},
  confirmModal: function confirmModal() {}
});

var Layout = function Layout(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModal = _useState2[0],
      setIsModal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      modalChildren = _useState4[0],
      setModalChildren = _useState4[1];

  var children = props.children;

  var alertModal = function alertModal(text) {
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    setModalChildren(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isModal) {
      setModalChildren('');
    }
  }, isModal);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalContext.provider, {
    value: {
      setIsModal: setIsModal,
      setModalChildren: setModalChildren,
      alertModal: alertModal,
      confirmModal: confirmModal
    }
  }, children, isModal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], null, modalChildren) : '');
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ }),

/***/ "6rjj":
/*!***************************************!*\
  !*** ./src/jsx/InputTicket/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "pA+x");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





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
/* harmony default export */ __webpack_exports__["default"] = (InputTicket);

/***/ }),

/***/ "88Db":
/*!************************************************!*\
  !*** ./src/jsx/ReservationContainer/index.jsx ***!
  \************************************************/
/*! exports provided: default, ActionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionContext", function() { return ActionContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _Ticket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Ticket */ "o3aN");
/* harmony import */ var _ReservationCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReservationCount */ "459B");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ActionContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  confirmCancelReservation: function confirmCancelReservation() {}
});

var ReservationContainer = function ReservationContainer(props) {
  var emailId = props.emailId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      toUsed = _useState2[0],
      setToUsed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      toUsedLen = _useState4[0],
      setToUsedLen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      canceled = _useState6[0],
      setCanceled = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      canceledLen = _useState8[0],
      setCanceledLen = _useState8[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_3__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var used;
  var usedLen;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _ref2, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/reservations/".concat(emailId));

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
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(id) {
      var _ref4, status, toDeleteIndex, canceledItem, toInsertIndex;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/reservation/".concat(id));

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ActionContext.Provider, {
    value: {
      confirmCancelReservation: confirmCancelReservation
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ReservationContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReservationCount__WEBPACK_IMPORTED_MODULE_5__["default"], {
    toUsedLen: toUsedLen,
    usedLen: usedLen,
    canceledLen: canceledLen
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_4__["default"], {
    infos: toUsed,
    actions: "cancel",
    isGreen: true
  }, "\uC608\uC57D \uD655\uC815"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_4__["default"], {
    infos: used,
    actions: "writeReview"
  }, "\uC774\uC6A9 \uC644\uB8CC"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ticket__WEBPACK_IMPORTED_MODULE_4__["default"], {
    infos: canceled
  }, "\uCDE8\uC18C\uB41C \uC608\uC57D")));
};

ReservationContainer.propTypes = {
  emailId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ReservationContainer);

/*
ReservationContainer → ReservationCount
                                          → Ticket → TicketHead
                                                            → TicketInfoList → TicketInfo
*/

/***/ }),

/***/ "8Lov":
/*!***************************************!*\
  !*** ./src/jsx/ProductInfo/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "4lVE");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TabController */ "h/In");





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
/* harmony default export */ __webpack_exports__["default"] = (ProductInfo);

/***/ }),

/***/ "8ykL":
/*!**********************************!*\
  !*** ./src/jsx/Footer/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "iiGG");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




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
/* harmony default export */ __webpack_exports__["default"] = (Footer);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "b/iz");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ReviewSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ReviewSummary */ "ybHy");
/* harmony import */ var _ReviewList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ReviewList */ "ykme");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// props 수정











var ReviewContainer = function ReviewContainer(props) {
  // 전체적으로 만들고 다시 검토
  var isBrief = props.isBrief,
      displayInfoId = props.displayInfoId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.reviews),
      _useState2 = _slicedToArray(_useState, 2),
      reviews = _useState2[0],
      setReviews = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.averageScore),
      _useState4 = _slicedToArray(_useState3, 2),
      averageScore = _useState4[0],
      setAverageScore = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isModifiable = _useState6[0],
      setIsModifiable = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      exData = _useState8[0],
      setExData = _useState8[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_8__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // reviews가 달라졌을 때 averageScore바꾸는 effect
    var modifiedAverageScore = reviews.reduce(function (accum, current) {
      accum + Number(current.score);
    }) / reviews.length;
    setAverageScore(modifiedAverageScore);
  }, reviews);

  var displayStar = function displayStar(score) {
    var maxScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    // averageScore에 맞게 별점을 리턴하는 함수
    var fillCount = Math.floor(score);
    var notFillCount = maxScore - Math.ceil(score);
    var ratioCount = Math.round(score * 10) / 10 - fillCount;
    var stars = [];

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.times(fillCount, function () {
      stars.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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
      stars.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fn fn-star2 ratioStar",
        style: style
      }));
    }

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.times(notFillCount, function () {
      stars.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fn fn-star2 notGetStar"
      }));
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "starCount"
    }, stars);
  };

  var editComment = function editComment(commentId) {
    // 상세정보 창의 리뷰 수정 버튼 눌렀을 때의 행동
    return (
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _axios$get, _axios$get$response, status, statusText, index, _reviews$index, score, comment, commentImages;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _axios$get = axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/auth/edit/comments/".concat(commentId)), _axios$get$response = _axios$get.response, status = _axios$get$response.status, statusText = _axios$get$response.statusText;

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
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _axios$delete, _axios$delete$respons, status, statusText, modifiedReviews;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  _axios$delete = axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]("/api/reservations/comments/".concat(commentId)), _axios$delete$respons = _axios$delete.response, status = _axios$delete$respons.status, statusText = _axios$delete$respons.statusText;

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

          var modifiedReviews = _toConsumableArray(reviews);

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "CommentContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewSummary__WEBPACK_IMPORTED_MODULE_6__["default"], {
    averageScore: averageScore || '0',
    reviewCount: reviews.length,
    displayStar: displayStar
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    reviews: reviews,
    isBrief: isBrief,
    isModifiable: isModifiable,
    exData: exData,
    confirmDelete: confirmDelete,
    confirmCancel: confirmCancel,
    confirmEdit: confirmEdit,
    editComment: editComment
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-alarm1"
  }), "\uB124\uC774\uBC84 \uC608\uC57D\uC744 \uD1B5\uD574 \uC2E4\uC81C \uBC29\uBB38\uD55C \uC774\uC6A9\uC790\uAC00 \uB0A8\uAE34 \uD3C9\uAC00\uC785\uB2C8\uB2E4.")), isBrief ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    notes: [{
      backgroundColor: '#E9ECEF',
      click: "/review/".concat(displayInfoId),
      children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\uC608\uB9E4\uC790 \uB9AC\uBDF0 \uB354\uBCF4\uAE30", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fn fn-forward1"
      }))
    }]
  }) : '');
};

ReviewContainer.defaultProps = {
  isBrief: true
};
ReviewContainer.propTypes = {
  displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  averageScore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  reviews: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    commentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    productId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reservationEmail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    reservationInfoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    score: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    commentImages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      deleteFlag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
      saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }).isRequired)
  })).isRequired,
  isBrief: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ReviewContainer);

/***/ }),

/***/ "Fyvw":
/*!*************************************!*\
  !*** ./src/jsx/LoginForm/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var LoginForm = function LoginForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "LoginForm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "headerBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\uBE44\uD68C\uC6D0 \uC608\uC57D\uD655\uC778")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uC608\uC57D\uC790 \uC774\uBA54\uC77C \uC785\uB825"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "auth/login",
    method: "POST"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "email",
    value: email,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      setEmail(value);
    },
    placeHolder: "xxxxx@naver.com"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "\uB0B4 \uC608\uC57D \uD655\uC778"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "Ir+m":
/*!**************************************!*\
  !*** ./src/jsx/ProductBox/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "kKml");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ProductBox = function ProductBox(props) {
  var _props$itemInfo = props.itemInfo,
      displayInfoId = _props$itemInfo.displayInfoId,
      productImageUrl = _props$itemInfo.productImageUrl,
      productDescription = _props$itemInfo.productDescription,
      placeName = _props$itemInfo.placeName,
      productContent = _props$itemInfo.productContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      isFold = _useState2[0],
      setIsFold = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isIconShowing = _useState4[0],
      setIsIconShowing = _useState4[1];

  var detailText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var textObj;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(detailText.current).slideDown(100);
    } else {
      setIsFold(true);
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(detailText.current).slideUp(100);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "ProductBox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/detail/".concat(displayInfoId)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "photo",
    style: {
      backgroundImage: "url(\"/".concat(productImageUrl, "\")")
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "head"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, productDescription), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, placeName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mainText",
    onMouseOver: function onMouseOver() {
      setIsIconShowing(true);
    },
    onMouseOut: function onMouseOut() {
      setIsIconShowing(false);
    }
  }, textObj.detail ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, textObj.simple, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dots",
    style: {
      display: isFold ? 'inline' : 'none'
    }
  }, "..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "moreDesc",
    ref: detailText,
    style: {
      display: 'none'
    }
  }, textObj.detail), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "helping"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn ".concat(isFold ? 'fn-dots2' : 'fn-up2'),
    onClick: showAndHide,
    style: {
      color: isIconShowing ? '#000' : 'transparent'
    }
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, textObj.simple))));
};

ProductBox.propTypes = {
  itemInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    productImageUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    productDescription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    placeName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    productContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProductBox);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "n2J4");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReservationContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReservationContainer */ "88Db");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");







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
/* harmony default export */ __webpack_exports__["default"] = (TicketInfo);

/***/ }),

/***/ "KcWC":
/*!********************************************!*\
  !*** ./src/jsx/ReserveContainer/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _ReserveForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ReserveForm */ "SRX6");
/* harmony import */ var _ReserveDesc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReserveDesc */ "PBkl");
/* harmony import */ var _MainImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MainImage */ "voRo");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









var ReserveContainer = function ReserveContainer() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])(),
      displayInfoId = _useParams.displayInfoId;

  var productData;
  var reservationDate;
  var startDate;
  var endDate;
  var imageSrc;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/products/".concat(displayInfoId));

          case 2:
            productData = _context.sent.data;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var diffDays = {
      reserve: Math.floor(Math.random() * 5 + 1)
    };
    diffDays.start = diffDays.reserve - Math.floor(Math.random() * 5 + 1);
    diffDays.end = diffDays.reserve + Math.floor(Math.random() * 5 + 1);
    reservationDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().tz('Asia/Seoul').add(diffDays.reserve, 'days').format('YYYY.MM.DD HH:mm:ss');
    startDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().tz('Asia/Seoul').add(diffDays.start, 'days').format('YYYY.MM.DD.(ddd)');
    endDate = moment__WEBPACK_IMPORTED_MODULE_2___default()().tz('Asia/Seoul').add(diffDays.end, 'days').format('YYYY.MM.DD.(ddd)');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    productData.productImages.some(function (value) {
      if (value.type === 'ma') {
        imageSrc = value.saveFileName;
        return true;
      }

      return false;
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ReserveContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: imageSrc,
    alt: "main image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReserveDesc__WEBPACK_IMPORTED_MODULE_5__["default"], {
    description: productData.displayInfo.productDescription,
    place: productData.displayInfo.placeLot,
    startDate: startDate,
    endDate: endDate,
    productPrices: productData.productPrices
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReserveForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    productPrices: productData.productPrices,
    displayInfoId: displayInfoId,
    productId: productData.displayInfo.productId,
    reservationDate: reservationDate
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReserveContainer);

/***/ }),

/***/ "Kj3g":
/*!*******************************************!*\
  !*** ./src/jsx/DetailContainer/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DetailImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailImage */ "2w/+");
/* harmony import */ var _ProductDesc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProductDesc */ "o4c6");
/* harmony import */ var _EventInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../EventInfo */ "+LtL");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
/* harmony import */ var _ReviewContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ReviewContainer */ "D8/H");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ProductInfo */ "8Lov");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











var DetailContainer = function DetailContainer() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(),
      displayInfoId = _useParams.displayInfoId;

  var productData;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/products/".concat(displayInfoId));

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    images: productData.productImages,
    title: productData.displayInfo.productDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductDesc__WEBPACK_IMPORTED_MODULE_4__["default"], {
    text: productData.displayInfo.productContent
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EventInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    productPrices: productData.productPrices
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    notes: [{
      fontColor: '#fff',
      backgroundColor: '#1ec800',
      click: "/reserve/".concat(displayInfoId),
      children: '<i class="fn fn-nbooking-calender2"></i> 예매하기'
    }]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    displayInfoId: displayInfoId,
    reviews: productData.comments,
    averageScore: productData.averageScore
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    displayInfo: productData.displayInfo,
    locationImgSrc: productData.displayInfoImage.saveFileName
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailContainer);

/***/ }),

/***/ "LB1S":
/*!****************************************!*\
  !*** ./src/jsx/ReserverInfo/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "a7rn");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





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
/* harmony default export */ __webpack_exports__["default"] = (ReserverInfo);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "icCQ");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductContainer */ "tyuF");





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
/* harmony default export */ __webpack_exports__["default"] = (MainView);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _ReviewContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ReviewContainer */ "D8/H");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var ReviewProvider = function ReviewProvider() {
  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      displayInfoId = _useParams.displayInfoId;

  var productData;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/products/".concat(displayInfoId));

          case 2:
            productData = _context.sent.data;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    displayInfoId: displayInfoId,
    averageScore: productData.averageScore,
    reviews: productData.comments,
    isBrief: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewProvider);

/***/ }),

/***/ "O5AH":
/*!**************************************!*\
  !*** ./src/jsx/ImageTitle/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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
/* harmony default export */ __webpack_exports__["default"] = (ImageTitle);

/***/ }),

/***/ "OAMj":
/*!**************************************!*\
  !*** ./src/jsx/TicketHead/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "K8cM");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




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
/* harmony default export */ __webpack_exports__["default"] = (TicketHead);

/***/ }),

/***/ "OELu":
/*!*******************************!*\
  !*** ./src/jsx/TOS/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "LhMA");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var TOS = function TOS(props) {
  var isChecked = props.isChecked,
      dispatch = props.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      isCollectionFold = _useState2[0],
      setIsCollectionFold = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isOfferFold = _useState4[0],
      setIsOfferFold = _useState4[1];

  var foldText = '접기 <i class="fn fn-up2"></i>';
  var showText = '보기 <i class="fn fn-down2"></i>';

  var handleCollectionClick = function handleCollectionClick() {
    if (isCollectionFold) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.collectionUseTerm').slideDown();
      setIsCollectionFold(false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.collectionUseTerm').slideUp();
      setIsCollectionFold(true);
    }
  };

  var handleOfferClick = function handleOfferClick() {
    if (isOfferFold) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.offerTerm').slideDown();
      setIsOfferFold(false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.offerTerm').slideUp();
      setIsOfferFold(true);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aritlce", {
    className: "TOS"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "allAgreement"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "TOSCheck"
  }, "\uC774\uC6A9\uC790 \uC57D\uAD00 \uC804\uCCB4\uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uD544\uC218 \uB3D9\uC758")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "agreement"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book ico_arr_ipc2"
  }), "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "collectionUseAgreement",
    onClick: handleCollectionClick
  }, isCollectionFold ? showText : foldText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "collectionUseTerm",
    style: {
      display: isCollectionFold ? 'none' : 'block'
    }
  }, "<\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "1. \uC218\uC9D1\uD56D\uBAA9 : [\uD544\uC218] \uC774\uB984, \uC5F0\uB77D\uCC98, [\uC120\uD0DD] \uC774\uBA54\uC77C\uC8FC\uC18C", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "2. \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801 : \uC0AC\uC5C5\uC790\uD68C\uC6D0\uACFC \uC608\uC57D\uC774\uC6A9\uC790\uC758 \uC6D0\uD65C\uD55C \uAC70\uB798 \uC9C4\uD589, \uACE0\uAC1D\uC0C1\uB2F4, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0 \uCC98\uB9AC, \uBD84\uC7C1\uC870\uC815 \uD574\uACB0\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uB124\uC774\uBC84 \uC608\uC57D \uC774\uC6A9 \uD6C4 \uB9AC\uBDF0\uC791\uC131\uC5D0 \uB530\uB978 \uB124\uC774\uBC84\uD398\uC774 \uD3EC\uC778\uD2B8 \uC9C0\uAE09 \uBC0F \uAD00\uB828 \uC548\uB0B4", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "3. \uBCF4\uAD00\uAE30\uAC04", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- \uD68C\uC6D0\uD0C8\uD1F4 \uB4F1 \uAC1C\uC778\uC815\uBCF4 \uC774\uC6A9\uBAA9\uC801 \uB2EC\uC131 \uC2DC\uAE4C\uC9C0 \uBCF4\uAD00", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "- \uB2E8, \uC0C1\uBC95 \uBC0F \u2018\uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790 \uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u2019 \uB4F1 \uAD00\uB828 \uBC95\uB839\uC5D0 \uC758\uD558\uC5EC \uC77C\uC815 \uAE30\uAC04 \uBCF4\uAD00\uC774 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uAD00\uD568", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "4. \uB3D9\uC758 \uAC70\uBD80\uAD8C \uB4F1\uC5D0 \uB300\uD55C \uACE0\uC9C0: \uC815\uBCF4\uC8FC\uCCB4\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758\uB97C \uAC70\uBD80\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098, \uC774 \uACBD\uC6B0 \uC0C1\uD488 \uBC0F \uC11C\uBE44\uC2A4 \uC608\uC57D\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "agreement"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book ico_arr_ipc2"
  }), "\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "offerAgreement",
    onClick: handleOfferClick
  }, isOfferFold ? showText : foldText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "offerTerm",
    style: {
      display: isOfferFold ? 'none' : 'block'
    }
  }, "<\uAC1C\uC778\uC815\uBCF4 \uC81C3\uC790 \uC81C\uACF5 \uB3D9\uC758>", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "1. \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790 : \uBBF8\uB514\uC5B4\uC564\uC544\uD2B8", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "2. \uC81C\uACF5\uD558\uB294 \uAC1C\uC778\uC815\uBCF4 \uD56D\uBAA9 : [\uD544\uC218] \uB124\uC774\uBC84 \uC544\uC774\uB514, \uC774\uB984, \uC5F0\uB77D\uCC98 [\uC120\uD0DD] \uC774\uBA54\uC77C \uC8FC\uC18C", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "3. \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790\uC758 \uC774\uC6A9\uBAA9\uC801 : \uC0AC\uC5C5\uC790\uD68C\uC6D0\uACFC \uC608\uC57D\uC774\uC6A9\uC790\uC758 \uC6D0\uD65C\uD55C \uAC70\uB798 \uC9C4\uD589, \uACE0\uAC1D\uC0C1\uB2F4, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0 \uCC98\uB9AC, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB530\uB978 \uC124\uBB38\uC870\uC0AC \uBC0F \uD61C\uD0DD \uC81C\uACF5, \uBD84\uC7C1\uC870\uC815 \uD574\uACB0\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "4. \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uB294 \uC790\uC758 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04 : \uAC1C\uC778\uC815\uBCF4 \uC774\uC6A9\uBAA9\uC801 \uB2EC\uC131 \uC2DC \uAE4C\uC9C0 \uBCF4\uAD00\uD569\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "5. \uB3D9\uC758 \uAC70\uBD80\uAD8C \uB4F1\uC5D0 \uB300\uD55C \uACE0\uC9C0 : \uC815\uBCF4\uC8FC\uCCB4\uB294 \uAC1C\uC778\uC815\uBCF4 \uC81C\uACF5 \uB3D9\uC758\uB97C \uAC70\uBD80\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098, \uC774 \uACBD\uC6B0 \uC0C1\uD488 \uBC0F \uC11C\uBE44\uC2A4 \uC608\uC57D\uC774 \uC81C\uD55C\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
};

TOS.propTypes = {
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TOS);

/***/ }),

/***/ "OjBz":
/*!******************************************!*\
  !*** ./src/jsx/TicketInfoList/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TicketInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TicketInfo */ "KTKg");




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
/* harmony default export */ __webpack_exports__["default"] = (TicketInfoList);

/***/ }),

/***/ "PBkl":
/*!***************************************!*\
  !*** ./src/jsx/ReserveDesc/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "pDfU");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);





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
/* harmony default export */ __webpack_exports__["default"] = (ReserveDesc);

/***/ }),

/***/ "PN5m":
/*!**********************************!*\
  !*** ./src/jsx/Header/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "ZbdK");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




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

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "qY7+");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _InputTicket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputTicket */ "6rjj");
/* harmony import */ var _ReserverInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ReserverInfo */ "LB1S");
/* harmony import */ var _TOS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TOS */ "OELu");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState(productPrices.length)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_5__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var reservationInfo, index, len, _ref2, status, statusText;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
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

              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/reservations', reservationInfo);

            case 4:
              _ref2 = _context.sent;
              status = _ref2.status;
              statusText = _ref2.statusText;

              if (status === 400) {
                alertModal(statusText);
              } else if (status === 201) {
                alertModal('예매가 성공적으로 승인되었습니다');
                history.push("/detail/".concat(displayInfoId));
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ReserveForm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "/api/reservations",
    method: "post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputTicket__WEBPACK_IMPORTED_MODULE_6__["default"], {
    productPrices: productPrices,
    tickets: state.tickets,
    dispatch: dispatch
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReserverInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TOS__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isChecked: state.TOS,
    dispatch: dispatch
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    style: {
      backgroundColor: state.submit ? '#1EC900' : '#D1D1D1'
    },
    onClick: confirmSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spr_book ico_naver_s"
  }), "\uC608\uC57D\uD558\uAE30")));
};

ReserveForm.propTypes = {
  productPrices: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  displayInfoId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequred,
  productId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  reservationDate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ReserveForm);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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
/* harmony default export */ __webpack_exports__["default"] = (TabView);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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
/* harmony default export */ __webpack_exports__["default"] = (Review);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "Jj3P");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




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
/* harmony default export */ __webpack_exports__["default"] = (TabUI);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TabUI */ "eus6");
/* harmony import */ var _TabView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TabView */ "TA1R");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var TabController = function TabController(props) {
  var labels = props.labels,
      views = props.views,
      alarm = props.alarm;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TabController"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabUI__WEBPACK_IMPORTED_MODULE_2__["default"], {
    labels: labels,
    selected: selected,
    handleClick: handleClick
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabView__WEBPACK_IMPORTED_MODULE_3__["default"], {
    view: views,
    selected: selected
  }));
};

TabController.defaultProps = {
  alarm: false
};
TabController.propTypes = {
  labels: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired).isRequired,
  views: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired).isRequired,
  alarm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool])
}; // 알람이 있다면 상위 컴포넌트에 어디에 눌렀는지 변화를 알려줘 동적 뷰변화를 가능케함

/* harmony default export */ __webpack_exports__["default"] = (TabController);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "f5hE");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "5A9N");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var applyStyle = function applyStyle(style) {
  if (typeof style === 'number') {
    return "".concat(style, "px");
  }

  if (toString.call(style) === '[object Array]' && style.length === 1) {
    var _style = _slicedToArray(style, 1),
        all = _style[0];

    return "".concat(all, "px");
  }

  if (toString.call(style) === '[object Array]' && style.length === 2) {
    var _style2 = _slicedToArray(style, 2),
        vertical = _style2[0],
        horizontal = _style2[1];

    return "".concat(vertical, "px ").concat(horizontal, "px");
  }

  if (toString.call(style) === '[object Array]' && style.length === 4) {
    var _style3 = _slicedToArray(style, 4),
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ButtonBunch",
    style: {
      margin: applyStyle(margin),
      padding: applyStyle(padding)
    }
  }, notes.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  notes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    fontColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    click: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
  })).isRequired,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  padding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonBunch);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ImageSlider */ "134M");
/* harmony import */ var _ImageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageTitle */ "O5AH");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ImageController = function ImageController(props) {
  var degree = props.degree,
      transitionTime = props.transitionTime,
      images = props.images,
      resizeEnd = props.resizeEnd,
      title = props.title,
      leftScroll = props.leftScroll,
      rightScroll = props.rightScroll;
  var imageList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      imageWidth = _useState2[0],
      setImageWidth = _useState2[1];

  var getImageWidth = function getImageWidth() {
    resizeEnd(function () {
      setImageWidth(imageList.current.firstElementChild.clientWidth);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setImageWidth(imageList.current.firstElementChild.clientWidth);
    window.addEventListener('resize', getImageWidth);
    return window.removeEventListener('resize', getImageWidth);
  }, []);
  return title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: imageList,
    degree: degree,
    transitionTime: transitionTime,
    images: images,
    imageWidth: imageWidth,
    isPromotion: false
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    degree: degree,
    imageLen: images.length,
    title: title,
    leftScroll: leftScroll,
    rightScroll: rightScroll
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: imageList,
    degree: degree,
    transitionTime: transitionTime,
    images: images,
    imageWidth: imageWidth,
    isPromotion: true
  });
};

ImageController.propTypes = {
  degree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  resizeEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  leftScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  rightScroll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ImageController);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../js/common */ "RAok");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout */ "6Rqs");
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
var _this = undefined;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(exScore),
      _useState2 = _slicedToArray(_useState, 2),
      score = _useState2[0],
      setScore = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(exComment),
      _useState4 = _slicedToArray(_useState3, 2),
      comment = _useState4[0],
      setComment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(exImageSrc),
      _useState6 = _slicedToArray(_useState5, 2),
      imageSrc = _useState6[0],
      setImageSrc = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      thumbnailStyle = _useState8[0],
      setThumbnailStyle = _useState8[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Layout__WEBPACK_IMPORTED_MODULE_5__["ModalContext"]),
      alertModal = _useContext.alertModal,
      confirmModal = _useContext.confirmModal;

  var form = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
  }, imageSrc);

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var formObj, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
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
              if (!(imageRef.current.files.length && !Object(_js_common__WEBPACK_IMPORTED_MODULE_4__["validImageType"])(imageRef.current.files[0]))) {
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
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(form.current.action, formObj);

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

    if (!Object(_js_common__WEBPACK_IMPORTED_MODULE_4__["validImageType"])(tempImage)) {
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ReviewEdit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    method: isPost ? 'POST' : 'PUT',
    action: "/api/reservations/comments/".concat(commentId),
    encType: "multipart/form-data",
    name: "reviewForm",
    ref: form
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "ratingSection"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uBCC4\uC810\uACFC \uC774\uC6A9 \uACBD\uD5D8\uC744 \uB0A8\uACA8\uC8FC\uC138\uC694."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ratingStar"
  }, [1, 2, 3, 4, 5].map(function (value) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fn fn-star2 ".concat(score >= value ? 'getStar' : 'notGetStar'),
      onClick: modifyRating(value)
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    name: "score",
    value: score,
    readOnly: true,
    style: {
      color: score > 0 ? '#000' : '#ddd'
    }
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "writeComment"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    name: "comment",
    rows: "15",
    minLength: "5",
    maxLength: "400",
    value: comment,
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      setComment(value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "postImage"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "imageLetterCount"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    name: "image",
    id: "imageUpload",
    ref: imageRef,
    onChange: uploadImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "imageUpload"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-image1"
  }), "\uC0AC\uC9C4 \uCD94\uAC00"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "commentCount"
  }, "".concat(comment.length, "/400 (\uCD5C\uC18C 5\uC790 \uC774\uC0C1)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thumbnailImage",
    style: thumbnailStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fn fn-cross1",
    onClick: cancelImageUpload
  })))), isPost ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    notes: [{
      backgroundColor: '#1EC800',
      click: function click() {
        confirmModal('리뷰를 등록 하시겠습니까?', handleSubmit);
      },
      children: '리뷰 등록'
    }]
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

ReviewEdit.defaultProps = {
  thumbnailWidth: 200,
  exScore: 0,
  exComment: '',
  exImageSrc: '',
  isPost: true
};
ReviewEdit.propTypes = {
  commentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  thumbnailWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  exScore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  exComment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  exImageSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isPost: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  confirmEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  confirmCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ReviewEdit);

/***/ }),

/***/ "o3aN":
/*!**********************************!*\
  !*** ./src/jsx/Ticket/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TicketHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TicketHead */ "OAMj");
/* harmony import */ var _TicketInfoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TicketInfoList */ "OjBz");





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
/* harmony default export */ __webpack_exports__["default"] = (Ticket);

/***/ }),

/***/ "o4c6":
/*!***************************************!*\
  !*** ./src/jsx/ProductDesc/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "A7Qy");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ButtonBunch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonBunch */ "iqGm");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ProductDesc = function ProductDesc(props) {
  var text = props.text,
      limit = props.limit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      isFold = _useState2[0],
      setIsFold = _useState2[1];

  var textObj;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ProductDesc .moreDesc').slideDown();
      setIsFold(false);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productDesc .moreDesc').slideUp();
      setIsFold(true);
    }
  };

  var openText = '펼쳐보기 <i class="fn fn-down2"></i>';
  var foldText = '접기 <i class="fn fn-up2"></i>';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "ProductDesc"
  }, textObj.detail ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, textObj.simple, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dots",
    style: {
      display: isFold ? 'inline' : 'none'
    }
  }, "..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "moreDesc"
  }, textObj.detail)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, textObj.simple), textObj.detail ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonBunch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    notes: [{
      backgroundColor: '#f3f5f6',
      click: showMoreDesc,
      children: isFold ? openText : foldText
    }]
  }) : '');
};

ProductDesc.defaultProps = {
  limit: 100
};
ProductDesc.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (ProductDesc);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ImageController */ "j9uu");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // 스크롤 시간(transitionTime) default 1초  위에서 물려받는것
// 상태로 사용하는 스크롤 시간 (transitionDuration)
// 화면 전환 간격 (timeInterval) 2초

var PromotionImage = function PromotionImage(props) {
  var timeInterval = props.timeInterval,
      transitionTime = props.transitionTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      degree = _useState2[0],
      setDegree = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollable = _useState4[0],
      setScrollable = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(transitionTime),
      _useState6 = _slicedToArray(_useState5, 2),
      transitionDuration = _useState6[0],
      setTransitionDuration = _useState6[1];

  var images; // 안되면 상태로

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _ref2, items;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/promotions');

          case 2:
            _ref2 = _context.sent;
            items = _ref2.data.items;
            items.push(items[0]); // 처음과 마지막을 동일한 이미지를 두어서 스크롤을 매끄럽게 함

            images = items;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', pauseScroll);
    return window.removeEventListener('resize', pauseScroll);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageController__WEBPACK_IMPORTED_MODULE_3__["default"], {
    degree: degree,
    transitionTime: transitionDuration,
    images: images,
    resizeEnd: resizeEnd
  });
};

PromotionImage.defaultProps = {
  transitionTime: 2,
  timeInterval: 1
};
PromotionImage.propTypes = {
  transitionTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  timeInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (PromotionImage);

/***/ }),

/***/ "twHJ":
/*!**********************************!*\
  !*** ./src/jsx/NavBar/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "Ty5D");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "J+1A");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);





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
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "tyuF":
/*!********************************************!*\
  !*** ./src/jsx/ProductContainer/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "j70U");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




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
/* harmony default export */ __webpack_exports__["default"] = (ProductContainer);

/***/ }),

/***/ "uiVC":
/*!*********************************!*\
  !*** ./src/jsx/Modal/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "SjEC");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




var Modal = function Modal(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Modal"
  }, children);
};

Modal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "voRo":
/*!*************************************!*\
  !*** ./src/jsx/MainImage/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



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
/* harmony default export */ __webpack_exports__["default"] = (MainImage);

/***/ }),

/***/ "ybHy":
/*!*****************************************!*\
  !*** ./src/jsx/ReviewSummary/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "aYjU");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);




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
/* harmony default export */ __webpack_exports__["default"] = (ReviewSummary);

/***/ }),

/***/ "ykme":
/*!**************************************!*\
  !*** ./src/jsx/ReviewList/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Review */ "bUiE");
/* harmony import */ var _ReviewEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ReviewEdit */ "nx9d");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






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

    _toConsumableArray(reviews).reverse().some(function (value, index) {
      if (isBrief && index >= 5) {
        return true;
      }

      reviewsComp.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Review__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ReviewList"
  }, isModifiable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  reviews: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    commentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    score: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    email: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    commentImages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      saveFileName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })).isRequired
  })).isRequired,
  isBrief: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  editComment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  confirmDelete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  confirmEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  confirmCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  exData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    score: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ReviewList);

/***/ })

},[["NO5J","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZVNsaWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9EZXRhaWxJbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZhdGlvbkNvdW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbi9zdHlsZS5jc3M/ZmY0YSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL3N0eWxlLmNzcz9hNmI5Iiwid2VicGFjazovLy8uL3NyYy9qc3gvQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L01haW5Db250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvTGF5b3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0lucHV0VGlja2V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmF0aW9uQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9BcHAvc3R5bGUuY3NzPzEyMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9zdHlsZS5jc3M/MDBlYiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld0NvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Mb2dpbkZvcm0vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEJveC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9OYXZCYXIvc3R5bGUuY3NzPzFjZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UYWJVSS9zdHlsZS5jc3M/YTQ4MCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEhlYWQvc3R5bGUuY3NzPzg2ZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UaWNrZXRJbmZvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVDb250YWluZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvRGV0YWlsQ29udGFpbmVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVySW5mby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UT1Mvc3R5bGUuY3NzPzgyYjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluVmlldy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9BcHAvYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jldmlld1Byb3ZpZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0ltYWdlVGl0bGUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SGVhZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9UT1MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvVGlja2V0SW5mb0xpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZURlc2MvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2YXRpb25Db3VudC9zdHlsZS5jc3M/YzFlYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZSBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlRm9ybS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9zdHlsZS5jc3M/Yjc2ZiIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlZpZXcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvSW1hZ2VTbGlkZXIvc3R5bGUuY3NzP2U5MWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9IZWFkZXIvc3R5bGUuY3NzPzZjYjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXNlcnZlckluZm8vc3R5bGUuY3NzP2NlZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdTdW1tYXJ5L3N0eWxlLmNzcz81N2JjIiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3Q29udGFpbmVyL3N0eWxlLmNzcz9mYjM0Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0V2ZW50SW5mby9zdHlsZS5jc3M/OTRiOSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RhYlVJL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbkJ1bmNoL3N0eWxlLmNzcz8zZDhiIiwid2VicGFjazovLy8uL3NyYy9qc3gvVGFiQ29udHJvbGxlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluVmlldy9zdHlsZS5jc3M/NDUxNCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0Zvb3Rlci9zdHlsZS5jc3M/YTAzZSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L0J1dHRvbkJ1bmNoL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb2R1Y3RDb250YWluZXIvc3R5bGUuY3NzPzAzZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbWFnZUNvbnRyb2xsZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdEJveC9zdHlsZS5jc3M/NDZlYyIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm8vc3R5bGUuY3NzP2FkMTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdFZGl0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9kdWN0RGVzYy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9JbnB1dFRpY2tldC9zdHlsZS5jc3M/N2I2YSIsIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Jlc2VydmVEZXNjL3N0eWxlLmNzcz9hYzA4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmVzZXJ2ZUZvcm0vc3R5bGUuY3NzPzMyMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Qcm9tb3Rpb25JbWFnZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9OYXZCYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUHJvZHVjdENvbnRhaW5lci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9Nb2RhbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9NYWluSW1hZ2UvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9qc3gvUmV2aWV3U3VtbWFyeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzeC9SZXZpZXdMaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJFdmVudEluZm8iLCJwcm9wcyIsInByb2R1Y3RQcmljZXMiLCJzaG93RGlzY291bnRJbmZvIiwiZGlzY291bnRJbmZvIiwiZm9yRWFjaCIsInZhbHVlIiwiTnVtYmVyIiwiZGlzY291bnRSYXRlIiwiRVBTSUxPTiIsInB1c2giLCJwcmljZVR5cGVNYXBwZXIiLCJwcmljZVR5cGVOYW1lIiwiTWF0aCIsInJvdW5kIiwibGVuZ3RoIiwiZGlzY291bnRUZXh0Iiwiam9pbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJJbWFnZVNsaWRlciIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImRlZ3JlZSIsInRyYW5zaXRpb25UaW1lIiwiaW1hZ2VzIiwiaW1hZ2VXaWR0aCIsImlzUHJvbW90aW9uIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibWFwIiwiaW5kZXgiLCJwcm9kdWN0SWQiLCJzYXZlRmlsZU5hbWUiLCJudW1iZXIiLCJib29sIiwiRGV0YWlsSW1hZ2UiLCJ0aXRsZSIsInVzZVN0YXRlIiwic2V0RGVncmVlIiwicmVzaXplRW5kIiwiZnVuYyIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImxlZnRTY3JvbGwiLCJyaWdodFNjcm9sbCIsImRlZmF1bHRQcm9wcyIsImFycmF5IiwiUmVzZXJ2YXRpb25Db3VudCIsInRvVXNlZExlbiIsInVzZWRMZW4iLCJjYW5jZWxlZExlbiIsIkJ1dHRvbiIsImZvbnRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImNsaWNrIiwiY2hpbGRyZW4iLCJjb2xvciIsIm9uZU9mVHlwZSIsIm5vZGUiLCJNYWluQ29udGFpbmVyIiwiYmFzaXNDb3VudCIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZENhdGVnb3J5IiwicHJvZHVjdENvdW50Iiwic2V0UHJvZHVjdENvdW50IiwiQXJyYXkiLCJmaWxsIiwidmlld3MiLCJzZXRWaWV3cyIsInNob3dpbmdDb3VudCIsImNhdGVnb3J5UHJvZHVjdHMiLCJ2aWV3c0FyciIsImxhYmVscyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiaXRlbXMiLCJkYXRhIiwic2xpY2UiLCJjb3BpZWRWaWV3cyIsInNob3dNb3JlUHJvZHVjdCIsInZpZXdzTGVuIiwiZmluYWxJbmQiLCJwcm9kdWN0c0xlbiIsInNwZWNpZmljUHJvZHVjdHMiLCJhbGxQcm9kdWN0cyIsImNhdGVnb3J5SWQiLCJkaXNwbGF5IiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNldElzTW9kYWwiLCJzZXRNb2RhbENoaWxkcmVuIiwiYWxlcnRNb2RhbCIsImNvbmZpcm1Nb2RhbCIsIkxheW91dCIsImlzTW9kYWwiLCJtb2RhbENoaWxkcmVuIiwidGV4dCIsImFjdGlvbiIsIklucHV0VGlja2V0IiwidGlja2V0cyIsImRpc3BhdGNoIiwidHJhbnNmb3JtTW9uZXlVbml0IiwicHJpY2UiLCJvcmlnaW5hbENvc3QiLCJ0eXBlIiwid2hlcmUiLCJBY3Rpb25Db250ZXh0IiwiY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIiwiUmVzZXJ2YXRpb25Db250YWluZXIiLCJlbWFpbElkIiwidG9Vc2VkIiwic2V0VG9Vc2VkIiwic2V0VG9Vc2VkTGVuIiwiY2FuY2VsZWQiLCJzZXRDYW5jZWxlZCIsInNldENhbmNlbGVkTGVuIiwidXNlQ29udGV4dCIsInVzZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJjYW5jZWxSZXNlcnZhdGlvbiIsImlkIiwicHV0Iiwic3RhdHVzIiwidG9EZWxldGVJbmRleCIsImZpbmRJbmRleCIsInJlc2VydmF0aW9uSW5mb0lkIiwiY2FuY2VsZWRJdGVtIiwic3BsaWNlIiwidG9JbnNlcnRJbmRleCIsIlByb2R1Y3RJbmZvIiwiZGlzcGxheUluZm8iLCJwcm9kdWN0Q29udGVudCIsInByb2R1Y3REZXNjcmlwdGlvbiIsInBsYWNlTG90IiwicGxhY2VTdHJlZXQiLCJwbGFjZU5hbWUiLCJ0ZWxlcGhvbmUiLCJsb2NhdGlvbkltZ1NyYyIsIkZvb3RlciIsInRvcCIsImlzVG9wTmVlZCIsIlJldmlld0NvbnRhaW5lciIsImlzQnJpZWYiLCJkaXNwbGF5SW5mb0lkIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJhdmVyYWdlU2NvcmUiLCJzZXRBdmVyYWdlU2NvcmUiLCJpc01vZGlmaWFibGUiLCJzZXRJc01vZGlmaWFibGUiLCJleERhdGEiLCJzZXRFeERhdGEiLCJtb2RpZmllZEF2ZXJhZ2VTY29yZSIsInJlZHVjZSIsImFjY3VtIiwiY3VycmVudCIsInNjb3JlIiwiZGlzcGxheVN0YXIiLCJtYXhTY29yZSIsImZpbGxDb3VudCIsImZsb29yIiwibm90RmlsbENvdW50IiwiY2VpbCIsInJhdGlvQ291bnQiLCJzdGFycyIsIl8iLCJ0aW1lcyIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ2xpcCIsIldlYmtpdEJhY2tncm91bmRDbGlwIiwiV2Via2l0VGV4dEZpbGxDb2xvciIsImVkaXRDb21tZW50IiwiY29tbWVudElkIiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0IiwiY29tbWVudCIsImNvbW1lbnRJbWFnZXMiLCJpbWFnZVNyYyIsImRlbGV0ZUNvbW1lbnQiLCJtb2RpZmllZFJldmlld3MiLCJmaWx0ZXIiLCJjb25maXJtRGVsZXRlIiwiY29uZmlybUVkaXQiLCJzdWJtaXQiLCJpc1Byb2Nlc3NlZCIsImNvbmZpcm1DYW5jZWwiLCJyZXNlcnZhdGlvbkRhdGUiLCJyZXNlcnZhdGlvbkVtYWlsIiwiZGVsZXRlRmxhZyIsIkxvZ2luRm9ybSIsImVtYWlsIiwic2V0RW1haWwiLCJ0YXJnZXQiLCJQcm9kdWN0Qm94IiwiaXRlbUluZm8iLCJwcm9kdWN0SW1hZ2VVcmwiLCJpc0ZvbGQiLCJzZXRJc0ZvbGQiLCJpc0ljb25TaG93aW5nIiwic2V0SXNJY29uU2hvd2luZyIsImRldGFpbFRleHQiLCJ1c2VSZWYiLCJ0ZXh0T2JqIiwidHJpbW1lZFRleHQiLCJ0cmltIiwicmVwbGFjZSIsImxpbWl0IiwidGV4dFNpbXBsZSIsInRleHREZXRhaWwiLCJzaW1wbGUiLCJkZXRhaWwiLCJzaG93QW5kSGlkZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9waW1tZWRpYXRlIiwiJCIsInNsaWRlRG93biIsInNsaWRlVXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJUaWNrZXRJbmZvIiwiaW5mbyIsImRlc2NyaXB0aW9uIiwicmVzZXJ2YXRpb25OYW1lIiwicmVzZXJ2YXRpb25UZWwiLCJwcmljZUluZm8iLCJ0b3RhbFByaWNlIiwiYWN0aW9ucyIsInJlc2VydmF0aW9uU3VtbWFyeSIsImNvdW50IiwiY3JlYXRlQnV0dG9uIiwibm90ZXMiLCJTdHJpbmciLCJwYWRTdGFydCIsIlJlc2VydmVDb250YWluZXIiLCJ1c2VQYXJhbXMiLCJwcm9kdWN0RGF0YSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJkaWZmRGF5cyIsInJlc2VydmUiLCJyYW5kb20iLCJzdGFydCIsImVuZCIsIm1vbWVudCIsInR6IiwiYWRkIiwiZm9ybWF0IiwicHJvZHVjdEltYWdlcyIsInNvbWUiLCJEZXRhaWxDb250YWluZXIiLCJjb21tZW50cyIsImRpc3BsYXlJbmZvSW1hZ2UiLCJSZXNlcnZlckluZm8iLCJuYW1lIiwidG90YWxUaWNrZXQiLCJpc1ZlcmlmaWVkTmFtZSIsImlzVmVyaWZpZWRUZWwiLCJpc1ZlcmlmaWVkRW1haWwiLCJtYWtlQWxlcnQiLCJoaWRlIiwiTWFpblZpZXciLCJwcm9kdWN0cyIsImxlZnRQcm9kdWN0cyIsInJpZ2h0UHJvZHVjdHMiLCJDb3VudFRleHQiLCJlbGVtZW50IiwiaGFuZGxlQ2xpY2siLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXZpZXdQcm92aWRlciIsIkltYWdlVGl0bGUiLCJpbWFnZUxlbiIsIlRpY2tldEhlYWQiLCJpc0dyZWVuIiwiVE9TIiwiaXNDaGVja2VkIiwiaXNDb2xsZWN0aW9uRm9sZCIsInNldElzQ29sbGVjdGlvbkZvbGQiLCJpc09mZmVyRm9sZCIsInNldElzT2ZmZXJGb2xkIiwiZm9sZFRleHQiLCJzaG93VGV4dCIsImhhbmRsZUNvbGxlY3Rpb25DbGljayIsImhhbmRsZU9mZmVyQ2xpY2siLCJjaGVja2VkIiwiVGlja2V0SW5mb0xpc3QiLCJpbmZvcyIsIlJlc2VydmVEZXNjIiwicGxhY2UiLCJwcmljZVRleHQiLCJwcmljZUxpc3QiLCJIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJpc1RPU0NoZWNrZWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJtb2RpZmllZERlYyIsIm1vZGlmaWVkSW5jIiwidGVzdCIsInRlbFJlIiwiZW1haWxSZSIsIkVycm9yIiwiUmVzZXJ2ZUZvcm0iLCJ1c2VSZWR1Y2VyIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJoYW5kbGVTdWJtaXQiLCJyZXNlcnZhdGlvbkluZm8iLCJwcmljZXMiLCJyZXNlcnZhdGlvblRlbGVwaG9uZSIsInJlc2VydmF0aW9uWWVhck1vbnRoRGF5IiwibGVuIiwicHJvZHVjdFByaWNlSWQiLCJwcm9kdWN0UHJpY2VJRCIsInBvc3QiLCJjb25maXJtU3VibWl0Iiwic3BsaXQiLCJpc1JlcXVyZWQiLCJUYWJWaWV3Iiwic2VsZWN0ZWQiLCJmaW5kIiwiUmV2aWV3IiwicmV2aWV3IiwiaW1hZ2UiLCJkYXRlIiwiVGFiVUkiLCJsYWJlbCIsIlRhYkNvbnRyb2xsZXIiLCJhbGFybSIsInNldFNlbGVjdGVkIiwiYXBwbHlTdHlsZSIsInRvU3RyaW5nIiwiY2FsbCIsImFsbCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJCdXR0b25CdW5jaCIsIm1hcmdpbiIsInBhZGRpbmciLCJJbWFnZUNvbnRyb2xsZXIiLCJpbWFnZUxpc3QiLCJzZXRJbWFnZVdpZHRoIiwiZ2V0SW1hZ2VXaWR0aCIsImZpcnN0RWxlbWVudENoaWxkIiwiY2xpZW50V2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlJldmlld0VkaXQiLCJ0aHVtYm5haWxXaWR0aCIsImV4U2NvcmUiLCJleENvbW1lbnQiLCJleEltYWdlU3JjIiwiaXNQb3N0Iiwic2V0U2NvcmUiLCJzZXRDb21tZW50Iiwic2V0SW1hZ2VTcmMiLCJ0aHVtYm5haWxTdHlsZSIsInNldFRodW1ibmFpbFN0eWxlIiwiZm9ybSIsImltYWdlUmVmIiwiaW1hZ2VNZWFzdXJlbWVudCIsIkltYWdlIiwic3JjIiwib25sb2FkIiwicmF0aW8iLCJoZWlnaHQiLCJ3aWR0aCIsImZpbGVzIiwidmFsaWRJbWFnZVR5cGUiLCJmb3JtT2JqIiwiRm9ybURhdGEiLCJtb2RpZnlSYXRpbmciLCJ1cGxvYWRJbWFnZSIsInRlbXBJbWFnZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNhbmNlbEltYWdlVXBsb2FkIiwiVGlja2V0IiwiUHJvZHVjdERlc2MiLCJzaG93TW9yZURlc2MiLCJvcGVuVGV4dCIsIlByb21vdGlvbkltYWdlIiwidGltZUludGVydmFsIiwic2Nyb2xsYWJsZSIsInNldFNjcm9sbGFibGUiLCJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCJhdXRvU2Nyb2xsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGF1c2VTY3JvbGwiLCJOYXZCYXIiLCJpc01haW4iLCJpc1RyYW5zcGFyZW50IiwiaXNMb2dvdXRhYmxlIiwidXNlTG9jYXRpb24iLCJwYXRobmFtZSIsIm1haW4iLCJwYXRocyIsIml0ZW1JZCIsIlByb2R1Y3RDb250YWluZXIiLCJjbGFzc05hbWUiLCJNb2RhbCIsIk1haW5JbWFnZSIsImFsdCIsIlJldmlld1N1bW1hcnkiLCJyZXZpZXdDb3VudCIsIlJldmlld0xpc3QiLCJzaG93UmV2aWV3cyIsInJldmlld3NDb21wIiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNuQkMsYUFEbUIsR0FDREQsS0FEQyxDQUNuQkMsYUFEbUI7O0FBRzNCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFDQUYsaUJBQWEsQ0FBQ0csT0FBZCxDQUFzQixVQUFDQyxLQUFELEVBQVc7QUFDL0IsVUFBSUMsTUFBTSxDQUFDRCxLQUFLLENBQUNFLFlBQVAsQ0FBTixHQUE2QkQsTUFBTSxDQUFDRSxPQUF4QyxFQUFpRDtBQUMvQ0wsb0JBQVksQ0FBQ00sSUFBYixXQUNLQyxrRUFBZSxDQUFDTCxLQUFLLENBQUNNLGFBQVAsQ0FEcEIsY0FDNkND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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VixDQUFpQkMsVUFGRjtBQUd0Qm1LLFdBQU8sRUFBRXZLLGlEQUFTLENBQUNHLE1BQVYsQ0FBaUJDLFVBSEo7QUFJdEJxSyxZQUFRLEVBQUV6SyxpREFBUyxDQUFDRyxNQUFWLENBQWlCQztBQUpMLEdBQWhCLEVBS0xBO0FBekJrQixDQUF2QjtBQTRCZWdaLHlFQUFmLEUiLCJmaWxlIjoibWFpbi40NDEyNGI0MjIzN2FjZWRjNjM3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHByaWNlVHlwZU1hcHBlciB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEV2ZW50SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdFByaWNlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHNob3dEaXNjb3VudEluZm8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNjb3VudEluZm8gPSBbXTtcclxuICAgIHByb2R1Y3RQcmljZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgaWYgKE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgICBkaXNjb3VudEluZm8ucHVzaChcclxuICAgICAgICAgIGAke3ByaWNlVHlwZU1hcHBlcih2YWx1ZS5wcmljZVR5cGVOYW1lKX0gJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICB2YWx1ZS5kaXNjb3VudFJhdGUsXHJcbiAgICAgICAgICApfSVgLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGRpc2NvdW50SW5mby5sZW5ndGggPT09IDApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRpc2NvdW50VGV4dCA9IGAke2Rpc2NvdW50SW5mby5qb2luKCcsICcpfSDtlaDsnbhgO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgW+uEpOydtOuyhOyYiOyVvSDtirnrs4TtlaDsnbhdXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtkaXNjb3VudFRleHR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJFdmVudEluZm9cIj5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInNwcl9ib29rIGljb19ldnRcIiAvPlxyXG4gICAgICAgIOydtOuypO2KuOygleuztFxyXG4gICAgICA8L2gyPlxyXG4gICAgICB7c2hvd0Rpc2NvdW50SW5mbygpfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5FdmVudEluZm8ucHJvcFR5cGVzID0ge1xyXG4gIHByb2R1Y3RQcmljZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgZGlzY291bnRSYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBNYWluSW1hZ2UgZnJvbSAnLi4vTWFpbkltYWdlJztcclxuXHJcbmNvbnN0IEltYWdlU2xpZGVyID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gIGNvbnN0IHsgZGVncmVlLCB0cmFuc2l0aW9uVGltZSwgaW1hZ2VzLCBpbWFnZVdpZHRoLCBpc1Byb21vdGlvbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIkltYWdlU2xpZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGFpbmVyICR7aXNQcm9tb3Rpb24gPyAncHJvbW90aW9uJyA6ICdkZXRhaWwnfWB9PlxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke2ltYWdlV2lkdGggKiBkZWdyZWV9cHgpYCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHt0cmFuc2l0aW9uVGltZX1zYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ltYWdlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQcm9tb3Rpb24pIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayB0bz17YGRldGFpbD9wcm9kdWN0SWQ9JHt2YWx1ZS5wcm9kdWN0SWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW5JbWFnZSBzcmM9e3ZhbHVlLnNhdmVGaWxlTmFtZX0gYWx0PVwicHJvbW90aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8TWFpbkltYWdlIHNyYz17dmFsdWUuc2F2ZUZpbGVOYW1lfSBhbHQ9XCJpdGVtSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcbkltYWdlU2xpZGVyLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBzYXZlRmlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIGltYWdlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBpc1Byb21vdGlvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlU2xpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgSW1hZ2VDb250cm9sbGVyIGZyb20gJy4uL0ltYWdlQ29udHJvbGxlcic7XHJcblxyXG4vLyBEZXRhaWxDb250YWluZXLsl5DshJwgaW1hZ2Vz7JmAIHRpdGxl7J2EIOykmOyVvCAg7ZWY6rOgIGltYWdlc+uKlCDtlYTthLDrp4HsnYQg6rGw7LOQ64aU7JW8IOuQqFxyXG4vLyDsiqTtgazroaQg7Iuc6rCEKHRyYW5zaXRpb25UaW1lKSBkZWZhdWx0IDHstIhcclxuLy8g7ZmU66m0IOyghO2ZmCDqsITqsqkgKHRpbWVJbnRlcnZhbCkgMuy0iFxyXG5cclxuY29uc3QgRGV0YWlsSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGltYWdlcywgdGl0bGUsIHRyYW5zaXRpb25UaW1lIH0gPSBwcm9wcztcclxuICBjb25zdCBbZGVncmVlLCBzZXREZWdyZWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IHJlc2l6ZUVuZCA9IChmdW5jKSA9PiB7XHJcbiAgICBsZXQgdGltZXI7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jLCAxMDApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsZWZ0U2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSA9PT0gMCkgcmV0dXJuO1xyXG4gICAgc2V0RGVncmVlKGRlZ3JlZSAtIDEpO1xyXG4gICAgLypcclxuICAgIGlmIChkZWdyZWUgPT09IDApIHJldHVybjtcclxuICAgIGRlZ3JlZSAtPSAxO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBmaXJzdEl0ZW0uY2xpZW50V2lkdGg7XHJcbiAgICBpbWFnZUxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7aW50ZXJ2YWwgKiBkZWdyZWV9cHgpYDtcclxuICAgIGltYWdlQ291bnRpbmcuaW5uZXJUZXh0ID0gYCAke2RlZ3JlZSArIDF9IGA7XHJcbiAgICAqL1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJpZ2h0U2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGRlZ3JlZSA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHJldHVybjtcclxuICAgIHNldERlZ3JlZSgoZGVncmVlICsgMSkgJSBpbWFnZXMubGVuZ3RoKTtcclxuICAgIC8qXHJcbiAgICBpbWFnZUxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7aW50ZXJ2YWwgKiBkZWdyZWV9cHgpYDtcclxuICAgIGltYWdlQ291bnRpbmcuaW5uZXJUZXh0ID0gYCAke2RlZ3JlZSArIDF9IGA7XHJcbiAgICAqL1xyXG4gIH07XHJcbiAgLy8gcHJvcHMg64ukIOuEmOqyqOykmOyVvCDtlahcclxuICByZXR1cm4gKFxyXG4gICAgPEltYWdlQ29udHJvbGxlclxyXG4gICAgICBkZWdyZWU9e2RlZ3JlZX1cclxuICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25UaW1lfVxyXG4gICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgcmVzaXplRW5kPXtyZXNpemVFbmR9XHJcbiAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgbGVmdFNjcm9sbD17bGVmdFNjcm9sbH1cclxuICAgICAgcmlnaHRTY3JvbGw9e3JpZ2h0U2Nyb2xsfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuRGV0YWlsSW1hZ2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiAwLjUsXHJcbn07XHJcblxyXG5EZXRhaWxJbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIOyemOyemO2VmOqyjCDsqrzqsKTsiJgg7J6I7J2EIOqygyDqsJnsnYxcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ291bnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvVXNlZExlbiwgdXNlZExlbiwgY2FuY2VsZWRMZW4gfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZhdGlvbkNvdW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2Jvb2syXCIgLz5cclxuICAgICAgICAgICAgICDsoITssrRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3RvVXNlZExlbiArIHVzZWRMZW4gKyBjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19ib29rX3NzXCIgLz5cclxuICAgICAgICAgICAgICDsnbTsmqnsmIjsoJVcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDE+e3RvVXNlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic3ByX2Jvb2syIGljb19jaGVja1wiIC8+XHJcbiAgICAgICAgICAgICAg7J207Jqp7JmE66OMXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPnt1c2VkTGVufTwvaDE+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2JhY2tcIiAvPlxyXG4gICAgICAgICAgICAgIOy3qOyGjMK37ZmY67aIXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGgxPntjYW5jZWxlZExlbn08L2gxPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmVzZXJ2YXRpb25Db3VudC5wcm9wVHlwZXMgPSB7XHJcbiAgdG9Vc2VkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgdXNlZExlbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGNhbmNlbGVkTGVuOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbkNvdW50O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZm9udENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IsIGNsaWNrLCBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIHR5cGVvZiBjbGljayA9PT0gJ2Z1bmN0aW9uJyA/IChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwiQnV0dG9uXCJcclxuICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvciwgY29sb3I6IGZvbnRDb2xvciB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApIDogKFxyXG4gICAgPExpbmtcclxuICAgICAgY2xhc3NOYW1lPVwiQnV0dG9uXCJcclxuICAgICAgdG89e2NsaWNrfVxyXG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yOiBmb250Q29sb3IgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGZvbnRDb2xvcjogJyMwMDAnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJyNmNGY0ZjQnLFxyXG59O1xyXG5cclxuQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBmb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsaWNrOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbi8qXHJcbiAqIOuEpOydtOuyhCDrsLDqsr0g7LSI66Gd7IOJOiAjMWVjODAwIOq4gOyekOyDiSAjZmZmO1xyXG4gKi9cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTWFpblZpZXcgZnJvbSAnLi4vTWFpblZpZXcnO1xyXG5pbXBvcnQgVGFiQ29udHJvbGxlciBmcm9tICcuLi9UYWJDb250cm9sbGVyJztcclxuaW1wb3J0IFByb2R1Y3RCb3ggZnJvbSAnLi4vUHJvZHVjdEJveCc7XHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBiYXNpc0NvdW50IH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgwKTsgLy8g7ZiE7J6sIOyEoO2DneuQnCDsubTthYzqs6DrpqwgaWRcclxuICBjb25zdCBbcHJvZHVjdENvdW50LCBzZXRQcm9kdWN0Q291bnRdID0gdXNlU3RhdGUoMCk7IC8vICDsubTthYzqs6DrpqzsnZgg7KCc7ZKIIOqwnOyImFxyXG4gIGNvbnN0IFt2aWV3cywgc2V0Vmlld3NdID0gdXNlU3RhdGUoQXJyYXkoNikuZmlsbChudWxsKSk7IC8vIFs8TWFpblZpZXcvPiw8TWFpblZpZXcvPl1cclxuXHJcbiAgbGV0IHNob3dpbmdDb3VudCA9IDA7XHJcbiAgY29uc3QgY2F0ZWdvcnlQcm9kdWN0cyA9IEFycmF5KDYpLmZpbGwobnVsbCk7XHJcbiAgY29uc3Qgdmlld3NBcnIgPSBBcnJheSg2KS5maWxsKG51bGwpO1xyXG4gIGNvbnN0IGxhYmVscyA9IFsn7KCE7LK0JywgJ+yghOyLnCcsICfrrqTsp4Dsu6wnLCAn7L2Y7ISc7Yq4JywgJ+2BtOuemOyLnScsICfsl7Dqt7knXTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZGF0YTogeyBpdGVtcyB9LFxyXG4gICAgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9kdWN0cycpO1xyXG4gICAgY2F0ZWdvcnlQcm9kdWN0c1swXSA9IGl0ZW1zO1xyXG4gICAgdmlld3NBcnJbMF0gPSBpdGVtc1xyXG4gICAgICAuc2xpY2UoYmFzaXNDb3VudClcclxuICAgICAgLm1hcCgodmFsdWUpID0+IDxQcm9kdWN0Qm94IGl0ZW1JbmZvPXt2YWx1ZX0gLz4pO1xyXG4gICAgc2hvd2luZ0NvdW50ICs9IGJhc2lzQ291bnQ7XHJcbiAgICBzZXRQcm9kdWN0Q291bnQoaXRlbXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgIGNvcGllZFZpZXdzWzBdID0gKFxyXG4gICAgICA8TWFpblZpZXcgcHJvZHVjdENvdW50PXtwcm9kdWN0Q291bnR9IHByb2R1Y3RzPXt2aWV3c0FyclswXX0gLz5cclxuICAgICk7XHJcbiAgICBzZXRWaWV3cyhjb3BpZWRWaWV3cyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93TW9yZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB2aWV3c0xlbiA9IHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLmxlbmd0aDtcclxuICAgIGlmICh2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50IHx8IHZpZXdzTGVuID4gc2hvd2luZ0NvdW50KSB7XHJcbiAgICAgIC8vIOuztOyXrOyjvOq4sOunjCDtlZjrqbQg65CoXHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICB2aWV3c0xlbiA+PSBzaG93aW5nQ291bnQgKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA/IHNob3dpbmdDb3VudCArIGJhc2lzQ291bnRcclxuICAgICAgICAgIDogdmlld3NMZW47XHJcbiAgICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH1cclxuICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5zbGljZShmaW5hbEluZCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgICAgc2hvd2luZ0NvdW50ID0gZmluYWxJbmQ7XHJcbiAgICAgIHNldFZpZXdzKGNvcGllZFZpZXdzKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGggPlxyXG4gICAgICB2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGhcclxuICAgICkge1xyXG4gICAgICAvLyDrhKPsnYDrkqQg67O07Jes7KSMXHJcbiAgICAgIGNvbnN0IHByb2R1Y3RzTGVuID0gY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XS5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGZpbmFsSW5kID1cclxuICAgICAgICBwcm9kdWN0c0xlbiA+PSB2aWV3c0xlbiArIGJhc2lzQ291bnRcclxuICAgICAgICAgID8gdmlld3NMZW4gKyBiYXNpc0NvdW50XHJcbiAgICAgICAgICA6IHByb2R1Y3RzTGVuO1xyXG4gICAgICBjYXRlZ29yeVByb2R1Y3RzW3NlbGVjdGVkQ2F0ZWdvcnldXHJcbiAgICAgICAgLnNsaWNlKHZpZXdzTGVuLCBmaW5hbEluZClcclxuICAgICAgICAuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnB1c2goPFByb2R1Y3RCb3ggaXRlbUluZm89e3ZhbHVlfSAvPik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH1cclxuICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBzaG93aW5nQ291bnQgPSBmaW5hbEluZDtcclxuICAgICAgc2V0Vmlld3MoY29waWVkVmlld3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDsubTthYzqs6Drpqwg67CU64CM7JeI7J2EIOuVjCB2aWV367CU6r6464qUIOqzvOyglVxyXG4gICAgLy8gMS4g7LWc7LSIIOqzvOyglVxyXG4gICAgLy8gMi4g7LWc7LSIIOyVhOuLkCDrlYxcclxuXHJcbiAgICBpZiAoIWNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0pIHtcclxuICAgICAgLy8gMS7stZzstIgg6rO87KCVXHJcbiAgICAgIC8vIHNlbGVjdGVkQ2F0ZWdvcnnsl5AgIOyDge2SiOygleuztOulvCDrhKPqs6BcclxuICAgICAgLy8gdmlld3Psl5AgTWFpblZpZXfrpbwg7IOd7ISx7ZWoXHJcbiAgICAgIGNvbnN0IHNwZWNpZmljUHJvZHVjdHMgPSBbXTtcclxuICAgICAgY29uc3QgW2FsbFByb2R1Y3RzXSA9IGNhdGVnb3J5UHJvZHVjdHM7XHJcbiAgICAgIGFsbFByb2R1Y3RzLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmNhdGVnb3J5SWQgPT09IHNlbGVjdGVkQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgIHNwZWNpZmljUHJvZHVjdHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY2F0ZWdvcnlQcm9kdWN0c1tzZWxlY3RlZENhdGVnb3J5XSA9IHNwZWNpZmljUHJvZHVjdHM7XHJcbiAgICAgIHNldFByb2R1Y3RDb3VudChzcGVjaWZpY1Byb2R1Y3RzLmxlbmd0aCk7XHJcbiAgICAgIC8vIHZpZXdz7JeQIE1haW5WaWV366W8IOyDneyEse2VqFxyXG4gICAgICB2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XSA9IHNwZWNpZmljUHJvZHVjdHNcclxuICAgICAgICAuc2xpY2UoYmFzaXNDb3VudClcclxuICAgICAgICAubWFwKCh2YWx1ZSkgPT4gPFByb2R1Y3RCb3ggaXRlbUluZm89e3ZhbHVlfSAvPik7XHJcbiAgICAgIGNvbnN0IGNvcGllZFZpZXdzID0gWy4uLnZpZXdzXTtcclxuICAgICAgY29waWVkVmlld3Nbc2VsZWN0ZWRDYXRlZ29yeV0gPSAoXHJcbiAgICAgICAgPE1haW5WaWV3XHJcbiAgICAgICAgICBwcm9kdWN0Q291bnQ9e3Byb2R1Y3RDb3VudH1cclxuICAgICAgICAgIHByb2R1Y3RzPXt2aWV3c0FycltzZWxlY3RlZENhdGVnb3J5XX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgICBzaG93aW5nQ291bnQgPSBiYXNpc0NvdW50O1xyXG4gICAgICBzZXRWaWV3cyhjb3BpZWRWaWV3cyk7XHJcbiAgICB9XHJcbiAgICBpZiAodmlld3NBcnJbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoID49IGJhc2lzQ291bnQpIHtcclxuICAgICAgLy8gbGVuZ3Ro64qUIOyehOyLnCDtjJDrs4QgTWFpblZpZXfrp4wg7J6I7Ja07IScIOyViOyXkCDqsK/siJgg7YyM7JWF7ZW07JW8IOuQqFxyXG4gICAgICAvLyAyLiBiYXNpc0NvdW50656RIOydvOy5mO2VoCDrlYxcclxuICAgICAgc2V0UHJvZHVjdENvdW50KGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoKTtcclxuICAgICAgY29uc3QgY29waWVkVmlld3MgPSBbLi4udmlld3NdO1xyXG4gICAgICBjb3BpZWRWaWV3c1tzZWxlY3RlZENhdGVnb3J5XSA9IChcclxuICAgICAgICA8TWFpblZpZXdcclxuICAgICAgICAgIHByb2R1Y3RDb3VudD17cHJvZHVjdENvdW50fVxyXG4gICAgICAgICAgcHJvZHVjdHM9e3ZpZXdzQXJyW3NlbGVjdGVkQ2F0ZWdvcnldLnNsaWNlKGJhc2lzQ291bnQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICAgIHNob3dpbmdDb3VudCA9IGJhc2lzQ291bnQ7XHJcbiAgICAgIHNldFZpZXdzKGNvcGllZFZpZXdzKTtcclxuICAgIH1cclxuICB9LCBzZWxlY3RlZENhdGVnb3J5KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpbkNvbnRhaW5lclwiPlxyXG4gICAgICA8VGFiQ29udHJvbGxlclxyXG4gICAgICAgIGxhYmVscz17bGFiZWxzfVxyXG4gICAgICAgIHZpZXdzPXt2aWV3c31cclxuICAgICAgICBhbHJhbT17c2V0U2VsZWN0ZWRDYXRlZ29yeX1cclxuICAgICAgLz5cclxuICAgICAgPHBcclxuICAgICAgICBjbGFzc05hbWU9XCJtb3JlXCJcclxuICAgICAgICBvbkNsaWNrPXtzaG93TW9yZVByb2R1Y3R9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6XHJcbiAgICAgICAgICAgIGNhdGVnb3J5UHJvZHVjdHNbc2VsZWN0ZWRDYXRlZ29yeV0ubGVuZ3RoID4gc2hvd2luZ0NvdW50XHJcbiAgICAgICAgICAgICAgPyAnYmxvY2snXHJcbiAgICAgICAgICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIOuNlOuztOq4sFxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuTWFpbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYmFzaXNDb3VudDogNCxcclxufTtcclxuXHJcbk1haW5Db250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGJhc2lzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBNb2RhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICBzZXRJc01vZGFsOiAoKSA9PiB7fSxcclxuICBzZXRNb2RhbENoaWxkcmVuOiAoKSA9PiB7fSxcclxuICBhbGVydE1vZGFsOiAoKSA9PiB7fSxcclxuICBjb25maXJtTW9kYWw6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc01vZGFsLCBzZXRJc01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxDaGlsZHJlbiwgc2V0TW9kYWxDaGlsZHJlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGFsZXJ0TW9kYWwgPSAodGV4dCkgPT4ge1xyXG4gICAgc2V0TW9kYWxDaGlsZHJlbihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+e3RleHR9PC9oMT5cclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogJ+2ZleyduCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PixcclxuICAgICk7XHJcbiAgICBzZXRJc01vZGFsKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1Nb2RhbCA9ICh0ZXh0LCBhY3Rpb24pID0+IHtcclxuICAgIHNldE1vZGFsQ2hpbGRyZW4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0ZXh0fTwvaDE+XHJcbiAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICBub3Rlcz17W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbigpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICftmZXsnbgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElzTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46ICfst6jshownLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4sXHJcbiAgICApO1xyXG4gICAgc2V0SXNNb2RhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc01vZGFsKSB7XHJcbiAgICAgIHNldE1vZGFsQ2hpbGRyZW4oJycpO1xyXG4gICAgfVxyXG4gIH0sIGlzTW9kYWwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsQ29udGV4dC5wcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBzZXRJc01vZGFsLCBzZXRNb2RhbENoaWxkcmVuLCBhbGVydE1vZGFsLCBjb25maXJtTW9kYWwgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7aXNNb2RhbCA/IDxNb2RhbD57bW9kYWxDaGlsZHJlbn08L01vZGFsPiA6ICcnfVxyXG4gICAgPC9Nb2RhbENvbnRleHQucHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbmV4cG9ydCB7IE1vZGFsQ29udGV4dCB9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1Nb25leVVuaXQsIHByaWNlVHlwZU1hcHBlciB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IElucHV0VGlja2V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0UHJpY2VzLCB0aWNrZXRzLCBkaXNwYXRjaCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIklucHV0VGlja2V0XCI+XHJcbiAgICAgIHtwcm9kdWN0UHJpY2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWFjaFRpY2tldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICB7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfVxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICB7YCR7dHJhbnNmb3JtTW9uZXlVbml0KHZhbHVlLnByaWNlKX0g7JuQYH1cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIHsoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb3N0ID1cclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUucHJpY2UgL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoMSAtIE51bWJlcih2YWx1ZS5kaXNjb3VudFJhdGUpIC8gMTAwKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICApICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Ake3RyYW5zZm9ybU1vbmV5VW5pdChvcmlnaW5hbENvc3QpfeybkCAoJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIodmFsdWUuZGlzY291bnRSYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICl9JSDtlaDsnbjqsIApYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSkoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkanVzdFRpY2tldFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzcHJfQm9vazIgaWNvX21pbnVzMyAke1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tldHNbaW5kZXhdID8gJycgOiAnZGlzYWJsZWQnXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnREVDUkVNRU5UJywgd2hlcmU6IGluZGV4IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9TVUJNSVQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT17YHJlc3J2YXRpb25UaWNrZXQke2luZGV4ICsgMX1gfVxyXG4gICAgICAgICAgICAgICAgICBjbHNzTmFtZT17dGlja2V0c1tpbmRleF0gPyAnJyA6ICdkaXNhYmxlZCd9XHJcbiAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGlja2V0c1tpbmRleF19XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX3BsdXMzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0lOQ1JFTUVOVCcsIHdoZXJlOiBpbmRleCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+e2Ake3RyYW5zZm9ybU1vbmV5VW5pdCh2YWx1ZS5wcmljZSAqIHRpY2tldHNbaW5kZXhdKX0g7JuQYH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbklucHV0VGlja2V0LnByb3BUeXBlcyA9IHtcclxuICBwcm9kdWN0UHJpY2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgZGlzY291bnRSYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgdGlja2V0czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRUaWNrZXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IFRpY2tldCBmcm9tICcuLi9UaWNrZXQnO1xyXG5pbXBvcnQgUmVzZXJ2YXRpb25Db3VudCBmcm9tICcuLi9SZXNlcnZhdGlvbkNvdW50JztcclxuXHJcbmNvbnN0IEFjdGlvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb246ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uQ29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBlbWFpbElkIH0gPSBwcm9wcztcclxuICBjb25zdCBbdG9Vc2VkLCBzZXRUb1VzZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b1VzZWRMZW4sIHNldFRvVXNlZExlbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY2FuY2VsZWQsIHNldENhbmNlbGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2FuY2VsZWRMZW4sIHNldENhbmNlbGVkTGVuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgbGV0IHVzZWQ7XHJcbiAgbGV0IHVzZWRMZW47XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9yZXNlcnZhdGlvbnMvJHtlbWFpbElkfWApO1xyXG4gICAgICBzZXRUb1VzZWQoZGF0YS50b1VzZWQpO1xyXG4gICAgICBzZXRUb1VzZWRMZW4oZGF0YS50b1VzZWQubGVuZ3RoKTtcclxuICAgICAgc2V0Q2FuY2VsZWQoZGF0YS5jYW5jZWxlZCk7XHJcbiAgICAgIHNldENhbmNlbGVkTGVuKGRhdGEuY2FuY2VsZWQubGVuZ3RoKTtcclxuICAgICAgdXNlZCA9IGRhdGEudXNlZDtcclxuICAgICAgdXNlZExlbiA9IGRhdGEudXNlZC5sZW5ndGg7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNhbmNlbFJlc2VydmF0aW9uID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gYXdhaXQgYXhpb3MucHV0KGAvYXBpL3Jlc2VydmF0aW9uLyR7aWR9YCk7XHJcbiAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgYWxlcnRNb2RhbCgn7J6Y66q765CcIOyalOyyreyeheuLiOuLpCcpO1xyXG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAvLyDsmKTrpZjrgpjrqbQg67Cw7Je0IOuzteyCrO2VtOyVvO2VqFxyXG4gICAgICBjb25zdCB0b0RlbGV0ZUluZGV4ID0gdG9Vc2VkLmZpbmRJbmRleChcclxuICAgICAgICAodmFsdWUpID0+IHZhbHVlLnJlc2VydmF0aW9uSW5mb0lkID09PSBpZCxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgY2FuY2VsZWRJdGVtID0gdG9Vc2VkLnNwbGljZSh0b0RlbGV0ZUluZGV4LCAxKTtcclxuICAgICAgY29uc3QgdG9JbnNlcnRJbmRleCA9IGNhbmNlbGVkLmZpbmRJbmRleChcclxuICAgICAgICAodmFsdWUpID0+IHZhbHVlLnJlc2VydmF0aW9uSW5mb0lkID4gaWQsXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICh0b0luc2VydEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIGNhbmNlbGVkLnB1c2goY2FuY2VsZWRJdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYW5jZWxlZC5zcGxpY2UodG9JbnNlcnRJbmRleCwgMCwgY2FuY2VsZWRJdGVtKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUb1VzZWQodG9Vc2VkKTtcclxuICAgICAgc2V0VG9Vc2VkTGVuKHRvVXNlZExlbiAtIDEpO1xyXG4gICAgICBzZXRDYW5jZWxlZChjYW5jZWxlZCk7XHJcbiAgICAgIHNldENhbmNlbGVkTGVuKGNhbmNlbGVkTGVuICsgMSk7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yYiOyVveydtCDst6jshozrkJjsl4jsirXri4jri6QnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24gPSAoaWQpID0+IHtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbmZpcm1Nb2RhbChcclxuICAgICAgICAn7ZWc67KIIOy3qOyGjO2VmOyLnOuptCDri6Tsi5wg65CY64+M66a0IOyImCDsl4bsirXri4jri6QuIOq3uOuemOuPhCDtlZjsi5zqsqDsirXri4jquYw/JyxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjYW5jZWxSZXNlcnZhdGlvbihpZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBY3Rpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbmZpcm1DYW5jZWxSZXNlcnZhdGlvbiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNlcnZhdGlvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxSZXNlcnZhdGlvbkNvdW50XHJcbiAgICAgICAgICB0b1VzZWRMZW49e3RvVXNlZExlbn1cclxuICAgICAgICAgIHVzZWRMZW49e3VzZWRMZW59XHJcbiAgICAgICAgICBjYW5jZWxlZExlbj17Y2FuY2VsZWRMZW59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGlja2V0IGluZm9zPXt0b1VzZWR9IGFjdGlvbnM9XCJjYW5jZWxcIiBpc0dyZWVuPlxyXG4gICAgICAgICAg7JiI7JW9IO2ZleyglVxyXG4gICAgICAgIDwvVGlja2V0PlxyXG4gICAgICAgIDxUaWNrZXQgaW5mb3M9e3VzZWR9IGFjdGlvbnM9XCJ3cml0ZVJldmlld1wiPlxyXG4gICAgICAgICAg7J207JqpIOyZhOujjFxyXG4gICAgICAgIDwvVGlja2V0PlxyXG4gICAgICAgIDxUaWNrZXQgaW5mb3M9e2NhbmNlbGVkfT7st6jshozrkJwg7JiI7JW9PC9UaWNrZXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9BY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZhdGlvbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgZW1haWxJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXJ2YXRpb25Db250YWluZXI7XHJcbmV4cG9ydCB7IEFjdGlvbkNvbnRleHQgfTtcclxuXHJcbi8qXHJcblJlc2VydmF0aW9uQ29udGFpbmVyIOKGkiBSZXNlcnZhdGlvbkNvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKGkiBUaWNrZXQg4oaSIFRpY2tldEhlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4oaSIFRpY2tldEluZm9MaXN0IOKGkiBUaWNrZXRJbmZvXHJcbiovXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFRhYkNvbnRyb2xsZXIgZnJvbSAnLi4vVGFiQ29udHJvbGxlcic7XHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGRpc3BsYXlJbmZvOiB7XHJcbiAgICAgIHByb2R1Y3RDb250ZW50LFxyXG4gICAgICBwcm9kdWN0RGVzY3JpcHRpb24sXHJcbiAgICAgIHBsYWNlTG90LFxyXG4gICAgICBwbGFjZVN0cmVldCxcclxuICAgICAgcGxhY2VOYW1lLFxyXG4gICAgICB0ZWxlcGhvbmUsXHJcbiAgICB9LFxyXG4gICAgbG9jYXRpb25JbWdTcmMsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGxhYmVscyA9IFsn7IOB7IS47KCV67O0JywgJ+yYpOyLnOuKlOq4uCddO1xyXG4gIGNvbnN0IHZpZXdzID0gW1xyXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHJvZHVjdERldGFpbFwiPlxyXG4gICAgICA8aDI+W+yGjOqwnF08L2gyPlxyXG4gICAgICA8cD57cHJvZHVjdENvbnRlbnR9PC9wPlxyXG4gICAgICA8aDI+W+qzteyngOyCrO2VrV08L2gyPlxyXG4gICAgPC9hcnRpY2xlPixcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIj5cclxuICAgICAgPGltZyBzcmM9e2AvJHtsb2NhdGlvbkltZ1NyY31gfSBhbHQ9XCJsb2NhdGlvblwiIC8+XHJcbiAgICAgIDxoMj57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jVGV4dFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tcGluNFwiIC8+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+e3BsYWNlTG90fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVRleHRcIj7sp4Drsog8L3NwYW4+XHJcbiAgICAgICAgICAgIHtwbGFjZVN0cmVldH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3JleVRleHRcIj57cGxhY2VOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNhbGwyXCIgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57dGVsZXBob25lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmaW5kUm9hZFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1wYXRoLWZpbmQyXCIgLz5cclxuICAgICAgICAgICAg6ri47LC+6riwXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jYXItZmluZDJcIiAvPlxyXG4gICAgICAgICAgICDrgrTruYTqsozsnbTshZhcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT4sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlByb2R1Y3RJbmZvXCI+XHJcbiAgICAgIDxUYWJDb250cm9sbGVyIGxhYmVscz17bGFiZWxzfSB2aWV3cz17dmlld3N9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2R1Y3RJbmZvLnByb3BUeXBlcyA9IHtcclxuICBkaXNwbGF5SW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHByb2R1Y3RDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9kdWN0RGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlTG90OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZVN0cmVldDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcGxhY2VOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG4gIGxvY2F0aW9uSW1nU3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SW5mbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRvcCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiRm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgeygoaXNUb3BOZWVkKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXNUb3BOZWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLXVwMVwiIC8+XHJcbiAgICAgICAgICAgICAgICBUT1BcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkodG9wKX1cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXV0aW9uXCI+XHJcbiAgICAgICAgICDrhKTsnbTrsoQo7KO8KeuKlCDthrXsi6DtjJDrp6TsnZgg64u57IKs7J6Q6rCAIOyVhOuLiOupsCwg7IOB7ZKI7J2Y7KCV67O0LCDqsbDrnpjsobDqsbQsIOydtOyaqSDrsI9cclxuICAgICAgICAgIO2ZmOu2iCDrk7Hqs7wg6rSA66Co7ZWcIOydmOustOyZgCDssYXsnoTsnYAg6rCBIO2ajOybkOyXkOqyjCDsnojsirXri4jri6QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPsKpIE5BVkVSIENvcnAuPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Gb290ZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRvcDogdHJ1ZSxcclxufTtcclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgdG9wOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gcHJvcHMg7IiY7KCVXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBSZXZpZXdTdW1tYXJ5IGZyb20gJy4uL1Jldmlld1N1bW1hcnknO1xyXG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tICcuLi9SZXZpZXdMaXN0JztcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vTGF5b3V0JztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFJldmlld0NvbnRhaW5lciA9IChwcm9wcykgPT4ge1xyXG4gIC8vIOyghOyytOyggeycvOuhnCDrp4zrk6Tqs6Ag64uk7IucIOqygO2GoFxyXG4gIGNvbnN0IHsgaXNCcmllZiwgZGlzcGxheUluZm9JZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGUocHJvcHMucmV2aWV3cyk7XHJcbiAgY29uc3QgW2F2ZXJhZ2VTY29yZSwgc2V0QXZlcmFnZVNjb3JlXSA9IHVzZVN0YXRlKHByb3BzLmF2ZXJhZ2VTY29yZSk7XHJcbiAgY29uc3QgW2lzTW9kaWZpYWJsZSwgc2V0SXNNb2RpZmlhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhEYXRhLCBzZXRFeERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyByZXZpZXdz6rCAIOuLrOudvOyhjOydhCDrlYwgYXZlcmFnZVNjb3Jl67CU6r6464qUIGVmZmVjdFxyXG4gICAgY29uc3QgbW9kaWZpZWRBdmVyYWdlU2NvcmUgPVxyXG4gICAgICByZXZpZXdzLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+IHtcclxuICAgICAgICBhY2N1bSArIE51bWJlcihjdXJyZW50LnNjb3JlKTtcclxuICAgICAgfSkgLyByZXZpZXdzLmxlbmd0aDtcclxuICAgIHNldEF2ZXJhZ2VTY29yZShtb2RpZmllZEF2ZXJhZ2VTY29yZSk7XHJcbiAgfSwgcmV2aWV3cyk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlTdGFyID0gKHNjb3JlLCBtYXhTY29yZSA9IDUpID0+IHtcclxuICAgIC8vIGF2ZXJhZ2VTY29yZeyXkCDrp57qsowg67OE7KCQ7J2EIOumrO2EtO2VmOuKlCDtlajsiJhcclxuICAgIGNvbnN0IGZpbGxDb3VudCA9IE1hdGguZmxvb3Ioc2NvcmUpO1xyXG4gICAgY29uc3Qgbm90RmlsbENvdW50ID0gbWF4U2NvcmUgLSBNYXRoLmNlaWwoc2NvcmUpO1xyXG4gICAgY29uc3QgcmF0aW9Db3VudCA9IE1hdGgucm91bmQoc2NvcmUgKiAxMCkgLyAxMCAtIGZpbGxDb3VudDtcclxuICAgIGNvbnN0IHN0YXJzID0gW107XHJcbiAgICBfLnRpbWVzKGZpbGxDb3VudCwgKCkgPT4ge1xyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIGdldFN0YXJcIiAvPik7XHJcbiAgICB9KTtcclxuICAgIGlmIChyYXRpb0NvdW50ID4gTnVtYmVyLkVQU0lMT04pIHtcclxuICAgICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgJzpiZWZvcmUnOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIFJpZ2h0LCNmMDAgJHtNYXRoLnJvdW5kKFxyXG4gICAgICAgICAgICByYXRpb0NvdW50ICogMTAwLFxyXG4gICAgICAgICAgKX0lLCNFNkU2RTYgJHtNYXRoLnJvdW5kKCgxIC0gcmF0aW9Db3VudCkgKiAxMDApfSUpYCxcclxuICAgICAgICAgIGNvbnRlbnQ6ICdFQUEzJyxcclxuICAgICAgICAgIGJhY2tncm91bmRDbGlwOiAndGV4dCcsXHJcbiAgICAgICAgICBXZWJraXRCYWNrZ3JvdW5kQ2xpcDogJ3RleHQnLFxyXG4gICAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdpbml0aWFsJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgICBzdGFycy5wdXNoKDxpIGNsYXNzTmFtZT1cImZuIGZuLXN0YXIyIHJhdGlvU3RhclwiIHN0eWxlPXtzdHlsZX0gLz4pO1xyXG4gICAgfVxyXG4gICAgXy50aW1lcyhub3RGaWxsQ291bnQsICgpID0+IHtcclxuICAgICAgc3RhcnMucHVzaCg8aSBjbGFzc05hbWU9XCJmbiBmbi1zdGFyMiBub3RHZXRTdGFyXCIgLz4pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwic3RhckNvdW50XCI+e3N0YXJzfTwvc3Bhbj47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdENvbW1lbnQgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsiJjsoJUg67KE7Yq8IOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICByZXR1cm4gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIHJlc3BvbnNlOiB7IHN0YXR1cywgc3RhdHVzVGV4dCB9LFxyXG4gICAgICAgIH0gPSBheGlvcy5nZXQoYC9hdXRoL2VkaXQvY29tbWVudHMvJHtjb21tZW50SWR9YCk7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gYWxlcnRNb2RhbChzdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByZXZpZXdzLmZpbmRJbmRleCgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHZhbHVlLmNvbW1lbnRJZCA9PT0gY29tbWVudElkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHsgc2NvcmUsIGNvbW1lbnQsIGNvbW1lbnRJbWFnZXMgfSA9IHJldmlld3NbaW5kZXhdO1xyXG4gICAgICAgIHNldEV4RGF0YSh7XHJcbiAgICAgICAgICBpZDogY29tbWVudElkLFxyXG4gICAgICAgICAgc2NvcmUsXHJcbiAgICAgICAgICBjb21tZW50LFxyXG4gICAgICAgICAgaW1hZ2VTcmM6IGNvbW1lbnRJbWFnZXMubGVuZ3RoID8gY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgOiAnJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQ29tbWVudCA9IChjb21tZW50SWQpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyCreygnCDrsoTtirzsnYQg64iE66W06rOgIO2ZleyduOydhCDriIzroIDsnYQg7Iuc7J2YIO2WieuPmVxyXG4gICAgcmV0dXJuIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICByZXNwb25zZTogeyBzdGF0dXMsIHN0YXR1c1RleHQgfSxcclxuICAgICAgICB9ID0gYXhpb3MuZGVsZXRlKGAvYXBpL3Jlc2VydmF0aW9ucy9jb21tZW50cy8ke2NvbW1lbnRJZH1gKTtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgYWxlcnRNb2RhbCgn66as67ew6rCAIOyCreygnOuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgICAgY29uc3QgbW9kaWZpZWRSZXZpZXdzID0gcmV2aWV3cy5maWx0ZXIoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNvbW1lbnRJZCAhPT0gY29tbWVudElkO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRSZXZpZXdzKG1vZGlmaWVkUmV2aWV3cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSAoY29tbWVudElkKSA9PiB7XHJcbiAgICAvLyDsg4HshLjsoJXrs7Qg7LC97J2YIOumrOu3sCDsgq3soJwg67KE7Yq87J2EIOuIjOuggOydhCDrlYzsnZgg7ZaJ64+ZXHJcbiAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/JywgZGVsZXRlQ29tbWVudChjb21tZW50SWQpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtRWRpdCA9IChpZCkgPT4ge1xyXG4gICAgLy8g7IOB7IS47KCV67O0IOywveydmCDrpqzrt7Ag7IiY7KCVIOuyhO2KvOydhCDriITrpbTqs6Ag7IiY7KCVIOuyhO2KvOydhCDri6Tsi5wg64iM66CA7J2EIOuVjOydmCDtlonrj5lcclxuICAgIHJldHVybiAoc3VibWl0LCBzY29yZSwgY29tbWVudCwgaW1hZ2VTcmMpID0+IHtcclxuICAgICAgY29uZmlybU1vZGFsKCfrpqzrt7Drpbwg7IiY7KCV7ZWY7Iuc6rKg7Iq164uI6rmMPycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpc1Byb2Nlc3NlZCA9IHN1Ym1pdCgpO1xyXG4gICAgICAgIGlmIChpc1Byb2Nlc3NlZCkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSByZXZpZXdzLmZpbmRJbmRleCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuY29tbWVudElkID09PSBpZDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc3QgbW9kaWZpZWRSZXZpZXdzID0gWy4uLnJldmlld3NdO1xyXG4gICAgICAgICAgbW9kaWZpZWRSZXZpZXdzW2luZGV4XS5jb21tZW50ID0gY29tbWVudDtcclxuICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uc2NvcmUgPSBzY29yZTtcclxuICAgICAgICAgIGlmIChtb2RpZmllZFJldmlld3NbaW5kZXhdLmNvbW1lbnRJbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVkUmV2aWV3c1tpbmRleF0uY29tbWVudEltYWdlc1swXS5zYXZlRmlsZU5hbWUgPSBpbWFnZVNyYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFJldmlld3MobW9kaWZpZWRSZXZpZXdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RXhEYXRhKHt9KTtcclxuICAgICAgICBzZXRJc01vZGlmaWFibGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybUNhbmNlbCA9ICgpID0+IHtcclxuICAgIC8vIOyDgeyEuOygleuztCDssL3snZgg66as67ewIOyImOyglSDrsoTtirzsnYQg64iE66W06rOgIOy3qOyGjOulvCDriIzroIDsnYQg65WM7J2YIO2WieuPmVxyXG4gICAgY29uZmlybU1vZGFsKCfrpqzrt7Ag7IiY7KCV7J2EIOy3qOyGjO2VmOyLnOqyoOyKteuLiOq5jD8nLCAoKSA9PiB7XHJcbiAgICAgIHNldElzTW9kaWZpYWJsZShmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiQ29tbWVudENvbnRhaW5lclwiPlxyXG4gICAgICA8UmV2aWV3U3VtbWFyeVxyXG4gICAgICAgIGF2ZXJhZ2VTY29yZT17YXZlcmFnZVNjb3JlIHx8ICcwJ31cclxuICAgICAgICByZXZpZXdDb3VudD17cmV2aWV3cy5sZW5ndGh9XHJcbiAgICAgICAgZGlzcGxheVN0YXI9e2Rpc3BsYXlTdGFyfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmV2aWV3TGlzdFxyXG4gICAgICAgIHJldmlld3M9e3Jldmlld3N9XHJcbiAgICAgICAgaXNCcmllZj17aXNCcmllZn1cclxuICAgICAgICBpc01vZGlmaWFibGU9e2lzTW9kaWZpYWJsZX1cclxuICAgICAgICBleERhdGE9e2V4RGF0YX1cclxuICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlfVxyXG4gICAgICAgIGNvbmZpcm1DYW5jZWw9e2NvbmZpcm1DYW5jZWx9XHJcbiAgICAgICAgY29uZmlybUVkaXQ9e2NvbmZpcm1FZGl0fVxyXG4gICAgICAgIGVkaXRDb21tZW50PXtlZGl0Q29tbWVudH1cclxuICAgICAgLz5cclxuICAgICAgPGFzaWRlPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tYWxhcm0xXCIgLz5cclxuICAgICAgICAgIOuEpOydtOuyhCDsmIjslb3snYQg7Ya17ZW0IOyLpOygnCDrsKnrrLjtlZwg7J207Jqp7J6Q6rCAIOuCqOq4tCDtj4nqsIDsnoXri4jri6QuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2FzaWRlPlxyXG4gICAgICB7aXNCcmllZiA/IChcclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRTlFQ0VGJyxcclxuICAgICAgICAgICAgICBjbGljazogYC9yZXZpZXcvJHtkaXNwbGF5SW5mb0lkfWAsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IChcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICDsmIjrp6TsnpAg66as67ewIOuNlOuztOq4sFxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1mb3J3YXJkMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICAnJ1xyXG4gICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzQnJpZWY6IHRydWUsXHJcbn07XHJcblxyXG5SZXZpZXdDb250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBhdmVyYWdlU2NvcmU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICByZXZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByb2R1Y3RJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICByZXNlcnZhdGlvbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcmVzZXJ2YXRpb25FbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICByZXNlcnZhdGlvbkluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBzY29yZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBjb21tZW50SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgZGVsZXRlRmxhZzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgfSkuaXNSZXF1aXJlZCxcclxuICAgICAgKSxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxuICBpc0JyaWVmOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld0NvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTG9naW5Gb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJCb3hcIj5cclxuICAgICAgICAgIDxoMT7ruYTtmozsm5Ag7JiI7JW97ZmV7J24PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD7smIjslb3snpAg7J2066mU7J28IOyeheugpTwvcD5cclxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJhdXRoL2xvZ2luXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEVtYWlsKHZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcGxhY2VIb2xkZXI9XCJ4eHh4eEBuYXZlci5jb21cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLrgrQg7JiI7JW9IO2ZleyduFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RCb3ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtSW5mbzoge1xyXG4gICAgICBkaXNwbGF5SW5mb0lkLFxyXG4gICAgICBwcm9kdWN0SW1hZ2VVcmwsXHJcbiAgICAgIHByb2R1Y3REZXNjcmlwdGlvbixcclxuICAgICAgcGxhY2VOYW1lLFxyXG4gICAgICBwcm9kdWN0Q29udGVudCxcclxuICAgIH0sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0ZvbGQsIHNldElzRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNJY29uU2hvd2luZywgc2V0SXNJY29uU2hvd2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZGV0YWlsVGV4dCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRleHRPYmo7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdHJpbW1lZFRleHQgPSBwcm9kdWN0Q29udGVudC50cmltKCk7XHJcbiAgICB0cmltbWVkVGV4dCA9IHRyaW1tZWRUZXh0LnJlcGxhY2UoJ1xcbicsICcnKTtcclxuICAgIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPiBsaW1pdCkge1xyXG4gICAgICBjb25zdCB0ZXh0U2ltcGxlID0gdHJpbW1lZFRleHQuc2xpY2UoMCwgbGltaXQpO1xyXG4gICAgICBjb25zdCB0ZXh0RGV0YWlsID0gdHJpbW1lZFRleHQuc2xpY2UobGltaXQpO1xyXG4gICAgICB0ZXh0T2JqID0geyBzaW1wbGU6IHRleHRTaW1wbGUsIGRldGFpbDogdGV4dERldGFpbCB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0cmltbWVkVGV4dCwgZGV0YWlsOiAnJyB9O1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd0FuZEhpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9waW1tZWRpYXRlO1xyXG4gICAgaWYgKGlzRm9sZCkge1xyXG4gICAgICBzZXRJc0ZvbGQoZmFsc2UpO1xyXG4gICAgICAkKGRldGFpbFRleHQuY3VycmVudCkuc2xpZGVEb3duKDEwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0ZvbGQodHJ1ZSk7XHJcbiAgICAgICQoZGV0YWlsVGV4dC5jdXJyZW50KS5zbGlkZVVwKDEwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlByb2R1Y3RCb3hcIj5cclxuICAgICAgPExpbmsgdG89e2AvZGV0YWlsLyR7ZGlzcGxheUluZm9JZH1gfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwaG90b1wiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIvJHtwcm9kdWN0SW1hZ2VVcmx9XCIpYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj5cclxuICAgICAgICAgIDxoMT57cHJvZHVjdERlc2NyaXB0aW9ufTwvaDE+XHJcbiAgICAgICAgICA8aDI+e3BsYWNlTmFtZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5UZXh0XCJcclxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzSWNvblNob3dpbmcodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0ljb25TaG93aW5nKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RleHRPYmouZGV0YWlsID8gKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICB7dGV4dE9iai5zaW1wbGV9XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvdHNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNGb2xkID8gJ2lubGluZScgOiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAuLi5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vcmVEZXNjXCJcclxuICAgICAgICAgICAgICAgIHJlZj17ZGV0YWlsVGV4dH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0ZXh0T2JqLmRldGFpbH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbiAke2lzRm9sZCA/ICdmbi1kb3RzMicgOiAnZm4tdXAyJ31gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93QW5kSGlkZX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXNJY29uU2hvd2luZyA/ICcjMDAwJyA6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cD57dGV4dE9iai5zaW1wbGV9PC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9kdWN0Qm94LnByb3BUeXBlcyA9IHtcclxuICBpdGVtSW5mbzogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGRpc3BsYXlJbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RJbWFnZVVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdERlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwbGFjZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHByb2R1Y3RDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RCb3g7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmljZVR5cGVNYXBwZXIsIHRyYW5zZm9ybU1vbmV5VW5pdCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgQWN0aW9uQ29udGV4dCB9IGZyb20gJy4uL1Jlc2VydmF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbkJ1bmNoIGZyb20gJy4uL0J1dHRvbkJ1bmNoJztcclxuXHJcbmNvbnN0IFRpY2tldEluZm8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbmZvOiB7XHJcbiAgICAgIHJlc2VydmF0aW9uSW5mb0lkLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgICByZXNlcnZhdGlvbk5hbWUsXHJcbiAgICAgIHJlc2VydmF0aW9uVGVsLFxyXG4gICAgICBwcmljZUluZm8sXHJcbiAgICAgIHBsYWNlTmFtZSxcclxuICAgICAgdG90YWxQcmljZSxcclxuICAgICAgcHJvZHVjdElkLFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnMsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgY29uZmlybUNhbmNlbFJlc2VydmF0aW9uIH0gPSB1c2VDb250ZXh0KEFjdGlvbkNvbnRleHQpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uU3VtbWFyeSA9IHByaWNlSW5mb1xyXG4gICAgLnJlZHVjZSgoYWNjdW0sIGN1cnJlbnQpID0+IHtcclxuICAgICAgYCR7YWNjdW19ICAgICR7cHJpY2VUeXBlTWFwcGVyW2N1cnJlbnQucHJpY2VUeXBlTmFtZV19ICR7XHJcbiAgICAgICAgY3VycmVudC5jb3VudFxyXG4gICAgICB9IOunpCxgO1xyXG4gICAgfSwgJycpXHJcbiAgICAuc2xpY2UoMCwgLTEpO1xyXG5cclxuICBjb25zdCBjcmVhdGVCdXR0b24gPSAoYWN0aW9ucykgPT4ge1xyXG4gICAgY29uc3Qgbm90ZXMgPSBhY3Rpb25zLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSAnY2FuY2VsJykge1xyXG4gICAgICAgIHJldHVybiB7IGNsaWNrOiBjb25maXJtQ2FuY2VsUmVzZXJ2YXRpb24ocHJvZHVjdElkKSwgY2hpbGRyZW46ICfst6jshownIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHZhbHVlID09PSAncmV2aWV3V3JpdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGNsaWNrOiBgL3Jldmlld3dyaXRlLyR7cHJvZHVjdElkfWAsXHJcbiAgICAgICAgICBjaGlsZHJlbjogJ+yYiOunpOyekCDrpqzrt7Ag64Ko6riw6riwJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiA8QnV0dG9uQnVuY2ggbm90ZXM9e25vdGVzfSAvPjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIlRpY2tldEluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BTZWN0aW9uXCI+XHJcbiAgICAgICAgPGgyPntgTm8uJHtTdHJpbmcocmVzZXJ2YXRpb25JbmZvSWQpLnBhZFN0YXJ0KDgsICcwJyl9YH08L2gyPlxyXG4gICAgICAgIDxoMT57ZGVzY3JpcHRpb259PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlU2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwPuydvOyglTwvcD5cclxuICAgICAgICAgIDxwPntyZXNlcnZhdGlvbkRhdGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwPuuCtOyXrTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ek7J6QIOydtOumhDwvcD5cclxuICAgICAgICAgICAgPHA+e3Jlc2VydmF0aW9uTmFtZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgICAgPHA+7JiI66ek7J6QIOyghO2ZlOuyiO2YuDwvcD5cclxuICAgICAgICAgICAgPHA+e3Jlc2VydmF0aW9uVGVsfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiPlxyXG4gICAgICAgICAgICA8cD7smIjrp6Qg66ek7IiYPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aWNrZXRcIj57cmVzZXJ2YXRpb25TdW1tYXJ5fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIj5cclxuICAgICAgICAgIDxwPuyepeyGjDwvcD5cclxuICAgICAgICAgIDxwPntwbGFjZU5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21TZWN0aW9uXCI+XHJcbiAgICAgICAgPHA+6rKw7KCcIOq4iOyVoTwvcD5cclxuICAgICAgICA8cD57YCR7dHJhbnNmb3JtTW9uZXlVbml0KHRvdGFsUHJpY2UpfSDsm5BgfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjcmVhdGVCdXR0b24oYWN0aW9ucyl9XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXRJbmZvLnByb3BUeXBlcyA9IHtcclxuICBpbmZvOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgcmVzZXJ2YXRpb25JbmZvSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICByZXNlcnZhdGlvbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHJlc2VydmF0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgcmVzZXJ2YXRpb25UZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBsYWNlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdG90YWxQcmljZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICBwcmljZUluZm86IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRJbmZvO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IFJlc2VydmVGb3JtIGZyb20gJy4uL1Jlc2VydmVGb3JtJztcclxuaW1wb3J0IFJlc2VydmVEZXNjIGZyb20gJy4uL1Jlc2VydmVEZXNjJztcclxuaW1wb3J0IE1haW5JbWFnZSBmcm9tICcuLi9NYWluSW1hZ2UnO1xyXG5cclxuY29uc3QgUmVzZXJ2ZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGxldCBwcm9kdWN0RGF0YTtcclxuICBsZXQgcmVzZXJ2YXRpb25EYXRlO1xyXG4gIGxldCBzdGFydERhdGU7XHJcbiAgbGV0IGVuZERhdGU7XHJcbiAgbGV0IGltYWdlU3JjO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgcHJvZHVjdERhdGEgPSAoYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKSkuZGF0YTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkaWZmRGF5cyA9IHsgcmVzZXJ2ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpIH07XHJcbiAgICBkaWZmRGF5cy5zdGFydCA9IGRpZmZEYXlzLnJlc2VydmUgLSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1ICsgMSk7XHJcbiAgICBkaWZmRGF5cy5lbmQgPSBkaWZmRGF5cy5yZXNlcnZlICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSArIDEpO1xyXG4gICAgcmVzZXJ2YXRpb25EYXRlID0gbW9tZW50KClcclxuICAgICAgLnR6KCdBc2lhL1Nlb3VsJylcclxuICAgICAgLmFkZChkaWZmRGF5cy5yZXNlcnZlLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQgSEg6bW06c3MnKTtcclxuICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuc3RhcnQsICdkYXlzJylcclxuICAgICAgLmZvcm1hdCgnWVlZWS5NTS5ERC4oZGRkKScpO1xyXG4gICAgZW5kRGF0ZSA9IG1vbWVudCgpXHJcbiAgICAgIC50eignQXNpYS9TZW91bCcpXHJcbiAgICAgIC5hZGQoZGlmZkRheXMuZW5kLCAnZGF5cycpXHJcbiAgICAgIC5mb3JtYXQoJ1lZWVkuTU0uREQuKGRkZCknKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9kdWN0RGF0YS5wcm9kdWN0SW1hZ2VzLnNvbWUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZS50eXBlID09PSAnbWEnKSB7XHJcbiAgICAgICAgaW1hZ2VTcmMgPSB2YWx1ZS5zYXZlRmlsZU5hbWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXNlcnZlQ29udGFpbmVyXCI+XHJcbiAgICAgIDxNYWluSW1hZ2Ugc3JjPXtpbWFnZVNyY30gYWx0PVwibWFpbiBpbWFnZVwiIC8+XHJcbiAgICAgIDxSZXNlcnZlRGVzY1xyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mby5wcm9kdWN0RGVzY3JpcHRpb259XHJcbiAgICAgICAgcGxhY2U9e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvLnBsYWNlTG90fVxyXG4gICAgICAgIHN0YXJ0RGF0ZT17c3RhcnREYXRlfVxyXG4gICAgICAgIGVuZERhdGU9e2VuZERhdGV9XHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgLz5cclxuICAgICAgPFJlc2VydmVGb3JtXHJcbiAgICAgICAgcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc31cclxuICAgICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICAgIHByb2R1Y3RJZD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdElkfVxyXG4gICAgICAgIHJlc2VydmF0aW9uRGF0ZT17cmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IERldGFpbEltYWdlIGZyb20gJy4uL0RldGFpbEltYWdlJztcclxuaW1wb3J0IFByb2R1Y3REZXNjIGZyb20gJy4uL1Byb2R1Y3REZXNjJztcclxuaW1wb3J0IEV2ZW50SW5mbyBmcm9tICcuLi9FdmVudEluZm8nO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuLi9Qcm9kdWN0SW5mbyc7XHJcblxyXG5jb25zdCBEZXRhaWxDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkaXNwbGF5SW5mb0lkIH0gPSB1c2VQYXJhbXMoKTtcclxuXHJcbiAgbGV0IHByb2R1Y3REYXRhO1xyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcHJvZHVjdERhdGEgPSAoYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2R1Y3RzLyR7ZGlzcGxheUluZm9JZH1gKSkuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxEZXRhaWxJbWFnZVxyXG4gICAgICAgIGltYWdlcz17cHJvZHVjdERhdGEucHJvZHVjdEltYWdlc31cclxuICAgICAgICB0aXRsZT17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8UHJvZHVjdERlc2MgdGV4dD17cHJvZHVjdERhdGEuZGlzcGxheUluZm8ucHJvZHVjdENvbnRlbnR9IC8+XHJcbiAgICAgIDxFdmVudEluZm8gcHJvZHVjdFByaWNlcz17cHJvZHVjdERhdGEucHJvZHVjdFByaWNlc30gLz5cclxuICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgbm90ZXM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZm9udENvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMxZWM4MDAnLFxyXG4gICAgICAgICAgICBjbGljazogYC9yZXNlcnZlLyR7ZGlzcGxheUluZm9JZH1gLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogJzxpIGNsYXNzPVwiZm4gZm4tbmJvb2tpbmctY2FsZW5kZXIyXCI+PC9pPiDsmIjrp6TtlZjquLAnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmV2aWV3Q29udGFpbmVyXHJcbiAgICAgICAgZGlzcGxheUluZm9JZD17ZGlzcGxheUluZm9JZH1cclxuICAgICAgICByZXZpZXdzPXtwcm9kdWN0RGF0YS5jb21tZW50c31cclxuICAgICAgICBhdmVyYWdlU2NvcmU9e3Byb2R1Y3REYXRhLmF2ZXJhZ2VTY29yZX1cclxuICAgICAgLz5cclxuICAgICAgPFByb2R1Y3RJbmZvXHJcbiAgICAgICAgZGlzcGxheUluZm89e3Byb2R1Y3REYXRhLmRpc3BsYXlJbmZvfVxyXG4gICAgICAgIGxvY2F0aW9uSW1nU3JjPXtwcm9kdWN0RGF0YS5kaXNwbGF5SW5mb0ltYWdlLnNhdmVGaWxlTmFtZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc2VydmVySW5mbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG5hbWUsXHJcbiAgICB0ZWxlcGhvbmUsXHJcbiAgICBlbWFpbCxcclxuICAgIHJlc2VydmF0aW9uRGF0ZSxcclxuICAgIHRvdGFsVGlja2V0LFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgICBpc1ZlcmlmaWVkTmFtZSxcclxuICAgIGlzVmVyaWZpZWRUZWwsXHJcbiAgICBpc1ZlcmlmaWVkRW1haWwsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBtYWtlQWxlcnQgPSAoaWQsIHRleHQpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICA8cCAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFsZXJ0TWVzc2FnZVwiPnt0ZXh0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlJlc2VydmVySW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2VydmVySGVhZGVyXCI+XHJcbiAgICAgICAgPGgyPuyYiOunpOyekCDsoJXrs7Q8L2gyPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZm4gZm4tY2hlY2tcIiAvPlxyXG4gICAgICAgICAg7ZWE7IiY7J6F66ClXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dcIiBpZD1cImlucHV0UmVzZXJ2ZXJcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIC8+XHJcbiAgICAgICAgICAgIOyYiOunpOyekFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25OYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2Zjeq4uOuPmVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9OQU1FJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX05BTUUnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdOYW1lJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nTmFtZScpLnNsaWRlRG93bigxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkTmFtZVxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdOYW1lJywgJ+ydtOumhOyXkOuKlCDqs7XrsLHsnbQg7J6I7Ja07ISc64qUIOyViOuQqeuLiOuLpC4nKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJpbnB1dFRlbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7Jew65297LKYXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZWxlcGhvbmV9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlc2VydmF0aW9uVGVsZXBob25lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAxMC0wMDAwLTAwMDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDSEFOR0VfVEVMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9URUwnIH0pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVkVSSUZZX1NVQk1JVCcgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2FsZXJ0V3JvbmdUZWwnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgJCgnI2FsZXJ0V3JvbmdUZWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNWZXJpZmllZFRlbFxyXG4gICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgOiBtYWtlQWxlcnQoJ2FsZXJ0V3JvbmdUZWwnLCAn7KCE7ZmU67KI7Zi4IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVJvd1wiIGlkPVwiaW5wdXRFbWFpbFwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNoZWNrXCIgLz5cclxuICAgICAgICAgICAg7J2066mU7J28XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICBuYW1lPVwicmVzZXJ2YXRpb25FbWFpbFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ4eHh4eHhAbmF2ZXIuY29tXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0hBTkdFX0VNQUlMJywgdmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1ZFUklGWV9FTUFJTCcgfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdWRVJJRllfU1VCTUlUJyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICgkKCcjYWxlcnRXcm9uZ0VtYWlsJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNhbGVydFdyb25nRW1haWwnKS5zbGlkZURvd24oMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlUm93XCIgaWQ9XCJvdmVyYWxsUmVzZXJ2YXRpb25cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1jaGVja1wiIHN0eWxlPXt7IGNvbG9yOiAndHJhbnNwYXJlbnQnIH19IC8+XHJcbiAgICAgICAgICAgIOyYiOunpOuCtOyaqVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+e2Ake3Jlc2VydmF0aW9uRGF0ZX0sIOy0nSAke3RvdGFsVGlja2V0feunpGB9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc1ZlcmlmaWVkRW1haWxcclxuICAgICAgICAgID8gJydcclxuICAgICAgICAgIDogbWFrZUFsZXJ0KCdhbGVydFdyb25nRW1haWwnLCAn7J2066mU7J28IO2YleyLneydtCDrp57sp4Ag7JWK7Iq164uI64ukJyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlckluZm8ucHJvcFR5cGVzID0ge1xyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICB0ZWxlcGhvbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJlc2VydmF0aW9uRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHRvdGFsVGlja2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZE5hbWU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgaXNWZXJpZmllZFRlbDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBpc1ZlcmlmaWVkRW1haWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlckluZm87XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IFByb2R1Y3RDb250YWluZXIgZnJvbSAnLi4vUHJvZHVjdENvbnRhaW5lcic7XHJcblxyXG5jb25zdCBNYWluVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZHVjdENvdW50LCBwcm9kdWN0cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgbGVmdFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+IGluZGV4ICUgMiA9PT0gMCk7XHJcbiAgY29uc3QgcmlnaHRQcm9kdWN0cyA9IHByb2R1Y3RzLmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiBpbmRleCAlIDIgPT09IDEpO1xyXG5cclxuICBjb25zdCBDb3VudFRleHQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ0b3RhbENvdW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICDrsJTroZwg7JiI66ekIOqwgOuKpe2VnCDtlonsgqzqsIBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0cm9uZ1wiPntgJHtwcm9kdWN0Q291bnR96rCcYH08L3NwYW4+XHJcbiAgICAgICAgICDsnojsirXri4jri6RcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIHByb2R1Y3RDb250YWluZXIg7KKM7Jqw66GcIOuCmOuIhOuKlCDroZzsp4HsnbQg7J6I7Ja07JW865CoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1haW5WaWV3XCI+XHJcbiAgICAgIHtDb3VudFRleHQoKX1cclxuICAgICAgPFByb2R1Y3RDb250YWluZXIgY2xhc3NOYW1lPVwibGVmdFwiPntsZWZ0UHJvZHVjdHN9PC9Qcm9kdWN0Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZHVjdENvbnRhaW5lciBjbGFzc05hbWU9XCJyaWdodFwiPntyaWdodFByb2R1Y3RzfTwvUHJvZHVjdENvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5NYWluVmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdENvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcHJvZHVjdHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluVmlldztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IERldGFpbENvbnRhaW5lciBmcm9tICcuLi9EZXRhaWxDb250YWluZXInO1xyXG5pbXBvcnQgUmVzZXJ2ZUNvbnRhaW5lciBmcm9tICcuLi9SZXNlcnZlQ29udGFpbmVyJztcclxuaW1wb3J0IFJlc2VydmF0aW9uQ29udGFpbmVyIGZyb20gJy4uL1Jlc2VydmF0aW9uQ29udGFpbmVyJztcclxuaW1wb3J0IFByb21vdGlvbkltYWdlIGZyb20gJy4uL1Byb21vdGlvbkltYWdlJztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcbmltcG9ydCBSZXZpZXdQcm92aWRlciBmcm9tICcuLi9SZXZpZXdQcm92aWRlcic7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uL01haW5Db250YWluZXInO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxCcm93c2VyUm91dGVyPlxyXG4gICAgPExheW91dD5cclxuICAgICAgPFN3aXRjaD5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9kZXRhaWwvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIDxOYXZCYXIgaXNUcmFuc3BhcmVudCAvPlxyXG4gICAgICAgICAgPERldGFpbENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCI+ey8qIHJlZGlyZWN0IOyLnOy8nOyVvCDtlaggKi99PC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9ib29raW5nbG9naW5cIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIHRvcD17ZmFsc2V9IC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9teXJlc2VydmF0aW9uXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISxIOuQqCAqL31cclxuICAgICAgICAgIDxOYXZCYXIgaXNMb2dvdXRhYmxlIC8+XHJcbiAgICAgICAgICA8UmVzZXJ2YXRpb25Db250YWluZXIgLz5cclxuICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc2VydmUvOmRpc3BsYXlJbmZvSWRcIj5cclxuICAgICAgICAgIHsvKiDsmYTshLHrkKggKi99XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8UmVzZXJ2ZUNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmV2aWV3LzpkaXNwbGF5SW5mb0lkXCI+XHJcbiAgICAgICAgICB7Lyog7JmE7ISx65CoICovfVxyXG4gICAgICAgICAgPE5hdkJhciBpc01haW49e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgPFJldmlld1Byb3ZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXZpZXd3cml0ZS86cHJvZHVjdElkXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIGlzTWFpbj17ZmFsc2V9IC8+XHJcbiAgICAgICAgICB7LyogcmV2aWV3RWRpdOqwgCDrr7jsmYQgKi99XHJcbiAgICAgICAgICA8UmV2aWV3RWRpdCAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XHJcbiAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICA8UHJvbW90aW9uSW1hZ2UgLz5cclxuICAgICAgICAgIDxNYWluQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9cIj5cclxuICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgIHsvKiA0MDQgbm90IGZvdW5k7J246rG4IOuCmO2DgOuCtOqyjCAqL31cclxuICAgICAgICA8L1JvdXRlPlxyXG4gICAgICA8L1N3aXRjaD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIDwvQnJvd3NlclJvdXRlcj4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSxcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgUmV2aWV3Q29udGFpbmVyIGZyb20gJy4uL1Jldmlld0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBSZXZpZXdQcm92aWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlJbmZvSWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGxldCBwcm9kdWN0RGF0YTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHByb2R1Y3REYXRhID0gKGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0cy8ke2Rpc3BsYXlJbmZvSWR9YCkpLmRhdGE7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJldmlld0NvbnRhaW5lclxyXG4gICAgICBkaXNwbGF5SW5mb0lkPXtkaXNwbGF5SW5mb0lkfVxyXG4gICAgICBhdmVyYWdlU2NvcmU9e3Byb2R1Y3REYXRhLmF2ZXJhZ2VTY29yZX1cclxuICAgICAgcmV2aWV3cz17cHJvZHVjdERhdGEuY29tbWVudHN9XHJcbiAgICAgIGlzQnJpZWY9e2ZhbHNlfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBJbWFnZVRpdGxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZWdyZWUsIGltYWdlTGVuLCB0aXRsZSwgbGVmdFNjcm9sbCwgcmlnaHRTY3JvbGwgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbWFnZVRpdGxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb3VudGluZ1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmlnaHRcIj57ZGVncmVlICsgMX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtgIC8gJHtpbWFnZUxlbn1gfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlU2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0U2VjdGlvblwiPlxyXG4gICAgICAgICAgICB7aW1hZ2VMZW4gPiAxID8gKFxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWJhY2t3YXJkMlwiIG9uQ2xpY2s9e2xlZnRTY3JvbGx9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFNlY3Rpb25cIj5cclxuICAgICAgICAgICAge2ltYWdlTGVuID4gMSA/IChcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1mb3J3YXJkMlwiIG9uQ2xpY2s9e3JpZ2h0U2Nyb2xsfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVNlY3Rpb25cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2VUaXRsZS5wcm9wVHlwZXMgPSB7XHJcbiAgZGVncmVlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaW1hZ2VMZW46IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGxlZnRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJpZ2h0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlVGl0bGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFRpY2tldEhlYWQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBpc0dyZWVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BUaWNrZXRIZWFkICR7aXNHcmVlbiA/ICdncmVlbicgOiAnZ3JleSd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TGVmdFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlja2V0TWlkZGxlXCI+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vazIgaWNvX2NoZWNrMlwiIC8+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNrZXRSaWdodFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SGVhZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgaXNHcmVlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEhlYWQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgVE9TID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc0NoZWNrZWQsIGRpc3BhdGNoIH0gPSBwcm9wcztcclxuICBjb25zdCBbaXNDb2xsZWN0aW9uRm9sZCwgc2V0SXNDb2xsZWN0aW9uRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNPZmZlckZvbGQsIHNldElzT2ZmZXJGb2xkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBmb2xkVGV4dCA9ICfsoJHquLAgPGkgY2xhc3M9XCJmbiBmbi11cDJcIj48L2k+JztcclxuICBjb25zdCBzaG93VGV4dCA9ICfrs7TquLAgPGkgY2xhc3M9XCJmbiBmbi1kb3duMlwiPjwvaT4nO1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xsZWN0aW9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXNDb2xsZWN0aW9uRm9sZCkge1xyXG4gICAgICAkKCcuY29sbGVjdGlvblVzZVRlcm0nKS5zbGlkZURvd24oKTtcclxuICAgICAgc2V0SXNDb2xsZWN0aW9uRm9sZChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuY29sbGVjdGlvblVzZVRlcm0nKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzQ29sbGVjdGlvbkZvbGQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT2ZmZXJDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChpc09mZmVyRm9sZCkge1xyXG4gICAgICAkKCcub2ZmZXJUZXJtJykuc2xpZGVEb3duKCk7XHJcbiAgICAgIHNldElzT2ZmZXJGb2xkKGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5vZmZlclRlcm0nKS5zbGlkZVVwKCk7XHJcbiAgICAgIHNldElzT2ZmZXJGb2xkKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJpdGxjZSBjbGFzc05hbWU9XCJUT1NcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxBZ3JlZW1lbnRcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICBuYW1lPVwiVE9TQ2hlY2tcIlxyXG4gICAgICAgICAgaWQ9XCJUT1NDaGVja1wiXHJcbiAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IGNoZWNrZWQgfSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NIQU5HRV9UT1MnLCBjaGVja2VkIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiVE9TQ2hlY2tcIj7snbTsmqnsnpAg7JW96rSAIOyghOyytOuPmeydmDwvbGFiZWw+XHJcbiAgICAgICAgPHA+7ZWE7IiYIOuPmeydmDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fYXJyX2lwYzJcIiAvPlxyXG4gICAgICAgICAg6rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2xsZWN0aW9uVXNlQWdyZWVtZW50XCIgb25DbGljaz17aGFuZGxlQ29sbGVjdGlvbkNsaWNrfT5cclxuICAgICAgICAgIHtpc0NvbGxlY3Rpb25Gb2xkID8gc2hvd1RleHQgOiBmb2xkVGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbGxlY3Rpb25Vc2VUZXJtXCJcclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBpc0NvbGxlY3Rpb25Gb2xkID8gJ25vbmUnIDogJ2Jsb2NrJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgJmx0O+qwnOyduOygleuztCDsiJjsp5Eg67CPIOydtOyaqSDrj5nsnZgmZ3Q7XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMS4g7IiY7KeR7ZWt66qpIDogW+2VhOyImF0g7J2066aELCDsl7Drnb3sspgsIFvshKDtg51dIOydtOuplOydvOyjvOyGjFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDIuIOyImOynkSDrsI8g7J207Jqp66qp7KCBIDog7IKs7JeF7J6Q7ZqM7JuQ6rO8IOyYiOyVveydtOyaqeyekOydmCDsm5DtmZztlZwg6rGw656YIOynhO2WiSxcclxuICAgICAgICDqs6DqsJ3sg4Hri7QsIOu2iOunjOyymOumrCDrk7Eg66+87JuQIOyymOumrCwg67aE7J+B7KGw7KCVIO2VtOqysOydhCDsnITtlZwg6riw66Gd67O07KG0LCDrhKTsnbTrsoRcclxuICAgICAgICDsmIjslb0g7J207JqpIO2bhCDrpqzrt7DsnpHshLHsl5Ag65Sw66W4IOuEpOydtOuyhO2OmOydtCDtj6zsnbjtirgg7KeA6riJIOuwjyDqtIDroKgg7JWI64K0XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMy4g67O06rSA6riw6rCEXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgLSDtmozsm5Dtg4jth7Qg65OxIOqwnOyduOygleuztCDsnbTsmqnrqqnsoIEg64us7ISxIOyLnOq5jOyngCDrs7TqtIBcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAtIOuLqCwg7IOB67KVIOuwjyDigJjsoITsnpDsg4HqsbDrnpgg65Ox7JeQ7ISc7J2YIOyGjOu5hOyekCDrs7TtmLjsl5Ag6rSA7ZWcIOuyleuloOKAmSDrk7Eg6rSA66CoXHJcbiAgICAgICAg67KV66C57JeQIOydmO2VmOyXrCDsnbzsoJUg6riw6rCEIOuztOq0gOydtCDtlYTsmpTtlZwg6rK97Jqw7JeQ64qUIO2VtOuLuSDquLDqsIQg64+Z7JWIIOuztOq0gO2VqFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDQuIOuPmeydmCDqsbDrtoDqtowg65Ox7JeQIOuMgO2VnCDqs6Dsp4A6IOygleuztOyjvOyytOuKlCDqsJzsnbjsoJXrs7TsnZgg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2Y66W8XHJcbiAgICAgICAg6rGw67aA7ZWgIOq2jOumrOqwgCDsnojsnLzrgpgsIOydtCDqsr3smrAg7IOB7ZKIIOuwjyDshJzruYTsiqQg7JiI7JW97J20IOygnO2VnOuQoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fYXJyX2lwYzJcIiAvPlxyXG4gICAgICAgICAg6rCc7J247KCV67O0IOygnDPsnpAg7KCc6rO1IOuPmeydmFxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJvZmZlckFncmVlbWVudFwiIG9uQ2xpY2s9e2hhbmRsZU9mZmVyQ2xpY2t9PlxyXG4gICAgICAgICAge2lzT2ZmZXJGb2xkID8gc2hvd1RleHQgOiBmb2xkVGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cFxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm9mZmVyVGVybVwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNPZmZlckZvbGQgPyAnbm9uZScgOiAnYmxvY2snIH19XHJcbiAgICAgID5cclxuICAgICAgICAmbHQ76rCc7J247KCV67O0IOygnDPsnpAg7KCc6rO1IOuPmeydmCZndDtcclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICAxLiDqsJzsnbjsoJXrs7Trpbwg7KCc6rO167Cb64qUIOyekCA6IOuvuOuUlOyWtOyVpOyVhO2KuFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDIuIOygnOqzte2VmOuKlCDqsJzsnbjsoJXrs7Qg7ZWt66qpIDogW+2VhOyImF0g64Sk7J2067KEIOyVhOydtOuUlCwg7J2066aELCDsl7Drnb3sspggW+yEoO2DnV1cclxuICAgICAgICDsnbTrqZTsnbwg7KO87IaMXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgMy4g6rCc7J247KCV67O066W8IOygnOqzteuwm+uKlCDsnpDsnZgg7J207Jqp66qp7KCBIDog7IKs7JeF7J6Q7ZqM7JuQ6rO8IOyYiOyVveydtOyaqeyekOydmCDsm5DtmZztlZxcclxuICAgICAgICDqsbDrnpgg7KeE7ZaJLCDqs6DqsJ3sg4Hri7QsIOu2iOunjOyymOumrCDrk7Eg66+87JuQIOyymOumrCwg7ISc67mE7IqkIOydtOyaqeyXkCDrlLDrpbgg7ISk66y47KGw7IKsXHJcbiAgICAgICAg67CPIO2YnO2DnSDsoJzqs7UsIOu2hOyfgeyhsOyglSDtlbTqsrDsnYQg7JyE7ZWcIOq4sOuhneuztOyhtFxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDQuIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvripQg7J6Q7J2YIOqwnOyduOygleuztCDrs7TsnKAg67CPIOydtOyaqeq4sOqwhCA6IOqwnOyduOygleuztFxyXG4gICAgICAgIOydtOyaqeuqqeyggSDri6zshLEg7IucIOq5jOyngCDrs7TqtIDtlanri4jri6QuXHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgNS4g64+Z7J2YIOqxsOu2gOq2jCDrk7Hsl5Ag64yA7ZWcIOqzoOyngCA6IOygleuztOyjvOyytOuKlCDqsJzsnbjsoJXrs7Qg7KCc6rO1IOuPmeydmOulvCDqsbDrtoDtlaBcclxuICAgICAgICDqtozrpqzqsIAg7J6I7Jy864KYLCDsnbQg6rK97JqwIOyDge2SiCDrsI8g7ISc67mE7IqkIOyYiOyVveydtCDsoJztlZzrkKAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9wPlxyXG4gICAgPC9hcml0bGNlPlxyXG4gICk7XHJcbn07XHJcblxyXG5UT1MucHJvcFR5cGVzID0ge1xyXG4gIGlzQ2hlY2tlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBkaXNwYXRjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRPUztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUaWNrZXRJbmZvIGZyb20gJy4uL1RpY2tldEluZm8nO1xyXG5cclxuY29uc3QgVGlja2V0SW5mb0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGluZm9zLCBhY3Rpb25zIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPG9sIGNsYXNzTmFtZT1cIlRpY2tldEluZm9MaXN0XCI+XHJcbiAgICAgIHtpbmZvcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8VGlja2V0SW5mbyBrZXk9e2luZGV4fSBpbmZvPXt2YWx1ZX0gYWN0aW9ucz17YWN0aW9uc30gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9vbD5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5mb0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIGluZm9zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICBhY3Rpb25zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXldKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldEluZm9MaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBwcmljZVR5cGVNYXBwZXIsIHRyYW5zZm9ybU1vbmV5VW5pdCB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IFJlc2VydmVEZXNjID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgcGxhY2UsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgcHJvZHVjdFByaWNlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHByaWNlVGV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByaWNlTGlzdCA9IHByb2R1Y3RQcmljZXMubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYCR7cHJpY2VUeXBlTWFwcGVyKHZhbHVlLnByaWNlVHlwZU5hbWUpfSAke3RyYW5zZm9ybU1vbmV5VW5pdChcclxuICAgICAgICB2YWx1ZS5wcmljZSxcclxuICAgICAgKX3sm5BgO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJpY2VMaXN0LmpvaW4oJyAvICcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZlRGVzY1wiPlxyXG4gICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIHtwbGFjZX1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7YCR7c3RhcnREYXRlfSB+ICR7ZW5kRGF0ZX1gfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxoMj7smpTquIg8L2gyPlxyXG4gICAgICA8cD57cHJpY2VUZXh0KCl9PC9wPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlRGVzYy5wcm9wVHlwZXMgPSB7XHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBwbGFjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0YXJ0RGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGVuZERhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBwcm9kdWN0UHJpY2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIHByaWNlVHlwZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIH0pLFxyXG4gICkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc2VydmVEZXNjO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInNwcl9iaSB0eHRfbG9nb1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiY29uc3QgdHJhbnNmb3JtTW9uZXlVbml0ID0gKG51bSkgPT4ge1xyXG4gIGxldCB0cmFuc2Zvcm1lZCA9ICcnO1xyXG4gIG51bSA9IG51bS50b1N0cmluZygpO1xyXG4gIGNvbnN0IG51bUxlbiA9IG51bS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtTGVuOyBpKyspIHtcclxuICAgIGlmIChpID4gMyAmJiBpICUgMyA9PT0gMSkge1xyXG4gICAgICB0cmFuc2Zvcm1lZCA9IGAsJHt0cmFuc2Zvcm1lZH1gO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtZWQgPSBudW0uY2hhckF0KG51bUxlbiAtIGkpICsgdHJhbnNmb3JtZWQ7XHJcbiAgfVxyXG4gIHJldHVybiB0cmFuc2Zvcm1lZDtcclxufTtcclxuXHJcbmNvbnN0IHByaWNlVHlwZU1hcHBlciA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IHByaWNlVHlwZSA9IHtcclxuICAgIEE6ICfshLHsnbgnLFxyXG4gICAgWTogJ+yyreyGjOuFhCcsXHJcbiAgICBCOiAn7Jyg7JWEJyxcclxuICAgIFM6ICfshYvtirgnLFxyXG4gICAgRDogJ+yepeyVoOyduCcsXHJcbiAgICBDOiAn7KeA7Jet7KO866+8JyxcclxuICAgIEU6ICfslrTslrzrpqzrsoTrk5wnLFxyXG4gICAgVjogJ1ZJUCcsXHJcbiAgICBSOiAnUuyEnScsXHJcbiAgfTtcclxuICByZXR1cm4gcHJpY2VUeXBlW3ZhbHVlXTtcclxufTtcclxuXHJcbmNvbnN0IHZhbGlkSW1hZ2VUeXBlID0gKGltYWdlKSA9PiB7XHJcbiAgY29uc3QgcmVzdWx0ID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZycsICdpbWFnZS9qcGcnXS5pbmRleE9mKGltYWdlKSA+IC0xO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQgeyB0cmFuc2Zvcm1Nb25leVVuaXQsIHByaWNlVHlwZU1hcHBlciwgdmFsaWRJbWFnZVR5cGUgfTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL2FmXCI6IFwiSy90Y1wiLFxuXHRcIi4vYWYuanNcIjogXCJLL3RjXCIsXG5cdFwiLi9hclwiOiBcImpuTzRcIixcblx0XCIuL2FyLWR6XCI6IFwibzFiRVwiLFxuXHRcIi4vYXItZHouanNcIjogXCJvMWJFXCIsXG5cdFwiLi9hci1rd1wiOiBcIlFqNEpcIixcblx0XCIuL2FyLWt3LmpzXCI6IFwiUWo0SlwiLFxuXHRcIi4vYXItbHlcIjogXCJIUDNoXCIsXG5cdFwiLi9hci1seS5qc1wiOiBcIkhQM2hcIixcblx0XCIuL2FyLW1hXCI6IFwiQ29SSlwiLFxuXHRcIi4vYXItbWEuanNcIjogXCJDb1JKXCIsXG5cdFwiLi9hci1zYVwiOiBcImdqQ1RcIixcblx0XCIuL2FyLXNhLmpzXCI6IFwiZ2pDVFwiLFxuXHRcIi4vYXItdG5cIjogXCJiWU02XCIsXG5cdFwiLi9hci10bi5qc1wiOiBcImJZTTZcIixcblx0XCIuL2FyLmpzXCI6IFwiam5PNFwiLFxuXHRcIi4vYXpcIjogXCJTRnhXXCIsXG5cdFwiLi9hei5qc1wiOiBcIlNGeFdcIixcblx0XCIuL2JlXCI6IFwiSDhFRFwiLFxuXHRcIi4vYmUuanNcIjogXCJIOEVEXCIsXG5cdFwiLi9iZ1wiOiBcImhLcnNcIixcblx0XCIuL2JnLmpzXCI6IFwiaEtyc1wiLFxuXHRcIi4vYm1cIjogXCJwL3JMXCIsXG5cdFwiLi9ibS5qc1wiOiBcInAvckxcIixcblx0XCIuL2JuXCI6IFwia0VPYVwiLFxuXHRcIi4vYm4uanNcIjogXCJrRU9hXCIsXG5cdFwiLi9ib1wiOiBcIjBtbytcIixcblx0XCIuL2JvLmpzXCI6IFwiMG1vK1wiLFxuXHRcIi4vYnJcIjogXCJhSWRmXCIsXG5cdFwiLi9ici5qc1wiOiBcImFJZGZcIixcblx0XCIuL2JzXCI6IFwiSlZTSlwiLFxuXHRcIi4vYnMuanNcIjogXCJKVlNKXCIsXG5cdFwiLi9jYVwiOiBcIjF4WjRcIixcblx0XCIuL2NhLmpzXCI6IFwiMXhaNFwiLFxuXHRcIi4vY3NcIjogXCJQQTJyXCIsXG5cdFwiLi9jcy5qc1wiOiBcIlBBMnJcIixcblx0XCIuL2N2XCI6IFwiQSt4YVwiLFxuXHRcIi4vY3YuanNcIjogXCJBK3hhXCIsXG5cdFwiLi9jeVwiOiBcImw1ZXBcIixcblx0XCIuL2N5LmpzXCI6IFwibDVlcFwiLFxuXHRcIi4vZGFcIjogXCJEeFF2XCIsXG5cdFwiLi9kYS5qc1wiOiBcIkR4UXZcIixcblx0XCIuL2RlXCI6IFwidEdsWFwiLFxuXHRcIi4vZGUtYXRcIjogXCJzK3VrXCIsXG5cdFwiLi9kZS1hdC5qc1wiOiBcInMrdWtcIixcblx0XCIuL2RlLWNoXCI6IFwidTNHSVwiLFxuXHRcIi4vZGUtY2guanNcIjogXCJ1M0dJXCIsXG5cdFwiLi9kZS5qc1wiOiBcInRHbFhcIixcblx0XCIuL2R2XCI6IFwiV1lyalwiLFxuXHRcIi4vZHYuanNcIjogXCJXWXJqXCIsXG5cdFwiLi9lbFwiOiBcImpVZVlcIixcblx0XCIuL2VsLmpzXCI6IFwialVlWVwiLFxuXHRcIi4vZW4tU0dcIjogXCJ6YXZFXCIsXG5cdFwiLi9lbi1TRy5qc1wiOiBcInphdkVcIixcblx0XCIuL2VuLWF1XCI6IFwiRG12aVwiLFxuXHRcIi4vZW4tYXUuanNcIjogXCJEbXZpXCIsXG5cdFwiLi9lbi1jYVwiOiBcIk9JWWlcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiT0lZaVwiLFxuXHRcIi4vZW4tZ2JcIjogXCJPYWE3XCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIk9hYTdcIixcblx0XCIuL2VuLWllXCI6IFwiNGRPd1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCI0ZE93XCIsXG5cdFwiLi9lbi1pbFwiOiBcImN6TW9cIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiY3pNb1wiLFxuXHRcIi4vZW4tbnpcIjogXCJiMUR5XCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcImIxRHlcIixcblx0XCIuL2VvXCI6IFwiWmR1b1wiLFxuXHRcIi4vZW8uanNcIjogXCJaZHVvXCIsXG5cdFwiLi9lc1wiOiBcImlZdUxcIixcblx0XCIuL2VzLWRvXCI6IFwiQ2p6VFwiLFxuXHRcIi4vZXMtZG8uanNcIjogXCJDanpUXCIsXG5cdFwiLi9lcy11c1wiOiBcIlZjbHFcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiVmNscVwiLFxuXHRcIi4vZXMuanNcIjogXCJpWXVMXCIsXG5cdFwiLi9ldFwiOiBcIjdCakNcIixcblx0XCIuL2V0LmpzXCI6IFwiN0JqQ1wiLFxuXHRcIi4vZXVcIjogXCJEL0pNXCIsXG5cdFwiLi9ldS5qc1wiOiBcIkQvSk1cIixcblx0XCIuL2ZhXCI6IFwiamZTQ1wiLFxuXHRcIi4vZmEuanNcIjogXCJqZlNDXCIsXG5cdFwiLi9maVwiOiBcImdla0JcIixcblx0XCIuL2ZpLmpzXCI6IFwiZ2VrQlwiLFxuXHRcIi4vZm9cIjogXCJCeUY0XCIsXG5cdFwiLi9mby5qc1wiOiBcIkJ5RjRcIixcblx0XCIuL2ZyXCI6IFwibnlZY1wiLFxuXHRcIi4vZnItY2FcIjogXCIyZmpuXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIjJmam5cIixcblx0XCIuL2ZyLWNoXCI6IFwiRGtreVwiLFxuXHRcIi4vZnItY2guanNcIjogXCJEa2t5XCIsXG5cdFwiLi9mci5qc1wiOiBcIm55WWNcIixcblx0XCIuL2Z5XCI6IFwiY1JpeFwiLFxuXHRcIi4vZnkuanNcIjogXCJjUml4XCIsXG5cdFwiLi9nYVwiOiBcIlVTQ3hcIixcblx0XCIuL2dhLmpzXCI6IFwiVVNDeFwiLFxuXHRcIi4vZ2RcIjogXCI5clJpXCIsXG5cdFwiLi9nZC5qc1wiOiBcIjlyUmlcIixcblx0XCIuL2dsXCI6IFwiaUVEZFwiLFxuXHRcIi4vZ2wuanNcIjogXCJpRURkXCIsXG5cdFwiLi9nb20tbGF0blwiOiBcIkRLcitcIixcblx0XCIuL2dvbS1sYXRuLmpzXCI6IFwiREtyK1wiLFxuXHRcIi4vZ3VcIjogXCI0TVYzXCIsXG5cdFwiLi9ndS5qc1wiOiBcIjRNVjNcIixcblx0XCIuL2hlXCI6IFwieDZwSFwiLFxuXHRcIi4vaGUuanNcIjogXCJ4NnBIXCIsXG5cdFwiLi9oaVwiOiBcIjNFMXJcIixcblx0XCIuL2hpLmpzXCI6IFwiM0UxclwiLFxuXHRcIi4vaHJcIjogXCJTNmxuXCIsXG5cdFwiLi9oci5qc1wiOiBcIlM2bG5cIixcblx0XCIuL2h1XCI6IFwiV3hSbFwiLFxuXHRcIi4vaHUuanNcIjogXCJXeFJsXCIsXG5cdFwiLi9oeS1hbVwiOiBcIjFyWXlcIixcblx0XCIuL2h5LWFtLmpzXCI6IFwiMXJZeVwiLFxuXHRcIi4vaWRcIjogXCJVRGhSXCIsXG5cdFwiLi9pZC5qc1wiOiBcIlVEaFJcIixcblx0XCIuL2lzXCI6IFwiQlZnM1wiLFxuXHRcIi4vaXMuanNcIjogXCJCVmczXCIsXG5cdFwiLi9pdFwiOiBcImJwaWhcIixcblx0XCIuL2l0LWNoXCI6IFwiYnhLWFwiLFxuXHRcIi4vaXQtY2guanNcIjogXCJieEtYXCIsXG5cdFwiLi9pdC5qc1wiOiBcImJwaWhcIixcblx0XCIuL2phXCI6IFwiQjU1TlwiLFxuXHRcIi4vamEuanNcIjogXCJCNTVOXCIsXG5cdFwiLi9qdlwiOiBcInRVQ3ZcIixcblx0XCIuL2p2LmpzXCI6IFwidFVDdlwiLFxuXHRcIi4va2FcIjogXCJJQnRaXCIsXG5cdFwiLi9rYS5qc1wiOiBcIklCdFpcIixcblx0XCIuL2trXCI6IFwiYlhtN1wiLFxuXHRcIi4va2suanNcIjogXCJiWG03XCIsXG5cdFwiLi9rbVwiOiBcIjZCMFlcIixcblx0XCIuL2ttLmpzXCI6IFwiNkIwWVwiLFxuXHRcIi4va25cIjogXCJQcEl3XCIsXG5cdFwiLi9rbi5qc1wiOiBcIlBwSXdcIixcblx0XCIuL2tvXCI6IFwiSXZpK1wiLFxuXHRcIi4va28uanNcIjogXCJJdmkrXCIsXG5cdFwiLi9rdVwiOiBcIkpDRi9cIixcblx0XCIuL2t1LmpzXCI6IFwiSkNGL1wiLFxuXHRcIi4va3lcIjogXCJsZ250XCIsXG5cdFwiLi9reS5qc1wiOiBcImxnbnRcIixcblx0XCIuL2xiXCI6IFwiUkF3UVwiLFxuXHRcIi4vbGIuanNcIjogXCJSQXdRXCIsXG5cdFwiLi9sb1wiOiBcInNwM3pcIixcblx0XCIuL2xvLmpzXCI6IFwic3AzelwiLFxuXHRcIi4vbHRcIjogXCJKdmxXXCIsXG5cdFwiLi9sdC5qc1wiOiBcIkp2bFdcIixcblx0XCIuL2x2XCI6IFwidVh3SVwiLFxuXHRcIi4vbHYuanNcIjogXCJ1WHdJXCIsXG5cdFwiLi9tZVwiOiBcIktUejBcIixcblx0XCIuL21lLmpzXCI6IFwiS1R6MFwiLFxuXHRcIi4vbWlcIjogXCJhSXNuXCIsXG5cdFwiLi9taS5qc1wiOiBcImFJc25cIixcblx0XCIuL21rXCI6IFwiYVFrVVwiLFxuXHRcIi4vbWsuanNcIjogXCJhUWtVXCIsXG5cdFwiLi9tbFwiOiBcIkF2dllcIixcblx0XCIuL21sLmpzXCI6IFwiQXZ2WVwiLFxuXHRcIi4vbW5cIjogXCJsWXRRXCIsXG5cdFwiLi9tbi5qc1wiOiBcImxZdFFcIixcblx0XCIuL21yXCI6IFwiT2IwWlwiLFxuXHRcIi4vbXIuanNcIjogXCJPYjBaXCIsXG5cdFwiLi9tc1wiOiBcIjYrUUJcIixcblx0XCIuL21zLW15XCI6IFwiWkFNUFwiLFxuXHRcIi4vbXMtbXkuanNcIjogXCJaQU1QXCIsXG5cdFwiLi9tcy5qc1wiOiBcIjYrUUJcIixcblx0XCIuL210XCI6IFwiRzBVeVwiLFxuXHRcIi4vbXQuanNcIjogXCJHMFV5XCIsXG5cdFwiLi9teVwiOiBcImhvbkZcIixcblx0XCIuL215LmpzXCI6IFwiaG9uRlwiLFxuXHRcIi4vbmJcIjogXCJiT010XCIsXG5cdFwiLi9uYi5qc1wiOiBcImJPTXRcIixcblx0XCIuL25lXCI6IFwiT2prVFwiLFxuXHRcIi4vbmUuanNcIjogXCJPamtUXCIsXG5cdFwiLi9ubFwiOiBcIitzMGdcIixcblx0XCIuL25sLWJlXCI6IFwiMnlrdlwiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIyeWt2XCIsXG5cdFwiLi9ubC5qc1wiOiBcIitzMGdcIixcblx0XCIuL25uXCI6IFwidUV5ZVwiLFxuXHRcIi4vbm4uanNcIjogXCJ1RXllXCIsXG5cdFwiLi9wYS1pblwiOiBcIjgvK1JcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiOC8rUlwiLFxuXHRcIi4vcGxcIjogXCJqVmRDXCIsXG5cdFwiLi9wbC5qc1wiOiBcImpWZENcIixcblx0XCIuL3B0XCI6IFwiOG1CRFwiLFxuXHRcIi4vcHQtYnJcIjogXCIwdFJrXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIjB0UmtcIixcblx0XCIuL3B0LmpzXCI6IFwiOG1CRFwiLFxuXHRcIi4vcm9cIjogXCJseXhvXCIsXG5cdFwiLi9yby5qc1wiOiBcImx5eG9cIixcblx0XCIuL3J1XCI6IFwibFh6b1wiLFxuXHRcIi4vcnUuanNcIjogXCJsWHpvXCIsXG5cdFwiLi9zZFwiOiBcIlo0UU1cIixcblx0XCIuL3NkLmpzXCI6IFwiWjRRTVwiLFxuXHRcIi4vc2VcIjogXCIvLzl3XCIsXG5cdFwiLi9zZS5qc1wiOiBcIi8vOXdcIixcblx0XCIuL3NpXCI6IFwiN2FWOVwiLFxuXHRcIi4vc2kuanNcIjogXCI3YVY5XCIsXG5cdFwiLi9za1wiOiBcImUrYWVcIixcblx0XCIuL3NrLmpzXCI6IFwiZSthZVwiLFxuXHRcIi4vc2xcIjogXCJnVlZLXCIsXG5cdFwiLi9zbC5qc1wiOiBcImdWVktcIixcblx0XCIuL3NxXCI6IFwieVBNc1wiLFxuXHRcIi4vc3EuanNcIjogXCJ5UE1zXCIsXG5cdFwiLi9zclwiOiBcInp4NlNcIixcblx0XCIuL3NyLWN5cmxcIjogXCJFK2xWXCIsXG5cdFwiLi9zci1jeXJsLmpzXCI6IFwiRStsVlwiLFxuXHRcIi4vc3IuanNcIjogXCJ6eDZTXCIsXG5cdFwiLi9zc1wiOiBcIlVyMURcIixcblx0XCIuL3NzLmpzXCI6IFwiVXIxRFwiLFxuXHRcIi4vc3ZcIjogXCJYNzA5XCIsXG5cdFwiLi9zdi5qc1wiOiBcIlg3MDlcIixcblx0XCIuL3N3XCI6IFwiZE53QVwiLFxuXHRcIi4vc3cuanNcIjogXCJkTndBXCIsXG5cdFwiLi90YVwiOiBcIlBlVVdcIixcblx0XCIuL3RhLmpzXCI6IFwiUGVVV1wiLFxuXHRcIi4vdGVcIjogXCJYTHZOXCIsXG5cdFwiLi90ZS5qc1wiOiBcIlhMdk5cIixcblx0XCIuL3RldFwiOiBcIlYyeDlcIixcblx0XCIuL3RldC5qc1wiOiBcIlYyeDlcIixcblx0XCIuL3RnXCI6IFwiT3h2NlwiLFxuXHRcIi4vdGcuanNcIjogXCJPeHY2XCIsXG5cdFwiLi90aFwiOiBcIkVPZ1dcIixcblx0XCIuL3RoLmpzXCI6IFwiRU9nV1wiLFxuXHRcIi4vdGwtcGhcIjogXCJEemkwXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIkR6aTBcIixcblx0XCIuL3RsaFwiOiBcInozVmRcIixcblx0XCIuL3RsaC5qc1wiOiBcInozVmRcIixcblx0XCIuL3RyXCI6IFwiRG9IclwiLFxuXHRcIi4vdHIuanNcIjogXCJEb0hyXCIsXG5cdFwiLi90emxcIjogXCJ6MUZDXCIsXG5cdFwiLi90emwuanNcIjogXCJ6MUZDXCIsXG5cdFwiLi90em1cIjogXCJ3UWs5XCIsXG5cdFwiLi90em0tbGF0blwiOiBcInRUM0pcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwidFQzSlwiLFxuXHRcIi4vdHptLmpzXCI6IFwid1FrOVwiLFxuXHRcIi4vdWctY25cIjogXCJZUmV4XCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIllSZXhcIixcblx0XCIuL3VrXCI6IFwicmFMclwiLFxuXHRcIi4vdWsuanNcIjogXCJyYUxyXCIsXG5cdFwiLi91clwiOiBcIlVwUVdcIixcblx0XCIuL3VyLmpzXCI6IFwiVXBRV1wiLFxuXHRcIi4vdXpcIjogXCJMb3hvXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiQVE2OFwiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIkFRNjhcIixcblx0XCIuL3V6LmpzXCI6IFwiTG94b1wiLFxuXHRcIi4vdmlcIjogXCJLU0Y4XCIsXG5cdFwiLi92aS5qc1wiOiBcIktTRjhcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiL1g1dlwiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIvWDV2XCIsXG5cdFwiLi95b1wiOiBcImZ6UGdcIixcblx0XCIuL3lvLmpzXCI6IFwiZnpQZ1wiLFxuXHRcIi4vemgtY25cIjogXCJYRHBnXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIlhEcGdcIixcblx0XCIuL3poLWhrXCI6IFwiU2F0T1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCJTYXRPXCIsXG5cdFwiLi96aC10d1wiOiBcImtPcE5cIixcblx0XCIuL3poLXR3LmpzXCI6IFwia09wTlwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJSbmhaXCI7IiwiLy8gYnV0dG9uIOu2gOu2hCBidXR0b25idW5jaOuhnFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL0xheW91dCc7XHJcbmltcG9ydCBJbnB1dFRpY2tldCBmcm9tICcuLi9JbnB1dFRpY2tldCc7XHJcbmltcG9ydCBSZXNlcnZlckluZm8gZnJvbSAnLi4vUmVzZXJ2ZXJJbmZvJztcclxuaW1wb3J0IFRPUyBmcm9tICcuLi9UT1MnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gKGxlbmd0aCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aWNrZXRzOiBBcnJheShsZW5ndGgpLmZpbGwoMCksXHJcbiAgICBuYW1lOiAnJyxcclxuICAgIHRlbGVwaG9uZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBpc1ZlcmlmaWVkTmFtZTogZmFsc2UsXHJcbiAgICBpc1ZlcmlmaWVkVGVsOiBmYWxzZSxcclxuICAgIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UsXHJcbiAgICBpc1RPU0NoZWNrZWQ6IGZhbHNlLFxyXG4gICAgc3VibWl0OiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnREVDUkVNRU5UJzpcclxuICAgICAgY29uc3QgbW9kaWZpZWREZWMgPSB7IC4uLnN0YXRlIH07XHJcbiAgICAgIG1vZGlmaWVkRGVjLnRpY2tldHNbYWN0aW9uLndoZXJlXSA9IG1vZGlmaWVkRGVjLnRpY2tldHNbYWN0aW9uLndoZXJlXSAtIDE7XHJcbiAgICAgIHJldHVybiBtb2RpZmllZERlYztcclxuICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XHJcbiAgICAgIGNvbnN0IG1vZGlmaWVkSW5jID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgICBtb2RpZmllZEluYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gPSBtb2RpZmllZEluYy50aWNrZXRzW2FjdGlvbi53aGVyZV0gKyAxO1xyXG4gICAgICByZXR1cm4gbW9kaWZpZWRJbmM7XHJcbiAgICBjYXNlICdDSEFOR0VfTkFNRSc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuYW1lOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9URUwnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdGVsZXBob25lOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgJ0NIQU5HRV9FTUFJTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlbWFpbDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlICdDSEFOR0VfVE9TJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVE9TQ2hlY2tlZDogYWN0aW9uLmNoZWNrZWQgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9OQU1FJzpcclxuICAgICAgY29uc3QgeyBuYW1lIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKG5hbWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWROYW1lOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgvXFxzLy50ZXN0KG5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWROYW1lOiBmYWxzZSB9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkTmFtZTogdHJ1ZSB9O1xyXG4gICAgY2FzZSAnVkVSSUZZX1RFTCc6XHJcbiAgICAgIGNvbnN0IHsgdGVsZXBob25lIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKHRlbGVwaG9uZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZFRlbDogZmFsc2UgfTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB0ZWxSZSA9IC8wXFxkezJ9LVsxLTldXFxkezIsM30tXFxkezR9LztcclxuICAgICAgaWYgKHRlbFJlLnRlc3QodGVsZXBob25lKSkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkVGVsOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRUZWw6IGZhbHNlIH07XHJcbiAgICBjYXNlICdWRVJJRllfRU1BSUwnOlxyXG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKGVtYWlsLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1ZlcmlmaWVkRW1haWw6IGZhbHNlIH07XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZW1haWxSZSA9IC9bYS16QS1aXVxcd3syLH1AW2EtekEtWl17Myx9XFwuW2EtekEtWl17Mix9LztcclxuICAgICAgaWYgKGVtYWlsUmUudGVzdChlbWFpbCkpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNWZXJpZmllZEVtYWlsOiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzVmVyaWZpZWRFbWFpbDogZmFsc2UgfTtcclxuICAgIGNhc2UgJ1ZFUklGWV9TVUJNSVQnOlxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgdGlja2V0cyxcclxuICAgICAgICBpc1ZlcmlmaWVkTmFtZSxcclxuICAgICAgICBpc1ZlcmlmaWVkVGVsLFxyXG4gICAgICAgIGlzVmVyaWZpZWRFbWFpbCxcclxuICAgICAgICBpc1RPU0NoZWNrZWQsXHJcbiAgICAgIH0gPSBzdGF0ZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRpY2tldHMuc29tZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgIHZhbHVlID4gMDtcclxuICAgICAgICB9KSAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWROYW1lICYmXHJcbiAgICAgICAgaXNWZXJpZmllZFRlbCAmJlxyXG4gICAgICAgIGlzVmVyaWZpZWRFbWFpbCAmJlxyXG4gICAgICAgIGlzVE9TQ2hlY2tlZFxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3VibWl0OiB0cnVlIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHN1Ym1pdDogZmFsc2UgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJycpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFJlc2VydmVGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9kdWN0UHJpY2VzLCBkaXNwbGF5SW5mb0lkLCBwcm9kdWN0SWQsIHJlc2VydmF0aW9uRGF0ZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG4gICAgcmVkdWNlcixcclxuICAgIGluaXRpYWxTdGF0ZShwcm9kdWN0UHJpY2VzLmxlbmd0aCksXHJcbiAgKTtcclxuICBjb25zdCB7IGFsZXJ0TW9kYWwsIGNvbmZpcm1Nb2RhbCB9ID0gdXNlQ29udGV4dChNb2RhbENvbnRleHQpO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uSW5mbyA9IHtcclxuICAgICAgZGlzcGxheUluZm9JZCxcclxuICAgICAgcHJvZHVjdElkLFxyXG4gICAgICBwcmljZXM6IFtdLFxyXG4gICAgICByZXNlcnZhdGlvbkVtYWlsOiBzdGF0ZS5lbWFpbCxcclxuICAgICAgcmVzZXJ2YXRpb25OYW1lOiBzdGF0ZS5uYW1lLFxyXG4gICAgICByZXNlcnZhdGlvblRlbGVwaG9uZTogc3RhdGUudGVsZXBob25lLFxyXG4gICAgICByZXNlcnZhdGlvblllYXJNb250aERheTogcmVzZXJ2YXRpb25EYXRlLFxyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gcHJvZHVjdFByaWNlcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XHJcbiAgICAgIHJlc2VydmF0aW9uSW5mby5wcmljZXMucHVzaCh7XHJcbiAgICAgICAgY291bnQ6IE51bWJlcihzdGF0ZS50aWNrZXRzW2luZGV4XSksXHJcbiAgICAgICAgcHJvZHVjdFByaWNlSWQ6IHByb2R1Y3RQcmljZXNbaW5kZXhdLnByb2R1Y3RQcmljZUlELFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgc3RhdHVzLCBzdGF0dXNUZXh0IH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAnL2FwaS9yZXNlcnZhdGlvbnMnLFxyXG4gICAgICByZXNlcnZhdGlvbkluZm8sXHJcbiAgICApO1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoc3RhdHVzVGV4dCk7XHJcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yYiOunpOqwgCDshLHqs7XsoIHsnLzroZwg7Iq57J2465CY7JeI7Iq164uI64ukJyk7XHJcbiAgICAgIGhpc3RvcnkucHVzaChgL2RldGFpbC8ke2Rpc3BsYXlJbmZvSWR9YCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29uZmlybVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChzdGF0ZS5zdWJtaXQpIHtcclxuICAgICAgY29uZmlybU1vZGFsKCfsmIjslb3tlZjsi5zqsqDsirXri4jquYw/JywgaGFuZGxlU3VibWl0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0TW9kYWwoJ+yYiOyVvSDslpHsi53snbQg7Lap7KGx65CY7KeAIOyViuyVmOyKteuLiOuLpCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJSZXNlcnZlRm9ybVwiPlxyXG4gICAgICA8Zm9ybSBhY3Rpb249XCIvYXBpL3Jlc2VydmF0aW9uc1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICA8SW5wdXRUaWNrZXRcclxuICAgICAgICAgIHByb2R1Y3RQcmljZXM9e3Byb2R1Y3RQcmljZXN9XHJcbiAgICAgICAgICB0aWNrZXRzPXtzdGF0ZS50aWNrZXRzfVxyXG4gICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc2VydmVySW5mb1xyXG4gICAgICAgICAgbmFtZT17c3RhdGUubmFtZX1cclxuICAgICAgICAgIHRlbGVwaG9uZT17c3RhdGUudGVsZXBob25lfVxyXG4gICAgICAgICAgZW1haWw9e3N0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgcmVzZXJ2YXRpb25EYXRlPXtyZXNlcnZhdGlvbkRhdGUuc3BsaXQoJyAnKVswXX1cclxuICAgICAgICAgIHRvdGFsVGlja2V0PXtzdGF0ZS50aWNrZXRzLnJlZHVjZShcclxuICAgICAgICAgICAgKGFjY3VtLCBjdXJyZW50KSA9PiBhY2N1bSArIGN1cnJlbnQsXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxyXG4gICAgICAgICAgaXNWZXJpZmllZE5hbWU9e3N0YXRlLmlzVmVyaWZpZWROYW1lfVxyXG4gICAgICAgICAgaXNWZXJpZmllZFRlbD17c3RhdGUuaXNWZXJpZmllZFRlbH1cclxuICAgICAgICAgIGlzVmVyaWZpZWRFbWFpbD17c3RhdGUuaXNWZXJpZmllZEVtYWlsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRPUyBpc0NoZWNrZWQ9e3N0YXRlLlRPU30gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5zdWJtaXQgPyAnIzFFQzkwMCcgOiAnI0QxRDFEMScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17Y29uZmlybVN1Ym1pdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzcHJfYm9vayBpY29fbmF2ZXJfc1wiIC8+XHJcbiAgICAgICAgICDsmIjslb3tlZjquLBcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNlcnZlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcHJvZHVjdFByaWNlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgZGlzcGxheUluZm9JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVyZWQsXHJcbiAgcHJvZHVjdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcmVzZXJ2YXRpb25EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZlRm9ybTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IFRhYlZpZXcgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHZpZXdzLCBzZWxlY3RlZCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFiVmlld1wiPlxyXG4gICAgICB7dmlld3MuZmluZCgodmFsdWUsIGluZGV4KSA9PiBpbmRleCA9PT0gc2VsZWN0ZWQpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblRhYlZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHZpZXdzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJWaWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgUmV2aWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3LFxyXG4gICAgaW1hZ2UsXHJcbiAgICBzY29yZSxcclxuICAgIGVtYWlsLFxyXG4gICAgZGF0ZSxcclxuICAgIGVkaXRDb21tZW50LFxyXG4gICAgY29uZmlybURlbGV0ZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgLy8g7J2066+47KeAIOuztOyglVxyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJSZXZpZXdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIDxwPntyZXZpZXd9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICB7aW1hZ2UgPyA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cInJldmlld0ltYWdlXCIgLz4gOiAnJ31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjb3JlXCI+e3Njb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVtYWlsXCI+e2Ake2VtYWlsLnNsaWNlKDAsIDQpfSoqKipgfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc2l0RGF0ZVwiPntgJHtkYXRlLnNsaWNlKDAsIDEwKX0g67Cp66y4YH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWRpdFwiIG9uQ2xpY2s9e2VkaXRDb21tZW50fT5cclxuICAgICAgICAgICAg7IiY7KCVXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWxldGVcIiBvbkNsaWNrPXtjb25maXJtRGVsZXRlfT5cclxuICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHJldmlldzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGRhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlZGl0Q29tbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBUYWJVSSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbGFiZWxzLCBzZWxlY3RlZCwgaGFuZGxlQ2xpY2sgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJUYWJVSVwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBzZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAndW5zZWxlY3RlZCd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJVSS5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkLFxyXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJVSTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFRhYlVJIGZyb20gJy4uL1RhYlVJJztcclxuaW1wb3J0IFRhYlZpZXcgZnJvbSAnLi4vVGFiVmlldyc7XHJcblxyXG5jb25zdCBUYWJDb250cm9sbGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBsYWJlbHMsIHZpZXdzLCBhbGFybSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGlmIChhbGFybSkge1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGFsYXJtKGluZGV4KTtcclxuICAgICAgICBzZXRTZWxlY3RlZChpbmRleCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRTZWxlY3RlZChpbmRleCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYkNvbnRyb2xsZXJcIj5cclxuICAgICAgPFRhYlVJIGxhYmVscz17bGFiZWxzfSBzZWxlY3RlZD17c2VsZWN0ZWR9IGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30gLz5cclxuICAgICAgPFRhYlZpZXcgdmlldz17dmlld3N9IHNlbGVjdGVkPXtzZWxlY3RlZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhbGFybTogZmFsc2UsXHJcbn07XHJcblxyXG5UYWJDb250cm9sbGVyLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgdmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXHJcbiAgYWxhcm06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxyXG59O1xyXG5cclxuLy8g7JWM656M7J20IOyeiOuLpOuptCDsg4HsnIQg7Lu07Y+s64SM7Yq47JeQIOyWtOuUlOyXkCDriIzroIDripTsp4Ag67OA7ZmU66W8IOyVjOugpOykmCDrj5nsoIEg67ew67OA7ZmU66W8IOqwgOuKpey8gO2VqFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5jb25zdCBhcHBseVN0eWxlID0gKHN0eWxlKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ251bWJlcicpIHtcclxuICAgIHJldHVybiBgJHtzdHlsZX1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnN0IFthbGxdID0gc3R5bGU7XHJcbiAgICByZXR1cm4gYCR7YWxsfXB4YDtcclxuICB9XHJcbiAgaWYgKHRvU3RyaW5nLmNhbGwoc3R5bGUpID09PSAnW29iamVjdCBBcnJheV0nICYmIHN0eWxlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgY29uc3QgW3ZlcnRpY2FsLCBob3Jpem9udGFsXSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3ZlcnRpY2FsfXB4ICR7aG9yaXpvbnRhbH1weGA7XHJcbiAgfVxyXG4gIGlmICh0b1N0cmluZy5jYWxsKHN0eWxlKSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiBzdHlsZS5sZW5ndGggPT09IDQpIHtcclxuICAgIGNvbnN0IFt0b3AsIHJpZ2h0LCBkb3duLCBsZWZ0XSA9IHN0eWxlO1xyXG4gICAgcmV0dXJuIGAke3RvcH1weCAke3JpZ2h0fXB4ICR7ZG93bn1weCAke2xlZnR9cHhgO1xyXG4gIH1cclxuICByZXR1cm4gJzAnO1xyXG59O1xyXG5cclxuY29uc3QgQnV0dG9uQnVuY2ggPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IG5vdGVzLCBtYXJnaW4sIHBhZGRpbmcgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cIkJ1dHRvbkJ1bmNoXCJcclxuICAgICAgc3R5bGU9e3sgbWFyZ2luOiBhcHBseVN0eWxlKG1hcmdpbiksIHBhZGRpbmc6IGFwcGx5U3R5bGUocGFkZGluZykgfX1cclxuICAgID5cclxuICAgICAge25vdGVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgZm9udENvbG9yPXt2YWx1ZS5mb250Q29sb3J9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17dmFsdWUuYmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICBjbGljaz17dmFsdWUuY2xpY2t9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt2YWx1ZS5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbkJ1bmNoLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtYXJnaW46IDAsXHJcbiAgcGFkZGluZzogMCxcclxufTtcclxuXHJcbkJ1dHRvbkJ1bmNoLnByb3BUeXBlcyA9IHtcclxuICBub3RlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBmb250Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY2xpY2s6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcclxuICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gICAgfSksXHJcbiAgKS5pc1JlcXVpcmVkLFxyXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmFycmF5XSksXHJcbiAgcGFkZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmFycmF5XSksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25CdW5jaDtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tICcuLi9JbWFnZVNsaWRlcic7XHJcbmltcG9ydCBJbWFnZVRpdGxlIGZyb20gJy4uL0ltYWdlVGl0bGUnO1xyXG5cclxuY29uc3QgSW1hZ2VDb250cm9sbGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGVncmVlLFxyXG4gICAgdHJhbnNpdGlvblRpbWUsXHJcbiAgICBpbWFnZXMsXHJcbiAgICByZXNpemVFbmQsXHJcbiAgICB0aXRsZSxcclxuICAgIGxlZnRTY3JvbGwsXHJcbiAgICByaWdodFNjcm9sbCxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaW1hZ2VMaXN0ID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtpbWFnZVdpZHRoLCBzZXRJbWFnZVdpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBnZXRJbWFnZVdpZHRoID0gKCkgPT4ge1xyXG4gICAgcmVzaXplRW5kKCgpID0+IHtcclxuICAgICAgc2V0SW1hZ2VXaWR0aChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW1hZ2VXaWR0aChpbWFnZUxpc3QuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRXaWR0aCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZ2V0SW1hZ2VXaWR0aCk7XHJcbiAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGdldEltYWdlV2lkdGgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHRpdGxlID8gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEltYWdlU2xpZGVyXHJcbiAgICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgICAgZGVncmVlPXtkZWdyZWV9XHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWU9e3RyYW5zaXRpb25UaW1lfVxyXG4gICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgIGltYWdlV2lkdGg9e2ltYWdlV2lkdGh9XHJcbiAgICAgICAgaXNQcm9tb3Rpb249e2ZhbHNlfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW1hZ2VUaXRsZVxyXG4gICAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICAgIGltYWdlTGVuPXtpbWFnZXMubGVuZ3RofVxyXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICBsZWZ0U2Nyb2xsPXtsZWZ0U2Nyb2xsfVxyXG4gICAgICAgIHJpZ2h0U2Nyb2xsPXtyaWdodFNjcm9sbH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICkgOiAoXHJcbiAgICA8SW1hZ2VTbGlkZXJcclxuICAgICAgcmVmPXtpbWFnZUxpc3R9XHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvblRpbWV9XHJcbiAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICBpbWFnZVdpZHRoPXtpbWFnZVdpZHRofVxyXG4gICAgICBpc1Byb21vdGlvblxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuSW1hZ2VDb250cm9sbGVyLnByb3BUeXBlcyA9IHtcclxuICBkZWdyZWU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICB0cmFuc2l0aW9uVGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGltYWdlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgcmVzaXplRW5kOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxlZnRTY3JvbGw6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJpZ2h0U2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ29udHJvbGxlcjtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB2YWxpZEltYWdlVHlwZSB9IGZyb20gJy4uLy4uL2pzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tICcuLi9MYXlvdXQnO1xyXG5pbXBvcnQgQnV0dG9uQnVuY2ggZnJvbSAnLi4vQnV0dG9uQnVuY2gnO1xyXG5cclxuY29uc3QgUmV2aWV3RWRpdCA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHJldmlldyDrp4zrk6Tqs6Ag7JmE7ISx7ZW07JW865CoIOuvuOyZhFxyXG4gIGNvbnN0IHtcclxuICAgIGNvbW1lbnRJZCxcclxuICAgIHRodW1ibmFpbFdpZHRoLFxyXG4gICAgZXhTY29yZSxcclxuICAgIGV4Q29tbWVudCxcclxuICAgIGV4SW1hZ2VTcmMsXHJcbiAgICBpc1Bvc3QsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzY29yZSwgc2V0U2NvcmVdID0gdXNlU3RhdGUoZXhTY29yZSk7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoZXhDb21tZW50KTtcclxuICBjb25zdCBbaW1hZ2VTcmMsIHNldEltYWdlU3JjXSA9IHVzZVN0YXRlKGV4SW1hZ2VTcmMpO1xyXG4gIGNvbnN0IFt0aHVtYm5haWxTdHlsZSwgc2V0VGh1bWJuYWlsU3R5bGVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHsgYWxlcnRNb2RhbCwgY29uZmlybU1vZGFsIH0gPSB1c2VDb250ZXh0KE1vZGFsQ29udGV4dCk7XHJcbiAgY29uc3QgZm9ybSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGltYWdlU3JjKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlTWVhc3VyZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgaW1hZ2VNZWFzdXJlbWVudC5zcmMgPSBpbWFnZVNyYztcclxuICAgICAgaW1hZ2VNZWFzdXJlbWVudC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLmhlaWdodCAvIHRoaXMud2lkdGg7XHJcbiAgICAgICAgc2V0VGh1bWJuYWlsU3R5bGUoe1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgd2lkdGg6IGAke3RodW1ibmFpbFdpZHRofXB4YCxcclxuICAgICAgICAgIGhlaWdodDogYCR7dGh1bWJuYWlsV2lkdGggKiByYXRpb31weGAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLnNyY30pYCxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRodW1ibmFpbFN0eWxlKHtcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgaW1hZ2VTcmMpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIC8vIHJldHVybuydhCDsooAg7KCV7J2Y7ZW07IScIHN1Ym1pdOydtCDrkJDripTqsIDrpbwg7JWM7JWE7JW87ZWoXHJcbiAgICB0cnkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoc2NvcmUgPD0gMCB8fCBzY29yZSA+IDUpIHtcclxuICAgICAgICBhbGVydE1vZGFsKCfrs4TsoJAg6rCc7IiY6rCAIOyYrOuwlOultOyngCDslYrsirXri4jri6QnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvbW1lbnQubGVuZ3RoIDwgNSB8fCBjb21tZW50Lmxlbmd0aCA+IDQwMCkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+umrOu3sCDquIDsnpDsiJjqsIAg66ee7KeAIOyViuyKteuLiOuLpC4nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGltYWdlUmVmLmN1cnJlbnQuZmlsZXMubGVuZ3RoICYmXHJcbiAgICAgICAgIXZhbGlkSW1hZ2VUeXBlKGltYWdlUmVmLmN1cnJlbnQuZmlsZXNbMF0pXHJcbiAgICAgICkge1xyXG4gICAgICAgIGFsZXJ0TW9kYWwoJ+ydtOuvuOyngOuKlCBqcGcsanBlZyxwbmcg7YyM7J2866eMIOqwgOuKpe2VqeuLiOuLpC4nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm9ybU9iaiA9IG5ldyBGb3JtRGF0YShmb3JtLmN1cnJlbnQpO1xyXG4gICAgICAvKlxyXG4gICAgICBmb3JtT2JqLmFwcGVuZCgncmVzZXJ2YXRpb25JbmZvSWQsYmxhaCk7XHJcbiAgICAgIGZvcm1PYmouYXBwZW5kKCdleEltYWdlJywgISFleERhdGEuaW1hZ2VTcmMpO1xyXG4gICAgICAgICAgICBmb3JtT2JqLmFwcGVuZCgnbmV3SW1hZ2UnLCBuZXdJbWFnZSk7XHJcbiAgICAgICAgICAgICovXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChmb3JtLmN1cnJlbnQuYWN0aW9uLCBmb3JtT2JqKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnRNb2RhbChpc1Bvc3QgPyAn66as67ew6rCAIOuTseuhneuQmOyXiOyKteuLiOuLpCcgOiAn66as67ew6rCAIOyImOygleuQmOyXiOyKteuLiOuLpCcpO1xyXG4gICAgICAgIGlmIChpc1Bvc3QpIGhpc3RvcnkucHVzaCgnL215cmVzZXJ2YXRpb24nKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9kaWZ5UmF0aW5nID0gKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzZXRTY29yZSh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwbG9hZEltYWdlID0gKHsgdGFyZ2V0OiB7IGZpbGVzIH0gfSkgPT4ge1xyXG4gICAgY29uc3QgdGVtcEltYWdlID0gZmlsZXNbMF07XHJcbiAgICBpZiAoIXZhbGlkSW1hZ2VUeXBlKHRlbXBJbWFnZSkpIHtcclxuICAgICAgYWxlcnRNb2RhbCgn7J2066+47KeA64qUIGpwZyxqcGVnLHBuZyDtjIzsnbzrp4wg6rCA64ql7ZWp64uI64ukJyk7XHJcbiAgICAgIGltYWdlUmVmLmN1cnJlbnQudmFsdWUgPSAnJzsgLy8g7JWE66eIIOqzoOyzkOyVvOuQoOq6vOyehFxyXG4gICAgICBzZXRJbWFnZVNyYygnJyk7IC8vIO2VhOyalO2VnOyngCDrqqjrpbTqsqDsnYxcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0SW1hZ2VTcmMod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodGVtcEltYWdlKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FuY2VsSW1hZ2VVcGxvYWQgPSAoKSA9PiB7XHJcbiAgICBpbWFnZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICBzZXRJbWFnZVNyYygnJyk7XHJcbiAgICAvLyBuZXdJbWFnZT0gLTE7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlJldmlld0VkaXRcIj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBtZXRob2Q9e2lzUG9zdCA/ICdQT1NUJyA6ICdQVVQnfVxyXG4gICAgICAgIGFjdGlvbj17YC9hcGkvcmVzZXJ2YXRpb25zL2NvbW1lbnRzLyR7Y29tbWVudElkfWB9XHJcbiAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICAgIG5hbWU9XCJyZXZpZXdGb3JtXCJcclxuICAgICAgICByZWY9e2Zvcm19XHJcbiAgICAgID5cclxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyYXRpbmdTZWN0aW9uXCI+XHJcbiAgICAgICAgICA8cD7rs4TsoJDqs7wg7J207JqpIOqyve2XmOydhCDrgqjqsqjso7zshLjsmpQuPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdTdGFyXCI+XHJcbiAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbiBmbi1zdGFyMiAke1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID49IHZhbHVlID8gJ2dldFN0YXInIDogJ25vdEdldFN0YXInXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2RpZnlSYXRpbmcodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNjb3JlXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17c2NvcmV9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHNjb3JlID4gMCA/ICcjMDAwJyA6ICcjZGRkJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndyaXRlQ29tbWVudFwiPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgcm93cz1cIjE1XCJcclxuICAgICAgICAgICAgbWluTGVuZ3RoPVwiNVwiXHJcbiAgICAgICAgICAgIG1heExlbmd0aD1cIjQwMFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvbW1lbnQodmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdEltYWdlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlTGV0dGVyQ291bnRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVVwbG9hZFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBsb2FkSW1hZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VVcGxvYWRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbiBmbi1pbWFnZTFcIiAvPlxyXG4gICAgICAgICAgICAgIOyCrOynhCDstpTqsIBcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29tbWVudENvdW50XCI+XHJcbiAgICAgICAgICAgICAge2Ake2NvbW1lbnQubGVuZ3RofS80MDAgKOy1nOyGjCA17J6QIOydtOyDgSlgfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsSW1hZ2VcIiBzdHlsZT17dGh1bWJuYWlsU3R5bGV9PlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWNyb3NzMVwiIG9uQ2xpY2s9e2NhbmNlbEltYWdlVXBsb2FkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICB7aXNQb3N0ID8gKFxyXG4gICAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFFQzgwMCcsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25maXJtTW9kYWwoJ+umrOu3sOulvCDrk7HroZ0g7ZWY7Iuc6rKg7Iq164uI6rmMPycsIGhhbmRsZVN1Ym1pdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICfrpqzrt7Ag65Ox66GdJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEJ1dHRvbkJ1bmNoXHJcbiAgICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzFFQzgwMCcsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25maXJtRWRpdChoYW5kbGVTdWJtaXQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICfsiJjsoJUnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Q4REJERScsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25maXJtQ2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICfst6jshownLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuUmV2aWV3RWRpdC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGh1bWJuYWlsV2lkdGg6IDIwMCxcclxuICBleFNjb3JlOiAwLFxyXG4gIGV4Q29tbWVudDogJycsXHJcbiAgZXhJbWFnZVNyYzogJycsXHJcbiAgaXNQb3N0OiB0cnVlLFxyXG59O1xyXG5cclxuUmV2aWV3RWRpdC5wcm9wVHlwZXMgPSB7XHJcbiAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRodW1ibmFpbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGV4U2NvcmU6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgZXhDb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGV4SW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaXNQb3N0OiBQcm9wVHlwZXMuYm9vbCxcclxuICBjb25maXJtRWRpdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY29uZmlybUNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdFZGl0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFRpY2tldEhlYWQgZnJvbSAnLi4vVGlja2V0SGVhZCc7XHJcbmltcG9ydCBUaWNrZXRJbmZvTGlzdCBmcm9tICcuLi9UaWNrZXRJbmZvTGlzdCc7XHJcblxyXG5jb25zdCBUaWNrZXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGluZm9zLCBjaGlsZHJlbiwgYWN0aW9ucywgaXNHcmVlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIlRpY2tldFwiPlxyXG4gICAgICA8VGlja2V0SGVhZCBpc0dyZWVuPXtpc0dyZWVufT57Y2hpbGRyZW59PC9UaWNrZXRIZWFkPlxyXG4gICAgICA8VGlja2V0SW5mb0xpc3QgaW5mb3M9e2luZm9zfSBhY3Rpb25zPXthY3Rpb25zfSAvPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5UaWNrZXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzR3JlZW46IGZhbHNlLFxyXG59O1xyXG5cclxuVGlja2V0LnByb3BUeXBlcyA9IHtcclxuICBpbmZvczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgYWN0aW9uczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5XSksXHJcbiAgaXNHcmVlbjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBCdXR0b25CdW5jaCBmcm9tICcuLi9CdXR0b25CdW5jaCc7XHJcblxyXG5jb25zdCBQcm9kdWN0RGVzYyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGV4dCwgbGltaXQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtpc0ZvbGQsIHNldElzRm9sZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgbGV0IHRleHRPYmo7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpO1xyXG4gICAgdHJpbW1lZFRleHQgPSB0cmltbWVkVGV4dC5yZXBsYWNlKCdcXG4nLCAnJyk7XHJcbiAgICBpZiAodHJpbW1lZFRleHQubGVuZ3RoID4gbGltaXQpIHtcclxuICAgICAgY29uc3QgdGV4dFNpbXBsZSA9IHRyaW1tZWRUZXh0LnNsaWNlKDAsIGxpbWl0KTtcclxuICAgICAgY29uc3QgdGV4dERldGFpbCA9IHRyaW1tZWRUZXh0LnNsaWNlKGxpbWl0KTtcclxuICAgICAgdGV4dE9iaiA9IHsgc2ltcGxlOiB0ZXh0U2ltcGxlLCBkZXRhaWw6IHRleHREZXRhaWwgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRleHRPYmogPSB7IHNpbXBsZTogdHJpbW1lZFRleHQsIGRldGFpbDogJycgfTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dNb3JlRGVzYyA9ICgpID0+IHtcclxuICAgIGlmIChpc0ZvbGQpIHtcclxuICAgICAgJCgnLlByb2R1Y3REZXNjIC5tb3JlRGVzYycpLnNsaWRlRG93bigpO1xyXG4gICAgICBzZXRJc0ZvbGQoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLnByb2R1Y3REZXNjIC5tb3JlRGVzYycpLnNsaWRlVXAoKTtcclxuICAgICAgc2V0SXNGb2xkKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5UZXh0ID0gJ+2OvOyzkOuztOq4sCA8aSBjbGFzcz1cImZuIGZuLWRvd24yXCI+PC9pPic7XHJcbiAgY29uc3QgZm9sZFRleHQgPSAn7KCR6riwIDxpIGNsYXNzPVwiZm4gZm4tdXAyXCI+PC9pPic7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0RGVzY1wiPlxyXG4gICAgICB7dGV4dE9iai5kZXRhaWwgPyAoXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7dGV4dE9iai5zaW1wbGV9XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkb3RzXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNGb2xkID8gJ2lubGluZScgOiAnbm9uZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlRGVzY1wiPnt0ZXh0T2JqLmRldGFpbH08L3NwYW4+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPnt0ZXh0T2JqLnNpbXBsZX08L3A+XHJcbiAgICAgICl9XHJcbiAgICAgIHt0ZXh0T2JqLmRldGFpbCA/IChcclxuICAgICAgICA8QnV0dG9uQnVuY2hcclxuICAgICAgICAgIG5vdGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjNmNWY2JyxcclxuICAgICAgICAgICAgICBjbGljazogc2hvd01vcmVEZXNjLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBpc0ZvbGQgPyBvcGVuVGV4dCA6IGZvbGRUZXh0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgICcnXHJcbiAgICAgICl9XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcblByb2R1Y3REZXNjLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsaW1pdDogMTAwLFxyXG59O1xyXG5cclxuUHJvZHVjdERlc2MucHJvcFR5cGVzID0ge1xyXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXNjO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IEltYWdlQ29udHJvbGxlciBmcm9tICcuLi9JbWFnZUNvbnRyb2xsZXInO1xyXG5cclxuLy8g7Iqk7YGs66GkIOyLnOqwhCh0cmFuc2l0aW9uVGltZSkgZGVmYXVsdCAx7LSIICDsnITsl5DshJwg66y866Ck67Cb64qU6rKDXHJcbi8vIOyDge2DnOuhnCDsgqzsmqntlZjripQg7Iqk7YGs66GkIOyLnOqwhCAodHJhbnNpdGlvbkR1cmF0aW9uKVxyXG4vLyDtmZTrqbQg7KCE7ZmYIOqwhOqyqSAodGltZUludGVydmFsKSAy7LSIXHJcblxyXG5jb25zdCBQcm9tb3Rpb25JbWFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGltZUludGVydmFsLCB0cmFuc2l0aW9uVGltZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2RlZ3JlZSwgc2V0RGVncmVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzY3JvbGxhYmxlLCBzZXRTY3JvbGxhYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0cmFuc2l0aW9uRHVyYXRpb24sIHNldFRyYW5zaXRpb25EdXJhdGlvbl0gPSB1c2VTdGF0ZSh0cmFuc2l0aW9uVGltZSk7XHJcbiAgbGV0IGltYWdlczsgLy8g7JWI65CY66m0IOyDge2DnOuhnFxyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBkYXRhOiB7IGl0ZW1zIH0sXHJcbiAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Byb21vdGlvbnMnKTtcclxuICAgIGl0ZW1zLnB1c2goaXRlbXNbMF0pOyAvLyDsspjsnYzqs7wg66eI7KeA66eJ7J2EIOuPmeydvO2VnCDsnbTrr7jsp4Drpbwg65GQ7Ja07IScIOyKpO2BrOuhpOydhCDrp6TrgYTrn73qsowg7ZWoXHJcbiAgICBpbWFnZXMgPSBpdGVtcztcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRvU2Nyb2xsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoc2Nyb2xsYWJsZSkge1xyXG4gICAgICAgIC8vIOyVhOuniCDqs6Dss5Dslbwg65Cg6rq87J6EXHJcbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbigwKTtcclxuICAgICAgICAgIHNldERlZ3JlZSgwKTtcclxuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbih0cmFuc2l0aW9uVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERlZ3JlZShkZWdyZWUgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGltZUludGVydmFsKTtcclxuICAgIHJldHVybiBjbGVhckludGVydmFsKGF1dG9TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVzaXplRW5kID0gKGZ1bmMpID0+IHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDEwMCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhdXNlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsYWJsZShmYWxzZSk7XHJcbiAgICByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICBzZXRTY3JvbGxhYmxlKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwYXVzZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBhdXNlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDb250cm9sbGVyXHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvbkR1cmF0aW9ufVxyXG4gICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgcmVzaXplRW5kPXtyZXNpemVFbmR9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9tb3Rpb25JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHJhbnNpdGlvblRpbWU6IDIsXHJcbiAgdGltZUludGVydmFsOiAxLFxyXG59O1xyXG5cclxuUHJvbW90aW9uSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRpbWVJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21vdGlvbkltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuLypcclxu7J6s7IKs7Jqp7ISxIOyii+qyjCDsqrzqsJzsnpBcclxuKi9cclxuXHJcbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXNNYWluLCBpc1RyYW5zcGFyZW50LCBpc0xvZ291dGFibGUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiTmF2QmFyXCI+XHJcbiAgICAgIHsoKG1haW4pID0+IHtcclxuICAgICAgICBpZiAobWFpbikge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRhaW5lciAke1xyXG4gICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudCA/ICd0cmFuc3BhcmVudCcgOiAnZml4ZWQnXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uL2ljb24ucG5nXCIgYWx0PVwibmF2ZXIgaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyPntpc0xvZ291dGFibGUgPyAn66Gc6re47JWE7JuDJyA6ICfsmIjslb3tmZXsnbgnfTwvaDI+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhdGhzID0gcGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuICAgICAgICBjb25zdCBpdGVtSWQgPSBwYXRoc1twYXRocy5sZW5ndGggLSAxXTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrd2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2RldGFpbC8ke2l0ZW1JZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZuIGZuLWJhY2t3YXJkMVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZU5hbWVcIj5cclxuICAgICAgICAgICAgICA8aDE+7ZaJ7IKsIOydtOumhDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtcHR5XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pKGlzTWFpbil9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuTmF2QmFyLnByb3BUeXBlcyA9IHtcclxuICBpc01haW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGlzVHJhbnNwYXJlbnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGlzTG9nb3V0YWJsZTogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGlzTWFpbjogdHJ1ZSxcclxuICBpc1RyYW5zcGFyZW50OiBmYWxzZSxcclxuICBpc0xvZ291dGFibGU6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBQcm9kdWN0Q29udGFpbmVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BQcm9kdWN0Q29udGFpbmVyICR7Y2xhc3NOYW1lfWB9PntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcblxyXG5Qcm9kdWN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiTW9kYWxcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBNYWluSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHNyYywgYWx0IH0gPSBwcm9wcztcclxuICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJNYWluSW1hZ2VcIiBzcmM9e3NyY30gYWx0PXthbHR9IC8+O1xyXG59O1xyXG5cclxuTWFpbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5JbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgUmV2aWV3U3VtbWFyeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYXZlcmFnZVNjb3JlLCByZXZpZXdDb3VudCwgZGlzcGxheVN0YXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJDb21tZW50U3VtbWFyeVwiPlxyXG4gICAgICA8aDI+7JiI66ek7J6QIO2VnOykhO2PiTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeUNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAge2Rpc3BsYXlTdGFyKGF2ZXJhZ2VTY29yZSl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdmVyYWdlU2NvcmVcIj57YXZlcmFnZVNjb3JlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1heFNjb3JlXCI+LyA1LjA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudENvdW50XCI+e2Ake3Jldmlld0NvdW50fSDqsbRgfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVucm9sbFRleHRcIj7rk7HroZ08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXZpZXdTdW1tYXJ5LnByb3BUeXBlcyA9IHtcclxuICBhdmVyYWdlU2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICByZXZpZXdDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gIGRpc3BsYXlTdGFyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3U3VtbWFyeTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi4vUmV2aWV3JztcclxuaW1wb3J0IFJldmlld0VkaXQgZnJvbSAnLi4vUmV2aWV3RWRpdCc7XHJcblxyXG5jb25zdCBSZXZpZXdMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmV2aWV3cyxcclxuICAgIGlzQnJpZWYsXHJcbiAgICBpc01vZGlmaWFibGUsXHJcbiAgICBlZGl0Q29tbWVudCxcclxuICAgIGNvbmZpcm1EZWxldGUsXHJcbiAgICBjb25maXJtRWRpdCxcclxuICAgIGNvbmZpcm1DYW5jZWwsXHJcbiAgICBleERhdGE6IHsgaWQsIHNjb3JlLCBjb21tZW50LCBpbWFnZVNyYyB9LFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qgc2hvd1Jldmlld3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXZpZXdzQ29tcCA9IFtdO1xyXG4gICAgWy4uLnJldmlld3NdLnJldmVyc2UoKS5zb21lKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGlzQnJpZWYgJiYgaW5kZXggPj0gNSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldmlld3NDb21wLnB1c2goXHJcbiAgICAgICAgPFJldmlld1xyXG4gICAgICAgICAga2V5PXt2YWx1ZS5jb21tZW50SWR9XHJcbiAgICAgICAgICByZXZpZXc9e3ZhbHVlLmNvbW1lbnR9XHJcbiAgICAgICAgICBpbWFnZT17XHJcbiAgICAgICAgICAgIHZhbHVlLmNvbW1lbnRJbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyB2YWx1ZS5jb21tZW50SW1hZ2VzWzBdLnNhdmVGaWxlTmFtZVxyXG4gICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNjb3JlPXt2YWx1ZS5zY29yZX1cclxuICAgICAgICAgIGVtYWlsPXt2YWx1ZS5yZXNlcnZhdGlvbkVtYWlsfVxyXG4gICAgICAgICAgZGF0ZT17dmFsdWUucmVzZXJ2YXRpb25EYXRlfVxyXG4gICAgICAgICAgZWRpdENvbW1lbnQ9e2VkaXRDb21tZW50KHZhbHVlLmNvbW1lbnRJZCl9XHJcbiAgICAgICAgICBjb25maXJtRGVsZXRlPXtjb25maXJtRGVsZXRlKHZhbHVlLmNvbW1lbnRJZCl9XHJcbiAgICAgICAgLz4sXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXZpZXdzQ29tcDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJSZXZpZXdMaXN0XCI+XHJcbiAgICAgIHtpc01vZGlmaWFibGUgPyAoXHJcbiAgICAgICAgPFJldmlld0VkaXRcclxuICAgICAgICAgIGNvbW1lbnRJZD17aWR9XHJcbiAgICAgICAgICBleFNjb3JlPXtzY29yZX1cclxuICAgICAgICAgIGV4Q29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgIGV4SW1hZ2VTcmM9e2ltYWdlU3JjfVxyXG4gICAgICAgICAgaXNQb3N0PXtmYWxzZX1cclxuICAgICAgICAgIGNvbmZpcm1FZGl0PXtjb25maXJtRWRpdChpZCl9XHJcbiAgICAgICAgICBjb25maXJtQ2FuY2VsPXtjb25maXJtQ2FuY2VsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgc2hvd1Jldmlld3MoKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcblJldmlld0xpc3QucHJvcFR5cGVzID0ge1xyXG4gIHJldmlld3M6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgc2NvcmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBjb21tZW50SW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgc2F2ZUZpbGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLmlzUmVxdWlyZWQsXHJcbiAgICB9KSxcclxuICApLmlzUmVxdWlyZWQsXHJcbiAgaXNCcmllZjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBlZGl0Q29tbWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBjb25maXJtRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1FZGl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGNvbmZpcm1DYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZXhEYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgIHNjb3JlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9