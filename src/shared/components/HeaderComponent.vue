<script setup></script>

<template>
    <header class="header ">
        
        <div class="header__contain page-container">
          <!-- <img src="" alt=""> -->
          <h1>img</h1>
          <ul>
              <li>hola</li>
              <li>hola</li>
              <li>hola</li>
          </ul>
        </div>
        
    </header>
</template>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    position: fixed;
    width: 100%;
    height:120px;
    &__contain{
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>