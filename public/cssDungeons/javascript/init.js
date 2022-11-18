// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDT0S8liOczXbju_bgBTSBkn5TU0kRUzn8',
  authDomain: 'home-39049.firebaseapp.com',
  projectId: 'home-39049',
  storageBucket: 'home-39049.appspot.com',
  messagingSenderId: '583686183012',
  appId: '1:583686183012:web:53db102f814283743de771',
  measurementId: 'G-REJEG91W8K'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')
