/* eslint-disable */

import {createStore} from "vuex";
import { currentCityModule } from "@/store/currentCityModule";
import { citiesListModule } from "@/store/citesListModule";
import { favoriteCityModule } from "@/store/favoriteCityModule";

export default createStore({
    state: () => ({
        isAuth: false,
        clientLong: null,
        clientLat: null,
        clientCity: null,
    }),
    mutations: {
        setClientCity(state, payload) {
            state.clientCity = payload
        },
        setAuth(state, payload) {
            state.isAuth = payload
        }
    },
    actions: {
        initCentrifuge({rootState}, {socketToken, userId}) {
            let Centrifuge = require("centrifuge");
            let centrifuge = new Centrifuge('wss://front-test.academy.smartworld.team/connection/websocket');
            centrifuge.setToken(socketToken)
            centrifuge.connect();
            centrifuge.subscribe(`userChannel#${userId}`, function(response) {
                rootState.favorite.favoriteList.forEach(item => {
                    if(item.api_city_id === response.data.id) {
                        item.temp = `${Math.trunc(response.data.main.temp_min - 273)}°C`,
                        item.icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
                        console.log(item);
                    }
                }) 
            })
        }
    },

    modules: {
        current: currentCityModule,
        cities: citiesListModule,
        favorite: favoriteCityModule
    }
}) 
