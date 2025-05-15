<script></script>  

<template>
    <footer class="footer">
        <div class="footer__overlay"></div>
        <div class="page-container footer__content">
            <div class="footer__content__head-container">
                <div class="footer__content__head-container__logo-container">
                    <img src="@/assets/iconos/LOGOIcon.svg" alt="" class="footer__content__head-container__logo-container__logo">
                </div>
                <nav class="footer__content__head-container__nav">
                    <ul class="footer__content__head-container__nav__list">
                        <li ><a href="/" class="footer__content__head-container__nav__list__itemHead">Inicio</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">servicios</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Registrarse</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Nosotros</a></li>
                    </ul>
                    <ul class="footer__content__head-container__nav__list">
                        <li ><a href="/" class="footer__content__head-container__nav__list__itemHead">Secciones</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Alquilar</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Comprar</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Inverciones</a></li>
                    </ul>
                    <ul class="footer__content__head-container__nav__list">
                        <li ><a href="/" class="footer__content__head-container__nav__list__itemHead">Propiedades</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Departamentos</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Casas</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Terrenos</a></li>
                    </ul>
                    <ul class="footer__content__head-container__nav__list">
                        <li ><a href="/" class="footer__content__head-container__nav__list__itemHead">Contacto</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Informacion</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Ayuda</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item">Mail</a></li>
                    </ul>
                    <ul class="footer__content__head-container__nav__list">
                        <li ><a href="/" class="footer__content__head-container__nav__list__itemHead">Seguinos</a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item"><img src="@/assets/iconos/instagramIcon.svg" alt=""></a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item"><img src="@/assets/iconos/FacebookIcon.svg" alt=""></a></li>
                        <li ><a href="/" class="footer__content__head-container__nav__list__item"><img src="@/assets/iconos/LinkedinIcon.svg" alt=""></a></li>
                    </ul>
                </nav>
        
            </div>
            <div class="footer__content__social-container">
                <p class="footer__content__social-container__text">Copyright ©2023 | Todos los derechos reservados</p>
            </div>
        </div>
    </footer>
</template>   

<style scoped lang="scss">
    @use '@/styles/variables' as *;
    .footer{
        height: auto;
        background-image: url('@/assets/images/footerImg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-position: center 39%;
        position: relative;
        @media(min-width:992px){
            height: 378px;
        }
        &__overlay{
            position: absolute;
            background-color: rgba(33, 50, 94, 0.678); 
            width: 100%;
            height: 100%;
            z-index: 0;
        }
        &__content{
            position: relative;
            z-index: 3;
            padding-top: 35px;
            padding-bottom: 40px;
            &__head-container {
                display: grid;
                grid-template-columns: 1fr; // por defecto mobile
                gap: 20px;
                padding-bottom: 20px;
                justify-items: center;


                @media (min-width: 992px) {
                    grid-template-columns: auto repeat(5, 1fr); // logo + 5 columnas
                    align-items: start;
                    justify-items: end;
                }

                &__logo-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    @media (min-width: 992px) {
                        justify-content: flex-start;
                    }

                    &__logo {
                        width: 135px;
                        height: 62px;
                    }
                }

                &__nav {
                    display: grid;
                    grid-template-columns: 1fr;
                    justify-items: center;
                    gap: 20px;

                    @media (min-width: 992px) {
                        display: contents;
                    }

                    &__list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    
                        &__itemHead {
                            @extend %title-h4;
                            margin-bottom: 10px;
                            display: block;
                            text-decoration: none;
                            color: $color-text-buttom-white;
                        }

                        &__item {
                            font-size: 14px;
                            margin: 6px 0;
                            display: block;
                            text-decoration: none;
                            @extend %text-one;
                            color: $color-text-buttom-white;
                            img {
                                width: 24px;
                                height: 24px;
                            }
                        }
                    }
                }
            }

            &__social-container {
            margin-top: 50px;
            border-top: 0.8px solid $color-text-buttom-white;
            padding-top: 10px;
            text-align: start;

                &__text {
                    font-size: 12px;
                    @extend %text-two;
                    color: $color-text-buttom-white;
                    margin: 0;
                }
            }
        }
    }
</style>