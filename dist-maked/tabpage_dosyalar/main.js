/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../AppData/Roaming/npm/node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "../../AppData/Roaming/npm/node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../AppData/Roaming/npm/node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/scripts/game.ts":
/*!*****************************!*\
  !*** ./src/scripts/game.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalVars_1 = __importDefault(__webpack_require__(/*! ./objects/globalVars */ "./src/scripts/objects/globalVars.ts"));
__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
// import MainScene from './scenes/mainScene'
var tabScene_1 = __importDefault(__webpack_require__(/*! ./scenes/tabScene */ "./src/scripts/scenes/tabScene.ts"));
var DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio;
var DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio;
var globalVarsClass = new globalVars_1.default(this);
if (globalVarsClass.w !== null) {
    DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio;
    DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio;
}
// @ts-ignore https://github.com/photonstorm/phaser/issues/4522
// still not working in 3.18.1 :/
var config = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [tabScene_1.default],
    physics: {
        default: 'arcade',
    }
};
window.addEventListener('load', function () {
    config.scale.DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio;
    config.scale.DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio;
    var game = new Phaser.Game(config);
});
//


/***/ }),

/***/ "./src/scripts/objects/globalVars.ts":
/*!*******************************************!*\
  !*** ./src/scripts/objects/globalVars.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../typings/node.d.ts"/>
var URL = __importStar(__webpack_require__(/*! url */ "../../AppData/Roaming/npm/node_modules/webpack/node_modules/url/url.js"));
var HREF = window.location.href;
var parsedCurrentUrl = URL.parse(HREF);
var searchParams = new URLSearchParams(parsedCurrentUrl.search);
var globalVars = /** @class */ (function () {
    function globalVars(scene) {
        this.parseKeys = function (tabKeys) {
            var _splitted = tabKeys.split(",");
            return _splitted;
        };
        this.tabNumber = searchParams.get("tabNumber"); // scene.SceneManager;//scene.game.config;//document.getElementById("href").innerHTML;//http; //myUrl;//scene.sys.canvas.parentNode.parentNode.parentNode.childNodes[0]
        this.w = searchParams.get("w");
        this.h = searchParams.get("h");
        this.w_deviceScaled = this.w * window.devicePixelRatio;
        this.h_deviceScaled = this.h * window.devicePixelRatio;
        // get tab keys
        this.tabKeys = searchParams.get("tabKeys");
        this.tabKeys = {
            keys: this.parseKeys(this.tabKeys),
            number: this.parseKeys(this.tabKeys).length,
            joinedKeys: this.parseKeys(this.tabKeys).join(" ") // default char: space
        };
    }
    return globalVars;
}());
exports.default = globalVars;


/***/ }),

