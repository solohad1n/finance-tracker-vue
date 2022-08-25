import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '../firebase/config'

export const signup = async (email, password, name) => {

  const error = ref(null)

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(response)

  }
  catch (err) {
    error.value = err.message
  }

  return { error }
}
