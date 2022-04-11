<template>
    <li class="favorite-item">
        <div @click='findCityByID' :data-id="city.id" :data-api_id="city.api_city_id" class="favorite-hidden__city-name">{{city.name}}</div>
        <span @click="deleteCity" :data-id="city.id" class="favorite-hidden__delete">Удалить</span>
    </li>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'
export default {
    props: {
        city: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapMutations({
            setCityID: 'current/setCityID'
        }),
        ...mapActions({
            deleteCity: 'favorite/deleteCity',
            getCurrentWeatherById: 'current/getCurrentWeatherById'
        }),
          findCityByID(e) {
            this.getCurrentWeatherById(e.target.dataset.api_id)
            this.$router.push('/')
            this.setCityID(e.target.dataset.id)
        }
    }
}
</script>
<style scoped>
    .favorite-hidden__city-name{
        margin-right: auto;
        cursor: pointer;
    }

    .favorite-hidden__delete {
        margin-left: 20px;
        cursor: pointer;
    }
</style>