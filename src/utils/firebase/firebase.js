// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZ-PUh7vbZJ2gXcj8mGBif-Ia8rvC_Ec4',
  authDomain: 'hairtalk-e936d.firebaseapp.com',
  projectId: 'hairtalk-e936d',
  storageBucket: 'hairtalk-e936d.appspot.com',
  messagingSenderId: '999090521947',
  appId: '1:999090521947:web:564c0774733c1ce266fc7e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
