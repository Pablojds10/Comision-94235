import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAjHlsJwvlqtIG4hocZ3Wwpc8m5xtlduxM",
  authDomain: "tiendaalbidb.firebaseapp.com",
  projectId: "tiendaalbidb",
  storageBucket: "tiendaalbidb.firebasestorage.app",
  messagingSenderId: "953887170259",
  appId: "1:953887170259:web:c3f85351700c7c5d6f3e26"
}

export const app = initializeApp(firebaseConfig)