import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCtsdOOHnGN8esnV9-nHSC0fsf-WoucgC0",
  authDomain: "gatogrisjoyeria.firebaseapp.com",
  projectId: "gatogrisjoyeria",
  storageBucket: "gatogrisjoyeria.appspot.com",
  messagingSenderId: "615018643467",
  appId: "1:615018643467:web:410692b533798c807fc70e",
  measurementId: "G-5GP0L9M3KL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ 'prompt': 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;
