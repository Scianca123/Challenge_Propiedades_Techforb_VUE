<script setup lang="ts">
import CarrouselComponent from './CarrouselComponent.vue';
import { useBuildingsFilter } from '../../features/properties/composables/useBuildingsFilter';


const props=defineProps<{
    title:string,
    label:string
}>();

const { buildings,loading } = useBuildingsFilter();

</script>

<template>
<section class="seccion-explore">
    <h1 class="seccion-explore__title">
        {{title}}
    </h1>
    <p class="seccion-explore__label">
        {{label}}
    </p>
    <CarrouselComponent  :items= "buildings" ></CarrouselComponent>
    <p v-if="loading">cargando....</p>
</section>

</template>

<style lang="scss">
@use '@/styles/variables' as *;
.seccion-explore{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    padding-bottom: 50px;
    &__title{
        max-width: 500px;
        text-align: center;
        @extend %title-h1;
    }
    &__label{
        font-weight: 400;
        font-family: $font-titles;
        font-size: 16px;
        color: $color-label-gray;
        margin-bottom: 80px;
    }
}
</style>