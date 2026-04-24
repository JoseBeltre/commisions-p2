import { ref } from 'vue';
import type { CalculateCommissionRequestDTO, CalculateCommissionResponseDTO } from '../types/commission';

export function useCommission() {
  const loading = ref(false);
  const error = ref<string | null>(null);
  const result = ref<number | null>(null);

  const calculateCommission = async (dto: CalculateCommissionRequestDTO) => {
    loading.value = true;
    error.value = null;
    result.value = null;
    
    try {
      const response = await fetch('http://localhost:3001/api/commission/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dto)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Error al calcular la comisión');
      }
      
      result.value = data.commission;
    } catch (e: any) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    calculateCommission,
    loading,
    error,
    result
  };
}
