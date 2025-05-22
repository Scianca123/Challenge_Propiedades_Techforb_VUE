<script setup lang="ts"></script>

<template>
   <section class="total-data">
    <!-- <app-card-total-data [titleData]="'Total'" [valueData]="'2534'" [iconData]="'assets/iconos/CashIcon.svg'" ></app-card-total-data>
    <app-card-total-data [titleData]="'Total'" [valueData]="'2534'" [iconData]="'assets/iconos/CashIcon.svg'" ></app-card-total-data>
    <app-card-total-data [titleData]="'Total'" [valueData]="'2534'" [iconData]="'assets/iconos/CashIcon.svg'" ></app-card-total-data>
    <app-card-total-data [titleData]="'Total'" [valueData]="'2534'" [iconData]="'assets/iconos/CashIcon.svg'" ></app-card-total-data>
    <app-card-total-data [titleData]="'Total'" [valueData]="'2534'" [iconData]="'assets/iconos/CashIcon.svg'" ></app-card-total-data> -->
</section>
</template>

<style lang="scss">
    .total-data{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 15px;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    &>*{
        min-width: 0;
    }
}
</style>