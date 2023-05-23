import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhb_Kb7VmSoqLC9w-ifFwTsMHSsDoEQlg",
    authDomain: "team-voting-app-84539.firebaseapp.com",
    databaseURL: "https://team-voting-app-84539-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-84539",
    storageBucket: "team-voting-app-84539.appspot.com",
    messagingSenderId: "894507989635",
    appId: "1:894507989635:web:7ca8c6fe09c9d1415279b6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();