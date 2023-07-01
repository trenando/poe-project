<template>
    <input type="number" class="input" :value="modelValue" @input="updateValue" />
</template>

<script setup lang="ts">

defineProps<{
    modelValue: number
}>()

const emit = defineEmits<{
    (event: "update:modelValue", payload: number): void;
}>()

const updateValue = (event: any) => {
    emit('update:modelValue', Number(event.target.value))
}

</script>

<style scoped lang="scss">
.input {
    width: 50px;
    border: 1px solid var(--my-main-color);  
    background-color: var(--my-second-color);  
    height: 30px;
    color: var(--my-main-color);
    font-size: 18px;
    padding: 2px;
}
</style>