<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
</script>

<template>
    <header class="header ">
        
        <div class="header__contain page-container">
          <img class="header__contain__img" src="../../assets/iconos/LOGOIcon.svg" alt="" loading="lazy">
          <nav class="header__contain__navbar">
             <ul class="header__contain__navbar__list">
                <li><ButtonComponent variant="terciario">Inicio</ButtonComponent></li>
                <li><ButtonComponent variant="terciario">Nosotros</ButtonComponent></li>
                <li><ButtonComponent variant="terciario">Propiedades</ButtonComponent></li>
                <li><ButtonComponent variant="secondary"><p class="btn--text-login">Login</p></ButtonComponent></li>
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
      justify-content: center;
      width: 100%;
      @media(min-width:768px){
        justify-content: space-between;
      }
      &__img{
        height: 45px;
        width: 100px;
      }
      &__navbar{
        display: none;
        @media (min-width: 768px){
          display: block;
        }
        &__list{
          display: flex;
          gap: 24px;
          list-style: none;
        }
      }
    }
  }
  .btn--text-login{
    margin: 0px 15px 0px 15px;
 
  }
</style>