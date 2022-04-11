<template>
    <div v-if="cityID !== null" class="favorite-btn__wrapper">
        <div v-if="auth" class="favorite-btn__btn">
            <span @click="addToFav" v-if="!getIsInFavorite" class="favorite-btn__text">Добавить город в избранное</span>
            <span @click="removeFromFav" v-else class="favorite-btn__text">Удалить из избранного</span>
        </div>
        <div v-else class="favorite-btn__plug">
            <span>Авторизируйтесь, чтобы добавить в избранное</span>
        </div>
    </div>
   
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            auth: state => state.isAuth,
            cityID: state => state.current.cityID 
        }),
        ...mapGetters({
            getIsInFavorite: 'favorite/getIsInFavorite'
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
    .favorite-btn__btn {
        color: #ed5022;
        font-weight: bold;
        cursor: pointer;
    }
</style>