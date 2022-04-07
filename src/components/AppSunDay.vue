<template>
    <div class="sun-day">
        <div class="sun-day__background">

        </div>
        <div class="sun-day__sunrise">
            <div class="sun-day__title">Восход</div>
            <div class="sun-day__value">{{sun_day?.sunrise}}</div>
        </div>
        <div class="sun-day__sun"></div>
        <div class="sun-day__sunset">
            <div class="sun-day__title">Закат</div>
            <div class="sun-day__value">{{sun_day?.sunset}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        sun_day: {
            type: Object,
        }
    },
    computed: {

    }
}
</script>
<style scoped>
    .sun-day {
        margin-top: 40px;
        width: 300px;
        height: 65px;
        border-radius: 50%;
        position: relative;
    }

    .sun-day__sunset {
        right: 0;
    }

    .sun-day__background {
        width: 100%;
        height: 100%;
        z-index: 5;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        border: 2px solid transparent;
        border-top-color: #ed5022;
    }

    .sun-day__sunrise, .sun-day__sunset {
        position: absolute;
        z-index: 10;
        top: 40%;
        text-align: center;
        font-weight: bold;
        color: #4a4444;
    }

    .sun-day__sun {
        position: absolute;
        width: 50px;
        height: 50px;
        left: 50%;
        top: -40%;
        border-radius: 50%;
        background-color: #ffc300;
        transform: translateX(-50%);
    }
</style>