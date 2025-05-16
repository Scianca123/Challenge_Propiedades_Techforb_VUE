import { ref } from 'vue';
import axios from 'axios';

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
      const response = await axios.get('http://localhost:3000/building', {params: filters});
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