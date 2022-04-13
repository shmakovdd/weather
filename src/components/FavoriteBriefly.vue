<template>
  <div v-if="isAuth" class="favorite-brief">
    <app-container class="favorite-brief__container">
      <ul class="favorite-brief__list">
        <li
          v-for="city in favoriteList"
          :key="city.id"
          class="favorite-brief__item"
          @click="findCityByID"
          :data-api_id="city.api_city_id"
          :data-id="city.id"
        >
          <div class="favorite-brief__city-name">{{ city.name }}</div>
          <div class="favorite-brief__city-info">
              <div class="favorite-brief__icon-wrapper">
                  <img :src="city.icon" alt="" class="favorite-brief__icon">
              </div>
              <div class="favorite-brief__weather">
                <span>{{city.temp}}</span>
              </div>
          </div>
        </li>
      </ul>
    </app-container>
  </div>
</template>
<script>

import AppContainer from "@/components/AppContainer";
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  /* eslint-disable */

  components: {
    AppContainer,
  },

  computed: {
      ...mapState({
          favoriteList: state => state.favorite.favoriteList,
          isAuth: state => state.isAuth
      }),

    },

  methods: {
        ...mapMutations({
            setCityID: 'current/setCityID'
        }),
        ...mapActions({
        getCurrentWeatherById: 'current/getCurrentWeatherById'
        }),
        findCityByID(e) {
            this.getCurrentWeatherById(e.currentTarget.dataset.api_id)
            this.$router.push('/')
            this.setCityID(e.currentTarget.dataset.id)
        }
  },
};
</script>
<style scoped>
.favorite-brief {
  margin-bottom: 60px;

}

.favorite-brief__container {
    display: flex;
    justify-content: center;
}

.favorite-brief__city-info {
    display: flex;
    align-items: center;
}

.favorite-brief__city-name {
  color: #4a4444;
  font-weight: bold;
  font-size: 19px;
}

.favorite-brief__icon-wrapper {
    width: 55px;
    height: 55px;
    margin-bottom: auto;
}

.favorite-brief__list {
  display: flex;
  border-radius: 30px;
  border: 1px solid #5a7fc2;
  padding: 0px;
  overflow: hidden;
}

.favorite-brief__item {
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
}

.favorite-brief__item:hover {
  background-color: #e9f5f3;
}
.favorite-brief__item:last-child {
  margin: 0;
}
</style>
