<template>
    <div class="header">
        <app-container class="header__container">
            <app-logo @click="this.$router.push('/')"/>
            <div class="city-check">
                Ваш город 
                <span class="city-check__city-name" @click="isActive = !isActive">{{city}}</span>?
                <div class="city-check__hidden" :class="{active: isActive}">
                    <div v-if="!isCityWrong" class="city-check__choice">
                        <div  @click="isActive = !isActive" class="city-check__yes">Да</div>
                        <div @click="isCityWrong = true" class="city-check__no">Нет</div>
                    </div>
                    <div v-else class="city-check__input-wrapper">
                        <input v-model="typedCity" type="text" class="city-check__input" placeholder="Введите ваш город">
                        <span @click="searchClientCity" style="margin-right: 15px"> OK </span>
                        <span @click="isCityWrong = false, isActive = !isActive"> Отмена </span>
                    </div>
                </div>
                Посмотреть погоду в <span @click="setLongAndLat" class="city-check__city-name" :data-long="long || clientInitialLon" :data-lat="lat || clientInitialLat">{{city}}</span>
            </div>
            <app-nav-bar/>
        </app-container>
    </div>
</template>
<script>
import AppLogo from '@/components/AppLogo'
import AppContainer from '@/components/AppContainer'
import AppNavBar from '@/components/AppNavBar'
import {mapState, mapMutations, mapActions, } from 'vuex'
export default {
    components: {
        AppLogo,
        AppContainer,
        AppNavBar
    },

    data() {
        return {
            isActive: false,
            isCityWrong: false,
            typedCity: '',
            long: '',
            lat: '',
        }
    },
    computed: {
        ...mapState({
            city: state => state.clientCity,
            cities: state => state.cities.citiesObj,
            clientInitialLon: state => state.clientLong,
            clientInitialLat: state => state.clientLat
        }),

    },

    methods: {
        ...mapActions({
            getCurrentLocation: 'current/getCurrentLocation',
            checkIfInFav: 'favorite/checkIfInFav'
        }),
        ...mapMutations({
            setLon: 'current/setLon',
            setLat: 'current/setLat',
        }),
        setLongAndLat(e) { 
            this.setLon(e.target.dataset.long)
            this.setLat(e.target.dataset.lat)
            this.$router.push('/')
            let crntRoute = this.$router.currentRoute.value.path
            if(crntRoute === '/') { // если мы находимся на стартовой странице, то получаем данные города и проверям избранное
                this.getCurrentLocation()
                this.checkIfInFav()
            }
        },

        searchClientCity() {
            let isFind = false;
            for (let i = 1; i < this.cities.length; i++) {
                if (this.cities[i].owm_city_name.toLowerCase() == this.typedCity.toLowerCase()) {
                    this.$store.state.clientCity = this.cities[i].owm_city_name.toUpperCase()
                    this.long = this.cities[i].owm_longitude
                    this.lat = this.cities[i].owm_latitude
                    isFind = true
                }
            }
            if (isFind) {
                this.isCityWrong = false;
            } else {
                alert('Город не найден. Убедитесь, что название города на английском и попробуйте ещё раз')
            }
        },

    },

}
</script>
<style scoped>
    .header {
        padding: 15px 0;
        background-color: #e9f5f3;
        border-radius: 0 0 20px 20px;
        margin-bottom: 80px;
    }

    .city-check{
        color: #4a4444;
        font-weight: bold;
        margin-right: auto;
        margin-left: 35px;
        position: relative;
    }

    .city-check__choice {
        display: flex;
        color: #5a7fc2;
        cursor: pointer;
    }

    .city-check__yes {
        margin-right: 30px;
    }

    .city-check__input-wrapper {
        display: flex;
        align-items: center;
    }

    .city-check__input {
        margin-right: 7px;
    }

    .city-check__hidden {
        background-color:white;
        position: absolute;
        top: 140%;
        left: 0;
        display: none;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    }

    .active {
        display: block;
    }

    .city-check span {
        color: #5a7fc2;

        cursor: pointer;
    }

    .header__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>