/***/ "./src/scripts/scenes/tabScene.ts":
/*!****************************************!*\
  !*** ./src/scripts/scenes/tabScene.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../node_modules/phaser/types/phaser.d.ts"/>
var globalVars_1 = __importDefault(__webpack_require__(/*! ../objects/globalVars */ "./src/scripts/objects/globalVars.ts"));
var joinedTabKeys;
var roundWidth;
var roundHeight;
var adjustTextBoolen = true;
var minAvailable;
var minNotAvailable;
var middleSuppose;
var canvasWidth;
var canvasHeight;
var tabKeys;
var tabRectangles_ = []; // filled
var tabRectangleStrokes_ = [];
var tabKeysObjects_ = [];
var lockOfTouchedOnScreen = false;
var selectedTabOrder = 0;
var _inFor_textHeight;
var midHeight;
var wayOfDirection;
var selection = 0;
var selectionX; // before movement
var tabXs_ = [];
var velocityOfTabs; // calculate with tab number = Math.round(1000/tabnUMBER)
var numberOfTabs;
var PreloadScene = /** @class */ (function (_super) {
    __extends(PreloadScene, _super);
    function PreloadScene() {
        var _this = _super.call(this, { key: 'PreloadScene' }) || this;
        _this._afterFontSizeDetection = function (tabKeys, fontSize, oldTextObject) {
            //console.log(oldTextObject.style.fontSize + "text width: "+ oldTextObject.width + " canvas wdith: "+canvasWidth)
            //alert("afterrr")
            var oldTextObjectWidth = oldTextObject.width;
            oldTextObject.destroy();
            var tabNumber = tabKeys.length;
            var style = { font: "bold " + fontSize + "px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            // order text
            var theLastTextWidthPoint = (canvasWidth - oldTextObjectWidth) / 2;
            //console.log("last: "+ theLastTextWidthPoint)
            var _inFor_textWidth;
            var _inFor_textObject;
            var _inFor_textSpaceObject;
            var _inFor_textSpaceWidth;
            // let _inFor_textHeight; update to global var
            // let tabXs_: Array<object> = [] // update to global var
            tabXs_ = [];
            for (var i = 0; i < tabNumber; i++) {
                _inFor_textObject = _this.add.text(theLastTextWidthPoint, canvasHeight / 2, tabKeys[i], style)
                    .setOrigin(0, 0.5)
                    .setFontSize(fontSize)
                    .setInteractive();
                tabKeysObjects_.push(_inFor_textObject);
                _inFor_textWidth = _inFor_textObject.width;
                if (i !== tabNumber) {
                    _inFor_textSpaceObject = _this.add.text(_inFor_textWidth + theLastTextWidthPoint, canvasHeight / 2, " ", style);
                    _inFor_textSpaceWidth = _inFor_textSpaceObject.width;
                    _inFor_textHeight = _inFor_textObject.height; // less then av. proc.
                }
                tabXs_.push({
                    x1: theLastTextWidthPoint,
                    x2: _inFor_textWidth + theLastTextWidthPoint,
                    width: _inFor_textWidth
                });
                theLastTextWidthPoint += _inFor_textSpaceWidth + _inFor_textWidth;
            }
            _this._createTabRectangles(tabXs_, _inFor_textHeight, canvasHeight / 2);
            //console.log(fontSize)
        };
        _this._createTabRectangles = function (tabXs, height, midHeight) {
            var tabNumber = tabXs.length;
            var _inFor_graphObject;
            var _inFor_fillAlpha;
            tabRectangles_ = [];
            for (var i = 0; i < tabNumber; i++) {
                _inFor_fillAlpha = 0.5;
                if (i === selectedTabOrder) {
                    _inFor_fillAlpha = 0;
                }
                _inFor_graphObject = _this.add.rexRoundRectangle(tabXs[i].x1, (midHeight - (height / 2)), tabXs[i].width, height, 32, 0xffffff, _inFor_fillAlpha).setOrigin(0); // this.add.rexRoundRectangle(250, 100, 100, 100, 30, 0x008888); //this.add.rexRoundRectangle(tabXs[i].x1, (midHeight-(height/2)), tabXs[i].width,  height, 32), 0xffffff; // globalVarsClass.h-10, 32, 0x008888);
                //_inFor_graphObject.fillStyle(0xffffff, _inFor_fillAlpha)
                //_inFor_graphObject.fillRoundedRect();
                /**
                console.log(i + " x1: " + tabXs[i].x1 + " x2: " + tabXs[i].x2
                + " y1: " + (midHeight-(height/2)) + " y2: " + midHeight)
                */
                // console.log(window)
                tabRectangles_.push(_inFor_graphObject);
            }
            _this._createTabRectangleStrokes(tabXs, height, midHeight);
        };
        _this._createTabRectangleStrokes = function (tabXs, height, midHeight) {
            var tabNumber = tabXs.length;
            var _inFor_graphStrokedObject;
            tabRectangleStrokes_ = [];
            for (var i = 0; i < tabNumber; i++) {
                _inFor_graphStrokedObject = _this.add.graphics();
                _inFor_graphStrokedObject.lineStyle(5, 0x000000, 1);
                _inFor_graphStrokedObject.strokeRoundedRect(tabXs[i].x1, (midHeight - (height / 2)), tabXs[i].width, height, 32);
                tabRectangleStrokes_.push(_inFor_graphStrokedObject);
            }
            //this._switchRectangleStrokes(tabRectangleStrokes_, false)
        };
        _this._switchRectangleStrokes = function (strokes, strokeSwitchBoolen) {
            if (strokes.len === undefined) {
                strokes = tabRectangleStrokes_;
            }
            var numberOfStrokes = strokes.length;
            //let strokeBorders_: Array<number> = [0,5];
            for (var i = 0; i < numberOfStrokes; i++) {
                strokes[i].setVisible(strokeSwitchBoolen); //destroy() //lineStyle(1, 0x000000, 0) // strokeBorders_[strokeSwitchBoolen])
                //console.log(strokes[i])
            }
        };
        _this._touchedOnScreen = function (pointer, gameObject) {
            if (lockOfTouchedOnScreen) {
                return;
            }
            selection = tabKeysObjects_.indexOf(gameObject);
            if (selection === selectedTabOrder) {
                return;
            }
            lockOfTouchedOnScreen = true;
            _this._switchRectangleStrokes("", false);
            //console.log(gameObject)
            //console.log(tabKeysObjects_.indexOf(gameObject))
            _this._rectangleAnimation(selection);
        };
        _this._afterRectangleAnimation = function () {
            tabRectangles_.map(function (x) { return x.body.velocity.x = 0 * wayOfDirection; });
            // console.log(tabRectangles_[selectedTabOrder.x])
            _this._switchRectangleStrokes("", true);
            selectedTabOrder = selection;
            // delete rectangles then create again
            _this._refreshRectangles();
            window.postMessage("{\"JSONED_selectedTabNumber\":" + selectedTabOrder + "}");
            lockOfTouchedOnScreen = false;
        };
        _this._refreshRectangles = function () {
            /**
            for (let i = 0; i<tabRectangleStrokes_.length; i++){
              tabRectangleStrokes_[i].destroy()
            }
            */
            tabRectangleStrokes_.map(function (x) { return x.destroy(); });
            tabRectangles_.map(function (x) { return x.destroy(); });
            // create again
            _this._createTabRectangles(tabXs_, _inFor_textHeight, canvasHeight / 2);
        };
        _this._checkPos = function () {
            //console.log( wayOfDirection)
            if (tabRectangles_.length === 0) {
                return;
            }
            if (wayOfDirection === 1) {
                if (tabRectangles_[selectedTabOrder].x >= selectionX) {
                    _this._afterRectangleAnimation();
                }
            }
            else {
                if (tabRectangles_[selectedTabOrder].x <= selectionX) {
                    _this._afterRectangleAnimation();
                }
            }
        };
        _this._tabPlusListen = function () {
            if (window.tabPlus4Listen === 0) {
                return;
            }
            var newSelection = selectedTabOrder + window.tabPlus4Listen;
            window.tabPlus4Listen = 0;
            if (newSelection === tabKeysObjects_.length) {
                newSelection = 0;
            }
            if (newSelection === -1) {
                newSelection = tabKeysObjects_.length - 1;
            }
            _this._likeTouch(newSelection);
        };
        _this._likeTouch = function (selection) {
            var selectionObject = tabKeysObjects_[selection];
            _this._touchedOnScreen("", selectionObject);
        };
        return _this;
    }
    PreloadScene.prototype.preload = function () {
        var url;
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/plugins/dist/rexroundrectangleplugin.min.js';
        this.load.plugin('rexroundrectangleplugin', url, true);
    };
    PreloadScene.prototype.create = function () {
        /**
        const emptyObj = this.add.rectangle(0,0,0,0)
        this.physics.add.existing(emptyObj)
        emptyObj.body.velocity.x = 0
        //emptyObj.x = 0
        console.log(emptyObj)
        tabRectangles_.push(emptyObj)
    
        */
        //console.log(this.add)
        var globalVarsClass = new globalVars_1.default(this);
        var graphics = this.add.graphics();
        graphics.lineStyle(5, 0x000000, 0.5);
        roundWidth = (window.innerWidth * window.devicePixelRatio) - 10;
        roundHeight = (window.innerHeight * window.devicePixelRatio) - 10;
        canvasWidth = (window.innerWidth * window.devicePixelRatio);
        canvasHeight = (window.innerHeight * window.devicePixelRatio);
        midHeight = canvasHeight / 2;
        graphics.strokeRoundedRect(5, 5, (window.innerWidth * window.devicePixelRatio) - 10, (window.innerHeight * window.devicePixelRatio) - 10, 32); // globalVarsClass.h-10, 32);
        var style = { font: "bold 1px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
        //console.log(document.getElementById("phaser-game"))
        // tabKeys process
        tabKeys = globalVarsClass.tabKeys.keys;
        // calculate speed with tab number
        numberOfTabs = globalVarsClass.tabKeys.number;
        velocityOfTabs = Math.round(8000 / numberOfTabs);
        joinedTabKeys = this.add.text(canvasWidth / 2, canvasHeight / 2, globalVarsClass.tabKeys.joinedKeys, style);
        //joinedTabKeys.setFontSize(60)
        joinedTabKeys.setOrigin(0.5, 0.5);
        // console.log(joinedTabKeys)
        // var text = this.add.text(5, 0, "text  gjJŞABCDGY " + document.body.clientWidth * window.devicePixelRatio, style);
        // this.scene.start('MainScene')
        // console.log(text)
        // this.add.image(0,0,'phaser-logo')
        // this.myim = this.add.image(600,300,'phaser-logo')
        // this.add.image(800,300,'phaser-logo')
        //   console.log(globalVarsClass.tabNumber)
        //   console.log( this.myim.width)
        //   console.log(this.sys.game.canvas.offsetWidth)
        /**
         * This is how you would dynamically import the mainScene class (with code splitting),
         * add the mainScene to the Scene Manager
         * and start the scene.
         * The name of the chunk would be 'mainScene.chunk.js
         * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
         */
        // let someCondition = true
        // if (someCondition)
        //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
        //     this.scene.add('MainScene', mainScene.default, true)
        //   })
        // else console.log('The mainScene class will not even be loaded by the browser')
        //console.log(this.cameras.main)
        this.input.on('gameobjectdown', this._touchedOnScreen, this);
        //console.log(window)
        //console.log(window.tabPlus4Listen)
    };
    PreloadScene.prototype.update = function () {
        //console.log(velocityOfTabs)
        // listen phisics
        if (lockOfTouchedOnScreen) {
            this._checkPos();
        }
        // adjust joined text size:
        if (adjustTextBoolen) {
            if (joinedTabKeys.width <= roundWidth - 10 && joinedTabKeys.height <= roundHeight - 10) {
                //console.log("text w: "+ joinedTabKeys.width + " canvas width: "+ canvasWidth + " last font size: "+parseInt(joinedTabKeys.style.fontSize))
                minAvailable = parseInt(joinedTabKeys.style.fontSize);
                //alert("min ava: " + minAvailable)
                if (minNotAvailable === undefined) {
                    joinedTabKeys.setFontSize(2 * parseInt(joinedTabKeys.style.fontSize));
                    //alert("iki kati " + parseInt(joinedTabKeys.style.fontSize))
                    //console.log("if 3")  
                }
                else {
                    middleSuppose = Math.round((minNotAvailable - minAvailable) / 2 + minAvailable);
                    if (middleSuppose === parseInt(joinedTabKeys.style.fontSize)) {
                        adjustTextBoolen = false;
                        // font size is detected
                        this._afterFontSizeDetection(tabKeys, parseInt(joinedTabKeys.style.fontSize), joinedTabKeys);
                        //console.log("if 4")  
                    }
                    joinedTabKeys.setFontSize(middleSuppose);
                    //console.log("else 2")
                }
                //console.log("if 2")  
            }
            else {
                //console.log("else text w: "+ joinedTabKeys.width + " canvas width: "+ canvasWidth + " last font size: "+parseInt(joinedTabKeys.style.fontSize))
                //alert("fonts: " + parseInt(joinedTabKeys.style.fontSize))
                minNotAvailable = parseInt(joinedTabKeys.style.fontSize);
                middleSuppose = Math.round((minNotAvailable - minAvailable) / 2 + minAvailable);
                //console.log("else 3")
                if (middleSuppose === parseInt(joinedTabKeys.style.fontSize)) {
                    adjustTextBoolen = false;
                    // font size is detected
                    this._afterFontSizeDetection(tabKeys, parseInt(joinedTabKeys.style.fontSize), joinedTabKeys);
                    //console.log("if 4")  
                }
                //console.log("min av: "+middleSuppose)
                //console.log(parseInt(joinedTabKeys.style.fontSize))
                joinedTabKeys.setFontSize(middleSuppose);
                //alert( "min not ava " + minNotAvailable +" min av: " + minAvailable +"indi " + parseInt(middleSuppose))
                //alert(joinedTabKeys.style.fontSize)
            }
            // console.log(joinedTabKeys.style.fontSize)
            //console.log("if 1")    
        }
        // console.log(this.sys.game.canvas.offsetWidth)
        this._tabPlusListen();
    };
    PreloadScene.prototype._rectangleAnimation = function (selectionOrder) {
        // way of animation
        var _this = this;
        wayOfDirection = Math.sign(selectionOrder - selectedTabOrder);
        // animation will be in the update function
        // in this fx create left and right rectabgles
        // left
        var leftRectangle = this.add.rexRoundRectangle(-canvasWidth, (midHeight - (_inFor_textHeight / 2)), canvasWidth, _inFor_textHeight, 32, 0xffffff, 0.5).setOrigin(0);
        var rightRectangle = this.add.rexRoundRectangle(canvasWidth, (midHeight - (_inFor_textHeight / 2)), canvasWidth, _inFor_textHeight, 32, 0xffffff, 0.5).setOrigin(0);
        // add this two obj to tabRectangles_ array
        tabRectangles_.push(leftRectangle, rightRectangle);
        //let container = this.add.container(0,0)
        //console.log(tabRectangles_[0])
        // console.log (window.Phaser.Physics.Arcade.body())
        // container.add(tabRectangles_[0])
        //this.physics.enable(tabRectangles_[0])
        selectionX = tabRectangles_[selection].x;
        tabRectangles_.map(function (x) { _this.physics.add.existing(x); });
        tabRectangles_.map(function (x) { return x.body.velocity.x = velocityOfTabs * wayOfDirection; });
        // after that, it will listen on update fx with lockOfTouchedOnScreen var.
    };
    return PreloadScene;
}(Phaser.Scene));
exports.default = PreloadScene;


/***/ }),

