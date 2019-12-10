import GlobalVars from './objects/globalVars'

import 'phaser'
// import MainScene from './scenes/mainScene'
import TabScene from './scenes/tabScene'


let DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio
let DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio


const globalVarsClass = new GlobalVars(this)

if (globalVarsClass.w !== null){
  DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio
  DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio
}


// @ts-ignore https://github.com/photonstorm/phaser/issues/4522
// still not working in 3.18.1 :/
const config: GameConfig = {
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },

  

  scene: [TabScene], // MainScene only tab scene
  physics: {
    default: 'arcade',

  }
}

window.addEventListener('load', () => {
  
  config.scale.DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio
  config.scale.DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio


   
  
  const game = new Phaser.Game(config);


})
//
