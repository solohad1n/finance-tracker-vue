<template>
  <div>
    <ul class="transactions">
      <li v-for="post in posts.items" :key="post.id">
        <p class="name">{{ post.title }}</p>
        <p class="amount">{{ post.amount }}$</p>
        <span @click="deleteUser(post.id)" class="close-icon"></span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { user } from "../../composables/useUser";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { useStore } from "vuex";

const store = useStore();

const deleteUser = (id) => {
  const docRef = doc(firestore, "transactions", id);
  deleteDoc(docRef)
    .then(() => {
      store.dispatch("fetchPosts");
    })
    .catch((err) => console.log(err.message));
};

const posts = computed(() => store.state.posts);

onMounted(() => {
  store.dispatch("fetchPosts");
});
</script>

<style>
.close-icon {
  display: block;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  border: 7px solid rgb(7, 97, 1);
  border-radius: 100%;
  background: -webkit-linear-gradient(
      -45deg,
      transparent 0%,
      transparent 46%,
      white 46%,
      white 56%,
      transparent 56%,
      transparent 900%
    ),
    -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white 46%, white
          56%, transparent 56%, transparent 100%);
  background-color: rgb(7, 97, 1);
  transition: all 0.3s ease;
  cursor: pointer;
}
.close-icon:hover {
  background-color: rgb(217, 0, 0);
  border: 2px solid rgb(217, 0, 0);
}
</style>