<template>
    <div class="favorite-hidden">
        <ul v-if="favoriteList.length >= 1" class="favorite-hidden__list">
            <favorite-item v-for="city in favoriteList"
            :key="city.id"
            :city="city"
            class="favorite-hidden__item"/>
        </ul>
        <div v-else  class="favorite-hidden__plug">Нет городов в избранном.</div>    
    </div>
</template>
<script>
import {mapState} from 'vuex'
import FavoriteItem from '@/components/FavoriteItem'
export default {
    components: {
        FavoriteItem
    },

    computed: {
    ...mapState({
        favoriteList: state => state.favorite.favoriteList
    })
    },


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


</style>