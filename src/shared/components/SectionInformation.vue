<script setup lang="ts">
import CardInformation from './CardInformation.vue';



</script>

<template>
    <section class="seccion-information">
    <div class="seccion-information__container-img">
        <h2 class="seccion-information__container-img__title">Tu propiedad soñada, a solo un click!</h2>
        <img src="@/assets/images/Building.png" alt="" class="seccion-information__container-img__img" />
    </div>
    <div class="seccion-information__container_details">
        <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="src/assets/iconos/ticCardInformationIcon.svg"></CardInformation>
        <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="src/assets/iconos/pigIcon.svg"></CardInformation>
        <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="src/assets/iconos/HandshakeIcon.svg"></CardInformation>
        <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="src/assets/iconos/HomeIcon.svg"></CardInformation>
    </div>
</section>
</template>

<style lang="scss">
    @use '@/styles/variables' as *;
    .seccion-information{
    display: flex;
    flex-direction: column;
    @media(min-width:992px){
        flex-direction: row;
    }
    background: linear-gradient(
        45deg, 
      #A6B2D3 0%, 
      $color-backgounts-one 100%
        );
        &__container-img{
            height: 743px;
            border-top-right-radius: 200px;
            @media(min-width:992px){
                width: 58%;
            }
            &__img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-right-radius: 200px; 
            }
            &__title{
                position: absolute;
                width:206px;
                padding-top: 50px;
                padding-left: 140px;
                font-family: $font-titles;
                font-weight: 600;
                color: $color-Text-blue-dark;
                font-size: 28px;
                line-height: 100%;
                vertical-align: middle;
            }
        }
        &__container_details{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 35px;
            padding: 35px 0px 35px 0px;
            @media(min-width:992px){
                width: 42%;
                padding: 0;
            }
        }
}
</style>