<script setup lang="ts">
import ButtonComponent from '../components/ButtonComponent.vue';
import { useAuth } from '../../core/store/useAuth';
import { usePopUp } from '../composables/usePopUp';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const auth = useAuth();
const router = useRouter()
const {openPopUp}=usePopUp();

function openWindowLogin(){
  openPopUp();
}
function handleLoginLogoutClick() {
  if (auth.user) {
    auth.logout(router);
  }
}
</script>

<template>
    <header class="header ">
        <div class="header__contain page-container">
          <img class="header__contain__img" src="../../assets/iconos/LOGOIcon.svg" alt="" >
          <nav class="header__contain__navbar">
             <ul class="header__contain__navbar__list">
                <li class="header__contain__navbar__list__item"><ButtonComponent variant="terciario">{{t('Header.inicio')}}</ButtonComponent></li>
                <li class="header__contain__navbar__list__item"><ButtonComponent variant="terciario">{{ t('Header.nosotros') }}</ButtonComponent></li>
                <li class="header__contain__navbar__list__item"><ButtonComponent variant="terciario">{{ t('Header.propiedades') }}</ButtonComponent></li>
                <li>
                  <ButtonComponent 
                    variant="secondary"
                    @clicked="auth.user ? handleLoginLogoutClick() : openWindowLogin()"
                  ><p class="btn--text-login"> {{ auth.user ? t('Header.salir') :  t('Header.login') }}</p></ButtonComponent>
                </li>
             </ul>
          </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: fixed;
    width: 100%;
    height:150px;
    z-index: 1000;
    &__contain{
      display: flex;
      justify-content: space-between;
      width: 100%;
      &__img{
        height: 45px;
        width: 100px;
      }
      &__navbar{
        &__list{
          display: flex;
          gap: 24px;
          list-style: none;
          &__item{
            display: none;
            @media (min-width: 992px){
              display: block;
            }
          }
        }
      }
    }
  }
 
  .btn--text-login{
    margin: 0px 15px 0px 15px;
 
  }
</style>