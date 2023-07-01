<template>
    <section class="section">
        <div v-for="element in bossById" class="section__content">
            <div v-if="!Array.isArray(element)" :key="element.name">
                <span class="name">{{ element.name }}</span>
                <my-input v-model.number="element.value" @input="bossesStore.changeDepValue(element)" />
                <my-select v-if="element.options" v-model="element.selectedValue" :options="element.options" />
            </div>
            <div v-else v-for="el in element" :key="el.name" class="loot">
                <div class="loot__name">{{ el.name }}</div>
                <div class="loot__items">
                    <div class="loot__item">
                        <span>Cost:</span>
                        <my-input v-model.number="el.cost" />
                    </div>
                    <div class="loot__item">
                        <span>Count:</span>
                        <my-input v-model.number="el.count" />
                    </div>
                </div>
                <my-select v-model="el.selectedValue" :options="el.options" class="loot__select"/>
            </div>
        </div>
        <change-divine />
    </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useBossesStore } from "../store/bossesStore";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import MyInput from "../components/UI/MyInput.vue";
import ChangeDivine from "../components/ChangeDivine.vue";
import MySelect from "../components/UI/MySelect.vue";

const bossesStore = useBossesStore();
const route = useRoute()
const { bossById } = storeToRefs(bossesStore);

onMounted(() => {
    bossesStore.filterBossById(route.params.id as string)
})

</script>

<style scoped lang="scss">
.section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    padding: 10px;

    &__content {
        select {
            margin-left: 5px;
        }

        &:nth-child(4) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-area: 2 / 1 / 3 / 4;
            margin-top: 10px;
        }
    }

    .name {
        margin-right: 5px;
        font-size: 20px;
        color: var(--my-main-color);
    }

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

        &__select{
            margin: 5px 0 0 0;
            width: 200px;
        }
    }
}
</style>