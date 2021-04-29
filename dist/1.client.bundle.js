(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../node_modules/@hapi/joi/dist/joi-browser.min.js":
/*!*********************************************************!*\
  !*** ../node_modules/@hapi/joi/dist/joi-browser.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";const s=r(12);e.exports=function(e,...t){if(!e){if(1===t.length&&t[0]instanceof Error)throw t[0];throw new s(t)}}},function(e,t,r){"use strict";const s=r(0),n=r(12),o=r(29);let a,i;const l={isoDate:/^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/};t.version=o.version,t.defaults={abortEarly:!0,allowUnknown:!1,cache:!0,context:null,convert:!0,dateFormat:"iso",errors:{escapeHtml:!1,label:"path",language:null,render:!0,stack:!1,wrap:{label:'"',array:"[]"}},externals:!0,messages:{},nonEnumerables:!1,noDefaults:!1,presence:"optional",skipFunctions:!1,stripUnknown:!1,warnings:!1},t.symbols={any:Symbol.for("@hapi/joi/schema"),arraySingle:Symbol("arraySingle"),deepDefault:Symbol("deepDefault"),literal:Symbol("literal"),override:Symbol("override"),prefs:Symbol("prefs"),ref:Symbol("ref"),values:Symbol("values"),template:Symbol("template")},t.assertOptions=function(e,t,r="Options"){s(e&&"object"==typeof e&&!Array.isArray(e),"Options must be of type object");const n=Object.keys(e).filter(e=>!t.includes(e));s(0===n.length,"".concat(r," contain unknown keys: ").concat(n))},t.checkPreferences=function(e){i=i||r(16);const t=i.preferences.validate(e);if(t.error)throw new n([t.error.details[0].message])},t.compare=function(e,t,r){switch(r){case"=":return e===t;case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}},t.default=function(e,t){return void 0===e?t:e},t.isIsoDate=function(e){return l.isoDate.test(e)},t.isNumber=function(e){return"number"==typeof e&&!isNaN(e)},t.isResolvable=function(e){return!!e&&(e[t.symbols.ref]||e[t.symbols.template])},t.isSchema=function(e,r={}){const n=e&&e[t.symbols.any];return!!n&&(s(r.legacy||n.version===t.version,"Cannot mix different versions of joi schemas"),!0)},t.isValues=function(e){return e[t.symbols.values]},t.limit=function(e){return Number.isSafeInteger(e)&&e>=0},t.preferences=function(e,s){a=a||r(9),e=e||{},s=s||{};const n=Object.assign({},e,s);return s.errors&&e.errors&&(n.errors=Object.assign({},e.errors,s.errors),n.errors.wrap=Object.assign({},e.errors.wrap,s.errors.wrap)),s.messages&&(n.messages=a.compile(s.messages,e.messages)),delete n[t.symbols.prefs],n},t.tryWithPath=function(e,t,r={}){try{return e()}catch(e){throw void 0!==e.path?e.path=t+"."+e.path:e.path=t,r.append&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},t.validateArg=function(e,r,{assert:s,message:n}){if(t.isSchema(s)){const t=s.validate(e);if(!t.error)return;return t.error.message}if(!s(e))return r?"".concat(r," ").concat(n):n},t.verifyFlat=function(e,t){for(const r of e)s(!Array.isArray(r),"Method no longer accepts array arguments:",t)}},function(e,t,r){"use strict";const s=r(6),n=r(13),o=r(14),a={needsProtoHack:new Set([n.set,n.map,n.weakSet,n.weakMap])};e.exports=a.clone=function(e,t={},r=null){if("object"!=typeof e||null===e)return e;let s=a.clone,i=r;if(t.shallow){if(!0!==t.shallow)return a.cloneWithShallow(e,t);s=e=>e}else if(i){const t=i.get(e);if(t)return t}else i=new Map;const l=n.getInternalProto(e);if(l===n.buffer)return!1;if(l===n.date)return new Date(e.getTime());if(l===n.regex)return new RegExp(e);const c=a.base(e,l,t);if(c===e)return e;if(i&&i.set(e,c),l===n.set)for(const r of e)c.add(s(r,t,i));else if(l===n.map)for(const[r,n]of e)c.set(r,s(n,t,i));const u=o.keys(e,t);for(const r of u){if("__proto__"===r)continue;if(l===n.array&&"length"===r){c.length=e.length;continue}const o=Object.getOwnPropertyDescriptor(e,r);o?o.get||o.set?Object.defineProperty(c,r,o):o.enumerable?c[r]=s(e[r],t,i):Object.defineProperty(c,r,{enumerable:!1,writable:!0,configurable:!0,value:s(e[r],t,i)}):Object.defineProperty(c,r,{enumerable:!0,writable:!0,configurable:!0,value:s(e[r],t,i)})}return c},a.cloneWithShallow=function(e,t){const r=t.shallow;(t=Object.assign({},t)).shallow=!1;const n=new Map;for(const t of r){const r=s(e,t);"object"!=typeof r&&"function"!=typeof r||n.set(r,r)}return a.clone(e,t,n)},a.base=function(e,t,r){if(!1===r.prototype)return a.needsProtoHack.has(t)?new t.constructor:t===n.array?[]:{};const s=Object.getPrototypeOf(e);if(s&&s.isImmutable)return e;if(t===n.array){const e=[];return s!==t&&Object.setPrototypeOf(e,s),e}if(a.needsProtoHack.has(t)){const e=new s.constructor;return s!==t&&Object.setPrototypeOf(e,s),e}return Object.create(s)}},function(e,t,r){"use strict";const s=r(0),n=r(34),o=r(1),a=r(9);e.exports=n.extend({type:"any",flags:{only:{default:!1}},terms:{alterations:{init:null},examples:{init:null},externals:{init:null},metas:{init:[]},notes:{init:[]},shared:{init:null},tags:{init:[]},whens:{init:null}},rules:{custom:{method(e,t){return s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this.$_addRule({name:"custom",args:{method:e,description:t}})},validate(e,t,{method:r}){try{return r(e,t)}catch(e){return t.error("any.custom",{error:e})}},args:["method","description"],multi:!0},messages:{method(e){return this.prefs({messages:e})}},shared:{method(e){s(o.isSchema(e)&&e._flags.id,"Schema must be a schema with an id");const t=this.clone();return t.$_terms.shared=t.$_terms.shared||[],t.$_terms.shared.push(e),t.$_mutateRegister(e),t}},warning:{method(e,t){return s(e&&"string"==typeof e,"Invalid warning code"),this.$_addRule({name:"warning",args:{code:e,local:t},warn:!0})},validate:(e,t,{code:r,local:s})=>t.error(r,s),args:["code","local"],multi:!0}},modifiers:{keep(e,t=!0){e.keep=t},message(e,t){e.message=a.compile(t)},warn(e,t=!0){e.warn=t}},manifest:{build(e,t){for(const r in t){const s=t[r];if(["examples","externals","metas","notes","tags"].includes(r))for(const t of s)e=e[r.slice(0,-1)](t);else if("alterations"!==r)if("whens"!==r){if("shared"===r)for(const t of s)e=e.shared(t)}else for(const t of s){const{ref:r,is:s,not:n,then:o,otherwise:a,concat:i}=t;e=i?e.concat(i):r?e.when(r,{is:s,not:n,then:o,otherwise:a,switch:t.switch,break:t.break}):e.when(s,{then:o,otherwise:a,break:t.break})}else{const t={};for(const{target:e,adjuster:r}of s)t[e]=r;e=e.alter(t)}}return e}},messages:{"any.custom":"{{#label}} failed custom validation because {{#error.message}}","any.default":"{{#label}} threw an error when running default method","any.failover":"{{#label}} threw an error when running failover method","any.invalid":"{{#label}} contains an invalid value","any.only":'{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',"any.ref":'{{#label}} {{#arg}} references "{{#ref}}" which {{#reason}}',"any.required":"{{#label}} is required","any.unknown":"{{#label}} is not allowed"}})},function(e,t,r){"use strict";const s=r(32),n=r(1),o=r(7);t.Report=class{constructor(e,r,s,n,o,a,i){if(this.code=e,this.flags=n,this.messages=o,this.path=a.path,this.prefs=i,this.state=a,this.value=r,this.message=null,this.template=null,this.local=s||{},this.local.label=t.label(this.flags,this.state,this.prefs,this.messages),void 0===this.value||this.local.hasOwnProperty("value")||(this.local.value=this.value),this.path.length){const e=this.path[this.path.length-1];"object"!=typeof e&&(this.local.key=e)}}_setTemplate(e){if(this.template=e,!this.flags.label&&0===this.path.length){const e=this._template(this.template,"root");e&&(this.local.label=e)}}toString(){if(this.message)return this.message;const e=this.code;if(!this.prefs.errors.render)return this.code;const t=this._template(this.template)||this._template(this.prefs.messages)||this._template(this.messages);return void 0===t?'Error code "'.concat(e,'" is not defined, your custom type is missing the correct messages definition'):(this.message=t.render(this.value,this.state,this.prefs,this.local,{errors:this.prefs.errors,messages:[this.prefs.messages,this.messages]}),this.prefs.errors.label||(this.message=this.message.replace(/^"" /,"").trim()),this.message)}_template(e,r){return t.template(this.value,e,r||this.code,this.state,this.prefs)}},t.path=function(e){let t="";for(const r of e)"object"!=typeof r&&("string"==typeof r?(t&&(t+="."),t+=r):t+="[".concat(r,"]"));return t},t.template=function(e,t,r,s,a){if(!t)return;if(o.isTemplate(t))return"root"!==r?t:null;let i=a.errors.language;return n.isResolvable(i)&&(i=i.resolve(e,s,a)),i&&t[i]&&void 0!==t[i][r]?t[i][r]:t[r]},t.label=function(e,r,s,n){if(e.label)return e.label;if(!s.errors.label)return"";let o=r.path;"key"===s.errors.label&&r.path.length>1&&(o=r.path.slice(-1));const a=t.path(o);return a||(t.template(null,s.messages,"root",r,s)||n&&t.template(null,n,"root",r,s)||"value")},t.process=function(e,r,s){if(!e)return null;const{override:n,message:o,details:a}=t.details(e);if(n)return n;if(s.errors.stack)return new t.ValidationError(o,a,r);const i=Error.stackTraceLimit;Error.stackTraceLimit=0;const l=new t.ValidationError(o,a,r);return Error.stackTraceLimit=i,l},t.details=function(e,t={}){let r=[];const s=[];for(const n of e){if(n instanceof Error){if(!1!==t.override)return{override:n};const e=n.toString();r.push(e),s.push({message:e,type:"override",context:{error:n}});continue}const e=n.toString();r.push(e),s.push({message:e,path:n.path.filter(e=>"object"!=typeof e),type:n.code,context:n.local})}return r.length>1&&(r=[...new Set(r)]),{message:r.join(". "),details:s}},t.ValidationError=class extends Error{constructor(e,t,r){super(e),this._original=r,this.details=t}static isError(e){return e instanceof t.ValidationError}},t.ValidationError.prototype.isJoi=!0,t.ValidationError.prototype.name="ValidationError",t.ValidationError.prototype.annotate=s.error},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(6),a=r(1);let i;const l={symbol:Symbol("ref"),defaults:{adjust:null,in:!1,iterables:null,map:null,separator:".",type:"value"}};t.create=function(e,t={}){s("string"==typeof e,"Invalid reference key:",e),a.assertOptions(t,["adjust","ancestor","in","iterables","map","prefix","separator"]),s(!t.prefix||"object"==typeof t.prefix,"options.prefix must be of type object");const r=Object.assign({},l.defaults,t);delete r.prefix;const n=r.separator,o=l.context(e,n,t.prefix);if(r.type=o.type,e=o.key,"value"===r.type)if(o.root&&(s(!n||e[0]!==n,"Cannot specify relative path with root prefix"),r.ancestor="root",e||(e=null)),n&&n===e)e=null,r.ancestor=0;else if(void 0!==r.ancestor)s(!n||!e||e[0]!==n,"Cannot combine prefix with ancestor option");else{const[t,s]=l.ancestor(e,n);s&&""===(e=e.slice(s))&&(e=null),r.ancestor=t}return r.path=n?null===e?[]:e.split(n):[e],new l.Ref(r)},t.in=function(e,r={}){return t.create(e,Object.assign({},r,{in:!0}))},t.isRef=function(e){return!!e&&!!e[a.symbols.ref]},l.Ref=class{constructor(e){s("object"==typeof e,"Invalid reference construction"),a.assertOptions(e,["adjust","ancestor","in","iterables","map","path","separator","type","depth","key","root","display"]),s([!1,void 0].includes(e.separator)||"string"==typeof e.separator&&1===e.separator.length,"Invalid separator"),s(!e.adjust||"function"==typeof e.adjust,"options.adjust must be a function"),s(!e.map||Array.isArray(e.map),"options.map must be an array"),s(!e.map||!e.adjust,"Cannot set both map and adjust options"),Object.assign(this,l.defaults,e),s("value"===this.type||void 0===this.ancestor,"Non-value references cannot reference ancestors"),Array.isArray(this.map)&&(this.map=new Map(this.map)),this.depth=this.path.length,this.key=this.path.length?this.path.join(this.separator):null,this.root=this.path[0],this.updateDisplay()}resolve(e,t,r,n,o={}){return s(!this.in||o.in,"Invalid in() reference usage"),"global"===this.type?this._resolve(r.context,t,o):"local"===this.type?this._resolve(n,t,o):this.ancestor?"root"===this.ancestor?this._resolve(t.ancestors[t.ancestors.length-1],t,o):(s(this.ancestor<=t.ancestors.length,"Invalid reference exceeds the schema root:",this.display),this._resolve(t.ancestors[this.ancestor-1],t,o)):this._resolve(e,t,o)}_resolve(e,t,r){let s;if("value"===this.type&&t.mainstay.shadow&&!1!==r.shadow&&(s=t.mainstay.shadow.get(this.absolute(t))),void 0===s&&(s=o(e,this.path,{iterables:this.iterables,functions:!0})),this.adjust&&(s=this.adjust(s)),this.map){const e=this.map.get(s);void 0!==e&&(s=e)}return t.mainstay&&t.mainstay.tracer.resolve(t,this,s),s}toString(){return this.display}absolute(e){return[...e.path.slice(0,-this.ancestor),...this.path]}clone(){return new l.Ref(this)}describe(){const e={path:this.path};"value"!==this.type&&(e.type=this.type),"."!==this.separator&&(e.separator=this.separator),"value"===this.type&&1!==this.ancestor&&(e.ancestor=this.ancestor),this.map&&(e.map=[...this.map]);for(const t of["adjust","iterables"])null!==this[t]&&(e[t]=this[t]);return!1!==this.in&&(e.in=!0),{ref:e}}updateDisplay(){const e=null!==this.key?this.key:"";if("value"!==this.type)return void(this.display="ref:".concat(this.type,":").concat(e));if(!this.separator)return void(this.display="ref:".concat(e));if(!this.ancestor)return void(this.display="ref:".concat(this.separator).concat(e));if("root"===this.ancestor)return void(this.display="ref:root:".concat(e));if(1===this.ancestor)return void(this.display="ref:".concat(e||".."));const t=new Array(this.ancestor+1).fill(this.separator).join("");this.display="ref:".concat(t).concat(e||"")}},l.Ref.prototype[a.symbols.ref]=!0,t.build=function(e){return"value"===(e=Object.assign({},l.defaults,e)).type&&void 0===e.ancestor&&(e.ancestor=1),new l.Ref(e)},l.context=function(e,t,r={}){if(e=e.trim(),r){const s=void 0===r.global?"$":r.global;if(s!==t&&e.startsWith(s))return{key:e.slice(s.length),type:"global"};const n=void 0===r.local?"#":r.local;if(n!==t&&e.startsWith(n))return{key:e.slice(n.length),type:"local"};const o=void 0===r.root?"/":r.root;if(o!==t&&e.startsWith(o))return{key:e.slice(o.length),type:"value",root:!0}}return{key:e,type:"value"}},l.ancestor=function(e,t){if(!t)return[1,0];if(e[0]!==t)return[1,0];if(e[1]!==t)return[0,1];let r=2;for(;e[r]===t;)++r;return[r-1,r]},t.toSibling=0,t.toParent=1,t.Manager=class{constructor(){this.refs=[]}register(e,s){if(e)if(s=void 0===s?t.toParent:s,Array.isArray(e))for(const t of e)this.register(t,s);else if(a.isSchema(e))for(const t of e._refs.refs)t.ancestor-s>=0&&this.refs.push({ancestor:t.ancestor-s,root:t.root});else t.isRef(e)&&"value"===e.type&&e.ancestor-s>=0&&this.refs.push({ancestor:e.ancestor-s,root:e.root}),i=i||r(7),i.isTemplate(e)&&this.register(e.refs(),s)}get length(){return this.refs.length}clone(){const e=new t.Manager;return e.refs=n(this.refs),e}reset(){this.refs=[]}roots(){return this.refs.filter(e=>!e.ancestor).map(e=>e.root)}}},function(e,t,r){"use strict";const s=r(0),n={};e.exports=function(e,t,r){if(!1===t||null==t)return e;"string"==typeof(r=r||{})&&(r={separator:r});const o=Array.isArray(t);s(!o||!r.separator,"Separator option no valid for array-based chain");const a=o?t:t.split(r.separator||".");let i=e;for(let e=0;e<a.length;++e){let o=a[e];const l=r.iterables&&n.iterables(i);if(Array.isArray(i)||"set"===l){const e=Number(o);Number.isInteger(e)&&(o=e<0?i.length+e:e)}if(!i||"function"==typeof i&&!1===r.functions||!l&&void 0===i[o]){s(!r.strict||e+1===a.length,"Missing segment",o,"in reach path ",t),s("object"==typeof i||!0===r.functions||"function"!=typeof i,"Invalid segment",o,"in reach path ",t),i=r.default;break}i=l?"set"===l?[...i][o]:i.get(o):i[o]}return i},n.iterables=function(e){return e instanceof Set?"set":e instanceof Map?"map":void 0}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(30),a=r(31),i=r(1),l=r(4),c=r(5),u={symbol:Symbol("template"),opens:new Array(1e3).join("\0"),closes:new Array(1e3).join(""),dateFormat:{date:Date.prototype.toDateString,iso:Date.prototype.toISOString,string:Date.prototype.toString,time:Date.prototype.toTimeString,utc:Date.prototype.toUTCString}};e.exports=u.Template=class{constructor(e,t){s("string"==typeof e,"Template source must be a string"),s(!e.includes("\0")&&!e.includes(""),"Template source cannot contain reserved control characters"),this.source=e,this.rendered=e,this._template=null,this._settings=n(t),this._parse()}_parse(){if(!this.source.includes("{"))return;const e=u.encode(this.source),t=u.split(e);let r=!1;const s=[],n=t.shift();n&&s.push(n);for(const e of t){const t="{"!==e[0],n=t?"}":"}}",o=e.indexOf(n);if(-1===o||"{"===e[1]){s.push("{".concat(u.decode(e)));continue}const a=e.slice(t?0:1,o),i=this._ref(u.decode(a),t);s.push(i),"string"!=typeof i&&(r=!0);const l=e.slice(o+n.length);l&&s.push(u.decode(l))}r?this._template=s:this.rendered=s.join("")}static date(e,t){return u.dateFormat[t.dateFormat].call(e)}describe(e={}){if(!this._settings&&e.compact)return this.source;const t={template:this.source};return this._settings&&(t.options=this._settings),t}static build(e){return new u.Template(e.template,e.options)}isDynamic(){return!!this._template}static isTemplate(e){return!!e&&!!e[i.symbols.template]}refs(){if(!this._template)return;const e=[];for(const t of this._template)"string"!=typeof t&&e.push(...t.refs);return e}resolve(e,t,r,s){return this._template&&1===this._template.length?this._part(this._template[0],e,t,r,s,{}):this.render(e,t,r,s)}_part(e,...t){return e.ref?e.ref.resolve(...t):e.formula.evaluate(t)}render(e,t,r,s,n={}){if(!this.isDynamic())return this.rendered;const a=[];for(const i of this._template)if("string"==typeof i)a.push(i);else{const l=this._part(i,e,t,r,s,n),c=u.stringify(l,r,n.errors);if(void 0!==c){const e=i.raw||!1===(n.errors&&n.errors.escapeHtml)?c:o(c),t=i.ref&&"local"===i.ref.type&&"label"===i.ref.key&&r.errors.wrap.label;a.push(u.wrap(e,t))}}return a.join("")}_ref(e,t){const r=[],s=e=>{const t=c.create(e,this._settings);return r.push(t),e=>t.resolve(...e)};try{var n=new a.Parser(e,{reference:s,functions:u.functions,constants:u.constants})}catch(t){throw t.message='Invalid template variable "'.concat(e,'" fails due to: ').concat(t.message),t}return n.single?"reference"===n.single.type?{ref:r[0],raw:t,refs:r}:u.stringify(n.single.value):{formula:n,raw:t,refs:r}}toString(){return this.source}},u.Template.prototype[i.symbols.template]=!0,u.Template.prototype.isImmutable=!0,u.encode=function(e){return e.replace(/\\(\{+)/g,(e,t)=>u.opens.slice(0,t.length)).replace(/\\(\}+)/g,(e,t)=>u.closes.slice(0,t.length))},u.decode=function(e){return e.replace(/\u0000/g,"{").replace(/\u0001/g,"}")},u.split=function(e){const t=[];let r="";for(let s=0;s<e.length;++s){const n=e[s];if("{"===n){let n="";for(;s+1<e.length&&"{"===e[s+1];)n+="{",++s;t.push(r),r=n}else r+=n}return t.push(r),t},u.wrap=function(e,t){return t?1===t.length?"".concat(t).concat(e).concat(t):"".concat(t[0]).concat(e).concat(t[1]):e},u.stringify=function(e,t,r){const s=typeof e;if(null===e)return"null";if("string"===s)return e;if("number"===s||"function"===s||"symbol"===s)return e.toString();if("object"!==s)return JSON.stringify(e);if(e instanceof Date)return u.Template.date(e,t);if(e instanceof Map){const t=[];for(const[r,s]of e.entries())t.push("".concat(r.toString()," -> ").concat(s.toString()));e=t}if(!Array.isArray(e))return e.toString();let n="";for(const s of e)n=n+(n.length?", ":"")+u.stringify(s,t,r);return u.wrap(n,t.errors.wrap.array)},u.constants={true:!0,false:!1,null:null,second:1e3,minute:6e4,hour:36e5,day:864e5},u.functions={if:(e,t,r)=>e?t:r,msg(e){const[t,r,s,n,o]=this,a=o.messages;if(!a)return"";const i=l.template(t,a[0],e,r,s)||l.template(t,a[1],e,r,s);return i?i.render(t,r,s,n,o):""},number:e=>"number"==typeof e?e:"string"==typeof e?parseFloat(e):"boolean"==typeof e?e?1:0:e instanceof Date?e.getTime():null}},function(e,t,r){"use strict";const s=r(0),n=r(1),o=r(5),a={};t.schema=function(e,t,r={}){n.assertOptions(r,["appendPath","override"]);try{return a.schema(e,t,r)}catch(e){throw r.appendPath&&void 0!==e.path&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},a.schema=function(e,t,r){s(void 0!==t,"Invalid undefined schema"),Array.isArray(t)&&(s(t.length,"Invalid empty array schema"),1===t.length&&(t=t[0]));const o=(t,...s)=>!1!==r.override?t.valid(e.override,...s):t.valid(...s);if(a.simple(t))return o(e,t);if("function"==typeof t)return e.custom(t);if(s("object"==typeof t,"Invalid schema content:",typeof t),n.isResolvable(t))return o(e,t);if(n.isSchema(t))return t;if(Array.isArray(t)){for(const r of t)if(!a.simple(r))return e.alternatives().try(...t);return o(e,...t)}return t instanceof RegExp?e.string().regex(t):t instanceof Date?o(e.date(),t):(s(Object.getPrototypeOf(t)===Object.getPrototypeOf({}),"Schema can only contain plain objects"),e.object().keys(t))},t.ref=function(e,t){return o.isRef(e)?e:o.create(e,t)},t.compile=function(e,r,o={}){n.assertOptions(o,["legacy"]);const i=r&&r[n.symbols.any];if(i)return s(o.legacy||i.version===n.version,"Cannot mix different versions of joi schemas:",i.version,n.version),r;if("object"!=typeof r||!o.legacy)return t.schema(e,r,{appendPath:!0});const l=a.walk(r);return l?l.compile(l.root,r):t.schema(e,r,{appendPath:!0})},a.walk=function(e){if("object"!=typeof e)return null;if(Array.isArray(e)){for(const t of e){const e=a.walk(t);if(e)return e}return null}const t=e[n.symbols.any];if(t)return{root:e[t.root],compile:t.compile};s(Object.getPrototypeOf(e)===Object.getPrototypeOf({}),"Schema can only contain plain objects");for(const t in e){const r=a.walk(e[t]);if(r)return r}return null},a.simple=function(e){return null===e||["boolean","string","number"].includes(typeof e)},t.when=function(e,r,i){if(void 0===i&&(s(r&&"object"==typeof r,"Missing options"),i=r,r=o.create(".")),Array.isArray(i)&&(i={switch:i}),n.assertOptions(i,["is","not","then","otherwise","switch","break"]),n.isSchema(r))return s(void 0===i.is,'"is" can not be used with a schema condition'),s(void 0===i.not,'"not" can not be used with a schema condition'),s(void 0===i.switch,'"switch" can not be used with a schema condition'),a.condition(e,{is:r,then:i.then,otherwise:i.otherwise,break:i.break});if(s(o.isRef(r)||"string"==typeof r,"Invalid condition:",r),s(void 0===i.not||void 0===i.is,'Cannot combine "is" with "not"'),void 0===i.switch){let l=i;void 0!==i.not&&(l={is:i.not,then:i.otherwise,otherwise:i.then,break:i.break});let c=void 0!==l.is?e.$_compile(l.is):e.$_root.invalid(null,!1,0,"").required();return s(void 0!==l.then||void 0!==l.otherwise,'options must have at least one of "then", "otherwise", or "switch"'),s(void 0===l.break||void 0===l.then||void 0===l.otherwise,"Cannot specify then, otherwise, and break all together"),void 0===i.is||o.isRef(i.is)||n.isSchema(i.is)||(c=c.required()),a.condition(e,{ref:t.ref(r),is:c,then:l.then,otherwise:l.otherwise,break:l.break})}s(Array.isArray(i.switch),'"switch" must be an array'),s(void 0===i.is,'Cannot combine "switch" with "is"'),s(void 0===i.not,'Cannot combine "switch" with "not"'),s(void 0===i.then,'Cannot combine "switch" with "then"');const l={ref:t.ref(r),switch:[],break:i.break};for(let t=0;t<i.switch.length;++t){const r=i.switch[t],a=t===i.switch.length-1;n.assertOptions(r,a?["is","then","otherwise"]:["is","then"]),s(void 0!==r.is,'Switch statement missing "is"'),s(void 0!==r.then,'Switch statement missing "then"');const c={is:e.$_compile(r.is),then:e.$_compile(r.then)};if(o.isRef(r.is)||n.isSchema(r.is)||(c.is=c.is.required()),a){s(void 0===i.otherwise||void 0===r.otherwise,'Cannot specify "otherwise" inside and outside a "switch"');const t=void 0!==i.otherwise?i.otherwise:r.otherwise;void 0!==t&&(s(void 0===l.break,"Cannot specify both otherwise and break"),c.otherwise=e.$_compile(t))}l.switch.push(c)}return l},a.condition=function(e,t){for(const r of["then","otherwise"])void 0===t[r]?delete t[r]:t[r]=e.$_compile(t[r]);return t}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(7);t.compile=function(e,t){if("string"==typeof e)return s(!t,"Cannot set single message string"),new o(e);if(o.isTemplate(e))return s(!t,"Cannot set single message template"),e;s("object"==typeof e&&!Array.isArray(e),"Invalid message options"),t=t?n(t):{};for(let r in e){const n=e[r];if("root"===r||o.isTemplate(n)){t[r]=n;continue}if("string"==typeof n){t[r]=new o(n);continue}s("object"==typeof n&&!Array.isArray(n),"Invalid message for",r);const a=r;for(r in t[a]=t[a]||{},n){const e=n[r];"root"===r||o.isTemplate(e)?t[a][r]=e:(s("string"==typeof e,"Invalid message for",r,"in",a),t[a][r]=new o(e))}}return t},t.decompile=function(e){const t={};for(let r in e){const s=e[r];if("root"===r){t[r]=s;continue}if(o.isTemplate(s)){t[r]=s.describe({compact:!0});continue}const n=r;for(r in t[n]={},s){const e=s[r];"root"!==r?t[n][r]=e.describe({compact:!0}):t[n][r]=e}}return t},t.merge=function(e,r){if(!e)return t.compile(r);if(!r)return e;if("string"==typeof r)return new o(r);if(o.isTemplate(r))return r;const a=n(e);for(let e in r){const t=r[e];if("root"===e||o.isTemplate(t)){a[e]=t;continue}if("string"==typeof t){a[e]=new o(t);continue}s("object"==typeof t&&!Array.isArray(t),"Invalid message for",e);const n=e;for(e in a[n]=a[n]||{},t){const r=t[e];"root"===e||o.isTemplate(r)?a[n][e]=r:(s("string"==typeof r,"Invalid message for",e,"in",n),a[n][e]=new o(r))}}return a}},function(e,t,r){"use strict";const s=r(13),n={mismatched:null};e.exports=function(e,t,r){return r=Object.assign({prototype:!0},r),!!n.isDeepEqual(e,t,r,[])},n.isDeepEqual=function(e,t,r,o){if(e===t)return 0!==e||1/e==1/t;const a=typeof e;if(a!==typeof t)return!1;if(null===e||null===t)return!1;if("function"===a){if(!r.deepFunction||e.toString()!==t.toString())return!1}else if("object"!==a)return e!=e&&t!=t;const i=n.getSharedType(e,t,!!r.prototype);switch(i){case s.buffer:return!1;case s.promise:return e===t;case s.regex:return e.toString()===t.toString();case n.mismatched:return!1}for(let r=o.length-1;r>=0;--r)if(o[r].isSame(e,t))return!0;o.push(new n.SeenEntry(e,t));try{return!!n.isDeepEqualObj(i,e,t,r,o)}finally{o.pop()}},n.getSharedType=function(e,t,r){if(r)return Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?n.mismatched:s.getInternalProto(e);const o=s.getInternalProto(e);return o!==s.getInternalProto(t)?n.mismatched:o},n.valueOf=function(e){const t=e.valueOf;if(void 0===t)return e;try{return t.call(e)}catch(e){return e}},n.hasOwnEnumerableProperty=function(e,t){return Object.prototype.propertyIsEnumerable.call(e,t)},n.isSetSimpleEqual=function(e,t){for(const r of e)if(!t.has(r))return!1;return!0},n.isDeepEqualObj=function(e,t,r,o,a){const{isDeepEqual:i,valueOf:l,hasOwnEnumerableProperty:c}=n,{keys:u,getOwnPropertySymbols:f}=Object;if(e===s.array){if(!o.part){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!i(t[e],r[e],o,a))return!1;return!0}for(const e of t)for(const t of r)if(i(e,t,o,a))return!0}else if(e===s.set){if(t.size!==r.size)return!1;if(!n.isSetSimpleEqual(t,r)){const e=new Set(r);for(const r of t){if(e.delete(r))continue;let t=!1;for(const s of e)if(i(r,s,o,a)){e.delete(s),t=!0;break}if(!t)return!1}}}else if(e===s.map){if(t.size!==r.size)return!1;for(const[e,s]of t){if(void 0===s&&!r.has(e))return!1;if(!i(s,r.get(e),o,a))return!1}}else if(e===s.error&&(t.name!==r.name||t.message!==r.message))return!1;const m=l(t),h=l(r);if((t!==m||r!==h)&&!i(m,h,o,a))return!1;const d=u(t);if(!o.part&&d.length!==u(r).length&&!o.skip)return!1;let p=0;for(const e of d)if(o.skip&&o.skip.includes(e))void 0===r[e]&&++p;else{if(!c(r,e))return!1;if(!i(t[e],r[e],o,a))return!1}if(!o.part&&d.length-p!==u(r).length)return!1;if(!1!==o.symbols){const e=f(t),s=new Set(f(r));for(const n of e){if(!o.skip||!o.skip.includes(n))if(c(t,n)){if(!c(r,n))return!1;if(!i(t[n],r[n],o,a))return!1}else if(c(r,n))return!1;s.delete(n)}for(const e of s)if(c(r,e))return!1}return!0},n.SeenEntry=class{constructor(e,t){this.obj=e,this.ref=t}isSame(e,t){return this.obj===e&&this.ref===t}}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(15),a=r(1),i=r(8),l=r(4),c=r(17),u=r(18),f=r(5),m=r(7),h=r(19);let d;const p={types:{alternatives:r(33),any:r(3),array:r(39),boolean:r(40),date:r(41),function:r(42),link:r(45),number:r(46),object:r(47),string:r(48),symbol:r(52)},aliases:{alt:"alternatives",bool:"boolean",func:"function"}};p.root=function(){const e={_types:new Set(Object.keys(p.types))};for(const t of e._types)e[t]=function(...e){return s(!e.length||["alternatives","link","object"].includes(t),"The",t,"type does not allow arguments"),p.generate(this,p.types[t],e)};for(const t of["allow","custom","disallow","equal","exist","forbidden","invalid","not","only","optional","options","prefs","preferences","required","strip","valid","when"])e[t]=function(...e){return this.any()[t](...e)};Object.assign(e,p.methods);for(const t in p.aliases){const r=p.aliases[t];e[t]=e[r]}return e.x=e.expression,h.setup&&h.setup(e),e},p.methods={ValidationError:l.ValidationError,version:a.version,cache:o.provider,assert(e,t,...r){p.assert(e,t,!0,r)},attempt:(e,t,...r)=>p.assert(e,t,!1,r),build(e){return s("function"==typeof u.build,"Manifest functionality disabled"),u.build(this,e)},checkPreferences(e){a.checkPreferences(e)},compile(e,t){return i.compile(this,e,t)},defaults(e){s("function"==typeof e,"modifier must be a function");const t=Object.assign({},this);for(const r of t._types){const n=e(t[r]());s(a.isSchema(n),"modifier must return a valid schema object"),t[r]=function(...e){return p.generate(this,n,e)}}return t},expression:(...e)=>new m(...e),extend(...e){a.verifyFlat(e,"extend"),d=d||r(16),s(e.length,"You need to provide at least one extension"),this.assert(e,d.extensions);const t=Object.assign({},this);t._types=new Set(t._types);for(let r of e){"function"==typeof r&&(r=r(t)),this.assert(r,d.extension);const e=p.expandExtension(r,t);for(const r of e){s(void 0===t[r.type]||t._types.has(r.type),"Cannot override name",r.type);const e=r.base||this.any(),n=c.type(e,r);t._types.add(r.type),t[r.type]=function(...e){return p.generate(this,n,e)}}}return t},isError:l.ValidationError.isError,isExpression:m.isTemplate,isRef:f.isRef,isSchema:a.isSchema,in:(...e)=>f.in(...e),override:a.symbols.override,ref:(...e)=>f.create(...e),types(){const e={};for(const t of this._types)e[t]=this[t]();for(const t in p.aliases)e[t]=this[t]();return e}},p.assert=function(e,t,r,s){const o=s[0]instanceof Error||"string"==typeof s[0]?s[0]:null,i=o?s[1]:s[0],c=t.validate(e,a.preferences({errors:{stack:!0}},i||{}));let u=c.error;if(!u)return c.value;if(o instanceof Error)throw o;const f=r&&"function"==typeof u.annotate?u.annotate():u.message;throw u instanceof l.ValidationError==!1&&(u=n(u)),u.message=o?"".concat(o," ").concat(f):f,u},p.generate=function(e,t,r){return s(e,"Must be invoked on a Joi instance."),t.$_root=e,t._definition.args&&r.length?t._definition.args(t,...r):t},p.expandExtension=function(e,t){if("string"==typeof e.type)return[e];const r=[];for(const s of t._types)if(e.type.test(s)){const n=Object.assign({},e);n.type=s,n.base=t[s](),r.push(n)}return r},e.exports=p.root()},function(e,t,r){"use strict";const s=r(28);e.exports=class extends Error{constructor(e){super(e.filter(e=>""!==e).map(e=>"string"==typeof e?e:e instanceof Error?e.message:s(e)).join(" ")||"Unknown error"),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t.assert)}}},function(e,t,r){"use strict";const s={};t=e.exports={array:Array.prototype,buffer:!1,date:Date.prototype,error:Error.prototype,generic:Object.prototype,map:Map.prototype,promise:Promise.prototype,regex:RegExp.prototype,set:Set.prototype,weakMap:WeakMap.prototype,weakSet:WeakSet.prototype},s.typeMap=new Map([["[object Error]",t.error],["[object Map]",t.map],["[object Promise]",t.promise],["[object Set]",t.set],["[object WeakMap]",t.weakMap],["[object WeakSet]",t.weakSet]]),t.getInternalProto=function(e){if(Array.isArray(e))return t.array;if(e instanceof Date)return t.date;if(e instanceof RegExp)return t.regex;if(e instanceof Error)return t.error;const r=Object.prototype.toString.call(e);return s.typeMap.get(r)||t.generic}},function(e,t,r){"use strict";t.keys=function(e,t={}){return!1!==t.symbols?Reflect.ownKeys(e):Object.getOwnPropertyNames(e)}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(1),a={max:1e3,supported:new Set(["undefined","boolean","number","string"])};t.provider={provision:e=>new a.Cache(e)},a.Cache=class{constructor(e={}){o.assertOptions(e,["max"]),s(void 0===e.max||e.max&&e.max>0&&isFinite(e.max),"Invalid max cache size"),this._max=e.max||a.max,this._map=new Map,this._list=new a.List}get length(){return this._map.size}set(e,t){if(null!==e&&!a.supported.has(typeof e))return;let r=this._map.get(e);if(r)return r.value=t,void this._list.first(r);r=this._list.unshift({key:e,value:t}),this._map.set(e,r),this._compact()}get(e){const t=this._map.get(e);if(t)return this._list.first(t),n(t.value)}_compact(){if(this._map.size>this._max){const e=this._list.pop();this._map.delete(e.key)}}},a.List=class{constructor(){this.tail=null,this.head=null}unshift(e){return e.next=null,e.prev=this.head,this.head&&(this.head.next=e),this.head=e,this.tail||(this.tail=e),e}first(e){e!==this.head&&(this._remove(e),this.unshift(e))}pop(){return this._remove(this.tail)}_remove(e){const{next:t,prev:r}=e;return t.prev=r,r&&(r.next=t),e===this.tail&&(this.tail=t),e.prev=null,e.next=null,e}}},function(e,t,r){"use strict";const s=r(11),n={};n.wrap=s.string().min(1).max(2).allow(!1),t.preferences=s.object({allowUnknown:s.boolean(),abortEarly:s.boolean(),cache:s.boolean(),context:s.object(),convert:s.boolean(),dateFormat:s.valid("date","iso","string","time","utc"),debug:s.boolean(),errors:{escapeHtml:s.boolean(),label:s.valid("path","key",!1),language:[s.string(),s.object().ref()],render:s.boolean(),stack:s.boolean(),wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:s.object(),noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:s.valid("required","optional","forbidden"),skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()}).strict(),n.nameRx=/^[a-zA-Z0-9]\w*$/,n.rule=s.object({alias:s.array().items(s.string().pattern(n.nameRx)).single(),args:s.array().items(s.string(),s.object({name:s.string().pattern(n.nameRx).required(),ref:s.boolean(),assert:s.alternatives([s.function(),s.object().schema()]).conditional("ref",{is:!0,then:s.required()}),normalize:s.function(),message:s.string().when("assert",{is:s.function(),then:s.required()})})),convert:s.boolean(),manifest:s.boolean(),method:s.function().allow(!1),multi:s.boolean(),validate:s.function()}),t.extension=s.object({type:s.alternatives([s.string(),s.object().regex()]).required(),args:s.function(),base:s.object().schema().when("type",{is:s.object().regex(),then:s.forbidden()}),coerce:[s.function().maxArity(3),s.object({method:s.function().maxArity(3).required(),from:s.array().items(s.string()).single()})],flags:s.object().pattern(n.nameRx,s.object({setter:s.string(),default:s.any()})),manifest:{build:s.function().arity(2)},messages:[s.object(),s.string()],modifiers:s.object().pattern(n.nameRx,s.function().minArity(1).maxArity(2)),overrides:s.object().pattern(n.nameRx,s.function()),prepare:s.function().maxArity(3),rebuild:s.function().arity(1),rules:s.object().pattern(n.nameRx,n.rule),terms:s.object().pattern(n.nameRx,s.object({init:s.array().allow(null).required(),manifest:s.object().pattern(/.+/,[s.valid("schema","single"),s.object({mapped:s.object({from:s.string().required(),to:s.string().required()}).required()})])})),validate:s.function().maxArity(3)}).strict(),t.extensions=s.array().items(s.object(),s.function().arity(1)).strict(),n.desc={buffer:s.object({buffer:s.string()}),func:s.object({function:s.function().required(),options:{literal:!0}}),override:s.object({override:!0}),ref:s.object({ref:s.object({type:s.valid("value","global","local"),path:s.array().required(),separator:s.string().length(1).allow(!1),ancestor:s.number().min(0).integer().allow("root"),map:s.array().items(s.array().length(2)).min(1),adjust:s.function(),iterables:s.boolean(),in:s.boolean()}).required()}),regex:s.object({regex:s.string().min(3)}),special:s.object({special:s.valid("deep").required()}),template:s.object({template:s.string().required(),options:s.object()}),value:s.object({value:s.alternatives([s.object(),s.array()]).required()})},n.desc.entity=s.alternatives([s.array().items(s.link("...")),s.boolean(),s.function(),s.number(),s.string(),n.desc.buffer,n.desc.func,n.desc.ref,n.desc.regex,n.desc.special,n.desc.template,n.desc.value,s.link("/")]),n.desc.values=s.array().items(null,s.boolean(),s.function(),s.number().allow(1/0,-1/0),s.string().allow(""),s.symbol(),n.desc.buffer,n.desc.func,n.desc.override,n.desc.ref,n.desc.regex,n.desc.template,n.desc.value),n.desc.messages=s.object().pattern(/.+/,[s.string(),n.desc.template,s.object().pattern(/.+/,[s.string(),n.desc.template])]),t.description=s.object({type:s.string().required(),flags:s.object({cast:s.string(),default:s.any(),description:s.string(),empty:s.link("/"),failover:n.desc.entity,id:s.string(),label:s.string(),only:!0,presence:["optional","required","forbidden"],result:["raw","strip"],strip:s.boolean(),unit:s.string()}).unknown(),preferences:{allowUnknown:s.boolean(),abortEarly:s.boolean(),cache:s.boolean(),convert:s.boolean(),dateFormat:["date","iso","string","time","utc"],errors:{escapeHtml:s.boolean(),label:["path","key"],language:[s.string(),n.desc.ref],wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:n.desc.messages,noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:["required","optional","forbidden"],skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()},allow:n.desc.values,invalid:n.desc.values,rules:s.array().min(1).items({name:s.string().required(),args:s.object().min(1),keep:s.boolean(),message:[s.string(),n.desc.messages],warn:s.boolean()}),keys:s.object().pattern(/.*/,s.link("/")),link:n.desc.ref}).pattern(/^[a-z]\w*$/,s.any())},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(1),a=r(9),i={};t.type=function(e,t){const r=Object.getPrototypeOf(e),l=n(r),c=e._assign(Object.create(l)),u=Object.assign({},t);delete u.base,l._definition=u;const f=r._definition||{};u.messages=a.merge(f.messages,u.messages),u.properties=Object.assign({},f.properties,u.properties),c.type=u.type,u.flags=Object.assign({},f.flags,u.flags);const m=Object.assign({},f.terms);if(u.terms)for(const e in u.terms){const t=u.terms[e];s(void 0===c.$_terms[e],"Invalid term override for",u.type,e),c.$_terms[e]=t.init,m[e]=t}u.terms=m,u.args||(u.args=f.args),u.prepare=i.prepare(u.prepare,f.prepare),u.coerce&&("function"==typeof u.coerce&&(u.coerce={method:u.coerce}),u.coerce.from&&!Array.isArray(u.coerce.from)&&(u.coerce={method:u.coerce.method,from:[].concat(u.coerce.from)})),u.coerce=i.coerce(u.coerce,f.coerce),u.validate=i.validate(u.validate,f.validate);const h=Object.assign({},f.rules);if(u.rules)for(const e in u.rules){const t=u.rules[e];s("object"==typeof t,"Invalid rule definition for",u.type,e);let r=t.method;if(void 0===r&&(r=function(){return this.$_addRule(e)}),r&&(s(!l[e],"Rule conflict in",u.type,e),l[e]=r),s(!h[e],"Rule conflict in",u.type,e),h[e]=t,t.alias){const e=[].concat(t.alias);for(const r of e)l[r]=t.method}t.args&&(t.argsByName=new Map,t.args=t.args.map(e=>("string"==typeof e&&(e={name:e}),s(!t.argsByName.has(e.name),"Duplicated argument name",e.name),o.isSchema(e.assert)&&(e.assert=e.assert.strict().label(e.name)),t.argsByName.set(e.name,e),e)))}u.rules=h;const d=Object.assign({},f.modifiers);if(u.modifiers)for(const e in u.modifiers){s(!l[e],"Rule conflict in",u.type,e);const t=u.modifiers[e];s("function"==typeof t,"Invalid modifier definition for",u.type,e);const r=function(t){return this.rule({[e]:t})};l[e]=r,d[e]=t}if(u.modifiers=d,u.overrides){l._super=r,c.$_super={};for(const e in u.overrides)s(r[e],"Cannot override missing",e),c.$_super[e]=r[e].bind(c);Object.assign(l,u.overrides)}u.cast=Object.assign({},f.cast,u.cast);const p=Object.assign({},f.manifest,u.manifest);return p.build=i.build(u.manifest&&u.manifest.build,f.manifest&&f.manifest.build),u.manifest=p,u.rebuild=i.rebuild(u.rebuild,f.rebuild),c},i.build=function(e,t){return e&&t?function(r,s){return t(e(r,s),s)}:e||t},i.coerce=function(e,t){return e&&t?{from:e.from&&t.from?[...new Set([...e.from,...t.from])]:null,method(r,s){let n;if((!t.from||t.from.includes(typeof r))&&(n=t.method(r,s),n)){if(n.errors||void 0===n.value)return n;r=n.value}if(!e.from||e.from.includes(typeof r)){const t=e.method(r,s);if(t)return t}return n}}:e||t},i.prepare=function(e,t){return e&&t?function(r,s){const n=e(r,s);if(n){if(n.errors||void 0===n.value)return n;r=n.value}return t(r,s)||n}:e||t},i.rebuild=function(e,t){return e&&t?function(r){t(r),e(r)}:e||t},i.validate=function(e,t){return e&&t?function(r,s){const n=t(r,s);if(n){if(n.errors&&(!Array.isArray(n.errors)||n.errors.length))return n;r=n.value}return e(r,s)||n}:e||t}},function(e,t){},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(14),a={};e.exports=a.merge=function(e,t,r){if(s(e&&"object"==typeof e,"Invalid target value: must be an object"),s(null==t||"object"==typeof t,"Invalid source value: must be null, undefined, or an object"),!t)return e;if(r=Object.assign({nullOverride:!0,mergeArrays:!0},r),Array.isArray(t)){s(Array.isArray(e),"Cannot merge array onto an object"),r.mergeArrays||(e.length=0);for(let s=0;s<t.length;++s)e.push(n(t[s],{symbols:r.symbols}));return e}const i=o.keys(t,r);for(let s=0;s<i.length;++s){const o=i[s];if("__proto__"===o||!Object.prototype.propertyIsEnumerable.call(t,o))continue;const l=t[o];if(l&&"object"==typeof l){if(e[o]===l)continue;!e[o]||"object"!=typeof e[o]||Array.isArray(e[o])!==Array.isArray(l)||l instanceof Date||l instanceof RegExp?e[o]=n(l,{symbols:r.symbols}):a.merge(e[o],l,r)}else null!=l?e[o]=l:r.nullOverride&&(e[o]=l)}return e}},function(e,t,r){"use strict";const s=r(0),n=r(10),o=r(1),a={};e.exports=a.Values=class{constructor(e,t){this._values=new Set(e),this._refs=new Set(t),this._lowercase=a.lowercases(e),this._override=!1}get length(){return this._values.size+this._refs.size}add(e,t){o.isResolvable(e)?this._refs.has(e)||(this._refs.add(e),t&&t.register(e)):this.has(e,null,null,!1)||(this._values.add(e),"string"==typeof e&&this._lowercase.set(e.toLowerCase(),e))}static merge(e,t,r){if(e=e||new a.Values,t){if(t._override)return t.clone();for(const r of[...t._values,...t._refs])e.add(r)}if(r)for(const t of[...r._values,...r._refs])e.remove(t);return e.length?e:null}remove(e){o.isResolvable(e)?this._refs.delete(e):(this._values.delete(e),"string"==typeof e&&this._lowercase.delete(e.toLowerCase()))}has(e,t,r,s){return!!this.get(e,t,r,s)}get(e,t,r,s){if(!this.length)return!1;if(this._values.has(e))return{value:e};if("string"==typeof e&&e&&s){const t=this._lowercase.get(e.toLowerCase());if(t)return{value:t}}if(!this._refs.size&&"object"!=typeof e)return!1;if("object"==typeof e)for(const t of this._values)if(n(t,e))return{value:t};if(t)for(const o of this._refs){const a=o.resolve(e,t,r,null,{in:!0});if(void 0===a)continue;const i=o.in&&"object"==typeof a?Array.isArray(a)?a:Object.keys(a):[a];for(const t of i)if(typeof t==typeof e)if(s&&e&&"string"==typeof e){if(t.toLowerCase()===e.toLowerCase())return{value:t,ref:o}}else if(n(t,e))return{value:t,ref:o}}return!1}override(){this._override=!0}values(e){if(e&&e.display){const e=[];for(const t of[...this._values,...this._refs])void 0!==t&&e.push(t);return e}return Array.from([...this._values,...this._refs])}clone(){const e=new a.Values(this._values,this._refs);return e._override=this._override,e}concat(e){s(!e._override,"Cannot concat override set of values");const t=new a.Values([...this._values,...e._values],[...this._refs,...e._refs]);return t._override=this._override,t}describe(){const e=[];this._override&&e.push({override:!0});for(const t of this._values.values())e.push(t&&"object"==typeof t?{value:t}:t);for(const t of this._refs.values())e.push(t.describe());return e}},a.Values.prototype[o.symbols.values]=!0,a.Values.prototype.slice=a.Values.prototype.clone,a.lowercases=function(e){const t=new Map;if(e)for(const r of e)"string"==typeof r&&t.set(r.toLowerCase(),r);return t}},function(e,t,r){"use strict";const s=r(43),n=r(0),o=r(2),a=r(44),i=r(3),l=r(1),c=r(8),u=r(4),f=r(5),m=r(7),h={renameDefaults:{alias:!1,multiple:!1,override:!1}};e.exports=i.extend({type:"_keys",properties:{typeof:"object"},flags:{unknown:{default:!1}},terms:{dependencies:{init:null},keys:{init:null,manifest:{mapped:{from:"schema",to:"key"}}},patterns:{init:null},renames:{init:null}},args:(e,t)=>e.keys(t),validate(e,{schema:t,error:r,state:s,prefs:n}){if(!e||typeof e!==t.$_property("typeof")||Array.isArray(e))return{value:e,errors:r("object.base",{type:t.$_property("typeof")})};if(!(t.$_terms.renames||t.$_terms.dependencies||t.$_terms.keys||t.$_terms.patterns||t.$_terms.externals))return;e=h.clone(e,n);const o=[];if(t.$_terms.renames&&!h.rename(t,e,s,n,o))return{value:e,errors:o};if(!t.$_terms.keys&&!t.$_terms.patterns&&!t.$_terms.dependencies)return{value:e,errors:o};const a=new Set(Object.keys(e));if(t.$_terms.keys){const r=[e,...s.ancestors];for(const i of t.$_terms.keys){const t=i.key,l=e[t];a.delete(t);const c=s.localize([...s.path,t],r,i),u=i.schema.$_validate(l,c,n);if(u.errors){if(n.abortEarly)return{value:e,errors:u.errors};o.push(...u.errors)}else"strip"===i.schema._flags.result||void 0===u.value&&void 0!==l?delete e[t]:void 0!==u.value&&(e[t]=u.value)}}if(a.size||t._flags._hasPatternMatch){const r=h.unknown(t,e,a,o,s,n);if(r)return r}if(t.$_terms.dependencies)for(const r of t.$_terms.dependencies){if(r.key&&void 0===r.key.resolve(e,s,n,null,{shadow:!1}))continue;const a=h.dependencies[r.rel](t,r,e,s,n);if(a){const r=t.$_createError(a.code,e,a.context,s,n);if(n.abortEarly)return{value:e,errors:r};o.push(r)}}return{value:e,errors:o}},rules:{and:{method(...e){return l.verifyFlat(e,"and"),h.dependency(this,"and",null,e)}},append:{method(e){return null==e||0===Object.keys(e).length?this:this.keys(e)}},assert:{method(e,t,r){m.isTemplate(e)||(e=c.ref(e)),n(void 0===r||"string"==typeof r,"Message must be a string"),t=this.$_compile(t,{appendPath:!0});const s=this.$_addRule({name:"assert",args:{subject:e,schema:t,message:r}});return s.$_mutateRegister(e),s.$_mutateRegister(t),s},validate(e,{error:t,prefs:r,state:s},{subject:n,schema:o,message:a}){const i=n.resolve(e,s,r),l=f.isRef(n)?n.absolute(s):[];return o.$_match(i,s.localize(l,[e,...s.ancestors],o),r)?e:t("object.assert",{subject:n,message:a})},args:["subject","schema","message"],multi:!0},instance:{method(e,t){return n("function"==typeof e,"constructor must be a function"),t=t||e.name,this.$_addRule({name:"instance",args:{constructor:e,name:t}})},validate:(e,t,{constructor:r,name:s})=>e instanceof r?e:t.error("object.instance",{type:s,value:e}),args:["constructor","name"]},keys:{method(e){n(void 0===e||"object"==typeof e,"Object schema must be a valid object"),n(!l.isSchema(e),"Object schema cannot be a joi schema");const t=this.clone();if(e)if(Object.keys(e).length){t.$_terms.keys=t.$_terms.keys?t.$_terms.keys.filter(t=>!e.hasOwnProperty(t.key)):new h.Keys;for(const r in e)l.tryWithPath(()=>t.$_terms.keys.push({key:r,schema:this.$_compile(e[r])}),r)}else t.$_terms.keys=new h.Keys;else t.$_terms.keys=null;return t.$_mutateRebuild()}},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:o})=>l.compare(Object.keys(e).length,r,n)?e:t.error("object."+s,{limit:o.limit,value:e}),args:[{name:"limit",ref:!0,assert:l.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},nand:{method(...e){return l.verifyFlat(e,"nand"),h.dependency(this,"nand",null,e)}},or:{method(...e){return l.verifyFlat(e,"or"),h.dependency(this,"or",null,e)}},oxor:{method(...e){return h.dependency(this,"oxor",null,e)}},pattern:{method(e,t,r={}){const s=e instanceof RegExp;s||(e=this.$_compile(e,{appendPath:!0})),n(void 0!==t,"Invalid rule"),l.assertOptions(r,["fallthrough","matches"]),s&&n(!e.flags.includes("g")&&!e.flags.includes("y"),"pattern should not use global or sticky mode"),t=this.$_compile(t,{appendPath:!0});const o=this.clone();o.$_terms.patterns=o.$_terms.patterns||[];const a={[s?"regex":"schema"]:e,rule:t};return r.matches&&(a.matches=this.$_compile(r.matches),"array"!==a.matches.type&&(a.matches=a.matches.$_root.array().items(a.matches)),o.$_mutateRegister(a.matches),o.$_setFlag("_hasPatternMatch",!0,{clone:!1})),r.fallthrough&&(a.fallthrough=!0),o.$_terms.patterns.push(a),o.$_mutateRegister(t),o}},ref:{method(){return this.$_addRule("ref")},validate:(e,t)=>f.isRef(e)?e:t.error("object.refType",{value:e})},regex:{method(){return this.$_addRule("regex")},validate:(e,t)=>e instanceof RegExp?e:t.error("object.regex",{value:e})},rename:{method(e,t,r={}){n("string"==typeof e||e instanceof RegExp,"Rename missing the from argument"),n("string"==typeof t||t instanceof m,"Invalid rename to argument"),n(t!==e,"Cannot rename key to same name:",e),l.assertOptions(r,["alias","ignoreUndefined","override","multiple"]);const o=this.clone();o.$_terms.renames=o.$_terms.renames||[];for(const t of o.$_terms.renames)n(t.from!==e,"Cannot rename the same key multiple times");return t instanceof m&&o.$_mutateRegister(t),o.$_terms.renames.push({from:e,to:t,options:s(h.renameDefaults,r)}),o}},schema:{method(e="any"){return this.$_addRule({name:"schema",args:{type:e}})},validate:(e,t,{type:r})=>!l.isSchema(e)||"any"!==r&&e.type!==r?t.error("object.schema",{type:r}):e},unknown:{method(e){return this.$_setFlag("unknown",!1!==e)}},with:{method(e,t,r={}){return h.dependency(this,"with",e,t,r)}},without:{method(e,t,r={}){return h.dependency(this,"without",e,t,r)}},xor:{method(...e){return l.verifyFlat(e,"xor"),h.dependency(this,"xor",null,e)}}},overrides:{default(e,t){return void 0===e&&(e=l.symbols.deepDefault),this.$_super.default(e,t)}},rebuild(e){if(e.$_terms.keys){const t=new a.Sorter;for(const r of e.$_terms.keys)l.tryWithPath(()=>t.add(r,{after:r.schema.$_rootReferences(),group:r.key}),r.key);e.$_terms.keys=new h.Keys(...t.nodes)}},manifest:{build(e,t){if(t.keys&&(e=e.keys(t.keys)),t.dependencies)for(const{rel:r,key:s=null,peers:n,options:o}of t.dependencies)e=h.dependency(e,r,s,n,o);if(t.patterns)for(const{regex:r,schema:s,rule:n,fallthrough:o,matches:a}of t.patterns)e=e.pattern(r||s,n,{fallthrough:o,matches:a});if(t.renames)for(const{from:r,to:s,options:n}of t.renames)e=e.rename(r,s,n);return e}},messages:{"object.and":"{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}","object.assert":'{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',"object.base":"{{#label}} must be of type {{#type}}","object.instance":'{{#label}} must be an instance of "{{#type}}"',"object.length":'{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',"object.max":'{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',"object.min":'{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',"object.missing":"{{#label}} must contain at least one of {{#peersWithLabels}}","object.nand":'"{{#mainWithLabel}}" must not exist simultaneously with {{#peersWithLabels}}',"object.oxor":"{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}","object.pattern.match":"{{#label}} keys failed to match pattern requirements","object.refType":"{{#label}} must be a Joi reference","object.regex":"{{#label}} must be a RegExp object","object.rename.multiple":'{{#label}} cannot rename "{{#from}}" because multiple renames are disabled and another key was already renamed to "{{#to}}"',"object.rename.override":'{{#label}} cannot rename "{{#from}}" because override is disabled and target "{{#to}}" exists',"object.schema":"{{#label}} must be a Joi schema of {{#type}} type","object.unknown":"{{#label}} is not allowed","object.with":'"{{#mainWithLabel}}" missing required peer "{{#peerWithLabel}}"',"object.without":'"{{#mainWithLabel}}" conflict with forbidden peer "{{#peerWithLabel}}"',"object.xor":"{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}"}}),h.clone=function(e,t){if("object"==typeof e){if(t.nonEnumerables)return o(e,{shallow:!0});const r=Object.create(Object.getPrototypeOf(e));return Object.assign(r,e),r}const r=function(...t){return e.apply(this,t)};return r.prototype=o(e.prototype),Object.defineProperty(r,"name",{value:e.name,writable:!1}),Object.defineProperty(r,"length",{value:e.length,writable:!1}),Object.assign(r,e),r},h.dependency=function(e,t,r,s,o){n(null===r||"string"==typeof r,t,"key must be a strings"),o||(o=s.length>1&&"object"==typeof s[s.length-1]?s.pop():{}),l.assertOptions(o,["separator"]),s=[].concat(s);const a=l.default(o.separator,"."),i=[];for(const e of s)n("string"==typeof e,t,"peers must be a string or a reference"),i.push(c.ref(e,{separator:a,ancestor:0,prefix:!1}));null!==r&&(r=c.ref(r,{separator:a,ancestor:0,prefix:!1}));const u=e.clone();return u.$_terms.dependencies=u.$_terms.dependencies||[],u.$_terms.dependencies.push(new h.Dependency(t,r,i,s)),u},h.dependencies={and(e,t,r,s,n){const o=[],a=[],i=t.peers.length;for(const e of t.peers)void 0===e.resolve(r,s,n,null,{shadow:!1})?o.push(e.key):a.push(e.key);if(o.length!==i&&a.length!==i)return{code:"object.and",context:{present:a,presentWithLabels:h.keysToLabels(e,a),missing:o,missingWithLabels:h.keysToLabels(e,o)}}},nand(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(o.length!==t.peers.length)return;const a=t.paths[0],i=t.paths.slice(1);return{code:"object.nand",context:{main:a,mainWithLabel:h.keysToLabels(e,a),peers:i,peersWithLabels:h.keysToLabels(e,i)}}},or(e,t,r,s,n){for(const e of t.peers)if(void 0!==e.resolve(r,s,n,null,{shadow:!1}))return;return{code:"object.missing",context:{peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)}}},oxor(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(!o.length||1===o.length)return;const a={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return a.present=o,a.presentWithLabels=h.keysToLabels(e,o),{code:"object.oxor",context:a}},with(e,t,r,s,n){for(const o of t.peers)if(void 0===o.resolve(r,s,n,null,{shadow:!1}))return{code:"object.with",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:o.key,peerWithLabel:h.keysToLabels(e,o.key)}}},without(e,t,r,s,n){for(const o of t.peers)if(void 0!==o.resolve(r,s,n,null,{shadow:!1}))return{code:"object.without",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:o.key,peerWithLabel:h.keysToLabels(e,o.key)}}},xor(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(1===o.length)return;const a={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return 0===o.length?{code:"object.missing",context:a}:(a.present=o,a.presentWithLabels=h.keysToLabels(e,o),{code:"object.xor",context:a})}},h.keysToLabels=function(e,t){return Array.isArray(t)?t.map(t=>e.$_mapLabels(t)):e.$_mapLabels(t)},h.rename=function(e,t,r,s,n){const o={};for(const a of e.$_terms.renames){const i=[],l="string"!=typeof a.from;if(l)for(const e in t){if(void 0===t[e]&&a.options.ignoreUndefined)continue;if(e===a.to)continue;const r=a.from.exec(e);r&&i.push({from:e,to:a.to,match:r})}else!Object.prototype.hasOwnProperty.call(t,a.from)||void 0===t[a.from]&&a.options.ignoreUndefined||i.push(a);for(const c of i){const i=c.from;let u=c.to;if(u instanceof m&&(u=u.render(t,r,s,c.match)),i!==u){if(!a.options.multiple&&o[u]&&(n.push(e.$_createError("object.rename.multiple",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return!1;if(Object.prototype.hasOwnProperty.call(t,u)&&!a.options.override&&!o[u]&&(n.push(e.$_createError("object.rename.override",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return!1;void 0===t[i]?delete t[u]:t[u]=t[i],o[u]=!0,a.options.alias||delete t[i]}}}return!0},h.unknown=function(e,t,r,s,n,o){if(e.$_terms.patterns){let a=!1;const i=e.$_terms.patterns.map(e=>{if(e.matches)return a=!0,[]}),l=[t,...n.ancestors];for(const a of r){const c=t[a],u=[...n.path,a];for(let f=0;f<e.$_terms.patterns.length;++f){const m=e.$_terms.patterns[f];if(m.regex){const e=m.regex.test(a);if(n.mainstay.tracer.debug(n,"rule","pattern.".concat(f),e?"pass":"error"),!e)continue}else if(!m.schema.$_match(a,n.nest(m.schema,"pattern.".concat(f)),o))continue;r.delete(a);const h=n.localize(u,l,{schema:m.rule,key:a}),d=m.rule.$_validate(c,h,o);if(d.errors){if(o.abortEarly)return{value:t,errors:d.errors};s.push(...d.errors)}if(m.matches&&i[f].push(a),t[a]=d.value,!m.fallthrough)break}}if(a)for(let r=0;r<i.length;++r){const a=i[r];if(!a)continue;const c=e.$_terms.patterns[r].matches,f=n.localize(n.path,l,c),m=c.$_validate(a,f,o);if(m.errors){const r=u.details(m.errors,{override:!1});r.matches=a;const i=e.$_createError("object.pattern.match",t,r,n,o);if(o.abortEarly)return{value:t,errors:i};s.push(i)}}}if(!r.size||!e.$_terms.keys&&!e.$_terms.patterns)return;if(o.stripUnknown&&!e._flags.unknown||o.skipFunctions){const e=!!o.stripUnknown&&(!0===o.stripUnknown||!!o.stripUnknown.objects);for(const s of r)e?(delete t[s],r.delete(s)):"function"==typeof t[s]&&r.delete(s)}if(!l.default(e._flags.unknown,o.allowUnknown))for(const a of r){const r=n.localize([...n.path,a],[]),i=e.$_createError("object.unknown",t[a],{child:a},r,o,{flags:!1});if(o.abortEarly)return{value:t,errors:i};s.push(i)}},h.Dependency=class{constructor(e,t,r,s){this.rel=e,this.key=t,this.peers=r,this.paths=s}describe(){const e={rel:this.rel,peers:this.paths};return null!==this.key&&(e.key=this.key.key),"."!==this.peers[0].separator&&(e.options={separator:this.peers[0].separator}),e}},h.Keys=class extends Array{concat(e){const t=this.slice(),r=new Map;for(let e=0;e<t.length;++e)r.set(t[e].key,e);for(const s of e){const e=s.key,n=r.get(e);void 0!==n?t[n]={key:e,schema:t[n].schema.concat(s.schema)}:t.push(s)}return t}}},function(e,t,r){"use strict";const s=r(24),n=r(25),o={minDomainSegments:2,nonAsciiRx:/[^\x00-\x7f]/,domainControlRx:/[\x00-\x20@\:\/]/,tldSegmentRx:/^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,domainSegmentRx:/^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,URL:s.URL||URL};t.analyze=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: domain must be a string");if(!e)return n.code("DOMAIN_NON_EMPTY_STRING");if(e.length>256)return n.code("DOMAIN_TOO_LONG");if(!!o.nonAsciiRx.test(e)){if(!1===t.allowUnicode)return n.code("DOMAIN_INVALID_UNICODE_CHARS");e=e.normalize("NFC")}if(o.domainControlRx.test(e))return n.code("DOMAIN_INVALID_CHARS");e=o.punycode(e);const r=t.minDomainSegments||o.minDomainSegments,s=e.split(".");if(s.length<r)return n.code("DOMAIN_SEGMENTS_COUNT");const a=t.tlds;if(a){const e=s[s.length-1].toLowerCase();if(a.deny&&a.deny.has(e)||a.allow&&!a.allow.has(e))return n.code("DOMAIN_FORBIDDEN_TLDS")}for(let e=0;e<s.length;++e){const t=s[e];if(!t.length)return n.code("DOMAIN_EMPTY_SEGMENT");if(t.length>63)return n.code("DOMAIN_LONG_SEGMENT");if(e<s.length-1){if(!o.domainSegmentRx.test(t))return n.code("DOMAIN_INVALID_CHARS")}else if(!o.tldSegmentRx.test(t))return n.code("DOMAIN_INVALID_TLDS_CHARS")}return null},t.isValid=function(e,r){return!t.analyze(e,r)},o.punycode=function(e){try{return new o.URL("http://".concat(e)).host}catch(t){return e}}},function(e,t){},function(e,t,r){"use strict";t.codes={EMPTY_STRING:"Address must be a non-empty string",FORBIDDEN_UNICODE:"Address contains forbidden Unicode characters",MULTIPLE_AT_CHAR:"Address cannot contain more than one @ character",MISSING_AT_CHAR:"Address must contain one @ character",EMPTY_LOCAL:"Address local part cannot be empty",ADDRESS_TOO_LONG:"Address too long",LOCAL_TOO_LONG:"Address local part too long",EMPTY_LOCAL_SEGMENT:"Address local part contains empty dot-separated segment",INVALID_LOCAL_CHARS:"Address local part contains invalid character",DOMAIN_NON_EMPTY_STRING:"Domain must be a non-empty string",DOMAIN_TOO_LONG:"Domain too long",DOMAIN_INVALID_UNICODE_CHARS:"Domain contains forbidden Unicode characters",DOMAIN_INVALID_CHARS:"Domain contains invalid character",DOMAIN_INVALID_TLDS_CHARS:"Domain contains invalid tld character",DOMAIN_SEGMENTS_COUNT:"Domain lacks the minimum required number of segments",DOMAIN_FORBIDDEN_TLDS:"Domain uses forbidden TLD",DOMAIN_EMPTY_SEGMENT:"Domain contains empty dot-separated segment",DOMAIN_LONG_SEGMENT:"Domain contains dot-separated segment that is too long"},t.code=function(e){return{code:e,error:t.codes[e]}}},function(e,t,r){"use strict";const s=r(0),n=r(27),o={generate:function(){const e={},t="!\\$&'\\(\\)\\*\\+,;=",r="\\w-\\.~%\\dA-Fa-f"+t+":@",s="["+r+"]",n="(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";e.ipv4address="(?:"+n+"\\.){3}"+n;const o="[\\dA-Fa-f]{1,4}",a="(?:"+o+":"+o+"|"+e.ipv4address+")",i="(?:"+o+":){6}"+a,l="::(?:"+o+":){5}"+a,c="(?:"+o+")?::(?:"+o+":){4}"+a,u="(?:(?:"+o+":){0,1}"+o+")?::(?:"+o+":){3}"+a,f="(?:(?:"+o+":){0,2}"+o+")?::(?:"+o+":){2}"+a,m="(?:(?:"+o+":){0,3}"+o+")?::"+o+":"+a,h="(?:(?:"+o+":){0,4}"+o+")?::"+a;e.ipv4Cidr="(?:\\d|[1-2]\\d|3[0-2])",e.ipv6Cidr="(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])",e.ipv6address="(?:"+i+"|"+l+"|"+c+"|"+u+"|"+f+"|"+m+"|"+h+"|(?:(?:[\\dA-Fa-f]{1,4}:){0,5}[\\dA-Fa-f]{1,4})?::[\\dA-Fa-f]{1,4}|(?:(?:[\\dA-Fa-f]{1,4}:){0,6}[\\dA-Fa-f]{1,4})?::)",e.ipvFuture="v[\\dA-Fa-f]+\\.[\\w-\\.~"+t+":]+",e.scheme="[a-zA-Z][a-zA-Z\\d+-\\.]*",e.schemeRegex=new RegExp(e.scheme);const d="[\\w-\\.~%\\dA-Fa-f"+t+":]*",p="(?:"+("\\[(?:"+e.ipv6address+"|"+e.ipvFuture+")\\]")+"|"+e.ipv4address+"|[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=]{1,255})",g="(?:"+d+"@)?"+p+"(?::\\d*)?",y="(?:"+d+"@)?("+p+")(?::\\d*)?",b=s+"*",v=s+"+",_="(?:\\/"+b+")*",w="\\/(?:"+v+_+")?",$=v+_,x="[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+"+_;return e.hierPart="(?:(?:\\/\\/"+g+_+")|"+w+"|"+$+"|(?:\\/\\/\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*))",e.hierPartCapture="(?:(?:\\/\\/"+y+_+")|"+w+"|"+$+")",e.relativeRef="(?:(?:\\/\\/"+g+_+")|"+w+"|"+x+"|)",e.relativeRefCapture="(?:(?:\\/\\/"+y+_+")|"+w+"|"+x+"|)",e.query="["+r+"\\/\\?]*(?=#|$)",e.queryWithSquareBrackets="["+r+"\\[\\]\\/\\?]*(?=#|$)",e.fragment="["+r+"\\/\\?]*",e}};o.rfc3986=o.generate(),t.ip={v4Cidr:o.rfc3986.ipv4Cidr,v6Cidr:o.rfc3986.ipv6Cidr,ipv4:o.rfc3986.ipv4address,ipv6:o.rfc3986.ipv6address,ipvfuture:o.rfc3986.ipvFuture},o.createRegex=function(e){const t=o.rfc3986,r="(?:\\?"+(e.allowQuerySquareBrackets?t.queryWithSquareBrackets:t.query)+")?(?:#"+t.fragment+")?",a=e.domain?t.relativeRefCapture:t.relativeRef;if(e.relativeOnly)return o.wrap(a+r);let i="";if(e.scheme){s(e.scheme instanceof RegExp||"string"==typeof e.scheme||Array.isArray(e.scheme),"scheme must be a RegExp, String, or Array");const r=[].concat(e.scheme);s(r.length>=1,"scheme must have at least 1 scheme specified");const o=[];for(let e=0;e<r.length;++e){const a=r[e];s(a instanceof RegExp||"string"==typeof a,"scheme at position "+e+" must be a RegExp or String"),a instanceof RegExp?o.push(a.source.toString()):(s(t.schemeRegex.test(a),"scheme at position "+e+" must be a valid scheme"),o.push(n(a)))}i=o.join("|")}const l="(?:"+(i?"(?:"+i+")":t.scheme)+":"+(e.domain?t.hierPartCapture:t.hierPart)+")",c=e.allowRelative?"(?:"+l+"|"+a+")":l;return o.wrap(c+r,i)},o.wrap=function(e,t){return{raw:e="(?=.)(?!https?:/$)".concat(e),regex:new RegExp("^".concat(e,"$")),scheme:t}},o.uriRegex=o.createRegex({}),t.regex=function(e={}){return e.scheme||e.allowRelative||e.relativeOnly||e.allowQuerySquareBrackets||e.domain?o.createRegex(e):o.uriRegex}},function(e,t,r){"use strict";e.exports=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")}},function(e,t,r){"use strict";e.exports=function(...e){try{return JSON.stringify.apply(null,e)}catch(e){return"[Cannot display object: "+e.message+"]"}}},function(e){e.exports=JSON.parse('{"version":"17.1.1"}')},function(e,t,r){"use strict";const s={};e.exports=function(e){if(!e)return"";let t="";for(let r=0;r<e.length;++r){const n=e.charCodeAt(r);s.isSafe(n)?t+=e[r]:t+=s.escapeHtmlChar(n)}return t},s.escapeHtmlChar=function(e){const t=s.namedHtml[e];if(void 0!==t)return t;if(e>=256)return"&#"+e+";";const r=e.toString(16).padStart(2,"0");return"&#x".concat(r,";")},s.isSafe=function(e){return void 0!==s.safeCharCodes[e]},s.namedHtml={38:"&amp;",60:"&lt;",62:"&gt;",34:"&quot;",160:"&nbsp;",162:"&cent;",163:"&pound;",164:"&curren;",169:"&copy;",174:"&reg;"},s.safeCharCodes=function(){const e={};for(let t=32;t<123;++t)(t>=97||t>=65&&t<=90||t>=48&&t<=57||32===t||46===t||44===t||45===t||58===t||95===t)&&(e[t]=null);return e}()},function(e,t,r){"use strict";const s={operators:["!","^","*","/","%","+","-","<","<=",">",">=","==","!=","&&","||","??"],operatorCharacters:["!","^","*","/","%","+","-","<","=",">","&","|","?"],operatorsOrder:[["^"],["*","/","%"],["+","-"],["<","<=",">",">="],["==","!="],["&&"],["||","??"]],operatorsPrefix:["!","n"],literals:{'"':'"',"`":"`","'":"'","[":"]"},numberRx:/^(?:[0-9]*\.?[0-9]*){1}$/,tokenRx:/^[\w\$\#\.\@\:\{\}]+$/,symbol:Symbol("formula"),settings:Symbol("settings")};t.Parser=class{constructor(e,t={}){if(!t[s.settings]&&t.constants)for(const e in t.constants){const r=t.constants[e];if(null!==r&&!["boolean","number","string"].includes(typeof r))throw new Error("Formula constant ".concat(e," contains invalid ").concat(typeof r," value type"))}this.settings=t[s.settings]?t:Object.assign({[s.settings]:!0,constants:{},functions:{}},t),this.single=null,this._parts=null,this._parse(e)}_parse(e){let r=[],n="",o=0,a=!1;const i=e=>{if(o)throw new Error("Formula missing closing parenthesis");const i=r.length?r[r.length-1]:null;if(a||n||e){if(i&&"reference"===i.type&&")"===e)return i.type="function",i.value=this._subFormula(n,i.value),void(n="");if(")"===e){const e=new t.Parser(n,this.settings);r.push({type:"segment",value:e})}else if(a){if("]"===a)return r.push({type:"reference",value:n}),void(n="");r.push({type:"literal",value:n})}else if(s.operatorCharacters.includes(n))i&&"operator"===i.type&&s.operators.includes(i.value+n)?i.value+=n:r.push({type:"operator",value:n});else if(n.match(s.numberRx))r.push({type:"constant",value:parseFloat(n)});else if(void 0!==this.settings.constants[n])r.push({type:"constant",value:this.settings.constants[n]});else{if(!n.match(s.tokenRx))throw new Error("Formula contains invalid token: ".concat(n));r.push({type:"reference",value:n})}n=""}};for(const t of e)a?t===a?(i(),a=!1):n+=t:o?"("===t?(n+=t,++o):")"===t?(--o,o?n+=t:i(t)):n+=t:t in s.literals?a=s.literals[t]:"("===t?(i(),++o):s.operatorCharacters.includes(t)?(i(),n=t,i()):" "!==t?n+=t:i();i(),r=r.map((e,t)=>"operator"!==e.type||"-"!==e.value||t&&"operator"!==r[t-1].type?e:{type:"operator",value:"n"});let l=!1;for(const e of r){if("operator"===e.type){if(s.operatorsPrefix.includes(e.value))continue;if(!l)throw new Error("Formula contains an operator in invalid position");if(!s.operators.includes(e.value))throw new Error("Formula contains an unknown operator ".concat(e.value))}else if(l)throw new Error("Formula missing expected operator");l=!l}if(!l)throw new Error("Formula contains invalid trailing operator");1===r.length&&["reference","literal","constant"].includes(r[0].type)&&(this.single={type:"reference"===r[0].type?"reference":"value",value:r[0].value}),this._parts=r.map(e=>{if("operator"===e.type)return s.operatorsPrefix.includes(e.value)?e:e.value;if("reference"!==e.type)return e.value;if(this.settings.tokenRx&&!this.settings.tokenRx.test(e.value))throw new Error("Formula contains invalid reference ".concat(e.value));return this.settings.reference?this.settings.reference(e.value):s.reference(e.value)})}_subFormula(e,r){const n=this.settings.functions[r];if("function"!=typeof n)throw new Error("Formula contains unknown function ".concat(r));let o=[];if(e){let t="",n=0,a=!1;const i=()=>{if(!t)throw new Error("Formula contains function ".concat(r," with invalid arguments ").concat(e));o.push(t),t=""};for(let r=0;r<e.length;++r){const o=e[r];a?(t+=o,o===a&&(a=!1)):o in s.literals&&!n?(t+=o,a=s.literals[o]):","!==o||n?(t+=o,"("===o?++n:")"===o&&--n):i()}i()}return o=o.map(e=>new t.Parser(e,this.settings)),function(e){const t=[];for(const r of o)t.push(r.evaluate(e));return n.call(e,...t)}}evaluate(e){const t=this._parts.slice();for(let r=t.length-2;r>=0;--r){const n=t[r];if(n&&"operator"===n.type){const o=t[r+1];t.splice(r+1,1);const a=s.evaluate(o,e);t[r]=s.single(n.value,a)}}return s.operatorsOrder.forEach(r=>{for(let n=1;n<t.length-1;)if(r.includes(t[n])){const r=t[n],o=s.evaluate(t[n-1],e),a=s.evaluate(t[n+1],e);t.splice(n,2);const i=s.calculate(r,o,a);t[n-1]=0===i?0:i}else n+=2}),s.evaluate(t[0],e)}},t.Parser.prototype[s.symbol]=!0,s.reference=function(e){return function(t){return t&&void 0!==t[e]?t[e]:null}},s.evaluate=function(e,t){return null===e?null:"function"==typeof e?e(t):e[s.symbol]?e.evaluate(t):e},s.single=function(e,t){if("!"===e)return!t;const r=-t;return 0===r?0:r},s.calculate=function(e,t,r){if("??"===e)return s.exists(t)?t:r;if("string"==typeof t||"string"==typeof r){if("+"===e)return(t=s.exists(t)?t:"")+(r=s.exists(r)?r:"")}else switch(e){case"^":return Math.pow(t,r);case"*":return t*r;case"/":return t/r;case"%":return t%r;case"+":return t+r;case"-":return t-r}switch(e){case"<":return t<r;case"<=":return t<=r;case">":return t>r;case">=":return t>=r;case"==":return t===r;case"!=":return t!==r;case"&&":return t&&r;case"||":return t||r}return null},s.exists=function(e){return null!=e}},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(8),i=r(4),l=r(5),c={};e.exports=n.extend({type:"alternatives",flags:{match:{default:"any"}},terms:{matches:{init:[],register:l.toSibling}},args:(e,...t)=>1===t.length&&Array.isArray(t[0])?e.try(...t[0]):e.try(...t),validate(e,t){const{schema:r,error:s,state:n,prefs:o}=t;if(r._flags.match){let t,a=0;for(let s=0;s<r.$_terms.matches.length;++s){const i=r.$_terms.matches[s],l=n.nest(i.schema,"match.".concat(s));l.snapshot();const c=i.schema.$_validate(e,l,o);c.errors?l.restore():(++a,t=c.value)}return a?"one"===r._flags.match?1===a?{value:t}:{errors:s("alternatives.one")}:a===r.$_terms.matches.length?{value:e}:{errors:s("alternatives.all")}:{errors:s("alternatives.any")}}const a=[];for(let t=0;t<r.$_terms.matches.length;++t){const s=r.$_terms.matches[t];if(s.schema){const r=n.nest(s.schema,"match.".concat(t));r.snapshot();const i=s.schema.$_validate(e,r,o);if(!i.errors)return i;r.restore(),a.push({schema:s.schema,reports:i.errors});continue}const i=s.ref?s.ref.resolve(e,n,o):e,l=s.is?[s]:s.switch;for(let r=0;r<l.length;++r){const a=l[r],{is:c,then:u,otherwise:f}=a,m="match.".concat(t).concat(s.switch?"."+r:"");if(c.$_match(i,n.nest(c,"".concat(m,".is")),o)){if(u)return u.$_validate(e,n.nest(u,"".concat(m,".then")),o)}else if(f)return f.$_validate(e,n.nest(f,"".concat(m,".otherwise")),o)}}return c.errors(a,t)},rules:{conditional:{method(e,t){s(!this._flags._endedSwitch,"Unreachable condition"),s(!this._flags.match,"Cannot combine match mode",this._flags.match,"with conditional rule"),s(void 0===t.break,"Cannot use break option with alternatives conditional");const r=this.clone(),n=a.when(r,e,t),o=n.is?[n]:n.switch;for(const e of o)if(e.then&&e.otherwise){r.$_setFlag("_endedSwitch",!0,{clone:!1});break}return r.$_terms.matches.push(n),r.$_mutateRebuild()}},match:{method(e){if(s(["any","one","all"].includes(e),"Invalid alternatives match mode",e),"any"!==e)for(const t of this.$_terms.matches)s(t.schema,"Cannot combine match mode",e,"with conditional rules");return this.$_setFlag("match",e)}},try:{method(...e){s(e.length,"Missing alternative schemas"),o.verifyFlat(e,"try"),s(!this._flags._endedSwitch,"Unreachable condition");const t=this.clone();for(const r of e)t.$_terms.matches.push({schema:t.$_compile(r)});return t.$_mutateRebuild()}}},overrides:{label(e){return this.$_super.label(e).$_modify({each:(t,r)=>"is"!==r.path[0]?t.label(e):void 0,ref:!1})}},rebuild(e){e.$_modify({each:t=>{o.isSchema(t)&&"array"===t.type&&e.$_setFlag("_arrayItems",!0,{clone:!1})}})},manifest:{build(e,t){if(t.matches)for(const r of t.matches){const{schema:t,ref:s,is:n,not:o,then:a,otherwise:i}=r;e=t?e.try(t):s?e.conditional(s,{is:n,then:a,not:o,otherwise:i,switch:r.switch}):e.conditional(n,{then:a,otherwise:i})}return e}},messages:{"alternatives.all":"{{#label}} does not match all of the required types","alternatives.any":"{{#label}} does not match any of the allowed types","alternatives.match":"{{#label}} does not match any of the allowed types","alternatives.one":"{{#label}} matches more than one allowed type","alternatives.types":"{{#label}} must be one of {{#types}}"}}),c.errors=function(e,{error:t,state:r}){if(!e.length)return{errors:t("alternatives.any")};if(1===e.length)return{errors:e[0].reports};const s=new Set,n=[];for(const{reports:o,schema:a}of e){if(o.length>1)return c.unmatched(e,t);const l=o[0];if(l instanceof i.Report==!1)return c.unmatched(e,t);if(l.state.path.length!==r.path.length){n.push({type:a.type,report:l});continue}if("any.only"===l.code){for(const e of l.local.valids)s.add(e);continue}const[u,f]=l.code.split(".");"base"===f?s.add(u):n.push({type:a.type,report:l})}return n.length?1===n.length?{errors:n[0].report}:c.unmatched(e,t):{errors:t("alternatives.types",{types:[...s]})}},c.unmatched=function(e,t){const r=[];for(const t of e)r.push(...t.reports);return{errors:t("alternatives.match",i.details(r,{override:!1}))}}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(10),a=r(20),i=r(15),l=r(1),c=r(8),u=r(4),f=r(17),m=r(18),h=r(9),d=r(35),p=r(5),g=r(19),y=r(36),b=r(21),v={Base:class{constructor(e){this.type=e,this.$_root=null,this._definition={},this._ids=new d.Ids,this._preferences=null,this._refs=new p.Manager,this._cache=null,this._valids=null,this._invalids=null,this._flags={},this._rules=[],this._singleRules=new Map,this.$_terms={},this.$_temp={ruleset:null,whens:{}}}describe(){return s("function"==typeof m.describe,"Manifest functionality disabled"),m.describe(this)}allow(...e){return l.verifyFlat(e,"allow"),this._values(e,"_valids")}alter(e){s(e&&"object"==typeof e&&!Array.isArray(e),"Invalid targets argument"),s(!this._inRuleset(),"Cannot set alterations inside a ruleset");const t=this.clone();t.$_terms.alterations=t.$_terms.alterations||[];for(const r in e){const n=e[r];s("function"==typeof n,"Alteration adjuster for",r,"must be a function"),t.$_terms.alterations.push({target:r,adjuster:n})}return t.$_temp.ruleset=!1,t}cast(e){return s(!1===e||"string"==typeof e,"Invalid to value"),s(!1===e||this._definition.cast[e],"Type",this.type,"does not support casting to",e),this.$_setFlag("cast",!1===e?void 0:e)}default(e,t){return this._default("default",e,t)}description(e){return s(e&&"string"==typeof e,"Description must be a non-empty string"),this.$_setFlag("description",e)}empty(e){const t=this.clone();return void 0!==e&&(e=t.$_compile(e,{override:!1})),t.$_setFlag("empty",e,{clone:!1})}error(e){return s(e,"Missing error"),s(e instanceof Error||"function"==typeof e,"Must provide a valid Error object or a function"),this.$_setFlag("error",e)}example(e,t={}){return s(void 0!==e,"Missing example"),l.assertOptions(t,["override"]),this._inner("examples",e,{single:!0,override:t.override})}external(e,t){return"object"==typeof e&&(s(!t,"Cannot combine options with description"),t=e.description,e=e.method),s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this._inner("externals",{method:e,description:t},{single:!0})}failover(e,t){return this._default("failover",e,t)}forbidden(){return this.presence("forbidden")}id(e){return e?(s("string"==typeof e,"id must be a non-empty string"),s(/^[^\.]+$/.test(e),"id cannot contain period character"),this.$_setFlag("id",e)):this.$_setFlag("id",void 0)}invalid(...e){return this._values(e,"_invalids")}label(e){return s(e&&"string"==typeof e,"Label name must be a non-empty string"),this.$_setFlag("label",e)}meta(e){return s(void 0!==e,"Meta cannot be undefined"),this._inner("metas",e,{single:!0})}note(...e){s(e.length,"Missing notes");for(const t of e)s(t&&"string"==typeof t,"Notes must be non-empty strings");return this._inner("notes",e)}only(e=!0){return s("boolean"==typeof e,"Invalid mode:",e),this.$_setFlag("only",e)}optional(){return this.presence("optional")}prefs(e){s(e,"Missing preferences"),s(void 0===e.context,"Cannot override context"),s(void 0===e.externals,"Cannot override externals"),s(void 0===e.warnings,"Cannot override warnings"),s(void 0===e.debug,"Cannot override debug"),l.checkPreferences(e);const t=this.clone();return t._preferences=l.preferences(t._preferences,e),t}presence(e){return s(["optional","required","forbidden"].includes(e),"Unknown presence mode",e),this.$_setFlag("presence",e)}raw(e=!0){return this.$_setFlag("result",e?"raw":void 0)}result(e){return s(["raw","strip"].includes(e),"Unknown result mode",e),this.$_setFlag("result",e)}required(){return this.presence("required")}strict(e){const t=this.clone(),r=void 0!==e&&!e;return t._preferences=l.preferences(t._preferences,{convert:r}),t}strip(e=!0){return this.$_setFlag("result",e?"strip":void 0)}tag(...e){s(e.length,"Missing tags");for(const t of e)s(t&&"string"==typeof t,"Tags must be non-empty strings");return this._inner("tags",e)}unit(e){return s(e&&"string"==typeof e,"Unit name must be a non-empty string"),this.$_setFlag("unit",e)}valid(...e){l.verifyFlat(e,"valid");const t=this.allow(...e);return t.$_setFlag("only",!!t._valids,{clone:!1}),t}when(e,t){const r=this.clone();r.$_terms.whens||(r.$_terms.whens=[]);const n=c.when(r,e,t);if(!["any","link"].includes(r.type)){const e=n.is?[n]:n.switch;for(const t of e)s(!t.then||"any"===t.then.type||t.then.type===r.type,"Cannot combine",r.type,"with",t.then&&t.then.type),s(!t.otherwise||"any"===t.otherwise.type||t.otherwise.type===r.type,"Cannot combine",r.type,"with",t.otherwise&&t.otherwise.type)}return r.$_terms.whens.push(n),r.$_mutateRebuild()}cache(e){s(!this._inRuleset(),"Cannot set caching inside a ruleset"),s(!this._cache,"Cannot override schema cache");const t=this.clone();return t._cache=e||i.provider.provision(),t.$_temp.ruleset=!1,t}clone(){const e=Object.create(Object.getPrototypeOf(this));return this._assign(e)}concat(e){s(l.isSchema(e),"Invalid schema object"),s("any"===this.type||"any"===e.type||e.type===this.type,"Cannot merge type",this.type,"with another type:",e.type),s(!this._inRuleset(),"Cannot concatenate onto a schema with open ruleset"),s(!e._inRuleset(),"Cannot concatenate a schema with open ruleset");let t=this.clone();if("any"===this.type&&"any"!==e.type){const r=e.clone();for(const e of Object.keys(t))"type"!==e&&(r[e]=t[e]);t=r}t._ids.concat(e._ids),t._refs.register(e,p.toSibling),t._preferences=t._preferences?l.preferences(t._preferences,e._preferences):e._preferences,t._valids=b.merge(t._valids,e._valids,e._invalids),t._invalids=b.merge(t._invalids,e._invalids,e._valids);for(const r of e._singleRules.keys())t._singleRules.has(r)&&(t._rules=t._rules.filter(e=>e.keep||e.name!==r),t._singleRules.delete(r));for(const r of e._rules)e._definition.rules[r.method].multi||t._singleRules.set(r.name,r),t._rules.push(r);if(t._flags.empty&&e._flags.empty){t._flags.empty=t._flags.empty.concat(e._flags.empty);const r=Object.assign({},e._flags);delete r.empty,a(t._flags,r)}else if(e._flags.empty){t._flags.empty=e._flags.empty;const r=Object.assign({},e._flags);delete r.empty,a(t._flags,r)}else a(t._flags,e._flags);for(const r in e.$_terms){const s=e.$_terms[r];s?t.$_terms[r]?t.$_terms[r]=t.$_terms[r].concat(s):t.$_terms[r]=s.slice():t.$_terms[r]||(t.$_terms[r]=s)}return this.$_root._tracer&&this.$_root._tracer._combine(t,[this,e]),t.$_mutateRebuild()}extend(e){return s(!e.base,"Cannot extend type with another base"),f.type(this,e)}extract(e){return e=Array.isArray(e)?e:e.split("."),this._ids.reach(e)}fork(e,t){s(!this._inRuleset(),"Cannot fork inside a ruleset");let r=this;for(let s of[].concat(e))s=Array.isArray(s)?s:s.split("."),r=r._ids.fork(s,t,r);return r.$_temp.ruleset=!1,r}rule(e){const t=this._definition;l.assertOptions(e,Object.keys(t.modifiers)),s(!1!==this.$_temp.ruleset,"Cannot apply rules to empty ruleset or the last rule added does not support rule properties");const r=null===this.$_temp.ruleset?this._rules.length-1:this.$_temp.ruleset;s(r>=0&&r<this._rules.length,"Cannot apply rules to empty ruleset");const o=this.clone();for(let a=r;a<o._rules.length;++a){const r=o._rules[a],i=n(r);for(const n in e)t.modifiers[n](i,e[n]),s(i.name===r.name,"Cannot change rule name");o._rules[a]=i,o._singleRules.get(i.name)===r&&o._singleRules.set(i.name,i)}return o.$_temp.ruleset=!1,o.$_mutateRebuild()}get ruleset(){s(!this._inRuleset(),"Cannot start a new ruleset without closing the previous one");const e=this.clone();return e.$_temp.ruleset=e._rules.length,e}get $(){return this.ruleset}tailor(e){e=[].concat(e),s(!this._inRuleset(),"Cannot tailor inside a ruleset");let t=this;if(this.$_terms.alterations)for(const{target:r,adjuster:n}of this.$_terms.alterations)e.includes(r)&&(t=n(t),s(l.isSchema(t),"Alteration adjuster for",r,"failed to return a schema object"));return t=t.$_modify({each:t=>t.tailor(e),ref:!1}),t.$_temp.ruleset=!1,t.$_mutateRebuild()}tracer(){return g.location?g.location(this):this}validate(e,t){return y.entry(e,this,t)}validateAsync(e,t){return y.entryAsync(e,this,t)}$_addRule(e){"string"==typeof e&&(e={name:e}),s(e&&"object"==typeof e,"Invalid options"),s(e.name&&"string"==typeof e.name,"Invalid rule name");for(const t in e)s("_"!==t[0],"Cannot set private rule properties");const t=Object.assign({},e);t._resolve=[],t.method=t.method||t.name;const r=this._definition.rules[t.method],n=t.args;s(r,"Unknown rule",t.method);const o=this.clone();if(n){s(1===Object.keys(n).length||Object.keys(n).length===this._definition.rules[t.name].args.length,"Invalid rule definition for",this.type,t.name);for(const e in n){let a=n[e];if(void 0!==a){if(r.argsByName){const i=r.argsByName.get(e);if(i.ref&&l.isResolvable(a))t._resolve.push(e),o.$_mutateRegister(a);else if(i.normalize&&(a=i.normalize(a),n[e]=a),i.assert){const t=l.validateArg(a,e,i);s(!t,t,"or reference")}}n[e]=a}else delete n[e]}}return r.multi||(o._ruleRemove(t.name,{clone:!1}),o._singleRules.set(t.name,t)),!1===o.$_temp.ruleset&&(o.$_temp.ruleset=null),r.priority?o._rules.unshift(t):o._rules.push(t),o}$_compile(e,t){return c.schema(this.$_root,e,t)}$_createError(e,t,r,s,n,o={}){const a=!1!==o.flags?this._flags:{},i=o.messages?h.merge(this._definition.messages,o.messages):this._definition.messages;return new u.Report(e,t,r,a,i,s,n)}$_getFlag(e){return this._flags[e]}$_getRule(e){return this._singleRules.get(e)}$_mapLabels(e){return e=Array.isArray(e)?e:e.split("."),this._ids.labels(e)}$_match(e,t,r,s){(r=Object.assign({},r)).abortEarly=!0,r._externals=!1,t.snapshot();const n=!y.validate(e,this,t,r,s).errors;return t.restore(),n}$_modify(e){return l.assertOptions(e,["each","once","ref","schema"]),d.schema(this,e)||this}$_mutateRebuild(){s(!this._inRuleset(),"Cannot add this rule inside a ruleset"),this._refs.reset(),this._ids.reset();return this.$_modify({each:(e,{source:t,name:r,path:s,key:n})=>{const o=this._definition[t][r]&&this._definition[t][r].register;!1!==o&&this.$_mutateRegister(e,{family:o,key:n})}}),this._definition.rebuild&&this._definition.rebuild(this),this.$_temp.ruleset=!1,this}$_mutateRegister(e,{family:t,key:r}={}){this._refs.register(e,t),this._ids.register(e,{key:r})}$_property(e){return this._definition.properties[e]}$_reach(e){return this._ids.reach(e)}$_rootReferences(){return this._refs.roots()}$_setFlag(e,t,r={}){s("_"===e[0]||!this._inRuleset(),"Cannot set flag inside a ruleset");const n=this._definition.flags[e]||{};if(o(t,n.default)&&(t=void 0),o(t,this._flags[e]))return this;const a=!1!==r.clone?this.clone():this;return void 0!==t?(a._flags[e]=t,a.$_mutateRegister(t)):delete a._flags[e],"_"!==e[0]&&(a.$_temp.ruleset=!1),a}$_validate(e,t,r){return y.validate(e,this,t,r)}_assign(e){e.type=this.type,e.$_root=this.$_root,e.$_temp=Object.assign({},this.$_temp),e.$_temp.whens={},e._ids=this._ids.clone(),e._preferences=this._preferences,e._valids=this._valids&&this._valids.clone(),e._invalids=this._invalids&&this._invalids.clone(),e._rules=this._rules.slice(),e._singleRules=n(this._singleRules,{shallow:!0}),e._refs=this._refs.clone(),e._flags=Object.assign({},this._flags),e._cache=null,e.$_terms={};for(const t in this.$_terms)e.$_terms[t]=this.$_terms[t]?this.$_terms[t].slice():null;e.$_super={};for(const t in this.$_super)e.$_super[t]=this._super[t].bind(e);return e}_default(e,t,r={}){return l.assertOptions(r,"literal"),s(void 0!==t,"Missing",e,"value"),s("function"==typeof t||!r.literal,"Only function value supports literal option"),"function"==typeof t&&r.literal&&(t={[l.symbols.literal]:!0,literal:t}),this.$_setFlag(e,t)}_generate(e,t,r){if(!this.$_terms.whens)return{schema:this};const s=[],n=[];for(let o=0;o<this.$_terms.whens.length;++o){const a=this.$_terms.whens[o];if(a.concat){s.push(a.concat),n.push("".concat(o,".concat"));continue}const i=a.ref?a.ref.resolve(e,t,r):e,l=a.is?[a]:a.switch,c=n.length;for(let c=0;c<l.length;++c){const{is:u,then:f,otherwise:m}=l[c],h="".concat(o).concat(a.switch?"."+c:"");if(u.$_match(i,t.nest(u,"".concat(h,".is")),r)){if(f){const o=t.localize([...t.path,"".concat(h,".then")],t.ancestors,t.schemas),{schema:a,id:i}=f._generate(e,o,r);s.push(a),n.push("".concat(h,".then").concat(i?"(".concat(i,")"):""));break}}else if(m){const o=t.localize([...t.path,"".concat(h,".otherwise")],t.ancestors,t.schemas),{schema:a,id:i}=m._generate(e,o,r);s.push(a),n.push("".concat(h,".otherwise").concat(i?"(".concat(i,")"):""));break}}if(a.break&&n.length>c)break}const o=n.join(", ");if(t.mainstay.tracer.debug(t,"rule","when",o),!o)return{schema:this};if(!t.mainstay.tracer.active&&this.$_temp.whens[o])return{schema:this.$_temp.whens[o],id:o};let a=this;this._definition.generate&&(a=this._definition.generate(this,e,t,r));for(const e of s)a=a.concat(e);return this.$_root._tracer&&this.$_root._tracer._combine(a,[this,...s]),this.$_temp.whens[o]=a,{schema:a,id:o}}_inner(e,t,r={}){s(!this._inRuleset(),"Cannot set ".concat(e," inside a ruleset"));const n=this.clone();return n.$_terms[e]&&!r.override||(n.$_terms[e]=[]),r.single?n.$_terms[e].push(t):n.$_terms[e].push(...t),n.$_temp.ruleset=!1,n}_inRuleset(){return null!==this.$_temp.ruleset&&!1!==this.$_temp.ruleset}_ruleRemove(e,t={}){if(!this._singleRules.has(e))return this;const r=!1!==t.clone?this.clone():this;r._singleRules.delete(e);const s=[];for(let t=0;t<r._rules.length;++t){const n=r._rules[t];n.name!==e||n.keep?s.push(n):r._inRuleset()&&t<r.$_temp.ruleset&&--r.$_temp.ruleset}return r._rules=s,r}_values(e,t){l.verifyFlat(e,t.slice(1,-1));const r=this.clone(),n=e[0]===l.symbols.override;if(n&&(e=e.slice(1)),!r[t]&&e.length?r[t]=new b:n&&(r[t]=e.length?new b:null,r.$_mutateRebuild()),!r[t])return r;n&&r[t].override();for(const n of e){s(void 0!==n,"Cannot call allow/valid/invalid with undefined"),s(n!==l.symbols.override,"Override must be the first value");const e="_invalids"===t?"_valids":"_invalids";r[e]&&(r[e].remove(n),r[e].length||(s("_valids"===t||!r._flags.only,"Setting invalid value",n,"leaves schema rejecting all values due to previous valid rule"),r[e]=null)),r[t].add(n,r._refs)}return r}}};v.Base.prototype[l.symbols.any]={version:l.version,compile:c.compile,root:"$_root"},v.Base.prototype.isImmutable=!0,v.Base.prototype.deny=v.Base.prototype.invalid,v.Base.prototype.disallow=v.Base.prototype.invalid,v.Base.prototype.equal=v.Base.prototype.valid,v.Base.prototype.exist=v.Base.prototype.required,v.Base.prototype.not=v.Base.prototype.invalid,v.Base.prototype.options=v.Base.prototype.prefs,v.Base.prototype.preferences=v.Base.prototype.prefs,e.exports=new v.Base},function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=r(0),a=r(1),i=r(5),l={};t.Ids=l.Ids=class{constructor(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}clone(){const e=new l.Ids;return e._byId=new Map(this._byId),e._byKey=new Map(this._byKey),e._schemaChain=this._schemaChain,e}concat(e){e._schemaChain&&(this._schemaChain=!0);for(const[t,r]of e._byId.entries())o(!this._byKey.has(t),"Schema id conflicts with existing key:",t),this._byId.set(t,r);for(const[t,r]of e._byKey.entries())o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,r)}fork(e,t,r){const s=this._collect(e);s.push({schema:r});const n=s.shift();let i={id:n.id,schema:t(n.schema)};o(a.isSchema(i.schema),"adjuster function failed to return a joi schema type");for(const e of s)i={id:e.id,schema:l.fork(e.schema,i.id,i.schema)};return i.schema}labels(e,t=[]){const r=e[0],s=this._get(r);if(!s)return[...t,...e].join(".");const n=e.slice(1);return t=[...t,s.schema._flags.label||r],n.length?s.schema._ids.labels(n,t):t.join(".")}reach(e,t=[]){const r=e[0],s=this._get(r);o(s,"Schema does not contain path",[...t,...e].join("."));const n=e.slice(1);return n.length?s.schema._ids.reach(n,[...t,r]):s.schema}register(e,{key:t}={}){if(!e||!a.isSchema(e))return;(e.$_property("schemaChain")||e._ids._schemaChain)&&(this._schemaChain=!0);const r=e._flags.id;if(r){const t=this._byId.get(r);o(!t||t.schema===e,"Cannot add different schemas with the same id:",r),o(!this._byKey.has(r),"Schema id conflicts with existing key:",r),this._byId.set(r,{schema:e,id:r})}t&&(o(!this._byKey.has(t),"Schema already contains key:",t),o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,{schema:e,id:t}))}reset(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}_collect(e,t=[],r=[]){const s=e[0],n=this._get(s);o(n,"Schema does not contain path",[...t,...e].join(".")),r=[n,...r];const a=e.slice(1);return a.length?n.schema._ids._collect(a,[...t,s],r):r}_get(e){return this._byId.get(e)||this._byKey.get(e)}},l.fork=function(e,r,s){const n=t.schema(e,{each:(e,{key:t})=>{if(r===(e._flags.id||t))return s},ref:!1});return n?n.$_mutateRebuild():e},t.schema=function(e,t){let r;for(const s in e._flags){if("_"===s[0])continue;const n=l.scan(e._flags[s],{source:"flags",name:s},t);void 0!==n&&(r=r||e.clone(),r._flags[s]=n)}for(let s=0;s<e._rules.length;++s){const n=e._rules[s],o=l.scan(n.args,{source:"rules",name:n.name},t);if(void 0!==o){r=r||e.clone();const t=Object.assign({},n);t.args=o,r._rules[s]=t,r._singleRules.get(n.name)===n&&r._singleRules.set(n.name,t)}}for(const s in e.$_terms){if("_"===s[0])continue;const n=l.scan(e.$_terms[s],{source:"terms",name:s},t);void 0!==n&&(r=r||e.clone(),r.$_terms[s]=n)}return r},l.scan=function(e,t,r,o,c){const u=o||[];if(null===e||"object"!=typeof e)return;let f;if(Array.isArray(e)){for(let s=0;s<e.length;++s){const n="terms"===t.source&&"keys"===t.name&&e[s].key,o=l.scan(e[s],t,r,[s,...u],n);void 0!==o&&(f=f||e.slice(),f[s]=o)}return f}if(!1!==r.schema&&a.isSchema(e)||!1!==r.ref&&i.isRef(e)){const o=r.each(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{path:u,key:c}));if(o===e)return;return o}for(const s in e){if("_"===s[0])continue;const n=l.scan(e[s],t,r,[s,...u],c);void 0!==n&&(f=f||Object.assign({},e),f[s]=n)}return f}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(37),a=r(6),i=r(1),l=r(4),c=r(38),u={result:Symbol("result")};t.entry=function(e,t,r){let n=i.defaults;r&&(s(void 0===r.warnings,"Cannot override warnings preference in synchronous validation"),n=i.preferences(i.defaults,r));const o=u.entry(e,t,n);s(!o.mainstay.externals.length,"Schema with external rules must use validateAsync()");const a={value:o.value};return o.error&&(a.error=o.error),o.mainstay.warnings.length&&(a.warning=l.details(o.mainstay.warnings)),o.mainstay.debug&&(a.debug=o.mainstay.debug),a},t.entryAsync=async function(e,t,r){let s=i.defaults;r&&(s=i.preferences(i.defaults,r));const n=u.entry(e,t,s),o=n.mainstay;if(n.error)throw o.debug&&(n.error.debug=o.debug),n.error;if(o.externals.length){let e=n.value;for(const{method:t,path:r,label:s}of o.externals){let n,o,i=e;r.length&&(n=r[r.length-1],o=a(e,r.slice(0,-1)),i=o[n]);try{const r=await t(i);if(void 0===r||r===i)continue;o?o[n]=r:e=r}catch(e){throw e.message+=" (".concat(s,")"),e}}n.value=e}if(!s.warnings&&!s.debug)return n.value;const c={value:n.value};return o.warnings.length&&(c.warning=l.details(o.warnings)),o.debug&&(c.debug=o.debug),c},u.entry=function(e,r,s){const{tracer:n,cleanup:o}=u.tracer(r,s),a={externals:[],warnings:[],tracer:n,debug:s.debug?[]:null,links:r._ids._schemaChain?new Map:null},i=r._ids._schemaChain?[{schema:r}]:null,f=new c([],[],{mainstay:a,schemas:i}),m=t.validate(e,r,f,s);o&&r.$_root.untrace();const h=l.process(m.errors,e,s);return{value:m.value,error:h,mainstay:a}},u.tracer=function(e,t){return e.$_root._tracer?{tracer:e.$_root._tracer._register(e)}:t.debug?(s(e.$_root.trace,"Debug mode not supported"),{tracer:e.$_root.trace()._register(e),cleanup:!0}):{tracer:u.ignore}},t.validate=function(e,t,r,s,n={}){if(t.$_terms.whens&&(t=t._generate(e,r,s).schema),t._preferences&&(s=u.prefs(t,s)),t._cache&&s.cache){const s=t._cache.get(e);if(r.mainstay.tracer.debug(r,"validate","cached",!!s),s)return s}const o=(n,o,a)=>t.$_createError(n,e,o,a||r,s),a={original:e,prefs:s,schema:t,state:r,error:o,warn:(e,t,s)=>r.mainstay.warnings.push(o(e,t,s)),message:(n,o)=>t.$_createError("custom",e,o,r,s,{messages:n})};r.mainstay.tracer.entry(t,r);const l=t._definition;if(l.prepare&&void 0!==e&&s.convert){const t=l.prepare(e,a);if(t){if(r.mainstay.tracer.value(r,"prepare",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),a);e=t.value}}if(l.coerce&&void 0!==e&&s.convert&&(!l.coerce.from||l.coerce.from.includes(typeof e))){const t=l.coerce.method(e,a);if(t){if(r.mainstay.tracer.value(r,"coerced",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),a);e=t.value}}const c=t._flags.empty;c&&c.$_match(u.trim(e,t),r.nest(c),i.defaults)&&(r.mainstay.tracer.value(r,"empty",e,void 0),e=void 0);const f=n.presence||t._flags.presence||(t._flags._endedSwitch?"ignore":s.presence);if(void 0===e){if("forbidden"===f)return u.finalize(e,null,a);if("required"===f)return u.finalize(e,[t.$_createError("any.required",e,null,r,s)],a);if("optional"===f){if(t._flags.default!==i.symbols.deepDefault)return u.finalize(e,null,a);r.mainstay.tracer.value(r,"default",e,{}),e={}}}else if("forbidden"===f)return u.finalize(e,[t.$_createError("any.unknown",e,null,r,s)],a);const m=[];if(t._valids){const n=t._valids.get(e,r,s,t._flags.insensitive);if(n)return s.convert&&(r.mainstay.tracer.value(r,"valids",e,n.value),e=n.value),r.mainstay.tracer.filter(t,r,"valid",n),u.finalize(e,null,a);if(t._flags.only){const n=t.$_createError("any.only",e,{valids:t._valids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[n],a);m.push(n)}}if(t._invalids){const n=t._invalids.get(e,r,s,t._flags.insensitive);if(n){r.mainstay.tracer.filter(t,r,"invalid",n);const o=t.$_createError("any.invalid",e,{invalids:t._invalids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[o],a);m.push(o)}}if(l.validate){const t=l.validate(e,a);if(t&&(r.mainstay.tracer.value(r,"base",e,t.value),e=t.value,t.errors)){if(!Array.isArray(t.errors))return m.push(t.errors),u.finalize(e,m,a);if(t.errors.length)return m.push(...t.errors),u.finalize(e,m,a)}}return t._rules.length?u.rules(e,m,a):u.finalize(e,m,a)},u.rules=function(e,t,r){const{schema:s,state:n,prefs:o}=r;for(const a of s._rules){const l=s._definition.rules[a.method];if(l.convert&&o.convert){n.mainstay.tracer.log(s,n,"rule",a.name,"full");continue}let c,f=a.args;if(a._resolve.length){f=Object.assign({},f);for(const t of a._resolve){const r=l.argsByName.get(t),a=f[t].resolve(e,n,o),u=r.normalize?r.normalize(a):a,m=i.validateArg(u,null,r);if(m){c=s.$_createError("any.ref",a,{arg:t,ref:f[t],reason:m},n,o);break}f[t]=u}}c=c||l.validate(e,r,f,a);const m=u.rule(c,a);if(m.errors){if(n.mainstay.tracer.log(s,n,"rule",a.name,"error"),a.warn){n.mainstay.warnings.push(...m.errors);continue}if(o.abortEarly)return u.finalize(e,m.errors,r);t.push(...m.errors)}else n.mainstay.tracer.log(s,n,"rule",a.name,"pass"),n.mainstay.tracer.value(n,"rule",e,m.value,a.name),e=m.value}return u.finalize(e,t,r)},u.rule=function(e,t){return e instanceof l.Report?(u.error(e,t),{errors:[e],value:null}):Array.isArray(e)&&(e[0]instanceof l.Report||e[0]instanceof Error)?(e.forEach(e=>u.error(e,t)),{errors:e,value:null}):{errors:null,value:e}},u.error=function(e,t){return t.message&&e._setTemplate(t.message),e},u.finalize=function(e,t,r){t=t||[];const{schema:n,state:o,prefs:a}=r;if(t.length){const s=u.default("failover",void 0,t,r);void 0!==s&&(o.mainstay.tracer.value(o,"failover",e,s),e=s,t=[])}if(t.length&&n._flags.error)if("function"==typeof n._flags.error){t=n._flags.error(t),Array.isArray(t)||(t=[t]);for(const e of t)s(e instanceof Error||e instanceof l.Report,"error() must return an Error object")}else t=[n._flags.error];if(void 0===e){const s=u.default("default",e,t,r);o.mainstay.tracer.value(o,"default",e,s),e=s}if(n._flags.cast&&void 0!==e){const t=n._definition.cast[n._flags.cast];if(t.from(e)){const s=t.to(e,r);o.mainstay.tracer.value(o,"cast",e,s,n._flags.cast),e=s}}if(n.$_terms.externals&&a.externals&&!1!==a._externals)for(const{method:e}of n.$_terms.externals)o.mainstay.externals.push({method:e,path:o.path,label:l.label(n._flags,o,a)});const i={value:e,errors:t.length?t:null};return n._flags.result&&(i.value="strip"===n._flags.result?void 0:r.original,o.mainstay.tracer.value(o,n._flags.result,e,i.value),o.shadow(e,n._flags.result)),n._cache&&!1!==a.cache&&!n._refs.length&&n._cache.set(r.original,i),i},u.prefs=function(e,t){const r=t===i.defaults;return r&&e._preferences[i.symbols.prefs]?e._preferences[i.symbols.prefs]:(t=i.preferences(t,e._preferences),r&&(e._preferences[i.symbols.prefs]=t),t)},u.default=function(e,t,r,s){const{schema:o,state:a,prefs:l}=s,c=o._flags[e];if(l.noDefaults||void 0===c)return t;if(a.mainstay.tracer.log(o,a,"rule",e,"full"),!c)return c;if("function"==typeof c){const t=c.length?[n(a.ancestors[0]),s]:[];try{return c(...t)}catch(t){return void r.push(o.$_createError("any.".concat(e),null,{error:t},a,l))}}return"object"!=typeof c?c:c[i.symbols.literal]?c.literal:i.isResolvable(c)?c.resolve(t,a,l):n(c)},u.trim=function(e,t){if("string"!=typeof e)return e;const r=t.$_getRule("trim");return r&&r.args.enabled?e.trim():e},u.ignore={active:!1,debug:o,entry:o,filter:o,log:o,resolve:o,value:o}},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";const s=r(2),n=r(6),o=r(1),a={value:Symbol("value")};e.exports=a.State=class{constructor(e,t,r){this.path=e,this.ancestors=t,this.mainstay=r.mainstay,this.schemas=r.schemas,this.debug=null}localize(e,t=null,r=null){const s=new a.State(e,t,this);return r&&s.schemas&&(s.schemas=[a.schemas(r),...s.schemas]),s}nest(e,t){const r=new a.State(this.path,this.ancestors,this);return r.schemas=r.schemas&&[a.schemas(e),...r.schemas],r.debug=t,r}shadow(e,t){this.mainstay.shadow=this.mainstay.shadow||new a.Shadow,this.mainstay.shadow.set(this.path,e,t)}snapshot(){this.mainstay.shadow&&(this._snapshot=s(this.mainstay.shadow.node(this.path)))}restore(){this.mainstay.shadow&&(this.mainstay.shadow.override(this.path,this._snapshot),this._snapshot=void 0)}},a.schemas=function(e){return o.isSchema(e)?{schema:e}:e},a.Shadow=class{constructor(){this._values=null}set(e,t,r){if(!e.length)return;if("strip"===r&&"number"==typeof e[e.length-1])return;this._values=this._values||new Map;let s=this._values;for(let t=0;t<e.length;++t){const r=e[t];let n=s.get(r);n||(n=new Map,s.set(r,n)),s=n}s[a.value]=t}get(e){const t=this.node(e);if(t)return t[a.value]}node(e){if(this._values)return n(this._values,e,{iterables:!0})}override(e,t){if(!this._values)return;const r=e.slice(0,-1),s=e[e.length-1],o=n(this._values,r,{iterables:!0});t?o.set(s,t):o&&o.delete(s)}}},function(e,t,r){"use strict";const s=r(0),n=r(10),o=r(6),a=r(3),i=r(1),l=r(8),c={};e.exports=a.extend({type:"array",flags:{single:{default:!1},sparse:{default:!1}},terms:{items:{init:[],manifest:"schema"},ordered:{init:[],manifest:"schema"},_exclusions:{init:[]},_inclusions:{init:[]},_requireds:{init:[]}},coerce:{from:"object",method(e,{schema:t,state:r,prefs:s}){if(!Array.isArray(e))return;const n=t.$_getRule("sort");return n?c.sort(t,e,n.args.options,r,s):void 0}},validate(e,{schema:t,error:r}){if(!Array.isArray(e)){if(t._flags.single){const t=[e];return t[i.symbols.arraySingle]=!0,{value:t}}return{errors:r("array.base")}}if(t.$_getRule("items")||t.$_terms.externals)return{value:e.slice()}},rules:{has:{method(e){e=this.$_compile(e,{appendPath:!0});const t=this.$_addRule({name:"has",args:{schema:e}});return t.$_mutateRegister(e),t},validate(e,{state:t,prefs:r,error:s},{schema:n}){const o=[e,...t.ancestors];for(let s=0;s<e.length;++s){const a=t.localize([...t.path,s],o,n);if(n.$_match(e[s],a,r))return e}const a=n._flags.label;return a?s("array.hasKnown",{patternLabel:a}):s("array.hasUnknown",null)},multi:!0},items:{method(...e){i.verifyFlat(e,"items");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath(()=>this.$_compile(e[r]),r,{append:!0});t.$_terms.items.push(s)}return t.$_mutateRebuild()},validate(e,{schema:t,error:r,state:s,prefs:n}){const o=t.$_terms._requireds.slice(),a=t.$_terms.ordered.slice(),l=[...t.$_terms._inclusions,...o],u=!e[i.symbols.arraySingle];delete e[i.symbols.arraySingle];const f=[];let m=e.length;for(let i=0;i<m;++i){const h=e[i];let d=!1,p=!1;const g=u?i:new Number(i),y=[...s.path,g];if(!t._flags.sparse&&void 0===h){if(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly)return f;a.shift();continue}const b=[e,...s.ancestors];for(const e of t.$_terms._exclusions)if(e.$_match(h,s.localize(y,b,e),n,{presence:"ignore"})){if(f.push(r("array.excludes",{pos:i,value:h},s.localize(y))),n.abortEarly)return f;d=!0,a.shift();break}if(d)continue;if(t.$_terms.ordered.length){if(a.length){const o=a.shift(),l=o.$_validate(h,s.localize(y,b,o),n);if(l.errors){if(f.push(...l.errors),n.abortEarly)return f}else if("strip"===o._flags.result)c.fastSplice(e,i),--i,--m;else{if(!t._flags.sparse&&void 0===l.value){if(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly)return f;continue}e[i]=l.value}continue}if(!t.$_terms.items.length){if(f.push(r("array.orderedLength",{pos:i,limit:t.$_terms.ordered.length})),n.abortEarly)return f;break}}const v=[];let _=o.length;for(let a=0;a<_;++a){const l=s.localize(y,b,o[a]);l.snapshot();const u=o[a].$_validate(h,l,n);if(v[a]=u,!u.errors){if(e[i]=u.value,p=!0,c.fastSplice(o,a),--a,--_,!t._flags.sparse&&void 0===u.value&&(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly))return f;break}l.restore()}if(p)continue;const w=n.stripUnknown&&!!n.stripUnknown.arrays||!1;_=l.length;for(const a of l){let l;const u=o.indexOf(a);if(-1!==u)l=v[u];else{const o=s.localize(y,b,a);if(o.snapshot(),l=a.$_validate(h,o,n),!l.errors){"strip"===a._flags.result?(c.fastSplice(e,i),--i,--m):t._flags.sparse||void 0!==l.value?e[i]=l.value:(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),d=!0),p=!0;break}o.restore()}if(1===_){if(w){c.fastSplice(e,i),--i,--m,p=!0;break}if(f.push(...l.errors),n.abortEarly)return f;d=!0;break}}if(!d&&(t.$_terms._inclusions.length&&!p)){if(w){c.fastSplice(e,i),--i,--m;continue}if(f.push(r("array.includes",{pos:i,value:h},s.localize(y))),n.abortEarly)return f}}return o.length&&c.fillMissedErrors(t,f,o,e,s,n),a.length&&c.fillOrderedErrors(t,f,a,e,s,n),f.length?f:e},priority:!0,manifest:!1},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:o})=>i.compare(e.length,r,n)?e:t.error("array."+s,{limit:o.limit,value:e}),args:[{name:"limit",ref:!0,assert:i.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},ordered:{method(...e){i.verifyFlat(e,"ordered");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath(()=>this.$_compile(e[r]),r,{append:!0});c.validateSingle(s,t),t.$_mutateRegister(s),t.$_terms.ordered.push(s)}return t.$_mutateRebuild()}},single:{method(e){const t=void 0===e||!!e;return s(!t||!this._flags._arrayItems,"Cannot specify single rule when array has array items"),this.$_setFlag("single",t)}},sort:{method(e={}){i.assertOptions(e,["by","order"]);const t={order:e.order||"ascending"};return e.by&&(t.by=l.ref(e.by,{ancestor:0}),s(!t.by.ancestor,"Cannot sort by ancestor")),this.$_addRule({name:"sort",args:{options:t}})},validate(e,{error:t,state:r,prefs:s,schema:n},{options:o}){const{value:a,errors:i}=c.sort(n,e,o,r,s);if(i)return i;for(let r=0;r<e.length;++r)if(e[r]!==a[r])return t("array.sort",{order:o.order,by:o.by?o.by.key:"value"});return e},convert:!0},sparse:{method(e){const t=void 0===e||!!e;return this._flags.sparse===t?this:(t?this.clone():this.$_addRule("items")).$_setFlag("sparse",t,{clone:!1})}},unique:{method(e,t={}){s(!e||"function"==typeof e||"string"==typeof e,"comparator must be a function or a string"),i.assertOptions(t,["ignoreUndefined","separator"]);const r={name:"unique",args:{options:t,comparator:e}};if(e)if("string"==typeof e){const s=i.default(t.separator,".");r.path=s?e.split(s):[e]}else r.comparator=e;return this.$_addRule(r)},validate(e,{state:t,error:r,schema:a},{comparator:i,options:l},{comparator:c,path:u}){const f={string:Object.create(null),number:Object.create(null),undefined:Object.create(null),boolean:Object.create(null),object:new Map,function:new Map,custom:new Map},m=c||n,h=l.ignoreUndefined;for(let n=0;n<e.length;++n){const a=u?o(e[n],u):e[n],l=c?f.custom:f[typeof a];if(s(l,"Failed to find unique map container for type",typeof a),l instanceof Map){const s=l.entries();let o;for(;!(o=s.next()).done;)if(m(o.value[0],a)){const s=t.localize([...t.path,n],[e,...t.ancestors]),a={pos:n,value:e[n],dupePos:o.value[1],dupeValue:e[o.value[1]]};return u&&(a.path=i),r("array.unique",a,s)}l.set(a,n)}else{if((!h||void 0!==a)&&void 0!==l[a]){const s={pos:n,value:e[n],dupePos:l[a],dupeValue:e[l[a]]};return u&&(s.path=i),r("array.unique",s,t.localize([...t.path,n],[e,...t.ancestors]))}l[a]=n}}return e},args:["comparator","options"],multi:!0}},cast:{set:{from:Array.isArray,to:(e,t)=>new Set(e)}},rebuild(e){e.$_terms._inclusions=[],e.$_terms._exclusions=[],e.$_terms._requireds=[];for(const t of e.$_terms.items)c.validateSingle(t,e),"required"===t._flags.presence?e.$_terms._requireds.push(t):"forbidden"===t._flags.presence?e.$_terms._exclusions.push(t):e.$_terms._inclusions.push(t);for(const t of e.$_terms.ordered)c.validateSingle(t,e)},manifest:{build:(e,t)=>(t.items&&(e=e.items(...t.items)),t.ordered&&(e=e.ordered(...t.ordered)),e)},messages:{"array.base":"{{#label}} must be an array","array.excludes":"{{#label}} contains an excluded value","array.hasKnown":'{{#label}} does not contain at least one required match for type "{#patternLabel}"',"array.hasUnknown":"{{#label}} does not contain at least one required match","array.includes":"{{#label}} does not match any of the allowed types","array.includesRequiredBoth":"{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)","array.includesRequiredKnowns":"{{#label}} does not contain {{#knownMisses}}","array.includesRequiredUnknowns":"{{#label}} does not contain {{#unknownMisses}} required value(s)","array.length":"{{#label}} must contain {{#limit}} items","array.max":"{{#label}} must contain less than or equal to {{#limit}} items","array.min":"{{#label}} must contain at least {{#limit}} items","array.orderedLength":"{{#label}} must contain at most {{#limit}} items","array.sort":"{{#label}} must be sorted in {#order} order by {{#by}}","array.sort.mismatching":"{{#label}} cannot be sorted due to mismatching types","array.sort.unsupported":"{{#label}} cannot be sorted due to unsupported type {#type}","array.sparse":"{{#label}} must not be a sparse array item","array.unique":"{{#label}} contains a duplicate value"}}),c.fillMissedErrors=function(e,t,r,s,n,o){const a=[];let i=0;for(const e of r){const t=e._flags.label;t?a.push(t):++i}a.length?i?t.push(e.$_createError("array.includesRequiredBoth",s,{knownMisses:a,unknownMisses:i},n,o)):t.push(e.$_createError("array.includesRequiredKnowns",s,{knownMisses:a},n,o)):t.push(e.$_createError("array.includesRequiredUnknowns",s,{unknownMisses:i},n,o))},c.fillOrderedErrors=function(e,t,r,s,n,o){const a=[];for(const e of r)"required"===e._flags.presence&&a.push(e);a.length&&c.fillMissedErrors(e,t,a,s,n,o)},c.fastSplice=function(e,t){let r=t;for(;r<e.length;)e[r++]=e[r];--e.length},c.validateSingle=function(e,t){("array"===e.type||e._flags._arrayItems)&&(s(!t._flags.single,"Cannot specify array item with single rule enabled"),t.$_setFlag("_arrayItems",!0,{clone:!1}))},c.sort=function(e,t,r,s,n){const o="ascending"===r.order?1:-1,a=-1*o,i=o,l=(l,u)=>{let f=c.compare(l,u,a,i);if(null!==f)return f;if(r.by&&(l=r.by.resolve(l,s,n),u=r.by.resolve(u,s,n)),f=c.compare(l,u,a,i),null!==f)return f;const m=typeof l;if(m!==typeof u)throw e.$_createError("array.sort.mismatching",t,null,s,n);if("number"!==m&&"string"!==m)throw e.$_createError("array.sort.unsupported",t,{type:m},s,n);return"number"===m?(l-u)*o:l<u?a:i};try{return{value:t.slice().sort(l)}}catch(e){return{errors:e}}},c.compare=function(e,t,r,s){return e===t?0:void 0===e?1:void 0===t?-1:null===e?s:null===t?r:null}},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(21),i={isBool:function(e){return"boolean"==typeof e}};e.exports=n.extend({type:"boolean",flags:{sensitive:{default:!1}},terms:{falsy:{init:null,manifest:"values"},truthy:{init:null,manifest:"values"}},coerce(e,{schema:t}){if("boolean"!=typeof e){if("string"==typeof e){const r=t._flags.sensitive?e:e.toLowerCase();e="true"===r||"false"!==r&&e}return"boolean"!=typeof e&&(e=t.$_terms.truthy&&t.$_terms.truthy.has(e,null,null,!t._flags.sensitive)||(!t.$_terms.falsy||!t.$_terms.falsy.has(e,null,null,!t._flags.sensitive))&&e),{value:e}}},validate(e,{error:t}){if("boolean"!=typeof e)return{value:e,errors:t("boolean.base")}},rules:{truthy:{method(...e){o.verifyFlat(e,"truthy");const t=this.clone();t.$_terms.truthy=t.$_terms.truthy||new a;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call truthy with undefined"),t.$_terms.truthy.add(n)}return t}},falsy:{method(...e){o.verifyFlat(e,"falsy");const t=this.clone();t.$_terms.falsy=t.$_terms.falsy||new a;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call falsy with undefined"),t.$_terms.falsy.add(n)}return t}},sensitive:{method(e=!0){return this.$_setFlag("sensitive",e)}}},cast:{number:{from:i.isBool,to:(e,t)=>e?1:0},string:{from:i.isBool,to:(e,t)=>e?"true":"false"}},manifest:{build:(e,t)=>(t.truthy&&(e=e.truthy(...t.truthy)),t.falsy&&(e=e.falsy(...t.falsy)),e)},messages:{"boolean.base":"{{#label}} must be a boolean"}})},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(7),i={isDate:function(e){return e instanceof Date}};e.exports=n.extend({type:"date",coerce:{from:["number","string"],method:(e,{schema:t})=>({value:i.parse(e,t._flags.format)||e})},validate(e,{schema:t,error:r,prefs:s}){if(e instanceof Date&&!isNaN(e.getTime()))return;const n=t._flags.format;return s.convert&&n&&"string"==typeof e?{value:e,errors:r("date.format",{format:n})}:{value:e,errors:r("date.base")}},rules:{compare:{method:!1,validate(e,t,{date:r},{name:s,operator:n,args:a}){const i="now"===r?Date.now():r.getTime();return o.compare(e.getTime(),i,n)?e:t.error("date."+s,{limit:a.date,value:e})},args:[{name:"date",ref:!0,normalize:e=>"now"===e?e:i.parse(e),assert:e=>null!==e,message:"must have a valid date format"}]},format:{method(e){return s(["iso","javascript","unix"].includes(e),"Unknown date format",e),this.$_setFlag("format",e)}},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{date:e},operator:">"})}},iso:{method(){return this.format("iso")}},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{date:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{date:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{date:e},operator:">="})}},timestamp:{method(e="javascript"){return s(["javascript","unix"].includes(e),'"type" must be one of "javascript, unix"'),this.format(e)}}},cast:{number:{from:i.isDate,to:(e,t)=>e.getTime()},string:{from:i.isDate,to:(e,{prefs:t})=>a.date(e,t)}},messages:{"date.base":"{{#label}} must be a valid date","date.format":'{{#label}} must be in {msg("date.format." + #format) || #format} format',"date.greater":'{{#label}} must be greater than "{{#limit}}"',"date.less":'{{#label}} must be less than "{{#limit}}"',"date.max":'{{#label}} must be less than or equal to "{{#limit}}"',"date.min":'{{#label}} must be larger than or equal to "{{#limit}}"',"date.format.iso":"ISO 8601 date","date.format.javascript":"timestamp or number of milliseconds","date.format.unix":"timestamp or number of seconds"}}),i.parse=function(e,t){if(e instanceof Date)return e;if("string"!=typeof e&&(isNaN(e)||!isFinite(e)))return null;if(/^\s*$/.test(e))return null;if("iso"===t)return o.isIsoDate(e)?i.date(e.toString()):null;const r=e;if("string"==typeof e&&/^[+-]?\d+(\.\d+)?$/.test(e)&&(e=parseFloat(e)),t){if("javascript"===t)return i.date(1*e);if("unix"===t)return i.date(1e3*e);if("string"==typeof r)return null}return i.date(e)},i.date=function(e){const t=new Date(e);return isNaN(t.getTime())?null:t}},function(e,t,r){"use strict";const s=r(0),n=r(22);e.exports=n.extend({type:"function",properties:{typeof:"function"},rules:{arity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"arity",args:{n:e}})},validate:(e,t,{n:r})=>e.length===r?e:t.error("function.arity",{n:r})},class:{method(){return this.$_addRule("class")},validate:(e,t)=>/^\s*class\s/.test(e.toString())?e:t.error("function.class",{value:e})},minArity:{method(e){return s(Number.isSafeInteger(e)&&e>0,"n must be a strict positive integer"),this.$_addRule({name:"minArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length>=r?e:t.error("function.minArity",{n:r})},maxArity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"maxArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length<=r?e:t.error("function.maxArity",{n:r})}},messages:{"function.arity":"{{#label}} must have an arity of {{#n}}","function.class":"{{#label}} must be a class","function.maxArity":"{{#label}} must have an arity lesser or equal to {{#n}}","function.minArity":"{{#label}} must have an arity greater or equal to {{#n}}"}})},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(20),a=r(6),i={};e.exports=function(e,t,r={}){if(s(e&&"object"==typeof e,"Invalid defaults value: must be an object"),s(!t||!0===t||"object"==typeof t,"Invalid source value: must be true, falsy or an object"),s("object"==typeof r,"Invalid options: must be an object"),!t)return null;if(r.shallow)return i.applyToDefaultsWithShallow(e,t,r);const a=n(e);if(!0===t)return a;const l=void 0!==r.nullOverride&&r.nullOverride;return o(a,t,{nullOverride:l,mergeArrays:!1})},i.applyToDefaultsWithShallow=function(e,t,r){const l=r.shallow;s(Array.isArray(l),"Invalid keys");const c=new Map,u=!0===t?null:new Set;for(let r of l){r=Array.isArray(r)?r:r.split(".");const s=a(e,r);s&&"object"==typeof s?c.set(s,u&&a(t,r)||s):u&&u.add(r)}const f=n(e,{},c);if(!u)return f;for(const e of u)i.reachCopy(f,t,e);return o(f,t,{mergeArrays:!1,nullOverride:!1})},i.reachCopy=function(e,t,r){for(const e of r){if(!(e in t))return;t=t[e]}const s=t;let n=e;for(let e=0;e<r.length-1;++e){const t=r[e];"object"!=typeof n[t]&&(n[t]={}),n=n[t]}n[r[r.length-1]]=s}},function(e,t,r){"use strict";const s=r(0),n={};t.Sorter=class{constructor(){this._items=[],this.nodes=[]}add(e,t){const r=[].concat((t=t||{}).before||[]),n=[].concat(t.after||[]),o=t.group||"?",a=t.sort||0;s(!r.includes(o),"Item cannot come before itself: ".concat(o)),s(!r.includes("?"),"Item cannot come before unassociated items"),s(!n.includes(o),"Item cannot come after itself: ".concat(o)),s(!n.includes("?"),"Item cannot come after unassociated items"),Array.isArray(e)||(e=[e]);for(const t of e){const e={seq:this._items.length,sort:a,before:r,after:n,group:o,node:t};this._items.push(e)}const i=this._sort();return s(i,"item","?"!==o?"added into group ".concat(o):"","created a dependencies error"),this.nodes}merge(e){Array.isArray(e)||(e=[e]);for(const t of e)if(t)for(const e of t._items)this._items.push(Object.assign({},e));this._items.sort(n.mergeSort);for(let e=0;e<this._items.length;++e)this._items[e].seq=e;const t=this._sort();return s(t,"merge created a dependencies error"),this.nodes}_sort(){const e={},t=Object.create(null),r=Object.create(null);for(const s of this._items){const n=s.seq,o=s.group;r[o]=r[o]||[],r[o].push(n),e[n]=s.before;for(const e of s.after)t[e]=t[e]||[],t[e].push(n)}for(const t in e){const s=[];for(const n in e[t]){const o=e[t][n];r[o]=r[o]||[],s.push(...r[o])}e[t]=s}for(const s in t)if(r[s])for(const n of r[s])e[n].push(...t[s]);const s={};for(const t in e){const r=e[t];for(const e of r)s[e]=s[e]||[],s[e].push(t)}const n={},o=[];for(let e=0;e<this._items.length;++e){let t=e;if(s[e]){t=null;for(let e=0;e<this._items.length;++e){if(!0===n[e])continue;s[e]||(s[e]=[]);const r=s[e].length;let o=0;for(let t=0;t<r;++t)n[s[e][t]]&&++o;if(o===r){t=e;break}}}null!==t&&(n[t]=!0,o.push(t))}if(o.length!==this._items.length)return!1;const a={};for(const e of this._items)a[e.seq]=e;this._items=[],this.nodes=[];for(const e of o){const t=a[e];this.nodes.push(t.node),this._items.push(t)}return!0}},n.mergeSort=(e,t)=>e.sort===t.sort?0:e.sort<t.sort?-1:1},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(8),i=r(4),l={};e.exports=n.extend({type:"link",properties:{schemaChain:!0},terms:{link:{init:null,manifest:"single",register:!1}},args:(e,t)=>e.ref(t),validate(e,{schema:t,state:r,prefs:n}){s(t.$_terms.link,"Uninitialized link schema");const o=l.generate(t,e,r,n),a=t.$_terms.link[0].ref;return o.$_validate(e,r.nest(o,"link:".concat(a.display,":").concat(o.type)),n)},generate:(e,t,r,s)=>l.generate(e,t,r,s),rules:{ref:{method(e){s(!this.$_terms.link,"Cannot reinitialize schema"),e=a.ref(e),s("value"===e.type||"local"===e.type,"Invalid reference type:",e.type),s("local"===e.type||"root"===e.ancestor||e.ancestor>0,"Link cannot reference itself");const t=this.clone();return t.$_terms.link=[{ref:e}],t}},relative:{method(e=!0){return this.$_setFlag("relative",e)}}},overrides:{concat(e){s(this.$_terms.link,"Uninitialized link schema"),s(o.isSchema(e),"Invalid schema object"),s("link"!==e.type,"Cannot merge type link with another link");const t=this.clone();return t.$_terms.whens||(t.$_terms.whens=[]),t.$_terms.whens.push({concat:e}),t.$_mutateRebuild()}},manifest:{build:(e,t)=>(s(t.link,"Invalid link description missing link"),e.ref(t.link))}}),l.generate=function(e,t,r,s){let n=r.mainstay.links.get(e);if(n)return n._generate(t,r,s).schema;const o=e.$_terms.link[0].ref,{perspective:a,path:i}=l.perspective(o,r);l.assert(a,"which is outside of schema boundaries",o,e,r,s);try{n=i.length?a.$_reach(i):a}catch(t){l.assert(!1,"to non-existing schema",o,e,r,s)}return l.assert("link"!==n.type,"which is another link",o,e,r,s),e._flags.relative||r.mainstay.links.set(e,n),n._generate(t,r,s).schema},l.perspective=function(e,t){if("local"===e.type){for(const{schema:r,key:s}of t.schemas){if((r._flags.id||s)===e.path[0])return{perspective:r,path:e.path.slice(1)};if(r.$_terms.shared)for(const t of r.$_terms.shared)if(t._flags.id===e.path[0])return{perspective:t,path:e.path.slice(1)}}return{perspective:null,path:null}}return"root"===e.ancestor?{perspective:t.schemas[t.schemas.length-1].schema,path:e.path}:{perspective:t.schemas[e.ancestor]&&t.schemas[e.ancestor].schema,path:e.path}},l.assert=function(e,t,r,n,o,a){e||s(!1,'"'.concat(i.label(n._flags,o,a),'" contains link reference "').concat(r.display,'" ').concat(t))}},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a={numberRx:/^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,precisionRx:/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/};e.exports=n.extend({type:"number",flags:{unsafe:{default:!1}},coerce:{from:"string",method(e,{schema:t,error:r}){const s=e.match(a.numberRx);if(!s)return;e=e.trim();const n={value:parseFloat(e)};if(0===n.value&&(n.value=0),!t._flags.unsafe)if(e.match(/e/i)){if(a.normalizeExponent("".concat(n.value/Math.pow(10,s[1]),"e").concat(s[1]))!==a.normalizeExponent(e))return n.errors=r("number.unsafe"),n}else{const t=n.value.toString();if(t.match(/e/i))return n;if(t!==a.normalizeDecimal(e))return n.errors=r("number.unsafe"),n}return n}},validate(e,{schema:t,error:r,prefs:s}){if(e===1/0||e===-1/0)return{value:e,errors:r("number.infinity")};if(!o.isNumber(e))return{value:e,errors:r("number.base")};const n={value:e};if(s.convert){const e=t.$_getRule("precision");if(e){const t=Math.pow(10,e.args.limit);n.value=Math.round(n.value*t)/t}}return 0===n.value&&(n.value=0),!t._flags.unsafe&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&(n.errors=r("number.unsafe")),n},rules:{compare:{method:!1,validate:(e,t,{limit:r},{name:s,operator:n,args:a})=>o.compare(e,r,n)?e:t.error("number."+s,{limit:a.limit,value:e}),args:[{name:"limit",ref:!0,assert:o.isNumber,message:"must be a number"}]},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{limit:e},operator:">"})}},integer:{method(){return this.$_addRule("integer")},validate:(e,t)=>Math.trunc(e)-e==0?e:t.error("number.integer")},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{limit:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{limit:e},operator:">="})}},multiple:{method(e){return this.$_addRule({name:"multiple",args:{base:e}})},validate:(e,t,{base:r},s)=>e%r==0?e:t.error("number.multiple",{multiple:s.args.base,value:e}),args:[{name:"base",ref:!0,assert:e=>"number"==typeof e&&isFinite(e)&&e>0,message:"must be a positive number"}],multi:!0},negative:{method(){return this.sign("negative")}},port:{method(){return this.$_addRule("port")},validate:(e,t)=>Number.isSafeInteger(e)&&e>=0&&e<=65535?e:t.error("number.port")},positive:{method(){return this.sign("positive")}},precision:{method(e){return s(Number.isSafeInteger(e),"limit must be an integer"),this.$_addRule({name:"precision",args:{limit:e}})},validate(e,t,{limit:r}){const s=e.toString().match(a.precisionRx);return Math.max((s[1]?s[1].length:0)-(s[2]?parseInt(s[2],10):0),0)<=r?e:t.error("number.precision",{limit:r,value:e})},convert:!0},sign:{method(e){return s(["negative","positive"].includes(e),"Invalid sign",e),this.$_addRule({name:"sign",args:{sign:e}})},validate:(e,t,{sign:r})=>"negative"===r&&e<0||"positive"===r&&e>0?e:t.error("number.".concat(r))},unsafe:{method(e=!0){return s("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("unsafe",e)}}},cast:{string:{from:e=>"number"==typeof e,to:(e,t)=>e.toString()}},messages:{"number.base":"{{#label}} must be a number","number.greater":"{{#label}} must be greater than {{#limit}}","number.infinity":"{{#label}} cannot be infinity","number.integer":"{{#label}} must be an integer","number.less":"{{#label}} must be less than {{#limit}}","number.max":"{{#label}} must be less than or equal to {{#limit}}","number.min":"{{#label}} must be larger than or equal to {{#limit}}","number.multiple":"{{#label}} must be a multiple of {{#multiple}}","number.negative":"{{#label}} must be a negative number","number.port":"{{#label}} must be a valid port","number.positive":"{{#label}} must be a positive number","number.precision":"{{#label}} must have no more than {{#limit}} decimal places","number.unsafe":"{{#label}} must be a safe number"}}),a.normalizeExponent=function(e){return e.replace(/E/,"e").replace(/\.(\d*[1-9])?0+e/,".$1e").replace(/\.e/,"e").replace(/e\+/,"e").replace(/^\+/,"").replace(/^(-?)0+([1-9])/,"$1$2")},a.normalizeDecimal=function(e){return(e=e.replace(/^\+/,"").replace(/\.0+$/,"").replace(/^(-?)\.([^\.]*)$/,"$10.$2").replace(/^(-?)0+([1-9])/,"$1$2")).includes(".")&&e.endsWith("0")&&(e=e.replace(/0+$/,"")),"-0"===e?"0":e}},function(e,t,r){"use strict";const s=r(22);e.exports=s.extend({type:"object",cast:{map:{from:e=>e&&"object"==typeof e,to:(e,t)=>new Map(Object.entries(e))}}})},function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(0),i=r(23),l=r(49),c=r(50),u=r(27),f=r(51),m=r(26),h=r(3),d=r(1),p={tlds:f instanceof Set&&{tlds:{allow:f,deny:null}},base64Regex:{true:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/},false:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/}},dataUriRegex:/^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/,hexRegex:/^[a-f0-9]+$/i,ipRegex:c.regex().regex,isoDurationRegex:/^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/,guidBrackets:{"{":"}","[":"]","(":")","":""},guidVersions:{uuidv1:"1",uuidv2:"2",uuidv3:"3",uuidv4:"4",uuidv5:"5"},cidrPresences:["required","optional","forbidden"],normalizationForms:["NFC","NFD","NFKC","NFKD"]};e.exports=h.extend({type:"string",flags:{insensitive:{default:!1},truncate:{default:!1}},terms:{replacements:{init:null}},coerce:{from:"string",method(e,{schema:t,state:r,prefs:s}){const n=t.$_getRule("normalize");n&&(e=e.normalize(n.args.form));const o=t.$_getRule("case");o&&(e="upper"===o.args.direction?e.toLocaleUpperCase():e.toLocaleLowerCase());const a=t.$_getRule("trim");if(a&&a.args.enabled&&(e=e.trim()),t.$_terms.replacements)for(const r of t.$_terms.replacements)e=e.replace(r.pattern,r.replacement);const i=t.$_getRule("hex");if(i&&i.args.options.byteAligned&&e.length%2!=0&&(e="0".concat(e)),t.$_getRule("isoDate")){const t=p.isoDate(e);t&&(e=t)}if(t._flags.truncate){const n=t.$_getRule("max");if(n){let o=n.args.limit;if(d.isResolvable(o)&&(o=o.resolve(e,r,s),!d.limit(o)))return{value:e,errors:t.$_createError("any.ref",o,{ref:n.args.limit,arg:"limit",reason:"must be a positive integer"},r,s)};e=e.slice(0,o)}}return{value:e}}},validate:(e,{error:t})=>"string"!=typeof e?{value:e,errors:t("string.base")}:""===e?{value:e,errors:t("string.empty")}:void 0,rules:{alphanum:{method(){return this.$_addRule("alphanum")},validate:(e,t)=>/^[a-zA-Z0-9]+$/.test(e)?e:t.error("string.alphanum")},base64:{method(e={}){return d.assertOptions(e,["paddingRequired","urlSafe"]),e=n({urlSafe:!1,paddingRequired:!0},e),a("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),a("boolean"==typeof e.urlSafe,"urlSafe must be boolean"),this.$_addRule({name:"base64",args:{options:e}})},validate:(e,t,{options:r})=>p.base64Regex[r.paddingRequired][r.urlSafe].test(e)?e:t.error("string.base64")},case:{method(e){return a(["lower","upper"].includes(e),"Invalid case:",e),this.$_addRule({name:"case",args:{direction:e}})},validate:(e,t,{direction:r})=>"lower"===r&&e===e.toLocaleLowerCase()||"upper"===r&&e===e.toLocaleUpperCase()?e:t.error("string.".concat(r,"case")),convert:!0},creditCard:{method(){return this.$_addRule("creditCard")},validate(e,t){let r=e.length,s=0,n=1;for(;r--;){const t=e.charAt(r)*n;s+=t-9*(t>9),n^=3}return s>0&&s%10==0?e:t.error("string.creditCard")}},dataUri:{method(e={}){return d.assertOptions(e,["paddingRequired"]),e=n({paddingRequired:!0},e),a("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),this.$_addRule({name:"dataUri",args:{options:e}})},validate(e,t,{options:r}){const s=e.match(p.dataUriRegex);if(s){if(!s[2])return e;if("base64"!==s[2])return e;if(p.base64Regex[r.paddingRequired].false.test(s[3]))return e}return t.error("string.dataUri")}},domain:{method(e){e&&d.assertOptions(e,["allowUnicode","minDomainSegments","tlds"]);const t=p.addressOptions(e);return this.$_addRule({name:"domain",args:{options:e},address:t})},validate:(e,t,r,{address:s})=>i.isValid(e,s)?e:t.error("string.domain")},email:{method(e={}){d.assertOptions(e,["allowUnicode","ignoreLength","minDomainSegments","multiple","separator","tlds"]),a(void 0===e.multiple||"boolean"==typeof e.multiple,"multiple option must be an boolean");const t=p.addressOptions(e),r=new RegExp("\\s*[".concat(e.separator?u(e.separator):",","]\\s*"));return this.$_addRule({name:"email",args:{options:e},regex:r,address:t})},validate(e,t,{options:r},{regex:s,address:n}){const o=r.multiple?e.split(s):[e],a=[];for(const e of o)l.isValid(e,n)||a.push(e);return a.length?t.error("string.email",{value:e,invalids:a}):e}},guid:{alias:"uuid",method(e={}){d.assertOptions(e,["version"]);let t="";if(e.version){const r=[].concat(e.version);a(r.length>=1,"version must have at least 1 valid version specified");const s=new Set;for(let e=0;e<r.length;++e){const n=r[e];a("string"==typeof n,"version at position "+e+" must be a string");const o=p.guidVersions[n.toLowerCase()];a(o,"version at position "+e+" must be one of "+Object.keys(p.guidVersions).join(", ")),a(!s.has(o),"version at position "+e+" must not be a duplicate"),t+=o,s.add(o)}}const r=new RegExp("^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[".concat(t||"0-9A-F","][0-9A-F]{3}\\2?[").concat(t?"89AB":"0-9A-F","][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$"),"i");return this.$_addRule({name:"guid",args:{options:e},regex:r})},validate(e,t,r,{regex:s}){const n=s.exec(e);return n?p.guidBrackets[n[1]]!==n[n.length-1]?t.error("string.guid"):e:t.error("string.guid")}},hex:{method(e={}){return d.assertOptions(e,["byteAligned"]),e=n({byteAligned:!1},e),a("boolean"==typeof e.byteAligned,"byteAligned must be boolean"),this.$_addRule({name:"hex",args:{options:e}})},validate:(e,t,{options:r})=>p.hexRegex.test(e)?r.byteAligned&&e.length%2!=0?t.error("string.hexAlign"):e:t.error("string.hex")},hostname:{method(){return this.$_addRule("hostname")},validate:(e,t)=>i.isValid(e,{minDomainSegments:1})||p.ipRegex.test(e)?e:t.error("string.hostname")},insensitive:{method(){return this.$_setFlag("insensitive",!0)}},ip:{method(e={}){d.assertOptions(e,["cidr","version"]);const{cidr:t,versions:r,regex:s}=c.regex(e),n=e.version?r:void 0;return this.$_addRule({name:"ip",args:{options:{cidr:t,version:n}},regex:s})},validate:(e,t,{options:r},{regex:s})=>s.test(e)?e:r.version?t.error("string.ipVersion",{value:e,cidr:r.cidr,version:r.version}):t.error("string.ip",{value:e,cidr:r.cidr})},isoDate:{method(){return this.$_addRule("isoDate")},validate:(e,{error:t})=>p.isoDate(e)?e:t("string.isoDate")},isoDuration:{method(){return this.$_addRule("isoDuration")},validate:(e,t)=>p.isoDurationRegex.test(e)?e:t.error("string.isoDuration")},length:{method(e,t){return p.length(this,"length",e,"=",t)},validate(e,t,{limit:r,encoding:s},{name:n,operator:o,args:a}){const i=!s&&e.length;return d.compare(i,r,o)?e:t.error("string."+n,{limit:a.limit,value:e,encoding:s})},args:[{name:"limit",ref:!0,assert:d.limit,message:"must be a positive integer"},"encoding"]},lowercase:{method(){return this.case("lower")}},max:{method(e,t){return p.length(this,"max",e,"<=",t)},args:["limit","encoding"]},min:{method(e,t){return p.length(this,"min",e,">=",t)},args:["limit","encoding"]},normalize:{method(e="NFC"){return a(p.normalizationForms.includes(e),"normalization form must be one of "+p.normalizationForms.join(", ")),this.$_addRule({name:"normalize",args:{form:e}})},validate:(e,{error:t},{form:r})=>e===e.normalize(r)?e:t("string.normalize",{value:e,form:r}),convert:!0},pattern:{alias:"regex",method(e,t={}){a(e instanceof RegExp,"regex must be a RegExp"),a(!e.flags.includes("g")&&!e.flags.includes("y"),"regex should not use global or sticky mode"),"string"==typeof t&&(t={name:t}),d.assertOptions(t,["invert","name"]);const r=["string.pattern",t.invert?".invert":"",t.name?".name":".base"].join("");return this.$_addRule({name:"pattern",args:{regex:e,options:t},errorCode:r})},validate:(e,t,{regex:r,options:s},{errorCode:n})=>r.test(e)^s.invert?e:t.error(n,{name:s.name,regex:r,value:e}),args:["regex","options"],multi:!0},replace:{method(e,t){"string"==typeof e&&(e=new RegExp(u(e),"g")),a(e instanceof RegExp,"pattern must be a RegExp"),a("string"==typeof t,"replacement must be a String");const r=this.clone();return r.$_terms.replacements||(r.$_terms.replacements=[]),r.$_terms.replacements.push({pattern:e,replacement:t}),r}},token:{method(){return this.$_addRule("token")},validate:(e,t)=>/^\w+$/.test(e)?e:t.error("string.token")},trim:{method(e=!0){return a("boolean"==typeof e,"enabled must be a boolean"),this.$_addRule({name:"trim",args:{enabled:e}})},validate:(e,t,{enabled:r})=>r&&e!==e.trim()?t.error("string.trim"):e,convert:!0},truncate:{method(e=!0){return a("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("truncate",e)}},uppercase:{method(){return this.case("upper")}},uri:{method(e={}){d.assertOptions(e,["allowRelative","allowQuerySquareBrackets","domain","relativeOnly","scheme"]),e.domain&&d.assertOptions(e.domain,["allowUnicode","minDomainSegments","tlds"]);const{regex:t,scheme:r}=m.regex(e),s=e.domain?p.addressOptions(e.domain):null;return this.$_addRule({name:"uri",args:{options:e},regex:t,domain:s,scheme:r})},validate(e,t,{options:r},{regex:s,domain:n,scheme:o}){if(["http:/","https:/"].includes(e))return t.error("string.uri");const a=s.exec(e);if(a){if(n){const e=a[1]||a[2];if(!i.isValid(e,n))return t.error("string.domain",{value:e})}return e}return r.relativeOnly?t.error("string.uriRelativeOnly"):r.scheme?t.error("string.uriCustomScheme",{scheme:o,value:e}):t.error("string.uri")}}},manifest:{build(e,t){if(t.replacements)for(const{pattern:r,replacement:s}of t.replacements)e=e.replace(r,s);return e}},messages:{"string.alphanum":"{{#label}} must only contain alpha-numeric characters","string.base":"{{#label}} must be a string","string.base64":"{{#label}} must be a valid base64 string","string.creditCard":"{{#label}} must be a credit card","string.dataUri":"{{#label}} must be a valid dataUri string","string.domain":"{{#label}} must contain a valid domain name","string.email":"{{#label}} must be a valid email","string.empty":"{{#label}} is not allowed to be empty","string.guid":"{{#label}} must be a valid GUID","string.hex":"{{#label}} must only contain hexadecimal characters","string.hexAlign":"{{#label}} hex decoded representation must be byte aligned","string.hostname":"{{#label}} must be a valid hostname","string.ip":"{{#label}} must be a valid ip address with a {{#cidr}} CIDR","string.ipVersion":"{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR","string.isoDate":"{{#label}} must be in iso format","string.isoDuration":"{{#label}} must be a valid ISO 8601 duration","string.length":"{{#label}} length must be {{#limit}} characters long","string.lowercase":"{{#label}} must only contain lowercase characters","string.max":"{{#label}} length must be less than or equal to {{#limit}} characters long","string.min":"{{#label}} length must be at least {{#limit}} characters long","string.normalize":"{{#label}} must be unicode normalized in the {{#form}} form","string.token":"{{#label}} must only contain alpha-numeric and underscore characters","string.pattern.base":'{{#label}} with value "{[.]}" fails to match the required pattern: {{#regex}}',"string.pattern.name":'{{#label}} with value "{[.]}" fails to match the {{#name}} pattern',"string.pattern.invert.base":'{{#label}} with value "{[.]}" matches the inverted pattern: {{#regex}}',"string.pattern.invert.name":'{{#label}} with value "{[.]}" matches the inverted {{#name}} pattern',"string.trim":"{{#label}} must not have leading or trailing whitespace","string.uri":"{{#label}} must be a valid uri","string.uriCustomScheme":"{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern","string.uriRelativeOnly":"{{#label}} must be a valid relative uri","string.uppercase":"{{#label}} must only contain uppercase characters"}}),p.addressOptions=function(e){if(!e)return e;if(a(void 0===e.minDomainSegments||Number.isSafeInteger(e.minDomainSegments)&&e.minDomainSegments>0,"minDomainSegments must be a positive integer"),!1===e.tlds)return e;if(!0===e.tlds||void 0===e.tlds)return a(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds);a("object"==typeof e.tlds,"tlds must be true, false, or an object");const t=e.tlds.deny;if(t)return Array.isArray(t)&&(e=Object.assign({},e,{tlds:{deny:new Set(t)}})),a(e.tlds.deny instanceof Set,"tlds.deny must be an array, Set, or boolean"),a(!e.tlds.allow,"Cannot specify both tlds.allow and tlds.deny lists"),e;const r=e.tlds.allow;return r?!0===r?(a(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds)):(Array.isArray(r)&&(e=Object.assign({},e,{tlds:{allow:new Set(r)}})),a(e.tlds.allow instanceof Set,"tlds.allow must be an array, Set, or boolean"),e):e},p.isoDate=function(e){if(!d.isIsoDate(e))return null;const t=new Date(e);return isNaN(t.getTime())?null:t.toISOString()},p.length=function(e,t,r,s,n){return a(!n||!1,"Invalid encoding:",n),e.$_addRule({name:t,method:"length",args:{limit:r,encoding:n},operator:s})}},function(e,t,r){"use strict";const s=r(24),n=r(23),o=r(25),a={nonAsciiRx:/[^\x00-\x7f]/,encoder:new(s.TextEncoder||TextEncoder)};t.analyze=function(e,t){return a.email(e,t)},t.isValid=function(e,t){return!a.email(e,t)},a.email=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: email must be a string");if(!e)return o.code("EMPTY_STRING");const r=!a.nonAsciiRx.test(e);if(!r){if(!1===t.allowUnicode)return o.code("FORBIDDEN_UNICODE");e=e.normalize("NFC")}const s=e.split("@");if(2!==s.length)return s.length>2?o.code("MULTIPLE_AT_CHAR"):o.code("MISSING_AT_CHAR");const[i,l]=s;if(!i)return o.code("EMPTY_LOCAL");if(!t.ignoreLength){if(e.length>254)return o.code("ADDRESS_TOO_LONG");if(a.encoder.encode(i).length>64)return o.code("LOCAL_TOO_LONG")}return a.local(i,r)||n.analyze(l,t)},a.local=function(e,t){const r=e.split(".");for(const e of r){if(!e.length)return o.code("EMPTY_LOCAL_SEGMENT");if(t){if(!a.atextRx.test(e))return o.code("INVALID_LOCAL_CHARS")}else for(const t of e){if(a.atextRx.test(t))continue;const e=a.binary(t);if(!a.atomRx.test(e))return o.code("INVALID_LOCAL_CHARS")}}},a.binary=function(e){return Array.from(a.encoder.encode(e)).map(e=>String.fromCharCode(e)).join("")},a.atextRx=/^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/,a.atomRx=new RegExp(["(?:[\\xc2-\\xdf][\\x80-\\xbf])","(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})","(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"].join("|"))},function(e,t,r){"use strict";const s=r(0),n=r(26);t.regex=function(e={}){s(void 0===e.cidr||"string"==typeof e.cidr,"options.cidr must be a string");const t=e.cidr?e.cidr.toLowerCase():"optional";s(["required","optional","forbidden"].includes(t),"options.cidr must be one of required, optional, forbidden"),s(void 0===e.version||"string"==typeof e.version||Array.isArray(e.version),"options.version must be a string or an array of string");let r=e.version||["ipv4","ipv6","ipvfuture"];Array.isArray(r)||(r=[r]),s(r.length>=1,"options.version must have at least 1 version specified");for(let e=0;e<r.length;++e)s("string"==typeof r[e],"options.version must only contain strings"),r[e]=r[e].toLowerCase(),s(["ipv4","ipv6","ipvfuture"].includes(r[e]),"options.version contains unknown version "+r[e]+" - must be one of ipv4, ipv6, ipvfuture");r=Array.from(new Set(r));const o=r.map(e=>{if("forbidden"===t)return n.ip[e];const r="\\/".concat("ipv4"===e?n.ip.v4Cidr:n.ip.v6Cidr);return"required"===t?"".concat(n.ip[e]).concat(r):"".concat(n.ip[e],"(?:").concat(r,")?")}),a="(?:".concat(o.join("|"),")"),i=new RegExp("^".concat(a,"$"));return{cidr:t,versions:r,regex:i,raw:a}}},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(3),o={};o.Map=class extends Map{slice(){return new o.Map(this)}},e.exports=n.extend({type:"symbol",terms:{map:{init:new o.Map}},coerce:{method(e,{schema:t,error:r}){const s=t.$_terms.map.get(e);return s&&(e=s),t._flags.only&&"symbol"!=typeof e?{value:e,errors:r("symbol.map",{map:t.$_terms.map})}:{value:e}}},validate(e,{error:t}){if("symbol"!=typeof e)return{value:e,errors:t("symbol.base")}},rules:{map:{method(e){e&&!e[Symbol.iterator]&&"object"==typeof e&&(e=Object.entries(e)),s(e&&e[Symbol.iterator],"Iterable must be an iterable or object");const t=this.clone(),r=[];for(const n of e){s(n&&n[Symbol.iterator],"Entry must be an iterable");const[e,o]=n;s("object"!=typeof e&&"function"!=typeof e&&"symbol"!=typeof e,"Key must not be of type object, function, or Symbol"),s("symbol"==typeof o,"Value must be a Symbol"),t.$_terms.map.set(e,o),r.push(o)}return t.valid(...r)}}},manifest:{build:(e,t)=>(t.map&&(e=e.map(t.map)),e)},messages:{"symbol.base":"{{#label}} must be a symbol","symbol.map":"{{#label}} must be one of {{#map}}"}})}])}));

/***/ }),

/***/ "../node_modules/@material-ui/icons/AlternateEmail.js":
/*!************************************************************!*\
  !*** ../node_modules/@material-ui/icons/AlternateEmail.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
}), 'AlternateEmail');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Check.js":
/*!***************************************************!*\
  !*** ../node_modules/@material-ui/icons/Check.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/PersonAdd.js":
/*!*******************************************************!*\
  !*** ../node_modules/@material-ui/icons/PersonAdd.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'PersonAdd');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/VerifiedUser.js":
/*!**********************************************************!*\
  !*** ../node_modules/@material-ui/icons/VerifiedUser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
}), 'VerifiedUser');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/Visibility.js":
/*!********************************************************!*\
  !*** ../node_modules/@material-ui/icons/Visibility.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
}), 'Visibility');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/VisibilityOff.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/icons/VisibilityOff.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
}), 'VisibilityOff');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/VpnKey.js":
/*!****************************************************!*\
  !*** ../node_modules/@material-ui/icons/VpnKey.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
}), 'VpnKey');

exports.default = _default;

/***/ }),

/***/ "../node_modules/formik/dist/formik.esm.js":
/*!*************************************************!*\
  !*** ../node_modules/formik/dist/formik.esm.js ***!
  \*************************************************/
/*! exports provided: ErrorMessage, FastField, Field, FieldArray, Form, Formik, FormikConsumer, FormikContext, FormikProvider, connect, getActiveElement, getIn, insert, isEmptyArray, isEmptyChildren, isFunction, isInputEvent, isInteger, isNaN, isObject, isPromise, isString, move, prepareDataForValidation, replace, setIn, setNestedObjectValues, swap, useField, useFormik, useFormikContext, validateYupSchema, withFormik, yupToFormErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastField", function() { return FastField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldArray", function() { return FieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formik", function() { return Formik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikConsumer", function() { return FormikConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikContext", function() { return FormikContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormikProvider", function() { return FormikProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveElement", function() { return getActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyChildren", function() { return isEmptyChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputEvent", function() { return isInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareDataForValidation", function() { return prepareDataForValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNestedObjectValues", function() { return setNestedObjectValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useField", function() { return useField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormik", function() { return useFormik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormikContext", function() { return useFormikContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateYupSchema", function() { return validateYupSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFormik", function() { return withFormik; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yupToFormErrors", function() { return yupToFormErrors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ "../node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ "../node_modules/formik/node_modules/deepmerge/dist/es.js");
/* harmony import */ var lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/isPlainObject */ "../node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var lodash_es_clone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/clone */ "../node_modules/lodash-es/clone.js");
/* harmony import */ var lodash_es_toPath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/toPath */ "../node_modules/lodash-es/toPath.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-warning */ "../node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hoist-non-react-statics */ "../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es/cloneDeep */ "../node_modules/lodash-es/cloneDeep.js");










function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/** @private is the value an empty array? */

var isEmptyArray = function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
/** @private is the given object an Object? */

var isObject = function isObject(obj) {
  return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */

var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */
// eslint-disable-next-line no-self-compare

var isNaN$1 = function isNaN(obj) {
  return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */

var isEmptyChildren = function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].count(children) === 0;
};
/** @private is the given object/value a promise? */

var isPromise = function isPromise(value) {
  return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */

var isInputEvent = function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
/**
 * Deeply get a value from an object via its path.
 */

function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }

  var path = Object(lodash_es_toPath__WEBPACK_IMPORTED_MODULE_5__["default"])(key);

  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }

  return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

function setIn(obj, path, value) {
  var res = Object(lodash_es_clone__WEBPACK_IMPORTED_MODULE_4__["default"])(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = Object(lodash_es_toPath__WEBPACK_IMPORTED_MODULE_5__["default"])(path);

  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = Object(lodash_es_clone__WEBPACK_IMPORTED_MODULE_4__["default"])(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current


  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */

function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }

  if (response === void 0) {
    response = {};
  }

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];

    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true); // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }

        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}

var FormikContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(undefined);
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormikContext);
  !!!formik ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : undefined : void 0;
  return formik;
}

function formikReducer(state, msg) {
  switch (msg.type) {
    case 'SET_VALUES':
      return _extends({}, state, {
        values: msg.payload
      });

    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: msg.payload
      });

    case 'SET_ERRORS':
      if (react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(state.errors, msg.payload)) {
        return state;
      }

      return _extends({}, state, {
        errors: msg.payload
      });

    case 'SET_STATUS':
      return _extends({}, state, {
        status: msg.payload
      });

    case 'SET_ISSUBMITTING':
      return _extends({}, state, {
        isSubmitting: msg.payload
      });

    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: msg.payload
      });

    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_TOUCHED':
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_ERROR':
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });

    case 'RESET_FORM':
      return _extends({}, state, msg.payload);

    case 'SET_FORMIK_STATE':
      return msg.payload(state);

    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });

    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });

    default:
      return state;
  }
} // Initial empty states // objects


var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange,
      validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange,
      _ref$validateOnBlur = _ref.validateOnBlur,
      validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur,
      _ref$validateOnMount = _ref.validateOnMount,
      validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount,
      isInitialValid = _ref.isInitialValid,
      _ref$enableReinitiali = _ref.enableReinitialize,
      enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali,
      onSubmit = _ref.onSubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);

  var props = _extends({
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    validateOnMount: validateOnMount,
    onSubmit: onSubmit
  }, rest);

  var initialValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialValues);
  var initialErrors = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialErrors || emptyErrors);
  var initialTouched = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialTouched || emptyTouched);
  var initialStatus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.initialStatus);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var fieldRegistry = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      !(typeof isInitialValid === 'undefined') ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : undefined : void 0; // eslint-disable-next-line
    }, []);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);

  var _React$useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var runValidateHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, field) {
    return new Promise(function (resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);

      if (maybePromisedErrors == null) {
        // use loose null check here on purpose
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function (errors) {
          resolve(errors || emptyErrors);
        }, function (actualException) {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }

          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  /**
   * Run validation against a Yup schema and optionally run a function if successful
   */

  var runValidationSchema = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function (resolve, reject) {
      promise.then(function () {
        resolve(emptyErrors);
      }, function (err) {
        // Yup will throw a validation error if validation fails. We catch those and
        // resolve them into Formik errors. We can sniff if something is a Yup error
        // by checking error.name.
        // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
          resolve(yupToFormErrors(err));
        } else {
          // We throw any other errors
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }

          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (field, value) {
    return new Promise(function (resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function (f) {
      return isFunction(fieldRegistry.current[f].validate);
    }); // Construct an array with all of the field validation functions

    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function (f) {
      return runSingleFieldLevelValidation(f, getIn(values, f));
    }) : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')]; // use special case ;)

    return Promise.all(fieldValidations).then(function (fieldErrorsList) {
      return fieldErrorsList.reduce(function (prev, curr, index) {
        if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
          return prev;
        }

        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }

        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]); // Run all validations and return the result

  var runAllValidations = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function (_ref2) {
      var fieldErrors = _ref2[0],
          schemaErrors = _ref2[1],
          validateErrors = _ref2[2];
      var combinedErrors = deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"].all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge: arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]); // Run all validations methods and update state accordingly

  var validateFormWithHighPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    dispatch({
      type: 'SET_ISVALIDATING',
      payload: true
    });
    return runAllValidations(values).then(function (combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });

        if (!react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(state.errors, combinedErrors)) {
          dispatch({
            type: 'SET_ERRORS',
            payload: combinedErrors
          });
        }
      }

      return combinedErrors;
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (validateOnMount && isMounted.current === true && react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;

    var dispatchFn = function dispatchFn() {
      dispatch({
        type: 'RESET_FORM',
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors: errors,
          touched: touched,
          status: status,
          values: values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
        }
      });
    };

    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);

      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
      }

      if (validateOnMount) {
        validateFormWithHighPriority(initialValues.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: 'SET_ERRORS',
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: 'SET_TOUCHED',
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: 'SET_STATUS',
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function (name) {
    // This will efficiently validate a single field by avoiding state
    // changes if the validation function is synchronous. It's different from
    // what is called when using validateForm.
    if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);

      if (isPromise(maybePromise)) {
        // Only flip isValidating if the function is async.
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: true
        });
        return maybePromise.then(function (x) {
          return x;
        }).then(function (error) {
          dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: 'SET_ISVALIDATING',
            payload: false
          });
        });
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: 'SET_ISVALIDATING',
        payload: true
      });
      return runValidationSchema(state.values, name).then(function (x) {
        return x;
      }).then(function (error) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
      });
    }

    return Promise.resolve();
  });
  var registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate
    };
  }, []);
  var unregisterField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function (touched, shouldValidate) {
    dispatch({
      type: 'SET_TOUCHED',
      payload: touched
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (errors) {
    dispatch({
      type: 'SET_ERRORS',
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = isFunction(values) ? values(state.values) : values;
    dispatch({
      type: 'SET_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (field, value) {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field: field,
        value: value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (eventOrTextValue, maybePath) {
    // By default, assume that the first argument is a string. This allows us to use
    // handleChange with React Native and React Native Web's onChangeText prop which
    // provides just the value of the input.
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
    // so we handle like we would a normal HTML change event.

    if (!isString(eventOrTextValue)) {
      // If we can, persist the event
      // @see https://reactjs.org/docs/events.html#event-pooling
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }

      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type,
          name = target.name,
          id = target.id,
          value = target.value,
          checked = target.checked,
          outerHTML = target.outerHTML,
          options = target.options,
          multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;

      if (!field && "development" !== "production") {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
          handlerName: 'handleChange'
        });
      }

      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
      ? getValueForCheckbox(getIn(state.values, field), checked, value) : !!multiple // <select multiple>
      ? getSelectedValues(options) : value;
    }

    if (field) {
      // Set form fields by name
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrPath) {
    if (isString(eventOrPath)) {
      return function (event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }

    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e, path) {
    if (e.persist) {
      e.persist();
    }

    var _e$target = e.target,
        name = _e$target.name,
        id = _e$target.id,
        outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;

    if (!field && "development" !== "production") {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: 'handleblur-e-any--void',
        handlerName: 'handleBlur'
      });
    }

    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (isString(eventOrString)) {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (status) {
    dispatch({
      type: 'SET_STATUS',
      payload: status
    });
  }, []);
  var setSubmitting = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (isSubmitting) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function () {
    dispatch({
      type: 'SUBMIT_ATTEMPT'
    });
    return validateFormWithHighPriority().then(function (combinedErrors) {
      // In case an error was thrown and passed to the resolved Promise,
      // `combinedErrors` can be an instance of an Error. We need to check
      // that and abort the submit.
      // If we don't do that, calling `Object.keys(new Error())` yields an
      // empty array, which causes the validation to pass and the form
      // to be submitted.
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;

      if (isActuallyValid) {
        // Proceed with submit...
        //
        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
        // This would be fine in simple cases, but make it impossible to disable submit
        // buttons where people use callbacks or promises as side effects (which is basically
        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
        // cleanup of isSubmitting on behalf of the consumer.
        var promiseOrUndefined;

        try {
          promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
          // via setSubmitting(false)

          if (promiseOrUndefined === undefined) {
            return;
          }
        } catch (error) {
          throw error;
        }

        return Promise.resolve(promiseOrUndefined).then(function (result) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_SUCCESS'
            });
          }

          return result;
        })["catch"](function (_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_FAILURE'
            }); // This is a legit error rejected by the onSubmit fn
            // so we don't want to break the promise chain

            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        // ^^^ Make sure Formik is still mounted before updating state
        dispatch({
          type: 'SUBMIT_FAILURE'
        }); // throw combinedErrors;

        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }

      return;
    });
  });
  var handleSubmit = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    } // Warn if form submission is triggered by a <button> without a
    // specified `type` attribute during development. This mitigates
    // a common gotcha in forms with both reset and submit buttons,
    // where the dev forgets to add type="button" to the reset button.


    if ( true && typeof document !== 'undefined') {
      // Safely get the active element (works with IE)
      var activeElement = getActiveElement();

      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : undefined : void 0;
      }
    }

    submitForm()["catch"](function (reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm: resetForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    setErrors: setErrors,
    setFieldError: setFieldError,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    setFormikState: setFormikState,
    submitForm: submitForm
  };
  var executeSubmit = useEventCallback(function () {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }

    resetForm();
  });
  var getFieldMeta = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (nameOrOptions) {
    var isAnObject = isObject(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name: name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };

    if (isAnObject) {
      var type = nameOrOptions.type,
          valueProp = nameOrOptions.value,
          is = nameOrOptions.as,
          multiple = nameOrOptions.multiple;

      if (type === 'checkbox') {
        if (valueProp === undefined) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === 'radio') {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === 'select' && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }

    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);

  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleReset: handleReset,
    handleSubmit: handleSubmit,
    resetForm: resetForm,
    setErrors: setErrors,
    setFormikState: setFormikState,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    submitForm: submitForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    isValid: isValid,
    dirty: dirty,
    unregisterField: unregisterField,
    registerField: registerField,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    validateOnMount: validateOnMount
  });

  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component,
      children = props.children,
      render = props.render,
      innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(innerRef, function () {
    return formikbag;
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      !!props.render ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : undefined : void 0; // eslint-disable-next-line
    }, []);
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormikProvider, {
    value: formikbag
  }, component ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, formikbag) : render ? render(formikbag) : children // children come last, always called
  ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null : null);
}

function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent,
      documentationAnchorLink = _ref4.documentationAnchorLink,
      handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */


function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }

    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }

      var err = _ref5;

      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }

  return errors;
}
/**
 * Validate a yup schema.
 */

function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }

  if (context === void 0) {
    context = {};
  }

  var validateData = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](validateData, {
    abortEarly: false,
    context: context
  });
}
/**
 * Recursively prepare values.
 */

function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};

  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);

      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function (value) {
          if (Array.isArray(value) === true || Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if (Object(lodash_es_isPlainObject__WEBPACK_IMPORTED_MODULE_3__["default"])(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }

  return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */

function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === 'undefined') {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? Object(deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = Object(deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
/** Return multi select values based on an array of options */


function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
}
/** Return the next value for a checkbox */


function getValueForCheckbox(currentValue, checked, valueProp) {
  // If the current value was a boolean, return a boolean
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  } // If the currentValue was not a boolean we want to return an array


  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;

  if (!Array.isArray(currentValue)) {
    // eslint-disable-next-line eqeqeq
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    // If the current value is already an array, use it
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values


  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values


  if (!isValueInArray) {
    return currentArrayOfValues;
  } // If the checkbox was unchecked and the value is in the array, remove the value and return the array


  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];

function useEventCallback(fn) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

function useField(propsOrFieldName) {
  var formik = useFormikContext();
  var getFieldProps = formik.getFieldProps,
      getFieldMeta = formik.getFieldMeta,
      getFieldHelpers = formik.getFieldHelpers,
      registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>

  var props = isAnObject ? propsOrFieldName : {
    name: propsOrFieldName
  };
  var fieldName = props.name,
      validateFn = props.validate;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (fieldName) {
      registerField(fieldName, {
        validate: validateFn
      });
    }

    return function () {
      if (fieldName) {
        unregisterField(fieldName);
      }
    };
  }, [registerField, unregisterField, fieldName, validateFn]);

  if (true) {
    !formik ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : undefined : void 0;
  }

  !fieldName ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : undefined : void 0;
  return [getFieldProps(props), getFieldMeta(fieldName), getFieldHelpers(fieldName)];
}
function Field(_ref) {
  var validate = _ref.validate,
      name = _ref.name,
      render = _ref.render,
      children = _ref.children,
      is = _ref.as,
      component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["validate", "name", "render", "children", "as", "component"]);

  var _useFormikContext = useFormikContext(),
      formik = _objectWithoutPropertiesLoose(_useFormikContext, ["validate", "validationSchema"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      !!render ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : undefined : void 0;
      !!(is && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : undefined : void 0;
      !!(component && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : undefined : void 0;
      !!(render && children && !isEmptyChildren(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : undefined : void 0; // eslint-disable-next-line
    }, []);
  } // Register field and field-level validation with parent <Formik>


  var registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    registerField(name, {
      validate: validate
    });
    return function () {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);
  var field = formik.getFieldProps(_extends({
    name: name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field: field,
    form: formik
  };

  if (render) {
    return render(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (isFunction(children)) {
    return children(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (component) {
    // This behavior is backwards compat with earlier Formik 0.9 to 1.x
    if (typeof component === 'string') {
      var innerRef = props.innerRef,
          rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
        ref: innerRef
      }, field, rest), children);
    } // We don't pass `meta` for backwards compat


    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
      field: field,
      form: formik
    }, props), children);
  } // default to input here so we can check for both `as` and `children` above


  var asElement = is || 'input';

  if (typeof asElement === 'string') {
    var _innerRef = props.innerRef,
        _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({
      ref: _innerRef
    }, field, _rest), children);
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({}, field, props), children);
}

var Form = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
  // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
  var action = props.action,
      rest = _objectWithoutPropertiesLoose(props, ["action"]);

  var _action = action || '#';

  var _useFormikContext = useFormikContext(),
      handleReset = _useFormikContext.handleReset,
      handleSubmit = _useFormikContext.handleSubmit;

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", Object.assign({
    onSubmit: handleSubmit,
    ref: ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = 'Form';

/**
 * A public higher-order component to access the imperative API
 */

function withFormik(_ref) {
  var _ref$mapPropsToValues = _ref.mapPropsToValues,
      mapPropsToValues = _ref$mapPropsToValues === void 0 ? function (vanillaProps) {
    var val = {};

    for (var k in vanillaProps) {
      if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
        // @todo TypeScript fix
        val[k] = vanillaProps[k];
      }
    }

    return val;
  } : _ref$mapPropsToValues,
      config = _objectWithoutPropertiesLoose(_ref, ["mapPropsToValues"]);

  return function createFormik(Component$1) {
    var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
    /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */

    var C = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(C, _React$Component);

      function C() {
        var _this;

        _this = _React$Component.apply(this, arguments) || this;

        _this.validate = function (values) {
          return config.validate(values, _this.props);
        };

        _this.validationSchema = function () {
          return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
        };

        _this.handleSubmit = function (values, actions) {
          return config.handleSubmit(values, _extends({}, actions, {
            props: _this.props
          }));
        };
        /**
         * Just avoiding a render callback for perf here
         */


        _this.renderFormComponent = function (formikProps) {
          return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Component$1, Object.assign({}, _this.props, formikProps));
        };

        return _this;
      }

      var _proto = C.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
            props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Formik, Object.assign({}, props, config, {
          validate: config.validate && this.validate,
          validationSchema: config.validationSchema && this.validationSchema,
          initialValues: mapPropsToValues(this.props),
          initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
          initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
          initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
          onSubmit: this.handleSubmit,
          children: this.renderFormComponent
        }));
      };

      return C;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

    C.displayName = "WithFormik(" + componentDisplayName + ")";
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default()(C, Component$1 // cast type to ComponentClass (even if SFC)
    );
  };
}

/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */

function connect(Comp) {
  var C = function C(props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormikConsumer, null, function (formik) {
      !!!formik ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : undefined : void 0;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Comp, Object.assign({}, props, {
        formik: formik
      }));
    });
  };

  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
  // For example, <Field.WrappedComponent /> gets us <FieldInner/>

  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_7___default()(C, Comp // cast type to ComponentClass (even if SFC)
  );
}

/**
 * Some array helpers!
 */

var move = function move(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};

var copyArrayLike = function copyArrayLike(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function (key) {
      return parseInt(key);
    }).reduce(function (max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};

var FieldArrayInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FieldArrayInner, _React$Component);

  function FieldArrayInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.updateArrayField = function (fn, alterTouched, alterErrors) {
      var _this$props = _this.props,
          name = _this$props.name,
          setFormikState = _this$props.formik.setFormikState;
      setFormikState(function (prevState) {
        var updateErrors = typeof alterErrors === 'function' ? alterErrors : fn;
        var updateTouched = typeof alterTouched === 'function' ? alterTouched : fn; // values fn should be executed before updateErrors and updateTouched,
        // otherwise it causes an error with unshift.

        var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;

        if (isEmptyArray(fieldError)) {
          fieldError = undefined;
        }

        if (isEmptyArray(fieldTouched)) {
          fieldTouched = undefined;
        }

        return _extends({}, prevState, {
          values: values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };

    _this.push = function (value) {
      return _this.updateArrayField(function (arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [Object(lodash_es_cloneDeep__WEBPACK_IMPORTED_MODULE_8__["default"])(value)]);
      }, false, false);
    };

    _this.handlePush = function (value) {
      return function () {
        return _this.push(value);
      };
    };

    _this.swap = function (indexA, indexB) {
      return _this.updateArrayField(function (array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };

    _this.handleSwap = function (indexA, indexB) {
      return function () {
        return _this.swap(indexA, indexB);
      };
    };

    _this.move = function (from, to) {
      return _this.updateArrayField(function (array) {
        return move(array, from, to);
      }, true, true);
    };

    _this.handleMove = function (from, to) {
      return function () {
        return _this.move(from, to);
      };
    };

    _this.insert = function (index, value) {
      return _this.updateArrayField(function (array) {
        return insert(array, index, value);
      }, function (array) {
        return insert(array, index, null);
      }, function (array) {
        return insert(array, index, null);
      });
    };

    _this.handleInsert = function (index, value) {
      return function () {
        return _this.insert(index, value);
      };
    };

    _this.replace = function (index, value) {
      return _this.updateArrayField(function (array) {
        return replace(array, index, value);
      }, false, false);
    };

    _this.handleReplace = function (index, value) {
      return function () {
        return _this.replace(index, value);
      };
    };

    _this.unshift = function (value) {
      var length = -1;

      _this.updateArrayField(function (array) {
        var arr = array ? [value].concat(array) : [value];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      });

      return length;
    };

    _this.handleUnshift = function (value) {
      return function () {
        return _this.unshift(value);
      };
    };

    _this.handleRemove = function (index) {
      return function () {
        return _this.remove(index);
      };
    };

    _this.handlePop = function () {
      return function () {
        return _this.pop();
      };
    }; // We need TypeScript generics on these, so we'll bind them in the constructor
    // @todo Fix TS 3.2.1


    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FieldArrayInner.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };

  _proto.remove = function remove(index) {
    // We need to make sure we also remove relevant pieces of `touched` and `errors`
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var copy = array ? copyArrayLike(array) : [];

      if (!result) {
        result = copy[index];
      }

      if (isFunction(copy.splice)) {
        copy.splice(index, 1);
      }

      return copy;
    }, true, true);
    return result;
  };

  _proto.pop = function pop() {
    // Remove relevant pieces of `touched` and `errors` too!
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var tmp = array;

      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }

      return tmp;
    }, true, true);
    return result;
  };

  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };

    var _this$props2 = this.props,
        component = _this$props2.component,
        render = _this$props2.render,
        children = _this$props2.children,
        name = _this$props2.name,
        _this$props2$formik = _this$props2.formik,
        restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name: name
    });

    return component ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, props) : render ? render(props) : children // children come last, always called
    ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children) : null : null;
  };

  return FieldArrayInner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var FieldArray = /*#__PURE__*/connect(FieldArrayInner);

var ErrorMessageImpl = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorMessageImpl, _React$Component);

  function ErrorMessageImpl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ErrorMessageImpl.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        component = _this$props.component,
        formik = _this$props.formik,
        render = _this$props.render,
        children = _this$props.children,
        name = _this$props.name,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "formik", "render", "children", "name"]);

    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, rest, error) : error : null;
  };

  return ErrorMessageImpl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ErrorMessage = /*#__PURE__*/connect(ErrorMessageImpl);

/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */

var FastFieldInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FastFieldInner, _React$Component);

  function FastFieldInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var render = props.render,
        children = props.children,
        component = props.component,
        is = props.as,
        name = props.name;
    !!render ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : undefined : void 0;
    !!(component && render) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : undefined : void 0;
    !!(is && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : undefined : void 0;
    !!(component && children && isFunction(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : undefined : void 0;
    !!(render && children && !isEmptyChildren(children)) ?  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : undefined : void 0;
    return _this;
  }

  var _proto = FastFieldInner.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate(props, this.props);
    } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
      return true;
    } else {
      return false;
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
    this.props.formik.registerField(this.props.name, {
      validate: this.props.validate
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }

    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        render = _this$props.render,
        is = _this$props.as,
        children = _this$props.children,
        component = _this$props.component,
        formik = _this$props.formik,
        props = _objectWithoutPropertiesLoose(_this$props, ["validate", "name", "render", "as", "children", "component", "shouldUpdate", "formik"]);

    var restOfFormik = _objectWithoutPropertiesLoose(formik, ["validate", "validationSchema"]);

    var field = formik.getFieldProps(_extends({
      name: name
    }, props));
    var meta = {
      value: getIn(formik.values, name),
      error: getIn(formik.errors, name),
      touched: !!getIn(formik.touched, name),
      initialValue: getIn(formik.initialValues, name),
      initialTouched: !!getIn(formik.initialTouched, name),
      initialError: getIn(formik.initialErrors, name)
    };
    var bag = {
      field: field,
      meta: meta,
      form: restOfFormik
    };

    if (render) {
      return render(bag);
    }

    if (isFunction(children)) {
      return children(bag);
    }

    if (component) {
      // This behavior is backwards compat with earlier Formik 0.9 to 1.x
      if (typeof component === 'string') {
        var innerRef = props.innerRef,
            rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
          ref: innerRef
        }, field, rest), children);
      } // We don't pass `meta` for backwards compat


      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(component, _extends({
        field: field,
        form: formik
      }, props), children);
    } // default to input here so we can check for both `as` and `children` above


    var asElement = is || 'input';

    if (typeof asElement === 'string') {
      var _innerRef = props.innerRef,
          _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({
        ref: _innerRef
      }, field, _rest), children);
    }

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(asElement, _extends({}, field, props), children);
  };

  return FastFieldInner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var FastField = /*#__PURE__*/connect(FastFieldInner);


//# sourceMappingURL=formik.esm.js.map


/***/ }),

/***/ "../node_modules/formik/node_modules/deepmerge/dist/es.js":
/*!****************************************************************!*\
  !*** ../node_modules/formik/node_modules/deepmerge/dist/es.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ "../node_modules/lodash-es/_DataView.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_DataView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var DataView = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'DataView');

/* harmony default export */ __webpack_exports__["default"] = (DataView);


/***/ }),

/***/ "../node_modules/lodash-es/_Hash.js":
/*!******************************************!*\
  !*** ../node_modules/lodash-es/_Hash.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hashClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_hashClear.js */ "../node_modules/lodash-es/_hashClear.js");
/* harmony import */ var _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_hashDelete.js */ "../node_modules/lodash-es/_hashDelete.js");
/* harmony import */ var _hashGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_hashGet.js */ "../node_modules/lodash-es/_hashGet.js");
/* harmony import */ var _hashHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_hashHas.js */ "../node_modules/lodash-es/_hashHas.js");
/* harmony import */ var _hashSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_hashSet.js */ "../node_modules/lodash-es/_hashSet.js");






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
Hash.prototype['delete'] = _hashDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Hash.prototype.get = _hashGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Hash.prototype.has = _hashHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Hash.prototype.set = _hashSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Hash);


/***/ }),

/***/ "../node_modules/lodash-es/_ListCache.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_ListCache.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_listCacheClear.js */ "../node_modules/lodash-es/_listCacheClear.js");
/* harmony import */ var _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_listCacheDelete.js */ "../node_modules/lodash-es/_listCacheDelete.js");
/* harmony import */ var _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_listCacheGet.js */ "../node_modules/lodash-es/_listCacheGet.js");
/* harmony import */ var _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_listCacheHas.js */ "../node_modules/lodash-es/_listCacheHas.js");
/* harmony import */ var _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_listCacheSet.js */ "../node_modules/lodash-es/_listCacheSet.js");






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
ListCache.prototype['delete'] = _listCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
ListCache.prototype.get = _listCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
ListCache.prototype.has = _listCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
ListCache.prototype.set = _listCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (ListCache);


/***/ }),

/***/ "../node_modules/lodash-es/_Map.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash-es/_Map.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Map = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Map');

/* harmony default export */ __webpack_exports__["default"] = (Map);


/***/ }),

/***/ "../node_modules/lodash-es/_MapCache.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_MapCache.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_mapCacheClear.js */ "../node_modules/lodash-es/_mapCacheClear.js");
/* harmony import */ var _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_mapCacheDelete.js */ "../node_modules/lodash-es/_mapCacheDelete.js");
/* harmony import */ var _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_mapCacheGet.js */ "../node_modules/lodash-es/_mapCacheGet.js");
/* harmony import */ var _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapCacheHas.js */ "../node_modules/lodash-es/_mapCacheHas.js");
/* harmony import */ var _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_mapCacheSet.js */ "../node_modules/lodash-es/_mapCacheSet.js");






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear_js__WEBPACK_IMPORTED_MODULE_0__["default"];
MapCache.prototype['delete'] = _mapCacheDelete_js__WEBPACK_IMPORTED_MODULE_1__["default"];
MapCache.prototype.get = _mapCacheGet_js__WEBPACK_IMPORTED_MODULE_2__["default"];
MapCache.prototype.has = _mapCacheHas_js__WEBPACK_IMPORTED_MODULE_3__["default"];
MapCache.prototype.set = _mapCacheSet_js__WEBPACK_IMPORTED_MODULE_4__["default"];

/* harmony default export */ __webpack_exports__["default"] = (MapCache);


/***/ }),

/***/ "../node_modules/lodash-es/_Promise.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_Promise.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Promise = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Promise');

/* harmony default export */ __webpack_exports__["default"] = (Promise);


/***/ }),

/***/ "../node_modules/lodash-es/_Set.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash-es/_Set.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var Set = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'Set');

/* harmony default export */ __webpack_exports__["default"] = (Set);


/***/ }),

/***/ "../node_modules/lodash-es/_Stack.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash-es/_Stack.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "../node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _stackClear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_stackClear.js */ "../node_modules/lodash-es/_stackClear.js");
/* harmony import */ var _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_stackDelete.js */ "../node_modules/lodash-es/_stackDelete.js");
/* harmony import */ var _stackGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_stackGet.js */ "../node_modules/lodash-es/_stackGet.js");
/* harmony import */ var _stackHas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stackHas.js */ "../node_modules/lodash-es/_stackHas.js");
/* harmony import */ var _stackSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_stackSet.js */ "../node_modules/lodash-es/_stackSet.js");







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"](entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear_js__WEBPACK_IMPORTED_MODULE_1__["default"];
Stack.prototype['delete'] = _stackDelete_js__WEBPACK_IMPORTED_MODULE_2__["default"];
Stack.prototype.get = _stackGet_js__WEBPACK_IMPORTED_MODULE_3__["default"];
Stack.prototype.has = _stackHas_js__WEBPACK_IMPORTED_MODULE_4__["default"];
Stack.prototype.set = _stackSet_js__WEBPACK_IMPORTED_MODULE_5__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Stack);


/***/ }),

/***/ "../node_modules/lodash-es/_Symbol.js":
/*!********************************************!*\
  !*** ../node_modules/lodash-es/_Symbol.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "../node_modules/lodash-es/_Uint8Array.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_Uint8Array.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Uint8Array;

/* harmony default export */ __webpack_exports__["default"] = (Uint8Array);


/***/ }),

/***/ "../node_modules/lodash-es/_WeakMap.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_WeakMap.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");



/* Built-in method references that are verified to be native. */
var WeakMap = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_root_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'WeakMap');

/* harmony default export */ __webpack_exports__["default"] = (WeakMap);


/***/ }),

/***/ "../node_modules/lodash-es/_arrayEach.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_arrayEach.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayEach);


/***/ }),

/***/ "../node_modules/lodash-es/_arrayFilter.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_arrayFilter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayFilter);


/***/ }),

/***/ "../node_modules/lodash-es/_arrayLikeKeys.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash-es/_arrayLikeKeys.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseTimes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseTimes.js */ "../node_modules/lodash-es/_baseTimes.js");
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArguments.js */ "../node_modules/lodash-es/isArguments.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ "../node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_isIndex.js */ "../node_modules/lodash-es/_isIndex.js");
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isTypedArray.js */ "../node_modules/lodash-es/isTypedArray.js");







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value),
      isArg = !isArr && Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value),
      isBuff = !isArr && !isArg && Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value),
      isType = !isArr && !isArg && !isBuff && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? Object(_baseTimes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           Object(_isIndex_js__WEBPACK_IMPORTED_MODULE_4__["default"])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayLikeKeys);


/***/ }),

/***/ "../node_modules/lodash-es/_arrayMap.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_arrayMap.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayMap);


/***/ }),

/***/ "../node_modules/lodash-es/_arrayPush.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_arrayPush.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayPush);


/***/ }),

/***/ "../node_modules/lodash-es/_assignValue.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_assignValue.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ "../node_modules/lodash-es/_baseAssignValue.js");
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eq.js */ "../node_modules/lodash-es/eq.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && Object(_eq_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (assignValue);


/***/ }),

/***/ "../node_modules/lodash-es/_assocIndexOf.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_assocIndexOf.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ "../node_modules/lodash-es/eq.js");


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (Object(_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["default"] = (assocIndexOf);


/***/ }),

/***/ "../node_modules/lodash-es/_baseAssign.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_baseAssign.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "../node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys.js */ "../node_modules/lodash-es/keys.js");



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssign);


/***/ }),

/***/ "../node_modules/lodash-es/_baseAssignIn.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_baseAssignIn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "../node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ "../node_modules/lodash-es/keysIn.js");



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignIn);


/***/ }),

/***/ "../node_modules/lodash-es/_baseAssignValue.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_baseAssignValue.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ "../node_modules/lodash-es/_defineProperty.js");


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (baseAssignValue);


/***/ }),

/***/ "../node_modules/lodash-es/_baseClone.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_baseClone.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Stack.js */ "../node_modules/lodash-es/_Stack.js");
/* harmony import */ var _arrayEach_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayEach.js */ "../node_modules/lodash-es/_arrayEach.js");
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_assignValue.js */ "../node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssign_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseAssign.js */ "../node_modules/lodash-es/_baseAssign.js");
/* harmony import */ var _baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_baseAssignIn.js */ "../node_modules/lodash-es/_baseAssignIn.js");
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_cloneBuffer.js */ "../node_modules/lodash-es/_cloneBuffer.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ "../node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _copySymbols_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_copySymbols.js */ "../node_modules/lodash-es/_copySymbols.js");
/* harmony import */ var _copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_copySymbolsIn.js */ "../node_modules/lodash-es/_copySymbolsIn.js");
/* harmony import */ var _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_getAllKeys.js */ "../node_modules/lodash-es/_getAllKeys.js");
/* harmony import */ var _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_getAllKeysIn.js */ "../node_modules/lodash-es/_getAllKeysIn.js");
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_getTag.js */ "../node_modules/lodash-es/_getTag.js");
/* harmony import */ var _initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_initCloneArray.js */ "../node_modules/lodash-es/_initCloneArray.js");
/* harmony import */ var _initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_initCloneByTag.js */ "../node_modules/lodash-es/_initCloneByTag.js");
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ "../node_modules/lodash-es/_initCloneObject.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./isArray.js */ "../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./isBuffer.js */ "../node_modules/lodash-es/isBuffer.js");
/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./isMap.js */ "../node_modules/lodash-es/isMap.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./isSet.js */ "../node_modules/lodash-es/isSet.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./keys.js */ "../node_modules/lodash-es/keys.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./keysIn.js */ "../node_modules/lodash-es/keysIn.js");























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_18__["default"])(value)) {
    return value;
  }
  var isArr = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_15__["default"])(value);
  if (isArr) {
    result = Object(_initCloneArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(value);
    if (!isDeep) {
      return Object(_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value, result);
    }
  } else {
    var tag = Object(_getTag_js__WEBPACK_IMPORTED_MODULE_11__["default"])(value),
        isFunc = tag == funcTag || tag == genTag;

    if (Object(_isBuffer_js__WEBPACK_IMPORTED_MODULE_16__["default"])(value)) {
      return Object(_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : Object(_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(value);
      if (!isDeep) {
        return isFlat
          ? Object(_copySymbolsIn_js__WEBPACK_IMPORTED_MODULE_8__["default"])(value, Object(_baseAssignIn_js__WEBPACK_IMPORTED_MODULE_4__["default"])(result, value))
          : Object(_copySymbols_js__WEBPACK_IMPORTED_MODULE_7__["default"])(value, Object(_baseAssign_js__WEBPACK_IMPORTED_MODULE_3__["default"])(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = Object(_initCloneByTag_js__WEBPACK_IMPORTED_MODULE_13__["default"])(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (Object(_isSet_js__WEBPACK_IMPORTED_MODULE_19__["default"])(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (Object(_isMap_js__WEBPACK_IMPORTED_MODULE_17__["default"])(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn_js__WEBPACK_IMPORTED_MODULE_10__["default"] : _getAllKeys_js__WEBPACK_IMPORTED_MODULE_9__["default"])
    : (isFlat ? _keysIn_js__WEBPACK_IMPORTED_MODULE_21__["default"] : _keys_js__WEBPACK_IMPORTED_MODULE_20__["default"]);

  var props = isArr ? undefined : keysFunc(value);
  Object(_arrayEach_js__WEBPACK_IMPORTED_MODULE_1__["default"])(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_2__["default"])(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseClone);


/***/ }),

/***/ "../node_modules/lodash-es/_baseCreate.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_baseCreate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (baseCreate);


/***/ }),

/***/ "../node_modules/lodash-es/_baseGetAllKeys.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_baseGetAllKeys.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "../node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArray.js */ "../node_modules/lodash-es/isArray.js");



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object) ? result : Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, symbolsFunc(object));
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetAllKeys);


/***/ }),

/***/ "../node_modules/lodash-es/_baseGetTag.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_baseGetTag.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "../node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "../node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "../node_modules/lodash-es/_baseIsArguments.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_baseIsArguments.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == argsTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsArguments);


/***/ }),

/***/ "../node_modules/lodash-es/_baseIsMap.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_baseIsMap.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "../node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == mapTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsMap);


/***/ }),

/***/ "../node_modules/lodash-es/_baseIsNative.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_baseIsNative.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "../node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isMasked_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isMasked.js */ "../node_modules/lodash-es/_isMasked.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_toSource.js */ "../node_modules/lodash-es/_toSource.js");





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_isMasked_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  var pattern = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(Object(_toSource_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsNative);


/***/ }),

/***/ "../node_modules/lodash-es/_baseIsSet.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_baseIsSet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getTag.js */ "../node_modules/lodash-es/_getTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_getTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == setTag;
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsSet);


/***/ }),

/***/ "../node_modules/lodash-es/_baseIsTypedArray.js":
/*!******************************************************!*\
  !*** ../node_modules/lodash-es/_baseIsTypedArray.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "../node_modules/lodash-es/isLength.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) &&
    Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !!typedArrayTags[Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)];
}

/* harmony default export */ __webpack_exports__["default"] = (baseIsTypedArray);


/***/ }),

/***/ "../node_modules/lodash-es/_baseKeys.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_baseKeys.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ "../node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeys.js */ "../node_modules/lodash-es/_nativeKeys.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeys);


/***/ }),

/***/ "../node_modules/lodash-es/_baseKeysIn.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_baseKeysIn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isPrototype.js */ "../node_modules/lodash-es/_isPrototype.js");
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nativeKeysIn.js */ "../node_modules/lodash-es/_nativeKeysIn.js");




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return Object(_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
  }
  var isProto = Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseKeysIn);


/***/ }),

/***/ "../node_modules/lodash-es/_baseTimes.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_baseTimes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseTimes);


/***/ }),

/***/ "../node_modules/lodash-es/_baseToString.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_baseToString.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayMap.js */ "../node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "../node_modules/lodash-es/isSymbol.js");





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value, baseToString) + '';
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseToString);


/***/ }),

/***/ "../node_modules/lodash-es/_baseUnary.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_baseUnary.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (baseUnary);


/***/ }),

/***/ "../node_modules/lodash-es/_cloneArrayBuffer.js":
/*!******************************************************!*\
  !*** ../node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ "../node_modules/lodash-es/_Uint8Array.js");


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneArrayBuffer);


/***/ }),

/***/ "../node_modules/lodash-es/_cloneBuffer.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_cloneBuffer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash-es/_cloneDataView.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash-es/_cloneDataView.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "../node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDataView);


/***/ }),

/***/ "../node_modules/lodash-es/_cloneRegExp.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_cloneRegExp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (cloneRegExp);


/***/ }),

/***/ "../node_modules/lodash-es/_cloneSymbol.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_cloneSymbol.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../node_modules/lodash-es/_Symbol.js");


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ __webpack_exports__["default"] = (cloneSymbol);


/***/ }),

/***/ "../node_modules/lodash-es/_cloneTypedArray.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_cloneTypedArray.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "../node_modules/lodash-es/_cloneArrayBuffer.js");


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneTypedArray);


/***/ }),

/***/ "../node_modules/lodash-es/_copyArray.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_copyArray.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (copyArray);


/***/ }),

/***/ "../node_modules/lodash-es/_copyObject.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_copyObject.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assignValue.js */ "../node_modules/lodash-es/_assignValue.js");
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ "../node_modules/lodash-es/_baseAssignValue.js");



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    } else {
      Object(_assignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ __webpack_exports__["default"] = (copyObject);


/***/ }),

/***/ "../node_modules/lodash-es/_copySymbols.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_copySymbols.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "../node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "../node_modules/lodash-es/_getSymbols.js");



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbols);


/***/ }),

/***/ "../node_modules/lodash-es/_copySymbolsIn.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash-es/_copySymbolsIn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ "../node_modules/lodash-es/_copyObject.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "../node_modules/lodash-es/_getSymbolsIn.js");



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return Object(_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, Object(_getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source), object);
}

/* harmony default export */ __webpack_exports__["default"] = (copySymbolsIn);


/***/ }),

/***/ "../node_modules/lodash-es/_coreJsData.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_coreJsData.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");


/** Used to detect overreaching core-js shims. */
var coreJsData = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"]['__core-js_shared__'];

/* harmony default export */ __webpack_exports__["default"] = (coreJsData);


/***/ }),

/***/ "../node_modules/lodash-es/_defineProperty.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_defineProperty.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");


var defineProperty = (function() {
  try {
    var func = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (defineProperty);


/***/ }),

/***/ "../node_modules/lodash-es/_freeGlobal.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_freeGlobal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/lodash-es/_getAllKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_getAllKeys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "../node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbols.js */ "../node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keys.js */ "../node_modules/lodash-es/keys.js");




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keys_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbols_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeys);


/***/ }),

/***/ "../node_modules/lodash-es/_getAllKeysIn.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_getAllKeysIn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetAllKeys.js */ "../node_modules/lodash-es/_baseGetAllKeys.js");
/* harmony import */ var _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getSymbolsIn.js */ "../node_modules/lodash-es/_getSymbolsIn.js");
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keysIn.js */ "../node_modules/lodash-es/keysIn.js");




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return Object(_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, _keysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"], _getSymbolsIn_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (getAllKeysIn);


/***/ }),

/***/ "../node_modules/lodash-es/_getMapData.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_getMapData.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isKeyable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isKeyable.js */ "../node_modules/lodash-es/_isKeyable.js");


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return Object(_isKeyable_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ __webpack_exports__["default"] = (getMapData);


/***/ }),

/***/ "../node_modules/lodash-es/_getNative.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_getNative.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsNative.js */ "../node_modules/lodash-es/_baseIsNative.js");
/* harmony import */ var _getValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getValue.js */ "../node_modules/lodash-es/_getValue.js");



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = Object(_getValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key);
  return Object(_baseIsNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (getNative);


/***/ }),

/***/ "../node_modules/lodash-es/_getPrototype.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_getPrototype.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "../node_modules/lodash-es/_overArg.js");


/** Built-in value references. */
var getPrototype = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["default"] = (getPrototype);


/***/ }),

/***/ "../node_modules/lodash-es/_getRawTag.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_getRawTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "../node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "../node_modules/lodash-es/_getSymbols.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_getSymbols.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayFilter.js */ "../node_modules/lodash-es/_arrayFilter.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubArray.js */ "../node_modules/lodash-es/stubArray.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return Object(_arrayFilter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getSymbols);


/***/ }),

/***/ "../node_modules/lodash-es/_getSymbolsIn.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_getSymbolsIn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayPush.js */ "../node_modules/lodash-es/_arrayPush.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "../node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getSymbols.js */ "../node_modules/lodash-es/_getSymbols.js");
/* harmony import */ var _stubArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stubArray.js */ "../node_modules/lodash-es/stubArray.js");





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray_js__WEBPACK_IMPORTED_MODULE_3__["default"] : function(object) {
  var result = [];
  while (object) {
    Object(_arrayPush_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, Object(_getSymbols_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object));
    object = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getSymbolsIn);


/***/ }),

/***/ "../node_modules/lodash-es/_getTag.js":
/*!********************************************!*\
  !*** ../node_modules/lodash-es/_getTag.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DataView.js */ "../node_modules/lodash-es/_DataView.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "../node_modules/lodash-es/_Map.js");
/* harmony import */ var _Promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Promise.js */ "../node_modules/lodash-es/_Promise.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Set.js */ "../node_modules/lodash-es/_Set.js");
/* harmony import */ var _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_WeakMap.js */ "../node_modules/lodash-es/_WeakMap.js");
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _toSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_toSource.js */ "../node_modules/lodash-es/_toSource.js");








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
    mapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    promiseCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
    setCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
    weakMapCtorString = Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"] && getTag(new _DataView_js__WEBPACK_IMPORTED_MODULE_0__["default"](new ArrayBuffer(1))) != dataViewTag) ||
    (_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] && getTag(new _Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]) != mapTag) ||
    (_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"] && getTag(_Promise_js__WEBPACK_IMPORTED_MODULE_2__["default"].resolve()) != promiseTag) ||
    (_Set_js__WEBPACK_IMPORTED_MODULE_3__["default"] && getTag(new _Set_js__WEBPACK_IMPORTED_MODULE_3__["default"]) != setTag) ||
    (_WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"] && getTag(new _WeakMap_js__WEBPACK_IMPORTED_MODULE_4__["default"]) != weakMapTag)) {
  getTag = function(value) {
    var result = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_5__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? Object(_toSource_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getTag);


/***/ }),

/***/ "../node_modules/lodash-es/_getValue.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_getValue.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ __webpack_exports__["default"] = (getValue);


/***/ }),

/***/ "../node_modules/lodash-es/_hashClear.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_hashClear.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? Object(_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(null) : {};
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (hashClear);


/***/ }),

/***/ "../node_modules/lodash-es/_hashDelete.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_hashDelete.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (hashDelete);


/***/ }),

/***/ "../node_modules/lodash-es/_hashGet.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_hashGet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ __webpack_exports__["default"] = (hashGet);


/***/ }),

/***/ "../node_modules/lodash-es/_hashHas.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_hashHas.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/* harmony default export */ __webpack_exports__["default"] = (hashHas);


/***/ }),

/***/ "../node_modules/lodash-es/_hashSet.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_hashSet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_nativeCreate.js */ "../node_modules/lodash-es/_nativeCreate.js");


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"] && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (hashSet);


/***/ }),

/***/ "../node_modules/lodash-es/_initCloneArray.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_initCloneArray.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneArray);


/***/ }),

/***/ "../node_modules/lodash-es/_initCloneByTag.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_initCloneByTag.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "../node_modules/lodash-es/_cloneArrayBuffer.js");
/* harmony import */ var _cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneDataView.js */ "../node_modules/lodash-es/_cloneDataView.js");
/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_cloneRegExp.js */ "../node_modules/lodash-es/_cloneRegExp.js");
/* harmony import */ var _cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_cloneSymbol.js */ "../node_modules/lodash-es/_cloneSymbol.js");
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_cloneTypedArray.js */ "../node_modules/lodash-es/_cloneTypedArray.js");






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return Object(_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return Object(_cloneDataView_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return Object(_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return Object(_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return Object(_cloneSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneByTag);


/***/ }),

/***/ "../node_modules/lodash-es/_initCloneObject.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_initCloneObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseCreate.js */ "../node_modules/lodash-es/_baseCreate.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "../node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ "../node_modules/lodash-es/_isPrototype.js");




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !Object(_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object))
    ? Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object))
    : {};
}

/* harmony default export */ __webpack_exports__["default"] = (initCloneObject);


/***/ }),

/***/ "../node_modules/lodash-es/_isIndex.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_isIndex.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ __webpack_exports__["default"] = (isIndex);


/***/ }),

/***/ "../node_modules/lodash-es/_isKeyable.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/_isKeyable.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ __webpack_exports__["default"] = (isKeyable);


/***/ }),

/***/ "../node_modules/lodash-es/_isMasked.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_isMasked.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_coreJsData.js */ "../node_modules/lodash-es/_coreJsData.js");


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"] && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys && _coreJsData_js__WEBPACK_IMPORTED_MODULE_0__["default"].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ __webpack_exports__["default"] = (isMasked);


/***/ }),

/***/ "../node_modules/lodash-es/_isPrototype.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_isPrototype.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__["default"] = (isPrototype);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheClear.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheClear.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheClear);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheDelete.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheDelete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheDelete);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheGet.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheGet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheGet);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheHas.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheHas.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.__data__, key) > -1;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheHas);


/***/ }),

/***/ "../node_modules/lodash-es/_listCacheSet.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_listCacheSet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_assocIndexOf.js */ "../node_modules/lodash-es/_assocIndexOf.js");


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = Object(_assocIndexOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (listCacheSet);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheClear.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheClear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Hash.js */ "../node_modules/lodash-es/_Hash.js");
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_ListCache.js */ "../node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Map.js */ "../node_modules/lodash-es/_Map.js");




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'map': new (_Map_js__WEBPACK_IMPORTED_MODULE_2__["default"] || _ListCache_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
    'string': new _Hash_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheClear);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheDelete.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheDelete.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheDelete);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheGet.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheGet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheGet);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheHas.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheHas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key).has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheHas);


/***/ }),

/***/ "../node_modules/lodash-es/_mapCacheSet.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_mapCacheSet.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getMapData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getMapData.js */ "../node_modules/lodash-es/_getMapData.js");


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = Object(_getMapData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (mapCacheSet);


/***/ }),

/***/ "../node_modules/lodash-es/_memoizeCapped.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash-es/_memoizeCapped.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memoize.js */ "../node_modules/lodash-es/memoize.js");


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = Object(_memoize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeCapped);


/***/ }),

/***/ "../node_modules/lodash-es/_nativeCreate.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_nativeCreate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_getNative.js */ "../node_modules/lodash-es/_getNative.js");


/* Built-in method references that are verified to be native. */
var nativeCreate = Object(_getNative_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object, 'create');

/* harmony default export */ __webpack_exports__["default"] = (nativeCreate);


/***/ }),

/***/ "../node_modules/lodash-es/_nativeKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_nativeKeys.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ "../node_modules/lodash-es/_overArg.js");


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = Object(_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.keys, Object);

/* harmony default export */ __webpack_exports__["default"] = (nativeKeys);


/***/ }),

/***/ "../node_modules/lodash-es/_nativeKeysIn.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_nativeKeysIn.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (nativeKeysIn);


/***/ }),

/***/ "../node_modules/lodash-es/_nodeUtil.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_nodeUtil.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "../node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["default"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash-es/_objectToString.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash-es/_objectToString.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "../node_modules/lodash-es/_overArg.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/_overArg.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (overArg);


/***/ }),

/***/ "../node_modules/lodash-es/_root.js":
/*!******************************************!*\
  !*** ../node_modules/lodash-es/_root.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "../node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "../node_modules/lodash-es/_stackClear.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/_stackClear.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "../node_modules/lodash-es/_ListCache.js");


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.size = 0;
}

/* harmony default export */ __webpack_exports__["default"] = (stackClear);


/***/ }),

/***/ "../node_modules/lodash-es/_stackDelete.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/_stackDelete.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (stackDelete);


/***/ }),

/***/ "../node_modules/lodash-es/_stackGet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_stackGet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackGet);


/***/ }),

/***/ "../node_modules/lodash-es/_stackHas.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_stackHas.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ __webpack_exports__["default"] = (stackHas);


/***/ }),

/***/ "../node_modules/lodash-es/_stackSet.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_stackSet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_ListCache.js */ "../node_modules/lodash-es/_ListCache.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Map.js */ "../node_modules/lodash-es/_Map.js");
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_MapCache.js */ "../node_modules/lodash-es/_MapCache.js");




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    var pairs = data.__data__;
    if (!_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"] || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache_js__WEBPACK_IMPORTED_MODULE_2__["default"](pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ __webpack_exports__["default"] = (stackSet);


/***/ }),

/***/ "../node_modules/lodash-es/_stringToPath.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/_stringToPath.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_memoizeCapped.js */ "../node_modules/lodash-es/_memoizeCapped.js");


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = Object(_memoizeCapped_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ __webpack_exports__["default"] = (stringToPath);


/***/ }),

/***/ "../node_modules/lodash-es/_toKey.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash-es/_toKey.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSymbol.js */ "../node_modules/lodash-es/isSymbol.js");


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["default"] = (toKey);


/***/ }),

/***/ "../node_modules/lodash-es/_toSource.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/_toSource.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ __webpack_exports__["default"] = (toSource);


/***/ }),

/***/ "../node_modules/lodash-es/clone.js":
/*!******************************************!*\
  !*** ../node_modules/lodash-es/clone.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "../node_modules/lodash-es/_baseClone.js");


/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return Object(_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ __webpack_exports__["default"] = (clone);


/***/ }),

/***/ "../node_modules/lodash-es/cloneDeep.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/cloneDeep.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseClone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseClone.js */ "../node_modules/lodash-es/_baseClone.js");


/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return Object(_baseClone_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ __webpack_exports__["default"] = (cloneDeep);


/***/ }),

/***/ "../node_modules/lodash-es/eq.js":
/*!***************************************!*\
  !*** ../node_modules/lodash-es/eq.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__["default"] = (eq);


/***/ }),

/***/ "../node_modules/lodash-es/isArguments.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/isArguments.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsArguments.js */ "../node_modules/lodash-es/_baseIsArguments.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = Object(_baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() { return arguments; }()) ? _baseIsArguments_js__WEBPACK_IMPORTED_MODULE_0__["default"] : function(value) {
  return Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ __webpack_exports__["default"] = (isArguments);


/***/ }),

/***/ "../node_modules/lodash-es/isArray.js":
/*!********************************************!*\
  !*** ../node_modules/lodash-es/isArray.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__["default"] = (isArray);


/***/ }),

/***/ "../node_modules/lodash-es/isArrayLike.js":
/*!************************************************!*\
  !*** ../node_modules/lodash-es/isArrayLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction.js */ "../node_modules/lodash-es/isFunction.js");
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isLength.js */ "../node_modules/lodash-es/isLength.js");



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && Object(_isLength_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value.length) && !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isArrayLike);


/***/ }),

/***/ "../node_modules/lodash-es/isBuffer.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/isBuffer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "../node_modules/lodash-es/_root.js");
/* harmony import */ var _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stubFalse.js */ "../node_modules/lodash-es/stubFalse.js");



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse_js__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash-es/isFunction.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash-es/isFunction.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "../node_modules/lodash-es/isObject.js");



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["default"] = (isFunction);


/***/ }),

/***/ "../node_modules/lodash-es/isLength.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/isLength.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__["default"] = (isLength);


/***/ }),

/***/ "../node_modules/lodash-es/isMap.js":
/*!******************************************!*\
  !*** ../node_modules/lodash-es/isMap.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsMap.js */ "../node_modules/lodash-es/_baseIsMap.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "../node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "../node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsMap = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsMap) : _baseIsMap_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isMap);


/***/ }),

/***/ "../node_modules/lodash-es/isObject.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/isObject.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "../node_modules/lodash-es/isObjectLike.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/isObjectLike.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "../node_modules/lodash-es/isPlainObject.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash-es/isPlainObject.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getPrototype.js */ "../node_modules/lodash-es/_getPrototype.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) != objectTag) {
    return false;
  }
  var proto = Object(_getPrototype_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["default"] = (isPlainObject);


/***/ }),

/***/ "../node_modules/lodash-es/isSet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash-es/isSet.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsSet.js */ "../node_modules/lodash-es/_baseIsSet.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "../node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "../node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsSet = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsSet) : _baseIsSet_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isSet);


/***/ }),

/***/ "../node_modules/lodash-es/isSymbol.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/isSymbol.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "../node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "../node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "../node_modules/lodash-es/isTypedArray.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash-es/isTypedArray.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseIsTypedArray.js */ "../node_modules/lodash-es/_baseIsTypedArray.js");
/* harmony import */ var _baseUnary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseUnary.js */ "../node_modules/lodash-es/_baseUnary.js");
/* harmony import */ var _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_nodeUtil.js */ "../node_modules/lodash-es/_nodeUtil.js");




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"] && _nodeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? Object(_baseUnary_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeIsTypedArray) : _baseIsTypedArray_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (isTypedArray);


/***/ }),

/***/ "../node_modules/lodash-es/keys.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash-es/keys.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "../node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeys.js */ "../node_modules/lodash-es/_baseKeys.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "../node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) : Object(_baseKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keys);


/***/ }),

/***/ "../node_modules/lodash-es/keysIn.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash-es/keysIn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ "../node_modules/lodash-es/_arrayLikeKeys.js");
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseKeysIn.js */ "../node_modules/lodash-es/_baseKeysIn.js");
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArrayLike.js */ "../node_modules/lodash-es/isArrayLike.js");




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object) ? Object(_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, true) : Object(_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
}

/* harmony default export */ __webpack_exports__["default"] = (keysIn);


/***/ }),

/***/ "../node_modules/lodash-es/memoize.js":
/*!********************************************!*\
  !*** ../node_modules/lodash-es/memoize.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MapCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_MapCache.js */ "../node_modules/lodash-es/_MapCache.js");


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "../node_modules/lodash-es/stubArray.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/stubArray.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (stubArray);


/***/ }),

/***/ "../node_modules/lodash-es/stubFalse.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash-es/stubFalse.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (stubFalse);


/***/ }),

/***/ "../node_modules/lodash-es/toPath.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash-es/toPath.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_arrayMap.js */ "../node_modules/lodash-es/_arrayMap.js");
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_copyArray.js */ "../node_modules/lodash-es/_copyArray.js");
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ "../node_modules/lodash-es/isArray.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isSymbol.js */ "../node_modules/lodash-es/isSymbol.js");
/* harmony import */ var _stringToPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_stringToPath.js */ "../node_modules/lodash-es/_stringToPath.js");
/* harmony import */ var _toKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_toKey.js */ "../node_modules/lodash-es/_toKey.js");
/* harmony import */ var _toString_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toString.js */ "../node_modules/lodash-es/toString.js");








/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    return Object(_arrayMap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, _toKey_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
  return Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value) ? [value] : Object(_copyArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_stringToPath_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_toString_js__WEBPACK_IMPORTED_MODULE_6__["default"])(value)));
}

/* harmony default export */ __webpack_exports__["default"] = (toPath);


/***/ }),

/***/ "../node_modules/lodash-es/toString.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash-es/toString.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseToString.js */ "../node_modules/lodash-es/_baseToString.js");


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : Object(_baseToString_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (toString);


/***/ }),

/***/ "../node_modules/react-fast-compare/index.js":
/*!***************************************************!*\
  !*** ../node_modules/react-fast-compare/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BoYXBpL2pvaS9kaXN0L2pvaS1icm93c2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9BbHRlcm5hdGVFbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9DaGVjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25BZGQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvVmVyaWZpZWRVc2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eU9mZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9WcG5LZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9mb3JtaWsvZGlzdC9mb3JtaWsuZXNtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZm9ybWlrL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC9lcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNNYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lUmVnRXhwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jbG9uZVN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb3B5U3ltYm9sc0luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19uYXRpdmVLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2Nsb25lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9lcS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNNYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMva2V5c0luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1mYXN0LWNvbXBhcmUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsZUFBZSxLQUFpRCxvQkFBb0IsU0FBcUcsQ0FBQyxvQkFBb0IsbUJBQW1CLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1Qyxx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Q0E7QUFDQTtBQUNBIiwiZmlsZSI6IjEuY2xpZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuam9pPXQoKTplLmpvaT10KCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihzKXtpZih0W3NdKXJldHVybiB0W3NdLmV4cG9ydHM7dmFyIG49dFtzXT17aTpzLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbc10uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsciksbi5sPSEwLG4uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxzKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6c30pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBzPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKHMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbiBpbiBlKXIuZChzLG4sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxuKSk7cmV0dXJuIHN9LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCJcIixyKHIucz0xMSl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDEyKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSwuLi50KXtpZighZSl7aWYoMT09PXQubGVuZ3RoJiZ0WzBdaW5zdGFuY2VvZiBFcnJvcil0aHJvdyB0WzBdO3Rocm93IG5ldyBzKHQpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDEyKSxvPXIoMjkpO2xldCBhLGk7Y29uc3QgbD17aXNvRGF0ZTovXig/OlstK11cXGR7Mn0pPyg/OlxcZHs0fSg/IVxcZHsyfVxcYikpKD86KC0/KSg/Oig/OjBbMS05XXwxWzAtMl0pKD86XFwxKD86WzEyXVxcZHwwWzEtOV18M1swMV0pKT98Vyg/OlswLTRdXFxkfDVbMC0yXSkoPzotP1sxLTddKT98KD86MDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKD86WzAtNV1cXGR8NlsxLTZdKSkpKD8hW1RdJHxbVF1bXFxkXStaJCkoPzpbVFxcc10oPzooPzooPzpbMDFdXFxkfDJbMC0zXSkoPzooOj8pWzAtNV1cXGQpP3wyNFxcOj8wMCkoPzpbLixdXFxkKyg/ITopKT8pKD86XFwyWzAtNV1cXGQoPzpbLixdXFxkKyk/KT8oPzpbWl18KD86WystXSkoPzpbMDFdXFxkfDJbMC0zXSkoPzo6P1swLTVdXFxkKT8pPyk/KT8kL307dC52ZXJzaW9uPW8udmVyc2lvbix0LmRlZmF1bHRzPXthYm9ydEVhcmx5OiEwLGFsbG93VW5rbm93bjohMSxjYWNoZTohMCxjb250ZXh0Om51bGwsY29udmVydDohMCxkYXRlRm9ybWF0OlwiaXNvXCIsZXJyb3JzOntlc2NhcGVIdG1sOiExLGxhYmVsOlwicGF0aFwiLGxhbmd1YWdlOm51bGwscmVuZGVyOiEwLHN0YWNrOiExLHdyYXA6e2xhYmVsOidcIicsYXJyYXk6XCJbXVwifX0sZXh0ZXJuYWxzOiEwLG1lc3NhZ2VzOnt9LG5vbkVudW1lcmFibGVzOiExLG5vRGVmYXVsdHM6ITEscHJlc2VuY2U6XCJvcHRpb25hbFwiLHNraXBGdW5jdGlvbnM6ITEsc3RyaXBVbmtub3duOiExLHdhcm5pbmdzOiExfSx0LnN5bWJvbHM9e2FueTpTeW1ib2wuZm9yKFwiQGhhcGkvam9pL3NjaGVtYVwiKSxhcnJheVNpbmdsZTpTeW1ib2woXCJhcnJheVNpbmdsZVwiKSxkZWVwRGVmYXVsdDpTeW1ib2woXCJkZWVwRGVmYXVsdFwiKSxsaXRlcmFsOlN5bWJvbChcImxpdGVyYWxcIiksb3ZlcnJpZGU6U3ltYm9sKFwib3ZlcnJpZGVcIikscHJlZnM6U3ltYm9sKFwicHJlZnNcIikscmVmOlN5bWJvbChcInJlZlwiKSx2YWx1ZXM6U3ltYm9sKFwidmFsdWVzXCIpLHRlbXBsYXRlOlN5bWJvbChcInRlbXBsYXRlXCIpfSx0LmFzc2VydE9wdGlvbnM9ZnVuY3Rpb24oZSx0LHI9XCJPcHRpb25zXCIpe3MoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJiFBcnJheS5pc0FycmF5KGUpLFwiT3B0aW9ucyBtdXN0IGJlIG9mIHR5cGUgb2JqZWN0XCIpO2NvbnN0IG49T2JqZWN0LmtleXMoZSkuZmlsdGVyKGU9PiF0LmluY2x1ZGVzKGUpKTtzKDA9PT1uLmxlbmd0aCxcIlwiLmNvbmNhdChyLFwiIGNvbnRhaW4gdW5rbm93biBrZXlzOiBcIikuY29uY2F0KG4pKX0sdC5jaGVja1ByZWZlcmVuY2VzPWZ1bmN0aW9uKGUpe2k9aXx8cigxNik7Y29uc3QgdD1pLnByZWZlcmVuY2VzLnZhbGlkYXRlKGUpO2lmKHQuZXJyb3IpdGhyb3cgbmV3IG4oW3QuZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlXSl9LHQuY29tcGFyZT1mdW5jdGlvbihlLHQscil7c3dpdGNoKHIpe2Nhc2VcIj1cIjpyZXR1cm4gZT09PXQ7Y2FzZVwiPlwiOnJldHVybiBlPnQ7Y2FzZVwiPFwiOnJldHVybiBlPHQ7Y2FzZVwiPj1cIjpyZXR1cm4gZT49dDtjYXNlXCI8PVwiOnJldHVybiBlPD10fX0sdC5kZWZhdWx0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWU/dDplfSx0LmlzSXNvRGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gbC5pc29EYXRlLnRlc3QoZSl9LHQuaXNOdW1iZXI9ZnVuY3Rpb24oZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGUmJiFpc05hTihlKX0sdC5pc1Jlc29sdmFibGU9ZnVuY3Rpb24oZSl7cmV0dXJuISFlJiYoZVt0LnN5bWJvbHMucmVmXXx8ZVt0LnN5bWJvbHMudGVtcGxhdGVdKX0sdC5pc1NjaGVtYT1mdW5jdGlvbihlLHI9e30pe2NvbnN0IG49ZSYmZVt0LnN5bWJvbHMuYW55XTtyZXR1cm4hIW4mJihzKHIubGVnYWN5fHxuLnZlcnNpb249PT10LnZlcnNpb24sXCJDYW5ub3QgbWl4IGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBqb2kgc2NoZW1hc1wiKSwhMCl9LHQuaXNWYWx1ZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIGVbdC5zeW1ib2xzLnZhbHVlc119LHQubGltaXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIE51bWJlci5pc1NhZmVJbnRlZ2VyKGUpJiZlPj0wfSx0LnByZWZlcmVuY2VzPWZ1bmN0aW9uKGUscyl7YT1hfHxyKDkpLGU9ZXx8e30scz1zfHx7fTtjb25zdCBuPU9iamVjdC5hc3NpZ24oe30sZSxzKTtyZXR1cm4gcy5lcnJvcnMmJmUuZXJyb3JzJiYobi5lcnJvcnM9T2JqZWN0LmFzc2lnbih7fSxlLmVycm9ycyxzLmVycm9ycyksbi5lcnJvcnMud3JhcD1PYmplY3QuYXNzaWduKHt9LGUuZXJyb3JzLndyYXAscy5lcnJvcnMud3JhcCkpLHMubWVzc2FnZXMmJihuLm1lc3NhZ2VzPWEuY29tcGlsZShzLm1lc3NhZ2VzLGUubWVzc2FnZXMpKSxkZWxldGUgblt0LnN5bWJvbHMucHJlZnNdLG59LHQudHJ5V2l0aFBhdGg9ZnVuY3Rpb24oZSx0LHI9e30pe3RyeXtyZXR1cm4gZSgpfWNhdGNoKGUpe3Rocm93IHZvaWQgMCE9PWUucGF0aD9lLnBhdGg9dCtcIi5cIitlLnBhdGg6ZS5wYXRoPXQsci5hcHBlbmQmJihlLm1lc3NhZ2U9XCJcIi5jb25jYXQoZS5tZXNzYWdlLFwiIChcIikuY29uY2F0KGUucGF0aCxcIilcIikpLGV9fSx0LnZhbGlkYXRlQXJnPWZ1bmN0aW9uKGUscix7YXNzZXJ0OnMsbWVzc2FnZTpufSl7aWYodC5pc1NjaGVtYShzKSl7Y29uc3QgdD1zLnZhbGlkYXRlKGUpO2lmKCF0LmVycm9yKXJldHVybjtyZXR1cm4gdC5lcnJvci5tZXNzYWdlfWlmKCFzKGUpKXJldHVybiByP1wiXCIuY29uY2F0KHIsXCIgXCIpLmNvbmNhdChuKTpufSx0LnZlcmlmeUZsYXQ9ZnVuY3Rpb24oZSx0KXtmb3IoY29uc3QgciBvZiBlKXMoIUFycmF5LmlzQXJyYXkociksXCJNZXRob2Qgbm8gbG9uZ2VyIGFjY2VwdHMgYXJyYXkgYXJndW1lbnRzOlwiLHQpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cig2KSxuPXIoMTMpLG89cigxNCksYT17bmVlZHNQcm90b0hhY2s6bmV3IFNldChbbi5zZXQsbi5tYXAsbi53ZWFrU2V0LG4ud2Vha01hcF0pfTtlLmV4cG9ydHM9YS5jbG9uZT1mdW5jdGlvbihlLHQ9e30scj1udWxsKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIGU7bGV0IHM9YS5jbG9uZSxpPXI7aWYodC5zaGFsbG93KXtpZighMCE9PXQuc2hhbGxvdylyZXR1cm4gYS5jbG9uZVdpdGhTaGFsbG93KGUsdCk7cz1lPT5lfWVsc2UgaWYoaSl7Y29uc3QgdD1pLmdldChlKTtpZih0KXJldHVybiB0fWVsc2UgaT1uZXcgTWFwO2NvbnN0IGw9bi5nZXRJbnRlcm5hbFByb3RvKGUpO2lmKGw9PT1uLmJ1ZmZlcilyZXR1cm4hMTtpZihsPT09bi5kYXRlKXJldHVybiBuZXcgRGF0ZShlLmdldFRpbWUoKSk7aWYobD09PW4ucmVnZXgpcmV0dXJuIG5ldyBSZWdFeHAoZSk7Y29uc3QgYz1hLmJhc2UoZSxsLHQpO2lmKGM9PT1lKXJldHVybiBlO2lmKGkmJmkuc2V0KGUsYyksbD09PW4uc2V0KWZvcihjb25zdCByIG9mIGUpYy5hZGQocyhyLHQsaSkpO2Vsc2UgaWYobD09PW4ubWFwKWZvcihjb25zdFtyLG5db2YgZSljLnNldChyLHMobix0LGkpKTtjb25zdCB1PW8ua2V5cyhlLHQpO2Zvcihjb25zdCByIG9mIHUpe2lmKFwiX19wcm90b19fXCI9PT1yKWNvbnRpbnVlO2lmKGw9PT1uLmFycmF5JiZcImxlbmd0aFwiPT09cil7Yy5sZW5ndGg9ZS5sZW5ndGg7Y29udGludWV9Y29uc3Qgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUscik7bz9vLmdldHx8by5zZXQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KGMscixvKTpvLmVudW1lcmFibGU/Y1tyXT1zKGVbcl0sdCxpKTpPYmplY3QuZGVmaW5lUHJvcGVydHkoYyxyLHtlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpzKGVbcl0sdCxpKX0pOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShjLHIse2VudW1lcmFibGU6ITAsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwLHZhbHVlOnMoZVtyXSx0LGkpfSl9cmV0dXJuIGN9LGEuY2xvbmVXaXRoU2hhbGxvdz1mdW5jdGlvbihlLHQpe2NvbnN0IHI9dC5zaGFsbG93Oyh0PU9iamVjdC5hc3NpZ24oe30sdCkpLnNoYWxsb3c9ITE7Y29uc3Qgbj1uZXcgTWFwO2Zvcihjb25zdCB0IG9mIHIpe2NvbnN0IHI9cyhlLHQpO1wib2JqZWN0XCIhPXR5cGVvZiByJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByfHxuLnNldChyLHIpfXJldHVybiBhLmNsb25lKGUsdCxuKX0sYS5iYXNlPWZ1bmN0aW9uKGUsdCxyKXtpZighMT09PXIucHJvdG90eXBlKXJldHVybiBhLm5lZWRzUHJvdG9IYWNrLmhhcyh0KT9uZXcgdC5jb25zdHJ1Y3Rvcjp0PT09bi5hcnJheT9bXTp7fTtjb25zdCBzPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtpZihzJiZzLmlzSW1tdXRhYmxlKXJldHVybiBlO2lmKHQ9PT1uLmFycmF5KXtjb25zdCBlPVtdO3JldHVybiBzIT09dCYmT2JqZWN0LnNldFByb3RvdHlwZU9mKGUscyksZX1pZihhLm5lZWRzUHJvdG9IYWNrLmhhcyh0KSl7Y29uc3QgZT1uZXcgcy5jb25zdHJ1Y3RvcjtyZXR1cm4gcyE9PXQmJk9iamVjdC5zZXRQcm90b3R5cGVPZihlLHMpLGV9cmV0dXJuIE9iamVjdC5jcmVhdGUocyl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzNCksbz1yKDEpLGE9cig5KTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJhbnlcIixmbGFnczp7b25seTp7ZGVmYXVsdDohMX19LHRlcm1zOnthbHRlcmF0aW9uczp7aW5pdDpudWxsfSxleGFtcGxlczp7aW5pdDpudWxsfSxleHRlcm5hbHM6e2luaXQ6bnVsbH0sbWV0YXM6e2luaXQ6W119LG5vdGVzOntpbml0OltdfSxzaGFyZWQ6e2luaXQ6bnVsbH0sdGFnczp7aW5pdDpbXX0sd2hlbnM6e2luaXQ6bnVsbH19LHJ1bGVzOntjdXN0b206e21ldGhvZChlLHQpe3JldHVybiBzKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJNZXRob2QgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHModm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJEZXNjcmlwdGlvbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImN1c3RvbVwiLGFyZ3M6e21ldGhvZDplLGRlc2NyaXB0aW9uOnR9fSl9LHZhbGlkYXRlKGUsdCx7bWV0aG9kOnJ9KXt0cnl7cmV0dXJuIHIoZSx0KX1jYXRjaChlKXtyZXR1cm4gdC5lcnJvcihcImFueS5jdXN0b21cIix7ZXJyb3I6ZX0pfX0sYXJnczpbXCJtZXRob2RcIixcImRlc2NyaXB0aW9uXCJdLG11bHRpOiEwfSxtZXNzYWdlczp7bWV0aG9kKGUpe3JldHVybiB0aGlzLnByZWZzKHttZXNzYWdlczplfSl9fSxzaGFyZWQ6e21ldGhvZChlKXtzKG8uaXNTY2hlbWEoZSkmJmUuX2ZsYWdzLmlkLFwiU2NoZW1hIG11c3QgYmUgYSBzY2hlbWEgd2l0aCBhbiBpZFwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC4kX3Rlcm1zLnNoYXJlZD10LiRfdGVybXMuc2hhcmVkfHxbXSx0LiRfdGVybXMuc2hhcmVkLnB1c2goZSksdC4kX211dGF0ZVJlZ2lzdGVyKGUpLHR9fSx3YXJuaW5nOnttZXRob2QoZSx0KXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIkludmFsaWQgd2FybmluZyBjb2RlXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwid2FybmluZ1wiLGFyZ3M6e2NvZGU6ZSxsb2NhbDp0fSx3YXJuOiEwfSl9LHZhbGlkYXRlOihlLHQse2NvZGU6cixsb2NhbDpzfSk9PnQuZXJyb3IocixzKSxhcmdzOltcImNvZGVcIixcImxvY2FsXCJdLG11bHRpOiEwfX0sbW9kaWZpZXJzOntrZWVwKGUsdD0hMCl7ZS5rZWVwPXR9LG1lc3NhZ2UoZSx0KXtlLm1lc3NhZ2U9YS5jb21waWxlKHQpfSx3YXJuKGUsdD0hMCl7ZS53YXJuPXR9fSxtYW5pZmVzdDp7YnVpbGQoZSx0KXtmb3IoY29uc3QgciBpbiB0KXtjb25zdCBzPXRbcl07aWYoW1wiZXhhbXBsZXNcIixcImV4dGVybmFsc1wiLFwibWV0YXNcIixcIm5vdGVzXCIsXCJ0YWdzXCJdLmluY2x1ZGVzKHIpKWZvcihjb25zdCB0IG9mIHMpZT1lW3Iuc2xpY2UoMCwtMSldKHQpO2Vsc2UgaWYoXCJhbHRlcmF0aW9uc1wiIT09cilpZihcIndoZW5zXCIhPT1yKXtpZihcInNoYXJlZFwiPT09cilmb3IoY29uc3QgdCBvZiBzKWU9ZS5zaGFyZWQodCl9ZWxzZSBmb3IoY29uc3QgdCBvZiBzKXtjb25zdHtyZWY6cixpczpzLG5vdDpuLHRoZW46byxvdGhlcndpc2U6YSxjb25jYXQ6aX09dDtlPWk/ZS5jb25jYXQoaSk6cj9lLndoZW4ocix7aXM6cyxub3Q6bix0aGVuOm8sb3RoZXJ3aXNlOmEsc3dpdGNoOnQuc3dpdGNoLGJyZWFrOnQuYnJlYWt9KTplLndoZW4ocyx7dGhlbjpvLG90aGVyd2lzZTphLGJyZWFrOnQuYnJlYWt9KX1lbHNle2NvbnN0IHQ9e307Zm9yKGNvbnN0e3RhcmdldDplLGFkanVzdGVyOnJ9b2Ygcyl0W2VdPXI7ZT1lLmFsdGVyKHQpfX1yZXR1cm4gZX19LG1lc3NhZ2VzOntcImFueS5jdXN0b21cIjpcInt7I2xhYmVsfX0gZmFpbGVkIGN1c3RvbSB2YWxpZGF0aW9uIGJlY2F1c2Uge3sjZXJyb3IubWVzc2FnZX19XCIsXCJhbnkuZGVmYXVsdFwiOlwie3sjbGFiZWx9fSB0aHJldyBhbiBlcnJvciB3aGVuIHJ1bm5pbmcgZGVmYXVsdCBtZXRob2RcIixcImFueS5mYWlsb3ZlclwiOlwie3sjbGFiZWx9fSB0aHJldyBhbiBlcnJvciB3aGVuIHJ1bm5pbmcgZmFpbG92ZXIgbWV0aG9kXCIsXCJhbnkuaW52YWxpZFwiOlwie3sjbGFiZWx9fSBjb250YWlucyBhbiBpbnZhbGlkIHZhbHVlXCIsXCJhbnkub25seVwiOid7eyNsYWJlbH19IG11c3QgYmUge2lmKCN2YWxpZHMubGVuZ3RoID09IDEsIFwiXCIsIFwib25lIG9mIFwiKX17eyN2YWxpZHN9fScsXCJhbnkucmVmXCI6J3t7I2xhYmVsfX0ge3sjYXJnfX0gcmVmZXJlbmNlcyBcInt7I3JlZn19XCIgd2hpY2gge3sjcmVhc29ufX0nLFwiYW55LnJlcXVpcmVkXCI6XCJ7eyNsYWJlbH19IGlzIHJlcXVpcmVkXCIsXCJhbnkudW5rbm93blwiOlwie3sjbGFiZWx9fSBpcyBub3QgYWxsb3dlZFwifX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDMyKSxuPXIoMSksbz1yKDcpO3QuUmVwb3J0PWNsYXNze2NvbnN0cnVjdG9yKGUscixzLG4sbyxhLGkpe2lmKHRoaXMuY29kZT1lLHRoaXMuZmxhZ3M9bix0aGlzLm1lc3NhZ2VzPW8sdGhpcy5wYXRoPWEucGF0aCx0aGlzLnByZWZzPWksdGhpcy5zdGF0ZT1hLHRoaXMudmFsdWU9cix0aGlzLm1lc3NhZ2U9bnVsbCx0aGlzLnRlbXBsYXRlPW51bGwsdGhpcy5sb2NhbD1zfHx7fSx0aGlzLmxvY2FsLmxhYmVsPXQubGFiZWwodGhpcy5mbGFncyx0aGlzLnN0YXRlLHRoaXMucHJlZnMsdGhpcy5tZXNzYWdlcyksdm9pZCAwPT09dGhpcy52YWx1ZXx8dGhpcy5sb2NhbC5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHwodGhpcy5sb2NhbC52YWx1ZT10aGlzLnZhbHVlKSx0aGlzLnBhdGgubGVuZ3RoKXtjb25zdCBlPXRoaXMucGF0aFt0aGlzLnBhdGgubGVuZ3RoLTFdO1wib2JqZWN0XCIhPXR5cGVvZiBlJiYodGhpcy5sb2NhbC5rZXk9ZSl9fV9zZXRUZW1wbGF0ZShlKXtpZih0aGlzLnRlbXBsYXRlPWUsIXRoaXMuZmxhZ3MubGFiZWwmJjA9PT10aGlzLnBhdGgubGVuZ3RoKXtjb25zdCBlPXRoaXMuX3RlbXBsYXRlKHRoaXMudGVtcGxhdGUsXCJyb290XCIpO2UmJih0aGlzLmxvY2FsLmxhYmVsPWUpfX10b1N0cmluZygpe2lmKHRoaXMubWVzc2FnZSlyZXR1cm4gdGhpcy5tZXNzYWdlO2NvbnN0IGU9dGhpcy5jb2RlO2lmKCF0aGlzLnByZWZzLmVycm9ycy5yZW5kZXIpcmV0dXJuIHRoaXMuY29kZTtjb25zdCB0PXRoaXMuX3RlbXBsYXRlKHRoaXMudGVtcGxhdGUpfHx0aGlzLl90ZW1wbGF0ZSh0aGlzLnByZWZzLm1lc3NhZ2VzKXx8dGhpcy5fdGVtcGxhdGUodGhpcy5tZXNzYWdlcyk7cmV0dXJuIHZvaWQgMD09PXQ/J0Vycm9yIGNvZGUgXCInLmNvbmNhdChlLCdcIiBpcyBub3QgZGVmaW5lZCwgeW91ciBjdXN0b20gdHlwZSBpcyBtaXNzaW5nIHRoZSBjb3JyZWN0IG1lc3NhZ2VzIGRlZmluaXRpb24nKToodGhpcy5tZXNzYWdlPXQucmVuZGVyKHRoaXMudmFsdWUsdGhpcy5zdGF0ZSx0aGlzLnByZWZzLHRoaXMubG9jYWwse2Vycm9yczp0aGlzLnByZWZzLmVycm9ycyxtZXNzYWdlczpbdGhpcy5wcmVmcy5tZXNzYWdlcyx0aGlzLm1lc3NhZ2VzXX0pLHRoaXMucHJlZnMuZXJyb3JzLmxhYmVsfHwodGhpcy5tZXNzYWdlPXRoaXMubWVzc2FnZS5yZXBsYWNlKC9eXCJcIiAvLFwiXCIpLnRyaW0oKSksdGhpcy5tZXNzYWdlKX1fdGVtcGxhdGUoZSxyKXtyZXR1cm4gdC50ZW1wbGF0ZSh0aGlzLnZhbHVlLGUscnx8dGhpcy5jb2RlLHRoaXMuc3RhdGUsdGhpcy5wcmVmcyl9fSx0LnBhdGg9ZnVuY3Rpb24oZSl7bGV0IHQ9XCJcIjtmb3IoY29uc3QgciBvZiBlKVwib2JqZWN0XCIhPXR5cGVvZiByJiYoXCJzdHJpbmdcIj09dHlwZW9mIHI/KHQmJih0Kz1cIi5cIiksdCs9cik6dCs9XCJbXCIuY29uY2F0KHIsXCJdXCIpKTtyZXR1cm4gdH0sdC50ZW1wbGF0ZT1mdW5jdGlvbihlLHQscixzLGEpe2lmKCF0KXJldHVybjtpZihvLmlzVGVtcGxhdGUodCkpcmV0dXJuXCJyb290XCIhPT1yP3Q6bnVsbDtsZXQgaT1hLmVycm9ycy5sYW5ndWFnZTtyZXR1cm4gbi5pc1Jlc29sdmFibGUoaSkmJihpPWkucmVzb2x2ZShlLHMsYSkpLGkmJnRbaV0mJnZvaWQgMCE9PXRbaV1bcl0/dFtpXVtyXTp0W3JdfSx0LmxhYmVsPWZ1bmN0aW9uKGUscixzLG4pe2lmKGUubGFiZWwpcmV0dXJuIGUubGFiZWw7aWYoIXMuZXJyb3JzLmxhYmVsKXJldHVyblwiXCI7bGV0IG89ci5wYXRoO1wia2V5XCI9PT1zLmVycm9ycy5sYWJlbCYmci5wYXRoLmxlbmd0aD4xJiYobz1yLnBhdGguc2xpY2UoLTEpKTtjb25zdCBhPXQucGF0aChvKTtyZXR1cm4gYXx8KHQudGVtcGxhdGUobnVsbCxzLm1lc3NhZ2VzLFwicm9vdFwiLHIscyl8fG4mJnQudGVtcGxhdGUobnVsbCxuLFwicm9vdFwiLHIscyl8fFwidmFsdWVcIil9LHQucHJvY2Vzcz1mdW5jdGlvbihlLHIscyl7aWYoIWUpcmV0dXJuIG51bGw7Y29uc3R7b3ZlcnJpZGU6bixtZXNzYWdlOm8sZGV0YWlsczphfT10LmRldGFpbHMoZSk7aWYobilyZXR1cm4gbjtpZihzLmVycm9ycy5zdGFjaylyZXR1cm4gbmV3IHQuVmFsaWRhdGlvbkVycm9yKG8sYSxyKTtjb25zdCBpPUVycm9yLnN0YWNrVHJhY2VMaW1pdDtFcnJvci5zdGFja1RyYWNlTGltaXQ9MDtjb25zdCBsPW5ldyB0LlZhbGlkYXRpb25FcnJvcihvLGEscik7cmV0dXJuIEVycm9yLnN0YWNrVHJhY2VMaW1pdD1pLGx9LHQuZGV0YWlscz1mdW5jdGlvbihlLHQ9e30pe2xldCByPVtdO2NvbnN0IHM9W107Zm9yKGNvbnN0IG4gb2YgZSl7aWYobiBpbnN0YW5jZW9mIEVycm9yKXtpZighMSE9PXQub3ZlcnJpZGUpcmV0dXJue292ZXJyaWRlOm59O2NvbnN0IGU9bi50b1N0cmluZygpO3IucHVzaChlKSxzLnB1c2goe21lc3NhZ2U6ZSx0eXBlOlwib3ZlcnJpZGVcIixjb250ZXh0OntlcnJvcjpufX0pO2NvbnRpbnVlfWNvbnN0IGU9bi50b1N0cmluZygpO3IucHVzaChlKSxzLnB1c2goe21lc3NhZ2U6ZSxwYXRoOm4ucGF0aC5maWx0ZXIoZT0+XCJvYmplY3RcIiE9dHlwZW9mIGUpLHR5cGU6bi5jb2RlLGNvbnRleHQ6bi5sb2NhbH0pfXJldHVybiByLmxlbmd0aD4xJiYocj1bLi4ubmV3IFNldChyKV0pLHttZXNzYWdlOnIuam9pbihcIi4gXCIpLGRldGFpbHM6c319LHQuVmFsaWRhdGlvbkVycm9yPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSx0LHIpe3N1cGVyKGUpLHRoaXMuX29yaWdpbmFsPXIsdGhpcy5kZXRhaWxzPXR9c3RhdGljIGlzRXJyb3IoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0LlZhbGlkYXRpb25FcnJvcn19LHQuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5pc0pvaT0hMCx0LlZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUubmFtZT1cIlZhbGlkYXRpb25FcnJvclwiLHQuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5hbm5vdGF0ZT1zLmVycm9yfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoNiksYT1yKDEpO2xldCBpO2NvbnN0IGw9e3N5bWJvbDpTeW1ib2woXCJyZWZcIiksZGVmYXVsdHM6e2FkanVzdDpudWxsLGluOiExLGl0ZXJhYmxlczpudWxsLG1hcDpudWxsLHNlcGFyYXRvcjpcIi5cIix0eXBlOlwidmFsdWVcIn19O3QuY3JlYXRlPWZ1bmN0aW9uKGUsdD17fSl7cyhcInN0cmluZ1wiPT10eXBlb2YgZSxcIkludmFsaWQgcmVmZXJlbmNlIGtleTpcIixlKSxhLmFzc2VydE9wdGlvbnModCxbXCJhZGp1c3RcIixcImFuY2VzdG9yXCIsXCJpblwiLFwiaXRlcmFibGVzXCIsXCJtYXBcIixcInByZWZpeFwiLFwic2VwYXJhdG9yXCJdKSxzKCF0LnByZWZpeHx8XCJvYmplY3RcIj09dHlwZW9mIHQucHJlZml4LFwib3B0aW9ucy5wcmVmaXggbXVzdCBiZSBvZiB0eXBlIG9iamVjdFwiKTtjb25zdCByPU9iamVjdC5hc3NpZ24oe30sbC5kZWZhdWx0cyx0KTtkZWxldGUgci5wcmVmaXg7Y29uc3Qgbj1yLnNlcGFyYXRvcixvPWwuY29udGV4dChlLG4sdC5wcmVmaXgpO2lmKHIudHlwZT1vLnR5cGUsZT1vLmtleSxcInZhbHVlXCI9PT1yLnR5cGUpaWYoby5yb290JiYocyghbnx8ZVswXSE9PW4sXCJDYW5ub3Qgc3BlY2lmeSByZWxhdGl2ZSBwYXRoIHdpdGggcm9vdCBwcmVmaXhcIiksci5hbmNlc3Rvcj1cInJvb3RcIixlfHwoZT1udWxsKSksbiYmbj09PWUpZT1udWxsLHIuYW5jZXN0b3I9MDtlbHNlIGlmKHZvaWQgMCE9PXIuYW5jZXN0b3Ipcyghbnx8IWV8fGVbMF0hPT1uLFwiQ2Fubm90IGNvbWJpbmUgcHJlZml4IHdpdGggYW5jZXN0b3Igb3B0aW9uXCIpO2Vsc2V7Y29uc3RbdCxzXT1sLmFuY2VzdG9yKGUsbik7cyYmXCJcIj09PShlPWUuc2xpY2UocykpJiYoZT1udWxsKSxyLmFuY2VzdG9yPXR9cmV0dXJuIHIucGF0aD1uP251bGw9PT1lP1tdOmUuc3BsaXQobik6W2VdLG5ldyBsLlJlZihyKX0sdC5pbj1mdW5jdGlvbihlLHI9e30pe3JldHVybiB0LmNyZWF0ZShlLE9iamVjdC5hc3NpZ24oe30scix7aW46ITB9KSl9LHQuaXNSZWY9ZnVuY3Rpb24oZSl7cmV0dXJuISFlJiYhIWVbYS5zeW1ib2xzLnJlZl19LGwuUmVmPWNsYXNze2NvbnN0cnVjdG9yKGUpe3MoXCJvYmplY3RcIj09dHlwZW9mIGUsXCJJbnZhbGlkIHJlZmVyZW5jZSBjb25zdHJ1Y3Rpb25cIiksYS5hc3NlcnRPcHRpb25zKGUsW1wiYWRqdXN0XCIsXCJhbmNlc3RvclwiLFwiaW5cIixcIml0ZXJhYmxlc1wiLFwibWFwXCIsXCJwYXRoXCIsXCJzZXBhcmF0b3JcIixcInR5cGVcIixcImRlcHRoXCIsXCJrZXlcIixcInJvb3RcIixcImRpc3BsYXlcIl0pLHMoWyExLHZvaWQgMF0uaW5jbHVkZXMoZS5zZXBhcmF0b3IpfHxcInN0cmluZ1wiPT10eXBlb2YgZS5zZXBhcmF0b3ImJjE9PT1lLnNlcGFyYXRvci5sZW5ndGgsXCJJbnZhbGlkIHNlcGFyYXRvclwiKSxzKCFlLmFkanVzdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgZS5hZGp1c3QsXCJvcHRpb25zLmFkanVzdCBtdXN0IGJlIGEgZnVuY3Rpb25cIikscyghZS5tYXB8fEFycmF5LmlzQXJyYXkoZS5tYXApLFwib3B0aW9ucy5tYXAgbXVzdCBiZSBhbiBhcnJheVwiKSxzKCFlLm1hcHx8IWUuYWRqdXN0LFwiQ2Fubm90IHNldCBib3RoIG1hcCBhbmQgYWRqdXN0IG9wdGlvbnNcIiksT2JqZWN0LmFzc2lnbih0aGlzLGwuZGVmYXVsdHMsZSkscyhcInZhbHVlXCI9PT10aGlzLnR5cGV8fHZvaWQgMD09PXRoaXMuYW5jZXN0b3IsXCJOb24tdmFsdWUgcmVmZXJlbmNlcyBjYW5ub3QgcmVmZXJlbmNlIGFuY2VzdG9yc1wiKSxBcnJheS5pc0FycmF5KHRoaXMubWFwKSYmKHRoaXMubWFwPW5ldyBNYXAodGhpcy5tYXApKSx0aGlzLmRlcHRoPXRoaXMucGF0aC5sZW5ndGgsdGhpcy5rZXk9dGhpcy5wYXRoLmxlbmd0aD90aGlzLnBhdGguam9pbih0aGlzLnNlcGFyYXRvcik6bnVsbCx0aGlzLnJvb3Q9dGhpcy5wYXRoWzBdLHRoaXMudXBkYXRlRGlzcGxheSgpfXJlc29sdmUoZSx0LHIsbixvPXt9KXtyZXR1cm4gcyghdGhpcy5pbnx8by5pbixcIkludmFsaWQgaW4oKSByZWZlcmVuY2UgdXNhZ2VcIiksXCJnbG9iYWxcIj09PXRoaXMudHlwZT90aGlzLl9yZXNvbHZlKHIuY29udGV4dCx0LG8pOlwibG9jYWxcIj09PXRoaXMudHlwZT90aGlzLl9yZXNvbHZlKG4sdCxvKTp0aGlzLmFuY2VzdG9yP1wicm9vdFwiPT09dGhpcy5hbmNlc3Rvcj90aGlzLl9yZXNvbHZlKHQuYW5jZXN0b3JzW3QuYW5jZXN0b3JzLmxlbmd0aC0xXSx0LG8pOihzKHRoaXMuYW5jZXN0b3I8PXQuYW5jZXN0b3JzLmxlbmd0aCxcIkludmFsaWQgcmVmZXJlbmNlIGV4Y2VlZHMgdGhlIHNjaGVtYSByb290OlwiLHRoaXMuZGlzcGxheSksdGhpcy5fcmVzb2x2ZSh0LmFuY2VzdG9yc1t0aGlzLmFuY2VzdG9yLTFdLHQsbykpOnRoaXMuX3Jlc29sdmUoZSx0LG8pfV9yZXNvbHZlKGUsdCxyKXtsZXQgcztpZihcInZhbHVlXCI9PT10aGlzLnR5cGUmJnQubWFpbnN0YXkuc2hhZG93JiYhMSE9PXIuc2hhZG93JiYocz10Lm1haW5zdGF5LnNoYWRvdy5nZXQodGhpcy5hYnNvbHV0ZSh0KSkpLHZvaWQgMD09PXMmJihzPW8oZSx0aGlzLnBhdGgse2l0ZXJhYmxlczp0aGlzLml0ZXJhYmxlcyxmdW5jdGlvbnM6ITB9KSksdGhpcy5hZGp1c3QmJihzPXRoaXMuYWRqdXN0KHMpKSx0aGlzLm1hcCl7Y29uc3QgZT10aGlzLm1hcC5nZXQocyk7dm9pZCAwIT09ZSYmKHM9ZSl9cmV0dXJuIHQubWFpbnN0YXkmJnQubWFpbnN0YXkudHJhY2VyLnJlc29sdmUodCx0aGlzLHMpLHN9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5kaXNwbGF5fWFic29sdXRlKGUpe3JldHVyblsuLi5lLnBhdGguc2xpY2UoMCwtdGhpcy5hbmNlc3RvciksLi4udGhpcy5wYXRoXX1jbG9uZSgpe3JldHVybiBuZXcgbC5SZWYodGhpcyl9ZGVzY3JpYmUoKXtjb25zdCBlPXtwYXRoOnRoaXMucGF0aH07XCJ2YWx1ZVwiIT09dGhpcy50eXBlJiYoZS50eXBlPXRoaXMudHlwZSksXCIuXCIhPT10aGlzLnNlcGFyYXRvciYmKGUuc2VwYXJhdG9yPXRoaXMuc2VwYXJhdG9yKSxcInZhbHVlXCI9PT10aGlzLnR5cGUmJjEhPT10aGlzLmFuY2VzdG9yJiYoZS5hbmNlc3Rvcj10aGlzLmFuY2VzdG9yKSx0aGlzLm1hcCYmKGUubWFwPVsuLi50aGlzLm1hcF0pO2Zvcihjb25zdCB0IG9mW1wiYWRqdXN0XCIsXCJpdGVyYWJsZXNcIl0pbnVsbCE9PXRoaXNbdF0mJihlW3RdPXRoaXNbdF0pO3JldHVybiExIT09dGhpcy5pbiYmKGUuaW49ITApLHtyZWY6ZX19dXBkYXRlRGlzcGxheSgpe2NvbnN0IGU9bnVsbCE9PXRoaXMua2V5P3RoaXMua2V5OlwiXCI7aWYoXCJ2YWx1ZVwiIT09dGhpcy50eXBlKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQodGhpcy50eXBlLFwiOlwiKS5jb25jYXQoZSkpO2lmKCF0aGlzLnNlcGFyYXRvcilyZXR1cm4gdm9pZCh0aGlzLmRpc3BsYXk9XCJyZWY6XCIuY29uY2F0KGUpKTtpZighdGhpcy5hbmNlc3RvcilyZXR1cm4gdm9pZCh0aGlzLmRpc3BsYXk9XCJyZWY6XCIuY29uY2F0KHRoaXMuc2VwYXJhdG9yKS5jb25jYXQoZSkpO2lmKFwicm9vdFwiPT09dGhpcy5hbmNlc3RvcilyZXR1cm4gdm9pZCh0aGlzLmRpc3BsYXk9XCJyZWY6cm9vdDpcIi5jb25jYXQoZSkpO2lmKDE9PT10aGlzLmFuY2VzdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQoZXx8XCIuLlwiKSk7Y29uc3QgdD1uZXcgQXJyYXkodGhpcy5hbmNlc3RvcisxKS5maWxsKHRoaXMuc2VwYXJhdG9yKS5qb2luKFwiXCIpO3RoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQodCkuY29uY2F0KGV8fFwiXCIpfX0sbC5SZWYucHJvdG90eXBlW2Euc3ltYm9scy5yZWZdPSEwLHQuYnVpbGQ9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ2YWx1ZVwiPT09KGU9T2JqZWN0LmFzc2lnbih7fSxsLmRlZmF1bHRzLGUpKS50eXBlJiZ2b2lkIDA9PT1lLmFuY2VzdG9yJiYoZS5hbmNlc3Rvcj0xKSxuZXcgbC5SZWYoZSl9LGwuY29udGV4dD1mdW5jdGlvbihlLHQscj17fSl7aWYoZT1lLnRyaW0oKSxyKXtjb25zdCBzPXZvaWQgMD09PXIuZ2xvYmFsP1wiJFwiOnIuZ2xvYmFsO2lmKHMhPT10JiZlLnN0YXJ0c1dpdGgocykpcmV0dXJue2tleTplLnNsaWNlKHMubGVuZ3RoKSx0eXBlOlwiZ2xvYmFsXCJ9O2NvbnN0IG49dm9pZCAwPT09ci5sb2NhbD9cIiNcIjpyLmxvY2FsO2lmKG4hPT10JiZlLnN0YXJ0c1dpdGgobikpcmV0dXJue2tleTplLnNsaWNlKG4ubGVuZ3RoKSx0eXBlOlwibG9jYWxcIn07Y29uc3Qgbz12b2lkIDA9PT1yLnJvb3Q/XCIvXCI6ci5yb290O2lmKG8hPT10JiZlLnN0YXJ0c1dpdGgobykpcmV0dXJue2tleTplLnNsaWNlKG8ubGVuZ3RoKSx0eXBlOlwidmFsdWVcIixyb290OiEwfX1yZXR1cm57a2V5OmUsdHlwZTpcInZhbHVlXCJ9fSxsLmFuY2VzdG9yPWZ1bmN0aW9uKGUsdCl7aWYoIXQpcmV0dXJuWzEsMF07aWYoZVswXSE9PXQpcmV0dXJuWzEsMF07aWYoZVsxXSE9PXQpcmV0dXJuWzAsMV07bGV0IHI9Mjtmb3IoO2Vbcl09PT10OykrK3I7cmV0dXJuW3ItMSxyXX0sdC50b1NpYmxpbmc9MCx0LnRvUGFyZW50PTEsdC5NYW5hZ2VyPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5yZWZzPVtdfXJlZ2lzdGVyKGUscyl7aWYoZSlpZihzPXZvaWQgMD09PXM/dC50b1BhcmVudDpzLEFycmF5LmlzQXJyYXkoZSkpZm9yKGNvbnN0IHQgb2YgZSl0aGlzLnJlZ2lzdGVyKHQscyk7ZWxzZSBpZihhLmlzU2NoZW1hKGUpKWZvcihjb25zdCB0IG9mIGUuX3JlZnMucmVmcyl0LmFuY2VzdG9yLXM+PTAmJnRoaXMucmVmcy5wdXNoKHthbmNlc3Rvcjp0LmFuY2VzdG9yLXMscm9vdDp0LnJvb3R9KTtlbHNlIHQuaXNSZWYoZSkmJlwidmFsdWVcIj09PWUudHlwZSYmZS5hbmNlc3Rvci1zPj0wJiZ0aGlzLnJlZnMucHVzaCh7YW5jZXN0b3I6ZS5hbmNlc3Rvci1zLHJvb3Q6ZS5yb290fSksaT1pfHxyKDcpLGkuaXNUZW1wbGF0ZShlKSYmdGhpcy5yZWdpc3RlcihlLnJlZnMoKSxzKX1nZXQgbGVuZ3RoKCl7cmV0dXJuIHRoaXMucmVmcy5sZW5ndGh9Y2xvbmUoKXtjb25zdCBlPW5ldyB0Lk1hbmFnZXI7cmV0dXJuIGUucmVmcz1uKHRoaXMucmVmcyksZX1yZXNldCgpe3RoaXMucmVmcz1bXX1yb290cygpe3JldHVybiB0aGlzLnJlZnMuZmlsdGVyKGU9PiFlLmFuY2VzdG9yKS5tYXAoZT0+ZS5yb290KX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49e307ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtpZighMT09PXR8fG51bGw9PXQpcmV0dXJuIGU7XCJzdHJpbmdcIj09dHlwZW9mKHI9cnx8e30pJiYocj17c2VwYXJhdG9yOnJ9KTtjb25zdCBvPUFycmF5LmlzQXJyYXkodCk7cyghb3x8IXIuc2VwYXJhdG9yLFwiU2VwYXJhdG9yIG9wdGlvbiBubyB2YWxpZCBmb3IgYXJyYXktYmFzZWQgY2hhaW5cIik7Y29uc3QgYT1vP3Q6dC5zcGxpdChyLnNlcGFyYXRvcnx8XCIuXCIpO2xldCBpPWU7Zm9yKGxldCBlPTA7ZTxhLmxlbmd0aDsrK2Upe2xldCBvPWFbZV07Y29uc3QgbD1yLml0ZXJhYmxlcyYmbi5pdGVyYWJsZXMoaSk7aWYoQXJyYXkuaXNBcnJheShpKXx8XCJzZXRcIj09PWwpe2NvbnN0IGU9TnVtYmVyKG8pO051bWJlci5pc0ludGVnZXIoZSkmJihvPWU8MD9pLmxlbmd0aCtlOmUpfWlmKCFpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYhMT09PXIuZnVuY3Rpb25zfHwhbCYmdm9pZCAwPT09aVtvXSl7cyghci5zdHJpY3R8fGUrMT09PWEubGVuZ3RoLFwiTWlzc2luZyBzZWdtZW50XCIsbyxcImluIHJlYWNoIHBhdGggXCIsdCkscyhcIm9iamVjdFwiPT10eXBlb2YgaXx8ITA9PT1yLmZ1bmN0aW9uc3x8XCJmdW5jdGlvblwiIT10eXBlb2YgaSxcIkludmFsaWQgc2VnbWVudFwiLG8sXCJpbiByZWFjaCBwYXRoIFwiLHQpLGk9ci5kZWZhdWx0O2JyZWFrfWk9bD9cInNldFwiPT09bD9bLi4uaV1bb106aS5nZXQobyk6aVtvXX1yZXR1cm4gaX0sbi5pdGVyYWJsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBTZXQ/XCJzZXRcIjplIGluc3RhbmNlb2YgTWFwP1wibWFwXCI6dm9pZCAwfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDMwKSxhPXIoMzEpLGk9cigxKSxsPXIoNCksYz1yKDUpLHU9e3N5bWJvbDpTeW1ib2woXCJ0ZW1wbGF0ZVwiKSxvcGVuczpuZXcgQXJyYXkoMWUzKS5qb2luKFwiXFwwXCIpLGNsb3NlczpuZXcgQXJyYXkoMWUzKS5qb2luKFwiXHUwMDAxXCIpLGRhdGVGb3JtYXQ6e2RhdGU6RGF0ZS5wcm90b3R5cGUudG9EYXRlU3RyaW5nLGlzbzpEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyxzdHJpbmc6RGF0ZS5wcm90b3R5cGUudG9TdHJpbmcsdGltZTpEYXRlLnByb3RvdHlwZS50b1RpbWVTdHJpbmcsdXRjOkRhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nfX07ZS5leHBvcnRzPXUuVGVtcGxhdGU9Y2xhc3N7Y29uc3RydWN0b3IoZSx0KXtzKFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiVGVtcGxhdGUgc291cmNlIG11c3QgYmUgYSBzdHJpbmdcIikscyghZS5pbmNsdWRlcyhcIlxcMFwiKSYmIWUuaW5jbHVkZXMoXCJcdTAwMDFcIiksXCJUZW1wbGF0ZSBzb3VyY2UgY2Fubm90IGNvbnRhaW4gcmVzZXJ2ZWQgY29udHJvbCBjaGFyYWN0ZXJzXCIpLHRoaXMuc291cmNlPWUsdGhpcy5yZW5kZXJlZD1lLHRoaXMuX3RlbXBsYXRlPW51bGwsdGhpcy5fc2V0dGluZ3M9bih0KSx0aGlzLl9wYXJzZSgpfV9wYXJzZSgpe2lmKCF0aGlzLnNvdXJjZS5pbmNsdWRlcyhcIntcIikpcmV0dXJuO2NvbnN0IGU9dS5lbmNvZGUodGhpcy5zb3VyY2UpLHQ9dS5zcGxpdChlKTtsZXQgcj0hMTtjb25zdCBzPVtdLG49dC5zaGlmdCgpO24mJnMucHVzaChuKTtmb3IoY29uc3QgZSBvZiB0KXtjb25zdCB0PVwie1wiIT09ZVswXSxuPXQ/XCJ9XCI6XCJ9fVwiLG89ZS5pbmRleE9mKG4pO2lmKC0xPT09b3x8XCJ7XCI9PT1lWzFdKXtzLnB1c2goXCJ7XCIuY29uY2F0KHUuZGVjb2RlKGUpKSk7Y29udGludWV9Y29uc3QgYT1lLnNsaWNlKHQ/MDoxLG8pLGk9dGhpcy5fcmVmKHUuZGVjb2RlKGEpLHQpO3MucHVzaChpKSxcInN0cmluZ1wiIT10eXBlb2YgaSYmKHI9ITApO2NvbnN0IGw9ZS5zbGljZShvK24ubGVuZ3RoKTtsJiZzLnB1c2godS5kZWNvZGUobCkpfXI/dGhpcy5fdGVtcGxhdGU9czp0aGlzLnJlbmRlcmVkPXMuam9pbihcIlwiKX1zdGF0aWMgZGF0ZShlLHQpe3JldHVybiB1LmRhdGVGb3JtYXRbdC5kYXRlRm9ybWF0XS5jYWxsKGUpfWRlc2NyaWJlKGU9e30pe2lmKCF0aGlzLl9zZXR0aW5ncyYmZS5jb21wYWN0KXJldHVybiB0aGlzLnNvdXJjZTtjb25zdCB0PXt0ZW1wbGF0ZTp0aGlzLnNvdXJjZX07cmV0dXJuIHRoaXMuX3NldHRpbmdzJiYodC5vcHRpb25zPXRoaXMuX3NldHRpbmdzKSx0fXN0YXRpYyBidWlsZChlKXtyZXR1cm4gbmV3IHUuVGVtcGxhdGUoZS50ZW1wbGF0ZSxlLm9wdGlvbnMpfWlzRHluYW1pYygpe3JldHVybiEhdGhpcy5fdGVtcGxhdGV9c3RhdGljIGlzVGVtcGxhdGUoZSl7cmV0dXJuISFlJiYhIWVbaS5zeW1ib2xzLnRlbXBsYXRlXX1yZWZzKCl7aWYoIXRoaXMuX3RlbXBsYXRlKXJldHVybjtjb25zdCBlPVtdO2Zvcihjb25zdCB0IG9mIHRoaXMuX3RlbXBsYXRlKVwic3RyaW5nXCIhPXR5cGVvZiB0JiZlLnB1c2goLi4udC5yZWZzKTtyZXR1cm4gZX1yZXNvbHZlKGUsdCxyLHMpe3JldHVybiB0aGlzLl90ZW1wbGF0ZSYmMT09PXRoaXMuX3RlbXBsYXRlLmxlbmd0aD90aGlzLl9wYXJ0KHRoaXMuX3RlbXBsYXRlWzBdLGUsdCxyLHMse30pOnRoaXMucmVuZGVyKGUsdCxyLHMpfV9wYXJ0KGUsLi4udCl7cmV0dXJuIGUucmVmP2UucmVmLnJlc29sdmUoLi4udCk6ZS5mb3JtdWxhLmV2YWx1YXRlKHQpfXJlbmRlcihlLHQscixzLG49e30pe2lmKCF0aGlzLmlzRHluYW1pYygpKXJldHVybiB0aGlzLnJlbmRlcmVkO2NvbnN0IGE9W107Zm9yKGNvbnN0IGkgb2YgdGhpcy5fdGVtcGxhdGUpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpYS5wdXNoKGkpO2Vsc2V7Y29uc3QgbD10aGlzLl9wYXJ0KGksZSx0LHIscyxuKSxjPXUuc3RyaW5naWZ5KGwscixuLmVycm9ycyk7aWYodm9pZCAwIT09Yyl7Y29uc3QgZT1pLnJhd3x8ITE9PT0obi5lcnJvcnMmJm4uZXJyb3JzLmVzY2FwZUh0bWwpP2M6byhjKSx0PWkucmVmJiZcImxvY2FsXCI9PT1pLnJlZi50eXBlJiZcImxhYmVsXCI9PT1pLnJlZi5rZXkmJnIuZXJyb3JzLndyYXAubGFiZWw7YS5wdXNoKHUud3JhcChlLHQpKX19cmV0dXJuIGEuam9pbihcIlwiKX1fcmVmKGUsdCl7Y29uc3Qgcj1bXSxzPWU9Pntjb25zdCB0PWMuY3JlYXRlKGUsdGhpcy5fc2V0dGluZ3MpO3JldHVybiByLnB1c2godCksZT0+dC5yZXNvbHZlKC4uLmUpfTt0cnl7dmFyIG49bmV3IGEuUGFyc2VyKGUse3JlZmVyZW5jZTpzLGZ1bmN0aW9uczp1LmZ1bmN0aW9ucyxjb25zdGFudHM6dS5jb25zdGFudHN9KX1jYXRjaCh0KXt0aHJvdyB0Lm1lc3NhZ2U9J0ludmFsaWQgdGVtcGxhdGUgdmFyaWFibGUgXCInLmNvbmNhdChlLCdcIiBmYWlscyBkdWUgdG86ICcpLmNvbmNhdCh0Lm1lc3NhZ2UpLHR9cmV0dXJuIG4uc2luZ2xlP1wicmVmZXJlbmNlXCI9PT1uLnNpbmdsZS50eXBlP3tyZWY6clswXSxyYXc6dCxyZWZzOnJ9OnUuc3RyaW5naWZ5KG4uc2luZ2xlLnZhbHVlKTp7Zm9ybXVsYTpuLHJhdzp0LHJlZnM6cn19dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5zb3VyY2V9fSx1LlRlbXBsYXRlLnByb3RvdHlwZVtpLnN5bWJvbHMudGVtcGxhdGVdPSEwLHUuVGVtcGxhdGUucHJvdG90eXBlLmlzSW1tdXRhYmxlPSEwLHUuZW5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcXFwoXFx7KykvZywoZSx0KT0+dS5vcGVucy5zbGljZSgwLHQubGVuZ3RoKSkucmVwbGFjZSgvXFxcXChcXH0rKS9nLChlLHQpPT51LmNsb3Nlcy5zbGljZSgwLHQubGVuZ3RoKSl9LHUuZGVjb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcdTAwMDAvZyxcIntcIikucmVwbGFjZSgvXFx1MDAwMS9nLFwifVwiKX0sdS5zcGxpdD1mdW5jdGlvbihlKXtjb25zdCB0PVtdO2xldCByPVwiXCI7Zm9yKGxldCBzPTA7czxlLmxlbmd0aDsrK3Mpe2NvbnN0IG49ZVtzXTtpZihcIntcIj09PW4pe2xldCBuPVwiXCI7Zm9yKDtzKzE8ZS5sZW5ndGgmJlwie1wiPT09ZVtzKzFdOyluKz1cIntcIiwrK3M7dC5wdXNoKHIpLHI9bn1lbHNlIHIrPW59cmV0dXJuIHQucHVzaChyKSx0fSx1LndyYXA9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD8xPT09dC5sZW5ndGg/XCJcIi5jb25jYXQodCkuY29uY2F0KGUpLmNvbmNhdCh0KTpcIlwiLmNvbmNhdCh0WzBdKS5jb25jYXQoZSkuY29uY2F0KHRbMV0pOmV9LHUuc3RyaW5naWZ5PWZ1bmN0aW9uKGUsdCxyKXtjb25zdCBzPXR5cGVvZiBlO2lmKG51bGw9PT1lKXJldHVyblwibnVsbFwiO2lmKFwic3RyaW5nXCI9PT1zKXJldHVybiBlO2lmKFwibnVtYmVyXCI9PT1zfHxcImZ1bmN0aW9uXCI9PT1zfHxcInN5bWJvbFwiPT09cylyZXR1cm4gZS50b1N0cmluZygpO2lmKFwib2JqZWN0XCIhPT1zKXJldHVybiBKU09OLnN0cmluZ2lmeShlKTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gdS5UZW1wbGF0ZS5kYXRlKGUsdCk7aWYoZSBpbnN0YW5jZW9mIE1hcCl7Y29uc3QgdD1bXTtmb3IoY29uc3RbcixzXW9mIGUuZW50cmllcygpKXQucHVzaChcIlwiLmNvbmNhdChyLnRvU3RyaW5nKCksXCIgLT4gXCIpLmNvbmNhdChzLnRvU3RyaW5nKCkpKTtlPXR9aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGUudG9TdHJpbmcoKTtsZXQgbj1cIlwiO2Zvcihjb25zdCBzIG9mIGUpbj1uKyhuLmxlbmd0aD9cIiwgXCI6XCJcIikrdS5zdHJpbmdpZnkocyx0LHIpO3JldHVybiB1LndyYXAobix0LmVycm9ycy53cmFwLmFycmF5KX0sdS5jb25zdGFudHM9e3RydWU6ITAsZmFsc2U6ITEsbnVsbDpudWxsLHNlY29uZDoxZTMsbWludXRlOjZlNCxob3VyOjM2ZTUsZGF5Ojg2NGU1fSx1LmZ1bmN0aW9ucz17aWY6KGUsdCxyKT0+ZT90OnIsbXNnKGUpe2NvbnN0W3QscixzLG4sb109dGhpcyxhPW8ubWVzc2FnZXM7aWYoIWEpcmV0dXJuXCJcIjtjb25zdCBpPWwudGVtcGxhdGUodCxhWzBdLGUscixzKXx8bC50ZW1wbGF0ZSh0LGFbMV0sZSxyLHMpO3JldHVybiBpP2kucmVuZGVyKHQscixzLG4sbyk6XCJcIn0sbnVtYmVyOmU9PlwibnVtYmVyXCI9PXR5cGVvZiBlP2U6XCJzdHJpbmdcIj09dHlwZW9mIGU/cGFyc2VGbG9hdChlKTpcImJvb2xlYW5cIj09dHlwZW9mIGU/ZT8xOjA6ZSBpbnN0YW5jZW9mIERhdGU/ZS5nZXRUaW1lKCk6bnVsbH19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDEpLG89cig1KSxhPXt9O3Quc2NoZW1hPWZ1bmN0aW9uKGUsdCxyPXt9KXtuLmFzc2VydE9wdGlvbnMocixbXCJhcHBlbmRQYXRoXCIsXCJvdmVycmlkZVwiXSk7dHJ5e3JldHVybiBhLnNjaGVtYShlLHQscil9Y2F0Y2goZSl7dGhyb3cgci5hcHBlbmRQYXRoJiZ2b2lkIDAhPT1lLnBhdGgmJihlLm1lc3NhZ2U9XCJcIi5jb25jYXQoZS5tZXNzYWdlLFwiIChcIikuY29uY2F0KGUucGF0aCxcIilcIikpLGV9fSxhLnNjaGVtYT1mdW5jdGlvbihlLHQscil7cyh2b2lkIDAhPT10LFwiSW52YWxpZCB1bmRlZmluZWQgc2NoZW1hXCIpLEFycmF5LmlzQXJyYXkodCkmJihzKHQubGVuZ3RoLFwiSW52YWxpZCBlbXB0eSBhcnJheSBzY2hlbWFcIiksMT09PXQubGVuZ3RoJiYodD10WzBdKSk7Y29uc3Qgbz0odCwuLi5zKT0+ITEhPT1yLm92ZXJyaWRlP3QudmFsaWQoZS5vdmVycmlkZSwuLi5zKTp0LnZhbGlkKC4uLnMpO2lmKGEuc2ltcGxlKHQpKXJldHVybiBvKGUsdCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gZS5jdXN0b20odCk7aWYocyhcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgc2NoZW1hIGNvbnRlbnQ6XCIsdHlwZW9mIHQpLG4uaXNSZXNvbHZhYmxlKHQpKXJldHVybiBvKGUsdCk7aWYobi5pc1NjaGVtYSh0KSlyZXR1cm4gdDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IoY29uc3QgciBvZiB0KWlmKCFhLnNpbXBsZShyKSlyZXR1cm4gZS5hbHRlcm5hdGl2ZXMoKS50cnkoLi4udCk7cmV0dXJuIG8oZSwuLi50KX1yZXR1cm4gdCBpbnN0YW5jZW9mIFJlZ0V4cD9lLnN0cmluZygpLnJlZ2V4KHQpOnQgaW5zdGFuY2VvZiBEYXRlP28oZS5kYXRlKCksdCk6KHMoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpPT09T2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcIlNjaGVtYSBjYW4gb25seSBjb250YWluIHBsYWluIG9iamVjdHNcIiksZS5vYmplY3QoKS5rZXlzKHQpKX0sdC5yZWY9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gby5pc1JlZihlKT9lOm8uY3JlYXRlKGUsdCl9LHQuY29tcGlsZT1mdW5jdGlvbihlLHIsbz17fSl7bi5hc3NlcnRPcHRpb25zKG8sW1wibGVnYWN5XCJdKTtjb25zdCBpPXImJnJbbi5zeW1ib2xzLmFueV07aWYoaSlyZXR1cm4gcyhvLmxlZ2FjeXx8aS52ZXJzaW9uPT09bi52ZXJzaW9uLFwiQ2Fubm90IG1peCBkaWZmZXJlbnQgdmVyc2lvbnMgb2Ygam9pIHNjaGVtYXM6XCIsaS52ZXJzaW9uLG4udmVyc2lvbikscjtpZihcIm9iamVjdFwiIT10eXBlb2Ygcnx8IW8ubGVnYWN5KXJldHVybiB0LnNjaGVtYShlLHIse2FwcGVuZFBhdGg6ITB9KTtjb25zdCBsPWEud2FsayhyKTtyZXR1cm4gbD9sLmNvbXBpbGUobC5yb290LHIpOnQuc2NoZW1hKGUscix7YXBwZW5kUGF0aDohMH0pfSxhLndhbGs9ZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKGNvbnN0IHQgb2YgZSl7Y29uc3QgZT1hLndhbGsodCk7aWYoZSlyZXR1cm4gZX1yZXR1cm4gbnVsbH1jb25zdCB0PWVbbi5zeW1ib2xzLmFueV07aWYodClyZXR1cm57cm9vdDplW3Qucm9vdF0sY29tcGlsZTp0LmNvbXBpbGV9O3MoT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpPT09T2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcIlNjaGVtYSBjYW4gb25seSBjb250YWluIHBsYWluIG9iamVjdHNcIik7Zm9yKGNvbnN0IHQgaW4gZSl7Y29uc3Qgcj1hLndhbGsoZVt0XSk7aWYocilyZXR1cm4gcn1yZXR1cm4gbnVsbH0sYS5zaW1wbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lfHxbXCJib29sZWFuXCIsXCJzdHJpbmdcIixcIm51bWJlclwiXS5pbmNsdWRlcyh0eXBlb2YgZSl9LHQud2hlbj1mdW5jdGlvbihlLHIsaSl7aWYodm9pZCAwPT09aSYmKHMociYmXCJvYmplY3RcIj09dHlwZW9mIHIsXCJNaXNzaW5nIG9wdGlvbnNcIiksaT1yLHI9by5jcmVhdGUoXCIuXCIpKSxBcnJheS5pc0FycmF5KGkpJiYoaT17c3dpdGNoOml9KSxuLmFzc2VydE9wdGlvbnMoaSxbXCJpc1wiLFwibm90XCIsXCJ0aGVuXCIsXCJvdGhlcndpc2VcIixcInN3aXRjaFwiLFwiYnJlYWtcIl0pLG4uaXNTY2hlbWEocikpcmV0dXJuIHModm9pZCAwPT09aS5pcywnXCJpc1wiIGNhbiBub3QgYmUgdXNlZCB3aXRoIGEgc2NoZW1hIGNvbmRpdGlvbicpLHModm9pZCAwPT09aS5ub3QsJ1wibm90XCIgY2FuIG5vdCBiZSB1c2VkIHdpdGggYSBzY2hlbWEgY29uZGl0aW9uJykscyh2b2lkIDA9PT1pLnN3aXRjaCwnXCJzd2l0Y2hcIiBjYW4gbm90IGJlIHVzZWQgd2l0aCBhIHNjaGVtYSBjb25kaXRpb24nKSxhLmNvbmRpdGlvbihlLHtpczpyLHRoZW46aS50aGVuLG90aGVyd2lzZTppLm90aGVyd2lzZSxicmVhazppLmJyZWFrfSk7aWYocyhvLmlzUmVmKHIpfHxcInN0cmluZ1wiPT10eXBlb2YgcixcIkludmFsaWQgY29uZGl0aW9uOlwiLHIpLHModm9pZCAwPT09aS5ub3R8fHZvaWQgMD09PWkuaXMsJ0Nhbm5vdCBjb21iaW5lIFwiaXNcIiB3aXRoIFwibm90XCInKSx2b2lkIDA9PT1pLnN3aXRjaCl7bGV0IGw9aTt2b2lkIDAhPT1pLm5vdCYmKGw9e2lzOmkubm90LHRoZW46aS5vdGhlcndpc2Usb3RoZXJ3aXNlOmkudGhlbixicmVhazppLmJyZWFrfSk7bGV0IGM9dm9pZCAwIT09bC5pcz9lLiRfY29tcGlsZShsLmlzKTplLiRfcm9vdC5pbnZhbGlkKG51bGwsITEsMCxcIlwiKS5yZXF1aXJlZCgpO3JldHVybiBzKHZvaWQgMCE9PWwudGhlbnx8dm9pZCAwIT09bC5vdGhlcndpc2UsJ29wdGlvbnMgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBvZiBcInRoZW5cIiwgXCJvdGhlcndpc2VcIiwgb3IgXCJzd2l0Y2hcIicpLHModm9pZCAwPT09bC5icmVha3x8dm9pZCAwPT09bC50aGVufHx2b2lkIDA9PT1sLm90aGVyd2lzZSxcIkNhbm5vdCBzcGVjaWZ5IHRoZW4sIG90aGVyd2lzZSwgYW5kIGJyZWFrIGFsbCB0b2dldGhlclwiKSx2b2lkIDA9PT1pLmlzfHxvLmlzUmVmKGkuaXMpfHxuLmlzU2NoZW1hKGkuaXMpfHwoYz1jLnJlcXVpcmVkKCkpLGEuY29uZGl0aW9uKGUse3JlZjp0LnJlZihyKSxpczpjLHRoZW46bC50aGVuLG90aGVyd2lzZTpsLm90aGVyd2lzZSxicmVhazpsLmJyZWFrfSl9cyhBcnJheS5pc0FycmF5KGkuc3dpdGNoKSwnXCJzd2l0Y2hcIiBtdXN0IGJlIGFuIGFycmF5Jykscyh2b2lkIDA9PT1pLmlzLCdDYW5ub3QgY29tYmluZSBcInN3aXRjaFwiIHdpdGggXCJpc1wiJykscyh2b2lkIDA9PT1pLm5vdCwnQ2Fubm90IGNvbWJpbmUgXCJzd2l0Y2hcIiB3aXRoIFwibm90XCInKSxzKHZvaWQgMD09PWkudGhlbiwnQ2Fubm90IGNvbWJpbmUgXCJzd2l0Y2hcIiB3aXRoIFwidGhlblwiJyk7Y29uc3QgbD17cmVmOnQucmVmKHIpLHN3aXRjaDpbXSxicmVhazppLmJyZWFrfTtmb3IobGV0IHQ9MDt0PGkuc3dpdGNoLmxlbmd0aDsrK3Qpe2NvbnN0IHI9aS5zd2l0Y2hbdF0sYT10PT09aS5zd2l0Y2gubGVuZ3RoLTE7bi5hc3NlcnRPcHRpb25zKHIsYT9bXCJpc1wiLFwidGhlblwiLFwib3RoZXJ3aXNlXCJdOltcImlzXCIsXCJ0aGVuXCJdKSxzKHZvaWQgMCE9PXIuaXMsJ1N3aXRjaCBzdGF0ZW1lbnQgbWlzc2luZyBcImlzXCInKSxzKHZvaWQgMCE9PXIudGhlbiwnU3dpdGNoIHN0YXRlbWVudCBtaXNzaW5nIFwidGhlblwiJyk7Y29uc3QgYz17aXM6ZS4kX2NvbXBpbGUoci5pcyksdGhlbjplLiRfY29tcGlsZShyLnRoZW4pfTtpZihvLmlzUmVmKHIuaXMpfHxuLmlzU2NoZW1hKHIuaXMpfHwoYy5pcz1jLmlzLnJlcXVpcmVkKCkpLGEpe3Modm9pZCAwPT09aS5vdGhlcndpc2V8fHZvaWQgMD09PXIub3RoZXJ3aXNlLCdDYW5ub3Qgc3BlY2lmeSBcIm90aGVyd2lzZVwiIGluc2lkZSBhbmQgb3V0c2lkZSBhIFwic3dpdGNoXCInKTtjb25zdCB0PXZvaWQgMCE9PWkub3RoZXJ3aXNlP2kub3RoZXJ3aXNlOnIub3RoZXJ3aXNlO3ZvaWQgMCE9PXQmJihzKHZvaWQgMD09PWwuYnJlYWssXCJDYW5ub3Qgc3BlY2lmeSBib3RoIG90aGVyd2lzZSBhbmQgYnJlYWtcIiksYy5vdGhlcndpc2U9ZS4kX2NvbXBpbGUodCkpfWwuc3dpdGNoLnB1c2goYyl9cmV0dXJuIGx9LGEuY29uZGl0aW9uPWZ1bmN0aW9uKGUsdCl7Zm9yKGNvbnN0IHIgb2ZbXCJ0aGVuXCIsXCJvdGhlcndpc2VcIl0pdm9pZCAwPT09dFtyXT9kZWxldGUgdFtyXTp0W3JdPWUuJF9jb21waWxlKHRbcl0pO3JldHVybiB0fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDcpO3QuY29tcGlsZT1mdW5jdGlvbihlLHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBzKCF0LFwiQ2Fubm90IHNldCBzaW5nbGUgbWVzc2FnZSBzdHJpbmdcIiksbmV3IG8oZSk7aWYoby5pc1RlbXBsYXRlKGUpKXJldHVybiBzKCF0LFwiQ2Fubm90IHNldCBzaW5nbGUgbWVzc2FnZSB0ZW1wbGF0ZVwiKSxlO3MoXCJvYmplY3RcIj09dHlwZW9mIGUmJiFBcnJheS5pc0FycmF5KGUpLFwiSW52YWxpZCBtZXNzYWdlIG9wdGlvbnNcIiksdD10P24odCk6e307Zm9yKGxldCByIGluIGUpe2NvbnN0IG49ZVtyXTtpZihcInJvb3RcIj09PXJ8fG8uaXNUZW1wbGF0ZShuKSl7dFtyXT1uO2NvbnRpbnVlfWlmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt0W3JdPW5ldyBvKG4pO2NvbnRpbnVlfXMoXCJvYmplY3RcIj09dHlwZW9mIG4mJiFBcnJheS5pc0FycmF5KG4pLFwiSW52YWxpZCBtZXNzYWdlIGZvclwiLHIpO2NvbnN0IGE9cjtmb3IociBpbiB0W2FdPXRbYV18fHt9LG4pe2NvbnN0IGU9bltyXTtcInJvb3RcIj09PXJ8fG8uaXNUZW1wbGF0ZShlKT90W2FdW3JdPWU6KHMoXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJJbnZhbGlkIG1lc3NhZ2UgZm9yXCIscixcImluXCIsYSksdFthXVtyXT1uZXcgbyhlKSl9fXJldHVybiB0fSx0LmRlY29tcGlsZT1mdW5jdGlvbihlKXtjb25zdCB0PXt9O2ZvcihsZXQgciBpbiBlKXtjb25zdCBzPWVbcl07aWYoXCJyb290XCI9PT1yKXt0W3JdPXM7Y29udGludWV9aWYoby5pc1RlbXBsYXRlKHMpKXt0W3JdPXMuZGVzY3JpYmUoe2NvbXBhY3Q6ITB9KTtjb250aW51ZX1jb25zdCBuPXI7Zm9yKHIgaW4gdFtuXT17fSxzKXtjb25zdCBlPXNbcl07XCJyb290XCIhPT1yP3Rbbl1bcl09ZS5kZXNjcmliZSh7Y29tcGFjdDohMH0pOnRbbl1bcl09ZX19cmV0dXJuIHR9LHQubWVyZ2U9ZnVuY3Rpb24oZSxyKXtpZighZSlyZXR1cm4gdC5jb21waWxlKHIpO2lmKCFyKXJldHVybiBlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiByKXJldHVybiBuZXcgbyhyKTtpZihvLmlzVGVtcGxhdGUocikpcmV0dXJuIHI7Y29uc3QgYT1uKGUpO2ZvcihsZXQgZSBpbiByKXtjb25zdCB0PXJbZV07aWYoXCJyb290XCI9PT1lfHxvLmlzVGVtcGxhdGUodCkpe2FbZV09dDtjb250aW51ZX1pZihcInN0cmluZ1wiPT10eXBlb2YgdCl7YVtlXT1uZXcgbyh0KTtjb250aW51ZX1zKFwib2JqZWN0XCI9PXR5cGVvZiB0JiYhQXJyYXkuaXNBcnJheSh0KSxcIkludmFsaWQgbWVzc2FnZSBmb3JcIixlKTtjb25zdCBuPWU7Zm9yKGUgaW4gYVtuXT1hW25dfHx7fSx0KXtjb25zdCByPXRbZV07XCJyb290XCI9PT1lfHxvLmlzVGVtcGxhdGUocik/YVtuXVtlXT1yOihzKFwic3RyaW5nXCI9PXR5cGVvZiByLFwiSW52YWxpZCBtZXNzYWdlIGZvclwiLGUsXCJpblwiLG4pLGFbbl1bZV09bmV3IG8ocikpfX1yZXR1cm4gYX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMTMpLG49e21pc21hdGNoZWQ6bnVsbH07ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gcj1PYmplY3QuYXNzaWduKHtwcm90b3R5cGU6ITB9LHIpLCEhbi5pc0RlZXBFcXVhbChlLHQscixbXSl9LG4uaXNEZWVwRXF1YWw9ZnVuY3Rpb24oZSx0LHIsbyl7aWYoZT09PXQpcmV0dXJuIDAhPT1lfHwxL2U9PTEvdDtjb25zdCBhPXR5cGVvZiBlO2lmKGEhPT10eXBlb2YgdClyZXR1cm4hMTtpZihudWxsPT09ZXx8bnVsbD09PXQpcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT09YSl7aWYoIXIuZGVlcEZ1bmN0aW9ufHxlLnRvU3RyaW5nKCkhPT10LnRvU3RyaW5nKCkpcmV0dXJuITF9ZWxzZSBpZihcIm9iamVjdFwiIT09YSlyZXR1cm4gZSE9ZSYmdCE9dDtjb25zdCBpPW4uZ2V0U2hhcmVkVHlwZShlLHQsISFyLnByb3RvdHlwZSk7c3dpdGNoKGkpe2Nhc2Ugcy5idWZmZXI6cmV0dXJuITE7Y2FzZSBzLnByb21pc2U6cmV0dXJuIGU9PT10O2Nhc2Ugcy5yZWdleDpyZXR1cm4gZS50b1N0cmluZygpPT09dC50b1N0cmluZygpO2Nhc2Ugbi5taXNtYXRjaGVkOnJldHVybiExfWZvcihsZXQgcj1vLmxlbmd0aC0xO3I+PTA7LS1yKWlmKG9bcl0uaXNTYW1lKGUsdCkpcmV0dXJuITA7by5wdXNoKG5ldyBuLlNlZW5FbnRyeShlLHQpKTt0cnl7cmV0dXJuISFuLmlzRGVlcEVxdWFsT2JqKGksZSx0LHIsbyl9ZmluYWxseXtvLnBvcCgpfX0sbi5nZXRTaGFyZWRUeXBlPWZ1bmN0aW9uKGUsdCxyKXtpZihyKXJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkhPT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk/bi5taXNtYXRjaGVkOnMuZ2V0SW50ZXJuYWxQcm90byhlKTtjb25zdCBvPXMuZ2V0SW50ZXJuYWxQcm90byhlKTtyZXR1cm4gbyE9PXMuZ2V0SW50ZXJuYWxQcm90byh0KT9uLm1pc21hdGNoZWQ6b30sbi52YWx1ZU9mPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9ZS52YWx1ZU9mO2lmKHZvaWQgMD09PXQpcmV0dXJuIGU7dHJ5e3JldHVybiB0LmNhbGwoZSl9Y2F0Y2goZSl7cmV0dXJuIGV9fSxuLmhhc093bkVudW1lcmFibGVQcm9wZXJ0eT1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSx0KX0sbi5pc1NldFNpbXBsZUVxdWFsPWZ1bmN0aW9uKGUsdCl7Zm9yKGNvbnN0IHIgb2YgZSlpZighdC5oYXMocikpcmV0dXJuITE7cmV0dXJuITB9LG4uaXNEZWVwRXF1YWxPYmo9ZnVuY3Rpb24oZSx0LHIsbyxhKXtjb25zdHtpc0RlZXBFcXVhbDppLHZhbHVlT2Y6bCxoYXNPd25FbnVtZXJhYmxlUHJvcGVydHk6Y309bix7a2V5czp1LGdldE93blByb3BlcnR5U3ltYm9sczpmfT1PYmplY3Q7aWYoZT09PXMuYXJyYXkpe2lmKCFvLnBhcnQpe2lmKHQubGVuZ3RoIT09ci5sZW5ndGgpcmV0dXJuITE7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDsrK2UpaWYoIWkodFtlXSxyW2VdLG8sYSkpcmV0dXJuITE7cmV0dXJuITB9Zm9yKGNvbnN0IGUgb2YgdClmb3IoY29uc3QgdCBvZiByKWlmKGkoZSx0LG8sYSkpcmV0dXJuITB9ZWxzZSBpZihlPT09cy5zZXQpe2lmKHQuc2l6ZSE9PXIuc2l6ZSlyZXR1cm4hMTtpZighbi5pc1NldFNpbXBsZUVxdWFsKHQscikpe2NvbnN0IGU9bmV3IFNldChyKTtmb3IoY29uc3QgciBvZiB0KXtpZihlLmRlbGV0ZShyKSljb250aW51ZTtsZXQgdD0hMTtmb3IoY29uc3QgcyBvZiBlKWlmKGkocixzLG8sYSkpe2UuZGVsZXRlKHMpLHQ9ITA7YnJlYWt9aWYoIXQpcmV0dXJuITF9fX1lbHNlIGlmKGU9PT1zLm1hcCl7aWYodC5zaXplIT09ci5zaXplKXJldHVybiExO2Zvcihjb25zdFtlLHNdb2YgdCl7aWYodm9pZCAwPT09cyYmIXIuaGFzKGUpKXJldHVybiExO2lmKCFpKHMsci5nZXQoZSksbyxhKSlyZXR1cm4hMX19ZWxzZSBpZihlPT09cy5lcnJvciYmKHQubmFtZSE9PXIubmFtZXx8dC5tZXNzYWdlIT09ci5tZXNzYWdlKSlyZXR1cm4hMTtjb25zdCBtPWwodCksaD1sKHIpO2lmKCh0IT09bXx8ciE9PWgpJiYhaShtLGgsbyxhKSlyZXR1cm4hMTtjb25zdCBkPXUodCk7aWYoIW8ucGFydCYmZC5sZW5ndGghPT11KHIpLmxlbmd0aCYmIW8uc2tpcClyZXR1cm4hMTtsZXQgcD0wO2Zvcihjb25zdCBlIG9mIGQpaWYoby5za2lwJiZvLnNraXAuaW5jbHVkZXMoZSkpdm9pZCAwPT09cltlXSYmKytwO2Vsc2V7aWYoIWMocixlKSlyZXR1cm4hMTtpZighaSh0W2VdLHJbZV0sbyxhKSlyZXR1cm4hMX1pZighby5wYXJ0JiZkLmxlbmd0aC1wIT09dShyKS5sZW5ndGgpcmV0dXJuITE7aWYoITEhPT1vLnN5bWJvbHMpe2NvbnN0IGU9Zih0KSxzPW5ldyBTZXQoZihyKSk7Zm9yKGNvbnN0IG4gb2YgZSl7aWYoIW8uc2tpcHx8IW8uc2tpcC5pbmNsdWRlcyhuKSlpZihjKHQsbikpe2lmKCFjKHIsbikpcmV0dXJuITE7aWYoIWkodFtuXSxyW25dLG8sYSkpcmV0dXJuITF9ZWxzZSBpZihjKHIsbikpcmV0dXJuITE7cy5kZWxldGUobil9Zm9yKGNvbnN0IGUgb2YgcylpZihjKHIsZSkpcmV0dXJuITF9cmV0dXJuITB9LG4uU2VlbkVudHJ5PWNsYXNze2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5vYmo9ZSx0aGlzLnJlZj10fWlzU2FtZShlLHQpe3JldHVybiB0aGlzLm9iaj09PWUmJnRoaXMucmVmPT09dH19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMTUpLGE9cigxKSxpPXIoOCksbD1yKDQpLGM9cigxNyksdT1yKDE4KSxmPXIoNSksbT1yKDcpLGg9cigxOSk7bGV0IGQ7Y29uc3QgcD17dHlwZXM6e2FsdGVybmF0aXZlczpyKDMzKSxhbnk6cigzKSxhcnJheTpyKDM5KSxib29sZWFuOnIoNDApLGRhdGU6cig0MSksZnVuY3Rpb246cig0MiksbGluazpyKDQ1KSxudW1iZXI6cig0Niksb2JqZWN0OnIoNDcpLHN0cmluZzpyKDQ4KSxzeW1ib2w6cig1Mil9LGFsaWFzZXM6e2FsdDpcImFsdGVybmF0aXZlc1wiLGJvb2w6XCJib29sZWFuXCIsZnVuYzpcImZ1bmN0aW9uXCJ9fTtwLnJvb3Q9ZnVuY3Rpb24oKXtjb25zdCBlPXtfdHlwZXM6bmV3IFNldChPYmplY3Qua2V5cyhwLnR5cGVzKSl9O2Zvcihjb25zdCB0IG9mIGUuX3R5cGVzKWVbdF09ZnVuY3Rpb24oLi4uZSl7cmV0dXJuIHMoIWUubGVuZ3RofHxbXCJhbHRlcm5hdGl2ZXNcIixcImxpbmtcIixcIm9iamVjdFwiXS5pbmNsdWRlcyh0KSxcIlRoZVwiLHQsXCJ0eXBlIGRvZXMgbm90IGFsbG93IGFyZ3VtZW50c1wiKSxwLmdlbmVyYXRlKHRoaXMscC50eXBlc1t0XSxlKX07Zm9yKGNvbnN0IHQgb2ZbXCJhbGxvd1wiLFwiY3VzdG9tXCIsXCJkaXNhbGxvd1wiLFwiZXF1YWxcIixcImV4aXN0XCIsXCJmb3JiaWRkZW5cIixcImludmFsaWRcIixcIm5vdFwiLFwib25seVwiLFwib3B0aW9uYWxcIixcIm9wdGlvbnNcIixcInByZWZzXCIsXCJwcmVmZXJlbmNlc1wiLFwicmVxdWlyZWRcIixcInN0cmlwXCIsXCJ2YWxpZFwiLFwid2hlblwiXSllW3RdPWZ1bmN0aW9uKC4uLmUpe3JldHVybiB0aGlzLmFueSgpW3RdKC4uLmUpfTtPYmplY3QuYXNzaWduKGUscC5tZXRob2RzKTtmb3IoY29uc3QgdCBpbiBwLmFsaWFzZXMpe2NvbnN0IHI9cC5hbGlhc2VzW3RdO2VbdF09ZVtyXX1yZXR1cm4gZS54PWUuZXhwcmVzc2lvbixoLnNldHVwJiZoLnNldHVwKGUpLGV9LHAubWV0aG9kcz17VmFsaWRhdGlvbkVycm9yOmwuVmFsaWRhdGlvbkVycm9yLHZlcnNpb246YS52ZXJzaW9uLGNhY2hlOm8ucHJvdmlkZXIsYXNzZXJ0KGUsdCwuLi5yKXtwLmFzc2VydChlLHQsITAscil9LGF0dGVtcHQ6KGUsdCwuLi5yKT0+cC5hc3NlcnQoZSx0LCExLHIpLGJ1aWxkKGUpe3JldHVybiBzKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUuYnVpbGQsXCJNYW5pZmVzdCBmdW5jdGlvbmFsaXR5IGRpc2FibGVkXCIpLHUuYnVpbGQodGhpcyxlKX0sY2hlY2tQcmVmZXJlbmNlcyhlKXthLmNoZWNrUHJlZmVyZW5jZXMoZSl9LGNvbXBpbGUoZSx0KXtyZXR1cm4gaS5jb21waWxlKHRoaXMsZSx0KX0sZGVmYXVsdHMoZSl7cyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwibW9kaWZpZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSx0aGlzKTtmb3IoY29uc3QgciBvZiB0Ll90eXBlcyl7Y29uc3Qgbj1lKHRbcl0oKSk7cyhhLmlzU2NoZW1hKG4pLFwibW9kaWZpZXIgbXVzdCByZXR1cm4gYSB2YWxpZCBzY2hlbWEgb2JqZWN0XCIpLHRbcl09ZnVuY3Rpb24oLi4uZSl7cmV0dXJuIHAuZ2VuZXJhdGUodGhpcyxuLGUpfX1yZXR1cm4gdH0sZXhwcmVzc2lvbjooLi4uZSk9Pm5ldyBtKC4uLmUpLGV4dGVuZCguLi5lKXthLnZlcmlmeUZsYXQoZSxcImV4dGVuZFwiKSxkPWR8fHIoMTYpLHMoZS5sZW5ndGgsXCJZb3UgbmVlZCB0byBwcm92aWRlIGF0IGxlYXN0IG9uZSBleHRlbnNpb25cIiksdGhpcy5hc3NlcnQoZSxkLmV4dGVuc2lvbnMpO2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSx0aGlzKTt0Ll90eXBlcz1uZXcgU2V0KHQuX3R5cGVzKTtmb3IobGV0IHIgb2YgZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHI9cih0KSksdGhpcy5hc3NlcnQocixkLmV4dGVuc2lvbik7Y29uc3QgZT1wLmV4cGFuZEV4dGVuc2lvbihyLHQpO2Zvcihjb25zdCByIG9mIGUpe3Modm9pZCAwPT09dFtyLnR5cGVdfHx0Ll90eXBlcy5oYXMoci50eXBlKSxcIkNhbm5vdCBvdmVycmlkZSBuYW1lXCIsci50eXBlKTtjb25zdCBlPXIuYmFzZXx8dGhpcy5hbnkoKSxuPWMudHlwZShlLHIpO3QuX3R5cGVzLmFkZChyLnR5cGUpLHRbci50eXBlXT1mdW5jdGlvbiguLi5lKXtyZXR1cm4gcC5nZW5lcmF0ZSh0aGlzLG4sZSl9fX1yZXR1cm4gdH0saXNFcnJvcjpsLlZhbGlkYXRpb25FcnJvci5pc0Vycm9yLGlzRXhwcmVzc2lvbjptLmlzVGVtcGxhdGUsaXNSZWY6Zi5pc1JlZixpc1NjaGVtYTphLmlzU2NoZW1hLGluOiguLi5lKT0+Zi5pbiguLi5lKSxvdmVycmlkZTphLnN5bWJvbHMub3ZlcnJpZGUscmVmOiguLi5lKT0+Zi5jcmVhdGUoLi4uZSksdHlwZXMoKXtjb25zdCBlPXt9O2Zvcihjb25zdCB0IG9mIHRoaXMuX3R5cGVzKWVbdF09dGhpc1t0XSgpO2Zvcihjb25zdCB0IGluIHAuYWxpYXNlcyllW3RdPXRoaXNbdF0oKTtyZXR1cm4gZX19LHAuYXNzZXJ0PWZ1bmN0aW9uKGUsdCxyLHMpe2NvbnN0IG89c1swXWluc3RhbmNlb2YgRXJyb3J8fFwic3RyaW5nXCI9PXR5cGVvZiBzWzBdP3NbMF06bnVsbCxpPW8/c1sxXTpzWzBdLGM9dC52YWxpZGF0ZShlLGEucHJlZmVyZW5jZXMoe2Vycm9yczp7c3RhY2s6ITB9fSxpfHx7fSkpO2xldCB1PWMuZXJyb3I7aWYoIXUpcmV0dXJuIGMudmFsdWU7aWYobyBpbnN0YW5jZW9mIEVycm9yKXRocm93IG87Y29uc3QgZj1yJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LmFubm90YXRlP3UuYW5ub3RhdGUoKTp1Lm1lc3NhZ2U7dGhyb3cgdSBpbnN0YW5jZW9mIGwuVmFsaWRhdGlvbkVycm9yPT0hMSYmKHU9bih1KSksdS5tZXNzYWdlPW8/XCJcIi5jb25jYXQobyxcIiBcIikuY29uY2F0KGYpOmYsdX0scC5nZW5lcmF0ZT1mdW5jdGlvbihlLHQscil7cmV0dXJuIHMoZSxcIk11c3QgYmUgaW52b2tlZCBvbiBhIEpvaSBpbnN0YW5jZS5cIiksdC4kX3Jvb3Q9ZSx0Ll9kZWZpbml0aW9uLmFyZ3MmJnIubGVuZ3RoP3QuX2RlZmluaXRpb24uYXJncyh0LC4uLnIpOnR9LHAuZXhwYW5kRXh0ZW5zaW9uPWZ1bmN0aW9uKGUsdCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudHlwZSlyZXR1cm5bZV07Y29uc3Qgcj1bXTtmb3IoY29uc3QgcyBvZiB0Ll90eXBlcylpZihlLnR5cGUudGVzdChzKSl7Y29uc3Qgbj1PYmplY3QuYXNzaWduKHt9LGUpO24udHlwZT1zLG4uYmFzZT10W3NdKCksci5wdXNoKG4pfXJldHVybiByfSxlLmV4cG9ydHM9cC5yb290KCl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMjgpO2UuZXhwb3J0cz1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUuZmlsdGVyKGU9PlwiXCIhPT1lKS5tYXAoZT0+XCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplIGluc3RhbmNlb2YgRXJyb3I/ZS5tZXNzYWdlOnMoZSkpLmpvaW4oXCIgXCIpfHxcIlVua25vd24gZXJyb3JcIiksXCJmdW5jdGlvblwiPT10eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsdC5hc3NlcnQpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXt9O3Q9ZS5leHBvcnRzPXthcnJheTpBcnJheS5wcm90b3R5cGUsYnVmZmVyOiExLGRhdGU6RGF0ZS5wcm90b3R5cGUsZXJyb3I6RXJyb3IucHJvdG90eXBlLGdlbmVyaWM6T2JqZWN0LnByb3RvdHlwZSxtYXA6TWFwLnByb3RvdHlwZSxwcm9taXNlOlByb21pc2UucHJvdG90eXBlLHJlZ2V4OlJlZ0V4cC5wcm90b3R5cGUsc2V0OlNldC5wcm90b3R5cGUsd2Vha01hcDpXZWFrTWFwLnByb3RvdHlwZSx3ZWFrU2V0OldlYWtTZXQucHJvdG90eXBlfSxzLnR5cGVNYXA9bmV3IE1hcChbW1wiW29iamVjdCBFcnJvcl1cIix0LmVycm9yXSxbXCJbb2JqZWN0IE1hcF1cIix0Lm1hcF0sW1wiW29iamVjdCBQcm9taXNlXVwiLHQucHJvbWlzZV0sW1wiW29iamVjdCBTZXRdXCIsdC5zZXRdLFtcIltvYmplY3QgV2Vha01hcF1cIix0LndlYWtNYXBdLFtcIltvYmplY3QgV2Vha1NldF1cIix0LndlYWtTZXRdXSksdC5nZXRJbnRlcm5hbFByb3RvPWZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIHQuYXJyYXk7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIHQuZGF0ZTtpZihlIGluc3RhbmNlb2YgUmVnRXhwKXJldHVybiB0LnJlZ2V4O2lmKGUgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gdC5lcnJvcjtjb25zdCByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKTtyZXR1cm4gcy50eXBlTWFwLmdldChyKXx8dC5nZW5lcmljfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3Qua2V5cz1mdW5jdGlvbihlLHQ9e30pe3JldHVybiExIT09dC5zeW1ib2xzP1JlZmxlY3Qub3duS2V5cyhlKTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigxKSxhPXttYXg6MWUzLHN1cHBvcnRlZDpuZXcgU2V0KFtcInVuZGVmaW5lZFwiLFwiYm9vbGVhblwiLFwibnVtYmVyXCIsXCJzdHJpbmdcIl0pfTt0LnByb3ZpZGVyPXtwcm92aXNpb246ZT0+bmV3IGEuQ2FjaGUoZSl9LGEuQ2FjaGU9Y2xhc3N7Y29uc3RydWN0b3IoZT17fSl7by5hc3NlcnRPcHRpb25zKGUsW1wibWF4XCJdKSxzKHZvaWQgMD09PWUubWF4fHxlLm1heCYmZS5tYXg+MCYmaXNGaW5pdGUoZS5tYXgpLFwiSW52YWxpZCBtYXggY2FjaGUgc2l6ZVwiKSx0aGlzLl9tYXg9ZS5tYXh8fGEubWF4LHRoaXMuX21hcD1uZXcgTWFwLHRoaXMuX2xpc3Q9bmV3IGEuTGlzdH1nZXQgbGVuZ3RoKCl7cmV0dXJuIHRoaXMuX21hcC5zaXplfXNldChlLHQpe2lmKG51bGwhPT1lJiYhYS5zdXBwb3J0ZWQuaGFzKHR5cGVvZiBlKSlyZXR1cm47bGV0IHI9dGhpcy5fbWFwLmdldChlKTtpZihyKXJldHVybiByLnZhbHVlPXQsdm9pZCB0aGlzLl9saXN0LmZpcnN0KHIpO3I9dGhpcy5fbGlzdC51bnNoaWZ0KHtrZXk6ZSx2YWx1ZTp0fSksdGhpcy5fbWFwLnNldChlLHIpLHRoaXMuX2NvbXBhY3QoKX1nZXQoZSl7Y29uc3QgdD10aGlzLl9tYXAuZ2V0KGUpO2lmKHQpcmV0dXJuIHRoaXMuX2xpc3QuZmlyc3QodCksbih0LnZhbHVlKX1fY29tcGFjdCgpe2lmKHRoaXMuX21hcC5zaXplPnRoaXMuX21heCl7Y29uc3QgZT10aGlzLl9saXN0LnBvcCgpO3RoaXMuX21hcC5kZWxldGUoZS5rZXkpfX19LGEuTGlzdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMudGFpbD1udWxsLHRoaXMuaGVhZD1udWxsfXVuc2hpZnQoZSl7cmV0dXJuIGUubmV4dD1udWxsLGUucHJldj10aGlzLmhlYWQsdGhpcy5oZWFkJiYodGhpcy5oZWFkLm5leHQ9ZSksdGhpcy5oZWFkPWUsdGhpcy50YWlsfHwodGhpcy50YWlsPWUpLGV9Zmlyc3QoZSl7ZSE9PXRoaXMuaGVhZCYmKHRoaXMuX3JlbW92ZShlKSx0aGlzLnVuc2hpZnQoZSkpfXBvcCgpe3JldHVybiB0aGlzLl9yZW1vdmUodGhpcy50YWlsKX1fcmVtb3ZlKGUpe2NvbnN0e25leHQ6dCxwcmV2OnJ9PWU7cmV0dXJuIHQucHJldj1yLHImJihyLm5leHQ9dCksZT09PXRoaXMudGFpbCYmKHRoaXMudGFpbD10KSxlLnByZXY9bnVsbCxlLm5leHQ9bnVsbCxlfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMTEpLG49e307bi53cmFwPXMuc3RyaW5nKCkubWluKDEpLm1heCgyKS5hbGxvdyghMSksdC5wcmVmZXJlbmNlcz1zLm9iamVjdCh7YWxsb3dVbmtub3duOnMuYm9vbGVhbigpLGFib3J0RWFybHk6cy5ib29sZWFuKCksY2FjaGU6cy5ib29sZWFuKCksY29udGV4dDpzLm9iamVjdCgpLGNvbnZlcnQ6cy5ib29sZWFuKCksZGF0ZUZvcm1hdDpzLnZhbGlkKFwiZGF0ZVwiLFwiaXNvXCIsXCJzdHJpbmdcIixcInRpbWVcIixcInV0Y1wiKSxkZWJ1ZzpzLmJvb2xlYW4oKSxlcnJvcnM6e2VzY2FwZUh0bWw6cy5ib29sZWFuKCksbGFiZWw6cy52YWxpZChcInBhdGhcIixcImtleVwiLCExKSxsYW5ndWFnZTpbcy5zdHJpbmcoKSxzLm9iamVjdCgpLnJlZigpXSxyZW5kZXI6cy5ib29sZWFuKCksc3RhY2s6cy5ib29sZWFuKCksd3JhcDp7bGFiZWw6bi53cmFwLGFycmF5Om4ud3JhcH19LGV4dGVybmFsczpzLmJvb2xlYW4oKSxtZXNzYWdlczpzLm9iamVjdCgpLG5vRGVmYXVsdHM6cy5ib29sZWFuKCksbm9uRW51bWVyYWJsZXM6cy5ib29sZWFuKCkscHJlc2VuY2U6cy52YWxpZChcInJlcXVpcmVkXCIsXCJvcHRpb25hbFwiLFwiZm9yYmlkZGVuXCIpLHNraXBGdW5jdGlvbnM6cy5ib29sZWFuKCksc3RyaXBVbmtub3duOnMub2JqZWN0KHthcnJheXM6cy5ib29sZWFuKCksb2JqZWN0czpzLmJvb2xlYW4oKX0pLm9yKFwiYXJyYXlzXCIsXCJvYmplY3RzXCIpLmFsbG93KCEwLCExKSx3YXJuaW5nczpzLmJvb2xlYW4oKX0pLnN0cmljdCgpLG4ubmFtZVJ4PS9eW2EtekEtWjAtOV1cXHcqJC8sbi5ydWxlPXMub2JqZWN0KHthbGlhczpzLmFycmF5KCkuaXRlbXMocy5zdHJpbmcoKS5wYXR0ZXJuKG4ubmFtZVJ4KSkuc2luZ2xlKCksYXJnczpzLmFycmF5KCkuaXRlbXMocy5zdHJpbmcoKSxzLm9iamVjdCh7bmFtZTpzLnN0cmluZygpLnBhdHRlcm4obi5uYW1lUngpLnJlcXVpcmVkKCkscmVmOnMuYm9vbGVhbigpLGFzc2VydDpzLmFsdGVybmF0aXZlcyhbcy5mdW5jdGlvbigpLHMub2JqZWN0KCkuc2NoZW1hKCldKS5jb25kaXRpb25hbChcInJlZlwiLHtpczohMCx0aGVuOnMucmVxdWlyZWQoKX0pLG5vcm1hbGl6ZTpzLmZ1bmN0aW9uKCksbWVzc2FnZTpzLnN0cmluZygpLndoZW4oXCJhc3NlcnRcIix7aXM6cy5mdW5jdGlvbigpLHRoZW46cy5yZXF1aXJlZCgpfSl9KSksY29udmVydDpzLmJvb2xlYW4oKSxtYW5pZmVzdDpzLmJvb2xlYW4oKSxtZXRob2Q6cy5mdW5jdGlvbigpLmFsbG93KCExKSxtdWx0aTpzLmJvb2xlYW4oKSx2YWxpZGF0ZTpzLmZ1bmN0aW9uKCl9KSx0LmV4dGVuc2lvbj1zLm9iamVjdCh7dHlwZTpzLmFsdGVybmF0aXZlcyhbcy5zdHJpbmcoKSxzLm9iamVjdCgpLnJlZ2V4KCldKS5yZXF1aXJlZCgpLGFyZ3M6cy5mdW5jdGlvbigpLGJhc2U6cy5vYmplY3QoKS5zY2hlbWEoKS53aGVuKFwidHlwZVwiLHtpczpzLm9iamVjdCgpLnJlZ2V4KCksdGhlbjpzLmZvcmJpZGRlbigpfSksY29lcmNlOltzLmZ1bmN0aW9uKCkubWF4QXJpdHkoMykscy5vYmplY3Qoe21ldGhvZDpzLmZ1bmN0aW9uKCkubWF4QXJpdHkoMykucmVxdWlyZWQoKSxmcm9tOnMuYXJyYXkoKS5pdGVtcyhzLnN0cmluZygpKS5zaW5nbGUoKX0pXSxmbGFnczpzLm9iamVjdCgpLnBhdHRlcm4obi5uYW1lUngscy5vYmplY3Qoe3NldHRlcjpzLnN0cmluZygpLGRlZmF1bHQ6cy5hbnkoKX0pKSxtYW5pZmVzdDp7YnVpbGQ6cy5mdW5jdGlvbigpLmFyaXR5KDIpfSxtZXNzYWdlczpbcy5vYmplY3QoKSxzLnN0cmluZygpXSxtb2RpZmllcnM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LHMuZnVuY3Rpb24oKS5taW5Bcml0eSgxKS5tYXhBcml0eSgyKSksb3ZlcnJpZGVzOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxzLmZ1bmN0aW9uKCkpLHByZXBhcmU6cy5mdW5jdGlvbigpLm1heEFyaXR5KDMpLHJlYnVpbGQ6cy5mdW5jdGlvbigpLmFyaXR5KDEpLHJ1bGVzOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxuLnJ1bGUpLHRlcm1zOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxzLm9iamVjdCh7aW5pdDpzLmFycmF5KCkuYWxsb3cobnVsbCkucmVxdWlyZWQoKSxtYW5pZmVzdDpzLm9iamVjdCgpLnBhdHRlcm4oLy4rLyxbcy52YWxpZChcInNjaGVtYVwiLFwic2luZ2xlXCIpLHMub2JqZWN0KHttYXBwZWQ6cy5vYmplY3Qoe2Zyb206cy5zdHJpbmcoKS5yZXF1aXJlZCgpLHRvOnMuc3RyaW5nKCkucmVxdWlyZWQoKX0pLnJlcXVpcmVkKCl9KV0pfSkpLHZhbGlkYXRlOnMuZnVuY3Rpb24oKS5tYXhBcml0eSgzKX0pLnN0cmljdCgpLHQuZXh0ZW5zaW9ucz1zLmFycmF5KCkuaXRlbXMocy5vYmplY3QoKSxzLmZ1bmN0aW9uKCkuYXJpdHkoMSkpLnN0cmljdCgpLG4uZGVzYz17YnVmZmVyOnMub2JqZWN0KHtidWZmZXI6cy5zdHJpbmcoKX0pLGZ1bmM6cy5vYmplY3Qoe2Z1bmN0aW9uOnMuZnVuY3Rpb24oKS5yZXF1aXJlZCgpLG9wdGlvbnM6e2xpdGVyYWw6ITB9fSksb3ZlcnJpZGU6cy5vYmplY3Qoe292ZXJyaWRlOiEwfSkscmVmOnMub2JqZWN0KHtyZWY6cy5vYmplY3Qoe3R5cGU6cy52YWxpZChcInZhbHVlXCIsXCJnbG9iYWxcIixcImxvY2FsXCIpLHBhdGg6cy5hcnJheSgpLnJlcXVpcmVkKCksc2VwYXJhdG9yOnMuc3RyaW5nKCkubGVuZ3RoKDEpLmFsbG93KCExKSxhbmNlc3RvcjpzLm51bWJlcigpLm1pbigwKS5pbnRlZ2VyKCkuYWxsb3coXCJyb290XCIpLG1hcDpzLmFycmF5KCkuaXRlbXMocy5hcnJheSgpLmxlbmd0aCgyKSkubWluKDEpLGFkanVzdDpzLmZ1bmN0aW9uKCksaXRlcmFibGVzOnMuYm9vbGVhbigpLGluOnMuYm9vbGVhbigpfSkucmVxdWlyZWQoKX0pLHJlZ2V4OnMub2JqZWN0KHtyZWdleDpzLnN0cmluZygpLm1pbigzKX0pLHNwZWNpYWw6cy5vYmplY3Qoe3NwZWNpYWw6cy52YWxpZChcImRlZXBcIikucmVxdWlyZWQoKX0pLHRlbXBsYXRlOnMub2JqZWN0KHt0ZW1wbGF0ZTpzLnN0cmluZygpLnJlcXVpcmVkKCksb3B0aW9uczpzLm9iamVjdCgpfSksdmFsdWU6cy5vYmplY3Qoe3ZhbHVlOnMuYWx0ZXJuYXRpdmVzKFtzLm9iamVjdCgpLHMuYXJyYXkoKV0pLnJlcXVpcmVkKCl9KX0sbi5kZXNjLmVudGl0eT1zLmFsdGVybmF0aXZlcyhbcy5hcnJheSgpLml0ZW1zKHMubGluayhcIi4uLlwiKSkscy5ib29sZWFuKCkscy5mdW5jdGlvbigpLHMubnVtYmVyKCkscy5zdHJpbmcoKSxuLmRlc2MuYnVmZmVyLG4uZGVzYy5mdW5jLG4uZGVzYy5yZWYsbi5kZXNjLnJlZ2V4LG4uZGVzYy5zcGVjaWFsLG4uZGVzYy50ZW1wbGF0ZSxuLmRlc2MudmFsdWUscy5saW5rKFwiL1wiKV0pLG4uZGVzYy52YWx1ZXM9cy5hcnJheSgpLml0ZW1zKG51bGwscy5ib29sZWFuKCkscy5mdW5jdGlvbigpLHMubnVtYmVyKCkuYWxsb3coMS8wLC0xLzApLHMuc3RyaW5nKCkuYWxsb3coXCJcIikscy5zeW1ib2woKSxuLmRlc2MuYnVmZmVyLG4uZGVzYy5mdW5jLG4uZGVzYy5vdmVycmlkZSxuLmRlc2MucmVmLG4uZGVzYy5yZWdleCxuLmRlc2MudGVtcGxhdGUsbi5kZXNjLnZhbHVlKSxuLmRlc2MubWVzc2FnZXM9cy5vYmplY3QoKS5wYXR0ZXJuKC8uKy8sW3Muc3RyaW5nKCksbi5kZXNjLnRlbXBsYXRlLHMub2JqZWN0KCkucGF0dGVybigvLisvLFtzLnN0cmluZygpLG4uZGVzYy50ZW1wbGF0ZV0pXSksdC5kZXNjcmlwdGlvbj1zLm9iamVjdCh7dHlwZTpzLnN0cmluZygpLnJlcXVpcmVkKCksZmxhZ3M6cy5vYmplY3Qoe2Nhc3Q6cy5zdHJpbmcoKSxkZWZhdWx0OnMuYW55KCksZGVzY3JpcHRpb246cy5zdHJpbmcoKSxlbXB0eTpzLmxpbmsoXCIvXCIpLGZhaWxvdmVyOm4uZGVzYy5lbnRpdHksaWQ6cy5zdHJpbmcoKSxsYWJlbDpzLnN0cmluZygpLG9ubHk6ITAscHJlc2VuY2U6W1wib3B0aW9uYWxcIixcInJlcXVpcmVkXCIsXCJmb3JiaWRkZW5cIl0scmVzdWx0OltcInJhd1wiLFwic3RyaXBcIl0sc3RyaXA6cy5ib29sZWFuKCksdW5pdDpzLnN0cmluZygpfSkudW5rbm93bigpLHByZWZlcmVuY2VzOnthbGxvd1Vua25vd246cy5ib29sZWFuKCksYWJvcnRFYXJseTpzLmJvb2xlYW4oKSxjYWNoZTpzLmJvb2xlYW4oKSxjb252ZXJ0OnMuYm9vbGVhbigpLGRhdGVGb3JtYXQ6W1wiZGF0ZVwiLFwiaXNvXCIsXCJzdHJpbmdcIixcInRpbWVcIixcInV0Y1wiXSxlcnJvcnM6e2VzY2FwZUh0bWw6cy5ib29sZWFuKCksbGFiZWw6W1wicGF0aFwiLFwia2V5XCJdLGxhbmd1YWdlOltzLnN0cmluZygpLG4uZGVzYy5yZWZdLHdyYXA6e2xhYmVsOm4ud3JhcCxhcnJheTpuLndyYXB9fSxleHRlcm5hbHM6cy5ib29sZWFuKCksbWVzc2FnZXM6bi5kZXNjLm1lc3NhZ2VzLG5vRGVmYXVsdHM6cy5ib29sZWFuKCksbm9uRW51bWVyYWJsZXM6cy5ib29sZWFuKCkscHJlc2VuY2U6W1wicmVxdWlyZWRcIixcIm9wdGlvbmFsXCIsXCJmb3JiaWRkZW5cIl0sc2tpcEZ1bmN0aW9uczpzLmJvb2xlYW4oKSxzdHJpcFVua25vd246cy5vYmplY3Qoe2FycmF5czpzLmJvb2xlYW4oKSxvYmplY3RzOnMuYm9vbGVhbigpfSkub3IoXCJhcnJheXNcIixcIm9iamVjdHNcIikuYWxsb3coITAsITEpLHdhcm5pbmdzOnMuYm9vbGVhbigpfSxhbGxvdzpuLmRlc2MudmFsdWVzLGludmFsaWQ6bi5kZXNjLnZhbHVlcyxydWxlczpzLmFycmF5KCkubWluKDEpLml0ZW1zKHtuYW1lOnMuc3RyaW5nKCkucmVxdWlyZWQoKSxhcmdzOnMub2JqZWN0KCkubWluKDEpLGtlZXA6cy5ib29sZWFuKCksbWVzc2FnZTpbcy5zdHJpbmcoKSxuLmRlc2MubWVzc2FnZXNdLHdhcm46cy5ib29sZWFuKCl9KSxrZXlzOnMub2JqZWN0KCkucGF0dGVybigvLiovLHMubGluayhcIi9cIikpLGxpbms6bi5kZXNjLnJlZn0pLnBhdHRlcm4oL15bYS16XVxcdyokLyxzLmFueSgpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDEpLGE9cig5KSxpPXt9O3QudHlwZT1mdW5jdGlvbihlLHQpe2NvbnN0IHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpLGw9bihyKSxjPWUuX2Fzc2lnbihPYmplY3QuY3JlYXRlKGwpKSx1PU9iamVjdC5hc3NpZ24oe30sdCk7ZGVsZXRlIHUuYmFzZSxsLl9kZWZpbml0aW9uPXU7Y29uc3QgZj1yLl9kZWZpbml0aW9ufHx7fTt1Lm1lc3NhZ2VzPWEubWVyZ2UoZi5tZXNzYWdlcyx1Lm1lc3NhZ2VzKSx1LnByb3BlcnRpZXM9T2JqZWN0LmFzc2lnbih7fSxmLnByb3BlcnRpZXMsdS5wcm9wZXJ0aWVzKSxjLnR5cGU9dS50eXBlLHUuZmxhZ3M9T2JqZWN0LmFzc2lnbih7fSxmLmZsYWdzLHUuZmxhZ3MpO2NvbnN0IG09T2JqZWN0LmFzc2lnbih7fSxmLnRlcm1zKTtpZih1LnRlcm1zKWZvcihjb25zdCBlIGluIHUudGVybXMpe2NvbnN0IHQ9dS50ZXJtc1tlXTtzKHZvaWQgMD09PWMuJF90ZXJtc1tlXSxcIkludmFsaWQgdGVybSBvdmVycmlkZSBmb3JcIix1LnR5cGUsZSksYy4kX3Rlcm1zW2VdPXQuaW5pdCxtW2VdPXR9dS50ZXJtcz1tLHUuYXJnc3x8KHUuYXJncz1mLmFyZ3MpLHUucHJlcGFyZT1pLnByZXBhcmUodS5wcmVwYXJlLGYucHJlcGFyZSksdS5jb2VyY2UmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LmNvZXJjZSYmKHUuY29lcmNlPXttZXRob2Q6dS5jb2VyY2V9KSx1LmNvZXJjZS5mcm9tJiYhQXJyYXkuaXNBcnJheSh1LmNvZXJjZS5mcm9tKSYmKHUuY29lcmNlPXttZXRob2Q6dS5jb2VyY2UubWV0aG9kLGZyb206W10uY29uY2F0KHUuY29lcmNlLmZyb20pfSkpLHUuY29lcmNlPWkuY29lcmNlKHUuY29lcmNlLGYuY29lcmNlKSx1LnZhbGlkYXRlPWkudmFsaWRhdGUodS52YWxpZGF0ZSxmLnZhbGlkYXRlKTtjb25zdCBoPU9iamVjdC5hc3NpZ24oe30sZi5ydWxlcyk7aWYodS5ydWxlcylmb3IoY29uc3QgZSBpbiB1LnJ1bGVzKXtjb25zdCB0PXUucnVsZXNbZV07cyhcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgcnVsZSBkZWZpbml0aW9uIGZvclwiLHUudHlwZSxlKTtsZXQgcj10Lm1ldGhvZDtpZih2b2lkIDA9PT1yJiYocj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRfYWRkUnVsZShlKX0pLHImJihzKCFsW2VdLFwiUnVsZSBjb25mbGljdCBpblwiLHUudHlwZSxlKSxsW2VdPXIpLHMoIWhbZV0sXCJSdWxlIGNvbmZsaWN0IGluXCIsdS50eXBlLGUpLGhbZV09dCx0LmFsaWFzKXtjb25zdCBlPVtdLmNvbmNhdCh0LmFsaWFzKTtmb3IoY29uc3QgciBvZiBlKWxbcl09dC5tZXRob2R9dC5hcmdzJiYodC5hcmdzQnlOYW1lPW5ldyBNYXAsdC5hcmdzPXQuYXJncy5tYXAoZT0+KFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT17bmFtZTplfSkscyghdC5hcmdzQnlOYW1lLmhhcyhlLm5hbWUpLFwiRHVwbGljYXRlZCBhcmd1bWVudCBuYW1lXCIsZS5uYW1lKSxvLmlzU2NoZW1hKGUuYXNzZXJ0KSYmKGUuYXNzZXJ0PWUuYXNzZXJ0LnN0cmljdCgpLmxhYmVsKGUubmFtZSkpLHQuYXJnc0J5TmFtZS5zZXQoZS5uYW1lLGUpLGUpKSl9dS5ydWxlcz1oO2NvbnN0IGQ9T2JqZWN0LmFzc2lnbih7fSxmLm1vZGlmaWVycyk7aWYodS5tb2RpZmllcnMpZm9yKGNvbnN0IGUgaW4gdS5tb2RpZmllcnMpe3MoIWxbZV0sXCJSdWxlIGNvbmZsaWN0IGluXCIsdS50eXBlLGUpO2NvbnN0IHQ9dS5tb2RpZmllcnNbZV07cyhcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LFwiSW52YWxpZCBtb2RpZmllciBkZWZpbml0aW9uIGZvclwiLHUudHlwZSxlKTtjb25zdCByPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJ1bGUoe1tlXTp0fSl9O2xbZV09cixkW2VdPXR9aWYodS5tb2RpZmllcnM9ZCx1Lm92ZXJyaWRlcyl7bC5fc3VwZXI9cixjLiRfc3VwZXI9e307Zm9yKGNvbnN0IGUgaW4gdS5vdmVycmlkZXMpcyhyW2VdLFwiQ2Fubm90IG92ZXJyaWRlIG1pc3NpbmdcIixlKSxjLiRfc3VwZXJbZV09cltlXS5iaW5kKGMpO09iamVjdC5hc3NpZ24obCx1Lm92ZXJyaWRlcyl9dS5jYXN0PU9iamVjdC5hc3NpZ24oe30sZi5jYXN0LHUuY2FzdCk7Y29uc3QgcD1PYmplY3QuYXNzaWduKHt9LGYubWFuaWZlc3QsdS5tYW5pZmVzdCk7cmV0dXJuIHAuYnVpbGQ9aS5idWlsZCh1Lm1hbmlmZXN0JiZ1Lm1hbmlmZXN0LmJ1aWxkLGYubWFuaWZlc3QmJmYubWFuaWZlc3QuYnVpbGQpLHUubWFuaWZlc3Q9cCx1LnJlYnVpbGQ9aS5yZWJ1aWxkKHUucmVidWlsZCxmLnJlYnVpbGQpLGN9LGkuYnVpbGQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyLHMpe3JldHVybiB0KGUocixzKSxzKX06ZXx8dH0saS5jb2VyY2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD97ZnJvbTplLmZyb20mJnQuZnJvbT9bLi4ubmV3IFNldChbLi4uZS5mcm9tLC4uLnQuZnJvbV0pXTpudWxsLG1ldGhvZChyLHMpe2xldCBuO2lmKCghdC5mcm9tfHx0LmZyb20uaW5jbHVkZXModHlwZW9mIHIpKSYmKG49dC5tZXRob2QocixzKSxuKSl7aWYobi5lcnJvcnN8fHZvaWQgMD09PW4udmFsdWUpcmV0dXJuIG47cj1uLnZhbHVlfWlmKCFlLmZyb218fGUuZnJvbS5pbmNsdWRlcyh0eXBlb2Ygcikpe2NvbnN0IHQ9ZS5tZXRob2QocixzKTtpZih0KXJldHVybiB0fXJldHVybiBufX06ZXx8dH0saS5wcmVwYXJlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJnQ/ZnVuY3Rpb24ocixzKXtjb25zdCBuPWUocixzKTtpZihuKXtpZihuLmVycm9yc3x8dm9pZCAwPT09bi52YWx1ZSlyZXR1cm4gbjtyPW4udmFsdWV9cmV0dXJuIHQocixzKXx8bn06ZXx8dH0saS5yZWJ1aWxkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJnQ/ZnVuY3Rpb24ocil7dChyKSxlKHIpfTplfHx0fSxpLnZhbGlkYXRlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJnQ/ZnVuY3Rpb24ocixzKXtjb25zdCBuPXQocixzKTtpZihuKXtpZihuLmVycm9ycyYmKCFBcnJheS5pc0FycmF5KG4uZXJyb3JzKXx8bi5lcnJvcnMubGVuZ3RoKSlyZXR1cm4gbjtyPW4udmFsdWV9cmV0dXJuIGUocixzKXx8bn06ZXx8dH19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDE0KSxhPXt9O2UuZXhwb3J0cz1hLm1lcmdlPWZ1bmN0aW9uKGUsdCxyKXtpZihzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLFwiSW52YWxpZCB0YXJnZXQgdmFsdWU6IG11c3QgYmUgYW4gb2JqZWN0XCIpLHMobnVsbD09dHx8XCJvYmplY3RcIj09dHlwZW9mIHQsXCJJbnZhbGlkIHNvdXJjZSB2YWx1ZTogbXVzdCBiZSBudWxsLCB1bmRlZmluZWQsIG9yIGFuIG9iamVjdFwiKSwhdClyZXR1cm4gZTtpZihyPU9iamVjdC5hc3NpZ24oe251bGxPdmVycmlkZTohMCxtZXJnZUFycmF5czohMH0sciksQXJyYXkuaXNBcnJheSh0KSl7cyhBcnJheS5pc0FycmF5KGUpLFwiQ2Fubm90IG1lcmdlIGFycmF5IG9udG8gYW4gb2JqZWN0XCIpLHIubWVyZ2VBcnJheXN8fChlLmxlbmd0aD0wKTtmb3IobGV0IHM9MDtzPHQubGVuZ3RoOysrcyllLnB1c2gobih0W3NdLHtzeW1ib2xzOnIuc3ltYm9sc30pKTtyZXR1cm4gZX1jb25zdCBpPW8ua2V5cyh0LHIpO2ZvcihsZXQgcz0wO3M8aS5sZW5ndGg7KytzKXtjb25zdCBvPWlbc107aWYoXCJfX3Byb3RvX19cIj09PW98fCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodCxvKSljb250aW51ZTtjb25zdCBsPXRbb107aWYobCYmXCJvYmplY3RcIj09dHlwZW9mIGwpe2lmKGVbb109PT1sKWNvbnRpbnVlOyFlW29dfHxcIm9iamVjdFwiIT10eXBlb2YgZVtvXXx8QXJyYXkuaXNBcnJheShlW29dKSE9PUFycmF5LmlzQXJyYXkobCl8fGwgaW5zdGFuY2VvZiBEYXRlfHxsIGluc3RhbmNlb2YgUmVnRXhwP2Vbb109bihsLHtzeW1ib2xzOnIuc3ltYm9sc30pOmEubWVyZ2UoZVtvXSxsLHIpfWVsc2UgbnVsbCE9bD9lW29dPWw6ci5udWxsT3ZlcnJpZGUmJihlW29dPWwpfXJldHVybiBlfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMTApLG89cigxKSxhPXt9O2UuZXhwb3J0cz1hLlZhbHVlcz1jbGFzc3tjb25zdHJ1Y3RvcihlLHQpe3RoaXMuX3ZhbHVlcz1uZXcgU2V0KGUpLHRoaXMuX3JlZnM9bmV3IFNldCh0KSx0aGlzLl9sb3dlcmNhc2U9YS5sb3dlcmNhc2VzKGUpLHRoaXMuX292ZXJyaWRlPSExfWdldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5fdmFsdWVzLnNpemUrdGhpcy5fcmVmcy5zaXplfWFkZChlLHQpe28uaXNSZXNvbHZhYmxlKGUpP3RoaXMuX3JlZnMuaGFzKGUpfHwodGhpcy5fcmVmcy5hZGQoZSksdCYmdC5yZWdpc3RlcihlKSk6dGhpcy5oYXMoZSxudWxsLG51bGwsITEpfHwodGhpcy5fdmFsdWVzLmFkZChlKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmdGhpcy5fbG93ZXJjYXNlLnNldChlLnRvTG93ZXJDYXNlKCksZSkpfXN0YXRpYyBtZXJnZShlLHQscil7aWYoZT1lfHxuZXcgYS5WYWx1ZXMsdCl7aWYodC5fb3ZlcnJpZGUpcmV0dXJuIHQuY2xvbmUoKTtmb3IoY29uc3QgciBvZlsuLi50Ll92YWx1ZXMsLi4udC5fcmVmc10pZS5hZGQocil9aWYocilmb3IoY29uc3QgdCBvZlsuLi5yLl92YWx1ZXMsLi4uci5fcmVmc10pZS5yZW1vdmUodCk7cmV0dXJuIGUubGVuZ3RoP2U6bnVsbH1yZW1vdmUoZSl7by5pc1Jlc29sdmFibGUoZSk/dGhpcy5fcmVmcy5kZWxldGUoZSk6KHRoaXMuX3ZhbHVlcy5kZWxldGUoZSksXCJzdHJpbmdcIj09dHlwZW9mIGUmJnRoaXMuX2xvd2VyY2FzZS5kZWxldGUoZS50b0xvd2VyQ2FzZSgpKSl9aGFzKGUsdCxyLHMpe3JldHVybiEhdGhpcy5nZXQoZSx0LHIscyl9Z2V0KGUsdCxyLHMpe2lmKCF0aGlzLmxlbmd0aClyZXR1cm4hMTtpZih0aGlzLl92YWx1ZXMuaGFzKGUpKXJldHVybnt2YWx1ZTplfTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmZSYmcyl7Y29uc3QgdD10aGlzLl9sb3dlcmNhc2UuZ2V0KGUudG9Mb3dlckNhc2UoKSk7aWYodClyZXR1cm57dmFsdWU6dH19aWYoIXRoaXMuX3JlZnMuc2l6ZSYmXCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuITE7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKGNvbnN0IHQgb2YgdGhpcy5fdmFsdWVzKWlmKG4odCxlKSlyZXR1cm57dmFsdWU6dH07aWYodClmb3IoY29uc3QgbyBvZiB0aGlzLl9yZWZzKXtjb25zdCBhPW8ucmVzb2x2ZShlLHQscixudWxsLHtpbjohMH0pO2lmKHZvaWQgMD09PWEpY29udGludWU7Y29uc3QgaT1vLmluJiZcIm9iamVjdFwiPT10eXBlb2YgYT9BcnJheS5pc0FycmF5KGEpP2E6T2JqZWN0LmtleXMoYSk6W2FdO2Zvcihjb25zdCB0IG9mIGkpaWYodHlwZW9mIHQ9PXR5cGVvZiBlKWlmKHMmJmUmJlwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZih0LnRvTG93ZXJDYXNlKCk9PT1lLnRvTG93ZXJDYXNlKCkpcmV0dXJue3ZhbHVlOnQscmVmOm99fWVsc2UgaWYobih0LGUpKXJldHVybnt2YWx1ZTp0LHJlZjpvfX1yZXR1cm4hMX1vdmVycmlkZSgpe3RoaXMuX292ZXJyaWRlPSEwfXZhbHVlcyhlKXtpZihlJiZlLmRpc3BsYXkpe2NvbnN0IGU9W107Zm9yKGNvbnN0IHQgb2ZbLi4udGhpcy5fdmFsdWVzLC4uLnRoaXMuX3JlZnNdKXZvaWQgMCE9PXQmJmUucHVzaCh0KTtyZXR1cm4gZX1yZXR1cm4gQXJyYXkuZnJvbShbLi4udGhpcy5fdmFsdWVzLC4uLnRoaXMuX3JlZnNdKX1jbG9uZSgpe2NvbnN0IGU9bmV3IGEuVmFsdWVzKHRoaXMuX3ZhbHVlcyx0aGlzLl9yZWZzKTtyZXR1cm4gZS5fb3ZlcnJpZGU9dGhpcy5fb3ZlcnJpZGUsZX1jb25jYXQoZSl7cyghZS5fb3ZlcnJpZGUsXCJDYW5ub3QgY29uY2F0IG92ZXJyaWRlIHNldCBvZiB2YWx1ZXNcIik7Y29uc3QgdD1uZXcgYS5WYWx1ZXMoWy4uLnRoaXMuX3ZhbHVlcywuLi5lLl92YWx1ZXNdLFsuLi50aGlzLl9yZWZzLC4uLmUuX3JlZnNdKTtyZXR1cm4gdC5fb3ZlcnJpZGU9dGhpcy5fb3ZlcnJpZGUsdH1kZXNjcmliZSgpe2NvbnN0IGU9W107dGhpcy5fb3ZlcnJpZGUmJmUucHVzaCh7b3ZlcnJpZGU6ITB9KTtmb3IoY29uc3QgdCBvZiB0aGlzLl92YWx1ZXMudmFsdWVzKCkpZS5wdXNoKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0P3t2YWx1ZTp0fTp0KTtmb3IoY29uc3QgdCBvZiB0aGlzLl9yZWZzLnZhbHVlcygpKWUucHVzaCh0LmRlc2NyaWJlKCkpO3JldHVybiBlfX0sYS5WYWx1ZXMucHJvdG90eXBlW28uc3ltYm9scy52YWx1ZXNdPSEwLGEuVmFsdWVzLnByb3RvdHlwZS5zbGljZT1hLlZhbHVlcy5wcm90b3R5cGUuY2xvbmUsYS5sb3dlcmNhc2VzPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9bmV3IE1hcDtpZihlKWZvcihjb25zdCByIG9mIGUpXCJzdHJpbmdcIj09dHlwZW9mIHImJnQuc2V0KHIudG9Mb3dlckNhc2UoKSxyKTtyZXR1cm4gdH19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoNDMpLG49cigwKSxvPXIoMiksYT1yKDQ0KSxpPXIoMyksbD1yKDEpLGM9cig4KSx1PXIoNCksZj1yKDUpLG09cig3KSxoPXtyZW5hbWVEZWZhdWx0czp7YWxpYXM6ITEsbXVsdGlwbGU6ITEsb3ZlcnJpZGU6ITF9fTtlLmV4cG9ydHM9aS5leHRlbmQoe3R5cGU6XCJfa2V5c1wiLHByb3BlcnRpZXM6e3R5cGVvZjpcIm9iamVjdFwifSxmbGFnczp7dW5rbm93bjp7ZGVmYXVsdDohMX19LHRlcm1zOntkZXBlbmRlbmNpZXM6e2luaXQ6bnVsbH0sa2V5czp7aW5pdDpudWxsLG1hbmlmZXN0OnttYXBwZWQ6e2Zyb206XCJzY2hlbWFcIix0bzpcImtleVwifX19LHBhdHRlcm5zOntpbml0Om51bGx9LHJlbmFtZXM6e2luaXQ6bnVsbH19LGFyZ3M6KGUsdCk9PmUua2V5cyh0KSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyLHN0YXRlOnMscHJlZnM6bn0pe2lmKCFlfHx0eXBlb2YgZSE9PXQuJF9wcm9wZXJ0eShcInR5cGVvZlwiKXx8QXJyYXkuaXNBcnJheShlKSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6cihcIm9iamVjdC5iYXNlXCIse3R5cGU6dC4kX3Byb3BlcnR5KFwidHlwZW9mXCIpfSl9O2lmKCEodC4kX3Rlcm1zLnJlbmFtZXN8fHQuJF90ZXJtcy5kZXBlbmRlbmNpZXN8fHQuJF90ZXJtcy5rZXlzfHx0LiRfdGVybXMucGF0dGVybnN8fHQuJF90ZXJtcy5leHRlcm5hbHMpKXJldHVybjtlPWguY2xvbmUoZSxuKTtjb25zdCBvPVtdO2lmKHQuJF90ZXJtcy5yZW5hbWVzJiYhaC5yZW5hbWUodCxlLHMsbixvKSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6b307aWYoIXQuJF90ZXJtcy5rZXlzJiYhdC4kX3Rlcm1zLnBhdHRlcm5zJiYhdC4kX3Rlcm1zLmRlcGVuZGVuY2llcylyZXR1cm57dmFsdWU6ZSxlcnJvcnM6b307Y29uc3QgYT1uZXcgU2V0KE9iamVjdC5rZXlzKGUpKTtpZih0LiRfdGVybXMua2V5cyl7Y29uc3Qgcj1bZSwuLi5zLmFuY2VzdG9yc107Zm9yKGNvbnN0IGkgb2YgdC4kX3Rlcm1zLmtleXMpe2NvbnN0IHQ9aS5rZXksbD1lW3RdO2EuZGVsZXRlKHQpO2NvbnN0IGM9cy5sb2NhbGl6ZShbLi4ucy5wYXRoLHRdLHIsaSksdT1pLnNjaGVtYS4kX3ZhbGlkYXRlKGwsYyxuKTtpZih1LmVycm9ycyl7aWYobi5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTplLGVycm9yczp1LmVycm9yc307by5wdXNoKC4uLnUuZXJyb3JzKX1lbHNlXCJzdHJpcFwiPT09aS5zY2hlbWEuX2ZsYWdzLnJlc3VsdHx8dm9pZCAwPT09dS52YWx1ZSYmdm9pZCAwIT09bD9kZWxldGUgZVt0XTp2b2lkIDAhPT11LnZhbHVlJiYoZVt0XT11LnZhbHVlKX19aWYoYS5zaXplfHx0Ll9mbGFncy5faGFzUGF0dGVybk1hdGNoKXtjb25zdCByPWgudW5rbm93bih0LGUsYSxvLHMsbik7aWYocilyZXR1cm4gcn1pZih0LiRfdGVybXMuZGVwZW5kZW5jaWVzKWZvcihjb25zdCByIG9mIHQuJF90ZXJtcy5kZXBlbmRlbmNpZXMpe2lmKHIua2V5JiZ2b2lkIDA9PT1yLmtleS5yZXNvbHZlKGUscyxuLG51bGwse3NoYWRvdzohMX0pKWNvbnRpbnVlO2NvbnN0IGE9aC5kZXBlbmRlbmNpZXNbci5yZWxdKHQscixlLHMsbik7aWYoYSl7Y29uc3Qgcj10LiRfY3JlYXRlRXJyb3IoYS5jb2RlLGUsYS5jb250ZXh0LHMsbik7aWYobi5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTplLGVycm9yczpyfTtvLnB1c2gocil9fXJldHVybnt2YWx1ZTplLGVycm9yczpvfX0scnVsZXM6e2FuZDp7bWV0aG9kKC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcImFuZFwiKSxoLmRlcGVuZGVuY3kodGhpcyxcImFuZFwiLG51bGwsZSl9fSxhcHBlbmQ6e21ldGhvZChlKXtyZXR1cm4gbnVsbD09ZXx8MD09PU9iamVjdC5rZXlzKGUpLmxlbmd0aD90aGlzOnRoaXMua2V5cyhlKX19LGFzc2VydDp7bWV0aG9kKGUsdCxyKXttLmlzVGVtcGxhdGUoZSl8fChlPWMucmVmKGUpKSxuKHZvaWQgMD09PXJ8fFwic3RyaW5nXCI9PXR5cGVvZiByLFwiTWVzc2FnZSBtdXN0IGJlIGEgc3RyaW5nXCIpLHQ9dGhpcy4kX2NvbXBpbGUodCx7YXBwZW5kUGF0aDohMH0pO2NvbnN0IHM9dGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJhc3NlcnRcIixhcmdzOntzdWJqZWN0OmUsc2NoZW1hOnQsbWVzc2FnZTpyfX0pO3JldHVybiBzLiRfbXV0YXRlUmVnaXN0ZXIoZSkscy4kX211dGF0ZVJlZ2lzdGVyKHQpLHN9LHZhbGlkYXRlKGUse2Vycm9yOnQscHJlZnM6cixzdGF0ZTpzfSx7c3ViamVjdDpuLHNjaGVtYTpvLG1lc3NhZ2U6YX0pe2NvbnN0IGk9bi5yZXNvbHZlKGUscyxyKSxsPWYuaXNSZWYobik/bi5hYnNvbHV0ZShzKTpbXTtyZXR1cm4gby4kX21hdGNoKGkscy5sb2NhbGl6ZShsLFtlLC4uLnMuYW5jZXN0b3JzXSxvKSxyKT9lOnQoXCJvYmplY3QuYXNzZXJ0XCIse3N1YmplY3Q6bixtZXNzYWdlOmF9KX0sYXJnczpbXCJzdWJqZWN0XCIsXCJzY2hlbWFcIixcIm1lc3NhZ2VcIl0sbXVsdGk6ITB9LGluc3RhbmNlOnttZXRob2QoZSx0KXtyZXR1cm4gbihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwiY29uc3RydWN0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHQ9dHx8ZS5uYW1lLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaW5zdGFuY2VcIixhcmdzOntjb25zdHJ1Y3RvcjplLG5hbWU6dH19KX0sdmFsaWRhdGU6KGUsdCx7Y29uc3RydWN0b3I6cixuYW1lOnN9KT0+ZSBpbnN0YW5jZW9mIHI/ZTp0LmVycm9yKFwib2JqZWN0Lmluc3RhbmNlXCIse3R5cGU6cyx2YWx1ZTplfSksYXJnczpbXCJjb25zdHJ1Y3RvclwiLFwibmFtZVwiXX0sa2V5czp7bWV0aG9kKGUpe24odm9pZCAwPT09ZXx8XCJvYmplY3RcIj09dHlwZW9mIGUsXCJPYmplY3Qgc2NoZW1hIG11c3QgYmUgYSB2YWxpZCBvYmplY3RcIiksbighbC5pc1NjaGVtYShlKSxcIk9iamVjdCBzY2hlbWEgY2Fubm90IGJlIGEgam9pIHNjaGVtYVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtpZihlKWlmKE9iamVjdC5rZXlzKGUpLmxlbmd0aCl7dC4kX3Rlcm1zLmtleXM9dC4kX3Rlcm1zLmtleXM/dC4kX3Rlcm1zLmtleXMuZmlsdGVyKHQ9PiFlLmhhc093blByb3BlcnR5KHQua2V5KSk6bmV3IGguS2V5cztmb3IoY29uc3QgciBpbiBlKWwudHJ5V2l0aFBhdGgoKCk9PnQuJF90ZXJtcy5rZXlzLnB1c2goe2tleTpyLHNjaGVtYTp0aGlzLiRfY29tcGlsZShlW3JdKX0pLHIpfWVsc2UgdC4kX3Rlcm1zLmtleXM9bmV3IGguS2V5cztlbHNlIHQuJF90ZXJtcy5rZXlzPW51bGw7cmV0dXJuIHQuJF9tdXRhdGVSZWJ1aWxkKCl9fSxsZW5ndGg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj1cIn0pfSx2YWxpZGF0ZTooZSx0LHtsaW1pdDpyfSx7bmFtZTpzLG9wZXJhdG9yOm4sYXJnczpvfSk9PmwuY29tcGFyZShPYmplY3Qua2V5cyhlKS5sZW5ndGgscixuKT9lOnQuZXJyb3IoXCJvYmplY3QuXCIrcyx7bGltaXQ6by5saW1pdCx2YWx1ZTplfSksYXJnczpbe25hbWU6XCJsaW1pdFwiLHJlZjohMCxhc3NlcnQ6bC5saW1pdCxtZXNzYWdlOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn1dfSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPj1cIn0pfX0sbmFuZDp7bWV0aG9kKC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcIm5hbmRcIiksaC5kZXBlbmRlbmN5KHRoaXMsXCJuYW5kXCIsbnVsbCxlKX19LG9yOnttZXRob2QoLi4uZSl7cmV0dXJuIGwudmVyaWZ5RmxhdChlLFwib3JcIiksaC5kZXBlbmRlbmN5KHRoaXMsXCJvclwiLG51bGwsZSl9fSxveG9yOnttZXRob2QoLi4uZSl7cmV0dXJuIGguZGVwZW5kZW5jeSh0aGlzLFwib3hvclwiLG51bGwsZSl9fSxwYXR0ZXJuOnttZXRob2QoZSx0LHI9e30pe2NvbnN0IHM9ZSBpbnN0YW5jZW9mIFJlZ0V4cDtzfHwoZT10aGlzLiRfY29tcGlsZShlLHthcHBlbmRQYXRoOiEwfSkpLG4odm9pZCAwIT09dCxcIkludmFsaWQgcnVsZVwiKSxsLmFzc2VydE9wdGlvbnMocixbXCJmYWxsdGhyb3VnaFwiLFwibWF0Y2hlc1wiXSkscyYmbighZS5mbGFncy5pbmNsdWRlcyhcImdcIikmJiFlLmZsYWdzLmluY2x1ZGVzKFwieVwiKSxcInBhdHRlcm4gc2hvdWxkIG5vdCB1c2UgZ2xvYmFsIG9yIHN0aWNreSBtb2RlXCIpLHQ9dGhpcy4kX2NvbXBpbGUodCx7YXBwZW5kUGF0aDohMH0pO2NvbnN0IG89dGhpcy5jbG9uZSgpO28uJF90ZXJtcy5wYXR0ZXJucz1vLiRfdGVybXMucGF0dGVybnN8fFtdO2NvbnN0IGE9e1tzP1wicmVnZXhcIjpcInNjaGVtYVwiXTplLHJ1bGU6dH07cmV0dXJuIHIubWF0Y2hlcyYmKGEubWF0Y2hlcz10aGlzLiRfY29tcGlsZShyLm1hdGNoZXMpLFwiYXJyYXlcIiE9PWEubWF0Y2hlcy50eXBlJiYoYS5tYXRjaGVzPWEubWF0Y2hlcy4kX3Jvb3QuYXJyYXkoKS5pdGVtcyhhLm1hdGNoZXMpKSxvLiRfbXV0YXRlUmVnaXN0ZXIoYS5tYXRjaGVzKSxvLiRfc2V0RmxhZyhcIl9oYXNQYXR0ZXJuTWF0Y2hcIiwhMCx7Y2xvbmU6ITF9KSksci5mYWxsdGhyb3VnaCYmKGEuZmFsbHRocm91Z2g9ITApLG8uJF90ZXJtcy5wYXR0ZXJucy5wdXNoKGEpLG8uJF9tdXRhdGVSZWdpc3Rlcih0KSxvfX0scmVmOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoXCJyZWZcIil9LHZhbGlkYXRlOihlLHQpPT5mLmlzUmVmKGUpP2U6dC5lcnJvcihcIm9iamVjdC5yZWZUeXBlXCIse3ZhbHVlOmV9KX0scmVnZXg6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInJlZ2V4XCIpfSx2YWxpZGF0ZTooZSx0KT0+ZSBpbnN0YW5jZW9mIFJlZ0V4cD9lOnQuZXJyb3IoXCJvYmplY3QucmVnZXhcIix7dmFsdWU6ZX0pfSxyZW5hbWU6e21ldGhvZChlLHQscj17fSl7bihcInN0cmluZ1wiPT10eXBlb2YgZXx8ZSBpbnN0YW5jZW9mIFJlZ0V4cCxcIlJlbmFtZSBtaXNzaW5nIHRoZSBmcm9tIGFyZ3VtZW50XCIpLG4oXCJzdHJpbmdcIj09dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBtLFwiSW52YWxpZCByZW5hbWUgdG8gYXJndW1lbnRcIiksbih0IT09ZSxcIkNhbm5vdCByZW5hbWUga2V5IHRvIHNhbWUgbmFtZTpcIixlKSxsLmFzc2VydE9wdGlvbnMocixbXCJhbGlhc1wiLFwiaWdub3JlVW5kZWZpbmVkXCIsXCJvdmVycmlkZVwiLFwibXVsdGlwbGVcIl0pO2NvbnN0IG89dGhpcy5jbG9uZSgpO28uJF90ZXJtcy5yZW5hbWVzPW8uJF90ZXJtcy5yZW5hbWVzfHxbXTtmb3IoY29uc3QgdCBvZiBvLiRfdGVybXMucmVuYW1lcyluKHQuZnJvbSE9PWUsXCJDYW5ub3QgcmVuYW1lIHRoZSBzYW1lIGtleSBtdWx0aXBsZSB0aW1lc1wiKTtyZXR1cm4gdCBpbnN0YW5jZW9mIG0mJm8uJF9tdXRhdGVSZWdpc3Rlcih0KSxvLiRfdGVybXMucmVuYW1lcy5wdXNoKHtmcm9tOmUsdG86dCxvcHRpb25zOnMoaC5yZW5hbWVEZWZhdWx0cyxyKX0pLG99fSxzY2hlbWE6e21ldGhvZChlPVwiYW55XCIpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcInNjaGVtYVwiLGFyZ3M6e3R5cGU6ZX19KX0sdmFsaWRhdGU6KGUsdCx7dHlwZTpyfSk9PiFsLmlzU2NoZW1hKGUpfHxcImFueVwiIT09ciYmZS50eXBlIT09cj90LmVycm9yKFwib2JqZWN0LnNjaGVtYVwiLHt0eXBlOnJ9KTplfSx1bmtub3duOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwidW5rbm93blwiLCExIT09ZSl9fSx3aXRoOnttZXRob2QoZSx0LHI9e30pe3JldHVybiBoLmRlcGVuZGVuY3kodGhpcyxcIndpdGhcIixlLHQscil9fSx3aXRob3V0OnttZXRob2QoZSx0LHI9e30pe3JldHVybiBoLmRlcGVuZGVuY3kodGhpcyxcIndpdGhvdXRcIixlLHQscil9fSx4b3I6e21ldGhvZCguLi5lKXtyZXR1cm4gbC52ZXJpZnlGbGF0KGUsXCJ4b3JcIiksaC5kZXBlbmRlbmN5KHRoaXMsXCJ4b3JcIixudWxsLGUpfX19LG92ZXJyaWRlczp7ZGVmYXVsdChlLHQpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1sLnN5bWJvbHMuZGVlcERlZmF1bHQpLHRoaXMuJF9zdXBlci5kZWZhdWx0KGUsdCl9fSxyZWJ1aWxkKGUpe2lmKGUuJF90ZXJtcy5rZXlzKXtjb25zdCB0PW5ldyBhLlNvcnRlcjtmb3IoY29uc3QgciBvZiBlLiRfdGVybXMua2V5cylsLnRyeVdpdGhQYXRoKCgpPT50LmFkZChyLHthZnRlcjpyLnNjaGVtYS4kX3Jvb3RSZWZlcmVuY2VzKCksZ3JvdXA6ci5rZXl9KSxyLmtleSk7ZS4kX3Rlcm1zLmtleXM9bmV3IGguS2V5cyguLi50Lm5vZGVzKX19LG1hbmlmZXN0OntidWlsZChlLHQpe2lmKHQua2V5cyYmKGU9ZS5rZXlzKHQua2V5cykpLHQuZGVwZW5kZW5jaWVzKWZvcihjb25zdHtyZWw6cixrZXk6cz1udWxsLHBlZXJzOm4sb3B0aW9uczpvfW9mIHQuZGVwZW5kZW5jaWVzKWU9aC5kZXBlbmRlbmN5KGUscixzLG4sbyk7aWYodC5wYXR0ZXJucylmb3IoY29uc3R7cmVnZXg6cixzY2hlbWE6cyxydWxlOm4sZmFsbHRocm91Z2g6byxtYXRjaGVzOmF9b2YgdC5wYXR0ZXJucyllPWUucGF0dGVybihyfHxzLG4se2ZhbGx0aHJvdWdoOm8sbWF0Y2hlczphfSk7aWYodC5yZW5hbWVzKWZvcihjb25zdHtmcm9tOnIsdG86cyxvcHRpb25zOm59b2YgdC5yZW5hbWVzKWU9ZS5yZW5hbWUocixzLG4pO3JldHVybiBlfX0sbWVzc2FnZXM6e1wib2JqZWN0LmFuZFwiOlwie3sjbGFiZWx9fSBjb250YWlucyB7eyNwcmVzZW50V2l0aExhYmVsc319IHdpdGhvdXQgaXRzIHJlcXVpcmVkIHBlZXJzIHt7I21pc3NpbmdXaXRoTGFiZWxzfX1cIixcIm9iamVjdC5hc3NlcnRcIjone3sjbGFiZWx9fSBpcyBpbnZhbGlkIGJlY2F1c2Uge2lmKCNzdWJqZWN0LmtleSwgYFwiYCArICNzdWJqZWN0LmtleSArIGBcIiBmYWlsZWQgdG8gYCArICgjbWVzc2FnZSB8fCBcInBhc3MgdGhlIGFzc2VydGlvbiB0ZXN0XCIpLCAjbWVzc2FnZSB8fCBcInRoZSBhc3NlcnRpb24gZmFpbGVkXCIpfScsXCJvYmplY3QuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIG9mIHR5cGUge3sjdHlwZX19XCIsXCJvYmplY3QuaW5zdGFuY2VcIjone3sjbGFiZWx9fSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFwie3sjdHlwZX19XCInLFwib2JqZWN0Lmxlbmd0aFwiOid7eyNsYWJlbH19IG11c3QgaGF2ZSB7eyNsaW1pdH19IGtleXtpZigjbGltaXQgPT0gMSwgXCJcIiwgXCJzXCIpfScsXCJvYmplY3QubWF4XCI6J3t7I2xhYmVsfX0gbXVzdCBoYXZlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19IGtleXtpZigjbGltaXQgPT0gMSwgXCJcIiwgXCJzXCIpfScsXCJvYmplY3QubWluXCI6J3t7I2xhYmVsfX0gbXVzdCBoYXZlIGF0IGxlYXN0IHt7I2xpbWl0fX0ga2V5e2lmKCNsaW1pdCA9PSAxLCBcIlwiLCBcInNcIil9JyxcIm9iamVjdC5taXNzaW5nXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgb2Yge3sjcGVlcnNXaXRoTGFiZWxzfX1cIixcIm9iamVjdC5uYW5kXCI6J1wie3sjbWFpbldpdGhMYWJlbH19XCIgbXVzdCBub3QgZXhpc3Qgc2ltdWx0YW5lb3VzbHkgd2l0aCB7eyNwZWVyc1dpdGhMYWJlbHN9fScsXCJvYmplY3Qub3hvclwiOlwie3sjbGFiZWx9fSBjb250YWlucyBhIGNvbmZsaWN0IGJldHdlZW4gb3B0aW9uYWwgZXhjbHVzaXZlIHBlZXJzIHt7I3BlZXJzV2l0aExhYmVsc319XCIsXCJvYmplY3QucGF0dGVybi5tYXRjaFwiOlwie3sjbGFiZWx9fSBrZXlzIGZhaWxlZCB0byBtYXRjaCBwYXR0ZXJuIHJlcXVpcmVtZW50c1wiLFwib2JqZWN0LnJlZlR5cGVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIEpvaSByZWZlcmVuY2VcIixcIm9iamVjdC5yZWdleFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgUmVnRXhwIG9iamVjdFwiLFwib2JqZWN0LnJlbmFtZS5tdWx0aXBsZVwiOid7eyNsYWJlbH19IGNhbm5vdCByZW5hbWUgXCJ7eyNmcm9tfX1cIiBiZWNhdXNlIG11bHRpcGxlIHJlbmFtZXMgYXJlIGRpc2FibGVkIGFuZCBhbm90aGVyIGtleSB3YXMgYWxyZWFkeSByZW5hbWVkIHRvIFwie3sjdG99fVwiJyxcIm9iamVjdC5yZW5hbWUub3ZlcnJpZGVcIjone3sjbGFiZWx9fSBjYW5ub3QgcmVuYW1lIFwie3sjZnJvbX19XCIgYmVjYXVzZSBvdmVycmlkZSBpcyBkaXNhYmxlZCBhbmQgdGFyZ2V0IFwie3sjdG99fVwiIGV4aXN0cycsXCJvYmplY3Quc2NoZW1hXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBKb2kgc2NoZW1hIG9mIHt7I3R5cGV9fSB0eXBlXCIsXCJvYmplY3QudW5rbm93blwiOlwie3sjbGFiZWx9fSBpcyBub3QgYWxsb3dlZFwiLFwib2JqZWN0LndpdGhcIjonXCJ7eyNtYWluV2l0aExhYmVsfX1cIiBtaXNzaW5nIHJlcXVpcmVkIHBlZXIgXCJ7eyNwZWVyV2l0aExhYmVsfX1cIicsXCJvYmplY3Qud2l0aG91dFwiOidcInt7I21haW5XaXRoTGFiZWx9fVwiIGNvbmZsaWN0IHdpdGggZm9yYmlkZGVuIHBlZXIgXCJ7eyNwZWVyV2l0aExhYmVsfX1cIicsXCJvYmplY3QueG9yXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGEgY29uZmxpY3QgYmV0d2VlbiBleGNsdXNpdmUgcGVlcnMge3sjcGVlcnNXaXRoTGFiZWxzfX1cIn19KSxoLmNsb25lPWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2lmKHQubm9uRW51bWVyYWJsZXMpcmV0dXJuIG8oZSx7c2hhbGxvdzohMH0pO2NvbnN0IHI9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkpO3JldHVybiBPYmplY3QuYXNzaWduKHIsZSkscn1jb25zdCByPWZ1bmN0aW9uKC4uLnQpe3JldHVybiBlLmFwcGx5KHRoaXMsdCl9O3JldHVybiByLnByb3RvdHlwZT1vKGUucHJvdG90eXBlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIm5hbWVcIix7dmFsdWU6ZS5uYW1lLHdyaXRhYmxlOiExfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJsZW5ndGhcIix7dmFsdWU6ZS5sZW5ndGgsd3JpdGFibGU6ITF9KSxPYmplY3QuYXNzaWduKHIsZSkscn0saC5kZXBlbmRlbmN5PWZ1bmN0aW9uKGUsdCxyLHMsbyl7bihudWxsPT09cnx8XCJzdHJpbmdcIj09dHlwZW9mIHIsdCxcImtleSBtdXN0IGJlIGEgc3RyaW5nc1wiKSxvfHwobz1zLmxlbmd0aD4xJiZcIm9iamVjdFwiPT10eXBlb2Ygc1tzLmxlbmd0aC0xXT9zLnBvcCgpOnt9KSxsLmFzc2VydE9wdGlvbnMobyxbXCJzZXBhcmF0b3JcIl0pLHM9W10uY29uY2F0KHMpO2NvbnN0IGE9bC5kZWZhdWx0KG8uc2VwYXJhdG9yLFwiLlwiKSxpPVtdO2Zvcihjb25zdCBlIG9mIHMpbihcInN0cmluZ1wiPT10eXBlb2YgZSx0LFwicGVlcnMgbXVzdCBiZSBhIHN0cmluZyBvciBhIHJlZmVyZW5jZVwiKSxpLnB1c2goYy5yZWYoZSx7c2VwYXJhdG9yOmEsYW5jZXN0b3I6MCxwcmVmaXg6ITF9KSk7bnVsbCE9PXImJihyPWMucmVmKHIse3NlcGFyYXRvcjphLGFuY2VzdG9yOjAscHJlZml4OiExfSkpO2NvbnN0IHU9ZS5jbG9uZSgpO3JldHVybiB1LiRfdGVybXMuZGVwZW5kZW5jaWVzPXUuJF90ZXJtcy5kZXBlbmRlbmNpZXN8fFtdLHUuJF90ZXJtcy5kZXBlbmRlbmNpZXMucHVzaChuZXcgaC5EZXBlbmRlbmN5KHQscixpLHMpKSx1fSxoLmRlcGVuZGVuY2llcz17YW5kKGUsdCxyLHMsbil7Y29uc3Qgbz1bXSxhPVtdLGk9dC5wZWVycy5sZW5ndGg7Zm9yKGNvbnN0IGUgb2YgdC5wZWVycyl2b2lkIDA9PT1lLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSk/by5wdXNoKGUua2V5KTphLnB1c2goZS5rZXkpO2lmKG8ubGVuZ3RoIT09aSYmYS5sZW5ndGghPT1pKXJldHVybntjb2RlOlwib2JqZWN0LmFuZFwiLGNvbnRleHQ6e3ByZXNlbnQ6YSxwcmVzZW50V2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLGEpLG1pc3Npbmc6byxtaXNzaW5nV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLG8pfX19LG5hbmQoZSx0LHIscyxuKXtjb25zdCBvPVtdO2Zvcihjb25zdCBlIG9mIHQucGVlcnMpdm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pJiZvLnB1c2goZS5rZXkpO2lmKG8ubGVuZ3RoIT09dC5wZWVycy5sZW5ndGgpcmV0dXJuO2NvbnN0IGE9dC5wYXRoc1swXSxpPXQucGF0aHMuc2xpY2UoMSk7cmV0dXJue2NvZGU6XCJvYmplY3QubmFuZFwiLGNvbnRleHQ6e21haW46YSxtYWluV2l0aExhYmVsOmgua2V5c1RvTGFiZWxzKGUsYSkscGVlcnM6aSxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSxpKX19fSxvcihlLHQscixzLG4pe2Zvcihjb25zdCBlIG9mIHQucGVlcnMpaWYodm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pKXJldHVybjtyZXR1cm57Y29kZTpcIm9iamVjdC5taXNzaW5nXCIsY29udGV4dDp7cGVlcnM6dC5wYXRocyxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSx0LnBhdGhzKX19fSxveG9yKGUsdCxyLHMsbil7Y29uc3Qgbz1bXTtmb3IoY29uc3QgZSBvZiB0LnBlZXJzKXZvaWQgMCE9PWUucmVzb2x2ZShyLHMsbixudWxsLHtzaGFkb3c6ITF9KSYmby5wdXNoKGUua2V5KTtpZighby5sZW5ndGh8fDE9PT1vLmxlbmd0aClyZXR1cm47Y29uc3QgYT17cGVlcnM6dC5wYXRocyxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSx0LnBhdGhzKX07cmV0dXJuIGEucHJlc2VudD1vLGEucHJlc2VudFdpdGhMYWJlbHM9aC5rZXlzVG9MYWJlbHMoZSxvKSx7Y29kZTpcIm9iamVjdC5veG9yXCIsY29udGV4dDphfX0sd2l0aChlLHQscixzLG4pe2Zvcihjb25zdCBvIG9mIHQucGVlcnMpaWYodm9pZCAwPT09by5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pKXJldHVybntjb2RlOlwib2JqZWN0LndpdGhcIixjb250ZXh0OnttYWluOnQua2V5LmtleSxtYWluV2l0aExhYmVsOmgua2V5c1RvTGFiZWxzKGUsdC5rZXkua2V5KSxwZWVyOm8ua2V5LHBlZXJXaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSxvLmtleSl9fX0sd2l0aG91dChlLHQscixzLG4pe2Zvcihjb25zdCBvIG9mIHQucGVlcnMpaWYodm9pZCAwIT09by5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pKXJldHVybntjb2RlOlwib2JqZWN0LndpdGhvdXRcIixjb250ZXh0OnttYWluOnQua2V5LmtleSxtYWluV2l0aExhYmVsOmgua2V5c1RvTGFiZWxzKGUsdC5rZXkua2V5KSxwZWVyOm8ua2V5LHBlZXJXaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSxvLmtleSl9fX0seG9yKGUsdCxyLHMsbil7Y29uc3Qgbz1bXTtmb3IoY29uc3QgZSBvZiB0LnBlZXJzKXZvaWQgMCE9PWUucmVzb2x2ZShyLHMsbixudWxsLHtzaGFkb3c6ITF9KSYmby5wdXNoKGUua2V5KTtpZigxPT09by5sZW5ndGgpcmV0dXJuO2NvbnN0IGE9e3BlZXJzOnQucGF0aHMscGVlcnNXaXRoTGFiZWxzOmgua2V5c1RvTGFiZWxzKGUsdC5wYXRocyl9O3JldHVybiAwPT09by5sZW5ndGg/e2NvZGU6XCJvYmplY3QubWlzc2luZ1wiLGNvbnRleHQ6YX06KGEucHJlc2VudD1vLGEucHJlc2VudFdpdGhMYWJlbHM9aC5rZXlzVG9MYWJlbHMoZSxvKSx7Y29kZTpcIm9iamVjdC54b3JcIixjb250ZXh0OmF9KX19LGgua2V5c1RvTGFiZWxzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/dC5tYXAodD0+ZS4kX21hcExhYmVscyh0KSk6ZS4kX21hcExhYmVscyh0KX0saC5yZW5hbWU9ZnVuY3Rpb24oZSx0LHIscyxuKXtjb25zdCBvPXt9O2Zvcihjb25zdCBhIG9mIGUuJF90ZXJtcy5yZW5hbWVzKXtjb25zdCBpPVtdLGw9XCJzdHJpbmdcIiE9dHlwZW9mIGEuZnJvbTtpZihsKWZvcihjb25zdCBlIGluIHQpe2lmKHZvaWQgMD09PXRbZV0mJmEub3B0aW9ucy5pZ25vcmVVbmRlZmluZWQpY29udGludWU7aWYoZT09PWEudG8pY29udGludWU7Y29uc3Qgcj1hLmZyb20uZXhlYyhlKTtyJiZpLnB1c2goe2Zyb206ZSx0bzphLnRvLG1hdGNoOnJ9KX1lbHNlIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGEuZnJvbSl8fHZvaWQgMD09PXRbYS5mcm9tXSYmYS5vcHRpb25zLmlnbm9yZVVuZGVmaW5lZHx8aS5wdXNoKGEpO2Zvcihjb25zdCBjIG9mIGkpe2NvbnN0IGk9Yy5mcm9tO2xldCB1PWMudG87aWYodSBpbnN0YW5jZW9mIG0mJih1PXUucmVuZGVyKHQscixzLGMubWF0Y2gpKSxpIT09dSl7aWYoIWEub3B0aW9ucy5tdWx0aXBsZSYmb1t1XSYmKG4ucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJvYmplY3QucmVuYW1lLm11bHRpcGxlXCIsdCx7ZnJvbTppLHRvOnUscGF0dGVybjpsfSxyLHMpKSxzLmFib3J0RWFybHkpKXJldHVybiExO2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHUpJiYhYS5vcHRpb25zLm92ZXJyaWRlJiYhb1t1XSYmKG4ucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJvYmplY3QucmVuYW1lLm92ZXJyaWRlXCIsdCx7ZnJvbTppLHRvOnUscGF0dGVybjpsfSxyLHMpKSxzLmFib3J0RWFybHkpKXJldHVybiExO3ZvaWQgMD09PXRbaV0/ZGVsZXRlIHRbdV06dFt1XT10W2ldLG9bdV09ITAsYS5vcHRpb25zLmFsaWFzfHxkZWxldGUgdFtpXX19fXJldHVybiEwfSxoLnVua25vd249ZnVuY3Rpb24oZSx0LHIscyxuLG8pe2lmKGUuJF90ZXJtcy5wYXR0ZXJucyl7bGV0IGE9ITE7Y29uc3QgaT1lLiRfdGVybXMucGF0dGVybnMubWFwKGU9PntpZihlLm1hdGNoZXMpcmV0dXJuIGE9ITAsW119KSxsPVt0LC4uLm4uYW5jZXN0b3JzXTtmb3IoY29uc3QgYSBvZiByKXtjb25zdCBjPXRbYV0sdT1bLi4ubi5wYXRoLGFdO2ZvcihsZXQgZj0wO2Y8ZS4kX3Rlcm1zLnBhdHRlcm5zLmxlbmd0aDsrK2Ype2NvbnN0IG09ZS4kX3Rlcm1zLnBhdHRlcm5zW2ZdO2lmKG0ucmVnZXgpe2NvbnN0IGU9bS5yZWdleC50ZXN0KGEpO2lmKG4ubWFpbnN0YXkudHJhY2VyLmRlYnVnKG4sXCJydWxlXCIsXCJwYXR0ZXJuLlwiLmNvbmNhdChmKSxlP1wicGFzc1wiOlwiZXJyb3JcIiksIWUpY29udGludWV9ZWxzZSBpZighbS5zY2hlbWEuJF9tYXRjaChhLG4ubmVzdChtLnNjaGVtYSxcInBhdHRlcm4uXCIuY29uY2F0KGYpKSxvKSljb250aW51ZTtyLmRlbGV0ZShhKTtjb25zdCBoPW4ubG9jYWxpemUodSxsLHtzY2hlbWE6bS5ydWxlLGtleTphfSksZD1tLnJ1bGUuJF92YWxpZGF0ZShjLGgsbyk7aWYoZC5lcnJvcnMpe2lmKG8uYWJvcnRFYXJseSlyZXR1cm57dmFsdWU6dCxlcnJvcnM6ZC5lcnJvcnN9O3MucHVzaCguLi5kLmVycm9ycyl9aWYobS5tYXRjaGVzJiZpW2ZdLnB1c2goYSksdFthXT1kLnZhbHVlLCFtLmZhbGx0aHJvdWdoKWJyZWFrfX1pZihhKWZvcihsZXQgcj0wO3I8aS5sZW5ndGg7KytyKXtjb25zdCBhPWlbcl07aWYoIWEpY29udGludWU7Y29uc3QgYz1lLiRfdGVybXMucGF0dGVybnNbcl0ubWF0Y2hlcyxmPW4ubG9jYWxpemUobi5wYXRoLGwsYyksbT1jLiRfdmFsaWRhdGUoYSxmLG8pO2lmKG0uZXJyb3JzKXtjb25zdCByPXUuZGV0YWlscyhtLmVycm9ycyx7b3ZlcnJpZGU6ITF9KTtyLm1hdGNoZXM9YTtjb25zdCBpPWUuJF9jcmVhdGVFcnJvcihcIm9iamVjdC5wYXR0ZXJuLm1hdGNoXCIsdCxyLG4sbyk7aWYoby5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTp0LGVycm9yczppfTtzLnB1c2goaSl9fX1pZighci5zaXplfHwhZS4kX3Rlcm1zLmtleXMmJiFlLiRfdGVybXMucGF0dGVybnMpcmV0dXJuO2lmKG8uc3RyaXBVbmtub3duJiYhZS5fZmxhZ3MudW5rbm93bnx8by5za2lwRnVuY3Rpb25zKXtjb25zdCBlPSEhby5zdHJpcFVua25vd24mJighMD09PW8uc3RyaXBVbmtub3dufHwhIW8uc3RyaXBVbmtub3duLm9iamVjdHMpO2Zvcihjb25zdCBzIG9mIHIpZT8oZGVsZXRlIHRbc10sci5kZWxldGUocykpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHRbc10mJnIuZGVsZXRlKHMpfWlmKCFsLmRlZmF1bHQoZS5fZmxhZ3MudW5rbm93bixvLmFsbG93VW5rbm93bikpZm9yKGNvbnN0IGEgb2Ygcil7Y29uc3Qgcj1uLmxvY2FsaXplKFsuLi5uLnBhdGgsYV0sW10pLGk9ZS4kX2NyZWF0ZUVycm9yKFwib2JqZWN0LnVua25vd25cIix0W2FdLHtjaGlsZDphfSxyLG8se2ZsYWdzOiExfSk7aWYoby5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTp0LGVycm9yczppfTtzLnB1c2goaSl9fSxoLkRlcGVuZGVuY3k9Y2xhc3N7Y29uc3RydWN0b3IoZSx0LHIscyl7dGhpcy5yZWw9ZSx0aGlzLmtleT10LHRoaXMucGVlcnM9cix0aGlzLnBhdGhzPXN9ZGVzY3JpYmUoKXtjb25zdCBlPXtyZWw6dGhpcy5yZWwscGVlcnM6dGhpcy5wYXRoc307cmV0dXJuIG51bGwhPT10aGlzLmtleSYmKGUua2V5PXRoaXMua2V5LmtleSksXCIuXCIhPT10aGlzLnBlZXJzWzBdLnNlcGFyYXRvciYmKGUub3B0aW9ucz17c2VwYXJhdG9yOnRoaXMucGVlcnNbMF0uc2VwYXJhdG9yfSksZX19LGguS2V5cz1jbGFzcyBleHRlbmRzIEFycmF5e2NvbmNhdChlKXtjb25zdCB0PXRoaXMuc2xpY2UoKSxyPW5ldyBNYXA7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDsrK2Upci5zZXQodFtlXS5rZXksZSk7Zm9yKGNvbnN0IHMgb2YgZSl7Y29uc3QgZT1zLmtleSxuPXIuZ2V0KGUpO3ZvaWQgMCE9PW4/dFtuXT17a2V5OmUsc2NoZW1hOnRbbl0uc2NoZW1hLmNvbmNhdChzLnNjaGVtYSl9OnQucHVzaChzKX1yZXR1cm4gdH19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDI0KSxuPXIoMjUpLG89e21pbkRvbWFpblNlZ21lbnRzOjIsbm9uQXNjaWlSeDovW15cXHgwMC1cXHg3Zl0vLGRvbWFpbkNvbnRyb2xSeDovW1xceDAwLVxceDIwQFxcOlxcL10vLHRsZFNlZ21lbnRSeDovXlthLXpBLVpdKD86W2EtekEtWjAtOVxcLV0qW2EtekEtWjAtOV0pPyQvLGRvbWFpblNlZ21lbnRSeDovXlthLXpBLVowLTldKD86W2EtekEtWjAtOVxcLV0qW2EtekEtWjAtOV0pPyQvLFVSTDpzLlVSTHx8VVJMfTt0LmFuYWx5emU9ZnVuY3Rpb24oZSx0PXt9KXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0OiBkb21haW4gbXVzdCBiZSBhIHN0cmluZ1wiKTtpZighZSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX05PTl9FTVBUWV9TVFJJTkdcIik7aWYoZS5sZW5ndGg+MjU2KXJldHVybiBuLmNvZGUoXCJET01BSU5fVE9PX0xPTkdcIik7aWYoISFvLm5vbkFzY2lpUngudGVzdChlKSl7aWYoITE9PT10LmFsbG93VW5pY29kZSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfVU5JQ09ERV9DSEFSU1wiKTtlPWUubm9ybWFsaXplKFwiTkZDXCIpfWlmKG8uZG9tYWluQ29udHJvbFJ4LnRlc3QoZSkpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9JTlZBTElEX0NIQVJTXCIpO2U9by5wdW55Y29kZShlKTtjb25zdCByPXQubWluRG9tYWluU2VnbWVudHN8fG8ubWluRG9tYWluU2VnbWVudHMscz1lLnNwbGl0KFwiLlwiKTtpZihzLmxlbmd0aDxyKXJldHVybiBuLmNvZGUoXCJET01BSU5fU0VHTUVOVFNfQ09VTlRcIik7Y29uc3QgYT10LnRsZHM7aWYoYSl7Y29uc3QgZT1zW3MubGVuZ3RoLTFdLnRvTG93ZXJDYXNlKCk7aWYoYS5kZW55JiZhLmRlbnkuaGFzKGUpfHxhLmFsbG93JiYhYS5hbGxvdy5oYXMoZSkpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9GT1JCSURERU5fVExEU1wiKX1mb3IobGV0IGU9MDtlPHMubGVuZ3RoOysrZSl7Y29uc3QgdD1zW2VdO2lmKCF0Lmxlbmd0aClyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0VNUFRZX1NFR01FTlRcIik7aWYodC5sZW5ndGg+NjMpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9MT05HX1NFR01FTlRcIik7aWYoZTxzLmxlbmd0aC0xKXtpZighby5kb21haW5TZWdtZW50UngudGVzdCh0KSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfQ0hBUlNcIil9ZWxzZSBpZighby50bGRTZWdtZW50UngudGVzdCh0KSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfVExEU19DSEFSU1wiKX1yZXR1cm4gbnVsbH0sdC5pc1ZhbGlkPWZ1bmN0aW9uKGUscil7cmV0dXJuIXQuYW5hbHl6ZShlLHIpfSxvLnB1bnljb2RlPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gbmV3IG8uVVJMKFwiaHR0cDovL1wiLmNvbmNhdChlKSkuaG9zdH1jYXRjaCh0KXtyZXR1cm4gZX19fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuY29kZXM9e0VNUFRZX1NUUklORzpcIkFkZHJlc3MgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIixGT1JCSURERU5fVU5JQ09ERTpcIkFkZHJlc3MgY29udGFpbnMgZm9yYmlkZGVuIFVuaWNvZGUgY2hhcmFjdGVyc1wiLE1VTFRJUExFX0FUX0NIQVI6XCJBZGRyZXNzIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiBvbmUgQCBjaGFyYWN0ZXJcIixNSVNTSU5HX0FUX0NIQVI6XCJBZGRyZXNzIG11c3QgY29udGFpbiBvbmUgQCBjaGFyYWN0ZXJcIixFTVBUWV9MT0NBTDpcIkFkZHJlc3MgbG9jYWwgcGFydCBjYW5ub3QgYmUgZW1wdHlcIixBRERSRVNTX1RPT19MT05HOlwiQWRkcmVzcyB0b28gbG9uZ1wiLExPQ0FMX1RPT19MT05HOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IHRvbyBsb25nXCIsRU1QVFlfTE9DQUxfU0VHTUVOVDpcIkFkZHJlc3MgbG9jYWwgcGFydCBjb250YWlucyBlbXB0eSBkb3Qtc2VwYXJhdGVkIHNlZ21lbnRcIixJTlZBTElEX0xPQ0FMX0NIQVJTOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyXCIsRE9NQUlOX05PTl9FTVBUWV9TVFJJTkc6XCJEb21haW4gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIixET01BSU5fVE9PX0xPTkc6XCJEb21haW4gdG9vIGxvbmdcIixET01BSU5fSU5WQUxJRF9VTklDT0RFX0NIQVJTOlwiRG9tYWluIGNvbnRhaW5zIGZvcmJpZGRlbiBVbmljb2RlIGNoYXJhY3RlcnNcIixET01BSU5fSU5WQUxJRF9DSEFSUzpcIkRvbWFpbiBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlclwiLERPTUFJTl9JTlZBTElEX1RMRFNfQ0hBUlM6XCJEb21haW4gY29udGFpbnMgaW52YWxpZCB0bGQgY2hhcmFjdGVyXCIsRE9NQUlOX1NFR01FTlRTX0NPVU5UOlwiRG9tYWluIGxhY2tzIHRoZSBtaW5pbXVtIHJlcXVpcmVkIG51bWJlciBvZiBzZWdtZW50c1wiLERPTUFJTl9GT1JCSURERU5fVExEUzpcIkRvbWFpbiB1c2VzIGZvcmJpZGRlbiBUTERcIixET01BSU5fRU1QVFlfU0VHTUVOVDpcIkRvbWFpbiBjb250YWlucyBlbXB0eSBkb3Qtc2VwYXJhdGVkIHNlZ21lbnRcIixET01BSU5fTE9OR19TRUdNRU5UOlwiRG9tYWluIGNvbnRhaW5zIGRvdC1zZXBhcmF0ZWQgc2VnbWVudCB0aGF0IGlzIHRvbyBsb25nXCJ9LHQuY29kZT1mdW5jdGlvbihlKXtyZXR1cm57Y29kZTplLGVycm9yOnQuY29kZXNbZV19fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMjcpLG89e2dlbmVyYXRlOmZ1bmN0aW9uKCl7Y29uc3QgZT17fSx0PVwiIVxcXFwkJidcXFxcKFxcXFwpXFxcXCpcXFxcKyw7PVwiLHI9XCJcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWZcIit0K1wiOkBcIixzPVwiW1wiK3IrXCJdXCIsbj1cIig/OjB7MCwyfVxcXFxkfDA/WzEtOV1cXFxcZHwxXFxcXGRcXFxcZHwyWzAtNF1cXFxcZHwyNVswLTVdKVwiO2UuaXB2NGFkZHJlc3M9XCIoPzpcIituK1wiXFxcXC4pezN9XCIrbjtjb25zdCBvPVwiW1xcXFxkQS1GYS1mXXsxLDR9XCIsYT1cIig/OlwiK28rXCI6XCIrbytcInxcIitlLmlwdjRhZGRyZXNzK1wiKVwiLGk9XCIoPzpcIitvK1wiOil7Nn1cIithLGw9XCI6Oig/OlwiK28rXCI6KXs1fVwiK2EsYz1cIig/OlwiK28rXCIpPzo6KD86XCIrbytcIjopezR9XCIrYSx1PVwiKD86KD86XCIrbytcIjopezAsMX1cIitvK1wiKT86Oig/OlwiK28rXCI6KXszfVwiK2EsZj1cIig/Oig/OlwiK28rXCI6KXswLDJ9XCIrbytcIik/OjooPzpcIitvK1wiOil7Mn1cIithLG09XCIoPzooPzpcIitvK1wiOil7MCwzfVwiK28rXCIpPzo6XCIrbytcIjpcIithLGg9XCIoPzooPzpcIitvK1wiOil7MCw0fVwiK28rXCIpPzo6XCIrYTtlLmlwdjRDaWRyPVwiKD86XFxcXGR8WzEtMl1cXFxcZHwzWzAtMl0pXCIsZS5pcHY2Q2lkcj1cIig/OjB7MCwyfVxcXFxkfDA/WzEtOV1cXFxcZHwxWzAxXVxcXFxkfDEyWzAtOF0pXCIsZS5pcHY2YWRkcmVzcz1cIig/OlwiK2krXCJ8XCIrbCtcInxcIitjK1wifFwiK3UrXCJ8XCIrZitcInxcIittK1wifFwiK2grXCJ8KD86KD86W1xcXFxkQS1GYS1mXXsxLDR9Oil7MCw1fVtcXFxcZEEtRmEtZl17MSw0fSk/OjpbXFxcXGRBLUZhLWZdezEsNH18KD86KD86W1xcXFxkQS1GYS1mXXsxLDR9Oil7MCw2fVtcXFxcZEEtRmEtZl17MSw0fSk/OjopXCIsZS5pcHZGdXR1cmU9XCJ2W1xcXFxkQS1GYS1mXStcXFxcLltcXFxcdy1cXFxcLn5cIit0K1wiOl0rXCIsZS5zY2hlbWU9XCJbYS16QS1aXVthLXpBLVpcXFxcZCstXFxcXC5dKlwiLGUuc2NoZW1lUmVnZXg9bmV3IFJlZ0V4cChlLnNjaGVtZSk7Y29uc3QgZD1cIltcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWZcIit0K1wiOl0qXCIscD1cIig/OlwiKyhcIlxcXFxbKD86XCIrZS5pcHY2YWRkcmVzcytcInxcIitlLmlwdkZ1dHVyZStcIilcXFxcXVwiKStcInxcIitlLmlwdjRhZGRyZXNzK1wifFtcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9XXsxLDI1NX0pXCIsZz1cIig/OlwiK2QrXCJAKT9cIitwK1wiKD86OlxcXFxkKik/XCIseT1cIig/OlwiK2QrXCJAKT8oXCIrcCtcIikoPzo6XFxcXGQqKT9cIixiPXMrXCIqXCIsdj1zK1wiK1wiLF89XCIoPzpcXFxcL1wiK2IrXCIpKlwiLHc9XCJcXFxcLyg/OlwiK3YrXytcIik/XCIsJD12K18seD1cIltcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9QF0rXCIrXztyZXR1cm4gZS5oaWVyUGFydD1cIig/Oig/OlxcXFwvXFxcXC9cIitnK18rXCIpfFwiK3crXCJ8XCIrJCtcInwoPzpcXFxcL1xcXFwvXFxcXC9bXFxcXHctXFxcXC5+JVxcXFxkQS1GYS1mIVxcXFwkJidcXFxcKFxcXFwpXFxcXCpcXFxcKyw7PTpAXSooPzpcXFxcL1tcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9OkBdKikqKSlcIixlLmhpZXJQYXJ0Q2FwdHVyZT1cIig/Oig/OlxcXFwvXFxcXC9cIit5K18rXCIpfFwiK3crXCJ8XCIrJCtcIilcIixlLnJlbGF0aXZlUmVmPVwiKD86KD86XFxcXC9cXFxcL1wiK2crXytcIil8XCIrdytcInxcIit4K1wifClcIixlLnJlbGF0aXZlUmVmQ2FwdHVyZT1cIig/Oig/OlxcXFwvXFxcXC9cIit5K18rXCIpfFwiK3crXCJ8XCIreCtcInwpXCIsZS5xdWVyeT1cIltcIityK1wiXFxcXC9cXFxcP10qKD89I3wkKVwiLGUucXVlcnlXaXRoU3F1YXJlQnJhY2tldHM9XCJbXCIrcitcIlxcXFxbXFxcXF1cXFxcL1xcXFw/XSooPz0jfCQpXCIsZS5mcmFnbWVudD1cIltcIityK1wiXFxcXC9cXFxcP10qXCIsZX19O28ucmZjMzk4Nj1vLmdlbmVyYXRlKCksdC5pcD17djRDaWRyOm8ucmZjMzk4Ni5pcHY0Q2lkcix2NkNpZHI6by5yZmMzOTg2LmlwdjZDaWRyLGlwdjQ6by5yZmMzOTg2LmlwdjRhZGRyZXNzLGlwdjY6by5yZmMzOTg2LmlwdjZhZGRyZXNzLGlwdmZ1dHVyZTpvLnJmYzM5ODYuaXB2RnV0dXJlfSxvLmNyZWF0ZVJlZ2V4PWZ1bmN0aW9uKGUpe2NvbnN0IHQ9by5yZmMzOTg2LHI9XCIoPzpcXFxcP1wiKyhlLmFsbG93UXVlcnlTcXVhcmVCcmFja2V0cz90LnF1ZXJ5V2l0aFNxdWFyZUJyYWNrZXRzOnQucXVlcnkpK1wiKT8oPzojXCIrdC5mcmFnbWVudCtcIik/XCIsYT1lLmRvbWFpbj90LnJlbGF0aXZlUmVmQ2FwdHVyZTp0LnJlbGF0aXZlUmVmO2lmKGUucmVsYXRpdmVPbmx5KXJldHVybiBvLndyYXAoYStyKTtsZXQgaT1cIlwiO2lmKGUuc2NoZW1lKXtzKGUuc2NoZW1lIGluc3RhbmNlb2YgUmVnRXhwfHxcInN0cmluZ1wiPT10eXBlb2YgZS5zY2hlbWV8fEFycmF5LmlzQXJyYXkoZS5zY2hlbWUpLFwic2NoZW1lIG11c3QgYmUgYSBSZWdFeHAsIFN0cmluZywgb3IgQXJyYXlcIik7Y29uc3Qgcj1bXS5jb25jYXQoZS5zY2hlbWUpO3Moci5sZW5ndGg+PTEsXCJzY2hlbWUgbXVzdCBoYXZlIGF0IGxlYXN0IDEgc2NoZW1lIHNwZWNpZmllZFwiKTtjb25zdCBvPVtdO2ZvcihsZXQgZT0wO2U8ci5sZW5ndGg7KytlKXtjb25zdCBhPXJbZV07cyhhIGluc3RhbmNlb2YgUmVnRXhwfHxcInN0cmluZ1wiPT10eXBlb2YgYSxcInNjaGVtZSBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgYSBSZWdFeHAgb3IgU3RyaW5nXCIpLGEgaW5zdGFuY2VvZiBSZWdFeHA/by5wdXNoKGEuc291cmNlLnRvU3RyaW5nKCkpOihzKHQuc2NoZW1lUmVnZXgudGVzdChhKSxcInNjaGVtZSBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgYSB2YWxpZCBzY2hlbWVcIiksby5wdXNoKG4oYSkpKX1pPW8uam9pbihcInxcIil9Y29uc3QgbD1cIig/OlwiKyhpP1wiKD86XCIraStcIilcIjp0LnNjaGVtZSkrXCI6XCIrKGUuZG9tYWluP3QuaGllclBhcnRDYXB0dXJlOnQuaGllclBhcnQpK1wiKVwiLGM9ZS5hbGxvd1JlbGF0aXZlP1wiKD86XCIrbCtcInxcIithK1wiKVwiOmw7cmV0dXJuIG8ud3JhcChjK3IsaSl9LG8ud3JhcD1mdW5jdGlvbihlLHQpe3JldHVybntyYXc6ZT1cIig/PS4pKD8haHR0cHM/Oi8kKVwiLmNvbmNhdChlKSxyZWdleDpuZXcgUmVnRXhwKFwiXlwiLmNvbmNhdChlLFwiJFwiKSksc2NoZW1lOnR9fSxvLnVyaVJlZ2V4PW8uY3JlYXRlUmVnZXgoe30pLHQucmVnZXg9ZnVuY3Rpb24oZT17fSl7cmV0dXJuIGUuc2NoZW1lfHxlLmFsbG93UmVsYXRpdmV8fGUucmVsYXRpdmVPbmx5fHxlLmFsbG93UXVlcnlTcXVhcmVCcmFja2V0c3x8ZS5kb21haW4/by5jcmVhdGVSZWdleChlKTpvLnVyaVJlZ2V4fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9bXFxeXFwkXFwuXFwqXFwrXFwtXFw/XFw9XFwhXFw6XFx8XFxcXFxcL1xcKFxcKVxcW1xcXVxce1xcfVxcLF0vZyxcIlxcXFwkJlwiKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oLi4uZSl7dHJ5e3JldHVybiBKU09OLnN0cmluZ2lmeS5hcHBseShudWxsLGUpfWNhdGNoKGUpe3JldHVyblwiW0Nhbm5vdCBkaXNwbGF5IG9iamVjdDogXCIrZS5tZXNzYWdlK1wiXVwifX19LGZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1KU09OLnBhcnNlKCd7XCJ2ZXJzaW9uXCI6XCIxNy4xLjFcIn0nKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9e307ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVyblwiXCI7bGV0IHQ9XCJcIjtmb3IobGV0IHI9MDtyPGUubGVuZ3RoOysrcil7Y29uc3Qgbj1lLmNoYXJDb2RlQXQocik7cy5pc1NhZmUobik/dCs9ZVtyXTp0Kz1zLmVzY2FwZUh0bWxDaGFyKG4pfXJldHVybiB0fSxzLmVzY2FwZUh0bWxDaGFyPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9cy5uYW1lZEh0bWxbZV07aWYodm9pZCAwIT09dClyZXR1cm4gdDtpZihlPj0yNTYpcmV0dXJuXCImI1wiK2UrXCI7XCI7Y29uc3Qgcj1lLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKTtyZXR1cm5cIiYjeFwiLmNvbmNhdChyLFwiO1wiKX0scy5pc1NhZmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PXMuc2FmZUNoYXJDb2Rlc1tlXX0scy5uYW1lZEh0bWw9ezM4OlwiJmFtcDtcIiw2MDpcIiZsdDtcIiw2MjpcIiZndDtcIiwzNDpcIiZxdW90O1wiLDE2MDpcIiZuYnNwO1wiLDE2MjpcIiZjZW50O1wiLDE2MzpcIiZwb3VuZDtcIiwxNjQ6XCImY3VycmVuO1wiLDE2OTpcIiZjb3B5O1wiLDE3NDpcIiZyZWc7XCJ9LHMuc2FmZUNoYXJDb2Rlcz1mdW5jdGlvbigpe2NvbnN0IGU9e307Zm9yKGxldCB0PTMyO3Q8MTIzOysrdCkodD49OTd8fHQ+PTY1JiZ0PD05MHx8dD49NDgmJnQ8PTU3fHwzMj09PXR8fDQ2PT09dHx8NDQ9PT10fHw0NT09PXR8fDU4PT09dHx8OTU9PT10KSYmKGVbdF09bnVsbCk7cmV0dXJuIGV9KCl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXtvcGVyYXRvcnM6W1wiIVwiLFwiXlwiLFwiKlwiLFwiL1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiPFwiLFwiPD1cIixcIj5cIixcIj49XCIsXCI9PVwiLFwiIT1cIixcIiYmXCIsXCJ8fFwiLFwiPz9cIl0sb3BlcmF0b3JDaGFyYWN0ZXJzOltcIiFcIixcIl5cIixcIipcIixcIi9cIixcIiVcIixcIitcIixcIi1cIixcIjxcIixcIj1cIixcIj5cIixcIiZcIixcInxcIixcIj9cIl0sb3BlcmF0b3JzT3JkZXI6W1tcIl5cIl0sW1wiKlwiLFwiL1wiLFwiJVwiXSxbXCIrXCIsXCItXCJdLFtcIjxcIixcIjw9XCIsXCI+XCIsXCI+PVwiXSxbXCI9PVwiLFwiIT1cIl0sW1wiJiZcIl0sW1wifHxcIixcIj8/XCJdXSxvcGVyYXRvcnNQcmVmaXg6W1wiIVwiLFwiblwiXSxsaXRlcmFsczp7J1wiJzonXCInLFwiYFwiOlwiYFwiLFwiJ1wiOlwiJ1wiLFwiW1wiOlwiXVwifSxudW1iZXJSeDovXig/OlswLTldKlxcLj9bMC05XSopezF9JC8sdG9rZW5SeDovXltcXHdcXCRcXCNcXC5cXEBcXDpcXHtcXH1dKyQvLHN5bWJvbDpTeW1ib2woXCJmb3JtdWxhXCIpLHNldHRpbmdzOlN5bWJvbChcInNldHRpbmdzXCIpfTt0LlBhcnNlcj1jbGFzc3tjb25zdHJ1Y3RvcihlLHQ9e30pe2lmKCF0W3Muc2V0dGluZ3NdJiZ0LmNvbnN0YW50cylmb3IoY29uc3QgZSBpbiB0LmNvbnN0YW50cyl7Y29uc3Qgcj10LmNvbnN0YW50c1tlXTtpZihudWxsIT09ciYmIVtcImJvb2xlYW5cIixcIm51bWJlclwiLFwic3RyaW5nXCJdLmluY2x1ZGVzKHR5cGVvZiByKSl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnN0YW50IFwiLmNvbmNhdChlLFwiIGNvbnRhaW5zIGludmFsaWQgXCIpLmNvbmNhdCh0eXBlb2YgcixcIiB2YWx1ZSB0eXBlXCIpKX10aGlzLnNldHRpbmdzPXRbcy5zZXR0aW5nc10/dDpPYmplY3QuYXNzaWduKHtbcy5zZXR0aW5nc106ITAsY29uc3RhbnRzOnt9LGZ1bmN0aW9uczp7fX0sdCksdGhpcy5zaW5nbGU9bnVsbCx0aGlzLl9wYXJ0cz1udWxsLHRoaXMuX3BhcnNlKGUpfV9wYXJzZShlKXtsZXQgcj1bXSxuPVwiXCIsbz0wLGE9ITE7Y29uc3QgaT1lPT57aWYobyl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIG1pc3NpbmcgY2xvc2luZyBwYXJlbnRoZXNpc1wiKTtjb25zdCBpPXIubGVuZ3RoP3Jbci5sZW5ndGgtMV06bnVsbDtpZihhfHxufHxlKXtpZihpJiZcInJlZmVyZW5jZVwiPT09aS50eXBlJiZcIilcIj09PWUpcmV0dXJuIGkudHlwZT1cImZ1bmN0aW9uXCIsaS52YWx1ZT10aGlzLl9zdWJGb3JtdWxhKG4saS52YWx1ZSksdm9pZChuPVwiXCIpO2lmKFwiKVwiPT09ZSl7Y29uc3QgZT1uZXcgdC5QYXJzZXIobix0aGlzLnNldHRpbmdzKTtyLnB1c2goe3R5cGU6XCJzZWdtZW50XCIsdmFsdWU6ZX0pfWVsc2UgaWYoYSl7aWYoXCJdXCI9PT1hKXJldHVybiByLnB1c2goe3R5cGU6XCJyZWZlcmVuY2VcIix2YWx1ZTpufSksdm9pZChuPVwiXCIpO3IucHVzaCh7dHlwZTpcImxpdGVyYWxcIix2YWx1ZTpufSl9ZWxzZSBpZihzLm9wZXJhdG9yQ2hhcmFjdGVycy5pbmNsdWRlcyhuKSlpJiZcIm9wZXJhdG9yXCI9PT1pLnR5cGUmJnMub3BlcmF0b3JzLmluY2x1ZGVzKGkudmFsdWUrbik/aS52YWx1ZSs9bjpyLnB1c2goe3R5cGU6XCJvcGVyYXRvclwiLHZhbHVlOm59KTtlbHNlIGlmKG4ubWF0Y2gocy5udW1iZXJSeCkpci5wdXNoKHt0eXBlOlwiY29uc3RhbnRcIix2YWx1ZTpwYXJzZUZsb2F0KG4pfSk7ZWxzZSBpZih2b2lkIDAhPT10aGlzLnNldHRpbmdzLmNvbnN0YW50c1tuXSlyLnB1c2goe3R5cGU6XCJjb25zdGFudFwiLHZhbHVlOnRoaXMuc2V0dGluZ3MuY29uc3RhbnRzW25dfSk7ZWxzZXtpZighbi5tYXRjaChzLnRva2VuUngpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgaW52YWxpZCB0b2tlbjogXCIuY29uY2F0KG4pKTtyLnB1c2goe3R5cGU6XCJyZWZlcmVuY2VcIix2YWx1ZTpufSl9bj1cIlwifX07Zm9yKGNvbnN0IHQgb2YgZSlhP3Q9PT1hPyhpKCksYT0hMSk6bis9dDpvP1wiKFwiPT09dD8obis9dCwrK28pOlwiKVwiPT09dD8oLS1vLG8/bis9dDppKHQpKTpuKz10OnQgaW4gcy5saXRlcmFscz9hPXMubGl0ZXJhbHNbdF06XCIoXCI9PT10PyhpKCksKytvKTpzLm9wZXJhdG9yQ2hhcmFjdGVycy5pbmNsdWRlcyh0KT8oaSgpLG49dCxpKCkpOlwiIFwiIT09dD9uKz10OmkoKTtpKCkscj1yLm1hcCgoZSx0KT0+XCJvcGVyYXRvclwiIT09ZS50eXBlfHxcIi1cIiE9PWUudmFsdWV8fHQmJlwib3BlcmF0b3JcIiE9PXJbdC0xXS50eXBlP2U6e3R5cGU6XCJvcGVyYXRvclwiLHZhbHVlOlwiblwifSk7bGV0IGw9ITE7Zm9yKGNvbnN0IGUgb2Ygcil7aWYoXCJvcGVyYXRvclwiPT09ZS50eXBlKXtpZihzLm9wZXJhdG9yc1ByZWZpeC5pbmNsdWRlcyhlLnZhbHVlKSljb250aW51ZTtpZighbCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGFuIG9wZXJhdG9yIGluIGludmFsaWQgcG9zaXRpb25cIik7aWYoIXMub3BlcmF0b3JzLmluY2x1ZGVzKGUudmFsdWUpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgYW4gdW5rbm93biBvcGVyYXRvciBcIi5jb25jYXQoZS52YWx1ZSkpfWVsc2UgaWYobCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIG1pc3NpbmcgZXhwZWN0ZWQgb3BlcmF0b3JcIik7bD0hbH1pZighbCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGludmFsaWQgdHJhaWxpbmcgb3BlcmF0b3JcIik7MT09PXIubGVuZ3RoJiZbXCJyZWZlcmVuY2VcIixcImxpdGVyYWxcIixcImNvbnN0YW50XCJdLmluY2x1ZGVzKHJbMF0udHlwZSkmJih0aGlzLnNpbmdsZT17dHlwZTpcInJlZmVyZW5jZVwiPT09clswXS50eXBlP1wicmVmZXJlbmNlXCI6XCJ2YWx1ZVwiLHZhbHVlOnJbMF0udmFsdWV9KSx0aGlzLl9wYXJ0cz1yLm1hcChlPT57aWYoXCJvcGVyYXRvclwiPT09ZS50eXBlKXJldHVybiBzLm9wZXJhdG9yc1ByZWZpeC5pbmNsdWRlcyhlLnZhbHVlKT9lOmUudmFsdWU7aWYoXCJyZWZlcmVuY2VcIiE9PWUudHlwZSlyZXR1cm4gZS52YWx1ZTtpZih0aGlzLnNldHRpbmdzLnRva2VuUngmJiF0aGlzLnNldHRpbmdzLnRva2VuUngudGVzdChlLnZhbHVlKSl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGludmFsaWQgcmVmZXJlbmNlIFwiLmNvbmNhdChlLnZhbHVlKSk7cmV0dXJuIHRoaXMuc2V0dGluZ3MucmVmZXJlbmNlP3RoaXMuc2V0dGluZ3MucmVmZXJlbmNlKGUudmFsdWUpOnMucmVmZXJlbmNlKGUudmFsdWUpfSl9X3N1YkZvcm11bGEoZSxyKXtjb25zdCBuPXRoaXMuc2V0dGluZ3MuZnVuY3Rpb25zW3JdO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyB1bmtub3duIGZ1bmN0aW9uIFwiLmNvbmNhdChyKSk7bGV0IG89W107aWYoZSl7bGV0IHQ9XCJcIixuPTAsYT0hMTtjb25zdCBpPSgpPT57aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyBmdW5jdGlvbiBcIi5jb25jYXQocixcIiB3aXRoIGludmFsaWQgYXJndW1lbnRzIFwiKS5jb25jYXQoZSkpO28ucHVzaCh0KSx0PVwiXCJ9O2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBvPWVbcl07YT8odCs9byxvPT09YSYmKGE9ITEpKTpvIGluIHMubGl0ZXJhbHMmJiFuPyh0Kz1vLGE9cy5saXRlcmFsc1tvXSk6XCIsXCIhPT1vfHxuPyh0Kz1vLFwiKFwiPT09bz8rK246XCIpXCI9PT1vJiYtLW4pOmkoKX1pKCl9cmV0dXJuIG89by5tYXAoZT0+bmV3IHQuUGFyc2VyKGUsdGhpcy5zZXR0aW5ncykpLGZ1bmN0aW9uKGUpe2NvbnN0IHQ9W107Zm9yKGNvbnN0IHIgb2Ygbyl0LnB1c2goci5ldmFsdWF0ZShlKSk7cmV0dXJuIG4uY2FsbChlLC4uLnQpfX1ldmFsdWF0ZShlKXtjb25zdCB0PXRoaXMuX3BhcnRzLnNsaWNlKCk7Zm9yKGxldCByPXQubGVuZ3RoLTI7cj49MDstLXIpe2NvbnN0IG49dFtyXTtpZihuJiZcIm9wZXJhdG9yXCI9PT1uLnR5cGUpe2NvbnN0IG89dFtyKzFdO3Quc3BsaWNlKHIrMSwxKTtjb25zdCBhPXMuZXZhbHVhdGUobyxlKTt0W3JdPXMuc2luZ2xlKG4udmFsdWUsYSl9fXJldHVybiBzLm9wZXJhdG9yc09yZGVyLmZvckVhY2gocj0+e2ZvcihsZXQgbj0xO248dC5sZW5ndGgtMTspaWYoci5pbmNsdWRlcyh0W25dKSl7Y29uc3Qgcj10W25dLG89cy5ldmFsdWF0ZSh0W24tMV0sZSksYT1zLmV2YWx1YXRlKHRbbisxXSxlKTt0LnNwbGljZShuLDIpO2NvbnN0IGk9cy5jYWxjdWxhdGUocixvLGEpO3Rbbi0xXT0wPT09aT8wOml9ZWxzZSBuKz0yfSkscy5ldmFsdWF0ZSh0WzBdLGUpfX0sdC5QYXJzZXIucHJvdG90eXBlW3Muc3ltYm9sXT0hMCxzLnJlZmVyZW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHQmJnZvaWQgMCE9PXRbZV0/dFtlXTpudWxsfX0scy5ldmFsdWF0ZT1mdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT09ZT9udWxsOlwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZSh0KTplW3Muc3ltYm9sXT9lLmV2YWx1YXRlKHQpOmV9LHMuc2luZ2xlPWZ1bmN0aW9uKGUsdCl7aWYoXCIhXCI9PT1lKXJldHVybiF0O2NvbnN0IHI9LXQ7cmV0dXJuIDA9PT1yPzA6cn0scy5jYWxjdWxhdGU9ZnVuY3Rpb24oZSx0LHIpe2lmKFwiPz9cIj09PWUpcmV0dXJuIHMuZXhpc3RzKHQpP3Q6cjtpZihcInN0cmluZ1wiPT10eXBlb2YgdHx8XCJzdHJpbmdcIj09dHlwZW9mIHIpe2lmKFwiK1wiPT09ZSlyZXR1cm4odD1zLmV4aXN0cyh0KT90OlwiXCIpKyhyPXMuZXhpc3RzKHIpP3I6XCJcIil9ZWxzZSBzd2l0Y2goZSl7Y2FzZVwiXlwiOnJldHVybiBNYXRoLnBvdyh0LHIpO2Nhc2VcIipcIjpyZXR1cm4gdCpyO2Nhc2VcIi9cIjpyZXR1cm4gdC9yO2Nhc2VcIiVcIjpyZXR1cm4gdCVyO2Nhc2VcIitcIjpyZXR1cm4gdCtyO2Nhc2VcIi1cIjpyZXR1cm4gdC1yfXN3aXRjaChlKXtjYXNlXCI8XCI6cmV0dXJuIHQ8cjtjYXNlXCI8PVwiOnJldHVybiB0PD1yO2Nhc2VcIj5cIjpyZXR1cm4gdD5yO2Nhc2VcIj49XCI6cmV0dXJuIHQ+PXI7Y2FzZVwiPT1cIjpyZXR1cm4gdD09PXI7Y2FzZVwiIT1cIjpyZXR1cm4gdCE9PXI7Y2FzZVwiJiZcIjpyZXR1cm4gdCYmcjtjYXNlXCJ8fFwiOnJldHVybiB0fHxyfXJldHVybiBudWxsfSxzLmV4aXN0cz1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZX19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDgpLGk9cig0KSxsPXIoNSksYz17fTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJhbHRlcm5hdGl2ZXNcIixmbGFnczp7bWF0Y2g6e2RlZmF1bHQ6XCJhbnlcIn19LHRlcm1zOnttYXRjaGVzOntpbml0OltdLHJlZ2lzdGVyOmwudG9TaWJsaW5nfX0sYXJnczooZSwuLi50KT0+MT09PXQubGVuZ3RoJiZBcnJheS5pc0FycmF5KHRbMF0pP2UudHJ5KC4uLnRbMF0pOmUudHJ5KC4uLnQpLHZhbGlkYXRlKGUsdCl7Y29uc3R7c2NoZW1hOnIsZXJyb3I6cyxzdGF0ZTpuLHByZWZzOm99PXQ7aWYoci5fZmxhZ3MubWF0Y2gpe2xldCB0LGE9MDtmb3IobGV0IHM9MDtzPHIuJF90ZXJtcy5tYXRjaGVzLmxlbmd0aDsrK3Mpe2NvbnN0IGk9ci4kX3Rlcm1zLm1hdGNoZXNbc10sbD1uLm5lc3QoaS5zY2hlbWEsXCJtYXRjaC5cIi5jb25jYXQocykpO2wuc25hcHNob3QoKTtjb25zdCBjPWkuc2NoZW1hLiRfdmFsaWRhdGUoZSxsLG8pO2MuZXJyb3JzP2wucmVzdG9yZSgpOigrK2EsdD1jLnZhbHVlKX1yZXR1cm4gYT9cIm9uZVwiPT09ci5fZmxhZ3MubWF0Y2g/MT09PWE/e3ZhbHVlOnR9OntlcnJvcnM6cyhcImFsdGVybmF0aXZlcy5vbmVcIil9OmE9PT1yLiRfdGVybXMubWF0Y2hlcy5sZW5ndGg/e3ZhbHVlOmV9OntlcnJvcnM6cyhcImFsdGVybmF0aXZlcy5hbGxcIil9OntlcnJvcnM6cyhcImFsdGVybmF0aXZlcy5hbnlcIil9fWNvbnN0IGE9W107Zm9yKGxldCB0PTA7dDxyLiRfdGVybXMubWF0Y2hlcy5sZW5ndGg7Kyt0KXtjb25zdCBzPXIuJF90ZXJtcy5tYXRjaGVzW3RdO2lmKHMuc2NoZW1hKXtjb25zdCByPW4ubmVzdChzLnNjaGVtYSxcIm1hdGNoLlwiLmNvbmNhdCh0KSk7ci5zbmFwc2hvdCgpO2NvbnN0IGk9cy5zY2hlbWEuJF92YWxpZGF0ZShlLHIsbyk7aWYoIWkuZXJyb3JzKXJldHVybiBpO3IucmVzdG9yZSgpLGEucHVzaCh7c2NoZW1hOnMuc2NoZW1hLHJlcG9ydHM6aS5lcnJvcnN9KTtjb250aW51ZX1jb25zdCBpPXMucmVmP3MucmVmLnJlc29sdmUoZSxuLG8pOmUsbD1zLmlzP1tzXTpzLnN3aXRjaDtmb3IobGV0IHI9MDtyPGwubGVuZ3RoOysrcil7Y29uc3QgYT1sW3JdLHtpczpjLHRoZW46dSxvdGhlcndpc2U6Zn09YSxtPVwibWF0Y2guXCIuY29uY2F0KHQpLmNvbmNhdChzLnN3aXRjaD9cIi5cIityOlwiXCIpO2lmKGMuJF9tYXRjaChpLG4ubmVzdChjLFwiXCIuY29uY2F0KG0sXCIuaXNcIikpLG8pKXtpZih1KXJldHVybiB1LiRfdmFsaWRhdGUoZSxuLm5lc3QodSxcIlwiLmNvbmNhdChtLFwiLnRoZW5cIikpLG8pfWVsc2UgaWYoZilyZXR1cm4gZi4kX3ZhbGlkYXRlKGUsbi5uZXN0KGYsXCJcIi5jb25jYXQobSxcIi5vdGhlcndpc2VcIikpLG8pfX1yZXR1cm4gYy5lcnJvcnMoYSx0KX0scnVsZXM6e2NvbmRpdGlvbmFsOnttZXRob2QoZSx0KXtzKCF0aGlzLl9mbGFncy5fZW5kZWRTd2l0Y2gsXCJVbnJlYWNoYWJsZSBjb25kaXRpb25cIikscyghdGhpcy5fZmxhZ3MubWF0Y2gsXCJDYW5ub3QgY29tYmluZSBtYXRjaCBtb2RlXCIsdGhpcy5fZmxhZ3MubWF0Y2gsXCJ3aXRoIGNvbmRpdGlvbmFsIHJ1bGVcIikscyh2b2lkIDA9PT10LmJyZWFrLFwiQ2Fubm90IHVzZSBicmVhayBvcHRpb24gd2l0aCBhbHRlcm5hdGl2ZXMgY29uZGl0aW9uYWxcIik7Y29uc3Qgcj10aGlzLmNsb25lKCksbj1hLndoZW4ocixlLHQpLG89bi5pcz9bbl06bi5zd2l0Y2g7Zm9yKGNvbnN0IGUgb2YgbylpZihlLnRoZW4mJmUub3RoZXJ3aXNlKXtyLiRfc2V0RmxhZyhcIl9lbmRlZFN3aXRjaFwiLCEwLHtjbG9uZTohMX0pO2JyZWFrfXJldHVybiByLiRfdGVybXMubWF0Y2hlcy5wdXNoKG4pLHIuJF9tdXRhdGVSZWJ1aWxkKCl9fSxtYXRjaDp7bWV0aG9kKGUpe2lmKHMoW1wiYW55XCIsXCJvbmVcIixcImFsbFwiXS5pbmNsdWRlcyhlKSxcIkludmFsaWQgYWx0ZXJuYXRpdmVzIG1hdGNoIG1vZGVcIixlKSxcImFueVwiIT09ZSlmb3IoY29uc3QgdCBvZiB0aGlzLiRfdGVybXMubWF0Y2hlcylzKHQuc2NoZW1hLFwiQ2Fubm90IGNvbWJpbmUgbWF0Y2ggbW9kZVwiLGUsXCJ3aXRoIGNvbmRpdGlvbmFsIHJ1bGVzXCIpO3JldHVybiB0aGlzLiRfc2V0RmxhZyhcIm1hdGNoXCIsZSl9fSx0cnk6e21ldGhvZCguLi5lKXtzKGUubGVuZ3RoLFwiTWlzc2luZyBhbHRlcm5hdGl2ZSBzY2hlbWFzXCIpLG8udmVyaWZ5RmxhdChlLFwidHJ5XCIpLHMoIXRoaXMuX2ZsYWdzLl9lbmRlZFN3aXRjaCxcIlVucmVhY2hhYmxlIGNvbmRpdGlvblwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtmb3IoY29uc3QgciBvZiBlKXQuJF90ZXJtcy5tYXRjaGVzLnB1c2goe3NjaGVtYTp0LiRfY29tcGlsZShyKX0pO3JldHVybiB0LiRfbXV0YXRlUmVidWlsZCgpfX19LG92ZXJyaWRlczp7bGFiZWwoZSl7cmV0dXJuIHRoaXMuJF9zdXBlci5sYWJlbChlKS4kX21vZGlmeSh7ZWFjaDoodCxyKT0+XCJpc1wiIT09ci5wYXRoWzBdP3QubGFiZWwoZSk6dm9pZCAwLHJlZjohMX0pfX0scmVidWlsZChlKXtlLiRfbW9kaWZ5KHtlYWNoOnQ9PntvLmlzU2NoZW1hKHQpJiZcImFycmF5XCI9PT10LnR5cGUmJmUuJF9zZXRGbGFnKFwiX2FycmF5SXRlbXNcIiwhMCx7Y2xvbmU6ITF9KX19KX0sbWFuaWZlc3Q6e2J1aWxkKGUsdCl7aWYodC5tYXRjaGVzKWZvcihjb25zdCByIG9mIHQubWF0Y2hlcyl7Y29uc3R7c2NoZW1hOnQscmVmOnMsaXM6bixub3Q6byx0aGVuOmEsb3RoZXJ3aXNlOml9PXI7ZT10P2UudHJ5KHQpOnM/ZS5jb25kaXRpb25hbChzLHtpczpuLHRoZW46YSxub3Q6byxvdGhlcndpc2U6aSxzd2l0Y2g6ci5zd2l0Y2h9KTplLmNvbmRpdGlvbmFsKG4se3RoZW46YSxvdGhlcndpc2U6aX0pfXJldHVybiBlfX0sbWVzc2FnZXM6e1wiYWx0ZXJuYXRpdmVzLmFsbFwiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBtYXRjaCBhbGwgb2YgdGhlIHJlcXVpcmVkIHR5cGVzXCIsXCJhbHRlcm5hdGl2ZXMuYW55XCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgYWxsb3dlZCB0eXBlc1wiLFwiYWx0ZXJuYXRpdmVzLm1hdGNoXCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgYWxsb3dlZCB0eXBlc1wiLFwiYWx0ZXJuYXRpdmVzLm9uZVwiOlwie3sjbGFiZWx9fSBtYXRjaGVzIG1vcmUgdGhhbiBvbmUgYWxsb3dlZCB0eXBlXCIsXCJhbHRlcm5hdGl2ZXMudHlwZXNcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBvbmUgb2Yge3sjdHlwZXN9fVwifX0pLGMuZXJyb3JzPWZ1bmN0aW9uKGUse2Vycm9yOnQsc3RhdGU6cn0pe2lmKCFlLmxlbmd0aClyZXR1cm57ZXJyb3JzOnQoXCJhbHRlcm5hdGl2ZXMuYW55XCIpfTtpZigxPT09ZS5sZW5ndGgpcmV0dXJue2Vycm9yczplWzBdLnJlcG9ydHN9O2NvbnN0IHM9bmV3IFNldCxuPVtdO2Zvcihjb25zdHtyZXBvcnRzOm8sc2NoZW1hOmF9b2YgZSl7aWYoby5sZW5ndGg+MSlyZXR1cm4gYy51bm1hdGNoZWQoZSx0KTtjb25zdCBsPW9bMF07aWYobCBpbnN0YW5jZW9mIGkuUmVwb3J0PT0hMSlyZXR1cm4gYy51bm1hdGNoZWQoZSx0KTtpZihsLnN0YXRlLnBhdGgubGVuZ3RoIT09ci5wYXRoLmxlbmd0aCl7bi5wdXNoKHt0eXBlOmEudHlwZSxyZXBvcnQ6bH0pO2NvbnRpbnVlfWlmKFwiYW55Lm9ubHlcIj09PWwuY29kZSl7Zm9yKGNvbnN0IGUgb2YgbC5sb2NhbC52YWxpZHMpcy5hZGQoZSk7Y29udGludWV9Y29uc3RbdSxmXT1sLmNvZGUuc3BsaXQoXCIuXCIpO1wiYmFzZVwiPT09Zj9zLmFkZCh1KTpuLnB1c2goe3R5cGU6YS50eXBlLHJlcG9ydDpsfSl9cmV0dXJuIG4ubGVuZ3RoPzE9PT1uLmxlbmd0aD97ZXJyb3JzOm5bMF0ucmVwb3J0fTpjLnVubWF0Y2hlZChlLHQpOntlcnJvcnM6dChcImFsdGVybmF0aXZlcy50eXBlc1wiLHt0eXBlczpbLi4uc119KX19LGMudW5tYXRjaGVkPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj1bXTtmb3IoY29uc3QgdCBvZiBlKXIucHVzaCguLi50LnJlcG9ydHMpO3JldHVybntlcnJvcnM6dChcImFsdGVybmF0aXZlcy5tYXRjaFwiLGkuZGV0YWlscyhyLHtvdmVycmlkZTohMX0pKX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMTApLGE9cigyMCksaT1yKDE1KSxsPXIoMSksYz1yKDgpLHU9cig0KSxmPXIoMTcpLG09cigxOCksaD1yKDkpLGQ9cigzNSkscD1yKDUpLGc9cigxOSkseT1yKDM2KSxiPXIoMjEpLHY9e0Jhc2U6Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy50eXBlPWUsdGhpcy4kX3Jvb3Q9bnVsbCx0aGlzLl9kZWZpbml0aW9uPXt9LHRoaXMuX2lkcz1uZXcgZC5JZHMsdGhpcy5fcHJlZmVyZW5jZXM9bnVsbCx0aGlzLl9yZWZzPW5ldyBwLk1hbmFnZXIsdGhpcy5fY2FjaGU9bnVsbCx0aGlzLl92YWxpZHM9bnVsbCx0aGlzLl9pbnZhbGlkcz1udWxsLHRoaXMuX2ZsYWdzPXt9LHRoaXMuX3J1bGVzPVtdLHRoaXMuX3NpbmdsZVJ1bGVzPW5ldyBNYXAsdGhpcy4kX3Rlcm1zPXt9LHRoaXMuJF90ZW1wPXtydWxlc2V0Om51bGwsd2hlbnM6e319fWRlc2NyaWJlKCl7cmV0dXJuIHMoXCJmdW5jdGlvblwiPT10eXBlb2YgbS5kZXNjcmliZSxcIk1hbmlmZXN0IGZ1bmN0aW9uYWxpdHkgZGlzYWJsZWRcIiksbS5kZXNjcmliZSh0aGlzKX1hbGxvdyguLi5lKXtyZXR1cm4gbC52ZXJpZnlGbGF0KGUsXCJhbGxvd1wiKSx0aGlzLl92YWx1ZXMoZSxcIl92YWxpZHNcIil9YWx0ZXIoZSl7cyhlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmIUFycmF5LmlzQXJyYXkoZSksXCJJbnZhbGlkIHRhcmdldHMgYXJndW1lbnRcIikscyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3Qgc2V0IGFsdGVyYXRpb25zIGluc2lkZSBhIHJ1bGVzZXRcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7dC4kX3Rlcm1zLmFsdGVyYXRpb25zPXQuJF90ZXJtcy5hbHRlcmF0aW9uc3x8W107Zm9yKGNvbnN0IHIgaW4gZSl7Y29uc3Qgbj1lW3JdO3MoXCJmdW5jdGlvblwiPT10eXBlb2YgbixcIkFsdGVyYXRpb24gYWRqdXN0ZXIgZm9yXCIscixcIm11c3QgYmUgYSBmdW5jdGlvblwiKSx0LiRfdGVybXMuYWx0ZXJhdGlvbnMucHVzaCh7dGFyZ2V0OnIsYWRqdXN0ZXI6bn0pfXJldHVybiB0LiRfdGVtcC5ydWxlc2V0PSExLHR9Y2FzdChlKXtyZXR1cm4gcyghMT09PWV8fFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiSW52YWxpZCB0byB2YWx1ZVwiKSxzKCExPT09ZXx8dGhpcy5fZGVmaW5pdGlvbi5jYXN0W2VdLFwiVHlwZVwiLHRoaXMudHlwZSxcImRvZXMgbm90IHN1cHBvcnQgY2FzdGluZyB0b1wiLGUpLHRoaXMuJF9zZXRGbGFnKFwiY2FzdFwiLCExPT09ZT92b2lkIDA6ZSl9ZGVmYXVsdChlLHQpe3JldHVybiB0aGlzLl9kZWZhdWx0KFwiZGVmYXVsdFwiLGUsdCl9ZGVzY3JpcHRpb24oZSl7cmV0dXJuIHMoZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJEZXNjcmlwdGlvbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLiRfc2V0RmxhZyhcImRlc2NyaXB0aW9uXCIsZSl9ZW1wdHkoZSl7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHZvaWQgMCE9PWUmJihlPXQuJF9jb21waWxlKGUse292ZXJyaWRlOiExfSkpLHQuJF9zZXRGbGFnKFwiZW1wdHlcIixlLHtjbG9uZTohMX0pfWVycm9yKGUpe3JldHVybiBzKGUsXCJNaXNzaW5nIGVycm9yXCIpLHMoZSBpbnN0YW5jZW9mIEVycm9yfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwiTXVzdCBwcm92aWRlIGEgdmFsaWQgRXJyb3Igb2JqZWN0IG9yIGEgZnVuY3Rpb25cIiksdGhpcy4kX3NldEZsYWcoXCJlcnJvclwiLGUpfWV4YW1wbGUoZSx0PXt9KXtyZXR1cm4gcyh2b2lkIDAhPT1lLFwiTWlzc2luZyBleGFtcGxlXCIpLGwuYXNzZXJ0T3B0aW9ucyh0LFtcIm92ZXJyaWRlXCJdKSx0aGlzLl9pbm5lcihcImV4YW1wbGVzXCIsZSx7c2luZ2xlOiEwLG92ZXJyaWRlOnQub3ZlcnJpZGV9KX1leHRlcm5hbChlLHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiYocyghdCxcIkNhbm5vdCBjb21iaW5lIG9wdGlvbnMgd2l0aCBkZXNjcmlwdGlvblwiKSx0PWUuZGVzY3JpcHRpb24sZT1lLm1ldGhvZCkscyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwiTWV0aG9kIG11c3QgYmUgYSBmdW5jdGlvblwiKSxzKHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LFwiRGVzY3JpcHRpb24gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIiksdGhpcy5faW5uZXIoXCJleHRlcm5hbHNcIix7bWV0aG9kOmUsZGVzY3JpcHRpb246dH0se3NpbmdsZTohMH0pfWZhaWxvdmVyKGUsdCl7cmV0dXJuIHRoaXMuX2RlZmF1bHQoXCJmYWlsb3ZlclwiLGUsdCl9Zm9yYmlkZGVuKCl7cmV0dXJuIHRoaXMucHJlc2VuY2UoXCJmb3JiaWRkZW5cIil9aWQoZSl7cmV0dXJuIGU/KHMoXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJpZCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSxzKC9eW15cXC5dKyQvLnRlc3QoZSksXCJpZCBjYW5ub3QgY29udGFpbiBwZXJpb2QgY2hhcmFjdGVyXCIpLHRoaXMuJF9zZXRGbGFnKFwiaWRcIixlKSk6dGhpcy4kX3NldEZsYWcoXCJpZFwiLHZvaWQgMCl9aW52YWxpZCguLi5lKXtyZXR1cm4gdGhpcy5fdmFsdWVzKGUsXCJfaW52YWxpZHNcIil9bGFiZWwoZSl7cmV0dXJuIHMoZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJMYWJlbCBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHRoaXMuJF9zZXRGbGFnKFwibGFiZWxcIixlKX1tZXRhKGUpe3JldHVybiBzKHZvaWQgMCE9PWUsXCJNZXRhIGNhbm5vdCBiZSB1bmRlZmluZWRcIiksdGhpcy5faW5uZXIoXCJtZXRhc1wiLGUse3NpbmdsZTohMH0pfW5vdGUoLi4uZSl7cyhlLmxlbmd0aCxcIk1pc3Npbmcgbm90ZXNcIik7Zm9yKGNvbnN0IHQgb2YgZSlzKHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LFwiTm90ZXMgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nc1wiKTtyZXR1cm4gdGhpcy5faW5uZXIoXCJub3Rlc1wiLGUpfW9ubHkoZT0hMCl7cmV0dXJuIHMoXCJib29sZWFuXCI9PXR5cGVvZiBlLFwiSW52YWxpZCBtb2RlOlwiLGUpLHRoaXMuJF9zZXRGbGFnKFwib25seVwiLGUpfW9wdGlvbmFsKCl7cmV0dXJuIHRoaXMucHJlc2VuY2UoXCJvcHRpb25hbFwiKX1wcmVmcyhlKXtzKGUsXCJNaXNzaW5nIHByZWZlcmVuY2VzXCIpLHModm9pZCAwPT09ZS5jb250ZXh0LFwiQ2Fubm90IG92ZXJyaWRlIGNvbnRleHRcIikscyh2b2lkIDA9PT1lLmV4dGVybmFscyxcIkNhbm5vdCBvdmVycmlkZSBleHRlcm5hbHNcIikscyh2b2lkIDA9PT1lLndhcm5pbmdzLFwiQ2Fubm90IG92ZXJyaWRlIHdhcm5pbmdzXCIpLHModm9pZCAwPT09ZS5kZWJ1ZyxcIkNhbm5vdCBvdmVycmlkZSBkZWJ1Z1wiKSxsLmNoZWNrUHJlZmVyZW5jZXMoZSk7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHQuX3ByZWZlcmVuY2VzPWwucHJlZmVyZW5jZXModC5fcHJlZmVyZW5jZXMsZSksdH1wcmVzZW5jZShlKXtyZXR1cm4gcyhbXCJvcHRpb25hbFwiLFwicmVxdWlyZWRcIixcImZvcmJpZGRlblwiXS5pbmNsdWRlcyhlKSxcIlVua25vd24gcHJlc2VuY2UgbW9kZVwiLGUpLHRoaXMuJF9zZXRGbGFnKFwicHJlc2VuY2VcIixlKX1yYXcoZT0hMCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwicmVzdWx0XCIsZT9cInJhd1wiOnZvaWQgMCl9cmVzdWx0KGUpe3JldHVybiBzKFtcInJhd1wiLFwic3RyaXBcIl0uaW5jbHVkZXMoZSksXCJVbmtub3duIHJlc3VsdCBtb2RlXCIsZSksdGhpcy4kX3NldEZsYWcoXCJyZXN1bHRcIixlKX1yZXF1aXJlZCgpe3JldHVybiB0aGlzLnByZXNlbmNlKFwicmVxdWlyZWRcIil9c3RyaWN0KGUpe2NvbnN0IHQ9dGhpcy5jbG9uZSgpLHI9dm9pZCAwIT09ZSYmIWU7cmV0dXJuIHQuX3ByZWZlcmVuY2VzPWwucHJlZmVyZW5jZXModC5fcHJlZmVyZW5jZXMse2NvbnZlcnQ6cn0pLHR9c3RyaXAoZT0hMCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwicmVzdWx0XCIsZT9cInN0cmlwXCI6dm9pZCAwKX10YWcoLi4uZSl7cyhlLmxlbmd0aCxcIk1pc3NpbmcgdGFnc1wiKTtmb3IoY29uc3QgdCBvZiBlKXModCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJUYWdzIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ3NcIik7cmV0dXJuIHRoaXMuX2lubmVyKFwidGFnc1wiLGUpfXVuaXQoZSl7cmV0dXJuIHMoZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJVbml0IG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIiksdGhpcy4kX3NldEZsYWcoXCJ1bml0XCIsZSl9dmFsaWQoLi4uZSl7bC52ZXJpZnlGbGF0KGUsXCJ2YWxpZFwiKTtjb25zdCB0PXRoaXMuYWxsb3coLi4uZSk7cmV0dXJuIHQuJF9zZXRGbGFnKFwib25seVwiLCEhdC5fdmFsaWRzLHtjbG9uZTohMX0pLHR9d2hlbihlLHQpe2NvbnN0IHI9dGhpcy5jbG9uZSgpO3IuJF90ZXJtcy53aGVuc3x8KHIuJF90ZXJtcy53aGVucz1bXSk7Y29uc3Qgbj1jLndoZW4ocixlLHQpO2lmKCFbXCJhbnlcIixcImxpbmtcIl0uaW5jbHVkZXMoci50eXBlKSl7Y29uc3QgZT1uLmlzP1tuXTpuLnN3aXRjaDtmb3IoY29uc3QgdCBvZiBlKXMoIXQudGhlbnx8XCJhbnlcIj09PXQudGhlbi50eXBlfHx0LnRoZW4udHlwZT09PXIudHlwZSxcIkNhbm5vdCBjb21iaW5lXCIsci50eXBlLFwid2l0aFwiLHQudGhlbiYmdC50aGVuLnR5cGUpLHMoIXQub3RoZXJ3aXNlfHxcImFueVwiPT09dC5vdGhlcndpc2UudHlwZXx8dC5vdGhlcndpc2UudHlwZT09PXIudHlwZSxcIkNhbm5vdCBjb21iaW5lXCIsci50eXBlLFwid2l0aFwiLHQub3RoZXJ3aXNlJiZ0Lm90aGVyd2lzZS50eXBlKX1yZXR1cm4gci4kX3Rlcm1zLndoZW5zLnB1c2gobiksci4kX211dGF0ZVJlYnVpbGQoKX1jYWNoZShlKXtzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBzZXQgY2FjaGluZyBpbnNpZGUgYSBydWxlc2V0XCIpLHMoIXRoaXMuX2NhY2hlLFwiQ2Fubm90IG92ZXJyaWRlIHNjaGVtYSBjYWNoZVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC5fY2FjaGU9ZXx8aS5wcm92aWRlci5wcm92aXNpb24oKSx0LiRfdGVtcC5ydWxlc2V0PSExLHR9Y2xvbmUoKXtjb25zdCBlPU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtyZXR1cm4gdGhpcy5fYXNzaWduKGUpfWNvbmNhdChlKXtzKGwuaXNTY2hlbWEoZSksXCJJbnZhbGlkIHNjaGVtYSBvYmplY3RcIikscyhcImFueVwiPT09dGhpcy50eXBlfHxcImFueVwiPT09ZS50eXBlfHxlLnR5cGU9PT10aGlzLnR5cGUsXCJDYW5ub3QgbWVyZ2UgdHlwZVwiLHRoaXMudHlwZSxcIndpdGggYW5vdGhlciB0eXBlOlwiLGUudHlwZSkscyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3QgY29uY2F0ZW5hdGUgb250byBhIHNjaGVtYSB3aXRoIG9wZW4gcnVsZXNldFwiKSxzKCFlLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBjb25jYXRlbmF0ZSBhIHNjaGVtYSB3aXRoIG9wZW4gcnVsZXNldFwiKTtsZXQgdD10aGlzLmNsb25lKCk7aWYoXCJhbnlcIj09PXRoaXMudHlwZSYmXCJhbnlcIiE9PWUudHlwZSl7Y29uc3Qgcj1lLmNsb25lKCk7Zm9yKGNvbnN0IGUgb2YgT2JqZWN0LmtleXModCkpXCJ0eXBlXCIhPT1lJiYocltlXT10W2VdKTt0PXJ9dC5faWRzLmNvbmNhdChlLl9pZHMpLHQuX3JlZnMucmVnaXN0ZXIoZSxwLnRvU2libGluZyksdC5fcHJlZmVyZW5jZXM9dC5fcHJlZmVyZW5jZXM/bC5wcmVmZXJlbmNlcyh0Ll9wcmVmZXJlbmNlcyxlLl9wcmVmZXJlbmNlcyk6ZS5fcHJlZmVyZW5jZXMsdC5fdmFsaWRzPWIubWVyZ2UodC5fdmFsaWRzLGUuX3ZhbGlkcyxlLl9pbnZhbGlkcyksdC5faW52YWxpZHM9Yi5tZXJnZSh0Ll9pbnZhbGlkcyxlLl9pbnZhbGlkcyxlLl92YWxpZHMpO2Zvcihjb25zdCByIG9mIGUuX3NpbmdsZVJ1bGVzLmtleXMoKSl0Ll9zaW5nbGVSdWxlcy5oYXMocikmJih0Ll9ydWxlcz10Ll9ydWxlcy5maWx0ZXIoZT0+ZS5rZWVwfHxlLm5hbWUhPT1yKSx0Ll9zaW5nbGVSdWxlcy5kZWxldGUocikpO2Zvcihjb25zdCByIG9mIGUuX3J1bGVzKWUuX2RlZmluaXRpb24ucnVsZXNbci5tZXRob2RdLm11bHRpfHx0Ll9zaW5nbGVSdWxlcy5zZXQoci5uYW1lLHIpLHQuX3J1bGVzLnB1c2gocik7aWYodC5fZmxhZ3MuZW1wdHkmJmUuX2ZsYWdzLmVtcHR5KXt0Ll9mbGFncy5lbXB0eT10Ll9mbGFncy5lbXB0eS5jb25jYXQoZS5fZmxhZ3MuZW1wdHkpO2NvbnN0IHI9T2JqZWN0LmFzc2lnbih7fSxlLl9mbGFncyk7ZGVsZXRlIHIuZW1wdHksYSh0Ll9mbGFncyxyKX1lbHNlIGlmKGUuX2ZsYWdzLmVtcHR5KXt0Ll9mbGFncy5lbXB0eT1lLl9mbGFncy5lbXB0eTtjb25zdCByPU9iamVjdC5hc3NpZ24oe30sZS5fZmxhZ3MpO2RlbGV0ZSByLmVtcHR5LGEodC5fZmxhZ3Mscil9ZWxzZSBhKHQuX2ZsYWdzLGUuX2ZsYWdzKTtmb3IoY29uc3QgciBpbiBlLiRfdGVybXMpe2NvbnN0IHM9ZS4kX3Rlcm1zW3JdO3M/dC4kX3Rlcm1zW3JdP3QuJF90ZXJtc1tyXT10LiRfdGVybXNbcl0uY29uY2F0KHMpOnQuJF90ZXJtc1tyXT1zLnNsaWNlKCk6dC4kX3Rlcm1zW3JdfHwodC4kX3Rlcm1zW3JdPXMpfXJldHVybiB0aGlzLiRfcm9vdC5fdHJhY2VyJiZ0aGlzLiRfcm9vdC5fdHJhY2VyLl9jb21iaW5lKHQsW3RoaXMsZV0pLHQuJF9tdXRhdGVSZWJ1aWxkKCl9ZXh0ZW5kKGUpe3JldHVybiBzKCFlLmJhc2UsXCJDYW5ub3QgZXh0ZW5kIHR5cGUgd2l0aCBhbm90aGVyIGJhc2VcIiksZi50eXBlKHRoaXMsZSl9ZXh0cmFjdChlKXtyZXR1cm4gZT1BcnJheS5pc0FycmF5KGUpP2U6ZS5zcGxpdChcIi5cIiksdGhpcy5faWRzLnJlYWNoKGUpfWZvcmsoZSx0KXtzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBmb3JrIGluc2lkZSBhIHJ1bGVzZXRcIik7bGV0IHI9dGhpcztmb3IobGV0IHMgb2ZbXS5jb25jYXQoZSkpcz1BcnJheS5pc0FycmF5KHMpP3M6cy5zcGxpdChcIi5cIikscj1yLl9pZHMuZm9yayhzLHQscik7cmV0dXJuIHIuJF90ZW1wLnJ1bGVzZXQ9ITEscn1ydWxlKGUpe2NvbnN0IHQ9dGhpcy5fZGVmaW5pdGlvbjtsLmFzc2VydE9wdGlvbnMoZSxPYmplY3Qua2V5cyh0Lm1vZGlmaWVycykpLHMoITEhPT10aGlzLiRfdGVtcC5ydWxlc2V0LFwiQ2Fubm90IGFwcGx5IHJ1bGVzIHRvIGVtcHR5IHJ1bGVzZXQgb3IgdGhlIGxhc3QgcnVsZSBhZGRlZCBkb2VzIG5vdCBzdXBwb3J0IHJ1bGUgcHJvcGVydGllc1wiKTtjb25zdCByPW51bGw9PT10aGlzLiRfdGVtcC5ydWxlc2V0P3RoaXMuX3J1bGVzLmxlbmd0aC0xOnRoaXMuJF90ZW1wLnJ1bGVzZXQ7cyhyPj0wJiZyPHRoaXMuX3J1bGVzLmxlbmd0aCxcIkNhbm5vdCBhcHBseSBydWxlcyB0byBlbXB0eSBydWxlc2V0XCIpO2NvbnN0IG89dGhpcy5jbG9uZSgpO2ZvcihsZXQgYT1yO2E8by5fcnVsZXMubGVuZ3RoOysrYSl7Y29uc3Qgcj1vLl9ydWxlc1thXSxpPW4ocik7Zm9yKGNvbnN0IG4gaW4gZSl0Lm1vZGlmaWVyc1tuXShpLGVbbl0pLHMoaS5uYW1lPT09ci5uYW1lLFwiQ2Fubm90IGNoYW5nZSBydWxlIG5hbWVcIik7by5fcnVsZXNbYV09aSxvLl9zaW5nbGVSdWxlcy5nZXQoaS5uYW1lKT09PXImJm8uX3NpbmdsZVJ1bGVzLnNldChpLm5hbWUsaSl9cmV0dXJuIG8uJF90ZW1wLnJ1bGVzZXQ9ITEsby4kX211dGF0ZVJlYnVpbGQoKX1nZXQgcnVsZXNldCgpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHN0YXJ0IGEgbmV3IHJ1bGVzZXQgd2l0aG91dCBjbG9zaW5nIHRoZSBwcmV2aW91cyBvbmVcIik7Y29uc3QgZT10aGlzLmNsb25lKCk7cmV0dXJuIGUuJF90ZW1wLnJ1bGVzZXQ9ZS5fcnVsZXMubGVuZ3RoLGV9Z2V0ICQoKXtyZXR1cm4gdGhpcy5ydWxlc2V0fXRhaWxvcihlKXtlPVtdLmNvbmNhdChlKSxzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCB0YWlsb3IgaW5zaWRlIGEgcnVsZXNldFwiKTtsZXQgdD10aGlzO2lmKHRoaXMuJF90ZXJtcy5hbHRlcmF0aW9ucylmb3IoY29uc3R7dGFyZ2V0OnIsYWRqdXN0ZXI6bn1vZiB0aGlzLiRfdGVybXMuYWx0ZXJhdGlvbnMpZS5pbmNsdWRlcyhyKSYmKHQ9bih0KSxzKGwuaXNTY2hlbWEodCksXCJBbHRlcmF0aW9uIGFkanVzdGVyIGZvclwiLHIsXCJmYWlsZWQgdG8gcmV0dXJuIGEgc2NoZW1hIG9iamVjdFwiKSk7cmV0dXJuIHQ9dC4kX21vZGlmeSh7ZWFjaDp0PT50LnRhaWxvcihlKSxyZWY6ITF9KSx0LiRfdGVtcC5ydWxlc2V0PSExLHQuJF9tdXRhdGVSZWJ1aWxkKCl9dHJhY2VyKCl7cmV0dXJuIGcubG9jYXRpb24/Zy5sb2NhdGlvbih0aGlzKTp0aGlzfXZhbGlkYXRlKGUsdCl7cmV0dXJuIHkuZW50cnkoZSx0aGlzLHQpfXZhbGlkYXRlQXN5bmMoZSx0KXtyZXR1cm4geS5lbnRyeUFzeW5jKGUsdGhpcyx0KX0kX2FkZFJ1bGUoZSl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtuYW1lOmV9KSxzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLFwiSW52YWxpZCBvcHRpb25zXCIpLHMoZS5uYW1lJiZcInN0cmluZ1wiPT10eXBlb2YgZS5uYW1lLFwiSW52YWxpZCBydWxlIG5hbWVcIik7Zm9yKGNvbnN0IHQgaW4gZSlzKFwiX1wiIT09dFswXSxcIkNhbm5vdCBzZXQgcHJpdmF0ZSBydWxlIHByb3BlcnRpZXNcIik7Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LGUpO3QuX3Jlc29sdmU9W10sdC5tZXRob2Q9dC5tZXRob2R8fHQubmFtZTtjb25zdCByPXRoaXMuX2RlZmluaXRpb24ucnVsZXNbdC5tZXRob2RdLG49dC5hcmdzO3MocixcIlVua25vd24gcnVsZVwiLHQubWV0aG9kKTtjb25zdCBvPXRoaXMuY2xvbmUoKTtpZihuKXtzKDE9PT1PYmplY3Qua2V5cyhuKS5sZW5ndGh8fE9iamVjdC5rZXlzKG4pLmxlbmd0aD09PXRoaXMuX2RlZmluaXRpb24ucnVsZXNbdC5uYW1lXS5hcmdzLmxlbmd0aCxcIkludmFsaWQgcnVsZSBkZWZpbml0aW9uIGZvclwiLHRoaXMudHlwZSx0Lm5hbWUpO2Zvcihjb25zdCBlIGluIG4pe2xldCBhPW5bZV07aWYodm9pZCAwIT09YSl7aWYoci5hcmdzQnlOYW1lKXtjb25zdCBpPXIuYXJnc0J5TmFtZS5nZXQoZSk7aWYoaS5yZWYmJmwuaXNSZXNvbHZhYmxlKGEpKXQuX3Jlc29sdmUucHVzaChlKSxvLiRfbXV0YXRlUmVnaXN0ZXIoYSk7ZWxzZSBpZihpLm5vcm1hbGl6ZSYmKGE9aS5ub3JtYWxpemUoYSksbltlXT1hKSxpLmFzc2VydCl7Y29uc3QgdD1sLnZhbGlkYXRlQXJnKGEsZSxpKTtzKCF0LHQsXCJvciByZWZlcmVuY2VcIil9fW5bZV09YX1lbHNlIGRlbGV0ZSBuW2VdfX1yZXR1cm4gci5tdWx0aXx8KG8uX3J1bGVSZW1vdmUodC5uYW1lLHtjbG9uZTohMX0pLG8uX3NpbmdsZVJ1bGVzLnNldCh0Lm5hbWUsdCkpLCExPT09by4kX3RlbXAucnVsZXNldCYmKG8uJF90ZW1wLnJ1bGVzZXQ9bnVsbCksci5wcmlvcml0eT9vLl9ydWxlcy51bnNoaWZ0KHQpOm8uX3J1bGVzLnB1c2godCksb30kX2NvbXBpbGUoZSx0KXtyZXR1cm4gYy5zY2hlbWEodGhpcy4kX3Jvb3QsZSx0KX0kX2NyZWF0ZUVycm9yKGUsdCxyLHMsbixvPXt9KXtjb25zdCBhPSExIT09by5mbGFncz90aGlzLl9mbGFnczp7fSxpPW8ubWVzc2FnZXM/aC5tZXJnZSh0aGlzLl9kZWZpbml0aW9uLm1lc3NhZ2VzLG8ubWVzc2FnZXMpOnRoaXMuX2RlZmluaXRpb24ubWVzc2FnZXM7cmV0dXJuIG5ldyB1LlJlcG9ydChlLHQscixhLGkscyxuKX0kX2dldEZsYWcoZSl7cmV0dXJuIHRoaXMuX2ZsYWdzW2VdfSRfZ2V0UnVsZShlKXtyZXR1cm4gdGhpcy5fc2luZ2xlUnVsZXMuZ2V0KGUpfSRfbWFwTGFiZWxzKGUpe3JldHVybiBlPUFycmF5LmlzQXJyYXkoZSk/ZTplLnNwbGl0KFwiLlwiKSx0aGlzLl9pZHMubGFiZWxzKGUpfSRfbWF0Y2goZSx0LHIscyl7KHI9T2JqZWN0LmFzc2lnbih7fSxyKSkuYWJvcnRFYXJseT0hMCxyLl9leHRlcm5hbHM9ITEsdC5zbmFwc2hvdCgpO2NvbnN0IG49IXkudmFsaWRhdGUoZSx0aGlzLHQscixzKS5lcnJvcnM7cmV0dXJuIHQucmVzdG9yZSgpLG59JF9tb2RpZnkoZSl7cmV0dXJuIGwuYXNzZXJ0T3B0aW9ucyhlLFtcImVhY2hcIixcIm9uY2VcIixcInJlZlwiLFwic2NoZW1hXCJdKSxkLnNjaGVtYSh0aGlzLGUpfHx0aGlzfSRfbXV0YXRlUmVidWlsZCgpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IGFkZCB0aGlzIHJ1bGUgaW5zaWRlIGEgcnVsZXNldFwiKSx0aGlzLl9yZWZzLnJlc2V0KCksdGhpcy5faWRzLnJlc2V0KCk7cmV0dXJuIHRoaXMuJF9tb2RpZnkoe2VhY2g6KGUse3NvdXJjZTp0LG5hbWU6cixwYXRoOnMsa2V5Om59KT0+e2NvbnN0IG89dGhpcy5fZGVmaW5pdGlvblt0XVtyXSYmdGhpcy5fZGVmaW5pdGlvblt0XVtyXS5yZWdpc3RlcjshMSE9PW8mJnRoaXMuJF9tdXRhdGVSZWdpc3RlcihlLHtmYW1pbHk6byxrZXk6bn0pfX0pLHRoaXMuX2RlZmluaXRpb24ucmVidWlsZCYmdGhpcy5fZGVmaW5pdGlvbi5yZWJ1aWxkKHRoaXMpLHRoaXMuJF90ZW1wLnJ1bGVzZXQ9ITEsdGhpc30kX211dGF0ZVJlZ2lzdGVyKGUse2ZhbWlseTp0LGtleTpyfT17fSl7dGhpcy5fcmVmcy5yZWdpc3RlcihlLHQpLHRoaXMuX2lkcy5yZWdpc3RlcihlLHtrZXk6cn0pfSRfcHJvcGVydHkoZSl7cmV0dXJuIHRoaXMuX2RlZmluaXRpb24ucHJvcGVydGllc1tlXX0kX3JlYWNoKGUpe3JldHVybiB0aGlzLl9pZHMucmVhY2goZSl9JF9yb290UmVmZXJlbmNlcygpe3JldHVybiB0aGlzLl9yZWZzLnJvb3RzKCl9JF9zZXRGbGFnKGUsdCxyPXt9KXtzKFwiX1wiPT09ZVswXXx8IXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHNldCBmbGFnIGluc2lkZSBhIHJ1bGVzZXRcIik7Y29uc3Qgbj10aGlzLl9kZWZpbml0aW9uLmZsYWdzW2VdfHx7fTtpZihvKHQsbi5kZWZhdWx0KSYmKHQ9dm9pZCAwKSxvKHQsdGhpcy5fZmxhZ3NbZV0pKXJldHVybiB0aGlzO2NvbnN0IGE9ITEhPT1yLmNsb25lP3RoaXMuY2xvbmUoKTp0aGlzO3JldHVybiB2b2lkIDAhPT10PyhhLl9mbGFnc1tlXT10LGEuJF9tdXRhdGVSZWdpc3Rlcih0KSk6ZGVsZXRlIGEuX2ZsYWdzW2VdLFwiX1wiIT09ZVswXSYmKGEuJF90ZW1wLnJ1bGVzZXQ9ITEpLGF9JF92YWxpZGF0ZShlLHQscil7cmV0dXJuIHkudmFsaWRhdGUoZSx0aGlzLHQscil9X2Fzc2lnbihlKXtlLnR5cGU9dGhpcy50eXBlLGUuJF9yb290PXRoaXMuJF9yb290LGUuJF90ZW1wPU9iamVjdC5hc3NpZ24oe30sdGhpcy4kX3RlbXApLGUuJF90ZW1wLndoZW5zPXt9LGUuX2lkcz10aGlzLl9pZHMuY2xvbmUoKSxlLl9wcmVmZXJlbmNlcz10aGlzLl9wcmVmZXJlbmNlcyxlLl92YWxpZHM9dGhpcy5fdmFsaWRzJiZ0aGlzLl92YWxpZHMuY2xvbmUoKSxlLl9pbnZhbGlkcz10aGlzLl9pbnZhbGlkcyYmdGhpcy5faW52YWxpZHMuY2xvbmUoKSxlLl9ydWxlcz10aGlzLl9ydWxlcy5zbGljZSgpLGUuX3NpbmdsZVJ1bGVzPW4odGhpcy5fc2luZ2xlUnVsZXMse3NoYWxsb3c6ITB9KSxlLl9yZWZzPXRoaXMuX3JlZnMuY2xvbmUoKSxlLl9mbGFncz1PYmplY3QuYXNzaWduKHt9LHRoaXMuX2ZsYWdzKSxlLl9jYWNoZT1udWxsLGUuJF90ZXJtcz17fTtmb3IoY29uc3QgdCBpbiB0aGlzLiRfdGVybXMpZS4kX3Rlcm1zW3RdPXRoaXMuJF90ZXJtc1t0XT90aGlzLiRfdGVybXNbdF0uc2xpY2UoKTpudWxsO2UuJF9zdXBlcj17fTtmb3IoY29uc3QgdCBpbiB0aGlzLiRfc3VwZXIpZS4kX3N1cGVyW3RdPXRoaXMuX3N1cGVyW3RdLmJpbmQoZSk7cmV0dXJuIGV9X2RlZmF1bHQoZSx0LHI9e30pe3JldHVybiBsLmFzc2VydE9wdGlvbnMocixcImxpdGVyYWxcIikscyh2b2lkIDAhPT10LFwiTWlzc2luZ1wiLGUsXCJ2YWx1ZVwiKSxzKFwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fCFyLmxpdGVyYWwsXCJPbmx5IGZ1bmN0aW9uIHZhbHVlIHN1cHBvcnRzIGxpdGVyYWwgb3B0aW9uXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnIubGl0ZXJhbCYmKHQ9e1tsLnN5bWJvbHMubGl0ZXJhbF06ITAsbGl0ZXJhbDp0fSksdGhpcy4kX3NldEZsYWcoZSx0KX1fZ2VuZXJhdGUoZSx0LHIpe2lmKCF0aGlzLiRfdGVybXMud2hlbnMpcmV0dXJue3NjaGVtYTp0aGlzfTtjb25zdCBzPVtdLG49W107Zm9yKGxldCBvPTA7bzx0aGlzLiRfdGVybXMud2hlbnMubGVuZ3RoOysrbyl7Y29uc3QgYT10aGlzLiRfdGVybXMud2hlbnNbb107aWYoYS5jb25jYXQpe3MucHVzaChhLmNvbmNhdCksbi5wdXNoKFwiXCIuY29uY2F0KG8sXCIuY29uY2F0XCIpKTtjb250aW51ZX1jb25zdCBpPWEucmVmP2EucmVmLnJlc29sdmUoZSx0LHIpOmUsbD1hLmlzP1thXTphLnN3aXRjaCxjPW4ubGVuZ3RoO2ZvcihsZXQgYz0wO2M8bC5sZW5ndGg7KytjKXtjb25zdHtpczp1LHRoZW46ZixvdGhlcndpc2U6bX09bFtjXSxoPVwiXCIuY29uY2F0KG8pLmNvbmNhdChhLnN3aXRjaD9cIi5cIitjOlwiXCIpO2lmKHUuJF9tYXRjaChpLHQubmVzdCh1LFwiXCIuY29uY2F0KGgsXCIuaXNcIikpLHIpKXtpZihmKXtjb25zdCBvPXQubG9jYWxpemUoWy4uLnQucGF0aCxcIlwiLmNvbmNhdChoLFwiLnRoZW5cIildLHQuYW5jZXN0b3JzLHQuc2NoZW1hcykse3NjaGVtYTphLGlkOml9PWYuX2dlbmVyYXRlKGUsbyxyKTtzLnB1c2goYSksbi5wdXNoKFwiXCIuY29uY2F0KGgsXCIudGhlblwiKS5jb25jYXQoaT9cIihcIi5jb25jYXQoaSxcIilcIik6XCJcIikpO2JyZWFrfX1lbHNlIGlmKG0pe2NvbnN0IG89dC5sb2NhbGl6ZShbLi4udC5wYXRoLFwiXCIuY29uY2F0KGgsXCIub3RoZXJ3aXNlXCIpXSx0LmFuY2VzdG9ycyx0LnNjaGVtYXMpLHtzY2hlbWE6YSxpZDppfT1tLl9nZW5lcmF0ZShlLG8scik7cy5wdXNoKGEpLG4ucHVzaChcIlwiLmNvbmNhdChoLFwiLm90aGVyd2lzZVwiKS5jb25jYXQoaT9cIihcIi5jb25jYXQoaSxcIilcIik6XCJcIikpO2JyZWFrfX1pZihhLmJyZWFrJiZuLmxlbmd0aD5jKWJyZWFrfWNvbnN0IG89bi5qb2luKFwiLCBcIik7aWYodC5tYWluc3RheS50cmFjZXIuZGVidWcodCxcInJ1bGVcIixcIndoZW5cIixvKSwhbylyZXR1cm57c2NoZW1hOnRoaXN9O2lmKCF0Lm1haW5zdGF5LnRyYWNlci5hY3RpdmUmJnRoaXMuJF90ZW1wLndoZW5zW29dKXJldHVybntzY2hlbWE6dGhpcy4kX3RlbXAud2hlbnNbb10saWQ6b307bGV0IGE9dGhpczt0aGlzLl9kZWZpbml0aW9uLmdlbmVyYXRlJiYoYT10aGlzLl9kZWZpbml0aW9uLmdlbmVyYXRlKHRoaXMsZSx0LHIpKTtmb3IoY29uc3QgZSBvZiBzKWE9YS5jb25jYXQoZSk7cmV0dXJuIHRoaXMuJF9yb290Ll90cmFjZXImJnRoaXMuJF9yb290Ll90cmFjZXIuX2NvbWJpbmUoYSxbdGhpcywuLi5zXSksdGhpcy4kX3RlbXAud2hlbnNbb109YSx7c2NoZW1hOmEsaWQ6b319X2lubmVyKGUsdCxyPXt9KXtzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBzZXQgXCIuY29uY2F0KGUsXCIgaW5zaWRlIGEgcnVsZXNldFwiKSk7Y29uc3Qgbj10aGlzLmNsb25lKCk7cmV0dXJuIG4uJF90ZXJtc1tlXSYmIXIub3ZlcnJpZGV8fChuLiRfdGVybXNbZV09W10pLHIuc2luZ2xlP24uJF90ZXJtc1tlXS5wdXNoKHQpOm4uJF90ZXJtc1tlXS5wdXNoKC4uLnQpLG4uJF90ZW1wLnJ1bGVzZXQ9ITEsbn1faW5SdWxlc2V0KCl7cmV0dXJuIG51bGwhPT10aGlzLiRfdGVtcC5ydWxlc2V0JiYhMSE9PXRoaXMuJF90ZW1wLnJ1bGVzZXR9X3J1bGVSZW1vdmUoZSx0PXt9KXtpZighdGhpcy5fc2luZ2xlUnVsZXMuaGFzKGUpKXJldHVybiB0aGlzO2NvbnN0IHI9ITEhPT10LmNsb25lP3RoaXMuY2xvbmUoKTp0aGlzO3IuX3NpbmdsZVJ1bGVzLmRlbGV0ZShlKTtjb25zdCBzPVtdO2ZvcihsZXQgdD0wO3Q8ci5fcnVsZXMubGVuZ3RoOysrdCl7Y29uc3Qgbj1yLl9ydWxlc1t0XTtuLm5hbWUhPT1lfHxuLmtlZXA/cy5wdXNoKG4pOnIuX2luUnVsZXNldCgpJiZ0PHIuJF90ZW1wLnJ1bGVzZXQmJi0tci4kX3RlbXAucnVsZXNldH1yZXR1cm4gci5fcnVsZXM9cyxyfV92YWx1ZXMoZSx0KXtsLnZlcmlmeUZsYXQoZSx0LnNsaWNlKDEsLTEpKTtjb25zdCByPXRoaXMuY2xvbmUoKSxuPWVbMF09PT1sLnN5bWJvbHMub3ZlcnJpZGU7aWYobiYmKGU9ZS5zbGljZSgxKSksIXJbdF0mJmUubGVuZ3RoP3JbdF09bmV3IGI6biYmKHJbdF09ZS5sZW5ndGg/bmV3IGI6bnVsbCxyLiRfbXV0YXRlUmVidWlsZCgpKSwhclt0XSlyZXR1cm4gcjtuJiZyW3RdLm92ZXJyaWRlKCk7Zm9yKGNvbnN0IG4gb2YgZSl7cyh2b2lkIDAhPT1uLFwiQ2Fubm90IGNhbGwgYWxsb3cvdmFsaWQvaW52YWxpZCB3aXRoIHVuZGVmaW5lZFwiKSxzKG4hPT1sLnN5bWJvbHMub3ZlcnJpZGUsXCJPdmVycmlkZSBtdXN0IGJlIHRoZSBmaXJzdCB2YWx1ZVwiKTtjb25zdCBlPVwiX2ludmFsaWRzXCI9PT10P1wiX3ZhbGlkc1wiOlwiX2ludmFsaWRzXCI7cltlXSYmKHJbZV0ucmVtb3ZlKG4pLHJbZV0ubGVuZ3RofHwocyhcIl92YWxpZHNcIj09PXR8fCFyLl9mbGFncy5vbmx5LFwiU2V0dGluZyBpbnZhbGlkIHZhbHVlXCIsbixcImxlYXZlcyBzY2hlbWEgcmVqZWN0aW5nIGFsbCB2YWx1ZXMgZHVlIHRvIHByZXZpb3VzIHZhbGlkIHJ1bGVcIikscltlXT1udWxsKSksclt0XS5hZGQobixyLl9yZWZzKX1yZXR1cm4gcn19fTt2LkJhc2UucHJvdG90eXBlW2wuc3ltYm9scy5hbnldPXt2ZXJzaW9uOmwudmVyc2lvbixjb21waWxlOmMuY29tcGlsZSxyb290OlwiJF9yb290XCJ9LHYuQmFzZS5wcm90b3R5cGUuaXNJbW11dGFibGU9ITAsdi5CYXNlLnByb3RvdHlwZS5kZW55PXYuQmFzZS5wcm90b3R5cGUuaW52YWxpZCx2LkJhc2UucHJvdG90eXBlLmRpc2FsbG93PXYuQmFzZS5wcm90b3R5cGUuaW52YWxpZCx2LkJhc2UucHJvdG90eXBlLmVxdWFsPXYuQmFzZS5wcm90b3R5cGUudmFsaWQsdi5CYXNlLnByb3RvdHlwZS5leGlzdD12LkJhc2UucHJvdG90eXBlLnJlcXVpcmVkLHYuQmFzZS5wcm90b3R5cGUubm90PXYuQmFzZS5wcm90b3R5cGUuaW52YWxpZCx2LkJhc2UucHJvdG90eXBlLm9wdGlvbnM9di5CYXNlLnByb3RvdHlwZS5wcmVmcyx2LkJhc2UucHJvdG90eXBlLnByZWZlcmVuY2VzPXYuQmFzZS5wcm90b3R5cGUucHJlZnMsZS5leHBvcnRzPW5ldyB2LkJhc2V9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYocz1zLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixzKX1yZXR1cm4gcn1mdW5jdGlvbiBuKGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1jb25zdCBvPXIoMCksYT1yKDEpLGk9cig1KSxsPXt9O3QuSWRzPWwuSWRzPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5fYnlJZD1uZXcgTWFwLHRoaXMuX2J5S2V5PW5ldyBNYXAsdGhpcy5fc2NoZW1hQ2hhaW49ITF9Y2xvbmUoKXtjb25zdCBlPW5ldyBsLklkcztyZXR1cm4gZS5fYnlJZD1uZXcgTWFwKHRoaXMuX2J5SWQpLGUuX2J5S2V5PW5ldyBNYXAodGhpcy5fYnlLZXkpLGUuX3NjaGVtYUNoYWluPXRoaXMuX3NjaGVtYUNoYWluLGV9Y29uY2F0KGUpe2UuX3NjaGVtYUNoYWluJiYodGhpcy5fc2NoZW1hQ2hhaW49ITApO2Zvcihjb25zdFt0LHJdb2YgZS5fYnlJZC5lbnRyaWVzKCkpbyghdGhpcy5fYnlLZXkuaGFzKHQpLFwiU2NoZW1hIGlkIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIGtleTpcIix0KSx0aGlzLl9ieUlkLnNldCh0LHIpO2Zvcihjb25zdFt0LHJdb2YgZS5fYnlLZXkuZW50cmllcygpKW8oIXRoaXMuX2J5SWQuaGFzKHQpLFwiU2NoZW1hIGtleSBjb25mbGljdHMgd2l0aCBleGlzdGluZyBpZDpcIix0KSx0aGlzLl9ieUtleS5zZXQodCxyKX1mb3JrKGUsdCxyKXtjb25zdCBzPXRoaXMuX2NvbGxlY3QoZSk7cy5wdXNoKHtzY2hlbWE6cn0pO2NvbnN0IG49cy5zaGlmdCgpO2xldCBpPXtpZDpuLmlkLHNjaGVtYTp0KG4uc2NoZW1hKX07byhhLmlzU2NoZW1hKGkuc2NoZW1hKSxcImFkanVzdGVyIGZ1bmN0aW9uIGZhaWxlZCB0byByZXR1cm4gYSBqb2kgc2NoZW1hIHR5cGVcIik7Zm9yKGNvbnN0IGUgb2YgcylpPXtpZDplLmlkLHNjaGVtYTpsLmZvcmsoZS5zY2hlbWEsaS5pZCxpLnNjaGVtYSl9O3JldHVybiBpLnNjaGVtYX1sYWJlbHMoZSx0PVtdKXtjb25zdCByPWVbMF0scz10aGlzLl9nZXQocik7aWYoIXMpcmV0dXJuWy4uLnQsLi4uZV0uam9pbihcIi5cIik7Y29uc3Qgbj1lLnNsaWNlKDEpO3JldHVybiB0PVsuLi50LHMuc2NoZW1hLl9mbGFncy5sYWJlbHx8cl0sbi5sZW5ndGg/cy5zY2hlbWEuX2lkcy5sYWJlbHMobix0KTp0LmpvaW4oXCIuXCIpfXJlYWNoKGUsdD1bXSl7Y29uc3Qgcj1lWzBdLHM9dGhpcy5fZ2V0KHIpO28ocyxcIlNjaGVtYSBkb2VzIG5vdCBjb250YWluIHBhdGhcIixbLi4udCwuLi5lXS5qb2luKFwiLlwiKSk7Y29uc3Qgbj1lLnNsaWNlKDEpO3JldHVybiBuLmxlbmd0aD9zLnNjaGVtYS5faWRzLnJlYWNoKG4sWy4uLnQscl0pOnMuc2NoZW1hfXJlZ2lzdGVyKGUse2tleTp0fT17fSl7aWYoIWV8fCFhLmlzU2NoZW1hKGUpKXJldHVybjsoZS4kX3Byb3BlcnR5KFwic2NoZW1hQ2hhaW5cIil8fGUuX2lkcy5fc2NoZW1hQ2hhaW4pJiYodGhpcy5fc2NoZW1hQ2hhaW49ITApO2NvbnN0IHI9ZS5fZmxhZ3MuaWQ7aWYocil7Y29uc3QgdD10aGlzLl9ieUlkLmdldChyKTtvKCF0fHx0LnNjaGVtYT09PWUsXCJDYW5ub3QgYWRkIGRpZmZlcmVudCBzY2hlbWFzIHdpdGggdGhlIHNhbWUgaWQ6XCIsciksbyghdGhpcy5fYnlLZXkuaGFzKHIpLFwiU2NoZW1hIGlkIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIGtleTpcIixyKSx0aGlzLl9ieUlkLnNldChyLHtzY2hlbWE6ZSxpZDpyfSl9dCYmKG8oIXRoaXMuX2J5S2V5Lmhhcyh0KSxcIlNjaGVtYSBhbHJlYWR5IGNvbnRhaW5zIGtleTpcIix0KSxvKCF0aGlzLl9ieUlkLmhhcyh0KSxcIlNjaGVtYSBrZXkgY29uZmxpY3RzIHdpdGggZXhpc3RpbmcgaWQ6XCIsdCksdGhpcy5fYnlLZXkuc2V0KHQse3NjaGVtYTplLGlkOnR9KSl9cmVzZXQoKXt0aGlzLl9ieUlkPW5ldyBNYXAsdGhpcy5fYnlLZXk9bmV3IE1hcCx0aGlzLl9zY2hlbWFDaGFpbj0hMX1fY29sbGVjdChlLHQ9W10scj1bXSl7Y29uc3Qgcz1lWzBdLG49dGhpcy5fZ2V0KHMpO28obixcIlNjaGVtYSBkb2VzIG5vdCBjb250YWluIHBhdGhcIixbLi4udCwuLi5lXS5qb2luKFwiLlwiKSkscj1bbiwuLi5yXTtjb25zdCBhPWUuc2xpY2UoMSk7cmV0dXJuIGEubGVuZ3RoP24uc2NoZW1hLl9pZHMuX2NvbGxlY3QoYSxbLi4udCxzXSxyKTpyfV9nZXQoZSl7cmV0dXJuIHRoaXMuX2J5SWQuZ2V0KGUpfHx0aGlzLl9ieUtleS5nZXQoZSl9fSxsLmZvcms9ZnVuY3Rpb24oZSxyLHMpe2NvbnN0IG49dC5zY2hlbWEoZSx7ZWFjaDooZSx7a2V5OnR9KT0+e2lmKHI9PT0oZS5fZmxhZ3MuaWR8fHQpKXJldHVybiBzfSxyZWY6ITF9KTtyZXR1cm4gbj9uLiRfbXV0YXRlUmVidWlsZCgpOmV9LHQuc2NoZW1hPWZ1bmN0aW9uKGUsdCl7bGV0IHI7Zm9yKGNvbnN0IHMgaW4gZS5fZmxhZ3Mpe2lmKFwiX1wiPT09c1swXSljb250aW51ZTtjb25zdCBuPWwuc2NhbihlLl9mbGFnc1tzXSx7c291cmNlOlwiZmxhZ3NcIixuYW1lOnN9LHQpO3ZvaWQgMCE9PW4mJihyPXJ8fGUuY2xvbmUoKSxyLl9mbGFnc1tzXT1uKX1mb3IobGV0IHM9MDtzPGUuX3J1bGVzLmxlbmd0aDsrK3Mpe2NvbnN0IG49ZS5fcnVsZXNbc10sbz1sLnNjYW4obi5hcmdzLHtzb3VyY2U6XCJydWxlc1wiLG5hbWU6bi5uYW1lfSx0KTtpZih2b2lkIDAhPT1vKXtyPXJ8fGUuY2xvbmUoKTtjb25zdCB0PU9iamVjdC5hc3NpZ24oe30sbik7dC5hcmdzPW8sci5fcnVsZXNbc109dCxyLl9zaW5nbGVSdWxlcy5nZXQobi5uYW1lKT09PW4mJnIuX3NpbmdsZVJ1bGVzLnNldChuLm5hbWUsdCl9fWZvcihjb25zdCBzIGluIGUuJF90ZXJtcyl7aWYoXCJfXCI9PT1zWzBdKWNvbnRpbnVlO2NvbnN0IG49bC5zY2FuKGUuJF90ZXJtc1tzXSx7c291cmNlOlwidGVybXNcIixuYW1lOnN9LHQpO3ZvaWQgMCE9PW4mJihyPXJ8fGUuY2xvbmUoKSxyLiRfdGVybXNbc109bil9cmV0dXJuIHJ9LGwuc2Nhbj1mdW5jdGlvbihlLHQscixvLGMpe2NvbnN0IHU9b3x8W107aWYobnVsbD09PWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybjtsZXQgZjtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IobGV0IHM9MDtzPGUubGVuZ3RoOysrcyl7Y29uc3Qgbj1cInRlcm1zXCI9PT10LnNvdXJjZSYmXCJrZXlzXCI9PT10Lm5hbWUmJmVbc10ua2V5LG89bC5zY2FuKGVbc10sdCxyLFtzLC4uLnVdLG4pO3ZvaWQgMCE9PW8mJihmPWZ8fGUuc2xpY2UoKSxmW3NdPW8pfXJldHVybiBmfWlmKCExIT09ci5zY2hlbWEmJmEuaXNTY2hlbWEoZSl8fCExIT09ci5yZWYmJmkuaXNSZWYoZSkpe2NvbnN0IG89ci5lYWNoKGUsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/cyhPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe24oZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnMoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9KHt9LHQse3BhdGg6dSxrZXk6Y30pKTtpZihvPT09ZSlyZXR1cm47cmV0dXJuIG99Zm9yKGNvbnN0IHMgaW4gZSl7aWYoXCJfXCI9PT1zWzBdKWNvbnRpbnVlO2NvbnN0IG49bC5zY2FuKGVbc10sdCxyLFtzLC4uLnVdLGMpO3ZvaWQgMCE9PW4mJihmPWZ8fE9iamVjdC5hc3NpZ24oe30sZSksZltzXT1uKX1yZXR1cm4gZn19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigzNyksYT1yKDYpLGk9cigxKSxsPXIoNCksYz1yKDM4KSx1PXtyZXN1bHQ6U3ltYm9sKFwicmVzdWx0XCIpfTt0LmVudHJ5PWZ1bmN0aW9uKGUsdCxyKXtsZXQgbj1pLmRlZmF1bHRzO3ImJihzKHZvaWQgMD09PXIud2FybmluZ3MsXCJDYW5ub3Qgb3ZlcnJpZGUgd2FybmluZ3MgcHJlZmVyZW5jZSBpbiBzeW5jaHJvbm91cyB2YWxpZGF0aW9uXCIpLG49aS5wcmVmZXJlbmNlcyhpLmRlZmF1bHRzLHIpKTtjb25zdCBvPXUuZW50cnkoZSx0LG4pO3MoIW8ubWFpbnN0YXkuZXh0ZXJuYWxzLmxlbmd0aCxcIlNjaGVtYSB3aXRoIGV4dGVybmFsIHJ1bGVzIG11c3QgdXNlIHZhbGlkYXRlQXN5bmMoKVwiKTtjb25zdCBhPXt2YWx1ZTpvLnZhbHVlfTtyZXR1cm4gby5lcnJvciYmKGEuZXJyb3I9by5lcnJvciksby5tYWluc3RheS53YXJuaW5ncy5sZW5ndGgmJihhLndhcm5pbmc9bC5kZXRhaWxzKG8ubWFpbnN0YXkud2FybmluZ3MpKSxvLm1haW5zdGF5LmRlYnVnJiYoYS5kZWJ1Zz1vLm1haW5zdGF5LmRlYnVnKSxhfSx0LmVudHJ5QXN5bmM9YXN5bmMgZnVuY3Rpb24oZSx0LHIpe2xldCBzPWkuZGVmYXVsdHM7ciYmKHM9aS5wcmVmZXJlbmNlcyhpLmRlZmF1bHRzLHIpKTtjb25zdCBuPXUuZW50cnkoZSx0LHMpLG89bi5tYWluc3RheTtpZihuLmVycm9yKXRocm93IG8uZGVidWcmJihuLmVycm9yLmRlYnVnPW8uZGVidWcpLG4uZXJyb3I7aWYoby5leHRlcm5hbHMubGVuZ3RoKXtsZXQgZT1uLnZhbHVlO2Zvcihjb25zdHttZXRob2Q6dCxwYXRoOnIsbGFiZWw6c31vZiBvLmV4dGVybmFscyl7bGV0IG4sbyxpPWU7ci5sZW5ndGgmJihuPXJbci5sZW5ndGgtMV0sbz1hKGUsci5zbGljZSgwLC0xKSksaT1vW25dKTt0cnl7Y29uc3Qgcj1hd2FpdCB0KGkpO2lmKHZvaWQgMD09PXJ8fHI9PT1pKWNvbnRpbnVlO28/b1tuXT1yOmU9cn1jYXRjaChlKXt0aHJvdyBlLm1lc3NhZ2UrPVwiIChcIi5jb25jYXQocyxcIilcIiksZX19bi52YWx1ZT1lfWlmKCFzLndhcm5pbmdzJiYhcy5kZWJ1ZylyZXR1cm4gbi52YWx1ZTtjb25zdCBjPXt2YWx1ZTpuLnZhbHVlfTtyZXR1cm4gby53YXJuaW5ncy5sZW5ndGgmJihjLndhcm5pbmc9bC5kZXRhaWxzKG8ud2FybmluZ3MpKSxvLmRlYnVnJiYoYy5kZWJ1Zz1vLmRlYnVnKSxjfSx1LmVudHJ5PWZ1bmN0aW9uKGUscixzKXtjb25zdHt0cmFjZXI6bixjbGVhbnVwOm99PXUudHJhY2VyKHIscyksYT17ZXh0ZXJuYWxzOltdLHdhcm5pbmdzOltdLHRyYWNlcjpuLGRlYnVnOnMuZGVidWc/W106bnVsbCxsaW5rczpyLl9pZHMuX3NjaGVtYUNoYWluP25ldyBNYXA6bnVsbH0saT1yLl9pZHMuX3NjaGVtYUNoYWluP1t7c2NoZW1hOnJ9XTpudWxsLGY9bmV3IGMoW10sW10se21haW5zdGF5OmEsc2NoZW1hczppfSksbT10LnZhbGlkYXRlKGUscixmLHMpO28mJnIuJF9yb290LnVudHJhY2UoKTtjb25zdCBoPWwucHJvY2VzcyhtLmVycm9ycyxlLHMpO3JldHVybnt2YWx1ZTptLnZhbHVlLGVycm9yOmgsbWFpbnN0YXk6YX19LHUudHJhY2VyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuJF9yb290Ll90cmFjZXI/e3RyYWNlcjplLiRfcm9vdC5fdHJhY2VyLl9yZWdpc3RlcihlKX06dC5kZWJ1Zz8ocyhlLiRfcm9vdC50cmFjZSxcIkRlYnVnIG1vZGUgbm90IHN1cHBvcnRlZFwiKSx7dHJhY2VyOmUuJF9yb290LnRyYWNlKCkuX3JlZ2lzdGVyKGUpLGNsZWFudXA6ITB9KTp7dHJhY2VyOnUuaWdub3JlfX0sdC52YWxpZGF0ZT1mdW5jdGlvbihlLHQscixzLG49e30pe2lmKHQuJF90ZXJtcy53aGVucyYmKHQ9dC5fZ2VuZXJhdGUoZSxyLHMpLnNjaGVtYSksdC5fcHJlZmVyZW5jZXMmJihzPXUucHJlZnModCxzKSksdC5fY2FjaGUmJnMuY2FjaGUpe2NvbnN0IHM9dC5fY2FjaGUuZ2V0KGUpO2lmKHIubWFpbnN0YXkudHJhY2VyLmRlYnVnKHIsXCJ2YWxpZGF0ZVwiLFwiY2FjaGVkXCIsISFzKSxzKXJldHVybiBzfWNvbnN0IG89KG4sbyxhKT0+dC4kX2NyZWF0ZUVycm9yKG4sZSxvLGF8fHIscyksYT17b3JpZ2luYWw6ZSxwcmVmczpzLHNjaGVtYTp0LHN0YXRlOnIsZXJyb3I6byx3YXJuOihlLHQscyk9PnIubWFpbnN0YXkud2FybmluZ3MucHVzaChvKGUsdCxzKSksbWVzc2FnZToobixvKT0+dC4kX2NyZWF0ZUVycm9yKFwiY3VzdG9tXCIsZSxvLHIscyx7bWVzc2FnZXM6bn0pfTtyLm1haW5zdGF5LnRyYWNlci5lbnRyeSh0LHIpO2NvbnN0IGw9dC5fZGVmaW5pdGlvbjtpZihsLnByZXBhcmUmJnZvaWQgMCE9PWUmJnMuY29udmVydCl7Y29uc3QgdD1sLnByZXBhcmUoZSxhKTtpZih0KXtpZihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwicHJlcGFyZVwiLGUsdC52YWx1ZSksdC5lcnJvcnMpcmV0dXJuIHUuZmluYWxpemUodC52YWx1ZSxbXS5jb25jYXQodC5lcnJvcnMpLGEpO2U9dC52YWx1ZX19aWYobC5jb2VyY2UmJnZvaWQgMCE9PWUmJnMuY29udmVydCYmKCFsLmNvZXJjZS5mcm9tfHxsLmNvZXJjZS5mcm9tLmluY2x1ZGVzKHR5cGVvZiBlKSkpe2NvbnN0IHQ9bC5jb2VyY2UubWV0aG9kKGUsYSk7aWYodCl7aWYoci5tYWluc3RheS50cmFjZXIudmFsdWUocixcImNvZXJjZWRcIixlLHQudmFsdWUpLHQuZXJyb3JzKXJldHVybiB1LmZpbmFsaXplKHQudmFsdWUsW10uY29uY2F0KHQuZXJyb3JzKSxhKTtlPXQudmFsdWV9fWNvbnN0IGM9dC5fZmxhZ3MuZW1wdHk7YyYmYy4kX21hdGNoKHUudHJpbShlLHQpLHIubmVzdChjKSxpLmRlZmF1bHRzKSYmKHIubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJlbXB0eVwiLGUsdm9pZCAwKSxlPXZvaWQgMCk7Y29uc3QgZj1uLnByZXNlbmNlfHx0Ll9mbGFncy5wcmVzZW5jZXx8KHQuX2ZsYWdzLl9lbmRlZFN3aXRjaD9cImlnbm9yZVwiOnMucHJlc2VuY2UpO2lmKHZvaWQgMD09PWUpe2lmKFwiZm9yYmlkZGVuXCI9PT1mKXJldHVybiB1LmZpbmFsaXplKGUsbnVsbCxhKTtpZihcInJlcXVpcmVkXCI9PT1mKXJldHVybiB1LmZpbmFsaXplKGUsW3QuJF9jcmVhdGVFcnJvcihcImFueS5yZXF1aXJlZFwiLGUsbnVsbCxyLHMpXSxhKTtpZihcIm9wdGlvbmFsXCI9PT1mKXtpZih0Ll9mbGFncy5kZWZhdWx0IT09aS5zeW1ib2xzLmRlZXBEZWZhdWx0KXJldHVybiB1LmZpbmFsaXplKGUsbnVsbCxhKTtyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwiZGVmYXVsdFwiLGUse30pLGU9e319fWVsc2UgaWYoXCJmb3JiaWRkZW5cIj09PWYpcmV0dXJuIHUuZmluYWxpemUoZSxbdC4kX2NyZWF0ZUVycm9yKFwiYW55LnVua25vd25cIixlLG51bGwscixzKV0sYSk7Y29uc3QgbT1bXTtpZih0Ll92YWxpZHMpe2NvbnN0IG49dC5fdmFsaWRzLmdldChlLHIscyx0Ll9mbGFncy5pbnNlbnNpdGl2ZSk7aWYobilyZXR1cm4gcy5jb252ZXJ0JiYoci5tYWluc3RheS50cmFjZXIudmFsdWUocixcInZhbGlkc1wiLGUsbi52YWx1ZSksZT1uLnZhbHVlKSxyLm1haW5zdGF5LnRyYWNlci5maWx0ZXIodCxyLFwidmFsaWRcIixuKSx1LmZpbmFsaXplKGUsbnVsbCxhKTtpZih0Ll9mbGFncy5vbmx5KXtjb25zdCBuPXQuJF9jcmVhdGVFcnJvcihcImFueS5vbmx5XCIsZSx7dmFsaWRzOnQuX3ZhbGlkcy52YWx1ZXMoe2Rpc3BsYXk6ITB9KX0scixzKTtpZihzLmFib3J0RWFybHkpcmV0dXJuIHUuZmluYWxpemUoZSxbbl0sYSk7bS5wdXNoKG4pfX1pZih0Ll9pbnZhbGlkcyl7Y29uc3Qgbj10Ll9pbnZhbGlkcy5nZXQoZSxyLHMsdC5fZmxhZ3MuaW5zZW5zaXRpdmUpO2lmKG4pe3IubWFpbnN0YXkudHJhY2VyLmZpbHRlcih0LHIsXCJpbnZhbGlkXCIsbik7Y29uc3Qgbz10LiRfY3JlYXRlRXJyb3IoXCJhbnkuaW52YWxpZFwiLGUse2ludmFsaWRzOnQuX2ludmFsaWRzLnZhbHVlcyh7ZGlzcGxheTohMH0pfSxyLHMpO2lmKHMuYWJvcnRFYXJseSlyZXR1cm4gdS5maW5hbGl6ZShlLFtvXSxhKTttLnB1c2gobyl9fWlmKGwudmFsaWRhdGUpe2NvbnN0IHQ9bC52YWxpZGF0ZShlLGEpO2lmKHQmJihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwiYmFzZVwiLGUsdC52YWx1ZSksZT10LnZhbHVlLHQuZXJyb3JzKSl7aWYoIUFycmF5LmlzQXJyYXkodC5lcnJvcnMpKXJldHVybiBtLnB1c2godC5lcnJvcnMpLHUuZmluYWxpemUoZSxtLGEpO2lmKHQuZXJyb3JzLmxlbmd0aClyZXR1cm4gbS5wdXNoKC4uLnQuZXJyb3JzKSx1LmZpbmFsaXplKGUsbSxhKX19cmV0dXJuIHQuX3J1bGVzLmxlbmd0aD91LnJ1bGVzKGUsbSxhKTp1LmZpbmFsaXplKGUsbSxhKX0sdS5ydWxlcz1mdW5jdGlvbihlLHQscil7Y29uc3R7c2NoZW1hOnMsc3RhdGU6bixwcmVmczpvfT1yO2Zvcihjb25zdCBhIG9mIHMuX3J1bGVzKXtjb25zdCBsPXMuX2RlZmluaXRpb24ucnVsZXNbYS5tZXRob2RdO2lmKGwuY29udmVydCYmby5jb252ZXJ0KXtuLm1haW5zdGF5LnRyYWNlci5sb2cocyxuLFwicnVsZVwiLGEubmFtZSxcImZ1bGxcIik7Y29udGludWV9bGV0IGMsZj1hLmFyZ3M7aWYoYS5fcmVzb2x2ZS5sZW5ndGgpe2Y9T2JqZWN0LmFzc2lnbih7fSxmKTtmb3IoY29uc3QgdCBvZiBhLl9yZXNvbHZlKXtjb25zdCByPWwuYXJnc0J5TmFtZS5nZXQodCksYT1mW3RdLnJlc29sdmUoZSxuLG8pLHU9ci5ub3JtYWxpemU/ci5ub3JtYWxpemUoYSk6YSxtPWkudmFsaWRhdGVBcmcodSxudWxsLHIpO2lmKG0pe2M9cy4kX2NyZWF0ZUVycm9yKFwiYW55LnJlZlwiLGEse2FyZzp0LHJlZjpmW3RdLHJlYXNvbjptfSxuLG8pO2JyZWFrfWZbdF09dX19Yz1jfHxsLnZhbGlkYXRlKGUscixmLGEpO2NvbnN0IG09dS5ydWxlKGMsYSk7aWYobS5lcnJvcnMpe2lmKG4ubWFpbnN0YXkudHJhY2VyLmxvZyhzLG4sXCJydWxlXCIsYS5uYW1lLFwiZXJyb3JcIiksYS53YXJuKXtuLm1haW5zdGF5Lndhcm5pbmdzLnB1c2goLi4ubS5lcnJvcnMpO2NvbnRpbnVlfWlmKG8uYWJvcnRFYXJseSlyZXR1cm4gdS5maW5hbGl6ZShlLG0uZXJyb3JzLHIpO3QucHVzaCguLi5tLmVycm9ycyl9ZWxzZSBuLm1haW5zdGF5LnRyYWNlci5sb2cocyxuLFwicnVsZVwiLGEubmFtZSxcInBhc3NcIiksbi5tYWluc3RheS50cmFjZXIudmFsdWUobixcInJ1bGVcIixlLG0udmFsdWUsYS5uYW1lKSxlPW0udmFsdWV9cmV0dXJuIHUuZmluYWxpemUoZSx0LHIpfSx1LnJ1bGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSBpbnN0YW5jZW9mIGwuUmVwb3J0Pyh1LmVycm9yKGUsdCkse2Vycm9yczpbZV0sdmFsdWU6bnVsbH0pOkFycmF5LmlzQXJyYXkoZSkmJihlWzBdaW5zdGFuY2VvZiBsLlJlcG9ydHx8ZVswXWluc3RhbmNlb2YgRXJyb3IpPyhlLmZvckVhY2goZT0+dS5lcnJvcihlLHQpKSx7ZXJyb3JzOmUsdmFsdWU6bnVsbH0pOntlcnJvcnM6bnVsbCx2YWx1ZTplfX0sdS5lcnJvcj1mdW5jdGlvbihlLHQpe3JldHVybiB0Lm1lc3NhZ2UmJmUuX3NldFRlbXBsYXRlKHQubWVzc2FnZSksZX0sdS5maW5hbGl6ZT1mdW5jdGlvbihlLHQscil7dD10fHxbXTtjb25zdHtzY2hlbWE6bixzdGF0ZTpvLHByZWZzOmF9PXI7aWYodC5sZW5ndGgpe2NvbnN0IHM9dS5kZWZhdWx0KFwiZmFpbG92ZXJcIix2b2lkIDAsdCxyKTt2b2lkIDAhPT1zJiYoby5tYWluc3RheS50cmFjZXIudmFsdWUobyxcImZhaWxvdmVyXCIsZSxzKSxlPXMsdD1bXSl9aWYodC5sZW5ndGgmJm4uX2ZsYWdzLmVycm9yKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4uX2ZsYWdzLmVycm9yKXt0PW4uX2ZsYWdzLmVycm9yKHQpLEFycmF5LmlzQXJyYXkodCl8fCh0PVt0XSk7Zm9yKGNvbnN0IGUgb2YgdClzKGUgaW5zdGFuY2VvZiBFcnJvcnx8ZSBpbnN0YW5jZW9mIGwuUmVwb3J0LFwiZXJyb3IoKSBtdXN0IHJldHVybiBhbiBFcnJvciBvYmplY3RcIil9ZWxzZSB0PVtuLl9mbGFncy5lcnJvcl07aWYodm9pZCAwPT09ZSl7Y29uc3Qgcz11LmRlZmF1bHQoXCJkZWZhdWx0XCIsZSx0LHIpO28ubWFpbnN0YXkudHJhY2VyLnZhbHVlKG8sXCJkZWZhdWx0XCIsZSxzKSxlPXN9aWYobi5fZmxhZ3MuY2FzdCYmdm9pZCAwIT09ZSl7Y29uc3QgdD1uLl9kZWZpbml0aW9uLmNhc3Rbbi5fZmxhZ3MuY2FzdF07aWYodC5mcm9tKGUpKXtjb25zdCBzPXQudG8oZSxyKTtvLm1haW5zdGF5LnRyYWNlci52YWx1ZShvLFwiY2FzdFwiLGUscyxuLl9mbGFncy5jYXN0KSxlPXN9fWlmKG4uJF90ZXJtcy5leHRlcm5hbHMmJmEuZXh0ZXJuYWxzJiYhMSE9PWEuX2V4dGVybmFscylmb3IoY29uc3R7bWV0aG9kOmV9b2Ygbi4kX3Rlcm1zLmV4dGVybmFscylvLm1haW5zdGF5LmV4dGVybmFscy5wdXNoKHttZXRob2Q6ZSxwYXRoOm8ucGF0aCxsYWJlbDpsLmxhYmVsKG4uX2ZsYWdzLG8sYSl9KTtjb25zdCBpPXt2YWx1ZTplLGVycm9yczp0Lmxlbmd0aD90Om51bGx9O3JldHVybiBuLl9mbGFncy5yZXN1bHQmJihpLnZhbHVlPVwic3RyaXBcIj09PW4uX2ZsYWdzLnJlc3VsdD92b2lkIDA6ci5vcmlnaW5hbCxvLm1haW5zdGF5LnRyYWNlci52YWx1ZShvLG4uX2ZsYWdzLnJlc3VsdCxlLGkudmFsdWUpLG8uc2hhZG93KGUsbi5fZmxhZ3MucmVzdWx0KSksbi5fY2FjaGUmJiExIT09YS5jYWNoZSYmIW4uX3JlZnMubGVuZ3RoJiZuLl9jYWNoZS5zZXQoci5vcmlnaW5hbCxpKSxpfSx1LnByZWZzPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj10PT09aS5kZWZhdWx0cztyZXR1cm4gciYmZS5fcHJlZmVyZW5jZXNbaS5zeW1ib2xzLnByZWZzXT9lLl9wcmVmZXJlbmNlc1tpLnN5bWJvbHMucHJlZnNdOih0PWkucHJlZmVyZW5jZXModCxlLl9wcmVmZXJlbmNlcyksciYmKGUuX3ByZWZlcmVuY2VzW2kuc3ltYm9scy5wcmVmc109dCksdCl9LHUuZGVmYXVsdD1mdW5jdGlvbihlLHQscixzKXtjb25zdHtzY2hlbWE6byxzdGF0ZTphLHByZWZzOmx9PXMsYz1vLl9mbGFnc1tlXTtpZihsLm5vRGVmYXVsdHN8fHZvaWQgMD09PWMpcmV0dXJuIHQ7aWYoYS5tYWluc3RheS50cmFjZXIubG9nKG8sYSxcInJ1bGVcIixlLFwiZnVsbFwiKSwhYylyZXR1cm4gYztpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjKXtjb25zdCB0PWMubGVuZ3RoP1tuKGEuYW5jZXN0b3JzWzBdKSxzXTpbXTt0cnl7cmV0dXJuIGMoLi4udCl9Y2F0Y2godCl7cmV0dXJuIHZvaWQgci5wdXNoKG8uJF9jcmVhdGVFcnJvcihcImFueS5cIi5jb25jYXQoZSksbnVsbCx7ZXJyb3I6dH0sYSxsKSl9fXJldHVyblwib2JqZWN0XCIhPXR5cGVvZiBjP2M6Y1tpLnN5bWJvbHMubGl0ZXJhbF0/Yy5saXRlcmFsOmkuaXNSZXNvbHZhYmxlKGMpP2MucmVzb2x2ZSh0LGEsbCk6bihjKX0sdS50cmltPWZ1bmN0aW9uKGUsdCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIGU7Y29uc3Qgcj10LiRfZ2V0UnVsZShcInRyaW1cIik7cmV0dXJuIHImJnIuYXJncy5lbmFibGVkP2UudHJpbSgpOmV9LHUuaWdub3JlPXthY3RpdmU6ITEsZGVidWc6byxlbnRyeTpvLGZpbHRlcjpvLGxvZzpvLHJlc29sdmU6byx2YWx1ZTpvfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe319LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMiksbj1yKDYpLG89cigxKSxhPXt2YWx1ZTpTeW1ib2woXCJ2YWx1ZVwiKX07ZS5leHBvcnRzPWEuU3RhdGU9Y2xhc3N7Y29uc3RydWN0b3IoZSx0LHIpe3RoaXMucGF0aD1lLHRoaXMuYW5jZXN0b3JzPXQsdGhpcy5tYWluc3RheT1yLm1haW5zdGF5LHRoaXMuc2NoZW1hcz1yLnNjaGVtYXMsdGhpcy5kZWJ1Zz1udWxsfWxvY2FsaXplKGUsdD1udWxsLHI9bnVsbCl7Y29uc3Qgcz1uZXcgYS5TdGF0ZShlLHQsdGhpcyk7cmV0dXJuIHImJnMuc2NoZW1hcyYmKHMuc2NoZW1hcz1bYS5zY2hlbWFzKHIpLC4uLnMuc2NoZW1hc10pLHN9bmVzdChlLHQpe2NvbnN0IHI9bmV3IGEuU3RhdGUodGhpcy5wYXRoLHRoaXMuYW5jZXN0b3JzLHRoaXMpO3JldHVybiByLnNjaGVtYXM9ci5zY2hlbWFzJiZbYS5zY2hlbWFzKGUpLC4uLnIuc2NoZW1hc10sci5kZWJ1Zz10LHJ9c2hhZG93KGUsdCl7dGhpcy5tYWluc3RheS5zaGFkb3c9dGhpcy5tYWluc3RheS5zaGFkb3d8fG5ldyBhLlNoYWRvdyx0aGlzLm1haW5zdGF5LnNoYWRvdy5zZXQodGhpcy5wYXRoLGUsdCl9c25hcHNob3QoKXt0aGlzLm1haW5zdGF5LnNoYWRvdyYmKHRoaXMuX3NuYXBzaG90PXModGhpcy5tYWluc3RheS5zaGFkb3cubm9kZSh0aGlzLnBhdGgpKSl9cmVzdG9yZSgpe3RoaXMubWFpbnN0YXkuc2hhZG93JiYodGhpcy5tYWluc3RheS5zaGFkb3cub3ZlcnJpZGUodGhpcy5wYXRoLHRoaXMuX3NuYXBzaG90KSx0aGlzLl9zbmFwc2hvdD12b2lkIDApfX0sYS5zY2hlbWFzPWZ1bmN0aW9uKGUpe3JldHVybiBvLmlzU2NoZW1hKGUpP3tzY2hlbWE6ZX06ZX0sYS5TaGFkb3c9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLl92YWx1ZXM9bnVsbH1zZXQoZSx0LHIpe2lmKCFlLmxlbmd0aClyZXR1cm47aWYoXCJzdHJpcFwiPT09ciYmXCJudW1iZXJcIj09dHlwZW9mIGVbZS5sZW5ndGgtMV0pcmV0dXJuO3RoaXMuX3ZhbHVlcz10aGlzLl92YWx1ZXN8fG5ldyBNYXA7bGV0IHM9dGhpcy5fdmFsdWVzO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7Kyt0KXtjb25zdCByPWVbdF07bGV0IG49cy5nZXQocik7bnx8KG49bmV3IE1hcCxzLnNldChyLG4pKSxzPW59c1thLnZhbHVlXT10fWdldChlKXtjb25zdCB0PXRoaXMubm9kZShlKTtpZih0KXJldHVybiB0W2EudmFsdWVdfW5vZGUoZSl7aWYodGhpcy5fdmFsdWVzKXJldHVybiBuKHRoaXMuX3ZhbHVlcyxlLHtpdGVyYWJsZXM6ITB9KX1vdmVycmlkZShlLHQpe2lmKCF0aGlzLl92YWx1ZXMpcmV0dXJuO2NvbnN0IHI9ZS5zbGljZSgwLC0xKSxzPWVbZS5sZW5ndGgtMV0sbz1uKHRoaXMuX3ZhbHVlcyxyLHtpdGVyYWJsZXM6ITB9KTt0P28uc2V0KHMsdCk6byYmby5kZWxldGUocyl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMTApLG89cig2KSxhPXIoMyksaT1yKDEpLGw9cig4KSxjPXt9O2UuZXhwb3J0cz1hLmV4dGVuZCh7dHlwZTpcImFycmF5XCIsZmxhZ3M6e3NpbmdsZTp7ZGVmYXVsdDohMX0sc3BhcnNlOntkZWZhdWx0OiExfX0sdGVybXM6e2l0ZW1zOntpbml0OltdLG1hbmlmZXN0Olwic2NoZW1hXCJ9LG9yZGVyZWQ6e2luaXQ6W10sbWFuaWZlc3Q6XCJzY2hlbWFcIn0sX2V4Y2x1c2lvbnM6e2luaXQ6W119LF9pbmNsdXNpb25zOntpbml0OltdfSxfcmVxdWlyZWRzOntpbml0OltdfX0sY29lcmNlOntmcm9tOlwib2JqZWN0XCIsbWV0aG9kKGUse3NjaGVtYTp0LHN0YXRlOnIscHJlZnM6c30pe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVybjtjb25zdCBuPXQuJF9nZXRSdWxlKFwic29ydFwiKTtyZXR1cm4gbj9jLnNvcnQodCxlLG4uYXJncy5vcHRpb25zLHIscyk6dm9pZCAwfX0sdmFsaWRhdGUoZSx7c2NoZW1hOnQsZXJyb3I6cn0pe2lmKCFBcnJheS5pc0FycmF5KGUpKXtpZih0Ll9mbGFncy5zaW5nbGUpe2NvbnN0IHQ9W2VdO3JldHVybiB0W2kuc3ltYm9scy5hcnJheVNpbmdsZV09ITAse3ZhbHVlOnR9fXJldHVybntlcnJvcnM6cihcImFycmF5LmJhc2VcIil9fWlmKHQuJF9nZXRSdWxlKFwiaXRlbXNcIil8fHQuJF90ZXJtcy5leHRlcm5hbHMpcmV0dXJue3ZhbHVlOmUuc2xpY2UoKX19LHJ1bGVzOntoYXM6e21ldGhvZChlKXtlPXRoaXMuJF9jb21waWxlKGUse2FwcGVuZFBhdGg6ITB9KTtjb25zdCB0PXRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaGFzXCIsYXJnczp7c2NoZW1hOmV9fSk7cmV0dXJuIHQuJF9tdXRhdGVSZWdpc3RlcihlKSx0fSx2YWxpZGF0ZShlLHtzdGF0ZTp0LHByZWZzOnIsZXJyb3I6c30se3NjaGVtYTpufSl7Y29uc3Qgbz1bZSwuLi50LmFuY2VzdG9yc107Zm9yKGxldCBzPTA7czxlLmxlbmd0aDsrK3Mpe2NvbnN0IGE9dC5sb2NhbGl6ZShbLi4udC5wYXRoLHNdLG8sbik7aWYobi4kX21hdGNoKGVbc10sYSxyKSlyZXR1cm4gZX1jb25zdCBhPW4uX2ZsYWdzLmxhYmVsO3JldHVybiBhP3MoXCJhcnJheS5oYXNLbm93blwiLHtwYXR0ZXJuTGFiZWw6YX0pOnMoXCJhcnJheS5oYXNVbmtub3duXCIsbnVsbCl9LG11bHRpOiEwfSxpdGVtczp7bWV0aG9kKC4uLmUpe2kudmVyaWZ5RmxhdChlLFwiaXRlbXNcIik7Y29uc3QgdD10aGlzLiRfYWRkUnVsZShcIml0ZW1zXCIpO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBzPWkudHJ5V2l0aFBhdGgoKCk9PnRoaXMuJF9jb21waWxlKGVbcl0pLHIse2FwcGVuZDohMH0pO3QuJF90ZXJtcy5pdGVtcy5wdXNoKHMpfXJldHVybiB0LiRfbXV0YXRlUmVidWlsZCgpfSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyLHN0YXRlOnMscHJlZnM6bn0pe2NvbnN0IG89dC4kX3Rlcm1zLl9yZXF1aXJlZHMuc2xpY2UoKSxhPXQuJF90ZXJtcy5vcmRlcmVkLnNsaWNlKCksbD1bLi4udC4kX3Rlcm1zLl9pbmNsdXNpb25zLC4uLm9dLHU9IWVbaS5zeW1ib2xzLmFycmF5U2luZ2xlXTtkZWxldGUgZVtpLnN5bWJvbHMuYXJyYXlTaW5nbGVdO2NvbnN0IGY9W107bGV0IG09ZS5sZW5ndGg7Zm9yKGxldCBpPTA7aTxtOysraSl7Y29uc3QgaD1lW2ldO2xldCBkPSExLHA9ITE7Y29uc3QgZz11P2k6bmV3IE51bWJlcihpKSx5PVsuLi5zLnBhdGgsZ107aWYoIXQuX2ZsYWdzLnNwYXJzZSYmdm9pZCAwPT09aCl7aWYoZi5wdXNoKHIoXCJhcnJheS5zcGFyc2VcIix7a2V5OmcscGF0aDp5LHBvczppLHZhbHVlOnZvaWQgMH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZjthLnNoaWZ0KCk7Y29udGludWV9Y29uc3QgYj1bZSwuLi5zLmFuY2VzdG9yc107Zm9yKGNvbnN0IGUgb2YgdC4kX3Rlcm1zLl9leGNsdXNpb25zKWlmKGUuJF9tYXRjaChoLHMubG9jYWxpemUoeSxiLGUpLG4se3ByZXNlbmNlOlwiaWdub3JlXCJ9KSl7aWYoZi5wdXNoKHIoXCJhcnJheS5leGNsdWRlc1wiLHtwb3M6aSx2YWx1ZTpofSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KXJldHVybiBmO2Q9ITAsYS5zaGlmdCgpO2JyZWFrfWlmKGQpY29udGludWU7aWYodC4kX3Rlcm1zLm9yZGVyZWQubGVuZ3RoKXtpZihhLmxlbmd0aCl7Y29uc3Qgbz1hLnNoaWZ0KCksbD1vLiRfdmFsaWRhdGUoaCxzLmxvY2FsaXplKHksYixvKSxuKTtpZihsLmVycm9ycyl7aWYoZi5wdXNoKC4uLmwuZXJyb3JzKSxuLmFib3J0RWFybHkpcmV0dXJuIGZ9ZWxzZSBpZihcInN0cmlwXCI9PT1vLl9mbGFncy5yZXN1bHQpYy5mYXN0U3BsaWNlKGUsaSksLS1pLC0tbTtlbHNle2lmKCF0Ll9mbGFncy5zcGFyc2UmJnZvaWQgMD09PWwudmFsdWUpe2lmKGYucHVzaChyKFwiYXJyYXkuc3BhcnNlXCIse2tleTpnLHBhdGg6eSxwb3M6aSx2YWx1ZTp2b2lkIDB9LHMubG9jYWxpemUoeSkpKSxuLmFib3J0RWFybHkpcmV0dXJuIGY7Y29udGludWV9ZVtpXT1sLnZhbHVlfWNvbnRpbnVlfWlmKCF0LiRfdGVybXMuaXRlbXMubGVuZ3RoKXtpZihmLnB1c2gocihcImFycmF5Lm9yZGVyZWRMZW5ndGhcIix7cG9zOmksbGltaXQ6dC4kX3Rlcm1zLm9yZGVyZWQubGVuZ3RofSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZjticmVha319Y29uc3Qgdj1bXTtsZXQgXz1vLmxlbmd0aDtmb3IobGV0IGE9MDthPF87KythKXtjb25zdCBsPXMubG9jYWxpemUoeSxiLG9bYV0pO2wuc25hcHNob3QoKTtjb25zdCB1PW9bYV0uJF92YWxpZGF0ZShoLGwsbik7aWYodlthXT11LCF1LmVycm9ycyl7aWYoZVtpXT11LnZhbHVlLHA9ITAsYy5mYXN0U3BsaWNlKG8sYSksLS1hLC0tXywhdC5fZmxhZ3Muc3BhcnNlJiZ2b2lkIDA9PT11LnZhbHVlJiYoZi5wdXNoKHIoXCJhcnJheS5zcGFyc2VcIix7a2V5OmcscGF0aDp5LHBvczppLHZhbHVlOnZvaWQgMH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSkpcmV0dXJuIGY7YnJlYWt9bC5yZXN0b3JlKCl9aWYocCljb250aW51ZTtjb25zdCB3PW4uc3RyaXBVbmtub3duJiYhIW4uc3RyaXBVbmtub3duLmFycmF5c3x8ITE7Xz1sLmxlbmd0aDtmb3IoY29uc3QgYSBvZiBsKXtsZXQgbDtjb25zdCB1PW8uaW5kZXhPZihhKTtpZigtMSE9PXUpbD12W3VdO2Vsc2V7Y29uc3Qgbz1zLmxvY2FsaXplKHksYixhKTtpZihvLnNuYXBzaG90KCksbD1hLiRfdmFsaWRhdGUoaCxvLG4pLCFsLmVycm9ycyl7XCJzdHJpcFwiPT09YS5fZmxhZ3MucmVzdWx0PyhjLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tKTp0Ll9mbGFncy5zcGFyc2V8fHZvaWQgMCE9PWwudmFsdWU/ZVtpXT1sLnZhbHVlOihmLnB1c2gocihcImFycmF5LnNwYXJzZVwiLHtrZXk6ZyxwYXRoOnkscG9zOmksdmFsdWU6dm9pZCAwfSxzLmxvY2FsaXplKHkpKSksZD0hMCkscD0hMDticmVha31vLnJlc3RvcmUoKX1pZigxPT09Xyl7aWYodyl7Yy5mYXN0U3BsaWNlKGUsaSksLS1pLC0tbSxwPSEwO2JyZWFrfWlmKGYucHVzaCguLi5sLmVycm9ycyksbi5hYm9ydEVhcmx5KXJldHVybiBmO2Q9ITA7YnJlYWt9fWlmKCFkJiYodC4kX3Rlcm1zLl9pbmNsdXNpb25zLmxlbmd0aCYmIXApKXtpZih3KXtjLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tO2NvbnRpbnVlfWlmKGYucHVzaChyKFwiYXJyYXkuaW5jbHVkZXNcIix7cG9zOmksdmFsdWU6aH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZn19cmV0dXJuIG8ubGVuZ3RoJiZjLmZpbGxNaXNzZWRFcnJvcnModCxmLG8sZSxzLG4pLGEubGVuZ3RoJiZjLmZpbGxPcmRlcmVkRXJyb3JzKHQsZixhLGUscyxuKSxmLmxlbmd0aD9mOmV9LHByaW9yaXR5OiEwLG1hbmlmZXN0OiExfSxsZW5ndGg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj1cIn0pfSx2YWxpZGF0ZTooZSx0LHtsaW1pdDpyfSx7bmFtZTpzLG9wZXJhdG9yOm4sYXJnczpvfSk9PmkuY29tcGFyZShlLmxlbmd0aCxyLG4pP2U6dC5lcnJvcihcImFycmF5LlwiK3Mse2xpbWl0Om8ubGltaXQsdmFsdWU6ZX0pLGFyZ3M6W3tuYW1lOlwibGltaXRcIixyZWY6ITAsYXNzZXJ0OmkubGltaXQsbWVzc2FnZTpcIm11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCJ9XX0sbWF4OnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWF4XCIsbWV0aG9kOlwibGVuZ3RoXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI8PVwifSl9fSxtaW46e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtaW5cIixtZXRob2Q6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj49XCJ9KX19LG9yZGVyZWQ6e21ldGhvZCguLi5lKXtpLnZlcmlmeUZsYXQoZSxcIm9yZGVyZWRcIik7Y29uc3QgdD10aGlzLiRfYWRkUnVsZShcIml0ZW1zXCIpO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBzPWkudHJ5V2l0aFBhdGgoKCk9PnRoaXMuJF9jb21waWxlKGVbcl0pLHIse2FwcGVuZDohMH0pO2MudmFsaWRhdGVTaW5nbGUocyx0KSx0LiRfbXV0YXRlUmVnaXN0ZXIocyksdC4kX3Rlcm1zLm9yZGVyZWQucHVzaChzKX1yZXR1cm4gdC4kX211dGF0ZVJlYnVpbGQoKX19LHNpbmdsZTp7bWV0aG9kKGUpe2NvbnN0IHQ9dm9pZCAwPT09ZXx8ISFlO3JldHVybiBzKCF0fHwhdGhpcy5fZmxhZ3MuX2FycmF5SXRlbXMsXCJDYW5ub3Qgc3BlY2lmeSBzaW5nbGUgcnVsZSB3aGVuIGFycmF5IGhhcyBhcnJheSBpdGVtc1wiKSx0aGlzLiRfc2V0RmxhZyhcInNpbmdsZVwiLHQpfX0sc29ydDp7bWV0aG9kKGU9e30pe2kuYXNzZXJ0T3B0aW9ucyhlLFtcImJ5XCIsXCJvcmRlclwiXSk7Y29uc3QgdD17b3JkZXI6ZS5vcmRlcnx8XCJhc2NlbmRpbmdcIn07cmV0dXJuIGUuYnkmJih0LmJ5PWwucmVmKGUuYnkse2FuY2VzdG9yOjB9KSxzKCF0LmJ5LmFuY2VzdG9yLFwiQ2Fubm90IHNvcnQgYnkgYW5jZXN0b3JcIikpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwic29ydFwiLGFyZ3M6e29wdGlvbnM6dH19KX0sdmFsaWRhdGUoZSx7ZXJyb3I6dCxzdGF0ZTpyLHByZWZzOnMsc2NoZW1hOm59LHtvcHRpb25zOm99KXtjb25zdHt2YWx1ZTphLGVycm9yczppfT1jLnNvcnQobixlLG8scixzKTtpZihpKXJldHVybiBpO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKWlmKGVbcl0hPT1hW3JdKXJldHVybiB0KFwiYXJyYXkuc29ydFwiLHtvcmRlcjpvLm9yZGVyLGJ5Om8uYnk/by5ieS5rZXk6XCJ2YWx1ZVwifSk7cmV0dXJuIGV9LGNvbnZlcnQ6ITB9LHNwYXJzZTp7bWV0aG9kKGUpe2NvbnN0IHQ9dm9pZCAwPT09ZXx8ISFlO3JldHVybiB0aGlzLl9mbGFncy5zcGFyc2U9PT10P3RoaXM6KHQ/dGhpcy5jbG9uZSgpOnRoaXMuJF9hZGRSdWxlKFwiaXRlbXNcIikpLiRfc2V0RmxhZyhcInNwYXJzZVwiLHQse2Nsb25lOiExfSl9fSx1bmlxdWU6e21ldGhvZChlLHQ9e30pe3MoIWV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiY29tcGFyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcIiksaS5hc3NlcnRPcHRpb25zKHQsW1wiaWdub3JlVW5kZWZpbmVkXCIsXCJzZXBhcmF0b3JcIl0pO2NvbnN0IHI9e25hbWU6XCJ1bmlxdWVcIixhcmdzOntvcHRpb25zOnQsY29tcGFyYXRvcjplfX07aWYoZSlpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7Y29uc3Qgcz1pLmRlZmF1bHQodC5zZXBhcmF0b3IsXCIuXCIpO3IucGF0aD1zP2Uuc3BsaXQocyk6W2VdfWVsc2Ugci5jb21wYXJhdG9yPWU7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHIpfSx2YWxpZGF0ZShlLHtzdGF0ZTp0LGVycm9yOnIsc2NoZW1hOmF9LHtjb21wYXJhdG9yOmksb3B0aW9uczpsfSx7Y29tcGFyYXRvcjpjLHBhdGg6dX0pe2NvbnN0IGY9e3N0cmluZzpPYmplY3QuY3JlYXRlKG51bGwpLG51bWJlcjpPYmplY3QuY3JlYXRlKG51bGwpLHVuZGVmaW5lZDpPYmplY3QuY3JlYXRlKG51bGwpLGJvb2xlYW46T2JqZWN0LmNyZWF0ZShudWxsKSxvYmplY3Q6bmV3IE1hcCxmdW5jdGlvbjpuZXcgTWFwLGN1c3RvbTpuZXcgTWFwfSxtPWN8fG4saD1sLmlnbm9yZVVuZGVmaW5lZDtmb3IobGV0IG49MDtuPGUubGVuZ3RoOysrbil7Y29uc3QgYT11P28oZVtuXSx1KTplW25dLGw9Yz9mLmN1c3RvbTpmW3R5cGVvZiBhXTtpZihzKGwsXCJGYWlsZWQgdG8gZmluZCB1bmlxdWUgbWFwIGNvbnRhaW5lciBmb3IgdHlwZVwiLHR5cGVvZiBhKSxsIGluc3RhbmNlb2YgTWFwKXtjb25zdCBzPWwuZW50cmllcygpO2xldCBvO2Zvcig7IShvPXMubmV4dCgpKS5kb25lOylpZihtKG8udmFsdWVbMF0sYSkpe2NvbnN0IHM9dC5sb2NhbGl6ZShbLi4udC5wYXRoLG5dLFtlLC4uLnQuYW5jZXN0b3JzXSksYT17cG9zOm4sdmFsdWU6ZVtuXSxkdXBlUG9zOm8udmFsdWVbMV0sZHVwZVZhbHVlOmVbby52YWx1ZVsxXV19O3JldHVybiB1JiYoYS5wYXRoPWkpLHIoXCJhcnJheS51bmlxdWVcIixhLHMpfWwuc2V0KGEsbil9ZWxzZXtpZigoIWh8fHZvaWQgMCE9PWEpJiZ2b2lkIDAhPT1sW2FdKXtjb25zdCBzPXtwb3M6bix2YWx1ZTplW25dLGR1cGVQb3M6bFthXSxkdXBlVmFsdWU6ZVtsW2FdXX07cmV0dXJuIHUmJihzLnBhdGg9aSkscihcImFycmF5LnVuaXF1ZVwiLHMsdC5sb2NhbGl6ZShbLi4udC5wYXRoLG5dLFtlLC4uLnQuYW5jZXN0b3JzXSkpfWxbYV09bn19cmV0dXJuIGV9LGFyZ3M6W1wiY29tcGFyYXRvclwiLFwib3B0aW9uc1wiXSxtdWx0aTohMH19LGNhc3Q6e3NldDp7ZnJvbTpBcnJheS5pc0FycmF5LHRvOihlLHQpPT5uZXcgU2V0KGUpfX0scmVidWlsZChlKXtlLiRfdGVybXMuX2luY2x1c2lvbnM9W10sZS4kX3Rlcm1zLl9leGNsdXNpb25zPVtdLGUuJF90ZXJtcy5fcmVxdWlyZWRzPVtdO2Zvcihjb25zdCB0IG9mIGUuJF90ZXJtcy5pdGVtcyljLnZhbGlkYXRlU2luZ2xlKHQsZSksXCJyZXF1aXJlZFwiPT09dC5fZmxhZ3MucHJlc2VuY2U/ZS4kX3Rlcm1zLl9yZXF1aXJlZHMucHVzaCh0KTpcImZvcmJpZGRlblwiPT09dC5fZmxhZ3MucHJlc2VuY2U/ZS4kX3Rlcm1zLl9leGNsdXNpb25zLnB1c2godCk6ZS4kX3Rlcm1zLl9pbmNsdXNpb25zLnB1c2godCk7Zm9yKGNvbnN0IHQgb2YgZS4kX3Rlcm1zLm9yZGVyZWQpYy52YWxpZGF0ZVNpbmdsZSh0LGUpfSxtYW5pZmVzdDp7YnVpbGQ6KGUsdCk9Pih0Lml0ZW1zJiYoZT1lLml0ZW1zKC4uLnQuaXRlbXMpKSx0Lm9yZGVyZWQmJihlPWUub3JkZXJlZCguLi50Lm9yZGVyZWQpKSxlKX0sbWVzc2FnZXM6e1wiYXJyYXkuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGFuIGFycmF5XCIsXCJhcnJheS5leGNsdWRlc1wiOlwie3sjbGFiZWx9fSBjb250YWlucyBhbiBleGNsdWRlZCB2YWx1ZVwiLFwiYXJyYXkuaGFzS25vd25cIjone3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSByZXF1aXJlZCBtYXRjaCBmb3IgdHlwZSBcInsjcGF0dGVybkxhYmVsfVwiJyxcImFycmF5Lmhhc1Vua25vd25cIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiBhdCBsZWFzdCBvbmUgcmVxdWlyZWQgbWF0Y2hcIixcImFycmF5LmluY2x1ZGVzXCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgYWxsb3dlZCB0eXBlc1wiLFwiYXJyYXkuaW5jbHVkZXNSZXF1aXJlZEJvdGhcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiB7eyNrbm93bk1pc3Nlc319IGFuZCB7eyN1bmtub3duTWlzc2VzfX0gb3RoZXIgcmVxdWlyZWQgdmFsdWUocylcIixcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRLbm93bnNcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiB7eyNrbm93bk1pc3Nlc319XCIsXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkVW5rbm93bnNcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiB7eyN1bmtub3duTWlzc2VzfX0gcmVxdWlyZWQgdmFsdWUocylcIixcImFycmF5Lmxlbmd0aFwiOlwie3sjbGFiZWx9fSBtdXN0IGNvbnRhaW4ge3sjbGltaXR9fSBpdGVtc1wiLFwiYXJyYXkubWF4XCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge3sjbGltaXR9fSBpdGVtc1wiLFwiYXJyYXkubWluXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhdCBsZWFzdCB7eyNsaW1pdH19IGl0ZW1zXCIsXCJhcnJheS5vcmRlcmVkTGVuZ3RoXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhdCBtb3N0IHt7I2xpbWl0fX0gaXRlbXNcIixcImFycmF5LnNvcnRcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBzb3J0ZWQgaW4geyNvcmRlcn0gb3JkZXIgYnkge3sjYnl9fVwiLFwiYXJyYXkuc29ydC5taXNtYXRjaGluZ1wiOlwie3sjbGFiZWx9fSBjYW5ub3QgYmUgc29ydGVkIGR1ZSB0byBtaXNtYXRjaGluZyB0eXBlc1wiLFwiYXJyYXkuc29ydC51bnN1cHBvcnRlZFwiOlwie3sjbGFiZWx9fSBjYW5ub3QgYmUgc29ydGVkIGR1ZSB0byB1bnN1cHBvcnRlZCB0eXBlIHsjdHlwZX1cIixcImFycmF5LnNwYXJzZVwiOlwie3sjbGFiZWx9fSBtdXN0IG5vdCBiZSBhIHNwYXJzZSBhcnJheSBpdGVtXCIsXCJhcnJheS51bmlxdWVcIjpcInt7I2xhYmVsfX0gY29udGFpbnMgYSBkdXBsaWNhdGUgdmFsdWVcIn19KSxjLmZpbGxNaXNzZWRFcnJvcnM9ZnVuY3Rpb24oZSx0LHIscyxuLG8pe2NvbnN0IGE9W107bGV0IGk9MDtmb3IoY29uc3QgZSBvZiByKXtjb25zdCB0PWUuX2ZsYWdzLmxhYmVsO3Q/YS5wdXNoKHQpOisraX1hLmxlbmd0aD9pP3QucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkQm90aFwiLHMse2tub3duTWlzc2VzOmEsdW5rbm93bk1pc3NlczppfSxuLG8pKTp0LnB1c2goZS4kX2NyZWF0ZUVycm9yKFwiYXJyYXkuaW5jbHVkZXNSZXF1aXJlZEtub3duc1wiLHMse2tub3duTWlzc2VzOmF9LG4sbykpOnQucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkVW5rbm93bnNcIixzLHt1bmtub3duTWlzc2VzOml9LG4sbykpfSxjLmZpbGxPcmRlcmVkRXJyb3JzPWZ1bmN0aW9uKGUsdCxyLHMsbixvKXtjb25zdCBhPVtdO2Zvcihjb25zdCBlIG9mIHIpXCJyZXF1aXJlZFwiPT09ZS5fZmxhZ3MucHJlc2VuY2UmJmEucHVzaChlKTthLmxlbmd0aCYmYy5maWxsTWlzc2VkRXJyb3JzKGUsdCxhLHMsbixvKX0sYy5mYXN0U3BsaWNlPWZ1bmN0aW9uKGUsdCl7bGV0IHI9dDtmb3IoO3I8ZS5sZW5ndGg7KWVbcisrXT1lW3JdOy0tZS5sZW5ndGh9LGMudmFsaWRhdGVTaW5nbGU9ZnVuY3Rpb24oZSx0KXsoXCJhcnJheVwiPT09ZS50eXBlfHxlLl9mbGFncy5fYXJyYXlJdGVtcykmJihzKCF0Ll9mbGFncy5zaW5nbGUsXCJDYW5ub3Qgc3BlY2lmeSBhcnJheSBpdGVtIHdpdGggc2luZ2xlIHJ1bGUgZW5hYmxlZFwiKSx0LiRfc2V0RmxhZyhcIl9hcnJheUl0ZW1zXCIsITAse2Nsb25lOiExfSkpfSxjLnNvcnQ9ZnVuY3Rpb24oZSx0LHIscyxuKXtjb25zdCBvPVwiYXNjZW5kaW5nXCI9PT1yLm9yZGVyPzE6LTEsYT0tMSpvLGk9byxsPShsLHUpPT57bGV0IGY9Yy5jb21wYXJlKGwsdSxhLGkpO2lmKG51bGwhPT1mKXJldHVybiBmO2lmKHIuYnkmJihsPXIuYnkucmVzb2x2ZShsLHMsbiksdT1yLmJ5LnJlc29sdmUodSxzLG4pKSxmPWMuY29tcGFyZShsLHUsYSxpKSxudWxsIT09ZilyZXR1cm4gZjtjb25zdCBtPXR5cGVvZiBsO2lmKG0hPT10eXBlb2YgdSl0aHJvdyBlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5zb3J0Lm1pc21hdGNoaW5nXCIsdCxudWxsLHMsbik7aWYoXCJudW1iZXJcIiE9PW0mJlwic3RyaW5nXCIhPT1tKXRocm93IGUuJF9jcmVhdGVFcnJvcihcImFycmF5LnNvcnQudW5zdXBwb3J0ZWRcIix0LHt0eXBlOm19LHMsbik7cmV0dXJuXCJudW1iZXJcIj09PW0/KGwtdSkqbzpsPHU/YTppfTt0cnl7cmV0dXJue3ZhbHVlOnQuc2xpY2UoKS5zb3J0KGwpfX1jYXRjaChlKXtyZXR1cm57ZXJyb3JzOmV9fX0sYy5jb21wYXJlPWZ1bmN0aW9uKGUsdCxyLHMpe3JldHVybiBlPT09dD8wOnZvaWQgMD09PWU/MTp2b2lkIDA9PT10Py0xOm51bGw9PT1lP3M6bnVsbD09PXQ/cjpudWxsfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz1yKDEpLGE9cigyMSksaT17aXNCb29sOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZX19O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImJvb2xlYW5cIixmbGFnczp7c2Vuc2l0aXZlOntkZWZhdWx0OiExfX0sdGVybXM6e2ZhbHN5Ontpbml0Om51bGwsbWFuaWZlc3Q6XCJ2YWx1ZXNcIn0sdHJ1dGh5Ontpbml0Om51bGwsbWFuaWZlc3Q6XCJ2YWx1ZXNcIn19LGNvZXJjZShlLHtzY2hlbWE6dH0pe2lmKFwiYm9vbGVhblwiIT10eXBlb2YgZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2NvbnN0IHI9dC5fZmxhZ3Muc2Vuc2l0aXZlP2U6ZS50b0xvd2VyQ2FzZSgpO2U9XCJ0cnVlXCI9PT1yfHxcImZhbHNlXCIhPT1yJiZlfXJldHVyblwiYm9vbGVhblwiIT10eXBlb2YgZSYmKGU9dC4kX3Rlcm1zLnRydXRoeSYmdC4kX3Rlcm1zLnRydXRoeS5oYXMoZSxudWxsLG51bGwsIXQuX2ZsYWdzLnNlbnNpdGl2ZSl8fCghdC4kX3Rlcm1zLmZhbHN5fHwhdC4kX3Rlcm1zLmZhbHN5LmhhcyhlLG51bGwsbnVsbCwhdC5fZmxhZ3Muc2Vuc2l0aXZlKSkmJmUpLHt2YWx1ZTplfX19LHZhbGlkYXRlKGUse2Vycm9yOnR9KXtpZihcImJvb2xlYW5cIiE9dHlwZW9mIGUpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnQoXCJib29sZWFuLmJhc2VcIil9fSxydWxlczp7dHJ1dGh5OnttZXRob2QoLi4uZSl7by52ZXJpZnlGbGF0KGUsXCJ0cnV0aHlcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7dC4kX3Rlcm1zLnRydXRoeT10LiRfdGVybXMudHJ1dGh5fHxuZXcgYTtmb3IobGV0IHI9MDtyPGUubGVuZ3RoOysrcil7Y29uc3Qgbj1lW3JdO3Modm9pZCAwIT09bixcIkNhbm5vdCBjYWxsIHRydXRoeSB3aXRoIHVuZGVmaW5lZFwiKSx0LiRfdGVybXMudHJ1dGh5LmFkZChuKX1yZXR1cm4gdH19LGZhbHN5OnttZXRob2QoLi4uZSl7by52ZXJpZnlGbGF0KGUsXCJmYWxzeVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTt0LiRfdGVybXMuZmFsc3k9dC4kX3Rlcm1zLmZhbHN5fHxuZXcgYTtmb3IobGV0IHI9MDtyPGUubGVuZ3RoOysrcil7Y29uc3Qgbj1lW3JdO3Modm9pZCAwIT09bixcIkNhbm5vdCBjYWxsIGZhbHN5IHdpdGggdW5kZWZpbmVkXCIpLHQuJF90ZXJtcy5mYWxzeS5hZGQobil9cmV0dXJuIHR9fSxzZW5zaXRpdmU6e21ldGhvZChlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJzZW5zaXRpdmVcIixlKX19fSxjYXN0OntudW1iZXI6e2Zyb206aS5pc0Jvb2wsdG86KGUsdCk9PmU/MTowfSxzdHJpbmc6e2Zyb206aS5pc0Jvb2wsdG86KGUsdCk9PmU/XCJ0cnVlXCI6XCJmYWxzZVwifX0sbWFuaWZlc3Q6e2J1aWxkOihlLHQpPT4odC50cnV0aHkmJihlPWUudHJ1dGh5KC4uLnQudHJ1dGh5KSksdC5mYWxzeSYmKGU9ZS5mYWxzeSguLi50LmZhbHN5KSksZSl9LG1lc3NhZ2VzOntcImJvb2xlYW4uYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgYm9vbGVhblwifX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDcpLGk9e2lzRGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGV9fTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJkYXRlXCIsY29lcmNlOntmcm9tOltcIm51bWJlclwiLFwic3RyaW5nXCJdLG1ldGhvZDooZSx7c2NoZW1hOnR9KT0+KHt2YWx1ZTppLnBhcnNlKGUsdC5fZmxhZ3MuZm9ybWF0KXx8ZX0pfSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyLHByZWZzOnN9KXtpZihlIGluc3RhbmNlb2YgRGF0ZSYmIWlzTmFOKGUuZ2V0VGltZSgpKSlyZXR1cm47Y29uc3Qgbj10Ll9mbGFncy5mb3JtYXQ7cmV0dXJuIHMuY29udmVydCYmbiYmXCJzdHJpbmdcIj09dHlwZW9mIGU/e3ZhbHVlOmUsZXJyb3JzOnIoXCJkYXRlLmZvcm1hdFwiLHtmb3JtYXQ6bn0pfTp7dmFsdWU6ZSxlcnJvcnM6cihcImRhdGUuYmFzZVwiKX19LHJ1bGVzOntjb21wYXJlOnttZXRob2Q6ITEsdmFsaWRhdGUoZSx0LHtkYXRlOnJ9LHtuYW1lOnMsb3BlcmF0b3I6bixhcmdzOmF9KXtjb25zdCBpPVwibm93XCI9PT1yP0RhdGUubm93KCk6ci5nZXRUaW1lKCk7cmV0dXJuIG8uY29tcGFyZShlLmdldFRpbWUoKSxpLG4pP2U6dC5lcnJvcihcImRhdGUuXCIrcyx7bGltaXQ6YS5kYXRlLHZhbHVlOmV9KX0sYXJnczpbe25hbWU6XCJkYXRlXCIscmVmOiEwLG5vcm1hbGl6ZTplPT5cIm5vd1wiPT09ZT9lOmkucGFyc2UoZSksYXNzZXJ0OmU9Pm51bGwhPT1lLG1lc3NhZ2U6XCJtdXN0IGhhdmUgYSB2YWxpZCBkYXRlIGZvcm1hdFwifV19LGZvcm1hdDp7bWV0aG9kKGUpe3JldHVybiBzKFtcImlzb1wiLFwiamF2YXNjcmlwdFwiLFwidW5peFwiXS5pbmNsdWRlcyhlKSxcIlVua25vd24gZGF0ZSBmb3JtYXRcIixlKSx0aGlzLiRfc2V0RmxhZyhcImZvcm1hdFwiLGUpfX0sZ3JlYXRlcjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImdyZWF0ZXJcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7ZGF0ZTplfSxvcGVyYXRvcjpcIj5cIn0pfX0saXNvOnttZXRob2QoKXtyZXR1cm4gdGhpcy5mb3JtYXQoXCJpc29cIil9fSxsZXNzOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibGVzc1wiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPFwifSl9fSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7ZGF0ZTplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPj1cIn0pfX0sdGltZXN0YW1wOnttZXRob2QoZT1cImphdmFzY3JpcHRcIil7cmV0dXJuIHMoW1wiamF2YXNjcmlwdFwiLFwidW5peFwiXS5pbmNsdWRlcyhlKSwnXCJ0eXBlXCIgbXVzdCBiZSBvbmUgb2YgXCJqYXZhc2NyaXB0LCB1bml4XCInKSx0aGlzLmZvcm1hdChlKX19fSxjYXN0OntudW1iZXI6e2Zyb206aS5pc0RhdGUsdG86KGUsdCk9PmUuZ2V0VGltZSgpfSxzdHJpbmc6e2Zyb206aS5pc0RhdGUsdG86KGUse3ByZWZzOnR9KT0+YS5kYXRlKGUsdCl9fSxtZXNzYWdlczp7XCJkYXRlLmJhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGRhdGVcIixcImRhdGUuZm9ybWF0XCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBpbiB7bXNnKFwiZGF0ZS5mb3JtYXQuXCIgKyAjZm9ybWF0KSB8fCAjZm9ybWF0fSBmb3JtYXQnLFwiZGF0ZS5ncmVhdGVyXCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gXCJ7eyNsaW1pdH19XCInLFwiZGF0ZS5sZXNzXCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBsZXNzIHRoYW4gXCJ7eyNsaW1pdH19XCInLFwiZGF0ZS5tYXhcIjone3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBcInt7I2xpbWl0fX1cIicsXCJkYXRlLm1pblwiOid7eyNsYWJlbH19IG11c3QgYmUgbGFyZ2VyIHRoYW4gb3IgZXF1YWwgdG8gXCJ7eyNsaW1pdH19XCInLFwiZGF0ZS5mb3JtYXQuaXNvXCI6XCJJU08gODYwMSBkYXRlXCIsXCJkYXRlLmZvcm1hdC5qYXZhc2NyaXB0XCI6XCJ0aW1lc3RhbXAgb3IgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1wiLFwiZGF0ZS5mb3JtYXQudW5peFwiOlwidGltZXN0YW1wIG9yIG51bWJlciBvZiBzZWNvbmRzXCJ9fSksaS5wYXJzZT1mdW5jdGlvbihlLHQpe2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBlO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYoaXNOYU4oZSl8fCFpc0Zpbml0ZShlKSkpcmV0dXJuIG51bGw7aWYoL15cXHMqJC8udGVzdChlKSlyZXR1cm4gbnVsbDtpZihcImlzb1wiPT09dClyZXR1cm4gby5pc0lzb0RhdGUoZSk/aS5kYXRlKGUudG9TdHJpbmcoKSk6bnVsbDtjb25zdCByPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJi9eWystXT9cXGQrKFxcLlxcZCspPyQvLnRlc3QoZSkmJihlPXBhcnNlRmxvYXQoZSkpLHQpe2lmKFwiamF2YXNjcmlwdFwiPT09dClyZXR1cm4gaS5kYXRlKDEqZSk7aWYoXCJ1bml4XCI9PT10KXJldHVybiBpLmRhdGUoMWUzKmUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiByKXJldHVybiBudWxsfXJldHVybiBpLmRhdGUoZSl9LGkuZGF0ZT1mdW5jdGlvbihlKXtjb25zdCB0PW5ldyBEYXRlKGUpO3JldHVybiBpc05hTih0LmdldFRpbWUoKSk/bnVsbDp0fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMjIpO2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImZ1bmN0aW9uXCIscHJvcGVydGllczp7dHlwZW9mOlwiZnVuY3Rpb25cIn0scnVsZXM6e2FyaXR5OnttZXRob2QoZSl7cmV0dXJuIHMoTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+PTAsXCJuIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiYXJpdHlcIixhcmdzOntuOmV9fSl9LHZhbGlkYXRlOihlLHQse246cn0pPT5lLmxlbmd0aD09PXI/ZTp0LmVycm9yKFwiZnVuY3Rpb24uYXJpdHlcIix7bjpyfSl9LGNsYXNzOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoXCJjbGFzc1wiKX0sdmFsaWRhdGU6KGUsdCk9Pi9eXFxzKmNsYXNzXFxzLy50ZXN0KGUudG9TdHJpbmcoKSk/ZTp0LmVycm9yKFwiZnVuY3Rpb24uY2xhc3NcIix7dmFsdWU6ZX0pfSxtaW5Bcml0eTp7bWV0aG9kKGUpe3JldHVybiBzKE51bWJlci5pc1NhZmVJbnRlZ2VyKGUpJiZlPjAsXCJuIG11c3QgYmUgYSBzdHJpY3QgcG9zaXRpdmUgaW50ZWdlclwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pbkFyaXR5XCIsYXJnczp7bjplfX0pfSx2YWxpZGF0ZTooZSx0LHtuOnJ9KT0+ZS5sZW5ndGg+PXI/ZTp0LmVycm9yKFwiZnVuY3Rpb24ubWluQXJpdHlcIix7bjpyfSl9LG1heEFyaXR5OnttZXRob2QoZSl7cmV0dXJuIHMoTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+PTAsXCJuIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWF4QXJpdHlcIixhcmdzOntuOmV9fSl9LHZhbGlkYXRlOihlLHQse246cn0pPT5lLmxlbmd0aDw9cj9lOnQuZXJyb3IoXCJmdW5jdGlvbi5tYXhBcml0eVwiLHtuOnJ9KX19LG1lc3NhZ2VzOntcImZ1bmN0aW9uLmFyaXR5XCI6XCJ7eyNsYWJlbH19IG11c3QgaGF2ZSBhbiBhcml0eSBvZiB7eyNufX1cIixcImZ1bmN0aW9uLmNsYXNzXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBjbGFzc1wiLFwiZnVuY3Rpb24ubWF4QXJpdHlcIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIGFuIGFyaXR5IGxlc3NlciBvciBlcXVhbCB0byB7eyNufX1cIixcImZ1bmN0aW9uLm1pbkFyaXR5XCI6XCJ7eyNsYWJlbH19IG11c3QgaGF2ZSBhbiBhcml0eSBncmVhdGVyIG9yIGVxdWFsIHRvIHt7I259fVwifX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMjApLGE9cig2KSxpPXt9O2UuZXhwb3J0cz1mdW5jdGlvbihlLHQscj17fSl7aWYocyhlJiZcIm9iamVjdFwiPT10eXBlb2YgZSxcIkludmFsaWQgZGVmYXVsdHMgdmFsdWU6IG11c3QgYmUgYW4gb2JqZWN0XCIpLHMoIXR8fCEwPT09dHx8XCJvYmplY3RcIj09dHlwZW9mIHQsXCJJbnZhbGlkIHNvdXJjZSB2YWx1ZTogbXVzdCBiZSB0cnVlLCBmYWxzeSBvciBhbiBvYmplY3RcIikscyhcIm9iamVjdFwiPT10eXBlb2YgcixcIkludmFsaWQgb3B0aW9uczogbXVzdCBiZSBhbiBvYmplY3RcIiksIXQpcmV0dXJuIG51bGw7aWYoci5zaGFsbG93KXJldHVybiBpLmFwcGx5VG9EZWZhdWx0c1dpdGhTaGFsbG93KGUsdCxyKTtjb25zdCBhPW4oZSk7aWYoITA9PT10KXJldHVybiBhO2NvbnN0IGw9dm9pZCAwIT09ci5udWxsT3ZlcnJpZGUmJnIubnVsbE92ZXJyaWRlO3JldHVybiBvKGEsdCx7bnVsbE92ZXJyaWRlOmwsbWVyZ2VBcnJheXM6ITF9KX0saS5hcHBseVRvRGVmYXVsdHNXaXRoU2hhbGxvdz1mdW5jdGlvbihlLHQscil7Y29uc3QgbD1yLnNoYWxsb3c7cyhBcnJheS5pc0FycmF5KGwpLFwiSW52YWxpZCBrZXlzXCIpO2NvbnN0IGM9bmV3IE1hcCx1PSEwPT09dD9udWxsOm5ldyBTZXQ7Zm9yKGxldCByIG9mIGwpe3I9QXJyYXkuaXNBcnJheShyKT9yOnIuc3BsaXQoXCIuXCIpO2NvbnN0IHM9YShlLHIpO3MmJlwib2JqZWN0XCI9PXR5cGVvZiBzP2Muc2V0KHMsdSYmYSh0LHIpfHxzKTp1JiZ1LmFkZChyKX1jb25zdCBmPW4oZSx7fSxjKTtpZighdSlyZXR1cm4gZjtmb3IoY29uc3QgZSBvZiB1KWkucmVhY2hDb3B5KGYsdCxlKTtyZXR1cm4gbyhmLHQse21lcmdlQXJyYXlzOiExLG51bGxPdmVycmlkZTohMX0pfSxpLnJlYWNoQ29weT1mdW5jdGlvbihlLHQscil7Zm9yKGNvbnN0IGUgb2Ygcil7aWYoIShlIGluIHQpKXJldHVybjt0PXRbZV19Y29uc3Qgcz10O2xldCBuPWU7Zm9yKGxldCBlPTA7ZTxyLmxlbmd0aC0xOysrZSl7Y29uc3QgdD1yW2VdO1wib2JqZWN0XCIhPXR5cGVvZiBuW3RdJiYoblt0XT17fSksbj1uW3RdfW5bcltyLmxlbmd0aC0xXV09c319LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj17fTt0LlNvcnRlcj1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuX2l0ZW1zPVtdLHRoaXMubm9kZXM9W119YWRkKGUsdCl7Y29uc3Qgcj1bXS5jb25jYXQoKHQ9dHx8e30pLmJlZm9yZXx8W10pLG49W10uY29uY2F0KHQuYWZ0ZXJ8fFtdKSxvPXQuZ3JvdXB8fFwiP1wiLGE9dC5zb3J0fHwwO3MoIXIuaW5jbHVkZXMobyksXCJJdGVtIGNhbm5vdCBjb21lIGJlZm9yZSBpdHNlbGY6IFwiLmNvbmNhdChvKSkscyghci5pbmNsdWRlcyhcIj9cIiksXCJJdGVtIGNhbm5vdCBjb21lIGJlZm9yZSB1bmFzc29jaWF0ZWQgaXRlbXNcIikscyghbi5pbmNsdWRlcyhvKSxcIkl0ZW0gY2Fubm90IGNvbWUgYWZ0ZXIgaXRzZWxmOiBcIi5jb25jYXQobykpLHMoIW4uaW5jbHVkZXMoXCI/XCIpLFwiSXRlbSBjYW5ub3QgY29tZSBhZnRlciB1bmFzc29jaWF0ZWQgaXRlbXNcIiksQXJyYXkuaXNBcnJheShlKXx8KGU9W2VdKTtmb3IoY29uc3QgdCBvZiBlKXtjb25zdCBlPXtzZXE6dGhpcy5faXRlbXMubGVuZ3RoLHNvcnQ6YSxiZWZvcmU6cixhZnRlcjpuLGdyb3VwOm8sbm9kZTp0fTt0aGlzLl9pdGVtcy5wdXNoKGUpfWNvbnN0IGk9dGhpcy5fc29ydCgpO3JldHVybiBzKGksXCJpdGVtXCIsXCI/XCIhPT1vP1wiYWRkZWQgaW50byBncm91cCBcIi5jb25jYXQobyk6XCJcIixcImNyZWF0ZWQgYSBkZXBlbmRlbmNpZXMgZXJyb3JcIiksdGhpcy5ub2Rlc31tZXJnZShlKXtBcnJheS5pc0FycmF5KGUpfHwoZT1bZV0pO2Zvcihjb25zdCB0IG9mIGUpaWYodClmb3IoY29uc3QgZSBvZiB0Ll9pdGVtcyl0aGlzLl9pdGVtcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sZSkpO3RoaXMuX2l0ZW1zLnNvcnQobi5tZXJnZVNvcnQpO2ZvcihsZXQgZT0wO2U8dGhpcy5faXRlbXMubGVuZ3RoOysrZSl0aGlzLl9pdGVtc1tlXS5zZXE9ZTtjb25zdCB0PXRoaXMuX3NvcnQoKTtyZXR1cm4gcyh0LFwibWVyZ2UgY3JlYXRlZCBhIGRlcGVuZGVuY2llcyBlcnJvclwiKSx0aGlzLm5vZGVzfV9zb3J0KCl7Y29uc3QgZT17fSx0PU9iamVjdC5jcmVhdGUobnVsbCkscj1PYmplY3QuY3JlYXRlKG51bGwpO2Zvcihjb25zdCBzIG9mIHRoaXMuX2l0ZW1zKXtjb25zdCBuPXMuc2VxLG89cy5ncm91cDtyW29dPXJbb118fFtdLHJbb10ucHVzaChuKSxlW25dPXMuYmVmb3JlO2Zvcihjb25zdCBlIG9mIHMuYWZ0ZXIpdFtlXT10W2VdfHxbXSx0W2VdLnB1c2gobil9Zm9yKGNvbnN0IHQgaW4gZSl7Y29uc3Qgcz1bXTtmb3IoY29uc3QgbiBpbiBlW3RdKXtjb25zdCBvPWVbdF1bbl07cltvXT1yW29dfHxbXSxzLnB1c2goLi4ucltvXSl9ZVt0XT1zfWZvcihjb25zdCBzIGluIHQpaWYocltzXSlmb3IoY29uc3QgbiBvZiByW3NdKWVbbl0ucHVzaCguLi50W3NdKTtjb25zdCBzPXt9O2Zvcihjb25zdCB0IGluIGUpe2NvbnN0IHI9ZVt0XTtmb3IoY29uc3QgZSBvZiByKXNbZV09c1tlXXx8W10sc1tlXS5wdXNoKHQpfWNvbnN0IG49e30sbz1bXTtmb3IobGV0IGU9MDtlPHRoaXMuX2l0ZW1zLmxlbmd0aDsrK2Upe2xldCB0PWU7aWYoc1tlXSl7dD1udWxsO2ZvcihsZXQgZT0wO2U8dGhpcy5faXRlbXMubGVuZ3RoOysrZSl7aWYoITA9PT1uW2VdKWNvbnRpbnVlO3NbZV18fChzW2VdPVtdKTtjb25zdCByPXNbZV0ubGVuZ3RoO2xldCBvPTA7Zm9yKGxldCB0PTA7dDxyOysrdCluW3NbZV1bdF1dJiYrK287aWYobz09PXIpe3Q9ZTticmVha319fW51bGwhPT10JiYoblt0XT0hMCxvLnB1c2godCkpfWlmKG8ubGVuZ3RoIT09dGhpcy5faXRlbXMubGVuZ3RoKXJldHVybiExO2NvbnN0IGE9e307Zm9yKGNvbnN0IGUgb2YgdGhpcy5faXRlbXMpYVtlLnNlcV09ZTt0aGlzLl9pdGVtcz1bXSx0aGlzLm5vZGVzPVtdO2Zvcihjb25zdCBlIG9mIG8pe2NvbnN0IHQ9YVtlXTt0aGlzLm5vZGVzLnB1c2godC5ub2RlKSx0aGlzLl9pdGVtcy5wdXNoKHQpfXJldHVybiEwfX0sbi5tZXJnZVNvcnQ9KGUsdCk9PmUuc29ydD09PXQuc29ydD8wOmUuc29ydDx0LnNvcnQ/LTE6MX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz1yKDEpLGE9cig4KSxpPXIoNCksbD17fTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJsaW5rXCIscHJvcGVydGllczp7c2NoZW1hQ2hhaW46ITB9LHRlcm1zOntsaW5rOntpbml0Om51bGwsbWFuaWZlc3Q6XCJzaW5nbGVcIixyZWdpc3RlcjohMX19LGFyZ3M6KGUsdCk9PmUucmVmKHQpLHZhbGlkYXRlKGUse3NjaGVtYTp0LHN0YXRlOnIscHJlZnM6bn0pe3ModC4kX3Rlcm1zLmxpbmssXCJVbmluaXRpYWxpemVkIGxpbmsgc2NoZW1hXCIpO2NvbnN0IG89bC5nZW5lcmF0ZSh0LGUscixuKSxhPXQuJF90ZXJtcy5saW5rWzBdLnJlZjtyZXR1cm4gby4kX3ZhbGlkYXRlKGUsci5uZXN0KG8sXCJsaW5rOlwiLmNvbmNhdChhLmRpc3BsYXksXCI6XCIpLmNvbmNhdChvLnR5cGUpKSxuKX0sZ2VuZXJhdGU6KGUsdCxyLHMpPT5sLmdlbmVyYXRlKGUsdCxyLHMpLHJ1bGVzOntyZWY6e21ldGhvZChlKXtzKCF0aGlzLiRfdGVybXMubGluayxcIkNhbm5vdCByZWluaXRpYWxpemUgc2NoZW1hXCIpLGU9YS5yZWYoZSkscyhcInZhbHVlXCI9PT1lLnR5cGV8fFwibG9jYWxcIj09PWUudHlwZSxcIkludmFsaWQgcmVmZXJlbmNlIHR5cGU6XCIsZS50eXBlKSxzKFwibG9jYWxcIj09PWUudHlwZXx8XCJyb290XCI9PT1lLmFuY2VzdG9yfHxlLmFuY2VzdG9yPjAsXCJMaW5rIGNhbm5vdCByZWZlcmVuY2UgaXRzZWxmXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0LiRfdGVybXMubGluaz1be3JlZjplfV0sdH19LHJlbGF0aXZlOnttZXRob2QoZT0hMCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwicmVsYXRpdmVcIixlKX19fSxvdmVycmlkZXM6e2NvbmNhdChlKXtzKHRoaXMuJF90ZXJtcy5saW5rLFwiVW5pbml0aWFsaXplZCBsaW5rIHNjaGVtYVwiKSxzKG8uaXNTY2hlbWEoZSksXCJJbnZhbGlkIHNjaGVtYSBvYmplY3RcIikscyhcImxpbmtcIiE9PWUudHlwZSxcIkNhbm5vdCBtZXJnZSB0eXBlIGxpbmsgd2l0aCBhbm90aGVyIGxpbmtcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHQuJF90ZXJtcy53aGVuc3x8KHQuJF90ZXJtcy53aGVucz1bXSksdC4kX3Rlcm1zLndoZW5zLnB1c2goe2NvbmNhdDplfSksdC4kX211dGF0ZVJlYnVpbGQoKX19LG1hbmlmZXN0OntidWlsZDooZSx0KT0+KHModC5saW5rLFwiSW52YWxpZCBsaW5rIGRlc2NyaXB0aW9uIG1pc3NpbmcgbGlua1wiKSxlLnJlZih0LmxpbmspKX19KSxsLmdlbmVyYXRlPWZ1bmN0aW9uKGUsdCxyLHMpe2xldCBuPXIubWFpbnN0YXkubGlua3MuZ2V0KGUpO2lmKG4pcmV0dXJuIG4uX2dlbmVyYXRlKHQscixzKS5zY2hlbWE7Y29uc3Qgbz1lLiRfdGVybXMubGlua1swXS5yZWYse3BlcnNwZWN0aXZlOmEscGF0aDppfT1sLnBlcnNwZWN0aXZlKG8scik7bC5hc3NlcnQoYSxcIndoaWNoIGlzIG91dHNpZGUgb2Ygc2NoZW1hIGJvdW5kYXJpZXNcIixvLGUscixzKTt0cnl7bj1pLmxlbmd0aD9hLiRfcmVhY2goaSk6YX1jYXRjaCh0KXtsLmFzc2VydCghMSxcInRvIG5vbi1leGlzdGluZyBzY2hlbWFcIixvLGUscixzKX1yZXR1cm4gbC5hc3NlcnQoXCJsaW5rXCIhPT1uLnR5cGUsXCJ3aGljaCBpcyBhbm90aGVyIGxpbmtcIixvLGUscixzKSxlLl9mbGFncy5yZWxhdGl2ZXx8ci5tYWluc3RheS5saW5rcy5zZXQoZSxuKSxuLl9nZW5lcmF0ZSh0LHIscykuc2NoZW1hfSxsLnBlcnNwZWN0aXZlPWZ1bmN0aW9uKGUsdCl7aWYoXCJsb2NhbFwiPT09ZS50eXBlKXtmb3IoY29uc3R7c2NoZW1hOnIsa2V5OnN9b2YgdC5zY2hlbWFzKXtpZigoci5fZmxhZ3MuaWR8fHMpPT09ZS5wYXRoWzBdKXJldHVybntwZXJzcGVjdGl2ZTpyLHBhdGg6ZS5wYXRoLnNsaWNlKDEpfTtpZihyLiRfdGVybXMuc2hhcmVkKWZvcihjb25zdCB0IG9mIHIuJF90ZXJtcy5zaGFyZWQpaWYodC5fZmxhZ3MuaWQ9PT1lLnBhdGhbMF0pcmV0dXJue3BlcnNwZWN0aXZlOnQscGF0aDplLnBhdGguc2xpY2UoMSl9fXJldHVybntwZXJzcGVjdGl2ZTpudWxsLHBhdGg6bnVsbH19cmV0dXJuXCJyb290XCI9PT1lLmFuY2VzdG9yP3twZXJzcGVjdGl2ZTp0LnNjaGVtYXNbdC5zY2hlbWFzLmxlbmd0aC0xXS5zY2hlbWEscGF0aDplLnBhdGh9OntwZXJzcGVjdGl2ZTp0LnNjaGVtYXNbZS5hbmNlc3Rvcl0mJnQuc2NoZW1hc1tlLmFuY2VzdG9yXS5zY2hlbWEscGF0aDplLnBhdGh9fSxsLmFzc2VydD1mdW5jdGlvbihlLHQscixuLG8sYSl7ZXx8cyghMSwnXCInLmNvbmNhdChpLmxhYmVsKG4uX2ZsYWdzLG8sYSksJ1wiIGNvbnRhaW5zIGxpbmsgcmVmZXJlbmNlIFwiJykuY29uY2F0KHIuZGlzcGxheSwnXCIgJykuY29uY2F0KHQpKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89cigxKSxhPXtudW1iZXJSeDovXlxccypbKy1dPyg/Oig/OlxcZCsoPzpcXC5cXGQqKT8pfCg/OlxcLlxcZCspKSg/OmUoWystXT9cXGQrKSk/XFxzKiQvaSxwcmVjaXNpb25SeDovKD86XFwuKFxcZCspKT8oPzpbZUVdKFsrLV0/XFxkKykpPyQvfTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJudW1iZXJcIixmbGFnczp7dW5zYWZlOntkZWZhdWx0OiExfX0sY29lcmNlOntmcm9tOlwic3RyaW5nXCIsbWV0aG9kKGUse3NjaGVtYTp0LGVycm9yOnJ9KXtjb25zdCBzPWUubWF0Y2goYS5udW1iZXJSeCk7aWYoIXMpcmV0dXJuO2U9ZS50cmltKCk7Y29uc3Qgbj17dmFsdWU6cGFyc2VGbG9hdChlKX07aWYoMD09PW4udmFsdWUmJihuLnZhbHVlPTApLCF0Ll9mbGFncy51bnNhZmUpaWYoZS5tYXRjaCgvZS9pKSl7aWYoYS5ub3JtYWxpemVFeHBvbmVudChcIlwiLmNvbmNhdChuLnZhbHVlL01hdGgucG93KDEwLHNbMV0pLFwiZVwiKS5jb25jYXQoc1sxXSkpIT09YS5ub3JtYWxpemVFeHBvbmVudChlKSlyZXR1cm4gbi5lcnJvcnM9cihcIm51bWJlci51bnNhZmVcIiksbn1lbHNle2NvbnN0IHQ9bi52YWx1ZS50b1N0cmluZygpO2lmKHQubWF0Y2goL2UvaSkpcmV0dXJuIG47aWYodCE9PWEubm9ybWFsaXplRGVjaW1hbChlKSlyZXR1cm4gbi5lcnJvcnM9cihcIm51bWJlci51bnNhZmVcIiksbn1yZXR1cm4gbn19LHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIscHJlZnM6c30pe2lmKGU9PT0xLzB8fGU9PT0tMS8wKXJldHVybnt2YWx1ZTplLGVycm9yczpyKFwibnVtYmVyLmluZmluaXR5XCIpfTtpZighby5pc051bWJlcihlKSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6cihcIm51bWJlci5iYXNlXCIpfTtjb25zdCBuPXt2YWx1ZTplfTtpZihzLmNvbnZlcnQpe2NvbnN0IGU9dC4kX2dldFJ1bGUoXCJwcmVjaXNpb25cIik7aWYoZSl7Y29uc3QgdD1NYXRoLnBvdygxMCxlLmFyZ3MubGltaXQpO24udmFsdWU9TWF0aC5yb3VuZChuLnZhbHVlKnQpL3R9fXJldHVybiAwPT09bi52YWx1ZSYmKG4udmFsdWU9MCksIXQuX2ZsYWdzLnVuc2FmZSYmKGU+TnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJ8fGU8TnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIpJiYobi5lcnJvcnM9cihcIm51bWJlci51bnNhZmVcIikpLG59LHJ1bGVzOntjb21wYXJlOnttZXRob2Q6ITEsdmFsaWRhdGU6KGUsdCx7bGltaXQ6cn0se25hbWU6cyxvcGVyYXRvcjpuLGFyZ3M6YX0pPT5vLmNvbXBhcmUoZSxyLG4pP2U6dC5lcnJvcihcIm51bWJlci5cIitzLHtsaW1pdDphLmxpbWl0LHZhbHVlOmV9KSxhcmdzOlt7bmFtZTpcImxpbWl0XCIscmVmOiEwLGFzc2VydDpvLmlzTnVtYmVyLG1lc3NhZ2U6XCJtdXN0IGJlIGEgbnVtYmVyXCJ9XX0sZ3JlYXRlcjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImdyZWF0ZXJcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI+XCJ9KX19LGludGVnZXI6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImludGVnZXJcIil9LHZhbGlkYXRlOihlLHQpPT5NYXRoLnRydW5jKGUpLWU9PTA/ZTp0LmVycm9yKFwibnVtYmVyLmludGVnZXJcIil9LGxlc3M6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZXNzXCIsbWV0aG9kOlwiY29tcGFyZVwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPFwifSl9fSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI8PVwifSl9fSxtaW46e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtaW5cIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI+PVwifSl9fSxtdWx0aXBsZTp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm11bHRpcGxlXCIsYXJnczp7YmFzZTplfX0pfSx2YWxpZGF0ZTooZSx0LHtiYXNlOnJ9LHMpPT5lJXI9PTA/ZTp0LmVycm9yKFwibnVtYmVyLm11bHRpcGxlXCIse211bHRpcGxlOnMuYXJncy5iYXNlLHZhbHVlOmV9KSxhcmdzOlt7bmFtZTpcImJhc2VcIixyZWY6ITAsYXNzZXJ0OmU9PlwibnVtYmVyXCI9PXR5cGVvZiBlJiZpc0Zpbml0ZShlKSYmZT4wLG1lc3NhZ2U6XCJtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCJ9XSxtdWx0aTohMH0sbmVnYXRpdmU6e21ldGhvZCgpe3JldHVybiB0aGlzLnNpZ24oXCJuZWdhdGl2ZVwiKX19LHBvcnQ6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInBvcnRcIil9LHZhbGlkYXRlOihlLHQpPT5OdW1iZXIuaXNTYWZlSW50ZWdlcihlKSYmZT49MCYmZTw9NjU1MzU/ZTp0LmVycm9yKFwibnVtYmVyLnBvcnRcIil9LHBvc2l0aXZlOnttZXRob2QoKXtyZXR1cm4gdGhpcy5zaWduKFwicG9zaXRpdmVcIil9fSxwcmVjaXNpb246e21ldGhvZChlKXtyZXR1cm4gcyhOdW1iZXIuaXNTYWZlSW50ZWdlcihlKSxcImxpbWl0IG11c3QgYmUgYW4gaW50ZWdlclwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcInByZWNpc2lvblwiLGFyZ3M6e2xpbWl0OmV9fSl9LHZhbGlkYXRlKGUsdCx7bGltaXQ6cn0pe2NvbnN0IHM9ZS50b1N0cmluZygpLm1hdGNoKGEucHJlY2lzaW9uUngpO3JldHVybiBNYXRoLm1heCgoc1sxXT9zWzFdLmxlbmd0aDowKS0oc1syXT9wYXJzZUludChzWzJdLDEwKTowKSwwKTw9cj9lOnQuZXJyb3IoXCJudW1iZXIucHJlY2lzaW9uXCIse2xpbWl0OnIsdmFsdWU6ZX0pfSxjb252ZXJ0OiEwfSxzaWduOnttZXRob2QoZSl7cmV0dXJuIHMoW1wibmVnYXRpdmVcIixcInBvc2l0aXZlXCJdLmluY2x1ZGVzKGUpLFwiSW52YWxpZCBzaWduXCIsZSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJzaWduXCIsYXJnczp7c2lnbjplfX0pfSx2YWxpZGF0ZTooZSx0LHtzaWduOnJ9KT0+XCJuZWdhdGl2ZVwiPT09ciYmZTwwfHxcInBvc2l0aXZlXCI9PT1yJiZlPjA/ZTp0LmVycm9yKFwibnVtYmVyLlwiLmNvbmNhdChyKSl9LHVuc2FmZTp7bWV0aG9kKGU9ITApe3JldHVybiBzKFwiYm9vbGVhblwiPT10eXBlb2YgZSxcImVuYWJsZWQgbXVzdCBiZSBhIGJvb2xlYW5cIiksdGhpcy4kX3NldEZsYWcoXCJ1bnNhZmVcIixlKX19fSxjYXN0OntzdHJpbmc6e2Zyb206ZT0+XCJudW1iZXJcIj09dHlwZW9mIGUsdG86KGUsdCk9PmUudG9TdHJpbmcoKX19LG1lc3NhZ2VzOntcIm51bWJlci5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBudW1iZXJcIixcIm51bWJlci5ncmVhdGVyXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgZ3JlYXRlciB0aGFuIHt7I2xpbWl0fX1cIixcIm51bWJlci5pbmZpbml0eVwiOlwie3sjbGFiZWx9fSBjYW5ub3QgYmUgaW5maW5pdHlcIixcIm51bWJlci5pbnRlZ2VyXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYW4gaW50ZWdlclwiLFwibnVtYmVyLmxlc3NcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBsZXNzIHRoYW4ge3sjbGltaXR9fVwiLFwibnVtYmVyLm1heFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19XCIsXCJudW1iZXIubWluXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgbGFyZ2VyIHRoYW4gb3IgZXF1YWwgdG8ge3sjbGltaXR9fVwiLFwibnVtYmVyLm11bHRpcGxlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBtdWx0aXBsZSBvZiB7eyNtdWx0aXBsZX19XCIsXCJudW1iZXIubmVnYXRpdmVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIG5lZ2F0aXZlIG51bWJlclwiLFwibnVtYmVyLnBvcnRcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHBvcnRcIixcIm51bWJlci5wb3NpdGl2ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIsXCJudW1iZXIucHJlY2lzaW9uXCI6XCJ7eyNsYWJlbH19IG11c3QgaGF2ZSBubyBtb3JlIHRoYW4ge3sjbGltaXR9fSBkZWNpbWFsIHBsYWNlc1wiLFwibnVtYmVyLnVuc2FmZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgc2FmZSBudW1iZXJcIn19KSxhLm5vcm1hbGl6ZUV4cG9uZW50PWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL0UvLFwiZVwiKS5yZXBsYWNlKC9cXC4oXFxkKlsxLTldKT8wK2UvLFwiLiQxZVwiKS5yZXBsYWNlKC9cXC5lLyxcImVcIikucmVwbGFjZSgvZVxcKy8sXCJlXCIpLnJlcGxhY2UoL15cXCsvLFwiXCIpLnJlcGxhY2UoL14oLT8pMCsoWzEtOV0pLyxcIiQxJDJcIil9LGEubm9ybWFsaXplRGVjaW1hbD1mdW5jdGlvbihlKXtyZXR1cm4oZT1lLnJlcGxhY2UoL15cXCsvLFwiXCIpLnJlcGxhY2UoL1xcLjArJC8sXCJcIikucmVwbGFjZSgvXigtPylcXC4oW15cXC5dKikkLyxcIiQxMC4kMlwiKS5yZXBsYWNlKC9eKC0/KTArKFsxLTldKS8sXCIkMSQyXCIpKS5pbmNsdWRlcyhcIi5cIikmJmUuZW5kc1dpdGgoXCIwXCIpJiYoZT1lLnJlcGxhY2UoLzArJC8sXCJcIikpLFwiLTBcIj09PWU/XCIwXCI6ZX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMjIpO2UuZXhwb3J0cz1zLmV4dGVuZCh7dHlwZTpcIm9iamVjdFwiLGNhc3Q6e21hcDp7ZnJvbTplPT5lJiZcIm9iamVjdFwiPT10eXBlb2YgZSx0bzooZSx0KT0+bmV3IE1hcChPYmplY3QuZW50cmllcyhlKSl9fX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKHM9cy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIscyl9cmV0dXJuIHJ9ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9zKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7byhlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6cyhPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBvKGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1jb25zdCBhPXIoMCksaT1yKDIzKSxsPXIoNDkpLGM9cig1MCksdT1yKDI3KSxmPXIoNTEpLG09cigyNiksaD1yKDMpLGQ9cigxKSxwPXt0bGRzOmYgaW5zdGFuY2VvZiBTZXQmJnt0bGRzOnthbGxvdzpmLGRlbnk6bnVsbH19LGJhc2U2NFJlZ2V4Ont0cnVlOnt0cnVlOi9eKD86W1xcd1xcLV17Mn1bXFx3XFwtXXsyfSkqKD86W1xcd1xcLV17Mn09PXxbXFx3XFwtXXszfT0pPyQvLGZhbHNlOi9eKD86W0EtWmEtejAtOStcXC9dezJ9W0EtWmEtejAtOStcXC9dezJ9KSooPzpbQS1aYS16MC05K1xcL117Mn09PXxbQS1aYS16MC05K1xcL117M309KT8kL30sZmFsc2U6e3RydWU6L14oPzpbXFx3XFwtXXsyfVtcXHdcXC1dezJ9KSooPzpbXFx3XFwtXXsyfSg9PSk/fFtcXHdcXC1dezN9PT8pPyQvLGZhbHNlOi9eKD86W0EtWmEtejAtOStcXC9dezJ9W0EtWmEtejAtOStcXC9dezJ9KSooPzpbQS1aYS16MC05K1xcL117Mn0oPT0pP3xbQS1aYS16MC05K1xcL117M309Pyk/JC99fSxkYXRhVXJpUmVnZXg6L15kYXRhOltcXHcrLi1dK1xcL1tcXHcrLi1dKzsoKGNoYXJzZXQ9W1xcdy1dK3xiYXNlNjQpLCk/KC4qKSQvLGhleFJlZ2V4Oi9eW2EtZjAtOV0rJC9pLGlwUmVnZXg6Yy5yZWdleCgpLnJlZ2V4LGlzb0R1cmF0aW9uUmVnZXg6L15QKD8hJCkoXFxkK1kpPyhcXGQrTSk/KFxcZCtXKT8oXFxkK0QpPyhUKD89XFxkKShcXGQrSCk/KFxcZCtNKT8oXFxkK1MpPyk/JC8sZ3VpZEJyYWNrZXRzOntcIntcIjpcIn1cIixcIltcIjpcIl1cIixcIihcIjpcIilcIixcIlwiOlwiXCJ9LGd1aWRWZXJzaW9uczp7dXVpZHYxOlwiMVwiLHV1aWR2MjpcIjJcIix1dWlkdjM6XCIzXCIsdXVpZHY0OlwiNFwiLHV1aWR2NTpcIjVcIn0sY2lkclByZXNlbmNlczpbXCJyZXF1aXJlZFwiLFwib3B0aW9uYWxcIixcImZvcmJpZGRlblwiXSxub3JtYWxpemF0aW9uRm9ybXM6W1wiTkZDXCIsXCJORkRcIixcIk5GS0NcIixcIk5GS0RcIl19O2UuZXhwb3J0cz1oLmV4dGVuZCh7dHlwZTpcInN0cmluZ1wiLGZsYWdzOntpbnNlbnNpdGl2ZTp7ZGVmYXVsdDohMX0sdHJ1bmNhdGU6e2RlZmF1bHQ6ITF9fSx0ZXJtczp7cmVwbGFjZW1lbnRzOntpbml0Om51bGx9fSxjb2VyY2U6e2Zyb206XCJzdHJpbmdcIixtZXRob2QoZSx7c2NoZW1hOnQsc3RhdGU6cixwcmVmczpzfSl7Y29uc3Qgbj10LiRfZ2V0UnVsZShcIm5vcm1hbGl6ZVwiKTtuJiYoZT1lLm5vcm1hbGl6ZShuLmFyZ3MuZm9ybSkpO2NvbnN0IG89dC4kX2dldFJ1bGUoXCJjYXNlXCIpO28mJihlPVwidXBwZXJcIj09PW8uYXJncy5kaXJlY3Rpb24/ZS50b0xvY2FsZVVwcGVyQ2FzZSgpOmUudG9Mb2NhbGVMb3dlckNhc2UoKSk7Y29uc3QgYT10LiRfZ2V0UnVsZShcInRyaW1cIik7aWYoYSYmYS5hcmdzLmVuYWJsZWQmJihlPWUudHJpbSgpKSx0LiRfdGVybXMucmVwbGFjZW1lbnRzKWZvcihjb25zdCByIG9mIHQuJF90ZXJtcy5yZXBsYWNlbWVudHMpZT1lLnJlcGxhY2Uoci5wYXR0ZXJuLHIucmVwbGFjZW1lbnQpO2NvbnN0IGk9dC4kX2dldFJ1bGUoXCJoZXhcIik7aWYoaSYmaS5hcmdzLm9wdGlvbnMuYnl0ZUFsaWduZWQmJmUubGVuZ3RoJTIhPTAmJihlPVwiMFwiLmNvbmNhdChlKSksdC4kX2dldFJ1bGUoXCJpc29EYXRlXCIpKXtjb25zdCB0PXAuaXNvRGF0ZShlKTt0JiYoZT10KX1pZih0Ll9mbGFncy50cnVuY2F0ZSl7Y29uc3Qgbj10LiRfZ2V0UnVsZShcIm1heFwiKTtpZihuKXtsZXQgbz1uLmFyZ3MubGltaXQ7aWYoZC5pc1Jlc29sdmFibGUobykmJihvPW8ucmVzb2x2ZShlLHIscyksIWQubGltaXQobykpKXJldHVybnt2YWx1ZTplLGVycm9yczp0LiRfY3JlYXRlRXJyb3IoXCJhbnkucmVmXCIsbyx7cmVmOm4uYXJncy5saW1pdCxhcmc6XCJsaW1pdFwiLHJlYXNvbjpcIm11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCJ9LHIscyl9O2U9ZS5zbGljZSgwLG8pfX1yZXR1cm57dmFsdWU6ZX19fSx2YWxpZGF0ZTooZSx7ZXJyb3I6dH0pPT5cInN0cmluZ1wiIT10eXBlb2YgZT97dmFsdWU6ZSxlcnJvcnM6dChcInN0cmluZy5iYXNlXCIpfTpcIlwiPT09ZT97dmFsdWU6ZSxlcnJvcnM6dChcInN0cmluZy5lbXB0eVwiKX06dm9pZCAwLHJ1bGVzOnthbHBoYW51bTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiYWxwaGFudW1cIil9LHZhbGlkYXRlOihlLHQpPT4vXlthLXpBLVowLTldKyQvLnRlc3QoZSk/ZTp0LmVycm9yKFwic3RyaW5nLmFscGhhbnVtXCIpfSxiYXNlNjQ6e21ldGhvZChlPXt9KXtyZXR1cm4gZC5hc3NlcnRPcHRpb25zKGUsW1wicGFkZGluZ1JlcXVpcmVkXCIsXCJ1cmxTYWZlXCJdKSxlPW4oe3VybFNhZmU6ITEscGFkZGluZ1JlcXVpcmVkOiEwfSxlKSxhKFwiYm9vbGVhblwiPT10eXBlb2YgZS5wYWRkaW5nUmVxdWlyZWQsXCJwYWRkaW5nUmVxdWlyZWQgbXVzdCBiZSBib29sZWFuXCIpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLnVybFNhZmUsXCJ1cmxTYWZlIG11c3QgYmUgYm9vbGVhblwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImJhc2U2NFwiLGFyZ3M6e29wdGlvbnM6ZX19KX0sdmFsaWRhdGU6KGUsdCx7b3B0aW9uczpyfSk9PnAuYmFzZTY0UmVnZXhbci5wYWRkaW5nUmVxdWlyZWRdW3IudXJsU2FmZV0udGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuYmFzZTY0XCIpfSxjYXNlOnttZXRob2QoZSl7cmV0dXJuIGEoW1wibG93ZXJcIixcInVwcGVyXCJdLmluY2x1ZGVzKGUpLFwiSW52YWxpZCBjYXNlOlwiLGUpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiY2FzZVwiLGFyZ3M6e2RpcmVjdGlvbjplfX0pfSx2YWxpZGF0ZTooZSx0LHtkaXJlY3Rpb246cn0pPT5cImxvd2VyXCI9PT1yJiZlPT09ZS50b0xvY2FsZUxvd2VyQ2FzZSgpfHxcInVwcGVyXCI9PT1yJiZlPT09ZS50b0xvY2FsZVVwcGVyQ2FzZSgpP2U6dC5lcnJvcihcInN0cmluZy5cIi5jb25jYXQocixcImNhc2VcIikpLGNvbnZlcnQ6ITB9LGNyZWRpdENhcmQ6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImNyZWRpdENhcmRcIil9LHZhbGlkYXRlKGUsdCl7bGV0IHI9ZS5sZW5ndGgscz0wLG49MTtmb3IoO3ItLTspe2NvbnN0IHQ9ZS5jaGFyQXQocikqbjtzKz10LTkqKHQ+OSksbl49M31yZXR1cm4gcz4wJiZzJTEwPT0wP2U6dC5lcnJvcihcInN0cmluZy5jcmVkaXRDYXJkXCIpfX0sZGF0YVVyaTp7bWV0aG9kKGU9e30pe3JldHVybiBkLmFzc2VydE9wdGlvbnMoZSxbXCJwYWRkaW5nUmVxdWlyZWRcIl0pLGU9bih7cGFkZGluZ1JlcXVpcmVkOiEwfSxlKSxhKFwiYm9vbGVhblwiPT10eXBlb2YgZS5wYWRkaW5nUmVxdWlyZWQsXCJwYWRkaW5nUmVxdWlyZWQgbXVzdCBiZSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZGF0YVVyaVwiLGFyZ3M6e29wdGlvbnM6ZX19KX0sdmFsaWRhdGUoZSx0LHtvcHRpb25zOnJ9KXtjb25zdCBzPWUubWF0Y2gocC5kYXRhVXJpUmVnZXgpO2lmKHMpe2lmKCFzWzJdKXJldHVybiBlO2lmKFwiYmFzZTY0XCIhPT1zWzJdKXJldHVybiBlO2lmKHAuYmFzZTY0UmVnZXhbci5wYWRkaW5nUmVxdWlyZWRdLmZhbHNlLnRlc3Qoc1szXSkpcmV0dXJuIGV9cmV0dXJuIHQuZXJyb3IoXCJzdHJpbmcuZGF0YVVyaVwiKX19LGRvbWFpbjp7bWV0aG9kKGUpe2UmJmQuYXNzZXJ0T3B0aW9ucyhlLFtcImFsbG93VW5pY29kZVwiLFwibWluRG9tYWluU2VnbWVudHNcIixcInRsZHNcIl0pO2NvbnN0IHQ9cC5hZGRyZXNzT3B0aW9ucyhlKTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJkb21haW5cIixhcmdzOntvcHRpb25zOmV9LGFkZHJlc3M6dH0pfSx2YWxpZGF0ZTooZSx0LHIse2FkZHJlc3M6c30pPT5pLmlzVmFsaWQoZSxzKT9lOnQuZXJyb3IoXCJzdHJpbmcuZG9tYWluXCIpfSxlbWFpbDp7bWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcImFsbG93VW5pY29kZVwiLFwiaWdub3JlTGVuZ3RoXCIsXCJtaW5Eb21haW5TZWdtZW50c1wiLFwibXVsdGlwbGVcIixcInNlcGFyYXRvclwiLFwidGxkc1wiXSksYSh2b2lkIDA9PT1lLm11bHRpcGxlfHxcImJvb2xlYW5cIj09dHlwZW9mIGUubXVsdGlwbGUsXCJtdWx0aXBsZSBvcHRpb24gbXVzdCBiZSBhbiBib29sZWFuXCIpO2NvbnN0IHQ9cC5hZGRyZXNzT3B0aW9ucyhlKSxyPW5ldyBSZWdFeHAoXCJcXFxccypbXCIuY29uY2F0KGUuc2VwYXJhdG9yP3UoZS5zZXBhcmF0b3IpOlwiLFwiLFwiXVxcXFxzKlwiKSk7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZW1haWxcIixhcmdzOntvcHRpb25zOmV9LHJlZ2V4OnIsYWRkcmVzczp0fSl9LHZhbGlkYXRlKGUsdCx7b3B0aW9uczpyfSx7cmVnZXg6cyxhZGRyZXNzOm59KXtjb25zdCBvPXIubXVsdGlwbGU/ZS5zcGxpdChzKTpbZV0sYT1bXTtmb3IoY29uc3QgZSBvZiBvKWwuaXNWYWxpZChlLG4pfHxhLnB1c2goZSk7cmV0dXJuIGEubGVuZ3RoP3QuZXJyb3IoXCJzdHJpbmcuZW1haWxcIix7dmFsdWU6ZSxpbnZhbGlkczphfSk6ZX19LGd1aWQ6e2FsaWFzOlwidXVpZFwiLG1ldGhvZChlPXt9KXtkLmFzc2VydE9wdGlvbnMoZSxbXCJ2ZXJzaW9uXCJdKTtsZXQgdD1cIlwiO2lmKGUudmVyc2lvbil7Y29uc3Qgcj1bXS5jb25jYXQoZS52ZXJzaW9uKTthKHIubGVuZ3RoPj0xLFwidmVyc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3QgMSB2YWxpZCB2ZXJzaW9uIHNwZWNpZmllZFwiKTtjb25zdCBzPW5ldyBTZXQ7Zm9yKGxldCBlPTA7ZTxyLmxlbmd0aDsrK2Upe2NvbnN0IG49cltlXTthKFwic3RyaW5nXCI9PXR5cGVvZiBuLFwidmVyc2lvbiBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgYSBzdHJpbmdcIik7Y29uc3Qgbz1wLmd1aWRWZXJzaW9uc1tuLnRvTG93ZXJDYXNlKCldO2EobyxcInZlcnNpb24gYXQgcG9zaXRpb24gXCIrZStcIiBtdXN0IGJlIG9uZSBvZiBcIitPYmplY3Qua2V5cyhwLmd1aWRWZXJzaW9ucykuam9pbihcIiwgXCIpKSxhKCFzLmhhcyhvKSxcInZlcnNpb24gYXQgcG9zaXRpb24gXCIrZStcIiBtdXN0IG5vdCBiZSBhIGR1cGxpY2F0ZVwiKSx0Kz1vLHMuYWRkKG8pfX1jb25zdCByPW5ldyBSZWdFeHAoXCJeKFtcXFxcW3tcXFxcKF0/KVswLTlBLUZdezh9KFs6LV0/KVswLTlBLUZdezR9XFxcXDI/W1wiLmNvbmNhdCh0fHxcIjAtOUEtRlwiLFwiXVswLTlBLUZdezN9XFxcXDI/W1wiKS5jb25jYXQodD9cIjg5QUJcIjpcIjAtOUEtRlwiLFwiXVswLTlBLUZdezN9XFxcXDI/WzAtOUEtRl17MTJ9KFtcXFxcXX1cXFxcKV0/KSRcIiksXCJpXCIpO3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImd1aWRcIixhcmdzOntvcHRpb25zOmV9LHJlZ2V4OnJ9KX0sdmFsaWRhdGUoZSx0LHIse3JlZ2V4OnN9KXtjb25zdCBuPXMuZXhlYyhlKTtyZXR1cm4gbj9wLmd1aWRCcmFja2V0c1tuWzFdXSE9PW5bbi5sZW5ndGgtMV0/dC5lcnJvcihcInN0cmluZy5ndWlkXCIpOmU6dC5lcnJvcihcInN0cmluZy5ndWlkXCIpfX0saGV4OnttZXRob2QoZT17fSl7cmV0dXJuIGQuYXNzZXJ0T3B0aW9ucyhlLFtcImJ5dGVBbGlnbmVkXCJdKSxlPW4oe2J5dGVBbGlnbmVkOiExfSxlKSxhKFwiYm9vbGVhblwiPT10eXBlb2YgZS5ieXRlQWxpZ25lZCxcImJ5dGVBbGlnbmVkIG11c3QgYmUgYm9vbGVhblwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImhleFwiLGFyZ3M6e29wdGlvbnM6ZX19KX0sdmFsaWRhdGU6KGUsdCx7b3B0aW9uczpyfSk9PnAuaGV4UmVnZXgudGVzdChlKT9yLmJ5dGVBbGlnbmVkJiZlLmxlbmd0aCUyIT0wP3QuZXJyb3IoXCJzdHJpbmcuaGV4QWxpZ25cIik6ZTp0LmVycm9yKFwic3RyaW5nLmhleFwiKX0saG9zdG5hbWU6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImhvc3RuYW1lXCIpfSx2YWxpZGF0ZTooZSx0KT0+aS5pc1ZhbGlkKGUse21pbkRvbWFpblNlZ21lbnRzOjF9KXx8cC5pcFJlZ2V4LnRlc3QoZSk/ZTp0LmVycm9yKFwic3RyaW5nLmhvc3RuYW1lXCIpfSxpbnNlbnNpdGl2ZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwiaW5zZW5zaXRpdmVcIiwhMCl9fSxpcDp7bWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcImNpZHJcIixcInZlcnNpb25cIl0pO2NvbnN0e2NpZHI6dCx2ZXJzaW9uczpyLHJlZ2V4OnN9PWMucmVnZXgoZSksbj1lLnZlcnNpb24/cjp2b2lkIDA7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaXBcIixhcmdzOntvcHRpb25zOntjaWRyOnQsdmVyc2lvbjpufX0scmVnZXg6c30pfSx2YWxpZGF0ZTooZSx0LHtvcHRpb25zOnJ9LHtyZWdleDpzfSk9PnMudGVzdChlKT9lOnIudmVyc2lvbj90LmVycm9yKFwic3RyaW5nLmlwVmVyc2lvblwiLHt2YWx1ZTplLGNpZHI6ci5jaWRyLHZlcnNpb246ci52ZXJzaW9ufSk6dC5lcnJvcihcInN0cmluZy5pcFwiLHt2YWx1ZTplLGNpZHI6ci5jaWRyfSl9LGlzb0RhdGU6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImlzb0RhdGVcIil9LHZhbGlkYXRlOihlLHtlcnJvcjp0fSk9PnAuaXNvRGF0ZShlKT9lOnQoXCJzdHJpbmcuaXNvRGF0ZVwiKX0saXNvRHVyYXRpb246e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImlzb0R1cmF0aW9uXCIpfSx2YWxpZGF0ZTooZSx0KT0+cC5pc29EdXJhdGlvblJlZ2V4LnRlc3QoZSk/ZTp0LmVycm9yKFwic3RyaW5nLmlzb0R1cmF0aW9uXCIpfSxsZW5ndGg6e21ldGhvZChlLHQpe3JldHVybiBwLmxlbmd0aCh0aGlzLFwibGVuZ3RoXCIsZSxcIj1cIix0KX0sdmFsaWRhdGUoZSx0LHtsaW1pdDpyLGVuY29kaW5nOnN9LHtuYW1lOm4sb3BlcmF0b3I6byxhcmdzOmF9KXtjb25zdCBpPSFzJiZlLmxlbmd0aDtyZXR1cm4gZC5jb21wYXJlKGkscixvKT9lOnQuZXJyb3IoXCJzdHJpbmcuXCIrbix7bGltaXQ6YS5saW1pdCx2YWx1ZTplLGVuY29kaW5nOnN9KX0sYXJnczpbe25hbWU6XCJsaW1pdFwiLHJlZjohMCxhc3NlcnQ6ZC5saW1pdCxtZXNzYWdlOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn0sXCJlbmNvZGluZ1wiXX0sbG93ZXJjYXNlOnttZXRob2QoKXtyZXR1cm4gdGhpcy5jYXNlKFwibG93ZXJcIil9fSxtYXg6e21ldGhvZChlLHQpe3JldHVybiBwLmxlbmd0aCh0aGlzLFwibWF4XCIsZSxcIjw9XCIsdCl9LGFyZ3M6W1wibGltaXRcIixcImVuY29kaW5nXCJdfSxtaW46e21ldGhvZChlLHQpe3JldHVybiBwLmxlbmd0aCh0aGlzLFwibWluXCIsZSxcIj49XCIsdCl9LGFyZ3M6W1wibGltaXRcIixcImVuY29kaW5nXCJdfSxub3JtYWxpemU6e21ldGhvZChlPVwiTkZDXCIpe3JldHVybiBhKHAubm9ybWFsaXphdGlvbkZvcm1zLmluY2x1ZGVzKGUpLFwibm9ybWFsaXphdGlvbiBmb3JtIG11c3QgYmUgb25lIG9mIFwiK3Aubm9ybWFsaXphdGlvbkZvcm1zLmpvaW4oXCIsIFwiKSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJub3JtYWxpemVcIixhcmdzOntmb3JtOmV9fSl9LHZhbGlkYXRlOihlLHtlcnJvcjp0fSx7Zm9ybTpyfSk9PmU9PT1lLm5vcm1hbGl6ZShyKT9lOnQoXCJzdHJpbmcubm9ybWFsaXplXCIse3ZhbHVlOmUsZm9ybTpyfSksY29udmVydDohMH0scGF0dGVybjp7YWxpYXM6XCJyZWdleFwiLG1ldGhvZChlLHQ9e30pe2EoZSBpbnN0YW5jZW9mIFJlZ0V4cCxcInJlZ2V4IG11c3QgYmUgYSBSZWdFeHBcIiksYSghZS5mbGFncy5pbmNsdWRlcyhcImdcIikmJiFlLmZsYWdzLmluY2x1ZGVzKFwieVwiKSxcInJlZ2V4IHNob3VsZCBub3QgdXNlIGdsb2JhbCBvciBzdGlja3kgbW9kZVwiKSxcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9e25hbWU6dH0pLGQuYXNzZXJ0T3B0aW9ucyh0LFtcImludmVydFwiLFwibmFtZVwiXSk7Y29uc3Qgcj1bXCJzdHJpbmcucGF0dGVyblwiLHQuaW52ZXJ0P1wiLmludmVydFwiOlwiXCIsdC5uYW1lP1wiLm5hbWVcIjpcIi5iYXNlXCJdLmpvaW4oXCJcIik7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwicGF0dGVyblwiLGFyZ3M6e3JlZ2V4OmUsb3B0aW9uczp0fSxlcnJvckNvZGU6cn0pfSx2YWxpZGF0ZTooZSx0LHtyZWdleDpyLG9wdGlvbnM6c30se2Vycm9yQ29kZTpufSk9PnIudGVzdChlKV5zLmludmVydD9lOnQuZXJyb3Iobix7bmFtZTpzLm5hbWUscmVnZXg6cix2YWx1ZTplfSksYXJnczpbXCJyZWdleFwiLFwib3B0aW9uc1wiXSxtdWx0aTohMH0scmVwbGFjZTp7bWV0aG9kKGUsdCl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPW5ldyBSZWdFeHAodShlKSxcImdcIikpLGEoZSBpbnN0YW5jZW9mIFJlZ0V4cCxcInBhdHRlcm4gbXVzdCBiZSBhIFJlZ0V4cFwiKSxhKFwic3RyaW5nXCI9PXR5cGVvZiB0LFwicmVwbGFjZW1lbnQgbXVzdCBiZSBhIFN0cmluZ1wiKTtjb25zdCByPXRoaXMuY2xvbmUoKTtyZXR1cm4gci4kX3Rlcm1zLnJlcGxhY2VtZW50c3x8KHIuJF90ZXJtcy5yZXBsYWNlbWVudHM9W10pLHIuJF90ZXJtcy5yZXBsYWNlbWVudHMucHVzaCh7cGF0dGVybjplLHJlcGxhY2VtZW50OnR9KSxyfX0sdG9rZW46e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInRva2VuXCIpfSx2YWxpZGF0ZTooZSx0KT0+L15cXHcrJC8udGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcudG9rZW5cIil9LHRyaW06e21ldGhvZChlPSEwKXtyZXR1cm4gYShcImJvb2xlYW5cIj09dHlwZW9mIGUsXCJlbmFibGVkIG11c3QgYmUgYSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwidHJpbVwiLGFyZ3M6e2VuYWJsZWQ6ZX19KX0sdmFsaWRhdGU6KGUsdCx7ZW5hYmxlZDpyfSk9PnImJmUhPT1lLnRyaW0oKT90LmVycm9yKFwic3RyaW5nLnRyaW1cIik6ZSxjb252ZXJ0OiEwfSx0cnVuY2F0ZTp7bWV0aG9kKGU9ITApe3JldHVybiBhKFwiYm9vbGVhblwiPT10eXBlb2YgZSxcImVuYWJsZWQgbXVzdCBiZSBhIGJvb2xlYW5cIiksdGhpcy4kX3NldEZsYWcoXCJ0cnVuY2F0ZVwiLGUpfX0sdXBwZXJjYXNlOnttZXRob2QoKXtyZXR1cm4gdGhpcy5jYXNlKFwidXBwZXJcIil9fSx1cmk6e21ldGhvZChlPXt9KXtkLmFzc2VydE9wdGlvbnMoZSxbXCJhbGxvd1JlbGF0aXZlXCIsXCJhbGxvd1F1ZXJ5U3F1YXJlQnJhY2tldHNcIixcImRvbWFpblwiLFwicmVsYXRpdmVPbmx5XCIsXCJzY2hlbWVcIl0pLGUuZG9tYWluJiZkLmFzc2VydE9wdGlvbnMoZS5kb21haW4sW1wiYWxsb3dVbmljb2RlXCIsXCJtaW5Eb21haW5TZWdtZW50c1wiLFwidGxkc1wiXSk7Y29uc3R7cmVnZXg6dCxzY2hlbWU6cn09bS5yZWdleChlKSxzPWUuZG9tYWluP3AuYWRkcmVzc09wdGlvbnMoZS5kb21haW4pOm51bGw7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwidXJpXCIsYXJnczp7b3B0aW9uczplfSxyZWdleDp0LGRvbWFpbjpzLHNjaGVtZTpyfSl9LHZhbGlkYXRlKGUsdCx7b3B0aW9uczpyfSx7cmVnZXg6cyxkb21haW46bixzY2hlbWU6b30pe2lmKFtcImh0dHA6L1wiLFwiaHR0cHM6L1wiXS5pbmNsdWRlcyhlKSlyZXR1cm4gdC5lcnJvcihcInN0cmluZy51cmlcIik7Y29uc3QgYT1zLmV4ZWMoZSk7aWYoYSl7aWYobil7Y29uc3QgZT1hWzFdfHxhWzJdO2lmKCFpLmlzVmFsaWQoZSxuKSlyZXR1cm4gdC5lcnJvcihcInN0cmluZy5kb21haW5cIix7dmFsdWU6ZX0pfXJldHVybiBlfXJldHVybiByLnJlbGF0aXZlT25seT90LmVycm9yKFwic3RyaW5nLnVyaVJlbGF0aXZlT25seVwiKTpyLnNjaGVtZT90LmVycm9yKFwic3RyaW5nLnVyaUN1c3RvbVNjaGVtZVwiLHtzY2hlbWU6byx2YWx1ZTplfSk6dC5lcnJvcihcInN0cmluZy51cmlcIil9fX0sbWFuaWZlc3Q6e2J1aWxkKGUsdCl7aWYodC5yZXBsYWNlbWVudHMpZm9yKGNvbnN0e3BhdHRlcm46cixyZXBsYWNlbWVudDpzfW9mIHQucmVwbGFjZW1lbnRzKWU9ZS5yZXBsYWNlKHIscyk7cmV0dXJuIGV9fSxtZXNzYWdlczp7XCJzdHJpbmcuYWxwaGFudW1cIjpcInt7I2xhYmVsfX0gbXVzdCBvbmx5IGNvbnRhaW4gYWxwaGEtbnVtZXJpYyBjaGFyYWN0ZXJzXCIsXCJzdHJpbmcuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgc3RyaW5nXCIsXCJzdHJpbmcuYmFzZTY0XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBiYXNlNjQgc3RyaW5nXCIsXCJzdHJpbmcuY3JlZGl0Q2FyZFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgY3JlZGl0IGNhcmRcIixcInN0cmluZy5kYXRhVXJpXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBkYXRhVXJpIHN0cmluZ1wiLFwic3RyaW5nLmRvbWFpblwiOlwie3sjbGFiZWx9fSBtdXN0IGNvbnRhaW4gYSB2YWxpZCBkb21haW4gbmFtZVwiLFwic3RyaW5nLmVtYWlsXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBlbWFpbFwiLFwic3RyaW5nLmVtcHR5XCI6XCJ7eyNsYWJlbH19IGlzIG5vdCBhbGxvd2VkIHRvIGJlIGVtcHR5XCIsXCJzdHJpbmcuZ3VpZFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgR1VJRFwiLFwic3RyaW5nLmhleFwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiBoZXhhZGVjaW1hbCBjaGFyYWN0ZXJzXCIsXCJzdHJpbmcuaGV4QWxpZ25cIjpcInt7I2xhYmVsfX0gaGV4IGRlY29kZWQgcmVwcmVzZW50YXRpb24gbXVzdCBiZSBieXRlIGFsaWduZWRcIixcInN0cmluZy5ob3N0bmFtZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgaG9zdG5hbWVcIixcInN0cmluZy5pcFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgaXAgYWRkcmVzcyB3aXRoIGEge3sjY2lkcn19IENJRFJcIixcInN0cmluZy5pcFZlcnNpb25cIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGlwIGFkZHJlc3Mgb2Ygb25lIG9mIHRoZSBmb2xsb3dpbmcgdmVyc2lvbnMge3sjdmVyc2lvbn19IHdpdGggYSB7eyNjaWRyfX0gQ0lEUlwiLFwic3RyaW5nLmlzb0RhdGVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBpbiBpc28gZm9ybWF0XCIsXCJzdHJpbmcuaXNvRHVyYXRpb25cIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIElTTyA4NjAxIGR1cmF0aW9uXCIsXCJzdHJpbmcubGVuZ3RoXCI6XCJ7eyNsYWJlbH19IGxlbmd0aCBtdXN0IGJlIHt7I2xpbWl0fX0gY2hhcmFjdGVycyBsb25nXCIsXCJzdHJpbmcubG93ZXJjYXNlXCI6XCJ7eyNsYWJlbH19IG11c3Qgb25seSBjb250YWluIGxvd2VyY2FzZSBjaGFyYWN0ZXJzXCIsXCJzdHJpbmcubWF4XCI6XCJ7eyNsYWJlbH19IGxlbmd0aCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19IGNoYXJhY3RlcnMgbG9uZ1wiLFwic3RyaW5nLm1pblwiOlwie3sjbGFiZWx9fSBsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCB7eyNsaW1pdH19IGNoYXJhY3RlcnMgbG9uZ1wiLFwic3RyaW5nLm5vcm1hbGl6ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIHVuaWNvZGUgbm9ybWFsaXplZCBpbiB0aGUge3sjZm9ybX19IGZvcm1cIixcInN0cmluZy50b2tlblwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYS1udW1lcmljIGFuZCB1bmRlcnNjb3JlIGNoYXJhY3RlcnNcIixcInN0cmluZy5wYXR0ZXJuLmJhc2VcIjone3sjbGFiZWx9fSB3aXRoIHZhbHVlIFwie1suXX1cIiBmYWlscyB0byBtYXRjaCB0aGUgcmVxdWlyZWQgcGF0dGVybjoge3sjcmVnZXh9fScsXCJzdHJpbmcucGF0dGVybi5uYW1lXCI6J3t7I2xhYmVsfX0gd2l0aCB2YWx1ZSBcIntbLl19XCIgZmFpbHMgdG8gbWF0Y2ggdGhlIHt7I25hbWV9fSBwYXR0ZXJuJyxcInN0cmluZy5wYXR0ZXJuLmludmVydC5iYXNlXCI6J3t7I2xhYmVsfX0gd2l0aCB2YWx1ZSBcIntbLl19XCIgbWF0Y2hlcyB0aGUgaW52ZXJ0ZWQgcGF0dGVybjoge3sjcmVnZXh9fScsXCJzdHJpbmcucGF0dGVybi5pbnZlcnQubmFtZVwiOid7eyNsYWJlbH19IHdpdGggdmFsdWUgXCJ7Wy5dfVwiIG1hdGNoZXMgdGhlIGludmVydGVkIHt7I25hbWV9fSBwYXR0ZXJuJyxcInN0cmluZy50cmltXCI6XCJ7eyNsYWJlbH19IG11c3Qgbm90IGhhdmUgbGVhZGluZyBvciB0cmFpbGluZyB3aGl0ZXNwYWNlXCIsXCJzdHJpbmcudXJpXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCB1cmlcIixcInN0cmluZy51cmlDdXN0b21TY2hlbWVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHVyaSB3aXRoIGEgc2NoZW1lIG1hdGNoaW5nIHRoZSB7eyNzY2hlbWV9fSBwYXR0ZXJuXCIsXCJzdHJpbmcudXJpUmVsYXRpdmVPbmx5XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCByZWxhdGl2ZSB1cmlcIixcInN0cmluZy51cHBlcmNhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBvbmx5IGNvbnRhaW4gdXBwZXJjYXNlIGNoYXJhY3RlcnNcIn19KSxwLmFkZHJlc3NPcHRpb25zPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiBlO2lmKGEodm9pZCAwPT09ZS5taW5Eb21haW5TZWdtZW50c3x8TnVtYmVyLmlzU2FmZUludGVnZXIoZS5taW5Eb21haW5TZWdtZW50cykmJmUubWluRG9tYWluU2VnbWVudHM+MCxcIm1pbkRvbWFpblNlZ21lbnRzIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpLCExPT09ZS50bGRzKXJldHVybiBlO2lmKCEwPT09ZS50bGRzfHx2b2lkIDA9PT1lLnRsZHMpcmV0dXJuIGEocC50bGRzLFwiQnVpbHQtaW4gVExEIGxpc3QgZGlzYWJsZWRcIiksT2JqZWN0LmFzc2lnbih7fSxlLHAudGxkcyk7YShcIm9iamVjdFwiPT10eXBlb2YgZS50bGRzLFwidGxkcyBtdXN0IGJlIHRydWUsIGZhbHNlLCBvciBhbiBvYmplY3RcIik7Y29uc3QgdD1lLnRsZHMuZGVueTtpZih0KXJldHVybiBBcnJheS5pc0FycmF5KHQpJiYoZT1PYmplY3QuYXNzaWduKHt9LGUse3RsZHM6e2Rlbnk6bmV3IFNldCh0KX19KSksYShlLnRsZHMuZGVueSBpbnN0YW5jZW9mIFNldCxcInRsZHMuZGVueSBtdXN0IGJlIGFuIGFycmF5LCBTZXQsIG9yIGJvb2xlYW5cIiksYSghZS50bGRzLmFsbG93LFwiQ2Fubm90IHNwZWNpZnkgYm90aCB0bGRzLmFsbG93IGFuZCB0bGRzLmRlbnkgbGlzdHNcIiksZTtjb25zdCByPWUudGxkcy5hbGxvdztyZXR1cm4gcj8hMD09PXI/KGEocC50bGRzLFwiQnVpbHQtaW4gVExEIGxpc3QgZGlzYWJsZWRcIiksT2JqZWN0LmFzc2lnbih7fSxlLHAudGxkcykpOihBcnJheS5pc0FycmF5KHIpJiYoZT1PYmplY3QuYXNzaWduKHt9LGUse3RsZHM6e2FsbG93Om5ldyBTZXQocil9fSkpLGEoZS50bGRzLmFsbG93IGluc3RhbmNlb2YgU2V0LFwidGxkcy5hbGxvdyBtdXN0IGJlIGFuIGFycmF5LCBTZXQsIG9yIGJvb2xlYW5cIiksZSk6ZX0scC5pc29EYXRlPWZ1bmN0aW9uKGUpe2lmKCFkLmlzSXNvRGF0ZShlKSlyZXR1cm4gbnVsbDtjb25zdCB0PW5ldyBEYXRlKGUpO3JldHVybiBpc05hTih0LmdldFRpbWUoKSk/bnVsbDp0LnRvSVNPU3RyaW5nKCl9LHAubGVuZ3RoPWZ1bmN0aW9uKGUsdCxyLHMsbil7cmV0dXJuIGEoIW58fCExLFwiSW52YWxpZCBlbmNvZGluZzpcIixuKSxlLiRfYWRkUnVsZSh7bmFtZTp0LG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OnIsZW5jb2Rpbmc6bn0sb3BlcmF0b3I6c30pfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyNCksbj1yKDIzKSxvPXIoMjUpLGE9e25vbkFzY2lpUng6L1teXFx4MDAtXFx4N2ZdLyxlbmNvZGVyOm5ldyhzLlRleHRFbmNvZGVyfHxUZXh0RW5jb2Rlcil9O3QuYW5hbHl6ZT1mdW5jdGlvbihlLHQpe3JldHVybiBhLmVtYWlsKGUsdCl9LHQuaXNWYWxpZD1mdW5jdGlvbihlLHQpe3JldHVybiFhLmVtYWlsKGUsdCl9LGEuZW1haWw9ZnVuY3Rpb24oZSx0PXt9KXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0OiBlbWFpbCBtdXN0IGJlIGEgc3RyaW5nXCIpO2lmKCFlKXJldHVybiBvLmNvZGUoXCJFTVBUWV9TVFJJTkdcIik7Y29uc3Qgcj0hYS5ub25Bc2NpaVJ4LnRlc3QoZSk7aWYoIXIpe2lmKCExPT09dC5hbGxvd1VuaWNvZGUpcmV0dXJuIG8uY29kZShcIkZPUkJJRERFTl9VTklDT0RFXCIpO2U9ZS5ub3JtYWxpemUoXCJORkNcIil9Y29uc3Qgcz1lLnNwbGl0KFwiQFwiKTtpZigyIT09cy5sZW5ndGgpcmV0dXJuIHMubGVuZ3RoPjI/by5jb2RlKFwiTVVMVElQTEVfQVRfQ0hBUlwiKTpvLmNvZGUoXCJNSVNTSU5HX0FUX0NIQVJcIik7Y29uc3RbaSxsXT1zO2lmKCFpKXJldHVybiBvLmNvZGUoXCJFTVBUWV9MT0NBTFwiKTtpZighdC5pZ25vcmVMZW5ndGgpe2lmKGUubGVuZ3RoPjI1NClyZXR1cm4gby5jb2RlKFwiQUREUkVTU19UT09fTE9OR1wiKTtpZihhLmVuY29kZXIuZW5jb2RlKGkpLmxlbmd0aD42NClyZXR1cm4gby5jb2RlKFwiTE9DQUxfVE9PX0xPTkdcIil9cmV0dXJuIGEubG9jYWwoaSxyKXx8bi5hbmFseXplKGwsdCl9LGEubG9jYWw9ZnVuY3Rpb24oZSx0KXtjb25zdCByPWUuc3BsaXQoXCIuXCIpO2Zvcihjb25zdCBlIG9mIHIpe2lmKCFlLmxlbmd0aClyZXR1cm4gby5jb2RlKFwiRU1QVFlfTE9DQUxfU0VHTUVOVFwiKTtpZih0KXtpZighYS5hdGV4dFJ4LnRlc3QoZSkpcmV0dXJuIG8uY29kZShcIklOVkFMSURfTE9DQUxfQ0hBUlNcIil9ZWxzZSBmb3IoY29uc3QgdCBvZiBlKXtpZihhLmF0ZXh0UngudGVzdCh0KSljb250aW51ZTtjb25zdCBlPWEuYmluYXJ5KHQpO2lmKCFhLmF0b21SeC50ZXN0KGUpKXJldHVybiBvLmNvZGUoXCJJTlZBTElEX0xPQ0FMX0NIQVJTXCIpfX19LGEuYmluYXJ5PWZ1bmN0aW9uKGUpe3JldHVybiBBcnJheS5mcm9tKGEuZW5jb2Rlci5lbmNvZGUoZSkpLm1hcChlPT5TdHJpbmcuZnJvbUNoYXJDb2RlKGUpKS5qb2luKFwiXCIpfSxhLmF0ZXh0Ung9L15bXFx3ISNcXCQlJidcXCpcXCtcXC0vPVxcP1xcXmBcXHtcXHxcXH1+XSskLyxhLmF0b21SeD1uZXcgUmVnRXhwKFtcIig/OltcXFxceGMyLVxcXFx4ZGZdW1xcXFx4ODAtXFxcXHhiZl0pXCIsXCIoPzpcXFxceGUwW1xcXFx4YTAtXFxcXHhiZl1bXFxcXHg4MC1cXFxceGJmXSl8KD86W1xcXFx4ZTEtXFxcXHhlY11bXFxcXHg4MC1cXFxceGJmXXsyfSl8KD86XFxcXHhlZFtcXFxceDgwLVxcXFx4OWZdW1xcXFx4ODAtXFxcXHhiZl0pfCg/OltcXFxceGVlLVxcXFx4ZWZdW1xcXFx4ODAtXFxcXHhiZl17Mn0pXCIsXCIoPzpcXFxceGYwW1xcXFx4OTAtXFxcXHhiZl1bXFxcXHg4MC1cXFxceGJmXXsyfSl8KD86W1xcXFx4ZjEtXFxcXHhmM11bXFxcXHg4MC1cXFxceGJmXXszfSl8KD86XFxcXHhmNFtcXFxceDgwLVxcXFx4OGZdW1xcXFx4ODAtXFxcXHhiZl17Mn0pXCJdLmpvaW4oXCJ8XCIpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMjYpO3QucmVnZXg9ZnVuY3Rpb24oZT17fSl7cyh2b2lkIDA9PT1lLmNpZHJ8fFwic3RyaW5nXCI9PXR5cGVvZiBlLmNpZHIsXCJvcHRpb25zLmNpZHIgbXVzdCBiZSBhIHN0cmluZ1wiKTtjb25zdCB0PWUuY2lkcj9lLmNpZHIudG9Mb3dlckNhc2UoKTpcIm9wdGlvbmFsXCI7cyhbXCJyZXF1aXJlZFwiLFwib3B0aW9uYWxcIixcImZvcmJpZGRlblwiXS5pbmNsdWRlcyh0KSxcIm9wdGlvbnMuY2lkciBtdXN0IGJlIG9uZSBvZiByZXF1aXJlZCwgb3B0aW9uYWwsIGZvcmJpZGRlblwiKSxzKHZvaWQgMD09PWUudmVyc2lvbnx8XCJzdHJpbmdcIj09dHlwZW9mIGUudmVyc2lvbnx8QXJyYXkuaXNBcnJheShlLnZlcnNpb24pLFwib3B0aW9ucy52ZXJzaW9uIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5nXCIpO2xldCByPWUudmVyc2lvbnx8W1wiaXB2NFwiLFwiaXB2NlwiLFwiaXB2ZnV0dXJlXCJdO0FycmF5LmlzQXJyYXkocil8fChyPVtyXSkscyhyLmxlbmd0aD49MSxcIm9wdGlvbnMudmVyc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3QgMSB2ZXJzaW9uIHNwZWNpZmllZFwiKTtmb3IobGV0IGU9MDtlPHIubGVuZ3RoOysrZSlzKFwic3RyaW5nXCI9PXR5cGVvZiByW2VdLFwib3B0aW9ucy52ZXJzaW9uIG11c3Qgb25seSBjb250YWluIHN0cmluZ3NcIikscltlXT1yW2VdLnRvTG93ZXJDYXNlKCkscyhbXCJpcHY0XCIsXCJpcHY2XCIsXCJpcHZmdXR1cmVcIl0uaW5jbHVkZXMocltlXSksXCJvcHRpb25zLnZlcnNpb24gY29udGFpbnMgdW5rbm93biB2ZXJzaW9uIFwiK3JbZV0rXCIgLSBtdXN0IGJlIG9uZSBvZiBpcHY0LCBpcHY2LCBpcHZmdXR1cmVcIik7cj1BcnJheS5mcm9tKG5ldyBTZXQocikpO2NvbnN0IG89ci5tYXAoZT0+e2lmKFwiZm9yYmlkZGVuXCI9PT10KXJldHVybiBuLmlwW2VdO2NvbnN0IHI9XCJcXFxcL1wiLmNvbmNhdChcImlwdjRcIj09PWU/bi5pcC52NENpZHI6bi5pcC52NkNpZHIpO3JldHVyblwicmVxdWlyZWRcIj09PXQ/XCJcIi5jb25jYXQobi5pcFtlXSkuY29uY2F0KHIpOlwiXCIuY29uY2F0KG4uaXBbZV0sXCIoPzpcIikuY29uY2F0KHIsXCIpP1wiKX0pLGE9XCIoPzpcIi5jb25jYXQoby5qb2luKFwifFwiKSxcIilcIiksaT1uZXcgUmVnRXhwKFwiXlwiLmNvbmNhdChhLFwiJFwiKSk7cmV0dXJue2NpZHI6dCx2ZXJzaW9uczpyLHJlZ2V4OmkscmF3OmF9fX0sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89e307by5NYXA9Y2xhc3MgZXh0ZW5kcyBNYXB7c2xpY2UoKXtyZXR1cm4gbmV3IG8uTWFwKHRoaXMpfX0sZS5leHBvcnRzPW4uZXh0ZW5kKHt0eXBlOlwic3ltYm9sXCIsdGVybXM6e21hcDp7aW5pdDpuZXcgby5NYXB9fSxjb2VyY2U6e21ldGhvZChlLHtzY2hlbWE6dCxlcnJvcjpyfSl7Y29uc3Qgcz10LiRfdGVybXMubWFwLmdldChlKTtyZXR1cm4gcyYmKGU9cyksdC5fZmxhZ3Mub25seSYmXCJzeW1ib2xcIiE9dHlwZW9mIGU/e3ZhbHVlOmUsZXJyb3JzOnIoXCJzeW1ib2wubWFwXCIse21hcDp0LiRfdGVybXMubWFwfSl9Ont2YWx1ZTplfX19LHZhbGlkYXRlKGUse2Vycm9yOnR9KXtpZihcInN5bWJvbFwiIT10eXBlb2YgZSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6dChcInN5bWJvbC5iYXNlXCIpfX0scnVsZXM6e21hcDp7bWV0aG9kKGUpe2UmJiFlW1N5bWJvbC5pdGVyYXRvcl0mJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYoZT1PYmplY3QuZW50cmllcyhlKSkscyhlJiZlW1N5bWJvbC5pdGVyYXRvcl0sXCJJdGVyYWJsZSBtdXN0IGJlIGFuIGl0ZXJhYmxlIG9yIG9iamVjdFwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKSxyPVtdO2Zvcihjb25zdCBuIG9mIGUpe3MobiYmbltTeW1ib2wuaXRlcmF0b3JdLFwiRW50cnkgbXVzdCBiZSBhbiBpdGVyYWJsZVwiKTtjb25zdFtlLG9dPW47cyhcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmXCJzeW1ib2xcIiE9dHlwZW9mIGUsXCJLZXkgbXVzdCBub3QgYmUgb2YgdHlwZSBvYmplY3QsIGZ1bmN0aW9uLCBvciBTeW1ib2xcIikscyhcInN5bWJvbFwiPT10eXBlb2YgbyxcIlZhbHVlIG11c3QgYmUgYSBTeW1ib2xcIiksdC4kX3Rlcm1zLm1hcC5zZXQoZSxvKSxyLnB1c2gobyl9cmV0dXJuIHQudmFsaWQoLi4ucil9fX0sbWFuaWZlc3Q6e2J1aWxkOihlLHQpPT4odC5tYXAmJihlPWUubWFwKHQubWFwKSksZSl9LG1lc3NhZ2VzOntcInN5bWJvbC5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBzeW1ib2xcIixcInN5bWJvbC5tYXBcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBvbmUgb2Yge3sjbWFwfX1cIn19KX1dKX0pKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMGg1di0yaC01Yy00LjM0IDAtOC0zLjY2LTgtOHMzLjY2LTggOC04IDggMy42NiA4IDh2MS40M2MwIC43OS0uNzEgMS41Ny0xLjUgMS41N3MtMS41LS43OC0xLjUtMS41N1YxMmMwLTIuNzYtMi4yNC01LTUtNXMtNSAyLjI0LTUgNSAyLjI0IDUgNSA1YzEuMzggMCAyLjY0LS41NiAzLjU0LTEuNDcuNjUuODkgMS43NyAxLjQ3IDIuOTYgMS40NyAxLjk3IDAgMy41LTEuNiAzLjUtMy41N1YxMmMwLTUuNTItNC40OC0xMC0xMC0xMHptMCAxM2MtMS42NiAwLTMtMS4zNC0zLTNzMS4zNC0zIDMtMyAzIDEuMzQgMyAzLTEuMzQgMy0zIDN6XCJcbn0pLCAnQWx0ZXJuYXRlRW1haWwnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxelwiXG59KSwgJ0NoZWNrJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xNSAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bS05LTJWN0g0djNIMXYyaDN2M2gydi0zaDN2LTJINnptOSA0Yy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00elwiXG59KSwgJ1BlcnNvbkFkZCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMUwzIDV2NmMwIDUuNTUgMy44NCAxMC43NCA5IDEyIDUuMTYtMS4yNiA5LTYuNDUgOS0xMlY1bC05LTR6bS0yIDE2bC00LTQgMS40MS0xLjQxTDEwIDE0LjE3bDYuNTktNi41OUwxOCA5bC04IDh6XCJcbn0pLCAnVmVyaWZpZWRVc2VyJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiA0LjVDNyA0LjUgMi43MyA3LjYxIDEgMTJjMS43MyA0LjM5IDYgNy41IDExIDcuNXM5LjI3LTMuMTEgMTEtNy41Yy0xLjczLTQuMzktNi03LjUtMTEtNy41ek0xMiAxN2MtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6bTAtOGMtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zLTEuMzQtMy0zLTN6XCJcbn0pLCAnVmlzaWJpbGl0eScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgN2MyLjc2IDAgNSAyLjI0IDUgNSAwIC42NS0uMTMgMS4yNi0uMzYgMS44M2wyLjkyIDIuOTJjMS41MS0xLjI2IDIuNy0yLjg5IDMuNDMtNC43NS0xLjczLTQuMzktNi03LjUtMTEtNy41LTEuNCAwLTIuNzQuMjUtMy45OC43bDIuMTYgMi4xNkMxMC43NCA3LjEzIDExLjM1IDcgMTIgN3pNMiA0LjI3bDIuMjggMi4yOC40Ni40NkMzLjA4IDguMyAxLjc4IDEwLjAyIDEgMTJjMS43MyA0LjM5IDYgNy41IDExIDcuNSAxLjU1IDAgMy4wMy0uMyA0LjM4LS44NGwuNDIuNDJMMTkuNzMgMjIgMjEgMjAuNzMgMy4yNyAzIDIgNC4yN3pNNy41MyA5LjhsMS41NSAxLjU1Yy0uMDUuMjEtLjA4LjQzLS4wOC42NSAwIDEuNjYgMS4zNCAzIDMgMyAuMjIgMCAuNDQtLjAzLjY1LS4wOGwxLjU1IDEuNTVjLS42Ny4zMy0xLjQxLjUzLTIuMi41My0yLjc2IDAtNS0yLjI0LTUtNSAwLS43OS4yLTEuNTMuNTMtMi4yem00LjMxLS43OGwzLjE1IDMuMTUuMDItLjE2YzAtMS42Ni0xLjM0LTMtMy0zbC0uMTcuMDF6XCJcbn0pLCAnVmlzaWJpbGl0eU9mZicpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIuNjUgMTBDMTEuODMgNy42NyA5LjYxIDYgNyA2Yy0zLjMxIDAtNiAyLjY5LTYgNnMyLjY5IDYgNiA2YzIuNjEgMCA0LjgzLTEuNjcgNS42NS00SDE3djRoNHYtNGgydi00SDEyLjY1ek03IDE0Yy0xLjEgMC0yLS45LTItMnMuOS0yIDItMiAyIC45IDIgMi0uOSAyLTIgMnpcIlxufSksICdWcG5LZXknKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IHsgQ2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgY3JlYXRlRWxlbWVudCwgdXNlTGF5b3V0RWZmZWN0LCBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdyZWFjdC1mYXN0LWNvbXBhcmUnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IGNsb25lIGZyb20gJ2xvZGFzaC1lcy9jbG9uZSc7XG5pbXBvcnQgdG9QYXRoIGZyb20gJ2xvZGFzaC1lcy90b1BhdGgnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLWVzL2Nsb25lRGVlcCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbi8qKiBAcHJpdmF0ZSBpcyB0aGUgdmFsdWUgYW4gZW1wdHkgYXJyYXk/ICovXG5cbnZhciBpc0VtcHR5QXJyYXkgPSBmdW5jdGlvbiBpc0VtcHR5QXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMDtcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdCBhIEZ1bmN0aW9uPyAqL1xuXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufTtcbi8qKiBAcHJpdmF0ZSBpcyB0aGUgZ2l2ZW4gb2JqZWN0IGFuIE9iamVjdD8gKi9cblxudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuLyoqIEBwcml2YXRlIGlzIHRoZSBnaXZlbiBvYmplY3QgYW4gaW50ZWdlcj8gKi9cblxudmFyIGlzSW50ZWdlciA9IGZ1bmN0aW9uIGlzSW50ZWdlcihvYmopIHtcbiAgcmV0dXJuIFN0cmluZyhNYXRoLmZsb29yKE51bWJlcihvYmopKSkgPT09IG9iajtcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdCBhIHN0cmluZz8gKi9cblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuLyoqIEBwcml2YXRlIGlzIHRoZSBnaXZlbiBvYmplY3QgYSBOYU4/ICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG5cbnZhciBpc05hTiQxID0gZnVuY3Rpb24gaXNOYU4ob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG9iajtcbn07XG4vKiogQHByaXZhdGUgRG9lcyBhIFJlYWN0IGNvbXBvbmVudCBoYXZlIGV4YWN0bHkgMCBjaGlsZHJlbj8gKi9cblxudmFyIGlzRW1wdHlDaGlsZHJlbiA9IGZ1bmN0aW9uIGlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAwO1xufTtcbi8qKiBAcHJpdmF0ZSBpcyB0aGUgZ2l2ZW4gb2JqZWN0L3ZhbHVlIGEgcHJvbWlzZT8gKi9cblxudmFyIGlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIGlzRnVuY3Rpb24odmFsdWUudGhlbik7XG59O1xuLyoqIEBwcml2YXRlIGlzIHRoZSBnaXZlbiBvYmplY3QvdmFsdWUgYSB0eXBlIG9mIHN5bnRoZXRpYyBldmVudD8gKi9cblxudmFyIGlzSW5wdXRFdmVudCA9IGZ1bmN0aW9uIGlzSW5wdXRFdmVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgaXNPYmplY3QodmFsdWUpICYmIGlzT2JqZWN0KHZhbHVlLnRhcmdldCk7XG59O1xuLyoqXHJcbiAqIFNhbWUgYXMgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBidXQgd3JhcHMgaW4gYSB0cnktY2F0Y2ggYmxvY2suIEluIElFIGl0IGlzXHJcbiAqIG5vdCBzYWZlIHRvIGNhbGwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpZiB0aGVyZSBpcyBub3RoaW5nIGZvY3VzZWQuXHJcbiAqXHJcbiAqIFRoZSBhY3RpdmVFbGVtZW50IHdpbGwgYmUgbnVsbCBvbmx5IGlmIHRoZSBkb2N1bWVudCBvciBkb2N1bWVudCBib2R5IGlzIG5vdFxyXG4gKiB5ZXQgZGVmaW5lZC5cclxuICpcclxuICogQHBhcmFtIHs/RG9jdW1lbnR9IGRvYyBEZWZhdWx0cyB0byBjdXJyZW50IGRvY3VtZW50LlxyXG4gKiBAcmV0dXJuIHtFbGVtZW50IHwgbnVsbH1cclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL21hc3Rlci9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL2RvbS9nZXRBY3RpdmVFbGVtZW50LmpzXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KGRvYykge1xuICBkb2MgPSBkb2MgfHwgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHVuZGVmaW5lZCk7XG5cbiAgaWYgKHR5cGVvZiBkb2MgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBkb2MuYWN0aXZlRWxlbWVudCB8fCBkb2MuYm9keTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBkb2MuYm9keTtcbiAgfVxufVxuLyoqXHJcbiAqIERlZXBseSBnZXQgYSB2YWx1ZSBmcm9tIGFuIG9iamVjdCB2aWEgaXRzIHBhdGguXHJcbiAqL1xuXG5mdW5jdGlvbiBnZXRJbihvYmosIGtleSwgZGVmLCBwKSB7XG4gIGlmIChwID09PSB2b2lkIDApIHtcbiAgICBwID0gMDtcbiAgfVxuXG4gIHZhciBwYXRoID0gdG9QYXRoKGtleSk7XG5cbiAgd2hpbGUgKG9iaiAmJiBwIDwgcGF0aC5sZW5ndGgpIHtcbiAgICBvYmogPSBvYmpbcGF0aFtwKytdXTtcbiAgfVxuXG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCA/IGRlZiA6IG9iajtcbn1cbi8qKlxyXG4gKiBEZWVwbHkgc2V0IGEgdmFsdWUgZnJvbSBpbiBvYmplY3QgdmlhIGl0J3MgcGF0aC4gSWYgdGhlIHZhbHVlIGF0IGBwYXRoYFxyXG4gKiBoYXMgY2hhbmdlZCwgcmV0dXJuIGEgc2hhbGxvdyBjb3B5IG9mIG9iaiB3aXRoIGB2YWx1ZWAgc2V0IGF0IGBwYXRoYC5cclxuICogSWYgYHZhbHVlYCBoYXMgbm90IGNoYW5nZWQsIHJldHVybiB0aGUgb3JpZ2luYWwgYG9iamAuXHJcbiAqXHJcbiAqIEV4aXN0aW5nIG9iamVjdHMgLyBhcnJheXMgYWxvbmcgYHBhdGhgIGFyZSBhbHNvIHNoYWxsb3cgY29waWVkLiBTaWJsaW5nXHJcbiAqIG9iamVjdHMgYWxvbmcgcGF0aCByZXRhaW4gdGhlIHNhbWUgaW50ZXJuYWwganMgcmVmZXJlbmNlLiBTaW5jZSBuZXdcclxuICogb2JqZWN0cyAvIGFycmF5cyBhcmUgb25seSBjcmVhdGVkIGFsb25nIGBwYXRoYCwgd2UgY2FuIHRlc3QgaWYgYW55dGhpbmdcclxuICogY2hhbmdlZCBpbiBhIG5lc3RlZCBzdHJ1Y3R1cmUgYnkgY29tcGFyaW5nIHRoZSBvYmplY3QncyByZWZlcmVuY2UgaW5cclxuICogdGhlIG9sZCBhbmQgbmV3IG9iamVjdCwgc2ltaWxhciB0byBob3cgcnVzc2lhbiBkb2xsIGNhY2hlIGludmFsaWRhdGlvblxyXG4gKiB3b3Jrcy5cclxuICpcclxuICogSW4gZWFybGllciB2ZXJzaW9ucyBvZiB0aGlzIGZ1bmN0aW9uLCB3aGljaCB1c2VkIGNsb25lRGVlcCwgdGhlcmUgd2VyZVxyXG4gKiBpc3N1ZXMgd2hlcmVieSBzZXR0aW5ncyBhIG5lc3RlZCB2YWx1ZSB3b3VsZCBtdXRhdGUgdGhlIHBhcmVudFxyXG4gKiBpbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IG9iamVjdC4gYGNsb25lYCBhdm9pZHMgdGhhdCBidWcgbWFraW5nIGFcclxuICogc2hhbGxvdyBjb3B5IG9mIHRoZSBvYmplY3RzIGFsb25nIHRoZSB1cGRhdGUgcGF0aFxyXG4gKiBzbyBubyBvYmplY3QgaXMgbXV0YXRlZCBpbiBwbGFjZS5cclxuICpcclxuICogQmVmb3JlIGNoYW5naW5nIHRoaXMgZnVuY3Rpb24sIHBsZWFzZSByZWFkIHRocm91Z2ggdGhlIGZvbGxvd2luZ1xyXG4gKiBkaXNjdXNzaW9ucy5cclxuICpcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L2xpbmtzdGF0ZVxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXJlZHBhbG1lci9mb3JtaWsvcHVsbC8xMjNcclxuICovXG5cbmZ1bmN0aW9uIHNldEluKG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgdmFyIHJlcyA9IGNsb25lKG9iaik7IC8vIHRoaXMga2VlcHMgaW5oZXJpdGFuY2Ugd2hlbiBvYmogaXMgYSBjbGFzc1xuXG4gIHZhciByZXNWYWwgPSByZXM7XG4gIHZhciBpID0gMDtcbiAgdmFyIHBhdGhBcnJheSA9IHRvUGF0aChwYXRoKTtcblxuICBmb3IgKDsgaSA8IHBhdGhBcnJheS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFBhdGggPSBwYXRoQXJyYXlbaV07XG4gICAgdmFyIGN1cnJlbnRPYmogPSBnZXRJbihvYmosIHBhdGhBcnJheS5zbGljZSgwLCBpICsgMSkpO1xuXG4gICAgaWYgKGN1cnJlbnRPYmogJiYgKGlzT2JqZWN0KGN1cnJlbnRPYmopIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudE9iaikpKSB7XG4gICAgICByZXNWYWwgPSByZXNWYWxbY3VycmVudFBhdGhdID0gY2xvbmUoY3VycmVudE9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXh0UGF0aCA9IHBhdGhBcnJheVtpICsgMV07XG4gICAgICByZXNWYWwgPSByZXNWYWxbY3VycmVudFBhdGhdID0gaXNJbnRlZ2VyKG5leHRQYXRoKSAmJiBOdW1iZXIobmV4dFBhdGgpID49IDAgPyBbXSA6IHt9O1xuICAgIH1cbiAgfSAvLyBSZXR1cm4gb3JpZ2luYWwgb2JqZWN0IGlmIG5ldyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBjdXJyZW50XG5cblxuICBpZiAoKGkgPT09IDAgPyBvYmogOiByZXNWYWwpW3BhdGhBcnJheVtpXV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsZXRlIHJlc1ZhbFtwYXRoQXJyYXlbaV1dO1xuICB9IGVsc2Uge1xuICAgIHJlc1ZhbFtwYXRoQXJyYXlbaV1dID0gdmFsdWU7XG4gIH0gLy8gSWYgdGhlIHBhdGggYXJyYXkgaGFzIGEgc2luZ2xlIGVsZW1lbnQsIHRoZSBsb29wIGRpZCBub3QgcnVuLlxuICAvLyBEZWxldGluZyBvbiBgcmVzVmFsYCBoYWQgbm8gZWZmZWN0IGluIHRoaXMgc2NlbmFyaW8sIHNvIHdlIGRlbGV0ZSBvbiB0aGUgcmVzdWx0IGluc3RlYWQuXG5cblxuICBpZiAoaSA9PT0gMCAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsZXRlIHJlc1twYXRoQXJyYXlbaV1dO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cbi8qKlxyXG4gKiBSZWN1cnNpdmVseSBhIHNldCB0aGUgc2FtZSB2YWx1ZSBmb3IgYWxsIGtleXMgYW5kIGFycmF5cyBuZXN0ZWQgb2JqZWN0LCBjbG9uaW5nXHJcbiAqIEBwYXJhbSBvYmplY3RcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSB2aXNpdGVkXHJcbiAqIEBwYXJhbSByZXNwb25zZVxyXG4gKi9cblxuZnVuY3Rpb24gc2V0TmVzdGVkT2JqZWN0VmFsdWVzKG9iamVjdCwgdmFsdWUsIHZpc2l0ZWQsIHJlc3BvbnNlKSB7XG4gIGlmICh2aXNpdGVkID09PSB2b2lkIDApIHtcbiAgICB2aXNpdGVkID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxuXG4gIGlmIChyZXNwb25zZSA9PT0gdm9pZCAwKSB7XG4gICAgcmVzcG9uc2UgPSB7fTtcbiAgfVxuXG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGsgPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgIHZhciB2YWwgPSBvYmplY3Rba107XG5cbiAgICBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgaWYgKCF2aXNpdGVkLmdldCh2YWwpKSB7XG4gICAgICAgIHZpc2l0ZWQuc2V0KHZhbCwgdHJ1ZSk7IC8vIEluIG9yZGVyIHRvIGtlZXAgYXJyYXkgdmFsdWVzIGNvbnNpc3RlbnQgZm9yIGJvdGggZG90IHBhdGggIGFuZFxuICAgICAgICAvLyBicmFja2V0IHN5bnRheCwgd2UgbmVlZCB0byBjaGVjayBpZiB0aGlzIGlzIGFuIGFycmF5IHNvIHRoYXRcbiAgICAgICAgLy8gdGhpcyB3aWxsIG91dHB1dCAgeyBmcmllbmRzOiBbdHJ1ZV0gfSBhbmQgbm90IHsgZnJpZW5kczogeyBcIjBcIjogdHJ1ZSB9IH1cblxuICAgICAgICByZXNwb25zZVtrXSA9IEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XG4gICAgICAgIHNldE5lc3RlZE9iamVjdFZhbHVlcyh2YWwsIHZhbHVlLCB2aXNpdGVkLCByZXNwb25zZVtrXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlW2tdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG52YXIgRm9ybWlrQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG52YXIgRm9ybWlrUHJvdmlkZXIgPSBGb3JtaWtDb250ZXh0LlByb3ZpZGVyO1xudmFyIEZvcm1pa0NvbnN1bWVyID0gRm9ybWlrQ29udGV4dC5Db25zdW1lcjtcbmZ1bmN0aW9uIHVzZUZvcm1pa0NvbnRleHQoKSB7XG4gIHZhciBmb3JtaWsgPSB1c2VDb250ZXh0KEZvcm1pa0NvbnRleHQpO1xuICAhISFmb3JtaWsgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiRm9ybWlrIGNvbnRleHQgaXMgdW5kZWZpbmVkLCBwbGVhc2UgdmVyaWZ5IHlvdSBhcmUgY2FsbGluZyB1c2VGb3JtaWtDb250ZXh0KCkgYXMgY2hpbGQgb2YgYSA8Rm9ybWlrPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGZvcm1paztcbn1cblxuZnVuY3Rpb24gZm9ybWlrUmVkdWNlcihzdGF0ZSwgbXNnKSB7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfVkFMVUVTJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdmFsdWVzOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfVE9VQ0hFRCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvdWNoZWQ6IG1zZy5wYXlsb2FkXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1NFVF9FUlJPUlMnOlxuICAgICAgaWYgKGlzRXF1YWwoc3RhdGUuZXJyb3JzLCBtc2cucGF5bG9hZCkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGVycm9yczogbXNnLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX1NUQVRVUyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHN0YXR1czogbXNnLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0lTU1VCTUlUVElORyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzU3VibWl0dGluZzogbXNnLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0lTVkFMSURBVElORyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVmFsaWRhdGluZzogbXNnLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0ZJRUxEX1ZBTFVFJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdmFsdWVzOiBzZXRJbihzdGF0ZS52YWx1ZXMsIG1zZy5wYXlsb2FkLmZpZWxkLCBtc2cucGF5bG9hZC52YWx1ZSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0ZJRUxEX1RPVUNIRUQnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB0b3VjaGVkOiBzZXRJbihzdGF0ZS50b3VjaGVkLCBtc2cucGF5bG9hZC5maWVsZCwgbXNnLnBheWxvYWQudmFsdWUpXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1NFVF9GSUVMRF9FUlJPUic6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGVycm9yczogc2V0SW4oc3RhdGUuZXJyb3JzLCBtc2cucGF5bG9hZC5maWVsZCwgbXNnLnBheWxvYWQudmFsdWUpXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1JFU0VUX0ZPUk0nOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgbXNnLnBheWxvYWQpO1xuXG4gICAgY2FzZSAnU0VUX0ZPUk1JS19TVEFURSc6XG4gICAgICByZXR1cm4gbXNnLnBheWxvYWQoc3RhdGUpO1xuXG4gICAgY2FzZSAnU1VCTUlUX0FUVEVNUFQnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB0b3VjaGVkOiBzZXROZXN0ZWRPYmplY3RWYWx1ZXMoc3RhdGUudmFsdWVzLCB0cnVlKSxcbiAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxuICAgICAgICBzdWJtaXRDb3VudDogc3RhdGUuc3VibWl0Q291bnQgKyAxXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1NVQk1JVF9GQUlMVVJFJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTVUJNSVRfU1VDQ0VTUyc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufSAvLyBJbml0aWFsIGVtcHR5IHN0YXRlcyAvLyBvYmplY3RzXG5cblxudmFyIGVtcHR5RXJyb3JzID0ge307XG52YXIgZW1wdHlUb3VjaGVkID0ge307XG5mdW5jdGlvbiB1c2VGb3JtaWsoX3JlZikge1xuICB2YXIgX3JlZiR2YWxpZGF0ZU9uQ2hhbmdlID0gX3JlZi52YWxpZGF0ZU9uQ2hhbmdlLFxuICAgICAgdmFsaWRhdGVPbkNoYW5nZSA9IF9yZWYkdmFsaWRhdGVPbkNoYW5nZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkdmFsaWRhdGVPbkNoYW5nZSxcbiAgICAgIF9yZWYkdmFsaWRhdGVPbkJsdXIgPSBfcmVmLnZhbGlkYXRlT25CbHVyLFxuICAgICAgdmFsaWRhdGVPbkJsdXIgPSBfcmVmJHZhbGlkYXRlT25CbHVyID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiR2YWxpZGF0ZU9uQmx1cixcbiAgICAgIF9yZWYkdmFsaWRhdGVPbk1vdW50ID0gX3JlZi52YWxpZGF0ZU9uTW91bnQsXG4gICAgICB2YWxpZGF0ZU9uTW91bnQgPSBfcmVmJHZhbGlkYXRlT25Nb3VudCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHZhbGlkYXRlT25Nb3VudCxcbiAgICAgIGlzSW5pdGlhbFZhbGlkID0gX3JlZi5pc0luaXRpYWxWYWxpZCxcbiAgICAgIF9yZWYkZW5hYmxlUmVpbml0aWFsaSA9IF9yZWYuZW5hYmxlUmVpbml0aWFsaXplLFxuICAgICAgZW5hYmxlUmVpbml0aWFsaXplID0gX3JlZiRlbmFibGVSZWluaXRpYWxpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZW5hYmxlUmVpbml0aWFsaSxcbiAgICAgIG9uU3VibWl0ID0gX3JlZi5vblN1Ym1pdCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJ2YWxpZGF0ZU9uQ2hhbmdlXCIsIFwidmFsaWRhdGVPbkJsdXJcIiwgXCJ2YWxpZGF0ZU9uTW91bnRcIiwgXCJpc0luaXRpYWxWYWxpZFwiLCBcImVuYWJsZVJlaW5pdGlhbGl6ZVwiLCBcIm9uU3VibWl0XCJdKTtcblxuICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgdmFsaWRhdGVPbkNoYW5nZTogdmFsaWRhdGVPbkNoYW5nZSxcbiAgICB2YWxpZGF0ZU9uQmx1cjogdmFsaWRhdGVPbkJsdXIsXG4gICAgdmFsaWRhdGVPbk1vdW50OiB2YWxpZGF0ZU9uTW91bnQsXG4gICAgb25TdWJtaXQ6IG9uU3VibWl0XG4gIH0sIHJlc3QpO1xuXG4gIHZhciBpbml0aWFsVmFsdWVzID0gdXNlUmVmKHByb3BzLmluaXRpYWxWYWx1ZXMpO1xuICB2YXIgaW5pdGlhbEVycm9ycyA9IHVzZVJlZihwcm9wcy5pbml0aWFsRXJyb3JzIHx8IGVtcHR5RXJyb3JzKTtcbiAgdmFyIGluaXRpYWxUb3VjaGVkID0gdXNlUmVmKHByb3BzLmluaXRpYWxUb3VjaGVkIHx8IGVtcHR5VG91Y2hlZCk7XG4gIHZhciBpbml0aWFsU3RhdHVzID0gdXNlUmVmKHByb3BzLmluaXRpYWxTdGF0dXMpO1xuICB2YXIgaXNNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGZpZWxkUmVnaXN0cnkgPSB1c2VSZWYoe30pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgISh0eXBlb2YgaXNJbml0aWFsVmFsaWQgPT09ICd1bmRlZmluZWQnKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ2lzSW5pdGlhbFZhbGlkIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgRm9ybWlrLiBQbGVhc2UgdXNlIGluaXRpYWxFcnJvcnMgb3IgdmFsaWRhdGVPbk1vdW50IGluc3RlYWQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9LCBbXSk7XG4gIH1cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VSZWR1Y2VyID0gdXNlUmVkdWNlcihmb3JtaWtSZWR1Y2VyLCB7XG4gICAgdmFsdWVzOiBwcm9wcy5pbml0aWFsVmFsdWVzLFxuICAgIGVycm9yczogcHJvcHMuaW5pdGlhbEVycm9ycyB8fCBlbXB0eUVycm9ycyxcbiAgICB0b3VjaGVkOiBwcm9wcy5pbml0aWFsVG91Y2hlZCB8fCBlbXB0eVRvdWNoZWQsXG4gICAgc3RhdHVzOiBwcm9wcy5pbml0aWFsU3RhdHVzLFxuICAgIGlzU3VibWl0dGluZzogZmFsc2UsXG4gICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcbiAgICBzdWJtaXRDb3VudDogMFxuICB9KSxcbiAgICAgIHN0YXRlID0gX1JlYWN0JHVzZVJlZHVjZXJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF9SZWFjdCR1c2VSZWR1Y2VyWzFdO1xuXG4gIHZhciBydW5WYWxpZGF0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWVzLCBmaWVsZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgbWF5YmVQcm9taXNlZEVycm9ycyA9IHByb3BzLnZhbGlkYXRlKHZhbHVlcywgZmllbGQpO1xuXG4gICAgICBpZiAobWF5YmVQcm9taXNlZEVycm9ycyA9PSBudWxsKSB7XG4gICAgICAgIC8vIHVzZSBsb29zZSBudWxsIGNoZWNrIGhlcmUgb24gcHVycG9zZVxuICAgICAgICByZXNvbHZlKGVtcHR5RXJyb3JzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZWRFcnJvcnMpKSB7XG4gICAgICAgIG1heWJlUHJvbWlzZWRFcnJvcnMudGhlbihmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgICAgcmVzb2x2ZShlcnJvcnMgfHwgZW1wdHlFcnJvcnMpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoYWN0dWFsRXhjZXB0aW9uKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IEFuIHVuaGFuZGxlZCBlcnJvciB3YXMgY2F1Z2h0IGR1cmluZyB2YWxpZGF0aW9uIGluIDxGb3JtaWsgdmFsaWRhdGUgLz5cIiwgYWN0dWFsRXhjZXB0aW9uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWplY3QoYWN0dWFsRXhjZXB0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKG1heWJlUHJvbWlzZWRFcnJvcnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbcHJvcHMudmFsaWRhdGVdKTtcbiAgLyoqXHJcbiAgICogUnVuIHZhbGlkYXRpb24gYWdhaW5zdCBhIFl1cCBzY2hlbWEgYW5kIG9wdGlvbmFsbHkgcnVuIGEgZnVuY3Rpb24gaWYgc3VjY2Vzc2Z1bFxyXG4gICAqL1xuXG4gIHZhciBydW5WYWxpZGF0aW9uU2NoZW1hID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlcywgZmllbGQpIHtcbiAgICB2YXIgdmFsaWRhdGlvblNjaGVtYSA9IHByb3BzLnZhbGlkYXRpb25TY2hlbWE7XG4gICAgdmFyIHNjaGVtYSA9IGlzRnVuY3Rpb24odmFsaWRhdGlvblNjaGVtYSkgPyB2YWxpZGF0aW9uU2NoZW1hKGZpZWxkKSA6IHZhbGlkYXRpb25TY2hlbWE7XG4gICAgdmFyIHByb21pc2UgPSBmaWVsZCAmJiBzY2hlbWEudmFsaWRhdGVBdCA/IHNjaGVtYS52YWxpZGF0ZUF0KGZpZWxkLCB2YWx1ZXMpIDogdmFsaWRhdGVZdXBTY2hlbWEodmFsdWVzLCBzY2hlbWEpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKGVtcHR5RXJyb3JzKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8gWXVwIHdpbGwgdGhyb3cgYSB2YWxpZGF0aW9uIGVycm9yIGlmIHZhbGlkYXRpb24gZmFpbHMuIFdlIGNhdGNoIHRob3NlIGFuZFxuICAgICAgICAvLyByZXNvbHZlIHRoZW0gaW50byBGb3JtaWsgZXJyb3JzLiBXZSBjYW4gc25pZmYgaWYgc29tZXRoaW5nIGlzIGEgWXVwIGVycm9yXG4gICAgICAgIC8vIGJ5IGNoZWNraW5nIGVycm9yLm5hbWUuXG4gICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVuc2UveXVwI3ZhbGlkYXRpb25lcnJvcmVycm9ycy1zdHJpbmctLWFycmF5c3RyaW5nLXZhbHVlLWFueS1wYXRoLXN0cmluZ1xuICAgICAgICBpZiAoZXJyLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgcmVzb2x2ZSh5dXBUb0Zvcm1FcnJvcnMoZXJyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV2UgdGhyb3cgYW55IG90aGVyIGVycm9yc1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBBbiB1bmhhbmRsZWQgZXJyb3Igd2FzIGNhdWdodCBkdXJpbmcgdmFsaWRhdGlvbiBpbiA8Rm9ybWlrIHZhbGlkYXRpb25TY2hlbWEgLz5cIiwgZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtwcm9wcy52YWxpZGF0aW9uU2NoZW1hXSk7XG4gIHZhciBydW5TaW5nbGVGaWVsZExldmVsVmFsaWRhdGlvbiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKGZpZWxkUmVnaXN0cnkuY3VycmVudFtmaWVsZF0udmFsaWRhdGUodmFsdWUpKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgcnVuRmllbGRMZXZlbFZhbGlkYXRpb25zID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHZhciBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbiA9IE9iamVjdC5rZXlzKGZpZWxkUmVnaXN0cnkuY3VycmVudCkuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihmaWVsZFJlZ2lzdHJ5LmN1cnJlbnRbZl0udmFsaWRhdGUpO1xuICAgIH0pOyAvLyBDb25zdHJ1Y3QgYW4gYXJyYXkgd2l0aCBhbGwgb2YgdGhlIGZpZWxkIHZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbiAgICB2YXIgZmllbGRWYWxpZGF0aW9ucyA9IGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uLmxlbmd0aCA+IDAgPyBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbi5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBydW5TaW5nbGVGaWVsZExldmVsVmFsaWRhdGlvbihmLCBnZXRJbih2YWx1ZXMsIGYpKTtcbiAgICB9KSA6IFtQcm9taXNlLnJlc29sdmUoJ0RPX05PVF9ERUxFVEVfWU9VX1dJTExfQkVfRklSRUQnKV07IC8vIHVzZSBzcGVjaWFsIGNhc2UgOylcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChmaWVsZFZhbGlkYXRpb25zKS50aGVuKGZ1bmN0aW9uIChmaWVsZEVycm9yc0xpc3QpIHtcbiAgICAgIHJldHVybiBmaWVsZEVycm9yc0xpc3QucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyLCBpbmRleCkge1xuICAgICAgICBpZiAoY3VyciA9PT0gJ0RPX05PVF9ERUxFVEVfWU9VX1dJTExfQkVfRklSRUQnKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3Vycikge1xuICAgICAgICAgIHByZXYgPSBzZXRJbihwcmV2LCBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbltpbmRleF0sIGN1cnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LCB7fSk7XG4gICAgfSk7XG4gIH0sIFtydW5TaW5nbGVGaWVsZExldmVsVmFsaWRhdGlvbl0pOyAvLyBSdW4gYWxsIHZhbGlkYXRpb25zIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuXG4gIHZhciBydW5BbGxWYWxpZGF0aW9ucyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3J1bkZpZWxkTGV2ZWxWYWxpZGF0aW9ucyh2YWx1ZXMpLCBwcm9wcy52YWxpZGF0aW9uU2NoZW1hID8gcnVuVmFsaWRhdGlvblNjaGVtYSh2YWx1ZXMpIDoge30sIHByb3BzLnZhbGlkYXRlID8gcnVuVmFsaWRhdGVIYW5kbGVyKHZhbHVlcykgOiB7fV0pLnRoZW4oZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgZmllbGRFcnJvcnMgPSBfcmVmMlswXSxcbiAgICAgICAgICBzY2hlbWFFcnJvcnMgPSBfcmVmMlsxXSxcbiAgICAgICAgICB2YWxpZGF0ZUVycm9ycyA9IF9yZWYyWzJdO1xuICAgICAgdmFyIGNvbWJpbmVkRXJyb3JzID0gZGVlcG1lcmdlLmFsbChbZmllbGRFcnJvcnMsIHNjaGVtYUVycm9ycywgdmFsaWRhdGVFcnJvcnNdLCB7XG4gICAgICAgIGFycmF5TWVyZ2U6IGFycmF5TWVyZ2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbWJpbmVkRXJyb3JzO1xuICAgIH0pO1xuICB9LCBbcHJvcHMudmFsaWRhdGUsIHByb3BzLnZhbGlkYXRpb25TY2hlbWEsIHJ1bkZpZWxkTGV2ZWxWYWxpZGF0aW9ucywgcnVuVmFsaWRhdGVIYW5kbGVyLCBydW5WYWxpZGF0aW9uU2NoZW1hXSk7IC8vIFJ1biBhbGwgdmFsaWRhdGlvbnMgbWV0aG9kcyBhbmQgdXBkYXRlIHN0YXRlIGFjY29yZGluZ2x5XG5cbiAgdmFyIHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICBpZiAodmFsdWVzID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlcyA9IHN0YXRlLnZhbHVlcztcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICBwYXlsb2FkOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIHJ1bkFsbFZhbGlkYXRpb25zKHZhbHVlcykudGhlbihmdW5jdGlvbiAoY29tYmluZWRFcnJvcnMpIHtcbiAgICAgIGlmICghIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc0VxdWFsKHN0YXRlLmVycm9ycywgY29tYmluZWRFcnJvcnMpKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9FUlJPUlMnLFxuICAgICAgICAgICAgcGF5bG9hZDogY29tYmluZWRFcnJvcnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29tYmluZWRFcnJvcnM7XG4gICAgfSk7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh2YWxpZGF0ZU9uTW91bnQgJiYgaXNNb3VudGVkLmN1cnJlbnQgPT09IHRydWUgJiYgaXNFcXVhbChpbml0aWFsVmFsdWVzLmN1cnJlbnQsIHByb3BzLmluaXRpYWxWYWx1ZXMpKSB7XG4gICAgICB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5KGluaXRpYWxWYWx1ZXMuY3VycmVudCk7XG4gICAgfVxuICB9LCBbdmFsaWRhdGVPbk1vdW50LCB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5XSk7XG4gIHZhciByZXNldEZvcm0gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV4dFN0YXRlKSB7XG4gICAgdmFyIHZhbHVlcyA9IG5leHRTdGF0ZSAmJiBuZXh0U3RhdGUudmFsdWVzID8gbmV4dFN0YXRlLnZhbHVlcyA6IGluaXRpYWxWYWx1ZXMuY3VycmVudDtcbiAgICB2YXIgZXJyb3JzID0gbmV4dFN0YXRlICYmIG5leHRTdGF0ZS5lcnJvcnMgPyBuZXh0U3RhdGUuZXJyb3JzIDogaW5pdGlhbEVycm9ycy5jdXJyZW50ID8gaW5pdGlhbEVycm9ycy5jdXJyZW50IDogcHJvcHMuaW5pdGlhbEVycm9ycyB8fCB7fTtcbiAgICB2YXIgdG91Y2hlZCA9IG5leHRTdGF0ZSAmJiBuZXh0U3RhdGUudG91Y2hlZCA/IG5leHRTdGF0ZS50b3VjaGVkIDogaW5pdGlhbFRvdWNoZWQuY3VycmVudCA/IGluaXRpYWxUb3VjaGVkLmN1cnJlbnQgOiBwcm9wcy5pbml0aWFsVG91Y2hlZCB8fCB7fTtcbiAgICB2YXIgc3RhdHVzID0gbmV4dFN0YXRlICYmIG5leHRTdGF0ZS5zdGF0dXMgPyBuZXh0U3RhdGUuc3RhdHVzIDogaW5pdGlhbFN0YXR1cy5jdXJyZW50ID8gaW5pdGlhbFN0YXR1cy5jdXJyZW50IDogcHJvcHMuaW5pdGlhbFN0YXR1cztcbiAgICBpbml0aWFsVmFsdWVzLmN1cnJlbnQgPSB2YWx1ZXM7XG4gICAgaW5pdGlhbEVycm9ycy5jdXJyZW50ID0gZXJyb3JzO1xuICAgIGluaXRpYWxUb3VjaGVkLmN1cnJlbnQgPSB0b3VjaGVkO1xuICAgIGluaXRpYWxTdGF0dXMuY3VycmVudCA9IHN0YXR1cztcblxuICAgIHZhciBkaXNwYXRjaEZuID0gZnVuY3Rpb24gZGlzcGF0Y2hGbigpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1JFU0VUX0ZPUk0nLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgaXNTdWJtaXR0aW5nOiAhIW5leHRTdGF0ZSAmJiAhIW5leHRTdGF0ZS5pc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgICAgICAgdG91Y2hlZDogdG91Y2hlZCxcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICBpc1ZhbGlkYXRpbmc6ICEhbmV4dFN0YXRlICYmICEhbmV4dFN0YXRlLmlzVmFsaWRhdGluZyxcbiAgICAgICAgICBzdWJtaXRDb3VudDogISFuZXh0U3RhdGUgJiYgISFuZXh0U3RhdGUuc3VibWl0Q291bnQgJiYgdHlwZW9mIG5leHRTdGF0ZS5zdWJtaXRDb3VudCA9PT0gJ251bWJlcicgPyBuZXh0U3RhdGUuc3VibWl0Q291bnQgOiAwXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAocHJvcHMub25SZXNldCkge1xuICAgICAgdmFyIG1heWJlUHJvbWlzZWRPblJlc2V0ID0gcHJvcHMub25SZXNldChzdGF0ZS52YWx1ZXMsIGltcGVyYXRpdmVNZXRob2RzKTtcblxuICAgICAgaWYgKGlzUHJvbWlzZShtYXliZVByb21pc2VkT25SZXNldCkpIHtcbiAgICAgICAgbWF5YmVQcm9taXNlZE9uUmVzZXQudGhlbihkaXNwYXRjaEZuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoRm4oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2hGbigpO1xuICAgIH1cbiAgfSwgW3Byb3BzLmluaXRpYWxFcnJvcnMsIHByb3BzLmluaXRpYWxTdGF0dXMsIHByb3BzLmluaXRpYWxUb3VjaGVkXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzTW91bnRlZC5jdXJyZW50ID09PSB0cnVlICYmICFpc0VxdWFsKGluaXRpYWxWYWx1ZXMuY3VycmVudCwgcHJvcHMuaW5pdGlhbFZhbHVlcykpIHtcbiAgICAgIGlmIChlbmFibGVSZWluaXRpYWxpemUpIHtcbiAgICAgICAgaW5pdGlhbFZhbHVlcy5jdXJyZW50ID0gcHJvcHMuaW5pdGlhbFZhbHVlcztcbiAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZU9uTW91bnQpIHtcbiAgICAgICAgdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eShpbml0aWFsVmFsdWVzLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2VuYWJsZVJlaW5pdGlhbGl6ZSwgcHJvcHMuaW5pdGlhbFZhbHVlcywgcmVzZXRGb3JtLCB2YWxpZGF0ZU9uTW91bnQsIHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHldKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZW5hYmxlUmVpbml0aWFsaXplICYmIGlzTW91bnRlZC5jdXJyZW50ID09PSB0cnVlICYmICFpc0VxdWFsKGluaXRpYWxFcnJvcnMuY3VycmVudCwgcHJvcHMuaW5pdGlhbEVycm9ycykpIHtcbiAgICAgIGluaXRpYWxFcnJvcnMuY3VycmVudCA9IHByb3BzLmluaXRpYWxFcnJvcnMgfHwgZW1wdHlFcnJvcnM7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfRVJST1JTJyxcbiAgICAgICAgcGF5bG9hZDogcHJvcHMuaW5pdGlhbEVycm9ycyB8fCBlbXB0eUVycm9yc1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbZW5hYmxlUmVpbml0aWFsaXplLCBwcm9wcy5pbml0aWFsRXJyb3JzXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuYWJsZVJlaW5pdGlhbGl6ZSAmJiBpc01vdW50ZWQuY3VycmVudCA9PT0gdHJ1ZSAmJiAhaXNFcXVhbChpbml0aWFsVG91Y2hlZC5jdXJyZW50LCBwcm9wcy5pbml0aWFsVG91Y2hlZCkpIHtcbiAgICAgIGluaXRpYWxUb3VjaGVkLmN1cnJlbnQgPSBwcm9wcy5pbml0aWFsVG91Y2hlZCB8fCBlbXB0eVRvdWNoZWQ7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfVE9VQ0hFRCcsXG4gICAgICAgIHBheWxvYWQ6IHByb3BzLmluaXRpYWxUb3VjaGVkIHx8IGVtcHR5VG91Y2hlZFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbZW5hYmxlUmVpbml0aWFsaXplLCBwcm9wcy5pbml0aWFsVG91Y2hlZF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbmFibGVSZWluaXRpYWxpemUgJiYgaXNNb3VudGVkLmN1cnJlbnQgPT09IHRydWUgJiYgIWlzRXF1YWwoaW5pdGlhbFN0YXR1cy5jdXJyZW50LCBwcm9wcy5pbml0aWFsU3RhdHVzKSkge1xuICAgICAgaW5pdGlhbFN0YXR1cy5jdXJyZW50ID0gcHJvcHMuaW5pdGlhbFN0YXR1cztcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NFVF9TVEFUVVMnLFxuICAgICAgICBwYXlsb2FkOiBwcm9wcy5pbml0aWFsU3RhdHVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtlbmFibGVSZWluaXRpYWxpemUsIHByb3BzLmluaXRpYWxTdGF0dXMsIHByb3BzLmluaXRpYWxUb3VjaGVkXSk7XG4gIHZhciB2YWxpZGF0ZUZpZWxkID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAobmFtZSkge1xuICAgIC8vIFRoaXMgd2lsbCBlZmZpY2llbnRseSB2YWxpZGF0ZSBhIHNpbmdsZSBmaWVsZCBieSBhdm9pZGluZyBzdGF0ZVxuICAgIC8vIGNoYW5nZXMgaWYgdGhlIHZhbGlkYXRpb24gZnVuY3Rpb24gaXMgc3luY2hyb25vdXMuIEl0J3MgZGlmZmVyZW50IGZyb21cbiAgICAvLyB3aGF0IGlzIGNhbGxlZCB3aGVuIHVzaW5nIHZhbGlkYXRlRm9ybS5cbiAgICBpZiAoZmllbGRSZWdpc3RyeS5jdXJyZW50W25hbWVdICYmIGlzRnVuY3Rpb24oZmllbGRSZWdpc3RyeS5jdXJyZW50W25hbWVdLnZhbGlkYXRlKSkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0SW4oc3RhdGUudmFsdWVzLCBuYW1lKTtcbiAgICAgIHZhciBtYXliZVByb21pc2UgPSBmaWVsZFJlZ2lzdHJ5LmN1cnJlbnRbbmFtZV0udmFsaWRhdGUodmFsdWUpO1xuXG4gICAgICBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZSkpIHtcbiAgICAgICAgLy8gT25seSBmbGlwIGlzVmFsaWRhdGluZyBpZiB0aGUgZnVuY3Rpb24gaXMgYXN5bmMuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICAgICAgcGF5bG9hZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS50aGVuKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9GSUVMRF9FUlJPUicsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIGZpZWxkOiBuYW1lLFxuICAgICAgICAgICAgICB2YWx1ZTogZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICAgICAgICBwYXlsb2FkOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX0ZJRUxEX0VSUk9SJyxcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBmaWVsZDogbmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBtYXliZVByb21pc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1heWJlUHJvbWlzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcm9wcy52YWxpZGF0aW9uU2NoZW1hKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfSVNWQUxJREFUSU5HJyxcbiAgICAgICAgcGF5bG9hZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcnVuVmFsaWRhdGlvblNjaGVtYShzdGF0ZS52YWx1ZXMsIG5hbWUpLnRoZW4oZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NFVF9GSUVMRF9FUlJPUicsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogZXJyb3JbbmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NFVF9JU1ZBTElEQVRJTkcnLFxuICAgICAgICAgIHBheWxvYWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9KTtcbiAgdmFyIHJlZ2lzdGVyRmllbGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSwgX3JlZjMpIHtcbiAgICB2YXIgdmFsaWRhdGUgPSBfcmVmMy52YWxpZGF0ZTtcbiAgICBmaWVsZFJlZ2lzdHJ5LmN1cnJlbnRbbmFtZV0gPSB7XG4gICAgICB2YWxpZGF0ZTogdmFsaWRhdGVcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciB1bnJlZ2lzdGVyRmllbGQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSkge1xuICAgIGRlbGV0ZSBmaWVsZFJlZ2lzdHJ5LmN1cnJlbnRbbmFtZV07XG4gIH0sIFtdKTtcbiAgdmFyIHNldFRvdWNoZWQgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaGVkLCBzaG91bGRWYWxpZGF0ZSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfVE9VQ0hFRCcsXG4gICAgICBwYXlsb2FkOiB0b3VjaGVkXG4gICAgfSk7XG4gICAgdmFyIHdpbGxWYWxpZGF0ZSA9IHNob3VsZFZhbGlkYXRlID09PSB1bmRlZmluZWQgPyB2YWxpZGF0ZU9uQmx1ciA6IHNob3VsZFZhbGlkYXRlO1xuICAgIHJldHVybiB3aWxsVmFsaWRhdGUgPyB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5KHN0YXRlLnZhbHVlcykgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSk7XG4gIHZhciBzZXRFcnJvcnMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9FUlJPUlMnLFxuICAgICAgcGF5bG9hZDogZXJyb3JzXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHNldFZhbHVlcyA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlcywgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICB2YXIgcmVzb2x2ZWRWYWx1ZXMgPSBpc0Z1bmN0aW9uKHZhbHVlcykgPyB2YWx1ZXMoc3RhdGUudmFsdWVzKSA6IHZhbHVlcztcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX1ZBTFVFUycsXG4gICAgICBwYXlsb2FkOiByZXNvbHZlZFZhbHVlc1xuICAgIH0pO1xuICAgIHZhciB3aWxsVmFsaWRhdGUgPSBzaG91bGRWYWxpZGF0ZSA9PT0gdW5kZWZpbmVkID8gdmFsaWRhdGVPbkNoYW5nZSA6IHNob3VsZFZhbGlkYXRlO1xuICAgIHJldHVybiB3aWxsVmFsaWRhdGUgPyB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5KHJlc29sdmVkVmFsdWVzKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9KTtcbiAgdmFyIHNldEZpZWxkRXJyb3IgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9GSUVMRF9FUlJPUicsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHNldEZpZWxkVmFsdWUgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChmaWVsZCwgdmFsdWUsIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9GSUVMRF9WQUxVRScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHdpbGxWYWxpZGF0ZSA9IHNob3VsZFZhbGlkYXRlID09PSB1bmRlZmluZWQgPyB2YWxpZGF0ZU9uQ2hhbmdlIDogc2hvdWxkVmFsaWRhdGU7XG4gICAgcmV0dXJuIHdpbGxWYWxpZGF0ZSA/IHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkoc2V0SW4oc3RhdGUudmFsdWVzLCBmaWVsZCwgdmFsdWUpKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9KTtcbiAgdmFyIGV4ZWN1dGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnRPclRleHRWYWx1ZSwgbWF5YmVQYXRoKSB7XG4gICAgLy8gQnkgZGVmYXVsdCwgYXNzdW1lIHRoYXQgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGEgc3RyaW5nLiBUaGlzIGFsbG93cyB1cyB0byB1c2VcbiAgICAvLyBoYW5kbGVDaGFuZ2Ugd2l0aCBSZWFjdCBOYXRpdmUgYW5kIFJlYWN0IE5hdGl2ZSBXZWIncyBvbkNoYW5nZVRleHQgcHJvcCB3aGljaFxuICAgIC8vIHByb3ZpZGVzIGp1c3QgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICB2YXIgZmllbGQgPSBtYXliZVBhdGg7XG4gICAgdmFyIHZhbCA9IGV2ZW50T3JUZXh0VmFsdWU7XG4gICAgdmFyIHBhcnNlZDsgLy8gSWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhIHN0cmluZyB0aG91Z2gsIGl0IGhhcyB0byBiZSBhIHN5bnRoZXRpYyBSZWFjdCBFdmVudCAob3IgYSBmYWtlIG9uZSksXG4gICAgLy8gc28gd2UgaGFuZGxlIGxpa2Ugd2Ugd291bGQgYSBub3JtYWwgSFRNTCBjaGFuZ2UgZXZlbnQuXG5cbiAgICBpZiAoIWlzU3RyaW5nKGV2ZW50T3JUZXh0VmFsdWUpKSB7XG4gICAgICAvLyBJZiB3ZSBjYW4sIHBlcnNpc3QgdGhlIGV2ZW50XG4gICAgICAvLyBAc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ldmVudHMuaHRtbCNldmVudC1wb29saW5nXG4gICAgICBpZiAoZXZlbnRPclRleHRWYWx1ZS5wZXJzaXN0KSB7XG4gICAgICAgIGV2ZW50T3JUZXh0VmFsdWUucGVyc2lzdCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGFyZ2V0ID0gZXZlbnRPclRleHRWYWx1ZS50YXJnZXQgPyBldmVudE9yVGV4dFZhbHVlLnRhcmdldCA6IGV2ZW50T3JUZXh0VmFsdWUuY3VycmVudFRhcmdldDtcbiAgICAgIHZhciB0eXBlID0gdGFyZ2V0LnR5cGUsXG4gICAgICAgICAgbmFtZSA9IHRhcmdldC5uYW1lLFxuICAgICAgICAgIGlkID0gdGFyZ2V0LmlkLFxuICAgICAgICAgIHZhbHVlID0gdGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIGNoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICBvdXRlckhUTUwgPSB0YXJnZXQub3V0ZXJIVE1MLFxuICAgICAgICAgIG9wdGlvbnMgPSB0YXJnZXQub3B0aW9ucyxcbiAgICAgICAgICBtdWx0aXBsZSA9IHRhcmdldC5tdWx0aXBsZTtcbiAgICAgIGZpZWxkID0gbWF5YmVQYXRoID8gbWF5YmVQYXRoIDogbmFtZSA/IG5hbWUgOiBpZDtcblxuICAgICAgaWYgKCFmaWVsZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgd2FybkFib3V0TWlzc2luZ0lkZW50aWZpZXIoe1xuICAgICAgICAgIGh0bWxDb250ZW50OiBvdXRlckhUTUwsXG4gICAgICAgICAgZG9jdW1lbnRhdGlvbkFuY2hvckxpbms6ICdoYW5kbGVjaGFuZ2UtZS1yZWFjdGNoYW5nZWV2ZW50YW55LS12b2lkJyxcbiAgICAgICAgICBoYW5kbGVyTmFtZTogJ2hhbmRsZUNoYW5nZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhbCA9IC9udW1iZXJ8cmFuZ2UvLnRlc3QodHlwZSkgPyAocGFyc2VkID0gcGFyc2VGbG9hdCh2YWx1ZSksIGlzTmFOKHBhcnNlZCkgPyAnJyA6IHBhcnNlZCkgOiAvY2hlY2tib3gvLnRlc3QodHlwZSkgLy8gY2hlY2tib3hlc1xuICAgICAgPyBnZXRWYWx1ZUZvckNoZWNrYm94KGdldEluKHN0YXRlLnZhbHVlcywgZmllbGQpLCBjaGVja2VkLCB2YWx1ZSkgOiAhIW11bHRpcGxlIC8vIDxzZWxlY3QgbXVsdGlwbGU+XG4gICAgICA/IGdldFNlbGVjdGVkVmFsdWVzKG9wdGlvbnMpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICAvLyBTZXQgZm9ybSBmaWVsZHMgYnkgbmFtZVxuICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgdmFsKTtcbiAgICB9XG4gIH0sIFtzZXRGaWVsZFZhbHVlLCBzdGF0ZS52YWx1ZXNdKTtcbiAgdmFyIGhhbmRsZUNoYW5nZSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50T3JQYXRoKSB7XG4gICAgaWYgKGlzU3RyaW5nKGV2ZW50T3JQYXRoKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gZXhlY3V0ZUNoYW5nZShldmVudCwgZXZlbnRPclBhdGgpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhlY3V0ZUNoYW5nZShldmVudE9yUGF0aCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHNldEZpZWxkVG91Y2hlZCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGZpZWxkLCB0b3VjaGVkLCBzaG91bGRWYWxpZGF0ZSkge1xuICAgIGlmICh0b3VjaGVkID09PSB2b2lkIDApIHtcbiAgICAgIHRvdWNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfRklFTERfVE9VQ0hFRCcsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgdmFsdWU6IHRvdWNoZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgd2lsbFZhbGlkYXRlID0gc2hvdWxkVmFsaWRhdGUgPT09IHVuZGVmaW5lZCA/IHZhbGlkYXRlT25CbHVyIDogc2hvdWxkVmFsaWRhdGU7XG4gICAgcmV0dXJuIHdpbGxWYWxpZGF0ZSA/IHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkoc3RhdGUudmFsdWVzKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9KTtcbiAgdmFyIGV4ZWN1dGVCbHVyID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGUsIHBhdGgpIHtcbiAgICBpZiAoZS5wZXJzaXN0KSB7XG4gICAgICBlLnBlcnNpc3QoKTtcbiAgICB9XG5cbiAgICB2YXIgX2UkdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgIG5hbWUgPSBfZSR0YXJnZXQubmFtZSxcbiAgICAgICAgaWQgPSBfZSR0YXJnZXQuaWQsXG4gICAgICAgIG91dGVySFRNTCA9IF9lJHRhcmdldC5vdXRlckhUTUw7XG4gICAgdmFyIGZpZWxkID0gcGF0aCA/IHBhdGggOiBuYW1lID8gbmFtZSA6IGlkO1xuXG4gICAgaWYgKCFmaWVsZCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5BYm91dE1pc3NpbmdJZGVudGlmaWVyKHtcbiAgICAgICAgaHRtbENvbnRlbnQ6IG91dGVySFRNTCxcbiAgICAgICAgZG9jdW1lbnRhdGlvbkFuY2hvckxpbms6ICdoYW5kbGVibHVyLWUtYW55LS12b2lkJyxcbiAgICAgICAgaGFuZGxlck5hbWU6ICdoYW5kbGVCbHVyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RmllbGRUb3VjaGVkKGZpZWxkLCB0cnVlKTtcbiAgfSwgW3NldEZpZWxkVG91Y2hlZF0pO1xuICB2YXIgaGFuZGxlQmx1ciA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50T3JTdHJpbmcpIHtcbiAgICBpZiAoaXNTdHJpbmcoZXZlbnRPclN0cmluZykpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVCbHVyKGV2ZW50LCBldmVudE9yU3RyaW5nKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4ZWN1dGVCbHVyKGV2ZW50T3JTdHJpbmcpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBzZXRGb3JtaWtTdGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzdGF0ZU9yQ2IpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihzdGF0ZU9yQ2IpKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfRk9STUlLX1NUQVRFJyxcbiAgICAgICAgcGF5bG9hZDogc3RhdGVPckNiXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX0ZPUk1JS19TVEFURScsXG4gICAgICAgIHBheWxvYWQ6IGZ1bmN0aW9uIHBheWxvYWQoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlT3JDYjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciBzZXRTdGF0dXMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9TVEFUVVMnLFxuICAgICAgcGF5bG9hZDogc3RhdHVzXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHNldFN1Ym1pdHRpbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaXNTdWJtaXR0aW5nKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9JU1NVQk1JVFRJTkcnLFxuICAgICAgcGF5bG9hZDogaXNTdWJtaXR0aW5nXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHN1Ym1pdEZvcm0gPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU1VCTUlUX0FUVEVNUFQnXG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkoKS50aGVuKGZ1bmN0aW9uIChjb21iaW5lZEVycm9ycykge1xuICAgICAgLy8gSW4gY2FzZSBhbiBlcnJvciB3YXMgdGhyb3duIGFuZCBwYXNzZWQgdG8gdGhlIHJlc29sdmVkIFByb21pc2UsXG4gICAgICAvLyBgY29tYmluZWRFcnJvcnNgIGNhbiBiZSBhbiBpbnN0YW5jZSBvZiBhbiBFcnJvci4gV2UgbmVlZCB0byBjaGVja1xuICAgICAgLy8gdGhhdCBhbmQgYWJvcnQgdGhlIHN1Ym1pdC5cbiAgICAgIC8vIElmIHdlIGRvbid0IGRvIHRoYXQsIGNhbGxpbmcgYE9iamVjdC5rZXlzKG5ldyBFcnJvcigpKWAgeWllbGRzIGFuXG4gICAgICAvLyBlbXB0eSBhcnJheSwgd2hpY2ggY2F1c2VzIHRoZSB2YWxpZGF0aW9uIHRvIHBhc3MgYW5kIHRoZSBmb3JtXG4gICAgICAvLyB0byBiZSBzdWJtaXR0ZWQuXG4gICAgICB2YXIgaXNJbnN0YW5jZU9mRXJyb3IgPSBjb21iaW5lZEVycm9ycyBpbnN0YW5jZW9mIEVycm9yO1xuICAgICAgdmFyIGlzQWN0dWFsbHlWYWxpZCA9ICFpc0luc3RhbmNlT2ZFcnJvciAmJiBPYmplY3Qua2V5cyhjb21iaW5lZEVycm9ycykubGVuZ3RoID09PSAwO1xuXG4gICAgICBpZiAoaXNBY3R1YWxseVZhbGlkKSB7XG4gICAgICAgIC8vIFByb2NlZWQgd2l0aCBzdWJtaXQuLi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVG8gcmVzcGVjdCBzeW5jIHN1Ym1pdCBmbnMsIHdlIGNhbid0IHNpbXBseSB3cmFwIGV4ZWN1dGVTdWJtaXQgaW4gYSBwcm9taXNlIGFuZFxuICAgICAgICAvLyBfYWx3YXlzXyBkaXNwYXRjaCBTVUJNSVRfU1VDQ0VTUyBiZWNhdXNlIGlzU3VibWl0dGluZyB3b3VsZCB0aGVuIGFsd2F5cyBiZSBmYWxzZS5cbiAgICAgICAgLy8gVGhpcyB3b3VsZCBiZSBmaW5lIGluIHNpbXBsZSBjYXNlcywgYnV0IG1ha2UgaXQgaW1wb3NzaWJsZSB0byBkaXNhYmxlIHN1Ym1pdFxuICAgICAgICAvLyBidXR0b25zIHdoZXJlIHBlb3BsZSB1c2UgY2FsbGJhY2tzIG9yIHByb21pc2VzIGFzIHNpZGUgZWZmZWN0cyAod2hpY2ggaXMgYmFzaWNhbGx5XG4gICAgICAgIC8vIGFsbCBvZiB2MSBGb3JtaWsgY29kZSkuIEluc3RlYWQsIHJlY2FsbCB0aGF0IHdlIGFyZSBpbnNpZGUgb2YgYSBwcm9taXNlIGNoYWluIGFscmVhZHksXG4gICAgICAgIC8vICBzbyB3ZSBjYW4gdHJ5L2NhdGNoIGV4ZWN1dGVTdWJtaXQoKSwgaWYgaXQgcmV0dXJucyB1bmRlZmluZWQsIHRoZW4ganVzdCBiYWlsLlxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgZXJyb3JzLCB0aHJvdyBlbS4gT3RoZXJ3aXNlLCB3cmFwIGV4ZWN1dGVTdWJtaXQgaW4gYSBwcm9taXNlIGFuZCBoYW5kbGVcbiAgICAgICAgLy8gY2xlYW51cCBvZiBpc1N1Ym1pdHRpbmcgb24gYmVoYWxmIG9mIHRoZSBjb25zdW1lci5cbiAgICAgICAgdmFyIHByb21pc2VPclVuZGVmaW5lZDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHByb21pc2VPclVuZGVmaW5lZCA9IGV4ZWN1dGVTdWJtaXQoKTsgLy8gQmFpbCBpZiBpdCdzIHN5bmMsIGNvbnN1bWVyIGlzIHJlc3BvbnNpYmxlIGZvciBjbGVhbmluZyB1cFxuICAgICAgICAgIC8vIHZpYSBzZXRTdWJtaXR0aW5nKGZhbHNlKVxuXG4gICAgICAgICAgaWYgKHByb21pc2VPclVuZGVmaW5lZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9taXNlT3JVbmRlZmluZWQpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGlmICghIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdTVUJNSVRfU1VDQ0VTUydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKF9lcnJvcnMpIHtcbiAgICAgICAgICBpZiAoISFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAnU1VCTUlUX0ZBSUxVUkUnXG4gICAgICAgICAgICB9KTsgLy8gVGhpcyBpcyBhIGxlZ2l0IGVycm9yIHJlamVjdGVkIGJ5IHRoZSBvblN1Ym1pdCBmblxuICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3Qgd2FudCB0byBicmVhayB0aGUgcHJvbWlzZSBjaGFpblxuXG4gICAgICAgICAgICB0aHJvdyBfZXJyb3JzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCEhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gXl5eIE1ha2Ugc3VyZSBGb3JtaWsgaXMgc3RpbGwgbW91bnRlZCBiZWZvcmUgdXBkYXRpbmcgc3RhdGVcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTVUJNSVRfRkFJTFVSRSdcbiAgICAgICAgfSk7IC8vIHRocm93IGNvbWJpbmVkRXJyb3JzO1xuXG4gICAgICAgIGlmIChpc0luc3RhbmNlT2ZFcnJvcikge1xuICAgICAgICAgIHRocm93IGNvbWJpbmVkRXJyb3JzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBoYW5kbGVTdWJtaXQgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCAmJiBpc0Z1bmN0aW9uKGUucHJldmVudERlZmF1bHQpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUgJiYgZS5zdG9wUHJvcGFnYXRpb24gJiYgaXNGdW5jdGlvbihlLnN0b3BQcm9wYWdhdGlvbikpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSAvLyBXYXJuIGlmIGZvcm0gc3VibWlzc2lvbiBpcyB0cmlnZ2VyZWQgYnkgYSA8YnV0dG9uPiB3aXRob3V0IGFcbiAgICAvLyBzcGVjaWZpZWQgYHR5cGVgIGF0dHJpYnV0ZSBkdXJpbmcgZGV2ZWxvcG1lbnQuIFRoaXMgbWl0aWdhdGVzXG4gICAgLy8gYSBjb21tb24gZ290Y2hhIGluIGZvcm1zIHdpdGggYm90aCByZXNldCBhbmQgc3VibWl0IGJ1dHRvbnMsXG4gICAgLy8gd2hlcmUgdGhlIGRldiBmb3JnZXRzIHRvIGFkZCB0eXBlPVwiYnV0dG9uXCIgdG8gdGhlIHJlc2V0IGJ1dHRvbi5cblxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTYWZlbHkgZ2V0IHRoZSBhY3RpdmUgZWxlbWVudCAod29ya3Mgd2l0aCBJRSlcbiAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZ2V0QWN0aXZlRWxlbWVudCgpO1xuXG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gbnVsbCAmJiBhY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgIShhY3RpdmVFbGVtZW50LmF0dHJpYnV0ZXMgJiYgYWN0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgndHlwZScpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ1lvdSBzdWJtaXR0ZWQgYSBGb3JtaWsgZm9ybSB1c2luZyBhIGJ1dHRvbiB3aXRoIGFuIHVuc3BlY2lmaWVkIGB0eXBlYCBhdHRyaWJ1dGUuICBNb3N0IGJyb3dzZXJzIGRlZmF1bHQgYnV0dG9uIGVsZW1lbnRzIHRvIGB0eXBlPVwic3VibWl0XCJgLiBJZiB0aGlzIGlzIG5vdCBhIHN1Ym1pdCBidXR0b24sIHBsZWFzZSBhZGQgYHR5cGU9XCJidXR0b25cImAuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdEZvcm0oKVtcImNhdGNoXCJdKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IEFuIHVuaGFuZGxlZCBlcnJvciB3YXMgY2F1Z2h0IGZyb20gc3VibWl0Rm9ybSgpXCIsIHJlYXNvbik7XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgaW1wZXJhdGl2ZU1ldGhvZHMgPSB7XG4gICAgcmVzZXRGb3JtOiByZXNldEZvcm0sXG4gICAgdmFsaWRhdGVGb3JtOiB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5LFxuICAgIHZhbGlkYXRlRmllbGQ6IHZhbGlkYXRlRmllbGQsXG4gICAgc2V0RXJyb3JzOiBzZXRFcnJvcnMsXG4gICAgc2V0RmllbGRFcnJvcjogc2V0RmllbGRFcnJvcixcbiAgICBzZXRGaWVsZFRvdWNoZWQ6IHNldEZpZWxkVG91Y2hlZCxcbiAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgIHNldFN0YXR1czogc2V0U3RhdHVzLFxuICAgIHNldFN1Ym1pdHRpbmc6IHNldFN1Ym1pdHRpbmcsXG4gICAgc2V0VG91Y2hlZDogc2V0VG91Y2hlZCxcbiAgICBzZXRWYWx1ZXM6IHNldFZhbHVlcyxcbiAgICBzZXRGb3JtaWtTdGF0ZTogc2V0Rm9ybWlrU3RhdGUsXG4gICAgc3VibWl0Rm9ybTogc3VibWl0Rm9ybVxuICB9O1xuICB2YXIgZXhlY3V0ZVN1Ym1pdCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvblN1Ym1pdChzdGF0ZS52YWx1ZXMsIGltcGVyYXRpdmVNZXRob2RzKTtcbiAgfSk7XG4gIHZhciBoYW5kbGVSZXNldCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0ICYmIGlzRnVuY3Rpb24oZS5wcmV2ZW50RGVmYXVsdCkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZSAmJiBlLnN0b3BQcm9wYWdhdGlvbiAmJiBpc0Z1bmN0aW9uKGUuc3RvcFByb3BhZ2F0aW9uKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKTtcbiAgfSk7XG4gIHZhciBnZXRGaWVsZE1ldGEgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZ2V0SW4oc3RhdGUudmFsdWVzLCBuYW1lKSxcbiAgICAgIGVycm9yOiBnZXRJbihzdGF0ZS5lcnJvcnMsIG5hbWUpLFxuICAgICAgdG91Y2hlZDogISFnZXRJbihzdGF0ZS50b3VjaGVkLCBuYW1lKSxcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0SW4oaW5pdGlhbFZhbHVlcy5jdXJyZW50LCBuYW1lKSxcbiAgICAgIGluaXRpYWxUb3VjaGVkOiAhIWdldEluKGluaXRpYWxUb3VjaGVkLmN1cnJlbnQsIG5hbWUpLFxuICAgICAgaW5pdGlhbEVycm9yOiBnZXRJbihpbml0aWFsRXJyb3JzLmN1cnJlbnQsIG5hbWUpXG4gICAgfTtcbiAgfSwgW3N0YXRlLmVycm9ycywgc3RhdGUudG91Y2hlZCwgc3RhdGUudmFsdWVzXSk7XG4gIHZhciBnZXRGaWVsZEhlbHBlcnMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUsIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgIHJldHVybiBzZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlLCBzaG91bGRWYWxpZGF0ZSk7XG4gICAgICB9LFxuICAgICAgc2V0VG91Y2hlZDogZnVuY3Rpb24gc2V0VG91Y2hlZCh2YWx1ZSwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHNldEZpZWxkVG91Y2hlZChuYW1lLCB2YWx1ZSwgc2hvdWxkVmFsaWRhdGUpO1xuICAgICAgfSxcbiAgICAgIHNldEVycm9yOiBmdW5jdGlvbiBzZXRFcnJvcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc2V0RmllbGRFcnJvcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3NldEZpZWxkVmFsdWUsIHNldEZpZWxkVG91Y2hlZCwgc2V0RmllbGRFcnJvcl0pO1xuICB2YXIgZ2V0RmllbGRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lT3JPcHRpb25zKSB7XG4gICAgdmFyIGlzQW5PYmplY3QgPSBpc09iamVjdChuYW1lT3JPcHRpb25zKTtcbiAgICB2YXIgbmFtZSA9IGlzQW5PYmplY3QgPyBuYW1lT3JPcHRpb25zLm5hbWUgOiBuYW1lT3JPcHRpb25zO1xuICAgIHZhciB2YWx1ZVN0YXRlID0gZ2V0SW4oc3RhdGUudmFsdWVzLCBuYW1lKTtcbiAgICB2YXIgZmllbGQgPSB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgdmFsdWU6IHZhbHVlU3RhdGUsXG4gICAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgb25CbHVyOiBoYW5kbGVCbHVyXG4gICAgfTtcblxuICAgIGlmIChpc0FuT2JqZWN0KSB7XG4gICAgICB2YXIgdHlwZSA9IG5hbWVPck9wdGlvbnMudHlwZSxcbiAgICAgICAgICB2YWx1ZVByb3AgPSBuYW1lT3JPcHRpb25zLnZhbHVlLFxuICAgICAgICAgIGlzID0gbmFtZU9yT3B0aW9ucy5hcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IG5hbWVPck9wdGlvbnMubXVsdGlwbGU7XG5cbiAgICAgIGlmICh0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIGlmICh2YWx1ZVByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSAhIXZhbHVlU3RhdGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGQuY2hlY2tlZCA9ICEhKEFycmF5LmlzQXJyYXkodmFsdWVTdGF0ZSkgJiYgfnZhbHVlU3RhdGUuaW5kZXhPZih2YWx1ZVByb3ApKTtcbiAgICAgICAgICBmaWVsZC52YWx1ZSA9IHZhbHVlUHJvcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIGZpZWxkLmNoZWNrZWQgPSB2YWx1ZVN0YXRlID09PSB2YWx1ZVByb3A7XG4gICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWVQcm9wO1xuICAgICAgfSBlbHNlIGlmIChpcyA9PT0gJ3NlbGVjdCcgJiYgbXVsdGlwbGUpIHtcbiAgICAgICAgZmllbGQudmFsdWUgPSBmaWVsZC52YWx1ZSB8fCBbXTtcbiAgICAgICAgZmllbGQubXVsdGlwbGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWVsZDtcbiAgfSwgW2hhbmRsZUJsdXIsIGhhbmRsZUNoYW5nZSwgc3RhdGUudmFsdWVzXSk7XG4gIHZhciBkaXJ0eSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhaXNFcXVhbChpbml0aWFsVmFsdWVzLmN1cnJlbnQsIHN0YXRlLnZhbHVlcyk7XG4gIH0sIFtpbml0aWFsVmFsdWVzLmN1cnJlbnQsIHN0YXRlLnZhbHVlc10pO1xuICB2YXIgaXNWYWxpZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgaXNJbml0aWFsVmFsaWQgIT09ICd1bmRlZmluZWQnID8gZGlydHkgPyBzdGF0ZS5lcnJvcnMgJiYgT2JqZWN0LmtleXMoc3RhdGUuZXJyb3JzKS5sZW5ndGggPT09IDAgOiBpc0luaXRpYWxWYWxpZCAhPT0gZmFsc2UgJiYgaXNGdW5jdGlvbihpc0luaXRpYWxWYWxpZCkgPyBpc0luaXRpYWxWYWxpZChwcm9wcykgOiBpc0luaXRpYWxWYWxpZCA6IHN0YXRlLmVycm9ycyAmJiBPYmplY3Qua2V5cyhzdGF0ZS5lcnJvcnMpLmxlbmd0aCA9PT0gMDtcbiAgfSwgW2lzSW5pdGlhbFZhbGlkLCBkaXJ0eSwgc3RhdGUuZXJyb3JzLCBwcm9wc10pO1xuXG4gIHZhciBjdHggPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICBpbml0aWFsVmFsdWVzOiBpbml0aWFsVmFsdWVzLmN1cnJlbnQsXG4gICAgaW5pdGlhbEVycm9yczogaW5pdGlhbEVycm9ycy5jdXJyZW50LFxuICAgIGluaXRpYWxUb3VjaGVkOiBpbml0aWFsVG91Y2hlZC5jdXJyZW50LFxuICAgIGluaXRpYWxTdGF0dXM6IGluaXRpYWxTdGF0dXMuY3VycmVudCxcbiAgICBoYW5kbGVCbHVyOiBoYW5kbGVCbHVyLFxuICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIGhhbmRsZVJlc2V0OiBoYW5kbGVSZXNldCxcbiAgICBoYW5kbGVTdWJtaXQ6IGhhbmRsZVN1Ym1pdCxcbiAgICByZXNldEZvcm06IHJlc2V0Rm9ybSxcbiAgICBzZXRFcnJvcnM6IHNldEVycm9ycyxcbiAgICBzZXRGb3JtaWtTdGF0ZTogc2V0Rm9ybWlrU3RhdGUsXG4gICAgc2V0RmllbGRUb3VjaGVkOiBzZXRGaWVsZFRvdWNoZWQsXG4gICAgc2V0RmllbGRWYWx1ZTogc2V0RmllbGRWYWx1ZSxcbiAgICBzZXRGaWVsZEVycm9yOiBzZXRGaWVsZEVycm9yLFxuICAgIHNldFN0YXR1czogc2V0U3RhdHVzLFxuICAgIHNldFN1Ym1pdHRpbmc6IHNldFN1Ym1pdHRpbmcsXG4gICAgc2V0VG91Y2hlZDogc2V0VG91Y2hlZCxcbiAgICBzZXRWYWx1ZXM6IHNldFZhbHVlcyxcbiAgICBzdWJtaXRGb3JtOiBzdWJtaXRGb3JtLFxuICAgIHZhbGlkYXRlRm9ybTogdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eSxcbiAgICB2YWxpZGF0ZUZpZWxkOiB2YWxpZGF0ZUZpZWxkLFxuICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgZGlydHk6IGRpcnR5LFxuICAgIHVucmVnaXN0ZXJGaWVsZDogdW5yZWdpc3RlckZpZWxkLFxuICAgIHJlZ2lzdGVyRmllbGQ6IHJlZ2lzdGVyRmllbGQsXG4gICAgZ2V0RmllbGRQcm9wczogZ2V0RmllbGRQcm9wcyxcbiAgICBnZXRGaWVsZE1ldGE6IGdldEZpZWxkTWV0YSxcbiAgICBnZXRGaWVsZEhlbHBlcnM6IGdldEZpZWxkSGVscGVycyxcbiAgICB2YWxpZGF0ZU9uQmx1cjogdmFsaWRhdGVPbkJsdXIsXG4gICAgdmFsaWRhdGVPbkNoYW5nZTogdmFsaWRhdGVPbkNoYW5nZSxcbiAgICB2YWxpZGF0ZU9uTW91bnQ6IHZhbGlkYXRlT25Nb3VudFxuICB9KTtcblxuICByZXR1cm4gY3R4O1xufVxuZnVuY3Rpb24gRm9ybWlrKHByb3BzKSB7XG4gIHZhciBmb3JtaWtiYWcgPSB1c2VGb3JtaWsocHJvcHMpO1xuICB2YXIgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHJlbmRlciA9IHByb3BzLnJlbmRlcixcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWY7IC8vIFRoaXMgYWxsb3dzIGZvbGtzIHRvIHBhc3MgYSByZWYgdG8gPEZvcm1payAvPlxuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUoaW5uZXJSZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm9ybWlrYmFnO1xuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICEhcHJvcHMucmVuZGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIjxGb3JtaWsgcmVuZGVyPiBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gZnV0dXJlIHZlcnNpb25zIG9mIEZvcm1pay4gUGxlYXNlIHVzZSBhIGNoaWxkIGNhbGxiYWNrIGZ1bmN0aW9uIGluc3RlYWQuIFRvIGdldCByaWQgb2YgdGhpcyB3YXJuaW5nLCByZXBsYWNlIDxGb3JtaWsgcmVuZGVyPXsocHJvcHMpID0+IC4uLn0gLz4gd2l0aCA8Rm9ybWlrPnsocHJvcHMpID0+IC4uLn08L0Zvcm1paz5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9LCBbXSk7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChGb3JtaWtQcm92aWRlciwge1xuICAgIHZhbHVlOiBmb3JtaWtiYWdcbiAgfSwgY29tcG9uZW50ID8gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIGZvcm1pa2JhZykgOiByZW5kZXIgPyByZW5kZXIoZm9ybWlrYmFnKSA6IGNoaWxkcmVuIC8vIGNoaWxkcmVuIGNvbWUgbGFzdCwgYWx3YXlzIGNhbGxlZFxuICA/IGlzRnVuY3Rpb24oY2hpbGRyZW4pID8gY2hpbGRyZW4oZm9ybWlrYmFnKSA6ICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pID8gQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsIDogbnVsbCk7XG59XG5cbmZ1bmN0aW9uIHdhcm5BYm91dE1pc3NpbmdJZGVudGlmaWVyKF9yZWY0KSB7XG4gIHZhciBodG1sQ29udGVudCA9IF9yZWY0Lmh0bWxDb250ZW50LFxuICAgICAgZG9jdW1lbnRhdGlvbkFuY2hvckxpbmsgPSBfcmVmNC5kb2N1bWVudGF0aW9uQW5jaG9yTGluayxcbiAgICAgIGhhbmRsZXJOYW1lID0gX3JlZjQuaGFuZGxlck5hbWU7XG4gIGNvbnNvbGUud2FybihcIldhcm5pbmc6IEZvcm1payBjYWxsZWQgYFwiICsgaGFuZGxlck5hbWUgKyBcImAsIGJ1dCB5b3UgZm9yZ290IHRvIHBhc3MgYW4gYGlkYCBvciBgbmFtZWAgYXR0cmlidXRlIHRvIHlvdXIgaW5wdXQ6XFxuICAgIFwiICsgaHRtbENvbnRlbnQgKyBcIlxcbiAgICBGb3JtaWsgY2Fubm90IGRldGVybWluZSB3aGljaCB2YWx1ZSB0byB1cGRhdGUuIEZvciBtb3JlIGluZm8gc2VlIGh0dHBzOi8vZm9ybWlrLm9yZy9kb2NzL2FwaS9mb3JtaWsjXCIgKyBkb2N1bWVudGF0aW9uQW5jaG9yTGluayArIFwiXFxuICBcIik7XG59XG4vKipcclxuICogVHJhbnNmb3JtIFl1cCBWYWxpZGF0aW9uRXJyb3IgdG8gYSBtb3JlIHVzYWJsZSBvYmplY3RcclxuICovXG5cblxuZnVuY3Rpb24geXVwVG9Gb3JtRXJyb3JzKHl1cEVycm9yKSB7XG4gIHZhciBlcnJvcnMgPSB7fTtcblxuICBpZiAoeXVwRXJyb3IuaW5uZXIpIHtcbiAgICBpZiAoeXVwRXJyb3IuaW5uZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc2V0SW4oZXJyb3JzLCB5dXBFcnJvci5wYXRoLCB5dXBFcnJvci5tZXNzYWdlKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB5dXBFcnJvci5pbm5lciwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmNTtcblxuICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZjUgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjUgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVyciA9IF9yZWY1O1xuXG4gICAgICBpZiAoIWdldEluKGVycm9ycywgZXJyLnBhdGgpKSB7XG4gICAgICAgIGVycm9ycyA9IHNldEluKGVycm9ycywgZXJyLnBhdGgsIGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufVxuLyoqXHJcbiAqIFZhbGlkYXRlIGEgeXVwIHNjaGVtYS5cclxuICovXG5cbmZ1bmN0aW9uIHZhbGlkYXRlWXVwU2NoZW1hKHZhbHVlcywgc2NoZW1hLCBzeW5jLCBjb250ZXh0KSB7XG4gIGlmIChzeW5jID09PSB2b2lkIDApIHtcbiAgICBzeW5jID0gZmFsc2U7XG4gIH1cblxuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IHt9O1xuICB9XG5cbiAgdmFyIHZhbGlkYXRlRGF0YSA9IHByZXBhcmVEYXRhRm9yVmFsaWRhdGlvbih2YWx1ZXMpO1xuICByZXR1cm4gc2NoZW1hW3N5bmMgPyAndmFsaWRhdGVTeW5jJyA6ICd2YWxpZGF0ZSddKHZhbGlkYXRlRGF0YSwge1xuICAgIGFib3J0RWFybHk6IGZhbHNlLFxuICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgfSk7XG59XG4vKipcclxuICogUmVjdXJzaXZlbHkgcHJlcGFyZSB2YWx1ZXMuXHJcbiAqL1xuXG5mdW5jdGlvbiBwcmVwYXJlRGF0YUZvclZhbGlkYXRpb24odmFsdWVzKSB7XG4gIHZhciBkYXRhID0gQXJyYXkuaXNBcnJheSh2YWx1ZXMpID8gW10gOiB7fTtcblxuICBmb3IgKHZhciBrIGluIHZhbHVlcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWVzLCBrKSkge1xuICAgICAgdmFyIGtleSA9IFN0cmluZyhrKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzW2tleV0pID09PSB0cnVlKSB7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlc1trZXldLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPT09IHRydWUgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVwYXJlRGF0YUZvclZhbGlkYXRpb24odmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09ICcnID8gdmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgZGF0YVtrZXldID0gcHJlcGFyZURhdGFGb3JWYWxpZGF0aW9uKHZhbHVlc1trZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFba2V5XSA9IHZhbHVlc1trZXldICE9PSAnJyA/IHZhbHVlc1trZXldIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuLyoqXHJcbiAqIGRlZXBtZXJnZSBhcnJheSBtZXJnaW5nIGFsZ29yaXRobVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vS3lsZUFNYXRoZXdzL2RlZXBtZXJnZSNjb21iaW5lLWFycmF5XHJcbiAqL1xuXG5mdW5jdGlvbiBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiBtZXJnZShlLCBpKSB7XG4gICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBjbG9uZVJlcXVlc3RlZCA9IG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlO1xuICAgICAgdmFyIHNob3VsZENsb25lID0gY2xvbmVSZXF1ZXN0ZWQgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChlKTtcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gc2hvdWxkQ2xvbmUgPyBkZWVwbWVyZ2UoQXJyYXkuaXNBcnJheShlKSA/IFtdIDoge30sIGUsIG9wdGlvbnMpIDogZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QoZSkpIHtcbiAgICAgIGRlc3RpbmF0aW9uW2ldID0gZGVlcG1lcmdlKHRhcmdldFtpXSwgZSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnB1c2goZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufVxuLyoqIFJldHVybiBtdWx0aSBzZWxlY3QgdmFsdWVzIGJhc2VkIG9uIGFuIGFycmF5IG9mIG9wdGlvbnMgKi9cblxuXG5mdW5jdGlvbiBnZXRTZWxlY3RlZFZhbHVlcyhvcHRpb25zKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKG9wdGlvbnMpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwuc2VsZWN0ZWQ7XG4gIH0pLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH0pO1xufVxuLyoqIFJldHVybiB0aGUgbmV4dCB2YWx1ZSBmb3IgYSBjaGVja2JveCAqL1xuXG5cbmZ1bmN0aW9uIGdldFZhbHVlRm9yQ2hlY2tib3goY3VycmVudFZhbHVlLCBjaGVja2VkLCB2YWx1ZVByb3ApIHtcbiAgLy8gSWYgdGhlIGN1cnJlbnQgdmFsdWUgd2FzIGEgYm9vbGVhbiwgcmV0dXJuIGEgYm9vbGVhblxuICBpZiAodHlwZW9mIGN1cnJlbnRWYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oY2hlY2tlZCk7XG4gIH0gLy8gSWYgdGhlIGN1cnJlbnRWYWx1ZSB3YXMgbm90IGEgYm9vbGVhbiB3ZSB3YW50IHRvIHJldHVybiBhbiBhcnJheVxuXG5cbiAgdmFyIGN1cnJlbnRBcnJheU9mVmFsdWVzID0gW107XG4gIHZhciBpc1ZhbHVlSW5BcnJheSA9IGZhbHNlO1xuICB2YXIgaW5kZXggPSAtMTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcbiAgICBpZiAoIXZhbHVlUHJvcCB8fCB2YWx1ZVByb3AgPT0gJ3RydWUnIHx8IHZhbHVlUHJvcCA9PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihjaGVja2VkKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIGN1cnJlbnQgdmFsdWUgaXMgYWxyZWFkeSBhbiBhcnJheSwgdXNlIGl0XG4gICAgY3VycmVudEFycmF5T2ZWYWx1ZXMgPSBjdXJyZW50VmFsdWU7XG4gICAgaW5kZXggPSBjdXJyZW50VmFsdWUuaW5kZXhPZih2YWx1ZVByb3ApO1xuICAgIGlzVmFsdWVJbkFycmF5ID0gaW5kZXggPj0gMDtcbiAgfSAvLyBJZiB0aGUgY2hlY2tib3ggd2FzIGNoZWNrZWQgYW5kIHRoZSB2YWx1ZSBpcyBub3QgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBhcmF5IHdlIHdhbnQgdG8gYWRkIHRoZSBuZXcgdmFsdWUgdG8gdGhlIGFycmF5IG9mIHZhbHVlc1xuXG5cbiAgaWYgKGNoZWNrZWQgJiYgdmFsdWVQcm9wICYmICFpc1ZhbHVlSW5BcnJheSkge1xuICAgIHJldHVybiBjdXJyZW50QXJyYXlPZlZhbHVlcy5jb25jYXQodmFsdWVQcm9wKTtcbiAgfSAvLyBJZiB0aGUgY2hlY2tib3ggd2FzIHVuY2hlY2tlZCBhbmQgdGhlIHZhbHVlIGlzIG5vdCBpbiB0aGUgYXJyYXksIHNpbXBseSByZXR1cm4gdGhlIGFscmVhZHkgZXhpc3RpbmcgYXJyYXkgb2YgdmFsdWVzXG5cblxuICBpZiAoIWlzVmFsdWVJbkFycmF5KSB7XG4gICAgcmV0dXJuIGN1cnJlbnRBcnJheU9mVmFsdWVzO1xuICB9IC8vIElmIHRoZSBjaGVja2JveCB3YXMgdW5jaGVja2VkIGFuZCB0aGUgdmFsdWUgaXMgaW4gdGhlIGFycmF5LCByZW1vdmUgdGhlIHZhbHVlIGFuZCByZXR1cm4gdGhlIGFycmF5XG5cblxuICByZXR1cm4gY3VycmVudEFycmF5T2ZWYWx1ZXMuc2xpY2UoMCwgaW5kZXgpLmNvbmNhdChjdXJyZW50QXJyYXlPZlZhbHVlcy5zbGljZShpbmRleCArIDEpKTtcbn0gLy8gUmVhY3QgY3VycmVudGx5IHRocm93cyBhIHdhcm5pbmcgd2hlbiB1c2luZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIHNlcnZlci5cbi8vIFRvIGdldCBhcm91bmQgaXQsIHdlIGNhbiBjb25kaXRpb25hbGx5IHVzZUVmZmVjdCBvbiB0aGUgc2VydmVyIChuby1vcCkgYW5kXG4vLyB1c2VMYXlvdXRFZmZlY3QgaW4gdGhlIGJyb3dzZXIuXG4vLyBAc2VlIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2dhZWFyb24vZTdkOTdjZGYzOGEyOTA3OTI0ZWExMmU0ZWJkZjNjODVcblxuXG52YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5cbmZ1bmN0aW9uIHVzZUV2ZW50Q2FsbGJhY2soZm4pIHtcbiAgdmFyIHJlZiA9IHVzZVJlZihmbik7IC8vIHdlIGNvcHkgYSByZWYgdG8gdGhlIGNhbGxiYWNrIHNjb3BlZCB0byB0aGUgY3VycmVudCBzdGF0ZS9wcm9wcyBvbiBlYWNoIHJlbmRlclxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gZm47XG4gIH0pO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmLmN1cnJlbnQuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiB1c2VGaWVsZChwcm9wc09yRmllbGROYW1lKSB7XG4gIHZhciBmb3JtaWsgPSB1c2VGb3JtaWtDb250ZXh0KCk7XG4gIHZhciBnZXRGaWVsZFByb3BzID0gZm9ybWlrLmdldEZpZWxkUHJvcHMsXG4gICAgICBnZXRGaWVsZE1ldGEgPSBmb3JtaWsuZ2V0RmllbGRNZXRhLFxuICAgICAgZ2V0RmllbGRIZWxwZXJzID0gZm9ybWlrLmdldEZpZWxkSGVscGVycyxcbiAgICAgIHJlZ2lzdGVyRmllbGQgPSBmb3JtaWsucmVnaXN0ZXJGaWVsZCxcbiAgICAgIHVucmVnaXN0ZXJGaWVsZCA9IGZvcm1pay51bnJlZ2lzdGVyRmllbGQ7XG4gIHZhciBpc0FuT2JqZWN0ID0gaXNPYmplY3QocHJvcHNPckZpZWxkTmFtZSk7IC8vIE5vcm1hbGl6ZSBwcm9wc09yRmllbGROYW1lIHRvIEZpZWxkSG9va0NvbmZpZzxWYWw+XG5cbiAgdmFyIHByb3BzID0gaXNBbk9iamVjdCA/IHByb3BzT3JGaWVsZE5hbWUgOiB7XG4gICAgbmFtZTogcHJvcHNPckZpZWxkTmFtZVxuICB9O1xuICB2YXIgZmllbGROYW1lID0gcHJvcHMubmFtZSxcbiAgICAgIHZhbGlkYXRlRm4gPSBwcm9wcy52YWxpZGF0ZTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmllbGROYW1lKSB7XG4gICAgICByZWdpc3RlckZpZWxkKGZpZWxkTmFtZSwge1xuICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVGblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChmaWVsZE5hbWUpIHtcbiAgICAgICAgdW5yZWdpc3RlckZpZWxkKGZpZWxkTmFtZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3JlZ2lzdGVyRmllbGQsIHVucmVnaXN0ZXJGaWVsZCwgZmllbGROYW1lLCB2YWxpZGF0ZUZuXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICFmb3JtaWsgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICd1c2VGaWVsZCgpIC8gPEZpZWxkIC8+IG11c3QgYmUgdXNlZCB1bmRlcm5lYXRoIGEgPEZvcm1paz4gY29tcG9uZW50IG9yIHdpdGhGb3JtaWsoKSBoaWdoZXIgb3JkZXIgY29tcG9uZW50JykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB9XG5cbiAgIWZpZWxkTmFtZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ0ludmFsaWQgZmllbGQgbmFtZS4gRWl0aGVyIHBhc3MgYHVzZUZpZWxkYCBhIHN0cmluZyBvciBhbiBvYmplY3QgY29udGFpbmluZyBhIGBuYW1lYCBrZXkuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gW2dldEZpZWxkUHJvcHMocHJvcHMpLCBnZXRGaWVsZE1ldGEoZmllbGROYW1lKSwgZ2V0RmllbGRIZWxwZXJzKGZpZWxkTmFtZSldO1xufVxuZnVuY3Rpb24gRmllbGQoX3JlZikge1xuICB2YXIgdmFsaWRhdGUgPSBfcmVmLnZhbGlkYXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIHJlbmRlciA9IF9yZWYucmVuZGVyLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgaXMgPSBfcmVmLmFzLFxuICAgICAgY29tcG9uZW50ID0gX3JlZi5jb21wb25lbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInZhbGlkYXRlXCIsIFwibmFtZVwiLCBcInJlbmRlclwiLCBcImNoaWxkcmVuXCIsIFwiYXNcIiwgXCJjb21wb25lbnRcIl0pO1xuXG4gIHZhciBfdXNlRm9ybWlrQ29udGV4dCA9IHVzZUZvcm1pa0NvbnRleHQoKSxcbiAgICAgIGZvcm1payA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF91c2VGb3JtaWtDb250ZXh0LCBbXCJ2YWxpZGF0ZVwiLCBcInZhbGlkYXRpb25TY2hlbWFcIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgISFyZW5kZXIgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiPEZpZWxkIHJlbmRlcj4gaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBGb3JtaWsuIFBsZWFzZSB1c2UgYSBjaGlsZCBjYWxsYmFjayBmdW5jdGlvbiBpbnN0ZWFkLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgcmVwbGFjZSA8RmllbGQgbmFtZT1cXFwiXCIgKyBuYW1lICsgXCJcXFwiIHJlbmRlcj17KHtmaWVsZCwgZm9ybX0pID0+IC4uLn0gLz4gd2l0aCA8RmllbGQgbmFtZT1cXFwiXCIgKyBuYW1lICsgXCJcXFwiPnsoe2ZpZWxkLCBmb3JtLCBtZXRhfSkgPT4gLi4ufTwvRmllbGQ+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgICEhKGlzICYmIGNoaWxkcmVuICYmIGlzRnVuY3Rpb24oY2hpbGRyZW4pKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmllbGQgYXM+IGFuZCA8RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBhcz4gd2lsbCBiZSBpZ25vcmVkLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgICEhKGNvbXBvbmVudCAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIGNvbXBvbmVudD4gYW5kIDxGaWVsZCBjaGlsZHJlbj4gYXMgYSBmdW5jdGlvbiBpbiB0aGUgc2FtZSA8RmllbGQ+IGNvbXBvbmVudDsgPEZpZWxkIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgICEhKHJlbmRlciAmJiBjaGlsZHJlbiAmJiAhaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIHJlbmRlcj4gYW5kIDxGaWVsZCBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICB9LCBbXSk7XG4gIH0gLy8gUmVnaXN0ZXIgZmllbGQgYW5kIGZpZWxkLWxldmVsIHZhbGlkYXRpb24gd2l0aCBwYXJlbnQgPEZvcm1paz5cblxuXG4gIHZhciByZWdpc3RlckZpZWxkID0gZm9ybWlrLnJlZ2lzdGVyRmllbGQsXG4gICAgICB1bnJlZ2lzdGVyRmllbGQgPSBmb3JtaWsudW5yZWdpc3RlckZpZWxkO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZ2lzdGVyRmllbGQobmFtZSwge1xuICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVucmVnaXN0ZXJGaWVsZChuYW1lKTtcbiAgICB9O1xuICB9LCBbcmVnaXN0ZXJGaWVsZCwgdW5yZWdpc3RlckZpZWxkLCBuYW1lLCB2YWxpZGF0ZV0pO1xuICB2YXIgZmllbGQgPSBmb3JtaWsuZ2V0RmllbGRQcm9wcyhfZXh0ZW5kcyh7XG4gICAgbmFtZTogbmFtZVxuICB9LCBwcm9wcykpO1xuICB2YXIgbWV0YSA9IGZvcm1pay5nZXRGaWVsZE1ldGEobmFtZSk7XG4gIHZhciBsZWdhY3lCYWcgPSB7XG4gICAgZmllbGQ6IGZpZWxkLFxuICAgIGZvcm06IGZvcm1pa1xuICB9O1xuXG4gIGlmIChyZW5kZXIpIHtcbiAgICByZXR1cm4gcmVuZGVyKF9leHRlbmRzKHt9LCBsZWdhY3lCYWcsIHtcbiAgICAgIG1ldGE6IG1ldGFcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbihjaGlsZHJlbikpIHtcbiAgICByZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIGxlZ2FjeUJhZywge1xuICAgICAgbWV0YTogbWV0YVxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICAvLyBUaGlzIGJlaGF2aW9yIGlzIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBlYXJsaWVyIEZvcm1payAwLjkgdG8gMS54XG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcblxuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogaW5uZXJSZWZcbiAgICAgIH0sIGZpZWxkLCByZXN0KSwgY2hpbGRyZW4pO1xuICAgIH0gLy8gV2UgZG9uJ3QgcGFzcyBgbWV0YWAgZm9yIGJhY2t3YXJkcyBjb21wYXRcblxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICBmaWVsZDogZmllbGQsXG4gICAgICBmb3JtOiBmb3JtaWtcbiAgICB9LCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgfSAvLyBkZWZhdWx0IHRvIGlucHV0IGhlcmUgc28gd2UgY2FuIGNoZWNrIGZvciBib3RoIGBhc2AgYW5kIGBjaGlsZHJlbmAgYWJvdmVcblxuXG4gIHZhciBhc0VsZW1lbnQgPSBpcyB8fCAnaW5wdXQnO1xuXG4gIGlmICh0eXBlb2YgYXNFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBfaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgICAgX3Jlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoYXNFbGVtZW50LCBfZXh0ZW5kcyh7XG4gICAgICByZWY6IF9pbm5lclJlZlxuICAgIH0sIGZpZWxkLCBfcmVzdCksIGNoaWxkcmVuKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KGFzRWxlbWVudCwgX2V4dGVuZHMoe30sIGZpZWxkLCBwcm9wcyksIGNoaWxkcmVuKTtcbn1cblxudmFyIEZvcm0gPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAvLyBpT1MgbmVlZHMgYW4gXCJhY3Rpb25cIiBhdHRyaWJ1dGUgZm9yIG5pY2UgaW5wdXQ6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTQ4NTE2Mi80MDY3MjVcbiAgLy8gV2UgZGVmYXVsdCB0aGUgYWN0aW9uIHRvIFwiI1wiIGluIGNhc2UgdGhlIHByZXZlbnREZWZhdWx0IGZhaWxzIChqdXN0IHVwZGF0ZXMgdGhlIFVSTCBoYXNoKVxuICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJhY3Rpb25cIl0pO1xuXG4gIHZhciBfYWN0aW9uID0gYWN0aW9uIHx8ICcjJztcblxuICB2YXIgX3VzZUZvcm1pa0NvbnRleHQgPSB1c2VGb3JtaWtDb250ZXh0KCksXG4gICAgICBoYW5kbGVSZXNldCA9IF91c2VGb3JtaWtDb250ZXh0LmhhbmRsZVJlc2V0LFxuICAgICAgaGFuZGxlU3VibWl0ID0gX3VzZUZvcm1pa0NvbnRleHQuaGFuZGxlU3VibWl0O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBvblN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIHJlZjogcmVmLFxuICAgIG9uUmVzZXQ6IGhhbmRsZVJlc2V0LFxuICAgIGFjdGlvbjogX2FjdGlvblxuICB9LCByZXN0KSk7XG59KTtcbkZvcm0uZGlzcGxheU5hbWUgPSAnRm9ybSc7XG5cbi8qKlxyXG4gKiBBIHB1YmxpYyBoaWdoZXItb3JkZXIgY29tcG9uZW50IHRvIGFjY2VzcyB0aGUgaW1wZXJhdGl2ZSBBUElcclxuICovXG5cbmZ1bmN0aW9uIHdpdGhGb3JtaWsoX3JlZikge1xuICB2YXIgX3JlZiRtYXBQcm9wc1RvVmFsdWVzID0gX3JlZi5tYXBQcm9wc1RvVmFsdWVzLFxuICAgICAgbWFwUHJvcHNUb1ZhbHVlcyA9IF9yZWYkbWFwUHJvcHNUb1ZhbHVlcyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHZhbmlsbGFQcm9wcykge1xuICAgIHZhciB2YWwgPSB7fTtcblxuICAgIGZvciAodmFyIGsgaW4gdmFuaWxsYVByb3BzKSB7XG4gICAgICBpZiAodmFuaWxsYVByb3BzLmhhc093blByb3BlcnR5KGspICYmIHR5cGVvZiB2YW5pbGxhUHJvcHNba10gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQHRvZG8gVHlwZVNjcmlwdCBmaXhcbiAgICAgICAgdmFsW2tdID0gdmFuaWxsYVByb3BzW2tdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH0gOiBfcmVmJG1hcFByb3BzVG9WYWx1ZXMsXG4gICAgICBjb25maWcgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJtYXBQcm9wc1RvVmFsdWVzXCJdKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlRm9ybWlrKENvbXBvbmVudCQxKSB7XG4gICAgdmFyIGNvbXBvbmVudERpc3BsYXlOYW1lID0gQ29tcG9uZW50JDEuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50JDEubmFtZSB8fCBDb21wb25lbnQkMS5jb25zdHJ1Y3RvciAmJiBDb21wb25lbnQkMS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIC8qKlxyXG4gICAgICogV2UgbmVlZCB0byB1c2UgY2xvc3VyZXMgaGVyZSBmb3IgdG8gcHJvdmlkZSB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBwcm9wcyB0b1xyXG4gICAgICogdGhlIHJlc3BlY3RpdmUgd2l0aEZvcm1payBjb25maWcgbWV0aG9kcy5cclxuICAgICAqL1xuXG4gICAgdmFyIEMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKEMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBDKCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcblxuICAgICAgICBfdGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICByZXR1cm4gY29uZmlnLnZhbGlkYXRlKHZhbHVlcywgX3RoaXMucHJvcHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnZhbGlkYXRpb25TY2hlbWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oY29uZmlnLnZhbGlkYXRpb25TY2hlbWEpID8gY29uZmlnLnZhbGlkYXRpb25TY2hlbWEoX3RoaXMucHJvcHMpIDogY29uZmlnLnZhbGlkYXRpb25TY2hlbWE7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKHZhbHVlcywgYWN0aW9ucykge1xuICAgICAgICAgIHJldHVybiBjb25maWcuaGFuZGxlU3VibWl0KHZhbHVlcywgX2V4dGVuZHMoe30sIGFjdGlvbnMsIHtcbiAgICAgICAgICAgIHByb3BzOiBfdGhpcy5wcm9wc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSnVzdCBhdm9pZGluZyBhIHJlbmRlciBjYWxsYmFjayBmb3IgcGVyZiBoZXJlXHJcbiAgICAgICAgICovXG5cblxuICAgICAgICBfdGhpcy5yZW5kZXJGb3JtQ29tcG9uZW50ID0gZnVuY3Rpb24gKGZvcm1pa1Byb3BzKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50JDEsIE9iamVjdC5hc3NpZ24oe30sIF90aGlzLnByb3BzLCBmb3JtaWtQcm9wcykpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IEMucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIl0pO1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZvcm1paywgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIGNvbmZpZywge1xuICAgICAgICAgIHZhbGlkYXRlOiBjb25maWcudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZSxcbiAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBjb25maWcudmFsaWRhdGlvblNjaGVtYSAmJiB0aGlzLnZhbGlkYXRpb25TY2hlbWEsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlczogbWFwUHJvcHNUb1ZhbHVlcyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsU3RhdHVzOiBjb25maWcubWFwUHJvcHNUb1N0YXR1cyAmJiBjb25maWcubWFwUHJvcHNUb1N0YXR1cyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsRXJyb3JzOiBjb25maWcubWFwUHJvcHNUb0Vycm9ycyAmJiBjb25maWcubWFwUHJvcHNUb0Vycm9ycyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsVG91Y2hlZDogY29uZmlnLm1hcFByb3BzVG9Ub3VjaGVkICYmIGNvbmZpZy5tYXBQcm9wc1RvVG91Y2hlZCh0aGlzLnByb3BzKSxcbiAgICAgICAgICBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyRm9ybUNvbXBvbmVudFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQztcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBDLmRpc3BsYXlOYW1lID0gXCJXaXRoRm9ybWlrKFwiICsgY29tcG9uZW50RGlzcGxheU5hbWUgKyBcIilcIjtcbiAgICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MoQywgQ29tcG9uZW50JDEgLy8gY2FzdCB0eXBlIHRvIENvbXBvbmVudENsYXNzIChldmVuIGlmIFNGQylcbiAgICApO1xuICB9O1xufVxuXG4vKipcclxuICogQ29ubmVjdCBhbnkgY29tcG9uZW50IHRvIEZvcm1payBjb250ZXh0LCBhbmQgaW5qZWN0IGFzIGEgcHJvcCBjYWxsZWQgYGZvcm1pa2A7XHJcbiAqIEBwYXJhbSBDb21wIFJlYWN0IENvbXBvbmVudFxyXG4gKi9cblxuZnVuY3Rpb24gY29ubmVjdChDb21wKSB7XG4gIHZhciBDID0gZnVuY3Rpb24gQyhwcm9wcykge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZvcm1pa0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoZm9ybWlrKSB7XG4gICAgICAhISFmb3JtaWsgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiRm9ybWlrIGNvbnRleHQgaXMgdW5kZWZpbmVkLCBwbGVhc2UgdmVyaWZ5IHlvdSBhcmUgcmVuZGVyaW5nIDxGb3JtPiwgPEZpZWxkPiwgPEZhc3RGaWVsZD4sIDxGaWVsZEFycmF5Piwgb3IgeW91ciBjdXN0b20gY29udGV4dC11c2luZyBjb21wb25lbnQgYXMgYSBjaGlsZCBvZiBhIDxGb3JtaWs+IGNvbXBvbmVudC4gQ29tcG9uZW50IG5hbWU6IFwiICsgQ29tcC5uYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb21wLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICBmb3JtaWs6IGZvcm1pa1xuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjb21wb25lbnREaXNwbGF5TmFtZSA9IENvbXAuZGlzcGxheU5hbWUgfHwgQ29tcC5uYW1lIHx8IENvbXAuY29uc3RydWN0b3IgJiYgQ29tcC5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdDb21wb25lbnQnOyAvLyBBc3NpZ24gQ29tcCB0byBDLldyYXBwZWRDb21wb25lbnQgc28gd2UgY2FuIGFjY2VzcyB0aGUgaW5uZXIgY29tcG9uZW50IGluIHRlc3RzXG4gIC8vIEZvciBleGFtcGxlLCA8RmllbGQuV3JhcHBlZENvbXBvbmVudCAvPiBnZXRzIHVzIDxGaWVsZElubmVyLz5cblxuICBDLldyYXBwZWRDb21wb25lbnQgPSBDb21wO1xuICBDLmRpc3BsYXlOYW1lID0gXCJGb3JtaWtDb25uZWN0KFwiICsgY29tcG9uZW50RGlzcGxheU5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKEMsIENvbXAgLy8gY2FzdCB0eXBlIHRvIENvbXBvbmVudENsYXNzIChldmVuIGlmIFNGQylcbiAgKTtcbn1cblxuLyoqXHJcbiAqIFNvbWUgYXJyYXkgaGVscGVycyFcclxuICovXG5cbnZhciBtb3ZlID0gZnVuY3Rpb24gbW92ZShhcnJheSwgZnJvbSwgdG8pIHtcbiAgdmFyIGNvcHkgPSBjb3B5QXJyYXlMaWtlKGFycmF5KTtcbiAgdmFyIHZhbHVlID0gY29weVtmcm9tXTtcbiAgY29weS5zcGxpY2UoZnJvbSwgMSk7XG4gIGNvcHkuc3BsaWNlKHRvLCAwLCB2YWx1ZSk7XG4gIHJldHVybiBjb3B5O1xufTtcbnZhciBzd2FwID0gZnVuY3Rpb24gc3dhcChhcnJheUxpa2UsIGluZGV4QSwgaW5kZXhCKSB7XG4gIHZhciBjb3B5ID0gY29weUFycmF5TGlrZShhcnJheUxpa2UpO1xuICB2YXIgYSA9IGNvcHlbaW5kZXhBXTtcbiAgY29weVtpbmRleEFdID0gY29weVtpbmRleEJdO1xuICBjb3B5W2luZGV4Ql0gPSBhO1xuICByZXR1cm4gY29weTtcbn07XG52YXIgaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KGFycmF5TGlrZSwgaW5kZXgsIHZhbHVlKSB7XG4gIHZhciBjb3B5ID0gY29weUFycmF5TGlrZShhcnJheUxpa2UpO1xuICBjb3B5LnNwbGljZShpbmRleCwgMCwgdmFsdWUpO1xuICByZXR1cm4gY29weTtcbn07XG52YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UoYXJyYXlMaWtlLCBpbmRleCwgdmFsdWUpIHtcbiAgdmFyIGNvcHkgPSBjb3B5QXJyYXlMaWtlKGFycmF5TGlrZSk7XG4gIGNvcHlbaW5kZXhdID0gdmFsdWU7XG4gIHJldHVybiBjb3B5O1xufTtcblxudmFyIGNvcHlBcnJheUxpa2UgPSBmdW5jdGlvbiBjb3B5QXJyYXlMaWtlKGFycmF5TGlrZSkge1xuICBpZiAoIWFycmF5TGlrZSkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFycmF5TGlrZSkpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGFycmF5TGlrZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1heEluZGV4ID0gT2JqZWN0LmtleXMoYXJyYXlMaWtlKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGtleSk7XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChtYXgsIGVsKSB7XG4gICAgICByZXR1cm4gZWwgPiBtYXggPyBlbCA6IG1heDtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShfZXh0ZW5kcyh7fSwgYXJyYXlMaWtlLCB7XG4gICAgICBsZW5ndGg6IG1heEluZGV4ICsgMVxuICAgIH0pKTtcbiAgfVxufTtcblxudmFyIEZpZWxkQXJyYXlJbm5lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShGaWVsZEFycmF5SW5uZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZpZWxkQXJyYXlJbm5lcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMudXBkYXRlQXJyYXlGaWVsZCA9IGZ1bmN0aW9uIChmbiwgYWx0ZXJUb3VjaGVkLCBhbHRlckVycm9ycykge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWUsXG4gICAgICAgICAgc2V0Rm9ybWlrU3RhdGUgPSBfdGhpcyRwcm9wcy5mb3JtaWsuc2V0Rm9ybWlrU3RhdGU7XG4gICAgICBzZXRGb3JtaWtTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIHZhciB1cGRhdGVFcnJvcnMgPSB0eXBlb2YgYWx0ZXJFcnJvcnMgPT09ICdmdW5jdGlvbicgPyBhbHRlckVycm9ycyA6IGZuO1xuICAgICAgICB2YXIgdXBkYXRlVG91Y2hlZCA9IHR5cGVvZiBhbHRlclRvdWNoZWQgPT09ICdmdW5jdGlvbicgPyBhbHRlclRvdWNoZWQgOiBmbjsgLy8gdmFsdWVzIGZuIHNob3VsZCBiZSBleGVjdXRlZCBiZWZvcmUgdXBkYXRlRXJyb3JzIGFuZCB1cGRhdGVUb3VjaGVkLFxuICAgICAgICAvLyBvdGhlcndpc2UgaXQgY2F1c2VzIGFuIGVycm9yIHdpdGggdW5zaGlmdC5cblxuICAgICAgICB2YXIgdmFsdWVzID0gc2V0SW4ocHJldlN0YXRlLnZhbHVlcywgbmFtZSwgZm4oZ2V0SW4ocHJldlN0YXRlLnZhbHVlcywgbmFtZSkpKTtcbiAgICAgICAgdmFyIGZpZWxkRXJyb3IgPSBhbHRlckVycm9ycyA/IHVwZGF0ZUVycm9ycyhnZXRJbihwcmV2U3RhdGUuZXJyb3JzLCBuYW1lKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBmaWVsZFRvdWNoZWQgPSBhbHRlclRvdWNoZWQgPyB1cGRhdGVUb3VjaGVkKGdldEluKHByZXZTdGF0ZS50b3VjaGVkLCBuYW1lKSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGlzRW1wdHlBcnJheShmaWVsZEVycm9yKSkge1xuICAgICAgICAgIGZpZWxkRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbXB0eUFycmF5KGZpZWxkVG91Y2hlZCkpIHtcbiAgICAgICAgICBmaWVsZFRvdWNoZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIGVycm9yczogYWx0ZXJFcnJvcnMgPyBzZXRJbihwcmV2U3RhdGUuZXJyb3JzLCBuYW1lLCBmaWVsZEVycm9yKSA6IHByZXZTdGF0ZS5lcnJvcnMsXG4gICAgICAgICAgdG91Y2hlZDogYWx0ZXJUb3VjaGVkID8gc2V0SW4ocHJldlN0YXRlLnRvdWNoZWQsIG5hbWUsIGZpZWxkVG91Y2hlZCkgOiBwcmV2U3RhdGUudG91Y2hlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5wdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXlMaWtlKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoY29weUFycmF5TGlrZShhcnJheUxpa2UpLCBbY2xvbmVEZWVwKHZhbHVlKV0pO1xuICAgICAgfSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnB1c2godmFsdWUpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3dhcCA9IGZ1bmN0aW9uIChpbmRleEEsIGluZGV4Qikge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBzd2FwKGFycmF5LCBpbmRleEEsIGluZGV4Qik7XG4gICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlU3dhcCA9IGZ1bmN0aW9uIChpbmRleEEsIGluZGV4Qikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN3YXAoaW5kZXhBLCBpbmRleEIpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMubW92ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBtb3ZlKGFycmF5LCBmcm9tLCB0byk7XG4gICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlTW92ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm1vdmUoZnJvbSwgdG8pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBpbnNlcnQoYXJyYXksIGluZGV4LCB2YWx1ZSk7XG4gICAgICB9LCBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGluc2VydChhcnJheSwgaW5kZXgsIG51bGwpO1xuICAgICAgfSwgZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiBpbnNlcnQoYXJyYXksIGluZGV4LCBudWxsKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVJbnNlcnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaW5zZXJ0KGluZGV4LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5yZXBsYWNlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHJldHVybiByZXBsYWNlKGFycmF5LCBpbmRleCwgdmFsdWUpO1xuICAgICAgfSwgZmFsc2UsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVwbGFjZSA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYWNlKGluZGV4LCB2YWx1ZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy51bnNoaWZ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gLTE7XG5cbiAgICAgIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHZhciBhcnIgPSBhcnJheSA/IFt2YWx1ZV0uY29uY2F0KGFycmF5KSA6IFt2YWx1ZV07XG5cbiAgICAgICAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH0sIGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICB2YXIgYXJyID0gYXJyYXkgPyBbbnVsbF0uY29uY2F0KGFycmF5KSA6IFtudWxsXTtcblxuICAgICAgICBpZiAobGVuZ3RoIDwgMCkge1xuICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgfSwgZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgIHZhciBhcnIgPSBhcnJheSA/IFtudWxsXS5jb25jYXQoYXJyYXkpIDogW251bGxdO1xuXG4gICAgICAgIGlmIChsZW5ndGggPCAwKSB7XG4gICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlVW5zaGlmdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuc2hpZnQodmFsdWUpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVtb3ZlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlKGluZGV4KTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVBvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wb3AoKTtcbiAgICAgIH07XG4gICAgfTsgLy8gV2UgbmVlZCBUeXBlU2NyaXB0IGdlbmVyaWNzIG9uIHRoZXNlLCBzbyB3ZSdsbCBiaW5kIHRoZW0gaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgLy8gQHRvZG8gRml4IFRTIDMuMi4xXG5cblxuICAgIF90aGlzLnJlbW92ZSA9IF90aGlzLnJlbW92ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5wb3AgPSBfdGhpcy5wb3AuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEZpZWxkQXJyYXlJbm5lci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlICYmIHRoaXMucHJvcHMuZm9ybWlrLnZhbGlkYXRlT25DaGFuZ2UgJiYgIWlzRXF1YWwoZ2V0SW4ocHJldlByb3BzLmZvcm1pay52YWx1ZXMsIHByZXZQcm9wcy5uYW1lKSwgZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsudmFsdWVzLCB0aGlzLnByb3BzLm5hbWUpKSkge1xuICAgICAgdGhpcy5wcm9wcy5mb3JtaWsudmFsaWRhdGVGb3JtKHRoaXMucHJvcHMuZm9ybWlrLnZhbHVlcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoaW5kZXgpIHtcbiAgICAvLyBXZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhbHNvIHJlbW92ZSByZWxldmFudCBwaWVjZXMgb2YgYHRvdWNoZWRgIGFuZCBgZXJyb3JzYFxuICAgIHZhciByZXN1bHQ7XG4gICAgdGhpcy51cGRhdGVBcnJheUZpZWxkKCAvLyBzbyB0aGlzIGdldHMgY2FsbCAzIHRpbWVzXG4gICAgZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICB2YXIgY29weSA9IGFycmF5ID8gY29weUFycmF5TGlrZShhcnJheSkgOiBbXTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gY29weVtpbmRleF07XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKGNvcHkuc3BsaWNlKSkge1xuICAgICAgICBjb3B5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb3B5O1xuICAgIH0sIHRydWUsIHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnBvcCA9IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAvLyBSZW1vdmUgcmVsZXZhbnQgcGllY2VzIG9mIGB0b3VjaGVkYCBhbmQgYGVycm9yc2AgdG9vIVxuICAgIHZhciByZXN1bHQ7XG4gICAgdGhpcy51cGRhdGVBcnJheUZpZWxkKCAvLyBzbyB0aGlzIGdldHMgY2FsbCAzIHRpbWVzXG4gICAgZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICB2YXIgdG1wID0gYXJyYXk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdCA9IHRtcCAmJiB0bXAucG9wICYmIHRtcC5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRtcDtcbiAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGFycmF5SGVscGVycyA9IHtcbiAgICAgIHB1c2g6IHRoaXMucHVzaCxcbiAgICAgIHBvcDogdGhpcy5wb3AsXG4gICAgICBzd2FwOiB0aGlzLnN3YXAsXG4gICAgICBtb3ZlOiB0aGlzLm1vdmUsXG4gICAgICBpbnNlcnQ6IHRoaXMuaW5zZXJ0LFxuICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgdW5zaGlmdDogdGhpcy51bnNoaWZ0LFxuICAgICAgcmVtb3ZlOiB0aGlzLnJlbW92ZSxcbiAgICAgIGhhbmRsZVB1c2g6IHRoaXMuaGFuZGxlUHVzaCxcbiAgICAgIGhhbmRsZVBvcDogdGhpcy5oYW5kbGVQb3AsXG4gICAgICBoYW5kbGVTd2FwOiB0aGlzLmhhbmRsZVN3YXAsXG4gICAgICBoYW5kbGVNb3ZlOiB0aGlzLmhhbmRsZU1vdmUsXG4gICAgICBoYW5kbGVJbnNlcnQ6IHRoaXMuaGFuZGxlSW5zZXJ0LFxuICAgICAgaGFuZGxlUmVwbGFjZTogdGhpcy5oYW5kbGVSZXBsYWNlLFxuICAgICAgaGFuZGxlVW5zaGlmdDogdGhpcy5oYW5kbGVVbnNoaWZ0LFxuICAgICAgaGFuZGxlUmVtb3ZlOiB0aGlzLmhhbmRsZVJlbW92ZVxuICAgIH07XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29tcG9uZW50ID0gX3RoaXMkcHJvcHMyLmNvbXBvbmVudCxcbiAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMyLnJlbmRlcixcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgIG5hbWUgPSBfdGhpcyRwcm9wczIubmFtZSxcbiAgICAgICAgX3RoaXMkcHJvcHMyJGZvcm1payA9IF90aGlzJHByb3BzMi5mb3JtaWssXG4gICAgICAgIHJlc3RPZkZvcm1payA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzMiRmb3JtaWssIFtcInZhbGlkYXRlXCIsIFwidmFsaWRhdGlvblNjaGVtYVwiXSk7XG5cbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgYXJyYXlIZWxwZXJzLCB7XG4gICAgICBmb3JtOiByZXN0T2ZGb3JtaWssXG4gICAgICBuYW1lOiBuYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcG9uZW50ID8gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKSA6IHJlbmRlciA/IHJlbmRlcihwcm9wcykgOiBjaGlsZHJlbiAvLyBjaGlsZHJlbiBjb21lIGxhc3QsIGFsd2F5cyBjYWxsZWRcbiAgICA/IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHByb3BzKSA6ICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pID8gQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gRmllbGRBcnJheUlubmVyO1xufShDb21wb25lbnQpO1xuXG5GaWVsZEFycmF5SW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlXG59O1xudmFyIEZpZWxkQXJyYXkgPSAvKiNfX1BVUkVfXyovY29ubmVjdChGaWVsZEFycmF5SW5uZXIpO1xuXG52YXIgRXJyb3JNZXNzYWdlSW1wbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShFcnJvck1lc3NhZ2VJbXBsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFcnJvck1lc3NhZ2VJbXBsKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBFcnJvck1lc3NhZ2VJbXBsLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzKSB7XG4gICAgaWYgKGdldEluKHRoaXMucHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSAhPT0gZ2V0SW4ocHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSB8fCBnZXRJbih0aGlzLnByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpICE9PSBnZXRJbihwcm9wcy5mb3JtaWsudG91Y2hlZCwgdGhpcy5wcm9wcy5uYW1lKSB8fCBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBmb3JtaWsgPSBfdGhpcyRwcm9wcy5mb3JtaWssXG4gICAgICAgIHJlbmRlciA9IF90aGlzJHByb3BzLnJlbmRlcixcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWUsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY29tcG9uZW50XCIsIFwiZm9ybWlrXCIsIFwicmVuZGVyXCIsIFwiY2hpbGRyZW5cIiwgXCJuYW1lXCJdKTtcblxuICAgIHZhciB0b3VjaCA9IGdldEluKGZvcm1pay50b3VjaGVkLCBuYW1lKTtcbiAgICB2YXIgZXJyb3IgPSBnZXRJbihmb3JtaWsuZXJyb3JzLCBuYW1lKTtcbiAgICByZXR1cm4gISF0b3VjaCAmJiAhIWVycm9yID8gcmVuZGVyID8gaXNGdW5jdGlvbihyZW5kZXIpID8gcmVuZGVyKGVycm9yKSA6IG51bGwgOiBjaGlsZHJlbiA/IGlzRnVuY3Rpb24oY2hpbGRyZW4pID8gY2hpbGRyZW4oZXJyb3IpIDogbnVsbCA6IGNvbXBvbmVudCA/IGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCByZXN0LCBlcnJvcikgOiBlcnJvciA6IG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEVycm9yTWVzc2FnZUltcGw7XG59KENvbXBvbmVudCk7XG5cbnZhciBFcnJvck1lc3NhZ2UgPSAvKiNfX1BVUkVfXyovY29ubmVjdChFcnJvck1lc3NhZ2VJbXBsKTtcblxuLyoqXHJcbiAqIEN1c3RvbSBGaWVsZCBjb21wb25lbnQgZm9yIHF1aWNrbHkgaG9va2luZyBpbnRvIEZvcm1pa1xyXG4gKiBjb250ZXh0IGFuZCB3aXJpbmcgdXAgZm9ybXMuXHJcbiAqL1xuXG52YXIgRmFzdEZpZWxkSW5uZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoRmFzdEZpZWxkSW5uZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEZhc3RGaWVsZElubmVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgdmFyIHJlbmRlciA9IHByb3BzLnJlbmRlcixcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBpcyA9IHByb3BzLmFzLFxuICAgICAgICBuYW1lID0gcHJvcHMubmFtZTtcbiAgICAhIXJlbmRlciA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCI8RmFzdEZpZWxkIHJlbmRlcj4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBhIGNoaWxkIGNhbGxiYWNrIGZ1bmN0aW9uIGluc3RlYWQ6IDxGYXN0RmllbGQgbmFtZT17XCIgKyBuYW1lICsgXCJ9Pntwcm9wcyA9PiAuLi59PC9GYXN0RmllbGQ+IGluc3RlYWQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAhIShjb21wb25lbnQgJiYgcmVuZGVyKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmFzdEZpZWxkIGNvbXBvbmVudD4gYW5kIDxGYXN0RmllbGQgcmVuZGVyPiBpbiB0aGUgc2FtZSA8RmFzdEZpZWxkPiBjb21wb25lbnQ7IDxGYXN0RmllbGQgY29tcG9uZW50PiB3aWxsIGJlIGlnbm9yZWQnKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISEoaXMgJiYgY2hpbGRyZW4gJiYgaXNGdW5jdGlvbihjaGlsZHJlbikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGYXN0RmllbGQgYXM+IGFuZCA8RmFzdEZpZWxkIGNoaWxkcmVuPiBhcyBhIGZ1bmN0aW9uIGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBhcz4gd2lsbCBiZSBpZ25vcmVkLicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAhIShjb21wb25lbnQgJiYgY2hpbGRyZW4gJiYgaXNGdW5jdGlvbihjaGlsZHJlbikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGYXN0RmllbGQgY29tcG9uZW50PiBhbmQgPEZhc3RGaWVsZCBjaGlsZHJlbj4gYXMgYSBmdW5jdGlvbiBpbiB0aGUgc2FtZSA8RmFzdEZpZWxkPiBjb21wb25lbnQ7IDxGYXN0RmllbGQgY29tcG9uZW50PiB3aWxsIGJlIGlnbm9yZWQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEhKHJlbmRlciAmJiBjaGlsZHJlbiAmJiAhaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCByZW5kZXI+IGFuZCA8RmFzdEZpZWxkIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSA8RmFzdEZpZWxkPiBjb21wb25lbnQ7IDxGYXN0RmllbGQgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRmFzdEZpZWxkSW5uZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRVcGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnNob3VsZFVwZGF0ZShwcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5uYW1lICE9PSB0aGlzLnByb3BzLm5hbWUgfHwgZ2V0SW4ocHJvcHMuZm9ybWlrLnZhbHVlcywgdGhpcy5wcm9wcy5uYW1lKSAhPT0gZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsudmFsdWVzLCB0aGlzLnByb3BzLm5hbWUpIHx8IGdldEluKHByb3BzLmZvcm1pay5lcnJvcnMsIHRoaXMucHJvcHMubmFtZSkgIT09IGdldEluKHRoaXMucHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSB8fCBnZXRJbihwcm9wcy5mb3JtaWsudG91Y2hlZCwgdGhpcy5wcm9wcy5uYW1lKSAhPT0gZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsudG91Y2hlZCwgdGhpcy5wcm9wcy5uYW1lKSB8fCBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggfHwgcHJvcHMuZm9ybWlrLmlzU3VibWl0dGluZyAhPT0gdGhpcy5wcm9wcy5mb3JtaWsuaXNTdWJtaXR0aW5nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBSZWdpc3RlciB0aGUgRmllbGQgd2l0aCB0aGUgcGFyZW50IEZvcm1pay4gUGFyZW50IHdpbGwgY3ljbGUgdGhyb3VnaFxuICAgIC8vIHJlZ2lzdGVyZWQgRmllbGQncyB2YWxpZGF0ZSBmbnMgcmlnaHQgcHJpb3IgdG8gc3VibWl0XG4gICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHtcbiAgICAgIHZhbGlkYXRlOiB0aGlzLnByb3BzLnZhbGlkYXRlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSBwcmV2UHJvcHMubmFtZSkge1xuICAgICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHByZXZQcm9wcy5uYW1lKTtcbiAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB7XG4gICAgICAgIHZhbGlkYXRlOiB0aGlzLnByb3BzLnZhbGlkYXRlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZSAhPT0gcHJldlByb3BzLnZhbGlkYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwge1xuICAgICAgICB2YWxpZGF0ZTogdGhpcy5wcm9wcy52YWxpZGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZm9ybWlrLnVucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWUsXG4gICAgICAgIHJlbmRlciA9IF90aGlzJHByb3BzLnJlbmRlcixcbiAgICAgICAgaXMgPSBfdGhpcyRwcm9wcy5hcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBmb3JtaWsgPSBfdGhpcyRwcm9wcy5mb3JtaWssXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcInZhbGlkYXRlXCIsIFwibmFtZVwiLCBcInJlbmRlclwiLCBcImFzXCIsIFwiY2hpbGRyZW5cIiwgXCJjb21wb25lbnRcIiwgXCJzaG91bGRVcGRhdGVcIiwgXCJmb3JtaWtcIl0pO1xuXG4gICAgdmFyIHJlc3RPZkZvcm1payA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKGZvcm1paywgW1widmFsaWRhdGVcIiwgXCJ2YWxpZGF0aW9uU2NoZW1hXCJdKTtcblxuICAgIHZhciBmaWVsZCA9IGZvcm1pay5nZXRGaWVsZFByb3BzKF9leHRlbmRzKHtcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9LCBwcm9wcykpO1xuICAgIHZhciBtZXRhID0ge1xuICAgICAgdmFsdWU6IGdldEluKGZvcm1pay52YWx1ZXMsIG5hbWUpLFxuICAgICAgZXJyb3I6IGdldEluKGZvcm1pay5lcnJvcnMsIG5hbWUpLFxuICAgICAgdG91Y2hlZDogISFnZXRJbihmb3JtaWsudG91Y2hlZCwgbmFtZSksXG4gICAgICBpbml0aWFsVmFsdWU6IGdldEluKGZvcm1pay5pbml0aWFsVmFsdWVzLCBuYW1lKSxcbiAgICAgIGluaXRpYWxUb3VjaGVkOiAhIWdldEluKGZvcm1pay5pbml0aWFsVG91Y2hlZCwgbmFtZSksXG4gICAgICBpbml0aWFsRXJyb3I6IGdldEluKGZvcm1pay5pbml0aWFsRXJyb3JzLCBuYW1lKVxuICAgIH07XG4gICAgdmFyIGJhZyA9IHtcbiAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgIG1ldGE6IG1ldGEsXG4gICAgICBmb3JtOiByZXN0T2ZGb3JtaWtcbiAgICB9O1xuXG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgcmV0dXJuIHJlbmRlcihiYWcpO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKGJhZyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgLy8gVGhpcyBiZWhhdmlvciBpcyBiYWNrd2FyZHMgY29tcGF0IHdpdGggZWFybGllciBGb3JtaWsgMC45IHRvIDEueFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgcmVmOiBpbm5lclJlZlxuICAgICAgICB9LCBmaWVsZCwgcmVzdCksIGNoaWxkcmVuKTtcbiAgICAgIH0gLy8gV2UgZG9uJ3QgcGFzcyBgbWV0YWAgZm9yIGJhY2t3YXJkcyBjb21wYXRcblxuXG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICBmb3JtOiBmb3JtaWtcbiAgICAgIH0sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIH0gLy8gZGVmYXVsdCB0byBpbnB1dCBoZXJlIHNvIHdlIGNhbiBjaGVjayBmb3IgYm90aCBgYXNgIGFuZCBgY2hpbGRyZW5gIGFib3ZlXG5cblxuICAgIHZhciBhc0VsZW1lbnQgPSBpcyB8fCAnaW5wdXQnO1xuXG4gICAgaWYgKHR5cGVvZiBhc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgX2lubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgX3Jlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuXG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChhc0VsZW1lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgcmVmOiBfaW5uZXJSZWZcbiAgICAgIH0sIGZpZWxkLCBfcmVzdCksIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChhc0VsZW1lbnQsIF9leHRlbmRzKHt9LCBmaWVsZCwgcHJvcHMpLCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIEZhc3RGaWVsZElubmVyO1xufShDb21wb25lbnQpO1xuXG52YXIgRmFzdEZpZWxkID0gLyojX19QVVJFX18qL2Nvbm5lY3QoRmFzdEZpZWxkSW5uZXIpO1xuXG5leHBvcnQgeyBFcnJvck1lc3NhZ2UsIEZhc3RGaWVsZCwgRmllbGQsIEZpZWxkQXJyYXksIEZvcm0sIEZvcm1paywgRm9ybWlrQ29uc3VtZXIsIEZvcm1pa0NvbnRleHQsIEZvcm1pa1Byb3ZpZGVyLCBjb25uZWN0LCBnZXRBY3RpdmVFbGVtZW50LCBnZXRJbiwgaW5zZXJ0LCBpc0VtcHR5QXJyYXksIGlzRW1wdHlDaGlsZHJlbiwgaXNGdW5jdGlvbiwgaXNJbnB1dEV2ZW50LCBpc0ludGVnZXIsIGlzTmFOJDEgYXMgaXNOYU4sIGlzT2JqZWN0LCBpc1Byb21pc2UsIGlzU3RyaW5nLCBtb3ZlLCBwcmVwYXJlRGF0YUZvclZhbGlkYXRpb24sIHJlcGxhY2UsIHNldEluLCBzZXROZXN0ZWRPYmplY3RWYWx1ZXMsIHN3YXAsIHVzZUZpZWxkLCB1c2VGb3JtaWssIHVzZUZvcm1pa0NvbnRleHQsIHZhbGlkYXRlWXVwU2NoZW1hLCB3aXRoRm9ybWlrLCB5dXBUb0Zvcm1FcnJvcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1pay5lc20uanMubWFwXG4iLCJ2YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0T2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdGlmICghb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5leHBvcnQgZGVmYXVsdCBkZWVwbWVyZ2VfMTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFWaWV3O1xuIiwiaW1wb3J0IGhhc2hDbGVhciBmcm9tICcuL19oYXNoQ2xlYXIuanMnO1xuaW1wb3J0IGhhc2hEZWxldGUgZnJvbSAnLi9faGFzaERlbGV0ZS5qcyc7XG5pbXBvcnQgaGFzaEdldCBmcm9tICcuL19oYXNoR2V0LmpzJztcbmltcG9ydCBoYXNoSGFzIGZyb20gJy4vX2hhc2hIYXMuanMnO1xuaW1wb3J0IGhhc2hTZXQgZnJvbSAnLi9faGFzaFNldC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBIYXNoO1xuIiwiaW1wb3J0IGxpc3RDYWNoZUNsZWFyIGZyb20gJy4vX2xpc3RDYWNoZUNsZWFyLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVEZWxldGUgZnJvbSAnLi9fbGlzdENhY2hlRGVsZXRlLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVHZXQgZnJvbSAnLi9fbGlzdENhY2hlR2V0LmpzJztcbmltcG9ydCBsaXN0Q2FjaGVIYXMgZnJvbSAnLi9fbGlzdENhY2hlSGFzLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVTZXQgZnJvbSAnLi9fbGlzdENhY2hlU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q2FjaGU7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiIsImltcG9ydCBtYXBDYWNoZUNsZWFyIGZyb20gJy4vX21hcENhY2hlQ2xlYXIuanMnO1xuaW1wb3J0IG1hcENhY2hlRGVsZXRlIGZyb20gJy4vX21hcENhY2hlRGVsZXRlLmpzJztcbmltcG9ydCBtYXBDYWNoZUdldCBmcm9tICcuL19tYXBDYWNoZUdldC5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVIYXMgZnJvbSAnLi9fbWFwQ2FjaGVIYXMuanMnO1xuaW1wb3J0IG1hcENhY2hlU2V0IGZyb20gJy4vX21hcENhY2hlU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENhY2hlO1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldDtcbiIsImltcG9ydCBMaXN0Q2FjaGUgZnJvbSAnLi9fTGlzdENhY2hlLmpzJztcbmltcG9ydCBzdGFja0NsZWFyIGZyb20gJy4vX3N0YWNrQ2xlYXIuanMnO1xuaW1wb3J0IHN0YWNrRGVsZXRlIGZyb20gJy4vX3N0YWNrRGVsZXRlLmpzJztcbmltcG9ydCBzdGFja0dldCBmcm9tICcuL19zdGFja0dldC5qcyc7XG5pbXBvcnQgc3RhY2tIYXMgZnJvbSAnLi9fc3RhY2tIYXMuanMnO1xuaW1wb3J0IHN0YWNrU2V0IGZyb20gJy4vX3N0YWNrU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFjaztcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IFVpbnQ4QXJyYXk7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxuZXhwb3J0IGRlZmF1bHQgV2Vha01hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlFYWNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheUZpbHRlcjtcbiIsImltcG9ydCBiYXNlVGltZXMgZnJvbSAnLi9fYmFzZVRpbWVzLmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNJbmRleCBmcm9tICcuL19pc0luZGV4LmpzJztcbmltcG9ydCBpc1R5cGVkQXJyYXkgZnJvbSAnLi9pc1R5cGVkQXJyYXkuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheU1hcDtcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlQdXNoO1xuIiwiaW1wb3J0IGJhc2VBc3NpZ25WYWx1ZSBmcm9tICcuL19iYXNlQXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGVxIGZyb20gJy4vZXEuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NpZ25WYWx1ZTtcbiIsImltcG9ydCBlcSBmcm9tICcuL2VxLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzb2NJbmRleE9mO1xuIiwiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VBc3NpZ247XG4iLCJpbXBvcnQgY29weU9iamVjdCBmcm9tICcuL19jb3B5T2JqZWN0LmpzJztcbmltcG9ydCBrZXlzSW4gZnJvbSAnLi9rZXlzSW4uanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VBc3NpZ25JbjtcbiIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tICcuL19kZWZpbmVQcm9wZXJ0eS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VBc3NpZ25WYWx1ZTtcbiIsImltcG9ydCBTdGFjayBmcm9tICcuL19TdGFjay5qcyc7XG5pbXBvcnQgYXJyYXlFYWNoIGZyb20gJy4vX2FycmF5RWFjaC5qcyc7XG5pbXBvcnQgYXNzaWduVmFsdWUgZnJvbSAnLi9fYXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGJhc2VBc3NpZ24gZnJvbSAnLi9fYmFzZUFzc2lnbi5qcyc7XG5pbXBvcnQgYmFzZUFzc2lnbkluIGZyb20gJy4vX2Jhc2VBc3NpZ25Jbi5qcyc7XG5pbXBvcnQgY2xvbmVCdWZmZXIgZnJvbSAnLi9fY2xvbmVCdWZmZXIuanMnO1xuaW1wb3J0IGNvcHlBcnJheSBmcm9tICcuL19jb3B5QXJyYXkuanMnO1xuaW1wb3J0IGNvcHlTeW1ib2xzIGZyb20gJy4vX2NvcHlTeW1ib2xzLmpzJztcbmltcG9ydCBjb3B5U3ltYm9sc0luIGZyb20gJy4vX2NvcHlTeW1ib2xzSW4uanMnO1xuaW1wb3J0IGdldEFsbEtleXMgZnJvbSAnLi9fZ2V0QWxsS2V5cy5qcyc7XG5pbXBvcnQgZ2V0QWxsS2V5c0luIGZyb20gJy4vX2dldEFsbEtleXNJbi5qcyc7XG5pbXBvcnQgZ2V0VGFnIGZyb20gJy4vX2dldFRhZy5qcyc7XG5pbXBvcnQgaW5pdENsb25lQXJyYXkgZnJvbSAnLi9faW5pdENsb25lQXJyYXkuanMnO1xuaW1wb3J0IGluaXRDbG9uZUJ5VGFnIGZyb20gJy4vX2luaXRDbG9uZUJ5VGFnLmpzJztcbmltcG9ydCBpbml0Q2xvbmVPYmplY3QgZnJvbSAnLi9faW5pdENsb25lT2JqZWN0LmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNNYXAgZnJvbSAnLi9pc01hcC5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNTZXQgZnJvbSAnLi9pc1NldC5qcyc7XG5pbXBvcnQga2V5cyBmcm9tICcuL2tleXMuanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQ2xvbmU7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VDcmVhdGU7XG4iLCJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRBbGxLZXlzO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgZ2V0VGFnIGZyb20gJy4vX2dldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc01hcDtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNNYXNrZWQgZnJvbSAnLi9faXNNYXNrZWQuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTmF0aXZlO1xuIiwiaW1wb3J0IGdldFRhZyBmcm9tICcuL19nZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1NldGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gc2V0VGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNTZXQ7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc0xlbmd0aCBmcm9tICcuL2lzTGVuZ3RoLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJpbXBvcnQgaXNQcm90b3R5cGUgZnJvbSAnLi9faXNQcm90b3R5cGUuanMnO1xuaW1wb3J0IG5hdGl2ZUtleXMgZnJvbSAnLi9fbmF0aXZlS2V5cy5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUtleXM7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgaXNQcm90b3R5cGUgZnJvbSAnLi9faXNQcm90b3R5cGUuanMnO1xuaW1wb3J0IG5hdGl2ZUtleXNJbiBmcm9tICcuL19uYXRpdmVLZXlzSW4uanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlS2V5c0luO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVRpbWVzO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGFycmF5TWFwIGZyb20gJy4vX2FycmF5TWFwLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVVuYXJ5O1xuIiwiaW1wb3J0IFVpbnQ4QXJyYXkgZnJvbSAnLi9fVWludDhBcnJheS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVBcnJheUJ1ZmZlcjtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZUJ1ZmZlcjtcbiIsImltcG9ydCBjbG9uZUFycmF5QnVmZmVyIGZyb20gJy4vX2Nsb25lQXJyYXlCdWZmZXIuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVSZWdFeHA7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVTeW1ib2w7XG4iLCJpbXBvcnQgY2xvbmVBcnJheUJ1ZmZlciBmcm9tICcuL19jbG9uZUFycmF5QnVmZmVyLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlBcnJheTtcbiIsImltcG9ydCBhc3NpZ25WYWx1ZSBmcm9tICcuL19hc3NpZ25WYWx1ZS5qcyc7XG5pbXBvcnQgYmFzZUFzc2lnblZhbHVlIGZyb20gJy4vX2Jhc2VBc3NpZ25WYWx1ZS5qcyc7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5T2JqZWN0O1xuIiwiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5U3ltYm9scztcbiIsImltcG9ydCBjb3B5T2JqZWN0IGZyb20gJy4vX2NvcHlPYmplY3QuanMnO1xuaW1wb3J0IGdldFN5bWJvbHNJbiBmcm9tICcuL19nZXRTeW1ib2xzSW4uanMnO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlTeW1ib2xzSW47XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZUpzRGF0YTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVByb3BlcnR5O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBiYXNlR2V0QWxsS2V5cyBmcm9tICcuL19iYXNlR2V0QWxsS2V5cy5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbEtleXM7XG4iLCJpbXBvcnQgYmFzZUdldEFsbEtleXMgZnJvbSAnLi9fYmFzZUdldEFsbEtleXMuanMnO1xuaW1wb3J0IGdldFN5bWJvbHNJbiBmcm9tICcuL19nZXRTeW1ib2xzSW4uanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbEtleXNJbjtcbiIsImltcG9ydCBpc0tleWFibGUgZnJvbSAnLi9faXNLZXlhYmxlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXBEYXRhO1xuIiwiaW1wb3J0IGJhc2VJc05hdGl2ZSBmcm9tICcuL19iYXNlSXNOYXRpdmUuanMnO1xuaW1wb3J0IGdldFZhbHVlIGZyb20gJy4vX2dldFZhbHVlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmF0aXZlO1xuIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiaW1wb3J0IGFycmF5RmlsdGVyIGZyb20gJy4vX2FycmF5RmlsdGVyLmpzJztcbmltcG9ydCBzdHViQXJyYXkgZnJvbSAnLi9zdHViQXJyYXkuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN5bWJvbHM7XG4iLCJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcbmltcG9ydCBzdHViQXJyYXkgZnJvbSAnLi9zdHViQXJyYXkuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTeW1ib2xzSW47XG4iLCJpbXBvcnQgRGF0YVZpZXcgZnJvbSAnLi9fRGF0YVZpZXcuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi9fUHJvbWlzZS5qcyc7XG5pbXBvcnQgU2V0IGZyb20gJy4vX1NldC5qcyc7XG5pbXBvcnQgV2Vha01hcCBmcm9tICcuL19XZWFrTWFwLmpzJztcbmltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaERlbGV0ZTtcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoR2V0O1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hIYXM7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoU2V0O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdENsb25lQXJyYXk7XG4iLCJpbXBvcnQgY2xvbmVBcnJheUJ1ZmZlciBmcm9tICcuL19jbG9uZUFycmF5QnVmZmVyLmpzJztcbmltcG9ydCBjbG9uZURhdGFWaWV3IGZyb20gJy4vX2Nsb25lRGF0YVZpZXcuanMnO1xuaW1wb3J0IGNsb25lUmVnRXhwIGZyb20gJy4vX2Nsb25lUmVnRXhwLmpzJztcbmltcG9ydCBjbG9uZVN5bWJvbCBmcm9tICcuL19jbG9uZVN5bWJvbC5qcyc7XG5pbXBvcnQgY2xvbmVUeXBlZEFycmF5IGZyb20gJy4vX2Nsb25lVHlwZWRBcnJheS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVCeVRhZztcbiIsImltcG9ydCBiYXNlQ3JlYXRlIGZyb20gJy4vX2Jhc2VDcmVhdGUuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzUHJvdG90eXBlIGZyb20gJy4vX2lzUHJvdG90eXBlLmpzJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVPYmplY3Q7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzSW5kZXg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzS2V5YWJsZTtcbiIsImltcG9ydCBjb3JlSnNEYXRhIGZyb20gJy4vX2NvcmVKc0RhdGEuanMnO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUNsZWFyO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZURlbGV0ZTtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlR2V0O1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlSGFzO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZVNldDtcbiIsImltcG9ydCBIYXNoIGZyb20gJy4vX0hhc2guanMnO1xuaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlQ2xlYXI7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlRGVsZXRlO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVHZXQ7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVIYXM7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZVNldDtcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJy4vbWVtb2l6ZS5qcyc7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNhcHBlZDtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlQ3JlYXRlO1xuIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlS2V5cztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXRpdmVLZXlzSW47XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG4iLCJpbXBvcnQgTGlzdENhY2hlIGZyb20gJy4vX0xpc3RDYWNoZS5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrRGVsZXRlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrSGFzO1xuIiwiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vX01hcENhY2hlLmpzJztcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YWNrU2V0O1xuIiwiaW1wb3J0IG1lbW9pemVDYXBwZWQgZnJvbSAnLi9fbWVtb2l6ZUNhcHBlZC5qcyc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IDQ2IC8qIC4gKi8pIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN1YlN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3ViU3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nVG9QYXRoO1xuIiwiaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvU291cmNlO1xuIiwiaW1wb3J0IGJhc2VDbG9uZSBmcm9tICcuL19iYXNlQ2xvbmUuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYHZhbHVlYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvbiB0aGVcbiAqIFtzdHJ1Y3R1cmVkIGNsb25lIGFsZ29yaXRobV0oaHR0cHM6Ly9tZG4uaW8vU3RydWN0dXJlZF9jbG9uZV9hbGdvcml0aG0pXG4gKiBhbmQgc3VwcG9ydHMgY2xvbmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLCBkYXRlIG9iamVjdHMsIG1hcHMsXG4gKiBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLCBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWRcbiAqIGFycmF5cy4gVGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYGFyZ3VtZW50c2Agb2JqZWN0cyBhcmUgY2xvbmVkXG4gKiBhcyBwbGFpbiBvYmplY3RzLiBBbiBlbXB0eSBvYmplY3QgaXMgcmV0dXJuZWQgZm9yIHVuY2xvbmVhYmxlIHZhbHVlcyBzdWNoXG4gKiBhcyBlcnJvciBvYmplY3RzLCBmdW5jdGlvbnMsIERPTSBub2RlcywgYW5kIFdlYWtNYXBzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVEZWVwXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBzaGFsbG93ID0gXy5jbG9uZShvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKHNoYWxsb3dbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZTtcbiIsImltcG9ydCBiYXNlQ2xvbmUgZnJvbSAnLi9fYmFzZUNsb25lLmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZURlZXA7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXE7XG4iLCJpbXBvcnQgYmFzZUlzQXJndW1lbnRzIGZyb20gJy4vX2Jhc2VJc0FyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNBcnJheUxpa2U7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcbmltcG9ydCBzdHViRmFsc2UgZnJvbSAnLi9zdHViRmFsc2UuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnVmZmVyO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTGVuZ3RoO1xuIiwiaW1wb3J0IGJhc2VJc01hcCBmcm9tICcuL19iYXNlSXNNYXAuanMnO1xuaW1wb3J0IGJhc2VVbmFyeSBmcm9tICcuL19iYXNlVW5hcnkuanMnO1xuaW1wb3J0IG5vZGVVdGlsIGZyb20gJy4vX25vZGVVdGlsLmpzJztcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxuZXhwb3J0IGRlZmF1bHQgaXNNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1BsYWluT2JqZWN0O1xuIiwiaW1wb3J0IGJhc2VJc1NldCBmcm9tICcuL19iYXNlSXNTZXQuanMnO1xuaW1wb3J0IGJhc2VVbmFyeSBmcm9tICcuL19iYXNlVW5hcnkuanMnO1xuaW1wb3J0IG5vZGVVdGlsIGZyb20gJy4vX25vZGVVdGlsLmpzJztcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNTZXQgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1NldDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFNldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTZXQobmV3IFNldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNTZXQgPSBub2RlSXNTZXQgPyBiYXNlVW5hcnkobm9kZUlzU2V0KSA6IGJhc2VJc1NldDtcblxuZXhwb3J0IGRlZmF1bHQgaXNTZXQ7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3ltYm9sO1xuIiwiaW1wb3J0IGJhc2VJc1R5cGVkQXJyYXkgZnJvbSAnLi9fYmFzZUlzVHlwZWRBcnJheS5qcyc7XG5pbXBvcnQgYmFzZVVuYXJ5IGZyb20gJy4vX2Jhc2VVbmFyeS5qcyc7XG5pbXBvcnQgbm9kZVV0aWwgZnJvbSAnLi9fbm9kZVV0aWwuanMnO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlZEFycmF5O1xuIiwiaW1wb3J0IGFycmF5TGlrZUtleXMgZnJvbSAnLi9fYXJyYXlMaWtlS2V5cy5qcyc7XG5pbXBvcnQgYmFzZUtleXMgZnJvbSAnLi9fYmFzZUtleXMuanMnO1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vaXNBcnJheUxpa2UuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQga2V5cztcbiIsImltcG9ydCBhcnJheUxpa2VLZXlzIGZyb20gJy4vX2FycmF5TGlrZUtleXMuanMnO1xuaW1wb3J0IGJhc2VLZXlzSW4gZnJvbSAnLi9fYmFzZUtleXNJbi5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlzSW47XG4iLCJpbXBvcnQgTWFwQ2FjaGUgZnJvbSAnLi9fTWFwQ2FjaGUuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0dWJGYWxzZTtcbiIsImltcG9ydCBhcnJheU1hcCBmcm9tICcuL19hcnJheU1hcC5qcyc7XG5pbXBvcnQgY29weUFycmF5IGZyb20gJy4vX2NvcHlBcnJheS5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuaW1wb3J0IHN0cmluZ1RvUGF0aCBmcm9tICcuL19zdHJpbmdUb1BhdGguanMnO1xuaW1wb3J0IHRvS2V5IGZyb20gJy4vX3RvS2V5LmpzJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9QYXRoKCdhLmIuYycpO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddXG4gKlxuICogXy50b1BhdGgoJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiBbJ2EnLCAnMCcsICdiJywgJ2MnXVxuICovXG5mdW5jdGlvbiB0b1BhdGgodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCB0b0tleSk7XG4gIH1cbiAgcmV0dXJuIGlzU3ltYm9sKHZhbHVlKSA/IFt2YWx1ZV0gOiBjb3B5QXJyYXkoc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1BhdGg7XG4iLCJpbXBvcnQgYmFzZVRvU3RyaW5nIGZyb20gJy4vX2Jhc2VUb1N0cmluZy5qcyc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9TdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBrZXlMaXN0ID0gT2JqZWN0LmtleXM7XG52YXIgaGFzUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaGFzRWxlbWVudFR5cGUgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbmZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgLy8gZmFzdC1kZWVwLWVxdWFsIGluZGV4LmpzIDIuMC4xXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgdmFyIGFyckEgPSBpc0FycmF5KGEpXG4gICAgICAsIGFyckIgPSBpc0FycmF5KGIpXG4gICAgICAsIGlcbiAgICAgICwgbGVuZ3RoXG4gICAgICAsIGtleTtcblxuICAgIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgLCBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuXG4gICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwXG4gICAgICAsIHJlZ2V4cEIgPSBiIGluc3RhbmNlb2YgUmVnRXhwO1xuICAgIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcblxuICAgIHZhciBrZXlzID0ga2V5TGlzdChhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggIT09IGtleUxpc3QoYikubGVuZ3RoKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICAvLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cbiAgICAvLyBzdGFydCByZWFjdC1mYXN0LWNvbXBhcmVcbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIERPTSBlbGVtZW50c1xuICAgIGlmIChoYXNFbGVtZW50VHlwZSAmJiBhIGluc3RhbmNlb2YgRWxlbWVudCAmJiBiIGluc3RhbmNlb2YgRWxlbWVudClcbiAgICAgIHJldHVybiBhID09PSBiO1xuXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBSZWFjdFxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09ICdfb3duZXInICYmIGEuJCR0eXBlb2YpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lci5cbiAgICAgICAgLy8gIF9vd25lciBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgIC8vIGFuZCBpcyBub3QgbmVlZGVkIHdoZW4gY29tcGFyaW5nIHRoZSBhY3R1YWwgZWxlbWVudHMgKGFuZCBub3QgdGhlaXIgb3duZXJzKVxuICAgICAgICAvLyAuJCR0eXBlb2YgYW5kIC5fc3RvcmUgb24ganVzdCByZWFzb25hYmxlIG1hcmtlcnMgb2YgYSByZWFjdCBlbGVtZW50XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWxsIG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIHRyYXZlcnNlZCBhcyB1c3VhbFxuICAgICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBlbmQgcmVhY3QtZmFzdC1jb21wYXJlXG5cbiAgICAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhICE9PSBhICYmIGIgIT09IGI7XG59XG4vLyBlbmQgZmFzdC1kZWVwLWVxdWFsXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXhwb3J0ZWRFcXVhbChhLCBiKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVxdWFsKGEsIGIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICgoZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlLm1hdGNoKC9zdGFja3xyZWN1cnNpb24vaSkpIHx8IChlcnJvci5udW1iZXIgPT09IC0yMTQ2ODI4MjYwKSkge1xuICAgICAgLy8gd2FybiBvbiBjaXJjdWxhciByZWZlcmVuY2VzLCBkb24ndCBjcmFzaFxuICAgICAgLy8gYnJvd3NlcnMgZ2l2ZSB0aGlzIGRpZmZlcmVudCBlcnJvcnMgbmFtZSBhbmQgbWVzc2FnZXM6XG4gICAgICAvLyBjaHJvbWUvc2FmYXJpOiBcIlJhbmdlRXJyb3JcIiwgXCJNYXhpbXVtIGNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiXG4gICAgICAvLyBmaXJlZm94OiBcIkludGVybmFsRXJyb3JcIiwgdG9vIG11Y2ggcmVjdXJzaW9uXCJcbiAgICAgIC8vIGVkZ2U6IFwiRXJyb3JcIiwgXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIlxuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiByZWFjdC1mYXN0LWNvbXBhcmUgZG9lcyBub3QgaGFuZGxlIGNpcmN1bGFyIHJlZmVyZW5jZXMuJywgZXJyb3IubmFtZSwgZXJyb3IubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHNvbWUgb3RoZXIgZXJyb3IuIHdlIHNob3VsZCBkZWZpbml0ZWx5IGtub3cgYWJvdXQgdGhlc2VcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=