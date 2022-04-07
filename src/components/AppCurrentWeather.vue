<template>
    <div class="current-weather">
        <h1 class="current-weather__title">Погода Сегодня</h1>
        <div class="current-weather__wrapper">
            <div class="current-weather__city-name"> {{name}}</div>
            <app-favorite-btn class="current-weather__favorite"/>
            <div class="current-weather__date">{{currentData.date}} {{currentData.month}}, {{currentData.time}}</div>
            <div class="current-weather__temp">
                <div class="current-weather__temp-img-wrapper">
                    <img class="current-weather__img" :src="currentData.icon" alt="" srcset="">
                </div>
                <div class="current-weather__temp-info">{{currentData.temp}}</div>
            </div>
            <div class="current-weather__other-info">
                <div class="current-weather__feels-like">Ощущается как {{currentData.feels_like}}. {{currentData.description}}</div>
                <div class="current-weather__wind-speed-info">Скорость ветра: {{currentData.windSpeed}}</div>
                <div class="current-weather__wind-dir-info">Направление: {{currentData.windDir}}</div>
                <div class="current-weather__pressure">Давление: {{currentData.pressure}}</div>
                <div class="current-weather__humidity">Влажность: {{currentData.humidity}}</div>
            </div>
            <app-sun-day
            :sun_day="currentData.sun_day"
            />
        </div>
    </div>

</template>
<script>
import AppSunDay from '@/components/AppSunDay'
import AppFavoriteBtn from '@/components/AppFavoriteBtn'
export default {
    components: {
        AppSunDay,
        AppFavoriteBtn
    },
    props: {
        name: {
            type: String
        },
        currentData: {
            type: Object,
            required: true,
        }
    },
}



</script>
<style scoped>

    .current-weather__favorite {
        margin-bottom: 15px;
    }

    .current-weather__img {
        filter: contrast(0.7);
    }

    .current-weather__title {
        text-align: center;
        margin-bottom: 20px;
    }

    .current-weather__feels-like {
        font-weight: bold;
        color: #4a4444;
        text-align: center;
    }

    .current-weather__wind-speed-info, .current-weather__wind-dir-info, .current-weather__pressure, .current-weather__feels-like {
        margin-bottom: 15px;
    }

    .current-weather__wrapper {
        border: 2px solid #5a7fc2;
        border-radius: 15px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .current-weather__city-name {
        font-weight: bold;
        color: #4a4444;
        font-size: 28px;
        line-height: 1;
        margin-bottom: 5px;
    }

    .current-weather__date{
        color: #5a7fc2;
        font-weight: bold;
        margin-bottom: 40px;
    }

    .current-weather__temp {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 30px;
        color: #4a4444;
        font-weight: bold;
    }

    .current-weather__temp-img-wrapper {
        width: 75px;
        height: 75px;
    }

    .current-weather__temp {
        display: flex;
    }

    .current-weather__other-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>