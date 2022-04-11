<template>
    <li class="city-item" @click.stop="findCityByID" :data-id="city.api_city_id">
        <span class="city-name" :data-id="city.api_city_id" >{{toUpperCaseCityName}}</span>
    </li>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    props: {
        city: {
            type: Object,
        }
    }, 
    computed: {
        toUpperCaseCityName() {
            return this.city.name.toUpperCase()
        }
    },
    methods: {
        
        ...mapActions({
            getWeather: 'current/getCurrentWeatherById',
        }),
        ...mapMutations({
            setCityID: 'current/setCityID'
        }),
        findCityByID(e) {
            this.getWeather(e.target.dataset.id)
            this.$router.push('/')
            this.setCityID(this.city.id)
        }
    }
}
</script>
<style scoped>
    .city-item {
        cursor: pointer;
        margin-bottom: 20px;
        width: 33%;
        text-align: center;
    }

    span {
        display: block

    }

    .city-item:hover {
        background-color: #e9f5f3;
    }

    .city-item:hover:after {
        display: inline-block;
    }
</style>