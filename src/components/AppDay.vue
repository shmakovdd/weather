<template>
    <li class="day">
        <div class="day__date">
            <div class="day__num">{{day.day}}</div>
            <div class="day__month">{{day.weekDay}}</div>
        </div>
        <div class="day__temp-img-wrapper">
            <img class="day__img" :src="day.icon" alt="" srcset="">
        </div>
        <div class="day__temp-info">{{day.temp}}</div>
        <div class="day__descr">{{day.descr}}</div>
        <div class="day__clouds">Облачность: {{day.clouds}}</div>
    </li>
</template>
<script>
export default {
    props: {
        day: {
            type: Object,
            required: true,
        }
    },

}
</script>
<style >
    .day {
        padding: 15px;
        border-bottom: 1px solid #5a7fc2;
        border-radius: 15px;
        margin-right: 0px;
        text-align: center;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .day__img {
        filter: contrast(0.7);
    }

    .day:last-child {
        margin: 0;
    }

    .day__clouds {
        margin-left: auto;
    }

    .day__date {
        justify-content: center;
        display: flex;
        width: 100px;
    }

    .day__num{
        font-size: 20px;
        font-weight: bold;
        color: #4a4444;
        margin-right: 5px;
    }

    .day__month {
        color: #5a7fc2;
        font-size: 20px;
        font-weight: bold;
    }

    .day__temp-img-wrapper {
        width: 55px;
        height: 55px;
    }

    .day__temp-info {
        font-size: 20px;
        color: #4a4444;
        font-weight: bold;
        margin-right: 15px;
    }

    .day__descr {
        font-weight: bold;
        color: #4a4444;
        margin-right: 10px;
        margin-left: auto;
    }
</style>