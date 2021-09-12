import firebase from 'firebase'






const firebaseConfig = {
    apiKey: "AIzaSyAPhPs5NGsJoIhzCXRVS8vBI7yYNUvG4CY",
    authDomain: "discord-clone-18775.firebaseapp.com",
    projectId: "discord-clone-18775",
    storageBucket: "discord-clone-18775.appspot.com",
    messagingSenderId: "667813421114",
    appId: "1:667813421114:web:521ead3d56b552181c9503",
    measurementId: "G-PBG80717TR"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;