import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    authDomain: process.env.REACT_APP_GOOGLE_API_AUTHDOMAIN,
    projectId: process.env.REACT_APP_GOOGLE_API_PROJECTID,
    storageBucket: process.env.REACT_APP_GOOGLE_API_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_GOOGLE_API_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_GOOGLE_API_APPID
};

let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();