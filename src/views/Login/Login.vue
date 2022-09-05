<template>
  <div @submit.prevent="handleSubmit">
    <form class="login-form">
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input v-model="email" type="email" />
      </label>
      <label>
        <span>Password:</span>
        <input v-model="password" type="password" />
      </label>
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import useLogin from "../../composables/useLogin";

const router = useRouter();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  const { error, login } = useLogin();
  await login(email.value, password.value);

  if (!error.value) {
    router.push("/home");
  } else {
    console.log(error.value);
  }
};
</script>

<style>
@import "../../assets/css/Login.css";
</style>