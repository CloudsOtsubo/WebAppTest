window.__require=function t(o,e,i){function r(s,c){if(!e[s]){if(!o[s]){var h=s.split("/");if(h=h[h.length-1],!o[h]){var u="function"==typeof __require&&__require;if(!c&&u)return u(h,!0);if(n)return n(h,!0);throw new Error("Cannot find module '"+s+"'")}}var a=e[s]={exports:{}};o[s][0].call(a.exports,function(t){return r(o[s][1][t]||t)},a,a.exports,t,o,e,i)}return e[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<i.length;s++)r(i[s]);return r}({"02_LocalStorageTestSceneController":[function(t,o,e){"use strict";cc._RF.push(o,"f9f0f7oZp1FP4KRZQLCWmUq","02_LocalStorageTestSceneController");var i=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function i(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),r=this&&this.__decorate||function(t,o,e,i){var r,n=arguments.length,s=n<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(n<3?r(s):n>3?r(o,e,s):r(o,e))||s);return n>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,s=n.ccclass,c=n.property,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.SliderValueText=null,o.Slider=null,o.SaveButton=null,o.LoadButton=null,o.ClearButton=null,o}return i(o,t),o.prototype.start=function(){this.Slider.node.on("slide",this.onSliderValueChanged,this),this.SaveButton.node.on("click",this.onPushSaveButton,this),this.LoadButton.node.on("click",this.onPushLoadButton,this),this.ClearButton.node.on("click",this.onPushClearButton,this)},o.prototype.onSliderValueChanged=function(){this.Slider.progress=Math.round(10*this.Slider.progress)/10,this.updateSliderText()},o.prototype.onPushSaveButton=function(){cc.log("onPushSaveButton"),this.saveData("TextSaveValue",this.SliderValueText.string)},o.prototype.onPushLoadButton=function(){var t=this.loadData("TextSaveValue");cc.log("loadedData: "+t),cc.log("loadedData==null "+(null==t)),cc.log("loadedData==undefined "+(void 0==t)),null!=t&&void 0!=t||(t=5),this.Slider.progress=t/10,this.updateSliderText()},o.prototype.onPushClearButton=function(){cc.sys.localStorage.clear()},o.prototype.updateSliderText=function(){this.SliderValueText.string=(10*this.Slider.progress).toString()},o.prototype.saveData=function(t,o){cc.sys.localStorage.setItem(t,o)},o.prototype.loadData=function(t){return cc.sys.localStorage.getItem(t)},o.prototype.removeAllData=function(){cc.sys.localStorage.clear()},r([c(cc.Label)],o.prototype,"SliderValueText",void 0),r([c(cc.Slider)],o.prototype,"Slider",void 0),r([c(cc.Button)],o.prototype,"SaveButton",void 0),r([c(cc.Button)],o.prototype,"LoadButton",void 0),r([c(cc.Button)],o.prototype,"ClearButton",void 0),o=r([s],o)}(cc.Component);e.default=h,cc._RF.pop()},{}],"03_SwipeTest":[function(t,o,e){"use strict";cc._RF.push(o,"666febHNOJOh5e6YN2oUqlR","03_SwipeTest"),cc.Class({extends:cc.Component,properties:{backButton:cc.Button},onLoad:function(){this.backButton.node.on("click",this.onPushBackButton,this)},onPushBackButton:function(t){cc.director.loadScene("00_TestMenu")},pageViewCallback:function(t,o,e){cc.log("pageViewCallback"),cc.log(o)}}),cc._RF.pop()},{}],Angouka:[function(t,o,e){"use strict";cc._RF.push(o,"cd388kZhMdAy7JREJ3/XOrz","Angouka"),cc.Class({extends:cc.Component,properties:{},start:function(){console.log("PassPhrase:","Test String.");var t=cryptico.generateRSAKey("Test String.",1024);console.log("MattsRSAkey:",t);var o=cryptico.publicKeyString(t);console.log("MattsPublicKeyString:",o);console.log("PlainText:","Test String.");var e=cryptico.encrypt("Test String.",o);console.log("EncryptionResult:",e.cipher);var i=cryptico.decrypt(e.cipher,t);console.log("DecryptionResult:",i)}}),cc._RF.pop()},{}],Launch:[function(t,o,e){"use strict";cc._RF.push(o,"280c3rsZJJKnZ9RqbALVwtK","Launch"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var t=this;this.canLoad=!0,cc.game.addPersistRootNode(this.node),this.sceneList=cc.game._sceneInfos,cc.log(this.sceneList),cc.director.loadScene("01_align_basic");var o={event:cc.EventListener.KEYBOARD,onKeyPressed:function(o,e){cc.log("keyDown: "+o);var i=o-48;i>=0&&i<t.sceneList.length&&t.canLoad&&t.loadScene(t.sceneList[i].url)}};cc.eventManager.addListener(o,this.node)},loadScene:function(t){this.canLoad=!1,cc.director.loadScene(t,this.onLoadSceneFinish.bind(this))},onLoadSceneFinish:function(){this.canLoad=!0}}),cc._RF.pop()},{}],MenuSceneController:[function(t,o,e){"use strict";cc._RF.push(o,"fd28fOn61JPxKnx6dmM/hvc","MenuSceneController"),Object.defineProperty(e,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,n=i.property,s=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.label=null,o.text="hello",o}return __extends(o,t),o.prototype.start=function(){},__decorate([n(cc.Label)],o.prototype,"label",void 0),__decorate([n],o.prototype,"text",void 0),o=__decorate([r],o)}(cc.Component);e.default=s,cc._RF.pop()},{}],OverFlowCanvase:[function(t,o,e){"use strict";cc._RF.push(o,"e84e4MOJrxHyrziWfNz/KFC","OverFlowCanvase"),Object.defineProperty(e,"__esModule",{value:!0});var i=cc._decorator,r=i.ccclass,n=i.property,s=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.label=null,o.text="hello",o}return __extends(o,t),o.prototype.start=function(){this.bar(),this.bar()},o.prototype.bb=function(){this.bar()},o.prototype.bar=function(){},__decorate([n(cc.Label)],o.prototype,"label",void 0),__decorate([n],o.prototype,"text",void 0),o=__decorate([r],o)}(cc.Component);e.default=s,cc._RF.pop()},{}],ResoinsiveTestSceneController_TS:[function(t,o,e){"use strict";cc._RF.push(o,"109affFhzlMwZHeTj7tMXdn","ResoinsiveTestSceneController_TS");var i=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function i(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),r=this&&this.__decorate||function(t,o,e,i){var r,n=arguments.length,s=n<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(n<3?r(s):n>3?r(o,e,s):r(o,e))||s);return n>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,s=n.ccclass,c=n.property,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.returnButton=null,o.label=null,o.text="hello",o}return i(o,t),o.prototype.onLoad=function(){var t=new cc.Component.EventHandler;t.target=this.node,t.component="MyComponent",t.handler="callback",t.customEventData="foobar",this.node.getComponent(cc.Button).clickEvents.push(t)},o.prototype.callback=function(t,o){t.target,this.returnButton},r([c(cc.Button)],o.prototype,"returnButton",void 0),r([c(cc.Label)],o.prototype,"label",void 0),r([c],o.prototype,"text",void 0),o=r([s],o)}(cc.Component);e.default=h,cc._RF.pop()},{}],ResoinsiveTestSceneController:[function(t,o,e){"use strict";cc._RF.push(o,"472b4GpdhZF94hu1iCs+3nd","ResoinsiveTestSceneController"),cc.Class({extends:cc.Component,properties:{button:cc.Button},onLoad:function(){this.button.node.on("click",this.callback,this)},callback:function(t){cc.director.loadScene("00_TestMenu")}}),cc._RF.pop()},{}],SwipeDetector:[function(t,o,e){"use strict";cc._RF.push(o,"cc70acaaeBDUICCjgsToW/3","SwipeDetector"),cc.Class({extends:cc.Component,properties:{pageView:cc.PageView,sceneManager:cc.Node},onLoad:function(){this.pageView.scrollToPage(1),this.pageView.node.on("page-turning",this.callback,this)},callback:function(t){0==this.pageView.getCurrentPageIndex()&&this.sceneManager.getComponent("03_SwipeTest").onPushBackButton()}}),cc._RF.pop()},{}],TestMenuSceneController:[function(t,o,e){"use strict";cc._RF.push(o,"9f2adbr4IJDxryhYM1JnWx2","TestMenuSceneController");var i=this&&this.__extends||function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function i(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),r=this&&this.__decorate||function(t,o,e,i){var r,n=arguments.length,s=n<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,o,e,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(n<3?r(s):n>3?r(o,e,s):r(o,e))||s);return n>3&&s&&Object.defineProperty(o,e,s),s};Object.defineProperty(e,"__esModule",{value:!0});var n=cc._decorator,s=n.ccclass,c=n.property,h=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.ResponsiveTestButton=null,o.LocalStorageTestButton=null,o.SwiteTestButton=null,o}return i(o,t),o.prototype.onLoad=function(){this.ResponsiveTestButton.node.on("click",this.onPushResponsiveTestButton,this),this.LocalStorageTestButton.node.on("click",this.onPushLocalStorageTestButton,this),this.SwiteTestButton.node.on("click",this.onPushSwiteTestButton,this)},o.prototype.onPushResponsiveTestButton=function(){cc.director.loadScene("01_ResponsiveTest")},o.prototype.onPushLocalStorageTestButton=function(){cc.director.loadScene("02_LocalStorageTest")},o.prototype.onPushSwiteTestButton=function(){cc.director.loadScene("03_SwipeTest")},r([c(cc.Button)],o.prototype,"ResponsiveTestButton",void 0),r([c(cc.Button)],o.prototype,"LocalStorageTestButton",void 0),r([c(cc.Button)],o.prototype,"SwiteTestButton",void 0),o=r([s],o)}(cc.Component);e.default=h,cc._RF.pop()},{}],aes:[function(t,o,e){"use strict";cc._RF.push(o,"1d92bo3bjtBaot9HA5bj8mI","aes");(function(){var t={};t.Sbox=new Array(99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22),t.ShiftRowTab=new Array(0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11),t.Init=function(){t.Sbox_Inv=new Array(256);for(var o=0;o<256;o++)t.Sbox_Inv[t.Sbox[o]]=o;t.ShiftRowTab_Inv=new Array(16);for(o=0;o<16;o++)t.ShiftRowTab_Inv[t.ShiftRowTab[o]]=o;t.xtime=new Array(256);for(o=0;o<128;o++)t.xtime[o]=o<<1,t.xtime[128+o]=o<<1^27},t.Done=function(){delete t.Sbox_Inv,delete t.ShiftRowTab_Inv,delete t.xtime},t.ExpandKey=function(o){var e,i=o.length,r=1;switch(i){case 16:e=176;break;case 24:e=208;break;case 32:e=240;break;default:alert("my.ExpandKey: Only key lengths of 16, 24 or 32 bytes allowed!")}for(var n=i;n<e;n+=4){var s=o.slice(n-4,n);n%i==0?(s=new Array(t.Sbox[s[1]]^r,t.Sbox[s[2]],t.Sbox[s[3]],t.Sbox[s[0]]),(r<<=1)>=256&&(r^=283)):i>24&&n%i==16&&(s=new Array(t.Sbox[s[0]],t.Sbox[s[1]],t.Sbox[s[2]],t.Sbox[s[3]]));for(var c=0;c<4;c++)o[n+c]=o[n+c-i]^s[c]}},t.Encrypt=function(o,e){var i=e.length;t.AddRoundKey(o,e.slice(0,16));for(var r=16;r<i-16;r+=16)t.SubBytes(o,t.Sbox),t.ShiftRows(o,t.ShiftRowTab),t.MixColumns(o),t.AddRoundKey(o,e.slice(r,r+16));t.SubBytes(o,t.Sbox),t.ShiftRows(o,t.ShiftRowTab),t.AddRoundKey(o,e.slice(r,i))},t.Decrypt=function(o,e){var i=e.length;t.AddRoundKey(o,e.slice(i-16,i)),t.ShiftRows(o,t.ShiftRowTab_Inv),t.SubBytes(o,t.Sbox_Inv);for(var r=i-32;r>=16;r-=16)t.AddRoundKey(o,e.slice(r,r+16)),t.MixColumns_Inv(o),t.ShiftRows(o,t.ShiftRowTab_Inv),t.SubBytes(o,t.Sbox_Inv);t.AddRoundKey(o,e.slice(0,16))},t.SubBytes=function(t,o){for(var e=0;e<16;e++)t[e]=o[t[e]]},t.AddRoundKey=function(t,o){for(var e=0;e<16;e++)t[e]^=o[e]},t.ShiftRows=function(t,o){for(var e=(new Array).concat(t),i=0;i<16;i++)t[i]=e[o[i]]},t.MixColumns=function(o){for(var e=0;e<16;e+=4){var i=o[e+0],r=o[e+1],n=o[e+2],s=o[e+3],c=i^r^n^s;o[e+0]^=c^t.xtime[i^r],o[e+1]^=c^t.xtime[r^n],o[e+2]^=c^t.xtime[n^s],o[e+3]^=c^t.xtime[s^i]}},t.MixColumns_Inv=function(o){for(var e=0;e<16;e+=4){var i=o[e+0],r=o[e+1],n=o[e+2],s=o[e+3],c=i^r^n^s,h=t.xtime[c],u=t.xtime[t.xtime[h^i^n]]^c,a=t.xtime[t.xtime[h^r^s]]^c;o[e+0]^=u^t.xtime[i^r],o[e+1]^=a^t.xtime[r^n],o[e+2]^=u^t.xtime[n^s],o[e+3]^=a^t.xtime[s^i]}}})();cc._RF.pop()},{}],hash:[function(t,o,e){"use strict";cc._RF.push(o,"1f5faT564JFHoHqKGvg1Tat","hash");cc._RF.pop()},{}],jsbn:[function(t,o,e){"use strict";var i;cc._RF.push(o,"efd4anZWEJE5JQZZZcT+q7w","jsbn");function r(t,o,e){null!=t&&("number"==typeof t?this.fromNumber(t,o,e):null==o&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,o))}function n(){return new r(null)}"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=function(t,o,e,i,r,n){for(var s=32767&o,c=o>>15;--n>=0;){var h=32767&this[t],u=this[t++]>>15,a=c*h+u*s;r=((h=s*h+((32767&a)<<15)+e[i]+(1073741823&r))>>>30)+(a>>>15)+c*u+(r>>>30),e[i++]=1073741823&h}return r},i=30):"Netscape"!=navigator.appName?(r.prototype.am=function(t,o,e,i,r,n){for(;--n>=0;){var s=o*this[t++]+e[i]+r;r=Math.floor(s/67108864),e[i++]=67108863&s}return r},i=26):(r.prototype.am=function(t,o,e,i,r,n){for(var s=16383&o,c=o>>14;--n>=0;){var h=16383&this[t],u=this[t++]>>14,a=c*h+u*s;r=((h=s*h+((16383&a)<<14)+e[i]+r)>>28)+(a>>14)+c*u,e[i++]=268435455&h}return r},i=28),r.prototype.DB=i,r.prototype.DM=(1<<i)-1,r.prototype.DV=1<<i;r.prototype.FV=Math.pow(2,52),r.prototype.F1=52-i,r.prototype.F2=2*i-52;var s,c,h="0123456789abcdefghijklmnopqrstuvwxyz",u=new Array;for(s="0".charCodeAt(0),c=0;c<=9;++c)u[s++]=c;for(s="a".charCodeAt(0),c=10;c<36;++c)u[s++]=c;for(s="A".charCodeAt(0),c=10;c<36;++c)u[s++]=c;function a(t){return h.charAt(t)}function p(t,o){var e=u[t.charCodeAt(o)];return null==e?-1:e}function f(t){var o=n();return o.fromInt(t),o}function l(t){var o,e=1;return 0!=(o=t>>>16)&&(t=o,e+=16),0!=(o=t>>8)&&(t=o,e+=8),0!=(o=t>>4)&&(t=o,e+=4),0!=(o=t>>2)&&(t=o,e+=2),0!=(o=t>>1)&&(t=o,e+=1),e}function d(t){this.m=t}function v(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function y(t,o){return t&o}function m(t,o){return t|o}function T(t,o){return t^o}function S(t,o){return t&~o}function b(t){if(0==t)return-1;var o=0;return 0==(65535&t)&&(t>>=16,o+=16),0==(255&t)&&(t>>=8,o+=8),0==(15&t)&&(t>>=4,o+=4),0==(3&t)&&(t>>=2,o+=2),0==(1&t)&&++o,o}function g(t){for(var o=0;0!=t;)t&=t-1,++o;return o}function _(){}function B(t){return t}function w(t){this.r2=n(),this.q3=n(),r.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}d.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},d.prototype.revert=function(t){return t},d.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},d.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e),this.reduce(e)},d.prototype.sqrTo=function(t,o){t.squareTo(o),this.reduce(o)},v.prototype.convert=function(t){var o=n();return t.abs().dlShiftTo(this.m.t,o),o.divRemTo(this.m,null,o),t.s<0&&o.compareTo(r.ZERO)>0&&this.m.subTo(o,o),o},v.prototype.revert=function(t){var o=n();return t.copyTo(o),this.reduce(o),o},v.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var o=0;o<this.m.t;++o){var e=32767&t[o],i=e*this.mpl+((e*this.mph+(t[o]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[e=o+this.m.t]+=this.m.am(0,i,t,o,0,this.m.t);t[e]>=t.DV;)t[e]-=t.DV,t[++e]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},v.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e),this.reduce(e)},v.prototype.sqrTo=function(t,o){t.squareTo(o),this.reduce(o)},r.prototype.copyTo=function(t){for(var o=this.t-1;o>=0;--o)t[o]=this[o];t.t=this.t,t.s=this.s},r.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+DV:this.t=0},r.prototype.fromString=function(t,o){var e;if(16==o)e=4;else if(8==o)e=3;else if(256==o)e=8;else if(2==o)e=1;else if(32==o)e=5;else{if(4!=o)return void this.fromRadix(t,o);e=2}this.t=0,this.s=0;for(var i=t.length,n=!1,s=0;--i>=0;){var c=8==e?255&t[i]:p(t,i);c<0?"-"==t.charAt(i)&&(n=!0):(n=!1,0==s?this[this.t++]=c:s+e>this.DB?(this[this.t-1]|=(c&(1<<this.DB-s)-1)<<s,this[this.t++]=c>>this.DB-s):this[this.t-1]|=c<<s,(s+=e)>=this.DB&&(s-=this.DB))}8==e&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),n&&r.ZERO.subTo(this,this)},r.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},r.prototype.dlShiftTo=function(t,o){var e;for(e=this.t-1;e>=0;--e)o[e+t]=this[e];for(e=t-1;e>=0;--e)o[e]=0;o.t=this.t+t,o.s=this.s},r.prototype.drShiftTo=function(t,o){for(var e=t;e<this.t;++e)o[e-t]=this[e];o.t=Math.max(this.t-t,0),o.s=this.s},r.prototype.lShiftTo=function(t,o){var e,i=t%this.DB,r=this.DB-i,n=(1<<r)-1,s=Math.floor(t/this.DB),c=this.s<<i&this.DM;for(e=this.t-1;e>=0;--e)o[e+s+1]=this[e]>>r|c,c=(this[e]&n)<<i;for(e=s-1;e>=0;--e)o[e]=0;o[s]=c,o.t=this.t+s+1,o.s=this.s,o.clamp()},r.prototype.rShiftTo=function(t,o){o.s=this.s;var e=Math.floor(t/this.DB);if(e>=this.t)o.t=0;else{var i=t%this.DB,r=this.DB-i,n=(1<<i)-1;o[0]=this[e]>>i;for(var s=e+1;s<this.t;++s)o[s-e-1]|=(this[s]&n)<<r,o[s-e]=this[s]>>i;i>0&&(o[this.t-e-1]|=(this.s&n)<<r),o.t=this.t-e,o.clamp()}},r.prototype.subTo=function(t,o){for(var e=0,i=0,r=Math.min(t.t,this.t);e<r;)i+=this[e]-t[e],o[e++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;e<this.t;)i+=this[e],o[e++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;e<t.t;)i-=t[e],o[e++]=i&this.DM,i>>=this.DB;i-=t.s}o.s=i<0?-1:0,i<-1?o[e++]=this.DV+i:i>0&&(o[e++]=i),o.t=e,o.clamp()},r.prototype.multiplyTo=function(t,o){var e=this.abs(),i=t.abs(),n=e.t;for(o.t=n+i.t;--n>=0;)o[n]=0;for(n=0;n<i.t;++n)o[n+e.t]=e.am(0,i[n],o,n,0,e.t);o.s=0,o.clamp(),this.s!=t.s&&r.ZERO.subTo(o,o)},r.prototype.squareTo=function(t){for(var o=this.abs(),e=t.t=2*o.t;--e>=0;)t[e]=0;for(e=0;e<o.t-1;++e){var i=o.am(e,o[e],t,2*e,0,1);(t[e+o.t]+=o.am(e+1,2*o[e],t,2*e+1,i,o.t-e-1))>=o.DV&&(t[e+o.t]-=o.DV,t[e+o.t+1]=1)}t.t>0&&(t[t.t-1]+=o.am(e,o[e],t,2*e,0,1)),t.s=0,t.clamp()},r.prototype.divRemTo=function(t,o,e){var i=t.abs();if(!(i.t<=0)){var s=this.abs();if(s.t<i.t)return null!=o&&o.fromInt(0),void(null!=e&&this.copyTo(e));null==e&&(e=n());var c=n(),h=this.s,u=t.s,a=this.DB-l(i[i.t-1]);a>0?(i.lShiftTo(a,c),s.lShiftTo(a,e)):(i.copyTo(c),s.copyTo(e));var p=c.t,f=c[p-1];if(0!=f){var d=f*(1<<this.F1)+(p>1?c[p-2]>>this.F2:0),v=this.FV/d,y=(1<<this.F1)/d,m=1<<this.F2,T=e.t,S=T-p,b=null==o?n():o;for(c.dlShiftTo(S,b),e.compareTo(b)>=0&&(e[e.t++]=1,e.subTo(b,e)),r.ONE.dlShiftTo(p,b),b.subTo(c,c);c.t<p;)c[c.t++]=0;for(;--S>=0;){var g=e[--T]==f?this.DM:Math.floor(e[T]*v+(e[T-1]+m)*y);if((e[T]+=c.am(0,g,e,S,0,p))<g)for(c.dlShiftTo(S,b),e.subTo(b,e);e[T]<--g;)e.subTo(b,e)}null!=o&&(e.drShiftTo(p,o),h!=u&&r.ZERO.subTo(o,o)),e.t=p,e.clamp(),a>0&&e.rShiftTo(a,e),h<0&&r.ZERO.subTo(e,e)}}},r.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var o=3&t;return(o=(o=(o=(o=o*(2-(15&t)*o)&15)*(2-(255&t)*o)&255)*(2-((65535&t)*o&65535))&65535)*(2-t*o%this.DV)%this.DV)>0?this.DV-o:-o},r.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},r.prototype.exp=function(t,o){if(t>4294967295||t<1)return r.ONE;var e=n(),i=n(),s=o.convert(this),c=l(t)-1;for(s.copyTo(e);--c>=0;)if(o.sqrTo(e,i),(t&1<<c)>0)o.mulTo(i,s,e);else{var h=e;e=i,i=h}return o.revert(e)},r.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var o;if(16==t)o=4;else if(8==t)o=3;else if(2==t)o=1;else if(32==t)o=5;else if(64==t)o=6;else{if(4!=t)return this.toRadix(t);o=2}var e,i=(1<<o)-1,r=!1,n="",s=this.t,c=this.DB-s*this.DB%o;if(s-- >0)for(c<this.DB&&(e=this[s]>>c)>0&&(r=!0,n=a(e));s>=0;)c<o?(e=(this[s]&(1<<c)-1)<<o-c,e|=this[--s]>>(c+=this.DB-o)):(e=this[s]>>(c-=o)&i,c<=0&&(c+=this.DB,--s)),e>0&&(r=!0),r&&(n+=a(e));return r?n:"0"},r.prototype.negate=function(){var t=n();return r.ZERO.subTo(this,t),t},r.prototype.abs=function(){return this.s<0?this.negate():this},r.prototype.compareTo=function(t){var o=this.s-t.s;if(0!=o)return o;var e=this.t;if(0!=(o=e-t.t))return o;for(;--e>=0;)if(0!=(o=this[e]-t[e]))return o;return 0},r.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+l(this[this.t-1]^this.s&this.DM)},r.prototype.mod=function(t){var o=n();return this.abs().divRemTo(t,null,o),this.s<0&&o.compareTo(r.ZERO)>0&&t.subTo(o,o),o},r.prototype.modPowInt=function(t,o){var e;return e=t<256||o.isEven()?new d(o):new v(o),this.exp(t,e)},r.ZERO=f(0),r.ONE=f(1),_.prototype.convert=B,_.prototype.revert=B,_.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e)},_.prototype.sqrTo=function(t,o){t.squareTo(o)},w.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var o=n();return t.copyTo(o),this.reduce(o),o},w.prototype.revert=function(t){return t},w.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},w.prototype.mulTo=function(t,o,e){t.multiplyTo(o,e),this.reduce(e)},w.prototype.sqrTo=function(t,o){t.squareTo(o),this.reduce(o)};var R=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],D=(1<<26)/R[R.length-1];r.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},r.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var o=this.chunkSize(t),e=Math.pow(t,o),i=f(e),r=n(),s=n(),c="";for(this.divRemTo(i,r,s);r.signum()>0;)c=(e+s.intValue()).toString(t).substr(1)+c,r.divRemTo(i,r,s);return s.intValue().toString(t)+c},r.prototype.fromRadix=function(t,o){this.fromInt(0),null==o&&(o=10);for(var e=this.chunkSize(o),i=Math.pow(o,e),n=!1,s=0,c=0,h=0;h<t.length;++h){var u=p(t,h);u<0?"-"==t.charAt(h)&&0==this.signum()&&(n=!0):(c=o*c+u,++s>=e&&(this.dMultiply(i),this.dAddOffset(c,0),s=0,c=0))}s>0&&(this.dMultiply(Math.pow(o,s)),this.dAddOffset(c,0)),n&&r.ZERO.subTo(this,this)},r.prototype.fromNumber=function(t,o,e){if("number"==typeof o)if(t<2)this.fromInt(1);else for(this.fromNumber(t,e),this.testBit(t-1)||this.bitwiseTo(r.ONE.shiftLeft(t-1),m,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(o);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(r.ONE.shiftLeft(t-1),this);else{var i=new Array,n=7&t;i.length=1+(t>>3),o.nextBytes(i),n>0?i[0]&=(1<<n)-1:i[0]=0,this.fromString(i,256)}},r.prototype.bitwiseTo=function(t,o,e){var i,r,n=Math.min(t.t,this.t);for(i=0;i<n;++i)e[i]=o(this[i],t[i]);if(t.t<this.t){for(r=t.s&this.DM,i=n;i<this.t;++i)e[i]=o(this[i],r);e.t=this.t}else{for(r=this.s&this.DM,i=n;i<t.t;++i)e[i]=o(r,t[i]);e.t=t.t}e.s=o(this.s,t.s),e.clamp()},r.prototype.changeBit=function(t,o){var e=r.ONE.shiftLeft(t);return this.bitwiseTo(e,o,e),e},r.prototype.addTo=function(t,o){for(var e=0,i=0,r=Math.min(t.t,this.t);e<r;)i+=this[e]+t[e],o[e++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i+=t.s;e<this.t;)i+=this[e],o[e++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;e<t.t;)i+=t[e],o[e++]=i&this.DM,i>>=this.DB;i+=t.s}o.s=i<0?-1:0,i>0?o[e++]=i:i<-1&&(o[e++]=this.DV+i),o.t=e,o.clamp()},r.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},r.prototype.dAddOffset=function(t,o){if(0!=t){for(;this.t<=o;)this[this.t++]=0;for(this[o]+=t;this[o]>=this.DV;)this[o]-=this.DV,++o>=this.t&&(this[this.t++]=0),++this[o]}},r.prototype.multiplyLowerTo=function(t,o,e){var i,r=Math.min(this.t+t.t,o);for(e.s=0,e.t=r;r>0;)e[--r]=0;for(i=e.t-this.t;r<i;++r)e[r+this.t]=this.am(0,t[r],e,r,0,this.t);for(i=Math.min(t.t,o);r<i;++r)this.am(0,t[r],e,r,0,o-r);e.clamp()},r.prototype.multiplyUpperTo=function(t,o,e){--o;var i=e.t=this.t+t.t-o;for(e.s=0;--i>=0;)e[i]=0;for(i=Math.max(o-this.t,0);i<t.t;++i)e[this.t+i-o]=this.am(o-i,t[i],e,0,0,this.t+i-o);e.clamp(),e.drShiftTo(1,e)},r.prototype.modInt=function(t){if(t<=0)return 0;var o=this.DV%t,e=this.s<0?t-1:0;if(this.t>0)if(0==o)e=this[0]%t;else for(var i=this.t-1;i>=0;--i)e=(o*e+this[i])%t;return e},r.prototype.millerRabin=function(t){var o=this.subtract(r.ONE),e=o.getLowestSetBit();if(e<=0)return!1;var i=o.shiftRight(e);(t=t+1>>1)>R.length&&(t=R.length);for(var s=n(),c=0;c<t;++c){s.fromInt(R[Math.floor(Math.random()*R.length)]);var h=s.modPow(i,this);if(0!=h.compareTo(r.ONE)&&0!=h.compareTo(o)){for(var u=1;u++<e&&0!=h.compareTo(o);)if(0==(h=h.modPowInt(2,this)).compareTo(r.ONE))return!1;if(0!=h.compareTo(o))return!1}}return!0},r.prototype.clone=function(){var t=n();return this.copyTo(t),t},r.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},r.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},r.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},r.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},r.prototype.toByteArray=function(){var t=this.t,o=new Array;o[0]=this.s;var e,i=this.DB-t*this.DB%8,r=0;if(t-- >0)for(i<this.DB&&(e=this[t]>>i)!=(this.s&this.DM)>>i&&(o[r++]=e|this.s<<this.DB-i);t>=0;)i<8?(e=(this[t]&(1<<i)-1)<<8-i,e|=this[--t]>>(i+=this.DB-8)):(e=this[t]>>(i-=8)&255,i<=0&&(i+=this.DB,--t)),0!=(128&e)&&(e|=-256),0==r&&(128&this.s)!=(128&e)&&++r,(r>0||e!=this.s)&&(o[r++]=e);return o},r.prototype.equals=function(t){return 0==this.compareTo(t)},r.prototype.min=function(t){return this.compareTo(t)<0?this:t},r.prototype.max=function(t){return this.compareTo(t)>0?this:t},r.prototype.and=function(t){var o=n();return this.bitwiseTo(t,y,o),o},r.prototype.or=function(t){var o=n();return this.bitwiseTo(t,m,o),o},r.prototype.xor=function(t){var o=n();return this.bitwiseTo(t,T,o),o},r.prototype.andNot=function(t){var o=n();return this.bitwiseTo(t,S,o),o},r.prototype.not=function(){for(var t=n(),o=0;o<this.t;++o)t[o]=this.DM&~this[o];return t.t=this.t,t.s=~this.s,t},r.prototype.shiftLeft=function(t){var o=n();return t<0?this.rShiftTo(-t,o):this.lShiftTo(t,o),o},r.prototype.shiftRight=function(t){var o=n();return t<0?this.lShiftTo(-t,o):this.rShiftTo(t,o),o},r.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+b(this[t]);return this.s<0?this.t*this.DB:-1},r.prototype.bitCount=function(){for(var t=0,o=this.s&this.DM,e=0;e<this.t;++e)t+=g(this[e]^o);return t},r.prototype.testBit=function(t){var o=Math.floor(t/this.DB);return o>=this.t?0!=this.s:0!=(this[o]&1<<t%this.DB)},r.prototype.setBit=function(t){return this.changeBit(t,m)},r.prototype.clearBit=function(t){return this.changeBit(t,S)},r.prototype.flipBit=function(t){return this.changeBit(t,T)},r.prototype.add=function(t){var o=n();return this.addTo(t,o),o},r.prototype.subtract=function(t){var o=n();return this.subTo(t,o),o},r.prototype.multiply=function(t){var o=n();return this.multiplyTo(t,o),o},r.prototype.divide=function(t){var o=n();return this.divRemTo(t,o,null),o},r.prototype.remainder=function(t){var o=n();return this.divRemTo(t,null,o),o},r.prototype.divideAndRemainder=function(t){var o=n(),e=n();return this.divRemTo(t,o,e),new Array(o,e)},r.prototype.modPow=function(t,o){var e,i,r=t.bitLength(),s=f(1);if(r<=0)return s;e=r<18?1:r<48?3:r<144?4:r<768?5:6,i=r<8?new d(o):o.isEven()?new w(o):new v(o);var c=new Array,h=3,u=e-1,a=(1<<e)-1;if(c[1]=i.convert(this),e>1){var p=n();for(i.sqrTo(c[1],p);h<=a;)c[h]=n(),i.mulTo(p,c[h-2],c[h]),h+=2}var y,m,T=t.t-1,S=!0,b=n();for(r=l(t[T])-1;T>=0;){for(r>=u?y=t[T]>>r-u&a:(y=(t[T]&(1<<r+1)-1)<<u-r,T>0&&(y|=t[T-1]>>this.DB+r-u)),h=e;0==(1&y);)y>>=1,--h;if((r-=h)<0&&(r+=this.DB,--T),S)c[y].copyTo(s),S=!1;else{for(;h>1;)i.sqrTo(s,b),i.sqrTo(b,s),h-=2;h>0?i.sqrTo(s,b):(m=s,s=b,b=m),i.mulTo(b,c[y],s)}for(;T>=0&&0==(t[T]&1<<r);)i.sqrTo(s,b),m=s,s=b,b=m,--r<0&&(r=this.DB-1,--T)}return i.revert(s)},r.prototype.modInverse=function(t){var o=t.isEven();if(this.isEven()&&o||0==t.signum())return r.ZERO;for(var e=t.clone(),i=this.clone(),n=f(1),s=f(0),c=f(0),h=f(1);0!=e.signum();){for(;e.isEven();)e.rShiftTo(1,e),o?(n.isEven()&&s.isEven()||(n.addTo(this,n),s.subTo(t,s)),n.rShiftTo(1,n)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);for(;i.isEven();)i.rShiftTo(1,i),o?(c.isEven()&&h.isEven()||(c.addTo(this,c),h.subTo(t,h)),c.rShiftTo(1,c)):h.isEven()||h.subTo(t,h),h.rShiftTo(1,h);e.compareTo(i)>=0?(e.subTo(i,e),o&&n.subTo(c,n),s.subTo(h,s)):(i.subTo(e,i),o&&c.subTo(n,c),h.subTo(s,h))}return 0!=i.compareTo(r.ONE)?r.ZERO:h.compareTo(t)>=0?h.subtract(t):h.signum()<0?(h.addTo(t,h),h.signum()<0?h.add(t):h):h},r.prototype.pow=function(t){return this.exp(t,new _)},r.prototype.gcd=function(t){var o=this.s<0?this.negate():this.clone(),e=t.s<0?t.negate():t.clone();if(o.compareTo(e)<0){var i=o;o=e,e=i}var r=o.getLowestSetBit(),n=e.getLowestSetBit();if(n<0)return o;for(r<n&&(n=r),n>0&&(o.rShiftTo(n,o),e.rShiftTo(n,e));o.signum()>0;)(r=o.getLowestSetBit())>0&&o.rShiftTo(r,o),(r=e.getLowestSetBit())>0&&e.rShiftTo(r,e),o.compareTo(e)>=0?(o.subTo(e,o),o.rShiftTo(1,o)):(e.subTo(o,e),e.rShiftTo(1,e));return n>0&&e.lShiftTo(n,e),e},r.prototype.isProbablePrime=function(t){var o,e=this.abs();if(1==e.t&&e[0]<=R[R.length-1]){for(o=0;o<R.length;++o)if(e[0]==R[o])return!0;return!1}if(e.isEven())return!1;for(o=1;o<R.length;){for(var i=R[o],r=o+1;r<R.length&&i<D;)i*=R[r++];for(i=e.modInt(i);o<r;)if(i%R[o++]==0)return!1}return e.millerRabin(t)},r.prototype.square=function(){var t=n();return this.squareTo(t),t},cc._RF.pop()},{}],random:[function(t,o,e){"use strict";cc._RF.push(o,"958d4fSwQRIb7YRbRrVPaaJ","random");var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(){this.i=0,this.j=0,this.S=new Array}(function(t,o,e,r,n,s,c){function h(t){var o,i,r=this,n=t.length,s=0,c=r.i=r.j=r.m=0;for(r.S=[],r.c=[],n||(t=[n++]);s<e;)r.S[s]=s++;for(s=0;s<e;s++)c=p(c+(o=r.S[s])+t[s%n]),i=r.S[c],r.S[s]=i,r.S[c]=o;r.g=function(t){var o=r.S,i=p(r.i+1),n=o[i],s=p(r.j+n),c=o[s];o[i]=c,o[s]=n;for(var h=o[p(n+c)];--t;)c=o[s=p(s+(n=o[i=p(i+1)]))],o[i]=c,o[s]=n,h=h*e+o[p(n+c)];return r.i=i,r.j=s,h},r.g(e)}function u(t,o,e,r,n){if(e=[],n=void 0===t?"undefined":i(t),o&&"object"==n)for(r in t)if(r.indexOf("S")<5)try{e.push(u(t[r],o-1))}catch(t){}return e.length?e:t+("string"!=n?"\0":"")}function a(t,o,e,i){for(t+="",e=0,i=0;i<t.length;i++)o[p(i)]=p((e^=19*o[p(i)])+t.charCodeAt(i));for(i in t="",o)t+=String.fromCharCode(o[i]);return t}function p(t){return t&e-1}o.seedrandom=function(i,r){var p,f=[];return i=a(u(r?[i,t]:arguments.length?i:[(new Date).getTime(),t,window],3),f),a((p=new h(f)).S,t),o.random=function(){for(var t=p.g(6),o=c,i=0;t<n;)t=(t+i)*e,o*=e,i=p.g(1);for(;t>=s;)t/=2,o/=2,i>>>=1;return(t+i)/o},i},c=o.pow(e,6),n=o.pow(2,n),s=2*n,a(o.random(),t)})([],Math,256,0,52),r.prototype.init=function(t){var o,e,i;for(o=0;o<256;++o)this.S[o]=o;for(e=0,o=0;o<256;++o)e=e+this.S[o]+t[o%t.length]&255,i=this.S[o],this.S[o]=this.S[e],this.S[e]=i;this.i=0,this.j=0},r.prototype.next=function(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]};var n,s,c=256;function h(t){n[s++]^=255&t,n[s++]^=t>>8&255,n[s++]^=t>>16&255,n[s++]^=t>>24&255,s>=c&&(s-=c)}function u(){h((new Date).getTime())}if(null==n){var a;if(n=new Array,s=0,"Netscape"==navigator.appName&&navigator.appVersion<"5"&&window.crypto){var p=window.crypto.random(32);for(a=0;a<p.length;++a)n[s++]=255&p.charCodeAt(a)}for(;s<c;)a=Math.floor(65536*Math.random()),n[s++]=a>>>8,n[s++]=255&a;s=0,u()}cc._RF.pop()},{}],"use_v2.1.x_cc.Action":[function(t,o,e){"use strict";cc._RF.push(o,"bb4b6H8039JSoCU21XHoauz","use_v2.1.x_cc.Action"),cc.macro.ROTATE_ACTION_CCW=!0,cc._RF.pop()},{}]},{},["aes","hash","jsbn","random","OverFlowCanvase","Launch","MenuSceneController","TestMenuSceneController","ResoinsiveTestSceneController","ResoinsiveTestSceneController_TS","02_LocalStorageTestSceneController","Angouka","03_SwipeTest","SwipeDetector","use_v2.1.x_cc.Action"]);