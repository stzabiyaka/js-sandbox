!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){s.default(e,t),t.add(e)};var u,s=(u=o("5k7tO"))&&u.__esModule?u:{default:u};var l={};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,n){t&&f(e.prototype,t);n&&f(e,n);return e};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h.default(e,t,n[t])}))}return e};var h=function(e){return e&&e.__esModule?e:{default:e}}(o("hKHmD"));var p=new WeakSet;function v(e,t){return fetch(e,t).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}new(function(){"use strict";function t(n){var r=n.resource;e(i)(this,t),e(a)(this,p),this.BASE_URL="http://localhost:4040",this.resource=r,this.options={headers:{"Content-type":"application/json"}}}return e(l)(t,[{key:"getAllItems",value:function(){return e(c)(this,p,v).call(this,"".concat(this.BASE_URL,"/").concat(this.resource),this.options)}},{key:"getItemById",value:function(t){var n=t.itemId;return e(c)(this,p,v).call(this,"".concat(this.BASE_URL,"/").concat(this.resource,"/").concat(n),this.options)}},{key:"addItem",value:function(t){var n=t.newItem,r=e(d)({},this.options,{method:"POST",body:JSON.stringify(n)});return e(c)(this,p,v).call(this,"".concat(this.BASE_URL,"/").concat(this.resource),r)}},{key:"updateItem",value:function(t){var n=t.itemId,r=t.newProperties,o=e(d)({},this.options,{method:"PATCH",body:JSON.stringify(r)});return e(c)(this,p,v).call(this,"".concat(this.BASE_URL,"/").concat(this.resource,"/").concat(n),o)}},{key:"replaceItem",value:function(t){var n=t.itemId,r=t.newProperties,o=e(d)({},this.options,{method:"PUT",body:JSON.stringify(r)});return e(c)(this,p,v).call(this,"".concat(this.BASE_URL,"/").concat(this.resource,"/").concat(n),o)}},{key:"removeItem",value:function(t){var n=t.itemId;return e(c)(this,p,v).call(this,"".concat(this.BASE_URL,"/").concat(this.resource,"/").concat(n),{method:"DELETE"})}}]),t}())({resource:"books"}).getAllItems().then((function(e){console.log(e)})).catch(console.log)}();
//# sourceMappingURL=index.3deb783a.js.map
