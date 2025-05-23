<script setup lang="ts">
    import { useAuth } from '../../core/store/useAuth';
    import SectionAnaliticsComponent from './SectionAnaliticsComponent.vue';
    import SectionTotalData from './SectionTotalData.vue';

        const {user} =useAuth();
        const userName= user.name;
</script>

<template>
    <section class="main-content">
        <div class="main-content__header">
            <h5 class="main-content__header__title">
            Hello, {{userName}}
            </h5>
            <h6 class="main-content__header__title2"> welcome back!</h6>
        </div>
        <div class="main-content__seccion-total-data">
            <SectionTotalData></SectionTotalData>
        </div>
        <div class="main-content__seccion-analytics">
            <SectionAnaliticsComponent></SectionAnaliticsComponent>
        </div>
    </section>
</template> 

<style lang="scss">
    @use '@/styles/variables' as *;
    .main-content{
        padding: 2%;
        display: flex;
        flex-direction: column;
        
        &__header{
            margin-bottom: 2%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            &__title{
                margin:0;
                color: $color-Text-black;
                font-size: 16px;
                font-family:$font-titles ;
            }
            
            &__title2{
                margin:0;
                color: $color-gray-primary;
                font-size: 13px;
                font-family: $font-content;
            }
            &__seccion-total-data{
                display: flex;
            }
        }
    }
</style>