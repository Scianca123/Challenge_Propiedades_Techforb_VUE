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
        grid-template-rows: minmax(300px,1fr) auto;
        grid-template-areas:
                            "content"
                            "footer";
        min-height: 100%;
        &__header{
            position: fixed;
        }
        &__content{
            grid-area: content;
            background-color: yellow;
        }
        &__footer{
            grid-area: footer;
           
        }
    }
</style>