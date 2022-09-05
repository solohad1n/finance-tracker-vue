import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref } from 'vue'
import { auth } from '../firebase/config'

export const signup = async (email, password, displayName) => {

  const error = ref(null)

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    await updateProfile(response.user, {
      displayName: displayName
    })

  }
  catch (err) {
    error.value = err.message
  }

  return { error }
}
