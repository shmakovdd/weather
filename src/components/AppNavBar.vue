<template>
    <div class="navbar">
        <app-button class="navbar__btn" @click="this.$router.push('/cities')">Список городов</app-button>
        <div class="navbar__favorite__wrapper">
            <app-button @click="isFavActive = !isFavActive"  class="navbar__btn">
                Избранное
            </app-button>
            <app-favorite-hidden :class="{active: isFavActive}" class="navbar__favorite"/>
        </div>
      
        <app-button class="navbar__btn">Войти</app-button>
    </div>
</template>
<script>
import AppFavoriteHidden from '@/components/AppFavoriteHidden'
import AppButton from '@/components/UI/AppButton'
export default {
    data() {
        return {
            isFavActive: false
        }
    },
    components: {
        AppButton,
        AppFavoriteHidden
    },
    methods: {

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