<script setup lang="ts">
import { ref } from 'vue';
import Chart from '@/shared/components/ChartComponent.vue';

const props= defineProps<{
    title:string, 
    
    // textDetail?:string,
 }>()
type Period = 'Yearly' | 'Monthly' | 'Weekly';
const selectedPeriod = ref<Period>('Yearly');
</script>

<template>
        <div class="RevenueAnalytics">
        <div class="RevenueAnalytics__header">
            <h6 class="RevenueAnalytics__header__title">{{ props.title }}</h6>
            <select v-model="selectedPeriod"  name="" id="" class="RevenueAnalytics__header__period">
                <option value="yearly" selected>Yearly</option>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
            </select>
        </div>
        <div class="RevenueAnalytics__content">
            <Chart />
        </div>
    </div>
</template>

<style lang="scss">
     @use '@/styles/variables' as *;
    .RevenueAnalytics{
        display: flex;
        flex-direction: column;
        width: 100%;
        &__header{
            display: flex;
            justify-content: space-between;
            border-bottom: 0.5px  $color-gray-200 solid ;
            padding-bottom: 10px;
            
            &__title{
                @extend %text-two;
                font-size: 13px;
                margin:0;
            }
            &__period{
                border:  $color-gray-primary 1px solid;
            }
        }
       
    }
</style>