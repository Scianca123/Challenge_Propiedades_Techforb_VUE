<script setup>
import HeaderComponent from '@/shared/components/HeaderComponent.vue';
import FooterComponent from '@/shared/components/FooterComponent.vue';
import SectionFiltersComponent from '@/shared/components/SectionFiltersComponent.vue';
</script>

<template>
    <div class="home ">
        <section class="home__header">
            <HeaderComponent></HeaderComponent>
        </section>
        <section class="home__content">
            <SectionFiltersComponent></SectionFiltersComponent>
            <div>
                <p>hola</p>
            </div>
        </section >
        <section class="home__footer">
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
            z-index: 1000;
        }
        &__content{
            grid-area: content;
           
        }
        &__footer{
            grid-area: footer;
            z-index: 1001;
        }
    }
</style>