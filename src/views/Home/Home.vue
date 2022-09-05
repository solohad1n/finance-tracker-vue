<template>
  <div class="container">
    <div class="content"><TransactionList /></div>
    <div class="sidebar"><TransactionForm /></div>
  </div>
</template>

<script setup>
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { user } from "../../composables/useUser";
import TransactionForm from "./TransactionForm.vue";
import TransactionList from "./TransactionList.vue";

const router = useRouter();

watchEffect(() => {
  if (!user.value) {
    router.push("/");
  }
}, user);
</script>

<style>
@import "../../assets/css/Home.css";
</style>