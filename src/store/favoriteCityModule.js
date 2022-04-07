
export const favoriteCityModule = {
    state: () => ({
        isInFavorite: false,
        favoriteList: [

        ], 
    }),
    mutations: {
        setIsInFavorite(state, payload) {
            state.isInFavorite = payload
        },
        setFavoriteList(state, payload) {
            state.favoriteList = payload
        }
    },
    actions: {

        deleteCity({state, commit, dispatch}, e) { // удаляем город из избранного по нажатию на кнопку "Удалить"
            let lon = e.target.dataset.lon
            let lat = e.target.dataset.lat
            let newFavList = state.favoriteList.filter(city =>{
                if (city.lon !== lon && city.lat !== lat) return true
            });
            console.log(e.target);
            commit('setFavoriteList', newFavList)
            dispatch('checkIfInFav')
        },

        addToFav({state, commit, rootState}) { // добавляем город в избранное 
            let lon = rootState.current.lon
            let lat = rootState.current.lat
            let name = rootState.current.city
            commit('setIsInFavorite', true)
            let favCity = {
                lat,
                lon,
                name
            }
            state.favoriteList.push(favCity)
        },
        removeFromFav({commit, state, rootState}) { // удаляем город из избранного
            let name = rootState.current.city
            commit('setIsInFavorite', false)
            let newFavList = state.favoriteList.filter(city => city.name !== name);
            commit('setFavoriteList', newFavList)
        },
        checkIfInFav({rootState, commit, state}) { // проверяем, есть ли город в избранном
            let isCityFound = state.favoriteList.find(city => {
                if (city.lon == rootState.current.lon && 
                    city.lat == rootState.current.lat){
                    return true
                }
            })

            if(isCityFound) {
                commit('setIsInFavorite', true)
            } else {
                commit('setIsInFavorite', false)
            }
        }
    },
    namespaced: true
}