<template>
  <CommissionForm />
</template>

<script setup lang="ts">
import CommissionForm from '../components/CommissionForm.vue';

// Use head logic for SEO
useHead({
  title: 'Calculadora de Comisiones',
  meta: [
    { name: 'description', content: 'Calcula comisiones de ventas según las reglas del país seleccionado de forma dinámica.' }
  ]
})
</script>
