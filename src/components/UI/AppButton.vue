<template >
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    
}
</script>
<style>
    .btn {
        padding: 8px 10px;
        border: 1px solid #ed5022;
        border-radius: 15px;
        background-color: transparent;
        color: #ed5022;
        cursor: pointer;
        margin-right: 15px;
        font-size: 18px;
    }

    .btn:last-child {
        margin: 0;
    }

    .btn:hover {
        opacity: 0.6;
    }
</style>