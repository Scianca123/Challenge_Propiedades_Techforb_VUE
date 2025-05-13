<script></script>  

<template>
    <footer class="footer">
        <div class="footer__overlay"></div>
        <div class="page-container footer__content">
            content
        </div>
    </footer>
</template>   

<style scoped lang="scss">
    .footer{
        height: 378px;
        background-image: url('@/assets/images/footerImg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-position: center 39%;
        position: relative;
        &__overlay{
            position: absolute;
            background-color: rgba(54, 81, 150, 0.5); 
            width: 100%;
            height: 100%;
            z-index: 0;
        }
        &__content{
            position: relative;
            z-index: 3;
        }
    }
</style>