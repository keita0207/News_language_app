import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


// このプロジェクトのKEY
var firebaseConfig = {
  apiKey: "AIzaSyBEHkYLirgO-aVAw8h7Iwi_mKcrldkVDtw",
  authDomain: "test-f42d1.firebaseapp.com",
  projectId: "test-f42d1",
  storageBucket: "test-f42d1.appspot.com",
  messagingSenderId: "884742739632",
  appId: "1:884742739632:web:4c06a9738c1a473468cd75",
  measurementId: "G-5PSE0BZRS7"
};

// Initialize Firebase
let app

if(firebase.apps.length === 0){
  app =  firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}


// 追加したいFirebaseの機能があれば下記に追加する。
const db = app.firestore()
const auth = firebase.auth()

export { db, auth }

