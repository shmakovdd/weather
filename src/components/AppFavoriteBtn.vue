<template>
    <div class="favorite-btn">
        <span @click="addToFav" v-if="!isInFavorite" class="favorite-btn__text">Добавить город в избранное</span>
        <span @click="removeFromFav" v-else class="favorite-btn__text">Удалить из избранного</span>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            isInFavorite: state => state.favorite.isInFavorite,
        })
    },
    methods: {
        ...mapActions({
            addToFav: 'favorite/addToFav',
            removeFromFav: 'favorite/removeFromFav',
            checkIfInFav: 'favorite/checkIfInFav'
        })
    },
    mounted() {
        this.checkIfInFav()
    }
}
</script>
<style>
    .favorite-btn {
        color: #ed5022;
        font-weight: bold;
        cursor: pointer;
    }
</style>