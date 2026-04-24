<template>
  <div class="card">
    <h1>Calcular Comisión</h1>
    
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-label">País</label>
        <select v-model="form.country" class="form-select" required>
          <option value="" disabled>Selecciona un país</option>
          <option value="INDIA">India (10%)</option>
          <option value="US">Estados Unidos (15%)</option>
          <option value="UK">Reino Unido (12%)</option>
        </select>
      </div>
      
      <div class="form-group">
        <label class="form-label">Monto Total</label>
        <input 
          type="number" 
          v-model.number="form.total" 
          class="form-input" 
          placeholder="0.00" 
          min="0" 
          step="0.01" 
          required 
        />
        <div v-if="form.total < 0" class="error-message">El monto total debe ser positivo.</div>
      </div>
      
      <div class="form-group">
        <label class="form-label">Descuento</label>
        <input 
          type="number" 
          v-model.number="form.discount" 
          class="form-input" 
          placeholder="0.00" 
          min="0" 
          step="0.01" 
          required 
        />
        <div v-if="form.discount < 0" class="error-message">El descuento debe ser positivo.</div>
        <div v-else-if="form.discount > form.total" class="error-message">El descuento no puede superar el monto total.</div>
      </div>
      
      <button type="submit" class="btn-primary" :disabled="loading || isInvalid">
        {{ loading ? 'Calculando...' : 'Calcular' }}
      </button>
      
      <div v-if="error" class="error-message form-error">
        {{ error }}
      </div>
      
      <div v-if="result !== null && !error" class="result-card">
        <div class="result-label">Comisión Calculada</div>
        <div class="result-value">${{ result.toFixed(2) }}</div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, computed } from 'vue';
import { useCommission } from '../composables/useCommission';
import type { CalculateCommissionRequestDTO } from '../types/commission';

const form = reactive<CalculateCommissionRequestDTO>({
  country: '',
  total: 0,
  discount: 0
});

const { calculateCommission, loading, error, result } = useCommission();

const isInvalid = computed(() => {
  return form.total < 0 || form.discount < 0 || form.discount > form.total || !form.country;
});

const submitForm = () => {
  if (isInvalid.value) return;
  calculateCommission(form);
};

// Clear form-level API errors and result when user changes inputs
watch(form, () => {
  if (error.value) {
    error.value = null;
  }
  if (result.value !== null) {
      result.value = null;
  }
}, { deep: true });
</script>
