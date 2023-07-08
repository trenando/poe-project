<template>
    <select :value="modelValue" @change="changeOption" class="select">
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script setup lang="ts">
import { Option } from "../../store/types";


defineProps<{
    modelValue: string | undefined,
    options: Array<Option>
}>()

const emit = defineEmits<{
    (event: "update:modelValue", payload: string): void;
}>()

const changeOption = (event: any) => {
    emit('update:modelValue', event.target.value)
}

</script>

<style scoped lang="scss">
.select {
    width: 100px;
    border: 1px solid var(--my-main-color);
    background-color: var(--my-second-color);
    height: 30px;
    color: var(--my-main-color);
    font-size: 16px;
    padding: 2px;
}
</style>../../store/dada