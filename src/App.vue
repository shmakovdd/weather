/* eslint-disable */

<template>
  <div class="app">
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import { mapActions, mapMutations, mapState } from 'vuex'
import {getCookie} from '@/store/utils'
export default {

  components: {
    AppHeader,
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
      getFavorites: 'favorite/getFavorites'
    }),
    checkCookie() {
      if (getCookie('authToken')) {
        this.setAuth(true)
      }
    },
    

  },
  mounted() {
    this.checkCookie()
    this.isAuth && this.getFavorites()
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
