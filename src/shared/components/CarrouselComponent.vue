<script setup lang="ts">
import type { Property } from '../../features/properties/interfaces/property';
import Card from './Card.vue';
import DotsPager from './dotsPager.vue';

    defineProps<{
        items:Property[],
    }>()
</script>

<template>
    <div class="caroucel">
        <div class="caroucel__container">
                <Card v-for="item in items" :key="item.id" :property="item"></Card>
        </div>
        <!-- <app-dotspager [itemsPerPage]="itemsPerPage" [totalItems]="properties().length"  (pageChange)="onPageChange($event)"></app-dotspager> -->
         <!-- <DotsPager :itemsPerPage=0 :totalItems=items.length ></DotsPager> -->
    </div>
</template>
<style lang="scss">
    .caroucel{
    display: flex;
    flex-direction: column;
    align-items: center;
    &__container{
        display: flex;
        gap: 38px;
        max-width: 100%;
        overflow: hidden;
        margin-bottom: -20px;
        padding: 0px 25px 70px 25px;
    }
}
</style>