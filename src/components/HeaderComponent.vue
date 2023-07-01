<template>
    <header class="header">
        <div class="header__home" @click="$router.push('/')">Home</div>
        <nav class="nav">
            <my-button @click="$router.push('/bosses')">Bosses</my-button>
            <my-button @click="$router.push('/invitations')">Invitations</my-button>
            <my-button @click="$router.push('/maps')">Maps</my-button>
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
        font-size: 20px;
        color: var(--my-main-color);
        cursor: pointer;
        padding: 10px;
        background-color: var(--my-second-color);
        border: 1px solid var(--my-main-color);
        border-radius: 10px;

        &:hover {
            color: var(--my-second-color);
            background-color: var(--my-main-color);
            border: 1px solid var(--my-second-color);
        }
    }
}

.nav {
    button {
        margin-left: 5px;
        font-size: 16px;
    }
}
</style>