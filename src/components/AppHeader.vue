<template>
    <div class="header">
        <app-container class="header__container">
            <app-logo @click="this.$router.push('/')"/>
          
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
    },

}
</script>
<style scoped>
    .header {
        padding: 15px 0;
        background-color: #e9f5f3;
        border-radius: 0 0 20px 20px;
        margin-bottom: 80px;
    }


    .header__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>