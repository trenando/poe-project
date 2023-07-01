<template>
    <div class="calculate">
        <div class="calculate__changer">
            <my-select class="calculate__select" v-model="bossesStore.options.selectedValue"
                :options="bossesStore.options.options" />
            <div class="calculate__ratio">
                <span>Exchange ratio:</span>
                <my-input class="calculate__input" v-model.number="bossesStore.exchangeRatio" />
            </div>
        </div>
        <my-button @click="bossesStore.calculateFinalResult">Calculate</my-button>
        <div class="calculate__final">
            Loot value:
            <div class="calculate__result">
                {{ bossesStore.lootResult }}
            </div>
        </div>
        <div class="calculate__final">
            Profit:
            <div class="calculate__result">
                {{ bossesStore.profit }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useBossesStore } from '../store/bossesStore';
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
import MySelect from './UI/MySelect.vue';

const bossesStore = useBossesStore();
</script>

<style scoped lang="scss">
.calculate {
    display: grid;
    grid-area: 3 / 1 / 3 / 5;
    justify-content: center;
    margin-top: 50px;

    &__select {
        width: 100px;
        margin: 0 5px 10px 0;
    }

    &__ratio {
        margin-bottom: 10px;
        color: var(--my-main-color);
    }

    &__input {
        width: 100px;
        margin-left: 5px;
    }

    &__final {
        display: flex;
        margin-top: 10px;
        color: var(--my-main-color);
        align-items: center;
    }

    &__result {
        font-size: 20px;
        margin-left: 10px;
    }

    &__changer {
        display: flex;
    }
}
</style>