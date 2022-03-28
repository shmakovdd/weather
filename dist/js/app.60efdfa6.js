(function(){"use strict";var t={8577:function(t,e,n){var r=n(9242),a=n(3396);const i={class:"app"};function o(t,e,n,r,o,c){const u=(0,a.up)("app-header"),s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(u),(0,a.Wm)(s)])}const c={class:"header"};function u(t,e,n,r,i,o){const u=(0,a.up)("app-logo"),s=(0,a.up)("app-nav-bar"),p=(0,a.up)("app-container");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u),(0,a.Wm)(s)])),_:1})])}var s=n(6949);const p=t=>((0,a.dD)("data-v-d7432382"),t=t(),(0,a.Cn)(),t),d={class:"logo"},l=p((()=>(0,a._)("div",{class:"logo__wrapper"},[(0,a._)("img",{class:"logo__img",src:s,alt:"logo"})],-1))),h=p((()=>(0,a._)("div",{class:"logo__text"},[(0,a._)("h3",null,"AccuVueWeather")],-1))),f=[l,h];function v(t,e,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",d,f)}var m={},w=n(89);const _=(0,w.Z)(m,[["render",v],["__scopeId","data-v-d7432382"]]);var g=_;const y={class:"container"};function D(t,e,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a.WI)(t.$slots,"default",{},void 0,!0)])}var C={};const b=(0,w.Z)(C,[["render",D],["__scopeId","data-v-99784450"]]);var W=b;const O={class:"navbar"},k=(0,a.Uk)("Прогноз на 10 дней"),j=(0,a.Uk)("Прогноз на месяц");function $(t,e,n,r,i,o){const c=(0,a.up)("app-button");return(0,a.wg)(),(0,a.iD)("div",O,[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[j])),_:1})])}const A={class:"btn"};function Z(t,e,n,r,i,o){return(0,a.wg)(),(0,a.iD)("button",A,[(0,a.WI)(t.$slots,"default")])}var x={};const I=(0,w.Z)(x,[["render",Z]]);var z=I,M={components:{AppButton:z}};const T=(0,w.Z)(M,[["render",$],["__scopeId","data-v-5c4377d3"]]);var U=T,P={components:{AppLogo:g,AppContainer:W,AppNavBar:U}};const S=(0,w.Z)(P,[["render",u],["__scopeId","data-v-1ca11892"]]);var q=S,B={components:{AppHeader:q}};const G=(0,w.Z)(B,[["render",o]]);var H=G,E=n(678);const F={class:"city-weather"};function L(t,e,n,r,i,o){const c=(0,a.up)("app-current-weather"),u=(0,a.up)("app-container");return(0,a.wg)(),(0,a.iD)("article",F,[(0,a.Wm)(u,{class:"city-weather__container"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{name:i.city,currentData:i.currentCityData,class:"city-weather__weather"},null,8,["name","currentData"])])),_:1})])}var N=n(7139);const V={class:"current-weather"},J={class:"current-weather__city-name"},K={class:"current-weather__date"},Q={class:"current-weather__temp"},R={class:"current-weather__temp-img-wrapper"},X=["src"],Y={class:"current-weather__temp-info"};function tt(t,e,n,r,i,o){return(0,a.wg)(),(0,a.iD)("div",V,[(0,a._)("div",J,(0,N.zw)(n.name),1),(0,a._)("div",K,(0,N.zw)(n.currentData.date)+" "+(0,N.zw)(n.currentData.month)+", "+(0,N.zw)(n.currentData.time),1),(0,a._)("div",Q,[(0,a._)("div",R,[(0,a._)("img",{src:n.currentData.icon,alt:"",srcset:""},null,8,X)]),(0,a._)("div",Y,(0,N.zw)(n.currentData.temp),1)])])}var et={props:{name:{type:String},currentData:{type:Object,required:!0}}};const nt=(0,w.Z)(et,[["render",tt],["__scopeId","data-v-ae983100"]]);var rt=nt,at={components:{AppContainer:W,AppCurrentWeather:rt},data(){return{city:"",currentCityData:{month:"",date:"",time:"",temp:"",windSpeed:"",windDir:"",cloudness:"",pressure:"",humidity:"",icon:null}}},methods:{async getCurrentWeather(){fetch("https://api.openweathermap.org/data/2.5/weather?q=Tomsk,ru&appid=84bea86b6e84affc971c5ed48003ecea").then((t=>t.json())).then((t=>{this.setCurrentCityData(t)}))},async getGeolocation(){let t=await fetch("https://api.db-ip.com/v2/free/self"),e=await t.json();this.city=e["city"].toUpperCase()},setCurrentCityData(t){let e=new Date(1e3*t.dt+1e3*t.timezone),n=["ЯНВ","ФЕВ","МАР","АПР","МАЙ","ИЮН","ИЮЛ","АВГ","СЕН","ОКТ","НОЯ","ДЕК"];function r(t){let e={23:"C",45:"СВ",68:"СВ",90:"В",113:"В",135:"ЮВ",158:"ЮВ",180:"Ю",203:"Ю",225:"ЮЗ",248:"ЮЗ",270:"З",293:"З",315:"СЗ",338:"СЗ",360:"С"},n=Object.keys(e),r=n.find((e=>t<e));return e[r]}this.currentCityData.month=n[e.getMonth()],this.currentCityData.date=e.getDate(),this.currentCityData.time=`${e.getUTCHours()}:${e.getMinutes()}`,this.currentCityData.temp=`${Math.trunc(t.main.temp-273)}°C`,this.currentCityData.windSpeed=`${t.wind.speed} м/с`,this.currentCityData.windDir=r(t.wind.deg),this.currentCityData.cloudness=`${t.clouds.all}%`,this.currentCityData.pressure=.75*t.main.pressure+" мм.рт.ст.",this.currentCityData.humidity=`${t.main.humidity}%`,this.currentCityData.icon=`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`}},async mounted(){await this.getGeolocation(),await this.getCurrentWeather()}};const it=(0,w.Z)(at,[["render",L]]);var ot=it;const ct=[{path:"/",component:ot}],ut=(0,E.p7)({routes:ct,history:(0,E.PO)("/")});var st=ut;const pt=(0,r.ri)(H);pt.use(st).mount("#app")},6949:function(t,e,n){t.exports=n.p+"img/logo.47e6efb2.png"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(p=0;p<t.length;p++){r=t[p][0],a=t[p][1],i=t[p][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,i<o&&(o=i));if(c){t.splice(p--,1);var s=a();void 0!==s&&(e=s)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],c=r[1],u=r[2],s=0;if(o.some((function(e){return 0!==t[e]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(u)var p=u(n)}for(e&&e(r);s<o.length;s++)i=o[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(p)},r=self["webpackChunkfourth_task"]=self["webpackChunkfourth_task"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8577)}));r=n.O(r)})();
//# sourceMappingURL=app.60efdfa6.js.map