import firebase from 'firebase/app';
import 'firebase/storage';


  var firebaseConfig = {
    apiKey: "AIzaSyDXTlAK7_xLURZQszMNast3gq3bWNITSrE",
    authDomain: "herbapka.firebaseapp.com",
    databaseURL: "https://herbapka.firebaseio.com",
    projectId: "herbapka",
    storageBucket: "herbapka.appspot.com",
    messagingSenderId: "540924039191",
    appId: "1:540924039191:web:68a087ce4680adcef34c52"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();


  export default { storage, firebase};