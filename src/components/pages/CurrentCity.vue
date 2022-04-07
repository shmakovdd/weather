<template>
    <article class="city-weather">
      <app-container v-if="isDataLoaded" class="city-weather__container">
        <app-current-weather 
        :name="city"
        :currentData="currentCityData" 
        class="city-weather__crnt-weather"></app-current-weather>
        <app-daily-weather
        :days="dailyWeather"
        class="city-weather__daily-weather"
        >

        </app-daily-weather>
      </app-container>
    <div v-else class="loading-screen">
      <h1>Идет загрузка...</h1>
      <app-button @click="getCurrentLocation" v-if="errorBtn" style="margin-top: 50px">Попробовать ещё раз</app-button>
    </div> 
    </article>
</template>
<script>
/* eslint-disable */
import AppCurrentWeather from '@/components/AppCurrentWeather'
import AppContainer from '@/components/AppContainer'
import AppDailyWeather from '@/components/AppDailyWeather'
import AppButton from '@/components/UI/AppButton'
import {mapState, mapActions, mapMutations} from 'vuex'
export default {
  components: {
    AppContainer,
    AppCurrentWeather,
    AppDailyWeather,
    AppButton,
  },

  computed: {
    ...mapState({
    isDataLoaded: state => state.current.isDataLoaded,
    lon: state => state.current.lon,
    lat: state => state.current.lat,
    errorBtn: state => state.current.errorButton,
    city: state => state.current.city,
    currentCityData: state => state.current.currentCityData,
    dailyWeather: state => state.current.dailyWeather,
    }),

  },

  methods: {
    ...mapMutations({
    setLon: 'current/setLon',
    setLat: 'current/setLat',
    setCity: 'current/setCity',
    setCurrentCityData: 'current/setCurrentCityData',
    setErrorButton: 'current/setErrorButton',
    setDataLoaded: 'current/setDataLoaded'
  }),

    ...mapActions({
    getCurrentWeather: 'current/getCurrentWeather',
    getCurrentLocation: 'current/getCurrentLocation'
    }),
   
  },
  
   async mounted(){
    this.getCurrentLocation()
  },
}
</script>
<style>
    .city-weather__container {
      display: flex;
      justify-content: space-around;
      max-width: 1500px;
    }


    .loading-screen {
      text-align: center;
    }

    .map {
      width: 500px;
      height: 500px;
    }
</style>