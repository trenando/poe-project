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
    height: 100%;
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
