"use strict";
(self["webpackChunk_aztlan_template_react"] = self["webpackChunk_aztlan_template_react"] || []).push([["blog.homepage"],{

/***/ "./src/modules/base.homepage/pages/Home.tsx":
/*!**************************************************!*\
  !*** ./src/modules/base.homepage/pages/Home.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-relay */ "../../node_modules/react-relay/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_templates_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/templates/Base */ "./src/modules/common/templates/Base.tsx");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui */ "./src/modules/base.homepage/ui/index.ts");
/* harmony import */ var _common_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ui */ "./src/modules/common/ui/index.ts");
/* @aztlan/generator-front 0.4.0 */





function Home() {
  var data = (0,react_relay__WEBPACK_IMPORTED_MODULE_1__.useLazyLoadQuery)(_ui__WEBPACK_IMPORTED_MODULE_3__.QueryTester.QUERY, {}, {
    fetchPolicy: 'store-or-network'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_templates_Base__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Homepage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_ui__WEBPACK_IMPORTED_MODULE_4__.ThemeSwitcher, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui__WEBPACK_IMPORTED_MODULE_3__.QueryTester, {
    data: data
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Welcome to the homepage of our site."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/modules/base.homepage/ui/QueryTester/QueryTester.tsx":
/*!******************************************************************!*\
  !*** ./src/modules/base.homepage/ui/QueryTester/QueryTester.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _aztlan_bem_exports_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aztlan/bem/exports.scss */ "../../node_modules/@aztlan/bem/exports.scss");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-relay */ "../../node_modules/react-relay/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_2__);
var _excluded = ["id", "className", "style", "children", "data"];
var _QueryTesterFragment, _QueryTesterQuery;
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* @aztlan/generator-front 0.2.0 */




// @ts-ignore



// Local Definitions

var baseClassName = _aztlan_bem_exports_scss__WEBPACK_IMPORTED_MODULE_1__["default"].base;
var componentClassName = 'query-tester';
var FRAGMENT = _QueryTesterFragment !== void 0 ? _QueryTesterFragment : (_QueryTesterFragment = __webpack_require__(/*! ./__generated__/QueryTesterFragment.graphql */ "./src/modules/base.homepage/ui/QueryTester/__generated__/QueryTesterFragment.graphql.ts"), _QueryTesterFragment.hash && _QueryTesterFragment.hash !== "d1cdb0deb371cd84d96ec9c6169e1255" && console.error("The definition of 'QueryTesterFragment' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _QueryTesterFragment);
var QUERY = _QueryTesterQuery !== void 0 ? _QueryTesterQuery : (_QueryTesterQuery = __webpack_require__(/*! ./__generated__/QueryTesterQuery.graphql */ "./src/modules/base.homepage/ui/QueryTester/__generated__/QueryTesterQuery.graphql.ts"), _QueryTesterQuery.hash && _QueryTesterQuery.hash !== "920e8fa8275613b7ca9be05c137e7fbf" && console.error("The definition of 'QueryTesterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _QueryTesterQuery);

/**
 * This is the component description.
 */
function QueryTester(_ref) {
  var id = _ref.id,
    userClassName = _ref.className,
    style = _ref.style,
    children = _ref.children,
    data = _ref.data,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(function () {
    // @ts-ignore
    __webpack_require__.e(/*! import() */ "src_modules_base_homepage_ui_QueryTester_styles_scss").then(__webpack_require__.bind(__webpack_require__, /*! ./styles.scss */ "./src/modules/base.homepage/ui/QueryTester/styles.scss"));
  }, []);
  var _useFragment = (0,react_relay__WEBPACK_IMPORTED_MODULE_2__.useFragment)(FRAGMENT, data),
    time = _useFragment.time;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: id,
    className: [baseClassName, componentClassName, userClassName].filter(function (e) {
      return e;
    }).join(' '),
    style: style
    // {...otherProps}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "TIME IS", ' ', time, children));
}
QueryTester.propTypes = {
  /**
   * The HTML id for this element
   */
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * The HTML class names for this element
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  /**
   * The React-written, css properties for this element.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default().objectOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)),
  /**
   *  The children JSX
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node)
};
QueryTester.defaultProps = {
  // someProp:false
};
QueryTester.QUERY = QUERY;
QueryTester.FRAGMENT = FRAGMENT;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryTester);

/***/ }),

/***/ "./src/modules/base.homepage/ui/QueryTester/__generated__/QueryTesterFragment.graphql.ts":
/*!***********************************************************************************************!*\
  !*** ./src/modules/base.homepage/ui/QueryTester/__generated__/QueryTesterFragment.graphql.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @generated SignedSource<<8371248ec54f98c9e1e4120f2ecd0cf8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QueryTesterFragment",
  "selections": [{
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "time",
    "storageKey": null
  }],
  "type": "Query",
  "abstractKey": null
};
node.hash = "d1cdb0deb371cd84d96ec9c6169e1255";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);

/***/ }),

/***/ "./src/modules/base.homepage/ui/QueryTester/__generated__/QueryTesterQuery.graphql.ts":
/*!********************************************************************************************!*\
  !*** ./src/modules/base.homepage/ui/QueryTester/__generated__/QueryTesterQuery.graphql.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @generated SignedSource<<76d71db0352e4f1ed58b4699c47864ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

var node = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryTesterQuery",
    "selections": [{
      "args": null,
      "kind": "FragmentSpread",
      "name": "QueryTesterFragment"
    }],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QueryTesterQuery",
    "selections": [{
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "time",
      "storageKey": null
    }]
  },
  "params": {
    "cacheID": "cb2c901c92e521a25b2ac76857b5e322",
    "id": null,
    "metadata": {},
    "name": "QueryTesterQuery",
    "operationKind": "query",
    "text": "query QueryTesterQuery {\n  ...QueryTesterFragment\n}\n\nfragment QueryTesterFragment on Query {\n  time\n}\n"
  }
};
node.hash = "920e8fa8275613b7ca9be05c137e7fbf";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (node);

/***/ }),

/***/ "./src/modules/base.homepage/ui/QueryTester/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/base.homepage/ui/QueryTester/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryTester: () => (/* reexport safe */ _QueryTester__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _QueryTester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryTester */ "./src/modules/base.homepage/ui/QueryTester/QueryTester.tsx");
/* @aztlan/generator-front 0.2.0 */


/***/ }),

/***/ "./src/modules/base.homepage/ui/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/base.homepage/ui/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryTester: () => (/* reexport safe */ _QueryTester__WEBPACK_IMPORTED_MODULE_0__.QueryTester)
/* harmony export */ });
/* harmony import */ var _QueryTester__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryTester */ "./src/modules/base.homepage/ui/QueryTester/index.ts");


/***/ })

}]);
//# sourceMappingURL=blog.homepage.js.map?b087c