/***/ "./webpack/credits.js":
/*!****************************!*\
  !*** ./webpack/credits.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * PLEASE DO NOT REMOVE THIS NOTICE!
 *
 * @template        This Phaser game was built using phaser-project-template (https://github.com/yandeu/phaser-project-template)
 * @author          Yannick Deubel (https://github.com/yandeu)
 * @copyright       2019 Yannick Deubel
 * @license         {@link https://github.com/yandeu/phaser-project-template/blob/master/LICENSE|MIT License}
 */

// Of course you can remove it if you really want to, but it would be nice if you would leave it there :)

console.log(
  '%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template',
  'background: #ff0000',
  'background: #ffff00',
  'background: #00ff00',
  'background: #00ffff',
  'color: #fff; background: #000000;',
  'background: none'
)


/***/ }),

/***/ 1:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/scripts/game.ts ./webpack/credits.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\bill\AppData\Roaming\npm\node_modules\webpack-dev-server\client\index.js?http://localhost:8080 */"../../AppData/Roaming/npm/node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
__webpack_require__(/*! ./src/scripts/game.ts */"./src/scripts/game.ts");
module.exports = __webpack_require__(/*! ./webpack/credits.js */"./webpack/credits.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9vYmplY3RzL2dsb2JhbFZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NlbmVzL3RhYlNjZW5lLnRzIiwid2VicGFjazovLy8uL3dlYnBhY2svY3JlZGl0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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T0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFFO1FBRTFELGNBQWMsQ0FBQyxHQUFHLENBQUUsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLEdBQUMsY0FBYyxFQUFqRCxDQUFpRCxDQUFDO1FBRTNFLDBFQUEwRTtJQUc1RSxDQUFDO0lBNkRILG1CQUFDO0FBQUQsQ0FBQyxDQXBieUMsTUFBTSxDQUFDLEtBQUssR0FvYnJEOzs7Ozs7Ozs7Ozs7O0FDdmREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzEsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0IEdsb2JhbFZhcnMgZnJvbSAnLi9vYmplY3RzL2dsb2JhbFZhcnMnXG5cbmltcG9ydCAncGhhc2VyJ1xuLy8gaW1wb3J0IE1haW5TY2VuZSBmcm9tICcuL3NjZW5lcy9tYWluU2NlbmUnXG5pbXBvcnQgVGFiU2NlbmUgZnJvbSAnLi9zY2VuZXMvdGFiU2NlbmUnXG5cblxubGV0IERFRkFVTFRfV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG5sZXQgREVGQVVMVF9IRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuXG5cbmNvbnN0IGdsb2JhbFZhcnNDbGFzcyA9IG5ldyBHbG9iYWxWYXJzKHRoaXMpXG5cbmlmIChnbG9iYWxWYXJzQ2xhc3MudyAhPT0gbnVsbCl7XG4gIERFRkFVTFRfV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gIERFRkFVTFRfSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cbn1cblxuXG4vLyBAdHMtaWdub3JlIGh0dHBzOi8vZ2l0aHViLmNvbS9waG90b25zdG9ybS9waGFzZXIvaXNzdWVzLzQ1MjJcbi8vIHN0aWxsIG5vdCB3b3JraW5nIGluIDMuMTguMSA6L1xuY29uc3QgY29uZmlnOiBHYW1lQ29uZmlnID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgc2NhbGU6IHtcbiAgICBwYXJlbnQ6ICdwaGFzZXItZ2FtZScsXG4gICAgbW9kZTogUGhhc2VyLlNjYWxlLkZJVCxcbiAgICBhdXRvQ2VudGVyOiBQaGFzZXIuU2NhbGUuQ0VOVEVSX0JPVEgsXG4gICAgd2lkdGg6IERFRkFVTFRfV0lEVEgsXG4gICAgaGVpZ2h0OiBERUZBVUxUX0hFSUdIVFxuICB9LFxuXG4gIFxuXG4gIHNjZW5lOiBbVGFiU2NlbmVdLCAvLyBNYWluU2NlbmUgb25seSB0YWIgc2NlbmVcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuXG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIFxuICBjb25maWcuc2NhbGUuREVGQVVMVF9XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgY29uZmlnLnNjYWxlLkRFRkFVTFRfSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cblxuXG4gICBcbiAgXG4gIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcblxuXG59KVxuLy9cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL25vZGUuZC50c1wiLz5cclxuaW1wb3J0ICogYXMgVVJMIGZyb20gXCJ1cmxcIjtcclxuY29uc3QgSFJFRiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5jb25zdCBwYXJzZWRDdXJyZW50VXJsID0gVVJMLnBhcnNlKEhSRUYpXHJcbmNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyc2VkQ3VycmVudFVybC5zZWFyY2gpXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnbG9iYWxWYXJze1xyXG4gICAgdGFiTnVtYmVyO1xyXG4gICAgdztcclxuICAgIGg7XHJcbiAgICB3X2RldmljZVNjYWxlZDtcclxuICAgIGhfZGV2aWNlU2NhbGVkO1xyXG4gICAgdGFiS2V5cztcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKXtcclxuICAgICAgICB0aGlzLnRhYk51bWJlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ0YWJOdW1iZXJcIik7Ly8gc2NlbmUuU2NlbmVNYW5hZ2VyOy8vc2NlbmUuZ2FtZS5jb25maWc7Ly9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhyZWZcIikuaW5uZXJIVE1MOy8vaHR0cDsgLy9teVVybDsvL3NjZW5lLnN5cy5jYW52YXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlc1swXVxyXG4gICAgICAgIHRoaXMudyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ3XCIpO1xyXG4gICAgICAgIHRoaXMuaCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJoXCIpO1xyXG4gICAgICAgIHRoaXMud19kZXZpY2VTY2FsZWQgPSB0aGlzLncgKiAgd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgdGhpcy5oX2RldmljZVNjYWxlZCA9IHRoaXMuaCAqICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgICAgICAvLyBnZXQgdGFiIGtleXNcclxuICAgICAgICB0aGlzLnRhYktleXMgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidGFiS2V5c1wiKTtcclxuICAgICAgICB0aGlzLnRhYktleXMgPSB7XHJcbiAgICAgICAgICAgIGtleXM6IHRoaXMucGFyc2VLZXlzKHRoaXMudGFiS2V5cyksIC8vIGFycmF5ZWR9XHJcbiAgICAgICAgICAgIG51bWJlcjogdGhpcy5wYXJzZUtleXModGhpcy50YWJLZXlzKS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGpvaW5lZEtleXM6IHRoaXMucGFyc2VLZXlzKHRoaXMudGFiS2V5cykuam9pbihcIiBcIikgLy8gZGVmYXVsdCBjaGFyOiBzcGFjZVxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5wYXJzZUtleXMgPSAodGFiS2V5czogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBfc3BsaXR0ZWQgPSB0YWJLZXlzLnNwbGl0KFwiLFwiKVxyXG4gICAgcmV0dXJuIF9zcGxpdHRlZDtcclxufVxyXG59IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9waGFzZXIvdHlwZXMvcGhhc2VyLmQudHNcIi8+XG5pbXBvcnQgR2xvYmFsVmFycyBmcm9tICcuLi9vYmplY3RzL2dsb2JhbFZhcnMnXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdodHRwJztcblxubGV0IGpvaW5lZFRhYktleXM7XG5sZXQgcm91bmRXaWR0aDtcbmxldCByb3VuZEhlaWdodDtcbmxldCBhZGp1c3RUZXh0Qm9vbGVuID0gdHJ1ZTtcblxubGV0IG1pbkF2YWlsYWJsZTtcbmxldCBtaW5Ob3RBdmFpbGFibGU7XG5sZXQgbWlkZGxlU3VwcG9zZTtcblxuXG5sZXQgY2FudmFzV2lkdGg7XG5sZXQgY2FudmFzSGVpZ2h0O1xuXG5sZXQgdGFiS2V5cztcblxubGV0IHRhYlJlY3RhbmdsZXNfOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHwgUGhhc2VyLkdhbWVPYmplY3RzLkdhbWVPYmplY3Q+ID0gW107IC8vIGZpbGxlZFxubGV0IHRhYlJlY3RhbmdsZVN0cm9rZXNfOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlPiA9IFtdXG5sZXQgdGFiS2V5c09iamVjdHNfOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBbXTtcbmxldCBsb2NrT2ZUb3VjaGVkT25TY3JlZW4gPSBmYWxzZTtcbmxldCBzZWxlY3RlZFRhYk9yZGVyID0gMDtcbmxldCBfaW5Gb3JfdGV4dEhlaWdodDtcbmxldCBtaWRIZWlnaHQ7XG5sZXQgd2F5T2ZEaXJlY3Rpb247XG5sZXQgc2VsZWN0aW9uPTA7XG5sZXQgc2VsZWN0aW9uWDsgLy8gYmVmb3JlIG1vdmVtZW50XG5sZXQgdGFiWHNfOiBBcnJheTxvYmplY3Q+ID0gW10gXG5cbmxldCB2ZWxvY2l0eU9mVGFiczsgLy8gY2FsY3VsYXRlIHdpdGggdGFiIG51bWJlciA9IE1hdGgucm91bmQoMTAwMC90YWJuVU1CRVIpXG5sZXQgbnVtYmVyT2ZUYWJzO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIG15aW07XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHsga2V5OiAnUHJlbG9hZFNjZW5lJyB9KVxuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICB2YXIgdXJsO1xuICBcbiAgICB1cmwgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JleHJhaW5ib3cvcGhhc2VyMy1yZXgtbm90ZXMvbWFzdGVyL3BsdWdpbnMvZGlzdC9yZXhyb3VuZHJlY3RhbmdsZXBsdWdpbi5taW4uanMnO1xuICAgIHRoaXMubG9hZC5wbHVnaW4oJ3JleHJvdW5kcmVjdGFuZ2xlcGx1Z2luJywgdXJsLCB0cnVlKTsgICAgICBcbiAgXG4gIH1cblxuICBcbiAgY3JlYXRlKCkge1xuICAgIC8qKiBcbiAgICBjb25zdCBlbXB0eU9iaiA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLDAsMCwwKVxuICAgIHRoaXMucGh5c2ljcy5hZGQuZXhpc3RpbmcoZW1wdHlPYmopXG4gICAgZW1wdHlPYmouYm9keS52ZWxvY2l0eS54ID0gMFxuICAgIC8vZW1wdHlPYmoueCA9IDBcbiAgICBjb25zb2xlLmxvZyhlbXB0eU9iailcbiAgICB0YWJSZWN0YW5nbGVzXy5wdXNoKGVtcHR5T2JqKVxuXG4gICAgKi9cblxuICAgIC8vY29uc29sZS5sb2codGhpcy5hZGQpXG5cbiAgICBjb25zdCBnbG9iYWxWYXJzQ2xhc3MgPSBuZXcgR2xvYmFsVmFycyh0aGlzKVxuXG5cbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcygpO1xuICAgIGdyYXBoaWNzLmxpbmVTdHlsZSg1LCAweDAwMDAwMCwgMC41KTtcblxuICAgIHJvdW5kV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyktMTBcbiAgICByb3VuZEhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyktMTBcblxuICAgIGNhbnZhc1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgY2FudmFzSGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuXG4gICAgbWlkSGVpZ2h0ID0gY2FudmFzSGVpZ2h0LzJcblxuICAgIGdyYXBoaWNzLnN0cm9rZVJvdW5kZWRSZWN0KDUsIDUsICh3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKS0xMCwgICh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyktMTAsIDMyKTsgLy8gZ2xvYmFsVmFyc0NsYXNzLmgtMTAsIDMyKTtcblxuICAgIHZhciBzdHlsZSA9IHsgZm9udDogXCJib2xkIDFweCBBcmlhbFwiLCBmaWxsOiBcIiMwMDBcIiwgYm91bmRzQWxpZ25IOiBcImNlbnRlclwiLCBib3VuZHNBbGlnblY6IFwibWlkZGxlXCIgfTtcblxuICAgIC8vY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaGFzZXItZ2FtZVwiKSlcblxuICAgLy8gdGFiS2V5cyBwcm9jZXNzXG5cbiAgIHRhYktleXMgPSBnbG9iYWxWYXJzQ2xhc3MudGFiS2V5cy5rZXlzXG5cbiAgIC8vIGNhbGN1bGF0ZSBzcGVlZCB3aXRoIHRhYiBudW1iZXJcblxuICAgbnVtYmVyT2ZUYWJzID0gZ2xvYmFsVmFyc0NsYXNzLnRhYktleXMubnVtYmVyXG5cbiAgIHZlbG9jaXR5T2ZUYWJzID0gTWF0aC5yb3VuZCg4MDAwL251bWJlck9mVGFicylcblxuICAgam9pbmVkVGFiS2V5cyA9IHRoaXMuYWRkLnRleHQoY2FudmFzV2lkdGgvMiwgY2FudmFzSGVpZ2h0LzIsIGdsb2JhbFZhcnNDbGFzcy50YWJLZXlzLmpvaW5lZEtleXMsIHN0eWxlKVxuICAgLy9qb2luZWRUYWJLZXlzLnNldEZvbnRTaXplKDYwKVxuICAgam9pbmVkVGFiS2V5cy5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICBcblxuICAgLy8gY29uc29sZS5sb2coam9pbmVkVGFiS2V5cylcblxuXG4gICAvLyB2YXIgdGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgMCwgXCJ0ZXh0ICBnakrFnkFCQ0RHWSBcIiArIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgc3R5bGUpO1xuICAgIC8vIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5TY2VuZScpXG4gICAgLy8gY29uc29sZS5sb2codGV4dClcblxuICAgIC8vIHRoaXMuYWRkLmltYWdlKDAsMCwncGhhc2VyLWxvZ28nKVxuICAgIC8vIHRoaXMubXlpbSA9IHRoaXMuYWRkLmltYWdlKDYwMCwzMDAsJ3BoYXNlci1sb2dvJylcbiAgICAgLy8gdGhpcy5hZGQuaW1hZ2UoODAwLDMwMCwncGhhc2VyLWxvZ28nKVxuXG4gICAgLy8gICBjb25zb2xlLmxvZyhnbG9iYWxWYXJzQ2xhc3MudGFiTnVtYmVyKVxuIC8vICAgY29uc29sZS5sb2coIHRoaXMubXlpbS53aWR0aClcbiAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3lzLmdhbWUuY2FudmFzLm9mZnNldFdpZHRoKVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBob3cgeW91IHdvdWxkIGR5bmFtaWNhbGx5IGltcG9ydCB0aGUgbWFpblNjZW5lIGNsYXNzICh3aXRoIGNvZGUgc3BsaXR0aW5nKSxcbiAgICAgKiBhZGQgdGhlIG1haW5TY2VuZSB0byB0aGUgU2NlbmUgTWFuYWdlclxuICAgICAqIGFuZCBzdGFydCB0aGUgc2NlbmUuXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGNodW5rIHdvdWxkIGJlICdtYWluU2NlbmUuY2h1bmsuanNcbiAgICAgKiBGaW5kIG1vcmUgYWJvdXQgY29kZSBzcGxpdHRpbmcgaGVyZTogaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvY29kZS1zcGxpdHRpbmcvXG4gICAgICovXG4gICAgLy8gbGV0IHNvbWVDb25kaXRpb24gPSB0cnVlXG4gICAgLy8gaWYgKHNvbWVDb25kaXRpb24pXG4gICAgLy8gICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtYWluU2NlbmVcIiAqLyAnLi9tYWluU2NlbmUnKS50aGVuKG1haW5TY2VuZSA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2NlbmUuYWRkKCdNYWluU2NlbmUnLCBtYWluU2NlbmUuZGVmYXVsdCwgdHJ1ZSlcbiAgICAvLyAgIH0pXG4gICAgLy8gZWxzZSBjb25zb2xlLmxvZygnVGhlIG1haW5TY2VuZSBjbGFzcyB3aWxsIG5vdCBldmVuIGJlIGxvYWRlZCBieSB0aGUgYnJvd3NlcicpXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmNhbWVyYXMubWFpbilcblxuXG4gICAgdGhpcy5pbnB1dC5vbignZ2FtZW9iamVjdGRvd24nLCB0aGlzLl90b3VjaGVkT25TY3JlZW4sIHRoaXMpO1xuXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cpXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cudGFiUGx1czRMaXN0ZW4pXG4gICAgXG4gIH1cblxuICB1cGRhdGUoKXtcblxuICAgIC8vY29uc29sZS5sb2codmVsb2NpdHlPZlRhYnMpXG4gICAgLy8gbGlzdGVuIHBoaXNpY3NcblxuICAgIGlmIChsb2NrT2ZUb3VjaGVkT25TY3JlZW4pe1xuICAgICAgXG4gICAgICB0aGlzLl9jaGVja1BvcygpO1xuICAgIH1cblxuICAgIC8vIGFkanVzdCBqb2luZWQgdGV4dCBzaXplOlxuXG4gICAgaWYgKGFkanVzdFRleHRCb29sZW4pe1xuICAgICAgXG5cblxuICAgICAgaWYgKGpvaW5lZFRhYktleXMud2lkdGggPD0gcm91bmRXaWR0aC0xMCAmJiBqb2luZWRUYWJLZXlzLmhlaWdodCA8PSByb3VuZEhlaWdodC0xMCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXh0IHc6IFwiKyBqb2luZWRUYWJLZXlzLndpZHRoICsgXCIgY2FudmFzIHdpZHRoOiBcIisgY2FudmFzV2lkdGggKyBcIiBsYXN0IGZvbnQgc2l6ZTogXCIrcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSkpXG4gICAgICAgIG1pbkF2YWlsYWJsZSA9IHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpO1xuICAgICAgICAvL2FsZXJ0KFwibWluIGF2YTogXCIgKyBtaW5BdmFpbGFibGUpXG4gICAgICAgIGlmIChtaW5Ob3RBdmFpbGFibGUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgam9pbmVkVGFiS2V5cy5zZXRGb250U2l6ZSgyKnBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpKVxuICAgICAgICAgIC8vYWxlcnQoXCJpa2kga2F0aSBcIiArIHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpKVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpZiAzXCIpICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG1pZGRsZVN1cHBvc2UgPSBNYXRoLnJvdW5kKChtaW5Ob3RBdmFpbGFibGUtbWluQXZhaWxhYmxlKS8yK21pbkF2YWlsYWJsZSlcbiAgICAgICAgICBpZiAobWlkZGxlU3VwcG9zZSA9PT0gcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSkpe1xuICAgICAgICAgICAgYWRqdXN0VGV4dEJvb2xlbiA9IGZhbHNlICBcbiAgICAgICAgICAgIC8vIGZvbnQgc2l6ZSBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgdGhpcy5fYWZ0ZXJGb250U2l6ZURldGVjdGlvbih0YWJLZXlzLCBwYXJzZUludChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKSwgam9pbmVkVGFiS2V5cylcbiAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImlmIDRcIikgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBqb2luZWRUYWJLZXlzLnNldEZvbnRTaXplKG1pZGRsZVN1cHBvc2UpXG5cbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZWxzZSAyXCIpXG4gICAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coXCJpZiAyXCIpICBcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlbHNlIHRleHQgdzogXCIrIGpvaW5lZFRhYktleXMud2lkdGggKyBcIiBjYW52YXMgd2lkdGg6IFwiKyBjYW52YXNXaWR0aCArIFwiIGxhc3QgZm9udCBzaXplOiBcIitwYXJzZUludChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKSlcblxuICAgICAgICAvL2FsZXJ0KFwiZm9udHM6IFwiICsgcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSkpXG4gICAgICAgIG1pbk5vdEF2YWlsYWJsZSA9IHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpO1xuICAgICAgICBtaWRkbGVTdXBwb3NlID0gTWF0aC5yb3VuZCgobWluTm90QXZhaWxhYmxlLW1pbkF2YWlsYWJsZSkvMittaW5BdmFpbGFibGUpXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlbHNlIDNcIilcbiAgICAgICAgaWYgKG1pZGRsZVN1cHBvc2UgPT09IHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpKXtcbiAgICAgICAgICBhZGp1c3RUZXh0Qm9vbGVuID0gZmFsc2UgIFxuICAgICAgICAgIC8vIGZvbnQgc2l6ZSBpcyBkZXRlY3RlZFxuICAgICAgICAgIHRoaXMuX2FmdGVyRm9udFNpemVEZXRlY3Rpb24odGFiS2V5cywgcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSksIGpvaW5lZFRhYktleXMpXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlmIDRcIikgIFxuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJtaW4gYXY6IFwiK21pZGRsZVN1cHBvc2UpXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJzZUludChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKSlcbiAgICAgICAgam9pbmVkVGFiS2V5cy5zZXRGb250U2l6ZShtaWRkbGVTdXBwb3NlKVxuICAgICAgICAvL2FsZXJ0KCBcIm1pbiBub3QgYXZhIFwiICsgbWluTm90QXZhaWxhYmxlICtcIiBtaW4gYXY6IFwiICsgbWluQXZhaWxhYmxlICtcImluZGkgXCIgKyBwYXJzZUludChtaWRkbGVTdXBwb3NlKSlcbiAgICAgICAgLy9hbGVydChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKVxuICBcbiAgLy9jb25zb2xlLmxvZyhcImlmIDFcIikgICAgXG4gIH1cblxuXG4gICAvLyBjb25zb2xlLmxvZyh0aGlzLnN5cy5nYW1lLmNhbnZhcy5vZmZzZXRXaWR0aClcblxuICAgdGhpcy5fdGFiUGx1c0xpc3RlbigpXG5cbiAgfVxuXG4gIF9hZnRlckZvbnRTaXplRGV0ZWN0aW9uID0gKHRhYktleXMsIGZvbnRTaXplLCBvbGRUZXh0T2JqZWN0KSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhvbGRUZXh0T2JqZWN0LnN0eWxlLmZvbnRTaXplICsgXCJ0ZXh0IHdpZHRoOiBcIisgb2xkVGV4dE9iamVjdC53aWR0aCArIFwiIGNhbnZhcyB3ZGl0aDogXCIrY2FudmFzV2lkdGgpXG4gICAgLy9hbGVydChcImFmdGVycnJcIilcbiAgICBsZXQgb2xkVGV4dE9iamVjdFdpZHRoID0gb2xkVGV4dE9iamVjdC53aWR0aFxuICAgIG9sZFRleHRPYmplY3QuZGVzdHJveSgpXG4gICAgY29uc3QgdGFiTnVtYmVyID0gdGFiS2V5cy5sZW5ndGg7XG5cbiAgICBjb25zdCBzdHlsZSA9IHsgZm9udDogYGJvbGQgJHtmb250U2l6ZX1weCBBcmlhbGAsIGZpbGw6IFwiIzAwMFwiLCBib3VuZHNBbGlnbkg6IFwiY2VudGVyXCIsIGJvdW5kc0FsaWduVjogXCJtaWRkbGVcIiB9O1xuXG4gICAgLy8gb3JkZXIgdGV4dFxuICAgIGxldCB0aGVMYXN0VGV4dFdpZHRoUG9pbnQgPSAoY2FudmFzV2lkdGgtb2xkVGV4dE9iamVjdFdpZHRoKS8yO1xuICAgIC8vY29uc29sZS5sb2coXCJsYXN0OiBcIisgdGhlTGFzdFRleHRXaWR0aFBvaW50KVxuXG4gICAgbGV0IF9pbkZvcl90ZXh0V2lkdGg7XG4gICAgbGV0IF9pbkZvcl90ZXh0T2JqZWN0O1xuICAgIGxldCBfaW5Gb3JfdGV4dFNwYWNlT2JqZWN0O1xuICAgIGxldCBfaW5Gb3JfdGV4dFNwYWNlV2lkdGg7XG5cbiAgICAvLyBsZXQgX2luRm9yX3RleHRIZWlnaHQ7IHVwZGF0ZSB0byBnbG9iYWwgdmFyXG5cbiAgICAvLyBsZXQgdGFiWHNfOiBBcnJheTxvYmplY3Q+ID0gW10gLy8gdXBkYXRlIHRvIGdsb2JhbCB2YXJcblxuICAgIHRhYlhzXyA9IFtdXG5cblxuICAgIGZvciAobGV0IGk9MDsgaTx0YWJOdW1iZXI7IGkrKyl7XG4gICAgICBfaW5Gb3JfdGV4dE9iamVjdCA9IHRoaXMuYWRkLnRleHQodGhlTGFzdFRleHRXaWR0aFBvaW50LCBjYW52YXNIZWlnaHQvMiwgdGFiS2V5c1tpXSwgc3R5bGUpXG4gICAgICAuc2V0T3JpZ2luKDAsIDAuNSlcbiAgICAgIC5zZXRGb250U2l6ZShmb250U2l6ZSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICB0YWJLZXlzT2JqZWN0c18ucHVzaChfaW5Gb3JfdGV4dE9iamVjdClcbiAgICAgIFxuICAgICAgX2luRm9yX3RleHRXaWR0aCA9IF9pbkZvcl90ZXh0T2JqZWN0LndpZHRoXG5cbiAgICAgIFxuICAgICAgaWYgKGkgIT09IHRhYk51bWJlcil7XG4gICAgICAgIF9pbkZvcl90ZXh0U3BhY2VPYmplY3QgPSB0aGlzLmFkZC50ZXh0KF9pbkZvcl90ZXh0V2lkdGgrdGhlTGFzdFRleHRXaWR0aFBvaW50LCBjYW52YXNIZWlnaHQvMiwgXCIgXCIsIHN0eWxlKVxuICAgICAgICBfaW5Gb3JfdGV4dFNwYWNlV2lkdGggPSBfaW5Gb3JfdGV4dFNwYWNlT2JqZWN0LndpZHRoXG4gICAgICAgIF9pbkZvcl90ZXh0SGVpZ2h0ID0gX2luRm9yX3RleHRPYmplY3QuaGVpZ2h0IC8vIGxlc3MgdGhlbiBhdi4gcHJvYy5cblxuICAgICAgfVxuXG4gICAgICB0YWJYc18ucHVzaCh7XG4gICAgICAgIHgxOiB0aGVMYXN0VGV4dFdpZHRoUG9pbnQsXG4gICAgICAgIHgyOiBfaW5Gb3JfdGV4dFdpZHRoK3RoZUxhc3RUZXh0V2lkdGhQb2ludCxcbiAgICAgICAgd2lkdGg6IF9pbkZvcl90ZXh0V2lkdGhcbiAgICAgIH0pXG5cbiAgICAgIHRoZUxhc3RUZXh0V2lkdGhQb2ludCArPSBfaW5Gb3JfdGV4dFNwYWNlV2lkdGgrX2luRm9yX3RleHRXaWR0aFxuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlVGFiUmVjdGFuZ2xlcyh0YWJYc18sIF9pbkZvcl90ZXh0SGVpZ2h0LCBjYW52YXNIZWlnaHQvMilcblxuXG5cbiAgICAvL2NvbnNvbGUubG9nKGZvbnRTaXplKVxuXG5cbiAgfVxuXG5cbiAgX2NyZWF0ZVRhYlJlY3RhbmdsZXMgPSAodGFiWHMsIGhlaWdodCwgbWlkSGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdGFiTnVtYmVyID0gdGFiWHMubGVuZ3RoXG4gICAgbGV0IF9pbkZvcl9ncmFwaE9iamVjdDtcbiAgICBsZXQgX2luRm9yX2ZpbGxBbHBoYTtcbiAgICBcbiAgICB0YWJSZWN0YW5nbGVzXyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPHRhYk51bWJlcjsgaSsrKXtcbiAgICAgIF9pbkZvcl9maWxsQWxwaGEgPSAwLjVcbiAgICAgIGlmIChpPT09c2VsZWN0ZWRUYWJPcmRlcil7XG4gICAgICAgIF9pbkZvcl9maWxsQWxwaGEgPSAwXG4gICAgICB9XG4gICAgICBcbiAgICAgIF9pbkZvcl9ncmFwaE9iamVjdCA9IHRoaXMuYWRkLnJleFJvdW5kUmVjdGFuZ2xlKHRhYlhzW2ldLngxLCAobWlkSGVpZ2h0LShoZWlnaHQvMikpLCB0YWJYc1tpXS53aWR0aCwgIGhlaWdodCwgMzIsIDB4ZmZmZmZmLCBfaW5Gb3JfZmlsbEFscGhhKS5zZXRPcmlnaW4oMCk7IC8vIHRoaXMuYWRkLnJleFJvdW5kUmVjdGFuZ2xlKDI1MCwgMTAwLCAxMDAsIDEwMCwgMzAsIDB4MDA4ODg4KTsgLy90aGlzLmFkZC5yZXhSb3VuZFJlY3RhbmdsZSh0YWJYc1tpXS54MSwgKG1pZEhlaWdodC0oaGVpZ2h0LzIpKSwgdGFiWHNbaV0ud2lkdGgsICBoZWlnaHQsIDMyKSwgMHhmZmZmZmY7IC8vIGdsb2JhbFZhcnNDbGFzcy5oLTEwLCAzMiwgMHgwMDg4ODgpO1xuXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAvL19pbkZvcl9ncmFwaE9iamVjdC5maWxsU3R5bGUoMHhmZmZmZmYsIF9pbkZvcl9maWxsQWxwaGEpXG5cblxuICAgICAgLy9faW5Gb3JfZ3JhcGhPYmplY3QuZmlsbFJvdW5kZWRSZWN0KCk7XG5cbiAgICAgIC8qKiBcbiAgICAgIGNvbnNvbGUubG9nKGkgKyBcIiB4MTogXCIgKyB0YWJYc1tpXS54MSArIFwiIHgyOiBcIiArIHRhYlhzW2ldLngyXG4gICAgICArIFwiIHkxOiBcIiArIChtaWRIZWlnaHQtKGhlaWdodC8yKSkgKyBcIiB5MjogXCIgKyBtaWRIZWlnaHQpXG4gICAgICAqL1xuICAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cpXG5cbiAgICAgdGFiUmVjdGFuZ2xlc18ucHVzaChfaW5Gb3JfZ3JhcGhPYmplY3QpXG5cbiAgICB9XG5cbiAgICB0aGlzLl9jcmVhdGVUYWJSZWN0YW5nbGVTdHJva2VzKHRhYlhzLCBoZWlnaHQsIG1pZEhlaWdodClcblxuXG4gIH1cblxuICBfY3JlYXRlVGFiUmVjdGFuZ2xlU3Ryb2tlcyA9ICh0YWJYcywgaGVpZ2h0LCBtaWRIZWlnaHQpID0+IHtcbiAgICBjb25zdCB0YWJOdW1iZXIgPSB0YWJYcy5sZW5ndGhcbiAgICBsZXQgX2luRm9yX2dyYXBoU3Ryb2tlZE9iamVjdDtcblxuICAgIHRhYlJlY3RhbmdsZVN0cm9rZXNfID0gW107XG4gICAgZm9yIChsZXQgaT0wOyBpPHRhYk51bWJlcjsgaSsrKXtcblxuICAgICAgX2luRm9yX2dyYXBoU3Ryb2tlZE9iamVjdCA9IHRoaXMuYWRkLmdyYXBoaWNzKClcblxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgX2luRm9yX2dyYXBoU3Ryb2tlZE9iamVjdC5saW5lU3R5bGUoNSwgMHgwMDAwMDAsIDEpXG5cblxuICAgICAgX2luRm9yX2dyYXBoU3Ryb2tlZE9iamVjdC5zdHJva2VSb3VuZGVkUmVjdCh0YWJYc1tpXS54MSwgKG1pZEhlaWdodC0oaGVpZ2h0LzIpKSwgdGFiWHNbaV0ud2lkdGgsICBoZWlnaHQsIDMyKVxuICAgICAgXG4gICAgICB0YWJSZWN0YW5nbGVTdHJva2VzXy5wdXNoKF9pbkZvcl9ncmFwaFN0cm9rZWRPYmplY3QpXG5cblxuICAgIH1cblxuICAgIC8vdGhpcy5fc3dpdGNoUmVjdGFuZ2xlU3Ryb2tlcyh0YWJSZWN0YW5nbGVTdHJva2VzXywgZmFsc2UpXG5cbiAgfVxuXG4gIF9zd2l0Y2hSZWN0YW5nbGVTdHJva2VzID0gKHN0cm9rZXMsIHN0cm9rZVN3aXRjaEJvb2xlbikgPT4geyBpZiAoc3Ryb2tlcy5sZW4gPT09IHVuZGVmaW5lZCkgeyBzdHJva2VzID0gdGFiUmVjdGFuZ2xlU3Ryb2tlc18gfVxuICAgIGNvbnN0IG51bWJlck9mU3Ryb2tlcyA9IHN0cm9rZXMubGVuZ3RoXG4gICAgLy9sZXQgc3Ryb2tlQm9yZGVyc186IEFycmF5PG51bWJlcj4gPSBbMCw1XTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGk8bnVtYmVyT2ZTdHJva2VzOyBpKyspe1xuICAgICAgc3Ryb2tlc1tpXS5zZXRWaXNpYmxlKHN0cm9rZVN3aXRjaEJvb2xlbikvL2Rlc3Ryb3koKSAvL2xpbmVTdHlsZSgxLCAweDAwMDAwMCwgMCkgLy8gc3Ryb2tlQm9yZGVyc19bc3Ryb2tlU3dpdGNoQm9vbGVuXSlcbiAgICAgIC8vY29uc29sZS5sb2coc3Ryb2tlc1tpXSlcbiAgICB9XG4gIH1cblxuICBfdG91Y2hlZE9uU2NyZWVuID0gKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHsgaWYgKGxvY2tPZlRvdWNoZWRPblNjcmVlbil7IHJldHVybiB9IFxuXG4gICAgc2VsZWN0aW9uID0gdGFiS2V5c09iamVjdHNfLmluZGV4T2YoZ2FtZU9iamVjdClcblxuICAgIGlmIChzZWxlY3Rpb24gPT09IHNlbGVjdGVkVGFiT3JkZXIpIHsgcmV0dXJuIH1cblxuICAgIGxvY2tPZlRvdWNoZWRPblNjcmVlbiA9IHRydWVcblxuICAgIHRoaXMuX3N3aXRjaFJlY3RhbmdsZVN0cm9rZXMoXCJcIiwgZmFsc2UpXG4gICAgLy9jb25zb2xlLmxvZyhnYW1lT2JqZWN0KVxuICAgIC8vY29uc29sZS5sb2codGFiS2V5c09iamVjdHNfLmluZGV4T2YoZ2FtZU9iamVjdCkpXG5cbiAgICB0aGlzLl9yZWN0YW5nbGVBbmltYXRpb24oc2VsZWN0aW9uKVxuXG4gIH1cblxuICBfcmVjdGFuZ2xlQW5pbWF0aW9uKHNlbGVjdGlvbk9yZGVyKXtcblxuICAgIC8vIHdheSBvZiBhbmltYXRpb25cblxuICAgIHdheU9mRGlyZWN0aW9uID0gTWF0aC5zaWduKHNlbGVjdGlvbk9yZGVyLXNlbGVjdGVkVGFiT3JkZXIpXG5cbiAgICAvLyBhbmltYXRpb24gd2lsbCBiZSBpbiB0aGUgdXBkYXRlIGZ1bmN0aW9uXG5cbiAgICAvLyBpbiB0aGlzIGZ4IGNyZWF0ZSBsZWZ0IGFuZCByaWdodCByZWN0YWJnbGVzXG5cbiAgICAvLyBsZWZ0XG5cbiAgICBcblxuICAgIGxldCBsZWZ0UmVjdGFuZ2xlID0gdGhpcy5hZGQucmV4Um91bmRSZWN0YW5nbGUoLWNhbnZhc1dpZHRoLCAobWlkSGVpZ2h0LShfaW5Gb3JfdGV4dEhlaWdodC8yKSksIGNhbnZhc1dpZHRoLCAgX2luRm9yX3RleHRIZWlnaHQsIDMyLCAweGZmZmZmZiwgMC41KS5zZXRPcmlnaW4oMCk7XG5cbiAgICBsZXQgcmlnaHRSZWN0YW5nbGUgPSB0aGlzLmFkZC5yZXhSb3VuZFJlY3RhbmdsZShjYW52YXNXaWR0aCwgKG1pZEhlaWdodC0oX2luRm9yX3RleHRIZWlnaHQvMikpLCBjYW52YXNXaWR0aCwgIF9pbkZvcl90ZXh0SGVpZ2h0LCAzMiwgMHhmZmZmZmYsIDAuNSkuc2V0T3JpZ2luKDApO1xuXG5cbiAgICAvLyBhZGQgdGhpcyB0d28gb2JqIHRvIHRhYlJlY3RhbmdsZXNfIGFycmF5XG5cbiAgICB0YWJSZWN0YW5nbGVzXy5wdXNoKGxlZnRSZWN0YW5nbGUsIHJpZ2h0UmVjdGFuZ2xlKVxuXG4gICAgXG5cbiAgICAvL2xldCBjb250YWluZXIgPSB0aGlzLmFkZC5jb250YWluZXIoMCwwKVxuICAgIC8vY29uc29sZS5sb2codGFiUmVjdGFuZ2xlc19bMF0pXG4gICAgLy8gY29uc29sZS5sb2cgKHdpbmRvdy5QaGFzZXIuUGh5c2ljcy5BcmNhZGUuYm9keSgpKVxuICAgIC8vIGNvbnRhaW5lci5hZGQodGFiUmVjdGFuZ2xlc19bMF0pXG5cbiAgICAvL3RoaXMucGh5c2ljcy5lbmFibGUodGFiUmVjdGFuZ2xlc19bMF0pXG5cbiAgICBzZWxlY3Rpb25YID0gdGFiUmVjdGFuZ2xlc19bc2VsZWN0aW9uXS54XG5cbiAgICB0YWJSZWN0YW5nbGVzXy5tYXAoIHggPT4ge3RoaXMucGh5c2ljcy5hZGQuZXhpc3RpbmcoeCkgfSApIFxuICAgIFxuICAgIHRhYlJlY3RhbmdsZXNfLm1hcCggeCA9PiB4LmJvZHkudmVsb2NpdHkueCA9IHZlbG9jaXR5T2ZUYWJzKndheU9mRGlyZWN0aW9uKVxuXG4gICAgLy8gYWZ0ZXIgdGhhdCwgaXQgd2lsbCBsaXN0ZW4gb24gdXBkYXRlIGZ4IHdpdGggbG9ja09mVG91Y2hlZE9uU2NyZWVuIHZhci5cblxuXG4gIH1cblxuICBfYWZ0ZXJSZWN0YW5nbGVBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgdGFiUmVjdGFuZ2xlc18ubWFwKCB4ID0+IHguYm9keS52ZWxvY2l0eS54ID0gMCp3YXlPZkRpcmVjdGlvbilcbiAgICAvLyBjb25zb2xlLmxvZyh0YWJSZWN0YW5nbGVzX1tzZWxlY3RlZFRhYk9yZGVyLnhdKVxuXG5cblxuICAgIHRoaXMuX3N3aXRjaFJlY3RhbmdsZVN0cm9rZXMoXCJcIiwgdHJ1ZSlcbiAgICBzZWxlY3RlZFRhYk9yZGVyID0gc2VsZWN0aW9uXG4gICAgLy8gZGVsZXRlIHJlY3RhbmdsZXMgdGhlbiBjcmVhdGUgYWdhaW5cbiAgICB0aGlzLl9yZWZyZXNoUmVjdGFuZ2xlcygpIFxuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShge1wiSlNPTkVEX3NlbGVjdGVkVGFiTnVtYmVyXCI6JHtzZWxlY3RlZFRhYk9yZGVyfX1gKTtcbiAgICBsb2NrT2ZUb3VjaGVkT25TY3JlZW4gPSBmYWxzZVxuICB9XG5cbiAgX3JlZnJlc2hSZWN0YW5nbGVzID0gKCkgPT4ge1xuICAgIC8qKlxuICAgIGZvciAobGV0IGkgPSAwOyBpPHRhYlJlY3RhbmdsZVN0cm9rZXNfLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRhYlJlY3RhbmdsZVN0cm9rZXNfW2ldLmRlc3Ryb3koKVxuICAgIH1cbiAgICAqL1xuICAgIHRhYlJlY3RhbmdsZVN0cm9rZXNfLm1hcCh4ID0+IHguZGVzdHJveSgpKVxuICAgIHRhYlJlY3RhbmdsZXNfLm1hcCh4ID0+IHguZGVzdHJveSgpKVxuXG4gICAgLy8gY3JlYXRlIGFnYWluXG5cbiAgICB0aGlzLl9jcmVhdGVUYWJSZWN0YW5nbGVzKHRhYlhzXywgX2luRm9yX3RleHRIZWlnaHQsIGNhbnZhc0hlaWdodC8yKVxuICB9XG5cbiAgX2NoZWNrUG9zID0gKCkgPT4ge1xuICAgIC8vY29uc29sZS5sb2coIHdheU9mRGlyZWN0aW9uKVxuICAgICAgaWYgKCB0YWJSZWN0YW5nbGVzXy5sZW5ndGggPT09IDApeyByZXR1cm4gfVxuICAgICAgaWYgKHdheU9mRGlyZWN0aW9uID09PSAxKXtcbiAgICAgICAgaWYgKHRhYlJlY3RhbmdsZXNfW3NlbGVjdGVkVGFiT3JkZXJdLnggPj0gc2VsZWN0aW9uWCl7IHRoaXMuX2FmdGVyUmVjdGFuZ2xlQW5pbWF0aW9uKCkgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZiAodGFiUmVjdGFuZ2xlc19bc2VsZWN0ZWRUYWJPcmRlcl0ueCA8PSBzZWxlY3Rpb25YKXsgdGhpcy5fYWZ0ZXJSZWN0YW5nbGVBbmltYXRpb24oKSB9XG4gICAgICAgIH1cbiAgfVxuXG4gIF90YWJQbHVzTGlzdGVuID0gKCkgPT4ge1xuICAgIGlmICggd2luZG93LnRhYlBsdXM0TGlzdGVuID09PSAwICl7IHJldHVybiB9XG4gICAgbGV0IG5ld1NlbGVjdGlvbiA9IHNlbGVjdGVkVGFiT3JkZXIrd2luZG93LnRhYlBsdXM0TGlzdGVuXG4gICAgd2luZG93LnRhYlBsdXM0TGlzdGVuID0gMDtcbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSB0YWJLZXlzT2JqZWN0c18ubGVuZ3RoKXsgbmV3U2VsZWN0aW9uID0gMCB9XG4gICAgaWYgKG5ld1NlbGVjdGlvbiA9PT0gLTEpeyBuZXdTZWxlY3Rpb24gPSB0YWJLZXlzT2JqZWN0c18ubGVuZ3RoLTF9XG4gICAgXG4gICAgdGhpcy5fbGlrZVRvdWNoKG5ld1NlbGVjdGlvbilcblxuICB9XG5cbiAgX2xpa2VUb3VjaCA9IChzZWxlY3Rpb24pID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb25PYmplY3QgPSB0YWJLZXlzT2JqZWN0c19bc2VsZWN0aW9uXVxuXG4gICAgdGhpcy5fdG91Y2hlZE9uU2NyZWVuKFwiXCIsIHNlbGVjdGlvbk9iamVjdClcblxuICB9XG5cblxuXG5cbn1cbiIsIi8qKlxuICogUExFQVNFIERPIE5PVCBSRU1PVkUgVEhJUyBOT1RJQ0UhXG4gKlxuICogQHRlbXBsYXRlICAgICAgICBUaGlzIFBoYXNlciBnYW1lIHdhcyBidWlsdCB1c2luZyBwaGFzZXItcHJvamVjdC10ZW1wbGF0ZSAoaHR0cHM6Ly9naXRodWIuY29tL3lhbmRldS9waGFzZXItcHJvamVjdC10ZW1wbGF0ZSlcbiAqIEBhdXRob3IgICAgICAgICAgWWFubmljayBEZXViZWwgKGh0dHBzOi8vZ2l0aHViLmNvbS95YW5kZXUpXG4gKiBAY29weXJpZ2h0ICAgICAgIDIwMTkgWWFubmljayBEZXViZWxcbiAqIEBsaWNlbnNlICAgICAgICAge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS95YW5kZXUvcGhhc2VyLXByb2plY3QtdGVtcGxhdGUvYmxvYi9tYXN0ZXIvTElDRU5TRXxNSVQgTGljZW5zZX1cbiAqL1xuXG4vLyBPZiBjb3Vyc2UgeW91IGNhbiByZW1vdmUgaXQgaWYgeW91IHJlYWxseSB3YW50IHRvLCBidXQgaXQgd291bGQgYmUgbmljZSBpZiB5b3Ugd291bGQgbGVhdmUgaXQgdGhlcmUgOilcblxuY29uc29sZS5sb2coXG4gICclYyAlYyAlYyAlYyAlYyBCdWlsdCB1c2luZyBwaGFzZXItcHJvamVjdC10ZW1wbGF0ZSAlYyBodHRwczovL2dpdGh1Yi5jb20veWFuZGV1L3BoYXNlci1wcm9qZWN0LXRlbXBsYXRlJyxcbiAgJ2JhY2tncm91bmQ6ICNmZjAwMDAnLFxuICAnYmFja2dyb3VuZDogI2ZmZmYwMCcsXG4gICdiYWNrZ3JvdW5kOiAjMDBmZjAwJyxcbiAgJ2JhY2tncm91bmQ6ICMwMGZmZmYnLFxuICAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDAwMDA7JyxcbiAgJ2JhY2tncm91bmQ6IG5vbmUnXG4pXG4iXSwic291cmNlUm9vdCI6IiJ9