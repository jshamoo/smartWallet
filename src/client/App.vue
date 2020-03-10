<template>
  <div>
    <h1>Smart Wallet</h1>
    <div class="app">
      <TransactionList v-bind:trans="trans"></TransactionList>
    </div>
    <div class="category">
      <h3>Budget category</h3>
      <!-- <BudgetCategoryList></BudgetCategoryList> -->
    </div>
  </div>
</template>

<script>
  import TransactionList from './components/TransactionList';
  export default {
    name: 'App',
    components: { TransactionList },
    props: {
      trans: {
        type: Array
      }
    }
  }
</script>
