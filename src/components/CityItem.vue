<template>
    <li class="city-item" @click="setLongAndLat" :data-long='city.cityLong' :data-lat='city.cityLat'>
        <span class="city-name" :data-long='city.cityLong' :data-lat='city.cityLat'>{{(city.cityName).toUpperCase()}}</span>
        <span class="city-area" :data-long='city.cityLong' :data-lat='city.cityLat'>({{city.cityArea}})</span>
    </li>
</template>
<script>
import { mapMutations} from 'vuex'
export default {
    props: {
        city: {
            type: Object,
        }
    }, 
    methods: {
        ...mapMutations({
            setLon: 'current/setLon',
            setLat: 'current/setLat',
        }),
        setLongAndLat(e) {
            this.setLon(e.target.dataset.long)
            this.setLat(e.target.dataset.lat)
            this.$router.push('/')
        }
    }
}
</script>
<style scoped>
    .city-item {
        cursor: pointer;
        margin-bottom: 20px;
        width: 33%;
        text-align: center;
    }

    span {
        display: block

    }

    /* .city-item:after {
        content: 'ПЕРЕЙТИ НА СТРАНИЦУ ГОРОДА';
        display: none;
        margin-left: 25px;
    } */

    .city-item:hover {
        background-color: #e9f5f3;
    }

    .city-item:hover:after {
        display: inline-block;
    }
</style>