<template>
  <div>
    <h1>Smart Wallet</h1>
    <div class="app">
     <TransactionList v-bind:trans="trans" v-bind:categories="categories" ></TransactionList>
    </div>
    <div class="category">
      <h3>Budget category</h3>
      <BudgetCategoryList v-bind:categories="categories"></BudgetCategoryList>
    </div>
  </div>
</template>

<script>
  import TransactionList from './components/TransactionList';
  import BudgetCategoryList from './components/BugetCategoryList';
  export default {
    name: 'App',
    components: { TransactionList, BudgetCategoryList },
    props: {
      trans: {
        type: Array
      },
      categories: {
        type: Array
      },
    }
  }
</script>
