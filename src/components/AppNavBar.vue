<template>
    <div class="navbar">
        <app-button v-if="isAuth" class="navbar__btn" @click="this.$router.push('/cities')">Список городов</app-button>
        <div class="navbar__favorite__wrapper" v-if="isAuth">
            <app-button @click="toggleFavActive"  class="navbar__btn">
                Избранное
            </app-button>
            <app-favorite-hidden :class="{active: isFavActive}" class="navbar__favorite"/>
        </div>
        <app-button v-if="!isAuth" @click="this.$router.push('/login')" class="navbar__btn">Войти</app-button>
        <app-button v-if="!isAuth" @click="this.$router.push('/reg')" class="navbar__btn">Регистрация</app-button>
        <app-button v-if="isAuth" @click="logOut" class="navbar__btn">Выйти</app-button>
    </div>
</template>
<script>
import AppFavoriteHidden from '@/components/AppFavoriteHidden'
import AppButton from '@/components/UI/AppButton'
import {mapState, mapMutations} from 'vuex'

import axios from 'axios'
import { getCookie, deleteCookie} from '@/store/utils'
export default {
    data() {
        return {
            isFavActive: false
        }
    },

    computed: {
        ...mapState({
            isAuth: state => state.isAuth
        })
    },
    components: {
        AppButton,
        AppFavoriteHidden
    },
    methods: {
        ...mapMutations({
            setAuth: 'setAuth'
        }),
        toggleFavActive() {
            this.isFavActive = !this.isFavActive
        },
        logOut() {
            axios({
                method: 'POST', 
                headers: {
                    Authorization: `Bearer ${getCookie('authToken')}`
                },
                url: 'https://front-test.academy.smartworld.team/api/api/logout'
            }).then(
                response => {
                    if (response.data.success === true) {
                        deleteCookie('authToken')
                    }
                }
            )
            this.setAuth(false)
            this.$router.push('/login')
        },
    }
}
</script>
<style scoped>
    .navbar {
        display: flex;
        align-items: center;
    }
    .navbar__favorite__wrapper {
        position: relative;
    }

    .navbar__favorite {
        position: absolute;
        opacity: 0;
        transform: translateX(450%);
        transition: opacity .5s, transform 1s ease-in-out ;

    }

    .active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity .3s ease .3s, transform .5s ease-in-out ;
    }
</style>