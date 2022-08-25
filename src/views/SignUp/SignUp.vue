<template>
  <div @submit.prevent="handleSubmit">
    <form class="login-form">
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
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const displayName = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value, displayName.value);
    };

    return {
      email,
      password,
      displayName,
      handleSubmit,
    };
  },
};
</script>

<style>
@import "../../assets/css/SignUp.css";
</style>