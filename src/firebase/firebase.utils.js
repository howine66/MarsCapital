import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDORsE-xOArRW7bICYOr-LLW5v37JGCDgo",
    authDomain: "ecommercecrwn.firebaseapp.com",
    databaseURL: "https://ecommercecrwn.firebaseio.com",
    projectId: "ecommercecrwn",
    storageBucket: "",
    messagingSenderId: "471960553180",
    appId: "1:471960553180:web:17531e58d1039450"
  };

  firebase.initializeApp(config);
  export const auth =firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;