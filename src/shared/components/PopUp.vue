<script setup lang="ts">
import { usePopUp } from '../composables/usePopUp';

const {openWindow,closePopUp}= usePopUp();


</script>


<template>
    <div class="popUp"
     :class="{ 'popUp--disabled': !openWindow }"
    >
        <div class="popUp__overlay"  @click="closePopUp"></div>
        <div class="popUp__content">
            <slot></slot>
        </div>
    </div>
</template>


<style lang="scss">
 @use '@/styles/variables' as *; 
    .popUp{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1003;
        display: flex;
        justify-content: center;
        align-items: center;
        &--disabled{
            display: none;
        }
        &__overlay{
            width: 100%;
            height: 100%;
            position: relative;
            background-color: rgba(0, 0, 0, 0.5);
        }
        &__content{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            width: auto;
            height: auto;
            background-color: $color-backgounts; 
            border-radius: 10px;
        }
    }

</style>