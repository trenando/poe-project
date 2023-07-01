<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.btn {
    color: var(--my-main-color);
    background-color: var(--my-second-color);
    cursor: pointer;
    border: 1px solid var(--my-main-color);
    border-radius: 10px;
    padding: 10px;

    &:hover {
        color: var(--my-second-color);
        background-color: var(--my-main-color);
        border: 1px solid var(--my-second-color);
    }
}
</style>