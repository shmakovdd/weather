import citiesObj from '@/cities/cities.json'


export const citiesListModule = {
    state: () => ({
        citiesObj,
        citiesAtOnce: 60,
        citiesAlreadyLoaded: 1,
        searchQuery: '',
        cities: [

        ]
    }),

    mutations: {
        setCities(state, payload) {
            state.cities = payload
        },
        setLoadedCities(state, payload) {
            state.citiesAlreadyLoaded = payload
        },
        setSearchQuery(state, payload) {
            state.searchQuery = payload
        }
    },

    getters: {
        searchedCities(state) {
            return state.cities.filter(city => city.cityName.toLowerCase().includes(state.searchQuery.toLowerCase())) || state.cities
        }
    },
    actions: {
        
        loadCities({state, dispatch,commit}) {
            commit('setSearchQuery', '')
            if ( state.citiesAlreadyLoaded > 1) return
            dispatch('loadMoreCities')
            
        },

        loadMoreCities({state, commit}) {
            let res = []
            for (let i = state.citiesAlreadyLoaded; i <= state.citiesAlreadyLoaded + state.citiesAtOnce; i++) {
                let obj = {
                    cityName: citiesObj[i].owm_city_name,
                    cityLong: citiesObj[i].owm_longitude,
                    cityLat: citiesObj[i].owm_latitude,
                    cityArea: citiesObj[i].admin_level_1_short
                    
                }
                res.push(obj)
            }
            commit('setLoadedCities', state.citiesAlreadyLoaded + 1 + state.citiesAtOnce)
            commit('setCities', [...state.cities, ...res])

        },

    },
    namespaced: true
}