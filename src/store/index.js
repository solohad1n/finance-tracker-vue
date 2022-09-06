import { createStore } from 'vuex'
import { firestore } from '../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { user } from '../composables/useUser'

export default createStore({
  state: {
    posts: {
      error: null,
      items: [],
    }
  },
  getters: {
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const documents = []
        const q = query(collection(firestore, 'transactions'), where('userId', '==', user.value.uid))
        const response = await getDocs(q)
        response.docs.flatMap((doc) => {
          documents.push({ ...doc.data(), ...{ id: doc.id } })
        })
        commit('SET_POSTS', { error: null, items: documents })
      } catch (err) {
      }
    }
  },
  modules: {
  }
})
