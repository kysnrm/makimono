import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'makimono-2bffa.firebaseapp.com',
    databaseURL: 'https://makimono-2bffa.firebaseio.com',
    projectId: 'makimono-2bffa',
    storageBucket: 'makimono-2bffa.appspot.com',
    messagingSenderId: '796799774014',
    appId: '1:796799774014:web:e67da8640623e9a98e106f',
    measurementId: 'G-DDN95XQXXF'
  })
}

const db = firebase.firestore()

export { db }
export default firebase
