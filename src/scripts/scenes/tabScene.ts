/// <reference path="../../../node_modules/phaser/types/phaser.d.ts"/>
import GlobalVars from '../objects/globalVars'
import { createClient } from 'http';

let joinedTabKeys;
let roundWidth;
let roundHeight;
let adjustTextBoolen = true;

let minAvailable;
let minNotAvailable;
let middleSuppose;


let canvasWidth;
let canvasHeight;

let tabKeys;

let tabRectangles_: Array<Phaser.GameObjects.Rectangle | Phaser.GameObjects.GameObject> = []; // filled
let tabRectangleStrokes_: Array<Phaser.GameObjects.Rectangle> = []
let tabKeysObjects_: Array<Phaser.GameObjects.Text> = [];
let lockOfTouchedOnScreen = false;
let selectedTabOrder = 0;
let _inFor_textHeight;
let midHeight;
let wayOfDirection;
let selection=0;
let selectionX; // before movement
let tabXs_: Array<object> = [] 

let velocityOfTabs; // calculate with tab number = Math.round(1000/tabnUMBER)
let numberOfTabs;


export default class PreloadScene extends Phaser.Scene {
  myim;
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    var url;
  
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/plugins/dist/rexroundrectangleplugin.min.js';
    this.load.plugin('rexroundrectangleplugin', url, true);      
  
  }

  
  create() {
    /** 
    const emptyObj = this.add.rectangle(0,0,0,0)
    this.physics.add.existing(emptyObj)
    emptyObj.body.velocity.x = 0
    //emptyObj.x = 0
    console.log(emptyObj)
    tabRectangles_.push(emptyObj)

    */

    //console.log(this.add)

    const globalVarsClass = new GlobalVars(this)


    var graphics = this.add.graphics();
    graphics.lineStyle(5, 0x000000, 0.5);

    roundWidth = (window.innerWidth * window.devicePixelRatio)-10
    roundHeight = (window.innerHeight * window.devicePixelRatio)-10

    canvasWidth = (window.innerWidth * window.devicePixelRatio)
    canvasHeight = (window.innerHeight * window.devicePixelRatio)

    midHeight = canvasHeight/2

    graphics.strokeRoundedRect(5, 5, (window.innerWidth * window.devicePixelRatio)-10,  (window.innerHeight * window.devicePixelRatio)-10, 32); // globalVarsClass.h-10, 32);

    var style = { font: "bold 1px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };

    //console.log(document.getElementById("phaser-game"))

   // tabKeys process

   tabKeys = globalVarsClass.tabKeys.keys

   // calculate speed with tab number

   numberOfTabs = globalVarsClass.tabKeys.number

   velocityOfTabs = Math.round(8000/numberOfTabs)

   joinedTabKeys = this.add.text(canvasWidth/2, canvasHeight/2, globalVarsClass.tabKeys.joinedKeys, style)
   //joinedTabKeys.setFontSize(60)
   joinedTabKeys.setOrigin(0.5, 0.5)
   

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
    
  }

  update(){

    //console.log(velocityOfTabs)
    // listen phisics

    if (lockOfTouchedOnScreen){
      
      this._checkPos();
    }

    // adjust joined text size:

    if (adjustTextBoolen){
      


      if (joinedTabKeys.width <= roundWidth-10 && joinedTabKeys.height <= roundHeight-10){
        //console.log("text w: "+ joinedTabKeys.width + " canvas width: "+ canvasWidth + " last font size: "+parseInt(joinedTabKeys.style.fontSize))
        minAvailable = parseInt(joinedTabKeys.style.fontSize);
        //alert("min ava: " + minAvailable)
        if (minNotAvailable === undefined){
          joinedTabKeys.setFontSize(2*parseInt(joinedTabKeys.style.fontSize))
          //alert("iki kati " + parseInt(joinedTabKeys.style.fontSize))

        //console.log("if 3")  
        }
        else{
          middleSuppose = Math.round((minNotAvailable-minAvailable)/2+minAvailable)
          if (middleSuppose === parseInt(joinedTabKeys.style.fontSize)){
            adjustTextBoolen = false  
            // font size is detected
            this._afterFontSizeDetection(tabKeys, parseInt(joinedTabKeys.style.fontSize), joinedTabKeys)
  
            
                  
            
          //console.log("if 4")  
          }
          joinedTabKeys.setFontSize(middleSuppose)

          //console.log("else 2")
        }
      //console.log("if 2")  
      }
      else{
        //console.log("else text w: "+ joinedTabKeys.width + " canvas width: "+ canvasWidth + " last font size: "+parseInt(joinedTabKeys.style.fontSize))

        //alert("fonts: " + parseInt(joinedTabKeys.style.fontSize))
        minNotAvailable = parseInt(joinedTabKeys.style.fontSize);
        middleSuppose = Math.round((minNotAvailable-minAvailable)/2+minAvailable)
        //console.log("else 3")
        if (middleSuppose === parseInt(joinedTabKeys.style.fontSize)){
          adjustTextBoolen = false  
          // font size is detected
          this._afterFontSizeDetection(tabKeys, parseInt(joinedTabKeys.style.fontSize), joinedTabKeys)

          
                
          
        //console.log("if 4")  
        }
        //console.log("min av: "+middleSuppose)

        //console.log(parseInt(joinedTabKeys.style.fontSize))
        joinedTabKeys.setFontSize(middleSuppose)
        //alert( "min not ava " + minNotAvailable +" min av: " + minAvailable +"indi " + parseInt(middleSuppose))
        //alert(joinedTabKeys.style.fontSize)
      }

      // console.log(joinedTabKeys.style.fontSize)
  
  //console.log("if 1")    
  }


   // console.log(this.sys.game.canvas.offsetWidth)

   this._tabPlusListen()

  }

  _afterFontSizeDetection = (tabKeys, fontSize, oldTextObject) => {
    //console.log(oldTextObject.style.fontSize + "text width: "+ oldTextObject.width + " canvas wdith: "+canvasWidth)
    //alert("afterrr")
    let oldTextObjectWidth = oldTextObject.width
    oldTextObject.destroy()
    const tabNumber = tabKeys.length;

    const style = { font: `bold ${fontSize}px Arial`, fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };

    // order text
    let theLastTextWidthPoint = (canvasWidth-oldTextObjectWidth)/2;
    //console.log("last: "+ theLastTextWidthPoint)

    let _inFor_textWidth;
    let _inFor_textObject;
    let _inFor_textSpaceObject;
    let _inFor_textSpaceWidth;

    // let _inFor_textHeight; update to global var

    // let tabXs_: Array<object> = [] // update to global var

    tabXs_ = []


    for (let i=0; i<tabNumber; i++){
      _inFor_textObject = this.add.text(theLastTextWidthPoint, canvasHeight/2, tabKeys[i], style)
      .setOrigin(0, 0.5)
      .setFontSize(fontSize)
      .setInteractive()
      tabKeysObjects_.push(_inFor_textObject)
      
      _inFor_textWidth = _inFor_textObject.width

      
      if (i !== tabNumber){
        _inFor_textSpaceObject = this.add.text(_inFor_textWidth+theLastTextWidthPoint, canvasHeight/2, " ", style)
        _inFor_textSpaceWidth = _inFor_textSpaceObject.width
        _inFor_textHeight = _inFor_textObject.height // less then av. proc.

      }

      tabXs_.push({
        x1: theLastTextWidthPoint,
        x2: _inFor_textWidth+theLastTextWidthPoint,
        width: _inFor_textWidth
      })

      theLastTextWidthPoint += _inFor_textSpaceWidth+_inFor_textWidth

    }

    this._createTabRectangles(tabXs_, _inFor_textHeight, canvasHeight/2)



    //console.log(fontSize)


  }


  _createTabRectangles = (tabXs, height, midHeight) => {
    const tabNumber = tabXs.length
    let _inFor_graphObject;
    let _inFor_fillAlpha;
    
    tabRectangles_ = [];

    for (let i=0; i<tabNumber; i++){
      _inFor_fillAlpha = 0.5
      if (i===selectedTabOrder){
        _inFor_fillAlpha = 0
      }
      
      _inFor_graphObject = this.add.rexRoundRectangle(tabXs[i].x1, (midHeight-(height/2)), tabXs[i].width,  height, 32, 0xffffff, _inFor_fillAlpha).setOrigin(0); // this.add.rexRoundRectangle(250, 100, 100, 100, 30, 0x008888); //this.add.rexRoundRectangle(tabXs[i].x1, (midHeight-(height/2)), tabXs[i].width,  height, 32), 0xffffff; // globalVarsClass.h-10, 32, 0x008888);

      
      
      
      //_inFor_graphObject.fillStyle(0xffffff, _inFor_fillAlpha)


      //_inFor_graphObject.fillRoundedRect();

      /** 
      console.log(i + " x1: " + tabXs[i].x1 + " x2: " + tabXs[i].x2
      + " y1: " + (midHeight-(height/2)) + " y2: " + midHeight)
      */
     // console.log(window)

     tabRectangles_.push(_inFor_graphObject)

    }

    this._createTabRectangleStrokes(tabXs, height, midHeight)


  }

  _createTabRectangleStrokes = (tabXs, height, midHeight) => {
    const tabNumber = tabXs.length
    let _inFor_graphStrokedObject;

    tabRectangleStrokes_ = [];
    for (let i=0; i<tabNumber; i++){

      _inFor_graphStrokedObject = this.add.graphics()

      
      
      
      _inFor_graphStrokedObject.lineStyle(5, 0x000000, 1)


      _inFor_graphStrokedObject.strokeRoundedRect(tabXs[i].x1, (midHeight-(height/2)), tabXs[i].width,  height, 32)
      
      tabRectangleStrokes_.push(_inFor_graphStrokedObject)


    }

    //this._switchRectangleStrokes(tabRectangleStrokes_, false)

  }

  _switchRectangleStrokes = (strokes, strokeSwitchBoolen) => { if (strokes.len === undefined) { strokes = tabRectangleStrokes_ }
    const numberOfStrokes = strokes.length
    //let strokeBorders_: Array<number> = [0,5];

    for(let i = 0; i<numberOfStrokes; i++){
      strokes[i].setVisible(strokeSwitchBoolen)//destroy() //lineStyle(1, 0x000000, 0) // strokeBorders_[strokeSwitchBoolen])
      //console.log(strokes[i])
    }
  }

  _touchedOnScreen = (pointer, gameObject) => { if (lockOfTouchedOnScreen){ return } 

    selection = tabKeysObjects_.indexOf(gameObject)

    if (selection === selectedTabOrder) { return }

    lockOfTouchedOnScreen = true

    this._switchRectangleStrokes("", false)
    //console.log(gameObject)
    //console.log(tabKeysObjects_.indexOf(gameObject))

    this._rectangleAnimation(selection)

  }

  _rectangleAnimation(selectionOrder){

    // way of animation

    wayOfDirection = Math.sign(selectionOrder-selectedTabOrder)

    // animation will be in the update function

    // in this fx create left and right rectabgles

    // left

    

    let leftRectangle = this.add.rexRoundRectangle(-canvasWidth, (midHeight-(_inFor_textHeight/2)), canvasWidth,  _inFor_textHeight, 32, 0xffffff, 0.5).setOrigin(0);

    let rightRectangle = this.add.rexRoundRectangle(canvasWidth, (midHeight-(_inFor_textHeight/2)), canvasWidth,  _inFor_textHeight, 32, 0xffffff, 0.5).setOrigin(0);


    // add this two obj to tabRectangles_ array

    tabRectangles_.push(leftRectangle, rightRectangle)

    

    //let container = this.add.container(0,0)
    //console.log(tabRectangles_[0])
    // console.log (window.Phaser.Physics.Arcade.body())
    // container.add(tabRectangles_[0])

    //this.physics.enable(tabRectangles_[0])

    selectionX = tabRectangles_[selection].x

    tabRectangles_.map( x => {this.physics.add.existing(x) } ) 
    
    tabRectangles_.map( x => x.body.velocity.x = velocityOfTabs*wayOfDirection)

    // after that, it will listen on update fx with lockOfTouchedOnScreen var.


  }

  _afterRectangleAnimation = () => {
    tabRectangles_.map( x => x.body.velocity.x = 0*wayOfDirection)
    // console.log(tabRectangles_[selectedTabOrder.x])



    this._switchRectangleStrokes("", true)
    selectedTabOrder = selection
    // delete rectangles then create again
    this._refreshRectangles() 
    window.postMessage(`{"JSONED_selectedTabNumber":${selectedTabOrder}}`);
    lockOfTouchedOnScreen = false
  }

  _refreshRectangles = () => {
    /**
    for (let i = 0; i<tabRectangleStrokes_.length; i++){
      tabRectangleStrokes_[i].destroy()
    }
    */
    tabRectangleStrokes_.map(x => x.destroy())
    tabRectangles_.map(x => x.destroy())

    // create again

    this._createTabRectangles(tabXs_, _inFor_textHeight, canvasHeight/2)
  }

  _checkPos = () => {
    //console.log( wayOfDirection)
      if ( tabRectangles_.length === 0){ return }
      if (wayOfDirection === 1){
        if (tabRectangles_[selectedTabOrder].x >= selectionX){ this._afterRectangleAnimation() }
        }else{
          if (tabRectangles_[selectedTabOrder].x <= selectionX){ this._afterRectangleAnimation() }
        }
  }

  _tabPlusListen = () => {
    if ( window.tabPlus4Listen === 0 ){ return }
    let newSelection = selectedTabOrder+window.tabPlus4Listen
    window.tabPlus4Listen = 0;
    if (newSelection === tabKeysObjects_.length){ newSelection = 0 }
    if (newSelection === -1){ newSelection = tabKeysObjects_.length-1}
    
    this._likeTouch(newSelection)

  }

  _likeTouch = (selection) => {
    const selectionObject = tabKeysObjects_[selection]

    this._touchedOnScreen("", selectionObject)

  }




}
