import {getMinutesAndHours, capitalizeFirstLetter, convertWindDeg} from '@/store/utils.js'

let months = ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК',] 
let weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ',]

export const currentCityModule = {
    state: () => ({
        isDataLoaded: false,
        lon: null,
        lat: null,
        errorButton: false,
        city: '',
        currentCityData: {

        },
        dailyWeather: [
  
        ]
    }),

    mutations: {
        
        setLon(state, payload) {
          state.lon = (+payload).toFixed(6)
        },

        setLat(state, payload) {
          state.lat = (+payload).toFixed(6)
        },

        setCity (state, payload) {
          state.city = payload
       },
        setCurrentCityData (state, payload) {
          state.currentCityData = payload
        },
        setErrorButton(state, payload) {
          state.errorButton = payload
        },

        setDataLoaded(state, payload) {
          state.isDataLoaded = payload
        },

        setDailyWeather(state, payload) {
          state.dailyWeather = payload
        }
    },
    actions: {

      getCurrentLocation(ctx) {
          let options = {
            enableHighAccuracy: true,
            timeout: 5000,
          };
    
          let error = data => {
            if (data.code == 1) {
              alert('Пожалуйста, разрешите приложению доступ к вашему местоположению и нажмите "Попробовать ещё раз"')
              ctx.commit('setErrorButton', true)
            }
          }

          let success = data => {
            ctx.commit('setErrorButton', false)
            // if (ctx.state.lon == null && ctx.state.lan == null) {

            // }

            if (ctx.rootState.clientLong == null && ctx.rootState.clientLat == null) { // при самом первом определении местоположения пользователя определяем его Long и Lat
              ctx.rootState.clientLong = data.coords.longitude
              ctx.rootState.clientLat = data.coords.latitude
              ctx.commit('setLon', data.coords.longitude)
              ctx.commit('setLat', data.coords.latitude)
            }
            

            ctx.dispatch('getCurrentWeather')
            ctx.dispatch('getDailyWeather')
            ctx.commit('setDataLoaded', true)
          }
          navigator.geolocation.getCurrentPosition( success, error, options) 
    
      },

      setCurrentCityData(ctx, data) {
          let date = new Date(data.dt * 1000 + data.timezone * 1000);
          ctx.commit('setCity', data.name.toUpperCase())


          let currentTime = getMinutesAndHours(date)
          let sunriseTime = getMinutesAndHours(new Date(data.sys.sunrise * 1000 + data.timezone * 1000))
          let sunsetTime = getMinutesAndHours(new Date(data.sys.sunset * 1000 + data.timezone * 1000))

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
            icon:  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            sun_day: {
              sunrise: `${sunriseTime.hours}:${sunriseTime.minutes}`,
              sunset: `${sunsetTime.hours}:${sunsetTime.minutes}`,
            }
          }
          

          ctx.commit('setCurrentCityData', obj)
    
        },

      async getDailyWeather(ctx) {
        ctx.commit('setDailyWeather', [])
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${ctx.state.lat}&lon=${ctx.state.lon}&units=metric&lang=ru&exclude=current,minutely,hourly,alerts&appid=84bea86b6e84affc971c5ed48003ecea`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          let week = data.daily.slice(1)
          let res = []
          for (let day of week) {
            res.push(createWeatherDataObject(day))
          }
          ctx.commit('setDailyWeather', [...ctx.state.dailyWeather, ...res])
        })


        function createWeatherDataObject( data) {

          let date = new Date(data.dt * 1000)

          let obj = {
            id: Date.now(),
            weekDay: weekDays[date.getDay()],
            day: date.getDate(),
            temp: `${Math.trunc(data.temp.day)}°C`,
            clouds: `${data.clouds}%`,
            icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            descr:  capitalizeFirstLetter(data.weather[0].description),
          }
          return obj
        }
      },

      async getCurrentWeather({state, dispatch, rootState}) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${state.lat}&lon=${state.lon}&units=metric&lang=ru&appid=84bea86b6e84affc971c5ed48003ecea`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          rootState.clientCity = rootState.clientCity == null ? data.name.toUpperCase() : rootState.clientCity
          dispatch('setCurrentCityData', data)
        })
      },

      
    

    },
    namespaced: true
}