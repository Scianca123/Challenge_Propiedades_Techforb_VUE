<script setup lang="ts">
import { ref } from 'vue';
import type { ReportSalesforPeriod } from '../../sales/interfaces/ReportSalesforPeriod';
 const props= defineProps<{
    title:string, 
    report: ReportSalesforPeriod;
    // textDetail?:string,
 }>()
type Period = 'Yearly' | 'Monthly' | 'Weekly';
const selectedPeriod = ref<Period>('Yearly');
 const formatKey = (key: string): string => {
  const clean = key.replace(/^_/, '').replace(/_/g, ' ');
  return clean.charAt(0).toUpperCase() + clean.slice(1);
};

</script>

<template>
    <div class="salesData">
        <div class="salesData__header">
            <h6 class="salesData__header__title">{{ props.title }}</h6>
            <select v-model="selectedPeriod"  name="" id="" class="salesData__header__period">
                <option value="yearly" selected>Yearly</option>
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
            </select>
        </div>
        <div class="salesData__content">
            <ul class="salesData__content__list">
                <li class="salesData__content__list__item"
                v-for="[key, value] in Object.entries(report[selectedPeriod].report)" 
                :key="key"
                >
                    <div class="salesData__content__report">
                        <div class="salesData__content__report__header">
                            <span class="salesData__content__report__header__data">
                                {{ formatKey(key) }}
                            </span>
                            <span   class="salesData__content__report__header__data">
                               {{ value }}%
                            </span>
                        </div>
                        <div class="salesData__content__report__barPersentage">
                            <div class="fill" :style="{ width: value + '%' }"></div>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    @use '@/styles/variables' as *;
    .salesData{
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
        &__content{
            &__list{
                list-style: none; 
                padding-left: 0;  
                margin: 0;  
                
                &__item{
                    margin:10px 0 10px 0;
                    
                }
            }
            
            &__report{
                &__header{
                    display: flex;
                    justify-content: space-between;
                    &__data{
                        color:$color-gray-primary;
                        font-size: 14px;
                        font-family: $font-content;
                    }
                }
                &__barPersentage{
                    width: 100%;
                    height: 6px;
                    background-color: #e0e0e0; 
                    border-radius: 5px;
                    overflow: hidden;
               
                    > .fill {
                        height: 100%;
                        background-color: rgb(0 166 62); 
                        transition: width 0.4s ease;
                    }
                }
            }
        }
    }
</style>