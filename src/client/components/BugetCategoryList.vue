<template>
  <div class="category-list">
    <div
      class="category-data"
      v-for="category in categories"
      :key="category.id"
    >
      {{ category.name }}
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'BudgetCategoryList',
    props: {
      categories: {
        type: Array
      }
    },
  }
</script>
