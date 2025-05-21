import api from '../../../shared/utils/axios';
import type { Property } from '../interfaces/property';
import { defineStore } from 'pinia';

  export const useBuildingsFilter = defineStore("building", {
    state: () => ({
      buildings: [] as Property[],
      loading: false,
      error: null as string | null,
    }),
    actions:{
      async  fetchBuildings(filters: {
        typeOfBusiness?: string;
        propertyType?: string;
        search?: string;
        numberOfBedrooms?: string;
        minPrice?: number | null ;
        maxPrice?: number | null ;
      }) {
        this.loading = true;
        this.error = null;
        try {
        const response = await api.get('/building', { params: filters });
          this.buildings= response.data;
        } catch (err:any) {
          this.error = err.message || 'Error desconocido';
        } finally {
          this.loading = false;
        }
      }
    }
  })
  