import firebase from 'firebase.js';

const firebaseConfig = {
    apiKey: "AIzaSyAgt_NHA1ZpV3WhExc90V0quyGMr_s4wQE",
    authDomain: "app-pacientes-34258.firebaseapp.com",
    projectId: "app-pacientes-34258",
    storageBucket: "app-pacientes-34258.appspot.com",
    messagingSenderId: "416412203189",
    appId: "1:416412203189:web:c57003e8698cf84baaa6fc"
};

let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()