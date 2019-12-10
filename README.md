<h1 align="center">
  <br>
  i use phaser3 typescript template rep from <a href="https://github.com/yandeu/phaser-project-template#readme"></a> for using Phaser3 with typescript.
  <br>
  Phaser 3 Based Menu
  <br>
</h1>

## Sample

![tabKeys](ss/menuler.gif)

## How To Use



```bash
# Clone this repository
$ git clone  https://github.com/inceabdullah/Phaser3-Based-Menu-Button-Maker.git

# Go into the repository
$ cd Phaser3-Based-Menu-Button-Maker

# Install dependencies
$ npm install

# if webpack is not installed:
$ npm install webpack webpack-dev-server -g

# Start the local development server (on port 8080)
$ npm start

# or

$ webpack-dev-server --config webpack/webpack.dev.js

# Ready for production?
# Build the production ready code to the /dist folder
$ npm run build
```

Change the **tabs** in *tabKeys* parameter. like: `http://localhost:8080/?tabKeys=menu1,menu2,menu3`

the function of for spliting tabKeys in globalVars.ts:

    this.tabKeys = searchParams.get("tabKeys");
    
    this.tabKeys = {
                keys: this.parseKeys(this.tabKeys), // arrayed}
                number: this.parseKeys(this.tabKeys).length,
                joinedKeys: this.parseKeys(this.tabKeys).join(" ") // default char: space
             }
    
    
    parseKeys = (tabKeys: string) => {
        const _splitted = tabKeys.split(",")
        return _splitted;
    }

## Using with React Native

it is recommended to use in **WebView**, to be responsive, Phaser Game config is adjusted like below:
```javascript
      const config: GameConfig = {
      		scale: {
        		mode: Phaser.Scale.FIT
    		}
    	}
```

and of course:
```javascript
      DEFAULT_WIDTH = window.innerWidth * window.devicePixelRatio
      DEFAULT_HEIGHT = window.innerHeight * window.devicePixelRatio
```
**Noted that**: using without **window.devicePixelRatio** ratio causes to mismatchinf of canvas and webview browser dimensions.

## Loading from WebView

if page is loading immediatelly after running app, canvas width and height size from browser will be zero.

for solving, webview height should be above zero before loading page.

              <View
                onLayout = {(event) => {
    
                  if (event.nativeEvent.layout.height >= 0){
                    this.setState({
                      tabWebViewUri: {
                        0: this.state.tabWebViewUri[1]
                      }
                    
                    });
                  }
                   }}>
                    <WebView
                    style = {{
                      height: tabs.Hieght,
                      width: screenWidth,
                      
                    }}
                    source = {{
                      uri: this.state.tabWebViewUri[0]
                    }}
                    scalesPageToFit={false}
                    />
                  </View>


You know when *this.state* changed, WebView.souce.uri will be changed, then load new uri

        this.state = { 
    	    tabWebViewUri: {
          		0: null,
          		1: `${tabs.uriBase}?w=${screenWidth}&h=${tabs.Hieght}&												tabKeys=${encodeURI(tabs.keys[0]+","+tabs.keys[1]+","+tabs.keys[2])}`
        },                  

i use this React Native code for [Haber Tellali App](https://github.com/inceabdullah/Haber-Tellali-3th-Wave-News-Service/blob/master/react-native/expo-typescript/App.tsx)        