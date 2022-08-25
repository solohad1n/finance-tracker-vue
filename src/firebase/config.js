import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBFbw1fWiKwn2EKEf1df4am2iXH6BmqAec",
  authDomain: "finance-tracker-vue.firebaseapp.com",
  projectId: "finance-tracker-vue",
  storageBucket: "finance-tracker-vue.appspot.com",
  messagingSenderId: "730353950548",
  appId: "1:730353950548:web:59626062d403ee1eaeb2c1"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app)
