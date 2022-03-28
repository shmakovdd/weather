<template>
    <div class="navbar">
        <app-button>Прогноз на 10 дней</app-button>
        <app-button>Прогноз на месяц</app-button>
    </div>
</template>
<script>
import AppButton from '@/components/UI/AppButton'
export default {
    components: {
        AppButton,
    }
}
</script>
<style scoped>
    .navbar {
        display: flex;
        align-items: center;
    }


</style>