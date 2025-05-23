<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const selected = defineModel<'comprar' | 'alquilar'>('selected')

const seleccionar = (opcion: 'comprar' | 'alquilar') => {
  selected.value = opcion
}
</script>

<template>
    <div class="Toggle">
        <div :class="['Toggle__half', selected === 'comprar' && 'Toggle__half--selected']">
            <button 
            :class="['Toggle__btn', selected === 'comprar' && 'Toggle__btn--selected']"
            @click="seleccionar('comprar')"
            >{{ t('Toggle.comprar') }}</button>
        </div>
        <div :class="['Toggle__half', selected === 'alquilar' && 'Toggle__half--selected']">
            <button class="Toggle__btn"
            :class="['Toggle__btn', selected === 'alquilar' && 'Toggle__btn--selected']"
            @click="seleccionar('alquilar')"
            >{{ t('Toggle.alquilar') }}</button>  
        </div>
            
    </div>
</template>

<style lang="scss">
 @use '@/styles/variables' as *;
.Toggle{
    background-color: $color-text-buttom-white;
    border-radius: 5px;
    display: flex;
    min-width: 200px;
    &__half{
        background-color: rgba(0, 0, 0, 0.39);
        width: 50%;
        display: flex;
        justify-content: center;
        position: relative;
        cursor: pointer;
        &--selected{
            background-color: $color-text-buttom-white;
        }
        &:first-child {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }

        &:last-child {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
    &__btn{
        background-color:transparent;
        border: 0 none;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px 16px;
        color:$color-Text-grey;
        font-weight: 500;
        @extend %text-three;
        
        &--selected{
            background-color: $color-text-buttom-white;
            position: relative;
            padding-bottom: 20px;
            color:$color-Text-black;
            &::after{
                content: '';
                position: absolute;
                bottom: 9px;
                left: 50%;
                transform: translateX(-50%);
                width: 100%; 
                height: 4px;
                background-color: $color-buttom-primary;
                border-radius: 10px;
            }
        }
    }
    
}
</style>