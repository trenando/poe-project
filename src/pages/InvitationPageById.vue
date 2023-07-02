<template>
    <section class="section">
        <div class="section__names">
            <div class="section__name">Invitations</div>
            <div class="section__name">Sets</div>
        </div>
        <div v-for="invitationElement in invitationById" class="section__content">
            <div v-if="!Array.isArray(invitationElement)" class="section__element">
                <div v-for="element in invitationElement" class="section__item">
                    <span class="name">{{ element.name }}</span>
                    <my-input v-model.number="element.value"
                        @input="utilityStore.changeCostValue<UnitById>(element, invitationElement)" />
                    <my-select v-if="element.options" v-model="element.selectedValue" :options="element.options" />
                </div>
            </div>
            <loot v-else v-for="el in invitationElement" :key="el.name" :loot="el" />
        </div>
        <change-divine class="center" />
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useInvitationStore } from '../store/invitationStore';
import { useUtilityStore } from '../store/utilityStore';
import { Invitation, UnitById } from '../store/Types';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import MyInput from "../components/UI/MyInput.vue";
import MySelect from "../components/UI/MySelect.vue";
import Loot from '../components/Loot.vue';
import ChangeDivine from '../components/ChangeDivine.vue';

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
        width: 50%;

        &:nth-child(4) {
            width: 100%;
            display: grid;
            grid-area: 2 / 1 / 3 / 3;
            grid-template-columns: repeat(4, 1fr);
            margin-top: 10px;
        }
    }

    &__element {
        display: grid;
        grid-template-columns: repeat(2, 1fr) auto;
    }

    &__item {
        display: flex;
        justify-content: center;
        align-items: center;
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
</style>