import GlobalVars from '../objects/globalVars'

var joinedTabKeys;
var roundWidth;
var roundHeight;
var adjustTextBoolen = true;

let minAvailable;
let minNotAvailable;
let middleSuppose;


let canvasWidth;
let canvasHeight;

let tabKeys;

let tabRectangles_: Array<object> = []

export default class PreloadScene extends Phaser.Scene {
  myim;
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
  }

  
  create() {

    const globalVarsClass = new GlobalVars(this)


    var graphics = this.add.graphics();
    graphics.lineStyle(5, 0x000000, 0.5);

    roundWidth = (window.innerWidth * window.devicePixelRatio)-10
    roundHeight = (window.innerHeight * window.devicePixelRatio)-10

    canvasWidth = (window.innerWidth * window.devicePixelRatio)
    canvasHeight = (window.innerHeight * window.devicePixelRatio)

    graphics.strokeRoundedRect(5, 5, (window.innerWidth * window.devicePixelRatio)-10,  (window.innerHeight * window.devicePixelRatio)-10, 32); // globalVarsClass.h-10, 32);

    var style = { font: "bold 1px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };

    //console.log(document.getElementById("phaser-game"))

   // tabKeys process

   tabKeys = globalVarsClass.tabKeys.keys

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

  }

  update(){

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

    let _inFor_textHeight;

    let tabXs_: Array<object> = []


    for (let i=0; i<tabNumber; i++){
      _inFor_textObject = this.add.text(theLastTextWidthPoint, canvasHeight/2, tabKeys[i], style)
      .setOrigin(0, 0.5)
      .setFontSize(fontSize)
      
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
    let _inFor_graphStrokedObject;
    let _inFor_fillAlpha;
    
    
    for (let i=0; i<tabNumber; i++){
      _inFor_fillAlpha = 0.5
      if (i===0){
        _inFor_fillAlpha = 0
      }
      _inFor_graphObject = this.add.graphics()
      _inFor_graphStrokedObject = this.add.graphics()
      
      
      _inFor_graphObject.fillStyle(0xffffff, _inFor_fillAlpha)
      _inFor_graphStrokedObject.lineStyle(5, 0x000000, 1)


      _inFor_graphObject.fillRoundedRect(tabXs[i].x1, (midHeight-(height/2)), tabXs[i].width,  height, 32); // globalVarsClass.h-10, 32);
      _inFor_graphStrokedObject.strokeRoundedRect(tabXs[i].x1, (midHeight-(height/2)), tabXs[i].width,  height, 32)

      /** 
      console.log(i + " x1: " + tabXs[i].x1 + " x2: " + tabXs[i].x2
      + " y1: " + (midHeight-(height/2)) + " y2: " + midHeight)
      */
     console.log(window)

    }

  }




}
