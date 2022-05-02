import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { config } from "./config";
// import Axios from 'axios'

const app = firebase.initializeApp({
    apiKey: "AIzaSyClOmFiIbO35e2SsfBgkfmNwOksKvN4d4U",
    authDomain: "auth-development-3beee.firebaseapp.com",
    projectId: "auth-development-3beee",
    storageBucket: "auth-development-3beee.appspot.com",
    messagingSenderId: "268559773718",
    appId: "1:268559773718:web:42d4d3de6e0e7a773b0537"
 
});
// firebaseConfig();

var db = app.firestore();

export const auth = app.auth();
// export { Axios}
export default app;
export {db};