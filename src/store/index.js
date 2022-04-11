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

    modules: {
        current: currentCityModule,
        cities: citiesListModule,
        favorite: favoriteCityModule
    }
}) 
