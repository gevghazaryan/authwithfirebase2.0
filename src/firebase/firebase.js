import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBdmECvV69BQwnVuUw97l5Vgym6QNHgiM8",
    authDomain: "goingsuperpro.firebaseapp.com",
    databaseURL: "https://goingsuperpro.firebaseio.com",
    projectId: "goingsuperpro",
    storageBucket: "",
    messagingSenderId: "150971011588"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.database()

export {
    db,
    auth
}
