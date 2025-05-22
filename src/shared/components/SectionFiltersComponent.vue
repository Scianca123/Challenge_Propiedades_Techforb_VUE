<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import ToggleComponent from './ToggleComponent.vue';
import { useBuildingsFilter } from '../../features/properties/composables/useBuildingsFilter';
import type { Property } from '../../features/properties/interfaces/property';
const typeOfBusiness = ref<'comprar' | 'alquilar'>('alquilar');
const propertyType = ref('');
const search = ref('');
const numberOfBedrooms = ref('');
const priceRange = ref('');
const [minPrice, maxPrice] = parsePriceRange(priceRange.value);
const buildingsFilters= useBuildingsFilter();
const buildings= ref<Property[]>([]);

onMounted(async() => {
    await buildingsFilters.fetchBuildings({
      typeOfBusiness: typeOfBusiness.value || undefined,
      propertyType: propertyType.value || undefined,
      search: search.value || undefined,
      numberOfBedrooms: numberOfBedrooms.value || undefined,
      minPrice,
      maxPrice,
     }) 
  buildings.value= buildingsFilters.buildings;
  console.log(buildings);
  console.log(buildings.value);
})
 watch(
    [typeOfBusiness, propertyType, search, numberOfBedrooms, priceRange],
    async() => {
    await buildingsFilters.fetchBuildings({
      typeOfBusiness: typeOfBusiness.value || undefined,
      propertyType: propertyType.value || undefined,
      search: search.value || undefined,
      numberOfBedrooms: numberOfBedrooms.value || undefined,
      minPrice,
      maxPrice,
    });
    }
);

async function  applyFilters() {
  const [minPrice, maxPrice] = parsePriceRange(priceRange.value);
   await buildingsFilters.fetchBuildings({
        typeOfBusiness: typeOfBusiness.value || undefined,
        propertyType: propertyType.value || undefined,
        search: search.value || undefined,
        numberOfBedrooms: numberOfBedrooms.value || undefined,
        minPrice,
        maxPrice,
  })
  
}
function parsePriceRange(range: string): [number | undefined, number | undefined] {
  if (!range) return [undefined, undefined];
  const [minStr, maxStr] = range.split('-');
  const min = parseInt(minStr.replace('.', ''));
  const max = parseInt(maxStr.replace('.', ''));
  return [min, max];
}
</script>

<template>
    <section class="section-filter">
        <div class="section-filter__overlay"></div>
        <div class="section-filter__container page-container">
            <div class="section-filter__container__title">
                <h1 class="section-filter__container__title__text">Encuentra la Propiedad de tus Sueños con Nosotros</h1>
            </div>
            <div class="section-filter__container__filters">
                <ToggleComponent  v-model:selected="typeOfBusiness"></ToggleComponent>
                <input v-model="search" type="text"  class="section-filter__container__filters__input" placeholder="Buscar por ubicación o palabra clave...">
                <select v-model="propertyType" name="" id="" class="section-filter__container__filters__selects">
                    <option value="" disabled selected>Departamento</option>
                    <option value="departamento">Departamento</option>
                    <option value="edificio">Edificio</option>
                </select>
                <select v-model="numberOfBedrooms" name="" id="" class="section-filter__container__filters__selects">
                    <option value="" disabled selected>Ambientes</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select v-model="priceRange" name="" id="" class="section-filter__container__filters__selects section-filter__container__filters__selects--small-Select">
                    <option value="" disabled >Precio </option>
                    <option value="0-10000">0-10.000</option>
                    <option value="10000-20000">10.000-20.000</option>
                    <option value="20000-30000">20.000-30.000</option>
                    <option value="30000-40000">30.000-40.000</option>
                </select>
                <button class="section-filter__container__filters__btn section-filter__container__filters__btn--light"><img src="@/assets/iconos/iconfilters.svg" alt="search"></button>
                <button @click="applyFilters" class="section-filter__container__filters__btn"><img src="@/assets/iconos/iconSerch.svg" alt="filters"></button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/styles/variables' as *;
    .section-filter{
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-image: url('https://res.cloudinary.com/dikzg9cpq/image/upload/v1747851248/property1_k27cnp.jpg');
        background-size: center;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media(min-width:992px){
            background-size: 110%;
            height: 100dvh;
        }
        &__overlay{
            position: absolute;
            width: 100%;
            height:100%;
            background-color: rgba(0, 0, 0, 0.5); 
        }
        &__container{
            z-index: 3;
            padding-top:200px ;
            padding-bottom: 200px;
            max-width: 1100px;
            &__title{
                &__text{
                    max-width: 639px;
                    font-size: 48px;
                    color: $color-backgounts-white;
                    margin: 30px 0 30px 0;
                    @media(min-width:992px){
                        margin: 0 0 30px 0;
                    }
                }
            }
            &__filters{
                display: flex;
                flex-direction: column;
                gap: 8px;
                @media(min-width:992px){
                    flex-direction:row;
                    justify-content: space-between;
                }
                &__input{
                    padding-left: 15px;
                    border-radius: 5px;
                    border: none;
                    min-height: 41px;
                    @extend %text-three;
                    @media(min-width:992px){
                        width: 398px;
                    }
                }
                &__selects{
                    cursor: pointer;
                    border-radius: 5px;
                    padding: 0 30px 0 15px;
                    color: $color-Text-grey;
                    appearance: none;
                    @extend %text-three;
                    background-image: url('@/assets/iconos/iconSelects.svg');
                    background-repeat: no-repeat;
                    background-position: right 10px center;
                    background-size: 15px; // ajustalo a tu gusto
                    min-height: 41px;
                    &--small-Select{
                        @media(min-width:992px){
                            max-width: 85px;
                        }
                    }
                }
                &__btn{
                    cursor: pointer;
                    border-radius: 5px;
                    background-color: $color-text-buttom-blue;
                    border: 0;
                    min-width: 44px;
                    min-height: 41px;
                    &--light{
                        background-color: $color-text-buttom-white;
                    }
                }
            }
        }
    }
</style>