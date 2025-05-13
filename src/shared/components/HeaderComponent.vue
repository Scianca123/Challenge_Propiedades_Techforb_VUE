<script setup></script>

<template>
    <header class="header ">
        
        <div class="header__contain page-container">
          <img src="../../assets/iconos/LOGOIcon.svg" alt="" loading="lazy">
          <nav class="header__contain__navbar">
             <ul class="header__contain__navbar__list">
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Propiedades</li>
                <li>login</li>
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
    height:120px;
    &__contain{
      display: flex;
      justify-content: center;
      width: 100%;
      @media(min-width:768px){
        justify-content: space-between;
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
</style>