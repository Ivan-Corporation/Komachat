import firebase from 'firebase/app'
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBEX8j9_E_YB-8KpkGT7Qutu1OMq9plQkg",
    authDomain: "komachat-f3750.firebaseapp.com",
    projectId: "komachat-f3750",
    storageBucket: "komachat-f3750.appspot.com",
    messagingSenderId: "367361569982",
    appId: "1:367361569982:web:8d62b964039231e6225aef"
}).auth();