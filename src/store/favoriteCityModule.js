import axios from "axios";
import { getCookie } from "@/store/utils";

export const favoriteCityModule = {
  state: () => ({
    isInFavorite: false,
    favoriteList: [],
  }),

  getters: {
    getFavoriteList(state) {
      return state.favoriteList;
    },
    getIsInFavorite(state) {
      return state.isInFavorite;
    },
  },
  mutations: {
    setIsInFavorite(state, payload) {
      state.isInFavorite = payload;
    },
    setFavoriteList(state, payload) {
      state.favoriteList = payload;
    },
  },
  actions: {

    getCitiesWeatherInfo({state}) { // берём инфу о погоде по всем городам
      if(state.favoriteList.length) {
        state.favoriteList.forEach(item => {
          if(!item.isLoaded) {
            createCityObj(item, item['api_city_id'])
          }
        })
      }
      function createCityObj(item, id) {
          axios({
              method: "GET",
              url: "https://api.openweathermap.org/data/2.5/weather",
              params: {
              id,
              units: "metric",
              lang: "ru",
              appid: "84bea86b6e84affc971c5ed48003ecea",
              },
          }).then((response) => {
            let data = response.data
            let obj = {
              temp: `${Math.trunc(data.main.temp_min)}°C`,
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              isLoaded: true,
            }
            Object.assign(item, obj)
      })
    }
  },
    getFavorites({ commit, dispatch }) {
      axios({
        method: "GET",
        url: "https://front-test.academy.smartworld.team/api/City/getFavourite",
        headers: {
          Authorization: `Bearer ${getCookie("authToken")}`,
        },
      }).then((response) => {
        let data = response.data;
        commit("setFavoriteList", data.data);
        dispatch("checkIfInFav");
        dispatch('getCitiesWeatherInfo')
      });
    },
    deleteCity({ dispatch }, e) {
      // удаляем город из избранного по нажатию на кнопку "Удалить"
      let id = e.target.dataset.id;
      axios({
        method: "DELETE",
        url: `https://front-test.academy.smartworld.team/api/City/remove/${id}`,
        headers: {
          Authorization: `Bearer ${getCookie("authToken")}`,
        },
      }).then(() => {
        dispatch("getFavorites");
      });
    },

    addToFav({ rootState, dispatch }) {
      let id = rootState.current.cityID;
      axios({
        method: "POST",
        url: `https://front-test.academy.smartworld.team/api/City/add/${id}`,
        headers: {
          Authorization: `Bearer ${getCookie("authToken")}`,
        },
      }).then(() => {
        dispatch("getFavorites");
      });
    },
    removeFromFav({ dispatch, rootState }) {
      // удаляем город из избранного
      let id = rootState.current.cityID;
      axios({
        method: "DELETE",
        url: `https://front-test.academy.smartworld.team/api/City/remove/${id}`,
        headers: {
          Authorization: `Bearer ${getCookie("authToken")}`,
        },
      }).then(() => {
        dispatch("getFavorites");
      });
    },
    checkIfInFav({ rootState, commit, getters }) {
      // проверяем, есть ли город в избранном
      let getFavoriteList = getters.getFavoriteList;
      let isCityFound = getFavoriteList.find((city) => {
        if (city.id == rootState.current.cityID) {
          return true;
        }
      });

      if (isCityFound) {
        commit("setIsInFavorite", true);
      } else {
        commit("setIsInFavorite", false);
      }
    },
  },
  namespaced: true,
};
