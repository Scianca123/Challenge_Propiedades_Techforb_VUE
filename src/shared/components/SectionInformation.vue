<script setup lang="ts">
import CardInformation from './CardInformation.vue';



</script>

<template>
    <section class="seccion-information">
        <div class="seccion-information__circles">
           <img src="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848986/circleSectionInformation_zdyyve.svg" alt="" class="seccion-information__circles__circle"> 
           <img src="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848986/circleSectionInformation_zdyyve.svg" alt="" class="seccion-information__circles__circle"> 
           <img src="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848986/circleSectionInformation_zdyyve.svg" alt="" class="seccion-information__circles__circle">
           <img src="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848986/circleSectionInformation_zdyyve.svg" alt="" class="seccion-information__circles__circle"> 
        </div>
        <div class="seccion-information__container-img">
            <h2 class="seccion-information__container-img__title">Tu propiedad soñada, a solo un click!</h2>
            <img src="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848993/Building_ngyh0j.png" alt="" class="seccion-information__container-img__img" />
        </div>
        <div class="seccion-information__container_details">
            <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848472/ticCardInformationIcon_z6ppx4.svg"></CardInformation>
            <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848472/pigIcon_swmnvq.svg"></CardInformation>
            <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848471/HandshakeIcon_ojr4zl.svg"></CardInformation>
            <CardInformation title="Seguridad y Tranquilidad" description="Tu seguridad y la de tu familia" urlImageIcon="https://res.cloudinary.com/dikzg9cpq/image/upload/v1747848472/HomeIcon_mrgwxn.svg"></CardInformation>
        </div>
    </section>
</template>

<style lang="scss">
    @use '@/styles/variables' as *;
    .seccion-information{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -2;
    background: linear-gradient(
        90deg, 
        #c7d1eb94 0%, 
      $color-backgounts-one 100%
        );
    @media(min-width:992px){
            flex-direction: row;
    }
        &__circles{
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            &__circle {
                position: absolute;
                &:nth-child(1) {
                    width: 468px;
                    height: 468px;
                    top: 50%;
                     
                    @media(min-width:992px){
                        right:-75px; 
                        top: -75px;
                    }
                }
                &:nth-child(2) {
                    top: 425px;
                    right:75px;
                    width: 120px;
                    height: 120px;
                }
                &:nth-child(3) {
                    bottom: -50px;
                    right:-70px;
                    width: 156px;
                    height: 156px;
                }
                &:nth-child(4) {
                    bottom: -50px;
                    right:200px;
                    width: 120px;
                    height: 120px;
                }
            }
            
        }
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