window.__require=function t(o,e,n){function i(s,c){if(!e[s]){if(!o[s]){var u=s.split("/");if(u=u[u.length-1],!o[u]){var h="function"==typeof __require&&__require;if(!c&&h)return h(u,!0);if(r)return r(u,!0);throw new Error("Cannot find module '"+s+"'")}s=u}var a=e[s]={exports:{}};o[s][0].call(a.exports,function(t){return i(o[s][1][t]||t)},a,a.exports,t,o,e,n)}return e[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<n.length;s++)i(n[s]);return i}({"02_LocalStorageTestSceneController":[function(t,o,e){"use strict";cc._RF.push(o,"f9f0f7oZp1FP4KRZQLCWmUq","02_LocalStorageTestSceneController");var n=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,s=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,e,s):i(o,e))||s);return r>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,c=r.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.SliderValueText=null,o.Slider=null,o.SaveButton=null,o.LoadButton=null,o.ClearButton=null,o}return n(o,t),o.prototype.start=function(){this.Slider.node.on("slide",this.onSliderValueChanged,this),this.SaveButton.node.on("click",this.onPushSaveButton,this),this.LoadButton.node.on("click",this.onPushLoadButton,this),this.ClearButton.node.on("click",this.onPushClearButton,this)},o.prototype.onSliderValueChanged=function(){this.Slider.progress=Math.round(10*this.Slider.progress)/10,this.updateSliderText()},o.prototype.onPushSaveButton=function(){cc.log("onPushSaveButton"),this.saveData("TextSaveValue",this.SliderValueText.string)},o.prototype.onPushLoadButton=function(){var t=this.loadData("TextSaveValue");cc.log("loadedData: "+t),cc.log("loadedData==null "+(null==t)),cc.log("loadedData==undefined "+(void 0==t)),null!=t&&void 0!=t||(t=5),this.Slider.progress=t/10,this.updateSliderText()},o.prototype.onPushClearButton=function(){cc.sys.localStorage.clear()},o.prototype.updateSliderText=function(){this.SliderValueText.string=(10*this.Slider.progress).toString()},o.prototype.saveData=function(t,o){cc.sys.localStorage.setItem(t,o)},o.prototype.loadData=function(t){return cc.sys.localStorage.getItem(t)},o.prototype.removeAllData=function(){cc.sys.localStorage.clear()},i([c(cc.Label)],o.prototype,"SliderValueText",void 0),i([c(cc.Slider)],o.prototype,"Slider",void 0),i([c(cc.Button)],o.prototype,"SaveButton",void 0),i([c(cc.Button)],o.prototype,"LoadButton",void 0),i([c(cc.Button)],o.prototype,"ClearButton",void 0),o=i([s],o)}(cc.Component);e.default=u,cc._RF.pop()},{}],"03_SwipeTest":[function(t,o,e){"use strict";cc._RF.push(o,"666febHNOJOh5e6YN2oUqlR","03_SwipeTest"),cc.Class({extends:cc.Component,properties:{backButton:cc.Button},onLoad:function(){this.backButton.node.on("click",this.onPushBackButton,this)},onPushBackButton:function(t){cc.director.loadScene("00_TestMenu")},pageViewCallback:function(t,o,e){cc.log("pageViewCallback"),cc.log(o)}}),cc._RF.pop()},{}],"04_DownloadTest":[function(t,o,e){"use strict";cc._RF.push(o,"22205PBO9xOGapEnptUa55w","04_DownloadTest"),cc.Class({extends:cc.Component,properties:{backButton:cc.Button,loadTextFormXmlButton:cc.Button,loadTextFromLoadRemoteButton:cc.Button,loadTextureButton:cc.Button,loadAudioButton:cc.Button,loadedText:cc.Label,sprite:cc.Sprite},onLoad:function(){this.backButton.node.on("click",function(){return cc.director.loadScene("00_TestMenu")},this),this.loadTextFormXmlButton.node.on("click",this.pushLoadTextFormXmlButton,this),this.loadTextFromLoadRemoteButton.node.on("click",this.pushLoadTextFromLoadRemoteButton,this),this.loadTextureButton.node.on("click",this.pushLoadTextureButton,this),this.loadAudioButton.node.on("click",this.pushLoadAudioButton,this)},start:function(){},pushLoadTextFormXmlButton:function(){var t=new XMLHttpRequest,o=this.loadedText;t.onreadystatechange=function(){if(4==t.readyState&&t.status>=200&&t.status<400){var e=t.responseText;console.log(e),o.string=e}},t.open("GET","https://cloudsotsubo.github.io/WebAppTest/DummyServer/Data.url",!0),t.send()},pushLoadTextFromLoadRemoteButton:function(){var t=this.loadedText;cc.assetManager.loadRemote("https://cloudsotsubo.github.io/WebAppTest/DummyServer/Data2.url",function(o,e){cc.log(e._nativeAsset),t.string=e._nativeAsset})},pushLoadTextureButton:function(){cc.log("loadTexture");var t=this.sprite;cc.assetManager.loadRemote("https://cloudsotsubo.github.io/WebAppTest/DummyServer/cat1_smile.png",function(o,e){cc.log(t.spriteFrame),t.spriteFrame=new cc.SpriteFrame(e)})},pushLoadAudioButton:function(){cc.assetManager.loadRemote("https://cloudsotsubo.github.io/WebAppTest/DummyServer/Audio/se_confirm.mp3",function(t,o){cc.audioEngine.playEffect(o,!1)})}}),cc._RF.pop()},{}],"05_RichTextText":[function(t,o,e){"use strict";cc._RF.push(o,"c6880vWeX9KzZxWKNdHEMJ8","05_RichTextText"),cc.Class({extends:cc.Component,properties:{backButton:cc.Button,textButton:cc.RichText},onLoad:function(){this.backButton.node.on("click",function(){return cc.director.loadScene("00_TestMenu")},this),this.textButton.node.on("clickOnText",function(){return cc.log("wow!")},this)},start:function(){}}),cc._RF.pop()},{}],"06_EditBoxText":[function(t,o,e){"use strict";cc._RF.push(o,"5703cUvFnxA2LD3VyTbDCC0","06_EditBoxText"),cc.Class({extends:cc.Component,properties:{backButton:cc.Button,inputedText:cc.Label,eventLogText:cc.Label,editBox:cc.EditBox,logClearButton:cc.Button},onLoad:function(){var t=this;this.backButton.node.on("click",function(){return cc.director.loadScene("00_TestMenu")},this),this.editBox.node.on("editing-did-began",function(){return t.setLogText("onEditDidBegan")},this),this.editBox.node.on("editing-did-ended",function(){return t.setLogText("onEditDidEnded")},this),this.editBox.node.on("text-changed",function(){return t.setLogText("onTextChanged")},this),this.editBox.node.on("editing-return",function(){t.setLogText("onEditingReturn"),t.setText(t.editBox.string)},this),this.logClearButton.node.on("click",this.onLogClearButtonPushed,this)},setText:function(t){this.inputedText.string=t},setLogText:function(t){cc.log(t),this.eventLogText.string+=t+"\n"},start:function(){},onLogClearButtonPushed:function(){this.eventLogText.string=""}}),cc._RF.pop()},{}],Angouka:[function(t,o,e){"use strict";cc._RF.push(o,"cd388kZhMdAy7JREJ3/XOrz","Angouka"),cc.Class({extends:cc.Component,properties:{},start:function(){console.log("PassPhrase:","Test String.");var t=cryptico.generateRSAKey("Test String.",1024);console.log("MattsRSAkey:",t);var o=cryptico.publicKeyString(t);console.log("MattsPublicKeyString:",o);console.log("PlainText:","Test String.");var e=cryptico.encrypt("Test String.",o);console.log("EncryptionResult:",e.cipher);var n=cryptico.decrypt(e.cipher,t);console.log("DecryptionResult:",n)}}),cc._RF.pop()},{}],Launch:[function(t,o,e){"use strict";cc._RF.push(o,"280c3rsZJJKnZ9RqbALVwtK","Launch"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var t=this;this.canLoad=!0,cc.game.addPersistRootNode(this.node),this.sceneList=cc.game._sceneInfos,cc.log(this.sceneList),cc.director.loadScene("01_align_basic");var o={event:cc.EventListener.KEYBOARD,onKeyPressed:function(o,e){cc.log("keyDown: "+o);var n=o-48;n>=0&&n<t.sceneList.length&&t.canLoad&&t.loadScene(t.sceneList[n].url)}};cc.eventManager.addListener(o,this.node)},loadScene:function(t){this.canLoad=!1,cc.director.loadScene(t,this.onLoadSceneFinish.bind(this))},onLoadSceneFinish:function(){this.canLoad=!0}}),cc._RF.pop()},{}],MenuSceneController:[function(t,o,e){"use strict";cc._RF.push(o,"fd28fOn61JPxKnx6dmM/hvc","MenuSceneController");var n=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,s=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,e,s):i(o,e))||s);return r>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,c=r.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.label=null,o.text="hello",o}return n(o,t),o.prototype.start=function(){},i([c(cc.Label)],o.prototype,"label",void 0),i([c],o.prototype,"text",void 0),o=i([s],o)}(cc.Component);e.default=u,cc._RF.pop()},{}],OverFlowCanvase:[function(t,o,e){"use strict";cc._RF.push(o,"e84e4MOJrxHyrziWfNz/KFC","OverFlowCanvase");var n=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,s=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,e,s):i(o,e))||s);return r>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,c=r.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.label=null,o.text="hello",o}return n(o,t),o.prototype.start=function(){this.bar(),this.bar()},o.prototype.bb=function(){this.bar()},o.prototype.bar=function(){},i([c(cc.Label)],o.prototype,"label",void 0),i([c],o.prototype,"text",void 0),o=i([s],o)}(cc.Component);e.default=u,cc._RF.pop()},{}],ResoinsiveTestSceneController_TS:[function(t,o,e){"use strict";cc._RF.push(o,"109affFhzlMwZHeTj7tMXdn","ResoinsiveTestSceneController_TS");var n=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,s=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,e,s):i(o,e))||s);return r>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,c=r.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.returnButton=null,o.label=null,o.text="hello",o}return n(o,t),o.prototype.onLoad=function(){var t=new cc.Component.EventHandler;t.target=this.node,t.component="MyComponent",t.handler="callback",t.customEventData="foobar",this.node.getComponent(cc.Button).clickEvents.push(t)},o.prototype.callback=function(t,o){t.target,this.returnButton},i([c(cc.Button)],o.prototype,"returnButton",void 0),i([c(cc.Label)],o.prototype,"label",void 0),i([c],o.prototype,"text",void 0),o=i([s],o)}(cc.Component);e.default=u,cc._RF.pop()},{}],ResoinsiveTestSceneController:[function(t,o,e){"use strict";cc._RF.push(o,"472b4GpdhZF94hu1iCs+3nd","ResoinsiveTestSceneController"),cc.Class({extends:cc.Component,properties:{button:cc.Button},onLoad:function(){this.button.node.on("click",this.callback,this)},callback:function(t){cc.director.loadScene("00_TestMenu")}}),cc._RF.pop()},{}],SwipeDetector:[function(t,o,e){"use strict";cc._RF.push(o,"cc70acaaeBDUICCjgsToW/3","SwipeDetector"),cc.Class({extends:cc.Component,properties:{pageView:cc.PageView,sceneManager:cc.Node},onLoad:function(){this.pageView.scrollToPage(1),this.pageView.node.on("page-turning",this.callback,this)},callback:function(t){0==this.pageView.getCurrentPageIndex()&&this.sceneManager.getComponent("03_SwipeTest").onPushBackButton()}}),cc._RF.pop()},{}],TestMenuSceneController:[function(t,o,e){"use strict";cc._RF.push(o,"9f2adbr4IJDxryhYM1JnWx2","TestMenuSceneController");var n=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,s=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(o,e,s):i(o,e))||s);return r>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var r=cc._decorator,s=r.ccclass,c=r.property,u=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.ResponsiveTestButton=null,o.LocalStorageTestButton=null,o.SwiteTestButton=null,o.DownloadTestButton=null,o.RichTextTestButton=null,o.EditBoxTestButton=null,o}return n(o,t),o.prototype.onLoad=function(){this.ResponsiveTestButton.node.on("click",this.onPushResponsiveTestButton,this),this.LocalStorageTestButton.node.on("click",this.onPushLocalStorageTestButton,this),this.SwiteTestButton.node.on("click",this.onPushSwiteTestButton,this),this.DownloadTestButton.node.on("click",this.onPushDownloadTestButton,this),this.RichTextTestButton.node.on("click",this.onPushRichTextTestButton,this),this.EditBoxTestButton.node.on("click",this.onPushEditBoxTestButton,this)},o.prototype.onPushResponsiveTestButton=function(){cc.director.loadScene("01_ResponsiveTest")},o.prototype.onPushLocalStorageTestButton=function(){cc.director.loadScene("02_LocalStorageTest")},o.prototype.onPushSwiteTestButton=function(){cc.director.loadScene("03_SwipeTest")},o.prototype.onPushDownloadTestButton=function(){cc.director.loadScene("04_DownloadTest")},o.prototype.onPushRichTextTestButton=function(){cc.director.loadScene("05_RichTextTest")},o.prototype.onPushEditBoxTestButton=function(){cc.director.loadScene("06_EditBoxTest")},i([c(cc.Button)],o.prototype,"ResponsiveTestButton",void 0),i([c(cc.Button)],o.prototype,"LocalStorageTestButton",void 0),i([c(cc.Button)],o.prototype,"SwiteTestButton",void 0),i([c(cc.Button)],o.prototype,"DownloadTestButton",void 0),i([c(cc.Button)],o.prototype,"RichTextTestButton",void 0),i([c(cc.Button)],o.prototype,"EditBoxTestButton",void 0),o=i([s],o)}(cc.Component);e.default=u,cc._RF.pop()},{}],aes:[function(t,o,e){"use strict";cc._RF.push(o,"1d92bo3bjtBaot9HA5bj8mI","aes");(function(){var t={};t.Sbox=new Array(99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22),t.ShiftRowTab=new Array(0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11),t.Init=function(){t.Sbox_Inv=new Array(256);for(var o=0;o<256;o++)t.Sbox_Inv[t.Sbox[o]]=o;t.ShiftRowTab_Inv=new Array(16);for(o=0;o<16;o++)t.ShiftRowTab_Inv[t.ShiftRowTab[o]]=o;t.xtime=new Array(256);for(o=0;o<128;o++)t.xtime[o]=o<<1,t.xtime[128+o]=o<<1^27},t.Done=function(){delete t.Sbox_Inv,delete t.ShiftRowTab_Inv,delete t.xtime},t.ExpandKey=function(o){var e,n=o.length,i=1;switch(n){case 16:e=176;break;case 24:e=208;break;case 32:e=240;break;default:alert("my.ExpandKey: Only key lengths of 16, 24 or 32 bytes allowed!")}for(var r=n;r<e;r+=4){var s=o.slice(r-4,r);r%n==0?(s=new Array(t.Sbox[s[1]]^i,t.Sbox[s[2]],t.Sbox[s[3]],t.Sbox[s[0]]),(i<<=1)>=256&&(i^=283)):n>24&&r%n==16&&(s=new Array(t.Sbox[s[0]],t.Sbox[s[1]],t.Sbox[s[2]],t.Sbox[s[3]]));for(var c=0;c<4;c++)o[r+c]=o[r+c-n]^s[c]}},t.Encrypt=function(o,e){var n=e.length;t.AddRoundKey(o,e.slice(0,16));for(var i=16;i<n-16;i+=16)t.SubBytes(o,t.Sbox),t.ShiftRows(o,t.ShiftRowTab),t.MixColumns(o),t.AddRoundKey(o,e.slice(i,i+16));t.SubBytes(o,t.Sbox),t.ShiftRows(o,t.ShiftRowTab),t.AddRoundKey(o,e.slice(i,n))},t.Decrypt=function(o,e){var n=e.length;t.AddRoundKey(o,e.slice(n-16,n)),t.ShiftRows(o,t.ShiftRowTab_Inv),t.SubBytes(o,t.Sbox_Inv);for(var i=n-32;i>=16;i-=16)t.AddRoundKey(o,e.slice(i,i+16)),t.MixColumns_Inv(o),t.ShiftRows(o,t.ShiftRowTab_Inv),t.SubBytes(o,t.Sbox_Inv);t.AddRoundKey(o,e.slice(0,16))},t.SubBytes=function(t,o){for(var e=0;e<16;e++)t[e]=o[t[e]]},t.AddRoundKey=function(t,o){for(var e=0;e<16;e++)t[e]^=o[e]},t.ShiftRows=function(t,o){for(var e=(new Array).concat(t),n=0;n<16;n++)t[n]=e[o[n]]},t.MixColumns=function(o){for(var e=0;e<16;e+=4){var n=o[e+0],i=o[e+1],r=o[e+2],s=o[e+3],c=n^i^r^s;o[e+0]^=c^t.xtime[n^i],o[e+1]^=c^t.xtime[i^r],o[e+2]^=c^t.xtime[r^s],o[e+3]^=c^t.xtime[s^n]}},t.MixColumns_Inv=function(o){for(var e=0;e<16;e+=4){var n=o[e+0],i=o[e+1],r=o[e+2],s=o[e+3],c=n^i^r^s,u=t.xtime[c],h=t.xtime[t.xtime[u^n^r]]^c,a=t.xtime[t.xtime[u^i^s]]^c;o[e+0]^=h^t.xtime[n^i],o[e+1]^=a^t.xtime[i^r],o[e+2]^=h^t.xtime[r^s],o[e+3]^=a^t.xtime[s^n]}}})();cc._RF.pop()},{}],hash:[function(t,o,e){"use strict";cc._RF.push(o,"1f5faT564JFHoHqKGvg1Tat","hash");cc._RF.pop()},{}],jsbn:[function(t,o,e){"use strict";var n;cc._RF.push(o,"efd4anZWEJE5JQZZZcT+q7w","jsbn");function i(t,o,e){null!=t&&("number"==typeof t?this.fromNumber(t,o,e):null==o&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,o))}function r(){return new i(null)}"Microsoft Internet Explorer"==navigator.appName?(i.prototype.am=function(t,o,e,n,i,r){for(var s=32767&o,c=o>>15;--r>=0;){var u=32767&this[t],h=this[t++]>>15,a=c*u+h*s;i=((u=s*u+((32767&a)<<15)+e[n]+(1073741823&i))>>>30)+(a>>>15)+c*h+(i>>>30),e[n++]=1073741823&u}return i},n=30):"Netscape"!=navigator.appName?(i.prototype.am=function(t,o,e,n,i,r){for(;--r>=0;){var s=o*this[t++]+e[n]+i;i=Math.floor(s/67108864),e[n++]=67108863&s}return i},n=26):(i.prototype.am=function(t,o,e,n,i,r){for(var s=16383&o,c=o>>14;--r>=0;){var u=16383&this[t],h=this[t++]>>14,a=c*u+h*s;i=((u=s*u+((16383&a)<<14)+e[n]+i)>>28)+(a>>14)+c*h,e[n++]=268435455&u}return i},n=28),i.prototype.DB=n,i.prototype.DM=(1<<n)-1,i.prototype.DV=1<<n;i.prototype.FV=Math.pow(2,52),i.prototype.F1=52-n,i.prototype.F2=2*n-52;var s,c,u="0123456789abcdefghijklmnopqrstuvwxyz",h=new Array;for(s="0".charCodeAt(0),c=0;c<=9;++c)h[s++]=c;for(s="a".charCodeAt(0),c=10;c<36;++c)h[s++]=c;for(s="A".charCodeAt(0),c=10;c<36;++c)h[s++]=c;function a(t){return u.charAt(t)}function p(t,o){var e=h[t.charCodeAt(o)];return null==e?-1:e}function f(t){var o=r();return o.fromInt(t),o}function l(t){var o,e=1;return 0!=(o=t>>>16)&&(t=o,e+=16),0!=(o=t>>8)&&(t=o,e+=8),0!=(o=t>>4)&&(t=o,e+=4),0!=(o=t>>2)&&(t=o,e+=2),0!=(o=t>>1)&&(t=o,e+=1),e}function d(t){this.m=t}function v(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function y(t,o){return t&o}function T(t,o){return t|o}function m(t,o){return t^o}function S(t,o){return t&~o}function g(t){if(0==t)return-1;var o=0;return 0==(65535&t)&&(t>>=16,o+=16),0==(255&t)&&(t>>=8,o+=8),0==(15&t)&&(t>>=4,o+=4),0==(3&t)&&(t>>=2,o+=2),0==(1&t)&&++o,o}function b(t){for(var o=0;0!=t;)t&=t-1,++o;return o}function B(){}function _(t){return t}function x(t){this.r2=r(),this.q3=r(),i.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}d.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},d.prototype.revert=function(t){return t},d.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},d.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e),this.reduce(e)},d.prototype.sqrTo=function(t,o){t.squareTo(o),this.reduce(o)},v.prototype.convert=function(t){var o=r();return t.abs().dlShiftTo(this.m.t,o),o.divRemTo(this.m,null,o),t.s<0&&o.compareTo(i.ZERO)>0&&this.m.subTo(o,o),o},v.prototype.revert=function(t){var o=r();return t.copyTo(o),this.reduce(o),o},v.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var o=0;o<this.m.t;++o){var e=32767&t[o],n=e*this.mpl+((e*this.mph+(t[o]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[e=o+this.m.t]+=this.m.am(0,n,t,o,0,this.m.t);t[e]>=t.DV;)t[e]-=t.DV,t[++e]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},v.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e),this.reduce(e)},v.prototype.sqrTo=function(t,o){t.squareTo(o),this.reduce(o)},i.prototype.copyTo=function(t){for(var o=this.t-1;o>=0;--o)t[o]=this[o];t.t=this.t,t.s=this.s},i.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+DV:this.t=0},i.prototype.fromString=function(t,o){var e;if(16==o)e=4;else if(8==o)e=3;else if(256==o)e=8;else if(2==o)e=1;else if(32==o)e=5;else{if(4!=o)return void this.fromRadix(t,o);e=2}this.t=0,this.s=0;for(var n=t.length,r=!1,s=0;--n>=0;){var c=8==e?255&t[n]:p(t,n);c<0?"-"==t.charAt(n)&&(r=!0):(r=!1,0==s?this[this.t++]=c:s+e>this.DB?(this[this.t-1]|=(c&(1<<this.DB-s)-1)<<s,this[this.t++]=c>>this.DB-s):this[this.t-1]|=c<<s,(s+=e)>=this.DB&&(s-=this.DB))}8==e&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),r&&i.ZERO.subTo(this,this)},i.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},i.prototype.dlShiftTo=function(t,o){var e;for(e=this.t-1;e>=0;--e)o[e+t]=this[e];for(e=t-1;e>=0;--e)o[e]=0;o.t=this.t+t,o.s=this.s},i.prototype.drShiftTo=function(t,o){for(var e=t;e<this.t;++e)o[e-t]=this[e];o.t=Math.max(this.t-t,0),o.s=this.s},i.prototype.lShiftTo=function(t,o){var e,n=t%this.DB,i=this.DB-n,r=(1<<i)-1,s=Math.floor(t/this.DB),c=this.s<<n&this.DM;for(e=this.t-1;e>=0;--e)o[e+s+1]=this[e]>>i|c,c=(this[e]&r)<<n;for(e=s-1;e>=0;--e)o[e]=0;o[s]=c,o.t=this.t+s+1,o.s=this.s,o.clamp()},i.prototype.rShiftTo=function(t,o){o.s=this.s;var e=Math.floor(t/this.DB);if(e>=this.t)o.t=0;else{var n=t%this.DB,i=this.DB-n,r=(1<<n)-1;o[0]=this[e]>>n;for(var s=e+1;s<this.t;++s)o[s-e-1]|=(this[s]&r)<<i,o[s-e]=this[s]>>n;n>0&&(o[this.t-e-1]|=(this.s&r)<<i),o.t=this.t-e,o.clamp()}},i.prototype.subTo=function(t,o){for(var e=0,n=0,i=Math.min(t.t,this.t);e<i;)n+=this[e]-t[e],o[e++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n-=t.s;e<this.t;)n+=this[e],o[e++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;e<t.t;)n-=t[e],o[e++]=n&this.DM,n>>=this.DB;n-=t.s}o.s=n<0?-1:0,n<-1?o[e++]=this.DV+n:n>0&&(o[e++]=n),o.t=e,o.clamp()},i.prototype.multiplyTo=function(t,o){var e=this.abs(),n=t.abs(),r=e.t;for(o.t=r+n.t;--r>=0;)o[r]=0;for(r=0;r<n.t;++r)o[r+e.t]=e.am(0,n[r],o,r,0,e.t);o.s=0,o.clamp(),this.s!=t.s&&i.ZERO.subTo(o,o)},i.prototype.squareTo=function(t){for(var o=this.abs(),e=t.t=2*o.t;--e>=0;)t[e]=0;for(e=0;e<o.t-1;++e){var n=o.am(e,o[e],t,2*e,0,1);(t[e+o.t]+=o.am(e+1,2*o[e],t,2*e+1,n,o.t-e-1))>=o.DV&&(t[e+o.t]-=o.DV,t[e+o.t+1]=1)}t.t>0&&(t[t.t-1]+=o.am(e,o[e],t,2*e,0,1)),t.s=0,t.clamp()},i.prototype.divRemTo=function(t,o,e){var n=t.abs();if(!(n.t<=0)){var s=this.abs();if(s.t<n.t)return null!=o&&o.fromInt(0),void(null!=e&&this.copyTo(e));null==e&&(e=r());var c=r(),u=this.s,h=t.s,a=this.DB-l(n[n.t-1]);a>0?(n.lShiftTo(a,c),s.lShiftTo(a,e)):(n.copyTo(c),s.copyTo(e));var p=c.t,f=c[p-1];if(0!=f){var d=f*(1<<this.F1)+(p>1?c[p-2]>>this.F2:0),v=this.FV/d,y=(1<<this.F1)/d,T=1<<this.F2,m=e.t,S=m-p,g=null==o?r():o;for(c.dlShiftTo(S,g),e.compareTo(g)>=0&&(e[e.t++]=1,e.subTo(g,e)),i.ONE.dlShiftTo(p,g),g.subTo(c,c);c.t<p;)c[c.t++]=0;for(;--S>=0;){var b=e[--m]==f?this.DM:Math.floor(e[m]*v+(e[m-1]+T)*y);if((e[m]+=c.am(0,b,e,S,0,p))<b)for(c.dlShiftTo(S,g),e.subTo(g,e);e[m]<--b;)e.subTo(g,e)}null!=o&&(e.drShiftTo(p,o),u!=h&&i.ZERO.subTo(o,o)),e.t=p,e.clamp(),a>0&&e.rShiftTo(a,e),u<0&&i.ZERO.subTo(e,e)}}},i.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var o=3&t;return(o=(o=(o=(o=o*(2-(15&t)*o)&15)*(2-(255&t)*o)&255)*(2-((65535&t)*o&65535))&65535)*(2-t*o%this.DV)%this.DV)>0?this.DV-o:-o},i.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},i.prototype.exp=function(t,o){if(t>4294967295||t<1)return i.ONE;var e=r(),n=r(),s=o.convert(this),c=l(t)-1;for(s.copyTo(e);--c>=0;)if(o.sqrTo(e,n),(t&1<<c)>0)o.mulTo(n,s,e);else{var u=e;e=n,n=u}return o.revert(e)},i.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var o;if(16==t)o=4;else if(8==t)o=3;else if(2==t)o=1;else if(32==t)o=5;else if(64==t)o=6;else{if(4!=t)return this.toRadix(t);o=2}var e,n=(1<<o)-1,i=!1,r="",s=this.t,c=this.DB-s*this.DB%o;if(s-- >0)for(c<this.DB&&(e=this[s]>>c)>0&&(i=!0,r=a(e));s>=0;)c<o?(e=(this[s]&(1<<c)-1)<<o-c,e|=this[--s]>>(c+=this.DB-o)):(e=this[s]>>(c-=o)&n,c<=0&&(c+=this.DB,--s)),e>0&&(i=!0),i&&(r+=a(e));return i?r:"0"},i.prototype.negate=function(){var t=r();return i.ZERO.subTo(this,t),t},i.prototype.abs=function(){return this.s<0?this.negate():this},i.prototype.compareTo=function(t){var o=this.s-t.s;if(0!=o)return o;var e=this.t;if(0!=(o=e-t.t))return o;for(;--e>=0;)if(0!=(o=this[e]-t[e]))return o;return 0},i.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+l(this[this.t-1]^this.s&this.DM)},i.prototype.mod=function(t){var o=r();return this.abs().divRemTo(t,null,o),this.s<0&&o.compareTo(i.ZERO)>0&&t.subTo(o,o),o},i.prototype.modPowInt=function(t,o){var e;return e=t<256||o.isEven()?new d(o):new v(o),this.exp(t,e)},i.ZERO=f(0),i.ONE=f(1),B.prototype.convert=_,B.prototype.revert=_,B.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e)},B.prototype.sqrTo=function(t,o){t.squareTo(o)},x.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var o=r();return t.copyTo(o),this.reduce(o),o},x.prototype.revert=function(t){return t},x.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},x.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e),this.reduce(e)},x.prototype.sqrTo=function(t,o){t.squareTo(o),this.reduce(o)};var R=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],w=(1<<26)/R[R.length-1];i.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},i.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var o=this.chunkSize(t),e=Math.pow(t,o),n=f(e),i=r(),s=r(),c="";for(this.divRemTo(n,i,s);i.signum()>0;)c=(e+s.intValue()).toString(t).substr(1)+c,i.divRemTo(n,i,s);return s.intValue().toString(t)+c},i.prototype.fromRadix=function(t,o){this.fromInt(0),null==o&&(o=10);for(var e=this.chunkSize(o),n=Math.pow(o,e),r=!1,s=0,c=0,u=0;u<t.length;++u){var h=p(t,u);h<0?"-"==t.charAt(u)&&0==this.signum()&&(r=!0):(c=o*c+h,++s>=e&&(this.dMultiply(n),this.dAddOffset(c,0),s=0,c=0))}s>0&&(this.dMultiply(Math.pow(o,s)),this.dAddOffset(c,0)),r&&i.ZERO.subTo(this,this)},i.prototype.fromNumber=function(t,o,e){if("number"==typeof o)if(t<2)this.fromInt(1);else for(this.fromNumber(t,e),this.testBit(t-1)||this.bitwiseTo(i.ONE.shiftLeft(t-1),T,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(o);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(i.ONE.shiftLeft(t-1),this);else{var n=new Array,r=7&t;n.length=1+(t>>3),o.nextBytes(n),r>0?n[0]&=(1<<r)-1:n[0]=0,this.fromString(n,256)}},i.prototype.bitwiseTo=function(t,o,e){var n,i,r=Math.min(t.t,this.t);for(n=0;n<r;++n)e[n]=o(this[n],t[n]);if(t.t<this.t){for(i=t.s&this.DM,n=r;n<this.t;++n)e[n]=o(this[n],i);e.t=this.t}else{for(i=this.s&this.DM,n=r;n<t.t;++n)e[n]=o(i,t[n]);e.t=t.t}e.s=o(this.s,t.s),e.clamp()},i.prototype.changeBit=function(t,o){var e=i.ONE.shiftLeft(t);return this.bitwiseTo(e,o,e),e},i.prototype.addTo=function(t,o){for(var e=0,n=0,i=Math.min(t.t,this.t);e<i;)n+=this[e]+t[e],o[e++]=n&this.DM,n>>=this.DB;if(t.t<this.t){for(n+=t.s;e<this.t;)n+=this[e],o[e++]=n&this.DM,n>>=this.DB;n+=this.s}else{for(n+=this.s;e<t.t;)n+=t[e],o[e++]=n&this.DM,n>>=this.DB;n+=t.s}o.s=n<0?-1:0,n>0?o[e++]=n:n<-1&&(o[e++]=this.DV+n),o.t=e,o.clamp()},i.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},i.prototype.dAddOffset=function(t,o){if(0!=t){for(;this.t<=o;)this[this.t++]=0;for(this[o]+=t;this[o]>=this.DV;)this[o]-=this.DV,++o>=this.t&&(this[this.t++]=0),++this[o]}},i.prototype.multiplyLowerTo=function(t,o,e){var n,i=Math.min(this.t+t.t,o);for(e.s=0,e.t=i;i>0;)e[--i]=0;for(n=e.t-this.t;i<n;++i)e[i+this.t]=this.am(0,t[i],e,i,0,this.t);for(n=Math.min(t.t,o);i<n;++i)this.am(0,t[i],e,i,0,o-i);e.clamp()},i.prototype.multiplyUpperTo=function(t,o,e){--o;var n=e.t=this.t+t.t-o;for(e.s=0;--n>=0;)e[n]=0;for(n=Math.max(o-this.t,0);n<t.t;++n)e[this.t+n-o]=this.am(o-n,t[n],e,0,0,this.t+n-o);e.clamp(),e.drShiftTo(1,e)},i.prototype.modInt=function(t){if(t<=0)return 0;var o=this.DV%t,e=this.s<0?t-1:0;if(this.t>0)if(0==o)e=this[0]%t;else for(var n=this.t-1;n>=0;--n)e=(o*e+this[n])%t;return e},i.prototype.millerRabin=function(t){var o=this.subtract(i.ONE),e=o.getLowestSetBit();if(e<=0)return!1;var n=o.shiftRight(e);(t=t+1>>1)>R.length&&(t=R.length);for(var s=r(),c=0;c<t;++c){s.fromInt(R[Math.floor(Math.random()*R.length)]);var u=s.modPow(n,this);if(0!=u.compareTo(i.ONE)&&0!=u.compareTo(o)){for(var h=1;h++<e&&0!=u.compareTo(o);)if(0==(u=u.modPowInt(2,this)).compareTo(i.ONE))return!1;if(0!=u.compareTo(o))return!1}}return!0},i.prototype.clone=function(){var t=r();return this.copyTo(t),t},i.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},i.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},i.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},i.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},i.prototype.toByteArray=function(){var t=this.t,o=new Array;o[0]=this.s;var e,n=this.DB-t*this.DB%8,i=0;if(t-- >0)for(n<this.DB&&(e=this[t]>>n)!=(this.s&this.DM)>>n&&(o[i++]=e|this.s<<this.DB-n);t>=0;)n<8?(e=(this[t]&(1<<n)-1)<<8-n,e|=this[--t]>>(n+=this.DB-8)):(e=this[t]>>(n-=8)&255,n<=0&&(n+=this.DB,--t)),0!=(128&e)&&(e|=-256),0==i&&(128&this.s)!=(128&e)&&++i,(i>0||e!=this.s)&&(o[i++]=e);return o},i.prototype.equals=function(t){return 0==this.compareTo(t)},i.prototype.min=function(t){return this.compareTo(t)<0?this:t},i.prototype.max=function(t){return this.compareTo(t)>0?this:t},i.prototype.and=function(t){var o=r();return this.bitwiseTo(t,y,o),o},i.prototype.or=function(t){var o=r();return this.bitwiseTo(t,T,o),o},i.prototype.xor=function(t){var o=r();return this.bitwiseTo(t,m,o),o},i.prototype.andNot=function(t){var o=r();return this.bitwiseTo(t,S,o),o},i.prototype.not=function(){for(var t=r(),o=0;o<this.t;++o)t[o]=this.DM&~this[o];return t.t=this.t,t.s=~this.s,t},i.prototype.shiftLeft=function(t){var o=r();return t<0?this.rShiftTo(-t,o):this.lShiftTo(t,o),o},i.prototype.shiftRight=function(t){var o=r();return t<0?this.lShiftTo(-t,o):this.rShiftTo(t,o),o},i.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+g(this[t]);return this.s<0?this.t*this.DB:-1},i.prototype.bitCount=function(){for(var t=0,o=this.s&this.DM,e=0;e<this.t;++e)t+=b(this[e]^o);return t},i.prototype.testBit=function(t){var o=Math.floor(t/this.DB);return o>=this.t?0!=this.s:0!=(this[o]&1<<t%this.DB)},i.prototype.setBit=function(t){return this.changeBit(t,T)},i.prototype.clearBit=function(t){return this.changeBit(t,S)},i.prototype.flipBit=function(t){return this.changeBit(t,m)},i.prototype.add=function(t){var o=r();return this.addTo(t,o),o},i.prototype.subtract=function(t){var o=r();return this.subTo(t,o),o},i.prototype.multiply=function(t){var o=r();return this.multiplyTo(t,o),o},i.prototype.divide=function(t){var o=r();return this.divRemTo(t,o,null),o},i.prototype.remainder=function(t){var o=r();return this.divRemTo(t,null,o),o},i.prototype.divideAndRemainder=function(t){var o=r(),e=r();return this.divRemTo(t,o,e),new Array(o,e)},i.prototype.modPow=function(t,o){var e,n,i=t.bitLength(),s=f(1);if(i<=0)return s;e=i<18?1:i<48?3:i<144?4:i<768?5:6,n=i<8?new d(o):o.isEven()?new x(o):new v(o);var c=new Array,u=3,h=e-1,a=(1<<e)-1;if(c[1]=n.convert(this),e>1){var p=r();for(n.sqrTo(c[1],p);u<=a;)c[u]=r(),n.mulTo(p,c[u-2],c[u]),u+=2}var y,T,m=t.t-1,S=!0,g=r();for(i=l(t[m])-1;m>=0;){for(i>=h?y=t[m]>>i-h&a:(y=(t[m]&(1<<i+1)-1)<<h-i,m>0&&(y|=t[m-1]>>this.DB+i-h)),u=e;0==(1&y);)y>>=1,--u;if((i-=u)<0&&(i+=this.DB,--m),S)c[y].copyTo(s),S=!1;else{for(;u>1;)n.sqrTo(s,g),n.sqrTo(g,s),u-=2;u>0?n.sqrTo(s,g):(T=s,s=g,g=T),n.mulTo(g,c[y],s)}for(;m>=0&&0==(t[m]&1<<i);)n.sqrTo(s,g),T=s,s=g,g=T,--i<0&&(i=this.DB-1,--m)}return n.revert(s)},i.prototype.modInverse=function(t){var o=t.isEven();if(this.isEven()&&o||0==t.signum())return i.ZERO;for(var e=t.clone(),n=this.clone(),r=f(1),s=f(0),c=f(0),u=f(1);0!=e.signum();){for(;e.isEven();)e.rShiftTo(1,e),o?(r.isEven()&&s.isEven()||(r.addTo(this,r),s.subTo(t,s)),r.rShiftTo(1,r)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);for(;n.isEven();)n.rShiftTo(1,n),o?(c.isEven()&&u.isEven()||(c.addTo(this,c),u.subTo(t,u)),c.rShiftTo(1,c)):u.isEven()||u.subTo(t,u),u.rShiftTo(1,u);e.compareTo(n)>=0?(e.subTo(n,e),o&&r.subTo(c,r),s.subTo(u,s)):(n.subTo(e,n),o&&c.subTo(r,c),u.subTo(s,u))}return 0!=n.compareTo(i.ONE)?i.ZERO:u.compareTo(t)>=0?u.subtract(t):u.signum()<0?(u.addTo(t,u),u.signum()<0?u.add(t):u):u},i.prototype.pow=function(t){return this.exp(t,new B)},i.prototype.gcd=function(t){var o=this.s<0?this.negate():this.clone(),e=t.s<0?t.negate():t.clone();if(o.compareTo(e)<0){var n=o;o=e,e=n}var i=o.getLowestSetBit(),r=e.getLowestSetBit();if(r<0)return o;for(i<r&&(r=i),r>0&&(o.rShiftTo(r,o),e.rShiftTo(r,e));o.signum()>0;)(i=o.getLowestSetBit())>0&&o.rShiftTo(i,o),(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),o.compareTo(e)>=0?(o.subTo(e,o),o.rShiftTo(1,o)):(e.subTo(o,e),e.rShiftTo(1,e));return r>0&&e.lShiftTo(r,e),e},i.prototype.isProbablePrime=function(t){var o,e=this.abs();if(1==e.t&&e[0]<=R[R.length-1]){for(o=0;o<R.length;++o)if(e[0]==R[o])return!0;return!1}if(e.isEven())return!1;for(o=1;o<R.length;){for(var n=R[o],i=o+1;i<R.length&&n<w;)n*=R[i++];for(n=e.modInt(n);o<i;)if(n%R[o++]==0)return!1}return e.millerRabin(t)},i.prototype.square=function(){var t=r();return this.squareTo(t),t},cc._RF.pop()},{}],random:[function(t,o,e){"use strict";function n(){this.i=0,this.j=0,this.S=new Array}cc._RF.push(o,"958d4fSwQRIb7YRbRrVPaaJ","random"),function(t,o,e,n,i,r,s){function c(t){var o,n,i=this,r=t.length,s=0,c=i.i=i.j=i.m=0;for(i.S=[],i.c=[],r||(t=[r++]);s<e;)i.S[s]=s++;for(s=0;s<e;s++)c=a(c+(o=i.S[s])+t[s%r]),n=i.S[c],i.S[s]=n,i.S[c]=o;i.g=function(t){var o=i.S,n=a(i.i+1),r=o[n],s=a(i.j+r),c=o[s];o[n]=c,o[s]=r;for(var u=o[a(r+c)];--t;)c=o[s=a(s+(r=o[n=a(n+1)]))],o[n]=c,o[s]=r,u=u*e+o[a(r+c)];return i.i=n,i.j=s,u},i.g(e)}function u(t,o,e,n,i){if(e=[],i=typeof t,o&&"object"==i)for(n in t)if(n.indexOf("S")<5)try{e.push(u(t[n],o-1))}catch(t){}return e.length?e:t+("string"!=i?"\0":"")}function h(t,o,e,n){for(t+="",e=0,n=0;n<t.length;n++)o[a(n)]=a((e^=19*o[a(n)])+t.charCodeAt(n));for(n in t="",o)t+=String.fromCharCode(o[n]);return t}function a(t){return t&e-1}o.seedrandom=function(n,a){var p,f=[];return n=h(u(a?[n,t]:arguments.length?n:[(new Date).getTime(),t,window],3),f),h((p=new c(f)).S,t),o.random=function(){for(var t=p.g(6),o=s,n=0;t<i;)t=(t+n)*e,o*=e,n=p.g(1);for(;t>=r;)t/=2,o/=2,n>>>=1;return(t+n)/o},n},s=o.pow(e,6),i=o.pow(2,i),r=2*i,h(o.random(),t)}([],Math,256,0,52),n.prototype.init=function(t){var o,e,n;for(o=0;o<256;++o)this.S[o]=o;for(e=0,o=0;o<256;++o)e=e+this.S[o]+t[o%t.length]&255,n=this.S[o],this.S[o]=this.S[e],this.S[e]=n;this.i=0,this.j=0},n.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]};var i,r,s=256;function c(t){i[r++]^=255&t,i[r++]^=t>>8&255,i[r++]^=t>>16&255,i[r++]^=t>>24&255,r>=s&&(r-=s)}function u(){c((new Date).getTime())}if(null==i){var h;if(i=new Array,r=0,"Netscape"==navigator.appName&&navigator.appVersion<"5"&&window.crypto){var a=window.crypto.random(32);for(h=0;h<a.length;++h)i[r++]=255&a.charCodeAt(h)}for(;r<s;)h=Math.floor(65536*Math.random()),i[r++]=h>>>8,i[r++]=255&h;r=0,u()}cc._RF.pop()},{}],use_reversed_rotateTo:[function(t,o,e){"use strict";cc._RF.push(o,"ca107SrvdRB/JD4HdvKRy6A","use_reversed_rotateTo"),cc.RotateTo._reverse=!0,cc._RF.pop()},{}],"use_v2.1.x_cc.Action":[function(t,o,e){"use strict";cc._RF.push(o,"bb4b6H8039JSoCU21XHoauz","use_v2.1.x_cc.Action"),cc.macro.ROTATE_ACTION_CCW=!0,cc._RF.pop()},{}]},{},["aes","hash","jsbn","random","OverFlowCanvase","Launch","MenuSceneController","TestMenuSceneController","ResoinsiveTestSceneController","ResoinsiveTestSceneController_TS","02_LocalStorageTestSceneController","Angouka","03_SwipeTest","SwipeDetector","04_DownloadTest","05_RichTextText","06_EditBoxText","use_reversed_rotateTo","use_v2.1.x_cc.Action"]);