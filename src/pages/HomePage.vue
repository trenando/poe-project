<template>
    <div class="home">
        <h1 class="home__header">Poe Calculator</h1>
        <p class="home__text">Hello, this is a calculator project where you can calculate
            your profit from some activities in Path of Exlie.</p>
        <span class="home__subtext">Follow the links below</span>
        <div>
            <my-button class="home__btn" @click="$router.push('/bosses')">Bosses</my-button>
            <my-button class="home__btn" @click="$router.push('/invitations')">Invitations</my-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import MyButton from '../components/UI/MyButton.vue';

</script>

<style scoped lang="scss">
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    &__header {
        font-size: 50px;
        color: var(--my-main-color);
        margin-bottom: 30px;
    }

    &__text {
        font-size: 26px;
        color: var(--my-main-color);
        margin-bottom: 15px;
    }

    &__subtext {
        font-size: 26px;
        color: var(--my-main-color);
        margin-bottom: 15px;
    }

    &__btn {
        width: 250px;
        margin-right: 50px;

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>