/// <reference path="../../../typings/node.d.ts"/>
import * as URL from "url";
const HREF = window.location.href;
const parsedCurrentUrl = URL.parse(HREF)
const searchParams = new URLSearchParams(parsedCurrentUrl.search)




export default class globalVars{
    tabNumber;
    w;
    h;
    w_deviceScaled;
    h_deviceScaled;
    tabKeys;
    constructor(scene){
        this.tabNumber = searchParams.get("tabNumber");// scene.SceneManager;//scene.game.config;//document.getElementById("href").innerHTML;//http; //myUrl;//scene.sys.canvas.parentNode.parentNode.parentNode.childNodes[0]
        this.w = searchParams.get("w");
        this.h = searchParams.get("h");
        this.w_deviceScaled = this.w *  window.devicePixelRatio;
        this.h_deviceScaled = this.h *  window.devicePixelRatio;
        // get tab keys
        this.tabKeys = searchParams.get("tabKeys");
        this.tabKeys = {
            keys: this.parseKeys(this.tabKeys), // arrayed}
            number: this.parseKeys(this.tabKeys).length,
            joinedKeys: this.parseKeys(this.tabKeys).join(" ") // default char: space
        
      
        
    }
    
}

parseKeys = (tabKeys: string) => {
    const _splitted = tabKeys.split(",")
    return _splitted;
}
}