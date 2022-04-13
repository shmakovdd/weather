import {
  getMinutesAndHours,
  capitalizeFirstLetter,
  convertWindDeg,
  createWeatherDataObject
} from "@/store/utils.js";
import axios from "axios";

let months = [
  "ЯНВ",
  "ФЕВ",
  "МАР",
  "АПР",
  "МАЙ",
  "ИЮН",
  "ИЮЛ",
  "АВГ",
  "СЕН",
  "ОКТ",
  "НОЯ",
  "ДЕК",
];


export const currentCityModule = {
  state: () => ({
    isDataLoaded: false,
    lon: null,
    lat: null,
    errorButton: false,
    city: "",
    cityID: null,
    currentCityData: {},
    dailyWeather: [],
  }),

  mutations: {
    setLon(state, payload) {
      state.lon = (+payload).toFixed(6);
    },

    setLat(state, payload) {
      state.lat = (+payload).toFixed(6);
    },

    setCity(state, payload) {
      state.city = payload;
    },
    setCityID(state, payload) {
      state.cityID = payload;
    },
    setCurrentCityData(state, payload) {
      state.currentCityData = payload;
    },
    setErrorButton(state, payload) {
      state.errorButton = payload;
    },

    setDataLoaded(state, payload) {
      state.isDataLoaded = payload;
    },

    setDailyWeather(state, payload) {
      state.dailyWeather = payload;
    },
  },
  actions: {
    getCurrentLocation(ctx) { // при самом первом определении местоположения пользователя определяем его Long и Lat и показываем погоду на день и неделю
      let options = {
        enableHighAccuracy: true,
        timeout: 5000,
      };

      let error = (data) => {
        if (data.code === 1) {
          alert(
            'Пожалуйста, разрешите приложению доступ к вашему местоположению и нажмите "Попробовать ещё раз"'
          );
          ctx.commit("setErrorButton", true);
        }
      };

      let success = (data) => {
        ctx.commit("setErrorButton", false);
        if (
          ctx.rootState.clientLong == null &&
          ctx.rootState.clientLat == null
        ) {
          ctx.rootState.clientLong = data.coords.longitude;
          ctx.rootState.clientLat = data.coords.latitude;
          ctx.commit("setLon", data.coords.longitude);
          ctx.commit("setLat", data.coords.latitude);
          ctx.dispatch("getCurrentWeather");
          ctx.dispatch("getDailyWeather", {});
        }

        ctx.commit("setDataLoaded", true);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    },

    setCurrentCityData(ctx, data) {
      let date = new Date(data.dt * 1000 + data.timezone * 1000);
      ctx.commit("setCity", data.name.toUpperCase());
      let currentTime = getMinutesAndHours(date);
      let sunriseTime = getMinutesAndHours(
        new Date(data.sys.sunrise * 1000 + data.timezone * 1000)
      );
      let sunsetTime = getMinutesAndHours(
        new Date(data.sys.sunset * 1000 + data.timezone * 1000)
      );

      let obj = {
        month: months[date.getMonth()],
        date: date.getDate(),
        time: `${currentTime.hours}:${currentTime.minutes}`,
        temp: `${Math.trunc(data.main.temp)}°C`,
        windSpeed: `${data.wind.speed} м/с`,
        windDir: convertWindDeg(data.wind.deg),
        cloudness: `${data.clouds.all}%`,
        pressure: `${data.main.pressure * 0.75} мм.рт.ст.`,
        humidity: `${data.main.humidity}%`,
        feels_like: `${Math.trunc(data.main.feels_like)}°C`,
        description: capitalizeFirstLetter(data.weather[0].description),
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        sun_day: {
          sunrise: `${sunriseTime.hours}:${sunriseTime.minutes}`,
          sunset: `${sunsetTime.hours}:${sunsetTime.minutes}`,
        },
      };

      ctx.commit("setCurrentCityData", obj);
    },

    getDailyWeather({ state, commit }, {lon, lat}) {
      commit("setDailyWeather", []);
      axios({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/onecall",
        params: {
          lat: lat || state.lat,
          lon: lon || state.lon,
          units: "metric",
          lang: "ru",
          exclude: "current,minutely,hourly,alerts",
          appid: "84bea86b6e84affc971c5ed48003ecea",
        },
      }).then((response) => {
        let data = response.data;
        let week = data.daily.slice(1);
        let res = [];
        for (let day of week) {
          res.push(createWeatherDataObject(day));
        }
        commit("setDailyWeather", [...state.dailyWeather, ...res]);
      });

    },

    getCurrentWeather({ state, dispatch, rootState }) {
      axios({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
          lat: state.lat,
          lon: state.lon,
          units: "metric",
          lang: "ru",
          appid: "84bea86b6e84affc971c5ed48003ecea",
        },
      }).then(response => {
        let data = response.data;
        rootState.clientCity =
          rootState.clientCity == null
            ? data.name.toUpperCase()
            : rootState.clientCity;
        dispatch("setCurrentCityData", data);
      });
    },

    getCurrentWeatherById({dispatch}, id) {
      axios({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        params: {
          id,
          units: "metric",
          lang: "ru",
          appid: "84bea86b6e84affc971c5ed48003ecea",
        },
      }).then(response => {
        let data = response.data;
        dispatch('getDailyWeather', {lon: data.coord.lon, lat: data.coord.lat})
        dispatch("setCurrentCityData", data);
        
      })
    }
  },
  namespaced: true,
};
