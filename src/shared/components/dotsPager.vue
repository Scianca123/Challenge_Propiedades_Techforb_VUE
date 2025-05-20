<script setup lang="ts">
    const props= defineProps<{
        itemsPerPage:number,
        totalItems:number
    }>();
    const emits= defineEmits<{
        pageChange:number,
    }>()

    function getPages():number[]{
        return Array.from({ length: Math.ceil(totalItems.value / itemsPerPage.value) }, (_, i) => i);
    }

</script>

<template>
<div class="dotspager">
    @for(page of pages; track page ) {
            <div class="dotspager__dot"
            v-for="page in pages" :key="page.id" 
            [class.dotspager__dot--selected]="page === currentPage"
            (click)="onClick(page)"
            >
            </div>
        }
   </div>    
</template>

<style lang="scss"></style>