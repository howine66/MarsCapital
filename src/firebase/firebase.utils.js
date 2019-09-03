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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey,objectToAdd) =>{
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef)
  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
  });
  return await batch.commit();
}

 export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map (doc => {
    const { title, items }= doc.data();

    return  {
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  });

  //下面这一步用reduce把array变成以title为property的object
  //NB!!
  return transformedCollection.reduce((accumulator,collection)=> {
    accumulator[collection.title.toLowerCase()] =collection;
    return accumulator;
  }, {});
}
  


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;