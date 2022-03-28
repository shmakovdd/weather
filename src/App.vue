/* eslint-disable */

<template>
  <div class="app">
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {

  components: {
    AppHeader,
  },

}
</script>

<style>
  img {
    max-width: 100%;
    max-height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
