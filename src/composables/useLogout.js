import { signOut } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '../firebase/config'

const logout = async () => {
  const error = ref(null)
  try {
    await signOut(auth)
  }
  catch (err) {
    error.value = err.message
  }
}
const useLogout = () => {
  return { error, logout }
}
export default useLogout