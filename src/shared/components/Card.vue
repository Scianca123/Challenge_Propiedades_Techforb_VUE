<script setup lang="ts">
import type { Property } from '../../features/properties/interfaces/property';

 defineProps<{
    property:Property
 }>() 
</script>

<template>
<div class="card">
    <div class="card__imgContainer">
        <img :src=property.urlImg alt="" class="card__img" />
    </div>
    <div class="card__title">
        <h4 class="card__title__text">
            {{property.titulo}}
        </h4>
        <label for="" class="card__title__price">
            USD {{property.price}}
        </label>
    </div>
    <div class="card__detailsContainer">
        
          <div v-if="property.numberOfDepartaments==null" class="card__detailsContainer__detail"><img src="@/assets/iconos/betsIcon.svg" alt=""><span class="card__detailsContainer__detail__number">{{property.numberOfBedrooms}}</span></div>
          <div v-if="property.numberOfDepartaments==null" class="card__detailsContainer__detail"><img src="@/assets/iconos/bathroomIcon.svg" alt=""><span class="card__detailsContainer__detail__number">{{property.numberOfBathroomsNumber}}</span></div>  
       
          <div v-else class="card__detailsContainer__detail"><img src="@/assets/iconos/buildingIcon.svg" alt=""><span class="card__detailsContainer__detail__number">{{property.numberOfDepartaments}}</span></div>
          <div v-else class="card__detailsContainer__detail"><span class="card__detailsContainer__detail__state">{{property.state}}</span></div> 
        
        <div class="card__detailsContainer__detail"><img src="@/assets/iconos/rulerIcon.svg" alt=""><span class="card__detailsContainer__detail__number">{{property.squareMeters}}m2</span></div>
    </div>
   <div class="card__locationContainer">
        <p class="card__locationContainer__text">{{property.location}}</p>
   </div>
</div>
</template>

<style lang="scss">
@use '@/styles/variables' as *;
.card{
    display: flex;
    flex-direction: column;
    width: 228.85px;
    height: 299.58px;
    background-color: $color-text-buttom-white;
    box-shadow: $box-shadow-card;
    border-radius: 3.47px;
    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 15px;
        margin-right: 15px;
        &__text{
            margin-right: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-family:$font-content;
            font-weight: 400;
            font-size: 11.1px;
            line-height: 100%;
            vertical-align: middle;
        }
        &__price{
            white-space: nowrap;
            font-weight: 500;
            font-size: 13.87px;
            line-height: 100%;
            vertical-align: middle;
            color: $color-Text-black;
        }
    }
    &__imgContainer{
        width: 229px; 
        height: 200px; 
        overflow: hidden; 
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom-right-radius:12.48px ;
    }
    &__img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__detailsContainer{
        display: flex;
        justify-content: space-between;
        margin-left: 15px;
        margin-right: 15px;
        &__detail{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 53.84px;
            height: 21.96px;
            max-width:53.84px ;
            max-height: 53.84px;
            background-color: $color-backgounts-one;
            border-radius: 7.8px;
            gap:2.83px;
            padding: 3px;
            &__number{
                font-family: $font-content;
                font-weight: 400;
                font-size: 7.8px;
                line-height: 100%;
                vertical-align: middle;
                
            }
            &__state{
                font-family: $font-content;
                font-weight: 400;
                color: $color-text-buttom-blue;
                font-size: 6px;
            }
        }
    }
    &__locationContainer{
        margin-left: 15px;
        margin-right: 15px;
        &__text{
            font-family: $font-content;
            font-weight:400;
            font-size: 9.71px;
            line-height: 100%;
            vertical-align: middle;
            color: $color-gray-primary;
        }
    }
}

</style>