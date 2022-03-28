<template>
    <article class="city-weather">
      <app-container class="city-weather__container">
        <app-current-weather 
        :name="city"
        :currentData="currentCityData" 
        class="city-weather__weather"></app-current-weather>
      </app-container>
    </article>
</template>
<script>
import AppCurrentWeather from '@/components/AppCurrentWeather'
import AppContainer from '@/components/AppContainer'
export default {
  components: {
    AppContainer,
    AppCurrentWeather,
  },
  data() {
    return {
      city: '',
      currentCityData: {
        month: '',
        date: '',
        time: '',
        temp: '',
        windSpeed: '',
        windDir: '',
        cloudness: '',
        pressure: '',
        humidity: '',
        icon: null,
      },
      
    }
  },

  methods: {
    async getCurrentWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tomsk,ru&appid=84bea86b6e84affc971c5ed48003ecea`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setCurrentCityData(data)
      })
    },

    async getGeolocation() {
      let resolve = await fetch('https://api.db-ip.com/v2/free/self');
      let data = await resolve.json();
      this.city = data['city'].toUpperCase()
    },


    setCurrentCityData(data) {
      let date = new Date(data.dt * 1000 + data.timezone * 1000) ;
      let months = ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК',] 
      this.currentCityData.month = months[date.getMonth()]
      this.currentCityData.date = date.getDate()
      this.currentCityData.time = `${date.getUTCHours()}:${date.getMinutes()}`
      this.currentCityData.temp = `${Math.trunc(data.main.temp - 273)}°C`
      this.currentCityData.windSpeed = `${data.wind.speed} м/с`
      this.currentCityData.windDir = convertWindDeg(data.wind.deg)
      this.currentCityData.cloudness = `${data.clouds.all}%`
      this.currentCityData.pressure = `${data.main.pressure * 0.75} мм.рт.ст.`
      this.currentCityData.humidity = `${data.main.humidity}%`
      this.currentCityData.icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

      function convertWindDeg(value) {
        let degrees = 
          {    
          23: 'C', 
          45: 'СВ',
          68: 'СВ',
          90: 'В',
          113: 'В',
          135: 'ЮВ',
          158: 'ЮВ',
          180: 'Ю',
          203: 'Ю',
          225: 'ЮЗ',
          248: 'ЮЗ',
          270: 'З',
          293: 'З',
          315: 'СЗ',
          338: 'СЗ',
          360: 'С',
        }
        let keys= Object.keys(degrees)
        let dir = keys.find(d => value < d)
        return degrees[dir]
      }
    }

  },

   async mounted(){
    await this.getGeolocation()
    await this.getCurrentWeather()
  },
}
</script>
<style>
    
</style>