import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBwFZYBRrfijnpEu3hqilxzcMi4YNaUn_o",
    authDomain: "mobile-app-70972.firebaseapp.com",
    databaseURL: "https://mobile-app-70972-default-rtdb.firebaseio.com",
    projectId: "mobile-app-70972",
    storageBucket: "mobile-app-70972.appspot.com",
    messagingSenderId: "334801241362",
    appId: "1:334801241362:web:06a61ea8efb78cef8f1fcb",
    measurementId: "G-7Z90SSLGFW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase };