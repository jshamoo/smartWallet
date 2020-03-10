<template>
  <div class="txn">
    <h3>Transactions</h3>
    <div class="txn-table">
      <div class="txn-header txn-row">
        <div class="txn-data">Date</div>
        <div class="txn-data">Description</div>
        <div class="txn-data">Amount</div>
        <div class="txn-data">Category</div>
      </div>
      <div class="txn-row" v-for="record in trans" v-bind:key="record.id">
        <div class="txn-data">{{ record.date }}</div>
        <div class="txn-data">${{ record.amount }} </div>
        <div class="txn-data">{{ record.description }}</div>
        <select class="txn-data">
          <option>None</option>
          <option>A</option>
          <option>B</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'TransactionList',
    props: {
      trans: {
        type: Array
      }
    }
  }
</script>
