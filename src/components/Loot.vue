<template>
    <div class="loot">
        <div class="loot__name">{{ loot.name }}</div>
        <div class="loot__items">
            <div class="loot__item">
                <span>Cost:</span>
                <my-input v-model.number="loot.cost" />
            </div>
            <div class="loot__item">
                <span>Count:</span>
                <my-input v-model.number="loot.count" />
            </div>
        </div>
        <my-select v-model="loot.selectedValue" :options="loot.options" class="loot__select" />
    </div>
</template>

<script setup lang="ts">
import { Loot } from '../store/bossesLoot/Types';
import MySelect from './UI/MySelect.vue';
import MyInput from './UI/MyInput.vue';

defineProps<{
    loot: Loot
}>()
</script>

<style scoped lang="scss">
.loot {
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    margin-bottom: 30px;

    &__name {
        margin-bottom: 5px;
        font-size: 20px;
        color: var(--my-main-color);
    }

    &__cost {
        margin-bottom: 5px;
    }

    &__items {
        display: flex;
        justify-content: space-between;
        width: 200px;
    }

    &__item {
        span {
            margin-right: 5px;
            color: var(--my-main-color);
        }
    }

    &__select {
        margin: 5px 0 0 0;
        width: 200px;
    }
}
</style>