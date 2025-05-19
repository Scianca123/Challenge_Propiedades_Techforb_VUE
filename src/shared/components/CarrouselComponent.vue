<script setup lang="ts">
import type { Property } from '../../features/properties/interfaces/property';
import Card from './Card.vue';

    const props= defineProps<{
        items:Property[],
    }>()
    // const items=[{
    //     id:1,
    // location: "mar del plata ",
    // numberOfBathroomsNumber: null ,
    // numberOfBedrooms: null,
    // numberOfDepartaments:4,
    // price:20000,
    // propertyType: "casa",
    // squareMeters:225,
    // state: "terminado",
    // titulo:"titulo",
    // typeOfBusiness: "comprar",
    // urlImg:"no",
    // },
    // {
    //     id:1,
    // location: "mar del plata ",
    // numberOfBathroomsNumber: null ,
    // numberOfBedrooms: null,
    // numberOfDepartaments:4,
    // price:20000,
    // propertyType: "casa",
    // squareMeters:225,
    // state: "terminado",
    // titulo:"titulo",
    // typeOfBusiness: "comprar",
    // urlImg:"no",
    // }]
</script>
<template>
    <div class="caroucel">
        <div class="caroucel__container">
                <Card v-for="item in items" :key="item.id" :property="item"></Card>
        </div>
        <!-- <app-dotspager [itemsPerPage]="itemsPerPage" [totalItems]="properties().length"  (pageChange)="onPageChange($event)"></app-dotspager> -->
    </div>
</template>
<style lang="scss">
</style>