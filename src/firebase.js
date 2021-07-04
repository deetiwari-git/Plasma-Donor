import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

var firebaseConfig = {
    apiKey: "AIzaSyBeNePRhMxzCv9xLc8nDpAd5tC0E0Xk_-8",
    authDomain: "plasma-donor-web-app.firebaseapp.com",
    databaseURL: "https://plasma-donor-web-app-default-rtdb.firebaseio.com",
    projectId: "plasma-donor-web-app",
    storageBucket: "plasma-donor-web-app.appspot.com",
    messagingSenderId: "1089483323580",
    appId: "1:1089483323580:web:83d5d1307508a70367f8b9"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export { firebase };
export default fireDb.database().ref();
