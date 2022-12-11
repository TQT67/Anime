import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBrIpt1eEliioGY3nUNKt0H3OiS62qqSZc",
  authDomain: "vuighe-95f4c.firebaseapp.com",
  databaseURL: "https://vuighe-95f4c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vuighe-95f4c",
  storageBucket: "vuighe-95f4c.appspot.com",
  messagingSenderId: "790641320517",
  appId: "1:790641320517:web:9cccb20eae14293f74f92c",
  measurementId: "G-RJXY7JDGZ3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
