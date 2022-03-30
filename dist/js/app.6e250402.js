(function(){"use strict";var t={1798:function(t,e,a){var r=a(9242),n=a(3396);const i={class:"app"};function s(t,e,a,r,s,c){const o=(0,n.up)("app-header"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(o),(0,n.Wm)(u)])}const c={class:"header"};function o(t,e,a,r,i,s){const o=(0,n.up)("app-logo"),u=(0,n.up)("app-nav-bar"),d=(0,n.up)("app-container");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(d,{class:"header__container"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{onClick:e[0]||(e[0]=t=>this.$router.push("/main"))}),(0,n.Wm)(u)])),_:1})])}var u=a(6949);const d=t=>((0,n.dD)("data-v-d7432382"),t=t(),(0,n.Cn)(),t),l={class:"logo"},p=d((()=>(0,n._)("div",{class:"logo__wrapper"},[(0,n._)("img",{class:"logo__img",src:u,alt:"logo"})],-1))),h=d((()=>(0,n._)("div",{class:"logo__text"},[(0,n._)("h3",null,"AccuVueWeather")],-1))),_=[p,h];function w(t,e,a,r,i,s){return(0,n.wg)(),(0,n.iD)("div",l,_)}var y={},f=a(89);const v=(0,f.Z)(y,[["render",w],["__scopeId","data-v-d7432382"]]);var m=v;const g={class:"container"};function D(t,e,a,r,i,s){return(0,n.wg)(),(0,n.iD)("div",g,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var C={};const b=(0,f.Z)(C,[["render",D],["__scopeId","data-v-7a6d9db0"]]);var W=b;const k={class:"navbar"},z=(0,n.Uk)("Прогноз на 10 дней"),$=(0,n.Uk)("Прогноз на месяц");function O(t,e,a,r,i,s){const c=(0,n.up)("app-button");return(0,n.wg)(),(0,n.iD)("div",k,[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[z])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[$])),_:1})])}const j={class:"btn"};function A(t,e,a,r,i,s){return(0,n.wg)(),(0,n.iD)("button",j,[(0,n.WI)(t.$slots,"default")])}var Z={};const L=(0,f.Z)(Z,[["render",A]]);var x=L,I={components:{AppButton:x}};const M=(0,f.Z)(I,[["render",O],["__scopeId","data-v-5c4377d3"]]);var S=M,U={components:{AppLogo:m,AppContainer:W,AppNavBar:S}};const F=(0,f.Z)(U,[["render",o],["__scopeId","data-v-11d033b0"]]);var P=F,q={components:{AppHeader:P}};const H=(0,f.Z)(q,[["render",s]]);var T=H,B=a(678);const E={class:"city-weather"},K=(0,n._)("h1",null,"Погода Сегодня",-1),N=(0,n._)("h1",null,"Погода на неделю",-1),V={key:1,class:"loading-screen"},Y=(0,n._)("h1",null,"Идет загрузка...",-1),G=[Y];function J(t,e,a,r,i,s){const c=(0,n.up)("app-current-weather"),o=(0,n.up)("app-daily-weather"),u=(0,n.up)("app-container");return(0,n.wg)(),(0,n.iD)("article",E,[i.isDataLoaded?((0,n.wg)(),(0,n.j4)(u,{key:0,class:"city-weather__container"},{default:(0,n.w5)((()=>[K,(0,n.Wm)(c,{name:i.city,currentData:i.currentCityData,class:"city-weather__crnt-weather"},null,8,["name","currentData"]),N,(0,n.Wm)(o,{days:i.dailyWeather,class:"city-weather__daily-weather"},null,8,["days"])])),_:1})):((0,n.wg)(),(0,n.iD)("div",V,G))])}var Q=a(7139);const R={class:"current-weather"},X={class:"current-weather__city-name"},tt={class:"current-weather__date"},et={class:"current-weather__temp"},at={class:"current-weather__temp-img-wrapper"},rt=["src"],nt={class:"current-weather__temp-info"},it={class:"current-weather__other-info"},st={class:"current-weather__feels-like"},ct={class:"current-weather__wind-speed-info"},ot={class:"current-weather__wind-dir-info"},ut={class:"current-weather__pressure"},dt={class:"current-weather__humidity"};function lt(t,e,a,r,i,s){return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("div",X,(0,Q.zw)(a.name),1),(0,n._)("div",tt,(0,Q.zw)(a.currentData.date)+" "+(0,Q.zw)(a.currentData.month)+", "+(0,Q.zw)(a.currentData.time),1),(0,n._)("div",et,[(0,n._)("div",at,[(0,n._)("img",{src:a.currentData.icon,alt:"",srcset:""},null,8,rt)]),(0,n._)("div",nt,(0,Q.zw)(a.currentData.temp),1)]),(0,n._)("div",it,[(0,n._)("div",st,"Ощущается как "+(0,Q.zw)(a.currentData.feels_like)+". "+(0,Q.zw)(a.currentData.description),1),(0,n._)("div",ct,"Скорость ветра: "+(0,Q.zw)(a.currentData.windSpeed),1),(0,n._)("div",ot,"Направление: "+(0,Q.zw)(a.currentData.windDir),1),(0,n._)("div",ut,"Давление: "+(0,Q.zw)(a.currentData.pressure),1),(0,n._)("div",dt,"Влажность: "+(0,Q.zw)(a.currentData.humidity),1)])])}var pt={props:{name:{type:String},currentData:{type:Object,required:!0}}};const ht=(0,f.Z)(pt,[["render",lt],["__scopeId","data-v-3fef0e12"]]);var _t=ht;const wt={class:"daily-weather"};function yt(t,e,a,r,i,s){const c=(0,n.up)("app-day");return(0,n.wg)(),(0,n.iD)("ul",wt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.days,(t=>((0,n.wg)(),(0,n.j4)(c,{key:t.id,day:t},null,8,["day"])))),128))])}const ft={class:"day"},vt={class:"day__date"},mt={class:"day__month"},gt={class:"day__temp"},Dt={class:"day__temp-img-wrapper"},Ct=["src"],bt={class:"day__temp-info"},Wt={class:"day__descr"},kt={class:"day__clouds"};function zt(t,e,a,r,i,s){return(0,n.wg)(),(0,n.iD)("li",ft,[(0,n._)("div",vt,(0,Q.zw)(a.day.day),1),(0,n._)("div",mt,(0,Q.zw)(a.day.weekDay),1),(0,n._)("div",gt,[(0,n._)("div",Dt,[(0,n._)("img",{src:a.day.icon,alt:"",srcset:""},null,8,Ct)]),(0,n._)("div",bt,(0,Q.zw)(a.day.temp),1),(0,n._)("div",Wt,(0,Q.zw)(a.day.descr),1),(0,n._)("div",kt,"Облачность: "+(0,Q.zw)(a.day.clouds),1)])])}var $t={props:{day:{type:Object,required:!0}}};const Ot=(0,f.Z)($t,[["render",zt]]);var jt=Ot,At={components:{AppDay:jt},props:{days:{type:Array,required:!0}}};const Zt=(0,f.Z)(At,[["render",yt],["__scopeId","data-v-0a3e0aa3"]]);var Lt=Zt,xt={components:{AppContainer:W,AppCurrentWeather:_t,AppDailyWeather:Lt},data(){return{isDataLoaded:!0,lon:null,lat:null,city:"",currentCityData:{month:"",date:"",time:"",temp:"",windSpeed:"",windDir:"",cloudness:"",pressure:"",humidity:"",feels_like:"",description:"",icon:null},dailyWeather:[]}},methods:{capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)},async getDailyWeather(){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&units=metric&lang=ru&exclude=current,minutely,hourly,alerts&appid=84bea86b6e84affc971c5ed48003ecea`).then((t=>t.json())).then((t=>{let e=t.daily.slice(1);for(let a of e)this.createWeatherDataObject(a)}))},async getCurrentWeather(){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&lang=ru&appid=84bea86b6e84affc971c5ed48003ecea`).then((t=>t.json())).then((t=>{this.setCurrentCityData(t)}))},createWeatherDataObject(t){let e=new Date(1e3*t.dt),a=["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],r={id:Date.now(),weekDay:a[e.getDay()],day:e.getDate(),temp:`${Math.trunc(t.temp.day)}°C`,clouds:`${t.clouds}%`,icon:`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,descr:this.capitalizeFirstLetter(t.weather[0].description)};this.dailyWeather.push(r)},setCurrentCityData(t){let e=new Date(1e3*t.dt+1e3*t.timezone);this.city=t.name.toUpperCase();let a=["ЯНВ","ФЕВ","МАР","АПР","МАЙ","ИЮН","ИЮЛ","АВГ","СЕН","ОКТ","НОЯ","ДЕК"];this.currentCityData.month=a[e.getMonth()],this.currentCityData.date=e.getDate();let r=e.getMinutes();function n(t){let e={23:"C",45:"СВ",68:"СВ",90:"В",113:"В",135:"ЮВ",158:"ЮВ",180:"Ю",203:"Ю",225:"ЮЗ",248:"ЮЗ",270:"З",293:"З",315:"СЗ",338:"СЗ",360:"С"},a=Object.keys(e),r=a.find((e=>t<e));return e[r]}r=1==r.toString().length?"0"+r:r,this.currentCityData.time=`${e.getUTCHours()}:${r}`,this.currentCityData.temp=`${Math.trunc(t.main.temp)}°C`,this.currentCityData.windSpeed=`${t.wind.speed} м/с`,this.currentCityData.windDir=n(t.wind.deg),this.currentCityData.cloudness=`${t.clouds.all}%`,this.currentCityData.pressure=.75*t.main.pressure+" мм.рт.ст.",this.currentCityData.humidity=`${t.main.humidity}%`,this.currentCityData.feels_like=`${Math.trunc(t.main.feels_like)}°C`,this.currentCityData.description=this.capitalizeFirstLetter(t.weather[0].description),this.currentCityData.icon=`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`},getCurrentLocation(){navigator.geolocation.getCurrentPosition((async t=>{this.lon=t.coords.longitude,this.lat=t.coords.latitude,this.isDataLoaded=!0,await this.getCurrentWeather(),await this.getDailyWeather()}))}},async mounted(){this.isDataLoaded=!1,this.getCurrentLocation()}};const It=(0,f.Z)(xt,[["render",J]]);var Mt=It;const St=(0,n._)("h1",null,"фывфывфывфыв",-1),Ut=[St];function Ft(t,e,a,r,i,s){return(0,n.wg)(),(0,n.iD)("div",null,Ut)}var Pt={};const qt=(0,f.Z)(Pt,[["render",Ft]]);var Ht=qt;const Tt=[{path:"/",component:Mt},{path:"/main",component:Ht}],Bt=(0,B.p7)({routes:Tt,history:(0,B.r5)()});var Et=Bt,Kt=a(4855);const Nt=(0,r.ri)(T);Nt.use(Kt.ZP).use(Et).mount("#app")},6949:function(t,e,a){t.exports=a.p+"img/logo.47e6efb2.png"}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,i){if(!r){var s=1/0;for(d=0;d<t.length;d++){r=t[d][0],n=t[d][1],i=t[d][2];for(var c=!0,o=0;o<r.length;o++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[o])}))?r.splice(o--,1):(c=!1,i<s&&(s=i));if(c){t.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,s=r[0],c=r[1],o=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(o)var d=o(a)}for(e&&e(r);u<s.length;u++)i=s[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},r=self["webpackChunkfourth_task"]=self["webpackChunkfourth_task"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(1798)}));r=a.O(r)})();
//# sourceMappingURL=app.6e250402.js.map