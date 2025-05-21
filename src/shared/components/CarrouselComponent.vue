<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import type { Property } from '../../features/properties/interfaces/property';
    import Card from './Card.vue';
    import DotsPager from './dotsPager.vue';

    const props=defineProps<{
        items:Property[],
    }>()
    let visibleProperties=ref<Property[]>([]);
    let itemsPerPage:number=4;
    let currentPage= ref(0);

    function onPageChange(page: number): void {
        currentPage.value = page;
        updateVisibleProperties();
    }

    function updateVisibleProperties(): void {
        const startIndex = currentPage.value * itemsPerPage;
        visibleProperties.value = props.items.slice(startIndex, startIndex + itemsPerPage);
    }
    onMounted(() => {
        updateVisibleProperties();
    });
    watch(() => props.items, () => {
        updateVisibleProperties();
    });
</script>

<template>
    <div class="caroucel">
        <div class="caroucel__container">
                <Card v-for="item in visibleProperties" :key="item.id" :property="item"></Card>
        </div>
        <!-- <app-dotspager [itemsPerPage]="itemsPerPage" [totalItems]="properties().length"  (pageChange)="onPageChange($event)"></app-dotspager> -->
        <DotsPager  v-if="items.length > 0" :itemsPerPage=itemsPerPage :totalItems=items.length  @pageChange="onPageChange" ></DotsPager>
    </div>
</template>
<style lang="scss">
    .caroucel{
        display: flex;
        flex-direction: column;
        align-items: center;
        &__container{
            display: flex;
            flex-direction: column;
            gap: 38px;
            max-width: 100%;
            overflow: hidden;
            margin-bottom: -20px;
            padding: 0px 25px 70px 25px;
            @media(min-width:992px){
                flex-direction: row;
            }
        }
    }
</style>