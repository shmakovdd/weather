<template>
    <div class="logo">  
        <div class="logo__wrapper">
            <img class="logo__img" src="../assets/logo.png" alt="logo">
        </div>
        <div class="logo__text">
            <h3>AccuVueWeather</h3>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .logo {
        display: flex;
        cursor: pointer;
    }
    .logo__wrapper {
        width: 60px;
        height: 60px;
    } 
    .logo__text {
        display: flex;
        align-items: center;
        color: #5a7fc2;
        text-transform: uppercase;
        font-size: 20px;
    }
</style>