webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanN4L1RpY2tldEluZm9MaXN0L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJUaWNrZXRJbmZvTGlzdCIsInByb3BzIiwiaW5mb3MiLCJhY3Rpb25zIiwiYmFzaXNDb3VudCIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImhlaWdodCIsInNldEhlaWdodCIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImxlbmd0aCIsImxpc3QiLCJjdXJyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJidXR0b25IZWlnaHQiLCJjaGlsZEVsZW1lbnRDb3VudCIsImxhc3RFbGVtZW50Q2hpbGQiLCJvZmZzZXRIZWlnaHQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlRm9sZCIsInNob3dCdXR0b24iLCJzbGljZSIsIm1hcCIsInZhbHVlIiwiaW5kZXgiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3hCQyxLQUR3QixHQUNPRCxLQURQLENBQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxPQURpQixHQUNPRixLQURQLENBQ2pCRSxPQURpQjtBQUFBLE1BQ1JDLFVBRFEsR0FDT0gsS0FEUCxDQUNSRyxVQURROztBQUFBLGtCQUVOQyxzREFBUSxDQUFDLENBQUQsQ0FGRjtBQUFBO0FBQUEsTUFFekJDLEtBRnlCO0FBQUEsTUFFbEJDLFFBRmtCOztBQUFBLG1CQUdKRixzREFBUSxDQUFDLENBQUQsQ0FISjtBQUFBO0FBQUEsTUFHekJHLE1BSHlCO0FBQUEsTUFHakJDLFNBSGlCOztBQUloQyxNQUFNQyxZQUFZLEdBQUdD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TUdvQixVQUFVLEVBTmIsQ0FERjtBQVVELENBM0ZEOztjQUFNdkIsYzs7QUE2Rk5BLGNBQWMsQ0FBQzRCLFlBQWYsR0FBOEI7QUFDNUJ4QixZQUFVLEVBQUU7QUFEZ0IsQ0FBOUI7QUFJQUosY0FBYyxDQUFDNkIsU0FBZixHQUEyQjtBQUN6QjNCLE9BQUssRUFBRTRCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0JDLFVBREU7QUFFekI3QixTQUFPLEVBQUUyQixpREFBUyxDQUFDQyxLQUFWLENBQWdCQyxVQUZBO0FBR3pCNUIsWUFBVSxFQUFFMEIsaURBQVMsQ0FBQ0c7QUFIRyxDQUEzQjtlQU1lakMsYztBQUFBOzs7Ozs7Ozs7OzBCQXZHVEEsYyIsImZpbGUiOiJtYWluLjcxMzRkMzYxNzU1NGRlZTAxZDVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBUaWNrZXRJbmZvIGZyb20gJy4uL1RpY2tldEluZm8nO1xyXG5pbXBvcnQgRmxleENvbnRhaW5lciBmcm9tICcuLi9GbGV4Q29udGFpbmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xyXG5cclxuY29uc3QgVGlja2V0SW5mb0xpc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGluZm9zLCBhY3Rpb25zLCBiYXNpc0NvdW50IH0gPSBwcm9wcztcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5mb3MubGVuZ3RoID49IGJhc2lzQ291bnQpIHtcclxuICAgICAgc2V0Q291bnQoYmFzaXNDb3VudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDb3VudChpbmZvcy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIH0sIFtpbmZvc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IGNvbnRhaW5lclJlZi5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgYnV0dG9uSGVpZ2h0ID1cclxuICAgICAgY29udGFpbmVyUmVmLmN1cnJlbnQuY2hpbGRFbGVtZW50Q291bnQgPiAxXHJcbiAgICAgICAgPyBjb250YWluZXJSZWYuY3VycmVudC5sYXN0RWxlbWVudENoaWxkLm9mZnNldEhlaWdodFxyXG4gICAgICAgIDogMDtcclxuICAgIGlmIChsaXN0KSB7XHJcbiAgICAgIHNldEhlaWdodChsaXN0Lm9mZnNldEhlaWdodCArIGJ1dHRvbkhlaWdodCk7XHJcbiAgICB9XHJcbiAgfSwgW2NvdW50XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBpZiAoaW5mb3MubGVuZ3RoID49IGNvdW50ICsgYmFzaXNDb3VudCkge1xyXG4gICAgICBzZXRDb3VudChjb3VudCArIGJhc2lzQ291bnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Q291bnQoaW5mb3MubGVuZ3RoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2xkID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvdW50IC0gYmFzaXNDb3VudCA+IDApIHtcclxuICAgICAgc2V0Q291bnQoY291bnQgLSBiYXNpc0NvdW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldENvdW50KDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAvKlxyXG4gICAgICogIDEuIOuyhO2KvOydtCDsl4bripQg7IOB7YOcXHJcbiAgICAgKiAgIDIuIG1vcmUg66eMIOyeiOuKlCDsg4Htg5xcclxuICAgICAqICAgIDMuIG1vcmUsZm9sZOunjCDsnojripQg7IOB7YOcXHJcbiAgICAgKiAgICA0LiBmb2xk66eMIOyeiOuKlCDsg4Htg5xcclxuICAgICAqICA8QnV0dG9uIGtleT17aW5kZXh9IHN0eWxlPXt2YWx1ZS5zdHlsZX0gY2xpY2s9e3ZhbHVlLmNsaWNrfT5cclxuICAgICAgICAgICAge3ZhbHVlLmNoaWxkcmVufVxyXG4gICAgICovXHJcbiAgICBpZiAoaW5mb3MubGVuZ3RoIDw9IGJhc2lzQ291bnQpIHtcclxuICAgICAgLy8xXHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGlmIChjb3VudCA8PSBiYXNpc0NvdW50KSB7XHJcbiAgICAgIC8vIDIg7LWc7LSIIO2YueydgCDstZzrjIDtlZwg7KSE7Ja065OgIOyDge2DnFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGljaz17aGFuZGxlT3Blbn0+642U67O06riwPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4Q29udGFpbmVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm9zLmxlbmd0aCA+IGNvdW50KSB7XHJcbiAgICAgIC8vIDMg7KSR6rCEIOuLqOqzhFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGljaz17aGFuZGxlT3Blbn0+642U67O06riwPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsaWNrPXtoYW5kbGVGb2xkfT7soJHquLA8L0J1dHRvbj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgICk7XHJcbiAgICB9IGlmIChpbmZvcy5sZW5ndGggPT09IGNvdW50KSB7XHJcbiAgICAgIC8vIDQg7LWc7KKFIOuLqOqzhFxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGbGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGljaz17aGFuZGxlRm9sZH0+7KCR6riwPC9CdXR0b24+XHJcbiAgICAgICAgPC9GbGV4Q29udGFpbmVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpY2tldEluZm9MaXN0XCIgcmVmPXtjb250YWluZXJSZWZ9IHN0eWxlPXt7IGhlaWdodCB9fT5cclxuICAgICAgPG9sPlxyXG4gICAgICAgIHtpbmZvcy5zbGljZSgwLCBjb3VudCkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8VGlja2V0SW5mbyBrZXk9e2luZGV4fSBpbmZvPXt2YWx1ZX0gYWN0aW9ucz17YWN0aW9uc30gLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIHtzaG93QnV0dG9uKCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuVGlja2V0SW5mb0xpc3QuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJhc2lzQ291bnQ6IDQsXHJcbn07XHJcblxyXG5UaWNrZXRJbmZvTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaW5mb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGJhc2lzQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWNrZXRJbmZvTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==