(function(){"use strict";var t={4054:function(t,e,a){var r=a(9242),n=a(3396);const i={class:"app"};function c(t,e,a,r,c,s){const o=(0,n.up)("app-header"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(o),(0,n.Wm)(u)])}const s={class:"header"};function o(t,e,a,r,i,c){const o=(0,n.up)("app-logo"),u=(0,n.up)("app-nav-bar"),d=(0,n.up)("app-container");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(d,{class:"header__container"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{onClick:e[0]||(e[0]=t=>this.$router.push("/main"))}),(0,n.Wm)(u)])),_:1})])}var u=a(6949);const d=t=>((0,n.dD)("data-v-d7432382"),t=t(),(0,n.Cn)(),t),l={class:"logo"},p=d((()=>(0,n._)("div",{class:"logo__wrapper"},[(0,n._)("img",{class:"logo__img",src:u,alt:"logo"})],-1))),h=d((()=>(0,n._)("div",{class:"logo__text"},[(0,n._)("h3",null,"AccuVueWeather")],-1))),w=[p,h];function _(t,e,a,r,i,c){return(0,n.wg)(),(0,n.iD)("div",l,w)}var y={},f=a(89);const v=(0,f.Z)(y,[["render",_],["__scopeId","data-v-d7432382"]]);var m=v;const g={class:"container"};function D(t,e,a,r,i,c){return(0,n.wg)(),(0,n.iD)("div",g,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var C={};const b=(0,f.Z)(C,[["render",D],["__scopeId","data-v-7a6d9db0"]]);var W=b;const k={class:"navbar"},z=(0,n.Uk)("Прогноз на 10 дней"),$=(0,n.Uk)("Прогноз на месяц");function j(t,e,a,r,i,c){const s=(0,n.up)("app-button");return(0,n.wg)(),(0,n.iD)("div",k,[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[z])),_:1}),(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[$])),_:1})])}const O={class:"btn"};function A(t,e,a,r,i,c){return(0,n.wg)(),(0,n.iD)("button",O,[(0,n.WI)(t.$slots,"default")])}var Z={};const x=(0,f.Z)(Z,[["render",A]]);var I=x,L={components:{AppButton:I}};const M=(0,f.Z)(L,[["render",j],["__scopeId","data-v-5c4377d3"]]);var S=M,U={components:{AppLogo:m,AppContainer:W,AppNavBar:S}};const q=(0,f.Z)(U,[["render",o],["__scopeId","data-v-11d033b0"]]);var F=q,H={components:{AppHeader:F}};const P=(0,f.Z)(H,[["render",c]]);var T=P,B=a(678);const G={class:"city-weather"},E=(0,n._)("h1",null,"Погода Сегодня",-1),K=(0,n._)("h1",null,"Погода на неделю",-1),N={key:1,class:"loading-screen"},V=(0,n._)("h1",null,"Идет загрузка...",-1),Y=[V];function J(t,e,a,r,i,c){const s=(0,n.up)("app-current-weather"),o=(0,n.up)("app-daily-weather"),u=(0,n.up)("app-container");return(0,n.wg)(),(0,n.iD)("article",G,[i.isDataLoaded?((0,n.wg)(),(0,n.j4)(u,{key:0,class:"city-weather__container"},{default:(0,n.w5)((()=>[E,(0,n.Wm)(s,{name:i.city,currentData:i.currentCityData,class:"city-weather__crnt-weather"},null,8,["name","currentData"]),K,(0,n.Wm)(o,{days:i.dailyWeather,class:"city-weather__daily-weather"},null,8,["days"])])),_:1})):((0,n.wg)(),(0,n.iD)("div",N,Y))])}var Q=a(7139);const R={class:"current-weather"},X={class:"current-weather__city-name"},tt={class:"current-weather__date"},et={class:"current-weather__temp"},at={class:"current-weather__temp-img-wrapper"},rt=["src"],nt={class:"current-weather__temp-info"},it={class:"current-weather__other-info"},ct={class:"current-weather__feels-like"},st={class:"current-weather__wind-speed-info"},ot={class:"current-weather__wind-dir-info"},ut={class:"current-weather__pressure"},dt={class:"current-weather__humidity"};function lt(t,e,a,r,i,c){return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("div",X,(0,Q.zw)(a.name),1),(0,n._)("div",tt,(0,Q.zw)(a.currentData.date)+" "+(0,Q.zw)(a.currentData.month)+", "+(0,Q.zw)(a.currentData.time),1),(0,n._)("div",et,[(0,n._)("div",at,[(0,n._)("img",{src:a.currentData.icon,alt:"",srcset:""},null,8,rt)]),(0,n._)("div",nt,(0,Q.zw)(a.currentData.temp),1)]),(0,n._)("div",it,[(0,n._)("div",ct,"Ощущается как "+(0,Q.zw)(a.currentData.feels_like)+". "+(0,Q.zw)(a.currentData.description),1),(0,n._)("div",st,"Скорость ветра: "+(0,Q.zw)(a.currentData.windSpeed),1),(0,n._)("div",ot,"Направление: "+(0,Q.zw)(a.currentData.windDir),1),(0,n._)("div",ut,"Давление: "+(0,Q.zw)(a.currentData.pressure),1),(0,n._)("div",dt,"Влажность: "+(0,Q.zw)(a.currentData.humidity),1)])])}var pt={props:{name:{type:String},currentData:{type:Object,required:!0}}};const ht=(0,f.Z)(pt,[["render",lt],["__scopeId","data-v-3fef0e12"]]);var wt=ht;const _t={class:"daily-weather"};function yt(t,e,a,r,i,c){const s=(0,n.up)("app-day");return(0,n.wg)(),(0,n.iD)("ul",_t,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.days,(t=>((0,n.wg)(),(0,n.j4)(s,{key:t.id,day:t},null,8,["day"])))),128))])}const ft={class:"day"},vt={class:"day__date"},mt={class:"day__month"},gt={class:"day__temp"},Dt={class:"day__temp-img-wrapper"},Ct=["src"],bt={class:"day__temp-info"},Wt={class:"day__descr"},kt={class:"day__clouds"};function zt(t,e,a,r,i,c){return(0,n.wg)(),(0,n.iD)("li",ft,[(0,n._)("div",vt,(0,Q.zw)(a.day.day),1),(0,n._)("div",mt,(0,Q.zw)(a.day.weekDay),1),(0,n._)("div",gt,[(0,n._)("div",Dt,[(0,n._)("img",{src:a.day.icon,alt:"",srcset:""},null,8,Ct)]),(0,n._)("div",bt,(0,Q.zw)(a.day.temp),1),(0,n._)("div",Wt,(0,Q.zw)(a.day.descr),1),(0,n._)("div",kt,"Облачность: "+(0,Q.zw)(a.day.clouds),1)])])}var $t={props:{day:{type:Object,required:!0}}};const jt=(0,f.Z)($t,[["render",zt]]);var Ot=jt,At={components:{AppDay:Ot},props:{days:{type:Array,required:!0}}};const Zt=(0,f.Z)(At,[["render",yt],["__scopeId","data-v-0a3e0aa3"]]);var xt=Zt,It={components:{AppContainer:W,AppCurrentWeather:wt,AppDailyWeather:xt},data(){return{isDataLoaded:!0,lon:"",lat:"",city:"",currentCityData:{month:"",date:"",time:"",temp:"",windSpeed:"",windDir:"",cloudness:"",pressure:"",humidity:"",feels_like:"",description:"",icon:null},dailyWeather:[]}},methods:{capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)},async getGeolocation(){let t=await fetch("https://api.db-ip.com/v2/free/self"),e=await t.json();console.log(e);let a=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e["city"]}&limit=2&appid=84bea86b6e84affc971c5ed48003ecea`),r=await a.json(),{lon:n,lat:i}=r[0];this.lon=n,this.lat=i},async getDailyWeather(){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&units=metric&lang=ru&exclude=current,minutely,hourly,alerts&appid=84bea86b6e84affc971c5ed48003ecea`).then((t=>t.json())).then((t=>{let e=t.daily.slice(1);for(let a of e)this.createWeatherDataObject(a)}))},async getCurrentWeather(){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&lang=ru&appid=84bea86b6e84affc971c5ed48003ecea`).then((t=>t.json())).then((t=>{this.setCurrentCityData(t)}))},createWeatherDataObject(t){let e=new Date(1e3*t.dt),a=["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],r={id:Date.now(),weekDay:a[e.getDay()],day:e.getDate(),temp:`${Math.trunc(t.temp.day)}°C`,clouds:`${t.clouds}%`,icon:`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,descr:this.capitalizeFirstLetter(t.weather[0].description)};this.dailyWeather.push(r)},setCurrentCityData(t){let e=new Date(1e3*t.dt+1e3*t.timezone);this.city=t.name.toUpperCase();let a=["ЯНВ","ФЕВ","МАР","АПР","МАЙ","ИЮН","ИЮЛ","АВГ","СЕН","ОКТ","НОЯ","ДЕК"];this.currentCityData.month=a[e.getMonth()],this.currentCityData.date=e.getDate();let r=e.getMinutes();function n(t){let e={23:"C",45:"СВ",68:"СВ",90:"В",113:"В",135:"ЮВ",158:"ЮВ",180:"Ю",203:"Ю",225:"ЮЗ",248:"ЮЗ",270:"З",293:"З",315:"СЗ",338:"СЗ",360:"С"},a=Object.keys(e),r=a.find((e=>t<e));return e[r]}r=1==r.toString().length?"0"+r:r,this.currentCityData.time=`${e.getUTCHours()}:${r}`,this.currentCityData.temp=`${Math.trunc(t.main.temp)}°C`,this.currentCityData.windSpeed=`${t.wind.speed} м/с`,this.currentCityData.windDir=n(t.wind.deg),this.currentCityData.cloudness=`${t.clouds.all}%`,this.currentCityData.pressure=.75*t.main.pressure+" мм.рт.ст.",this.currentCityData.humidity=`${t.main.humidity}%`,this.currentCityData.feels_like=`${Math.trunc(t.main.feels_like)}°C`,this.currentCityData.description=this.capitalizeFirstLetter(t.weather[0].description),this.currentCityData.icon=`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`}},async mounted(){this.isDataLoaded=!1,await this.getGeolocation(),await this.getCurrentWeather(),await this.getDailyWeather(),this.isDataLoaded=!0}};const Lt=(0,f.Z)(It,[["render",J]]);var Mt=Lt;const St=(0,n._)("h1",null,"фывфывфывфыв",-1),Ut=[St];function qt(t,e,a,r,i,c){return(0,n.wg)(),(0,n.iD)("div",null,Ut)}var Ft={};const Ht=(0,f.Z)(Ft,[["render",qt]]);var Pt=Ht;const Tt=[{path:"/",component:Mt},{path:"/main",component:Pt}],Bt=(0,B.p7)({routes:Tt,history:(0,B.r5)()});var Gt=Bt,Et=a(4855);const Kt=(0,r.ri)(T);Kt.use(Et.ZP).use(Gt).mount("#app")},6949:function(t,e,a){t.exports=a.p+"img/logo.47e6efb2.png"}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,i){if(!r){var c=1/0;for(d=0;d<t.length;d++){r=t[d][0],n=t[d][1],i=t[d][2];for(var s=!0,o=0;o<r.length;o++)(!1&i||c>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[o])}))?r.splice(o--,1):(s=!1,i<c&&(c=i));if(s){t.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,c=r[0],s=r[1],o=r[2],u=0;if(c.some((function(e){return 0!==t[e]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(o)var d=o(a)}for(e&&e(r);u<c.length;u++)i=c[u],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},r=self["webpackChunkfourth_task"]=self["webpackChunkfourth_task"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(4054)}));r=a.O(r)})();
//# sourceMappingURL=app.c367eb6e.js.map