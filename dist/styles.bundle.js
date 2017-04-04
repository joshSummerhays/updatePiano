webpackJsonp([2,4],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(484)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(208)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n*, *:before, *:after {\n  box-sizing: border-box;\n  position: relative;\n  margin-left: 0;\n  margin-right: 0;\n  padding: 0; }\n\n.top-bar-color {\n  background-color: black;\n  padding: .5rem; }\n\n.logo {\n  color: white; }\n\n.big-button {\n  background-color: black; }\n  .big-button:hover {\n    background-color: black;\n    /*transform: scale(1.1);*/\n    opacity: 0.8; }\n\n.sml-thumb:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2); }\n\n.video-thumb {\n  max-width: 100%;\n  height: auto; }\n\n.top-hr {\n  max-width: 97% !important; }\n  @media screen and (min-width: 1200px) {\n    .top-hr {\n      max-width: 73rem !important; } }\n\n.videoWrapper {\n  /*position: relative;*/\n  /*padding-bottom: 56.25%; */\n  /* 16:9 */\n  /*height: 0;*/ }\n  .videoWrapper:before {\n    content: url(" + __webpack_require__(485) + ");\n    height: 72px;\n    left: 50%;\n    margin-left: -36px;\n    margin-top: -47px;\n    position: absolute;\n    top: 50%;\n    width: 72px;\n    z-index: 3; }\n    @media screen and (max-width: 560px) {\n      .videoWrapper:before {\n        zoom: 53%;\n        margin-top: -53px; } }\n    @media screen and (min-width: 640px) {\n      .videoWrapper:before {\n        zoom: 45%;\n        margin-top: -56px; } }\n    @media screen and (min-width: 1000px) {\n      .videoWrapper:before {\n        zoom: 75%;\n        margin-top: -48px; } }\n  .videoWrapper.play:before {\n    content: ''; }\n  .videoWrapper.play iframe {\n    z-index: 2; }\n  .videoWrapper.play .youtube-thumb {\n    z-index: 1; }\n  .videoWrapper iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    /*height: 100%;*/\n    height: 93px;\n    z-index: 1; }\n  .videoWrapper .youtube-thumb {\n    /*position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 2;*/ }\n\n.middle-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  @media screen and (max-width: 620px) {\n    .middle-container {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .middle-container .middle-wait {\n    -ms-flex-item-align: center;\n        align-self: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .middle-container .middle-wait .middle-button {\n      background-color: black; }\n      .middle-container .middle-wait .middle-button:hover {\n        /*background-color: $btn-hover;\n                transform: scale(1.1);*/\n        opacity: 0.8; }\n  .middle-container .middle-seperator {\n    width: 100px; }\n    @media screen and (max-width: 620px) {\n      .middle-container .middle-seperator {\n        width: 0px; } }\n  .middle-container .middle-pay {\n    -ms-flex-item-align: center;\n        align-self: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .middle-container .middle-pay .middle-button {\n      background-color: black; }\n      .middle-container .middle-pay .middle-button:hover {\n        /*background-color: $btn-hover;*/\n        /*transform: scale(1.1);*/\n        opacity: 0.8; }\n\n.thumb-bottom {\n  width: 208px; }\n\n.payment-wrap {\n  padding: 10px;\n  max-width: 1170px;\n  display: block;\n  margin: auto; }\n  .payment-wrap .option {\n    margin-top: 40px;\n    list-style-type: none; }\n  .payment-wrap .apple-logo:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  @media screen and (max-width: 324px) {\n    .payment-wrap .apple-logo {\n      margin-top: 15px; } }\n  .payment-wrap .app-logo-size {\n    height: 40px;\n    margin-right: 10px; }\n  .payment-wrap .play-size {\n    zoom: 24%; }\n    .payment-wrap .play-size:hover {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); }\n    @media screen and (max-width: 334px) {\n      .payment-wrap .play-size {\n        margin-left: -39px; } }\n\n.waitlist-wrap {\n  padding: 10px;\n  display: block;\n  margin: auto;\n  max-width: 1170px; }\n  .waitlist-wrap .waitlist-show {\n    display: none; }\n\n.admin-wrap {\n  padding: 10px;\n  display: block;\n  margin: auto;\n  max-width: 1170px; }\n  .admin-wrap .admin-show {\n    display: none; }\n  .admin-wrap .waiter {\n    border: 1px solid black; }\n    .admin-wrap .waiter .title-wait {\n      font-weight: bold; }\n    .admin-wrap .waiter .delete-btn {\n      background: red; }\n\n.footer-wrap {\n  position: inherit;\n  bottom: 0;\n  margin-bottom: 10px;\n  width: 100vw; }\n  @media (min-width: 640px) {\n    .footer-wrap {\n      position: fixed; } }\n  .footer-wrap .footer-links {\n    padding-left: 0.4rem !important;\n    padding-right: 0.4rem !important; }\n    @media screen and (min-width: 370px) {\n      .footer-wrap .footer-links {\n        padding-left: 1rem !important;\n        padding-right: 1rem !important; } }\n  .footer-wrap .footer-copyright {\n    color: black;\n    pointer-events: none; }\n  .footer-wrap .footer-new {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin: auto;\n    max-width: 73rem; }\n    @media screen and (max-width: 1200px) {\n      .footer-wrap .footer-new {\n        margin-left: 17px;\n        margin-right: 17px; } }\n    .footer-wrap .footer-new .footer-logo {\n      left: 0;\n      position: absolute; }\n    .footer-wrap .footer-new .footer-admin {\n      margin-right: 15px; }\n    .footer-wrap .footer-new .footer-item {\n      color: black; }\n\n.app-wrap {\n  display: none; }\n\n.home-wrap {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: block; }\n  @media (min-width: 640px) {\n    .home-wrap {\n      height: 100vh; } }\n\n#preloader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  @media screen and (max-width: 640px) {\n    #preloader {\n      left: 5%; } }\n  #preloader .loader-note {\n    height: 100px;\n    content: url(" + __webpack_require__(209) + "); }\n\n.logo-button {\n  cursor: pointer; }\n  .logo-button:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n", ""]);

// exports


/***/ }),

/***/ 208:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "one-note.2e88b035cf8b121b19ae.svg";

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAQAAABtnpmgAAAFfUlEQVRo3sWay09cVRjAZ1NWNLH+BeLGdluJGIFq1RZ7qe2AxZQaZgZkoYUUamI6JFI6uIAmJibQ16axj0CEpAxCAqSwMgbSNhYjJhpNHEgoBUpNQ6Cx0OHn4szpnWHuzJz79H7be8/85nzne57P57P5sJNCKgnSSAstNBKkkkJ2+v6fhzxKaWOCBTI9C0xwlhJ2eIdUSZR1VJ91olSQ5y7Uq1zgcervbhBjknGG6KOPIcaZJMbGdrzHdFPgDtQebvJc/6V5RuiglnI0Aymnlg5GeJAMt8kN9jgLtYsrxPXD08OnhjhGUk8PD3W4OJfZ5RRWLY/kuj8TVkZKljD3dbhlQvahXmZIrneXJktQUpq5p8MN2to33mROrLPIOVtQUiIsSrRZiqxifSKMa4sB/I5gaWhUENUN+oQVrNNsAazS5hiUlHOsCrQtmsxitYsv/ybgOJaGRpCY3LeIud0C4FeOuYKloVHFjERrUj9bWwB3OOoalobGUe5IhVarWeKG2C13sQTajDSDotx+a06crWOuYwmFxqTzyO7X+EFYYsATLGEGCQsdzB58gC1FB1HuEFpEGkEwc6h+BDCgHJ6/d+gcRmUMNVYnV0TwUfXyIWCaWkeiQSJQXTLOt+KAiZhYwwawTKsDaO0yKdqdDnZTZBCaSTDY4DsHzlsi87ienjQ/B0wlNjVJCfSPVNsEa5ZZbmoCzgWRBmoWwWCOL2yiJVLJrtTK5x/AZHZas63keEo3h2yAhcUyK0kVFZUil9dsgQGM2YoYCdv062BRgB4HwOAPPrMM1iuWGNAVuQ6YqHyygcETOi2C1YsF1hLVO6WiTtQcAoMt+jliCS3RcSgWYG0AIw6CCQsPWQAbFR+3CrAJgA6HwWCJr0yv2Sk+HRdgC4CFmJcLzEpMqEv0H0R/C9iwEFRyg5mPCYflmvk+CgFiFs6DGpjZmJCosPcmnOuki2DwlC7lmDAlPqnwEQQYdxUMYJSPlFadEK8HfDQCDLkOBr/zucKqw+LlBh8tAH0egMETvuHDHKv2i1fDnoLBL1SqgZ3xUJXQxwHK1FR50rPDv0o7xbyf0zr1w++Bu4A/CfE2BxWcxpTMydx3sDBCGe/ygUkH63JI+pdveUtBhWkhyc0gDvOcZJ+SCtOCuHtpD/zEEfbntMNkOS8+vC3AzrqRKMa5SinvKZ4sKWMpiWIJwANHwVb4khIOmC7nUlPrRDFS7xjYNB/zjikVGhYjzpZv0M9+0ypMKd9u6XVlBcBDB8BW+VrJv6sWvHniFjJsE+wvgor+3Uha5PFMvhOmG+C+LbBRE/7dSKbTmyo+HwVsAjRbBDPn343ktGxDvbK9Q3YD4J4lMLP+PUvj7lrGVmfENJh5/56l1fmaURf2smgOVyiDxYlzlX0WnUNyc3hJgF3M1E5fBogqd62XOGPJv2+XQdlTeClTpz8k3lDpXB+iguOW/HsGNUIg293IoHCTQQWwMg7aVKHY98SVTTTXIMOsyGirvL3kimVU4wu0ImFsMx5cC/r5TWA94w2VG8sT3lyk+rkrG5DHVe94m8QXMy4qtEruFpwycysekaoPuoIV0i/r28zOETTJ8YaI41jt+njDKSuTF9UyGEaVo4GKlx+Ue/VM+WwZWOisHKFpd2ivliRWTMkSs/i1F3/wnqmkyCixSRo6iub0WwpwQRFDRSoZtpidTif32QPODbZd0gfbFuk1UVHV06tPQEGciw7sVQrcbq6LLFfO3Y3SSR2HM/Qg6jjPWOrQ5ybXDPMtB+AK6GZl+yXDHFNMMEwf/QwzwRRz6fXTCl1pSbPj46Z+BlhTbo2tcQu/d9OwOyimlXHmszR6btNKsWdIaYj5vI6fAA2ECdNAAD97ybe77n+7PQOTVRTtzQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ })

},[489]);
//# sourceMappingURL=styles.bundle.js.map