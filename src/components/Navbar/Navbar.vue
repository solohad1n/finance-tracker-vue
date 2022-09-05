<template>
  <nav class="navbar">
    <ul v-if="!user">
      <li class="title">Мои Финансы</li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/signup">Signup</router-link></li>
    </ul>
    <ul v-else>
      <li class="title">Мои Финансы</li>
      <li>hello, {{ user.displayName }}</li>
      <li>
        <button className="btn" @click="handleClickLogout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import useLogout from "../../composables/useLogout";
import { user } from "../../composables/useUser";

const { error, logout } = useLogout();
const router = useRouter();

const handleClickLogout = async () => {
  await logout();

  if (!error.value) {
    router.push("/");
  } else {
    console.log(error.value);
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background: #effaf0;
  padding: 20px 10px;
  box-sizing: border-box;
}

.navbar ul {
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  align-items: center;
}

.title {
  margin-right: auto;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.2em;
}

.navbar button,
.navbar a {
  margin-left: 16px;
}

.navbar a {
  color: #333;
  text-decoration: none;
}
</style>