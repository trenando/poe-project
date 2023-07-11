<template>
    <section class="section">
        <div class="section__content">
            <div v-for="sets in invitationById.sets" class="section__sets">
                <div v-for="element in sets" class="section__element">
                    <div v-if="(typeof element !== 'object')">
                        <span class="section__name">{{ element }}</span>
                    </div>
                    <div v-else>
                        <span class="name">{{ element.name }}</span>
                        <my-input v-model.number="element.value"
                            @input="utilityStore.changeCostValue<ElementById>(element, sets)" />
                        <my-select v-if="element.options" v-model="element.selectedValue" :options="element.options" />
                    </div>
                </div>
            </div>
            <div class="section__loot">
                <loot v-for="el in invitationById.loot" :key="el.name" :loot="el" />
            </div>
        </div>
        <change-divine :itemById="finalResultStore.extendedCalculatedResult(invitationById)" class="center" />
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useInvitationStore } from '../store/invitationStore';
import { useUtilityStore } from '../store/utilityStore';
import { Invitation, ElementById } from '../store/types';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import MyInput from "../components/UI/MyInput.vue";
import MySelect from "../components/UI/MySelect.vue";
import Loot from '../components/Loot.vue';
import ChangeDivine from '../components/ChangeDivine.vue';
import { useFinalResultStore } from '../store/finalResultStore';

const finalResultStore = useFinalResultStore()
const invitationStore = useInvitationStore()
const utilityStore = useUtilityStore()
const route = useRoute()
const { invitationById } = storeToRefs(invitationStore)

onMounted(() => {
    utilityStore.filterById<Invitation>(route.params.id as string, {
        array: invitationStore.invitations,
        value: invitationById
    })
})

</script>

<style scoped lang="scss">
.section {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;

    &__name {
        color: var(--my-main-color);
        font-size: 24px;
        margin-bottom: 10px;
    }

    &__content {
        width: 100%;

        &:nth-child(-n + 2) {
            display: grid;
            grid-template-rows: repeat(2, auto);
        }

        @media (max-width:1366px) {
            &:nth-child(-n + 2) {
                display: block;
            }
        }
    }

    &__loot {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-area: 2 / 1 / 3 / 3;
        margin-top: 10px;

        @media (max-width:1366px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width:1200px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width:767px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width:525px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    &__sets {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media (max-width:767px) {
            flex-wrap: nowrap;
            flex-direction: column;
            width: 300px;
            margin: 0 auto;
        }
    }

    &__element {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;

        &:first-child {
            width: 100%;
            justify-content: center;
            margin-bottom: 5px;
        }

        @media (max-width:1366px) {
            &:first-child {
                margin: 10px 0 5px 0;
            }
        }


        @media (max-width:767px) {
            margin-right: 0;
            margin-bottom: 10px;
        }

        select {
            margin-left: 5px;
        }
    }

}

.center {
    width: 100%;
}

.name {
    margin-right: 5px;
    font-size: 20px;
    color: var(--my-main-color);
}
</style>../store/dada../store/rename