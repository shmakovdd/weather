<template>
  <div class="app">
    <app-header/>
    <favorite-briefly/>
    <router-view></router-view>
  </div> 
</template>

<script>
import AppHeader from '@/components/AppHeader'
import FavoriteBriefly from '@/components/FavoriteBriefly'
import { mapActions, mapMutations, mapState } from 'vuex'
import {getCookie} from '@/store/utils'
export default {

  components: {
    AppHeader,
    FavoriteBriefly,
  },
  computed: {
    ...mapState({
      isAuth: state => state.isAuth
    })
  },
  methods: {
    ...mapMutations({
      setAuth: 'setAuth'
    }),
    ...mapActions({
      getFavorites: 'favorite/getFavorites',
      initCentrifuge: 'initCentrifuge',
    }),
    checkCookie() {
      if (getCookie('authToken')) {
        this.setAuth(true)
      }
    },
    

  },
  mounted() {
    this.checkCookie()
    if (this.isAuth) {
    this.getFavorites()
    this.initCentrifuge()
    }
  }

}
</script>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
  }

  li {
      list-style: none;
  }

  .app {
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
