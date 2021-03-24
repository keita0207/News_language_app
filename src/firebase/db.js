import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAqTytsAqZswkrYa_-1VhmgfRqWI4N7bPU",
    authDomain: "blove-efce2.firebaseapp.com",
    projectId: "blove-efce2",
    storageBucket: "blove-efce2.appspot.com",
    messagingSenderId: "961661612954",
    appId: "1:961661612954:web:fd275ad645cad1329cc023",
    measurementId: "G-8ZP87254KB"
  };

  // Initialize Firebase
let app

if(firebase.apps.length === 0){
  app =  firebase.initializeApp(firebaseConfig);
} else{
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export {db,auth}

