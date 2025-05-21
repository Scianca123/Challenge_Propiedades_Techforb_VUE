<script setup lang="ts">

const props=defineProps<{
    title:string,
    description:string,
    urlImageIcon:string,
}>();

</script>

<template>
    <div class="card-information">
    <div class="card-information__container-icon">
        <img :src=urlImageIcon alt=""  class="card-information__container-icon__icon">
    </div>
    <div class="card-information__container-info">
        <p class="card-information__container-info__title">{{title}}</p>
        <p class="card-information__container-info__description">{{description}}</p>
    </div>
</div>
</template>

<style lang="scss">
    @use '@/styles/variables' as *;
    .card-information{
        display: flex;
        width: 307px;
        height:90px;
        
        &__container-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(180deg, #273A6A 0%,#0D245F 100%);
            width: 86px;
            height: 89px;
            border-radius: 12px 0px 0px 12px;
            &__icon{

            }
        }
        &__container-info{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: linear-gradient(180deg, #F2F3F8 0%,#F9FAFE 100%);
            width: 100%;
            border-radius: 0px 12px 12px 0px;
            gap: 6px;
            &__title{
                margin: 0;
                font-family: $font-content;
                color:$color-blue-card-info;
                font-weight: 500;
                font-size: 14px;
                line-height: 100%;
                vertical-align: bottom;
            }
            &__description{
                margin: 0;
                color: $color-gray-primary;
                font-family: $font-content;
                font-weight: 500;
                font-size: 11px;
                line-height: 100%;
                vertical-align: bottom;
            }
        }
    }
</style>