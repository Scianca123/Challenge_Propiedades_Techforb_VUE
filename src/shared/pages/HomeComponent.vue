<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<template>
    <div class="home">
        <section class="home__header">
            <HeaderComponent></HeaderComponent>
        </section>
        <section class="home__content">
            <h1>
                contenido
            </h1>
        </section class="home__footer">
        <section>
            <FooterComponent></FooterComponent>
        </section>
        

    </div>
</template>

<style lang="scss">
    .home{
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
                            "seccionHeader"
                            "content"
                            "footer";
        min-height: 100%;
        &__header{
            grid-area: seccionHeader;
        }
        &__content{
            grid-area: content;
            background-color: yellow;
        }
        &__footer{
            grid-area: footer;
            bottom: 0;
        }
    }
</style>