# Calculadora de Comisiones de Ventas

## Descripción general

Este proyecto consiste en una aplicación web que permite a vendedores calcular de forma rápida y precisa la comisión que recibirán en función de sus ventas mensuales y el país en el que operan.

El sistema busca ofrecer transparencia en el cálculo de comisiones y facilitar la comprensión de los ingresos generados.

---

## Contexto de negocio

* Los vendedores operan en distintos países.
* Cada país posee un esquema de comisión diferente.
* Los vendedores ingresan:

  * Ventas totales
  * Descuentos aplicados
* El sistema calcula automáticamente la comisión según las reglas definidas por país.

---

## Reglas de negocio

Las comisiones se calculan de la siguiente forma:

* **India**
  `(Ventas Totales – Descuentos) × 10%`

* **Estados Unidos (US)**
  `(Ventas Totales – Descuentos) × 15%`

* **Reino Unido (UK)**
  `(Ventas Totales – Descuentos) × 12%`

---

## Tecnologías utilizadas

### Backend

* Node.js
* Express.js
* TypeScript

### Frontend

* Nuxt (Vue 3)
* TypeScript

---

## Arquitectura

El proyecto implementa una versión simplificada de **Clean Architecture**, separando claramente responsabilidades en distintas capas.

### Capas principales

1. **Presentación**

   * Manejo de HTTP (controllers, rutas)
   * Interacción con el usuario (frontend)

2. **Aplicación**

   * Casos de uso
   * DTOs
   * Mappers

3. **Dominio**

   * Entidades
   * Interfaces
   * Lógica de negocio pura

4. **Infraestructura**

   * Implementaciones específicas (estrategias por país)

---

## Estructura del proyecto

### Backend

```
backend/
├── src/
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   ├── presentation/
│   └── routes/
```

### Frontend

```
frontend/
├── pages/
├── components/
├── composables/
└── types/
```

---

## API

### Endpoint

**POST** `/api/commission/calculate`

### Request

```json
{
  "country": "US",
  "total": 1000,
  "discount": 100
}
```

### Response

```json
{
  "commission": 135
}
```

---

## Validaciones

* `total >= 0`
* `discount >= 0`
* `discount <= total`
* `country` debe ser válido

---

## Ejecución del proyecto

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

---

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

Servidor disponible en:

```
http://localhost:3000
```

---

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación disponible en:

```
http://localhost:3001
```

---

## Captura de la aplicación

> Incluir aquí una imagen de la aplicación mostrando:
>
> * Selección de país
> * Entrada de datos
> * Resultado de la comisión

---

## Repositorio

El código fuente se encuentra organizado siguiendo buenas prácticas de arquitectura y tipado, incluyendo separación de responsabilidades y uso de patrones de diseño.

---

## Consideraciones

* No se utiliza base de datos
* No hay autenticación
* Arquitectura diseñada para ser extensible
* Se implementa Strategy Pattern para soportar múltiples países
