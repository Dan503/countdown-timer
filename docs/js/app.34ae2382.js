(function(A){function e(e){for(var s,o,r=e[0],a=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],n[o]&&m.push(n[o][0]),n[o]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(A[s]=a[s]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var A,e=0;e<i.length;e++){for(var t=i[e],s=!0,r=1;r<t.length;r++){var a=t[r];0!==n[a]&&(s=!1)}s&&(i.splice(e--,1),A=o(o.s=t[0]))}return A}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return A[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=A,o.c=s,o.d=function(A,e,t){o.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:t})},o.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},o.t=function(A,e){if(1&e&&(A=o(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var s in A)o.d(t,s,function(e){return A[e]}.bind(null,s));return t},o.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return o.d(e,"a",e),e},o.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},o.p="/countdown-timer/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=a;i.push([0,"chunk-vendors"]),t()})({0:function(A,e,t){A.exports=t("56d7")},"0786":function(A,e,t){"use strict";var s=t("2a74"),n=t.n(s);n.a},"0b4a":function(A,e,t){},2634:function(A,e,t){"use strict";var s=t("87fc"),n=t.n(s);n.a},"2a74":function(A,e,t){},3558:function(A,e,t){"use strict";var s=t("db3b"),n=t.n(s);n.a},"56d7":function(A,e,t){"use strict";t.r(e);var s=t("2b0e"),n=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"o-app",class:{isTiming:A.isTiming},attrs:{id:"app"}},[A._m(0),t("main",{staticClass:"o-app__main"},[t("m_timer",{attrs:{availableMinutes:A.timerMinutes,availableSeconds:A.timerSeconds,minutes:A.minutes,seconds:A.seconds,timeLeft:A.countDown}}),t("a_totalTime",{attrs:{minutes:A.minutes,seconds:A.secondsString}}),A._m(1)],1),t("a_notifyAudio",{attrs:{timeLeft:A.countDown,isTiming:A.isTiming}})],1)},i=[function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("header",{staticClass:"o-app__header"},[t("h1",{staticClass:"o-app__title"},[A._v("Count down timer")])])},function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"o-app__instructions"},[t("p",[A._v("Press "),t("strong",[A._v("space")]),A._v(" to quick restart.")]),t("p",[A._v("Press "),t("strong",[A._v("backspace")]),A._v(" to reset.")]),t("p",[A._v("Press "),t("strong",[A._v("enter")]),A._v(" to play/pause.")]),t("p",[A._v("Press "),t("strong",[A._v("F11")]),A._v(" for full screen mode.")])])}],o=new s["a"];function r(A){const e=A<0?-1:1;return Math.floor(A*e/1e3/60)*e}function a(A){const e=A<0?-1:1;return Math.floor(A*e/1e3)*e}function c({minutes:A=0,seconds:e=0}){const t=A=>1e3*parseInt(A),s=A=>60*t(A);return s(A)+t(e)}function l(A){return"undefined"==typeof A?"00":A<10?`0${A}`:A}function u(){const A=document.createElement("div");A.innerHTML='<video class="prevent-sleep" style="opacity: 0; pointer-events: none; position: absolute; height: 0; width: 0" tabindex="-1" muted="" title="Prevent web browser from going to sleep" playsinline="" loop=""><source src="data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=" type="video/webm"><source src="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQAD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" type="video/mp4"></video>';const e=A.querySelector("video");document.querySelector("body").appendChild(e),e.play()}var m=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"m-timer",class:{overTime:A.isOverTime}},[t("a_timerInput",{attrs:{value:A.timerMinutes,type:"minutes",styles:{width:A.minutesWidth,textAlign:"right"}},on:{onKey:A.handleMinutesKeyPress}}),A._v(":"),t("a_timerInput",{attrs:{value:A.secondsString,type:"seconds"},on:{onKey:A.handleSecondsKeyPress}})],1)},d=[],h=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"a-timerInput"},[t("input",{staticClass:"a-timerInput__input",style:A.styles,attrs:{type:"number",title:A.type},domProps:{value:A.value},on:{click:function(e){return A.onClick()},focus:function(e){return A.onFocus()},input:function(e){return A.onInput()},scroll:function(A){A.preventDefault()},keydown:A.onKey}}),t("div",{staticClass:"a-timerInput__message",attrs:{"aria-hidden":"true"}},[A._v("⇧ ⇩ Arrow keys")])])},B=[],Q={props:["type","value","styles"],mounted(){this.$elem=this.$el.children[0],o.$on("blur",()=>this.$elem.blur())},methods:{onKey(A){this.$emit("onKey",A)},onClick(){this.selectAll()},onFocus(){o.$emit("reset"),this.selectAll()},onInput(){const A={minutes:()=>this.minutesInput(),seconds:()=>this.secondsInput()};A[this.type](),o.$emit("input",{type:this.type,val:this.$elem.value})},minutesInput(){const A=this.$elem.value;(""==A||A<0)&&(this.$elem.value=0),A>99&&(this.$elem.value="99")},secondsInput(){const A=parseInt(this.$elem.value);isNaN(A)||A>59?this.$elem.value="00":this.$elem.value=A<0?59:A<10?`0${A}`:A},selectAll(){this.$elem.type="text",this.$elem.setSelectionRange(0,this.$elem.value.length),this.$elem.type="number"}}},g=Q,p=(t("2634"),t("2877")),w=Object(p["a"])(g,h,B,!1,null,null,null),E=w.exports,C={props:["availableMinutes","availableSeconds","minutes","seconds","timeLeft"],components:{a_timerInput:E},mounted(){this.$minutes=this.$el.querySelector('input[title="minutes"]'),this.$seconds=this.$el.querySelector('input[title="seconds"]')},computed:{isOverTime(){return this.timeLeft<=0},timerMinutes(){const A=this.availableMinutes-this.minutes,e=c({minutes:this.availableMinutes,seconds:this.availableSeconds}),t=c({minutes:this.minutes,seconds:this.seconds}),s=()=>{const e=0!=this.seconds,t=(this.availableSeconds,this.availableSeconds-this.seconds);return e&&t<0?A-1:A},n=()=>{const A=e-t,s=r(A);return 0==s?"-0":s};return t>e?n():s()},timerSeconds(){const A="-0"!==this.timerMinutes&&this.timerMinutes>=0,e=A?this.availableSeconds-this.seconds:this.seconds-this.availableSeconds,t=e>=0?e:e+60;return 60==t?0:t},secondsString(){return l(this.timerSeconds)},minutesWidth(){const A=`${this.timerMinutes}`,e="-"===A[0],t=A.length;return`${e?t-.4:t}ch`}},methods:{preventSideArrows(A){["ArrowRight","ArrowLeft"].includes(A.key)&&A.preventDefault()},handleMinutesKeyPress(A){this.preventSideArrows(A),"ArrowRight"==A.key&&this.focusSeconds()},handleSecondsKeyPress(A){this.preventSideArrows(A),"ArrowLeft"==A.key&&this.focusMinutes()},focusMinutes(){this.$minutes.focus()},focusSeconds(){this.$seconds.focus()}}},f=C,v=(t("8188"),Object(p["a"])(f,m,d,!1,null,null,null)),I=v.exports,D=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("div",{staticClass:"a-totalTime"},[t("h2",{staticClass:"a-totalTime__label"},[A._v("Total time:")]),t("p",{staticClass:"a-totalTime__time"},[A._v(A._s(A.minutes)+":"+A._s(A.seconds))])])},b=[],y={props:["seconds","minutes"]},G=y,N=(t("a96c"),Object(p["a"])(G,D,b,!1,null,null,null)),Z=N.exports,M=function(){var A=this,e=A.$createElement,t=A._self._c||e;return t("audio",{staticClass:"a_notifyAudio",attrs:{preload:"auto","data-timeleft":A.timeLeft}},[t("source",{attrs:{src:"sound/alien-alert-notification.mp3",type:"audio/mpeg"}}),t("source",{attrs:{src:"sound/alien-alert-notification.ogg",type:"audio/ogg"}})])},H=[],S={props:["timeLeft","isTiming"],mounted(){this.$audio=this.$el},updated(){this.isOutOfTime()&&this.isTiming&&this.$audio.play()},methods:{isOutOfTime(){return 0===this.timeLeft}}},k=S,F=(t("3558"),Object(p["a"])(k,M,H,!1,null,null,null)),R=F.exports;const T=parseInt(localStorage.getItem("timer-minutes")),Y=parseInt(localStorage.getItem("timer-seconds")),_={min:isNaN(T)?5:T,sec:isNaN(Y)?0:Y},W=c({minutes:_.min,seconds:_.sec});var L={created(){u(),o.$on("reset",this.reset),o.$on("restart",this.restart),o.$on("toggle",this.toggle),o.$on("input",({type:A,val:e})=>this.setTime({[A]:e}))},mounted(){this.reset(),document.documentElement.addEventListener("keyup",A=>{const e={Space:()=>this.restart(),Backspace:()=>this.reset(),Enter:()=>this.toggle()};e[A.code]&&(A.preventDefault(),e[A.code]())})},data(){return{defaultTime:W,time:0,countDown:W,isTiming:!1,timerMinutes:_.min,timerSeconds:_.sec,timer:setInterval(()=>{this.isTiming&&this.increment()},1e3)}},computed:{minutes(){return r(this.time)},seconds(){const A=a(this.time);return A<60?A:A-60*r(this.time)},secondsString(){return l(this.seconds)}},components:{m_timer:I,a_totalTime:Z,a_notifyAudio:R},methods:{restart(){this.reset(),this.start()},reset(){this.time=0,this.countDown=this.defaultTime,this.isTiming=!1},start(){this.isTiming=!0,o.$emit("blur")},stop(){this.isTiming=!1},toggle(){this.isTiming?this.stop():this.start()},increment(){this.time=this.time+c({seconds:1}),this.countDown=this.countDown-c({seconds:1})},setTime({minutes:A=this.timerMinutes,seconds:e=this.timerSeconds}){const t=c({minutes:A,seconds:e});Object.assign(this,{countDown:t,defaultTime:t,timerMinutes:parseInt(A),timerSeconds:parseInt(e)}),localStorage.setItem("timer-minutes",A),localStorage.setItem("timer-seconds",e)}}},P=L,j=(t("0786"),t("e7cd"),Object(p["a"])(P,n,i,!1,null,null,null)),X=j.exports,J=t("9483");Object(J["a"])("/countdown-timer/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(A){console.error("Error during service worker registration:",A)}}),s["a"].config.productionTip=!1,new s["a"]({render:function(A){return A(X)}}).$mount("#app")},8188:function(A,e,t){"use strict";var s=t("98b8"),n=t.n(s);n.a},"87fc":function(A,e,t){},"98b8":function(A,e,t){},a96c:function(A,e,t){"use strict";var s=t("f2ad"),n=t.n(s);n.a},db3b:function(A,e,t){},e7cd:function(A,e,t){"use strict";var s=t("0b4a"),n=t.n(s);n.a},f2ad:function(A,e,t){}});
//# sourceMappingURL=app.34ae2382.js.map