<template>
    <input :value="modelValue" @input="updateInput" class="form-input">    
</template>
<script>
export default {
    props: {
        modelValue: {
            type: [String, Number]
        },
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style>
    .form-input {
        margin-bottom: 30px;
        border-radius: 10px;
        outline: none;
        border: 2px solid #5a7fc2;
        padding: 15px
    }


    .form-input:focus {
        border-color: #ed5022;
    }
    
</style>