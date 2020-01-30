import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDMboPPc0z-mfIeuEs8fcXaIX83kRfwGVA",
  authDomain: "tasks-ecba3.firebaseapp.com",
  databaseURL: "https://tasks-ecba3.firebaseio.com",
  projectId: "tasks-ecba3",
  storageBucket: "tasks-ecba3.appspot.com",
  messagingSenderId: "599614758003",
  appId: "1:599614758003:web:f49298df2f1119df4a5e06"
};

firebase.initializeApp(config);

export default firebase;
