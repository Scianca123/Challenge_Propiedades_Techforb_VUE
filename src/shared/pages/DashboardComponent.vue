<script setup lang="ts">
import DashboardFooterComponent from '../components/DashboardFooterComponent.vue';
import DashboardHeader from '../components/DashboardHeader.vue';
import MainContent from '../components/MainContent.vue';


</script>
<template>
 <div class="dashboard">
    <DashboardHeader></DashboardHeader>
  <div class="dashboard__layout">
      <!-- <app-main-content class="dashboard__layout__main">
        <RouterView></RouterView>
      </app-main-content> -->
      <MainContent>
        <RouterView></RouterView>
      </MainContent>
  </div>
   <DashboardFooterComponent></DashboardFooterComponent>
</div>
</template>
<style lang="scss">
  .dashboard{
    width: 100%;
    height: 100%;
    &__layout{
        padding-top: 70px;
        position: relative;
    }
    
  }
</style>