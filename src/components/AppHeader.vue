<template>
    <div class="header">
        <app-container>
            <app-logo/>
            <app-nav-bar/>
        </app-container>
    </div>
</template>
<script>
import AppLogo from '@/components/AppLogo'
import AppContainer from '@/components/AppContainer'
import AppNavBar from '@/components/AppNavBar'
export default {
    components: {
        AppLogo,
        AppContainer,
        AppNavBar
    }
}
</script>
<style scoped>
    .header {
        padding: 15px 0;
        background-color: #85cdca;
        border-radius: 0 0 20px 20px;
        margin-bottom: 80px;
    }
</style>