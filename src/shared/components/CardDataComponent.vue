<script setup lang="ts">
    const props=defineProps<{
        typeCard:'Total-card'|'flex',
        titleData:string,
        valueData?:number|null|undefined,
        iconData?:string|null|undefined,
    }>();
</script>

<template>
   <div class="card-total" v-if="props.typeCard==='Total-card'">
        <span for="" class="card-total__data">
            <span class="card-total__data__title">{{props.titleData}}</span>
            <span  class="card-total__data__value">$ {{props.valueData}}</span>
        </span>
        <span for="" class="card-total__icon" >
            <img v-if="props.iconData" :src=props.iconData alt="" class="card-total__icon__img">
        </span>
    </div>

    <div class="card-total flex"  v-if="props.typeCard==='flex'">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/styles/variables' as *;
    .card-total{ 
        display: flex;
        flex: 1 1 0;
        justify-content: space-between;
        border: 1px solid $color-gray-300;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
        align-items: center;
        min-width: 200px;
        
        &__data{
            display: flex;
            flex-direction: column;
            gap: 10px;
            &__title{
                font-size: 17px;
                font-weight: 500;
                color: $color-gray-primary;
            }
            &__value{
                font-size: 17px;
                font-weight: 600;
                color: $color-Text-black;
            }
            
        }
        &__icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            background-color: #fcf9fa;
            border-radius: 2px;
        
            &__img{
                width: 28px;
                height: 24px;
            }
        }
    }
</style>