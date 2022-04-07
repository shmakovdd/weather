<template>
    <div class="daily-weather">
        <h1 class="daily-weather__title">
            Погода на неделю
        </h1>
        <ul class="daily-weather__list">
            <app-day
            v-for="day of days"
            :key="day.id"
            :day="day"
            />
        </ul>
    </div>
</template>
<script>
import AppDay from '@/components/AppDay'
export default {
    components: {
        AppDay,
    },
    props: {
        days: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style scoped>

    .daily-weather__title {
        text-align: center;
    }

    .daily-weather__list {
        display: flex;
        flex-direction: column;
    }

</style>