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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
var URL = __importStar(__webpack_require__(/*! url */ "./node_modules/url/url.js"));
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
                return true;
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
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexroundrectangleplugin.min.js';
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

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/scripts/game.ts ./webpack/credits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/game.ts */"./src/scripts/game.ts");
module.exports = __webpack_require__(/*! ./webpack/credits.js */"./webpack/credits.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9vYmplY3RzL2dsb2JhbFZhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2NlbmVzL3RhYlNjZW5lLnRzIiwid2VicGFjazovLy8uL3dlYnBhY2svY3JlZGl0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FB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RSxDQUFDO0lBNkRILG1CQUFDO0FBQUQsQ0FBQyxDQXJieUMsTUFBTSxDQUFDLEtBQUssR0FxYnJEOzs7Ozs7Ozs7Ozs7O0FDeGREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgR2xvYmFsVmFycyBmcm9tICcuL29iamVjdHMvZ2xvYmFsVmFycydcblxuaW1wb3J0ICdwaGFzZXInXG4vLyBpbXBvcnQgTWFpblNjZW5lIGZyb20gJy4vc2NlbmVzL21haW5TY2VuZSdcbmltcG9ydCBUYWJTY2VuZSBmcm9tICcuL3NjZW5lcy90YWJTY2VuZSdcblxuXG5sZXQgREVGQVVMVF9XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cbmxldCBERUZBVUxUX0hFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG5cblxuY29uc3QgZ2xvYmFsVmFyc0NsYXNzID0gbmV3IEdsb2JhbFZhcnModGhpcylcblxuaWYgKGdsb2JhbFZhcnNDbGFzcy53ICE9PSBudWxsKXtcbiAgREVGQVVMVF9XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW9cbiAgREVGQVVMVF9IRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xufVxuXG5cbi8vIEB0cy1pZ25vcmUgaHR0cHM6Ly9naXRodWIuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9pc3N1ZXMvNDUyMlxuLy8gc3RpbGwgbm90IHdvcmtpbmcgaW4gMy4xOC4xIDovXG5jb25zdCBjb25maWc6IEdhbWVDb25maWcgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICBzY2FsZToge1xuICAgIHBhcmVudDogJ3BoYXNlci1nYW1lJyxcbiAgICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxuICAgIGF1dG9DZW50ZXI6IFBoYXNlci5TY2FsZS5DRU5URVJfQk9USCxcbiAgICB3aWR0aDogREVGQVVMVF9XSURUSCxcbiAgICBoZWlnaHQ6IERFRkFVTFRfSEVJR0hUXG4gIH0sXG5cbiAgXG5cbiAgc2NlbmU6IFtUYWJTY2VuZV0sIC8vIE1haW5TY2VuZSBvbmx5IHRhYiBzY2VuZVxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG5cbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgXG4gIGNvbmZpZy5zY2FsZS5ERUZBVUxUX1dJRFRIID0gd2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuICBjb25maWcuc2NhbGUuREVGQVVMVF9IRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb1xuXG5cbiAgIFxuICBcbiAgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xuXG5cbn0pXG4vL1xuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL3R5cGluZ3Mvbm9kZS5kLnRzXCIvPlxyXG5pbXBvcnQgKiBhcyBVUkwgZnJvbSBcInVybFwiO1xyXG5jb25zdCBIUkVGID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbmNvbnN0IHBhcnNlZEN1cnJlbnRVcmwgPSBVUkwucGFyc2UoSFJFRilcclxuY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJzZWRDdXJyZW50VXJsLnNlYXJjaClcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdsb2JhbFZhcnN7XHJcbiAgICB0YWJOdW1iZXI7XHJcbiAgICB3O1xyXG4gICAgaDtcclxuICAgIHdfZGV2aWNlU2NhbGVkO1xyXG4gICAgaF9kZXZpY2VTY2FsZWQ7XHJcbiAgICB0YWJLZXlzO1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpe1xyXG4gICAgICAgIHRoaXMudGFiTnVtYmVyID0gc2VhcmNoUGFyYW1zLmdldChcInRhYk51bWJlclwiKTsvLyBzY2VuZS5TY2VuZU1hbmFnZXI7Ly9zY2VuZS5nYW1lLmNvbmZpZzsvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHJlZlwiKS5pbm5lckhUTUw7Ly9odHRwOyAvL215VXJsOy8vc2NlbmUuc3lzLmNhbnZhcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdXHJcbiAgICAgICAgdGhpcy53ID0gc2VhcmNoUGFyYW1zLmdldChcIndcIik7XHJcbiAgICAgICAgdGhpcy5oID0gc2VhcmNoUGFyYW1zLmdldChcImhcIik7XHJcbiAgICAgICAgdGhpcy53X2RldmljZVNjYWxlZCA9IHRoaXMudyAqICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgICAgICB0aGlzLmhfZGV2aWNlU2NhbGVkID0gdGhpcy5oICogIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgIC8vIGdldCB0YWIga2V5c1xyXG4gICAgICAgIHRoaXMudGFiS2V5cyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ0YWJLZXlzXCIpO1xyXG4gICAgICAgIHRoaXMudGFiS2V5cyA9IHtcclxuICAgICAgICAgICAga2V5czogdGhpcy5wYXJzZUtleXModGhpcy50YWJLZXlzKSwgLy8gYXJyYXllZH1cclxuICAgICAgICAgICAgbnVtYmVyOiB0aGlzLnBhcnNlS2V5cyh0aGlzLnRhYktleXMpLmxlbmd0aCxcclxuICAgICAgICAgICAgam9pbmVkS2V5czogdGhpcy5wYXJzZUtleXModGhpcy50YWJLZXlzKS5qb2luKFwiIFwiKSAvLyBkZWZhdWx0IGNoYXI6IHNwYWNlXHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbnBhcnNlS2V5cyA9ICh0YWJLZXlzOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IF9zcGxpdHRlZCA9IHRhYktleXMuc3BsaXQoXCIsXCIpXHJcbiAgICByZXR1cm4gX3NwbGl0dGVkO1xyXG59XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BoYXNlci90eXBlcy9waGFzZXIuZC50c1wiLz5cbmltcG9ydCBHbG9iYWxWYXJzIGZyb20gJy4uL29iamVjdHMvZ2xvYmFsVmFycydcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ2h0dHAnO1xuXG5sZXQgam9pbmVkVGFiS2V5cztcbmxldCByb3VuZFdpZHRoO1xubGV0IHJvdW5kSGVpZ2h0O1xubGV0IGFkanVzdFRleHRCb29sZW4gPSB0cnVlO1xuXG5sZXQgbWluQXZhaWxhYmxlO1xubGV0IG1pbk5vdEF2YWlsYWJsZTtcbmxldCBtaWRkbGVTdXBwb3NlO1xuXG5cbmxldCBjYW52YXNXaWR0aDtcbmxldCBjYW52YXNIZWlnaHQ7XG5cbmxldCB0YWJLZXlzO1xuXG5sZXQgdGFiUmVjdGFuZ2xlc186IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUgfCBQaGFzZXIuR2FtZU9iamVjdHMuR2FtZU9iamVjdD4gPSBbXTsgLy8gZmlsbGVkXG5sZXQgdGFiUmVjdGFuZ2xlU3Ryb2tlc186IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGU+ID0gW11cbmxldCB0YWJLZXlzT2JqZWN0c186IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0PiA9IFtdO1xubGV0IGxvY2tPZlRvdWNoZWRPblNjcmVlbiA9IGZhbHNlO1xubGV0IHNlbGVjdGVkVGFiT3JkZXIgPSAwO1xubGV0IF9pbkZvcl90ZXh0SGVpZ2h0O1xubGV0IG1pZEhlaWdodDtcbmxldCB3YXlPZkRpcmVjdGlvbjtcbmxldCBzZWxlY3Rpb249MDtcbmxldCBzZWxlY3Rpb25YOyAvLyBiZWZvcmUgbW92ZW1lbnRcbmxldCB0YWJYc186IEFycmF5PG9iamVjdD4gPSBbXSBcblxubGV0IHZlbG9jaXR5T2ZUYWJzOyAvLyBjYWxjdWxhdGUgd2l0aCB0YWIgbnVtYmVyID0gTWF0aC5yb3VuZCgxMDAwL3RhYm5VTUJFUilcbmxldCBudW1iZXJPZlRhYnM7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgbXlpbTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoeyBrZXk6ICdQcmVsb2FkU2NlbmUnIH0pXG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHZhciB1cmw7XG4gIFxuICAgIHVybCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcmV4cmFpbmJvdy9waGFzZXIzLXJleC1ub3Rlcy9tYXN0ZXIvZGlzdC9yZXhyb3VuZHJlY3RhbmdsZXBsdWdpbi5taW4uanMnO1xuICAgIHRoaXMubG9hZC5wbHVnaW4oJ3JleHJvdW5kcmVjdGFuZ2xlcGx1Z2luJywgdXJsLCB0cnVlKTsgICAgICBcbiAgXG4gIH1cblxuICBcbiAgY3JlYXRlKCkge1xuICAgIC8qKiBcbiAgICBjb25zdCBlbXB0eU9iaiA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLDAsMCwwKVxuICAgIHRoaXMucGh5c2ljcy5hZGQuZXhpc3RpbmcoZW1wdHlPYmopXG4gICAgZW1wdHlPYmouYm9keS52ZWxvY2l0eS54ID0gMFxuICAgIC8vZW1wdHlPYmoueCA9IDBcbiAgICBjb25zb2xlLmxvZyhlbXB0eU9iailcbiAgICB0YWJSZWN0YW5nbGVzXy5wdXNoKGVtcHR5T2JqKVxuXG4gICAgKi9cblxuICAgIC8vY29uc29sZS5sb2codGhpcy5hZGQpXG5cbiAgICBjb25zdCBnbG9iYWxWYXJzQ2xhc3MgPSBuZXcgR2xvYmFsVmFycyh0aGlzKVxuXG5cbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcygpO1xuICAgIGdyYXBoaWNzLmxpbmVTdHlsZSg1LCAweDAwMDAwMCwgMC41KTtcblxuICAgIHJvdW5kV2lkdGggPSAod2luZG93LmlubmVyV2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyktMTBcbiAgICByb3VuZEhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyktMTBcblxuICAgIGNhbnZhc1dpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgY2FudmFzSGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuXG4gICAgbWlkSGVpZ2h0ID0gY2FudmFzSGVpZ2h0LzJcblxuICAgIGdyYXBoaWNzLnN0cm9rZVJvdW5kZWRSZWN0KDUsIDUsICh3aW5kb3cuaW5uZXJXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKS0xMCwgICh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyktMTAsIDMyKTsgLy8gZ2xvYmFsVmFyc0NsYXNzLmgtMTAsIDMyKTtcblxuICAgIHZhciBzdHlsZSA9IHsgZm9udDogXCJib2xkIDFweCBBcmlhbFwiLCBmaWxsOiBcIiMwMDBcIiwgYm91bmRzQWxpZ25IOiBcImNlbnRlclwiLCBib3VuZHNBbGlnblY6IFwibWlkZGxlXCIgfTtcblxuICAgIC8vY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaGFzZXItZ2FtZVwiKSlcblxuICAgLy8gdGFiS2V5cyBwcm9jZXNzXG5cbiAgIHRhYktleXMgPSBnbG9iYWxWYXJzQ2xhc3MudGFiS2V5cy5rZXlzXG5cbiAgIC8vIGNhbGN1bGF0ZSBzcGVlZCB3aXRoIHRhYiBudW1iZXJcblxuICAgbnVtYmVyT2ZUYWJzID0gZ2xvYmFsVmFyc0NsYXNzLnRhYktleXMubnVtYmVyXG5cbiAgIHZlbG9jaXR5T2ZUYWJzID0gTWF0aC5yb3VuZCg4MDAwL251bWJlck9mVGFicylcblxuICAgam9pbmVkVGFiS2V5cyA9IHRoaXMuYWRkLnRleHQoY2FudmFzV2lkdGgvMiwgY2FudmFzSGVpZ2h0LzIsIGdsb2JhbFZhcnNDbGFzcy50YWJLZXlzLmpvaW5lZEtleXMsIHN0eWxlKVxuICAgLy9qb2luZWRUYWJLZXlzLnNldEZvbnRTaXplKDYwKVxuICAgam9pbmVkVGFiS2V5cy5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICBcblxuICAgLy8gY29uc29sZS5sb2coam9pbmVkVGFiS2V5cylcblxuXG4gICAvLyB2YXIgdGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgMCwgXCJ0ZXh0ICBnakrFnkFCQ0RHWSBcIiArIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgc3R5bGUpO1xuICAgIC8vIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5TY2VuZScpXG4gICAgLy8gY29uc29sZS5sb2codGV4dClcblxuICAgIC8vIHRoaXMuYWRkLmltYWdlKDAsMCwncGhhc2VyLWxvZ28nKVxuICAgIC8vIHRoaXMubXlpbSA9IHRoaXMuYWRkLmltYWdlKDYwMCwzMDAsJ3BoYXNlci1sb2dvJylcbiAgICAgLy8gdGhpcy5hZGQuaW1hZ2UoODAwLDMwMCwncGhhc2VyLWxvZ28nKVxuXG4gICAgLy8gICBjb25zb2xlLmxvZyhnbG9iYWxWYXJzQ2xhc3MudGFiTnVtYmVyKVxuIC8vICAgY29uc29sZS5sb2coIHRoaXMubXlpbS53aWR0aClcbiAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3lzLmdhbWUuY2FudmFzLm9mZnNldFdpZHRoKVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBob3cgeW91IHdvdWxkIGR5bmFtaWNhbGx5IGltcG9ydCB0aGUgbWFpblNjZW5lIGNsYXNzICh3aXRoIGNvZGUgc3BsaXR0aW5nKSxcbiAgICAgKiBhZGQgdGhlIG1haW5TY2VuZSB0byB0aGUgU2NlbmUgTWFuYWdlclxuICAgICAqIGFuZCBzdGFydCB0aGUgc2NlbmUuXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGNodW5rIHdvdWxkIGJlICdtYWluU2NlbmUuY2h1bmsuanNcbiAgICAgKiBGaW5kIG1vcmUgYWJvdXQgY29kZSBzcGxpdHRpbmcgaGVyZTogaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvY29kZS1zcGxpdHRpbmcvXG4gICAgICovXG4gICAgLy8gbGV0IHNvbWVDb25kaXRpb24gPSB0cnVlXG4gICAgLy8gaWYgKHNvbWVDb25kaXRpb24pXG4gICAgLy8gICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtYWluU2NlbmVcIiAqLyAnLi9tYWluU2NlbmUnKS50aGVuKG1haW5TY2VuZSA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2NlbmUuYWRkKCdNYWluU2NlbmUnLCBtYWluU2NlbmUuZGVmYXVsdCwgdHJ1ZSlcbiAgICAvLyAgIH0pXG4gICAgLy8gZWxzZSBjb25zb2xlLmxvZygnVGhlIG1haW5TY2VuZSBjbGFzcyB3aWxsIG5vdCBldmVuIGJlIGxvYWRlZCBieSB0aGUgYnJvd3NlcicpXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmNhbWVyYXMubWFpbilcblxuXG4gICAgdGhpcy5pbnB1dC5vbignZ2FtZW9iamVjdGRvd24nLCB0aGlzLl90b3VjaGVkT25TY3JlZW4sIHRoaXMpO1xuXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cpXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3cudGFiUGx1czRMaXN0ZW4pXG4gICAgXG4gIH1cblxuICB1cGRhdGUoKXtcblxuICAgIC8vY29uc29sZS5sb2codmVsb2NpdHlPZlRhYnMpXG4gICAgLy8gbGlzdGVuIHBoaXNpY3NcblxuICAgIGlmIChsb2NrT2ZUb3VjaGVkT25TY3JlZW4pe1xuICAgICAgXG4gICAgICB0aGlzLl9jaGVja1BvcygpO1xuICAgIH1cblxuICAgIC8vIGFkanVzdCBqb2luZWQgdGV4dCBzaXplOlxuXG4gICAgaWYgKGFkanVzdFRleHRCb29sZW4pe1xuICAgICAgXG5cblxuICAgICAgaWYgKGpvaW5lZFRhYktleXMud2lkdGggPD0gcm91bmRXaWR0aC0xMCAmJiBqb2luZWRUYWJLZXlzLmhlaWdodCA8PSByb3VuZEhlaWdodC0xMCl7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJ0ZXh0IHc6IFwiKyBqb2luZWRUYWJLZXlzLndpZHRoICsgXCIgY2FudmFzIHdpZHRoOiBcIisgY2FudmFzV2lkdGggKyBcIiBsYXN0IGZvbnQgc2l6ZTogXCIrcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSkpXG4gICAgICAgIG1pbkF2YWlsYWJsZSA9IHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpO1xuICAgICAgICAvL2FsZXJ0KFwibWluIGF2YTogXCIgKyBtaW5BdmFpbGFibGUpXG4gICAgICAgIGlmIChtaW5Ob3RBdmFpbGFibGUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgam9pbmVkVGFiS2V5cy5zZXRGb250U2l6ZSgyKnBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpKVxuICAgICAgICAgIC8vYWxlcnQoXCJpa2kga2F0aSBcIiArIHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpKVxuXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJpZiAzXCIpICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIG1pZGRsZVN1cHBvc2UgPSBNYXRoLnJvdW5kKChtaW5Ob3RBdmFpbGFibGUtbWluQXZhaWxhYmxlKS8yK21pbkF2YWlsYWJsZSlcbiAgICAgICAgICBpZiAobWlkZGxlU3VwcG9zZSA9PT0gcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSkpe1xuICAgICAgICAgICAgYWRqdXN0VGV4dEJvb2xlbiA9IGZhbHNlICBcbiAgICAgICAgICAgIC8vIGZvbnQgc2l6ZSBpcyBkZXRlY3RlZFxuICAgICAgICAgICAgdGhpcy5fYWZ0ZXJGb250U2l6ZURldGVjdGlvbih0YWJLZXlzLCBwYXJzZUludChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKSwgam9pbmVkVGFiS2V5cylcbiAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImlmIDRcIikgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBqb2luZWRUYWJLZXlzLnNldEZvbnRTaXplKG1pZGRsZVN1cHBvc2UpXG5cbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiZWxzZSAyXCIpXG4gICAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coXCJpZiAyXCIpICBcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlbHNlIHRleHQgdzogXCIrIGpvaW5lZFRhYktleXMud2lkdGggKyBcIiBjYW52YXMgd2lkdGg6IFwiKyBjYW52YXNXaWR0aCArIFwiIGxhc3QgZm9udCBzaXplOiBcIitwYXJzZUludChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKSlcblxuICAgICAgICAvL2FsZXJ0KFwiZm9udHM6IFwiICsgcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSkpXG4gICAgICAgIG1pbk5vdEF2YWlsYWJsZSA9IHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpO1xuICAgICAgICBtaWRkbGVTdXBwb3NlID0gTWF0aC5yb3VuZCgobWluTm90QXZhaWxhYmxlLW1pbkF2YWlsYWJsZSkvMittaW5BdmFpbGFibGUpXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJlbHNlIDNcIilcbiAgICAgICAgaWYgKG1pZGRsZVN1cHBvc2UgPT09IHBhcnNlSW50KGpvaW5lZFRhYktleXMuc3R5bGUuZm9udFNpemUpKXtcbiAgICAgICAgICBhZGp1c3RUZXh0Qm9vbGVuID0gZmFsc2UgIFxuICAgICAgICAgIC8vIGZvbnQgc2l6ZSBpcyBkZXRlY3RlZFxuICAgICAgICAgIHRoaXMuX2FmdGVyRm9udFNpemVEZXRlY3Rpb24odGFiS2V5cywgcGFyc2VJbnQoam9pbmVkVGFiS2V5cy5zdHlsZS5mb250U2l6ZSksIGpvaW5lZFRhYktleXMpXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImlmIDRcIikgIFxuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJtaW4gYXY6IFwiK21pZGRsZVN1cHBvc2UpXG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJzZUludChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKSlcbiAgICAgICAgam9pbmVkVGFiS2V5cy5zZXRGb250U2l6ZShtaWRkbGVTdXBwb3NlKVxuICAgICAgICAvL2FsZXJ0KCBcIm1pbiBub3QgYXZhIFwiICsgbWluTm90QXZhaWxhYmxlICtcIiBtaW4gYXY6IFwiICsgbWluQXZhaWxhYmxlICtcImluZGkgXCIgKyBwYXJzZUludChtaWRkbGVTdXBwb3NlKSlcbiAgICAgICAgLy9hbGVydChqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKVxuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyhqb2luZWRUYWJLZXlzLnN0eWxlLmZvbnRTaXplKVxuICBcbiAgLy9jb25zb2xlLmxvZyhcImlmIDFcIikgICAgXG4gIH1cblxuXG4gICAvLyBjb25zb2xlLmxvZyh0aGlzLnN5cy5nYW1lLmNhbnZhcy5vZmZzZXRXaWR0aClcblxuICAgdGhpcy5fdGFiUGx1c0xpc3RlbigpXG5cbiAgfVxuXG4gIF9hZnRlckZvbnRTaXplRGV0ZWN0aW9uID0gKHRhYktleXMsIGZvbnRTaXplLCBvbGRUZXh0T2JqZWN0KSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhvbGRUZXh0T2JqZWN0LnN0eWxlLmZvbnRTaXplICsgXCJ0ZXh0IHdpZHRoOiBcIisgb2xkVGV4dE9iamVjdC53aWR0aCArIFwiIGNhbnZhcyB3ZGl0aDogXCIrY2FudmFzV2lkdGgpXG4gICAgLy9hbGVydChcImFmdGVycnJcIilcbiAgICBsZXQgb2xkVGV4dE9iamVjdFdpZHRoID0gb2xkVGV4dE9iamVjdC53aWR0aFxuICAgIG9sZFRleHRPYmplY3QuZGVzdHJveSgpXG4gICAgY29uc3QgdGFiTnVtYmVyID0gdGFiS2V5cy5sZW5ndGg7XG5cbiAgICBjb25zdCBzdHlsZSA9IHsgZm9udDogYGJvbGQgJHtmb250U2l6ZX1weCBBcmlhbGAsIGZpbGw6IFwiIzAwMFwiLCBib3VuZHNBbGlnbkg6IFwiY2VudGVyXCIsIGJvdW5kc0FsaWduVjogXCJtaWRkbGVcIiB9O1xuXG4gICAgLy8gb3JkZXIgdGV4dFxuICAgIGxldCB0aGVMYXN0VGV4dFdpZHRoUG9pbnQgPSAoY2FudmFzV2lkdGgtb2xkVGV4dE9iamVjdFdpZHRoKS8yO1xuICAgIC8vY29uc29sZS5sb2coXCJsYXN0OiBcIisgdGhlTGFzdFRleHRXaWR0aFBvaW50KVxuXG4gICAgbGV0IF9pbkZvcl90ZXh0V2lkdGg7XG4gICAgbGV0IF9pbkZvcl90ZXh0T2JqZWN0O1xuICAgIGxldCBfaW5Gb3JfdGV4dFNwYWNlT2JqZWN0O1xuICAgIGxldCBfaW5Gb3JfdGV4dFNwYWNlV2lkdGg7XG5cbiAgICAvLyBsZXQgX2luRm9yX3RleHRIZWlnaHQ7IHVwZGF0ZSB0byBnbG9iYWwgdmFyXG5cbiAgICAvLyBsZXQgdGFiWHNfOiBBcnJheTxvYmplY3Q+ID0gW10gLy8gdXBkYXRlIHRvIGdsb2JhbCB2YXJcblxuICAgIHRhYlhzXyA9IFtdXG5cblxuICAgIGZvciAobGV0IGk9MDsgaTx0YWJOdW1iZXI7IGkrKyl7XG4gICAgICBfaW5Gb3JfdGV4dE9iamVjdCA9IHRoaXMuYWRkLnRleHQodGhlTGFzdFRleHRXaWR0aFBvaW50LCBjYW52YXNIZWlnaHQvMiwgdGFiS2V5c1tpXSwgc3R5bGUpXG4gICAgICAuc2V0T3JpZ2luKDAsIDAuNSlcbiAgICAgIC5zZXRGb250U2l6ZShmb250U2l6ZSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICB0YWJLZXlzT2JqZWN0c18ucHVzaChfaW5Gb3JfdGV4dE9iamVjdClcbiAgICAgIFxuICAgICAgX2luRm9yX3RleHRXaWR0aCA9IF9pbkZvcl90ZXh0T2JqZWN0LndpZHRoXG5cbiAgICAgIFxuICAgICAgaWYgKGkgIT09IHRhYk51bWJlcil7XG4gICAgICAgIF9pbkZvcl90ZXh0U3BhY2VPYmplY3QgPSB0aGlzLmFkZC50ZXh0KF9pbkZvcl90ZXh0V2lkdGgrdGhlTGFzdFRleHRXaWR0aFBvaW50LCBjYW52YXNIZWlnaHQvMiwgXCIgXCIsIHN0eWxlKVxuICAgICAgICBfaW5Gb3JfdGV4dFNwYWNlV2lkdGggPSBfaW5Gb3JfdGV4dFNwYWNlT2JqZWN0LndpZHRoXG4gICAgICAgIF9pbkZvcl90ZXh0SGVpZ2h0ID0gX2luRm9yX3RleHRPYmplY3QuaGVpZ2h0IC8vIGxlc3MgdGhlbiBhdi4gcHJvYy5cblxuICAgICAgfVxuXG4gICAgICB0YWJYc18ucHVzaCh7XG4gICAgICAgIHgxOiB0aGVMYXN0VGV4dFdpZHRoUG9pbnQsXG4gICAgICAgIHgyOiBfaW5Gb3JfdGV4dFdpZHRoK3RoZUxhc3RUZXh0V2lkdGhQb2ludCxcbiAgICAgICAgd2lkdGg6IF9pbkZvcl90ZXh0V2lkdGhcbiAgICAgIH0pXG5cbiAgICAgIHRoZUxhc3RUZXh0V2lkdGhQb2ludCArPSBfaW5Gb3JfdGV4dFNwYWNlV2lkdGgrX2luRm9yX3RleHRXaWR0aFxuXG4gICAgfVxuXG4gICAgdGhpcy5fY3JlYXRlVGFiUmVjdGFuZ2xlcyh0YWJYc18sIF9pbkZvcl90ZXh0SGVpZ2h0LCBjYW52YXNIZWlnaHQvMilcblxuXG5cbiAgICAvL2NvbnNvbGUubG9nKGZvbnRTaXplKVxuXG5cbiAgfVxuXG5cbiAgX2NyZWF0ZVRhYlJlY3RhbmdsZXMgPSAodGFiWHMsIGhlaWdodCwgbWlkSGVpZ2h0KSA9PiB7XG5cbiAgICBjb25zdCB0YWJOdW1iZXIgPSB0YWJYcy5sZW5ndGhcbiAgICBsZXQgX2luRm9yX2dyYXBoT2JqZWN0O1xuICAgIGxldCBfaW5Gb3JfZmlsbEFscGhhO1xuICAgIFxuICAgIHRhYlJlY3RhbmdsZXNfID0gW107XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8dGFiTnVtYmVyOyBpKyspe1xuICAgICAgX2luRm9yX2ZpbGxBbHBoYSA9IDAuNVxuICAgICAgaWYgKGk9PT1zZWxlY3RlZFRhYk9yZGVyKXtcbiAgICAgICAgX2luRm9yX2ZpbGxBbHBoYSA9IDBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgX2luRm9yX2dyYXBoT2JqZWN0ID0gdGhpcy5hZGQucmV4Um91bmRSZWN0YW5nbGUodGFiWHNbaV0ueDEsIChtaWRIZWlnaHQtKGhlaWdodC8yKSksIHRhYlhzW2ldLndpZHRoLCAgaGVpZ2h0LCAzMiwgMHhmZmZmZmYsIF9pbkZvcl9maWxsQWxwaGEpLnNldE9yaWdpbigwKTsgLy8gdGhpcy5hZGQucmV4Um91bmRSZWN0YW5nbGUoMjUwLCAxMDAsIDEwMCwgMTAwLCAzMCwgMHgwMDg4ODgpOyAvL3RoaXMuYWRkLnJleFJvdW5kUmVjdGFuZ2xlKHRhYlhzW2ldLngxLCAobWlkSGVpZ2h0LShoZWlnaHQvMikpLCB0YWJYc1tpXS53aWR0aCwgIGhlaWdodCwgMzIpLCAweGZmZmZmZjsgLy8gZ2xvYmFsVmFyc0NsYXNzLmgtMTAsIDMyLCAweDAwODg4OCk7XG5cbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIC8vX2luRm9yX2dyYXBoT2JqZWN0LmZpbGxTdHlsZSgweGZmZmZmZiwgX2luRm9yX2ZpbGxBbHBoYSlcblxuXG4gICAgICAvL19pbkZvcl9ncmFwaE9iamVjdC5maWxsUm91bmRlZFJlY3QoKTtcblxuICAgICAgLyoqIFxuICAgICAgY29uc29sZS5sb2coaSArIFwiIHgxOiBcIiArIHRhYlhzW2ldLngxICsgXCIgeDI6IFwiICsgdGFiWHNbaV0ueDJcbiAgICAgICsgXCIgeTE6IFwiICsgKG1pZEhlaWdodC0oaGVpZ2h0LzIpKSArIFwiIHkyOiBcIiArIG1pZEhlaWdodClcbiAgICAgICovXG4gICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdylcblxuICAgICB0YWJSZWN0YW5nbGVzXy5wdXNoKF9pbkZvcl9ncmFwaE9iamVjdClcblxuICAgIH1cblxuICAgIHRoaXMuX2NyZWF0ZVRhYlJlY3RhbmdsZVN0cm9rZXModGFiWHMsIGhlaWdodCwgbWlkSGVpZ2h0KVxuXG5cbiAgfVxuXG4gIF9jcmVhdGVUYWJSZWN0YW5nbGVTdHJva2VzID0gKHRhYlhzLCBoZWlnaHQsIG1pZEhlaWdodCkgPT4ge1xuICAgIGNvbnN0IHRhYk51bWJlciA9IHRhYlhzLmxlbmd0aFxuICAgIGxldCBfaW5Gb3JfZ3JhcGhTdHJva2VkT2JqZWN0O1xuXG4gICAgdGFiUmVjdGFuZ2xlU3Ryb2tlc18gPSBbXTtcbiAgICBmb3IgKGxldCBpPTA7IGk8dGFiTnVtYmVyOyBpKyspe1xuXG4gICAgICBfaW5Gb3JfZ3JhcGhTdHJva2VkT2JqZWN0ID0gdGhpcy5hZGQuZ3JhcGhpY3MoKVxuXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICBfaW5Gb3JfZ3JhcGhTdHJva2VkT2JqZWN0LmxpbmVTdHlsZSg1LCAweDAwMDAwMCwgMSlcblxuXG4gICAgICBfaW5Gb3JfZ3JhcGhTdHJva2VkT2JqZWN0LnN0cm9rZVJvdW5kZWRSZWN0KHRhYlhzW2ldLngxLCAobWlkSGVpZ2h0LShoZWlnaHQvMikpLCB0YWJYc1tpXS53aWR0aCwgIGhlaWdodCwgMzIpXG4gICAgICBcbiAgICAgIHRhYlJlY3RhbmdsZVN0cm9rZXNfLnB1c2goX2luRm9yX2dyYXBoU3Ryb2tlZE9iamVjdClcblxuXG4gICAgfVxuXG4gICAgLy90aGlzLl9zd2l0Y2hSZWN0YW5nbGVTdHJva2VzKHRhYlJlY3RhbmdsZVN0cm9rZXNfLCBmYWxzZSlcblxuICB9XG5cbiAgX3N3aXRjaFJlY3RhbmdsZVN0cm9rZXMgPSAoc3Ryb2tlcywgc3Ryb2tlU3dpdGNoQm9vbGVuKSA9PiB7IGlmIChzdHJva2VzLmxlbiA9PT0gdW5kZWZpbmVkKSB7IHN0cm9rZXMgPSB0YWJSZWN0YW5nbGVTdHJva2VzXyB9XG4gICAgY29uc3QgbnVtYmVyT2ZTdHJva2VzID0gc3Ryb2tlcy5sZW5ndGhcbiAgICAvL2xldCBzdHJva2VCb3JkZXJzXzogQXJyYXk8bnVtYmVyPiA9IFswLDVdO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaTxudW1iZXJPZlN0cm9rZXM7IGkrKyl7XG4gICAgICBzdHJva2VzW2ldLnNldFZpc2libGUoc3Ryb2tlU3dpdGNoQm9vbGVuKS8vZGVzdHJveSgpIC8vbGluZVN0eWxlKDEsIDB4MDAwMDAwLCAwKSAvLyBzdHJva2VCb3JkZXJzX1tzdHJva2VTd2l0Y2hCb29sZW5dKVxuICAgICAgLy9jb25zb2xlLmxvZyhzdHJva2VzW2ldKVxuICAgIH1cbiAgfVxuXG4gIF90b3VjaGVkT25TY3JlZW4gPSAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4geyBpZiAobG9ja09mVG91Y2hlZE9uU2NyZWVuKXsgcmV0dXJuIH0gXG5cbiAgICBzZWxlY3Rpb24gPSB0YWJLZXlzT2JqZWN0c18uaW5kZXhPZihnYW1lT2JqZWN0KVxuXG4gICAgaWYgKHNlbGVjdGlvbiA9PT0gc2VsZWN0ZWRUYWJPcmRlcikgeyByZXR1cm4gfVxuXG4gICAgbG9ja09mVG91Y2hlZE9uU2NyZWVuID0gdHJ1ZVxuXG4gICAgdGhpcy5fc3dpdGNoUmVjdGFuZ2xlU3Ryb2tlcyhcIlwiLCBmYWxzZSlcbiAgICAvL2NvbnNvbGUubG9nKGdhbWVPYmplY3QpXG4gICAgLy9jb25zb2xlLmxvZyh0YWJLZXlzT2JqZWN0c18uaW5kZXhPZihnYW1lT2JqZWN0KSlcblxuICAgIHRoaXMuX3JlY3RhbmdsZUFuaW1hdGlvbihzZWxlY3Rpb24pXG5cbiAgfVxuXG4gIF9yZWN0YW5nbGVBbmltYXRpb24oc2VsZWN0aW9uT3JkZXIpe1xuXG4gICAgLy8gd2F5IG9mIGFuaW1hdGlvblxuXG4gICAgd2F5T2ZEaXJlY3Rpb24gPSBNYXRoLnNpZ24oc2VsZWN0aW9uT3JkZXItc2VsZWN0ZWRUYWJPcmRlcilcblxuICAgIC8vIGFuaW1hdGlvbiB3aWxsIGJlIGluIHRoZSB1cGRhdGUgZnVuY3Rpb25cblxuICAgIC8vIGluIHRoaXMgZnggY3JlYXRlIGxlZnQgYW5kIHJpZ2h0IHJlY3RhYmdsZXNcblxuICAgIC8vIGxlZnRcblxuICAgIFxuXG4gICAgbGV0IGxlZnRSZWN0YW5nbGUgPSB0aGlzLmFkZC5yZXhSb3VuZFJlY3RhbmdsZSgtY2FudmFzV2lkdGgsIChtaWRIZWlnaHQtKF9pbkZvcl90ZXh0SGVpZ2h0LzIpKSwgY2FudmFzV2lkdGgsICBfaW5Gb3JfdGV4dEhlaWdodCwgMzIsIDB4ZmZmZmZmLCAwLjUpLnNldE9yaWdpbigwKTtcblxuICAgIGxldCByaWdodFJlY3RhbmdsZSA9IHRoaXMuYWRkLnJleFJvdW5kUmVjdGFuZ2xlKGNhbnZhc1dpZHRoLCAobWlkSGVpZ2h0LShfaW5Gb3JfdGV4dEhlaWdodC8yKSksIGNhbnZhc1dpZHRoLCAgX2luRm9yX3RleHRIZWlnaHQsIDMyLCAweGZmZmZmZiwgMC41KS5zZXRPcmlnaW4oMCk7XG5cblxuICAgIC8vIGFkZCB0aGlzIHR3byBvYmogdG8gdGFiUmVjdGFuZ2xlc18gYXJyYXlcblxuICAgIHRhYlJlY3RhbmdsZXNfLnB1c2gobGVmdFJlY3RhbmdsZSwgcmlnaHRSZWN0YW5nbGUpXG5cbiAgICBcblxuICAgIC8vbGV0IGNvbnRhaW5lciA9IHRoaXMuYWRkLmNvbnRhaW5lcigwLDApXG4gICAgLy9jb25zb2xlLmxvZyh0YWJSZWN0YW5nbGVzX1swXSlcbiAgICAvLyBjb25zb2xlLmxvZyAod2luZG93LlBoYXNlci5QaHlzaWNzLkFyY2FkZS5ib2R5KCkpXG4gICAgLy8gY29udGFpbmVyLmFkZCh0YWJSZWN0YW5nbGVzX1swXSlcblxuICAgIC8vdGhpcy5waHlzaWNzLmVuYWJsZSh0YWJSZWN0YW5nbGVzX1swXSlcblxuICAgIHNlbGVjdGlvblggPSB0YWJSZWN0YW5nbGVzX1tzZWxlY3Rpb25dLnhcblxuICAgIHRhYlJlY3RhbmdsZXNfLm1hcCggeCA9PiB7dGhpcy5waHlzaWNzLmFkZC5leGlzdGluZyh4KSB9ICkgXG4gICAgXG4gICAgdGFiUmVjdGFuZ2xlc18ubWFwKCB4ID0+IHguYm9keS52ZWxvY2l0eS54ID0gdmVsb2NpdHlPZlRhYnMqd2F5T2ZEaXJlY3Rpb24pXG5cbiAgICAvLyBhZnRlciB0aGF0LCBpdCB3aWxsIGxpc3RlbiBvbiB1cGRhdGUgZnggd2l0aCBsb2NrT2ZUb3VjaGVkT25TY3JlZW4gdmFyLlxuXG5cbiAgfVxuXG4gIF9hZnRlclJlY3RhbmdsZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICB0YWJSZWN0YW5nbGVzXy5tYXAoIHggPT4geC5ib2R5LnZlbG9jaXR5LnggPSAwKndheU9mRGlyZWN0aW9uKVxuICAgIC8vIGNvbnNvbGUubG9nKHRhYlJlY3RhbmdsZXNfW3NlbGVjdGVkVGFiT3JkZXIueF0pXG5cblxuXG4gICAgdGhpcy5fc3dpdGNoUmVjdGFuZ2xlU3Ryb2tlcyhcIlwiLCB0cnVlKVxuICAgIHNlbGVjdGVkVGFiT3JkZXIgPSBzZWxlY3Rpb25cbiAgICAvLyBkZWxldGUgcmVjdGFuZ2xlcyB0aGVuIGNyZWF0ZSBhZ2FpblxuICAgIHRoaXMuX3JlZnJlc2hSZWN0YW5nbGVzKCkgXG4gICAgd2luZG93LnBvc3RNZXNzYWdlKGB7XCJKU09ORURfc2VsZWN0ZWRUYWJOdW1iZXJcIjoke3NlbGVjdGVkVGFiT3JkZXJ9fWApO1xuICAgIGxvY2tPZlRvdWNoZWRPblNjcmVlbiA9IGZhbHNlXG4gIH1cblxuICBfcmVmcmVzaFJlY3RhbmdsZXMgPSAoKSA9PiB7XG4gICAgLyoqXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8dGFiUmVjdGFuZ2xlU3Ryb2tlc18ubGVuZ3RoOyBpKyspe1xuICAgICAgdGFiUmVjdGFuZ2xlU3Ryb2tlc19baV0uZGVzdHJveSgpXG4gICAgfVxuICAgICovXG4gICAgdGFiUmVjdGFuZ2xlU3Ryb2tlc18ubWFwKHggPT4geC5kZXN0cm95KCkpXG4gICAgdGFiUmVjdGFuZ2xlc18ubWFwKHggPT4geC5kZXN0cm95KCkpXG5cbiAgICAvLyBjcmVhdGUgYWdhaW5cblxuICAgIHRoaXMuX2NyZWF0ZVRhYlJlY3RhbmdsZXModGFiWHNfLCBfaW5Gb3JfdGV4dEhlaWdodCwgY2FudmFzSGVpZ2h0LzIpXG4gIH1cblxuICBfY2hlY2tQb3MgPSAoKSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyggd2F5T2ZEaXJlY3Rpb24pXG4gICAgICBpZiAoIHRhYlJlY3RhbmdsZXNfLmxlbmd0aCA9PT0gMCl7IHJldHVybiB9XG4gICAgICBpZiAod2F5T2ZEaXJlY3Rpb24gPT09IDEpe1xuICAgICAgICBpZiAodGFiUmVjdGFuZ2xlc19bc2VsZWN0ZWRUYWJPcmRlcl0ueCA+PSBzZWxlY3Rpb25YKXsgdGhpcy5fYWZ0ZXJSZWN0YW5nbGVBbmltYXRpb24oKSB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGlmICh0YWJSZWN0YW5nbGVzX1tzZWxlY3RlZFRhYk9yZGVyXS54IDw9IHNlbGVjdGlvblgpeyB0aGlzLl9hZnRlclJlY3RhbmdsZUFuaW1hdGlvbigpIH1cbiAgICAgICAgfVxuICB9XG5cbiAgX3RhYlBsdXNMaXN0ZW4gPSAoKSA9PiB7XG4gICAgaWYgKCB3aW5kb3cudGFiUGx1czRMaXN0ZW4gPT09IDAgKXsgcmV0dXJuIHRydWU7IH1cbiAgICBsZXQgbmV3U2VsZWN0aW9uID0gc2VsZWN0ZWRUYWJPcmRlcit3aW5kb3cudGFiUGx1czRMaXN0ZW5cbiAgICB3aW5kb3cudGFiUGx1czRMaXN0ZW4gPSAwO1xuICAgIGlmIChuZXdTZWxlY3Rpb24gPT09IHRhYktleXNPYmplY3RzXy5sZW5ndGgpeyBuZXdTZWxlY3Rpb24gPSAwIH1cbiAgICBpZiAobmV3U2VsZWN0aW9uID09PSAtMSl7IG5ld1NlbGVjdGlvbiA9IHRhYktleXNPYmplY3RzXy5sZW5ndGgtMX1cbiAgICBcbiAgICB0aGlzLl9saWtlVG91Y2gobmV3U2VsZWN0aW9uKVxuXG4gIH1cblxuICBfbGlrZVRvdWNoID0gKHNlbGVjdGlvbikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGlvbk9iamVjdCA9IHRhYktleXNPYmplY3RzX1tzZWxlY3Rpb25dXG5cbiAgICB0aGlzLl90b3VjaGVkT25TY3JlZW4oXCJcIiwgc2VsZWN0aW9uT2JqZWN0KVxuXG4gIH1cblxuXG5cblxufVxuIiwiLyoqXG4gKiBQTEVBU0UgRE8gTk9UIFJFTU9WRSBUSElTIE5PVElDRSFcbiAqXG4gKiBAdGVtcGxhdGUgICAgICAgIFRoaXMgUGhhc2VyIGdhbWUgd2FzIGJ1aWx0IHVzaW5nIHBoYXNlci1wcm9qZWN0LXRlbXBsYXRlIChodHRwczovL2dpdGh1Yi5jb20veWFuZGV1L3BoYXNlci1wcm9qZWN0LXRlbXBsYXRlKVxuICogQGF1dGhvciAgICAgICAgICBZYW5uaWNrIERldWJlbCAoaHR0cHM6Ly9naXRodWIuY29tL3lhbmRldSlcbiAqIEBjb3B5cmlnaHQgICAgICAgMjAxOSBZYW5uaWNrIERldWJlbFxuICogQGxpY2Vuc2UgICAgICAgICB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3lhbmRldS9waGFzZXItcHJvamVjdC10ZW1wbGF0ZS9ibG9iL21hc3Rlci9MSUNFTlNFfE1JVCBMaWNlbnNlfVxuICovXG5cbi8vIE9mIGNvdXJzZSB5b3UgY2FuIHJlbW92ZSBpdCBpZiB5b3UgcmVhbGx5IHdhbnQgdG8sIGJ1dCBpdCB3b3VsZCBiZSBuaWNlIGlmIHlvdSB3b3VsZCBsZWF2ZSBpdCB0aGVyZSA6KVxuXG5jb25zb2xlLmxvZyhcbiAgJyVjICVjICVjICVjICVjIEJ1aWx0IHVzaW5nIHBoYXNlci1wcm9qZWN0LXRlbXBsYXRlICVjIGh0dHBzOi8vZ2l0aHViLmNvbS95YW5kZXUvcGhhc2VyLXByb2plY3QtdGVtcGxhdGUnLFxuICAnYmFja2dyb3VuZDogI2ZmMDAwMCcsXG4gICdiYWNrZ3JvdW5kOiAjZmZmZjAwJyxcbiAgJ2JhY2tncm91bmQ6ICMwMGZmMDAnLFxuICAnYmFja2dyb3VuZDogIzAwZmZmZicsXG4gICdjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDAwMDsnLFxuICAnYmFja2dyb3VuZDogbm9uZSdcbilcbiJdLCJzb3VyY2VSb290IjoiIn0=