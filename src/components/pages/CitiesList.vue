<template>
    <div class="cities">
        <app-container class="cities__container">
            <input :model-value="searchQuery" @input="onInput" type="text" class="cities__search" placeholder="Поиск...(англ)">
            <ul class="cities__list">
                <city-item
                    v-for="city, index in searchedCities"
                    :key="index"
                    :city="city"
                />
            </ul>
            <div v-intersection="loadMoreCities" class="intersection-el"></div>
        </app-container>
    </div>
</template>
<script>
import CityItem from '@/components/CityItem'
import AppContainer from '@/components/AppContainer'
import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'
export default {
    components: {
        AppContainer,
        CityItem,
    },

    computed: {
        ...mapState({
            citesAtOnce: state => state.cities.citesAtOnce,
            cities: state => state.cities.cities,
            searchQuery: state => state.cities.searchQuery
        }),

        ...mapGetters({
            searchedCities: 'cities/searchedCities'
        })

    },
    methods: {
        onInput(e) {
            let value = e.target.value
            this.setSearchQuery(value)
        },

        ...mapActions({
            loadMoreCities: 'cities/loadMoreCities',
            loadCities: 'cities/loadCities'
        }),
        ...mapMutations({
            setCities: 'cities/setCities',
            setLoadedCities: 'cities/setLoadedCities',
            setSearchQuery: 'cities/setSearchQuery'
        })
    },
    mounted() {
        this.loadCities()  

    },
}
</script>
<style>
    .cities__search {
        margin: 0 auto;
        margin-bottom: 50px;
        outline: none;
        border: 1px solid #5a7fc2;
        border-radius: 10px;
        padding: 10px;
        display: block;
        min-width: 300px;
        width: 40%;
    }

    .cities__container {
        position: relative;
    }

    .cities__list {
        font-weight: bold;
        color: #5a7fc2;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .intersection-el {
        width: 100%;
        height: 20px;
    }
</style>