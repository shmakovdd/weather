<template>
    <div class="current-weather">
        <div class="current-weather__city-name"> {{name}}</div>
        <div class="current-weather__date">{{currentData.date}} {{currentData.month}}, {{currentData.time}}</div>
        <div class="current-weather__temp">
            <div class="current-weather__temp-img-wrapper">
                <img :src="currentData.icon" alt="" srcset="">
            </div>
            <div class="current-weather__temp-info">{{currentData.temp}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String
        },
        currentData: {
            type: Object,
            required: true,
        }
    }
}
</script>
<style scoped>
    .current-weather {
        border: 1px solid black;
        border-radius: 15px;
        padding: 15px;
    }

    .current-weather__city-name {
        font-weight: bold;
        color: #4a4444;
        font-size: 28px;
        line-height: 1;
        margin-bottom: 10px;
    }

    .current-weather__date{
        color: #ed5022;
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

</style>