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
        border: 1px solid #5a7fc2;
        border-radius: 15px;
        background-color: transparent;
        color: #5a7fc2;
        cursor: pointer;
        margin-right: 15px;
        font-size: 18px;
    }

    .btn:last-child {
        margin: 0;
    }

    .btn:hover {
        border-color: #ed5022;
        color: #ed5022;
    }
</style>