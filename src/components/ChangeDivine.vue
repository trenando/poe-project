<template>
    <div class="calculate">
        <div class="calculate__changer">
            <my-select class="calculate__select" v-model="utilityStore.options.selectedValue"
                :options="utilityStore.options.options" />
            <div class="calculate__ratio">
                <span>Exchange ratio:</span>
                <my-input class="calculate__input" v-model.number="utilityStore.exchangeRatio" />
            </div>
        </div>
        <my-button @click="finalResultStore.calculateFinalResult(itemById)">Calculate</my-button>
        <div class="calculate__final">
            Loot value:
            <div class="calculate__result">
                {{ utilityStore.lootResult }}
            </div>
        </div>
        <div class="calculate__final">
            Profit:
            <div class="calculate__result">
                {{ utilityStore.profit }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFinalResultStore } from '../store/finalResultStore';
import { useUtilityStore } from '../store/utilityStore';
import MyButton from './UI/MyButton.vue';
import MyInput from './UI/MyInput.vue';
import MySelect from './UI/MySelect.vue';

defineProps<{
    itemById: any
}>()

const finalResultStore = useFinalResultStore()
const utilityStore = useUtilityStore();
</script>

<style scoped lang="scss">
.calculate {
    display: grid;
    grid-area: 3 / 1 / 3 / 5;
    justify-content: center;
    margin-top: 20px;

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