<template>
  <div>
    <h3>Add a Transaction</h3>
    <form @submit.prevent="handleSubmit">
      <label>
        <span>Transaction name:</span>
        <input type="text" required v-model="title" />
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

import { firestore } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { user } from "../../composables/useUser";
import { useStore } from "vuex";

const store = useStore();

const title = ref("");
const amount = ref("");
const error = ref(null);

const handleSubmit = async () => {
  const newPost = {
    userId: user.value.uid,
    title: title.value,
    amount: Number(amount.value),
    createdAt: new Date(),
  };
  try {
    await addDoc(collection(firestore, "transactions"), newPost);
    title.value = "";
    amount.value = "";
    store.dispatch("fetchPosts");
  } catch (err) {
    error.value = err.message;
  }
};
</script>

<style>
</style>