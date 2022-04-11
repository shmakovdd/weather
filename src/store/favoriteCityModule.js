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
        if (city.id === rootState.current.cityID) {
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
