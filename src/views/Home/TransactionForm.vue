<template>
  <div>
    <h3>Add a Transaction</h3>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Transaction name:</span>
        <input type="text" required v-model="name" />
      </label>
      <label>
        <span>Amount ($):</span>
        <input type="text" required v-model="amount" />
      </label>
      <button>Add Transaction</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const amount = ref("");

const handleSubmit = () => {
  console.log(name.value);
  console.log(amount.value);
};
</script>

<style>
</style>