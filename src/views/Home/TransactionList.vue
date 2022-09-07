<template>
  <div v-for="post in posts.items" :key="post.id">
    <TransactionListItems
      :post="post"
      @successId="deleteUser"
      @successUpdate="updatePost"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { useStore } from "vuex";
import TransactionListItems from "./TransactionListItems.vue";

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