import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAfx1cRL9Pi4H-5k7Nwpx1uDIWoaDbz2Es",
  authDomain: "project-67-88d07.firebaseapp.com",
  projectId: "project-67-88d07",
  storageBucket: "project-67-88d07.appspot.com",
  messagingSenderId: "798724714126",
  appId: "1:798724714126:web:28d5e8ef914dd284c423df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
