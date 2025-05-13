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
            background-color: rgba(54, 81, 150, 0.5); 
            width: 100%;
            height: 100%;
            z-index: 0;
        }
        &__content{
            position: relative;
            z-index: 3;
            &__head-container {
                display: grid;
                grid-template-columns: 1fr; // por defecto mobile
                gap: 20px;
                padding-bottom: 20px;
                justify-items: end;

                @media (min-width: 600px) {
                    grid-template-columns: repeat(3, 1fr);
                }

                @media (min-width: 992px) {
                    grid-template-columns: auto repeat(5, 1fr); // logo + 5 columnas
                    align-items: start;
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

                    @media (min-width: 600px) {
                    grid-template-columns: repeat(2, 1fr);
                    }

                    @media (min-width: 992px) {
                        display: contents;
                    }

                    &__list {
                    list-style: none;
                    padding: 0;
                    margin: 0;

                        &__itemHead {
                            font-weight: 700;
                            font-size: 16px;
                            margin-bottom: 8px;
                            display: block;
                        }

                        &__item {
                            font-size: 14px;
                            margin: 6px 0;
                            display: block;

                            img {
                            width: 24px;
                            height: 24px;
                            }
                        }
                    }
                }
            }

            &__social-container {
            margin-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            padding-top: 10px;
            text-align: center;

            &__text {
                font-size: 12px;
            }
            }
        }
    }
</style>