<template>
    <header class="header">
        <my-button @click="$router.push('/')" class="header__home">Home</my-button>
        <nav class="nav">
            <my-button @click="$router.push('/bosses')">Bosses</my-button>
            <my-button @click="$router.push('/invitations')">Invitations</my-button>
        </nav>
    </header>
</template>

<script setup lang="ts">
import MyButton from './UI/MyButton.vue';

</script>

<style scoped lang="scss">
.header {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: var(--header-bg-color);

    &__home {   
        height: 40px;
        font-size: 16px;
    }
}

.nav {
    button {
        margin-left: 5px;
        font-size: 16px;
    }
}
</style>