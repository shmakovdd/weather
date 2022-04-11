import axios from 'axios'
import { getCookie } from '@/store/utils'

export const citiesListModule = {
    state: () => ({
        searchQuery: '',
        cities: [

        ]
    }),

    mutations: {
        setCities(state, payload) {
            state.cities = payload
        },
        setSearchQuery(state, payload) {
            state.searchQuery = payload
        }
    },

    getters: {
        searchedCities(state) {
            return state.cities.filter(city => city.name.toLowerCase().includes(state.searchQuery.toLowerCase())) || state.cities
        }
    },
    actions: {
        
        loadCities({commit}) {
            let authToken = getCookie('authToken')
            commit('setSearchQuery', '') 
            axios({
              method: 'GET',
              url: 'https://front-test.academy.smartworld.team/api/City/get',
              headers: {
                  'Authorization': `Bearer ${authToken}`
              }
            }).then(response => {
                commit('setCities', response.data.data)
            })
        },

    },
    namespaced: true
}