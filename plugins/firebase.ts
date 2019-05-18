import firebase from 'firebase'

  const config = {
    apiKey: 'AIzaSyAXZWSNaEMQxbiQ4kLyGZ5yF1rf8oLXgUE',
    authDomain: 'spajam-2019-pre.firebaseapp.com'
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL
  };

  firebase.initializeApp(config);

export default firebase;

// import { NuxtContext } from 'nuxt';
// export default ({}: NuxtContext, inject: (key: string, value: object) => void): void => {

//   const config = {
//     // apiKey: process.env.FIREBASE_API_KEY,
//     // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     // databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL
//   };

//   firebase.initializeApp(config);
//   // firebase.auth().signInAnonymously();

//   inject('firebase', firebase);
// };
