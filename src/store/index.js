import {createStore} from "vuex";
import { currentCityModule } from "@/store/currentCityModule";
import { citiesListModule } from "@/store/citesListModule";
import { favoriteCityModule } from "@/store/favoriteCityModule";

export default createStore({
    state: () => ({
        clientLong: null,
        clientLat: null,
        clientCity: null,
    }),
    mutations: {
        setClientCity(state, payload) {
            state.clientCity = payload
        }
    },

    modules: {
        current: currentCityModule,
        cities: citiesListModule,
        favorite: favoriteCityModule
    }
}) 