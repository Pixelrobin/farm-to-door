/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	// Client.js

	__webpack_require__(1)
	__webpack_require__(5);

	window.onload = function() {
	    console.log("window loaded");

	    // SCROLL HANDLING
	    var lastScrollPos = 0;
	    var ticking = false;
	    
	    var mobileNav = document.getElementById("mobile-nav");
	    
	    var mobileState = {
	        "solid": false,
	        "open": false
	    }

	    function applyMobilNavState() {
	        var className = "";
	        var keys = Object.keys(mobileState);

	        for (var k = 0; k < keys.length; k ++) {
	            if (mobileState[keys[k]]) className += keys[k] + " ";
	        }

	        mobileNav.className = className;
	    }

	    function checkScrollPos(pos) {
	        mobileState.solid = (pos > 0);
	        applyMobilNavState();
	    }

	    window.toggleMobileMenu = function() {
	        console.log(mobileNav);
	        mobileState.open = !mobileState.open;
	        applyMobilNavState();
	    }

	    window.addEventListener('scroll', function(e) {
	        lastScrollPos = window.scrollY;
	        
	        if (!ticking) {
	            window.requestAnimationFrame(function() {
	                checkScrollPos(lastScrollPos);
	                ticking = false;
	            });
	            ticking = true;
	        }
	    });
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Promise=t()}(this,function(){"use strict";function e(){}function t(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,f._immediateFn(function(){var i=1===e._state?t.onFulfilled:t.onRejected;if(null!==i){var r;try{r=i(e._value)}catch(e){return void o(t.promise,e)}n(t.promise,r)}else(1===e._state?n:o)(t.promise,e._value)})):e._deferreds.push(t)}function n(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof f)return e._state=3,e._value=t,void i(e);if("function"==typeof n)return void r(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,i(e)}catch(t){o(e,t)}}function o(e,t){e._state=2,e._value=t,i(e)}function i(e){2===e._state&&0===e._deferreds.length&&f._immediateFn(function(){e._handled||f._unhandledRejectionFn(e._value)});for(var n=0,o=e._deferreds.length;o>n;n++)t(e,e._deferreds[n]);e._deferreds=null}function r(e,t){var i=!1;try{e(function(e){i||(i=!0,n(t,e))},function(e){i||(i=!0,o(t,e))})}catch(e){if(i)return;i=!0,o(t,e)}}function f(e){if(!(this instanceof f))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],r(e,this)}var u=setTimeout,c=f.prototype;return c.catch=function(e){return this.then(null,e)},c.then=function(n,o){var i=new this.constructor(e);return t(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(n,o,i)),i},f.all=function(e){return new f(function(t,n){function o(e,f){try{if(f&&("object"==typeof f||"function"==typeof f)){var u=f.then;if("function"==typeof u)return void u.call(f,function(t){o(e,t)},n)}i[e]=f,0==--r&&t(i)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var r=i.length,f=0;i.length>f;f++)o(f,i[f])})},f.resolve=function(e){return e&&"object"==typeof e&&e.constructor===f?e:new f(function(t){t(e)})},f.reject=function(e){return new f(function(t,n){n(e)})},f.race=function(e){return new f(function(t,n){for(var o=0,i=e.length;i>o;o++)e[o].then(t,n)})},f._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){u(e,0)},f._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},f});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(3);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	The MIT License (MIT)

	Copyright (c) 2016 Shopify Inc.

	Permission is hereby granted, free of charge, to any person obtaining a
	copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be included
	in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/
	(function(e,d){ true?module.exports=d():'function'==typeof define&&define.amd?define(d):e.ShopifyBuy=d()})(this,function(){'use strict';function e(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];return d.join(' ')}function d(e){return!!e&&'[object Object]'===Object.prototype.toString.call(e.valueOf())}function a(e,t){return e(t)?t:d(t)?Object.freeze(Object.keys(t).reduce(function(d,n){return d[n]=a(e,t[n]),d},{})):Array.isArray(t)?Object.freeze(t.map(function(d){return a(e,d)})):t}function t(e,d){var a=e.types[d];if(a)return a;throw new Error('No type of '+d+' found in schema')}function n(e){return e instanceof Se}function r(e,d,a){return new Se(e,d,a)}function i(a){return Se.prototype.isPrototypeOf(a)?a.toInputValueString():Ie.prototype.isPrototypeOf(a)?a+'':be.prototype.isPrototypeOf(a)?JSON.stringify(a.valueOf()):Array.isArray(a)?'['+e.apply(void 0,Oe(a.map(i)))+']':d(a)?o(a,'{','}'):JSON.stringify(a)}function o(d){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'',t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:'',n=Object.keys(d).map(function(e){return e+': '+i(d[e])});return''+a+e.apply(void 0,Oe(n))+t}function s(e){return Object.keys(e).length?' ('+o(e)+')':''}function l(e){var d=Te,a={},t=null;if(!(2===e.length))1===e.length&&(Me.prototype.isPrototypeOf(e[0])?t=e[0]:'function'==typeof e[0]?d=e[0]:a=e[0]);else if('function'==typeof e[1]){var n=Fe(e,2);a=n[0],d=n[1]}else{var r=Fe(e,2);a=r[0],t=r[1]}return{options:a,selectionSet:t,callback:d}}function c(e){return e.some(function(e){if(Ee.prototype.isPrototypeOf(e))return'id'===e.name;return Ve.prototype.isPrototypeOf(e)&&e.selectionSet.typeSchema.implementsNode&&c(e.selectionSet.selections)})}function p(e){return e.some(function(e){if(Ee.prototype.isPrototypeOf(e))return'__typename'===e.name;return Ve.prototype.isPrototypeOf(e)&&e.selectionSet.typeSchema.implementsNode&&p(e.selectionSet.selections)})}function u(e){function d(e,d,a){Array.isArray(e[d])?e[d].push(a):e[d]=[a]}var a=e.reduce(function(e,a){if(a.responseKey)d(e,a.responseKey,a);else{var t=Object.keys(a.selectionSet.selectionsByResponseKey);t.forEach(function(t){d(e,t,a)})}return e},{});return Object.keys(a).forEach(function(e){Object.freeze(a[e])}),Object.freeze(a)}function g(e){var d,a,t;if(3===e.length){var n=Fe(e,3);d=n[0],a=n[1],t=n[2]}else 2===e.length?('[object String]'===Object.prototype.toString.call(e[0])?(d=e[0],a=null):Array.isArray(e[0])&&(a=e[0],d=null),t=e[1]):(t=e[0],d=null);return{name:d,variables:a,selectionSetCallback:t}}function m(e){return e.isAnonymous}function y(e){return e.some(m)}function h(e){var d=e.map(function(e){return e.name});return d.reduce(function(e,a,t){return e||d.indexOf(a)!==t},!1)}function f(e,d){for(var a=arguments.length,t=Array(2<a?a-2:0),n=2;n<a;n++)t[n-2]=arguments[n];return Ke.prototype.isPrototypeOf(t[0])?t[0]:'query'===d?new(Function.prototype.bind.apply(we,[null].concat([e],t))):new(Function.prototype.bind.apply(Je,[null].concat([e],t)))}function _(e){return 1!==e.length&&(y(e)||h(e))}function P(e,d){return e.some(function(e){return e.name===d})}function k(e){return'[object Null]'!==Object.prototype.toString.call(e)&&'[object Undefined]'!==Object.prototype.toString.call(e)}function v(e){return e.selection.selectionSet.typeSchema.implementsNode}function C(e){return e.selection.selectionSet.typeSchema.name.endsWith('Connection')}function F(e){return null==e?null:v(e)?e:F(e.parent)}function O(e){return e.parent?O(e.parent).concat(e):[e]}function S(e){return e.selection.selectionSet.typeSchema.implementsNode?[e]:S(e.parent).concat(e)}function I(e,d){var a=d[d.length-1],t=a.selection.args.first,n=Object.keys(a.selection.args).filter(function(e){return Se.prototype.isPrototypeOf(a.selection.args[e])}).map(function(e){return a.selection.args[e]}),i=n.find(function(e){return'first'===e.name});i||(i=r('first','Int',t),n.push(i));var o=new ze(e.selection.selectionSet.typeBundle);return[o,n,i]}function A(e,d,a,t){var n=d.shift();if(a.push(n.selection.responseKey),d.length)e.add(n.selection.name,{alias:n.selection.alias,args:n.selection.args},function(e){A(e,d,a,t)});else{var i=n.selection.selectionSet.selections.find(function(e){return'edges'===e.name}),o=i.selectionSet.selections.find(function(e){return'node'===e.name}),s=r('first','Int',n.selection.args.first),l={alias:n.selection.alias,args:Object.assign({},n.selection.args,{after:t,first:s})};e.addConnection(n.selection.name,l,o.selectionSet)}}function b(e){return e.reduce(function(e,d){return De.prototype.isPrototypeOf(d)&&e.push(d.toDefinition()),e.push.apply(e,Oe(b(d.selectionSet.selections))),e},[])}function T(e,d){var a=F(e);return a?function(){var t,n=[],r=a.selection.selectionSet.typeSchema,i=a.responseData.id,o=S(e),s=I(e,o),l=Fe(s,2),c=l[0],p=l[1];c.addQuery(p,function(e){n.push('node'),e.add('node',{args:{id:i}},function(e){e.addInlineFragmentOn(r.name,function(e){A(e,o.slice(1),n,d)})})});var u=b(c.operations[0].selectionSet.selections);return(t=c.definitions).unshift.apply(t,Oe(u)),[c,n]}:function(){var a,t=[],n=O(e),r=I(e,n),i=Fe(r,2),o=i[0],s=i[1];o.addQuery(s,function(e){A(e,n.slice(1),t,d)});var l=b(o.operations[0].selectionSet.selections);return(a=o.definitions).unshift.apply(a,Oe(l)),[o,t]}}function N(e,d){return d===e.edges[e.edges.length-1]?e.pageInfo.hasNextPage:new be(!0)}function B(e,d){return d===e.edges[0]?e.pageInfo.hasPreviousPage:new be(!0)}function x(e){return function(d,a){if(C(d)){if(!(a.pageInfo&&a.pageInfo.hasOwnProperty('hasNextPage')&&a.pageInfo.hasOwnProperty('hasPreviousPage')))throw new Error('Connections must include the selections "pageInfo { hasNextPage, hasPreviousPage }".');return a.edges.map(function(t){return Object.assign(t.node,{nextPageQueryAndPath:T(d,t.cursor),hasNextPage:N(a,t),hasPreviousPage:B(a,t),variableValues:e})})}return a}}function L(e,d){return e.responseData.map(function(a){return U(e.contextForArrayItem(a),d)})}function E(e,d){return Object.keys(e.responseData).reduce(function(a,t){return a[t]=U(e.contextForObjectProperty(t),d),a},{})}function V(e,d,a){return e.reduce(function(e,a){return a(d,e)},a)}function U(e,a){var t=e.responseData;return Array.isArray(t)?t=L(e,a):d(t)&&(t=E(e,a)),V(a,e,t)}function D(e,d){return k(d)&&v(e)&&(d.refetchQuery=function(){return new we(e.selection.selectionSet.typeBundle,function(d){d.add('node',{args:{id:e.responseData.id}},function(d){d.addInlineFragmentOn(e.selection.selectionSet.typeSchema.name,e.selection.selectionSet)})})}),d}function Q(e){return function(a,t){if(d(t)){var n=e.classForType(a.selection.selectionSet.typeSchema.name);return new n(t)}return t}}function M(e,d){if(k(d)){if('SCALAR'===e.selection.selectionSet.typeSchema.kind)return new be(d);if('ENUM'===e.selection.selectionSet.typeSchema.kind)return new Ie(d)}return d}function R(e,d){return k(d)&&(d.__typename?d.type=t(e.selection.selectionSet.typeBundle,d.__typename):d.type=e.selection.selectionSet.typeSchema),d}function q(e){var d=e.classRegistry,a=d===void 0?new je:d,t=e.variableValues;return[M,D,x(t),R,Q(a)]}function K(e,d){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},t=a.transformers||q(a),n=new We(e,d);return U(n,t)}function w(e){var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return function(a){return fetch(e,ke({body:JSON.stringify(a),method:'POST',mode:'cors'},d,{headers:ke({"Content-Type":'application/json',Accept:'application/json'},d.headers)})).then(function(e){return e.json()})}}function J(e){return e&&e.length&&e[e.length-1].hasNextPage}function z(e){var d=e.split('.');return function(e){var a=e.model;return d.reduce(function(e,d){return e[d]},a)}}function H(e,d){var a=[].concat(e);return Promise.all(a.reduce(function(e,a){return e.push(d.fetchAllPages(a.images,{pageSize:250}).then(function(e){a.attrs.images=e})),e.push(d.fetchAllPages(a.variants,{pageSize:250}).then(function(e){a.attrs.variants=e})),e},[]))}function j(e){return function(d){return H(d,e).then(function(){return d})}}function W(e){return function(d){var a=[].concat(d);return Promise.all(a.reduce(function(d,a){return d.concat(H(a.products,e))},[])).then(function(){return d})}}function X(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable('id','ID!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.ProductFragment=d.defineFragment('ProductFragment','Product',function(e){e.add('id'),e.add('createdAt'),e.add('updatedAt'),e.add('descriptionHtml'),e.add('description'),e.add('handle'),e.add('productType'),e.add('title'),e.add('vendor'),e.add('tags'),e.add('publishedAt'),e.add('onlineStoreUrl'),e.add('options',function(e){e.add('name'),e.add('values')}),e.add('images',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('src'),e.add('altText')})})}),e.add('variants',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add('node',{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.ProductFragment)})}),d}function $(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.ids=e.variable('ids','[ID!]!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.ProductFragment=d.defineFragment('ProductFragment','Product',function(e){e.add('id'),e.add('createdAt'),e.add('updatedAt'),e.add('descriptionHtml'),e.add('description'),e.add('handle'),e.add('productType'),e.add('title'),e.add('vendor'),e.add('tags'),e.add('publishedAt'),e.add('onlineStoreUrl'),e.add('options',function(e){e.add('name'),e.add('values')}),e.add('images',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('src'),e.add('altText')})})}),e.add('variants',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.ids],function(e){e.add('nodes',{args:{ids:t.__defaultOperation__.ids}},function(e){e.addFragment(a.ProductFragment)})}),d}function G(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.first=e.variable('first','Int!'),t.__defaultOperation__.query=e.variable('query','String'),t.__defaultOperation__.sortKey=e.variable('sortKey','ProductSortKeys'),t.__defaultOperation__.reverse=e.variable('reverse','Boolean'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.ProductFragment=d.defineFragment('ProductFragment','Product',function(e){e.add('id'),e.add('createdAt'),e.add('updatedAt'),e.add('descriptionHtml'),e.add('description'),e.add('handle'),e.add('productType'),e.add('title'),e.add('vendor'),e.add('tags'),e.add('publishedAt'),e.add('onlineStoreUrl'),e.add('options',function(e){e.add('name'),e.add('values')}),e.add('images',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('src'),e.add('altText')})})}),e.add('variants',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.first,t.__defaultOperation__.query,t.__defaultOperation__.sortKey,t.__defaultOperation__.reverse],function(e){e.add('shop',function(e){e.add('products',{args:{first:t.__defaultOperation__.first,query:t.__defaultOperation__.query,sortKey:t.__defaultOperation__.sortKey,reverse:t.__defaultOperation__.reverse}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.ProductFragment)})})})})}),d}function Y(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.handle=e.variable('handle','String!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.ProductFragment=d.defineFragment('ProductFragment','Product',function(e){e.add('id'),e.add('createdAt'),e.add('updatedAt'),e.add('descriptionHtml'),e.add('description'),e.add('handle'),e.add('productType'),e.add('title'),e.add('vendor'),e.add('tags'),e.add('publishedAt'),e.add('onlineStoreUrl'),e.add('options',function(e){e.add('name'),e.add('values')}),e.add('images',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('src'),e.add('altText')})})}),e.add('variants',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.handle],function(e){e.add('shop',function(e){e.add('productByHandle',{args:{handle:t.__defaultOperation__.handle}},function(e){e.addFragment(a.ProductFragment)})})}),d}function Z(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable('id','ID!'),a.CollectionFragment=d.defineFragment('CollectionFragment','Collection',function(e){e.add('id'),e.add('handle'),e.add('description'),e.add('descriptionHtml'),e.add('updatedAt'),e.add('title'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add('node',{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.CollectionFragment)})}),d}function ee(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable('id','ID!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.ProductFragment=d.defineFragment('ProductFragment','Product',function(e){e.add('id'),e.add('createdAt'),e.add('updatedAt'),e.add('descriptionHtml'),e.add('description'),e.add('handle'),e.add('productType'),e.add('title'),e.add('vendor'),e.add('tags'),e.add('publishedAt'),e.add('onlineStoreUrl'),e.add('options',function(e){e.add('name'),e.add('values')}),e.add('images',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('src'),e.add('altText')})})}),e.add('variants',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.VariantFragment)})})})}),a.CollectionFragment=d.defineFragment('CollectionFragment','Collection',function(e){e.add('id'),e.add('handle'),e.add('description'),e.add('descriptionHtml'),e.add('updatedAt'),e.add('title'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')})}),a.CollectionsProductsFragment=d.defineFragment('CollectionsProductsFragment','Collection',function(e){e.add('products',{args:{first:20}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.ProductFragment)})})})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add('node',{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.CollectionFragment),e.addFragment(a.CollectionsProductsFragment)})}),d}function de(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.first=e.variable('first','Int!'),t.__defaultOperation__.query=e.variable('query','String'),t.__defaultOperation__.sortKey=e.variable('sortKey','CollectionSortKeys'),t.__defaultOperation__.reverse=e.variable('reverse','Boolean'),a.CollectionFragment=d.defineFragment('CollectionFragment','Collection',function(e){e.add('id'),e.add('handle'),e.add('description'),e.add('descriptionHtml'),e.add('updatedAt'),e.add('title'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')})}),d.addQuery([t.__defaultOperation__.first,t.__defaultOperation__.query,t.__defaultOperation__.sortKey,t.__defaultOperation__.reverse],function(e){e.add('shop',function(e){e.add('collections',{args:{first:t.__defaultOperation__.first,query:t.__defaultOperation__.query,sortKey:t.__defaultOperation__.sortKey,reverse:t.__defaultOperation__.reverse}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.CollectionFragment)})})})})}),d}function ae(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.first=e.variable('first','Int!'),t.__defaultOperation__.query=e.variable('query','String'),t.__defaultOperation__.sortKey=e.variable('sortKey','CollectionSortKeys'),t.__defaultOperation__.reverse=e.variable('reverse','Boolean'),t.__defaultOperation__.productsFirst=e.variable('productsFirst','Int!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.CollectionFragment=d.defineFragment('CollectionFragment','Collection',function(e){e.add('id'),e.add('handle'),e.add('description'),e.add('descriptionHtml'),e.add('updatedAt'),e.add('title'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')})}),a.ProductFragment=d.defineFragment('ProductFragment','Product',function(e){e.add('id'),e.add('createdAt'),e.add('updatedAt'),e.add('descriptionHtml'),e.add('description'),e.add('handle'),e.add('productType'),e.add('title'),e.add('vendor'),e.add('tags'),e.add('publishedAt'),e.add('onlineStoreUrl'),e.add('options',function(e){e.add('name'),e.add('values')}),e.add('images',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('src'),e.add('altText')})})}),e.add('variants',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.first,t.__defaultOperation__.query,t.__defaultOperation__.sortKey,t.__defaultOperation__.reverse,t.__defaultOperation__.productsFirst],function(e){e.add('shop',function(e){e.add('collections',{args:{first:t.__defaultOperation__.first,query:t.__defaultOperation__.query,sortKey:t.__defaultOperation__.sortKey,reverse:t.__defaultOperation__.reverse}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.CollectionFragment),e.add('products',{args:{first:t.__defaultOperation__.productsFirst}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.ProductFragment)})})})})})})})}),d}function te(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.handle=e.variable('handle','String!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.ProductFragment=d.defineFragment('ProductFragment','Product',function(e){e.add('id'),e.add('createdAt'),e.add('updatedAt'),e.add('descriptionHtml'),e.add('description'),e.add('handle'),e.add('productType'),e.add('title'),e.add('vendor'),e.add('tags'),e.add('publishedAt'),e.add('onlineStoreUrl'),e.add('options',function(e){e.add('name'),e.add('values')}),e.add('images',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('src'),e.add('altText')})})}),e.add('variants',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.VariantFragment)})})})}),a.CollectionFragment=d.defineFragment('CollectionFragment','Collection',function(e){e.add('id'),e.add('handle'),e.add('description'),e.add('descriptionHtml'),e.add('updatedAt'),e.add('title'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')})}),a.CollectionsProductsFragment=d.defineFragment('CollectionsProductsFragment','Collection',function(e){e.add('products',{args:{first:20}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.addFragment(a.ProductFragment)})})})}),d.addQuery([t.__defaultOperation__.handle],function(e){e.add('shop',function(e){e.add('collectionByHandle',{args:{handle:t.__defaultOperation__.handle}},function(e){e.addFragment(a.CollectionFragment),e.addFragment(a.CollectionsProductsFragment)})})}),d}function ne(e){var d=e.document();return d.addQuery(function(e){e.add('shop',function(e){e.add('currencyCode'),e.add('description'),e.add('moneyFormat'),e.add('name'),e.add('primaryDomain',function(e){e.add('host'),e.add('sslEnabled'),e.add('url')})})}),d}function re(e){var d=e.document(),a={};return a.PolicyFragment=d.defineFragment('PolicyFragment','ShopPolicy',function(e){e.add('id'),e.add('title'),e.add('url'),e.add('body')}),d.addQuery(function(e){e.add('shop',function(e){e.add('privacyPolicy',function(e){e.addFragment(a.PolicyFragment)}),e.add('termsOfService',function(e){e.addFragment(a.PolicyFragment)}),e.add('refundPolicy',function(e){e.addFragment(a.PolicyFragment)})})}),d}function ie(e,d){return function(a){var t=a.data,n=a.model,r=t[e],i=n[e],o=r.userErrors;return o.length?Promise.reject(new Error(JSON.stringify(o))):d.fetchAllPages(i.checkout.lineItems,{pageSize:250}).then(function(e){return i.checkout.attrs.lineItems=e,i.checkout})}}function oe(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable('id','ID!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.MailingAddressFragment=d.defineFragment('MailingAddressFragment','MailingAddress',function(e){e.add('id'),e.add('address1'),e.add('address2'),e.add('city'),e.add('company'),e.add('country'),e.add('firstName'),e.add('formatted'),e.add('lastName'),e.add('latitude'),e.add('longitude'),e.add('phone'),e.add('province'),e.add('zip'),e.add('name'),e.add('countryCode'),e.add('provinceCode')}),a.CheckoutFragment=d.defineFragment('CheckoutFragment','Checkout',function(e){e.add('id'),e.add('ready'),e.add('requiresShipping'),e.add('note'),e.add('paymentDue'),e.add('webUrl'),e.add('orderStatusUrl'),e.add('taxExempt'),e.add('taxesIncluded'),e.add('currencyCode'),e.add('totalTax'),e.add('subtotalPrice'),e.add('totalPrice'),e.add('completedAt'),e.add('createdAt'),e.add('updatedAt'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('shippingLine',function(e){e.add('handle'),e.add('price'),e.add('title')}),e.add('customAttributes',function(e){e.add('key'),e.add('value')}),e.add('order',function(e){e.add('id'),e.add('processedAt'),e.add('orderNumber'),e.add('subtotalPrice'),e.add('totalShippingPrice'),e.add('totalTax'),e.add('totalPrice'),e.add('currencyCode'),e.add('totalRefunded'),e.add('customerUrl'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add('node',{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.CheckoutFragment)})}),d}function se(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.input=e.variable('input','CheckoutCreateInput!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.UserErrorFragment=d.defineFragment('UserErrorFragment','UserError',function(e){e.add('field'),e.add('message')}),a.MailingAddressFragment=d.defineFragment('MailingAddressFragment','MailingAddress',function(e){e.add('id'),e.add('address1'),e.add('address2'),e.add('city'),e.add('company'),e.add('country'),e.add('firstName'),e.add('formatted'),e.add('lastName'),e.add('latitude'),e.add('longitude'),e.add('phone'),e.add('province'),e.add('zip'),e.add('name'),e.add('countryCode'),e.add('provinceCode')}),a.CheckoutFragment=d.defineFragment('CheckoutFragment','Checkout',function(e){e.add('id'),e.add('ready'),e.add('requiresShipping'),e.add('note'),e.add('paymentDue'),e.add('webUrl'),e.add('orderStatusUrl'),e.add('taxExempt'),e.add('taxesIncluded'),e.add('currencyCode'),e.add('totalTax'),e.add('subtotalPrice'),e.add('totalPrice'),e.add('completedAt'),e.add('createdAt'),e.add('updatedAt'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('shippingLine',function(e){e.add('handle'),e.add('price'),e.add('title')}),e.add('customAttributes',function(e){e.add('key'),e.add('value')}),e.add('order',function(e){e.add('id'),e.add('processedAt'),e.add('orderNumber'),e.add('subtotalPrice'),e.add('totalShippingPrice'),e.add('totalTax'),e.add('totalPrice'),e.add('currencyCode'),e.add('totalRefunded'),e.add('customerUrl'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),d.addMutation([t.__defaultOperation__.input],function(e){e.add('checkoutCreate',{args:{input:t.__defaultOperation__.input}},function(e){e.add('userErrors',function(e){e.addFragment(a.UserErrorFragment)}),e.add('checkout',function(e){e.addFragment(a.CheckoutFragment)})})}),d}function le(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.checkoutId=e.variable('checkoutId','ID!'),t.__defaultOperation__.lineItems=e.variable('lineItems','[CheckoutLineItemInput!]!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.UserErrorFragment=d.defineFragment('UserErrorFragment','UserError',function(e){e.add('field'),e.add('message')}),a.MailingAddressFragment=d.defineFragment('MailingAddressFragment','MailingAddress',function(e){e.add('id'),e.add('address1'),e.add('address2'),e.add('city'),e.add('company'),e.add('country'),e.add('firstName'),e.add('formatted'),e.add('lastName'),e.add('latitude'),e.add('longitude'),e.add('phone'),e.add('province'),e.add('zip'),e.add('name'),e.add('countryCode'),e.add('provinceCode')}),a.CheckoutFragment=d.defineFragment('CheckoutFragment','Checkout',function(e){e.add('id'),e.add('ready'),e.add('requiresShipping'),e.add('note'),e.add('paymentDue'),e.add('webUrl'),e.add('orderStatusUrl'),e.add('taxExempt'),e.add('taxesIncluded'),e.add('currencyCode'),e.add('totalTax'),e.add('subtotalPrice'),e.add('totalPrice'),e.add('completedAt'),e.add('createdAt'),e.add('updatedAt'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('shippingLine',function(e){e.add('handle'),e.add('price'),e.add('title')}),e.add('customAttributes',function(e){e.add('key'),e.add('value')}),e.add('order',function(e){e.add('id'),e.add('processedAt'),e.add('orderNumber'),e.add('subtotalPrice'),e.add('totalShippingPrice'),e.add('totalTax'),e.add('totalPrice'),e.add('currencyCode'),e.add('totalRefunded'),e.add('customerUrl'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),d.addMutation([t.__defaultOperation__.checkoutId,t.__defaultOperation__.lineItems],function(e){e.add('checkoutLineItemsAdd',{args:{checkoutId:t.__defaultOperation__.checkoutId,lineItems:t.__defaultOperation__.lineItems}},function(e){e.add('userErrors',function(e){e.addFragment(a.UserErrorFragment)}),e.add('checkout',function(e){e.addFragment(a.CheckoutFragment)})})}),d}function ce(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.checkoutId=e.variable('checkoutId','ID!'),t.__defaultOperation__.lineItemIds=e.variable('lineItemIds','[ID!]!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.UserErrorFragment=d.defineFragment('UserErrorFragment','UserError',function(e){e.add('field'),e.add('message')}),a.MailingAddressFragment=d.defineFragment('MailingAddressFragment','MailingAddress',function(e){e.add('id'),e.add('address1'),e.add('address2'),e.add('city'),e.add('company'),e.add('country'),e.add('firstName'),e.add('formatted'),e.add('lastName'),e.add('latitude'),e.add('longitude'),e.add('phone'),e.add('province'),e.add('zip'),e.add('name'),e.add('countryCode'),e.add('provinceCode')}),a.CheckoutFragment=d.defineFragment('CheckoutFragment','Checkout',function(e){e.add('id'),e.add('ready'),e.add('requiresShipping'),e.add('note'),e.add('paymentDue'),e.add('webUrl'),e.add('orderStatusUrl'),e.add('taxExempt'),e.add('taxesIncluded'),e.add('currencyCode'),e.add('totalTax'),e.add('subtotalPrice'),e.add('totalPrice'),e.add('completedAt'),e.add('createdAt'),e.add('updatedAt'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('shippingLine',function(e){e.add('handle'),e.add('price'),e.add('title')}),e.add('customAttributes',function(e){e.add('key'),e.add('value')}),e.add('order',function(e){e.add('id'),e.add('processedAt'),e.add('orderNumber'),e.add('subtotalPrice'),e.add('totalShippingPrice'),e.add('totalTax'),e.add('totalPrice'),e.add('currencyCode'),e.add('totalRefunded'),e.add('customerUrl'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),d.addMutation([t.__defaultOperation__.checkoutId,t.__defaultOperation__.lineItemIds],function(e){e.add('checkoutLineItemsRemove',{args:{checkoutId:t.__defaultOperation__.checkoutId,lineItemIds:t.__defaultOperation__.lineItemIds}},function(e){e.add('userErrors',function(e){e.addFragment(a.UserErrorFragment)}),e.add('checkout',function(e){e.addFragment(a.CheckoutFragment)})})}),d}function pe(e){var d=e.document(),a={},t={};return t.__defaultOperation__={},t.__defaultOperation__.checkoutId=e.variable('checkoutId','ID!'),t.__defaultOperation__.lineItems=e.variable('lineItems','[CheckoutLineItemUpdateInput!]!'),a.VariantFragment=d.defineFragment('VariantFragment','ProductVariant',function(e){e.add('id'),e.add('title'),e.add('price'),e.add('weight'),e.add('available'),e.add('compareAtPrice'),e.add('image',function(e){e.add('id'),e.add('src'),e.add('altText')}),e.add('selectedOptions',function(e){e.add('name'),e.add('value')})}),a.UserErrorFragment=d.defineFragment('UserErrorFragment','UserError',function(e){e.add('field'),e.add('message')}),a.MailingAddressFragment=d.defineFragment('MailingAddressFragment','MailingAddress',function(e){e.add('id'),e.add('address1'),e.add('address2'),e.add('city'),e.add('company'),e.add('country'),e.add('firstName'),e.add('formatted'),e.add('lastName'),e.add('latitude'),e.add('longitude'),e.add('phone'),e.add('province'),e.add('zip'),e.add('name'),e.add('countryCode'),e.add('provinceCode')}),a.CheckoutFragment=d.defineFragment('CheckoutFragment','Checkout',function(e){e.add('id'),e.add('ready'),e.add('requiresShipping'),e.add('note'),e.add('paymentDue'),e.add('webUrl'),e.add('orderStatusUrl'),e.add('taxExempt'),e.add('taxesIncluded'),e.add('currencyCode'),e.add('totalTax'),e.add('subtotalPrice'),e.add('totalPrice'),e.add('completedAt'),e.add('createdAt'),e.add('updatedAt'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('shippingLine',function(e){e.add('handle'),e.add('price'),e.add('title')}),e.add('customAttributes',function(e){e.add('key'),e.add('value')}),e.add('order',function(e){e.add('id'),e.add('processedAt'),e.add('orderNumber'),e.add('subtotalPrice'),e.add('totalShippingPrice'),e.add('totalTax'),e.add('totalPrice'),e.add('currencyCode'),e.add('totalRefunded'),e.add('customerUrl'),e.add('shippingAddress',function(e){e.addFragment(a.MailingAddressFragment)}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),e.add('lineItems',{args:{first:250}},function(e){e.add('pageInfo',function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',function(e){e.add('cursor'),e.add('node',function(e){e.add('id'),e.add('title'),e.add('variant',function(e){e.addFragment(a.VariantFragment)}),e.add('quantity'),e.add('customAttributes',function(e){e.add('key'),e.add('value')})})})})}),d.addMutation([t.__defaultOperation__.checkoutId,t.__defaultOperation__.lineItems],function(e){e.add('checkoutLineItemsUpdate',{args:{checkoutId:t.__defaultOperation__.checkoutId,lineItems:t.__defaultOperation__.lineItems}},function(e){e.add('userErrors',function(e){e.addFragment(a.UserErrorFragment)}),e.add('checkout',function(e){e.addFragment(a.CheckoutFragment)})})}),d}function ue(e){return Object.getOwnPropertyNames(e).forEach(function(d){var a=e[d];a&&'object'===('undefined'==typeof a?'undefined':ge(a))&&ue(a)}),Object.freeze(e),e}var ge='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},me=function(e,d){if(!(e instanceof d))throw new TypeError('Cannot call a class as a function')},ye=function(){function e(e,d){for(var a,t=0;t<d.length;t++)a=d[t],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(d,a,t){return a&&e(d.prototype,a),t&&e(d,t),d}}(),he=function(e,d){if('function'!=typeof d&&null!==d)throw new TypeError('Super expression must either be null or a function, not '+typeof d);e.prototype=Object.create(d&&d.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(e,d):e.__proto__=d)},fe=function(e,d){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return d&&('object'==typeof d||'function'==typeof d)?d:e},_e=function(e,d){if(!(e instanceof d))throw new TypeError('Cannot call a class as a function')},Pe=function(){function e(e,d){for(var a,t=0;t<d.length;t++)a=d[t],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(d,a,t){return a&&e(d.prototype,a),t&&e(d,t),d}}(),ke=Object.assign||function(e){for(var d,a=1;a<arguments.length;a++)for(var t in d=arguments[a],d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);return e},ve=function(e,d){if('function'!=typeof d&&null!==d)throw new TypeError('Super expression must either be null or a function, not '+('undefined'==typeof d?'undefined':ge(d)));e.prototype=Object.create(d&&d.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(e,d):e.__proto__=d)},Ce=function(e,d){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return d&&('object'===('undefined'==typeof d?'undefined':ge(d))||'function'==typeof d)?d:e},Fe=function(){function e(e,d){var a,t=[],n=!0,r=!1;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(t.push(i.value),!(d&&t.length===d));n=!0);}catch(e){r=!0,a=e}finally{try{!n&&o['return']&&o['return']()}finally{if(r)throw a}}return t}return function(d,a){if(Array.isArray(d))return d;if(Symbol.iterator in Object(d))return e(d,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),Oe=function(e){if(Array.isArray(e)){for(var d=0,a=Array(e.length);d<e.length;d++)a[d]=e[d];return a}return Array.from(e)},Se=function(){function e(d,a,t){_e(this,e),this.name=d,this.type=a,this.defaultValue=t,Object.freeze(this)}return Pe(e,[{key:'toInputValueString',value:function(){return'$'+this.name}},{key:'toString',value:function(){var e=this.defaultValue?' = '+i(this.defaultValue):'';return'$'+this.name+':'+this.type+e}}]),e}(),Ie=function(){function e(d){_e(this,e),this.key=d}return Pe(e,[{key:'toString',value:function(){return this.key}},{key:'valueOf',value:function(){return this.key.valueOf()}}]),e}(),Ae=function(e){return new Ie(e)},be=function(){function e(d){_e(this,e),this.value=d}return Pe(e,[{key:'toString',value:function(){return this.value.toString()}},{key:'valueOf',value:function(){return this.value.valueOf()}},{key:'unwrapped',get:function(){return this.value}}]),e}(),Te=function(){},Ne={trackTypeDependency:Te,trackFieldDependency:Te},Be=Ne.trackTypeDependency,xe=Ne.trackFieldDependency,Le=Object.freeze({}),Ee=function(){function e(d,t,r){_e(this,e),this.name=d,this.alias=t.alias||null,this.responseKey=this.alias||this.name,this.args=t.args?a(n,t.args):Le,this.selectionSet=r,Object.freeze(this)}return Pe(e,[{key:'toString',value:function(){var e=this.alias?this.alias+': ':'';return''+e+this.name+s(this.args)+this.selectionSet}}]),e}(),Ve=function e(){_e(this,e)},Ue=function(e){function d(e,a){_e(this,d);var t=Ce(this,(d.__proto__||Object.getPrototypeOf(d)).call(this));return t.typeName=e,t.selectionSet=a,Object.freeze(t),t}return ve(d,e),Pe(d,[{key:'toString',value:function(){return'... on '+this.typeName+this.selectionSet}}]),d}(Ve),De=function(e){function d(e){_e(this,d);var a=Ce(this,(d.__proto__||Object.getPrototypeOf(d)).call(this));return a.name=e.name,a.selectionSet=e.selectionSet,Object.freeze(a),a}return ve(d,e),Pe(d,[{key:'toString',value:function(){return'...'+this.name}},{key:'toDefinition',value:function(){return new Qe(this.name,this.selectionSet.typeSchema.name,this.selectionSet)}}]),d}(Ve),Qe=function(){function e(d,a,t){_e(this,e),this.name=d,this.typeName=a,this.selectionSet=t,this.spread=new De(this),Object.freeze(this)}return Pe(e,[{key:'toString',value:function(){return'fragment '+this.name+' on '+this.typeName+' '+this.selectionSet}}]),e}(),Me=function(){function d(e,a,n){_e(this,d),this.typeSchema='string'==typeof a?t(e,a):a,Be(this.typeSchema.name),this.typeBundle=e,this.selections=[],n&&n(new Re(this.typeBundle,this.typeSchema,this.selections)),(this.typeSchema.implementsNode||'Node'===this.typeSchema.name)&&!c(this.selections)&&this.selections.unshift(new Ee('id',{},new d(e,'ID'))),'INTERFACE'!==this.typeSchema.kind||p(this.selections)||this.selections.unshift(new Ee('__typename',{},new d(e,'String'))),this.selectionsByResponseKey=u(this.selections),Object.freeze(this.selections),Object.freeze(this)}return Pe(d,[{key:'toString',value:function(){return'SCALAR'===this.typeSchema.kind||'ENUM'===this.typeSchema.kind?'':' { '+e(this.selections)+' }'}}]),d}(),Re=function(){function e(d,a,t){_e(this,e),this.typeBundle=d,this.typeSchema=a,this.selections=t}return Pe(e,[{key:'hasSelectionWithResponseKey',value:function(e){return this.selections.some(function(d){return d.responseKey===e})}},{key:'add',value:function(e){var d;if('[object String]'===Object.prototype.toString.call(e)){xe(this.typeSchema.name,e);for(var a=arguments.length,t=Array(1<a?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];d=this.field.apply(this,[e].concat(t))}else Ee.prototype.isPrototypeOf(e)&&xe(this.typeSchema.name,e.name),d=e;if(d.responseKey&&this.hasSelectionWithResponseKey(d.responseKey))throw new Error('The field name or alias \''+d.responseKey+'\' has already been added.');this.selections.push(d)}},{key:'field',value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),n=1;n<d;n++)a[n-1]=arguments[n];var r=l(a),i=r.options,o=r.callback,s=r.selectionSet;if(!s){if(!this.typeSchema.fieldBaseTypes[e])throw new Error('No field of name "'+e+'" found on type "'+this.typeSchema.name+'" in schema');var c=t(this.typeBundle,this.typeSchema.fieldBaseTypes[e]);s=new Me(this.typeBundle,c,o)}return new Ee(e,i,s)}},{key:'inlineFragmentOn',value:function(e){var d,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Te;return d=Me.prototype.isPrototypeOf(a)?a:new Me(this.typeBundle,t(this.typeBundle,e),a),new Ue(e,d)}},{key:'addField',value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),t=1;t<d;t++)a[t-1]=arguments[t];this.add.apply(this,[e].concat(a))}},{key:'addConnection',value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),t=1;t<d;t++)a[t-1]=arguments[t];var n=l(a),r=n.options,i=n.callback,o=n.selectionSet;this.add(e,r,function(e){e.add('pageInfo',{},function(e){e.add('hasNextPage'),e.add('hasPreviousPage')}),e.add('edges',{},function(e){e.add('cursor'),e.addField('node',{},o||i)})})}},{key:'addInlineFragmentOn',value:function(e){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Te;this.add(this.inlineFragmentOn(e,d))}},{key:'addFragment',value:function(e){this.add(e)}}]),e}(),qe=function(){function d(e){_e(this,d),this.variableDefinitions=e?[].concat(Oe(e)):[],Object.freeze(this.variableDefinitions),Object.freeze(this)}return Pe(d,[{key:'toString',value:function(){return 0===this.variableDefinitions.length?'':' ('+e(this.variableDefinitions)+') '}}]),d}(),Ke=function(){function e(d,a){_e(this,e);for(var n=arguments.length,r=Array(2<n?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=g(r),s=o.name,l=o.variables,c=o.selectionSetCallback;this.typeBundle=d,this.name=s,this.variableDefinitions=new qe(l),this.operationType=a,'query'===a?(this.selectionSet=new Me(d,d.queryType,c),this.typeSchema=t(d,d.queryType)):(this.selectionSet=new Me(d,d.mutationType,c),this.typeSchema=t(d,d.mutationType)),Object.freeze(this)}return Pe(e,[{key:'toString',value:function(){var e=this.name?' '+this.name:'';return''+this.operationType+e+this.variableDefinitions+this.selectionSet}},{key:'isAnonymous',get:function(){return!this.name}}]),e}(),we=function(e){function d(e){var a;_e(this,d);for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ce(this,(a=d.__proto__||Object.getPrototypeOf(d)).call.apply(a,[this,e,'query'].concat(n)))}return ve(d,e),d}(Ke),Je=function(e){function d(e){var a;_e(this,d);for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Ce(this,(a=d.__proto__||Object.getPrototypeOf(d)).call.apply(a,[this,e,'mutation'].concat(n)))}return ve(d,e),d}(Ke),ze=function(){function d(e){_e(this,d),this.typeBundle=e,this.definitions=[]}return Pe(d,[{key:'toString',value:function(){return e(this.definitions)}},{key:'addOperation',value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),t=1;t<d;t++)a[t-1]=arguments[t];var n=f.apply(void 0,[this.typeBundle,e].concat(a));if(_(this.operations.concat(n)))throw new Error('All operations must be uniquely named on a multi-operation document');this.definitions.push(n)}},{key:'addQuery',value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];this.addOperation.apply(this,['query'].concat(d))}},{key:'addMutation',value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];this.addOperation.apply(this,['mutation'].concat(d))}},{key:'defineFragment',value:function(e,d,a){if(P(this.fragmentDefinitions,e))throw new Error('All fragments must be uniquely named on a multi-fragment document');var t=new Me(this.typeBundle,d,a),n=new Qe(e,d,t);return this.definitions.push(n),n.spread}},{key:'operations',get:function(){return this.definitions.filter(function(e){return Ke.prototype.isPrototypeOf(e)})}},{key:'fragmentDefinitions',get:function(){return this.definitions.filter(function(e){return Qe.prototype.isPrototypeOf(e)})}}]),d}(),He=function e(d){var a=this;_e(this,e),Object.defineProperty(this,'attrs',{value:d,enumerable:!1}),Object.keys(this.attrs).filter(function(e){return!(e in a)}).forEach(function(e){var t;t=null===d[e]?{enumerable:!0,get:function(){return null}}:{enumerable:!0,get:function(){return this.attrs[e].valueOf()}},Object.defineProperty(a,e,t)})},je=function(){function e(){_e(this,e),this.classStore={}}return Pe(e,[{key:'registerClassForType',value:function(e,d){this.classStore[d]=e}},{key:'unregisterClassForType',value:function(e){delete this.classStore[e]}},{key:'classForType',value:function(e){return this.classStore[e]||He}}]),e}(),We=function(){function e(d,a){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;_e(this,e),this.selection=d,this.responseData=a,this.parent=t,Object.freeze(this)}return Pe(e,[{key:'contextForObjectProperty',value:function(d){var a,t=this.selection.selectionSet.selectionsByResponseKey[d],n=t&&t[0];if(a=Ve.prototype.isPrototypeOf(n)?new e(n,this.responseData,this.parent):new e(n,this.responseData[d],this),!n)throw new Error('Unexpected response key "'+d+'", not found in selection set: '+this.selection.selectionSet);return Ee.prototype.isPrototypeOf(n)?a:a.contextForObjectProperty(d)}},{key:'contextForArrayItem',value:function(d){return new e(this.selection,d,this.parent)}}]),e}(),Xe=function(){function e(d,a){var t=a.url,n=a.fetcherOptions,r=a.fetcher,i=a.registry,o=void 0===i?new je:i;if(_e(this,e),this.typeBundle=d,this.classRegistry=o,t&&r)throw new Error('Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.');if(t)this.fetcher=w(t,n);else if(r){if(n)throw new Error('Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`');this.fetcher=r}else throw new Error('Invalid arguments: one of `url` or `fetcher` is needed.')}return Pe(e,[{key:'document',value:function(){return new ze(this.typeBundle)}},{key:'query',value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];return new(Function.prototype.bind.apply(we,[null].concat([this.typeBundle],d)))}},{key:'mutation',value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];return new(Function.prototype.bind.apply(Je,[null].concat([this.typeBundle],d)))}},{key:'send',value:function(e){var d,a=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;d=Function.prototype.isPrototypeOf(e)?e(this):e;var r={query:d.toString()};t&&(r.variables=t),Object.assign(r,n);var i;if(Ke.prototype.isPrototypeOf(d))i=d;else{var o=d;if(1===o.operations.length)i=o.operations[0];else if(n.operationName)i=o.operations.find(function(e){return e.name===n.operationName});else throw new Error('\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: \'myFancyQuery\'});\n        ')}return this.fetcher(r).then(function(e){return e.data&&(e.model=K(i,e.data,{classRegistry:a.classRegistry,variableValues:t})),e})}},{key:'fetchNextPage',value:function(e,d){var a=Array.isArray(e)?e[e.length-1]:e;var t,n=a.nextPageQueryAndPath(),r=Fe(n,2),i=r[0],o=r[1];return(a.variableValues||d)&&(t=Object.assign({},a.variableValues,d)),this.send(i,t).then(function(e){return e.model=o.reduce(function(e,d){return e[d]},e.model),e})}},{key:'fetchAllPages',value:function(e,d){var a=this,t=d.pageSize;return J(e)?this.fetchNextPage(e,{first:t}).then(function(d){var n=d.model,r=e.concat(n);return a.fetchAllPages(r,{pageSize:t})}):Promise.resolve(e)}},{key:'refetch',value:function(e){if(!e)throw new Error('\'client#refetch\' must be called with a non-null instance of a Node.');else if(!e.type.implementsNode)throw new Error('\'client#refetch\' must be called with a type that implements Node. Received '+e.type.name+'.');return this.send(e.refetchQuery()).then(function(e){var d=e.model;return d.node})}},{key:'variable',value:function(e,d,a){return r(e,d,a)}},{key:'enum',value:function(e){return Ae(e)}}]),e}(),$e=function(){function e(d){var a=this;me(this,e),Object.keys(this.deprecatedProperties).forEach(function(e){d.hasOwnProperty(e)&&(console.warn('[ShopifyBuy] Config property '+e+' is deprecated as of v1.0, please use '+a.deprecatedProperties[e]+' instead.'),d[a.deprecatedProperties[e]]=d[e])}),this.requiredProperties.forEach(function(e){if(d.hasOwnProperty(e))a[e]=d[e];else throw new Error('new Config() requires the option \''+e+'\'')})}return ye(e,[{key:'requiredProperties',get:function(){return['storefrontAccessToken','domain']}},{key:'deprecatedProperties',get:function(){return{accessToken:'storefrontAccessToken',apiKey:'storefrontAccessToken'}}}]),e}(),Ge=function e(d){me(this,e),this.graphQLClient=d},Ye={variantForOptions:function(e,d){return e.variants.find(function(e){return e.selectedOptions.every(function(e){return d[e.name]===e.value.valueOf()})})}},Ze=function(e){function d(){return me(this,d),fe(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return he(d,e),ye(d,[{key:'fetchAll',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:20;return this.graphQLClient.send(G,{first:e}).then(z('shop.products')).then(j(this.graphQLClient))}},{key:'fetch',value:function(e){return this.graphQLClient.send(X,{id:e}).then(z('node')).then(j(this.graphQLClient))}},{key:'fetchMultiple',value:function(e){return this.graphQLClient.send($,{ids:e}).then(z('nodes')).then(j(this.graphQLClient))}},{key:'fetchByHandle',value:function(e){return this.graphQLClient.send(Y,{handle:e}).then(z('shop.productByHandle')).then(j(this.graphQLClient))}},{key:'fetchQuery',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=e.first,a=void 0===d?20:d,t=e.sortKey,n=void 0===t?'ID':t,r=e.query,i=e.reverse;return this.graphQLClient.send(G,{first:a,sortKey:n,query:r,reverse:i}).then(z('shop.products')).then(j(this.graphQLClient))}},{key:'helpers',get:function(){return Ye}}]),d}(Ge),ed=function(e){function d(){return me(this,d),fe(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return he(d,e),ye(d,[{key:'fetchAll',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:20;return this.graphQLClient.send(de,{first:e}).then(z('shop.collections'))}},{key:'fetchAllWithProducts',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=e.first,a=void 0===d?20:d,t=e.productsFirst,n=void 0===t?20:t;return this.graphQLClient.send(ae,{first:a,productsFirst:n}).then(z('shop.collections')).then(W(this.graphQLClient))}},{key:'fetch',value:function(e){return this.graphQLClient.send(Z,{id:e}).then(z('node'))}},{key:'fetchWithProducts',value:function(e){return this.graphQLClient.send(ee,{id:e}).then(z('node')).then(W(this.graphQLClient))}},{key:'fetchByHandle',value:function(e){return this.graphQLClient.send(te,{handle:e}).then(z('shop.collectionByHandle'))}},{key:'fetchQuery',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=e.first,a=void 0===d?20:d,t=e.sortKey,n=void 0===t?'ID':t,r=e.query,i=e.reverse;return this.graphQLClient.send(de,{first:a,sortKey:n,query:r,reverse:i}).then(z('shop.collections'))}}]),d}(Ge),dd=function(e){function d(){return me(this,d),fe(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return he(d,e),ye(d,[{key:'fetchInfo',value:function(){return this.graphQLClient.send(ne).then(z('shop'))}},{key:'fetchPolicies',value:function(){return this.graphQLClient.send(re).then(z('shop'))}}]),d}(Ge),ad=function(e){function d(){return me(this,d),fe(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return he(d,e),ye(d,[{key:'fetch',value:function(e){var d=this;return this.graphQLClient.send(oe,{id:e}).then(z('node')).then(function(e){return d.graphQLClient.fetchAllPages(e.lineItems,{pageSize:250}).then(function(d){return e.attrs.lineItems=d,e})})}},{key:'create',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.graphQLClient.send(se,{input:e}).then(ie('checkoutCreate',this.graphQLClient))}},{key:'addLineItems',value:function(e,d){return this.graphQLClient.send(le,{checkoutId:e,lineItems:d}).then(ie('checkoutLineItemsAdd',this.graphQLClient))}},{key:'removeLineItems',value:function(e,d){return this.graphQLClient.send(ce,{checkoutId:e,lineItemIds:d}).then(ie('checkoutLineItemsRemove',this.graphQLClient))}},{key:'updateLineItems',value:function(e,d){return this.graphQLClient.send(pe,{checkoutId:e,lineItems:d}).then(ie('checkoutLineItemsUpdate',this.graphQLClient))}}]),d}(Ge),td={imageForSize:function(e,d){var a=d.maxWidth,t=d.maxHeight,n=e.src.split('?'),r=n[0],i=n[1]?'?'+n[1]:'',o=r.split('.'),s=o.length-2;return o[s]=o[s]+'_'+a+'x'+t,''+o.join('.')+i}},nd=function(e){function d(){return me(this,d),fe(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return he(d,e),ye(d,[{key:'helpers',get:function(){return td}}]),d}(Ge),rd={types:{}};rd.types.QueryRoot={name:'QueryRoot',kind:'OBJECT',fieldBaseTypes:{node:'Node',nodes:'Node',shop:'Shop'},implementsNode:!1},rd.types.Node={name:'Node',kind:'INTERFACE',fieldBaseTypes:{},possibleTypes:['AppliedGiftCard','Article','Blog','Checkout','CheckoutLineItem','Collection','Comment','MailingAddress','Order','Payment','Product','ProductOption','ProductVariant','ShopPolicy']},rd.types.ID={name:'ID',kind:'SCALAR'},rd.types.String={name:'String',kind:'SCALAR'},rd.types.Boolean={name:'Boolean',kind:'SCALAR'},rd.types.DateTime={name:'DateTime',kind:'SCALAR'},rd.types.MailingAddress={name:'MailingAddress',kind:'OBJECT',fieldBaseTypes:{address1:'String',address2:'String',city:'String',company:'String',country:'String',countryCode:'String',firstName:'String',formatted:'String',id:'ID',lastName:'String',latitude:'Float',longitude:'Float',name:'String',phone:'String',province:'String',provinceCode:'String',zip:'String'},implementsNode:!0},rd.types.Float={name:'Float',kind:'SCALAR'},rd.types.PageInfo={name:'PageInfo',kind:'OBJECT',fieldBaseTypes:{hasNextPage:'Boolean',hasPreviousPage:'Boolean'},implementsNode:!1},rd.types.Int={name:'Int',kind:'SCALAR'},rd.types.Order={name:'Order',kind:'OBJECT',fieldBaseTypes:{currencyCode:'CurrencyCode',customerUrl:'URL',id:'ID',lineItems:'OrderLineItemConnection',orderNumber:'Int',processedAt:'DateTime',shippingAddress:'MailingAddress',subtotalPrice:'Money',totalPrice:'Money',totalRefunded:'Money',totalShippingPrice:'Money',totalTax:'Money'},implementsNode:!0},rd.types.Money={name:'Money',kind:'SCALAR'},rd.types.CurrencyCode={name:'CurrencyCode',kind:'ENUM'},rd.types.URL={name:'URL',kind:'SCALAR'},rd.types.OrderLineItemConnection={name:'OrderLineItemConnection',kind:'OBJECT',fieldBaseTypes:{edges:'OrderLineItemEdge',pageInfo:'PageInfo'},implementsNode:!1},rd.types.OrderLineItemEdge={name:'OrderLineItemEdge',kind:'OBJECT',fieldBaseTypes:{cursor:'String',node:'OrderLineItem'},implementsNode:!1},rd.types.OrderLineItem={name:'OrderLineItem',kind:'OBJECT',fieldBaseTypes:{customAttributes:'Attribute',quantity:'Int',title:'String',variant:'ProductVariant'},implementsNode:!1},rd.types.ProductVariant={name:'ProductVariant',kind:'OBJECT',fieldBaseTypes:{available:'Boolean',compareAtPrice:'Money',id:'ID',image:'Image',price:'Money',selectedOptions:'SelectedOption',title:'String',weight:'Float'},implementsNode:!0},rd.types.Image={name:'Image',kind:'OBJECT',fieldBaseTypes:{altText:'String',id:'ID',src:'URL'},implementsNode:!1},rd.types.SelectedOption={name:'SelectedOption',kind:'OBJECT',fieldBaseTypes:{name:'String',value:'String'},implementsNode:!1},rd.types.Product={name:'Product',kind:'OBJECT',fieldBaseTypes:{createdAt:'DateTime',description:'String',descriptionHtml:'HTML',handle:'String',id:'ID',images:'ImageConnection',onlineStoreUrl:'URL',options:'ProductOption',productType:'String',publishedAt:'DateTime',tags:'String',title:'String',updatedAt:'DateTime',variants:'ProductVariantConnection',vendor:'String'},implementsNode:!0},rd.types.CollectionConnection={name:'CollectionConnection',kind:'OBJECT',fieldBaseTypes:{edges:'CollectionEdge',pageInfo:'PageInfo'},implementsNode:!1},rd.types.CollectionEdge={name:'CollectionEdge',kind:'OBJECT',fieldBaseTypes:{cursor:'String',node:'Collection'},implementsNode:!1},rd.types.Collection={name:'Collection',kind:'OBJECT',fieldBaseTypes:{description:'String',descriptionHtml:'HTML',handle:'String',id:'ID',image:'Image',products:'ProductConnection',title:'String',updatedAt:'DateTime'},implementsNode:!0},rd.types.HTML={name:'HTML',kind:'SCALAR'},rd.types.ProductConnection={name:'ProductConnection',kind:'OBJECT',fieldBaseTypes:{edges:'ProductEdge',pageInfo:'PageInfo'},implementsNode:!1},rd.types.ProductEdge={name:'ProductEdge',kind:'OBJECT',fieldBaseTypes:{cursor:'String',node:'Product'},implementsNode:!1},rd.types.ImageConnection={name:'ImageConnection',kind:'OBJECT',fieldBaseTypes:{edges:'ImageEdge',pageInfo:'PageInfo'},implementsNode:!1},rd.types.ImageEdge={name:'ImageEdge',kind:'OBJECT',fieldBaseTypes:{cursor:'String',node:'Image'},implementsNode:!1},rd.types.ProductOption={name:'ProductOption',kind:'OBJECT',fieldBaseTypes:{name:'String',values:'String'},implementsNode:!0},rd.types.ProductVariantConnection={name:'ProductVariantConnection',kind:'OBJECT',fieldBaseTypes:{edges:'ProductVariantEdge',pageInfo:'PageInfo'},implementsNode:!1},rd.types.ProductVariantEdge={name:'ProductVariantEdge',kind:'OBJECT',fieldBaseTypes:{cursor:'String',node:'ProductVariant'},implementsNode:!1},rd.types.Attribute={name:'Attribute',kind:'OBJECT',fieldBaseTypes:{key:'String',value:'String'},implementsNode:!1},rd.types.Shop={name:'Shop',kind:'OBJECT',fieldBaseTypes:{collectionByHandle:'Collection',collections:'CollectionConnection',currencyCode:'CurrencyCode',description:'String',moneyFormat:'String',name:'String',primaryDomain:'Domain',privacyPolicy:'ShopPolicy',productByHandle:'Product',products:'ProductConnection',refundPolicy:'ShopPolicy',termsOfService:'ShopPolicy'},implementsNode:!1},rd.types.Domain={name:'Domain',kind:'OBJECT',fieldBaseTypes:{host:'String',sslEnabled:'Boolean',url:'URL'},implementsNode:!1},rd.types.ShopPolicy={name:'ShopPolicy',kind:'OBJECT',fieldBaseTypes:{body:'String',id:'ID',title:'String',url:'URL'},implementsNode:!0},rd.types.Mutation={name:'Mutation',kind:'OBJECT',fieldBaseTypes:{checkoutCreate:'CheckoutCreatePayload',checkoutLineItemsAdd:'CheckoutLineItemsAddPayload',checkoutLineItemsRemove:'CheckoutLineItemsRemovePayload',checkoutLineItemsUpdate:'CheckoutLineItemsUpdatePayload'},implementsNode:!1,relayInputObjectBaseTypes:{checkoutAttributesUpdate:'CheckoutAttributesUpdateInput',checkoutCreate:'CheckoutCreateInput',customerAccessTokenCreate:'CustomerAccessTokenCreateInput',customerActivate:'CustomerActivateInput',customerCreate:'CustomerCreateInput',customerReset:'CustomerResetInput'}},rd.types.UserError={name:'UserError',kind:'OBJECT',fieldBaseTypes:{field:'String',message:'String'},implementsNode:!1},rd.types.Checkout={name:'Checkout',kind:'OBJECT',fieldBaseTypes:{completedAt:'DateTime',createdAt:'DateTime',currencyCode:'CurrencyCode',customAttributes:'Attribute',id:'ID',lineItems:'CheckoutLineItemConnection',note:'String',order:'Order',orderStatusUrl:'URL',paymentDue:'Money',ready:'Boolean',requiresShipping:'Boolean',shippingAddress:'MailingAddress',shippingLine:'ShippingRate',subtotalPrice:'Money',taxExempt:'Boolean',taxesIncluded:'Boolean',totalPrice:'Money',totalTax:'Money',updatedAt:'DateTime',webUrl:'URL'},implementsNode:!0},rd.types.CheckoutLineItemConnection={name:'CheckoutLineItemConnection',kind:'OBJECT',fieldBaseTypes:{edges:'CheckoutLineItemEdge',pageInfo:'PageInfo'},implementsNode:!1},rd.types.CheckoutLineItemEdge={name:'CheckoutLineItemEdge',kind:'OBJECT',fieldBaseTypes:{cursor:'String',node:'CheckoutLineItem'},implementsNode:!1},rd.types.CheckoutLineItem={name:'CheckoutLineItem',kind:'OBJECT',fieldBaseTypes:{customAttributes:'Attribute',id:'ID',quantity:'Int',title:'String',variant:'ProductVariant'},implementsNode:!0},rd.types.ShippingRate={name:'ShippingRate',kind:'OBJECT',fieldBaseTypes:{handle:'String',price:'Money',title:'String'},implementsNode:!1},rd.types.CheckoutCreatePayload={name:'CheckoutCreatePayload',kind:'OBJECT',fieldBaseTypes:{checkout:'Checkout',userErrors:'UserError'},implementsNode:!1},rd.types.CheckoutLineItemsAddPayload={name:'CheckoutLineItemsAddPayload',kind:'OBJECT',fieldBaseTypes:{checkout:'Checkout',userErrors:'UserError'},implementsNode:!1},rd.types.CheckoutLineItemsRemovePayload={name:'CheckoutLineItemsRemovePayload',kind:'OBJECT',fieldBaseTypes:{checkout:'Checkout',userErrors:'UserError'},implementsNode:!1},rd.types.CheckoutLineItemsUpdatePayload={name:'CheckoutLineItemsUpdatePayload',kind:'OBJECT',fieldBaseTypes:{checkout:'Checkout',userErrors:'UserError'},implementsNode:!1},rd.queryType='QueryRoot',rd.mutationType='Mutation',rd.subscriptionType=null;var id=ue(rd),od=function(){function e(d){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Xe,t=arguments[2];me(this,e);var n='https://'+d.domain+'/api/graphql',r={"X-SDK-Variant":'javascript',"X-SDK-Version":'1.0.2',"X-Shopify-Storefront-Access-Token":d.storefrontAccessToken};t?(r['Content-Type']='application/json',r.Accept='application/json',this.graphQLClient=new a(id,{fetcher:function(e){return t(n,{body:JSON.stringify(e),method:'POST',mode:'cors',headers:r}).then(function(e){return e.json()})}})):this.graphQLClient=new a(id,{url:n,fetcherOptions:{headers:r}}),this.product=new Ze(this.graphQLClient),this.collection=new ed(this.graphQLClient),this.shop=new dd(this.graphQLClient),this.checkout=new ad(this.graphQLClient),this.image=new nd(this.graphQLClient)}return ye(e,null,[{key:'buildClient',value:function(d,a){var t=new $e(d);return new e(t,Xe,a)}}]),ye(e,[{key:'fetchNextPage',value:function(e){return this.graphQLClient.fetchNextPage(e)}}]),e}();return od});

/***/ })
/******/ ]);