<template>
    <header-component />
    <main class="main">
        <router-view></router-view>
    </main>
    <footer-component />
</template>

<script setup lang="ts">
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";


</script>

<style scoped lang="scss">
.main {
    height: calc(100vh - 100px);
    background-color: rgb(255, 244, 225);
}
</style>
