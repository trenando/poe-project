<template>
    <section class="section">
        <div v-for="element in bossById" class="section__content">
            <div v-if="!Array.isArray(element)" :key="element.name">
                <span class="name">{{ element.name }}</span>
                <my-input v-model.number="element.value"
                    @input="utilityStore.changeCostValue<BossById>(element, bossById)" />
                <my-select v-if="element.options" v-model="element.selectedValue" :options="element.options" />
            </div>
            <loot v-else v-for="el in element" :key="el.name" :loot="el" />
        </div>
        <change-divine :itemById="bossById" />
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
import { useUtilityStore } from "../store/utilityStore";
import { Boss, BossById } from "../store/types"
import Loot from "../components/Loot.vue";

const bossesStore = useBossesStore();
const utilityStore = useUtilityStore();
const route = useRoute();
const { bossById } = storeToRefs(bossesStore);

onMounted(() => {
    utilityStore.filterById<Boss>(route.params.id as string, {
        array: bossesStore.bosses,
        value: bossById
    })
})

</script>

<style scoped lang="scss">
.section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    padding: 10px;

    @media (max-width:1200px) {
        grid-template-columns: repeat(2, 1fr) 130px;
    }

    @media (max-width:767px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

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

        @media (max-width:1200px) {
            &:nth-child(4) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width:767px) {
            width: 300px;
            margin-bottom: 10px;

            &:nth-child(4) {
                grid-template-columns: repeat(2, 1fr);
                width: 100%;
                margin-bottom: 0;
            }
        }

        
        @media (max-width:525px) {

            &:nth-child(4) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }

    .name {
        margin-right: 5px;
        font-size: 20px;
        color: var(--my-main-color);
    }
}
</style>../store/dada../store/rename