import { ref } from 'vue';
import api from '../../../shared/utils/axios';

export function useBuildingsFilter() {
  const buildings = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchBuildings(filters: {
    typeOfBusiness?: string;
    propertyType?: string;
    search?: string;
    numberOfBedrooms?: string;
    minPrice?: number | null ;
    maxPrice?: number | null ;
  }) {
    loading.value = true;
    error.value = null;
    try {
    const response = await api.get('/building', { params: filters });
      buildings.value = response.data;
    } catch (err:any) {
      error.value = err.message || 'Error desconocido';
    } finally {
      loading.value = false;
    }
  }

  return {
    buildings,
    loading,
    error,
    fetchBuildings,
  };
}