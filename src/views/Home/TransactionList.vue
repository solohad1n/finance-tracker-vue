<template>
  <div>
    <ul class="transactions">
      <li v-for="post in posts" :key="post.id">
        <p class="name">{{ post.title }}</p>
        <p class="amount">{{ post.amount }}$</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import useCollection from "../../composables/useCollection";

const { posts, error, fetchPosts } = useCollection();

onMounted(() => {
  fetchPosts();
});
</script>

<style>
</style>