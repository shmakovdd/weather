(function(){"use strict";var t={5602:function(t,e,a){var n=a(9242),r=a(3396);const s={class:"app"};function i(t,e,a,n,i,c){const u=(0,r.up)("app-header"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(u),(0,r.Wm)(o)])}const c={class:"header"};function u(t,e,a,n,s,i){const u=(0,r.up)("app-logo"),o=(0,r.up)("app-nav-bar"),d=(0,r.up)("app-container");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.Wm)(d,{class:"header__container"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{onClick:e[0]||(e[0]=t=>this.$router.push("/main"))}),(0,r.Wm)(o)])),_:1})])}var o=a(6949);const d=t=>((0,r.dD)("data-v-3975ab4f"),t=t(),(0,r.Cn)(),t),l={class:"logo"},p=d((()=>(0,r._)("div",{class:"logo__wrapper"},[(0,r._)("img",{class:"logo__img",src:o,alt:"logo"})],-1))),_=d((()=>(0,r._)("div",{class:"logo__text"},[(0,r._)("h3",null,"AccuVueWeather")],-1))),h=[p,_];function y(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",l,h)}var w={},v=a(89);const f=(0,v.Z)(w,[["render",y],["__scopeId","data-v-3975ab4f"]]);var m=f;const g={class:"container"};function D(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",g,[(0,r.WI)(t.$slots,"default",{},void 0,!0)])}var C={};const b=(0,v.Z)(C,[["render",D],["__scopeId","data-v-7a6d9db0"]]);var W=b;const z={class:"navbar"},k=(0,r.Uk)("Список городов"),$=(0,r.Uk)("Прогноз на 10 дней"),O=(0,r.Uk)("Прогноз на месяц");function j(t,e,a,n,s,i){const c=(0,r.up)("app-button");return(0,r.wg)(),(0,r.iD)("div",z,[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[k])),_:1}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[$])),_:1}),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[O])),_:1})])}const A={class:"btn"};function Z(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("button",A,[(0,r.WI)(t.$slots,"default")])}var L={};const x=(0,v.Z)(L,[["render",Z]]);var I=x,S={components:{AppButton:I}};const M=(0,v.Z)(S,[["render",j],["__scopeId","data-v-091a3d30"]]);var U=M,F={components:{AppLogo:m,AppContainer:W,AppNavBar:U}};const P=(0,v.Z)(F,[["render",u],["__scopeId","data-v-ec5994f8"]]);var q=P,H={components:{AppHeader:q}};const T=(0,v.Z)(H,[["render",i]]);var B=T,E=a(678);const K={class:"city-weather"},N={key:1,class:"loading-screen"},V=(0,r._)("h1",null,"Идет загрузка...",-1),Y=[V];function G(t,e,a,n,s,i){const c=(0,r.up)("app-current-weather"),u=(0,r.up)("app-daily-weather"),o=(0,r.up)("app-container");return(0,r.wg)(),(0,r.iD)("article",K,[s.isDataLoaded?((0,r.wg)(),(0,r.j4)(o,{key:0,class:"city-weather__container"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{name:s.city,currentData:s.currentCityData,class:"city-weather__crnt-weather"},null,8,["name","currentData"]),(0,r.Wm)(u,{days:s.dailyWeather,class:"city-weather__daily-weather"},null,8,["days"])])),_:1})):((0,r.wg)(),(0,r.iD)("div",N,Y))])}var J=a(7139);const Q=t=>((0,r.dD)("data-v-ef966e1a"),t=t(),(0,r.Cn)(),t),R={class:"current-weather"},X=Q((()=>(0,r._)("h1",{class:"current-weather__title"},"Погода Сегодня",-1))),tt={class:"current-weather__wrapper"},et={class:"current-weather__city-name"},at={class:"current-weather__date"},nt={class:"current-weather__temp"},rt={class:"current-weather__temp-img-wrapper"},st=["src"],it={class:"current-weather__temp-info"},ct={class:"current-weather__other-info"},ut={class:"current-weather__feels-like"},ot={class:"current-weather__wind-speed-info"},dt={class:"current-weather__wind-dir-info"},lt={class:"current-weather__pressure"},pt={class:"current-weather__humidity"};function _t(t,e,a,n,s,i){const c=(0,r.up)("app-sun-day");return(0,r.wg)(),(0,r.iD)("div",R,[X,(0,r._)("div",tt,[(0,r._)("div",et,(0,J.zw)(a.name),1),(0,r._)("div",at,(0,J.zw)(a.currentData.date)+" "+(0,J.zw)(a.currentData.month)+", "+(0,J.zw)(a.currentData.time),1),(0,r._)("div",nt,[(0,r._)("div",rt,[(0,r._)("img",{class:"current-weather__img",src:a.currentData.icon,alt:"",srcset:""},null,8,st)]),(0,r._)("div",it,(0,J.zw)(a.currentData.temp),1)]),(0,r._)("div",ct,[(0,r._)("div",ut,"Ощущается как "+(0,J.zw)(a.currentData.feels_like)+". "+(0,J.zw)(a.currentData.description),1),(0,r._)("div",ot,"Скорость ветра: "+(0,J.zw)(a.currentData.windSpeed),1),(0,r._)("div",dt,"Направление: "+(0,J.zw)(a.currentData.windDir),1),(0,r._)("div",lt,"Давление: "+(0,J.zw)(a.currentData.pressure),1),(0,r._)("div",pt,"Влажность: "+(0,J.zw)(a.currentData.humidity),1)]),(0,r.Wm)(c,{sun_day:a.currentData.sun_day},null,8,["sun_day"])])])}const ht=t=>((0,r.dD)("data-v-2bd25189"),t=t(),(0,r.Cn)(),t),yt={class:"sun-day"},wt=ht((()=>(0,r._)("div",{class:"sun-day__background"},null,-1))),vt={class:"sun-day__sunrise"},ft=ht((()=>(0,r._)("div",{class:"sun-day__title"},"Восход",-1))),mt={class:"sun-day__value"},gt=ht((()=>(0,r._)("div",{class:"sun-day__sun"},null,-1))),Dt={class:"sun-day__sunset"},Ct=ht((()=>(0,r._)("div",{class:"sun-day__title"},"Закат",-1))),bt={class:"sun-day__value"};function Wt(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",yt,[wt,(0,r._)("div",vt,[ft,(0,r._)("div",mt,(0,J.zw)(a.sun_day.sunrise),1)]),gt,(0,r._)("div",Dt,[Ct,(0,r._)("div",bt,(0,J.zw)(a.sun_day.sunset),1)])])}var zt={props:{sun_day:{type:Object}}};const kt=(0,v.Z)(zt,[["render",Wt],["__scopeId","data-v-2bd25189"]]);var $t=kt,Ot={components:{AppSunDay:$t},props:{name:{type:String},currentData:{type:Object,required:!0}}};const jt=(0,v.Z)(Ot,[["render",_t],["__scopeId","data-v-ef966e1a"]]);var At=jt;const Zt=t=>((0,r.dD)("data-v-0b1044d5"),t=t(),(0,r.Cn)(),t),Lt={class:"daily-weather"},xt=Zt((()=>(0,r._)("h1",{class:"daily-weather__title"}," Погода на неделю ",-1))),It={class:"daily-weather__list"};function St(t,e,a,n,s,i){const c=(0,r.up)("app-day");return(0,r.wg)(),(0,r.iD)("div",Lt,[xt,(0,r._)("ul",It,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.days,(t=>((0,r.wg)(),(0,r.j4)(c,{key:t.id,day:t},null,8,["day"])))),128))])])}const Mt={class:"day"},Ut={class:"day__date"},Ft={class:"day__num"},Pt={class:"day__month"},qt={class:"day__temp-img-wrapper"},Ht=["src"],Tt={class:"day__temp-info"},Bt={class:"day__descr"},Et={class:"day__clouds"};function Kt(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("li",Mt,[(0,r._)("div",Ut,[(0,r._)("div",Ft,(0,J.zw)(a.day.day),1),(0,r._)("div",Pt,(0,J.zw)(a.day.weekDay),1)]),(0,r._)("div",qt,[(0,r._)("img",{class:"day__img",src:a.day.icon,alt:"",srcset:""},null,8,Ht)]),(0,r._)("div",Tt,(0,J.zw)(a.day.temp),1),(0,r._)("div",Bt,(0,J.zw)(a.day.descr),1),(0,r._)("div",Et,"Облачность: "+(0,J.zw)(a.day.clouds),1)])}var Nt={props:{day:{type:Object,required:!0}}};const Vt=(0,v.Z)(Nt,[["render",Kt]]);var Yt=Vt,Gt={components:{AppDay:Yt},props:{days:{type:Array,required:!0}}};const Jt=(0,v.Z)(Gt,[["render",St],["__scopeId","data-v-0b1044d5"]]);var Qt=Jt,Rt={components:{AppContainer:W,AppCurrentWeather:At,AppDailyWeather:Qt},data(){return{isDataLoaded:!0,lon:null,lat:null,city:"",currentCityData:{month:"",date:"",time:"",temp:"",windSpeed:"",windDir:"",cloudness:"",pressure:"",humidity:"",feels_like:"",description:"",icon:null,sun_day:{sunrise:"",sunset:""}},dailyWeather:[]}},methods:{capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)},async getDailyWeather(){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&units=metric&lang=ru&exclude=current,minutely,hourly,alerts&appid=84bea86b6e84affc971c5ed48003ecea`).then((t=>t.json())).then((t=>{let e=t.daily.slice(1);for(let a of e)this.createWeatherDataObject(a)}))},async getCurrentWeather(){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&lang=ru&appid=84bea86b6e84affc971c5ed48003ecea`).then((t=>t.json())).then((t=>{console.log(t),this.setCurrentCityData(t)}))},createWeatherDataObject(t){let e=new Date(1e3*t.dt),a=["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],n={id:Date.now(),weekDay:a[e.getDay()],day:e.getDate(),temp:`${Math.trunc(t.temp.day)}°C`,clouds:`${t.clouds}%`,icon:`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,descr:this.capitalizeFirstLetter(t.weather[0].description)};this.dailyWeather.push(n)},setCurrentCityData(t){let e=new Date(1e3*t.dt+1e3*t.timezone);this.city=t.name.toUpperCase();let a=["ЯНВ","ФЕВ","МАР","АПР","МАЙ","ИЮН","ИЮЛ","АВГ","СЕН","ОКТ","НОЯ","ДЕК"];this.currentCityData.month=a[e.getMonth()],this.currentCityData.date=e.getDate();let n=i(e);this.currentCityData.time=`${n.hours}:${n.minutes}`;let r=i(new Date(1e3*t.sys.sunrise+1e3*t.timezone)),s=i(new Date(1e3*t.sys.sunset+1e3*t.timezone));function i(t){let e=t.getMinutes(),a=t.getUTCHours();return e=1==e.toString().length?"0"+e:e,a=1==a.toString().length?"0"+a:a,{minutes:e,hours:a}}function c(t){let e={23:"C",45:"СВ",68:"СВ",90:"В",113:"В",135:"ЮВ",158:"ЮВ",180:"Ю",203:"Ю",225:"ЮЗ",248:"ЮЗ",270:"З",293:"З",315:"СЗ",338:"СЗ",360:"С"},a=Object.keys(e),n=a.find((e=>t<e));return e[n]}this.currentCityData.sun_day.sunrise=`${r.hours}:${r.minutes}`,this.currentCityData.sun_day.sunset=`${s.hours}:${s.minutes}`,this.currentCityData.temp=`${Math.trunc(t.main.temp)}°C`,this.currentCityData.windSpeed=`${t.wind.speed} м/с`,this.currentCityData.windDir=c(t.wind.deg),this.currentCityData.cloudness=`${t.clouds.all}%`,this.currentCityData.pressure=.75*t.main.pressure+" мм.рт.ст.",this.currentCityData.humidity=`${t.main.humidity}%`,this.currentCityData.feels_like=`${Math.trunc(t.main.feels_like)}°C`,this.currentCityData.description=this.capitalizeFirstLetter(t.weather[0].description),this.currentCityData.icon=`https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`},getCurrentLocation(){navigator.geolocation.getCurrentPosition((t=>{this.lon=t.coords.longitude,this.lat=t.coords.latitude,this.isDataLoaded=!0,this.getCurrentWeather(),this.getDailyWeather()}))}},async mounted(){this.isDataLoaded=!1,this.getCurrentLocation()}};const Xt=(0,v.Z)(Rt,[["render",G]]);var te=Xt;const ee=(0,r._)("h1",null,"фывфывфывфыв",-1),ae=[ee];function ne(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",null,ae)}var re={};const se=(0,v.Z)(re,[["render",ne]]);var ie=se;const ce=[{path:"/",component:te},{path:"/main",component:ie}],ue=(0,E.p7)({routes:ce,history:(0,E.r5)()});var oe=ue,de=a(4855);const le=(0,n.ri)(B);le.use(de.ZP).use(oe).mount("#app")},6949:function(t,e,a){t.exports=a.p+"img/logo.47e6efb2.png"}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,s){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],s=t[d][2];for(var c=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(c=!1,s<i&&(i=s));if(c){t.splice(d--,1);var o=r();void 0!==o&&(e=o)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[n,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p=""}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,i=n[0],c=n[1],u=n[2],o=0;if(i.some((function(e){return 0!==t[e]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(u)var d=u(a)}for(e&&e(n);o<i.length;o++)s=i[o],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},n=self["webpackChunkfourth_task"]=self["webpackChunkfourth_task"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5602)}));n=a.O(n)})();
//# sourceMappingURL=app.8bbf9f0b.js.map