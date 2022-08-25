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

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
};
</script>

<style>
@import "../../assets/css/Login.css";
</style>