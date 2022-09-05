<template>
  <form class="login-form" @submit.prevent="handleSubmit">
    <h2>SignUp</h2>
    <label>
      <span>Email:</span>
      <input v-model="email" type="email" />
    </label>
    <label>
      <span>Display Name:</span>
      <input v-model="displayName" type="text" />
    </label>
    <label>
      <span>Password:</span>
      <input v-model="password" type="password" />
    </label>
    <button class="btn">SignUp</button>
  </form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { signup } from "../../composables/useSignup";

const router = useRouter();

const email = ref("");
const password = ref("");
const displayName = ref("");

const handleSubmit = async () => {
  const { error } = await signup(
    email.value,
    password.value,
    displayName.value
  );

  if (!error.value) {
    router.push("/");
  } else {
    console.log(error.value);
  }
};
</script>

<style>
@import "../../assets/css/SignUp.css";
</style>