<script setup lang="ts">
import CardDataComponent from './CardDataComponent.vue';
import SalesDataList from '../../features/properties/components/SalesDataList.vue';

const mockReport = {
  Yearly: {
    report: {
      via_Website: 25,
      via_team_member: 15,
      via_agents: 30,
      via_Social_media: 10,
      via_Digital_marketing: 12,
      via_others: 8,
    }
  },
  Monthly: {
    report: {
      via_Website: 20,
      via_team_member: 18,
      via_agents: 25,
      via_Social_media: 14,
      via_Digital_marketing: 15,
      via_others: 8,
    }
  },
  Weekly: {
    report: {
      via_Website: 10,
      via_team_member: 10,
      via_agents: 35,
      via_Social_media: 20,
      via_Digital_marketing: 15,
      via_others: 10,
    }
  },
};

</script>

<template>

    <section class="seccion-analytics">
        <div class="seccion-analytics__top">
            <div class="seccion-analytics__top__left">
                <CardDataComponent :typeCard="'flex'" :titleData="'Revenue Analytics'"></CardDataComponent>
            <!-- <app-card-analytics [title]="'Revenue Analytics'"> 
                    <select class="seccion-analytics__top__left__select" option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
            <app-chart content  style="width: 100%;">contenido</app-chart></app-card-analytics>  -->
            </div>
            <div class="seccion-analytics__top__right">
                <CardDataComponent :typeCard="'flex'" :titleData="'Revenue Analytics'">
                    <SalesDataList    title="Sales Data" :report="mockReport"></SalesDataList>
                </CardDataComponent>
                <!-- <app-card-analytics [title]="'Sales Data'"> 
                    <select class="seccion-analytics__top__left__select" option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select><p content>contenido</p>
                </app-card-analytics>  -->
            </div>
        
        </div>
        <div class="seccion-analytics__bottom">
            <div class="seccion-analytics__bottom__left">
                <CardDataComponent :typeCard="'flex'" :titleData="'Revenue Analytics'"></CardDataComponent>
                <!-- <app-card-analytics [title]="'Area Map'"> <p option class="optionExample">Last update 5 days ago</p><p content>contenido</p></app-card-analytics> -->
            </div>
            <div class="seccion-analytics__bottom__medium">
                <CardDataComponent :typeCard="'flex'" :titleData="'Revenue Analytics'"></CardDataComponent>
                <!-- <app-card-analytics [title]="'Recent Transections'"> <p option>View orders</p><p content>contenido</p></app-card-analytics> -->
            </div>
            <div class="seccion-analytics__bottom__right">
                <CardDataComponent :typeCard="'flex'" :titleData="'Revenue Analytics'"></CardDataComponent>
                <!-- <app-card-analytics [title]="'Area Map'"> <p option>See More</p><p content>contenido</p></app-card-analytics> -->
            </div>
        </div>
    </section>

</template>

<style lang="scss">
    .seccion-analytics{
        display: flex;
        flex-direction: column;
        background-color:transparent;
        gap: 15px;
        margin: 15px 0 15px 0;
        &__top{
            display: flex;
            gap: 15px;
            &__left{
                width: 75%;
                &__select{
                        padding: 8px 40px 8px 12px;
                        border-radius: 4px;
                        border: 1px solid #ccc;
                        &:focus {
                        outline: none;
                        }
                }
            }
            &__right{
                width: 25%;
            }
        }
        &__bottom{
            gap: 15px;
            display: flex;
            &__left{
                width: 20%;
            }
            &__medium{
                width: 60%;
            }
            &__right{
                width: 20%;
            }
            
        }
    }
</style>