import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAmvj0d8fBqeupGD9HNjUgeQin1tMYs60c",
    authDomain: "booksanta2-787b6.firebaseapp.com",
    projectId: "booksanta2-787b6",
    storageBucket: "booksanta2-787b6.appspot.com",
    messagingSenderId: "235707933930",
    appId: "1:235707933930:web:50b957555b9433b9146393"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();