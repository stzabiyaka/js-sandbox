function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return o};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){u.default(e,t),t.add(e)};var l,u=(l=i("7K24o"))&&l.__esModule?l:{default:l};var a=new WeakSet;function h(e,t){return fetch(e,t).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}new class{getAllItems(){return e(s)(this,a,h).call(this,`${this.BASE_URL}/${this.resource}`,this.options)}getItemById({itemId:t}){return e(s)(this,a,h).call(this,`${this.BASE_URL}/${this.resource}/${t}`,this.options)}addItem({newItem:t}){const o={...this.options,method:"POST",body:JSON.stringify(t)};return e(s)(this,a,h).call(this,`${this.BASE_URL}/${this.resource}`,o)}updateItem({itemId:t,newProperties:o}){const r={...this.options,method:"PATCH",body:JSON.stringify(o)};return e(s)(this,a,h).call(this,`${this.BASE_URL}/${this.resource}/${t}`,r)}replaceItem({itemId:t,newProperties:o}){const r={...this.options,method:"PUT",body:JSON.stringify(o)};return e(s)(this,a,h).call(this,`${this.BASE_URL}/${this.resource}/${t}`,r)}removeItem({itemId:t}){return e(s)(this,a,h).call(this,`${this.BASE_URL}/${this.resource}/${t}`,{method:"DELETE"})}constructor({resource:t}){e(n)(this,a),this.BASE_URL="http://localhost:4040",this.resource=t,this.options={headers:{"Content-type":"application/json"}}}}({resource:"books"}).getAllItems().then((function(e){console.log(e)})).catch(console.log);
//# sourceMappingURL=index.244eb231.js.map