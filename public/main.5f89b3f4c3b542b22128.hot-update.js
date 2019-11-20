webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L1Byb21vdGlvbkltYWdlL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJQcm9tb3Rpb25JbWFnZSIsInByb3BzIiwidGltZUludGVydmFsIiwidHJhbnNpdGlvblRpbWUiLCJ1c2VTdGF0ZSIsImRlZ3JlZSIsInNldERlZ3JlZSIsInNjcm9sbGFibGUiLCJzZXRTY3JvbGxhYmxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwic2V0VHJhbnNpdGlvbkR1cmF0aW9uIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwidXNlRWZmZWN0IiwiZmV0Y2hJbWFnZXMiLCJheGlvcyIsImdldCIsIml0ZW1zIiwiZGF0YSIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJhdXRvU2Nyb2xsIiwic2V0SW50ZXJ2YWwiLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwicmVzaXplRW5kIiwiZnVuYyIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInBhdXNlU2Nyb2xsIiwidXNlTGF5b3V0RWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUN4QkMsWUFEd0IsR0FDU0QsS0FEVCxDQUN4QkMsWUFEd0I7QUFBQSxNQUNWQyxjQURVLEdBQ1NGLEtBRFQsQ0FDVkUsY0FEVTs7QUFBQSxrQkFFSkMsc0RBQVEsQ0FBQyxDQUFELENBRko7QUFBQTtBQUFBLE1BRXpCQyxNQUZ5QjtBQUFBLE1BRWpCQyxTQUZpQjs7QUFBQSxtQkFHSUYsc0RBQVEsQ0FBQyxJQUFELENB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QUV6QnJDLGNBQVksRUFBRW9DLGlEQUFTLENBQUNDO0FBRkMsQ0FBM0I7ZUFLZXZDLGM7QUFBQTs7Ozs7Ozs7OzswQkE3RVRBLGMiLCJmaWxlIjoibWFpbi41Zjg5YjNmNGMzYjU0MmIyMjEyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBJbWFnZUNvbnRyb2xsZXIgZnJvbSAnLi4vSW1hZ2VDb250cm9sbGVyJztcclxuXHJcbi8vIOyKpO2BrOuhpCDsi5zqsIQodHJhbnNpdGlvblRpbWUpIGRlZmF1bHQgMey0iCAg7JyE7JeQ7IScIOusvOugpOuwm+uKlOqyg1xyXG4vLyDsg4Htg5zroZwg7IKs7Jqp7ZWY64qUIOyKpO2BrOuhpCDsi5zqsIQgKHRyYW5zaXRpb25EdXJhdGlvbilcclxuLy8g7ZmU66m0IOyghO2ZmCDqsITqsqkgKHRpbWVJbnRlcnZhbCkgMuy0iFxyXG5cclxuY29uc3QgUHJvbW90aW9uSW1hZ2UgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHRpbWVJbnRlcnZhbCwgdHJhbnNpdGlvblRpbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtkZWdyZWUsIHNldERlZ3JlZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2Nyb2xsYWJsZSwgc2V0U2Nyb2xsYWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdHJhbnNpdGlvbkR1cmF0aW9uLCBzZXRUcmFuc2l0aW9uRHVyYXRpb25dID0gdXNlU3RhdGUodHJhbnNpdGlvblRpbWUpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICBkYXRhOiB7IGl0ZW1zIH0sXHJcbiAgICAgICAgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9tb3Rpb25zJyk7XHJcbiAgICAgICAgaXRlbXMucHVzaChpdGVtc1swXSk7IC8vIOyymOydjOqzvCDrp4jsp4Drp4nsnYQg64+Z7J287ZWcIOydtOuvuOyngOulvCDrkZDslrTshJwg7Iqk7YGs66Gk7J2EIOunpOuBhOufveqyjCDtlahcclxuICAgICAgICBzZXRJbWFnZXMoaXRlbXMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hJbWFnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRvU2Nyb2xsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoc2Nyb2xsYWJsZSkge1xyXG4gICAgICAgIC8vIOyVhOuniCDqs6Dss5Dslbwg65Cg6rq87J6EXHJcbiAgICAgICAgaWYgKGRlZ3JlZSA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbigwKTtcclxuICAgICAgICAgIHNldERlZ3JlZSgwKTtcclxuICAgICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbih0cmFuc2l0aW9uVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERlZ3JlZShkZWdyZWUgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfSwgdGltZUludGVydmFsKTtcclxuICAgIHJldHVybiBjbGVhckludGVydmFsKGF1dG9TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVzaXplRW5kID0gKGZ1bmMpID0+IHtcclxuICAgIGxldCB0aW1lcjtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMsIDEwMCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhdXNlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgc2V0U2Nyb2xsYWJsZShmYWxzZSk7XHJcbiAgICByZXNpemVFbmQoKCkgPT4ge1xyXG4gICAgICBzZXRTY3JvbGxhYmxlKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwYXVzZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBhdXNlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDb250cm9sbGVyXHJcbiAgICAgIGRlZ3JlZT17ZGVncmVlfVxyXG4gICAgICB0cmFuc2l0aW9uVGltZT17dHJhbnNpdGlvbkR1cmF0aW9ufVxyXG4gICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgcmVzaXplRW5kPXtyZXNpemVFbmR9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Qcm9tb3Rpb25JbWFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHJhbnNpdGlvblRpbWU6IDIsXHJcbiAgdGltZUludGVydmFsOiAxLFxyXG59O1xyXG5cclxuUHJvbW90aW9uSW1hZ2UucHJvcFR5cGVzID0ge1xyXG4gIHRyYW5zaXRpb25UaW1lOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRpbWVJbnRlcnZhbDogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21vdGlvbkltYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9