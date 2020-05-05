import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5Ux6IPJBd64_f-xyi7VIemO6549W9TxM",
    authDomain: "clothing-shop-f4108.firebaseapp.com",
    databaseURL: "https://clothing-shop-f4108.firebaseio.com",
    projectId: "clothing-shop-f4108",
    storageBucket: "clothing-shop-f4108.appspot.com",
    messagingSenderId: "322600789890",
    appId: "1:322600789890:web:6a91a5d78aa998e207119b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;