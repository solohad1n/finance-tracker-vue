import { ref } from "vue";
import { firestore } from '../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { user } from './useUser'

const useCollection = () => {
  const posts = ref([]);
  const error = ref(null);
  const fetchPosts = async () => {
    try {
      const documents = []
      const q = query(collection(firestore, 'transactions'), where('userId', '==', user.value.uid))
      const response = await getDocs(q)

      response.docs.flatMap((doc) => {
        documents.push({ ...doc.data(), ...{ id: doc.id } })
      })

      posts.value = documents


    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, fetchPosts }
}
export default useCollection
