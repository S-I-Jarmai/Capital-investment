import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// const firebaseConfig = {
//   apiKey: "AIzaSyCPKx72-qYwrNMxd1ZgvSATKVZz1Y1RrDc",
//   authDomain: "capitalinvestment-1e129.firebaseapp.com",
//   projectId: "capitalinvestment-1e129",
//   storageBucket: "capitalinvestment-1e129.appspot.com",
//   messagingSenderId: "992948557034",
//   appId: "1:992948557034:web:5776e7e60ed85fda37b393"
// };


// Initialize Firebase

// //Firebase Database Used
// const firebaseConfig = {
//   apiKey: "AIzaSyBoia9q49A1oOLk7Iw3eoB98o803xuF3N4",
//   authDomain: "kudafinance.firebaseapp.com",
//   projectId: "kudafinance",
//   storageBucket: "kudafinance.appspot.com",
//   messagingSenderId: "362519628167",
//   appId: "1:362519628167:web:b8d3f5ac7644c5526aeb22"
// };
 
const firebaseConfig = {
  apiKey: "AIzaSyDmUNt6fYzPH2mK3yG-v6swI8No7iXGv0U",
  authDomain: "kfinance-63cef.firebaseapp.com",
  projectId: "kfinance-63cef",
  storageBucket: "kfinance-63cef.appspot.com",
  messagingSenderId: "1037024361502",
  appId: "1:1037024361502:web:f8913b394c5de47e8a820f",
  measurementId: "G-C50Z2HL6EF"
};

const app = initializeApp(firebaseConfig);
export default app;
export const db = getFirestore(app)
export const auth = getAuth()
export const storage = getStorage(app)