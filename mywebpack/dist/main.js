(function (graph) {
  function require(module) {
    debugger
    function localRequire(relativePath) {
      return require(graph[module].dependecies[relativePath]);
    }
    var exports = {};
    (function (require, exports, code) {
      eval(code);
    })(localRequire, exports, graph[module].code);
    return exports;
  }
  require("./src/index.js");
})({ "./src/index.js": { dependecies: { "./b.js": "./src\\b.js" }, code: '"use strict";\n\nvar _b = _interopRequireDefault(require("./b.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nvar a = 1;\nconsole.log(_b["default"]);' }, "./src\\b.js": { dependecies: {}, code: '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports["default"] = void 0;\n// import C from "./c.js";\n// console.log(C);\nvar B = "b";\nvar _default = B;\nexports["default"] = _default;' } });





var _b = _interopRequireDefault(require("./b.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var a = 1;
console.log(_b["default"]);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// import C from "./c.js";
// console.log(C);
var B = "b";
var _default = B;
exports["default"] = _default;
