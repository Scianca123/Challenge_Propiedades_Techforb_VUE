<script setup lang="ts">
import { computed, ref } from 'vue';

    const currentPage=ref(0);
    const props=defineProps<{
        itemsPerPage:number,
        totalItems:number
    }>();
    const emit =defineEmits<{
        (e: 'pageChange', page: number): void
    }>()

    const pages = computed(() =>
        Array.from({ length: Math.ceil(props.totalItems / props.itemsPerPage) }, (_, i) => i)
        );

    function onClick(page: number) {
        currentPage.value=page;
        emit('pageChange', page);
    }

</script>

<template>
    <div class="dotspager">
        <div class="dotspager__dot"
        v-for="page in pages" :key="page" 
        :class="{ 'dotspager__dot--selected': page === currentPage }"
        @click="onClick(page)"
        >
        </div>
   </div>    
</template>

<style lang="scss">
     @use '@/styles/variables' as *;
     .dotspager {
         display: flex;
         gap: 10px; 
         &__dot {
            background-color: $color-turquoise;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &--selected {
                background-color: $color-text-buttom-blue;
            }
         }
     }
</style>