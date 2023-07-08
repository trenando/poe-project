<template>
    <section class="section">
        <div class="section__names">
            <div class="section__name">Invitations</div>
            <div class="section__name">Sets</div>
        </div>
        <div class="section__content">
            <div v-for="sets in invitationById.sets" class="section__sets">
                <div v-for="element in sets" class="section__element">
                    <span class="name">{{ element.name }}</span>
                    <my-input v-model.number="element.value"
                        @input="utilityStore.changeCostValue<ElementById>(element, sets)" />
                    <my-select v-if="element.options" v-model="element.selectedValue" :options="element.options" />
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

    &__names {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        color: var(--my-main-color);
        font-size: 24px;
        margin-bottom: 10px;
    }

    &__name {
        display: flex;
        justify-content: center;
    }

    &__content {
        width: 100%;

        &:nth-child(-n + 2) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__loot {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-area: 2 / 1 / 3 / 3;
        margin-top: 10px;
    }

    &__sets {
        display: grid;
        grid-template-columns: repeat(2, 1fr) auto;
    }

    &__element {
        display: flex;
        justify-content: center;
        align-items: center;

        select {
            margin-left: 5px;
        }

        &:last-child {
            margin-right: 10px;
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