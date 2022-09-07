<template>
  <div>
    <ul v-if="post" class="transactions">
      <li class="transactions__list" v-if="editPost">
        <p class="name">{{ post.title }}</p>
        <p class="amount">{{ post.amount }}$</p>
        <span @click="deleteUser(post.id)" class="close-icon"></span>
        <button class="transactions__btn" @click="editPost = !editPost">
          Редактировать
        </button>
      </li>
      <li class="transactions__list" v-else>
        <div class="transactions__name">
          <h5>Transaction name:</h5>
          <input type="text" v-model="updateTitle" />
        </div>
        <div class="transactions__amount">
          <h5>Amount ($):</h5>
          <input type="number" v-model="updateAmount" />
        </div>
        <button class="transactions__back" @click="editPost = !editPost">
          Вернуться
        </button>
        <button @click="handlePostUpdate(post.id)" class="transactions__btn">
          Cохранить
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { useStore } from "vuex";

const store = useStore();

const updateTitle = ref(post.title);
const updateAmount = ref(post.amount);

const handlePostUpdate = async (id) => {
  const newPostUpdate = {
    title: updateTitle.value,
    amount: updateAmount.value,
  };
  try {
    await updateDoc(doc(firestore, "transactions", id), newPostUpdate);
    editPost.value = true;
    store.dispatch("fetchPosts");
  } catch (err) {
    console.log(err.message);
  }
};

const editPost = ref(true);
const { post } = defineProps(["post"]);
const emit = defineEmits(["successId", "successUpdate"]);

const deleteUser = () => {
  emit("successId", post.id);
};
</script>

<style>
.transactions__list h5 {
  margin: 0;
}
.transactions__list div {
  margin: 0 8vh;
}
.transactions__btn {
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 0 10px;
}
.transactions__back {
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 10px;
}

.close-icon {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  display: block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 5px solid #1f9751;

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
  background-color: #1f9751;
  transition: all 0.3s ease;
  cursor: pointer;
}
.close-icon:hover {
  background-color: rgb(217, 0, 0);
  border: 2px solid rgb(217, 0, 0);
}
</style>