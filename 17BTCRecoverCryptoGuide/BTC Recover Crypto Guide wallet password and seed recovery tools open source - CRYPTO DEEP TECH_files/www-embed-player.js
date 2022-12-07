(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function n(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||la});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}qa=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=qa;
function u(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.X=b.prototype}
function wa(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.o=0;this.s=this.j=null}
function xa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
wa.prototype.M=function(a){this.i=a};
function ya(a,b){a.j={Xb:b,ec:!0};a.h=a.o||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function v(a,b,c){a.h=c;return{value:b}}
wa.prototype.u=function(a){this.h=a};
function za(a,b,c){a.o=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.o=0}
function Ba(a){a.o=0;var b=a.j.Xb;a.j=null;return b}
function Ca(a){a.s=[a.j];a.o=0;a.m=0}
function Da(a){var b=a.s.splice(0)[0];(b=a.j=a.j||b)?b.ec?a.h=a.o||a.m:void 0!=b.u&&a.m<b.u?(a.h=b.u,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new wa;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ec)throw b.Xb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.M):(a.h.M(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.M):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return pa});
n("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(q){l||(l=!0,m.call(h,q))}}
var h=this,l=!1;return{resolve:g(this.K),reject:g(this.m)}};
b.prototype.K=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.P(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.o(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(l){this.m(l);return}"function"==typeof h?this.T(h,g):this.o(g)};
b.prototype.m=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.O();this.s()};
b.prototype.O=function(){var g=this;e(function(){if(g.F()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,l=fa.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return l(g)};
b.prototype.s=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.P=function(g){var h=this.l();g.cb(h.resolve,h.reject)};
b.prototype.T=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,h){function l(w,t){return"function"==typeof w?function(A){try{m(w(A))}catch(E){q(E)}}:t}
var m,q,r=new b(function(w,t){m=w;q=t});
this.cb(l(g,m),l(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cb=function(g,h){function l(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(l):this.i.push(l);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).cb(h,l)})};
b.all=function(g){var h=p(g),l=h.next();return l.done?d([]):new b(function(m,q){function r(A){return function(E){w[A]=E;t--;0==t&&m(w)}}
var w=[],t=0;do w.push(void 0),t++,d(l.value).cb(r(w.length-1),q),l=h.next();while(!l.done)})};
return b});
n("WeakMap",function(a){function b(l){this.h=(h+=Math.random()+1).toString();if(l){l=p(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ka(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),q=new a([[l,2],[m,3]]);if(2!=q.get(l)||3!=q.get(m))return!1;q.delete(l);q.set(m,4);return!q.has(l)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ka(l,g))throw Error("WeakMap key fail: "+l);l[g][this.h]=m;return this};
b.prototype.get=function(l){return d(l)&&ka(l,g)?l[g][this.h]:void 0};
b.prototype.has=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)};
b.prototype.delete=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)?delete l[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var m=h.h;return ha(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(h,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var q=h.data_[m];if(q&&ka(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(l!==l&&r.key!==r.key||l===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=p(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(p([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=l:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:l},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(l,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
n("Object.setPrototypeOf",function(a){return a||va});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||fa});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Na=Na||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Oa(a){a.yb=void 0;a.getInstance=function(){return a.yb?a.yb:a.yb=new a}}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ya(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ya=Va:Ya=Xa;return Ya.apply(null,arguments)}
function Za(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.X=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.vr=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.j=Eb===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.toString=function(){return this.j+""};
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
function Kb(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Lb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.j=b===Pb?a:""}
Ob.prototype.toString=function(){return this.j.toString()};
Ob.prototype.i=!0;Ob.prototype.h=function(){return this.j.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.j;Pa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Sb=new Ob("about:invalid#zClosurez",Pb);function Tb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Tb().indexOf(a)}
;function Ub(){return C("Trident")||C("MSIE")}
function Vb(){return C("Firefox")||C("FxiOS")}
function Wb(){return C("Safari")&&!(Xb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Vb()||C("Silk")||C("Android"))}
function Xb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Xb()||Vb()||C("Opera")||C("Silk"))}
function ac(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function bc(a){var b=Tb();if("Internet Explorer"===a){if(Ub())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=ac(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Xb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Vb()||"Safari"===a&&Wb()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function cc(a){a=bc(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var dc={};function ec(a){this.j=dc===dc?a:"";this.i=!0}
ec.prototype.h=function(){return this.j.toString()};
ec.prototype.toString=function(){return this.j.toString()};function fc(a,b){b instanceof Ob||b instanceof Ob||(b="object"==typeof b&&b.i?b.h():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Ob(b,Pb));a.href=Qb(b)}
function gc(a,b){a.rel="stylesheet";a.href=Kb(b).toString();(b=hc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function ic(){return hc("script[nonce]")}
var jc=/^[\w+/_-]+[=]{0,2}$/;function hc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&jc.test(a)?a:"":""}
;function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)rc(a[b],a[b+1],c);return c.join("&")}
function tc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function uc(a,b){var c=2==arguments.length?sc(arguments[1],0):sc(arguments,1);return qc(a,c)}
function vc(a,b){b=tc(b);return qc(a,b)}
function wc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return qc(a,b+c)}
function xc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Bc=/#|$/,Cc=/[?&]($|#)/;function Dc(a,b){for(var c=a.search(Bc),d=0,e,f=[];0<=(e=xc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Cc,"$1")}
;function Ec(a){y.setTimeout(function(){throw a;},0)}
;function Fc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Gc(){var a=Tb(),b="";C("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Fc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=Tb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Mb(String(b||"")).split(".");for(var c=Mb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Hc(a){Hc[" "](a);return a}
Hc[" "]=function(){};var Ic=C("Opera"),Jc=Ub(),Kc=C("Edge"),Lc=C("Gecko")&&!(-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Mc=-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"),Nc=C("Android");function Oc(){var a=y.document;return a?a.documentMode:void 0}
var Pc;a:{var Qc="",Rc=function(){var a=Tb();if(Lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Kc)return/Edge\/([\d\.]+)/.exec(a);if(Jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mc)return/WebKit\/(\S+)/.exec(a);if(Ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rc&&(Qc=Rc?Rc[1]:"");if(Jc){var Sc=Oc();if(null!=Sc&&Sc>parseFloat(Qc)){Pc=String(Sc);break a}}Pc=Qc}var Tc=Pc,Uc;if(y.document&&Jc){var Vc=Oc();Uc=Vc?Vc:parseInt(Tc,10)||void 0}else Uc=void 0;var Wc=Uc;var Xc=Fc()||C("iPod"),Yc=C("iPad");Yb();Xb();var Zc=Wb()&&!(Fc()||C("iPad")||C("iPod"));var $c={},ad=null;function bd(a,b){Qa(a);void 0===b&&(b=0);cd();b=$c[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],l=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|l>>6];l=b[l&63];c[f++]=""+m+g+h+l}m=0;l=d;switch(a.length-e){case 2:m=a[e+1],l=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+l+d}return c.join("")}
function dd(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;ed(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ed(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),q=ad[m];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}
cd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function cd(){if(!ad){ad={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));$c[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===ad[f]&&(ad[f]=e)}}}}
;var fd="undefined"!==typeof Uint8Array;function gd(a){return fd&&null!=a&&a instanceof Uint8Array}
var hd={};var id;function jd(a){if(a!==hd)throw Error("illegal external caller");}
function kd(a,b){jd(b);this.aa=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function ld(){return id||(id=new kd(null,hd))}
kd.prototype.Ma=function(){return null==this.aa};
kd.prototype.sizeBytes=function(){jd(hd);var a=this.aa;null==a||gd(a)||("string"===typeof a?a=dd(a):(Pa(a),a=null));return(a=null==a?a:this.aa=a)?a.length:0};var md="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function nd(a,b){if(md)return a[md]|=b;if(void 0!==a.ea)return a.ea|=b;Object.defineProperties(a,{ea:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function od(a,b){md?a[md]&&(a[md]&=~b):void 0!==a.ea&&(a.ea&=~b)}
function pd(a){var b;md?b=a[md]:b=a.ea;return null==b?0:b}
function qd(a,b){md?a[md]=b:void 0!==a.ea?a.ea=b:Object.defineProperties(a,{ea:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function rd(a){nd(a,1);return a}
function wd(a){return!!(pd(a)&2)}
function xd(a){nd(a,16);return a}
function yd(a,b){qd(b,(a|0)&-51)}
function zd(a,b){qd(b,(a|18)&-41)}
;var Ad={};function Bd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Cd,Dd,Ed=[];qd(Ed,23);Dd=Object.freeze(Ed);function Fd(a){if(wd(a.C))throw Error("Cannot mutate an immutable Message");}
function Gd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Bd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Hd(a){return a.displayName||a.name||"unknown type name"}
function Id(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Hd(b)+" but got "+(a&&Hd(a.constructor)));return a}
;var Jd;function Kd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(pd(a)&128))return a=Array.prototype.slice.call(a),Gd(a),a}else{if(gd(a))return bd(a);if(a instanceof kd){var b=a.aa;return null==b?"":"string"===typeof b?b:a.aa=bd(b)}}}return a}
;function Ld(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Md(a,b,c,void 0!==d);else if(Bd(a)){var e={},f;for(f in a)e[f]=Ld(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function Md(a,b,c,d){var e=pd(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=Ld(a[f],b,c,d);c(e,a);return a}
function Nd(a){return a.ib===Ad?a.toJSON():Kd(a)}
function Od(a){if(!a)return a;if("object"===typeof a){if(gd(a))return new Uint8Array(a);if(a.ib===Ad)return a.clone()}return a}
function Pd(a,b){a&128&&Gd(b)}
;function Qd(a){return a.j||(a.j=a.C[a.l+a.ta]={})}
function Rd(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:c&&a.j&&(c=a.j[b],null!=c)?c:a.C[b+a.ta]}
function D(a,b,c,d){Fd(a);return Sd(a,b,c,d)}
function Sd(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.l||d)return Qd(a)[b]=c,a;a.C[b+a.ta]=c;(c=a.j)&&b in c&&delete c[b];return a}
function Td(a,b){a&&wd(b.C)&&wd(a.C);return a}
function Ud(a,b,c,d,e){var f=Rd(a,b,d);Array.isArray(f)||(f=Dd);var g=pd(f);g&1||rd(f);if(e)g&2||nd(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&od(f,16):(f=rd(Array.prototype.slice.call(f)),Sd(a,b,f,d))}return f}
function Vd(a,b,c,d){Fd(a);(c=Wd(a,c))&&c!==b&&null!=d&&Sd(a,c,void 0,!1);return Sd(a,b,d)}
function Wd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Rd(a,e)&&(0!==c&&Sd(a,c,void 0,!1),c=e)}return c}
function Xd(a,b,c,d){var e=d=void 0===d?!1:d,f=Rd(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.ib!==Ad?g?new b(f):void 0:f;h!==f&&null!=h&&(Sd(a,c,h,e),nd(h.C,pd(a.C)&18));b=Td(h,a);if(null==b)return b;wd(a.C)||(e=Yd(b),e!==b&&(b=e,Sd(a,c,b,d)));return Td(b,a)}
function Zd(a,b,c,d,e,f){a.h||(a.h={});var g=a.h[c],h=Ud(a,c,3,d,f);if(g)f||(Object.isFrozen(g)?e||(g=Array.prototype.slice.call(g),a.h[c]=g):e&&Object.freeze(g));else{g=[];var l=!!(pd(a.C)&16),m=wd(h);!f&&m&&(h=rd(Array.prototype.slice.call(h)),Sd(a,c,h,d));d=m;for(var q=0;q<h.length;q++){var r=h[q];var w=b;var t=l,A=!1;A=void 0===A?!1:A;t=void 0===t?!1:t;w=Array.isArray(r)?new w(t?xd(r):r):A?new w:void 0;void 0!==w&&(d=d||wd(r),g.push(w),m&&nd(w.C,2))}a.h[c]=g;a=h;b=!d;Object.isFrozen(a)||(c=pd(a)|
33,qd(a,b?c|8:c&-9));(f||e&&m)&&nd(g,2);(f||e)&&Object.freeze(g)}return g}
function $d(a,b,c,d){var e=wd(a.C);b=Zd(a,b,c,d,e,e);a=Ud(a,c,3,d,e);if(!(e||pd(a)&8)){for(e=0;e<b.length;e++)c=b[e],d=Yd(c),c!==d&&(b[e]=d,a[e]=b[e].C);nd(a,8)}return b}
function G(a,b,c,d){Fd(a);null!=d?Id(d,b):d=void 0;return Sd(a,c,d)}
function ae(a,b,c,d,e){Fd(a);null!=e?Id(e,b):e=void 0;Vd(a,c,d,e)}
function be(a,b,c,d,e){Fd(a);if(null!=d){var f=rd([]);for(var g=!1,h=0;h<d.length;h++)f[h]=Id(d[h],b).C,g=g||wd(f[h]);a.h||(a.h={});a.h[c]=d;b=f;g?od(b,8):nd(b,8)}else a.h&&(a.h[c]=void 0),f=Dd;return Sd(a,c,f,e)}
function ce(a,b,c,d){Fd(a);var e=Zd(a,c,b,void 0,!1,!1);c=null!=d?Id(d,c):new c;a=Ud(a,b,2,void 0,!1);e.push(c);a.push(c.C);wd(c.C)&&od(a,8)}
function de(a,b){return Rd(a,b)}
function ee(a,b){return null==a?b:a}
;function fe(a,b,c){c=void 0===c?zd:c;if(null!=a){if(fd&&a instanceof Uint8Array)return a.length?new kd(new Uint8Array(a),hd):ld();if(Array.isArray(a)){var d=pd(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return qd(a,d|2),a;a=Md(a,fe,c,!0);b=pd(a);b&4&&b&2&&Object.freeze(a);return a}return a.ib===Ad?ge(a):a}}
function he(a,b,c,d,e,f,g){(a=a.h&&a.h[c])?(d=0<a.length?a[0].constructor:void 0,f=pd(a),f&2||(a=ib(a,ge),zd(f,a),Object.freeze(a)),be(b,d,c,a,e)):D(b,c,fe(d,f,g),e)}
function ge(a){if(wd(a.C))return a;a=ie(a,!0);nd(a.C,2);return a}
function ie(a,b){var c=a.C,d=xd([]),e=a.constructor.h;e&&d.push(e);0!==(pd(c)&128)&&Gd(d);b=b||wd(a.C)?zd:yd;e=a.constructor;pd(d);Jd=d;d=new e(d);Jd=void 0;a.La&&(d.La=a.La.slice());e=!!(pd(c)&16);for(var f=0;f<c.length;f++){var g=c[f];if(f===c.length-1&&Bd(g))for(var h in g){var l=+h;Number.isNaN(l)?Qd(d)[l]=g[l]:he(a,d,l,g[h],!0,e,b)}else he(a,d,f-a.ta,g,!1,e,b)}return d}
function Yd(a){if(!wd(a.C))return a;var b=ie(a,!1);b.m=a;return b}
;function H(a,b,c){null==a&&(a=Jd);Jd=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=!0;qd(a,48)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var l=nd(a,0),m=l;if(h=0!==(16&m))(g=0!==(32&m))||(m|=32);if(e)if(128&m)d=0;else{if(0<a.length){var q=a[a.length-1];if(Bd(q)&&"g"in q){d=0;m|=128;delete q.g;var r=!0,w;for(w in q){r=!1;break}r&&a.pop()}}}else if(128&m)throw Error();l!==m&&qd(a,m)}this.ta=(f?0:-1)-d;this.h=void 0;this.C=
a;a:{f=this.C.length;d=f-1;if(f&&(f=this.C[d],Bd(f))){this.j=f;this.l=d-this.ta;break a}void 0!==b&&-1<b?(this.l=Math.max(b,d+1-this.ta),this.j=void 0):this.l=Number.MAX_VALUE}if(!e&&this.j&&"g"in this.j)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!g&&!0;e=this.l;var t;for(h=0;h<c.length;h++)g=c[h],g<e?(g+=this.ta,(d=a[g])?je(d,b):a[g]=Dd):(t||(t=Qd(this)),(d=t[g])?je(d,b):t[g]=Dd)}}
H.prototype.toJSON=function(){var a=this.C,b;Cd?b=a:b=Md(a,Nd,Pd);return b};
function ke(a){Cd=!0;try{return JSON.stringify(a.toJSON(),le)}finally{Cd=!1}}
H.prototype.clone=function(){var a=Md(this.C,Od,yd);xd(a);Jd=a;a=new this.constructor(a);Jd=void 0;me(a,this);return a};
function je(a,b){if(Array.isArray(a)){var c=pd(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&qd(a,c|d)}}
H.prototype.ib=Ad;H.prototype.toString=function(){return this.C.toString()};
function le(a,b){return Kd(b)}
function me(a,b){b.La&&(a.La=b.La.slice());var c=b.h;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=$d(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)me(f[g],e[g])}else throw Error("unexpected object: type: "+Pa(e)+": "+e);}}}}
;function ne(a){var b=this.h,c=this.i;return this.isRepeated?$d(a,b,c,!0):Xd(a,b,c,!0)}
;function oe(a){this.Sb=a}
;function pe(a,b,c){this.i=a;this.l=b;this.h=c||[];this.za=new Map}
k=pe.prototype;k.Dc=function(a){var b=Ka.apply(1,arguments),c=this.tb(b);c?c.push(new oe(a)):this.pc(a,b)};
k.pc=function(a){this.za.set(this.Yb(Ka.apply(1,arguments)),[new oe(a)])};
k.tb=function(){var a=this.Yb(Ka.apply(0,arguments));return this.za.has(a)?this.za.get(a):void 0};
k.Pc=function(){var a=this.tb(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
k.clear=function(){this.za.clear()};
k.Yb=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function qe(a,b){pe.call(this,a,3,b)}
u(qe,pe);qe.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.Pc(b);d&&(c=d.Sb);this.pc(c+a,b)};function re(a,b){pe.call(this,a,2,b)}
u(re,pe);re.prototype.j=function(a){this.Dc(a,Ka.apply(1,arguments))};function se(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function te(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?te.apply(null,d):se(d)}}
;function J(){this.M=this.M;this.v=this.v}
J.prototype.M=!1;J.prototype.h=function(){return this.M};
J.prototype.dispose=function(){this.M||(this.M=!0,this.B())};
function ue(a,b){ve(a,Za(se,b))}
function ve(a,b){a.M?b():(a.v||(a.v=[]),a.v.push(b))}
J.prototype.B=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function we(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
we.prototype.stopPropagation=function(){this.j=!0};
we.prototype.preventDefault=function(){this.defaultPrevented=!0};function xe(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ye(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ze[c])c=ze[c];else{c=String(c);if(!ze[c]){var f=/function\s+([^\(]+)/m.exec(c);ze[c]=f?f[1]:"[Anonymous]"}c=ze[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ye(a,b){b||(b={});b[Ae(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ae(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ye(a,b));return c}
function Ae(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ze={};var Be=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Ce(a,b){we.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(Ce,we);var De={2:"touch",3:"pen",4:"mouse"};
Ce.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Lc){a:{try{Hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:De[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ce.X.preventDefault.call(this)};
Ce.prototype.stopPropagation=function(){Ce.X.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ce.prototype.preventDefault=function(){Ce.X.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ee="closure_listenable_"+(1E6*Math.random()|0);var Fe=0;function Le(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.gb=e;this.key=++Fe;this.Na=this.bb=!1}
function Me(a){a.Na=!0;a.listener=null;a.proxy=null;a.src=null;a.gb=null}
;function Ne(a){this.src=a;this.listeners={};this.h=0}
Ne.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Oe(a,b,d,e);-1<g?(b=a[g],c||(b.bb=!1)):(b=new Le(b,this.src,f,!!d,e),b.bb=c,a.push(b));return b};
Ne.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Oe(e,b,c,d);return-1<b?(Me(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Pe(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Me(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Oe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Na&&f.listener==b&&f.capture==!!c&&f.gb==d)return e}return-1}
;var Qe="closure_lm_"+(1E6*Math.random()|0),Re={},Se=0;function Te(a,b,c,d,e){if(d&&d.once)Ue(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Te(a,b[f],c,d,e);else c=Ve(c),a&&a[Ee]?a.ha(b,c,Ra(d)?!!d.capture:!!d,e):We(a,b,c,!1,d,e)}
function We(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Xe(a);h||(a[Qe]=h=new Ne(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ye();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Be||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ze(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Se++}}
function Ye(){function a(c){return b.call(a.src,a.listener,c)}
var b=$e;return a}
function Ue(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ue(a,b[f],c,d,e);else c=Ve(c),a&&a[Ee]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):We(a,b,c,!0,d,e)}
function af(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)af(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Ve(c),a&&a[Ee])?a.l.remove(String(b),c,d,e):a&&(a=Xe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Oe(b,c,d,e)),(c=-1<a?b[a]:null)&&bf(c))}
function bf(a){if("number"!==typeof a&&a&&!a.Na){var b=a.src;if(b&&b[Ee])Pe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ze(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Se--;(c=Xe(b))?(Pe(c,a),0==c.h&&(c.src=null,b[Qe]=null)):Me(a)}}}
function Ze(a){return a in Re?Re[a]:Re[a]="on"+a}
function $e(a,b){if(a.Na)a=!0;else{b=new Ce(b,this);var c=a.listener,d=a.gb||a.src;a.bb&&bf(a);a=c.call(d,b)}return a}
function Xe(a){a=a[Qe];return a instanceof Ne?a:null}
var cf="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ve(a){if("function"===typeof a)return a;a[cf]||(a[cf]=function(b){return a.handleEvent(b)});
return a[cf]}
;function df(){J.call(this);this.l=new Ne(this);this.Ac=this;this.ja=null}
$a(df,J);df.prototype[Ee]=!0;df.prototype.addEventListener=function(a,b,c,d){Te(this,a,b,c,d)};
df.prototype.removeEventListener=function(a,b,c,d){af(this,a,b,c,d)};
function ef(a,b){var c=a.ja;if(c){var d=[];for(var e=1;c;c=c.ja)d.push(c),++e}a=a.Ac;c=b.type||b;"string"===typeof b?b=new we(b,a):b instanceof we?b.target=b.target||a:(e=b,b=new we(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=ff(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ff(g,c,!0,b)&&e,b.j||(e=ff(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ff(g,c,!1,b)&&e}
df.prototype.B=function(){df.X.B.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Me(d[e]);delete a.listeners[c];a.h--}}this.ja=null};
df.prototype.ha=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function ff(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Na&&g.capture==c){var h=g.listener,l=g.gb||g.src;g.bb&&Pe(a.l,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function gf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
gf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function hf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function jf(a,b){return a+Math.random()*(b-a)}
;function kf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
k=kf.prototype;k.clone=function(){return new kf(this.x,this.y)};
k.equals=function(a){return a instanceof kf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function lf(a,b){this.width=a;this.height=b}
k=lf.prototype;k.clone=function(){return new lf(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.Ma=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function mf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function nf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function of(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var pf;function qf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=nf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ya(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Rb;c.Rb=null;e()}};
return function(e){d.next={Rb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function rf(){this.i=this.h=null}
rf.prototype.add=function(a,b){var c=sf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
rf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var sf=new gf(function(){return new tf},function(a){return a.reset()});
function tf(){this.next=this.scope=this.h=null}
tf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
tf.prototype.reset=function(){this.next=this.scope=this.h=null};var uf,vf=!1,wf=new rf;function xf(a,b){uf||yf();vf||(uf(),vf=!0);wf.add(a,b)}
function yf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);uf=function(){a.then(zf)}}else uf=function(){var b=zf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(pf||(pf=qf()),pf(b)):y.setImmediate(b)}}
function zf(){for(var a;a=wf.remove();){try{a.h.call(a.scope)}catch(b){Ec(b)}hf(sf,a)}vf=!1}
;function Af(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Bf(b,2,c)},function(c){Bf(b,3,c)})}catch(c){Bf(this,3,c)}}
function Cf(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Cf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Df=new gf(function(){return new Cf},function(a){a.reset()});
function Ef(a,b,c){var d=Df.get();d.j=a;d.i=b;d.context=c;return d}
function Ff(a){return new Af(function(b,c){c(a)})}
Af.prototype.then=function(a,b,c){return Gf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Af.prototype.$goog_Thenable=!0;k=Af.prototype;k.pb=function(a,b){return Gf(this,null,a,b)};
k.catch=Af.prototype.pb;k.cancel=function(a){if(0==this.h){var b=new Hf(a);xf(function(){If(this,b)},this)}};
function If(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?If(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Jf(c),Kf(c,e,3,b)))}a.j=null}else Bf(a,3,b)}
function Lf(a,b){a.i||2!=a.h&&3!=a.h||Mf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Gf(a,b,c,d){var e=Ef(null,null,null);e.h=new Af(function(f,g){e.j=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof Hf?g(h):f(l)}catch(m){g(m)}}:g});
e.h.j=a;Lf(a,e);return e.h}
k.yd=function(a){this.h=0;Bf(this,2,a)};
k.zd=function(a){this.h=0;Bf(this,3,a)};
function Bf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.yd,f=a.zd;if(d instanceof Af){Lf(d,Ef(e||db,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var l=d.then;if("function"===typeof l){Nf(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,Mf(a),3!=b||c instanceof Hf||Of(a,c))}}
function Nf(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Mf(a){a.o||(a.o=!0,xf(a.Nc,a))}
function Jf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
k.Nc=function(){for(var a;a=Jf(this);)Kf(this,a,this.h,this.v);this.o=!1};
function Kf(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Pf(b,c,d);else try{b.l?b.j.call(b.context):Pf(b,c,d)}catch(e){Qf.call(null,e)}hf(Df,b)}
function Pf(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Of(a,b){a.m=!0;xf(function(){a.m&&Qf.call(null,b)})}
var Qf=Ec;function Hf(a){bb.call(this,a)}
$a(Hf,bb);Hf.prototype.name="cancel";function Rf(a,b){df.call(this);this.j=a||1;this.i=b||y;this.m=Ya(this.wd,this);this.o=Date.now()}
$a(Rf,df);k=Rf.prototype;k.enabled=!1;k.Z=null;function Sf(a,b){a.j=b;a.Z&&a.enabled?(a.stop(),a.start()):a.Z&&a.stop()}
k.wd=function(){if(this.enabled){var a=Date.now()-this.o;0<a&&a<.8*this.j?this.Z=this.i.setTimeout(this.m,this.j-a):(this.Z&&(this.i.clearTimeout(this.Z),this.Z=null),ef(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.Z||(this.Z=this.i.setTimeout(this.m,this.j),this.o=Date.now())};
k.stop=function(){this.enabled=!1;this.Z&&(this.i.clearTimeout(this.Z),this.Z=null)};
k.B=function(){Rf.X.B.call(this);this.stop();delete this.i};
function Tf(a,b,c){if("function"===typeof a)c&&(a=Ya(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ya(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Uf(a){this.v=a;this.h=new Map;this.o=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new Rf(this.flushInterval);this.i.ha("tick",this.rb,!1,this);this.m=!1}
k=Uf.prototype;k.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Vf(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.rb()}
k.rb=function(){var a=this.h.values();a=[].concat(ja(a)).filter(function(b){return b.za.size});
a.length&&this.v.flush(a,this.m);Wf(a);this.j=0;this.i.enabled&&this.i.stop()};
k.Ob=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new qe(a,b))};
k.Pb=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new re(a,b))};
function Xf(a,b){return a.o.has(b)?void 0:a.h.get(b)}
k.Va=function(a){this.yc.apply(this,[a,1].concat(ja(Ka.apply(1,arguments))))};
k.yc=function(a,b){var c=Ka.apply(2,arguments),d=Xf(this,a);d&&d instanceof qe&&(d.j(b,c),Vf(this))};
k.qb=function(a,b){var c=Ka.apply(2,arguments),d=Xf(this,a);d&&d instanceof re&&(d.j(b,c),Vf(this))};
function Wf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Yf(a){this.h=a;this.h.Ob("/client_streamz/bg/fiec",{Ka:3,Ja:"rk"},{Ka:2,Ja:"ec"})}
function Zf(a){this.h=a;this.h.Pb("/client_streamz/bg/fil",{Ka:3,Ja:"rk"})}
function $f(a){this.h=a;this.h.Ob("/client_streamz/bg/fsc",{Ka:3,Ja:"rk"})}
function ag(a){this.h=a;this.h.Pb("/client_streamz/bg/fsl",{Ka:3,Ja:"rk"})}
;function bg(a){H.call(this,a,-1,cg)}
u(bg,H);function dg(a){H.call(this,a,-1,eg)}
u(dg,H);function fg(a){H.call(this,a)}
u(fg,H);function gg(a){H.call(this,a)}
u(gg,H);var cg=[3,6,4],eg=[1],hg=[1,2,3],ig=[1,2,3];function jg(a){H.call(this,a,-1,kg)}
u(jg,H);var kg=[1];function lg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function mg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var w=g,t=0;64>t;t+=4)w[t/4]=r[t]<<24|r[t+1]<<16|r[t+2]<<8|r[t+3];for(t=16;80>t;t++)r=w[t-3]^w[t-8]^w[t-14]^w[t-16],w[t]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],E=e[2],F=e[3],O=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var N=F^A&(E^F);var Q=1518500249}else N=A^E^F,Q=1859775393;else 60>t?(N=A&E|F&(A|E),Q=2400959708):(N=A^E^F,Q=3395469782);N=((r<<5|r>>>27)&4294967295)+N+O+Q+w[t]&4294967295;O=F;F=E;E=(A<<30|A>>>2)&4294967295;A=r;r=N}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(r,w){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var t=[],A=0,E=r.length;A<E;++A)t.push(r.charCodeAt(A));r=t}w||(w=r.length);t=0;if(0==m)for(;t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64;for(;t<w;)if(f[m++]=r[t++],q++,64==m)for(m=0,b(f);t+64<w;)b(r.slice(t,t+64)),t+=64,q+=64}
function d(){var r=[],w=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=w&255,w>>>=8;b(f);for(t=w=0;5>t;t++)for(var A=24;0<=A;A-=8)r[w++]=e[t]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,q;a();return{reset:a,update:c,digest:d,Kc:function(){for(var r=d(),w="",t=0;t<r.length;t++)w+="0123456789ABCDEF".charAt(Math.floor(r[t]/16))+"0123456789ABCDEF".charAt(r[t]%16);return w}}}
;function ng(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,og(lg(d),a,c||null)].join(" "):null}
function og(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),pg(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=pg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function pg(a){var b=mg();b.update(a);return b.Kc().toLowerCase()}
;var qg={};function rg(a){this.h=a||{cookie:""}}
k=rg.prototype;k.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Ma())return!0;this.set("TESTCOOKIESENABLED","1",{hb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Nr;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.hb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
k.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Mb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{hb:0,path:b,domain:c});return d};
k.wb=function(){return sg(this).keys};
k.Ma=function(){return!this.h.cookie};
k.clear=function(){for(var a=sg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function sg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var tg=new rg("undefined"==typeof document?null:document);function ug(a){return!!qg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function vg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;ug(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new rg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");ug(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function wg(a,b,c,d){(a=y[a])||(a=(new rg(document)).get(b));return a?ng(a,c,d):null}
function xg(a,b){b=void 0===b?!1:b;var c=lg(String(y.location.href)),d=[];if(vg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new rg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ng(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ug(b)&&((b=wg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=wg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function yg(a){H.call(this,a,-1,zg)}
u(yg,H);var zg=[2];function Ag(a){this.h=this.i=this.j=a}
Ag.prototype.reset=function(){this.h=this.i=this.j};
Ag.prototype.getValue=function(){return this.i};function Bg(a){var b=[];Cg(new Dg,a,b);return b.join("")}
function Dg(){}
function Cg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Cg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Eg(d,c),c.push(":"),Cg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Eg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Fg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Gg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Eg(a,b){b.push('"',a.replace(Gg,function(c){var d=Fg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Fg[c]=d);return d}),'"')}
;function Hg(){}
Hg.prototype.h=null;Hg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ig(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Jg;function Kg(){}
$a(Kg,Hg);function Lg(a){return(a=Ig(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ig(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Jg=new Kg;function Mg(a){df.call(this);this.headers=new Map;this.K=a||null;this.i=!1;this.I=this.A=null;this.m=this.T="";this.j=this.P=this.s=this.O=!1;this.o=0;this.F=null;this.ba="";this.V=this.W=!1}
$a(Mg,df);var Ng=/^https?$/i,Og=["POST","PUT"],Pg=[];function Qg(a,b,c,d,e,f,g){var h=new Mg;Pg.push(h);b&&h.ha("complete",b);h.l.add("ready",h.Ic,!0,void 0,void 0);f&&(h.o=Math.max(0,f));g&&(h.W=g);h.send(a,c,d,e)}
k=Mg.prototype;k.Ic=function(){this.dispose();lb(Pg,this)};
k.send=function(a,b,c,d){if(this.A)throw Error("[goog.net.XhrIo] Object is active with another request="+this.T+"; newUri="+a);b=b?b.toUpperCase():"GET";this.T=a;this.m="";this.O=!1;this.i=!0;this.A=this.K?Lg(this.K):Lg(Jg);this.I=this.K?this.K.getOptions():Jg.getOptions();this.A.onreadystatechange=Ya(this.hc,this);try{this.getStatus(),this.P=!0,this.A.open(b,String(a),!0),this.P=!1}catch(g){this.getStatus();Rg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=fb(Og,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.A.setRequestHeader(d,c);this.ba&&(this.A.responseType=this.ba);"withCredentials"in this.A&&this.A.withCredentials!==this.W&&(this.A.withCredentials=this.W);try{Sg(this),0<this.o&&(this.V=Tg(this.A),this.getStatus(),this.V?(this.A.timeout=this.o,this.A.ontimeout=Ya(this.tc,this)):
this.F=Tf(this.tc,this.o,this)),this.getStatus(),this.s=!0,this.A.send(a),this.s=!1}catch(g){this.getStatus(),Rg(this,g)}};
function Tg(a){return Jc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
k.tc=function(){"undefined"!=typeof Na&&this.A&&(this.m="Timed out after "+this.o+"ms, aborting",this.getStatus(),ef(this,"timeout"),this.abort(8))};
function Rg(a,b){a.i=!1;a.A&&(a.j=!0,a.A.abort(),a.j=!1);a.m=b;Ug(a);Vg(a)}
function Ug(a){a.O||(a.O=!0,ef(a,"complete"),ef(a,"error"))}
k.abort=function(){this.A&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.A.abort(),this.j=!1,ef(this,"complete"),ef(this,"abort"),Vg(this))};
k.B=function(){this.A&&(this.i&&(this.i=!1,this.j=!0,this.A.abort(),this.j=!1),Vg(this,!0));Mg.X.B.call(this)};
k.hc=function(){this.h()||(this.P||this.s||this.j?Yg(this):this.Zc())};
k.Zc=function(){Yg(this)};
function Yg(a){if(a.i&&"undefined"!=typeof Na)if(a.I[1]&&4==Zg(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==Zg(a))Tf(a.hc,0,a);else if(ef(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if($g(a))ef(a,"complete"),ef(a,"success");else{try{var b=2<Zg(a)?a.A.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Ug(a)}}finally{Vg(a)}}}
function Vg(a,b){if(a.A){Sg(a);var c=a.A,d=a.I[0]?function(){}:null;
a.A=null;a.I=null;b||ef(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Sg(a){a.A&&a.V&&(a.A.ontimeout=null);a.F&&(y.clearTimeout(a.F),a.F=null)}
k.isActive=function(){return!!this.A};
k.isComplete=function(){return 4==Zg(this)};
function $g(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.T)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Ng.test(a?a.toLowerCase():"");c=b}return c}
function Zg(a){return a.A?a.A.readyState:0}
k.getStatus=function(){try{return 2<Zg(this)?this.A.status:-1}catch(a){return-1}};
k.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function ah(a){H.call(this,a)}
u(ah,H);function bh(a){H.call(this,a,-1,ch)}
u(bh,H);var ch=[1];var dh=["platform","platformVersion","architecture","model","uaFullVersion"];new bh;function eh(a){H.call(this,a)}
u(eh,H);function fh(a){H.call(this,a,31,gh)}
u(fh,H);var gh=[3,20,27];function hh(a){H.call(this,a,17,ih)}
u(hh,H);var ih=[3,5];function jh(a){H.call(this,a,6,kh)}
u(jh,H);var kh=[5];function lh(a){H.call(this,a)}
u(lh,H);var mh;mh=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=ne}(175237375,{Dr:0},lh);function nh(a,b,c,d,e,f,g,h,l,m,q){df.call(this);var r=this;this.O="";this.j=[];this.Mb="";this.Nb=this.sa=-1;this.Xa=!1;this.I=this.m=null;this.F=0;this.Bc=1;this.timeoutMillis=0;this.ba=!1;df.call(this);this.Ya=b||function(){};
this.s=new oh(a,f);this.zc=d;this.Wa=q;this.Cc=Za(jf,0,1);this.T=e||null;this.K=c||null;this.V=g||!1;this.pageId=l||null;this.logger=null;this.withCredentials=!h;this.Ga=f||!1;!this.Ga&&(65<=cc("Chromium")||45<=cc("Firefox")||12<=cc("Safari")||(Fc()||C("iPad")||C("iPod"))&&Gc());a=D(new eh,1,1);ph(this.s,a);this.o=new Ag(1E4);this.i=new Rf(this.o.getValue());ue(this,this.i);m=qh(this,m);Te(this.i,"tick",m,!1,this);this.P=new Rf(6E5);ue(this,this.P);Te(this.P,"tick",m,!1,this);this.V||this.P.start();
this.Ga||(Te(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.W()}),Te(document,"pagehide",this.W,!1,this))}
u(nh,df);function qh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
nh.prototype.B=function(){this.W();df.prototype.B.call(this)};
function rh(a){a.T||(a.T=.01>a.Cc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.T}
function sh(a,b){a.o=new Ag(1>b?1:b);Sf(a.i,a.o.getValue())}
nh.prototype.log=function(a){a=a.clone();var b=this.Bc++;D(a,21,b);this.O&&D(a,26,this.O);if(!Rd(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null==Rd(a,15)&&D(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),G(a,yg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.F;this.j.push(a);ef(this,new th(a));this.V||this.i.enabled||this.i.start()};
nh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ba)uh(this);else{var d=Date.now();if(this.Nb>d&&this.sa<d)b&&b("throttled");else{var e=vh(this.s,this.j,this.F);d={};var f=this.Ya();f&&(d.Authorization=f);var g=rh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=wc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=wc(g,"pageId",this.pageId));if(f&&this.Mb===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.F=0;var h=ke(e),
l;this.I&&this.I.isSupported(h.length)&&(l=this.I.compress(h));var m={url:g,body:h,Gc:1,Gb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(t){c.o.reset();Sf(c.i,c.o.getValue());if(t){var A=null;try{var E=JSON.parse(t.replace(")]}'\n",""));A=new jh(E)}catch(F){}A&&(t=Number(ee(Rd(A,1),"-1")),0<t&&(c.sa=Date.now(),c.Nb=c.sa+t),A=mh.j(A))&&(A=ee(Rd(A,1),-1),-1!=A&&(c.Xa||sh(c,A)))}a&&a()},r=function(t,A){var E=$d(e,fh,3),F=c.o;
F.h=Math.min(3E5,2*F.h);F.i=Math.min(3E5,F.h+Math.round(.2*(Math.random()-.5)*F.h));Sf(c.i,c.o.getValue());401===t&&f&&(c.Mb=f);void 0===A&&(A=500<=t&&600>t||401===t||0===t);A&&(c.j=E.concat(c.j),c.V||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},w=function(){c.Wa?c.Wa.send(m,q,r):c.zc(m,q,r)};
l?l.then(function(t){m.Gb["Content-Encoding"]="gzip";m.Gb["Content-Type"]="application/binary";m.body=t;m.Gc=2;w()},function(){w()}):w()}}}};
nh.prototype.W=function(){this.flush()};
function uh(a){wh(a,function(b,c){b=wc(b,"format","json");b=window.navigator.sendBeacon(b,ke(c));a.ba&&!b&&(a.ba=!1);return b})}
function wh(a,b){if(0!==a.j.length){var c=Dc(rh(a),"format");c=uc(c,"auth",a.Ya(),"authuser",a.K||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=vh(a.s,e,a.F);if(!b(c,f))break;a.F=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function th(){we.call(this,"event-logged",void 0)}
u(th,we);function oh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new hh;D(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));ph(this,new eh)}
function ph(a,b){G(a.h,eh,1,b);Rd(b,1)||D(b,1,1);a.i||(b=xh(a),Rd(b,5)||D(b,5,a.locale));a.uach&&(b=xh(a),Xd(b,bh,9)||G(b,bh,9,a.uach))}
function yh(a,b){var c=void 0===c?dh:c;b(window,c).then(function(d){a.uach=d;d=xh(a);G(d,bh,9,a.uach);return!0}).catch(function(){return!1})}
function xh(a){a=Xd(a.h,eh,1);var b=Xd(a,ah,11);b||(b=new ah,G(a,ah,11,b));return b}
function vh(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=D(a,4,d);b=be(a,fh,3,b);c&&D(b,14,c);return b}
;function zh(a,b,c){Qg(a.url,function(d){d=d.target;if($g(d)){try{var e=d.A?d.A.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Gb,a.timeoutMillis,a.withCredentials)}
;function Ah(){this.j="https://play.google.com/log?format=json&hasfast=true";this.s=!1;this.m=zh;this.h=""}
;function Bh(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Ah;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new nh(1828,c.I?c.I:xg,"0",c.m,c.j,c.s,!1,c.P,void 0,void 0,c.o?c.o:void 0);c.M&&ph(a.s,c.M);if(c.i){b=c.i;var d=xh(a.s);D(d,7,b)}c.l&&(a.I=c.l);c.h&&(a.O=c.h);c.v&&((b=c.v)?(a.m||(a.m=new yg),b=ke(b),D(a.m,4,b)):a.m&&D(a.m,4,void 0,!1));if(c.K){d=c.K;a.m||(a.m=new yg);b=a.m;if(null==d)d=Dd;else{var e=pd(d);1!==(e&1)&&(Object.isFrozen(d)&&(d=Array.prototype.slice.call(d)),qd(d,e|1))}D(b,2,d)}c.F&&
(b=c.F,a.Xa=!0,sh(a,b));c.O&&yh(a.s,c.O);this.h=a}
Bh.prototype.flush=function(a){var b=a||[];if(b.length){a=new jg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new bg;var h=D(g,1,f.i);var l=f;g=[];for(var m=0;m<l.h.length;m++)g.push(l.h[m].Ja);if(null==g)g=D(h,3,Dd);else{l=pd(g);if(!(l&4)){if(l&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];qd(g,l|5)}g=D(h,3,g)}h=[];l=[];m=p(f.za.keys());for(var q=m.next();!q.done;q=m.next())l.push(q.value.split(","));for(m=0;m<l.length;m++){q=l[m];var r=f.l;for(var w=
f.tb(q)||[],t=[],A=0;A<w.length;A++){var E=w[A];E=E&&E.Sb;var F=new gg;switch(r){case 3:Vd(F,1,ig,Number(E));break;case 2:Vd(F,2,ig,Number(E))}t.push(F)}r=t;for(w=0;w<r.length;w++){t=r[w];A=new dg;t=G(A,gg,2,t);A=q;E=[];F=f;for(var O=[],N=0;N<F.h.length;N++)O.push(F.h[N].Ka);F=O;for(O=0;O<F.length;O++){N=F[O];var Q=A[O],ca=new fg;switch(N){case 3:Vd(ca,1,hg,String(Q));break;case 2:Vd(ca,2,hg,Number(Q));break;case 1:Vd(ca,3,hg,"true"==Q)}E.push(ca)}be(t,fg,1,E);h.push(t)}}be(g,dg,4,h);c.push(g);e.clear()}be(a,
bg,1,c);b=this.h;a instanceof fh?b.log(a):(c=new fh,a=ke(a),a=D(c,8,a),b.log(a));this.h.flush()}};function Ch(a){this.na=a;this.v=Dh();this.m=new Bh;this.h=new Uf(this.m);this.o=new Zf(this.h);this.j=new $f(this.h);this.l=new ag(this.h);this.i=new Yf(this.h)}
function Dh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Eh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Fh(a){var b=this;this.i=!1;var c=a.program;var d=a.Rc;if(a.ed){var e;this.fa=null!=(e=a.fa)?e:new Ch(d)}var f=new Eh;this.j=f.promise;if(!y[d]){var g;null!=(g=this.fa)&&g.i.h.Va("/client_streamz/bg/fiec",g.na,1)}else if(!y[d].a){var h;null!=(h=this.fa)&&h.i.h.Va("/client_streamz/bg/fiec",h.na,2)}this.l=p((0,y[d].a)(c,function(l,m){Promise.resolve().then(function(){var q;if(null!=(q=b.fa)){var r=Dh()-q.v;q.o.h.qb("/client_streamz/bg/fil",r,q.na)}f.resolve({Ec:l,sd:m})})},!0)).next().value;
this.rd=f.promise.then(function(){})}
Fh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Dh(),d;null!=(d=this.fa)&&d.j.h.Va("/client_streamz/bg/fsc",d.na);return this.j.then(function(e){var f=e.Ec;return new Promise(function(g){f(function(h){var l;if(null!=(l=b.fa)){var m=Dh()-c;l.l.h.qb("/client_streamz/bg/fsl",m,l.na)}g(h)},[a.Ub,
a.td])})})};
Fh.prototype.qc=function(a){if(this.i)throw Error("Already disposed");var b=Dh(),c;null!=(c=this.fa)&&c.j.h.Va("/client_streamz/bg/fsc",c.na);a=this.l([a.Ub,a.td]);null!=(c=this.fa)&&(b=Dh()-b,c.l.h.qb("/client_streamz/bg/fsl",b,c.na));return a};
Fh.prototype.dispose=function(){var a;null!=(a=this.fa)&&a.h.rb();this.i=!0;this.j.then(function(b){(b=b.sd)&&b()})};
Fh.prototype.h=function(){return this.i};var Gh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Hh;try{new URL("s://g"),Hh=!0}catch(a){Hh=!1}var Ih=Hh;var Jh={};function Kh(){}
function Lh(a){this.h=a}
u(Lh,Kh);Lh.prototype.toString=function(){return this.h};function Mh(a){var b="true".toString(),c=[new Lh(Nh[0].toLowerCase(),Jh)];if(0===c.length)throw Error("No prefixes are provided");if(c.map(function(d){if(d instanceof Lh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Oh(a,b){a.src=Kb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Ph(a){this.Wc=a}
function Qh(a){return new Ph(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Rh=[Qh("data"),Qh("http"),Qh("https"),Qh("mailto"),Qh("ftp"),new Ph(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Sh(a){var b=Th;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Uh(){var a=[];Sh(function(b){a.push(b)});
return a}
var Th={Nd:"allow-forms",Od:"allow-modals",Pd:"allow-orientation-lock",Qd:"allow-pointer-lock",Rd:"allow-popups",Sd:"allow-popups-to-escape-sandbox",Td:"allow-presentation",Ud:"allow-same-origin",Vd:"allow-scripts",Wd:"allow-top-navigation",Xd:"allow-top-navigation-by-user-activation"},Vh=eb(function(){return Uh()});
function Wh(){var a=Xh(),b={};gb(Vh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Xh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Yh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zh=(new Date).getTime();var $h="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja($h);function ai(a){df.call(this);var b=this;this.s=this.j=0;this.Y=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
da:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return v(e,bi(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.s||ci(this)}
u(ai,df);function di(){var a=ei;ai.h||(ai.h=new ai(a));return ai.h}
ai.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Y.da(this.s);delete ai.h};
ai.prototype.U=function(){return this.i};
function ci(a){a.s=a.Y.S(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,bi(a),3):v(c,bi(a),3);ci(a);c.h=0})},3E4)}
function bi(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Y.S(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.o=void 0;a.j&&(a.Y.da(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ef(a,"networkstatus-online"):ef(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.u(3)}})})}
;function fi(){this.data_=[];this.h=-1}
fi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
fi.prototype.get=function(a){return!!this.data_[a]};
function gi(a){-1===a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function hi(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
hi.prototype[Symbol.iterator]=function(){return this};
hi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function ii(a,b){return new hi(a,b)}
;function ji(){this.blockSize=-1}
;function ki(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(ki,ji);ki.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function li(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],l=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+l&4294967295}
ki.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)li(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){li(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){li(this,e);f=0;break}}this.i=f;this.l+=b}};
ki.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;li(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function mi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ni(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function oi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:mi(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function pi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):oi(a,"inverted-hdpi")&&ni(a,Array.prototype.filter.call(a.classList?a.classList:mi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function qi(){}
qi.prototype.next=function(){return ri};
var ri={done:!0,value:void 0};function si(a){return{value:a,done:!1}}
qi.prototype.ca=function(){return this};function ti(a){if(a instanceof ui||a instanceof vi||a instanceof wi)return a;if("function"==typeof a.next)return new ui(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ui(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ca)return new ui(function(){return a.ca()});
throw Error("Not an iterator or iterable.");}
function ui(a){this.i=a}
ui.prototype.ca=function(){return new vi(this.i())};
ui.prototype[Symbol.iterator]=function(){return new wi(this.i())};
ui.prototype.h=function(){return new wi(this.i())};
function vi(a){this.i=a}
u(vi,qi);vi.prototype.next=function(){return this.i.next()};
vi.prototype[Symbol.iterator]=function(){return new wi(this.i)};
vi.prototype.h=function(){return new wi(this.i)};
function wi(a){ui.call(this,function(){return a});
this.j=a}
u(wi,ui);wi.prototype.next=function(){return this.j.next()};function xi(a,b){this.i={};this.h=[];this.oa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof xi)for(c=a.wb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
k=xi.prototype;k.wb=function(){yi(this);return this.h.concat()};
k.has=function(a){return zi(this.i,a)};
k.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ai;yi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ai(a,b){return a===b}
k.Ma=function(){return 0==this.size};
k.clear=function(){this.i={};this.oa=this.size=this.h.length=0};
k.remove=function(a){return this.delete(a)};
k.delete=function(a){return zi(this.i,a)?(delete this.i[a],--this.size,this.oa++,this.h.length>2*this.size&&yi(this),!0):!1};
function yi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];zi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],zi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
k.get=function(a,b){return zi(this.i,a)?this.i[a]:b};
k.set=function(a,b){zi(this.i,a)||(this.size+=1,this.h.push(a),this.oa++);this.i[a]=b};
k.forEach=function(a,b){for(var c=this.wb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new xi(this)};
k.keys=function(){return ti(this.ca(!0)).h()};
k.values=function(){return ti(this.ca(!1)).h()};
k.entries=function(){var a=this;return ii(this.keys(),function(b){return[b,a.get(b)]})};
k.ca=function(a){yi(this);var b=0,c=this.oa,d=this,e=new qi;e.next=function(){if(c!=d.oa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return ri;var f=d.h[b++];return si(a?f:d.i[f])};
return e};
function zi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.s=!!a}
$a(K,J);k=K.prototype;k.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Bi(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Fa(b)}}
k.Fa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
k.ra=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ci(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Fa(c)}}return 0!=e}return!1};
function Ci(a,b,c){xf(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Fa,this),delete this.j[a])}else this.i.length=0,this.j={}};
k.B=function(){K.X.B.call(this);this.clear();this.l.length=0};function Di(a){this.h=a}
Di.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Bg(b))};
Di.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Di.prototype.remove=function(a){this.h.remove(a)};function Ei(a){this.h=a}
$a(Ei,Di);function Fi(a){this.data=a}
function Gi(a){return void 0===a||a instanceof Fi?a:new Fi(a)}
Ei.prototype.set=function(a,b){Ei.X.set.call(this,a,Gi(b))};
Ei.prototype.i=function(a){a=Ei.X.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ei.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Hi(a){this.h=a}
$a(Hi,Ei);Hi.prototype.set=function(a,b,c){if(b=Gi(b)){if(c){if(c<Date.now()){Hi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Hi.X.set.call(this,a,b)};
Hi.prototype.i=function(a){var b=Hi.X.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Hi.prototype.remove.call(this,a);else return b}};function Ii(){}
;function Ji(){}
$a(Ji,Ii);Ji.prototype[Symbol.iterator]=function(){return ti(this.ca(!0)).h()};
Ji.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ki(a){this.h=a}
$a(Ki,Ji);k=Ki.prototype;k.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeItem(a)};
k.ca=function(a){var b=0,c=this.h,d=new qi;d.next=function(){if(b>=c.length)return ri;var e=c.key(b++);if(a)return si(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return si(e)};
return d};
k.clear=function(){this.h.clear()};
k.key=function(a){return this.h.key(a)};function Li(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
$a(Li,Ki);function Mi(a,b){this.i=a;this.h=null;var c;if(c=Jc)c=!(9<=Number(Wc));if(c){Ni||(Ni=new xi);this.h=Ni.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Ni.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(Mi,Ji);var Oi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ni=null;function Pi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Oi[b]})}
k=Mi.prototype;k.isAvailable=function(){return!!this.h};
k.set=function(a,b){this.h.setAttribute(Pi(a),b);Qi(this)};
k.get=function(a){a=this.h.getAttribute(Pi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeAttribute(Pi(a));Qi(this)};
k.ca=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new qi;d.next=function(){if(b>=c.length)return ri;var e=c[b++];if(a)return si(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return si(e)};
return d};
k.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Qi(this)};
function Qi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ri(a,b){this.i=a;this.h=b+"::"}
$a(Ri,Ji);Ri.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ri.prototype.get=function(a){return this.i.get(this.h+a)};
Ri.prototype.remove=function(a){this.i.remove(this.h+a)};
Ri.prototype.ca=function(a){var b=this.i[Symbol.iterator](),c=this,d=new qi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return si(a?e.slice(c.h.length):c.i.get(e))};
return d};function Si(a){this.name=a}
;var Ti=new Si("rawColdConfigGroup");var Ui=new Si("rawHotConfigGroup");function Vi(a){H.call(this,a)}
u(Vi,H);function Wi(a){H.call(this,a)}
u(Wi,H);Wi.prototype.getKey=function(){return Rd(this,1)};
Wi.prototype.getValue=function(){return de(this,2===Wd(this,Xi)?2:-1)};
var Xi=[2,3,4,5,6];function Yi(a){H.call(this,a)}
u(Yi,H);function Zi(a){H.call(this,a)}
u(Zi,H);function $i(a){H.call(this,a,-1,aj)}
u($i,H);var aj=[2];function bj(a){H.call(this,a,-1,cj)}
u(bj,H);bj.prototype.getPlayerType=function(){return Rd(this,36)};
bj.prototype.setHomeGroupInfo=function(a){return G(this,$i,81,a)};
bj.prototype.clearLocationPlayabilityToken=function(){return D(this,89,void 0,!1)};
var cj=[9,66,24,32,86,100,101];function dj(a){H.call(this,a,-1,ej)}
u(dj,H);var ej=[15,26,28];function fj(a){H.call(this,a,-1,gj)}
u(fj,H);var gj=[5];function hj(a){H.call(this,a)}
u(hj,H);function ij(a){H.call(this,a,-1,jj)}
u(ij,H);ij.prototype.setSafetyMode=function(a){return D(this,5,a)};
var jj=[12];function kj(a){H.call(this,a,-1,lj)}
u(kj,H);kj.prototype.i=function(a){return G(this,bj,1,a)};
var lj=[12];var mj=new Si("continuationCommand");var nj=new Si("webCommandMetadata");var oj=new Si("signalServiceEndpoint");var pj={vi:"EMBEDDED_PLAYER_MODE_UNKNOWN",ri:"EMBEDDED_PLAYER_MODE_DEFAULT",ti:"EMBEDDED_PLAYER_MODE_PFP",si:"EMBEDDED_PLAYER_MODE_PFL"};var qj=new Si("feedbackEndpoint");var rj={Uq:"WEB_DISPLAY_MODE_UNKNOWN",Qq:"WEB_DISPLAY_MODE_BROWSER",Sq:"WEB_DISPLAY_MODE_MINIMAL_UI",Tq:"WEB_DISPLAY_MODE_STANDALONE",Rq:"WEB_DISPLAY_MODE_FULLSCREEN"};function sj(a){H.call(this,a,-1,tj)}
u(sj,H);function uj(a){H.call(this,a)}
u(uj,H);uj.prototype.getKey=function(){return ee(Rd(this,1),"")};
uj.prototype.getValue=function(){return ee(Rd(this,2),"")};
var tj=[4,5];function vj(a){H.call(this,a)}
u(vj,H);function wj(a){H.call(this,a)}
u(wj,H);var xj=[2,3,4];function yj(a){H.call(this,a)}
u(yj,H);yj.prototype.getMessage=function(){return ee(Rd(this,1),"")};function zj(a){H.call(this,a)}
u(zj,H);function Aj(a){H.call(this,a)}
u(Aj,H);function Bj(a){H.call(this,a,-1,Cj)}
u(Bj,H);var Cj=[10,17];function Dj(a){H.call(this,a)}
u(Dj,H);function Ej(a){H.call(this,a)}
u(Ej,H);function Fj(a){H.call(this,a)}
u(Fj,H);function Gj(a){H.call(this,a)}
u(Gj,H);function Hj(a){H.call(this,a)}
u(Hj,H);function Ij(a){H.call(this,a,-1,Jj)}
u(Ij,H);Ij.prototype.getVideoData=function(){return Xd(this,Hj,15)};
var Jj=[4];function Kj(a){H.call(this,a)}
u(Kj,H);function Lj(a,b){return G(a,Fj,1,b)}
Kj.prototype.i=function(a){return D(this,2,a)};
function Mj(a){H.call(this,a)}
u(Mj,H);function Nj(a,b){G(a,Fj,1,b)}
;function Oj(a){H.call(this,a,-1,Pj)}
u(Oj,H);Oj.prototype.i=function(a){return D(this,1,a)};
function Qj(a,b){return G(a,Fj,2,b)}
var Pj=[3];function Rj(a){H.call(this,a)}
u(Rj,H);Rj.prototype.i=function(a){return D(this,1,a)};function Sj(a){H.call(this,a)}
u(Sj,H);Sj.prototype.i=function(a){return D(this,1,a)};function Tj(a){H.call(this,a)}
u(Tj,H);Tj.prototype.i=function(a){return D(this,1,a)};function Uj(a){H.call(this,a)}
u(Uj,H);Uj.prototype.i=function(a){return D(this,1,a)};function Vj(a){H.call(this,a)}
u(Vj,H);function Wj(a){H.call(this,a)}
u(Wj,H);function Xj(a){H.call(this,a,-1,Yj)}
u(Xj,H);Xj.prototype.getPlayerType=function(){var a=Rd(this,7);return null==a?0:a};
Xj.prototype.setVideoId=function(a){return D(this,19,a)};
function Zj(a,b){ce(a,68,ak,b)}
function ak(a){H.call(this,a)}
u(ak,H);ak.prototype.getId=function(){return ee(Rd(this,2),"")};
var Yj=[83,68];function bk(a){H.call(this,a)}
u(bk,H);function ck(a){H.call(this,a)}
u(ck,H);function dk(a){H.call(this,a)}
u(dk,H);function ek(a){H.call(this,a,459)}
u(ek,H);
var fk=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,444,176,222,383,177,178,179,458,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,
351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441,448];var gk={uj:0,fj:1,lj:2,mj:4,rj:8,nj:16,oj:32,tj:64,sj:128,hj:256,jj:512,qj:1024,ij:2048,kj:4096,gj:8192,pj:16384};function hk(a){H.call(this,a)}
u(hk,H);function ik(a){H.call(this,a)}
u(ik,H);ik.prototype.setVideoId=function(a){return Vd(this,1,Dk,a)};
ik.prototype.getPlaylistId=function(){return de(this,2===Wd(this,Dk)?2:-1)};
var Dk=[1,2];function Ek(a){H.call(this,a,-1,Fk)}
u(Ek,H);var Fk=[3];var Gk=new Si("webPlayerShareEntityServiceEndpoint");var Hk=new Si("playlistEditEndpoint");var Ik=new Si("modifyChannelNotificationPreferenceEndpoint");var Jk=new Si("unsubscribeEndpoint");var Kk=new Si("subscribeEndpoint");function Lk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Mk=y.window,Nk,Ok,Pk=(null==Mk?void 0:null==(Nk=Mk.yt)?void 0:Nk.config_)||(null==Mk?void 0:null==(Ok=Mk.ytcfg)?void 0:Ok.data_)||{};z("yt.config_",Pk);function Qk(){Lk(Pk,arguments)}
function L(a,b){return a in Pk?Pk[a]:b}
function Rk(){var a=Pk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Sk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Tk(a,b){a=Sk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Uk(){return L("EXPERIMENTS_TOKEN","")}
function Sk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Vk(){for(var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{}),c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=L("EXPERIMENT_FLAGS",{});var e=p(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Wk(){var a=Xk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Yk(a){z("yt.ads.biscotti.lastId_",a)}
;var Zk=[];function $k(a){Zk.forEach(function(b){return b(a)})}
function al(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){bl(b)}}:a}
function bl(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Qk("ERRORS",e));$k(a)}
function cl(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Qk("ERRORS",e))}
;var dl=/^[\w.]*$/,el={q:!0,search_query:!0};function fl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=gl(f[0]||""),h=gl(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var l=r,m=f[0],q=String(fl);l.args=[{key:m,value:f[1],query:a,method:hl==q?"unchanged":q}];el.hasOwnProperty(m)||cl(l)}}return c}
var hl=String(fl);function il(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function jl(a){"?"==a.charAt(0)&&(a=a.substr(1));return fl(a,"&")}
function kl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),jl(1<a.length?a[1]:a[0])):{}}
function ll(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return vc(a,e)+d}
function ml(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(nc(4,b))||null)==(Number(nc(4,a))||null):!0;return a}
function gl(a){return a&&a.match(dl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function nl(a){var b=ol;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zh;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ea){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Gh:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var l;e.u_h=null==(l=Gh.screen)?void 0:l.height;var m;e.u_w=null==(m=Gh.screen)?void 0:m.width;var q;e.u_ah=null==(q=Gh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=Gh.screen)?void 0:r.availWidth;var w;e.u_cd=null==(w=Gh.screen)?void 0:w.colorDepth}catch(ea){}h=b.h;try{var t=h.screenX;var A=h.screenY}catch(ea){}try{var E=h.outerWidth;var F=h.outerHeight}catch(ea){}try{var O=h.innerWidth;var N=h.innerHeight}catch(ea){}try{var Q=h.screenLeft;var ca=h.screenTop}catch(ea){}try{O=h.innerWidth,N=h.innerHeight}catch(ea){}try{var U=h.screen.availWidth;var rb=h.screen.availTop}catch(ea){}t=[Q,ca,t,A,U,rb,E,F,O,N];try{var Wa=(b.h.top||window).document,oa="CSS1Compat"==
Wa.compatMode?Wa.documentElement:Wa.body;var I=(new lf(oa.clientWidth,oa.clientHeight)).round()}catch(ea){I=new lf(-12245933,-12245933)}Wa=I;I={};var ma=void 0===ma?y:ma;oa=new fi;ma.SVGElement&&ma.document.createElementNS&&oa.set(0);A=Wh();A["allow-top-navigation-by-user-activation"]&&oa.set(1);A["allow-popups-to-escape-sandbox"]&&oa.set(2);ma.crypto&&ma.crypto.subtle&&oa.set(3);ma.TextDecoder&&ma.TextEncoder&&oa.set(4);ma=gi(oa);I.bc=ma;I.bih=Wa.height;I.biw=Wa.width;I.brdim=t.join();b=b.i;b=(I.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,I.wgl=!!Gh.WebGLRenderingContext,I);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ol=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return il(nl(a))});Date.now();var pl="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function ql(){if(!pl)return null;var a=pl();return"open"in a?a:null}
function rl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function sl(a,b){"function"===typeof a&&(a=al(a));return window.setTimeout(a,b)}
;var tl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ul="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja($h)),vl=!1;
function wl(a,b){b=void 0===b?{}:b;var c=ml(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in tl){var f=L(tl[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=il(nl()));return b}
function xl(a){var b=window.location.search,c=oc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ml(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jl(b),f={};gb(ul,function(g){e[g]&&(f[g]=e[g])});
return ll(a,f||{},!1)}
function yl(a,b){var c=b.format||"JSON";a=zl(a,b);var d=Al(a,b),e=!1,f=Bl(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);var m=rl(l),q=null,r=400<=l.status&&500>l.status,w=500<=l.status&&600>l.status;if(m||r||w)q=Cl(a,c,l,b.convertToSafeHtml);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,l,q):b.onError&&b.onError.call(r,l,q);b.onFinish&&b.onFinish.call(r,
l,q)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=sl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function zl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ll(a,b||{},!0);return a}
function Al(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(M("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=jl(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):tc(e));f=e||f&&!qb(f);!vl&&f&&"POST"!=b.method&&(vl=!0,bl(Error("AJAX request with postData should use POST")));return e}
function Cl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,cl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Dl(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=El(g)})}d&&Fl(e);
return e}
function Fl(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new ec(d)}else Fl(a[b])}}
function Dl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function El(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Bl(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&al(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=ql();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=xl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=wl(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Gl=Xc||Yc;function Hl(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Il=[{Bb:function(a){return"Cannot read property '"+a.key+"'"},
jb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Bb:function(a){return"Cannot call '"+a.key+"'"},
jb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Bb:function(a){return a.key+" is not defined"},
jb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Kl={ma:[],ka:[{callback:Jl,weight:500}]};function Jl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ll(){this.ka=[];this.ma=[]}
var Ml;function Nl(){if(!Ml){var a=Ml=new Ll;a.ma.length=0;a.ka.length=0;Kl.ma&&a.ma.push.apply(a.ma,Kl.ma);Kl.ka&&a.ka.push.apply(a.ka,Kl.ka)}return Ml}
;var Ol=new K;function Pl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ql(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ql(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ql(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ql(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Rl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Sl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Pl(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Sl(e+".ve",f,g,h):0;d+=g;d+=Sl(e,a[e],b,c);if(500<d)break}}else c[b]=Tl(a),d+=c[b].length;else c[b]=Tl(a),d+=c[b].length;return d}
function Sl(a,b,c,d){c+="."+a;a=Tl(b);d[c]=a;return c.length+a.length}
function Tl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Ul(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Vl(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Wl(a,b,c,d,e){tg.set(""+a,b,{hb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Xl(a,b,c){tg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Yl(){if(!tg.isEnabled())return!1;if(!tg.Ma())return!0;tg.set("TESTCOOKIESENABLED","1",{hb:60});if("1"!==tg.get("TESTCOOKIESENABLED"))return!1;tg.remove("TESTCOOKIESENABLED");return!0}
;var Zl=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Zl);function $l(){this.h=L("ALT_PREF_COOKIE_NAME","PREF");this.i=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=tg.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Zl[d]=c.toString())}}}
$l.prototype.get=function(a,b){am(a);bm(a);a=void 0!==Zl[a]?Zl[a].toString():null;return null!=a?a:b?b:""};
$l.prototype.set=function(a,b){am(a);bm(a);if(null==b)throw Error("ExpectedNotNull");Zl[a]=b.toString()};
function cm(a){return!!((dm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
$l.prototype.remove=function(a){am(a);bm(a);delete Zl[a]};
$l.prototype.clear=function(){for(var a in Zl)delete Zl[a]};
function bm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function am(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function dm(a){a=void 0!==Zl[a]?Zl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Oa($l);var em={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},fm={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},gm={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},hm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function im(){var a=y.navigator;return a?a.connection:void 0}
function jm(){var a=im();if(a){var b=em[a.type||"unknown"]||"CONN_UNKNOWN";a=em[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function km(){var a=im();if(null!=a&&a.effectiveType)return hm.hasOwnProperty(a.effectiveType)?hm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function lm(){}
function mm(a,b){return nm(a,0,b)}
lm.prototype.S=function(a,b){return nm(a,1,b)};
function om(a,b){nm(a,2,b)}
function pm(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function qm(){lm.apply(this,arguments)}
u(qm,lm);function rm(){qm.h||(qm.h=new qm);return qm.h}
function nm(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):sl(a,c||0)}
qm.prototype.da=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
qm.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
qm.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var ei=rm();function P(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
u(P,Error);function sm(){try{return tm(),!0}catch(a){return!1}}
function tm(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new P("Datasync ID not set",void 0===a?"unknown":a);}
;function um(a){var b=new Li;(b=b.isAvailable()?a?new Ri(b,a):b:null)||(a=new Mi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Hi(a):null;this.i=document.domain||window.location.hostname}
um.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Bg(b))}catch(f){return}else e=escape(b);Wl(a,e,c,this.i)};
um.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=tg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
um.prototype.remove=function(a){this.h&&this.h.remove(a);Xl(a,"/",this.i)};var vm=function(){var a;return function(){a||(a=new um("ytidb"));return a}}();
function wm(){var a;return null==(a=vm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var xm=[],ym,zm=!1;function Am(){var a={};for(ym=new Bm(void 0===a.handleError?Cm:a.handleError,void 0===a.logEvent?Dm:a.logEvent);0<xm.length;)switch(a=xm.shift(),a.type){case "ERROR":ym.handleError(a.payload);break;case "EVENT":ym.logEvent(a.eventType,a.payload)}}
function Em(a){zm||(ym?ym.handleError(a):(xm.push({type:"ERROR",payload:a}),10<xm.length&&xm.shift()))}
function Fm(a,b){zm||(ym?ym.logEvent(a,b):(xm.push({type:"EVENT",eventType:a,payload:b}),10<xm.length&&xm.shift()))}
;function Gm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Hm(a){return a.substr(0,a.indexOf(":"))||a}
;var Im={},Jm=(Im.AUTH_INVALID="No user identifier specified.",Im.EXPLICIT_ABORT="Transaction was explicitly aborted.",Im.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Im.MISSING_INDEX="Index not created.",Im.MISSING_OBJECT_STORES="Object stores not created.",Im.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Im.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Im.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Im.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Im.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Im.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Im.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Im),Km={},Lm=(Km.AUTH_INVALID="ERROR",Km.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Km.EXPLICIT_ABORT="IGNORED",Km.IDB_NOT_SUPPORTED="ERROR",Km.MISSING_INDEX=
"WARNING",Km.MISSING_OBJECT_STORES="ERROR",Km.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Km.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Km.QUOTA_EXCEEDED="WARNING",Km.QUOTA_MAYBE_EXCEEDED="WARNING",Km.UNKNOWN_ABORT="WARNING",Km.INCOMPATIBLE_DB_VERSION="WARNING",Km),Mm={},Nm=(Mm.AUTH_INVALID=!1,Mm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Mm.EXPLICIT_ABORT=!1,Mm.IDB_NOT_SUPPORTED=!1,Mm.MISSING_INDEX=!1,Mm.MISSING_OBJECT_STORES=!1,Mm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Mm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Mm.QUOTA_EXCEEDED=!1,Mm.QUOTA_MAYBE_EXCEEDED=!0,Mm.UNKNOWN_ABORT=!0,Mm.INCOMPATIBLE_DB_VERSION=!1,Mm);function Om(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Jm[a]:c;d=void 0===d?Lm[a]:d;e=void 0===e?Nm[a]:e;P.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Om.prototype)}
u(Om,P);function Pm(a,b){Om.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Jm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Pm.prototype)}
u(Pm,Om);function Qm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Qm.prototype)}
u(Qm,Error);var Rm=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Sm(a,b,c,d){b=Hm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Om)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Om("QUOTA_EXCEEDED",a);if(Zc&&"UnknownError"===e.name)return new Om("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Qm)return new Om("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Rm.some(function(f){return e.message.includes(f)}))return new Om("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Om("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",ic:e.name})];e.level="WARNING";return e}
function Tm(a,b,c){var d=wm();return new Om("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Um(a){if(!a)throw Error();throw a;}
function Vm(a){return a}
function Wm(a){this.h=a}
function Xm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Xm.all=function(a){return new Xm(new Wm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ya:0};f.ya<a.length;f={ya:f.ya},++f.ya)Xm.resolve(a[f.ya]).then(function(g){return function(h){d[g.ya]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Xm.resolve=function(a){return new Xm(new Wm(function(b,c){a instanceof Xm?a.then(b,c):b(a)}))};
Xm.reject=function(a){return new Xm(new Wm(function(b,c){c(a)}))};
Xm.prototype.then=function(a,b){var c=this,d=null!=a?a:Vm,e=null!=b?b:Um;return new Xm(new Wm(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ym(c,c,d,f,g)}),c.i.push(function(){Zm(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ym(c,c,d,f,g):"REJECTED"===c.state.status&&Zm(c,c,e,f,g)}))};
Xm.prototype.catch=function(a){return this.then(void 0,a)};
function Ym(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Xm?$m(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Xm?$m(a,b,f,d,e):d(f)}catch(g){e(g)}}
function $m(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Xm?$m(a,b,f,d,e):d(f)},function(f){e(f)})}
;function an(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function bn(a){return new Promise(function(b,c){an(a,b,c)})}
function cn(a){return new Xm(new Wm(function(b,c){an(a,b,c)}))}
;function dn(a,b){return new Xm(new Wm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var en=window,R=en.ytcsi&&en.ytcsi.now?en.ytcsi.now:en.performance&&en.performance.timing&&en.performance.now&&en.performance.timing.navigationStart?function(){return en.performance.timing.navigationStart+en.performance.now()}:function(){return(new Date).getTime()};function fn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
k=fn.prototype;k.add=function(a,b,c){return gn(this,[a],{mode:"readwrite",R:!0},function(d){return d.objectStore(a).add(b,c)})};
k.clear=function(a){return gn(this,[a],{mode:"readwrite",R:!0},function(b){return b.objectStore(a).clear()})};
k.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
k.count=function(a,b){return gn(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).count(b)})};
function hn(a,b,c){a=a.h.createObjectStore(b,c);return new jn(a)}
k.delete=function(a,b){return gn(this,[a],{mode:"readwrite",R:!0},function(c){return c.objectStore(a).delete(b)})};
k.get=function(a,b){return gn(this,[a],{mode:"readonly",R:!0},function(c){return c.objectStore(a).get(b)})};
function kn(a,b,c){return gn(a,[b],{mode:"readwrite",R:!0},function(d){d=d.objectStore(b);return cn(d.h.put(c,void 0))})}
k.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function gn(a,b,c,d){var e,f,g,h,l,m,q,r,w,t,A,E;return x(function(F){switch(F.h){case 1:var O={mode:"readonly",R:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.R?3:1;g=0;case 2:if(h){F.u(3);break}g++;l=Math.round(R());za(F,4);m=a.h.transaction(b,e.mode);O=new ln(m);O=mn(O,d);return v(F,O,6);case 6:return q=F.i,r=Math.round(R()),nn(a,l,r,g,void 0,b.join(),e),F.return(q);case 4:w=Ba(F);t=Math.round(R());A=Sm(w,a.h.name,b.join(),a.h.version);
if((E=A instanceof Om&&!A.h)||g>=f)nn(a,l,t,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function nn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Om&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Fm("QUOTA_EXCEEDED",{dbName:Hm(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Om&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Fm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),on(a,!1,d,f,b,g.tag),Em(e)):on(a,!0,d,f,b,g.tag)}
function on(a,b,c,d,e,f){Fm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
k.getName=function(){return this.h.name};
function jn(a){this.h=a}
k=jn.prototype;k.add=function(a,b){return cn(this.h.add(a,b))};
k.autoIncrement=function(){return this.h.autoIncrement};
k.clear=function(){return cn(this.h.clear()).then(function(){})};
function pn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
k.count=function(a){return cn(this.h.count(a))};
function qn(a,b){return rn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
k.delete=function(a){return a instanceof IDBKeyRange?qn(this,a):cn(this.h.delete(a))};
k.get=function(a){return cn(this.h.get(a))};
k.index=function(a){try{return new sn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Qm(a,this.h.name);throw b;}};
k.getName=function(){return this.h.name};
k.keyPath=function(){return this.h.keyPath};
function rn(a,b,c){a=a.h.openCursor(b.query,b.direction);return tn(a).then(function(d){return dn(d,c)})}
function ln(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Om;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function mn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
ln.prototype.abort=function(){this.h.abort();this.i=!0;throw new Om("EXPLICIT_ABORT");};
ln.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new jn(a),this.j.set(a,b));return b};
function sn(a){this.h=a}
k=sn.prototype;k.count=function(a){return cn(this.h.count(a))};
k.delete=function(a){return un(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
k.get=function(a){return cn(this.h.get(a))};
k.getKey=function(a){return cn(this.h.getKey(a))};
k.keyPath=function(){return this.h.keyPath};
k.unique=function(){return this.h.unique};
function un(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return tn(a).then(function(d){return dn(d,c)})}
function vn(a,b){this.request=a;this.cursor=b}
function tn(a){return cn(a).then(function(b){return b?new vn(a,b):null})}
k=vn.prototype;k.advance=function(a){this.cursor.advance(a);return tn(this.request)};
k.continue=function(a){this.cursor.continue(a);return tn(this.request)};
k.delete=function(){return cn(this.cursor.delete()).then(function(){})};
k.getKey=function(){return this.cursor.key};
k.getValue=function(){return this.cursor.value};
k.update=function(a){return cn(this.cursor.update(a))};function wn(a,b,c){return new Promise(function(d,e){function f(){w||(w=new fn(g.result,{closed:r}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Fc,l=c.blocking,m=c.vd,q=c.upgrade,r=c.closed,w;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&Fm("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Hm(a)});var A=f(),E=new ln(g.transaction);
q&&q(A,function(F){return t.oldVersion<F&&t.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var t=g.result;l&&t.addEventListener("versionchange",function(){l(f())});
t.addEventListener("close",function(){Fm("IDB_UNEXPECTEDLY_CLOSED",{dbName:Hm(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function xn(a,b,c){c=void 0===c?{}:c;return wn(a,b,c)}
function yn(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Fc)&&c.addEventListener("blocked",function(){e()}),v(g,bn(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Sm(f,a,"",-1);})}
;function zn(a){return new Promise(function(b){om(function(){b()},a)})}
function An(a,b){this.name=a;this.options=b;this.l=!0;this.o=this.m=0;this.i=500}
An.prototype.j=function(a,b,c){c=void 0===c?{}:c;return xn(a,b,c)};
An.prototype.delete=function(a){a=void 0===a?{}:a;return yn(this.name,a)};
function Bn(a,b){return new Om("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Cn(a,b){if(!b)throw Tm("openWithToken",Hm(a.name));return Dn(a)}
function Dn(a){function b(){var f,g,h,l,m,q,r,w,t,A;return x(function(E){switch(E.h){case 1:return g=null!=(f=Error().stack)?f:"",za(E,2),v(E,a.j(a.name,a.options.version,d),4);case 4:h=E.i;for(var F=a.options,O=[],N=p(Object.keys(F.Ca)),Q=N.next();!Q.done;Q=N.next()){Q=Q.value;var ca=F.Ca[Q],U=void 0===ca.fd?Number.MAX_VALUE:ca.fd;!(h.h.version>=ca.Ha)||h.h.version>=U||h.h.objectStoreNames.contains(Q)||O.push(Q)}l=O;if(0===l.length){E.u(5);break}m=Object.keys(a.options.Ca);q=h.objectStoreNames();
if(a.o<Tk("ytidb_reopen_db_retries",0))return a.o++,h.close(),Em(new Om("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.m<Tk("ytidb_remake_db_retries",1))){E.u(6);break}a.m++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return v(E,zn(a.i),8);case 8:a.i*=2;case 7:return v(E,a.delete(),9);case 9:return Em(new Om("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new Pm(q,m);case 5:return E.return(h);case 2:r=Ba(E);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){E.u(10);break}return v(E,a.j(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=E.i;t=w.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw w.close(),
a.l=!1,Bn(a,t);return E.return(w);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Sm(r,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.l)throw Bn(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,vd:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var En=new An("YtIdbMeta",{Ca:{databases:{Ha:1}},upgrade:function(a,b){b(1)&&hn(a,"databases",{keyPath:"actualName"})}});
function Fn(a,b){var c;return x(function(d){if(1==d.h)return v(d,Cn(En,b),2);c=d.i;return d.return(gn(c,["databases"],{R:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return cn(f.h.put(a,void 0)).then(function(){})})}))})}
function Gn(a,b){var c;return x(function(d){if(1==d.h)return a?v(d,Cn(En,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Hn(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],v(e,Cn(En,b),2)):3!=e.h?(d=e.i,v(e,gn(d,["databases"],{R:!0,mode:"readonly"},function(f){c.length=0;return rn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function In(a){return Hn(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Jn(a,b,c){return Hn(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Kn(a){var b,c;return x(function(d){if(1==d.h)return b=tm("YtIdbMeta hasAnyMeta other"),v(d,Hn(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Ln,Mn=new function(){}(new function(){});
function Nn(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=wm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Gl)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Kc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,Fn(d,Mn),4);case 4:return v(e,Gn("yt-idb-test-do-not-use",Mn),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function On(){if(void 0!==Ln)return Ln;zm=!0;return Ln=Nn().then(function(a){zm=!1;var b;if(null!=(b=vm())&&b.h){var c;b={hasSucceededOnce:(null==(c=wm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=vm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Pn(){return B("ytglobal.idbToken_")||void 0}
function Qn(){var a=Pn();return a?Promise.resolve(a):On().then(function(b){(b=b?Mn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var Rn=0;function Sn(a,b){Rn||(Rn=ei.S(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return v(h,Qn(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return v(h,Jn(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,yn(f.actualName),7);case 7:return v(h,Gn(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Em(g),d=!1;case 4:ei.da(Rn),Rn=0,d&&Sn(a,b),h.h=0}})}))}
function Tn(){var a;return x(function(b){return 1==b.h?v(b,Qn(),2):(a=b.i)?b.return(Kn(a)):b.return(!1)})}
new Eh;function Un(a){if(!sm())throw a=new Om("AUTH_INVALID",{dbName:a}),Em(a),a;var b=tm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Vn(a,b,c,d){var e,f,g,h,l,m;return x(function(q){switch(q.h){case 1:return f=null!=(e=Error().stack)?e:"",v(q,Qn(),2);case 2:g=q.i;if(!g)throw h=Tm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Em(h),h;Gm(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Un(a);za(q,3);return v(q,Fn(l,g),5);case 5:return v(q,xn(l.actualName,b,d),6);case 6:return q.return(q.i);case 3:return m=Ba(q),za(q,7),v(q,Gn(l.actualName,g),9);case 9:Aa(q,
8);break;case 7:Ba(q);case 8:throw m;}})}
function Wn(a,b,c){c=void 0===c?{}:c;return Vn(a,b,!1,c)}
function Xn(a,b,c){c=void 0===c?{}:c;return Vn(a,b,!0,c)}
function Yn(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return v(e,Qn(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Gm(a);d=Un(a);return v(e,yn(d.actualName,b),3)}return v(e,Gn(d.actualName,c),0)})}
function Zn(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?v(e,yn(d.actualName,b),2):v(e,Gn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function $n(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return v(d,Qn(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Gm("LogsDatabaseV2");return v(d,In(b),3)}c=d.i;return v(d,Zn(c,a,b),0)})}
function ao(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return v(d,Qn(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Gm(a);return v(d,yn(a,b),3)}return v(d,Gn(a,c),0)})}
;function bo(a,b){An.call(this,a,b);this.options=b;Gm(a)}
u(bo,An);function co(a,b){var c;return function(){c||(c=new bo(a,b));return c}}
bo.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.ob?Xn:Wn)(a,b,Object.assign({},c))};
bo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.ob?ao:Yn)(this.name,a)};
function eo(a,b){return co(a,b)}
;var fo={},go=eo("ytGcfConfig",{Ca:(fo.coldConfigStore={Ha:1},fo.hotConfigStore={Ha:1},fo),ob:!1,upgrade:function(a,b){b(1)&&(pn(hn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),pn(hn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function ho(a){return Cn(go(),a)}
function io(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:R()},v(g,ho(c),2);case 2:return e=g.i,v(g,e.clear("hotConfigStore"),3);case 3:return v(g,kn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function jo(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:R()},v(h,ho(d),2);case 2:return f=h.i,v(h,f.clear("coldConfigStore"),3);case 3:return v(h,kn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function ko(a){var b,c;return x(function(d){return 1==d.h?v(d,ho(a),2):3!=d.h?(b=d.i,c=void 0,v(d,gn(b,["coldConfigStore"],{mode:"readwrite",R:!0},function(e){return un(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function lo(a){var b,c;return x(function(d){return 1==d.h?v(d,ho(a),2):3!=d.h?(b=d.i,c=void 0,v(d,gn(b,["hotConfigStore"],{mode:"readwrite",R:!0},function(e){return un(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function mo(){}
function no(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!M("gcf_config_store_update_enabled"))return g.u(0);c&&(a.h=c,z("yt.gcf.config.hotConfigGroup",a.h));a.hotHashData=b;z("yt.gcf.config.hotHashData",a.hotHashData);return(d=Pn())?c?g.u(4):v(g,lo(d),5):g.u(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return v(g,io(c,b,d),0)})}
function oo(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!M("gcf_config_store_update_enabled"))return h.u(0);a.coldHashData=b;z("yt.gcf.config.coldHashData",a.coldHashData);return(d=Pn())?c?h.u(4):v(h,ko(d),5):h.u(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.u(0);g=c.configData;return v(h,jo(c,b,g,d),0)})}
;function po(){return"INNERTUBE_API_KEY"in Pk&&"INNERTUBE_API_VERSION"in Pk}
function qo(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),xb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ac:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Sc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),dc:L("INNERTUBE_CONTEXT_HL"),cc:L("INNERTUBE_CONTEXT_GL"),Tc:L("INNERTUBE_HOST_OVERRIDE")||"",Vc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Uc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ro(a){var b={client:{hl:a.dc,gl:a.cc,clientName:a.ac,clientVersion:a.innertubeContextClientVersion,configInfo:a.xb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Uk();""!==c&&(b.client.experimentsToken=c);c=Vk();0<c.length&&(b.request={internalExperimentFlags:c});so(a,void 0,b);M("enable_third_party_info")&&to(void 0,b);uo(void 0,b);vo(a,void 0,b);wo(void 0,b);M("start_sending_config_hash")&&
xo(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(jl(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,
e);return b}
function yo(a){var b=new kj,c=new bj;D(c,1,a.dc);D(c,2,a.cc);D(c,16,a.Sc);D(c,17,a.innertubeContextClientVersion);if(a.xb){var d=a.xb,e=new Yi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Yi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=Uk();""!==d&&D(c,54,d);d=Vk();if(0<d.length){e=new dj;for(var f=0;f<d.length;f++){var g=new Wi;D(g,1,d[f].key);Vd(g,2,Xi,d[f].value);ce(e,15,Wi,g)}G(b,
dj,5,e)}so(a,c);M("enable_third_party_info")&&to(b);uo(c);vo(a,c);wo(c);M("start_sending_config_hash")&&xo(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new ij,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(jl(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.i(c);return b}
function so(a,b,c){a=a.ac;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Xd(b,Zi,96)||new Zi;var d=Vl();d=Object.keys(rj).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,Zi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Vl())}
function to(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=Xd(a,fj,7)||new fj,D(b,4,c),G(a,fj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function uo(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function vo(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Xd(b,Yi,62))?d:new Yi;D(c,6,a.appInstallData);G(b,Yi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function wo(a,b){var c=jm();c&&(a?D(a,61,fm[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=km())&&(a?D(a,94,gm[c]):b&&(b.client.effectiveConnectionType=c))}
function zo(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ur||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().tr:b=xg([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
function xo(a,b){mo.h||(mo.h=new mo);var c=B("yt.gcf.config.coldConfigData");var d=B("yt.gcf.config.hotHashData");var e=B("yt.gcf.config.coldHashData");if(c&&e&&d)if(a){var f;b=null!=(f=Xd(a,Yi,62))?f:new Yi;D(b,1,c);D(b,3,e);D(b,5,d);G(a,Yi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=e,b.client.configInfo.hotHashData=d)}
;function Ao(a){a=Object.assign({},a);delete a.Authorization;var b=xg();if(b){var c=new ki;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=bd(c.digest(),3)}return a}
;var Bo;function Co(){Bo||(Bo=new um("yt.innertube"));return Bo}
function Do(a,b,c,d){if(d)return null;d=Co().get("nextId",!0)||1;var e=Co().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ao(c),requestTime:Math.round(R())};Co().set("nextId",d+1,86400,!0);Co().set("requests",e,86400,!0);return d}
function Eo(a){var b=Co().get("requests",!0)||{};delete b[a];Co().set("requests",b,86400,!0)}
function Fo(a){var b=Co().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=Ao(zo(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),Go(a,d.method,e,{}));delete b[c]}}Co().set("requests",b,86400,!0)}}
;function Ho(a){this.ab=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ba=function(){};
this.now=Date.now;this.Ia=!1;var b;this.sc=null!=(b=a.sc)?b:100;var c;this.nc=null!=(c=a.nc)?c:1;var d;this.lc=null!=(d=a.lc)?d:2592E6;var e;this.jc=null!=(e=a.jc)?e:12E4;var f;this.mc=null!=(f=a.mc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.fb=!!a.fb;var h;this.eb=null!=(h=a.eb)?h:.1;var l;this.kb=null!=(l=a.kb)?l:10;a.handleError&&(this.handleError=a.handleError);a.Ba&&(this.Ba=a.Ba);a.Ia&&(this.Ia=a.Ia);a.ab&&(this.ab=a.ab);this.J=a.J;this.Y=a.Y;this.N=a.N;this.L=a.L;this.ia=a.ia;this.Db=
a.Db;this.Cb=a.Cb;Io(this)&&(!this.J||this.J("networkless_logging"))&&Jo(this)}
function Jo(a){Io(a)&&!a.Ia&&(a.h=!0,a.fb&&Math.random()<=a.eb&&a.N.Hc(a.H),Ko(a),a.L.U()&&a.Pa(),a.L.ha(a.Db,a.Pa.bind(a)),a.L.ha(a.Cb,a.Qb.bind(a)))}
k=Ho.prototype;k.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Io(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.H).then(function(e){d.id=e;c.L.U()&&Lo(c,d)}).catch(function(e){Lo(c,d);
Mo(c,e)})}else this.ia(a,b)};
k.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Io(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.L.U()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(l){if(1==l.h)return v(l,d.N.set(e,d.H).catch(function(m){Mo(d,m)}),2);
f(g,h);l.h=0})}}this.ia(a,b,e.skipRetry)}else this.N.set(e,this.H).catch(function(g){d.ia(a,b,e.skipRetry);
Mo(d,g)})}else this.ia(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
k.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Io(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Aa(d.id,c.H):e=!0;c.L.va&&c.J&&c.J("vss_network_hint")&&c.L.va(!0);f(g,h)};
this.ia(d.url,d.options);this.N.set(d,this.H).then(function(g){d.id=g;e&&c.N.Aa(d.id,c.H)}).catch(function(g){Mo(c,g)})}else this.ia(a,b)};
k.Pa=function(){var a=this;if(!Io(this))throw Tm("throttleSend");this.i||(this.i=this.Y.S(function(){var b;return x(function(c){if(1==c.h)return v(c,a.N.Zb("NEW",a.H),2);if(3!=c.h)return b=c.i,b?v(c,Lo(a,b),3):(a.Qb(),c.return());a.i&&(a.i=0,a.Pa());c.h=0})},this.sc))};
k.Qb=function(){this.Y.da(this.i);this.i=0};
function Lo(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!Io(a))throw c=Tm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.N.Xc(b.id,a.H),3);case 3:(d=e.i)?b=d:a.Ba(Error("The request cannot be found in the database."));case 2:if(No(a,b,a.lc)){e.u(4);break}a.Ba(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.N.Aa(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=Oo(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.N.Aa(b.id,a.H),8);case 8:a.ia(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Oo(a,b){if(!Io(a))throw Tm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l;return x(function(m){switch(m.h){case 1:g=Po(f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.kb)){m.u(2);break}if(!a.L.nb){m.u(3);break}return v(m,a.L.nb(),3);case 3:if(a.L.U()){m.u(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.N.Hb(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.kb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.u(8);break}return b.sendCount<a.nc?v(m,a.N.Hb(b.id,a.H),12):v(m,a.N.Aa(b.id,a.H),8);case 12:a.Y.S(function(){a.L.U()&&a.Pa()},a.mc);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.N.Aa(b.id,a.H),2);a.L.va&&a.J&&a.J("vss_network_hint")&&a.L.va(!0);d(e,f);h.h=0})};
return b}
function No(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ko(a){if(!Io(a))throw Tm("retryQueuedRequests");a.N.Zb("QUEUED",a.H).then(function(b){b&&!No(a,b,a.jc)?a.Y.S(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.u(2):v(c,a.N.Hb(b.id,a.H),2);Ko(a);c.h=0})}):a.L.U()&&a.Pa()})}
function Mo(a,b){a.xc&&!a.L.U()?a.xc(b):a.handleError(b)}
function Io(a){return!!a.H||a.ab}
function Po(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Qo(a,b){this.version=a;this.args=b}
;function Ro(a,b){this.topic=a;this.h=b}
Ro.prototype.toString=function(){return this.topic};var So=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Fa;K.prototype.publish=K.prototype.ra;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",So);var To=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",To);var Uo=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Uo);var Vo=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Vo);
z("ytPubsub2Pubsub2SkipSubKey",null);function Wo(a,b){var c=Xo();c&&c.publish.call(c,a.toString(),a,b)}
function Yo(a){var b=Zo,c=Xo();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(To[d])try{if(f&&b instanceof Ro&&b!=e)try{var h=b.h,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.oa){var m=new h;h.oa=m.version}var q=h.oa}catch(F){}if(!q||l.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var w=l.args,t=w.length;if(0<t){var A=Array(t);for(l=0;l<t;l++)A[l]=w[l];var E=A}else E=[];f=r.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){bl(F)}},Vo[b.toString()]?B("yt.scheduler.instance")?ei.S(g):sl(g,0):g())});
To[d]=!0;Uo[b.toString()]||(Uo[b.toString()]=[]);Uo[b.toString()].push(d);return d}
function $o(){var a=ap,b=Yo(function(c){a.apply(void 0,arguments);bp(b)});
return b}
function bp(a){var b=Xo();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete To[c]}))}
function Xo(){return B("ytPubsub2Pubsub2Instance")}
;var cp;
function dp(){if(cp)return cp();var a={};cp=eo("LogsDatabaseV2",{Ca:(a.LogsRequestsStore={Ha:2},a),ob:!1,upgrade:function(b,c,d){c(2)&&hn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),pn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return cp()}
;function ep(a){return Cn(dp(),a)}
function fp(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,ep(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,kn(d,"LogsRequestsStore",e),3);f=g.i;c.xd=R();gp(c);return g.return(f)})}
function hp(a,b){var c,d,e,f,g,h,l;return x(function(m){if(1==m.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,ep(b),2);if(3!=m.h)return d=m.i,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,R()],h=IDBKeyRange.bound(f,g),l=void 0,v(m,gn(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(q){return un(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),"NEW"===a&&(l.status="QUEUED",
r.update(l)))})}),3);
c.xd=R();gp(c);return m.return(l)})}
function ip(a,b){var c;return x(function(d){if(1==d.h)return v(d,ep(b),2);c=d.i;return d.return(gn(c,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",cn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function jp(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return v(e,ep(b),2);d=e.i;return e.return(gn(d,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),cn(g.h.put(h,void 0)).then(function(){return h})):Xm.resolve(void 0)})}))})}
function kp(a,b){var c;return x(function(d){if(1==d.h)return v(d,ep(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function lp(a){var b,c;return x(function(d){if(1==d.h)return v(d,ep(a),2);b=d.i;c=R()-2592E6;return v(d,gn(b,["LogsRequestsStore"],{mode:"readwrite",R:!0},function(e){return rn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function mp(){x(function(a){return v(a,$n(),0)})}
function gp(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Wo("nwl_transaction_latency_payload",a)}
;var np={},op=eo("ServiceWorkerLogsDatabase",{Ca:(np.SWHealthLog={Ha:1},np),ob:!0,upgrade:function(a,b){b(1)&&pn(hn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function pp(a){return Cn(op(),a)}
function qp(a){var b,c;x(function(d){if(1==d.h)return v(d,pp(a),2);b=d.i;c=R()-2592E6;return v(d,gn(b,["SWHealthLog"],{mode:"readwrite",R:!0},function(e){return rn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function rp(a){var b;return x(function(c){if(1==c.h)return v(c,pp(a),2);b=c.i;return v(c,b.clear("SWHealthLog"),0)})}
;var sp={},tp=0;function up(a){var b=new Image,c=""+tp++;sp[c]=b;b.onload=b.onerror=function(){delete sp[c]};
b.src=a}
;function vp(){this.h=new Map;this.i=!1}
function wp(){if(!vp.h){var a=B("yt.networkRequestMonitor.instance")||new vp;z("yt.networkRequestMonitor.instance",a);vp.h=a}return vp.h}
vp.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
vp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
vp.prototype.removeParams=function(a){return a.split("?")[0]};
vp.prototype.removeParams=vp.prototype.removeParams;vp.prototype.isEndpointCFR=vp.prototype.isEndpointCFR;vp.prototype.requestComplete=vp.prototype.requestComplete;vp.getInstance=wp;var xp;function yp(){xp||(xp=new um("yt.offline"));return xp}
function Mp(a){if(M("offline_error_handling")){var b=yp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);yp().set("errors",b,2592E3,!0)}}
;function kq(){df.call(this);var a=this;this.j=!1;this.i=di();this.i.ha("networkstatus-online",function(){if(a.j&&M("offline_error_handling")){var b=yp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new P(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;bl(d)}yp().set("errors",{},2592E3,!0)}}})}
u(kq,df);function lq(){if(!kq.h){var a=B("yt.networkStatusManager.instance")||new kq;z("yt.networkStatusManager.instance",a);kq.h=a}return kq.h}
k=kq.prototype;k.U=function(){return this.i.U()};
k.va=function(a){this.i.i=a};
k.Qc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
k.Lc=function(){this.j=!0};
k.ha=function(a,b){return this.i.ha(a,b)};
k.nb=function(a){a=bi(this.i,a);a.then(function(b){M("use_cfr_monitor")&&wp().requestComplete("generate_204",b)});
return a};
kq.prototype.sendNetworkCheckRequest=kq.prototype.nb;kq.prototype.listen=kq.prototype.ha;kq.prototype.enableErrorFlushing=kq.prototype.Lc;kq.prototype.getWindowStatus=kq.prototype.Qc;kq.prototype.networkStatusHint=kq.prototype.va;kq.prototype.isNetworkAvailable=kq.prototype.U;kq.getInstance=lq;function mq(a){a=void 0===a?{}:a;df.call(this);var b=this;this.i=this.o=0;this.j=lq();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.mb?(this.mb=a.mb,c("networkstatus-online",function(){nq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){nq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ef(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ef(b,"publicytnetworkstatus-offline")})))}
u(mq,df);mq.prototype.U=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
mq.prototype.va=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
mq.prototype.nb=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&wp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.va((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.U())})):c?d.return(c(a)):d.return(!0)})};
function nq(a,b){a.mb?a.i?(ei.da(a.o),a.o=ei.S(function(){a.m!==b&&(ef(a,b),a.m=b,a.i=R())},a.mb-(R()-a.i))):(ef(a,b),a.m=b,a.i=R()):ef(a,b)}
;var oq;function pq(){var a=Ho.call;oq||(oq=new mq({Gr:!0,Ar:!0}));a.call(Ho,this,{N:{Hc:lp,Aa:kp,Zb:hp,Xc:ip,Hb:jp,set:fp},L:oq,handleError:bl,Ba:cl,ia:qq,now:R,xc:Mp,Y:rm(),Db:"publicytnetworkstatus-online",Cb:"publicytnetworkstatus-offline",fb:!0,eb:.1,kb:Tk("potential_esf_error_limit",10),J:M,Ia:!(sm()&&rq())});this.j=new Eh;M("networkless_immediately_drop_all_requests")&&mp();ao("LogsDatabaseV2")}
u(pq,Ho);function sq(){var a=B("yt.networklessRequestController.instance");a||(a=new pq,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&Qn().then(function(b){a.H=b;Jo(a);a.j.resolve();a.fb&&Math.random()<=a.eb&&a.H&&qp(a.H);M("networkless_immediately_drop_sw_health_store")&&tq(a)}));
return a}
pq.prototype.writeThenSend=function(a,b){b||(b={});sm()||(this.h=!1);Ho.prototype.writeThenSend.call(this,a,b)};
pq.prototype.sendThenWrite=function(a,b,c){b||(b={});sm()||(this.h=!1);Ho.prototype.sendThenWrite.call(this,a,b,c)};
pq.prototype.sendAndWrite=function(a,b){b||(b={});sm()||(this.h=!1);Ho.prototype.sendAndWrite.call(this,a,b)};
pq.prototype.awaitInitialization=function(){return this.j.promise};
function tq(a){var b;x(function(c){if(!a.H)throw b=Tm("clearSWHealthLogsDb"),b;return c.return(rp(a.H).catch(function(d){a.handleError(d)}))})}
function qq(a,b,c){M("use_cfr_monitor")&&uq(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(R())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Bl(a,void 0,"POST",e);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Bl(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new cb({url:a});if(g.j&&g.i||
g.l){var h=mc(nc(5,a)),l;if(!(l=!h||!h.endsWith("/aclk"))){var m=a.search(Bc),q=xc(a,0,"ri",m);if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>m)w=m;r=decodeURIComponent(a.slice(q+3,-1!==w?w:0).replace(/\+/g," "))}l="1"!==r}var t=!l;break b}}catch(E){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(E){}A=!1}c=A?!0:!1}else c=!1;c||up(a)}}else yl(a,b)}
function uq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){wp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){wp().requestComplete(a,!0);d(e,f)}}
function rq(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var vq=!1,wq=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:vq};z("ytNetworklessLoggingInitializationOptions",wq);function xq(){var a;x(function(b){if(1==b.h)return v(b,Qn(),2);a=b.i;if(!a||!sm()&&!M("nwl_init_require_datasync_id_killswitch")||!rq())return b.u(0);vq=!0;wq.isNwlInitialized=vq;return v(b,sq().awaitInitialization(),0)})}
;function yq(a){var b=this;this.config_=null;a?this.config_=a:po()&&(this.config_=qo());mm(function(){Fo(b)},5E3)}
yq.prototype.isReady=function(){!this.config_&&po()&&(this.config_=qo());return!!this.config_};
function Go(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=Do(b,c,m,l)),E)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,Q){Eo(E);F(N,Q)};
c.onFetchSuccess=function(N,Q){Eo(E);O(N,Q)}}try{A&&d.retry&&!d.fc.bypassNetworkless?(g.method="POST",d.fc.writeThenSend?sq().writeThenSend(t,g):sq().sendAndWrite(t,g)):M("web_all_payloads_via_jspb")?yl(t,g):(g.method="POST",g.postParams||(g.postParams={}),yl(t,g))}catch(N){if("InvalidAccessError"==N.name)E&&(Eo(E),E=0),cl(Error("An extension is blocking network request."));
else throw N;}E&&mm(function(){Fo(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&cl(new P("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new P("innertube xhrclient not ready",b,c,d);bl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Tc)&&(h=f);var l=a.config_.Vc||!1,m=zo(l,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},w=a.config_.Uc&&f;w=w&&f.startsWith("Bearer");w||(r.key=a.config_.innertubeApiKey);var t=ll(""+h+q,r||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
wq.isNwlInitialized:vq)?On().then(function(A){e(A)}):e(!1)}
;var zq=0,Aq=Mc?"webkit":Lc?"moz":Jc?"ms":Ic?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++zq});var Bq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Cq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Bq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Dq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Cq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Cq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Cq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",pb);var Eq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Eq);
function Fq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Gq=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Hq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Fq(a,b,c,d);if(e)return e;e=++Eq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Cq(h);if(!of(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Cq(h);
h.currentTarget=a;return c.call(a,h)};
g=al(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Gq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function Iq(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Gq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;var Jq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Kq(a){this.F=a;this.i=null;this.m=0;this.s=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.K=Hq(window,"mousemove",Ya(this.O,this));a=Ya(this.I,this);"function"===typeof a&&(a=al(a));this.P=window.setInterval(a,25)}
$a(Kq,J);Kq.prototype.O=function(a){void 0===a.h&&Dq(a);var b=a.h;void 0===a.i&&Dq(a);this.i=new kf(b,a.i)};
Kq.prototype.I=function(){if(this.i){var a=Jq();if(0!=this.m){var b=this.s,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.s=this.i;this.l=(this.l+1)%4}};
Kq.prototype.B=function(){window.clearInterval(this.P);Iq(this.K)};var Lq={};
function Mq(a){var b=void 0===a?{}:a;a=void 0===b.cd?!1:b.cd;b=void 0===b.Mc?!0:b.Mc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Nq();Hq(document,"keydown",Nq);Hq(document,"keyup",Nq);Hq(document,"mousedown",Nq);Hq(document,"mouseup",Nq);a?Hq(window,"touchmove",function(){Oq("touchmove",200)},{passive:!0}):(Hq(window,"resize",function(){Oq("resize",200)}),b&&Hq(window,"scroll",function(){Oq("scroll",200)}));
new Kq(function(){Oq("mouse",100)});
Hq(document,"touchstart",Nq,{passive:!0});Hq(document,"touchend",Nq,{passive:!0})}}
function Oq(a,b){Lq[a]||(Lq[a]=!0,ei.S(function(){Nq();Lq[a]=!1},b))}
function Nq(){null==B("_lact",window)&&Mq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Pq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Qq=y.ytPubsubPubsubInstance||new K,Rq=y.ytPubsubPubsubSubscribedKeys||{},Sq=y.ytPubsubPubsubTopicToKeys||{},Tq=y.ytPubsubPubsubIsSynchronous||{};function Uq(a,b){var c=Vq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Rq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Tq[a]?f():sl(f,0)}catch(g){bl(g)}},void 0);
Rq[d]=!0;Sq[a]||(Sq[a]=[]);Sq[a].push(d);return d}return 0}
function Wq(a){var b=Vq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete Rq[c]}))}
function Xq(a,b){var c=Vq();c&&c.publish.apply(c,arguments)}
function Yq(a){var b=Vq();if(b)if(b.clear(a),a)Zq(a);else for(var c in Sq)Zq(c)}
function Vq(){return y.ytPubsubPubsubInstance}
function Zq(a){Sq[a]&&(a=Sq[a],gb(a,function(b){Rq[b]&&delete Rq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Fa;K.prototype.publish=K.prototype.ra;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",Qq);z("ytPubsubPubsubTopicToKeys",Sq);z("ytPubsubPubsubIsSynchronous",Tq);z("ytPubsubPubsubSubscribedKeys",Rq);var $q=Symbol("injectionDeps");function ar(a){this.name=a}
ar.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function br(){this.key=cr}
function dr(){this.h=new Map;this.i=new Map}
dr.prototype.resolve=function(a){return a instanceof br?er(this,a.key,[],!0):er(this,a,[])};
function er(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.vc)var e=d.vc;else if(d.Ad)e=d[$q]?fr(a,d[$q],c):[],e=d.Ad.apply(d,ja(e));else if(d.uc){e=d.uc;var f=e[$q]?fr(a,e[$q],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Qr||a.i.set(b,e);return e}
function fr(a,b,c){return b?b.map(function(d){return d instanceof br?er(a,d.key,c,!0):er(a,d,c)}):[]}
;var gr;function hr(){gr||(gr=new dr);return gr}
;function ir(){this.store={};this.h={}}
ir.prototype.storePayload=function(a,b){a=jr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
ir.prototype.extractMatchingEntries=function(a){a=kr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
ir.prototype.getSequenceCount=function(a){a=kr(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function kr(a,b){var c=jr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&jr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(lr(b.auth,g[0])){var h=b.isJspb;lr(void 0===h?"undefined":h?"true":"false",g[1])&&lr(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function lr(a,b){return void 0===a||"undefined"===a?!0:a===b}
ir.prototype.getSequenceCount=ir.prototype.getSequenceCount;ir.prototype.extractMatchingEntries=ir.prototype.extractMatchingEntries;ir.prototype.storePayload=ir.prototype.storePayload;function jr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function mr(a,b){if(a)return a[b.name]}
;var nr=Tk("initial_gel_batch_timeout",2E3),or=Tk("gel_queue_timeout_max_ms",6E4),pr=Math.pow(2,16)-1,qr=void 0;function rr(){this.j=this.h=this.i=0}
var sr=new rr,tr=new rr,ur,vr=!0,wr=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",wr);var xr=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",xr);var yr=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",yr);var zr=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",zr);var Ar={};function Br(){var a=B("yt.logging.ims");a||(a=new ir,z("yt.logging.ims",a));return a}
function Cr(a,b){M("web_all_payloads_via_jspb")&&cl(new P("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Dr(a);var c=Er(a);if(M("use_new_in_memory_storage")){Ar[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Br().storePayload(d,a.payload);Fr(b,[],c,!1,d)}else d=wr.get(c)||[],wr.set(c,d),d.push(a.payload),Fr(b,d,c)}}
function Gr(a,b){if("log_event"===a.endpoint){Dr(void 0,a);var c=Er(a,!0);if(M("use_new_in_memory_storage")){Ar[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Br().storePayload(d,a.payload.toJSON());Fr(b,[],c,!0,d)}else d=xr.get(c)||[],xr.set(c,d),a=a.payload.toJSON(),d.push(a),Fr(b,d,c,!0)}}
function Fr(a,b,c,d,e){d=void 0===d?!1:d;a&&(qr=new a);a=Tk("tvhtml5_logging_max_batch_ads_fork")||Tk("tvhtml5_logging_max_batch")||Tk("web_logging_max_batch")||100;var f=R(),g=d?tr.j:sr.j;b=b.length;e&&(b=Br().getSequenceCount(e));b>=a?ur||(ur=Hr(function(){Ir({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d);ur=void 0},0)):10<=f-g&&(Jr(d),d?tr.j=f:sr.j=f)}
function Kr(a,b){M("web_all_payloads_via_jspb")&&cl(new P("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Dr(a);var c=Er(a),d=new Map;d.set(c,[a.payload]);b&&(qr=new b);return new Af(function(e,f){qr&&qr.isReady()?Lr(d,qr,e,f,{bypassNetworkless:!0},!0):e()})}}
function Mr(a,b){if("log_event"===a.endpoint){Dr(void 0,a);var c=Er(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(qr=new b);return new Af(function(e){qr&&qr.isReady()?Nr(d,qr,e,{bypassNetworkless:!0},!0):e()})}}
function Er(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new ik;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Vd(d,2,Dk,c.playlistId);zr[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),yr[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Ir(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&M("web_all_payloads_via_jspb")&&cl(new P("transport.flushLogs called for JSON in JSPB only experiment"));new Af(function(d,e){c?(Or(tr.i),Or(tr.h),tr.h=0):(Or(sr.i),Or(sr.h),sr.h=0);if(qr&&qr.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=qr;f=void 0===f?{}:f;g=void 0===g?!1:g;var l=new Map,m=new Map;if(void 0!==b)g?(e=Br().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,e),Nr(l,h,d,f)):(l=Br().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,l),Lr(m,h,d,e,f));else if(g){e=p(Object.keys(Ar));for(g=e.next();!g.done;g=e.next())m=g.value,g=Br().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&l.set(m,g),delete Ar[m];Nr(l,h,d,f)}else{l=p(Object.keys(Ar));for(g=l.next();!g.done;g=l.next()){g=g.value;var q=Br().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<q.length&&m.set(g,q);delete Ar[g]}Lr(m,h,d,e,f)}}else f=a,l=c,h=qr,f=void 0===f?{}:f,l=void 0===l?!1:l,void 0!==b?l?(e=new Map,l=xr.get(b)||[],e.set(b,
l),Nr(e,h,d,f),xr.delete(b)):(l=new Map,m=wr.get(b)||[],l.set(b,m),Lr(l,h,d,e,f),wr.delete(b)):l?(Nr(xr,h,d,f),xr.clear()):(Lr(wr,h,d,e,f),wr.clear());else Jr(c),d()})}
function Jr(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!sr.h||a&&!tr.h)){var b=Hr(function(){Ir({writeThenSend:!0},void 0,a)},or);
a?tr.h=b:sr.h=b}Or(a?tr.i:sr.i);b=L("LOGGING_BATCH_TIMEOUT",Tk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&vr&&(b=nr);b=Hr(function(){Ir({writeThenSend:!0},void 0,a)},b);
a?tr.i=b:sr.i=b}
function Lr(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(R()),h=a.size,l={};a=p(a);for(var m=a.next();!m.done;l={Sa:l.Sa,qa:l.qa,Da:l.Da,Ua:l.Ua,Ta:l.Ta},m=a.next()){var q=p(m.value);m=q.next().value;q=q.next().value;l.qa=wb({context:ro(b.config_||qo())});if(!Qa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}l.qa.events=q;(q=yr[m])&&Pr(l.qa,m,q);delete yr[m];l.Da="visitorOnlyApprovedKey"===m;Qr(l.qa,g,l.Da);Rr(e);l.Ua=function(r){M("update_log_event_config")&&ei.S(function(){return x(function(w){return v(w,
Sr(r),0)})});
h--;h||c()};
l.Sa=0;l.Ta=function(r){return function(){r.Sa++;if(e.bypassNetworkless&&1===r.Sa)try{Go(b,"log_event",r.qa,Tr({writeThenSend:!0},r.Da,r.Ua,r.Ta,f)),vr=!1}catch(w){bl(w),d()}h--;h||c()}}(l);
try{Go(b,"log_event",l.qa,Tr(e,l.Da,l.Ua,l.Ta,f)),vr=!1}catch(r){bl(r),d()}}}
function Nr(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(R()),g=a.size,h=new Map([].concat(ja(a)));h=p(h);for(var l=h.next();!l.done;l=h.next()){var m=p(l.value).next().value,q=a.get(m);l=new Ek;var r=yo(b.config_||qo());G(l,kj,1,r);q=q?Ur(q):[];q=p(q);for(r=q.next();!r.done;r=q.next())ce(l,3,ek,r.value);(q=zr[m])&&Vr(l,m,q);delete zr[m];m="visitorOnlyApprovedKey"===m;Wr(l,f,m);Rr(d);l=ke(l);m=Tr(d,m,function(w){M("update_log_event_config")&&ei.S(function(){return x(function(t){return v(t,Sr(w),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=l;Go(b,"log_event","",m);vr=!1}}
function Rr(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function Tr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,fc:a,dangerousLogToVisitorSession:b,wr:!!e,headers:{},postBodyFormat:"",postBody:""};Xr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));return a}
function Qr(a,b,c){Xr()||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=Yr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Wr(a,b,c){Xr()||D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=Yr();var d=new hk;D(d,1,b);D(d,2,c);G(a,hk,5,d)}}
function Yr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*pr/2));a++;a>pr&&(a=1);Qk("BATCH_CLIENT_COUNTER",a);return a}
function Pr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Vr(a,b,c){if(de(c,1===Wd(c,Dk)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,ik,4,c);a=Xd(a,kj,1)||new kj;c=Xd(a,ij,3)||new ij;var e=new hj;D(e,2,b);D(e,1,d);ce(c,12,hj,e);G(a,ij,3,c)}
function Ur(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new ek(a[c]))}catch(d){bl(new P("Transport failed to deserialize "+String(a[c])))}return b}
function Dr(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function Xr(){return M("use_request_time_ms_header")||M("lr_use_request_time_ms_header")}
function Hr(a,b){return M("transport_use_scheduler")?mm(a,b):sl(a,b)}
function Or(a){M("transport_use_scheduler")?ei.da(a):window.clearTimeout(a)}
function Sr(a){var b,c,d,e,f,g,h,l,m,q;return x(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=mr(d,Ui),g=null==(f=d)?void 0:f.hotHashData,h=mr(d,Ti),m=null==(l=d)?void 0:l.coldHashData,q=hr().resolve(mo),g?e?v(r,no(q,g,e),2):v(r,no(q,g),2):r.u(2)):m?h?v(r,oo(q,m,h),0):v(r,oo(q,m),0):r.u(0)})}
;var Zr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Zr);
function $r(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;M("enable_unknown_lact_fix_on_html5")&&Mq();a=Pq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:as(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Zr[d.sequenceGroup]);(d.sendIsolatedPayload?Kr:Cr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function bs(a){Ir(void 0,void 0,void 0===a?!1:a)}
function as(a){Zr[a]=a in Zr?Zr[a]+1:0;return Zr[a]}
;var cs=[];function Dm(a,b,c){c=void 0===c?{}:c;var d=yq;L("ytLoggingEventsDefaultDisabled",!1)&&yq===yq&&(d=null);M("web_all_payloads_via_jspb")?cs.push({Eb:a,payload:b,options:c}):$r(a,b,d,c)}
;var ds=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",ds);
function es(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||R());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Pq();d=new dk;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=as(e),g=new ck;D(g,2,f);D(g,1,e);G(d,ck,3,g);c.endOfSequence&&delete ds[c.sequenceGroup]}G(a,dk,33,d);(c.sendIsolatedPayload?Mr:Gr)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function fs(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);es(a,c?null:yq,b)}
;function gs(a,b,c){var d=new ek;ae(d,Tj,72,fk,a);c?es(d,c,b):fs(d,b)}
function hs(a,b,c){var d=new ek;ae(d,Sj,73,fk,a);c?es(d,c,b):fs(d,b)}
function is(a,b,c){var d=new ek;ae(d,Rj,78,fk,a);c?es(d,c,b):fs(d,b)}
function js(a,b,c){var d=new ek;ae(d,Uj,208,fk,a);c?es(d,c,b):fs(d,b)}
function ks(a,b,c){var d=new ek;ae(d,Kj,156,fk,a);c?es(d,c,b):fs(d,b)}
function ls(a,b,c){var d=new ek;ae(d,Oj,215,fk,a);c?es(d,c,b):fs(d,b)}
;var ms=new Set,ns=0,os=0,ps=0,qs=[],rs=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Cm(a){ss(a)}
function ts(a){ss(a,"WARNING")}
function ss(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var l=[];l.push("Name: "+a.name);l.push("Message: "+a.message);a.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(a.args));
l.push("File name: "+a.fileName);l.push("Stacktrace: "+a.stack);window.console.log(l.join("\n"),a)}if(!(5<=ns)){var m=qs,q=xe(a),r=q.message||"Unknown Error",w=q.name||"UnknownError",t=q.stack||a.i||"Not available";if(t.startsWith(w+": "+r)){var A=t.split("\n");A.shift();t=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",O=t,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var Q=0;Q<a.args.length&&!(N=Rl(a.args[Q],"params."+Q,g,N),500<=N);Q++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var U in ca){if(ca[U]){var rb="params."+U,Wa=Tl(ca[U]);g[rb]=Wa;N+=rb.length+Wa.length;if(500<N)break}}else g.params=Tl(ca)}if(m.length)for(var oa=0;oa<m.length&&!(N=Rl(m[oa],"params.context."+oa,g,N),500<=N);oa++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var I={message:r,name:w,lineNumber:E,fileName:F,stack:O,params:g,sampleWeight:1},ma=Number(a.columnNumber);isNaN(ma)||(I.lineNumber=I.lineNumber+
":"+ma);if("IGNORED"===a.level)var ea=0;else a:{for(var Ge=Nl(),He=p(Ge.ma),sd=He.next();!sd.done;sd=He.next()){var ra=sd.value;if(I.message&&I.message.match(ra.Hr)){ea=ra.weight;break a}}for(var zp=p(Ge.ka),jk=zp.next();!jk.done;jk=zp.next()){var Ap=jk.value;if(Ap.callback(I)){ea=Ap.weight;break a}}ea=1}I.sampleWeight=ea;for(var Bp=p(Il),kk=Bp.next();!kk.done;kk=Bp.next()){var lk=kk.value;if(lk.jb[I.name])for(var Cp=p(lk.jb[I.name]),mk=Cp.next();!mk.done;mk=Cp.next()){var Dp=mk.value,Wg=I.message.match(Dp.regexp);
if(Wg){I.params["params.error.original"]=Wg[0];for(var nk=Dp.groups,Ep={},td=0;td<nk.length;td++)Ep[nk[td]]=Wg[td+1],I.params["params.error."+nk[td]]=Wg[td+1];I.message=lk.Bb(Ep);break}}}I.params||(I.params={});var Fp=Nl();I.params["params.errorServiceSignature"]="msg="+Fp.ma.length+"&cb="+Fp.ka.length;I.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(I.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(I.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(I);if(0!==I.sampleWeight&&!ms.has(I.message)){if("ERROR"===h){Ol.ra("handleError",I);if(M("record_app_crashed_web")&&0===ps&&1===I.sampleWeight)if(ps++,M("errors_via_jspb")){var ok=new Dj;D(ok,1,1);if(!M("report_client_error_with_app_crash_ks")){var Gp=new yj;D(Gp,1,I.message);var Hp=new zj;G(Hp,yj,3,Gp);var Ip=new Aj;G(Ip,zj,5,Hp);var Jp=new Bj;G(Jp,Aj,9,Ip);G(ok,Bj,4,Jp)}var Kp=new ek;ae(Kp,Dj,20,
fk,ok);fs(Kp)}else{var Lp={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Lp.systemHealth={crashData:{clientError:{logMessage:{message:I.message}}}});Dm("appCrashed",Lp)}os++}else"WARNING"===h&&Ol.ra("handleWarning",I);if(M("kevlar_gel_error_routing"))a:{var Ie=h;if(M("errors_via_jspb")){if(us())var Np=void 0;else{var ud=new vj;D(ud,1,I.stack);I.fileName&&D(ud,4,I.fileName);var Ib=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Ib.length&&(1!==
Ib.length||isNaN(Number(Ib[0]))?2!==Ib.length||isNaN(Number(Ib[0]))||isNaN(Number(Ib[1]))||(D(ud,2,Number(Ib[0])),D(ud,3,Number(Ib[1]))):D(ud,2,Number(Ib[0])));var yc=new yj;D(yc,1,I.message);D(yc,3,I.name);D(yc,6,I.sampleWeight);"ERROR"===Ie?D(yc,2,2):"WARNING"===Ie?D(yc,2,1):D(yc,2,0);var pk=new wj;D(pk,1,!0);ae(pk,vj,3,xj,ud);var Zb=new sj;D(Zb,3,window.location.href);for(var Op=L("FEXP_EXPERIMENTS",[]),qk=0;qk<Op.length;qk++){var nw=Op[qk];Fd(Zb);Ud(Zb,5,2,!1,!1).push(nw)}var rk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Rk()&&rk)for(var Pp=p(Object.keys(rk)),zc=Pp.next();!zc.done;zc=Pp.next()){var Qp=zc.value,sk=new uj;D(sk,1,Qp);D(sk,2,String(rk[Qp]));ce(Zb,4,uj,sk)}var tk=I.params;if(tk){var Rp=p(Object.keys(tk));for(zc=Rp.next();!zc.done;zc=Rp.next()){var Sp=zc.value,uk=new uj;D(uk,1,"client."+Sp);D(uk,2,String(tk[Sp]));ce(Zb,4,uj,uk)}}var Tp=L("SERVER_NAME"),Up=L("SERVER_VERSION");if(Tp&&Up){var vk=new uj;D(vk,1,"server.name");D(vk,2,Tp);ce(Zb,4,uj,vk);var wk=new uj;D(wk,1,"server.version");D(wk,2,Up);ce(Zb,
4,uj,wk)}var Xg=new zj;G(Xg,sj,1,Zb);G(Xg,wj,2,pk);G(Xg,yj,3,yc);Np=Xg}var Vp=Np;if(!Vp)break a;var Wp=new ek;ae(Wp,zj,163,fk,Vp);fs(Wp)}else{if(us())var Xp=void 0;else{var Je={stackTrace:I.stack};I.fileName&&(Je.filename=I.fileName);var Jb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Jb.length&&(1!==Jb.length||isNaN(Number(Jb[0]))?2!==Jb.length||isNaN(Number(Jb[0]))||isNaN(Number(Jb[1]))||(Je.lineNumber=Number(Jb[0]),Je.columnNumber=Number(Jb[1])):Je.lineNumber=Number(Jb[0]));
var xk={level:"ERROR_LEVEL_UNKNOWN",message:I.message,errorClassName:I.name,sampleWeight:I.sampleWeight};"ERROR"===Ie?xk.level="ERROR_LEVEL_ERROR":"WARNING"===Ie&&(xk.level="ERROR_LEVEL_WARNNING");var ow={isObfuscated:!0,browserStackInfo:Je},vd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(vd.experimentIds=L("FEXP_EXPERIMENTS"));var yk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rk()&&yk)for(var Yp=p(Object.keys(yk)),Ac=Yp.next();!Ac.done;Ac=Yp.next()){var Zp=Ac.value;vd.kvPairs.push({key:Zp,
value:String(yk[Zp])})}var zk=I.params;if(zk){var $p=p(Object.keys(zk));for(Ac=$p.next();!Ac.done;Ac=$p.next()){var aq=Ac.value;vd.kvPairs.push({key:"client."+aq,value:String(zk[aq])})}}var bq=L("SERVER_NAME"),cq=L("SERVER_VERSION");bq&&cq&&(vd.kvPairs.push({key:"server.name",value:bq}),vd.kvPairs.push({key:"server.version",value:cq}));Xp={errorMetadata:vd,stackTrace:ow,logMessage:xk}}var dq=Xp;if(!dq)break a;Dm("clientError",dq)}if("ERROR"===Ie||M("errors_flush_gel_always_killswitch"))b:{if(M("web_fp_via_jspb")&&
(bs(!0),!M("web_fp_via_jspb_and_json")))break b;bs()}}if(!M("suppress_error_204_logging")){var Ke=I.params||{},$b={urlParams:{a:"logerror",t:"jserror",type:I.name,msg:I.message.substr(0,250),line:I.lineNumber,level:h,"client.name":Ke.name},postParams:{url:L("PAGE_NAME",window.location.href),file:I.fileName},method:"POST"};Ke.version&&($b["client.version"]=Ke.version);if($b.postParams){I.stack&&($b.postParams.stack=I.stack);for(var eq=p(Object.keys(Ke)),Ak=eq.next();!Ak.done;Ak=eq.next()){var fq=Ak.value;
$b.postParams["client."+fq]=Ke[fq]}var Bk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Bk)for(var gq=p(Object.keys(Bk)),Ck=gq.next();!Ck.done;Ck=gq.next()){var hq=Ck.value;$b.postParams[hq]=Bk[hq]}var iq=L("SERVER_NAME"),jq=L("SERVER_VERSION");iq&&jq&&($b.postParams["server.name"]=iq,$b.postParams["server.version"]=jq)}yl(L("ECATCHER_REPORT_HOST","")+"/error_204",$b)}try{ms.add(I.message)}catch(Qx){}ns++}}}}
function us(){for(var a=p(rs),b=a.next();!b.done;b=a.next())if(Hl(b.value.toLowerCase()))return!0;return!1}
function vs(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function ws(){this.register=new Map}
function xs(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Lr("ABORTED")}
ws.prototype.clear=function(){xs(this);this.register.clear()};
var ys=new ws;var zs=Date.now().toString();
function As(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(zs)for(a=1,b=0;b<zs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^zs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Bs=y.ytLoggingDocDocumentNonce_;Bs||(Bs=As(),z("ytLoggingDocDocumentNonce_",Bs));var Cs=Bs;var Ds={di:0,xe:1,He:2,dm:3,gi:4,Hq:5,Tm:6,Lo:7,ao:8,zo:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Es(a){this.G=a}
function Fs(a){return new Es({trackingParams:a})}
Es.prototype.getAsJson=function(){var a={};void 0!==this.G.trackingParams?a.trackingParams=this.G.trackingParams:(a.veType=this.G.veType,void 0!==this.G.veCounter&&(a.veCounter=this.G.veCounter),void 0!==this.G.elementIndex&&(a.elementIndex=this.G.elementIndex));void 0!==this.G.dataElement&&(a.dataElement=this.G.dataElement.getAsJson());void 0!==this.G.youtubeData&&(a.youtubeData=this.G.youtubeData);return a};
Es.prototype.getAsJspb=function(){var a=new Fj;if(void 0!==this.G.trackingParams){var b=this.G.trackingParams;if(null!=b)if("string"===typeof b)b=b?new kd(b,hd):ld();else if(b.constructor!==kd)if(gd(b))b=b.length?new kd(new Uint8Array(b),hd):ld();else throw Error();D(a,1,b)}else void 0!==this.G.veType&&D(a,2,this.G.veType),void 0!==this.G.veCounter&&D(a,6,this.G.veCounter),void 0!==this.G.elementIndex&&D(a,3,this.G.elementIndex);void 0!==this.G.dataElement&&(b=this.G.dataElement.getAsJspb(),G(a,Fj,
7,b));void 0!==this.G.youtubeData&&G(a,Vi,8,this.G.jspbYoutubeData);return a};
Es.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Es.prototype.isClientVe=function(){return!this.G.trackingParams&&!!this.G.veType};function Gs(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Hs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Is(a){return L(Hs(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",Is);function Js(a){return(a=Is(void 0===a?0:a))?new Es({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Ks(){var a=L("csn-to-ctt-auth-info");a||(a={},Qk("csn-to-ctt-auth-info",a));return a}
function Ls(a){a=L(Gs(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",Ls);function Ms(a,b,c){var d=Ks();(c=Ls(c))&&delete d[c];b&&(d[a]=b)}
function Ns(a){return Ks()[a]}
z("yt_logging_screen.getCttAuthInfo",Ns);function Os(a,b,c,d){c=void 0===c?0:c;if(a!==L(Gs(c))||b!==L(Hs(c)))if(Ms(a,d,c),Qk(Gs(c),a),Qk(Hs(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new Gj;D(e,1,Cs);D(e,2,a);var f=new ek;ae(f,Gj,111,fk,e);fs(f)}else Dm("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Cs,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",Os);var Ps=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Ps);function Qs(a){Lk(Ps,arguments)}
;var Rs={we:3611,Bd:27686,Cd:85013,Dd:23462,Fd:157557,Gd:42016,Hd:62407,Id:26926,Ed:43781,Jd:51236,Kd:79148,Ld:50160,Md:77504,Yd:153587,Zd:87907,ae:18630,be:54445,ce:80935,de:152172,ee:105675,ge:150723,he:37521,ie:147285,je:47786,ke:98349,le:168271,me:168954,ne:168277,oe:168273,pe:168270,qe:123695,re:6827,se:29434,te:7282,ue:124448,ze:32276,ye:76278,Ae:147868,Be:147869,Ce:93911,De:106531,Ee:27259,Fe:27262,Ge:27263,Ie:21759,Je:27107,Ke:62936,Le:160866,Me:49568,Ne:160789,Oe:38408,Pe:80637,Qe:68727,Re:68728,
Se:80353,Te:80356,Ue:74610,Ve:45707,We:83962,Xe:83970,Ye:46713,Ze:89711,af:74612,bf:155792,cf:93265,df:74611,ef:131380,gf:128979,hf:139311,jf:128978,ff:131391,kf:105350,mf:139312,nf:134800,lf:131392,qf:113533,rf:93252,sf:99357,uf:94521,vf:114252,wf:113532,xf:94522,tf:94583,yf:88E3,zf:139580,Af:93253,Bf:93254,Cf:94387,Df:94388,Ef:93255,Ff:97424,pf:72502,Gf:110111,Hf:76019,Jf:117092,Kf:117093,If:89431,Lf:110466,Mf:77240,Nf:60508,Of:148123,Pf:148124,Qf:137401,Rf:137402,Sf:137046,Tf:73393,Uf:113534,Vf:92098,
Wf:131381,Xf:84517,Yf:83759,Zf:162711,ag:162712,cg:80357,dg:86113,eg:72598,fg:168413,gg:72733,hg:107349,ig:124275,jg:118203,kg:133275,lg:160157,mg:152569,ng:156651,og:133274,pg:160159,qg:160158,rg:133272,sg:133273,tg:133276,ug:144507,vg:143247,wg:156652,xg:143248,yg:143249,zg:143250,Ag:143251,Bg:156653,Cg:144401,Eg:117431,Dg:133797,Fg:153964,Gg:128572,Hg:133405,Ig:117429,Jg:117430,Kg:117432,Lg:120080,Mg:117259,Ng:156655,Og:156654,Pg:121692,Qg:145656,Rg:156656,Sg:145655,Tg:145653,Ug:145654,Vg:145657,
Wg:132972,Xg:133051,Yg:133658,Zg:132971,ah:97615,dh:143359,bh:143356,fh:143361,eh:143358,hh:143360,gh:143357,ih:142303,jh:143353,kh:143354,lh:144479,mh:143355,nh:31402,ph:133624,qh:146477,rh:133623,sh:133622,oh:133621,th:84774,vh:160801,uh:95117,wh:150497,xh:98930,yh:98931,zh:98932,Ah:153320,Bh:153321,Ch:43347,Dh:129889,Eh:149123,Fh:45474,Gh:100352,Hh:84758,Ih:98443,Jh:117985,Kh:74613,Lh:155911,Mh:74614,Nh:64502,Oh:136032,Ph:74615,Qh:74616,Rh:122224,Sh:74617,Th:77820,Uh:74618,Vh:93278,Wh:93274,Xh:93275,
Yh:93276,Zh:22110,ai:29433,bi:133798,ci:132295,fi:120541,hi:82047,ii:113550,ji:75836,ki:75837,li:42352,mi:84512,ni:76065,oi:75989,wi:51879,xi:16623,yi:32594,zi:27240,Ai:32633,Bi:74858,Ci:156999,Ei:3945,Di:16989,Fi:45520,Gi:25488,Hi:25492,Ii:25494,Ji:55760,Ki:14057,Li:18451,Mi:57204,Ni:57203,Oi:17897,Pi:57205,Qi:18198,Ri:17898,Si:17909,Ti:43980,Ui:46220,Vi:11721,Wi:147994,Xi:49954,Yi:96369,Zi:3854,aj:151633,bj:56251,cj:159108,dj:25624,ej:152036,vj:16906,wj:99999,xj:68172,yj:27068,zj:47973,Aj:72773,
Bj:26970,Cj:26971,Dj:96805,Ej:17752,Fj:73233,Gj:109512,Hj:22256,Ij:14115,Jj:22696,Kj:89278,Lj:89277,Mj:109513,Nj:43278,Oj:43459,Pj:43464,Qj:89279,Rj:43717,Sj:55764,Tj:22255,Uj:147912,Vj:89281,Wj:40963,Xj:43277,Yj:167701,Zj:43442,ak:91824,bk:120137,ck:96367,dk:36850,ek:72694,fk:37414,gk:36851,ik:124863,hk:121343,jk:73491,kk:54473,lk:166861,mk:43375,nk:46674,pk:143815,qk:139095,rk:144402,sk:149968,tk:149969,uk:32473,vk:72901,wk:72906,xk:50947,yk:50612,zk:50613,Ak:50942,Bk:84938,Ck:84943,Dk:84939,Ek:84941,
Fk:84944,Gk:84940,Hk:84942,Ik:35585,Jk:51926,Kk:79983,Lk:63238,Mk:18921,Nk:63241,Ok:57893,Pk:41182,Qk:135732,Rk:33424,Sk:22207,Tk:42993,Uk:36229,Vk:22206,Wk:22205,Xk:18993,Yk:19001,Zk:18990,al:18991,bl:18997,dl:18725,fl:19003,il:36874,jl:44763,kl:33427,ll:67793,ml:22182,nl:37091,ol:34650,pl:50617,ql:47261,rl:22287,sl:25144,ul:97917,vl:62397,wl:150871,xl:150874,yl:125598,zl:137935,Al:36961,Bl:108035,Cl:27426,Dl:27857,El:27846,Fl:27854,Gl:69692,Hl:61411,Il:39299,Jl:38696,Kl:62520,Ll:36382,Ml:108701,
Nl:50663,Ol:36387,Pl:14908,Ql:37533,Rl:105443,Sl:61635,Tl:62274,Ul:161670,Vl:133818,Wl:65702,Xl:65703,Yl:65701,Zl:76256,am:166382,bm:37671,cm:49953,em:36216,fm:28237,gm:39553,hm:29222,im:26107,jm:38050,km:26108,mm:120745,lm:26109,nm:26110,om:66881,pm:28236,qm:14586,rm:160598,sm:57929,tm:74723,um:44098,vm:44099,ym:23528,zm:61699,wm:134104,xm:134103,Am:59149,Bm:101951,Cm:97346,Dm:118051,Em:95102,Fm:64882,Gm:119505,Hm:63595,Im:63349,Jm:95101,Km:75240,Lm:27039,Mm:68823,Nm:21537,Om:83464,Pm:75707,Qm:83113,
Rm:101952,Sm:101953,Um:79610,Vm:125755,Wm:24402,Xm:24400,Ym:32925,an:57173,Zm:156421,bn:122502,cn:145268,dn:138480,en:64423,fn:64424,gn:33986,hn:100828,jn:129089,kn:21409,pn:135155,qn:135156,rn:135157,sn:135158,tn:158225,un:135159,vn:135160,wn:167651,xn:135161,zn:135162,An:135163,yn:158226,Bn:158227,Cn:135164,Dn:135165,En:135166,ln:11070,mn:11074,nn:17880,Fn:14001,Hn:30709,In:30707,Jn:30711,Kn:30710,Ln:30708,Gn:26984,Mn:146143,Nn:63648,On:63649,Pn:111059,Qn:5754,Rn:20445,Sn:151308,Tn:151152,Wn:130975,
Vn:130976,Un:167637,Xn:110386,Yn:113746,Zn:66557,bo:17310,co:28631,eo:21589,fo:164817,ho:168011,jo:154946,ko:68012,lo:162617,mo:60480,no:138664,oo:141121,po:164502,qo:31571,ro:141978,so:150105,to:150106,uo:150107,vo:150108,wo:76980,xo:41577,yo:45469,Ao:38669,Bo:13768,Co:13777,Do:141842,Eo:62985,Fo:4724,Go:59369,Ho:43927,Io:43928,Jo:12924,Ko:100355,No:56219,Oo:27669,Po:10337,Mo:47896,Qo:122629,So:139723,Ro:139722,To:121258,Uo:107598,Vo:127991,Wo:96639,Xo:107536,Yo:130169,Zo:96661,ap:145188,bp:96658,
cp:116646,ep:159428,fp:121122,gp:96660,hp:127738,ip:127083,jp:155281,kp:162959,lp:163566,mp:147842,np:104443,qp:96659,rp:147595,sp:106442,tp:162776,up:134840,vp:63667,wp:63668,xp:63669,yp:130686,zp:147036,Ap:78314,Bp:147799,Cp:148649,Dp:55761,Ep:127098,Fp:134841,Gp:96368,Hp:67374,Ip:48992,Jp:146176,Kp:49956,Lp:31961,Mp:26388,Np:23811,Op:5E4,Pp:126250,Qp:96370,Rp:47355,Sp:47356,Tp:37935,Up:45521,Vp:21760,Wp:83769,Xp:49977,Yp:49974,Zp:93497,aq:93498,bq:34325,cq:140759,fq:115803,gq:123707,hq:100081,
iq:35309,jq:68314,kq:25602,lq:100339,mq:143516,nq:59018,oq:18248,pq:50625,qq:9729,rq:37168,sq:37169,tq:21667,uq:16749,wq:18635,xq:39305,yq:18046,zq:53969,Aq:8213,Bq:93926,Cq:102852,Dq:110099,Eq:22678,Fq:69076,Gq:137575,Iq:139224,Jq:100856,Kq:154430,Lq:17736,Mq:3832,Nq:147111,Oq:55759,Pq:64031,Vq:93044,Wq:93045,Yq:34388,Xq:167841,Zq:17657,br:17655,dr:39579,er:39578,fr:77448,gr:8196,hr:11357,ir:69877,jr:8197,kr:168501,lr:156512,mr:161613,pr:156509,qr:161612,rr:161614,sr:82039};function Ss(){var a=vb(Ts),b;return(new Af(function(c,d){a.onSuccess=function(e){rl(e)?c(new Us(e)):d(new Vs("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Vs("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Vs("Request timed out","net.timeout",e))};
b=yl("//googleads.g.doubleclick.net/pagead/id",a)})).pb(function(c){c instanceof Hf&&b.abort();
return Ff(c)})}
function Vs(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
u(Vs,bb);function Us(a){this.xhr=a}
;function Ws(){this.h=0;this.aa=null}
Ws.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.aa))&&"function"===typeof a.then?a:Xs(a):2===this.h&&b?(a=b.call(c,this.aa))&&"function"===typeof a.then?a:Ys(a):this};
Ws.prototype.getValue=function(){return this.aa};
Ws.prototype.$goog_Thenable=!0;function Ys(a){var b=new Ws;a=void 0===a?null:a;b.h=2;b.aa=void 0===a?null:a;return b}
function Xs(a){var b=new Ws;a=void 0===a?null:a;b.h=1;b.aa=void 0===a?null:a;return b}
;function Zs(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:ml(a)?"same-origin":"cors",credentials:ml(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function $s(){return vg()||Gl&&Hl("applewebkit")&&!Hl("version")&&(!Hl("safari")||Hl("gsa/"))||Nc&&Hl("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function at(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in pj)if(pj[c]==b.embeddedPlayerMode){b=pj[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function bt(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ct;this.isTimeout=a instanceof Vs&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Hf}
u(bt,bb);bt.prototype.name="BiscottiError";function ct(){bb.call(this,"Biscotti ID is missing from server")}
u(ct,bb);ct.prototype.name="BiscottiMissingError";var Ts={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},dt=null;function et(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!$s())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(at(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Xk(){var a=et();if(void 0!==a)return Ff(a);dt||(dt=Ss().then(ft).pb(function(b){return gt(2,b)}));
return dt}
function ft(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ct;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ct;a=a.id;Yk(a);dt=Xs(a);ht(18E5,2);return a}
function gt(a,b){b=new bt(b);Yk("");dt=Ys(b);0<a&&ht(12E4,a-1);throw b;}
function ht(a,b){sl(function(){Ss().then(ft,function(c){return gt(b,c)}).pb(db)},a)}
function jt(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Xk()}catch(b){return Ff(b)}}
;function kt(a){if("1"!=tb(L("PLAYER_VARS",{}))){a&&Wk();try{jt().then(function(){},function(){}),sl(kt,18E5)}catch(b){bl(b)}}}
;function lt(){var a=$l.getInstance(),b=cm(119),c=1<window.devicePixelRatio;if(document.body&&oi(document.body,"exp-invert-logo"))if(c&&!oi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!oi(d,"inverted-hdpi")){var e=mi(d);ni(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&oi(document.body,"inverted-hdpi")&&pi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=dm(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Zl[b]:(c=d.toString(16),Zl[b]=
c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Zl)d.push(f+"="+encodeURIComponent(String(Zl[f])));Wl(b,d.join("&"),63072E3,a.i,c)}}
;function mt(){this.ud=!0}
function nt(a){var b={},c=xg([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Pk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var ot={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var pt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function qt(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=kl(a).theme;return pt.get(b)||null}catch(c){}return null}
;function rt(){this.h={};if(this.i=Yl()){var a=tg.get("CONSISTENCY",void 0);a&&st(this,{encryptedTokenJarContents:a})}}
rt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ga.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];st(this,a)}};
function st(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Wl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var tt=window.location.hostname.split(".").slice(-2).join(".");function ut(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.h=vt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var wt;ut.getInstance=function(){wt=B("yt.clientLocationService.instance");wt||(wt=new ut,z("yt.clientLocationService.instance",wt));return wt};
k=ut.prototype;k.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
k.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.h=vt(this))&&this.h.set("yt-location-playability-token",a,15552E3):Wl("YT_CL",JSON.stringify({loctok:a}),15552E3,tt,!0))};
function vt(a){return void 0===a.h?new um("yt-client-location"):a.h}
k.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=vt(this))&&this.h.remove("yt-location-playability-token"):Xl("YT_CL")};
k.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
k.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function xt(a,b){var c,d=null==(c=mr(a,oj))?void 0:c.signal;if(d&&b.Oa&&(c=b.Oa[d]))return c();var e;if((c=null==(e=mr(a,mj))?void 0:e.request)&&b.Jc&&(e=b.Jc[c]))return e();for(var f in a)if(b.Tb[f]&&(a=b.Tb[f]))return a()}
;function zt(a){return function(){return new a}}
;var At={},Bt=(At.WEB_UNPLUGGED="^unplugged/",At.WEB_UNPLUGGED_ONBOARDING="^unplugged/",At.WEB_UNPLUGGED_OPS="^unplugged/",At.WEB_UNPLUGGED_PUBLIC="^unplugged/",At.WEB_CREATOR="^creator/",At.WEB_KIDS="^kids/",At.WEB_EXPERIMENTS="^experiments/",At.WEB_MUSIC="^music/",At.WEB_REMIX="^music/",At.WEB_MUSIC_EMBEDDED_PLAYER="^music/",At.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",At);
function Ct(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Bt[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Bt).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Dt(){}
Dt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?ot:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=wb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var l=void 0===l?!1:l;$l.getInstance();var m="USER_INTERFACE_THEME_LIGHT";cm(165)?m="USER_INTERFACE_THEME_DARK":cm(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");l=l?m:qt()||m;h.userInterfaceTheme=l;if(!f){if(l=
jm())h.connectionType=l;M("web_log_effective_connection_type")&&(l=km())&&(g.client.effectiveConnectionType=l)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=kl(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
Ul.h&&(r=Ul.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Vl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(rb){}w=void 0}w&&(h.timeZone=w)}(w=Uk())?h.experimentsToken=w:delete h.experimentsToken;w=Vk();rt.h||(rt.h=new rt);h=rt.h.h;r=[];q=0;for(var t in h)r[q++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(t=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=t);w=$l.getInstance();t=cm(58);w=w.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);w&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Ls())&&(g.clientScreenNonce=f):!f&&(f=Ls())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;ut.getInstance().setLocationOnInnerTubeContext(g);try{var A=nl(),E=A.bid;delete A.bid;g.adSignalsInfo={params:[],bid:E};var F=
p(Object.entries(A));for(var O=F.next();!O.done;O=F.next()){var N=p(O.value),Q=N.next().value,ca=N.next().value;A=Q;E=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(rb){ss(rb)}F=g}else ss(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(O=this.h(a)){this.i(F,O,b);var U;b="/youtubei/v1/"+Ct(this.j());(O=null==(U=mr(a.commandMetadata,nj))?void 0:U.apiUrl)&&(b=O);U=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&(U=String(b)+String(pc(U)));b=
{};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");U=ll(U,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:U,wa:Zs(U),ga:F,config:a};a.config.Za?a.config.Za.identity=c:a.config.Za={identity:c};return a}ss(new P("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Dt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Et(){}
u(Et,Dt);Et.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",wa:Zs("/getDatasyncIdsEndpoint","GET"),ga:{}}};
Et.prototype.j=function(){return[]};
Et.prototype.h=function(){};
Et.prototype.i=function(){};var Ft={},Gt=(Ft.GET_DATASYNC_IDS=zt(Et),Ft);function Ht(a){var b=Ka.apply(1,arguments);if(!It(a)||b.some(function(d){return!It(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())Jt(a,c.value);return a}
function Jt(a,b){for(var c in b)if(It(b[c])){if(c in a&&!It(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Jt(a[c],b[c])}else if(Kt(b[c])){if(c in a&&!Kt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Lt(a[c],b[c])}else a[c]=b[c];return a}
function Lt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,It(c)?a.push(Jt({},c)):Kt(c)?a.push(Lt([],c)):a.push(c);return a}
function It(a){return"object"===typeof a&&!Array.isArray(a)}
function Kt(a){return"object"===typeof a&&Array.isArray(a)}
;function Mt(a,b){Qo.call(this,1,arguments);this.timer=b}
u(Mt,Qo);var Nt=new Ro("aft-recorded",Mt);var Ot=window;function Pt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=Ot.performance||Ot.mozPerformance||Ot.msPerformance||Ot.webkitPerformance||new Pt;var Qt=!1,Rt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ya(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||db,S);function St(a){var b=Tt("aft",a);if(b)return b;b=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Tt(b[d],a);if(e)return e}return NaN}
function Ut(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Vt(e.requestStart),e.responseEnd=Vt(e.responseEnd),e.redirectStart=Vt(e.redirectStart),e.redirectEnd=Vt(e.redirectEnd),e.domainLookupEnd=Vt(e.domainLookupEnd),e.connectStart=Vt(e.connectStart),e.connectEnd=
Vt(e.connectEnd),e.responseStart=Vt(e.responseStart),e.secureConnectionStart=Vt(e.secureConnectionStart),e.domainLookupStart=Vt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function Wt(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function Vt(a){return Math.round(Wt()+a)}
function Xt(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Yt(a){a=Xt(a);a.info||(a.info={});return a.info}
function Zt(a){a=Xt(a);a.metadata||(a.metadata={});return a.metadata}
function $t(a){a=Xt(a);a.tick||(a.tick={});return a.tick}
function Tt(a,b){if(a=$t(b)[a])return"number"===typeof a?a:a[a.length-1]}
function au(a){a=Xt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function bu(a){a=au(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function cu(a){var b=Xt(a).nonce;b||(b=As(),Xt(a).nonce=b);return b}
function du(a){var b=Tt("_start",a),c=St(a);b&&c&&!Qt&&(Wo(Nt,new Mt(Math.round(c-b),a)),Qt=!0)}
function eu(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!eu(a[d],b[d]))return!1;return!0}
;function fu(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return Vt(a.startTime)}a=S.timing;
return a.Yc?Math.max(0,a.Yc):0}
;function gu(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function hu(a){a=a||"";var b=B("ytcsi.reference");b||(gu(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=gu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},iu=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",T["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",T["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",T["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",T["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",T["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
T["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",T["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",T["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",T["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]=
"LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state=
"LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),V={},ju=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an=
"adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",
V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",
V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",
V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),ku="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),lu={},mu=(lu.ccs="CANARY_STATE_",
lu.mver="MEASUREMENT_VERSION_",lu.pis="PLAYER_INITIALIZED_STATE_",lu.yt_pt="LATENCY_PLAYER_",lu.pa="LATENCY_ACTION_",lu.ctop="TOP_ENTITY_TYPE_",lu.yt_vst="VIDEO_STREAM_TYPE_",lu),nu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ou(a){return iu[a]||"LATENCY_ACTION_UNKNOWN"}
function pu(a,b,c){c=au(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in ju){c=ju[a];0<=fb(ku,c)&&(b=!!b);a in mu&&"string"===typeof b&&(b=mu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Ht({},d)}0<=fb(nu,a)||ts(new P("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,
LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,
LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,
LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,
LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,
LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,
LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,
LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,
LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,
LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,
LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,
LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";
W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";
W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";
W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";
W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";
W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";
W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";
W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";
W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var qu={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};qu[qu.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";qu[qu.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";qu[qu.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var ru={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};ru[ru.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
ru[ru.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";ru[ru.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";ru[ru.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";ru[ru.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";ru[ru.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";ru[ru.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";ru[ru.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var su={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};su[su.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";su[su.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";su[su.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";su[su.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var tu={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
tu[tu.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";tu[tu.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var uu={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};uu[uu.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";uu[uu.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";uu[uu.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
uu[uu.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";uu[uu.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";uu[uu.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var vu={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};vu[vu.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";vu[vu.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";vu[vu.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";vu[vu.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var wu={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};wu[wu.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";wu[wu.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";wu[wu.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var xu={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};xu[xu.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
xu[xu.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";xu[xu.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var yu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var zu=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",zu);function Au(){this.h=0}
function Bu(){Au.h||(Au.h=new Au);return Au.h}
Au.prototype.tick=function(a,b,c,d){Cu(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new bk,D(d,1,a),D(d,2,b),a=new ek,ae(a,bk,5,fk,d),fs(a,c)):Dm("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Au.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Cu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Dm("latencyActionInfo",a,{cttAuthInfo:c}))};
Au.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Cu(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new ek,ae(c,Xj,7,fk,a),fs(c,b))};
Au.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Cu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Dm("latencyActionSpan",a,{cttAuthInfo:c}))};
function Cu(a,b){zu[b]=zu[b]||{count:0};var c=zu[b];c.count++;c.time=R();a.h||(a.h=mm(function(){var d=R(),e;for(e in zu)zu[e]&&6E4<d-zu[e].time&&delete zu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new P("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||ts(c)),!0):!1}
;function Du(){var a=["ol"];hu("").info.actionType="embed";a&&Qk("TIMING_AFT_KEYS",a);Qk("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new Xj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);break;case "GetGuide_rid":e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);break;case "GetHome_rid":e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);
break;case "GetPlayer_rid":e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);break;case "GetSearch_rid":e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);break;case "GetSettings_rid":e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);break;case "GetTrending_rid":e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);break;case "GetWatchNext_rid":e=new ak;D(e,1,c);D(e,2,String(d));Zj(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}Eu(b);b=new Xj;b=D(b,25,!0);b=D(b,1,W[ou(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
D(b,13,W[ou(a)]);(a=L("CLIENT_PROTOCOL"))&&D(b,33,a);(a=L("CLIENT_TRANSPORT"))&&D(b,34,a);(a=Ls())&&"UNDEFINED_CSN"!==a&&D(b,4,a);a=Fu();1!==a&&-1!==a||D(b,6,!0);a=Yt();M("skip_setting_info_in_csi_data_object")&&Zt();D(b,3,"cold");Gu(a);a=Hu();if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new Wj,D(d,1,c),ce(b,83,Wj,d);Eu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&Iu(b,a[b]);b={isNavigation:!0,actionType:ou(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=
ou(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=Ls())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=Fu();if(1===a||-1===a)b.isVisible=!0;M("skip_setting_info_in_csi_data_object")&&Zt();Yt();b.loadType="cold";Gu(Yt());a=Hu();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});Ju(b)}b=Yt();a=bu();if(!(M("skip_setting_info_in_csi_data_object")&&"cold"!==Zt().loadType||"cold"!==b.yt_lt&&
"cold"!==a.loadType)){c=$t();d=au();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var f in c)if(!(f in d))if("number"===typeof c[f])Z(f,Tt(f));else if(M("log_repeated_ytcsi_ticks")){e=p(c[f]);for(var g=e.next();!g.done;g=e.next())Z(f.slice(1),g.value)}f={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=pu(e,b[e]))&&!eu(bu(),e)&&(Ht(a,e),Ht(f,e),c=!0);c&&Ju(f)}z("ytglobal.timingready_",!0);f=L("TIMING_ACTION");B("ytglobal.timingready_")&&f&&"_start"in $t()&&St()&&du()}
function Iu(a,b,c,d){if(null!==b){var e=Yt(c);M("skip_setting_info_in_csi_data_object")?"yt_lt"===a&&(e="string"===typeof b?b:""+b,Zt(c).loadType=e):e[a]=b;(a=pu(a,b,c))&&Ju(a,c,d)}}
function Ju(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=hu(b||""),Ht(c.info,a),M("skip_setting_info_in_csi_data_object")&&a.loadType&&(c=a.loadType,Zt(b).loadType=c),Ht(bu(b),a),c=cu(b),b=Xt(b).cttAuthInfo,Bu().info(a,c,b);else{c=new Xj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,
92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,5,qu[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,ru[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,
a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,su[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,
29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,
64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,tu[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "debugTicksExcluded":D(c,105,a[e]);break;case "adPrebufferedTimeSecs":D(c,
39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,uu[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,vu[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,wu[a[e]]);break;case "playerRotationType":D(c,101,xu[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,
57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:yu.includes(f)&&bl(new P("Codegen laipb translator asked to translate message field",""+f))}}catch(g){bl(Error("Codegen laipb translator failed to set "+f))}}Eu(c,b)}}
function Eu(a,b){if(M("skip_setting_info_in_csi_data_object")){var c=ee(Rd(a,3),"");c&&(Zt(b).loadType=c)}else c=au(b),c.jspbInfos||(c.jspbInfos=[]),c.jspbInfos.push(ke(a));hu(b||"").jspbInfo.push(a);c=cu(b);b=Xt(b).cttAuthInfo;Bu().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=hu(c||"");d.tick[a]=b||R();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=au(c);d.gelTicks&&(d.gelTicks[a]=!0);e=$t(c);d=b||R();M("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=cu(c);var f=Xt(c).cttAuthInfo;"_start"===a?(a=Bu(),Cu(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(a=new Vj,
D(a,1,e),e=new ek,ae(e,Vj,6,fk,a),fs(e,b)):Dm("latencyActionBaselined",{clientActionNonce:e},b))):Bu().tick(a,e,b,f);du(c);return d}
function Ku(){var a=cu();requestAnimationFrame(function(){setTimeout(function(){a===cu()&&Z("ol",void 0,void 0)},0)})}
function Fu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Aq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Gu(a){var b=Ut(),c=Wt(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=fu();0<a&&Z("fpt",a);a=Ut();a.isPerformanceNavigationTiming&&Ju({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Wt()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&Lu()}
function Mu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ic()&&a.setAttribute("nonce",ic());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=Wt(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Hu(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in Rt)if(Rt.hasOwnProperty(b)){var c=Rt[b];Mu(b,c)&&a.push(c)}return a}
function Lu(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Vt(b.startTime)),Z("wffe",Vt(b.responseEnd)))}
var Nu=window;Nu.ytcsi&&(Nu.ytcsi.info=Iu,Nu.ytcsi.tick=Z);var Ou="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Pu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Qu(a,b,c,d){this.m=a;this.L=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Oa||(a.Oa={});a.Oa=Object.assign({},Gt,a.Oa)}
function Ru(a,b,c,d){if(void 0!==Qu.h){if(d=Qu.h,a=[a!==d.m,b!==d.L,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new P("InnerTubeTransportService is already initialized",a);
}else Qu.h=new Qu(a,b,c,d)}
function Su(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?ot:c;var d=xt(b,a.m);if(!d)return Ff(new P("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Af(function(f){var g,h,l;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.wa)?void 0:g.mode)?"cors":void 0;if(a.l.ud){var q=e.config,r;q=null==q?void 0:null==(r=q.Za)?void 0:r.sessionIndex;r=nt({sessionIndex:q});l=Object.assign({},Tu(h),r);return m.u(2)}return v(m,Uu(e.config,
h),3)}2!=m.h&&(l=m.i);f(Vu(a,e,l));m.h=0})}):Ff(new P("Error: Failed to build request for command.",b))}
function Wu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Or)?0:d.Rr)&&a.j){d=p(Ou);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Vu(a,b,c){var d,e,f,g,h,l,m,q,r,w,t,A,E,F,O,N,Q,ca,U,rb,Wa,oa,I,ma,ea,Ge,He,sd;return x(function(ra){switch(ra.h){case 1:ra.u(2);break;case 3:if((d=ra.i)&&!d.isExpired())return ra.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.ga)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())l=h.value,l.Kr(b.ga.context);if(null==(m=a.i)||!m.Pr(b.input,b.ga)){ra.u(4);break}return v(ra,a.i.Fr(b.input,b.ga),5);case 5:return q=ra.i,M("kevlar_process_local_innertube_responses_killswitch")||
Wu(a,q,b),ra.return(q);case 4:return(t=null==(w=b.config)?void 0:w.na)&&a.h.has(t)&&M("web_memoize_inflight_requests")?r=a.h.get(t):(A=JSON.stringify(b.ga),O=null!=(F=null==(E=b.wa)?void 0:E.headers)?F:{},b.wa=Object.assign({},b.wa,{headers:Object.assign({},O,c)}),N=Object.assign({},b.wa),"POST"===b.wa.method&&(N=Object.assign({},N,{body:A})),(null==(Q=b.config)?0:Q.gd)&&Z(b.config.gd),ca=function(){return a.L.fetch(b.input,N,b.config)},r=ca(),t&&a.h.set(t,r)),v(ra,r,6);
case 6:if((U=ra.i)&&"error"in U&&(null==(rb=U)?0:null==(Wa=rb.error)?0:Wa.details))for(oa=U.error.details,I=p(oa),ma=I.next();!ma.done;ma=I.next())ea=ma.value,(Ge=ea["@type"])&&-1<Pu.indexOf(Ge)&&(delete ea["@type"],U=ea);t&&a.h.has(t)&&a.h.delete(t);(null==(He=b.config)?0:He.hd)&&Z(b.config.hd);if(U||null==(sd=a.i)||!sd.xr(b.input,b.ga)){ra.u(7);break}return v(ra,a.i.Er(b.input,b.ga),8);case 8:U=ra.i;case 7:return Wu(a,U,b),ra.return(U||void 0)}})}
function Uu(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Za)?void 0:d.sessionIndex;var h=nt({sessionIndex:e});if(!(h instanceof Af)){var l=new Af(db);Bf(l,2,h);h=l}return v(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Tu(b),f)))})}
function Tu(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1);"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=L("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Xu=new ar("INNERTUBE_TRANSPORT_TOKEN");var Yu=["share/get_web_player_share_panel"],Zu=["feedback"],$u=["notification/modify_channel_preference"],av=["browse/edit_playlist"],bv=["subscription/subscribe"],cv=["subscription/unsubscribe"];function dv(){}
u(dv,Dt);dv.prototype.j=function(){return bv};
dv.prototype.h=function(a){return mr(a,Kk)||void 0};
dv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(dv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ev(){}
u(ev,Dt);ev.prototype.j=function(){return cv};
ev.prototype.h=function(a){return mr(a,Jk)||void 0};
ev.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(ev.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function fv(){}
u(fv,Dt);fv.prototype.j=function(){return Zu};
fv.prototype.h=function(a){return mr(a,qj)||void 0};
fv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(fv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function gv(){}
u(gv,Dt);gv.prototype.j=function(){return $u};
gv.prototype.h=function(a){return mr(a,Ik)||void 0};
gv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function hv(){}
u(hv,Dt);hv.prototype.j=function(){return av};
hv.prototype.h=function(a){return mr(a,Hk)||void 0};
hv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function iv(){}
u(iv,Dt);iv.prototype.j=function(){return Yu};
iv.prototype.h=function(a){return mr(a,Gk)};
iv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var cr=new ar("NETWORK_SLI_TOKEN");function jv(a){this.h=a}
jv.prototype.fetch=function(a,b){var c=this,d,e;return x(function(f){c.h&&(d=mc(nc(5,Dc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){ts(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){ts(g)}))})};
jv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Br(),b=b.then(function(c){ts(new P("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
jv[$q]=[new br];var kv=new ar("NETWORK_MANAGER_TOKEN");var lv;function mv(a){Qo.call(this,1,arguments);this.csn=a}
u(mv,Qo);var Zo=new Ro("screen-created",mv),nv=[],pv=ov,qv=0;function rv(a,b,c,d,e,f,g){function h(){ts(new P("newScreen() parent element does not have a VE - rootVe",b))}
var l=pv(),m=new Es({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:l};e&&(f.cttAuthInfo=e);M("il_via_jspb")?(e=Lj((new Kj).i(l),m.getAsJspb()),c&&c.visualElement?(m=new Mj,c.clientScreenNonce&&D(m,2,c.clientScreenNonce),Nj(m,c.visualElement.getAsJspb()),g&&D(m,4,gk[g]),G(e,Mj,5,m)):c&&h(),d&&D(e,3,d),ks(e,f,a)):(e={csn:l,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=
g)):c&&h(),d&&(e.cloneCsn=d),a?$r("screenCreated",e,a,f):Dm("screenCreated",e,f));Wo(Zo,new mv(l));return l}
function sv(a,b,c,d){var e=d.filter(function(l){l.csn!==b?(l.csn=b,l=!0):l=!1;return l}),f={cttAuthInfo:Ns(b)||void 0,
sequenceGroup:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&ts(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=Qj((new Oj).i(b),c.getAsJspb());ib(e,function(l){l=l.getAsJspb();ce(h,3,Fj,l)});
"UNDEFINED_CSN"===b?tv("visualElementAttached",f,void 0,h):ls(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(l){return l.getAsJson()})},"UNDEFINED_CSN"===b?tv("visualElementAttached",f,c):a?$r("visualElementAttached",c,a,f):Dm("visualElementAttached",c,f)}
function uv(a,b,c,d,e,f){vv(a,b,c,e,f)}
function vv(a,b,c,d,e){var f={cttAuthInfo:Ns(b)||void 0,sequenceGroup:b};M("il_via_jspb")?(d=(new Tj).i(b),c=c.getAsJspb(),c=G(d,Fj,2,c),c=D(c,4,1),e&&G(c,Ij,3,e),"UNDEFINED_CSN"===b?tv("visualElementShown",f,void 0,c):gs(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?tv("visualElementShown",f,e):a?$r("visualElementShown",e,a,f):Dm("visualElementShown",e,f))}
function ov(){if(M("enable_web_96_bit_csn"))var a=As();else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=bd(b,3)}return a}
function tv(a,b,c,d){nv.push({Eb:a,payload:c,la:d,options:b});qv||(qv=$o())}
function ap(a){if(nv){for(var b=p(nv),c=b.next();!c.done;c=b.next())if(c=c.value,M("il_via_jspb")&&c.la)switch(c.la.i(a.csn),c.Eb){case "screenCreated":ks(c.la,c.options);break;case "visualElementAttached":ls(c.la,c.options);break;case "visualElementShown":gs(c.la,c.options);break;case "visualElementHidden":hs(c.la,c.options);break;case "visualElementGestured":is(c.la,c.options);break;case "visualElementStateChanged":js(c.la,c.options);break;default:ts(new P("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Dm(c.Eb,c.payload,c.options));nv.length=0}qv=0}
;function wv(){this.l=new Set;this.h=new Set;this.m=new Map;this.client=yq;this.csn=null}
function xv(){wv.h||(wv.h=new wv);return wv.h}
wv.prototype.i=function(a){this.client=a};
wv.prototype.j=function(){this.clear();this.csn=Ls()};
wv.prototype.clear=function(){this.l.clear();this.h.clear();this.m.clear();this.csn=null};function yv(){this.j=new Set;this.h=new Set;this.l=new Map;this.client=void 0;this.csn=null}
function zv(){yv.h||(yv.h=new yv);return yv.h}
yv.prototype.i=function(a){M("safe_logging_library_killswitch")?this.client=a:al(xv().i).bind(xv())(a)};
yv.prototype.clear=function(){M("safe_logging_library_killswitch")?(this.j.clear(),this.h.clear(),this.l.clear(),this.csn=null):al(xv().clear).bind(xv())()};function Av(){this.j=new Set;this.h=new Set;this.l=new Map}
Av.prototype.i=function(a){M("use_ts_visibilitylogger")&&zv().i(a)};
Av.prototype.clear=function(){M("use_ts_visibilitylogger")?zv().clear():(this.j.clear(),this.h.clear(),this.l.clear())};
Oa(Av);function Bv(){this.o=[];this.v=[];this.h=[];this.m=[];this.M=[];this.j=new Set;this.s=new Map}
Bv.prototype.i=function(a){this.client=a};
function Cv(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=Ls(c),f=Js(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&sv(a.client,e,f,[Fs(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&sv(a.client,e,f,[Fs(d.playerResponse.trackingParams)])}})}
function Dv(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=Ls(d);c=c||Js(d);e&&c&&sv(a.client,e,c,[b])}}
Bv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Ls(void 0===c?0:c)){a=this.client;var e=Fs(d);d={cttAuthInfo:Ns(c)||void 0,sequenceGroup:c};M("il_via_jspb")?(b=(new Rj).i(c),e=e.getAsJspb(),b=G(b,Fj,2,e),D(b,4,gk.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?tv("visualElementGestured",d,void 0,b):is(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?tv("visualElementGestured",d,e):a?$r("visualElementGestured",e,a,d):Dm("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
Bv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.j.has(c)?this.v.push([a,b]):Ev(this,a,b,c)};
function Ev(a,b,c,d){d=void 0===d?0:d;var e=Ls(d);d=b||Js(d);e&&d&&(a=a.client,b={cttAuthInfo:Ns(e)||void 0,sequenceGroup:e},M("il_via_jspb")?(c=new Uj,c.i(e),d=d.getAsJspb(),G(c,Fj,2,d),"UNDEFINED_CSN"===e?tv("visualElementStateChanged",b,void 0,c):js(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?tv("visualElementStateChanged",b,c):a?$r("visualElementStateChanged",c,a,b):Dm("visualElementStateChanged",c,b)))}
function Fv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Gv(a,b,c);var f=Js(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Dv(a,h[0],h[1]||f,c.layer);f=p(a.v);for(g=f.next();!g.done;g=f.next())g=g.value,Ev(a,g[0],g[1])}};
Ls(c.layer)||a.l();if(c.Wb)for(var d=p(c.Wb),e=d.next();!e.done;e=d.next())Cv(a,e.value,c.layer);else ss(Error("Delayed screen needs a data promise."))}
function Gv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.bd?c.bd:c.layer;var e=Ls(d);d=Js(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var l=rv(a.client,b,f,c.Vb,c.cttAuthInfo,g,c.Cr)}catch(m){vs(m,{Mr:b,rootVe:d,Jr:void 0,yr:e,Ir:f,Vb:c.Vb});ss(m);return}Os(l,b,c.layer,c.cttAuthInfo);
if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Ds));for(f=b.next();!f.done;f=b.next())if(Ls(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Ns(e)||void 0,sequenceGroup:e,endOfSequence:g},M("il_via_jspb")?(h=(new Sj).i(e),d=d.getAsJspb(),d=G(h,Fj,2,d),D(d,4,g?16:8),"UNDEFINED_CSN"===e?tv("visualElementHidden",f,void 0,d):hs(d,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"===e?tv("visualElementHidden",f,d):b?$r("visualElementHidden",
d,b,f):Dm("visualElementHidden",d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=l||"");Ju({clientScreenNonce:l});d=Av.getInstance();M("use_ts_visibilitylogger")?(d=zv(),M("safe_logging_library_killswitch")?(d.clear(),d.csn=Ls()):al(xv().j).bind(xv())()):d.clear();d=Js(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=l,M("safe_logging_library_killswitch")?vv(void 0,e,d):al(uv)(void 0,e,d,void 0,void 0,void 0));a.j.delete(c.layer||
0);a.l=void 0;e=p(a.s);for(l=e.next();!l.done;l=e.next())b=p(l.value),l=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Dv(a,l,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){ss(m)}}for(c=a.m.length=0;c<a.M.length;c++){e=a.M[c];try{e()}catch(m){ss(m)}}}
;function Hv(){var a,b,c;return x(function(d){if(1==d.h)return a=hr().resolve(Xu),a?v(d,Su(a),2):(ts(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ts(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.zr;return d.return(c)}ts(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Iv=y.caches,Jv;function Kv(a){var b=a.indexOf(":");return-1===b?{ic:a}:{ic:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Lv(){return x(function(a){if(void 0!==Jv)return a.return(Jv);Jv=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),v(d,Iv.open("test-only"),4);case 4:return v(d,Iv.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Jv)})}
function Mv(a){var b,c,d,e,f,g,h;x(function(l){if(1==l.h)return v(l,Lv(),2);if(3!=l.h){if(!l.i)return l.return(!1);b=[];return v(l,Iv.keys(),3)}c=l.i;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Kv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Iv.delete(f));return l.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Nv(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return v(h,Lv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=tm("cache contains other");return v(h,Iv.keys(),3)}b=h.i;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Kv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ov(){try{return!!self.localStorage}catch(a){return!1}}
;function Pv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Qv(a){if(Ov()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Pv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Rv(){if(!Ov())return!1;var a=tm(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Pv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Sv(){Hv().then(function(a){a&&(Sn(a),Mv(a),Qv(a))})}
function Tv(){var a=new mq;ei.S(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=tm("clear");if(b.startsWith("V")){var g=[b];Sn(g);Mv(g);Qv(g);return f.return()}c=Rv();return v(f,Nv(),3);case 3:return d=f.i,v(f,Tn(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.U()?Sv():a.l.add("publicytnetworkstatus-online",Sv,!0,void 0,void 0),f.h=0}})})}
;var Nh=ia(["data-"]);function Uv(a){a&&(a.dataset?a.dataset[Vv("loaded")]="true":Mh(a))}
function Wv(a,b){return a?a.dataset?a.dataset[Vv(b)]:a.getAttribute("data-"+b):null}
var Xv={};function Vv(a){return Xv[a]||(Xv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Yv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Zv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function $v(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Yv,""),c=c.replace(Zv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else aw(a,b,c)}
function aw(a,b,c){c=void 0===c?null:c;var d=bw(a),e=document.getElementById(d),f=e&&Wv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Uq(d,b),b=""+Sa(b),cw[b]=f),g||(e=dw(a,d,function(){Wv(e,"loaded")||(Uv(e),Xq(d),sl(Za(Yq,d),0))},c)))}
function dw(a,b,c,d){d=void 0===d?null:d;var e=nf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Oh(e,Lb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ew(a){a=bw(a);var b=document.getElementById(a);b&&(Yq(a),b.parentNode.removeChild(b))}
function fw(a,b){a&&b&&(a=""+Sa(b),(a=cw[a])&&Wq(a))}
function bw(a){var b=document.createElement("a");fc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var cw={};var gw=[],hw=!1;function iw(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&$s()){var a=L("PLAYER_VARS",{});if("1"!=tb(a)&&!at(a)){var b=function(){hw=!0;"google_ad_status"in window?Qk("DCLKSTAT",1):Qk("DCLKSTAT",2)};
try{$v("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}gw.push(ei.S(function(){if(!(hw||"google_ad_status"in window)){try{fw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}hw=!0;Qk("DCLKSTAT",3)}},5E3))}}}
function jw(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function kw(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?rm():d;this.l=c;this.j=d;this.i=new Eh;this.h=a;a={};c=p(this.h.entries());for(d=c.next();!d.done;a={Ea:a.Ea,Qa:a.Qa},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Qa=d;a.Ea=e;d=function(f){return function(){f.Ea.Ab();b.h[f.Qa].lb=!0;b.h.every(function(g){return!0===g.lb})&&b.i.resolve()}}(a);
e=nm(d,lw(this,a.Ea));this.h[a.Qa]=Object.assign({},a.Ea,{Ab:d,jobId:e})}}
function mw(a){var b=Array.from(a.h.keys()).sort(function(d,e){return lw(a,a.h[e])-lw(a,a.h[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.lb||(a.j.da(c.jobId),nm(c.Ab,10))}
kw.prototype.cancel=function(){for(var a=p(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.lb||this.j.da(b.jobId),b.lb=!0;this.i.resolve()};
function lw(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function pw(a){this.state=a;this.plugins=[];this.o=void 0}
pw.prototype.install=function(){this.plugins.push.apply(this.plugins,ja(Ka.apply(0,arguments)))};
pw.prototype.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
pw.prototype.transition=function(a,b){var c=this,d=this.v.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.D===a}):f.from===c.state&&f.D===a});
if(d){this.j&&(mw(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(qw(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function qw(a,b,c){return function(){var d=Ka.apply(0,arguments),e=b.filter(function(l){var m;return 10===(null!=(m=null!=c?c:l.priority)?m:0)}),f=b.filter(function(l){var m;
return 10!==(null!=(m=null!=c?c:l.priority)?m:0)});
rm();var g={};e=p(e);for(var h=e.next();!h.done;g={Ra:g.Ra},h=e.next())g.Ra=h.value,pm(function(l){return function(){l.Ra.callback.apply(l.Ra,ja(d))}}(g));
f=f.map(function(l){var m;return{Ab:function(){l.callback.apply(l,ja(d))},
priority:null!=(m=null!=c?c:l.priority)?m:0}});
f.length&&(a.j=new kw(f))}}
fa.Object.defineProperties(pw.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function rw(a){pw.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.h=new Map;this.v=[{from:"document_active",D:"document_disposed_preventable",action:this.M},{from:"document_active",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"document_disposed",action:this.l},{from:"document_disposed_preventable",D:"flush_logs",action:this.m},{from:"document_disposed_preventable",D:"document_active",action:this.i},{from:"document_disposed",D:"flush_logs",action:this.m},
{from:"document_disposed",D:"document_active",action:this.i},{from:"document_disposed",D:"document_disposed",action:function(){}},
{from:"flush_logs",D:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
u(rw,pw);rw.prototype.M=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
rw.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
rw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
rw.prototype.i=function(){this.h=new Map};function sw(a){pw.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.v=[{from:"document_visibility_unknown",D:"document_visible",action:this.i},{from:"document_visibility_unknown",D:"document_hidden",action:this.h},{from:"document_visibility_unknown",D:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",D:"document_backgrounded",action:this.l},{from:"document_visible",D:"document_hidden",action:this.h},{from:"document_visible",D:"document_foregrounded",action:this.m},
{from:"document_visible",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_visible",action:this.i},{from:"document_foregrounded",D:"document_hidden",action:this.h},{from:"document_foregrounded",D:"document_foregrounded",action:this.m},{from:"document_hidden",D:"document_visible",action:this.i},{from:"document_hidden",D:"document_backgrounded",action:this.l},{from:"document_hidden",D:"document_hidden",action:this.h},{from:"document_backgrounded",D:"document_hidden",action:this.h},
{from:"document_backgrounded",D:"document_backgrounded",action:this.l},{from:"document_backgrounded",D:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
u(sw,pw);sw.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
sw.prototype.h=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
sw.prototype.l=function(a,b){a(null==b?void 0:b.event)};
sw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function tw(){this.h=new rw;this.i=new sw}
tw.prototype.install=function(){var a=Ka.apply(0,arguments);this.h.install.apply(this.h,ja(a));this.i.install.apply(this.i,ja(a))};function uw(){tw.call(this);var a={};this.install((a.document_disposed={callback:this.j},a));a={};this.install((a.flush_logs={callback:this.l},a))}
var vw;u(uw,tw);uw.prototype.l=function(){if(M("web_fp_via_jspb")){var a=new Ej,b=Ls();b&&D(a,1,b);b=new ek;ae(b,Ej,380,fk,a);fs(b);M("web_fp_via_jspb_and_json")&&Dm("finalPayload",{csn:Ls()})}else Dm("finalPayload",{csn:Ls()})};
uw.prototype.j=function(){xs(ys)};function ww(){}
ww.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new ww,z("ytglobal.storage_",a));return a};
ww.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(xw()):d.return()})};
function xw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",ww);function Bm(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=Tk("ytidb_transaction_ended_event_rate_limit_session",.2)}
Bm.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":yw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=Tk("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function yw(a,b){ww.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:zw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:zw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function zw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Aw(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.I=!!a;this.F=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.I&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=fb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.F)}
u(Aw,J);Aw.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){cl(d)}}};
Aw.prototype.B=function(){window.removeEventListener("message",this.F);J.prototype.B.call(this)};function Bw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Aw(!!L("WIDGET_ID_ENFORCE")),b=this.dd.bind(this);a.o=b;a.s=null;this.h.i="widget";if(a=L("WIDGET_ID"))this.h.sessionId=a}
k=Bw.prototype;k.dd=function(a,b,c){"addEventListener"===a&&b?this.zb(b[0],c):this.Kb(a,b,c)};
k.Kb=function(){};
k.sb=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
k.zb=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.sb(a,b)),this.j[a]=!0)};
k.addEventListener=function(){};
k.Oc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.vb());this.sendMessage("onReady");gb(this.i,this.oc,this);this.i=[]};
k.vb=function(){return null};
function Cw(a,b){a.sendMessage("infoDelivery",b)}
k.oc=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.oc({event:a,info:void 0===b?null:b})};
k.dispose=function(){this.h=null};var Dw={},Ew=(Dw["api.invalidparam"]=2,Dw.auth=150,Dw["drm.auth"]=150,Dw["heartbeat.net"]=150,Dw["heartbeat.servererror"]=150,Dw["heartbeat.stop"]=150,Dw["html5.unsupportedads"]=5,Dw["fmt.noneavailable"]=5,Dw["fmt.decode"]=5,Dw["fmt.unplayable"]=5,Dw["html5.missingapi"]=5,Dw["html5.unsupportedlive"]=5,Dw["drm.unavailable"]=5,Dw["mrm.blocked"]=151,Dw);var Fw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Gw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Hw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(Fw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Iw(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Jw(a){Bw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.od.bind(this));this.addEventListener("onVolumeChange",this.pd.bind(this));this.addEventListener("onApiChange",this.jd.bind(this));this.addEventListener("onPlaybackQualityChange",this.ld.bind(this));this.addEventListener("onPlaybackRateChange",this.md.bind(this));this.addEventListener("onStateChange",this.nd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.qd.bind(this))}
u(Jw,Bw);k=Jw.prototype;
k.Kb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Gw(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Hw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Hw(e);break;case "loadPlaylist":case "cuePlaylist":e=Iw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Gw(a)&&Cw(this,this.vb())}};
k.zb=function(a,b){("onReady"===a||"onError"===a&&this.l)&&this.api.logApiCall(a+" invocation",b);this.api.logApiCall(a+" registration",b);Bw.prototype.zb.call(this,a,b)};
k.sb=function(a,b){var c=this,d=Bw.prototype.sb.call(this,a,b);return function(e){c.api.logApiCall(a+" invocation",b);d(e)}};
k.onReady=function(){var a=this.Oc.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?Ew[a]||b:b).toString())}};
k.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
k.vb=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
k.nd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Cw(this,a)};
k.ld=function(a){Cw(this,{playbackQuality:a})};
k.md=function(a){Cw(this,{playbackRate:a})};
k.jd=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.api.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.pd=function(){Cw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
k.od=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Cw(this,a)};
k.qd=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Cw(this,a)};
k.dispose=function(){Bw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Kw(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.kc,this)}
u(Kw,J);k=Kw.prototype;k.start=function(){this.started||this.h()||(this.started=!0,this.connection.xa("RECEIVING"))};
k.xa=function(a,b){this.started&&!this.h()&&this.connection.xa(a,b)};
k.kc=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Lw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Mw(a,c))&&this.xa(a,c))}}};
k.addListener=function(a){if(!(a in this.i)){var b=this.kd.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
k.kd=function(a,b){this.started&&!this.h()&&this.connection.xa(a,this.ub(a,b))};
k.ub=function(a,b){if(null!=b)return{value:b}};
k.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
k.B=function(){var a=this.connection;a.h()||Bi(a.i,"command",this.kc,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.B.call(this)};function Nw(a,b){Kw.call(this,b);this.api=a;this.start()}
u(Nw,Kw);Nw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Nw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Lw(a,b){switch(a){case "loadVideoById":return a=Hw(b),[a];case "cueVideoById":return a=Hw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Iw(b),[a];case "cuePlaylist":return a=Iw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Mw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Nw.prototype.ub=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Kw.prototype.ub.call(this,a,b)};
Nw.prototype.B=function(){Kw.prototype.B.call(this);delete this.api};function Ow(a){a=void 0===a?!1:a;J.call(this);this.i=new K(a);ue(this,this.i)}
$a(Ow,J);Ow.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Ow.prototype.m=function(a,b){this.h()||this.i.ra.apply(this.i,arguments)};function Pw(a,b,c){Ow.call(this);this.l=a;this.j=b;this.id=c}
u(Pw,Ow);Pw.prototype.xa=function(a,b){this.h()||this.l.xa(this.j,this.id,a,b)};
Pw.prototype.B=function(){this.j=this.l=null;Ow.prototype.B.call(this)};function Qw(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=Hq(window,"message",this.l.bind(this));this.connection=new Pw(this,a,b);ue(this,this.connection)}
u(Qw,J);Qw.prototype.xa=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Qw.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Qw.prototype.B=function(){Iq(this.j);this.i=null;J.prototype.B.call(this)};function Rw(){this.state=1;this.h=null}
k=Rw.prototype;
k.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Ab())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Lb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Sw(this,e,
d,a.program,b,c)}else ts(Error("Cannot initialize botguard without program"))};
function Sw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,$v(c,function(){window[g]?Tw(a,d,g,e):(a.state=3,ew(c),ts(new P("Unable to load Botguard","from "+c)))},f)):b?(f=nf("SCRIPT"),f.textContent=b,f.nonce=ic(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Tw(a,d,g,e):(a.state=4,ts(new P("Unable to load Botguard from JS")))):ts(new P("Unable to load VM; no url or JS provided"))}
function Tw(a,b,c,d){a.state=5;try{var e=new Fh({program:b,Rc:c,ed:M("att_web_record_metrics")});e.rd.then(function(){a.state=6;d&&d(b)});
a.Ib(e)}catch(f){a.state=7,f instanceof Error&&ts(f)}}
k.invoke=function(a){a=void 0===a?{}:a;return this.Jb()?this.wc({Ub:a}):null};
k.dispose=function(){this.Lb()};
k.Lb=function(){this.Ib(null);this.state=8};
k.Jb=function(){return!!this.h};
k.wc=function(a){return this.h.qc(a)};
k.Ib=function(a){se(this.h);this.h=a};function Uw(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Vw(){Rw.apply(this,arguments)}
u(Vw,Rw);Vw.prototype.Lb=function(){this.state=8};
Vw.prototype.Ib=function(a){var b;null==(b=Uw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.qc.bind(a)},z("yt.abuse.playerAttLoader",b),z("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(z("yt.abuse.playerAttLoader",null),z("yt.abuse.playerAttLoaderRun",null))};
Vw.prototype.Jb=function(){return!!Uw()};
Vw.prototype.wc=function(a){return Uw().bgvmc(a)};var Ww=new Vw;function Xw(){return Ww.Jb()}
function Yw(a){a=void 0===a?{}:a;return Ww.invoke(a)}
;function Zw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Zw.prototype.clone=function(){var a=new Zw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=vb(c):a[b]=c}return a};var $w=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ax(a){a=a||"";if(window.spf){var b=a.match($w);spf.style.load(a,b?b[1]:"",void 0)}else bx(a)}
function bx(a){var b=cx(a),c=document.getElementById(b),d=c&&Wv(c,"loaded");d||c&&!d||(c=dx(a,b,function(){Wv(c,"loaded")||(Uv(c),Xq(b),sl(Za(Yq,b),0))}))}
function dx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Lb(a);gc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function cx(a){var b=nf("A");Db("This URL is never added to the DOM");fc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function ex(){J.call(this);this.i=[]}
u(ex,J);ex.prototype.B=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.B.call(this)};function fx(){ex.apply(this,arguments)}
u(fx,ex);function gx(a,b,c,d,e){J.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.Wa=e;this.ba=!1;this.api={};this.V=this.o=null;this.K=new K;this.i={};this.P=this.W=this.elementId=this.sa=this.config=null;this.O=!1;this.l=this.F=null;this.ja={};this.Xa=["onReady"];this.lastError=null;this.Ga=NaN;this.I={};this.Ya=new fx(this);this.T=0;this.j=this.m=a;ue(this,this.K);hx(this);ix(this);ue(this,this.Ya);c?this.T=sl(function(){f.loadNewVideoConfig(c)},0):d&&(jx(this),kx(this))}
u(gx,J);k=gx.prototype;k.getId=function(){return this.s};
k.loadNewVideoConfig=function(a){if(!this.h()){this.T&&(window.clearTimeout(this.T),this.T=0);var b=a||{};b instanceof Zw||(b=new Zw(b));this.config=b;this.setConfig(a);kx(this);this.isReady()&&lx(this)}};
function jx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
k.setConfig=function(a){this.sa=a;this.config=mx(a);jx(this);if(!this.W){var b;this.W=nx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Yh(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Yh(Number(a)||a))};
function lx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ox(a){var b=!0,c=px(a);c&&a.config&&(a=qx(a),b=Wv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function kx(a){if(!a.h()&&!a.O){var b=ox(a);if(b&&"html5"===(px(a)?"html5":null))a.P="html5",a.isReady()||rx(a);else if(sx(a),a.P="html5",b&&a.l&&a.m)a.m.appendChild(a.l),rx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=tx(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?mx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Wa);rx(a)};
a.O=!0;b?a.F():($v(qx(a),a.F),(b=ux(a))&&ax(b),vx(a)&&!c&&z("yt.player.Application.create",null))}}}
function px(a){var b=mf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function rx(a){if(!a.h()){var b=px(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.O=!1;if(!tx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}wx(a)}else a.Ga=sl(function(){rx(a)},50)}}
function wx(a){hx(a);a.ba=!0;var b=px(a);if(b){a.o=xx(a,b,"addEventListener");a.V=xx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=xx(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);lx(a);a.W&&a.W(a.api);a.K.ra("onReady",a.api)}
function xx(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,ts(f))}}}
function hx(a){a.ba=!1;if(a.V)for(var b in a.i)a.i.hasOwnProperty(b)&&a.V(b,a.i[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.I={};a.o=null;a.V=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.sa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
k.isReady=function(){return this.ba};
function ix(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Xq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Xq("WATCH_LATER_VIDEO_REMOVED",b)})}
k.addEventListener=function(a,b){var c=this,d=nx(this,b);d&&(0<=fb(this.Xa,a)||this.i[a]||(b=yx(this,a),this.o&&this.o(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&sl(function(){d(c.api)},0))};
k.removeEventListener=function(a,b){this.h()||(b=nx(this,b))&&Bi(this.K,a,b)};
function nx(a,b){var c=b;if("string"===typeof b){if(a.ja[b])return a.ja[b];c=function(){var d=Ka.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){ss(f)}};
a.ja[b]=c}return c?c:null}
function yx(a,b){var c="ytPlayer"+b+a.s;a.i[b]=c;y[c]=function(d){var e=sl(function(){if(!a.h()){try{a.K.ra(b,null!=d?d:void 0)}catch(h){ts(new P("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.I,g=String(e);g in f&&delete f[g]}},0);
sb(a.I,String(e))};
return c}
k.getPlayerType=function(){return this.P||(px(this)?"html5":null)};
k.getLastError=function(){return this.lastError};
function sx(a){a.cancel();hx(a);a.P=null;a.config&&(a.config.loaded=!1);var b=px(a);b&&(ox(a)||!vx(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.F&&fw(qx(this),this.F);window.clearTimeout(this.Ga);this.O=!1};
k.B=function(){sx(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){ss(b)}this.ja=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.sa=this.config=this.api=null;delete this.m;delete this.j;J.prototype.B.call(this)};
function vx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function qx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function ux(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function tx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===fl(c||"","&")[b]}
function mx(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var zx={},Ax="player_uid_"+(1E9*Math.random()>>>0);function Bx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?mf(c):c;var e=Ax+"_"+Sa(c),f=zx[e];if(f&&d)return Cx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new gx(c,e,a,b,void 0);zx[e]=f;Xq("player-added",f.api);ve(f,function(){delete zx[f.getId()]});
return f.api}
function Cx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Dx=null,Ex=null,Fx=null;function Gx(){Hx()}
function Ix(){Hx()}
function Hx(){var a=Dx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Jx(){Dx&&Dx.sendAbandonmentPing&&Dx.sendAbandonmentPing();L("PL_ATT")&&Ww.dispose();for(var a=ei,b=0,c=gw.length;b<c;b++)a.da(gw[b]);gw.length=0;ew("//static.doubleclick.net/instream/ad_status.js");hw=!1;Qk("DCLKSTAT",0);te(Fx,Ex);Dx&&(Dx.removeEventListener("onVideoDataChange",Gx),Dx.destroy())}
;function Kx(a,b,c){a="ST-"+kc(a).toString(36);b=b?tc(b):"";c=c||5;$s()&&Wl(a,b,c)}
;function Lx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=oc(window.location.href);g&&f.push(g);g=oc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d&&(d=pc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ls()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Kx(d,b,h)}else Kx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=vc(a,l)+m;var r=void 0===r?Rh:r;a:{r=void 0===r?Rh:r;for(l=0;l<r.length;++l)if(m=r[l],m instanceof Ph&&m.Wc(a)){r=new Ob(a,Pb);break a}r=void 0}r=r||Sb;if(r instanceof Ob)var w=Qb(r);else{b:if(Ih){try{w=new URL(r)}catch(t){w="https:";break b}w=w.protocol}else c:{w=document.createElement("a");try{w.href=r}catch(t){w=void 0;break c}w=
w.protocol;w=":"===w||""===w?"https:":w}w="javascript:"!==w?r:void 0}void 0!==w&&(c.href=w)}return!0}
;z("yt.setConfig",Qk);z("yt.config.set",Qk);z("yt.setMsg",Qs);z("yt.msgs.set",Qs);z("yt.logging.errors.log",ss);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}kt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Du();c=L("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=kl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Dx=Bx(a,c);Dx.addEventListener("onVideoDataChange",Gx);Dx.addEventListener("onReady",Ix);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Fx=new Jw(Dx):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Ex=new Qw(window.parent,a,b),Fx=new Nw(Dx,Ex.connection));iw();M("ytidb_create_logger_embed_killswitch")||M("embeds_web_disable_nwl")||Am();a={};vw||(vw=new uw);vw.install((a.flush_logs={callback:function(){Ir()}},
a));
M("embeds_web_disable_nwl")||xq();M("ytidb_clear_embedded_player")&&ei.S(function(){var e;if(!lv){var f=hr(),g={Fb:kv,uc:jv};f.h.set(g.Fb,g);g={Tb:{feedbackEndpoint:zt(fv),modifyChannelNotificationPreferenceEndpoint:zt(gv),playlistEditEndpoint:zt(hv),subscribeEndpoint:zt(dv),unsubscribeEndpoint:zt(ev),webPlayerShareEntityServiceEndpoint:zt(iv)}};var h=ut.getInstance(),l={};h&&(l.client_location=h);if(void 0===m){mt.h||(mt.h=new mt);var m=mt.h}void 0===e&&(e=f.resolve(kv));Ru(g,e,m,l);m={Fb:Xu,vc:Qu.h};
f.h.set(m.Fb,m);lv=f.resolve(Xu)}Tv()})});
var Mx=al(function(){Ku();lt();Bv.h||(Bv.h=new Bv);var a=Bv.h;var b=16623;var c=void 0===c?{}:c;Object.values(Rs).includes(b)||(ts(new P("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.o=[];a.v=[];c.Wb?Fv(a,b,c):Gv(a,b,c)}),Nx=al(function(a){M("embeds_web_enable_load_player_from_page_show")&&!a.persisted&&(Ku(),lt())}),Ox=al(function(a){M("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Jx():a.persisted||(M("embeds_web_enable_load_player_from_page_show")?
Jx():Zc?setTimeout(function(){Jx()},0):Jx())}),Px=al(Jx);
window.addEventListener?(window.addEventListener("load",Mx),M("embeds_web_enable_load_player_from_page_show")?(window.addEventListener("pageshow",Nx),window.addEventListener("pagehide",Ox)):Zc?window.addEventListener("beforeunload",Ox):window.addEventListener("pagehide",Ox)):window.attachEvent&&(window.attachEvent("onload",Mx),window.attachEvent("onunload",Px));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Xw);
z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Yw);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||jw);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||Lx);z("yt.util.activity.init",B("yt.util.activity.init")||Mq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Pq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Nq);}).call(this);
