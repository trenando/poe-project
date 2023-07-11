<template>
    <section class="section">
        <div class="block" v-for="boss in bossesStore.bosses" :key="boss.id">
            <my-button class="button" @click="$router.push(`/bosses/${boss.id}`)">
                {{ boss.name }}
            </my-button>
        </div>
    </section>
</template>

<script setup lang="ts">
import MyButton from "../components/UI/MyButton.vue";
import { useBossesStore } from "../store/bossesStore";

const bossesStore = useBossesStore();

</script>

<style scoped lang="scss">
.section {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: inherit;

    @media (max-width:767px) {
        padding: 0;
    }

    @media (max-width:525px) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.block {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button {
    font-size: 24px;
}
</style>
