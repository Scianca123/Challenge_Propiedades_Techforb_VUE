<script setup lang="ts">
import HeaderComponent from '@/shared/components/HeaderComponent.vue';
import FooterComponent from '@/shared/components/FooterComponent.vue';
import SectionFiltersComponent from '@/shared/components/SectionFiltersComponent.vue';
import PopUp from '../components/PopUp.vue';
import { useAuth } from '../../core/store/useAuth';
import { GoogleLogin } from 'vue3-google-login';
import { usePopUp } from '../composables/usePopUp';
import SectionExplorer from '../components/SectionExplorer.vue';
import SectionInformation from '../components/SectionInformation.vue';
import { useRouter } from 'vue-router';

const auth = useAuth();
const {closePopUp}=usePopUp();
const router= useRouter();

function closeWindowLogin(){
  closePopUp();
}

const handleLoginSuccess = async (response: any) => {
  const { credential } = response
  try {
    await auth.loginWithGoogle(credential);
    closeWindowLogin();
    router.push("/Dashboard");
  } catch (err) {
    console.error('Error en login con Google:', err)
  }
}


</script>

<template>
    <div class="home ">
        <PopUp > 
            <GoogleLogin
                    v-if="!auth.user"
                    :callback="handleLoginSuccess"
                  />
        </PopUp>
        <section class="home__header">
            <HeaderComponent></HeaderComponent>
        </section>
        <section class="home__content">
            <SectionFiltersComponent></SectionFiltersComponent>
            <SectionExplorer title="Explora nuestras propiedades exclusivas." label="Las propiedades que buscás, en un solo lugar"></SectionExplorer>
            <SectionInformation></SectionInformation>
            <SectionExplorer title="Oportunidades de inversión" label="Explora Nuestra Oferta de Complejos Residenciales"></SectionExplorer>
        </section >
        <section class="home__footer">
            <FooterComponent></FooterComponent>
        </section>
        

    </div>
</template>

<style lang="scss">
    .home{
        display: grid;
        grid-template-rows: minmax(300px,1fr) auto;
        grid-template-areas:
                            "content"
                            "footer";
        min-height: 100%;
        &__header{
            position: fixed;
            z-index: 1000;
        }
        &__content{
            grid-area: content;
           
        }
        &__footer{
            grid-area: footer;
            z-index: 1001;
        }
    }
</style>