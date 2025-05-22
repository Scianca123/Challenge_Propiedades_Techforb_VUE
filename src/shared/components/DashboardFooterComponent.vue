<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container">
        <p  class="footer__container__text">© 2025 Hously. Design with  by Shreethemes.</p>
    </div>
</footer>
</template>

<style lang="scss">
    @use '@/styles/variables' as *;
    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: 100%;
        bottom:  0;
        background-color:  #ffffff;
        border-top: solid 1px $color-gray-300;
        z-index: 1000;
        &__container{
            padding: 2%;
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            &__text{
                margin: 0;
                color:$color-gray-primary;
            }
            
        }
    }
</style>