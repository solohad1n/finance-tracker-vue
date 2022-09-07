<template>
  <div v-if="!user">
    <h1>Добро пожаловать</h1>
    <h2>Авторизуйтесь:</h2>
    <button><router-link to="/login">Login</router-link></button>
  </div>
  <div v-else>
    <h1>Главная страница</h1>
    <h2>Домашняя страница:</h2>
    <button><router-link to="/home">Home</router-link></button>
  </div>
</template>

<script setup>
import { user } from "../../composables/useUser";
</script>

<style>
h1 {
  text-align: center;
}
</style>