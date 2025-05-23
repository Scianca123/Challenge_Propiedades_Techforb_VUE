<script setup lang="ts">
import { useAuth } from '../../core/store/useAuth';

const {user} =useAuth();
const urlPhoto= user.urlPhoto;
</script>
<template>
    <header class="header">
        <div class="header__container">
            <div class="header__container__left">
                <img src="@/assets/iconos/logo-dashboard-Hously.png" alt="">
                <button class="header__container__left__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu size-4"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <div class="header__container__left__search">
                    <img src="@/assets\iconos\iconSearchDark.svg" alt="" class="header__container__left__search__icon">
                    <input type="text" class="header__container__left__search__input" placeholder="Search...">
                </div>
                
            </div>
            <div class="header__container__right">
                <button class="header__container__right__button"><img src="@/assets\iconos\usa.png" alt="" class="header__container__right__button__img"></button>
                <button class="header__container__right__button"><img src="@/assets\iconos\iconNotification.svg" alt="" class="header__container__right__button__img"></button>
                <button class="header__container__right__button"><img :src=urlPhoto alt="" class="header__container__right__button__img"></button>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    @use '@/styles/variables' as *;
    .header{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    &__container{
        padding: 2%;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        &__left{
            display: flex;
            align-items: center;
            gap: 10px;
            &__button{
                background-color: $color-white;
                height: 32px;
                width: 32px;
                border: 0.5px solid $color-gray-200;
                border-radius: 6px;
            }
            &__search{
                height: 32px;
                display: flex;
                align-items: center;
                border-radius: 4px;
                border: 1px solid $color-gray-200;
                padding: 0px 10px 0px 10px;
                &__icon{
                    width: 17px;
                    height: 24px;
                }
                &__input{
                    border: none;
                    background-color:transparent; ;
                }
            }
        }

        &__right{
            display: flex;
            gap: 10px;
            &__button{
                background-color: transparent;
                height: 32px;
                width: 32px;
                border: 0.5px solid $color-gray-200;
                border-radius: 6px;
                padding: 0;
                &__img{
                    border-radius: 6px;
                    width: 100%;
                    height: 100%;
                    
                }
            }
        }
        
    }

}
</style>