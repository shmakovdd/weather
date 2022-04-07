<template>
    <div class="favorite-hidden">
        <ul v-if="favoriteList.length >= 1" class="favorite-hidden__list">
            <li  v-for="city, index in favoriteList"
                :key="index" class="favorite-hidden__item">
                <div @click="setLongAndLat" :data-lon="city.lon" :data-lat="city.lat" class="favorite-hidden__city-name">{{city.name}}</div>
                <span @click="deleteCity" :data-lon="city.lon" :data-lat="city.lat" class="favorite-hidden__delete">Удалить</span>
                </li>
        </ul>
        <div v-else  class="favorite-hidden__plug">Нет городов в избранном.</div>    
    </div>
</template>
<script>
import {mapMutations, mapActions, mapState} from 'vuex'
export default {
    computed: {
    ...mapState({
        favoriteList: state => state.favorite.favoriteList
    })
    },
    methods: {
        ...mapMutations({
            setLon: 'current/setLon',
            setLat: 'current/setLat',
        }),
        ...mapActions({
            deleteCity: 'favorite/deleteCity',
            getCurrentLocation: 'current/getCurrentLocation',
            checkIfInFav: 'favorite/checkIfInFav'
        }),
        setLongAndLat(e) { 
            this.setLon(e.target.dataset.lon)
            this.setLat(e.target.dataset.lat)
            this.$router.push('/')
            let crntRoute = this.$router.currentRoute.value.path
            if(crntRoute === '/') { // если мы находимся на стартовой странице, то получаем данные города и проверям избранное
                this.getCurrentLocation()
                this.checkIfInFav()
            }
        },
    }

}
</script>
<style scoped>
    .favorite-hidden {
        opacity: 1;
        background-color: white;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        min-width: 200px;
        z-index: 5;
        top: 140%;
    }
    .favorite-hidden__list {
        text-align: left;
        font-weight: bold;
        color: #4a4444;
    }

    .favorite-hidden__item {
        display: flex;
        margin-bottom: 10px;
    }

    .favorite-hidden__city-name{
        margin-right: auto;
        cursor: pointer;
    }

    .favorite-hidden__delete {
        margin-left: 20px;
        cursor: pointer;
    }
</style>