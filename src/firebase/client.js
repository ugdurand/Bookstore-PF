import {initializeApp} from "firebase/app"

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDua-a0yWDBh0WLRklzo0YoCc-sS3SKv08",
  authDomain: "bookstore-9b386.firebaseapp.com",
  projectId: "bookstore-9b386",
  storageBucket: "bookstore-9b386.appspot.com",
  messagingSenderId: "569902638543",
  appId: "1:569902638543:web:a9c8580dbbdbcca1fd5eba",
  measurementId: "G-QWM3KP5PPR"

};

 

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);