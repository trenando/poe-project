<template>
    <div class="home">
        <h1 class="home__header">Poe Calculator</h1>
        <p class="home__text">Hello, this is a calculator project where you can calculate
            your profit from some activities in Path of Exlie.</p>
        <span class="home__subtext">Follow the links below</span>
        <div class="home__btns">
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
    min-height: inherit;

    &__header {
        font-size: 50px;
        color: var(--my-main-color);
        margin-bottom: 30px;

        @media(max-width: 1200px) {
            font-size: 40px;
        }

        @media(max-width: 767px) {
            font-size: 30px;
        }
    }

    &__text {
        font-size: 26px;
        color: var(--my-main-color);
        margin-bottom: 15px;

        @media(max-width: 1200px) {
            font-size: 24px;
            padding: 0 10px;
        }

        @media(max-width: 767px) {
            font-size: 20px;
        }
    }

    &__subtext {
        font-size: 26px;
        color: var(--my-main-color);
        margin-bottom: 15px;

        @media(max-width: 1200px) {
            font-size: 24px;
        }

        @media(max-width: 767px) {
            font-size: 20px;
        }
    }

    &__btns {
        @media(max-width: 767px) {
            display: flex;
            flex-direction: column;
        }
    }

    &__btn {
        width: 250px;
        margin-right: 50px;

        &:last-child {
            margin-right: 0;
        }

        @media(max-width: 767px) {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }
}
</style>